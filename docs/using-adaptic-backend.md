# Using Adaptic Backend

This guide explains how to effectively use the @adaptic/backend-legacy package in your applications, covering both server-side and client-side integration scenarios.

## Installation

```bash
npm install @adaptic/backend-legacy
```

## Apollo Client Setup (Improved Connection Pooling)

The @adaptic/backend-legacy package provides a singleton Apollo Client with **connection pooling** that automatically detects your environment (server or client) and configures itself appropriately. The connection pool helps prevent database connection overload and handles errors with automatic retries.

### Best Practices for Client Usage

```typescript
import { getApolloClient } from '@adaptic/backend-legacy';

// Create ONE Apollo Client instance at the app level and reuse it
// IMPORTANT: Maintaining a single instance prevents connection overload
const client = await getApolloClient();

// The client is now ready to use for GraphQL operations
// All operations will be managed by the connection pool
```

### Configuring the Connection Pool (Optional)

You can customize the connection pool settings to match your specific needs:

```typescript
import { configureConnectionPool, getApolloClient } from '@adaptic/backend-legacy';

// Optional: Configure connection pool before getting the client
configureConnectionPool({
  maxConcurrentOperations: 100,   // Limit concurrent database operations
  retryAttempts: 5,             // Number of automatic retry attempts
  retryDelay: 500,              // Base delay between retries (ms)
  connectionTimeout: 15000      // Connection timeout (ms)
});

// Get the configured client
const client = await getApolloClient();
```

### Server-Side Integration

When running in a server environment (Node.js), the package uses CommonJS-based Apollo modules with connection pooling:

```typescript
// Next.js API route or server-side code
import { getApolloClient, getApolloModules } from '@adaptic/backend-legacy';

// IMPORTANT: Create a single client for your entire application
let apolloClient = null;

export async function handler(req, res) {
  // Initialize the client once and reuse it across requests
  if (!apolloClient) {
    apolloClient = await getApolloClient();
  }

  // You can also access the modules directly if needed
  const { gql, ApolloError } = await getApolloModules();

  // Use client for GraphQL operations - the connection pool will manage concurrency
  const response = await apolloClient.query({...});

  return res.status(200).json(response.data);
}
```

### Client-Side Integration

For browser environments, the package uses ESM-based Apollo modules with the same connection pooling benefits:

```typescript
// React component or client-side code
import { useEffect, useState, useContext } from 'react';
import { getApolloClient } from '@adaptic/backend-legacy';

// Create a context to share the client across your app
const ApolloClientContext = React.createContext(null);

// Provider component to initialize the client once
function ApolloClientProvider({ children }) {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initClient() {
      const apolloClient = await getApolloClient();
      setClient(apolloClient);
      setLoading(false);
    }
    initClient();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <ApolloClientContext.Provider value={client}>
      {children}
    </ApolloClientContext.Provider>
  );
}

// Example component using the shared client
function MyComponent() {
  const client = useContext(ApolloClientContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Use the shared client instance
      const response = await client.query({...});
      setData(response.data);
    }

    if (client) {
      fetchData();
    }
  }, [client]);

  return <div>{/* Render your data */}</div>;
}
```

## Using Content Models (With Connection Pooling)

The @adaptic/backend-legacy package provides typed CRUD operations for all content models with built-in connection pooling. All CRUD functions automatically handle the transformation of your content model objects into the appropriate GraphQL input formats.

### Available CRUD Functions

Every content model provides these 9 standardized CRUD operations:

| Function | Purpose | Returns |
|----------|---------|---------|
| `create(props, client?)` | Create a single record | `ModelType` |
| `createMany(props[], client?)` | Create multiple records | `{ count: number }` |
| `update(props, client?)` | Update an existing record | `ModelType` |
| `updateMany(props[], client?)` | Update multiple records | `{ count: number }` |
| `upsert(props, client?)` | Create or update a record | `ModelType` |
| `delete(props, client?)` | Delete a single record | `ModelType` |
| `get(props, client?, whereInput?)` | Get a single record | `ModelType \| null` |
| `getAll(client?)` | Get all records | `ModelType[] \| null` |
| `findMany(props, client?, whereInput?)` | Find multiple records | `ModelType[] \| null` |

### Complete Model List

Access all 34 content models through the `adaptic` object:

