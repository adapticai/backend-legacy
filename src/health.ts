import { Request, Response, Router } from 'express';
import prisma from './prismaClient';
import { logger } from './utils/logger';

const SERVICE_NAME = 'backend-legacy';

/**
 * Reads the package version from package.json at startup.
 * Falls back to 'unknown' if the version cannot be determined.
 */
function getPackageVersion(): string {
  try {
    const pkg = require('../package.json');
    return pkg.version || 'unknown';
  } catch {
    return 'unknown';
  }
}

const PACKAGE_VERSION = getPackageVersion();

/** Tracks the process start time for uptime calculation */
const startedAt = Date.now();

/** Response shape for the health check endpoint */
interface HealthResponse {
  status: 'ok' | 'degraded';
  service: string;
  version: string;
  timestamp: string;
  uptime: number;
  memory: {
    rss: number;
    heapUsed: number;
    heapTotal: number;
  };
  database: 'connected' | 'disconnected';
}

/**
 * Checks database connectivity by issuing a lightweight query.
 * Returns 'connected' or 'disconnected'. Never throws.
 */
async function checkDatabase(): Promise<'connected' | 'disconnected'> {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return 'connected';
  } catch (dbError) {
    logger.warn('Health check: database connectivity test failed', {
      error: dbError instanceof Error ? dbError.message : String(dbError),
    });
    return 'disconnected';
  }
}

/**
 * Creates an Express router with a GET /health endpoint.
 *
 * The endpoint returns HTTP 200 when healthy (database reachable)
 * and HTTP 503 when degraded (database unreachable).
 *
 * Response includes: service name, version, uptime in seconds,
 * memory usage (RSS, heap used, heap total in MB), database status,
 * and an ISO 8601 timestamp.
 *
 * This endpoint should be mounted before auth middleware so it
 * remains accessible without authentication.
 */
export function createHealthRouter(): Router {
  const router = Router();

  router.get('/health', async (_req: Request, res: Response): Promise<void> => {
    const databaseStatus = await checkDatabase();
    const isHealthy = databaseStatus === 'connected';
    const statusCode = isHealthy ? 200 : 503;

    const memoryUsage = process.memoryUsage();

    const body: HealthResponse = {
      status: isHealthy ? 'ok' : 'degraded',
      service: SERVICE_NAME,
      version: PACKAGE_VERSION,
      timestamp: new Date().toISOString(),
      uptime: Math.floor((Date.now() - startedAt) / 1000),
      memory: {
        rss: Math.round(memoryUsage.rss / 1024 / 1024),
        heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024),
        heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024),
      },
      database: databaseStatus,
    };

    res.status(statusCode).json(body);
  });

  return router;
}
