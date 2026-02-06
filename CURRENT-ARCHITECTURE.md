# @adaptic/backend-legacy - Current Architecture

**Package:** @adaptic/backend-legacy v0.0.43
**Registry:** NPM (published)
**Language:** TypeScript (strict mode)
**Target:** ES2018

---

## Overview

backend-legacy is the core data layer and GraphQL API for the Adaptic platform. It provides the canonical type definitions, CRUD operations, and database access consumed by `@adaptic/engine`, `@adaptic/utils`, and other packages in the monorepo.

---

## Core Technology Stack

| Layer | Technology | Version |
|---|---|---|
| HTTP Server | Express | - |
| GraphQL | Apollo Server | 5 |
| Schema Generation | TypeGraphQL | 2.0.0-rc.2 |
| ORM | Prisma | 6.13.0 |
| Database | PostgreSQL | via Prisma Accelerate |
| Auth | JWT + Google OAuth | - |
| Subscriptions | graphql-ws | WebSocket transport |

---

## Database Schema

### Scale

- **54 Prisma models**
- **134 migrations** (healthy history, no squash needed)
- **50+ indexes**
- **13 cascading delete relations**
- **~15 unique constraints**

### Model Domains

| Domain | Models |
|---|---|
| Identity & Auth | User, Session, Authenticator, Account |
| Brokerage | AlpacaAccount |
| Portfolio | Allocation, Position, Trade, Order, Action |
| Assets | Asset |
| Market Data | NewsArticle, MarketSentiment |
| ML / Training | ML training data models |
| Institutional | Institutional sentiment models |
| Analytics | Analytics models |
| Options | OptionsPosition, OptionsContract, OptionsStrategy, GreeksSnapshot |

### Schema File

- `prisma/schema.prisma` - Single schema file containing all 54 models

---

## Code Generation Pipeline

This is the most architecturally significant aspect of backend-legacy. Five sequential generation steps produce the majority of the package's exported surface area.

### Step 1: Prisma Generate

```
prisma generate
```

Reads `prisma/schema.prisma` and produces TypeGraphQL-compatible models and resolvers.

**Output:** `src/generated/typegraphql-prisma/`

### Step 2: Fix Import Paths

```
fix-import-paths.cjs
```

Post-processes generated files to correct import paths for the package's module structure.

### Step 3: Generate Selection Sets

```
generateSelections.ts
```

Produces GraphQL field selection set files used by the Apollo Client to request exactly the fields needed for each model.

**Output:** `src/generated/selectionSets/` (57 files, one per model)

### Step 4: Generate CRUD Functions

```
generator.ts (generate:functions)
```

Produces typed CRUD function files for each model. Each model gets functions for: `create`, `get`, `getAll`, `findMany`, `update`, `delete`, `createMany`.

**Output:** 57 CRUD function files (one per model)

### Step 5: Generate Type Strings

```
generateStrings.ts
```

Produces string representations of each model's type structure, used to provide LLM context about the data schema.

**Output:** `src/generated/typeStrings/` (57 files, one per model)

### Pipeline Dependency Chain

```
schema.prisma
    |
    v
prisma generate --> typegraphql-prisma models/resolvers
    |
    v
fix-import-paths.cjs --> corrected imports
    |
    v
generateSelections.ts --> 57 selection set files
    |
    v
generator.ts --> 57 CRUD function files
    |
    v
generateStrings.ts --> 57 type string files
```

---

## Package Exports

The published package exposes the following to consumers (`@adaptic/engine`, `@adaptic/utils`, etc.):

### Types Namespace

All Prisma model types are exported under a `types` namespace. These are THE canonical type definitions for the entire monorepo.

### CRUD Functions (per model)

Accessed as `adaptic.<model>.<operation>()`:

```typescript
adaptic.user.create(data)
adaptic.user.get(id)
adaptic.user.getAll()
adaptic.user.findMany(where)
adaptic.user.update(id, data)
adaptic.user.delete(id)
adaptic.user.createMany(data)
adaptic.trade.get(id)
// ... 57 models x 7 operations
```

### Selection Sets

GraphQL field selection sets for each model, ensuring queries request the correct fields.

### Type Strings

String representations of model types for LLM context injection.

### Apollo Client Factory

Singleton Apollo Client with:
- Connection pooling
- Retry logic with exponential backoff
- Token validation
- Prisma Accelerate integration

### PrismaClient Singleton

Direct Prisma client access with Accelerate extension.

---

## Key Files

| File | Purpose |
|---|---|
| `src/server.ts` | Apollo GraphQL server setup with Express |
| `src/auth.ts` | JWT authentication middleware |
| `src/client.ts` | Apollo Client factory (singleton, retries, Prisma Accelerate) |
| `src/prismaClient.ts` | Prisma singleton with Accelerate extension |
| `prisma/schema.prisma` | Database schema (all 54 models) |
| `src/modules/` | Code generators (generateSelections, generator, generateStrings) |
| `fix-import-paths.cjs` | Post-generation import path correction |

---

## Authentication

- **JWT tokens** validated on every GraphQL request
- **Google OAuth** integration for user login
- **Token refresh** mechanism for session continuity
- **Custom token provider** support for programmatic access

---

## Current Issues (from Audit)

### CRITICAL - Security

| Issue | Location | Detail |
|---|---|---|
| Hardcoded test JWT token | server.ts (lines 176, 237), auth.ts (line 29), .env | Test JWT token is committed to source code |
| Default JWT secret fallback | Development mode | Falls back to `'development_secret_key_for_local_testing_only'` |
| .env may contain real credentials | .env | Environment file potentially committed with real secrets |
| No input validation | GraphQL resolvers | Mutations accept arbitrary input without validation |
| CORS unrestricted | server.ts | `cors()` called without origin configuration |
| No rate limiting | Express middleware | No protection against abuse or DoS |

### HIGH - Data Integrity

| Issue | Detail |
|---|---|
| updatedAt pattern incorrect | 8+ models use `@default(now())` instead of `@updatedAt` |
| Trade.timestamp is String? | Should be DateTime? for proper temporal operations |
| Allocation no sum validation | No constraint ensuring allocations sum to 100% |
| Missing foreign key indexes | Some FK columns lack indexes, causing slow joins |

### MEDIUM - Stability & Quality

| Issue | Detail |
|---|---|
| TypeGraphQL RC in production | Using 2.0.0-rc.2 (release candidate) |
| No test script | package.json has no test command; zero test coverage |
| Database restart uses exec() | Railway CLI invoked via exec() for DB restarts (fragile) |

---

## Deployment

- Hosted on Railway
- Prisma Accelerate for connection pooling and edge caching
- Environment variables managed via Railway dashboard
- No health check endpoint
- No structured logging (uses console.log)
