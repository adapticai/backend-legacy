# Multi-Tenant Architecture Requirements

## Overview

This document outlines the requirements and implementation strategy for transforming `@adaptic/backend` from a single-tenant to a multi-tenant architecture. It covers tenant isolation, context propagation, authentication, and data access patterns.

---

## 1. Current State Assessment

### 1.1 Current Architecture

**Single-Tenant Design:**
- No tenant context in current implementation
- All users share the same data space
- No tenant-level isolation
- Global authentication without tenant scoping
- Direct database access without tenant filtering

### 1.2 Current Data Model Issues

**Problems:**
1. **No Tenant ID:** Prisma models lack `tenantId` field
2. **Shared Resources:** All resources are globally accessible
3. **No Tenant Context:** No way to identify which tenant a request belongs to
4. **No RLS:** No Row-Level Security in database
5. **No Tenant Scoping:** Queries don't filter by tenant

### 1.3 Current Authentication Issues

**Problems:**
1. **User-Only Auth:** Authentication is per-user, not per-tenant
2. **No Tenant in Token:** JWT tokens don't include tenant information
3. **No Tenant Selection:** No mechanism for users to switch tenants
4. **No Tenant Validation:** No validation that user belongs to tenant

---

## 2. Multi-Tenant Requirements

### 2.1 Functional Requirements

#### FR-1: Tenant Isolation
- **Requirement:** Complete data isolation between tenants
- **Priority:** Critical
- **Acceptance Criteria:**
  - Tenant A cannot access Tenant B's data
  - Queries automatically filter by tenant
  - Cross-tenant data leaks are impossible

#### FR-2: Tenant Context
- **Requirement:** All operations must have tenant context
- **Priority:** Critical
- **Acceptance Criteria:**
  - Tenant ID is available in all request contexts
  - Tenant ID is validated on every request
  - Missing tenant context results in error

#### FR-3: Tenant-Aware Authentication
- **Requirement:** Users authenticate within tenant context
- **Priority:** Critical
- **Acceptance Criteria:**
  - JWT includes tenant ID
  - Users can belong to multiple tenants
  - Tenant selection mechanism exists

#### FR-4: Tenant Management
- **Requirement:** Ability to create and manage tenants
- **Priority:** High
- **Acceptance Criteria:**
  - Admin can create tenants
  - Tenants can be activated/deactivated
  - Tenant metadata is managed

#### FR-5: Resource Quotas
- **Requirement:** Per-tenant resource limits
- **Priority:** Medium
- **Acceptance Criteria:**
  - Configurable limits per tenant
  - Quota enforcement at API level
  - Quota exceeded error handling

#### FR-6: Tenant Billing
- **Requirement:** Per-tenant billing and usage tracking
- **Priority:** High
- **Acceptance Criteria:**
  - Usage tracked per tenant
  - Billing calculated per tenant
  - Multiple billing plans supported

### 2.2 Non-Functional Requirements

#### NFR-1: Performance
- **Requirement:** No significant performance degradation
- **Priority:** High
- **Acceptance Criteria:**
  - Query performance within 10% of single-tenant
  - Index optimization for tenant queries
  - Connection pooling per tenant

#### NFR-2: Scalability
- **Requirement:** Support for 1000+ tenants
- **Priority:** High
- **Acceptance Criteria:**
  - Linear scaling with tenant count
  - Efficient tenant lookup
  - Minimal memory overhead per tenant

#### NFR-3: Security
- **Requirement:** Complete tenant isolation
- **Priority:** Critical
- **Acceptance Criteria:**
  - No data leaks between tenants
  - Tenant ID validation on all operations
  - Audit logging of cross-tenant access attempts

#### NFR-4: Maintainability
- **Requirement:** Minimal code duplication
- **Priority:** Medium
- **Acceptance Criteria:**
  - Tenant logic abstracted into middleware
  - Consistent patterns across codebase
  - Easy to add new tenant-aware models

---

## 3. Multi-Tenant Design

### 3.1 Tenant Model Approach

**Selected Approach:** Shared Database, Shared Schema with Tenant ID

**Rationale:**
- Simpler to manage than separate databases
- Cost-effective for high tenant count
- Good performance with proper indexing
- Easy to implement cross-tenant features (if needed)

**Alternative Approaches Considered:**
1. **Separate Database per Tenant** - Too complex for 1000+ tenants
2. **Separate Schema per Tenant** - Better isolation but higher complexity
3. **Shared Everything** - Best balance of simplicity and isolation

### 3.2 Database Schema Changes

#### New Tenant Model

