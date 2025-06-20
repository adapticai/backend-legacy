
  
import { SystemAlert as SystemAlertType } from './generated/typegraphql-prisma/models/SystemAlert';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the SystemAlert model.
   */

  const selectionSet = `
    
  id
  type
  severity
  title
  message
  source
  metadataModelName
  metadataVersion
  metadataJobId
  metadataMetrics
  metadataErrorDetails
  metadataRecommendations
  status
  acknowledgedBy
  acknowledgedAt
  resolvedBy
  resolvedAt
  resolutionNotes
  suppressedUntil
  escalationLevel
  notificationChannels
  createdAt
  updatedAt

  `;

  export const SystemAlert = {

    /**
     * Create a new SystemAlert record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created SystemAlert or null.
     */

    /**
     * Create a new SystemAlert record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created SystemAlert or null.
     */
    async create(props: SystemAlertType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<SystemAlertType> {
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

          const CREATE_ONE_SYSTEMALERT = gql`
              mutation createOneSystemAlert($data: SystemAlertCreateInput!) {
                createOneSystemAlert(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                type: props.type !== undefined ? props.type : undefined,
  severity: props.severity !== undefined ? props.severity : undefined,
  title: props.title !== undefined ? props.title : undefined,
  message: props.message !== undefined ? props.message : undefined,
  source: props.source !== undefined ? props.source : undefined,
  metadataModelName: props.metadataModelName !== undefined ? props.metadataModelName : undefined,
  metadataVersion: props.metadataVersion !== undefined ? props.metadataVersion : undefined,
  metadataJobId: props.metadataJobId !== undefined ? props.metadataJobId : undefined,
  metadataMetrics: props.metadataMetrics !== undefined ? props.metadataMetrics : undefined,
  metadataErrorDetails: props.metadataErrorDetails !== undefined ? props.metadataErrorDetails : undefined,
  metadataRecommendations: props.metadataRecommendations !== undefined ? props.metadataRecommendations : undefined,
  status: props.status !== undefined ? props.status : undefined,
  acknowledgedBy: props.acknowledgedBy !== undefined ? props.acknowledgedBy : undefined,
  acknowledgedAt: props.acknowledgedAt !== undefined ? props.acknowledgedAt : undefined,
  resolvedBy: props.resolvedBy !== undefined ? props.resolvedBy : undefined,
  resolvedAt: props.resolvedAt !== undefined ? props.resolvedAt : undefined,
  resolutionNotes: props.resolutionNotes !== undefined ? props.resolutionNotes : undefined,
  suppressedUntil: props.suppressedUntil !== undefined ? props.suppressedUntil : undefined,
  escalationLevel: props.escalationLevel !== undefined ? props.escalationLevel : undefined,
  notificationChannels: props.notificationChannels !== undefined ? props.notificationChannels : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_SYSTEMALERT,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneSystemAlert) {
            return response.data.createOneSystemAlert;
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
   * Create multiple SystemAlert records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of SystemAlert objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: SystemAlertType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_SYSTEMALERT = gql`
          mutation createManySystemAlert($data: [SystemAlertCreateManyInput!]!) {
            createManySystemAlert(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      type: prop.type !== undefined ? prop.type : undefined,
  severity: prop.severity !== undefined ? prop.severity : undefined,
  title: prop.title !== undefined ? prop.title : undefined,
  message: prop.message !== undefined ? prop.message : undefined,
  source: prop.source !== undefined ? prop.source : undefined,
  metadataModelName: prop.metadataModelName !== undefined ? prop.metadataModelName : undefined,
  metadataVersion: prop.metadataVersion !== undefined ? prop.metadataVersion : undefined,
  metadataJobId: prop.metadataJobId !== undefined ? prop.metadataJobId : undefined,
  metadataMetrics: prop.metadataMetrics !== undefined ? prop.metadataMetrics : undefined,
  metadataErrorDetails: prop.metadataErrorDetails !== undefined ? prop.metadataErrorDetails : undefined,
  metadataRecommendations: prop.metadataRecommendations !== undefined ? prop.metadataRecommendations : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  acknowledgedBy: prop.acknowledgedBy !== undefined ? prop.acknowledgedBy : undefined,
  acknowledgedAt: prop.acknowledgedAt !== undefined ? prop.acknowledgedAt : undefined,
  resolvedBy: prop.resolvedBy !== undefined ? prop.resolvedBy : undefined,
  resolvedAt: prop.resolvedAt !== undefined ? prop.resolvedAt : undefined,
  resolutionNotes: prop.resolutionNotes !== undefined ? prop.resolutionNotes : undefined,
  suppressedUntil: prop.suppressedUntil !== undefined ? prop.suppressedUntil : undefined,
  escalationLevel: prop.escalationLevel !== undefined ? prop.escalationLevel : undefined,
  notificationChannels: prop.notificationChannels !== undefined ? prop.notificationChannels : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_SYSTEMALERT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManySystemAlert) {
          return response.data.createManySystemAlert;
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
   * Update a single SystemAlert record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated SystemAlert or null.
   */
  async update(props: SystemAlertType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<SystemAlertType> {
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

        const UPDATE_ONE_SYSTEMALERT = gql`
          mutation updateOneSystemAlert($data: SystemAlertUpdateInput!, $where: SystemAlertWhereUniqueInput!) {
            updateOneSystemAlert(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  title: props.title !== undefined ? {
    equals: props.title 
  } : undefined,
  metadataJobId: props.metadataJobId !== undefined ? {
    equals: props.metadataJobId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  severity: props.severity !== undefined ? {
            set: props.severity 
           } : undefined,
  title: props.title !== undefined ? {
            set: props.title 
           } : undefined,
  message: props.message !== undefined ? {
            set: props.message 
           } : undefined,
  source: props.source !== undefined ? {
            set: props.source 
           } : undefined,
  metadataModelName: props.metadataModelName !== undefined ? {
            set: props.metadataModelName 
           } : undefined,
  metadataVersion: props.metadataVersion !== undefined ? {
            set: props.metadataVersion 
           } : undefined,
  metadataJobId: props.metadataJobId !== undefined ? {
            set: props.metadataJobId 
           } : undefined,
  metadataMetrics: props.metadataMetrics !== undefined ? {
            set: props.metadataMetrics 
           } : undefined,
  metadataErrorDetails: props.metadataErrorDetails !== undefined ? {
            set: props.metadataErrorDetails 
           } : undefined,
  metadataRecommendations: props.metadataRecommendations !== undefined ? {
            set: props.metadataRecommendations 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  acknowledgedBy: props.acknowledgedBy !== undefined ? {
            set: props.acknowledgedBy 
           } : undefined,
  acknowledgedAt: props.acknowledgedAt !== undefined ? {
            set: props.acknowledgedAt 
           } : undefined,
  resolvedBy: props.resolvedBy !== undefined ? {
            set: props.resolvedBy 
           } : undefined,
  resolvedAt: props.resolvedAt !== undefined ? {
            set: props.resolvedAt 
           } : undefined,
  resolutionNotes: props.resolutionNotes !== undefined ? {
            set: props.resolutionNotes 
           } : undefined,
  suppressedUntil: props.suppressedUntil !== undefined ? {
            set: props.suppressedUntil 
           } : undefined,
  escalationLevel: props.escalationLevel !== undefined ? {
            set: props.escalationLevel 
           } : undefined,
  notificationChannels: props.notificationChannels !== undefined ? {
            set: props.notificationChannels 
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
          mutation: UPDATE_ONE_SYSTEMALERT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneSystemAlert) {
          return response.data.updateOneSystemAlert;
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
   * Upsert a single SystemAlert record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated SystemAlert or null.
   */
  async upsert(props: SystemAlertType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<SystemAlertType> {
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

        const UPSERT_ONE_SYSTEMALERT = gql`
          mutation upsertOneSystemAlert($where: SystemAlertWhereUniqueInput!, $create: SystemAlertCreateInput!, $update: SystemAlertUpdateInput!) {
            upsertOneSystemAlert(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  title: props.title !== undefined ? {
    equals: props.title 
  } : undefined,
  metadataJobId: props.metadataJobId !== undefined ? {
    equals: props.metadataJobId 
  } : undefined,
      },
          create: {
        type: props.type !== undefined ? props.type : undefined,
  severity: props.severity !== undefined ? props.severity : undefined,
  title: props.title !== undefined ? props.title : undefined,
  message: props.message !== undefined ? props.message : undefined,
  source: props.source !== undefined ? props.source : undefined,
  metadataModelName: props.metadataModelName !== undefined ? props.metadataModelName : undefined,
  metadataVersion: props.metadataVersion !== undefined ? props.metadataVersion : undefined,
  metadataJobId: props.metadataJobId !== undefined ? props.metadataJobId : undefined,
  metadataMetrics: props.metadataMetrics !== undefined ? props.metadataMetrics : undefined,
  metadataErrorDetails: props.metadataErrorDetails !== undefined ? props.metadataErrorDetails : undefined,
  metadataRecommendations: props.metadataRecommendations !== undefined ? props.metadataRecommendations : undefined,
  status: props.status !== undefined ? props.status : undefined,
  acknowledgedBy: props.acknowledgedBy !== undefined ? props.acknowledgedBy : undefined,
  acknowledgedAt: props.acknowledgedAt !== undefined ? props.acknowledgedAt : undefined,
  resolvedBy: props.resolvedBy !== undefined ? props.resolvedBy : undefined,
  resolvedAt: props.resolvedAt !== undefined ? props.resolvedAt : undefined,
  resolutionNotes: props.resolutionNotes !== undefined ? props.resolutionNotes : undefined,
  suppressedUntil: props.suppressedUntil !== undefined ? props.suppressedUntil : undefined,
  escalationLevel: props.escalationLevel !== undefined ? props.escalationLevel : undefined,
  notificationChannels: props.notificationChannels !== undefined ? props.notificationChannels : undefined,
      },
          update: {
      type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  severity: props.severity !== undefined ? {
            set: props.severity 
           } : undefined,
  title: props.title !== undefined ? {
            set: props.title 
           } : undefined,
  message: props.message !== undefined ? {
            set: props.message 
           } : undefined,
  source: props.source !== undefined ? {
            set: props.source 
           } : undefined,
  metadataModelName: props.metadataModelName !== undefined ? {
            set: props.metadataModelName 
           } : undefined,
  metadataVersion: props.metadataVersion !== undefined ? {
            set: props.metadataVersion 
           } : undefined,
  metadataJobId: props.metadataJobId !== undefined ? {
            set: props.metadataJobId 
           } : undefined,
  metadataMetrics: props.metadataMetrics !== undefined ? {
            set: props.metadataMetrics 
           } : undefined,
  metadataErrorDetails: props.metadataErrorDetails !== undefined ? {
            set: props.metadataErrorDetails 
           } : undefined,
  metadataRecommendations: props.metadataRecommendations !== undefined ? {
            set: props.metadataRecommendations 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  acknowledgedBy: props.acknowledgedBy !== undefined ? {
            set: props.acknowledgedBy 
           } : undefined,
  acknowledgedAt: props.acknowledgedAt !== undefined ? {
            set: props.acknowledgedAt 
           } : undefined,
  resolvedBy: props.resolvedBy !== undefined ? {
            set: props.resolvedBy 
           } : undefined,
  resolvedAt: props.resolvedAt !== undefined ? {
            set: props.resolvedAt 
           } : undefined,
  resolutionNotes: props.resolutionNotes !== undefined ? {
            set: props.resolutionNotes 
           } : undefined,
  suppressedUntil: props.suppressedUntil !== undefined ? {
            set: props.suppressedUntil 
           } : undefined,
  escalationLevel: props.escalationLevel !== undefined ? {
            set: props.escalationLevel 
           } : undefined,
  notificationChannels: props.notificationChannels !== undefined ? {
            set: props.notificationChannels 
           } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_SYSTEMALERT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneSystemAlert) {
          return response.data.upsertOneSystemAlert;
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
   * Update multiple SystemAlert records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of SystemAlert objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: SystemAlertType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_SYSTEMALERT = gql`
          mutation updateManySystemAlert($data: [SystemAlertCreateManyInput!]!) {
            updateManySystemAlert(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  title: prop.title !== undefined ? {
    equals: prop.title 
  } : undefined,
  metadataJobId: prop.metadataJobId !== undefined ? {
    equals: prop.metadataJobId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  severity: prop.severity !== undefined ? {
            set: prop.severity 
           } : undefined,
  title: prop.title !== undefined ? {
            set: prop.title 
           } : undefined,
  message: prop.message !== undefined ? {
            set: prop.message 
           } : undefined,
  source: prop.source !== undefined ? {
            set: prop.source 
           } : undefined,
  metadataModelName: prop.metadataModelName !== undefined ? {
            set: prop.metadataModelName 
           } : undefined,
  metadataVersion: prop.metadataVersion !== undefined ? {
            set: prop.metadataVersion 
           } : undefined,
  metadataJobId: prop.metadataJobId !== undefined ? {
            set: prop.metadataJobId 
           } : undefined,
  metadataMetrics: prop.metadataMetrics !== undefined ? {
            set: prop.metadataMetrics 
           } : undefined,
  metadataErrorDetails: prop.metadataErrorDetails !== undefined ? {
            set: prop.metadataErrorDetails 
           } : undefined,
  metadataRecommendations: prop.metadataRecommendations !== undefined ? {
            set: prop.metadataRecommendations 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  acknowledgedBy: prop.acknowledgedBy !== undefined ? {
            set: prop.acknowledgedBy 
           } : undefined,
  acknowledgedAt: prop.acknowledgedAt !== undefined ? {
            set: prop.acknowledgedAt 
           } : undefined,
  resolvedBy: prop.resolvedBy !== undefined ? {
            set: prop.resolvedBy 
           } : undefined,
  resolvedAt: prop.resolvedAt !== undefined ? {
            set: prop.resolvedAt 
           } : undefined,
  resolutionNotes: prop.resolutionNotes !== undefined ? {
            set: prop.resolutionNotes 
           } : undefined,
  suppressedUntil: prop.suppressedUntil !== undefined ? {
            set: prop.suppressedUntil 
           } : undefined,
  escalationLevel: prop.escalationLevel !== undefined ? {
            set: prop.escalationLevel 
           } : undefined,
  notificationChannels: prop.notificationChannels !== undefined ? {
            set: prop.notificationChannels 
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
          mutation: UPDATE_MANY_SYSTEMALERT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManySystemAlert) {
          return response.data.updateManySystemAlert;
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
   * Delete a single SystemAlert record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted SystemAlert or null.
   */
  async delete(props: SystemAlertType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<SystemAlertType> {
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

        const DELETE_ONE_SYSTEMALERT = gql`
          mutation deleteOneSystemAlert($where: SystemAlertWhereUniqueInput!) {
            deleteOneSystemAlert(where: $where) {
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
          mutation: DELETE_ONE_SYSTEMALERT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneSystemAlert) {
          return response.data.deleteOneSystemAlert;
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
   * Retrieve a single SystemAlert record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved SystemAlert or null.
   */
  async get(props: SystemAlertType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<SystemAlertType | null> {
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

        const GET_SYSTEMALERT = gql`
          query getSystemAlert($where: SystemAlertWhereUniqueInput!) {
            getSystemAlert(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  title: props.title !== undefined ? {
    equals: props.title 
  } : undefined,
  metadataJobId: props.metadataJobId !== undefined ? {
    equals: props.metadataJobId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_SYSTEMALERT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getSystemAlert ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No SystemAlert found') {
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
   * Retrieve all SystemAlerts records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of SystemAlert records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<SystemAlertType[] | null> {
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

        const GET_ALL_SYSTEMALERT = gql`
          query getAllSystemAlert {
            systemAlerts {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_SYSTEMALERT,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.systemAlerts ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No SystemAlert found') {
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
   * Find multiple SystemAlert records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found SystemAlert records or null.
   */
  async findMany(props: SystemAlertType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<SystemAlertType[] | null> {
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

        const FIND_MANY_SYSTEMALERT = gql`
          query findManySystemAlert($where: SystemAlertWhereInput!) {
            systemAlerts(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  title: props.title !== undefined ? {
    equals: props.title 
  } : undefined,
  metadataJobId: props.metadataJobId !== undefined ? {
    equals: props.metadataJobId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_SYSTEMALERT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.systemalerts) {
          return response.data.systemAlerts;
        } else {
          return [] as SystemAlertType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No SystemAlert found') {
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
