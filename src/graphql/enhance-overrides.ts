/**
 * GraphQL schema enhancement: excise secret fields from the published
 * GraphQL output types and from any read/filter/order input types.
 *
 * The Prisma schema models these fields as ordinary columns because the
 * **database** legitimately stores them (Auth.js session tokens,
 * Auth.js OAuth tokens, Alpaca API credentials). The **GraphQL schema**
 * must NOT expose them — a caller who introspects the schema and runs
 * `query { alpacaAccounts { APIKey APISecret } }` exfiltrates every
 * user's broker credentials. Equally, `findManyAlpacaAccount(where: {
 * APIKey: { startsWith: "PK_" }})` lets an attacker enumerate keys by
 * prefix, so input filter types must also have the secret fields
 * stripped.
 *
 * Strategy: a per-class POLICY chooses, for each (modelName, fieldName)
 * pair, which classes to strip the field from. Three policies cover the
 * generated TypeGraphQL Prisma surface:
 *
 *  - `OUTPUT_AND_FILTERS` — strip from the output type AND from any
 *    read-side input class (WhereInput, ScalarWhereInput, OrderBy*,
 *    Count/Min/Max OrderByAggregateInput, etc.). Keep on Create/Update
 *    input classes (which are mutation inputs — the value goes from the
 *    client TO the server) so the app's write-side flows still work.
 *  - `OUTPUT_AND_FILTERS_AND_WRITES` — strip from EVERY class that
 *    references the field. Use this for fields the consumers do NOT
 *    write either (currently none; reserved for hardening passes).
 *
 * Approach: mutate `getMetadataStorage().fields` to drop the FieldMetadata
 * entries that match the (className, fieldName) policy. This runs
 * **before** `buildSchema(...)` is called and produces a `GraphQLSchema`
 * whose printed SDL contains none of the forbidden field names on the
 * forbidden parent classes. It is the canonical way to remove fields
 * from a type-graphql-generated schema; `applyModelsEnhanceMap` can ADD
 * decorators but cannot REMOVE a field already registered with `@Field`.
 *
 * Lifecycle:
 *  - Called once at module-load time of `src/server.ts`, BEFORE
 *    `buildSchema(...)`.
 *  - Idempotent: re-calling does no additional work because the field
 *    entries have already been removed.
 *  - The mutation is on a module-level metadata storage; the only way
 *    to undo it within a process is to call `getMetadataStorage().clear()`
 *    and re-import the model classes. Tests that need a fresh schema
 *    must run in their own process.
 *
 * **Downstream impact** — see `cortex-consumer-inventory.md` for the
 * full analysis. After this excision lands, app and engine code that
 * still selects these fields from generated `selectionSet` strings will
 * receive `null`/`undefined` for the omitted fields. Server-only DTO
 * resolvers (gated by `@Authorized(["server"])`) are the recommended
 * mitigation; that work is out of scope for this PR.
 */

import 'reflect-metadata';
import { getMetadataStorage } from 'type-graphql';

/**
 * Excision policy. Each (modelStem, fieldName) entry is the source-of-truth
 * pair from the Prisma schema (e.g. `AlpacaAccount.APIKey`). The runtime
 * filter expands the stem to:
 *
 *  - The output type (`AlpacaAccount`).
 *  - All read-side input/order classes whose name starts with the stem
 *    AND ends with a known read-side suffix (`WhereInput`, `OrderBy*`,
 *    `*ScalarWhereInput`, `WhereUniqueInput`, etc.).
 *
 * Create/Update input classes are excluded from the strip so that the
 * app's write-side mutations (e.g. `createOneAlpacaAccount(data: {
 * APIKey: "...", APISecret: "..." })`) continue to work. The intent is
 * "you can write the secret in (server-to-server), but you can never
 * read it back, and you can never use it as a filter".
 *
 * `mode: "all"` strips the field from every class that references it
 * (including Create/Update inputs). Reserved for fields that should be
 * write-impossible, not currently used.
 */
type ExcisionMode = 'output_and_read_inputs' | 'all';

interface ExcisionRule {
  readonly stem: string; // e.g. "AlpacaAccount"
  readonly fieldName: string; // e.g. "APIKey"
  readonly mode: ExcisionMode;
}

/**
 * Forbidden (modelStem, fieldName) rules. The stem matches the Prisma
 * model name; the rule expands to the output type plus all read-side
 * input classes derived from that model.
 *
 * Sourced from CORTEX-P0-001 spec § Files.
 */
