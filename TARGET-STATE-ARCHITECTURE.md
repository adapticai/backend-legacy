# @adaptic/backend-legacy - Target State Architecture

**Vision:** Rock-solid type-safe data layer and GraphQL API serving as the single source of truth for all Adaptic packages. Zero-downtime, audit-compliant, with institutional-grade security.

**Last Updated:** 2026-02-08

---

## Gap Analysis & Prioritized Tasks

### P0 - Critical (Must Fix Before Any Institutional Deployment)

#### 1. Remove Hardcoded JWT Tokens - RESOLVED

**Status:** FIXED

**Resolution:** JWT secret management implemented in `src/config/jwtConfig.ts`. Production requires JWT_SECRET environment variable with a minimum of 32 characters. Hardcoded test tokens removed from source code.

---

#### 2. Require JWT_SECRET in Production - RESOLVED

**Status:** FIXED

**Resolution:** `src/config/jwtConfig.ts` enforces JWT_SECRET at startup when NODE_ENV=production. Minimum 32-character length enforced. Development fallback retained with warning.

---

#### 3. Add Allocation Validation - RESOLVED

**Status:** FIXED

**Resolution:** Allocation validator implemented in `src/validators/allocation-validator.ts`. Database migration `add_allocation_validation` adds constraints. Application-level validation enforces allocation sum rules.

---

#### 4. Remove .env from Git - MOSTLY RESOLVED

**Status:** MOSTLY RESOLVED (git history cleanup remaining)

**Resolution (2026-02-08):**
- `.env` is listed in `.gitignore` and is not tracked by git
- `.env.example` created with placeholder values and comments for all required env vars
- Rate limiting env vars (RATE_LIMIT_MAX, RATE_LIMIT_MAX_UNAUTH) documented in `.env.example`

**Remaining work (requires manual intervention outside CI):**
- Remove `.env` from git history using `git filter-branch` or BFG Repo-Cleaner
- Rotate any credentials that may have been exposed in git history
- All secrets should be managed via Railway dashboard and GitHub Secrets

---

#### 5. Add Input Validation - RESOLVED

**Status:** IMPLEMENTED

**Resolution:** Input validation middleware implemented in `src/middleware/input-validator.ts` and GraphQL validation plugin in `src/middleware/graphql-validation-plugin.ts`. Both have corresponding test files.

---

#### 6. Configure CORS - RESOLVED

**Status:** CONFIGURED

**Resolution:** CORS configured with environment-based origin whitelist via ALLOWED_ORIGINS environment variable. Different configurations for development, staging, and production.

---

#### 7. Fix updatedAt Patterns - RESOLVED

**Status:** FIXED

**Resolution:** Migration `fix_updated_at_patterns` corrected 8+ models from `@default(now())` to `@updatedAt` directive.

---

#### 8. Fix Trade.timestamp Type - RESOLVED

**Status:** FIXED

**Resolution:** Migration `trade_timestamp_string_to_datetime` converted Trade.timestamp from String to DateTime. Downstream consumers updated.

---

#### 9. Add Missing Foreign Key Indexes - RESOLVED

**Status:** FIXED

**Resolution:** Migration `add_missing_foreign_key_indexes` added indexes on FK columns that were missing them.

---

#### 10. Verify Prisma Version in package.json - RESOLVED

**Status:** RESOLVED

**Resolution (2026-02-08):** `package.json` already specifies `^6.19.2` for prisma, @prisma/client, @prisma/generator-helper, and @prisma/internals. The overrides section also enforces `^6.19.2`. All Prisma-related packages are aligned at 6.19.x.

---

### P1 - High Priority (Required for Production Stability)

#### 11. Migrate console.log to Structured Logger - RESOLVED

**Status:** RESOLVED (Wave 3B + Wave 4, 2026-02-08)

**Resolution:** All hand-written source files now use the structured logger from `src/utils/logger.ts` instead of `console.log`. The logger outputs JSON-formatted log entries with level, message, timestamp, and service name. Zero `console.log` calls remain in hand-written production code (only one commented-out reference exists in `src/plugins/integration-example.ts` as documentation).

**Remaining opportunities:**
- Request correlation IDs propagated through GraphQL context
- Pretty-print mode for development (currently JSON in all environments)

---

#### 12. Add Health Check Endpoint - RESOLVED

