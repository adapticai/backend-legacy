import { describe, it, expect } from 'vitest';
import {
  effectivePolicy,
  type BrokerageAccountWithPolicyContext,
} from '../helpers/effective-policy';
import type { PolicyOverlayEntry } from '../types/policy-overlay';

const makeOverlay = (
  over: Partial<PolicyOverlayEntry>
): PolicyOverlayEntry => ({
  id: 'o-1',
  overlayType: 'RISK_GATE',
  source: 'test',
  reason: 'test',
  severity: 'MEDIUM',
  mutations: {},
  status: 'ACTIVE',
  activatedAt: new Date().toISOString(),
  ...over,
});

const baWith = (
  overlays: PolicyOverlayEntry[]
): BrokerageAccountWithPolicyContext =>
  ({
    id: 'ba-1',
    enablePortfolioTrailingStop: false,
    portfolioTrailPercent: 4,
    portfolioProfitThresholdPercent: 2,
    reducedPortfolioTrailPercent: 0.5,
    defaultTrailingStopPercentage100: 4,
    firstTrailReductionThreshold100: 2,
    secondTrailReductionThreshold100: 5,
    firstReducedTrailPercentage100: 1,
    secondReducedTrailPercentage100: 0.5,
    minimumPriceChangePercent100: 0.5,
    cryptoTradingEnabled: false,
    cryptoTradingPairs: [],
    tradeAllocationPct: 0.05,
    cryptoTradeAllocationPct: 0.05,
    fund: {
      id: 'fund-1',
      tradingOverrides: null,
      policyOverlays: overlays,
      organization: { id: 'org-1', tradingDefaults: null },
    },
  }) satisfies BrokerageAccountWithPolicyContext;

describe('policy overlays inside effectivePolicy', () => {
  it('ACTIVE overlay with no expiresAt applies', () => {
    const ba = baWith([
      makeOverlay({
        mutations: {
          autonomy: { requireHumanApprovalAboveNotional: 1 },
        },
      }),
    ]);
    expect(effectivePolicy(ba).autonomy.requireHumanApprovalAboveNotional).toBe(
      1
    );
  });

  it('EXPIRED overlay does NOT apply', () => {
    const ba = baWith([
      makeOverlay({
        status: 'EXPIRED',
        mutations: {
          autonomy: { requireHumanApprovalAboveNotional: 1 },
        },
      }),
    ]);
    // Falls through to DEFAULT_TRADING_POLICY value
    expect(effectivePolicy(ba).autonomy.requireHumanApprovalAboveNotional).toBe(
      100_000
    );
  });

  it('overlay with past expiresAt does NOT apply', () => {
    const past = new Date(Date.now() - 60_000).toISOString();
    const ba = baWith([
      makeOverlay({
        expiresAt: past,
        mutations: {
          autonomy: { requireHumanApprovalAboveNotional: 1 },
        },
      }),
    ]);
    expect(effectivePolicy(ba).autonomy.requireHumanApprovalAboveNotional).toBe(
      100_000
    );
  });

  it('CRITICAL severity overrides HIGH which overrides MEDIUM which overrides LOW', () => {
    const ba = baWith([
      makeOverlay({
        id: 'low',
        severity: 'LOW',
        mutations: {
          autonomy: { requireHumanApprovalAboveNotional: 1000 },
        },
      }),
      makeOverlay({
        id: 'crit',
        severity: 'CRITICAL',
        mutations: {
          autonomy: { requireHumanApprovalAboveNotional: 5 },
        },
      }),
      makeOverlay({
        id: 'med',
        severity: 'MEDIUM',
        mutations: {
          autonomy: { requireHumanApprovalAboveNotional: 500 },
        },
      }),
      makeOverlay({
        id: 'high',
        severity: 'HIGH',
        mutations: {
          autonomy: { requireHumanApprovalAboveNotional: 100 },
        },
      }),
    ]);
    // CRITICAL applies last → wins
    expect(effectivePolicy(ba).autonomy.requireHumanApprovalAboveNotional).toBe(
      5
    );
  });
});
