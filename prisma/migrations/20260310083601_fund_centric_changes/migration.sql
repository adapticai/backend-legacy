/*
  Warnings:

  - You are about to drop the column `alpacaAccountId` on the `alerts` table. All the data in the column will be lost.
  - You are about to drop the column `alpacaAccountId` on the `allocations` table. All the data in the column will be lost.
  - You are about to drop the column `alpacaAccountId` on the `options_positions` table. All the data in the column will be lost.
  - You are about to drop the column `alpacaAccountId` on the `options_trade_executions` table. All the data in the column will be lost.
  - You are about to drop the column `alpacaAccountId` on the `trades` table. All the data in the column will be lost.
  - You are about to drop the column `currentAccount` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `alpaca_accounts` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[brokerageAccountId]` on the table `allocations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `brokerageAccountId` to the `alerts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brokerageAccountId` to the `allocations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brokerageAccountId` to the `options_positions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brokerageAccountId` to the `options_trade_executions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brokerageAccountId` to the `trades` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BrokerageAccountType" AS ENUM ('PAPER', 'LIVE');

-- CreateEnum
CREATE TYPE "BrokerageProvider" AS ENUM ('ALPACA', 'IBKR', 'COINBASE');

-- CreateEnum
CREATE TYPE "OrgRole" AS ENUM ('OWNER', 'ADMIN', 'PORTFOLIO_MANAGER', 'COMPLIANCE_OFFICER', 'KYC_AML_OFFICER', 'AUDITOR', 'MEMBER');

-- CreateEnum
CREATE TYPE "FundRole" AS ENUM ('MANAGER', 'TRADER', 'COMPLIANCE', 'AUDITOR', 'VIEWER');

-- CreateEnum
CREATE TYPE "FundStatus" AS ENUM ('SETUP', 'ACTIVE', 'PAUSED', 'CLOSED');

-- CreateEnum
CREATE TYPE "InvestorType" AS ENUM ('INDIVIDUAL', 'INSTITUTIONAL', 'FUND_OF_FUNDS');

-- CreateEnum
CREATE TYPE "KycStatus" AS ENUM ('PENDING', 'IN_REVIEW', 'APPROVED', 'REJECTED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "InvestmentStatus" AS ENUM ('ACTIVE', 'REDEEMED', 'SUSPENDED');

-- DropForeignKey
ALTER TABLE "alerts" DROP CONSTRAINT "alerts_alpacaAccountId_fkey";

-- DropForeignKey
ALTER TABLE "allocations" DROP CONSTRAINT "allocations_alpacaAccountId_fkey";

-- DropForeignKey
ALTER TABLE "alpaca_accounts" DROP CONSTRAINT "alpaca_accounts_userId_fkey";

-- DropIndex
DROP INDEX "alerts_alpacaAccountId_idx";

-- DropIndex
DROP INDEX "alerts_alpacaAccountId_status_idx";

-- DropIndex
DROP INDEX "allocations_alpacaAccountId_idx";

-- DropIndex
DROP INDEX "allocations_alpacaAccountId_key";

-- DropIndex
DROP INDEX "options_positions_alpacaAccountId_status_idx";

-- DropIndex
DROP INDEX "options_trade_executions_alpacaAccountId_executionTime_idx";

-- DropIndex
DROP INDEX "trades_alpacaAccountId_idx";

-- DropIndex
DROP INDEX "trades_alpacaAccountId_status_idx";

-- AlterTable
ALTER TABLE "alerts" DROP COLUMN "alpacaAccountId",
ADD COLUMN     "brokerageAccountId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "allocations" DROP COLUMN "alpacaAccountId",
ADD COLUMN     "brokerageAccountId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "fundId" VARCHAR(36);

-- AlterTable
ALTER TABLE "options_positions" DROP COLUMN "alpacaAccountId",
ADD COLUMN     "brokerageAccountId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "options_trade_executions" DROP COLUMN "alpacaAccountId",
ADD COLUMN     "brokerageAccountId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "trade_audit_events" ADD COLUMN     "fundId" VARCHAR(36);

-- AlterTable
ALTER TABLE "trades" DROP COLUMN "alpacaAccountId",
ADD COLUMN     "brokerageAccountId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "currentAccount";

-- DropTable
DROP TABLE "alpaca_accounts";

-- DropEnum
DROP TYPE "AlpacaAccountType";

-- CreateTable
CREATE TABLE "organizations" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "logoUrl" TEXT,
    "website" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "org_memberships" (
    "id" UUID NOT NULL,
    "organizationId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "role" "OrgRole" NOT NULL DEFAULT 'MEMBER',
    "permissions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "org_memberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funds" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "status" "FundStatus" NOT NULL DEFAULT 'SETUP',
    "organizationId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "funds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fund_assignments" (
    "id" UUID NOT NULL,
    "fundId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "role" "FundRole" NOT NULL DEFAULT 'VIEWER',
    "permissions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fund_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investors" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "type" "InvestorType" NOT NULL DEFAULT 'INDIVIDUAL',
    "kycStatus" "KycStatus" NOT NULL DEFAULT 'PENDING',
    "walletAddress" TEXT,
    "userId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "investors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investments" (
    "id" UUID NOT NULL,
    "fundId" UUID NOT NULL,
    "investorId" UUID NOT NULL,
    "units" DOUBLE PRECISION NOT NULL,
    "investedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "InvestmentStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "investments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brokerage_accounts" (
    "id" UUID NOT NULL,
    "provider" "BrokerageProvider" NOT NULL DEFAULT 'ALPACA',
    "type" "BrokerageAccountType" NOT NULL DEFAULT 'PAPER',
    "apiKey" TEXT NOT NULL,
    "apiSecret" TEXT NOT NULL,
    "configuration" JSONB,
    "marketOpen" BOOLEAN NOT NULL DEFAULT false,
    "realTime" BOOLEAN NOT NULL DEFAULT false,
    "cryptoTradingEnabled" BOOLEAN NOT NULL DEFAULT false,
    "cryptoTradingPairs" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "cryptoTradeAllocationPct" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "tradeAllocationPct" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "autoAllocation" BOOLEAN NOT NULL DEFAULT true,
    "minPercentageChange" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "volumeThreshold" DOUBLE PRECISION NOT NULL DEFAULT 50000,
    "enablePortfolioTrailingStop" BOOLEAN NOT NULL DEFAULT false,
    "portfolioTrailPercent" DOUBLE PRECISION NOT NULL DEFAULT 4.0,
    "portfolioProfitThresholdPercent" DOUBLE PRECISION NOT NULL DEFAULT 2.0,
    "reducedPortfolioTrailPercent" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "defaultTrailingStopPercentage100" DOUBLE PRECISION NOT NULL DEFAULT 4.0,
    "firstTrailReductionThreshold100" DOUBLE PRECISION NOT NULL DEFAULT 2.0,
    "secondTrailReductionThreshold100" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "firstReducedTrailPercentage100" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "secondReducedTrailPercentage100" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "minimumPriceChangePercent100" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "fundId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "brokerage_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organizations_slug_key" ON "organizations"("slug");

-- CreateIndex
CREATE INDEX "org_memberships_userId_idx" ON "org_memberships"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "org_memberships_organizationId_userId_key" ON "org_memberships"("organizationId", "userId");

-- CreateIndex
CREATE INDEX "funds_organizationId_idx" ON "funds"("organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "funds_organizationId_slug_key" ON "funds"("organizationId", "slug");

-- CreateIndex
CREATE INDEX "fund_assignments_userId_idx" ON "fund_assignments"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "fund_assignments_fundId_userId_key" ON "fund_assignments"("fundId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "investors_userId_key" ON "investors"("userId");

-- CreateIndex
CREATE INDEX "investors_userId_idx" ON "investors"("userId");

-- CreateIndex
CREATE INDEX "investors_email_idx" ON "investors"("email");

-- CreateIndex
CREATE INDEX "investments_fundId_idx" ON "investments"("fundId");

-- CreateIndex
CREATE INDEX "investments_investorId_idx" ON "investments"("investorId");

-- CreateIndex
CREATE UNIQUE INDEX "investments_fundId_investorId_key" ON "investments"("fundId", "investorId");

-- CreateIndex
CREATE INDEX "brokerage_accounts_fundId_idx" ON "brokerage_accounts"("fundId");

-- CreateIndex
CREATE INDEX "alerts_brokerageAccountId_idx" ON "alerts"("brokerageAccountId");

-- CreateIndex
CREATE INDEX "alerts_brokerageAccountId_status_idx" ON "alerts"("brokerageAccountId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "allocations_brokerageAccountId_key" ON "allocations"("brokerageAccountId");

-- CreateIndex
CREATE INDEX "allocations_brokerageAccountId_idx" ON "allocations"("brokerageAccountId");

-- CreateIndex
CREATE INDEX "options_positions_brokerageAccountId_status_idx" ON "options_positions"("brokerageAccountId", "status");

-- CreateIndex
CREATE INDEX "options_trade_executions_brokerageAccountId_executionTime_idx" ON "options_trade_executions"("brokerageAccountId", "executionTime");

-- CreateIndex
CREATE INDEX "trades_brokerageAccountId_idx" ON "trades"("brokerageAccountId");

-- CreateIndex
CREATE INDEX "trades_brokerageAccountId_status_idx" ON "trades"("brokerageAccountId", "status");

-- AddForeignKey
ALTER TABLE "org_memberships" ADD CONSTRAINT "org_memberships_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "org_memberships" ADD CONSTRAINT "org_memberships_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funds" ADD CONSTRAINT "funds_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fund_assignments" ADD CONSTRAINT "fund_assignments_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "funds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fund_assignments" ADD CONSTRAINT "fund_assignments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investors" ADD CONSTRAINT "investors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investments" ADD CONSTRAINT "investments_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "funds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investments" ADD CONSTRAINT "investments_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "investors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brokerage_accounts" ADD CONSTRAINT "brokerage_accounts_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "funds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allocations" ADD CONSTRAINT "allocations_brokerageAccountId_fkey" FOREIGN KEY ("brokerageAccountId") REFERENCES "brokerage_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_brokerageAccountId_fkey" FOREIGN KEY ("brokerageAccountId") REFERENCES "brokerage_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_brokerageAccountId_fkey" FOREIGN KEY ("brokerageAccountId") REFERENCES "brokerage_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options_positions" ADD CONSTRAINT "options_positions_brokerageAccountId_fkey" FOREIGN KEY ("brokerageAccountId") REFERENCES "brokerage_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options_trade_executions" ADD CONSTRAINT "options_trade_executions_brokerageAccountId_fkey" FOREIGN KEY ("brokerageAccountId") REFERENCES "brokerage_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
