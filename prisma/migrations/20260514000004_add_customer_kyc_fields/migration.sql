-- 20260514000004_add_customer_kyc_fields
-- Per sub-project 2 plan A1/Task 11.
-- Adds 4 nullable KYC columns to customers. Backfill is not required —
-- onboarding KYC step populates these going forward (sub-project 7 Q1).

ALTER TABLE "Customer" ADD COLUMN "jurisdiction" TEXT;
ALTER TABLE "Customer" ADD COLUMN "riskProfile" TEXT;
ALTER TABLE "Customer" ADD COLUMN "amlStatus" TEXT;
ALTER TABLE "Customer" ADD COLUMN "lastKycUpdate" TIMESTAMP(3);
