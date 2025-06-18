-- CreateTable
CREATE TABLE "institutional_sentiment_history" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "symbol" TEXT NOT NULL,
    "overallSentiment" DOUBLE PRECISION NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "secFilingsSentiment" DOUBLE PRECISION NOT NULL,
    "secFilingsConfidence" DOUBLE PRECISION NOT NULL,
    "secInsiderTradingSignal" DOUBLE PRECISION NOT NULL,
    "secInstitutionalFlowSignal" DOUBLE PRECISION NOT NULL,
    "secAnalystRevisionsSignal" DOUBLE PRECISION NOT NULL,
    "secGuidanceChangesSignal" DOUBLE PRECISION NOT NULL,
    "secShortTrend" DOUBLE PRECISION NOT NULL,
    "secMediumTrend" DOUBLE PRECISION NOT NULL,
    "secLongTrend" DOUBLE PRECISION NOT NULL,
    "insiderTradingOverall" DOUBLE PRECISION NOT NULL,
    "insiderBuyingSentiment" DOUBLE PRECISION NOT NULL,
    "insiderSellingSentiment" DOUBLE PRECISION NOT NULL,
    "insiderSignificantCount" INTEGER NOT NULL,
    "insiderTotalValue" DOUBLE PRECISION NOT NULL,
    "insiderRecentActivity" INTEGER NOT NULL,
    "analystOverall" DOUBLE PRECISION NOT NULL,
    "analystAverageRating" DOUBLE PRECISION NOT NULL,
    "analystAverageTarget" DOUBLE PRECISION NOT NULL,
    "analystUpgrades" INTEGER NOT NULL,
    "analystDowngrades" INTEGER NOT NULL,
    "analystTargetChanges" INTEGER NOT NULL,
    "analystConsensus" TEXT NOT NULL,
    "optionsFlowOverall" DOUBLE PRECISION NOT NULL,
    "optionsCallFlow" DOUBLE PRECISION NOT NULL,
    "optionsPutFlow" DOUBLE PRECISION NOT NULL,
    "optionsUnusualActivity" DOUBLE PRECISION NOT NULL,
    "optionsBlockActivity" DOUBLE PRECISION NOT NULL,
    "optionsSweepActivity" DOUBLE PRECISION NOT NULL,
    "optionsSentimentScore" DOUBLE PRECISION NOT NULL,
    "institutionalFlowOverall" DOUBLE PRECISION NOT NULL,
    "institutionalNetFlow" DOUBLE PRECISION NOT NULL,
    "institutionalIncreasingPositions" DOUBLE PRECISION NOT NULL,
    "institutionalDecreasingPositions" DOUBLE PRECISION NOT NULL,
    "institutionalNewPositions" DOUBLE PRECISION NOT NULL,
    "institutionalClosedPositions" DOUBLE PRECISION NOT NULL,
    "darkPoolOverall" DOUBLE PRECISION NOT NULL,
    "darkPoolBuyPressure" DOUBLE PRECISION NOT NULL,
    "darkPoolSellPressure" DOUBLE PRECISION NOT NULL,
    "darkPoolVolumeSignificance" DOUBLE PRECISION NOT NULL,
    "darkPoolPriceImpact" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "institutional_sentiment_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutional_sentiment_metrics" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "operation" TEXT NOT NULL,
    "totalRecords" INTEGER NOT NULL,
    "successCount" INTEGER NOT NULL,
    "errorCount" INTEGER NOT NULL,
    "processingTimeMs" INTEGER NOT NULL,
    "batchSize" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "institutional_sentiment_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutional_sentiment_errors" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "operation" TEXT NOT NULL,
    "error" TEXT NOT NULL,
    "recordCount" INTEGER NOT NULL,
    "severity" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "institutional_sentiment_errors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutional_sentiment_alerts" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "errorRate" DOUBLE PRECISION NOT NULL,
    "totalRecords" INTEGER NOT NULL,
    "errorCount" INTEGER NOT NULL,
    "severity" TEXT NOT NULL,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "resolvedAt" TIMESTAMP(3),
    "resolvedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "institutional_sentiment_alerts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "institutional_sentiment_history_symbol_timestamp_idx" ON "institutional_sentiment_history"("symbol", "timestamp");

-- CreateIndex
CREATE INDEX "institutional_sentiment_history_timestamp_idx" ON "institutional_sentiment_history"("timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "institutional_sentiment_history_timestamp_symbol_key" ON "institutional_sentiment_history"("timestamp", "symbol");

-- CreateIndex
CREATE INDEX "institutional_sentiment_metrics_timestamp_idx" ON "institutional_sentiment_metrics"("timestamp");

-- CreateIndex
CREATE INDEX "institutional_sentiment_metrics_operation_idx" ON "institutional_sentiment_metrics"("operation");

-- CreateIndex
CREATE INDEX "institutional_sentiment_errors_timestamp_idx" ON "institutional_sentiment_errors"("timestamp");

-- CreateIndex
CREATE INDEX "institutional_sentiment_errors_severity_idx" ON "institutional_sentiment_errors"("severity");

-- CreateIndex
CREATE INDEX "institutional_sentiment_errors_operation_idx" ON "institutional_sentiment_errors"("operation");

-- CreateIndex
CREATE INDEX "institutional_sentiment_alerts_timestamp_idx" ON "institutional_sentiment_alerts"("timestamp");

-- CreateIndex
CREATE INDEX "institutional_sentiment_alerts_severity_idx" ON "institutional_sentiment_alerts"("severity");

-- CreateIndex
CREATE INDEX "institutional_sentiment_alerts_resolved_idx" ON "institutional_sentiment_alerts"("resolved");

-- CreateIndex
CREATE INDEX "institutional_sentiment_alerts_type_idx" ON "institutional_sentiment_alerts"("type");
