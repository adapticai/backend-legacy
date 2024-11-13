/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('EC2_INSTANCE', 'S3_BUCKET', 'NETLIFY_SITE', 'MAPBOX_INSTANCE', 'AMAZON_STORE', 'WORDPRESS_INSTANCE', 'NEXTJS_APP', 'GITHUB_REPO', 'CICD_PIPELINE', 'OTHER');

-- CreateEnum
CREATE TYPE "ResourceStatus" AS ENUM ('PENDING', 'PROVISIONING', 'ACTIVE', 'FAILED', 'DEPROVISIONING', 'INACTIVE');

-- CreateEnum
CREATE TYPE "OperationType" AS ENUM ('CREATE', 'UPDATE', 'DELETE', 'DEPLOY');

-- CreateEnum
CREATE TYPE "OperationStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "DependencyType" AS ENUM ('NODE_MODULE', 'PYTHON_PACKAGE', 'API', 'SAAS_PLATFORM', 'UI_AUTOMATION', 'UNSTRUCTURED_IO', 'OTHER');

-- CreateEnum
CREATE TYPE "TriggerType" AS ENUM ('EVENT', 'SCHEDULE', 'BOTH');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('USER_REQUEST', 'WEBHOOK', 'SYSTEM_EVENT', 'WORKFLOW_COMPLETION', 'ACTION_COMPLETION', 'CUSTOM');

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "image" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workflow" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "triggerType" "TriggerType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectId" UUID NOT NULL,

    CONSTRAINT "Workflow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "camelCase" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "code" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "workflowId" UUID NOT NULL,
    "output" JSONB,
    "input" JSONB,
    "error" TEXT,
    "parentActionId" UUID,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectResource" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" "ResourceType" NOT NULL,
    "config" JSONB NOT NULL,
    "status" "ResourceStatus" NOT NULL,
    "projectId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResourceAction" (
    "id" UUID NOT NULL,
    "actionId" UUID NOT NULL,
    "projectResourceId" UUID NOT NULL,
    "operationType" "OperationType" NOT NULL,
    "status" "OperationStatus" NOT NULL,
    "logs" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResourceAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionTriggerRel" (
    "id" UUID NOT NULL,
    "actionId" UUID NOT NULL,
    "triggerId" UUID NOT NULL,

    CONSTRAINT "ActionTriggerRel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestData" (
    "id" UUID NOT NULL,
    "actionId" UUID NOT NULL,
    "input" JSONB NOT NULL,
    "output" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnvironmentVariable" (
    "id" UUID NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT,
    "projectId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EnvironmentVariable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionEnvironmentVariable" (
    "id" UUID NOT NULL,
    "actionId" UUID NOT NULL,
    "environmentVarId" UUID NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActionEnvironmentVariable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dependency" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" "DependencyType" NOT NULL,
    "version" TEXT,
    "url" TEXT,
    "config" JSONB,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dependency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionDependency" (
    "id" UUID NOT NULL,
    "actionId" UUID NOT NULL,
    "dependencyId" UUID NOT NULL,
    "config" JSONB,

    CONSTRAINT "ActionDependency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" UUID NOT NULL,
    "frequency" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "workflowId" UUID,
    "actionId" UUID,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trigger" (
    "id" UUID NOT NULL,
    "eventType" "EventType" NOT NULL,
    "configuration" JSONB,

    CONSTRAINT "Trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkflowTrigger" (
    "id" UUID NOT NULL,
    "workflowId" UUID NOT NULL,
    "triggerId" UUID NOT NULL,

    CONSTRAINT "WorkflowTrigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectUser" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "projectId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_slug_key" ON "Project"("name", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Workflow_projectId_name_key" ON "Workflow"("projectId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Workflow_projectId_slug_key" ON "Workflow"("projectId", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Action_workflowId_name_key" ON "Action"("workflowId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Action_workflowId_slug_key" ON "Action"("workflowId", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectResource_projectId_name_key" ON "ProjectResource"("projectId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "ResourceAction_actionId_projectResourceId_key" ON "ResourceAction"("actionId", "projectResourceId");

-- CreateIndex
CREATE UNIQUE INDEX "ActionTriggerRel_actionId_triggerId_key" ON "ActionTriggerRel"("actionId", "triggerId");

-- CreateIndex
CREATE UNIQUE INDEX "TestData_actionId_key" ON "TestData"("actionId");

-- CreateIndex
CREATE UNIQUE INDEX "EnvironmentVariable_projectId_key_key" ON "EnvironmentVariable"("projectId", "key");

-- CreateIndex
CREATE UNIQUE INDEX "ActionEnvironmentVariable_actionId_environmentVarId_key" ON "ActionEnvironmentVariable"("actionId", "environmentVarId");

-- CreateIndex
CREATE UNIQUE INDEX "ActionDependency_actionId_dependencyId_key" ON "ActionDependency"("actionId", "dependencyId");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_workflowId_key" ON "Schedule"("workflowId");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_actionId_key" ON "Schedule"("actionId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkflowTrigger_workflowId_triggerId_key" ON "WorkflowTrigger"("workflowId", "triggerId");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectUser_userId_projectId_key" ON "ProjectUser"("userId", "projectId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workflow" ADD CONSTRAINT "Workflow_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_parentActionId_fkey" FOREIGN KEY ("parentActionId") REFERENCES "Action"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectResource" ADD CONSTRAINT "ProjectResource_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceAction" ADD CONSTRAINT "ResourceAction_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceAction" ADD CONSTRAINT "ResourceAction_projectResourceId_fkey" FOREIGN KEY ("projectResourceId") REFERENCES "ProjectResource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionTriggerRel" ADD CONSTRAINT "ActionTriggerRel_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionTriggerRel" ADD CONSTRAINT "ActionTriggerRel_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Trigger"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestData" ADD CONSTRAINT "TestData_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvironmentVariable" ADD CONSTRAINT "EnvironmentVariable_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionEnvironmentVariable" ADD CONSTRAINT "ActionEnvironmentVariable_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionEnvironmentVariable" ADD CONSTRAINT "ActionEnvironmentVariable_environmentVarId_fkey" FOREIGN KEY ("environmentVarId") REFERENCES "EnvironmentVariable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionDependency" ADD CONSTRAINT "ActionDependency_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionDependency" ADD CONSTRAINT "ActionDependency_dependencyId_fkey" FOREIGN KEY ("dependencyId") REFERENCES "Dependency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowTrigger" ADD CONSTRAINT "WorkflowTrigger_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowTrigger" ADD CONSTRAINT "WorkflowTrigger_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Trigger"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectUser" ADD CONSTRAINT "ProjectUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectUser" ADD CONSTRAINT "ProjectUser_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
