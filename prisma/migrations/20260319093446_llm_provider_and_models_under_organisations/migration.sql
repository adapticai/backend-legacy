-- CreateEnum
CREATE TYPE "LlmProvider" AS ENUM ('OPENAI', 'ANTHROPIC', 'DEEPSEEK', 'KIMI', 'QWEN', 'XAI', 'GEMINI');

-- AlterTable
ALTER TABLE "funds" ADD COLUMN     "llmOverrides" JSONB;

-- AlterTable
ALTER TABLE "organizations" ADD COLUMN     "llmDefaults" JSONB;
