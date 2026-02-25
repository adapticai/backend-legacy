-- Database Constraints Migration
-- Adds CHECK constraints for data integrity that cannot be expressed declaratively in Prisma schema.

-- ============================================================
-- Positive value constraints (quantities, prices, percentages)
-- ============================================================

-- Trade: confidence must be between 0 and 1
ALTER TABLE "trades"
  ADD CONSTRAINT "chk_trade_confidence_range"
  CHECK ("confidence" >= 0 AND "confidence" <= 1);

-- Trade: entry price must be positive when set
ALTER TABLE "trades"
  ADD CONSTRAINT "chk_trade_entry_price_positive"
  CHECK ("entryPrice" IS NULL OR "entryPrice" > 0);

-- Trade: exit price must be positive when set
ALTER TABLE "trades"
  ADD CONSTRAINT "chk_trade_exit_price_positive"
  CHECK ("exitPrice" IS NULL OR "exitPrice" > 0);

-- Trade: entry quantity must be positive when set
ALTER TABLE "trades"
  ADD CONSTRAINT "chk_trade_entry_qty_positive"
  CHECK ("entryQty" IS NULL OR "entryQty" > 0);

-- Trade: exit quantity must be positive when set
ALTER TABLE "trades"
  ADD CONSTRAINT "chk_trade_exit_qty_positive"
  CHECK ("exitQty" IS NULL OR "exitQty" > 0);

-- Trade: entry value must be positive when set
ALTER TABLE "trades"
  ADD CONSTRAINT "chk_trade_entry_value_positive"
  CHECK ("entryValue" IS NULL OR "entryValue" > 0);

-- Trade: exit value must be positive when set
ALTER TABLE "trades"
  ADD CONSTRAINT "chk_trade_exit_value_positive"
  CHECK ("exitValue" IS NULL OR "exitValue" > 0);

-- Trade: duration must be non-negative when set
ALTER TABLE "trades"
  ADD CONSTRAINT "chk_trade_duration_non_negative"
  CHECK ("durationMinutes" IS NULL OR "durationMinutes" >= 0);

-- AlpacaAccount: trade allocation percentage must be between 0 and 100
ALTER TABLE "alpaca_accounts"
  ADD CONSTRAINT "chk_alpaca_trade_alloc_pct_range"
  CHECK ("tradeAllocationPct" >= 0 AND "tradeAllocationPct" <= 100);

-- AlpacaAccount: crypto trade allocation percentage must be between 0 and 100
ALTER TABLE "alpaca_accounts"
  ADD CONSTRAINT "chk_alpaca_crypto_alloc_pct_range"
  CHECK ("cryptoTradeAllocationPct" >= 0 AND "cryptoTradeAllocationPct" <= 100);

-- AlpacaAccount: volume threshold must be non-negative
ALTER TABLE "alpaca_accounts"
  ADD CONSTRAINT "chk_alpaca_volume_threshold_non_negative"
  CHECK ("volumeThreshold" >= 0);

-- AlpacaAccount: min percentage change must be non-negative
ALTER TABLE "alpaca_accounts"
  ADD CONSTRAINT "chk_alpaca_min_pct_change_non_negative"
  CHECK ("minPercentageChange" >= 0);

-- AlpacaAccount: trailing stop percentages must be non-negative
ALTER TABLE "alpaca_accounts"
  ADD CONSTRAINT "chk_alpaca_portfolio_trail_pct_non_negative"
  CHECK ("portfolioTrailPercent" >= 0);

ALTER TABLE "alpaca_accounts"
  ADD CONSTRAINT "chk_alpaca_portfolio_profit_threshold_non_negative"
  CHECK ("portfolioProfitThresholdPercent" >= 0);

-- Allocation: all allocation percentages must be between 0 and 100
-- Note: the sum constraint is already handled by the allocation-validator migration
ALTER TABLE "allocations"
  ADD CONSTRAINT "chk_alloc_equities_range"
  CHECK ("equities" >= 0 AND "equities" <= 100);

