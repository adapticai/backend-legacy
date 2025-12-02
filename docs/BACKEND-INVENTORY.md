# Backend Legacy Package Inventory

## Executive Summary

The `@adaptic/backend-legacy` package is a comprehensive backend solution providing GraphQL API infrastructure, database access, authentication, and entity management. It contains approximately 172,667 lines of TypeScript code across 65 source files.

**Package Details:**
- **Current Name:** `@adaptic/backend-legacy`
- **Version:** 0.0.34
- **Target Name:** `@adaptic/backend` (monorepo migration)
- **Total Lines of Code:** ~172,667 LOC
- **Total Source Files:** 65 TypeScript files
- **Node Version:** >=20.0.0

---

## 1. Core Architecture Components

### 1.1 Apollo Client Infrastructure

#### Files:
- `src/client.ts` (334 LOC) - Main Apollo Client facade
- `src/apollo-client.server.ts` (36 LOC) - Server-side CommonJS implementation
- `src/apollo-client.client.ts` (38 LOC) - Client-side ESM implementation

#### Features:
- **Universal Apollo Client** - Automatic environment detection (server/client)
- **Connection Pooling** - Configurable concurrent operation limits
- **Retry Logic** - Exponential backoff for failed operations
- **Authentication Integration** - JWT and OAuth token support
- **Token Validation** - JWT format verification
- **Dynamic Token Providers** - Support for session-based authentication

#### Configuration:
```typescript
interface ConnectionPoolConfig {
  maxConcurrentOperations: 100,  // Default concurrent operations
  retryAttempts: 3,              // Retry failed operations
  retryDelay: 1000,              // Base delay (ms)
  connectionTimeout: 10000       // Connection timeout (ms)
}
```

#### Exports:
- `getApolloClient()` - Get singleton Apollo Client instance
- `getApolloModules()` - Get Apollo runtime modules
- `configureConnectionPool()` - Configure connection pooling
- `setTokenProvider()` - Set custom token provider
- `client` - Promise-based client export

---

### 1.2 Authentication & Authorization

#### Files:
- `src/getToken.ts` (352 LOC) - JWT token management
- `src/middleware/auth.ts` (42 LOC) - Express authentication middleware

#### Authentication Features:
- **JWT Encryption/Decryption** - JWE with A256GCM encryption
- **HKDF Key Derivation** - NextAuth.js compatible key derivation
- **Multi-Source Token Retrieval** - Cookies, Authorization headers
- **Token Validation** - Format and expiry validation
- **Google OAuth Support** - ya29.* token pass-through

#### Token Management:
```typescript
// Encode JWT
async function encode(params: JWTEncodeParams): Promise<string>

// Decode JWT
async function decode(params: JWTDecodeParams): Promise<Record<string, any> | null>

// Extract token from request
async function getToken<R extends boolean = false>(
  params: GetTokenParams<R>
): Promise<R extends true ? string : Record<string, any> | null>
```

#### Middleware:
- Express middleware for request authentication
- Bearer token extraction
- Google OAuth token handling
- JWT verification with configurable secret

---

### 1.3 GraphQL Server

#### Files:
- `src/server.ts` (304 LOC) - Apollo Server setup and configuration

#### Server Features:
- **Apollo Server 5.x** - Latest Apollo Server integration
- **TypeGraphQL Integration** - Type-safe schema generation
- **WebSocket Support** - Real-time subscriptions via graphql-ws
- **CORS Configuration** - Cross-origin request handling
- **Error Handling** - Comprehensive error formatting
- **Database Health Monitoring** - Automatic reconnection and restart
- **Railway Integration** - Database auto-restart on connection failure

#### Technologies:
- Express 4.x
- Apollo Server 5.x
- TypeGraphQL
- WebSocket Server (ws)
- graphql-ws

---

## 2. Data Layer

### 2.1 Prisma Integration

#### Files:
- `src/prismaClient.ts` - Prisma client initialization
- `prisma/schema.prisma` - Database schema definition

#### Prisma Features:
- **Prisma Client** (v6.13.0)
- **Prisma Accelerate** - Connection pooling and caching
- **Prisma Pulse** - Real-time database events
- **TypeGraphQL Prisma Generator** - Auto-generated GraphQL resolvers
- **Data Proxy Engine** - Serverless-optimized database access

---

