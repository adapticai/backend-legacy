/**
 * Asserts the published GraphQL schema does NOT expose forbidden secret
 * fields on any READ-side type (output types, filter inputs, ordering
 * inputs, aggregate outputs). The schema MAY retain those fields on
 * WRITE-side mutation inputs (`*CreateInput`, `*UpdateInput`,
 * `*UpdateManyMutationInput`, nested-create variants) because the app
 * legitimately submits new credentials via `createOneAlpacaAccount(data:
 * { APIKey: "..." })`. The threat model is exfiltration, not injection;
 * we close every read path and leave the write path intact.
 *
 * The enhance-overrides module strips the forbidden fields from
 * `getMetadataStorage().fields` before `buildSchema(...)` walks them.
 *
 * If this test fails on a `type X { APIKey: ... }` line, an attacker
 * who introspects the schema can read or filter by the secret. That is
 * a P0 regression.
 *
 * --- Why this test loads from `dist/` ---
 *
 * Vite/esbuild does not emit a tsc-compatible `design:paramtypes` for
 * all of the type-graphql Prisma generated code (specifically, certain
 * `*Count` resolver methods have parameter types that resolve to
 * `Object` instead of the parent class, which type-graphql rejects).
 * `tsc` handles these cases correctly. Per the master plan, `npm run
 * test` runs after `npm run build`, so `dist/` is always present when
 * these tests execute. The test loads the compiled JS so the metadata
 * exactly matches the schema the server produces in production.
 */

import 'reflect-metadata';
import path from 'path';
import { describe, it, expect, beforeAll } from 'vitest';
import type { AuthChecker, NonEmptyArray } from 'type-graphql';

/**
 * `printSchema` and `buildSchema` are loaded via CJS `require()` (not
 * ESM `import`) so they share the same `graphql` and `type-graphql`
 * module instances as the dist-loaded resolvers/models. With ESM
 * imports, Vite resolves `graphql` to its ESM build while the
 * dist-loaded CJS modules load the CJS build; two different module
 * instances trip "Cannot use GraphQLObjectType from another module or
 * realm." Sharing instances via the require cache avoids the realm
 * mismatch.
 */
type GraphQLModule = typeof import('graphql');
type TypeGraphQLModule = typeof import('type-graphql');
const graphqlMod: GraphQLModule = require('graphql');
const typeGraphQLMod: TypeGraphQLModule = require('type-graphql');
const { printSchema } = graphqlMod;
const { buildSchema } = typeGraphQLMod;

/**
 * Forbidden field-name strings. The schema must not contain any of
 * these on a read-side parent type. Each entry is asserted as a bare
 * field name. Write-side mutation inputs that legitimately carry the
 * field are allowlisted by `isWriteSideInputName(...)`.
 */
const FORBIDDEN_FIELDS: ReadonlyArray<string> = Object.freeze([
  'APIKey',
  'APISecret',
  'access_token',
  'refresh_token',
  'id_token',
  'sessionToken',
  'credentialID',
  'credentialPublicKey',
  'accessToken',
  'refreshToken',
]);

interface DistModules {
  getAllowedResolvers: () => Promise<NonEmptyArray<new (...args: never[]) => object>>;
  authChecker: AuthChecker<object, string>;
  applyEnhanceOverrides: () => Promise<void>;
}

let mods!: DistModules;

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
  mods = {
    getAllowedResolvers: allowlist.getAllowedResolvers,
    authChecker: ac.authChecker,
    applyEnhanceOverrides: enhance.applyEnhanceOverrides,
  };
  await mods.applyEnhanceOverrides();
}, 30_000);

/**
 * `true` when the parent type's name indicates it is a write-side
 * mutation input. These input types legitimately accept the secret
 * fields because that's how the app and engine submit credentials,
 * tokens, etc. (the secret enters the system here, not exits).
 *
 * Patterns (closed set — adding a new pattern must be justified):
 *
 *  - `*Create*Input` — `create` mutation variants
 *    (Create, CreateMany, CreateNested*, CreateOrConnect*,
 *    CreateWithout*).
 *  - `*Update*Input` — `update` mutation variants
 *    (Update, UpdateMany, UpdateOne, UpdateOneRequired*, UpdateWithout*,
 *    UpdateWithWhereUnique*, UpdateToOne*, UpdateManyMutation*).
 *  - `*Upsert*Input` — `upsert` mutation variants.
 *  - `*FieldUpdateOperationsInput` — atomic update operations like
 *    `{ set: "..." }`. These are reachable only as nested values in
 *    Update inputs, never as a standalone read path.
 *
 * New suffixes added by a future generator version will surface as
 * test failures, forcing an explicit reviewer decision.
 */
