/*
  Warnings:

  - You are about to drop the `Action` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AlpacaAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StopLoss` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TakeProfit` table. If the table is not empty, all the data it contains will be lost.
*/

-- Step 1: Drop Foreign Key Constraints
ALTER TABLE "Action" DROP CONSTRAINT "Action_tradeId_fkey";
ALTER TABLE "AlpacaAccount" DROP CONSTRAINT "AlpacaAccount_userId_fkey";
ALTER TABLE "Position" DROP CONSTRAINT "Position_alpacaAccountId_fkey";
ALTER TABLE "StopLoss" DROP CONSTRAINT "StopLoss_orderId_fkey";
ALTER TABLE "TakeProfit" DROP CONSTRAINT "TakeProfit_orderId_fkey";
ALTER TABLE "alerts" DROP CONSTRAINT "alerts_alpacaAccountId_fkey";
ALTER TABLE "orders" DROP CONSTRAINT "orders_actionId_fkey";
ALTER TABLE "orders" DROP CONSTRAINT "orders_alpacaAccountId_fkey";
ALTER TABLE "trades" DROP CONSTRAINT "trades_alpacaAccountId_fkey";

-- Step 2: Rename Old Tables to Temporary Names to Preserve Data
ALTER TABLE "AlpacaAccount" RENAME TO "AlpacaAccount_old";
ALTER TABLE "Action" RENAME TO "Action_old";
ALTER TABLE "StopLoss" RENAME TO "StopLoss_old";
ALTER TABLE "TakeProfit" RENAME TO "TakeProfit_old";

-- Step 3: Create New Tables with Updated Structures
CREATE TABLE "alpaca_accounts" (
    "id" UUID NOT NULL,
    "type" "AlpacaAccountType" NOT NULL DEFAULT 'PAPER',
    "APIKey" TEXT NOT NULL,
    "APISecret" TEXT NOT NULL,
    "configuration" JSONB,
    "marketOpen" BOOLEAN NOT NULL DEFAULT false,
    "minOrderSize" DOUBLE PRECISION NOT NULL DEFAULT 500,
    "maxOrderSize" DOUBLE PRECISION NOT NULL DEFAULT 100000,
    "minPercentageChange" DOUBLE PRECISION NOT NULL DEFAULT 0.01,
    "volumeThreshold" DOUBLE PRECISION NOT NULL DEFAULT 50000,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alpaca_accounts_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "actions" (
    "id" UUID NOT NULL,
    "sequence" INTEGER NOT NULL,
    "tradeId" UUID NOT NULL,
    "type" "ActionType" NOT NULL,
    "note" TEXT NOT NULL,
    "status" "ActionStatus" NOT NULL DEFAULT 'STAGED',
    "fee" DOUBLE PRECISION,

    CONSTRAINT "actions_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "stop_losses" (
    "id" UUID NOT NULL,
    "stopPrice" DOUBLE PRECISION,
    "limitPrice" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderId" UUID NOT NULL,

    CONSTRAINT "stop_losses_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "take_profits" (
    "id" UUID NOT NULL,
    "limitPrice" DOUBLE PRECISION,
    "stopPrice" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderId" UUID NOT NULL,

    CONSTRAINT "take_profits_pkey" PRIMARY KEY ("id")
);

-- Step 4: Migrate Data from Old Tables to New Tables
-- Insert into alpaca_accounts
INSERT INTO "alpaca_accounts" (
    "id",
    "type",
    "APIKey",
    "APISecret",
    "configuration",
    "marketOpen",
    "minOrderSize",
    "maxOrderSize",
    "minPercentageChange",
    "volumeThreshold",
    "userId",
    "createdAt",
    "updatedAt"
)
SELECT
    "id",
    "type",
    "APIKey",
    "APISecret",
    "configuration",
    "marketOpen",
    "minOrderSize",
    "maxOrderSize",
    "minPercentageChange",
    "volumeThreshold",
    "userId",
    "createdAt",
    "updatedAt"
FROM "AlpacaAccount_old";

-- Insert into actions
INSERT INTO "actions" (
    "id",
    "sequence",
    "tradeId",
    "type",
    "note",
    "status",
    "fee"
)
SELECT
    "id",
    "sequence",
    "tradeId",
    "type",
    "note",
    "status",
    "fee"
FROM "Action_old";

-- Insert into stop_losses
INSERT INTO "stop_losses" (
    "id",
    "stopPrice",
    "limitPrice",
    "createdAt",
    "updatedAt",
    "orderId"
)
SELECT
    "id",
    "stopPrice",
    "limitPrice",
    "createdAt",
    "updatedAt",
    "orderId"
FROM "StopLoss_old";

-- Insert into take_profits
INSERT INTO "take_profits" (
    "id",
    "limitPrice",
    "stopPrice",
    "createdAt",
    "updatedAt",
    "orderId"
)
SELECT
    "id",
    "limitPrice",
    "stopPrice",
    "createdAt",
    "updatedAt",
    "orderId"
FROM "TakeProfit_old";

-- Step 5: Handle Orphaned alpacaAccountIds in trades (Prevent Foreign Key Violations)
-- Identify and insert any missing alpaca_accounts referenced in trades
INSERT INTO "alpaca_accounts" ("id")
SELECT DISTINCT "alpacaAccountId"
FROM "trades"
WHERE "alpacaAccountId" NOT IN (SELECT "id" FROM "AlpacaAccount_old");

-- Optionally, if you want to set orphaned alpacaAccountIds to NULL or handle them differently:
-- UPDATE "trades"
-- SET "alpacaAccountId" = NULL
-- WHERE "alpacaAccountId" NOT IN (SELECT "id" FROM "AlpacaAccount_old");

-- Step 6: Recreate Indices
CREATE UNIQUE INDEX "stop_losses_orderId_key" ON "stop_losses"("orderId");
CREATE UNIQUE INDEX "take_profits_orderId_key" ON "take_profits"("orderId");

-- Step 7: Recreate Foreign Key Constraints
ALTER TABLE "alpaca_accounts" ADD CONSTRAINT "alpaca_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Position" ADD CONSTRAINT "Position_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "alpaca_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "trades" ADD CONSTRAINT "trades_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "alpaca_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "actions" ADD CONSTRAINT "actions_tradeId_fkey" FOREIGN KEY ("tradeId") REFERENCES "trades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "orders" ADD CONSTRAINT "orders_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "alpaca_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "orders" ADD CONSTRAINT "orders_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "actions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "stop_losses" ADD CONSTRAINT "stop_losses_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "take_profits" ADD CONSTRAINT "take_profits_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "alerts" ADD CONSTRAINT "alerts_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "alpaca_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Step 8: Drop Old Tables After Data Migration
DROP TABLE "Action_old";
DROP TABLE "AlpacaAccount_old";
DROP TABLE "StopLoss_old";
DROP TABLE "TakeProfit_old";
