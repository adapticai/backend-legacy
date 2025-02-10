/*
  Warnings:

  - You are about to drop the column `assetId` on the `contracts` table. All the data in the column will be lost.
  - You are about to drop the column `assetId` on the `deliverables` table. All the data in the column will be lost.
  - You are about to drop the column `assetId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `assetId` on the `positions` table. All the data in the column will be lost.
  - You are about to drop the column `assetId` on the `trades` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "contracts" DROP CONSTRAINT "contracts_assetId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_assetId_fkey";

-- DropForeignKey
ALTER TABLE "positions" DROP CONSTRAINT "positions_assetId_fkey";

-- AlterTable
ALTER TABLE "contracts" DROP COLUMN "assetId";

-- AlterTable
ALTER TABLE "deliverables" DROP COLUMN "assetId";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "assetId",
ADD COLUMN     "symbol" TEXT;

-- AlterTable
ALTER TABLE "positions" DROP COLUMN "assetId";

-- AlterTable
ALTER TABLE "trades" DROP COLUMN "assetId";
