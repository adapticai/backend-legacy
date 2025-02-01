// ====================================================
// 1. For Server-side: Create a require() function for ESM.
// ====================================================
import { createRequire } from "module";

// If we're in a CommonJS environment, use the global require;
// otherwise (in an ES module) use createRequire(import.meta.url).
const requireFromESM = (typeof require !== "undefined")
  ? require
  // @ts-ignore
  : createRequire(import.meta.url);

// ====================================================
// 2. Type Imports (for TypeScript)
// ====================================================
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  HttpLink as HttpLinkType,
  NormalizedCacheObject,
} from "@apollo/client";

// ====================================================
// 3. Client-side Static Imports
// For the browser (client-side) we import from the standard ESM entry points.
// ====================================================

// Import the core module as a namespace to extract its members.
import * as pkg from "@apollo/client";
const {
  ApolloClient: ApolloClientImported,
  InMemoryCache: InMemoryCacheImported,
  HttpLink: HttpLinkImported,
  gql: gqlImported,
  ApolloError: ApolloErrorImported,
  split: splitImported,
} = pkg;

// Import link utilities from their ESM paths.
import { setContext as setContextImported } from "@apollo/client/link/context";
import { onError as onErrorImported } from "@apollo/client/link/error";

// ====================================================
// 4. Declare Runtime Variables
// These variables will be assigned the proper implementations based on the runtime.
// ====================================================
let ApolloClient: typeof ApolloClientImported;
let ApolloError: typeof ApolloErrorImported;
let gql: typeof gqlImported;
let InMemoryCache: typeof InMemoryCacheImported;
let HttpLink: typeof HttpLinkImported;
let setContext: typeof setContextImported;
let onError: typeof onErrorImported;
let split: typeof splitImported;

// ====================================================
// 5. Environment Detection & Conditional Assignment
// We check if we are in a server-like environment (including AWS Lambda).
// ====================================================
const isLambda = Boolean(process.env.AWS_EXECUTION_ENV);
const isServer = typeof window === "undefined";

if (isServer || isLambda) {
  // --- Server-side (or AWS Lambda) ---
  // Use the require() function (created by createRequire) to load modules synchronously.
  const pkg = requireFromESM("@apollo/client");
  ApolloClient = pkg.ApolloClient;
  InMemoryCache = pkg.InMemoryCache;
  HttpLink = pkg.HttpLink;
  gql = pkg.gql;
  ApolloError = pkg.ApolloError;
  split = pkg.split;

  // For the link utilities on the server, we can continue to load from the CommonJS files.
  const contextPkg = requireFromESM("@apollo/client/link/context/context.cjs");
  // (Note: if you prefer and if it’s supported in your version, you might also try the ESM path.)
  setContext = contextPkg.setContext;

  const errorPkg = requireFromESM("@apollo/client/link/error/error.cjs");
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

// ====================================================
// 6. Apollo Client Initialization & Singleton Pattern
// ====================================================
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

// ====================================================
// 7. Exports
// ====================================================
export const client = getApolloClient();

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

export type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
};
