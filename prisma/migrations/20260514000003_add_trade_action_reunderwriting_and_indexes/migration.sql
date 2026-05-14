-- 20260514000003_add_trade_action_reunderwriting_and_indexes
-- Per sub-project 2 plan A1/Task 10 (combined with the perf indexes from Task 13).
-- Adds re-underwriting columns and updatedAt indexes to trades and actions.
--
-- thesisVersion: monotonically increases when re-underwriting produces a new thesis.
-- supersededActionId: linkage to the prior Action this trade/action replaced.

ALTER TABLE "trades" ADD COLUMN "thesisVersion" INTEGER NOT NULL DEFAULT 1;
ALTER TABLE "trades" ADD COLUMN "supersededActionId" UUID;
CREATE INDEX "trades_supersededActionId_idx" ON "trades" ("supersededActionId");
CREATE INDEX "trades_updatedAt_idx" ON "trades" ("updatedAt");

ALTER TABLE "actions" ADD COLUMN "thesisVersion" INTEGER NOT NULL DEFAULT 1;
ALTER TABLE "actions" ADD COLUMN "supersededActionId" UUID;
CREATE INDEX "actions_supersededActionId_idx" ON "actions" ("supersededActionId");
CREATE INDEX "actions_updatedAt_idx" ON "actions" ("updatedAt");
