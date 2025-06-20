-- CreateEnum
CREATE TYPE "ModelVersionStatus" AS ENUM ('TRAINING', 'VALIDATION', 'DEPLOYED', 'DEPRECATED', 'FAILED');

-- CreateEnum
CREATE TYPE "DeploymentEnvironment" AS ENUM ('DEVELOPMENT', 'STAGING', 'PRODUCTION');

-- CreateEnum
CREATE TYPE "RolloutStrategy" AS ENUM ('IMMEDIATE', 'GRADUAL', 'CANARY', 'BLUE_GREEN');

-- CreateEnum
CREATE TYPE "ArtifactType" AS ENUM ('WEIGHTS', 'MODEL_FILE', 'PREPROCESSOR', 'FEATURE_TRANSFORMER', 'ENSEMBLE_CONFIG');

-- CreateEnum
CREATE TYPE "StorageProvider" AS ENUM ('AWS_S3', 'GCP_STORAGE', 'AZURE_BLOB', 'LOCAL');

-- CreateEnum
CREATE TYPE "ABTestStatus" AS ENUM ('DRAFT', 'RUNNING', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "ABTestRecommendation" AS ENUM ('PROMOTE_TREATMENT', 'KEEP_CONTROL', 'INCONCLUSIVE');

-- CreateEnum
CREATE TYPE "SystemAlertType" AS ENUM ('PERFORMANCE_DEGRADATION', 'TRAINING_FAILURE', 'DEPLOYMENT_ISSUE', 'DATA_QUALITY', 'RESOURCE_LIMIT', 'GENERAL');

-- CreateEnum
CREATE TYPE "AlertSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "SystemAlertStatus" AS ENUM ('ACTIVE', 'ACKNOWLEDGED', 'RESOLVED', 'SUPPRESSED');

-- CreateEnum
CREATE TYPE "FeatureImportanceAnalysisType" AS ENUM ('SHAP', 'PERMUTATION', 'LIME', 'INTEGRATED_GRADIENTS', 'FEATURE_ABLATION');

-- CreateEnum
CREATE TYPE "TradeExitReason" AS ENUM ('STOP_LOSS', 'TAKE_PROFIT', 'TRAILING_STOP', 'MANUAL_EXIT', 'TIME_EXIT', 'MARKET_CLOSE', 'SIGNAL_REVERSAL', 'RISK_MANAGEMENT');

-- CreateEnum
CREATE TYPE "TradeOutcomeQuality" AS ENUM ('EXCELLENT', 'GOOD', 'FAIR', 'POOR', 'VERY_POOR');

-- CreateEnum
CREATE TYPE "MarketRegime" AS ENUM ('BULL', 'BEAR', 'SIDEWAYS', 'HIGH_VOLATILITY', 'LOW_VOLATILITY', 'TRENDING', 'MEAN_REVERTING');

-- CreateEnum
CREATE TYPE "VolatilityLevel" AS ENUM ('VERY_LOW', 'LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH');

-- CreateEnum
CREATE TYPE "MarketSentimentContext" AS ENUM ('VERY_BEARISH', 'BEARISH', 'NEUTRAL', 'BULLISH', 'VERY_BULLISH');

-- CreateEnum
CREATE TYPE "VolumeLevel" AS ENUM ('VERY_LOW', 'LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH');

-- CreateEnum
CREATE TYPE "MarketCondition" AS ENUM ('NORMAL', 'VOLATILE', 'ILLIQUID', 'HIGH_SPREAD', 'PRE_MARKET', 'AFTER_HOURS', 'MARKET_OPEN', 'MARKET_CLOSE');

-- CreateTable
CREATE TABLE "ml_training_data" (
    "id" UUID NOT NULL,
    "signalId" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "signalType" TEXT NOT NULL,
    "signalStrength" DOUBLE PRECISION NOT NULL,
    "predictedConfidence" DOUBLE PRECISION NOT NULL,
    "actualOutcomeSuccess" BOOLEAN NOT NULL,
    "actualOutcomeProfitLoss" DOUBLE PRECISION NOT NULL,
    "actualOutcomeReturnPercent" DOUBLE PRECISION NOT NULL,
    "actualOutcomeSharpeRatio" DOUBLE PRECISION NOT NULL,
    "actualOutcomeMaxDrawdown" DOUBLE PRECISION NOT NULL,
    "actualOutcomeDaysHeld" INTEGER NOT NULL,
    "actualOutcomeExitReason" "TradeExitReason" NOT NULL,
    "actualOutcomeQuality" "TradeOutcomeQuality" NOT NULL,
    "entryPrice" DOUBLE PRECISION NOT NULL,
    "exitPrice" DOUBLE PRECISION NOT NULL,
    "entryTime" TIMESTAMP(3) NOT NULL,
    "exitTime" TIMESTAMP(3) NOT NULL,
    "holdingPeriod" INTEGER NOT NULL,
    "returnPercent" DOUBLE PRECISION NOT NULL,
    "maxDrawdown" DOUBLE PRECISION NOT NULL,
    "maxGain" DOUBLE PRECISION NOT NULL,
    "volatilityDuringHold" DOUBLE PRECISION NOT NULL,
    "marketContextRegime" "MarketRegime" NOT NULL,
    "marketContextVolatility" "VolatilityLevel" NOT NULL,
    "marketContextSentiment" "MarketSentimentContext" NOT NULL,
    "marketContextVolume" "VolumeLevel" NOT NULL,
    "marketContextCorrelation" DOUBLE PRECISION NOT NULL,
    "marketContextBreadth" DOUBLE PRECISION NOT NULL,
    "signalFeatures" JSONB NOT NULL,
    "executionMetricsLatency" DOUBLE PRECISION NOT NULL,
    "executionMetricsSlippage" DOUBLE PRECISION NOT NULL,
    "executionMetricsMarketImpact" DOUBLE PRECISION NOT NULL,
    "executionMetricsTimingAccuracy" DOUBLE PRECISION NOT NULL,
    "executionMetricsFillQuality" DOUBLE PRECISION NOT NULL,
    "executionMetricsOrderSize" DOUBLE PRECISION NOT NULL,
    "executionMetricsLiquidityScore" DOUBLE PRECISION NOT NULL,
    "slippageAnalysisExpected" DOUBLE PRECISION NOT NULL,
    "slippageAnalysisActual" DOUBLE PRECISION NOT NULL,
    "slippageAnalysisDifference" DOUBLE PRECISION NOT NULL,
    "slippageAnalysisMarketConditions" "MarketCondition" NOT NULL,
    "slippageAnalysisTimeOfExecution" TIMESTAMP(3) NOT NULL,
    "slippageAnalysisVolumeAtExecution" DOUBLE PRECISION NOT NULL,
    "slippageAnalysisSpreadAtExecution" DOUBLE PRECISION NOT NULL,
    "attributionAlphaGeneration" DOUBLE PRECISION NOT NULL,
    "attributionBetaExposure" DOUBLE PRECISION NOT NULL,
    "attributionFactorExposures" JSONB NOT NULL,
    "attributionSkillVsLuck" DOUBLE PRECISION NOT NULL,
    "attributionInformationRatio" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ml_training_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "model_artifacts" (
    "id" UUID NOT NULL,
    "modelName" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "artifactType" "ArtifactType" NOT NULL,
    "storageUrl" TEXT NOT NULL,
    "storageProvider" "StorageProvider" NOT NULL,
    "fileSize" BIGINT NOT NULL,
    "checksum" TEXT NOT NULL,
    "compressionType" TEXT,
    "metadataFramework" TEXT NOT NULL,
    "metadataPythonVersion" TEXT,
    "metadataDependencies" JSONB,
    "metadataTrainingDate" TIMESTAMP(3) NOT NULL,
    "metadataDatasetSize" INTEGER NOT NULL,
    "metadataHyperparameters" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "model_artifacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "model_version_artifacts" (
    "id" UUID NOT NULL,
    "modelVersionId" UUID NOT NULL,
    "modelArtifactId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "model_version_artifacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "model_versions" (
    "id" UUID NOT NULL,
    "modelName" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "status" "ModelVersionStatus" NOT NULL,
    "parentVersionId" UUID,
    "performanceAccuracy" DOUBLE PRECISION NOT NULL,
    "performancePrecision" DOUBLE PRECISION NOT NULL,
    "performanceRecall" DOUBLE PRECISION NOT NULL,
    "performanceF1Score" DOUBLE PRECISION NOT NULL,
    "performanceAuc" DOUBLE PRECISION NOT NULL,
    "performanceSharpeRatio" DOUBLE PRECISION NOT NULL,
    "performanceMaxDrawdown" DOUBLE PRECISION NOT NULL,
    "performanceWinRate" DOUBLE PRECISION NOT NULL,
    "performanceAvgReturn" DOUBLE PRECISION NOT NULL,
    "performanceCalibrationScore" DOUBLE PRECISION NOT NULL,
    "performanceStabilityScore" DOUBLE PRECISION NOT NULL,
    "validationCrossValidationScore" DOUBLE PRECISION NOT NULL,
    "validationOutOfSamplePerformance" JSONB NOT NULL,
    "validationBacktestResults" JSONB NOT NULL,
    "validationStatTestResults" JSONB NOT NULL,
    "deploymentEnvironment" "DeploymentEnvironment" NOT NULL,
    "deploymentTrafficAllocation" DOUBLE PRECISION NOT NULL,
    "deploymentRolloutStrategy" "RolloutStrategy" NOT NULL,
    "deploymentHealthCheckConfig" JSONB NOT NULL,
    "trainingStartTime" TIMESTAMP(3) NOT NULL,
    "trainingEndTime" TIMESTAMP(3) NOT NULL,
    "trainingDuration" INTEGER NOT NULL,
    "trainingDatasetSize" INTEGER NOT NULL,
    "trainingFeaturesUsed" JSONB NOT NULL,
    "trainingHyperparameters" JSONB NOT NULL,
    "trainingResourcePeakMemoryMB" INTEGER NOT NULL,
    "trainingResourceTotalCpuHours" DOUBLE PRECISION NOT NULL,
    "trainingResourceGpuHours" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deployedAt" TIMESTAMP(3),
    "deprecatedAt" TIMESTAMP(3),

    CONSTRAINT "model_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ab_tests" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "ABTestStatus" NOT NULL,
    "modelVersionAId" UUID NOT NULL,
    "modelVersionBId" UUID NOT NULL,
    "trafficSplitControlPercent" DOUBLE PRECISION NOT NULL,
    "trafficSplitTreatmentPercent" DOUBLE PRECISION NOT NULL,
    "targetMetrics" JSONB NOT NULL,
    "successCriteriaPrimaryMetric" TEXT NOT NULL,
    "successCriteriaMinimumDetectableEffect" DOUBLE PRECISION NOT NULL,
    "successCriteriaSignificanceLevel" DOUBLE PRECISION NOT NULL,
    "successCriteriaPowerLevel" DOUBLE PRECISION NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "plannedDuration" BIGINT NOT NULL,
    "resultsControlMetrics" JSONB,
    "resultsTreatmentMetrics" JSONB,
    "resultsStatisticalSignificance" JSONB,
    "resultsPValues" JSONB,
    "resultsConfidenceIntervals" JSONB,
    "resultsRecommendation" "ABTestRecommendation",
    "metadataEnvironment" TEXT NOT NULL,
    "metadataEligibilityCriteria" JSONB NOT NULL,
    "metadataExclusionCriteria" JSONB NOT NULL,
    "metadataSegmentationRules" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "ab_tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "system_alerts" (
    "id" UUID NOT NULL,
    "type" "SystemAlertType" NOT NULL,
    "severity" "AlertSeverity" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "metadataModelName" TEXT,
    "metadataVersion" TEXT,
    "metadataJobId" TEXT,
    "metadataMetrics" JSONB,
    "metadataErrorDetails" TEXT,
    "metadataRecommendations" JSONB,
    "status" "SystemAlertStatus" NOT NULL DEFAULT 'ACTIVE',
    "acknowledgedBy" TEXT,
    "acknowledgedAt" TIMESTAMP(3),
    "resolvedBy" TEXT,
    "resolvedAt" TIMESTAMP(3),
    "resolutionNotes" TEXT,
    "suppressedUntil" TIMESTAMP(3),
    "escalationLevel" INTEGER NOT NULL DEFAULT 0,
    "notificationChannels" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "system_alerts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feature_importance_analyses" (
    "id" UUID NOT NULL,
    "modelVersionId" UUID NOT NULL,
    "analysisType" "FeatureImportanceAnalysisType" NOT NULL,
    "featureImportances" JSONB NOT NULL,
    "globalImportance" JSONB NOT NULL,
    "localImportance" JSONB,
    "analysisMetadataSampleSize" INTEGER NOT NULL,
    "analysisMetadataBaselineAccuracy" DOUBLE PRECISION NOT NULL,
    "analysisMetadataAnalysisDate" TIMESTAMP(3) NOT NULL,
    "analysisMetadataComputationTime" INTEGER NOT NULL,
    "analysisMetadataAnalysisParameters" JSONB NOT NULL,
    "insightsTopFeatures" JSONB NOT NULL,
    "insightsRedundantFeatures" JSONB NOT NULL,
    "insightsUnexpectedImportances" JSONB NOT NULL,
    "insightsStabilityScore" DOUBLE PRECISION NOT NULL,
    "insightsRecommendations" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "feature_importance_analyses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ml_training_data_symbol_signalType_idx" ON "ml_training_data"("symbol", "signalType");

-- CreateIndex
CREATE INDEX "ml_training_data_entryTime_idx" ON "ml_training_data"("entryTime");

-- CreateIndex
CREATE INDEX "ml_training_data_signalId_idx" ON "ml_training_data"("signalId");

-- CreateIndex
CREATE INDEX "model_artifacts_modelName_version_idx" ON "model_artifacts"("modelName", "version");

-- CreateIndex
CREATE INDEX "model_artifacts_artifactType_idx" ON "model_artifacts"("artifactType");

-- CreateIndex
CREATE INDEX "model_artifacts_storageProvider_idx" ON "model_artifacts"("storageProvider");

-- CreateIndex
CREATE UNIQUE INDEX "model_version_artifacts_modelVersionId_modelArtifactId_key" ON "model_version_artifacts"("modelVersionId", "modelArtifactId");

-- CreateIndex
CREATE INDEX "model_versions_status_idx" ON "model_versions"("status");

-- CreateIndex
CREATE INDEX "model_versions_deploymentEnvironment_idx" ON "model_versions"("deploymentEnvironment");

-- CreateIndex
CREATE INDEX "model_versions_createdAt_idx" ON "model_versions"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "model_versions_modelName_version_key" ON "model_versions"("modelName", "version");

-- CreateIndex
CREATE INDEX "ab_tests_status_idx" ON "ab_tests"("status");

-- CreateIndex
CREATE INDEX "ab_tests_startDate_endDate_idx" ON "ab_tests"("startDate", "endDate");

-- CreateIndex
CREATE INDEX "ab_tests_modelVersionAId_idx" ON "ab_tests"("modelVersionAId");

-- CreateIndex
CREATE INDEX "ab_tests_modelVersionBId_idx" ON "ab_tests"("modelVersionBId");

-- CreateIndex
CREATE INDEX "system_alerts_type_severity_idx" ON "system_alerts"("type", "severity");

-- CreateIndex
CREATE INDEX "system_alerts_status_idx" ON "system_alerts"("status");

-- CreateIndex
CREATE INDEX "system_alerts_source_idx" ON "system_alerts"("source");

-- CreateIndex
CREATE INDEX "system_alerts_createdAt_idx" ON "system_alerts"("createdAt");

-- CreateIndex
CREATE INDEX "system_alerts_metadataModelName_metadataVersion_idx" ON "system_alerts"("metadataModelName", "metadataVersion");

-- CreateIndex
CREATE INDEX "feature_importance_analyses_modelVersionId_idx" ON "feature_importance_analyses"("modelVersionId");

-- CreateIndex
CREATE INDEX "feature_importance_analyses_analysisType_idx" ON "feature_importance_analyses"("analysisType");

-- CreateIndex
CREATE INDEX "feature_importance_analyses_analysisMetadataAnalysisDate_idx" ON "feature_importance_analyses"("analysisMetadataAnalysisDate");

-- AddForeignKey
ALTER TABLE "model_version_artifacts" ADD CONSTRAINT "model_version_artifacts_modelVersionId_fkey" FOREIGN KEY ("modelVersionId") REFERENCES "model_versions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "model_version_artifacts" ADD CONSTRAINT "model_version_artifacts_modelArtifactId_fkey" FOREIGN KEY ("modelArtifactId") REFERENCES "model_artifacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "model_versions" ADD CONSTRAINT "model_versions_parentVersionId_fkey" FOREIGN KEY ("parentVersionId") REFERENCES "model_versions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ab_tests" ADD CONSTRAINT "ab_tests_modelVersionAId_fkey" FOREIGN KEY ("modelVersionAId") REFERENCES "model_versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ab_tests" ADD CONSTRAINT "ab_tests_modelVersionBId_fkey" FOREIGN KEY ("modelVersionBId") REFERENCES "model_versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feature_importance_analyses" ADD CONSTRAINT "feature_importance_analyses_modelVersionId_fkey" FOREIGN KEY ("modelVersionId") REFERENCES "model_versions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
