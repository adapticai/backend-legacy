-- 20260514000001_add_policy_overlays_fund_field
-- Per sub-project 2 plan A1/Task 8.
-- Adds Fund.policyOverlays JSONB column for charter §2.4 F4 active
-- policy overlays. Steady-state ≤ 20 entries — engine archiver removes
-- inactive entries to Tier-A PolicyOverlayHistory.

ALTER TABLE "funds" ADD COLUMN "policyOverlays" JSONB;
