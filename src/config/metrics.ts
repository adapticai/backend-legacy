import { Request, Response, Router } from 'express';
import {
  Registry,
  Counter,
  Histogram,
  Gauge,
  collectDefaultMetrics,
} from 'prom-client';
import { logger } from '../utils/logger';

const SERVICE_NAME = 'backend-legacy';

/**
 * Dedicated Prometheus registry for backend-legacy metrics.
 * Using a dedicated registry avoids conflicts with default Node.js metrics
 * that might be registered by other libraries.
 */
export const metricsRegistry = new Registry();
metricsRegistry.setDefaultLabels({ service: SERVICE_NAME });

// ---------------------------------------------------------------------------
// HTTP / GraphQL request metrics
// ---------------------------------------------------------------------------

/** Counts total HTTP requests by method, route, and status code */
export const httpRequestsTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code'] as const,
  registers: [metricsRegistry],
});

/** Histogram of HTTP request durations in seconds */
export const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'] as const,
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 10],
  registers: [metricsRegistry],
});

/** Counts total GraphQL operations by type and name */
export const graphqlOperationsTotal = new Counter({
  name: 'graphql_operations_total',
  help: 'Total number of GraphQL operations',
  labelNames: ['operation_type', 'operation_name', 'status'] as const,
  registers: [metricsRegistry],
});

/** Histogram of GraphQL operation durations in seconds */
export const graphqlOperationDuration = new Histogram({
  name: 'graphql_operation_duration_seconds',
  help: 'Duration of GraphQL operations in seconds',
  labelNames: ['operation_type', 'operation_name'] as const,
  buckets: [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 10, 30],
  registers: [metricsRegistry],
});

/** Counts GraphQL errors by operation and error code */
export const graphqlErrorsTotal = new Counter({
  name: 'graphql_errors_total',
  help: 'Total number of GraphQL errors',
  labelNames: ['operation_type', 'operation_name', 'error_code'] as const,
  registers: [metricsRegistry],
});

// ---------------------------------------------------------------------------
// Database metrics
// ---------------------------------------------------------------------------

/** Histogram of Prisma query durations in seconds */
export const dbQueryDuration = new Histogram({
  name: 'db_query_duration_seconds',
  help: 'Duration of database queries in seconds',
  labelNames: ['operation', 'model'] as const,
  buckets: [0.001, 0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 5],
  registers: [metricsRegistry],
});

/** Gauge for active database connections */
export const dbConnectionsActive = new Gauge({
  name: 'db_connections_active',
  help: 'Number of active database connections (approximate)',
  registers: [metricsRegistry],
});

// ---------------------------------------------------------------------------
// WebSocket / Subscriptions metrics
// ---------------------------------------------------------------------------

/** Gauge for active GraphQL subscriptions */
export const activeSubscriptions = new Gauge({
  name: 'graphql_active_subscriptions',
  help: 'Number of active GraphQL subscriptions',
  registers: [metricsRegistry],
});

/** Gauge for active WebSocket connections */
export const activeWebSocketConnections = new Gauge({
  name: 'websocket_active_connections',
  help: 'Number of active WebSocket connections',
  registers: [metricsRegistry],
});

// ---------------------------------------------------------------------------
// Application metrics
// ---------------------------------------------------------------------------

/** Gauge for application uptime in seconds */
const uptimeGauge = new Gauge({
  name: 'app_uptime_seconds',
  help: 'Application uptime in seconds',
  registers: [metricsRegistry],
});

const startedAt = Date.now();

// ---------------------------------------------------------------------------
// Initialization
// ---------------------------------------------------------------------------

/**
 * Determines if metrics collection is enabled.
 * Enabled by default in production/staging; can be explicitly controlled
 * via PROMETHEUS_METRICS_ENABLED env var.
 */
function isMetricsEnabled(): boolean {
  const explicitSetting = process.env.PROMETHEUS_METRICS_ENABLED;
  if (explicitSetting !== undefined) {
    return explicitSetting === 'true' || explicitSetting === '1';
  }
  const env = process.env.NODE_ENV || 'development';
  return env === 'production' || env === 'staging';
}

/**
 * Initializes Prometheus metrics collection.
 *
 * Registers default Node.js metrics (CPU, memory, event loop, GC) and
 * application-specific metrics for HTTP, GraphQL, and database operations.
 *
 * Environment variables:
 * - PROMETHEUS_METRICS_ENABLED: Explicit on/off ('true'/'false'). Defaults to on in production/staging.
 *
 * @returns true if metrics were initialized, false if disabled
 */
