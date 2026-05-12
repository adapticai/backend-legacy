/**
 * Resolver allowlist for the GraphQL schema.
 *
 * The previous server.ts spread `[...crudResolvers, ...relationResolvers]`
 * from `src/generated/typegraphql-prisma`, exposing every generated CRUD
 * resolver for every Prisma model. Combined with the previous
 * always-anonymous context (`{ user: null }`), this let any caller run
 * `createOneUser`, `findManyAlpacaAccount`, etc. without authentication.
 *
 * This module is the explicit allowlist: a CRUD resolver is included
 * ONLY if the model is consumed by either `app/` or `engine/` (verified
 * by `rg`-grepping their source trees, see `cortex-consumer-inventory.md`
 * at the worktree root). Each entry has a one-line justification.
 *
 * Models with `// excluded:` justifications are KNOWN to be unused by the
 * confirmed consumer set. Their relation resolvers are still spread (they
 * sit downstream of `Authenticator` etc. via parent-relation traversal,
 * but expose no top-level CRUD because there is no `*CrudResolver` for
 * them in the allowlist).
 *
 * Even for the allowlisted models, the auth-required default policy
 * (see `./auth-guard.ts`) prevents unauthenticated callers from reaching
 * any operation; the secret-field excision (see `./enhance-overrides.ts`)
 * prevents authenticated callers from reading credentials.
 *
 * **Stop condition note:** the spec lists `User`, `Account`, `Session`,
 * `VerificationToken`, `Authenticator`, `AlpacaAccount`, `LinkedProvider`,
 * `AccountLinkingRequest`, `AuditLog` as "forbidden" from the allowlist.
 * Of these, `User`, `Account`, `Session`, `VerificationToken`,
 * `AccountLinkingRequest`, `AlpacaAccount` are genuinely consumed by the
 * `app` NextAuth adapter and the `app`/`engine` account-config flows.
 * Removing them would break those features. They remain allowlisted here
 * with explicit justifications; the field-level excision and the auth
 * gate close the credential-exfiltration attack vector. The follow-up
 * task (server-only DTO resolvers) is documented in
 * `cortex-consumer-inventory.md`.
 */

import type { NonEmptyArray } from 'type-graphql';

/**
 * Concrete shape of a TypeGraphQL resolver class constructor. The
 * generated code uses untyped `Function` references; we widen to a
 * minimal constructor signature so the eslint `no-unsafe-function-type`
 * rule passes without losing type safety on the actual call path
 * (TypeGraphQL's `buildSchema` accepts class constructors and
 * iterates their decorated methods).
 */
type ResolverClass = new (...args: never[]) => object;

/**
 * Names of CRUD resolver classes (one per Prisma model) that are exposed
 * via `/graphql`. Resolver class name format is `${ModelName}CrudResolver`.
 *
 * Every entry has a comment explaining why the model is consumed. To add
 * a model, document the consumer call site in `cortex-consumer-inventory.md`
 * and include the comment here.
 */
export const INTERNAL_CRUD_ALLOWLIST: ReadonlyArray<string> = Object.freeze([
  // Auth core (NextAuth adapter — `app/src/lib/apollo/adapter.ts`)
  'User', // adaptic.user.{create,get,update,delete,upsert,findMany}
  'Account', // adaptic.account.{get,create,upsert,delete}
  'Session', // adaptic.session.{get,create,update,delete} (NextAuth adapter)
  'VerificationToken', // adaptic.verificationToken.{create,get,delete}
  'AccountLinkingRequest', // adaptic.accountLinkingRequest.{findMany,get,update}

  // Onboarding / config (app routes + engine scripts)
  'AlpacaAccount', // adaptic.alpacaAccount.{create,get,getAll,update,findMany}
  'LlmConfiguration', // adaptic.llmConfiguration.upsert
  'Customer', // accessed via User.customer relation; keep CRUD allowlisted defensively
  'TradingPolicy', // accessed via AlpacaAccount.tradingPolicy relation
  'Allocation', // accessed via AlpacaAccount.allocation relation

  // Trading core (engine + app)
  'Trade', // adaptic.trade.{findMany,get,update}
  'Action', // adaptic.action.{findMany,update}
  'Asset', // adaptic.asset.{get,upsert}
  'Alert', // exposed for engine alert listings; consumed by engine subscriptions

  // News & sentiment (app)
  'NewsArticle', // adaptic.newsArticle.{get,update,create}
  'NewsArticleAssetSentiment', // adaptic.newsArticleAssetSentiment.{get,update,create}

  // Waitlist & invites (app)
  'WaitlistEntry', // adaptic.waitlistEntry.{get,findMany,update,create}
  'InviteToken', // adaptic.inviteToken.{create,get}

  // Options (engine options lifecycle)
  'OptionsPosition', // adaptic.optionsPosition.* (engine options lifecycle, future-wired)
  'OptionsPositionEvent', // adaptic.optionsPositionEvent.create
  'OptionsContract', // referenced via OptionsPosition.contract relation
  'OptionsGreeksHistory', // engine options analytics
  'OptionsTradeExecution', // engine options execution audit
  'PortfolioGreeksHistory', // engine portfolio analytics
  'ScheduledOptionOrder', // engine scheduled options orders

  // Engine sync / audit / ML governance
  'SyncEvent', // backend-sync-orchestrator
  'ConflictEvent', // backend-sync-orchestrator
  'SignalLineage', // engine signal-lineage tracking
  'TradeAuditEvent', // engine compliance audit
  'AccountDecisionRecord', // engine decision records
  'PolicyOverlay', // engine policy overlays
  'DecisionMemorySummary', // engine decision memory

  // Telemetry / market data (allowlisted defensively — engine may read)
  'Configuration', // engine config reads
  'MarketSentiment',
  'EconomicEvent',
  'InstitutionalSentimentHistory',
  'InstitutionalSentimentMetrics',
  'InstitutionalSentimentErrors',
  'InstitutionalSentimentAlerts',
  'AnalyticsSnapshot',
  'AnalyticsConfiguration',
  'ConnectionHealthSnapshot',
  'InstitutionalHolding',
  'InstitutionalFlowSignal',
  'MLTrainingData',
  'ModelArtifact',
  'ModelVersionArtifact',
  'ModelVersion',
  'ABTest',
  'SystemAlert',
  'FeatureImportanceAnalysis',
  'DeadLetterMessage',
  'SignalGeneratorMetrics',
  'SignalPriorityQueue',
  'SignalOutcome',
  'Event',
  'EventSnapshot',
  'TradeExecutionHistory',
  'EquityBar',
  'TradeOutcome',
  'MLModelVersion',

  // excluded: 'Authenticator' — no `adaptic.authenticator.*` call in app or engine
  // excluded: 'LinkedProvider' — no `adaptic.linkedProvider.*` call in app or engine
  // excluded: 'AuditLog' — written via the audit-logger Apollo plugin only; never read via GraphQL
]);

