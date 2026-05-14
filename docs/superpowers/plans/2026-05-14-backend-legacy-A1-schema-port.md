# Backend-Legacy Port — Area A1 (Schema Port) Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Land Area A1 of the backend-legacy port: collapse `TradingPolicy`/`LlmConfiguration`/`PolicyOverlay` models into the canonical JSON shapes on `Organization`/`Fund`; port the schema additions SR introduced (`TradeStatus` enum extensions, re-underwriting fields on `Trade`/`Action`, `Customer` KYC fields, `Trade.rejectionMetadata`, per-provider LLM model enums marked `@internal`, indexes); add `Fund.policyOverlays` JSON-array column; ship the `effectivePolicy()` / `effectiveLlmConfig()` / `kms-envelope` helpers with full unit-test coverage; produce the schema-only `prepare_brokerage_account_backfill` migration plus the standalone `backfill-alpacaaccount-to-brokerageaccount.ts` operational script.

**Architecture:** TDD throughout. Each helper / migration / type is built test-first. Migrations are authored on a `port/schema` branch off `main`; each commit includes the schema diff, the codegen regeneration outputs, and the tests that pin behavior. The backfill script is split from the migration (charter-driven anti-pattern avoidance). Reviewer-mandated decision points are encoded as gating steps with checkboxes — A1 cannot squash-merge until the gates are closed.

**Tech Stack:** TypeScript 5.9, Prisma 6.19, TypeGraphQL, Vitest, `@adaptic/backend-legacy`'s existing codegen pipeline (`generate` → `fix-imports` → `generate:selections` → `generate:functions` → `generate:strings`).

**Spec reference:** [`docs/superpowers/specs/2026-05-14-backend-legacy-port-design.md`](../specs/2026-05-14-backend-legacy-port-design.md). All §-references in this plan target that spec.

---

## File Structure (planned)

### Files to create

| Path | Responsibility |
|------|----------------|
| `src/types/trading-policy.ts` | Canonical `TradingPolicyJson` interface (spec §4.2). Exported from `@adaptic/backend-legacy`. |
| `src/types/llm-configuration.ts` | Canonical `LlmConfigurationJson` interface + `EncryptedApiKey` shape (spec §4.3). |
| `src/types/policy-overlay.ts` | `PolicyOverlayEntry` interface (spec §4.4). |
| `src/types/trading-policy.SR-MAPPING.md` | Documentation of the 82-field SR→JSON mapping (spec §4.2.1). Not code. |
| `src/helpers/effective-policy.ts` | `effectivePolicy()` deep-merge helper + selection-set string + error class (spec §4.2.2 + §4.4 extension). |
| `src/helpers/effective-llm-config.ts` | `effectiveLlmConfig()` analogous helper (spec §4.3). |
| `src/helpers/deep-merge.ts` | Pure deep-merge utility used by both effective helpers. |
| `src/helpers/kms-envelope.ts` | `encryptApiKey()` / `decryptApiKey()` envelope-encryption helpers (spec §4.3 wire format). |
| `src/tests/effective-policy.test.ts` | Vitest suite covering precedence chain. |
| `src/tests/effective-llm-config.test.ts` | Vitest suite covering LLM precedence. |
| `src/tests/policy-overlay-expiry.test.ts` | Vitest suite covering overlay filtering + severity sort. |
| `src/tests/deep-merge.test.ts` | Vitest suite for the merge utility. |
| `src/tests/kms-envelope.test.ts` | Vitest suite for encrypt/decrypt round-trip + role-gating. |
| `src/tests/migrations-idempotency.test.ts` | Test that each new migration's backfill is idempotent (second run = no-op). |
| `src/tests/alpacaaccount-backfill.test.ts` | Test that the backfill script produces correct Org/Fund/BA triples. |
| `prisma/migrations/<ts>_add_policy_overlays_fund_field/migration.sql` | Adds `Fund.policyOverlays`. |
| `prisma/migrations/<ts>_add_trade_status_rejections/migration.sql` | Adds 4 enum values. |
| `prisma/migrations/<ts>_add_trade_action_reunderwriting/migration.sql` | Adds `thesisVersion`, `supersededActionId`. |
| `prisma/migrations/<ts>_add_customer_kyc_fields/migration.sql` | Adds 4 KYC fields. |
| `prisma/migrations/<ts>_add_trade_rejection_metadata/migration.sql` | Adds `Trade.rejectionMetadata`. |
| `prisma/migrations/<ts>_add_trade_action_updatedat_indexes/migration.sql` | Adds the perf indexes. |
| `prisma/migrations/<ts>_prepare_brokerage_account_backfill/migration.sql` | Schema-only prep migration (spec §4.9 Part 1). |
| `scripts/backfill-alpacaaccount-to-brokerageaccount.ts` | Standalone backfill (spec §4.9 Part 2). |
| `docs/superpowers/runbooks/alpacaaccount-backfill.md` | Operational runbook (spec §4.9). |

### Files to modify

| Path | Modification |
|------|--------------|
| `prisma/schema.prisma` | Add `Fund.policyOverlays`, 4 `TradeStatus` values, `Trade.thesisVersion`/`supersededActionId`/`rejectionMetadata`, `Action.thesisVersion`/`supersededActionId`, `Customer.{jurisdiction,riskProfile,amlStatus,lastKycUpdate}`, 7 LLM model enums marked `@internal`, indexes, and (in the backfill prep migration) `Fund.legacyAlpacaAccountId`/`synthetic`, `BrokerageAccount.legacyAlpacaAccountId`, `Organization.synthetic`. |
| `src/index.ts` | Export new types + helpers from `@adaptic/backend-legacy`. |
| `package.json` | `npm version <0.x.y-port.1>` bump after A1's migrations land (charter §5). |
| `.gitignore` | Add the per-batch checkpoint file used by the backfill script. |

### Files regenerated by codegen (commit but don't hand-edit)

`src/generated/typegraphql-prisma/**`, `src/generated/selectionSets/**`, `src/generated/typeStrings/**`, every `src/<Model>.ts` CRUD file affected by the schema diff.

---

## Pre-flight gates (must close before any code change)

- [ ] **Gate G1: Sub-project 6 (engine port) has confirmed Tier-A ownership of the 6 policy-shape fields** (spec §4.2.1). Engineer opens the engine port spec, locates the §1 confirmation note, and links it in the A1 PR description. If sub-project 6 has not yet been started, default to `Fund.tradingOverrides.runtime` per the spec's committed fallback (§4.2.1 final paragraph).

- [ ] **Gate G2: `@next` dist-tag has been claimed on npm** for `@adaptic/backend-legacy`. Confirm the tag is reservable (not currently taken by an unrelated branch) via `npm view @adaptic/backend-legacy dist-tags`.