export function initMetrics(): boolean {
  if (!isMetricsEnabled()) {
    logger.info('Prometheus metrics collection is disabled', {
      reason: 'PROMETHEUS_METRICS_ENABLED not set or environment is development',
    });
    return false;
  }

  // Register default Node.js metrics (memory, CPU, event loop lag, etc.)
  collectDefaultMetrics({ register: metricsRegistry });

  // Update uptime gauge periodically
  const UPTIME_UPDATE_INTERVAL_MS = 15000;
  setInterval(() => {
    uptimeGauge.set((Date.now() - startedAt) / 1000);
  }, UPTIME_UPDATE_INTERVAL_MS);

  logger.info('Prometheus metrics initialized');
  return true;
}

// ---------------------------------------------------------------------------
// Express middleware
// ---------------------------------------------------------------------------

/**
 * Express middleware that records HTTP request metrics.
 * Tracks request count and duration for each method/route/status combination.
 *
 * Should be mounted early in the middleware chain to capture all requests.
 */
export function metricsMiddleware(req: Request, res: Response, next: () => void): void {
  if (!isMetricsEnabled()) {
    next();
    return;
  }

  const start = process.hrtime.bigint();

  res.on('finish', () => {
    const durationNs = Number(process.hrtime.bigint() - start);
    const durationSeconds = durationNs / 1e9;
    const route = req.route?.path || req.path || 'unknown';
    const method = req.method;
    const statusCode = String(res.statusCode);

    httpRequestsTotal.inc({ method, route, status_code: statusCode });
    httpRequestDuration.observe({ method, route, status_code: statusCode }, durationSeconds);
  });

  next();
}

// ---------------------------------------------------------------------------
// Apollo Server plugin
// ---------------------------------------------------------------------------

/**
 * Creates an Apollo Server plugin that records GraphQL operation metrics.
 *
 * Tracks:
 * - Operation count by type (query/mutation/subscription) and name
 * - Operation duration
 * - Error count by operation and error code
 *
 * @returns Apollo Server plugin configuration
 */
export function createMetricsPlugin(): {
  requestDidStart: () => Promise<{
    willSendResponse: (requestContext: {
      operationName?: string | null;
      operation?: { operation: string } | null;
      response: { body: { kind: string; singleResult?: { errors?: ReadonlyArray<{ extensions?: { code?: string } }> } } };
    }) => Promise<void>;
  }>;
} {
  return {
    async requestDidStart() {
      const start = process.hrtime.bigint();

      return {
        async willSendResponse(requestContext) {
          const durationNs = Number(process.hrtime.bigint() - start);
          const durationSeconds = durationNs / 1e9;

          const operationName = requestContext.operationName || 'anonymous';
          const operationType = requestContext.operation?.operation || 'unknown';

          graphqlOperationDuration.observe(
            { operation_type: operationType, operation_name: operationName },
            durationSeconds,
          );

          const responseBody = requestContext.response.body;
          const hasErrors =
            responseBody.kind === 'single' &&
            responseBody.singleResult?.errors &&
            responseBody.singleResult.errors.length > 0;

          if (hasErrors && responseBody.kind === 'single' && responseBody.singleResult?.errors) {
            for (const error of responseBody.singleResult.errors) {
              const errorCode = error.extensions?.code || 'INTERNAL_SERVER_ERROR';
              graphqlErrorsTotal.inc({
                operation_type: operationType,
                operation_name: operationName,
                error_code: String(errorCode),
              });
            }
            graphqlOperationsTotal.inc({
              operation_type: operationType,
              operation_name: operationName,
              status: 'error',
            });
          } else {
            graphqlOperationsTotal.inc({
              operation_type: operationType,
              operation_name: operationName,
              status: 'success',
            });
          }
        },
      };
    },
  };
}

// ---------------------------------------------------------------------------
// Metrics endpoint
// ---------------------------------------------------------------------------

/**
 * Creates an Express router that exposes Prometheus metrics at GET /metrics.
 *
 * The endpoint returns metrics in Prometheus text exposition format.
 * This should be scraped by a Prometheus server at regular intervals.
 *
 * Note: This endpoint should be protected in production (e.g., by firewall rules
 * or by requiring a bearer token). It is excluded from rate limiting by default.
 */
export function createMetricsRouter(): Router {
  const router = Router();

  router.get('/metrics', async (_req: Request, res: Response): Promise<void> => {
    try {
      const metrics = await metricsRegistry.metrics();
      res.set('Content-Type', metricsRegistry.contentType);
      res.status(200).send(metrics);
    } catch (metricsError) {
      logger.error('Failed to generate metrics', {
        error: metricsError instanceof Error ? metricsError.message : String(metricsError),
      });
      res.status(500).send('Failed to generate metrics');
    }
  });

  return router;
}
