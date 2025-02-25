// client.ts

// === Export type definitions (statically) ===
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  NormalizedCacheObject,
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

// === Internal state ===
let apolloModules: ApolloModules | undefined;
let apolloClient: ApolloClientType<NormalizedCacheObject> | undefined;

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
 * Returns a singleton Apollo Client instance.
 * **IMPORTANT:** Because module loading is asynchronous,
 * make sure to await this function before using the client.
 */
export async function getApolloClient(): Promise<ApolloClientType<NormalizedCacheObject>> {

  if (apolloClient) {
    return apolloClient;
  }
  if (!apolloModules) {
    apolloModules = await loadApolloModules();
  }
  const { ApolloClient, InMemoryCache, HttpLink, setContext, onError } = apolloModules;

  // Determine the GraphQL endpoint.
  const isProduction = process.env.NODE_ENV === "production";
  const httpUrl = process.env.NEXT_PUBLIC_BACKEND_HTTPS_URL || process.env.BACKEND_HTTPS_URL || (isProduction ? "https://api.adaptic.ai/graphql" : "http://localhost:4000/graphql");

  // Create the HTTP link. (Ensure that a global fetch is available.)
  const httpLinkInstance = new HttpLink({ uri: httpUrl, fetch });

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

  // Create the error handling link.
  const errorLink = onError(({ graphQLErrors, networkError }) => {
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

  // Initialize the Apollo Client.
  apolloClient = new ApolloClient({
    link: errorLink.concat(authLink.concat(httpLinkInstance)),
    cache: new InMemoryCache(),
  });

  return apolloClient;
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
 */
export const client = getApolloClient();
