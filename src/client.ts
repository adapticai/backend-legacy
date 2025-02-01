// Import types for type-checking only.
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  HttpLink as HttpLinkType,
  NormalizedCacheObject,
} from "@apollo/client";

// Statically import runtime implementations for the client (browser) environment.
import {
  ApolloClient as ApolloClientImported,
  InMemoryCache as InMemoryCacheImported,
  HttpLink as HttpLinkImported,
  gql as gqlImported,
  ApolloError as ApolloErrorImported,
  split as splitImported,
} from "@apollo/client";
import { setContext as setContextImported } from "@apollo/client/link/context/context.cjs";
import { onError as onErrorImported } from "@apollo/client/link/error/error.cjs";

// Declare runtime variables that will eventually hold the proper implementations.
let ApolloClient: typeof ApolloClientImported;
let ApolloError: typeof ApolloErrorImported;
let gql: typeof gqlImported;
let InMemoryCache: typeof InMemoryCacheImported;
let HttpLink: typeof HttpLinkImported;
let setContext: typeof setContextImported;
let onError: typeof onErrorImported;
let split: typeof splitImported;

// Detect if we are in a server-like environment (including AWS Lambda).
const isLambda = Boolean(process.env.AWS_EXECUTION_ENV);
const isServer = typeof window === "undefined";

// Conditional logic: on server (or AWS Lambda) use require(), on client use the static imports.
if (isServer || isLambda) {
  // Server-side: Use require() to load the modules at runtime.
  const pkg = require("@apollo/client");
  ApolloClient = pkg.ApolloClient;
  InMemoryCache = pkg.InMemoryCache;
  HttpLink = pkg.HttpLink;
  gql = pkg.gql;
  ApolloError = pkg.ApolloError;
  split = pkg.split;

  // Require the additional packages for context and error links.
  const contextPkg = require("@apollo/client/link/context/context.cjs");
  setContext = contextPkg.setContext;
  const errorPkg = require("@apollo/client/link/error/error.cjs");
  onError = errorPkg.onError;
} else {
  // Client-side: Use the statically imported implementations.
  ApolloClient = ApolloClientImported;
  InMemoryCache = InMemoryCacheImported;
  HttpLink = HttpLinkImported;
  gql = gqlImported;
  ApolloError = ApolloErrorImported;
  setContext = setContextImported;
  onError = onErrorImported;
  split = splitImported;
}

// Singleton instance for the Apollo Client.
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

// Export the singleton instance.
export const client = getApolloClient();

// Re-export the runtime implementations so they can be imported elsewhere.
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

// Also re-export the types for convenience.
export type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
};
