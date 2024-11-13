/*
  Warnings:

  - You are about to drop the column `quantity` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `trades` table. All the data in the column will be lost.
  - You are about to drop the `trade_steps` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `qty` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `analysis` to the `trades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confidence` to the `trades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qty` to the `trades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `signal` to the `trades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strategy` to the `trades` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "trade_steps" DROP CONSTRAINT "trade_steps_tradeId_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "quantity",
ADD COLUMN     "qty" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "trades" DROP COLUMN "quantity",
ADD COLUMN     "analysis" TEXT NOT NULL,
ADD COLUMN     "confidence" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "qty" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "signal" TEXT NOT NULL,
ADD COLUMN     "strategy" TEXT NOT NULL;

-- DropTable
DROP TABLE "trade_steps";

-- CreateTable
CREATE TABLE "trade_actions" (
    "id" UUID NOT NULL,
    "tradeId" UUID NOT NULL,
    "sequence" INTEGER NOT NULL,
    "action" "TradeAction" NOT NULL,
    "hedgeType" TEXT,
    "hedgePrice" DOUBLE PRECISION,
    "buyPrice" DOUBLE PRECISION,
    "sellPrice" DOUBLE PRECISION,
    "qty" DOUBLE PRECISION NOT NULL,
    "side" "TradeStepSide" NOT NULL,
    "type" "OrderType" NOT NULL,
    "stopLoss" DOUBLE PRECISION,
    "targetPrice" DOUBLE PRECISION,
    "note" TEXT NOT NULL,
    "executionTime" TIMESTAMP(3),
    "status" "TradeStepStatus" NOT NULL,
    "fee" DOUBLE PRECISION,

    CONSTRAINT "trade_actions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "trade_actions" ADD CONSTRAINT "trade_actions_tradeId_fkey" FOREIGN KEY ("tradeId") REFERENCES "trades"("id") ON DELETE CASCADE ON UPDATE CASCADE;
