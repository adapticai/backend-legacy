/**
 * Asserts the server-only DTO resolvers added for CORTEX-P0-001 follow-up:
 *
 *  - `serverGetAlpacaAccountCredentials` / `serverGetAllAlpacaAccountCredentials`
 *  - `serverFindSessionByToken` / `serverCreateSession` / `serverDeleteSessionByToken`
 *  - `serverGetAccountForLinking`
 *  - `serverGetVerificationToken` / `serverCreateVerificationToken` /
 *    `serverDeleteVerificationToken`
 *
 * Each operation must:
 *   1. Reject unauthenticated callers with `UNAUTHENTICATED` (the global
 *      auth-guard middleware fires before `@Authorized` is consulted).
 *   2. Reject authenticated callers without the `server` or `admin` role
 *      with `UNAUTHORIZED` (the `@Authorized(["server","admin"])` decorator
 *      fires; `authMode: "error"` surfaces `AuthorizationError`).
 *   3. Succeed for callers presenting a `server` principal and return a DTO
 *      whose secret-bearing fields are NON-NULL string values (the whole
 *      point — these are the only schema paths that expose secrets).
 *
 * The test also asserts the **schema-level invariants**: the new DTO types
 * exist with the secret fields the consumers will migrate to, and these
 * DTO types are STAND-ALONE — they must not be reachable from the public
 * `AlpacaAccount` / `Session` / `Account` / `VerificationToken` output
 * types. If a future change wires them onto the public types by accident,
 * this test fails loudly.
 *
 * --- Why this test loads from `dist/` ---
 *
 * Same rationale as `src/graphql/__tests__/auth-required.test.ts`:
 * Vite/esbuild does not emit a tsc-compatible `design:paramtypes` for
 * some of the type-graphql Prisma generated code. `tsc` handles these
 * correctly. The pre-test `npm run build` produces `dist/` and we load
 * the compiled JS so metadata matches what production serves.
 */

import 'reflect-metadata';
import path from 'path';
import { describe, it, expect, beforeAll } from 'vitest';
import { ApolloServer } from '@apollo/server';
import type { AuthChecker, NonEmptyArray, MiddlewareFn } from 'type-graphql';
import type { Request } from 'express';

/**
 * `printSchema` and `buildSchema` are loaded via CJS `require()` (not ESM
 * `import`) so they share the same `graphql` and `type-graphql` module
 * instances as the dist-loaded resolvers/models. With ESM imports, Vite
 * resolves `graphql` to its ESM build while the dist-loaded CJS modules
 * load the CJS build; the two different module instances trip "Cannot
 * use GraphQLObjectType from another module or realm." Sharing instances
 * via the require cache avoids the realm mismatch.
 */
type GraphQLModule = typeof import('graphql');
type TypeGraphQLModule = typeof import('type-graphql');
const graphqlMod: GraphQLModule = require('graphql');
const typeGraphQLMod: TypeGraphQLModule = require('type-graphql');
const { printSchema } = graphqlMod;
const { buildSchema } = typeGraphQLMod;

interface DistContext {
  user: unknown;
  prisma: unknown;
  req?: unknown;
}

interface DistModules {
  getAllowedResolvers: () => Promise<NonEmptyArray<new (...args: never[]) => object>>;
  authChecker: AuthChecker<object, string>;
  applyEnhanceOverrides: () => Promise<void>;
  authGuardMiddleware: MiddlewareFn<DistContext>;
  buildApolloContextFromRequest: (req: Request) => Promise<DistContext>;
}

let mods!: DistModules;
let server!: ApolloServer<DistContext>;
let serverWithStubbedPrisma!: ApolloServer<DistContext>;
let schemaSdl!: string;

/**
 * The fixture rows the stubbed Prisma client returns. Plain objects shaped
 * like the underlying Prisma `findUnique` / `findFirst` / `create` /
 * `delete` results — only the columns the resolvers read are present.
 */
