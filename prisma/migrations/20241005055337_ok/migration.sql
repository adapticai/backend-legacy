/*
  Warnings:

  - You are about to drop the column `currentWorkspace` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Action` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ActionEnvironmentVariable` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ActionTrigger` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dependency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Documentation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EnvironmentVariable` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InputObject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OutputObject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Parameter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Resource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResourceAction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Schedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `State` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Step` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subsection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trigger` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UseCase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Workflow` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkflowTrigger` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Workspace` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkspaceResource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkspaceUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ActionToDependency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DependencyToStep` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('STOCK', 'OPTION', 'CRYPTO', 'CURRENCY', 'COMMODITY', 'ETF');

-- CreateEnum
CREATE TYPE "TradeAction" AS ENUM ('BUY', 'SELL');

-- CreateEnum
CREATE TYPE "TradeStepAction" AS ENUM ('ENTER', 'HEDGE', 'EXIT');

-- CreateEnum
CREATE TYPE "TradeStepSide" AS ENUM ('BUY', 'SELL');

-- CreateEnum
CREATE TYPE "TradeStepStatus" AS ENUM ('STAGED', 'EXECUTED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "TradeStatus" AS ENUM ('STAGED', 'ACTIVE', 'PARTIAL', 'COMPLETED');

-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('MARKET', 'LIMIT', 'STOP', 'STOP_LIMIT');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'FILLED', 'CANCELLED', 'REJECTED');

-- CreateEnum
CREATE TYPE "AlertType" AS ENUM ('SUCCESS', 'WARNING', 'ERROR', 'INFO');

-- CreateEnum
CREATE TYPE "NewsSentiment" AS ENUM ('POSITIVE', 'NEUTRAL', 'NEGATIVE');

-- CreateEnum
CREATE TYPE "EventImportance" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_workflowId_fkey";

-- DropForeignKey
ALTER TABLE "ActionEnvironmentVariable" DROP CONSTRAINT "ActionEnvironmentVariable_actionId_fkey";

-- DropForeignKey
ALTER TABLE "ActionEnvironmentVariable" DROP CONSTRAINT "ActionEnvironmentVariable_environmentVariableId_fkey";

-- DropForeignKey
ALTER TABLE "ActionTrigger" DROP CONSTRAINT "ActionTrigger_actionId_fkey";

-- DropForeignKey
ALTER TABLE "ActionTrigger" DROP CONSTRAINT "ActionTrigger_triggerId_fkey";

-- DropForeignKey
ALTER TABLE "Documentation" DROP CONSTRAINT "Documentation_dependencyId_fkey";

-- DropForeignKey
ALTER TABLE "EnvironmentVariable" DROP CONSTRAINT "EnvironmentVariable_stepId_fkey";

-- DropForeignKey
ALTER TABLE "EnvironmentVariable" DROP CONSTRAINT "EnvironmentVariable_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "Example" DROP CONSTRAINT "Example_documentationId_fkey";

-- DropForeignKey
ALTER TABLE "Example" DROP CONSTRAINT "Example_subsectionId_fkey";

-- DropForeignKey
ALTER TABLE "InputObject" DROP CONSTRAINT "InputObject_actionId_fkey";

-- DropForeignKey
ALTER TABLE "InputObject" DROP CONSTRAINT "InputObject_stepId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "OutputObject" DROP CONSTRAINT "OutputObject_actionId_fkey";

-- DropForeignKey
ALTER TABLE "OutputObject" DROP CONSTRAINT "OutputObject_stepId_fkey";

-- DropForeignKey
ALTER TABLE "Parameter" DROP CONSTRAINT "Parameter_inputId_fkey";

-- DropForeignKey
ALTER TABLE "Parameter" DROP CONSTRAINT "Parameter_outputId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_stepId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceAction" DROP CONSTRAINT "ResourceAction_actionId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceAction" DROP CONSTRAINT "ResourceAction_workspaceResourceId_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_actionId_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_workflowId_fkey";

-- DropForeignKey
ALTER TABLE "State" DROP CONSTRAINT "State_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Step" DROP CONSTRAINT "Step_actionId_fkey";

-- DropForeignKey
ALTER TABLE "Subsection" DROP CONSTRAINT "Subsection_documentationId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_documentationId_fkey";

-- DropForeignKey
ALTER TABLE "TestData" DROP CONSTRAINT "TestData_actionId_fkey";

-- DropForeignKey
ALTER TABLE "TestData" DROP CONSTRAINT "TestData_stepId_fkey";

-- DropForeignKey
ALTER TABLE "UseCase" DROP CONSTRAINT "UseCase_documentationId_fkey";

-- DropForeignKey
ALTER TABLE "Workflow" DROP CONSTRAINT "Workflow_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "WorkflowTrigger" DROP CONSTRAINT "WorkflowTrigger_triggerId_fkey";

-- DropForeignKey
ALTER TABLE "WorkflowTrigger" DROP CONSTRAINT "WorkflowTrigger_workflowId_fkey";

-- DropForeignKey
ALTER TABLE "Workspace" DROP CONSTRAINT "Workspace_cityId_fkey";

-- DropForeignKey
ALTER TABLE "Workspace" DROP CONSTRAINT "Workspace_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Workspace" DROP CONSTRAINT "Workspace_stateId_fkey";

-- DropForeignKey
ALTER TABLE "WorkspaceResource" DROP CONSTRAINT "WorkspaceResource_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "WorkspaceUser" DROP CONSTRAINT "WorkspaceUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "WorkspaceUser" DROP CONSTRAINT "WorkspaceUser_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "_ActionToDependency" DROP CONSTRAINT "_ActionToDependency_A_fkey";

-- DropForeignKey
ALTER TABLE "_ActionToDependency" DROP CONSTRAINT "_ActionToDependency_B_fkey";

-- DropForeignKey
ALTER TABLE "_DependencyToStep" DROP CONSTRAINT "_DependencyToStep_A_fkey";

-- DropForeignKey
ALTER TABLE "_DependencyToStep" DROP CONSTRAINT "_DependencyToStep_B_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "currentWorkspace",
ADD COLUMN     "currentPortfolio" TEXT;

-- DropTable
DROP TABLE "Action";

-- DropTable
DROP TABLE "ActionEnvironmentVariable";

-- DropTable
DROP TABLE "ActionTrigger";

-- DropTable
DROP TABLE "City";

-- DropTable
DROP TABLE "Country";

-- DropTable
DROP TABLE "Dependency";

-- DropTable
DROP TABLE "Documentation";

-- DropTable
DROP TABLE "EnvironmentVariable";

-- DropTable
DROP TABLE "Example";

-- DropTable
DROP TABLE "InputObject";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "OutputObject";

-- DropTable
DROP TABLE "Parameter";

-- DropTable
DROP TABLE "Resource";

-- DropTable
DROP TABLE "ResourceAction";

-- DropTable
DROP TABLE "Schedule";

-- DropTable
DROP TABLE "State";

-- DropTable
DROP TABLE "Step";

-- DropTable
DROP TABLE "Subsection";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "TestData";

-- DropTable
DROP TABLE "Trigger";

-- DropTable
DROP TABLE "UseCase";

-- DropTable
DROP TABLE "Workflow";

-- DropTable
DROP TABLE "WorkflowTrigger";

-- DropTable
DROP TABLE "Workspace";

-- DropTable
DROP TABLE "WorkspaceResource";

-- DropTable
DROP TABLE "WorkspaceUser";

-- DropTable
DROP TABLE "_ActionToDependency";

-- DropTable
DROP TABLE "_DependencyToStep";

-- DropEnum
DROP TYPE "DependencyType";

-- DropEnum
DROP TYPE "EventType";

-- DropEnum
DROP TYPE "OperationStatus";

-- DropEnum
DROP TYPE "OperationType";

-- DropEnum
DROP TYPE "ParamType";

-- DropEnum
DROP TYPE "ResourceStatus";

-- DropEnum
DROP TYPE "ResourceType";

-- DropEnum
DROP TYPE "Status";

-- DropEnum
DROP TYPE "StepType";

-- DropEnum
DROP TYPE "TriggerType";

-- CreateTable
CREATE TABLE "portfolios" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_users" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "portfolioId" UUID NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "environment_variables" (
    "id" UUID NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT,
    "portfolioId" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "environment_variables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assets" (
    "id" UUID NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "AssetType" NOT NULL,
    "logoUrl" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "holdings" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "portfolioId" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "averagePrice" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "holdings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trades" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "portfolioId" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "action" "TradeAction" NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "TradeStatus" NOT NULL DEFAULT 'STAGED',

    CONSTRAINT "trades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trade_steps" (
    "id" UUID NOT NULL,
    "tradeId" UUID NOT NULL,
    "sequence" INTEGER NOT NULL,
    "action" "TradeStepAction" NOT NULL,
    "hedgeType" TEXT,
    "hedgePrice" DOUBLE PRECISION,
    "buyPrice" DOUBLE PRECISION,
    "sellPrice" DOUBLE PRECISION,
    "qty" DOUBLE PRECISION NOT NULL,
    "side" "TradeStepSide" NOT NULL,
    "type" "OrderType" NOT NULL,
    "stopLoss" DOUBLE PRECISION,
    "targetPrice" DOUBLE PRECISION,
    "note" TEXT NOT NULL,
    "executionTime" TIMESTAMP(3),
    "status" "TradeStepStatus" NOT NULL,
    "fee" DOUBLE PRECISION,

    CONSTRAINT "trade_steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "portfolioId" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "type" "OrderType" NOT NULL,
    "action" "TradeAction" NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_recommendations" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "portfolioId" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "action" "TradeAction" NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_recommendations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "risk_allocations" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "portfolioId" UUID NOT NULL,
    "assetType" "AssetType" NOT NULL,
    "allocation" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "risk_allocations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alerts" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "portfolioId" UUID NOT NULL,
    "message" TEXT NOT NULL,
    "type" "AlertType" NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alerts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "source" TEXT NOT NULL,
    "url" TEXT,
    "sentiment" "NewsSentiment" NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economic_events" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "importance" "EventImportance" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "economic_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_allocations" (
    "id" UUID NOT NULL,
    "portfolioId" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "allocation" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_allocations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performance_metrics" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "portfolioId" UUID NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "performance_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "portfolios_slug_key" ON "portfolios"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "portfolio_users_userId_portfolioId_key" ON "portfolio_users"("userId", "portfolioId");

-- CreateIndex
CREATE UNIQUE INDEX "environment_variables_portfolioId_key_key" ON "environment_variables"("portfolioId", "key");

-- CreateIndex
CREATE UNIQUE INDEX "assets_symbol_key" ON "assets"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "holdings_userId_portfolioId_assetId_key" ON "holdings"("userId", "portfolioId", "assetId");

-- CreateIndex
CREATE UNIQUE INDEX "risk_allocations_userId_portfolioId_assetType_key" ON "risk_allocations"("userId", "portfolioId", "assetType");

-- CreateIndex
CREATE UNIQUE INDEX "portfolio_allocations_portfolioId_assetId_key" ON "portfolio_allocations"("portfolioId", "assetId");

-- AddForeignKey
ALTER TABLE "portfolio_users" ADD CONSTRAINT "portfolio_users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_users" ADD CONSTRAINT "portfolio_users_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "environment_variables" ADD CONSTRAINT "environment_variables_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holdings" ADD CONSTRAINT "holdings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holdings" ADD CONSTRAINT "holdings_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holdings" ADD CONSTRAINT "holdings_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trade_steps" ADD CONSTRAINT "trade_steps_tradeId_fkey" FOREIGN KEY ("tradeId") REFERENCES "trades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_recommendations" ADD CONSTRAINT "ai_recommendations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_recommendations" ADD CONSTRAINT "ai_recommendations_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_recommendations" ADD CONSTRAINT "ai_recommendations_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risk_allocations" ADD CONSTRAINT "risk_allocations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risk_allocations" ADD CONSTRAINT "risk_allocations_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_allocations" ADD CONSTRAINT "portfolio_allocations_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_allocations" ADD CONSTRAINT "portfolio_allocations_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performance_metrics" ADD CONSTRAINT "performance_metrics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performance_metrics" ADD CONSTRAINT "performance_metrics_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
