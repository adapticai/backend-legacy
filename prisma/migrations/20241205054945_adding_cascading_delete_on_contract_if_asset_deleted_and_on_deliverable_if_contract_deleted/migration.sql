-- DropForeignKey
ALTER TABLE "contracts" DROP CONSTRAINT "contracts_assetId_fkey";

-- DropForeignKey
ALTER TABLE "deliverables" DROP CONSTRAINT "deliverables_contractId_fkey";

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliverables" ADD CONSTRAINT "deliverables_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "contracts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