### 2.2 Entity Models (42 Total)

All entity models are auto-generated CRUD wrappers with GraphQL operations.

#### Core User & Auth Models:
| Model | LOC | Purpose |
|-------|-----|---------|
| User | 3,273 | User accounts and profile management |
| Account | 3,962 | OAuth provider account linking |
| Session | 3,950 | User session management |
| Authenticator | 3,998 | WebAuthn/2FA authenticators |
| VerificationToken | ~3,000 | Email verification tokens |
| Customer | 3,924 | Subscription and billing |
| LinkedProvider | 3,954 | External provider connections |
| AccountLinkingRequest | 3,934 | Account linking workflows |

#### Trading & Finance Models:
| Model | LOC | Purpose |
|-------|-----|---------|
| AlpacaAccount | 3,579 | Trading account integration |
| Asset | ~3,000 | Financial asset definitions |
| Trade | ~3,000 | Trade execution records |
| Allocation | 4,245 | Portfolio allocation settings |
| OptionsContract | 4,572 | Options contract data |
| OptionsPosition | 5,105 | Current options positions |
| OptionsGreeksHistory | 3,826 | Historical options Greeks |
| OptionsTradeExecution | 5,137 | Options trade records |
| ScheduledOptionOrder | ~3,000 | Scheduled option trades |
| PortfolioGreeksHistory | ~3,000 | Portfolio Greeks tracking |

#### Market Data & Analytics Models:
| Model | LOC | Purpose |
|-------|-----|---------|
| MarketSentiment | ~3,000 | Overall market sentiment |
| InstitutionalHolding | ~3,000 | Institutional ownership data |
| InstitutionalSentimentHistory | ~3,000 | Historical sentiment tracking |
| InstitutionalSentimentMetrics | ~3,000 | Sentiment calculations |
| InstitutionalSentimentAlerts | ~3,000 | Sentiment-based alerts |
| InstitutionalSentimentErrors | ~3,000 | Error tracking |
| InstitutionalFlowSignal | ~3,000 | Order flow signals |
| NewsArticle | ~3,000 | Financial news articles |
| NewsArticleAssetSentiment | ~3,000 | News sentiment by asset |
| EconomicEvent | ~3,000 | Economic calendar events |

#### ML & AI Models:
| Model | LOC | Purpose |
|-------|-----|---------|
| ModelVersion | 26,991 | ML model versioning (LARGEST) |
| ModelArtifact | 5,552 | Model binary artifacts |
| ModelVersionArtifact | 12,513 | Version-artifact relationships |
| FeatureImportanceAnalysis | 12,619 | Feature importance data |
| MLTrainingData | ~3,000 | Training dataset management |

#### System & Configuration Models:
| Model | LOC | Purpose |
|-------|-----|---------|
| Configuration | ~3,000 | System configuration |
| AnalyticsConfiguration | ~3,000 | Analytics settings |
| AnalyticsSnapshot | ~3,000 | Analytics data snapshots |
| Alert | 4,184 | User alert management |
| SystemAlert | ~3,000 | System-level alerts |
| Action | ~3,000 | User action tracking |
| ABTest | 22,210 | A/B testing framework (2nd LARGEST) |
| ConnectionHealthSnapshot | ~3,000 | Connection health monitoring |

---

### 2.3 Code Generation System

#### Files:
- `src/modules/generator.ts` - CRUD operation generator
- `src/modules/parser.ts` - Schema parser
- `src/modules/utils.ts` - Code generation utilities
- `src/modules/types.ts` - Generator type definitions
- `src/modules/generateSelections.ts` - GraphQL selection sets
- `src/modules/generateStrings.ts` - Type string generation
- `src/modules/index.ts` - Generation orchestrator

#### Generated Code:
- **CRUD Functions** - create, update, delete, findOne, findMany, count
- **GraphQL Selection Sets** - Complete field selections for each model
- **Type Strings** - String representations of types
- **Input Types** - create, update, where, orderBy inputs

#### Generation Process:
1. Parse Prisma schema
2. Extract model definitions and relationships
3. Generate TypeScript CRUD wrappers
4. Create GraphQL selection sets
5. Generate type string exports
6. Fix import paths

---

## 3. Custom Resolvers

