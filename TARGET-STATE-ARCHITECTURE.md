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

#### 4. Remove .env from Git - PARTIALLY RESOLVED

**Status:** NOT DONE (git history cleanup remaining)

**Current state:** `.env` file may still contain real credentials in git history. This remains a security risk.

**Remaining work:**
- Remove `.env` from git history using `git filter-branch` or BFG Repo-Cleaner
- Verify `.env` is in `.gitignore`
- Create `.env.example` with dummy placeholder values and comments
- Rotate any credentials that may have been exposed
- All secrets managed via Railway dashboard and GitHub Secrets

**Files to change:** `.gitignore`, new `.env.example`, git history cleanup

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

#### 10. Verify Prisma Version in package.json - OPEN

**Status:** NOT DONE

**Current state:** `package.json` specifies `^6.13.0` but the installed version is 6.19.2. While the caret range allows this, the declared minimum should be updated to reflect the actual tested version.

**Target state:**
- Update Prisma version in `package.json` to `^6.19.2` (or pin to `6.19.2`)
- Ensure all Prisma-related packages (@prisma/client, prisma, @prisma/extension-accelerate) are aligned
- Document the Prisma version in the README

**Files to change:** `package.json`

---

### P1 - High Priority (Required for Production Stability)

#### 11. Migrate console.log to Pino - NOT STARTED

**Status:** NOT STARTED (33 instances remaining)

**Current state:** 33 `console.log` calls throughout the codebase. No structured format, no log levels, no correlation IDs.

**Target state:**
- Replace all 33 `console.log` instances with Pino structured logger
- Log levels: error, warn, info, debug
- JSON format in production, pretty-print in development
- Request correlation IDs propagated through GraphQL context
- Matches logging patterns used in `@adaptic/engine`

**Files to change:** New `src/logger.ts`, all files using `console.log`

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

#### 14. CI Schema Validation - NOT STARTED

**Status:** NOT STARTED

**Target state:**
- CI check on every PR that touches `prisma/schema.prisma`:
  - Run `prisma migrate diff` to show changes
  - Verify migration name is descriptive (not auto-generated)
  - Check for breaking changes (dropped columns, changed types)
  - Verify generated code is up to date (no drift between schema and generated files)
- PR comment with schema diff summary

**Files to change:** CI configuration, new validation script

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

#### 16. Add Rate Limiting Enhancements

**Status:** PARTIALLY DONE

**Current state:** Basic rate limiting implemented in `src/middleware/rate-limiter.ts` with configurable limits via RATE_LIMIT_MAX.

**Remaining work:**
- Separate rate limits for authenticated vs. unauthenticated requests
- Rate limit headers included in responses (X-RateLimit-Limit, X-RateLimit-Remaining)
- Graceful 429 responses with retry-after header

**Files to change:** `src/middleware/rate-limiter.ts`, `src/server.ts`

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

#### 19. Audit Logging - NOT STARTED

**Status:** NOT STARTED

**Current state:** No audit trail for data mutations. Cannot answer "who changed what, when."

**Target state:**
- All mutations logged with:
  - User ID (from JWT)
  - Timestamp
  - Operation type (create, update, delete)
  - Model name
  - Changed fields (before and after values for updates)
- Audit logs stored in a separate database table
- Audit logs immutable (append-only, no updates or deletes)
- Queryable via admin GraphQL endpoint

**Files to change:** New Prisma model for audit logs, middleware for automatic capture, new migration

---

#### 20. Soft Deletes - NOT STARTED

**Status:** NOT STARTED

**Current state:** All deletes are hard deletes. Deleted data is unrecoverable.

**Target state:**
- `deletedAt` (DateTime?) field added to critical models:
  - User
  - AlpacaAccount
  - Trade
  - Position
  - Order
  - Action
- Default queries filter out soft-deleted records
- Admin endpoint to view and restore soft-deleted records
- Hard delete available as a separate privileged operation
- Cascading soft deletes for related records

**Files to change:** `prisma/schema.prisma` (new migration), CRUD function generators, resolver middleware

---

#### 21. Database Constraints - PARTIALLY DONE

**Status:** PARTIALLY DONE (allocation validation added, broader constraints remaining)

**Current state:** Allocation validation constraints added via migration. Most other validation is application-level only.