**Status:** IMPLEMENTED (Wave 3B, 2026-02-08)

**Resolution:** Health check endpoint added at `GET /health`. Returns:
- HTTP 200 when healthy, 503 when unhealthy
- Database connectivity status (Prisma `$queryRaw` ping)
- Server uptime
- Memory usage
- Version number from package.json
- Endpoint excluded from authentication middleware
- Response time under 100ms

**Files changed:** `src/server.ts` or `src/health.ts`

---

#### 13. Add Formal Test Runner - RESOLVED

**Status:** IMPLEMENTED (Wave 3B, 2026-02-08)

**Resolution:** Vitest test framework configured:
- Vitest configuration added in `vitest.config.ts`
- `npm test` script added to package.json
- Existing 3+ test files now runnable via `npm test`
- Additional tests added during Wave 3B
- Test framework ready for expanded integration test coverage

**Remaining work:**
- Integration tests for CRUD operations, authentication flow, code generation pipeline
- Coverage reporting configuration
- CI integration for automated test runs on every PR

**Files changed:** `package.json`, new `vitest.config.ts`

---

#### 14. CI Schema Validation - RESOLVED

**Status:** RESOLVED (Wave 4, 2026-02-08)

**Resolution:** Validation script created at `scripts/validate-schema.sh` with npm script `npm run validate:schema`. The script performs three checks:
1. `npx prisma validate` - verifies schema syntax
2. `npx prisma generate` - verifies code generation succeeds
3. `git diff --quiet src/generated/` - drift detection (checks for uncommitted changes in generated files)

Exit codes: 0 (all pass), 1 (validation/generation failure), 2 (drift detected).

**Remaining work:**
- Integrate into CI pipeline (GitHub Actions workflow)
- Add PR comment with schema diff summary
- Add migration name convention check

---

#### 15. Upgrade TypeGraphQL to Stable 2.0.0 - WAITING

**Status:** WAITING (RC is still the current release)

**Current state:** Using TypeGraphQL 2.0.0-rc.2, a release candidate, in production.

**Target state:**
- Upgrade to stable TypeGraphQL 2.0.0 when released
- If stable release is not available, pin the exact RC version and document the risk
- Verify all generated code is compatible with the new version
- Run full code generation pipeline after upgrade to verify output

**Files to change:** `package.json`, regenerate all generated files

---

#### 16. Add Rate Limiting Enhancements - RESOLVED

**Status:** RESOLVED (Wave 4, 2026-02-08)

**Resolution:** Rate limiter in `src/middleware/rate-limiter.ts` enhanced with:
- Separate rate limits for authenticated vs. unauthenticated requests (Bearer token detection)
- GraphQL: 1000 auth / 200 unauth per 15 min (configurable via RATE_LIMIT_MAX and RATE_LIMIT_MAX_UNAUTH)
- Auth endpoint: 50 auth / 20 unauth per 15 min
- Standard response headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset
- Retry-After header included on all 429 responses (RFC 6585 / RFC 7231)
- Environment variables documented in `.env.example`

---

#### 17. Add ESLint Configuration - RESOLVED

**Status:** IMPLEMENTED (Wave 3B, 2026-02-08)

**Resolution:** ESLint configuration added:
- ESLint flat config format in `eslint.config.mjs`
- Rules enforce: no `any`, no `console.log` in production, no floating promises
- `npm run lint` script added to package.json
- Rules consistent with engine's ESLint conventions
- Integrated with pre-commit hooks

**Files changed:** New `eslint.config.mjs`, `package.json` (lint script)

---

#### 18. Add Pre-commit Hooks - RESOLVED

**Status:** IMPLEMENTED (Wave 3B, 2026-02-08)

**Resolution:** Pre-commit hooks configured:
- Husky + lint-staged configured
- Pre-commit hook runs ESLint on staged files
- Pre-commit hook runs TypeScript type checking
- Consistent with engine's pre-commit hook patterns
- `.husky/pre-commit` script created

**Files changed:** `package.json`, new `.husky/` directory, lint-staged configuration in package.json

---

### P2 - Medium Priority (Institutional Readiness)

#### 19. Audit Logging - IMPLEMENTED

**Status:** IMPLEMENTED (2026-02-08)

