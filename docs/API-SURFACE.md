# API Surface Documentation

## Overview

This document provides comprehensive documentation of the public API surface for `@adaptic/backend` (formerly `@adaptic/backend-legacy`). It covers all exported modules, functions, types, and usage patterns.

---

## Table of Contents

1. [Main Package Export](#1-main-package-export)
2. [Apollo Client Module](#2-apollo-client-module)
3. [Authentication Module](#3-authentication-module)
4. [Entity Types & CRUD](#4-entity-types--crud)
5. [Custom Resolvers](#5-custom-resolvers)
6. [Utilities](#6-utilities)
7. [Generated Types](#7-generated-types)

---

## 1. Main Package Export

### 1.1 Default Export

The default export provides access to all entity CRUD operations.

```typescript
import adaptic from '@adaptic/backend';

// Example: Access user operations
const user = await adaptic.user.findOne({
  where: { id: 'user-123' }
});
```

### 1.2 Named Exports

```typescript
// All submodule exports are re-exported from main entry
import {
  // Apollo Client
  getApolloClient,
  getApolloModules,
  configureConnectionPool,
  setTokenProvider,
  client,

  // Authentication
  getToken,
  encode,
  decode,
  authMiddleware,

  // Types
  types,
  enums,

  // Resolvers
  OptionsGreeksHistoryCustomResolver,
  OptionsGreeksHistorySystemSummary,

  // Utilities
  removeUndefinedProps
} from '@adaptic/backend';
```

---

## 2. Apollo Client Module

### 2.1 Import Path

```typescript
import { getApolloClient, configureConnectionPool, setTokenProvider } from '@adaptic/backend/apollo';
// OR
import * as BackendApollo from '@adaptic/backend/apollo';
```

### 2.2 Functions

#### `getApolloClient()`

Returns a singleton Apollo Client instance with connection pooling and authentication.

```typescript
async function getApolloClient(): Promise<ApolloClient<NormalizedCacheObject>>
```

**Usage:**
```typescript
import { getApolloClient } from '@adaptic/backend/apollo';

const client = await getApolloClient();

// Execute query
const result = await client.query({
  query: gql`
    query GetUser($id: String!) {
      user(where: { id: $id }) {
        id
        name
        email
      }
    }
  `,
  variables: { id: 'user-123' }
});
```

**Features:**
- Automatic environment detection (server vs client)
- Connection pooling with configurable limits
- Retry logic with exponential backoff
- Authentication header injection
- Error handling and logging

---

#### `getApolloModules()`

Returns the Apollo runtime modules (ApolloClient, InMemoryCache, HttpLink, etc.).

```typescript
async function getApolloModules(): Promise<ApolloModules>

interface ApolloModules {
  ApolloClient: typeof ApolloClient;
  InMemoryCache: typeof InMemoryCache;
  HttpLink: typeof HttpLink;
  gql: typeof gql;
  ApolloError: typeof ApolloError;
  split: typeof split;
  setContext: typeof setContext;
  onError: typeof onError;
}
```

**Usage:**
```typescript
import { getApolloModules } from '@adaptic/backend/apollo';

const { ApolloClient, InMemoryCache, HttpLink, gql } = await getApolloModules();

// Create custom client
const customClient = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.example.com/graphql' }),
  cache: new InMemoryCache()
});
```

---

#### `configureConnectionPool()`

Configures connection pooling behavior for Apollo Client.

```typescript
function configureConnectionPool(config: Partial<ConnectionPoolConfig>): void

interface ConnectionPoolConfig {
  maxConcurrentOperations: number;  // Default: 100
  retryAttempts: number;            // Default: 3
  retryDelay: number;               // Default: 1000 (ms)
  connectionTimeout: number;        // Default: 10000 (ms)
}
```

**Usage:**
```typescript
import { configureConnectionPool } from '@adaptic/backend/apollo';

// Configure before using the client
configureConnectionPool({
  maxConcurrentOperations: 50,
  retryAttempts: 5,
  retryDelay: 2000,
  connectionTimeout: 15000
});
```

---

#### `setTokenProvider()`

Sets a custom token provider for dynamic authentication.

```typescript
function setTokenProvider(provider: TokenProvider): void

type TokenProvider = () => string | Promise<string>
```

**Usage:**
```typescript
import { setTokenProvider } from '@adaptic/backend/apollo';

// Example: NextAuth session token
setTokenProvider(async () => {
  const session = await getSession();
  return session?.accessToken || '';
});

// Example: Client-side storage
setTokenProvider(() => {
  return localStorage.getItem('auth-token') || '';
});
```

---

#### `client`

A Promise that resolves to the Apollo Client instance.

```typescript
const client: Promise<ApolloClient<NormalizedCacheObject>>
```

**Usage:**
```typescript
import { client } from '@adaptic/backend/apollo';

// Wait for client initialization
const apolloClient = await client;
const result = await apolloClient.query({ query: MY_QUERY });
```

**Note:** It's recommended to use `getApolloClient()` instead to ensure proper initialization.

---

### 2.3 Types

```typescript
import type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
  TokenProvider
} from '@adaptic/backend/apollo';

// Type definitions
type ApolloClientType = ApolloClient<NormalizedCacheObject>;
type InMemoryCacheType = InMemoryCache;
type HttpLinkType = HttpLink;
type NormalizedCacheObject = Record<string, any>;
type TokenProvider = () => string | Promise<string>;
```

---

## 3. Authentication Module

### 3.1 Import Path

```typescript
import { getToken, encode, decode, authMiddleware } from '@adaptic/backend/auth';
// OR
import * as BackendAuth from '@adaptic/backend/auth';
```

### 3.2 Functions

#### `getToken()`

Extracts and decodes JWT token from HTTP request.

```typescript
async function getToken<R extends boolean = false>(
  params: GetTokenParams<R>
): Promise<R extends true ? string : Record<string, any> | null>

interface GetTokenParams<R extends boolean = false> {
  req: IncomingRequest;
  secureCookie?: boolean;
  cookieName?: string;
  raw?: R;
  secret?: string | Buffer;
  salt?: string;
  decode?: (params: JWTDecodeParams) => Promise<Record<string, any> | null>;
  logger?: LoggerInstance;
}
```

**Usage:**
```typescript
import { getToken } from '@adaptic/backend/auth';

// In an API route or middleware
const token = await getToken({ req: request });

if (token) {
  console.log('User ID:', token.sub);
  console.log('Email:', token.email);
}

// Get raw token string
const rawToken = await getToken({ req: request, raw: true });
```

**Features:**
- Extracts token from cookies or Authorization header
- Supports multiple cookie names (secure/insecure)
- Decrypts JWE tokens (A256GCM encryption)
- Validates token format and expiry
- Compatible with NextAuth.js

---

#### `encode()`

Encrypts a JWT payload into a JWE string.

```typescript
async function encode(params: JWTEncodeParams): Promise<string>

interface JWTEncodeParams {
  token?: Record<string, any>;
  secret: string | Buffer;
  maxAge?: number;  // Default: 2592000 (30 days)
  salt?: string;
}
```

**Usage:**
```typescript
import { encode } from '@adaptic/backend/auth';

const jwe = await encode({
  token: { sub: 'user-123', email: 'user@example.com' },
  secret: process.env.JWT_SECRET || 'your-secret',
  maxAge: 60 * 60 * 24 * 7  // 7 days
});

// Send token to client
res.setHeader('Set-Cookie', `token=${jwe}; HttpOnly; Secure`);
```

---

#### `decode()`

Decrypts a JWE string into a JWT payload.

```typescript
async function decode(params: JWTDecodeParams): Promise<Record<string, any> | null>

interface JWTDecodeParams {
  token: string;
  secret: string | Buffer;
  salt?: string;
}
```

**Usage:**
```typescript
import { decode } from '@adaptic/backend/auth';

const payload = await decode({
  token: jweToken,
  secret: process.env.JWT_SECRET || 'your-secret'
});

if (payload) {
  console.log('Token payload:', payload);
  console.log('Expires at:', new Date(payload.exp * 1000));
}
```

---

#### `authMiddleware()`

Express middleware for authenticating requests.

```typescript
function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void

interface AuthenticatedRequest extends Request {
  user?: any;
}
```

**Usage:**
```typescript
import express from 'express';
import { authMiddleware } from '@adaptic/backend/auth';

const app = express();

// Apply to specific routes
app.use('/api/protected', authMiddleware);

app.get('/api/protected/data', (req, res) => {
  // req.user is now available
  console.log('Authenticated user:', req.user);
  res.json({ message: 'Protected data' });
});

// Or apply to all routes
app.use(authMiddleware);
```

**Features:**
- Extracts Bearer token from Authorization header
- Verifies JWT signature
- Supports Google OAuth tokens (ya29.*)
- Attaches decoded user to request object
- Returns 401 Unauthorized for invalid tokens

---

### 3.3 Types

```typescript
import type {
  TokenProvider,
  JWTEncodeParams,
  JWTDecodeParams,
  GetTokenParams,
  AuthenticatedRequest
} from '@adaptic/backend/auth';
```

---

## 4. Entity Types & CRUD

### 4.1 Import Path

```typescript
import adaptic from '@adaptic/backend';
// OR
import { entities } from '@adaptic/backend/types';
// OR access individual entities
import { User, Account, Asset } from '@adaptic/backend/types';
```

### 4.2 Available Entities

All 42 entity types with full CRUD operations:

| Entity | Description |
|--------|-------------|
| `aBTest` | A/B testing experiments |
| `account` | OAuth provider accounts |
| `accountLinkingRequest` | Account linking workflows |
| `action` | User action tracking |
| `alert` | User alerts |
| `allocation` | Portfolio allocations |
| `alpacaAccount` | Trading accounts |
| `analyticsConfiguration` | Analytics settings |
| `analyticsSnapshot` | Analytics snapshots |
| `asset` | Financial assets |
| `authenticator` | 2FA authenticators |
| `configuration` | System configuration |
| `connectionHealthSnapshot` | Connection health |
| `customer` | Customer billing |
| `economicEvent` | Economic events |
| `featureImportanceAnalysis` | ML feature importance |
| `institutionalFlowSignal` | Order flow signals |
| `institutionalHolding` | Institutional holdings |
| `institutionalSentimentAlerts` | Sentiment alerts |
| `institutionalSentimentErrors` | Sentiment errors |
| `institutionalSentimentHistory` | Sentiment history |
| `institutionalSentimentMetrics` | Sentiment metrics |
| `linkedProvider` | External providers |
| `mLTrainingData` | ML training data |
| `marketSentiment` | Market sentiment |
| `modelArtifact` | ML model artifacts |
| `modelVersion` | ML model versions |
| `modelVersionArtifact` | Version artifacts |
| `newsArticle` | News articles |
| `newsArticleAssetSentiment` | News sentiment |
| `optionsContract` | Options contracts |
| `optionsGreeksHistory` | Options Greeks |
| `optionsPosition` | Options positions |
| `optionsTradeExecution` | Options trades |
| `portfolioGreeksHistory` | Portfolio Greeks |
| `scheduledOptionOrder` | Scheduled orders |
| `session` | User sessions |
| `systemAlert` | System alerts |
| `trade` | Trade executions |
| `user` | User accounts |
| `verificationToken` | Email verification |

### 4.3 CRUD Operations

Each entity provides the following operations:

#### `findOne()`

Find a single record by unique identifier.

```typescript
async function findOne(args: {
  where: WhereUniqueInput;
  include?: IncludeInput;
}): Promise<Entity | null>
```

**Usage:**
```typescript
import adaptic from '@adaptic/backend';

const user = await adaptic.user.findOne({
  where: { id: 'user-123' }
});

// With relations
const userWithAccounts = await adaptic.user.findOne({
  where: { email: 'user@example.com' },
  include: {
    accounts: true,
    sessions: true
  }
});
```

---

#### `findMany()`

Find multiple records with filtering and pagination.

```typescript
async function findMany(args?: {
  where?: WhereInput;
  orderBy?: OrderByInput;
  take?: number;
  skip?: number;
  include?: IncludeInput;
}): Promise<Entity[]>
```

**Usage:**
```typescript
import adaptic from '@adaptic/backend';

const users = await adaptic.user.findMany({
  where: {
    role: 'ADMIN',
    emailVerified: { not: null }
  },
  orderBy: { createdAt: 'desc' },
  take: 10,
  skip: 0
});

// Get all users
const allUsers = await adaptic.user.findMany();
```

---

#### `create()`

Create a new record.

```typescript
async function create(args: {
  data: CreateInput;
  include?: IncludeInput;
}): Promise<Entity>
```

**Usage:**
```typescript
import adaptic from '@adaptic/backend';

const newUser = await adaptic.user.create({
  data: {
    email: 'new.user@example.com',
    name: 'New User',
    role: 'USER'
  }
});

// With relations
const userWithAccount = await adaptic.user.create({
  data: {
    email: 'user@example.com',
    name: 'User Name',
    accounts: {
      create: {
        provider: 'google',
        providerAccountId: 'google-123',
        type: 'oauth'
      }
    }
  },
  include: {
    accounts: true
  }
});
```

---

#### `update()`

Update an existing record.

```typescript
async function update(args: {
  where: WhereUniqueInput;
  data: UpdateInput;
  include?: IncludeInput;
}): Promise<Entity>
```

**Usage:**
```typescript
import adaptic from '@adaptic/backend';

const updatedUser = await adaptic.user.update({
  where: { id: 'user-123' },
  data: {
    name: 'Updated Name',
    bio: 'New bio'
  }
});

// Update with relations
const userWithNewAccount = await adaptic.user.update({
  where: { id: 'user-123' },
  data: {
    accounts: {
      create: {
        provider: 'github',
        providerAccountId: 'github-456',
        type: 'oauth'
      }
    }
  },
  include: {
    accounts: true
  }
});
```

---

#### `delete()`

Delete a record.

```typescript
async function delete(args: {
  where: WhereUniqueInput;
}): Promise<Entity>
```

**Usage:**
```typescript
import adaptic from '@adaptic/backend';

const deletedUser = await adaptic.user.delete({
  where: { id: 'user-123' }
});
```

---

#### `count()`

Count records matching criteria.

```typescript
async function count(args?: {
  where?: WhereInput;
}): Promise<number>
```

**Usage:**
```typescript
import adaptic from '@adaptic/backend';

const totalUsers = await adaptic.user.count();

const adminCount = await adaptic.user.count({
  where: { role: 'ADMIN' }
});
```

---

### 4.4 Type Definitions

```typescript
import type { User, Account, Asset } from '@adaptic/backend/types';

// Use in function signatures
async function getUser(id: string): Promise<User | null> {
  return adaptic.user.findOne({ where: { id } });
}
```

---

## 5. Custom Resolvers

### 5.1 Import Path

```typescript
import {
  OptionsGreeksHistoryCustomResolver,
  OptionsGreeksHistorySystemSummary
} from '@adaptic/backend/resolvers';
```

### 5.2 Available Resolvers

#### `OptionsGreeksHistoryCustomResolver`

Custom GraphQL resolver for options Greeks calculations.

**Usage:**
```typescript
import { OptionsGreeksHistoryCustomResolver } from '@adaptic/backend/resolvers';
import { buildSchema } from 'type-graphql';

const schema = await buildSchema({
  resolvers: [
    ...otherResolvers,
    OptionsGreeksHistoryCustomResolver
  ]
});
```

---

#### `OptionsGreeksHistorySystemSummary`

System-wide summary resolver for options Greeks data.

**Usage:**
```typescript
import { OptionsGreeksHistorySystemSummary } from '@adaptic/backend/resolvers';
```

---

## 6. Utilities

### 6.1 Import Path

```typescript
import { removeUndefinedProps } from '@adaptic/backend/utils';
```

### 6.2 Functions

#### `removeUndefinedProps()`

Removes undefined properties from an object (useful for cleaning query inputs).

```typescript
function removeUndefinedProps<T extends Record<string, any>>(obj: T): Partial<T>
```

**Usage:**
```typescript
import { removeUndefinedProps } from '@adaptic/backend/utils';

const dirtyData = {
  name: 'John',
  email: 'john@example.com',
  bio: undefined,
  age: undefined
};

const cleanData = removeUndefinedProps(dirtyData);
// Result: { name: 'John', email: 'john@example.com' }
```

---

## 7. Generated Types

### 7.1 Import Path

```typescript
import type { types, enums } from '@adaptic/backend';
// OR
import type { types, enums } from '@adaptic/backend/types';
```

### 7.2 Type Exports

#### Model Types

All Prisma model types are exported under the `types` namespace:

```typescript
import type { types } from '@adaptic/backend';

// Use model types
type User = types.User;
type Account = types.Account;
type Asset = types.Asset;
```

#### Enum Types

All Prisma enums are exported:

```typescript
import { enums } from '@adaptic/backend';

// Use enum values
const role: enums.UserRole = enums.UserRole.ADMIN;
const sentiment: enums.MarketSentimentLevel = enums.MarketSentimentLevel.BULLISH;
const strategy: enums.TradeStrategy = enums.TradeStrategy.MOMENTUM_STRATEGY;
```

**Available Enums:**
- `UserRole` - OWNER, ADMIN, USER
- `MarketSentimentLevel` - VERY_BEARISH, BEARISH, NEUTRAL, BULLISH, VERY_BULLISH, etc.
- `ScheduledOptionOrderStatus` - PENDING, EXECUTED, CANCELED
- `TradeStrategy` - TECHNICAL_ANALYSIS, TREND_FOLLOWING, MOMENTUM_STRATEGY, etc.
- Plus 20+ additional enums

---

## 8. Usage Examples

### 8.1 Complete Example: User Management

```typescript
import adaptic, { getApolloClient, setTokenProvider } from '@adaptic/backend';

// Configure authentication
setTokenProvider(async () => {
  // Get token from your auth system
  return process.env.AUTH_TOKEN || '';
});

// Get Apollo Client
const client = await getApolloClient();

// Create a new user
const newUser = await adaptic.user.create({
  data: {
    email: 'user@example.com',
    name: 'John Doe',
    role: 'USER',
    customer: {
      create: {
        name: 'John Doe',
        plan: 'PRO'
      }
    }
  },
  include: {
    customer: true
  }
});

console.log('Created user:', newUser);

// Find users
const users = await adaptic.user.findMany({
  where: {
    role: 'USER',
    emailVerified: { not: null }
  },
  include: {
    accounts: true,
    sessions: true
  },
  orderBy: { createdAt: 'desc' },
  take: 10
});

console.log(`Found ${users.length} users`);

// Update user
const updated = await adaptic.user.update({
  where: { id: newUser.id },
  data: {
    bio: 'Software developer',
    jobTitle: 'Senior Engineer'
  }
});

// Count users
const totalUsers = await adaptic.user.count();
console.log(`Total users: ${totalUsers}`);
```

### 8.2 Complete Example: Trading Operations

```typescript
import adaptic from '@adaptic/backend';
import { enums } from '@adaptic/backend';

// Create a trading account
const tradingAccount = await adaptic.alpacaAccount.create({
  data: {
    userId: 'user-123',
    type: 'LIVE',
    APIKey: 'your-api-key',
    APISecret: 'your-api-secret',
    tradeAllocationPct: 0.5,
    autoAllocation: true,
    allocation: {
      create: {
        equities: 0.4,
        options: 0.3,
        crypto: 0.2,
        stocks: 0.1
      }
    }
  },
  include: {
    allocation: true
  }
});

// Execute a trade
const trade = await adaptic.trade.create({
  data: {
    userId: 'user-123',
    alpacaAccountId: tradingAccount.id,
    assetId: 'asset-456',
    type: 'BUY',
    quantity: 100,
    price: 150.50,
    strategy: enums.TradeStrategy.MOMENTUM_STRATEGY,
    executedAt: new Date()
  }
});

// Query options positions
const positions = await adaptic.optionsPosition.findMany({
  where: {
    alpacaAccountId: tradingAccount.id,
    status: 'OPEN'
  },
  include: {
    optionsContract: true,
    optionsGreeksHistory: {
      orderBy: { timestamp: 'desc' },
      take: 1
    }
  }
});

console.log(`Active positions: ${positions.length}`);
```

### 8.3 Complete Example: Authentication Flow

```typescript
import express from 'express';
import { getToken, authMiddleware, encode } from '@adaptic/backend/auth';
import adaptic from '@adaptic/backend';

const app = express();

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  // Verify credentials (implement your logic)
  const user = await adaptic.user.findOne({
    where: { email }
  });

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Create session token
  const token = await encode({
    token: {
      sub: user.id,
      email: user.email,
      role: user.role
    },
    secret: process.env.JWT_SECRET || 'your-secret',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  });

  res.json({ token, user });
});

// Protected endpoint
app.get('/api/user/profile', authMiddleware, async (req, res) => {
  const token = await getToken({ req });

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const user = await adaptic.user.findOne({
    where: { id: token.sub },
    include: {
      accounts: true,
      customer: true
    }
  });

  res.json({ user });
});

app.listen(4000);
```

---

## 9. Best Practices

### 9.1 Apollo Client

1. **Initialize Once:** Always use `getApolloClient()` to get the singleton instance
2. **Configure Early:** Call `configureConnectionPool()` before first use
3. **Token Provider:** Use `setTokenProvider()` for dynamic authentication
4. **Error Handling:** Wrap operations in try-catch blocks

### 9.2 Entity Operations

1. **Include Relations:** Use `include` to fetch related data in one query
2. **Filter Precisely:** Use specific `where` clauses to reduce data transfer
3. **Paginate:** Always use `take` and `skip` for large datasets
4. **Count First:** Use `count()` before `findMany()` for pagination UX

### 9.3 Authentication

1. **Validate Tokens:** Always validate tokens on the server side
2. **Secure Secrets:** Store JWT secrets in environment variables
3. **Short Expiry:** Use short token expiry times for security
4. **Refresh Tokens:** Implement refresh token logic for long sessions

### 9.4 Type Safety

1. **Import Types:** Always import and use TypeScript types
2. **Avoid Any:** Never use `any` type, use specific types
3. **Strict Mode:** Enable TypeScript strict mode
4. **Type Guards:** Use type guards for runtime type checking

---

## 10. API Versioning

### Current Version: 1.0.0

**Stability:** Stable
**Deprecation Policy:** 12 months notice for breaking changes
**Support:** Long-term support (LTS)

### Version History

- **1.0.0** - Initial stable release (renamed from backend-legacy)
- **0.0.34** - Final version of @adaptic/backend-legacy

---

## 11. Support & Resources

### Documentation
- API Reference: [Link to API docs]
- Migration Guide: See `RENAME-MIGRATION-PLAN.md`
- Examples: See `examples/` directory

### Community
- GitHub: [Link to repo]
- Discord: [Link to Discord]
- Stack Overflow: Tag with `adaptic-backend`

### Support
- Email: support@adaptic.ai
- Issues: [GitHub Issues]

---

## Appendix A: Complete Type Definitions

See TypeScript definition files in `dist/` for complete type information.

## Appendix B: GraphQL Schema

See `schema.graphql` for complete GraphQL schema documentation.

## Appendix C: Error Codes

See `ERROR_CODES.md` for complete error code documentation.
