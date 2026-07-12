// CORTEX-P0-001: mounted in server.ts as
//   app.use('/graphql', graphqlRateLimiter)   // GraphQL surface
//   app.use('/api', authRateLimiter)          // authenticated Express surface
// SHADOW-FIRST: 429 enforcement is gated behind CORTEX_RATE_LIMIT_ENFORCE.
// While OFF (default), the limiters observe + count requests that WOULD be
// blocked but never touch the response — live behaviour is byte-identical.

import { Request, Response, NextFunction } from 'express';
import { Counter } from 'prom-client';
import { metricsRegistry } from '../config/metrics';
import { logger } from '../utils/logger';

/**
 * Environment variable gating 429 enforcement. When set to `true`/`1`, the
 * limiters block over-limit requests with HTTP 429. Unset or any other value
 * keeps them in SHADOW mode (observe + count + always proceed).
 */
export const CORTEX_RATE_LIMIT_ENFORCE_ENV = 'CORTEX_RATE_LIMIT_ENFORCE';

/**
 * Whether rate-limit 429 enforcement is ON. Read fresh on each request (a cheap
 * env read) so the shadow→enforce graduation can be flipped operationally
 * without a restart. Defaults to OFF (shadow) for any unset/unrecognised value.
 *
 * @param env - Environment source (defaults to `process.env`); injectable for tests.
 * @returns `true` only when the flag is explicitly `true`/`1`.
 */
export function isRateLimitEnforced(
  env: Record<string, string | undefined> = process.env
): boolean {
  const raw = (env[CORTEX_RATE_LIMIT_ENFORCE_ENV] ?? '').trim().toLowerCase();
  return raw === 'true' || raw === '1';
}

/**
 * Counts requests that rate limiting WOULD block (HTTP 429). In shadow mode this
 * is the signal proving whether flipping `CORTEX_RATE_LIMIT_ENFORCE` to enforce
 * would reject legitimate traffic. Labelled by the `limiter` name
 * (`graphql`/`auth`) and the request `tier` (`auth`/`anon`).
 */
export const cortexRateLimitWouldBlockTotal = new Counter({
  name: 'cortex_rate_limit_would_block_total',
  help: 'Requests rate limiting would block (429), by limiter and tier (counted in shadow mode without blocking)',
  labelNames: ['limiter', 'tier'] as const,
  registers: [metricsRegistry],
});

interface RateLimitConfig {
  /** Stable limiter identifier used as the `limiter` metric label. */
  name: string;
  windowMs: number;
  maxAuthenticated: number;
  maxUnauthenticated: number;
  message: { errors: Array<{ message: string }> };
  standardHeaders?: boolean;
  legacyHeaders?: boolean;
}

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

interface RateLimitStore {
  [key: string]: RateLimitEntry;
}

/**
 * Checks whether a request carries a valid-looking authentication token.
 * Does not verify the token -- only checks for its presence in the
 * Authorization header as a Bearer token with three dot-separated parts
 * (standard JWT structure).
 */
function isAuthenticated(req: Request): boolean {
  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) {
    return false;
  }
  const token = authHeader.slice(7);
  // Only count 3-segment JWT-shaped tokens as "authenticated" for rate-limit
  // tiering. Opaque OAuth access tokens (e.g. `ya29.…`) are rejected by the
  // verifier downstream — treating them as authenticated here would let a
  // caller spamming opaque tokens enjoy the higher auth-tier limits.
  return token.split('.').length === 3;
}

/**
 * Creates a simple in-memory rate limiter middleware with separate limits
 * for authenticated and unauthenticated requests.
 *
 * Response headers (when standardHeaders is enabled):
 *   X-RateLimit-Limit     - maximum requests allowed in the current window
 *   X-RateLimit-Remaining - requests remaining in the current window
 *   X-RateLimit-Reset     - seconds until the current window resets
 *   Retry-After           - seconds to wait before retrying (only on 429)
 *
 * @param config - Rate limit configuration
 * @returns Express middleware function
 */
function createRateLimiter(config: RateLimitConfig) {
  const store: RateLimitStore = {};

  // Clean up expired entries every minute
  setInterval(() => {
    const now = Date.now();
    Object.keys(store).forEach((key) => {
      if (store[key].resetTime < now) {
        delete store[key];
      }
    });
  }, 60000);

  return (req: Request, res: Response, next: NextFunction): void => {
    const identifier = req.ip || req.connection.remoteAddress || 'unknown';
    const authenticated = isAuthenticated(req);
    const tier = authenticated ? 'auth' : 'anon';
    const effectiveMax = authenticated
      ? config.maxAuthenticated
      : config.maxUnauthenticated;
    const storeKey = `${identifier}:${tier}`;
    const now = Date.now();

    if (!store[storeKey] || store[storeKey].resetTime < now) {
      store[storeKey] = {
        count: 1,
        resetTime: now + config.windowMs,
      };
    } else {
      store[storeKey].count += 1;
    }

    const current = store[storeKey];
    const remaining = Math.max(0, effectiveMax - current.count);
    const resetSeconds = Math.ceil((current.resetTime - now) / 1000);
    const overLimit = current.count > effectiveMax;

    // SHADOW mode (default): observe + count over-limit requests but NEVER touch
    // the response — no rate-limit headers, no 429. This keeps live behaviour
    // byte-identical until CORTEX_RATE_LIMIT_ENFORCE is flipped on.
    if (!isRateLimitEnforced()) {
      if (overLimit) {
        cortexRateLimitWouldBlockTotal.inc({ limiter: config.name, tier });
        logger.warn('[cortex-rate-limit] shadow would-block (allowing)', {
          limiter: config.name,
          identifier,
          tier,
          count: current.count,
          limit: effectiveMax,
          resetSeconds,
        });
      }
      next();
      return;
    }

    // ENFORCE mode: emit the informational rate-limit headers and block
    // over-limit requests with HTTP 429.
    if (config.standardHeaders !== false) {
      res.setHeader('X-RateLimit-Limit', effectiveMax.toString());
      res.setHeader('X-RateLimit-Remaining', remaining.toString());
      res.setHeader('X-RateLimit-Reset', resetSeconds.toString());
    }

    if (overLimit) {
      // Include Retry-After header on 429 responses (RFC 6585 / RFC 7231)
      res.setHeader('Retry-After', resetSeconds.toString());
      cortexRateLimitWouldBlockTotal.inc({ limiter: config.name, tier });
      res.status(429).json(config.message);
      return;
    }

    next();
  };
}

/**
 * Rate limiter for GraphQL endpoint.
 *
 * Authenticated requests:   1000 requests per 15 minutes (configurable via RATE_LIMIT_MAX)
 * Unauthenticated requests: 200 requests per 15 minutes (configurable via RATE_LIMIT_MAX_UNAUTH)
 */
export const graphqlRateLimiter = createRateLimiter({
  name: 'graphql',
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxAuthenticated: parseInt(process.env.RATE_LIMIT_MAX || '1000', 10),
  maxUnauthenticated: parseInt(process.env.RATE_LIMIT_MAX_UNAUTH || '200', 10),
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    errors: [{ message: 'Too many requests, please try again later.' }],
  },
});

/**
 * Rate limiter for authentication endpoints.
 *
 * Authenticated requests:   50 requests per 15 minutes
 * Unauthenticated requests: 20 requests per 15 minutes
 */
export const authRateLimiter = createRateLimiter({
  name: 'auth',
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxAuthenticated: 50,
  maxUnauthenticated: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { errors: [{ message: 'Too many authentication attempts.' }] },
});
