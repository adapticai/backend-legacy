-- ============================================================================
-- Multi-Broker Crypto Foundation (SP1)
-- Spec: docs/superpowers/specs/2026-04-15-multi-broker-crypto-design.md
-- ============================================================================
-- Introduces the BrokerageAccount model and supporting tables required for
-- broker-agnostic crypto trading on Binance/OKX/Bybit (alongside Alpaca).
-- Schema additions only; no user-visible change; no data migration here.
-- The AlpacaAccount credential retro-fix is a separate follow-up migration.
-- ============================================================================

-- CreateEnum
CREATE TYPE "BrokerType" AS ENUM ('ALPACA', 'BINANCE', 'OKX', 'BYBIT', 'IKBR');

-- CreateEnum
CREATE TYPE "BrokerEnv" AS ENUM ('PAPER', 'LIVE');

-- CreateEnum
CREATE TYPE "BrokerAccountStatus" AS ENUM ('PENDING', 'ACTIVE', 'DISABLED', 'AUTH_FAILED', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "CanonicalAssetCategory" AS ENUM ('CRYPTO_MAJOR', 'CRYPTO_ALT', 'STABLECOIN', 'EQUITY', 'OPTION', 'FUTURE');

-- CreateEnum
CREATE TYPE "InstrumentKind" AS ENUM ('SPOT', 'MARGIN', 'PERP', 'FUTURE', 'OPTION', 'EQUITY');

-- CreateEnum
CREATE TYPE "RoutingDecisionReason" AS ENUM ('ONLY_ELIGIBLE_BROKER', 'BEST_PRICE', 'BEST_SPREAD', 'BEST_LIQUIDITY', 'BEST_FEES_NET', 'USER_PINNED', 'FALLBACK_DUE_TO_OUTAGE');

-- AlterTable: Trade.alpacaAccountId becomes nullable; add brokerageAccountId
ALTER TABLE "trades" ADD COLUMN     "brokerageAccountId" UUID,
ALTER COLUMN "alpacaAccountId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "brokerage_accounts" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "broker" "BrokerType" NOT NULL,
    "env" "BrokerEnv" NOT NULL,
    "status" "BrokerAccountStatus" NOT NULL DEFAULT 'PENDING',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "label" TEXT,
    "encApiKey" BYTEA NOT NULL,
    "encApiSecret" BYTEA NOT NULL,
    "encPassphrase" BYTEA,
    "kmsKeyArn" TEXT NOT NULL,
    "encDataKey" BYTEA NOT NULL,
    "credFingerprint" TEXT NOT NULL,
    "supportedKinds" "InstrumentKind"[],
    "defaultKind" "InstrumentKind" NOT NULL DEFAULT 'SPOT',
    "lastValidatedAt" TIMESTAMP(3),
    "lastAuthFailedAt" TIMESTAMP(3),
    "lastAuthFailReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "brokerage_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "canonical_assets" (
    "id" UUID NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "CanonicalAssetCategory" NOT NULL,
    "decimals" INTEGER NOT NULL DEFAULT 8,
    "screenerRefPolicy" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "canonical_assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "broker_symbol_mappings" (
    "id" UUID NOT NULL,
    "canonicalAssetId" UUID NOT NULL,
    "broker" "BrokerType" NOT NULL,
    "instrumentKind" "InstrumentKind" NOT NULL,
    "nativeSymbol" TEXT NOT NULL,
    "quoteCurrency" TEXT NOT NULL,
    "priceTick" DECIMAL(30,18) NOT NULL,
    "qtyStep" DECIMAL(30,18) NOT NULL,
    "minNotional" DECIMAL(30,18) NOT NULL,
    "maxNotional" DECIMAL(30,18),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastRefreshedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "broker_symbol_mappings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routing_decisions" (
    "id" UUID NOT NULL,
    "tradeId" UUID,
    "userId" UUID NOT NULL,
    "canonicalAssetId" UUID NOT NULL,
    "selectedBrokerageId" UUID NOT NULL,
    "reason" "RoutingDecisionReason" NOT NULL,
    "candidates" JSONB NOT NULL,
    "decidedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "decisionLatencyMs" INTEGER NOT NULL,

    CONSTRAINT "routing_decisions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "execution_quality" (
    "id" UUID NOT NULL,
    "tradeId" UUID NOT NULL,
    "brokerageAccountId" UUID NOT NULL,
    "midAtSignal" DECIMAL(30,18) NOT NULL,
    "midAtDecision" DECIMAL(30,18) NOT NULL,
    "midAtAck" DECIMAL(30,18) NOT NULL,
    "avgFillPrice" DECIMAL(30,18) NOT NULL,
    "slippageBps" DECIMAL(12,6) NOT NULL,
    "feesPaid" DECIMAL(30,18) NOT NULL,
    "feeBps" DECIMAL(12,6) NOT NULL,
    "latencySignalToAckMs" INTEGER NOT NULL,
    "latencyAckToFirstFillMs" INTEGER NOT NULL,
    "latencyFirstToLastFillMs" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "execution_quality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "broker_positions" (
    "id" UUID NOT NULL,
    "brokerageAccountId" UUID NOT NULL,
    "canonicalAssetId" UUID NOT NULL,
    "instrumentKind" "InstrumentKind" NOT NULL,
    "nativeSymbol" TEXT NOT NULL,
    "qty" DECIMAL(30,18) NOT NULL,
    "avgEntryPrice" DECIMAL(30,18) NOT NULL,
    "unrealizedPnl" DECIMAL(30,18) NOT NULL,
    "marketValue" DECIMAL(30,18) NOT NULL,
    "lastSyncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "broker_positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feature_flags" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "env" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feature_flags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credential_access_logs" (
    "id" UUID NOT NULL,
    "brokerageAccountId" UUID NOT NULL,
    "accessedBy" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "success" BOOLEAN NOT NULL,
    "errorMessage" TEXT,
    "accessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "credential_access_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "brokerage_accounts_userId_idx" ON "brokerage_accounts"("userId");

-- CreateIndex
CREATE INDEX "brokerage_accounts_broker_env_status_idx" ON "brokerage_accounts"("broker", "env", "status");

-- CreateIndex
CREATE INDEX "brokerage_accounts_status_idx" ON "brokerage_accounts"("status");

-- CreateIndex
CREATE UNIQUE INDEX "brokerage_accounts_userId_broker_env_key" ON "brokerage_accounts"("userId", "broker", "env");

-- CreateIndex
CREATE UNIQUE INDEX "canonical_assets_symbol_key" ON "canonical_assets"("symbol");

-- CreateIndex
CREATE INDEX "canonical_assets_category_idx" ON "canonical_assets"("category");

-- CreateIndex
CREATE INDEX "broker_symbol_mappings_broker_isActive_idx" ON "broker_symbol_mappings"("broker", "isActive");

-- CreateIndex
CREATE INDEX "broker_symbol_mappings_canonicalAssetId_idx" ON "broker_symbol_mappings"("canonicalAssetId");

-- CreateIndex
CREATE UNIQUE INDEX "broker_symbol_mappings_broker_nativeSymbol_instrumentKind_key" ON "broker_symbol_mappings"("broker", "nativeSymbol", "instrumentKind");

-- CreateIndex
CREATE UNIQUE INDEX "broker_symbol_mappings_canonicalAssetId_broker_instrumentKi_key" ON "broker_symbol_mappings"("canonicalAssetId", "broker", "instrumentKind", "quoteCurrency");

-- CreateIndex
CREATE UNIQUE INDEX "routing_decisions_tradeId_key" ON "routing_decisions"("tradeId");

-- CreateIndex
CREATE INDEX "routing_decisions_userId_decidedAt_idx" ON "routing_decisions"("userId", "decidedAt");

-- CreateIndex
CREATE INDEX "routing_decisions_selectedBrokerageId_idx" ON "routing_decisions"("selectedBrokerageId");

-- CreateIndex
CREATE INDEX "routing_decisions_canonicalAssetId_decidedAt_idx" ON "routing_decisions"("canonicalAssetId", "decidedAt");

-- CreateIndex
CREATE UNIQUE INDEX "execution_quality_tradeId_key" ON "execution_quality"("tradeId");

-- CreateIndex
CREATE INDEX "execution_quality_brokerageAccountId_createdAt_idx" ON "execution_quality"("brokerageAccountId", "createdAt");

-- CreateIndex
CREATE INDEX "broker_positions_canonicalAssetId_idx" ON "broker_positions"("canonicalAssetId");

-- CreateIndex
CREATE UNIQUE INDEX "broker_positions_brokerageAccountId_nativeSymbol_instrument_key" ON "broker_positions"("brokerageAccountId", "nativeSymbol", "instrumentKind");

-- CreateIndex
CREATE INDEX "feature_flags_env_idx" ON "feature_flags"("env");

-- CreateIndex
CREATE UNIQUE INDEX "feature_flags_name_env_key" ON "feature_flags"("name", "env");

-- CreateIndex
CREATE INDEX "credential_access_logs_brokerageAccountId_accessedAt_idx" ON "credential_access_logs"("brokerageAccountId", "accessedAt");

-- CreateIndex
CREATE INDEX "credential_access_logs_accessedAt_idx" ON "credential_access_logs"("accessedAt");

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_brokerageAccountId_fkey" FOREIGN KEY ("brokerageAccountId") REFERENCES "brokerage_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brokerage_accounts" ADD CONSTRAINT "brokerage_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "broker_symbol_mappings" ADD CONSTRAINT "broker_symbol_mappings_canonicalAssetId_fkey" FOREIGN KEY ("canonicalAssetId") REFERENCES "canonical_assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routing_decisions" ADD CONSTRAINT "routing_decisions_tradeId_fkey" FOREIGN KEY ("tradeId") REFERENCES "trades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routing_decisions" ADD CONSTRAINT "routing_decisions_canonicalAssetId_fkey" FOREIGN KEY ("canonicalAssetId") REFERENCES "canonical_assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routing_decisions" ADD CONSTRAINT "routing_decisions_selectedBrokerageId_fkey" FOREIGN KEY ("selectedBrokerageId") REFERENCES "brokerage_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "execution_quality" ADD CONSTRAINT "execution_quality_tradeId_fkey" FOREIGN KEY ("tradeId") REFERENCES "trades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "execution_quality" ADD CONSTRAINT "execution_quality_brokerageAccountId_fkey" FOREIGN KEY ("brokerageAccountId") REFERENCES "brokerage_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "broker_positions" ADD CONSTRAINT "broker_positions_brokerageAccountId_fkey" FOREIGN KEY ("brokerageAccountId") REFERENCES "brokerage_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "broker_positions" ADD CONSTRAINT "broker_positions_canonicalAssetId_fkey" FOREIGN KEY ("canonicalAssetId") REFERENCES "canonical_assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credential_access_logs" ADD CONSTRAINT "credential_access_logs_brokerageAccountId_fkey" FOREIGN KEY ("brokerageAccountId") REFERENCES "brokerage_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ============================================================================
-- CheckConstraint: Trade must reference exactly one of alpacaAccountId or
-- brokerageAccountId. Prisma does not model check constraints; enforced in SQL.
-- ============================================================================
ALTER TABLE "trades"
  ADD CONSTRAINT "trades_exactly_one_account_fk"
  CHECK (
    ("alpacaAccountId" IS NOT NULL AND "brokerageAccountId" IS NULL)
    OR
    ("alpacaAccountId" IS NULL AND "brokerageAccountId" IS NOT NULL)
  );

-- ============================================================================
-- Seed: FeatureFlag rows for production / staging / paper envs. All start
-- disabled. Admins flip via the admin UI once each sub-project's rollout is
-- ready.
-- ============================================================================
INSERT INTO "feature_flags" ("id", "name", "env", "enabled", "description", "createdAt", "updatedAt") VALUES
  -- per-broker kill-switches
  (gen_random_uuid(), 'brokers.alpaca.enabled',  'production', true,  'Alpaca routable for crypto trade routing',                 NOW(), NOW()),
  (gen_random_uuid(), 'brokers.alpaca.enabled',  'staging',    true,  'Alpaca routable for crypto trade routing',                 NOW(), NOW()),
  (gen_random_uuid(), 'brokers.alpaca.enabled',  'paper',      true,  'Alpaca routable for crypto trade routing',                 NOW(), NOW()),
  (gen_random_uuid(), 'brokers.binance.enabled', 'production', false, 'Binance routable for crypto trade routing (SP4 gate)',     NOW(), NOW()),
  (gen_random_uuid(), 'brokers.binance.enabled', 'staging',    false, 'Binance routable for crypto trade routing (SP4 gate)',     NOW(), NOW()),
  (gen_random_uuid(), 'brokers.binance.enabled', 'paper',      false, 'Binance routable for crypto trade routing (SP4 gate)',     NOW(), NOW()),
  (gen_random_uuid(), 'brokers.okx.enabled',     'production', false, 'OKX routable for crypto trade routing (SP5 gate)',         NOW(), NOW()),
  (gen_random_uuid(), 'brokers.okx.enabled',     'staging',    false, 'OKX routable for crypto trade routing (SP5 gate)',         NOW(), NOW()),
  (gen_random_uuid(), 'brokers.okx.enabled',     'paper',      false, 'OKX routable for crypto trade routing (SP5 gate)',         NOW(), NOW()),
  (gen_random_uuid(), 'brokers.bybit.enabled',   'production', false, 'Bybit routable for crypto trade routing (SP6 gate)',       NOW(), NOW()),
  (gen_random_uuid(), 'brokers.bybit.enabled',   'staging',    false, 'Bybit routable for crypto trade routing (SP6 gate)',       NOW(), NOW()),
  (gen_random_uuid(), 'brokers.bybit.enabled',   'paper',      false, 'Bybit routable for crypto trade routing (SP6 gate)',       NOW(), NOW()),
  (gen_random_uuid(), 'brokers.ikbr.enabled',    'production', false, 'IKBR routable (reserved for future equities epic)',        NOW(), NOW()),
  (gen_random_uuid(), 'brokers.ikbr.enabled',    'staging',    false, 'IKBR routable (reserved for future equities epic)',        NOW(), NOW()),
  (gen_random_uuid(), 'brokers.ikbr.enabled',    'paper',      false, 'IKBR routable (reserved for future equities epic)',        NOW(), NOW()),
  -- engine / app feature gates
  (gen_random_uuid(), 'features.brokerAdapter.enabled',        'production', false, 'Engine uses BrokerAdapterRegistry instead of direct Alpaca calls (SP2)', NOW(), NOW()),
  (gen_random_uuid(), 'features.brokerAdapter.enabled',        'staging',    false, 'Engine uses BrokerAdapterRegistry (SP2)',                                NOW(), NOW()),
  (gen_random_uuid(), 'features.brokerAdapter.enabled',        'paper',      false, 'Engine uses BrokerAdapterRegistry (SP2)',                                NOW(), NOW()),
  (gen_random_uuid(), 'features.multiBrokerUI.enabled',        'production', false, 'App shows /configure/brokers hub + scope switcher + badges (SP3/SP8)',   NOW(), NOW()),
  (gen_random_uuid(), 'features.multiBrokerUI.enabled',        'staging',    false, 'App shows /configure/brokers hub (SP3/SP8)',                             NOW(), NOW()),
  (gen_random_uuid(), 'features.multiBrokerUI.enabled',        'paper',      false, 'App shows /configure/brokers hub (SP3/SP8)',                             NOW(), NOW()),
  (gen_random_uuid(), 'features.bestExecutionRouter.enabled',  'production', false, 'Engine uses BrokerRouter for venue selection (SP7)',                     NOW(), NOW()),
  (gen_random_uuid(), 'features.bestExecutionRouter.enabled',  'staging',    false, 'Engine uses BrokerRouter (SP7)',                                         NOW(), NOW()),
  (gen_random_uuid(), 'features.bestExecutionRouter.enabled',  'paper',      false, 'Engine uses BrokerRouter (SP7)',                                         NOW(), NOW());

-- ============================================================================
-- Seed: top-40 CanonicalAsset rows. Broker-native mappings seeded in a later
-- migration, once each adapter is ready to report tick/step/minNotional from
-- the exchange's instruments endpoint.
-- ============================================================================
INSERT INTO "canonical_assets" ("id", "symbol", "name", "category", "decimals", "createdAt", "updatedAt") VALUES
  -- Stablecoins (treated as quote currencies and occasionally as tradable pairs)
  (gen_random_uuid(), 'USDT', 'Tether',               'STABLECOIN',   6, NOW(), NOW()),
  (gen_random_uuid(), 'USDC', 'USD Coin',             'STABLECOIN',   6, NOW(), NOW()),
  (gen_random_uuid(), 'DAI',  'Dai',                  'STABLECOIN',  18, NOW(), NOW()),
  -- Majors
  (gen_random_uuid(), 'BTC',  'Bitcoin',              'CRYPTO_MAJOR', 8, NOW(), NOW()),
  (gen_random_uuid(), 'ETH',  'Ethereum',             'CRYPTO_MAJOR',18, NOW(), NOW()),
  (gen_random_uuid(), 'SOL',  'Solana',               'CRYPTO_MAJOR', 9, NOW(), NOW()),
  (gen_random_uuid(), 'BNB',  'BNB',                  'CRYPTO_MAJOR',18, NOW(), NOW()),
  (gen_random_uuid(), 'XRP',  'XRP',                  'CRYPTO_MAJOR', 6, NOW(), NOW()),
  (gen_random_uuid(), 'ADA',  'Cardano',              'CRYPTO_MAJOR', 6, NOW(), NOW()),
  (gen_random_uuid(), 'DOGE', 'Dogecoin',             'CRYPTO_MAJOR', 8, NOW(), NOW()),
  (gen_random_uuid(), 'AVAX', 'Avalanche',            'CRYPTO_MAJOR',18, NOW(), NOW()),
  (gen_random_uuid(), 'TRX',  'TRON',                 'CRYPTO_MAJOR', 6, NOW(), NOW()),
  (gen_random_uuid(), 'DOT',  'Polkadot',             'CRYPTO_MAJOR',10, NOW(), NOW()),
  (gen_random_uuid(), 'LINK', 'Chainlink',            'CRYPTO_MAJOR',18, NOW(), NOW()),
  (gen_random_uuid(), 'MATIC','Polygon',              'CRYPTO_MAJOR',18, NOW(), NOW()),
  -- Alts (top liquidity outside majors)
  (gen_random_uuid(), 'LTC',  'Litecoin',             'CRYPTO_ALT',   8, NOW(), NOW()),
  (gen_random_uuid(), 'BCH',  'Bitcoin Cash',         'CRYPTO_ALT',   8, NOW(), NOW()),
  (gen_random_uuid(), 'UNI',  'Uniswap',              'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'ATOM', 'Cosmos',               'CRYPTO_ALT',   6, NOW(), NOW()),
  (gen_random_uuid(), 'XLM',  'Stellar',              'CRYPTO_ALT',   7, NOW(), NOW()),
  (gen_random_uuid(), 'NEAR', 'NEAR Protocol',        'CRYPTO_ALT',  24, NOW(), NOW()),
  (gen_random_uuid(), 'FIL',  'Filecoin',             'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'ETC',  'Ethereum Classic',     'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'HBAR', 'Hedera',               'CRYPTO_ALT',   8, NOW(), NOW()),
  (gen_random_uuid(), 'APT',  'Aptos',                'CRYPTO_ALT',   8, NOW(), NOW()),
  (gen_random_uuid(), 'ARB',  'Arbitrum',             'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'OP',   'Optimism',             'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'INJ',  'Injective',            'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'SUI',  'Sui',                  'CRYPTO_ALT',   9, NOW(), NOW()),
  (gen_random_uuid(), 'SEI',  'Sei',                  'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'TIA',  'Celestia',             'CRYPTO_ALT',   6, NOW(), NOW()),
  (gen_random_uuid(), 'RNDR', 'Render',               'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'AAVE', 'Aave',                 'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'GRT',  'The Graph',            'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'ALGO', 'Algorand',             'CRYPTO_ALT',   6, NOW(), NOW()),
  (gen_random_uuid(), 'FTM',  'Fantom',               'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'SAND', 'The Sandbox',          'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'MANA', 'Decentraland',         'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'AXS',  'Axie Infinity',        'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'PEPE', 'Pepe',                 'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'SHIB', 'Shiba Inu',            'CRYPTO_ALT',  18, NOW(), NOW()),
  (gen_random_uuid(), 'WIF',  'dogwifhat',            'CRYPTO_ALT',   6, NOW(), NOW());
