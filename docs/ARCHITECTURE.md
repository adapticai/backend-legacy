# Backend-Legacy Architecture

## System Overview

`@adaptic/backend-legacy` is the canonical data layer and code generation package for the Adaptic.ai platform. It serves three primary functions:

1. **Type Authority** -- Defines all 62 Prisma models and 63 enums that form the data contract for the entire monorepo
2. **Code Generation** -- Produces typed CRUD functions, GraphQL selection sets, and LLM type strings from the Prisma schema
3. **GraphQL API Server** -- Runs an Apollo Server 5 + Express 4 backend with WebSocket subscriptions

### Architecture Diagram

```
                    prisma/schema.prisma
                    (62 models, 63 enums)
                           |
                    prisma generate
                           |
           src/generated/typegraphql-prisma/
           (models, resolvers, enums, scalars)
                           |
                  fix-import-paths.cjs
                           |
            +------- ------+---------------+
            |              |               |
  generateSelections   generator.ts   generateStrings
            |              |               |
   src/generated/     src/*.ts         src/generated/
   selectionSets/   (62 CRUD files)    typeStrings/
   (62 files)       + index.ts         (62 files)
            |              |               |
            +--------------+---------------+
                           |
                     tsc (CJS + ESM)
                           |
                       dist/ + dist/server/
                           |
                NPM Package (@adaptic/backend-legacy)
                           |
            +--------------+---------------+
            |              |               |
       @adaptic/      @adaptic/      platform/
        engine          utils       (runtime only)
       (direct)       (direct)   (GraphQL/WebSocket)
```

## Technology Stack

| Layer             | Technology                        | Version               |
| ----------------- | --------------------------------- | --------------------- |
| HTTP Server       | Express                           | 4.21.x                |
| GraphQL Server    | Apollo Server                     | 5.x                   |
| Schema Generation | TypeGraphQL + typegraphql-prisma  | 2.0.0-rc.2 / 0.28.0   |
| ORM               | Prisma Client                     | 6.19.x                |
| Database          | PostgreSQL                        | via Prisma Accelerate |
| Auth              | JWT (jsonwebtoken) + Google OAuth | 9.x                   |
| Subscriptions     | graphql-ws over WebSocket         | 5.16.x                |
| TypeScript        |                                   | 5.9.x                 |
| Test Framework    | Vitest                            | 3.x                   |
| Linter            | ESLint (flat config)              | 9.x                   |

## Source Directory Structure

```
src/
  index.ts                  # Package entry point (exports types, enums, CRUD, Apollo Client)
  server.ts                 # Apollo Server + Express + WebSocket startup
  client.ts                 # Apollo Client factory (singleton, connection pool, retry)
  prismaClient.ts           # Prisma singleton with Accelerate extension
  health.ts                 # GET /health endpoint
  utils.ts                  # Shared utility functions (removeUndefinedProps, etc.)
  utils/
    index.ts                # Utils barrel export
    logger.ts               # Structured JSON logger
  config/
    jwtConfig.ts            # JWT secret management (production enforcement)
    tracing.ts              # OpenTelemetry tracing configuration
    metrics.ts              # Prometheus metrics (prom-client)
    persisted-queries.ts    # APQ LRU cache for Apollo Server
  middleware/
    auth.ts                 # JWT Bearer token authentication
    audit-logger.ts         # Apollo plugin for mutation audit logging
    input-validator.ts      # Input validation for GraphQL mutations
    graphql-validation-plugin.ts  # Schema-level GraphQL validation
    rate-limiter.ts         # Rate limiting (auth/unauth split)
    query-complexity.ts     # Query complexity + depth analysis
    soft-delete.ts          # Soft delete utilities (deletedAt field)
  plugins/
    query-depth-limiter.ts  # Configurable query depth limiting
    error-sanitizer.ts      # Strip internal details in production
    integration-example.ts  # Example plugin integration
  validators/
    allocation-validator.ts # Allocation sum validation
  resolvers/
    custom/
      index.ts              # Custom resolver exports
      OptionsGreeksHistoryCustomResolver.ts
      OptionsGreeksHistorySystemSummary.ts
  modules/                  # Code generation scripts (excluded from build)
    index.ts                # Orchestrates CRUD function generation
    generator.ts            # CRUD function code generator
    generateSelections.ts   # Selection set generator
    generateStrings.ts      # Type string generator
    parser.ts               # TypeGraphQL input type parser
    types.ts                # Generator type definitions
    utils.ts                # Generator utilities
  scripts/
    migrate-openai-model-enum.ts
    set-default-openai-model.ts
  tests/                    # Test files
    connection-pool.test.ts
    generator.test.ts
    graphql-validation-plugin.test.ts
    input-validator.test.ts
    parser.test.ts
    utils.test.ts
  generated/                # All generated code (gitignored from lint/build)
    typegraphql-prisma/     # Prisma-generated TypeGraphQL models, resolvers, enums
      models/               # 62 TypeScript model classes
      resolvers/            # Auto-generated CRUD resolvers
        inputs/             # GraphQL input types for mutations
        outputs/            # GraphQL output types
      enums/                # 63 TypeScript enum definitions
    selectionSets/          # 62 GraphQL field selection sets
    typeStrings/            # 62 type string representations for LLM context
  [A-Z]*.ts                 # 62 auto-generated CRUD model files (Trade.ts, User.ts, etc.)
```

