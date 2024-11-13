-- AlterTable
ALTER TABLE "Workspace" ADD COLUMN     "addUsersByEmailDomain" BOOLEAN,
ADD COLUMN     "emailDomain" TEXT,
ADD COLUMN     "website" TEXT;
