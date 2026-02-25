-- CreateEnum: AlertCategory
CREATE TYPE "AlertCategory" AS ENUM ('EVENT_RISK', 'MARKET_RISK', 'SYSTEM', 'TRADE', 'PORTFOLIO');

-- AlterTable: Add missing columns to alerts
ALTER TABLE "alerts"
ADD COLUMN "title" TEXT,
ADD COLUMN "severity" "AlertSeverity" NOT NULL DEFAULT 'MEDIUM',
ADD COLUMN "category" "AlertCategory" NOT NULL DEFAULT 'SYSTEM',
ADD COLUMN "acknowledgedAt" TIMESTAMP(3),
ADD COLUMN "resolvedAt" TIMESTAMP(3),
ADD COLUMN "suppressedUntil" TIMESTAMP(3),
ADD COLUMN "retryCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN "metadata" JSONB;
