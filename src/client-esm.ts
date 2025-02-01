// client-esm.ts
// This file avoids createRequire(import.meta.url) by using a simple if-check
// for server vs. client. On the server, we do a require() if it's available.
// On the client, we do a dynamic import(). We also do string concatenation
// to hide the literal import path from bundlers like Next.js.

import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  HttpLink as HttpLinkType,
  NormalizedCacheObject,
} from "@apollo/client";
import type { DocumentNode } from "graphql";

const isServer: boolean = typeof window === "undefined";

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
 * Loads the Apollo Client package and its submodules.
 * - On the server (if require is available): uses require().
 * - On the client (browser): uses dynamic import().
 */
async function loadApolloClientEsm(): Promise<ApolloRuntimeExports> {
  if (isServer && typeof require !== "undefined") {
    // --- Server path: require()
    let pkg = require("@apollo/" + "client");
    // We assume it's CommonJS. If there's an ESM interop wrapper, you might check pkg.default.
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
  } else {
    // --- Client path: dynamic import
    let pkg = await import("@apollo/client");
    const { ApolloClient, InMemoryCache, HttpLink, gql, ApolloError, split } = pkg;

    const contextPkg = await import("@apollo/client/link/context/" + "context.cjs");
    const errorPkg = await import("@apollo/client/link/error/" + "error.cjs");

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
}

// Cache the loaded runtime exports.
let apolloExports: ApolloRuntimeExports | null = null;
async function getApolloExports(): Promise<ApolloRuntimeExports> {
  if (!apolloExports) {
    apolloExports = await loadApolloClientEsm();
  }
  return apolloExports;
}

// Singleton Apollo Client instance (asynchronous in this version).
let apolloClient: ApolloClientType<NormalizedCacheObject> | null = null;

async function initializeApollo(): Promise<ApolloClientType<NormalizedCacheObject>> {
  const { ApolloClient, InMemoryCache, HttpLink, setContext, onError } = await getApolloExports();

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
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
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
 * Returns the singleton Apollo Client.
 * (You must await this call in your code.)
 */
export async function getApolloClient(): Promise<ApolloClientType<NormalizedCacheObject>> {
  if (!apolloClient) {
    apolloClient = await initializeApollo();
  }
  return apolloClient;
}

// For convenience, export a promise that resolves to the client.
export const clientPromise = getApolloClient();

// Expose a helper to get all the runtime exports if needed.
export async function getApolloRuntime(): Promise<ApolloRuntimeExports> {
  return getApolloExports();
}

// Also re-export the types for consumers.
export type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
  DocumentNode,
};
