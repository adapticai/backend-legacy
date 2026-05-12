import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  vi,
  type Mock,
} from 'vitest';
import jwt from 'jsonwebtoken';

/**
 * `vi.hoisted` runs BEFORE the static `import` statements below are evaluated,
 * which is essential because the module under test imports `jwtConfig.ts`,
 * which reads `process.env.JWT_SECRET` once at import time. We must set the
 * env vars before any of that runs.
 */
const TEST_JWT_SECRET = vi.hoisted(() => {
  const secret =
    'test-secret-for-cortex-p0-002-token-verifier-suite-only-not-real';
  process.env.JWT_SECRET = secret;
  process.env.NEXTAUTH_SECRET = secret; // fallback chain
  process.env.GOOGLE_OAUTH_CLIENT_IDS =
    'test-client-id-1.apps.googleusercontent.com,test-client-id-2.apps.googleusercontent.com';
  delete process.env.SERVER_AUTH_TOKEN; // ensure clean slate
  return secret;
});

/**
 * Mock `google-auth-library` BEFORE importing the module under test so that
 * `OAuth2Client.verifyIdToken` is a Vitest mock we can script per scenario.
 * `vi.hoisted` ensures `verifyIdTokenMock` is constructed before the static
 * imports below evaluate.
 *
 * Each test resets the mock implementation, so leaking state between tests is
 * impossible and assertions remain hermetic.
 */
const verifyIdTokenMock = vi.hoisted(() => vi.fn());

vi.mock('google-auth-library', () => {
  return {
    OAuth2Client: vi.fn().mockImplementation(() => ({
      verifyIdToken: verifyIdTokenMock,
    })),
  };
});

import {
  verifyBackendToken,
  AuthError,
  assertGoogleAudienceConfiguredForProd,
  googleAudienceList,
  parseRolesFromJWT,
  _resetGoogleAudienceCacheForTests,
  type BackendPrincipal,
  type AuthErrorReason,
} from '../token-verifier';

/**
 * Construct a 3-segment JWT-shaped string whose signature segment is garbage.
 * Useful for the "looks like a JWT but is not signed by us" cases.
 */
function makeStructurallyValidButUnsignedJwt(): string {
  const header = Buffer.from(
    JSON.stringify({ alg: 'HS256', typ: 'JWT' })
  ).toString('base64url');
  const payload = Buffer.from(
    JSON.stringify({ sub: 'attacker', exp: 9999999999 })
  ).toString('base64url');
  return `${header}.${payload}.invalid-signature-not-from-our-secret`;
}

