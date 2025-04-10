# Using Adaptic Backend

This guide explains how to effectively use the adaptic-backend package in your applications, covering both server-side and client-side integration scenarios.

## Installation

```bash
npm install adaptic-backend
```

## Apollo Client Setup (Improved Connection Pooling)

The adaptic-backend package provides a singleton Apollo Client with **connection pooling** that automatically detects your environment (server or client) and configures itself appropriately. The connection pool helps prevent database connection overload and handles errors with automatic retries.

### Best Practices for Client Usage

```typescript
import { getApolloClient } from 'adaptic-backend';

// Create ONE Apollo Client instance at the app level and reuse it
// IMPORTANT: Maintaining a single instance prevents connection overload
const client = await getApolloClient();

// The client is now ready to use for GraphQL operations
// All operations will be managed by the connection pool
```

### Configuring the Connection Pool (Optional)

You can customize the connection pool settings to match your specific needs:

```typescript
import { configureConnectionPool, getApolloClient } from 'adaptic-backend';

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
import { getApolloClient, getApolloModules } from 'adaptic-backend';

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
import { getApolloClient } from 'adaptic-backend';

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

The adaptic-backend package provides typed CRUD operations for all content models with built-in connection pooling. All CRUD functions automatically handle the transformation of your content model objects into the appropriate GraphQL input formats.

### Importing Types

```typescript
// Import specific model types
import { types } from 'adaptic-backend';

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
import adaptic from 'adaptic-backend';
import { getApolloClient } from 'adaptic-backend';

// Initialize the Apollo client ONCE in your application
const client = await getApolloClient();

// Pass the shared client to all operations
const user = await adaptic.user.get({ id: "1234" }, client);
const asset = await adaptic.asset.get({ symbol: "AAPL" }, client);
const trades = await adaptic.trade.findMany({ symbol: "AAPL" }, client);
```

## CRUD Operations Guide

Each content model in adaptic-backend provides a comprehensive set of CRUD (Create, Read, Update, Delete) operations through generated resolvers. This section explains when and how to use each operation.

> **IMPORTANT**: One of the key advantages of the adaptic-backend CRUD functions is that they handle all the GraphQL input transformation automatically. You simply pass a valid instance of your content model type object, and the library handles converting it to the appropriate GraphQL input format, including constructing where objects and input structures. You don't need to manually structure complex GraphQL inputs.
>
> For create, update, and upsert functions, you only need to pass a valid instance of the content model type that the CRUD function is for. You don't need to pass a where object or structure the GraphQL input yourself - the function will convert your content model object into the relevant input for the CRUD GraphQL operation automatically.

### Creating Records

The system provides different creation methods based on your needs. You simply provide the data object with the fields you want to set, and the library handles converting it to the correct GraphQL input format:

#### `create`: Create a Single Record

Use when: You want to create a new record and you're sure it doesn't already exist.

```typescript
import adaptic from 'adaptic-backend';
import { getApolloClient } from 'adaptic-backend';

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
  user: { id: "user123" } // Connects to existing user by ID
}, client);

// Create an asset with nested creation of relations
const assetWithRelations = await adaptic.asset.create({
  symbol: "MSFT",
  name: "Microsoft Corporation",
  // Creates a new news article related to this asset
  newsArticles: {
    title: "Microsoft Announces New Product",
    content: "Detailed news article content...",
    publishedAt: new Date()
  }
}, client);
```

#### `createMany`: Create Multiple Records in a Batch

Use when: You need to create multiple records of the same type efficiently.

```typescript
// Create multiple assets in a single operation
const result = await adaptic.asset.createMany([
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "MSFT", name: "Microsoft Corporation" },
  { symbol: "GOOGL", name: "Alphabet Inc." }
], client);

console.log(`Created ${result.count} assets`);
```

### Updating Records

Choose the appropriate update method based on your scenario. For all update methods, you simply pass your model object, and the library automatically extracts the identifier and update fields, converting them to the appropriate GraphQL format:

#### `update`: Update an Existing Record

Use when: You know the record exists and have its unique identifier.

```typescript
// Update a user by ID - just pass a user object with the ID and fields to update
// The library handles converting this to the proper GraphQL where/data input format
// You don't need to structure a separate where object - the function does this for you
const updatedUser = await adaptic.user.update({
  id: "user123",
  name: "John Smith", // Updated field
  bio: "Software engineer" // Add new field value
}, client);

// Update a trade by ID with nested relations
const updatedTrade = await adaptic.trade.update({
  id: "trade456",
  summary: "Updated trade summary",
  // Update related action
  action: {
    id: "action789",
    status: "COMPLETED"
  }
}, client);
```

#### `upsert`: Create or Update a Record

Use when: You're not sure if the record exists and want to either create it or update it if it does.

```typescript
// Create a user if not exists, or update if exists
// Just pass a normal user object - the library automatically extracts the unique 
// identifier and other fields, structuring them into proper GraphQL inputs
// No need to create separate where/create/update objects - the function handles this conversion
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

```typescript
// Update status of multiple trades (each with unique ID)
const result = await adaptic.trade.updateMany([
  { id: "trade1", status: "COMPLETED" },
  { id: "trade2", status: "COMPLETED" },
  { id: "trade3", status: "FAILED" }
], client);

console.log(`Updated ${result.count} trades`);
```

### Reading Records

Different methods for retrieving data. For the basic operations (`get`, `getAll`), you can simply pass an object with the needed unique identifier fields, and the library will automatically construct the correct GraphQL query format:

#### `get`: Retrieve a Single Record by Unique Identifier

Use when: You need to fetch a specific record using a unique field.

```typescript
// Get a user by ID
const user = await adaptic.user.get({ id: "user123" }, client);

// Get a user by email (unique field)
const userByEmail = await adaptic.user.get({ email: "john@example.com" }, client);

// Get an asset by symbol (unique field)
const asset = await adaptic.asset.get({ symbol: "AAPL" }, client);

// Using explicit whereInput parameter
const order = await adaptic.order.get({}, client, { clientOrderId: "order-abc-123" });
```

#### `getAll`: Retrieve All Records of a Type

Use when: You need a complete list of records of a certain type.

```typescript
// Get all users
const allUsers = await adaptic.user.getAll(client);

// Get all assets
const allAssets = await adaptic.asset.getAll(client);
```

#### `findMany`: Retrieve Multiple Records Based on Criteria

Use when: You need to find records matching specific conditions.

```typescript
// Find trades for a specific symbol
const appleTrades = await adaptic.trade.findMany({ symbol: "AAPL" }, client);

// Find users with a specific role
const adminUsers = await adaptic.user.findMany({ role: "ADMIN" }, client);

// Using explicit whereInput for complex filtering
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
  trades: {
    some: {
      status: "COMPLETED",
      createdAt: {
        gte: new Date(Date.now() - 7 * 86400000) // Last 7 days
      }
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

```typescript
// Delete a user by ID
const deletedUser = await adaptic.user.delete({ id: "user123" }, client);

// Delete a trade by ID
const deletedTrade = await adaptic.trade.delete({ id: "trade456" }, client);
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
import adaptic from 'adaptic-backend';
import { getApolloClient, getApolloModules } from 'adaptic-backend';

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

This documentation provides the essential information you need to effectively use the adaptic-backend package in your applications. For more specific use cases, refer to the API reference or examples in the codebase.