```prisma
model Tenant {
  id        String   @id @default(cuid())
  name      String
  slug      String   @unique
  domain    String?  @unique
  status    TenantStatus @default(ACTIVE)
  plan      String   @default("FREE")

  // Billing
  stripeCustomerId       String?
  stripeSubscriptionId   String?
  stripePriceId          String?
  stripeCurrentPeriodEnd DateTime?

  // Limits
  maxUsers     Int @default(5)
  maxStorage   Int @default(1000) // MB
  maxApiCalls  Int @default(10000) // per month

  // Metadata
  metadata  Json?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  users     TenantUser[]
  settings  TenantSettings?
}

model TenantUser {
  id       String @id @default(cuid())
  tenantId String
  userId   String
  role     TenantRole @default(MEMBER)

  tenant   Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)
  user     User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([tenantId, userId])
  @@index([userId])
  @@index([tenantId])
}

model TenantSettings {
  id       String @id @default(cuid())
  tenantId String @unique

  // Feature flags
  features Json @default("{}")

  // Configuration
  config   Json @default("{}")

  tenant   Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum TenantStatus {
  ACTIVE
  SUSPENDED
  INACTIVE
  TRIAL
}

enum TenantRole {
  OWNER
  ADMIN
  MEMBER
  VIEWER
}
```

#### Adding tenantId to All Models

**Pattern:**
```prisma
model User {
  id        String   @id @default(cuid())
  tenantId  String   // NEW FIELD
  email     String
  name      String?

  // ... existing fields

  tenant    Tenant   @relation(fields: [tenantId], references: [id], onDelete: Cascade)

  @@unique([tenantId, email]) // Email unique per tenant
  @@index([tenantId])
}

model Account {
  id        String   @id @default(cuid())
  tenantId  String   // NEW FIELD
  userId    String

  // ... existing fields

  tenant    Tenant   @relation(fields: [tenantId], references: [id], onDelete: Cascade)

  @@index([tenantId])
  @@index([userId, tenantId])
}

// Apply this pattern to all 42 models
```

#### Database Indexes

**Required Indexes:**
```sql
-- All tables need tenantId index
CREATE INDEX idx_users_tenant_id ON "User"("tenantId");
CREATE INDEX idx_accounts_tenant_id ON "Account"("tenantId");
CREATE INDEX idx_trades_tenant_id ON "Trade"("tenantId");
-- ... for all tables

-- Composite indexes for common queries
CREATE INDEX idx_users_tenant_email ON "User"("tenantId", "email");
CREATE INDEX idx_accounts_tenant_user ON "Account"("tenantId", "userId");
CREATE INDEX idx_trades_tenant_created ON "Trade"("tenantId", "createdAt" DESC);

-- Unique constraints per tenant
CREATE UNIQUE INDEX idx_users_tenant_email_unique ON "User"("tenantId", "email");
```

### 3.3 Tenant Context Implementation

#### Tenant Context Type

```typescript
// src/tenant/context.ts
export interface TenantContext {
  tenantId: string;
  tenant?: Tenant;
  userId?: string;
  role?: TenantRole;
}

export interface RequestWithTenant extends Request {
  tenantContext: TenantContext;
}
```

#### Tenant Context Middleware

```typescript
// src/tenant/middleware.ts
import { Request, Response, NextFunction } from 'express';
import { getToken } from '../auth/getToken';
import prisma from '../server/prismaClient';

export async function tenantContextMiddleware(
  req: RequestWithTenant,
  res: Response,
  next: NextFunction
) {
  try {
    // Extract tenant from request
    const tenantId = extractTenantId(req);

    if (!tenantId) {
      return res.status(400).json({ error: 'Missing tenant context' });
    }

    // Validate tenant exists and is active
    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId }
    });

    if (!tenant) {
      return res.status(404).json({ error: 'Tenant not found' });
    }

    if (tenant.status !== 'ACTIVE') {
      return res.status(403).json({ error: 'Tenant is not active' });
    }

    // Get user info from token
    const token = await getToken({ req });
    const userId = token?.sub;

    // Verify user belongs to tenant
    if (userId) {
      const tenantUser = await prisma.tenantUser.findUnique({
        where: {
          tenantId_userId: {
            tenantId,
            userId
          }
        }
      });

      if (!tenantUser) {
        return res.status(403).json({ error: 'User does not belong to tenant' });
      }

      // Set tenant context
      req.tenantContext = {
        tenantId,
        tenant,
        userId,
        role: tenantUser.role
      };
    } else {
      // Public access
      req.tenantContext = {
        tenantId,
        tenant
      };
    }

    next();
  } catch (error) {
    console.error('Tenant context error:', error);
    res.status(500).json({ error: 'Failed to establish tenant context' });
  }
}

function extractTenantId(req: Request): string | null {
  // Option 1: From subdomain (tenant.adaptic.ai)
  const subdomain = req.hostname.split('.')[0];
  if (subdomain && subdomain !== 'www' && subdomain !== 'api') {
    // Lookup tenant by subdomain
    // Return tenant ID
  }

  // Option 2: From header (X-Tenant-ID)
  const headerTenant = req.headers['x-tenant-id'];
  if (headerTenant) {
    return headerTenant as string;
  }

  // Option 3: From JWT token
  // (set during authentication)

  // Option 4: From query param (for testing)
  const queryTenant = req.query.tenantId;
  if (queryTenant) {
    return queryTenant as string;
  }

  return null;
}
```

