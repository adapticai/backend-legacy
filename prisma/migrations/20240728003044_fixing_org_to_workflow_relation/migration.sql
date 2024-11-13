/*
  Warnings:

  - You are about to drop the column `workspaceId` on the `Workflow` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[organizationId,name]` on the table `Workflow` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[organizationId,slug]` on the table `Workflow` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `organizationId` to the `Workflow` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Workflow" DROP CONSTRAINT "Workflow_workspaceId_fkey";

-- DropIndex
DROP INDEX "Workflow_workspaceId_name_key";

-- DropIndex
DROP INDEX "Workflow_workspaceId_slug_key";

-- AlterTable
ALTER TABLE "Workflow" DROP COLUMN "workspaceId",
ADD COLUMN     "organizationId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Workflow_organizationId_name_key" ON "Workflow"("organizationId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Workflow_organizationId_slug_key" ON "Workflow"("organizationId", "slug");

-- AddForeignKey
ALTER TABLE "Workflow" ADD CONSTRAINT "Workflow_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
