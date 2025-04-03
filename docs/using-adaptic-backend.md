# Using Adaptic Backend

This guide explains how to effectively use the adaptic-backend package in your applications, covering both server-side and client-side integration scenarios.

## Installation

```bash
npm install adaptic-backend
```

## Apollo Client Setup

The adaptic-backend package provides a singleton Apollo Client that automatically detects your environment (server or client) and configures itself appropriately.

### Basic Usage

```typescript
import { getApolloClient } from 'adaptic-backend';

// Get the Apollo Client instance (async)
const client = await getApolloClient();

// The client is now ready to use for GraphQL operations
```

### Server-Side Integration

When running in a server environment (Node.js), the package uses CommonJS-based Apollo modules:

```typescript
// Next.js API route or server-side code
import { getApolloClient, getApolloModules } from 'adaptic-backend';

export async function handler(req, res) {
  // Get the singleton Apollo Client
  const client = await getApolloClient();
  
  // You can also access the modules directly if needed
  const { gql, ApolloError } = await getApolloModules();
  
  // Use client for GraphQL operations
  const response = await client.query({...});
  
  return res.status(200).json(response.data);
}
```

### Client-Side Integration

For browser environments, the package uses ESM-based Apollo modules:

```typescript
// React component or client-side code
import { useEffect, useState } from 'react';
import { getApolloClient } from 'adaptic-backend';

function MyComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const client = await getApolloClient();
      const response = await client.query({...});
      setData(response.data);
    }
    
    fetchData();
  }, []);
  
  return <div>{/* Render your data */}</div>;
}
```

## Using Content Models

The adaptic-backend package provides typed CRUD operations for all content models through a simple, consistent API.

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

### Creating Records

```typescript
import adaptic from 'adaptic-backend';

// Create a single record
const newUser = await adaptic.user.create({
  name: "John Doe",
  email: "john@example.com",
  role: "USER"
});

// Create multiple records
const result = await adaptic.trade.createMany([
  { symbol: "AAPL", qty: 10, price: 150.0 },
  { symbol: "MSFT", qty: 5, price: 300.0 }
]);
console.log(`Created ${result.count} trades`);
```

### Reading Records

```typescript
// Get a record by ID
const asset = await adaptic.asset.get({ id: "1234" });

// Get a record by unique field
const user = await adaptic.user.get({ email: "john@example.com" });

// Get all records of a type
const allTrades = await adaptic.trade.getAll();

// Find records with conditions
const appleAssets = await adaptic.asset.findMany({ symbol: "AAPL" });

// Custom where conditions
const recentTrades = await adaptic.trade.findMany({}, null, {
  createdAt: {
    gte: new Date(Date.now() - 86400000) // Trades from last 24 hours
  }
});
```

### Updating Records

```typescript
// Update a single record
const updatedUser = await adaptic.user.update({
  id: "1234",
  name: "John Smith"
});

// Upsert (create if not exists, update if exists)
const upsertedAsset = await adaptic.asset.upsert({
  symbol: "AAPL",
  name: "Apple Inc.",
  type: "STOCK"
});

// Update multiple records
const result = await adaptic.trade.updateMany([
  { id: "1", status: "COMPLETED" },
  { id: "2", status: "COMPLETED" }
]);
```

### Deleting Records

```typescript
// Delete a record
const deletedTrade = await adaptic.trade.delete({ id: "1234" });
```

### Working with Related Records

The package handles relations automatically:

```typescript
// Create a trade with associated actions
const trade = await adaptic.trade.create({
  symbol: "AAPL",
  qty: 10,
  price: 150.0,
  actions: [
    { 
      type: "BUY", 
      primary: true,
      note: "Initial purchase"
    }
  ]
});

// The created trade includes its related actions
console.log(trade.actions); // Array of action objects
```

## Using Your Own Apollo Client

If you already have an Apollo Client instance, you can pass it to adaptic operations:

```typescript
import { ApolloClient, InMemoryCache } from '@apollo/client';
import adaptic from 'adaptic-backend';

// Your existing Apollo Client
const myClient = new ApolloClient({
  uri: 'https://my-graphql-endpoint.com',
  cache: new InMemoryCache()
});

// Use your client with adaptic operations
const user = await adaptic.user.get({ id: "1234" }, myClient);
```

## Error Handling

The adaptic-backend package includes built-in error handling:

```typescript
import adaptic from 'adaptic-backend';
import { getApolloModules } from 'adaptic-backend';

async function fetchData() {
  try {
    const { ApolloError } = await getApolloModules();
    const user = await adaptic.user.get({ id: "non-existent-id" });
    
    // Handle null result (not found)
    if (!user) {
      console.log("User not found");
      return;
    }
    
    // Process user data
    console.log(user);
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error:", error.message);
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

This documentation provides the essential information you need to effectively use the adaptic-backend package in your applications. For more specific use cases, refer to the API reference or examples in the codebase.