```typescript
import adaptic from '@adaptic/backend-legacy';

// Core Trading Models
adaptic.user              // User management
adaptic.alpacaAccount     // Trading accounts
adaptic.allocation        // Asset allocation settings
adaptic.asset             // Financial instruments
adaptic.trade             // Executed trades
adaptic.action            // Trade actions
adaptic.alert             // System notifications

// Authentication & Sessions
adaptic.session           // User sessions
adaptic.account           // External auth accounts
adaptic.authenticator     // MFA devices
adaptic.verificationToken // Verification tokens
adaptic.customer          // Customer entities

// News & Market Data
adaptic.newsArticle       // Financial news
adaptic.newsArticleAssetSentiment // News sentiment
adaptic.marketSentiment   // Market sentiment
adaptic.economicEvent     // Economic events

// Institutional Data
adaptic.institutionalHolding // SEC holdings
adaptic.institutionalFlowSignal // Flow analysis
adaptic.institutionalSentimentHistory // Historical sentiment
adaptic.institutionalSentimentMetrics // Processing metrics
adaptic.institutionalSentimentErrors // Error tracking
adaptic.institutionalSentimentAlerts // Data quality alerts

// Analytics & ML
adaptic.analyticsSnapshot // Analytics metadata
adaptic.analyticsConfiguration // Analytics config
adaptic.mLTrainingData    // Training data
adaptic.modelArtifact     // ML artifacts
adaptic.modelVersion      // Model versions
adaptic.modelVersionArtifact // Model-artifact links
adaptic.aBTest            // A/B testing
adaptic.featureImportanceAnalysis // Model interpretability

// System Management
adaptic.configuration     // System config
adaptic.systemAlert       // System alerts
adaptic.connectionHealthSnapshot // Health monitoring
adaptic.scheduledOptionOrder // Scheduled orders
```

### Importing Types

```typescript
// Import specific model types
import { types } from '@adaptic/backend-legacy';

// Use the imported types
const user: types.User = {
  name: "John Doe",
  email: "john@example.com",
  role: "USER"
};
```

### Reusing a Shared Apollo Client (RECOMMENDED)

For best performance and to prevent connection overload, initialize a single Apollo client and pass it to all operations:

```typescript
import adaptic from '@adaptic/backend-legacy';
import { getApolloClient } from '@adaptic/backend-legacy';

// Initialize the Apollo client ONCE in your application
const client = await getApolloClient();

// Pass the shared client to all operations
const user = await adaptic.user.get({ id: "1234" }, client);
const asset = await adaptic.asset.get({ symbol: "AAPL" }, client);
const trades = await adaptic.trade.findMany({ symbol: "AAPL" }, client);
```

## Content Models

The @adaptic/backend-legacy package provides access to 34 content models representing various aspects of financial trading, analytics, and system management:

### Core Trading Models
- **User** - Trading platform users with roles and permissions
- **AlpacaAccount** - Trading accounts with configuration and allocation settings
- **Allocation** - Asset class allocation settings (stocks, crypto, options, ETFs)
- **Asset** - Financial instruments (stocks, ETFs, crypto, options, etc.)
- **Trade** - Executed trades with signals, strategies, and outcomes
- **Action** - Individual trade actions within a trade (buy, sell, etc.)
- **Alert** - System notifications and warnings

### Authentication & Sessions
- **Session** - User authentication sessions
- **Account** - External authentication accounts (OAuth providers)
- **Authenticator** - Multi-factor authentication devices
- **VerificationToken** - Token-based verification system
- **Customer** - Customer entities with subscription plans

### News & Market Data
- **NewsArticle** - Financial news articles with sentiment analysis
- **NewsArticleAssetSentiment** - Asset-specific sentiment from news
- **MarketSentiment** - Overall market sentiment analysis
- **EconomicEvent** - Economic events affecting markets

### Institutional Data
- **InstitutionalHolding** - SEC EDGAR institutional holding data
- **InstitutionalFlowSignal** - Institutional trading flow analysis
- **InstitutionalSentimentHistory** - Historical institutional sentiment
- **InstitutionalSentimentMetrics** - Processing metrics for monitoring
- **InstitutionalSentimentErrors** - Error tracking for data processing
- **InstitutionalSentimentAlerts** - Data quality alerts

### Analytics & ML
- **AnalyticsSnapshot** - Volatility models and analytics metadata
- **AnalyticsConfiguration** - Analytics parameter configuration
- **MLTrainingData** - Training data for model retraining
- **ModelArtifact** - ML model artifacts and metadata
- **ModelVersion** - ML model versions with performance metrics
- **ModelVersionArtifact** - Junction table for model-artifact relationships
- **ABTest** - A/B testing for model deployments
- **FeatureImportanceAnalysis** - Model interpretability analysis

