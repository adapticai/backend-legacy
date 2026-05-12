# Backend-Legacy Package - CLAUDE.md

## Overview

GraphQL/Prisma backend providing canonical type definitions and codegen pipeline for the entire Adaptic.ai platform. Published as `@adaptic/backend-legacy` on NPM (v0.0.43).

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
