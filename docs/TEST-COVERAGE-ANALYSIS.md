# Test Coverage Analysis & Requirements

## Overview

This document provides a comprehensive analysis of the current test coverage for `@adaptic/backend` and outlines the requirements and strategy for achieving the target 80% code coverage.

---

## 1. Current State Assessment

### 1.1 Current Test Coverage

**Overall Coverage:** ~5% (estimated)

**Existing Tests:**
- `src/tests/utils.test.ts` - Utility function tests (minimal/empty)
- `src/tests/parser.test.ts` - Schema parser tests (minimal/empty)
- `src/tests/generator.test.ts` - Code generator tests (minimal/empty)

**Test Infrastructure:**
- No test framework explicitly configured in package.json
- No CI/CD test integration
- No coverage reporting configured
- No test database setup

### 1.2 Untested Areas

**Critical Gaps:**

1. **Apollo Client Module** (0% coverage)
   - Connection pooling logic
   - Retry mechanisms
   - Token provider functionality
   - Environment detection

2. **Authentication Module** (0% coverage)
   - JWT encoding/decoding
   - Token extraction
   - Token validation
   - Middleware authentication

3. **Entity CRUD Operations** (0% coverage)
   - All 42 entity models
   - GraphQL operations
   - Relationship handling
   - Error handling

4. **GraphQL Resolvers** (0% coverage)
   - Custom resolvers
   - Generated resolvers
   - Query execution
   - Mutation handling

5. **Server Setup** (0% coverage)
   - Apollo Server configuration
   - WebSocket server
   - Error handling
   - Health checks

---

## 2. Test Coverage Goals

### 2.1 Overall Target

**Target Coverage:** 80%
**Timeline:** 8 weeks
**Priority:** High

### 2.2 Per-Module Targets

| Module | Current | Target | Priority |
|--------|---------|--------|----------|
| Apollo Client | 0% | 90% | Critical |
| Authentication | 0% | 95% | Critical |
| Entity CRUD | 0% | 70% | High |
| GraphQL Resolvers | 0% | 75% | High |
| Server Setup | 0% | 60% | Medium |
| Code Generation | 5% | 80% | Medium |
| Utilities | 0% | 95% | Low |

---

## 3. Testing Strategy

### 3.1 Testing Pyramid

```
    /\
   /  \    E2E Tests (10%)
  /____\   Integration Tests (30%)
 /      \  Unit Tests (60%)
/__________\
```

**Distribution:**
- **60% Unit Tests** - Test individual functions and classes
- **30% Integration Tests** - Test module interactions
- **10% E2E Tests** - Test complete user workflows

### 3.2 Test Framework Selection

**Recommended Stack:**

1. **Test Runner:** Jest
   - Industry standard
   - Great TypeScript support
   - Built-in coverage reporting
   - Snapshot testing
   - Mocking capabilities

2. **Assertion Library:** Jest (built-in)
   - expect() API
   - Matchers for async code
   - Custom matchers

3. **Mocking:** Jest + ts-mockito
   - Mock functions
   - Mock modules
   - Mock Prisma client
   - Mock Apollo Client

4. **Test Database:** PostgreSQL + Testcontainers
   - Real database for integration tests
   - Isolated test environment
   - Automatic cleanup

5. **Coverage:** Istanbul (via Jest)
   - Line coverage
   - Branch coverage
   - Function coverage
   - Statement coverage

### 3.3 Test Configuration

