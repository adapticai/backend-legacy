// src/client-cjs.ts
// This file is written in TypeScript and intended to be compiled as a CommonJS module.
// It uses synchronous require() to load runtime modules and handles both server and client environments.

import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  HttpLink as HttpLinkType,
  NormalizedCacheObject,
} from "@apollo/client";
import type { DocumentNode } from "graphql";

const isServer: boolean = typeof window === "undefined";

// Define an interface for our runtime exports.
interface ApolloRuntimeExports {
  ApolloClient: typeof import("@apollo/client").ApolloClient;
  InMemoryCache: typeof import("@apollo/client").InMemoryCache;
  HttpLink: typeof import("@apollo/client").HttpLink;
  gql: typeof import("@apollo/client").gql;
  ApolloError: any;
  split: typeof import("@apollo/client").split;
  setContext: any;
  onError: any;
}

/**
 * Synchronously loads the Apollo Client package and its submodules using require.
 * We use string concatenation to “hide” the literal path from bundler static analysis.
 */
function loadApolloClientCjs(): ApolloRuntimeExports {
  let pkg = require("@apollo/" + "client");
  // No interop check is done here because we expect a pure CommonJS export.
  const { ApolloClient, InMemoryCache, HttpLink, gql, ApolloError, split } = pkg;
  const contextPkg = require("@apollo/client/link/context/" + "context.cjs");
  const errorPkg = require("@apollo/client/link/error/" + "error.cjs");
  return {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    gql,
    ApolloError,
    split,
    setContext: contextPkg.setContext,
    onError: errorPkg.onError,
  };
}

// Synchronously load and cache the runtime exports.
const apolloExports: ApolloRuntimeExports = loadApolloClientCjs();

// Singleton Apollo Client instance.
let apolloClient: ApolloClientType<NormalizedCacheObject> | null = null;

function initializeApollo(): ApolloClientType<NormalizedCacheObject> {
  const { ApolloClient, InMemoryCache, HttpLink, setContext, onError } = apolloExports;
  const isProduction = process.env.NODE_ENV === "production";
  const httpUrl =
    isProduction || process.env.BACKEND_HTTPS_URL
      ? process.env.BACKEND_HTTPS_URL || "https://api.adaptic.ai/graphql"
      : "http://localhost:4000/graphql";
  const httpLinkInstance = new HttpLink({ uri: httpUrl, fetch });
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
  const errorLink = onError(({ graphQLErrors, networkError }: any) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }: any) => {
        console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });
  return new ApolloClient({
    link: errorLink.concat(authLink.concat(httpLinkInstance)),
    cache: new InMemoryCache(),
  });
}

/**
 * Returns the singleton Apollo Client (synchronously).
 */
export function getApolloClient(): ApolloClientType<NormalizedCacheObject> {
  if (!apolloClient) {
    apolloClient = initializeApollo();
  }
  return apolloClient;
}

export const client = getApolloClient();

// Re-export the runtime implementations so they can be imported by other modules.
export const {
  ApolloClient,
  ApolloError,
  gql,
  InMemoryCache,
  HttpLink,
  setContext,
  onError,
  split,
} = apolloExports;

// Also re-export the types for convenience.
export type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
  DocumentNode,
};