#### Files:
- `src/resolvers/custom/index.ts` - Custom resolver exports
- `src/resolvers/custom/OptionsGreeksHistoryCustomResolver.ts` - Options Greeks resolver
- `src/resolvers/custom/OptionsGreeksHistorySystemSummary.ts` - System summary resolver

#### Custom Operations:
- Complex options Greeks calculations
- System-wide summaries
- Custom aggregations

---

## 4. Utilities & Helpers

#### Files:
- `src/utils.ts` - Shared utility functions
- `src/prismaClient.ts` - Prisma client singleton

#### Utility Functions:
- `removeUndefinedProps()` - Clean undefined values from objects
- Object manipulation utilities
- Type guards and validators

---

## 5. Database Migration Scripts

#### Files:
- `src/scripts/set-default-openai-model.ts` - Set default AI model
- `src/scripts/migrate-openai-model-enum.ts` - Migrate model enum values

---

## 6. Testing Infrastructure

#### Files:
- `src/tests/utils.test.ts` - Utility function tests
- `src/tests/parser.test.ts` - Schema parser tests
- `src/tests/generator.test.ts` - Code generator tests

**Current Test Coverage:** Minimal (estimated <10%)
**Target Coverage:** 80%

---

## 7. Build & Development Tools

#### Scripts:
- `npm run build` - Full production build
- `npm run dev` - Development server with hot reload
- `npm run generate` - Prisma code generation
- `npm run generate:functions` - CRUD function generation
- `npm run generate:selections` - Selection set generation
- `npm run generate:strings` - Type string generation
- `npm run migrate:dev` - Run database migrations (dev)
- `npm run migrate` - Run database migrations (prod)
- `npm run clean` - Clean build artifacts

#### Build Tools:
- TypeScript 5.9.2
- ts-node for development
- nodemon for hot reload
- Custom import path fixer
- Package preparation script

---

## 8. External Dependencies

### Core Dependencies:
```json
{
  "@apollo/client": "^3.13.9",
  "@apollo/server": "^5.0.0",
  "@prisma/client": "^6.13.0",
  "graphql": "^16.11.0",
  "type-graphql": "^2.0.0-rc.2",
  "typegraphql-prisma": "^0.28.0",
  "express": "^4.21.2",
  "jsonwebtoken": "^9.0.2"
}
```

### Prisma Extensions:
```json
{
  "@prisma/extension-accelerate": "^2.0.2",
  "@prisma/extension-pulse": "^1.2.2"
}
```

### GraphQL Tools:
```json
{
  "graphql-fields": "^2.0.3",
  "graphql-scalars": "^1.24.2",
  "graphql-ws": "^5.16.2"
}
```

### Optional Dependencies:
```json
{
  "@aws-sdk/client-lambda": "^3.859.0"
}
```

---

## 9. Module Organization

### Current Structure:
```
src/
├── [Entity Models]          # 42 auto-generated CRUD files (~150K LOC)
├── apollo-client.*.ts       # Apollo Client implementations
├── client.ts                # Apollo Client facade
├── server.ts                # Apollo Server setup
├── getToken.ts              # JWT token management
├── prismaClient.ts          # Prisma client singleton
├── utils.ts                 # Shared utilities
├── index.ts                 # Main package entry point
├── middleware/
│   └── auth.ts              # Authentication middleware
├── modules/
│   ├── generator.ts         # CRUD generator
│   ├── parser.ts            # Schema parser
│   ├── utils.ts             # Generator utilities
│   ├── types.ts             # Generator types
│   ├── generateSelections.ts
│   ├── generateStrings.ts
│   └── index.ts
├── resolvers/
│   └── custom/
│       ├── index.ts
│       ├── OptionsGreeksHistoryCustomResolver.ts
│       └── OptionsGreeksHistorySystemSummary.ts
├── scripts/
│   ├── set-default-openai-model.ts
│   └── migrate-openai-model-enum.ts
└── tests/
    ├── utils.test.ts
    ├── parser.test.ts
    └── generator.test.ts
```

---

## 10. Code Metrics

### Lines of Code by Category:
| Category | LOC | Percentage |
|----------|-----|------------|
| Entity Models (Auto-generated) | ~150,000 | 86.9% |
| ML Models (ModelVersion, etc.) | ~47,000 | 27.2% |
| Apollo Client Infrastructure | ~408 | 0.2% |
| Authentication & Auth | ~394 | 0.2% |
| Server & GraphQL | ~304 | 0.2% |
| Code Generation System | ~2,000 | 1.2% |
| Custom Resolvers | ~500 | 0.3% |
| Tests | ~100 | 0.1% |
| **Total** | **~172,667** | **100%** |

