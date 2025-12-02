# Package Rename & Monorepo Migration Plan

## Overview

This document outlines the comprehensive plan for renaming `@adaptic/backend-legacy` to `@adaptic/backend` and migrating it into the Adaptic monorepo structure.

---

## 1. Current State

### 1.1 Current Package Structure

```
@adaptic/backend-legacy/
├── package.json (name: "@adaptic/backend-legacy", version: "0.0.34")
├── src/
│   ├── [42 Entity Model Files]      # ~150K LOC of auto-generated CRUD
│   ├── apollo-client.client.ts      # Client-side Apollo implementation
│   ├── apollo-client.server.ts      # Server-side Apollo implementation
│   ├── client.ts                    # Apollo Client facade
│   ├── server.ts                    # Apollo Server setup
│   ├── getToken.ts                  # JWT token management
│   ├── prismaClient.ts              # Prisma client
│   ├── utils.ts                     # Shared utilities
│   ├── index.ts                     # Main entry point
│   ├── middleware/
│   │   └── auth.ts
│   ├── modules/                     # Code generation system
│   │   ├── generator.ts
│   │   ├── parser.ts
│   │   ├── utils.ts
│   │   └── ...
│   ├── resolvers/
│   │   └── custom/
│   │       ├── OptionsGreeksHistoryCustomResolver.ts
│   │       └── OptionsGreeksHistorySystemSummary.ts
│   ├── scripts/
│   │   └── ...
│   └── tests/
│       └── ...
├── prisma/
│   └── schema.prisma
├── tsconfig.json
└── README.md
```

### 1.2 Current Export Strategy

**Single Entry Point:**
- Main: `dist/server.js`
- Types: `dist/index.d.ts`

**Exports:**
```typescript
// From index.ts
export type * as types from './generated/typegraphql-prisma/models/index.d.ts';
export * as enums from './generated/typegraphql-prisma/enums/index';
export * from './generated/typeStrings/index';
export * from './resolvers/custom/index';
export { getApolloClient, getApolloModules, configureConnectionPool, setTokenProvider, client };
export type { ApolloClientType, InMemoryCacheType, HttpLinkType, NormalizedCacheObject, TokenProvider };
export default adaptic; // All entity CRUD operations
```

### 1.3 Current Import Patterns

**Consumer Import Examples:**
```typescript
// Default import for entity operations
import adaptic from '@adaptic/backend-legacy';
await adaptic.user.findOne({ where: { id: '123' } });

// Named imports for Apollo Client
import { getApolloClient, setTokenProvider } from '@adaptic/backend-legacy';

// Type imports
import type { types } from '@adaptic/backend-legacy';
```

---

## 2. Target State

### 2.1 Target Monorepo Structure

```
packages/
└── backend/                          # Renamed from backend-legacy
    ├── package.json (name: "@adaptic/backend", version: "1.0.0")
    ├── src/
    │   ├── apollo/                   # Apollo Client module
    │   │   ├── client.ts             # Main client facade
    │   │   ├── server-impl.ts        # Server implementation
    │   │   ├── client-impl.ts        # Client implementation
    │   │   ├── config.ts             # Connection pool config
    │   │   └── index.ts              # Apollo exports
    │   ├── auth/                     # Authentication module
    │   │   ├── getToken.ts           # JWT token management
    │   │   ├── middleware.ts         # Auth middleware
    │   │   └── index.ts              # Auth exports
    │   ├── generated/                # Generated code (unchanged)
    │   │   ├── typegraphql-prisma/
    │   │   └── typeStrings/
    │   ├── types/                    # Core entity types
    │   │   ├── entities/             # Entity CRUD wrappers
    │   │   │   ├── User.ts
    │   │   │   ├── Account.ts
    │   │   │   └── ... (40 more)
    │   │   ├── generated.ts          # Re-export generated types
    │   │   └── index.ts              # Type exports
    │   ├── resolvers/                # Custom GraphQL resolvers
    │   │   ├── custom/
    │   │   └── index.ts
    │   ├── server/                   # Server module
    │   │   ├── server.ts             # Apollo Server setup
    │   │   ├── prismaClient.ts       # Prisma client
    │   │   └── index.ts              # Server exports
    │   ├── codegen/                  # Code generation tools
    │   │   ├── generator.ts
    │   │   ├── parser.ts
    │   │   ├── utils.ts
    │   │   └── index.ts
    │   ├── utils/                    # Shared utilities
    │   │   ├── utils.ts
    │   │   └── index.ts
    │   └── index.ts                  # Main package entry
    ├── prisma/
    │   └── schema.prisma
    ├── scripts/
    │   └── ...
    ├── tests/
    │   └── ... (expanded test coverage)
    ├── tsconfig.json
    └── README.md
```

