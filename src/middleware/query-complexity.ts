import {
  getComplexity,
  simpleEstimator,
  fieldExtensionsEstimator,
} from 'graphql-query-complexity';
import { GraphQLSchema, DocumentNode } from 'graphql';
import { logger } from '../utils/logger';

/**
 * Default query complexity limits per authentication level.
 * These can be overridden via environment variables.
 */
const DEFAULT_MAX_COMPLEXITY_AUTHENTICATED = 1000;
const DEFAULT_MAX_COMPLEXITY_UNAUTHENTICATED = 200;
const DEFAULT_MAX_DEPTH = 10;

/**
 * Resolves the maximum allowed query complexity from environment variables or defaults.
 *
 * @param isAuthenticated - Whether the request is from an authenticated user
 * @returns The maximum allowed complexity score
 */
function getMaxComplexity(isAuthenticated: boolean): number {
  if (isAuthenticated) {
    const envValue = process.env.GRAPHQL_MAX_COMPLEXITY_AUTH;
    if (envValue) {
      const parsed = parseInt(envValue, 10);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }
    return DEFAULT_MAX_COMPLEXITY_AUTHENTICATED;
  }

  const envValue = process.env.GRAPHQL_MAX_COMPLEXITY_UNAUTH;
  if (envValue) {
    const parsed = parseInt(envValue, 10);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }
  return DEFAULT_MAX_COMPLEXITY_UNAUTHENTICATED;
}

/**
 * Resolves the maximum allowed query depth.
 */
function getMaxDepth(): number {
  const envValue = process.env.GRAPHQL_MAX_DEPTH;
  if (envValue) {
    const parsed = parseInt(envValue, 10);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }
  return DEFAULT_MAX_DEPTH;
}

/**
 * Result of a query complexity check.
 */
interface ComplexityCheckResult {
  /** The computed complexity score */
  complexity: number;
  /** Whether the query exceeds the maximum allowed complexity */
  exceeded: boolean;
  /** The maximum allowed complexity for this request */
  maxComplexity: number;
}

/**
 * Computes the complexity of a GraphQL document against a schema.
 *
 * Uses two estimators:
 * 1. fieldExtensionsEstimator: Reads complexity from field extensions (set via schema directives)
 * 2. simpleEstimator: Assigns a default cost of 1 per field as fallback
 *
 * @param schema - The GraphQL schema
 * @param document - The parsed GraphQL document (AST)
 * @param variables - Query variables (used for list size estimation)
 * @param isAuthenticated - Whether the request is authenticated (affects limits)
 * @returns The complexity check result
 */
export function checkQueryComplexity(
  schema: GraphQLSchema,
  document: DocumentNode,
  variables: Record<string, unknown>,
  isAuthenticated: boolean,
): ComplexityCheckResult {
  const maxComplexity = getMaxComplexity(isAuthenticated);

  try {
    const complexity = getComplexity({
      schema,
      query: document,
      variables,
      estimators: [
        fieldExtensionsEstimator(),
        simpleEstimator({ defaultComplexity: 1 }),
      ],
    });

    return {
      complexity,
      exceeded: complexity > maxComplexity,
      maxComplexity,
    };
  } catch (estimationError) {
    logger.warn('Failed to estimate query complexity', {
      error: estimationError instanceof Error ? estimationError.message : String(estimationError),
    });
    // On failure, allow the query to proceed to avoid blocking legitimate requests
    return {
      complexity: 0,
      exceeded: false,
      maxComplexity,
    };
  }
}

/**
 * Checks query depth by counting nested selections.
 *
 * @param document - The parsed GraphQL document (AST)
 * @returns The maximum depth found in the query
 */
function computeQueryDepth(document: DocumentNode): number {
  let maxDepth = 0;

  function traverse(node: { selectionSet?: { selections: ReadonlyArray<{ selectionSet?: unknown }> } }, depth: number): void {
    if (depth > maxDepth) {
      maxDepth = depth;
    }
    if (node.selectionSet) {
      for (const selection of node.selectionSet.selections) {
        traverse(selection as { selectionSet?: { selections: ReadonlyArray<{ selectionSet?: unknown }> } }, depth + 1);
      }
    }
  }

  for (const definition of document.definitions) {
    traverse(definition as { selectionSet?: { selections: ReadonlyArray<{ selectionSet?: unknown }> } }, 0);
  }

  return maxDepth;
}

/**
 * Creates an Apollo Server plugin that enforces query complexity and depth limits.
 *
 * The plugin runs before query execution and rejects queries that exceed
 * configured complexity or depth thresholds.
 *
 * Environment variables:
 * - GRAPHQL_MAX_COMPLEXITY_AUTH: Max complexity for authenticated users (default: 1000)
 * - GRAPHQL_MAX_COMPLEXITY_UNAUTH: Max complexity for unauthenticated users (default: 200)
 * - GRAPHQL_MAX_DEPTH: Max query depth (default: 10)
 * - GRAPHQL_COMPLEXITY_ENABLED: Explicit on/off ('true'/'false'). Defaults to on in production/staging.
 *
 * @param schema - The GraphQL schema to validate against
 * @returns Apollo Server plugin configuration
 */
export function createQueryComplexityPlugin(schema: GraphQLSchema): {
  requestDidStart: () => Promise<{
    didResolveOperation: (requestContext: {
      document: DocumentNode;
      request: { variables?: Record<string, unknown> | null };
      contextValue: { user?: unknown };
    }) => Promise<void>;
  }>;
} {
  const isEnabled = (): boolean => {
    const explicitSetting = process.env.GRAPHQL_COMPLEXITY_ENABLED;
    if (explicitSetting !== undefined) {
      return explicitSetting === 'true' || explicitSetting === '1';
    }
    const env = process.env.NODE_ENV || 'development';
    return env === 'production' || env === 'staging';
  };

  return {
    async requestDidStart() {
      return {
        async didResolveOperation(requestContext) {
          if (!isEnabled()) return;

          const { document, request, contextValue } = requestContext;
          const variables = (request.variables || {}) as Record<string, unknown>;
          const isAuthenticated = Boolean(contextValue.user);

          // Check depth limit
          const maxDepth = getMaxDepth();
          const depth = computeQueryDepth(document);
          if (depth > maxDepth) {
            logger.warn('Query depth exceeded', {
              depth,
              maxDepth,
              isAuthenticated,
            });
            throw new Error(
              `Query depth of ${depth} exceeds maximum allowed depth of ${maxDepth}`,
            );
          }

          // Check complexity limit
          const result = checkQueryComplexity(schema, document, variables, isAuthenticated);
          if (result.exceeded) {
            logger.warn('Query complexity exceeded', {
              complexity: result.complexity,
              maxComplexity: result.maxComplexity,
              isAuthenticated,
            });
            throw new Error(
              `Query complexity of ${result.complexity} exceeds maximum allowed complexity of ${result.maxComplexity}`,
            );
          }

          logger.debug('Query complexity check passed', {
            complexity: result.complexity,
            maxComplexity: result.maxComplexity,
            depth,
          });
        },
      };
    },
  };
}
