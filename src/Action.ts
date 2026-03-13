
  
import { Action as ActionType } from './generated/typegraphql-prisma/models/Action';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
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
  deletedAt
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
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
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
        brokerageAccountId: props.trade.brokerageAccountId !== undefined ? {
            equals: props.trade.brokerageAccountId 
           } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol 
           } : undefined,
      },
      create: {
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        deletedAt: props.trade.deletedAt !== undefined ? props.trade.deletedAt : undefined,
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
        sessionHorizonMinutes: props.trade.sessionHorizonMinutes !== undefined ? props.trade.sessionHorizonMinutes : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? props.trade.thresholdsJson : undefined,
    brokerageAccount: props.trade.brokerageAccount ? 
      typeof props.trade.brokerageAccount === 'object' && Object.keys(props.trade.brokerageAccount).length === 1 && Object.keys(props.trade.brokerageAccount)[0] === 'id'
    ? { connect: {
          id: props.trade.brokerageAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.trade.brokerageAccount.id !== undefined ? props.trade.brokerageAccount.id : undefined,
          fundId: props.trade.brokerageAccount.fundId !== undefined ? {
              equals: props.trade.brokerageAccount.fundId 
             } : undefined,
        },
        create: {
          provider: props.trade.brokerageAccount.provider !== undefined ? props.trade.brokerageAccount.provider : undefined,
          type: props.trade.brokerageAccount.type !== undefined ? props.trade.brokerageAccount.type : undefined,
          apiKey: props.trade.brokerageAccount.apiKey !== undefined ? props.trade.brokerageAccount.apiKey : undefined,
          apiSecret: props.trade.brokerageAccount.apiSecret !== undefined ? props.trade.brokerageAccount.apiSecret : undefined,
          configuration: props.trade.brokerageAccount.configuration !== undefined ? props.trade.brokerageAccount.configuration : undefined,
          marketOpen: props.trade.brokerageAccount.marketOpen !== undefined ? props.trade.brokerageAccount.marketOpen : undefined,
          realTime: props.trade.brokerageAccount.realTime !== undefined ? props.trade.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.trade.brokerageAccount.cryptoTradingEnabled !== undefined ? props.trade.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.trade.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.trade.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.trade.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.trade.brokerageAccount.tradeAllocationPct !== undefined ? props.trade.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.trade.brokerageAccount.autoAllocation !== undefined ? props.trade.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.trade.brokerageAccount.minPercentageChange !== undefined ? props.trade.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.trade.brokerageAccount.volumeThreshold !== undefined ? props.trade.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.trade.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.trade.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.trade.brokerageAccount.portfolioTrailPercent !== undefined ? props.trade.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.trade.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.trade.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.trade.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.trade.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.trade.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.trade.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.trade.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.trade.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.trade.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.trade.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.trade.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.trade.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.trade.brokerageAccount.deletedAt !== undefined ? props.trade.brokerageAccount.deletedAt : undefined,
      allocation: props.trade.brokerageAccount.allocation ? 
        typeof props.trade.brokerageAccount.allocation === 'object' && Object.keys(props.trade.brokerageAccount.allocation).length === 1 && Object.keys(props.trade.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.allocation.id !== undefined ? props.trade.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.trade.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.trade.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.trade.brokerageAccount.allocation.equities !== undefined ? props.trade.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.trade.brokerageAccount.allocation.optionsContracts !== undefined ? props.trade.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.trade.brokerageAccount.allocation.futures !== undefined ? props.trade.brokerageAccount.allocation.futures : undefined,
            etfs: props.trade.brokerageAccount.allocation.etfs !== undefined ? props.trade.brokerageAccount.allocation.etfs : undefined,
            forex: props.trade.brokerageAccount.allocation.forex !== undefined ? props.trade.brokerageAccount.allocation.forex : undefined,
            crypto: props.trade.brokerageAccount.allocation.crypto !== undefined ? props.trade.brokerageAccount.allocation.crypto : undefined,
            stocks: props.trade.brokerageAccount.allocation.stocks !== undefined ? props.trade.brokerageAccount.allocation.stocks : undefined,
            options: props.trade.brokerageAccount.allocation.options !== undefined ? props.trade.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.trade.brokerageAccount.fund ? 
        typeof props.trade.brokerageAccount.fund === 'object' && Object.keys(props.trade.brokerageAccount.fund).length === 1 && Object.keys(props.trade.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.fund.id !== undefined ? props.trade.brokerageAccount.fund.id : undefined,
            name: props.trade.brokerageAccount.fund.name !== undefined ? {
                equals: props.trade.brokerageAccount.fund.name 
               } : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? {
                equals: props.trade.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.trade.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.trade.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.trade.brokerageAccount.fund.name !== undefined ? props.trade.brokerageAccount.fund.name : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? props.trade.brokerageAccount.fund.slug : undefined,
            description: props.trade.brokerageAccount.fund.description !== undefined ? props.trade.brokerageAccount.fund.description : undefined,
            status: props.trade.brokerageAccount.fund.status !== undefined ? props.trade.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.trade.brokerageAccount.fund.tradingOverrides !== undefined ? props.trade.brokerageAccount.fund.tradingOverrides : undefined,
            deletedAt: props.trade.brokerageAccount.fund.deletedAt !== undefined ? props.trade.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.trade.brokerageAccount.alerts ? 
        Array.isArray(props.trade.brokerageAccount.alerts) && props.trade.brokerageAccount.alerts.length > 0 &&  props.trade.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsPositions: props.trade.brokerageAccount.optionsPositions ? 
        Array.isArray(props.trade.brokerageAccount.optionsPositions) && props.trade.brokerageAccount.optionsPositions.length > 0 &&  props.trade.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.trade.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.trade.brokerageAccount.optionsTradeExecutions) && props.trade.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.trade.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
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
  deletedAt: prop.deletedAt !== undefined ? prop.deletedAt : undefined,
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
  deletedAt: props.deletedAt !== undefined ? {
            set: props.deletedAt 
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
        brokerageAccountId: props.trade.brokerageAccountId !== undefined ? {
            equals: props.trade.brokerageAccountId
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol
          } : undefined,
      },
      update: {
        id: props.trade.id !== undefined ? {
            set: props.trade.id
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
        deletedAt: props.trade.deletedAt !== undefined ? {
            set: props.trade.deletedAt
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
        sessionHorizonMinutes: props.trade.sessionHorizonMinutes !== undefined ? {
            set: props.trade.sessionHorizonMinutes
          } : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? {
            set: props.trade.thresholdsJson
          } : undefined,
    brokerageAccount: props.trade.brokerageAccount ? 
    typeof props.trade.brokerageAccount === 'object' && Object.keys(props.trade.brokerageAccount).length === 1 && (Object.keys(props.trade.brokerageAccount)[0] === 'id' || Object.keys(props.trade.brokerageAccount)[0] === 'symbol')
? {
    connect: {
      id: props.trade.brokerageAccount.id
    }
} : { upsert: {
        where: {
          id: props.trade.brokerageAccount.id !== undefined ? {
              equals: props.trade.brokerageAccount.id
            } : undefined,
          fundId: props.trade.brokerageAccount.fundId !== undefined ? {
              equals: props.trade.brokerageAccount.fundId
            } : undefined,
        },
        update: {
          id: props.trade.brokerageAccount.id !== undefined ? {
              set: props.trade.brokerageAccount.id
            } : undefined,
          provider: props.trade.brokerageAccount.provider !== undefined ? {
              set: props.trade.brokerageAccount.provider
            } : undefined,
          type: props.trade.brokerageAccount.type !== undefined ? {
              set: props.trade.brokerageAccount.type
            } : undefined,
          apiKey: props.trade.brokerageAccount.apiKey !== undefined ? {
              set: props.trade.brokerageAccount.apiKey
            } : undefined,
          apiSecret: props.trade.brokerageAccount.apiSecret !== undefined ? {
              set: props.trade.brokerageAccount.apiSecret
            } : undefined,
          configuration: props.trade.brokerageAccount.configuration !== undefined ? {
              set: props.trade.brokerageAccount.configuration
            } : undefined,
          marketOpen: props.trade.brokerageAccount.marketOpen !== undefined ? {
              set: props.trade.brokerageAccount.marketOpen
            } : undefined,
          realTime: props.trade.brokerageAccount.realTime !== undefined ? {
              set: props.trade.brokerageAccount.realTime
            } : undefined,
          cryptoTradingEnabled: props.trade.brokerageAccount.cryptoTradingEnabled !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: props.trade.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: props.trade.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: props.trade.brokerageAccount.tradeAllocationPct !== undefined ? {
              set: props.trade.brokerageAccount.tradeAllocationPct
            } : undefined,
          autoAllocation: props.trade.brokerageAccount.autoAllocation !== undefined ? {
              set: props.trade.brokerageAccount.autoAllocation
            } : undefined,
          minPercentageChange: props.trade.brokerageAccount.minPercentageChange !== undefined ? {
              set: props.trade.brokerageAccount.minPercentageChange
            } : undefined,
          volumeThreshold: props.trade.brokerageAccount.volumeThreshold !== undefined ? {
              set: props.trade.brokerageAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: props.trade.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
              set: props.trade.brokerageAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: props.trade.brokerageAccount.portfolioTrailPercent !== undefined ? {
              set: props.trade.brokerageAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: props.trade.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: props.trade.brokerageAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: props.trade.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: props.trade.brokerageAccount.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: props.trade.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
              set: props.trade.brokerageAccount.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: props.trade.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
              set: props.trade.brokerageAccount.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: props.trade.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
              set: props.trade.brokerageAccount.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: props.trade.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
              set: props.trade.brokerageAccount.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: props.trade.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
              set: props.trade.brokerageAccount.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: props.trade.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
              set: props.trade.brokerageAccount.minimumPriceChangePercent100
            } : undefined,
          deletedAt: props.trade.brokerageAccount.deletedAt !== undefined ? {
              set: props.trade.brokerageAccount.deletedAt
            } : undefined,
      allocation: props.trade.brokerageAccount.allocation ? 
      typeof props.trade.brokerageAccount.allocation === 'object' && Object.keys(props.trade.brokerageAccount.allocation).length === 1 && (Object.keys(props.trade.brokerageAccount.allocation)[0] === 'id' || Object.keys(props.trade.brokerageAccount.allocation)[0] === 'symbol')
? {
      connect: {
        id: props.trade.brokerageAccount.allocation.id
      }
} : { upsert: {
          where: {
            id: props.trade.brokerageAccount.allocation.id !== undefined ? {
                equals: props.trade.brokerageAccount.allocation.id
              } : undefined,
            brokerageAccountId: props.trade.brokerageAccount.allocation.brokerageAccountId !== undefined ? {
                equals: props.trade.brokerageAccount.allocation.brokerageAccountId
              } : undefined,
          },
          update: {
            id: props.trade.brokerageAccount.allocation.id !== undefined ? {
                set: props.trade.brokerageAccount.allocation.id
              } : undefined,
            equities: props.trade.brokerageAccount.allocation.equities !== undefined ? {
                set: props.trade.brokerageAccount.allocation.equities
              } : undefined,
            optionsContracts: props.trade.brokerageAccount.allocation.optionsContracts !== undefined ? {
                set: props.trade.brokerageAccount.allocation.optionsContracts
              } : undefined,
            futures: props.trade.brokerageAccount.allocation.futures !== undefined ? {
                set: props.trade.brokerageAccount.allocation.futures
              } : undefined,
            etfs: props.trade.brokerageAccount.allocation.etfs !== undefined ? {
                set: props.trade.brokerageAccount.allocation.etfs
              } : undefined,
            forex: props.trade.brokerageAccount.allocation.forex !== undefined ? {
                set: props.trade.brokerageAccount.allocation.forex
              } : undefined,
            crypto: props.trade.brokerageAccount.allocation.crypto !== undefined ? {
                set: props.trade.brokerageAccount.allocation.crypto
              } : undefined,
            stocks: props.trade.brokerageAccount.allocation.stocks !== undefined ? {
                set: props.trade.brokerageAccount.allocation.stocks
              } : undefined,
            options: props.trade.brokerageAccount.allocation.options !== undefined ? {
                set: props.trade.brokerageAccount.allocation.options
              } : undefined,
          },
          create: {
            equities: props.trade.brokerageAccount.allocation.equities !== undefined ? props.trade.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.trade.brokerageAccount.allocation.optionsContracts !== undefined ? props.trade.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.trade.brokerageAccount.allocation.futures !== undefined ? props.trade.brokerageAccount.allocation.futures : undefined,
            etfs: props.trade.brokerageAccount.allocation.etfs !== undefined ? props.trade.brokerageAccount.allocation.etfs : undefined,
            forex: props.trade.brokerageAccount.allocation.forex !== undefined ? props.trade.brokerageAccount.allocation.forex : undefined,
            crypto: props.trade.brokerageAccount.allocation.crypto !== undefined ? props.trade.brokerageAccount.allocation.crypto : undefined,
            stocks: props.trade.brokerageAccount.allocation.stocks !== undefined ? props.trade.brokerageAccount.allocation.stocks : undefined,
            options: props.trade.brokerageAccount.allocation.options !== undefined ? props.trade.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.trade.brokerageAccount.fund ? 
      typeof props.trade.brokerageAccount.fund === 'object' && Object.keys(props.trade.brokerageAccount.fund).length === 1 && (Object.keys(props.trade.brokerageAccount.fund)[0] === 'id' || Object.keys(props.trade.brokerageAccount.fund)[0] === 'symbol')
? {
      connect: {
        id: props.trade.brokerageAccount.fund.id
      }
} : { upsert: {
          where: {
            id: props.trade.brokerageAccount.fund.id !== undefined ? {
                equals: props.trade.brokerageAccount.fund.id
              } : undefined,
            name: props.trade.brokerageAccount.fund.name !== undefined ? {
                equals: props.trade.brokerageAccount.fund.name
              } : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? {
                equals: props.trade.brokerageAccount.fund.slug
              } : undefined,
            organizationId: props.trade.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.trade.brokerageAccount.fund.organizationId
              } : undefined,
          },
          update: {
            id: props.trade.brokerageAccount.fund.id !== undefined ? {
                set: props.trade.brokerageAccount.fund.id
              } : undefined,
            name: props.trade.brokerageAccount.fund.name !== undefined ? {
                set: props.trade.brokerageAccount.fund.name
              } : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? {
                set: props.trade.brokerageAccount.fund.slug
              } : undefined,
            description: props.trade.brokerageAccount.fund.description !== undefined ? {
                set: props.trade.brokerageAccount.fund.description
              } : undefined,
            status: props.trade.brokerageAccount.fund.status !== undefined ? {
                set: props.trade.brokerageAccount.fund.status
              } : undefined,
            tradingOverrides: props.trade.brokerageAccount.fund.tradingOverrides !== undefined ? {
                set: props.trade.brokerageAccount.fund.tradingOverrides
              } : undefined,
            deletedAt: props.trade.brokerageAccount.fund.deletedAt !== undefined ? {
                set: props.trade.brokerageAccount.fund.deletedAt
              } : undefined,
          },
          create: {
            name: props.trade.brokerageAccount.fund.name !== undefined ? props.trade.brokerageAccount.fund.name : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? props.trade.brokerageAccount.fund.slug : undefined,
            description: props.trade.brokerageAccount.fund.description !== undefined ? props.trade.brokerageAccount.fund.description : undefined,
            status: props.trade.brokerageAccount.fund.status !== undefined ? props.trade.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.trade.brokerageAccount.fund.tradingOverrides !== undefined ? props.trade.brokerageAccount.fund.tradingOverrides : undefined,
            deletedAt: props.trade.brokerageAccount.fund.deletedAt !== undefined ? props.trade.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.trade.brokerageAccount.alerts ? 
      Array.isArray(props.trade.brokerageAccount.alerts) && props.trade.brokerageAccount.alerts.length > 0 && props.trade.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.trade.brokerageAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.trade.brokerageAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            title: item.title !== undefined ? {
                equals: item.title
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            title: item.title !== undefined ? {
                set: item.title
              } : undefined,
            message: item.message !== undefined ? {
                set: item.message
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            severity: item.severity !== undefined ? {
                set: item.severity
              } : undefined,
            category: item.category !== undefined ? {
                set: item.category
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead
              } : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? {
                set: item.acknowledgedAt
              } : undefined,
            resolvedAt: item.resolvedAt !== undefined ? {
                set: item.resolvedAt
              } : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? {
                set: item.suppressedUntil
              } : undefined,
            retryCount: item.retryCount !== undefined ? {
                set: item.retryCount
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsPositions: props.trade.brokerageAccount.optionsPositions ? 
      Array.isArray(props.trade.brokerageAccount.optionsPositions) && props.trade.brokerageAccount.optionsPositions.length > 0 && props.trade.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            openingSide: item.openingSide !== undefined ? {
                set: item.openingSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            entryCost: item.entryCost !== undefined ? {
                set: item.entryCost
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice
              } : undefined,
            currentValue: item.currentValue !== undefined ? {
                set: item.currentValue
              } : undefined,
            unrealizedPnL: item.unrealizedPnL !== undefined ? {
                set: item.unrealizedPnL
              } : undefined,
            unrealizedPnLPercent: item.unrealizedPnLPercent !== undefined ? {
                set: item.unrealizedPnLPercent
              } : undefined,
            realizedPnL: item.realizedPnL !== undefined ? {
                set: item.realizedPnL
              } : undefined,
            realizedPnLPercent: item.realizedPnLPercent !== undefined ? {
                set: item.realizedPnLPercent
              } : undefined,
            totalFees: item.totalFees !== undefined ? {
                set: item.totalFees
              } : undefined,
            currentDelta: item.currentDelta !== undefined ? {
                set: item.currentDelta
              } : undefined,
            currentGamma: item.currentGamma !== undefined ? {
                set: item.currentGamma
              } : undefined,
            currentTheta: item.currentTheta !== undefined ? {
                set: item.currentTheta
              } : undefined,
            currentVega: item.currentVega !== undefined ? {
                set: item.currentVega
              } : undefined,
            currentRho: item.currentRho !== undefined ? {
                set: item.currentRho
              } : undefined,
            currentImpliedVolatility: item.currentImpliedVolatility !== undefined ? {
                set: item.currentImpliedVolatility
              } : undefined,
            daysHeld: item.daysHeld !== undefined ? {
                set: item.daysHeld
              } : undefined,
            exitReason: item.exitReason !== undefined ? {
                set: item.exitReason
              } : undefined,
            strategyType: item.strategyType !== undefined ? {
                set: item.strategyType
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                set: item.tradeId
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.trade.brokerageAccount.optionsTradeExecutions ? 
      Array.isArray(props.trade.brokerageAccount.optionsTradeExecutions) && props.trade.brokerageAccount.optionsTradeExecutions.length > 0 && props.trade.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                set: item.brokerOrderId
              } : undefined,
            executionSide: item.executionSide !== undefined ? {
                set: item.executionSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            executionPrice: item.executionPrice !== undefined ? {
                set: item.executionPrice
              } : undefined,
            executionValue: item.executionValue !== undefined ? {
                set: item.executionValue
              } : undefined,
            fees: item.fees !== undefined ? {
                set: item.fees
              } : undefined,
            executionTime: item.executionTime !== undefined ? {
                set: item.executionTime
              } : undefined,
            underlyingPriceAtExecution: item.underlyingPriceAtExecution !== undefined ? {
                set: item.underlyingPriceAtExecution
              } : undefined,
            deltaAtExecution: item.deltaAtExecution !== undefined ? {
                set: item.deltaAtExecution
              } : undefined,
            gammaAtExecution: item.gammaAtExecution !== undefined ? {
                set: item.gammaAtExecution
              } : undefined,
            thetaAtExecution: item.thetaAtExecution !== undefined ? {
                set: item.thetaAtExecution
              } : undefined,
            vegaAtExecution: item.vegaAtExecution !== undefined ? {
                set: item.vegaAtExecution
              } : undefined,
            rhoAtExecution: item.rhoAtExecution !== undefined ? {
                set: item.rhoAtExecution
              } : undefined,
            impliedVolatilityAtExecution: item.impliedVolatilityAtExecution !== undefined ? {
                set: item.impliedVolatilityAtExecution
              } : undefined,
            orderType: item.orderType !== undefined ? {
                set: item.orderType
              } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice
              } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice
              } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce
              } : undefined,
            venue: item.venue !== undefined ? {
                set: item.venue
              } : undefined,
            slippage: item.slippage !== undefined ? {
                set: item.slippage
              } : undefined,
            notes: item.notes !== undefined ? {
                set: item.notes
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          provider: props.trade.brokerageAccount.provider !== undefined ? props.trade.brokerageAccount.provider : undefined,
          type: props.trade.brokerageAccount.type !== undefined ? props.trade.brokerageAccount.type : undefined,
          apiKey: props.trade.brokerageAccount.apiKey !== undefined ? props.trade.brokerageAccount.apiKey : undefined,
          apiSecret: props.trade.brokerageAccount.apiSecret !== undefined ? props.trade.brokerageAccount.apiSecret : undefined,
          configuration: props.trade.brokerageAccount.configuration !== undefined ? props.trade.brokerageAccount.configuration : undefined,
          marketOpen: props.trade.brokerageAccount.marketOpen !== undefined ? props.trade.brokerageAccount.marketOpen : undefined,
          realTime: props.trade.brokerageAccount.realTime !== undefined ? props.trade.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.trade.brokerageAccount.cryptoTradingEnabled !== undefined ? props.trade.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.trade.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.trade.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.trade.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.trade.brokerageAccount.tradeAllocationPct !== undefined ? props.trade.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.trade.brokerageAccount.autoAllocation !== undefined ? props.trade.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.trade.brokerageAccount.minPercentageChange !== undefined ? props.trade.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.trade.brokerageAccount.volumeThreshold !== undefined ? props.trade.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.trade.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.trade.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.trade.brokerageAccount.portfolioTrailPercent !== undefined ? props.trade.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.trade.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.trade.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.trade.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.trade.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.trade.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.trade.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.trade.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.trade.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.trade.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.trade.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.trade.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.trade.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.trade.brokerageAccount.deletedAt !== undefined ? props.trade.brokerageAccount.deletedAt : undefined,
      allocation: props.trade.brokerageAccount.allocation ? 
        typeof props.trade.brokerageAccount.allocation === 'object' && Object.keys(props.trade.brokerageAccount.allocation).length === 1 && Object.keys(props.trade.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.allocation.id !== undefined ? props.trade.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.trade.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.trade.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.trade.brokerageAccount.allocation.equities !== undefined ? props.trade.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.trade.brokerageAccount.allocation.optionsContracts !== undefined ? props.trade.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.trade.brokerageAccount.allocation.futures !== undefined ? props.trade.brokerageAccount.allocation.futures : undefined,
            etfs: props.trade.brokerageAccount.allocation.etfs !== undefined ? props.trade.brokerageAccount.allocation.etfs : undefined,
            forex: props.trade.brokerageAccount.allocation.forex !== undefined ? props.trade.brokerageAccount.allocation.forex : undefined,
            crypto: props.trade.brokerageAccount.allocation.crypto !== undefined ? props.trade.brokerageAccount.allocation.crypto : undefined,
            stocks: props.trade.brokerageAccount.allocation.stocks !== undefined ? props.trade.brokerageAccount.allocation.stocks : undefined,
            options: props.trade.brokerageAccount.allocation.options !== undefined ? props.trade.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.trade.brokerageAccount.fund ? 
        typeof props.trade.brokerageAccount.fund === 'object' && Object.keys(props.trade.brokerageAccount.fund).length === 1 && Object.keys(props.trade.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.fund.id !== undefined ? props.trade.brokerageAccount.fund.id : undefined,
            name: props.trade.brokerageAccount.fund.name !== undefined ? {
                equals: props.trade.brokerageAccount.fund.name 
               } : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? {
                equals: props.trade.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.trade.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.trade.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.trade.brokerageAccount.fund.name !== undefined ? props.trade.brokerageAccount.fund.name : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? props.trade.brokerageAccount.fund.slug : undefined,
            description: props.trade.brokerageAccount.fund.description !== undefined ? props.trade.brokerageAccount.fund.description : undefined,
            status: props.trade.brokerageAccount.fund.status !== undefined ? props.trade.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.trade.brokerageAccount.fund.tradingOverrides !== undefined ? props.trade.brokerageAccount.fund.tradingOverrides : undefined,
            deletedAt: props.trade.brokerageAccount.fund.deletedAt !== undefined ? props.trade.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.trade.brokerageAccount.alerts ? 
        Array.isArray(props.trade.brokerageAccount.alerts) && props.trade.brokerageAccount.alerts.length > 0 &&  props.trade.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsPositions: props.trade.brokerageAccount.optionsPositions ? 
        Array.isArray(props.trade.brokerageAccount.optionsPositions) && props.trade.brokerageAccount.optionsPositions.length > 0 &&  props.trade.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.trade.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.trade.brokerageAccount.optionsTradeExecutions) && props.trade.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.trade.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        deletedAt: props.trade.deletedAt !== undefined ? props.trade.deletedAt : undefined,
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
        sessionHorizonMinutes: props.trade.sessionHorizonMinutes !== undefined ? props.trade.sessionHorizonMinutes : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? props.trade.thresholdsJson : undefined,
    brokerageAccount: props.trade.brokerageAccount ? 
      typeof props.trade.brokerageAccount === 'object' && Object.keys(props.trade.brokerageAccount).length === 1 && Object.keys(props.trade.brokerageAccount)[0] === 'id'
    ? { connect: {
          id: props.trade.brokerageAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.trade.brokerageAccount.id !== undefined ? props.trade.brokerageAccount.id : undefined,
          fundId: props.trade.brokerageAccount.fundId !== undefined ? {
              equals: props.trade.brokerageAccount.fundId 
             } : undefined,
        },
        create: {
          provider: props.trade.brokerageAccount.provider !== undefined ? props.trade.brokerageAccount.provider : undefined,
          type: props.trade.brokerageAccount.type !== undefined ? props.trade.brokerageAccount.type : undefined,
          apiKey: props.trade.brokerageAccount.apiKey !== undefined ? props.trade.brokerageAccount.apiKey : undefined,
          apiSecret: props.trade.brokerageAccount.apiSecret !== undefined ? props.trade.brokerageAccount.apiSecret : undefined,
          configuration: props.trade.brokerageAccount.configuration !== undefined ? props.trade.brokerageAccount.configuration : undefined,
          marketOpen: props.trade.brokerageAccount.marketOpen !== undefined ? props.trade.brokerageAccount.marketOpen : undefined,
          realTime: props.trade.brokerageAccount.realTime !== undefined ? props.trade.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.trade.brokerageAccount.cryptoTradingEnabled !== undefined ? props.trade.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.trade.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.trade.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.trade.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.trade.brokerageAccount.tradeAllocationPct !== undefined ? props.trade.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.trade.brokerageAccount.autoAllocation !== undefined ? props.trade.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.trade.brokerageAccount.minPercentageChange !== undefined ? props.trade.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.trade.brokerageAccount.volumeThreshold !== undefined ? props.trade.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.trade.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.trade.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.trade.brokerageAccount.portfolioTrailPercent !== undefined ? props.trade.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.trade.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.trade.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.trade.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.trade.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.trade.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.trade.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.trade.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.trade.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.trade.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.trade.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.trade.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.trade.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.trade.brokerageAccount.deletedAt !== undefined ? props.trade.brokerageAccount.deletedAt : undefined,
      allocation: props.trade.brokerageAccount.allocation ? 
        typeof props.trade.brokerageAccount.allocation === 'object' && Object.keys(props.trade.brokerageAccount.allocation).length === 1 && Object.keys(props.trade.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.allocation.id !== undefined ? props.trade.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.trade.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.trade.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.trade.brokerageAccount.allocation.equities !== undefined ? props.trade.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.trade.brokerageAccount.allocation.optionsContracts !== undefined ? props.trade.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.trade.brokerageAccount.allocation.futures !== undefined ? props.trade.brokerageAccount.allocation.futures : undefined,
            etfs: props.trade.brokerageAccount.allocation.etfs !== undefined ? props.trade.brokerageAccount.allocation.etfs : undefined,
            forex: props.trade.brokerageAccount.allocation.forex !== undefined ? props.trade.brokerageAccount.allocation.forex : undefined,
            crypto: props.trade.brokerageAccount.allocation.crypto !== undefined ? props.trade.brokerageAccount.allocation.crypto : undefined,
            stocks: props.trade.brokerageAccount.allocation.stocks !== undefined ? props.trade.brokerageAccount.allocation.stocks : undefined,
            options: props.trade.brokerageAccount.allocation.options !== undefined ? props.trade.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.trade.brokerageAccount.fund ? 
        typeof props.trade.brokerageAccount.fund === 'object' && Object.keys(props.trade.brokerageAccount.fund).length === 1 && Object.keys(props.trade.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.fund.id !== undefined ? props.trade.brokerageAccount.fund.id : undefined,
            name: props.trade.brokerageAccount.fund.name !== undefined ? {
                equals: props.trade.brokerageAccount.fund.name 
               } : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? {
                equals: props.trade.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.trade.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.trade.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.trade.brokerageAccount.fund.name !== undefined ? props.trade.brokerageAccount.fund.name : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? props.trade.brokerageAccount.fund.slug : undefined,
            description: props.trade.brokerageAccount.fund.description !== undefined ? props.trade.brokerageAccount.fund.description : undefined,
            status: props.trade.brokerageAccount.fund.status !== undefined ? props.trade.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.trade.brokerageAccount.fund.tradingOverrides !== undefined ? props.trade.brokerageAccount.fund.tradingOverrides : undefined,
            deletedAt: props.trade.brokerageAccount.fund.deletedAt !== undefined ? props.trade.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.trade.brokerageAccount.alerts ? 
        Array.isArray(props.trade.brokerageAccount.alerts) && props.trade.brokerageAccount.alerts.length > 0 &&  props.trade.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsPositions: props.trade.brokerageAccount.optionsPositions ? 
        Array.isArray(props.trade.brokerageAccount.optionsPositions) && props.trade.brokerageAccount.optionsPositions.length > 0 &&  props.trade.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.trade.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.trade.brokerageAccount.optionsTradeExecutions) && props.trade.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.trade.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
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
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
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
        brokerageAccountId: props.trade.brokerageAccountId !== undefined ? {
            equals: props.trade.brokerageAccountId 
           } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol 
           } : undefined,
      },
      create: {
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        deletedAt: props.trade.deletedAt !== undefined ? props.trade.deletedAt : undefined,
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
        sessionHorizonMinutes: props.trade.sessionHorizonMinutes !== undefined ? props.trade.sessionHorizonMinutes : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? props.trade.thresholdsJson : undefined,
    brokerageAccount: props.trade.brokerageAccount ? 
      typeof props.trade.brokerageAccount === 'object' && Object.keys(props.trade.brokerageAccount).length === 1 && Object.keys(props.trade.brokerageAccount)[0] === 'id'
    ? { connect: {
          id: props.trade.brokerageAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.trade.brokerageAccount.id !== undefined ? props.trade.brokerageAccount.id : undefined,
          fundId: props.trade.brokerageAccount.fundId !== undefined ? {
              equals: props.trade.brokerageAccount.fundId 
             } : undefined,
        },
        create: {
          provider: props.trade.brokerageAccount.provider !== undefined ? props.trade.brokerageAccount.provider : undefined,
          type: props.trade.brokerageAccount.type !== undefined ? props.trade.brokerageAccount.type : undefined,
          apiKey: props.trade.brokerageAccount.apiKey !== undefined ? props.trade.brokerageAccount.apiKey : undefined,
          apiSecret: props.trade.brokerageAccount.apiSecret !== undefined ? props.trade.brokerageAccount.apiSecret : undefined,
          configuration: props.trade.brokerageAccount.configuration !== undefined ? props.trade.brokerageAccount.configuration : undefined,
          marketOpen: props.trade.brokerageAccount.marketOpen !== undefined ? props.trade.brokerageAccount.marketOpen : undefined,
          realTime: props.trade.brokerageAccount.realTime !== undefined ? props.trade.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.trade.brokerageAccount.cryptoTradingEnabled !== undefined ? props.trade.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.trade.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.trade.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.trade.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.trade.brokerageAccount.tradeAllocationPct !== undefined ? props.trade.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.trade.brokerageAccount.autoAllocation !== undefined ? props.trade.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.trade.brokerageAccount.minPercentageChange !== undefined ? props.trade.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.trade.brokerageAccount.volumeThreshold !== undefined ? props.trade.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.trade.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.trade.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.trade.brokerageAccount.portfolioTrailPercent !== undefined ? props.trade.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.trade.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.trade.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.trade.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.trade.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.trade.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.trade.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.trade.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.trade.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.trade.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.trade.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.trade.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.trade.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.trade.brokerageAccount.deletedAt !== undefined ? props.trade.brokerageAccount.deletedAt : undefined,
      allocation: props.trade.brokerageAccount.allocation ? 
        typeof props.trade.brokerageAccount.allocation === 'object' && Object.keys(props.trade.brokerageAccount.allocation).length === 1 && Object.keys(props.trade.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.allocation.id !== undefined ? props.trade.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.trade.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.trade.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.trade.brokerageAccount.allocation.equities !== undefined ? props.trade.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.trade.brokerageAccount.allocation.optionsContracts !== undefined ? props.trade.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.trade.brokerageAccount.allocation.futures !== undefined ? props.trade.brokerageAccount.allocation.futures : undefined,
            etfs: props.trade.brokerageAccount.allocation.etfs !== undefined ? props.trade.brokerageAccount.allocation.etfs : undefined,
            forex: props.trade.brokerageAccount.allocation.forex !== undefined ? props.trade.brokerageAccount.allocation.forex : undefined,
            crypto: props.trade.brokerageAccount.allocation.crypto !== undefined ? props.trade.brokerageAccount.allocation.crypto : undefined,
            stocks: props.trade.brokerageAccount.allocation.stocks !== undefined ? props.trade.brokerageAccount.allocation.stocks : undefined,
            options: props.trade.brokerageAccount.allocation.options !== undefined ? props.trade.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.trade.brokerageAccount.fund ? 
        typeof props.trade.brokerageAccount.fund === 'object' && Object.keys(props.trade.brokerageAccount.fund).length === 1 && Object.keys(props.trade.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.fund.id !== undefined ? props.trade.brokerageAccount.fund.id : undefined,
            name: props.trade.brokerageAccount.fund.name !== undefined ? {
                equals: props.trade.brokerageAccount.fund.name 
               } : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? {
                equals: props.trade.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.trade.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.trade.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.trade.brokerageAccount.fund.name !== undefined ? props.trade.brokerageAccount.fund.name : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? props.trade.brokerageAccount.fund.slug : undefined,
            description: props.trade.brokerageAccount.fund.description !== undefined ? props.trade.brokerageAccount.fund.description : undefined,
            status: props.trade.brokerageAccount.fund.status !== undefined ? props.trade.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.trade.brokerageAccount.fund.tradingOverrides !== undefined ? props.trade.brokerageAccount.fund.tradingOverrides : undefined,
            deletedAt: props.trade.brokerageAccount.fund.deletedAt !== undefined ? props.trade.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.trade.brokerageAccount.alerts ? 
        Array.isArray(props.trade.brokerageAccount.alerts) && props.trade.brokerageAccount.alerts.length > 0 &&  props.trade.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsPositions: props.trade.brokerageAccount.optionsPositions ? 
        Array.isArray(props.trade.brokerageAccount.optionsPositions) && props.trade.brokerageAccount.optionsPositions.length > 0 &&  props.trade.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.trade.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.trade.brokerageAccount.optionsTradeExecutions) && props.trade.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.trade.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
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
  deletedAt: props.deletedAt !== undefined ? {
            set: props.deletedAt 
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
        brokerageAccountId: props.trade.brokerageAccountId !== undefined ? {
            equals: props.trade.brokerageAccountId
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol
          } : undefined,
      },
      update: {
        id: props.trade.id !== undefined ? {
            set: props.trade.id
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
        deletedAt: props.trade.deletedAt !== undefined ? {
            set: props.trade.deletedAt
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
        sessionHorizonMinutes: props.trade.sessionHorizonMinutes !== undefined ? {
            set: props.trade.sessionHorizonMinutes
          } : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? {
            set: props.trade.thresholdsJson
          } : undefined,
    brokerageAccount: props.trade.brokerageAccount ? 
    typeof props.trade.brokerageAccount === 'object' && Object.keys(props.trade.brokerageAccount).length === 1 && (Object.keys(props.trade.brokerageAccount)[0] === 'id' || Object.keys(props.trade.brokerageAccount)[0] === 'symbol')
? {
    connect: {
      id: props.trade.brokerageAccount.id
    }
} : { upsert: {
        where: {
          id: props.trade.brokerageAccount.id !== undefined ? {
              equals: props.trade.brokerageAccount.id
            } : undefined,
          fundId: props.trade.brokerageAccount.fundId !== undefined ? {
              equals: props.trade.brokerageAccount.fundId
            } : undefined,
        },
        update: {
          id: props.trade.brokerageAccount.id !== undefined ? {
              set: props.trade.brokerageAccount.id
            } : undefined,
          provider: props.trade.brokerageAccount.provider !== undefined ? {
              set: props.trade.brokerageAccount.provider
            } : undefined,
          type: props.trade.brokerageAccount.type !== undefined ? {
              set: props.trade.brokerageAccount.type
            } : undefined,
          apiKey: props.trade.brokerageAccount.apiKey !== undefined ? {
              set: props.trade.brokerageAccount.apiKey
            } : undefined,
          apiSecret: props.trade.brokerageAccount.apiSecret !== undefined ? {
              set: props.trade.brokerageAccount.apiSecret
            } : undefined,
          configuration: props.trade.brokerageAccount.configuration !== undefined ? {
              set: props.trade.brokerageAccount.configuration
            } : undefined,
          marketOpen: props.trade.brokerageAccount.marketOpen !== undefined ? {
              set: props.trade.brokerageAccount.marketOpen
            } : undefined,
          realTime: props.trade.brokerageAccount.realTime !== undefined ? {
              set: props.trade.brokerageAccount.realTime
            } : undefined,
          cryptoTradingEnabled: props.trade.brokerageAccount.cryptoTradingEnabled !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: props.trade.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: props.trade.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: props.trade.brokerageAccount.tradeAllocationPct !== undefined ? {
              set: props.trade.brokerageAccount.tradeAllocationPct
            } : undefined,
          autoAllocation: props.trade.brokerageAccount.autoAllocation !== undefined ? {
              set: props.trade.brokerageAccount.autoAllocation
            } : undefined,
          minPercentageChange: props.trade.brokerageAccount.minPercentageChange !== undefined ? {
              set: props.trade.brokerageAccount.minPercentageChange
            } : undefined,
          volumeThreshold: props.trade.brokerageAccount.volumeThreshold !== undefined ? {
              set: props.trade.brokerageAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: props.trade.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
              set: props.trade.brokerageAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: props.trade.brokerageAccount.portfolioTrailPercent !== undefined ? {
              set: props.trade.brokerageAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: props.trade.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: props.trade.brokerageAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: props.trade.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: props.trade.brokerageAccount.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: props.trade.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
              set: props.trade.brokerageAccount.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: props.trade.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
              set: props.trade.brokerageAccount.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: props.trade.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
              set: props.trade.brokerageAccount.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: props.trade.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
              set: props.trade.brokerageAccount.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: props.trade.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
              set: props.trade.brokerageAccount.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: props.trade.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
              set: props.trade.brokerageAccount.minimumPriceChangePercent100
            } : undefined,
          deletedAt: props.trade.brokerageAccount.deletedAt !== undefined ? {
              set: props.trade.brokerageAccount.deletedAt
            } : undefined,
      allocation: props.trade.brokerageAccount.allocation ? 
      typeof props.trade.brokerageAccount.allocation === 'object' && Object.keys(props.trade.brokerageAccount.allocation).length === 1 && (Object.keys(props.trade.brokerageAccount.allocation)[0] === 'id' || Object.keys(props.trade.brokerageAccount.allocation)[0] === 'symbol')
? {
      connect: {
        id: props.trade.brokerageAccount.allocation.id
      }
} : { upsert: {
          where: {
            id: props.trade.brokerageAccount.allocation.id !== undefined ? {
                equals: props.trade.brokerageAccount.allocation.id
              } : undefined,
            brokerageAccountId: props.trade.brokerageAccount.allocation.brokerageAccountId !== undefined ? {
                equals: props.trade.brokerageAccount.allocation.brokerageAccountId
              } : undefined,
          },
          update: {
            id: props.trade.brokerageAccount.allocation.id !== undefined ? {
                set: props.trade.brokerageAccount.allocation.id
              } : undefined,
            equities: props.trade.brokerageAccount.allocation.equities !== undefined ? {
                set: props.trade.brokerageAccount.allocation.equities
              } : undefined,
            optionsContracts: props.trade.brokerageAccount.allocation.optionsContracts !== undefined ? {
                set: props.trade.brokerageAccount.allocation.optionsContracts
              } : undefined,
            futures: props.trade.brokerageAccount.allocation.futures !== undefined ? {
                set: props.trade.brokerageAccount.allocation.futures
              } : undefined,
            etfs: props.trade.brokerageAccount.allocation.etfs !== undefined ? {
                set: props.trade.brokerageAccount.allocation.etfs
              } : undefined,
            forex: props.trade.brokerageAccount.allocation.forex !== undefined ? {
                set: props.trade.brokerageAccount.allocation.forex
              } : undefined,
            crypto: props.trade.brokerageAccount.allocation.crypto !== undefined ? {
                set: props.trade.brokerageAccount.allocation.crypto
              } : undefined,
            stocks: props.trade.brokerageAccount.allocation.stocks !== undefined ? {
                set: props.trade.brokerageAccount.allocation.stocks
              } : undefined,
            options: props.trade.brokerageAccount.allocation.options !== undefined ? {
                set: props.trade.brokerageAccount.allocation.options
              } : undefined,
          },
          create: {
            equities: props.trade.brokerageAccount.allocation.equities !== undefined ? props.trade.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.trade.brokerageAccount.allocation.optionsContracts !== undefined ? props.trade.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.trade.brokerageAccount.allocation.futures !== undefined ? props.trade.brokerageAccount.allocation.futures : undefined,
            etfs: props.trade.brokerageAccount.allocation.etfs !== undefined ? props.trade.brokerageAccount.allocation.etfs : undefined,
            forex: props.trade.brokerageAccount.allocation.forex !== undefined ? props.trade.brokerageAccount.allocation.forex : undefined,
            crypto: props.trade.brokerageAccount.allocation.crypto !== undefined ? props.trade.brokerageAccount.allocation.crypto : undefined,
            stocks: props.trade.brokerageAccount.allocation.stocks !== undefined ? props.trade.brokerageAccount.allocation.stocks : undefined,
            options: props.trade.brokerageAccount.allocation.options !== undefined ? props.trade.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.trade.brokerageAccount.fund ? 
      typeof props.trade.brokerageAccount.fund === 'object' && Object.keys(props.trade.brokerageAccount.fund).length === 1 && (Object.keys(props.trade.brokerageAccount.fund)[0] === 'id' || Object.keys(props.trade.brokerageAccount.fund)[0] === 'symbol')
? {
      connect: {
        id: props.trade.brokerageAccount.fund.id
      }
} : { upsert: {
          where: {
            id: props.trade.brokerageAccount.fund.id !== undefined ? {
                equals: props.trade.brokerageAccount.fund.id
              } : undefined,
            name: props.trade.brokerageAccount.fund.name !== undefined ? {
                equals: props.trade.brokerageAccount.fund.name
              } : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? {
                equals: props.trade.brokerageAccount.fund.slug
              } : undefined,
            organizationId: props.trade.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.trade.brokerageAccount.fund.organizationId
              } : undefined,
          },
          update: {
            id: props.trade.brokerageAccount.fund.id !== undefined ? {
                set: props.trade.brokerageAccount.fund.id
              } : undefined,
            name: props.trade.brokerageAccount.fund.name !== undefined ? {
                set: props.trade.brokerageAccount.fund.name
              } : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? {
                set: props.trade.brokerageAccount.fund.slug
              } : undefined,
            description: props.trade.brokerageAccount.fund.description !== undefined ? {
                set: props.trade.brokerageAccount.fund.description
              } : undefined,
            status: props.trade.brokerageAccount.fund.status !== undefined ? {
                set: props.trade.brokerageAccount.fund.status
              } : undefined,
            tradingOverrides: props.trade.brokerageAccount.fund.tradingOverrides !== undefined ? {
                set: props.trade.brokerageAccount.fund.tradingOverrides
              } : undefined,
            deletedAt: props.trade.brokerageAccount.fund.deletedAt !== undefined ? {
                set: props.trade.brokerageAccount.fund.deletedAt
              } : undefined,
          },
          create: {
            name: props.trade.brokerageAccount.fund.name !== undefined ? props.trade.brokerageAccount.fund.name : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? props.trade.brokerageAccount.fund.slug : undefined,
            description: props.trade.brokerageAccount.fund.description !== undefined ? props.trade.brokerageAccount.fund.description : undefined,
            status: props.trade.brokerageAccount.fund.status !== undefined ? props.trade.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.trade.brokerageAccount.fund.tradingOverrides !== undefined ? props.trade.brokerageAccount.fund.tradingOverrides : undefined,
            deletedAt: props.trade.brokerageAccount.fund.deletedAt !== undefined ? props.trade.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.trade.brokerageAccount.alerts ? 
      Array.isArray(props.trade.brokerageAccount.alerts) && props.trade.brokerageAccount.alerts.length > 0 && props.trade.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.trade.brokerageAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.trade.brokerageAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            title: item.title !== undefined ? {
                equals: item.title
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            title: item.title !== undefined ? {
                set: item.title
              } : undefined,
            message: item.message !== undefined ? {
                set: item.message
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            severity: item.severity !== undefined ? {
                set: item.severity
              } : undefined,
            category: item.category !== undefined ? {
                set: item.category
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead
              } : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? {
                set: item.acknowledgedAt
              } : undefined,
            resolvedAt: item.resolvedAt !== undefined ? {
                set: item.resolvedAt
              } : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? {
                set: item.suppressedUntil
              } : undefined,
            retryCount: item.retryCount !== undefined ? {
                set: item.retryCount
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsPositions: props.trade.brokerageAccount.optionsPositions ? 
      Array.isArray(props.trade.brokerageAccount.optionsPositions) && props.trade.brokerageAccount.optionsPositions.length > 0 && props.trade.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            openingSide: item.openingSide !== undefined ? {
                set: item.openingSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            entryCost: item.entryCost !== undefined ? {
                set: item.entryCost
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice
              } : undefined,
            currentValue: item.currentValue !== undefined ? {
                set: item.currentValue
              } : undefined,
            unrealizedPnL: item.unrealizedPnL !== undefined ? {
                set: item.unrealizedPnL
              } : undefined,
            unrealizedPnLPercent: item.unrealizedPnLPercent !== undefined ? {
                set: item.unrealizedPnLPercent
              } : undefined,
            realizedPnL: item.realizedPnL !== undefined ? {
                set: item.realizedPnL
              } : undefined,
            realizedPnLPercent: item.realizedPnLPercent !== undefined ? {
                set: item.realizedPnLPercent
              } : undefined,
            totalFees: item.totalFees !== undefined ? {
                set: item.totalFees
              } : undefined,
            currentDelta: item.currentDelta !== undefined ? {
                set: item.currentDelta
              } : undefined,
            currentGamma: item.currentGamma !== undefined ? {
                set: item.currentGamma
              } : undefined,
            currentTheta: item.currentTheta !== undefined ? {
                set: item.currentTheta
              } : undefined,
            currentVega: item.currentVega !== undefined ? {
                set: item.currentVega
              } : undefined,
            currentRho: item.currentRho !== undefined ? {
                set: item.currentRho
              } : undefined,
            currentImpliedVolatility: item.currentImpliedVolatility !== undefined ? {
                set: item.currentImpliedVolatility
              } : undefined,
            daysHeld: item.daysHeld !== undefined ? {
                set: item.daysHeld
              } : undefined,
            exitReason: item.exitReason !== undefined ? {
                set: item.exitReason
              } : undefined,
            strategyType: item.strategyType !== undefined ? {
                set: item.strategyType
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                set: item.tradeId
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.trade.brokerageAccount.optionsTradeExecutions ? 
      Array.isArray(props.trade.brokerageAccount.optionsTradeExecutions) && props.trade.brokerageAccount.optionsTradeExecutions.length > 0 && props.trade.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                set: item.brokerOrderId
              } : undefined,
            executionSide: item.executionSide !== undefined ? {
                set: item.executionSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            executionPrice: item.executionPrice !== undefined ? {
                set: item.executionPrice
              } : undefined,
            executionValue: item.executionValue !== undefined ? {
                set: item.executionValue
              } : undefined,
            fees: item.fees !== undefined ? {
                set: item.fees
              } : undefined,
            executionTime: item.executionTime !== undefined ? {
                set: item.executionTime
              } : undefined,
            underlyingPriceAtExecution: item.underlyingPriceAtExecution !== undefined ? {
                set: item.underlyingPriceAtExecution
              } : undefined,
            deltaAtExecution: item.deltaAtExecution !== undefined ? {
                set: item.deltaAtExecution
              } : undefined,
            gammaAtExecution: item.gammaAtExecution !== undefined ? {
                set: item.gammaAtExecution
              } : undefined,
            thetaAtExecution: item.thetaAtExecution !== undefined ? {
                set: item.thetaAtExecution
              } : undefined,
            vegaAtExecution: item.vegaAtExecution !== undefined ? {
                set: item.vegaAtExecution
              } : undefined,
            rhoAtExecution: item.rhoAtExecution !== undefined ? {
                set: item.rhoAtExecution
              } : undefined,
            impliedVolatilityAtExecution: item.impliedVolatilityAtExecution !== undefined ? {
                set: item.impliedVolatilityAtExecution
              } : undefined,
            orderType: item.orderType !== undefined ? {
                set: item.orderType
              } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice
              } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice
              } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce
              } : undefined,
            venue: item.venue !== undefined ? {
                set: item.venue
              } : undefined,
            slippage: item.slippage !== undefined ? {
                set: item.slippage
              } : undefined,
            notes: item.notes !== undefined ? {
                set: item.notes
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          provider: props.trade.brokerageAccount.provider !== undefined ? props.trade.brokerageAccount.provider : undefined,
          type: props.trade.brokerageAccount.type !== undefined ? props.trade.brokerageAccount.type : undefined,
          apiKey: props.trade.brokerageAccount.apiKey !== undefined ? props.trade.brokerageAccount.apiKey : undefined,
          apiSecret: props.trade.brokerageAccount.apiSecret !== undefined ? props.trade.brokerageAccount.apiSecret : undefined,
          configuration: props.trade.brokerageAccount.configuration !== undefined ? props.trade.brokerageAccount.configuration : undefined,
          marketOpen: props.trade.brokerageAccount.marketOpen !== undefined ? props.trade.brokerageAccount.marketOpen : undefined,
          realTime: props.trade.brokerageAccount.realTime !== undefined ? props.trade.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.trade.brokerageAccount.cryptoTradingEnabled !== undefined ? props.trade.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.trade.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.trade.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.trade.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.trade.brokerageAccount.tradeAllocationPct !== undefined ? props.trade.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.trade.brokerageAccount.autoAllocation !== undefined ? props.trade.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.trade.brokerageAccount.minPercentageChange !== undefined ? props.trade.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.trade.brokerageAccount.volumeThreshold !== undefined ? props.trade.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.trade.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.trade.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.trade.brokerageAccount.portfolioTrailPercent !== undefined ? props.trade.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.trade.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.trade.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.trade.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.trade.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.trade.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.trade.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.trade.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.trade.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.trade.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.trade.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.trade.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.trade.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.trade.brokerageAccount.deletedAt !== undefined ? props.trade.brokerageAccount.deletedAt : undefined,
      allocation: props.trade.brokerageAccount.allocation ? 
        typeof props.trade.brokerageAccount.allocation === 'object' && Object.keys(props.trade.brokerageAccount.allocation).length === 1 && Object.keys(props.trade.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.allocation.id !== undefined ? props.trade.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.trade.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.trade.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.trade.brokerageAccount.allocation.equities !== undefined ? props.trade.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.trade.brokerageAccount.allocation.optionsContracts !== undefined ? props.trade.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.trade.brokerageAccount.allocation.futures !== undefined ? props.trade.brokerageAccount.allocation.futures : undefined,
            etfs: props.trade.brokerageAccount.allocation.etfs !== undefined ? props.trade.brokerageAccount.allocation.etfs : undefined,
            forex: props.trade.brokerageAccount.allocation.forex !== undefined ? props.trade.brokerageAccount.allocation.forex : undefined,
            crypto: props.trade.brokerageAccount.allocation.crypto !== undefined ? props.trade.brokerageAccount.allocation.crypto : undefined,
            stocks: props.trade.brokerageAccount.allocation.stocks !== undefined ? props.trade.brokerageAccount.allocation.stocks : undefined,
            options: props.trade.brokerageAccount.allocation.options !== undefined ? props.trade.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.trade.brokerageAccount.fund ? 
        typeof props.trade.brokerageAccount.fund === 'object' && Object.keys(props.trade.brokerageAccount.fund).length === 1 && Object.keys(props.trade.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.fund.id !== undefined ? props.trade.brokerageAccount.fund.id : undefined,
            name: props.trade.brokerageAccount.fund.name !== undefined ? {
                equals: props.trade.brokerageAccount.fund.name 
               } : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? {
                equals: props.trade.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.trade.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.trade.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.trade.brokerageAccount.fund.name !== undefined ? props.trade.brokerageAccount.fund.name : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? props.trade.brokerageAccount.fund.slug : undefined,
            description: props.trade.brokerageAccount.fund.description !== undefined ? props.trade.brokerageAccount.fund.description : undefined,
            status: props.trade.brokerageAccount.fund.status !== undefined ? props.trade.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.trade.brokerageAccount.fund.tradingOverrides !== undefined ? props.trade.brokerageAccount.fund.tradingOverrides : undefined,
            deletedAt: props.trade.brokerageAccount.fund.deletedAt !== undefined ? props.trade.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.trade.brokerageAccount.alerts ? 
        Array.isArray(props.trade.brokerageAccount.alerts) && props.trade.brokerageAccount.alerts.length > 0 &&  props.trade.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsPositions: props.trade.brokerageAccount.optionsPositions ? 
        Array.isArray(props.trade.brokerageAccount.optionsPositions) && props.trade.brokerageAccount.optionsPositions.length > 0 &&  props.trade.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.trade.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.trade.brokerageAccount.optionsTradeExecutions) && props.trade.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.trade.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        deletedAt: props.trade.deletedAt !== undefined ? props.trade.deletedAt : undefined,
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
        sessionHorizonMinutes: props.trade.sessionHorizonMinutes !== undefined ? props.trade.sessionHorizonMinutes : undefined,
        thresholdsJson: props.trade.thresholdsJson !== undefined ? props.trade.thresholdsJson : undefined,
    brokerageAccount: props.trade.brokerageAccount ? 
      typeof props.trade.brokerageAccount === 'object' && Object.keys(props.trade.brokerageAccount).length === 1 && Object.keys(props.trade.brokerageAccount)[0] === 'id'
    ? { connect: {
          id: props.trade.brokerageAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.trade.brokerageAccount.id !== undefined ? props.trade.brokerageAccount.id : undefined,
          fundId: props.trade.brokerageAccount.fundId !== undefined ? {
              equals: props.trade.brokerageAccount.fundId 
             } : undefined,
        },
        create: {
          provider: props.trade.brokerageAccount.provider !== undefined ? props.trade.brokerageAccount.provider : undefined,
          type: props.trade.brokerageAccount.type !== undefined ? props.trade.brokerageAccount.type : undefined,
          apiKey: props.trade.brokerageAccount.apiKey !== undefined ? props.trade.brokerageAccount.apiKey : undefined,
          apiSecret: props.trade.brokerageAccount.apiSecret !== undefined ? props.trade.brokerageAccount.apiSecret : undefined,
          configuration: props.trade.brokerageAccount.configuration !== undefined ? props.trade.brokerageAccount.configuration : undefined,
          marketOpen: props.trade.brokerageAccount.marketOpen !== undefined ? props.trade.brokerageAccount.marketOpen : undefined,
          realTime: props.trade.brokerageAccount.realTime !== undefined ? props.trade.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.trade.brokerageAccount.cryptoTradingEnabled !== undefined ? props.trade.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.trade.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.trade.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.trade.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.trade.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.trade.brokerageAccount.tradeAllocationPct !== undefined ? props.trade.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.trade.brokerageAccount.autoAllocation !== undefined ? props.trade.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.trade.brokerageAccount.minPercentageChange !== undefined ? props.trade.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.trade.brokerageAccount.volumeThreshold !== undefined ? props.trade.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.trade.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.trade.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.trade.brokerageAccount.portfolioTrailPercent !== undefined ? props.trade.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.trade.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.trade.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.trade.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.trade.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.trade.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.trade.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.trade.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.trade.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.trade.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.trade.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.trade.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.trade.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.trade.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.trade.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.trade.brokerageAccount.deletedAt !== undefined ? props.trade.brokerageAccount.deletedAt : undefined,
      allocation: props.trade.brokerageAccount.allocation ? 
        typeof props.trade.brokerageAccount.allocation === 'object' && Object.keys(props.trade.brokerageAccount.allocation).length === 1 && Object.keys(props.trade.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.allocation.id !== undefined ? props.trade.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.trade.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.trade.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.trade.brokerageAccount.allocation.equities !== undefined ? props.trade.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.trade.brokerageAccount.allocation.optionsContracts !== undefined ? props.trade.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.trade.brokerageAccount.allocation.futures !== undefined ? props.trade.brokerageAccount.allocation.futures : undefined,
            etfs: props.trade.brokerageAccount.allocation.etfs !== undefined ? props.trade.brokerageAccount.allocation.etfs : undefined,
            forex: props.trade.brokerageAccount.allocation.forex !== undefined ? props.trade.brokerageAccount.allocation.forex : undefined,
            crypto: props.trade.brokerageAccount.allocation.crypto !== undefined ? props.trade.brokerageAccount.allocation.crypto : undefined,
            stocks: props.trade.brokerageAccount.allocation.stocks !== undefined ? props.trade.brokerageAccount.allocation.stocks : undefined,
            options: props.trade.brokerageAccount.allocation.options !== undefined ? props.trade.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.trade.brokerageAccount.fund ? 
        typeof props.trade.brokerageAccount.fund === 'object' && Object.keys(props.trade.brokerageAccount.fund).length === 1 && Object.keys(props.trade.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.trade.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.trade.brokerageAccount.fund.id !== undefined ? props.trade.brokerageAccount.fund.id : undefined,
            name: props.trade.brokerageAccount.fund.name !== undefined ? {
                equals: props.trade.brokerageAccount.fund.name 
               } : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? {
                equals: props.trade.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.trade.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.trade.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.trade.brokerageAccount.fund.name !== undefined ? props.trade.brokerageAccount.fund.name : undefined,
            slug: props.trade.brokerageAccount.fund.slug !== undefined ? props.trade.brokerageAccount.fund.slug : undefined,
            description: props.trade.brokerageAccount.fund.description !== undefined ? props.trade.brokerageAccount.fund.description : undefined,
            status: props.trade.brokerageAccount.fund.status !== undefined ? props.trade.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.trade.brokerageAccount.fund.tradingOverrides !== undefined ? props.trade.brokerageAccount.fund.tradingOverrides : undefined,
            deletedAt: props.trade.brokerageAccount.fund.deletedAt !== undefined ? props.trade.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.trade.brokerageAccount.alerts ? 
        Array.isArray(props.trade.brokerageAccount.alerts) && props.trade.brokerageAccount.alerts.length > 0 &&  props.trade.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsPositions: props.trade.brokerageAccount.optionsPositions ? 
        Array.isArray(props.trade.brokerageAccount.optionsPositions) && props.trade.brokerageAccount.optionsPositions.length > 0 &&  props.trade.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.trade.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.trade.brokerageAccount.optionsTradeExecutions) && props.trade.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.trade.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
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
  deletedAt: prop.deletedAt !== undefined ? {
            set: prop.deletedAt 
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
        brokerageAccountId: prop.trade.brokerageAccountId !== undefined ? {
            equals: prop.trade.brokerageAccountId
          } : undefined,
        symbol: prop.trade.symbol !== undefined ? {
            equals: prop.trade.symbol
          } : undefined,
      },
      update: {
        id: prop.trade.id !== undefined ? {
            set: prop.trade.id
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
        deletedAt: prop.trade.deletedAt !== undefined ? {
            set: prop.trade.deletedAt
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
        sessionHorizonMinutes: prop.trade.sessionHorizonMinutes !== undefined ? {
            set: prop.trade.sessionHorizonMinutes
          } : undefined,
        thresholdsJson: prop.trade.thresholdsJson !== undefined ? {
            set: prop.trade.thresholdsJson
          } : undefined,
    brokerageAccount: prop.trade.brokerageAccount ? 
    typeof prop.trade.brokerageAccount === 'object' && Object.keys(prop.trade.brokerageAccount).length === 1 && (Object.keys(prop.trade.brokerageAccount)[0] === 'id' || Object.keys(prop.trade.brokerageAccount)[0] === 'symbol')
? {
    connect: {
      id: prop.trade.brokerageAccount.id
    }
} : { upsert: {
        where: {
          id: prop.trade.brokerageAccount.id !== undefined ? {
              equals: prop.trade.brokerageAccount.id
            } : undefined,
          fundId: prop.trade.brokerageAccount.fundId !== undefined ? {
              equals: prop.trade.brokerageAccount.fundId
            } : undefined,
        },
        update: {
          id: prop.trade.brokerageAccount.id !== undefined ? {
              set: prop.trade.brokerageAccount.id
            } : undefined,
          provider: prop.trade.brokerageAccount.provider !== undefined ? {
              set: prop.trade.brokerageAccount.provider
            } : undefined,
          type: prop.trade.brokerageAccount.type !== undefined ? {
              set: prop.trade.brokerageAccount.type
            } : undefined,
          apiKey: prop.trade.brokerageAccount.apiKey !== undefined ? {
              set: prop.trade.brokerageAccount.apiKey
            } : undefined,
          apiSecret: prop.trade.brokerageAccount.apiSecret !== undefined ? {
              set: prop.trade.brokerageAccount.apiSecret
            } : undefined,
          configuration: prop.trade.brokerageAccount.configuration !== undefined ? {
              set: prop.trade.brokerageAccount.configuration
            } : undefined,
          marketOpen: prop.trade.brokerageAccount.marketOpen !== undefined ? {
              set: prop.trade.brokerageAccount.marketOpen
            } : undefined,
          realTime: prop.trade.brokerageAccount.realTime !== undefined ? {
              set: prop.trade.brokerageAccount.realTime
            } : undefined,
          cryptoTradingEnabled: prop.trade.brokerageAccount.cryptoTradingEnabled !== undefined ? {
              set: prop.trade.brokerageAccount.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: prop.trade.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: prop.trade.brokerageAccount.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: prop.trade.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
              set: prop.trade.brokerageAccount.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: prop.trade.brokerageAccount.tradeAllocationPct !== undefined ? {
              set: prop.trade.brokerageAccount.tradeAllocationPct
            } : undefined,
          autoAllocation: prop.trade.brokerageAccount.autoAllocation !== undefined ? {
              set: prop.trade.brokerageAccount.autoAllocation
            } : undefined,
          minPercentageChange: prop.trade.brokerageAccount.minPercentageChange !== undefined ? {
              set: prop.trade.brokerageAccount.minPercentageChange
            } : undefined,
          volumeThreshold: prop.trade.brokerageAccount.volumeThreshold !== undefined ? {
              set: prop.trade.brokerageAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: prop.trade.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
              set: prop.trade.brokerageAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: prop.trade.brokerageAccount.portfolioTrailPercent !== undefined ? {
              set: prop.trade.brokerageAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: prop.trade.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: prop.trade.brokerageAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: prop.trade.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: prop.trade.brokerageAccount.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: prop.trade.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
              set: prop.trade.brokerageAccount.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: prop.trade.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
              set: prop.trade.brokerageAccount.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: prop.trade.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
              set: prop.trade.brokerageAccount.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: prop.trade.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
              set: prop.trade.brokerageAccount.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: prop.trade.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
              set: prop.trade.brokerageAccount.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: prop.trade.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
              set: prop.trade.brokerageAccount.minimumPriceChangePercent100
            } : undefined,
          deletedAt: prop.trade.brokerageAccount.deletedAt !== undefined ? {
              set: prop.trade.brokerageAccount.deletedAt
            } : undefined,
      allocation: prop.trade.brokerageAccount.allocation ? 
      typeof prop.trade.brokerageAccount.allocation === 'object' && Object.keys(prop.trade.brokerageAccount.allocation).length === 1 && (Object.keys(prop.trade.brokerageAccount.allocation)[0] === 'id' || Object.keys(prop.trade.brokerageAccount.allocation)[0] === 'symbol')
? {
      connect: {
        id: prop.trade.brokerageAccount.allocation.id
      }
} : { upsert: {
          where: {
            id: prop.trade.brokerageAccount.allocation.id !== undefined ? {
                equals: prop.trade.brokerageAccount.allocation.id
              } : undefined,
            brokerageAccountId: prop.trade.brokerageAccount.allocation.brokerageAccountId !== undefined ? {
                equals: prop.trade.brokerageAccount.allocation.brokerageAccountId
              } : undefined,
          },
          update: {
            id: prop.trade.brokerageAccount.allocation.id !== undefined ? {
                set: prop.trade.brokerageAccount.allocation.id
              } : undefined,
            equities: prop.trade.brokerageAccount.allocation.equities !== undefined ? {
                set: prop.trade.brokerageAccount.allocation.equities
              } : undefined,
            optionsContracts: prop.trade.brokerageAccount.allocation.optionsContracts !== undefined ? {
                set: prop.trade.brokerageAccount.allocation.optionsContracts
              } : undefined,
            futures: prop.trade.brokerageAccount.allocation.futures !== undefined ? {
                set: prop.trade.brokerageAccount.allocation.futures
              } : undefined,
            etfs: prop.trade.brokerageAccount.allocation.etfs !== undefined ? {
                set: prop.trade.brokerageAccount.allocation.etfs
              } : undefined,
            forex: prop.trade.brokerageAccount.allocation.forex !== undefined ? {
                set: prop.trade.brokerageAccount.allocation.forex
              } : undefined,
            crypto: prop.trade.brokerageAccount.allocation.crypto !== undefined ? {
                set: prop.trade.brokerageAccount.allocation.crypto
              } : undefined,
            stocks: prop.trade.brokerageAccount.allocation.stocks !== undefined ? {
                set: prop.trade.brokerageAccount.allocation.stocks
              } : undefined,
            options: prop.trade.brokerageAccount.allocation.options !== undefined ? {
                set: prop.trade.brokerageAccount.allocation.options
              } : undefined,
          },
          create: {
            equities: prop.trade.brokerageAccount.allocation.equities !== undefined ? prop.trade.brokerageAccount.allocation.equities : undefined,
            optionsContracts: prop.trade.brokerageAccount.allocation.optionsContracts !== undefined ? prop.trade.brokerageAccount.allocation.optionsContracts : undefined,
            futures: prop.trade.brokerageAccount.allocation.futures !== undefined ? prop.trade.brokerageAccount.allocation.futures : undefined,
            etfs: prop.trade.brokerageAccount.allocation.etfs !== undefined ? prop.trade.brokerageAccount.allocation.etfs : undefined,
            forex: prop.trade.brokerageAccount.allocation.forex !== undefined ? prop.trade.brokerageAccount.allocation.forex : undefined,
            crypto: prop.trade.brokerageAccount.allocation.crypto !== undefined ? prop.trade.brokerageAccount.allocation.crypto : undefined,
            stocks: prop.trade.brokerageAccount.allocation.stocks !== undefined ? prop.trade.brokerageAccount.allocation.stocks : undefined,
            options: prop.trade.brokerageAccount.allocation.options !== undefined ? prop.trade.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: prop.trade.brokerageAccount.fund ? 
      typeof prop.trade.brokerageAccount.fund === 'object' && Object.keys(prop.trade.brokerageAccount.fund).length === 1 && (Object.keys(prop.trade.brokerageAccount.fund)[0] === 'id' || Object.keys(prop.trade.brokerageAccount.fund)[0] === 'symbol')
? {
      connect: {
        id: prop.trade.brokerageAccount.fund.id
      }
} : { upsert: {
          where: {
            id: prop.trade.brokerageAccount.fund.id !== undefined ? {
                equals: prop.trade.brokerageAccount.fund.id
              } : undefined,
            name: prop.trade.brokerageAccount.fund.name !== undefined ? {
                equals: prop.trade.brokerageAccount.fund.name
              } : undefined,
            slug: prop.trade.brokerageAccount.fund.slug !== undefined ? {
                equals: prop.trade.brokerageAccount.fund.slug
              } : undefined,
            organizationId: prop.trade.brokerageAccount.fund.organizationId !== undefined ? {
                equals: prop.trade.brokerageAccount.fund.organizationId
              } : undefined,
          },
          update: {
            id: prop.trade.brokerageAccount.fund.id !== undefined ? {
                set: prop.trade.brokerageAccount.fund.id
              } : undefined,
            name: prop.trade.brokerageAccount.fund.name !== undefined ? {
                set: prop.trade.brokerageAccount.fund.name
              } : undefined,
            slug: prop.trade.brokerageAccount.fund.slug !== undefined ? {
                set: prop.trade.brokerageAccount.fund.slug
              } : undefined,
            description: prop.trade.brokerageAccount.fund.description !== undefined ? {
                set: prop.trade.brokerageAccount.fund.description
              } : undefined,
            status: prop.trade.brokerageAccount.fund.status !== undefined ? {
                set: prop.trade.brokerageAccount.fund.status
              } : undefined,
            tradingOverrides: prop.trade.brokerageAccount.fund.tradingOverrides !== undefined ? {
                set: prop.trade.brokerageAccount.fund.tradingOverrides
              } : undefined,
            deletedAt: prop.trade.brokerageAccount.fund.deletedAt !== undefined ? {
                set: prop.trade.brokerageAccount.fund.deletedAt
              } : undefined,
          },
          create: {
            name: prop.trade.brokerageAccount.fund.name !== undefined ? prop.trade.brokerageAccount.fund.name : undefined,
            slug: prop.trade.brokerageAccount.fund.slug !== undefined ? prop.trade.brokerageAccount.fund.slug : undefined,
            description: prop.trade.brokerageAccount.fund.description !== undefined ? prop.trade.brokerageAccount.fund.description : undefined,
            status: prop.trade.brokerageAccount.fund.status !== undefined ? prop.trade.brokerageAccount.fund.status : undefined,
            tradingOverrides: prop.trade.brokerageAccount.fund.tradingOverrides !== undefined ? prop.trade.brokerageAccount.fund.tradingOverrides : undefined,
            deletedAt: prop.trade.brokerageAccount.fund.deletedAt !== undefined ? prop.trade.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: prop.trade.brokerageAccount.alerts ? 
      Array.isArray(prop.trade.brokerageAccount.alerts) && prop.trade.brokerageAccount.alerts.length > 0 && prop.trade.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.trade.brokerageAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.trade.brokerageAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            title: item.title !== undefined ? {
                equals: item.title
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            title: item.title !== undefined ? {
                set: item.title
              } : undefined,
            message: item.message !== undefined ? {
                set: item.message
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            severity: item.severity !== undefined ? {
                set: item.severity
              } : undefined,
            category: item.category !== undefined ? {
                set: item.category
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead
              } : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? {
                set: item.acknowledgedAt
              } : undefined,
            resolvedAt: item.resolvedAt !== undefined ? {
                set: item.resolvedAt
              } : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? {
                set: item.suppressedUntil
              } : undefined,
            retryCount: item.retryCount !== undefined ? {
                set: item.retryCount
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsPositions: prop.trade.brokerageAccount.optionsPositions ? 
      Array.isArray(prop.trade.brokerageAccount.optionsPositions) && prop.trade.brokerageAccount.optionsPositions.length > 0 && prop.trade.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.trade.brokerageAccount.optionsPositions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.trade.brokerageAccount.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            openingSide: item.openingSide !== undefined ? {
                set: item.openingSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            entryCost: item.entryCost !== undefined ? {
                set: item.entryCost
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice
              } : undefined,
            currentValue: item.currentValue !== undefined ? {
                set: item.currentValue
              } : undefined,
            unrealizedPnL: item.unrealizedPnL !== undefined ? {
                set: item.unrealizedPnL
              } : undefined,
            unrealizedPnLPercent: item.unrealizedPnLPercent !== undefined ? {
                set: item.unrealizedPnLPercent
              } : undefined,
            realizedPnL: item.realizedPnL !== undefined ? {
                set: item.realizedPnL
              } : undefined,
            realizedPnLPercent: item.realizedPnLPercent !== undefined ? {
                set: item.realizedPnLPercent
              } : undefined,
            totalFees: item.totalFees !== undefined ? {
                set: item.totalFees
              } : undefined,
            currentDelta: item.currentDelta !== undefined ? {
                set: item.currentDelta
              } : undefined,
            currentGamma: item.currentGamma !== undefined ? {
                set: item.currentGamma
              } : undefined,
            currentTheta: item.currentTheta !== undefined ? {
                set: item.currentTheta
              } : undefined,
            currentVega: item.currentVega !== undefined ? {
                set: item.currentVega
              } : undefined,
            currentRho: item.currentRho !== undefined ? {
                set: item.currentRho
              } : undefined,
            currentImpliedVolatility: item.currentImpliedVolatility !== undefined ? {
                set: item.currentImpliedVolatility
              } : undefined,
            daysHeld: item.daysHeld !== undefined ? {
                set: item.daysHeld
              } : undefined,
            exitReason: item.exitReason !== undefined ? {
                set: item.exitReason
              } : undefined,
            strategyType: item.strategyType !== undefined ? {
                set: item.strategyType
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                set: item.tradeId
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: prop.trade.brokerageAccount.optionsTradeExecutions ? 
      Array.isArray(prop.trade.brokerageAccount.optionsTradeExecutions) && prop.trade.brokerageAccount.optionsTradeExecutions.length > 0 && prop.trade.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                set: item.brokerOrderId
              } : undefined,
            executionSide: item.executionSide !== undefined ? {
                set: item.executionSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            executionPrice: item.executionPrice !== undefined ? {
                set: item.executionPrice
              } : undefined,
            executionValue: item.executionValue !== undefined ? {
                set: item.executionValue
              } : undefined,
            fees: item.fees !== undefined ? {
                set: item.fees
              } : undefined,
            executionTime: item.executionTime !== undefined ? {
                set: item.executionTime
              } : undefined,
            underlyingPriceAtExecution: item.underlyingPriceAtExecution !== undefined ? {
                set: item.underlyingPriceAtExecution
              } : undefined,
            deltaAtExecution: item.deltaAtExecution !== undefined ? {
                set: item.deltaAtExecution
              } : undefined,
            gammaAtExecution: item.gammaAtExecution !== undefined ? {
                set: item.gammaAtExecution
              } : undefined,
            thetaAtExecution: item.thetaAtExecution !== undefined ? {
                set: item.thetaAtExecution
              } : undefined,
            vegaAtExecution: item.vegaAtExecution !== undefined ? {
                set: item.vegaAtExecution
              } : undefined,
            rhoAtExecution: item.rhoAtExecution !== undefined ? {
                set: item.rhoAtExecution
              } : undefined,
            impliedVolatilityAtExecution: item.impliedVolatilityAtExecution !== undefined ? {
                set: item.impliedVolatilityAtExecution
              } : undefined,
            orderType: item.orderType !== undefined ? {
                set: item.orderType
              } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice
              } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice
              } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce
              } : undefined,
            venue: item.venue !== undefined ? {
                set: item.venue
              } : undefined,
            slippage: item.slippage !== undefined ? {
                set: item.slippage
              } : undefined,
            notes: item.notes !== undefined ? {
                set: item.notes
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          provider: prop.trade.brokerageAccount.provider !== undefined ? prop.trade.brokerageAccount.provider : undefined,
          type: prop.trade.brokerageAccount.type !== undefined ? prop.trade.brokerageAccount.type : undefined,
          apiKey: prop.trade.brokerageAccount.apiKey !== undefined ? prop.trade.brokerageAccount.apiKey : undefined,
          apiSecret: prop.trade.brokerageAccount.apiSecret !== undefined ? prop.trade.brokerageAccount.apiSecret : undefined,
          configuration: prop.trade.brokerageAccount.configuration !== undefined ? prop.trade.brokerageAccount.configuration : undefined,
          marketOpen: prop.trade.brokerageAccount.marketOpen !== undefined ? prop.trade.brokerageAccount.marketOpen : undefined,
          realTime: prop.trade.brokerageAccount.realTime !== undefined ? prop.trade.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: prop.trade.brokerageAccount.cryptoTradingEnabled !== undefined ? prop.trade.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: prop.trade.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: prop.trade.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: prop.trade.brokerageAccount.cryptoTradeAllocationPct !== undefined ? prop.trade.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: prop.trade.brokerageAccount.tradeAllocationPct !== undefined ? prop.trade.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: prop.trade.brokerageAccount.autoAllocation !== undefined ? prop.trade.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: prop.trade.brokerageAccount.minPercentageChange !== undefined ? prop.trade.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: prop.trade.brokerageAccount.volumeThreshold !== undefined ? prop.trade.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: prop.trade.brokerageAccount.enablePortfolioTrailingStop !== undefined ? prop.trade.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: prop.trade.brokerageAccount.portfolioTrailPercent !== undefined ? prop.trade.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: prop.trade.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? prop.trade.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: prop.trade.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? prop.trade.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: prop.trade.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? prop.trade.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: prop.trade.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? prop.trade.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: prop.trade.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? prop.trade.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: prop.trade.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? prop.trade.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: prop.trade.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? prop.trade.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: prop.trade.brokerageAccount.minimumPriceChangePercent100 !== undefined ? prop.trade.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: prop.trade.brokerageAccount.deletedAt !== undefined ? prop.trade.brokerageAccount.deletedAt : undefined,
      allocation: prop.trade.brokerageAccount.allocation ? 
        typeof prop.trade.brokerageAccount.allocation === 'object' && Object.keys(prop.trade.brokerageAccount.allocation).length === 1 && Object.keys(prop.trade.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: prop.trade.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.trade.brokerageAccount.allocation.id !== undefined ? prop.trade.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: prop.trade.brokerageAccount.allocation.brokerageAccountId !== undefined ? prop.trade.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: prop.trade.brokerageAccount.allocation.equities !== undefined ? prop.trade.brokerageAccount.allocation.equities : undefined,
            optionsContracts: prop.trade.brokerageAccount.allocation.optionsContracts !== undefined ? prop.trade.brokerageAccount.allocation.optionsContracts : undefined,
            futures: prop.trade.brokerageAccount.allocation.futures !== undefined ? prop.trade.brokerageAccount.allocation.futures : undefined,
            etfs: prop.trade.brokerageAccount.allocation.etfs !== undefined ? prop.trade.brokerageAccount.allocation.etfs : undefined,
            forex: prop.trade.brokerageAccount.allocation.forex !== undefined ? prop.trade.brokerageAccount.allocation.forex : undefined,
            crypto: prop.trade.brokerageAccount.allocation.crypto !== undefined ? prop.trade.brokerageAccount.allocation.crypto : undefined,
            stocks: prop.trade.brokerageAccount.allocation.stocks !== undefined ? prop.trade.brokerageAccount.allocation.stocks : undefined,
            options: prop.trade.brokerageAccount.allocation.options !== undefined ? prop.trade.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: prop.trade.brokerageAccount.fund ? 
        typeof prop.trade.brokerageAccount.fund === 'object' && Object.keys(prop.trade.brokerageAccount.fund).length === 1 && Object.keys(prop.trade.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: prop.trade.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.trade.brokerageAccount.fund.id !== undefined ? prop.trade.brokerageAccount.fund.id : undefined,
            name: prop.trade.brokerageAccount.fund.name !== undefined ? {
                equals: prop.trade.brokerageAccount.fund.name 
               } : undefined,
            slug: prop.trade.brokerageAccount.fund.slug !== undefined ? {
                equals: prop.trade.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: prop.trade.brokerageAccount.fund.organizationId !== undefined ? {
                equals: prop.trade.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: prop.trade.brokerageAccount.fund.name !== undefined ? prop.trade.brokerageAccount.fund.name : undefined,
            slug: prop.trade.brokerageAccount.fund.slug !== undefined ? prop.trade.brokerageAccount.fund.slug : undefined,
            description: prop.trade.brokerageAccount.fund.description !== undefined ? prop.trade.brokerageAccount.fund.description : undefined,
            status: prop.trade.brokerageAccount.fund.status !== undefined ? prop.trade.brokerageAccount.fund.status : undefined,
            tradingOverrides: prop.trade.brokerageAccount.fund.tradingOverrides !== undefined ? prop.trade.brokerageAccount.fund.tradingOverrides : undefined,
            deletedAt: prop.trade.brokerageAccount.fund.deletedAt !== undefined ? prop.trade.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: prop.trade.brokerageAccount.alerts ? 
        Array.isArray(prop.trade.brokerageAccount.alerts) && prop.trade.brokerageAccount.alerts.length > 0 &&  prop.trade.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.trade.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.trade.brokerageAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsPositions: prop.trade.brokerageAccount.optionsPositions ? 
        Array.isArray(prop.trade.brokerageAccount.optionsPositions) && prop.trade.brokerageAccount.optionsPositions.length > 0 &&  prop.trade.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.trade.brokerageAccount.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.trade.brokerageAccount.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: prop.trade.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(prop.trade.brokerageAccount.optionsTradeExecutions) && prop.trade.brokerageAccount.optionsTradeExecutions.length > 0 &&  prop.trade.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        signal: prop.trade.signal !== undefined ? prop.trade.signal : undefined,
        strategy: prop.trade.strategy !== undefined ? prop.trade.strategy : undefined,
        analysis: prop.trade.analysis !== undefined ? prop.trade.analysis : undefined,
        summary: prop.trade.summary !== undefined ? prop.trade.summary : undefined,
        confidence: prop.trade.confidence !== undefined ? prop.trade.confidence : undefined,
        timestamp: prop.trade.timestamp !== undefined ? prop.trade.timestamp : undefined,
        status: prop.trade.status !== undefined ? prop.trade.status : undefined,
        deletedAt: prop.trade.deletedAt !== undefined ? prop.trade.deletedAt : undefined,
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
        sessionHorizonMinutes: prop.trade.sessionHorizonMinutes !== undefined ? prop.trade.sessionHorizonMinutes : undefined,
        thresholdsJson: prop.trade.thresholdsJson !== undefined ? prop.trade.thresholdsJson : undefined,
    brokerageAccount: prop.trade.brokerageAccount ? 
      typeof prop.trade.brokerageAccount === 'object' && Object.keys(prop.trade.brokerageAccount).length === 1 && Object.keys(prop.trade.brokerageAccount)[0] === 'id'
    ? { connect: {
          id: prop.trade.brokerageAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.trade.brokerageAccount.id !== undefined ? prop.trade.brokerageAccount.id : undefined,
          fundId: prop.trade.brokerageAccount.fundId !== undefined ? {
              equals: prop.trade.brokerageAccount.fundId 
             } : undefined,
        },
        create: {
          provider: prop.trade.brokerageAccount.provider !== undefined ? prop.trade.brokerageAccount.provider : undefined,
          type: prop.trade.brokerageAccount.type !== undefined ? prop.trade.brokerageAccount.type : undefined,
          apiKey: prop.trade.brokerageAccount.apiKey !== undefined ? prop.trade.brokerageAccount.apiKey : undefined,
          apiSecret: prop.trade.brokerageAccount.apiSecret !== undefined ? prop.trade.brokerageAccount.apiSecret : undefined,
          configuration: prop.trade.brokerageAccount.configuration !== undefined ? prop.trade.brokerageAccount.configuration : undefined,
          marketOpen: prop.trade.brokerageAccount.marketOpen !== undefined ? prop.trade.brokerageAccount.marketOpen : undefined,
          realTime: prop.trade.brokerageAccount.realTime !== undefined ? prop.trade.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: prop.trade.brokerageAccount.cryptoTradingEnabled !== undefined ? prop.trade.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: prop.trade.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: prop.trade.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: prop.trade.brokerageAccount.cryptoTradeAllocationPct !== undefined ? prop.trade.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: prop.trade.brokerageAccount.tradeAllocationPct !== undefined ? prop.trade.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: prop.trade.brokerageAccount.autoAllocation !== undefined ? prop.trade.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: prop.trade.brokerageAccount.minPercentageChange !== undefined ? prop.trade.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: prop.trade.brokerageAccount.volumeThreshold !== undefined ? prop.trade.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: prop.trade.brokerageAccount.enablePortfolioTrailingStop !== undefined ? prop.trade.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: prop.trade.brokerageAccount.portfolioTrailPercent !== undefined ? prop.trade.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: prop.trade.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? prop.trade.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: prop.trade.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? prop.trade.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: prop.trade.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? prop.trade.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: prop.trade.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? prop.trade.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: prop.trade.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? prop.trade.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: prop.trade.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? prop.trade.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: prop.trade.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? prop.trade.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: prop.trade.brokerageAccount.minimumPriceChangePercent100 !== undefined ? prop.trade.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: prop.trade.brokerageAccount.deletedAt !== undefined ? prop.trade.brokerageAccount.deletedAt : undefined,
      allocation: prop.trade.brokerageAccount.allocation ? 
        typeof prop.trade.brokerageAccount.allocation === 'object' && Object.keys(prop.trade.brokerageAccount.allocation).length === 1 && Object.keys(prop.trade.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: prop.trade.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.trade.brokerageAccount.allocation.id !== undefined ? prop.trade.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: prop.trade.brokerageAccount.allocation.brokerageAccountId !== undefined ? prop.trade.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: prop.trade.brokerageAccount.allocation.equities !== undefined ? prop.trade.brokerageAccount.allocation.equities : undefined,
            optionsContracts: prop.trade.brokerageAccount.allocation.optionsContracts !== undefined ? prop.trade.brokerageAccount.allocation.optionsContracts : undefined,
            futures: prop.trade.brokerageAccount.allocation.futures !== undefined ? prop.trade.brokerageAccount.allocation.futures : undefined,
            etfs: prop.trade.brokerageAccount.allocation.etfs !== undefined ? prop.trade.brokerageAccount.allocation.etfs : undefined,
            forex: prop.trade.brokerageAccount.allocation.forex !== undefined ? prop.trade.brokerageAccount.allocation.forex : undefined,
            crypto: prop.trade.brokerageAccount.allocation.crypto !== undefined ? prop.trade.brokerageAccount.allocation.crypto : undefined,
            stocks: prop.trade.brokerageAccount.allocation.stocks !== undefined ? prop.trade.brokerageAccount.allocation.stocks : undefined,
            options: prop.trade.brokerageAccount.allocation.options !== undefined ? prop.trade.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: prop.trade.brokerageAccount.fund ? 
        typeof prop.trade.brokerageAccount.fund === 'object' && Object.keys(prop.trade.brokerageAccount.fund).length === 1 && Object.keys(prop.trade.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: prop.trade.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.trade.brokerageAccount.fund.id !== undefined ? prop.trade.brokerageAccount.fund.id : undefined,
            name: prop.trade.brokerageAccount.fund.name !== undefined ? {
                equals: prop.trade.brokerageAccount.fund.name 
               } : undefined,
            slug: prop.trade.brokerageAccount.fund.slug !== undefined ? {
                equals: prop.trade.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: prop.trade.brokerageAccount.fund.organizationId !== undefined ? {
                equals: prop.trade.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: prop.trade.brokerageAccount.fund.name !== undefined ? prop.trade.brokerageAccount.fund.name : undefined,
            slug: prop.trade.brokerageAccount.fund.slug !== undefined ? prop.trade.brokerageAccount.fund.slug : undefined,
            description: prop.trade.brokerageAccount.fund.description !== undefined ? prop.trade.brokerageAccount.fund.description : undefined,
            status: prop.trade.brokerageAccount.fund.status !== undefined ? prop.trade.brokerageAccount.fund.status : undefined,
            tradingOverrides: prop.trade.brokerageAccount.fund.tradingOverrides !== undefined ? prop.trade.brokerageAccount.fund.tradingOverrides : undefined,
            deletedAt: prop.trade.brokerageAccount.fund.deletedAt !== undefined ? prop.trade.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: prop.trade.brokerageAccount.alerts ? 
        Array.isArray(prop.trade.brokerageAccount.alerts) && prop.trade.brokerageAccount.alerts.length > 0 &&  prop.trade.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.trade.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.trade.brokerageAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsPositions: prop.trade.brokerageAccount.optionsPositions ? 
        Array.isArray(prop.trade.brokerageAccount.optionsPositions) && prop.trade.brokerageAccount.optionsPositions.length > 0 &&  prop.trade.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.trade.brokerageAccount.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.trade.brokerageAccount.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: prop.trade.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(prop.trade.brokerageAccount.optionsTradeExecutions) && prop.trade.brokerageAccount.optionsTradeExecutions.length > 0 &&  prop.trade.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.trade.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
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
