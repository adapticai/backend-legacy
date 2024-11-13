/*
  Warnings:

  - The values [PENDING,CANCELLED] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `executionTime` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `stopLoss` on the `orders` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clientOrderId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `symbol` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeInForce` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TimeInForce" AS ENUM ('DAY', 'GTC', 'OPG', 'CLS', 'IOC', 'FOK');

-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('NEW', 'PARTIALLY_FILLED', 'FILLED', 'CANCELED', 'REJECTED', 'EXPIRED');
ALTER TABLE "orders" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
COMMIT;

-- AlterEnum
ALTER TYPE "OrderType" ADD VALUE 'TRAILING_STOP';

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "executionTime",
DROP COLUMN "price",
DROP COLUMN "stopLoss",
ADD COLUMN     "clientOrderId" TEXT,
ADD COLUMN     "extendedHours" BOOLEAN,
ADD COLUMN     "filledAt" TIMESTAMP(3),
ADD COLUMN     "filledAvgPrice" DOUBLE PRECISION,
ADD COLUMN     "limitPrice" DOUBLE PRECISION,
ADD COLUMN     "notional" DOUBLE PRECISION,
ADD COLUMN     "stopPrice" DOUBLE PRECISION,
ADD COLUMN     "submittedAt" TIMESTAMP(3),
ADD COLUMN     "symbol" TEXT NOT NULL,
ADD COLUMN     "timeInForce" "TimeInForce" NOT NULL,
ADD COLUMN     "trailPercent" DOUBLE PRECISION,
ADD COLUMN     "trailPrice" DOUBLE PRECISION,
ALTER COLUMN "qty" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "orders_clientOrderId_key" ON "orders"("clientOrderId");
