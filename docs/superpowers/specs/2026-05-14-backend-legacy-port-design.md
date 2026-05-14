# Backend-Legacy Port — Sub-Project 2 Design Spec

**Parent charter:** [`~/adapticai/docs/superpowers/specs/2026-05-14-stable-release-to-main-program-charter.md`](../../../../docs/superpowers/specs/2026-05-14-stable-release-to-main-program-charter.md)
**Repo:** `~/adapticai/backend-legacy/` (branch `main`)
**Author:** Eli Rosenberg (via Claude Opus 4.7)
**Date:** 2026-05-14
**Status:** Draft → pending review
**Publishes:** `@adaptic/backend-legacy` to npm `@next` dist-tag during the port; flipped to `latest` at Freeze.

---

## 0. TL;DR

`backend-legacy` is the foundation of the port: it owns the Prisma schema, the codegen pipeline, and the type definitions every other repo consumes. This sub-project lands all 243 SR-only commits onto `main`, applying the charter's §2 mapping rules. Of the 243 commits, **151 are CI version-bump publishes** (no semantic content); the substantive port is ~92 commits clustered in 7 behavioral areas. The most consequential work is the **schema port**: collapsing the SR `TradingPolicy`, `PolicyOverlay`, and `LlmConfiguration` models into the JSON-on-Org/Fund shape main already defines (charter §2.2, §2.4 F6); deferring 6 models to Tier-A engine telemetry per charter §1.3 (`AccountDecisionRecord`, `DecisionMemorySummary`, `TradeOutcome`, `MLModelVersion`, `EquityBar`, `OptionsPositionEvent`); and adding the missing `TradeStatus` enum values, `Customer` KYC fields, re-underwriting `Trade`/`Action` fields, and `Trade.rejectionMetadata` that SR added but main does not yet have. The non-schema port (Apollo pool reliability, codegen-generator improvements, auth, Prisma version, logging) is mostly mechanical with the charter's rename rule applied. Done when: all 7 areas merged to `main`, build/lint/typecheck/tests green, `@adaptic/backend-legacy@<port.N>` published to `@next`, downstream `integration-contract-validator` reports no contract mismatches against engine/utils/platform main branches.

---

## 1. Inheritance from charter

This spec inherits all cross-cutting rules from the program charter without re-stating them:

- §2 mapping rules: mechanical `AlpacaAccount → BrokerageAccount` rename; `TradingPolicy`/`LlmConfiguration` collapse to JSON; fund-scope allowlist F1–F9; default-broker-scope.
- §3 branch policy: work lands on `port/<area>` branches off `main`; squash-merged to `main`; SR hotfix mirror within 24h.
- §4 per-area semantic-patch technique: no cherry-picks; one squash commit per area.
- §5 publish coordination: `@next` dist-tag during port; emergency SR hotfixes dual-tag.
- §6 parity bar (this repo's instantiation in §10).
- §7 rollback policy.

Any conflict between this spec and the charter resolves in the charter's favor.

---

## 2. SR-only commit inventory

### 2.1 Raw count

```
$ git log origin/main..origin/stable-release --oneline | wc -l
243
```

- **151** of those 243 are `ci:` version-bump commits emitted by the publish CI. They have no semantic content beyond bumping `package.json`. They are not ported; instead the port produces its own `@next` version-bump cadence per charter §5.
- **~92** are substantive (feat/fix/refactor/chore-schema/migration/style).

### 2.2 Substantive commit list

Generated via:

```bash
cd ~/adapticai/backend-legacy
git log origin/main..origin/stable-release --pretty=format:'%h %ai %s' | grep -v ' ci: ' | grep -v ' ci('
```

The full list (snapshotted 2026-05-14) is in `~/adapticai/backend-legacy/docs/superpowers/specs/appendices/2026-05-14-backend-legacy-sr-substantive-commits.txt` (created as part of the kickoff PR for this sub-project — see §13).

---

## 3. Area grouping

Substantive commits cluster into 7 areas. Each becomes its own `port/<area>` branch on `backend-legacy/main`. Ordering reflects intra-repo dependency: schema first, then code that depends on schema.

| #   | Area                              | Commits | Branch             | Depends on                                        |
| --- | --------------------------------- | ------- | ------------------ | ------------------------------------------------- |
| A1  | Schema port (the meat)            | ~30     | `port/schema`      | —                                                 |
| A2  | Codegen / generator improvements  | ~13     | `port/codegen`     | A1 (schema must settle before regenerating types) |
| A3  | Apollo client + pool reliability  | ~12     | `port/apollo-pool` | A2 (codegen output may be touched)                |
| A4  | Auth + token verification         | ~8      | `port/auth-tokens` | — (independent of A1–A3)                          |
| A5  | Prisma version + dist build setup | ~6      | `port/prisma-dist` | — (independent)                                   |
| A6  | Logging / observability           | ~5      | `port/logging`     | A2 (codegen logs touched)                         |
| A7  | Docs / ESLint institutional-grade | ~5      | `port/docs-lint`   | — (independent)                                   |

Areas A4, A5, A7 can run in parallel with A1–A3. Within A1–A3 the order is strict.

---

## 4. Schema port (A1) — the consequential work

### 4.1 Model classification

| SR model                                                                                                                | Status on main                                 | Action                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlpacaAccount`                                                                                                         | does not exist; replaced by `BrokerageAccount` | Drop entity. All SR commits modifying `AlpacaAccount` re-targeted to `BrokerageAccount` per charter §2.1.                                                                                          |
| `TradingPolicy` (82 fields)                                                                                             | does not exist                                 | Collapse to JSON shape (§4.2).                                                                                                                                                                     |
| `PolicyOverlay`                                                                                                         | does not exist                                 | Collapse: drop entity; surface remaining behavior as a `Fund.policyOverlays` JSON array (§4.4).                                                                                                    |
| `LlmConfiguration`                                                                                                      | does not exist                                 | Collapse to JSON shape (§4.3).                                                                                                                                                                     |
| `AccountDecisionRecord`, `DecisionMemorySummary`, `TradeOutcome`, `MLModelVersion`, `EquityBar`, `OptionsPositionEvent` | not on backend-legacy main                     | **Defer to Tier-A.** Already in `engine/stable-release` Prisma schema. Sub-project 4 (engine port) ensures these land on `engine/main` Tier-A. This spec does **not** port them to backend-legacy. |
| `WaitlistEntry`, `InviteToken`, `SyncEvent`, `ConflictEvent`                                                            | exist on main                                  | No action (already aligned).                                                                                                                                                                       |
| `Trade`, `Action`, `Customer`, `Alert`                                                                                  | exist on main                                  | **Port field additions** from SR (§4.5–4.7).                                                                                                                                                       |
| Other models touched by SR commits with no semantic change beyond the §2 rename                                         | exist on main                                  | Re-run codegen after schema settles; verify output matches expectations.                                                                                                                           |

### 4.2 `TradingPolicy` JSON shape — the canonical `tradingDefaults` / `tradingOverrides` schema

The `TradingPolicy` entity on SR has 82 fields. The collapsed JSON shape lives at:

- `Organization.tradingDefaults: Json?` (org-wide defaults; existing on main schema).
- `Fund.tradingOverrides: Json?` (fund-level overrides; existing on main schema).
- A subset stays as columns on `BrokerageAccount` (per charter §2.2: the 14 deprecated trailing-stop / crypto-allocation fields already on main `BrokerageAccount`).

The JSON shape is defined in a single canonical TypeScript type exported from `@adaptic/backend-legacy/types/trading-policy.ts`:

```ts
/**
 * Canonical TradingPolicy JSON shape stored at:
 *   Organization.tradingDefaults  (org-wide defaults)
 *   Fund.tradingOverrides         (fund-level overrides)
 *
 * Read-time merging is precedence-ordered: Org defaults → Fund overrides →
 * per-BrokerageAccount column overrides (for the 14 fields in §4.2.4).
 *
 * Use `effectivePolicy(brokerageAccount)` from
 * `@adaptic/backend-legacy/helpers/effective-policy` to compute the merged
 * result — do NOT re-implement merge logic in consumer packages.
 */
export interface TradingPolicyJson {
  /** Autonomy — when the engine is allowed to act without human approval. */
  autonomy?: {
    enableAutoEntry?: boolean;
    enableAutoExit?: boolean;
    enableAutoRebalance?: boolean;
    requireHumanApprovalAboveNotional?: number;
  };

  /** Risk caps applied per-strategy and per-portfolio. */
  risk?: {
    maxPortfolioVarPct?: number; // 0–1
    maxSinglePositionPct?: number; // 0–1
    maxSectorExposurePct?: number; // 0–1
    maxAssetClassPct?: { equity?: number; crypto?: number; options?: number };
    minBuyingPowerReservePct?: number; // 0–1
  };

  /** Per-trade allocation defaults (SR's `tradeAllocationPct`, etc.) */
  allocation?: {
    perTradeEquityPct?: number;
    perTradeCryptoPct?: number;
    perTradeOptionsPct?: number;
    autoAllocation?: boolean;
  };

  /** Scalping / intraday-specific policy (the 12 W3-3 fields). */
  scalping?: {
    enableScalping?: boolean;
    maxConcurrentScalps?: number;
    minHoldSeconds?: number;
    maxHoldSeconds?: number;
    profitTargetBps?: number;
    stopLossBps?: number;
    requireRSIConfirm?: boolean;
    requireMACDConfirm?: boolean;
    requireVolumeSurge?: boolean;
    cooldownAfterLossMs?: number;
    cooldownAfterWinMs?: number;
    maxScalpsPerSession?: number;
  };

  /** Compliance — FINRA / SEC operational rules. */
  compliance?: {
    equityWashTradeCooldownMs?: number; // FINRA 5210
    restrictedTickerOverrides?: string[];
    requireAuditLogForAll?: boolean;
  };

  /** Asset-class enablement (defaults to all-enabled per SR migration). */
  assetClasses?: {
    equity?: boolean;
    crypto?: boolean;
    options?: boolean;
  };

  /** Sentiment / news subscription policy (fund-scope per charter §2.4 F5). */
  sentiment?: {
    minSentimentScoreToEnter?: number;
    maxNegativeSentimentToHold?: number;
    requireRecentNews?: boolean;
    newsLookbackMinutes?: number;
  };

  /** Backtest scope (charter §2.4 F7). */
  backtest?: {
    defaultUniverse?: string[];
    defaultPeriodDays?: number;
    defaultStrategyId?: string;
  };
}
```

#### 4.2.1 Mapping from SR's 82 fields

The 82 SR `TradingPolicy` columns map deterministically into the JSON shape above. The full mapping table lives in `@adaptic/backend-legacy/types/trading-policy.SR-MAPPING.md` (committed as part of A1). Summary:

- **Direct field-to-path mappings (60 fields)** — examples: `tradeAllocationPct` → `allocation.perTradeEquityPct`, `cryptoTradeAllocationPct` → `allocation.perTradeCryptoPct`, `equityWashTradeCooldownMs` → `compliance.equityWashTradeCooldownMs`, and so on. Full table in the SR-MAPPING file.
- **14 deprecated SR fields preserved as `BrokerageAccount` columns** (per charter §2.2). These already exist as columns on main's `BrokerageAccount` and are read directly from the entity, not from the JSON. The 14 fields are:
  | # | Column on `BrokerageAccount` |
  |---|------------------------------|
  | 1 | `enablePortfolioTrailingStop` |
  | 2 | `portfolioTrailPercent` |
  | 3 | `portfolioProfitThresholdPercent` |
  | 4 | `reducedPortfolioTrailPercent` |
  | 5 | `defaultTrailingStopPercentage100` |
  | 6 | `firstTrailReductionThreshold100` |
  | 7 | `secondTrailReductionThreshold100` |
  | 8 | `firstReducedTrailPercentage100` |
  | 9 | `secondReducedTrailPercentage100` |
  | 10 | `minimumPriceChangePercent100` |
  | 11 | `cryptoTradingEnabled` |
  | 12 | `cryptoTradingPairs` |
  | 13 | `tradeAllocationPct` (per-account override of allocation.perTradeEquityPct) |
  | 14 | `cryptoTradeAllocationPct` (per-account override of allocation.perTradeCryptoPct) |

  This list matches the `@deprecated`-marked fields on stable-release's `AlpacaAccount` referenced by charter §2.2 and is verifiable by `git show origin/stable-release:prisma/schema.prisma | awk '/^model AlpacaAccount /,/^}/' | grep '@deprecated'`.

- **8 SR fields without a clean home in the JSON shape — explicit Tier-A mapping required.** Each must have a concrete home on engine's Tier-A schema (sub-project 4); if sub-project 4 does not own one of these, this spec's port silently drops it. The required Tier-A mapping (sub-project 4 is the authoritative spec; this table is the contract):

  | SR `TradingPolicy` field     | Tier-A engine destination (sub-project 4 owns implementation)                                                           |
  | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
  | `enginePersonalityProfile`   | New JSON column on Tier-A `EngineFundConfig` (or equivalent fund-config Tier-A table); read at engine startup per fund. |
  | `signalRoutingRules`         | New JSON column on Tier-A `EngineFundConfig`; read by `services/strategies/**` at signal dispatch.                      |
  | `manualOverrideAllowlist`    | New JSON column on Tier-A `EngineFundConfig`; read by the autonomy gate.                                                |
  | `riskOverrideJustifications` | Append-only Tier-A `RiskOverrideJustification` table (one row per override event), keyed by `fundId + correlationId`.   |
  | `lastDecisionContext`        | Tier-A `AccountDecisionRecord` (existing) — re-key from `alpacaAccountId` to `(fundId, brokerageAccountId)`.            |
  | `lastMemorySummary`          | Tier-A `DecisionMemorySummary` (existing) — re-key from `alpacaAccountId` to `fundId`.                                  |
  | `enableShadowMode`           | New boolean column on Tier-A `EngineFundConfig`; defaults to `false`.                                                   |
  | `experimentBucket`           | New string column on Tier-A `EngineFundConfig`; default `null`.                                                         |

  **Decision-maker, deadline, and committed default for the 6 policy-shape fields (`enginePersonalityProfile`, `signalRoutingRules`, `manualOverrideAllowlist`, `riskOverrideJustifications`, `enableShadowMode`, `experimentBucket`).** The two decision-record fields (`lastDecisionContext`, `lastMemorySummary`) already have concrete Tier-A homes and need no fallback.
  - **Decision-maker:** sub-project 4's spec author (engine port). They confirm in writing on the engine spec's §1 whether `EngineFundConfig` (or equivalent) is in sub-project 4's scope.
  - **Hard deadline:** **before A1's `port/schema` branch is squash-merged to `main`**. A1 cannot land otherwise — verification is gated by an explicit pre-merge checkbox on the A1 PR template: `[ ] Sub-project 4 has confirmed Tier-A ownership of the 6 policy-shape fields (link to engine spec §1 confirmation).`
  - **Committed default if sub-project 4 declines or its spec is not yet written:** the 6 policy-shape fields land under `Fund.tradingOverrides.runtime` as a typed sub-key on the JSON shape (not on `BrokerageAccount` columns; not as Org-level defaults). The `TradingPolicyJson` interface in §4.2 gains a `runtime?` group whose schema mirrors the 6 fields. The `effectivePolicy()` helper exposes them at `policy.runtime.<field>`. This default keeps the port self-contained, reversible (the `runtime` group can be moved to Tier-A later by sub-project 4 via a JSON-strip + Tier-A insert), and never silently drops a field.

  Either branch produces the same observable API surface to engine consumers (`effectivePolicy(ba).runtime.<field>`); only the storage location differs. This ensures sub-project 2 can ship without blocking on sub-project 4's design.

#### 4.2.2 `effectivePolicy()` helper

```ts
// @adaptic/backend-legacy/helpers/effective-policy.ts
import type { BrokerageAccount, Fund, Organization } from '../types';
import type {
  TradingPolicyJson,
  PolicyOverlayEntry,
} from '../types/trading-policy';

/**
 * The relation shape effectivePolicy() requires. Consumers must fetch with
 * this selection set to populate the input correctly.
 */
export type BrokerageAccountWithPolicyContext = BrokerageAccount & {
  fund: Fund & {
    organization: Organization;
    // policyOverlays is the JSON-array column on Fund; included by default
  };
};

/**
 * Canonical selection set string (exported from selectionSets/) consumers
 * should pass to `adaptic.brokerageAccount.get()` to populate the required
 * relations in one query.
 *
 * Example:
 *   const ba = await adaptic.brokerageAccount.get(
 *     id, brokerageAccountWithPolicyContextSelectionSet
 *   );
 *   const policy = effectivePolicy(ba);
 */
export const brokerageAccountWithPolicyContextSelectionSet: string;

/**
 * Deep-merges Org.tradingDefaults → Fund.tradingOverrides → Fund.policyOverlays
 * (active only) → BrokerageAccount column overrides into a single canonical
 * TradingPolicyJson. Consumers MUST use this helper — never re-implement the
 * precedence chain.
 *
 * @param ba The BrokerageAccount with `fund.organization` and `fund.policyOverlays`
 *   pre-loaded (use brokerageAccountWithPolicyContextSelectionSet).
 * @returns The effective policy, fully populated with all defaults, frozen.
 */
export function effectivePolicy(
  ba: BrokerageAccountWithPolicyContext
): Required<TradingPolicyJson>;
```

The helper's precedence chain (locked; consumers MUST NOT re-implement):

1. Start with built-in safe defaults: the `DEFAULT_TRADING_POLICY` constant in this file.
2. Deep-merge `ba.fund.organization.tradingDefaults` over the defaults.
3. Deep-merge `ba.fund.tradingOverrides` over the result.
4. Filter `ba.fund.policyOverlays` to entries where `status === 'ACTIVE' && (expiresAt == null || new Date(expiresAt) > now)`; sort ascending by `severity` (`LOW` < `MEDIUM` < `HIGH` < `CRITICAL`); deep-merge each overlay's `mutations` over the result in order (CRITICAL last → highest precedence).
5. Override the 14 BA-column fields enumerated in §4.2.1 from `ba`'s own columns; these are not in the JSON, they sit alongside.
6. `Object.freeze()` the result and return.

If `ba.fund.organization` or `ba.fund.policyOverlays` is `undefined` at runtime (selection-set was wrong), throw `EffectivePolicyContextError` with a clear message pointing at `brokerageAccountWithPolicyContextSelectionSet`. Do **not** silently fall back to defaults — that hides bugs.

The helper, its selection-set string, and its error class are exported from the published npm package so engine, utils, and platform all consume the same precedence chain. Unit tests in §13 verify the chain end-to-end.

### 4.3 `LlmConfiguration` JSON shape

The SR `LlmConfiguration` model has 16 fields (default provider, per-tier providers, per-tier models, per-provider API keys). It collapses to `Organization.llmDefaults` / `Fund.llmOverrides` — both `Json?` already on main schema.

```ts
// @adaptic/backend-legacy/types/llm-configuration.ts
export interface LlmConfigurationJson {
  defaultProvider?:
    | 'OPENAI'
    | 'ANTHROPIC'
    | 'DEEPSEEK'
    | 'KIMI'
    | 'QWEN'
    | 'XAI'
    | 'GEMINI';
  miniProvider?: LlmConfigurationJson['defaultProvider'];
  normalProvider?: LlmConfigurationJson['defaultProvider'];
  advancedProvider?: LlmConfigurationJson['defaultProvider'];
  miniModel?: string; // e.g. "gpt-5.5", "claude-haiku-4-5"
  normalModel?: string; // e.g. "gpt-5", "claude-sonnet-4-6"
  advancedModel?: string; // e.g. "gpt-5-pro", "claude-opus-4-7"
  apiKeys?: {
    openai?: string; // encrypted at rest by application layer
    anthropic?: string;
    deepseek?: string;
    kimi?: string;
    qwen?: string;
    xai?: string;
    gemini?: string;
  };
}
```

`effectiveLlmConfig(fund)` helper is analogous to `effectivePolicy()` but with a two-level precedence chain (defaults → `Org.llmDefaults` → `Fund.llmOverrides`). No overlay tier (LLM config is not event-driven).

**API key encryption — explicit boundary.** API keys carried in `apiKeys.<provider>` are stored as envelope-encrypted ciphertext, never as plaintext. The wire format on disk (the JSON value) is:

```ts
type EncryptedApiKey = {
  ciphertext: string; // base64 AES-GCM ciphertext
  iv: string; // base64 12-byte IV
  authTag: string; // base64 GCM auth tag
  keyId: string; // KMS key id used to wrap the DEK
  wrappedDek: string; // base64 KMS-wrapped data encryption key
  algorithm: 'AES-256-GCM';
  createdAt: string; // ISO 8601
};
```

The encrypt/decrypt boundary:

| Operation            | Boundary                                                                                                                                                                                                                                            | Module                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Encrypt on write     | Backend-legacy GraphQL mutation resolver (`updateOrganizationLlmDefaults` / `updateFundLlmOverrides`). Plaintext only ever crosses the API boundary in the mutation input; resolver encrypts before persistence.                                    | `@adaptic/backend-legacy/helpers/kms-envelope.encryptApiKey()` |
| Decrypt on read      | Backend-legacy `effectiveLlmConfig()` helper. Plaintext keys are returned only when an authenticated caller has `OrgMembership.role IN (OWNER, ADMIN)` for the org. Other callers see the keys as `{ encrypted: true, keyId: '...' }` placeholders. | `@adaptic/backend-legacy/helpers/kms-envelope.decryptApiKey()` |
| Plaintext in transit | TLS-only (Apollo over HTTPS / WSS). Plaintext is never logged. ESLint `no-console` rule + audit-logger redaction blocklist enforce.                                                                                                                 | —                                                              |

If the KMS envelope helper (`helpers/kms-envelope`) does not exist on main when A5 starts, A5 includes its port (referenced by charter assumption B5 in this spec's §14.1).

### 4.4 `PolicyOverlay` handling

SR `PolicyOverlay` is an activate-able, expire-able overlay that mutates `TradingPolicy` at runtime (e.g. "for the next 4 hours, disable autonomous entry on AAPL because of a known earnings event"). It is **not** a static config; it's an event-driven temporary override.

**Decision:** Collapse `PolicyOverlay` into a `Fund.policyOverlays: Json[]` array column (new field, added in this port). Each overlay entry has the same shape SR's `PolicyOverlay` had:

```ts
export interface PolicyOverlayEntry {
  id: string; // uuid
  overlayType:
    | 'RISK_GATE'
    | 'NEWS_GATE'
    | 'COMPLIANCE_GATE'
    | 'MANUAL_HALT'
    | 'CIRCUIT_BREAKER';
  source: string; // e.g. "engine.risk.var-breach"
  reason: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  mutations: Partial<TradingPolicyJson>; // what to override while active
  status: 'ACTIVE' | 'EXPIRED' | 'DEACTIVATED';
  activatedAt: string; // ISO 8601
  expiresAt?: string;
  deactivatedAt?: string;
  deactivatedBy?: string;
  correlationId?: string;
  triggerEventId?: string;
}
```

`effectivePolicy()` is extended at step 4 of its precedence chain (§4.2.2). The extension, in code:

```ts
// inside effectivePolicy(), after defaults → Org → Fund merging:
const now = new Date();
const severityRank = { LOW: 0, MEDIUM: 1, HIGH: 2, CRITICAL: 3 } as const;
const active = ((ba.fund.policyOverlays as PolicyOverlayEntry[] | null) ?? [])
  .filter(
    (o) =>
      o.status === 'ACTIVE' &&
      (o.expiresAt == null || new Date(o.expiresAt) > now)
  )
  .sort((a, b) => severityRank[a.severity] - severityRank[b.severity]);
for (const overlay of active) {
  policy = deepMerge(policy, overlay.mutations);
}
```

**Lifecycle and retention:**

| Phase                       | Owner                                                                                                                           | Action                                                                                                                                                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activation                  | Engine service (e.g. `services/risk/var-gate.ts`)                                                                               | Inserts a new `PolicyOverlayEntry` into `Fund.policyOverlays` with `status=ACTIVE` via the `addPolicyOverlay(fundId, entry)` mutation.                                                                                                                    |
| Expiry sweep                | Engine cron `services/policy-overlay-sweeper`, runs every 5 min during NYSE hours                                               | For each fund with overlays containing `status=ACTIVE && expiresAt < now()`, flip those entries to `status=EXPIRED`, then immediately archive-and-remove (see next row). Sub-project 4 owns this cron.                                                    |
| Manual deactivation         | Engine service or platform UI action                                                                                            | Flips `status=ACTIVE` → `status=DEACTIVATED` and sets `deactivatedAt`, `deactivatedBy`, then immediately archive-and-remove (see next row).                                                                                                               |
| Archive-and-remove (atomic) | Engine `services/policy-overlay-archiver`, invoked synchronously on every status change away from `ACTIVE` (see two rows above) | Single DB transaction: (a) insert the entry into engine Tier-A `PolicyOverlayHistory` (append-only, retained per Tier-A policy); (b) remove the entry from `Fund.policyOverlays`. Atomic — the array never holds non-ACTIVE entries past one sweep cycle. |
| Steady-state array size     | Maintained by archive-and-remove above                                                                                          | Typical fund holds ≤ 20 entries at any moment, all `ACTIVE`. Bounded by concurrent active overlays, not by historical retention.                                                                                                                          |

Without the archive-and-remove step the array would grow unbounded. The archiver and Tier-A `PolicyOverlayHistory` are hard requirements of this port — sub-project 4's spec must include them; this spec records the dependency. Historical/audit queries (by `correlationId`, `triggerEventId`, etc.) target Tier-A `PolicyOverlayHistory`, not the JSON-array column.

**Why a JSON array instead of a separate table:** Active overlays are short-lived (hours to days), low-volume per fund (steady-state ≤ 20 entries because the archiver removes them on status flip — see lifecycle table above), and only ever read in the context of `effectivePolicy()`. A relational table would require an extra query per policy read; the JSON-array approach avoids that and matches the JSON-collapse pattern already chosen for `tradingDefaults`. Historical/expired overlays live in Tier-A `PolicyOverlayHistory` (sub-project 4), which is the right home for audit-style queries by `correlationId`, `triggerEventId`, etc.

### 4.5 `Trade` / `Action` re-underwriting fields

SR added `thesisVersion: Int @default(1)` and `supersededActionId: String? @db.Uuid` to `Trade` and `Action`. **Port directly to main** — these are mechanical schema additions with no fund/broker scope implications. Index on `(supersededActionId)` where present.

### 4.6 `Customer` KYC fields

SR added: `jurisdiction: String?`, `riskProfile: String?`, `amlStatus: String?`, `lastKycUpdate: DateTime?`. **Port directly to main** with corresponding GraphQL scalars exposed via codegen. `riskProfile` is a free-string here; the enum-style validation is in the application layer (a separate spec out of scope).

### 4.7 Other schema additions

| SR addition                                                                    | Port action                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Trade.rejectionMetadata: Json?`                                               | Port to main `Trade`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `TradeStatus.SUPERSEDED`, `REJECTED_BROKER`, `REJECTED_COMPLIANCE`, `FAILED`   | Add 4 enum values to main's `TradeStatus`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `perf(schema): add updatedAt indexes to Trade and Action`                      | Port to main migrations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `feat(schema): add per-provider model enums + refresh OpenaiModel with latest` | Port the 7 per-provider model enums (`OpenaiModel`, `AnthropicModel`, `DeepseekModel`, `KimiModel`, `QwenModel`, `XaiModel`, `GeminiModel`) into main as Prisma enums. Mark each with `/// @internal — documentation for LlmConfigurationJson.<tier>Model values; not persisted as a column.` so codegen suppresses them from typeStrings exposed to LLM prompts but they remain available for human review. Consumers MUST NOT depend on these enums; if needed for input validation, they should use `LlmConfigurationJson` type narrowing instead. |
| `chore(schema): mark legacy allocation/crypto flags as @deprecated`            | N/A — already preserved on main `BrokerageAccount`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `chore(schema): freeze 9 Tier A models per engine telemetryDb migration`       | N/A — main already doesn't have them.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### 4.8 Schema migrations to author

One migration per area in §4. Targets:

| Migration name (timestamp)                  | Schema change                                                                     | Backfill                                                                                                                                                                                                          |
| ------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<ts>_collapse_trading_policy_into_json`    | Drops `TradingPolicy`, `PolicyOverlay` tables; adds `Fund.policyOverlays` column. | Reads each SR `TradingPolicy` row, converts to the §4.2 JSON shape, writes to `Fund.tradingOverrides` of the owning Fund. Handles SR `PolicyOverlay` rows analogously into `Fund.policyOverlays`. **Idempotent.** |
| `<ts>_collapse_llm_configuration_into_json` | Drops `LlmConfiguration` table.                                                   | Reads each SR `LlmConfiguration` row, converts to §4.3 JSON shape, writes to `Organization.llmDefaults` of the user's org. **Idempotent.**                                                                        |
| `<ts>_add_trade_status_rejections`          | Adds 4 enum values.                                                               | None.                                                                                                                                                                                                             |
| `<ts>_add_trade_action_reunderwriting`      | Adds `thesisVersion`, `supersededActionId` to Trade and Action.                   | Backfills `thesisVersion = 1` for all existing rows.                                                                                                                                                              |
| `<ts>_add_customer_kyc_fields`              | Adds 4 KYC fields to Customer.                                                    | None (nullable).                                                                                                                                                                                                  |
| `<ts>_add_trade_rejection_metadata`         | Adds `Trade.rejectionMetadata`.                                                   | None (nullable).                                                                                                                                                                                                  |
| `<ts>_add_trade_action_updatedat_indexes`   | Adds indexes.                                                                     | None.                                                                                                                                                                                                             |

The migration that drops `AlpacaAccount` (in favor of `BrokerageAccount`) is **already present on main** in `20260310083601_fund_centric_changes`. This sub-project does not re-do that migration; it only authors the new ones above.

### 4.9 AlpacaAccount → BrokerageAccount backfill — schema-only migration + separate operational script

Per charter §2.3, every legacy `AlpacaAccount` row needs to become an Org → Fund → BrokerageAccount triple on main. **Long-running data backfills inside Prisma migration `up()` blocks are an anti-pattern** — they block deploys, can't be retried granularly, and leave the schema half-migrated on failure. So this port splits the work in two:

**Part 1 — schema-only migration `<ts>_prepare_brokerage_account_backfill` (lives in `prisma/migrations/`).**

This migration is fast (sub-second; pure DDL):

- Adds a temporary `Fund.legacyAlpacaAccountId: String?` column with `@@unique([legacyAlpacaAccountId])` index. This carries the synthetic fund's source-account id during backfill so the script is reentrant.
- Adds a temporary `BrokerageAccount.legacyAlpacaAccountId: String?` with `@@unique([legacyAlpacaAccountId])` index. Same purpose.
- Adds `Fund.policyOverlays: Json?` per §4.4.
- Adds `Organization.synthetic: Boolean @default(false)` so we can later identify auto-created personal orgs.
- Adds `Fund.synthetic: Boolean @default(false)` likewise.

The migration is reversible (`down()` drops the four columns) and runs in any deploy without dependency on application code.

**Part 2 — backfill script `backend-legacy/scripts/backfill-alpacaaccount-to-brokerageaccount.ts`.**

Standalone idempotent operational script, invoked manually per environment (paper-prod, prod) **after** Part 1's migration is deployed and **before** any application reads the new entities. Properties:

- **Reads from a frozen snapshot of the SR DB** (not the running prod DB). A pre-cutover step copies the SR Postgres to a snapshot DB; the script connects to the snapshot for the source `AlpacaAccount` rows and to the destination main DB for writes.
- **Idempotent and resumable.** For each legacy account: check if a Fund exists with `legacyAlpacaAccountId = <legacy.id>`; if yes, skip; if no, create the Org (or attach to existing) → Fund → BrokerageAccount triple, preserving the legacy id on `BrokerageAccount.id` so foreign keys on `Trade.brokerageAccountId`, `Alert.brokerageAccountId` continue to resolve.
- **Batched & resumable.** Processes in batches of 500 accounts. Writes a per-batch checkpoint to a `backend-legacy/scripts/.backfill-checkpoint.json` file (gitignored). On crash/restart, resumes from the last checkpoint.
- **Bounded runtime.** Order-of-magnitude estimate: production has O(100s) of `AlpacaAccount` rows. The script processes ~500 rows/sec on a single Postgres connection (mostly inserts). Expected total runtime < 5 minutes for prod.
- **Dry-run mode.** `npm run backfill:alpaca-to-brokerage -- --dry-run` writes nothing; prints exactly what it would do, including the synthetic Org/Fund names, slugs, and uniqueness checks.
- **Exits non-zero on any exotic shape** (assumption B4: `AlpacaAccount.userId == null`). Manual remediation required before re-running.
- **Followed by a cleanup migration `<ts>_drop_legacy_backfill_columns`** that drops the four temporary columns from Part 1 once the script has run successfully in prod. Cleanup migration is run only after canary is green; this is sub-project-4 Freeze-time work.

**Operational sequence at cutover:**

1. Sub-project 2 deploys Part 1's migration to staging → paper-prod → prod. (Routine deploy.)
2. Sub-project 4's engine port reaches its parity bar and is ready for canary.
3. Operator runs the backfill script against a snapshot of SR's prod DB, writing to main's prod DB. Verifies row counts. ~5 min.
4. Engine canary brought online (charter §5.3), reads from the now-populated main DB.
5. 7-day canary observation (charter §6).
6. At Freeze: cleanup migration drops the temporary `legacy*` columns.

This split removes the migration anti-pattern, makes the backfill auditable, and keeps the operational runbook (`~/adapticai/docs/superpowers/runbooks/alpacaaccount-backfill.md`, created as part of A1) self-contained.

---

## 5. Codegen / generator improvements (A2)

The SR codegen-generator commits land **after A1 schema work settles** so regeneration runs against the final main schema. Substantive items:

| Commit                                                                                         | Port action                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `refactor(backend-legacy): eliminate any types in generator + regenerate all 63 model files`   | Port: apply the generator-side type fixes; regenerate the 63 model files.                                                                                        |
| `fix(codegen): emit non-nullable createdAt/updatedAt in CRUD create variables`                 | Port to generator.                                                                                                                                               |
| `fix(codegen): emit raw values for JSON scalar fields in update operations`                    | Port.                                                                                                                                                            |
| `fix(generator): use updateWhere for update mutations to prevent unique constraint violations` | Port.                                                                                                                                                            |
| `fix(generator): add validation for empty where clause in findMany operations`                 | Port.                                                                                                                                                            |
| `fix(generator): add configKey to hardcoded unique-field heuristic`                            | Port.                                                                                                                                                            |
| `fix: add skipDuplicates support to createMany and downgrade constraint violation logs`        | Port.                                                                                                                                                            |
| `fix: include non-auto-generated id field in create/upsert mutations`                          | Port.                                                                                                                                                            |
| `fix: add status and type fields to codegen where clause generation`                           | Port.                                                                                                                                                            |
| `fix: add DecimalJSScalar to GRAPHQL_SCALARS in code generator`                                | Port.                                                                                                                                                            |
| `fix: preserve Decimal and other class instances in removeUndefinedProps`                      | Port.                                                                                                                                                            |
| `fix: add bigint scalar to codegen parser and fix findMany response casing`                    | Port.                                                                                                                                                            |
| `fix: optimize GQL selection sets via inline comment curation in schema.prisma`                | Port — apply the `GQL.SKIP=true` / `TYPESTRING.SKIP=true` comment-driven curation to main's schema. Main already uses some of these comments; complete coverage. |

After porting, run `npm run generate` and commit the regenerated outputs. Verify no `any` types in generator output.

---

## 6. Apollo client + pool reliability (A3)

| Commit                                                                                        | Port action                                                       |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `feat(pool): in-flight query coalescing for identical overlapping reads`                      | Port. Critical for engine read throughput.                        |
| `fix(apollo-pool): drop Accelerate 1102 + P2002 retries; add jitter + pool stats`             | Port.                                                             |
| `fix(pool): align Apollo concurrency with Prisma pool (50:35)`                                | Port; verify pool sizing against main's Prisma config.            |
| `fix(client): add queue backpressure to prevent Apollo retry storms`                          | Port.                                                             |
| `fix(client): suppress deleteOne* retry on timeout to prevent starve-read storms`             | Port.                                                             |
| `fix(client): eliminate eager connection creation and add stopClient() for graceful shutdown` | Port.                                                             |
| `fix(stable): use dynamic import() for undici instead of require()`                           | Port.                                                             |
| `fix(stable): add undici keepalive dispatcher to apollo client http link`                     | Port.                                                             |
| `fix(stable): demote expected Prisma race + invalid UUID errors to lower log levels`          | Port.                                                             |
| `fix(stable): demote transient apollo network errors in client onerror link`                  | Port.                                                             |
| `fix(retry): classify network timeouts as retryable in CRUD ops`                              | Port.                                                             |
| `fix: connection pool stability — heartbeat monitor, graceful shutdown, broader retries`      | Port — this is the umbrella patch; verify others compose with it. |

No charter §2 mapping needed; these are infrastructure improvements.

---

## 7. Auth + token verification (A4)

| Commit                                                                                                          | Port action                                                                                                      |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `feat(backend-legacy): verified identity for backend tokens; reject opaque OAuth access tokens [CORTEX-P0-002]` | Port — security-critical.                                                                                        |
| `fix(auth): surface UNAUTHENTICATED reason, pin HS256, prefer local-JWT reason over Google fallback`            | Port.                                                                                                            |
| `fix(server): map UNAUTHENTICATED GraphQL errors to HTTP 401`                                                   | Port.                                                                                                            |
| `fix(server): set extensions.http.status=401 on context-thrown UNAUTHENTICATED`                                 | Port.                                                                                                            |
| `fix: validate UUID format in audit logger extractUserId`                                                       | Port.                                                                                                            |
| `added stable.adaptic.ai to CORS` (+ `os.adaptic.ai`)                                                           | Port — update CORS allowlist on main with both domains, and add `app.adaptic.ai` if main's platform replaces it. |

Decision: replace `stable.adaptic.ai` reference in CORS with **both** `stable.adaptic.ai` (kept for SR consumers until Freeze) **and** `app.adaptic.ai` (or the actual platform main domain). Final list confirmed with sub-project 6 (platform).

---

## 8. Prisma version + dist build setup (A5)

| Commit                                                                                  | Port action                                               |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `fix: upgrade @prisma/client to ^6.19.0 in published package`                           | Already at 6.19.x on main — verify; bump to latest patch. |
| `feat(prisma): add Prisma Accelerate support (prisma:// URL handling)`                  | Port.                                                     |
| `fix: remove Prisma Accelerate dataproxy requirement for direct PostgreSQL connections` | Port.                                                     |
| `fix: remove --no-engine from prisma generate for direct connections`                   | Port.                                                     |
| `fix: add legacy-peer-deps for typegraphql-prisma compatibility`                        | Port to dist install scripts.                             |
| `fix(ci): add --legacy-peer-deps to dist folder install`                                | Port.                                                     |

---

## 9. Logging / observability (A6)

| Commit                                                              | Port action |
| ------------------------------------------------------------------- | ----------- |
| `fix(logs): demote transient DB failures to WARN in generated CRUD` | Port.       |
| `fix(apollo): include operation name in retry and exhaustion logs`  | Port.       |

(Several others overlap A3; tracked there.)

---

## 10. Docs / ESLint institutional-grade (A7)

| Commit                                                                    | Port action                                                                               |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `docs(claude-md): add Ownership & Execution Doctrine`                     | Already on main (commit `ad5d8b6` in meta-repo); verify backend-legacy/CLAUDE.md aligned. |
| `docs(claude-md): integrate GitNexus cross-repo awareness guidance`       | Already on main meta-repo; backend-legacy may need its own version of this guidance.      |
| `chore: upgrade ESLint config to institutional-grade type safety`         | Port.                                                                                     |
| `fix: resolve all lint errors for institutional-grade type safety`        | Port (after ESLint upgrade lands).                                                        |
| `docs: add comprehensive AI engineering docs for backend-legacy God Mode` | Port.                                                                                     |
| `style: apply prettier formatting across docs, eslint, utils`             | Port (cosmetic; do not block on this).                                                    |

---

## 11. Publish & cross-package coordination

Per charter §5:

1. Each area's squash-merge to `main` triggers `npm version <0.x.y-port.N>` and `npm publish --tag next`.
2. Cycle cadence: one `@next` publish per area merged. Typical sequence:
   - A1 lands → publish `<port.1>`.
   - A2 lands → publish `<port.2>`.
   - … through `<port.7>`.
3. Downstream consumption order during the port:
   - `utils` consumes `@adaptic/backend-legacy@next` (sub-project 3).
   - `lumic-utils` consumes (sub-project 3, parallel).
   - `engine` consumes (sub-project 4).
   - `platform` consumes (sub-project 6).
4. Emergency SR hotfix during port: dual-tag publish per charter §5.1. The mirror commit lands on `main` within 24h via the same per-area technique (mostly area A2-A6 will absorb these).

---

## 12. Per-repo parity bar (instantiates charter §6.1)

The repo declares "port-complete" when:

1. **All 7 areas merged to `main`** with their migrations.
2. **CI green on `main`**:
   - `npm run build` — full build (clean + generate + fix-imports + codegen + tsc).
   - ESLint — 0 errors.
   - `npx tsc --noEmit` — 0 errors.
   - `npm test` — all 106 Vitest tests pass (existing on main); plus new tests added in §13 below.
3. **Coverage:** maintained at current main level or higher.
4. **`@adaptic/backend-legacy@<port.7>` published to `@next`**, downstream `integration-contract-validator` agent reports no contract mismatches against engine/utils/platform `main` branches.
5. **Migration smoke test:** apply all new migrations on a snapshot of the prod DB (or a faithful clone); verify backfill is idempotent (run twice; second run is a no-op).
6. **Reviewer sign-off on each of the 7 area PRs** by a human reviewer (not an agent), per charter §3.1.

Note this is sub-project-2 parity. The program-level parity bar (charter §6.2) is satisfied only after sub-projects 3–6 also pass and the 7-day engine canary is green.

---

## 13. Tests to port and add

### 13.1 Ported from SR

The 8 existing Vitest test files on SR's `src/tests/` directory get ported as part of A2 (codegen) and A3 (Apollo pool). Test names referencing `alpacaAccountId` are renamed per §2.1; tests for `TradingPolicy` model become tests for `effectivePolicy()` helper.

### 13.2 New tests required by this port

| Test file                                   | Coverage                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `src/tests/effective-policy.test.ts`        | Deep-merge precedence: defaults → Org → Fund → BA overrides → active overlays.                                |
| `src/tests/effective-llm-config.test.ts`    | Same for LLM config.                                                                                          |
| `src/tests/policy-overlay-expiry.test.ts`   | Active/expired/deactivated filtering; severity-ordered merge.                                                 |
| `src/tests/migrations-idempotency.test.ts`  | Each new migration's backfill is idempotent (second run is no-op).                                            |
| `src/tests/alpacaaccount-backfill.test.ts`  | The §4.9 backfill script produces correct Org/Fund/BA triples for representative legacy AlpacaAccount shapes. |
| `src/tests/token-verifier.test.ts` (extend) | Cover the CORTEX-P0-002 verified-identity changes from A4.                                                    |

Coverage target: the new tests bring the touched modules to ≥ 90% line coverage.

---

## 14. Open questions & assumptions

### 14.1 Assumptions

- **B1.** Main's `Organization`, `Fund`, `BrokerageAccount`, `OrgMembership` schema is final. If sub-project 1 work uncovers a shape change need (e.g. a new column on `Fund` to hold `policyOverlays`), it gets added as part of A1 and noted as an amendment to charter §2.4 if it touches the fund-scope allowlist.
- **B2.** The 8 SR `TradingPolicy` fields deferred to Tier-A (per §4.2.1) are owned by sub-project 4 (engine port). This spec does not block on their migration.
- **B3.** Prod DB has working snapshots that allow the §4.9 backfill to run safely. If snapshots don't exist or aren't faithful, an additional spec for snapshot-creation is required (out of scope here).
- **B4.** No `AlpacaAccount` row exists in prod that lacks a `userId`. Backfill script throws on such rows.
- **B5.** The KMS envelope encryption helper for API keys (in `@adaptic/backend-legacy/helpers/kms-envelope`) is operational on main. If not, A5 includes its port.

### 14.2 Deferred (resolved during execution, not in spec)

- The exact SR-only commit-to-area mapping for the ~92 substantive commits. The §3 area count "~30" / "~13" / etc. are upper-bound estimates; the kickoff PR for this sub-project (see §15) commits an exact appendix.
- Whether to bump the package's major version on cutover (`@adaptic/backend-legacy` 1.x.x → 2.0.0) or keep on the 0.x.y line. Discussed with sub-project 4 maintainer; likely 1.0.0 since the schema is breaking.
- Whether `Customer.riskProfile` becomes a Prisma enum (`CustomerRiskProfile`) in a follow-on spec.

---

## 15. Execution kickoff checklist

When this spec is approved and execution starts, the kickoff PR for sub-project 2 produces:

1. `docs/superpowers/specs/appendices/2026-05-14-backend-legacy-sr-substantive-commits.txt` — exact list from §2.2 query.
2. `docs/superpowers/specs/appendices/2026-05-14-trading-policy-sr-field-mapping.md` — explicit 82-field mapping table referenced in §4.2.1.
3. `port/schema` branch created off `main`, with the 7 migrations from §4.8 scaffolded (empty SQL bodies + naming).
4. `port/codegen`, `port/apollo-pool`, `port/auth-tokens`, `port/prisma-dist`, `port/logging`, `port/docs-lint` branches created.
5. Tracking issue in the backend-legacy repo titled `Sub-project 2: backend-legacy stable-release → main port` linking each area branch.

---

## 16. Glossary

- **SR** — `stable-release` branch.
- **`effectivePolicy()`** — the canonical helper exported from `@adaptic/backend-legacy` that deep-merges defaults → Org → Fund → BrokerageAccount columns → active overlays into a single policy.
- **`@next`** — npm dist-tag used by this sub-project's publishes during the port; charter §5.1.
- **A1–A7** — the seven port areas defined in §3.
- **Tier-A** — engine-local telemetry Postgres data, owned by sub-project 4 (engine port). Not managed by backend-legacy.
