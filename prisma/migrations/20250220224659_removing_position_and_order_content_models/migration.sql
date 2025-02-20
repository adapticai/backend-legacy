/*
  Warnings:

  - You are about to drop the column `fee` on the `actions` table. All the data in the column will be lost.
  - You are about to drop the `contracts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `deliverables` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `positions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `stop_losses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `take_profits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "deliverables" DROP CONSTRAINT "deliverables_contractId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_actionId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_contractId_fkey";

-- DropForeignKey
ALTER TABLE "positions" DROP CONSTRAINT "positions_alpacaAccountId_fkey";

-- DropForeignKey
ALTER TABLE "stop_losses" DROP CONSTRAINT "stop_losses_orderId_fkey";

-- DropForeignKey
ALTER TABLE "take_profits" DROP CONSTRAINT "take_profits_orderId_fkey";

-- AlterTable
ALTER TABLE "actions" DROP COLUMN "fee";

-- DropTable
DROP TABLE "contracts";

-- DropTable
DROP TABLE "deliverables";

-- DropTable
DROP TABLE "orders";

-- DropTable
DROP TABLE "positions";

-- DropTable
DROP TABLE "stop_losses";

-- DropTable
DROP TABLE "take_profits";
