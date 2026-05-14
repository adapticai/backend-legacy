-- 20260514000002_add_trade_status_rejections
-- Per sub-project 2 plan A1/Task 9.
-- Adds 4 enum values to TradeStatus for SEC Rule 15c3-5 forensic-record
-- retention of rejected/superseded/failed trades.
--
-- Postgres requires ALTER TYPE ADD VALUE outside a transaction.

ALTER TYPE "TradeStatus" ADD VALUE IF NOT EXISTS 'SUPERSEDED';
ALTER TYPE "TradeStatus" ADD VALUE IF NOT EXISTS 'REJECTED_BROKER';
ALTER TYPE "TradeStatus" ADD VALUE IF NOT EXISTS 'REJECTED_COMPLIANCE';
ALTER TYPE "TradeStatus" ADD VALUE IF NOT EXISTS 'FAILED';
