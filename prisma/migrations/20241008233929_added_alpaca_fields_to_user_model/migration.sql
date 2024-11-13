/*
  Warnings:

  - A unique constraint covering the columns `[alpacaAccountId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "alpacaAccountId" UUID;

-- CreateTable
CREATE TABLE "alpaca_accounts" (
    "id" UUID NOT NULL,
    "APIKey" TEXT NOT NULL,
    "APISecret" TEXT NOT NULL,
    "configuration" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,

    CONSTRAINT "alpaca_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alpaca_accounts_userId_key" ON "alpaca_accounts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_alpacaAccountId_key" ON "users"("alpacaAccountId");

-- AddForeignKey
ALTER TABLE "alpaca_accounts" ADD CONSTRAINT "alpaca_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
