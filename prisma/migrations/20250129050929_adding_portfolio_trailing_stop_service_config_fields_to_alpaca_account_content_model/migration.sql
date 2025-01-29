-- AlterTable
ALTER TABLE "alpaca_accounts" ADD COLUMN     "enablePortfolioTrailingStop" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "portfolioProfitThresholdPercent" DOUBLE PRECISION NOT NULL DEFAULT 2.0,
ADD COLUMN     "portfolioTrailPercent" DOUBLE PRECISION NOT NULL DEFAULT 4.0,
ADD COLUMN     "reducedPortfolioTrailPercent" DOUBLE PRECISION NOT NULL DEFAULT 0.5;
