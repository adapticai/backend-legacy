-- DropForeignKey
ALTER TABLE "alpaca_accounts" DROP CONSTRAINT "alpaca_accounts_userId_fkey";

-- AddForeignKey
ALTER TABLE "alpaca_accounts" ADD CONSTRAINT "alpaca_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
