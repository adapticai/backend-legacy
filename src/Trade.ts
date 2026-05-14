
  
import { Trade as TradeType } from './generated/typegraphql-prisma/models/Trade';
import { getApolloClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the Trade model.
   */

  const selectionSet = `
    
  id
  alpacaAccountId
  signal
  strategy
  analysis
  summary
  confidence
  timestamp
  createdAt
  updatedAt
  status
  deletedAt
  symbol
  actions {
    id
    sequence
    tradeId
    type
    primary
    note
    status
    createdAt
    updatedAt
    deletedAt
    alpacaOrderId
    supersededActionId
    triggerSource
  }
  entryPrice
  exitPrice
  entryQty
  exitQty
  entryValue
  exitValue
  entryTime
  exitTime
  pnlAmount
  pnlPercent
  durationMinutes
  marketPhase
  marketVolatility
  sessionHorizonMinutes
  thresholdsJson
  thesisVersion
  lastReunderwrittenAt
  supersededById
  rejectionMetadata
  signalSource
  signalId
  pathway
  exitTier

  `;

  export const Trade = {

    /**
     * Create a new Trade record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Trade or null.
     */

    /**
     * Create a new Trade record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created Trade or null.
     */
    async create(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType> {
      // Maximum number of retries for database connection issues
      const MAX_RETRIES = 3;
      let retryCount = 0;
      let lastError: unknown = null;

      // Retry loop to handle potential database connection issues
      while (retryCount < MAX_RETRIES) {
        try {
          const [modules, client] = await Promise.all([
            getApolloModules(),
            globalClient
              ? Promise.resolve(globalClient)
              : getApolloClient()
          ]);

          const { gql, ApolloError } = modules;

          const CREATE_ONE_TRADE = gql`
              mutation createOneTrade($data: TradeCreateInput!) {
                createOneTrade(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
  signal: props.signal !== undefined ? props.signal : undefined,
  strategy: props.strategy !== undefined ? props.strategy : undefined,
  analysis: props.analysis !== undefined ? props.analysis : undefined,
  summary: props.summary !== undefined ? props.summary : undefined,
  confidence: props.confidence !== undefined ? props.confidence : undefined,
  timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  status: props.status !== undefined ? props.status : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  entryPrice: props.entryPrice !== undefined ? props.entryPrice : undefined,
  exitPrice: props.exitPrice !== undefined ? props.exitPrice : undefined,
  entryQty: props.entryQty !== undefined ? props.entryQty : undefined,
  exitQty: props.exitQty !== undefined ? props.exitQty : undefined,
  entryValue: props.entryValue !== undefined ? props.entryValue : undefined,
  exitValue: props.exitValue !== undefined ? props.exitValue : undefined,
  entryTime: props.entryTime !== undefined ? props.entryTime : undefined,
  exitTime: props.exitTime !== undefined ? props.exitTime : undefined,
  pnlAmount: props.pnlAmount !== undefined ? props.pnlAmount : undefined,
  pnlPercent: props.pnlPercent !== undefined ? props.pnlPercent : undefined,
  durationMinutes: props.durationMinutes !== undefined ? props.durationMinutes : undefined,
  marketPhase: props.marketPhase !== undefined ? props.marketPhase : undefined,
  marketVolatility: props.marketVolatility !== undefined ? props.marketVolatility : undefined,
  sessionHorizonMinutes: props.sessionHorizonMinutes !== undefined ? props.sessionHorizonMinutes : undefined,
  thresholdsJson: props.thresholdsJson !== undefined ? props.thresholdsJson : undefined,
  thesisVersion: props.thesisVersion !== undefined ? props.thesisVersion : undefined,
  lastReunderwrittenAt: props.lastReunderwrittenAt !== undefined ? props.lastReunderwrittenAt : undefined,
  supersededById: props.supersededById !== undefined ? props.supersededById : undefined,
  rejectionMetadata: props.rejectionMetadata !== undefined ? props.rejectionMetadata : undefined,
  signalSource: props.signalSource !== undefined ? props.signalSource : undefined,
  signalId: props.signalId !== undefined ? props.signalId : undefined,
  pathway: props.pathway !== undefined ? props.pathway : undefined,
  exitTier: props.exitTier !== undefined ? props.exitTier : undefined,
  actions: props.actions ? 
    Array.isArray(props.actions) && props.actions.length > 0 &&  props.actions.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.actions.map((item) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.actions.map((item) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
        tradeId: item.tradeId !== undefined ? {
            equals: item.tradeId 
           } : undefined,
        type: item.type !== undefined ? {
            equals: item.type 
           } : undefined,
        status: item.status !== undefined ? {
            equals: item.status 
           } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
        supersededActionId: item.supersededActionId !== undefined ? item.supersededActionId : undefined,
        triggerSource: item.triggerSource !== undefined ? item.triggerSource : undefined,
      },
    }))
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_TRADE,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneTrade) {
            return response.data.createOneTrade;
          } else {
            return null as unknown as TradeType;
          }
        } catch (caughtError: unknown) {
          const error = caughtError as Error & { networkError?: { message?: string } };
          lastError = error;

          // Check for constraint violations FIRST - these are NEVER retryable
          const isConstraintViolation =
            error.message?.includes('violates check constraint') ||
            error.message?.includes('violates unique constraint') ||
            error.message?.includes('violates foreign key constraint') ||
            error.message?.includes('unique constraint') ||
            error.message?.includes('23514') ||
            error.message?.includes('23505') ||
            error.message?.includes('P2002') ||
            error.message?.includes('P2003');

          if (isConstraintViolation) {
            const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
            logger.error("Non-retryable constraint violation in createOneTrade", {
              operation: 'createOneTrade',
              model: 'Trade',
              error: String(error),
              constraintName: constraintMatch ? constraintMatch[1] : undefined,
              errorCategory: 'CONSTRAINT_VIOLATION',
              isRetryable: false,
            });
            throw error;
          }

          // Check if this is a database connection error that we should retry.
          // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
          // pool exhaustion, and transient gateway statuses. Must stay consistent
          // with the transient classifier in client.ts (onError link + enqueueOperation).
          const isConnectionError =
            error.message?.includes('Server has closed the connection') ||
            error.message?.includes('Cannot reach database server') ||
            error.message?.includes('Connection timed out') ||
            error.message?.includes('aborted due to timeout') ||
            error.message?.includes('TimeoutError') ||
            error.message?.includes('fetch failed') ||
            error.message?.includes('socket hang up') ||
            error.message?.includes('ECONNRESET') ||
            error.message?.includes('ECONNREFUSED') ||
            error.message?.includes('ETIMEDOUT') ||
            error.message?.includes('Connection pool timeout') ||
            error.message?.includes('P2024') ||
            error.message?.includes('status code 408') ||
            error.message?.includes('status code 502') ||
            error.message?.includes('status code 503') ||
            error.message?.includes('status code 504') ||
            error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
            (error.networkError && (
              error.networkError.message?.includes('Failed to fetch') ||
              error.networkError.message?.includes('fetch failed') ||
              error.networkError.message?.includes('aborted due to timeout') ||
              error.networkError.message?.includes('TimeoutError')
            ));

          if (isConnectionError && retryCount < MAX_RETRIES - 1) {
            retryCount++;
            const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
            logger.warn("Database connection error in createOneTrade, retrying...", {
              operation: 'createOneTrade',
              model: 'Trade',
              attempt: retryCount,
              maxRetries: MAX_RETRIES,
            });
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log structured error details and rethrow.
          // Demote transient failures to WARN with explicit transient+recoveryHint
          // metadata so log analytics can distinguish recoverable upstream retries
          // from true defects.
          if (isConnectionError) {
            logger.warn("Database create operation failed (transient after retries)", {
              operation: 'createOneTrade',
              model: 'Trade',
              error: String(error),
              isRetryable: true,
              transient: true,
              recoveryHint: "Upstream caller should retry on next cycle",
            });
          } else {
            logger.error("Database create operation failed", {
              operation: 'createOneTrade',
              model: 'Trade',
              error: String(error),
              isRetryable: false,
            });
          }
          throw error;
        }
      }

      // If we exhausted retries, throw the last error
      throw lastError;
    },

  /**
   * Create multiple Trade records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Trade objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @param options - Optional control flags (e.g., skipDuplicates).
   * @returns The count of created records or null.
   */
  async createMany(props: TradeType[], globalClient?: ApolloClientType<NormalizedCacheObject>, options?: { skipDuplicates?: boolean }): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_MANY_TRADE = gql`
          mutation createManyTrade($data: [TradeCreateManyInput!]!, $skipDuplicates: Boolean) {
            createManyTrade(data: $data, skipDuplicates: $skipDuplicates) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  signal: prop.signal !== undefined ? prop.signal : undefined,
  strategy: prop.strategy !== undefined ? prop.strategy : undefined,
  analysis: prop.analysis !== undefined ? prop.analysis : undefined,
  summary: prop.summary !== undefined ? prop.summary : undefined,
  confidence: prop.confidence !== undefined ? prop.confidence : undefined,
  timestamp: prop.timestamp !== undefined ? prop.timestamp : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  deletedAt: prop.deletedAt !== undefined ? prop.deletedAt : undefined,
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  entryPrice: prop.entryPrice !== undefined ? prop.entryPrice : undefined,
  exitPrice: prop.exitPrice !== undefined ? prop.exitPrice : undefined,
  entryQty: prop.entryQty !== undefined ? prop.entryQty : undefined,
  exitQty: prop.exitQty !== undefined ? prop.exitQty : undefined,
  entryValue: prop.entryValue !== undefined ? prop.entryValue : undefined,
  exitValue: prop.exitValue !== undefined ? prop.exitValue : undefined,
  entryTime: prop.entryTime !== undefined ? prop.entryTime : undefined,
  exitTime: prop.exitTime !== undefined ? prop.exitTime : undefined,
  pnlAmount: prop.pnlAmount !== undefined ? prop.pnlAmount : undefined,
  pnlPercent: prop.pnlPercent !== undefined ? prop.pnlPercent : undefined,
  durationMinutes: prop.durationMinutes !== undefined ? prop.durationMinutes : undefined,
  marketPhase: prop.marketPhase !== undefined ? prop.marketPhase : undefined,
  marketVolatility: prop.marketVolatility !== undefined ? prop.marketVolatility : undefined,
  sessionHorizonMinutes: prop.sessionHorizonMinutes !== undefined ? prop.sessionHorizonMinutes : undefined,
  thresholdsJson: prop.thresholdsJson !== undefined ? prop.thresholdsJson : undefined,
  thesisVersion: prop.thesisVersion !== undefined ? prop.thesisVersion : undefined,
  lastReunderwrittenAt: prop.lastReunderwrittenAt !== undefined ? prop.lastReunderwrittenAt : undefined,
  supersededById: prop.supersededById !== undefined ? prop.supersededById : undefined,
  rejectionMetadata: prop.rejectionMetadata !== undefined ? prop.rejectionMetadata : undefined,
  signalSource: prop.signalSource !== undefined ? prop.signalSource : undefined,
  signalId: prop.signalId !== undefined ? prop.signalId : undefined,
  pathway: prop.pathway !== undefined ? prop.pathway : undefined,
  exitTier: prop.exitTier !== undefined ? prop.exitTier : undefined,
      })),
          ...(options?.skipDuplicates ? { skipDuplicates: true } : {}),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_TRADE,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyTrade) {
          return response.data.createManyTrade;
        } else {
          return null;
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
        lastError = error;

        // Check for constraint violations FIRST - these are NEVER retryable
        const isConstraintViolation =
          error.message?.includes('violates check constraint') ||
          error.message?.includes('violates unique constraint') ||
          error.message?.includes('violates foreign key constraint') ||
          error.message?.includes('unique constraint') ||
          error.message?.includes('23514') ||
          error.message?.includes('23505') ||
          error.message?.includes('P2002') ||
          error.message?.includes('P2003');

        if (isConstraintViolation) {
          const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
          logger.warn("Duplicate key in createManyTrade (expected during overlapping fetches)", {
            operation: 'createManyTrade',
            model: 'Trade',
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in createManyTrade, retrying...", {
            operation: 'createManyTrade',
            model: 'Trade',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database createMany operation failed (transient after retries)", {
            operation: 'createManyTrade',
            model: 'Trade',
            error: String(error),
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database createMany operation failed", {
            operation: 'createManyTrade',
            model: 'Trade',
            error: String(error),
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single Trade record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Trade or null.
   */
  async update(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_ONE_TRADE = gql`
          mutation updateOneTrade($data: TradeUpdateInput!, $where: TradeWhereUniqueInput!) {
            updateOneTrade(data: $data, where: $where) {
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
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
            set: props.alpacaAccountId 
           } : undefined,
  signal: props.signal !== undefined ? {
            set: props.signal 
           } : undefined,
  strategy: props.strategy !== undefined ? {
            set: props.strategy 
           } : undefined,
  analysis: props.analysis !== undefined ? {
            set: props.analysis 
           } : undefined,
  summary: props.summary !== undefined ? {
            set: props.summary 
           } : undefined,
  confidence: props.confidence !== undefined ? {
            set: props.confidence 
           } : undefined,
  timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  deletedAt: props.deletedAt !== undefined ? {
            set: props.deletedAt 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  entryPrice: props.entryPrice !== undefined ? {
            set: props.entryPrice 
           } : undefined,
  exitPrice: props.exitPrice !== undefined ? {
            set: props.exitPrice 
           } : undefined,
  entryQty: props.entryQty !== undefined ? {
            set: props.entryQty 
           } : undefined,
  exitQty: props.exitQty !== undefined ? {
            set: props.exitQty 
           } : undefined,
  entryValue: props.entryValue !== undefined ? {
            set: props.entryValue 
           } : undefined,
  exitValue: props.exitValue !== undefined ? {
            set: props.exitValue 
           } : undefined,
  entryTime: props.entryTime !== undefined ? {
            set: props.entryTime 
           } : undefined,
  exitTime: props.exitTime !== undefined ? {
            set: props.exitTime 
           } : undefined,
  pnlAmount: props.pnlAmount !== undefined ? {
            set: props.pnlAmount 
           } : undefined,
  pnlPercent: props.pnlPercent !== undefined ? {
            set: props.pnlPercent 
           } : undefined,
  durationMinutes: props.durationMinutes !== undefined ? {
            set: props.durationMinutes 
           } : undefined,
  marketPhase: props.marketPhase !== undefined ? {
            set: props.marketPhase 
           } : undefined,
  marketVolatility: props.marketVolatility !== undefined ? {
            set: props.marketVolatility 
           } : undefined,
  sessionHorizonMinutes: props.sessionHorizonMinutes !== undefined ? {
            set: props.sessionHorizonMinutes 
           } : undefined,
  thresholdsJson: props.thresholdsJson !== undefined ? {
            set: props.thresholdsJson 
           } : undefined,
  thesisVersion: props.thesisVersion !== undefined ? {
            set: props.thesisVersion 
           } : undefined,
  lastReunderwrittenAt: props.lastReunderwrittenAt !== undefined ? {
            set: props.lastReunderwrittenAt 
           } : undefined,
  supersededById: props.supersededById !== undefined ? {
            set: props.supersededById 
           } : undefined,
  rejectionMetadata: props.rejectionMetadata !== undefined ? props.rejectionMetadata : undefined,
  signalSource: props.signalSource !== undefined ? {
            set: props.signalSource 
           } : undefined,
  signalId: props.signalId !== undefined ? {
            set: props.signalId 
           } : undefined,
  pathway: props.pathway !== undefined ? {
            set: props.pathway 
           } : undefined,
  exitTier: props.exitTier !== undefined ? {
            set: props.exitTier 
           } : undefined,
  actions: props.actions ? 
  Array.isArray(props.actions) && props.actions.length > 0 && props.actions.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.actions.map((item) => ({
    id: item.id
  }))
} : { upsert: props.actions.map((item) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
        tradeId: item.tradeId !== undefined ? {
            equals: item.tradeId
          } : undefined,
        type: item.type !== undefined ? {
            equals: item.type
          } : undefined,
        status: item.status !== undefined ? {
            equals: item.status
          } : undefined,
        supersededActionId: item.supersededActionId !== undefined ? {
            equals: item.supersededActionId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        sequence: item.sequence !== undefined ? {
            set: item.sequence
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        primary: item.primary !== undefined ? {
            set: item.primary
          } : undefined,
        note: item.note !== undefined ? {
            set: item.note
          } : undefined,
        status: item.status !== undefined ? {
            set: item.status
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? {
            set: item.alpacaOrderId
          } : undefined,
        supersededActionId: item.supersededActionId !== undefined ? {
            set: item.supersededActionId
          } : undefined,
        triggerSource: item.triggerSource !== undefined ? {
            set: item.triggerSource
          } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
        supersededActionId: item.supersededActionId !== undefined ? item.supersededActionId : undefined,
        triggerSource: item.triggerSource !== undefined ? item.triggerSource : undefined,
      },
    }))
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_TRADE,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneTrade) {
          return response.data.updateOneTrade;
        } else {
          return null as unknown as TradeType;
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
        lastError = error;

        // Check for constraint violations FIRST - these are NEVER retryable
        const isConstraintViolation =
          error.message?.includes('violates check constraint') ||
          error.message?.includes('violates unique constraint') ||
          error.message?.includes('violates foreign key constraint') ||
          error.message?.includes('unique constraint') ||
          error.message?.includes('23514') ||
          error.message?.includes('23505') ||
          error.message?.includes('P2002') ||
          error.message?.includes('P2003');

        if (isConstraintViolation) {
          const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
          logger.error("Non-retryable constraint violation in updateOneTrade", {
            operation: 'updateOneTrade',
            model: 'Trade',
            error: String(error),
            recordId: props.id,
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in updateOneTrade, retrying...", {
            operation: 'updateOneTrade',
            model: 'Trade',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database update operation failed (transient after retries)", {
            operation: 'updateOneTrade',
            model: 'Trade',
            error: String(error),
            recordId: props.id,
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database update operation failed", {
            operation: 'updateOneTrade',
            model: 'Trade',
            error: String(error),
            recordId: props.id,
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single Trade record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Trade or null.
   */
  async upsert(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const UPSERT_ONE_TRADE = gql`
          mutation upsertOneTrade($where: TradeWhereUniqueInput!, $create: TradeCreateInput!, $update: TradeUpdateInput!) {
            upsertOneTrade(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  status: props.status !== undefined ? {
    equals: props.status 
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  signalId: props.signalId !== undefined ? {
    equals: props.signalId 
  } : undefined,
      },
          create: {
        alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
  signal: props.signal !== undefined ? props.signal : undefined,
  strategy: props.strategy !== undefined ? props.strategy : undefined,
  analysis: props.analysis !== undefined ? props.analysis : undefined,
  summary: props.summary !== undefined ? props.summary : undefined,
  confidence: props.confidence !== undefined ? props.confidence : undefined,
  timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  status: props.status !== undefined ? props.status : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  entryPrice: props.entryPrice !== undefined ? props.entryPrice : undefined,
  exitPrice: props.exitPrice !== undefined ? props.exitPrice : undefined,
  entryQty: props.entryQty !== undefined ? props.entryQty : undefined,
  exitQty: props.exitQty !== undefined ? props.exitQty : undefined,
  entryValue: props.entryValue !== undefined ? props.entryValue : undefined,
  exitValue: props.exitValue !== undefined ? props.exitValue : undefined,
  entryTime: props.entryTime !== undefined ? props.entryTime : undefined,
  exitTime: props.exitTime !== undefined ? props.exitTime : undefined,
  pnlAmount: props.pnlAmount !== undefined ? props.pnlAmount : undefined,
  pnlPercent: props.pnlPercent !== undefined ? props.pnlPercent : undefined,
  durationMinutes: props.durationMinutes !== undefined ? props.durationMinutes : undefined,
  marketPhase: props.marketPhase !== undefined ? props.marketPhase : undefined,
  marketVolatility: props.marketVolatility !== undefined ? props.marketVolatility : undefined,
  sessionHorizonMinutes: props.sessionHorizonMinutes !== undefined ? props.sessionHorizonMinutes : undefined,
  thresholdsJson: props.thresholdsJson !== undefined ? props.thresholdsJson : undefined,
  thesisVersion: props.thesisVersion !== undefined ? props.thesisVersion : undefined,
  lastReunderwrittenAt: props.lastReunderwrittenAt !== undefined ? props.lastReunderwrittenAt : undefined,
  supersededById: props.supersededById !== undefined ? props.supersededById : undefined,
  rejectionMetadata: props.rejectionMetadata !== undefined ? props.rejectionMetadata : undefined,
  signalSource: props.signalSource !== undefined ? props.signalSource : undefined,
  signalId: props.signalId !== undefined ? props.signalId : undefined,
  pathway: props.pathway !== undefined ? props.pathway : undefined,
  exitTier: props.exitTier !== undefined ? props.exitTier : undefined,
  actions: props.actions ? 
    Array.isArray(props.actions) && props.actions.length > 0 &&  props.actions.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.actions.map((item) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.actions.map((item) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
        tradeId: item.tradeId !== undefined ? {
            equals: item.tradeId 
           } : undefined,
        type: item.type !== undefined ? {
            equals: item.type 
           } : undefined,
        status: item.status !== undefined ? {
            equals: item.status 
           } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
        supersededActionId: item.supersededActionId !== undefined ? item.supersededActionId : undefined,
        triggerSource: item.triggerSource !== undefined ? item.triggerSource : undefined,
      },
    }))
  } : undefined,
      },
          update: {
      alpacaAccountId: props.alpacaAccountId !== undefined ? {
            set: props.alpacaAccountId 
           } : undefined,
  signal: props.signal !== undefined ? {
            set: props.signal 
           } : undefined,
  strategy: props.strategy !== undefined ? {
            set: props.strategy 
           } : undefined,
  analysis: props.analysis !== undefined ? {
            set: props.analysis 
           } : undefined,
  summary: props.summary !== undefined ? {
            set: props.summary 
           } : undefined,
  confidence: props.confidence !== undefined ? {
            set: props.confidence 
           } : undefined,
  timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  deletedAt: props.deletedAt !== undefined ? {
            set: props.deletedAt 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  entryPrice: props.entryPrice !== undefined ? {
            set: props.entryPrice 
           } : undefined,
  exitPrice: props.exitPrice !== undefined ? {
            set: props.exitPrice 
           } : undefined,
  entryQty: props.entryQty !== undefined ? {
            set: props.entryQty 
           } : undefined,
  exitQty: props.exitQty !== undefined ? {
            set: props.exitQty 
           } : undefined,
  entryValue: props.entryValue !== undefined ? {
            set: props.entryValue 
           } : undefined,
  exitValue: props.exitValue !== undefined ? {
            set: props.exitValue 
           } : undefined,
  entryTime: props.entryTime !== undefined ? {
            set: props.entryTime 
           } : undefined,
  exitTime: props.exitTime !== undefined ? {
            set: props.exitTime 
           } : undefined,
  pnlAmount: props.pnlAmount !== undefined ? {
            set: props.pnlAmount 
           } : undefined,
  pnlPercent: props.pnlPercent !== undefined ? {
            set: props.pnlPercent 
           } : undefined,
  durationMinutes: props.durationMinutes !== undefined ? {
            set: props.durationMinutes 
           } : undefined,
  marketPhase: props.marketPhase !== undefined ? {
            set: props.marketPhase 
           } : undefined,
  marketVolatility: props.marketVolatility !== undefined ? {
            set: props.marketVolatility 
           } : undefined,
  sessionHorizonMinutes: props.sessionHorizonMinutes !== undefined ? {
            set: props.sessionHorizonMinutes 
           } : undefined,
  thresholdsJson: props.thresholdsJson !== undefined ? {
            set: props.thresholdsJson 
           } : undefined,
  thesisVersion: props.thesisVersion !== undefined ? {
            set: props.thesisVersion 
           } : undefined,
  lastReunderwrittenAt: props.lastReunderwrittenAt !== undefined ? {
            set: props.lastReunderwrittenAt 
           } : undefined,
  supersededById: props.supersededById !== undefined ? {
            set: props.supersededById 
           } : undefined,
  rejectionMetadata: props.rejectionMetadata !== undefined ? props.rejectionMetadata : undefined,
  signalSource: props.signalSource !== undefined ? {
            set: props.signalSource 
           } : undefined,
  signalId: props.signalId !== undefined ? {
            set: props.signalId 
           } : undefined,
  pathway: props.pathway !== undefined ? {
            set: props.pathway 
           } : undefined,
  exitTier: props.exitTier !== undefined ? {
            set: props.exitTier 
           } : undefined,
  actions: props.actions ? 
  Array.isArray(props.actions) && props.actions.length > 0 && props.actions.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.actions.map((item) => ({
    id: item.id
  }))
} : { upsert: props.actions.map((item) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
        tradeId: item.tradeId !== undefined ? {
            equals: item.tradeId
          } : undefined,
        type: item.type !== undefined ? {
            equals: item.type
          } : undefined,
        status: item.status !== undefined ? {
            equals: item.status
          } : undefined,
        supersededActionId: item.supersededActionId !== undefined ? {
            equals: item.supersededActionId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        sequence: item.sequence !== undefined ? {
            set: item.sequence
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        primary: item.primary !== undefined ? {
            set: item.primary
          } : undefined,
        note: item.note !== undefined ? {
            set: item.note
          } : undefined,
        status: item.status !== undefined ? {
            set: item.status
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? {
            set: item.alpacaOrderId
          } : undefined,
        supersededActionId: item.supersededActionId !== undefined ? {
            set: item.supersededActionId
          } : undefined,
        triggerSource: item.triggerSource !== undefined ? {
            set: item.triggerSource
          } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
        supersededActionId: item.supersededActionId !== undefined ? item.supersededActionId : undefined,
        triggerSource: item.triggerSource !== undefined ? item.triggerSource : undefined,
      },
    }))
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_TRADE,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneTrade) {
          return response.data.upsertOneTrade;
        } else {
          return null as unknown as TradeType;
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
        lastError = error;

        // Check for constraint violations FIRST - these are NEVER retryable
        const isConstraintViolation =
          error.message?.includes('violates check constraint') ||
          error.message?.includes('violates unique constraint') ||
          error.message?.includes('violates foreign key constraint') ||
          error.message?.includes('unique constraint') ||
          error.message?.includes('23514') ||
          error.message?.includes('23505') ||
          error.message?.includes('P2002') ||
          error.message?.includes('P2003');

        if (isConstraintViolation) {
          const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
          logger.error("Non-retryable constraint violation in upsertOneTrade", {
            operation: 'upsertOneTrade',
            model: 'Trade',
            error: String(error),
            recordId: props.id,
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in upsertOneTrade, retrying...", {
            operation: 'upsertOneTrade',
            model: 'Trade',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database upsert operation failed (transient after retries)", {
            operation: 'upsertOneTrade',
            model: 'Trade',
            error: String(error),
            recordId: props.id,
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database upsert operation failed", {
            operation: 'upsertOneTrade',
            model: 'Trade',
            error: String(error),
            recordId: props.id,
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple Trade records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Trade objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: TradeType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_MANY_TRADE = gql`
          mutation updateManyTrade($data: [TradeCreateManyInput!]!) {
            updateManyTrade(data: $data) {
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
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
            set: prop.alpacaAccountId 
           } : undefined,
  signal: prop.signal !== undefined ? {
            set: prop.signal 
           } : undefined,
  strategy: prop.strategy !== undefined ? {
            set: prop.strategy 
           } : undefined,
  analysis: prop.analysis !== undefined ? {
            set: prop.analysis 
           } : undefined,
  summary: prop.summary !== undefined ? {
            set: prop.summary 
           } : undefined,
  confidence: prop.confidence !== undefined ? {
            set: prop.confidence 
           } : undefined,
  timestamp: prop.timestamp !== undefined ? {
            set: prop.timestamp 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  deletedAt: prop.deletedAt !== undefined ? {
            set: prop.deletedAt 
           } : undefined,
  symbol: prop.symbol !== undefined ? {
            set: prop.symbol 
           } : undefined,
  entryPrice: prop.entryPrice !== undefined ? {
            set: prop.entryPrice 
           } : undefined,
  exitPrice: prop.exitPrice !== undefined ? {
            set: prop.exitPrice 
           } : undefined,
  entryQty: prop.entryQty !== undefined ? {
            set: prop.entryQty 
           } : undefined,
  exitQty: prop.exitQty !== undefined ? {
            set: prop.exitQty 
           } : undefined,
  entryValue: prop.entryValue !== undefined ? {
            set: prop.entryValue 
           } : undefined,
  exitValue: prop.exitValue !== undefined ? {
            set: prop.exitValue 
           } : undefined,
  entryTime: prop.entryTime !== undefined ? {
            set: prop.entryTime 
           } : undefined,
  exitTime: prop.exitTime !== undefined ? {
            set: prop.exitTime 
           } : undefined,
  pnlAmount: prop.pnlAmount !== undefined ? {
            set: prop.pnlAmount 
           } : undefined,
  pnlPercent: prop.pnlPercent !== undefined ? {
            set: prop.pnlPercent 
           } : undefined,
  durationMinutes: prop.durationMinutes !== undefined ? {
            set: prop.durationMinutes 
           } : undefined,
  marketPhase: prop.marketPhase !== undefined ? {
            set: prop.marketPhase 
           } : undefined,
  marketVolatility: prop.marketVolatility !== undefined ? {
            set: prop.marketVolatility 
           } : undefined,
  sessionHorizonMinutes: prop.sessionHorizonMinutes !== undefined ? {
            set: prop.sessionHorizonMinutes 
           } : undefined,
  thresholdsJson: prop.thresholdsJson !== undefined ? {
            set: prop.thresholdsJson 
           } : undefined,
  thesisVersion: prop.thesisVersion !== undefined ? {
            set: prop.thesisVersion 
           } : undefined,
  lastReunderwrittenAt: prop.lastReunderwrittenAt !== undefined ? {
            set: prop.lastReunderwrittenAt 
           } : undefined,
  supersededById: prop.supersededById !== undefined ? {
            set: prop.supersededById 
           } : undefined,
  rejectionMetadata: prop.rejectionMetadata !== undefined ? prop.rejectionMetadata : undefined,
  signalSource: prop.signalSource !== undefined ? {
            set: prop.signalSource 
           } : undefined,
  signalId: prop.signalId !== undefined ? {
            set: prop.signalId 
           } : undefined,
  pathway: prop.pathway !== undefined ? {
            set: prop.pathway 
           } : undefined,
  exitTier: prop.exitTier !== undefined ? {
            set: prop.exitTier 
           } : undefined,
  actions: prop.actions ? 
  Array.isArray(prop.actions) && prop.actions.length > 0 && prop.actions.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.actions.map((item) => ({
    id: item.id
  }))
} : { upsert: prop.actions.map((item) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
        tradeId: item.tradeId !== undefined ? {
            equals: item.tradeId
          } : undefined,
        type: item.type !== undefined ? {
            equals: item.type
          } : undefined,
        status: item.status !== undefined ? {
            equals: item.status
          } : undefined,
        supersededActionId: item.supersededActionId !== undefined ? {
            equals: item.supersededActionId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        sequence: item.sequence !== undefined ? {
            set: item.sequence
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        primary: item.primary !== undefined ? {
            set: item.primary
          } : undefined,
        note: item.note !== undefined ? {
            set: item.note
          } : undefined,
        status: item.status !== undefined ? {
            set: item.status
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? {
            set: item.alpacaOrderId
          } : undefined,
        supersededActionId: item.supersededActionId !== undefined ? {
            set: item.supersededActionId
          } : undefined,
        triggerSource: item.triggerSource !== undefined ? {
            set: item.triggerSource
          } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
        supersededActionId: item.supersededActionId !== undefined ? item.supersededActionId : undefined,
        triggerSource: item.triggerSource !== undefined ? item.triggerSource : undefined,
      },
    }))
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_TRADE,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyTrade) {
          return response.data.updateManyTrade;
        } else {
          return null;
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
        lastError = error;

        // Check for constraint violations FIRST - these are NEVER retryable
        const isConstraintViolation =
          error.message?.includes('violates check constraint') ||
          error.message?.includes('violates unique constraint') ||
          error.message?.includes('violates foreign key constraint') ||
          error.message?.includes('unique constraint') ||
          error.message?.includes('23514') ||
          error.message?.includes('23505') ||
          error.message?.includes('P2002') ||
          error.message?.includes('P2003');

        if (isConstraintViolation) {
          const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
          logger.error("Non-retryable constraint violation in updateManyTrade", {
            operation: 'updateManyTrade',
            model: 'Trade',
            error: String(error),
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in updateManyTrade, retrying...", {
            operation: 'updateManyTrade',
            model: 'Trade',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database updateMany operation failed (transient after retries)", {
            operation: 'updateManyTrade',
            model: 'Trade',
            error: String(error),
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database updateMany operation failed", {
            operation: 'updateManyTrade',
            model: 'Trade',
            error: String(error),
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single Trade record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Trade or null.
   */
  async delete(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const DELETE_ONE_TRADE = gql`
          mutation deleteOneTrade($where: TradeWhereUniqueInput!) {
            deleteOneTrade(where: $where) {
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
          mutation: DELETE_ONE_TRADE,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneTrade) {
          return response.data.deleteOneTrade;
        } else {
          return null as unknown as TradeType;
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
        lastError = error;

        // Check for constraint violations FIRST - these are NEVER retryable
        // (e.g., foreign key constraints preventing deletion)
        const isConstraintViolation =
          error.message?.includes('violates check constraint') ||
          error.message?.includes('violates unique constraint') ||
          error.message?.includes('violates foreign key constraint') ||
          error.message?.includes('unique constraint') ||
          error.message?.includes('23514') ||
          error.message?.includes('23505') ||
          error.message?.includes('23503') ||
          error.message?.includes('P2002') ||
          error.message?.includes('P2003') ||
          error.message?.includes('P2014');

        if (isConstraintViolation) {
          const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
          logger.error("Non-retryable constraint violation in deleteOneTrade", {
            operation: 'deleteOneTrade',
            model: 'Trade',
            error: String(error),
            recordId: props.id,
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in deleteOneTrade, retrying...", {
            operation: 'deleteOneTrade',
            model: 'Trade',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database delete operation failed (transient after retries)", {
            operation: 'deleteOneTrade',
            model: 'Trade',
            error: String(error),
            recordId: props.id,
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database delete operation failed", {
            operation: 'deleteOneTrade',
            model: 'Trade',
            error: String(error),
            recordId: props.id,
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single Trade record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved Trade or null.
   */
  async get(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: Record<string, unknown>): Promise<TradeType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const GET_TRADE = gql`
          query getTrade($where: TradeWhereUniqueInput!) {
            getTrade(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  status: props.status !== undefined ? {
    equals: props.status 
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  signalId: props.signalId !== undefined ? {
    equals: props.signalId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_TRADE,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getTrade ?? null;
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Trade found') {
          return null;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in getTrade, retrying...", {
            operation: 'getTrade',
            model: 'Trade',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database get operation failed (transient after retries)", {
            operation: 'getTrade',
            model: 'Trade',
            error: String(error),
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database get operation failed", {
            operation: 'getTrade',
            model: 'Trade',
            error: String(error),
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all Trades records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Trade records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const GET_ALL_TRADE = gql`
          query getAllTrade {
            trades {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_TRADE,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.trades ?? null;
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Trade found') {
          return null;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in getAllTrade, retrying...", {
            operation: 'getAllTrade',
            model: 'Trade',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database getAll operation failed (transient after retries)", {
            operation: 'getAllTrade',
            model: 'Trade',
            error: String(error),
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database getAll operation failed", {
            operation: 'getAllTrade',
            model: 'Trade',
            error: String(error),
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple Trade records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found Trade records or null.
   */
  async findMany(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: Record<string, unknown>): Promise<TradeType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const FIND_MANY_TRADE = gql`
          query findManyTrade($where: TradeWhereInput!) {
            trades(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  status: props.status !== undefined ? {
    equals: props.status 
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  signalId: props.signalId !== undefined ? {
    equals: props.signalId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        // Validate that we have at least one filter criteria
        // GraphQL requires a non-empty where clause for findMany
        if (!filteredVariables || !filteredVariables.where || Object.keys(filteredVariables.where).length === 0) {
          throw new Error(`findManyTrade requires at least one filter criterion. Received empty where clause.`);
        }

        const response = await client.query({
          query: FIND_MANY_TRADE,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.trades) {
          return response.data.trades;
        } else {
          return [] as TradeType[];
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Trade found') {
          return null;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in findManyTrade, retrying...", {
            operation: 'findManyTrade',
            model: 'Trade',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database findMany operation failed (transient after retries)", {
            operation: 'findManyTrade',
            model: 'Trade',
            error: String(error),
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database findMany operation failed", {
            operation: 'findManyTrade',
            model: 'Trade',
            error: String(error),
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  }
};
