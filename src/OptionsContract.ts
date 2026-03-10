
  
import { OptionsContract as OptionsContractType } from './generated/typegraphql-prisma/models/OptionsContract';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the OptionsContract model.
   */

  const selectionSet = `
    
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
    brokerageAccountId
    brokerageAccount {
      id
      provider
      type
      apiKey
      apiSecret
      configuration
      marketOpen
      realTime
      cryptoTradingEnabled
      cryptoTradingPairs
      cryptoTradeAllocationPct
      tradeAllocationPct
      allocation {
        id
        equities
        optionsContracts
        futures
        etfs
        forex
        crypto
        stocks
        options
        brokerageAccountId
        brokerageAccount {
id
        }
        createdAt
        updatedAt
      }
      autoAllocation
      minPercentageChange
      volumeThreshold
      enablePortfolioTrailingStop
      portfolioTrailPercent
      portfolioProfitThresholdPercent
      reducedPortfolioTrailPercent
      defaultTrailingStopPercentage100
      firstTrailReductionThreshold100
      secondTrailReductionThreshold100
      firstReducedTrailPercentage100
      secondReducedTrailPercentage100
      minimumPriceChangePercent100
      fund {
        id
        name
        slug
        description
        status
        organizationId
        organization {
id
        }
        createdAt
        updatedAt
        deletedAt
        assignments {
id
        }
        investments {
id
        }
      }
      fundId
      createdAt
      updatedAt
      deletedAt
      alerts {
        id
        brokerageAccountId
        title
        message
        type
        severity
        category
        status
        isRead
        acknowledgedAt
        resolvedAt
        suppressedUntil
        retryCount
        metadata
        createdAt
        updatedAt
      }
      trades {
        id
        brokerageAccountId
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
      }
      optionsTradeExecutions {
        id
        positionId
        position {
id
        }
        contractId
        contract {
id
        }
        brokerageAccountId
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
    contractId
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
      }
      brokerageAccountId
      brokerageAccount {
        id
        provider
        type
        apiKey
        apiSecret
        configuration
        marketOpen
        realTime
        cryptoTradingEnabled
        cryptoTradingPairs
        cryptoTradeAllocationPct
        tradeAllocationPct
        allocation {
id
        }
        autoAllocation
        minPercentageChange
        volumeThreshold
        enablePortfolioTrailingStop
        portfolioTrailPercent
        portfolioProfitThresholdPercent
        reducedPortfolioTrailPercent
        defaultTrailingStopPercentage100
        firstTrailReductionThreshold100
        secondTrailReductionThreshold100
        firstReducedTrailPercentage100
        secondReducedTrailPercentage100
        minimumPriceChangePercent100
        fund {
id
        }
        fundId
        createdAt
        updatedAt
        deletedAt
        alerts {
id
        }
        trades {
id
        }
        optionsPositions {
id
        }
      }
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
      brokerageAccountId
      brokerageAccount {
        id
        provider
        type
        apiKey
        apiSecret
        configuration
        marketOpen
        realTime
        cryptoTradingEnabled
        cryptoTradingPairs
        cryptoTradeAllocationPct
        tradeAllocationPct
        allocation {
id
        }
        autoAllocation
        minPercentageChange
        volumeThreshold
        enablePortfolioTrailingStop
        portfolioTrailPercent
        portfolioProfitThresholdPercent
        reducedPortfolioTrailPercent
        defaultTrailingStopPercentage100
        firstTrailReductionThreshold100
        secondTrailReductionThreshold100
        firstReducedTrailPercentage100
        secondReducedTrailPercentage100
        minimumPriceChangePercent100
        fund {
id
        }
        fundId
        createdAt
        updatedAt
        deletedAt
        alerts {
id
        }
        trades {
id
        }
        optionsTradeExecutions {
id
        }
      }
      contractId
      contract {
id
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
    }
    contractId
    brokerageAccountId
    brokerageAccount {
      id
      provider
      type
      apiKey
      apiSecret
      configuration
      marketOpen
      realTime
      cryptoTradingEnabled
      cryptoTradingPairs
      cryptoTradeAllocationPct
      tradeAllocationPct
      allocation {
        id
        equities
        optionsContracts
        futures
        etfs
        forex
        crypto
        stocks
        options
        brokerageAccountId
        brokerageAccount {
id
        }
        createdAt
        updatedAt
      }
      autoAllocation
      minPercentageChange
      volumeThreshold
      enablePortfolioTrailingStop
      portfolioTrailPercent
      portfolioProfitThresholdPercent
      reducedPortfolioTrailPercent
      defaultTrailingStopPercentage100
      firstTrailReductionThreshold100
      secondTrailReductionThreshold100
      firstReducedTrailPercentage100
      secondReducedTrailPercentage100
      minimumPriceChangePercent100
      fund {
        id
        name
        slug
        description
        status
        organizationId
        organization {
id
        }
        createdAt
        updatedAt
        deletedAt
        assignments {
id
        }
        investments {
id
        }
      }
      fundId
      createdAt
      updatedAt
      deletedAt
      alerts {
        id
        brokerageAccountId
        title
        message
        type
        severity
        category
        status
        isRead
        acknowledgedAt
        resolvedAt
        suppressedUntil
        retryCount
        metadata
        createdAt
        updatedAt
      }
      trades {
        id
        brokerageAccountId
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
      }
      optionsPositions {
        id
        brokerageAccountId
        contractId
        contract {
id
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
        }
      }
    }
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

  export const OptionsContract = {

    /**
     * Create a new OptionsContract record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created OptionsContract or null.
     */

    /**
     * Create a new OptionsContract record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created OptionsContract or null.
     */
    async create(props: OptionsContractType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsContractType> {
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

          const CREATE_ONE_OPTIONSCONTRACT = gql`
              mutation createOneOptionsContract($data: OptionsContractCreateInput!) {
                createOneOptionsContract(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
              
            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_OPTIONSCONTRACT,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneOptionsContract) {
            return response.data.createOneOptionsContract;
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
   * Create multiple OptionsContract records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of OptionsContract objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: OptionsContractType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_OPTIONSCONTRACT = gql`
          mutation createManyOptionsContract($data: [OptionsContractCreateManyInput!]!) {
            createManyOptionsContract(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
          })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_OPTIONSCONTRACT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyOptionsContract) {
          return response.data.createManyOptionsContract;
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
   * Update a single OptionsContract record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated OptionsContract or null.
   */
  async update(props: OptionsContractType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsContractType> {
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

        const UPDATE_ONE_OPTIONSCONTRACT = gql`
          mutation updateOneOptionsContract($data: OptionsContractUpdateInput!, $where: OptionsContractWhereUniqueInput!) {
            updateOneOptionsContract(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
                },
          data: {
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_OPTIONSCONTRACT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneOptionsContract) {
          return response.data.updateOneOptionsContract;
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
   * Upsert a single OptionsContract record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated OptionsContract or null.
   */
  async upsert(props: OptionsContractType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsContractType> {
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

        const UPSERT_ONE_OPTIONSCONTRACT = gql`
          mutation upsertOneOptionsContract($where: OptionsContractWhereUniqueInput!, $create: OptionsContractCreateInput!, $update: OptionsContractUpdateInput!) {
            upsertOneOptionsContract(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
                },
          create: {
            },
          update: {
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_OPTIONSCONTRACT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneOptionsContract) {
          return response.data.upsertOneOptionsContract;
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
   * Update multiple OptionsContract records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of OptionsContract objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: OptionsContractType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_OPTIONSCONTRACT = gql`
          mutation updateManyOptionsContract($data: [OptionsContractCreateManyInput!]!) {
            updateManyOptionsContract(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
            
          },
          data: {
            
          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_OPTIONSCONTRACT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyOptionsContract) {
          return response.data.updateManyOptionsContract;
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
   * Delete a single OptionsContract record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted OptionsContract or null.
   */
  async delete(props: OptionsContractType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsContractType> {
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

        const DELETE_ONE_OPTIONSCONTRACT = gql`
          mutation deleteOneOptionsContract($where: OptionsContractWhereUniqueInput!) {
            deleteOneOptionsContract(where: $where) {
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
          mutation: DELETE_ONE_OPTIONSCONTRACT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneOptionsContract) {
          return response.data.deleteOneOptionsContract;
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
   * Retrieve a single OptionsContract record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved OptionsContract or null.
   */
  async get(props: OptionsContractType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<OptionsContractType | null> {
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

        const GET_OPTIONSCONTRACT = gql`
          query getOptionsContract($where: OptionsContractWhereUniqueInput!) {
            getOptionsContract(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
          },
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_OPTIONSCONTRACT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getOptionsContract ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No OptionsContract found') {
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
   * Retrieve all OptionsContracts records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of OptionsContract records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsContractType[] | null> {
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

        const GET_ALL_OPTIONSCONTRACT = gql`
          query getAllOptionsContract {
            optionsContracts {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_OPTIONSCONTRACT,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.optionsContracts ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No OptionsContract found') {
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
   * Find multiple OptionsContract records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found OptionsContract records or null.
   */
  async findMany(props: OptionsContractType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<OptionsContractType[] | null> {
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

        const FIND_MANY_OPTIONSCONTRACT = gql`
          query findManyOptionsContract($where: OptionsContractWhereInput!) {
            optionsContracts(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_OPTIONSCONTRACT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.optionscontracts) {
          return response.data.optionsContracts;
        } else {
          return [] as OptionsContractType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No OptionsContract found') {
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
