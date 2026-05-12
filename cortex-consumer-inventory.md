# CORTEX-P0-001 — Consumer Inventory

This document inventories every consumer of `@adaptic/backend-legacy` GraphQL CRUD across `app/` and `engine/`. It is the source of truth used to justify the resolver allowlist and to surface the **stop-condition** identified during implementation.

## Method

Searched both consumer repos with `rg -n "adaptic\\.<model>\\.<crud>"` and `rg -n "gql\`|graphql\`|useQuery|useMutation"` to enumerate runtime calls. Every entry below is a real, present-day call site.

## Models actually consumed via `adaptic.*` CRUD

Listed by Prisma model name. Each line: caller location and the operation called.

### Tier A — Core domain models (broad usage in both app and engine)

| Model | CRUD ops actually called | Caller (sample) |
|---|---|---|
| `User` | `create`, `get`, `update`, `delete`, `upsert`, `findMany` | `app/src/auth.ts:228`, `app/src/lib/apollo/adapter.ts:59-188`, `app/src/lib/user.ts`, `app/src/app/api/admin/users/update-role/route.ts`, `app/src/app/api/auth/create-session/route.ts:320`, `app/src/lib/auth/account-linking.ts` |
| `Account` | `get`, `create`, `upsert`, `delete` | `app/src/lib/apollo/adapter.ts:152-409`, `app/src/lib/auth/account-linking.ts:894` |
| `Session` | `get`, `create`, `update`, `delete` | `app/src/lib/apollo/adapter.ts:197-279` (NextAuth adapter implementation) |
| `VerificationToken` | `create`, `get`, `delete` | `app/src/lib/apollo/adapter.ts:288-313` |
| `AccountLinkingRequest` | `findMany`, `get`, `update` | `app/src/lib/auth/account-linking.ts:440-706` |
| `AlpacaAccount` | `create`, `get`, `getAll`, `update`, `findMany` | `app/src/app/api/alpaca/account/route.ts:134-210`, `engine/src/scripts/update-paper-account-allocations.ts:123`, `app/src/lib/getMarketSentiment.ts:668`, `app/src/lib/apollo/client-helpers.ts:66-197`, `engine/src/__tests__/services/account-manager-service-skip-list.test.ts` |
| `Asset` | `get`, `upsert` | `app/src/lib/asset/getAssetData.ts:898-931`, `app/src/components/charts/stock-chart.tsx:147`, `app/src/app/(protected)/stocks/[ticker]/page.tsx:128` |
| `Trade` | `findMany`, `get`, `update` | `engine/src/equities/orchestrate-trades/trade-execution.ts:551-888`, `engine/src/controllers/trading.controller.ts:410-480`, `engine/src/functions/wrap-up-the-day.ts:560-788`, `engine/src/functions/update-trade-status.ts:1138-1313`, `engine/src/services/backend-sync-orchestrator/index.ts:518-848`, `app/src/app/api/trades/route.ts:58` |
| `Action` | `findMany`, `update` | `engine/src/equities/orchestrate-trades/trade-execution.ts:850`, `app/src/app/api/alpaca/orders/cancel-all/route.ts:112-130`, `engine/src/services/backend-sync-orchestrator/index.ts:647-991`, `engine/src/services/crypto/crypto-order-sync-service.ts:506-935` |
| `Alert` | (via Apollo client subscriptions, no direct CRUD found) | n/a |
| `NewsArticle` | `get`, `update`, `create` | `app/src/lib/getNewsByTicker.ts:106-166` |
| `NewsArticleAssetSentiment` | `get`, `update`, `create` | `app/src/lib/getNewsByTicker.ts:211-280` |
| `LlmConfiguration` | `upsert` | `app/src/app/api/user/llm-configuration/route.ts:74` |
| `WaitlistEntry` | `get`, `findMany`, `update`, `create` | `app/src/app/api/admin/waitlist/*`, `app/src/app/api/waitlist/*` |
| `InviteToken` | `create`, `get` | `app/src/app/api/admin/waitlist/[id]/approve/route.ts:150`, `app/src/app/api/invite-token/validate/route.ts:40` |
| `Customer` | indirect (via `User.customer` relation) | (no direct CRUD found) |
| `TradingPolicy` | indirect | (no direct CRUD found) |
| `Allocation` | indirect | (no direct CRUD found) |
| `OptionsPosition` | `update` (referenced in engine docs only, future-wired) | `engine/src/di/options-lifecycle.ts:101-254` |
| `OptionsPositionEvent` | `create` | `engine/src/di/options-lifecycle.ts:101` |
| `SyncEvent`, `ConflictEvent` | engine sync orchestrator | `engine/src/services/backend-sync-orchestrator/` |
| `SignalLineage` | engine | `engine/src/services/...` |
| `TradeAuditEvent` | engine audit | `engine/src/services/...` |
| `AccountDecisionRecord` | engine decisions | `engine/src/services/...` |
| `PolicyOverlay` | engine policy overlays | `engine/src/services/...` |

