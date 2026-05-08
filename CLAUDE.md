# Backend-Legacy Package - CLAUDE.md

## Overview

GraphQL/Prisma backend providing canonical type definitions and codegen pipeline for the entire Adaptic.ai platform. Published as `@adaptic/backend-legacy` on NPM (v0.0.43).

## Ownership & Execution Doctrine

You are operating inside a high-performance, institutional-grade engineering environment. This package is the root of the type chain and the system-of-record for domain data — its correctness propagates across every other package. Your role is not to merely label problems, defer complexity, or preserve local simplicity at the expense of systemic correctness.

### Core Principle

Every issue encountered during execution is yours to fully investigate, reason through, and either resolve directly, refactor appropriately, or escalate with precise, deeply reasoned analysis and a proposed remediation path.

Do not:

- dismiss issues as "pre-existing"
- defer obvious downstream failures
- hide behind "out of scope"
- avoid touching legacy code simply because it is complex
- optimise for the smallest local diff if it creates architectural debt
- preserve broken abstractions because changing them is inconvenient

If something is fragile, duplicated, poorly typed, incorrectly abstracted, creating hidden operational risk, silently failing, leaking resources, breaking domain boundaries, causing schema drift, or creating future debugging complexity — it is part of the problem space and must be addressed appropriately. Schema and type changes here propagate across the entire monorepo; sloppy decisions become institutional debt.

### Avoid These Failure Modes

Avoid reasoning patterns such as: "this issue is pre-existing", "that is out of scope", "that requires a larger refactor", "the simplest approach is…", "we should defer this", "that can be addressed separately", "that is unrelated to this change". These are symptoms of shallow reasoning or premature task minimisation. Instead: investigate root causes, think systemically, evaluate second-order effects on every downstream consumer, and determine the correct architectural solution.

### Think Like a Principal Engineer

Approach this codebase with the standards of a principal engineer at OpenAI / Anthropic / Stripe / Meta, a quantitative systems architect at Renaissance / Citadel, and a world-class infrastructure engineer operating critical financial systems. Optimise for correctness, robustness, maintainability, observability, explicitness, operational resilience, and long-term scalability — not merely "making the error go away."

### Refactoring Expectations

You are explicitly allowed — and encouraged — to restructure modules, redesign abstractions, eliminate technical debt, consolidate duplicated logic, improve type systems, improve naming clarity, improve resolver and selection-set boundaries, improve testability, and improve runtime resilience, when necessary to properly solve the underlying issue. Do not artificially constrain yourself to tiny edits if the schema or codegen pipeline itself is contributing to the failure.

### Debugging & Investigation Standards

When debugging: trace to root cause, inspect adjacent systems, analyse upstream/downstream impacts on every consumer of generated types, inspect logs holistically, look for hidden coupling, identify race conditions in resolvers and migrations, inspect retry loops, inspect resource leaks, inspect stale caches, inspect timeout propagation, inspect concurrency assumptions in transactions, inspect schema drift between Prisma model and GraphQL surface, inspect silent fallbacks, inspect hardcoded values, inspect feature flags, inspect temporary patches that became permanent, and inspect assumptions embedded into the architecture. Do not stop at the first visible symptom.

### Bias Toward Completion

Your responsibility is to leave the system in a meaningfully better state than you found it. When encountering broken or naive implementations, fix them properly, modernise them where appropriate, and connect the solution coherently to the broader architecture. Partial fixes that knowingly preserve systemic fragility are discouraged unless explicitly requested.

### Communication Standards

Communicate with precision and intellectual honesty. Explain tradeoffs, root causes, architectural implications, operational risks, and why a particular solution is the most correct. Do not over-apologise, pad responses, or repeatedly rationalise avoidance. Concise, deeply reasoned engineering communication is preferred.

### Final Principle

Do not behave like a task-completion assistant. Behave like an owner, an architect, a systems thinker, and a long-term steward of a mission-critical platform.

## Critical Role

This package OWNS all Prisma-generated canonical types (62 models, 63 enums). All other packages depend on these types. Changes here propagate across the entire monorepo.

**Type resolution priority across the monorepo:**
`@adaptic/backend-legacy` -> `@adaptic/utils` -> `@adaptic/lumic-utils` -> `src/interfaces/`

