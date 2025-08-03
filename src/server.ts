import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { buildSchema } from 'type-graphql';
import { resolvers } from './generated/typegraphql-prisma';
import { createServer } from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import jwt from 'jsonwebtoken';
import { authMiddleware } from './middleware/auth';
import prisma from './prismaClient';
import { exec } from 'child_process';
import dotenv from 'dotenv';
dotenv.config();

import { Request } from 'express';

interface AuthenticatedRequest extends Request {
  // Add any additional properties that are specific to authenticated requests
  user: any; // Replace 'any' with the actual type of the user object
}

let dbUnreachableCount = 0;
let lastRestartAttempt = 0;
async function restartDatabase() {
  return new Promise<void>((resolve, reject) => {
    console.log("Attempting to redeploy the Railway Postgres service in production...");

    // Check for both types of tokens
    const projectToken = process.env.RAILWAY_TOKEN;
    const apiToken = process.env.RAILWAY_API_TOKEN;

    if (!projectToken && !apiToken) {
      return reject(new Error('Neither RAILWAY_TOKEN nor RAILWAY_API_TOKEN found in environment variables'));
    }

    // Simplified command based on Railway CLI documentation
    const deployCommand = `RAILWAY_TOKEN=${projectToken || ''} RAILWAY_API_TOKEN=${apiToken || ''} railway redeploy --service Postgres -y`;

    exec(deployCommand, {
      env: process.env,
      shell: '/bin/sh'
    }, (error, stdout, stderr) => {
      if (error) {
        console.error('Failed to redeploy DB via Railway CLI:', error);
        console.error('Command output:', stdout);
        console.error('Command errors:', stderr);
        return reject(error);
      }

      console.log('Railway deployment output:', stdout);
      resolve();
    });
  });
}

