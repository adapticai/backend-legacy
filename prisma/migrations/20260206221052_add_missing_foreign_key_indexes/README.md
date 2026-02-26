# Migration: Add Missing Foreign Key Indexes

**Migration ID**: 20260206221052_add_missing_foreign_key_indexes
**Date**: February 6, 2026

## Summary

This migration adds missing database indexes for foreign key columns and common query patterns across 54 models in the Prisma schema. These indexes will significantly improve query performance for joins and lookups.

## Indexes Added

### Foreign Key Indexes

1. **User Model**
   - `@@index([customerId])` - For joining users with customers

2. **AlpacaAccount Model**
   - `@@index([userId])` - For looking up accounts by user

3. **Allocation Model**
   - `@@index([alpacaAccountId])` - For joining allocations with accounts

4. **Trade Model**
   - `@@index([alpacaAccountId])` - For looking up trades by account
   - `@@index([alpacaAccountId, status])` - Composite index for filtering trades by account and status
   - `@@index([symbol])` - For looking up trades by symbol

5. **Action Model**
   - `@@index([tradeId])` - For looking up actions by trade
   - `@@index([tradeId, status])` - Composite index for filtering actions by trade and status

6. **Alert Model**
   - `@@index([alpacaAccountId])` - For looking up alerts by account
   - `@@index([alpacaAccountId, status])` - Composite index for filtering alerts by account and status
   - `@@index([type])` - For filtering alerts by type
   - `@@index([category])` - For filtering alerts by category

7. **NewsArticle Model**
   - `@@index([createdAt])` - For sorting/filtering news by date

8. **NewsArticleAssetSentiment Model**
   - `@@index([newsArticleId])` - For joining sentiment with news articles
   - `@@index([assetId])` - For joining sentiment with assets

9. **ModelVersionArtifact Model**
   - `@@index([modelVersionId])` - For looking up artifacts by version
   - `@@index([modelArtifactId])` - For looking up versions by artifact

10. **ModelVersion Model**
    - `@@index([parentVersionId])` - For traversing version hierarchies

11. **WaitlistEntry Model**
    - `@@index([reviewedById])` - For looking up entries reviewed by a user
    - `@@index([status])` - For filtering entries by status

12. **InviteToken Model**
    - `@@index([waitlistEntryId])` - For joining tokens with waitlist entries

## Performance Impact

These indexes will improve:

- JOIN operations between related tables
- Lookups by foreign key values
- Filtered queries combining foreign keys with status fields
- Time-based queries on news articles
- Hierarchical queries on model versions

## Database Impact

- **Number of new indexes**: 23
- **Estimated storage increase**: Minimal (indexes on UUID and status fields)
- **Write performance**: Slight decrease due to index maintenance
- **Read performance**: Significant improvement for common query patterns

## Notes

- All indexes are on columns that are frequently used in WHERE clauses and JOIN conditions
- Composite indexes (e.g., `[alpacaAccountId, status]`) are included for common query patterns
- No changes to data types, constraints, or default values
- Migration is backward compatible
