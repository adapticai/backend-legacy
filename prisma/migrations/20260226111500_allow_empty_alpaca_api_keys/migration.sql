-- Allow empty Alpaca API keys
-- This enables user accounts to be created (e.g., via Google OAuth) before
-- they have configured their Alpaca API credentials.

-- Drop the non-empty constraints on API key and secret
ALTER TABLE "alpaca_accounts"
  DROP CONSTRAINT IF EXISTS "chk_alpaca_api_key_not_empty";

ALTER TABLE "alpaca_accounts"
  DROP CONSTRAINT IF EXISTS "chk_alpaca_api_secret_not_empty";
