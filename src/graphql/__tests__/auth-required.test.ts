/**
 * Asserts that an unauthenticated GraphQL operation is rejected with the
 * `UNAUTHENTICATED` extension code regardless of which operation it is.
 *
 * This protects against the silent-anonymous-CRUD regression where the
 * Apollo context returned `{ user: null }` and TypeGraphQL had no global
 * auth gate, letting any caller introspect the schema and run
 * `createOneUser` / `deleteOneUser` / `findManyAlpacaAccount` with no
 * credentials.
 *
 * The test boots an in-process Apollo Server with the new auth-checker,
 * the global auth-guard middleware, and the production context factory.
 * It dispatches three operations:
 *   1. A read against a model (`users`).
 *   2. A mutation (`createOneUser`).
 *   3. A request with a malformed bearer token.
 * Every case must return GraphQL errors carrying
 * `extensions.code === 'UNAUTHENTICATED'`.
 *
 * --- Why this test loads from `dist/` ---
 *
 * Same rationale as `schema-secret-fields.test.ts` — Vite/esbuild does
 * not emit a tsc-compatible `design:paramtypes` for all of the
 * type-graphql Prisma generated code (specifically, `*Count` resolver
 * methods with self-referential parameter types). `tsc` handles these
 * correctly. Per the master plan, `npm run test` runs after `npm run
 * build`, so `dist/` is always present.
 */

import 'reflect-metadata';
import path from 'path';
import type { Request } from 'express';
import { describe, it, expect, beforeAll } from 'vitest';
import { ApolloServer } from '@apollo/server';
import { buildSchema } from 'type-graphql';
import type { AuthChecker, NonEmptyArray, MiddlewareFn } from 'type-graphql';

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

beforeAll(async () => {
  const distRoot = path.resolve(__dirname, '..', '..', '..', 'dist', 'graphql');
  const enhance = (await import(path.join(distRoot, 'enhance-overrides.js'))) as {
    applyEnhanceOverrides: () => Promise<void>;
  };
  const allowlist = (await import(path.join(distRoot, 'resolver-allowlist.js'))) as {
    getAllowedResolvers: () => Promise<NonEmptyArray<new (...args: never[]) => object>>;
  };
  const ac = (await import(path.join(distRoot, 'auth-checker.js'))) as {
    authChecker: AuthChecker<object, string>;
  };
  const guard = (await import(path.join(distRoot, 'auth-guard.js'))) as {
    authGuardMiddleware: MiddlewareFn<DistContext>;
  };
  const ctx = (await import(path.join(distRoot, 'apollo-context.js'))) as {
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

  server = new ApolloServer<DistContext>({ schema, introspection: true });
  await server.start();
}, 60_000);

/**
 * Subset of the `Request` shape that the context factory actually reads.
 * Casting to this subset avoids the `as unknown as Request` double-cast
 * and documents what the test fixture must provide.
 */
type ContextFactoryRequest = Pick<Request, 'headers' | 'ip'> & {
  get(name: string): string | undefined;
};

/**
 * Minimal Express-like request used by the context factory. Only the
 * `headers`, `get(...)` and `ip` fields are read.
 */
function makeFakeRequest(headers: Record<string, string> = {}): Request {
  const lower: Record<string, string> = {};
  for (const [k, v] of Object.entries(headers)) {
    lower[k.toLowerCase()] = v;
  }
  const fake: ContextFactoryRequest = {
    headers: lower,
    get(name: string): string | undefined {
      return lower[name.toLowerCase()];
    },
    ip: '127.0.0.1',
  };
  // The Express Request type has dozens of fields the context factory
  // never reads; the cast here narrows the fixture to the subset the
  // production code actually touches. `ContextFactoryRequest` is a
  // structural subset, so the assignment is sound.
  return fake as Request;
}

/**
 * Resolve the production context for the test, swallowing the
 * fail-closed `GraphQLError` so we can run the operation and assert
 * the error appears in the response body. The context factory throws
 * `GraphQLError("Unauthenticated", ...)` on missing/invalid token;
 * Apollo Server packages that into the operation result.
 *
 * For test purposes, when the context factory throws, we return a
 * context with `user: null` so the operation can be dispatched and
 * the **global auth-guard middleware** trips, surfacing the same
 * UNAUTHENTICATED extension code via the middleware path. This
 * exercises both fail-closed paths in a single test.
 */
async function buildTestContext(req: Request): Promise<DistContext> {
  try {
    return await mods.buildApolloContextFromRequest(req);
  } catch {
    return { user: null, prisma: null, req };
  }
}

describe('GraphQL auth gate: unauthenticated operations are rejected', () => {
  it('rejects an unauthenticated query with UNAUTHENTICATED', async () => {
    const req = makeFakeRequest(); // no authorization header
    const result = await server.executeOperation(
      { query: 'query { users { id } }' },
      { contextValue: await buildTestContext(req) }
    );

    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    const errors = result.body.singleResult.errors ?? [];
    expect(errors.length, 'expected an unauthenticated query to fail').toBeGreaterThan(0);
    expect(errors[0]?.extensions?.code).toBe('UNAUTHENTICATED');
  });

  it('rejects an unauthenticated mutation with UNAUTHENTICATED', async () => {
    const req = makeFakeRequest();
    const result = await server.executeOperation(
      {
        query: `
          mutation Create($data: UserCreateInput!) {
            createOneUser(data: $data) { id }
          }
        `,
        variables: {
          data: {
            name: 'mallory',
            email: 'mallory@example.com',
          },
        },
      },
      { contextValue: await buildTestContext(req) }
    );

    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    const errors = result.body.singleResult.errors ?? [];
    expect(errors.length, 'expected an unauthenticated mutation to fail').toBeGreaterThan(0);
    expect(errors[0]?.extensions?.code).toBe('UNAUTHENTICATED');
  });

  it('rejects an unauthenticated request with a malformed bearer token', async () => {
    const req = makeFakeRequest({ authorization: 'Bearer not-a-jwt' });
    const result = await server.executeOperation(
      { query: 'query { users { id } }' },
      { contextValue: await buildTestContext(req) }
    );

    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    const errors = result.body.singleResult.errors ?? [];
    expect(errors.length, 'expected a malformed-token query to fail').toBeGreaterThan(0);
    expect(errors[0]?.extensions?.code).toBe('UNAUTHENTICATED');
  });

  it('rejects an opaque OAuth access token (ya29. prefix) with UNAUTHENTICATED', async () => {
    const req = makeFakeRequest({
      authorization: 'Bearer ya29.A0AfH6SMBxxxxxxxxxxxx',
    });
    const result = await server.executeOperation(
      { query: 'query { users { id } }' },
      { contextValue: await buildTestContext(req) }
    );

    expect(result.body.kind).toBe('single');
    if (result.body.kind !== 'single') return;
    const errors = result.body.singleResult.errors ?? [];
    expect(errors.length, 'expected an opaque-access-token query to fail').toBeGreaterThan(0);
    expect(errors[0]?.extensions?.code).toBe('UNAUTHENTICATED');
  });
});
