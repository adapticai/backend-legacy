/*
  Warnings:

  - You are about to drop the column `organizationId` on the `Workflow` table. All the data in the column will be lost.
  - You are about to drop the column `currentOrganization` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Organization` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrganizationResource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrganizationUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[workspaceId,name]` on the table `Workflow` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workspaceId,slug]` on the table `Workflow` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `workspaceId` to the `Workflow` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EnvironmentVariable" DROP CONSTRAINT "EnvironmentVariable_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationResource" DROP CONSTRAINT "OrganizationResource_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationUser" DROP CONSTRAINT "OrganizationUser_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationUser" DROP CONSTRAINT "OrganizationUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceAction" DROP CONSTRAINT "ResourceAction_workspaceResourceId_fkey";

-- DropForeignKey
ALTER TABLE "Workflow" DROP CONSTRAINT "Workflow_organizationId_fkey";

-- DropIndex
DROP INDEX "Workflow_organizationId_name_key";

-- DropIndex
DROP INDEX "Workflow_organizationId_slug_key";

-- AlterTable
ALTER TABLE "Workflow" DROP COLUMN "organizationId",
ADD COLUMN     "workspaceId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "currentOrganization",
ADD COLUMN     "currentWorkspace" TEXT;

-- DropTable
DROP TABLE "Organization";

-- DropTable
DROP TABLE "OrganizationResource";

-- DropTable
DROP TABLE "OrganizationUser";

-- CreateTable
CREATE TABLE "WorkspaceResource" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" "ResourceType" NOT NULL,
    "config" JSONB NOT NULL,
    "status" "ResourceStatus" NOT NULL,
    "workspaceId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkspaceResource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceResource_workspaceId_name_key" ON "WorkspaceResource"("workspaceId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Workflow_workspaceId_name_key" ON "Workflow"("workspaceId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Workflow_workspaceId_slug_key" ON "Workflow"("workspaceId", "slug");

-- AddForeignKey
ALTER TABLE "Workflow" ADD CONSTRAINT "Workflow_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvironmentVariable" ADD CONSTRAINT "EnvironmentVariable_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceAction" ADD CONSTRAINT "ResourceAction_workspaceResourceId_fkey" FOREIGN KEY ("workspaceResourceId") REFERENCES "WorkspaceResource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceResource" ADD CONSTRAINT "WorkspaceResource_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;
