-- CreateEnum
CREATE TYPE "RegulatoryStatus" AS ENUM ('REGISTERED', 'EXEMPT', 'PENDING_REGISTRATION', 'NOT_APPLICABLE');

-- AlterTable
ALTER TABLE "organizations" ADD COLUMN     "description" TEXT,
ADD COLUMN     "jurisdiction" TEXT,
ADD COLUMN     "regulatoryStatus" "RegulatoryStatus";

-- CreateTable
CREATE TABLE "dashboard_layouts" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "role" VARCHAR(50) NOT NULL,
    "layout" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dashboard_layouts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "dashboard_layouts_userId_idx" ON "dashboard_layouts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "dashboard_layouts_userId_role_key" ON "dashboard_layouts"("userId", "role");

-- AddForeignKey
ALTER TABLE "dashboard_layouts" ADD CONSTRAINT "dashboard_layouts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
