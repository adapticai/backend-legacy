/*
  Warnings:

  - You are about to drop the column `optionType` on the `trades` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "trades" DROP COLUMN "optionType";

-- DropEnum
DROP TYPE "DeliverableType";

-- DropEnum
DROP TYPE "OptionStyle";

-- DropEnum
DROP TYPE "OptionType";

-- DropEnum
DROP TYPE "OrderClass";

-- DropEnum
DROP TYPE "OrderSide";

-- DropEnum
DROP TYPE "OrderStatus";

-- DropEnum
DROP TYPE "OrderType";