### 2.2 Target Export Strategy

**Subpath Exports (package.json):**
```json
{
  "name": "@adaptic/backend",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./apollo": {
      "import": "./dist/apollo/index.js",
      "require": "./dist/apollo/index.js",
      "types": "./dist/apollo/index.d.ts"
    },
    "./auth": {
      "import": "./dist/auth/index.js",
      "require": "./dist/auth/index.js",
      "types": "./dist/auth/index.d.ts"
    },
    "./types": {
      "import": "./dist/types/index.js",
      "require": "./dist/types/index.js",
      "types": "./dist/types/index.d.ts"
    },
    "./server": {
      "import": "./dist/server/index.js",
      "require": "./dist/server/index.js",
      "types": "./dist/server/index.d.ts"
    },
    "./resolvers": {
      "import": "./dist/resolvers/index.js",
      "require": "./dist/resolvers/index.js",
      "types": "./dist/resolvers/index.d.ts"
    },
    "./utils": {
      "import": "./dist/utils/index.js",
      "require": "./dist/utils/index.js",
      "types": "./dist/utils/index.d.ts"
    }
  }
}
```

### 2.3 Target Import Patterns

**New Import Examples:**
```typescript
// Option 1: Main entry (all exports)
import adaptic from '@adaptic/backend';
await adaptic.user.findOne({ where: { id: '123' } });

// Option 2: Subpath imports (tree-shakeable)
import { getApolloClient } from '@adaptic/backend/apollo';
import { getToken } from '@adaptic/backend/auth';
import type { User } from '@adaptic/backend/types';
import { OptionsGreeksHistoryCustomResolver } from '@adaptic/backend/resolvers';

// Option 3: Namespace imports
import * as BackendApollo from '@adaptic/backend/apollo';
import * as BackendAuth from '@adaptic/backend/auth';
```

---

## 3. Migration Strategy

### 3.1 Phase 1: Preparation (Week 1)

#### Task 1.1: Create Migration Branch
```bash
git checkout -b feat/rename-to-backend
```

#### Task 1.2: Update Package Metadata
```json
// package.json changes
{
  "name": "@adaptic/backend",        // Changed
  "version": "1.0.0",                 // Major version bump
  "description": "Adaptic backend infrastructure with GraphQL, Prisma, and Apollo Client",
  "repository": {
    "type": "git",
    "url": "https://github.com/Adaptic-ai/adaptic-monorepo.git",
    "directory": "packages/backend"
  }
}
```

#### Task 1.3: Create Monorepo Structure
```bash
# Move to monorepo packages directory
mkdir -p packages/backend
cp -r /path/to/backend-legacy/* packages/backend/
```

### 3.2 Phase 2: Code Reorganization (Week 1-2)

#### Task 2.1: Create Module Directories
```bash
cd packages/backend/src
mkdir apollo auth types server codegen utils
```

#### Task 2.2: Move Apollo Client Code
```bash
# Move files
mv client.ts apollo/client.ts
mv apollo-client.server.ts apollo/server-impl.ts
mv apollo-client.client.ts apollo/client-impl.ts

# Create apollo/index.ts
cat > apollo/index.ts << 'EOF'
export {
  getApolloClient,
  getApolloModules,
  configureConnectionPool,
  setTokenProvider,
  client
} from './client';

export type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
  TokenProvider
} from './client';
EOF
```

#### Task 2.3: Move Authentication Code
```bash
# Move files
mv getToken.ts auth/getToken.ts
mv middleware/auth.ts auth/middleware.ts

# Create auth/index.ts
cat > auth/index.ts << 'EOF'
export { getToken, encode, decode } from './getToken';
export type { TokenProvider, JWTEncodeParams, JWTDecodeParams } from './getToken';
export { authMiddleware } from './middleware';
export type { AuthenticatedRequest } from './middleware';
EOF
```

