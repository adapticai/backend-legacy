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
const {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  ApolloError,
  split,
} = pkg;

// Some sub‑modules require a different path.
const contextPkg = require("@apollo/client/link/context/context.cjs");
const { setContext } = contextPkg;

const errorPkg = require("@apollo/client/link/error/error.cjs");
const { onError } = errorPkg;

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
