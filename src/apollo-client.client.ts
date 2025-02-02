// apollo-client.client.ts

// Import types for type‑checking only.
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  HttpLink as HttpLinkType,
  NormalizedCacheObject,
} from "@apollo/client";

// Import runtime implementations.
import {
  gql,
  ApolloError,
  split,
} from "@apollo/client";
import { ApolloClient } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { HttpLink } from "@apollo/client/link/http";
import { InMemoryCache } from "@apollo/client/cache/inmemory/inMemoryCache";

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
