// ==========================
// 1. Type Imports (for TypeScript)
// ==========================
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  HttpLink as HttpLinkType,
  NormalizedCacheObject,
} from "@apollo/client";

// ==========================
// 2. Static (Client-side) Imports
// Use default import and destructuring so that CommonJS modules export correctly in ESM.
// ==========================
import pkg from "@apollo/client";
const {
  ApolloClient: ApolloClientImported,
  InMemoryCache: InMemoryCacheImported,
  HttpLink: HttpLinkImported,
  gql: gqlImported,
  ApolloError: ApolloErrorImported,
  split: splitImported,
} = pkg;

import contextPkg from "@apollo/client/link/context/context.cjs";
const { setContext: setContextImported } = contextPkg;

import errorPkg from "@apollo/client/link/error/error.cjs";
const { onError: onErrorImported } = errorPkg;

// ==========================
// 3. Declare Runtime Variables
// These variables will eventually be assigned the proper implementations based on the runtime.
// ==========================
let ApolloClient: typeof ApolloClientImported;
let ApolloError: typeof ApolloErrorImported;
let gql: typeof gqlImported;
let InMemoryCache: typeof InMemoryCacheImported;
let HttpLink: typeof HttpLinkImported;
let setContext: typeof setContextImported;
let onError: typeof onErrorImported;
let split: typeof splitImported;

// ==========================
// 4. Environment Detection & Conditional Assignment
// We check if we are in a server environment (including AWS Lambda)
// ==========================
const isLambda = Boolean(process.env.AWS_EXECUTION_ENV);
const isServer = typeof window === "undefined";

if (isServer || isLambda) {
  // --- Server-side (or AWS Lambda) ---
  // Use require() to load the modules synchronously at runtime.
  const pkg = require("@apollo/client");
  ApolloClient = pkg.ApolloClient;
  InMemoryCache = pkg.InMemoryCache;
  HttpLink = pkg.HttpLink;
  gql = pkg.gql;
  ApolloError = pkg.ApolloError;
  split = pkg.split;

  // Load additional submodules.
  const contextPkg = require("@apollo/client/link/context/context.cjs");
  setContext = contextPkg.setContext;
  const errorPkg = require("@apollo/client/link/error/error.cjs");
  onError = errorPkg.onError;
} else {
  // --- Client-side ---
  // Use the statically imported implementations.
  ApolloClient = ApolloClientImported;
  InMemoryCache = InMemoryCacheImported;
  HttpLink = HttpLinkImported;
  gql = gqlImported;
  ApolloError = ApolloErrorImported;
  setContext = setContextImported;
  onError = onErrorImported;
  split = splitImported;
}

// ==========================
// 5. Apollo Client Initialization & Singleton Pattern
// ==========================
let apolloClient: ApolloClientType<NormalizedCacheObject> | null = null;

/**
 * Initializes a new Apollo Client instance.
 * @returns ApolloClient instance.
 */
function initializeApollo(): ApolloClientType<NormalizedCacheObject> {
  const isProduction = process.env.NODE_ENV === "production";
  const httpUrl = isProduction
    ? process.env.BACKEND_HTTPS_URL || "https://api.adaptic.ai/graphql"
    : "http://localhost:4000/graphql";

  // Create the HTTP link.
  const httpLinkInstance = new HttpLink({ uri: httpUrl, fetch });

  // Create the auth link.
  const authLink = setContext((_, { headers }) => {
    // Retrieve the token from environment variables or other secure storage.
    const token = process.env.SERVER_AUTH_TOKEN || "";
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
        connection: "keep-alive",
      },
    };
  });

  // Create the error handling link.
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  // Combine the links and initialize the Apollo Client.
  return new ApolloClient({
    link: errorLink.concat(authLink.concat(httpLinkInstance)),
    cache: new InMemoryCache(),
  });
}

/**
 * Retrieves the singleton Apollo Client instance.
 * @returns ApolloClient instance.
 */
export function getApolloClient(): ApolloClientType<NormalizedCacheObject> {
  if (!apolloClient) {
    apolloClient = initializeApollo();
  }
  return apolloClient;
}

// ==========================
// 6. Exports
// ==========================
export const client = getApolloClient();

// Re-export runtime implementations for convenience.
export {
  ApolloClient,
  ApolloError,
  gql,
  InMemoryCache,
  HttpLink,
  setContext,
  onError,
  split,
};

// Re-export types for convenience.
export type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
};