- [ ] **Gate G3: A snapshot of production Postgres exists** for the backfill script to read from at cutover (assumption B3 from the spec §14.1). Coordinate with devops to confirm.

- [ ] **Gate G4: `port/schema` branch cut from `main`** locally: `cd ~/adapticai/backend-legacy && git checkout main && git pull && git checkout -b port/schema`.

---

## Chunk 1: Pure helpers (deep-merge, kms-envelope) — no Prisma touch

These two helpers are pure TypeScript. Build them first, fully tested. They have no dependency on the schema or codegen.

### Task 1: `deep-merge` utility

**Files:**
- Create: `src/helpers/deep-merge.ts`
- Test: `src/tests/deep-merge.test.ts`

- [ ] **Step 1: Write failing tests for `deepMerge`**

```typescript
// src/tests/deep-merge.test.ts
import { describe, it, expect } from 'vitest';
import { deepMerge } from '../helpers/deep-merge';

describe('deepMerge', () => {
  it('merges flat object properties', () => {
    expect(deepMerge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  it('right side overrides left side', () => {
    expect(deepMerge({ a: 1, b: 2 }, { b: 3 })).toEqual({ a: 1, b: 3 });
  });

  it('deep-merges nested objects', () => {
    expect(deepMerge({ a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } }))
      .toEqual({ a: { x: 1, y: 3, z: 4 } });
  });

  it('right side overrides arrays (does not concat)', () => {
    expect(deepMerge({ a: [1, 2] }, { a: [3] })).toEqual({ a: [3] });
  });

  it('null on right side overrides left value with null', () => {
    expect(deepMerge({ a: 1 }, { a: null })).toEqual({ a: null });
  });

  it('undefined on right side is treated as absent (left value retained)', () => {
    expect(deepMerge({ a: 1 }, { a: undefined })).toEqual({ a: 1 });
  });

  it('does not mutate inputs', () => {
    const left = { a: { x: 1 } };
    const right = { a: { y: 2 } };
    deepMerge(left, right);
    expect(left).toEqual({ a: { x: 1 } });
    expect(right).toEqual({ a: { y: 2 } });
  });
});
```

- [ ] **Step 2: Run tests, verify they fail**

Run: `npx vitest run src/tests/deep-merge.test.ts`
Expected: All 7 tests FAIL with `Cannot find module '../helpers/deep-merge'`.

- [ ] **Step 3: Implement `deepMerge`**

```typescript
// src/helpers/deep-merge.ts
type Plain = Record<string, unknown>;

const isPlainObject = (v: unknown): v is Plain =>
  v !== null && typeof v === 'object' && !Array.isArray(v);

/**
 * Pure, non-mutating deep merge.
 * - Plain objects merge recursively.
 * - Arrays and scalars: right side replaces.
 * - `undefined` on the right is treated as absent.
 * - `null` on the right overrides to null.
 */
export const deepMerge = <T extends Plain, U extends Plain>(
  left: T,
  right: U,
): T & U => {
  const out: Plain = { ...left };
  for (const key of Object.keys(right)) {
    const rv = right[key];
    if (rv === undefined) continue;
    const lv = out[key];
    if (isPlainObject(lv) && isPlainObject(rv)) {
      out[key] = deepMerge(lv, rv);
    } else {
      out[key] = rv;
    }
  }
  return out as T & U;
};
```

- [ ] **Step 4: Run tests, verify all pass**

Run: `npx vitest run src/tests/deep-merge.test.ts`
Expected: 7 passed.

- [ ] **Step 5: Commit**

```bash
git add src/helpers/deep-merge.ts src/tests/deep-merge.test.ts
git commit -m "feat(helpers): add deepMerge utility with non-mutating semantics"
```

### Task 2: `kms-envelope` encrypt/decrypt round-trip

**Files:**
- Create: `src/helpers/kms-envelope.ts`, `src/helpers/kms-envelope.kms-adapter.ts`
- Test: `src/tests/kms-envelope.test.ts`

The implementation uses AES-256-GCM with a per-record IV. The DEK is generated per-record and wrapped by a KMS key id read from env (`KMS_KEY_ID`). Unit tests mock the KMS wrap/unwrap to a deterministic transform; real KMS integration is wired at runtime to AWS KMS / GCP KMS / equivalent via the adapter module.

- [ ] **Step 1: Write failing tests covering encrypt→decrypt round-trip, tamper detection, env-var enforcement**

Suggested test cases (executing agent writes them in TDD style):

| Case | Asserts |
|------|---------|
| `encryptApiKey` produces a valid `EncryptedApiKey` envelope | `algorithm === 'AES-256-GCM'`, `keyId === MOCK_KEY_ID`, all base64 fields, `createdAt` is ISO. |
| `decryptApiKey` round-trips `encryptApiKey` | `decrypt(encrypt('sk-secret')) === 'sk-secret'`. |
| Decrypt of tampered ciphertext throws | A single-byte mutation in the base64 ciphertext causes the GCM auth tag to fail. |
| Encrypt throws if `KMS_KEY_ID` unset | Sentinel error mentioning `KMS_KEY_ID`. |

Use `vi.mock('../helpers/kms-envelope.kms-adapter', ...)` to stub the wrap/unwrap with a deterministic transform.

- [ ] **Step 2: Run tests, verify failure**

Run: `npx vitest run src/tests/kms-envelope.test.ts`
Expected: tests fail with `Cannot find module '../helpers/kms-envelope'`.

- [ ] **Step 3: Implement `kms-envelope`**

```typescript
// src/helpers/kms-envelope.ts
import { randomBytes, createCipheriv, createDecipheriv } from 'node:crypto';
import { kmsWrap, kmsUnwrap } from './kms-envelope.kms-adapter';

export interface EncryptedApiKey {
  ciphertext: string;   // base64
  iv: string;           // base64 (12 bytes)
  authTag: string;      // base64 (16 bytes)
  keyId: string;        // KMS key id used
  wrappedDek: string;   // base64 of KMS-wrapped DEK
  algorithm: 'AES-256-GCM';
  createdAt: string;    // ISO-8601
}

const requireKeyId = (): string => {
  const k = process.env.KMS_KEY_ID;
  if (!k) throw new Error('KMS_KEY_ID env var is required for kms-envelope');
  return k;
};

export const encryptApiKey = async (plaintext: string): Promise<EncryptedApiKey> => {
  const keyId = requireKeyId();
  const dek = randomBytes(32);                  // 256-bit key
  const iv = randomBytes(12);                   // 96-bit IV for GCM
  const cipher = createCipheriv('aes-256-gcm', dek, iv);
  const ct = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();
  const wrapped = await kmsWrap(dek, keyId);
  return {
    ciphertext: ct.toString('base64'),
    iv: iv.toString('base64'),
    authTag: authTag.toString('base64'),
    keyId,
    wrappedDek: wrapped.toString('base64'),
    algorithm: 'AES-256-GCM',
    createdAt: new Date().toISOString(),
  };
};

export const decryptApiKey = async (env: EncryptedApiKey): Promise<string> => {
  if (env.algorithm !== 'AES-256-GCM') {
    throw new Error(`Unsupported algorithm: ${env.algorithm}`);
  }
  const dek = await kmsUnwrap(Buffer.from(env.wrappedDek, 'base64'), env.keyId);
  const iv = Buffer.from(env.iv, 'base64');
  const authTag = Buffer.from(env.authTag, 'base64');
  const ct = Buffer.from(env.ciphertext, 'base64');
  const decipher = createDecipheriv('aes-256-gcm', dek, iv);
  decipher.setAuthTag(authTag);
  return Buffer.concat([decipher.update(ct), decipher.final()]).toString('utf8');
};
```

