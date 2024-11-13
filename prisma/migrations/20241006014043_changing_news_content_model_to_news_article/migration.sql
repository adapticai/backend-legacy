/*
  Warnings:

  - You are about to drop the `NewsAssetSentiment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NewsAssetSentiment" DROP CONSTRAINT "NewsAssetSentiment_assetId_fkey";

-- DropForeignKey
ALTER TABLE "NewsAssetSentiment" DROP CONSTRAINT "NewsAssetSentiment_newsId_fkey";

-- DropTable
DROP TABLE "NewsAssetSentiment";

-- CreateTable
CREATE TABLE "NewsArticleAssetSentiment" (
    "id" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "newsArticleId" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "relevancyScore" TEXT,
    "sentimentScore" TEXT,
    "sentimentLabel" TEXT,

    CONSTRAINT "NewsArticleAssetSentiment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsArticleAssetSentiment_url_key" ON "NewsArticleAssetSentiment"("url");

-- AddForeignKey
ALTER TABLE "NewsArticleAssetSentiment" ADD CONSTRAINT "NewsArticleAssetSentiment_newsArticleId_fkey" FOREIGN KEY ("newsArticleId") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsArticleAssetSentiment" ADD CONSTRAINT "NewsArticleAssetSentiment_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
