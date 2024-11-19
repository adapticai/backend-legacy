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
import { prisma } from './prismaClient';

const startServer = async () => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const app = express();
  const httpServer = createServer(app);

  app.use('/api', authMiddleware);

  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    formatError: (err) => {
      console.error('GraphQL Error:', JSON.stringify(err, null, 2));
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
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        console.log('Received headers:', req.headers);
        console.log('Authorization header:', req.headers.authorization);

        const token = req.headers.authorization?.split(' ')[1] || '';

        let user = null;
        if (token) {
          try {
            user = jwt.verify(token, process.env.JWT_SECRET as string);
          } catch (e) {
            console.error('JWT verification failed:', e);
            console.error('Received token:', token);
            return { prisma, req, authError: 'Invalid token' };
          }
        }
        return { prisma, req, user };
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
        // Handle context for WebSocket connections, including JWT verification
        const token = (ctx.connectionParams as { authorization?: string })?.authorization?.split(' ')[1] || '';
        let user = null;
        if (token) {
          try {
            user = jwt.verify(token, process.env.JWT_SECRET as string);
          } catch (e) {
            console.error('JWT verification failed:', e);
            return { prisma, authError: 'Invalid token' };
          }
        }
        return { prisma, user };
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
  // Application specific logging, throwing an error, or other logic here
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Application specific logging, throwing an error, or other logic here
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

