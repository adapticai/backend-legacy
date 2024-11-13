/*
  Warnings:

  - You are about to drop the column `buyPrice` on the `assets` table. All the data in the column will be lost.
  - You are about to drop the column `sellPrice` on the `assets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "assets" DROP COLUMN "buyPrice",
DROP COLUMN "sellPrice",
ADD COLUMN     "askPrice" TEXT,
ADD COLUMN     "bidPrice" TEXT;