function isWriteSideInputName(name: string): boolean {
  return (
    /Create.*Input$/.test(name) ||
    /Update.*Input$/.test(name) ||
    /Upsert.*Input$/.test(name) ||
    /FieldUpdateOperationsInput$/.test(name)
  );
}

/**
 * Build a fresh schema. We do not cache between tests because each
 * test independently asserts a property of the SDL; building is fast
 * (<500ms with cached metadata).
 */
async function buildPublishedSchema(): Promise<string> {
  const resolvers = await mods.getAllowedResolvers();
  const schema = await buildSchema({
    resolvers,
    validate: false,
    authChecker: mods.authChecker,
    authMode: 'error',
  });
  return printSchema(schema);
}

describe('GraphQL schema: forbidden secret fields excised', () => {
  it('does not expose forbidden fields on any READ-side type', async () => {
    const sdl = await buildPublishedSchema();

    // Walk the SDL block-by-block. A block is a `type|input|enum X { ... }`.
    // For each forbidden field, count violations on non-write-side blocks.
    const blockRegex = /(type|input|enum)\s+(\w+)\s*\{([^}]*)\}/g;
    const violations: Array<{ kind: string; name: string; field: string }> = [];
    let match: RegExpExecArray | null;
    while ((match = blockRegex.exec(sdl)) !== null) {
      const [, kind, name, body] = match;
      for (const forbidden of FORBIDDEN_FIELDS) {
        // Use a regex that matches the bare field name followed by ':',
        // not a substring within other names like `openaiAPIKey`.
        const fieldDecl = new RegExp(`(?:^|\\n)\\s+${forbidden}\\s*:`, 'm');
        if (!fieldDecl.test(body)) continue;
        if (isWriteSideInputName(name)) continue;
        violations.push({ kind, name, field: forbidden });
      }
    }

    expect(
      violations,
      `Forbidden fields present on read-side schema blocks (security regression):\n` +
        violations.map((v) => `  - ${v.kind} ${v.name}.${v.field}`).join('\n')
    ).toEqual([]);
  });

  it('preserves the parent types and their non-secret fields (regression guard)', async () => {
    const sdl = await buildPublishedSchema();

    // Sanity: the parent types still exist and still expose their non-secret
    // fields. If this fails, the enhance overrides removed too much.
    expect(sdl).toContain('type AlpacaAccount');
    expect(sdl).toMatch(/type AlpacaAccount[\s\S]+id: String!/);
    expect(sdl).toContain('type Session');
    expect(sdl).toMatch(/type Session[\s\S]+expires: DateTimeISO!/);
    expect(sdl).toContain('type Account');
    expect(sdl).toMatch(/type Account[\s\S]+providerAccountId: String!/);
  });

  it('keeps the write-side mutation inputs intact so the app can still submit credentials', async () => {
    const sdl = await buildPublishedSchema();

    // The `createOneAlpacaAccount` flow needs an input type accepting
    // APIKey/APISecret as required strings. We don't assert the entire
    // shape — only that the write-side input exists and contains both
    // field names, proving the policy didn't accidentally strip write
    // paths.
    const createInputMatch = sdl.match(
      /input AlpacaAccountCreateInput[\s\S]*?\}/
    );
    expect(createInputMatch, 'AlpacaAccountCreateInput block must exist').not.toBeNull();
    if (createInputMatch) {
      expect(createInputMatch[0]).toMatch(/\bAPIKey\b/);
      expect(createInputMatch[0]).toMatch(/\bAPISecret\b/);
    }
  });

  it('contains no naked APIKey / APISecret tokens on the AlpacaAccount type body', async () => {
    const sdl = await buildPublishedSchema();

    const alpacaTypeMatch = sdl.match(/type AlpacaAccount\b[\s\S]*?\n\}/);
    expect(alpacaTypeMatch, 'AlpacaAccount type block should be present').not.toBeNull();
    if (alpacaTypeMatch) {
      expect(alpacaTypeMatch[0]).not.toMatch(/\bAPIKey\b/);
      expect(alpacaTypeMatch[0]).not.toMatch(/\bAPISecret\b/);
    }
  });
});