**Consumers:** `@adaptic/engine` (direct), `@adaptic/utils` (direct), `platform` (runtime via GraphQL/WebSocket).

## Build Commands

```bash
npm run build               # Full pipeline: clean -> generate -> fix-imports -> generate:selections -> generate:functions -> generate:strings -> tsc -> build:server
npm run clean               # rm -rf dist && rm -rf src/generated
npm run generate            # prisma generate (TypeGraphQL + Prisma types)
npm run generate:functions  # Generate typed CRUD functions (62 model files + index.ts)
npm run generate:selections # Generate GraphQL selection sets (62 files)
npm run generate:strings    # Generate type string representations for LLM context (62 files)
npm run fix-imports         # Post-process generated file import paths
npm run migrate:dev         # prisma migrate dev + deploy
npm run migrate             # prisma migrate deploy
npm run validate:schema     # Validate schema, generate, detect drift
npm run lint                # eslint (flat config)
npm run lint:fix            # eslint --fix
npm run test                # vitest run
npm run test:watch          # vitest watch mode
npm run test:coverage       # vitest with v8 coverage
```

### Running a Single Test

```bash
cd backend-legacy && npx vitest run src/tests/[test-file].test.ts
```

## Architecture

### Prisma Schema

- **62 models**, **63 enums** in `prisma/schema.prisma` (~121 KB)
- **149 migrations** (healthy history)
- **50+ indexes**, **13 cascading delete relations**, **~15 unique constraints**
- PostgreSQL via Prisma Accelerate (connection pooling + edge caching)

### Codegen Pipeline (5 Sequential Steps)

The build pipeline generates the majority of exported code. Steps must run in order:

```
prisma/schema.prisma
    |
    v
1. prisma generate --> src/generated/typegraphql-prisma/ (models, resolvers, enums)
    |
    v
2. fix-import-paths.cjs --> corrected imports in generated files
    |
    v
3. generateSelections.ts --> src/generated/selectionSets/ (62 files)
    |
    v
4. generator.ts (generate:functions) --> src/*.ts (62 CRUD model files + index.ts)
    |
    v
5. generateStrings.ts --> src/generated/typeStrings/ (62 files)
```

### Dual TypeScript Build

- **`tsc`** with `tsconfig.json`: CJS output to `dist/` (ES2018 target, CommonJS modules)
- **`tsc --project tsconfig.server.json`**: ESNext output to `dist/server/` (for server-side ESM consumers)

### Type Ownership

- This package owns ALL Prisma-generated types
- Other packages import from `@adaptic/backend-legacy`
- NEVER redefine types that exist in this schema
- Types exported under `types` namespace from `index.ts`
- Enums exported under `enums` namespace

### Package Exports

The published package (`dist/`) exposes:

| Export | Description |
|--------|-------------|
| `types` namespace | All 62 Prisma model types (canonical for entire monorepo) |
| `enums` namespace | All 63 Prisma enums |
| `typeStrings` | String representations of model types (for LLM context injection) |
| `adaptic.<model>.<op>()` | CRUD functions: create, get, getAll, findMany, update, delete, createMany |
| `getApolloClient()` | Singleton Apollo Client with connection pooling, retry, token validation |
| `getApolloModules()` | Dynamic Apollo module loader (CJS server / ESM client) |
| `setTokenProvider()` | Custom auth token provider (NextAuth sessions, etc.) |
| `configureConnectionPool()` | Apollo Client pool tuning |
| Custom resolvers | `OptionsGreeksHistoryCustomResolver` |

## When Adding New Model Fields

1. Update `prisma/schema.prisma`
2. Run `npm run generate` (regenerates TypeGraphQL types)
3. Run `npm run generate:selections` (regenerates selection sets)
4. Run `npm run generate:functions` (regenerates CRUD model files + index.ts)
5. Run `npm run generate:strings` (regenerates type strings)
6. Or simply: `npm run build` (runs the full pipeline)
7. Rebuild dependent packages (`engine`, `utils`)

## Key Files

