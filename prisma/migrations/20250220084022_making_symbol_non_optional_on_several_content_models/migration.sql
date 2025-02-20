/*
  Warnings:

  - Made the column `symbol` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `symbol` on table `positions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `symbol` on table `trades` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "symbol" SET NOT NULL;

-- AlterTable
ALTER TABLE "positions" ALTER COLUMN "symbol" SET NOT NULL;

-- AlterTable
ALTER TABLE "trades" ALTER COLUMN "symbol" SET NOT NULL;
