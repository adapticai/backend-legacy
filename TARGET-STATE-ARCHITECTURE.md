# @adaptic/backend-legacy - Target State Architecture

**Vision:** Rock-solid type-safe data layer and GraphQL API serving as the single source of truth for all Adaptic packages. Zero-downtime, audit-compliant, with institutional-grade security.

---

## Gap Analysis & Prioritized Tasks

### P0 - Critical (Must Fix Before Any Institutional Deployment)

#### 1. Remove Hardcoded JWT Tokens

**Current state:** A test JWT token is hardcoded in `server.ts` (lines 176, 237), `auth.ts` (line 29), and `.env`. This token could be used to bypass authentication.

**Target state:**
- Delete all hardcoded JWT tokens from source code
- Authentication tokens must only come from runtime environment variables
- CI check that scans for JWT patterns in committed code

**Files to change:** `src/server.ts`, `src/auth.ts`, `.env`

---

#### 2. Require JWT_SECRET in Production

**Current state:** When `JWT_SECRET` is not set, the server falls back to `'development_secret_key_for_local_testing_only'`. If this fallback is triggered in production, all tokens are signed with a known secret.

**Target state:**
- Throw a startup error if `JWT_SECRET` is not set when `NODE_ENV=production`
- Log a warning in development when using the fallback
- Minimum secret length of 32 characters enforced at startup

**Files to change:** `src/auth.ts`, `src/server.ts`

---

#### 3. Add Allocation Validation

**Current state:** The Allocation model has no validation that allocations for a portfolio sum to 100%. Invalid data can be written silently.

**Target state:**
- Database-level CHECK constraint ensuring allocations per portfolio sum to 100%
- Application-level validation in the create and update resolvers that rejects invalid allocation sets
- Unit tests covering edge cases (rounding, zero allocations, single allocation)

**Files to change:** `prisma/schema.prisma` (new migration), allocation CRUD functions, resolver layer

---

#### 4. Remove .env from Git

**Current state:** `.env` file may contain real credentials and is potentially committed to the repository.

**Target state:**
- `.env` added to `.gitignore`
- `.env` removed from git history (using `git filter-branch` or BFG)
- `.env.example` created with dummy placeholder values and comments
- All secrets managed via Railway dashboard and GitHub Secrets
- Documentation for required environment variables

**Files to change:** `.gitignore`, new `.env.example`, git history cleanup

---

#### 5. Add Input Validation

**Current state:** GraphQL resolvers accept arbitrary input. No validation on numeric ranges, required fields, string formats, or enum values.

**Target state:**
- All mutation inputs validated before processing
- Numeric ranges enforced (percentages 0-100, confidence scores 0-1, quantities > 0)
- Required fields enforced at the resolver level (not just database constraints)
- String format validation (emails, URLs, identifiers)
- Validation errors returned as structured GraphQL errors with field-level detail
- Use `class-validator` decorators on TypeGraphQL input types where possible

**Files to change:** Input types, resolver middleware, error formatting

---

#### 6. Configure CORS

**Current state:** `cors()` is called without configuration, allowing requests from any origin.

**Target state:**
- Whitelist of allowed origins configured via environment variable
- Different allowed origins for development, staging, and production
- Credentials mode properly configured
- Preflight caching configured for performance

**Files to change:** `src/server.ts`

---

### P1 - High Priority (Required for Production Stability)

#### 7. Fix updatedAt Patterns

**Current state:** 8+ models use `@default(now())` for the `updatedAt` field. This sets the value only at creation time, not on subsequent updates.

**Target state:**
- All `updatedAt` fields use `@updatedAt` directive
- Migration that corrects existing data where updatedAt equals createdAt but the record has been modified
- Audit to confirm all 54 models have correct timestamp patterns

**Files to change:** `prisma/schema.prisma` (new migration)

**Affected models (minimum):** Identify all 8+ models and fix in a single migration.

---

#### 8. Add Rate Limiting

