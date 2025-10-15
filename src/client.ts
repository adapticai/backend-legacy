// client.ts

// === Export type definitions (statically) ===
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  NormalizedCacheObject,
  DefaultOptions,
} from "@apollo/client";

import { HttpLink as HttpLinkType } from "@apollo/client/link/http";

export type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
};

// === Define an interface for the expected runtime exports ===
export interface ApolloModules {
  ApolloClient: typeof import("@apollo/client").ApolloClient;
  InMemoryCache: typeof import("@apollo/client/cache/inmemory/inMemoryCache").InMemoryCache;
  HttpLink: typeof import("@apollo/client/link/http").HttpLink;
  gql: typeof import("@apollo/client").gql;
  ApolloError: typeof import("@apollo/client").ApolloError;
  split: typeof import("@apollo/client").split;
  setContext: typeof import("@apollo/client/link/context").setContext;
  onError: typeof import("@apollo/client/link/error").onError;
}

// === Connection Pool Configuration ===
interface ConnectionPoolConfig {
  maxConcurrentOperations: number;
  retryAttempts: number;
  retryDelay: number;
  connectionTimeout: number;
}

const DEFAULT_POOL_CONFIG: ConnectionPoolConfig = {
  maxConcurrentOperations: 100,  // Maximum concurrent operations to the database
  retryAttempts: 3,            // Number of retry attempts for failed operations
  retryDelay: 1000,             // Base delay in ms between retries (will use exponential backoff)
  connectionTimeout: 10000,    // Connection timeout in ms
};

// === Internal state ===
let apolloModules: ApolloModules | undefined;
let apolloClient: ApolloClientType<NormalizedCacheObject> | undefined;
let pendingOperations = 0;
let operationQueue: Array<() => Promise<void>> = [];
let poolConfig: ConnectionPoolConfig = DEFAULT_POOL_CONFIG;

/**
 * Dynamically loads the correct Apollo modules based on the runtime environment.
 */
async function loadApolloModules(): Promise<ApolloModules> {
  if (typeof window === "undefined" || process.env.AWS_EXECUTION_ENV) {
    // Server-side (or Lambda): load the CommonJS‑based implementation.
    return (await import("./apollo-client.server")) as ApolloModules;
  } else {
    // Client-side: load the ESM‑based implementation.
    return (await import("./apollo-client.client")) as ApolloModules;
  }
}

/**
 * Configures the connection pool for Apollo Client.
 * Call this function to customize connection pooling behavior.
 */
export function configureConnectionPool(config: Partial<ConnectionPoolConfig>): void {
  poolConfig = { ...poolConfig, ...config };
  console.log(`Apollo client connection pool configured: ${JSON.stringify(poolConfig)}`);
}

/**
 * Processes the operation queue respecting the connection pool limits.
 */
function processQueue(): void {
  // Process queue until we reach max concurrent operations or queue is empty
  while (pendingOperations < poolConfig.maxConcurrentOperations && operationQueue.length > 0) {
    const operation = operationQueue.shift();
    if (operation) {
      pendingOperations++;
      operation().finally(() => {
        pendingOperations--;
        processQueue(); // Process next item after an operation completes
      });
    }
  }
}

/**
 * Adds an operation to the queue with retry capability.
 */
async function enqueueOperation<T>(operation: () => Promise<T>, attempt = 0): Promise<T> {
  return new Promise((resolve, reject) => {
    const executeWithRetry = async (): Promise<void> => {
      try {
        const result = await operation();
        resolve(result);
      } catch (error) {
        if (attempt < poolConfig.retryAttempts &&
          (error instanceof Error && error.message.includes("Accelerate") ||
            error instanceof Error && error.message.includes("code: 1016"))) {
          // Only retry specific database connection errors
          const delay = poolConfig.retryDelay * Math.pow(2, attempt); // Exponential backoff
          console.warn(`Apollo operation failed, retrying in ${delay}ms (attempt ${attempt + 1}/${poolConfig.retryAttempts})`);
          setTimeout(() => {
            enqueueOperation(operation, attempt + 1)
              .then(resolve)
              .catch(reject);
          }, delay);
        } else {
          reject(error);
        }
      }
    };

    operationQueue.push(executeWithRetry);
    processQueue();
  });
}

/**
 * Returns a singleton Apollo Client instance with connection pooling.
 * **IMPORTANT:** Because module loading is asynchronous,
 * make sure to await this function before using the client.
 */
export async function getApolloClient(): Promise<ApolloClientType<NormalizedCacheObject>> {
  if (apolloClient) {
    return apolloClient;
  }

  try {
    if (!apolloModules) {
      apolloModules = await loadApolloModules();
    }

    const { ApolloClient, InMemoryCache, HttpLink, setContext, onError } = apolloModules;

    // Determine the GraphQL endpoint.
    const isProduction = process.env.NODE_ENV === "production";
    const httpUrl = process.env.NEXT_PUBLIC_BACKEND_HTTPS_URL || process.env.BACKEND_HTTPS_URL ||
      (isProduction ? "https://api.adaptic.ai/graphql" : "http://localhost:4000/graphql");

    // Create the HTTP link with appropriate fetch policies and timeouts
    const httpLinkInstance = new HttpLink({
      uri: httpUrl,
      fetch,
      fetchOptions: {
        timeout: poolConfig.connectionTimeout,
      }
    });

    // Create the auth link.
    const authLink = setContext((request, prevContext) => {
      const headers = prevContext.headers || {};
      // Retrieve the token from environment variables or other secure storage.
      const token = process.env.NEXT_PUBLIC_SERVER_AUTH_TOKEN || process.env.SERVER_AUTH_TOKEN || "";
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
          connection: "keep-alive",
        },
      };
    });

    // Create the error handling link with retry logic.
    const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }: any) => {
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          );
        });
      }
      if (networkError) {
        console.error(`[Network error]: ${networkError}`);
      }
    });

    // Default options with conservative caching and fetch policies
    const defaultOptions: DefaultOptions = {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    };

    // Initialize the Apollo Client with our custom settings
    // Note: Explicitly avoid canonizeResults (deprecated in Apollo Client 3.14+)
    apolloClient = new ApolloClient({
      link: errorLink.concat(authLink.concat(httpLinkInstance)),
      cache: new InMemoryCache({
        // Explicitly set type policies without deprecated options
        typePolicies: {}
      }),
      defaultOptions,
      devtools: {
        enabled: process.env.NODE_ENV !== 'production',
      },
    });

    // Wrap the client's query and mutate methods to use our connection pool
    const originalQuery = apolloClient.query.bind(apolloClient);
    const originalMutate = apolloClient.mutate.bind(apolloClient);

    apolloClient.query = (options) => {
      return enqueueOperation(() => originalQuery(options));
    };

    apolloClient.mutate = (options) => {
      return enqueueOperation(() => originalMutate(options));
    };

    return apolloClient;
  } catch (error) {
    console.error('Error initializing Apollo Client:', error);
    throw error;
  }
}

/**
 * Returns the underlying runtime exports.
 *
 * **Note:** Because the exports are loaded dynamically,
 * they are not available as named (synchronous) exports from this module.
 */
export async function getApolloModules(): Promise<ApolloModules> {
  if (!apolloModules) {
    apolloModules = await loadApolloModules();
  }
  return apolloModules;
}

/**
 * For convenience, you may also export a promise that resolves to the Apollo Client.
 * IMPORTANT: It's recommended to explicitly call getApolloClient() instead of using
 * this constant to ensure proper initialization and avoid race conditions.
 */
export const client = getApolloClient();
