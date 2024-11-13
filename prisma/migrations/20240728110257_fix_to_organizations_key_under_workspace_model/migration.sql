/*
  Warnings:

  - You are about to drop the column `camelCase` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `input` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `output` on the `Action` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stepId]` on the table `TestData` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ParamType" AS ENUM ('STRING', 'NUMBER', 'BOOLEAN', 'OBJECT', 'ARRAY');

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "camelCase",
DROP COLUMN "input",
DROP COLUMN "output";

-- AlterTable
ALTER TABLE "TestData" ADD COLUMN     "stepId" UUID,
ALTER COLUMN "input" DROP NOT NULL,
ALTER COLUMN "output" DROP NOT NULL;

-- CreateTable
CREATE TABLE "InputObject" (
    "id" UUID NOT NULL,
    "actionId" UUID NOT NULL,
    "stepId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InputObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutputObject" (
    "id" UUID NOT NULL,
    "actionId" UUID NOT NULL,
    "stepId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OutputObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parameter" (
    "id" UUID NOT NULL,
    "key" TEXT NOT NULL,
    "type" "ParamType" NOT NULL,
    "value" JSONB NOT NULL,
    "required" BOOLEAN NOT NULL,
    "inputId" UUID,
    "outputId" UUID,

    CONSTRAINT "Parameter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TestData_stepId_key" ON "TestData"("stepId");

-- AddForeignKey
ALTER TABLE "TestData" ADD CONSTRAINT "TestData_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InputObject" ADD CONSTRAINT "InputObject_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InputObject" ADD CONSTRAINT "InputObject_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutputObject" ADD CONSTRAINT "OutputObject_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutputObject" ADD CONSTRAINT "OutputObject_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parameter" ADD CONSTRAINT "Parameter_inputId_fkey" FOREIGN KEY ("inputId") REFERENCES "InputObject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parameter" ADD CONSTRAINT "Parameter_outputId_fkey" FOREIGN KEY ("outputId") REFERENCES "OutputObject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
