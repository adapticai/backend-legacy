# adaptic-backend

![Adaptic Readme Banner](https://adaptic-public.s3.ap-southeast-2.amazonaws.com/adaptic-readme-banner.png?=1)

## Description

The `adaptic-backend` repository is a highly scalable backend solution designed for modern web applications. It leverages the power of **Prisma** for data management, **Apollo Server** for handling GraphQL requests, and **TypeGraphQL** for building type-safe GraphQL APIs. This repository features both GraphQL and RESTful APIs, real-time subscriptions, and robust authentication mechanisms, making it an ideal choice for developers looking to create secure and efficient server-side applications.

## File Tree Structure

```
- fix-import-paths.js          # Automates the process of fixing import paths in generated TypeGraphQL Prisma resolver output files.
- package.json                 # Manages project configurations, scripts, and dependencies for the backend solution.
- schema.prisma                # Defines the data model for the application, establishing the structure of the database.
- src/
  - auth.ts                    # Implements JWT authentication middleware to secure routes.
  - server.ts                  # Sets up the Express server integrated with Apollo Server for GraphQL requests and real-time updates.
- tsconfig.json                # Configures TypeScript compiler options for the project.
```

### Purpose of Each File

- **fix-import-paths.js**: Automates fixing import paths in generated TypeGraphQL Prisma resolver output files.
- **package.json**: Essential for managing project configurations, scripts, and dependencies.
- **schema.prisma**: Defines the data model for the application and establishes the database structure.
- **auth.ts**: Implements JWT authentication middleware to secure routes.
- **server.ts**: Initializes the Express server and integrates Apollo Server for GraphQL requests and real-time updates.
- **tsconfig.json**: Configures TypeScript compiler options for the project.

## Features

This repository offers a comprehensive backend solution for web applications, leveraging modern technologies to provide a robust and efficient server environment. Key features include:

- **GraphQL API**: Flexible and efficient data querying.
- **Prisma Integration**: Seamless database interactions with type safety.
- **Secure Authentication**: JSON Web Tokens (JWT) for user authentication.
- **Real-time Data Handling**: WebSocket subscriptions for live updates.
- **Error Handling Middleware**: Custom error management.
- **File Management**: Utilities for fixing import paths in generated code.
- **TypeScript Support**: Improved code quality and maintainability.

## Prerequisites

Before you begin, ensure you have the following prerequisites set up:

### NPM Dependencies

The following NPM packages are required:

- `@apollo/server`
- `@prisma/client`
- `body-parser`
- `cors`
- `express`
- `express-rate-limit`
- `graphql`
- `graphql-fields`
- `graphql-scalars`
- `graphql-ws`
- `ioredis`
- `jsonwebtoken`
- `prisma`
- `railway`
- `redis`
- `reflect-metadata`
- `type-graphql`
- `ws`
- `@types/body-parser`
- `@types/cors`
- `@types/express`
- `@types/graphql-fields`
- `@types/jsonwebtoken`
- `@types/node`
- `@types/ws`
- `nodemon`
- `ts-node`
- `typegraphql-prisma`
- `typescript`

### Environment Variables

Set the following environment variables:

- `DATABASE_URL`: Connection string for your database.
- `JWT_SECRET`: Secret key for signing JWT tokens.
- `PORT`: Port on which the server will run (default is usually 4000).

### Environment Setup

1. Ensure you have Node.js and npm installed. Download from [Node.js official website](https://nodejs.org/).
2. Clone the repository:
   ```bash
   git clone https://github.com/Adaptic-ai/adaptic-backend.git
   ```
3. Navigate to the project directory:
   ```bash
   cd adaptic-backend
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

### Input Parameters

The backend service accepts various input parameters depending on the GraphQL queries and mutations:

- **User Authentication**
  - `username`: String (required)
  - `password`: String (required)

- **GraphQL Queries**
  - `query`: String (required) - The GraphQL query string.
  - `variables`: Object (optional) - Variables for the query.

### Expected Output

The expected output varies based on the GraphQL operation performed:

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

- **GraphQL Query Response**
  - For a successful query:
    ```json
    {
      "data": {
        "user": {
          "id": "USER_ID",
          "username": "USERNAME",
          "email": "USER_EMAIL"
        }
      }
    }
    ```

### Test Data

To test the backend, use the following sample data:

- **User Credentials**
  - Username: `testuser`
  - Password: `password123`

- **GraphQL Query Example**
  ```graphql
  query {
    user(id: "USER_ID") {
      id
      username
      email
    }
  }
  ```

### Code Examples

Here’s how to interact with the backend using JavaScript and the `fetch` API:

#### User Authentication
```javascript
const authenticateUser = async (username, password) => {
  const response = await fetch('http://localhost:PORT/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
      `,
    }),
  });
  const data = await response.json();
  return data;
};

// Usage
authenticateUser('testuser', 'password123').then(console.log);
```

#### GraphQL Query
```javascript
const fetchUserData = async (userId) => {
  const response = await fetch('http://localhost:PORT/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
      `,
    }),
  });
  const data = await response.json();
  return data;
};

// Usage
fetchUserData('USER_ID').then(console.log);
```

## Contributing

We welcome contributions to the `adaptic-backend` repository! To contribute, please follow these guidelines:

1. **Fork the Repository**: Click the "Fork" button at the top right of the repository page.
2. **Clone Your Fork**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/YOUR_USERNAME/adaptic-backend.git
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
