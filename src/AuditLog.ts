import { AuditLog as AuditLogType } from './generated/typegraphql-prisma/models/AuditLog';
import {
  client as importedClient,
  ApolloClientType,
  NormalizedCacheObject,
  getApolloModules,
} from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';

/**
 * CRUD operations for the AuditLog model.
 */

const selectionSet = `
    
  id
  timestamp
  userId
  operationType
  modelName
  recordId
  changedFields
  operationName
  ipAddress
  metadata

  `;

export const AuditLog = {
  /**
   * Create a new AuditLog record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created AuditLog or null.
   */

  /**
   * Create a new AuditLog record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties for the new record.
   * @param globalClient - Apollo Client instance.
   * @returns The created AuditLog or null.
   */
  async create(
    props: AuditLogType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<AuditLogType> {
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

        const CREATE_ONE_AUDITLOG = gql`
              mutation createOneAuditLog($data: AuditLogCreateInput!) {
                createOneAuditLog(data: $data) {
                  ${selectionSet}
                }
              }
           `;

        const variables = {
          data: {
            timestamp:
              props.timestamp !== undefined ? props.timestamp : undefined,
            userId: props.userId !== undefined ? props.userId : undefined,
            operationType:
              props.operationType !== undefined
                ? props.operationType
                : undefined,
            modelName:
              props.modelName !== undefined ? props.modelName : undefined,
            recordId: props.recordId !== undefined ? props.recordId : undefined,
            changedFields:
              props.changedFields !== undefined
                ? props.changedFields
                : undefined,
            operationName:
              props.operationName !== undefined
                ? props.operationName
                : undefined,
            ipAddress:
              props.ipAddress !== undefined ? props.ipAddress : undefined,
            metadata: props.metadata !== undefined ? props.metadata : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_ONE_AUDITLOG,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createOneAuditLog) {
          return response.data.createOneAuditLog;
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
   * Create multiple AuditLog records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of AuditLog objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(
    props: AuditLogType[],
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

        const CREATE_MANY_AUDITLOG = gql`
          mutation createManyAuditLog($data: [AuditLogCreateManyInput!]!) {
            createManyAuditLog(data: $data) {
              count
            }
          }
        `;

        const variables = {
          data: props.map((prop) => ({
            timestamp:
              prop.timestamp !== undefined ? prop.timestamp : undefined,
            userId: prop.userId !== undefined ? prop.userId : undefined,
            operationType:
              prop.operationType !== undefined ? prop.operationType : undefined,
            modelName:
              prop.modelName !== undefined ? prop.modelName : undefined,
            recordId: prop.recordId !== undefined ? prop.recordId : undefined,
            changedFields:
              prop.changedFields !== undefined ? prop.changedFields : undefined,
            operationName:
              prop.operationName !== undefined ? prop.operationName : undefined,
            ipAddress:
              prop.ipAddress !== undefined ? prop.ipAddress : undefined,
            metadata: prop.metadata !== undefined ? prop.metadata : undefined,
          })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_AUDITLOG,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyAuditLog) {
          return response.data.createManyAuditLog;
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
   * Update a single AuditLog record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated AuditLog or null.
   */
  async update(
    props: AuditLogType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<AuditLogType> {
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

        const UPDATE_ONE_AUDITLOG = gql`
          mutation updateOneAuditLog($data: AuditLogUpdateInput!, $where: AuditLogWhereUniqueInput!) {
            updateOneAuditLog(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
            recordId:
              props.recordId !== undefined
                ? {
                    equals: props.recordId,
                  }
                : undefined,
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
            userId:
              props.userId !== undefined
                ? {
                    set: props.userId,
                  }
                : undefined,
            operationType:
              props.operationType !== undefined
                ? {
                    set: props.operationType,
                  }
                : undefined,
            modelName:
              props.modelName !== undefined
                ? {
                    set: props.modelName,
                  }
                : undefined,
            recordId:
              props.recordId !== undefined
                ? {
                    set: props.recordId,
                  }
                : undefined,
            changedFields:
              props.changedFields !== undefined
                ? {
                    set: props.changedFields,
                  }
                : undefined,
            operationName:
              props.operationName !== undefined
                ? {
                    set: props.operationName,
                  }
                : undefined,
            ipAddress:
              props.ipAddress !== undefined
                ? {
                    set: props.ipAddress,
                  }
                : undefined,
            metadata:
              props.metadata !== undefined
                ? {
                    set: props.metadata,
                  }
                : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_AUDITLOG,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneAuditLog) {
          return response.data.updateOneAuditLog;
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
   * Upsert a single AuditLog record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated AuditLog or null.
   */
  async upsert(
    props: AuditLogType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<AuditLogType> {
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

        const UPSERT_ONE_AUDITLOG = gql`
          mutation upsertOneAuditLog($where: AuditLogWhereUniqueInput!, $create: AuditLogCreateInput!, $update: AuditLogUpdateInput!) {
            upsertOneAuditLog(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
            recordId:
              props.recordId !== undefined
                ? {
                    equals: props.recordId,
                  }
                : undefined,
          },
          create: {
            timestamp:
              props.timestamp !== undefined ? props.timestamp : undefined,
            userId: props.userId !== undefined ? props.userId : undefined,
            operationType:
              props.operationType !== undefined
                ? props.operationType
                : undefined,
            modelName:
              props.modelName !== undefined ? props.modelName : undefined,
            recordId: props.recordId !== undefined ? props.recordId : undefined,
            changedFields:
              props.changedFields !== undefined
                ? props.changedFields
                : undefined,
            operationName:
              props.operationName !== undefined
                ? props.operationName
                : undefined,
            ipAddress:
              props.ipAddress !== undefined ? props.ipAddress : undefined,
            metadata: props.metadata !== undefined ? props.metadata : undefined,
          },
          update: {
            timestamp:
              props.timestamp !== undefined
                ? {
                    set: props.timestamp,
                  }
                : undefined,
            userId:
              props.userId !== undefined
                ? {
                    set: props.userId,
                  }
                : undefined,
            operationType:
              props.operationType !== undefined
                ? {
                    set: props.operationType,
                  }
                : undefined,
            modelName:
              props.modelName !== undefined
                ? {
                    set: props.modelName,
                  }
                : undefined,
            recordId:
              props.recordId !== undefined
                ? {
                    set: props.recordId,
                  }
                : undefined,
            changedFields:
              props.changedFields !== undefined
                ? {
                    set: props.changedFields,
                  }
                : undefined,
            operationName:
              props.operationName !== undefined
                ? {
                    set: props.operationName,
                  }
                : undefined,
            ipAddress:
              props.ipAddress !== undefined
                ? {
                    set: props.ipAddress,
                  }
                : undefined,
            metadata:
              props.metadata !== undefined
                ? {
                    set: props.metadata,
                  }
                : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_AUDITLOG,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneAuditLog) {
          return response.data.upsertOneAuditLog;
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
   * Update multiple AuditLog records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of AuditLog objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(
    props: AuditLogType[],
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

        const UPDATE_MANY_AUDITLOG = gql`
          mutation updateManyAuditLog($data: [AuditLogCreateManyInput!]!) {
            updateManyAuditLog(data: $data) {
              count
            }
          }
        `;

        const variables = props.map((prop) => ({
          where: {
            id: prop.id !== undefined ? prop.id : undefined,
            recordId:
              prop.recordId !== undefined
                ? {
                    equals: prop.recordId,
                  }
                : undefined,
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
            userId:
              prop.userId !== undefined
                ? {
                    set: prop.userId,
                  }
                : undefined,
            operationType:
              prop.operationType !== undefined
                ? {
                    set: prop.operationType,
                  }
                : undefined,
            modelName:
              prop.modelName !== undefined
                ? {
                    set: prop.modelName,
                  }
                : undefined,
            recordId:
              prop.recordId !== undefined
                ? {
                    set: prop.recordId,
                  }
                : undefined,
            changedFields:
              prop.changedFields !== undefined
                ? {
                    set: prop.changedFields,
                  }
                : undefined,
            operationName:
              prop.operationName !== undefined
                ? {
                    set: prop.operationName,
                  }
                : undefined,
            ipAddress:
              prop.ipAddress !== undefined
                ? {
                    set: prop.ipAddress,
                  }
                : undefined,
            metadata:
              prop.metadata !== undefined
                ? {
                    set: prop.metadata,
                  }
                : undefined,
          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_AUDITLOG,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyAuditLog) {
          return response.data.updateManyAuditLog;
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
   * Delete a single AuditLog record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted AuditLog or null.
   */
  async delete(
    props: AuditLogType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<AuditLogType> {
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

        const DELETE_ONE_AUDITLOG = gql`
          mutation deleteOneAuditLog($where: AuditLogWhereUniqueInput!) {
            deleteOneAuditLog(where: $where) {
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
          mutation: DELETE_ONE_AUDITLOG,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneAuditLog) {
          return response.data.deleteOneAuditLog;
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
   * Retrieve a single AuditLog record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved AuditLog or null.
   */
  async get(
    props: AuditLogType,
    globalClient?: ApolloClientType<NormalizedCacheObject>,
    whereInput?: any
  ): Promise<AuditLogType | null> {
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

        const GET_AUDITLOG = gql`
          query getAuditLog($where: AuditLogWhereUniqueInput!) {
            getAuditLog(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput
            ? whereInput
            : {
                id: props.id !== undefined ? props.id : undefined,
                recordId:
                  props.recordId !== undefined
                    ? {
                        equals: props.recordId,
                      }
                    : undefined,
              },
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_AUDITLOG,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        return response.data?.getAuditLog ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No AuditLog found') {
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
   * Retrieve all AuditLogs records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of AuditLog records or null.
   */
  async getAll(
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<AuditLogType[] | null> {
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

        const GET_ALL_AUDITLOG = gql`
          query getAllAuditLog {
            auditLogs {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_AUDITLOG,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        return response.data?.auditLogs ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No AuditLog found') {
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
   * Find multiple AuditLog records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found AuditLog records or null.
   */
  async findMany(
    props: AuditLogType,
    globalClient?: ApolloClientType<NormalizedCacheObject>,
    whereInput?: any
  ): Promise<AuditLogType[] | null> {
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

        const FIND_MANY_AUDITLOG = gql`
          query findManyAuditLog($where: AuditLogWhereInput!) {
            auditLogs(where: $where) {
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
                recordId:
                  props.recordId !== undefined
                    ? {
                        equals: props.recordId,
                      }
                    : undefined,
              },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_AUDITLOG,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.auditlogs) {
          return response.data.auditLogs;
        } else {
          return [] as AuditLogType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No AuditLog found') {
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