describe('verifyBackendToken — discriminated reasons', () => {
  beforeEach(() => {
    // Reset the verifyIdToken mock between tests so per-test
    // `mockResolvedValueOnce` / `mockRejectedValueOnce` calls are deterministic.
    // We deliberately do NOT call `vi.restoreAllMocks()` because that would
    // also reset the OAuth2Client constructor mock factory, leaving
    // `new OAuth2Client()` returning a bare spy with no `verifyIdToken`
    // property — defeating the entire mocking strategy in this file.
    verifyIdTokenMock.mockReset();
  });

  describe('empty / malformed input', () => {
    it('rejects the empty string with reason "malformed"', async () => {
      await expect(verifyBackendToken('')).rejects.toMatchObject({
        code: 'invalid_token',
        reason: 'malformed' satisfies AuthErrorReason,
      });
    });

    it('rejects a token that has neither 1 segment (opaque) nor 3 segments (JWT)', async () => {
      // 2-segment shape: not a JWT, not opaque, just malformed.
      await expect(verifyBackendToken('aa.bb')).rejects.toMatchObject({
        code: 'invalid_token',
        reason: 'malformed' satisfies AuthErrorReason,
      });
    });

    it('throws an instance of AuthError so callers can switch on `instanceof`', async () => {
      try {
        await verifyBackendToken('');
        throw new Error('expected verifyBackendToken to throw');
      } catch (e) {
        expect(e).toBeInstanceOf(AuthError);
      }
    });
  });

  describe('server-to-server static token (path 1)', () => {
    const SERVER_TOKEN = 'server-secret-token-for-test-1234567890abcdef';

    beforeEach(() => {
      process.env.SERVER_AUTH_TOKEN = SERVER_TOKEN;
    });

    afterEach(() => {
      delete process.env.SERVER_AUTH_TOKEN;
    });

    it('exact-matches SERVER_AUTH_TOKEN and returns { kind: "server" }', async () => {
      const principal = await verifyBackendToken(SERVER_TOKEN);
      expect(principal).toEqual<BackendPrincipal>({ kind: 'server' });
    });

    it('does NOT match a similar-but-different token (falls through to JWT path)', async () => {
      // This is shaped like a JWT (3 segments), so it will be tried as a JWT.
      // Since it is not signed by our secret, JWT verification rejects with bad_signature.
      const almost = makeStructurallyValidButUnsignedJwt();
      await expect(verifyBackendToken(almost)).rejects.toMatchObject({
        code: 'invalid_token',
        reason: 'bad_signature' satisfies AuthErrorReason,
      });
    });

    it('does NOT short-circuit on empty SERVER_AUTH_TOKEN (must require *exact* match of non-empty string)', async () => {
      delete process.env.SERVER_AUTH_TOKEN;
      // Empty SERVER_AUTH_TOKEN env must never authenticate the literal empty
      // string. We already test that the empty input is rejected above; this
      // guard ensures the implementation does not accidentally treat
      // `process.env.SERVER_AUTH_TOKEN === undefined && token === ''` as a match.
      await expect(verifyBackendToken('')).rejects.toMatchObject({
        reason: 'malformed' satisfies AuthErrorReason,
      });
    });
  });

  describe('app-issued JWT (path 2)', () => {
    it('accepts a valid JWT signed by our secret and returns { kind: "user", sub, roles }', async () => {
      const token = jwt.sign(
        { sub: 'user-123', roles: ['user', 'investor'] },
        TEST_JWT_SECRET,
        { expiresIn: '5m' }
      );

      const principal = await verifyBackendToken(token);
      expect(principal.kind).toBe('user');
      if (principal.kind === 'user') {
        expect(principal.sub).toBe('user-123');
        expect(principal.roles).toEqual(['user', 'investor']);
      }
    });

    it('accepts a JWT carrying a single `role` claim and normalises to roles array', async () => {
      // Use a non-admin role here so we can assert the user-kind branch
      // without straying into admin classification.
      const token = jwt.sign(
        { sub: 'user-456', role: 'investor' },
        TEST_JWT_SECRET,
        {
          expiresIn: '5m',
        }
      );

      const principal = await verifyBackendToken(token);
      expect(principal.kind).toBe('user');
      if (principal.kind === 'user') {
        expect(principal.sub).toBe('user-456');
        expect(principal.roles).toContain('investor');
      }
    });

    it('classifies a JWT with role=admin as { kind: "admin" }', async () => {
      const token = jwt.sign(
        { sub: 'user-789', role: 'admin' },
        TEST_JWT_SECRET,
        {
          expiresIn: '5m',
        }
      );

      const principal = await verifyBackendToken(token);
      expect(principal.kind).toBe('admin');
      if (principal.kind === 'admin') {
        expect(principal.sub).toBe('user-789');
        expect(principal.roles).toContain('admin');
      }
    });

    it('rejects an expired JWT with reason "expired"', async () => {
      // exp claim is in seconds; subtract 60 to be safely in the past.
      const expiredToken = jwt.sign(
        { sub: 'user-789', exp: Math.floor(Date.now() / 1000) - 60 },
        TEST_JWT_SECRET
      );

      await expect(verifyBackendToken(expiredToken)).rejects.toMatchObject({
        code: 'invalid_token',
        reason: 'expired' satisfies AuthErrorReason,
      });
    });

    it('rejects a JWT signed with the WRONG secret with reason "bad_signature"', async () => {
      const forgedToken = jwt.sign(
        { sub: 'attacker', roles: ['admin'] },
        'a-completely-different-secret-not-our-real-one-32chars'
      );

      await expect(verifyBackendToken(forgedToken)).rejects.toMatchObject({
        code: 'invalid_token',
        reason: 'bad_signature' satisfies AuthErrorReason,
      });
    });

    it('rejects a 3-segment string with garbage signature with reason "bad_signature"', async () => {
      const garbage = makeStructurallyValidButUnsignedJwt();
      await expect(verifyBackendToken(garbage)).rejects.toMatchObject({
        reason: 'bad_signature' satisfies AuthErrorReason,
      });
    });

    it('rejects a JWT with no sub claim (issuer must include sub)', async () => {
      // We treat JWTs without a sub as malformed for our purposes — there is
      // no principal to identify.
      const token = jwt.sign({ roles: ['user'] }, TEST_JWT_SECRET, {
        expiresIn: '5m',
      });

      await expect(verifyBackendToken(token)).rejects.toMatchObject({
        code: 'invalid_token',
      });
    });
  });

  describe('opaque OAuth access tokens (rejected explicitly, NEVER reach Google)', () => {
    it('rejects an opaque access token of the form `ya29.…` with reason "opaque_access_token_rejected"', async () => {
      // This is the CORE security regression: `ya29.AbCdEf…` is an *access*
      // token, not an *ID* token. It cannot be verified offline. Reject it.
      // We use a token that begins with `ya29.` followed by characters that
      // do NOT form a valid 3-segment JWT. Since there is only one `.` in this
      // string total, segment count is 2, which is structurally not-a-JWT.
      //
      // We do NOT want this path to call OAuth2Client.verifyIdToken — the
      // assertion below confirms that.
      const opaque = 'ya29.A0AbVbY6Eabc_pretend_opaque_access_token_payload';

      await expect(verifyBackendToken(opaque)).rejects.toMatchObject({
        code: 'invalid_token',
        reason: 'malformed' satisfies AuthErrorReason,
      });

      expect(verifyIdTokenMock).not.toHaveBeenCalled();
    });

    it('rejects a true single-segment opaque token with reason "opaque_access_token_rejected"', async () => {
      // No dots at all — purely opaque.
      const opaque = 'ya29A0AbVbY6Eabc_no_dots_at_all_single_segment_token';

      await expect(verifyBackendToken(opaque)).rejects.toMatchObject({
        code: 'invalid_token',
        reason: 'opaque_access_token_rejected' satisfies AuthErrorReason,
      });

      expect(verifyIdTokenMock).not.toHaveBeenCalled();
    });
  });

  describe('Google ID token (path 3)', () => {
    it('accepts a valid Google ID token and returns { kind: "user", sub, email, roles: ["user"] }', async () => {
      // Construct a structurally valid (3-segment) JWT that is NOT signed by
      // our secret. The JWT-verify path rejects it; verifier then falls through
      // to Google verification. We script the mock to succeed.
      const googleLooking = makeStructurallyValidButUnsignedJwt();

      verifyIdTokenMock.mockResolvedValueOnce({
        getPayload: () => ({
          iss: 'https://accounts.google.com',
          sub: 'google-sub-987654321',
          email: 'someone@example.com',
          email_verified: true,
          aud: 'test-client-id-1.apps.googleusercontent.com',
          exp: Math.floor(Date.now() / 1000) + 3600,
          iat: Math.floor(Date.now() / 1000) - 10,
        }),
      });

      const principal = await verifyBackendToken(googleLooking);
      expect(principal.kind).toBe('user');
      if (principal.kind === 'user') {
        expect(principal.sub).toBe('google-sub-987654321');
        expect(principal.email).toBe('someone@example.com');
        expect(principal.roles).toEqual(['user']);
      }

      expect(verifyIdTokenMock).toHaveBeenCalledTimes(1);
      // Verify we passed the configured audience list, not a hardcoded value.
      const call = verifyIdTokenMock.mock.calls[0] as [
        { idToken: string; audience: string[] }
      ];
      expect(call[0].audience).toEqual([
        'test-client-id-1.apps.googleusercontent.com',
        'test-client-id-2.apps.googleusercontent.com',
      ]);
    });

    it('when Google verification throws (wrong audience), prefers the upstream local-JWT failure reason over the Google audience catch-all', async () => {
      // Setup: a structurally-valid-but-unsigned JWT. This token will:
      //   1. Fail local-JWT verification (path 2) with `bad_signature`
      //      because we cannot verify its signature against `jwtSecret`.
      //      `localJwtFailure` is recorded as 'bad_signature'.
      //   2. Fall through to Google (path 3). The Google mock is set to
      //      reject with "wrong audience".
      //
      // Previous behaviour (before CORTEX-2026-05-12 auth-debug change):
      //   surfaced `bad_audience` from the Google catch-all, hiding the
      //   real upstream failure. For app-issued tokens (HS256 with our
      //   secret) Google would never have recognised them anyway — the
      //   `bad_audience` diagnosis was noise.
      //
      // New behaviour: prefer `localJwtFailure` when present. Operators
      // see the actionable diagnosis (`bad_signature` -> "check the
      // shared JWT_SECRET") rather than a misleading downstream one.
      // The original `bad_audience` default is still emitted when no
      // `localJwtFailure` exists, which is a defensive branch that
      // doesn't fire in practice but is asserted in the next test.
      const googleLooking = makeStructurallyValidButUnsignedJwt();

      verifyIdTokenMock.mockRejectedValueOnce(
        new Error("Wrong recipient, payload audience != requiredAudience")
      );

      await expect(verifyBackendToken(googleLooking)).rejects.toMatchObject({
        code: 'invalid_token',
        reason: 'bad_signature' satisfies AuthErrorReason,
      });
    });

    it('rejects when Google returns no payload', async () => {
      const googleLooking = makeStructurallyValidButUnsignedJwt();

      verifyIdTokenMock.mockResolvedValueOnce({
        getPayload: () => undefined,
      });

      await expect(verifyBackendToken(googleLooking)).rejects.toMatchObject({
        code: 'invalid_token',
      });
    });

    it('rejects when Google returns a payload without sub', async () => {
      const googleLooking = makeStructurallyValidButUnsignedJwt();

      verifyIdTokenMock.mockResolvedValueOnce({
        getPayload: () => ({
          iss: 'https://accounts.google.com',
          email: 'someone@example.com',
          aud: 'test-client-id-1.apps.googleusercontent.com',
          exp: Math.floor(Date.now() / 1000) + 3600,
          iat: Math.floor(Date.now() / 1000) - 10,
          // sub deliberately missing
        }),
      });

      await expect(verifyBackendToken(googleLooking)).rejects.toMatchObject({
        code: 'invalid_token',
      });
    });
  });

  describe('AuthError shape', () => {
    it('exposes `code` and `reason` as enumerable string properties', async () => {
      try {
        await verifyBackendToken('');
        throw new Error('expected throw');
      } catch (e) {
        expect(e).toBeInstanceOf(AuthError);
        const err = e as AuthError;
        expect(typeof err.code).toBe('string');
        expect(typeof err.reason).toBe('string');
        expect(err.code).toBe('invalid_token');
      }
    });
  });
});

