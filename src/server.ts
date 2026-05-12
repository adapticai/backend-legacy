import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { buildSchema } from 'type-graphql';
import { GraphQLError } from 'graphql';
import { resolvers } from './generated/typegraphql-prisma';
import { OptionsGreeksHistoryCustomResolver } from './resolvers/custom';
import { createServer } from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { authMiddleware } from './middleware/auth';
import { createAuditLogPlugin } from './middleware/audit-logger';
import prisma, {
  startConnectionHealthMonitor,
  disconnectWithTimeout,
} from './prismaClient';
import { createHealthRouter } from './health';
import { exec } from 'child_process';
import { logger } from './utils/logger';
import { shutdownTracing } from './config/tracing';
import {
  verifyBackendToken,
  AuthError,
  assertGoogleAudienceConfiguredForProd,
  type BackendPrincipal,
} from './auth/token-verifier';

import { Request } from 'express';
import { CorsOptions } from 'cors';
import { JwtPayload } from 'jsonwebtoken';

/** Represents the decoded user payload attached to authenticated requests */
interface AuthUser {
  sub?: string;
  name?: string;
  role?: string;
  provider?: string;
  token?: string;
}

interface AuthenticatedRequest extends Request {
  user: JwtPayload | AuthUser | string;
}

/**
 * Adapt a verified `BackendPrincipal` to the legacy `user` context shape used
 * by downstream resolvers and audit plugins (`{ sub, role, roles? }`).
 *
 * The server-kind principal is materialised as `{ sub: 'server', role: 'server' }`
 * for compatibility with the historical `audit-logger` middleware that checks
 * `context.user?.role === 'server'`.
 */
function principalToUser(principal: BackendPrincipal): AuthUser {
  switch (principal.kind) {
    case 'server':
      return { sub: 'server', name: 'Server Auth', role: 'server' };
    case 'admin':
      return {
        sub: principal.sub,
        role: 'admin',
        // Preserve the email if Google or our JWT provided one.
        ...(principal.email ? { name: principal.email } : {}),
      };
    case 'user':
      // Surface the highest-privilege role string for legacy consumers that
      // expect `role` to be a single value (default to "user").
      return {
        sub: principal.sub,
        role:
          principal.roles.find((r) => r !== 'user') ??
          principal.roles[0] ??
          'user',
        ...(principal.email ? { name: principal.email } : {}),
      };
  }
}

let dbUnreachableCount = 0;
let lastRestartAttempt = 0;
async function restartDatabase(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    logger.info(
      'Attempting to redeploy the Railway Postgres service in production'
    );

    // Check for both types of tokens
    const projectToken = process.env.RAILWAY_TOKEN;
    const apiToken = process.env.RAILWAY_API_TOKEN;

    if (!projectToken && !apiToken) {
      return reject(
        new Error(
          'Neither RAILWAY_TOKEN nor RAILWAY_API_TOKEN found in environment variables'
        )
      );
    }

    // Simplified command based on Railway CLI documentation
    const deployCommand = `RAILWAY_TOKEN=${projectToken || ''} RAILWAY_API_TOKEN=${apiToken || ''} railway redeploy --service Postgres -y`;

    exec(
      deployCommand,
      {
        env: process.env,
        shell: '/bin/sh',
      },
      (error, stdout, stderr) => {
        if (error) {
          logger.error('Failed to redeploy DB via Railway CLI', {
            error: String(error),
            stdout,
            stderr,
          });
          return reject(error);
        }

        logger.info('Railway deployment output', { stdout });
        resolve();
      }
    );
  });
}

