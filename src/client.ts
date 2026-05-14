// client.ts

import { logger } from './utils/logger';

// === Export type definitions (statically) ===
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  NormalizedCacheObject,
  DefaultOptions,
} from '@apollo/client';

import { HttpLink as HttpLinkType } from '@apollo/client/link/http';

export type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
};

// === Define an interface for the expected runtime exports ===
export interface ApolloModules {
  ApolloClient: typeof import('@apollo/client').ApolloClient;
  InMemoryCache: typeof import('@apollo/client/cache/inmemory/inMemoryCache').InMemoryCache;
  HttpLink: typeof import('@apollo/client/link/http').HttpLink;
  gql: typeof import('@apollo/client').gql;
  ApolloError: typeof import('@apollo/client').ApolloError;
  split: typeof import('@apollo/client').split;
  setContext: typeof import('@apollo/client/link/context').setContext;
  onError: typeof import('@apollo/client/link/error').onError;
}

// === Connection Pool Configuration ===
interface ConnectionPoolConfig {
  maxConcurrentOperations: number;
  retryAttempts: number;
  retryDelay: number;
  connectionTimeout: number;
  /**
   * Maximum depth of the in-memory operation queue. When the queue length
   * reaches this threshold, new first-attempt operations are rejected
   * synchronously with a LOAD_SHEDDING error instead of being enqueued.
   * Retries bypass this check so in-flight work completes.
   *
   * Prevents unbounded queue growth during backend stalls (e.g. Postgres
   * checkpoint I/O pauses on Railway shared volumes): without admission
   * control, 30s+ stalls accumulate hundreds of queued operations that all
   * fire together when the stall clears, saturating the backend event loop
   * and causing a retry storm of cascading 30s client-side timeouts.
   */
  maxQueueDepth: number;
  /**
   * Maximum time (ms) an operation may sit in the queue before executing.
   * If a queued operation waits longer than this on its first attempt, it
   * is rejected with a QUEUE_WAIT_TIMEOUT error instead of firing against
   * a likely-already-overloaded backend. Retries bypass this check.
   *
   * Prevents "zombie" requests that fire long after the caller has
   * given up (engine default is a 30s client fetch timeout): executing
   * them wastes backend capacity on results nobody wants.
   */
  queueWaitTimeoutMs: number;
}

const DEFAULT_POOL_CONFIG: ConnectionPoolConfig = {
  // Lowered from 100 → 50 so this client does not fire more concurrent
  // GraphQL ops than the server-side Prisma pool (production default
  // raised to 35 in prismaClient.ts) can execute without queueing.
  // A 100:20 ratio was producing "DatabaseHealthCheck exhausted retries
  // (3/3)" cascades on Railway adaptic-os/stable where 80 ops queued on
  // a saturated pool and blew the 10s connectionTimeout.
  maxConcurrentOperations: 50,
  retryAttempts: 3, // Number of retry attempts for failed operations
  retryDelay: 1000, // Base delay in ms between retries (will use exponential backoff)
  connectionTimeout: 10000, // Connection timeout in ms
  // Keep a 3× concurrency queue so short spikes don't load-shed.
  maxQueueDepth: 150,
  queueWaitTimeoutMs: 15000, // Drop queued ops that waited > 15s (half of typical 30s fetch timeout)
};

// === Token Provider Type ===
/**
 * Function type for dynamic token providers.
 * Allows clients to provide tokens dynamically (e.g., from session storage).
 */
export type TokenProvider = () => string | Promise<string>;

// === Internal state ===
let apolloModules: ApolloModules | undefined;
let apolloClient: ApolloClientType<NormalizedCacheObject> | undefined;
let pendingOperations = 0;
let operationQueue: Array<() => Promise<void>> = [];
let poolConfig: ConnectionPoolConfig = DEFAULT_POOL_CONFIG;
let customTokenProvider: TokenProvider | undefined;

/**
 * Dynamically loads the correct Apollo modules based on the runtime environment.
 */
async function loadApolloModules(): Promise<ApolloModules> {
  if (typeof window === 'undefined' || process.env.AWS_EXECUTION_ENV) {
    // Server-side (or Lambda): load the CommonJS‑based implementation.
    return (await import('./apollo-client.server')) as ApolloModules;
  } else {
    // Client-side: load the ESM‑based implementation.
    return (await import('./apollo-client.client')) as ApolloModules;
  }
}