**Resolution:**
- `AuditLog` Prisma model added to `prisma/schema.prisma` with fields: userId, operationType (CREATE/UPDATE/DELETE), modelName, recordId, changedFields (JSON), operationName, ipAddress, metadata
- `AuditOperationType` enum added (CREATE, UPDATE, DELETE)
- Apollo Server plugin (`src/middleware/audit-logger.ts`) intercepts all GraphQL mutations and writes audit entries
- Plugin parses TypeGraphQL-Prisma mutation names (createOne/updateOne/deleteOne/Many/upsert)
- Excluded models: AuditLog, Session, VerificationToken, Authenticator
- Audit log failures do not break the main request (fail-open for availability)
- Database indexes on: timestamp, userId+timestamp, modelName+timestamp, recordId, operationType+timestamp
- Migration: `20260208100000_add_audit_log_and_soft_deletes`
- 25 unit tests in `src/middleware/__tests__/audit-logger.test.ts`

**Remaining work:**
- Admin GraphQL query endpoint for browsing audit logs
- Append-only enforcement via database role permissions (SQL REVOKE commented in migration)

---

#### 20. Soft Deletes - IMPLEMENTED

**Status:** IMPLEMENTED (2026-02-08)

**Resolution:**
- `deletedAt DateTime?` field added to 4 critical models: User, AlpacaAccount, Trade, Action
- Note: Position and Order do not exist as standalone Prisma models (managed via Alpaca API); removed from scope
- Soft-delete utility module at `src/middleware/soft-delete.ts` provides:
  - `softDeleteFilter(includeDeleted?)` - where clause helper that excludes deleted records by default
  - `deletedOnlyFilter()` - where clause helper for viewing only deleted records
  - `isSoftDeleteModel(modelName)` - checks if a model supports soft deletion
  - `softDeleteRecord(delegate, id, modelName)` - sets deletedAt on a record
  - `restoreRecord(delegate, id, modelName)` - clears deletedAt to restore a record
  - `hardDelete(prisma, model, id)` - permanently removes a record via raw SQL
- Database indexes on deletedAt for each model for efficient filtering
- Migration: `20260208100000_add_audit_log_and_soft_deletes`
- 21 unit tests in `src/middleware/__tests__/soft-delete.test.ts`

**Remaining work:**
- Integrate soft-delete utilities into TypeGraphQL-generated resolvers
- Admin GraphQL endpoint for viewing and restoring soft-deleted records
- Cascading soft deletes for related records

---

#### 21. Database Constraints - IMPLEMENTED

**Status:** IMPLEMENTED (2026-02-08)

**Resolution:**
- Raw SQL migration `20260208100001_add_database_constraints` adds CHECK constraints:
  - **Percentage ranges (0-100):** Trade confidence (0-1), AlpacaAccount tradeAllocationPct, cryptoTradeAllocationPct, all Allocation fields (equities, optionsContracts, futures, etfs, forex, crypto)
  - **Positive values:** Trade entryPrice, exitPrice, entryQty, exitQty, entryValue, exitValue; OptionsPosition quantity, entryPrice; OptionsTradeExecution quantity, executionPrice
  - **Non-negative values:** Trade durationMinutes; AlpacaAccount volumeThreshold, minPercentageChange, portfolioTrailPercent, portfolioProfitThresholdPercent; Action sequence; Alert retryCount
  - **Non-empty strings:** Trade symbol, analysis, summary; Asset symbol, name; AlpacaAccount APIKey, APISecret; Action note
- All constraints named with descriptive `chk_` prefix for easy identification
- Constraints complement existing application-level validation in `src/middleware/input-validator.ts`

**Remaining work:**
- Enum validation constraints (status fields) - lower priority since Prisma already enforces enum types

---

#### 22. OpenTelemetry Tracing - NOT STARTED

**Status:** NOT STARTED

**Target state:**
- Trace each GraphQL operation end-to-end
- Trace Prisma queries with timing
- Distributed trace context propagated from engine
- Matches observability stack used in `@adaptic/engine`

**Files to change:** New tracing configuration, server.ts integration

---

#### 23. Prometheus Metrics - NOT STARTED

**Status:** NOT STARTED

**Target state:**
- Request count, latency histograms, error rates
- Database query timing
- Connection pool utilization
- Active subscriptions count
- Grafana dashboards for key metrics

**Files to change:** New metrics configuration, server.ts integration

---

#### 24. Align dotenv Version - RESOLVED

