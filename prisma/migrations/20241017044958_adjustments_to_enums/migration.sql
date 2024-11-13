/*
  Warnings:

  - The values [CLOSED_END_FUND] on the enum `AssetType` will be removed. If these variants are still used in the database, this will fail.
  - Changed the type of `side` on the `trade_actions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `trade_actions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TradeActionSide" AS ENUM ('BUY', 'SELL');

-- CreateEnum
CREATE TYPE "TradeActionStatus" AS ENUM ('STAGED', 'EXECUTED', 'COMPLETED');

-- AlterEnum
BEGIN;
CREATE TYPE "AssetType_new" AS ENUM ('STOCK', 'ETF', 'MUTUAL_FUND', 'CRYPTOCURRENCY', 'INDEX', 'COMMODITY', 'CURRENCY', 'OPTION', 'FUTURE', 'BOND', 'WARRANT', 'ADR', 'GDR', 'UNIT', 'RIGHT', 'REIT', 'STRUCTURED_PRODUCT', 'SWAP', 'SPOT', 'FORWARD', 'OTHER');
ALTER TABLE "assets" ALTER COLUMN "type" TYPE "AssetType_new" USING ("type"::text::"AssetType_new");
ALTER TYPE "AssetType" RENAME TO "AssetType_old";
ALTER TYPE "AssetType_new" RENAME TO "AssetType";
DROP TYPE "AssetType_old";
COMMIT;

-- AlterTable
ALTER TABLE "trade_actions" DROP COLUMN "side",
ADD COLUMN     "side" "TradeActionSide" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "TradeActionStatus" NOT NULL;

-- DropEnum
DROP TYPE "TradeStepSide";

-- DropEnum
DROP TYPE "TradeStepStatus";
