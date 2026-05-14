-- Wave 234/236 — Trade attribution columns: signalSource, signalId,
-- pathway, exitTier. All nullable; index on signalId for
-- live-IC join performance against PredictionPair.tradeId.
--
-- Ported from stable-release commit 1f0fe05 — applied to main's
-- post-A1 schema where Trade uses brokerageAccountId.

ALTER TABLE "trades"
  ADD COLUMN IF NOT EXISTS "signalSource" TEXT,
  ADD COLUMN IF NOT EXISTS "signalId" TEXT,
  ADD COLUMN IF NOT EXISTS "pathway" TEXT,
  ADD COLUMN IF NOT EXISTS "exitTier" TEXT;

CREATE INDEX IF NOT EXISTS "trades_signalId_idx" ON "trades"("signalId");
