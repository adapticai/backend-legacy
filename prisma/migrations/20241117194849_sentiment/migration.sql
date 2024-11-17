-- CreateEnum
CREATE TYPE "MarketSentimentLevel" AS ENUM ('VERY_BEARISH', 'SOMEWHAT_BEARISH', 'BEARISH', 'NEUTRAL', 'SOMEWHAT_BULLISH', 'BULLISH', 'VERY_BULLISH');

-- CreateTable
CREATE TABLE "market_sentiments" (
    "id" UUID NOT NULL,
    "sentiment" "MarketSentimentLevel" NOT NULL,
    "description" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "market_sentiments_pkey" PRIMARY KEY ("id")
);
