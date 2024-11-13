/*
  Warnings:

  - You are about to drop the `ActionDependency` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActionDependency" DROP CONSTRAINT "ActionDependency_actionId_fkey";

-- DropForeignKey
ALTER TABLE "ActionDependency" DROP CONSTRAINT "ActionDependency_dependencyId_fkey";

-- DropTable
DROP TABLE "ActionDependency";