/**
 * Configures the connection pool for Apollo Client.
 * Call this function to customize connection pooling behavior.
 */
export function configureConnectionPool(
  config: Partial<ConnectionPoolConfig>
): void {
  poolConfig = { ...poolConfig, ...config };
  logger.info('Apollo client connection pool configured', {
    poolConfig: JSON.stringify(poolConfig),
  });
}

/**
 * Sets a custom token provider for dynamic authentication.
 * This allows clients to provide tokens from session storage, cookies, etc.
 *
 * @param provider - Function that returns the auth token (sync or async)
 *
 * @example
 * // Using with NextAuth session token
 * setTokenProvider(async () => {
 *   const session = await getSession();
 *   return session?.accessToken || '';
 * });
 */
export function setTokenProvider(provider: TokenProvider): void {
  customTokenProvider = provider;
  // Reset the client so it picks up the new token provider
  if (apolloClient) {
    logger.info(
      'Token provider updated, Apollo client will be recreated on next request'
    );
    apolloClient = undefined;
  }
}

/**
 * Validates that a token looks like a valid JWT.
 * JWTs have three base64url-encoded parts separated by dots.
 */
function isValidJwtFormat(token: string): boolean {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  // Check that each part is base64url encoded (alphanumeric, -, _, no padding needed)
  const base64UrlRegex = /^[A-Za-z0-9_-]+$/;
  return parts.every((part) => base64UrlRegex.test(part));
}

/**
 * Gets the authentication token with validation.
 * Returns empty string if no valid token is available.
 */
async function getAuthToken(): Promise<string> {
  let token = '';

  // First, try the custom token provider if set
  if (customTokenProvider) {
    try {
      token = await Promise.resolve(customTokenProvider());
    } catch (error) {
      logger.error('[Apollo Client] Error getting token from custom provider', {
        error: String(error),
      });
    }
  }

  // Fall back to environment variables
  if (!token) {
    token =
      process.env.NEXT_PUBLIC_SERVER_AUTH_TOKEN ||
      process.env.SERVER_AUTH_TOKEN ||
      '';
  }

  // Validate the token format
  if (token && !isValidJwtFormat(token)) {
    // Check if it looks like a Google OAuth token
    if (token.startsWith('ya29.')) {
      // Google OAuth tokens are valid, pass through
      return token;
    }

    logger.warn(
      '[Apollo Client] Token does not appear to be a valid JWT format. ' +
        'Expected format: header.payload.signature (three base64url-encoded parts). ' +
        'Token will not be sent. Please check your NEXT_PUBLIC_SERVER_AUTH_TOKEN or SERVER_AUTH_TOKEN environment variable.'
    );
    return '';
  }

  return token;
}

/**
 * Processes the operation queue respecting the connection pool limits.
 */
function processQueue(): void {
  // Process queue until we reach max concurrent operations or queue is empty
  while (
    pendingOperations < poolConfig.maxConcurrentOperations &&
    operationQueue.length > 0
  ) {
    const operation = operationQueue.shift();
    if (operation) {
      pendingOperations++;
      void operation().finally(() => {
        pendingOperations--;
        processQueue(); // Process next item after an operation completes
      });
    }
  }
}

/**
 * Adds an operation to the queue with retry capability.
 *
 * @param operation - The async operation to execute
 * @param operationName - Symbolic name for the operation (used in structured
 *   logs and load-shedding error messages). Defaults to 'unknown' when the
 *   caller cannot derive a meaningful name (e.g. anonymous GraphQL documents).
 * @param attempt - Current retry attempt (0 for first call)
 */
