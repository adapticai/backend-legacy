/*
  Warnings:

  - You are about to drop the column `parentActionId` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Dependency` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Dependency` table. All the data in the column will be lost.
  - Added the required column `stepId` to the `Dependency` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StepType" AS ENUM ('LAMBDA_FUNCTION', 'PRIVATE_NPM', 'INTERNAL');

-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_parentActionId_fkey";

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "parentActionId";

-- AlterTable
ALTER TABLE "Dependency" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "stepId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "EnvironmentVariable" ADD COLUMN     "stepId" UUID;

-- AlterTable
ALTER TABLE "Workspace" ADD COLUMN     "industry" TEXT;

-- CreateTable
CREATE TABLE "Step" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" "StepType" NOT NULL,
    "description" TEXT NOT NULL,
    "internalSteps" TEXT[],
    "actionId" UUID NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ResourceType" NOT NULL,
    "stepId" UUID NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Resource_stepId_idx" ON "Resource"("stepId");

-- CreateIndex
CREATE INDEX "Dependency_stepId_idx" ON "Dependency"("stepId");

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dependency" ADD CONSTRAINT "Dependency_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvironmentVariable" ADD CONSTRAINT "EnvironmentVariable_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step"("id") ON DELETE CASCADE ON UPDATE CASCADE;
