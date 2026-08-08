import { describe, it, expect, beforeEach, afterEach, afterAll, vi } from 'vitest';
import jwt from 'jsonwebtoken';
import express from 'express';
import cors from 'cors';
import type { Request, Response, NextFunction } from 'express';
import type { AddressInfo } from 'net';
import type { Server } from 'http';

/**
 * Rate limiter behaviour pins (audit B01-backend-legacy-08 / -02 / -09 / -10 /
 * -11 / -12 / -14).
 *
 * The safety-critical contract is byte-identical SHADOW behaviour on the live
 * /graphql surface: with `CORTEX_RATE_LIMIT_ENFORCE` unset the limiter must
 * NEVER touch the response (no headers, no 429) while still counting would-be
 * blocks. These tests exercise the real middleware against mock req/res and a
 * real Express + cors mount matching server.ts.
 */

// jwtConfig reads process.env at import time — set the secret before any
// import of the module graph pulls it in (same pattern as token-verifier tests).
const TEST_JWT_SECRET = vi.hoisted(() => {
  const secret = 'rate-limiter-test-secret-0123456789abcdef0123456789abcdef';
  process.env.JWT_SECRET = secret;
  return secret;
});

import {
  createRateLimiter,
  isRateLimitEnforced,
  cortexRateLimitWouldBlockTotal,
  cortexRateLimitBlockedTotal,
  CORTEX_RATE_LIMIT_ENFORCE_ENV,
  type RateLimitConfig,
} from '../rate-limiter';
import { _resetRateTierCacheForTests } from '../rate-tier';
import { logger } from '../../utils/logger';

const WINDOW_MS = 60_000;

function makeConfig(overrides: Partial<RateLimitConfig> = {}): RateLimitConfig {
  return {
    name: 'graphql',
    windowMs: WINDOW_MS,
    maxAuthenticated: 100,
    maxUnauthenticated: 2,
    standardHeaders: true,
    message: { errors: [{ message: 'Too many requests' }] },
    ...overrides,
  };
}

interface MockResponse {
  res: Response;
  setHeader: ReturnType<typeof vi.fn>;
  status: ReturnType<typeof vi.fn>;
  json: ReturnType<typeof vi.fn>;
}

function makeRes(): MockResponse {
  const setHeader = vi.fn();
  const json = vi.fn();
  const status = vi.fn(() => ({ json }));
  const res = { setHeader, status, json } as unknown as Response;
  return { res, setHeader, status, json };
}

function makeReq(overrides: Record<string, unknown> = {}): Request {
  return {
    method: 'POST',
    headers: {},
    ip: '203.0.113.10',
    socket: { remoteAddress: '203.0.113.10' },
    ...overrides,
  } as unknown as Request;
}

async function counterValue(
  counter: typeof cortexRateLimitWouldBlockTotal,
  labels: { limiter: string; tier: string }
): Promise<number> {
  const metric = await counter.get();
  const sample = metric.values.find(
    (v) => v.labels.limiter === labels.limiter && v.labels.tier === labels.tier
  );
  return sample?.value ?? 0;
}

