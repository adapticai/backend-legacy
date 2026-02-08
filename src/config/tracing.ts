import { NodeSDK } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { GraphQLInstrumentation } from '@opentelemetry/instrumentation-graphql';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-node';
import { logger } from '../utils/logger';

const SERVICE_NAME = 'backend-legacy';

/**
 * Reads the package version for trace resource attributes.
 * Falls back to 'unknown' if the version cannot be determined.
 */
function getPackageVersion(): string {
  try {
    const pkg = require('../../package.json');
    return (pkg.version as string) || 'unknown';
  } catch {
    return 'unknown';
  }
}

/**
 * Resolves the OTLP endpoint from environment variables.
 * Defaults to http://localhost:4318/v1/traces (standard OTLP HTTP endpoint).
 */
function getOtlpEndpoint(): string {
  return process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'http://localhost:4318/v1/traces';
}

/**
 * Determines if tracing is enabled.
 * Disabled by default in development; enabled in production and staging.
 * Can be explicitly controlled via OTEL_TRACING_ENABLED env var.
 */
function isTracingEnabled(): boolean {
  const explicitSetting = process.env.OTEL_TRACING_ENABLED;
  if (explicitSetting !== undefined) {
    return explicitSetting === 'true' || explicitSetting === '1';
  }
  const env = process.env.NODE_ENV || 'development';
  return env === 'production' || env === 'staging';
}

let sdk: NodeSDK | null = null;

/**
 * Initializes OpenTelemetry tracing for the backend-legacy service.
 *
 * Configures:
 * - HTTP instrumentation for incoming/outgoing HTTP requests
 * - Express instrumentation for route-level spans
 * - GraphQL instrumentation for resolver-level spans
 * - OTLP HTTP exporter for sending traces to a collector (e.g., Jaeger, Grafana Tempo)
 *
 * Environment variables:
 * - OTEL_TRACING_ENABLED: Explicit on/off ('true'/'false'). Defaults to on in production/staging.
 * - OTEL_EXPORTER_OTLP_ENDPOINT: Collector endpoint (default: http://localhost:4318/v1/traces)
 * - OTEL_SERVICE_NAME: Override service name (default: 'backend-legacy')
 *
 * Call this function before any other imports that need instrumentation (e.g., before Express/Apollo setup).
 */
export function initTracing(): void {
  if (!isTracingEnabled()) {
    logger.info('OpenTelemetry tracing is disabled', {
      reason: 'OTEL_TRACING_ENABLED not set or environment is development',
    });
    return;
  }

  const endpoint = getOtlpEndpoint();
  const serviceName = process.env.OTEL_SERVICE_NAME || SERVICE_NAME;
  const serviceVersion = getPackageVersion();

  const traceExporter = new OTLPTraceExporter({
    url: endpoint,
  });

  const resource = resourceFromAttributes({
    [ATTR_SERVICE_NAME]: serviceName,
    [ATTR_SERVICE_VERSION]: serviceVersion,
    'deployment.environment': process.env.NODE_ENV || 'development',
  });

  sdk = new NodeSDK({
    resource,
    spanProcessors: [new BatchSpanProcessor(traceExporter)],
    instrumentations: [
      new HttpInstrumentation({
        ignoreIncomingRequestHook: (req) => {
          // Skip health check endpoints to reduce trace noise
          return req.url === '/health' || req.url === '/metrics';
        },
      }),
      new ExpressInstrumentation(),
      new GraphQLInstrumentation({
        mergeItems: true,
        allowValues: true,
        depth: 5,
      }),
    ],
  });

  sdk.start();

  logger.info('OpenTelemetry tracing initialized', {
    endpoint,
    serviceName,
    serviceVersion,
  });
}

/**
 * Gracefully shuts down the OpenTelemetry SDK.
 * Should be called during application shutdown (SIGTERM/SIGINT handlers).
 * Flushes any pending spans before shutting down.
 */
export async function shutdownTracing(): Promise<void> {
  if (sdk) {
    try {
      await sdk.shutdown();
      logger.info('OpenTelemetry tracing shut down successfully');
    } catch (shutdownError) {
      logger.error('Error shutting down OpenTelemetry tracing', {
        error: shutdownError instanceof Error ? shutdownError.message : String(shutdownError),
      });
    }
  }
}
