import { deepMerge } from './deep-merge';
import {
  DEFAULT_TRADING_POLICY,
  type TradingPolicyJson,
} from '../types/trading-policy';
import type {
  PolicyOverlayEntry,
  OverlaySeverity,
} from '../types/policy-overlay';

/**
 * Thrown when a caller invokes effectivePolicy() with a
 * BrokerageAccount whose required relations (`fund.organization`,
 * `fund.policyOverlays`) were not loaded by the selection set. We do
 * not silently fall back to defaults — silent fall-back hides bugs.
 */
export class EffectivePolicyContextError extends Error {
  constructor(field: string) {
    super(
      `effectivePolicy(): missing relation \`${field}\`. ` +
        `Fetch with brokerageAccountWithPolicyContextSelectionSet ` +
        `(see @adaptic/backend-legacy docs).`
    );
    this.name = 'EffectivePolicyContextError';
  }
}

/**
 * The 14 BrokerageAccount column fields preserved per charter §2.2.
 * Read directly from the entity, not from the JSON merge.
 */
const BA_COLUMN_FIELDS = [
  'enablePortfolioTrailingStop',
  'portfolioTrailPercent',
  'portfolioProfitThresholdPercent',
  'reducedPortfolioTrailPercent',
  'defaultTrailingStopPercentage100',
  'firstTrailReductionThreshold100',
  'secondTrailReductionThreshold100',
  'firstReducedTrailPercentage100',
  'secondReducedTrailPercentage100',
  'minimumPriceChangePercent100',
  'cryptoTradingEnabled',
  'cryptoTradingPairs',
  'tradeAllocationPct',
  'cryptoTradeAllocationPct',
] as const;

type BACol = (typeof BA_COLUMN_FIELDS)[number];

/**
 * The relation shape effectivePolicy() requires. Consumers must fetch
 * with the selection set below to populate these correctly.
 */
export interface BrokerageAccountWithPolicyContext {
  id: string;
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
  fund: {
    id: string;
    tradingOverrides: TradingPolicyJson | null;
    policyOverlays: PolicyOverlayEntry[] | null;
    organization: {
      id: string;
      tradingDefaults: TradingPolicyJson | null;
    };
  };
}

const severityRank: Record<OverlaySeverity, number> = {
  LOW: 0,
  MEDIUM: 1,
  HIGH: 2,
  CRITICAL: 3,
};

/**
 * Canonical selection-set string for `adaptic.brokerageAccount.get(id, …)`.
 * Loads fund + fund.organization + fund.policyOverlays in one query.
 *
 * Consumers should pass this verbatim to fetch a BrokerageAccount
 * suitable for effectivePolicy().
 */
export const brokerageAccountWithPolicyContextSelectionSet = `
  id
  enablePortfolioTrailingStop
  portfolioTrailPercent
  portfolioProfitThresholdPercent
  reducedPortfolioTrailPercent
  defaultTrailingStopPercentage100
  firstTrailReductionThreshold100
  secondTrailReductionThreshold100
  firstReducedTrailPercentage100
  secondReducedTrailPercentage100
  minimumPriceChangePercent100
  cryptoTradingEnabled
  cryptoTradingPairs
  tradeAllocationPct
  cryptoTradeAllocationPct
  fund {
    id
    tradingOverrides
    policyOverlays
    organization { id tradingDefaults }
  }
`;

/**
 * Deep-merges DEFAULT_TRADING_POLICY → Org.tradingDefaults →
 * Fund.tradingOverrides → active Fund.policyOverlays (severity-sorted)
 * → 14 BrokerageAccount column fields into a single canonical
 * `Required<TradingPolicyJson>` plus the 14 column overrides.
 *
 * Consumers MUST use this helper — do not re-implement the precedence
 * chain. The result is frozen.
 *
 * @throws EffectivePolicyContextError if `fund.organization` or
 *   `fund.policyOverlays` is missing (selection-set bug).
 */
export function effectivePolicy(
  ba: BrokerageAccountWithPolicyContext
): Required<TradingPolicyJson> & Record<BACol, unknown> {
  if (!ba.fund) throw new EffectivePolicyContextError('fund');
  if (!ba.fund.organization) {
    throw new EffectivePolicyContextError('fund.organization');
  }
  if (ba.fund.policyOverlays === undefined) {
    throw new EffectivePolicyContextError('fund.policyOverlays');
  }

  // 1) defaults
  let policy: TradingPolicyJson = { ...DEFAULT_TRADING_POLICY };

  // 2) Org defaults
  if (ba.fund.organization.tradingDefaults) {
    policy = deepMerge(
      policy as Record<string, unknown>,
      ba.fund.organization.tradingDefaults as Record<string, unknown>
    ) as TradingPolicyJson;
  }

  // 3) Fund overrides
  if (ba.fund.tradingOverrides) {
    policy = deepMerge(
      policy as Record<string, unknown>,
      ba.fund.tradingOverrides as Record<string, unknown>
    ) as TradingPolicyJson;
  }

  // 4) Active overlays (severity-sorted; CRITICAL last → highest precedence)
  const now = new Date();
  const active = (ba.fund.policyOverlays ?? [])
    .filter(
      (o) =>
        o.status === 'ACTIVE' &&
        (o.expiresAt == null || new Date(o.expiresAt) > now)
    )
    .sort((a, b) => severityRank[a.severity] - severityRank[b.severity]);
  for (const overlay of active) {
    policy = deepMerge(
      policy as Record<string, unknown>,
      overlay.mutations as Record<string, unknown>
    ) as TradingPolicyJson;
  }

  // 5) BA column overrides (the 14 fields stay alongside the JSON)
  const baCols: Record<BACol, unknown> = {} as Record<BACol, unknown>;
  for (const f of BA_COLUMN_FIELDS) {
    baCols[f] = (ba as unknown as Record<BACol, unknown>)[f];
  }

  // 6) freeze and return
  return Object.freeze({
    ...(policy as Required<TradingPolicyJson>),
    ...baCols,
  });
}
