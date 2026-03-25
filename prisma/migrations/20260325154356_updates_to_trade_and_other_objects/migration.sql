-- AlterEnum
ALTER TYPE "TradeStatus" ADD VALUE 'SUPERSEDED';

-- AlterTable
ALTER TABLE "actions" ADD COLUMN     "supersededActionId" UUID,
ADD COLUMN     "triggerSource" TEXT;

-- AlterTable
ALTER TABLE "trades" ADD COLUMN     "lastReunderwrittenAt" TIMESTAMP(3),
ADD COLUMN     "supersededById" UUID,
ADD COLUMN     "thesisVersion" INTEGER NOT NULL DEFAULT 1;