#### Task 2.4: Reorganize Entity Types
```bash
# Create types directory structure
mkdir -p types/entities

# Move entity files
mv ABTest.ts Account.ts Action.ts Alert.ts types/entities/
# ... (move all 42 entity files)

# Create types/index.ts
cat > types/index.ts << 'EOF'
// Re-export generated types
export type * as types from '../generated/typegraphql-prisma/models/index.d.ts';
export * as enums from '../generated/typegraphql-prisma/enums/index';
export * from '../generated/typeStrings/index';

// Export entity CRUD operations
import { User } from './entities/User';
import { Account } from './entities/Account';
// ... import all entities

export const entities = {
  user: User,
  account: Account,
  // ... all entities
};

export default entities;
EOF
```

#### Task 2.5: Move Server Code
```bash
# Move files
mv server.ts server/server.ts
mv prismaClient.ts server/prismaClient.ts

# Create server/index.ts
cat > server/index.ts << 'EOF'
export { default as prisma } from './prismaClient';
// Export server setup if needed for testing
EOF
```

#### Task 2.6: Move Code Generation
```bash
# Move modules directory to codegen
mv modules codegen

# Update codegen/index.ts
# (Keep existing exports)
EOF
```

#### Task 2.7: Move Utilities
```bash
# Move utils
mv utils.ts utils/utils.ts

# Create utils/index.ts
cat > utils/index.ts << 'EOF'
export { removeUndefinedProps } from './utils';
EOF
```

### 3.3 Phase 3: Update Import Paths (Week 2)

#### Task 3.1: Create Import Path Migration Script

```typescript
// scripts/update-import-paths.ts
import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

const replacements = [
  // Internal imports
  { from: /from ['"]\.\.\/client['"]/g, to: `from '../apollo/client'` },
  { from: /from ['"]\.\/client['"]/g, to: `from './apollo/client'` },
  { from: /from ['"]\.\.\/getToken['"]/g, to: `from '../auth/getToken'` },
  { from: /from ['"]\.\/getToken['"]/g, to: `from './auth/getToken'` },
  { from: /from ['"]\.\.\/middleware\/auth['"]/g, to: `from '../auth/middleware'` },
  { from: /from ['"]\.\/middleware\/auth['"]/g, to: `from './auth/middleware'` },
  { from: /from ['"]\.\.\/prismaClient['"]/g, to: `from '../server/prismaClient'` },
  { from: /from ['"]\.\/prismaClient['"]/g, to: `from './server/prismaClient'` },
  { from: /from ['"]\.\.\/utils['"]/g, to: `from '../utils/utils'` },
  { from: /from ['"]\.\/utils['"]/g, to: `from './utils/utils'` },

  // External package imports
  { from: /@adaptic\/backend-legacy/g, to: '@adaptic/backend' }
];

async function updateImports() {
  const files = await glob('src/**/*.ts');

  for (const file of files) {
    let content = readFileSync(file, 'utf-8');
    let updated = false;

    for (const { from, to } of replacements) {
      if (from.test(content)) {
        content = content.replace(from, to);
        updated = true;
      }
    }

    if (updated) {
      writeFileSync(file, content);
      console.log(`Updated: ${file}`);
    }
  }
}

updateImports();
```

#### Task 3.2: Update Main Entry Point

```typescript
// src/index.ts
// Re-export from submodules for backward compatibility
export * from './apollo';
export * from './auth';
export * from './types';
export * from './resolvers';
export * from './utils';

// Default export for convenience
import { entities } from './types';
export default entities;
```