ALTER TABLE "allocations"
  ADD CONSTRAINT "chk_alloc_options_contracts_range"
  CHECK ("optionsContracts" >= 0 AND "optionsContracts" <= 100);

ALTER TABLE "allocations"
  ADD CONSTRAINT "chk_alloc_futures_range"
  CHECK ("futures" >= 0 AND "futures" <= 100);

ALTER TABLE "allocations"
  ADD CONSTRAINT "chk_alloc_etfs_range"
  CHECK ("etfs" >= 0 AND "etfs" <= 100);

ALTER TABLE "allocations"
  ADD CONSTRAINT "chk_alloc_forex_range"
  CHECK ("forex" >= 0 AND "forex" <= 100);

ALTER TABLE "allocations"
  ADD CONSTRAINT "chk_alloc_crypto_range"
  CHECK ("crypto" >= 0 AND "crypto" <= 100);

-- ============================================================
-- Non-empty string constraints
-- ============================================================

-- Trade: symbol must not be blank
ALTER TABLE "trades"
  ADD CONSTRAINT "chk_trade_symbol_not_empty"
  CHECK (length(trim("symbol")) > 0);

-- Trade: analysis must not be blank
ALTER TABLE "trades"
  ADD CONSTRAINT "chk_trade_analysis_not_empty"
  CHECK (length(trim("analysis")) > 0);

-- Trade: summary must not be blank
ALTER TABLE "trades"
  ADD CONSTRAINT "chk_trade_summary_not_empty"
  CHECK (length(trim("summary")) > 0);

-- Asset: symbol must not be blank
ALTER TABLE "assets"
  ADD CONSTRAINT "chk_asset_symbol_not_empty"
  CHECK (length(trim("symbol")) > 0);

-- Asset: name must not be blank
ALTER TABLE "assets"
  ADD CONSTRAINT "chk_asset_name_not_empty"
  CHECK (length(trim("name")) > 0);

-- AlpacaAccount: API key must not be blank
ALTER TABLE "alpaca_accounts"
  ADD CONSTRAINT "chk_alpaca_api_key_not_empty"
  CHECK (length(trim("APIKey")) > 0);

-- AlpacaAccount: API secret must not be blank
ALTER TABLE "alpaca_accounts"
  ADD CONSTRAINT "chk_alpaca_api_secret_not_empty"
  CHECK (length(trim("APISecret")) > 0);

-- Action: note must not be blank
ALTER TABLE "actions"
  ADD CONSTRAINT "chk_action_note_not_empty"
  CHECK (length(trim("note")) > 0);

-- Action: sequence must be non-negative
ALTER TABLE "actions"
  ADD CONSTRAINT "chk_action_sequence_non_negative"
  CHECK ("sequence" >= 0);

-- OptionsPosition: quantity must be positive
ALTER TABLE "options_positions"
  ADD CONSTRAINT "chk_options_position_quantity_positive"
  CHECK ("quantity" > 0);

-- OptionsPosition: entry price must be non-negative
ALTER TABLE "options_positions"
  ADD CONSTRAINT "chk_options_position_entry_price_non_negative"
  CHECK ("entryPrice" >= 0);

-- OptionsTradeExecution: quantity must be positive
ALTER TABLE "options_trade_executions"
  ADD CONSTRAINT "chk_options_execution_quantity_positive"
  CHECK ("quantity" > 0);

-- OptionsTradeExecution: execution price must be non-negative
ALTER TABLE "options_trade_executions"
  ADD CONSTRAINT "chk_options_execution_price_non_negative"
  CHECK ("executionPrice" >= 0);

-- Alert: retry count must be non-negative
ALTER TABLE "alerts"
  ADD CONSTRAINT "chk_alert_retry_count_non_negative"
  CHECK ("retryCount" >= 0);