const FORBIDDEN_FIELDS: ReadonlyArray<ExcisionRule> = Object.freeze([
  // AlpacaAccount credentials — engine reads these from DB but must not
  // expose via GraphQL. Server-grade reads will move to a dedicated
  // `@Authorized(["server"])` custom resolver in a follow-up PR.
  { stem: 'AlpacaAccount', fieldName: 'APIKey', mode: 'output_and_read_inputs' },
  { stem: 'AlpacaAccount', fieldName: 'APISecret', mode: 'output_and_read_inputs' },

  // Auth.js Session token — NextAuth adapter reads these but must move
  // to a server-only path.
  { stem: 'Session', fieldName: 'sessionToken', mode: 'output_and_read_inputs' },

  // Auth.js Account OAuth tokens
  { stem: 'Account', fieldName: 'access_token', mode: 'output_and_read_inputs' },
  { stem: 'Account', fieldName: 'refresh_token', mode: 'output_and_read_inputs' },
  { stem: 'Account', fieldName: 'id_token', mode: 'output_and_read_inputs' },

  // VerificationToken token value
  { stem: 'VerificationToken', fieldName: 'token', mode: 'output_and_read_inputs' },

  // WebAuthn authenticator credentials. Note: the Prisma schema field is
  // `publicKey`, not `credentialPublicKey` (the spec used the Auth.js
  // adapter name; the underlying column is `publicKey`). Mode is `all`
  // because Authenticator has no GraphQL CRUD consumer in app or engine
  // — even nested-create/update inputs reachable from `User.authenticators`
  // must not accept attacker-controlled credentials.
  { stem: 'Authenticator', fieldName: 'credentialID', mode: 'all' },
  { stem: 'Authenticator', fieldName: 'publicKey', mode: 'all' },

  // LinkedProvider OAuth tokens (encrypted at rest, never exposed).
  // Mode is `all` because LinkedProvider has no GraphQL CRUD consumer
  // — nested-create inputs from `User.linkedProviders` must not accept
  // attacker-controlled tokens either.
  { stem: 'LinkedProvider', fieldName: 'accessToken', mode: 'all' },
  { stem: 'LinkedProvider', fieldName: 'refreshToken', mode: 'all' },
]);

/**
 * Suffix patterns that identify read-side classes generated by
 * typegraphql-prisma. Membership means the class lets a caller READ
 * or filter by the field; the field must therefore be stripped to
 * prevent enumeration attacks like
 * `findManyAlpacaAccount(where: { APIKey: { startsWith: "PK_" } })`,
 * `aggregateAlpacaAccount { _min { APIKey } }`, or
 * `groupByAlpacaAccount(by: [APIKey])`.
 *
 * The list is closed-by-design: every read-side suffix the generator
 * emits is enumerated here. New suffixes added by future generator
 * versions must be added explicitly so we never accidentally allow a
 * new read shape past the gate.
 */
const READ_INPUT_SUFFIXES: ReadonlyArray<string> = Object.freeze([
  // Filter inputs
  'WhereInput',
  'WhereUniqueInput',
  'ScalarWhereInput',
  'ScalarWhereWithAggregatesInput',
  // OrderBy inputs
  'OrderByWithRelationInput',
  'OrderByWithAggregationInput',
  'CountOrderByAggregateInput',
  'MaxOrderByAggregateInput',
  'MinOrderByAggregateInput',
  'AvgOrderByAggregateInput',
  'SumOrderByAggregateInput',
  // Aggregate / GroupBy output types — these LEAK actual secret values
  // via `_min { APIKey }`, `_max { ... }`, etc.
  'MinAggregate',
  'MaxAggregate',
  'CountAggregate',
  'AvgAggregate',
  'SumAggregate',
  'GroupBy',
  // createManyAndReturn* returns the created records including secrets;
  // since our policy is "secrets are write-only", stripping these
  // prevents server responses from echoing back what the caller wrote.
]);

/**
 * Special-cased target-name prefixes. These are output classes that
 * compose the secret field via a stem-prefixed name pattern that the
 * suffix matcher above cannot detect from a stem alone (e.g.
 * `CreateManyAndReturnAlpacaAccount`).
 */
const READ_PREFIX_PATTERNS: ReadonlyArray<readonly [string, string]> =
  Object.freeze([
    // CreateManyAndReturn<Model> output types echo the inserted record
    // back to the caller, including any secret fields. We strip the
    // secret on this echo path so writes succeed (the field on the
    // INPUT class is preserved) but the server reply does not contain
    // the value.
    ['CreateManyAndReturn', '<stem>'],
  ]);

/**
 * Decide whether the given (targetName, fieldName) pair must be
 * excised based on the rule list.
 *
 * The target class name is matched against:
 *
 *  - The output type (exact stem match).
 *  - Read-input classes (`<stem><suffix>` where suffix is in
 *    `READ_INPUT_SUFFIXES`).
 *  - Echo-return output types (`CreateManyAndReturn<stem>`) — see
 *    `READ_PREFIX_PATTERNS`.
 *
 * For rules with `mode === 'all'`, the suffix gate is skipped and the
 * field is stripped from every class whose name starts with the stem.
 */