### 3.4 Tenant-Aware Prisma Client

#### Prisma Middleware

```typescript
// src/tenant/prisma-middleware.ts
import { Prisma } from '@prisma/client';

export function createTenantMiddleware(tenantId: string): Prisma.Middleware {
  return async (params, next) => {
    // Models that don't need tenant filtering
    const exemptModels = ['Tenant', 'TenantUser', 'TenantSettings'];

    if (exemptModels.includes(params.model || '')) {
      return next(params);
    }

    // Add tenantId to all queries
    if (params.action === 'findUnique' || params.action === 'findFirst') {
      params.args.where = {
        ...params.args.where,
        tenantId
      };
    }

    if (params.action === 'findMany') {
      if (!params.args) {
        params.args = {};
      }
      params.args.where = {
        ...params.args.where,
        tenantId
      };
    }

    // Add tenantId to all creates
    if (params.action === 'create') {
      params.args.data = {
        ...params.args.data,
        tenantId
      };
    }

    if (params.action === 'createMany') {
      if (Array.isArray(params.args.data)) {
        params.args.data = params.args.data.map((item: any) => ({
          ...item,
          tenantId
        }));
      } else {
        params.args.data = {
          ...params.args.data,
          tenantId
        };
      }
    }

    // Add tenantId to all updates
    if (params.action === 'update' || params.action === 'updateMany') {
      params.args.where = {
        ...params.args.where,
        tenantId
      };
    }

    // Add tenantId to all deletes
    if (params.action === 'delete' || params.action === 'deleteMany') {
      params.args.where = {
        ...params.args.where,
        tenantId
      };
    }

    return next(params);
  };
}
```

#### Tenant-Scoped Prisma Client

```typescript
// src/tenant/prisma-client.ts
import { PrismaClient } from '@prisma/client';
import { createTenantMiddleware } from './prisma-middleware';

const globalPrisma = new PrismaClient();

export function getTenantPrisma(tenantId: string): PrismaClient {
  // Create a new client instance with tenant middleware
  const tenantPrisma = new PrismaClient();
  tenantPrisma.$use(createTenantMiddleware(tenantId));
  return tenantPrisma;
}

// For admin operations (bypass tenant filtering)
export function getAdminPrisma(): PrismaClient {
  return globalPrisma;
}
```

### 3.5 Tenant-Aware CRUD Operations

#### Updated Entity CRUD Pattern

```typescript
// src/types/entities/User.ts (updated)
import { RequestWithTenant } from '../../tenant/context';
import { getTenantPrisma } from '../../tenant/prisma-client';

export class User {
  /**
   * Find one user (tenant-scoped)
   */
  static async findOne(
    args: { where: any; include?: any },
    tenantContext: TenantContext
  ) {
    const prisma = getTenantPrisma(tenantContext.tenantId);

    // Prisma middleware will automatically add tenantId
    return prisma.user.findUnique({
      where: args.where,
      include: args.include
    });
  }

  /**
   * Find many users (tenant-scoped)
   */
  static async findMany(
    args: { where?: any; include?: any; orderBy?: any; take?: number; skip?: number } = {},
    tenantContext: TenantContext
  ) {
    const prisma = getTenantPrisma(tenantContext.tenantId);

    return prisma.user.findMany(args);
  }

  /**
   * Create user (tenant-scoped)
   */
  static async create(
    args: { data: any; include?: any },
    tenantContext: TenantContext
  ) {
    const prisma = getTenantPrisma(tenantContext.tenantId);

    // Tenant ID will be added by middleware
    return prisma.user.create({
      data: args.data,
      include: args.include
    });
  }

  // ... other CRUD operations
}
```

### 3.6 Tenant-Aware GraphQL Context

#### GraphQL Context Type