**Remaining work:**
- CHECK constraints for:
  - Percentages: 0 <= value <= 100 (confidence scores where applicable)
  - Positive values: quantities, prices, amounts > 0 where required
  - Non-empty strings: names, identifiers that must not be blank
  - Enum validation: status fields match allowed values
- Constraints documented in schema comments

**Files to change:** `prisma/schema.prisma` (new migration), raw SQL for CHECK constraints not supported by Prisma declaratively

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

#### 24. Align dotenv Version - NOT STARTED

**Status:** NOT STARTED

**Current state:** backend-legacy uses dotenv 16.x. Other packages (lumic-utils) are on 17.x.

**Target state:**
- Align dotenv version across packages (target 17.x)
- Test that all environment variable loading works after upgrade
- Coordinate with engine and lumic-utils upgrades

**Files to change:** `package.json`

---

#### 25. Connection Pool Tuning

**Current state:** Default Prisma connection pool settings. No environment-specific tuning.

**Target state:**
- Connection pool size configurable via environment variable
- Defaults tuned per deployment tier:
  - Development: 5 connections
  - Staging: 10 connections
  - Production: 20 connections (adjustable based on load testing)
- Connection timeout configured
- Pool exhaustion logged as error
- Prisma Accelerate settings reviewed and optimized

**Files to change:** `src/prismaClient.ts`, environment variable documentation

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

### Phase 1: Security Hardening (P0) - MOSTLY COMPLETE

**Status:** 9 of 10 items resolved. Remaining: .env git history cleanup, Prisma version alignment.

**Completed:**
- JWT secret management (jwtConfig.ts)
- JWT_SECRET production enforcement
- Allocation validation
- Input validation middleware
- CORS configuration
- updatedAt pattern fixes
- Trade.timestamp type migration
- Foreign key index additions

**Remaining:**
- Remove .env from git history
- Update Prisma version in package.json to match actual (6.19.2)

---

### Phase 2: Stability & Quality Gates (P1) - PARTIALLY COMPLETE

Establish quality infrastructure and production stability.

**Status:** 4 of 8 items completed (Wave 3B, 2026-02-08)

**Completed:**
- Health check endpoint (item 12)
- Formal test runner - Vitest (item 13)
- ESLint configuration (item 17)
- Pre-commit hooks (item 18)

**Remaining:**
- Pino logging migration (33 console.log instances, item 11)
- CI schema validation (item 14)
- TypeGraphQL upgrade to stable (item 15, waiting on release)
- Rate limiting enhancements (item 16, partially done)

**Estimated effort for remaining items:** 1-2 weeks

---

### Phase 3: TypeGraphQL Upgrade (P1) - WAITING

Upgrade TypeGraphQL to stable release when available.

**Estimated effort:** 1 week
**Dependencies:** Stable TypeGraphQL 2.0.0 release

---

### Phase 4: Institutional Readiness (P2)

Audit logging, soft deletes, database constraints, observability, dependency alignment.

**Estimated effort:** 3-4 weeks
**Dependencies:** Phase 2 complete (tests and quality gates in place before adding complexity)
**Items:** Audit logging, soft deletes, database constraints, OpenTelemetry tracing, Prometheus metrics, dotenv alignment, connection pool tuning, persisted queries

---

### Phase 5: Operational Excellence (P3)

Query complexity analysis, test coverage reporting, CI generated code verification.

**Estimated effort:** 2-3 weeks
**Dependencies:** Phase 4 complete

---

## Resolution Summary

| Priority | Total Items | Resolved | Remaining |
|---|---|---|---|
| P0 | 10 | 8 | 2 |
| P1 | 8 | 4 | 4 |
| P2 | 8 | 0 | 8 (1 partially done) |
| P3 | 3 | 0 | 3 |

**P1 Items Resolved (Wave 3B, 2026-02-08):**
- Item 12: Health check endpoint
- Item 13: Formal test runner (Vitest)
- Item 17: ESLint configuration
- Item 18: Pre-commit hooks

**P1 Items Remaining:**
- Item 11: Pino logging migration (33 console.log instances)
- Item 14: CI schema validation
- Item 15: TypeGraphQL upgrade (waiting on stable release)
- Item 16: Rate limiting enhancements (partially done)