const FIXTURE_ALPACA: {
  id: string;
  type: 'PAPER' | 'LIVE';
  configuration: unknown;
  APIKey: string;
  APISecret: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
} = {
  id: 'fix-acct-1',
  type: 'PAPER',
  configuration: { brokerEnv: 'paper' },
  APIKey: 'PK_FIXTURE_KEY_12345',
  APISecret: 'SK_FIXTURE_SECRET_67890',
  userId: 'fix-user-1',
  createdAt: new Date('2026-01-01T00:00:00Z'),
  updatedAt: new Date('2026-01-02T00:00:00Z'),
};

const FIXTURE_SESSION: {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  createdAt: Date;
  updatedAt: Date;
} = {
  id: 'fix-sess-1',
  sessionToken: 'sess-tok-FIXTURE-1234567890',
  userId: 'fix-user-1',
  expires: new Date('2026-12-31T00:00:00Z'),
  createdAt: new Date('2026-01-01T00:00:00Z'),
  updatedAt: new Date('2026-01-02T00:00:00Z'),
};

const FIXTURE_ACCOUNT: {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  access_token: string | null;
  refresh_token: string | null;
  id_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  session_state: string | null;
} = {
  id: 'fix-acct-link-1',
  userId: 'fix-user-1',
  type: 'oauth',
  provider: 'github',
  providerAccountId: 'gh-12345',
  access_token: 'gha-ACCESS-FIXTURE',
  refresh_token: 'ghr-REFRESH-FIXTURE',
  id_token: null,
  expires_at: 1735689600,
  token_type: 'Bearer',
  scope: 'read:user user:email',
  session_state: null,
};

const FIXTURE_VERIFICATION: {
  identifier: string;
  token: string;
  expires: Date;
} = {
  identifier: 'user@example.com',
  token: 'vt-FIXTURE-TOKEN-abcdef',
  expires: new Date('2026-12-31T00:00:00Z'),
};

/**
 * A stub Prisma client just deep enough for the four server resolvers.
 * We intentionally do NOT use real Prisma — these tests assert behaviour
 * at the resolver/auth layer, not database integration.
 */
function makeStubbedPrisma(): unknown {
  return {
    alpacaAccount: {
      findUnique: async ({ where }: { where: { id: string } }) => {
        if (where.id === FIXTURE_ALPACA.id) return { ...FIXTURE_ALPACA };
        return null;
      },
      findMany: async ({ where }: { where?: { userId?: string } } = {}) => {
        if (!where || !where.userId || where.userId === FIXTURE_ALPACA.userId) {
          return [{ ...FIXTURE_ALPACA }];
        }
        return [];
      },
    },
    session: {
      findUnique: async ({ where }: { where: { sessionToken: string } }) => {
        if (where.sessionToken === FIXTURE_SESSION.sessionToken)
          return { ...FIXTURE_SESSION };
        return null;
      },
      create: async ({
        data,
      }: {
        data: { userId: string; sessionToken: string; expires: Date };
      }) => ({
        id: 'sess-newly-created',
        sessionToken: data.sessionToken,
        userId: data.userId,
        expires: data.expires,
        createdAt: new Date('2026-05-12T00:00:00Z'),
        updatedAt: new Date('2026-05-12T00:00:00Z'),
      }),
      delete: async ({ where }: { where: { sessionToken: string } }) => {
        if (where.sessionToken === FIXTURE_SESSION.sessionToken)
          return { ...FIXTURE_SESSION };
        throw new Error('not found');
      },
    },
    account: {
      findUnique: async ({
        where,
      }: {
        where: { provider_providerAccountId: { provider: string; providerAccountId: string } };
      }) => {
        const key = where.provider_providerAccountId;
        if (
          key.provider === FIXTURE_ACCOUNT.provider &&
          key.providerAccountId === FIXTURE_ACCOUNT.providerAccountId
        ) {
          return { ...FIXTURE_ACCOUNT };
        }
        return null;
      },
    },
    verificationToken: {
      findUnique: async ({
        where,
      }: {
        where: { identifier_token: { identifier: string; token: string } };
      }) => {
        const key = where.identifier_token;
        if (
          key.identifier === FIXTURE_VERIFICATION.identifier &&
          key.token === FIXTURE_VERIFICATION.token
        ) {
          return { ...FIXTURE_VERIFICATION };
        }
        return null;
      },
      create: async ({
        data,
      }: {
        data: { identifier: string; token: string; expires: Date };
      }) => ({
        identifier: data.identifier,
        token: data.token,
        expires: data.expires,
      }),
      delete: async ({
        where,
      }: {
        where: { identifier_token: { identifier: string; token: string } };
      }) => {
        const key = where.identifier_token;
        if (
          key.identifier === FIXTURE_VERIFICATION.identifier &&
          key.token === FIXTURE_VERIFICATION.token
        ) {
          return { ...FIXTURE_VERIFICATION };
        }
        throw new Error('not found');
      },
    },
  };
}

