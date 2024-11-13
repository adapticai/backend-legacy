-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "cancelRequestedAt" TIMESTAMP(3),
ADD COLUMN     "canceledAt" TIMESTAMP(3),
ADD COLUMN     "filledQty" DOUBLE PRECISION;