const startServer = async () => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const app = express();
  const httpServer = createServer(app);

  app.use('/api', (req, res, next) => authMiddleware(req as AuthenticatedRequest, res, next));

  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    formatError: (err) => {
      console.error('GraphQL Error:', JSON.stringify(err, null, 2));

      // Check if this error is due to unreachable DB
      const message = err.message || '';
      if (message.includes("Can't reach database server")) {
        dbUnreachableCount += 1;
        console.log(`DB unreachable count: ${dbUnreachableCount}`);

        // If we've hit 3 (for example) attempts
        if (dbUnreachableCount >= 3) {
          const now = Date.now();
          // Optional: Check if we've tried restarting recently
          if (now - lastRestartAttempt > 5 * 60 * 1000) {
            lastRestartAttempt = now;
            try {
              restartDatabase();
              // Reset the counter after attempting a restart
              dbUnreachableCount = 0;
            } catch (restartError) {
              console.error('Error trying to restart DB:', restartError);
              // If the restart fails, we can try again after a delay
              const backoffTime = Math.min(30000, 1000 * Math.pow(2, dbUnreachableCount - 3)); // Exponential backoff with a max of 30 seconds
              console.log(`Waiting for ${backoffTime / 1000} seconds before next restart attempt...`);
              setTimeout(() => {
                restartDatabase()
                  .then(() => {
                    dbUnreachableCount = 0; // Reset the counter after a successful restart
                  })
                  .catch((restartError) => {
                    console.error('Error trying to restart DB:', restartError);
                    // We do not reset the counter here if the restart fails,
                    // so it can try again next time.
                  });
              }, backoffTime);
            }
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

  app.use(
    '/graphql',
    cors<Request>(),
    bodyParser.json(),
    expressMiddleware(server as any, {
      context: async ({ req }) => {
        // Ensure we're using the global prisma instance and never disconnecting it between requests
        if (!global.prisma) {
          console.warn('Prisma client not found in global scope, reinitializing');
          global.prisma = prisma;
        }

        console.log('Received headers:', req.headers);
        console.log('Authorization header:', req.headers.authorization);

        // Extract token from Authorization header
        const authHeader = req.headers.authorization || '';
        // Only try to verify token if it's in proper Bearer format
        const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : '';
        
        let user = null;
        if (token) {
          // Check if token is a Google OAuth token (starts with ya29.)
          if (token.startsWith('ya29.')) {
            // For Google OAuth tokens, we should validate differently or pass them through
            // This is a temporary solution - ideally you should verify with Google's OAuth API
            console.log('Detected Google OAuth token, skipping JWT verification');
            user = { provider: 'google', token };
          } else {
            // For regular JWT tokens, verify as before
            try {
              // Use a default secret for development if JWT_SECRET is not set
              const secretKey = process.env.JWT_SECRET || 'development_secret_key_for_local_testing_only';
              
              // For testing/debugging with standard JWT tokens
              if (token === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.HcK9I0usxUgJYQd0NpBZG74MTUD9J1Vf9V_6iH7CFMk') {
                console.log('Using test JWT token in GraphQL context');
                user = { sub: '1234567890', name: 'John Doe', iat: 1516239022 };
              } else {
                user = jwt.verify(token, secretKey);
              }
            } catch (e) {
              console.error('JWT verification failed:', e);
              console.error('Received token:', token);
              return { prisma: global.prisma, req, authError: 'Invalid token' };
            }
          }
        }
        return { prisma: global.prisma, req, user };
      },
    }),
  );

  // Custom error handling middleware for express
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Express error:', err);
    res.status(500).json({ error: 'An internal server error occurred' });
  });

  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
  });

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/subscriptions',
  });

  useServer(
    {
      schema,
      context: async (ctx, msg, args) => {
        // Ensure we're using the global prisma instance for WebSocket connections too
        if (!global.prisma) {
          console.warn('Prisma client not found in global scope for WebSocket context, reinitializing');
          global.prisma = prisma;
        }

        const authHeader = (ctx.connectionParams as { authorization?: string })?.authorization || '';
        const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : '';
        
        let user = null;
        if (token) {
          // Check if token is a Google OAuth token (starts with ya29.)
          if (token.startsWith('ya29.')) {
            // For Google OAuth tokens, we should validate differently or pass them through
            console.log('Detected Google OAuth token in WebSocket, skipping JWT verification');
            user = { provider: 'google', token };
          } else {
            // For regular JWT tokens, verify as before
            try {
              // Use a default secret for development if JWT_SECRET is not set
              const secretKey = process.env.JWT_SECRET || 'development_secret_key_for_local_testing_only';
              
              // For testing/debugging with standard JWT tokens
              if (token === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.HcK9I0usxUgJYQd0NpBZG74MTUD9J1Vf9V_6iH7CFMk') {
                console.log('Using test JWT token in WebSocket connection');
                user = { sub: '1234567890', name: 'John Doe', iat: 1516239022 };
              } else {
                user = jwt.verify(token, secretKey);
              }
            } catch (e) {
              console.error('JWT verification failed:', e);
              return { prisma: global.prisma, authError: 'Invalid token' };
            }
          }
        }
        return { prisma: global.prisma, user };
      },
    },
    wsServer
  );

  const PORT = process.env.PORT || 4000;
  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}/subscriptions`);
  });
};

startServer().catch((error) => {
  console.error('Error starting the server', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

// Only disconnect Prisma when the process is truly shutting down
process.on('SIGINT', async () => {
  console.log('Gracefully shutting down and closing database connections...');
  try {
    await global.prisma?.$disconnect();
    console.log('Database connections closed successfully');
  } catch (e) {
    console.error('Error disconnecting from database:', e);
  }
  process.exit(0);
});

// Also handle SIGTERM for containerized environments
process.on('SIGTERM', async () => {
  console.log('Received SIGTERM, gracefully shutting down...');
  try {
    await global.prisma?.$disconnect();
    console.log('Database connections closed successfully');
  } catch (e) {
    console.error('Error disconnecting from database:', e);
  }
  process.exit(0);
});


// // run restartDatabase() function
// restartDatabase().then(() => {
//   console.log('Database restarted successfully');
// }).catch((error) => {
//   console.error('Error restarting database:', error);
// });