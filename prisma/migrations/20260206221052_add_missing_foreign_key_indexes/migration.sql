-- CreateIndex
CREATE INDEX "users_customerId_idx" ON "users"("customerId");

-- CreateIndex
CREATE INDEX "alpaca_accounts_userId_idx" ON "alpaca_accounts"("userId");

-- CreateIndex
CREATE INDEX "allocations_alpacaAccountId_idx" ON "allocations"("alpacaAccountId");

-- CreateIndex
CREATE INDEX "trades_alpacaAccountId_idx" ON "trades"("alpacaAccountId");

-- CreateIndex
CREATE INDEX "trades_alpacaAccountId_status_idx" ON "trades"("alpacaAccountId", "status");

-- CreateIndex
CREATE INDEX "trades_symbol_idx" ON "trades"("symbol");

-- CreateIndex
CREATE INDEX "actions_tradeId_idx" ON "actions"("tradeId");

-- CreateIndex
CREATE INDEX "actions_tradeId_status_idx" ON "actions"("tradeId", "status");

-- CreateIndex
CREATE INDEX "alerts_alpacaAccountId_idx" ON "alerts"("alpacaAccountId");

-- CreateIndex
CREATE INDEX "alerts_alpacaAccountId_status_idx" ON "alerts"("alpacaAccountId", "status");

-- CreateIndex
CREATE INDEX "alerts_type_idx" ON "alerts"("type");

-- CreateIndex
CREATE INDEX "alerts_category_idx" ON "alerts"("category");

-- CreateIndex
CREATE INDEX "news_createdAt_idx" ON "news"("createdAt");

-- CreateIndex
CREATE INDEX "NewsArticleAssetSentiment_newsArticleId_idx" ON "NewsArticleAssetSentiment"("newsArticleId");

-- CreateIndex
CREATE INDEX "NewsArticleAssetSentiment_assetId_idx" ON "NewsArticleAssetSentiment"("assetId");

-- CreateIndex
CREATE INDEX "model_version_artifacts_modelVersionId_idx" ON "model_version_artifacts"("modelVersionId");

-- CreateIndex
CREATE INDEX "model_version_artifacts_modelArtifactId_idx" ON "model_version_artifacts"("modelArtifactId");

-- CreateIndex
CREATE INDEX "model_versions_parentVersionId_idx" ON "model_versions"("parentVersionId");

-- CreateIndex
CREATE INDEX "waitlist_entries_reviewedById_idx" ON "waitlist_entries"("reviewedById");

-- CreateIndex
CREATE INDEX "waitlist_entries_status_idx" ON "waitlist_entries"("status");

-- CreateIndex
CREATE INDEX "invite_tokens_waitlistEntryId_idx" ON "invite_tokens"("waitlistEntryId");
