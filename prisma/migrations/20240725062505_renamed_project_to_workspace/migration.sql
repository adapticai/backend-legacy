/*
  Warnings:

  - You are about to drop the column `projectId` on the `EnvironmentVariable` table. All the data in the column will be lost.
  - You are about to drop the column `projectResourceId` on the `ResourceAction` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Workflow` table. All the data in the column will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectResource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[workspaceId,key]` on the table `EnvironmentVariable` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[actionId,workspaceResourceId]` on the table `ResourceAction` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workspaceId,name]` on the table `Workflow` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workspaceId,slug]` on the table `Workflow` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `workspaceId` to the `EnvironmentVariable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workspaceResourceId` to the `ResourceAction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workspaceId` to the `Workflow` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EnvironmentVariable" DROP CONSTRAINT "EnvironmentVariable_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectResource" DROP CONSTRAINT "ProjectResource_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectUser" DROP CONSTRAINT "ProjectUser_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectUser" DROP CONSTRAINT "ProjectUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceAction" DROP CONSTRAINT "ResourceAction_projectResourceId_fkey";

-- DropForeignKey
ALTER TABLE "Workflow" DROP CONSTRAINT "Workflow_projectId_fkey";

-- DropIndex
DROP INDEX "EnvironmentVariable_projectId_key_key";

-- DropIndex
DROP INDEX "ResourceAction_actionId_projectResourceId_key";

-- DropIndex
DROP INDEX "Workflow_projectId_name_key";

-- DropIndex
DROP INDEX "Workflow_projectId_slug_key";

-- AlterTable
ALTER TABLE "EnvironmentVariable" DROP COLUMN "projectId",
ADD COLUMN     "workspaceId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "ResourceAction" DROP COLUMN "projectResourceId",
ADD COLUMN     "workspaceResourceId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Workflow" DROP COLUMN "projectId",
ADD COLUMN     "workspaceId" UUID NOT NULL;

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "ProjectResource";

-- DropTable
DROP TABLE "ProjectUser";

-- CreateTable
CREATE TABLE "Workspace" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workspace_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "WorkspaceUser" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "workspaceId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkspaceUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Workspace_slug_key" ON "Workspace"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Workspace_name_slug_key" ON "Workspace"("name", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceResource_workspaceId_name_key" ON "WorkspaceResource"("workspaceId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceUser_userId_workspaceId_key" ON "WorkspaceUser"("userId", "workspaceId");

-- CreateIndex
CREATE UNIQUE INDEX "EnvironmentVariable_workspaceId_key_key" ON "EnvironmentVariable"("workspaceId", "key");

-- CreateIndex
CREATE UNIQUE INDEX "ResourceAction_actionId_workspaceResourceId_key" ON "ResourceAction"("actionId", "workspaceResourceId");

-- CreateIndex
CREATE UNIQUE INDEX "Workflow_workspaceId_name_key" ON "Workflow"("workspaceId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Workflow_workspaceId_slug_key" ON "Workflow"("workspaceId", "slug");

-- AddForeignKey
ALTER TABLE "Workflow" ADD CONSTRAINT "Workflow_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceResource" ADD CONSTRAINT "WorkspaceResource_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceAction" ADD CONSTRAINT "ResourceAction_workspaceResourceId_fkey" FOREIGN KEY ("workspaceResourceId") REFERENCES "WorkspaceResource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvironmentVariable" ADD CONSTRAINT "EnvironmentVariable_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceUser" ADD CONSTRAINT "WorkspaceUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceUser" ADD CONSTRAINT "WorkspaceUser_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;