#### jest.config.js

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/generated/**',
    '!src/tests/**',
    '!src/**/*.test.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  coverageReporters: ['text', 'lcov', 'html'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  testTimeout: 30000,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
```

#### package.json updates

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --maxWorkers=2",
    "test:unit": "jest --testPathPattern=unit",
    "test:integration": "jest --testPathPattern=integration",
    "test:e2e": "jest --testPathPattern=e2e"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "ts-jest": "^29.1.1",
    "@types/jest": "^29.5.5",
    "ts-mockito": "^2.6.1",
    "testcontainers": "^10.2.1",
    "@testcontainers/postgresql": "^10.2.1"
  }
}
```

---

## 4. Test Implementation Plan

### 4.1 Phase 1: Infrastructure Setup (Week 1)

#### Tasks:

1. **Install Test Dependencies**
```bash
npm install --save-dev jest ts-jest @types/jest ts-mockito testcontainers @testcontainers/postgresql
```

2. **Create Test Configuration**
- jest.config.js
- src/tests/setup.ts
- src/tests/teardown.ts
- src/tests/helpers/

3. **Setup Test Database**
```typescript
// src/tests/setup.ts
import { PostgreSqlContainer } from '@testcontainers/postgresql';
import { PrismaClient } from '@prisma/client';

let postgresContainer: PostgreSqlContainer;
let prisma: PrismaClient;

beforeAll(async () => {
  // Start PostgreSQL container
  postgresContainer = await new PostgreSqlContainer()
    .withDatabase('test')
    .withUsername('test')
    .withPassword('test')
    .start();

  // Set database URL
  process.env.DATABASE_URL = postgresContainer.getConnectionUri();

  // Initialize Prisma
  prisma = new PrismaClient();

  // Run migrations
  await prisma.$executeRaw`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  // Run Prisma migrations
});

afterAll(async () => {
  await prisma.$disconnect();
  await postgresContainer.stop();
});

export { prisma };
```

4. **Create Test Helpers**
```typescript
// src/tests/helpers/factories.ts
export function createMockUser(overrides = {}) {
  return {
    id: 'user-123',
    email: 'test@example.com',
    name: 'Test User',
    role: 'USER',
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides
  };
}

export function createMockTenant(overrides = {}) {
  return {
    id: 'tenant-123',
    name: 'Test Tenant',
    slug: 'test',
    status: 'ACTIVE',
    ...overrides
  };
}
```

### 4.2 Phase 2: Apollo Client Tests (Week 2)

#### Test Files:

**src/apollo/__tests__/client.test.ts**
```typescript
import { getApolloClient, configureConnectionPool, setTokenProvider } from '../client';
import { ApolloClient } from '@apollo/client';

describe('Apollo Client', () => {
  describe('getApolloClient', () => {
    it('should return a singleton instance', async () => {
      const client1 = await getApolloClient();
      const client2 = await getApolloClient();

      expect(client1).toBe(client2);
      expect(client1).toBeInstanceOf(ApolloClient);
    });

    it('should initialize with default configuration', async () => {
      const client = await getApolloClient();

      expect(client.cache).toBeDefined();
      expect(client.link).toBeDefined();
    });
  });

  describe('configureConnectionPool', () => {
    it('should configure connection pool settings', () => {
      const config = {
        maxConcurrentOperations: 50,
        retryAttempts: 5
      };

      expect(() => configureConnectionPool(config)).not.toThrow();
    });
  });

  describe('setTokenProvider', () => {
    it('should set custom token provider', async () => {
      const mockProvider = jest.fn(() => 'mock-token');

      setTokenProvider(mockProvider);

      // Client should be reset
      // Next request should use new provider
    });

    it('should support async token providers', async () => {
      const mockProvider = jest.fn(async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return 'async-token';
      });

      setTokenProvider(mockProvider);
    });
  });

  describe('Token validation', () => {
    it('should validate JWT format', async () => {
      const validJWT = 'eyJhbGc.eyJzdWI.signature';
      const invalidJWT = 'not-a-jwt';

      // Test validation logic
    });

    it('should accept Google OAuth tokens', async () => {
      const googleToken = 'ya29.a0AfB_byC...';

      // Should not throw
    });
  });

  describe('Retry logic', () => {
    it('should retry failed operations', async () => {
      // Mock failed operation
      // Verify retry with exponential backoff
    });

    it('should respect retry limits', async () => {
      // Verify max retries respected
    });
  });
});
```

**Coverage Target:** 90%

### 4.3 Phase 3: Authentication Tests (Week 3)

#### Test Files:

**src/auth/__tests__/getToken.test.ts**
```typescript
import { getToken, encode, decode } from '../getToken';
import { Request } from 'express';

