-- AlterTable
ALTER TABLE "actions" ADD COLUMN     "dependsOnId" UUID;

-- AlterTable
ALTER TABLE "alpaca_accounts" ADD COLUMN     "realTime" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "actions" ADD CONSTRAINT "actions_dependsOnId_fkey" FOREIGN KEY ("dependsOnId") REFERENCES "actions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
