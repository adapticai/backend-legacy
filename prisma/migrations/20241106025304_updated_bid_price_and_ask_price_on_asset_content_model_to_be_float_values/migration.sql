/*
  Warnings:

  - The `askPrice` column on the `assets` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `bidPrice` column on the `assets` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "assets" DROP COLUMN "askPrice",
ADD COLUMN     "askPrice" DOUBLE PRECISION,
DROP COLUMN "bidPrice",
ADD COLUMN     "bidPrice" DOUBLE PRECISION;