### System Management
- **Configuration** - System configuration settings
- **SystemAlert** - System alerts and notifications
- **ConnectionHealthSnapshot** - Connection health monitoring
- **ScheduledOptionOrder** - Scheduled option orders for execution

## Enums

The system includes 27 enums for type safety and consistency:

### Trading & Market Enums
- **TradeSignal** - 35 signal types (GOLDEN_CROSS, RSI_OVERBOUGHT, MACD_CROSSOVER, etc.)
- **TradeStrategy** - 12 trading strategies (TECHNICAL_ANALYSIS, MOMENTUM_STRATEGY, etc.)
- **AssetType** - 20 asset types (STOCK, ETF, CRYPTOCURRENCY, OPTION, etc.)
- **ActionType** - 6 action types (BUY, SELL, BUY_OPTION, EXERCISE_OPTION, etc.)
- **ActionStatus** - 5 status levels (STAGED, PENDING, EXECUTED, COMPLETED, CANCELED)
- **TradeStatus** - 5 trade states (PENDING, OPEN, PARTIAL, COMPLETED, CANCELED)
- **AlpacaAccountType** - 2 account types (PAPER, LIVE)
- **ScheduledOptionOrderStatus** - 3 order statuses (PENDING, EXECUTED, CANCELED)

### Market Analysis Enums
- **MarketSentimentLevel** - 7 sentiment levels (VERY_BEARISH to VERY_BULLISH)
- **TradeExitReason** - 9 exit reasons (STOP_LOSS, TAKE_PROFIT, TRAILING_STOP, etc.)
- **TradeOutcomeQuality** - 5 quality levels (EXCELLENT, GOOD, FAIR, POOR, VERY_POOR)
- **MarketRegime** - 7 regime types (BULL, BEAR, SIDEWAYS, HIGH_VOLATILITY, etc.)
- **VolatilityLevel** - 5 volatility levels (VERY_LOW to VERY_HIGH)
- **MarketSentimentContext** - 5 sentiment contexts (VERY_BEARISH to VERY_BULLISH)
- **VolumeLevel** - 5 volume levels (VERY_LOW to VERY_HIGH)
- **MarketCondition** - 8 market conditions (NORMAL, VOLATILE, PRE_MARKET, etc.)

### System & Configuration Enums
- **UserRole** - 3 user roles (OWNER, ADMIN, USER)
- **SubscriptionPlan** - 3 plans (FREE, PRO, INSTITUTION)
- **AlertType** - 4 alert types (SUCCESS, WARNING, ERROR, INFO)
- **AlertSeverity** - 4 severity levels (LOW, MEDIUM, HIGH, CRITICAL)
- **SystemAlertType** - 6 system alert types (PERFORMANCE_DEGRADATION, TRAINING_FAILURE, etc.)
- **SystemAlertStatus** - 4 status types (ACTIVE, ACKNOWLEDGED, RESOLVED, SUPPRESSED)
- **EventImportance** - 3 importance levels (LOW, MEDIUM, HIGH)
- **ConfigType** - 5 configuration types (ANALYTICS, RISK_MANAGEMENT, TRADING, etc.)

### ML & Analytics Enums
- **OpenaiModel** - 6 OpenAI models (GPT_4O, GPT_4O_MINI, O1, O1_MINI, etc.)
- **ModelVersionStatus** - 5 model statuses (TRAINING, VALIDATION, DEPLOYED, etc.)
- **DeploymentEnvironment** - 3 environments (DEVELOPMENT, STAGING, PRODUCTION)
- **RolloutStrategy** - 4 rollout strategies (IMMEDIATE, GRADUAL, CANARY, BLUE_GREEN)
- **ArtifactType** - 5 artifact types (WEIGHTS, MODEL_FILE, PREPROCESSOR, etc.)
- **StorageProvider** - 4 storage providers (AWS_S3, GCP_STORAGE, AZURE_BLOB, LOCAL)
- **ABTestStatus** - 4 test statuses (DRAFT, RUNNING, COMPLETED, CANCELLED)
- **ABTestRecommendation** - 3 recommendations (PROMOTE_TREATMENT, KEEP_CONTROL, INCONCLUSIVE)
- **FeatureImportanceAnalysisType** - 5 analysis types (SHAP, PERMUTATION, LIME, etc.)

## CRUD Operations Guide

