/*
  Warnings:

  - The values [INVITED,REGISTERED] on the enum `WaitlistStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
ALTER TYPE "UserRole" ADD VALUE 'SUPERADMIN';

-- AlterEnum
BEGIN;
CREATE TYPE "WaitlistStatus_new" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');
ALTER TABLE "public"."waitlist_entries" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "waitlist_entries" ALTER COLUMN "status" TYPE "WaitlistStatus_new" USING ("status"::text::"WaitlistStatus_new");
ALTER TYPE "WaitlistStatus" RENAME TO "WaitlistStatus_old";
ALTER TYPE "WaitlistStatus_new" RENAME TO "WaitlistStatus";
DROP TYPE "public"."WaitlistStatus_old";
ALTER TABLE "waitlist_entries" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropIndex
DROP INDEX "actions_deletedAt_idx";

-- DropIndex
DROP INDEX "alpaca_accounts_deletedAt_idx";

-- DropIndex
DROP INDEX "trades_deletedAt_idx";

-- DropIndex
DROP INDEX "users_deletedAt_idx";

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "actions" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "alerts" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "allocations" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "alpaca_accounts" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "assets" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "audit_logs" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "authenticators" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "economic_events" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "invite_tokens" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "market_sentiments" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "news" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "sessions" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "trades" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "waitlist_entries" ALTER COLUMN "id" DROP DEFAULT;
