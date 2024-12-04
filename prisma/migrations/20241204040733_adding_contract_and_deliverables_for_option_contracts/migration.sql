/*
  Warnings:

  - A unique constraint covering the columns `[contractId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "OptionStyle" AS ENUM ('AMERICAN', 'EUROPEAN');

-- CreateEnum
CREATE TYPE "DeliverableType" AS ENUM ('CASH', 'EQUITY');

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "contractId" UUID;

-- CreateTable
CREATE TABLE "contracts" (
    "id" UUID NOT NULL,
    "alpacaId" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "tradable" BOOLEAN NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "rootSymbol" TEXT NOT NULL,
    "underlyingSymbol" TEXT NOT NULL,
    "underlyingAssetId" TEXT NOT NULL,
    "type" "OptionType" NOT NULL,
    "style" "OptionStyle" NOT NULL,
    "strikePrice" DOUBLE PRECISION NOT NULL,
    "multiplier" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "openInterest" INTEGER,
    "openInterestDate" TIMESTAMP(3),
    "closePrice" DOUBLE PRECISION,
    "closePriceDate" TIMESTAMP(3),
    "ppind" BOOLEAN,
    "assetId" UUID NOT NULL,
    "orderId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deliverables" (
    "id" UUID NOT NULL,
    "type" "DeliverableType" NOT NULL,
    "symbol" TEXT NOT NULL,
    "assetId" UUID NOT NULL,
    "amount" INTEGER,
    "allocationPercentage" DOUBLE PRECISION NOT NULL,
    "settlementType" TEXT NOT NULL,
    "settlementMethod" TEXT NOT NULL,
    "delayedSettlement" BOOLEAN NOT NULL,
    "contractId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deliverables_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contracts_alpacaId_key" ON "contracts"("alpacaId");

-- CreateIndex
CREATE UNIQUE INDEX "contracts_symbol_key" ON "contracts"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "deliverables_contractId_key" ON "deliverables"("contractId");

-- CreateIndex
CREATE UNIQUE INDEX "orders_contractId_key" ON "orders"("contractId");

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliverables" ADD CONSTRAINT "deliverables_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "contracts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "contracts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
