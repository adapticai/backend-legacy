-- CreateEnum
CREATE TYPE "ScheduledOptionOrderStatus" AS ENUM ('PENDING', 'EXECUTED', 'CANCELED');

-- CreateTable
CREATE TABLE "ScheduledOptionOrder" (
    "id" UUID NOT NULL,
    "payload" JSONB NOT NULL,
    "status" "ScheduledOptionOrderStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "ScheduledOptionOrder_pkey" PRIMARY KEY ("id")
);
