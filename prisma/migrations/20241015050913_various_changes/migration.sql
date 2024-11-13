/*
  Warnings:

  - You are about to drop the column `portfolioId` on the `alerts` table. All the data in the column will be lost.
  - The `type` column on the `alpaca_accounts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `portfolioId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `action` on the `trades` table. All the data in the column will be lost.
  - You are about to drop the column `portfolioId` on the `trades` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `trades` table. All the data in the column will be lost.
  - The `currentAccount` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `TradingAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ai_recommendations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `environment_variables` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `holdings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `performance_metrics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `risk_allocations` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `alpacaAccountId` to the `alerts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alpacaAccountId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `action` on the `trade_steps` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `alpacaAccountId` to the `trades` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AlpacaAccountType" AS ENUM ('PAPER', 'LIVE');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "TradeAction" ADD VALUE 'GET_OPTION_CONTRACTS';
ALTER TYPE "TradeAction" ADD VALUE 'EXERCISE_OPTION';
ALTER TYPE "TradeAction" ADD VALUE 'CANCEL';
ALTER TYPE "TradeAction" ADD VALUE 'ADJUST';
ALTER TYPE "TradeAction" ADD VALUE 'HEDGE';

-- DropForeignKey
ALTER TABLE "TradingAccount" DROP CONSTRAINT "TradingAccount_userId_fkey";

-- DropForeignKey
ALTER TABLE "ai_recommendations" DROP CONSTRAINT "ai_recommendations_assetId_fkey";

-- DropForeignKey
ALTER TABLE "ai_recommendations" DROP CONSTRAINT "ai_recommendations_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "ai_recommendations" DROP CONSTRAINT "ai_recommendations_userId_fkey";

-- DropForeignKey
ALTER TABLE "alerts" DROP CONSTRAINT "alerts_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "environment_variables" DROP CONSTRAINT "environment_variables_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "holdings" DROP CONSTRAINT "holdings_assetId_fkey";

-- DropForeignKey
ALTER TABLE "holdings" DROP CONSTRAINT "holdings_tradingAccountId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "performance_metrics" DROP CONSTRAINT "performance_metrics_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "performance_metrics" DROP CONSTRAINT "performance_metrics_userId_fkey";

-- DropForeignKey
ALTER TABLE "risk_allocations" DROP CONSTRAINT "risk_allocations_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "risk_allocations" DROP CONSTRAINT "risk_allocations_userId_fkey";

-- DropForeignKey
ALTER TABLE "trades" DROP CONSTRAINT "trades_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "trades" DROP CONSTRAINT "trades_userId_fkey";

-- AlterTable
ALTER TABLE "alerts" DROP COLUMN "portfolioId",
ADD COLUMN     "alpacaAccountId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "alpaca_accounts" DROP COLUMN "type",
ADD COLUMN     "type" "AlpacaAccountType" NOT NULL DEFAULT 'PAPER';

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "portfolioId",
ADD COLUMN     "alpacaAccountId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "trade_steps" DROP COLUMN "action",
ADD COLUMN     "action" "TradeAction" NOT NULL;

-- AlterTable
ALTER TABLE "trades" DROP COLUMN "action",
DROP COLUMN "portfolioId",
DROP COLUMN "userId",
ADD COLUMN     "alpacaAccountId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "currentAccount",
ADD COLUMN     "currentAccount" "AlpacaAccountType" NOT NULL DEFAULT 'PAPER';

-- DropTable
DROP TABLE "TradingAccount";

-- DropTable
DROP TABLE "ai_recommendations";

-- DropTable
DROP TABLE "environment_variables";

-- DropTable
DROP TABLE "holdings";

-- DropTable
DROP TABLE "performance_metrics";

-- DropTable
DROP TABLE "risk_allocations";

-- DropEnum
DROP TYPE "TradeStepAction";

-- DropEnum
DROP TYPE "TradingAccountType";

-- CreateTable
CREATE TABLE "Position" (
    "id" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "averageEntryPrice" DOUBLE PRECISION NOT NULL,
    "qty" DOUBLE PRECISION NOT NULL,
    "qtyAvailable" DOUBLE PRECISION NOT NULL,
    "marketValue" DOUBLE PRECISION NOT NULL,
    "costBasis" DOUBLE PRECISION NOT NULL,
    "unrealizedPL" DOUBLE PRECISION NOT NULL,
    "unrealizedPLPC" DOUBLE PRECISION NOT NULL,
    "unrealisedIntradayPL" DOUBLE PRECISION NOT NULL,
    "unrealisedIntradayPLPC" DOUBLE PRECISION NOT NULL,
    "currentPrice" DOUBLE PRECISION NOT NULL,
    "lastTradePrice" DOUBLE PRECISION NOT NULL,
    "changeToday" DOUBLE PRECISION NOT NULL,
    "assetMarginable" BOOLEAN NOT NULL,
    "alpacaAccountId" UUID NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "alpaca_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "alpaca_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "alpaca_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "alpaca_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