### Tier B — Models with NO confirmed consumer-side CRUD calls

These models exist in the schema but `rg` against `app/src` and `engine/src` did not find any `adaptic.<model>.<crud>` invocation:

- `AuditLog` — written server-side via the audit-logger Apollo plugin (`src/middleware/audit-logger.ts`), never read by app/engine via GraphQL CRUD.
- `Authenticator` — WebAuthn credential storage. No `adaptic.authenticator.*` calls in either consumer repo. Used only internally by backend-legacy server (Auth.js webauthn flows).
- `LinkedProvider` — No `adaptic.linkedProvider.*` calls in either consumer repo (the account-linking flow uses `adaptic.account.*` instead).
- `ABTest`, `MLModelVersion`, `MLTrainingData`, `ModelArtifact`, `ModelVersion`, `ModelVersionArtifact`, `FeatureImportanceAnalysis`, `SystemAlert`, `AnalyticsConfiguration`, `AnalyticsSnapshot`, `ConnectionHealthSnapshot`, `InstitutionalSentimentHistory/Metrics/Errors/Alerts`, `InstitutionalHolding`, `InstitutionalFlowSignal`, `MarketSentiment`, `EconomicEvent`, `ScheduledOptionOrder`, `OptionsContract`, `OptionsGreeksHistory`, `OptionsTradeExecution`, `PortfolioGreeksHistory`, `DeadLetterMessage`, `SignalGeneratorMetrics`, `SignalPriorityQueue`, `SignalOutcome`, `Event`, `EventSnapshot`, `TradeExecutionHistory`, `DecisionMemorySummary`, `EquityBar`, `TradeOutcome`, `Configuration`, `Allocation`, `Customer`, `TradingPolicy`, `PolicyOverlay` — these models are either populated server-side only, accessed via Tier A telemetry DB in the engine, or accessed only through parent relations (e.g. `User.customer`). The allowlist conservatively keeps these CRUD resolvers exposed because the consumer search may have missed indirect/relation reads; removing them is a follow-up cleanup, not a security blocker. The auth-required gate ensures unauthenticated callers cannot reach any of them.

## Resolver allowlist rationale

The fully-replaced spread `[...crudResolvers, ...relationResolvers]` exposes **64 CRUD resolvers** (one per model) plus relation resolvers. The new allowlist:

- **Keeps** every model in the "Tier A" list above, including the **exposed-secret models** `User`, `Account`, `Session`, `VerificationToken`, `AccountLinkingRequest`, `AlpacaAccount`. These cannot be removed in this PR without breaking the app's NextAuth adapter and the engine's account-config flow — see the stop-condition section below.
- **Removes** `Authenticator`, `LinkedProvider`, `AuditLog` — no confirmed consumer.
- All other models stay in the allowlist for now (defensive — auth gate is the load-bearing protection).
- The field-level excision layer (see below) strips the secret *field strings* from the schema, independent of which models are reachable.

## Stop condition (escalation to orchestrator)

Per the spec's "Stop conditions":

> If consumer inventory shows a generated CRUD resolver is genuinely needed for an exposed-secret model (e.g. `app` calls `findManyAlpacaAccount`), STOP. Custom DTO resolver is required and may need backend-team review.

**Confirmed:** the app's NextAuth Apollo adapter (`app/src/lib/apollo/adapter.ts`) actively reads `Session.sessionToken`, `Account.access_token`, `Account.id_token`, `Account.refresh_token` server-side via GraphQL CRUD (lines 195-411). The engine's account-manager reads `AlpacaAccount.APIKey` and `AlpacaAccount.APISecret` server-side via the published `selectionSet` strings to authenticate to Alpaca. These reads are legitimate server-to-server traffic, NOT browser exposure.

**Implications for this PR:**

