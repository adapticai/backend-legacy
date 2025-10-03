/*
  Warnings:

  - The values [GPT_4O,GPT_4O_MINI,O1_PREVIEW,O1_MINI,O1,O3_MINI] on the enum `OpenaiModel` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OpenaiModel_new" AS ENUM ('GPT_5', 'GPT_5_MINI', 'GPT_5_NANO', 'GPT_4_1', 'GPT_4_1_MINI', 'GPT_4_1_NANO');
ALTER TABLE "public"."users" ALTER COLUMN "openaiModel" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "openaiModel" TYPE "OpenaiModel_new" USING ("openaiModel"::text::"OpenaiModel_new");
ALTER TYPE "OpenaiModel" RENAME TO "OpenaiModel_old";
ALTER TYPE "OpenaiModel_new" RENAME TO "OpenaiModel";
DROP TYPE "public"."OpenaiModel_old";
ALTER TABLE "users" ALTER COLUMN "openaiModel" SET DEFAULT 'GPT_5_MINI';
COMMIT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "openaiModel" SET DEFAULT 'GPT_5_MINI';
