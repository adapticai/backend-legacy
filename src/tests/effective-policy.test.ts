import { describe, it, expect } from 'vitest';
import {
  effectivePolicy,
  EffectivePolicyContextError,
  type BrokerageAccountWithPolicyContext,
} from '../helpers/effective-policy';
import { DEFAULT_TRADING_POLICY } from '../types/trading-policy';

const baseBa = (): BrokerageAccountWithPolicyContext =>
  ({
    id: 'ba-1',
    enablePortfolioTrailingStop: true,
    portfolioTrailPercent: 3.0,
    portfolioProfitThresholdPercent: 1.5,
    reducedPortfolioTrailPercent: 0.4,
    defaultTrailingStopPercentage100: 3.5,
    firstTrailReductionThreshold100: 1.8,
    secondTrailReductionThreshold100: 4.5,
    firstReducedTrailPercentage100: 0.9,
    secondReducedTrailPercentage100: 0.45,
    minimumPriceChangePercent100: 0.4,
    cryptoTradingEnabled: false,
    cryptoTradingPairs: [],
    tradeAllocationPct: 0.04,
    cryptoTradeAllocationPct: 0.03,
    fund: {
      id: 'fund-1',
      tradingOverrides: null,
      policyOverlays: [],
      organization: { id: 'org-1', tradingDefaults: null },
    },
  }) satisfies BrokerageAccountWithPolicyContext;

describe('effectivePolicy', () => {
  it('returns DEFAULT_TRADING_POLICY when org/fund/BA contribute nothing', () => {
    const ba = baseBa();
    const p = effectivePolicy(ba);
    expect(p.autonomy.enableAutoEntry).toBe(
      DEFAULT_TRADING_POLICY.autonomy.enableAutoEntry
    );
    expect(p.risk.maxPortfolioVarPct).toBe(
      DEFAULT_TRADING_POLICY.risk.maxPortfolioVarPct
    );
  });

  it('Org.tradingDefaults overrides built-in defaults', () => {
    const ba = baseBa();
    ba.fund.organization.tradingDefaults = {
      risk: { maxPortfolioVarPct: 0.1 },
    };
    expect(effectivePolicy(ba).risk.maxPortfolioVarPct).toBe(0.1);
  });

  it('Fund.tradingOverrides overrides Org.tradingDefaults', () => {
    const ba = baseBa();
    ba.fund.organization.tradingDefaults = {
      risk: { maxPortfolioVarPct: 0.1 },
    };
    ba.fund.tradingOverrides = { risk: { maxPortfolioVarPct: 0.07 } };
    expect(effectivePolicy(ba).risk.maxPortfolioVarPct).toBe(0.07);
  });

  it('BA column overrides surface alongside JSON', () => {
    const ba = baseBa();
    const p = effectivePolicy(ba);
    expect(p.enablePortfolioTrailingStop).toBe(true);
    expect(p.portfolioTrailPercent).toBe(3.0);
    expect(p.tradeAllocationPct).toBe(0.04);
  });

  it('throws EffectivePolicyContextError when fund.organization missing', () => {
    const ba = baseBa();
    (ba.fund as { organization: undefined }).organization = undefined;
    expect(() => effectivePolicy(ba)).toThrow(EffectivePolicyContextError);
  });

  it('throws EffectivePolicyContextError when fund.policyOverlays is undefined (selection-set bug)', () => {
    const ba = baseBa();
    (ba.fund as { policyOverlays: undefined }).policyOverlays = undefined;
    expect(() => effectivePolicy(ba)).toThrow(EffectivePolicyContextError);
  });

  it('returns a frozen object', () => {
    const ba = baseBa();
    const p = effectivePolicy(ba);
    expect(Object.isFrozen(p)).toBe(true);
  });
});
