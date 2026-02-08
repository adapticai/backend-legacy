// Integration: add to server.ts - app.use('/graphql', graphqlRateLimiter) and app.use('/auth', authRateLimiter)

import { Request, Response, NextFunction } from 'express';

interface RateLimitConfig {
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
  // Google OAuth tokens (ya29.) and JWTs (three dot-separated segments) count
  if (token.startsWith('ya29.')) {
    return true;
  }
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
    const effectiveMax = authenticated ? config.maxAuthenticated : config.maxUnauthenticated;
    const storeKey = `${identifier}:${authenticated ? 'auth' : 'anon'}`;
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

    // Add rate limit headers
    if (config.standardHeaders !== false) {
      res.setHeader('X-RateLimit-Limit', effectiveMax.toString());
      res.setHeader('X-RateLimit-Remaining', remaining.toString());
      res.setHeader('X-RateLimit-Reset', resetSeconds.toString());
    }

    if (current.count > effectiveMax) {
      // Include Retry-After header on 429 responses (RFC 6585 / RFC 7231)
      res.setHeader('Retry-After', resetSeconds.toString());
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
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxAuthenticated: parseInt(process.env.RATE_LIMIT_MAX || '1000', 10),
  maxUnauthenticated: parseInt(process.env.RATE_LIMIT_MAX_UNAUTH || '200', 10),
  standardHeaders: true,
  legacyHeaders: false,
  message: { errors: [{ message: 'Too many requests, please try again later.' }] },
});

/**
 * Rate limiter for authentication endpoints.
 *
 * Authenticated requests:   50 requests per 15 minutes
 * Unauthenticated requests: 20 requests per 15 minutes
 */
export const authRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxAuthenticated: 50,
  maxUnauthenticated: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { errors: [{ message: 'Too many authentication attempts.' }] },
});