```typescript
// src/server/context.ts
import { PrismaClient } from '@prisma/client';
import { TenantContext } from '../tenant/context';
import { getTenantPrisma } from '../tenant/prisma-client';

export interface GraphQLContext {
  prisma: PrismaClient;
  tenantContext: TenantContext;
  userId?: string;
}

export async function createGraphQLContext(req: RequestWithTenant): Promise<GraphQLContext> {
  const tenantContext = req.tenantContext;

  if (!tenantContext) {
    throw new Error('Missing tenant context');
  }

  return {
    prisma: getTenantPrisma(tenantContext.tenantId),
    tenantContext,
    userId: tenantContext.userId
  };
}
```

#### Updated Apollo Server Setup

```typescript
// src/server/server.ts (updated)
import { tenantContextMiddleware } from '../tenant/middleware';
import { createGraphQLContext } from './context';

const app = express();

// Apply tenant middleware BEFORE GraphQL
app.use(tenantContextMiddleware);

const server = new ApolloServer({
  schema,
  context: ({ req }) => createGraphQLContext(req),
  // ... other options
});
```

### 3.7 Authentication Changes

#### Updated JWT Token Structure

```typescript
// src/auth/types.ts
export interface JWTPayload {
  sub: string;        // User ID
  email: string;
  tenantId: string;   // NEW: Current tenant
  tenants: string[];  // NEW: All tenants user belongs to
  role: string;       // Role within current tenant
  iat: number;
  exp: number;
}
```

#### Tenant Selection Flow

```typescript
// src/auth/tenant-selection.ts
export async function switchTenant(
  userId: string,
  targetTenantId: string
): Promise<string> {
  // Verify user belongs to target tenant
  const tenantUser = await prisma.tenantUser.findUnique({
    where: {
      tenantId_userId: {
        tenantId: targetTenantId,
        userId
      }
    }
  });

  if (!tenantUser) {
    throw new Error('User does not belong to tenant');
  }

  // Get user details
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      tenantUsers: true
    }
  });

  if (!user) {
    throw new Error('User not found');
  }

  // Create new JWT with target tenant
  const token = await encode({
    token: {
      sub: user.id,
      email: user.email,
      tenantId: targetTenantId,
      tenants: user.tenantUsers.map(tu => tu.tenantId),
      role: tenantUser.role
    },
    secret: process.env.JWT_SECRET || 'your-secret',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  });

  return token;
}
```

---

## 4. Migration Strategy

### 4.1 Data Migration

#### Phase 1: Add Tenant Models
```sql
-- Create Tenant table
CREATE TABLE "Tenant" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "slug" TEXT UNIQUE NOT NULL,
  "status" TEXT DEFAULT 'ACTIVE',
  -- ... other fields
);

-- Create TenantUser junction table
CREATE TABLE "TenantUser" (
  "id" TEXT PRIMARY KEY,
  "tenantId" TEXT NOT NULL REFERENCES "Tenant"("id") ON DELETE CASCADE,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "role" TEXT DEFAULT 'MEMBER',
  UNIQUE("tenantId", "userId")
);
```

#### Phase 2: Create Default Tenant
```sql
-- Create default tenant for existing data
INSERT INTO "Tenant" ("id", "name", "slug", "status")
VALUES ('default-tenant', 'Default Tenant', 'default', 'ACTIVE');
```

#### Phase 3: Add tenantId to Existing Models
```sql
-- Add tenantId column to all tables
ALTER TABLE "User" ADD COLUMN "tenantId" TEXT;
ALTER TABLE "Account" ADD COLUMN "tenantId" TEXT;
ALTER TABLE "Trade" ADD COLUMN "tenantId" TEXT;
-- ... for all 42 models

-- Set all existing records to default tenant
UPDATE "User" SET "tenantId" = 'default-tenant';
UPDATE "Account" SET "tenantId" = 'default-tenant';
UPDATE "Trade" SET "tenantId" = 'default-tenant';
-- ... for all 42 models

-- Make tenantId NOT NULL
ALTER TABLE "User" ALTER COLUMN "tenantId" SET NOT NULL;
ALTER TABLE "Account" ALTER COLUMN "tenantId" SET NOT NULL;
ALTER TABLE "Trade" ALTER COLUMN "tenantId" SET NOT NULL;
-- ... for all 42 models

-- Add foreign keys
ALTER TABLE "User" ADD CONSTRAINT "User_tenantId_fkey"
  FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE;
-- ... for all 42 models

-- Create indexes
CREATE INDEX "User_tenantId_idx" ON "User"("tenantId");
CREATE INDEX "Account_tenantId_idx" ON "Account"("tenantId");
-- ... for all 42 models
```

