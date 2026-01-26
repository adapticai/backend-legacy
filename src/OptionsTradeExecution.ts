
  
import { OptionsTradeExecution as OptionsTradeExecutionType } from './generated/typegraphql-prisma/models/OptionsTradeExecution';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the OptionsTradeExecution model.
   */

  const selectionSet = `
    undefined
  `;

  export const OptionsTradeExecution = {

    /**
     * Create a new OptionsTradeExecution record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created OptionsTradeExecution or null.
     */

    /**
     * Create a new OptionsTradeExecution record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created OptionsTradeExecution or null.
     */
    async create(props: OptionsTradeExecutionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsTradeExecutionType> {
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

          const CREATE_ONE_OPTIONSTRADEEXECUTION = gql`
              mutation createOneOptionsTradeExecution($data: OptionsTradeExecutionCreateInput!) {
                createOneOptionsTradeExecution(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
  brokerOrderId: props.brokerOrderId !== undefined ? props.brokerOrderId : undefined,
  executionSide: props.executionSide !== undefined ? props.executionSide : undefined,
  quantity: props.quantity !== undefined ? props.quantity : undefined,
  executionTime: props.executionTime !== undefined ? props.executionTime : undefined,
  orderType: props.orderType !== undefined ? props.orderType : undefined,
  timeInForce: props.timeInForce !== undefined ? props.timeInForce : undefined,
  venue: props.venue !== undefined ? props.venue : undefined,
  notes: props.notes !== undefined ? props.notes : undefined,
  metadata: props.metadata !== undefined ? props.metadata : undefined,
  position: props.position ? 
    typeof props.position === 'object' && Object.keys(props.position).length === 1 && Object.keys(props.position)[0] === 'id'
    ? { connect: {
        id: props.position.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.position.id !== undefined ? props.position.id : undefined,
        alpacaAccountId: props.position.alpacaAccountId !== undefined ? {
            equals: props.position.alpacaAccountId 
           } : undefined,
        contractId: props.position.contractId !== undefined ? {
            equals: props.position.contractId 
           } : undefined,
      },
      create: {
        alpacaAccountId: props.position.alpacaAccountId !== undefined ? props.position.alpacaAccountId : undefined,
        status: props.position.status !== undefined ? props.position.status : undefined,
        openingSide: props.position.openingSide !== undefined ? props.position.openingSide : undefined,
        quantity: props.position.quantity !== undefined ? props.position.quantity : undefined,
        entryTime: props.position.entryTime !== undefined ? props.position.entryTime : undefined,
        exitTime: props.position.exitTime !== undefined ? props.position.exitTime : undefined,
        daysHeld: props.position.daysHeld !== undefined ? props.position.daysHeld : undefined,
        exitReason: props.position.exitReason !== undefined ? props.position.exitReason : undefined,
        strategyType: props.position.strategyType !== undefined ? props.position.strategyType : undefined,
        tradeId: props.position.tradeId !== undefined ? props.position.tradeId : undefined,
        metadata: props.position.metadata !== undefined ? props.position.metadata : undefined,
    contract: props.position.contract ? 
      typeof props.position.contract === 'object' && Object.keys(props.position.contract).length === 1 && Object.keys(props.position.contract)[0] === 'id'
    ? { connect: {
          id: props.position.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.position.contract.id !== undefined ? props.position.contract.id : undefined,
          symbol: props.position.contract.symbol !== undefined ? {
              equals: props.position.contract.symbol 
             } : undefined,
        },
        create: {
          symbol: props.position.contract.symbol !== undefined ? props.position.contract.symbol : undefined,
          contractSymbol: props.position.contract.contractSymbol !== undefined ? props.position.contract.contractSymbol : undefined,
          optionType: props.position.contract.optionType !== undefined ? props.position.contract.optionType : undefined,
          expirationDate: props.position.contract.expirationDate !== undefined ? props.position.contract.expirationDate : undefined,
          daysToExpiration: props.position.contract.daysToExpiration !== undefined ? props.position.contract.daysToExpiration : undefined,
          bidSize: props.position.contract.bidSize !== undefined ? props.position.contract.bidSize : undefined,
          askSize: props.position.contract.askSize !== undefined ? props.position.contract.askSize : undefined,
          volume: props.position.contract.volume !== undefined ? props.position.contract.volume : undefined,
          openInterest: props.position.contract.openInterest !== undefined ? props.position.contract.openInterest : undefined,
          inTheMoney: props.position.contract.inTheMoney !== undefined ? props.position.contract.inTheMoney : undefined,
          metadata: props.position.contract.metadata !== undefined ? props.position.contract.metadata : undefined,
          dataTimestamp: props.position.contract.dataTimestamp !== undefined ? props.position.contract.dataTimestamp : undefined,
      greeksHistory: props.position.contract.greeksHistory ? 
        Array.isArray(props.position.contract.greeksHistory) && props.position.contract.greeksHistory.length > 0 &&  props.position.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.greeksHistory.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            volume: item.volume !== undefined ? item.volume : undefined,
            openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      executions: props.position.contract.executions ? 
        Array.isArray(props.position.contract.executions) && props.position.contract.executions.length > 0 &&  props.position.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
  contract: props.contract ? 
    typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && Object.keys(props.contract)[0] === 'id'
    ? { connect: {
        id: props.contract.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.contract.id !== undefined ? props.contract.id : undefined,
        symbol: props.contract.symbol !== undefined ? {
            equals: props.contract.symbol 
           } : undefined,
      },
      create: {
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        contractSymbol: props.contract.contractSymbol !== undefined ? props.contract.contractSymbol : undefined,
        optionType: props.contract.optionType !== undefined ? props.contract.optionType : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? props.contract.expirationDate : undefined,
        daysToExpiration: props.contract.daysToExpiration !== undefined ? props.contract.daysToExpiration : undefined,
        bidSize: props.contract.bidSize !== undefined ? props.contract.bidSize : undefined,
        askSize: props.contract.askSize !== undefined ? props.contract.askSize : undefined,
        volume: props.contract.volume !== undefined ? props.contract.volume : undefined,
        openInterest: props.contract.openInterest !== undefined ? props.contract.openInterest : undefined,
        inTheMoney: props.contract.inTheMoney !== undefined ? props.contract.inTheMoney : undefined,
        metadata: props.contract.metadata !== undefined ? props.contract.metadata : undefined,
        dataTimestamp: props.contract.dataTimestamp !== undefined ? props.contract.dataTimestamp : undefined,
    positions: props.contract.positions ? 
      Array.isArray(props.contract.positions) && props.contract.positions.length > 0 &&  props.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      executions: item.executions ? 
        Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      }))
    } : undefined,
    greeksHistory: props.contract.greeksHistory ? 
      Array.isArray(props.contract.greeksHistory) && props.contract.greeksHistory.length > 0 &&  props.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.greeksHistory.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.greeksHistory.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          volume: item.volume !== undefined ? item.volume : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
          metadata: item.metadata !== undefined ? item.metadata : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_OPTIONSTRADEEXECUTION,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneOptionsTradeExecution) {
            return response.data.createOneOptionsTradeExecution;
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
   * Create multiple OptionsTradeExecution records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of OptionsTradeExecution objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: OptionsTradeExecutionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_OPTIONSTRADEEXECUTION = gql`
          mutation createManyOptionsTradeExecution($data: [OptionsTradeExecutionCreateManyInput!]!) {
            createManyOptionsTradeExecution(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      positionId: prop.positionId !== undefined ? prop.positionId : undefined,
  contractId: prop.contractId !== undefined ? prop.contractId : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  brokerOrderId: prop.brokerOrderId !== undefined ? prop.brokerOrderId : undefined,
  executionSide: prop.executionSide !== undefined ? prop.executionSide : undefined,
  quantity: prop.quantity !== undefined ? prop.quantity : undefined,
  executionTime: prop.executionTime !== undefined ? prop.executionTime : undefined,
  orderType: prop.orderType !== undefined ? prop.orderType : undefined,
  timeInForce: prop.timeInForce !== undefined ? prop.timeInForce : undefined,
  venue: prop.venue !== undefined ? prop.venue : undefined,
  notes: prop.notes !== undefined ? prop.notes : undefined,
  metadata: prop.metadata !== undefined ? prop.metadata : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_OPTIONSTRADEEXECUTION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyOptionsTradeExecution) {
          return response.data.createManyOptionsTradeExecution;
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
   * Update a single OptionsTradeExecution record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated OptionsTradeExecution or null.
   */
  async update(props: OptionsTradeExecutionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsTradeExecutionType> {
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

        const UPDATE_ONE_OPTIONSTRADEEXECUTION = gql`
          mutation updateOneOptionsTradeExecution($data: OptionsTradeExecutionUpdateInput!, $where: OptionsTradeExecutionWhereUniqueInput!) {
            updateOneOptionsTradeExecution(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  positionId: props.positionId !== undefined ? {
    equals: props.positionId 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  brokerOrderId: props.brokerOrderId !== undefined ? {
    equals: props.brokerOrderId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
            set: props.alpacaAccountId 
           } : undefined,
  brokerOrderId: props.brokerOrderId !== undefined ? {
            set: props.brokerOrderId 
           } : undefined,
  executionSide: props.executionSide !== undefined ? {
            set: props.executionSide 
           } : undefined,
  quantity: props.quantity !== undefined ? {
            set: props.quantity 
           } : undefined,
  executionPrice: props.executionPrice !== undefined ? {
            set: props.executionPrice 
           } : undefined,
  executionValue: props.executionValue !== undefined ? {
            set: props.executionValue 
           } : undefined,
  fees: props.fees !== undefined ? {
            set: props.fees 
           } : undefined,
  executionTime: props.executionTime !== undefined ? {
            set: props.executionTime 
           } : undefined,
  underlyingPriceAtExecution: props.underlyingPriceAtExecution !== undefined ? {
            set: props.underlyingPriceAtExecution 
           } : undefined,
  deltaAtExecution: props.deltaAtExecution !== undefined ? {
            set: props.deltaAtExecution 
           } : undefined,
  gammaAtExecution: props.gammaAtExecution !== undefined ? {
            set: props.gammaAtExecution 
           } : undefined,
  thetaAtExecution: props.thetaAtExecution !== undefined ? {
            set: props.thetaAtExecution 
           } : undefined,
  vegaAtExecution: props.vegaAtExecution !== undefined ? {
            set: props.vegaAtExecution 
           } : undefined,
  rhoAtExecution: props.rhoAtExecution !== undefined ? {
            set: props.rhoAtExecution 
           } : undefined,
  impliedVolatilityAtExecution: props.impliedVolatilityAtExecution !== undefined ? {
            set: props.impliedVolatilityAtExecution 
           } : undefined,
  orderType: props.orderType !== undefined ? {
            set: props.orderType 
           } : undefined,
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
           } : undefined,
  timeInForce: props.timeInForce !== undefined ? {
            set: props.timeInForce 
           } : undefined,
  venue: props.venue !== undefined ? {
            set: props.venue 
           } : undefined,
  slippage: props.slippage !== undefined ? {
            set: props.slippage 
           } : undefined,
  notes: props.notes !== undefined ? {
            set: props.notes 
           } : undefined,
  metadata: props.metadata !== undefined ? {
            set: props.metadata 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  position: props.position ? 
  typeof props.position === 'object' && Object.keys(props.position).length === 1 && (Object.keys(props.position)[0] === 'id' || Object.keys(props.position)[0] === 'symbol')
? {
  connect: {
    id: props.position.id
  }
} : { upsert: {
      where: {
        id: props.position.id !== undefined ? {
            equals: props.position.id
          } : undefined,
        alpacaAccountId: props.position.alpacaAccountId !== undefined ? {
            equals: props.position.alpacaAccountId
          } : undefined,
        contractId: props.position.contractId !== undefined ? {
            equals: props.position.contractId
          } : undefined,
        tradeId: props.position.tradeId !== undefined ? {
            equals: props.position.tradeId
          } : undefined,
      },
      update: {
        id: props.position.id !== undefined ? {
            set: props.position.id
          } : undefined,
        alpacaAccountId: props.position.alpacaAccountId !== undefined ? {
            set: props.position.alpacaAccountId
          } : undefined,
        status: props.position.status !== undefined ? {
            set: props.position.status
          } : undefined,
        openingSide: props.position.openingSide !== undefined ? {
            set: props.position.openingSide
          } : undefined,
        quantity: props.position.quantity !== undefined ? {
            set: props.position.quantity
          } : undefined,
        entryPrice: props.position.entryPrice !== undefined ? {
            set: props.position.entryPrice
          } : undefined,
        entryCost: props.position.entryCost !== undefined ? {
            set: props.position.entryCost
          } : undefined,
        entryTime: props.position.entryTime !== undefined ? {
            set: props.position.entryTime
          } : undefined,
        exitPrice: props.position.exitPrice !== undefined ? {
            set: props.position.exitPrice
          } : undefined,
        exitValue: props.position.exitValue !== undefined ? {
            set: props.position.exitValue
          } : undefined,
        exitTime: props.position.exitTime !== undefined ? {
            set: props.position.exitTime
          } : undefined,
        currentPrice: props.position.currentPrice !== undefined ? {
            set: props.position.currentPrice
          } : undefined,
        currentValue: props.position.currentValue !== undefined ? {
            set: props.position.currentValue
          } : undefined,
        unrealizedPnL: props.position.unrealizedPnL !== undefined ? {
            set: props.position.unrealizedPnL
          } : undefined,
        unrealizedPnLPercent: props.position.unrealizedPnLPercent !== undefined ? {
            set: props.position.unrealizedPnLPercent
          } : undefined,
        realizedPnL: props.position.realizedPnL !== undefined ? {
            set: props.position.realizedPnL
          } : undefined,
        realizedPnLPercent: props.position.realizedPnLPercent !== undefined ? {
            set: props.position.realizedPnLPercent
          } : undefined,
        totalFees: props.position.totalFees !== undefined ? {
            set: props.position.totalFees
          } : undefined,
        currentDelta: props.position.currentDelta !== undefined ? {
            set: props.position.currentDelta
          } : undefined,
        currentGamma: props.position.currentGamma !== undefined ? {
            set: props.position.currentGamma
          } : undefined,
        currentTheta: props.position.currentTheta !== undefined ? {
            set: props.position.currentTheta
          } : undefined,
        currentVega: props.position.currentVega !== undefined ? {
            set: props.position.currentVega
          } : undefined,
        currentRho: props.position.currentRho !== undefined ? {
            set: props.position.currentRho
          } : undefined,
        currentImpliedVolatility: props.position.currentImpliedVolatility !== undefined ? {
            set: props.position.currentImpliedVolatility
          } : undefined,
        daysHeld: props.position.daysHeld !== undefined ? {
            set: props.position.daysHeld
          } : undefined,
        exitReason: props.position.exitReason !== undefined ? {
            set: props.position.exitReason
          } : undefined,
        strategyType: props.position.strategyType !== undefined ? {
            set: props.position.strategyType
          } : undefined,
        tradeId: props.position.tradeId !== undefined ? {
            set: props.position.tradeId
          } : undefined,
        metadata: props.position.metadata !== undefined ? {
            set: props.position.metadata
          } : undefined,
    contract: props.position.contract ? 
    typeof props.position.contract === 'object' && Object.keys(props.position.contract).length === 1 && (Object.keys(props.position.contract)[0] === 'id' || Object.keys(props.position.contract)[0] === 'symbol')
? {
    connect: {
      id: props.position.contract.id
    }
} : { upsert: {
        where: {
          id: props.position.contract.id !== undefined ? {
              equals: props.position.contract.id
            } : undefined,
          symbol: props.position.contract.symbol !== undefined ? {
              equals: props.position.contract.symbol
            } : undefined,
        },
        update: {
          id: props.position.contract.id !== undefined ? {
              set: props.position.contract.id
            } : undefined,
          symbol: props.position.contract.symbol !== undefined ? {
              set: props.position.contract.symbol
            } : undefined,
          contractSymbol: props.position.contract.contractSymbol !== undefined ? {
              set: props.position.contract.contractSymbol
            } : undefined,
          optionType: props.position.contract.optionType !== undefined ? {
              set: props.position.contract.optionType
            } : undefined,
          strikePrice: props.position.contract.strikePrice !== undefined ? {
              set: props.position.contract.strikePrice
            } : undefined,
          expirationDate: props.position.contract.expirationDate !== undefined ? {
              set: props.position.contract.expirationDate
            } : undefined,
          daysToExpiration: props.position.contract.daysToExpiration !== undefined ? {
              set: props.position.contract.daysToExpiration
            } : undefined,
          lastPrice: props.position.contract.lastPrice !== undefined ? {
              set: props.position.contract.lastPrice
            } : undefined,
          bidPrice: props.position.contract.bidPrice !== undefined ? {
              set: props.position.contract.bidPrice
            } : undefined,
          askPrice: props.position.contract.askPrice !== undefined ? {
              set: props.position.contract.askPrice
            } : undefined,
          midPrice: props.position.contract.midPrice !== undefined ? {
              set: props.position.contract.midPrice
            } : undefined,
          bidSize: props.position.contract.bidSize !== undefined ? {
              set: props.position.contract.bidSize
            } : undefined,
          askSize: props.position.contract.askSize !== undefined ? {
              set: props.position.contract.askSize
            } : undefined,
          volume: props.position.contract.volume !== undefined ? {
              set: props.position.contract.volume
            } : undefined,
          openInterest: props.position.contract.openInterest !== undefined ? {
              set: props.position.contract.openInterest
            } : undefined,
          impliedVolatility: props.position.contract.impliedVolatility !== undefined ? {
              set: props.position.contract.impliedVolatility
            } : undefined,
          delta: props.position.contract.delta !== undefined ? {
              set: props.position.contract.delta
            } : undefined,
          gamma: props.position.contract.gamma !== undefined ? {
              set: props.position.contract.gamma
            } : undefined,
          theta: props.position.contract.theta !== undefined ? {
              set: props.position.contract.theta
            } : undefined,
          vega: props.position.contract.vega !== undefined ? {
              set: props.position.contract.vega
            } : undefined,
          rho: props.position.contract.rho !== undefined ? {
              set: props.position.contract.rho
            } : undefined,
          inTheMoney: props.position.contract.inTheMoney !== undefined ? {
              set: props.position.contract.inTheMoney
            } : undefined,
          intrinsicValue: props.position.contract.intrinsicValue !== undefined ? {
              set: props.position.contract.intrinsicValue
            } : undefined,
          extrinsicValue: props.position.contract.extrinsicValue !== undefined ? {
              set: props.position.contract.extrinsicValue
            } : undefined,
          theoreticalPrice: props.position.contract.theoreticalPrice !== undefined ? {
              set: props.position.contract.theoreticalPrice
            } : undefined,
          underlyingPrice: props.position.contract.underlyingPrice !== undefined ? {
              set: props.position.contract.underlyingPrice
            } : undefined,
          metadata: props.position.contract.metadata !== undefined ? {
              set: props.position.contract.metadata
            } : undefined,
          dataTimestamp: props.position.contract.dataTimestamp !== undefined ? {
              set: props.position.contract.dataTimestamp
            } : undefined,
      greeksHistory: props.position.contract.greeksHistory ? 
      Array.isArray(props.position.contract.greeksHistory) && props.position.contract.greeksHistory.length > 0 && props.position.contract.greeksHistory.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.position.contract.greeksHistory.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.position.contract.greeksHistory.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp
              } : undefined,
            underlyingPrice: item.underlyingPrice !== undefined ? {
                set: item.underlyingPrice
              } : undefined,
            optionPrice: item.optionPrice !== undefined ? {
                set: item.optionPrice
              } : undefined,
            bidPrice: item.bidPrice !== undefined ? {
                set: item.bidPrice
              } : undefined,
            askPrice: item.askPrice !== undefined ? {
                set: item.askPrice
              } : undefined,
            impliedVolatility: item.impliedVolatility !== undefined ? {
                set: item.impliedVolatility
              } : undefined,
            delta: item.delta !== undefined ? {
                set: item.delta
              } : undefined,
            gamma: item.gamma !== undefined ? {
                set: item.gamma
              } : undefined,
            theta: item.theta !== undefined ? {
                set: item.theta
              } : undefined,
            vega: item.vega !== undefined ? {
                set: item.vega
              } : undefined,
            rho: item.rho !== undefined ? {
                set: item.rho
              } : undefined,
            volume: item.volume !== undefined ? {
                set: item.volume
              } : undefined,
            openInterest: item.openInterest !== undefined ? {
                set: item.openInterest
              } : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? {
                set: item.daysToExpiration
              } : undefined,
            intrinsicValue: item.intrinsicValue !== undefined ? {
                set: item.intrinsicValue
              } : undefined,
            extrinsicValue: item.extrinsicValue !== undefined ? {
                set: item.extrinsicValue
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            volume: item.volume !== undefined ? item.volume : undefined,
            openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      executions: props.position.contract.executions ? 
      Array.isArray(props.position.contract.executions) && props.position.contract.executions.length > 0 && props.position.contract.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.position.contract.executions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.position.contract.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                set: item.alpacaAccountId
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
          symbol: props.position.contract.symbol !== undefined ? props.position.contract.symbol : undefined,
          contractSymbol: props.position.contract.contractSymbol !== undefined ? props.position.contract.contractSymbol : undefined,
          optionType: props.position.contract.optionType !== undefined ? props.position.contract.optionType : undefined,
          expirationDate: props.position.contract.expirationDate !== undefined ? props.position.contract.expirationDate : undefined,
          daysToExpiration: props.position.contract.daysToExpiration !== undefined ? props.position.contract.daysToExpiration : undefined,
          bidSize: props.position.contract.bidSize !== undefined ? props.position.contract.bidSize : undefined,
          askSize: props.position.contract.askSize !== undefined ? props.position.contract.askSize : undefined,
          volume: props.position.contract.volume !== undefined ? props.position.contract.volume : undefined,
          openInterest: props.position.contract.openInterest !== undefined ? props.position.contract.openInterest : undefined,
          inTheMoney: props.position.contract.inTheMoney !== undefined ? props.position.contract.inTheMoney : undefined,
          metadata: props.position.contract.metadata !== undefined ? props.position.contract.metadata : undefined,
          dataTimestamp: props.position.contract.dataTimestamp !== undefined ? props.position.contract.dataTimestamp : undefined,
      greeksHistory: props.position.contract.greeksHistory ? 
        Array.isArray(props.position.contract.greeksHistory) && props.position.contract.greeksHistory.length > 0 &&  props.position.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.greeksHistory.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            volume: item.volume !== undefined ? item.volume : undefined,
            openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      executions: props.position.contract.executions ? 
        Array.isArray(props.position.contract.executions) && props.position.contract.executions.length > 0 &&  props.position.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
        alpacaAccountId: props.position.alpacaAccountId !== undefined ? props.position.alpacaAccountId : undefined,
        status: props.position.status !== undefined ? props.position.status : undefined,
        openingSide: props.position.openingSide !== undefined ? props.position.openingSide : undefined,
        quantity: props.position.quantity !== undefined ? props.position.quantity : undefined,
        entryTime: props.position.entryTime !== undefined ? props.position.entryTime : undefined,
        exitTime: props.position.exitTime !== undefined ? props.position.exitTime : undefined,
        daysHeld: props.position.daysHeld !== undefined ? props.position.daysHeld : undefined,
        exitReason: props.position.exitReason !== undefined ? props.position.exitReason : undefined,
        strategyType: props.position.strategyType !== undefined ? props.position.strategyType : undefined,
        tradeId: props.position.tradeId !== undefined ? props.position.tradeId : undefined,
        metadata: props.position.metadata !== undefined ? props.position.metadata : undefined,
    contract: props.position.contract ? 
      typeof props.position.contract === 'object' && Object.keys(props.position.contract).length === 1 && Object.keys(props.position.contract)[0] === 'id'
    ? { connect: {
          id: props.position.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.position.contract.id !== undefined ? props.position.contract.id : undefined,
          symbol: props.position.contract.symbol !== undefined ? {
              equals: props.position.contract.symbol 
             } : undefined,
        },
        create: {
          symbol: props.position.contract.symbol !== undefined ? props.position.contract.symbol : undefined,
          contractSymbol: props.position.contract.contractSymbol !== undefined ? props.position.contract.contractSymbol : undefined,
          optionType: props.position.contract.optionType !== undefined ? props.position.contract.optionType : undefined,
          expirationDate: props.position.contract.expirationDate !== undefined ? props.position.contract.expirationDate : undefined,
          daysToExpiration: props.position.contract.daysToExpiration !== undefined ? props.position.contract.daysToExpiration : undefined,
          bidSize: props.position.contract.bidSize !== undefined ? props.position.contract.bidSize : undefined,
          askSize: props.position.contract.askSize !== undefined ? props.position.contract.askSize : undefined,
          volume: props.position.contract.volume !== undefined ? props.position.contract.volume : undefined,
          openInterest: props.position.contract.openInterest !== undefined ? props.position.contract.openInterest : undefined,
          inTheMoney: props.position.contract.inTheMoney !== undefined ? props.position.contract.inTheMoney : undefined,
          metadata: props.position.contract.metadata !== undefined ? props.position.contract.metadata : undefined,
          dataTimestamp: props.position.contract.dataTimestamp !== undefined ? props.position.contract.dataTimestamp : undefined,
      greeksHistory: props.position.contract.greeksHistory ? 
        Array.isArray(props.position.contract.greeksHistory) && props.position.contract.greeksHistory.length > 0 &&  props.position.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.greeksHistory.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            volume: item.volume !== undefined ? item.volume : undefined,
            openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      executions: props.position.contract.executions ? 
        Array.isArray(props.position.contract.executions) && props.position.contract.executions.length > 0 &&  props.position.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
  contract: props.contract ? 
  typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && (Object.keys(props.contract)[0] === 'id' || Object.keys(props.contract)[0] === 'symbol')
? {
  connect: {
    id: props.contract.id
  }
} : { upsert: {
      where: {
        id: props.contract.id !== undefined ? {
            equals: props.contract.id
          } : undefined,
        symbol: props.contract.symbol !== undefined ? {
            equals: props.contract.symbol
          } : undefined,
      },
      update: {
        id: props.contract.id !== undefined ? {
            set: props.contract.id
          } : undefined,
        symbol: props.contract.symbol !== undefined ? {
            set: props.contract.symbol
          } : undefined,
        contractSymbol: props.contract.contractSymbol !== undefined ? {
            set: props.contract.contractSymbol
          } : undefined,
        optionType: props.contract.optionType !== undefined ? {
            set: props.contract.optionType
          } : undefined,
        strikePrice: props.contract.strikePrice !== undefined ? {
            set: props.contract.strikePrice
          } : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? {
            set: props.contract.expirationDate
          } : undefined,
        daysToExpiration: props.contract.daysToExpiration !== undefined ? {
            set: props.contract.daysToExpiration
          } : undefined,
        lastPrice: props.contract.lastPrice !== undefined ? {
            set: props.contract.lastPrice
          } : undefined,
        bidPrice: props.contract.bidPrice !== undefined ? {
            set: props.contract.bidPrice
          } : undefined,
        askPrice: props.contract.askPrice !== undefined ? {
            set: props.contract.askPrice
          } : undefined,
        midPrice: props.contract.midPrice !== undefined ? {
            set: props.contract.midPrice
          } : undefined,
        bidSize: props.contract.bidSize !== undefined ? {
            set: props.contract.bidSize
          } : undefined,
        askSize: props.contract.askSize !== undefined ? {
            set: props.contract.askSize
          } : undefined,
        volume: props.contract.volume !== undefined ? {
            set: props.contract.volume
          } : undefined,
        openInterest: props.contract.openInterest !== undefined ? {
            set: props.contract.openInterest
          } : undefined,
        impliedVolatility: props.contract.impliedVolatility !== undefined ? {
            set: props.contract.impliedVolatility
          } : undefined,
        delta: props.contract.delta !== undefined ? {
            set: props.contract.delta
          } : undefined,
        gamma: props.contract.gamma !== undefined ? {
            set: props.contract.gamma
          } : undefined,
        theta: props.contract.theta !== undefined ? {
            set: props.contract.theta
          } : undefined,
        vega: props.contract.vega !== undefined ? {
            set: props.contract.vega
          } : undefined,
        rho: props.contract.rho !== undefined ? {
            set: props.contract.rho
          } : undefined,
        inTheMoney: props.contract.inTheMoney !== undefined ? {
            set: props.contract.inTheMoney
          } : undefined,
        intrinsicValue: props.contract.intrinsicValue !== undefined ? {
            set: props.contract.intrinsicValue
          } : undefined,
        extrinsicValue: props.contract.extrinsicValue !== undefined ? {
            set: props.contract.extrinsicValue
          } : undefined,
        theoreticalPrice: props.contract.theoreticalPrice !== undefined ? {
            set: props.contract.theoreticalPrice
          } : undefined,
        underlyingPrice: props.contract.underlyingPrice !== undefined ? {
            set: props.contract.underlyingPrice
          } : undefined,
        metadata: props.contract.metadata !== undefined ? {
            set: props.contract.metadata
          } : undefined,
        dataTimestamp: props.contract.dataTimestamp !== undefined ? {
            set: props.contract.dataTimestamp
          } : undefined,
    positions: props.contract.positions ? 
    Array.isArray(props.contract.positions) && props.contract.positions.length > 0 && props.contract.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.contract.positions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.contract.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
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
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              set: item.alpacaAccountId
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
      executions: item.executions ? 
      Array.isArray(item.executions) && item.executions.length > 0 && item.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.executions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                set: item.alpacaAccountId
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
          alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      executions: item.executions ? 
        Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      }))
    } : undefined,
    greeksHistory: props.contract.greeksHistory ? 
    Array.isArray(props.contract.greeksHistory) && props.contract.greeksHistory.length > 0 && props.contract.greeksHistory.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.contract.greeksHistory.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.contract.greeksHistory.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp
            } : undefined,
          underlyingPrice: item.underlyingPrice !== undefined ? {
              set: item.underlyingPrice
            } : undefined,
          optionPrice: item.optionPrice !== undefined ? {
              set: item.optionPrice
            } : undefined,
          bidPrice: item.bidPrice !== undefined ? {
              set: item.bidPrice
            } : undefined,
          askPrice: item.askPrice !== undefined ? {
              set: item.askPrice
            } : undefined,
          impliedVolatility: item.impliedVolatility !== undefined ? {
              set: item.impliedVolatility
            } : undefined,
          delta: item.delta !== undefined ? {
              set: item.delta
            } : undefined,
          gamma: item.gamma !== undefined ? {
              set: item.gamma
            } : undefined,
          theta: item.theta !== undefined ? {
              set: item.theta
            } : undefined,
          vega: item.vega !== undefined ? {
              set: item.vega
            } : undefined,
          rho: item.rho !== undefined ? {
              set: item.rho
            } : undefined,
          volume: item.volume !== undefined ? {
              set: item.volume
            } : undefined,
          openInterest: item.openInterest !== undefined ? {
              set: item.openInterest
            } : undefined,
          daysToExpiration: item.daysToExpiration !== undefined ? {
              set: item.daysToExpiration
            } : undefined,
          intrinsicValue: item.intrinsicValue !== undefined ? {
              set: item.intrinsicValue
            } : undefined,
          extrinsicValue: item.extrinsicValue !== undefined ? {
              set: item.extrinsicValue
            } : undefined,
          metadata: item.metadata !== undefined ? {
              set: item.metadata
            } : undefined,
        },
        create: {
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          volume: item.volume !== undefined ? item.volume : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
          metadata: item.metadata !== undefined ? item.metadata : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        contractSymbol: props.contract.contractSymbol !== undefined ? props.contract.contractSymbol : undefined,
        optionType: props.contract.optionType !== undefined ? props.contract.optionType : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? props.contract.expirationDate : undefined,
        daysToExpiration: props.contract.daysToExpiration !== undefined ? props.contract.daysToExpiration : undefined,
        bidSize: props.contract.bidSize !== undefined ? props.contract.bidSize : undefined,
        askSize: props.contract.askSize !== undefined ? props.contract.askSize : undefined,
        volume: props.contract.volume !== undefined ? props.contract.volume : undefined,
        openInterest: props.contract.openInterest !== undefined ? props.contract.openInterest : undefined,
        inTheMoney: props.contract.inTheMoney !== undefined ? props.contract.inTheMoney : undefined,
        metadata: props.contract.metadata !== undefined ? props.contract.metadata : undefined,
        dataTimestamp: props.contract.dataTimestamp !== undefined ? props.contract.dataTimestamp : undefined,
    positions: props.contract.positions ? 
      Array.isArray(props.contract.positions) && props.contract.positions.length > 0 &&  props.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      executions: item.executions ? 
        Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      }))
    } : undefined,
    greeksHistory: props.contract.greeksHistory ? 
      Array.isArray(props.contract.greeksHistory) && props.contract.greeksHistory.length > 0 &&  props.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.greeksHistory.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.greeksHistory.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          volume: item.volume !== undefined ? item.volume : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
          metadata: item.metadata !== undefined ? item.metadata : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_OPTIONSTRADEEXECUTION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneOptionsTradeExecution) {
          return response.data.updateOneOptionsTradeExecution;
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
   * Upsert a single OptionsTradeExecution record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated OptionsTradeExecution or null.
   */
  async upsert(props: OptionsTradeExecutionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsTradeExecutionType> {
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

        const UPSERT_ONE_OPTIONSTRADEEXECUTION = gql`
          mutation upsertOneOptionsTradeExecution($where: OptionsTradeExecutionWhereUniqueInput!, $create: OptionsTradeExecutionCreateInput!, $update: OptionsTradeExecutionUpdateInput!) {
            upsertOneOptionsTradeExecution(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  positionId: props.positionId !== undefined ? {
    equals: props.positionId 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  brokerOrderId: props.brokerOrderId !== undefined ? {
    equals: props.brokerOrderId 
  } : undefined,
      },
          create: {
        alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
  brokerOrderId: props.brokerOrderId !== undefined ? props.brokerOrderId : undefined,
  executionSide: props.executionSide !== undefined ? props.executionSide : undefined,
  quantity: props.quantity !== undefined ? props.quantity : undefined,
  executionTime: props.executionTime !== undefined ? props.executionTime : undefined,
  orderType: props.orderType !== undefined ? props.orderType : undefined,
  timeInForce: props.timeInForce !== undefined ? props.timeInForce : undefined,
  venue: props.venue !== undefined ? props.venue : undefined,
  notes: props.notes !== undefined ? props.notes : undefined,
  metadata: props.metadata !== undefined ? props.metadata : undefined,
  position: props.position ? 
    typeof props.position === 'object' && Object.keys(props.position).length === 1 && Object.keys(props.position)[0] === 'id'
    ? { connect: {
        id: props.position.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.position.id !== undefined ? props.position.id : undefined,
        alpacaAccountId: props.position.alpacaAccountId !== undefined ? {
            equals: props.position.alpacaAccountId 
           } : undefined,
        contractId: props.position.contractId !== undefined ? {
            equals: props.position.contractId 
           } : undefined,
      },
      create: {
        alpacaAccountId: props.position.alpacaAccountId !== undefined ? props.position.alpacaAccountId : undefined,
        status: props.position.status !== undefined ? props.position.status : undefined,
        openingSide: props.position.openingSide !== undefined ? props.position.openingSide : undefined,
        quantity: props.position.quantity !== undefined ? props.position.quantity : undefined,
        entryTime: props.position.entryTime !== undefined ? props.position.entryTime : undefined,
        exitTime: props.position.exitTime !== undefined ? props.position.exitTime : undefined,
        daysHeld: props.position.daysHeld !== undefined ? props.position.daysHeld : undefined,
        exitReason: props.position.exitReason !== undefined ? props.position.exitReason : undefined,
        strategyType: props.position.strategyType !== undefined ? props.position.strategyType : undefined,
        tradeId: props.position.tradeId !== undefined ? props.position.tradeId : undefined,
        metadata: props.position.metadata !== undefined ? props.position.metadata : undefined,
    contract: props.position.contract ? 
      typeof props.position.contract === 'object' && Object.keys(props.position.contract).length === 1 && Object.keys(props.position.contract)[0] === 'id'
    ? { connect: {
          id: props.position.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.position.contract.id !== undefined ? props.position.contract.id : undefined,
          symbol: props.position.contract.symbol !== undefined ? {
              equals: props.position.contract.symbol 
             } : undefined,
        },
        create: {
          symbol: props.position.contract.symbol !== undefined ? props.position.contract.symbol : undefined,
          contractSymbol: props.position.contract.contractSymbol !== undefined ? props.position.contract.contractSymbol : undefined,
          optionType: props.position.contract.optionType !== undefined ? props.position.contract.optionType : undefined,
          expirationDate: props.position.contract.expirationDate !== undefined ? props.position.contract.expirationDate : undefined,
          daysToExpiration: props.position.contract.daysToExpiration !== undefined ? props.position.contract.daysToExpiration : undefined,
          bidSize: props.position.contract.bidSize !== undefined ? props.position.contract.bidSize : undefined,
          askSize: props.position.contract.askSize !== undefined ? props.position.contract.askSize : undefined,
          volume: props.position.contract.volume !== undefined ? props.position.contract.volume : undefined,
          openInterest: props.position.contract.openInterest !== undefined ? props.position.contract.openInterest : undefined,
          inTheMoney: props.position.contract.inTheMoney !== undefined ? props.position.contract.inTheMoney : undefined,
          metadata: props.position.contract.metadata !== undefined ? props.position.contract.metadata : undefined,
          dataTimestamp: props.position.contract.dataTimestamp !== undefined ? props.position.contract.dataTimestamp : undefined,
      greeksHistory: props.position.contract.greeksHistory ? 
        Array.isArray(props.position.contract.greeksHistory) && props.position.contract.greeksHistory.length > 0 &&  props.position.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.greeksHistory.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            volume: item.volume !== undefined ? item.volume : undefined,
            openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      executions: props.position.contract.executions ? 
        Array.isArray(props.position.contract.executions) && props.position.contract.executions.length > 0 &&  props.position.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
  contract: props.contract ? 
    typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && Object.keys(props.contract)[0] === 'id'
    ? { connect: {
        id: props.contract.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.contract.id !== undefined ? props.contract.id : undefined,
        symbol: props.contract.symbol !== undefined ? {
            equals: props.contract.symbol 
           } : undefined,
      },
      create: {
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        contractSymbol: props.contract.contractSymbol !== undefined ? props.contract.contractSymbol : undefined,
        optionType: props.contract.optionType !== undefined ? props.contract.optionType : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? props.contract.expirationDate : undefined,
        daysToExpiration: props.contract.daysToExpiration !== undefined ? props.contract.daysToExpiration : undefined,
        bidSize: props.contract.bidSize !== undefined ? props.contract.bidSize : undefined,
        askSize: props.contract.askSize !== undefined ? props.contract.askSize : undefined,
        volume: props.contract.volume !== undefined ? props.contract.volume : undefined,
        openInterest: props.contract.openInterest !== undefined ? props.contract.openInterest : undefined,
        inTheMoney: props.contract.inTheMoney !== undefined ? props.contract.inTheMoney : undefined,
        metadata: props.contract.metadata !== undefined ? props.contract.metadata : undefined,
        dataTimestamp: props.contract.dataTimestamp !== undefined ? props.contract.dataTimestamp : undefined,
    positions: props.contract.positions ? 
      Array.isArray(props.contract.positions) && props.contract.positions.length > 0 &&  props.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      executions: item.executions ? 
        Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      }))
    } : undefined,
    greeksHistory: props.contract.greeksHistory ? 
      Array.isArray(props.contract.greeksHistory) && props.contract.greeksHistory.length > 0 &&  props.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.greeksHistory.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.greeksHistory.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          volume: item.volume !== undefined ? item.volume : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
          metadata: item.metadata !== undefined ? item.metadata : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
      },
          update: {
      alpacaAccountId: props.alpacaAccountId !== undefined ? {
            set: props.alpacaAccountId 
           } : undefined,
  brokerOrderId: props.brokerOrderId !== undefined ? {
            set: props.brokerOrderId 
           } : undefined,
  executionSide: props.executionSide !== undefined ? {
            set: props.executionSide 
           } : undefined,
  quantity: props.quantity !== undefined ? {
            set: props.quantity 
           } : undefined,
  executionPrice: props.executionPrice !== undefined ? {
            set: props.executionPrice 
           } : undefined,
  executionValue: props.executionValue !== undefined ? {
            set: props.executionValue 
           } : undefined,
  fees: props.fees !== undefined ? {
            set: props.fees 
           } : undefined,
  executionTime: props.executionTime !== undefined ? {
            set: props.executionTime 
           } : undefined,
  underlyingPriceAtExecution: props.underlyingPriceAtExecution !== undefined ? {
            set: props.underlyingPriceAtExecution 
           } : undefined,
  deltaAtExecution: props.deltaAtExecution !== undefined ? {
            set: props.deltaAtExecution 
           } : undefined,
  gammaAtExecution: props.gammaAtExecution !== undefined ? {
            set: props.gammaAtExecution 
           } : undefined,
  thetaAtExecution: props.thetaAtExecution !== undefined ? {
            set: props.thetaAtExecution 
           } : undefined,
  vegaAtExecution: props.vegaAtExecution !== undefined ? {
            set: props.vegaAtExecution 
           } : undefined,
  rhoAtExecution: props.rhoAtExecution !== undefined ? {
            set: props.rhoAtExecution 
           } : undefined,
  impliedVolatilityAtExecution: props.impliedVolatilityAtExecution !== undefined ? {
            set: props.impliedVolatilityAtExecution 
           } : undefined,
  orderType: props.orderType !== undefined ? {
            set: props.orderType 
           } : undefined,
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
           } : undefined,
  timeInForce: props.timeInForce !== undefined ? {
            set: props.timeInForce 
           } : undefined,
  venue: props.venue !== undefined ? {
            set: props.venue 
           } : undefined,
  slippage: props.slippage !== undefined ? {
            set: props.slippage 
           } : undefined,
  notes: props.notes !== undefined ? {
            set: props.notes 
           } : undefined,
  metadata: props.metadata !== undefined ? {
            set: props.metadata 
           } : undefined,
  position: props.position ? 
  typeof props.position === 'object' && Object.keys(props.position).length === 1 && (Object.keys(props.position)[0] === 'id' || Object.keys(props.position)[0] === 'symbol')
? {
  connect: {
    id: props.position.id
  }
} : { upsert: {
      where: {
        id: props.position.id !== undefined ? {
            equals: props.position.id
          } : undefined,
        alpacaAccountId: props.position.alpacaAccountId !== undefined ? {
            equals: props.position.alpacaAccountId
          } : undefined,
        contractId: props.position.contractId !== undefined ? {
            equals: props.position.contractId
          } : undefined,
        tradeId: props.position.tradeId !== undefined ? {
            equals: props.position.tradeId
          } : undefined,
      },
      update: {
        id: props.position.id !== undefined ? {
            set: props.position.id
          } : undefined,
        alpacaAccountId: props.position.alpacaAccountId !== undefined ? {
            set: props.position.alpacaAccountId
          } : undefined,
        status: props.position.status !== undefined ? {
            set: props.position.status
          } : undefined,
        openingSide: props.position.openingSide !== undefined ? {
            set: props.position.openingSide
          } : undefined,
        quantity: props.position.quantity !== undefined ? {
            set: props.position.quantity
          } : undefined,
        entryPrice: props.position.entryPrice !== undefined ? {
            set: props.position.entryPrice
          } : undefined,
        entryCost: props.position.entryCost !== undefined ? {
            set: props.position.entryCost
          } : undefined,
        entryTime: props.position.entryTime !== undefined ? {
            set: props.position.entryTime
          } : undefined,
        exitPrice: props.position.exitPrice !== undefined ? {
            set: props.position.exitPrice
          } : undefined,
        exitValue: props.position.exitValue !== undefined ? {
            set: props.position.exitValue
          } : undefined,
        exitTime: props.position.exitTime !== undefined ? {
            set: props.position.exitTime
          } : undefined,
        currentPrice: props.position.currentPrice !== undefined ? {
            set: props.position.currentPrice
          } : undefined,
        currentValue: props.position.currentValue !== undefined ? {
            set: props.position.currentValue
          } : undefined,
        unrealizedPnL: props.position.unrealizedPnL !== undefined ? {
            set: props.position.unrealizedPnL
          } : undefined,
        unrealizedPnLPercent: props.position.unrealizedPnLPercent !== undefined ? {
            set: props.position.unrealizedPnLPercent
          } : undefined,
        realizedPnL: props.position.realizedPnL !== undefined ? {
            set: props.position.realizedPnL
          } : undefined,
        realizedPnLPercent: props.position.realizedPnLPercent !== undefined ? {
            set: props.position.realizedPnLPercent
          } : undefined,
        totalFees: props.position.totalFees !== undefined ? {
            set: props.position.totalFees
          } : undefined,
        currentDelta: props.position.currentDelta !== undefined ? {
            set: props.position.currentDelta
          } : undefined,
        currentGamma: props.position.currentGamma !== undefined ? {
            set: props.position.currentGamma
          } : undefined,
        currentTheta: props.position.currentTheta !== undefined ? {
            set: props.position.currentTheta
          } : undefined,
        currentVega: props.position.currentVega !== undefined ? {
            set: props.position.currentVega
          } : undefined,
        currentRho: props.position.currentRho !== undefined ? {
            set: props.position.currentRho
          } : undefined,
        currentImpliedVolatility: props.position.currentImpliedVolatility !== undefined ? {
            set: props.position.currentImpliedVolatility
          } : undefined,
        daysHeld: props.position.daysHeld !== undefined ? {
            set: props.position.daysHeld
          } : undefined,
        exitReason: props.position.exitReason !== undefined ? {
            set: props.position.exitReason
          } : undefined,
        strategyType: props.position.strategyType !== undefined ? {
            set: props.position.strategyType
          } : undefined,
        tradeId: props.position.tradeId !== undefined ? {
            set: props.position.tradeId
          } : undefined,
        metadata: props.position.metadata !== undefined ? {
            set: props.position.metadata
          } : undefined,
    contract: props.position.contract ? 
    typeof props.position.contract === 'object' && Object.keys(props.position.contract).length === 1 && (Object.keys(props.position.contract)[0] === 'id' || Object.keys(props.position.contract)[0] === 'symbol')
? {
    connect: {
      id: props.position.contract.id
    }
} : { upsert: {
        where: {
          id: props.position.contract.id !== undefined ? {
              equals: props.position.contract.id
            } : undefined,
          symbol: props.position.contract.symbol !== undefined ? {
              equals: props.position.contract.symbol
            } : undefined,
        },
        update: {
          id: props.position.contract.id !== undefined ? {
              set: props.position.contract.id
            } : undefined,
          symbol: props.position.contract.symbol !== undefined ? {
              set: props.position.contract.symbol
            } : undefined,
          contractSymbol: props.position.contract.contractSymbol !== undefined ? {
              set: props.position.contract.contractSymbol
            } : undefined,
          optionType: props.position.contract.optionType !== undefined ? {
              set: props.position.contract.optionType
            } : undefined,
          strikePrice: props.position.contract.strikePrice !== undefined ? {
              set: props.position.contract.strikePrice
            } : undefined,
          expirationDate: props.position.contract.expirationDate !== undefined ? {
              set: props.position.contract.expirationDate
            } : undefined,
          daysToExpiration: props.position.contract.daysToExpiration !== undefined ? {
              set: props.position.contract.daysToExpiration
            } : undefined,
          lastPrice: props.position.contract.lastPrice !== undefined ? {
              set: props.position.contract.lastPrice
            } : undefined,
          bidPrice: props.position.contract.bidPrice !== undefined ? {
              set: props.position.contract.bidPrice
            } : undefined,
          askPrice: props.position.contract.askPrice !== undefined ? {
              set: props.position.contract.askPrice
            } : undefined,
          midPrice: props.position.contract.midPrice !== undefined ? {
              set: props.position.contract.midPrice
            } : undefined,
          bidSize: props.position.contract.bidSize !== undefined ? {
              set: props.position.contract.bidSize
            } : undefined,
          askSize: props.position.contract.askSize !== undefined ? {
              set: props.position.contract.askSize
            } : undefined,
          volume: props.position.contract.volume !== undefined ? {
              set: props.position.contract.volume
            } : undefined,
          openInterest: props.position.contract.openInterest !== undefined ? {
              set: props.position.contract.openInterest
            } : undefined,
          impliedVolatility: props.position.contract.impliedVolatility !== undefined ? {
              set: props.position.contract.impliedVolatility
            } : undefined,
          delta: props.position.contract.delta !== undefined ? {
              set: props.position.contract.delta
            } : undefined,
          gamma: props.position.contract.gamma !== undefined ? {
              set: props.position.contract.gamma
            } : undefined,
          theta: props.position.contract.theta !== undefined ? {
              set: props.position.contract.theta
            } : undefined,
          vega: props.position.contract.vega !== undefined ? {
              set: props.position.contract.vega
            } : undefined,
          rho: props.position.contract.rho !== undefined ? {
              set: props.position.contract.rho
            } : undefined,
          inTheMoney: props.position.contract.inTheMoney !== undefined ? {
              set: props.position.contract.inTheMoney
            } : undefined,
          intrinsicValue: props.position.contract.intrinsicValue !== undefined ? {
              set: props.position.contract.intrinsicValue
            } : undefined,
          extrinsicValue: props.position.contract.extrinsicValue !== undefined ? {
              set: props.position.contract.extrinsicValue
            } : undefined,
          theoreticalPrice: props.position.contract.theoreticalPrice !== undefined ? {
              set: props.position.contract.theoreticalPrice
            } : undefined,
          underlyingPrice: props.position.contract.underlyingPrice !== undefined ? {
              set: props.position.contract.underlyingPrice
            } : undefined,
          metadata: props.position.contract.metadata !== undefined ? {
              set: props.position.contract.metadata
            } : undefined,
          dataTimestamp: props.position.contract.dataTimestamp !== undefined ? {
              set: props.position.contract.dataTimestamp
            } : undefined,
      greeksHistory: props.position.contract.greeksHistory ? 
      Array.isArray(props.position.contract.greeksHistory) && props.position.contract.greeksHistory.length > 0 && props.position.contract.greeksHistory.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.position.contract.greeksHistory.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.position.contract.greeksHistory.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp
              } : undefined,
            underlyingPrice: item.underlyingPrice !== undefined ? {
                set: item.underlyingPrice
              } : undefined,
            optionPrice: item.optionPrice !== undefined ? {
                set: item.optionPrice
              } : undefined,
            bidPrice: item.bidPrice !== undefined ? {
                set: item.bidPrice
              } : undefined,
            askPrice: item.askPrice !== undefined ? {
                set: item.askPrice
              } : undefined,
            impliedVolatility: item.impliedVolatility !== undefined ? {
                set: item.impliedVolatility
              } : undefined,
            delta: item.delta !== undefined ? {
                set: item.delta
              } : undefined,
            gamma: item.gamma !== undefined ? {
                set: item.gamma
              } : undefined,
            theta: item.theta !== undefined ? {
                set: item.theta
              } : undefined,
            vega: item.vega !== undefined ? {
                set: item.vega
              } : undefined,
            rho: item.rho !== undefined ? {
                set: item.rho
              } : undefined,
            volume: item.volume !== undefined ? {
                set: item.volume
              } : undefined,
            openInterest: item.openInterest !== undefined ? {
                set: item.openInterest
              } : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? {
                set: item.daysToExpiration
              } : undefined,
            intrinsicValue: item.intrinsicValue !== undefined ? {
                set: item.intrinsicValue
              } : undefined,
            extrinsicValue: item.extrinsicValue !== undefined ? {
                set: item.extrinsicValue
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            volume: item.volume !== undefined ? item.volume : undefined,
            openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      executions: props.position.contract.executions ? 
      Array.isArray(props.position.contract.executions) && props.position.contract.executions.length > 0 && props.position.contract.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.position.contract.executions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.position.contract.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                set: item.alpacaAccountId
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
          symbol: props.position.contract.symbol !== undefined ? props.position.contract.symbol : undefined,
          contractSymbol: props.position.contract.contractSymbol !== undefined ? props.position.contract.contractSymbol : undefined,
          optionType: props.position.contract.optionType !== undefined ? props.position.contract.optionType : undefined,
          expirationDate: props.position.contract.expirationDate !== undefined ? props.position.contract.expirationDate : undefined,
          daysToExpiration: props.position.contract.daysToExpiration !== undefined ? props.position.contract.daysToExpiration : undefined,
          bidSize: props.position.contract.bidSize !== undefined ? props.position.contract.bidSize : undefined,
          askSize: props.position.contract.askSize !== undefined ? props.position.contract.askSize : undefined,
          volume: props.position.contract.volume !== undefined ? props.position.contract.volume : undefined,
          openInterest: props.position.contract.openInterest !== undefined ? props.position.contract.openInterest : undefined,
          inTheMoney: props.position.contract.inTheMoney !== undefined ? props.position.contract.inTheMoney : undefined,
          metadata: props.position.contract.metadata !== undefined ? props.position.contract.metadata : undefined,
          dataTimestamp: props.position.contract.dataTimestamp !== undefined ? props.position.contract.dataTimestamp : undefined,
      greeksHistory: props.position.contract.greeksHistory ? 
        Array.isArray(props.position.contract.greeksHistory) && props.position.contract.greeksHistory.length > 0 &&  props.position.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.greeksHistory.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            volume: item.volume !== undefined ? item.volume : undefined,
            openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      executions: props.position.contract.executions ? 
        Array.isArray(props.position.contract.executions) && props.position.contract.executions.length > 0 &&  props.position.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
        alpacaAccountId: props.position.alpacaAccountId !== undefined ? props.position.alpacaAccountId : undefined,
        status: props.position.status !== undefined ? props.position.status : undefined,
        openingSide: props.position.openingSide !== undefined ? props.position.openingSide : undefined,
        quantity: props.position.quantity !== undefined ? props.position.quantity : undefined,
        entryTime: props.position.entryTime !== undefined ? props.position.entryTime : undefined,
        exitTime: props.position.exitTime !== undefined ? props.position.exitTime : undefined,
        daysHeld: props.position.daysHeld !== undefined ? props.position.daysHeld : undefined,
        exitReason: props.position.exitReason !== undefined ? props.position.exitReason : undefined,
        strategyType: props.position.strategyType !== undefined ? props.position.strategyType : undefined,
        tradeId: props.position.tradeId !== undefined ? props.position.tradeId : undefined,
        metadata: props.position.metadata !== undefined ? props.position.metadata : undefined,
    contract: props.position.contract ? 
      typeof props.position.contract === 'object' && Object.keys(props.position.contract).length === 1 && Object.keys(props.position.contract)[0] === 'id'
    ? { connect: {
          id: props.position.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.position.contract.id !== undefined ? props.position.contract.id : undefined,
          symbol: props.position.contract.symbol !== undefined ? {
              equals: props.position.contract.symbol 
             } : undefined,
        },
        create: {
          symbol: props.position.contract.symbol !== undefined ? props.position.contract.symbol : undefined,
          contractSymbol: props.position.contract.contractSymbol !== undefined ? props.position.contract.contractSymbol : undefined,
          optionType: props.position.contract.optionType !== undefined ? props.position.contract.optionType : undefined,
          expirationDate: props.position.contract.expirationDate !== undefined ? props.position.contract.expirationDate : undefined,
          daysToExpiration: props.position.contract.daysToExpiration !== undefined ? props.position.contract.daysToExpiration : undefined,
          bidSize: props.position.contract.bidSize !== undefined ? props.position.contract.bidSize : undefined,
          askSize: props.position.contract.askSize !== undefined ? props.position.contract.askSize : undefined,
          volume: props.position.contract.volume !== undefined ? props.position.contract.volume : undefined,
          openInterest: props.position.contract.openInterest !== undefined ? props.position.contract.openInterest : undefined,
          inTheMoney: props.position.contract.inTheMoney !== undefined ? props.position.contract.inTheMoney : undefined,
          metadata: props.position.contract.metadata !== undefined ? props.position.contract.metadata : undefined,
          dataTimestamp: props.position.contract.dataTimestamp !== undefined ? props.position.contract.dataTimestamp : undefined,
      greeksHistory: props.position.contract.greeksHistory ? 
        Array.isArray(props.position.contract.greeksHistory) && props.position.contract.greeksHistory.length > 0 &&  props.position.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.greeksHistory.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            volume: item.volume !== undefined ? item.volume : undefined,
            openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      executions: props.position.contract.executions ? 
        Array.isArray(props.position.contract.executions) && props.position.contract.executions.length > 0 &&  props.position.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.contract.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
  contract: props.contract ? 
  typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && (Object.keys(props.contract)[0] === 'id' || Object.keys(props.contract)[0] === 'symbol')
? {
  connect: {
    id: props.contract.id
  }
} : { upsert: {
      where: {
        id: props.contract.id !== undefined ? {
            equals: props.contract.id
          } : undefined,
        symbol: props.contract.symbol !== undefined ? {
            equals: props.contract.symbol
          } : undefined,
      },
      update: {
        id: props.contract.id !== undefined ? {
            set: props.contract.id
          } : undefined,
        symbol: props.contract.symbol !== undefined ? {
            set: props.contract.symbol
          } : undefined,
        contractSymbol: props.contract.contractSymbol !== undefined ? {
            set: props.contract.contractSymbol
          } : undefined,
        optionType: props.contract.optionType !== undefined ? {
            set: props.contract.optionType
          } : undefined,
        strikePrice: props.contract.strikePrice !== undefined ? {
            set: props.contract.strikePrice
          } : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? {
            set: props.contract.expirationDate
          } : undefined,
        daysToExpiration: props.contract.daysToExpiration !== undefined ? {
            set: props.contract.daysToExpiration
          } : undefined,
        lastPrice: props.contract.lastPrice !== undefined ? {
            set: props.contract.lastPrice
          } : undefined,
        bidPrice: props.contract.bidPrice !== undefined ? {
            set: props.contract.bidPrice
          } : undefined,
        askPrice: props.contract.askPrice !== undefined ? {
            set: props.contract.askPrice
          } : undefined,
        midPrice: props.contract.midPrice !== undefined ? {
            set: props.contract.midPrice
          } : undefined,
        bidSize: props.contract.bidSize !== undefined ? {
            set: props.contract.bidSize
          } : undefined,
        askSize: props.contract.askSize !== undefined ? {
            set: props.contract.askSize
          } : undefined,
        volume: props.contract.volume !== undefined ? {
            set: props.contract.volume
          } : undefined,
        openInterest: props.contract.openInterest !== undefined ? {
            set: props.contract.openInterest
          } : undefined,
        impliedVolatility: props.contract.impliedVolatility !== undefined ? {
            set: props.contract.impliedVolatility
          } : undefined,
        delta: props.contract.delta !== undefined ? {
            set: props.contract.delta
          } : undefined,
        gamma: props.contract.gamma !== undefined ? {
            set: props.contract.gamma
          } : undefined,
        theta: props.contract.theta !== undefined ? {
            set: props.contract.theta
          } : undefined,
        vega: props.contract.vega !== undefined ? {
            set: props.contract.vega
          } : undefined,
        rho: props.contract.rho !== undefined ? {
            set: props.contract.rho
          } : undefined,
        inTheMoney: props.contract.inTheMoney !== undefined ? {
            set: props.contract.inTheMoney
          } : undefined,
        intrinsicValue: props.contract.intrinsicValue !== undefined ? {
            set: props.contract.intrinsicValue
          } : undefined,
        extrinsicValue: props.contract.extrinsicValue !== undefined ? {
            set: props.contract.extrinsicValue
          } : undefined,
        theoreticalPrice: props.contract.theoreticalPrice !== undefined ? {
            set: props.contract.theoreticalPrice
          } : undefined,
        underlyingPrice: props.contract.underlyingPrice !== undefined ? {
            set: props.contract.underlyingPrice
          } : undefined,
        metadata: props.contract.metadata !== undefined ? {
            set: props.contract.metadata
          } : undefined,
        dataTimestamp: props.contract.dataTimestamp !== undefined ? {
            set: props.contract.dataTimestamp
          } : undefined,
    positions: props.contract.positions ? 
    Array.isArray(props.contract.positions) && props.contract.positions.length > 0 && props.contract.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.contract.positions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.contract.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
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
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              set: item.alpacaAccountId
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
      executions: item.executions ? 
      Array.isArray(item.executions) && item.executions.length > 0 && item.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.executions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                set: item.alpacaAccountId
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
          alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      executions: item.executions ? 
        Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      }))
    } : undefined,
    greeksHistory: props.contract.greeksHistory ? 
    Array.isArray(props.contract.greeksHistory) && props.contract.greeksHistory.length > 0 && props.contract.greeksHistory.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.contract.greeksHistory.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.contract.greeksHistory.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp
            } : undefined,
          underlyingPrice: item.underlyingPrice !== undefined ? {
              set: item.underlyingPrice
            } : undefined,
          optionPrice: item.optionPrice !== undefined ? {
              set: item.optionPrice
            } : undefined,
          bidPrice: item.bidPrice !== undefined ? {
              set: item.bidPrice
            } : undefined,
          askPrice: item.askPrice !== undefined ? {
              set: item.askPrice
            } : undefined,
          impliedVolatility: item.impliedVolatility !== undefined ? {
              set: item.impliedVolatility
            } : undefined,
          delta: item.delta !== undefined ? {
              set: item.delta
            } : undefined,
          gamma: item.gamma !== undefined ? {
              set: item.gamma
            } : undefined,
          theta: item.theta !== undefined ? {
              set: item.theta
            } : undefined,
          vega: item.vega !== undefined ? {
              set: item.vega
            } : undefined,
          rho: item.rho !== undefined ? {
              set: item.rho
            } : undefined,
          volume: item.volume !== undefined ? {
              set: item.volume
            } : undefined,
          openInterest: item.openInterest !== undefined ? {
              set: item.openInterest
            } : undefined,
          daysToExpiration: item.daysToExpiration !== undefined ? {
              set: item.daysToExpiration
            } : undefined,
          intrinsicValue: item.intrinsicValue !== undefined ? {
              set: item.intrinsicValue
            } : undefined,
          extrinsicValue: item.extrinsicValue !== undefined ? {
              set: item.extrinsicValue
            } : undefined,
          metadata: item.metadata !== undefined ? {
              set: item.metadata
            } : undefined,
        },
        create: {
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          volume: item.volume !== undefined ? item.volume : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
          metadata: item.metadata !== undefined ? item.metadata : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        contractSymbol: props.contract.contractSymbol !== undefined ? props.contract.contractSymbol : undefined,
        optionType: props.contract.optionType !== undefined ? props.contract.optionType : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? props.contract.expirationDate : undefined,
        daysToExpiration: props.contract.daysToExpiration !== undefined ? props.contract.daysToExpiration : undefined,
        bidSize: props.contract.bidSize !== undefined ? props.contract.bidSize : undefined,
        askSize: props.contract.askSize !== undefined ? props.contract.askSize : undefined,
        volume: props.contract.volume !== undefined ? props.contract.volume : undefined,
        openInterest: props.contract.openInterest !== undefined ? props.contract.openInterest : undefined,
        inTheMoney: props.contract.inTheMoney !== undefined ? props.contract.inTheMoney : undefined,
        metadata: props.contract.metadata !== undefined ? props.contract.metadata : undefined,
        dataTimestamp: props.contract.dataTimestamp !== undefined ? props.contract.dataTimestamp : undefined,
    positions: props.contract.positions ? 
      Array.isArray(props.contract.positions) && props.contract.positions.length > 0 &&  props.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      executions: item.executions ? 
        Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      }))
    } : undefined,
    greeksHistory: props.contract.greeksHistory ? 
      Array.isArray(props.contract.greeksHistory) && props.contract.greeksHistory.length > 0 &&  props.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.greeksHistory.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.greeksHistory.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          volume: item.volume !== undefined ? item.volume : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
          metadata: item.metadata !== undefined ? item.metadata : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_OPTIONSTRADEEXECUTION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneOptionsTradeExecution) {
          return response.data.upsertOneOptionsTradeExecution;
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
   * Update multiple OptionsTradeExecution records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of OptionsTradeExecution objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: OptionsTradeExecutionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_OPTIONSTRADEEXECUTION = gql`
          mutation updateManyOptionsTradeExecution($data: [OptionsTradeExecutionCreateManyInput!]!) {
            updateManyOptionsTradeExecution(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  positionId: prop.positionId !== undefined ? {
    equals: prop.positionId 
  } : undefined,
  contractId: prop.contractId !== undefined ? {
    equals: prop.contractId 
  } : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
    equals: prop.alpacaAccountId 
  } : undefined,
  brokerOrderId: prop.brokerOrderId !== undefined ? {
    equals: prop.brokerOrderId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
            set: prop.alpacaAccountId 
           } : undefined,
  brokerOrderId: prop.brokerOrderId !== undefined ? {
            set: prop.brokerOrderId 
           } : undefined,
  executionSide: prop.executionSide !== undefined ? {
            set: prop.executionSide 
           } : undefined,
  quantity: prop.quantity !== undefined ? {
            set: prop.quantity 
           } : undefined,
  executionPrice: prop.executionPrice !== undefined ? {
            set: prop.executionPrice 
           } : undefined,
  executionValue: prop.executionValue !== undefined ? {
            set: prop.executionValue 
           } : undefined,
  fees: prop.fees !== undefined ? {
            set: prop.fees 
           } : undefined,
  executionTime: prop.executionTime !== undefined ? {
            set: prop.executionTime 
           } : undefined,
  underlyingPriceAtExecution: prop.underlyingPriceAtExecution !== undefined ? {
            set: prop.underlyingPriceAtExecution 
           } : undefined,
  deltaAtExecution: prop.deltaAtExecution !== undefined ? {
            set: prop.deltaAtExecution 
           } : undefined,
  gammaAtExecution: prop.gammaAtExecution !== undefined ? {
            set: prop.gammaAtExecution 
           } : undefined,
  thetaAtExecution: prop.thetaAtExecution !== undefined ? {
            set: prop.thetaAtExecution 
           } : undefined,
  vegaAtExecution: prop.vegaAtExecution !== undefined ? {
            set: prop.vegaAtExecution 
           } : undefined,
  rhoAtExecution: prop.rhoAtExecution !== undefined ? {
            set: prop.rhoAtExecution 
           } : undefined,
  impliedVolatilityAtExecution: prop.impliedVolatilityAtExecution !== undefined ? {
            set: prop.impliedVolatilityAtExecution 
           } : undefined,
  orderType: prop.orderType !== undefined ? {
            set: prop.orderType 
           } : undefined,
  limitPrice: prop.limitPrice !== undefined ? {
            set: prop.limitPrice 
           } : undefined,
  stopPrice: prop.stopPrice !== undefined ? {
            set: prop.stopPrice 
           } : undefined,
  timeInForce: prop.timeInForce !== undefined ? {
            set: prop.timeInForce 
           } : undefined,
  venue: prop.venue !== undefined ? {
            set: prop.venue 
           } : undefined,
  slippage: prop.slippage !== undefined ? {
            set: prop.slippage 
           } : undefined,
  notes: prop.notes !== undefined ? {
            set: prop.notes 
           } : undefined,
  metadata: prop.metadata !== undefined ? {
            set: prop.metadata 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  position: prop.position ? 
  typeof prop.position === 'object' && Object.keys(prop.position).length === 1 && (Object.keys(prop.position)[0] === 'id' || Object.keys(prop.position)[0] === 'symbol')
? {
  connect: {
    id: prop.position.id
  }
} : { upsert: {
      where: {
        id: prop.position.id !== undefined ? {
            equals: prop.position.id
          } : undefined,
        alpacaAccountId: prop.position.alpacaAccountId !== undefined ? {
            equals: prop.position.alpacaAccountId
          } : undefined,
        contractId: prop.position.contractId !== undefined ? {
            equals: prop.position.contractId
          } : undefined,
        tradeId: prop.position.tradeId !== undefined ? {
            equals: prop.position.tradeId
          } : undefined,
      },
      update: {
        id: prop.position.id !== undefined ? {
            set: prop.position.id
          } : undefined,
        alpacaAccountId: prop.position.alpacaAccountId !== undefined ? {
            set: prop.position.alpacaAccountId
          } : undefined,
        status: prop.position.status !== undefined ? {
            set: prop.position.status
          } : undefined,
        openingSide: prop.position.openingSide !== undefined ? {
            set: prop.position.openingSide
          } : undefined,
        quantity: prop.position.quantity !== undefined ? {
            set: prop.position.quantity
          } : undefined,
        entryPrice: prop.position.entryPrice !== undefined ? {
            set: prop.position.entryPrice
          } : undefined,
        entryCost: prop.position.entryCost !== undefined ? {
            set: prop.position.entryCost
          } : undefined,
        entryTime: prop.position.entryTime !== undefined ? {
            set: prop.position.entryTime
          } : undefined,
        exitPrice: prop.position.exitPrice !== undefined ? {
            set: prop.position.exitPrice
          } : undefined,
        exitValue: prop.position.exitValue !== undefined ? {
            set: prop.position.exitValue
          } : undefined,
        exitTime: prop.position.exitTime !== undefined ? {
            set: prop.position.exitTime
          } : undefined,
        currentPrice: prop.position.currentPrice !== undefined ? {
            set: prop.position.currentPrice
          } : undefined,
        currentValue: prop.position.currentValue !== undefined ? {
            set: prop.position.currentValue
          } : undefined,
        unrealizedPnL: prop.position.unrealizedPnL !== undefined ? {
            set: prop.position.unrealizedPnL
          } : undefined,
        unrealizedPnLPercent: prop.position.unrealizedPnLPercent !== undefined ? {
            set: prop.position.unrealizedPnLPercent
          } : undefined,
        realizedPnL: prop.position.realizedPnL !== undefined ? {
            set: prop.position.realizedPnL
          } : undefined,
        realizedPnLPercent: prop.position.realizedPnLPercent !== undefined ? {
            set: prop.position.realizedPnLPercent
          } : undefined,
        totalFees: prop.position.totalFees !== undefined ? {
            set: prop.position.totalFees
          } : undefined,
        currentDelta: prop.position.currentDelta !== undefined ? {
            set: prop.position.currentDelta
          } : undefined,
        currentGamma: prop.position.currentGamma !== undefined ? {
            set: prop.position.currentGamma
          } : undefined,
        currentTheta: prop.position.currentTheta !== undefined ? {
            set: prop.position.currentTheta
          } : undefined,
        currentVega: prop.position.currentVega !== undefined ? {
            set: prop.position.currentVega
          } : undefined,
        currentRho: prop.position.currentRho !== undefined ? {
            set: prop.position.currentRho
          } : undefined,
        currentImpliedVolatility: prop.position.currentImpliedVolatility !== undefined ? {
            set: prop.position.currentImpliedVolatility
          } : undefined,
        daysHeld: prop.position.daysHeld !== undefined ? {
            set: prop.position.daysHeld
          } : undefined,
        exitReason: prop.position.exitReason !== undefined ? {
            set: prop.position.exitReason
          } : undefined,
        strategyType: prop.position.strategyType !== undefined ? {
            set: prop.position.strategyType
          } : undefined,
        tradeId: prop.position.tradeId !== undefined ? {
            set: prop.position.tradeId
          } : undefined,
        metadata: prop.position.metadata !== undefined ? {
            set: prop.position.metadata
          } : undefined,
    contract: prop.position.contract ? 
    typeof prop.position.contract === 'object' && Object.keys(prop.position.contract).length === 1 && (Object.keys(prop.position.contract)[0] === 'id' || Object.keys(prop.position.contract)[0] === 'symbol')
? {
    connect: {
      id: prop.position.contract.id
    }
} : { upsert: {
        where: {
          id: prop.position.contract.id !== undefined ? {
              equals: prop.position.contract.id
            } : undefined,
          symbol: prop.position.contract.symbol !== undefined ? {
              equals: prop.position.contract.symbol
            } : undefined,
        },
        update: {
          id: prop.position.contract.id !== undefined ? {
              set: prop.position.contract.id
            } : undefined,
          symbol: prop.position.contract.symbol !== undefined ? {
              set: prop.position.contract.symbol
            } : undefined,
          contractSymbol: prop.position.contract.contractSymbol !== undefined ? {
              set: prop.position.contract.contractSymbol
            } : undefined,
          optionType: prop.position.contract.optionType !== undefined ? {
              set: prop.position.contract.optionType
            } : undefined,
          strikePrice: prop.position.contract.strikePrice !== undefined ? {
              set: prop.position.contract.strikePrice
            } : undefined,
          expirationDate: prop.position.contract.expirationDate !== undefined ? {
              set: prop.position.contract.expirationDate
            } : undefined,
          daysToExpiration: prop.position.contract.daysToExpiration !== undefined ? {
              set: prop.position.contract.daysToExpiration
            } : undefined,
          lastPrice: prop.position.contract.lastPrice !== undefined ? {
              set: prop.position.contract.lastPrice
            } : undefined,
          bidPrice: prop.position.contract.bidPrice !== undefined ? {
              set: prop.position.contract.bidPrice
            } : undefined,
          askPrice: prop.position.contract.askPrice !== undefined ? {
              set: prop.position.contract.askPrice
            } : undefined,
          midPrice: prop.position.contract.midPrice !== undefined ? {
              set: prop.position.contract.midPrice
            } : undefined,
          bidSize: prop.position.contract.bidSize !== undefined ? {
              set: prop.position.contract.bidSize
            } : undefined,
          askSize: prop.position.contract.askSize !== undefined ? {
              set: prop.position.contract.askSize
            } : undefined,
          volume: prop.position.contract.volume !== undefined ? {
              set: prop.position.contract.volume
            } : undefined,
          openInterest: prop.position.contract.openInterest !== undefined ? {
              set: prop.position.contract.openInterest
            } : undefined,
          impliedVolatility: prop.position.contract.impliedVolatility !== undefined ? {
              set: prop.position.contract.impliedVolatility
            } : undefined,
          delta: prop.position.contract.delta !== undefined ? {
              set: prop.position.contract.delta
            } : undefined,
          gamma: prop.position.contract.gamma !== undefined ? {
              set: prop.position.contract.gamma
            } : undefined,
          theta: prop.position.contract.theta !== undefined ? {
              set: prop.position.contract.theta
            } : undefined,
          vega: prop.position.contract.vega !== undefined ? {
              set: prop.position.contract.vega
            } : undefined,
          rho: prop.position.contract.rho !== undefined ? {
              set: prop.position.contract.rho
            } : undefined,
          inTheMoney: prop.position.contract.inTheMoney !== undefined ? {
              set: prop.position.contract.inTheMoney
            } : undefined,
          intrinsicValue: prop.position.contract.intrinsicValue !== undefined ? {
              set: prop.position.contract.intrinsicValue
            } : undefined,
          extrinsicValue: prop.position.contract.extrinsicValue !== undefined ? {
              set: prop.position.contract.extrinsicValue
            } : undefined,
          theoreticalPrice: prop.position.contract.theoreticalPrice !== undefined ? {
              set: prop.position.contract.theoreticalPrice
            } : undefined,
          underlyingPrice: prop.position.contract.underlyingPrice !== undefined ? {
              set: prop.position.contract.underlyingPrice
            } : undefined,
          metadata: prop.position.contract.metadata !== undefined ? {
              set: prop.position.contract.metadata
            } : undefined,
          dataTimestamp: prop.position.contract.dataTimestamp !== undefined ? {
              set: prop.position.contract.dataTimestamp
            } : undefined,
      greeksHistory: prop.position.contract.greeksHistory ? 
      Array.isArray(prop.position.contract.greeksHistory) && prop.position.contract.greeksHistory.length > 0 && prop.position.contract.greeksHistory.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.position.contract.greeksHistory.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.position.contract.greeksHistory.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp
              } : undefined,
            underlyingPrice: item.underlyingPrice !== undefined ? {
                set: item.underlyingPrice
              } : undefined,
            optionPrice: item.optionPrice !== undefined ? {
                set: item.optionPrice
              } : undefined,
            bidPrice: item.bidPrice !== undefined ? {
                set: item.bidPrice
              } : undefined,
            askPrice: item.askPrice !== undefined ? {
                set: item.askPrice
              } : undefined,
            impliedVolatility: item.impliedVolatility !== undefined ? {
                set: item.impliedVolatility
              } : undefined,
            delta: item.delta !== undefined ? {
                set: item.delta
              } : undefined,
            gamma: item.gamma !== undefined ? {
                set: item.gamma
              } : undefined,
            theta: item.theta !== undefined ? {
                set: item.theta
              } : undefined,
            vega: item.vega !== undefined ? {
                set: item.vega
              } : undefined,
            rho: item.rho !== undefined ? {
                set: item.rho
              } : undefined,
            volume: item.volume !== undefined ? {
                set: item.volume
              } : undefined,
            openInterest: item.openInterest !== undefined ? {
                set: item.openInterest
              } : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? {
                set: item.daysToExpiration
              } : undefined,
            intrinsicValue: item.intrinsicValue !== undefined ? {
                set: item.intrinsicValue
              } : undefined,
            extrinsicValue: item.extrinsicValue !== undefined ? {
                set: item.extrinsicValue
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            volume: item.volume !== undefined ? item.volume : undefined,
            openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      executions: prop.position.contract.executions ? 
      Array.isArray(prop.position.contract.executions) && prop.position.contract.executions.length > 0 && prop.position.contract.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.position.contract.executions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.position.contract.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                set: item.alpacaAccountId
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
          symbol: prop.position.contract.symbol !== undefined ? prop.position.contract.symbol : undefined,
          contractSymbol: prop.position.contract.contractSymbol !== undefined ? prop.position.contract.contractSymbol : undefined,
          optionType: prop.position.contract.optionType !== undefined ? prop.position.contract.optionType : undefined,
          expirationDate: prop.position.contract.expirationDate !== undefined ? prop.position.contract.expirationDate : undefined,
          daysToExpiration: prop.position.contract.daysToExpiration !== undefined ? prop.position.contract.daysToExpiration : undefined,
          bidSize: prop.position.contract.bidSize !== undefined ? prop.position.contract.bidSize : undefined,
          askSize: prop.position.contract.askSize !== undefined ? prop.position.contract.askSize : undefined,
          volume: prop.position.contract.volume !== undefined ? prop.position.contract.volume : undefined,
          openInterest: prop.position.contract.openInterest !== undefined ? prop.position.contract.openInterest : undefined,
          inTheMoney: prop.position.contract.inTheMoney !== undefined ? prop.position.contract.inTheMoney : undefined,
          metadata: prop.position.contract.metadata !== undefined ? prop.position.contract.metadata : undefined,
          dataTimestamp: prop.position.contract.dataTimestamp !== undefined ? prop.position.contract.dataTimestamp : undefined,
      greeksHistory: prop.position.contract.greeksHistory ? 
        Array.isArray(prop.position.contract.greeksHistory) && prop.position.contract.greeksHistory.length > 0 &&  prop.position.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.position.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.position.contract.greeksHistory.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            volume: item.volume !== undefined ? item.volume : undefined,
            openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      executions: prop.position.contract.executions ? 
        Array.isArray(prop.position.contract.executions) && prop.position.contract.executions.length > 0 &&  prop.position.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.position.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.position.contract.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
        alpacaAccountId: prop.position.alpacaAccountId !== undefined ? prop.position.alpacaAccountId : undefined,
        status: prop.position.status !== undefined ? prop.position.status : undefined,
        openingSide: prop.position.openingSide !== undefined ? prop.position.openingSide : undefined,
        quantity: prop.position.quantity !== undefined ? prop.position.quantity : undefined,
        entryTime: prop.position.entryTime !== undefined ? prop.position.entryTime : undefined,
        exitTime: prop.position.exitTime !== undefined ? prop.position.exitTime : undefined,
        daysHeld: prop.position.daysHeld !== undefined ? prop.position.daysHeld : undefined,
        exitReason: prop.position.exitReason !== undefined ? prop.position.exitReason : undefined,
        strategyType: prop.position.strategyType !== undefined ? prop.position.strategyType : undefined,
        tradeId: prop.position.tradeId !== undefined ? prop.position.tradeId : undefined,
        metadata: prop.position.metadata !== undefined ? prop.position.metadata : undefined,
    contract: prop.position.contract ? 
      typeof prop.position.contract === 'object' && Object.keys(prop.position.contract).length === 1 && Object.keys(prop.position.contract)[0] === 'id'
    ? { connect: {
          id: prop.position.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.position.contract.id !== undefined ? prop.position.contract.id : undefined,
          symbol: prop.position.contract.symbol !== undefined ? {
              equals: prop.position.contract.symbol 
             } : undefined,
        },
        create: {
          symbol: prop.position.contract.symbol !== undefined ? prop.position.contract.symbol : undefined,
          contractSymbol: prop.position.contract.contractSymbol !== undefined ? prop.position.contract.contractSymbol : undefined,
          optionType: prop.position.contract.optionType !== undefined ? prop.position.contract.optionType : undefined,
          expirationDate: prop.position.contract.expirationDate !== undefined ? prop.position.contract.expirationDate : undefined,
          daysToExpiration: prop.position.contract.daysToExpiration !== undefined ? prop.position.contract.daysToExpiration : undefined,
          bidSize: prop.position.contract.bidSize !== undefined ? prop.position.contract.bidSize : undefined,
          askSize: prop.position.contract.askSize !== undefined ? prop.position.contract.askSize : undefined,
          volume: prop.position.contract.volume !== undefined ? prop.position.contract.volume : undefined,
          openInterest: prop.position.contract.openInterest !== undefined ? prop.position.contract.openInterest : undefined,
          inTheMoney: prop.position.contract.inTheMoney !== undefined ? prop.position.contract.inTheMoney : undefined,
          metadata: prop.position.contract.metadata !== undefined ? prop.position.contract.metadata : undefined,
          dataTimestamp: prop.position.contract.dataTimestamp !== undefined ? prop.position.contract.dataTimestamp : undefined,
      greeksHistory: prop.position.contract.greeksHistory ? 
        Array.isArray(prop.position.contract.greeksHistory) && prop.position.contract.greeksHistory.length > 0 &&  prop.position.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.position.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.position.contract.greeksHistory.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            volume: item.volume !== undefined ? item.volume : undefined,
            openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
            daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      executions: prop.position.contract.executions ? 
        Array.isArray(prop.position.contract.executions) && prop.position.contract.executions.length > 0 &&  prop.position.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.position.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.position.contract.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
  contract: prop.contract ? 
  typeof prop.contract === 'object' && Object.keys(prop.contract).length === 1 && (Object.keys(prop.contract)[0] === 'id' || Object.keys(prop.contract)[0] === 'symbol')
? {
  connect: {
    id: prop.contract.id
  }
} : { upsert: {
      where: {
        id: prop.contract.id !== undefined ? {
            equals: prop.contract.id
          } : undefined,
        symbol: prop.contract.symbol !== undefined ? {
            equals: prop.contract.symbol
          } : undefined,
      },
      update: {
        id: prop.contract.id !== undefined ? {
            set: prop.contract.id
          } : undefined,
        symbol: prop.contract.symbol !== undefined ? {
            set: prop.contract.symbol
          } : undefined,
        contractSymbol: prop.contract.contractSymbol !== undefined ? {
            set: prop.contract.contractSymbol
          } : undefined,
        optionType: prop.contract.optionType !== undefined ? {
            set: prop.contract.optionType
          } : undefined,
        strikePrice: prop.contract.strikePrice !== undefined ? {
            set: prop.contract.strikePrice
          } : undefined,
        expirationDate: prop.contract.expirationDate !== undefined ? {
            set: prop.contract.expirationDate
          } : undefined,
        daysToExpiration: prop.contract.daysToExpiration !== undefined ? {
            set: prop.contract.daysToExpiration
          } : undefined,
        lastPrice: prop.contract.lastPrice !== undefined ? {
            set: prop.contract.lastPrice
          } : undefined,
        bidPrice: prop.contract.bidPrice !== undefined ? {
            set: prop.contract.bidPrice
          } : undefined,
        askPrice: prop.contract.askPrice !== undefined ? {
            set: prop.contract.askPrice
          } : undefined,
        midPrice: prop.contract.midPrice !== undefined ? {
            set: prop.contract.midPrice
          } : undefined,
        bidSize: prop.contract.bidSize !== undefined ? {
            set: prop.contract.bidSize
          } : undefined,
        askSize: prop.contract.askSize !== undefined ? {
            set: prop.contract.askSize
          } : undefined,
        volume: prop.contract.volume !== undefined ? {
            set: prop.contract.volume
          } : undefined,
        openInterest: prop.contract.openInterest !== undefined ? {
            set: prop.contract.openInterest
          } : undefined,
        impliedVolatility: prop.contract.impliedVolatility !== undefined ? {
            set: prop.contract.impliedVolatility
          } : undefined,
        delta: prop.contract.delta !== undefined ? {
            set: prop.contract.delta
          } : undefined,
        gamma: prop.contract.gamma !== undefined ? {
            set: prop.contract.gamma
          } : undefined,
        theta: prop.contract.theta !== undefined ? {
            set: prop.contract.theta
          } : undefined,
        vega: prop.contract.vega !== undefined ? {
            set: prop.contract.vega
          } : undefined,
        rho: prop.contract.rho !== undefined ? {
            set: prop.contract.rho
          } : undefined,
        inTheMoney: prop.contract.inTheMoney !== undefined ? {
            set: prop.contract.inTheMoney
          } : undefined,
        intrinsicValue: prop.contract.intrinsicValue !== undefined ? {
            set: prop.contract.intrinsicValue
          } : undefined,
        extrinsicValue: prop.contract.extrinsicValue !== undefined ? {
            set: prop.contract.extrinsicValue
          } : undefined,
        theoreticalPrice: prop.contract.theoreticalPrice !== undefined ? {
            set: prop.contract.theoreticalPrice
          } : undefined,
        underlyingPrice: prop.contract.underlyingPrice !== undefined ? {
            set: prop.contract.underlyingPrice
          } : undefined,
        metadata: prop.contract.metadata !== undefined ? {
            set: prop.contract.metadata
          } : undefined,
        dataTimestamp: prop.contract.dataTimestamp !== undefined ? {
            set: prop.contract.dataTimestamp
          } : undefined,
    positions: prop.contract.positions ? 
    Array.isArray(prop.contract.positions) && prop.contract.positions.length > 0 && prop.contract.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.contract.positions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.contract.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
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
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              set: item.alpacaAccountId
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
      executions: item.executions ? 
      Array.isArray(item.executions) && item.executions.length > 0 && item.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.executions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                set: item.alpacaAccountId
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
          alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      executions: item.executions ? 
        Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      }))
    } : undefined,
    greeksHistory: prop.contract.greeksHistory ? 
    Array.isArray(prop.contract.greeksHistory) && prop.contract.greeksHistory.length > 0 && prop.contract.greeksHistory.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.contract.greeksHistory.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.contract.greeksHistory.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp
            } : undefined,
          underlyingPrice: item.underlyingPrice !== undefined ? {
              set: item.underlyingPrice
            } : undefined,
          optionPrice: item.optionPrice !== undefined ? {
              set: item.optionPrice
            } : undefined,
          bidPrice: item.bidPrice !== undefined ? {
              set: item.bidPrice
            } : undefined,
          askPrice: item.askPrice !== undefined ? {
              set: item.askPrice
            } : undefined,
          impliedVolatility: item.impliedVolatility !== undefined ? {
              set: item.impliedVolatility
            } : undefined,
          delta: item.delta !== undefined ? {
              set: item.delta
            } : undefined,
          gamma: item.gamma !== undefined ? {
              set: item.gamma
            } : undefined,
          theta: item.theta !== undefined ? {
              set: item.theta
            } : undefined,
          vega: item.vega !== undefined ? {
              set: item.vega
            } : undefined,
          rho: item.rho !== undefined ? {
              set: item.rho
            } : undefined,
          volume: item.volume !== undefined ? {
              set: item.volume
            } : undefined,
          openInterest: item.openInterest !== undefined ? {
              set: item.openInterest
            } : undefined,
          daysToExpiration: item.daysToExpiration !== undefined ? {
              set: item.daysToExpiration
            } : undefined,
          intrinsicValue: item.intrinsicValue !== undefined ? {
              set: item.intrinsicValue
            } : undefined,
          extrinsicValue: item.extrinsicValue !== undefined ? {
              set: item.extrinsicValue
            } : undefined,
          metadata: item.metadata !== undefined ? {
              set: item.metadata
            } : undefined,
        },
        create: {
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          volume: item.volume !== undefined ? item.volume : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
          metadata: item.metadata !== undefined ? item.metadata : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        symbol: prop.contract.symbol !== undefined ? prop.contract.symbol : undefined,
        contractSymbol: prop.contract.contractSymbol !== undefined ? prop.contract.contractSymbol : undefined,
        optionType: prop.contract.optionType !== undefined ? prop.contract.optionType : undefined,
        expirationDate: prop.contract.expirationDate !== undefined ? prop.contract.expirationDate : undefined,
        daysToExpiration: prop.contract.daysToExpiration !== undefined ? prop.contract.daysToExpiration : undefined,
        bidSize: prop.contract.bidSize !== undefined ? prop.contract.bidSize : undefined,
        askSize: prop.contract.askSize !== undefined ? prop.contract.askSize : undefined,
        volume: prop.contract.volume !== undefined ? prop.contract.volume : undefined,
        openInterest: prop.contract.openInterest !== undefined ? prop.contract.openInterest : undefined,
        inTheMoney: prop.contract.inTheMoney !== undefined ? prop.contract.inTheMoney : undefined,
        metadata: prop.contract.metadata !== undefined ? prop.contract.metadata : undefined,
        dataTimestamp: prop.contract.dataTimestamp !== undefined ? prop.contract.dataTimestamp : undefined,
    positions: prop.contract.positions ? 
      Array.isArray(prop.contract.positions) && prop.contract.positions.length > 0 &&  prop.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.contract.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.contract.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      executions: item.executions ? 
        Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.executions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.alpacaAccountId !== undefined ? item.alpacaAccountId : undefined,
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
      }))
    } : undefined,
    greeksHistory: prop.contract.greeksHistory ? 
      Array.isArray(prop.contract.greeksHistory) && prop.contract.greeksHistory.length > 0 &&  prop.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.contract.greeksHistory.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.contract.greeksHistory.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          volume: item.volume !== undefined ? item.volume : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          daysToExpiration: item.daysToExpiration !== undefined ? item.daysToExpiration : undefined,
          metadata: item.metadata !== undefined ? item.metadata : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_OPTIONSTRADEEXECUTION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyOptionsTradeExecution) {
          return response.data.updateManyOptionsTradeExecution;
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
   * Delete a single OptionsTradeExecution record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted OptionsTradeExecution or null.
   */
  async delete(props: OptionsTradeExecutionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsTradeExecutionType> {
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

        const DELETE_ONE_OPTIONSTRADEEXECUTION = gql`
          mutation deleteOneOptionsTradeExecution($where: OptionsTradeExecutionWhereUniqueInput!) {
            deleteOneOptionsTradeExecution(where: $where) {
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
          mutation: DELETE_ONE_OPTIONSTRADEEXECUTION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneOptionsTradeExecution) {
          return response.data.deleteOneOptionsTradeExecution;
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
   * Retrieve a single OptionsTradeExecution record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved OptionsTradeExecution or null.
   */
  async get(props: OptionsTradeExecutionType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<OptionsTradeExecutionType | null> {
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

        const GET_OPTIONSTRADEEXECUTION = gql`
          query getOptionsTradeExecution($where: OptionsTradeExecutionWhereUniqueInput!) {
            getOptionsTradeExecution(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  positionId: props.positionId !== undefined ? {
    equals: props.positionId 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  brokerOrderId: props.brokerOrderId !== undefined ? {
    equals: props.brokerOrderId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_OPTIONSTRADEEXECUTION,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getOptionsTradeExecution ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No OptionsTradeExecution found') {
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
   * Retrieve all OptionsTradeExecutions records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of OptionsTradeExecution records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsTradeExecutionType[] | null> {
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

        const GET_ALL_OPTIONSTRADEEXECUTION = gql`
          query getAllOptionsTradeExecution {
            optionsTradeExecutions {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_OPTIONSTRADEEXECUTION,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.optionsTradeExecutions ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No OptionsTradeExecution found') {
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
   * Find multiple OptionsTradeExecution records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found OptionsTradeExecution records or null.
   */
  async findMany(props: OptionsTradeExecutionType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<OptionsTradeExecutionType[] | null> {
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

        const FIND_MANY_OPTIONSTRADEEXECUTION = gql`
          query findManyOptionsTradeExecution($where: OptionsTradeExecutionWhereInput!) {
            optionsTradeExecutions(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  positionId: props.positionId !== undefined ? {
    equals: props.positionId 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  brokerOrderId: props.brokerOrderId !== undefined ? {
    equals: props.brokerOrderId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_OPTIONSTRADEEXECUTION,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.optionstradeexecutions) {
          return response.data.optionsTradeExecutions;
        } else {
          return [] as OptionsTradeExecutionType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No OptionsTradeExecution found') {
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
