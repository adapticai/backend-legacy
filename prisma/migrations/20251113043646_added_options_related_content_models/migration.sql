-- CreateEnum
CREATE TYPE "OptionType" AS ENUM ('CALL', 'PUT');

-- CreateEnum
CREATE TYPE "OptionPositionStatus" AS ENUM ('OPEN', 'CLOSED', 'EXPIRED', 'ASSIGNED');

-- CreateEnum
CREATE TYPE "OptionExecutionSide" AS ENUM ('BUY_TO_OPEN', 'SELL_TO_CLOSE', 'SELL_TO_OPEN', 'BUY_TO_CLOSE');

-- CreateTable
CREATE TABLE "options_contracts" (
    "id" UUID NOT NULL,
    "symbol" TEXT NOT NULL,
    "contractSymbol" TEXT NOT NULL,
    "optionType" "OptionType" NOT NULL,
    "strikePrice" DECIMAL(10,2) NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "daysToExpiration" INTEGER,
    "lastPrice" DECIMAL(10,4),
    "bidPrice" DECIMAL(10,4),
    "askPrice" DECIMAL(10,4),
    "midPrice" DECIMAL(10,4),
    "bidSize" INTEGER,
    "askSize" INTEGER,
    "volume" INTEGER,
    "openInterest" INTEGER,
    "impliedVolatility" DECIMAL(8,6),
    "delta" DECIMAL(8,6),
    "gamma" DECIMAL(8,6),
    "theta" DECIMAL(8,6),
    "vega" DECIMAL(8,6),
    "rho" DECIMAL(8,6),
    "inTheMoney" BOOLEAN,
    "intrinsicValue" DECIMAL(10,4),
    "extrinsicValue" DECIMAL(10,4),
    "theoreticalPrice" DECIMAL(10,4),
    "underlyingPrice" DECIMAL(10,4),
    "metadata" JSONB,
    "dataTimestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "options_contracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "options_positions" (
    "id" UUID NOT NULL,
    "alpacaAccountId" UUID NOT NULL,
    "contractId" UUID NOT NULL,
    "status" "OptionPositionStatus" NOT NULL DEFAULT 'OPEN',
    "openingSide" "OptionExecutionSide" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "entryPrice" DECIMAL(10,4) NOT NULL,
    "entryCost" DECIMAL(12,2) NOT NULL,
    "entryTime" TIMESTAMP(3) NOT NULL,
    "exitPrice" DECIMAL(10,4),
    "exitValue" DECIMAL(12,2),
    "exitTime" TIMESTAMP(3),
    "currentPrice" DECIMAL(10,4),
    "currentValue" DECIMAL(12,2),
    "unrealizedPnL" DECIMAL(12,2),
    "unrealizedPnLPercent" DECIMAL(8,4),
    "realizedPnL" DECIMAL(12,2),
    "realizedPnLPercent" DECIMAL(8,4),
    "totalFees" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "currentDelta" DECIMAL(8,6),
    "currentGamma" DECIMAL(8,6),
    "currentTheta" DECIMAL(8,6),
    "currentVega" DECIMAL(8,6),
    "currentRho" DECIMAL(8,6),
    "currentImpliedVolatility" DECIMAL(8,6),
    "daysHeld" INTEGER,
    "exitReason" TEXT,
    "strategyType" TEXT,
    "tradeId" UUID,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "options_positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "options_greeks_history" (
    "id" UUID NOT NULL,
    "contractId" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "underlyingPrice" DECIMAL(10,4) NOT NULL,
    "optionPrice" DECIMAL(10,4) NOT NULL,
    "bidPrice" DECIMAL(10,4),
    "askPrice" DECIMAL(10,4),
    "impliedVolatility" DECIMAL(8,6) NOT NULL,
    "delta" DECIMAL(8,6) NOT NULL,
    "gamma" DECIMAL(8,6) NOT NULL,
    "theta" DECIMAL(8,6) NOT NULL,
    "vega" DECIMAL(8,6) NOT NULL,
    "rho" DECIMAL(8,6) NOT NULL,
    "volume" INTEGER,
    "openInterest" INTEGER,
    "daysToExpiration" INTEGER NOT NULL,
    "intrinsicValue" DECIMAL(10,4) NOT NULL,
    "extrinsicValue" DECIMAL(10,4) NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "options_greeks_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "options_trade_executions" (
    "id" UUID NOT NULL,
    "positionId" UUID NOT NULL,
    "contractId" UUID NOT NULL,
    "alpacaAccountId" UUID NOT NULL,
    "brokerOrderId" TEXT,
    "executionSide" "OptionExecutionSide" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "executionPrice" DECIMAL(10,4) NOT NULL,
    "executionValue" DECIMAL(12,2) NOT NULL,
    "fees" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "executionTime" TIMESTAMP(3) NOT NULL,
    "underlyingPriceAtExecution" DECIMAL(10,4),
    "deltaAtExecution" DECIMAL(8,6),
    "gammaAtExecution" DECIMAL(8,6),
    "thetaAtExecution" DECIMAL(8,6),
    "vegaAtExecution" DECIMAL(8,6),
    "rhoAtExecution" DECIMAL(8,6),
    "impliedVolatilityAtExecution" DECIMAL(8,6),
    "orderType" TEXT,
    "limitPrice" DECIMAL(10,4),
    "stopPrice" DECIMAL(10,4),
    "timeInForce" TEXT,
    "venue" TEXT,
    "slippage" DECIMAL(10,4),
    "notes" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "options_trade_executions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "options_contracts_contractSymbol_key" ON "options_contracts"("contractSymbol");

-- CreateIndex
CREATE INDEX "options_contracts_symbol_expirationDate_idx" ON "options_contracts"("symbol", "expirationDate");

-- CreateIndex
CREATE INDEX "options_contracts_expirationDate_idx" ON "options_contracts"("expirationDate");

-- CreateIndex
CREATE INDEX "options_contracts_symbol_optionType_strikePrice_expirationD_idx" ON "options_contracts"("symbol", "optionType", "strikePrice", "expirationDate");

-- CreateIndex
CREATE INDEX "options_contracts_dataTimestamp_idx" ON "options_contracts"("dataTimestamp");

-- CreateIndex
CREATE INDEX "options_positions_alpacaAccountId_status_idx" ON "options_positions"("alpacaAccountId", "status");

-- CreateIndex
CREATE INDEX "options_positions_contractId_idx" ON "options_positions"("contractId");

-- CreateIndex
CREATE INDEX "options_positions_status_idx" ON "options_positions"("status");

-- CreateIndex
CREATE INDEX "options_positions_entryTime_idx" ON "options_positions"("entryTime");

-- CreateIndex
CREATE INDEX "options_positions_tradeId_idx" ON "options_positions"("tradeId");

-- CreateIndex
CREATE INDEX "options_greeks_history_contractId_timestamp_idx" ON "options_greeks_history"("contractId", "timestamp");

-- CreateIndex
CREATE INDEX "options_greeks_history_timestamp_idx" ON "options_greeks_history"("timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "options_greeks_history_contractId_timestamp_key" ON "options_greeks_history"("contractId", "timestamp");

-- CreateIndex
CREATE INDEX "options_trade_executions_positionId_idx" ON "options_trade_executions"("positionId");

-- CreateIndex
CREATE INDEX "options_trade_executions_contractId_idx" ON "options_trade_executions"("contractId");

-- CreateIndex
CREATE INDEX "options_trade_executions_alpacaAccountId_executionTime_idx" ON "options_trade_executions"("alpacaAccountId", "executionTime");

-- CreateIndex
CREATE INDEX "options_trade_executions_executionTime_idx" ON "options_trade_executions"("executionTime");

-- CreateIndex
CREATE INDEX "options_trade_executions_brokerOrderId_idx" ON "options_trade_executions"("brokerOrderId");

-- AddForeignKey
ALTER TABLE "options_positions" ADD CONSTRAINT "options_positions_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "options_contracts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options_greeks_history" ADD CONSTRAINT "options_greeks_history_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "options_contracts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options_trade_executions" ADD CONSTRAINT "options_trade_executions_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "options_positions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options_trade_executions" ADD CONSTRAINT "options_trade_executions_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "options_contracts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