```typescript
// src/helpers/kms-envelope.kms-adapter.ts
// Real implementation calls AWS KMS / GCP KMS / equivalent.
// Unit tests mock this module to provide deterministic wrap/unwrap.

export const kmsWrap = async (dek: Buffer, keyId: string): Promise<Buffer> => {
  throw new Error(
    'kmsWrap not wired to a real KMS provider. Mock this module in tests, ' +
    'or wire to AWS KMS via @aws-sdk/client-kms (or @google-cloud/kms).',
  );
};

export const kmsUnwrap = async (wrapped: Buffer, keyId: string): Promise<Buffer> => {
  throw new Error(
    'kmsUnwrap not wired to a real KMS provider. Mock this module in tests, ' +
    'or wire to AWS KMS via @aws-sdk/client-kms (or @google-cloud/kms).',
  );
};
```

- [ ] **Step 4: Run tests, verify all pass**

Run: `npx vitest run src/tests/kms-envelope.test.ts`
Expected: all pass.

- [ ] **Step 5: Commit**

```bash
git add src/helpers/kms-envelope.ts src/helpers/kms-envelope.kms-adapter.ts src/tests/kms-envelope.test.ts
git commit -m "feat(helpers): add kms-envelope encryption wire-format with AES-256-GCM"
```

---

## Chunk 2: Type definitions (no Prisma touch)

### Task 3: `TradingPolicyJson` type

**Files:**
- Create: `src/types/trading-policy.ts`
- Test: covered by Task 5 (`effective-policy.test.ts`).

- [ ] **Step 1: Write the type file** (spec §4.2 verbatim; canonical interface)

```typescript
// src/types/trading-policy.ts
export interface TradingPolicyJson {
  autonomy?: {
    enableAutoEntry?: boolean;
    enableAutoExit?: boolean;
    enableAutoRebalance?: boolean;
    requireHumanApprovalAboveNotional?: number;
  };
  risk?: {
    maxPortfolioVarPct?: number;
    maxSinglePositionPct?: number;
    maxSectorExposurePct?: number;
    maxAssetClassPct?: { equity?: number; crypto?: number; options?: number };
    minBuyingPowerReservePct?: number;
  };
  allocation?: {
    perTradeEquityPct?: number;
    perTradeCryptoPct?: number;
    perTradeOptionsPct?: number;
    autoAllocation?: boolean;
  };
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
  compliance?: {
    equityWashTradeCooldownMs?: number;
    restrictedTickerOverrides?: string[];
    requireAuditLogForAll?: boolean;
  };
  assetClasses?: { equity?: boolean; crypto?: boolean; options?: boolean };
  sentiment?: {
    minSentimentScoreToEnter?: number;
    maxNegativeSentimentToHold?: number;
    requireRecentNews?: boolean;
    newsLookbackMinutes?: number;
  };
  backtest?: {
    defaultUniverse?: string[];
    defaultPeriodDays?: number;
    defaultStrategyId?: string;
  };
  /**
   * Engine runtime config. Populated by sub-project 2's fallback path
   * (spec §4.2.1) when sub-project 6 has not yet committed to owning
   * EngineFundConfig in Tier-A. Removed in a later port if/when
   * sub-project 6 promotes these fields.
   */
  runtime?: {
    enginePersonalityProfile?: string;
    signalRoutingRules?: unknown;
    manualOverrideAllowlist?: string[];
    riskOverrideJustifications?: unknown[];
    enableShadowMode?: boolean;
    experimentBucket?: string | null;
  };
}

/** Built-in safe defaults consumed by effectivePolicy(). */
export const DEFAULT_TRADING_POLICY: Required<TradingPolicyJson> = {
  autonomy: {
    enableAutoEntry: false,
    enableAutoExit: true,
    enableAutoRebalance: false,
    requireHumanApprovalAboveNotional: 100_000,
  },
  risk: {
    maxPortfolioVarPct: 0.05,
    maxSinglePositionPct: 0.10,
    maxSectorExposurePct: 0.30,
    maxAssetClassPct: { equity: 1.0, crypto: 0.2, options: 0.2 },
    minBuyingPowerReservePct: 0.05,
  },
  allocation: {
    perTradeEquityPct: 0.05,
    perTradeCryptoPct: 0.05,
    perTradeOptionsPct: 0.02,
    autoAllocation: true,
  },
  scalping: {
    enableScalping: false,
    maxConcurrentScalps: 0,
    minHoldSeconds: 0,
    maxHoldSeconds: 0,
    profitTargetBps: 0,
    stopLossBps: 0,
    requireRSIConfirm: false,
    requireMACDConfirm: false,
    requireVolumeSurge: false,
    cooldownAfterLossMs: 0,
    cooldownAfterWinMs: 0,
    maxScalpsPerSession: 0,
  },
  compliance: {
    equityWashTradeCooldownMs: 0,
    restrictedTickerOverrides: [],
    requireAuditLogForAll: true,
  },
  assetClasses: { equity: true, crypto: false, options: false },
  sentiment: {
    minSentimentScoreToEnter: 0,
    maxNegativeSentimentToHold: -0.5,
    requireRecentNews: false,
    newsLookbackMinutes: 1440,
  },
  backtest: {
    defaultUniverse: [],
    defaultPeriodDays: 30,
    defaultStrategyId: '',
  },
  runtime: {
    enginePersonalityProfile: 'balanced',
    signalRoutingRules: null,
    manualOverrideAllowlist: [],
    riskOverrideJustifications: [],
    enableShadowMode: false,
    experimentBucket: null,
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add src/types/trading-policy.ts
git commit -m "feat(types): add TradingPolicyJson interface and DEFAULT_TRADING_POLICY"
```

