-- CreateEnum
CREATE TYPE "SubscriptionPlan" AS ENUM ('FREE', 'PRO', 'BUSINESS');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'CREATING', 'INITING', 'RUNNING', 'STOPPED', 'DELETED');

-- AlterTable
ALTER TABLE "Action" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ActionEnvironmentVariable" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Dependency" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "EnvironmentVariable" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ProjectResource" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ResourceAction" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "customerId" INTEGER,
ADD COLUMN     "plan" "SubscriptionPlan";

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "authUserId" TEXT NOT NULL,
    "name" TEXT,
    "plan" "SubscriptionPlan",
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "stripePriceId" TEXT,
    "stripeCurrentPeriodEnd" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "K8sClusterConfig" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "authUserId" TEXT NOT NULL,
    "plan" "SubscriptionPlan" DEFAULT 'FREE',
    "network" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" DEFAULT 'PENDING',
    "delete" BOOLEAN DEFAULT false,

    CONSTRAINT "K8sClusterConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_stripeCustomerId_key" ON "Customer"("stripeCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_stripeSubscriptionId_key" ON "Customer"("stripeSubscriptionId");

-- CreateIndex
CREATE INDEX "Customer_authUserId_idx" ON "Customer"("authUserId");

-- CreateIndex
CREATE INDEX "K8sClusterConfig_authUserId_idx" ON "K8sClusterConfig"("authUserId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
