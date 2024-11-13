/*
  Warnings:

  - You are about to drop the column `action` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `action` on the `trade_actions` table. All the data in the column will be lost.
  - You are about to drop the column `buyPrice` on the `trade_actions` table. All the data in the column will be lost.
  - You are about to drop the column `executionTime` on the `trade_actions` table. All the data in the column will be lost.
  - You are about to drop the column `hedgePrice` on the `trade_actions` table. All the data in the column will be lost.
  - You are about to drop the column `hedgeType` on the `trade_actions` table. All the data in the column will be lost.
  - You are about to drop the column `qty` on the `trade_actions` table. All the data in the column will be lost.
  - You are about to drop the column `sellPrice` on the `trade_actions` table. All the data in the column will be lost.
  - You are about to drop the column `side` on the `trade_actions` table. All the data in the column will be lost.
  - You are about to drop the column `stopLoss` on the `trade_actions` table. All the data in the column will be lost.
  - You are about to drop the column `targetPrice` on the `trade_actions` table. All the data in the column will be lost.
  - The `status` column on the `trade_actions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[assetId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[actionId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId]` on the table `trade_actions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `actionId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `side` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `trade_actions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ActionType" AS ENUM ('BUY', 'GET_OPTION_CONTRACTS', 'EXERCISE_OPTION', 'SELL', 'CANCEL', 'ADJUST', 'HEDGE');

-- CreateEnum
CREATE TYPE "OrderSide" AS ENUM ('BUY', 'SELL');

-- CreateEnum
CREATE TYPE "ActionStatus" AS ENUM ('STAGED', 'EXECUTED', 'COMPLETED');

-- AlterTable
ALTER TABLE "assets" ADD COLUMN     "buyPrice" TEXT,
ADD COLUMN     "sellPrice" TEXT;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "action",
ADD COLUMN     "actionId" UUID NOT NULL,
ADD COLUMN     "executionTime" TIMESTAMP(3),
ADD COLUMN     "fee" DOUBLE PRECISION,
ADD COLUMN     "side" "OrderSide" NOT NULL,
ADD COLUMN     "stopLoss" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "trade_actions" DROP COLUMN "action",
DROP COLUMN "buyPrice",
DROP COLUMN "executionTime",
DROP COLUMN "hedgePrice",
DROP COLUMN "hedgeType",
DROP COLUMN "qty",
DROP COLUMN "sellPrice",
DROP COLUMN "side",
DROP COLUMN "stopLoss",
DROP COLUMN "targetPrice",
ADD COLUMN     "orderId" UUID,
DROP COLUMN "type",
ADD COLUMN     "type" "ActionType" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "ActionStatus" NOT NULL DEFAULT 'STAGED';

-- DropEnum
DROP TYPE "TradeAction";

-- DropEnum
DROP TYPE "TradeActionSide";

-- DropEnum
DROP TYPE "TradeActionStatus";

-- CreateIndex
CREATE UNIQUE INDEX "orders_assetId_key" ON "orders"("assetId");

-- CreateIndex
CREATE UNIQUE INDEX "orders_actionId_key" ON "orders"("actionId");

-- CreateIndex
CREATE UNIQUE INDEX "trade_actions_orderId_key" ON "trade_actions"("orderId");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "trade_actions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
