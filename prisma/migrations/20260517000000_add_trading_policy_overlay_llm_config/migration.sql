-- ──────────────────────────────────────────────────────────────────────────────
-- Adds TradingPolicy, PolicyOverlay, and LlmConfiguration models — pivot-adapted
-- from stable-release. TradingPolicy's FK has been rewritten from
-- `alpacaAccountId` → `brokerageAccountId` so it composes with main's
-- Org → Fund → BrokerageAccount hierarchy instead of the SR-only AlpacaAccount.
-- ──────────────────────────────────────────────────────────────────────────────

-- Enums

CREATE TYPE "AutonomyMode" AS ENUM (
  'ADVISORY_ONLY',
  'EXECUTION_ON_APPROVAL',
  'SEMI_AUTONOMOUS',
  'FULLY_AUTONOMOUS',
  'EMERGENCY_SAFE_MODE'
);

CREATE TYPE "OverlayType" AS ENUM (
  'BLACK_SWAN',
  'VOLATILITY_REGIME',
  'SECTOR_DETERIORATION',
  'DRAWDOWN_BREACH',
  'CORRELATION_SPIKE',
  'LIQUIDITY_STRESS',
  'EXCHANGE_DEGRADATION',
  'DATA_QUALITY',
  'NEWS_EVENT_RISK',
  'RATES_BONDS_STRESS',
  'MANUAL_OVERRIDE',
  'INCIDENT_RESPONSE'
);

CREATE TYPE "OverlaySeverity" AS ENUM (
  'LOW',
  'MEDIUM',
  'HIGH',
  'CRITICAL'
);

CREATE TYPE "OverlayStatus" AS ENUM (
  'ACTIVE',
  'EXPIRED',
  'DEACTIVATED',
  'SUPERSEDED'
);

-- TradingPolicy — one row per BrokerageAccount (one-to-one)

CREATE TABLE "trading_policies" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "brokerageAccountId" UUID NOT NULL,
  "version" INTEGER NOT NULL DEFAULT 1,
  "lastModifiedBy" TEXT,
  "lastModifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  "autonomyMode" "AutonomyMode" NOT NULL DEFAULT 'ADVISORY_ONLY',
  "realtimeTradingEnabled" BOOLEAN NOT NULL DEFAULT false,
  "paperTradingOnly" BOOLEAN NOT NULL DEFAULT false,
  "killSwitchEnabled" BOOLEAN NOT NULL DEFAULT false,
  "autonomyPrefs" JSONB,

  "equitiesEnabled" BOOLEAN NOT NULL DEFAULT true,
  "etfsEnabled" BOOLEAN NOT NULL DEFAULT true,
  "cryptoEnabled" BOOLEAN NOT NULL DEFAULT true,
  "optionsEnabled" BOOLEAN NOT NULL DEFAULT true,
  "futuresEnabled" BOOLEAN NOT NULL DEFAULT true,
  "forexEnabled" BOOLEAN NOT NULL DEFAULT true,
  "shortingEnabled" BOOLEAN NOT NULL DEFAULT false,
  "marginEnabled" BOOLEAN NOT NULL DEFAULT false,
  "fractionalSharesEnabled" BOOLEAN NOT NULL DEFAULT true,
  "assetUniversePrefs" JSONB,

  "maxBuyingPowerUtilPct" DOUBLE PRECISION NOT NULL DEFAULT 90,
  "cashFloorPct" DOUBLE PRECISION NOT NULL DEFAULT 10,
  "maxGrossExposurePct" DOUBLE PRECISION NOT NULL DEFAULT 100,
  "maxNetExposurePct" DOUBLE PRECISION NOT NULL DEFAULT 100,
  "maxLeverage" DOUBLE PRECISION NOT NULL DEFAULT 1,
  "maxSymbolConcentrationPct" DOUBLE PRECISION NOT NULL DEFAULT 15,
  "maxSectorConcentrationPct" DOUBLE PRECISION NOT NULL DEFAULT 30,
  "maxOpenPositions" INTEGER NOT NULL DEFAULT 20,
  "maxOpenOrders" INTEGER NOT NULL DEFAULT 50,

  "perTradeEquityAllocationPct" DOUBLE PRECISION NOT NULL DEFAULT 5,
  "perTradeCryptoAllocationPct" DOUBLE PRECISION NOT NULL DEFAULT 5,

  "enablePortfolioTrailingStop" BOOLEAN NOT NULL DEFAULT false,
  "portfolioTrailPercent" DOUBLE PRECISION NOT NULL DEFAULT 4.0,
  "portfolioProfitThresholdPercent" DOUBLE PRECISION NOT NULL DEFAULT 2.0,
  "reducedPortfolioTrailPercent" DOUBLE PRECISION NOT NULL DEFAULT 0.5,

  "defaultTrailingStopPercentage100" DOUBLE PRECISION NOT NULL DEFAULT 4.0,
  "firstTrailReductionThreshold100" DOUBLE PRECISION NOT NULL DEFAULT 2.0,
  "secondTrailReductionThreshold100" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
  "firstReducedTrailPercentage100" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
  "secondReducedTrailPercentage100" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
  "minimumPriceChangePercent100" DOUBLE PRECISION NOT NULL DEFAULT 0.5,

  "riskBudgetPrefs" JSONB,
  "signalConsumptionPrefs" JSONB,
  "executionPrefs" JSONB,
  "portfolioConstructionPrefs" JSONB,
  "positionManagementPrefs" JSONB,

  "macroOverlayEnabled" BOOLEAN NOT NULL DEFAULT false,
  "sectorOverlayEnabled" BOOLEAN NOT NULL DEFAULT false,
  "volatilityOverlayEnabled" BOOLEAN NOT NULL DEFAULT false,
  "liquidityStressOverlayEnabled" BOOLEAN NOT NULL DEFAULT false,
  "blackSwanProtectionEnabled" BOOLEAN NOT NULL DEFAULT false,
  "drawdownGuardianEnabled" BOOLEAN NOT NULL DEFAULT false,
  "correlationSpikeProtectionEnabled" BOOLEAN NOT NULL DEFAULT false,
  "newsEventRiskOverlayEnabled" BOOLEAN NOT NULL DEFAULT false,
  "exchangeHealthOverlayEnabled" BOOLEAN NOT NULL DEFAULT false,
  "dataQualitySentinelEnabled" BOOLEAN NOT NULL DEFAULT false,
  "overlayResponsePrefs" JSONB,

  "miniModelProvider" "LlmProvider",
  "miniModelId" TEXT,
  "normalModelProvider" "LlmProvider",
  "normalModelId" TEXT,
  "advancedModelProvider" "LlmProvider",
  "advancedModelId" TEXT,
  "modelPrefs" JSONB,

  "auditNotificationPrefs" JSONB,

  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "trading_policies_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "trading_policies_brokerageAccountId_key"
  ON "trading_policies"("brokerageAccountId");

