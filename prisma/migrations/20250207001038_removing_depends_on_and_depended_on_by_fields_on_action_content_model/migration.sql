/*
  Warnings:

  - You are about to drop the column `dependedOnBy` on the `actions` table. All the data in the column will be lost.
  - You are about to drop the column `dependsOn` on the `actions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "actions" DROP COLUMN "dependedOnBy",
DROP COLUMN "dependsOn";
