// client.ts

// Import types for type-checking only.
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  HttpLink as HttpLinkType,
  NormalizedCacheObject,
} from "@apollo/client";

// We do NOT statically import runtime implementations because @apollo/client is CommonJS.
// Instead, we’ll load them dynamically.
let ApolloClient: typeof ApolloClientType<any>;
let ApolloError: any;
let gql: any;
let InMemoryCache: any;
let HttpLink: any;
let setContext: any;
let onError: any;
let split: any;

{
  // Whether on the server or the client, load the module via require.
  // (If you want to differentiate, you can—but in this case we use require() in both branches.)
  const pkg = require("@apollo/client");
  // If the package was imported via ESM interop, it might be on the .default property.
  const clientPkg = pkg && pkg.__esModule ? pkg.default : pkg;
  ApolloClient = clientPkg.ApolloClient;
  InMemoryCache = clientPkg.InMemoryCache;
  HttpLink = clientPkg.HttpLink;
  gql = clientPkg.gql;
  ApolloError = clientPkg.ApolloError;
  split = clientPkg.split;

  const contextPkg = require("@apollo/client/link/context/context.cjs");
  setContext = contextPkg.setContext;

  const errorPkg = require("@apollo/client/link/error/error.cjs");
  onError = errorPkg.onError;
}

// --- Apollo Client Setup ---

// Use the type-only alias (ApolloClientType) for type annotations.
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

// Export the singleton instance.
export const client = getApolloClient();

// Re-export the runtime implementations so they can be imported elsewhere.
export { ApolloClient, ApolloError, gql, InMemoryCache, HttpLink, setContext, onError, split };

// Also re-export the types for convenience.
export type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
};
