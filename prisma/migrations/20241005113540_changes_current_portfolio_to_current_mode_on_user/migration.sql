/*
  Warnings:

  - You are about to drop the column `currentPortfolio` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "currentPortfolio",
ADD COLUMN     "currentMode" TEXT DEFAULT 'paper';
