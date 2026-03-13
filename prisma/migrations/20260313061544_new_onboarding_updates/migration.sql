-- AlterTable
ALTER TABLE "users" ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "onboardingComplete" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "passwordHash" TEXT,
ADD COLUMN     "signupCategory" TEXT;
