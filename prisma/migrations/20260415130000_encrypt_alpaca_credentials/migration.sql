-- ============================================================================
-- AlpacaAccount credential retro-fix — Part A: Schema
-- Spec: docs/superpowers/specs/2026-04-15-multi-broker-crypto-design.md §3.4
-- ============================================================================
-- Adds the KMS envelope-encryption columns to alpaca_accounts. Both the
-- plaintext APIKey/APISecret columns AND the new encrypted columns coexist
-- for one release cycle:
--   1) This migration (Part A): ADD encrypted columns, leave plaintext
--      untouched.
--   2) Backfill script (run after deploy): CredentialService backfills the
--      encrypted columns from every existing row. See
--      src/crypto/backfill-alpaca-credentials.ts (invoked manually or via
--      npm run backfill:alpaca-credentials in prod).
--   3) Switchover deploy: code reads from encrypted columns only.
--   4) Follow-up migration (outside this epic's SP1): DROP COLUMN APIKey,
--      APISecret. Scheduled for ~1 release after this one lands in prod.
--
-- Plaintext columns are GQL.SKIP=true from this migration forward, so
-- app/web can no longer read them via GraphQL.
-- ============================================================================

ALTER TABLE "alpaca_accounts"
  ADD COLUMN "credFingerprint" TEXT,
  ADD COLUMN "encAPIKey" BYTEA,
  ADD COLUMN "encAPISecret" BYTEA,
  ADD COLUMN "encDataKey" BYTEA,
  ADD COLUMN "kmsKeyArn" TEXT;
