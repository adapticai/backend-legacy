/*
  Warnings:

  - You are about to drop the `ActionTriggerRel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActionTriggerRel" DROP CONSTRAINT "ActionTriggerRel_actionId_fkey";

-- DropForeignKey
ALTER TABLE "ActionTriggerRel" DROP CONSTRAINT "ActionTriggerRel_triggerId_fkey";

-- DropTable
DROP TABLE "ActionTriggerRel";

-- CreateTable
CREATE TABLE "ActionTrigger" (
    "id" UUID NOT NULL,
    "actionId" UUID NOT NULL,
    "triggerId" UUID NOT NULL,

    CONSTRAINT "ActionTrigger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActionTrigger_actionId_triggerId_key" ON "ActionTrigger"("actionId", "triggerId");

-- AddForeignKey
ALTER TABLE "ActionTrigger" ADD CONSTRAINT "ActionTrigger_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionTrigger" ADD CONSTRAINT "ActionTrigger_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Trigger"("id") ON DELETE CASCADE ON UPDATE CASCADE;