#### Task 3.3: Update TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@adaptic/backend": ["./src/index.ts"],
      "@adaptic/backend/*": ["./src/*"]
    }
  }
}
```

### 3.4 Phase 4: Update Dependent Packages (Week 2-3)

#### Task 4.1: Find All Dependents
```bash
# In monorepo root
grep -r "@adaptic/backend-legacy" packages/*/package.json
```

#### Task 4.2: Create Codemod Script

```typescript
// scripts/migrate-imports.codemod.ts
import { Project } from 'ts-morph';

function migrateImports(projectPath: string) {
  const project = new Project({
    tsConfigFilePath: `${projectPath}/tsconfig.json`
  });

  const sourceFiles = project.getSourceFiles();

  for (const sourceFile of sourceFiles) {
    const importDeclarations = sourceFile.getImportDeclarations();

    for (const importDecl of importDeclarations) {
      const moduleSpecifier = importDecl.getModuleSpecifierValue();

      if (moduleSpecifier === '@adaptic/backend-legacy') {
        // Update to new package name
        importDecl.setModuleSpecifier('@adaptic/backend');

        // Optionally migrate to subpath imports
        const namedImports = importDecl.getNamedImports();
        const apolloImports = namedImports.filter(ni =>
          ['getApolloClient', 'getApolloModules', 'configureConnectionPool', 'setTokenProvider'].includes(ni.getName())
        );

        if (apolloImports.length > 0 && apolloImports.length === namedImports.length) {
          // All imports are Apollo-related, use subpath
          importDecl.setModuleSpecifier('@adaptic/backend/apollo');
        }
      }
    }

    sourceFile.saveSync();
  }
}

// Run for each dependent package
const packages = ['frontend', 'api', 'workers'];
packages.forEach(pkg => {
  console.log(`Migrating ${pkg}...`);
  migrateImports(`./packages/${pkg}`);
});
```

#### Task 4.3: Update Package Dependencies

For each dependent package:
```json
// packages/*/package.json
{
  "dependencies": {
    "@adaptic/backend": "^1.0.0"  // Updated from backend-legacy
  }
}
```

### 3.5 Phase 5: Testing & Validation (Week 3)

#### Task 5.1: Run Build
```bash
cd packages/backend
npm run build
```

#### Task 5.2: Verify Exports
```bash
# Check that all expected exports exist
node -e "
const backend = require('./dist/index.js');
const apollo = require('./dist/apollo/index.js');
const auth = require('./dist/auth/index.js');
console.log('Main exports:', Object.keys(backend));
console.log('Apollo exports:', Object.keys(apollo));
console.log('Auth exports:', Object.keys(auth));
"
```

#### Task 5.3: Run Tests
```bash
npm test
```

#### Task 5.4: Build Dependent Packages
```bash
# In monorepo root
npm run build --workspaces
```

#### Task 5.5: Integration Testing
```bash
# Run integration tests
npm run test:integration
```

### 3.6 Phase 6: Documentation (Week 3-4)

#### Task 6.1: Update README.md
- Change all references from `@adaptic/backend-legacy` to `@adaptic/backend`
- Add migration guide section
- Update import examples
- Add subpath exports documentation

#### Task 6.2: Create MIGRATION.md
Document breaking changes and migration steps for consumers

#### Task 6.3: Update API Documentation
Generate new API docs with updated package name

### 3.7 Phase 7: Deployment (Week 4)

#### Task 7.1: Publish to NPM
```bash
# Publish new package
cd packages/backend
npm publish --access public
```

#### Task 7.2: Deprecate Old Package
```bash
# Deprecate backend-legacy
npm deprecate @adaptic/backend-legacy "Package renamed to @adaptic/backend"
```

#### Task 7.3: Update CI/CD
Update all CI/CD pipelines to use new package name

---

## 4. Breaking Changes

### 4.1 Package Name Change
**Breaking Change:** Package name changed from `@adaptic/backend-legacy` to `@adaptic/backend`

**Migration:**
```typescript
// Before
import adaptic from '@adaptic/backend-legacy';

// After
import adaptic from '@adaptic/backend';
```

### 4.2 Module Organization
**Breaking Change:** Internal file paths have changed (affects relative imports if any)

**Migration:**
```typescript
// If you were doing this (not recommended):
import { getApolloClient } from '@adaptic/backend-legacy/dist/client';

// Change to:
import { getApolloClient } from '@adaptic/backend/apollo';
```

### 4.3 Subpath Exports
**New Feature (Non-Breaking):** Added subpath exports for better tree-shaking

**Recommended Migration:**
```typescript
// Old (still works)
import { getApolloClient, getToken } from '@adaptic/backend';

