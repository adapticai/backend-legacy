# Allocation Categories Expansion - Migration Summary

## Overview
This migration expands the allocation model to support a more comprehensive set of asset categories and adds auto-allocation functionality to AlpacaAccount.

## Changes Made

### 1. Schema Updates (`prisma/schema.prisma`)

#### Allocation Model - New Fields
- **equities** (Float, default: 70): Replaces the legacy "stocks" field with more precise terminology
- **optionsContracts** (Float, default: 5): Replaces the legacy "options" field
- **futures** (Float, default: 0): New field for futures contracts
- **forex** (Float, default: 0): New field for FOREX trading
- **crypto** (Float, default: 15): Updated default from 10 to 15
- **etfs** (Float, default: 10): Unchanged

#### Allocation Model - Legacy Fields (Deprecated)
- **stocks** (Float?, default: 70): Now nullable, deprecated in favor of "equities"
- **options** (Float?, default: 10): Now nullable, deprecated in favor of "optionsContracts"

#### AlpacaAccount Model - New Field
- **autoAllocation** (Boolean, default: true): Controls whether the system automatically determines allocation percentages

### 2. Database Migration
**Migration Name:** `20251130014038_expand_allocation_categories_and_add_auto_allocation`

**Migration Steps:**
1. Adds new allocation columns (equities, futures, forex, optionsContracts)
2. Migrates existing data from legacy fields (stocks → equities, options → optionsContracts)
3. Makes legacy fields nullable for backward compatibility
4. Updates crypto default value to 15%
5. Adds autoAllocation field to alpaca_accounts table

**Backward Compatibility:**
- Legacy fields (stocks, options) are preserved but made nullable
- Existing data is automatically migrated to new fields
- Applications can continue using legacy fields during transition period

### 3. Generated TypeGraphQL Types
All TypeGraphQL types, inputs, and resolvers have been regenerated to include:
- New allocation fields in Allocation model
- autoAllocation field in AlpacaAccount model
- Updated input types for mutations
- Updated scalar field enums

## New Allocation Structure

```typescript
interface Allocation {
  id: string;
  
  // New fields
  equities: number;        // Default: 70%
  optionsContracts: number; // Default: 5%
  futures: number;         // Default: 0%
  etfs: number;            // Default: 10%
  forex: number;           // Default: 0%
  crypto: number;          // Default: 15%
  
  // Legacy fields (deprecated)
  stocks?: number | null;  // Default: 70% (use equities instead)
  options?: number | null; // Default: 10% (use optionsContracts instead)
  
  alpacaAccountId: string;
  alpacaAccount: AlpacaAccount;
  createdAt: Date;
  updatedAt: Date;
}
```

## Migration Validation

### Total Allocation Check
Applications should validate that allocations sum to 100%:
```typescript
const total = equities + optionsContracts + futures + etfs + forex + crypto;
if (total !== 100) {
  throw new Error(`Allocation must sum to 100%, got ${total}%`);
}
```

### Recommended Default Distribution
- Equities: 70%
- Crypto: 15%
- ETFs: 10%
- Options Contracts: 5%
- Futures: 0%
- FOREX: 0%
**Total: 100%**

## Next Steps for Application Code

### 1. Update Allocation Queries
Transition from using legacy fields to new fields:
```typescript
// Old
const allocation = {
  stocks: 70,
  options: 10,
  etfs: 10,
  crypto: 10
};

// New
const allocation = {
  equities: 70,
  optionsContracts: 5,
  futures: 0,
  etfs: 10,
  forex: 0,
  crypto: 15
};
```

### 2. Implement Allocation Validation
Add validation to ensure allocations sum to 100%:
- Client-side validation in forms
- Server-side validation in GraphQL mutations
- Database-level constraints if needed

### 3. Update Auto-Allocation Logic
Implement or update the auto-allocation algorithm that uses the `autoAllocation` flag on AlpacaAccount.

### 4. Deprecation Timeline
- **Phase 1 (Current)**: Both legacy and new fields available
- **Phase 2 (Future)**: Migrate all code to use new fields
- **Phase 3 (Future)**: Remove legacy fields from schema

## Files Modified

### Schema
- `/Users/eli/adapticai/backend-legacy/prisma/schema.prisma`

### Migration
- `/Users/eli/adapticai/backend-legacy/prisma/migrations/20251130014038_expand_allocation_categories_and_add_auto_allocation/migration.sql`

### Generated Files (Auto-generated)
- `/Users/eli/adapticai/backend-legacy/src/generated/typegraphql-prisma/models/Allocation.ts`
- `/Users/eli/adapticai/backend-legacy/src/generated/typegraphql-prisma/models/AlpacaAccount.ts`
- `/Users/eli/adapticai/backend-legacy/src/generated/typegraphql-prisma/enums/AllocationScalarFieldEnum.ts`
- All related input/output types in `/Users/eli/adapticai/backend-legacy/src/generated/typegraphql-prisma/resolvers/`

## Testing Recommendations

1. **Migration Testing**: Test the migration on a copy of production data to ensure data integrity
2. **Validation Testing**: Verify that allocation percentages sum to 100%
3. **Backward Compatibility**: Ensure existing code using legacy fields continues to work
4. **GraphQL API**: Test all allocation-related queries and mutations
5. **Auto-Allocation**: Test the autoAllocation flag behavior

## Notes

- The migration preserves all existing data by copying from legacy fields
- The schema is valid and has been validated with `npx prisma validate`
- TypeGraphQL types have been successfully regenerated
- The migration has been created but NOT yet applied to the database
- To apply the migration, run: `npx prisma migrate dev` or `npx prisma migrate deploy`