### Task 4: `LlmConfigurationJson` and `PolicyOverlayEntry` types

**Files:**
- Create: `src/types/llm-configuration.ts`, `src/types/policy-overlay.ts`

- [ ] **Step 1: Write `LlmConfigurationJson`** (spec §4.3 verbatim)

```typescript
// src/types/llm-configuration.ts
import type { EncryptedApiKey } from '../helpers/kms-envelope';

export type LlmProvider =
  | 'OPENAI' | 'ANTHROPIC' | 'DEEPSEEK'
  | 'KIMI'   | 'QWEN'      | 'XAI'      | 'GEMINI';

export interface LlmConfigurationJson {
  defaultProvider?: LlmProvider;
  miniProvider?: LlmProvider;
  normalProvider?: LlmProvider;
  advancedProvider?: LlmProvider;
  miniModel?: string;
  normalModel?: string;
  advancedModel?: string;
  /** Per-provider keys; values are EncryptedApiKey envelopes at rest. */
  apiKeys?: Partial<Record<Lowercase<LlmProvider>, EncryptedApiKey>>;
}

export const DEFAULT_LLM_CONFIGURATION: Required<Omit<LlmConfigurationJson, 'apiKeys'>> & {
  apiKeys: NonNullable<LlmConfigurationJson['apiKeys']>;
} = {
  defaultProvider: 'OPENAI',
  miniProvider: 'OPENAI',
  normalProvider: 'OPENAI',
  advancedProvider: 'ANTHROPIC',
  miniModel: 'gpt-5.5',
  normalModel: 'gpt-5',
  advancedModel: 'claude-opus-4-7',
  apiKeys: {},
};
```

- [ ] **Step 2: Write `PolicyOverlayEntry`** (spec §4.4 verbatim)

```typescript
// src/types/policy-overlay.ts
import type { TradingPolicyJson } from './trading-policy';

export type OverlayType =
  | 'RISK_GATE' | 'NEWS_GATE' | 'COMPLIANCE_GATE'
  | 'MANUAL_HALT' | 'CIRCUIT_BREAKER';

export type OverlaySeverity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type OverlayStatus = 'ACTIVE' | 'EXPIRED' | 'DEACTIVATED';

export interface PolicyOverlayEntry {
  id: string;
  overlayType: OverlayType;
  source: string;
  reason: string;
  severity: OverlaySeverity;
  mutations: Partial<TradingPolicyJson>;
  status: OverlayStatus;
  activatedAt: string;
  expiresAt?: string;
  deactivatedAt?: string;
  deactivatedBy?: string;
  correlationId?: string;
  triggerEventId?: string;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/types/llm-configuration.ts src/types/policy-overlay.ts
git commit -m "feat(types): add LlmConfigurationJson and PolicyOverlayEntry"
```

---

## Chunk 3: Effective-policy helper + tests

### Task 5: `effectivePolicy()` with full precedence chain

**Files:**
- Create: `src/helpers/effective-policy.ts`
- Test: `src/tests/effective-policy.test.ts`, `src/tests/policy-overlay-expiry.test.ts`

- [ ] **Step 1: Write failing tests covering all 6 precedence steps**

Required test cases (the executing agent writes the Vitest implementations):

| Case | Asserts |
|------|---------|
| Defaults only | `effectivePolicy(ba).risk.maxPortfolioVarPct === DEFAULT_TRADING_POLICY.risk.maxPortfolioVarPct` when Org/Fund supply nothing. |
| Org defaults override built-ins | `tradingDefaults: { risk: { maxPortfolioVarPct: 0.10 } }` flows through. |
| Fund overrides override Org | `Fund.tradingOverrides` wins over `Organization.tradingDefaults`. |
| BA columns surface alongside JSON | The 14 BA-column fields show up on the returned object (not in the JSON merge). |
| Missing `fund.organization` relation throws `EffectivePolicyContextError` | Error message references the selection-set helper. |
| Missing `fund.policyOverlays` relation throws `EffectivePolicyContextError` | Error message references the selection-set helper. |
| Result is `Object.isFrozen(result) === true` | Returned object is frozen. |

Plus the overlay-specific tests (in `policy-overlay-expiry.test.ts`):

| Case | Asserts |
|------|---------|
| `ACTIVE` overlay with no `expiresAt` applies | Mutations flow through. |
| `EXPIRED` overlay does NOT apply | Mutations have no effect. |
| `ACTIVE` overlay with past `expiresAt` does not apply | Mutations have no effect. |
| Severity ordering | `CRITICAL` last (highest precedence) overrides `MEDIUM` and `LOW`. |

- [ ] **Step 2: Run tests, verify failure**

Run: `npx vitest run src/tests/effective-policy.test.ts src/tests/policy-overlay-expiry.test.ts`
Expected: tests fail with `Cannot find module '../helpers/effective-policy'`.

- [ ] **Step 3: Implement `effectivePolicy()`**

```typescript
// src/helpers/effective-policy.ts
import { deepMerge } from './deep-merge';
import {
  DEFAULT_TRADING_POLICY,
  type TradingPolicyJson,
} from '../types/trading-policy';
import type { PolicyOverlayEntry, OverlaySeverity } from '../types/policy-overlay';

export class EffectivePolicyContextError extends Error {
  constructor(field: string) {
    super(
      `effectivePolicy(): missing relation \`${field}\`. ` +
      `Fetch with brokerageAccountWithPolicyContextSelectionSet ` +
      `(see @adaptic/backend-legacy docs).`,
    );
    this.name = 'EffectivePolicyContextError';
  }
}

const BA_COLUMN_FIELDS = [
  'enablePortfolioTrailingStop', 'portfolioTrailPercent',
  'portfolioProfitThresholdPercent', 'reducedPortfolioTrailPercent',
  'defaultTrailingStopPercentage100', 'firstTrailReductionThreshold100',
  'secondTrailReductionThreshold100', 'firstReducedTrailPercentage100',
  'secondReducedTrailPercentage100', 'minimumPriceChangePercent100',
  'cryptoTradingEnabled', 'cryptoTradingPairs',
  'tradeAllocationPct', 'cryptoTradeAllocationPct',
] as const;

type BACol = (typeof BA_COLUMN_FIELDS)[number];

