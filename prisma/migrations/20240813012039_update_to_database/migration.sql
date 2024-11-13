-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ResourceType" ADD VALUE 'WEB_APP';
ALTER TYPE "ResourceType" ADD VALUE 'BACKEND_INSTANCE';

-- AlterTable
ALTER TABLE "Workspace" ADD COLUMN     "address" TEXT,
ADD COLUMN     "areasOfFocus" TEXT[],
ADD COLUMN     "email" TEXT,
ADD COLUMN     "foundingYear" INTEGER,
ADD COLUMN     "headquarters" TEXT,
ADD COLUMN     "legalName" TEXT,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "sameAs" TEXT[],
ADD COLUMN     "telephone" TEXT;
