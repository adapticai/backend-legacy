-- CreateEnum
CREATE TYPE "OrgBusinessType" AS ENUM ('FUND_OPERATOR', 'FAMILY_OFFICE', 'SWF', 'PRIVATE_OFFICE');

-- AlterTable
ALTER TABLE "funds" ADD COLUMN     "tradingOverrides" JSONB;

-- AlterTable
ALTER TABLE "organizations" ADD COLUMN     "businessType" "OrgBusinessType",
ADD COLUMN     "tradingDefaults" JSONB;
