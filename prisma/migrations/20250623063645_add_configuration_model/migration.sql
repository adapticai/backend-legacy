-- CreateEnum
CREATE TYPE "ConfigType" AS ENUM ('ANALYTICS', 'RISK_MANAGEMENT', 'TRADING', 'SYSTEM', 'USER_PREFERENCE');

-- CreateTable
CREATE TABLE "configurations" (
    "id" TEXT NOT NULL,
    "configKey" TEXT NOT NULL,
    "configValue" JSONB NOT NULL,
    "type" "ConfigType" NOT NULL,
    "scope" TEXT,
    "version" TEXT,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "configurations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "configurations_configKey_key" ON "configurations"("configKey");
