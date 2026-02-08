/**
 * Query Depth Limiter Plugin for Apollo Server
 *
 * This plugin prevents overly complex queries that could cause performance issues
 * by limiting the maximum depth of nested fields in GraphQL queries.
 *
 * Integration:
 *
 * ```typescript
 * import { queryDepthLimiterPlugin } from './plugins/query-depth-limiter';
 *
 * const server = new ApolloServer({
 *   schema,
 *   plugins: [
 *     queryDepthLimiterPlugin(),
 *     // ... other plugins
 *   ],
 * });
 * ```
 *
 * Configuration:
 * - Set GRAPHQL_MAX_DEPTH environment variable (default: 6)
 */

import { ApolloServerPlugin, GraphQLRequestListener } from '@apollo/server';
import { logger } from '../utils/logger';
import {
  DocumentNode,
  FieldNode,
  FragmentDefinitionNode,
  FragmentSpreadNode,
  InlineFragmentNode,
  OperationDefinitionNode,
  SelectionNode,
} from 'graphql';
import { GraphQLError } from 'graphql';

interface DepthLimiterContext {
  prisma?: unknown;
  req?: {
    headers?: {
      authorization?: string;
      'x-request-id'?: string;
    };
  };
  user?: {
    sub?: string;
    name?: string;
    email?: string;
  };
}

interface QueryDepthLimiterOptions {
  maxDepth?: number;
}

/**
 * Calculates the depth of a GraphQL query by traversing its AST
 */
function calculateQueryDepth(
  document: DocumentNode,
  maxDepth: number
): { depth: number; queryName: string | null } {
  let maxCalculatedDepth = 0;
  let queryName: string | null = null;

  const fragments: Record<string, FragmentDefinitionNode> = {};

  // First pass: collect all fragment definitions
  for (const definition of document.definitions) {
    if (definition.kind === 'FragmentDefinition') {
      fragments[definition.name.value] = definition;
    }
  }

  // Calculate depth for a selection set
  function getDepth(
    selections: readonly SelectionNode[],
    currentDepth: number,
    visitedFragments: Set<string> = new Set()
  ): number {
    if (currentDepth > maxDepth) {
      return currentDepth;
    }

    let depth = currentDepth;

    for (const selection of selections) {
      if (selection.kind === 'Field') {
        const fieldNode = selection as FieldNode;

        // Skip introspection fields
        if (fieldNode.name.value.startsWith('__')) {
          continue;
        }

        if (fieldNode.selectionSet) {
          const fieldDepth = getDepth(
            fieldNode.selectionSet.selections,
            currentDepth + 1,
            visitedFragments
          );
          depth = Math.max(depth, fieldDepth);
        } else {
          depth = Math.max(depth, currentDepth + 1);
        }
      } else if (selection.kind === 'FragmentSpread') {
        const fragmentSpread = selection as FragmentSpreadNode;
        const fragmentName = fragmentSpread.name.value;

        // Prevent infinite recursion from circular fragments
        if (!visitedFragments.has(fragmentName)) {
          const fragment = fragments[fragmentName];
          if (fragment) {
            visitedFragments.add(fragmentName);
            const fragmentDepth = getDepth(
              fragment.selectionSet.selections,
              currentDepth,
              visitedFragments
            );
            depth = Math.max(depth, fragmentDepth);
          }
        }
      } else if (selection.kind === 'InlineFragment') {
        const inlineFragment = selection as InlineFragmentNode;
        const inlineDepth = getDepth(
          inlineFragment.selectionSet.selections,
          currentDepth,
          visitedFragments
        );
        depth = Math.max(depth, inlineDepth);
      }
    }

    return depth;
  }

  // Second pass: calculate depth for each operation
  for (const definition of document.definitions) {
    if (definition.kind === 'OperationDefinition') {
      const operation = definition as OperationDefinitionNode;

      // Capture query name for logging
      if (!queryName && operation.name) {
        queryName = operation.name.value;
      }

      const operationDepth = getDepth(operation.selectionSet.selections, 0);
      maxCalculatedDepth = Math.max(maxCalculatedDepth, operationDepth);
    }
  }

  return { depth: maxCalculatedDepth, queryName };
}

/**
 * Truncates a query string for logging purposes
 */
function truncateQuery(query: string, maxLength: number = 200): string {
  if (query.length <= maxLength) {
    return query;
  }
  return query.substring(0, maxLength) + '...';
}

/**
 * Creates a query depth limiter plugin for Apollo Server
 */
export function queryDepthLimiterPlugin(
  options: QueryDepthLimiterOptions = {}
): ApolloServerPlugin<DepthLimiterContext> {
  const maxDepth = options.maxDepth ?? parseInt(process.env.GRAPHQL_MAX_DEPTH || '6', 10);

  return {
    async requestDidStart(): Promise<GraphQLRequestListener<DepthLimiterContext>> {
      return {
        async didResolveOperation(requestContext) {
          const { document, request, contextValue } = requestContext;

          if (!document) {
            return;
          }

          const { depth, queryName } = calculateQueryDepth(document, maxDepth);

          if (depth > maxDepth) {
            const query = request.query || '';
            const truncatedQuery = truncateQuery(query);

            // Extract user context for logging
            const userId = contextValue?.user?.sub || contextValue?.user?.email || 'anonymous';
            const requestId = contextValue?.req?.headers?.['x-request-id'] || 'unknown';

            // Log the rejected query
            logger.error('[QueryDepthLimiter] Query rejected', {
              depth,
              maxDepth,
              queryName,
              userId,
              requestId,
              query: truncatedQuery,
            });

            throw new GraphQLError(
              `Query depth of ${depth} exceeds maximum allowed depth of ${maxDepth}`,
              {
                extensions: {
                  code: 'QUERY_DEPTH_LIMIT_EXCEEDED',
                  depth,
                  maxDepth,
                },
              }
            );
          }
        },
      };
    },
  };
}