## Code Generation Pipeline

### Step 1: Prisma Generate

```bash
npx prisma generate --no-engine
```

Reads `prisma/schema.prisma` and produces TypeGraphQL-compatible models and resolvers via the `typegraphql-prisma` generator.

**Input:** `prisma/schema.prisma` (62 models, 63 enums)
**Output:** `src/generated/typegraphql-prisma/` (models, resolvers, enums, scalars, helpers)

The generator configuration in the schema:

```prisma
generator typegraphql {
  provider               = "typegraphql-prisma"
  output                 = "../src/generated/typegraphql-prisma"
  emitTranspiledCode     = false
  contextPrismaKey       = "prisma"
  prismaClientImportPath = "../src/prismaClient.ts"
}
```

### Step 2: Fix Import Paths

```bash
node fix-import-paths.cjs
```

Post-processes generated TypeGraphQL files to correct import paths for the package's module structure. Handles path resolution between generated models and resolver output types.

### Step 3: Generate Selection Sets

```bash
ts-node src/modules/generateSelections.ts
```

Parses the Prisma schema via `@prisma/internals` DMMF (Data Model Meta Format), then generates GraphQL field selection set strings for each model. These selection sets control which fields are requested in Apollo Client queries.

**Key features:**

- Respects `GQL.SKIP`, `GQL.EXCLUDE`, `GQL.INCLUDE`, `GQL.MAX_DEPTH` meta tags in schema field documentation
- Prevents circular references via ancestor tracking
- LRU cache for repeated model traversals
- Maximum depth of 4 levels for nested relations

**Output:** `src/generated/selectionSets/` (62 files + index.ts)

### Step 4: Generate CRUD Functions

```bash
ts-node src/modules/index.ts
```

Produces typed CRUD function files for each Prisma model. Each model gets a file (e.g., `src/Trade.ts`) with the following operations:

| Operation             | GraphQL              | Description             |
| --------------------- | -------------------- | ----------------------- |
| `create(props)`       | `createOneTrade`     | Create a single record  |
| `createMany(props[])` | `createManyTrade`    | Create multiple records |
| `update(props)`       | `updateOneTrade`     | Update by ID            |
| `updateMany(props)`   | `updateManyTrade`    | Update matching records |
| `upsert(props)`       | `upsertOneTrade`     | Create or update        |
| `delete(props)`       | `deleteOneTrade`     | Delete by ID            |
| `deleteMany(props)`   | `deleteManyTrade`    | Delete matching records |
| `get(props)`          | `trade` (findUnique) | Get single record by ID |
| `getAll()`            | `trades` (findMany)  | Get all records         |
| `findMany(props)`     | `trades` (findMany)  | Find with where clause  |

The generator also rebuilds `src/index.ts`, which aggregates all model CRUD objects into the `adaptic` default export.

**Output:** 62 model CRUD files in `src/` + regenerated `src/index.ts`

### Step 5: Generate Type Strings

```bash
ts-node src/modules/generateStrings.ts
```

Produces TypeScript type string representations for each model, designed for LLM context injection. Includes enum declarations, field types, and documentation annotations.