Each content model in @adaptic/backend-legacy provides a comprehensive set of CRUD (Create, Read, Update, Delete) operations through generated resolvers. This section explains when and how to use each operation.

> **IMPORTANT**: One of the key advantages of the @adaptic/backend-legacy CRUD functions is that they handle all the GraphQL input transformation automatically. You simply pass a valid instance of your content model type object, and the library handles converting it to the appropriate GraphQL input format, including constructing where objects and input structures. You don't need to manually structure complex GraphQL inputs.
>
> For create, update, and upsert functions, you only need to pass a valid instance of the content model type that the CRUD function is for. You don't need to pass a where object or structure the GraphQL input yourself - the function will convert your content model object into the relevant input for the CRUD GraphQL operation automatically.

### Creating Records

The system provides different creation methods based on your needs. You simply provide the data object with the fields you want to set, and the library handles converting it to the correct GraphQL input format:

#### `create`: Create a Single Record

Use when: You want to create a new record and you're sure it doesn't already exist.

**Function Signature:**
```typescript
async create(props: ModelType, globalClient?: ApolloClientType): Promise<ModelType>
```

```typescript
import adaptic from '@adaptic/backend-legacy';
import { getApolloClient } from '@adaptic/backend-legacy';

const client = await getApolloClient();

// Create a new user
const newUser = await adaptic.user.create({
  name: "John Doe",
  email: "john@example.com",
  role: "USER"
}, client);

// Create an asset with a relation (using an ID reference)
const newAsset = await adaptic.asset.create({
  symbol: "AAPL",
  name: "Apple Inc.",
  type: "STOCK"
}, client);

// Create a trade with nested action creation
const newTrade = await adaptic.trade.create({
  symbol: "AAPL",
  signal: "GOLDEN_CROSS",
  strategy: "TECHNICAL_ANALYSIS",
  analysis: "Golden cross pattern detected...",
  summary: "Long position on AAPL",
  confidence: 0.85,
  alpacaAccountId: "account123"
}, client);
```

#### `createMany`: Create Multiple Records in a Batch

Use when: You need to create multiple records of the same type efficiently.

**Function Signature:**
```typescript
async createMany(props: ModelType[], globalClient?: ApolloClientType): Promise<{ count: number } | null>
```

```typescript
// Create multiple assets in a single operation
const result = await adaptic.asset.createMany([
  { symbol: "AAPL", name: "Apple Inc.", type: "STOCK" },
  { symbol: "MSFT", name: "Microsoft Corporation", type: "STOCK" },
  { symbol: "GOOGL", name: "Alphabet Inc.", type: "STOCK" }
], client);

console.log(`Created ${result.count} assets`);
```

### Updating Records

Choose the appropriate update method based on your scenario. For all update methods, you simply pass your model object, and the library automatically extracts the identifier and update fields, converting them to the appropriate GraphQL format:

#### `update`: Update an Existing Record

Use when: You know the record exists and have its unique identifier.

**Function Signature:**
```typescript
async update(props: ModelType, globalClient?: ApolloClientType): Promise<ModelType>
```

```typescript
// Update a user by ID - just pass a user object with the ID and fields to update
// The library handles converting this to the proper GraphQL where/data input format
const updatedUser = await adaptic.user.update({
  id: "user123",
  name: "John Smith", // Updated field
  bio: "Software engineer" // Add new field value
}, client);

// Update a trade by ID
const updatedTrade = await adaptic.trade.update({
  id: "trade456",
  summary: "Updated trade summary",
  status: "COMPLETED"
}, client);
```

#### `upsert`: Create or Update a Record

Use when: You're not sure if the record exists and want to either create it or update it if it does.

**Function Signature:**
```typescript
async upsert(props: ModelType, globalClient?: ApolloClientType): Promise<ModelType>
```

```typescript
// Create a user if not exists, or update if exists
// The library automatically extracts the unique identifier and other fields
const user = await adaptic.user.upsert({
  email: "john@example.com", // Unique identifier to find the record
  name: "John Doe",          // Data for create/update
  jobTitle: "Developer"      // Data for create/update
}, client);

// Upsert an asset by symbol
const asset = await adaptic.asset.upsert({
  symbol: "AAPL",           // Unique identifier
  name: "Apple Inc.",       // Updated name if exists
  type: "STOCK"             // Type will be set for new or updated record
}, client);
```