describe('JWT Token Management', () => {
  describe('encode', () => {
    it('should encode a token payload', async () => {
      const token = await encode({
        token: { sub: 'user-123', email: 'user@example.com' },
        secret: 'test-secret'
      });

      expect(token).toBeTruthy();
      expect(typeof token).toBe('string');
      expect(token.split('.')).toHaveLength(5); // JWE format
    });

    it('should include expiry and jti', async () => {
      const token = await encode({
        token: { sub: 'user-123' },
        secret: 'test-secret',
        maxAge: 3600
      });

      const decoded = await decode({
        token,
        secret: 'test-secret'
      });

      expect(decoded).toHaveProperty('exp');
      expect(decoded).toHaveProperty('jti');
      expect(decoded).toHaveProperty('iat');
    });
  });

  describe('decode', () => {
    it('should decode a valid token', async () => {
      const payload = { sub: 'user-123', email: 'user@example.com' };

      const token = await encode({
        token: payload,
        secret: 'test-secret'
      });

      const decoded = await decode({
        token,
        secret: 'test-secret'
      });

      expect(decoded?.sub).toBe('user-123');
      expect(decoded?.email).toBe('user@example.com');
    });

    it('should return null for invalid token', async () => {
      const result = await decode({
        token: 'invalid-token',
        secret: 'test-secret'
      });

      expect(result).toBeNull();
    });

    it('should return null for expired token', async () => {
      const token = await encode({
        token: { sub: 'user-123' },
        secret: 'test-secret',
        maxAge: -1 // Already expired
      });

      const decoded = await decode({
        token,
        secret: 'test-secret'
      });

      // Should handle expired token
    });
  });

  describe('getToken', () => {
    it('should extract token from Authorization header', async () => {
      const mockRequest = {
        headers: {
          authorization: 'Bearer eyJhbGc...'
        },
        cookies: {}
      } as any as Request;

      const token = await getToken({
        req: mockRequest,
        raw: true
      });

      expect(token).toBeTruthy();
    });

    it('should extract token from cookie', async () => {
      const mockRequest = {
        headers: {},
        cookies: {
          'next-auth.session-token': 'eyJhbGc...'
        }
      } as any as Request;

      const token = await getToken({
        req: mockRequest,
        raw: true
      });

      expect(token).toBeTruthy();
    });

    it('should return null when no token present', async () => {
      const mockRequest = {
        headers: {},
        cookies: {}
      } as any as Request;

      const token = await getToken({
        req: mockRequest
      });

      expect(token).toBeNull();
    });
  });
});
```

**src/auth/__tests__/middleware.test.ts**
```typescript
import { authMiddleware } from '../middleware';
import { Request, Response, NextFunction } from 'express';

