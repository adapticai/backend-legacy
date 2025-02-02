// apollo-client.server.ts

// Import types for type‑checking only.
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  HttpLink as HttpLinkType,
  NormalizedCacheObject,
} from "@apollo/client";

import * as pkg from "@apollo/client";
const { ApolloClient, InMemoryCache, HttpLink, gql, ApolloError, split } = pkg;
import { setContext } from "@apollo/client/link/context/context.cjs";
import { onError } from "@apollo/client/link/error/error.cjs";

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
