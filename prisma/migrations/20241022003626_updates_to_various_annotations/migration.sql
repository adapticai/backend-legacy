/*
  Warnings:

  - You are about to drop the `trade_actions` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "ActionType" ADD VALUE 'BUY_OPTION';

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_actionId_fkey";

-- DropForeignKey
ALTER TABLE "trade_actions" DROP CONSTRAINT "trade_actions_tradeId_fkey";

-- DropIndex
DROP INDEX "orders_assetId_key";

-- DropTable
DROP TABLE "trade_actions";

-- CreateTable
CREATE TABLE "Action" (
    "id" UUID NOT NULL,
    "sequence" INTEGER NOT NULL,
    "tradeId" UUID NOT NULL,
    "type" "ActionType" NOT NULL,
    "note" TEXT NOT NULL,
    "status" "ActionStatus" NOT NULL DEFAULT 'STAGED',
    "fee" DOUBLE PRECISION,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_tradeId_fkey" FOREIGN KEY ("tradeId") REFERENCES "trades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;
