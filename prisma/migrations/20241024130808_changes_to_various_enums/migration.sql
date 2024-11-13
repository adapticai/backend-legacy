-- AlterEnum
ALTER TYPE "TradeSignal" ADD VALUE 'NO_SIGNAL';

-- AlterEnum
ALTER TYPE "TradeStrategy" ADD VALUE 'NO_STRATEGY';

-- DropForeignKey
ALTER TABLE "NewsArticleAssetSentiment" DROP CONSTRAINT "NewsArticleAssetSentiment_assetId_fkey";

-- AddForeignKey
ALTER TABLE "NewsArticleAssetSentiment" ADD CONSTRAINT "NewsArticleAssetSentiment_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
