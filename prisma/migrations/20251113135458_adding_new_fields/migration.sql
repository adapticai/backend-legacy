-- CreateTable
CREATE TABLE "portfolio_greeks_history" (
    "id" UUID NOT NULL,
    "accountId" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "contractId" UUID,
    "symbol" TEXT,
    "underlying" TEXT NOT NULL,
    "delta" DECIMAL(8,6) NOT NULL,
    "gamma" DECIMAL(8,6) NOT NULL,
    "theta" DECIMAL(8,6) NOT NULL,
    "vega" DECIMAL(8,6) NOT NULL,
    "rho" DECIMAL(8,6) NOT NULL,
    "totalDelta" DECIMAL(10,6),
    "totalGamma" DECIMAL(10,6),
    "totalTheta" DECIMAL(10,6),
    "totalVega" DECIMAL(10,6),
    "totalRho" DECIMAL(10,6),
    "positionCount" INTEGER,
    "underlyingSymbols" JSONB,
    "expirationDates" JSONB,
    "marketHours" BOOLEAN,
    "vix" DECIMAL(8,4),
    "spyPrice" DECIMAL(10,4),
    "source" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_greeks_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "portfolio_greeks_history_accountId_timestamp_idx" ON "portfolio_greeks_history"("accountId", "timestamp");

-- CreateIndex
CREATE INDEX "portfolio_greeks_history_timestamp_idx" ON "portfolio_greeks_history"("timestamp");

-- CreateIndex
CREATE INDEX "portfolio_greeks_history_underlying_idx" ON "portfolio_greeks_history"("underlying");

-- CreateIndex
CREATE UNIQUE INDEX "portfolio_greeks_history_accountId_timestamp_contractId_key" ON "portfolio_greeks_history"("accountId", "timestamp", "contractId");