> **When to use update vs. upsert:**
> - Use `update` when you're certain the record exists and only want to modify it
> - Use `upsert` when you want to create a record if it doesn't exist or update it if it does
> - `upsert` is more forgiving but slightly less efficient than a direct `update` or `create`

#### `updateMany`: Update Multiple Records

Use when: You need to apply the same update to multiple records that match certain criteria.

**Function Signature:**
```typescript
async updateMany(props: ModelType[], globalClient?: ApolloClientType): Promise<{ count: number } | null>
```

```typescript
// Update status of multiple trades (each with unique ID)
const result = await adaptic.trade.updateMany([
  { id: "trade1", status: "COMPLETED" },
  { id: "trade2", status: "COMPLETED" },
  { id: "trade3", status: "CANCELED" }
], client);

console.log(`Updated ${result.count} trades`);
```

### Reading Records

Different methods for retrieving data. For the basic operations (`get`, `getAll`), you can simply pass an object with the needed unique identifier fields, and the library will automatically construct the correct GraphQL query format:

#### `get`: Retrieve a Single Record by Unique Identifier

Use when: You need to fetch a specific record using a unique field.

**Function Signature:**
```typescript
async get(props: ModelType, globalClient?: ApolloClientType, whereInput?: any): Promise<ModelType | null>
```

```typescript
// Get a user by ID
const user = await adaptic.user.get({ id: "user123" }, client);

// Get a user by email (unique field)
const userByEmail = await adaptic.user.get({ email: "john@example.com" }, client);

// Get an asset by symbol (unique field)
const asset = await adaptic.asset.get({ symbol: "AAPL" }, client);

// Using explicit whereInput parameter (third parameter)
const trade = await adaptic.trade.get({}, client, { id: "trade-abc-123" });
```

#### `getAll`: Retrieve All Records of a Type

Use when: You need a complete list of records of a certain type.

**Function Signature:**
```typescript
async getAll(globalClient?: ApolloClientType): Promise<ModelType[] | null>
```

```typescript
// Get all users
const allUsers = await adaptic.user.getAll(client);

// Get all assets
const allAssets = await adaptic.asset.getAll(client);

// Get all trades
const allTrades = await adaptic.trade.getAll(client);
```

#### `findMany`: Retrieve Multiple Records Based on Criteria

Use when: You need to find records matching specific conditions.

**Function Signature:**
```typescript
async findMany(props: ModelType, globalClient?: ApolloClientType, whereInput?: any): Promise<ModelType[] | null>
```

```typescript
// Find trades for a specific symbol (using props parameter)
const appleTrades = await adaptic.trade.findMany({ symbol: "AAPL" }, client);

// Find users with a specific role (using props parameter)
const adminUsers = await adaptic.user.findMany({ role: "ADMIN" }, client);

// Using explicit whereInput for complex filtering (third parameter)
const recentTrades = await adaptic.trade.findMany({}, client, {
  createdAt: {
    gte: new Date(Date.now() - 86400000) // Trades from last 24 hours
  },
  status: "COMPLETED"
});

// Using array conditions and logical operators
const specificAssets = await adaptic.asset.findMany({}, client, {
  OR: [
    { symbol: "AAPL" },
    { symbol: "MSFT" }
  ],
  type: "STOCK"
});

// Find records with nested relation conditions
const usersWithCompletedTrades = await adaptic.user.findMany({}, client, {
  alpacaAccounts: {
    some: {
      realTime: true
    }
  }
});
```

### Structuring WhereInput for Queries

For more complex queries using `findMany`, you can either:

1. Pass a simple object with field values (the library will convert it to the appropriate `where` format)
2. Use the optional third parameter to provide complex filter criteria directly

The following examples show how to structure the `whereInput` object when using the explicit third parameter:

#### Simple Field Equality

```typescript
// Find assets with symbol="AAPL"
const assets = await adaptic.asset.findMany({}, client, {
  symbol: "AAPL"
});
```

#### Comparison Operators

```typescript
// Find trades with price >= 100
const trades = await adaptic.trade.findMany({}, client, {
  price: {
    gte: 100  // greater than or equal
  }
});
```

Available comparison operators:
- `equals`: Exact match
- `not`: Not equal
- `in`: Value in array
- `notIn`: Value not in array
- `lt`: Less than
- `lte`: Less than or equal
- `gt`: Greater than
- `gte`: Greater than or equal
- `contains`: String contains
- `startsWith`: String starts with
- `endsWith`: String ends with

#### Logical Operators

