-- AlterTable: Add new allocation fields
ALTER TABLE "allocations"
ADD COLUMN "equities" DOUBLE PRECISION NOT NULL DEFAULT 70,
ADD COLUMN "forex" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN "futures" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN "optionsContracts" DOUBLE PRECISION NOT NULL DEFAULT 5;

-- Data Migration: Copy existing data from legacy fields to new fields
-- This preserves existing allocation configurations during the migration
UPDATE "allocations" SET
  "equities" = COALESCE("stocks", 70),
  "optionsContracts" = COALESCE("options", 10)
WHERE "stocks" IS NOT NULL OR "options" IS NOT NULL;

-- AlterTable: Make legacy fields nullable and update crypto default
ALTER TABLE "allocations"
ALTER COLUMN "stocks" DROP NOT NULL,
ALTER COLUMN "crypto" SET DEFAULT 15,
ALTER COLUMN "options" DROP NOT NULL;

-- AlterTable: Add autoAllocation field to AlpacaAccount
ALTER TABLE "alpaca_accounts" ADD COLUMN     "autoAllocation" BOOLEAN NOT NULL DEFAULT true;

-- Comment: The legacy 'stocks' and 'options' fields are kept for backward compatibility
-- but should be migrated to use 'equities' and 'optionsContracts' in application code.
