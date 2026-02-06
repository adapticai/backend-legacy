/**
 * Integration Example for GraphQL Security Plugins
 *
 * This file shows how to integrate the query depth limiter and error sanitizer
 * into your Apollo Server configuration.
 *
 * DO NOT RUN THIS FILE - it's just an example!
 *
 * To integrate into src/server.ts:
 *
 * 1. Add these imports at the top:
 *    import { queryDepthLimiterPlugin } from './plugins/query-depth-limiter';
 *    import { createErrorSanitizer } from './plugins/error-sanitizer';
 *
 * 2. Replace the existing ApolloServer configuration:
 */

import { ApolloServer, BaseContext } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { GraphQLSchema } from 'graphql';
import { Server as HttpServer } from 'http';
import { queryDepthLimiterPlugin } from './query-depth-limiter';
import { createErrorSanitizer } from './error-sanitizer';

// Example: This is how your server configuration should look
function createExampleServer(schema: GraphQLSchema, httpServer: HttpServer): ApolloServer<BaseContext> {
  // BEFORE (current server.ts - lines 74-132):
  // const server = new ApolloServer({
  //   schema,
  //   introspection: true,
  //   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  //   formatError: (err) => {
  //     console.error('GraphQL Error:', JSON.stringify(err, null, 2));
  //     // ... custom logic for DB restarts ...
  //     return {
  //       message: err.message,
  //       locations: err.locations,
  //       path: err.path,
  //       extensions: {
  //         code: err.extensions?.code || 'INTERNAL_SERVER_ERROR',
  //       },
  //     };
  //   },
  // });

  // AFTER (with security plugins integrated):
  const server = new ApolloServer<BaseContext>({
    schema,
    introspection: true,
    plugins: [
      // Add query depth limiter as the first plugin
      queryDepthLimiterPlugin(),
      // Keep existing plugins
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
    // Replace formatError with the sanitizer
    formatError: createErrorSanitizer(),
  });

  return server;
}

/**
 * IMPORTANT NOTES:
 *
 * 1. The query depth limiter will run BEFORE query execution, catching
 *    overly complex queries early.
 *
 * 2. The error sanitizer will handle ALL errors, including the ones from
 *    the depth limiter and any runtime errors.
 *
 * 3. The existing DB restart logic in the current formatError should be
 *    moved to a separate plugin or kept in a custom wrapper if needed.
 *
 * 4. If you need to preserve the DB restart logic, you can create a custom
 *    formatError that calls both:
 *
 *    const sanitizer = createErrorSanitizer();
 *
 *    formatError: (err, error) => {
 *      // Your custom DB restart logic here
 *      if (err.message.includes("Can't reach database server")) {
 *        // ... handle DB restart ...
 *      }
 *
 *      // Then sanitize the error
 *      return sanitizer(err, error);
 *    }
 *
 * 5. Environment Variables:
 *    - GRAPHQL_MAX_DEPTH (default: 6)
 *    - NODE_ENV (production|development)
 */

export { createExampleServer };
