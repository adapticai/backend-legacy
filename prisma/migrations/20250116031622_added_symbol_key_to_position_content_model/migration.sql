/*
  Warnings:

  - You are about to drop the `Position` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_alpacaAccountId_fkey";

-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_assetId_fkey";

-- DropTable
DROP TABLE "Position";

-- CreateTable
CREATE TABLE "positions" (
    "id" UUID NOT NULL,
    "assetId" UUID,
    "symbol" TEXT,
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
    "closed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "positions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "positions_symbol_alpacaAccountId_key" ON "positions"("symbol", "alpacaAccountId");

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "alpaca_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
