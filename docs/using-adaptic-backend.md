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

The adaptic-backend package provides typed CRUD operations for all content models with built-in connection pooling.

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

### Creating Records

```typescript
import adaptic from 'adaptic-backend';
import { getApolloClient } from 'adaptic-backend';

// Initialize client once
const client = await getApolloClient();

// Create a single record using the shared client
const newUser = await adaptic.user.create({
  name: "John Doe",
  email: "john@example.com",
  role: "USER"
}, client);

// Create multiple records (with shared client)
const result = await adaptic.trade.createMany([
  { symbol: "AAPL", qty: 10, price: 150.0 },
  { symbol: "MSFT", qty: 5, price: 300.0 }
], client);
console.log(`Created ${result.count} trades`);
```

### Reading Records

```typescript
// Using a shared client instance
const client = await getApolloClient();

// Get a record by ID
const asset = await adaptic.asset.get({ id: "1234" }, client);

// Get a record by unique field
const user = await adaptic.user.get({ email: "john@example.com" }, client);

// Get all records of a type
const allTrades = await adaptic.trade.getAll(client);

// Find records with conditions
const appleAssets = await adaptic.asset.findMany({ symbol: "AAPL" }, client);

// Custom where conditions
const recentTrades = await adaptic.trade.findMany({}, client, {
  createdAt: {
    gte: new Date(Date.now() - 86400000) // Trades from last 24 hours
  }
});
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