ALTER TABLE "trading_policies"
  ADD CONSTRAINT "trading_policies_brokerageAccountId_fkey"
  FOREIGN KEY ("brokerageAccountId") REFERENCES "brokerage_accounts"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

-- PolicyOverlay — many rows per TradingPolicy

CREATE TABLE "policy_overlays" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "tradingPolicyId" UUID NOT NULL,
  "overlayType" "OverlayType" NOT NULL,
  "source" TEXT NOT NULL,
  "reason" TEXT NOT NULL,
  "severity" "OverlaySeverity" NOT NULL DEFAULT 'MEDIUM',
  "version" INTEGER NOT NULL DEFAULT 1,
  "mutations" JSONB NOT NULL,
  "status" "OverlayStatus" NOT NULL DEFAULT 'ACTIVE',
  "activatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "expiresAt" TIMESTAMP(3),
  "deactivatedAt" TIMESTAMP(3),
  "deactivatedBy" TEXT,
  "correlationId" TEXT,
  "triggerEventId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "policy_overlays_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "policy_overlays_tradingPolicyId_status_idx"
  ON "policy_overlays"("tradingPolicyId", "status");
CREATE INDEX "policy_overlays_overlayType_status_idx"
  ON "policy_overlays"("overlayType", "status");
CREATE INDEX "policy_overlays_expiresAt_idx"
  ON "policy_overlays"("expiresAt");

ALTER TABLE "policy_overlays"
  ADD CONSTRAINT "policy_overlays_tradingPolicyId_fkey"
  FOREIGN KEY ("tradingPolicyId") REFERENCES "trading_policies"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

-- LlmConfiguration — one per User (one-to-one)

CREATE TABLE "llm_configurations" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "userId" UUID NOT NULL,
  "defaultProvider" "LlmProvider" NOT NULL DEFAULT 'OPENAI',
  "openAiApiKey" TEXT,
  "anthropicApiKey" TEXT,
  "deepseekApiKey" TEXT,
  "kimiApiKey" TEXT,
  "qwenApiKey" TEXT,
  "xaiApiKey" TEXT,
  "geminiApiKey" TEXT,
  "miniProvider" "LlmProvider",
  "miniModel" TEXT,
  "normalProvider" "LlmProvider",
  "normalModel" TEXT,
  "advancedProvider" "LlmProvider",
  "advancedModel" TEXT,
  "fallbackChain" TEXT[],
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "llm_configurations_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "llm_configurations_userId_key"
  ON "llm_configurations"("userId");

ALTER TABLE "llm_configurations"
  ADD CONSTRAINT "llm_configurations_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "users"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;
