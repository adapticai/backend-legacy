import { describe, it, expect } from 'vitest';

/**
 * Tests for connection pool configuration logic.
 * These tests verify the environment-based pool sizing defaults
 * without requiring a live database connection.
 */

const POOL_SIZE_DEFAULTS: Record<string, number> = {
  development: 5,
  staging: 10,
  production: 20,
};

const DEFAULT_POOL_TIMEOUT_MS = 10000;

function resolvePoolSize(nodeEnv?: string, envPoolSize?: string): number {
  if (envPoolSize) {
    const parsed = parseInt(envPoolSize, 10);
    if (!isNaN(parsed) && parsed > 0) {
      return parsed;
    }
  }
  const env = nodeEnv || 'development';
  return POOL_SIZE_DEFAULTS[env] || POOL_SIZE_DEFAULTS.development;
}

function resolvePoolTimeout(envTimeout?: string): number {
  if (envTimeout) {
    const parsed = parseInt(envTimeout, 10);
    if (!isNaN(parsed) && parsed > 0) {
      return parsed;
    }
  }
  return DEFAULT_POOL_TIMEOUT_MS;
}

describe('Connection Pool Configuration', () => {
  describe('resolvePoolSize', () => {
    it('should return 5 for development environment', () => {
      expect(resolvePoolSize('development')).toBe(5);
    });

    it('should return 10 for staging environment', () => {
      expect(resolvePoolSize('staging')).toBe(10);
    });

    it('should return 20 for production environment', () => {
      expect(resolvePoolSize('production')).toBe(20);
    });

    it('should default to development pool size for unknown environments', () => {
      expect(resolvePoolSize('test')).toBe(5);
      expect(resolvePoolSize(undefined)).toBe(5);
    });

    it('should use DATABASE_POOL_SIZE when provided', () => {
      expect(resolvePoolSize('production', '15')).toBe(15);
    });

    it('should override tier default with DATABASE_POOL_SIZE', () => {
      expect(resolvePoolSize('development', '50')).toBe(50);
    });

    it('should fall back to tier default for invalid DATABASE_POOL_SIZE', () => {
      expect(resolvePoolSize('production', 'invalid')).toBe(20);
      expect(resolvePoolSize('production', '0')).toBe(20);
      expect(resolvePoolSize('production', '-5')).toBe(20);
      expect(resolvePoolSize('production', '')).toBe(20);
    });
  });

  describe('resolvePoolTimeout', () => {
    it('should return default timeout when not configured', () => {
      expect(resolvePoolTimeout()).toBe(10000);
      expect(resolvePoolTimeout(undefined)).toBe(10000);
    });

    it('should use DATABASE_POOL_TIMEOUT_MS when provided', () => {
      expect(resolvePoolTimeout('15000')).toBe(15000);
    });

    it('should fall back to default for invalid timeout values', () => {
      expect(resolvePoolTimeout('invalid')).toBe(10000);
      expect(resolvePoolTimeout('0')).toBe(10000);
      expect(resolvePoolTimeout('-1000')).toBe(10000);
    });
  });
});