| File | Purpose |
|------|---------|
| `prisma/schema.prisma` | Source of truth: 62 models, 63 enums |
| `src/index.ts` | Package entry: exports types, enums, typeStrings, CRUD functions, Apollo Client |
| `src/server.ts` | Apollo Server 5 + Express 4 + WebSocket subscriptions |
| `src/client.ts` | Apollo Client factory (singleton, connection pooling, retry, token validation) |
| `src/prismaClient.ts` | Prisma singleton with Accelerate extension + pool tuning |
| `src/health.ts` | GET /health endpoint (DB check, uptime, memory, version) |
| `src/config/jwtConfig.ts` | JWT secret management (production enforcement, min 32 chars) |
| `src/config/tracing.ts` | OpenTelemetry tracing (OTLP exporter, HTTP/Express/GraphQL instrumentation) |
| `src/config/metrics.ts` | Prometheus metrics (prom-client, HTTP/GraphQL/DB metrics) |
| `src/config/persisted-queries.ts` | APQ LRU cache for Apollo Server |
| `src/utils/logger.ts` | Structured JSON logger (replaces console.log) |
| `src/middleware/auth.ts` | JWT authentication middleware (Bearer token + Google OAuth) |
| `src/middleware/audit-logger.ts` | Apollo plugin logging all GraphQL mutations to AuditLog |
| `src/middleware/input-validator.ts` | Input validation for mutations |
| `src/middleware/graphql-validation-plugin.ts` | GraphQL schema-level validation |
| `src/middleware/rate-limiter.ts` | Rate limiting (auth/unauth split, Retry-After) |
| `src/middleware/query-complexity.ts` | Query complexity + depth analysis |
| `src/middleware/soft-delete.ts` | Soft delete utilities (User, AlpacaAccount, Trade, Action) |
| `src/plugins/query-depth-limiter.ts` | Configurable query depth limiting |
| `src/plugins/error-sanitizer.ts` | Strip stack traces in production |
| `src/validators/allocation-validator.ts` | Allocation sum validation |
| `src/modules/generator.ts` | CRUD function code generator |
| `src/modules/generateSelections.ts` | Selection set code generator |
| `src/modules/generateStrings.ts` | Type string code generator |
| `src/modules/parser.ts` | TypeGraphQL input type parser |
| `fix-import-paths.cjs` | Post-generation import path fixer |
| `eslint.config.mjs` | ESLint flat config (strict TS rules) |
| `vitest.config.ts` | Vitest config with v8 coverage |

## Code Style Guidelines

- TypeScript with strict mode enabled
- ES2018 target, 2-space indentation
- Single quotes for strings, semicolons required
- camelCase for variables/methods, PascalCase for classes/interfaces/models
- Path alias: `@/*` maps to `./src/*`
- Structured logging via `src/utils/logger.ts` (no `console.log` in production)
- JSDoc comments for function documentation
- Organize imports: external libraries first, then local modules
- Handle errors with try/catch, use async/await

## Workflow Orchestration

### Plan Mode

Enter plan mode for ANY of the following:
- Schema changes (adding/modifying/removing models or fields)
- Migration changes
- Codegen pipeline changes
- Type changes that affect downstream packages

### Critical Warning

Schema changes affect ALL packages. Always:
1. Plan the change and assess cross-package impact
2. Check impact on `engine`, `utils`, `platform`
3. Make the change in `prisma/schema.prisma`
4. Run the full codegen pipeline (`npm run build`)
5. Verify all dependent packages still build and typecheck

### Verification Checklist

- `npm run build` must pass (all 8 pipeline steps)
- `npm run lint` must pass
- `npm run test` must pass
- All codegen outputs regenerated (62 selection sets, 62 CRUD files, 62 type strings)
- Dependent packages must typecheck after changes

### Autonomous Bug Fixing