**Current state:** No rate limiting on any endpoint. A single client can make unlimited requests.

**Target state:**
- `express-rate-limit` middleware on the GraphQL endpoint
- Configurable limits per environment (higher for development, stricter for production)
- Separate rate limits for authenticated vs. unauthenticated requests
- Rate limit headers included in responses (X-RateLimit-Limit, X-RateLimit-Remaining)
- Graceful 429 responses with retry-after header

**Files to change:** `src/server.ts`, new middleware file

---

#### 9. Add Health Check Endpoint

**Current state:** No health check endpoint. Load balancers and monitoring tools have no way to verify service health.

**Target state:**
- `GET /health` endpoint that returns:
  - HTTP 200 when healthy, 503 when unhealthy
  - Database connectivity status (Prisma `$queryRaw` ping)
  - Server uptime
  - Memory usage
  - Version number from package.json
- Endpoint excluded from authentication middleware
- Response time under 100ms (no expensive checks)

**Files to change:** `src/server.ts` or new `src/health.ts`

---

#### 10. Query Depth Limiting

**Current state:** No protection against deeply nested GraphQL queries. A malicious or accidental query can cause exponential database load.

**Target state:**
- Maximum query depth of 6 levels (configurable)
- Apollo Server plugin for query complexity analysis
- Queries exceeding depth or complexity limits rejected before execution
- Logging of rejected queries for monitoring

**Files to change:** `src/server.ts`, new plugin file

---

#### 11. Sanitize Error Messages

**Current state:** GraphQL errors may expose schema details, query context, stack traces, or internal implementation details.

**Target state:**
- Production errors return only a generic message and an error code
- Stack traces stripped in production
- Internal error details logged server-side only
- Error codes mapped to user-friendly messages
- Apollo `formatError` function configured

**Files to change:** `src/server.ts`

---

#### 12. Add Missing Indexes

**Current state:** Some foreign key columns lack database indexes, causing slow joins on related queries.

**Target state:**
- Every foreign key column has a corresponding index
- Composite indexes added for common query patterns (e.g., userId + status, assetId + timestamp)
- Index analysis run against production query patterns
- Migration tested against production-scale data

**Files to change:** `prisma/schema.prisma` (new migration)

---

#### 13. Fix Trade.timestamp Type

**Current state:** `Trade.timestamp` is `String?` instead of `DateTime?`. This prevents proper temporal queries, sorting, and timezone handling.

**Target state:**
- `Trade.timestamp` changed to `DateTime?`
- Data migration to parse existing string timestamps into DateTime values
- All consuming code updated to handle DateTime instead of String
- Downstream code in engine and utils verified

**Files to change:** `prisma/schema.prisma` (new migration), generated CRUD functions, engine/utils consumers

---

#### 14. Add Test Suite

**Current state:** No tests exist. `package.json` has no test script. Zero test coverage.

**Target state:**
- Test framework configured (Jest or Vitest)
- `npm test` script in package.json
- Integration tests for:
  - CRUD operations (create, read, update, delete for critical models)
  - Authentication flow (login, token validation, token refresh, rejection of invalid tokens)
  - Code generation pipeline (verify generated output matches expected structure)
  - Input validation (verify rejection of invalid inputs)
- Minimum 60% coverage on non-generated code, targeting 80%+
- Tests run in CI on every PR

**Files to change:** `package.json`, new `tests/` directory, CI configuration

---

#### 15. Upgrade TypeGraphQL

**Current state:** Using TypeGraphQL 2.0.0-rc.2, a release candidate, in production.

**Target state:**
- Upgrade to stable TypeGraphQL 2.0.0 when released
- If stable release is not available, pin the exact RC version and document the risk
- Verify all generated code is compatible with the new version
- Run full code generation pipeline after upgrade to verify output

**Files to change:** `package.json`, regenerate all generated files

---

### P2 - Medium Priority (Institutional Readiness)

#### 16. Structured Logging

