-- AlterTable
ALTER TABLE "alpaca_accounts" ADD COLUMN     "cryptoTradeAllocationPct" DOUBLE PRECISION NOT NULL DEFAULT 5;

-- CreateTable
CREATE TABLE "allocations" (
    "id" UUID NOT NULL,
    "stocks" DOUBLE PRECISION NOT NULL DEFAULT 70,
    "crypto" DOUBLE PRECISION NOT NULL DEFAULT 30,
    "etfs" DOUBLE PRECISION NOT NULL DEFAULT 10,
    "alpacaAccountId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "allocations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "allocations_alpacaAccountId_key" ON "allocations"("alpacaAccountId");

-- AddForeignKey
ALTER TABLE "allocations" ADD CONSTRAINT "allocations_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "alpaca_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
