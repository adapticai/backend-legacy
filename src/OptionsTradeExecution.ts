
  
import { OptionsTradeExecution as OptionsTradeExecutionType } from './generated/typegraphql-prisma/models/OptionsTradeExecution';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the OptionsTradeExecution model.
   */

  const selectionSet = `
    
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
        tradingOverrides
        llmOverrides
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
      }
    }
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
  }
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
      tradingOverrides
      llmOverrides
      organizationId
      organization {
        id
        name
        slug
        logoUrl
        website
        businessType
        jurisdiction
        regulatoryStatus
        description
        tradingDefaults
        llmDefaults
        createdAt
        updatedAt
        deletedAt
        members {
id
        }
      }
      createdAt
      updatedAt
      deletedAt
      assignments {
        id
        fundId
        userId
        user {
id
        }
        role
        permissions
        createdAt
        updatedAt
      }
      investments {
        id
        fundId
        investorId
        investor {
id
        }
        units
        investedAt
        status
        createdAt
        updatedAt
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
        }
        executions {
id
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
      const MAX_RETRIES = 2;
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
        brokerageAccountId: props.position.brokerageAccountId !== undefined ? {
            equals: props.position.brokerageAccountId 
           } : undefined,
        contractId: props.position.contractId !== undefined ? {
            equals: props.position.contractId 
           } : undefined,
      },
      create: {
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
    brokerageAccount: props.position.brokerageAccount ? 
      typeof props.position.brokerageAccount === 'object' && Object.keys(props.position.brokerageAccount).length === 1 && Object.keys(props.position.brokerageAccount)[0] === 'id'
    ? { connect: {
          id: props.position.brokerageAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.position.brokerageAccount.id !== undefined ? props.position.brokerageAccount.id : undefined,
          fundId: props.position.brokerageAccount.fundId !== undefined ? {
              equals: props.position.brokerageAccount.fundId 
             } : undefined,
        },
        create: {
          provider: props.position.brokerageAccount.provider !== undefined ? props.position.brokerageAccount.provider : undefined,
          type: props.position.brokerageAccount.type !== undefined ? props.position.brokerageAccount.type : undefined,
          apiKey: props.position.brokerageAccount.apiKey !== undefined ? props.position.brokerageAccount.apiKey : undefined,
          apiSecret: props.position.brokerageAccount.apiSecret !== undefined ? props.position.brokerageAccount.apiSecret : undefined,
          configuration: props.position.brokerageAccount.configuration !== undefined ? props.position.brokerageAccount.configuration : undefined,
          marketOpen: props.position.brokerageAccount.marketOpen !== undefined ? props.position.brokerageAccount.marketOpen : undefined,
          realTime: props.position.brokerageAccount.realTime !== undefined ? props.position.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.position.brokerageAccount.cryptoTradingEnabled !== undefined ? props.position.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.position.brokerageAccount.tradeAllocationPct !== undefined ? props.position.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.position.brokerageAccount.autoAllocation !== undefined ? props.position.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.position.brokerageAccount.minPercentageChange !== undefined ? props.position.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.position.brokerageAccount.volumeThreshold !== undefined ? props.position.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.position.brokerageAccount.portfolioTrailPercent !== undefined ? props.position.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.position.brokerageAccount.deletedAt !== undefined ? props.position.brokerageAccount.deletedAt : undefined,
      allocation: props.position.brokerageAccount.allocation ? 
        typeof props.position.brokerageAccount.allocation === 'object' && Object.keys(props.position.brokerageAccount.allocation).length === 1 && Object.keys(props.position.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.allocation.id !== undefined ? props.position.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.position.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.position.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.position.brokerageAccount.allocation.equities !== undefined ? props.position.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.position.brokerageAccount.allocation.optionsContracts !== undefined ? props.position.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.position.brokerageAccount.allocation.futures !== undefined ? props.position.brokerageAccount.allocation.futures : undefined,
            etfs: props.position.brokerageAccount.allocation.etfs !== undefined ? props.position.brokerageAccount.allocation.etfs : undefined,
            forex: props.position.brokerageAccount.allocation.forex !== undefined ? props.position.brokerageAccount.allocation.forex : undefined,
            crypto: props.position.brokerageAccount.allocation.crypto !== undefined ? props.position.brokerageAccount.allocation.crypto : undefined,
            stocks: props.position.brokerageAccount.allocation.stocks !== undefined ? props.position.brokerageAccount.allocation.stocks : undefined,
            options: props.position.brokerageAccount.allocation.options !== undefined ? props.position.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.position.brokerageAccount.fund ? 
        typeof props.position.brokerageAccount.fund === 'object' && Object.keys(props.position.brokerageAccount.fund).length === 1 && Object.keys(props.position.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.fund.id !== undefined ? props.position.brokerageAccount.fund.id : undefined,
            name: props.position.brokerageAccount.fund.name !== undefined ? {
                equals: props.position.brokerageAccount.fund.name 
               } : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? {
                equals: props.position.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.position.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.position.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.position.brokerageAccount.fund.name !== undefined ? props.position.brokerageAccount.fund.name : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? props.position.brokerageAccount.fund.slug : undefined,
            description: props.position.brokerageAccount.fund.description !== undefined ? props.position.brokerageAccount.fund.description : undefined,
            status: props.position.brokerageAccount.fund.status !== undefined ? props.position.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.position.brokerageAccount.fund.tradingOverrides !== undefined ? props.position.brokerageAccount.fund.tradingOverrides : undefined,
            llmOverrides: props.position.brokerageAccount.fund.llmOverrides !== undefined ? props.position.brokerageAccount.fund.llmOverrides : undefined,
            deletedAt: props.position.brokerageAccount.fund.deletedAt !== undefined ? props.position.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.position.brokerageAccount.alerts ? 
        Array.isArray(props.position.brokerageAccount.alerts) && props.position.brokerageAccount.alerts.length > 0 &&  props.position.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.alerts.map((item: any) => ({
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
      trades: props.position.brokerageAccount.trades ? 
        Array.isArray(props.position.brokerageAccount.trades) && props.position.brokerageAccount.trades.length > 0 &&  props.position.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.position.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.position.brokerageAccount.optionsTradeExecutions) && props.position.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.position.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
      brokerageAccount: item.brokerageAccount ? 
        typeof item.brokerageAccount === 'object' && Object.keys(item.brokerageAccount).length === 1 && Object.keys(item.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.brokerageAccount.id !== undefined ? item.brokerageAccount.id : undefined,
            fundId: item.brokerageAccount.fundId !== undefined ? {
                equals: item.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.brokerageAccount.provider !== undefined ? item.brokerageAccount.provider : undefined,
            type: item.brokerageAccount.type !== undefined ? item.brokerageAccount.type : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? item.brokerageAccount.apiKey : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? item.brokerageAccount.apiSecret : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? item.brokerageAccount.configuration : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? item.brokerageAccount.marketOpen : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? item.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? item.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? item.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? item.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? item.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? item.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? item.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? item.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
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
  brokerageAccount: props.brokerageAccount ? 
    typeof props.brokerageAccount === 'object' && Object.keys(props.brokerageAccount).length === 1 && Object.keys(props.brokerageAccount)[0] === 'id'
    ? { connect: {
        id: props.brokerageAccount.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.brokerageAccount.id !== undefined ? props.brokerageAccount.id : undefined,
        fundId: props.brokerageAccount.fundId !== undefined ? {
            equals: props.brokerageAccount.fundId 
           } : undefined,
      },
      create: {
        provider: props.brokerageAccount.provider !== undefined ? props.brokerageAccount.provider : undefined,
        type: props.brokerageAccount.type !== undefined ? props.brokerageAccount.type : undefined,
        apiKey: props.brokerageAccount.apiKey !== undefined ? props.brokerageAccount.apiKey : undefined,
        apiSecret: props.brokerageAccount.apiSecret !== undefined ? props.brokerageAccount.apiSecret : undefined,
        configuration: props.brokerageAccount.configuration !== undefined ? props.brokerageAccount.configuration : undefined,
        marketOpen: props.brokerageAccount.marketOpen !== undefined ? props.brokerageAccount.marketOpen : undefined,
        realTime: props.brokerageAccount.realTime !== undefined ? props.brokerageAccount.realTime : undefined,
        cryptoTradingEnabled: props.brokerageAccount.cryptoTradingEnabled !== undefined ? props.brokerageAccount.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: props.brokerageAccount.cryptoTradingPairs !== undefined ? {
            set: props.brokerageAccount.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: props.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.brokerageAccount.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: props.brokerageAccount.tradeAllocationPct !== undefined ? props.brokerageAccount.tradeAllocationPct : undefined,
        autoAllocation: props.brokerageAccount.autoAllocation !== undefined ? props.brokerageAccount.autoAllocation : undefined,
        minPercentageChange: props.brokerageAccount.minPercentageChange !== undefined ? props.brokerageAccount.minPercentageChange : undefined,
        volumeThreshold: props.brokerageAccount.volumeThreshold !== undefined ? props.brokerageAccount.volumeThreshold : undefined,
        enablePortfolioTrailingStop: props.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.brokerageAccount.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: props.brokerageAccount.portfolioTrailPercent !== undefined ? props.brokerageAccount.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: props.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.brokerageAccount.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: props.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.brokerageAccount.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: props.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: props.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.brokerageAccount.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: props.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.brokerageAccount.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: props.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.brokerageAccount.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: props.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.brokerageAccount.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: props.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.brokerageAccount.minimumPriceChangePercent100 : undefined,
        deletedAt: props.brokerageAccount.deletedAt !== undefined ? props.brokerageAccount.deletedAt : undefined,
    allocation: props.brokerageAccount.allocation ? 
      typeof props.brokerageAccount.allocation === 'object' && Object.keys(props.brokerageAccount.allocation).length === 1 && Object.keys(props.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
          id: props.brokerageAccount.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.brokerageAccount.allocation.id !== undefined ? props.brokerageAccount.allocation.id : undefined,
          brokerageAccountId: props.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.brokerageAccount.allocation.brokerageAccountId : undefined,
        },
        create: {
          equities: props.brokerageAccount.allocation.equities !== undefined ? props.brokerageAccount.allocation.equities : undefined,
          optionsContracts: props.brokerageAccount.allocation.optionsContracts !== undefined ? props.brokerageAccount.allocation.optionsContracts : undefined,
          futures: props.brokerageAccount.allocation.futures !== undefined ? props.brokerageAccount.allocation.futures : undefined,
          etfs: props.brokerageAccount.allocation.etfs !== undefined ? props.brokerageAccount.allocation.etfs : undefined,
          forex: props.brokerageAccount.allocation.forex !== undefined ? props.brokerageAccount.allocation.forex : undefined,
          crypto: props.brokerageAccount.allocation.crypto !== undefined ? props.brokerageAccount.allocation.crypto : undefined,
          stocks: props.brokerageAccount.allocation.stocks !== undefined ? props.brokerageAccount.allocation.stocks : undefined,
          options: props.brokerageAccount.allocation.options !== undefined ? props.brokerageAccount.allocation.options : undefined,
        },
      }
    } : undefined,
    fund: props.brokerageAccount.fund ? 
      typeof props.brokerageAccount.fund === 'object' && Object.keys(props.brokerageAccount.fund).length === 1 && Object.keys(props.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
          id: props.brokerageAccount.fund.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.brokerageAccount.fund.id !== undefined ? props.brokerageAccount.fund.id : undefined,
          name: props.brokerageAccount.fund.name !== undefined ? {
              equals: props.brokerageAccount.fund.name 
             } : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? {
              equals: props.brokerageAccount.fund.slug 
             } : undefined,
          organizationId: props.brokerageAccount.fund.organizationId !== undefined ? {
              equals: props.brokerageAccount.fund.organizationId 
             } : undefined,
        },
        create: {
          name: props.brokerageAccount.fund.name !== undefined ? props.brokerageAccount.fund.name : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? props.brokerageAccount.fund.slug : undefined,
          description: props.brokerageAccount.fund.description !== undefined ? props.brokerageAccount.fund.description : undefined,
          status: props.brokerageAccount.fund.status !== undefined ? props.brokerageAccount.fund.status : undefined,
          tradingOverrides: props.brokerageAccount.fund.tradingOverrides !== undefined ? props.brokerageAccount.fund.tradingOverrides : undefined,
          llmOverrides: props.brokerageAccount.fund.llmOverrides !== undefined ? props.brokerageAccount.fund.llmOverrides : undefined,
          deletedAt: props.brokerageAccount.fund.deletedAt !== undefined ? props.brokerageAccount.fund.deletedAt : undefined,
      organization: props.brokerageAccount.fund.organization ? 
        typeof props.brokerageAccount.fund.organization === 'object' && Object.keys(props.brokerageAccount.fund.organization).length === 1 && Object.keys(props.brokerageAccount.fund.organization)[0] === 'id'
    ? { connect: {
            id: props.brokerageAccount.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.brokerageAccount.fund.organization.id !== undefined ? props.brokerageAccount.fund.organization.id : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            name: props.brokerageAccount.fund.organization.name !== undefined ? {
                equals: props.brokerageAccount.fund.organization.name 
               } : undefined,
          },
          create: {
            name: props.brokerageAccount.fund.organization.name !== undefined ? props.brokerageAccount.fund.organization.name : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            logoUrl: props.brokerageAccount.fund.organization.logoUrl !== undefined ? props.brokerageAccount.fund.organization.logoUrl : undefined,
            website: props.brokerageAccount.fund.organization.website !== undefined ? props.brokerageAccount.fund.organization.website : undefined,
            businessType: props.brokerageAccount.fund.organization.businessType !== undefined ? props.brokerageAccount.fund.organization.businessType : undefined,
            jurisdiction: props.brokerageAccount.fund.organization.jurisdiction !== undefined ? props.brokerageAccount.fund.organization.jurisdiction : undefined,
            regulatoryStatus: props.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? props.brokerageAccount.fund.organization.regulatoryStatus : undefined,
            description: props.brokerageAccount.fund.organization.description !== undefined ? props.brokerageAccount.fund.organization.description : undefined,
            tradingDefaults: props.brokerageAccount.fund.organization.tradingDefaults !== undefined ? props.brokerageAccount.fund.organization.tradingDefaults : undefined,
            llmDefaults: props.brokerageAccount.fund.organization.llmDefaults !== undefined ? props.brokerageAccount.fund.organization.llmDefaults : undefined,
            deletedAt: props.brokerageAccount.fund.organization.deletedAt !== undefined ? props.brokerageAccount.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      assignments: props.brokerageAccount.fund.assignments ? 
        Array.isArray(props.brokerageAccount.fund.assignments) && props.brokerageAccount.fund.assignments.length > 0 &&  props.brokerageAccount.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investments: props.brokerageAccount.fund.investments ? 
        Array.isArray(props.brokerageAccount.fund.investments) && props.brokerageAccount.fund.investments.length > 0 &&  props.brokerageAccount.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.investments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            investorId: item.investorId !== undefined ? {
                equals: item.investorId 
               } : undefined,
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.brokerageAccount.alerts ? 
      Array.isArray(props.brokerageAccount.alerts) && props.brokerageAccount.alerts.length > 0 &&  props.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.alerts.map((item: any) => ({
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
    trades: props.brokerageAccount.trades ? 
      Array.isArray(props.brokerageAccount.trades) && props.brokerageAccount.trades.length > 0 &&  props.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          brokerageAccountId: item.brokerageAccountId !== undefined ? {
              equals: item.brokerageAccountId 
             } : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
        },
        create: {
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
          exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
          entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
          exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
          entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
          exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
          entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
          exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
          pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
          pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
          durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
          marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
          marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
          sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
          thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
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
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    optionsPositions: props.brokerageAccount.optionsPositions ? 
      Array.isArray(props.brokerageAccount.optionsPositions) && props.brokerageAccount.optionsPositions.length > 0 &&  props.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.optionsPositions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.optionsPositions.map((item: any) => ({
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
          },
        }
      } : undefined,
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
            const baseDelay = Math.pow(2, retryCount) * 500;
            const jitter = Math.floor(Math.random() * 500);
            const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
            logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Create multiple OptionsTradeExecution records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of OptionsTradeExecution objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: OptionsTradeExecutionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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
  brokerageAccountId: prop.brokerageAccountId !== undefined ? prop.brokerageAccountId : undefined,
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Update a single OptionsTradeExecution record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated OptionsTradeExecution or null.
   */
  async update(props: OptionsTradeExecutionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsTradeExecutionType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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
  brokerageAccountId: props.brokerageAccountId !== undefined ? {
    equals: props.brokerageAccountId 
  } : undefined,
  brokerOrderId: props.brokerOrderId !== undefined ? {
    equals: props.brokerOrderId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
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
        brokerageAccountId: props.position.brokerageAccountId !== undefined ? {
            equals: props.position.brokerageAccountId
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
    brokerageAccount: props.position.brokerageAccount ? 
    typeof props.position.brokerageAccount === 'object' && Object.keys(props.position.brokerageAccount).length === 1 && (Object.keys(props.position.brokerageAccount)[0] === 'id' || Object.keys(props.position.brokerageAccount)[0] === 'symbol')
? {
    connect: {
      id: props.position.brokerageAccount.id
    }
} : { upsert: {
        where: {
          id: props.position.brokerageAccount.id !== undefined ? {
              equals: props.position.brokerageAccount.id
            } : undefined,
          fundId: props.position.brokerageAccount.fundId !== undefined ? {
              equals: props.position.brokerageAccount.fundId
            } : undefined,
        },
        update: {
          id: props.position.brokerageAccount.id !== undefined ? {
              set: props.position.brokerageAccount.id
            } : undefined,
          provider: props.position.brokerageAccount.provider !== undefined ? {
              set: props.position.brokerageAccount.provider
            } : undefined,
          type: props.position.brokerageAccount.type !== undefined ? {
              set: props.position.brokerageAccount.type
            } : undefined,
          apiKey: props.position.brokerageAccount.apiKey !== undefined ? {
              set: props.position.brokerageAccount.apiKey
            } : undefined,
          apiSecret: props.position.brokerageAccount.apiSecret !== undefined ? {
              set: props.position.brokerageAccount.apiSecret
            } : undefined,
          configuration: props.position.brokerageAccount.configuration !== undefined ? {
              set: props.position.brokerageAccount.configuration
            } : undefined,
          marketOpen: props.position.brokerageAccount.marketOpen !== undefined ? {
              set: props.position.brokerageAccount.marketOpen
            } : undefined,
          realTime: props.position.brokerageAccount.realTime !== undefined ? {
              set: props.position.brokerageAccount.realTime
            } : undefined,
          cryptoTradingEnabled: props.position.brokerageAccount.cryptoTradingEnabled !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: props.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: props.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: props.position.brokerageAccount.tradeAllocationPct !== undefined ? {
              set: props.position.brokerageAccount.tradeAllocationPct
            } : undefined,
          autoAllocation: props.position.brokerageAccount.autoAllocation !== undefined ? {
              set: props.position.brokerageAccount.autoAllocation
            } : undefined,
          minPercentageChange: props.position.brokerageAccount.minPercentageChange !== undefined ? {
              set: props.position.brokerageAccount.minPercentageChange
            } : undefined,
          volumeThreshold: props.position.brokerageAccount.volumeThreshold !== undefined ? {
              set: props.position.brokerageAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: props.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
              set: props.position.brokerageAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: props.position.brokerageAccount.portfolioTrailPercent !== undefined ? {
              set: props.position.brokerageAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: props.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: props.position.brokerageAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: props.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: props.position.brokerageAccount.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: props.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
              set: props.position.brokerageAccount.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: props.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
              set: props.position.brokerageAccount.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: props.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
              set: props.position.brokerageAccount.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: props.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
              set: props.position.brokerageAccount.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: props.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
              set: props.position.brokerageAccount.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: props.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
              set: props.position.brokerageAccount.minimumPriceChangePercent100
            } : undefined,
          deletedAt: props.position.brokerageAccount.deletedAt !== undefined ? {
              set: props.position.brokerageAccount.deletedAt
            } : undefined,
      allocation: props.position.brokerageAccount.allocation ? 
      typeof props.position.brokerageAccount.allocation === 'object' && Object.keys(props.position.brokerageAccount.allocation).length === 1 && (Object.keys(props.position.brokerageAccount.allocation)[0] === 'id' || Object.keys(props.position.brokerageAccount.allocation)[0] === 'symbol')
? {
      connect: {
        id: props.position.brokerageAccount.allocation.id
      }
} : { upsert: {
          where: {
            id: props.position.brokerageAccount.allocation.id !== undefined ? {
                equals: props.position.brokerageAccount.allocation.id
              } : undefined,
            brokerageAccountId: props.position.brokerageAccount.allocation.brokerageAccountId !== undefined ? {
                equals: props.position.brokerageAccount.allocation.brokerageAccountId
              } : undefined,
          },
          update: {
            id: props.position.brokerageAccount.allocation.id !== undefined ? {
                set: props.position.brokerageAccount.allocation.id
              } : undefined,
            equities: props.position.brokerageAccount.allocation.equities !== undefined ? {
                set: props.position.brokerageAccount.allocation.equities
              } : undefined,
            optionsContracts: props.position.brokerageAccount.allocation.optionsContracts !== undefined ? {
                set: props.position.brokerageAccount.allocation.optionsContracts
              } : undefined,
            futures: props.position.brokerageAccount.allocation.futures !== undefined ? {
                set: props.position.brokerageAccount.allocation.futures
              } : undefined,
            etfs: props.position.brokerageAccount.allocation.etfs !== undefined ? {
                set: props.position.brokerageAccount.allocation.etfs
              } : undefined,
            forex: props.position.brokerageAccount.allocation.forex !== undefined ? {
                set: props.position.brokerageAccount.allocation.forex
              } : undefined,
            crypto: props.position.brokerageAccount.allocation.crypto !== undefined ? {
                set: props.position.brokerageAccount.allocation.crypto
              } : undefined,
            stocks: props.position.brokerageAccount.allocation.stocks !== undefined ? {
                set: props.position.brokerageAccount.allocation.stocks
              } : undefined,
            options: props.position.brokerageAccount.allocation.options !== undefined ? {
                set: props.position.brokerageAccount.allocation.options
              } : undefined,
          },
          create: {
            equities: props.position.brokerageAccount.allocation.equities !== undefined ? props.position.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.position.brokerageAccount.allocation.optionsContracts !== undefined ? props.position.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.position.brokerageAccount.allocation.futures !== undefined ? props.position.brokerageAccount.allocation.futures : undefined,
            etfs: props.position.brokerageAccount.allocation.etfs !== undefined ? props.position.brokerageAccount.allocation.etfs : undefined,
            forex: props.position.brokerageAccount.allocation.forex !== undefined ? props.position.brokerageAccount.allocation.forex : undefined,
            crypto: props.position.brokerageAccount.allocation.crypto !== undefined ? props.position.brokerageAccount.allocation.crypto : undefined,
            stocks: props.position.brokerageAccount.allocation.stocks !== undefined ? props.position.brokerageAccount.allocation.stocks : undefined,
            options: props.position.brokerageAccount.allocation.options !== undefined ? props.position.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.position.brokerageAccount.fund ? 
      typeof props.position.brokerageAccount.fund === 'object' && Object.keys(props.position.brokerageAccount.fund).length === 1 && (Object.keys(props.position.brokerageAccount.fund)[0] === 'id' || Object.keys(props.position.brokerageAccount.fund)[0] === 'symbol')
? {
      connect: {
        id: props.position.brokerageAccount.fund.id
      }
} : { upsert: {
          where: {
            id: props.position.brokerageAccount.fund.id !== undefined ? {
                equals: props.position.brokerageAccount.fund.id
              } : undefined,
            name: props.position.brokerageAccount.fund.name !== undefined ? {
                equals: props.position.brokerageAccount.fund.name
              } : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? {
                equals: props.position.brokerageAccount.fund.slug
              } : undefined,
            organizationId: props.position.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.position.brokerageAccount.fund.organizationId
              } : undefined,
          },
          update: {
            id: props.position.brokerageAccount.fund.id !== undefined ? {
                set: props.position.brokerageAccount.fund.id
              } : undefined,
            name: props.position.brokerageAccount.fund.name !== undefined ? {
                set: props.position.brokerageAccount.fund.name
              } : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? {
                set: props.position.brokerageAccount.fund.slug
              } : undefined,
            description: props.position.brokerageAccount.fund.description !== undefined ? {
                set: props.position.brokerageAccount.fund.description
              } : undefined,
            status: props.position.brokerageAccount.fund.status !== undefined ? {
                set: props.position.brokerageAccount.fund.status
              } : undefined,
            tradingOverrides: props.position.brokerageAccount.fund.tradingOverrides !== undefined ? {
                set: props.position.brokerageAccount.fund.tradingOverrides
              } : undefined,
            llmOverrides: props.position.brokerageAccount.fund.llmOverrides !== undefined ? {
                set: props.position.brokerageAccount.fund.llmOverrides
              } : undefined,
            deletedAt: props.position.brokerageAccount.fund.deletedAt !== undefined ? {
                set: props.position.brokerageAccount.fund.deletedAt
              } : undefined,
          },
          create: {
            name: props.position.brokerageAccount.fund.name !== undefined ? props.position.brokerageAccount.fund.name : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? props.position.brokerageAccount.fund.slug : undefined,
            description: props.position.brokerageAccount.fund.description !== undefined ? props.position.brokerageAccount.fund.description : undefined,
            status: props.position.brokerageAccount.fund.status !== undefined ? props.position.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.position.brokerageAccount.fund.tradingOverrides !== undefined ? props.position.brokerageAccount.fund.tradingOverrides : undefined,
            llmOverrides: props.position.brokerageAccount.fund.llmOverrides !== undefined ? props.position.brokerageAccount.fund.llmOverrides : undefined,
            deletedAt: props.position.brokerageAccount.fund.deletedAt !== undefined ? props.position.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.position.brokerageAccount.alerts ? 
      Array.isArray(props.position.brokerageAccount.alerts) && props.position.brokerageAccount.alerts.length > 0 && props.position.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.position.brokerageAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.position.brokerageAccount.alerts.map((item: any) => ({
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
      trades: props.position.brokerageAccount.trades ? 
      Array.isArray(props.position.brokerageAccount.trades) && props.position.brokerageAccount.trades.length > 0 && props.position.brokerageAccount.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.position.brokerageAccount.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.position.brokerageAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal
              } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy
              } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis
              } : undefined,
            summary: item.summary !== undefined ? {
                set: item.summary
              } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence
              } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            deletedAt: item.deletedAt !== undefined ? {
                set: item.deletedAt
              } : undefined,
            symbol: item.symbol !== undefined ? {
                set: item.symbol
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            entryQty: item.entryQty !== undefined ? {
                set: item.entryQty
              } : undefined,
            exitQty: item.exitQty !== undefined ? {
                set: item.exitQty
              } : undefined,
            entryValue: item.entryValue !== undefined ? {
                set: item.entryValue
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            pnlAmount: item.pnlAmount !== undefined ? {
                set: item.pnlAmount
              } : undefined,
            pnlPercent: item.pnlPercent !== undefined ? {
                set: item.pnlPercent
              } : undefined,
            durationMinutes: item.durationMinutes !== undefined ? {
                set: item.durationMinutes
              } : undefined,
            marketPhase: item.marketPhase !== undefined ? {
                set: item.marketPhase
              } : undefined,
            marketVolatility: item.marketVolatility !== undefined ? {
                set: item.marketVolatility
              } : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? {
                set: item.sessionHorizonMinutes
              } : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? {
                set: item.thresholdsJson
              } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.position.brokerageAccount.optionsTradeExecutions ? 
      Array.isArray(props.position.brokerageAccount.optionsTradeExecutions) && props.position.brokerageAccount.optionsTradeExecutions.length > 0 && props.position.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
          provider: props.position.brokerageAccount.provider !== undefined ? props.position.brokerageAccount.provider : undefined,
          type: props.position.brokerageAccount.type !== undefined ? props.position.brokerageAccount.type : undefined,
          apiKey: props.position.brokerageAccount.apiKey !== undefined ? props.position.brokerageAccount.apiKey : undefined,
          apiSecret: props.position.brokerageAccount.apiSecret !== undefined ? props.position.brokerageAccount.apiSecret : undefined,
          configuration: props.position.brokerageAccount.configuration !== undefined ? props.position.brokerageAccount.configuration : undefined,
          marketOpen: props.position.brokerageAccount.marketOpen !== undefined ? props.position.brokerageAccount.marketOpen : undefined,
          realTime: props.position.brokerageAccount.realTime !== undefined ? props.position.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.position.brokerageAccount.cryptoTradingEnabled !== undefined ? props.position.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.position.brokerageAccount.tradeAllocationPct !== undefined ? props.position.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.position.brokerageAccount.autoAllocation !== undefined ? props.position.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.position.brokerageAccount.minPercentageChange !== undefined ? props.position.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.position.brokerageAccount.volumeThreshold !== undefined ? props.position.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.position.brokerageAccount.portfolioTrailPercent !== undefined ? props.position.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.position.brokerageAccount.deletedAt !== undefined ? props.position.brokerageAccount.deletedAt : undefined,
      allocation: props.position.brokerageAccount.allocation ? 
        typeof props.position.brokerageAccount.allocation === 'object' && Object.keys(props.position.brokerageAccount.allocation).length === 1 && Object.keys(props.position.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.allocation.id !== undefined ? props.position.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.position.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.position.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.position.brokerageAccount.allocation.equities !== undefined ? props.position.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.position.brokerageAccount.allocation.optionsContracts !== undefined ? props.position.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.position.brokerageAccount.allocation.futures !== undefined ? props.position.brokerageAccount.allocation.futures : undefined,
            etfs: props.position.brokerageAccount.allocation.etfs !== undefined ? props.position.brokerageAccount.allocation.etfs : undefined,
            forex: props.position.brokerageAccount.allocation.forex !== undefined ? props.position.brokerageAccount.allocation.forex : undefined,
            crypto: props.position.brokerageAccount.allocation.crypto !== undefined ? props.position.brokerageAccount.allocation.crypto : undefined,
            stocks: props.position.brokerageAccount.allocation.stocks !== undefined ? props.position.brokerageAccount.allocation.stocks : undefined,
            options: props.position.brokerageAccount.allocation.options !== undefined ? props.position.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.position.brokerageAccount.fund ? 
        typeof props.position.brokerageAccount.fund === 'object' && Object.keys(props.position.brokerageAccount.fund).length === 1 && Object.keys(props.position.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.fund.id !== undefined ? props.position.brokerageAccount.fund.id : undefined,
            name: props.position.brokerageAccount.fund.name !== undefined ? {
                equals: props.position.brokerageAccount.fund.name 
               } : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? {
                equals: props.position.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.position.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.position.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.position.brokerageAccount.fund.name !== undefined ? props.position.brokerageAccount.fund.name : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? props.position.brokerageAccount.fund.slug : undefined,
            description: props.position.brokerageAccount.fund.description !== undefined ? props.position.brokerageAccount.fund.description : undefined,
            status: props.position.brokerageAccount.fund.status !== undefined ? props.position.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.position.brokerageAccount.fund.tradingOverrides !== undefined ? props.position.brokerageAccount.fund.tradingOverrides : undefined,
            llmOverrides: props.position.brokerageAccount.fund.llmOverrides !== undefined ? props.position.brokerageAccount.fund.llmOverrides : undefined,
            deletedAt: props.position.brokerageAccount.fund.deletedAt !== undefined ? props.position.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.position.brokerageAccount.alerts ? 
        Array.isArray(props.position.brokerageAccount.alerts) && props.position.brokerageAccount.alerts.length > 0 &&  props.position.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.alerts.map((item: any) => ({
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
      trades: props.position.brokerageAccount.trades ? 
        Array.isArray(props.position.brokerageAccount.trades) && props.position.brokerageAccount.trades.length > 0 &&  props.position.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.position.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.position.brokerageAccount.optionsTradeExecutions) && props.position.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.position.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
    brokerageAccount: props.position.brokerageAccount ? 
      typeof props.position.brokerageAccount === 'object' && Object.keys(props.position.brokerageAccount).length === 1 && Object.keys(props.position.brokerageAccount)[0] === 'id'
    ? { connect: {
          id: props.position.brokerageAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.position.brokerageAccount.id !== undefined ? props.position.brokerageAccount.id : undefined,
          fundId: props.position.brokerageAccount.fundId !== undefined ? {
              equals: props.position.brokerageAccount.fundId 
             } : undefined,
        },
        create: {
          provider: props.position.brokerageAccount.provider !== undefined ? props.position.brokerageAccount.provider : undefined,
          type: props.position.brokerageAccount.type !== undefined ? props.position.brokerageAccount.type : undefined,
          apiKey: props.position.brokerageAccount.apiKey !== undefined ? props.position.brokerageAccount.apiKey : undefined,
          apiSecret: props.position.brokerageAccount.apiSecret !== undefined ? props.position.brokerageAccount.apiSecret : undefined,
          configuration: props.position.brokerageAccount.configuration !== undefined ? props.position.brokerageAccount.configuration : undefined,
          marketOpen: props.position.brokerageAccount.marketOpen !== undefined ? props.position.brokerageAccount.marketOpen : undefined,
          realTime: props.position.brokerageAccount.realTime !== undefined ? props.position.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.position.brokerageAccount.cryptoTradingEnabled !== undefined ? props.position.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.position.brokerageAccount.tradeAllocationPct !== undefined ? props.position.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.position.brokerageAccount.autoAllocation !== undefined ? props.position.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.position.brokerageAccount.minPercentageChange !== undefined ? props.position.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.position.brokerageAccount.volumeThreshold !== undefined ? props.position.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.position.brokerageAccount.portfolioTrailPercent !== undefined ? props.position.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.position.brokerageAccount.deletedAt !== undefined ? props.position.brokerageAccount.deletedAt : undefined,
      allocation: props.position.brokerageAccount.allocation ? 
        typeof props.position.brokerageAccount.allocation === 'object' && Object.keys(props.position.brokerageAccount.allocation).length === 1 && Object.keys(props.position.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.allocation.id !== undefined ? props.position.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.position.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.position.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.position.brokerageAccount.allocation.equities !== undefined ? props.position.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.position.brokerageAccount.allocation.optionsContracts !== undefined ? props.position.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.position.brokerageAccount.allocation.futures !== undefined ? props.position.brokerageAccount.allocation.futures : undefined,
            etfs: props.position.brokerageAccount.allocation.etfs !== undefined ? props.position.brokerageAccount.allocation.etfs : undefined,
            forex: props.position.brokerageAccount.allocation.forex !== undefined ? props.position.brokerageAccount.allocation.forex : undefined,
            crypto: props.position.brokerageAccount.allocation.crypto !== undefined ? props.position.brokerageAccount.allocation.crypto : undefined,
            stocks: props.position.brokerageAccount.allocation.stocks !== undefined ? props.position.brokerageAccount.allocation.stocks : undefined,
            options: props.position.brokerageAccount.allocation.options !== undefined ? props.position.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.position.brokerageAccount.fund ? 
        typeof props.position.brokerageAccount.fund === 'object' && Object.keys(props.position.brokerageAccount.fund).length === 1 && Object.keys(props.position.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.fund.id !== undefined ? props.position.brokerageAccount.fund.id : undefined,
            name: props.position.brokerageAccount.fund.name !== undefined ? {
                equals: props.position.brokerageAccount.fund.name 
               } : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? {
                equals: props.position.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.position.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.position.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.position.brokerageAccount.fund.name !== undefined ? props.position.brokerageAccount.fund.name : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? props.position.brokerageAccount.fund.slug : undefined,
            description: props.position.brokerageAccount.fund.description !== undefined ? props.position.brokerageAccount.fund.description : undefined,
            status: props.position.brokerageAccount.fund.status !== undefined ? props.position.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.position.brokerageAccount.fund.tradingOverrides !== undefined ? props.position.brokerageAccount.fund.tradingOverrides : undefined,
            llmOverrides: props.position.brokerageAccount.fund.llmOverrides !== undefined ? props.position.brokerageAccount.fund.llmOverrides : undefined,
            deletedAt: props.position.brokerageAccount.fund.deletedAt !== undefined ? props.position.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.position.brokerageAccount.alerts ? 
        Array.isArray(props.position.brokerageAccount.alerts) && props.position.brokerageAccount.alerts.length > 0 &&  props.position.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.alerts.map((item: any) => ({
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
      trades: props.position.brokerageAccount.trades ? 
        Array.isArray(props.position.brokerageAccount.trades) && props.position.brokerageAccount.trades.length > 0 &&  props.position.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.position.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.position.brokerageAccount.optionsTradeExecutions) && props.position.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.position.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
      brokerageAccount: item.brokerageAccount ? 
      typeof item.brokerageAccount === 'object' && Object.keys(item.brokerageAccount).length === 1 && (Object.keys(item.brokerageAccount)[0] === 'id' || Object.keys(item.brokerageAccount)[0] === 'symbol')
? {
      connect: {
        id: item.brokerageAccount.id
      }
} : { upsert: {
          where: {
            id: item.brokerageAccount.id !== undefined ? {
                equals: item.brokerageAccount.id
              } : undefined,
            fundId: item.brokerageAccount.fundId !== undefined ? {
                equals: item.brokerageAccount.fundId
              } : undefined,
          },
          update: {
            id: item.brokerageAccount.id !== undefined ? {
                set: item.brokerageAccount.id
              } : undefined,
            provider: item.brokerageAccount.provider !== undefined ? {
                set: item.brokerageAccount.provider
              } : undefined,
            type: item.brokerageAccount.type !== undefined ? {
                set: item.brokerageAccount.type
              } : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? {
                set: item.brokerageAccount.apiKey
              } : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? {
                set: item.brokerageAccount.apiSecret
              } : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? {
                set: item.brokerageAccount.configuration
              } : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? {
                set: item.brokerageAccount.marketOpen
              } : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? {
                set: item.brokerageAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? {
                set: item.brokerageAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.brokerageAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? {
                set: item.brokerageAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? {
                set: item.brokerageAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? {
                set: item.brokerageAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? {
                set: item.brokerageAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.brokerageAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? {
                set: item.brokerageAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.brokerageAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.brokerageAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.brokerageAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.brokerageAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.brokerageAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.brokerageAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.brokerageAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.brokerageAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? {
                set: item.brokerageAccount.deletedAt
              } : undefined,
          },
          create: {
            provider: item.brokerageAccount.provider !== undefined ? item.brokerageAccount.provider : undefined,
            type: item.brokerageAccount.type !== undefined ? item.brokerageAccount.type : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? item.brokerageAccount.apiKey : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? item.brokerageAccount.apiSecret : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? item.brokerageAccount.configuration : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? item.brokerageAccount.marketOpen : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? item.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? item.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? item.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? item.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? item.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? item.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? item.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? item.brokerageAccount.deletedAt : undefined,
          },
        }
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
      brokerageAccount: item.brokerageAccount ? 
        typeof item.brokerageAccount === 'object' && Object.keys(item.brokerageAccount).length === 1 && Object.keys(item.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.brokerageAccount.id !== undefined ? item.brokerageAccount.id : undefined,
            fundId: item.brokerageAccount.fundId !== undefined ? {
                equals: item.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.brokerageAccount.provider !== undefined ? item.brokerageAccount.provider : undefined,
            type: item.brokerageAccount.type !== undefined ? item.brokerageAccount.type : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? item.brokerageAccount.apiKey : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? item.brokerageAccount.apiSecret : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? item.brokerageAccount.configuration : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? item.brokerageAccount.marketOpen : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? item.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? item.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? item.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? item.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? item.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? item.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? item.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? item.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
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
      brokerageAccount: item.brokerageAccount ? 
        typeof item.brokerageAccount === 'object' && Object.keys(item.brokerageAccount).length === 1 && Object.keys(item.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.brokerageAccount.id !== undefined ? item.brokerageAccount.id : undefined,
            fundId: item.brokerageAccount.fundId !== undefined ? {
                equals: item.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.brokerageAccount.provider !== undefined ? item.brokerageAccount.provider : undefined,
            type: item.brokerageAccount.type !== undefined ? item.brokerageAccount.type : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? item.brokerageAccount.apiKey : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? item.brokerageAccount.apiSecret : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? item.brokerageAccount.configuration : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? item.brokerageAccount.marketOpen : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? item.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? item.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? item.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? item.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? item.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? item.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? item.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? item.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
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
  brokerageAccount: props.brokerageAccount ? 
  typeof props.brokerageAccount === 'object' && Object.keys(props.brokerageAccount).length === 1 && (Object.keys(props.brokerageAccount)[0] === 'id' || Object.keys(props.brokerageAccount)[0] === 'symbol')
? {
  connect: {
    id: props.brokerageAccount.id
  }
} : { upsert: {
      where: {
        id: props.brokerageAccount.id !== undefined ? {
            equals: props.brokerageAccount.id
          } : undefined,
        fundId: props.brokerageAccount.fundId !== undefined ? {
            equals: props.brokerageAccount.fundId
          } : undefined,
      },
      update: {
        id: props.brokerageAccount.id !== undefined ? {
            set: props.brokerageAccount.id
          } : undefined,
        provider: props.brokerageAccount.provider !== undefined ? {
            set: props.brokerageAccount.provider
          } : undefined,
        type: props.brokerageAccount.type !== undefined ? {
            set: props.brokerageAccount.type
          } : undefined,
        apiKey: props.brokerageAccount.apiKey !== undefined ? {
            set: props.brokerageAccount.apiKey
          } : undefined,
        apiSecret: props.brokerageAccount.apiSecret !== undefined ? {
            set: props.brokerageAccount.apiSecret
          } : undefined,
        configuration: props.brokerageAccount.configuration !== undefined ? {
            set: props.brokerageAccount.configuration
          } : undefined,
        marketOpen: props.brokerageAccount.marketOpen !== undefined ? {
            set: props.brokerageAccount.marketOpen
          } : undefined,
        realTime: props.brokerageAccount.realTime !== undefined ? {
            set: props.brokerageAccount.realTime
          } : undefined,
        cryptoTradingEnabled: props.brokerageAccount.cryptoTradingEnabled !== undefined ? {
            set: props.brokerageAccount.cryptoTradingEnabled
          } : undefined,
        cryptoTradingPairs: props.brokerageAccount.cryptoTradingPairs !== undefined ? {
            set: props.brokerageAccount.cryptoTradingPairs
          } : undefined,
        cryptoTradeAllocationPct: props.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
            set: props.brokerageAccount.cryptoTradeAllocationPct
          } : undefined,
        tradeAllocationPct: props.brokerageAccount.tradeAllocationPct !== undefined ? {
            set: props.brokerageAccount.tradeAllocationPct
          } : undefined,
        autoAllocation: props.brokerageAccount.autoAllocation !== undefined ? {
            set: props.brokerageAccount.autoAllocation
          } : undefined,
        minPercentageChange: props.brokerageAccount.minPercentageChange !== undefined ? {
            set: props.brokerageAccount.minPercentageChange
          } : undefined,
        volumeThreshold: props.brokerageAccount.volumeThreshold !== undefined ? {
            set: props.brokerageAccount.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: props.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
            set: props.brokerageAccount.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: props.brokerageAccount.portfolioTrailPercent !== undefined ? {
            set: props.brokerageAccount.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: props.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
            set: props.brokerageAccount.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: props.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
            set: props.brokerageAccount.reducedPortfolioTrailPercent
          } : undefined,
        defaultTrailingStopPercentage100: props.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
            set: props.brokerageAccount.defaultTrailingStopPercentage100
          } : undefined,
        firstTrailReductionThreshold100: props.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
            set: props.brokerageAccount.firstTrailReductionThreshold100
          } : undefined,
        secondTrailReductionThreshold100: props.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
            set: props.brokerageAccount.secondTrailReductionThreshold100
          } : undefined,
        firstReducedTrailPercentage100: props.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
            set: props.brokerageAccount.firstReducedTrailPercentage100
          } : undefined,
        secondReducedTrailPercentage100: props.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
            set: props.brokerageAccount.secondReducedTrailPercentage100
          } : undefined,
        minimumPriceChangePercent100: props.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
            set: props.brokerageAccount.minimumPriceChangePercent100
          } : undefined,
        deletedAt: props.brokerageAccount.deletedAt !== undefined ? {
            set: props.brokerageAccount.deletedAt
          } : undefined,
    allocation: props.brokerageAccount.allocation ? 
    typeof props.brokerageAccount.allocation === 'object' && Object.keys(props.brokerageAccount.allocation).length === 1 && (Object.keys(props.brokerageAccount.allocation)[0] === 'id' || Object.keys(props.brokerageAccount.allocation)[0] === 'symbol')
? {
    connect: {
      id: props.brokerageAccount.allocation.id
    }
} : { upsert: {
        where: {
          id: props.brokerageAccount.allocation.id !== undefined ? {
              equals: props.brokerageAccount.allocation.id
            } : undefined,
          brokerageAccountId: props.brokerageAccount.allocation.brokerageAccountId !== undefined ? {
              equals: props.brokerageAccount.allocation.brokerageAccountId
            } : undefined,
        },
        update: {
          id: props.brokerageAccount.allocation.id !== undefined ? {
              set: props.brokerageAccount.allocation.id
            } : undefined,
          equities: props.brokerageAccount.allocation.equities !== undefined ? {
              set: props.brokerageAccount.allocation.equities
            } : undefined,
          optionsContracts: props.brokerageAccount.allocation.optionsContracts !== undefined ? {
              set: props.brokerageAccount.allocation.optionsContracts
            } : undefined,
          futures: props.brokerageAccount.allocation.futures !== undefined ? {
              set: props.brokerageAccount.allocation.futures
            } : undefined,
          etfs: props.brokerageAccount.allocation.etfs !== undefined ? {
              set: props.brokerageAccount.allocation.etfs
            } : undefined,
          forex: props.brokerageAccount.allocation.forex !== undefined ? {
              set: props.brokerageAccount.allocation.forex
            } : undefined,
          crypto: props.brokerageAccount.allocation.crypto !== undefined ? {
              set: props.brokerageAccount.allocation.crypto
            } : undefined,
          stocks: props.brokerageAccount.allocation.stocks !== undefined ? {
              set: props.brokerageAccount.allocation.stocks
            } : undefined,
          options: props.brokerageAccount.allocation.options !== undefined ? {
              set: props.brokerageAccount.allocation.options
            } : undefined,
        },
        create: {
          equities: props.brokerageAccount.allocation.equities !== undefined ? props.brokerageAccount.allocation.equities : undefined,
          optionsContracts: props.brokerageAccount.allocation.optionsContracts !== undefined ? props.brokerageAccount.allocation.optionsContracts : undefined,
          futures: props.brokerageAccount.allocation.futures !== undefined ? props.brokerageAccount.allocation.futures : undefined,
          etfs: props.brokerageAccount.allocation.etfs !== undefined ? props.brokerageAccount.allocation.etfs : undefined,
          forex: props.brokerageAccount.allocation.forex !== undefined ? props.brokerageAccount.allocation.forex : undefined,
          crypto: props.brokerageAccount.allocation.crypto !== undefined ? props.brokerageAccount.allocation.crypto : undefined,
          stocks: props.brokerageAccount.allocation.stocks !== undefined ? props.brokerageAccount.allocation.stocks : undefined,
          options: props.brokerageAccount.allocation.options !== undefined ? props.brokerageAccount.allocation.options : undefined,
        },
      }
    } : undefined,
    fund: props.brokerageAccount.fund ? 
    typeof props.brokerageAccount.fund === 'object' && Object.keys(props.brokerageAccount.fund).length === 1 && (Object.keys(props.brokerageAccount.fund)[0] === 'id' || Object.keys(props.brokerageAccount.fund)[0] === 'symbol')
? {
    connect: {
      id: props.brokerageAccount.fund.id
    }
} : { upsert: {
        where: {
          id: props.brokerageAccount.fund.id !== undefined ? {
              equals: props.brokerageAccount.fund.id
            } : undefined,
          name: props.brokerageAccount.fund.name !== undefined ? {
              equals: props.brokerageAccount.fund.name
            } : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? {
              equals: props.brokerageAccount.fund.slug
            } : undefined,
          organizationId: props.brokerageAccount.fund.organizationId !== undefined ? {
              equals: props.brokerageAccount.fund.organizationId
            } : undefined,
        },
        update: {
          id: props.brokerageAccount.fund.id !== undefined ? {
              set: props.brokerageAccount.fund.id
            } : undefined,
          name: props.brokerageAccount.fund.name !== undefined ? {
              set: props.brokerageAccount.fund.name
            } : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? {
              set: props.brokerageAccount.fund.slug
            } : undefined,
          description: props.brokerageAccount.fund.description !== undefined ? {
              set: props.brokerageAccount.fund.description
            } : undefined,
          status: props.brokerageAccount.fund.status !== undefined ? {
              set: props.brokerageAccount.fund.status
            } : undefined,
          tradingOverrides: props.brokerageAccount.fund.tradingOverrides !== undefined ? {
              set: props.brokerageAccount.fund.tradingOverrides
            } : undefined,
          llmOverrides: props.brokerageAccount.fund.llmOverrides !== undefined ? {
              set: props.brokerageAccount.fund.llmOverrides
            } : undefined,
          deletedAt: props.brokerageAccount.fund.deletedAt !== undefined ? {
              set: props.brokerageAccount.fund.deletedAt
            } : undefined,
      organization: props.brokerageAccount.fund.organization ? 
      typeof props.brokerageAccount.fund.organization === 'object' && Object.keys(props.brokerageAccount.fund.organization).length === 1 && (Object.keys(props.brokerageAccount.fund.organization)[0] === 'id' || Object.keys(props.brokerageAccount.fund.organization)[0] === 'symbol')
? {
      connect: {
        id: props.brokerageAccount.fund.organization.id
      }
} : { upsert: {
          where: {
            id: props.brokerageAccount.fund.organization.id !== undefined ? {
                equals: props.brokerageAccount.fund.organization.id
              } : undefined,
            name: props.brokerageAccount.fund.organization.name !== undefined ? {
                equals: props.brokerageAccount.fund.organization.name
              } : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? {
                equals: props.brokerageAccount.fund.organization.slug
              } : undefined,
          },
          update: {
            id: props.brokerageAccount.fund.organization.id !== undefined ? {
                set: props.brokerageAccount.fund.organization.id
              } : undefined,
            name: props.brokerageAccount.fund.organization.name !== undefined ? {
                set: props.brokerageAccount.fund.organization.name
              } : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? {
                set: props.brokerageAccount.fund.organization.slug
              } : undefined,
            logoUrl: props.brokerageAccount.fund.organization.logoUrl !== undefined ? {
                set: props.brokerageAccount.fund.organization.logoUrl
              } : undefined,
            website: props.brokerageAccount.fund.organization.website !== undefined ? {
                set: props.brokerageAccount.fund.organization.website
              } : undefined,
            businessType: props.brokerageAccount.fund.organization.businessType !== undefined ? {
                set: props.brokerageAccount.fund.organization.businessType
              } : undefined,
            jurisdiction: props.brokerageAccount.fund.organization.jurisdiction !== undefined ? {
                set: props.brokerageAccount.fund.organization.jurisdiction
              } : undefined,
            regulatoryStatus: props.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? {
                set: props.brokerageAccount.fund.organization.regulatoryStatus
              } : undefined,
            description: props.brokerageAccount.fund.organization.description !== undefined ? {
                set: props.brokerageAccount.fund.organization.description
              } : undefined,
            tradingDefaults: props.brokerageAccount.fund.organization.tradingDefaults !== undefined ? {
                set: props.brokerageAccount.fund.organization.tradingDefaults
              } : undefined,
            llmDefaults: props.brokerageAccount.fund.organization.llmDefaults !== undefined ? {
                set: props.brokerageAccount.fund.organization.llmDefaults
              } : undefined,
            deletedAt: props.brokerageAccount.fund.organization.deletedAt !== undefined ? {
                set: props.brokerageAccount.fund.organization.deletedAt
              } : undefined,
          },
          create: {
            name: props.brokerageAccount.fund.organization.name !== undefined ? props.brokerageAccount.fund.organization.name : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            logoUrl: props.brokerageAccount.fund.organization.logoUrl !== undefined ? props.brokerageAccount.fund.organization.logoUrl : undefined,
            website: props.brokerageAccount.fund.organization.website !== undefined ? props.brokerageAccount.fund.organization.website : undefined,
            businessType: props.brokerageAccount.fund.organization.businessType !== undefined ? props.brokerageAccount.fund.organization.businessType : undefined,
            jurisdiction: props.brokerageAccount.fund.organization.jurisdiction !== undefined ? props.brokerageAccount.fund.organization.jurisdiction : undefined,
            regulatoryStatus: props.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? props.brokerageAccount.fund.organization.regulatoryStatus : undefined,
            description: props.brokerageAccount.fund.organization.description !== undefined ? props.brokerageAccount.fund.organization.description : undefined,
            tradingDefaults: props.brokerageAccount.fund.organization.tradingDefaults !== undefined ? props.brokerageAccount.fund.organization.tradingDefaults : undefined,
            llmDefaults: props.brokerageAccount.fund.organization.llmDefaults !== undefined ? props.brokerageAccount.fund.organization.llmDefaults : undefined,
            deletedAt: props.brokerageAccount.fund.organization.deletedAt !== undefined ? props.brokerageAccount.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      assignments: props.brokerageAccount.fund.assignments ? 
      Array.isArray(props.brokerageAccount.fund.assignments) && props.brokerageAccount.fund.assignments.length > 0 && props.brokerageAccount.fund.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.brokerageAccount.fund.assignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.brokerageAccount.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investments: props.brokerageAccount.fund.investments ? 
      Array.isArray(props.brokerageAccount.fund.investments) && props.brokerageAccount.fund.investments.length > 0 && props.brokerageAccount.fund.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.brokerageAccount.fund.investments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.brokerageAccount.fund.investments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            investorId: item.investorId !== undefined ? {
                equals: item.investorId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            units: item.units !== undefined ? {
                set: item.units
              } : undefined,
            investedAt: item.investedAt !== undefined ? {
                set: item.investedAt
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: props.brokerageAccount.fund.name !== undefined ? props.brokerageAccount.fund.name : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? props.brokerageAccount.fund.slug : undefined,
          description: props.brokerageAccount.fund.description !== undefined ? props.brokerageAccount.fund.description : undefined,
          status: props.brokerageAccount.fund.status !== undefined ? props.brokerageAccount.fund.status : undefined,
          tradingOverrides: props.brokerageAccount.fund.tradingOverrides !== undefined ? props.brokerageAccount.fund.tradingOverrides : undefined,
          llmOverrides: props.brokerageAccount.fund.llmOverrides !== undefined ? props.brokerageAccount.fund.llmOverrides : undefined,
          deletedAt: props.brokerageAccount.fund.deletedAt !== undefined ? props.brokerageAccount.fund.deletedAt : undefined,
      organization: props.brokerageAccount.fund.organization ? 
        typeof props.brokerageAccount.fund.organization === 'object' && Object.keys(props.brokerageAccount.fund.organization).length === 1 && Object.keys(props.brokerageAccount.fund.organization)[0] === 'id'
    ? { connect: {
            id: props.brokerageAccount.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.brokerageAccount.fund.organization.id !== undefined ? props.brokerageAccount.fund.organization.id : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            name: props.brokerageAccount.fund.organization.name !== undefined ? {
                equals: props.brokerageAccount.fund.organization.name 
               } : undefined,
          },
          create: {
            name: props.brokerageAccount.fund.organization.name !== undefined ? props.brokerageAccount.fund.organization.name : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            logoUrl: props.brokerageAccount.fund.organization.logoUrl !== undefined ? props.brokerageAccount.fund.organization.logoUrl : undefined,
            website: props.brokerageAccount.fund.organization.website !== undefined ? props.brokerageAccount.fund.organization.website : undefined,
            businessType: props.brokerageAccount.fund.organization.businessType !== undefined ? props.brokerageAccount.fund.organization.businessType : undefined,
            jurisdiction: props.brokerageAccount.fund.organization.jurisdiction !== undefined ? props.brokerageAccount.fund.organization.jurisdiction : undefined,
            regulatoryStatus: props.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? props.brokerageAccount.fund.organization.regulatoryStatus : undefined,
            description: props.brokerageAccount.fund.organization.description !== undefined ? props.brokerageAccount.fund.organization.description : undefined,
            tradingDefaults: props.brokerageAccount.fund.organization.tradingDefaults !== undefined ? props.brokerageAccount.fund.organization.tradingDefaults : undefined,
            llmDefaults: props.brokerageAccount.fund.organization.llmDefaults !== undefined ? props.brokerageAccount.fund.organization.llmDefaults : undefined,
            deletedAt: props.brokerageAccount.fund.organization.deletedAt !== undefined ? props.brokerageAccount.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      assignments: props.brokerageAccount.fund.assignments ? 
        Array.isArray(props.brokerageAccount.fund.assignments) && props.brokerageAccount.fund.assignments.length > 0 &&  props.brokerageAccount.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investments: props.brokerageAccount.fund.investments ? 
        Array.isArray(props.brokerageAccount.fund.investments) && props.brokerageAccount.fund.investments.length > 0 &&  props.brokerageAccount.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.investments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            investorId: item.investorId !== undefined ? {
                equals: item.investorId 
               } : undefined,
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.brokerageAccount.alerts ? 
    Array.isArray(props.brokerageAccount.alerts) && props.brokerageAccount.alerts.length > 0 && props.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.brokerageAccount.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.brokerageAccount.alerts.map((item: any) => ({
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
    trades: props.brokerageAccount.trades ? 
    Array.isArray(props.brokerageAccount.trades) && props.brokerageAccount.trades.length > 0 && props.brokerageAccount.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.brokerageAccount.trades.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.brokerageAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          brokerageAccountId: item.brokerageAccountId !== undefined ? {
              equals: item.brokerageAccountId
            } : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          signal: item.signal !== undefined ? {
              set: item.signal
            } : undefined,
          strategy: item.strategy !== undefined ? {
              set: item.strategy
            } : undefined,
          analysis: item.analysis !== undefined ? {
              set: item.analysis
            } : undefined,
          summary: item.summary !== undefined ? {
              set: item.summary
            } : undefined,
          confidence: item.confidence !== undefined ? {
              set: item.confidence
            } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          deletedAt: item.deletedAt !== undefined ? {
              set: item.deletedAt
            } : undefined,
          symbol: item.symbol !== undefined ? {
              set: item.symbol
            } : undefined,
          entryPrice: item.entryPrice !== undefined ? {
              set: item.entryPrice
            } : undefined,
          exitPrice: item.exitPrice !== undefined ? {
              set: item.exitPrice
            } : undefined,
          entryQty: item.entryQty !== undefined ? {
              set: item.entryQty
            } : undefined,
          exitQty: item.exitQty !== undefined ? {
              set: item.exitQty
            } : undefined,
          entryValue: item.entryValue !== undefined ? {
              set: item.entryValue
            } : undefined,
          exitValue: item.exitValue !== undefined ? {
              set: item.exitValue
            } : undefined,
          entryTime: item.entryTime !== undefined ? {
              set: item.entryTime
            } : undefined,
          exitTime: item.exitTime !== undefined ? {
              set: item.exitTime
            } : undefined,
          pnlAmount: item.pnlAmount !== undefined ? {
              set: item.pnlAmount
            } : undefined,
          pnlPercent: item.pnlPercent !== undefined ? {
              set: item.pnlPercent
            } : undefined,
          durationMinutes: item.durationMinutes !== undefined ? {
              set: item.durationMinutes
            } : undefined,
          marketPhase: item.marketPhase !== undefined ? {
              set: item.marketPhase
            } : undefined,
          marketVolatility: item.marketVolatility !== undefined ? {
              set: item.marketVolatility
            } : undefined,
          sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? {
              set: item.sessionHorizonMinutes
            } : undefined,
          thresholdsJson: item.thresholdsJson !== undefined ? {
              set: item.thresholdsJson
            } : undefined,
      actions: item.actions ? 
      Array.isArray(item.actions) && item.actions.length > 0 && item.actions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.actions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
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
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            primary: item.primary !== undefined ? item.primary : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
          exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
          entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
          exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
          entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
          exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
          entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
          exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
          pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
          pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
          durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
          marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
          marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
          sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
          thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
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
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    optionsPositions: props.brokerageAccount.optionsPositions ? 
    Array.isArray(props.brokerageAccount.optionsPositions) && props.brokerageAccount.optionsPositions.length > 0 && props.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.brokerageAccount.optionsPositions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.brokerageAccount.optionsPositions.map((item: any) => ({
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
          },
        }
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
          },
        }
      } : undefined,
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
      }))
    } : undefined,
      },
      create: {
        provider: props.brokerageAccount.provider !== undefined ? props.brokerageAccount.provider : undefined,
        type: props.brokerageAccount.type !== undefined ? props.brokerageAccount.type : undefined,
        apiKey: props.brokerageAccount.apiKey !== undefined ? props.brokerageAccount.apiKey : undefined,
        apiSecret: props.brokerageAccount.apiSecret !== undefined ? props.brokerageAccount.apiSecret : undefined,
        configuration: props.brokerageAccount.configuration !== undefined ? props.brokerageAccount.configuration : undefined,
        marketOpen: props.brokerageAccount.marketOpen !== undefined ? props.brokerageAccount.marketOpen : undefined,
        realTime: props.brokerageAccount.realTime !== undefined ? props.brokerageAccount.realTime : undefined,
        cryptoTradingEnabled: props.brokerageAccount.cryptoTradingEnabled !== undefined ? props.brokerageAccount.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: props.brokerageAccount.cryptoTradingPairs !== undefined ? {
            set: props.brokerageAccount.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: props.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.brokerageAccount.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: props.brokerageAccount.tradeAllocationPct !== undefined ? props.brokerageAccount.tradeAllocationPct : undefined,
        autoAllocation: props.brokerageAccount.autoAllocation !== undefined ? props.brokerageAccount.autoAllocation : undefined,
        minPercentageChange: props.brokerageAccount.minPercentageChange !== undefined ? props.brokerageAccount.minPercentageChange : undefined,
        volumeThreshold: props.brokerageAccount.volumeThreshold !== undefined ? props.brokerageAccount.volumeThreshold : undefined,
        enablePortfolioTrailingStop: props.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.brokerageAccount.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: props.brokerageAccount.portfolioTrailPercent !== undefined ? props.brokerageAccount.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: props.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.brokerageAccount.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: props.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.brokerageAccount.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: props.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: props.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.brokerageAccount.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: props.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.brokerageAccount.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: props.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.brokerageAccount.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: props.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.brokerageAccount.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: props.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.brokerageAccount.minimumPriceChangePercent100 : undefined,
        deletedAt: props.brokerageAccount.deletedAt !== undefined ? props.brokerageAccount.deletedAt : undefined,
    allocation: props.brokerageAccount.allocation ? 
      typeof props.brokerageAccount.allocation === 'object' && Object.keys(props.brokerageAccount.allocation).length === 1 && Object.keys(props.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
          id: props.brokerageAccount.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.brokerageAccount.allocation.id !== undefined ? props.brokerageAccount.allocation.id : undefined,
          brokerageAccountId: props.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.brokerageAccount.allocation.brokerageAccountId : undefined,
        },
        create: {
          equities: props.brokerageAccount.allocation.equities !== undefined ? props.brokerageAccount.allocation.equities : undefined,
          optionsContracts: props.brokerageAccount.allocation.optionsContracts !== undefined ? props.brokerageAccount.allocation.optionsContracts : undefined,
          futures: props.brokerageAccount.allocation.futures !== undefined ? props.brokerageAccount.allocation.futures : undefined,
          etfs: props.brokerageAccount.allocation.etfs !== undefined ? props.brokerageAccount.allocation.etfs : undefined,
          forex: props.brokerageAccount.allocation.forex !== undefined ? props.brokerageAccount.allocation.forex : undefined,
          crypto: props.brokerageAccount.allocation.crypto !== undefined ? props.brokerageAccount.allocation.crypto : undefined,
          stocks: props.brokerageAccount.allocation.stocks !== undefined ? props.brokerageAccount.allocation.stocks : undefined,
          options: props.brokerageAccount.allocation.options !== undefined ? props.brokerageAccount.allocation.options : undefined,
        },
      }
    } : undefined,
    fund: props.brokerageAccount.fund ? 
      typeof props.brokerageAccount.fund === 'object' && Object.keys(props.brokerageAccount.fund).length === 1 && Object.keys(props.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
          id: props.brokerageAccount.fund.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.brokerageAccount.fund.id !== undefined ? props.brokerageAccount.fund.id : undefined,
          name: props.brokerageAccount.fund.name !== undefined ? {
              equals: props.brokerageAccount.fund.name 
             } : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? {
              equals: props.brokerageAccount.fund.slug 
             } : undefined,
          organizationId: props.brokerageAccount.fund.organizationId !== undefined ? {
              equals: props.brokerageAccount.fund.organizationId 
             } : undefined,
        },
        create: {
          name: props.brokerageAccount.fund.name !== undefined ? props.brokerageAccount.fund.name : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? props.brokerageAccount.fund.slug : undefined,
          description: props.brokerageAccount.fund.description !== undefined ? props.brokerageAccount.fund.description : undefined,
          status: props.brokerageAccount.fund.status !== undefined ? props.brokerageAccount.fund.status : undefined,
          tradingOverrides: props.brokerageAccount.fund.tradingOverrides !== undefined ? props.brokerageAccount.fund.tradingOverrides : undefined,
          llmOverrides: props.brokerageAccount.fund.llmOverrides !== undefined ? props.brokerageAccount.fund.llmOverrides : undefined,
          deletedAt: props.brokerageAccount.fund.deletedAt !== undefined ? props.brokerageAccount.fund.deletedAt : undefined,
      organization: props.brokerageAccount.fund.organization ? 
        typeof props.brokerageAccount.fund.organization === 'object' && Object.keys(props.brokerageAccount.fund.organization).length === 1 && Object.keys(props.brokerageAccount.fund.organization)[0] === 'id'
    ? { connect: {
            id: props.brokerageAccount.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.brokerageAccount.fund.organization.id !== undefined ? props.brokerageAccount.fund.organization.id : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            name: props.brokerageAccount.fund.organization.name !== undefined ? {
                equals: props.brokerageAccount.fund.organization.name 
               } : undefined,
          },
          create: {
            name: props.brokerageAccount.fund.organization.name !== undefined ? props.brokerageAccount.fund.organization.name : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            logoUrl: props.brokerageAccount.fund.organization.logoUrl !== undefined ? props.brokerageAccount.fund.organization.logoUrl : undefined,
            website: props.brokerageAccount.fund.organization.website !== undefined ? props.brokerageAccount.fund.organization.website : undefined,
            businessType: props.brokerageAccount.fund.organization.businessType !== undefined ? props.brokerageAccount.fund.organization.businessType : undefined,
            jurisdiction: props.brokerageAccount.fund.organization.jurisdiction !== undefined ? props.brokerageAccount.fund.organization.jurisdiction : undefined,
            regulatoryStatus: props.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? props.brokerageAccount.fund.organization.regulatoryStatus : undefined,
            description: props.brokerageAccount.fund.organization.description !== undefined ? props.brokerageAccount.fund.organization.description : undefined,
            tradingDefaults: props.brokerageAccount.fund.organization.tradingDefaults !== undefined ? props.brokerageAccount.fund.organization.tradingDefaults : undefined,
            llmDefaults: props.brokerageAccount.fund.organization.llmDefaults !== undefined ? props.brokerageAccount.fund.organization.llmDefaults : undefined,
            deletedAt: props.brokerageAccount.fund.organization.deletedAt !== undefined ? props.brokerageAccount.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      assignments: props.brokerageAccount.fund.assignments ? 
        Array.isArray(props.brokerageAccount.fund.assignments) && props.brokerageAccount.fund.assignments.length > 0 &&  props.brokerageAccount.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investments: props.brokerageAccount.fund.investments ? 
        Array.isArray(props.brokerageAccount.fund.investments) && props.brokerageAccount.fund.investments.length > 0 &&  props.brokerageAccount.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.investments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            investorId: item.investorId !== undefined ? {
                equals: item.investorId 
               } : undefined,
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.brokerageAccount.alerts ? 
      Array.isArray(props.brokerageAccount.alerts) && props.brokerageAccount.alerts.length > 0 &&  props.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.alerts.map((item: any) => ({
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
    trades: props.brokerageAccount.trades ? 
      Array.isArray(props.brokerageAccount.trades) && props.brokerageAccount.trades.length > 0 &&  props.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          brokerageAccountId: item.brokerageAccountId !== undefined ? {
              equals: item.brokerageAccountId 
             } : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
        },
        create: {
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
          exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
          entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
          exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
          entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
          exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
          entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
          exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
          pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
          pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
          durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
          marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
          marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
          sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
          thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
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
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    optionsPositions: props.brokerageAccount.optionsPositions ? 
      Array.isArray(props.brokerageAccount.optionsPositions) && props.brokerageAccount.optionsPositions.length > 0 &&  props.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.optionsPositions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.optionsPositions.map((item: any) => ({
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
          },
        }
      } : undefined,
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Upsert a single OptionsTradeExecution record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated OptionsTradeExecution or null.
   */
  async upsert(props: OptionsTradeExecutionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsTradeExecutionType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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
  brokerageAccountId: props.brokerageAccountId !== undefined ? {
    equals: props.brokerageAccountId 
  } : undefined,
  brokerOrderId: props.brokerOrderId !== undefined ? {
    equals: props.brokerOrderId 
  } : undefined,
      },
          create: {
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
        brokerageAccountId: props.position.brokerageAccountId !== undefined ? {
            equals: props.position.brokerageAccountId 
           } : undefined,
        contractId: props.position.contractId !== undefined ? {
            equals: props.position.contractId 
           } : undefined,
      },
      create: {
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
    brokerageAccount: props.position.brokerageAccount ? 
      typeof props.position.brokerageAccount === 'object' && Object.keys(props.position.brokerageAccount).length === 1 && Object.keys(props.position.brokerageAccount)[0] === 'id'
    ? { connect: {
          id: props.position.brokerageAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.position.brokerageAccount.id !== undefined ? props.position.brokerageAccount.id : undefined,
          fundId: props.position.brokerageAccount.fundId !== undefined ? {
              equals: props.position.brokerageAccount.fundId 
             } : undefined,
        },
        create: {
          provider: props.position.brokerageAccount.provider !== undefined ? props.position.brokerageAccount.provider : undefined,
          type: props.position.brokerageAccount.type !== undefined ? props.position.brokerageAccount.type : undefined,
          apiKey: props.position.brokerageAccount.apiKey !== undefined ? props.position.brokerageAccount.apiKey : undefined,
          apiSecret: props.position.brokerageAccount.apiSecret !== undefined ? props.position.brokerageAccount.apiSecret : undefined,
          configuration: props.position.brokerageAccount.configuration !== undefined ? props.position.brokerageAccount.configuration : undefined,
          marketOpen: props.position.brokerageAccount.marketOpen !== undefined ? props.position.brokerageAccount.marketOpen : undefined,
          realTime: props.position.brokerageAccount.realTime !== undefined ? props.position.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.position.brokerageAccount.cryptoTradingEnabled !== undefined ? props.position.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.position.brokerageAccount.tradeAllocationPct !== undefined ? props.position.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.position.brokerageAccount.autoAllocation !== undefined ? props.position.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.position.brokerageAccount.minPercentageChange !== undefined ? props.position.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.position.brokerageAccount.volumeThreshold !== undefined ? props.position.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.position.brokerageAccount.portfolioTrailPercent !== undefined ? props.position.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.position.brokerageAccount.deletedAt !== undefined ? props.position.brokerageAccount.deletedAt : undefined,
      allocation: props.position.brokerageAccount.allocation ? 
        typeof props.position.brokerageAccount.allocation === 'object' && Object.keys(props.position.brokerageAccount.allocation).length === 1 && Object.keys(props.position.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.allocation.id !== undefined ? props.position.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.position.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.position.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.position.brokerageAccount.allocation.equities !== undefined ? props.position.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.position.brokerageAccount.allocation.optionsContracts !== undefined ? props.position.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.position.brokerageAccount.allocation.futures !== undefined ? props.position.brokerageAccount.allocation.futures : undefined,
            etfs: props.position.brokerageAccount.allocation.etfs !== undefined ? props.position.brokerageAccount.allocation.etfs : undefined,
            forex: props.position.brokerageAccount.allocation.forex !== undefined ? props.position.brokerageAccount.allocation.forex : undefined,
            crypto: props.position.brokerageAccount.allocation.crypto !== undefined ? props.position.brokerageAccount.allocation.crypto : undefined,
            stocks: props.position.brokerageAccount.allocation.stocks !== undefined ? props.position.brokerageAccount.allocation.stocks : undefined,
            options: props.position.brokerageAccount.allocation.options !== undefined ? props.position.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.position.brokerageAccount.fund ? 
        typeof props.position.brokerageAccount.fund === 'object' && Object.keys(props.position.brokerageAccount.fund).length === 1 && Object.keys(props.position.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.fund.id !== undefined ? props.position.brokerageAccount.fund.id : undefined,
            name: props.position.brokerageAccount.fund.name !== undefined ? {
                equals: props.position.brokerageAccount.fund.name 
               } : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? {
                equals: props.position.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.position.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.position.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.position.brokerageAccount.fund.name !== undefined ? props.position.brokerageAccount.fund.name : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? props.position.brokerageAccount.fund.slug : undefined,
            description: props.position.brokerageAccount.fund.description !== undefined ? props.position.brokerageAccount.fund.description : undefined,
            status: props.position.brokerageAccount.fund.status !== undefined ? props.position.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.position.brokerageAccount.fund.tradingOverrides !== undefined ? props.position.brokerageAccount.fund.tradingOverrides : undefined,
            llmOverrides: props.position.brokerageAccount.fund.llmOverrides !== undefined ? props.position.brokerageAccount.fund.llmOverrides : undefined,
            deletedAt: props.position.brokerageAccount.fund.deletedAt !== undefined ? props.position.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.position.brokerageAccount.alerts ? 
        Array.isArray(props.position.brokerageAccount.alerts) && props.position.brokerageAccount.alerts.length > 0 &&  props.position.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.alerts.map((item: any) => ({
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
      trades: props.position.brokerageAccount.trades ? 
        Array.isArray(props.position.brokerageAccount.trades) && props.position.brokerageAccount.trades.length > 0 &&  props.position.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.position.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.position.brokerageAccount.optionsTradeExecutions) && props.position.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.position.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
      brokerageAccount: item.brokerageAccount ? 
        typeof item.brokerageAccount === 'object' && Object.keys(item.brokerageAccount).length === 1 && Object.keys(item.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.brokerageAccount.id !== undefined ? item.brokerageAccount.id : undefined,
            fundId: item.brokerageAccount.fundId !== undefined ? {
                equals: item.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.brokerageAccount.provider !== undefined ? item.brokerageAccount.provider : undefined,
            type: item.brokerageAccount.type !== undefined ? item.brokerageAccount.type : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? item.brokerageAccount.apiKey : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? item.brokerageAccount.apiSecret : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? item.brokerageAccount.configuration : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? item.brokerageAccount.marketOpen : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? item.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? item.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? item.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? item.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? item.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? item.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? item.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? item.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
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
  brokerageAccount: props.brokerageAccount ? 
    typeof props.brokerageAccount === 'object' && Object.keys(props.brokerageAccount).length === 1 && Object.keys(props.brokerageAccount)[0] === 'id'
    ? { connect: {
        id: props.brokerageAccount.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.brokerageAccount.id !== undefined ? props.brokerageAccount.id : undefined,
        fundId: props.brokerageAccount.fundId !== undefined ? {
            equals: props.brokerageAccount.fundId 
           } : undefined,
      },
      create: {
        provider: props.brokerageAccount.provider !== undefined ? props.brokerageAccount.provider : undefined,
        type: props.brokerageAccount.type !== undefined ? props.brokerageAccount.type : undefined,
        apiKey: props.brokerageAccount.apiKey !== undefined ? props.brokerageAccount.apiKey : undefined,
        apiSecret: props.brokerageAccount.apiSecret !== undefined ? props.brokerageAccount.apiSecret : undefined,
        configuration: props.brokerageAccount.configuration !== undefined ? props.brokerageAccount.configuration : undefined,
        marketOpen: props.brokerageAccount.marketOpen !== undefined ? props.brokerageAccount.marketOpen : undefined,
        realTime: props.brokerageAccount.realTime !== undefined ? props.brokerageAccount.realTime : undefined,
        cryptoTradingEnabled: props.brokerageAccount.cryptoTradingEnabled !== undefined ? props.brokerageAccount.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: props.brokerageAccount.cryptoTradingPairs !== undefined ? {
            set: props.brokerageAccount.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: props.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.brokerageAccount.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: props.brokerageAccount.tradeAllocationPct !== undefined ? props.brokerageAccount.tradeAllocationPct : undefined,
        autoAllocation: props.brokerageAccount.autoAllocation !== undefined ? props.brokerageAccount.autoAllocation : undefined,
        minPercentageChange: props.brokerageAccount.minPercentageChange !== undefined ? props.brokerageAccount.minPercentageChange : undefined,
        volumeThreshold: props.brokerageAccount.volumeThreshold !== undefined ? props.brokerageAccount.volumeThreshold : undefined,
        enablePortfolioTrailingStop: props.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.brokerageAccount.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: props.brokerageAccount.portfolioTrailPercent !== undefined ? props.brokerageAccount.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: props.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.brokerageAccount.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: props.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.brokerageAccount.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: props.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: props.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.brokerageAccount.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: props.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.brokerageAccount.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: props.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.brokerageAccount.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: props.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.brokerageAccount.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: props.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.brokerageAccount.minimumPriceChangePercent100 : undefined,
        deletedAt: props.brokerageAccount.deletedAt !== undefined ? props.brokerageAccount.deletedAt : undefined,
    allocation: props.brokerageAccount.allocation ? 
      typeof props.brokerageAccount.allocation === 'object' && Object.keys(props.brokerageAccount.allocation).length === 1 && Object.keys(props.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
          id: props.brokerageAccount.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.brokerageAccount.allocation.id !== undefined ? props.brokerageAccount.allocation.id : undefined,
          brokerageAccountId: props.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.brokerageAccount.allocation.brokerageAccountId : undefined,
        },
        create: {
          equities: props.brokerageAccount.allocation.equities !== undefined ? props.brokerageAccount.allocation.equities : undefined,
          optionsContracts: props.brokerageAccount.allocation.optionsContracts !== undefined ? props.brokerageAccount.allocation.optionsContracts : undefined,
          futures: props.brokerageAccount.allocation.futures !== undefined ? props.brokerageAccount.allocation.futures : undefined,
          etfs: props.brokerageAccount.allocation.etfs !== undefined ? props.brokerageAccount.allocation.etfs : undefined,
          forex: props.brokerageAccount.allocation.forex !== undefined ? props.brokerageAccount.allocation.forex : undefined,
          crypto: props.brokerageAccount.allocation.crypto !== undefined ? props.brokerageAccount.allocation.crypto : undefined,
          stocks: props.brokerageAccount.allocation.stocks !== undefined ? props.brokerageAccount.allocation.stocks : undefined,
          options: props.brokerageAccount.allocation.options !== undefined ? props.brokerageAccount.allocation.options : undefined,
        },
      }
    } : undefined,
    fund: props.brokerageAccount.fund ? 
      typeof props.brokerageAccount.fund === 'object' && Object.keys(props.brokerageAccount.fund).length === 1 && Object.keys(props.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
          id: props.brokerageAccount.fund.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.brokerageAccount.fund.id !== undefined ? props.brokerageAccount.fund.id : undefined,
          name: props.brokerageAccount.fund.name !== undefined ? {
              equals: props.brokerageAccount.fund.name 
             } : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? {
              equals: props.brokerageAccount.fund.slug 
             } : undefined,
          organizationId: props.brokerageAccount.fund.organizationId !== undefined ? {
              equals: props.brokerageAccount.fund.organizationId 
             } : undefined,
        },
        create: {
          name: props.brokerageAccount.fund.name !== undefined ? props.brokerageAccount.fund.name : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? props.brokerageAccount.fund.slug : undefined,
          description: props.brokerageAccount.fund.description !== undefined ? props.brokerageAccount.fund.description : undefined,
          status: props.brokerageAccount.fund.status !== undefined ? props.brokerageAccount.fund.status : undefined,
          tradingOverrides: props.brokerageAccount.fund.tradingOverrides !== undefined ? props.brokerageAccount.fund.tradingOverrides : undefined,
          llmOverrides: props.brokerageAccount.fund.llmOverrides !== undefined ? props.brokerageAccount.fund.llmOverrides : undefined,
          deletedAt: props.brokerageAccount.fund.deletedAt !== undefined ? props.brokerageAccount.fund.deletedAt : undefined,
      organization: props.brokerageAccount.fund.organization ? 
        typeof props.brokerageAccount.fund.organization === 'object' && Object.keys(props.brokerageAccount.fund.organization).length === 1 && Object.keys(props.brokerageAccount.fund.organization)[0] === 'id'
    ? { connect: {
            id: props.brokerageAccount.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.brokerageAccount.fund.organization.id !== undefined ? props.brokerageAccount.fund.organization.id : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            name: props.brokerageAccount.fund.organization.name !== undefined ? {
                equals: props.brokerageAccount.fund.organization.name 
               } : undefined,
          },
          create: {
            name: props.brokerageAccount.fund.organization.name !== undefined ? props.brokerageAccount.fund.organization.name : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            logoUrl: props.brokerageAccount.fund.organization.logoUrl !== undefined ? props.brokerageAccount.fund.organization.logoUrl : undefined,
            website: props.brokerageAccount.fund.organization.website !== undefined ? props.brokerageAccount.fund.organization.website : undefined,
            businessType: props.brokerageAccount.fund.organization.businessType !== undefined ? props.brokerageAccount.fund.organization.businessType : undefined,
            jurisdiction: props.brokerageAccount.fund.organization.jurisdiction !== undefined ? props.brokerageAccount.fund.organization.jurisdiction : undefined,
            regulatoryStatus: props.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? props.brokerageAccount.fund.organization.regulatoryStatus : undefined,
            description: props.brokerageAccount.fund.organization.description !== undefined ? props.brokerageAccount.fund.organization.description : undefined,
            tradingDefaults: props.brokerageAccount.fund.organization.tradingDefaults !== undefined ? props.brokerageAccount.fund.organization.tradingDefaults : undefined,
            llmDefaults: props.brokerageAccount.fund.organization.llmDefaults !== undefined ? props.brokerageAccount.fund.organization.llmDefaults : undefined,
            deletedAt: props.brokerageAccount.fund.organization.deletedAt !== undefined ? props.brokerageAccount.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      assignments: props.brokerageAccount.fund.assignments ? 
        Array.isArray(props.brokerageAccount.fund.assignments) && props.brokerageAccount.fund.assignments.length > 0 &&  props.brokerageAccount.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investments: props.brokerageAccount.fund.investments ? 
        Array.isArray(props.brokerageAccount.fund.investments) && props.brokerageAccount.fund.investments.length > 0 &&  props.brokerageAccount.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.investments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            investorId: item.investorId !== undefined ? {
                equals: item.investorId 
               } : undefined,
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.brokerageAccount.alerts ? 
      Array.isArray(props.brokerageAccount.alerts) && props.brokerageAccount.alerts.length > 0 &&  props.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.alerts.map((item: any) => ({
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
    trades: props.brokerageAccount.trades ? 
      Array.isArray(props.brokerageAccount.trades) && props.brokerageAccount.trades.length > 0 &&  props.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          brokerageAccountId: item.brokerageAccountId !== undefined ? {
              equals: item.brokerageAccountId 
             } : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
        },
        create: {
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
          exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
          entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
          exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
          entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
          exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
          entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
          exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
          pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
          pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
          durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
          marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
          marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
          sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
          thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
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
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    optionsPositions: props.brokerageAccount.optionsPositions ? 
      Array.isArray(props.brokerageAccount.optionsPositions) && props.brokerageAccount.optionsPositions.length > 0 &&  props.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.optionsPositions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.optionsPositions.map((item: any) => ({
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
          },
        }
      } : undefined,
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
      }))
    } : undefined,
      },
    }
  } : undefined,
      },
          update: {
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
        brokerageAccountId: props.position.brokerageAccountId !== undefined ? {
            equals: props.position.brokerageAccountId
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
    brokerageAccount: props.position.brokerageAccount ? 
    typeof props.position.brokerageAccount === 'object' && Object.keys(props.position.brokerageAccount).length === 1 && (Object.keys(props.position.brokerageAccount)[0] === 'id' || Object.keys(props.position.brokerageAccount)[0] === 'symbol')
? {
    connect: {
      id: props.position.brokerageAccount.id
    }
} : { upsert: {
        where: {
          id: props.position.brokerageAccount.id !== undefined ? {
              equals: props.position.brokerageAccount.id
            } : undefined,
          fundId: props.position.brokerageAccount.fundId !== undefined ? {
              equals: props.position.brokerageAccount.fundId
            } : undefined,
        },
        update: {
          id: props.position.brokerageAccount.id !== undefined ? {
              set: props.position.brokerageAccount.id
            } : undefined,
          provider: props.position.brokerageAccount.provider !== undefined ? {
              set: props.position.brokerageAccount.provider
            } : undefined,
          type: props.position.brokerageAccount.type !== undefined ? {
              set: props.position.brokerageAccount.type
            } : undefined,
          apiKey: props.position.brokerageAccount.apiKey !== undefined ? {
              set: props.position.brokerageAccount.apiKey
            } : undefined,
          apiSecret: props.position.brokerageAccount.apiSecret !== undefined ? {
              set: props.position.brokerageAccount.apiSecret
            } : undefined,
          configuration: props.position.brokerageAccount.configuration !== undefined ? {
              set: props.position.brokerageAccount.configuration
            } : undefined,
          marketOpen: props.position.brokerageAccount.marketOpen !== undefined ? {
              set: props.position.brokerageAccount.marketOpen
            } : undefined,
          realTime: props.position.brokerageAccount.realTime !== undefined ? {
              set: props.position.brokerageAccount.realTime
            } : undefined,
          cryptoTradingEnabled: props.position.brokerageAccount.cryptoTradingEnabled !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: props.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: props.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: props.position.brokerageAccount.tradeAllocationPct !== undefined ? {
              set: props.position.brokerageAccount.tradeAllocationPct
            } : undefined,
          autoAllocation: props.position.brokerageAccount.autoAllocation !== undefined ? {
              set: props.position.brokerageAccount.autoAllocation
            } : undefined,
          minPercentageChange: props.position.brokerageAccount.minPercentageChange !== undefined ? {
              set: props.position.brokerageAccount.minPercentageChange
            } : undefined,
          volumeThreshold: props.position.brokerageAccount.volumeThreshold !== undefined ? {
              set: props.position.brokerageAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: props.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
              set: props.position.brokerageAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: props.position.brokerageAccount.portfolioTrailPercent !== undefined ? {
              set: props.position.brokerageAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: props.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: props.position.brokerageAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: props.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: props.position.brokerageAccount.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: props.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
              set: props.position.brokerageAccount.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: props.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
              set: props.position.brokerageAccount.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: props.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
              set: props.position.brokerageAccount.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: props.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
              set: props.position.brokerageAccount.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: props.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
              set: props.position.brokerageAccount.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: props.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
              set: props.position.brokerageAccount.minimumPriceChangePercent100
            } : undefined,
          deletedAt: props.position.brokerageAccount.deletedAt !== undefined ? {
              set: props.position.brokerageAccount.deletedAt
            } : undefined,
      allocation: props.position.brokerageAccount.allocation ? 
      typeof props.position.brokerageAccount.allocation === 'object' && Object.keys(props.position.brokerageAccount.allocation).length === 1 && (Object.keys(props.position.brokerageAccount.allocation)[0] === 'id' || Object.keys(props.position.brokerageAccount.allocation)[0] === 'symbol')
? {
      connect: {
        id: props.position.brokerageAccount.allocation.id
      }
} : { upsert: {
          where: {
            id: props.position.brokerageAccount.allocation.id !== undefined ? {
                equals: props.position.brokerageAccount.allocation.id
              } : undefined,
            brokerageAccountId: props.position.brokerageAccount.allocation.brokerageAccountId !== undefined ? {
                equals: props.position.brokerageAccount.allocation.brokerageAccountId
              } : undefined,
          },
          update: {
            id: props.position.brokerageAccount.allocation.id !== undefined ? {
                set: props.position.brokerageAccount.allocation.id
              } : undefined,
            equities: props.position.brokerageAccount.allocation.equities !== undefined ? {
                set: props.position.brokerageAccount.allocation.equities
              } : undefined,
            optionsContracts: props.position.brokerageAccount.allocation.optionsContracts !== undefined ? {
                set: props.position.brokerageAccount.allocation.optionsContracts
              } : undefined,
            futures: props.position.brokerageAccount.allocation.futures !== undefined ? {
                set: props.position.brokerageAccount.allocation.futures
              } : undefined,
            etfs: props.position.brokerageAccount.allocation.etfs !== undefined ? {
                set: props.position.brokerageAccount.allocation.etfs
              } : undefined,
            forex: props.position.brokerageAccount.allocation.forex !== undefined ? {
                set: props.position.brokerageAccount.allocation.forex
              } : undefined,
            crypto: props.position.brokerageAccount.allocation.crypto !== undefined ? {
                set: props.position.brokerageAccount.allocation.crypto
              } : undefined,
            stocks: props.position.brokerageAccount.allocation.stocks !== undefined ? {
                set: props.position.brokerageAccount.allocation.stocks
              } : undefined,
            options: props.position.brokerageAccount.allocation.options !== undefined ? {
                set: props.position.brokerageAccount.allocation.options
              } : undefined,
          },
          create: {
            equities: props.position.brokerageAccount.allocation.equities !== undefined ? props.position.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.position.brokerageAccount.allocation.optionsContracts !== undefined ? props.position.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.position.brokerageAccount.allocation.futures !== undefined ? props.position.brokerageAccount.allocation.futures : undefined,
            etfs: props.position.brokerageAccount.allocation.etfs !== undefined ? props.position.brokerageAccount.allocation.etfs : undefined,
            forex: props.position.brokerageAccount.allocation.forex !== undefined ? props.position.brokerageAccount.allocation.forex : undefined,
            crypto: props.position.brokerageAccount.allocation.crypto !== undefined ? props.position.brokerageAccount.allocation.crypto : undefined,
            stocks: props.position.brokerageAccount.allocation.stocks !== undefined ? props.position.brokerageAccount.allocation.stocks : undefined,
            options: props.position.brokerageAccount.allocation.options !== undefined ? props.position.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.position.brokerageAccount.fund ? 
      typeof props.position.brokerageAccount.fund === 'object' && Object.keys(props.position.brokerageAccount.fund).length === 1 && (Object.keys(props.position.brokerageAccount.fund)[0] === 'id' || Object.keys(props.position.brokerageAccount.fund)[0] === 'symbol')
? {
      connect: {
        id: props.position.brokerageAccount.fund.id
      }
} : { upsert: {
          where: {
            id: props.position.brokerageAccount.fund.id !== undefined ? {
                equals: props.position.brokerageAccount.fund.id
              } : undefined,
            name: props.position.brokerageAccount.fund.name !== undefined ? {
                equals: props.position.brokerageAccount.fund.name
              } : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? {
                equals: props.position.brokerageAccount.fund.slug
              } : undefined,
            organizationId: props.position.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.position.brokerageAccount.fund.organizationId
              } : undefined,
          },
          update: {
            id: props.position.brokerageAccount.fund.id !== undefined ? {
                set: props.position.brokerageAccount.fund.id
              } : undefined,
            name: props.position.brokerageAccount.fund.name !== undefined ? {
                set: props.position.brokerageAccount.fund.name
              } : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? {
                set: props.position.brokerageAccount.fund.slug
              } : undefined,
            description: props.position.brokerageAccount.fund.description !== undefined ? {
                set: props.position.brokerageAccount.fund.description
              } : undefined,
            status: props.position.brokerageAccount.fund.status !== undefined ? {
                set: props.position.brokerageAccount.fund.status
              } : undefined,
            tradingOverrides: props.position.brokerageAccount.fund.tradingOverrides !== undefined ? {
                set: props.position.brokerageAccount.fund.tradingOverrides
              } : undefined,
            llmOverrides: props.position.brokerageAccount.fund.llmOverrides !== undefined ? {
                set: props.position.brokerageAccount.fund.llmOverrides
              } : undefined,
            deletedAt: props.position.brokerageAccount.fund.deletedAt !== undefined ? {
                set: props.position.brokerageAccount.fund.deletedAt
              } : undefined,
          },
          create: {
            name: props.position.brokerageAccount.fund.name !== undefined ? props.position.brokerageAccount.fund.name : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? props.position.brokerageAccount.fund.slug : undefined,
            description: props.position.brokerageAccount.fund.description !== undefined ? props.position.brokerageAccount.fund.description : undefined,
            status: props.position.brokerageAccount.fund.status !== undefined ? props.position.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.position.brokerageAccount.fund.tradingOverrides !== undefined ? props.position.brokerageAccount.fund.tradingOverrides : undefined,
            llmOverrides: props.position.brokerageAccount.fund.llmOverrides !== undefined ? props.position.brokerageAccount.fund.llmOverrides : undefined,
            deletedAt: props.position.brokerageAccount.fund.deletedAt !== undefined ? props.position.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.position.brokerageAccount.alerts ? 
      Array.isArray(props.position.brokerageAccount.alerts) && props.position.brokerageAccount.alerts.length > 0 && props.position.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.position.brokerageAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.position.brokerageAccount.alerts.map((item: any) => ({
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
      trades: props.position.brokerageAccount.trades ? 
      Array.isArray(props.position.brokerageAccount.trades) && props.position.brokerageAccount.trades.length > 0 && props.position.brokerageAccount.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.position.brokerageAccount.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.position.brokerageAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal
              } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy
              } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis
              } : undefined,
            summary: item.summary !== undefined ? {
                set: item.summary
              } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence
              } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            deletedAt: item.deletedAt !== undefined ? {
                set: item.deletedAt
              } : undefined,
            symbol: item.symbol !== undefined ? {
                set: item.symbol
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            entryQty: item.entryQty !== undefined ? {
                set: item.entryQty
              } : undefined,
            exitQty: item.exitQty !== undefined ? {
                set: item.exitQty
              } : undefined,
            entryValue: item.entryValue !== undefined ? {
                set: item.entryValue
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            pnlAmount: item.pnlAmount !== undefined ? {
                set: item.pnlAmount
              } : undefined,
            pnlPercent: item.pnlPercent !== undefined ? {
                set: item.pnlPercent
              } : undefined,
            durationMinutes: item.durationMinutes !== undefined ? {
                set: item.durationMinutes
              } : undefined,
            marketPhase: item.marketPhase !== undefined ? {
                set: item.marketPhase
              } : undefined,
            marketVolatility: item.marketVolatility !== undefined ? {
                set: item.marketVolatility
              } : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? {
                set: item.sessionHorizonMinutes
              } : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? {
                set: item.thresholdsJson
              } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.position.brokerageAccount.optionsTradeExecutions ? 
      Array.isArray(props.position.brokerageAccount.optionsTradeExecutions) && props.position.brokerageAccount.optionsTradeExecutions.length > 0 && props.position.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
          provider: props.position.brokerageAccount.provider !== undefined ? props.position.brokerageAccount.provider : undefined,
          type: props.position.brokerageAccount.type !== undefined ? props.position.brokerageAccount.type : undefined,
          apiKey: props.position.brokerageAccount.apiKey !== undefined ? props.position.brokerageAccount.apiKey : undefined,
          apiSecret: props.position.brokerageAccount.apiSecret !== undefined ? props.position.brokerageAccount.apiSecret : undefined,
          configuration: props.position.brokerageAccount.configuration !== undefined ? props.position.brokerageAccount.configuration : undefined,
          marketOpen: props.position.brokerageAccount.marketOpen !== undefined ? props.position.brokerageAccount.marketOpen : undefined,
          realTime: props.position.brokerageAccount.realTime !== undefined ? props.position.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.position.brokerageAccount.cryptoTradingEnabled !== undefined ? props.position.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.position.brokerageAccount.tradeAllocationPct !== undefined ? props.position.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.position.brokerageAccount.autoAllocation !== undefined ? props.position.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.position.brokerageAccount.minPercentageChange !== undefined ? props.position.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.position.brokerageAccount.volumeThreshold !== undefined ? props.position.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.position.brokerageAccount.portfolioTrailPercent !== undefined ? props.position.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.position.brokerageAccount.deletedAt !== undefined ? props.position.brokerageAccount.deletedAt : undefined,
      allocation: props.position.brokerageAccount.allocation ? 
        typeof props.position.brokerageAccount.allocation === 'object' && Object.keys(props.position.brokerageAccount.allocation).length === 1 && Object.keys(props.position.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.allocation.id !== undefined ? props.position.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.position.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.position.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.position.brokerageAccount.allocation.equities !== undefined ? props.position.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.position.brokerageAccount.allocation.optionsContracts !== undefined ? props.position.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.position.brokerageAccount.allocation.futures !== undefined ? props.position.brokerageAccount.allocation.futures : undefined,
            etfs: props.position.brokerageAccount.allocation.etfs !== undefined ? props.position.brokerageAccount.allocation.etfs : undefined,
            forex: props.position.brokerageAccount.allocation.forex !== undefined ? props.position.brokerageAccount.allocation.forex : undefined,
            crypto: props.position.brokerageAccount.allocation.crypto !== undefined ? props.position.brokerageAccount.allocation.crypto : undefined,
            stocks: props.position.brokerageAccount.allocation.stocks !== undefined ? props.position.brokerageAccount.allocation.stocks : undefined,
            options: props.position.brokerageAccount.allocation.options !== undefined ? props.position.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.position.brokerageAccount.fund ? 
        typeof props.position.brokerageAccount.fund === 'object' && Object.keys(props.position.brokerageAccount.fund).length === 1 && Object.keys(props.position.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.fund.id !== undefined ? props.position.brokerageAccount.fund.id : undefined,
            name: props.position.brokerageAccount.fund.name !== undefined ? {
                equals: props.position.brokerageAccount.fund.name 
               } : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? {
                equals: props.position.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.position.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.position.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.position.brokerageAccount.fund.name !== undefined ? props.position.brokerageAccount.fund.name : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? props.position.brokerageAccount.fund.slug : undefined,
            description: props.position.brokerageAccount.fund.description !== undefined ? props.position.brokerageAccount.fund.description : undefined,
            status: props.position.brokerageAccount.fund.status !== undefined ? props.position.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.position.brokerageAccount.fund.tradingOverrides !== undefined ? props.position.brokerageAccount.fund.tradingOverrides : undefined,
            llmOverrides: props.position.brokerageAccount.fund.llmOverrides !== undefined ? props.position.brokerageAccount.fund.llmOverrides : undefined,
            deletedAt: props.position.brokerageAccount.fund.deletedAt !== undefined ? props.position.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.position.brokerageAccount.alerts ? 
        Array.isArray(props.position.brokerageAccount.alerts) && props.position.brokerageAccount.alerts.length > 0 &&  props.position.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.alerts.map((item: any) => ({
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
      trades: props.position.brokerageAccount.trades ? 
        Array.isArray(props.position.brokerageAccount.trades) && props.position.brokerageAccount.trades.length > 0 &&  props.position.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.position.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.position.brokerageAccount.optionsTradeExecutions) && props.position.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.position.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
    brokerageAccount: props.position.brokerageAccount ? 
      typeof props.position.brokerageAccount === 'object' && Object.keys(props.position.brokerageAccount).length === 1 && Object.keys(props.position.brokerageAccount)[0] === 'id'
    ? { connect: {
          id: props.position.brokerageAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.position.brokerageAccount.id !== undefined ? props.position.brokerageAccount.id : undefined,
          fundId: props.position.brokerageAccount.fundId !== undefined ? {
              equals: props.position.brokerageAccount.fundId 
             } : undefined,
        },
        create: {
          provider: props.position.brokerageAccount.provider !== undefined ? props.position.brokerageAccount.provider : undefined,
          type: props.position.brokerageAccount.type !== undefined ? props.position.brokerageAccount.type : undefined,
          apiKey: props.position.brokerageAccount.apiKey !== undefined ? props.position.brokerageAccount.apiKey : undefined,
          apiSecret: props.position.brokerageAccount.apiSecret !== undefined ? props.position.brokerageAccount.apiSecret : undefined,
          configuration: props.position.brokerageAccount.configuration !== undefined ? props.position.brokerageAccount.configuration : undefined,
          marketOpen: props.position.brokerageAccount.marketOpen !== undefined ? props.position.brokerageAccount.marketOpen : undefined,
          realTime: props.position.brokerageAccount.realTime !== undefined ? props.position.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: props.position.brokerageAccount.cryptoTradingEnabled !== undefined ? props.position.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: props.position.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.position.brokerageAccount.tradeAllocationPct !== undefined ? props.position.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: props.position.brokerageAccount.autoAllocation !== undefined ? props.position.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: props.position.brokerageAccount.minPercentageChange !== undefined ? props.position.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: props.position.brokerageAccount.volumeThreshold !== undefined ? props.position.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.position.brokerageAccount.portfolioTrailPercent !== undefined ? props.position.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.position.brokerageAccount.deletedAt !== undefined ? props.position.brokerageAccount.deletedAt : undefined,
      allocation: props.position.brokerageAccount.allocation ? 
        typeof props.position.brokerageAccount.allocation === 'object' && Object.keys(props.position.brokerageAccount.allocation).length === 1 && Object.keys(props.position.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.allocation.id !== undefined ? props.position.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: props.position.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.position.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: props.position.brokerageAccount.allocation.equities !== undefined ? props.position.brokerageAccount.allocation.equities : undefined,
            optionsContracts: props.position.brokerageAccount.allocation.optionsContracts !== undefined ? props.position.brokerageAccount.allocation.optionsContracts : undefined,
            futures: props.position.brokerageAccount.allocation.futures !== undefined ? props.position.brokerageAccount.allocation.futures : undefined,
            etfs: props.position.brokerageAccount.allocation.etfs !== undefined ? props.position.brokerageAccount.allocation.etfs : undefined,
            forex: props.position.brokerageAccount.allocation.forex !== undefined ? props.position.brokerageAccount.allocation.forex : undefined,
            crypto: props.position.brokerageAccount.allocation.crypto !== undefined ? props.position.brokerageAccount.allocation.crypto : undefined,
            stocks: props.position.brokerageAccount.allocation.stocks !== undefined ? props.position.brokerageAccount.allocation.stocks : undefined,
            options: props.position.brokerageAccount.allocation.options !== undefined ? props.position.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: props.position.brokerageAccount.fund ? 
        typeof props.position.brokerageAccount.fund === 'object' && Object.keys(props.position.brokerageAccount.fund).length === 1 && Object.keys(props.position.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: props.position.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.position.brokerageAccount.fund.id !== undefined ? props.position.brokerageAccount.fund.id : undefined,
            name: props.position.brokerageAccount.fund.name !== undefined ? {
                equals: props.position.brokerageAccount.fund.name 
               } : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? {
                equals: props.position.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: props.position.brokerageAccount.fund.organizationId !== undefined ? {
                equals: props.position.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: props.position.brokerageAccount.fund.name !== undefined ? props.position.brokerageAccount.fund.name : undefined,
            slug: props.position.brokerageAccount.fund.slug !== undefined ? props.position.brokerageAccount.fund.slug : undefined,
            description: props.position.brokerageAccount.fund.description !== undefined ? props.position.brokerageAccount.fund.description : undefined,
            status: props.position.brokerageAccount.fund.status !== undefined ? props.position.brokerageAccount.fund.status : undefined,
            tradingOverrides: props.position.brokerageAccount.fund.tradingOverrides !== undefined ? props.position.brokerageAccount.fund.tradingOverrides : undefined,
            llmOverrides: props.position.brokerageAccount.fund.llmOverrides !== undefined ? props.position.brokerageAccount.fund.llmOverrides : undefined,
            deletedAt: props.position.brokerageAccount.fund.deletedAt !== undefined ? props.position.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: props.position.brokerageAccount.alerts ? 
        Array.isArray(props.position.brokerageAccount.alerts) && props.position.brokerageAccount.alerts.length > 0 &&  props.position.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.alerts.map((item: any) => ({
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
      trades: props.position.brokerageAccount.trades ? 
        Array.isArray(props.position.brokerageAccount.trades) && props.position.brokerageAccount.trades.length > 0 &&  props.position.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: props.position.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(props.position.brokerageAccount.optionsTradeExecutions) && props.position.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.position.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
      brokerageAccount: item.brokerageAccount ? 
      typeof item.brokerageAccount === 'object' && Object.keys(item.brokerageAccount).length === 1 && (Object.keys(item.brokerageAccount)[0] === 'id' || Object.keys(item.brokerageAccount)[0] === 'symbol')
? {
      connect: {
        id: item.brokerageAccount.id
      }
} : { upsert: {
          where: {
            id: item.brokerageAccount.id !== undefined ? {
                equals: item.brokerageAccount.id
              } : undefined,
            fundId: item.brokerageAccount.fundId !== undefined ? {
                equals: item.brokerageAccount.fundId
              } : undefined,
          },
          update: {
            id: item.brokerageAccount.id !== undefined ? {
                set: item.brokerageAccount.id
              } : undefined,
            provider: item.brokerageAccount.provider !== undefined ? {
                set: item.brokerageAccount.provider
              } : undefined,
            type: item.brokerageAccount.type !== undefined ? {
                set: item.brokerageAccount.type
              } : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? {
                set: item.brokerageAccount.apiKey
              } : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? {
                set: item.brokerageAccount.apiSecret
              } : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? {
                set: item.brokerageAccount.configuration
              } : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? {
                set: item.brokerageAccount.marketOpen
              } : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? {
                set: item.brokerageAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? {
                set: item.brokerageAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.brokerageAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? {
                set: item.brokerageAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? {
                set: item.brokerageAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? {
                set: item.brokerageAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? {
                set: item.brokerageAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.brokerageAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? {
                set: item.brokerageAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.brokerageAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.brokerageAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.brokerageAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.brokerageAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.brokerageAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.brokerageAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.brokerageAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.brokerageAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? {
                set: item.brokerageAccount.deletedAt
              } : undefined,
          },
          create: {
            provider: item.brokerageAccount.provider !== undefined ? item.brokerageAccount.provider : undefined,
            type: item.brokerageAccount.type !== undefined ? item.brokerageAccount.type : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? item.brokerageAccount.apiKey : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? item.brokerageAccount.apiSecret : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? item.brokerageAccount.configuration : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? item.brokerageAccount.marketOpen : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? item.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? item.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? item.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? item.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? item.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? item.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? item.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? item.brokerageAccount.deletedAt : undefined,
          },
        }
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
      brokerageAccount: item.brokerageAccount ? 
        typeof item.brokerageAccount === 'object' && Object.keys(item.brokerageAccount).length === 1 && Object.keys(item.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.brokerageAccount.id !== undefined ? item.brokerageAccount.id : undefined,
            fundId: item.brokerageAccount.fundId !== undefined ? {
                equals: item.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.brokerageAccount.provider !== undefined ? item.brokerageAccount.provider : undefined,
            type: item.brokerageAccount.type !== undefined ? item.brokerageAccount.type : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? item.brokerageAccount.apiKey : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? item.brokerageAccount.apiSecret : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? item.brokerageAccount.configuration : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? item.brokerageAccount.marketOpen : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? item.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? item.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? item.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? item.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? item.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? item.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? item.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? item.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
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
      brokerageAccount: item.brokerageAccount ? 
        typeof item.brokerageAccount === 'object' && Object.keys(item.brokerageAccount).length === 1 && Object.keys(item.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.brokerageAccount.id !== undefined ? item.brokerageAccount.id : undefined,
            fundId: item.brokerageAccount.fundId !== undefined ? {
                equals: item.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.brokerageAccount.provider !== undefined ? item.brokerageAccount.provider : undefined,
            type: item.brokerageAccount.type !== undefined ? item.brokerageAccount.type : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? item.brokerageAccount.apiKey : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? item.brokerageAccount.apiSecret : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? item.brokerageAccount.configuration : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? item.brokerageAccount.marketOpen : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? item.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? item.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? item.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? item.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? item.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? item.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? item.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? item.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
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
  brokerageAccount: props.brokerageAccount ? 
  typeof props.brokerageAccount === 'object' && Object.keys(props.brokerageAccount).length === 1 && (Object.keys(props.brokerageAccount)[0] === 'id' || Object.keys(props.brokerageAccount)[0] === 'symbol')
? {
  connect: {
    id: props.brokerageAccount.id
  }
} : { upsert: {
      where: {
        id: props.brokerageAccount.id !== undefined ? {
            equals: props.brokerageAccount.id
          } : undefined,
        fundId: props.brokerageAccount.fundId !== undefined ? {
            equals: props.brokerageAccount.fundId
          } : undefined,
      },
      update: {
        id: props.brokerageAccount.id !== undefined ? {
            set: props.brokerageAccount.id
          } : undefined,
        provider: props.brokerageAccount.provider !== undefined ? {
            set: props.brokerageAccount.provider
          } : undefined,
        type: props.brokerageAccount.type !== undefined ? {
            set: props.brokerageAccount.type
          } : undefined,
        apiKey: props.brokerageAccount.apiKey !== undefined ? {
            set: props.brokerageAccount.apiKey
          } : undefined,
        apiSecret: props.brokerageAccount.apiSecret !== undefined ? {
            set: props.brokerageAccount.apiSecret
          } : undefined,
        configuration: props.brokerageAccount.configuration !== undefined ? {
            set: props.brokerageAccount.configuration
          } : undefined,
        marketOpen: props.brokerageAccount.marketOpen !== undefined ? {
            set: props.brokerageAccount.marketOpen
          } : undefined,
        realTime: props.brokerageAccount.realTime !== undefined ? {
            set: props.brokerageAccount.realTime
          } : undefined,
        cryptoTradingEnabled: props.brokerageAccount.cryptoTradingEnabled !== undefined ? {
            set: props.brokerageAccount.cryptoTradingEnabled
          } : undefined,
        cryptoTradingPairs: props.brokerageAccount.cryptoTradingPairs !== undefined ? {
            set: props.brokerageAccount.cryptoTradingPairs
          } : undefined,
        cryptoTradeAllocationPct: props.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
            set: props.brokerageAccount.cryptoTradeAllocationPct
          } : undefined,
        tradeAllocationPct: props.brokerageAccount.tradeAllocationPct !== undefined ? {
            set: props.brokerageAccount.tradeAllocationPct
          } : undefined,
        autoAllocation: props.brokerageAccount.autoAllocation !== undefined ? {
            set: props.brokerageAccount.autoAllocation
          } : undefined,
        minPercentageChange: props.brokerageAccount.minPercentageChange !== undefined ? {
            set: props.brokerageAccount.minPercentageChange
          } : undefined,
        volumeThreshold: props.brokerageAccount.volumeThreshold !== undefined ? {
            set: props.brokerageAccount.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: props.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
            set: props.brokerageAccount.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: props.brokerageAccount.portfolioTrailPercent !== undefined ? {
            set: props.brokerageAccount.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: props.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
            set: props.brokerageAccount.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: props.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
            set: props.brokerageAccount.reducedPortfolioTrailPercent
          } : undefined,
        defaultTrailingStopPercentage100: props.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
            set: props.brokerageAccount.defaultTrailingStopPercentage100
          } : undefined,
        firstTrailReductionThreshold100: props.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
            set: props.brokerageAccount.firstTrailReductionThreshold100
          } : undefined,
        secondTrailReductionThreshold100: props.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
            set: props.brokerageAccount.secondTrailReductionThreshold100
          } : undefined,
        firstReducedTrailPercentage100: props.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
            set: props.brokerageAccount.firstReducedTrailPercentage100
          } : undefined,
        secondReducedTrailPercentage100: props.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
            set: props.brokerageAccount.secondReducedTrailPercentage100
          } : undefined,
        minimumPriceChangePercent100: props.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
            set: props.brokerageAccount.minimumPriceChangePercent100
          } : undefined,
        deletedAt: props.brokerageAccount.deletedAt !== undefined ? {
            set: props.brokerageAccount.deletedAt
          } : undefined,
    allocation: props.brokerageAccount.allocation ? 
    typeof props.brokerageAccount.allocation === 'object' && Object.keys(props.brokerageAccount.allocation).length === 1 && (Object.keys(props.brokerageAccount.allocation)[0] === 'id' || Object.keys(props.brokerageAccount.allocation)[0] === 'symbol')
? {
    connect: {
      id: props.brokerageAccount.allocation.id
    }
} : { upsert: {
        where: {
          id: props.brokerageAccount.allocation.id !== undefined ? {
              equals: props.brokerageAccount.allocation.id
            } : undefined,
          brokerageAccountId: props.brokerageAccount.allocation.brokerageAccountId !== undefined ? {
              equals: props.brokerageAccount.allocation.brokerageAccountId
            } : undefined,
        },
        update: {
          id: props.brokerageAccount.allocation.id !== undefined ? {
              set: props.brokerageAccount.allocation.id
            } : undefined,
          equities: props.brokerageAccount.allocation.equities !== undefined ? {
              set: props.brokerageAccount.allocation.equities
            } : undefined,
          optionsContracts: props.brokerageAccount.allocation.optionsContracts !== undefined ? {
              set: props.brokerageAccount.allocation.optionsContracts
            } : undefined,
          futures: props.brokerageAccount.allocation.futures !== undefined ? {
              set: props.brokerageAccount.allocation.futures
            } : undefined,
          etfs: props.brokerageAccount.allocation.etfs !== undefined ? {
              set: props.brokerageAccount.allocation.etfs
            } : undefined,
          forex: props.brokerageAccount.allocation.forex !== undefined ? {
              set: props.brokerageAccount.allocation.forex
            } : undefined,
          crypto: props.brokerageAccount.allocation.crypto !== undefined ? {
              set: props.brokerageAccount.allocation.crypto
            } : undefined,
          stocks: props.brokerageAccount.allocation.stocks !== undefined ? {
              set: props.brokerageAccount.allocation.stocks
            } : undefined,
          options: props.brokerageAccount.allocation.options !== undefined ? {
              set: props.brokerageAccount.allocation.options
            } : undefined,
        },
        create: {
          equities: props.brokerageAccount.allocation.equities !== undefined ? props.brokerageAccount.allocation.equities : undefined,
          optionsContracts: props.brokerageAccount.allocation.optionsContracts !== undefined ? props.brokerageAccount.allocation.optionsContracts : undefined,
          futures: props.brokerageAccount.allocation.futures !== undefined ? props.brokerageAccount.allocation.futures : undefined,
          etfs: props.brokerageAccount.allocation.etfs !== undefined ? props.brokerageAccount.allocation.etfs : undefined,
          forex: props.brokerageAccount.allocation.forex !== undefined ? props.brokerageAccount.allocation.forex : undefined,
          crypto: props.brokerageAccount.allocation.crypto !== undefined ? props.brokerageAccount.allocation.crypto : undefined,
          stocks: props.brokerageAccount.allocation.stocks !== undefined ? props.brokerageAccount.allocation.stocks : undefined,
          options: props.brokerageAccount.allocation.options !== undefined ? props.brokerageAccount.allocation.options : undefined,
        },
      }
    } : undefined,
    fund: props.brokerageAccount.fund ? 
    typeof props.brokerageAccount.fund === 'object' && Object.keys(props.brokerageAccount.fund).length === 1 && (Object.keys(props.brokerageAccount.fund)[0] === 'id' || Object.keys(props.brokerageAccount.fund)[0] === 'symbol')
? {
    connect: {
      id: props.brokerageAccount.fund.id
    }
} : { upsert: {
        where: {
          id: props.brokerageAccount.fund.id !== undefined ? {
              equals: props.brokerageAccount.fund.id
            } : undefined,
          name: props.brokerageAccount.fund.name !== undefined ? {
              equals: props.brokerageAccount.fund.name
            } : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? {
              equals: props.brokerageAccount.fund.slug
            } : undefined,
          organizationId: props.brokerageAccount.fund.organizationId !== undefined ? {
              equals: props.brokerageAccount.fund.organizationId
            } : undefined,
        },
        update: {
          id: props.brokerageAccount.fund.id !== undefined ? {
              set: props.brokerageAccount.fund.id
            } : undefined,
          name: props.brokerageAccount.fund.name !== undefined ? {
              set: props.brokerageAccount.fund.name
            } : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? {
              set: props.brokerageAccount.fund.slug
            } : undefined,
          description: props.brokerageAccount.fund.description !== undefined ? {
              set: props.brokerageAccount.fund.description
            } : undefined,
          status: props.brokerageAccount.fund.status !== undefined ? {
              set: props.brokerageAccount.fund.status
            } : undefined,
          tradingOverrides: props.brokerageAccount.fund.tradingOverrides !== undefined ? {
              set: props.brokerageAccount.fund.tradingOverrides
            } : undefined,
          llmOverrides: props.brokerageAccount.fund.llmOverrides !== undefined ? {
              set: props.brokerageAccount.fund.llmOverrides
            } : undefined,
          deletedAt: props.brokerageAccount.fund.deletedAt !== undefined ? {
              set: props.brokerageAccount.fund.deletedAt
            } : undefined,
      organization: props.brokerageAccount.fund.organization ? 
      typeof props.brokerageAccount.fund.organization === 'object' && Object.keys(props.brokerageAccount.fund.organization).length === 1 && (Object.keys(props.brokerageAccount.fund.organization)[0] === 'id' || Object.keys(props.brokerageAccount.fund.organization)[0] === 'symbol')
? {
      connect: {
        id: props.brokerageAccount.fund.organization.id
      }
} : { upsert: {
          where: {
            id: props.brokerageAccount.fund.organization.id !== undefined ? {
                equals: props.brokerageAccount.fund.organization.id
              } : undefined,
            name: props.brokerageAccount.fund.organization.name !== undefined ? {
                equals: props.brokerageAccount.fund.organization.name
              } : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? {
                equals: props.brokerageAccount.fund.organization.slug
              } : undefined,
          },
          update: {
            id: props.brokerageAccount.fund.organization.id !== undefined ? {
                set: props.brokerageAccount.fund.organization.id
              } : undefined,
            name: props.brokerageAccount.fund.organization.name !== undefined ? {
                set: props.brokerageAccount.fund.organization.name
              } : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? {
                set: props.brokerageAccount.fund.organization.slug
              } : undefined,
            logoUrl: props.brokerageAccount.fund.organization.logoUrl !== undefined ? {
                set: props.brokerageAccount.fund.organization.logoUrl
              } : undefined,
            website: props.brokerageAccount.fund.organization.website !== undefined ? {
                set: props.brokerageAccount.fund.organization.website
              } : undefined,
            businessType: props.brokerageAccount.fund.organization.businessType !== undefined ? {
                set: props.brokerageAccount.fund.organization.businessType
              } : undefined,
            jurisdiction: props.brokerageAccount.fund.organization.jurisdiction !== undefined ? {
                set: props.brokerageAccount.fund.organization.jurisdiction
              } : undefined,
            regulatoryStatus: props.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? {
                set: props.brokerageAccount.fund.organization.regulatoryStatus
              } : undefined,
            description: props.brokerageAccount.fund.organization.description !== undefined ? {
                set: props.brokerageAccount.fund.organization.description
              } : undefined,
            tradingDefaults: props.brokerageAccount.fund.organization.tradingDefaults !== undefined ? {
                set: props.brokerageAccount.fund.organization.tradingDefaults
              } : undefined,
            llmDefaults: props.brokerageAccount.fund.organization.llmDefaults !== undefined ? {
                set: props.brokerageAccount.fund.organization.llmDefaults
              } : undefined,
            deletedAt: props.brokerageAccount.fund.organization.deletedAt !== undefined ? {
                set: props.brokerageAccount.fund.organization.deletedAt
              } : undefined,
          },
          create: {
            name: props.brokerageAccount.fund.organization.name !== undefined ? props.brokerageAccount.fund.organization.name : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            logoUrl: props.brokerageAccount.fund.organization.logoUrl !== undefined ? props.brokerageAccount.fund.organization.logoUrl : undefined,
            website: props.brokerageAccount.fund.organization.website !== undefined ? props.brokerageAccount.fund.organization.website : undefined,
            businessType: props.brokerageAccount.fund.organization.businessType !== undefined ? props.brokerageAccount.fund.organization.businessType : undefined,
            jurisdiction: props.brokerageAccount.fund.organization.jurisdiction !== undefined ? props.brokerageAccount.fund.organization.jurisdiction : undefined,
            regulatoryStatus: props.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? props.brokerageAccount.fund.organization.regulatoryStatus : undefined,
            description: props.brokerageAccount.fund.organization.description !== undefined ? props.brokerageAccount.fund.organization.description : undefined,
            tradingDefaults: props.brokerageAccount.fund.organization.tradingDefaults !== undefined ? props.brokerageAccount.fund.organization.tradingDefaults : undefined,
            llmDefaults: props.brokerageAccount.fund.organization.llmDefaults !== undefined ? props.brokerageAccount.fund.organization.llmDefaults : undefined,
            deletedAt: props.brokerageAccount.fund.organization.deletedAt !== undefined ? props.brokerageAccount.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      assignments: props.brokerageAccount.fund.assignments ? 
      Array.isArray(props.brokerageAccount.fund.assignments) && props.brokerageAccount.fund.assignments.length > 0 && props.brokerageAccount.fund.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.brokerageAccount.fund.assignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.brokerageAccount.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investments: props.brokerageAccount.fund.investments ? 
      Array.isArray(props.brokerageAccount.fund.investments) && props.brokerageAccount.fund.investments.length > 0 && props.brokerageAccount.fund.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.brokerageAccount.fund.investments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.brokerageAccount.fund.investments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            investorId: item.investorId !== undefined ? {
                equals: item.investorId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            units: item.units !== undefined ? {
                set: item.units
              } : undefined,
            investedAt: item.investedAt !== undefined ? {
                set: item.investedAt
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: props.brokerageAccount.fund.name !== undefined ? props.brokerageAccount.fund.name : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? props.brokerageAccount.fund.slug : undefined,
          description: props.brokerageAccount.fund.description !== undefined ? props.brokerageAccount.fund.description : undefined,
          status: props.brokerageAccount.fund.status !== undefined ? props.brokerageAccount.fund.status : undefined,
          tradingOverrides: props.brokerageAccount.fund.tradingOverrides !== undefined ? props.brokerageAccount.fund.tradingOverrides : undefined,
          llmOverrides: props.brokerageAccount.fund.llmOverrides !== undefined ? props.brokerageAccount.fund.llmOverrides : undefined,
          deletedAt: props.brokerageAccount.fund.deletedAt !== undefined ? props.brokerageAccount.fund.deletedAt : undefined,
      organization: props.brokerageAccount.fund.organization ? 
        typeof props.brokerageAccount.fund.organization === 'object' && Object.keys(props.brokerageAccount.fund.organization).length === 1 && Object.keys(props.brokerageAccount.fund.organization)[0] === 'id'
    ? { connect: {
            id: props.brokerageAccount.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.brokerageAccount.fund.organization.id !== undefined ? props.brokerageAccount.fund.organization.id : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            name: props.brokerageAccount.fund.organization.name !== undefined ? {
                equals: props.brokerageAccount.fund.organization.name 
               } : undefined,
          },
          create: {
            name: props.brokerageAccount.fund.organization.name !== undefined ? props.brokerageAccount.fund.organization.name : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            logoUrl: props.brokerageAccount.fund.organization.logoUrl !== undefined ? props.brokerageAccount.fund.organization.logoUrl : undefined,
            website: props.brokerageAccount.fund.organization.website !== undefined ? props.brokerageAccount.fund.organization.website : undefined,
            businessType: props.brokerageAccount.fund.organization.businessType !== undefined ? props.brokerageAccount.fund.organization.businessType : undefined,
            jurisdiction: props.brokerageAccount.fund.organization.jurisdiction !== undefined ? props.brokerageAccount.fund.organization.jurisdiction : undefined,
            regulatoryStatus: props.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? props.brokerageAccount.fund.organization.regulatoryStatus : undefined,
            description: props.brokerageAccount.fund.organization.description !== undefined ? props.brokerageAccount.fund.organization.description : undefined,
            tradingDefaults: props.brokerageAccount.fund.organization.tradingDefaults !== undefined ? props.brokerageAccount.fund.organization.tradingDefaults : undefined,
            llmDefaults: props.brokerageAccount.fund.organization.llmDefaults !== undefined ? props.brokerageAccount.fund.organization.llmDefaults : undefined,
            deletedAt: props.brokerageAccount.fund.organization.deletedAt !== undefined ? props.brokerageAccount.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      assignments: props.brokerageAccount.fund.assignments ? 
        Array.isArray(props.brokerageAccount.fund.assignments) && props.brokerageAccount.fund.assignments.length > 0 &&  props.brokerageAccount.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investments: props.brokerageAccount.fund.investments ? 
        Array.isArray(props.brokerageAccount.fund.investments) && props.brokerageAccount.fund.investments.length > 0 &&  props.brokerageAccount.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.investments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            investorId: item.investorId !== undefined ? {
                equals: item.investorId 
               } : undefined,
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.brokerageAccount.alerts ? 
    Array.isArray(props.brokerageAccount.alerts) && props.brokerageAccount.alerts.length > 0 && props.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.brokerageAccount.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.brokerageAccount.alerts.map((item: any) => ({
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
    trades: props.brokerageAccount.trades ? 
    Array.isArray(props.brokerageAccount.trades) && props.brokerageAccount.trades.length > 0 && props.brokerageAccount.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.brokerageAccount.trades.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.brokerageAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          brokerageAccountId: item.brokerageAccountId !== undefined ? {
              equals: item.brokerageAccountId
            } : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          signal: item.signal !== undefined ? {
              set: item.signal
            } : undefined,
          strategy: item.strategy !== undefined ? {
              set: item.strategy
            } : undefined,
          analysis: item.analysis !== undefined ? {
              set: item.analysis
            } : undefined,
          summary: item.summary !== undefined ? {
              set: item.summary
            } : undefined,
          confidence: item.confidence !== undefined ? {
              set: item.confidence
            } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          deletedAt: item.deletedAt !== undefined ? {
              set: item.deletedAt
            } : undefined,
          symbol: item.symbol !== undefined ? {
              set: item.symbol
            } : undefined,
          entryPrice: item.entryPrice !== undefined ? {
              set: item.entryPrice
            } : undefined,
          exitPrice: item.exitPrice !== undefined ? {
              set: item.exitPrice
            } : undefined,
          entryQty: item.entryQty !== undefined ? {
              set: item.entryQty
            } : undefined,
          exitQty: item.exitQty !== undefined ? {
              set: item.exitQty
            } : undefined,
          entryValue: item.entryValue !== undefined ? {
              set: item.entryValue
            } : undefined,
          exitValue: item.exitValue !== undefined ? {
              set: item.exitValue
            } : undefined,
          entryTime: item.entryTime !== undefined ? {
              set: item.entryTime
            } : undefined,
          exitTime: item.exitTime !== undefined ? {
              set: item.exitTime
            } : undefined,
          pnlAmount: item.pnlAmount !== undefined ? {
              set: item.pnlAmount
            } : undefined,
          pnlPercent: item.pnlPercent !== undefined ? {
              set: item.pnlPercent
            } : undefined,
          durationMinutes: item.durationMinutes !== undefined ? {
              set: item.durationMinutes
            } : undefined,
          marketPhase: item.marketPhase !== undefined ? {
              set: item.marketPhase
            } : undefined,
          marketVolatility: item.marketVolatility !== undefined ? {
              set: item.marketVolatility
            } : undefined,
          sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? {
              set: item.sessionHorizonMinutes
            } : undefined,
          thresholdsJson: item.thresholdsJson !== undefined ? {
              set: item.thresholdsJson
            } : undefined,
      actions: item.actions ? 
      Array.isArray(item.actions) && item.actions.length > 0 && item.actions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.actions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
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
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            primary: item.primary !== undefined ? item.primary : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
          exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
          entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
          exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
          entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
          exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
          entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
          exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
          pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
          pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
          durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
          marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
          marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
          sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
          thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
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
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    optionsPositions: props.brokerageAccount.optionsPositions ? 
    Array.isArray(props.brokerageAccount.optionsPositions) && props.brokerageAccount.optionsPositions.length > 0 && props.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.brokerageAccount.optionsPositions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.brokerageAccount.optionsPositions.map((item: any) => ({
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
          },
        }
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
          },
        }
      } : undefined,
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
      }))
    } : undefined,
      },
      create: {
        provider: props.brokerageAccount.provider !== undefined ? props.brokerageAccount.provider : undefined,
        type: props.brokerageAccount.type !== undefined ? props.brokerageAccount.type : undefined,
        apiKey: props.brokerageAccount.apiKey !== undefined ? props.brokerageAccount.apiKey : undefined,
        apiSecret: props.brokerageAccount.apiSecret !== undefined ? props.brokerageAccount.apiSecret : undefined,
        configuration: props.brokerageAccount.configuration !== undefined ? props.brokerageAccount.configuration : undefined,
        marketOpen: props.brokerageAccount.marketOpen !== undefined ? props.brokerageAccount.marketOpen : undefined,
        realTime: props.brokerageAccount.realTime !== undefined ? props.brokerageAccount.realTime : undefined,
        cryptoTradingEnabled: props.brokerageAccount.cryptoTradingEnabled !== undefined ? props.brokerageAccount.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: props.brokerageAccount.cryptoTradingPairs !== undefined ? {
            set: props.brokerageAccount.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: props.brokerageAccount.cryptoTradeAllocationPct !== undefined ? props.brokerageAccount.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: props.brokerageAccount.tradeAllocationPct !== undefined ? props.brokerageAccount.tradeAllocationPct : undefined,
        autoAllocation: props.brokerageAccount.autoAllocation !== undefined ? props.brokerageAccount.autoAllocation : undefined,
        minPercentageChange: props.brokerageAccount.minPercentageChange !== undefined ? props.brokerageAccount.minPercentageChange : undefined,
        volumeThreshold: props.brokerageAccount.volumeThreshold !== undefined ? props.brokerageAccount.volumeThreshold : undefined,
        enablePortfolioTrailingStop: props.brokerageAccount.enablePortfolioTrailingStop !== undefined ? props.brokerageAccount.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: props.brokerageAccount.portfolioTrailPercent !== undefined ? props.brokerageAccount.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: props.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? props.brokerageAccount.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: props.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? props.brokerageAccount.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: props.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? props.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: props.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? props.brokerageAccount.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: props.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? props.brokerageAccount.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: props.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? props.brokerageAccount.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: props.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? props.brokerageAccount.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: props.brokerageAccount.minimumPriceChangePercent100 !== undefined ? props.brokerageAccount.minimumPriceChangePercent100 : undefined,
        deletedAt: props.brokerageAccount.deletedAt !== undefined ? props.brokerageAccount.deletedAt : undefined,
    allocation: props.brokerageAccount.allocation ? 
      typeof props.brokerageAccount.allocation === 'object' && Object.keys(props.brokerageAccount.allocation).length === 1 && Object.keys(props.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
          id: props.brokerageAccount.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.brokerageAccount.allocation.id !== undefined ? props.brokerageAccount.allocation.id : undefined,
          brokerageAccountId: props.brokerageAccount.allocation.brokerageAccountId !== undefined ? props.brokerageAccount.allocation.brokerageAccountId : undefined,
        },
        create: {
          equities: props.brokerageAccount.allocation.equities !== undefined ? props.brokerageAccount.allocation.equities : undefined,
          optionsContracts: props.brokerageAccount.allocation.optionsContracts !== undefined ? props.brokerageAccount.allocation.optionsContracts : undefined,
          futures: props.brokerageAccount.allocation.futures !== undefined ? props.brokerageAccount.allocation.futures : undefined,
          etfs: props.brokerageAccount.allocation.etfs !== undefined ? props.brokerageAccount.allocation.etfs : undefined,
          forex: props.brokerageAccount.allocation.forex !== undefined ? props.brokerageAccount.allocation.forex : undefined,
          crypto: props.brokerageAccount.allocation.crypto !== undefined ? props.brokerageAccount.allocation.crypto : undefined,
          stocks: props.brokerageAccount.allocation.stocks !== undefined ? props.brokerageAccount.allocation.stocks : undefined,
          options: props.brokerageAccount.allocation.options !== undefined ? props.brokerageAccount.allocation.options : undefined,
        },
      }
    } : undefined,
    fund: props.brokerageAccount.fund ? 
      typeof props.brokerageAccount.fund === 'object' && Object.keys(props.brokerageAccount.fund).length === 1 && Object.keys(props.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
          id: props.brokerageAccount.fund.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.brokerageAccount.fund.id !== undefined ? props.brokerageAccount.fund.id : undefined,
          name: props.brokerageAccount.fund.name !== undefined ? {
              equals: props.brokerageAccount.fund.name 
             } : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? {
              equals: props.brokerageAccount.fund.slug 
             } : undefined,
          organizationId: props.brokerageAccount.fund.organizationId !== undefined ? {
              equals: props.brokerageAccount.fund.organizationId 
             } : undefined,
        },
        create: {
          name: props.brokerageAccount.fund.name !== undefined ? props.brokerageAccount.fund.name : undefined,
          slug: props.brokerageAccount.fund.slug !== undefined ? props.brokerageAccount.fund.slug : undefined,
          description: props.brokerageAccount.fund.description !== undefined ? props.brokerageAccount.fund.description : undefined,
          status: props.brokerageAccount.fund.status !== undefined ? props.brokerageAccount.fund.status : undefined,
          tradingOverrides: props.brokerageAccount.fund.tradingOverrides !== undefined ? props.brokerageAccount.fund.tradingOverrides : undefined,
          llmOverrides: props.brokerageAccount.fund.llmOverrides !== undefined ? props.brokerageAccount.fund.llmOverrides : undefined,
          deletedAt: props.brokerageAccount.fund.deletedAt !== undefined ? props.brokerageAccount.fund.deletedAt : undefined,
      organization: props.brokerageAccount.fund.organization ? 
        typeof props.brokerageAccount.fund.organization === 'object' && Object.keys(props.brokerageAccount.fund.organization).length === 1 && Object.keys(props.brokerageAccount.fund.organization)[0] === 'id'
    ? { connect: {
            id: props.brokerageAccount.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.brokerageAccount.fund.organization.id !== undefined ? props.brokerageAccount.fund.organization.id : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            name: props.brokerageAccount.fund.organization.name !== undefined ? {
                equals: props.brokerageAccount.fund.organization.name 
               } : undefined,
          },
          create: {
            name: props.brokerageAccount.fund.organization.name !== undefined ? props.brokerageAccount.fund.organization.name : undefined,
            slug: props.brokerageAccount.fund.organization.slug !== undefined ? props.brokerageAccount.fund.organization.slug : undefined,
            logoUrl: props.brokerageAccount.fund.organization.logoUrl !== undefined ? props.brokerageAccount.fund.organization.logoUrl : undefined,
            website: props.brokerageAccount.fund.organization.website !== undefined ? props.brokerageAccount.fund.organization.website : undefined,
            businessType: props.brokerageAccount.fund.organization.businessType !== undefined ? props.brokerageAccount.fund.organization.businessType : undefined,
            jurisdiction: props.brokerageAccount.fund.organization.jurisdiction !== undefined ? props.brokerageAccount.fund.organization.jurisdiction : undefined,
            regulatoryStatus: props.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? props.brokerageAccount.fund.organization.regulatoryStatus : undefined,
            description: props.brokerageAccount.fund.organization.description !== undefined ? props.brokerageAccount.fund.organization.description : undefined,
            tradingDefaults: props.brokerageAccount.fund.organization.tradingDefaults !== undefined ? props.brokerageAccount.fund.organization.tradingDefaults : undefined,
            llmDefaults: props.brokerageAccount.fund.organization.llmDefaults !== undefined ? props.brokerageAccount.fund.organization.llmDefaults : undefined,
            deletedAt: props.brokerageAccount.fund.organization.deletedAt !== undefined ? props.brokerageAccount.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      assignments: props.brokerageAccount.fund.assignments ? 
        Array.isArray(props.brokerageAccount.fund.assignments) && props.brokerageAccount.fund.assignments.length > 0 &&  props.brokerageAccount.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investments: props.brokerageAccount.fund.investments ? 
        Array.isArray(props.brokerageAccount.fund.investments) && props.brokerageAccount.fund.investments.length > 0 &&  props.brokerageAccount.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.brokerageAccount.fund.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.brokerageAccount.fund.investments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            investorId: item.investorId !== undefined ? {
                equals: item.investorId 
               } : undefined,
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.brokerageAccount.alerts ? 
      Array.isArray(props.brokerageAccount.alerts) && props.brokerageAccount.alerts.length > 0 &&  props.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.alerts.map((item: any) => ({
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
    trades: props.brokerageAccount.trades ? 
      Array.isArray(props.brokerageAccount.trades) && props.brokerageAccount.trades.length > 0 &&  props.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          brokerageAccountId: item.brokerageAccountId !== undefined ? {
              equals: item.brokerageAccountId 
             } : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
        },
        create: {
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
          exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
          entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
          exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
          entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
          exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
          entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
          exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
          pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
          pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
          durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
          marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
          marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
          sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
          thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
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
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    optionsPositions: props.brokerageAccount.optionsPositions ? 
      Array.isArray(props.brokerageAccount.optionsPositions) && props.brokerageAccount.optionsPositions.length > 0 &&  props.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.optionsPositions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.optionsPositions.map((item: any) => ({
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
          },
        }
      } : undefined,
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Update multiple OptionsTradeExecution records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of OptionsTradeExecution objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: OptionsTradeExecutionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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
  brokerageAccountId: prop.brokerageAccountId !== undefined ? {
    equals: prop.brokerageAccountId 
  } : undefined,
  brokerOrderId: prop.brokerOrderId !== undefined ? {
    equals: prop.brokerOrderId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
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
        brokerageAccountId: prop.position.brokerageAccountId !== undefined ? {
            equals: prop.position.brokerageAccountId
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
    brokerageAccount: prop.position.brokerageAccount ? 
    typeof prop.position.brokerageAccount === 'object' && Object.keys(prop.position.brokerageAccount).length === 1 && (Object.keys(prop.position.brokerageAccount)[0] === 'id' || Object.keys(prop.position.brokerageAccount)[0] === 'symbol')
? {
    connect: {
      id: prop.position.brokerageAccount.id
    }
} : { upsert: {
        where: {
          id: prop.position.brokerageAccount.id !== undefined ? {
              equals: prop.position.brokerageAccount.id
            } : undefined,
          fundId: prop.position.brokerageAccount.fundId !== undefined ? {
              equals: prop.position.brokerageAccount.fundId
            } : undefined,
        },
        update: {
          id: prop.position.brokerageAccount.id !== undefined ? {
              set: prop.position.brokerageAccount.id
            } : undefined,
          provider: prop.position.brokerageAccount.provider !== undefined ? {
              set: prop.position.brokerageAccount.provider
            } : undefined,
          type: prop.position.brokerageAccount.type !== undefined ? {
              set: prop.position.brokerageAccount.type
            } : undefined,
          apiKey: prop.position.brokerageAccount.apiKey !== undefined ? {
              set: prop.position.brokerageAccount.apiKey
            } : undefined,
          apiSecret: prop.position.brokerageAccount.apiSecret !== undefined ? {
              set: prop.position.brokerageAccount.apiSecret
            } : undefined,
          configuration: prop.position.brokerageAccount.configuration !== undefined ? {
              set: prop.position.brokerageAccount.configuration
            } : undefined,
          marketOpen: prop.position.brokerageAccount.marketOpen !== undefined ? {
              set: prop.position.brokerageAccount.marketOpen
            } : undefined,
          realTime: prop.position.brokerageAccount.realTime !== undefined ? {
              set: prop.position.brokerageAccount.realTime
            } : undefined,
          cryptoTradingEnabled: prop.position.brokerageAccount.cryptoTradingEnabled !== undefined ? {
              set: prop.position.brokerageAccount.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: prop.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: prop.position.brokerageAccount.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: prop.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
              set: prop.position.brokerageAccount.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: prop.position.brokerageAccount.tradeAllocationPct !== undefined ? {
              set: prop.position.brokerageAccount.tradeAllocationPct
            } : undefined,
          autoAllocation: prop.position.brokerageAccount.autoAllocation !== undefined ? {
              set: prop.position.brokerageAccount.autoAllocation
            } : undefined,
          minPercentageChange: prop.position.brokerageAccount.minPercentageChange !== undefined ? {
              set: prop.position.brokerageAccount.minPercentageChange
            } : undefined,
          volumeThreshold: prop.position.brokerageAccount.volumeThreshold !== undefined ? {
              set: prop.position.brokerageAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: prop.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
              set: prop.position.brokerageAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: prop.position.brokerageAccount.portfolioTrailPercent !== undefined ? {
              set: prop.position.brokerageAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: prop.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: prop.position.brokerageAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: prop.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: prop.position.brokerageAccount.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: prop.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
              set: prop.position.brokerageAccount.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: prop.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
              set: prop.position.brokerageAccount.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: prop.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
              set: prop.position.brokerageAccount.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: prop.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
              set: prop.position.brokerageAccount.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: prop.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
              set: prop.position.brokerageAccount.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: prop.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
              set: prop.position.brokerageAccount.minimumPriceChangePercent100
            } : undefined,
          deletedAt: prop.position.brokerageAccount.deletedAt !== undefined ? {
              set: prop.position.brokerageAccount.deletedAt
            } : undefined,
      allocation: prop.position.brokerageAccount.allocation ? 
      typeof prop.position.brokerageAccount.allocation === 'object' && Object.keys(prop.position.brokerageAccount.allocation).length === 1 && (Object.keys(prop.position.brokerageAccount.allocation)[0] === 'id' || Object.keys(prop.position.brokerageAccount.allocation)[0] === 'symbol')
? {
      connect: {
        id: prop.position.brokerageAccount.allocation.id
      }
} : { upsert: {
          where: {
            id: prop.position.brokerageAccount.allocation.id !== undefined ? {
                equals: prop.position.brokerageAccount.allocation.id
              } : undefined,
            brokerageAccountId: prop.position.brokerageAccount.allocation.brokerageAccountId !== undefined ? {
                equals: prop.position.brokerageAccount.allocation.brokerageAccountId
              } : undefined,
          },
          update: {
            id: prop.position.brokerageAccount.allocation.id !== undefined ? {
                set: prop.position.brokerageAccount.allocation.id
              } : undefined,
            equities: prop.position.brokerageAccount.allocation.equities !== undefined ? {
                set: prop.position.brokerageAccount.allocation.equities
              } : undefined,
            optionsContracts: prop.position.brokerageAccount.allocation.optionsContracts !== undefined ? {
                set: prop.position.brokerageAccount.allocation.optionsContracts
              } : undefined,
            futures: prop.position.brokerageAccount.allocation.futures !== undefined ? {
                set: prop.position.brokerageAccount.allocation.futures
              } : undefined,
            etfs: prop.position.brokerageAccount.allocation.etfs !== undefined ? {
                set: prop.position.brokerageAccount.allocation.etfs
              } : undefined,
            forex: prop.position.brokerageAccount.allocation.forex !== undefined ? {
                set: prop.position.brokerageAccount.allocation.forex
              } : undefined,
            crypto: prop.position.brokerageAccount.allocation.crypto !== undefined ? {
                set: prop.position.brokerageAccount.allocation.crypto
              } : undefined,
            stocks: prop.position.brokerageAccount.allocation.stocks !== undefined ? {
                set: prop.position.brokerageAccount.allocation.stocks
              } : undefined,
            options: prop.position.brokerageAccount.allocation.options !== undefined ? {
                set: prop.position.brokerageAccount.allocation.options
              } : undefined,
          },
          create: {
            equities: prop.position.brokerageAccount.allocation.equities !== undefined ? prop.position.brokerageAccount.allocation.equities : undefined,
            optionsContracts: prop.position.brokerageAccount.allocation.optionsContracts !== undefined ? prop.position.brokerageAccount.allocation.optionsContracts : undefined,
            futures: prop.position.brokerageAccount.allocation.futures !== undefined ? prop.position.brokerageAccount.allocation.futures : undefined,
            etfs: prop.position.brokerageAccount.allocation.etfs !== undefined ? prop.position.brokerageAccount.allocation.etfs : undefined,
            forex: prop.position.brokerageAccount.allocation.forex !== undefined ? prop.position.brokerageAccount.allocation.forex : undefined,
            crypto: prop.position.brokerageAccount.allocation.crypto !== undefined ? prop.position.brokerageAccount.allocation.crypto : undefined,
            stocks: prop.position.brokerageAccount.allocation.stocks !== undefined ? prop.position.brokerageAccount.allocation.stocks : undefined,
            options: prop.position.brokerageAccount.allocation.options !== undefined ? prop.position.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: prop.position.brokerageAccount.fund ? 
      typeof prop.position.brokerageAccount.fund === 'object' && Object.keys(prop.position.brokerageAccount.fund).length === 1 && (Object.keys(prop.position.brokerageAccount.fund)[0] === 'id' || Object.keys(prop.position.brokerageAccount.fund)[0] === 'symbol')
? {
      connect: {
        id: prop.position.brokerageAccount.fund.id
      }
} : { upsert: {
          where: {
            id: prop.position.brokerageAccount.fund.id !== undefined ? {
                equals: prop.position.brokerageAccount.fund.id
              } : undefined,
            name: prop.position.brokerageAccount.fund.name !== undefined ? {
                equals: prop.position.brokerageAccount.fund.name
              } : undefined,
            slug: prop.position.brokerageAccount.fund.slug !== undefined ? {
                equals: prop.position.brokerageAccount.fund.slug
              } : undefined,
            organizationId: prop.position.brokerageAccount.fund.organizationId !== undefined ? {
                equals: prop.position.brokerageAccount.fund.organizationId
              } : undefined,
          },
          update: {
            id: prop.position.brokerageAccount.fund.id !== undefined ? {
                set: prop.position.brokerageAccount.fund.id
              } : undefined,
            name: prop.position.brokerageAccount.fund.name !== undefined ? {
                set: prop.position.brokerageAccount.fund.name
              } : undefined,
            slug: prop.position.brokerageAccount.fund.slug !== undefined ? {
                set: prop.position.brokerageAccount.fund.slug
              } : undefined,
            description: prop.position.brokerageAccount.fund.description !== undefined ? {
                set: prop.position.brokerageAccount.fund.description
              } : undefined,
            status: prop.position.brokerageAccount.fund.status !== undefined ? {
                set: prop.position.brokerageAccount.fund.status
              } : undefined,
            tradingOverrides: prop.position.brokerageAccount.fund.tradingOverrides !== undefined ? {
                set: prop.position.brokerageAccount.fund.tradingOverrides
              } : undefined,
            llmOverrides: prop.position.brokerageAccount.fund.llmOverrides !== undefined ? {
                set: prop.position.brokerageAccount.fund.llmOverrides
              } : undefined,
            deletedAt: prop.position.brokerageAccount.fund.deletedAt !== undefined ? {
                set: prop.position.brokerageAccount.fund.deletedAt
              } : undefined,
          },
          create: {
            name: prop.position.brokerageAccount.fund.name !== undefined ? prop.position.brokerageAccount.fund.name : undefined,
            slug: prop.position.brokerageAccount.fund.slug !== undefined ? prop.position.brokerageAccount.fund.slug : undefined,
            description: prop.position.brokerageAccount.fund.description !== undefined ? prop.position.brokerageAccount.fund.description : undefined,
            status: prop.position.brokerageAccount.fund.status !== undefined ? prop.position.brokerageAccount.fund.status : undefined,
            tradingOverrides: prop.position.brokerageAccount.fund.tradingOverrides !== undefined ? prop.position.brokerageAccount.fund.tradingOverrides : undefined,
            llmOverrides: prop.position.brokerageAccount.fund.llmOverrides !== undefined ? prop.position.brokerageAccount.fund.llmOverrides : undefined,
            deletedAt: prop.position.brokerageAccount.fund.deletedAt !== undefined ? prop.position.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: prop.position.brokerageAccount.alerts ? 
      Array.isArray(prop.position.brokerageAccount.alerts) && prop.position.brokerageAccount.alerts.length > 0 && prop.position.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.position.brokerageAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.position.brokerageAccount.alerts.map((item: any) => ({
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
      trades: prop.position.brokerageAccount.trades ? 
      Array.isArray(prop.position.brokerageAccount.trades) && prop.position.brokerageAccount.trades.length > 0 && prop.position.brokerageAccount.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.position.brokerageAccount.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.position.brokerageAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal
              } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy
              } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis
              } : undefined,
            summary: item.summary !== undefined ? {
                set: item.summary
              } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence
              } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            deletedAt: item.deletedAt !== undefined ? {
                set: item.deletedAt
              } : undefined,
            symbol: item.symbol !== undefined ? {
                set: item.symbol
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            entryQty: item.entryQty !== undefined ? {
                set: item.entryQty
              } : undefined,
            exitQty: item.exitQty !== undefined ? {
                set: item.exitQty
              } : undefined,
            entryValue: item.entryValue !== undefined ? {
                set: item.entryValue
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            pnlAmount: item.pnlAmount !== undefined ? {
                set: item.pnlAmount
              } : undefined,
            pnlPercent: item.pnlPercent !== undefined ? {
                set: item.pnlPercent
              } : undefined,
            durationMinutes: item.durationMinutes !== undefined ? {
                set: item.durationMinutes
              } : undefined,
            marketPhase: item.marketPhase !== undefined ? {
                set: item.marketPhase
              } : undefined,
            marketVolatility: item.marketVolatility !== undefined ? {
                set: item.marketVolatility
              } : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? {
                set: item.sessionHorizonMinutes
              } : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? {
                set: item.thresholdsJson
              } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: prop.position.brokerageAccount.optionsTradeExecutions ? 
      Array.isArray(prop.position.brokerageAccount.optionsTradeExecutions) && prop.position.brokerageAccount.optionsTradeExecutions.length > 0 && prop.position.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
          provider: prop.position.brokerageAccount.provider !== undefined ? prop.position.brokerageAccount.provider : undefined,
          type: prop.position.brokerageAccount.type !== undefined ? prop.position.brokerageAccount.type : undefined,
          apiKey: prop.position.brokerageAccount.apiKey !== undefined ? prop.position.brokerageAccount.apiKey : undefined,
          apiSecret: prop.position.brokerageAccount.apiSecret !== undefined ? prop.position.brokerageAccount.apiSecret : undefined,
          configuration: prop.position.brokerageAccount.configuration !== undefined ? prop.position.brokerageAccount.configuration : undefined,
          marketOpen: prop.position.brokerageAccount.marketOpen !== undefined ? prop.position.brokerageAccount.marketOpen : undefined,
          realTime: prop.position.brokerageAccount.realTime !== undefined ? prop.position.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: prop.position.brokerageAccount.cryptoTradingEnabled !== undefined ? prop.position.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: prop.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: prop.position.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: prop.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? prop.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: prop.position.brokerageAccount.tradeAllocationPct !== undefined ? prop.position.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: prop.position.brokerageAccount.autoAllocation !== undefined ? prop.position.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: prop.position.brokerageAccount.minPercentageChange !== undefined ? prop.position.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: prop.position.brokerageAccount.volumeThreshold !== undefined ? prop.position.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: prop.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? prop.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: prop.position.brokerageAccount.portfolioTrailPercent !== undefined ? prop.position.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: prop.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? prop.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: prop.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? prop.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: prop.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? prop.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: prop.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? prop.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: prop.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? prop.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: prop.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? prop.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: prop.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? prop.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: prop.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? prop.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: prop.position.brokerageAccount.deletedAt !== undefined ? prop.position.brokerageAccount.deletedAt : undefined,
      allocation: prop.position.brokerageAccount.allocation ? 
        typeof prop.position.brokerageAccount.allocation === 'object' && Object.keys(prop.position.brokerageAccount.allocation).length === 1 && Object.keys(prop.position.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: prop.position.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.position.brokerageAccount.allocation.id !== undefined ? prop.position.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: prop.position.brokerageAccount.allocation.brokerageAccountId !== undefined ? prop.position.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: prop.position.brokerageAccount.allocation.equities !== undefined ? prop.position.brokerageAccount.allocation.equities : undefined,
            optionsContracts: prop.position.brokerageAccount.allocation.optionsContracts !== undefined ? prop.position.brokerageAccount.allocation.optionsContracts : undefined,
            futures: prop.position.brokerageAccount.allocation.futures !== undefined ? prop.position.brokerageAccount.allocation.futures : undefined,
            etfs: prop.position.brokerageAccount.allocation.etfs !== undefined ? prop.position.brokerageAccount.allocation.etfs : undefined,
            forex: prop.position.brokerageAccount.allocation.forex !== undefined ? prop.position.brokerageAccount.allocation.forex : undefined,
            crypto: prop.position.brokerageAccount.allocation.crypto !== undefined ? prop.position.brokerageAccount.allocation.crypto : undefined,
            stocks: prop.position.brokerageAccount.allocation.stocks !== undefined ? prop.position.brokerageAccount.allocation.stocks : undefined,
            options: prop.position.brokerageAccount.allocation.options !== undefined ? prop.position.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: prop.position.brokerageAccount.fund ? 
        typeof prop.position.brokerageAccount.fund === 'object' && Object.keys(prop.position.brokerageAccount.fund).length === 1 && Object.keys(prop.position.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: prop.position.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.position.brokerageAccount.fund.id !== undefined ? prop.position.brokerageAccount.fund.id : undefined,
            name: prop.position.brokerageAccount.fund.name !== undefined ? {
                equals: prop.position.brokerageAccount.fund.name 
               } : undefined,
            slug: prop.position.brokerageAccount.fund.slug !== undefined ? {
                equals: prop.position.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: prop.position.brokerageAccount.fund.organizationId !== undefined ? {
                equals: prop.position.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: prop.position.brokerageAccount.fund.name !== undefined ? prop.position.brokerageAccount.fund.name : undefined,
            slug: prop.position.brokerageAccount.fund.slug !== undefined ? prop.position.brokerageAccount.fund.slug : undefined,
            description: prop.position.brokerageAccount.fund.description !== undefined ? prop.position.brokerageAccount.fund.description : undefined,
            status: prop.position.brokerageAccount.fund.status !== undefined ? prop.position.brokerageAccount.fund.status : undefined,
            tradingOverrides: prop.position.brokerageAccount.fund.tradingOverrides !== undefined ? prop.position.brokerageAccount.fund.tradingOverrides : undefined,
            llmOverrides: prop.position.brokerageAccount.fund.llmOverrides !== undefined ? prop.position.brokerageAccount.fund.llmOverrides : undefined,
            deletedAt: prop.position.brokerageAccount.fund.deletedAt !== undefined ? prop.position.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: prop.position.brokerageAccount.alerts ? 
        Array.isArray(prop.position.brokerageAccount.alerts) && prop.position.brokerageAccount.alerts.length > 0 &&  prop.position.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.position.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.position.brokerageAccount.alerts.map((item: any) => ({
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
      trades: prop.position.brokerageAccount.trades ? 
        Array.isArray(prop.position.brokerageAccount.trades) && prop.position.brokerageAccount.trades.length > 0 &&  prop.position.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.position.brokerageAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.position.brokerageAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: prop.position.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(prop.position.brokerageAccount.optionsTradeExecutions) && prop.position.brokerageAccount.optionsTradeExecutions.length > 0 &&  prop.position.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
    brokerageAccount: prop.position.brokerageAccount ? 
      typeof prop.position.brokerageAccount === 'object' && Object.keys(prop.position.brokerageAccount).length === 1 && Object.keys(prop.position.brokerageAccount)[0] === 'id'
    ? { connect: {
          id: prop.position.brokerageAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.position.brokerageAccount.id !== undefined ? prop.position.brokerageAccount.id : undefined,
          fundId: prop.position.brokerageAccount.fundId !== undefined ? {
              equals: prop.position.brokerageAccount.fundId 
             } : undefined,
        },
        create: {
          provider: prop.position.brokerageAccount.provider !== undefined ? prop.position.brokerageAccount.provider : undefined,
          type: prop.position.brokerageAccount.type !== undefined ? prop.position.brokerageAccount.type : undefined,
          apiKey: prop.position.brokerageAccount.apiKey !== undefined ? prop.position.brokerageAccount.apiKey : undefined,
          apiSecret: prop.position.brokerageAccount.apiSecret !== undefined ? prop.position.brokerageAccount.apiSecret : undefined,
          configuration: prop.position.brokerageAccount.configuration !== undefined ? prop.position.brokerageAccount.configuration : undefined,
          marketOpen: prop.position.brokerageAccount.marketOpen !== undefined ? prop.position.brokerageAccount.marketOpen : undefined,
          realTime: prop.position.brokerageAccount.realTime !== undefined ? prop.position.brokerageAccount.realTime : undefined,
          cryptoTradingEnabled: prop.position.brokerageAccount.cryptoTradingEnabled !== undefined ? prop.position.brokerageAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: prop.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
              set: prop.position.brokerageAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: prop.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? prop.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: prop.position.brokerageAccount.tradeAllocationPct !== undefined ? prop.position.brokerageAccount.tradeAllocationPct : undefined,
          autoAllocation: prop.position.brokerageAccount.autoAllocation !== undefined ? prop.position.brokerageAccount.autoAllocation : undefined,
          minPercentageChange: prop.position.brokerageAccount.minPercentageChange !== undefined ? prop.position.brokerageAccount.minPercentageChange : undefined,
          volumeThreshold: prop.position.brokerageAccount.volumeThreshold !== undefined ? prop.position.brokerageAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: prop.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? prop.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: prop.position.brokerageAccount.portfolioTrailPercent !== undefined ? prop.position.brokerageAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: prop.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? prop.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: prop.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? prop.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: prop.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? prop.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: prop.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? prop.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: prop.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? prop.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: prop.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? prop.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: prop.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? prop.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: prop.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? prop.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: prop.position.brokerageAccount.deletedAt !== undefined ? prop.position.brokerageAccount.deletedAt : undefined,
      allocation: prop.position.brokerageAccount.allocation ? 
        typeof prop.position.brokerageAccount.allocation === 'object' && Object.keys(prop.position.brokerageAccount.allocation).length === 1 && Object.keys(prop.position.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
            id: prop.position.brokerageAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.position.brokerageAccount.allocation.id !== undefined ? prop.position.brokerageAccount.allocation.id : undefined,
            brokerageAccountId: prop.position.brokerageAccount.allocation.brokerageAccountId !== undefined ? prop.position.brokerageAccount.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: prop.position.brokerageAccount.allocation.equities !== undefined ? prop.position.brokerageAccount.allocation.equities : undefined,
            optionsContracts: prop.position.brokerageAccount.allocation.optionsContracts !== undefined ? prop.position.brokerageAccount.allocation.optionsContracts : undefined,
            futures: prop.position.brokerageAccount.allocation.futures !== undefined ? prop.position.brokerageAccount.allocation.futures : undefined,
            etfs: prop.position.brokerageAccount.allocation.etfs !== undefined ? prop.position.brokerageAccount.allocation.etfs : undefined,
            forex: prop.position.brokerageAccount.allocation.forex !== undefined ? prop.position.brokerageAccount.allocation.forex : undefined,
            crypto: prop.position.brokerageAccount.allocation.crypto !== undefined ? prop.position.brokerageAccount.allocation.crypto : undefined,
            stocks: prop.position.brokerageAccount.allocation.stocks !== undefined ? prop.position.brokerageAccount.allocation.stocks : undefined,
            options: prop.position.brokerageAccount.allocation.options !== undefined ? prop.position.brokerageAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      fund: prop.position.brokerageAccount.fund ? 
        typeof prop.position.brokerageAccount.fund === 'object' && Object.keys(prop.position.brokerageAccount.fund).length === 1 && Object.keys(prop.position.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
            id: prop.position.brokerageAccount.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.position.brokerageAccount.fund.id !== undefined ? prop.position.brokerageAccount.fund.id : undefined,
            name: prop.position.brokerageAccount.fund.name !== undefined ? {
                equals: prop.position.brokerageAccount.fund.name 
               } : undefined,
            slug: prop.position.brokerageAccount.fund.slug !== undefined ? {
                equals: prop.position.brokerageAccount.fund.slug 
               } : undefined,
            organizationId: prop.position.brokerageAccount.fund.organizationId !== undefined ? {
                equals: prop.position.brokerageAccount.fund.organizationId 
               } : undefined,
          },
          create: {
            name: prop.position.brokerageAccount.fund.name !== undefined ? prop.position.brokerageAccount.fund.name : undefined,
            slug: prop.position.brokerageAccount.fund.slug !== undefined ? prop.position.brokerageAccount.fund.slug : undefined,
            description: prop.position.brokerageAccount.fund.description !== undefined ? prop.position.brokerageAccount.fund.description : undefined,
            status: prop.position.brokerageAccount.fund.status !== undefined ? prop.position.brokerageAccount.fund.status : undefined,
            tradingOverrides: prop.position.brokerageAccount.fund.tradingOverrides !== undefined ? prop.position.brokerageAccount.fund.tradingOverrides : undefined,
            llmOverrides: prop.position.brokerageAccount.fund.llmOverrides !== undefined ? prop.position.brokerageAccount.fund.llmOverrides : undefined,
            deletedAt: prop.position.brokerageAccount.fund.deletedAt !== undefined ? prop.position.brokerageAccount.fund.deletedAt : undefined,
          },
        }
      } : undefined,
      alerts: prop.position.brokerageAccount.alerts ? 
        Array.isArray(prop.position.brokerageAccount.alerts) && prop.position.brokerageAccount.alerts.length > 0 &&  prop.position.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.position.brokerageAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.position.brokerageAccount.alerts.map((item: any) => ({
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
      trades: prop.position.brokerageAccount.trades ? 
        Array.isArray(prop.position.brokerageAccount.trades) && prop.position.brokerageAccount.trades.length > 0 &&  prop.position.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.position.brokerageAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.position.brokerageAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: prop.position.brokerageAccount.optionsTradeExecutions ? 
        Array.isArray(prop.position.brokerageAccount.optionsTradeExecutions) && prop.position.brokerageAccount.optionsTradeExecutions.length > 0 &&  prop.position.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.position.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
      brokerageAccount: item.brokerageAccount ? 
      typeof item.brokerageAccount === 'object' && Object.keys(item.brokerageAccount).length === 1 && (Object.keys(item.brokerageAccount)[0] === 'id' || Object.keys(item.brokerageAccount)[0] === 'symbol')
? {
      connect: {
        id: item.brokerageAccount.id
      }
} : { upsert: {
          where: {
            id: item.brokerageAccount.id !== undefined ? {
                equals: item.brokerageAccount.id
              } : undefined,
            fundId: item.brokerageAccount.fundId !== undefined ? {
                equals: item.brokerageAccount.fundId
              } : undefined,
          },
          update: {
            id: item.brokerageAccount.id !== undefined ? {
                set: item.brokerageAccount.id
              } : undefined,
            provider: item.brokerageAccount.provider !== undefined ? {
                set: item.brokerageAccount.provider
              } : undefined,
            type: item.brokerageAccount.type !== undefined ? {
                set: item.brokerageAccount.type
              } : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? {
                set: item.brokerageAccount.apiKey
              } : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? {
                set: item.brokerageAccount.apiSecret
              } : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? {
                set: item.brokerageAccount.configuration
              } : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? {
                set: item.brokerageAccount.marketOpen
              } : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? {
                set: item.brokerageAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? {
                set: item.brokerageAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.brokerageAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? {
                set: item.brokerageAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? {
                set: item.brokerageAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? {
                set: item.brokerageAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? {
                set: item.brokerageAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.brokerageAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? {
                set: item.brokerageAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.brokerageAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.brokerageAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.brokerageAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.brokerageAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.brokerageAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.brokerageAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.brokerageAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.brokerageAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? {
                set: item.brokerageAccount.deletedAt
              } : undefined,
          },
          create: {
            provider: item.brokerageAccount.provider !== undefined ? item.brokerageAccount.provider : undefined,
            type: item.brokerageAccount.type !== undefined ? item.brokerageAccount.type : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? item.brokerageAccount.apiKey : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? item.brokerageAccount.apiSecret : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? item.brokerageAccount.configuration : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? item.brokerageAccount.marketOpen : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? item.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? item.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? item.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? item.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? item.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? item.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? item.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? item.brokerageAccount.deletedAt : undefined,
          },
        }
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
      brokerageAccount: item.brokerageAccount ? 
        typeof item.brokerageAccount === 'object' && Object.keys(item.brokerageAccount).length === 1 && Object.keys(item.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.brokerageAccount.id !== undefined ? item.brokerageAccount.id : undefined,
            fundId: item.brokerageAccount.fundId !== undefined ? {
                equals: item.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.brokerageAccount.provider !== undefined ? item.brokerageAccount.provider : undefined,
            type: item.brokerageAccount.type !== undefined ? item.brokerageAccount.type : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? item.brokerageAccount.apiKey : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? item.brokerageAccount.apiSecret : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? item.brokerageAccount.configuration : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? item.brokerageAccount.marketOpen : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? item.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? item.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? item.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? item.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? item.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? item.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? item.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? item.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
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
      brokerageAccount: item.brokerageAccount ? 
        typeof item.brokerageAccount === 'object' && Object.keys(item.brokerageAccount).length === 1 && Object.keys(item.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.brokerageAccount.id !== undefined ? item.brokerageAccount.id : undefined,
            fundId: item.brokerageAccount.fundId !== undefined ? {
                equals: item.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.brokerageAccount.provider !== undefined ? item.brokerageAccount.provider : undefined,
            type: item.brokerageAccount.type !== undefined ? item.brokerageAccount.type : undefined,
            apiKey: item.brokerageAccount.apiKey !== undefined ? item.brokerageAccount.apiKey : undefined,
            apiSecret: item.brokerageAccount.apiSecret !== undefined ? item.brokerageAccount.apiSecret : undefined,
            configuration: item.brokerageAccount.configuration !== undefined ? item.brokerageAccount.configuration : undefined,
            marketOpen: item.brokerageAccount.marketOpen !== undefined ? item.brokerageAccount.marketOpen : undefined,
            realTime: item.brokerageAccount.realTime !== undefined ? item.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.brokerageAccount.cryptoTradingEnabled !== undefined ? item.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.brokerageAccount.tradeAllocationPct !== undefined ? item.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.brokerageAccount.autoAllocation !== undefined ? item.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.brokerageAccount.minPercentageChange !== undefined ? item.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.brokerageAccount.volumeThreshold !== undefined ? item.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.brokerageAccount.portfolioTrailPercent !== undefined ? item.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.brokerageAccount.deletedAt !== undefined ? item.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
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
  brokerageAccount: prop.brokerageAccount ? 
  typeof prop.brokerageAccount === 'object' && Object.keys(prop.brokerageAccount).length === 1 && (Object.keys(prop.brokerageAccount)[0] === 'id' || Object.keys(prop.brokerageAccount)[0] === 'symbol')
? {
  connect: {
    id: prop.brokerageAccount.id
  }
} : { upsert: {
      where: {
        id: prop.brokerageAccount.id !== undefined ? {
            equals: prop.brokerageAccount.id
          } : undefined,
        fundId: prop.brokerageAccount.fundId !== undefined ? {
            equals: prop.brokerageAccount.fundId
          } : undefined,
      },
      update: {
        id: prop.brokerageAccount.id !== undefined ? {
            set: prop.brokerageAccount.id
          } : undefined,
        provider: prop.brokerageAccount.provider !== undefined ? {
            set: prop.brokerageAccount.provider
          } : undefined,
        type: prop.brokerageAccount.type !== undefined ? {
            set: prop.brokerageAccount.type
          } : undefined,
        apiKey: prop.brokerageAccount.apiKey !== undefined ? {
            set: prop.brokerageAccount.apiKey
          } : undefined,
        apiSecret: prop.brokerageAccount.apiSecret !== undefined ? {
            set: prop.brokerageAccount.apiSecret
          } : undefined,
        configuration: prop.brokerageAccount.configuration !== undefined ? {
            set: prop.brokerageAccount.configuration
          } : undefined,
        marketOpen: prop.brokerageAccount.marketOpen !== undefined ? {
            set: prop.brokerageAccount.marketOpen
          } : undefined,
        realTime: prop.brokerageAccount.realTime !== undefined ? {
            set: prop.brokerageAccount.realTime
          } : undefined,
        cryptoTradingEnabled: prop.brokerageAccount.cryptoTradingEnabled !== undefined ? {
            set: prop.brokerageAccount.cryptoTradingEnabled
          } : undefined,
        cryptoTradingPairs: prop.brokerageAccount.cryptoTradingPairs !== undefined ? {
            set: prop.brokerageAccount.cryptoTradingPairs
          } : undefined,
        cryptoTradeAllocationPct: prop.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
            set: prop.brokerageAccount.cryptoTradeAllocationPct
          } : undefined,
        tradeAllocationPct: prop.brokerageAccount.tradeAllocationPct !== undefined ? {
            set: prop.brokerageAccount.tradeAllocationPct
          } : undefined,
        autoAllocation: prop.brokerageAccount.autoAllocation !== undefined ? {
            set: prop.brokerageAccount.autoAllocation
          } : undefined,
        minPercentageChange: prop.brokerageAccount.minPercentageChange !== undefined ? {
            set: prop.brokerageAccount.minPercentageChange
          } : undefined,
        volumeThreshold: prop.brokerageAccount.volumeThreshold !== undefined ? {
            set: prop.brokerageAccount.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: prop.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
            set: prop.brokerageAccount.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: prop.brokerageAccount.portfolioTrailPercent !== undefined ? {
            set: prop.brokerageAccount.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: prop.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
            set: prop.brokerageAccount.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: prop.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
            set: prop.brokerageAccount.reducedPortfolioTrailPercent
          } : undefined,
        defaultTrailingStopPercentage100: prop.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
            set: prop.brokerageAccount.defaultTrailingStopPercentage100
          } : undefined,
        firstTrailReductionThreshold100: prop.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
            set: prop.brokerageAccount.firstTrailReductionThreshold100
          } : undefined,
        secondTrailReductionThreshold100: prop.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
            set: prop.brokerageAccount.secondTrailReductionThreshold100
          } : undefined,
        firstReducedTrailPercentage100: prop.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
            set: prop.brokerageAccount.firstReducedTrailPercentage100
          } : undefined,
        secondReducedTrailPercentage100: prop.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
            set: prop.brokerageAccount.secondReducedTrailPercentage100
          } : undefined,
        minimumPriceChangePercent100: prop.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
            set: prop.brokerageAccount.minimumPriceChangePercent100
          } : undefined,
        deletedAt: prop.brokerageAccount.deletedAt !== undefined ? {
            set: prop.brokerageAccount.deletedAt
          } : undefined,
    allocation: prop.brokerageAccount.allocation ? 
    typeof prop.brokerageAccount.allocation === 'object' && Object.keys(prop.brokerageAccount.allocation).length === 1 && (Object.keys(prop.brokerageAccount.allocation)[0] === 'id' || Object.keys(prop.brokerageAccount.allocation)[0] === 'symbol')
? {
    connect: {
      id: prop.brokerageAccount.allocation.id
    }
} : { upsert: {
        where: {
          id: prop.brokerageAccount.allocation.id !== undefined ? {
              equals: prop.brokerageAccount.allocation.id
            } : undefined,
          brokerageAccountId: prop.brokerageAccount.allocation.brokerageAccountId !== undefined ? {
              equals: prop.brokerageAccount.allocation.brokerageAccountId
            } : undefined,
        },
        update: {
          id: prop.brokerageAccount.allocation.id !== undefined ? {
              set: prop.brokerageAccount.allocation.id
            } : undefined,
          equities: prop.brokerageAccount.allocation.equities !== undefined ? {
              set: prop.brokerageAccount.allocation.equities
            } : undefined,
          optionsContracts: prop.brokerageAccount.allocation.optionsContracts !== undefined ? {
              set: prop.brokerageAccount.allocation.optionsContracts
            } : undefined,
          futures: prop.brokerageAccount.allocation.futures !== undefined ? {
              set: prop.brokerageAccount.allocation.futures
            } : undefined,
          etfs: prop.brokerageAccount.allocation.etfs !== undefined ? {
              set: prop.brokerageAccount.allocation.etfs
            } : undefined,
          forex: prop.brokerageAccount.allocation.forex !== undefined ? {
              set: prop.brokerageAccount.allocation.forex
            } : undefined,
          crypto: prop.brokerageAccount.allocation.crypto !== undefined ? {
              set: prop.brokerageAccount.allocation.crypto
            } : undefined,
          stocks: prop.brokerageAccount.allocation.stocks !== undefined ? {
              set: prop.brokerageAccount.allocation.stocks
            } : undefined,
          options: prop.brokerageAccount.allocation.options !== undefined ? {
              set: prop.brokerageAccount.allocation.options
            } : undefined,
        },
        create: {
          equities: prop.brokerageAccount.allocation.equities !== undefined ? prop.brokerageAccount.allocation.equities : undefined,
          optionsContracts: prop.brokerageAccount.allocation.optionsContracts !== undefined ? prop.brokerageAccount.allocation.optionsContracts : undefined,
          futures: prop.brokerageAccount.allocation.futures !== undefined ? prop.brokerageAccount.allocation.futures : undefined,
          etfs: prop.brokerageAccount.allocation.etfs !== undefined ? prop.brokerageAccount.allocation.etfs : undefined,
          forex: prop.brokerageAccount.allocation.forex !== undefined ? prop.brokerageAccount.allocation.forex : undefined,
          crypto: prop.brokerageAccount.allocation.crypto !== undefined ? prop.brokerageAccount.allocation.crypto : undefined,
          stocks: prop.brokerageAccount.allocation.stocks !== undefined ? prop.brokerageAccount.allocation.stocks : undefined,
          options: prop.brokerageAccount.allocation.options !== undefined ? prop.brokerageAccount.allocation.options : undefined,
        },
      }
    } : undefined,
    fund: prop.brokerageAccount.fund ? 
    typeof prop.brokerageAccount.fund === 'object' && Object.keys(prop.brokerageAccount.fund).length === 1 && (Object.keys(prop.brokerageAccount.fund)[0] === 'id' || Object.keys(prop.brokerageAccount.fund)[0] === 'symbol')
? {
    connect: {
      id: prop.brokerageAccount.fund.id
    }
} : { upsert: {
        where: {
          id: prop.brokerageAccount.fund.id !== undefined ? {
              equals: prop.brokerageAccount.fund.id
            } : undefined,
          name: prop.brokerageAccount.fund.name !== undefined ? {
              equals: prop.brokerageAccount.fund.name
            } : undefined,
          slug: prop.brokerageAccount.fund.slug !== undefined ? {
              equals: prop.brokerageAccount.fund.slug
            } : undefined,
          organizationId: prop.brokerageAccount.fund.organizationId !== undefined ? {
              equals: prop.brokerageAccount.fund.organizationId
            } : undefined,
        },
        update: {
          id: prop.brokerageAccount.fund.id !== undefined ? {
              set: prop.brokerageAccount.fund.id
            } : undefined,
          name: prop.brokerageAccount.fund.name !== undefined ? {
              set: prop.brokerageAccount.fund.name
            } : undefined,
          slug: prop.brokerageAccount.fund.slug !== undefined ? {
              set: prop.brokerageAccount.fund.slug
            } : undefined,
          description: prop.brokerageAccount.fund.description !== undefined ? {
              set: prop.brokerageAccount.fund.description
            } : undefined,
          status: prop.brokerageAccount.fund.status !== undefined ? {
              set: prop.brokerageAccount.fund.status
            } : undefined,
          tradingOverrides: prop.brokerageAccount.fund.tradingOverrides !== undefined ? {
              set: prop.brokerageAccount.fund.tradingOverrides
            } : undefined,
          llmOverrides: prop.brokerageAccount.fund.llmOverrides !== undefined ? {
              set: prop.brokerageAccount.fund.llmOverrides
            } : undefined,
          deletedAt: prop.brokerageAccount.fund.deletedAt !== undefined ? {
              set: prop.brokerageAccount.fund.deletedAt
            } : undefined,
      organization: prop.brokerageAccount.fund.organization ? 
      typeof prop.brokerageAccount.fund.organization === 'object' && Object.keys(prop.brokerageAccount.fund.organization).length === 1 && (Object.keys(prop.brokerageAccount.fund.organization)[0] === 'id' || Object.keys(prop.brokerageAccount.fund.organization)[0] === 'symbol')
? {
      connect: {
        id: prop.brokerageAccount.fund.organization.id
      }
} : { upsert: {
          where: {
            id: prop.brokerageAccount.fund.organization.id !== undefined ? {
                equals: prop.brokerageAccount.fund.organization.id
              } : undefined,
            name: prop.brokerageAccount.fund.organization.name !== undefined ? {
                equals: prop.brokerageAccount.fund.organization.name
              } : undefined,
            slug: prop.brokerageAccount.fund.organization.slug !== undefined ? {
                equals: prop.brokerageAccount.fund.organization.slug
              } : undefined,
          },
          update: {
            id: prop.brokerageAccount.fund.organization.id !== undefined ? {
                set: prop.brokerageAccount.fund.organization.id
              } : undefined,
            name: prop.brokerageAccount.fund.organization.name !== undefined ? {
                set: prop.brokerageAccount.fund.organization.name
              } : undefined,
            slug: prop.brokerageAccount.fund.organization.slug !== undefined ? {
                set: prop.brokerageAccount.fund.organization.slug
              } : undefined,
            logoUrl: prop.brokerageAccount.fund.organization.logoUrl !== undefined ? {
                set: prop.brokerageAccount.fund.organization.logoUrl
              } : undefined,
            website: prop.brokerageAccount.fund.organization.website !== undefined ? {
                set: prop.brokerageAccount.fund.organization.website
              } : undefined,
            businessType: prop.brokerageAccount.fund.organization.businessType !== undefined ? {
                set: prop.brokerageAccount.fund.organization.businessType
              } : undefined,
            jurisdiction: prop.brokerageAccount.fund.organization.jurisdiction !== undefined ? {
                set: prop.brokerageAccount.fund.organization.jurisdiction
              } : undefined,
            regulatoryStatus: prop.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? {
                set: prop.brokerageAccount.fund.organization.regulatoryStatus
              } : undefined,
            description: prop.brokerageAccount.fund.organization.description !== undefined ? {
                set: prop.brokerageAccount.fund.organization.description
              } : undefined,
            tradingDefaults: prop.brokerageAccount.fund.organization.tradingDefaults !== undefined ? {
                set: prop.brokerageAccount.fund.organization.tradingDefaults
              } : undefined,
            llmDefaults: prop.brokerageAccount.fund.organization.llmDefaults !== undefined ? {
                set: prop.brokerageAccount.fund.organization.llmDefaults
              } : undefined,
            deletedAt: prop.brokerageAccount.fund.organization.deletedAt !== undefined ? {
                set: prop.brokerageAccount.fund.organization.deletedAt
              } : undefined,
          },
          create: {
            name: prop.brokerageAccount.fund.organization.name !== undefined ? prop.brokerageAccount.fund.organization.name : undefined,
            slug: prop.brokerageAccount.fund.organization.slug !== undefined ? prop.brokerageAccount.fund.organization.slug : undefined,
            logoUrl: prop.brokerageAccount.fund.organization.logoUrl !== undefined ? prop.brokerageAccount.fund.organization.logoUrl : undefined,
            website: prop.brokerageAccount.fund.organization.website !== undefined ? prop.brokerageAccount.fund.organization.website : undefined,
            businessType: prop.brokerageAccount.fund.organization.businessType !== undefined ? prop.brokerageAccount.fund.organization.businessType : undefined,
            jurisdiction: prop.brokerageAccount.fund.organization.jurisdiction !== undefined ? prop.brokerageAccount.fund.organization.jurisdiction : undefined,
            regulatoryStatus: prop.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? prop.brokerageAccount.fund.organization.regulatoryStatus : undefined,
            description: prop.brokerageAccount.fund.organization.description !== undefined ? prop.brokerageAccount.fund.organization.description : undefined,
            tradingDefaults: prop.brokerageAccount.fund.organization.tradingDefaults !== undefined ? prop.brokerageAccount.fund.organization.tradingDefaults : undefined,
            llmDefaults: prop.brokerageAccount.fund.organization.llmDefaults !== undefined ? prop.brokerageAccount.fund.organization.llmDefaults : undefined,
            deletedAt: prop.brokerageAccount.fund.organization.deletedAt !== undefined ? prop.brokerageAccount.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      assignments: prop.brokerageAccount.fund.assignments ? 
      Array.isArray(prop.brokerageAccount.fund.assignments) && prop.brokerageAccount.fund.assignments.length > 0 && prop.brokerageAccount.fund.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.brokerageAccount.fund.assignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.brokerageAccount.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investments: prop.brokerageAccount.fund.investments ? 
      Array.isArray(prop.brokerageAccount.fund.investments) && prop.brokerageAccount.fund.investments.length > 0 && prop.brokerageAccount.fund.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.brokerageAccount.fund.investments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.brokerageAccount.fund.investments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            investorId: item.investorId !== undefined ? {
                equals: item.investorId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            units: item.units !== undefined ? {
                set: item.units
              } : undefined,
            investedAt: item.investedAt !== undefined ? {
                set: item.investedAt
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: prop.brokerageAccount.fund.name !== undefined ? prop.brokerageAccount.fund.name : undefined,
          slug: prop.brokerageAccount.fund.slug !== undefined ? prop.brokerageAccount.fund.slug : undefined,
          description: prop.brokerageAccount.fund.description !== undefined ? prop.brokerageAccount.fund.description : undefined,
          status: prop.brokerageAccount.fund.status !== undefined ? prop.brokerageAccount.fund.status : undefined,
          tradingOverrides: prop.brokerageAccount.fund.tradingOverrides !== undefined ? prop.brokerageAccount.fund.tradingOverrides : undefined,
          llmOverrides: prop.brokerageAccount.fund.llmOverrides !== undefined ? prop.brokerageAccount.fund.llmOverrides : undefined,
          deletedAt: prop.brokerageAccount.fund.deletedAt !== undefined ? prop.brokerageAccount.fund.deletedAt : undefined,
      organization: prop.brokerageAccount.fund.organization ? 
        typeof prop.brokerageAccount.fund.organization === 'object' && Object.keys(prop.brokerageAccount.fund.organization).length === 1 && Object.keys(prop.brokerageAccount.fund.organization)[0] === 'id'
    ? { connect: {
            id: prop.brokerageAccount.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.brokerageAccount.fund.organization.id !== undefined ? prop.brokerageAccount.fund.organization.id : undefined,
            slug: prop.brokerageAccount.fund.organization.slug !== undefined ? prop.brokerageAccount.fund.organization.slug : undefined,
            name: prop.brokerageAccount.fund.organization.name !== undefined ? {
                equals: prop.brokerageAccount.fund.organization.name 
               } : undefined,
          },
          create: {
            name: prop.brokerageAccount.fund.organization.name !== undefined ? prop.brokerageAccount.fund.organization.name : undefined,
            slug: prop.brokerageAccount.fund.organization.slug !== undefined ? prop.brokerageAccount.fund.organization.slug : undefined,
            logoUrl: prop.brokerageAccount.fund.organization.logoUrl !== undefined ? prop.brokerageAccount.fund.organization.logoUrl : undefined,
            website: prop.brokerageAccount.fund.organization.website !== undefined ? prop.brokerageAccount.fund.organization.website : undefined,
            businessType: prop.brokerageAccount.fund.organization.businessType !== undefined ? prop.brokerageAccount.fund.organization.businessType : undefined,
            jurisdiction: prop.brokerageAccount.fund.organization.jurisdiction !== undefined ? prop.brokerageAccount.fund.organization.jurisdiction : undefined,
            regulatoryStatus: prop.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? prop.brokerageAccount.fund.organization.regulatoryStatus : undefined,
            description: prop.brokerageAccount.fund.organization.description !== undefined ? prop.brokerageAccount.fund.organization.description : undefined,
            tradingDefaults: prop.brokerageAccount.fund.organization.tradingDefaults !== undefined ? prop.brokerageAccount.fund.organization.tradingDefaults : undefined,
            llmDefaults: prop.brokerageAccount.fund.organization.llmDefaults !== undefined ? prop.brokerageAccount.fund.organization.llmDefaults : undefined,
            deletedAt: prop.brokerageAccount.fund.organization.deletedAt !== undefined ? prop.brokerageAccount.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      assignments: prop.brokerageAccount.fund.assignments ? 
        Array.isArray(prop.brokerageAccount.fund.assignments) && prop.brokerageAccount.fund.assignments.length > 0 &&  prop.brokerageAccount.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.brokerageAccount.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.brokerageAccount.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investments: prop.brokerageAccount.fund.investments ? 
        Array.isArray(prop.brokerageAccount.fund.investments) && prop.brokerageAccount.fund.investments.length > 0 &&  prop.brokerageAccount.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.brokerageAccount.fund.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.brokerageAccount.fund.investments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            investorId: item.investorId !== undefined ? {
                equals: item.investorId 
               } : undefined,
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    alerts: prop.brokerageAccount.alerts ? 
    Array.isArray(prop.brokerageAccount.alerts) && prop.brokerageAccount.alerts.length > 0 && prop.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.brokerageAccount.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.brokerageAccount.alerts.map((item: any) => ({
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
    trades: prop.brokerageAccount.trades ? 
    Array.isArray(prop.brokerageAccount.trades) && prop.brokerageAccount.trades.length > 0 && prop.brokerageAccount.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.brokerageAccount.trades.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.brokerageAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          brokerageAccountId: item.brokerageAccountId !== undefined ? {
              equals: item.brokerageAccountId
            } : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          signal: item.signal !== undefined ? {
              set: item.signal
            } : undefined,
          strategy: item.strategy !== undefined ? {
              set: item.strategy
            } : undefined,
          analysis: item.analysis !== undefined ? {
              set: item.analysis
            } : undefined,
          summary: item.summary !== undefined ? {
              set: item.summary
            } : undefined,
          confidence: item.confidence !== undefined ? {
              set: item.confidence
            } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          deletedAt: item.deletedAt !== undefined ? {
              set: item.deletedAt
            } : undefined,
          symbol: item.symbol !== undefined ? {
              set: item.symbol
            } : undefined,
          entryPrice: item.entryPrice !== undefined ? {
              set: item.entryPrice
            } : undefined,
          exitPrice: item.exitPrice !== undefined ? {
              set: item.exitPrice
            } : undefined,
          entryQty: item.entryQty !== undefined ? {
              set: item.entryQty
            } : undefined,
          exitQty: item.exitQty !== undefined ? {
              set: item.exitQty
            } : undefined,
          entryValue: item.entryValue !== undefined ? {
              set: item.entryValue
            } : undefined,
          exitValue: item.exitValue !== undefined ? {
              set: item.exitValue
            } : undefined,
          entryTime: item.entryTime !== undefined ? {
              set: item.entryTime
            } : undefined,
          exitTime: item.exitTime !== undefined ? {
              set: item.exitTime
            } : undefined,
          pnlAmount: item.pnlAmount !== undefined ? {
              set: item.pnlAmount
            } : undefined,
          pnlPercent: item.pnlPercent !== undefined ? {
              set: item.pnlPercent
            } : undefined,
          durationMinutes: item.durationMinutes !== undefined ? {
              set: item.durationMinutes
            } : undefined,
          marketPhase: item.marketPhase !== undefined ? {
              set: item.marketPhase
            } : undefined,
          marketVolatility: item.marketVolatility !== undefined ? {
              set: item.marketVolatility
            } : undefined,
          sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? {
              set: item.sessionHorizonMinutes
            } : undefined,
          thresholdsJson: item.thresholdsJson !== undefined ? {
              set: item.thresholdsJson
            } : undefined,
      actions: item.actions ? 
      Array.isArray(item.actions) && item.actions.length > 0 && item.actions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.actions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
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
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            primary: item.primary !== undefined ? item.primary : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
          exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
          entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
          exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
          entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
          exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
          entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
          exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
          pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
          pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
          durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
          marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
          marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
          sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
          thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
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
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    optionsPositions: prop.brokerageAccount.optionsPositions ? 
    Array.isArray(prop.brokerageAccount.optionsPositions) && prop.brokerageAccount.optionsPositions.length > 0 && prop.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.brokerageAccount.optionsPositions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.brokerageAccount.optionsPositions.map((item: any) => ({
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
          },
        }
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
          },
        }
      } : undefined,
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
      }))
    } : undefined,
      },
      create: {
        provider: prop.brokerageAccount.provider !== undefined ? prop.brokerageAccount.provider : undefined,
        type: prop.brokerageAccount.type !== undefined ? prop.brokerageAccount.type : undefined,
        apiKey: prop.brokerageAccount.apiKey !== undefined ? prop.brokerageAccount.apiKey : undefined,
        apiSecret: prop.brokerageAccount.apiSecret !== undefined ? prop.brokerageAccount.apiSecret : undefined,
        configuration: prop.brokerageAccount.configuration !== undefined ? prop.brokerageAccount.configuration : undefined,
        marketOpen: prop.brokerageAccount.marketOpen !== undefined ? prop.brokerageAccount.marketOpen : undefined,
        realTime: prop.brokerageAccount.realTime !== undefined ? prop.brokerageAccount.realTime : undefined,
        cryptoTradingEnabled: prop.brokerageAccount.cryptoTradingEnabled !== undefined ? prop.brokerageAccount.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: prop.brokerageAccount.cryptoTradingPairs !== undefined ? {
            set: prop.brokerageAccount.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: prop.brokerageAccount.cryptoTradeAllocationPct !== undefined ? prop.brokerageAccount.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: prop.brokerageAccount.tradeAllocationPct !== undefined ? prop.brokerageAccount.tradeAllocationPct : undefined,
        autoAllocation: prop.brokerageAccount.autoAllocation !== undefined ? prop.brokerageAccount.autoAllocation : undefined,
        minPercentageChange: prop.brokerageAccount.minPercentageChange !== undefined ? prop.brokerageAccount.minPercentageChange : undefined,
        volumeThreshold: prop.brokerageAccount.volumeThreshold !== undefined ? prop.brokerageAccount.volumeThreshold : undefined,
        enablePortfolioTrailingStop: prop.brokerageAccount.enablePortfolioTrailingStop !== undefined ? prop.brokerageAccount.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: prop.brokerageAccount.portfolioTrailPercent !== undefined ? prop.brokerageAccount.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: prop.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? prop.brokerageAccount.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: prop.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? prop.brokerageAccount.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: prop.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? prop.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: prop.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? prop.brokerageAccount.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: prop.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? prop.brokerageAccount.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: prop.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? prop.brokerageAccount.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: prop.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? prop.brokerageAccount.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: prop.brokerageAccount.minimumPriceChangePercent100 !== undefined ? prop.brokerageAccount.minimumPriceChangePercent100 : undefined,
        deletedAt: prop.brokerageAccount.deletedAt !== undefined ? prop.brokerageAccount.deletedAt : undefined,
    allocation: prop.brokerageAccount.allocation ? 
      typeof prop.brokerageAccount.allocation === 'object' && Object.keys(prop.brokerageAccount.allocation).length === 1 && Object.keys(prop.brokerageAccount.allocation)[0] === 'id'
    ? { connect: {
          id: prop.brokerageAccount.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.brokerageAccount.allocation.id !== undefined ? prop.brokerageAccount.allocation.id : undefined,
          brokerageAccountId: prop.brokerageAccount.allocation.brokerageAccountId !== undefined ? prop.brokerageAccount.allocation.brokerageAccountId : undefined,
        },
        create: {
          equities: prop.brokerageAccount.allocation.equities !== undefined ? prop.brokerageAccount.allocation.equities : undefined,
          optionsContracts: prop.brokerageAccount.allocation.optionsContracts !== undefined ? prop.brokerageAccount.allocation.optionsContracts : undefined,
          futures: prop.brokerageAccount.allocation.futures !== undefined ? prop.brokerageAccount.allocation.futures : undefined,
          etfs: prop.brokerageAccount.allocation.etfs !== undefined ? prop.brokerageAccount.allocation.etfs : undefined,
          forex: prop.brokerageAccount.allocation.forex !== undefined ? prop.brokerageAccount.allocation.forex : undefined,
          crypto: prop.brokerageAccount.allocation.crypto !== undefined ? prop.brokerageAccount.allocation.crypto : undefined,
          stocks: prop.brokerageAccount.allocation.stocks !== undefined ? prop.brokerageAccount.allocation.stocks : undefined,
          options: prop.brokerageAccount.allocation.options !== undefined ? prop.brokerageAccount.allocation.options : undefined,
        },
      }
    } : undefined,
    fund: prop.brokerageAccount.fund ? 
      typeof prop.brokerageAccount.fund === 'object' && Object.keys(prop.brokerageAccount.fund).length === 1 && Object.keys(prop.brokerageAccount.fund)[0] === 'id'
    ? { connect: {
          id: prop.brokerageAccount.fund.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.brokerageAccount.fund.id !== undefined ? prop.brokerageAccount.fund.id : undefined,
          name: prop.brokerageAccount.fund.name !== undefined ? {
              equals: prop.brokerageAccount.fund.name 
             } : undefined,
          slug: prop.brokerageAccount.fund.slug !== undefined ? {
              equals: prop.brokerageAccount.fund.slug 
             } : undefined,
          organizationId: prop.brokerageAccount.fund.organizationId !== undefined ? {
              equals: prop.brokerageAccount.fund.organizationId 
             } : undefined,
        },
        create: {
          name: prop.brokerageAccount.fund.name !== undefined ? prop.brokerageAccount.fund.name : undefined,
          slug: prop.brokerageAccount.fund.slug !== undefined ? prop.brokerageAccount.fund.slug : undefined,
          description: prop.brokerageAccount.fund.description !== undefined ? prop.brokerageAccount.fund.description : undefined,
          status: prop.brokerageAccount.fund.status !== undefined ? prop.brokerageAccount.fund.status : undefined,
          tradingOverrides: prop.brokerageAccount.fund.tradingOverrides !== undefined ? prop.brokerageAccount.fund.tradingOverrides : undefined,
          llmOverrides: prop.brokerageAccount.fund.llmOverrides !== undefined ? prop.brokerageAccount.fund.llmOverrides : undefined,
          deletedAt: prop.brokerageAccount.fund.deletedAt !== undefined ? prop.brokerageAccount.fund.deletedAt : undefined,
      organization: prop.brokerageAccount.fund.organization ? 
        typeof prop.brokerageAccount.fund.organization === 'object' && Object.keys(prop.brokerageAccount.fund.organization).length === 1 && Object.keys(prop.brokerageAccount.fund.organization)[0] === 'id'
    ? { connect: {
            id: prop.brokerageAccount.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.brokerageAccount.fund.organization.id !== undefined ? prop.brokerageAccount.fund.organization.id : undefined,
            slug: prop.brokerageAccount.fund.organization.slug !== undefined ? prop.brokerageAccount.fund.organization.slug : undefined,
            name: prop.brokerageAccount.fund.organization.name !== undefined ? {
                equals: prop.brokerageAccount.fund.organization.name 
               } : undefined,
          },
          create: {
            name: prop.brokerageAccount.fund.organization.name !== undefined ? prop.brokerageAccount.fund.organization.name : undefined,
            slug: prop.brokerageAccount.fund.organization.slug !== undefined ? prop.brokerageAccount.fund.organization.slug : undefined,
            logoUrl: prop.brokerageAccount.fund.organization.logoUrl !== undefined ? prop.brokerageAccount.fund.organization.logoUrl : undefined,
            website: prop.brokerageAccount.fund.organization.website !== undefined ? prop.brokerageAccount.fund.organization.website : undefined,
            businessType: prop.brokerageAccount.fund.organization.businessType !== undefined ? prop.brokerageAccount.fund.organization.businessType : undefined,
            jurisdiction: prop.brokerageAccount.fund.organization.jurisdiction !== undefined ? prop.brokerageAccount.fund.organization.jurisdiction : undefined,
            regulatoryStatus: prop.brokerageAccount.fund.organization.regulatoryStatus !== undefined ? prop.brokerageAccount.fund.organization.regulatoryStatus : undefined,
            description: prop.brokerageAccount.fund.organization.description !== undefined ? prop.brokerageAccount.fund.organization.description : undefined,
            tradingDefaults: prop.brokerageAccount.fund.organization.tradingDefaults !== undefined ? prop.brokerageAccount.fund.organization.tradingDefaults : undefined,
            llmDefaults: prop.brokerageAccount.fund.organization.llmDefaults !== undefined ? prop.brokerageAccount.fund.organization.llmDefaults : undefined,
            deletedAt: prop.brokerageAccount.fund.organization.deletedAt !== undefined ? prop.brokerageAccount.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      assignments: prop.brokerageAccount.fund.assignments ? 
        Array.isArray(prop.brokerageAccount.fund.assignments) && prop.brokerageAccount.fund.assignments.length > 0 &&  prop.brokerageAccount.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.brokerageAccount.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.brokerageAccount.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investments: prop.brokerageAccount.fund.investments ? 
        Array.isArray(prop.brokerageAccount.fund.investments) && prop.brokerageAccount.fund.investments.length > 0 &&  prop.brokerageAccount.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.brokerageAccount.fund.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.brokerageAccount.fund.investments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            investorId: item.investorId !== undefined ? {
                equals: item.investorId 
               } : undefined,
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    alerts: prop.brokerageAccount.alerts ? 
      Array.isArray(prop.brokerageAccount.alerts) && prop.brokerageAccount.alerts.length > 0 &&  prop.brokerageAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.brokerageAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.brokerageAccount.alerts.map((item: any) => ({
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
    trades: prop.brokerageAccount.trades ? 
      Array.isArray(prop.brokerageAccount.trades) && prop.brokerageAccount.trades.length > 0 &&  prop.brokerageAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.brokerageAccount.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.brokerageAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          brokerageAccountId: item.brokerageAccountId !== undefined ? {
              equals: item.brokerageAccountId 
             } : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
        },
        create: {
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
          exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
          entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
          exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
          entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
          exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
          entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
          exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
          pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
          pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
          durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
          marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
          marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
          sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
          thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
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
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    optionsPositions: prop.brokerageAccount.optionsPositions ? 
      Array.isArray(prop.brokerageAccount.optionsPositions) && prop.brokerageAccount.optionsPositions.length > 0 &&  prop.brokerageAccount.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.brokerageAccount.optionsPositions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.brokerageAccount.optionsPositions.map((item: any) => ({
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
          },
        }
      } : undefined,
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Delete a single OptionsTradeExecution record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted OptionsTradeExecution or null.
   */
  async delete(props: OptionsTradeExecutionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsTradeExecutionType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Retrieve a single OptionsTradeExecution record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved OptionsTradeExecution or null.
   */
  async get(props: OptionsTradeExecutionType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<OptionsTradeExecutionType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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
  brokerageAccountId: props.brokerageAccountId !== undefined ? {
    equals: props.brokerageAccountId 
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Retrieve all OptionsTradeExecutions records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of OptionsTradeExecution records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OptionsTradeExecutionType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Find multiple OptionsTradeExecution records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found OptionsTradeExecution records or null.
   */
  async findMany(props: OptionsTradeExecutionType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<OptionsTradeExecutionType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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
  brokerageAccountId: props.brokerageAccountId !== undefined ? {
    equals: props.brokerageAccountId 
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