**Key features:**

- Respects `TYPESTRING.SKIP` and `TYPESTRING.INCLUDE` meta tags
- Converts Prisma types to TypeScript types (String -> string, Int -> number, etc.)
- Resolves nested relations up to depth 5
- Prevents circular reference via ancestor tracking

**Output:** `src/generated/typeStrings/` (62 files + index.ts)

## Data Model Overview

### Models by Domain (62 total)

#### Identity and Authentication (9 models)

| Model                   | Description                                         |
| ----------------------- | --------------------------------------------------- |
| `User`                  | Platform user with roles, subscription, preferences |
| `Session`               | User sessions (NextAuth compatible)                 |
| `Account`               | OAuth account connections                           |
| `Authenticator`         | WebAuthn/FIDO2 authenticators                       |
| `LinkedProvider`        | Linked authentication providers per user            |
| `AccountLinkingRequest` | Cross-provider account linking workflow             |
| `VerificationToken`     | Email/token verification                            |
| `WaitlistEntry`         | Platform access waitlist                            |
| `InviteToken`           | Invitation tokens for new users                     |

#### Organization and Fund Management (6 models)

| Model            | Description                                    |
| ---------------- | ---------------------------------------------- |
| `Organization`   | ManCo / fund operator firm                     |
| `OrgMembership`  | User membership in organizations with roles    |
| `Fund`           | Investment fund within an organization         |
| `FundAssignment` | User assignment to funds with fund-level roles |
| `Investor`       | KYC-verified investor entity                   |
| `Investment`     | Investor capital allocation to a fund          |

#### Brokerage and Portfolio (5 models)

| Model              | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `BrokerageAccount` | Brokerage connection (Alpaca, IBKR, Coinbase)                      |
| `Allocation`       | Portfolio allocation percentages (equities, options, crypto, etc.) |
| `Trade`            | Individual trade records with entry/exit data                      |
| `Action`           | Trade execution actions (BUY, SELL, HEDGE, etc.)                   |
| `Customer`         | Customer/account holder records                                    |

#### Assets and Market Data (5 models)

| Model                       | Description                                        |
| --------------------------- | -------------------------------------------------- |
| `Asset`                     | Financial instruments (stocks, ETFs, crypto, etc.) |
| `NewsArticle`               | News articles with sentiment data                  |
| `NewsArticleAssetSentiment` | Per-asset sentiment scores for news articles       |
| `MarketSentiment`           | Overall market sentiment snapshots                 |
| `EconomicEvent`             | Economic calendar events with importance levels    |

#### Options Trading (6 models)

| Model                    | Description                              |
| ------------------------ | ---------------------------------------- |
| `OptionsContract`        | Options contract definitions (call/put)  |
| `OptionsPosition`        | Open options positions                   |
| `OptionsGreeksHistory`   | Historical Greeks snapshots per contract |
| `PortfolioGreeksHistory` | Portfolio-level Greeks aggregations      |
| `OptionsTradeExecution`  | Options trade execution records          |
| `ScheduledOptionOrder`   | Scheduled/pending option orders          |

#### ML and Model Management (6 models)

| Model                       | Description                                 |
| --------------------------- | ------------------------------------------- |
| `MLTrainingData`            | Training data for ML models                 |
| `ModelVersion`              | ML model version lifecycle tracking         |
| `ModelArtifact`             | Model artifact storage references           |
| `ModelVersionArtifact`      | Junction: model version to artifact mapping |
| `ABTest`                    | A/B test definitions and results            |
| `FeatureImportanceAnalysis` | Feature importance/SHAP analysis results    |

#### Signal Processing (5 models)

| Model                    | Description                                |
| ------------------------ | ------------------------------------------ |
| `SignalLineage`          | Signal provenance and transformation chain |
| `SignalGeneratorMetrics` | Signal generator performance metrics       |
| `SignalPriorityQueue`    | Priority-ordered signal processing queue   |
| `SignalOutcome`          | Signal outcome tracking (hit/miss/partial) |
| `TradeExecutionHistory`  | Detailed trade execution audit trail       |

#### Institutional Data (4 models)