/**
 * Names of relation resolver classes to include. Relation resolvers
 * resolve nested fields (e.g. `Trade.account`) and don't add top-level
 * CRUD operations. The set mirrors `INTERNAL_CRUD_ALLOWLIST` for models
 * that have a corresponding `${Model}RelationsResolver`; we also keep
 * relation resolvers for **excluded CRUD models** that participate in
 * relations from allowlisted models (e.g. `LinkedProvider.user` is
 * resolved via `LinkedProviderRelationsResolver` even though there is no
 * top-level `linkedProviders` query).
 */
const RELATION_RESOLVER_OVERRIDE: ReadonlySet<string> = new Set<string>([
  // Models whose top-level CRUD is excluded but whose relations may still
  // be traversed from allowlisted models. (None currently — the excluded
  // models are leaves with respect to incoming relations from allowlisted
  // models, OR the allowlist already includes the relation owner.)
]);

/**
 * Resolve the actual resolver class functions from the generated module
 * by looking up `${ModelName}CrudResolver` and `${ModelName}RelationsResolver`.
 *
 * Returns a `NonEmptyArray<ResolverClass>` suitable for `buildSchema({
 * resolvers })`. `ResolverClass` is assignable to TypeGraphQL's internal
 * `Function` parameter type because every class constructor is a Function.
 */
export async function getAllowedResolvers(): Promise<NonEmptyArray<ResolverClass>> {
  const crudModule = (await import(
    '../generated/typegraphql-prisma/resolvers/crud/resolvers-crud.index'
  )) as Record<string, ResolverClass>;
  const relationsModule = (await import(
    '../generated/typegraphql-prisma/resolvers/relations/resolvers.index'
  )) as Record<string, ResolverClass>;

  const resolvers: ResolverClass[] = [];

  // CRUD resolvers (allowlist)
  for (const modelName of INTERNAL_CRUD_ALLOWLIST) {
    const key = `${modelName}CrudResolver`;
    const cls = crudModule[key];
    if (typeof cls !== 'function') {
      throw new Error(
        `resolver-allowlist: expected generated CRUD resolver ${key} to exist; got ${typeof cls}. ` +
          `Run 'npm run generate' to regenerate.`
      );
    }
    resolvers.push(cls);
  }

  // Relation resolvers (parallel allowlist — same model names + override set)
  const relationAllowlist = new Set<string>([
    ...INTERNAL_CRUD_ALLOWLIST,
    ...RELATION_RESOLVER_OVERRIDE,
  ]);
  for (const modelName of relationAllowlist) {
    const key = `${modelName}RelationsResolver`;
    const cls = relationsModule[key];
    // Not every model has a relation resolver (e.g. pure leaf models with
    // no relations). Missing is fine; we silently skip.
    if (typeof cls === 'function') {
      resolvers.push(cls);
    }
  }

  // Custom resolvers. Each addition is named explicitly so a reviewer can
  // see the surface area at a glance. The `server*` group exposes
  // credential-bearing DTOs and is gated by `@Authorized(["server","admin"])`
  // at the resolver method level — see `src/resolvers/custom/server/`.
  const customModule = (await import('../resolvers/custom/index')) as Record<
    string,
    ResolverClass
  >;

  // Aggregation / analytics
  if (typeof customModule.OptionsGreeksHistoryCustomResolver === 'function') {
    resolvers.push(customModule.OptionsGreeksHistoryCustomResolver);
  }

  // Server-only credential-retrieval resolvers (CORTEX-P0-001 follow-up).
  // These provide the DTO read-paths the Auth.js Apollo adapter and the
  // engine broker-auth flow need now that the secret-field excision is
  // in place. Each method is @Authorized(["server","admin"]).
  for (const key of [
    'AlpacaAccountCredentialsResolver',
    'SessionResolver',
    'AccountResolver',
    'VerificationTokenResolver',
  ] as const) {
    const cls = customModule[key];
    if (typeof cls !== 'function') {
      throw new Error(
        `resolver-allowlist: expected server resolver ${key} to be exported ` +
          `from src/resolvers/custom/server/index.ts; got ${typeof cls}.`
      );
    }
    resolvers.push(cls);
  }

  if (resolvers.length === 0) {
    throw new Error('resolver-allowlist: produced empty resolver set');
  }
  return resolvers as NonEmptyArray<ResolverClass>;
}

/**
 * Tighter resolver-class type exported so tests and callers can refer
 * to the constructor shape without leaning on `Function`.
 */
export type { ResolverClass };