async function enqueueOperation<T>(
  operation: () => Promise<T>,
  operationName: string = 'unknown',
  attempt = 0
): Promise<T> {
  // Load shedding: reject new (first-attempt) operations when the queue is
  // saturated. This turns a cascading 30s timeout storm during backend
  // stalls into a fast-fail that callers can handle explicitly (e.g. log,
  // retry later, or skip this cycle). Retries bypass this check because
  // they represent in-flight commitments that already consumed backend
  // capacity on the first attempt.
  if (attempt === 0 && operationQueue.length >= poolConfig.maxQueueDepth) {
    logger.warn(
      `Apollo operation '${operationName}' rejected — queue saturated (${operationQueue.length}/${poolConfig.maxQueueDepth})`,
      {
        operation: operationName,
        queueDepth: operationQueue.length,
        maxQueueDepth: poolConfig.maxQueueDepth,
        pendingOperations,
        maxConcurrentOperations: poolConfig.maxConcurrentOperations,
        category: 'LOAD_SHEDDING',
      }
    );
    return Promise.reject(
      new Error(
        `Apollo operation '${operationName}' rejected: queue saturated (${operationQueue.length}/${poolConfig.maxQueueDepth}). Backend is overloaded.`
      )
    );
  }

  return new Promise((resolve, reject) => {
    const enqueuedAt = Date.now();
    const executeWithRetry = async (): Promise<void> => {
      // Queue-wait timeout: if this operation sat in the queue longer than
      // queueWaitTimeoutMs before a slot opened up, the caller has almost
      // certainly already timed out (engine's default fetch timeout is 30s).
      // Firing the request anyway wastes backend capacity on results nobody
      // is waiting for. Retries bypass this check — they have their own
      // retry-specific delay semantics.
      if (attempt === 0) {
        const waitMs = Date.now() - enqueuedAt;
        if (waitMs > poolConfig.queueWaitTimeoutMs) {
          logger.warn(
            `Apollo operation '${operationName}' dropped — queue wait exceeded ${poolConfig.queueWaitTimeoutMs}ms (waited ${waitMs}ms)`,
            {
              operation: operationName,
              waitMs,
              queueWaitTimeoutMs: poolConfig.queueWaitTimeoutMs,
              queueDepth: operationQueue.length,
              pendingOperations,
              category: 'QUEUE_WAIT_TIMEOUT',
            }
          );
          reject(
            new Error(
              `Apollo operation '${operationName}' dropped: queue wait ${waitMs}ms exceeded ${poolConfig.queueWaitTimeoutMs}ms. Caller likely already timed out.`
            )
          );
          return;
        }
      }

      try {
        const result = await operation();
        resolve(result);
      } catch (error) {
        if (
          attempt < poolConfig.retryAttempts &&
          ((error instanceof Error && error.message.includes('Accelerate')) ||
            (error instanceof Error && error.message.includes('code: 1016')))
        ) {
          // Only retry specific database connection errors
          const delay = poolConfig.retryDelay * Math.pow(2, attempt); // Exponential backoff
          logger.warn(
            `Apollo operation failed, retrying in ${delay}ms (attempt ${attempt + 1}/${poolConfig.retryAttempts})`
          );
          setTimeout(() => {
            enqueueOperation(operation, operationName, attempt + 1)
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
export async function getApolloClient(): Promise<
  ApolloClientType<NormalizedCacheObject>
> {
  if (apolloClient) {
    return apolloClient;
  }

  try {
    if (!apolloModules) {
      apolloModules = await loadApolloModules();
    }

    const { ApolloClient, InMemoryCache, HttpLink, setContext, onError } =
      apolloModules;

    // Determine the GraphQL endpoint.
    const isProduction = process.env.NODE_ENV === 'production';
    const httpUrl =
      process.env.NEXT_PUBLIC_BACKEND_HTTPS_URL ||
      process.env.BACKEND_HTTPS_URL ||
      (isProduction
        ? 'https://api.adaptic.ai/graphql'
        : 'http://localhost:4000/graphql');

    // Enforce connectionTimeout via AbortSignal.timeout(). The prior
    // `fetchOptions.timeout` was not a valid Fetch API option and was
    // silently ignored, leaving hung backend responses to block the
    // connection-pool queue indefinitely. Ported from SR commit 38fbbfa.
    const timeoutMs = poolConfig.connectionTimeout;
    const fetchWithTimeout: typeof fetch = (input, init) => {
      const timeoutSignal = AbortSignal.timeout(timeoutMs);
      const existingSignal = init?.signal;
      const signal = existingSignal
        ? AbortSignal.any([existingSignal, timeoutSignal])
        : timeoutSignal;
      return fetch(input, { ...init, signal });
    };

    // Create the HTTP link with appropriate fetch policies and timeouts
    const httpLinkInstance = new HttpLink({
      uri: httpUrl,
      fetch: fetchWithTimeout,
    });

    // Create the auth link with async token retrieval and validation.
    const authLink = setContext(async (request, prevContext) => {
      const headers = prevContext.headers || {};
      // Retrieve and validate the token
      const token = await getAuthToken();
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
          connection: 'keep-alive',
        },
      };
    });

    // Create the error handling link with retry logic.
    //
    // Apollo's onError link fires on every error including transient ones
    // that the wrapping retryLink (and the engine-side retry-with-backoff
    // queue at executeWithRetry above) handles automatically. Logging
    // every transient blip at ERROR floods the consumer's error budget
    // and triggers spurious alerts during checkpoint storms / brief
    // network jitter. Demote known transient classes to WARN; reserve
    // ERROR for genuine non-recoverable issues.
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
          // Same demotion classes as the formatError handler in server.ts
          // and the prismaClient $on('error') categorizer:
          //   - Delete/update race on already-removed rows -> INFO
          //   - Invalid UUID input from buggy callers -> WARN
          //   - Everything else -> ERROR
          const isExpectedDeleteRace =
            message.includes('No record was found for a delete') ||
            message.includes('No record was found for an update');
          const isInvalidUuidInput =
            message.includes('Error creating UUID') ||
            message.includes('Inconsistent column data: Error creating UUID');

          if (isExpectedDeleteRace) {
            logger.info(
              `[GraphQL expected race]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
          } else if (isInvalidUuidInput) {
            logger.warn(
              `[GraphQL invalid UUID input]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
          } else {
            logger.error(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
          }
        });
      }
      if (networkError) {
        const errMessage = String(networkError);
        // Network-class transients that the wrapping retry queue at
        // executeWithRetry already handles automatically. Each retry
        // attempt was logging at ERROR, producing 7+ ERROR lines per
        // retry sequence. Demote known transients to WARN; reserve
        // ERROR for non-network failures (TLS handshake, DNS resolve,
        // SSL cert validation).
        const isTransient =
          errMessage.includes('TypeError: fetch failed') ||
          errMessage.includes('TimeoutError') ||
          errMessage.includes('aborted due to timeout') ||
          errMessage.includes('ECONNRESET') ||
          errMessage.includes('ETIMEDOUT') ||
          errMessage.includes('ECONNREFUSED') ||
          errMessage.includes('socket hang up') ||
          errMessage.includes('status code 408') ||
          errMessage.includes('status code 502') ||
          errMessage.includes('status code 503') ||
          errMessage.includes('status code 504');

        if (isTransient) {
          logger.warn(
            `[Network error]: ${errMessage} (transient — caller retry queue will handle)`
          );
        } else {
          logger.error(`[Network error]: ${errMessage}`);
        }
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
        // Apollo Client 3.14+ deprecates addTypename option
        // __typename is added automatically by default, no need to specify
        typePolicies: {},
      }),
      defaultOptions,
      devtools: {
        enabled: process.env.NODE_ENV !== 'production',
      },
    });

    // Wrap the client's query and mutate methods to use our connection pool
    const originalQuery = apolloClient.query.bind(apolloClient);
    const originalMutate = apolloClient.mutate.bind(apolloClient);

    // Best-effort extraction of the GraphQL operation name from the document
    // so structured logs and load-shedding errors identify the offending query.
    const extractOpName = (doc: unknown): string => {
      if (!doc || typeof doc !== 'object') return 'unknown';
      const defs = (doc as { definitions?: ReadonlyArray<unknown> })
        .definitions;
      if (!Array.isArray(defs)) return 'unknown';
      for (const def of defs) {
        const node = def as { kind?: string; name?: { value?: string } };
        if (node.kind === 'OperationDefinition' && node.name?.value) {
          return node.name.value;
        }
      }
      return 'unknown';
    };

    apolloClient.query = (options) => {
      return enqueueOperation(
        () => originalQuery(options),
        extractOpName(options.query)
      );
    };

    apolloClient.mutate = (options) => {
      return enqueueOperation(
        () => originalMutate(options),
        extractOpName(options.mutation)
      );
    };

    return apolloClient;
  } catch (error) {
    logger.error('Error initializing Apollo Client', { error: String(error) });
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