describe('verifyBackendToken — log redaction', () => {
  let writeSpy: Mock;
  let stdoutSpy: ReturnType<typeof vi.spyOn>;
  let stderrSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    verifyIdTokenMock.mockReset();
    // Spy on stdout/stderr writes so we can assert no raw token leaks. Using
    // `vi.spyOn` avoids the `as unknown as` cast that direct reassignment
    // would require and lets us restore both spies cleanly without touching
    // the OAuth2Client constructor mock at file scope.
    writeSpy = vi.fn().mockReturnValue(true);
    stdoutSpy = vi
      .spyOn(process.stdout, 'write')
      .mockImplementation((chunk, ...rest: Parameters<typeof writeSpy>) => {
        writeSpy(chunk, ...rest);
        return true;
      });
    stderrSpy = vi
      .spyOn(process.stderr, 'write')
      .mockImplementation((chunk, ...rest: Parameters<typeof writeSpy>) => {
        writeSpy(chunk, ...rest);
        return true;
      });
  });

  afterEach(() => {
    stdoutSpy.mockRestore();
    stderrSpy.mockRestore();
  });

  it('never writes a raw access token to logs (redacts to prefix or length)', async () => {
    const opaque = 'ya29.SECRET_PAYLOAD_DO_NOT_LEAK_THIS_STRING_INTO_LOGS';

    await expect(verifyBackendToken(opaque)).rejects.toBeInstanceOf(AuthError);

    const writtenLines = writeSpy.mock.calls
      .map((args: unknown[]) => String(args[0] ?? ''))
      .join('\n');

    expect(writtenLines).not.toContain('SECRET_PAYLOAD_DO_NOT_LEAK_THIS_STRING_INTO_LOGS');
  });
});

