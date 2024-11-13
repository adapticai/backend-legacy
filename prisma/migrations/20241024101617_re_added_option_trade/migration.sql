-- AlterTable
ALTER TABLE "trades" ADD COLUMN     "optionType" "OptionType" DEFAULT 'CALL';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "openaiAPIKey" TEXT;
