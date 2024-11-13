/*
  Warnings:

  - A unique constraint covering the columns `[actionId]` on the table `InputObject` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stepId]` on the table `InputObject` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[actionId]` on the table `OutputObject` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stepId]` on the table `OutputObject` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "InputObject_actionId_key" ON "InputObject"("actionId");

-- CreateIndex
CREATE UNIQUE INDEX "InputObject_stepId_key" ON "InputObject"("stepId");

-- CreateIndex
CREATE UNIQUE INDEX "OutputObject_actionId_key" ON "OutputObject"("actionId");

-- CreateIndex
CREATE UNIQUE INDEX "OutputObject_stepId_key" ON "OutputObject"("stepId");