### File Size Distribution:
- **Largest Files:** ModelVersion (26,991), ABTest (22,210), FeatureImportanceAnalysis (12,619)
- **Average File Size:** ~2,656 LOC
- **Smallest Files:** Types and utilities (~40-400 LOC)

---

## 11. Database Schema Overview

### Enums:
- `MarketSentimentLevel` - Market sentiment levels
- `UserRole` - User permission roles
- `ScheduledOptionOrderStatus` - Order statuses
- `TradeStrategy` - Trading strategy types
- Plus 20+ additional enums

### Models:
- **42 Prisma Models** mapped to TypeGraphQL types
- Complex relationships (1:1, 1:many, many:many)
- Generated TypeGraphQL resolvers for all models
- Auto-generated input types for all CRUD operations

---

## 12. Export Surface

### Main Exports (src/index.ts):
```typescript
// Generated types
export type * as types from './generated/typegraphql-prisma/models/index.d.ts';
export * as enums from './generated/typegraphql-prisma/enums/index';
export * from './generated/typeStrings/index';

// Custom resolvers
export * from './resolvers/custom/index';

// Apollo Client
export { getApolloClient, getApolloModules, configureConnectionPool, setTokenProvider, client }
export type { ApolloClientType, InMemoryCache Type, HttpLinkType, NormalizedCacheObject, TokenProvider }

// Entity CRUD operations
const adaptic = {
  aBTest: ABTest,
  account: Account,
  user: User,
  // ... 39 more entities
};
export default adaptic;
```

---

## 13. Key Features Summary

1. **Universal Apollo Client** - Works in server and client environments
2. **Type-Safe GraphQL** - Full TypeScript coverage via TypeGraphQL
3. **Auto-Generated CRUD** - All database operations auto-generated
4. **Advanced Authentication** - JWT encryption, OAuth, session management
5. **Real-Time Subscriptions** - WebSocket support for live updates
6. **Connection Pooling** - Optimized database connection management
7. **ML Model Management** - Comprehensive ML versioning and artifact storage
8. **Financial Data Models** - Complete trading and market data infrastructure
9. **Extensible Resolvers** - Custom resolver support
10. **Production-Ready** - Error handling, retry logic, health monitoring

---

## 14. Technical Debt & Considerations

### Current Issues:
1. **Massive Auto-Generated Files** - Some files exceed 25,000 LOC
2. **Low Test Coverage** - <10% coverage, target is 80%
3. **No Multi-Tenant Support** - Current architecture is single-tenant
4. **Mixed Concerns** - Server and client code in same package
5. **Heavy Dependencies** - Large dependency footprint

### Migration Considerations:
1. **Package Rename** - `@adaptic/backend-legacy` → `@adaptic/backend`
2. **Import Path Updates** - All imports need updating
3. **Monorepo Structure** - Need to reorganize for monorepo
4. **Subpath Exports** - Consider separate exports for apollo, auth, types
5. **Code Splitting** - Separate server and client code

---

## 15. Recommended Improvements

### High Priority:
1. **Test Coverage** - Add comprehensive unit and integration tests
2. **Multi-Tenant Architecture** - Add tenant context and data isolation
3. **Code Organization** - Split into logical submodules
4. **Documentation** - Add JSDoc comments and usage examples
5. **Type Safety** - Remove `any` types, add strict type checking

### Medium Priority:
1. **Performance Optimization** - Optimize large auto-generated files
2. **Error Handling** - Standardize error handling patterns
3. **Logging** - Add structured logging
4. **Monitoring** - Add metrics and observability
5. **Security Audit** - Review authentication and authorization

### Low Priority:
1. **Code Formatting** - Enforce consistent style
2. **Dependency Updates** - Keep dependencies current
3. **Build Optimization** - Reduce build times
4. **Tree Shaking** - Enable better dead code elimination

---

## Appendix A: File Listing

Complete file listing with line counts available in supplementary documentation.

## Appendix B: Dependency Graph

Dependency graph analysis available in supplementary documentation.

## Appendix C: Breaking Changes Log

Breaking changes from previous versions documented separately.