describe('Auth Middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction;

  beforeEach(() => {
    mockRequest = {
      headers: {}
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    nextFunction = jest.fn();
  });

  it('should call next() with valid token', async () => {
    mockRequest.headers = {
      authorization: 'Bearer valid-token'
    };

    await authMiddleware(mockRequest as any, mockResponse as any, nextFunction);

    expect(nextFunction).toHaveBeenCalled();
    expect(mockRequest.user).toBeDefined();
  });

  it('should return 401 with no token', async () => {
    await authMiddleware(mockRequest as any, mockResponse as any, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.send).toHaveBeenCalledWith({ error: 'Unauthorized' });
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it('should handle Google OAuth tokens', async () => {
    mockRequest.headers = {
      authorization: 'Bearer ya29.google-token'
    };

    await authMiddleware(mockRequest as any, mockResponse as any, nextFunction);

    expect(nextFunction).toHaveBeenCalled();
    expect(mockRequest.user).toHaveProperty('provider', 'google');
  });
});
```

**Coverage Target:** 95%

### 4.4 Phase 4: Entity CRUD Tests (Week 4-5)

#### Test Pattern for Each Entity:

**src/types/entities/__tests__/User.test.ts**
```typescript
import { User } from '../User';
import { prisma } from '../../../tests/setup';
import { createMockUser } from '../../../tests/helpers/factories';

describe('User Entity', () => {
  beforeEach(async () => {
    // Clean up database
    await prisma.user.deleteMany();
  });

  describe('findOne', () => {
    it('should find a user by id', async () => {
      const mockUser = createMockUser();
      await prisma.user.create({ data: mockUser });

      const found = await User.findOne({
        where: { id: mockUser.id }
      });

      expect(found).toBeDefined();
      expect(found?.id).toBe(mockUser.id);
      expect(found?.email).toBe(mockUser.email);
    });

    it('should return null for non-existent user', async () => {
      const found = await User.findOne({
        where: { id: 'non-existent' }
      });

      expect(found).toBeNull();
    });

    it('should include relations', async () => {
      const mockUser = createMockUser();
      await prisma.user.create({
        data: {
          ...mockUser,
          accounts: {
            create: {
              provider: 'google',
              providerAccountId: 'google-123',
              type: 'oauth'
            }
          }
        }
      });

      const found = await User.findOne({
        where: { id: mockUser.id },
        include: { accounts: true }
      });

      expect(found?.accounts).toHaveLength(1);
    });
  });

  describe('findMany', () => {
    it('should find all users', async () => {
      await prisma.user.createMany({
        data: [
          createMockUser({ id: '1', email: 'user1@example.com' }),
          createMockUser({ id: '2', email: 'user2@example.com' })
        ]
      });

      const users = await User.findMany();

      expect(users).toHaveLength(2);
    });

    it('should filter users by role', async () => {
      await prisma.user.createMany({
        data: [
          createMockUser({ id: '1', role: 'ADMIN' }),
          createMockUser({ id: '2', role: 'USER' })
        ]
      });

      const admins = await User.findMany({
        where: { role: 'ADMIN' }
      });

      expect(admins).toHaveLength(1);
      expect(admins[0].role).toBe('ADMIN');
    });

    it('should support pagination', async () => {
      // Create 10 users
      const users = Array.from({ length: 10 }, (_, i) =>
        createMockUser({ id: `user-${i}`, email: `user${i}@example.com` })
      );
      await prisma.user.createMany({ data: users });

      const page1 = await User.findMany({
        take: 5,
        skip: 0,
        orderBy: { createdAt: 'asc' }
      });

      const page2 = await User.findMany({
        take: 5,
        skip: 5,
        orderBy: { createdAt: 'asc' }
      });

      expect(page1).toHaveLength(5);
      expect(page2).toHaveLength(5);
      expect(page1[0].id).not.toBe(page2[0].id);
    });
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const userData = {
        email: 'new@example.com',
        name: 'New User',
        role: 'USER'
      };

      const created = await User.create({
        data: userData
      });

      expect(created).toBeDefined();
      expect(created.email).toBe(userData.email);
      expect(created.id).toBeTruthy();
    });

    it('should create user with relations', async () => {
      const created = await User.create({
        data: {
          email: 'user@example.com',
          name: 'User',
          accounts: {
            create: {
              provider: 'google',
              providerAccountId: 'google-123',
              type: 'oauth'
            }
          }
        },
        include: { accounts: true }
      });

      expect(created.accounts).toHaveLength(1);
    });
  });

  describe('update', () => {
    it('should update user fields', async () => {
      const user = await prisma.user.create({
        data: createMockUser()
      });

      const updated = await User.update({
        where: { id: user.id },
        data: { name: 'Updated Name' }
      });

      expect(updated.name).toBe('Updated Name');
    });
  });

  describe('delete', () => {
    it('should delete a user', async () => {
      const user = await prisma.user.create({
        data: createMockUser()
      });

      await User.delete({
        where: { id: user.id }
      });

      const found = await prisma.user.findUnique({
        where: { id: user.id }
      });

      expect(found).toBeNull();
    });
  });

  describe('count', () => {
    it('should count all users', async () => {
      await prisma.user.createMany({
        data: [
          createMockUser({ id: '1' }),
          createMockUser({ id: '2' })
        ]
      });

      const count = await User.count();

      expect(count).toBe(2);
    });

    it('should count with filters', async () => {
      await prisma.user.createMany({
        data: [
          createMockUser({ id: '1', role: 'ADMIN' }),
          createMockUser({ id: '2', role: 'USER' })
        ]
      });

      const adminCount = await User.count({
        where: { role: 'ADMIN' }
      });

      expect(adminCount).toBe(1);
    });
  });
});
```

**Apply this pattern to all 42 entities**

**Coverage Target:** 70%

### 4.5 Phase 5: GraphQL Resolver Tests (Week 6)

**src/resolvers/__tests__/custom-resolvers.test.ts**
```typescript
import { buildSchema } from 'type-graphql';
import { graphql } from 'graphql';
import { OptionsGreeksHistoryCustomResolver } from '../custom/OptionsGreeksHistoryCustomResolver';
import { prisma } from '../../tests/setup';

