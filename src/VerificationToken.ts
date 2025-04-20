
  
import { VerificationToken as VerificationTokenType } from './generated/typegraphql-prisma/models/VerificationToken';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the VerificationToken model.
   */

  const selectionSet = `
    
  id
  identifier
  token
  expires

  `;

  export const VerificationToken = {

    /**
     * Create a new VerificationToken record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created VerificationToken or null.
     */

    /**
     * Create a new VerificationToken record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created VerificationToken or null.
     */
    async create(props: VerificationTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<VerificationTokenType> {
      // Maximum number of retries for database connection issues
      const MAX_RETRIES = 3;
      let retryCount = 0;
      let lastError: any = null;

      // Retry loop to handle potential database connection issues
      while (retryCount < MAX_RETRIES) {
        try {
          const [modules, client] = await Promise.all([
            getApolloModules(),
            globalClient
              ? Promise.resolve(globalClient)
              : importedClient
          ]);

          const { gql, ApolloError } = modules;

          const CREATE_ONE_VERIFICATIONTOKEN = gql`
              mutation createOneVerificationToken($data: VerificationTokenCreateInput!) {
                createOneVerificationToken(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                identifier: props.identifier !== undefined ? props.identifier : undefined,
  token: props.token !== undefined ? props.token : undefined,
  expires: props.expires !== undefined ? props.expires : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_VERIFICATIONTOKEN,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneVerificationToken) {
            return response.data.createOneVerificationToken;
          } else {
            return null as any;
          }
        } catch (error: any) {
          lastError = error;

          // Check if this is a database connection error that we should retry
          const isConnectionError =
            error.message?.includes('Server has closed the connection') ||
            error.message?.includes('Cannot reach database server') ||
            error.message?.includes('Connection timed out') ||
            error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
            (error.networkError && error.networkError.message?.includes('Failed to fetch'));

          if (isConnectionError && retryCount < MAX_RETRIES - 1) {
            retryCount++;
            const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
            console.warn("Database connection error, retrying...");
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log the error and rethrow
          console.error("Database error occurred:", error);
          throw error;
        }
      }

      // If we exhausted retries, throw the last error
      throw lastError;
    },

  /**
   * Create multiple VerificationToken records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of VerificationToken objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: VerificationTokenType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_MANY_VERIFICATIONTOKEN = gql`
          mutation createManyVerificationToken($data: [VerificationTokenCreateManyInput!]!) {
            createManyVerificationToken(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      identifier: prop.identifier !== undefined ? prop.identifier : undefined,
  token: prop.token !== undefined ? prop.token : undefined,
  expires: prop.expires !== undefined ? prop.expires : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_VERIFICATIONTOKEN,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyVerificationToken) {
          return response.data.createManyVerificationToken;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single VerificationToken record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated VerificationToken or null.
   */
  async update(props: VerificationTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<VerificationTokenType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_ONE_VERIFICATIONTOKEN = gql`
          mutation updateOneVerificationToken($data: VerificationTokenUpdateInput!, $where: VerificationTokenWhereUniqueInput!) {
            updateOneVerificationToken(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  identifier: props.identifier !== undefined ? {
            set: props.identifier 
           } : undefined,
  token: props.token !== undefined ? {
            set: props.token 
           } : undefined,
  expires: props.expires !== undefined ? {
            set: props.expires 
           } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_VERIFICATIONTOKEN,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneVerificationToken) {
          return response.data.updateOneVerificationToken;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single VerificationToken record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated VerificationToken or null.
   */
  async upsert(props: VerificationTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<VerificationTokenType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPSERT_ONE_VERIFICATIONTOKEN = gql`
          mutation upsertOneVerificationToken($where: VerificationTokenWhereUniqueInput!, $create: VerificationTokenCreateInput!, $update: VerificationTokenUpdateInput!) {
            upsertOneVerificationToken(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
      },
          create: {
        identifier: props.identifier !== undefined ? props.identifier : undefined,
  token: props.token !== undefined ? props.token : undefined,
  expires: props.expires !== undefined ? props.expires : undefined,
      },
          update: {
      identifier: props.identifier !== undefined ? {
            set: props.identifier 
           } : undefined,
  token: props.token !== undefined ? {
            set: props.token 
           } : undefined,
  expires: props.expires !== undefined ? {
            set: props.expires 
           } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_VERIFICATIONTOKEN,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneVerificationToken) {
          return response.data.upsertOneVerificationToken;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple VerificationToken records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of VerificationToken objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: VerificationTokenType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_MANY_VERIFICATIONTOKEN = gql`
          mutation updateManyVerificationToken($data: [VerificationTokenCreateManyInput!]!) {
            updateManyVerificationToken(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  identifier: prop.identifier !== undefined ? {
            set: prop.identifier 
           } : undefined,
  token: prop.token !== undefined ? {
            set: prop.token 
           } : undefined,
  expires: prop.expires !== undefined ? {
            set: prop.expires 
           } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_VERIFICATIONTOKEN,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyVerificationToken) {
          return response.data.updateManyVerificationToken;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single VerificationToken record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted VerificationToken or null.
   */
  async delete(props: VerificationTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<VerificationTokenType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const DELETE_ONE_VERIFICATIONTOKEN = gql`
          mutation deleteOneVerificationToken($where: VerificationTokenWhereUniqueInput!) {
            deleteOneVerificationToken(where: $where) {
              id
            }
          }`;

        const variables = {
          where: {
            id: props.id ? props.id : undefined,
          }
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: DELETE_ONE_VERIFICATIONTOKEN,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneVerificationToken) {
          return response.data.deleteOneVerificationToken;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single VerificationToken record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved VerificationToken or null.
   */
  async get(props: VerificationTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<VerificationTokenType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const GET_VERIFICATIONTOKEN = gql`
          query getVerificationToken($where: VerificationTokenWhereUniqueInput!) {
            getVerificationToken(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_VERIFICATIONTOKEN,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getVerificationToken ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No VerificationToken found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all VerificationTokens records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of VerificationToken records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<VerificationTokenType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const GET_ALL_VERIFICATIONTOKEN = gql`
          query getAllVerificationToken {
            verificationTokens {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_VERIFICATIONTOKEN,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.verificationTokens ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No VerificationToken found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple VerificationToken records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found VerificationToken records or null.
   */
  async findMany(props: VerificationTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<VerificationTokenType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const FIND_MANY_VERIFICATIONTOKEN = gql`
          query findManyVerificationToken($where: VerificationTokenWhereInput!) {
            verificationTokens(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_VERIFICATIONTOKEN,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.verificationtokens) {
          return response.data.verificationTokens;
        } else {
          return [] as VerificationTokenType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No VerificationToken found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  }
};
