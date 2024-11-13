/*
  Warnings:

  - You are about to drop the column `alpacaAccountId` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "alpaca_accounts_userId_key";

-- DropIndex
DROP INDEX "users_alpacaAccountId_key";

-- AlterTable
ALTER TABLE "alpaca_accounts" ADD COLUMN     "type" "TradingAccountType" NOT NULL DEFAULT 'PAPER';

-- AlterTable
ALTER TABLE "users" DROP COLUMN "alpacaAccountId";
