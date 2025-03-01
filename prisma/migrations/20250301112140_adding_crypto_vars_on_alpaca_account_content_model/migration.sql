-- AlterTable
ALTER TABLE "alpaca_accounts" ADD COLUMN     "cryptoTradingEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "cryptoTradingPairs" TEXT[];
