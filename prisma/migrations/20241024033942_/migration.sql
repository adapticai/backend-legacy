/*
  Warnings:

  - The values [GET_OPTION_CONTRACTS] on the enum `ActionType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `optionContractType` on the `trades` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stopLossId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "OrderClass" AS ENUM ('SIMPLE', 'BRACKET', 'OCO', 'OSO', 'OTO');

-- CreateEnum
CREATE TYPE "OptionType" AS ENUM ('CALL', 'PUT');

-- AlterEnum
BEGIN;
CREATE TYPE "ActionType_new" AS ENUM ('BUY', 'BUY_OPTION', 'EXERCISE_OPTION', 'SELL', 'CANCEL', 'ADJUST', 'HEDGE');
ALTER TABLE "Action" ALTER COLUMN "type" TYPE "ActionType_new" USING ("type"::text::"ActionType_new");
ALTER TYPE "ActionType" RENAME TO "ActionType_old";
ALTER TYPE "ActionType_new" RENAME TO "ActionType";
DROP TYPE "ActionType_old";
COMMIT;

-- AlterTable
ALTER TABLE "AlpacaAccount" ADD COLUMN     "maxOrderSize" DOUBLE PRECISION NOT NULL DEFAULT 100000,
ADD COLUMN     "minOrderSize" DOUBLE PRECISION NOT NULL DEFAULT 500;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "expirationDate" TIMESTAMP(3),
ADD COLUMN     "optionType" "OptionType" DEFAULT 'CALL',
ADD COLUMN     "orderClass" "OrderClass" NOT NULL DEFAULT 'SIMPLE',
ADD COLUMN     "stopLossId" UUID,
ADD COLUMN     "strikePrice" DOUBLE PRECISION,
ADD COLUMN     "takeProfitId" UUID;

-- AlterTable
ALTER TABLE "trades" DROP COLUMN "optionContractType";

-- DropEnum
DROP TYPE "OptionContractType";

-- CreateTable
CREATE TABLE "StopLoss" (
    "id" UUID NOT NULL,
    "stopPrice" DOUBLE PRECISION NOT NULL,
    "limitPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderId" UUID NOT NULL,

    CONSTRAINT "StopLoss_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TakeProfit" (
    "id" UUID NOT NULL,
    "limitPrice" DOUBLE PRECISION NOT NULL,
    "stopPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderId" UUID NOT NULL,

    CONSTRAINT "TakeProfit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StopLoss_orderId_key" ON "StopLoss"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "TakeProfit_orderId_key" ON "TakeProfit"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "orders_stopLossId_key" ON "orders"("stopLossId");

-- AddForeignKey
ALTER TABLE "StopLoss" ADD CONSTRAINT "StopLoss_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TakeProfit" ADD CONSTRAINT "TakeProfit_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