/**
 * Build a test context with an explicit principal (server / admin / user / null).
 * Skips the production verifier so the test can inject any shape it wants.
 */
function makeTestContext(
  principal: 'server' | 'admin' | 'user' | null,
  stubbedPrisma: unknown
): DistContext {
  if (principal === null) {
    return { user: null, prisma: stubbedPrisma };
  }
  return {
    user: {
      sub: principal === 'server' ? 'server' : `user-${principal}`,
      role: principal,
      roles: [principal],
    },
    prisma: stubbedPrisma,
  };
}

beforeAll(async () => {
  // __dirname = src/resolvers/custom/server/__tests__/ — go up 5 to repo
  // root, then into dist/. The compiled artifacts live at dist/graphql/*.js.
  const distRoot = path.resolve(__dirname, '..', '..', '..', '..', '..', 'dist');
  const graphqlRoot = path.join(distRoot, 'graphql');

  const enhance = (await import(path.join(graphqlRoot, 'enhance-overrides.js'))) as {
    applyEnhanceOverrides: () => Promise<void>;
  };
  const allowlist = (await import(path.join(graphqlRoot, 'resolver-allowlist.js'))) as {
    getAllowedResolvers: () => Promise<NonEmptyArray<new (...args: never[]) => object>>;
  };
  const ac = (await import(path.join(graphqlRoot, 'auth-checker.js'))) as {
    authChecker: AuthChecker<object, string>;
  };
  const guard = (await import(path.join(graphqlRoot, 'auth-guard.js'))) as {
    authGuardMiddleware: MiddlewareFn<DistContext>;
  };
  const ctx = (await import(path.join(graphqlRoot, 'apollo-context.js'))) as {
    buildApolloContextFromRequest: (req: Request) => Promise<DistContext>;
  };

  mods = {
    getAllowedResolvers: allowlist.getAllowedResolvers,
    authChecker: ac.authChecker,
    applyEnhanceOverrides: enhance.applyEnhanceOverrides,
    authGuardMiddleware: guard.authGuardMiddleware,
    buildApolloContextFromRequest: ctx.buildApolloContextFromRequest,
  };

  await mods.applyEnhanceOverrides();
  const resolvers = await mods.getAllowedResolvers();
  const schema = await buildSchema({
    resolvers,
    validate: false,
    authChecker: mods.authChecker,
    authMode: 'error',
    globalMiddlewares: [mods.authGuardMiddleware],
  });

  schemaSdl = printSchema(schema);

  // One Apollo Server instance shared across the auth-related tests (it
  // doesn't see the prisma stub — it relies on the per-operation
  // `contextValue` we pass below).
  server = new ApolloServer<DistContext>({ schema, introspection: true });
  await server.start();

  // Second instance for the round-trip tests where the resolver actually
  // reaches into the (stubbed) Prisma client.
  serverWithStubbedPrisma = new ApolloServer<DistContext>({
    schema,
    introspection: true,
  });
  await serverWithStubbedPrisma.start();
}, 60_000);

