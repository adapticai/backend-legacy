/*
  Warnings:

  - You are about to drop the column `currentWorkspace` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `WorkspaceResource` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EnvironmentVariable" DROP CONSTRAINT "EnvironmentVariable_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceAction" DROP CONSTRAINT "ResourceAction_workspaceResourceId_fkey";

-- DropForeignKey
ALTER TABLE "Workflow" DROP CONSTRAINT "Workflow_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "WorkspaceResource" DROP CONSTRAINT "WorkspaceResource_workspaceId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "currentWorkspace",
ADD COLUMN     "currentOrganization" TEXT;

-- DropTable
DROP TABLE "WorkspaceResource";

-- CreateTable
CREATE TABLE "Organization" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "website" TEXT,
    "industry" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "workspaceId" UUID,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationUser" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "organizationId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrganizationUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationResource" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" "ResourceType" NOT NULL,
    "config" JSONB NOT NULL,
    "status" "ResourceStatus" NOT NULL,
    "workspaceId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrganizationResource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organization_slug_key" ON "Organization"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_name_slug_key" ON "Organization"("name", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationUser_userId_organizationId_key" ON "OrganizationUser"("userId", "organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationResource_workspaceId_name_key" ON "OrganizationResource"("workspaceId", "name");

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workflow" ADD CONSTRAINT "Workflow_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvironmentVariable" ADD CONSTRAINT "EnvironmentVariable_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceAction" ADD CONSTRAINT "ResourceAction_workspaceResourceId_fkey" FOREIGN KEY ("workspaceResourceId") REFERENCES "OrganizationResource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationUser" ADD CONSTRAINT "OrganizationUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationUser" ADD CONSTRAINT "OrganizationUser_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationResource" ADD CONSTRAINT "OrganizationResource_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
