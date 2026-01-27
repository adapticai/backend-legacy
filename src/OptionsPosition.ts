
  
import { OptionsPosition as OptionsPositionType } from './generated/typegraphql-prisma/models/OptionsPosition';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the OptionsPosition model.
   */

  const selectionSet = `
    
  id
  alpacaAccountId
  contractId
  contract {
    id
    symbol
    contractSymbol
    optionType
    strikePrice
    expirationDate
    daysToExpiration
    lastPrice
    bidPrice
    askPrice
    midPrice
    bidSize
    askSize
    volume
    openInterest
    impliedVolatility
    delta
    gamma
    theta
    vega
    rho
    inTheMoney
    intrinsicValue
    extrinsicValue
    theoreticalPrice
    underlyingPrice
    metadata
    dataTimestamp
    createdAt
    updatedAt
    greeksHistory {
      id
      contractId
      timestamp
      underlyingPrice
      optionPrice
      bidPrice
      askPrice
      impliedVolatility
      delta
      gamma
      theta
      vega
      rho
      volume
      openInterest
      daysToExpiration
      intrinsicValue
      extrinsicValue
      metadata
      createdAt
    }
    executions {
      id
      positionId
      position {
id
      }
      contractId
      alpacaAccountId
      brokerOrderId
      executionSide
      quantity
      executionPrice
      executionValue
      fees
      executionTime
      underlyingPriceAtExecution
      deltaAtExecution
      gammaAtExecution
      thetaAtExecution
      vegaAtExecution
      rhoAtExecution
      impliedVolatilityAtExecution
      orderType
      limitPrice
      stopPrice
      timeInForce
      venue
      slippage
      notes
      metadata
      createdAt
      updatedAt
    }
  }
  status
  openingSide
  quantity
  entryPrice
  entryCost
  entryTime
  exitPrice
  exitValue
  exitTime
  currentPrice
  currentValue
  unrealizedPnL
  unrealizedPnLPercent
  realizedPnL
  realizedPnLPercent
  totalFees
  currentDelta
  currentGamma
  currentTheta
  currentVega
  currentRho
  currentImpliedVolatility
  daysHeld
  exitReason
  strategyType
  tradeId
  metadata
  createdAt
  updatedAt
  executions {
    id
    positionId
    contractId
    contract {
      id
      symbol
      contractSymbol
      optionType
      strikePrice
      expirationDate
      daysToExpiration
      lastPrice
      bidPrice
      askPrice
      midPrice
      bidSize
      askSize
      volume
      openInterest
      impliedVolatility
      delta
      gamma
      theta
      vega
      rho
      inTheMoney
      intrinsicValue
      extrinsicValue
      theoreticalPrice
      underlyingPrice
      metadata
      dataTimestamp
      createdAt
      updatedAt
      positions {
id
      }
      greeksHistory {
        id
        contractId
        timestamp
        underlyingPrice
        optionPrice
        bidPrice
        askPrice
        impliedVolatility
        delta
        gamma
        theta
        vega
        rho
        volume
        openInterest
        daysToExpiration
        intrinsicValue
        extrinsicValue
        metadata
        createdAt
      }
    }
    alpacaAccountId
    brokerOrderId
    executionSide
    quantity
    executionPrice
    executionValue
    fees
    executionTime
    underlyingPriceAtExecution
    deltaAtExecution
    gammaAtExecution
    thetaAtExecution
    vegaAtExecution
    rhoAtExecution
    impliedVolatilityAtExecution
    orderType
    limitPrice
    stopPrice
    timeInForce
    venue
    slippage
    notes
    metadata
    createdAt
    updatedAt
  }

  `;

  export const OptionsPosition = {

    /**
     * Create a new OptionsPosition record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created OptionsPosition or null.
     */

    /**
     * Create a new OptionsPosition record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created OptionsPosition or null.
     */
    async create(props: OptionsPositionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsPositionType> {
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

          const CREATE_ONE_OPTIONSPOSITION = gql`
              mutation createOneOptionsPosition($data: OptionsPositionCreateInput!) {
                createOneOptionsPosition(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
  status: props.status !== undefined ? props.status : undefined,
  openingSide: props.openingSide !== undefined ? props.openingSide : undefined,
  quantity: props.quantity !== undefined ? props.quantity : undefined,
  entryTime: props.entryTime !== undefined ? props.entryTime : undefined,
  exitTime: props.exitTime !== undefined ? props.exitTime : undefined,
  daysHeld: props.daysHeld !== undefined ? props.daysHeld : undefined,
  exitReason: props.exitReason !== undefined ? props.exitReason : undefined,
  strategyType: props.strategyType !== undefined ? props.strategyType : undefined,
  tradeId: props.tradeId !== undefined ? props.tradeId : undefined,
  metadata: props.metadata !== undefined ? props.metadata : undefined,
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
    executions: props.contract.executions ? 
      Array.isArray(props.contract.executions) && props.contract.executions.length > 0 &&  props.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.executions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.executions.map((item: any) => ({
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                equals: item.position.alpacaAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? item.position.alpacaAccountId : undefined,
            status: item.position.status !== undefined ? item.position.status : undefined,
            openingSide: item.position.openingSide !== undefined ? item.position.openingSide : undefined,
            quantity: item.position.quantity !== undefined ? item.position.quantity : undefined,
            entryTime: item.position.entryTime !== undefined ? item.position.entryTime : undefined,
            exitTime: item.position.exitTime !== undefined ? item.position.exitTime : undefined,
            daysHeld: item.position.daysHeld !== undefined ? item.position.daysHeld : undefined,
            exitReason: item.position.exitReason !== undefined ? item.position.exitReason : undefined,
            strategyType: item.position.strategyType !== undefined ? item.position.strategyType : undefined,
            tradeId: item.position.tradeId !== undefined ? item.position.tradeId : undefined,
            metadata: item.position.metadata !== undefined ? item.position.metadata : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  executions: props.executions ? 
    Array.isArray(props.executions) && props.executions.length > 0 &&  props.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.executions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.executions.map((item: any) => ({
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
    contract: item.contract ? 
      typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
          id: item.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.contract.id !== undefined ? item.contract.id : undefined,
          symbol: item.contract.symbol !== undefined ? {
              equals: item.contract.symbol 
             } : undefined,
        },
        create: {
          symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
          contractSymbol: item.contract.contractSymbol !== undefined ? item.contract.contractSymbol : undefined,
          optionType: item.contract.optionType !== undefined ? item.contract.optionType : undefined,
          expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
          daysToExpiration: item.contract.daysToExpiration !== undefined ? item.contract.daysToExpiration : undefined,
          bidSize: item.contract.bidSize !== undefined ? item.contract.bidSize : undefined,
          askSize: item.contract.askSize !== undefined ? item.contract.askSize : undefined,
          volume: item.contract.volume !== undefined ? item.contract.volume : undefined,
          openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
          inTheMoney: item.contract.inTheMoney !== undefined ? item.contract.inTheMoney : undefined,
          metadata: item.contract.metadata !== undefined ? item.contract.metadata : undefined,
          dataTimestamp: item.contract.dataTimestamp !== undefined ? item.contract.dataTimestamp : undefined,
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      greeksHistory: item.contract.greeksHistory ? 
        Array.isArray(item.contract.greeksHistory) && item.contract.greeksHistory.length > 0 &&  item.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.greeksHistory.map((item: any) => ({
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
    }))
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_OPTIONSPOSITION,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneOptionsPosition) {
            return response.data.createOneOptionsPosition;
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
   * Create multiple OptionsPosition records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of OptionsPosition objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: OptionsPositionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_OPTIONSPOSITION = gql`
          mutation createManyOptionsPosition($data: [OptionsPositionCreateManyInput!]!) {
            createManyOptionsPosition(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  contractId: prop.contractId !== undefined ? prop.contractId : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  openingSide: prop.openingSide !== undefined ? prop.openingSide : undefined,
  quantity: prop.quantity !== undefined ? prop.quantity : undefined,
  entryTime: prop.entryTime !== undefined ? prop.entryTime : undefined,
  exitTime: prop.exitTime !== undefined ? prop.exitTime : undefined,
  daysHeld: prop.daysHeld !== undefined ? prop.daysHeld : undefined,
  exitReason: prop.exitReason !== undefined ? prop.exitReason : undefined,
  strategyType: prop.strategyType !== undefined ? prop.strategyType : undefined,
  tradeId: prop.tradeId !== undefined ? prop.tradeId : undefined,
  metadata: prop.metadata !== undefined ? prop.metadata : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_OPTIONSPOSITION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyOptionsPosition) {
          return response.data.createManyOptionsPosition;
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
   * Update a single OptionsPosition record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated OptionsPosition or null.
   */
  async update(props: OptionsPositionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsPositionType> {
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

        const UPDATE_ONE_OPTIONSPOSITION = gql`
          mutation updateOneOptionsPosition($data: OptionsPositionUpdateInput!, $where: OptionsPositionWhereUniqueInput!) {
            updateOneOptionsPosition(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
            set: props.alpacaAccountId 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  openingSide: props.openingSide !== undefined ? {
            set: props.openingSide 
           } : undefined,
  quantity: props.quantity !== undefined ? {
            set: props.quantity 
           } : undefined,
  entryPrice: props.entryPrice !== undefined ? {
            set: props.entryPrice 
           } : undefined,
  entryCost: props.entryCost !== undefined ? {
            set: props.entryCost 
           } : undefined,
  entryTime: props.entryTime !== undefined ? {
            set: props.entryTime 
           } : undefined,
  exitPrice: props.exitPrice !== undefined ? {
            set: props.exitPrice 
           } : undefined,
  exitValue: props.exitValue !== undefined ? {
            set: props.exitValue 
           } : undefined,
  exitTime: props.exitTime !== undefined ? {
            set: props.exitTime 
           } : undefined,
  currentPrice: props.currentPrice !== undefined ? {
            set: props.currentPrice 
           } : undefined,
  currentValue: props.currentValue !== undefined ? {
            set: props.currentValue 
           } : undefined,
  unrealizedPnL: props.unrealizedPnL !== undefined ? {
            set: props.unrealizedPnL 
           } : undefined,
  unrealizedPnLPercent: props.unrealizedPnLPercent !== undefined ? {
            set: props.unrealizedPnLPercent 
           } : undefined,
  realizedPnL: props.realizedPnL !== undefined ? {
            set: props.realizedPnL 
           } : undefined,
  realizedPnLPercent: props.realizedPnLPercent !== undefined ? {
            set: props.realizedPnLPercent 
           } : undefined,
  totalFees: props.totalFees !== undefined ? {
            set: props.totalFees 
           } : undefined,
  currentDelta: props.currentDelta !== undefined ? {
            set: props.currentDelta 
           } : undefined,
  currentGamma: props.currentGamma !== undefined ? {
            set: props.currentGamma 
           } : undefined,
  currentTheta: props.currentTheta !== undefined ? {
            set: props.currentTheta 
           } : undefined,
  currentVega: props.currentVega !== undefined ? {
            set: props.currentVega 
           } : undefined,
  currentRho: props.currentRho !== undefined ? {
            set: props.currentRho 
           } : undefined,
  currentImpliedVolatility: props.currentImpliedVolatility !== undefined ? {
            set: props.currentImpliedVolatility 
           } : undefined,
  daysHeld: props.daysHeld !== undefined ? {
            set: props.daysHeld 
           } : undefined,
  exitReason: props.exitReason !== undefined ? {
            set: props.exitReason 
           } : undefined,
  strategyType: props.strategyType !== undefined ? {
            set: props.strategyType 
           } : undefined,
  tradeId: props.tradeId !== undefined ? {
            set: props.tradeId 
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
    executions: props.contract.executions ? 
    Array.isArray(props.contract.executions) && props.contract.executions.length > 0 && props.contract.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.contract.executions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.contract.executions.map((item: any) => ({
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
      position: item.position ? 
      typeof item.position === 'object' && Object.keys(item.position).length === 1 && (Object.keys(item.position)[0] === 'id' || Object.keys(item.position)[0] === 'symbol')
? {
      connect: {
        id: item.position.id
      }
} : { upsert: {
          where: {
            id: item.position.id !== undefined ? {
                equals: item.position.id
              } : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                equals: item.position.alpacaAccountId
              } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId
              } : undefined,
            tradeId: item.position.tradeId !== undefined ? {
                equals: item.position.tradeId
              } : undefined,
          },
          update: {
            id: item.position.id !== undefined ? {
                set: item.position.id
              } : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                set: item.position.alpacaAccountId
              } : undefined,
            status: item.position.status !== undefined ? {
                set: item.position.status
              } : undefined,
            openingSide: item.position.openingSide !== undefined ? {
                set: item.position.openingSide
              } : undefined,
            quantity: item.position.quantity !== undefined ? {
                set: item.position.quantity
              } : undefined,
            entryPrice: item.position.entryPrice !== undefined ? {
                set: item.position.entryPrice
              } : undefined,
            entryCost: item.position.entryCost !== undefined ? {
                set: item.position.entryCost
              } : undefined,
            entryTime: item.position.entryTime !== undefined ? {
                set: item.position.entryTime
              } : undefined,
            exitPrice: item.position.exitPrice !== undefined ? {
                set: item.position.exitPrice
              } : undefined,
            exitValue: item.position.exitValue !== undefined ? {
                set: item.position.exitValue
              } : undefined,
            exitTime: item.position.exitTime !== undefined ? {
                set: item.position.exitTime
              } : undefined,
            currentPrice: item.position.currentPrice !== undefined ? {
                set: item.position.currentPrice
              } : undefined,
            currentValue: item.position.currentValue !== undefined ? {
                set: item.position.currentValue
              } : undefined,
            unrealizedPnL: item.position.unrealizedPnL !== undefined ? {
                set: item.position.unrealizedPnL
              } : undefined,
            unrealizedPnLPercent: item.position.unrealizedPnLPercent !== undefined ? {
                set: item.position.unrealizedPnLPercent
              } : undefined,
            realizedPnL: item.position.realizedPnL !== undefined ? {
                set: item.position.realizedPnL
              } : undefined,
            realizedPnLPercent: item.position.realizedPnLPercent !== undefined ? {
                set: item.position.realizedPnLPercent
              } : undefined,
            totalFees: item.position.totalFees !== undefined ? {
                set: item.position.totalFees
              } : undefined,
            currentDelta: item.position.currentDelta !== undefined ? {
                set: item.position.currentDelta
              } : undefined,
            currentGamma: item.position.currentGamma !== undefined ? {
                set: item.position.currentGamma
              } : undefined,
            currentTheta: item.position.currentTheta !== undefined ? {
                set: item.position.currentTheta
              } : undefined,
            currentVega: item.position.currentVega !== undefined ? {
                set: item.position.currentVega
              } : undefined,
            currentRho: item.position.currentRho !== undefined ? {
                set: item.position.currentRho
              } : undefined,
            currentImpliedVolatility: item.position.currentImpliedVolatility !== undefined ? {
                set: item.position.currentImpliedVolatility
              } : undefined,
            daysHeld: item.position.daysHeld !== undefined ? {
                set: item.position.daysHeld
              } : undefined,
            exitReason: item.position.exitReason !== undefined ? {
                set: item.position.exitReason
              } : undefined,
            strategyType: item.position.strategyType !== undefined ? {
                set: item.position.strategyType
              } : undefined,
            tradeId: item.position.tradeId !== undefined ? {
                set: item.position.tradeId
              } : undefined,
            metadata: item.position.metadata !== undefined ? {
                set: item.position.metadata
              } : undefined,
          },
          create: {
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? item.position.alpacaAccountId : undefined,
            status: item.position.status !== undefined ? item.position.status : undefined,
            openingSide: item.position.openingSide !== undefined ? item.position.openingSide : undefined,
            quantity: item.position.quantity !== undefined ? item.position.quantity : undefined,
            entryTime: item.position.entryTime !== undefined ? item.position.entryTime : undefined,
            exitTime: item.position.exitTime !== undefined ? item.position.exitTime : undefined,
            daysHeld: item.position.daysHeld !== undefined ? item.position.daysHeld : undefined,
            exitReason: item.position.exitReason !== undefined ? item.position.exitReason : undefined,
            strategyType: item.position.strategyType !== undefined ? item.position.strategyType : undefined,
            tradeId: item.position.tradeId !== undefined ? item.position.tradeId : undefined,
            metadata: item.position.metadata !== undefined ? item.position.metadata : undefined,
          },
        }
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                equals: item.position.alpacaAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? item.position.alpacaAccountId : undefined,
            status: item.position.status !== undefined ? item.position.status : undefined,
            openingSide: item.position.openingSide !== undefined ? item.position.openingSide : undefined,
            quantity: item.position.quantity !== undefined ? item.position.quantity : undefined,
            entryTime: item.position.entryTime !== undefined ? item.position.entryTime : undefined,
            exitTime: item.position.exitTime !== undefined ? item.position.exitTime : undefined,
            daysHeld: item.position.daysHeld !== undefined ? item.position.daysHeld : undefined,
            exitReason: item.position.exitReason !== undefined ? item.position.exitReason : undefined,
            strategyType: item.position.strategyType !== undefined ? item.position.strategyType : undefined,
            tradeId: item.position.tradeId !== undefined ? item.position.tradeId : undefined,
            metadata: item.position.metadata !== undefined ? item.position.metadata : undefined,
          },
        }
      } : undefined,
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
    executions: props.contract.executions ? 
      Array.isArray(props.contract.executions) && props.contract.executions.length > 0 &&  props.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.executions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.executions.map((item: any) => ({
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                equals: item.position.alpacaAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? item.position.alpacaAccountId : undefined,
            status: item.position.status !== undefined ? item.position.status : undefined,
            openingSide: item.position.openingSide !== undefined ? item.position.openingSide : undefined,
            quantity: item.position.quantity !== undefined ? item.position.quantity : undefined,
            entryTime: item.position.entryTime !== undefined ? item.position.entryTime : undefined,
            exitTime: item.position.exitTime !== undefined ? item.position.exitTime : undefined,
            daysHeld: item.position.daysHeld !== undefined ? item.position.daysHeld : undefined,
            exitReason: item.position.exitReason !== undefined ? item.position.exitReason : undefined,
            strategyType: item.position.strategyType !== undefined ? item.position.strategyType : undefined,
            tradeId: item.position.tradeId !== undefined ? item.position.tradeId : undefined,
            metadata: item.position.metadata !== undefined ? item.position.metadata : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  executions: props.executions ? 
  Array.isArray(props.executions) && props.executions.length > 0 && props.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.executions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.executions.map((item: any) => ({
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
    contract: item.contract ? 
    typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && (Object.keys(item.contract)[0] === 'id' || Object.keys(item.contract)[0] === 'symbol')
? {
    connect: {
      id: item.contract.id
    }
} : { upsert: {
        where: {
          id: item.contract.id !== undefined ? {
              equals: item.contract.id
            } : undefined,
          symbol: item.contract.symbol !== undefined ? {
              equals: item.contract.symbol
            } : undefined,
        },
        update: {
          id: item.contract.id !== undefined ? {
              set: item.contract.id
            } : undefined,
          symbol: item.contract.symbol !== undefined ? {
              set: item.contract.symbol
            } : undefined,
          contractSymbol: item.contract.contractSymbol !== undefined ? {
              set: item.contract.contractSymbol
            } : undefined,
          optionType: item.contract.optionType !== undefined ? {
              set: item.contract.optionType
            } : undefined,
          strikePrice: item.contract.strikePrice !== undefined ? {
              set: item.contract.strikePrice
            } : undefined,
          expirationDate: item.contract.expirationDate !== undefined ? {
              set: item.contract.expirationDate
            } : undefined,
          daysToExpiration: item.contract.daysToExpiration !== undefined ? {
              set: item.contract.daysToExpiration
            } : undefined,
          lastPrice: item.contract.lastPrice !== undefined ? {
              set: item.contract.lastPrice
            } : undefined,
          bidPrice: item.contract.bidPrice !== undefined ? {
              set: item.contract.bidPrice
            } : undefined,
          askPrice: item.contract.askPrice !== undefined ? {
              set: item.contract.askPrice
            } : undefined,
          midPrice: item.contract.midPrice !== undefined ? {
              set: item.contract.midPrice
            } : undefined,
          bidSize: item.contract.bidSize !== undefined ? {
              set: item.contract.bidSize
            } : undefined,
          askSize: item.contract.askSize !== undefined ? {
              set: item.contract.askSize
            } : undefined,
          volume: item.contract.volume !== undefined ? {
              set: item.contract.volume
            } : undefined,
          openInterest: item.contract.openInterest !== undefined ? {
              set: item.contract.openInterest
            } : undefined,
          impliedVolatility: item.contract.impliedVolatility !== undefined ? {
              set: item.contract.impliedVolatility
            } : undefined,
          delta: item.contract.delta !== undefined ? {
              set: item.contract.delta
            } : undefined,
          gamma: item.contract.gamma !== undefined ? {
              set: item.contract.gamma
            } : undefined,
          theta: item.contract.theta !== undefined ? {
              set: item.contract.theta
            } : undefined,
          vega: item.contract.vega !== undefined ? {
              set: item.contract.vega
            } : undefined,
          rho: item.contract.rho !== undefined ? {
              set: item.contract.rho
            } : undefined,
          inTheMoney: item.contract.inTheMoney !== undefined ? {
              set: item.contract.inTheMoney
            } : undefined,
          intrinsicValue: item.contract.intrinsicValue !== undefined ? {
              set: item.contract.intrinsicValue
            } : undefined,
          extrinsicValue: item.contract.extrinsicValue !== undefined ? {
              set: item.contract.extrinsicValue
            } : undefined,
          theoreticalPrice: item.contract.theoreticalPrice !== undefined ? {
              set: item.contract.theoreticalPrice
            } : undefined,
          underlyingPrice: item.contract.underlyingPrice !== undefined ? {
              set: item.contract.underlyingPrice
            } : undefined,
          metadata: item.contract.metadata !== undefined ? {
              set: item.contract.metadata
            } : undefined,
          dataTimestamp: item.contract.dataTimestamp !== undefined ? {
              set: item.contract.dataTimestamp
            } : undefined,
      positions: item.contract.positions ? 
      Array.isArray(item.contract.positions) && item.contract.positions.length > 0 && item.contract.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      greeksHistory: item.contract.greeksHistory ? 
      Array.isArray(item.contract.greeksHistory) && item.contract.greeksHistory.length > 0 && item.contract.greeksHistory.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.greeksHistory.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.greeksHistory.map((item: any) => ({
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
          symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
          contractSymbol: item.contract.contractSymbol !== undefined ? item.contract.contractSymbol : undefined,
          optionType: item.contract.optionType !== undefined ? item.contract.optionType : undefined,
          expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
          daysToExpiration: item.contract.daysToExpiration !== undefined ? item.contract.daysToExpiration : undefined,
          bidSize: item.contract.bidSize !== undefined ? item.contract.bidSize : undefined,
          askSize: item.contract.askSize !== undefined ? item.contract.askSize : undefined,
          volume: item.contract.volume !== undefined ? item.contract.volume : undefined,
          openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
          inTheMoney: item.contract.inTheMoney !== undefined ? item.contract.inTheMoney : undefined,
          metadata: item.contract.metadata !== undefined ? item.contract.metadata : undefined,
          dataTimestamp: item.contract.dataTimestamp !== undefined ? item.contract.dataTimestamp : undefined,
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      greeksHistory: item.contract.greeksHistory ? 
        Array.isArray(item.contract.greeksHistory) && item.contract.greeksHistory.length > 0 &&  item.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.greeksHistory.map((item: any) => ({
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
    contract: item.contract ? 
      typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
          id: item.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.contract.id !== undefined ? item.contract.id : undefined,
          symbol: item.contract.symbol !== undefined ? {
              equals: item.contract.symbol 
             } : undefined,
        },
        create: {
          symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
          contractSymbol: item.contract.contractSymbol !== undefined ? item.contract.contractSymbol : undefined,
          optionType: item.contract.optionType !== undefined ? item.contract.optionType : undefined,
          expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
          daysToExpiration: item.contract.daysToExpiration !== undefined ? item.contract.daysToExpiration : undefined,
          bidSize: item.contract.bidSize !== undefined ? item.contract.bidSize : undefined,
          askSize: item.contract.askSize !== undefined ? item.contract.askSize : undefined,
          volume: item.contract.volume !== undefined ? item.contract.volume : undefined,
          openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
          inTheMoney: item.contract.inTheMoney !== undefined ? item.contract.inTheMoney : undefined,
          metadata: item.contract.metadata !== undefined ? item.contract.metadata : undefined,
          dataTimestamp: item.contract.dataTimestamp !== undefined ? item.contract.dataTimestamp : undefined,
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      greeksHistory: item.contract.greeksHistory ? 
        Array.isArray(item.contract.greeksHistory) && item.contract.greeksHistory.length > 0 &&  item.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.greeksHistory.map((item: any) => ({
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
    }))
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_OPTIONSPOSITION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneOptionsPosition) {
          return response.data.updateOneOptionsPosition;
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
   * Upsert a single OptionsPosition record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated OptionsPosition or null.
   */
  async upsert(props: OptionsPositionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsPositionType> {
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

        const UPSERT_ONE_OPTIONSPOSITION = gql`
          mutation upsertOneOptionsPosition($where: OptionsPositionWhereUniqueInput!, $create: OptionsPositionCreateInput!, $update: OptionsPositionUpdateInput!) {
            upsertOneOptionsPosition(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
      },
          create: {
        alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
  status: props.status !== undefined ? props.status : undefined,
  openingSide: props.openingSide !== undefined ? props.openingSide : undefined,
  quantity: props.quantity !== undefined ? props.quantity : undefined,
  entryTime: props.entryTime !== undefined ? props.entryTime : undefined,
  exitTime: props.exitTime !== undefined ? props.exitTime : undefined,
  daysHeld: props.daysHeld !== undefined ? props.daysHeld : undefined,
  exitReason: props.exitReason !== undefined ? props.exitReason : undefined,
  strategyType: props.strategyType !== undefined ? props.strategyType : undefined,
  tradeId: props.tradeId !== undefined ? props.tradeId : undefined,
  metadata: props.metadata !== undefined ? props.metadata : undefined,
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
    executions: props.contract.executions ? 
      Array.isArray(props.contract.executions) && props.contract.executions.length > 0 &&  props.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.executions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.executions.map((item: any) => ({
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                equals: item.position.alpacaAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? item.position.alpacaAccountId : undefined,
            status: item.position.status !== undefined ? item.position.status : undefined,
            openingSide: item.position.openingSide !== undefined ? item.position.openingSide : undefined,
            quantity: item.position.quantity !== undefined ? item.position.quantity : undefined,
            entryTime: item.position.entryTime !== undefined ? item.position.entryTime : undefined,
            exitTime: item.position.exitTime !== undefined ? item.position.exitTime : undefined,
            daysHeld: item.position.daysHeld !== undefined ? item.position.daysHeld : undefined,
            exitReason: item.position.exitReason !== undefined ? item.position.exitReason : undefined,
            strategyType: item.position.strategyType !== undefined ? item.position.strategyType : undefined,
            tradeId: item.position.tradeId !== undefined ? item.position.tradeId : undefined,
            metadata: item.position.metadata !== undefined ? item.position.metadata : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  executions: props.executions ? 
    Array.isArray(props.executions) && props.executions.length > 0 &&  props.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.executions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.executions.map((item: any) => ({
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
    contract: item.contract ? 
      typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
          id: item.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.contract.id !== undefined ? item.contract.id : undefined,
          symbol: item.contract.symbol !== undefined ? {
              equals: item.contract.symbol 
             } : undefined,
        },
        create: {
          symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
          contractSymbol: item.contract.contractSymbol !== undefined ? item.contract.contractSymbol : undefined,
          optionType: item.contract.optionType !== undefined ? item.contract.optionType : undefined,
          expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
          daysToExpiration: item.contract.daysToExpiration !== undefined ? item.contract.daysToExpiration : undefined,
          bidSize: item.contract.bidSize !== undefined ? item.contract.bidSize : undefined,
          askSize: item.contract.askSize !== undefined ? item.contract.askSize : undefined,
          volume: item.contract.volume !== undefined ? item.contract.volume : undefined,
          openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
          inTheMoney: item.contract.inTheMoney !== undefined ? item.contract.inTheMoney : undefined,
          metadata: item.contract.metadata !== undefined ? item.contract.metadata : undefined,
          dataTimestamp: item.contract.dataTimestamp !== undefined ? item.contract.dataTimestamp : undefined,
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      greeksHistory: item.contract.greeksHistory ? 
        Array.isArray(item.contract.greeksHistory) && item.contract.greeksHistory.length > 0 &&  item.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.greeksHistory.map((item: any) => ({
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
    }))
  } : undefined,
      },
          update: {
      alpacaAccountId: props.alpacaAccountId !== undefined ? {
            set: props.alpacaAccountId 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  openingSide: props.openingSide !== undefined ? {
            set: props.openingSide 
           } : undefined,
  quantity: props.quantity !== undefined ? {
            set: props.quantity 
           } : undefined,
  entryPrice: props.entryPrice !== undefined ? {
            set: props.entryPrice 
           } : undefined,
  entryCost: props.entryCost !== undefined ? {
            set: props.entryCost 
           } : undefined,
  entryTime: props.entryTime !== undefined ? {
            set: props.entryTime 
           } : undefined,
  exitPrice: props.exitPrice !== undefined ? {
            set: props.exitPrice 
           } : undefined,
  exitValue: props.exitValue !== undefined ? {
            set: props.exitValue 
           } : undefined,
  exitTime: props.exitTime !== undefined ? {
            set: props.exitTime 
           } : undefined,
  currentPrice: props.currentPrice !== undefined ? {
            set: props.currentPrice 
           } : undefined,
  currentValue: props.currentValue !== undefined ? {
            set: props.currentValue 
           } : undefined,
  unrealizedPnL: props.unrealizedPnL !== undefined ? {
            set: props.unrealizedPnL 
           } : undefined,
  unrealizedPnLPercent: props.unrealizedPnLPercent !== undefined ? {
            set: props.unrealizedPnLPercent 
           } : undefined,
  realizedPnL: props.realizedPnL !== undefined ? {
            set: props.realizedPnL 
           } : undefined,
  realizedPnLPercent: props.realizedPnLPercent !== undefined ? {
            set: props.realizedPnLPercent 
           } : undefined,
  totalFees: props.totalFees !== undefined ? {
            set: props.totalFees 
           } : undefined,
  currentDelta: props.currentDelta !== undefined ? {
            set: props.currentDelta 
           } : undefined,
  currentGamma: props.currentGamma !== undefined ? {
            set: props.currentGamma 
           } : undefined,
  currentTheta: props.currentTheta !== undefined ? {
            set: props.currentTheta 
           } : undefined,
  currentVega: props.currentVega !== undefined ? {
            set: props.currentVega 
           } : undefined,
  currentRho: props.currentRho !== undefined ? {
            set: props.currentRho 
           } : undefined,
  currentImpliedVolatility: props.currentImpliedVolatility !== undefined ? {
            set: props.currentImpliedVolatility 
           } : undefined,
  daysHeld: props.daysHeld !== undefined ? {
            set: props.daysHeld 
           } : undefined,
  exitReason: props.exitReason !== undefined ? {
            set: props.exitReason 
           } : undefined,
  strategyType: props.strategyType !== undefined ? {
            set: props.strategyType 
           } : undefined,
  tradeId: props.tradeId !== undefined ? {
            set: props.tradeId 
           } : undefined,
  metadata: props.metadata !== undefined ? {
            set: props.metadata 
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
    executions: props.contract.executions ? 
    Array.isArray(props.contract.executions) && props.contract.executions.length > 0 && props.contract.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.contract.executions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.contract.executions.map((item: any) => ({
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
      position: item.position ? 
      typeof item.position === 'object' && Object.keys(item.position).length === 1 && (Object.keys(item.position)[0] === 'id' || Object.keys(item.position)[0] === 'symbol')
? {
      connect: {
        id: item.position.id
      }
} : { upsert: {
          where: {
            id: item.position.id !== undefined ? {
                equals: item.position.id
              } : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                equals: item.position.alpacaAccountId
              } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId
              } : undefined,
            tradeId: item.position.tradeId !== undefined ? {
                equals: item.position.tradeId
              } : undefined,
          },
          update: {
            id: item.position.id !== undefined ? {
                set: item.position.id
              } : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                set: item.position.alpacaAccountId
              } : undefined,
            status: item.position.status !== undefined ? {
                set: item.position.status
              } : undefined,
            openingSide: item.position.openingSide !== undefined ? {
                set: item.position.openingSide
              } : undefined,
            quantity: item.position.quantity !== undefined ? {
                set: item.position.quantity
              } : undefined,
            entryPrice: item.position.entryPrice !== undefined ? {
                set: item.position.entryPrice
              } : undefined,
            entryCost: item.position.entryCost !== undefined ? {
                set: item.position.entryCost
              } : undefined,
            entryTime: item.position.entryTime !== undefined ? {
                set: item.position.entryTime
              } : undefined,
            exitPrice: item.position.exitPrice !== undefined ? {
                set: item.position.exitPrice
              } : undefined,
            exitValue: item.position.exitValue !== undefined ? {
                set: item.position.exitValue
              } : undefined,
            exitTime: item.position.exitTime !== undefined ? {
                set: item.position.exitTime
              } : undefined,
            currentPrice: item.position.currentPrice !== undefined ? {
                set: item.position.currentPrice
              } : undefined,
            currentValue: item.position.currentValue !== undefined ? {
                set: item.position.currentValue
              } : undefined,
            unrealizedPnL: item.position.unrealizedPnL !== undefined ? {
                set: item.position.unrealizedPnL
              } : undefined,
            unrealizedPnLPercent: item.position.unrealizedPnLPercent !== undefined ? {
                set: item.position.unrealizedPnLPercent
              } : undefined,
            realizedPnL: item.position.realizedPnL !== undefined ? {
                set: item.position.realizedPnL
              } : undefined,
            realizedPnLPercent: item.position.realizedPnLPercent !== undefined ? {
                set: item.position.realizedPnLPercent
              } : undefined,
            totalFees: item.position.totalFees !== undefined ? {
                set: item.position.totalFees
              } : undefined,
            currentDelta: item.position.currentDelta !== undefined ? {
                set: item.position.currentDelta
              } : undefined,
            currentGamma: item.position.currentGamma !== undefined ? {
                set: item.position.currentGamma
              } : undefined,
            currentTheta: item.position.currentTheta !== undefined ? {
                set: item.position.currentTheta
              } : undefined,
            currentVega: item.position.currentVega !== undefined ? {
                set: item.position.currentVega
              } : undefined,
            currentRho: item.position.currentRho !== undefined ? {
                set: item.position.currentRho
              } : undefined,
            currentImpliedVolatility: item.position.currentImpliedVolatility !== undefined ? {
                set: item.position.currentImpliedVolatility
              } : undefined,
            daysHeld: item.position.daysHeld !== undefined ? {
                set: item.position.daysHeld
              } : undefined,
            exitReason: item.position.exitReason !== undefined ? {
                set: item.position.exitReason
              } : undefined,
            strategyType: item.position.strategyType !== undefined ? {
                set: item.position.strategyType
              } : undefined,
            tradeId: item.position.tradeId !== undefined ? {
                set: item.position.tradeId
              } : undefined,
            metadata: item.position.metadata !== undefined ? {
                set: item.position.metadata
              } : undefined,
          },
          create: {
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? item.position.alpacaAccountId : undefined,
            status: item.position.status !== undefined ? item.position.status : undefined,
            openingSide: item.position.openingSide !== undefined ? item.position.openingSide : undefined,
            quantity: item.position.quantity !== undefined ? item.position.quantity : undefined,
            entryTime: item.position.entryTime !== undefined ? item.position.entryTime : undefined,
            exitTime: item.position.exitTime !== undefined ? item.position.exitTime : undefined,
            daysHeld: item.position.daysHeld !== undefined ? item.position.daysHeld : undefined,
            exitReason: item.position.exitReason !== undefined ? item.position.exitReason : undefined,
            strategyType: item.position.strategyType !== undefined ? item.position.strategyType : undefined,
            tradeId: item.position.tradeId !== undefined ? item.position.tradeId : undefined,
            metadata: item.position.metadata !== undefined ? item.position.metadata : undefined,
          },
        }
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                equals: item.position.alpacaAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? item.position.alpacaAccountId : undefined,
            status: item.position.status !== undefined ? item.position.status : undefined,
            openingSide: item.position.openingSide !== undefined ? item.position.openingSide : undefined,
            quantity: item.position.quantity !== undefined ? item.position.quantity : undefined,
            entryTime: item.position.entryTime !== undefined ? item.position.entryTime : undefined,
            exitTime: item.position.exitTime !== undefined ? item.position.exitTime : undefined,
            daysHeld: item.position.daysHeld !== undefined ? item.position.daysHeld : undefined,
            exitReason: item.position.exitReason !== undefined ? item.position.exitReason : undefined,
            strategyType: item.position.strategyType !== undefined ? item.position.strategyType : undefined,
            tradeId: item.position.tradeId !== undefined ? item.position.tradeId : undefined,
            metadata: item.position.metadata !== undefined ? item.position.metadata : undefined,
          },
        }
      } : undefined,
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
    executions: props.contract.executions ? 
      Array.isArray(props.contract.executions) && props.contract.executions.length > 0 &&  props.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.contract.executions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.contract.executions.map((item: any) => ({
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                equals: item.position.alpacaAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? item.position.alpacaAccountId : undefined,
            status: item.position.status !== undefined ? item.position.status : undefined,
            openingSide: item.position.openingSide !== undefined ? item.position.openingSide : undefined,
            quantity: item.position.quantity !== undefined ? item.position.quantity : undefined,
            entryTime: item.position.entryTime !== undefined ? item.position.entryTime : undefined,
            exitTime: item.position.exitTime !== undefined ? item.position.exitTime : undefined,
            daysHeld: item.position.daysHeld !== undefined ? item.position.daysHeld : undefined,
            exitReason: item.position.exitReason !== undefined ? item.position.exitReason : undefined,
            strategyType: item.position.strategyType !== undefined ? item.position.strategyType : undefined,
            tradeId: item.position.tradeId !== undefined ? item.position.tradeId : undefined,
            metadata: item.position.metadata !== undefined ? item.position.metadata : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  executions: props.executions ? 
  Array.isArray(props.executions) && props.executions.length > 0 && props.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.executions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.executions.map((item: any) => ({
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
    contract: item.contract ? 
    typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && (Object.keys(item.contract)[0] === 'id' || Object.keys(item.contract)[0] === 'symbol')
? {
    connect: {
      id: item.contract.id
    }
} : { upsert: {
        where: {
          id: item.contract.id !== undefined ? {
              equals: item.contract.id
            } : undefined,
          symbol: item.contract.symbol !== undefined ? {
              equals: item.contract.symbol
            } : undefined,
        },
        update: {
          id: item.contract.id !== undefined ? {
              set: item.contract.id
            } : undefined,
          symbol: item.contract.symbol !== undefined ? {
              set: item.contract.symbol
            } : undefined,
          contractSymbol: item.contract.contractSymbol !== undefined ? {
              set: item.contract.contractSymbol
            } : undefined,
          optionType: item.contract.optionType !== undefined ? {
              set: item.contract.optionType
            } : undefined,
          strikePrice: item.contract.strikePrice !== undefined ? {
              set: item.contract.strikePrice
            } : undefined,
          expirationDate: item.contract.expirationDate !== undefined ? {
              set: item.contract.expirationDate
            } : undefined,
          daysToExpiration: item.contract.daysToExpiration !== undefined ? {
              set: item.contract.daysToExpiration
            } : undefined,
          lastPrice: item.contract.lastPrice !== undefined ? {
              set: item.contract.lastPrice
            } : undefined,
          bidPrice: item.contract.bidPrice !== undefined ? {
              set: item.contract.bidPrice
            } : undefined,
          askPrice: item.contract.askPrice !== undefined ? {
              set: item.contract.askPrice
            } : undefined,
          midPrice: item.contract.midPrice !== undefined ? {
              set: item.contract.midPrice
            } : undefined,
          bidSize: item.contract.bidSize !== undefined ? {
              set: item.contract.bidSize
            } : undefined,
          askSize: item.contract.askSize !== undefined ? {
              set: item.contract.askSize
            } : undefined,
          volume: item.contract.volume !== undefined ? {
              set: item.contract.volume
            } : undefined,
          openInterest: item.contract.openInterest !== undefined ? {
              set: item.contract.openInterest
            } : undefined,
          impliedVolatility: item.contract.impliedVolatility !== undefined ? {
              set: item.contract.impliedVolatility
            } : undefined,
          delta: item.contract.delta !== undefined ? {
              set: item.contract.delta
            } : undefined,
          gamma: item.contract.gamma !== undefined ? {
              set: item.contract.gamma
            } : undefined,
          theta: item.contract.theta !== undefined ? {
              set: item.contract.theta
            } : undefined,
          vega: item.contract.vega !== undefined ? {
              set: item.contract.vega
            } : undefined,
          rho: item.contract.rho !== undefined ? {
              set: item.contract.rho
            } : undefined,
          inTheMoney: item.contract.inTheMoney !== undefined ? {
              set: item.contract.inTheMoney
            } : undefined,
          intrinsicValue: item.contract.intrinsicValue !== undefined ? {
              set: item.contract.intrinsicValue
            } : undefined,
          extrinsicValue: item.contract.extrinsicValue !== undefined ? {
              set: item.contract.extrinsicValue
            } : undefined,
          theoreticalPrice: item.contract.theoreticalPrice !== undefined ? {
              set: item.contract.theoreticalPrice
            } : undefined,
          underlyingPrice: item.contract.underlyingPrice !== undefined ? {
              set: item.contract.underlyingPrice
            } : undefined,
          metadata: item.contract.metadata !== undefined ? {
              set: item.contract.metadata
            } : undefined,
          dataTimestamp: item.contract.dataTimestamp !== undefined ? {
              set: item.contract.dataTimestamp
            } : undefined,
      positions: item.contract.positions ? 
      Array.isArray(item.contract.positions) && item.contract.positions.length > 0 && item.contract.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      greeksHistory: item.contract.greeksHistory ? 
      Array.isArray(item.contract.greeksHistory) && item.contract.greeksHistory.length > 0 && item.contract.greeksHistory.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.greeksHistory.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.greeksHistory.map((item: any) => ({
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
          symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
          contractSymbol: item.contract.contractSymbol !== undefined ? item.contract.contractSymbol : undefined,
          optionType: item.contract.optionType !== undefined ? item.contract.optionType : undefined,
          expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
          daysToExpiration: item.contract.daysToExpiration !== undefined ? item.contract.daysToExpiration : undefined,
          bidSize: item.contract.bidSize !== undefined ? item.contract.bidSize : undefined,
          askSize: item.contract.askSize !== undefined ? item.contract.askSize : undefined,
          volume: item.contract.volume !== undefined ? item.contract.volume : undefined,
          openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
          inTheMoney: item.contract.inTheMoney !== undefined ? item.contract.inTheMoney : undefined,
          metadata: item.contract.metadata !== undefined ? item.contract.metadata : undefined,
          dataTimestamp: item.contract.dataTimestamp !== undefined ? item.contract.dataTimestamp : undefined,
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      greeksHistory: item.contract.greeksHistory ? 
        Array.isArray(item.contract.greeksHistory) && item.contract.greeksHistory.length > 0 &&  item.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.greeksHistory.map((item: any) => ({
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
    contract: item.contract ? 
      typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
          id: item.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.contract.id !== undefined ? item.contract.id : undefined,
          symbol: item.contract.symbol !== undefined ? {
              equals: item.contract.symbol 
             } : undefined,
        },
        create: {
          symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
          contractSymbol: item.contract.contractSymbol !== undefined ? item.contract.contractSymbol : undefined,
          optionType: item.contract.optionType !== undefined ? item.contract.optionType : undefined,
          expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
          daysToExpiration: item.contract.daysToExpiration !== undefined ? item.contract.daysToExpiration : undefined,
          bidSize: item.contract.bidSize !== undefined ? item.contract.bidSize : undefined,
          askSize: item.contract.askSize !== undefined ? item.contract.askSize : undefined,
          volume: item.contract.volume !== undefined ? item.contract.volume : undefined,
          openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
          inTheMoney: item.contract.inTheMoney !== undefined ? item.contract.inTheMoney : undefined,
          metadata: item.contract.metadata !== undefined ? item.contract.metadata : undefined,
          dataTimestamp: item.contract.dataTimestamp !== undefined ? item.contract.dataTimestamp : undefined,
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      greeksHistory: item.contract.greeksHistory ? 
        Array.isArray(item.contract.greeksHistory) && item.contract.greeksHistory.length > 0 &&  item.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.greeksHistory.map((item: any) => ({
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
    }))
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_OPTIONSPOSITION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneOptionsPosition) {
          return response.data.upsertOneOptionsPosition;
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
   * Update multiple OptionsPosition records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of OptionsPosition objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: OptionsPositionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_OPTIONSPOSITION = gql`
          mutation updateManyOptionsPosition($data: [OptionsPositionCreateManyInput!]!) {
            updateManyOptionsPosition(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
    equals: prop.alpacaAccountId 
  } : undefined,
  contractId: prop.contractId !== undefined ? {
    equals: prop.contractId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
            set: prop.alpacaAccountId 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  openingSide: prop.openingSide !== undefined ? {
            set: prop.openingSide 
           } : undefined,
  quantity: prop.quantity !== undefined ? {
            set: prop.quantity 
           } : undefined,
  entryPrice: prop.entryPrice !== undefined ? {
            set: prop.entryPrice 
           } : undefined,
  entryCost: prop.entryCost !== undefined ? {
            set: prop.entryCost 
           } : undefined,
  entryTime: prop.entryTime !== undefined ? {
            set: prop.entryTime 
           } : undefined,
  exitPrice: prop.exitPrice !== undefined ? {
            set: prop.exitPrice 
           } : undefined,
  exitValue: prop.exitValue !== undefined ? {
            set: prop.exitValue 
           } : undefined,
  exitTime: prop.exitTime !== undefined ? {
            set: prop.exitTime 
           } : undefined,
  currentPrice: prop.currentPrice !== undefined ? {
            set: prop.currentPrice 
           } : undefined,
  currentValue: prop.currentValue !== undefined ? {
            set: prop.currentValue 
           } : undefined,
  unrealizedPnL: prop.unrealizedPnL !== undefined ? {
            set: prop.unrealizedPnL 
           } : undefined,
  unrealizedPnLPercent: prop.unrealizedPnLPercent !== undefined ? {
            set: prop.unrealizedPnLPercent 
           } : undefined,
  realizedPnL: prop.realizedPnL !== undefined ? {
            set: prop.realizedPnL 
           } : undefined,
  realizedPnLPercent: prop.realizedPnLPercent !== undefined ? {
            set: prop.realizedPnLPercent 
           } : undefined,
  totalFees: prop.totalFees !== undefined ? {
            set: prop.totalFees 
           } : undefined,
  currentDelta: prop.currentDelta !== undefined ? {
            set: prop.currentDelta 
           } : undefined,
  currentGamma: prop.currentGamma !== undefined ? {
            set: prop.currentGamma 
           } : undefined,
  currentTheta: prop.currentTheta !== undefined ? {
            set: prop.currentTheta 
           } : undefined,
  currentVega: prop.currentVega !== undefined ? {
            set: prop.currentVega 
           } : undefined,
  currentRho: prop.currentRho !== undefined ? {
            set: prop.currentRho 
           } : undefined,
  currentImpliedVolatility: prop.currentImpliedVolatility !== undefined ? {
            set: prop.currentImpliedVolatility 
           } : undefined,
  daysHeld: prop.daysHeld !== undefined ? {
            set: prop.daysHeld 
           } : undefined,
  exitReason: prop.exitReason !== undefined ? {
            set: prop.exitReason 
           } : undefined,
  strategyType: prop.strategyType !== undefined ? {
            set: prop.strategyType 
           } : undefined,
  tradeId: prop.tradeId !== undefined ? {
            set: prop.tradeId 
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
    executions: prop.contract.executions ? 
    Array.isArray(prop.contract.executions) && prop.contract.executions.length > 0 && prop.contract.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.contract.executions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.contract.executions.map((item: any) => ({
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
      position: item.position ? 
      typeof item.position === 'object' && Object.keys(item.position).length === 1 && (Object.keys(item.position)[0] === 'id' || Object.keys(item.position)[0] === 'symbol')
? {
      connect: {
        id: item.position.id
      }
} : { upsert: {
          where: {
            id: item.position.id !== undefined ? {
                equals: item.position.id
              } : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                equals: item.position.alpacaAccountId
              } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId
              } : undefined,
            tradeId: item.position.tradeId !== undefined ? {
                equals: item.position.tradeId
              } : undefined,
          },
          update: {
            id: item.position.id !== undefined ? {
                set: item.position.id
              } : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                set: item.position.alpacaAccountId
              } : undefined,
            status: item.position.status !== undefined ? {
                set: item.position.status
              } : undefined,
            openingSide: item.position.openingSide !== undefined ? {
                set: item.position.openingSide
              } : undefined,
            quantity: item.position.quantity !== undefined ? {
                set: item.position.quantity
              } : undefined,
            entryPrice: item.position.entryPrice !== undefined ? {
                set: item.position.entryPrice
              } : undefined,
            entryCost: item.position.entryCost !== undefined ? {
                set: item.position.entryCost
              } : undefined,
            entryTime: item.position.entryTime !== undefined ? {
                set: item.position.entryTime
              } : undefined,
            exitPrice: item.position.exitPrice !== undefined ? {
                set: item.position.exitPrice
              } : undefined,
            exitValue: item.position.exitValue !== undefined ? {
                set: item.position.exitValue
              } : undefined,
            exitTime: item.position.exitTime !== undefined ? {
                set: item.position.exitTime
              } : undefined,
            currentPrice: item.position.currentPrice !== undefined ? {
                set: item.position.currentPrice
              } : undefined,
            currentValue: item.position.currentValue !== undefined ? {
                set: item.position.currentValue
              } : undefined,
            unrealizedPnL: item.position.unrealizedPnL !== undefined ? {
                set: item.position.unrealizedPnL
              } : undefined,
            unrealizedPnLPercent: item.position.unrealizedPnLPercent !== undefined ? {
                set: item.position.unrealizedPnLPercent
              } : undefined,
            realizedPnL: item.position.realizedPnL !== undefined ? {
                set: item.position.realizedPnL
              } : undefined,
            realizedPnLPercent: item.position.realizedPnLPercent !== undefined ? {
                set: item.position.realizedPnLPercent
              } : undefined,
            totalFees: item.position.totalFees !== undefined ? {
                set: item.position.totalFees
              } : undefined,
            currentDelta: item.position.currentDelta !== undefined ? {
                set: item.position.currentDelta
              } : undefined,
            currentGamma: item.position.currentGamma !== undefined ? {
                set: item.position.currentGamma
              } : undefined,
            currentTheta: item.position.currentTheta !== undefined ? {
                set: item.position.currentTheta
              } : undefined,
            currentVega: item.position.currentVega !== undefined ? {
                set: item.position.currentVega
              } : undefined,
            currentRho: item.position.currentRho !== undefined ? {
                set: item.position.currentRho
              } : undefined,
            currentImpliedVolatility: item.position.currentImpliedVolatility !== undefined ? {
                set: item.position.currentImpliedVolatility
              } : undefined,
            daysHeld: item.position.daysHeld !== undefined ? {
                set: item.position.daysHeld
              } : undefined,
            exitReason: item.position.exitReason !== undefined ? {
                set: item.position.exitReason
              } : undefined,
            strategyType: item.position.strategyType !== undefined ? {
                set: item.position.strategyType
              } : undefined,
            tradeId: item.position.tradeId !== undefined ? {
                set: item.position.tradeId
              } : undefined,
            metadata: item.position.metadata !== undefined ? {
                set: item.position.metadata
              } : undefined,
          },
          create: {
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? item.position.alpacaAccountId : undefined,
            status: item.position.status !== undefined ? item.position.status : undefined,
            openingSide: item.position.openingSide !== undefined ? item.position.openingSide : undefined,
            quantity: item.position.quantity !== undefined ? item.position.quantity : undefined,
            entryTime: item.position.entryTime !== undefined ? item.position.entryTime : undefined,
            exitTime: item.position.exitTime !== undefined ? item.position.exitTime : undefined,
            daysHeld: item.position.daysHeld !== undefined ? item.position.daysHeld : undefined,
            exitReason: item.position.exitReason !== undefined ? item.position.exitReason : undefined,
            strategyType: item.position.strategyType !== undefined ? item.position.strategyType : undefined,
            tradeId: item.position.tradeId !== undefined ? item.position.tradeId : undefined,
            metadata: item.position.metadata !== undefined ? item.position.metadata : undefined,
          },
        }
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                equals: item.position.alpacaAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? item.position.alpacaAccountId : undefined,
            status: item.position.status !== undefined ? item.position.status : undefined,
            openingSide: item.position.openingSide !== undefined ? item.position.openingSide : undefined,
            quantity: item.position.quantity !== undefined ? item.position.quantity : undefined,
            entryTime: item.position.entryTime !== undefined ? item.position.entryTime : undefined,
            exitTime: item.position.exitTime !== undefined ? item.position.exitTime : undefined,
            daysHeld: item.position.daysHeld !== undefined ? item.position.daysHeld : undefined,
            exitReason: item.position.exitReason !== undefined ? item.position.exitReason : undefined,
            strategyType: item.position.strategyType !== undefined ? item.position.strategyType : undefined,
            tradeId: item.position.tradeId !== undefined ? item.position.tradeId : undefined,
            metadata: item.position.metadata !== undefined ? item.position.metadata : undefined,
          },
        }
      } : undefined,
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
    executions: prop.contract.executions ? 
      Array.isArray(prop.contract.executions) && prop.contract.executions.length > 0 &&  prop.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.contract.executions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.contract.executions.map((item: any) => ({
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? {
                equals: item.position.alpacaAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
            alpacaAccountId: item.position.alpacaAccountId !== undefined ? item.position.alpacaAccountId : undefined,
            status: item.position.status !== undefined ? item.position.status : undefined,
            openingSide: item.position.openingSide !== undefined ? item.position.openingSide : undefined,
            quantity: item.position.quantity !== undefined ? item.position.quantity : undefined,
            entryTime: item.position.entryTime !== undefined ? item.position.entryTime : undefined,
            exitTime: item.position.exitTime !== undefined ? item.position.exitTime : undefined,
            daysHeld: item.position.daysHeld !== undefined ? item.position.daysHeld : undefined,
            exitReason: item.position.exitReason !== undefined ? item.position.exitReason : undefined,
            strategyType: item.position.strategyType !== undefined ? item.position.strategyType : undefined,
            tradeId: item.position.tradeId !== undefined ? item.position.tradeId : undefined,
            metadata: item.position.metadata !== undefined ? item.position.metadata : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  executions: prop.executions ? 
  Array.isArray(prop.executions) && prop.executions.length > 0 && prop.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.executions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.executions.map((item: any) => ({
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
    contract: item.contract ? 
    typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && (Object.keys(item.contract)[0] === 'id' || Object.keys(item.contract)[0] === 'symbol')
? {
    connect: {
      id: item.contract.id
    }
} : { upsert: {
        where: {
          id: item.contract.id !== undefined ? {
              equals: item.contract.id
            } : undefined,
          symbol: item.contract.symbol !== undefined ? {
              equals: item.contract.symbol
            } : undefined,
        },
        update: {
          id: item.contract.id !== undefined ? {
              set: item.contract.id
            } : undefined,
          symbol: item.contract.symbol !== undefined ? {
              set: item.contract.symbol
            } : undefined,
          contractSymbol: item.contract.contractSymbol !== undefined ? {
              set: item.contract.contractSymbol
            } : undefined,
          optionType: item.contract.optionType !== undefined ? {
              set: item.contract.optionType
            } : undefined,
          strikePrice: item.contract.strikePrice !== undefined ? {
              set: item.contract.strikePrice
            } : undefined,
          expirationDate: item.contract.expirationDate !== undefined ? {
              set: item.contract.expirationDate
            } : undefined,
          daysToExpiration: item.contract.daysToExpiration !== undefined ? {
              set: item.contract.daysToExpiration
            } : undefined,
          lastPrice: item.contract.lastPrice !== undefined ? {
              set: item.contract.lastPrice
            } : undefined,
          bidPrice: item.contract.bidPrice !== undefined ? {
              set: item.contract.bidPrice
            } : undefined,
          askPrice: item.contract.askPrice !== undefined ? {
              set: item.contract.askPrice
            } : undefined,
          midPrice: item.contract.midPrice !== undefined ? {
              set: item.contract.midPrice
            } : undefined,
          bidSize: item.contract.bidSize !== undefined ? {
              set: item.contract.bidSize
            } : undefined,
          askSize: item.contract.askSize !== undefined ? {
              set: item.contract.askSize
            } : undefined,
          volume: item.contract.volume !== undefined ? {
              set: item.contract.volume
            } : undefined,
          openInterest: item.contract.openInterest !== undefined ? {
              set: item.contract.openInterest
            } : undefined,
          impliedVolatility: item.contract.impliedVolatility !== undefined ? {
              set: item.contract.impliedVolatility
            } : undefined,
          delta: item.contract.delta !== undefined ? {
              set: item.contract.delta
            } : undefined,
          gamma: item.contract.gamma !== undefined ? {
              set: item.contract.gamma
            } : undefined,
          theta: item.contract.theta !== undefined ? {
              set: item.contract.theta
            } : undefined,
          vega: item.contract.vega !== undefined ? {
              set: item.contract.vega
            } : undefined,
          rho: item.contract.rho !== undefined ? {
              set: item.contract.rho
            } : undefined,
          inTheMoney: item.contract.inTheMoney !== undefined ? {
              set: item.contract.inTheMoney
            } : undefined,
          intrinsicValue: item.contract.intrinsicValue !== undefined ? {
              set: item.contract.intrinsicValue
            } : undefined,
          extrinsicValue: item.contract.extrinsicValue !== undefined ? {
              set: item.contract.extrinsicValue
            } : undefined,
          theoreticalPrice: item.contract.theoreticalPrice !== undefined ? {
              set: item.contract.theoreticalPrice
            } : undefined,
          underlyingPrice: item.contract.underlyingPrice !== undefined ? {
              set: item.contract.underlyingPrice
            } : undefined,
          metadata: item.contract.metadata !== undefined ? {
              set: item.contract.metadata
            } : undefined,
          dataTimestamp: item.contract.dataTimestamp !== undefined ? {
              set: item.contract.dataTimestamp
            } : undefined,
      positions: item.contract.positions ? 
      Array.isArray(item.contract.positions) && item.contract.positions.length > 0 && item.contract.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      greeksHistory: item.contract.greeksHistory ? 
      Array.isArray(item.contract.greeksHistory) && item.contract.greeksHistory.length > 0 && item.contract.greeksHistory.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.greeksHistory.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.greeksHistory.map((item: any) => ({
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
          symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
          contractSymbol: item.contract.contractSymbol !== undefined ? item.contract.contractSymbol : undefined,
          optionType: item.contract.optionType !== undefined ? item.contract.optionType : undefined,
          expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
          daysToExpiration: item.contract.daysToExpiration !== undefined ? item.contract.daysToExpiration : undefined,
          bidSize: item.contract.bidSize !== undefined ? item.contract.bidSize : undefined,
          askSize: item.contract.askSize !== undefined ? item.contract.askSize : undefined,
          volume: item.contract.volume !== undefined ? item.contract.volume : undefined,
          openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
          inTheMoney: item.contract.inTheMoney !== undefined ? item.contract.inTheMoney : undefined,
          metadata: item.contract.metadata !== undefined ? item.contract.metadata : undefined,
          dataTimestamp: item.contract.dataTimestamp !== undefined ? item.contract.dataTimestamp : undefined,
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      greeksHistory: item.contract.greeksHistory ? 
        Array.isArray(item.contract.greeksHistory) && item.contract.greeksHistory.length > 0 &&  item.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.greeksHistory.map((item: any) => ({
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
    contract: item.contract ? 
      typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
          id: item.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.contract.id !== undefined ? item.contract.id : undefined,
          symbol: item.contract.symbol !== undefined ? {
              equals: item.contract.symbol 
             } : undefined,
        },
        create: {
          symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
          contractSymbol: item.contract.contractSymbol !== undefined ? item.contract.contractSymbol : undefined,
          optionType: item.contract.optionType !== undefined ? item.contract.optionType : undefined,
          expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
          daysToExpiration: item.contract.daysToExpiration !== undefined ? item.contract.daysToExpiration : undefined,
          bidSize: item.contract.bidSize !== undefined ? item.contract.bidSize : undefined,
          askSize: item.contract.askSize !== undefined ? item.contract.askSize : undefined,
          volume: item.contract.volume !== undefined ? item.contract.volume : undefined,
          openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
          inTheMoney: item.contract.inTheMoney !== undefined ? item.contract.inTheMoney : undefined,
          metadata: item.contract.metadata !== undefined ? item.contract.metadata : undefined,
          dataTimestamp: item.contract.dataTimestamp !== undefined ? item.contract.dataTimestamp : undefined,
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      greeksHistory: item.contract.greeksHistory ? 
        Array.isArray(item.contract.greeksHistory) && item.contract.greeksHistory.length > 0 &&  item.contract.greeksHistory.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.greeksHistory.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.greeksHistory.map((item: any) => ({
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
    }))
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_OPTIONSPOSITION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyOptionsPosition) {
          return response.data.updateManyOptionsPosition;
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
   * Delete a single OptionsPosition record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted OptionsPosition or null.
   */
  async delete(props: OptionsPositionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsPositionType> {
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

        const DELETE_ONE_OPTIONSPOSITION = gql`
          mutation deleteOneOptionsPosition($where: OptionsPositionWhereUniqueInput!) {
            deleteOneOptionsPosition(where: $where) {
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
          mutation: DELETE_ONE_OPTIONSPOSITION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneOptionsPosition) {
          return response.data.deleteOneOptionsPosition;
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
   * Retrieve a single OptionsPosition record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved OptionsPosition or null.
   */
  async get(props: OptionsPositionType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<OptionsPositionType | null> {
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

        const GET_OPTIONSPOSITION = gql`
          query getOptionsPosition($where: OptionsPositionWhereUniqueInput!) {
            getOptionsPosition(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_OPTIONSPOSITION,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getOptionsPosition ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No OptionsPosition found') {
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
   * Retrieve all OptionsPositions records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of OptionsPosition records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsPositionType[] | null> {
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

        const GET_ALL_OPTIONSPOSITION = gql`
          query getAllOptionsPosition {
            optionsPositions {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_OPTIONSPOSITION,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.optionsPositions ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No OptionsPosition found') {
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
   * Find multiple OptionsPosition records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found OptionsPosition records or null.
   */
  async findMany(props: OptionsPositionType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<OptionsPositionType[] | null> {
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

        const FIND_MANY_OPTIONSPOSITION = gql`
          query findManyOptionsPosition($where: OptionsPositionWhereInput!) {
            optionsPositions(where: $where) {
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
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_OPTIONSPOSITION,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.optionspositions) {
          return response.data.optionsPositions;
        } else {
          return [] as OptionsPositionType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No OptionsPosition found') {
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
