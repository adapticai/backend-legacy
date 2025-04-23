
  
import { Action as ActionType } from './generated/typegraphql-prisma/models/Action';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Action model.
   */

  const selectionSet = `
    
  id
  sequence
  tradeId
  type
  primary
  note
  status
  createdAt
  updatedAt
  alpacaOrderId

  `;

  export const Action = {

    /**
     * Create a new Action record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Action or null.
     */

    /**
     * Create a new Action record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created Action or null.
     */
    async create(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {
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

          const CREATE_ONE_ACTION = gql`
              mutation createOneAction($data: ActionCreateInput!) {
                createOneAction(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                sequence: props.sequence !== undefined ? props.sequence : undefined,
  type: props.type !== undefined ? props.type : undefined,
  primary: props.primary !== undefined ? props.primary : undefined,
  note: props.note !== undefined ? props.note : undefined,
  status: props.status !== undefined ? props.status : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? props.alpacaOrderId : undefined,
  trade: props.trade ? 
    typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && Object.keys(props.trade)[0] === 'id'
    ? { connect: {
        id: props.trade.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.trade.id !== undefined ? props.trade.id : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId 
           } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol 
           } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
        entryPrice: props.trade.entryPrice !== undefined ? props.trade.entryPrice : undefined,
        exitPrice: props.trade.exitPrice !== undefined ? props.trade.exitPrice : undefined,
        entryQty: props.trade.entryQty !== undefined ? props.trade.entryQty : undefined,
        exitQty: props.trade.exitQty !== undefined ? props.trade.exitQty : undefined,
        entryValue: props.trade.entryValue !== undefined ? props.trade.entryValue : undefined,
        exitValue: props.trade.exitValue !== undefined ? props.trade.exitValue : undefined,
        entryTime: props.trade.entryTime !== undefined ? props.trade.entryTime : undefined,
        exitTime: props.trade.exitTime !== undefined ? props.trade.exitTime : undefined,
        pnlAmount: props.trade.pnlAmount !== undefined ? props.trade.pnlAmount : undefined,
        pnlPercent: props.trade.pnlPercent !== undefined ? props.trade.pnlPercent : undefined,
        durationMinutes: props.trade.durationMinutes !== undefined ? props.trade.durationMinutes : undefined,
        marketPhase: props.trade.marketPhase !== undefined ? props.trade.marketPhase : undefined,
        marketVolatility: props.trade.marketVolatility !== undefined ? props.trade.marketVolatility : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? props.trade.thresholdsJson : undefined,
      },
    }
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_ACTION,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneAction) {
            return response.data.createOneAction;
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
   * Create multiple Action records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Action objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: ActionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_ACTION = gql`
          mutation createManyAction($data: [ActionCreateManyInput!]!) {
            createManyAction(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      sequence: prop.sequence !== undefined ? prop.sequence : undefined,
  tradeId: prop.tradeId !== undefined ? prop.tradeId : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  primary: prop.primary !== undefined ? prop.primary : undefined,
  note: prop.note !== undefined ? prop.note : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  alpacaOrderId: prop.alpacaOrderId !== undefined ? prop.alpacaOrderId : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_ACTION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyAction) {
          return response.data.createManyAction;
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
   * Update a single Action record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Action or null.
   */
  async update(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {
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

        const UPDATE_ONE_ACTION = gql`
          mutation updateOneAction($data: ActionUpdateInput!, $where: ActionWhereUniqueInput!) {
            updateOneAction(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? props.alpacaOrderId : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  sequence: props.sequence !== undefined ? {
            set: props.sequence 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  primary: props.primary !== undefined ? {
            set: props.primary 
           } : undefined,
  note: props.note !== undefined ? {
            set: props.note 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? {
            set: props.alpacaOrderId 
           } : undefined,
  trade: props.trade ? 
  typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && (Object.keys(props.trade)[0] === 'id' || Object.keys(props.trade)[0] === 'symbol')
? {
  connect: {
    id: props.trade.id
  }
} : { upsert: {
      where: {
        id: props.trade.id !== undefined ? {
            equals: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol
          } : undefined,
      },
      update: {
        id: props.trade.id !== undefined ? {
            set: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            set: props.trade.alpacaAccountId
          } : undefined,
        signal: props.trade.signal !== undefined ? {
            set: props.trade.signal
          } : undefined,
        strategy: props.trade.strategy !== undefined ? {
            set: props.trade.strategy
          } : undefined,
        analysis: props.trade.analysis !== undefined ? {
            set: props.trade.analysis
          } : undefined,
        summary: props.trade.summary !== undefined ? {
            set: props.trade.summary
          } : undefined,
        confidence: props.trade.confidence !== undefined ? {
            set: props.trade.confidence
          } : undefined,
        timestamp: props.trade.timestamp !== undefined ? {
            set: props.trade.timestamp
          } : undefined,
        status: props.trade.status !== undefined ? {
            set: props.trade.status
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            set: props.trade.symbol
          } : undefined,
        entryPrice: props.trade.entryPrice !== undefined ? {
            set: props.trade.entryPrice
          } : undefined,
        exitPrice: props.trade.exitPrice !== undefined ? {
            set: props.trade.exitPrice
          } : undefined,
        entryQty: props.trade.entryQty !== undefined ? {
            set: props.trade.entryQty
          } : undefined,
        exitQty: props.trade.exitQty !== undefined ? {
            set: props.trade.exitQty
          } : undefined,
        entryValue: props.trade.entryValue !== undefined ? {
            set: props.trade.entryValue
          } : undefined,
        exitValue: props.trade.exitValue !== undefined ? {
            set: props.trade.exitValue
          } : undefined,
        entryTime: props.trade.entryTime !== undefined ? {
            set: props.trade.entryTime
          } : undefined,
        exitTime: props.trade.exitTime !== undefined ? {
            set: props.trade.exitTime
          } : undefined,
        pnlAmount: props.trade.pnlAmount !== undefined ? {
            set: props.trade.pnlAmount
          } : undefined,
        pnlPercent: props.trade.pnlPercent !== undefined ? {
            set: props.trade.pnlPercent
          } : undefined,
        durationMinutes: props.trade.durationMinutes !== undefined ? {
            set: props.trade.durationMinutes
          } : undefined,
        marketPhase: props.trade.marketPhase !== undefined ? {
            set: props.trade.marketPhase
          } : undefined,
        marketVolatility: props.trade.marketVolatility !== undefined ? {
            set: props.trade.marketVolatility
          } : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? {
            set: props.trade.thresholdsJson
          } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
        entryPrice: props.trade.entryPrice !== undefined ? props.trade.entryPrice : undefined,
        exitPrice: props.trade.exitPrice !== undefined ? props.trade.exitPrice : undefined,
        entryQty: props.trade.entryQty !== undefined ? props.trade.entryQty : undefined,
        exitQty: props.trade.exitQty !== undefined ? props.trade.exitQty : undefined,
        entryValue: props.trade.entryValue !== undefined ? props.trade.entryValue : undefined,
        exitValue: props.trade.exitValue !== undefined ? props.trade.exitValue : undefined,
        entryTime: props.trade.entryTime !== undefined ? props.trade.entryTime : undefined,
        exitTime: props.trade.exitTime !== undefined ? props.trade.exitTime : undefined,
        pnlAmount: props.trade.pnlAmount !== undefined ? props.trade.pnlAmount : undefined,
        pnlPercent: props.trade.pnlPercent !== undefined ? props.trade.pnlPercent : undefined,
        durationMinutes: props.trade.durationMinutes !== undefined ? props.trade.durationMinutes : undefined,
        marketPhase: props.trade.marketPhase !== undefined ? props.trade.marketPhase : undefined,
        marketVolatility: props.trade.marketVolatility !== undefined ? props.trade.marketVolatility : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? props.trade.thresholdsJson : undefined,
      },
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_ACTION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneAction) {
          return response.data.updateOneAction;
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
   * Upsert a single Action record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Action or null.
   */
  async upsert(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {
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

        const UPSERT_ONE_ACTION = gql`
          mutation upsertOneAction($where: ActionWhereUniqueInput!, $create: ActionCreateInput!, $update: ActionUpdateInput!) {
            upsertOneAction(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? props.alpacaOrderId : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
      },
          create: {
        sequence: props.sequence !== undefined ? props.sequence : undefined,
  type: props.type !== undefined ? props.type : undefined,
  primary: props.primary !== undefined ? props.primary : undefined,
  note: props.note !== undefined ? props.note : undefined,
  status: props.status !== undefined ? props.status : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? props.alpacaOrderId : undefined,
  trade: props.trade ? 
    typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && Object.keys(props.trade)[0] === 'id'
    ? { connect: {
        id: props.trade.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.trade.id !== undefined ? props.trade.id : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId 
           } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol 
           } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
        entryPrice: props.trade.entryPrice !== undefined ? props.trade.entryPrice : undefined,
        exitPrice: props.trade.exitPrice !== undefined ? props.trade.exitPrice : undefined,
        entryQty: props.trade.entryQty !== undefined ? props.trade.entryQty : undefined,
        exitQty: props.trade.exitQty !== undefined ? props.trade.exitQty : undefined,
        entryValue: props.trade.entryValue !== undefined ? props.trade.entryValue : undefined,
        exitValue: props.trade.exitValue !== undefined ? props.trade.exitValue : undefined,
        entryTime: props.trade.entryTime !== undefined ? props.trade.entryTime : undefined,
        exitTime: props.trade.exitTime !== undefined ? props.trade.exitTime : undefined,
        pnlAmount: props.trade.pnlAmount !== undefined ? props.trade.pnlAmount : undefined,
        pnlPercent: props.trade.pnlPercent !== undefined ? props.trade.pnlPercent : undefined,
        durationMinutes: props.trade.durationMinutes !== undefined ? props.trade.durationMinutes : undefined,
        marketPhase: props.trade.marketPhase !== undefined ? props.trade.marketPhase : undefined,
        marketVolatility: props.trade.marketVolatility !== undefined ? props.trade.marketVolatility : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? props.trade.thresholdsJson : undefined,
      },
    }
  } : undefined,
      },
          update: {
      sequence: props.sequence !== undefined ? {
            set: props.sequence 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  primary: props.primary !== undefined ? {
            set: props.primary 
           } : undefined,
  note: props.note !== undefined ? {
            set: props.note 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? {
            set: props.alpacaOrderId 
           } : undefined,
  trade: props.trade ? 
  typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && (Object.keys(props.trade)[0] === 'id' || Object.keys(props.trade)[0] === 'symbol')
? {
  connect: {
    id: props.trade.id
  }
} : { upsert: {
      where: {
        id: props.trade.id !== undefined ? {
            equals: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol
          } : undefined,
      },
      update: {
        id: props.trade.id !== undefined ? {
            set: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            set: props.trade.alpacaAccountId
          } : undefined,
        signal: props.trade.signal !== undefined ? {
            set: props.trade.signal
          } : undefined,
        strategy: props.trade.strategy !== undefined ? {
            set: props.trade.strategy
          } : undefined,
        analysis: props.trade.analysis !== undefined ? {
            set: props.trade.analysis
          } : undefined,
        summary: props.trade.summary !== undefined ? {
            set: props.trade.summary
          } : undefined,
        confidence: props.trade.confidence !== undefined ? {
            set: props.trade.confidence
          } : undefined,
        timestamp: props.trade.timestamp !== undefined ? {
            set: props.trade.timestamp
          } : undefined,
        status: props.trade.status !== undefined ? {
            set: props.trade.status
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            set: props.trade.symbol
          } : undefined,
        entryPrice: props.trade.entryPrice !== undefined ? {
            set: props.trade.entryPrice
          } : undefined,
        exitPrice: props.trade.exitPrice !== undefined ? {
            set: props.trade.exitPrice
          } : undefined,
        entryQty: props.trade.entryQty !== undefined ? {
            set: props.trade.entryQty
          } : undefined,
        exitQty: props.trade.exitQty !== undefined ? {
            set: props.trade.exitQty
          } : undefined,
        entryValue: props.trade.entryValue !== undefined ? {
            set: props.trade.entryValue
          } : undefined,
        exitValue: props.trade.exitValue !== undefined ? {
            set: props.trade.exitValue
          } : undefined,
        entryTime: props.trade.entryTime !== undefined ? {
            set: props.trade.entryTime
          } : undefined,
        exitTime: props.trade.exitTime !== undefined ? {
            set: props.trade.exitTime
          } : undefined,
        pnlAmount: props.trade.pnlAmount !== undefined ? {
            set: props.trade.pnlAmount
          } : undefined,
        pnlPercent: props.trade.pnlPercent !== undefined ? {
            set: props.trade.pnlPercent
          } : undefined,
        durationMinutes: props.trade.durationMinutes !== undefined ? {
            set: props.trade.durationMinutes
          } : undefined,
        marketPhase: props.trade.marketPhase !== undefined ? {
            set: props.trade.marketPhase
          } : undefined,
        marketVolatility: props.trade.marketVolatility !== undefined ? {
            set: props.trade.marketVolatility
          } : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? {
            set: props.trade.thresholdsJson
          } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
        entryPrice: props.trade.entryPrice !== undefined ? props.trade.entryPrice : undefined,
        exitPrice: props.trade.exitPrice !== undefined ? props.trade.exitPrice : undefined,
        entryQty: props.trade.entryQty !== undefined ? props.trade.entryQty : undefined,
        exitQty: props.trade.exitQty !== undefined ? props.trade.exitQty : undefined,
        entryValue: props.trade.entryValue !== undefined ? props.trade.entryValue : undefined,
        exitValue: props.trade.exitValue !== undefined ? props.trade.exitValue : undefined,
        entryTime: props.trade.entryTime !== undefined ? props.trade.entryTime : undefined,
        exitTime: props.trade.exitTime !== undefined ? props.trade.exitTime : undefined,
        pnlAmount: props.trade.pnlAmount !== undefined ? props.trade.pnlAmount : undefined,
        pnlPercent: props.trade.pnlPercent !== undefined ? props.trade.pnlPercent : undefined,
        durationMinutes: props.trade.durationMinutes !== undefined ? props.trade.durationMinutes : undefined,
        marketPhase: props.trade.marketPhase !== undefined ? props.trade.marketPhase : undefined,
        marketVolatility: props.trade.marketVolatility !== undefined ? props.trade.marketVolatility : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? props.trade.thresholdsJson : undefined,
      },
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_ACTION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneAction) {
          return response.data.upsertOneAction;
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
   * Update multiple Action records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Action objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: ActionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_ACTION = gql`
          mutation updateManyAction($data: [ActionCreateManyInput!]!) {
            updateManyAction(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  alpacaOrderId: prop.alpacaOrderId !== undefined ? prop.alpacaOrderId : undefined,
  tradeId: prop.tradeId !== undefined ? {
    equals: prop.tradeId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  sequence: prop.sequence !== undefined ? {
            set: prop.sequence 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  primary: prop.primary !== undefined ? {
            set: prop.primary 
           } : undefined,
  note: prop.note !== undefined ? {
            set: prop.note 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  alpacaOrderId: prop.alpacaOrderId !== undefined ? {
            set: prop.alpacaOrderId 
           } : undefined,
  trade: prop.trade ? 
  typeof prop.trade === 'object' && Object.keys(prop.trade).length === 1 && (Object.keys(prop.trade)[0] === 'id' || Object.keys(prop.trade)[0] === 'symbol')
? {
  connect: {
    id: prop.trade.id
  }
} : { upsert: {
      where: {
        id: prop.trade.id !== undefined ? {
            equals: prop.trade.id
          } : undefined,
        alpacaAccountId: prop.trade.alpacaAccountId !== undefined ? {
            equals: prop.trade.alpacaAccountId
          } : undefined,
        symbol: prop.trade.symbol !== undefined ? {
            equals: prop.trade.symbol
          } : undefined,
      },
      update: {
        id: prop.trade.id !== undefined ? {
            set: prop.trade.id
          } : undefined,
        alpacaAccountId: prop.trade.alpacaAccountId !== undefined ? {
            set: prop.trade.alpacaAccountId
          } : undefined,
        signal: prop.trade.signal !== undefined ? {
            set: prop.trade.signal
          } : undefined,
        strategy: prop.trade.strategy !== undefined ? {
            set: prop.trade.strategy
          } : undefined,
        analysis: prop.trade.analysis !== undefined ? {
            set: prop.trade.analysis
          } : undefined,
        summary: prop.trade.summary !== undefined ? {
            set: prop.trade.summary
          } : undefined,
        confidence: prop.trade.confidence !== undefined ? {
            set: prop.trade.confidence
          } : undefined,
        timestamp: prop.trade.timestamp !== undefined ? {
            set: prop.trade.timestamp
          } : undefined,
        status: prop.trade.status !== undefined ? {
            set: prop.trade.status
          } : undefined,
        symbol: prop.trade.symbol !== undefined ? {
            set: prop.trade.symbol
          } : undefined,
        entryPrice: prop.trade.entryPrice !== undefined ? {
            set: prop.trade.entryPrice
          } : undefined,
        exitPrice: prop.trade.exitPrice !== undefined ? {
            set: prop.trade.exitPrice
          } : undefined,
        entryQty: prop.trade.entryQty !== undefined ? {
            set: prop.trade.entryQty
          } : undefined,
        exitQty: prop.trade.exitQty !== undefined ? {
            set: prop.trade.exitQty
          } : undefined,
        entryValue: prop.trade.entryValue !== undefined ? {
            set: prop.trade.entryValue
          } : undefined,
        exitValue: prop.trade.exitValue !== undefined ? {
            set: prop.trade.exitValue
          } : undefined,
        entryTime: prop.trade.entryTime !== undefined ? {
            set: prop.trade.entryTime
          } : undefined,
        exitTime: prop.trade.exitTime !== undefined ? {
            set: prop.trade.exitTime
          } : undefined,
        pnlAmount: prop.trade.pnlAmount !== undefined ? {
            set: prop.trade.pnlAmount
          } : undefined,
        pnlPercent: prop.trade.pnlPercent !== undefined ? {
            set: prop.trade.pnlPercent
          } : undefined,
        durationMinutes: prop.trade.durationMinutes !== undefined ? {
            set: prop.trade.durationMinutes
          } : undefined,
        marketPhase: prop.trade.marketPhase !== undefined ? {
            set: prop.trade.marketPhase
          } : undefined,
        marketVolatility: prop.trade.marketVolatility !== undefined ? {
            set: prop.trade.marketVolatility
          } : undefined,
        thresholdsJson: prop.trade.thresholdsJson !== undefined ? {
            set: prop.trade.thresholdsJson
          } : undefined,
      },
      create: {
        alpacaAccountId: prop.trade.alpacaAccountId !== undefined ? prop.trade.alpacaAccountId : undefined,
        signal: prop.trade.signal !== undefined ? prop.trade.signal : undefined,
        strategy: prop.trade.strategy !== undefined ? prop.trade.strategy : undefined,
        analysis: prop.trade.analysis !== undefined ? prop.trade.analysis : undefined,
        summary: prop.trade.summary !== undefined ? prop.trade.summary : undefined,
        confidence: prop.trade.confidence !== undefined ? prop.trade.confidence : undefined,
        timestamp: prop.trade.timestamp !== undefined ? prop.trade.timestamp : undefined,
        status: prop.trade.status !== undefined ? prop.trade.status : undefined,
        symbol: prop.trade.symbol !== undefined ? prop.trade.symbol : undefined,
        entryPrice: prop.trade.entryPrice !== undefined ? prop.trade.entryPrice : undefined,
        exitPrice: prop.trade.exitPrice !== undefined ? prop.trade.exitPrice : undefined,
        entryQty: prop.trade.entryQty !== undefined ? prop.trade.entryQty : undefined,
        exitQty: prop.trade.exitQty !== undefined ? prop.trade.exitQty : undefined,
        entryValue: prop.trade.entryValue !== undefined ? prop.trade.entryValue : undefined,
        exitValue: prop.trade.exitValue !== undefined ? prop.trade.exitValue : undefined,
        entryTime: prop.trade.entryTime !== undefined ? prop.trade.entryTime : undefined,
        exitTime: prop.trade.exitTime !== undefined ? prop.trade.exitTime : undefined,
        pnlAmount: prop.trade.pnlAmount !== undefined ? prop.trade.pnlAmount : undefined,
        pnlPercent: prop.trade.pnlPercent !== undefined ? prop.trade.pnlPercent : undefined,
        durationMinutes: prop.trade.durationMinutes !== undefined ? prop.trade.durationMinutes : undefined,
        marketPhase: prop.trade.marketPhase !== undefined ? prop.trade.marketPhase : undefined,
        marketVolatility: prop.trade.marketVolatility !== undefined ? prop.trade.marketVolatility : undefined,
        thresholdsJson: prop.trade.thresholdsJson !== undefined ? prop.trade.thresholdsJson : undefined,
      },
    }
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_ACTION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyAction) {
          return response.data.updateManyAction;
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
   * Delete a single Action record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Action or null.
   */
  async delete(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {
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

        const DELETE_ONE_ACTION = gql`
          mutation deleteOneAction($where: ActionWhereUniqueInput!) {
            deleteOneAction(where: $where) {
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
          mutation: DELETE_ONE_ACTION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneAction) {
          return response.data.deleteOneAction;
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
   * Retrieve a single Action record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved Action or null.
   */
  async get(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<ActionType | null> {
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

        const GET_ACTION = gql`
          query getAction($where: ActionWhereUniqueInput!) {
            getAction(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? props.alpacaOrderId : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_ACTION,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getAction ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Action found') {
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
   * Retrieve all Actions records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Action records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType[] | null> {
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

        const GET_ALL_ACTION = gql`
          query getAllAction {
            actions {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_ACTION,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.actions ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Action found') {
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
   * Find multiple Action records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found Action records or null.
   */
  async findMany(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<ActionType[] | null> {
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

        const FIND_MANY_ACTION = gql`
          query findManyAction($where: ActionWhereInput!) {
            actions(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_ACTION,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.actions) {
          return response.data.actions;
        } else {
          return [] as ActionType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Action found') {
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
