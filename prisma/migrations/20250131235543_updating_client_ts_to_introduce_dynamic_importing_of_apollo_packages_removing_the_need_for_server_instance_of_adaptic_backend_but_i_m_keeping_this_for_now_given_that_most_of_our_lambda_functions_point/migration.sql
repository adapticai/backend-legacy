-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "OpenaiModel" ADD VALUE 'O1';
ALTER TYPE "OpenaiModel" ADD VALUE 'O3_MINI';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "openaiModel" SET DEFAULT 'GPT_4O_MINI';