export interface BrokerageAccountWithPolicyContext {
  id: string;
  fund: {
    id: string;
    tradingOverrides: TradingPolicyJson | null;
    policyOverlays: PolicyOverlayEntry[] | null;
    organization: {
      id: string;
      tradingDefaults: TradingPolicyJson | null;
    };
  };
  enablePortfolioTrailingStop: boolean;
  portfolioTrailPercent: number;
  portfolioProfitThresholdPercent: number;
  reducedPortfolioTrailPercent: number;
  defaultTrailingStopPercentage100: number;
  firstTrailReductionThreshold100: number;
  secondTrailReductionThreshold100: number;
  firstReducedTrailPercentage100: number;
  secondReducedTrailPercentage100: number;
  minimumPriceChangePercent100: number;
  cryptoTradingEnabled: boolean;
  cryptoTradingPairs: string[];
  tradeAllocationPct: number;
  cryptoTradeAllocationPct: number;
}

const severityRank: Record<OverlaySeverity, number> = {
  LOW: 0, MEDIUM: 1, HIGH: 2, CRITICAL: 3,
};

/**
 * Canonical selection-set string for use with adaptic.brokerageAccount.get().
 * Loads fund + fund.organization + fund.policyOverlays in one query.
 */
export const brokerageAccountWithPolicyContextSelectionSet = `
  id
  enablePortfolioTrailingStop portfolioTrailPercent portfolioProfitThresholdPercent
  reducedPortfolioTrailPercent defaultTrailingStopPercentage100
  firstTrailReductionThreshold100 secondTrailReductionThreshold100
  firstReducedTrailPercentage100 secondReducedTrailPercentage100
  minimumPriceChangePercent100 cryptoTradingEnabled cryptoTradingPairs
  tradeAllocationPct cryptoTradeAllocationPct
  fund {
    id tradingOverrides policyOverlays
    organization { id tradingDefaults }
  }
`;

export function effectivePolicy(
  ba: BrokerageAccountWithPolicyContext,
): Required<TradingPolicyJson> & Record<BACol, unknown> {
  if (!ba.fund) throw new EffectivePolicyContextError('fund');
  if (!ba.fund.organization) throw new EffectivePolicyContextError('fund.organization');
  if (ba.fund.policyOverlays === undefined) {
    throw new EffectivePolicyContextError('fund.policyOverlays');
  }

  // Step 1: defaults
  let policy: TradingPolicyJson = { ...DEFAULT_TRADING_POLICY };

  // Step 2: Org defaults
  if (ba.fund.organization.tradingDefaults) {
    policy = deepMerge(policy, ba.fund.organization.tradingDefaults);
  }

  // Step 3: Fund overrides
  if (ba.fund.tradingOverrides) {
    policy = deepMerge(policy, ba.fund.tradingOverrides);
  }

  // Step 4: Active overlays, severity-sorted (CRITICAL last → highest precedence)
  const now = new Date();
  const active = (ba.fund.policyOverlays ?? [])
    .filter((o) =>
      o.status === 'ACTIVE' &&
      (o.expiresAt == null || new Date(o.expiresAt) > now),
    )
    .sort((a, b) => severityRank[a.severity] - severityRank[b.severity]);
  for (const overlay of active) {
    policy = deepMerge(policy, overlay.mutations);
  }

  // Step 5: BA column overrides (the 14 fields stay alongside the JSON)
  const baCols: Record<BACol, unknown> = {} as Record<BACol, unknown>;
  for (const f of BA_COLUMN_FIELDS) {
    baCols[f] = (ba as unknown as Record<BACol, unknown>)[f];
  }

  // Step 6: freeze and return
  return Object.freeze({ ...(policy as Required<TradingPolicyJson>), ...baCols });
}
```

- [ ] **Step 4: Run tests, verify all pass**

Run: `npx vitest run src/tests/effective-policy.test.ts src/tests/policy-overlay-expiry.test.ts`
Expected: all pass.

- [ ] **Step 5: Commit**

```bash
git add src/helpers/effective-policy.ts src/tests/effective-policy.test.ts src/tests/policy-overlay-expiry.test.ts
git commit -m "feat(helpers): add effectivePolicy() with org→fund→overlay→BA precedence"
```

### Task 6: `effectiveLlmConfig()` helper

**Files:**
- Create: `src/helpers/effective-llm-config.ts`
- Test: `src/tests/effective-llm-config.test.ts`

- [ ] **Step 1: Write failing tests** covering: default fallthrough, Org override, Fund override, per-provider key merge (not whole-replace), frozen return.

- [ ] **Step 2: Run, verify failure**

- [ ] **Step 3: Implement**

```typescript
// src/helpers/effective-llm-config.ts
import { deepMerge } from './deep-merge';
import { DEFAULT_LLM_CONFIGURATION, type LlmConfigurationJson } from '../types/llm-configuration';

interface FundWithLlmContext {
  id: string;
  llmOverrides: LlmConfigurationJson | null;
  organization: { id: string; llmDefaults: LlmConfigurationJson | null };
}

export function effectiveLlmConfig(
  fund: FundWithLlmContext,
): Required<Omit<LlmConfigurationJson, 'apiKeys'>> & {
  apiKeys: NonNullable<LlmConfigurationJson['apiKeys']>;
} {
  let cfg: LlmConfigurationJson = { ...DEFAULT_LLM_CONFIGURATION };
  if (fund.organization.llmDefaults) cfg = deepMerge(cfg, fund.organization.llmDefaults);
  if (fund.llmOverrides) cfg = deepMerge(cfg, fund.llmOverrides);
  return Object.freeze(cfg) as ReturnType<typeof effectiveLlmConfig>;
}
```

- [ ] **Step 4: Run tests, verify all pass**

- [ ] **Step 5: Commit**

```bash
git add src/helpers/effective-llm-config.ts src/tests/effective-llm-config.test.ts
git commit -m "feat(helpers): add effectiveLlmConfig() with org→fund precedence"
```

---

## Chunk 4: Prisma schema updates + migrations

### Task 7: Update `prisma/schema.prisma`

**Files:**
- Modify: `prisma/schema.prisma`

All additive on `main`. Sub-tasks (one schema edit + one regenerate + one commit per coherent group):

- [ ] **Step 1: Add `Fund.policyOverlays Json?`** with JSDoc referencing spec §4.4.

- [ ] **Step 2: Add 4 `TradeStatus` enum values** (`SUPERSEDED`, `REJECTED_BROKER`, `REJECTED_COMPLIANCE`, `FAILED`) with SEC Rule 15c3-5 forensic-record comments.

- [ ] **Step 3: Add `Trade.thesisVersion`, `Trade.supersededActionId` + index, `Trade.rejectionMetadata`**.

- [ ] **Step 4: Add `Action.thesisVersion`, `Action.supersededActionId` + index**.

- [ ] **Step 5: Add `Customer.{jurisdiction, riskProfile, amlStatus, lastKycUpdate}`**.

- [ ] **Step 6: Add `@@index([updatedAt])` on `Trade` and `Action`**.

- [ ] **Step 7: Add 7 LLM model enums (`OpenaiModel`, `AnthropicModel`, `DeepseekModel`, `KimiModel`, `QwenModel`, `XaiModel`, `GeminiModel`) marked `/// @internal`**. Values: copy verbatim from `git show origin/stable-release:prisma/schema.prisma`.

