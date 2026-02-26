import { ApolloServerPluginCacheControlDisabled } from '@apollo/server/plugin/disabled';
import { logger } from '../utils/logger';

/**
 * Default cache TTL for persisted query hashes in seconds.
 * Set to 0 to disable TTL (hashes persist indefinitely in memory).
 */
const DEFAULT_CACHE_TTL_SECONDS = 0;

/**
 * Maximum size of the in-memory persisted query cache.
 * Once exceeded, oldest entries are evicted (LRU).
 */
const DEFAULT_MAX_CACHE_SIZE = 1000;

/**
 * In-memory LRU cache for Automatic Persisted Queries (APQ).
 *
 * Apollo Server 5 supports APQ out of the box using its default in-memory cache.
 * This module provides configuration and a custom KeyValueCache implementation
 * for fine-grained control over the APQ cache behavior.
 *
 * APQ flow:
 * 1. Client sends a query hash (sha256) without the full query text
 * 2. Server looks up the hash in the cache
 * 3. If found, executes the cached query
 * 4. If not found, returns PersistedQueryNotFound error
 * 5. Client resends with both hash and full query text
 * 6. Server caches the query text for future requests
 *
 * Environment variables:
 * - APQ_ENABLED: Explicit on/off ('true'/'false'). Defaults to true.
 * - APQ_MAX_CACHE_SIZE: Max number of cached query hashes (default: 1000).
 */

interface CacheEntry {
  value: string;
  expiresAt: number | null;
}

/**
 * Simple in-memory key-value cache implementing Apollo's KeyValueCache interface.
 * Provides LRU eviction when the cache reaches maximum capacity.
 */
export class InMemoryAPQCache {
  private cache: Map<string, CacheEntry>;
  private readonly maxSize: number;

  constructor(maxSize?: number) {
    this.maxSize = maxSize || DEFAULT_MAX_CACHE_SIZE;
    this.cache = new Map();
  }

  async get(key: string): Promise<string | undefined> {
    const entry = this.cache.get(key);
    if (!entry) return undefined;

    // Check TTL expiration
    if (entry.expiresAt !== null && Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }

    // Move to end for LRU ordering (Map preserves insertion order)
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry.value;
  }

  async set(
    key: string,
    value: string,
    options?: { ttl?: number | null }
  ): Promise<void> {
    // Evict oldest entry if at capacity
    if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey !== undefined) {
        this.cache.delete(oldestKey);
      }
    }

    const ttlSeconds = options?.ttl ?? DEFAULT_CACHE_TTL_SECONDS;
    const expiresAt = ttlSeconds > 0 ? Date.now() + ttlSeconds * 1000 : null;
    this.cache.set(key, { value, expiresAt });
  }

  async delete(key: string): Promise<boolean> {
    return this.cache.delete(key);
  }

  /** Returns the current number of cached entries */
  get size(): number {
    return this.cache.size;
  }

  /** Clears all cached entries */
  clear(): void {
    this.cache.clear();
  }
}

/**
 * Determines if APQ (Automatic Persisted Queries) is enabled.
 * Enabled by default. Disable via APQ_ENABLED=false.
 */
export function isAPQEnabled(): boolean {
  const setting = process.env.APQ_ENABLED;
  if (setting !== undefined) {
    return setting !== 'false' && setting !== '0';
  }
  return true;
}

/**
 * Resolves the maximum APQ cache size from environment variables.
 */
function getMaxCacheSize(): number {
  const envValue = process.env.APQ_MAX_CACHE_SIZE;
  if (envValue) {
    const parsed = parseInt(envValue, 10);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }
  return DEFAULT_MAX_CACHE_SIZE;
}

/**
 * Creates and returns an APQ cache instance for use with Apollo Server.
 *
 * Apollo Server 5 enables APQ by default when a cache is available.
 * To disable APQ entirely, set APQ_ENABLED=false.
 *
 * @returns The configured APQ cache, or undefined if APQ is disabled
 */
export function createAPQCache(): InMemoryAPQCache | undefined {
  if (!isAPQEnabled()) {
    logger.info('Automatic Persisted Queries (APQ) disabled');
    return undefined;
  }

  const maxSize = getMaxCacheSize();
  const cache = new InMemoryAPQCache(maxSize);

  logger.info('Automatic Persisted Queries (APQ) enabled', {
    maxCacheSize: maxSize,
  });
  return cache;
}

/**
 * Returns the Apollo Server cache control plugin configuration.
 * When APQ is disabled, this returns the cache control disabled plugin
 * to explicitly disable caching behavior.
 */
export function getCacheControlPlugin():
  | ReturnType<typeof ApolloServerPluginCacheControlDisabled>
  | undefined {
  if (!isAPQEnabled()) {
    return ApolloServerPluginCacheControlDisabled();
  }
  return undefined;
}
