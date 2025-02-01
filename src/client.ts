// client.ts

// Import types for type-checking only. These will be erased at compile time.
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  HttpLink as HttpLinkType,
  NormalizedCacheObject,
} from "@apollo/client";

/**
 * A helper that loads the @apollo/client package via require, handling both
 * pure CJS and potential ESM interop. We also do string concatenation to
 * hide the import path from bundlers (like Next.js) that might do static
 * analysis on it.
 */
function loadApolloClientPackage() {
  // Hide from static analysis:
  // e.g. let cjs = require("@apollo/client");
  const cjs = require("@apollo/" + "client");

  // If it's an ESM interop wrapper, the real exports might be on `cjs.default`.
  const maybeDefault = cjs.default || {};
  return {
    // Fallback to either top-level export or cjs.default export:
    ApolloClient: cjs.ApolloClient || maybeDefault.ApolloClient,
    InMemoryCache: cjs.InMemoryCache || maybeDefault.InMemoryCache,
    HttpLink: cjs.HttpLink || maybeDefault.HttpLink,
    gql: cjs.gql || maybeDefault.gql,
    ApolloError: cjs.ApolloError || maybeDefault.ApolloError,
    split: cjs.split || maybeDefault.split,
  };
}

/**
 * Similarly, load setContext from @apollo/client/link/context/context.cjs,
 * again hiding the path from bundlers with string concatenation.
 */
function loadSetContext() {
  const contextCjs = require("@apollo/client/link/context/" + "context.cjs");
  // If there's an ESM interop, it could be on contextCjs.default:
  const maybeDefault = contextCjs.default || {};
  // setContext might be on the top or on a default export:
  return contextCjs.setContext || maybeDefault.setContext;
}

/**
 * Similarly, load onError from @apollo/client/link/error/error.cjs
 */
function loadOnError() {
  const errorCjs = require("@apollo/client/link/error/" + "error.cjs");
  const maybeDefault = errorCjs.default || {};
  return errorCjs.onError || maybeDefault.onError;
}

// Dynamically load all the runtime exports from @apollo/client and its submodules.
const {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  ApolloError,
  split,
} = loadApolloClientPackage();
const setContext = loadSetContext();
const onError = loadOnError();

// --- Apollo Client Setup ---

// Use the type-only alias for type annotations.
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
  const authLink = setContext((_: any, { headers }: any) => {
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
  const errorLink = onError(({ graphQLErrors, networkError }: any) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }: any) =>
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

// Export the singleton instance for convenience.
export const client = getApolloClient();

// Re-export runtime implementations so they can be imported in other code.
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