- [ ] **Step 8: Run `npm run validate:schema`** — expects clean validation.

- [ ] **Step 9: Run `npm run build`** — expects all 8 pipeline steps succeed.

- [ ] **Step 10: Run `npx tsc --noEmit`** — expects 0 errors.

- [ ] **Step 11: Commit schema + regenerated files**

```bash
git add prisma/schema.prisma src/generated/ src/*.ts
git commit -m "feat(schema): add policy overlays, TradeStatus rejections, re-underwriting, KYC, indexes, LLM model enums"
```

### Tasks 8–14: One single-purpose migration per task

Each migration follows the same pattern: write SQL → apply locally → verify rollback shape → commit.

- [ ] **Task 8: `<ts>_add_policy_overlays_fund_field` — `ALTER TABLE "funds" ADD COLUMN "policyOverlays" JSONB;`**
- [ ] **Task 9: `<ts>_add_trade_status_rejections` — `ALTER TYPE "TradeStatus" ADD VALUE IF NOT EXISTS '<value>';` for each of the 4 values**
- [ ] **Task 10: `<ts>_add_trade_action_reunderwriting` — adds `thesisVersion INT NOT NULL DEFAULT 1`, `supersededActionId UUID NULL` + index, on both `trades` and `actions`. Backfill `thesisVersion = 1` for existing rows is implicit via the DEFAULT.**
- [ ] **Task 11: `<ts>_add_customer_kyc_fields` — adds 4 nullable columns to `customers`**
- [ ] **Task 12: `<ts>_add_trade_rejection_metadata` — adds `rejectionMetadata JSONB NULL`**
- [ ] **Task 13: `<ts>_add_trade_action_updatedat_indexes` — adds two `CREATE INDEX` statements**

Each task:
1. Run `npm run migrate:dev` after writing SQL.
2. Verify migration applied without errors.
3. Commit with message `feat(migration): <description>`.

### Task 14: Run final codegen + idempotency assertion

- [ ] **Step 1: Run `npm run build`**
Expected: clean.

- [ ] **Step 2: Apply migrations against a snapshot DB twice; verify second run reports "no pending migrations"**

This is documented in `src/tests/migrations-idempotency.test.ts` (created in Task 18 below). For now, run manually:

```bash
npm run migrate
npm run migrate   # should report no pending
```

---

## Chunk 5: Schema-only backfill prep migration + standalone backfill script

### Task 15: Migration `<ts>_prepare_brokerage_account_backfill` (spec §4.9 Part 1)

**Files:**
- Modify: `prisma/schema.prisma` (add the 4 temp columns + 2 synthetic flags)
- Create: `prisma/migrations/<ts>_prepare_brokerage_account_backfill/migration.sql`

- [ ] **Step 1: Add temp columns to schema** (with JSDoc marking them `TEMPORARY (dropped at Freeze)`):
  - `Fund.legacyAlpacaAccountId String? @unique` + `Fund.synthetic Boolean @default(false)`
  - `BrokerageAccount.legacyAlpacaAccountId String? @unique`
  - `Organization.synthetic Boolean @default(false)`

- [ ] **Step 2: Write migration SQL**

```sql
-- <ts>_prepare_brokerage_account_backfill
ALTER TABLE "funds" ADD COLUMN "legacyAlpacaAccountId" TEXT;
ALTER TABLE "funds" ADD CONSTRAINT "funds_legacyAlpacaAccountId_key" UNIQUE ("legacyAlpacaAccountId");
ALTER TABLE "funds" ADD COLUMN "synthetic" BOOLEAN NOT NULL DEFAULT FALSE;

ALTER TABLE "organizations" ADD COLUMN "synthetic" BOOLEAN NOT NULL DEFAULT FALSE;

ALTER TABLE "brokerage_accounts" ADD COLUMN "legacyAlpacaAccountId" TEXT;
ALTER TABLE "brokerage_accounts" ADD CONSTRAINT "brokerage_accounts_legacyAlpacaAccountId_key" UNIQUE ("legacyAlpacaAccountId");
```

- [ ] **Step 3: Apply, regenerate, commit**

```bash
npm run migrate:dev && npm run build
git add prisma/schema.prisma prisma/migrations/<ts>_prepare_brokerage_account_backfill/ src/generated/ src/Fund.ts src/Organization.ts src/BrokerageAccount.ts
git commit -m "feat(migration): add temp legacyAlpacaAccountId columns + synthetic flags for backfill"
```

### Task 16: Standalone backfill script

**Files:**
- Create: `scripts/backfill-alpacaaccount-to-brokerageaccount.ts`
- Modify: `.gitignore` (add the checkpoint file path)
- Test: `src/tests/alpacaaccount-backfill.test.ts`

The script is standalone (charter-driven anti-pattern avoidance — does NOT run inside a Prisma migration `up()`). It is idempotent, batched, resumable, and supports dry-run mode.

- [ ] **Step 1: Write failing tests against an injectable `BackfillContext`**

Required cases:

| Case | Asserts |
|------|---------|
| Creates synthetic Org + Fund + BA for a personal legacy account with no existing org | Org created with `synthetic = true`, OrgMembership with `role = OWNER`, Fund created, BA created preserving the legacy id. |
| Attaches BA to existing user's existing org if one exists | No new Org is created; new Fund + BA under existing Org. |
| Idempotent | Second run returns `skipped == created` from first run; `processed == count`. |
| Throws on `userId == null` | Sentinel error message identifies the offending legacy id. |
| Dry-run writes nothing | Asserts no DB mutations performed; logs reflect what would happen. |
| Checkpoint resumes from mid-batch failure | Inject a failure mid-batch; second run resumes from `lastProcessedId`. |

- [ ] **Step 2: Run tests, verify failure**

Run: `npx vitest run src/tests/alpacaaccount-backfill.test.ts`
Expected: fails with `Cannot find module ../scripts/backfill-alpacaaccount-to-brokerageaccount`.

- [ ] **Step 3: Implement backfill script**

