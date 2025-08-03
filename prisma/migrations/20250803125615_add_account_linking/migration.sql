-- CreateEnum
CREATE TYPE "AccountLinkingStatus" AS ENUM ('PENDING', 'EMAIL_SENT', 'VERIFIED', 'APPROVED', 'REJECTED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('CREDENTIALS', 'GOOGLE', 'GITHUB');

-- CreateTable
CREATE TABLE "linked_providers" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "provider" "AuthProvider" NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "email" TEXT,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "expiresAt" TIMESTAMP(3),
    "linkedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "linked_providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account_linking_requests" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "provider" "AuthProvider" NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "status" "AccountLinkingStatus" NOT NULL DEFAULT 'PENDING',
    "verificationToken" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "verifiedAt" TIMESTAMP(3),
    "approvedAt" TIMESTAMP(3),
    "rejectedAt" TIMESTAMP(3),

    CONSTRAINT "account_linking_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "linked_providers_userId_idx" ON "linked_providers"("userId");

-- CreateIndex
CREATE INDEX "linked_providers_email_idx" ON "linked_providers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "linked_providers_provider_providerAccountId_key" ON "linked_providers"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "linked_providers_userId_provider_key" ON "linked_providers"("userId", "provider");

-- CreateIndex
CREATE UNIQUE INDEX "account_linking_requests_verificationToken_key" ON "account_linking_requests"("verificationToken");

-- CreateIndex
CREATE INDEX "account_linking_requests_userId_idx" ON "account_linking_requests"("userId");

-- CreateIndex
CREATE INDEX "account_linking_requests_email_idx" ON "account_linking_requests"("email");

-- CreateIndex
CREATE INDEX "account_linking_requests_status_idx" ON "account_linking_requests"("status");

-- CreateIndex
CREATE INDEX "account_linking_requests_verificationToken_idx" ON "account_linking_requests"("verificationToken");

-- CreateIndex
CREATE INDEX "account_linking_requests_expiresAt_idx" ON "account_linking_requests"("expiresAt");

-- CreateIndex
CREATE INDEX "account_linking_requests_ipAddress_createdAt_idx" ON "account_linking_requests"("ipAddress", "createdAt");

-- CreateIndex
CREATE INDEX "account_linking_requests_email_createdAt_idx" ON "account_linking_requests"("email", "createdAt");

-- AddForeignKey
ALTER TABLE "linked_providers" ADD CONSTRAINT "linked_providers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_linking_requests" ADD CONSTRAINT "account_linking_requests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
