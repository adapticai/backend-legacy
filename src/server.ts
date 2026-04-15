import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { buildSchema } from 'type-graphql';
import { resolvers } from './generated/typegraphql-prisma';
import { OptionsGreeksHistoryCustomResolver } from './resolvers/custom';
import { createServer } from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import jwt from 'jsonwebtoken';
import { authMiddleware } from './middleware/auth';
import { createAuditLogPlugin } from './middleware/audit-logger';
import { jwtSecret } from './config/jwtConfig';
import prisma, {
  startConnectionHealthMonitor,
  disconnectWithTimeout,
} from './prismaClient';
import { createHealthRouter } from './health';
import { buildInternalRouter } from './crypto/internal-credential-router';
import { buildInternalBrokersRouter } from './crypto/internal-brokers-router';
import { exec } from 'child_process';
import { logger } from './utils/logger';
import { shutdownTracing } from './config/tracing';

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

  // Internal REST router for engine -> backend credential fetches. Gated by
  // SERVER_AUTH_TOKEN (same scheme as the GraphQL context's server-auth path).
  // Never CORS-exposed; only reachable from the in-cluster network.
  // See: docs/superpowers/specs/2026-04-15-multi-broker-crypto-design.md §3.3
  app.use('/internal', bodyParser.json({ limit: '16kb' }), buildInternalRouter());
  app.use(
    '/internal/brokers',
    bodyParser.json({ limit: '16kb' }),
    buildInternalBrokersRouter()
  );

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
        // Only try to verify token if it's in proper Bearer format
        const token = authHeader.startsWith('Bearer ')
          ? authHeader.split(' ')[1]
          : '';

        let user = null;
        if (token) {
          // Check if token is a Google OAuth token (starts with ya29.)
          if (token.startsWith('ya29.')) {
            // For Google OAuth tokens, we should validate differently or pass them through
            // This is a temporary solution - ideally you should verify with Google's OAuth API
            user = { provider: 'google', token };
          } else {
            // Validate JWT format before attempting verification (must have 3 dot-separated parts)
            const tokenParts = token.split('.');
            if (tokenParts.length !== 3) {
              // Log only once per unique malformed token to avoid log spam
              const tokenPreview =
                token.length > 20 ? `${token.substring(0, 20)}...` : token;
              logger.warn('Received malformed token (not a valid JWT format)', {
                tokenPreview,
              });
              // Continue without authentication - don't fail the request
              return {
                prisma: global.prisma,
                req,
                authError:
                  'Malformed token: expected JWT format (header.payload.signature)',
              };
            }

            // For regular JWT tokens, verify using the centralized secret
            try {
              // Check for server-to-server auth token from environment
              const serverAuthToken = process.env.SERVER_AUTH_TOKEN;
              if (serverAuthToken && token === serverAuthToken) {
                user = { sub: 'server', name: 'Server Auth', role: 'server' };
              } else {
                user = jwt.verify(token, jwtSecret);
              }
            } catch (e) {
              // Only log verification failures at warn level with minimal info
              const errorMessage =
                e instanceof Error ? e.message : 'Unknown error';
              logger.warn('JWT verification failed', { errorMessage });
              return { prisma: global.prisma, req, authError: 'Invalid token' };
            }
          }
        }
        return { prisma: global.prisma, req, user };
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
          ? authHeader.split(' ')[1]
          : '';

        let user = null;
        if (token) {
          // Check if token is a Google OAuth token (starts with ya29.)
          if (token.startsWith('ya29.')) {
            // For Google OAuth tokens, we should validate differently or pass them through
            logger.info(
              'Detected Google OAuth token in WebSocket, skipping JWT verification'
            );
            user = { provider: 'google', token };
          } else {
            // For regular JWT tokens, verify using the centralized secret
            try {
              // Check for server-to-server auth token from environment
              const serverAuthToken = process.env.SERVER_AUTH_TOKEN;
              if (serverAuthToken && token === serverAuthToken) {
                user = { sub: 'server', name: 'Server Auth', role: 'server' };
              } else {
                user = jwt.verify(token, jwtSecret);
              }
            } catch (e) {
              const errorMessage =
                e instanceof Error ? e.message : 'Unknown error';
              logger.warn('WebSocket JWT verification failed', {
                errorMessage,
              });
              return { prisma: global.prisma, authError: 'Invalid token' };
            }
          }
        }
        return { prisma: global.prisma, user };
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