```typescript
// scripts/backfill-alpacaaccount-to-brokerageaccount.ts
import fs from 'node:fs/promises';
import path from 'node:path';

export interface LegacyAlpacaAccount {
  id: string;
  userId: string | null;
  type: 'PAPER' | 'LIVE';
  APIKey: string;
  APISecret: string;
  configuration: unknown;
  marketOpen: boolean;
  realTime: boolean;
  enablePortfolioTrailingStop: boolean;
  portfolioTrailPercent: number;
  portfolioProfitThresholdPercent: number;
  reducedPortfolioTrailPercent: number;
  defaultTrailingStopPercentage100: number;
  firstTrailReductionThreshold100: number;
  secondTrailReductionThreshold100: number;
  firstReducedTrailPercentage100: number;
  secondReducedTrailPercentage100: number;
  minimumPriceChangePercent100: number;
  cryptoTradingEnabled: boolean;
  cryptoTradingPairs: string[];
  tradeAllocationPct: number;
  cryptoTradeAllocationPct: number;
}

const CHECKPOINT_PATH = path.resolve(__dirname, '.backfill-checkpoint.json');
const BATCH_SIZE = 500;

interface Checkpoint { lastProcessedId: string | null; processedCount: number; }

const loadCheckpoint = async (): Promise<Checkpoint> => {
  try {
    const raw = await fs.readFile(CHECKPOINT_PATH, 'utf8');
    return JSON.parse(raw) as Checkpoint;
  } catch {
    return { lastProcessedId: null, processedCount: 0 };
  }
};

const saveCheckpoint = async (c: Checkpoint): Promise<void> => {
  await fs.writeFile(CHECKPOINT_PATH, JSON.stringify(c, null, 2));
};

export interface BackfillContext {
  legacy: { list: (afterId: string | null, limit: number) => Promise<LegacyAlpacaAccount[]> };
  main: {
    findFundByLegacyId: (id: string) => Promise<{ id: string } | null>;
    findOrgForUser: (userId: string) => Promise<{ id: string } | null>;
    createPersonalOrgWithMembership: (userId: string, name: string) => Promise<{ id: string }>;
    createFund: (input: {
      organizationId: string;
      legacyAlpacaAccountId: string;
      name: string;
      slug: string;
      status: 'ACTIVE' | 'PAUSED';
    }) => Promise<{ id: string }>;
    createBrokerageAccount: (input: {
      id: string;
      fundId: string;
      legacyAlpacaAccountId: string;
      provider: 'ALPACA';
      legacy: LegacyAlpacaAccount;
    }) => Promise<{ id: string }>;
  };
  logger: {
    info: (m: string, ctx?: unknown) => void;
    warn: (m: string, ctx?: unknown) => void;
    error: (m: string, ctx?: unknown) => void;
  };
  dryRun: boolean;
}

export const runBackfill = async (
  ctx: BackfillContext,
): Promise<{ processed: number; skipped: number; created: number }> => {
  let checkpoint = await loadCheckpoint();
  let processed = 0;
  let skipped = 0;
  let created = 0;

  while (true) {
    const batch = await ctx.legacy.list(checkpoint.lastProcessedId, BATCH_SIZE);
    if (batch.length === 0) break;

    for (const legacy of batch) {
      if (legacy.userId == null) {
        throw new Error(
          `Legacy AlpacaAccount ${legacy.id} has null userId; cannot backfill. ` +
          `Remediate manually before re-running.`,
        );
      }

      const existing = await ctx.main.findFundByLegacyId(legacy.id);
      if (existing) {
        skipped++;
        checkpoint = { lastProcessedId: legacy.id, processedCount: ++processed };
        continue;
      }

      if (ctx.dryRun) {
        ctx.logger.info('DRY-RUN would create', { legacyId: legacy.id, userId: legacy.userId });
        processed++;
        continue;
      }

      const org =
        (await ctx.main.findOrgForUser(legacy.userId)) ??
        (await ctx.main.createPersonalOrgWithMembership(
          legacy.userId,
          `personal-${legacy.userId.slice(0, 8)}`,
        ));

      const fund = await ctx.main.createFund({
        organizationId: org.id,
        legacyAlpacaAccountId: legacy.id,
        name: `Fund-${legacy.id.slice(0, 8)}`,
        slug: legacy.id,
        status: legacy.realTime ? 'ACTIVE' : 'PAUSED',
      });

      await ctx.main.createBrokerageAccount({
        id: legacy.id, // preserve id so existing FK references resolve
        fundId: fund.id,
        legacyAlpacaAccountId: legacy.id,
        provider: 'ALPACA',
        legacy,
      });

      created++;
      processed++;
      checkpoint = { lastProcessedId: legacy.id, processedCount: processed };
    }

    if (!ctx.dryRun) await saveCheckpoint(checkpoint);
  }

  ctx.logger.info(`Backfill complete: processed=${processed} skipped=${skipped} created=${created}`);
  return { processed, skipped, created };
};

// CLI entrypoint — only when invoked directly
if (require.main === module) {
  // Wire to real Prisma clients, parse --dry-run, etc.
  // This guard prevents tests from invoking real DB work.
}
```

- [ ] **Step 4: Update `.gitignore`**

Add this line:

```
scripts/.backfill-checkpoint.json
```

- [ ] **Step 5: Run tests, verify pass**

Run: `npx vitest run src/tests/alpacaaccount-backfill.test.ts`
Expected: all pass.

- [ ] **Step 6: Commit**

```bash
git add scripts/backfill-alpacaaccount-to-brokerageaccount.ts src/tests/alpacaaccount-backfill.test.ts .gitignore
git commit -m "feat(scripts): add idempotent batched backfill from legacy AlpacaAccount to BrokerageAccount"
```

### Task 17: Runbook for backfill

**Files:**
- Create: `docs/superpowers/runbooks/alpacaaccount-backfill.md`

- [ ] **Step 1: Write runbook** covering:
  - Prerequisites (snapshot DB exists; new dist-tag published; backfill prep migration applied).
  - Dry-run command (`npm run backfill:alpaca-to-brokerage -- --dry-run`).
  - Real-run command (`npm run backfill:alpaca-to-brokerage`).
  - Monitoring (checkpoint file; logger output).
  - Rollback procedure (drop synthetic Orgs/Funds/BAs created in the run; restore from snapshot).
  - Post-success cleanup (the eventual drop of `legacyAlpacaAccountId` columns, scheduled for Freeze).

- [ ] **Step 2: Commit**

```bash
git add docs/superpowers/runbooks/alpacaaccount-backfill.md
git commit -m "docs(runbook): add alpacaaccount-backfill operational runbook"
```

---

## Chunk 6: Export surface + integration testing

### Task 18: Update `src/index.ts` to export new types + helpers

- [ ] **Step 1: Add exports** (additions only):

