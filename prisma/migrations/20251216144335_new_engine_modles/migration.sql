-- CreateEnum
CREATE TYPE "SignalGeneratorSource" AS ENUM ('ENHANCED', 'PRODUCTION', 'LLM', 'HYBRID', 'EVENT_DRIVEN', 'ML_PREDICTION', 'OPTIONS_SCREENER', 'TECHNICAL_ANALYSIS', 'FUNDAMENTAL', 'SENTIMENT', 'CUSTOM');

-- CreateEnum
CREATE TYPE "SyncDirection" AS ENUM ('ENGINE_TO_BACKEND', 'BACKEND_TO_ENGINE', 'BIDIRECTIONAL');

-- CreateEnum
CREATE TYPE "ConflictResolutionStrategy" AS ENUM ('SERVER_WINS', 'CLIENT_WINS', 'MERGE', 'MANUAL', 'TIMESTAMP_BASED');

-- CreateEnum
CREATE TYPE "DeadLetterStatus" AS ENUM ('PENDING', 'RETRYING', 'FAILED', 'RESOLVED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "DeadLetterSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "SignalPriorityTier" AS ENUM ('HIGH', 'MEDIUM', 'LOW', 'DEPRIORITIZED');

-- CreateEnum
CREATE TYPE "SignalQueueStatus" AS ENUM ('QUEUED', 'PROCESSING', 'COMPLETED', 'FILTERED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "SignalOutcomeType" AS ENUM ('SUCCESS', 'FAILURE', 'NEUTRAL', 'PENDING');

-- CreateEnum
CREATE TYPE "SignalExecutionStatus" AS ENUM ('PENDING', 'EXECUTED', 'PARTIAL', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "SignalDecisionType" AS ENUM ('ACCEPT', 'REJECT', 'DEFER', 'MODIFY');

-- CreateEnum
CREATE TYPE "EventCategory" AS ENUM ('TRADE', 'SIGNAL', 'ALERT', 'RISK_BREACH', 'SYSTEM', 'COMPLIANCE', 'EXECUTION', 'SYNC');

-- CreateEnum
CREATE TYPE "EventSeverity" AS ENUM ('INFO', 'WARN', 'ERROR', 'CRITICAL');

-- CreateTable
CREATE TABLE "dead_letter_messages" (
    "id" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountId" TEXT NOT NULL,
    "ticker" VARCHAR(50) NOT NULL,
    "action" VARCHAR(20) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "strikePrice" DECIMAL(10,2),
    "expirationDate" VARCHAR(20),
    "optionType" VARCHAR(10),
    "strategy" VARCHAR(100),
    "orderType" VARCHAR(50),
    "limitPrice" DECIMAL(10,4),
    "errorMessage" TEXT NOT NULL,
    "errorCode" VARCHAR(100),
    "errorStack" TEXT,
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "maxRetries" INTEGER NOT NULL DEFAULT 3,
    "lastRetryAt" TIMESTAMP(3),
    "nextRetryAt" TIMESTAMP(3),
    "backoffMs" INTEGER NOT NULL DEFAULT 1000,
    "status" "DeadLetterStatus" NOT NULL DEFAULT 'PENDING',
    "resolvedAt" TIMESTAMP(3),
    "resolvedBy" VARCHAR(100),
    "resolution" TEXT,
    "tradeContext" JSONB NOT NULL,
    "accountState" JSONB,
    "marketContext" JSONB,
    "validationErrors" JSONB,
    "failureCategory" VARCHAR(100),
    "severity" "DeadLetterSeverity" NOT NULL DEFAULT 'MEDIUM',
    "tags" JSONB,
    "createdBy" VARCHAR(100),
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,

    CONSTRAINT "dead_letter_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sync_events" (
    "id" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" VARCHAR(100) NOT NULL,
    "direction" "SyncDirection" NOT NULL,
    "entityType" VARCHAR(100) NOT NULL,
    "entityId" VARCHAR(255) NOT NULL,
    "duration" INTEGER,
    "success" BOOLEAN NOT NULL,
    "error" TEXT,
    "metadata" JSONB,

    CONSTRAINT "sync_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conflict_events" (
    "id" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entityType" VARCHAR(100) NOT NULL,
    "entityId" VARCHAR(255) NOT NULL,
    "serverVersion" JSONB NOT NULL,
    "clientVersion" JSONB NOT NULL,
    "strategy" "ConflictResolutionStrategy" NOT NULL,
    "resolved" BOOLEAN NOT NULL,
    "resolution" JSONB,
    "resolutionTime" INTEGER,

    CONSTRAINT "conflict_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "signal_lineage" (
    "id" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lineageId" VARCHAR(255) NOT NULL,
    "signalId" VARCHAR(255) NOT NULL,
    "symbol" VARCHAR(50) NOT NULL,
    "signalType" VARCHAR(50) NOT NULL,
    "createdAt" BIGINT NOT NULL,
    "generatorSource" VARCHAR(100) NOT NULL,
    "generatorVersion" VARCHAR(50),
    "inputSources" JSONB NOT NULL,
    "technicalIndicators" JSONB NOT NULL,
    "llmAnalysis" JSONB,
    "preAnalysisValidations" JSONB NOT NULL,
    "filterResult" JSONB,
    "coordinationDecision" JSONB NOT NULL,
    "executionOutcome" JSONB,
    "originalSignal" JSONB NOT NULL,
    "finalSignal" JSONB,
    "lifecycleEvents" JSONB NOT NULL,
    "performanceAttribution" JSONB,
    "lastUpdated" BIGINT NOT NULL,
    "storageLocation" VARCHAR(500),
    "retentionDays" INTEGER NOT NULL DEFAULT 90,
    "complianceTags" JSONB,
    "customTags" JSONB,
    "executionStatus" "SignalExecutionStatus",
    "decisionType" "SignalDecisionType" NOT NULL,
    "pnlPercentage" DECIMAL(10,4),
    "dataQuality" DECIMAL(5,4) NOT NULL,

    CONSTRAINT "signal_lineage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trade_audit_events" (
    "id" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventId" VARCHAR(255) NOT NULL,
    "eventType" VARCHAR(100) NOT NULL,
    "symbol" VARCHAR(50) NOT NULL,
    "accountId" VARCHAR(255) NOT NULL,
    "tradeId" VARCHAR(255),
    "signalId" VARCHAR(255),
    "orderId" VARCHAR(255),
    "userId" VARCHAR(255),
    "systemId" VARCHAR(100),
    "signatureJson" JSONB NOT NULL,
    "custodyJson" JSONB NOT NULL,
    "retentionPolicyId" VARCHAR(100) NOT NULL,
    "immutable" BOOLEAN NOT NULL DEFAULT true,
    "encrypted" BOOLEAN NOT NULL DEFAULT false,
    "complianceTags" JSONB NOT NULL,
    "customTags" JSONB,
    "eventData" JSONB NOT NULL,
    "eventCategory" "EventCategory",
    "severity" "EventSeverity",
    "passed" BOOLEAN,
    "createdAt" BIGINT NOT NULL,
    "retentionDate" TIMESTAMP(3),

    CONSTRAINT "trade_audit_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "signal_generator_metrics" (
    "id" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "generatorSource" "SignalGeneratorSource" NOT NULL,
    "symbol" VARCHAR(50),
    "totalSignals" INTEGER NOT NULL DEFAULT 0,
    "successfulSignals" INTEGER NOT NULL DEFAULT 0,
    "failedSignals" INTEGER NOT NULL DEFAULT 0,
    "winRate" DECIMAL(5,4) NOT NULL,
    "sharpeRatio" DECIMAL(10,4) NOT NULL,
    "profitFactor" DECIMAL(10,4) NOT NULL,
    "averageReturn" DECIMAL(10,4) NOT NULL,
    "maxDrawdown" DECIMAL(10,4) NOT NULL,
    "averageTimeToProfit" DECIMAL(10,2) NOT NULL,
    "calibrationAccuracy" DECIMAL(5,4) NOT NULL,
    "performanceTrend" DECIMAL(5,4) NOT NULL,
    "lookbackPeriodDays" INTEGER NOT NULL DEFAULT 30,
    "healthScore" INTEGER NOT NULL DEFAULT 100,
    "healthStatus" VARCHAR(20) NOT NULL,
    "healthIssues" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "signal_generator_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "signal_priority_queue" (
    "id" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "signalId" VARCHAR(255) NOT NULL,
    "symbol" VARCHAR(50) NOT NULL,
    "signalType" VARCHAR(100) NOT NULL,
    "generatorSource" "SignalGeneratorSource" NOT NULL,
    "priorityScore" DECIMAL(6,2) NOT NULL,
    "generatorWinRate" DECIMAL(5,4) NOT NULL,
    "generatorSharpe" DECIMAL(10,4) NOT NULL,
    "priorityTier" "SignalPriorityTier" NOT NULL,
    "scoreComponents" JSONB NOT NULL,
    "queuePosition" INTEGER NOT NULL DEFAULT 0,
    "status" "SignalQueueStatus" NOT NULL DEFAULT 'QUEUED',
    "queuedAt" TIMESTAMP(3) NOT NULL,
    "processingStartedAt" TIMESTAMP(3),
    "processingCompletedAt" TIMESTAMP(3),
    "timeInQueueMs" INTEGER,
    "signalConfidence" DECIMAL(5,4) NOT NULL,
    "signalData" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "signal_priority_queue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "signal_outcomes" (
    "id" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "signalId" VARCHAR(255) NOT NULL,
    "generatorSource" "SignalGeneratorSource" NOT NULL,
    "symbol" VARCHAR(50) NOT NULL,
    "signalType" VARCHAR(100) NOT NULL,
    "originalConfidence" DECIMAL(5,4) NOT NULL,
    "priorityScore" DECIMAL(6,2) NOT NULL,
    "outcome" "SignalOutcomeType" NOT NULL,
    "pnlPercentage" DECIMAL(10,4),
    "timeToOutcome" INTEGER,
    "outcomeTimestamp" TIMESTAMP(3),
    "outcomeReason" TEXT,
    "generatedAt" TIMESTAMP(3) NOT NULL,
    "marketConditions" JSONB,

    CONSTRAINT "signal_outcomes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" UUID NOT NULL,
    "eventId" VARCHAR(255) NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" "EventCategory" NOT NULL,
    "eventType" VARCHAR(100) NOT NULL,
    "severity" "EventSeverity" NOT NULL,
    "source" VARCHAR(100) NOT NULL,
    "symbol" VARCHAR(50),
    "accountId" VARCHAR(255),
    "tradeId" VARCHAR(255),
    "signalId" VARCHAR(255),
    "orderId" VARCHAR(255),
    "userId" VARCHAR(255),
    "aggregateId" VARCHAR(255),
    "aggregateType" VARCHAR(100),
    "version" INTEGER,
    "eventData" JSONB NOT NULL,
    "metadata" JSONB,
    "signature" JSONB,
    "retentionPolicyId" VARCHAR(100) NOT NULL,
    "retentionExpiresAt" TIMESTAMP(3) NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "tags" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_snapshots" (
    "id" UUID NOT NULL,
    "aggregateId" VARCHAR(255) NOT NULL,
    "aggregateType" VARCHAR(100) NOT NULL,
    "version" INTEGER NOT NULL,
    "state" JSONB NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trade_execution_history" (
    "id" VARCHAR(255) NOT NULL,
    "ticker" VARCHAR(50) NOT NULL,
    "action" "ActionType" NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accounts" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trade_execution_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "dead_letter_messages_timestamp_idx" ON "dead_letter_messages"("timestamp");

-- CreateIndex
CREATE INDEX "dead_letter_messages_accountId_timestamp_idx" ON "dead_letter_messages"("accountId", "timestamp");

-- CreateIndex
CREATE INDEX "dead_letter_messages_ticker_timestamp_idx" ON "dead_letter_messages"("ticker", "timestamp");

-- CreateIndex
CREATE INDEX "dead_letter_messages_status_timestamp_idx" ON "dead_letter_messages"("status", "timestamp");

-- CreateIndex
CREATE INDEX "dead_letter_messages_errorCode_timestamp_idx" ON "dead_letter_messages"("errorCode", "timestamp");

-- CreateIndex
CREATE INDEX "dead_letter_messages_failureCategory_timestamp_idx" ON "dead_letter_messages"("failureCategory", "timestamp");

-- CreateIndex
CREATE INDEX "dead_letter_messages_nextRetryAt_idx" ON "dead_letter_messages"("nextRetryAt");

-- CreateIndex
CREATE INDEX "dead_letter_messages_accountId_status_idx" ON "dead_letter_messages"("accountId", "status");

-- CreateIndex
CREATE INDEX "dead_letter_messages_ticker_status_idx" ON "dead_letter_messages"("ticker", "status");

-- CreateIndex
CREATE INDEX "sync_events_timestamp_idx" ON "sync_events"("timestamp");

-- CreateIndex
CREATE INDEX "sync_events_type_timestamp_idx" ON "sync_events"("type", "timestamp");

-- CreateIndex
CREATE INDEX "sync_events_direction_timestamp_idx" ON "sync_events"("direction", "timestamp");

-- CreateIndex
CREATE INDEX "sync_events_entityType_timestamp_idx" ON "sync_events"("entityType", "timestamp");

-- CreateIndex
CREATE INDEX "sync_events_success_timestamp_idx" ON "sync_events"("success", "timestamp");

-- CreateIndex
CREATE INDEX "conflict_events_timestamp_idx" ON "conflict_events"("timestamp");

-- CreateIndex
CREATE INDEX "conflict_events_entityType_timestamp_idx" ON "conflict_events"("entityType", "timestamp");

-- CreateIndex
CREATE INDEX "conflict_events_resolved_timestamp_idx" ON "conflict_events"("resolved", "timestamp");

-- CreateIndex
CREATE INDEX "conflict_events_strategy_timestamp_idx" ON "conflict_events"("strategy", "timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "signal_lineage_lineageId_key" ON "signal_lineage"("lineageId");

-- CreateIndex
CREATE INDEX "signal_lineage_timestamp_idx" ON "signal_lineage"("timestamp");

-- CreateIndex
CREATE INDEX "signal_lineage_signalId_idx" ON "signal_lineage"("signalId");

-- CreateIndex
CREATE INDEX "signal_lineage_symbol_timestamp_idx" ON "signal_lineage"("symbol", "timestamp");

-- CreateIndex
CREATE INDEX "signal_lineage_generatorSource_timestamp_idx" ON "signal_lineage"("generatorSource", "timestamp");

-- CreateIndex
CREATE INDEX "signal_lineage_signalType_timestamp_idx" ON "signal_lineage"("signalType", "timestamp");

-- CreateIndex
CREATE INDEX "signal_lineage_executionStatus_timestamp_idx" ON "signal_lineage"("executionStatus", "timestamp");

-- CreateIndex
CREATE INDEX "signal_lineage_decisionType_timestamp_idx" ON "signal_lineage"("decisionType", "timestamp");

-- CreateIndex
CREATE INDEX "signal_lineage_symbol_generatorSource_timestamp_idx" ON "signal_lineage"("symbol", "generatorSource", "timestamp");

-- CreateIndex
CREATE INDEX "signal_lineage_pnlPercentage_idx" ON "signal_lineage"("pnlPercentage");

-- CreateIndex
CREATE INDEX "signal_lineage_dataQuality_idx" ON "signal_lineage"("dataQuality");

-- CreateIndex
CREATE UNIQUE INDEX "trade_audit_events_eventId_key" ON "trade_audit_events"("eventId");

-- CreateIndex
CREATE INDEX "trade_audit_events_timestamp_idx" ON "trade_audit_events"("timestamp");

-- CreateIndex
CREATE INDEX "trade_audit_events_eventId_idx" ON "trade_audit_events"("eventId");

-- CreateIndex
CREATE INDEX "trade_audit_events_eventType_timestamp_idx" ON "trade_audit_events"("eventType", "timestamp");

-- CreateIndex
CREATE INDEX "trade_audit_events_symbol_timestamp_idx" ON "trade_audit_events"("symbol", "timestamp");

-- CreateIndex
CREATE INDEX "trade_audit_events_accountId_timestamp_idx" ON "trade_audit_events"("accountId", "timestamp");

-- CreateIndex
CREATE INDEX "trade_audit_events_signalId_timestamp_idx" ON "trade_audit_events"("signalId", "timestamp");

-- CreateIndex
CREATE INDEX "trade_audit_events_orderId_timestamp_idx" ON "trade_audit_events"("orderId", "timestamp");

-- CreateIndex
CREATE INDEX "trade_audit_events_tradeId_timestamp_idx" ON "trade_audit_events"("tradeId", "timestamp");

-- CreateIndex
CREATE INDEX "trade_audit_events_eventCategory_timestamp_idx" ON "trade_audit_events"("eventCategory", "timestamp");

-- CreateIndex
CREATE INDEX "trade_audit_events_severity_timestamp_idx" ON "trade_audit_events"("severity", "timestamp");

-- CreateIndex
CREATE INDEX "trade_audit_events_passed_timestamp_idx" ON "trade_audit_events"("passed", "timestamp");

-- CreateIndex
CREATE INDEX "trade_audit_events_retentionDate_idx" ON "trade_audit_events"("retentionDate");

-- CreateIndex
CREATE INDEX "trade_audit_events_accountId_symbol_timestamp_idx" ON "trade_audit_events"("accountId", "symbol", "timestamp");

-- CreateIndex
CREATE INDEX "signal_generator_metrics_timestamp_idx" ON "signal_generator_metrics"("timestamp");

-- CreateIndex
CREATE INDEX "signal_generator_metrics_generatorSource_timestamp_idx" ON "signal_generator_metrics"("generatorSource", "timestamp");

-- CreateIndex
CREATE INDEX "signal_generator_metrics_generatorSource_symbol_timestamp_idx" ON "signal_generator_metrics"("generatorSource", "symbol", "timestamp");

-- CreateIndex
CREATE INDEX "signal_generator_metrics_healthStatus_timestamp_idx" ON "signal_generator_metrics"("healthStatus", "timestamp");

-- CreateIndex
CREATE INDEX "signal_generator_metrics_winRate_timestamp_idx" ON "signal_generator_metrics"("winRate", "timestamp");

-- CreateIndex
CREATE INDEX "signal_generator_metrics_sharpeRatio_timestamp_idx" ON "signal_generator_metrics"("sharpeRatio", "timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "signal_generator_metrics_generatorSource_symbol_timestamp_key" ON "signal_generator_metrics"("generatorSource", "symbol", "timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "signal_priority_queue_signalId_key" ON "signal_priority_queue"("signalId");

-- CreateIndex
CREATE INDEX "signal_priority_queue_timestamp_idx" ON "signal_priority_queue"("timestamp");

-- CreateIndex
CREATE INDEX "signal_priority_queue_status_priorityTier_priorityScore_idx" ON "signal_priority_queue"("status", "priorityTier", "priorityScore");

-- CreateIndex
CREATE INDEX "signal_priority_queue_generatorSource_timestamp_idx" ON "signal_priority_queue"("generatorSource", "timestamp");

-- CreateIndex
CREATE INDEX "signal_priority_queue_symbol_timestamp_idx" ON "signal_priority_queue"("symbol", "timestamp");

-- CreateIndex
CREATE INDEX "signal_priority_queue_priorityTier_queuePosition_idx" ON "signal_priority_queue"("priorityTier", "queuePosition");

-- CreateIndex
CREATE INDEX "signal_priority_queue_queuedAt_idx" ON "signal_priority_queue"("queuedAt");

-- CreateIndex
CREATE INDEX "signal_priority_queue_status_queuedAt_idx" ON "signal_priority_queue"("status", "queuedAt");

-- CreateIndex
CREATE INDEX "signal_outcomes_timestamp_idx" ON "signal_outcomes"("timestamp");

-- CreateIndex
CREATE INDEX "signal_outcomes_generatorSource_timestamp_idx" ON "signal_outcomes"("generatorSource", "timestamp");

-- CreateIndex
CREATE INDEX "signal_outcomes_generatorSource_symbol_timestamp_idx" ON "signal_outcomes"("generatorSource", "symbol", "timestamp");

-- CreateIndex
CREATE INDEX "signal_outcomes_outcome_timestamp_idx" ON "signal_outcomes"("outcome", "timestamp");

-- CreateIndex
CREATE INDEX "signal_outcomes_signalId_idx" ON "signal_outcomes"("signalId");

-- CreateIndex
CREATE INDEX "signal_outcomes_generatedAt_idx" ON "signal_outcomes"("generatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "events_eventId_key" ON "events"("eventId");

-- CreateIndex
CREATE INDEX "events_timestamp_idx" ON "events"("timestamp");

-- CreateIndex
CREATE INDEX "events_eventId_idx" ON "events"("eventId");

-- CreateIndex
CREATE INDEX "events_category_timestamp_idx" ON "events"("category", "timestamp");

-- CreateIndex
CREATE INDEX "events_eventType_timestamp_idx" ON "events"("eventType", "timestamp");

-- CreateIndex
CREATE INDEX "events_severity_timestamp_idx" ON "events"("severity", "timestamp");

-- CreateIndex
CREATE INDEX "events_source_timestamp_idx" ON "events"("source", "timestamp");

-- CreateIndex
CREATE INDEX "events_symbol_timestamp_idx" ON "events"("symbol", "timestamp");

-- CreateIndex
CREATE INDEX "events_accountId_timestamp_idx" ON "events"("accountId", "timestamp");

-- CreateIndex
CREATE INDEX "events_tradeId_timestamp_idx" ON "events"("tradeId", "timestamp");

-- CreateIndex
CREATE INDEX "events_signalId_timestamp_idx" ON "events"("signalId", "timestamp");

-- CreateIndex
CREATE INDEX "events_orderId_timestamp_idx" ON "events"("orderId", "timestamp");

-- CreateIndex
CREATE INDEX "events_userId_timestamp_idx" ON "events"("userId", "timestamp");

-- CreateIndex
CREATE INDEX "events_retentionExpiresAt_idx" ON "events"("retentionExpiresAt");

-- CreateIndex
CREATE INDEX "events_archived_timestamp_idx" ON "events"("archived", "timestamp");

-- CreateIndex
CREATE INDEX "events_category_severity_timestamp_idx" ON "events"("category", "severity", "timestamp");

-- CreateIndex
CREATE INDEX "events_aggregateId_aggregateType_version_idx" ON "events"("aggregateId", "aggregateType", "version");

-- CreateIndex
CREATE INDEX "events_aggregateId_timestamp_idx" ON "events"("aggregateId", "timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "events_aggregateId_aggregateType_version_key" ON "events"("aggregateId", "aggregateType", "version");

-- CreateIndex
CREATE INDEX "event_snapshots_aggregateId_version_idx" ON "event_snapshots"("aggregateId", "version");

-- CreateIndex
CREATE INDEX "event_snapshots_aggregateType_timestamp_idx" ON "event_snapshots"("aggregateType", "timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "event_snapshots_aggregateId_version_key" ON "event_snapshots"("aggregateId", "version");

-- CreateIndex
CREATE INDEX "trade_execution_history_ticker_idx" ON "trade_execution_history"("ticker");

-- CreateIndex
CREATE INDEX "trade_execution_history_timestamp_idx" ON "trade_execution_history"("timestamp");

-- CreateIndex
CREATE INDEX "trade_execution_history_ticker_timestamp_idx" ON "trade_execution_history"("ticker", "timestamp");

-- CreateIndex
CREATE INDEX "trade_execution_history_expiresAt_idx" ON "trade_execution_history"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "trade_execution_history_ticker_action_timestamp_key" ON "trade_execution_history"("ticker", "action", "timestamp");
