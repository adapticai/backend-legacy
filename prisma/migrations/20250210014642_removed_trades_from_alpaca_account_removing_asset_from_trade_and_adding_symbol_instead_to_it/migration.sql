-- DropForeignKey
ALTER TABLE "trades" DROP CONSTRAINT "trades_alpacaAccountId_fkey";

-- DropForeignKey
ALTER TABLE "trades" DROP CONSTRAINT "trades_assetId_fkey";

-- AlterTable
ALTER TABLE "trades" ADD COLUMN     "symbol" TEXT;