const startServer = async () => {
  // Boot-time invariant: in production, `GOOGLE_OAUTH_CLIENT_IDS` must be set.
  // Without it, no Google ID token can be safely verified — and the verifier
  // would surface a per-request `misconfigured` error indefinitely. Refuse to
  // boot with broken identity configuration.
  assertGoogleAudienceConfiguredForProd();

  const schema = await buildSchema({
    resolvers: [...resolvers, OptionsGreeksHistoryCustomResolver],
    validate: false,
  });

  const app = express();
  const httpServer = createServer(app);

  app.use('/api', (req, res, next) =>
    authMiddleware(req as AuthenticatedRequest, res, next)
  );

  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      createAuditLogPlugin(),
    ],
    formatError: (err) => {
      const message = err.message || '';

      // Demote known caller-handled / caller-side error patterns to lower
      // log levels so they don't pollute ERROR logs and trigger spurious
      // alerts. The Prisma client error categorizer in prismaClient.ts also
      // demotes these on the raw client side; this mirror keeps the
      // GraphQL-formatted error consistent.
      const isExpectedDeleteRace =
        message.includes('No record was found for a delete') ||
        message.includes('No record was found for an update');
      const isInvalidUuidInput =
        message.includes('Error creating UUID') ||
        message.includes('Inconsistent column data: Error creating UUID');

      if (isExpectedDeleteRace) {
        logger.info('GraphQL expected race (record already removed)', {
          graphqlError: err,
        });
      } else if (isInvalidUuidInput) {
        logger.warn('GraphQL rejected invalid UUID input', {
          graphqlError: err,
        });
      } else {
        logger.error('GraphQL Error', { graphqlError: err });
      }

      // Check if this error is due to unreachable DB
      if (message.includes("Can't reach database server")) {
        dbUnreachableCount += 1;
        logger.warn('Database unreachable', { dbUnreachableCount });

        // If we've hit 3 (for example) attempts
        if (dbUnreachableCount >= 3) {
          const now = Date.now();
          if (now - lastRestartAttempt > 5 * 60 * 1000) {
            lastRestartAttempt = now;
            dbUnreachableCount = 0;
            restartDatabase().catch((restartError) => {
              logger.error('Error trying to restart DB', {
                restartError: String(restartError),
              });
            });
          }
        }
      } else {
        // If the error is not a DB unreachable error, we might want
        // to reset the counter or leave it as is. Generally, if we see
        // a successful query or a different error, we might reset:
        dbUnreachableCount = 0;
      }

      // Surface the verifier's `reason` enum on UNAUTHENTICATED responses so
      // operators (and the web app's network tab) can diagnose auth failures
      // without grepping Railway logs. The reason is one of a finite set —
      // `malformed | expired | bad_signature | bad_audience |
      // opaque_access_token_rejected | misconfigured` — and carries no
      // sensitive data (no token bytes, no claim values). Whitelisted to
      // UNAUTHENTICATED so we do not accidentally leak a `reason` field
      // attached to any other error class. See CORTEX-2026-05-12 auth-debug
      // change log.
      const code = err.extensions?.code || 'INTERNAL_SERVER_ERROR';
      const reasonValue = err.extensions?.reason;
      const includeReason =
        code === 'UNAUTHENTICATED' && typeof reasonValue === 'string';

      return {
        message: err.message,
        locations: err.locations,
        path: err.path,
        extensions: {
          code,
          ...(includeReason ? { reason: reasonValue } : {}),
        },
      };
    },
  });

  await server.start();

  // Health check endpoint - mounted before Apollo middleware so it's not behind GraphQL or auth
  app.use(createHealthRouter());

  // Configure CORS with allowed origins
  const defaultOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:4000',
    'https://adaptic.ai',
    'https://api.adaptic.ai',
    'https://os.adaptic.ai',
    'https://stable.adaptic.ai',
  ];
  const envOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map((o) => o.trim())
    : [];
  const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];

  const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, server-to-server, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID'],
    maxAge: 86400, // 24h preflight cache
  };

  app.use(
    '/graphql',
    cors<Request>(corsOptions),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }: { req: Request }) => {
        // Ensure we're using the global prisma instance and never disconnecting it between requests
        if (!global.prisma) {
          logger.warn(
            'Prisma client not found in global scope, reinitializing'
          );
          global.prisma = prisma;
        }

        // Extract token from Authorization header
        const authHeader = req.headers.authorization || '';
        const token = authHeader.startsWith('Bearer ')
          ? authHeader.slice('Bearer '.length).trim()
          : '';

        // When NO token is presented, fall through with `user: null`. The
        // `AuthChecker` introduced in CORTEX-P0-001 will reject any operation
        // that requires a principal; this contract preserves the current
        // unauthenticated-public-query path until P0-001 lands.
        if (!token) {
          return { prisma: global.prisma, req, user: null };
        }

        // Verify the bearer token through the SINGLE typed entry point. There
        // is no prefix shortcut (ya29.…), no parallel path, and no silent
        // downgrade to an unverified principal on failure.
        try {
          const principal = await verifyBackendToken(token);
          return {
            prisma: global.prisma,
            req,
            user: principalToUser(principal),
          };
        } catch (e) {
          const reason =
            e instanceof AuthError ? e.reason : 'bad_signature';
          logger.warn('GraphQL HTTP auth rejected', { reason });
          // Throw `UNAUTHENTICATED` so Apollo's HTTP transport returns a
          // GraphQL-shaped error response. The `formatError` hook above
          // preserves the `code` extension.
          throw new GraphQLError('Unauthenticated', {
            extensions: {
              code: 'UNAUTHENTICATED',
              reason,
            },
          });
        }
      },
    })
  );

  // Custom error handling middleware for express
  app.use(
    (
      err: Error,
      req: express.Request,
      res: express.Response,
      _next: express.NextFunction
    ) => {
      logger.error('Express error', { error: err.message, stack: err.stack });
      res.status(500).json({ error: 'An internal server error occurred' });
    }
  );

  app.use((req, res, next) => {
    logger.debug('Incoming request', { method: req.method, url: req.url });
    next();
  });

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/subscriptions',
  });

  useServer(
    {
      schema,
      context: async (ctx, _msg, _args) => {
        // Ensure we're using the global prisma instance for WebSocket connections too
        if (!global.prisma) {
          logger.warn(
            'Prisma client not found in global scope for WebSocket context, reinitializing'
          );
          global.prisma = prisma;
        }

        const authHeader =
          (ctx.connectionParams as { authorization?: string })?.authorization ||
          '';
        const token = authHeader.startsWith('Bearer ')
          ? authHeader.slice('Bearer '.length).trim()
          : '';

        // No token presented -> deliver a null-user context. The AuthChecker
        // landing in CORTEX-P0-001 will reject any subscription that requires
        // a principal. Until then, public subscriptions continue to work.
        if (!token) {
          return { prisma: global.prisma, user: null };
        }

        // Verify the bearer token via the single typed entry point.
        // Any verification failure THROWS — graphql-ws closes the connection
        // when the context callback throws, instead of silently downgrading
        // to a degraded `authError` context that quietly delivered messages
        // to an unauthenticated socket.
        try {
          const principal = await verifyBackendToken(token);
          return {
            prisma: global.prisma,
            user: principalToUser(principal),
          };
        } catch (e) {
          const reason =
            e instanceof AuthError ? e.reason : 'bad_signature';
          logger.warn('WebSocket auth rejected — closing connection', {
            reason,
          });
          throw new GraphQLError('Unauthenticated', {
            extensions: {
              code: 'UNAUTHENTICATED',
              reason,
            },
          });
        }
      },
    },
    wsServer
  );

  // Start the periodic database connection health monitor
  startConnectionHealthMonitor();

  const PORT = process.env.PORT || 4000;
  httpServer.listen(PORT, () => {
    logger.info('Server ready', {
      graphql: `http://localhost:${PORT}/graphql`,
      health: `http://localhost:${PORT}/health`,
    });
    logger.info('Subscriptions ready', {
      endpoint: `ws://localhost:${PORT}/subscriptions`,
    });
  });

  // --- Graceful shutdown ---
  // Sequence: stop accepting connections → drain in-flight requests →
  // close WebSocket → disconnect DB → flush traces → exit
  let isShuttingDown = false;
  const SHUTDOWN_TIMEOUT_MS = 15000;

  async function gracefulShutdown(signal: string): Promise<void> {
    if (isShuttingDown) return;
    isShuttingDown = true;

    logger.info(`Received ${signal}, starting graceful shutdown`);

    // Force exit if shutdown takes too long
    const forceExitTimer = setTimeout(() => {
      logger.error('Graceful shutdown timed out, forcing exit');
      process.exit(1);
    }, SHUTDOWN_TIMEOUT_MS);
    forceExitTimer.unref();

    try {
      // 1. Stop accepting new HTTP connections
      await new Promise<void>((resolve) => {
        httpServer.close(() => {
          logger.info('HTTP server closed');
          resolve();
        });
      });

      // 2. Close WebSocket server (rejects new WS connections)
      await new Promise<void>((resolve) => {
        wsServer.close(() => {
          logger.info('WebSocket server closed');
          resolve();
        });
      });

      // 3. Apollo Server drain is handled by ApolloServerPluginDrainHttpServer

      // 4. Stop health monitor and disconnect DB with timeout
      await disconnectWithTimeout(5000);

      // 5. Flush OpenTelemetry traces
      await shutdownTracing();

      logger.info('Graceful shutdown complete');
    } catch (error) {
      logger.error('Error during graceful shutdown', {
        error: error instanceof Error ? error.message : String(error),
      });
    } finally {
      clearTimeout(forceExitTimer);
      process.exit(0);
    }
  }

  process.on('SIGINT', () => {
    void gracefulShutdown('SIGINT');
  });
  process.on('SIGTERM', () => {
    void gracefulShutdown('SIGTERM');
  });
};

startServer().catch((error) => {
  logger.error('Error starting the server', {
    error: error instanceof Error ? error.message : String(error),
  });
  process.exit(1);
});

process.on('unhandledRejection', (reason, _promise) => {
  logger.error('Unhandled Rejection', {
    reason: reason instanceof Error ? reason.message : String(reason),
  });
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception', {
    error: error.message,
    stack: error.stack,
  });
});
