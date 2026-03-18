import { PrismaClient } from '@prisma/client';
import { logger } from './utils/logger';

/**
 * Define the global type for PrismaClient to use across environments
 */
declare global {
  // This works in both browser and Node.js environments
  var prisma: PrismaClient | undefined;
}

/**
 * Connection pool size defaults per deployment tier.
 * Can be overridden via the DATABASE_POOL_SIZE environment variable.
 */
const POOL_SIZE_DEFAULTS: Record<string, number> = {
  development: 5,
  staging: 10,
  production: 20,
};

/** Connection pool timeout in milliseconds. Configurable via DATABASE_POOL_TIMEOUT_MS. */
const DEFAULT_POOL_TIMEOUT_MS = 10000;

/**
 * Resolves the connection pool size from environment variables or tier defaults.
 *
 * Priority:
 * 1. DATABASE_POOL_SIZE environment variable (explicit override)
 * 2. Tier default based on NODE_ENV (development: 5, staging: 10, production: 20)
 *
 * @returns The resolved connection pool size
 */
function resolvePoolSize(): number {
  const envPoolSize = process.env.DATABASE_POOL_SIZE;
  if (envPoolSize) {
    const parsed = parseInt(envPoolSize, 10);
    if (!isNaN(parsed) && parsed > 0) {
      return parsed;
    }
    logger.warn(
      'Invalid DATABASE_POOL_SIZE value, falling back to tier default',
      {
        value: envPoolSize,
      }
    );
  }

  const nodeEnv = process.env.NODE_ENV || 'development';
  return POOL_SIZE_DEFAULTS[nodeEnv] || POOL_SIZE_DEFAULTS.development;
}

/**
 * Resolves the connection pool timeout from environment variables.
 *
 * @returns The resolved pool timeout in milliseconds
 */
function resolvePoolTimeout(): number {
  const envTimeout = process.env.DATABASE_POOL_TIMEOUT_MS;
  if (envTimeout) {
    const parsed = parseInt(envTimeout, 10);
    if (!isNaN(parsed) && parsed > 0) {
      return parsed;
    }
    logger.warn(
      'Invalid DATABASE_POOL_TIMEOUT_MS value, falling back to default',
      {
        value: envTimeout,
      }
    );
  }
  return DEFAULT_POOL_TIMEOUT_MS;
}

/**
 * Constructs a DATABASE_URL with connection pool parameters appended.
 * Prisma uses URL query parameters for pool configuration when using
 * the data proxy / Accelerate.
 *
 * For direct connections (non-Accelerate), pool settings are managed
 * via the connection_limit and pool_timeout query parameters on the
 * database URL.
 *
 * @returns The database URL with pool parameters
 */
function buildDatabaseUrl(): string {
  const baseUrl = process.env.DATABASE_URL || '';
  if (!baseUrl) {
    return baseUrl;
  }

  const poolSize = resolvePoolSize();
  const poolTimeout = resolvePoolTimeout();
  const separator = baseUrl.includes('?') ? '&' : '?';

  logger.info('Database connection pool configured', {
    poolSize,
    poolTimeoutMs: poolTimeout,
    environment: process.env.NODE_ENV || 'development',
  });

  return `${baseUrl}${separator}connection_limit=${poolSize}&pool_timeout=${Math.floor(poolTimeout / 1000)}`;
}

// Create a singleton that works in all environments
if (!global.prisma) {
  const poolSize = resolvePoolSize();

  const client = new PrismaClient({
    log: [
      { level: 'error', emit: 'event' },
      { level: 'warn', emit: 'event' },
    ],
    datasources: {
      db: {
        url: buildDatabaseUrl(),
      },
    },
  });

  // Register event-based log handlers with structured error diagnostics
  client.$on('error' as never, (e: { message: string; timestamp: string }) => {
    const message = e.message || '';

    // Build structured error information for actionable diagnostics
    const errorInfo: Record<string, unknown> = {
      message,
      timestamp: e.timestamp,
      poolSize,
    };

    // Extract Prisma error code (e.g., P2002 unique constraint, P2003 foreign key)
    const prismaCodeMatch = message.match(/error code:\s*(P\d+)/i)
      || message.match(/(P\d{4})/);
    if (prismaCodeMatch) {
      errorInfo.prismaErrorCode = prismaCodeMatch[1];
    }

    // Extract Postgres error code (e.g., 23514 check constraint, 23505 unique)
    const pgCodeMatch = message.match(/(?:error code|code):\s*(\d{5})/);
    if (pgCodeMatch) {
      errorInfo.postgresErrorCode = pgCodeMatch[1];
    }

    // Extract constraint name for violation diagnostics
    const constraintMatch = message.match(/constraint\s+"([^"]+)"/);
    if (constraintMatch) {
      errorInfo.constraintName = constraintMatch[1];
    }

    // Extract model or table name
    const modelMatch = message.match(/(?:model|table|relation)\s+"?(\w+)"?/i);
    if (modelMatch) {
      errorInfo.model = modelMatch[1];
    }

    // Categorize for alerting and triage
    if (message.includes('pool') || message.includes('connection') || message.includes('timeout')) {
      errorInfo.category = 'CONNECTION_POOL';
      logger.error('Database connection pool issue detected', errorInfo);
    } else if (prismaCodeMatch || pgCodeMatch) {
      errorInfo.category = 'DATA_INTEGRITY';
      logger.error('Prisma data integrity error', errorInfo);
    } else {
      errorInfo.category = 'UNKNOWN';
      logger.error('Prisma client error', errorInfo);
    }
  });

  client.$on('warn' as never, (e: { message: string }) => {
    logger.warn('Prisma client warning', { message: e.message });
  });

  // Soft-delete filtering is handled at the application/middleware level
  // via the soft-delete middleware (see src/middleware/soft-delete.ts).
  // Prisma 6 uses client extensions rather than $use() middleware.

  global.prisma = client;
}

// Initialize a singleton PrismaClient with a connection pool that persists across requests
const prisma: PrismaClient = global.prisma;

export default prisma;
