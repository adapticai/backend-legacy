-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "expiredAt" TIMESTAMP(3),
ADD COLUMN     "expiresAt" TIMESTAMP(3),
ADD COLUMN     "failedAt" TIMESTAMP(3),
ADD COLUMN     "hwm" DOUBLE PRECISION,
ADD COLUMN     "legs" JSONB,
ADD COLUMN     "positionIntent" TEXT,
ADD COLUMN     "replacedAt" TIMESTAMP(3),
ADD COLUMN     "replacedBy" TEXT,
ADD COLUMN     "replaces" TEXT,
ADD COLUMN     "source" TEXT,
ADD COLUMN     "subtag" TEXT;
