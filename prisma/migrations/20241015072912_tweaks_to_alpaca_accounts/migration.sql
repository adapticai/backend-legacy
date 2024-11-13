/*
  Warnings:

  - You are about to drop the column `userId` on the `alerts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `alpaca_accounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_alpacaAccountId_fkey";

-- DropForeignKey
ALTER TABLE "alerts" DROP CONSTRAINT "alerts_alpacaAccountId_fkey";

-- DropForeignKey
ALTER TABLE "alerts" DROP CONSTRAINT "alerts_userId_fkey";

-- DropForeignKey
ALTER TABLE "alpaca_accounts" DROP CONSTRAINT "alpaca_accounts_userId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_alpacaAccountId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_userId_fkey";

-- DropForeignKey
ALTER TABLE "trades" DROP CONSTRAINT "trades_alpacaAccountId_fkey";

-- AlterTable
ALTER TABLE "alerts" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "userId";

-- DropTable
DROP TABLE "alpaca_accounts";

-- CreateTable
CREATE TABLE "AlpacaAccount" (
    "id" UUID NOT NULL,
    "type" "AlpacaAccountType" NOT NULL DEFAULT 'PAPER',
    "APIKey" TEXT NOT NULL,
    "APISecret" TEXT NOT NULL,
    "configuration" JSONB,
    "marketOpen" BOOLEAN NOT NULL DEFAULT false,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AlpacaAccount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AlpacaAccount" ADD CONSTRAINT "AlpacaAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "AlpacaAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "AlpacaAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "AlpacaAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_alpacaAccountId_fkey" FOREIGN KEY ("alpacaAccountId") REFERENCES "AlpacaAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;
