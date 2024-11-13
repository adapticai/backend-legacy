/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `NewsAssetSentiment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `NewsAssetSentiment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsAssetSentiment" ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "NewsAssetSentiment_url_key" ON "NewsAssetSentiment"("url");
