
  
import { InstitutionalSentimentAlerts as InstitutionalSentimentAlertsType } from './generated/typegraphql-prisma/models/InstitutionalSentimentAlerts';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the InstitutionalSentimentAlerts model.
   */

  const selectionSet = `
    
  id
  timestamp
  type
  errorRate
  totalRecords
  errorCount
  severity
  resolved
  resolvedAt
  resolvedBy
  createdAt
  updatedAt

  `;

  export const InstitutionalSentimentAlerts = {

    /**
     * Create a new InstitutionalSentimentAlerts record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created InstitutionalSentimentAlerts or null.
     */

    /**
     * Create a new InstitutionalSentimentAlerts record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created InstitutionalSentimentAlerts or null.
     */
    async create(props: InstitutionalSentimentAlertsType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InstitutionalSentimentAlertsType> {
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

          const CREATE_ONE_INSTITUTIONALSENTIMENTALERTS = gql`
              mutation createOneInstitutionalSentimentAlerts($data: InstitutionalSentimentAlertsCreateInput!) {
                createOneInstitutionalSentimentAlerts(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  type: props.type !== undefined ? props.type : undefined,
  errorRate: props.errorRate !== undefined ? props.errorRate : undefined,
  totalRecords: props.totalRecords !== undefined ? props.totalRecords : undefined,
  errorCount: props.errorCount !== undefined ? props.errorCount : undefined,
  severity: props.severity !== undefined ? props.severity : undefined,
  resolved: props.resolved !== undefined ? props.resolved : undefined,
  resolvedAt: props.resolvedAt !== undefined ? props.resolvedAt : undefined,
  resolvedBy: props.resolvedBy !== undefined ? props.resolvedBy : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_INSTITUTIONALSENTIMENTALERTS,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneInstitutionalSentimentAlerts) {
            return response.data.createOneInstitutionalSentimentAlerts;
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
            logger.warn("Database connection error, retrying...");
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log the error and rethrow
          logger.error("Database error occurred", { error: String(error) });
          throw error;
        }
      }

      // If we exhausted retries, throw the last error
      throw lastError;
    },

  /**
   * Create multiple InstitutionalSentimentAlerts records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of InstitutionalSentimentAlerts objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: InstitutionalSentimentAlertsType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_INSTITUTIONALSENTIMENTALERTS = gql`
          mutation createManyInstitutionalSentimentAlerts($data: [InstitutionalSentimentAlertsCreateManyInput!]!) {
            createManyInstitutionalSentimentAlerts(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      timestamp: prop.timestamp !== undefined ? prop.timestamp : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  errorRate: prop.errorRate !== undefined ? prop.errorRate : undefined,
  totalRecords: prop.totalRecords !== undefined ? prop.totalRecords : undefined,
  errorCount: prop.errorCount !== undefined ? prop.errorCount : undefined,
  severity: prop.severity !== undefined ? prop.severity : undefined,
  resolved: prop.resolved !== undefined ? prop.resolved : undefined,
  resolvedAt: prop.resolvedAt !== undefined ? prop.resolvedAt : undefined,
  resolvedBy: prop.resolvedBy !== undefined ? prop.resolvedBy : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_INSTITUTIONALSENTIMENTALERTS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyInstitutionalSentimentAlerts) {
          return response.data.createManyInstitutionalSentimentAlerts;
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single InstitutionalSentimentAlerts record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated InstitutionalSentimentAlerts or null.
   */
  async update(props: InstitutionalSentimentAlertsType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InstitutionalSentimentAlertsType> {
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

        const UPDATE_ONE_INSTITUTIONALSENTIMENTALERTS = gql`
          mutation updateOneInstitutionalSentimentAlerts($data: InstitutionalSentimentAlertsUpdateInput!, $where: InstitutionalSentimentAlertsWhereUniqueInput!) {
            updateOneInstitutionalSentimentAlerts(data: $data, where: $where) {
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
  timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  errorRate: props.errorRate !== undefined ? {
            set: props.errorRate 
           } : undefined,
  totalRecords: props.totalRecords !== undefined ? {
            set: props.totalRecords 
           } : undefined,
  errorCount: props.errorCount !== undefined ? {
            set: props.errorCount 
           } : undefined,
  severity: props.severity !== undefined ? {
            set: props.severity 
           } : undefined,
  resolved: props.resolved !== undefined ? {
            set: props.resolved 
           } : undefined,
  resolvedAt: props.resolvedAt !== undefined ? {
            set: props.resolvedAt 
           } : undefined,
  resolvedBy: props.resolvedBy !== undefined ? {
            set: props.resolvedBy 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_INSTITUTIONALSENTIMENTALERTS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneInstitutionalSentimentAlerts) {
          return response.data.updateOneInstitutionalSentimentAlerts;
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single InstitutionalSentimentAlerts record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated InstitutionalSentimentAlerts or null.
   */
  async upsert(props: InstitutionalSentimentAlertsType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InstitutionalSentimentAlertsType> {
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

        const UPSERT_ONE_INSTITUTIONALSENTIMENTALERTS = gql`
          mutation upsertOneInstitutionalSentimentAlerts($where: InstitutionalSentimentAlertsWhereUniqueInput!, $create: InstitutionalSentimentAlertsCreateInput!, $update: InstitutionalSentimentAlertsUpdateInput!) {
            upsertOneInstitutionalSentimentAlerts(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
      },
          create: {
        timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  type: props.type !== undefined ? props.type : undefined,
  errorRate: props.errorRate !== undefined ? props.errorRate : undefined,
  totalRecords: props.totalRecords !== undefined ? props.totalRecords : undefined,
  errorCount: props.errorCount !== undefined ? props.errorCount : undefined,
  severity: props.severity !== undefined ? props.severity : undefined,
  resolved: props.resolved !== undefined ? props.resolved : undefined,
  resolvedAt: props.resolvedAt !== undefined ? props.resolvedAt : undefined,
  resolvedBy: props.resolvedBy !== undefined ? props.resolvedBy : undefined,
      },
          update: {
      timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  errorRate: props.errorRate !== undefined ? {
            set: props.errorRate 
           } : undefined,
  totalRecords: props.totalRecords !== undefined ? {
            set: props.totalRecords 
           } : undefined,
  errorCount: props.errorCount !== undefined ? {
            set: props.errorCount 
           } : undefined,
  severity: props.severity !== undefined ? {
            set: props.severity 
           } : undefined,
  resolved: props.resolved !== undefined ? {
            set: props.resolved 
           } : undefined,
  resolvedAt: props.resolvedAt !== undefined ? {
            set: props.resolvedAt 
           } : undefined,
  resolvedBy: props.resolvedBy !== undefined ? {
            set: props.resolvedBy 
           } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_INSTITUTIONALSENTIMENTALERTS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneInstitutionalSentimentAlerts) {
          return response.data.upsertOneInstitutionalSentimentAlerts;
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple InstitutionalSentimentAlerts records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of InstitutionalSentimentAlerts objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: InstitutionalSentimentAlertsType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_INSTITUTIONALSENTIMENTALERTS = gql`
          mutation updateManyInstitutionalSentimentAlerts($data: [InstitutionalSentimentAlertsCreateManyInput!]!) {
            updateManyInstitutionalSentimentAlerts(data: $data) {
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
  timestamp: prop.timestamp !== undefined ? {
            set: prop.timestamp 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  errorRate: prop.errorRate !== undefined ? {
            set: prop.errorRate 
           } : undefined,
  totalRecords: prop.totalRecords !== undefined ? {
            set: prop.totalRecords 
           } : undefined,
  errorCount: prop.errorCount !== undefined ? {
            set: prop.errorCount 
           } : undefined,
  severity: prop.severity !== undefined ? {
            set: prop.severity 
           } : undefined,
  resolved: prop.resolved !== undefined ? {
            set: prop.resolved 
           } : undefined,
  resolvedAt: prop.resolvedAt !== undefined ? {
            set: prop.resolvedAt 
           } : undefined,
  resolvedBy: prop.resolvedBy !== undefined ? {
            set: prop.resolvedBy 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_INSTITUTIONALSENTIMENTALERTS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyInstitutionalSentimentAlerts) {
          return response.data.updateManyInstitutionalSentimentAlerts;
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single InstitutionalSentimentAlerts record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted InstitutionalSentimentAlerts or null.
   */
  async delete(props: InstitutionalSentimentAlertsType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InstitutionalSentimentAlertsType> {
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

        const DELETE_ONE_INSTITUTIONALSENTIMENTALERTS = gql`
          mutation deleteOneInstitutionalSentimentAlerts($where: InstitutionalSentimentAlertsWhereUniqueInput!) {
            deleteOneInstitutionalSentimentAlerts(where: $where) {
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
          mutation: DELETE_ONE_INSTITUTIONALSENTIMENTALERTS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneInstitutionalSentimentAlerts) {
          return response.data.deleteOneInstitutionalSentimentAlerts;
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single InstitutionalSentimentAlerts record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved InstitutionalSentimentAlerts or null.
   */
  async get(props: InstitutionalSentimentAlertsType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<InstitutionalSentimentAlertsType | null> {
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

        const GET_INSTITUTIONALSENTIMENTALERTS = gql`
          query getInstitutionalSentimentAlerts($where: InstitutionalSentimentAlertsWhereUniqueInput!) {
            getInstitutionalSentimentAlerts(where: $where) {
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
          query: GET_INSTITUTIONALSENTIMENTALERTS,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getInstitutionalSentimentAlerts ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentAlerts found') {
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all InstitutionalSentimentAlerts records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of InstitutionalSentimentAlerts records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InstitutionalSentimentAlertsType[] | null> {
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

        const GET_ALL_INSTITUTIONALSENTIMENTALERTS = gql`
          query getAllInstitutionalSentimentAlerts {
            institutionalSentimentAlerts {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_INSTITUTIONALSENTIMENTALERTS,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.institutionalSentimentAlerts ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentAlerts found') {
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple InstitutionalSentimentAlerts records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found InstitutionalSentimentAlerts records or null.
   */
  async findMany(props: InstitutionalSentimentAlertsType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<InstitutionalSentimentAlertsType[] | null> {
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

        const FIND_MANY_INSTITUTIONALSENTIMENTALERTS = gql`
          query findManyInstitutionalSentimentAlerts($where: InstitutionalSentimentAlertsWhereInput!) {
            institutionalSentimentAlerts(where: $where) {
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
          query: FIND_MANY_INSTITUTIONALSENTIMENTALERTS,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.institutionalsentimentalerts) {
          return response.data.institutionalSentimentAlerts;
        } else {
          return [] as InstitutionalSentimentAlertsType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentAlerts found') {
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  }
};