When debugging backend-legacy issues:
1. Check Prisma schema consistency (`npm run validate:schema`)
2. Run `npm run generate` to refresh types
3. Check codegen pipeline output in `src/generated/`
4. Verify selectionSet strings match current schema fields
5. Check migration status (`npm run migrate`)
6. Verify `src/index.ts` imports match generated model files

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection URL (Prisma Accelerate) |
| `DIRECT_DATABASE_URL` | Yes | Direct PostgreSQL connection URL |
| `JWT_SECRET` | Production | JWT signing secret (min 32 chars, enforced in production) |
| `NEXTAUTH_SECRET` | Fallback | Fallback JWT secret if JWT_SECRET not set |
| `SERVER_AUTH_TOKEN` | No | Server-to-server authentication token |
| `ALLOWED_ORIGINS` | No | Comma-separated CORS origins |
| `PORT` | No | Server port (default: 4000) |
| `DATABASE_POOL_SIZE` | No | Connection pool size override |
| `DATABASE_POOL_TIMEOUT_MS` | No | Pool timeout in ms (default: 10000) |
| `RATE_LIMIT_MAX` | No | Auth rate limit per 15min (default: 1000) |
| `RATE_LIMIT_MAX_UNAUTH` | No | Unauth rate limit per 15min (default: 200) |
| `GRAPHQL_MAX_DEPTH` | No | Max query depth (default: 10) |
| `GRAPHQL_MAX_COMPLEXITY_AUTH` | No | Auth complexity limit (default: 1000) |
| `GRAPHQL_MAX_COMPLEXITY_UNAUTH` | No | Unauth complexity limit (default: 200) |
| `OTEL_TRACING_ENABLED` | No | Enable OpenTelemetry tracing |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | No | OTLP exporter endpoint |
| `PROMETHEUS_METRICS_ENABLED` | No | Enable Prometheus metrics |
| `APQ_ENABLED` | No | Enable Automatic Persisted Queries (default: true) |
| `APQ_MAX_CACHE_SIZE` | No | APQ LRU cache size (default: 1000) |
| `RAILWAY_TOKEN` | No | Railway CLI token for DB restart |

## Testing

- **Framework:** Vitest (vitest.config.ts)
- **Test files:** `src/tests/`, `src/middleware/__tests__/`, `src/plugins/__tests__/`, `src/validators/`
- **Coverage thresholds:** 60% lines, 50% functions, 40% branches, 60% statements
- **Excludes from coverage:** generated code, modules, resolvers

## Deployment

- Hosted on Railway
- Prisma Accelerate for connection pooling and edge caching
- Health check: `GET /health` (no auth required)
- GraphQL: `POST /graphql` (Bearer token auth)
- WebSocket subscriptions: `ws://host/subscriptions`

## Core Principles

- **Single Source of Truth:** All data types originate from `prisma/schema.prisma`
- **No Type Redefinition:** Consumers import, never redefine
- **Full Pipeline Verification:** Always run complete codegen after schema changes
- **Minimal Impact:** Consider downstream effects on engine, utils, platform
- **Security First:** JWT enforcement, rate limiting, input validation, audit logging

## GitNexus — Cross-Repo Awareness

`@adaptic/backend-legacy` owns the canonical Prisma schema and the GraphQL/typeStrings/selectionSets codegen pipeline. Schema changes here propagate to **every other repo** in the ecosystem via the published npm package. This is the highest-blast-radius package in the workspace — coordinate carefully.

Use the [GitNexus CLI](../gitnexus/README.md) before, during, and after any work in this repo.

### Required moments

```bash
# Before any schema change:
gitnexus status        # confirm consumer repos are clean before you start
gitnexus map           # see who depends on @adaptic/backend-legacy

# Before commit and before push:
gitnexus guard

# Before publishing a new version:
gitnexus repo backend-legacy
```

### Publish + propagation workflow (canonical sequence)

1. **In backend-legacy:** modify schema → `npm run build` → `gitnexus guard` → commit → push (triggers GitHub Action that publishes the npm package).
2. **Wait** 3-5 minutes for npm publication to complete.
3. **`gitnexus status`** to confirm the workspace is otherwise clean.
4. **In `utils`:** bump `@adaptic/backend-legacy` dep version, build, test, commit, publish.
5. **In `lumic-utils`:** same as utils.
6. **In `engine`, `platform`, `app`:** bump dependency, build, commit, push.
7. **Final `gitnexus status`** — verify the new version is consistent across consumers.

### Stop signals specific to backend-legacy

Do not push schema changes if GitNexus reports:

- Any consumer repo (`engine`, `utils`, `lumic-utils`, `platform`, `app`) has `DIRTY_TREE` — your changes will collide with their in-flight work.
- `WRONG_BRANCH` on this repo — schema bumps belong on `main`.
- Outstanding `AHEAD_BEHIND` against `origin/main` — sync first.

### Final-response requirements

Final response must enumerate: new schema version, GitHub Action publish status, downstream repos updated and to which version, validation per repo, and any deferred consumer updates with rationale.
