// apollo-client.server.ts

// Import types for type‑checking only.
import type {
  ApolloClient as ApolloClientType,
  InMemoryCache as InMemoryCacheType,
  HttpLink as HttpLinkType,
  NormalizedCacheObject,
} from '@apollo/client';

import { ApolloClient, gql, ApolloError } from '@apollo/client/core/core.cjs';
import { split } from '@apollo/client/link/core/core.cjs';
import { setContext } from '@apollo/client/link/context/context.cjs';
import { onError } from '@apollo/client/link/error/error.cjs';
import { HttpLink } from '@apollo/client/link/http/http.cjs';
import { InMemoryCache } from '@apollo/client/cache/inmemory/inMemoryCache.js';
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
