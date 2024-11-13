/*
  Warnings:

  - You are about to drop the column `environmentVarId` on the `ActionEnvironmentVariable` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[actionId,environmentVariableId]` on the table `ActionEnvironmentVariable` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `environmentVariableId` to the `ActionEnvironmentVariable` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ActionEnvironmentVariable" DROP CONSTRAINT "ActionEnvironmentVariable_environmentVarId_fkey";

-- DropIndex
DROP INDEX "ActionEnvironmentVariable_actionId_environmentVarId_key";

-- AlterTable
ALTER TABLE "ActionEnvironmentVariable" DROP COLUMN "environmentVarId",
ADD COLUMN     "environmentVariableId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ActionEnvironmentVariable_actionId_environmentVariableId_key" ON "ActionEnvironmentVariable"("actionId", "environmentVariableId");

-- AddForeignKey
ALTER TABLE "ActionEnvironmentVariable" ADD CONSTRAINT "ActionEnvironmentVariable_environmentVariableId_fkey" FOREIGN KEY ("environmentVariableId") REFERENCES "EnvironmentVariable"("id") ON DELETE CASCADE ON UPDATE CASCADE;
