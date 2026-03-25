-- AlterEnum
ALTER TYPE "TradeStatus" ADD VALUE 'SUPERSEDED';

-- AlterTable: trades
ALTER TABLE "trades" ADD COLUMN "thesisVersion" INTEGER NOT NULL DEFAULT 1;
ALTER TABLE "trades" ADD COLUMN "lastReunderwrittenAt" TIMESTAMP(3);
ALTER TABLE "trades" ADD COLUMN "supersededById" UUID;

-- AlterTable: actions
ALTER TABLE "actions" ADD COLUMN "supersededActionId" UUID;
ALTER TABLE "actions" ADD COLUMN "triggerSource" TEXT;
