// apollo-client.server.ts

// Import types for type‑checking only.
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  HttpLink as HttpLinkType,
  NormalizedCacheObject,
} from "@apollo/client";

// Use require() to load the runtime implementations.
const pkg = require("@apollo/client");

// Use a fallback check: try the named export first, then pkg.default if needed.
const ApolloClient =
  pkg.ApolloClient || (pkg.default && pkg.default.ApolloClient);
const InMemoryCache =
  pkg.InMemoryCache || (pkg.default && pkg.default.InMemoryCache);
const HttpLink = pkg.HttpLink || (pkg.default && pkg.default.HttpLink);
const gql = pkg.gql || (pkg.default && pkg.default.gql);
const ApolloError =
  pkg.ApolloError || (pkg.default && pkg.default.ApolloError);
const split = pkg.split || (pkg.default && pkg.default.split);

// Some sub‑modules require a different path.
const contextPkg = require("@apollo/client/link/context/context.cjs");
const setContext =
  contextPkg.setContext || (contextPkg.default && contextPkg.default.setContext);

const errorPkg = require("@apollo/client/link/error/error.cjs");
const onError =
  errorPkg.onError || (errorPkg.default && errorPkg.default.onError);

// Re‑export the runtime implementations.
export {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  ApolloError,
  split,
  setContext,
  onError,
};

// Re‑export the types.
export type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
};