function signUserToken(sub: string): string {
  return jwt.sign({ sub, roles: ['user'] }, TEST_JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
}

describe('isRateLimitEnforced', () => {
  it('defaults to shadow for unset/unrecognised values', () => {
    expect(isRateLimitEnforced({})).toBe(false);
    expect(
      isRateLimitEnforced({ [CORTEX_RATE_LIMIT_ENFORCE_ENV]: 'bogus' })
    ).toBe(false);
  });

  it('is true only for explicit true/1', () => {
    expect(
      isRateLimitEnforced({ [CORTEX_RATE_LIMIT_ENFORCE_ENV]: 'true' })
    ).toBe(true);
    expect(isRateLimitEnforced({ [CORTEX_RATE_LIMIT_ENFORCE_ENV]: '1' })).toBe(
      true
    );
  });
});

describe('rate limiter middleware', () => {
  beforeEach(() => {
    _resetRateTierCacheForTests();
    delete process.env[CORTEX_RATE_LIMIT_ENFORCE_ENV];
    delete process.env.SERVER_AUTH_TOKEN;
  });

  afterEach(() => {
    delete process.env[CORTEX_RATE_LIMIT_ENFORCE_ENV];
    delete process.env.SERVER_AUTH_TOKEN;
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('SHADOW: never touches the response — no headers, no 429, always next() — while counting would-blocks', async () => {
    const limiter = createRateLimiter(makeConfig());
    const before = await counterValue(cortexRateLimitWouldBlockTotal, {
      limiter: 'graphql',
      tier: 'anon',
    });
    const blockedBefore = await counterValue(cortexRateLimitBlockedTotal, {
      limiter: 'graphql',
      tier: 'anon',
    });

    const next = vi.fn();
    const { res, setHeader, status, json } = makeRes();
    for (let i = 0; i < 4; i += 1) {
      limiter(makeReq(), res, next as NextFunction);
    }

    expect(next).toHaveBeenCalledTimes(4);
    expect(setHeader).not.toHaveBeenCalled();
    expect(status).not.toHaveBeenCalled();
    expect(json).not.toHaveBeenCalled();

    const after = await counterValue(cortexRateLimitWouldBlockTotal, {
      limiter: 'graphql',
      tier: 'anon',
    });
    const blockedAfter = await counterValue(cortexRateLimitBlockedTotal, {
      limiter: 'graphql',
      tier: 'anon',
    });
    // maxUnauthenticated=2 -> requests 3 and 4 are over-limit.
    expect(after - before).toBe(2);
    // Real-block series must stay untouched in shadow (B01-14).
    expect(blockedAfter - blockedBefore).toBe(0);
  });

  it('SHADOW: logs at most once per (bucket, window) — first over-limit only (B01-10)', () => {
    const warnSpy = vi.spyOn(logger, 'warn').mockImplementation(() => undefined);
    const limiter = createRateLimiter(makeConfig({ maxUnauthenticated: 1 }));

    const next = vi.fn();
    const { res } = makeRes();
    for (let i = 0; i < 5; i += 1) {
      limiter(makeReq(), res, next as NextFunction);
    }

    const shadowLogs = warnSpy.mock.calls.filter(
      ([message]) => typeof message === 'string' && message.includes('shadow would-block')
    );
    expect(shadowLogs).toHaveLength(1);
  });

  it('ENFORCE: returns 429 + Retry-After when over limit and counts on the blocked series only (B01-14)', async () => {
    process.env[CORTEX_RATE_LIMIT_ENFORCE_ENV] = 'true';
    const limiter = createRateLimiter(makeConfig({ maxUnauthenticated: 1 }));
    const wouldBefore = await counterValue(cortexRateLimitWouldBlockTotal, {
      limiter: 'graphql',
      tier: 'anon',
    });
    const blockedBefore = await counterValue(cortexRateLimitBlockedTotal, {
      limiter: 'graphql',
      tier: 'anon',
    });

    const next = vi.fn();
    const first = makeRes();
    limiter(makeReq(), first.res, next as NextFunction);
    expect(next).toHaveBeenCalledTimes(1);
    expect(first.setHeader).toHaveBeenCalledWith('X-RateLimit-Limit', '1');

    const second = makeRes();
    limiter(makeReq(), second.res, next as NextFunction);
    expect(next).toHaveBeenCalledTimes(1); // not called again
    expect(second.status).toHaveBeenCalledWith(429);
    expect(second.json).toHaveBeenCalledWith({
      errors: [{ message: 'Too many requests' }],
    });
    const retryAfter = second.setHeader.mock.calls.find(
      ([name]) => name === 'Retry-After'
    );
    expect(retryAfter).toBeDefined();

    const wouldAfter = await counterValue(cortexRateLimitWouldBlockTotal, {
      limiter: 'graphql',
      tier: 'anon',
    });
    const blockedAfter = await counterValue(cortexRateLimitBlockedTotal, {
      limiter: 'graphql',
      tier: 'anon',
    });
    expect(blockedAfter - blockedBefore).toBe(1);
    expect(wouldAfter - wouldBefore).toBe(0);
  });

  it('a fabricated JWT-shaped token no longer earns the auth tier (B01-09)', () => {
    const limiter = createRateLimiter(
      makeConfig({ maxUnauthenticated: 1, maxAuthenticated: 100 })
    );
    process.env[CORTEX_RATE_LIMIT_ENFORCE_ENV] = 'true';

    const next = vi.fn();
    const req = makeReq({ headers: { authorization: 'Bearer a.b.c' } });
    limiter(req, makeRes().res, next as NextFunction);
    const second = makeRes();
    limiter(req, second.res, next as NextFunction);

    // Tiered as anon (limit 1) -> second request is blocked, despite the
    // 3-segment Bearer shape.
    expect(second.status).toHaveBeenCalledWith(429);
  });

  it('verified HS256 JWTs earn the auth tier, bucketed per principal sub (B01-02/-09)', () => {
    const limiter = createRateLimiter(
      makeConfig({ maxUnauthenticated: 1, maxAuthenticated: 2 })
    );
    process.env[CORTEX_RATE_LIMIT_ENFORCE_ENV] = 'true';

    const next = vi.fn();
    const tokenA = signUserToken('user-a');
    const tokenB = signUserToken('user-b');

    // Same source IP for every request: buckets must separate by sub, not IP.
    for (let i = 0; i < 2; i += 1) {
      const r = makeRes();
      limiter(
        makeReq({ headers: { authorization: `Bearer ${tokenA}` } }),
        r.res,
        next as NextFunction
      );
      expect(r.status).not.toHaveBeenCalled();
    }
    const overA = makeRes();
    limiter(
      makeReq({ headers: { authorization: `Bearer ${tokenA}` } }),
      overA.res,
      next as NextFunction
    );
    expect(overA.status).toHaveBeenCalledWith(429);

    // user-b still has a full budget despite sharing the IP with user-a.
    const freshB = makeRes();
    limiter(
      makeReq({ headers: { authorization: `Bearer ${tokenB}` } }),
      freshB.res,
      next as NextFunction
    );
    expect(freshB.status).not.toHaveBeenCalled();
  });

  it('the exact SERVER_AUTH_TOKEN earns the auth tier', () => {
    process.env.SERVER_AUTH_TOKEN = 'server-token-for-tier-test';
    process.env[CORTEX_RATE_LIMIT_ENFORCE_ENV] = 'true';
    const limiter = createRateLimiter(
      makeConfig({ maxUnauthenticated: 1, maxAuthenticated: 3 })
    );

    const next = vi.fn();
    for (let i = 0; i < 3; i += 1) {
      const r = makeRes();
      limiter(
        makeReq({
          headers: { authorization: 'Bearer server-token-for-tier-test' },
        }),
        r.res,
        next as NextFunction
      );
      expect(r.status).not.toHaveBeenCalled();
    }
  });

  it('resets the bucket after the window elapses', () => {
    vi.useFakeTimers();
    process.env[CORTEX_RATE_LIMIT_ENFORCE_ENV] = 'true';
    const limiter = createRateLimiter(makeConfig({ maxUnauthenticated: 1 }));

    const next = vi.fn();
    limiter(makeReq(), makeRes().res, next as NextFunction);
    const blocked = makeRes();
    limiter(makeReq(), blocked.res, next as NextFunction);
    expect(blocked.status).toHaveBeenCalledWith(429);

    vi.advanceTimersByTime(WINDOW_MS + 1);

    const fresh = makeRes();
    limiter(makeReq(), fresh.res, next as NextFunction);
    expect(fresh.status).not.toHaveBeenCalledWith(429);
    expect(next).toHaveBeenCalledTimes(2);
  });

  it('OPTIONS preflights never consume rate budget (B01-11)', () => {
    process.env[CORTEX_RATE_LIMIT_ENFORCE_ENV] = 'true';
    const limiter = createRateLimiter(makeConfig({ maxUnauthenticated: 1 }));

    const next = vi.fn();
    for (let i = 0; i < 5; i += 1) {
      limiter(makeReq({ method: 'OPTIONS' }), makeRes().res, next as NextFunction);
    }
    // Budget untouched: the first real request is still within limit.
    const real = makeRes();
    limiter(makeReq(), real.res, next as NextFunction);
    expect(real.status).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(6);
  });

  it('aggregates novel identifiers into a shared overflow bucket past the key cap (B01-12)', () => {
    process.env[CORTEX_RATE_LIMIT_ENFORCE_ENV] = 'true';
    const limiter = createRateLimiter(
      makeConfig({ maxUnauthenticated: 1, maxTrackedKeys: 2 })
    );

    const next = vi.fn();
    // Two distinct IPs fill the tracked-key budget.
    limiter(makeReq({ ip: '198.51.100.1' }), makeRes().res, next as NextFunction);
    limiter(makeReq({ ip: '198.51.100.2' }), makeRes().res, next as NextFunction);

    // Third and fourth novel IPs share the overflow bucket: the fourth is
    // over-limit even though that IP has made only one request.
    const third = makeRes();
    limiter(makeReq({ ip: '198.51.100.3' }), third.res, next as NextFunction);
    expect(third.status).not.toHaveBeenCalled();
    const fourth = makeRes();
    limiter(makeReq({ ip: '198.51.100.4' }), fourth.res, next as NextFunction);
    expect(fourth.status).toHaveBeenCalledWith(429);
  });
});

describe('server-mount contract: /graphql chain with cors (integration)', () => {
  let server: Server | undefined;

  afterEach(() => {
    delete process.env[CORTEX_RATE_LIMIT_ENFORCE_ENV];
  });

  afterAll(async () => {
    if (server) {
      await new Promise<void>((resolve) => server?.close(() => resolve()));
    }
  });

  it('shadow responses are byte-identical (no X-RateLimit headers, no 429) and enforce-mode 429s carry CORS headers (B01-08/-11)', async () => {
    _resetRateTierCacheForTests();
    const maxUnauthenticated = 3;
    const limiter = createRateLimiter(
      makeConfig({ maxUnauthenticated, name: 'graphql' })
    );

    const app = express();
    // Mirror server.ts: cors() BEFORE the limiter in the /graphql chain.
    app.use(
      '/graphql',
      cors({ origin: true, credentials: true }),
      limiter,
      express.json(),
      (_req, res) => {
        res.json({ data: { ok: true } });
      }
    );
    server = app.listen(0);
    const { port } = server.address() as AddressInfo;
    const url = `http://127.0.0.1:${port}/graphql`;

    // SHADOW: exceed the anon budget; every response must be a plain 200 with
    // zero rate-limit surface.
    for (let i = 0; i < maxUnauthenticated + 3; i += 1) {
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: '{}',
      });
      expect(resp.status).toBe(200);
      expect(resp.headers.get('x-ratelimit-limit')).toBeNull();
      expect(resp.headers.get('x-ratelimit-remaining')).toBeNull();
      expect(resp.headers.get('retry-after')).toBeNull();
    }

    // ENFORCE: the bucket is already exhausted; the 429 must carry CORS
    // headers so browser clients can read Retry-After.
    process.env[CORTEX_RATE_LIMIT_ENFORCE_ENV] = 'true';
    const blocked = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        origin: 'https://stable.adaptic.ai',
      },
      body: '{}',
    });
    expect(blocked.status).toBe(429);
    expect(blocked.headers.get('retry-after')).not.toBeNull();
    expect(blocked.headers.get('access-control-allow-origin')).not.toBeNull();
  });
});
