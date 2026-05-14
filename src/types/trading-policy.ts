/**
 * Canonical TradingPolicyJson shape stored at:
 *   Organization.tradingDefaults  (org-wide defaults)
 *   Fund.tradingOverrides         (fund-level overrides)
 *
 * Read-time merging is precedence-ordered (charter §2.2, spec §4.2.2):
 *   built-in DEFAULT_TRADING_POLICY → Org.tradingDefaults
 *     → Fund.tradingOverrides → active Fund.policyOverlays
 *     → 14 per-BrokerageAccount column overrides
 *
 * Consumers MUST use `effectivePolicy()` from
 * `@adaptic/backend-legacy/helpers/effective-policy` — do NOT
 * re-implement the precedence chain.
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
    /** Maximum portfolio Value-at-Risk as a fraction (0..1). */
    maxPortfolioVarPct?: number;
    /** Maximum single-position weight as a fraction (0..1). */
    maxSinglePositionPct?: number;
    /** Maximum sector exposure as a fraction (0..1). */
    maxSectorExposurePct?: number;
    /** Per-asset-class caps as fractions of NAV. */
    maxAssetClassPct?: {
      equity?: number;
      crypto?: number;
      options?: number;
    };
    /** Minimum buying-power reserve as a fraction (0..1). */
    minBuyingPowerReservePct?: number;
  };

  /** Per-trade allocation defaults (SR's tradeAllocationPct collapsed here). */
  allocation?: {
    perTradeEquityPct?: number;
    perTradeCryptoPct?: number;
    perTradeOptionsPct?: number;
    autoAllocation?: boolean;
  };

  /** Scalping / intraday-specific policy (12 W3-3 fields from SR commit 10b63819d). */
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
    /** FINRA 5210 wash-trade cooldown in milliseconds. */
    equityWashTradeCooldownMs?: number;
    /** Tickers explicitly excluded from autonomous trading. */
    restrictedTickerOverrides?: string[];
    /** Force AuditLog row creation on every order. */
    requireAuditLogForAll?: boolean;
  };

  /** Asset-class enablement (defaults set in DEFAULT_TRADING_POLICY). */
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

  /** Backtest scope (fund-scope per charter §2.4 F7). */
  backtest?: {
    defaultUniverse?: string[];
    defaultPeriodDays?: number;
    defaultStrategyId?: string;
  };

  /**
   * Engine runtime config (charter §2.4 F1/F8/F9 catch-all).
   *
   * Populated when sub-project 6 (engine port) has not yet committed
   * to owning `EngineFundConfig` in Tier-A. Carries the 6 SR
   * `TradingPolicy` policy-shape fields that have no canonical JSON
   * home: enginePersonalityProfile, signalRoutingRules,
   * manualOverrideAllowlist, riskOverrideJustifications,
   * enableShadowMode, experimentBucket.
   *
   * If/when sub-project 6 promotes these to Tier-A, this group can be
   * migrated out and removed.
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

/**
 * Built-in safe defaults consumed by effectivePolicy() as the
 * lowest-precedence layer. Tunings here are conservative and broadly
 * safe; `@adaptic/utils` re-exports a more tuned variant for short-horizon
 * day trading (see utils U1 plan).
 */
export const DEFAULT_TRADING_POLICY: Required<TradingPolicyJson> = {
  autonomy: {
    enableAutoEntry: false,
    enableAutoExit: true,
    enableAutoRebalance: false,
    requireHumanApprovalAboveNotional: 100_000,
  },
  risk: {
    maxPortfolioVarPct: 0.05,
    maxSinglePositionPct: 0.1,
    maxSectorExposurePct: 0.3,
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
