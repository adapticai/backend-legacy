import { InstitutionalSentimentErrors as InstitutionalSentimentErrorsType } from './generated/typegraphql-prisma/models/InstitutionalSentimentErrors';
import {
  client as importedClient,
  ApolloClientType,
  NormalizedCacheObject,
  getApolloModules,
} from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';

/**
 * CRUD operations for the InstitutionalSentimentErrors model.
 */

const selectionSet = `
    
  id
  timestamp
  operation
  error
  recordCount
  severity
  createdAt

  `;

export const InstitutionalSentimentErrors = {
  /**
   * Create a new InstitutionalSentimentErrors record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created InstitutionalSentimentErrors or null.
   */

  /**
   * Create a new InstitutionalSentimentErrors record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties for the new record.
   * @param globalClient - Apollo Client instance.
   * @returns The created InstitutionalSentimentErrors or null.
   */
  async create(
    props: InstitutionalSentimentErrorsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<InstitutionalSentimentErrorsType> {
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

        const CREATE_ONE_INSTITUTIONALSENTIMENTERRORS = gql`
              mutation createOneInstitutionalSentimentErrors($data: InstitutionalSentimentErrorsCreateInput!) {
                createOneInstitutionalSentimentErrors(data: $data) {
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
            error: props.error !== undefined ? props.error : undefined,
            recordCount:
              props.recordCount !== undefined ? props.recordCount : undefined,
            severity: props.severity !== undefined ? props.severity : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_ONE_INSTITUTIONALSENTIMENTERRORS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.createOneInstitutionalSentimentErrors
        ) {
          return response.data.createOneInstitutionalSentimentErrors;
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
   * Create multiple InstitutionalSentimentErrors records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of InstitutionalSentimentErrors objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(
    props: InstitutionalSentimentErrorsType[],
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

        const CREATE_MANY_INSTITUTIONALSENTIMENTERRORS = gql`
          mutation createManyInstitutionalSentimentErrors(
            $data: [InstitutionalSentimentErrorsCreateManyInput!]!
          ) {
            createManyInstitutionalSentimentErrors(data: $data) {
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
            error: prop.error !== undefined ? prop.error : undefined,
            recordCount:
              prop.recordCount !== undefined ? prop.recordCount : undefined,
            severity: prop.severity !== undefined ? prop.severity : undefined,
          })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_INSTITUTIONALSENTIMENTERRORS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.createManyInstitutionalSentimentErrors
        ) {
          return response.data.createManyInstitutionalSentimentErrors;
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
   * Update a single InstitutionalSentimentErrors record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated InstitutionalSentimentErrors or null.
   */
  async update(
    props: InstitutionalSentimentErrorsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<InstitutionalSentimentErrorsType> {
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

        const UPDATE_ONE_INSTITUTIONALSENTIMENTERRORS = gql`
          mutation updateOneInstitutionalSentimentErrors($data: InstitutionalSentimentErrorsUpdateInput!, $where: InstitutionalSentimentErrorsWhereUniqueInput!) {
            updateOneInstitutionalSentimentErrors(data: $data, where: $where) {
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
            error:
              props.error !== undefined
                ? {
                    set: props.error,
                  }
                : undefined,
            recordCount:
              props.recordCount !== undefined
                ? {
                    set: props.recordCount,
                  }
                : undefined,
            severity:
              props.severity !== undefined
                ? {
                    set: props.severity,
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
          mutation: UPDATE_ONE_INSTITUTIONALSENTIMENTERRORS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.updateOneInstitutionalSentimentErrors
        ) {
          return response.data.updateOneInstitutionalSentimentErrors;
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
   * Upsert a single InstitutionalSentimentErrors record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated InstitutionalSentimentErrors or null.
   */
  async upsert(
    props: InstitutionalSentimentErrorsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<InstitutionalSentimentErrorsType> {
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

        const UPSERT_ONE_INSTITUTIONALSENTIMENTERRORS = gql`
          mutation upsertOneInstitutionalSentimentErrors($where: InstitutionalSentimentErrorsWhereUniqueInput!, $create: InstitutionalSentimentErrorsCreateInput!, $update: InstitutionalSentimentErrorsUpdateInput!) {
            upsertOneInstitutionalSentimentErrors(where: $where, create: $create, update: $update) {
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
            error: props.error !== undefined ? props.error : undefined,
            recordCount:
              props.recordCount !== undefined ? props.recordCount : undefined,
            severity: props.severity !== undefined ? props.severity : undefined,
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
            error:
              props.error !== undefined
                ? {
                    set: props.error,
                  }
                : undefined,
            recordCount:
              props.recordCount !== undefined
                ? {
                    set: props.recordCount,
                  }
                : undefined,
            severity:
              props.severity !== undefined
                ? {
                    set: props.severity,
                  }
                : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_INSTITUTIONALSENTIMENTERRORS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.upsertOneInstitutionalSentimentErrors
        ) {
          return response.data.upsertOneInstitutionalSentimentErrors;
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
   * Update multiple InstitutionalSentimentErrors records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of InstitutionalSentimentErrors objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(
    props: InstitutionalSentimentErrorsType[],
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

        const UPDATE_MANY_INSTITUTIONALSENTIMENTERRORS = gql`
          mutation updateManyInstitutionalSentimentErrors(
            $data: [InstitutionalSentimentErrorsCreateManyInput!]!
          ) {
            updateManyInstitutionalSentimentErrors(data: $data) {
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
            error:
              prop.error !== undefined
                ? {
                    set: prop.error,
                  }
                : undefined,
            recordCount:
              prop.recordCount !== undefined
                ? {
                    set: prop.recordCount,
                  }
                : undefined,
            severity:
              prop.severity !== undefined
                ? {
                    set: prop.severity,
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
          mutation: UPDATE_MANY_INSTITUTIONALSENTIMENTERRORS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.updateManyInstitutionalSentimentErrors
        ) {
          return response.data.updateManyInstitutionalSentimentErrors;
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
   * Delete a single InstitutionalSentimentErrors record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted InstitutionalSentimentErrors or null.
   */
  async delete(
    props: InstitutionalSentimentErrorsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<InstitutionalSentimentErrorsType> {
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

        const DELETE_ONE_INSTITUTIONALSENTIMENTERRORS = gql`
          mutation deleteOneInstitutionalSentimentErrors(
            $where: InstitutionalSentimentErrorsWhereUniqueInput!
          ) {
            deleteOneInstitutionalSentimentErrors(where: $where) {
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
          mutation: DELETE_ONE_INSTITUTIONALSENTIMENTERRORS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.deleteOneInstitutionalSentimentErrors
        ) {
          return response.data.deleteOneInstitutionalSentimentErrors;
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
   * Retrieve a single InstitutionalSentimentErrors record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved InstitutionalSentimentErrors or null.
   */
  async get(
    props: InstitutionalSentimentErrorsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>,
    whereInput?: any
  ): Promise<InstitutionalSentimentErrorsType | null> {
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

        const GET_INSTITUTIONALSENTIMENTERRORS = gql`
          query getInstitutionalSentimentErrors($where: InstitutionalSentimentErrorsWhereUniqueInput!) {
            getInstitutionalSentimentErrors(where: $where) {
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
          query: GET_INSTITUTIONALSENTIMENTERRORS,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        return response.data?.getInstitutionalSentimentErrors ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentErrors found') {
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
   * Retrieve all InstitutionalSentimentErrors records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of InstitutionalSentimentErrors records or null.
   */
  async getAll(
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<InstitutionalSentimentErrorsType[] | null> {
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

        const GET_ALL_INSTITUTIONALSENTIMENTERRORS = gql`
          query getAllInstitutionalSentimentErrors {
            institutionalSentimentErrors {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_INSTITUTIONALSENTIMENTERRORS,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        return response.data?.institutionalSentimentErrors ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentErrors found') {
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
   * Find multiple InstitutionalSentimentErrors records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found InstitutionalSentimentErrors records or null.
   */
  async findMany(
    props: InstitutionalSentimentErrorsType,
    globalClient?: ApolloClientType<NormalizedCacheObject>,
    whereInput?: any
  ): Promise<InstitutionalSentimentErrorsType[] | null> {
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

        const FIND_MANY_INSTITUTIONALSENTIMENTERRORS = gql`
          query findManyInstitutionalSentimentErrors($where: InstitutionalSentimentErrorsWhereInput!) {
            institutionalSentimentErrors(where: $where) {
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
          query: FIND_MANY_INSTITUTIONALSENTIMENTERRORS,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.institutionalsentimenterrors
        ) {
          return response.data.institutionalSentimentErrors;
        } else {
          return [] as InstitutionalSentimentErrorsType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentErrors found') {
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
