import { InstitutionalSentimentMetrics as InstitutionalSentimentMetricsType } from './generated/typegraphql-prisma/models/InstitutionalSentimentMetrics';
import {
  client as importedClient,
  ApolloClientType,
  NormalizedCacheObject,
  getApolloModules,
} from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';

/**
 * CRUD operations for the InstitutionalSentimentMetrics model.
 */

const selectionSet = `
    
  id
  timestamp
  operation
  totalRecords
  successCount
  errorCount
  processingTimeMs
  batchSize
  createdAt

  `;

export const InstitutionalSentimentMetrics = {
  /**
   * Create a new InstitutionalSentimentMetrics record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created InstitutionalSentimentMetrics or null.
   */

  /**
   * Create a new InstitutionalSentimentMetrics record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties for the new record.
   * @param globalClient - Apollo Client instance.
   * @returns The created InstitutionalSentimentMetrics or null.
   */
  async create(
    props: InstitutionalSentimentMetricsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<InstitutionalSentimentMetricsType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_ONE_INSTITUTIONALSENTIMENTMETRICS = gql`
              mutation createOneInstitutionalSentimentMetrics($data: InstitutionalSentimentMetricsCreateInput!) {
                createOneInstitutionalSentimentMetrics(data: $data) {
                  ${selectionSet}
                }
              }
           `;

        const variables = {
          data: {
            timestamp:
              props.timestamp !== undefined ? props.timestamp : undefined,
            operation:
              props.operation !== undefined ? props.operation : undefined,
            totalRecords:
              props.totalRecords !== undefined ? props.totalRecords : undefined,
            successCount:
              props.successCount !== undefined ? props.successCount : undefined,
            errorCount:
              props.errorCount !== undefined ? props.errorCount : undefined,
            processingTimeMs:
              props.processingTimeMs !== undefined
                ? props.processingTimeMs
                : undefined,
            batchSize:
              props.batchSize !== undefined ? props.batchSize : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_ONE_INSTITUTIONALSENTIMENTMETRICS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.createOneInstitutionalSentimentMetrics
        ) {
          return response.data.createOneInstitutionalSentimentMetrics;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Create multiple InstitutionalSentimentMetrics records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of InstitutionalSentimentMetrics objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(
    props: InstitutionalSentimentMetricsType[],
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_MANY_INSTITUTIONALSENTIMENTMETRICS = gql`
          mutation createManyInstitutionalSentimentMetrics(
            $data: [InstitutionalSentimentMetricsCreateManyInput!]!
          ) {
            createManyInstitutionalSentimentMetrics(data: $data) {
              count
            }
          }
        `;

        const variables = {
          data: props.map((prop) => ({
            timestamp:
              prop.timestamp !== undefined ? prop.timestamp : undefined,
            operation:
              prop.operation !== undefined ? prop.operation : undefined,
            totalRecords:
              prop.totalRecords !== undefined ? prop.totalRecords : undefined,
            successCount:
              prop.successCount !== undefined ? prop.successCount : undefined,
            errorCount:
              prop.errorCount !== undefined ? prop.errorCount : undefined,
            processingTimeMs:
              prop.processingTimeMs !== undefined
                ? prop.processingTimeMs
                : undefined,
            batchSize:
              prop.batchSize !== undefined ? prop.batchSize : undefined,
          })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_INSTITUTIONALSENTIMENTMETRICS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.createManyInstitutionalSentimentMetrics
        ) {
          return response.data.createManyInstitutionalSentimentMetrics;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single InstitutionalSentimentMetrics record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated InstitutionalSentimentMetrics or null.
   */
  async update(
    props: InstitutionalSentimentMetricsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<InstitutionalSentimentMetricsType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_ONE_INSTITUTIONALSENTIMENTMETRICS = gql`
          mutation updateOneInstitutionalSentimentMetrics($data: InstitutionalSentimentMetricsUpdateInput!, $where: InstitutionalSentimentMetricsWhereUniqueInput!) {
            updateOneInstitutionalSentimentMetrics(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
          },
          data: {
            id:
              props.id !== undefined
                ? {
                    set: props.id,
                  }
                : undefined,
            timestamp:
              props.timestamp !== undefined
                ? {
                    set: props.timestamp,
                  }
                : undefined,
            operation:
              props.operation !== undefined
                ? {
                    set: props.operation,
                  }
                : undefined,
            totalRecords:
              props.totalRecords !== undefined
                ? {
                    set: props.totalRecords,
                  }
                : undefined,
            successCount:
              props.successCount !== undefined
                ? {
                    set: props.successCount,
                  }
                : undefined,
            errorCount:
              props.errorCount !== undefined
                ? {
                    set: props.errorCount,
                  }
                : undefined,
            processingTimeMs:
              props.processingTimeMs !== undefined
                ? {
                    set: props.processingTimeMs,
                  }
                : undefined,
            batchSize:
              props.batchSize !== undefined
                ? {
                    set: props.batchSize,
                  }
                : undefined,
            createdAt:
              props.createdAt !== undefined
                ? {
                    set: props.createdAt,
                  }
                : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_INSTITUTIONALSENTIMENTMETRICS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.updateOneInstitutionalSentimentMetrics
        ) {
          return response.data.updateOneInstitutionalSentimentMetrics;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single InstitutionalSentimentMetrics record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated InstitutionalSentimentMetrics or null.
   */
  async upsert(
    props: InstitutionalSentimentMetricsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<InstitutionalSentimentMetricsType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const UPSERT_ONE_INSTITUTIONALSENTIMENTMETRICS = gql`
          mutation upsertOneInstitutionalSentimentMetrics($where: InstitutionalSentimentMetricsWhereUniqueInput!, $create: InstitutionalSentimentMetricsCreateInput!, $update: InstitutionalSentimentMetricsUpdateInput!) {
            upsertOneInstitutionalSentimentMetrics(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
          },
          create: {
            timestamp:
              props.timestamp !== undefined ? props.timestamp : undefined,
            operation:
              props.operation !== undefined ? props.operation : undefined,
            totalRecords:
              props.totalRecords !== undefined ? props.totalRecords : undefined,
            successCount:
              props.successCount !== undefined ? props.successCount : undefined,
            errorCount:
              props.errorCount !== undefined ? props.errorCount : undefined,
            processingTimeMs:
              props.processingTimeMs !== undefined
                ? props.processingTimeMs
                : undefined,
            batchSize:
              props.batchSize !== undefined ? props.batchSize : undefined,
          },
          update: {
            timestamp:
              props.timestamp !== undefined
                ? {
                    set: props.timestamp,
                  }
                : undefined,
            operation:
              props.operation !== undefined
                ? {
                    set: props.operation,
                  }
                : undefined,
            totalRecords:
              props.totalRecords !== undefined
                ? {
                    set: props.totalRecords,
                  }
                : undefined,
            successCount:
              props.successCount !== undefined
                ? {
                    set: props.successCount,
                  }
                : undefined,
            errorCount:
              props.errorCount !== undefined
                ? {
                    set: props.errorCount,
                  }
                : undefined,
            processingTimeMs:
              props.processingTimeMs !== undefined
                ? {
                    set: props.processingTimeMs,
                  }
                : undefined,
            batchSize:
              props.batchSize !== undefined
                ? {
                    set: props.batchSize,
                  }
                : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_INSTITUTIONALSENTIMENTMETRICS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.upsertOneInstitutionalSentimentMetrics
        ) {
          return response.data.upsertOneInstitutionalSentimentMetrics;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple InstitutionalSentimentMetrics records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of InstitutionalSentimentMetrics objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(
    props: InstitutionalSentimentMetricsType[],
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_MANY_INSTITUTIONALSENTIMENTMETRICS = gql`
          mutation updateManyInstitutionalSentimentMetrics(
            $data: [InstitutionalSentimentMetricsCreateManyInput!]!
          ) {
            updateManyInstitutionalSentimentMetrics(data: $data) {
              count
            }
          }
        `;

        const variables = props.map((prop) => ({
          where: {
            id: prop.id !== undefined ? prop.id : undefined,
          },
          data: {
            id:
              prop.id !== undefined
                ? {
                    set: prop.id,
                  }
                : undefined,
            timestamp:
              prop.timestamp !== undefined
                ? {
                    set: prop.timestamp,
                  }
                : undefined,
            operation:
              prop.operation !== undefined
                ? {
                    set: prop.operation,
                  }
                : undefined,
            totalRecords:
              prop.totalRecords !== undefined
                ? {
                    set: prop.totalRecords,
                  }
                : undefined,
            successCount:
              prop.successCount !== undefined
                ? {
                    set: prop.successCount,
                  }
                : undefined,
            errorCount:
              prop.errorCount !== undefined
                ? {
                    set: prop.errorCount,
                  }
                : undefined,
            processingTimeMs:
              prop.processingTimeMs !== undefined
                ? {
                    set: prop.processingTimeMs,
                  }
                : undefined,
            batchSize:
              prop.batchSize !== undefined
                ? {
                    set: prop.batchSize,
                  }
                : undefined,
            createdAt:
              prop.createdAt !== undefined
                ? {
                    set: prop.createdAt,
                  }
                : undefined,
          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_INSTITUTIONALSENTIMENTMETRICS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.updateManyInstitutionalSentimentMetrics
        ) {
          return response.data.updateManyInstitutionalSentimentMetrics;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single InstitutionalSentimentMetrics record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted InstitutionalSentimentMetrics or null.
   */
  async delete(
    props: InstitutionalSentimentMetricsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<InstitutionalSentimentMetricsType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const DELETE_ONE_INSTITUTIONALSENTIMENTMETRICS = gql`
          mutation deleteOneInstitutionalSentimentMetrics(
            $where: InstitutionalSentimentMetricsWhereUniqueInput!
          ) {
            deleteOneInstitutionalSentimentMetrics(where: $where) {
              id
            }
          }
        `;

        const variables = {
          where: {
            id: props.id ? props.id : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: DELETE_ONE_INSTITUTIONALSENTIMENTMETRICS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.deleteOneInstitutionalSentimentMetrics
        ) {
          return response.data.deleteOneInstitutionalSentimentMetrics;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single InstitutionalSentimentMetrics record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved InstitutionalSentimentMetrics or null.
   */
  async get(
    props: InstitutionalSentimentMetricsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>,
    whereInput?: any
  ): Promise<InstitutionalSentimentMetricsType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const GET_INSTITUTIONALSENTIMENTMETRICS = gql`
          query getInstitutionalSentimentMetrics($where: InstitutionalSentimentMetricsWhereUniqueInput!) {
            getInstitutionalSentimentMetrics(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput
            ? whereInput
            : {
                id: props.id !== undefined ? props.id : undefined,
              },
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_INSTITUTIONALSENTIMENTMETRICS,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        return response.data?.getInstitutionalSentimentMetrics ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentMetrics found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all InstitutionalSentimentMetrics records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of InstitutionalSentimentMetrics records or null.
   */
  async getAll(
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<InstitutionalSentimentMetricsType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const GET_ALL_INSTITUTIONALSENTIMENTMETRICS = gql`
          query getAllInstitutionalSentimentMetrics {
            institutionalSentimentMetrics {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_INSTITUTIONALSENTIMENTMETRICS,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        return response.data?.institutionalSentimentMetrics ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentMetrics found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple InstitutionalSentimentMetrics records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found InstitutionalSentimentMetrics records or null.
   */
  async findMany(
    props: InstitutionalSentimentMetricsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>,
    whereInput?: any
  ): Promise<InstitutionalSentimentMetricsType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const FIND_MANY_INSTITUTIONALSENTIMENTMETRICS = gql`
          query findManyInstitutionalSentimentMetrics($where: InstitutionalSentimentMetricsWhereInput!) {
            institutionalSentimentMetrics(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput
            ? whereInput
            : {
                id:
                  props.id !== undefined
                    ? {
                        equals: props.id,
                      }
                    : undefined,
              },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_INSTITUTIONALSENTIMENTMETRICS,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.institutionalsentimentmetrics
        ) {
          return response.data.institutionalSentimentMetrics;
        } else {
          return [] as InstitutionalSentimentMetricsType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentMetrics found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },
};