// New (better tree-shaking)
import { getApolloClient } from '@adaptic/backend/apollo';
import { getToken } from '@adaptic/backend/auth';
```

### 4.4 Version Bump
**Breaking Change:** Version bumped to 1.0.0 (from 0.0.34)

This is a major version bump signaling the rename and stabilization of the API.

---

## 5. Migration Guide for Consumers

### 5.1 Automated Migration

**Step 1: Update package.json**
```bash
npm uninstall @adaptic/backend-legacy
npm install @adaptic/backend@^1.0.0
```

**Step 2: Run codemod**
```bash
npx jscodeshift -t @adaptic/backend-codemod src/
```

**Step 3: Update TypeScript paths (if using)**
```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@adaptic/backend": ["./node_modules/@adaptic/backend"],
      "@adaptic/backend/*": ["./node_modules/@adaptic/backend/*"]
    }
  }
}
```

### 5.2 Manual Migration

**Step 1: Find all imports**
```bash
grep -r "@adaptic/backend-legacy" src/
```

**Step 2: Replace package name**
```typescript
// Find and replace in all files
@adaptic/backend-legacy → @adaptic/backend
```

**Step 3: (Optional) Migrate to subpath imports**
```typescript
// Before
import { getApolloClient, setTokenProvider } from '@adaptic/backend';

// After (better tree-shaking)
import { getApolloClient, setTokenProvider } from '@adaptic/backend/apollo';
```

### 5.3 Verification

**Step 1: Build**
```bash
npm run build
```

**Step 2: Type check**
```bash
npm run type-check
```

**Step 3: Test**
```bash
npm test
```

---

## 6. Rollback Plan

### 6.1 If Migration Fails in Development

```bash
# Revert to previous package
npm uninstall @adaptic/backend
npm install @adaptic/backend-legacy@^0.0.34

# Revert code changes
git checkout main -- src/
```

### 6.2 If Issues Found in Production

1. **Immediate:** Publish hotfix for `@adaptic/backend` with fixes
2. **Short-term:** Un-deprecate `@adaptic/backend-legacy` temporarily
3. **Long-term:** Fix issues and re-attempt migration

---

## 7. Timeline & Milestones

| Week | Phase | Milestone |
|------|-------|-----------|
| Week 1 | Preparation & Reorganization | Monorepo structure created, code reorganized |
| Week 2 | Import Updates & Dependencies | All imports updated, dependent packages migrated |
| Week 3 | Testing & Validation | All tests passing, integration verified |
| Week 4 | Documentation & Deployment | Documentation complete, package published |

---

## 8. Success Criteria

- [ ] Package successfully renamed to `@adaptic/backend`
- [ ] All code reorganized into logical modules
- [ ] Subpath exports working correctly
- [ ] All existing functionality preserved
- [ ] All tests passing (including new tests)
- [ ] All dependent packages migrated and working
- [ ] Documentation updated
- [ ] Package published to NPM
- [ ] Old package deprecated
- [ ] Zero production incidents

---

## 9. Risk Assessment

### High Risk:
- **Breaking existing consumers** - Mitigated by thorough testing and gradual rollout
- **Lost functionality during migration** - Mitigated by comprehensive test suite

### Medium Risk:
- **Import path issues** - Mitigated by automated codemod
- **Type definition problems** - Mitigated by TypeScript strict mode

### Low Risk:
- **Documentation gaps** - Mitigated by detailed migration guide
- **Performance regression** - Mitigated by benchmarking

---

## 10. Post-Migration Tasks

### 10.1 Monitoring
- Monitor error rates in production
- Track package download metrics
- Monitor issue reports and support tickets

### 10.2 Cleanup
- Archive old `backend-legacy` repository
- Remove deprecated code paths
- Clean up temporary migration scripts

### 10.3 Optimization
- Analyze bundle sizes with new structure
- Optimize import paths for better tree-shaking
- Consider further modularization

---

## Appendix A: Codemod Template

Complete codemod implementation available in supplementary documentation.

## Appendix B: Full Import Mapping

Complete import mapping table available in supplementary documentation.

## Appendix C: Affected Repositories

List of all repositories using `@adaptic/backend-legacy`:
- TBD during discovery phase