describe('Server-only credential resolvers — schema invariants', () => {
  it('declares an AlpacaAccountCredentialsDTO with non-null APIKey and APISecret', () => {
    expect(schemaSdl).toContain('type AlpacaAccountCredentialsDTO');
    const dtoMatch = schemaSdl.match(
      /type AlpacaAccountCredentialsDTO[\s\S]*?\n\}/
    );
    expect(dtoMatch, 'AlpacaAccountCredentialsDTO block should exist').not.toBeNull();
    if (dtoMatch) {
      expect(dtoMatch[0]).toMatch(/\bAPIKey: String!/);
      expect(dtoMatch[0]).toMatch(/\bAPISecret: String!/);
    }
  });

  it('declares a SessionWithTokenDTO with non-null sessionToken', () => {
    expect(schemaSdl).toContain('type SessionWithTokenDTO');
    const dtoMatch = schemaSdl.match(/type SessionWithTokenDTO[\s\S]*?\n\}/);
    expect(dtoMatch).not.toBeNull();
    if (dtoMatch) {
      expect(dtoMatch[0]).toMatch(/\bsessionToken: String!/);
    }
  });

  it('declares an AccountWithTokensDTO with OAuth token fields', () => {
    expect(schemaSdl).toContain('type AccountWithTokensDTO');
    const dtoMatch = schemaSdl.match(/type AccountWithTokensDTO[\s\S]*?\n\}/);
    expect(dtoMatch).not.toBeNull();
    if (dtoMatch) {
      expect(dtoMatch[0]).toMatch(/\baccess_token:/);
      expect(dtoMatch[0]).toMatch(/\brefresh_token:/);
      expect(dtoMatch[0]).toMatch(/\bid_token:/);
    }
  });

  it('declares a VerificationTokenDTO with non-null token', () => {
    expect(schemaSdl).toContain('type VerificationTokenDTO');
    const dtoMatch = schemaSdl.match(/type VerificationTokenDTO[\s\S]*?\n\}/);
    expect(dtoMatch).not.toBeNull();
    if (dtoMatch) {
      expect(dtoMatch[0]).toMatch(/\btoken: String!/);
    }
  });

  it('declares the four server* query/mutation operations', () => {
    // Queries
    expect(schemaSdl).toMatch(/serverGetAlpacaAccountCredentials\s*\(/);
    expect(schemaSdl).toMatch(/serverGetAllAlpacaAccountCredentials\s*\(/);
    expect(schemaSdl).toMatch(/serverFindSessionByToken\s*\(/);
    expect(schemaSdl).toMatch(/serverGetAccountForLinking\s*\(/);
    expect(schemaSdl).toMatch(/serverGetVerificationToken\s*\(/);

    // Mutations
    expect(schemaSdl).toMatch(/serverCreateSession\s*\(/);
    expect(schemaSdl).toMatch(/serverDeleteSessionByToken\s*\(/);
    expect(schemaSdl).toMatch(/serverCreateVerificationToken\s*\(/);
    expect(schemaSdl).toMatch(/serverDeleteVerificationToken\s*\(/);
  });

  it('keeps the DTO types isolated from the public AlpacaAccount / Session / Account types', () => {
    // The public AlpacaAccount type still must NOT contain APIKey/APISecret.
    const alpacaTypeMatch = schemaSdl.match(/type AlpacaAccount\b[\s\S]*?\n\}/);
    expect(alpacaTypeMatch).not.toBeNull();
    if (alpacaTypeMatch) {
      expect(alpacaTypeMatch[0]).not.toMatch(/\bAPIKey\b/);
      expect(alpacaTypeMatch[0]).not.toMatch(/\bAPISecret\b/);
    }
    // The public Session type still must NOT contain sessionToken.
    const sessionTypeMatch = schemaSdl.match(/type Session\b[\s\S]*?\n\}/);
    expect(sessionTypeMatch).not.toBeNull();
    if (sessionTypeMatch) {
      expect(sessionTypeMatch[0]).not.toMatch(/\bsessionToken\b/);
    }
    // The public Account type still must NOT contain access_token / id_token / refresh_token.
    const accountTypeMatch = schemaSdl.match(/type Account\b[\s\S]*?\n\}/);
    expect(accountTypeMatch).not.toBeNull();
    if (accountTypeMatch) {
      expect(accountTypeMatch[0]).not.toMatch(/\baccess_token\b/);
      expect(accountTypeMatch[0]).not.toMatch(/\brefresh_token\b/);
      expect(accountTypeMatch[0]).not.toMatch(/\bid_token\b/);
    }
  });
});

describe('Server-only credential resolvers — authentication required (UNAUTHENTICATED)', () => {
  const operations: Array<{ name: string; query: string; variables?: Record<string, unknown> }> = [
    {
      name: 'serverGetAlpacaAccountCredentials',
      query: 'query Q($id: ID!) { serverGetAlpacaAccountCredentials(accountId: $id) { id APIKey APISecret } }',
      variables: { id: FIXTURE_ALPACA.id },
    },
    {
      name: 'serverGetAllAlpacaAccountCredentials',
      query: 'query Q { serverGetAllAlpacaAccountCredentials { id APIKey APISecret } }',
    },
    {
      name: 'serverFindSessionByToken',
      query: 'query Q($t: String!) { serverFindSessionByToken(token: $t) { id sessionToken } }',
      variables: { t: FIXTURE_SESSION.sessionToken },
    },
    {
      name: 'serverGetAccountForLinking',
      query: 'query Q($p: String!, $a: String!) { serverGetAccountForLinking(provider: $p, providerAccountId: $a) { id access_token } }',
      variables: { p: FIXTURE_ACCOUNT.provider, a: FIXTURE_ACCOUNT.providerAccountId },
    },
    {
      name: 'serverGetVerificationToken',
      query: 'query Q($i: String!, $t: String!) { serverGetVerificationToken(identifier: $i, token: $t) { identifier token } }',
      variables: { i: FIXTURE_VERIFICATION.identifier, t: FIXTURE_VERIFICATION.token },
    },
    {
      name: 'serverCreateSession',
      query: 'mutation M($u: ID!, $t: String!, $e: DateTimeISO!) { serverCreateSession(userId: $u, sessionToken: $t, expires: $e) { id sessionToken } }',
      variables: { u: 'u1', t: 'tok-x', e: new Date('2026-12-31').toISOString() },
    },
    {
      name: 'serverDeleteSessionByToken',
      query: 'mutation M($t: String!) { serverDeleteSessionByToken(token: $t) { id sessionToken } }',
      variables: { t: FIXTURE_SESSION.sessionToken },
    },
    {
      name: 'serverCreateVerificationToken',
      query: 'mutation M($i: String!, $t: String!, $e: DateTimeISO!) { serverCreateVerificationToken(identifier: $i, token: $t, expires: $e) { identifier token } }',
      variables: { i: 'u1', t: 'vt-x', e: new Date('2026-12-31').toISOString() },
    },
    {
      name: 'serverDeleteVerificationToken',
      query: 'mutation M($i: String!, $t: String!) { serverDeleteVerificationToken(identifier: $i, token: $t) { identifier token } }',
      variables: { i: FIXTURE_VERIFICATION.identifier, t: FIXTURE_VERIFICATION.token },
    },
  ];

  for (const op of operations) {
    it(`${op.name} returns UNAUTHENTICATED when user is missing`, async () => {
      const result = await server.executeOperation(
        { query: op.query, variables: op.variables },
        { contextValue: makeTestContext(null, makeStubbedPrisma()) }
      );
      expect(result.body.kind).toBe('single');
      if (result.body.kind !== 'single') return;
      const errors = result.body.singleResult.errors ?? [];
      expect(errors.length, `expected ${op.name} to fail unauthenticated`).toBeGreaterThan(0);
      expect(errors[0]?.extensions?.code).toBe('UNAUTHENTICATED');
    });
  }
});

describe('Server-only credential resolvers — authorization required (UNAUTHORIZED)', () => {
  // We make a "user"-role principal — auth-guard passes, then the
  // @Authorized(["server","admin"]) check trips inside type-graphql.
  const operations: Array<{ name: string; query: string; variables?: Record<string, unknown> }> = [
    {
      name: 'serverGetAlpacaAccountCredentials',
      query: 'query Q($id: ID!) { serverGetAlpacaAccountCredentials(accountId: $id) { id APIKey APISecret } }',
      variables: { id: FIXTURE_ALPACA.id },
    },
    {
      name: 'serverGetAllAlpacaAccountCredentials',
      query: 'query Q { serverGetAllAlpacaAccountCredentials { id APIKey APISecret } }',
    },
    {
      name: 'serverFindSessionByToken',
      query: 'query Q($t: String!) { serverFindSessionByToken(token: $t) { id sessionToken } }',
      variables: { t: FIXTURE_SESSION.sessionToken },
    },
    {
      name: 'serverGetAccountForLinking',
      query: 'query Q($p: String!, $a: String!) { serverGetAccountForLinking(provider: $p, providerAccountId: $a) { id access_token } }',
      variables: { p: FIXTURE_ACCOUNT.provider, a: FIXTURE_ACCOUNT.providerAccountId },
    },
    {
      name: 'serverGetVerificationToken',
      query: 'query Q($i: String!, $t: String!) { serverGetVerificationToken(identifier: $i, token: $t) { identifier token } }',
      variables: { i: FIXTURE_VERIFICATION.identifier, t: FIXTURE_VERIFICATION.token },
    },
    {
      name: 'serverCreateSession',
      query: 'mutation M($u: ID!, $t: String!, $e: DateTimeISO!) { serverCreateSession(userId: $u, sessionToken: $t, expires: $e) { id sessionToken } }',
      variables: { u: 'u1', t: 'tok-x', e: new Date('2026-12-31').toISOString() },
    },
    {
      name: 'serverDeleteSessionByToken',
      query: 'mutation M($t: String!) { serverDeleteSessionByToken(token: $t) { id sessionToken } }',
      variables: { t: FIXTURE_SESSION.sessionToken },
    },
    {
      name: 'serverCreateVerificationToken',
      query: 'mutation M($i: String!, $t: String!, $e: DateTimeISO!) { serverCreateVerificationToken(identifier: $i, token: $t, expires: $e) { identifier token } }',
      variables: { i: 'u1', t: 'vt-x', e: new Date('2026-12-31').toISOString() },
    },
    {
      name: 'serverDeleteVerificationToken',
      query: 'mutation M($i: String!, $t: String!) { serverDeleteVerificationToken(identifier: $i, token: $t) { identifier token } }',
      variables: { i: FIXTURE_VERIFICATION.identifier, t: FIXTURE_VERIFICATION.token },
    },
  ];

  for (const op of operations) {
    it(`${op.name} returns UNAUTHORIZED for a "user"-role principal`, async () => {
      const result = await serverWithStubbedPrisma.executeOperation(
        { query: op.query, variables: op.variables },
        { contextValue: makeTestContext('user', makeStubbedPrisma()) }
      );
      expect(result.body.kind).toBe('single');
      if (result.body.kind !== 'single') return;
      const errors = result.body.singleResult.errors ?? [];
      expect(errors.length, `expected ${op.name} to fail unauthorized`).toBeGreaterThan(0);
      expect(errors[0]?.extensions?.code).toBe('UNAUTHORIZED');
    });
  }
});

describe('Server-only credential resolvers — server principal succeeds and DTO carries secrets', () => {
  it('serverGetAlpacaAccountCredentials returns the APIKey/APISecret strings', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'query Q($id: ID!) { serverGetAlpacaAccountCredentials(accountId: $id) { id APIKey APISecret type configuration } }',
        variables: { id: FIXTURE_ALPACA.id },
      },
      { contextValue: makeTestContext('server', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | {
          serverGetAlpacaAccountCredentials: {
            id: string;
            APIKey: string;
            APISecret: string;
            type: string;
            configuration: unknown;
          } | null;
        }
      | null
      | undefined;
    expect(data?.serverGetAlpacaAccountCredentials?.APIKey).toBe(FIXTURE_ALPACA.APIKey);
    expect(data?.serverGetAlpacaAccountCredentials?.APISecret).toBe(FIXTURE_ALPACA.APISecret);
    expect(data?.serverGetAlpacaAccountCredentials?.type).toBe('PAPER');
  });

  it('serverGetAllAlpacaAccountCredentials returns the array form', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'query Q { serverGetAllAlpacaAccountCredentials { id APIKey APISecret } }',
      },
      { contextValue: makeTestContext('server', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | { serverGetAllAlpacaAccountCredentials: Array<{ APIKey: string; APISecret: string }> }
      | null
      | undefined;
    expect(data?.serverGetAllAlpacaAccountCredentials?.length).toBeGreaterThan(0);
    expect(data?.serverGetAllAlpacaAccountCredentials?.[0]?.APIKey).toBe(
      FIXTURE_ALPACA.APIKey
    );
  });

  it('serverFindSessionByToken returns the session including the sessionToken', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'query Q($t: String!) { serverFindSessionByToken(token: $t) { id sessionToken userId expires } }',
        variables: { t: FIXTURE_SESSION.sessionToken },
      },
      { contextValue: makeTestContext('server', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | { serverFindSessionByToken: { id: string; sessionToken: string; userId: string } | null }
      | null
      | undefined;
    expect(data?.serverFindSessionByToken?.sessionToken).toBe(FIXTURE_SESSION.sessionToken);
    expect(data?.serverFindSessionByToken?.userId).toBe(FIXTURE_SESSION.userId);
  });

  it('serverGetAccountForLinking returns the account with OAuth tokens', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'query Q($p: String!, $a: String!) { serverGetAccountForLinking(provider: $p, providerAccountId: $a) { id access_token refresh_token provider providerAccountId } }',
        variables: {
          p: FIXTURE_ACCOUNT.provider,
          a: FIXTURE_ACCOUNT.providerAccountId,
        },
      },
      { contextValue: makeTestContext('server', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | {
          serverGetAccountForLinking: {
            id: string;
            access_token: string | null;
            refresh_token: string | null;
            provider: string;
            providerAccountId: string;
          } | null;
        }
      | null
      | undefined;
    expect(data?.serverGetAccountForLinking?.access_token).toBe(FIXTURE_ACCOUNT.access_token);
    expect(data?.serverGetAccountForLinking?.refresh_token).toBe(FIXTURE_ACCOUNT.refresh_token);
    expect(data?.serverGetAccountForLinking?.provider).toBe(FIXTURE_ACCOUNT.provider);
  });

  it('serverGetVerificationToken returns the verification token DTO', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'query Q($i: String!, $t: String!) { serverGetVerificationToken(identifier: $i, token: $t) { identifier token expires } }',
        variables: {
          i: FIXTURE_VERIFICATION.identifier,
          t: FIXTURE_VERIFICATION.token,
        },
      },
      { contextValue: makeTestContext('server', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | {
          serverGetVerificationToken:
            | { identifier: string; token: string; expires: string }
            | null;
        }
      | null
      | undefined;
    expect(data?.serverGetVerificationToken?.token).toBe(FIXTURE_VERIFICATION.token);
    expect(data?.serverGetVerificationToken?.identifier).toBe(
      FIXTURE_VERIFICATION.identifier
    );
  });

  it('serverCreateSession echoes the sessionToken back via the DTO', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'mutation M($u: ID!, $t: String!, $e: DateTimeISO!) { serverCreateSession(userId: $u, sessionToken: $t, expires: $e) { id sessionToken userId } }',
        variables: {
          u: 'new-user-1',
          t: 'newly-minted-session-token',
          e: new Date('2026-12-31T00:00:00Z').toISOString(),
        },
      },
      { contextValue: makeTestContext('server', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | { serverCreateSession: { id: string; sessionToken: string; userId: string } }
      | null
      | undefined;
    expect(data?.serverCreateSession?.sessionToken).toBe('newly-minted-session-token');
    expect(data?.serverCreateSession?.userId).toBe('new-user-1');
  });

  it('serverDeleteSessionByToken returns the deleted session DTO', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'mutation M($t: String!) { serverDeleteSessionByToken(token: $t) { id sessionToken } }',
        variables: { t: FIXTURE_SESSION.sessionToken },
      },
      { contextValue: makeTestContext('server', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | { serverDeleteSessionByToken: { id: string; sessionToken: string } | null }
      | null
      | undefined;
    expect(data?.serverDeleteSessionByToken?.sessionToken).toBe(FIXTURE_SESSION.sessionToken);
  });

  it('serverCreateVerificationToken returns the new VT DTO', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'mutation M($i: String!, $t: String!, $e: DateTimeISO!) { serverCreateVerificationToken(identifier: $i, token: $t, expires: $e) { identifier token } }',
        variables: {
          i: 'fresh@example.com',
          t: 'fresh-verification-token',
          e: new Date('2026-12-31T00:00:00Z').toISOString(),
        },
      },
      { contextValue: makeTestContext('server', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | { serverCreateVerificationToken: { identifier: string; token: string } }
      | null
      | undefined;
    expect(data?.serverCreateVerificationToken?.token).toBe('fresh-verification-token');
  });

  it('serverDeleteVerificationToken returns the deleted DTO', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'mutation M($i: String!, $t: String!) { serverDeleteVerificationToken(identifier: $i, token: $t) { identifier token } }',
        variables: {
          i: FIXTURE_VERIFICATION.identifier,
          t: FIXTURE_VERIFICATION.token,
        },
      },
      { contextValue: makeTestContext('server', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | { serverDeleteVerificationToken: { identifier: string; token: string } | null }
      | null
      | undefined;
    expect(data?.serverDeleteVerificationToken?.token).toBe(FIXTURE_VERIFICATION.token);
  });

  it('admin principal also grants access (multi-role allowlist)', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'query Q($id: ID!) { serverGetAlpacaAccountCredentials(accountId: $id) { id APIKey } }',
        variables: { id: FIXTURE_ALPACA.id },
      },
      { contextValue: makeTestContext('admin', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | { serverGetAlpacaAccountCredentials: { APIKey: string } | null }
      | null
      | undefined;
    expect(data?.serverGetAlpacaAccountCredentials?.APIKey).toBe(FIXTURE_ALPACA.APIKey);
  });
});

describe('Server-only credential resolvers — null returns for missing records', () => {
  it('serverGetAlpacaAccountCredentials returns null when the id is unknown', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'query Q($id: ID!) { serverGetAlpacaAccountCredentials(accountId: $id) { id APIKey } }',
        variables: { id: 'does-not-exist' },
      },
      { contextValue: makeTestContext('server', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | { serverGetAlpacaAccountCredentials: unknown }
      | null
      | undefined;
    expect(data?.serverGetAlpacaAccountCredentials).toBeNull();
  });

  it('serverFindSessionByToken returns null when the token is unknown', async () => {
    const result = await serverWithStubbedPrisma.executeOperation(
      {
        query:
          'query Q($t: String!) { serverFindSessionByToken(token: $t) { id sessionToken } }',
        variables: { t: 'unknown-session-token' },
      },
      { contextValue: makeTestContext('server', makeStubbedPrisma()) }
    );
    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    expect(result.body.singleResult.errors ?? []).toEqual([]);
    const data = result.body.singleResult.data as
      | { serverFindSessionByToken: unknown }
      | null
      | undefined;
    expect(data?.serverFindSessionByToken).toBeNull();
  });
});