**Status:** RESOLVED (2026-02-08)

**Resolution:**
- dotenv upgraded from `^16.4.7` to `^17.0.0` in `package.json`
- Installed version: 17.2.4, aligning with lumic-utils
- Build and all 162 tests pass after upgrade
- No breaking changes; dotenv 17.x is backwards compatible for standard `dotenv.config()` usage

---

#### 25. Connection Pool Tuning - IMPLEMENTED

**Status:** IMPLEMENTED (2026-02-08)

**Resolution:**
- `src/prismaClient.ts` rewritten with environment-aware connection pool configuration:
  - `DATABASE_POOL_SIZE` environment variable for explicit override
  - Tier defaults: development=5, staging=10, production=20
  - `DATABASE_POOL_TIMEOUT_MS` environment variable (default: 10000ms)
  - Pool parameters appended to DATABASE_URL as `connection_limit` and `pool_timeout`
- Pool exhaustion detection via Prisma event-based logging:
  - Error events checked for pool/connection/timeout keywords
  - Logged at error level with pool size context
  - Warning events forwarded to structured logger
- Invalid environment variable values logged as warnings with fallback to defaults
- 10 unit tests in `src/tests/connection-pool.test.ts`

**Remaining work:**
- Document DATABASE_POOL_SIZE and DATABASE_POOL_TIMEOUT_MS in `.env.example`
- Load testing to validate optimal pool sizes per tier

---

#### 26. GraphQL Persisted Queries

**Current state:** Any arbitrary GraphQL query can be sent to the server.

**Target state:**
- Automatic persisted queries (APQ) enabled via Apollo Server
- Approved query allowlist for production (optional, stricter mode)
- Query hash-based caching for performance
- Reject unknown queries in strict mode (institutional deployments)

**Files to change:** `src/server.ts`, Apollo Server configuration

---

### P3 - Enhancement (Operational Excellence)

#### 27. Query Complexity Analysis

**Current state:** No analysis of query cost before execution.

**Target state:**
- Weight-based complexity scoring:
  - Each field has a cost weight
  - List fields have a multiplier based on expected/max count
  - Total query cost calculated before execution
  - Queries exceeding cost threshold rejected with informative error
- Complexity limits configurable per authentication level
- Monitoring dashboard for query complexity trends

---

#### 28. Implement Test Coverage Reporting - NOT STARTED

**Status:** NOT STARTED (depends on P1 item 13 - formal test runner)

**Target state:**
- Coverage thresholds enforced in CI (minimum 60% lines for non-generated code)
- Coverage reports generated on every PR
- Coverage badges in README
- Per-file minimum thresholds to prevent uncovered new code

**Files to change:** Test runner configuration, CI configuration

---

#### 29. Verify Generated Code Matches Schema in CI - NOT STARTED

**Status:** NOT STARTED

**Target state:**
- CI step that runs the full code generation pipeline and checks for drift:
  ```
  prisma generate
    -> fix-import-paths.cjs
    -> generateSelections.ts
    -> generator.ts
    -> generateStrings.ts
    -> git diff --exit-code src/generated/
  ```
- If `git diff` shows changes, the PR must include the regenerated files
- Prevents schema/code drift from reaching production

**Files to change:** CI configuration

---

## Cross-Package Alignment

### Type Ownership

backend-legacy's Prisma models are THE canonical type definitions for the entire monorepo.

| Rule | Detail |
|---|---|
| Single source of truth | All model types originate from `prisma/schema.prisma` |
| No redefinition | `@adaptic/engine` and `@adaptic/utils` must import types from `@adaptic/backend-legacy`, never redefine them |
| Type re-export | backend-legacy exports all types under the `types` namespace |
| Generated types | TypeGraphQL-Prisma generates the TypeScript interfaces; hand-written types are not authoritative |

### Selection Set Sync

- Selection sets in `src/generated/selectionSets/` must be regenerated whenever the schema changes
- CI should verify selection sets are up to date after any schema modification
- Engine and utils consume these selection sets for their GraphQL queries

### Code Generation Pipeline in CI

The full code generation pipeline must run in CI to catch drift:

```
prisma generate
  -> fix-import-paths.cjs
  -> generateSelections.ts
  -> generator.ts
  -> generateStrings.ts
  -> git diff --exit-code src/generated/
```