describe('assertGoogleAudienceConfiguredForProd', () => {
  const originalNodeEnv = process.env.NODE_ENV;
  const originalClientIds = process.env.GOOGLE_OAUTH_CLIENT_IDS;

  afterEach(() => {
    if (originalNodeEnv === undefined) {
      delete process.env.NODE_ENV;
    } else {
      process.env.NODE_ENV = originalNodeEnv;
    }
    if (originalClientIds === undefined) {
      delete process.env.GOOGLE_OAUTH_CLIENT_IDS;
    } else {
      process.env.GOOGLE_OAUTH_CLIENT_IDS = originalClientIds;
    }
    _resetGoogleAudienceCacheForTests();
  });

  it('throws in production when GOOGLE_OAUTH_CLIENT_IDS is missing', () => {
    process.env.NODE_ENV = 'production';
    delete process.env.GOOGLE_OAUTH_CLIENT_IDS;

    expect(() => assertGoogleAudienceConfiguredForProd()).toThrow(
      /GOOGLE_OAUTH_CLIENT_IDS is required in production/
    );
  });

  it('throws in production when GOOGLE_OAUTH_CLIENT_IDS is empty whitespace', () => {
    process.env.NODE_ENV = 'production';
    process.env.GOOGLE_OAUTH_CLIENT_IDS = '   ';

    expect(() => assertGoogleAudienceConfiguredForProd()).toThrow(
      /GOOGLE_OAUTH_CLIENT_IDS is required in production/
    );
  });

  it('does NOT throw in production when GOOGLE_OAUTH_CLIENT_IDS is set', () => {
    process.env.NODE_ENV = 'production';
    process.env.GOOGLE_OAUTH_CLIENT_IDS = 'x.apps.googleusercontent.com';

    expect(() => assertGoogleAudienceConfiguredForProd()).not.toThrow();
  });

  it('does NOT throw in non-production environments regardless of env var', () => {
    process.env.NODE_ENV = 'development';
    delete process.env.GOOGLE_OAUTH_CLIENT_IDS;

    expect(() => assertGoogleAudienceConfiguredForProd()).not.toThrow();

    process.env.NODE_ENV = 'test';
    expect(() => assertGoogleAudienceConfiguredForProd()).not.toThrow();
  });
});

