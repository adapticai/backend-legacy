/*
  Warnings:

  - You are about to drop the column `dependsOnId` on the `actions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "actions" DROP CONSTRAINT "actions_dependsOnId_fkey";

-- AlterTable
ALTER TABLE "actions" DROP COLUMN "dependsOnId",
ADD COLUMN     "dependedOnBy" TEXT[],
ADD COLUMN     "dependsOn" TEXT[];
