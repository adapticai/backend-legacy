-- CreateEnum
CREATE TYPE "AlertStatus" AS ENUM ('ACTIVE', 'ACKNOWLEDGED', 'RESOLVED', 'SUPPRESSED');

-- AlterTable
ALTER TABLE "alerts" ADD COLUMN     "status" "AlertStatus" NOT NULL DEFAULT 'ACTIVE';