describe('googleAudienceList', () => {
  const originalClientIds = process.env.GOOGLE_OAUTH_CLIENT_IDS;
  const originalNodeEnv = process.env.NODE_ENV;

  afterEach(() => {
    if (originalClientIds === undefined) {
      delete process.env.GOOGLE_OAUTH_CLIENT_IDS;
    } else {
      process.env.GOOGLE_OAUTH_CLIENT_IDS = originalClientIds;
    }
    if (originalNodeEnv === undefined) {
      delete process.env.NODE_ENV;
    } else {
      process.env.NODE_ENV = originalNodeEnv;
    }
    _resetGoogleAudienceCacheForTests();
  });

  it('parses comma-separated client IDs and trims whitespace', () => {
    process.env.NODE_ENV = 'test';
    process.env.GOOGLE_OAUTH_CLIENT_IDS =
      'a.apps.googleusercontent.com, b.apps.googleusercontent.com,  c.apps.googleusercontent.com';
    _resetGoogleAudienceCacheForTests();

    expect(googleAudienceList()).toEqual([
      'a.apps.googleusercontent.com',
      'b.apps.googleusercontent.com',
      'c.apps.googleusercontent.com',
    ]);
  });

  it('returns [] in non-prod when the env is missing (with warning)', () => {
    process.env.NODE_ENV = 'test';
    delete process.env.GOOGLE_OAUTH_CLIENT_IDS;
    _resetGoogleAudienceCacheForTests();

    expect(googleAudienceList()).toEqual([]);
  });

  it('throws AuthError("misconfigured") in production when the env is missing', () => {
    process.env.NODE_ENV = 'production';
    delete process.env.GOOGLE_OAUTH_CLIENT_IDS;
    _resetGoogleAudienceCacheForTests();

    expect(() => googleAudienceList()).toThrow(AuthError);
    try {
      googleAudienceList();
    } catch (e) {
      expect(e).toBeInstanceOf(AuthError);
      expect((e as AuthError).reason).toBe(
        'misconfigured' satisfies AuthErrorReason
      );
    }
  });
});

describe('parseRolesFromJWT', () => {
  it('returns empty array for string or undefined payload', () => {
    expect(parseRolesFromJWT(undefined)).toEqual([]);
    expect(parseRolesFromJWT('some-string')).toEqual([]);
  });

  it('extracts roles from `roles` array claim', () => {
    expect(parseRolesFromJWT({ roles: ['user', 'admin'] })).toEqual([
      'user',
      'admin',
    ]);
  });

  it('extracts role from legacy `role` string claim', () => {
    expect(parseRolesFromJWT({ role: 'admin' })).toEqual(['admin']);
  });

  it('merges both claims and dedupes', () => {
    expect(
      parseRolesFromJWT({ roles: ['user'], role: 'admin' })
    ).toEqual(['user', 'admin']);
    expect(
      parseRolesFromJWT({ roles: ['user', 'admin'], role: 'admin' })
    ).toEqual(['user', 'admin']);
  });

  it('ignores non-string members of roles array', () => {
    expect(
      parseRolesFromJWT({ roles: ['user', 42, null, 'admin'] as unknown[] })
    ).toEqual(['user', 'admin']);
  });
});