describe('Custom GraphQL Resolvers', () => {
  let schema: any;

  beforeAll(async () => {
    schema = await buildSchema({
      resolvers: [OptionsGreeksHistoryCustomResolver],
      validate: false
    });
  });

  describe('OptionsGreeksHistoryCustomResolver', () => {
    it('should execute custom query', async () => {
      const query = `
        query {
          customOptionsGreeks {
            delta
            gamma
            theta
            vega
          }
        }
      `;

      const result = await graphql({
        schema,
        source: query,
        contextValue: { prisma }
      });

      expect(result.errors).toBeUndefined();
      expect(result.data).toBeDefined();
    });
  });
});
```

**Coverage Target:** 75%

### 4.6 Phase 6: Integration Tests (Week 7)

**src/__tests__/integration/user-workflow.test.ts**
```typescript
import request from 'supertest';
import { app } from '../../server';
import { prisma } from '../../tests/setup';

describe('User Management Workflow', () => {
  it('should complete full user lifecycle', async () => {
    // 1. Create user
    const createResponse = await request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            createUser(data: {
              email: "test@example.com"
              name: "Test User"
            }) {
              id
              email
            }
          }
        `
      });

    expect(createResponse.status).toBe(200);
    const userId = createResponse.body.data.createUser.id;

    // 2. Find user
    const findResponse = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            user(where: { id: "${userId}" }) {
              id
              email
              name
            }
          }
        `
      });

    expect(findResponse.body.data.user).toBeDefined();

    // 3. Update user
    const updateResponse = await request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            updateUser(
              where: { id: "${userId}" }
              data: { name: "Updated Name" }
            ) {
              name
            }
          }
        `
      });

    expect(updateResponse.body.data.updateUser.name).toBe('Updated Name');

    // 4. Delete user
    await request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            deleteUser(where: { id: "${userId}" }) {
              id
            }
          }
        `
      });

    // Verify deletion
    const verifyResponse = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            user(where: { id: "${userId}" }) {
              id
            }
          }
        `
      });

    expect(verifyResponse.body.data.user).toBeNull();
  });
});
```

**Coverage Target:** Integration tests contribute to overall coverage

### 4.7 Phase 7: E2E Tests (Week 8)

**src/__tests__/e2e/trading-flow.test.ts**
```typescript
describe('Complete Trading Flow', () => {
  it('should execute a complete trade', async () => {
    // 1. Authenticate
    // 2. Create trading account
    // 3. Link to Alpaca
    // 4. Execute trade
    // 5. Check position
    // 6. Close position
  });
});
```

**Coverage Target:** E2E tests validate critical paths

---

## 5. Mock Strategies

### 5.1 Prisma Client Mocking

**Using jest-mock-extended:**
```typescript
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';

export const prismaMock = mockDeep<PrismaClient>();

beforeEach(() => {
  mockReset(prismaMock);
});

// Usage in tests
prismaMock.user.findUnique.mockResolvedValue(mockUser);
```

### 5.2 Apollo Client Mocking

**Using MockedProvider:**
```typescript
import { MockedProvider } from '@apollo/client/testing';

const mocks = [
  {
    request: {
      query: GET_USER,
      variables: { id: 'user-123' }
    },
    result: {
      data: {
        user: { id: 'user-123', email: 'user@example.com' }
      }
    }
  }
];

// Use in tests
<MockedProvider mocks={mocks}>
  <ComponentUnderTest />
</MockedProvider>
```

### 5.3 External Service Mocking

**Mock external APIs:**
```typescript
jest.mock('@aws-sdk/client-lambda', () => ({
  LambdaClient: jest.fn(),
  InvokeCommand: jest.fn()
}));
```

---

## 6. CI/CD Integration

### 6.1 GitHub Actions Workflow

**.github/workflows/test.yml**
```yaml
name: Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
      - uses: actions/checkout@v3

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run type check
        run: npm run type-check

      - name: Run tests
        run: npm run test:ci

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          files: ./coverage/lcov.info
          fail_ci_if_error: true

      - name: Check coverage threshold
        run: |
          COVERAGE=$(cat coverage/coverage-summary.json | jq '.total.lines.pct')
          if (( $(echo "$COVERAGE < 80" | bc -l) )); then
            echo "Coverage $COVERAGE% is below threshold 80%"
            exit 1
          fi
```

