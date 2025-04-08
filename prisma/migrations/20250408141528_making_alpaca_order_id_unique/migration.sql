/*
  Warnings:

  - The `alpacaOrderId` column on the `actions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[alpacaOrderId]` on the table `actions` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "actions" DROP COLUMN "alpacaOrderId",
ADD COLUMN     "alpacaOrderId" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "actions_alpacaOrderId_key" ON "actions"("alpacaOrderId");
