/*
  Warnings:

  - The values [CRYPTO,FOREX] on the enum `AssetType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AssetType_new" AS ENUM ('STOCK', 'ETF', 'MUTUAL_FUND', 'CRYPTOCURRENCY', 'INDEX', 'COMMODITY', 'CURRENCY', 'OPTION', 'FUTURE', 'BOND', 'WARRANT', 'ADR', 'GDR', 'UNIT', 'RIGHT', 'REIT', 'CLOSED_END_FUND', 'STRUCTURED_PRODUCT', 'SWAP', 'SPOT', 'FORWARD', 'OTHER');
ALTER TABLE "assets" ALTER COLUMN "type" TYPE "AssetType_new" USING ("type"::text::"AssetType_new");
ALTER TABLE "risk_allocations" ALTER COLUMN "assetType" TYPE "AssetType_new" USING ("assetType"::text::"AssetType_new");
ALTER TYPE "AssetType" RENAME TO "AssetType_old";
ALTER TYPE "AssetType_new" RENAME TO "AssetType";
DROP TYPE "AssetType_old";
COMMIT;
