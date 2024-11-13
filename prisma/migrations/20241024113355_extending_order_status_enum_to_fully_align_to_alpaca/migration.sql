-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "OrderStatus" ADD VALUE 'STAGED';
ALTER TYPE "OrderStatus" ADD VALUE 'DONE_FOR_DAY';
ALTER TYPE "OrderStatus" ADD VALUE 'REPLACED';
ALTER TYPE "OrderStatus" ADD VALUE 'PENDING_CANCEL';
ALTER TYPE "OrderStatus" ADD VALUE 'PENDING_REPLACE';
ALTER TYPE "OrderStatus" ADD VALUE 'ACCEPTED';
ALTER TYPE "OrderStatus" ADD VALUE 'PENDING_NEW';
ALTER TYPE "OrderStatus" ADD VALUE 'ACCEPTED_FOR_BIDDING';
ALTER TYPE "OrderStatus" ADD VALUE 'STOPPED';
ALTER TYPE "OrderStatus" ADD VALUE 'SUSPENDED';
ALTER TYPE "OrderStatus" ADD VALUE 'CALCULATED';
