-- CreateEnum
CREATE TYPE "OpenaiModel" AS ENUM ('GPT_4O', 'GPT_4O_MINI', 'O1_PREVIEW', 'O1_MINI');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "openaiModel" "OpenaiModel";
