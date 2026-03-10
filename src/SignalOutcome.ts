
  
import { SignalOutcome as SignalOutcomeType } from './generated/typegraphql-prisma/models/SignalOutcome';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the SignalOutcome model.
   */

  const selectionSet = `
    
  id
  timestamp
  signalId
  generatorSource
  symbol
  signalType
  originalConfidence
  priorityScore
  outcome
  pnlPercentage
  timeToOutcome
  outcomeTimestamp
  outcomeReason
  generatedAt
  marketConditions

  `;

  export const SignalOutcome = {

    /**
     * Create a new SignalOutcome record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created SignalOutcome or null.
     */

    /**
     * Create a new SignalOutcome record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created SignalOutcome or null.
     */
    async create(props: SignalOutcomeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<SignalOutcomeType> {
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

          const CREATE_ONE_SIGNALOUTCOME = gql`
              mutation createOneSignalOutcome($data: SignalOutcomeCreateInput!) {
                createOneSignalOutcome(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  signalId: props.signalId !== undefined ? props.signalId : undefined,
  generatorSource: props.generatorSource !== undefined ? props.generatorSource : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  signalType: props.signalType !== undefined ? props.signalType : undefined,
  outcome: props.outcome !== undefined ? props.outcome : undefined,
  timeToOutcome: props.timeToOutcome !== undefined ? props.timeToOutcome : undefined,
  outcomeTimestamp: props.outcomeTimestamp !== undefined ? props.outcomeTimestamp : undefined,
  outcomeReason: props.outcomeReason !== undefined ? props.outcomeReason : undefined,
  generatedAt: props.generatedAt !== undefined ? props.generatedAt : undefined,
  marketConditions: props.marketConditions !== undefined ? props.marketConditions : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_SIGNALOUTCOME,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneSignalOutcome) {
            return response.data.createOneSignalOutcome;
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
   * Create multiple SignalOutcome records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of SignalOutcome objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: SignalOutcomeType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_SIGNALOUTCOME = gql`
          mutation createManySignalOutcome($data: [SignalOutcomeCreateManyInput!]!) {
            createManySignalOutcome(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      timestamp: prop.timestamp !== undefined ? prop.timestamp : undefined,
  signalId: prop.signalId !== undefined ? prop.signalId : undefined,
  generatorSource: prop.generatorSource !== undefined ? prop.generatorSource : undefined,
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  signalType: prop.signalType !== undefined ? prop.signalType : undefined,
  outcome: prop.outcome !== undefined ? prop.outcome : undefined,
  timeToOutcome: prop.timeToOutcome !== undefined ? prop.timeToOutcome : undefined,
  outcomeTimestamp: prop.outcomeTimestamp !== undefined ? prop.outcomeTimestamp : undefined,
  outcomeReason: prop.outcomeReason !== undefined ? prop.outcomeReason : undefined,
  generatedAt: prop.generatedAt !== undefined ? prop.generatedAt : undefined,
  marketConditions: prop.marketConditions !== undefined ? prop.marketConditions : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_SIGNALOUTCOME,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManySignalOutcome) {
          return response.data.createManySignalOutcome;
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
   * Update a single SignalOutcome record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated SignalOutcome or null.
   */
  async update(props: SignalOutcomeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<SignalOutcomeType> {
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

        const UPDATE_ONE_SIGNALOUTCOME = gql`
          mutation updateOneSignalOutcome($data: SignalOutcomeUpdateInput!, $where: SignalOutcomeWhereUniqueInput!) {
            updateOneSignalOutcome(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  signalId: props.signalId !== undefined ? {
    equals: props.signalId 
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  signalId: props.signalId !== undefined ? {
            set: props.signalId 
           } : undefined,
  generatorSource: props.generatorSource !== undefined ? {
            set: props.generatorSource 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  signalType: props.signalType !== undefined ? {
            set: props.signalType 
           } : undefined,
  originalConfidence: props.originalConfidence !== undefined ? {
            set: props.originalConfidence 
           } : undefined,
  priorityScore: props.priorityScore !== undefined ? {
            set: props.priorityScore 
           } : undefined,
  outcome: props.outcome !== undefined ? {
            set: props.outcome 
           } : undefined,
  pnlPercentage: props.pnlPercentage !== undefined ? {
            set: props.pnlPercentage 
           } : undefined,
  timeToOutcome: props.timeToOutcome !== undefined ? {
            set: props.timeToOutcome 
           } : undefined,
  outcomeTimestamp: props.outcomeTimestamp !== undefined ? {
            set: props.outcomeTimestamp 
           } : undefined,
  outcomeReason: props.outcomeReason !== undefined ? {
            set: props.outcomeReason 
           } : undefined,
  generatedAt: props.generatedAt !== undefined ? {
            set: props.generatedAt 
           } : undefined,
  marketConditions: props.marketConditions !== undefined ? {
            set: props.marketConditions 
           } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_SIGNALOUTCOME,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneSignalOutcome) {
          return response.data.updateOneSignalOutcome;
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
   * Upsert a single SignalOutcome record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated SignalOutcome or null.
   */
  async upsert(props: SignalOutcomeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<SignalOutcomeType> {
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

        const UPSERT_ONE_SIGNALOUTCOME = gql`
          mutation upsertOneSignalOutcome($where: SignalOutcomeWhereUniqueInput!, $create: SignalOutcomeCreateInput!, $update: SignalOutcomeUpdateInput!) {
            upsertOneSignalOutcome(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  signalId: props.signalId !== undefined ? {
    equals: props.signalId 
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
      },
          create: {
        timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  signalId: props.signalId !== undefined ? props.signalId : undefined,
  generatorSource: props.generatorSource !== undefined ? props.generatorSource : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  signalType: props.signalType !== undefined ? props.signalType : undefined,
  outcome: props.outcome !== undefined ? props.outcome : undefined,
  timeToOutcome: props.timeToOutcome !== undefined ? props.timeToOutcome : undefined,
  outcomeTimestamp: props.outcomeTimestamp !== undefined ? props.outcomeTimestamp : undefined,
  outcomeReason: props.outcomeReason !== undefined ? props.outcomeReason : undefined,
  generatedAt: props.generatedAt !== undefined ? props.generatedAt : undefined,
  marketConditions: props.marketConditions !== undefined ? props.marketConditions : undefined,
      },
          update: {
      timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  signalId: props.signalId !== undefined ? {
            set: props.signalId 
           } : undefined,
  generatorSource: props.generatorSource !== undefined ? {
            set: props.generatorSource 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  signalType: props.signalType !== undefined ? {
            set: props.signalType 
           } : undefined,
  originalConfidence: props.originalConfidence !== undefined ? {
            set: props.originalConfidence 
           } : undefined,
  priorityScore: props.priorityScore !== undefined ? {
            set: props.priorityScore 
           } : undefined,
  outcome: props.outcome !== undefined ? {
            set: props.outcome 
           } : undefined,
  pnlPercentage: props.pnlPercentage !== undefined ? {
            set: props.pnlPercentage 
           } : undefined,
  timeToOutcome: props.timeToOutcome !== undefined ? {
            set: props.timeToOutcome 
           } : undefined,
  outcomeTimestamp: props.outcomeTimestamp !== undefined ? {
            set: props.outcomeTimestamp 
           } : undefined,
  outcomeReason: props.outcomeReason !== undefined ? {
            set: props.outcomeReason 
           } : undefined,
  generatedAt: props.generatedAt !== undefined ? {
            set: props.generatedAt 
           } : undefined,
  marketConditions: props.marketConditions !== undefined ? {
            set: props.marketConditions 
           } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_SIGNALOUTCOME,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneSignalOutcome) {
          return response.data.upsertOneSignalOutcome;
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
   * Update multiple SignalOutcome records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of SignalOutcome objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: SignalOutcomeType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_SIGNALOUTCOME = gql`
          mutation updateManySignalOutcome($data: [SignalOutcomeCreateManyInput!]!) {
            updateManySignalOutcome(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  signalId: prop.signalId !== undefined ? {
    equals: prop.signalId 
  } : undefined,
  symbol: prop.symbol !== undefined ? {
    equals: prop.symbol 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  timestamp: prop.timestamp !== undefined ? {
            set: prop.timestamp 
           } : undefined,
  signalId: prop.signalId !== undefined ? {
            set: prop.signalId 
           } : undefined,
  generatorSource: prop.generatorSource !== undefined ? {
            set: prop.generatorSource 
           } : undefined,
  symbol: prop.symbol !== undefined ? {
            set: prop.symbol 
           } : undefined,
  signalType: prop.signalType !== undefined ? {
            set: prop.signalType 
           } : undefined,
  originalConfidence: prop.originalConfidence !== undefined ? {
            set: prop.originalConfidence 
           } : undefined,
  priorityScore: prop.priorityScore !== undefined ? {
            set: prop.priorityScore 
           } : undefined,
  outcome: prop.outcome !== undefined ? {
            set: prop.outcome 
           } : undefined,
  pnlPercentage: prop.pnlPercentage !== undefined ? {
            set: prop.pnlPercentage 
           } : undefined,
  timeToOutcome: prop.timeToOutcome !== undefined ? {
            set: prop.timeToOutcome 
           } : undefined,
  outcomeTimestamp: prop.outcomeTimestamp !== undefined ? {
            set: prop.outcomeTimestamp 
           } : undefined,
  outcomeReason: prop.outcomeReason !== undefined ? {
            set: prop.outcomeReason 
           } : undefined,
  generatedAt: prop.generatedAt !== undefined ? {
            set: prop.generatedAt 
           } : undefined,
  marketConditions: prop.marketConditions !== undefined ? {
            set: prop.marketConditions 
           } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_SIGNALOUTCOME,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManySignalOutcome) {
          return response.data.updateManySignalOutcome;
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
   * Delete a single SignalOutcome record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted SignalOutcome or null.
   */
  async delete(props: SignalOutcomeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<SignalOutcomeType> {
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

        const DELETE_ONE_SIGNALOUTCOME = gql`
          mutation deleteOneSignalOutcome($where: SignalOutcomeWhereUniqueInput!) {
            deleteOneSignalOutcome(where: $where) {
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
          mutation: DELETE_ONE_SIGNALOUTCOME,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneSignalOutcome) {
          return response.data.deleteOneSignalOutcome;
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
   * Retrieve a single SignalOutcome record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved SignalOutcome or null.
   */
  async get(props: SignalOutcomeType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<SignalOutcomeType | null> {
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

        const GET_SIGNALOUTCOME = gql`
          query getSignalOutcome($where: SignalOutcomeWhereUniqueInput!) {
            getSignalOutcome(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  signalId: props.signalId !== undefined ? {
    equals: props.signalId 
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_SIGNALOUTCOME,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getSignalOutcome ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No SignalOutcome found') {
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
   * Retrieve all SignalOutcomes records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of SignalOutcome records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<SignalOutcomeType[] | null> {
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

        const GET_ALL_SIGNALOUTCOME = gql`
          query getAllSignalOutcome {
            signalOutcomes {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_SIGNALOUTCOME,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.signalOutcomes ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No SignalOutcome found') {
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
   * Find multiple SignalOutcome records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found SignalOutcome records or null.
   */
  async findMany(props: SignalOutcomeType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<SignalOutcomeType[] | null> {
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

        const FIND_MANY_SIGNALOUTCOME = gql`
          query findManySignalOutcome($where: SignalOutcomeWhereInput!) {
            signalOutcomes(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  signalId: props.signalId !== undefined ? {
    equals: props.signalId 
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_SIGNALOUTCOME,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.signaloutcomes) {
          return response.data.signalOutcomes;
        } else {
          return [] as SignalOutcomeType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No SignalOutcome found') {
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
