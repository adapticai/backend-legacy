/**
 * Error Sanitizer for Apollo Server
 *
 * This module provides error formatting that:
 * - Sanitizes internal errors in production
 * - Preserves validation errors (safe to show)
 * - Logs full error details server-side
 * - Includes request IDs for debugging
 *
 * Integration:
 *
 * ```typescript
 * import { createErrorSanitizer } from './plugins/error-sanitizer';
 *
 * const server = new ApolloServer({
 *   schema,
 *   formatError: createErrorSanitizer(),
 *   // ... other options
 * });
 * ```
 *
 * Configuration:
 * - Automatically detects NODE_ENV for production vs development mode
 * - In production: sanitizes internal errors, keeps validation errors
 * - In development: shows full error details
 */

import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { logger } from '../utils/logger';

interface ErrorContext {
  prisma?: unknown;
  req?: {
    headers?: {
      'x-request-id'?: string;
      authorization?: string;
    };
  };
  user?: {
    sub?: string;
    name?: string;
    email?: string;
  };
}

interface ErrorExtensions {
  code?: string;
  exception?: {
    stacktrace?: string[];
  };
  [key: string]: unknown;
}

/**
 * Error codes that are considered safe to expose to clients
 */
const SAFE_ERROR_CODES = new Set([
  'GRAPHQL_PARSE_FAILED',
  'GRAPHQL_VALIDATION_FAILED',
  'BAD_USER_INPUT',
  'UNAUTHENTICATED',
  'FORBIDDEN',
  'PERSISTED_QUERY_NOT_FOUND',
  'PERSISTED_QUERY_NOT_SUPPORTED',
  'BAD_REQUEST',
  'QUERY_DEPTH_LIMIT_EXCEEDED',
]);

/**
 * Determines if an error is safe to expose based on its code
 */
function isSafeError(code: string | undefined): boolean {
  if (!code) {
    return false;
  }
  return SAFE_ERROR_CODES.has(code);
}

/**
 * Extracts user context information for logging
 */
function getUserContext(error: GraphQLError): {
  userId: string;
  requestId: string;
} {
  const extensions = error.extensions as ErrorExtensions;

  // Try to get context from extensions
  const context = extensions?.context as ErrorContext | undefined;

  const userId = context?.user?.sub || context?.user?.email || 'anonymous';
  const requestId = context?.req?.headers?.['x-request-id'] || 'unknown';

  return { userId, requestId };
}

/**
 * Logs the full error details server-side
 */
function logError(error: GraphQLError, isProduction: boolean): void {
  const { userId, requestId } = getUserContext(error);
  const extensions = error.extensions as ErrorExtensions;

  const logData = {
    message: error.message,
    code: extensions?.code || 'INTERNAL_SERVER_ERROR',
    userId,
    requestId,
    path: error.path,
    locations: error.locations,
    timestamp: new Date().toISOString(),
  };

  // In development, include the full error details
  if (!isProduction) {
    logger.error('[GraphQL Error]', {
      ...logData,
      extensions: extensions as Record<string, unknown>,
      originalError: String(error.originalError),
      stack: error.originalError?.stack,
    });
  } else {
    // In production, log full details but without stack traces in some cases
    logger.error('[GraphQL Error]', {
      ...logData,
      // Only include stack for internal errors (not validation)
      stack: isSafeError(extensions?.code as string)
        ? undefined
        : error.originalError?.stack,
    });
  }
}

/**
 * Sanitizes error extensions for production
 */
function sanitizeExtensions(
  extensions: ErrorExtensions | undefined,
  isProduction: boolean
): Record<string, unknown> {
  if (!extensions) {
    return { code: 'INTERNAL_SERVER_ERROR' };
  }

  const code = extensions.code || 'INTERNAL_SERVER_ERROR';

  if (!isProduction) {
    // In development, return all extensions
    return extensions as Record<string, unknown>;
  }

  // In production, only keep safe fields
  const sanitized: Record<string, unknown> = {
    code,
  };

  // Preserve specific safe fields if they exist
  if (isSafeError(code as string)) {
    // For safe errors, we can keep additional context
    if (extensions.depth !== undefined) {
      sanitized.depth = extensions.depth;
    }
    if (extensions.maxDepth !== undefined) {
      sanitized.maxDepth = extensions.maxDepth;
    }
    if (extensions.argumentName !== undefined) {
      sanitized.argumentName = extensions.argumentName;
    }
  }

  // Always strip stack traces in production
  delete sanitized.exception;
  delete sanitized.stacktrace;

  return sanitized;
}

/**
 * Creates an error formatter function for Apollo Server
 */
export function createErrorSanitizer() {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    formattedError: GraphQLFormattedError,
    error: unknown
  ): GraphQLFormattedError => {
    const graphqlError = error instanceof GraphQLError ? error : null;

    if (!graphqlError) {
      // If it's not a GraphQL error, log and sanitize
      logger.error('[Non-GraphQL Error]', { error: String(error) });

      return {
        message: isProduction ? 'Internal server error' : String(error),
        extensions: {
          code: 'INTERNAL_SERVER_ERROR',
        },
      };
    }

    // Log the full error server-side
    logError(graphqlError, isProduction);

    const extensions = graphqlError.extensions as ErrorExtensions | undefined;
    const code = extensions?.code as string | undefined;

    // In development, return the full formatted error
    if (!isProduction) {
      return formattedError;
    }

    // In production, sanitize based on error type
    if (isSafeError(code)) {
      // Safe errors can be returned as-is (but without stack traces)
      return {
        message: formattedError.message,
        locations: formattedError.locations,
        path: formattedError.path,
        extensions: sanitizeExtensions(extensions, isProduction),
      };
    }

    // Internal errors get sanitized
    return {
      message: 'Internal server error',
      locations: formattedError.locations,
      path: formattedError.path,
      extensions: {
        code: 'INTERNAL_SERVER_ERROR',
      },
    };
  };
}

/**
 * Alternative: Export a pre-configured formatter
 * Use this if you don't need to customize the behavior
 */
export const formatError = createErrorSanitizer();
