import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { buildSchema } from 'type-graphql';
import { createServer } from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { authMiddleware } from './middleware/auth';
import { createAuditLogPlugin } from './middleware/audit-logger';
import {
  startConnectionHealthMonitor,
  disconnectWithTimeout,
} from './prismaClient';
import { createHealthRouter } from './health';
import { exec } from 'child_process';
import { logger } from './utils/logger';
import { shutdownTracing } from './config/tracing';

// CORTEX-P0-001 — closed-by-default GraphQL API:
//  * `applyEnhanceOverrides` strips secret fields from the schema metadata.
//  * `getAllowedResolvers` returns only the explicit resolver allowlist.
//  * `authChecker` + `authGuardMiddleware` enforce fail-closed auth.
//  * `buildApolloContextFromRequest` / `buildApolloContextFromConnectionParams`
//    throw `GraphQLError("Unauthenticated")` on missing/invalid bearer.
import { applyEnhanceOverrides } from './graphql/enhance-overrides';
import { getAllowedResolvers } from './graphql/resolver-allowlist';
import { authChecker } from './graphql/auth-checker';
import { authGuardMiddleware } from './graphql/auth-guard';
import {
  buildApolloContextFromRequest,
  buildApolloContextFromConnectionParams,
  type BackendContext,
} from './graphql/apollo-context';

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
  // CORTEX-P0-001 layer 1: excise forbidden field metadata BEFORE the
  // schema is built. The override is idempotent, so re-importing this
  // module elsewhere is safe.
  await applyEnhanceOverrides();

  // CORTEX-P0-001 layer 2: build the schema from the explicit allowlist
  // (not the generated `resolvers` spread) and install the auth-checker
  // + global auth-guard middleware. With `authMode: 'error'`, any
  // resolver decorated with `@Authorized()` whose role check fails
  // surfaces a `ForbiddenError` to the caller. The global middleware
  // additionally fails closed on every operation when `context.user`
  // is missing, so the generated CRUD resolvers (which have no
  // `@Authorized()` decorator) are still gated by authentication.
  const schema = await buildSchema({
    resolvers: await getAllowedResolvers(),
    validate: false,
    authChecker,
    authMode: 'error',
    globalMiddlewares: [authGuardMiddleware],
  });

  const app = express();
  const httpServer = createServer(app);

  app.use('/api', (req, res, next) =>
    authMiddleware(req as AuthenticatedRequest, res, next)
  );

  // CORTEX-P0-001 layer 4: introspection is disabled in production
  // unless explicitly opted in. The default development behaviour
  // keeps introspection on so GraphiQL/Apollo Studio still work for
  // local dev.
  const introspectionEnabled =
    process.env.GRAPHQL_INTROSPECTION === 'true' ||
    process.env.NODE_ENV !== 'production';
  if (!introspectionEnabled && process.env.NODE_ENV === 'production') {
    logger.info('GraphQL introspection disabled in production (CORTEX-P0-001)');
  }

  const server = new ApolloServer<BackendContext>({
    schema,
    introspection: introspectionEnabled,
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

      return {
        message: err.message,
        locations: err.locations,
        path: err.path,
        extensions: {
          code: err.extensions?.code || 'INTERNAL_SERVER_ERROR',
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
      // CORTEX-P0-001 layer 3: the context factory is fail-closed.
      // `buildApolloContextFromRequest` throws
      // `GraphQLError("Unauthenticated", { extensions: { code: "UNAUTHENTICATED" } })`
      // on missing/invalid token; Apollo Server packages the thrown
      // error into the operation response. Returning a `{ user: null }`
      // context is no longer possible — the previous behaviour was the
      // load-bearing reason the generated CRUD resolvers were callable
      // anonymously.
      context: async ({ req }: { req: Request }) =>
        buildApolloContextFromRequest(req),
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
      // CORTEX-P0-001 layer 3 (WebSocket twin): same fail-closed
      // semantics as the HTTP context. A missing/invalid token in
      // `connectionParams.authorization` causes `buildApolloContextFromConnectionParams`
      // to throw `GraphQLError("Unauthenticated")`; `graphql-ws`
      // translates the throw into a WebSocket connection close. The
      // previous behaviour of returning `{ prisma, authError }`
      // accepted the connection and let unauthenticated subscriptions
      // proceed.
      context: async (ctx) =>
        buildApolloContextFromConnectionParams(
          ctx.connectionParams as Record<string, unknown> | undefined
        ),
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