1. **Schema field excision** (the `applyModelsEnhanceMap` override) is implemented in this PR. After this version publishes, **the published `selectionSet` strings in `src/AlpacaAccount.ts`, `src/Session.ts`, `src/Account.ts`, `src/VerificationToken.ts`, `src/Authenticator.ts`, `src/LinkedProvider.ts` no longer contain the forbidden fields**. Consumers running against the new version will receive objects without those fields.

2. **App and engine WILL break at runtime** when they consume the new version unless they:
   - **App**: rewrite the NextAuth Apollo adapter to call a new server-only custom resolver path (e.g. `serverGetSessionForAuthJs`, `serverGetAccountForAuthJs`) that returns a DTO including the secret fields and is gated by `@Authorized(["server"])`. Until then, the adapter loses access to `sessionToken`, `access_token`, etc.
   - **Engine**: replace `adaptic.alpacaAccount.get` / `getAll` calls used for credential retrieval with a new `serverGetAlpacaAccountCredentials` custom resolver gated by `@Authorized(["server"])`.

3. **The custom server-only DTO resolvers are out of scope for this PR** (CORTEX-P0-001). They belong in a follow-up backend PR coordinated with the matching app and engine changes. Two principled designs for the orchestrator to choose between:

   - **Option A — server-only DTO resolvers**: add `OptionsGreeksHistoryCustomResolver`-style classes under `src/resolvers/custom/` that expose:
     - `serverFindSessionByToken(token: String!): SessionWithToken @Authorized(["server","admin"])`
     - `serverGetAccountForLinking(...) @Authorized(["server","admin"])`
     - `serverGetAlpacaAccountCredentials(accountId: ID!): AlpacaAccountCredentials @Authorized(["server","admin"])`
     and the consumer-side code switches to call these for server-grade reads.

   - **Option B — role-aware field gating**: keep the fields in the schema but wrap each forbidden field with `@Authorized(["server","admin"])` and run TypeGraphQL with `authMode: "null"`. Browser callers get `null`; server callers get the value. This is less invasive on the consumer side but requires:
     - Making each forbidden field `nullable: true` in the GraphQL schema (overriding the generator), AND
     - A custom enhance step that re-decorates the fields, AND
     - Verifying NextAuth adapter and engine tolerate `null` returns gracefully (they currently expect strings).

**Recommendation:** Option A. It preserves the principle that the GraphQL schema does not expose secrets to any unauthorized caller, mirrors NextAuth's existing "adapter" pattern, and produces a tighter audit trail (server-grade reads have their own GraphQL operation names).

**Orchestrator action required:** This PR ships the field excision per spec. The matching app + engine PRs must be scheduled before the new `@adaptic/backend-legacy` version is consumed, or NextAuth and the engine's Alpaca credential retrieval will fail. The dependency-graph note in the master plan already accounts for this (consumers update in a follow-up PR).

## Operations actually invoked (by name) in `selectionSet` mutation strings

For audit completeness, the following CRUD operation names are present in compiled `selectionSet`-using calls (sample, not exhaustive):

- `createOneUser`, `updateOneUser`, `findUniqueUser`, `findManyUser`, `upsertOneUser`, `deleteOneUser`
- `createOneAlpacaAccount`, `findUniqueAlpacaAccount`, `findManyAlpacaAccount`, `updateOneAlpacaAccount`
- `createOneSession`, `findUniqueSession`, `updateOneSession`, `deleteOneSession`
- `createOneAccount`, `findUniqueAccount`, `upsertOneAccount`, `deleteOneAccount`
- `createOneVerificationToken`, `findUniqueVerificationToken`, `deleteOneVerificationToken`
- `findManyAccountLinkingRequest`, `findUniqueAccountLinkingRequest`, `updateOneAccountLinkingRequest`
- `createOneTrade`, `findManyTrade`, `updateOneTrade`, `findUniqueTrade`
- `findManyAction`, `updateOneAction`
- `getAsset`, `upsertOneAsset`
- `createOneNewsArticle`, `updateOneNewsArticle`, `findUniqueNewsArticle`
- `upsertOneLlmConfiguration`
- `createOneWaitlistEntry`, `updateOneWaitlistEntry`, `findUniqueWaitlistEntry`, `findManyWaitlistEntry`
- `createOneInviteToken`, `findUniqueInviteToken`

All of these are kept available behind the authentication gate.
