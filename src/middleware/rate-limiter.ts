// Integration: add to server.ts - app.use('/graphql', graphqlRateLimiter) and app.use('/auth', authRateLimiter)

import { Request, Response, NextFunction } from 'express';

interface RateLimitConfig {
  windowMs: number;
  max: number;
  message: { errors: Array<{ message: string }> };
  standardHeaders?: boolean;
  legacyHeaders?: boolean;
}

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

/**
 * Creates a simple in-memory rate limiter middleware
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
    const now = Date.now();

    if (!store[identifier] || store[identifier].resetTime < now) {
      store[identifier] = {
        count: 1,
        resetTime: now + config.windowMs,
      };
    } else {
      store[identifier].count += 1;
    }

    const current = store[identifier];
    const remaining = Math.max(0, config.max - current.count);
    const resetTime = Math.ceil((current.resetTime - now) / 1000);

    // Add rate limit headers
    if (config.standardHeaders !== false) {
      res.setHeader('X-RateLimit-Limit', config.max.toString());
      res.setHeader('X-RateLimit-Remaining', remaining.toString());
      res.setHeader('X-RateLimit-Reset', resetTime.toString());
    }

    if (current.count > config.max) {
      res.status(429).json(config.message);
      return;
    }

    next();
  };
}

/**
 * Rate limiter for GraphQL endpoint
 * Allows 1000 requests per 15 minutes by default (configurable via RATE_LIMIT_MAX env var)
 */
export const graphqlRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX || '1000', 10),
  standardHeaders: true,
  legacyHeaders: false,
  message: { errors: [{ message: 'Too many requests, please try again later.' }] },
});

/**
 * Rate limiter for authentication endpoints
 * Allows 50 requests per 15 minutes (stricter for auth)
 */
export const authRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: { errors: [{ message: 'Too many authentication attempts.' }] },
});