```typescript
// Find assets that are STOCK OR CRYPTO
const assets = await adaptic.asset.findMany({}, client, {
  OR: [
    { type: "STOCK" },
    { type: "CRYPTO" }
  ]
});

// Find users who are ADMIN AND have a specific email domain
const users = await adaptic.user.findMany({}, client, {
  AND: [
    { role: "ADMIN" },
    { email: { endsWith: "@company.com" } }
  ]
});

// Find users who are NOT basic users
const nonBasicUsers = await adaptic.user.findMany({}, client, {
  NOT: { role: "USER" }
});
```

#### Filtering on Relations

```typescript
// Find assets that have at least one related news article
const assetsWithNews = await adaptic.asset.findMany({}, client, {
  newsArticles: {
    some: {} // Any news article
  }
});

// Find users with completed trades
const usersWithCompletedTrades = await adaptic.user.findMany({}, client, {
  trades: {
    some: {
      status: "COMPLETED"
    }
  }
});

// Find assets with no related news
const assetsWithoutNews = await adaptic.asset.findMany({}, client, {
  newsArticles: {
    none: {}
  }
});

// Find users where ALL trades are completed
const usersWithAllCompletedTrades = await adaptic.user.findMany({}, client, {
  trades: {
    every: {
      status: "COMPLETED"
    }
  }
});
```

### Deleting Records

#### `delete`: Delete a Single Record

Use when: You want to remove a specific record.

**Function Signature:**
```typescript
async delete(props: ModelType, globalClient?: ApolloClientType): Promise<ModelType>
```

```typescript
// Delete a user by ID
const deletedUser = await adaptic.user.delete({ id: "user123" }, client);

// Delete a trade by ID
const deletedTrade = await adaptic.trade.delete({ id: "trade456" }, client);

// Delete an asset by symbol
const deletedAsset = await adaptic.asset.delete({ symbol: "AAPL" }, client);
```

### Batch Operations for Efficiency

To further reduce database load, consider batching related operations together:

```typescript
// Instead of multiple separate queries:
const user = await adaptic.user.get({ id: "1234" }, client);
const trades = await adaptic.trade.findMany({ userId: user.id }, client);

// Use a more efficient query that includes related data:
const { gql } = await getApolloModules();
const COMBINED_QUERY = gql`
  query GetUserWithTrades($id: ID!) {
    user: getUser(id: $id) {
      id
      name
      email
      trades {
        id
        symbol
        price
        qty
      }
    }
  }
`;

const result = await client.query({
  query: COMBINED_QUERY,
  variables: { id: "1234" }
});
```

### Error Handling with Retries

The connection pool automatically retries database connection errors with exponential backoff:

```typescript
import adaptic from '@adaptic/backend-legacy';
import { getApolloClient, getApolloModules } from '@adaptic/backend-legacy';

async function fetchData() {
  const client = await getApolloClient();
  try {
    const { ApolloError } = await getApolloModules();

    // The connection pool will automatically retry if database connection errors occur
    const user = await adaptic.user.get({ id: "1234" }, client);

    if (!user) {
      console.log("User not found");
      return;
    }

    console.log(user);
  } catch (error) {
    // This will only be triggered after all retry attempts have failed
    if (error instanceof ApolloError) {
      console.error("GraphQL error after all retries:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}
```

## Environment Variables

The package uses these environment variables:

- `NODE_ENV`: Determines production vs. development settings
- `NEXT_PUBLIC_BACKEND_HTTPS_URL` or `BACKEND_HTTPS_URL`: GraphQL endpoint URL
- `NEXT_PUBLIC_SERVER_AUTH_TOKEN` or `SERVER_AUTH_TOKEN`: Authentication token
- `DATABASE_URL`: Required for the backend to connect to your database
- `DIRECT_DATABASE_URL`: Optional direct database connection for certain operations

## Troubleshooting Connection Issues

If you encounter database connection errors (like "Accelerate was not able to connect" or "error code: 1016"), consider:

1. **Check Environment Variables**: Ensure `DATABASE_URL` is correctly set
2. **Reduce Concurrency**: Lower `maxConcurrentOperations` in the connection pool config
3. **Implement Client-Side Caching**: Cache repetitive queries on the client side
4. **Batch Related Queries**: Combine multiple queries into one where possible
5. **Review Usage Patterns**: Look for loops or repeated calls creating many connections

This documentation provides the essential information you need to effectively use the @adaptic/backend-legacy package in your applications. For more specific use cases, refer to the API reference or examples in the codebase.