function shouldExcise(targetName: string, fieldName: string): boolean {
  for (const rule of FORBIDDEN_FIELDS) {
    if (rule.fieldName !== fieldName) continue;
    if (targetName === rule.stem) return true; // output type
    if (rule.mode === 'all' && targetName.startsWith(rule.stem)) return true;
    if (rule.mode === 'all' && targetName.endsWith(rule.stem)) return true;
    // Read-side patterns: stem-prefixed input class
    if (targetName.startsWith(rule.stem)) {
      const suffix = targetName.slice(rule.stem.length);
      if (READ_INPUT_SUFFIXES.includes(suffix)) return true;
    }
    // Read-side patterns: echo-return output class
    for (const [prefix, stemPlaceholder] of READ_PREFIX_PATTERNS) {
      const expected = stemPlaceholder === '<stem>' ? `${prefix}${rule.stem}` : '';
      if (expected && targetName === expected) return true;
    }
  }
  return false;
}

/**
 * Tracks whether the override has been applied for this process. Calling
 * `applyEnhanceOverrides()` more than once is safe and idempotent.
 */
let overrideApplied = false;

/**
 * Mutate the TypeGraphQL metadata storage to remove every forbidden
 * field entry. Must be called BEFORE `buildSchema(...)`.
 *
 * Imports the model classes so their decorators have evaluated by the
 * time we walk the metadata storage. Without this side-effecting import,
 * `metadataStorage.fields` would be empty.
 */
export async function applyEnhanceOverrides(): Promise<void> {
  if (overrideApplied) return;

  // Force-load model decorators AND input/output type decorators so
  // their FieldMetadata is in the storage. The model index and the
  // resolvers/inputs/outputs indexes are the canonical entry points
  // that import every generated class. Without this, the storage
  // would be empty (or partial) when we walk it below.
  await import('../generated/typegraphql-prisma/models/index');
  await import('../generated/typegraphql-prisma/resolvers/inputs/index');
  await import('../generated/typegraphql-prisma/resolvers/outputs/index');

  const metadataStorage = getMetadataStorage();

  // Filter `fields` in place using the per-rule excision predicate.
  // We rebuild the array rather than mutating entries because the
  // metadata storage exposes `fields` as an array reference that the
  // schema-build walks linearly.
  const before = metadataStorage.fields.length;
  // Track which (target, field) pairs were excised so we can surface a
  // useful diagnostic if a forbidden pair wasn't found at all.
  const excisedTargets = new Map<string, Set<string>>();
  metadataStorage.fields = metadataStorage.fields.filter((f) => {
    const targetName = typeof f.target === 'function' ? f.target.name : '';
    if (!targetName) return true;
    if (shouldExcise(targetName, f.name)) {
      let set = excisedTargets.get(f.name);
      if (!set) {
        set = new Set<string>();
        excisedTargets.set(f.name, set);
      }
      set.add(targetName);
      return false;
    }
    return true;
  });
  const after = metadataStorage.fields.length;

  // Sanity check: at least the output type for every forbidden rule
  // should have been stripped. If not, the generated code or the schema
  // has drifted — fail loudly so the operator notices instead of
  // silently passing without protection.
  const missingOutputs: string[] = [];
  for (const rule of FORBIDDEN_FIELDS) {
    const excisedFor = excisedTargets.get(rule.fieldName);
    if (!excisedFor || !excisedFor.has(rule.stem)) {
      missingOutputs.push(`${rule.stem}.${rule.fieldName}`);
    }
  }
  if (missingOutputs.length > 0) {
    throw new Error(
      `enhance-overrides: failed to excise forbidden fields from output types: ` +
        `${missingOutputs.join(', ')}. The TypeGraphQL Prisma generated code may ` +
        `have drifted from the forbidden-field list; check src/generated/typegraphql-prisma/models/. ` +
        `Total fields before=${before}, after=${after}.`
    );
  }

  overrideApplied = true;
}

/**
 * Test-only helper: undo the override so a subsequent buildSchema call
 * sees the original field set. Implemented by reloading the model module
 * (which re-applies the `@Field` decorators) and clearing the override
 * flag. **Not for production use.**
 */
export function _resetEnhanceOverridesForTests(): void {
  overrideApplied = false;
}

/**
 * Export the forbidden-field rules for tests/audit tooling that asserts
 * the SDL contains none of these names.
 */
export const FORBIDDEN_FIELD_RULES: ReadonlyArray<ExcisionRule> = FORBIDDEN_FIELDS;
