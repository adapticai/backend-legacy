/*
  Warnings:

  - You are about to drop the column `maxOrderSize` on the `alpaca_accounts` table. All the data in the column will be lost.
  - You are about to drop the column `minOrderSize` on the `alpaca_accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "alpaca_accounts" DROP COLUMN "maxOrderSize",
DROP COLUMN "minOrderSize",
ADD COLUMN     "tradeAllocationPct" DOUBLE PRECISION NOT NULL DEFAULT 0.5;
