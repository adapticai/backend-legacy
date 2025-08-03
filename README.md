# @adaptic/backend-legacy

![Adaptic Readme Banner](https://adaptic-public.s3.ap-southeast-2.amazonaws.com/adaptic-readme-banner.png?=1)

## Description

The `@adaptic/backend-legacy` repository provides a comprehensive collection of TypeScript type definitions that correspond to the various models and input types used in the Adaptic backend. These type definitions are crucial for ensuring type safety and consistency across backend operations, particularly when interacting with GraphQL queries, mutations, and Prisma models. By utilizing these type definitions, developers can build and maintain robust and scalable backend applications with confidence.

## File Tree Structure

```
- fix-import-paths.js          # Automates the process of fixing import paths in generated TypeGraphQL Prisma resolver output files.
- package.json                 # Manages project configurations, scripts, and dependencies.
- schema.prisma                # Defines the data model for the application, establishing the structure of the database.
- src/
  - types/                     # Contains the TypeScript type definitions for the various models and input types.
  - auth.ts                    # Implements JWT authentication middleware to secure routes.
  - server.ts                  # Sets up the Express server integrated with Apollo Server for GraphQL requests and real-time updates.
- tsconfig.json                # Configures TypeScript compiler options for the project.
```

### Purpose of Each File

- **fix-import-paths.js**: Automates fixing import paths in generated TypeGraphQL Prisma resolver output files.
- **package.json**: Essential for managing project configurations, scripts, and dependencies.
- **schema.prisma**: Defines the data model for the application and establishes the database structure.
- **types/**: Contains the TypeScript type definitions for the various models and input types.
- **auth.ts**: Implements JWT authentication middleware to secure routes.
- **server.ts**: Initializes the Express server and integrates Apollo Server for GraphQL requests and real-time updates.
- **tsconfig.json**: Configures TypeScript compiler options for the project.

## Features

This repository offers a robust set of TypeScript type definitions for a comprehensive backend solution. Key features include:

- **Type Definitions**: Strong type safety for models, inputs, and operations in the Adaptic backend.
- **Seamless Integration**: Easy integration with existing GraphQL and Prisma workflows.
- **Scalability**: Suitable for large-scale applications requiring consistent and reliable type management.

## Prerequisites

Before you begin, ensure you have the following prerequisites set up:

### NPM Dependencies

The following NPM packages are required:

- `typescript`
- `@types/node`
- `@apollo/server`
- `@prisma/client`
- `graphql`
- `type-graphql`

### Environment Setup

1. Ensure you have Node.js and npm installed. Download from [Node.js official website](https://nodejs.org/).
2. Clone the repository:
   ```bash
   git clone https://github.com/Adaptic-ai/@adaptic/backend-legacy.git
   ```
3. Navigate to the project directory:
   ```bash
   cd @adaptic/backend-legacy
   ```

## Installation

Follow these steps to install dependencies and set up the environment:

1. **Install NPM Dependencies**:

   ```bash
   npm install
   ```

2. **Set Up Environment Variables**:
   Create a `.env` file in the root of the project and add:

   ```plaintext
   DATABASE_URL=your_database_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=4000
   ```

3. **Run the Application**:
   Start the server:
   ```bash
   npm run start
   ```

Your backend server should now be up and running, ready to handle GraphQL requests and manage user authentication!

## Usage

### Importing Type Definitions

You can import and use the type definitions provided by the `@adaptic/backend-legacy` package to ensure type safety in your application. Here’s how to do it:

- **User Authentication**

  - `username`: String (required)
  - `password`: String (required)

For example, to use the `Workspace` type definition:

```typescript
import { Workspace } from '@adaptic/backend-legacy/types';

// Example usage of the Workspace type
const myWorkspace: Workspace = {
  id: 'workspace-id',
  name: 'My Workspace',
  createdAt: new Date(),
  updatedAt: new Date(),
};
```

- **User Authentication**

  - On successful authentication:
    ```json
    {
      "token": "JWT_TOKEN_STRING",
      "user": {
        "id": "USER_ID",
        "username": "USERNAME"
      }
    }
    ```

When performing a GraphQL query or mutation, you can use the imported type definitions to ensure your variables and data are correctly typed:

```typescript
import { gql } from '@apollo/client';
import { WorkspaceInput } from '@adaptic/backend-legacy/types';

To test the backend, use the following sample data:

- **User Credentials**

  - Username: `testuser`
  - Password: `password123`

- **GraphQL Query Example**
  ```graphql
  query {
    user(id: "USER_ID") {
      id
      name
    }
  }
`;

// Example usage with the WorkspaceInput type
const newWorkspace: WorkspaceInput = {
  name: 'New Workspace',
};

const createWorkspace = async () => {
  const response = await apolloClient.mutate({
    mutation: CREATE_WORKSPACE,
    variables: { input: newWorkspace },
  });
  console.log(response.data);
};
```

### Code Examples

#### Defining a Function with Type Safety

#### User Authentication

```javascript
const authenticateUser = async (username, password) => {
  const response = await fetch('http://localhost:PORT/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        mutation {
          login(username: "${username}", password: "${password}") {
            token
            user {
              id
              username
            }
          }
        }
      `
    })
  })
  const data = await response.json()
  return data
}

// Usage
authenticateUser('testuser', 'password123').then(console.log)
```

#### GraphQL Query

```javascript
const fetchUserData = async userId => {
  const response = await fetch('http://localhost:PORT/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query {
          user(id: "${userId}") {
            id
            username
            email
          }
        }
      `
    })
  })
  const data = await response.json()
  return data
}

// Usage
fetchUserData('USER_ID').then(console.log)
```

## Contributing

We welcome contributions to the `@adaptic/backend-legacy` repository! To contribute, please follow these guidelines:

1. **Fork the Repository**: Click the "Fork" button at the top right of the repository page.
2. **Clone Your Fork**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/YOUR_USERNAME/@adaptic/backend-legacy.git
   ```
3. **Create a Branch**: Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Changes**: Implement your changes and ensure they are well-tested.
5. **Commit Your Changes**: Commit your changes with a descriptive message.
   ```bash
   git commit -m "Add your message here"
   ```
6. **Push to Your Fork**: Push your changes to your forked repository.
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**: Go to the original repository and create a pull request from your branch.

Please ensure that your code adheres to the existing style and includes appropriate tests.

## License

This repository is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

We would like to thank the open-source community for their contributions and support.

---

This project is a product of [Adaptic.ai](https://adaptic.ai).

Thanks for reading this far! Why did the developer go broke? Because he used up all his cache!