### 6.2 Pre-commit Hooks

**Using husky:**
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint && npm run type-check",
      "pre-push": "npm run test"
    }
  }
}
```

---

## 7. Test Documentation

### 7.1 Test Naming Convention

**Pattern:**
```typescript
describe('[Module/Class Name]', () => {
  describe('[Method/Function Name]', () => {
    it('should [expected behavior] when [condition]', () => {
      // Test implementation
    });
  });
});
```

**Examples:**
```typescript
describe('User Entity', () => {
  describe('findOne', () => {
    it('should return user when valid ID provided', () => {});
    it('should return null when user not found', () => {});
    it('should include relations when specified', () => {});
  });
});
```

### 7.2 Test Documentation

**Add JSDoc comments to test files:**
```typescript
/**
 * Tests for User entity CRUD operations
 *
 * Covers:
 * - Finding users (findOne, findMany)
 * - Creating users
 * - Updating users
 * - Deleting users
 * - Counting users
 * - Relationship handling
 */
describe('User Entity', () => {
  // ...
});
```

---

## 8. Performance Testing

### 8.1 Load Testing

**Using Artillery:**
```yaml
config:
  target: 'http://localhost:4000'
  phases:
    - duration: 60
      arrivalRate: 10

scenarios:
  - name: 'GraphQL Query Load Test'
    flow:
      - post:
          url: '/graphql'
          json:
            query: '{ users { id email } }'
```

### 8.2 Benchmarking

**Using Benchmark.js:**
```typescript
import Benchmark from 'benchmark';

const suite = new Benchmark.Suite();

suite
  .add('User.findOne', async () => {
    await User.findOne({ where: { id: 'user-123' } });
  })
  .add('User.findMany', async () => {
    await User.findMany({ take: 10 });
  })
  .on('cycle', (event: any) => {
    console.log(String(event.target));
  })
  .run({ async: true });
```

---

## 9. Timeline & Milestones

| Week | Phase | Deliverables | Coverage |
|------|-------|--------------|----------|
| 1 | Infrastructure Setup | Test framework configured, helpers created | 5% → 10% |
| 2 | Apollo Client Tests | All Apollo Client tests complete | 10% → 25% |
| 3 | Authentication Tests | All auth tests complete | 25% → 40% |
| 4 | Entity CRUD Tests (Part 1) | 21 entities tested | 40% → 55% |
| 5 | Entity CRUD Tests (Part 2) | All 42 entities tested | 55% → 70% |
| 6 | GraphQL Resolver Tests | All resolver tests complete | 70% → 75% |
| 7 | Integration Tests | Integration test suite complete | 75% → 78% |
| 8 | E2E Tests & Polish | E2E tests, documentation | 78% → 80%+ |

---

## 10. Success Metrics

### 10.1 Coverage Metrics

**Minimum Thresholds:**
- Overall coverage: 80%
- Line coverage: 80%
- Branch coverage: 80%
- Function coverage: 80%
- Statement coverage: 80%

### 10.2 Quality Metrics

- Test reliability: 99%+ pass rate
- Test execution time: < 5 minutes
- No flaky tests
- All tests documented
- 100% of critical paths covered

### 10.3 Process Metrics

- PR requires tests for new code
- Coverage cannot decrease
- All tests must pass before merge
- Test coverage reported in PRs

---

## 11. Maintenance Plan

### 11.1 Ongoing Testing

- Add tests for all new features
- Update tests when refactoring
- Remove tests for deleted code
- Keep test dependencies updated

### 11.2 Test Review

- Review test coverage monthly
- Identify gaps and add tests
- Remove obsolete tests
- Optimize slow tests

### 11.3 Documentation

- Keep test documentation updated
- Document testing patterns
- Share test examples
- Onboard new developers

---

## Appendix A: Test Utilities Library

Complete test utilities and helpers available in `src/tests/helpers/`.

## Appendix B: Mock Data Factories

Complete mock data factory functions available in `src/tests/helpers/factories.ts`.

## Appendix C: Coverage Reports

Coverage reports published to Codecov after each CI run.