**Current state:** Uses `console.log` throughout. No structured format, no log levels, no correlation IDs.

**Target state:**
- Replace all `console.log` with Pino structured logger
- Log levels: error, warn, info, debug
- JSON format in production, pretty-print in development
- Request correlation IDs propagated through GraphQL context
- Matches logging patterns used in `@adaptic/engine`

**Files to change:** New `src/logger.ts`, all files using `console.log`

---

#### 17. Audit Logging

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

#### 18. Soft Deletes

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

#### 19. Database Constraints

**Current state:** Most validation is application-level only. Invalid data can be written if the application layer is bypassed.

**Target state:**
- CHECK constraints for:
  - Percentages: 0 <= value <= 100 (allocations, confidence scores where applicable)
  - Positive values: quantities, prices, amounts > 0 where required
  - Non-empty strings: names, identifiers that must not be blank
  - Enum validation: status fields match allowed values
- Constraints documented in schema comments

**Files to change:** `prisma/schema.prisma` (new migration), raw SQL for CHECK constraints not supported by Prisma declaratively

---

#### 20. Connection Pool Tuning

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

#### 21. GraphQL Persisted Queries

**Current state:** Any arbitrary GraphQL query can be sent to the server.

**Target state:**
- Automatic persisted queries (APQ) enabled via Apollo Server
- Approved query allowlist for production (optional, stricter mode)
- Query hash-based caching for performance
- Reject unknown queries in strict mode (institutional deployments)

**Files to change:** `src/server.ts`, Apollo Server configuration

---

### P3 - Enhancement (Operational Excellence)

#### 22. Query Complexity Analysis

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

#### 23. Observability

**Current state:** No tracing, no metrics, no structured observability.

**Target state:**
- OpenTelemetry tracing:
  - Trace each GraphQL operation end-to-end
  - Trace Prisma queries with timing
  - Distributed trace context propagated from engine
- Prometheus metrics:
  - Request count, latency histograms, error rates
  - Database query timing
  - Connection pool utilization
  - Active subscriptions count
- Matches observability stack used in `@adaptic/engine`
- Grafana dashboards for key metrics

---

#### 24. Automated Schema Diffing

**Current state:** Schema changes are not automatically validated in CI.

**Target state:**
- CI check on every PR that touches `prisma/schema.prisma`:
  - Run `prisma migrate diff` to show changes
  - Verify migration name is descriptive (not auto-generated)
  - Check for breaking changes (dropped columns, changed types)
  - Verify generated code is up to date (no drift between schema and generated files)
- PR comment with schema diff summary

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

### Phase 1: Security Hardening (P0 items 1-6)

Complete all P0 items before any other work. These are blockers for institutional deployment.

**Estimated effort:** 1-2 weeks
**Dependencies:** None
**Risk if deferred:** Credential exposure, unauthorized access, data corruption

### Phase 2: Data Integrity (P1 items 7, 12, 13)

Fix schema issues that affect data correctness.

**Estimated effort:** 1 week
**Dependencies:** Phase 1 complete (so .env is secure before running migrations)

### Phase 3: Stability & Protection (P1 items 8, 9, 10, 11)

Add rate limiting, health checks, query protection, and error sanitization.

**Estimated effort:** 1 week
**Dependencies:** None (can parallelize with Phase 2)

### Phase 4: Testing & Upgrades (P1 items 14, 15)

Add test suite and upgrade TypeGraphQL.

**Estimated effort:** 2 weeks
**Dependencies:** Phases 1-3 complete (tests should cover the hardened state)

### Phase 5: Institutional Readiness (P2 items 16-21)

Logging, audit trails, soft deletes, constraints, pool tuning, persisted queries.

**Estimated effort:** 3-4 weeks
**Dependencies:** Phase 4 complete (tests in place before adding complexity)

### Phase 6: Operational Excellence (P3 items 22-24)

Query complexity, observability, automated schema diffing.

**Estimated effort:** 2-3 weeks
**Dependencies:** Phase 5 complete