#### Phase 4: Migrate User-Tenant Relationships
```sql
-- Create TenantUser records for all existing users
INSERT INTO "TenantUser" ("id", "tenantId", "userId", "role")
SELECT
  gen_random_uuid(),
  'default-tenant',
  "id",
  CASE
    WHEN "role" = 'OWNER' THEN 'OWNER'
    WHEN "role" = 'ADMIN' THEN 'ADMIN'
    ELSE 'MEMBER'
  END
FROM "User";
```

### 4.2 Code Migration

#### Step 1: Update Prisma Schema
Add tenant models and tenantId to all existing models

#### Step 2: Generate Prisma Client
```bash
npx prisma generate
```

#### Step 3: Implement Tenant Middleware
Create tenant context middleware and Prisma middleware

#### Step 4: Update CRUD Operations
Update all entity CRUD operations to accept tenantContext

#### Step 5: Update GraphQL Resolvers
Update all resolvers to use tenant-scoped Prisma client

#### Step 6: Update Authentication
Add tenant information to JWT tokens

### 4.3 Testing Strategy

#### Unit Tests
- Test tenant middleware
- Test Prisma middleware
- Test CRUD operations with different tenants
- Test authentication with tenant context

#### Integration Tests
- Test complete request flow with tenant context
- Test cross-tenant access prevention
- Test tenant switching
- Test multi-tenant user access

#### Load Tests
- Test performance with 100+ tenants
- Test concurrent access from multiple tenants
- Test database connection pooling

---

## 5. Security Considerations

### 5.1 Tenant Isolation

**Requirements:**
1. All queries must filter by tenantId
2. Prisma middleware must be active for all operations
3. Direct database access must be prohibited
4. Admin operations must use separate client

### 5.2 Access Control

**Requirements:**
1. User must belong to tenant to access data
2. Tenant status must be ACTIVE
3. JWT must include valid tenant ID
4. Role-based access within tenant

### 5.3 Audit Logging

**Requirements:**
1. Log all cross-tenant access attempts
2. Log tenant switching events
3. Log admin operations
4. Log failed authentication attempts

---

## 6. Performance Optimization

### 6.1 Database Indexes

**Critical Indexes:**
```sql
-- Tenant lookup
CREATE INDEX idx_tenant_slug ON "Tenant"("slug");
CREATE INDEX idx_tenant_domain ON "Tenant"("domain");

-- Tenant-scoped queries
CREATE INDEX idx_user_tenant_email ON "User"("tenantId", "email");
CREATE INDEX idx_account_tenant_user ON "Account"("tenantId", "userId");
CREATE INDEX idx_trade_tenant_created ON "Trade"("tenantId", "createdAt" DESC);

-- TenantUser lookups
CREATE INDEX idx_tenantuser_user ON "TenantUser"("userId");
CREATE INDEX idx_tenantuser_tenant ON "TenantUser"("tenantId");
```

### 6.2 Caching

**Cache Strategy:**
1. Cache tenant lookups (by ID, slug, domain)
2. Cache tenant user memberships
3. Cache tenant settings
4. Invalidate on tenant/user changes

### 6.3 Connection Pooling

**Strategy:**
1. Shared connection pool across all tenants
2. Monitor connection usage per tenant
3. Implement connection limits per tenant if needed

---

## 7. Rollout Plan

### Phase 1: Development (Week 1-2)
- Implement tenant models
- Add tenant middleware
- Update CRUD operations
- Add tests

### Phase 2: Testing (Week 3)
- Unit tests
- Integration tests
- Performance tests
- Security audit

### Phase 3: Migration (Week 4)
- Run data migration
- Deploy to staging
- Verify data integrity
- Test with real data

### Phase 4: Production (Week 5)
- Deploy to production
- Monitor errors
- Monitor performance
- Gradual rollout

---

## 8. Monitoring & Metrics

### 8.1 Key Metrics

1. **Tenant Isolation:**
   - Cross-tenant access attempts (should be 0)
   - Failed tenant validations
   - Missing tenant context errors

2. **Performance:**
   - Query latency per tenant
   - Database connection usage
   - Memory usage per tenant

3. **Usage:**
   - Active tenants
   - API calls per tenant
   - Storage usage per tenant

### 8.2 Alerts

1. Cross-tenant access attempt
2. Tenant status change
3. Quota exceeded
4. Performance degradation

---

## Appendix A: Complete Migration Script

See `migrations/multi-tenant/` for complete migration scripts.

## Appendix B: Tenant API Examples

See `examples/multi-tenant/` for complete usage examples.

## Appendix C: Security Audit Report

Security audit report available separately.
