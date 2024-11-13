/*
  Warnings:

  - You are about to drop the column `created_at` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `ai_recommendations` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `ai_recommendations` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `alerts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `alerts` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `assets` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `assets` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `authenticators` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `authenticators` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `economic_events` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `economic_events` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `environment_variables` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `environment_variables` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `holdings` table. All the data in the column will be lost.
  - You are about to drop the column `portfolioId` on the `holdings` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `holdings` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `holdings` table. All the data in the column will be lost.
  - You are about to drop the column `assetId` on the `news` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `news` table. All the data in the column will be lost.
  - You are about to drop the column `published_at` on the `news` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `news` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `performance_metrics` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `performance_metrics` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `risk_allocations` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `risk_allocations` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `trades` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `trades` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `portfolio_allocations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `portfolio_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `portfolios` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[tradingAccountId,assetId]` on the table `holdings` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `news` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tradingAccountId` to the `holdings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timePublished` to the `news` table without a default value. This is not possible if the table is not empty.
  - Made the column `url` on table `news` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `sentiment` on the `news` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TradingAccountType" AS ENUM ('PAPER', 'LIVE');

-- DropForeignKey
ALTER TABLE "ai_recommendations" DROP CONSTRAINT "ai_recommendations_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "alerts" DROP CONSTRAINT "alerts_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "environment_variables" DROP CONSTRAINT "environment_variables_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "holdings" DROP CONSTRAINT "holdings_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "holdings" DROP CONSTRAINT "holdings_userId_fkey";

-- DropForeignKey
ALTER TABLE "news" DROP CONSTRAINT "news_assetId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "performance_metrics" DROP CONSTRAINT "performance_metrics_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "portfolio_allocations" DROP CONSTRAINT "portfolio_allocations_assetId_fkey";

-- DropForeignKey
ALTER TABLE "portfolio_allocations" DROP CONSTRAINT "portfolio_allocations_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "portfolio_users" DROP CONSTRAINT "portfolio_users_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "portfolio_users" DROP CONSTRAINT "portfolio_users_userId_fkey";

-- DropForeignKey
ALTER TABLE "risk_allocations" DROP CONSTRAINT "risk_allocations_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "trades" DROP CONSTRAINT "trades_portfolioId_fkey";

-- DropIndex
DROP INDEX "holdings_userId_portfolioId_assetId_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ai_recommendations" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "alerts" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "assets" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "authenticators" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "economic_events" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "environment_variables" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "holdings" DROP COLUMN "created_at",
DROP COLUMN "portfolioId",
DROP COLUMN "updated_at",
DROP COLUMN "userId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "tradingAccountId" UUID NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "news" DROP COLUMN "assetId",
DROP COLUMN "created_at",
DROP COLUMN "published_at",
DROP COLUMN "updated_at",
ADD COLUMN     "authors" TEXT[],
ADD COLUMN     "bannerImage" TEXT,
ADD COLUMN     "category" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "sourceDomain" TEXT,
ADD COLUMN     "summary" TEXT,
ADD COLUMN     "timePublished" TEXT NOT NULL,
ADD COLUMN     "topics" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "url" SET NOT NULL,
DROP COLUMN "sentiment",
ADD COLUMN     "sentiment" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "performance_metrics" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "risk_allocations" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "trades" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "portfolio_allocations";

-- DropTable
DROP TABLE "portfolio_users";

-- DropTable
DROP TABLE "portfolios";

-- DropEnum
DROP TYPE "NewsSentiment";

-- CreateTable
CREATE TABLE "TradingAccount" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" "TradingAccountType" NOT NULL,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TradingAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsAssetSentiment" (
    "id" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "newsId" UUID NOT NULL,
    "relevancyScore" TEXT,
    "sentimentScore" TEXT,
    "sentimentLabel" TEXT,

    CONSTRAINT "NewsAssetSentiment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TradingAccount_slug_key" ON "TradingAccount"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "holdings_tradingAccountId_assetId_key" ON "holdings"("tradingAccountId", "assetId");

-- CreateIndex
CREATE UNIQUE INDEX "news_url_key" ON "news"("url");

-- AddForeignKey
ALTER TABLE "TradingAccount" ADD CONSTRAINT "TradingAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "environment_variables" ADD CONSTRAINT "environment_variables_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "TradingAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holdings" ADD CONSTRAINT "holdings_tradingAccountId_fkey" FOREIGN KEY ("tradingAccountId") REFERENCES "TradingAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "TradingAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "TradingAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_recommendations" ADD CONSTRAINT "ai_recommendations_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "TradingAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risk_allocations" ADD CONSTRAINT "risk_allocations_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "TradingAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "TradingAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsAssetSentiment" ADD CONSTRAINT "NewsAssetSentiment_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsAssetSentiment" ADD CONSTRAINT "NewsAssetSentiment_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performance_metrics" ADD CONSTRAINT "performance_metrics_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "TradingAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;
