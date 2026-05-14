-- 20260514000005_add_trade_rejection_metadata
-- Per sub-project 2 plan A1/Task 12.
-- Adds Trade.rejectionMetadata JSONB for SEC Rule 15c3-5 forensic records
-- on REJECTED_BROKER / REJECTED_COMPLIANCE / FAILED status transitions.

ALTER TABLE "trades" ADD COLUMN "rejectionMetadata" JSONB;
