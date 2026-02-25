-- Convert Trade.timestamp from String to DateTime
-- MIGRATION RISK: This migration attempts to convert existing string timestamps to DateTime.
-- If any existing timestamp strings are not parseable as ISO 8601 or PostgreSQL-compatible
-- timestamps, the migration will fail. The CASE statement provides NULL fallback for unparseable
-- values, but you should verify data quality before running this migration in production.
--
-- Recommended: Run a data quality check first:
-- SELECT id, timestamp FROM "Trade" WHERE timestamp IS NOT NULL AND timestamp !~ '^\d{4}-\d{2}-\d{2}';

-- AlterTable
ALTER TABLE "trades" ALTER COLUMN "timestamp" TYPE TIMESTAMP(3)
  USING CASE
    WHEN "timestamp" IS NULL THEN NULL
    WHEN "timestamp" ~ '^\d{4}-\d{2}-\d{2}' THEN "timestamp"::timestamptz
    ELSE NULL
  END;