```typescript
// src/index.ts (additions)
export type { TradingPolicyJson } from './types/trading-policy';
export { DEFAULT_TRADING_POLICY } from './types/trading-policy';

export type { LlmConfigurationJson, LlmProvider } from './types/llm-configuration';
export { DEFAULT_LLM_CONFIGURATION } from './types/llm-configuration';

export type {
  PolicyOverlayEntry, OverlayType, OverlaySeverity, OverlayStatus,
} from './types/policy-overlay';

export {
  effectivePolicy,
  EffectivePolicyContextError,
  brokerageAccountWithPolicyContextSelectionSet,
} from './helpers/effective-policy';

export { effectiveLlmConfig } from './helpers/effective-llm-config';

export type { EncryptedApiKey } from './helpers/kms-envelope';
export { encryptApiKey, decryptApiKey } from './helpers/kms-envelope';
```

- [ ] **Step 2: Run `npm run build`** — Expected: clean.

- [ ] **Step 3: Smoke-test consumption from `dist/`** by writing a temporary `dist-smoke.ts` file in `scripts/`, building, and running it via `node`. Assert: `effectivePolicy` is a function, `Object.keys(DEFAULT_TRADING_POLICY).length === 10`. Delete the smoke file after verifying.

- [ ] **Step 4: Commit**

```bash
git add src/index.ts
git commit -m "feat(api): export effectivePolicy, effectiveLlmConfig, kms-envelope, types from package root"
```

### Task 19: Migration-idempotency assertion test

**Files:**
- Create: `src/tests/migrations-idempotency.test.ts`

The CLAUDE.md project rules forbid `child_process.exec()`. Use the project's `execFileNoThrow` utility if it exists, or `child_process.spawnSync` with `shell: false` and an argv array. Sketch:

```typescript
// src/tests/migrations-idempotency.test.ts
import { describe, it, expect } from 'vitest';
import { spawnSync } from 'node:child_process';

const runMigrate = (): { stdout: string; stderr: string; status: number | null } => {
  const r = spawnSync('npm', ['run', 'migrate', '--', '--skip-seed'], {
    encoding: 'utf8',
    shell: false,
  });
  return { stdout: r.stdout ?? '', stderr: r.stderr ?? '', status: r.status };
};

describe('migrations idempotency', () => {
  it('applying all migrations twice is idempotent', () => {
    const first = runMigrate();
    expect(first.status).toBe(0);
    const second = runMigrate();
    expect(second.status).toBe(0);
    expect(second.stdout).toMatch(/No pending migrations/i);
  });
});
```

- [ ] **Step 1: Write test, run, verify pass**

Run: `npx vitest run src/tests/migrations-idempotency.test.ts`
Expected: pass.

- [ ] **Step 2: Commit**

```bash
git add src/tests/migrations-idempotency.test.ts
git commit -m "test(migrations): assert migrations are idempotent on second apply"
```

---

## Chunk 7: Final validation + publish to `@next`

### Task 20: Full pipeline + lint + typecheck + test sweep

- [ ] **Step 1: Run `npm run build`** — all 8 pipeline steps succeed.
- [ ] **Step 2: Run `npm run lint`** — 0 errors. (If new lint errors appear from generated code, the codegen change needs adjustment — investigate; do NOT add eslint-disable per CLAUDE.md.)
- [ ] **Step 3: Run `npx tsc --noEmit`** — 0 errors.
- [ ] **Step 4: Run `npm test`** — all tests pass. Coverage maintained ≥ 60% lines / 50% functions / 40% branches.

### Task 21: Publish `@next`

- [ ] **Step 1: Bump version**

```bash
npm version 1.0.0-port.1 --no-git-tag-version
```

- [ ] **Step 2: Publish**

```bash
npm publish --tag next --access public
```

- [ ] **Step 3: Verify**

```bash
npm view @adaptic/backend-legacy dist-tags
```

Expected: `next: 1.0.0-port.1` (and existing `latest: 0.0.X` preserved).

- [ ] **Step 4: Commit version bump**

```bash
git add package.json
git commit -m "chore(release): publish 1.0.0-port.1 to @next (sub-project 2 A1)"
```

### Task 22: Open PR + reviewer sign-off

- [ ] **Step 1: Push branch**

```bash
git push -u origin port/schema
```

- [ ] **Step 2: Open PR `port(backend-legacy/schema): A1 schema port — collapse TradingPolicy/PolicyOverlay/LlmConfiguration into JSON + effective helpers + backfill script`**

PR body must include:

```markdown
## Inheritance
- Parent spec: docs/superpowers/specs/2026-05-14-backend-legacy-port-design.md (Area A1)
- Charter: ~/adapticai/docs/superpowers/specs/2026-05-14-stable-release-to-main-program-charter.md

## Pre-merge gates (closed)
- [ ] G1: Sub-project 6 (engine port) has confirmed Tier-A ownership of the 6 policy-shape fields
  (link to sub-project 6 spec §1 confirmation OR confirm default fallback to Fund.tradingOverrides.runtime is acceptable)
- [ ] G2: `@next` dist-tag claimed
- [ ] G3: Production snapshot exists for cutover backfill
- [ ] G4: Branch from main, fully synced

## Reviewer checklist (per spec §12 and charter §3.1)
- [ ] Human reviewer sign-off (not an agent)
- [ ] integration-contract-validator agent run reports no breakage against engine + utils + platform main
- [ ] Migration smoke test passes on a snapshot of prod DB
- [ ] backfill script dry-run passes on a snapshot of prod DB
```

- [ ] **Step 3: Iterate on reviewer feedback** — fix → re-review until approved.

### Task 23: Squash-merge to `main`

- [ ] Squash-merge with commit message `port(backend-legacy/schema): A1 schema port + effective helpers + backfill (Refs: <SR commit range>)`.
- [ ] Verify `engine-main-canary` rebuilds and starts cleanly with the new `@adaptic/backend-legacy@next`.

---

## Post-A1 Tasks (next plans)

After A1 squash-merges to `main`, A2–A7 are planned as separate documents in this directory:

- `2026-05-14-backend-legacy-A2-codegen.md` — generator improvements (13 commits).
- `2026-05-14-backend-legacy-A3-apollo-pool.md` — pool reliability (12 commits).
- `2026-05-14-backend-legacy-A4-auth-tokens.md` — CORTEX-P0-002 etc. (8 commits).
- `2026-05-14-backend-legacy-A5-prisma-dist.md` — Prisma version + dist (6 commits).
- `2026-05-14-backend-legacy-A6-logging.md` — observability (5 commits).
- `2026-05-14-backend-legacy-A7-docs-lint.md` — institutional-grade lint sweep (5 commits).

Each follows the same TDD + bite-sized-step structure as this A1 plan.

---

## Done criteria

A1 is complete when all of:

1. Tasks 1–23 above checked off.
2. `@adaptic/backend-legacy@1.0.0-port.1` published to `@next`.
3. CI green on `main`: build, lint, typecheck, tests.
4. `integration-contract-validator` reports no breakage against engine + utils + platform main.
5. Per-spec parity bar item 1 (A1) checked.