| Model                           | Description                                |
| ------------------------------- | ------------------------------------------ |
| `InstitutionalHolding`          | Institutional investor holding disclosures |
| `InstitutionalFlowSignal`       | Institutional money flow signals           |
| `InstitutionalSentimentHistory` | Historical institutional sentiment         |
| `InstitutionalSentimentMetrics` | Aggregated institutional sentiment metrics |

#### Analytics and Configuration (4 models)

| Model                    | Description                          |
| ------------------------ | ------------------------------------ |
| `AnalyticsSnapshot`      | Point-in-time analytics snapshots    |
| `AnalyticsConfiguration` | Analytics pipeline configuration     |
| `Configuration`          | System configuration key-value store |
| `DashboardLayout`        | User dashboard layout preferences    |

#### Monitoring and Operations (7 models)

| Model                      | Description                                         |
| -------------------------- | --------------------------------------------------- |
| `Alert`                    | User-facing alerts (trade, portfolio, risk, system) |
| `SystemAlert`              | System-level operational alerts                     |
| `ConnectionHealthSnapshot` | Connection health monitoring snapshots              |
| `AuditLog`                 | Mutation audit log (who changed what, when)         |
| `TradeAuditEvent`          | Trade-specific audit events                         |
| `Event`                    | System events with categorization                   |
| `EventSnapshot`            | Point-in-time event snapshots                       |

#### Sync and Error Handling (5 models)

| Model                          | Description                            |
| ------------------------------ | -------------------------------------- |
| `SyncEvent`                    | Cross-system synchronization events    |
| `ConflictEvent`                | Data conflict detection and resolution |
| `DeadLetterMessage`            | Failed message processing queue        |
| `InstitutionalSentimentErrors` | Institutional data pipeline errors     |
| `InstitutionalSentimentAlerts` | Institutional data pipeline alerts     |

### Enums by Domain (63 total)

#### Trading Enums (11)

`TradeStrategy`, `TradeSignal`, `TradeStatus`, `ActionType`, `ActionStatus`, `TradeExitReason`, `TradeOutcomeQuality`, `MarketCondition`, `OptionType`, `OptionPositionStatus`, `OptionExecutionSide`

#### Market Data Enums (7)

`MarketSentimentLevel`, `MarketSentimentContext`, `MarketRegime`, `VolatilityLevel`, `VolumeLevel`, `AssetType`, `EventImportance`

#### Brokerage Enums (3)

`BrokerageAccountType`, `BrokerageProvider`, `SubscriptionPlan`

#### Alert and Monitoring Enums (7)

`AlertType`, `AlertStatus`, `AlertCategory`, `AlertSeverity`, `SystemAlertType`, `SystemAlertStatus`, `EventCategory`, `EventSeverity`

#### Organization and Fund Enums (9)

`UserRole`, `OrgBusinessType`, `RegulatoryStatus`, `OrgRole`, `FundRole`, `FundStatus`, `InvestorType`, `KycStatus`, `InvestmentStatus`

#### ML and Model Enums (8)

`ModelVersionStatus`, `DeploymentEnvironment`, `RolloutStrategy`, `ArtifactType`, `StorageProvider`, `ABTestStatus`, `ABTestRecommendation`, `FeatureImportanceAnalysisType`

#### Auth and Account Enums (4)

`AuthProvider`, `AccountLinkingStatus`, `WaitlistStatus`, `ScheduledOptionOrderStatus`

#### Signal Processing Enums (6)

`SignalGeneratorSource`, `SignalPriorityTier`, `SignalQueueStatus`, `SignalOutcomeType`, `SignalExecutionStatus`, `SignalDecisionType`

#### Sync and Operations Enums (4)

`SyncDirection`, `ConflictResolutionStrategy`, `DeadLetterStatus`, `DeadLetterSeverity`

#### Configuration Enums (2)

`ConfigType`, `OpenaiModel`

#### Audit Enums (1)

`AuditOperationType`

## Server Architecture

### Entry Point

`src/server.ts` starts the server with the following components:

```
startServer()
  |
  +-- buildSchema() (TypeGraphQL + custom resolvers)
  |
  +-- express() app
  |     |
  |     +-- authMiddleware on /api routes
  |     +-- createHealthRouter() on /health
  |     +-- Apollo expressMiddleware on /graphql
  |           |
  |           +-- CORS (environment-based origins)
  |           +-- bodyParser.json
  |           +-- JWT verification in context
  |           +-- AuditLog plugin
  |
  +-- WebSocketServer on /subscriptions
  |     |
  |     +-- graphql-ws useServer
  |     +-- JWT verification in context
  |
  +-- Process signal handlers (SIGINT, SIGTERM)
```

### Authentication Flow

1. Client sends `Authorization: Bearer <token>` header
2. Server checks token format:
   - Google OAuth token (starts with `ya29.`): passed through as `{ provider: 'google', token }`
   - Server-to-server token: validated against `SERVER_AUTH_TOKEN` env var
   - JWT: verified using `jwtSecret` from `src/config/jwtConfig.ts`
3. Decoded user attached to GraphQL context as `user`
4. Invalid/missing tokens: request continues but `authError` set in context

### Database Resilience

- Prisma singleton with global scope (survives hot reloads)
- Prisma Accelerate extension for connection pooling
- Configurable pool size per deployment tier (dev: 5, staging: 10, prod: 20)
- Pool exhaustion detection via Prisma event logging
- Auto-restart of Railway Postgres after 3 consecutive DB unreachable errors (5min cooldown)

## Security Layers

| Layer                 | Implementation                                     | Location                                      |
| --------------------- | -------------------------------------------------- | --------------------------------------------- |
| Authentication        | JWT + Google OAuth + Server tokens                 | `src/middleware/auth.ts`, `src/server.ts`     |
| JWT Secret Management | Production enforcement, min 32 chars               | `src/config/jwtConfig.ts`                     |
| CORS                  | Environment-based origin whitelist                 | `src/server.ts`                               |
| Rate Limiting         | Auth/unauth split, Retry-After headers             | `src/middleware/rate-limiter.ts`              |
| Input Validation      | Mutation input validation                          | `src/middleware/input-validator.ts`           |
| GraphQL Validation    | Schema-level operation validation                  | `src/middleware/graphql-validation-plugin.ts` |
| Query Depth Limiting  | Configurable max depth (default: 10)               | `src/plugins/query-depth-limiter.ts`          |
| Query Complexity      | Auth/unauth complexity limits                      | `src/middleware/query-complexity.ts`          |
| Error Sanitization    | Strip stack traces in production                   | `src/plugins/error-sanitizer.ts`              |
| Audit Logging         | All mutations logged to AuditLog model             | `src/middleware/audit-logger.ts`              |
| Soft Deletes          | deletedAt on User, BrokerageAccount, Trade, Action | `src/middleware/soft-delete.ts`               |
| Database Constraints  | CHECK constraints on prices, quantities, strings   | Prisma migration                              |
| Allocation Validation | Sum validation for allocation percentages          | `src/validators/allocation-validator.ts`      |

## Observability

| Capability            | Implementation                               | Status                                   |
| --------------------- | -------------------------------------------- | ---------------------------------------- |
| Structured Logging    | Custom JSON logger (`src/utils/logger.ts`)   | Active                                   |
| Health Check          | `GET /health` (DB, uptime, memory, version)  | Active                                   |
| OpenTelemetry Tracing | OTLP exporter, HTTP/Express/GraphQL spans    | Implemented, needs wiring into server.ts |
| Prometheus Metrics    | HTTP/GraphQL/DB metrics, `/metrics` endpoint | Implemented, needs wiring into server.ts |
| Persisted Queries     | APQ LRU cache (1000 entries)                 | Implemented, needs wiring into server.ts |

## Cross-Package Integration

### Type Contract

backend-legacy's Prisma models are THE canonical type definitions for the entire monorepo:

- `@adaptic/engine` imports types and uses CRUD functions via Apollo Client
- `@adaptic/utils` imports types for financial calculations
- `platform` consumes types at runtime via GraphQL queries/mutations and WebSocket events
- Selection sets ensure consistent field requests across all consumers

### Generated Code Drift Detection

The CI workflow (`.github/workflows/ci.yml`) includes a `verify-generated-code` job that:

1. Runs the full codegen pipeline
2. Checks `git diff --quiet src/generated/` for drift
3. Fails the PR if generated code doesn't match committed code

### Schema Validation

```bash
npm run validate:schema
```

Performs three checks:

1. `npx prisma validate` -- schema syntax
2. `npx prisma generate` -- code generation succeeds
3. `git diff --quiet src/generated/` -- drift detection

Exit codes: 0 (pass), 1 (validation failure), 2 (drift detected)

## Build Process

### Full Build Pipeline

```
npm run build
  |
  1. npm run clean          # rm -rf dist && rm -rf src/generated
  2. npm run generate       # prisma generate --no-engine
  3. npm run fix-imports    # node fix-import-paths.cjs
  4. npm run generate:selections  # ts-node src/modules/generateSelections.ts
  5. npm run generate:functions   # ts-node src/modules/index.ts
  6. npm run generate:strings     # ts-node src/modules/generateStrings.ts
  7. tsc                          # CJS build -> dist/ (ES2018, CommonJS)
  8. npm run build:server         # ESM build -> dist/server/ (ESNext)
```

### Dual Output

| Target | tsconfig               | Output         | Module            | Use Case                  |
| ------ | ---------------------- | -------------- | ----------------- | ------------------------- |
| CJS    | `tsconfig.json`        | `dist/`        | CommonJS (ES2018) | NPM package consumers     |
| ESM    | `tsconfig.server.json` | `dist/server/` | ESNext            | Server-side ESM consumers |

### NPM Package Contents

Published files (from `package.json` `files` field):

- `dist/**/*.js` -- compiled JavaScript
- `dist/**/*.d.ts` -- TypeScript declarations
- `dist/**/*.js.map` -- source maps

## Testing

### Framework

Vitest with v8 coverage provider. Configuration in `vitest.config.ts`:

- **Test pattern:** `src/**/*.test.ts`, `src/**/*.spec.ts`
- **Excludes:** `node_modules`, `dist`, `src/generated/**`, `src/modules/**`
- **Timeout:** 10s per test, 10s per hook
- **Coverage thresholds:** 60% lines, 50% functions, 40% branches, 60% statements

### Test Files

| Test File                                       | Tests | Domain                        |
| ----------------------------------------------- | ----- | ----------------------------- |
| `src/middleware/__tests__/audit-logger.test.ts` | 25    | Audit logging plugin          |
| `src/middleware/__tests__/soft-delete.test.ts`  | 21    | Soft delete utilities         |
| `src/tests/connection-pool.test.ts`             | 10    | Connection pool configuration |
| `src/tests/graphql-validation-plugin.test.ts`   | --    | GraphQL validation            |
| `src/tests/input-validator.test.ts`             | --    | Input validation              |
| `src/validators/allocation-validator.test.ts`   | --    | Allocation validation         |
| `src/tests/generator.test.ts`                   | --    | CRUD generator                |
| `src/tests/parser.test.ts`                      | --    | Input type parser             |
| `src/tests/utils.test.ts`                       | --    | Utility functions             |

## Migration History

- **149 migrations** from July 2024 through February 2026
- PostgreSQL database accessed via Prisma Accelerate
- Notable recent migrations:
  - `trade_timestamp_string_to_datetime` -- Converted Trade.timestamp from String to DateTime
  - `add_allocation_validation` -- Added allocation sum validation constraints
  - `fix_updated_at_patterns` -- Corrected @default(now()) to @updatedAt on 8+ models
  - `add_missing_foreign_key_indexes` -- Added indexes on FK columns
  - `add_audit_log_and_soft_deletes` -- AuditLog model + deletedAt fields
  - `add_database_constraints` -- CHECK constraints for prices, quantities, strings

## Known Issues and Remaining Work

| Priority | Issue                      | Detail                                                        |
| -------- | -------------------------- | ------------------------------------------------------------- |
| P1       | TypeGraphQL RC             | Using 2.0.0-rc.2 (waiting on stable release)                  |
| P2       | Tracing not wired          | `initTracing()` needs wiring into server.ts startup           |
| P2       | Metrics not wired          | Prometheus metrics/middleware needs wiring into server.ts     |
| P2       | APQ not wired              | `createAPQCache()` needs wiring into Apollo Server config     |
| P2       | Query complexity not wired | `createQueryComplexityPlugin` needs wiring into Apollo Server |
| Low      | Git history                | .env may exist in git history (manual BFG cleanup needed)     |
