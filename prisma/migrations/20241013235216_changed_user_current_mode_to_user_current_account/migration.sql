/*
  Warnings:

  - You are about to drop the column `currentMode` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "currentMode",
ADD COLUMN     "currentAccount" "TradingAccountType" NOT NULL DEFAULT 'PAPER';
