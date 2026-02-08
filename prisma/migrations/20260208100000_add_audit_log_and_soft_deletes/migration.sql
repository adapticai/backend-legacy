-- CreateEnum
CREATE TYPE "AuditOperationType" AS ENUM ('CREATE', 'UPDATE', 'DELETE');

-- CreateTable: AuditLog (append-only audit trail)
CREATE TABLE "audit_logs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID,
    "operationType" "AuditOperationType" NOT NULL,
    "modelName" VARCHAR(100) NOT NULL,
    "recordId" VARCHAR(255) NOT NULL,
    "changedFields" JSONB NOT NULL,
    "operationName" VARCHAR(255),
    "ipAddress" VARCHAR(45),
    "metadata" JSONB,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "audit_logs_timestamp_idx" ON "audit_logs"("timestamp");
CREATE INDEX "audit_logs_userId_timestamp_idx" ON "audit_logs"("userId", "timestamp");
CREATE INDEX "audit_logs_modelName_timestamp_idx" ON "audit_logs"("modelName", "timestamp");
CREATE INDEX "audit_logs_recordId_idx" ON "audit_logs"("recordId");
CREATE INDEX "audit_logs_operationType_timestamp_idx" ON "audit_logs"("operationType", "timestamp");

-- AlterTable: Add deletedAt to User
ALTER TABLE "users" ADD COLUMN "deletedAt" TIMESTAMP(3);

-- AlterTable: Add deletedAt to AlpacaAccount
ALTER TABLE "alpaca_accounts" ADD COLUMN "deletedAt" TIMESTAMP(3);

-- AlterTable: Add deletedAt to Trade
ALTER TABLE "trades" ADD COLUMN "deletedAt" TIMESTAMP(3);

-- AlterTable: Add deletedAt to Action
ALTER TABLE "actions" ADD COLUMN "deletedAt" TIMESTAMP(3);

-- CreateIndex: Index on deletedAt for efficient soft-delete filtering
CREATE INDEX "users_deletedAt_idx" ON "users"("deletedAt");
CREATE INDEX "alpaca_accounts_deletedAt_idx" ON "alpaca_accounts"("deletedAt");
CREATE INDEX "trades_deletedAt_idx" ON "trades"("deletedAt");
CREATE INDEX "actions_deletedAt_idx" ON "actions"("deletedAt");

-- Revoke UPDATE and DELETE on audit_logs to enforce append-only behavior.
-- The application user should only be able to INSERT into audit_logs.
-- Note: This requires the application to use a database user that respects these
-- grants. Uncomment and adjust the role name as needed for your deployment:
-- REVOKE UPDATE, DELETE ON "audit_logs" FROM your_app_db_user;
