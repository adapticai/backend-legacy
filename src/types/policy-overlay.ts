import type { TradingPolicyJson } from './trading-policy';

export type OverlayType =
  | 'RISK_GATE'
  | 'NEWS_GATE'
  | 'COMPLIANCE_GATE'
  | 'MANUAL_HALT'
  | 'CIRCUIT_BREAKER';

export type OverlaySeverity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export type OverlayStatus = 'ACTIVE' | 'EXPIRED' | 'DEACTIVATED';

/**
 * Active and recent policy overlays stored on `Fund.policyOverlays`
 * (Json[] column) per charter §2.4 F4 and spec §4.4.
 *
 * `effectivePolicy()` filters this list to entries where
 * `status === 'ACTIVE' && (expiresAt == null || expiresAt > now)`,
 * sorts by severity ascending (CRITICAL last → highest precedence),
 * and deep-merges each overlay's `mutations` over the policy chain.
 *
 * On every status flip away from ACTIVE the engine archiver moves
 * the entry to Tier-A `PolicyOverlayHistory` and removes it from this
 * array atomically (one DB transaction). Steady-state size ≤ 20.
 */
export interface PolicyOverlayEntry {
  /** UUID for cross-referencing with Tier-A PolicyOverlayHistory. */
  id: string;
  overlayType: OverlayType;
  /** Source service that activated this overlay (e.g. "engine.risk.var-breach"). */
  source: string;
  /** Human-readable reason; surfaced in alerts. */
  reason: string;
  severity: OverlaySeverity;
  /** Policy paths to override while ACTIVE. */
  mutations: Partial<TradingPolicyJson>;
  status: OverlayStatus;
  /** ISO-8601 activation timestamp. */
  activatedAt: string;
  /** ISO-8601 expiry timestamp; absence means "until manually deactivated". */
  expiresAt?: string;
  deactivatedAt?: string;
  deactivatedBy?: string;
  /** Correlation id linking this overlay to the event that triggered it. */
  correlationId?: string;
  triggerEventId?: string;
}
