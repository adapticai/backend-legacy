-- CreateEnum
CREATE TYPE "OptionContractType" AS ENUM ('CALL', 'PUT');

-- AlterTable
ALTER TABLE "trades" ADD COLUMN     "optionContractType" "OptionContractType" DEFAULT 'CALL';