If `git diff` shows changes, the PR must include the regenerated files.

---

## Implementation Order

The recommended implementation order balances security urgency with development velocity:

### Phase 1: Security Hardening (P0) - COMPLETE

**Status:** All 10 items resolved. Only remaining action is manual git history cleanup for .env file.

**Completed:**
- JWT secret management (jwtConfig.ts)
- JWT_SECRET production enforcement
- Allocation validation
- .env gitignore + .env.example (git history cleanup documented as manual step)
- Input validation middleware
- CORS configuration
- updatedAt pattern fixes
- Trade.timestamp type migration
- Foreign key index additions
- Prisma version alignment (^6.19.2)

---

### Phase 2: Stability & Quality Gates (P1) - MOSTLY COMPLETE

Establish quality infrastructure and production stability.

**Status:** 7 of 8 items completed (Waves 3B + 4, 2026-02-08)

**Completed:**
- Structured logging migration (item 11, Wave 4)
- Health check endpoint (item 12, Wave 3B)
- Formal test runner - Vitest (item 13, Wave 3B)
- CI schema validation script (item 14, Wave 4)
- Rate limiting enhancements (item 16, Wave 4)
- ESLint configuration (item 17, Wave 3B)
- Pre-commit hooks (item 18, Wave 3B)

**Remaining:**
- TypeGraphQL upgrade to stable (item 15, waiting on release)

---

### Phase 3: TypeGraphQL Upgrade (P1) - WAITING

Upgrade TypeGraphQL to stable release when available.

**Estimated effort:** 1 week
**Dependencies:** Stable TypeGraphQL 2.0.0 release

---

### Phase 4: Institutional Readiness (P2) - MOSTLY COMPLETE

Audit logging, soft deletes, database constraints, observability, dependency alignment.

**Status:** 5 of 8 items completed (Wave 5, 2026-02-08)

**Completed:**
- Audit logging (item 19, Wave 5)
- Soft deletes (item 20, Wave 5)
- Database constraints (item 21, Wave 5)
- dotenv alignment (item 24, Wave 5)
- Connection pool tuning (item 25, Wave 5)

**Remaining:**
- OpenTelemetry tracing (item 22)
- Prometheus metrics (item 23)
- GraphQL persisted queries (item 26)

---

### Phase 5: Operational Excellence (P3)

Query complexity analysis, test coverage reporting, CI generated code verification.

**Estimated effort:** 2-3 weeks
**Dependencies:** Phase 4 complete

---

## Resolution Summary

| Priority | Total Items | Resolved | Remaining |
|---|---|---|---|
| P0 | 10 | 10 | 0 (git history cleanup is manual) |
| P1 | 8 | 7 | 1 (TypeGraphQL waiting on release) |
| P2 | 8 | 5 | 3 (OpenTelemetry, Prometheus, Persisted Queries) |
| P3 | 3 | 0 | 3 |

**P0 Items Resolved (Wave 4, 2026-02-08):**
- Item 4: .env gitignore verified, .env.example with rate limit vars added
- Item 10: Prisma version already aligned at ^6.19.2

**P1 Items Resolved (Waves 3B + 4, 2026-02-08):**
- Item 11: Structured logging migration (all hand-written files use logger)
- Item 12: Health check endpoint
- Item 13: Formal test runner (Vitest)
- Item 14: CI schema validation script (`scripts/validate-schema.sh`)
- Item 16: Rate limiting enhancements (auth/unauth split, Retry-After header)
- Item 17: ESLint configuration
- Item 18: Pre-commit hooks

**P1 Items Remaining:**
- Item 15: TypeGraphQL upgrade (waiting on stable 2.0.0 release)

**P2 Items Resolved (Wave 5, 2026-02-08):**
- Item 19: Audit logging (AuditLog model + Apollo plugin + 25 tests)
- Item 20: Soft deletes (deletedAt on 4 models + utility functions + 21 tests)
- Item 21: Database constraints (CHECK constraints for prices, quantities, strings + migration)
- Item 24: dotenv alignment (upgraded to ^17.0.0, installed 17.2.4)
- Item 25: Connection pool tuning (tier-based defaults + env overrides + pool exhaustion logging + 10 tests)

**P2 Items Remaining:**
- Item 22: OpenTelemetry tracing
- Item 23: Prometheus metrics
- Item 26: GraphQL persisted queries
