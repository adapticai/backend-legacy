-- CreateTable
CREATE TABLE "analytics_snapshots" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "dataType" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "analytics_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analytics_configurations" (
    "id" TEXT NOT NULL,
    "configKey" TEXT NOT NULL,
    "configType" TEXT NOT NULL,
    "configValue" JSONB NOT NULL,
    "symbol" TEXT,
    "metadata" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "analytics_configurations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connection_health_snapshots" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "connectionType" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "metrics" JSONB NOT NULL,
    "metadata" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "connection_health_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutional_holdings" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "institutionName" TEXT NOT NULL,
    "filingDate" TIMESTAMP(3) NOT NULL,
    "reportDate" TIMESTAMP(3) NOT NULL,
    "sharesHeld" BIGINT NOT NULL,
    "marketValue" DECIMAL(65,30) NOT NULL,
    "percentOfClass" DECIMAL(65,30),
    "changeShares" BIGINT,
    "changePercent" DECIMAL(65,30),
    "metadata" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "institutional_holdings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutional_flow_signals" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "signalDate" TIMESTAMP(3) NOT NULL,
    "signalType" TEXT NOT NULL,
    "signalStrength" DECIMAL(65,30) NOT NULL,
    "netFlow" DECIMAL(65,30) NOT NULL,
    "confidence" DECIMAL(65,30) NOT NULL,
    "metadata" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "institutional_flow_signals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "analytics_snapshots_symbol_dataType_timestamp_idx" ON "analytics_snapshots"("symbol", "dataType", "timestamp");

-- CreateIndex
CREATE INDEX "analytics_snapshots_timestamp_idx" ON "analytics_snapshots"("timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "analytics_configurations_configKey_key" ON "analytics_configurations"("configKey");

-- CreateIndex
CREATE INDEX "analytics_configurations_configKey_configType_idx" ON "analytics_configurations"("configKey", "configType");

-- CreateIndex
CREATE INDEX "analytics_configurations_configType_idx" ON "analytics_configurations"("configType");

-- CreateIndex
CREATE INDEX "connection_health_snapshots_timestamp_idx" ON "connection_health_snapshots"("timestamp");

-- CreateIndex
CREATE INDEX "connection_health_snapshots_connectionType_status_idx" ON "connection_health_snapshots"("connectionType", "status");

-- CreateIndex
CREATE INDEX "connection_health_snapshots_endpoint_timestamp_idx" ON "connection_health_snapshots"("endpoint", "timestamp");

-- CreateIndex
CREATE INDEX "institutional_holdings_symbol_filingDate_idx" ON "institutional_holdings"("symbol", "filingDate");

-- CreateIndex
CREATE INDEX "institutional_holdings_institutionName_filingDate_idx" ON "institutional_holdings"("institutionName", "filingDate");

-- CreateIndex
CREATE INDEX "institutional_holdings_filingDate_idx" ON "institutional_holdings"("filingDate");

-- CreateIndex
CREATE UNIQUE INDEX "institutional_holdings_symbol_institutionName_filingDate_key" ON "institutional_holdings"("symbol", "institutionName", "filingDate");

-- CreateIndex
CREATE INDEX "institutional_flow_signals_symbol_signalDate_idx" ON "institutional_flow_signals"("symbol", "signalDate");

-- CreateIndex
CREATE INDEX "institutional_flow_signals_signalDate_idx" ON "institutional_flow_signals"("signalDate");

-- CreateIndex
CREATE INDEX "institutional_flow_signals_signalType_signalStrength_idx" ON "institutional_flow_signals"("signalType", "signalStrength");

-- AddForeignKey
ALTER TABLE "institutional_holdings" ADD CONSTRAINT "institutional_holdings_symbol_fkey" FOREIGN KEY ("symbol") REFERENCES "assets"("symbol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "institutional_flow_signals" ADD CONSTRAINT "institutional_flow_signals_symbol_fkey" FOREIGN KEY ("symbol") REFERENCES "assets"("symbol") ON DELETE RESTRICT ON UPDATE CASCADE;
