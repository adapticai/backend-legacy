/*
  Warnings:

  - The values [STAGED,ACTIVE] on the enum `TradeStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TradeStatus_new" AS ENUM ('PENDING', 'OPEN', 'PARTIAL', 'COMPLETED');
ALTER TABLE "trades" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "trades" ALTER COLUMN "status" TYPE "TradeStatus_new" USING ("status"::text::"TradeStatus_new");
ALTER TYPE "TradeStatus" RENAME TO "TradeStatus_old";
ALTER TYPE "TradeStatus_new" RENAME TO "TradeStatus";
DROP TYPE "TradeStatus_old";
ALTER TABLE "trades" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "trades" ALTER COLUMN "status" SET DEFAULT 'PENDING';
