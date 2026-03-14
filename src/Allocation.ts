
  
import { Allocation as AllocationType } from './generated/typegraphql-prisma/models/Allocation';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
import { assertValidAllocation } from './validators/allocation-validator';
  
  /**
   * CRUD operations for the Allocation model.
   */

  const selectionSet = `
    
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
        positionId
        contractId
        contract {
id
        }
        brokerageAccountId
        brokerageAccount {
id
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
    optionsTradeExecutions {
      id
      positionId
      position {
        id
        brokerageAccountId
        brokerageAccount {
id
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
        }
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
  createdAt
  updatedAt

  `;

  export const Allocation = {

    /**
     * Create a new Allocation record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Allocation or null.
     */

    /**
     * Create a new Allocation record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created Allocation or null.
     */
    async create(props: AllocationType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AllocationType> {
      // Validate allocation percentages before creating
      assertValidAllocation({
        equities: props.equities,
        optionsContracts: props.optionsContracts,
        futures: props.futures,
        etfs: props.etfs,
        forex: props.forex,
        crypto: props.crypto
      });

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

          const CREATE_ONE_ALLOCATION = gql`
              mutation createOneAllocation($data: AllocationCreateInput!) {
                createOneAllocation(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                equities: props.equities !== undefined ? props.equities : undefined,
  optionsContracts: props.optionsContracts !== undefined ? props.optionsContracts : undefined,
  futures: props.futures !== undefined ? props.futures : undefined,
  etfs: props.etfs !== undefined ? props.etfs : undefined,
  forex: props.forex !== undefined ? props.forex : undefined,
  crypto: props.crypto !== undefined ? props.crypto : undefined,
  stocks: props.stocks !== undefined ? props.stocks : undefined,
  options: props.options !== undefined ? props.options : undefined,
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
    optionsTradeExecutions: props.brokerageAccount.optionsTradeExecutions ? 
      Array.isArray(props.brokerageAccount.optionsTradeExecutions) && props.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            brokerageAccountId: item.position.brokerageAccountId !== undefined ? {
                equals: item.position.brokerageAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
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
            mutation: CREATE_ONE_ALLOCATION,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneAllocation) {
            return response.data.createOneAllocation;
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
   * Create multiple Allocation records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Allocation objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AllocationType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_ALLOCATION = gql`
          mutation createManyAllocation($data: [AllocationCreateManyInput!]!) {
            createManyAllocation(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      equities: prop.equities !== undefined ? prop.equities : undefined,
  optionsContracts: prop.optionsContracts !== undefined ? prop.optionsContracts : undefined,
  futures: prop.futures !== undefined ? prop.futures : undefined,
  etfs: prop.etfs !== undefined ? prop.etfs : undefined,
  forex: prop.forex !== undefined ? prop.forex : undefined,
  crypto: prop.crypto !== undefined ? prop.crypto : undefined,
  stocks: prop.stocks !== undefined ? prop.stocks : undefined,
  options: prop.options !== undefined ? prop.options : undefined,
  brokerageAccountId: prop.brokerageAccountId !== undefined ? prop.brokerageAccountId : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_ALLOCATION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyAllocation) {
          return response.data.createManyAllocation;
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
   * Update a single Allocation record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Allocation or null.
   */
  async update(props: AllocationType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AllocationType> {
    // Validate allocation percentages before updating
    assertValidAllocation({
      equities: props.equities,
      optionsContracts: props.optionsContracts,
      futures: props.futures,
      etfs: props.etfs,
      forex: props.forex,
      crypto: props.crypto
    });

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

        const UPDATE_ONE_ALLOCATION = gql`
          mutation updateOneAllocation($data: AllocationUpdateInput!, $where: AllocationWhereUniqueInput!) {
            updateOneAllocation(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  brokerageAccountId: props.brokerageAccountId !== undefined ? props.brokerageAccountId : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  equities: props.equities !== undefined ? {
            set: props.equities 
           } : undefined,
  optionsContracts: props.optionsContracts !== undefined ? {
            set: props.optionsContracts 
           } : undefined,
  futures: props.futures !== undefined ? {
            set: props.futures 
           } : undefined,
  etfs: props.etfs !== undefined ? {
            set: props.etfs 
           } : undefined,
  forex: props.forex !== undefined ? {
            set: props.forex 
           } : undefined,
  crypto: props.crypto !== undefined ? {
            set: props.crypto 
           } : undefined,
  stocks: props.stocks !== undefined ? {
            set: props.stocks 
           } : undefined,
  options: props.options !== undefined ? {
            set: props.options 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
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
    optionsTradeExecutions: props.brokerageAccount.optionsTradeExecutions ? 
    Array.isArray(props.brokerageAccount.optionsTradeExecutions) && props.brokerageAccount.optionsTradeExecutions.length > 0 && props.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
            brokerageAccountId: item.position.brokerageAccountId !== undefined ? {
                equals: item.position.brokerageAccountId
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            brokerageAccountId: item.position.brokerageAccountId !== undefined ? {
                equals: item.position.brokerageAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
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
    optionsTradeExecutions: props.brokerageAccount.optionsTradeExecutions ? 
      Array.isArray(props.brokerageAccount.optionsTradeExecutions) && props.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            brokerageAccountId: item.position.brokerageAccountId !== undefined ? {
                equals: item.position.brokerageAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
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
          mutation: UPDATE_ONE_ALLOCATION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneAllocation) {
          return response.data.updateOneAllocation;
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
   * Upsert a single Allocation record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Allocation or null.
   */
  async upsert(props: AllocationType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AllocationType> {
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

        const UPSERT_ONE_ALLOCATION = gql`
          mutation upsertOneAllocation($where: AllocationWhereUniqueInput!, $create: AllocationCreateInput!, $update: AllocationUpdateInput!) {
            upsertOneAllocation(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  brokerageAccountId: props.brokerageAccountId !== undefined ? props.brokerageAccountId : undefined,
      },
          create: {
        equities: props.equities !== undefined ? props.equities : undefined,
  optionsContracts: props.optionsContracts !== undefined ? props.optionsContracts : undefined,
  futures: props.futures !== undefined ? props.futures : undefined,
  etfs: props.etfs !== undefined ? props.etfs : undefined,
  forex: props.forex !== undefined ? props.forex : undefined,
  crypto: props.crypto !== undefined ? props.crypto : undefined,
  stocks: props.stocks !== undefined ? props.stocks : undefined,
  options: props.options !== undefined ? props.options : undefined,
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
    optionsTradeExecutions: props.brokerageAccount.optionsTradeExecutions ? 
      Array.isArray(props.brokerageAccount.optionsTradeExecutions) && props.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            brokerageAccountId: item.position.brokerageAccountId !== undefined ? {
                equals: item.position.brokerageAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
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
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
      },
          update: {
      equities: props.equities !== undefined ? {
            set: props.equities 
           } : undefined,
  optionsContracts: props.optionsContracts !== undefined ? {
            set: props.optionsContracts 
           } : undefined,
  futures: props.futures !== undefined ? {
            set: props.futures 
           } : undefined,
  etfs: props.etfs !== undefined ? {
            set: props.etfs 
           } : undefined,
  forex: props.forex !== undefined ? {
            set: props.forex 
           } : undefined,
  crypto: props.crypto !== undefined ? {
            set: props.crypto 
           } : undefined,
  stocks: props.stocks !== undefined ? {
            set: props.stocks 
           } : undefined,
  options: props.options !== undefined ? {
            set: props.options 
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
    optionsTradeExecutions: props.brokerageAccount.optionsTradeExecutions ? 
    Array.isArray(props.brokerageAccount.optionsTradeExecutions) && props.brokerageAccount.optionsTradeExecutions.length > 0 && props.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
            brokerageAccountId: item.position.brokerageAccountId !== undefined ? {
                equals: item.position.brokerageAccountId
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            brokerageAccountId: item.position.brokerageAccountId !== undefined ? {
                equals: item.position.brokerageAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
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
    optionsTradeExecutions: props.brokerageAccount.optionsTradeExecutions ? 
      Array.isArray(props.brokerageAccount.optionsTradeExecutions) && props.brokerageAccount.optionsTradeExecutions.length > 0 &&  props.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            brokerageAccountId: item.position.brokerageAccountId !== undefined ? {
                equals: item.position.brokerageAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
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
          mutation: UPSERT_ONE_ALLOCATION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneAllocation) {
          return response.data.upsertOneAllocation;
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
   * Update multiple Allocation records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Allocation objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: AllocationType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_ALLOCATION = gql`
          mutation updateManyAllocation($data: [AllocationCreateManyInput!]!) {
            updateManyAllocation(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  brokerageAccountId: prop.brokerageAccountId !== undefined ? prop.brokerageAccountId : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  equities: prop.equities !== undefined ? {
            set: prop.equities 
           } : undefined,
  optionsContracts: prop.optionsContracts !== undefined ? {
            set: prop.optionsContracts 
           } : undefined,
  futures: prop.futures !== undefined ? {
            set: prop.futures 
           } : undefined,
  etfs: prop.etfs !== undefined ? {
            set: prop.etfs 
           } : undefined,
  forex: prop.forex !== undefined ? {
            set: prop.forex 
           } : undefined,
  crypto: prop.crypto !== undefined ? {
            set: prop.crypto 
           } : undefined,
  stocks: prop.stocks !== undefined ? {
            set: prop.stocks 
           } : undefined,
  options: prop.options !== undefined ? {
            set: prop.options 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
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
    optionsTradeExecutions: prop.brokerageAccount.optionsTradeExecutions ? 
    Array.isArray(prop.brokerageAccount.optionsTradeExecutions) && prop.brokerageAccount.optionsTradeExecutions.length > 0 && prop.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
            brokerageAccountId: item.position.brokerageAccountId !== undefined ? {
                equals: item.position.brokerageAccountId
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            brokerageAccountId: item.position.brokerageAccountId !== undefined ? {
                equals: item.position.brokerageAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
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
    optionsTradeExecutions: prop.brokerageAccount.optionsTradeExecutions ? 
      Array.isArray(prop.brokerageAccount.optionsTradeExecutions) && prop.brokerageAccount.optionsTradeExecutions.length > 0 &&  prop.brokerageAccount.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.brokerageAccount.optionsTradeExecutions.map((item: any) => ({
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
      position: item.position ? 
        typeof item.position === 'object' && Object.keys(item.position).length === 1 && Object.keys(item.position)[0] === 'id'
    ? { connect: {
            id: item.position.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.id !== undefined ? item.position.id : undefined,
            brokerageAccountId: item.position.brokerageAccountId !== undefined ? {
                equals: item.position.brokerageAccountId 
               } : undefined,
            contractId: item.position.contractId !== undefined ? {
                equals: item.position.contractId 
               } : undefined,
          },
          create: {
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
          mutation: UPDATE_MANY_ALLOCATION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyAllocation) {
          return response.data.updateManyAllocation;
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
   * Delete a single Allocation record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Allocation or null.
   */
  async delete(props: AllocationType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AllocationType> {
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

        const DELETE_ONE_ALLOCATION = gql`
          mutation deleteOneAllocation($where: AllocationWhereUniqueInput!) {
            deleteOneAllocation(where: $where) {
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
          mutation: DELETE_ONE_ALLOCATION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneAllocation) {
          return response.data.deleteOneAllocation;
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
   * Retrieve a single Allocation record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved Allocation or null.
   */
  async get(props: AllocationType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<AllocationType | null> {
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

        const GET_ALLOCATION = gql`
          query getAllocation($where: AllocationWhereUniqueInput!) {
            getAllocation(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  brokerageAccountId: props.brokerageAccountId !== undefined ? props.brokerageAccountId : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_ALLOCATION,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getAllocation ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Allocation found') {
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
   * Retrieve all Allocations records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Allocation records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AllocationType[] | null> {
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

        const GET_ALL_ALLOCATION = gql`
          query getAllAllocation {
            allocations {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_ALLOCATION,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.allocations ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Allocation found') {
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
   * Find multiple Allocation records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found Allocation records or null.
   */
  async findMany(props: AllocationType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<AllocationType[] | null> {
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

        const FIND_MANY_ALLOCATION = gql`
          query findManyAllocation($where: AllocationWhereInput!) {
            allocations(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  brokerageAccountId: props.brokerageAccountId !== undefined ? {
    equals: props.brokerageAccountId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_ALLOCATION,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.allocations) {
          return response.data.allocations;
        } else {
          return [] as AllocationType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Allocation found') {
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
