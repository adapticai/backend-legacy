-- DropForeignKey
ALTER TABLE "contracts" DROP CONSTRAINT "contracts_assetId_fkey";

-- AlterTable
ALTER TABLE "NewsArticleAssetSentiment" ALTER COLUMN "assetId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Position" ALTER COLUMN "assetId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "contracts" ALTER COLUMN "assetId" DROP NOT NULL,
ALTER COLUMN "orderId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "deliverables" ALTER COLUMN "assetId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "assetId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "trades" ALTER COLUMN "assetId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;
