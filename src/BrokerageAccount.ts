
  
import { BrokerageAccount as BrokerageAccountType } from './generated/typegraphql-prisma/models/BrokerageAccount';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the BrokerageAccount model.
   */

  const selectionSet = `
    
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
        organizationId
        userId
        user {
id
        }
        role
        permissions
        createdAt
        updatedAt
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
        name
        email
        emailVerified
        image
        createdAt
        updatedAt
        deletedAt
        role
        bio
        jobTitle
        customer {
id
        }
        customerId
        accounts {
id
        }
        sessions {
id
        }
        authenticators {
id
        }
        plan
        orgMemberships {
id
        }
        investorProfile {
id
        }
        openaiAPIKey
        openaiModel
        passwordHash
        avatarUrl
        onboardingComplete
        signupCategory
        linkedProviders {
id
        }
        accountLinkingRequests {
id
        }
        reviewedWaitlistEntries {
id
        }
        dashboardLayouts {
id
        }
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
        name
        email
        type
        kycStatus
        walletAddress
        userId
        user {
id
        }
        createdAt
        updatedAt
        deletedAt
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
        }
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

  export const BrokerageAccount = {

    /**
     * Create a new BrokerageAccount record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created BrokerageAccount or null.
     */

    /**
     * Create a new BrokerageAccount record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created BrokerageAccount or null.
     */
    async create(props: BrokerageAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<BrokerageAccountType> {
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

          const CREATE_ONE_BROKERAGEACCOUNT = gql`
              mutation createOneBrokerageAccount($data: BrokerageAccountCreateInput!) {
                createOneBrokerageAccount(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                provider: props.provider !== undefined ? props.provider : undefined,
  type: props.type !== undefined ? props.type : undefined,
  apiKey: props.apiKey !== undefined ? props.apiKey : undefined,
  apiSecret: props.apiSecret !== undefined ? props.apiSecret : undefined,
  configuration: props.configuration !== undefined ? props.configuration : undefined,
  marketOpen: props.marketOpen !== undefined ? props.marketOpen : undefined,
  realTime: props.realTime !== undefined ? props.realTime : undefined,
  cryptoTradingEnabled: props.cryptoTradingEnabled !== undefined ? props.cryptoTradingEnabled : undefined,
  cryptoTradingPairs: props.cryptoTradingPairs !== undefined ? {
    set: props.cryptoTradingPairs 
  } : undefined,
  cryptoTradeAllocationPct: props.cryptoTradeAllocationPct !== undefined ? props.cryptoTradeAllocationPct : undefined,
  tradeAllocationPct: props.tradeAllocationPct !== undefined ? props.tradeAllocationPct : undefined,
  autoAllocation: props.autoAllocation !== undefined ? props.autoAllocation : undefined,
  minPercentageChange: props.minPercentageChange !== undefined ? props.minPercentageChange : undefined,
  volumeThreshold: props.volumeThreshold !== undefined ? props.volumeThreshold : undefined,
  enablePortfolioTrailingStop: props.enablePortfolioTrailingStop !== undefined ? props.enablePortfolioTrailingStop : undefined,
  portfolioTrailPercent: props.portfolioTrailPercent !== undefined ? props.portfolioTrailPercent : undefined,
  portfolioProfitThresholdPercent: props.portfolioProfitThresholdPercent !== undefined ? props.portfolioProfitThresholdPercent : undefined,
  reducedPortfolioTrailPercent: props.reducedPortfolioTrailPercent !== undefined ? props.reducedPortfolioTrailPercent : undefined,
  defaultTrailingStopPercentage100: props.defaultTrailingStopPercentage100 !== undefined ? props.defaultTrailingStopPercentage100 : undefined,
  firstTrailReductionThreshold100: props.firstTrailReductionThreshold100 !== undefined ? props.firstTrailReductionThreshold100 : undefined,
  secondTrailReductionThreshold100: props.secondTrailReductionThreshold100 !== undefined ? props.secondTrailReductionThreshold100 : undefined,
  firstReducedTrailPercentage100: props.firstReducedTrailPercentage100 !== undefined ? props.firstReducedTrailPercentage100 : undefined,
  secondReducedTrailPercentage100: props.secondReducedTrailPercentage100 !== undefined ? props.secondReducedTrailPercentage100 : undefined,
  minimumPriceChangePercent100: props.minimumPriceChangePercent100 !== undefined ? props.minimumPriceChangePercent100 : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  allocation: props.allocation ? 
    typeof props.allocation === 'object' && Object.keys(props.allocation).length === 1 && Object.keys(props.allocation)[0] === 'id'
    ? { connect: {
        id: props.allocation.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.allocation.id !== undefined ? props.allocation.id : undefined,
        brokerageAccountId: props.allocation.brokerageAccountId !== undefined ? props.allocation.brokerageAccountId : undefined,
      },
      create: {
        equities: props.allocation.equities !== undefined ? props.allocation.equities : undefined,
        optionsContracts: props.allocation.optionsContracts !== undefined ? props.allocation.optionsContracts : undefined,
        futures: props.allocation.futures !== undefined ? props.allocation.futures : undefined,
        etfs: props.allocation.etfs !== undefined ? props.allocation.etfs : undefined,
        forex: props.allocation.forex !== undefined ? props.allocation.forex : undefined,
        crypto: props.allocation.crypto !== undefined ? props.allocation.crypto : undefined,
        stocks: props.allocation.stocks !== undefined ? props.allocation.stocks : undefined,
        options: props.allocation.options !== undefined ? props.allocation.options : undefined,
      },
    }
  } : undefined,
  fund: props.fund ? 
    typeof props.fund === 'object' && Object.keys(props.fund).length === 1 && Object.keys(props.fund)[0] === 'id'
    ? { connect: {
        id: props.fund.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.fund.id !== undefined ? props.fund.id : undefined,
        name: props.fund.name !== undefined ? {
            equals: props.fund.name 
           } : undefined,
        slug: props.fund.slug !== undefined ? {
            equals: props.fund.slug 
           } : undefined,
        organizationId: props.fund.organizationId !== undefined ? {
            equals: props.fund.organizationId 
           } : undefined,
      },
      create: {
        name: props.fund.name !== undefined ? props.fund.name : undefined,
        slug: props.fund.slug !== undefined ? props.fund.slug : undefined,
        description: props.fund.description !== undefined ? props.fund.description : undefined,
        status: props.fund.status !== undefined ? props.fund.status : undefined,
        tradingOverrides: props.fund.tradingOverrides !== undefined ? props.fund.tradingOverrides : undefined,
        llmOverrides: props.fund.llmOverrides !== undefined ? props.fund.llmOverrides : undefined,
        deletedAt: props.fund.deletedAt !== undefined ? props.fund.deletedAt : undefined,
    organization: props.fund.organization ? 
      typeof props.fund.organization === 'object' && Object.keys(props.fund.organization).length === 1 && Object.keys(props.fund.organization)[0] === 'id'
    ? { connect: {
          id: props.fund.organization.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.fund.organization.id !== undefined ? props.fund.organization.id : undefined,
          slug: props.fund.organization.slug !== undefined ? props.fund.organization.slug : undefined,
          name: props.fund.organization.name !== undefined ? {
              equals: props.fund.organization.name 
             } : undefined,
        },
        create: {
          name: props.fund.organization.name !== undefined ? props.fund.organization.name : undefined,
          slug: props.fund.organization.slug !== undefined ? props.fund.organization.slug : undefined,
          logoUrl: props.fund.organization.logoUrl !== undefined ? props.fund.organization.logoUrl : undefined,
          website: props.fund.organization.website !== undefined ? props.fund.organization.website : undefined,
          businessType: props.fund.organization.businessType !== undefined ? props.fund.organization.businessType : undefined,
          jurisdiction: props.fund.organization.jurisdiction !== undefined ? props.fund.organization.jurisdiction : undefined,
          regulatoryStatus: props.fund.organization.regulatoryStatus !== undefined ? props.fund.organization.regulatoryStatus : undefined,
          description: props.fund.organization.description !== undefined ? props.fund.organization.description : undefined,
          tradingDefaults: props.fund.organization.tradingDefaults !== undefined ? props.fund.organization.tradingDefaults : undefined,
          llmDefaults: props.fund.organization.llmDefaults !== undefined ? props.fund.organization.llmDefaults : undefined,
          deletedAt: props.fund.organization.deletedAt !== undefined ? props.fund.organization.deletedAt : undefined,
      members: props.fund.organization.members ? 
        Array.isArray(props.fund.organization.members) && props.fund.organization.members.length > 0 &&  props.fund.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.fund.organization.members.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.fund.organization.members.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            organizationId: item.organizationId !== undefined ? {
                equals: item.organizationId 
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
        },
      }
    } : undefined,
    assignments: props.fund.assignments ? 
      Array.isArray(props.fund.assignments) && props.fund.assignments.length > 0 &&  props.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.assignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.assignments.map((item: any) => ({
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
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.id !== undefined ? item.user.id : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            name: item.user.name !== undefined ? {
                equals: item.user.name 
               } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: props.fund.investments ? 
      Array.isArray(props.fund.investments) && props.fund.investments.length > 0 &&  props.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.investments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.investments.map((item: any) => ({
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
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  alerts: props.alerts ? 
    Array.isArray(props.alerts) && props.alerts.length > 0 &&  props.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.alerts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.alerts.map((item: any) => ({
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
  trades: props.trades ? 
    Array.isArray(props.trades) && props.trades.length > 0 &&  props.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.trades.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.trades.map((item: any) => ({
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
        connect:      item.actions.map((item: any) => ({
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
  optionsPositions: props.optionsPositions ? 
    Array.isArray(props.optionsPositions) && props.optionsPositions.length > 0 &&  props.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.optionsPositions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.optionsPositions.map((item: any) => ({
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
      executions: item.contract.executions ? 
        Array.isArray(item.contract.executions) && item.contract.executions.length > 0 &&  item.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.executions.map((item: any) => ({
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
    executions: item.executions ? 
      Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.executions.map((item: any) => ({
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
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
  optionsTradeExecutions: props.optionsTradeExecutions ? 
    Array.isArray(props.optionsTradeExecutions) && props.optionsTradeExecutions.length > 0 &&  props.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.optionsTradeExecutions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.optionsTradeExecutions.map((item: any) => ({
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
      brokerageAccount: item.position.brokerageAccount ? 
        typeof item.position.brokerageAccount === 'object' && Object.keys(item.position.brokerageAccount).length === 1 && Object.keys(item.position.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.position.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.brokerageAccount.id !== undefined ? item.position.brokerageAccount.id : undefined,
            fundId: item.position.brokerageAccount.fundId !== undefined ? {
                equals: item.position.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.position.brokerageAccount.provider !== undefined ? item.position.brokerageAccount.provider : undefined,
            type: item.position.brokerageAccount.type !== undefined ? item.position.brokerageAccount.type : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? item.position.brokerageAccount.apiKey : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? item.position.brokerageAccount.apiSecret : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? item.position.brokerageAccount.configuration : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? item.position.brokerageAccount.marketOpen : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? item.position.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? item.position.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? item.position.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? item.position.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? item.position.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? item.position.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? item.position.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? item.position.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      contract: item.position.contract ? 
        typeof item.position.contract === 'object' && Object.keys(item.position.contract).length === 1 && Object.keys(item.position.contract)[0] === 'id'
    ? { connect: {
            id: item.position.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.contract.id !== undefined ? item.position.contract.id : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                equals: item.position.contract.symbol 
               } : undefined,
          },
          create: {
            symbol: item.position.contract.symbol !== undefined ? item.position.contract.symbol : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? item.position.contract.contractSymbol : undefined,
            optionType: item.position.contract.optionType !== undefined ? item.position.contract.optionType : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? item.position.contract.expirationDate : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? item.position.contract.daysToExpiration : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? item.position.contract.bidSize : undefined,
            askSize: item.position.contract.askSize !== undefined ? item.position.contract.askSize : undefined,
            volume: item.position.contract.volume !== undefined ? item.position.contract.volume : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? item.position.contract.openInterest : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? item.position.contract.inTheMoney : undefined,
            metadata: item.position.contract.metadata !== undefined ? item.position.contract.metadata : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? item.position.contract.dataTimestamp : undefined,
          },
        }
      } : undefined,
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
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
            mutation: CREATE_ONE_BROKERAGEACCOUNT,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneBrokerageAccount) {
            return response.data.createOneBrokerageAccount;
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
   * Create multiple BrokerageAccount records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of BrokerageAccount objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: BrokerageAccountType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_BROKERAGEACCOUNT = gql`
          mutation createManyBrokerageAccount($data: [BrokerageAccountCreateManyInput!]!) {
            createManyBrokerageAccount(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      provider: prop.provider !== undefined ? prop.provider : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  apiKey: prop.apiKey !== undefined ? prop.apiKey : undefined,
  apiSecret: prop.apiSecret !== undefined ? prop.apiSecret : undefined,
  configuration: prop.configuration !== undefined ? prop.configuration : undefined,
  marketOpen: prop.marketOpen !== undefined ? prop.marketOpen : undefined,
  realTime: prop.realTime !== undefined ? prop.realTime : undefined,
  cryptoTradingEnabled: prop.cryptoTradingEnabled !== undefined ? prop.cryptoTradingEnabled : undefined,
  cryptoTradingPairs: prop.cryptoTradingPairs !== undefined ? {
    set: prop.cryptoTradingPairs 
  } : undefined,
  cryptoTradeAllocationPct: prop.cryptoTradeAllocationPct !== undefined ? prop.cryptoTradeAllocationPct : undefined,
  tradeAllocationPct: prop.tradeAllocationPct !== undefined ? prop.tradeAllocationPct : undefined,
  autoAllocation: prop.autoAllocation !== undefined ? prop.autoAllocation : undefined,
  minPercentageChange: prop.minPercentageChange !== undefined ? prop.minPercentageChange : undefined,
  volumeThreshold: prop.volumeThreshold !== undefined ? prop.volumeThreshold : undefined,
  enablePortfolioTrailingStop: prop.enablePortfolioTrailingStop !== undefined ? prop.enablePortfolioTrailingStop : undefined,
  portfolioTrailPercent: prop.portfolioTrailPercent !== undefined ? prop.portfolioTrailPercent : undefined,
  portfolioProfitThresholdPercent: prop.portfolioProfitThresholdPercent !== undefined ? prop.portfolioProfitThresholdPercent : undefined,
  reducedPortfolioTrailPercent: prop.reducedPortfolioTrailPercent !== undefined ? prop.reducedPortfolioTrailPercent : undefined,
  defaultTrailingStopPercentage100: prop.defaultTrailingStopPercentage100 !== undefined ? prop.defaultTrailingStopPercentage100 : undefined,
  firstTrailReductionThreshold100: prop.firstTrailReductionThreshold100 !== undefined ? prop.firstTrailReductionThreshold100 : undefined,
  secondTrailReductionThreshold100: prop.secondTrailReductionThreshold100 !== undefined ? prop.secondTrailReductionThreshold100 : undefined,
  firstReducedTrailPercentage100: prop.firstReducedTrailPercentage100 !== undefined ? prop.firstReducedTrailPercentage100 : undefined,
  secondReducedTrailPercentage100: prop.secondReducedTrailPercentage100 !== undefined ? prop.secondReducedTrailPercentage100 : undefined,
  minimumPriceChangePercent100: prop.minimumPriceChangePercent100 !== undefined ? prop.minimumPriceChangePercent100 : undefined,
  fundId: prop.fundId !== undefined ? prop.fundId : undefined,
  deletedAt: prop.deletedAt !== undefined ? prop.deletedAt : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_BROKERAGEACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyBrokerageAccount) {
          return response.data.createManyBrokerageAccount;
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
   * Update a single BrokerageAccount record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated BrokerageAccount or null.
   */
  async update(props: BrokerageAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<BrokerageAccountType> {
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

        const UPDATE_ONE_BROKERAGEACCOUNT = gql`
          mutation updateOneBrokerageAccount($data: BrokerageAccountUpdateInput!, $where: BrokerageAccountWhereUniqueInput!) {
            updateOneBrokerageAccount(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  fundId: props.fundId !== undefined ? {
    equals: props.fundId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  provider: props.provider !== undefined ? {
            set: props.provider 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  apiKey: props.apiKey !== undefined ? {
            set: props.apiKey 
           } : undefined,
  apiSecret: props.apiSecret !== undefined ? {
            set: props.apiSecret 
           } : undefined,
  configuration: props.configuration !== undefined ? {
            set: props.configuration 
           } : undefined,
  marketOpen: props.marketOpen !== undefined ? {
            set: props.marketOpen 
           } : undefined,
  realTime: props.realTime !== undefined ? {
            set: props.realTime 
           } : undefined,
  cryptoTradingEnabled: props.cryptoTradingEnabled !== undefined ? {
            set: props.cryptoTradingEnabled 
           } : undefined,
  cryptoTradingPairs: props.cryptoTradingPairs !== undefined ? {
            set: props.cryptoTradingPairs 
           } : undefined,
  cryptoTradeAllocationPct: props.cryptoTradeAllocationPct !== undefined ? {
            set: props.cryptoTradeAllocationPct 
           } : undefined,
  tradeAllocationPct: props.tradeAllocationPct !== undefined ? {
            set: props.tradeAllocationPct 
           } : undefined,
  autoAllocation: props.autoAllocation !== undefined ? {
            set: props.autoAllocation 
           } : undefined,
  minPercentageChange: props.minPercentageChange !== undefined ? {
            set: props.minPercentageChange 
           } : undefined,
  volumeThreshold: props.volumeThreshold !== undefined ? {
            set: props.volumeThreshold 
           } : undefined,
  enablePortfolioTrailingStop: props.enablePortfolioTrailingStop !== undefined ? {
            set: props.enablePortfolioTrailingStop 
           } : undefined,
  portfolioTrailPercent: props.portfolioTrailPercent !== undefined ? {
            set: props.portfolioTrailPercent 
           } : undefined,
  portfolioProfitThresholdPercent: props.portfolioProfitThresholdPercent !== undefined ? {
            set: props.portfolioProfitThresholdPercent 
           } : undefined,
  reducedPortfolioTrailPercent: props.reducedPortfolioTrailPercent !== undefined ? {
            set: props.reducedPortfolioTrailPercent 
           } : undefined,
  defaultTrailingStopPercentage100: props.defaultTrailingStopPercentage100 !== undefined ? {
            set: props.defaultTrailingStopPercentage100 
           } : undefined,
  firstTrailReductionThreshold100: props.firstTrailReductionThreshold100 !== undefined ? {
            set: props.firstTrailReductionThreshold100 
           } : undefined,
  secondTrailReductionThreshold100: props.secondTrailReductionThreshold100 !== undefined ? {
            set: props.secondTrailReductionThreshold100 
           } : undefined,
  firstReducedTrailPercentage100: props.firstReducedTrailPercentage100 !== undefined ? {
            set: props.firstReducedTrailPercentage100 
           } : undefined,
  secondReducedTrailPercentage100: props.secondReducedTrailPercentage100 !== undefined ? {
            set: props.secondReducedTrailPercentage100 
           } : undefined,
  minimumPriceChangePercent100: props.minimumPriceChangePercent100 !== undefined ? {
            set: props.minimumPriceChangePercent100 
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
  allocation: props.allocation ? 
  typeof props.allocation === 'object' && Object.keys(props.allocation).length === 1 && (Object.keys(props.allocation)[0] === 'id' || Object.keys(props.allocation)[0] === 'symbol')
? {
  connect: {
    id: props.allocation.id
  }
} : { upsert: {
      where: {
        id: props.allocation.id !== undefined ? {
            equals: props.allocation.id
          } : undefined,
        brokerageAccountId: props.allocation.brokerageAccountId !== undefined ? {
            equals: props.allocation.brokerageAccountId
          } : undefined,
      },
      update: {
        id: props.allocation.id !== undefined ? {
            set: props.allocation.id
          } : undefined,
        equities: props.allocation.equities !== undefined ? {
            set: props.allocation.equities
          } : undefined,
        optionsContracts: props.allocation.optionsContracts !== undefined ? {
            set: props.allocation.optionsContracts
          } : undefined,
        futures: props.allocation.futures !== undefined ? {
            set: props.allocation.futures
          } : undefined,
        etfs: props.allocation.etfs !== undefined ? {
            set: props.allocation.etfs
          } : undefined,
        forex: props.allocation.forex !== undefined ? {
            set: props.allocation.forex
          } : undefined,
        crypto: props.allocation.crypto !== undefined ? {
            set: props.allocation.crypto
          } : undefined,
        stocks: props.allocation.stocks !== undefined ? {
            set: props.allocation.stocks
          } : undefined,
        options: props.allocation.options !== undefined ? {
            set: props.allocation.options
          } : undefined,
      },
      create: {
        equities: props.allocation.equities !== undefined ? props.allocation.equities : undefined,
        optionsContracts: props.allocation.optionsContracts !== undefined ? props.allocation.optionsContracts : undefined,
        futures: props.allocation.futures !== undefined ? props.allocation.futures : undefined,
        etfs: props.allocation.etfs !== undefined ? props.allocation.etfs : undefined,
        forex: props.allocation.forex !== undefined ? props.allocation.forex : undefined,
        crypto: props.allocation.crypto !== undefined ? props.allocation.crypto : undefined,
        stocks: props.allocation.stocks !== undefined ? props.allocation.stocks : undefined,
        options: props.allocation.options !== undefined ? props.allocation.options : undefined,
      },
    }
  } : undefined,
  fund: props.fund ? 
  typeof props.fund === 'object' && Object.keys(props.fund).length === 1 && (Object.keys(props.fund)[0] === 'id' || Object.keys(props.fund)[0] === 'symbol')
? {
  connect: {
    id: props.fund.id
  }
} : { upsert: {
      where: {
        id: props.fund.id !== undefined ? {
            equals: props.fund.id
          } : undefined,
        name: props.fund.name !== undefined ? {
            equals: props.fund.name
          } : undefined,
        slug: props.fund.slug !== undefined ? {
            equals: props.fund.slug
          } : undefined,
        organizationId: props.fund.organizationId !== undefined ? {
            equals: props.fund.organizationId
          } : undefined,
      },
      update: {
        id: props.fund.id !== undefined ? {
            set: props.fund.id
          } : undefined,
        name: props.fund.name !== undefined ? {
            set: props.fund.name
          } : undefined,
        slug: props.fund.slug !== undefined ? {
            set: props.fund.slug
          } : undefined,
        description: props.fund.description !== undefined ? {
            set: props.fund.description
          } : undefined,
        status: props.fund.status !== undefined ? {
            set: props.fund.status
          } : undefined,
        tradingOverrides: props.fund.tradingOverrides !== undefined ? {
            set: props.fund.tradingOverrides
          } : undefined,
        llmOverrides: props.fund.llmOverrides !== undefined ? {
            set: props.fund.llmOverrides
          } : undefined,
        deletedAt: props.fund.deletedAt !== undefined ? {
            set: props.fund.deletedAt
          } : undefined,
    organization: props.fund.organization ? 
    typeof props.fund.organization === 'object' && Object.keys(props.fund.organization).length === 1 && (Object.keys(props.fund.organization)[0] === 'id' || Object.keys(props.fund.organization)[0] === 'symbol')
? {
    connect: {
      id: props.fund.organization.id
    }
} : { upsert: {
        where: {
          id: props.fund.organization.id !== undefined ? {
              equals: props.fund.organization.id
            } : undefined,
          name: props.fund.organization.name !== undefined ? {
              equals: props.fund.organization.name
            } : undefined,
          slug: props.fund.organization.slug !== undefined ? {
              equals: props.fund.organization.slug
            } : undefined,
        },
        update: {
          id: props.fund.organization.id !== undefined ? {
              set: props.fund.organization.id
            } : undefined,
          name: props.fund.organization.name !== undefined ? {
              set: props.fund.organization.name
            } : undefined,
          slug: props.fund.organization.slug !== undefined ? {
              set: props.fund.organization.slug
            } : undefined,
          logoUrl: props.fund.organization.logoUrl !== undefined ? {
              set: props.fund.organization.logoUrl
            } : undefined,
          website: props.fund.organization.website !== undefined ? {
              set: props.fund.organization.website
            } : undefined,
          businessType: props.fund.organization.businessType !== undefined ? {
              set: props.fund.organization.businessType
            } : undefined,
          jurisdiction: props.fund.organization.jurisdiction !== undefined ? {
              set: props.fund.organization.jurisdiction
            } : undefined,
          regulatoryStatus: props.fund.organization.regulatoryStatus !== undefined ? {
              set: props.fund.organization.regulatoryStatus
            } : undefined,
          description: props.fund.organization.description !== undefined ? {
              set: props.fund.organization.description
            } : undefined,
          tradingDefaults: props.fund.organization.tradingDefaults !== undefined ? {
              set: props.fund.organization.tradingDefaults
            } : undefined,
          llmDefaults: props.fund.organization.llmDefaults !== undefined ? {
              set: props.fund.organization.llmDefaults
            } : undefined,
          deletedAt: props.fund.organization.deletedAt !== undefined ? {
              set: props.fund.organization.deletedAt
            } : undefined,
      members: props.fund.organization.members ? 
      Array.isArray(props.fund.organization.members) && props.fund.organization.members.length > 0 && props.fund.organization.members.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.fund.organization.members.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.fund.organization.members.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            organizationId: item.organizationId !== undefined ? {
                equals: item.organizationId
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
        },
        create: {
          name: props.fund.organization.name !== undefined ? props.fund.organization.name : undefined,
          slug: props.fund.organization.slug !== undefined ? props.fund.organization.slug : undefined,
          logoUrl: props.fund.organization.logoUrl !== undefined ? props.fund.organization.logoUrl : undefined,
          website: props.fund.organization.website !== undefined ? props.fund.organization.website : undefined,
          businessType: props.fund.organization.businessType !== undefined ? props.fund.organization.businessType : undefined,
          jurisdiction: props.fund.organization.jurisdiction !== undefined ? props.fund.organization.jurisdiction : undefined,
          regulatoryStatus: props.fund.organization.regulatoryStatus !== undefined ? props.fund.organization.regulatoryStatus : undefined,
          description: props.fund.organization.description !== undefined ? props.fund.organization.description : undefined,
          tradingDefaults: props.fund.organization.tradingDefaults !== undefined ? props.fund.organization.tradingDefaults : undefined,
          llmDefaults: props.fund.organization.llmDefaults !== undefined ? props.fund.organization.llmDefaults : undefined,
          deletedAt: props.fund.organization.deletedAt !== undefined ? props.fund.organization.deletedAt : undefined,
      members: props.fund.organization.members ? 
        Array.isArray(props.fund.organization.members) && props.fund.organization.members.length > 0 &&  props.fund.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.fund.organization.members.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.fund.organization.members.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            organizationId: item.organizationId !== undefined ? {
                equals: item.organizationId 
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
        },
      }
    } : undefined,
    assignments: props.fund.assignments ? 
    Array.isArray(props.fund.assignments) && props.fund.assignments.length > 0 && props.fund.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.fund.assignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.fund.assignments.map((item: any) => ({
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
      user: item.user ? 
      typeof item.user === 'object' && Object.keys(item.user).length === 1 && (Object.keys(item.user)[0] === 'id' || Object.keys(item.user)[0] === 'symbol')
? {
      connect: {
        id: item.user.id
      }
} : { upsert: {
          where: {
            id: item.user.id !== undefined ? {
                equals: item.user.id
              } : undefined,
            name: item.user.name !== undefined ? {
                equals: item.user.name
              } : undefined,
            email: item.user.email !== undefined ? {
                equals: item.user.email
              } : undefined,
            customerId: item.user.customerId !== undefined ? {
                equals: item.user.customerId
              } : undefined,
          },
          update: {
            id: item.user.id !== undefined ? {
                set: item.user.id
              } : undefined,
            name: item.user.name !== undefined ? {
                set: item.user.name
              } : undefined,
            email: item.user.email !== undefined ? {
                set: item.user.email
              } : undefined,
            emailVerified: item.user.emailVerified !== undefined ? {
                set: item.user.emailVerified
              } : undefined,
            image: item.user.image !== undefined ? {
                set: item.user.image
              } : undefined,
            deletedAt: item.user.deletedAt !== undefined ? {
                set: item.user.deletedAt
              } : undefined,
            role: item.user.role !== undefined ? {
                set: item.user.role
              } : undefined,
            bio: item.user.bio !== undefined ? {
                set: item.user.bio
              } : undefined,
            jobTitle: item.user.jobTitle !== undefined ? {
                set: item.user.jobTitle
              } : undefined,
            plan: item.user.plan !== undefined ? {
                set: item.user.plan
              } : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? {
                set: item.user.openaiAPIKey
              } : undefined,
            openaiModel: item.user.openaiModel !== undefined ? {
                set: item.user.openaiModel
              } : undefined,
            passwordHash: item.user.passwordHash !== undefined ? {
                set: item.user.passwordHash
              } : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? {
                set: item.user.avatarUrl
              } : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? {
                set: item.user.onboardingComplete
              } : undefined,
            signupCategory: item.user.signupCategory !== undefined ? {
                set: item.user.signupCategory
              } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.id !== undefined ? item.user.id : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            name: item.user.name !== undefined ? {
                equals: item.user.name 
               } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: props.fund.investments ? 
    Array.isArray(props.fund.investments) && props.fund.investments.length > 0 && props.fund.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.fund.investments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.fund.investments.map((item: any) => ({
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
      investor: item.investor ? 
      typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && (Object.keys(item.investor)[0] === 'id' || Object.keys(item.investor)[0] === 'symbol')
? {
      connect: {
        id: item.investor.id
      }
} : { upsert: {
          where: {
            id: item.investor.id !== undefined ? {
                equals: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email
              } : undefined,
            userId: item.investor.userId !== undefined ? {
                equals: item.investor.userId
              } : undefined,
          },
          update: {
            id: item.investor.id !== undefined ? {
                set: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                set: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                set: item.investor.email
              } : undefined,
            type: item.investor.type !== undefined ? {
                set: item.investor.type
              } : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? {
                set: item.investor.kycStatus
              } : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? {
                set: item.investor.walletAddress
              } : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? {
                set: item.investor.deletedAt
              } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          units: item.units !== undefined ? item.units : undefined,
          investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
          status: item.status !== undefined ? item.status : undefined,
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: props.fund.name !== undefined ? props.fund.name : undefined,
        slug: props.fund.slug !== undefined ? props.fund.slug : undefined,
        description: props.fund.description !== undefined ? props.fund.description : undefined,
        status: props.fund.status !== undefined ? props.fund.status : undefined,
        tradingOverrides: props.fund.tradingOverrides !== undefined ? props.fund.tradingOverrides : undefined,
        llmOverrides: props.fund.llmOverrides !== undefined ? props.fund.llmOverrides : undefined,
        deletedAt: props.fund.deletedAt !== undefined ? props.fund.deletedAt : undefined,
    organization: props.fund.organization ? 
      typeof props.fund.organization === 'object' && Object.keys(props.fund.organization).length === 1 && Object.keys(props.fund.organization)[0] === 'id'
    ? { connect: {
          id: props.fund.organization.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.fund.organization.id !== undefined ? props.fund.organization.id : undefined,
          slug: props.fund.organization.slug !== undefined ? props.fund.organization.slug : undefined,
          name: props.fund.organization.name !== undefined ? {
              equals: props.fund.organization.name 
             } : undefined,
        },
        create: {
          name: props.fund.organization.name !== undefined ? props.fund.organization.name : undefined,
          slug: props.fund.organization.slug !== undefined ? props.fund.organization.slug : undefined,
          logoUrl: props.fund.organization.logoUrl !== undefined ? props.fund.organization.logoUrl : undefined,
          website: props.fund.organization.website !== undefined ? props.fund.organization.website : undefined,
          businessType: props.fund.organization.businessType !== undefined ? props.fund.organization.businessType : undefined,
          jurisdiction: props.fund.organization.jurisdiction !== undefined ? props.fund.organization.jurisdiction : undefined,
          regulatoryStatus: props.fund.organization.regulatoryStatus !== undefined ? props.fund.organization.regulatoryStatus : undefined,
          description: props.fund.organization.description !== undefined ? props.fund.organization.description : undefined,
          tradingDefaults: props.fund.organization.tradingDefaults !== undefined ? props.fund.organization.tradingDefaults : undefined,
          llmDefaults: props.fund.organization.llmDefaults !== undefined ? props.fund.organization.llmDefaults : undefined,
          deletedAt: props.fund.organization.deletedAt !== undefined ? props.fund.organization.deletedAt : undefined,
      members: props.fund.organization.members ? 
        Array.isArray(props.fund.organization.members) && props.fund.organization.members.length > 0 &&  props.fund.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.fund.organization.members.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.fund.organization.members.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            organizationId: item.organizationId !== undefined ? {
                equals: item.organizationId 
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
        },
      }
    } : undefined,
    assignments: props.fund.assignments ? 
      Array.isArray(props.fund.assignments) && props.fund.assignments.length > 0 &&  props.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.assignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.assignments.map((item: any) => ({
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
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.id !== undefined ? item.user.id : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            name: item.user.name !== undefined ? {
                equals: item.user.name 
               } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: props.fund.investments ? 
      Array.isArray(props.fund.investments) && props.fund.investments.length > 0 &&  props.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.investments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.investments.map((item: any) => ({
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
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  alerts: props.alerts ? 
  Array.isArray(props.alerts) && props.alerts.length > 0 && props.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.alerts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.alerts.map((item: any) => ({
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
  trades: props.trades ? 
  Array.isArray(props.trades) && props.trades.length > 0 && props.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.trades.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.trades.map((item: any) => ({
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
        connect:      item.actions.map((item: any) => ({
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
  optionsPositions: props.optionsPositions ? 
  Array.isArray(props.optionsPositions) && props.optionsPositions.length > 0 && props.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.optionsPositions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.optionsPositions.map((item: any) => ({
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
      executions: item.contract.executions ? 
      Array.isArray(item.contract.executions) && item.contract.executions.length > 0 && item.contract.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.executions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.executions.map((item: any) => ({
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
      executions: item.contract.executions ? 
        Array.isArray(item.contract.executions) && item.contract.executions.length > 0 &&  item.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.executions.map((item: any) => ({
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
      executions: item.contract.executions ? 
        Array.isArray(item.contract.executions) && item.contract.executions.length > 0 &&  item.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.executions.map((item: any) => ({
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
    executions: item.executions ? 
      Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.executions.map((item: any) => ({
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
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
  optionsTradeExecutions: props.optionsTradeExecutions ? 
  Array.isArray(props.optionsTradeExecutions) && props.optionsTradeExecutions.length > 0 && props.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.optionsTradeExecutions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.optionsTradeExecutions.map((item: any) => ({
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
      brokerageAccount: item.position.brokerageAccount ? 
      typeof item.position.brokerageAccount === 'object' && Object.keys(item.position.brokerageAccount).length === 1 && (Object.keys(item.position.brokerageAccount)[0] === 'id' || Object.keys(item.position.brokerageAccount)[0] === 'symbol')
? {
      connect: {
        id: item.position.brokerageAccount.id
      }
} : { upsert: {
          where: {
            id: item.position.brokerageAccount.id !== undefined ? {
                equals: item.position.brokerageAccount.id
              } : undefined,
            fundId: item.position.brokerageAccount.fundId !== undefined ? {
                equals: item.position.brokerageAccount.fundId
              } : undefined,
          },
          update: {
            id: item.position.brokerageAccount.id !== undefined ? {
                set: item.position.brokerageAccount.id
              } : undefined,
            provider: item.position.brokerageAccount.provider !== undefined ? {
                set: item.position.brokerageAccount.provider
              } : undefined,
            type: item.position.brokerageAccount.type !== undefined ? {
                set: item.position.brokerageAccount.type
              } : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? {
                set: item.position.brokerageAccount.apiKey
              } : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? {
                set: item.position.brokerageAccount.apiSecret
              } : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? {
                set: item.position.brokerageAccount.configuration
              } : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? {
                set: item.position.brokerageAccount.marketOpen
              } : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? {
                set: item.position.brokerageAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? {
                set: item.position.brokerageAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? {
                set: item.position.brokerageAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? {
                set: item.position.brokerageAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? {
                set: item.position.brokerageAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.position.brokerageAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? {
                set: item.position.brokerageAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.position.brokerageAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.position.brokerageAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.position.brokerageAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.position.brokerageAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.position.brokerageAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.position.brokerageAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.position.brokerageAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.position.brokerageAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? {
                set: item.position.brokerageAccount.deletedAt
              } : undefined,
          },
          create: {
            provider: item.position.brokerageAccount.provider !== undefined ? item.position.brokerageAccount.provider : undefined,
            type: item.position.brokerageAccount.type !== undefined ? item.position.brokerageAccount.type : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? item.position.brokerageAccount.apiKey : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? item.position.brokerageAccount.apiSecret : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? item.position.brokerageAccount.configuration : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? item.position.brokerageAccount.marketOpen : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? item.position.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? item.position.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? item.position.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? item.position.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? item.position.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? item.position.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? item.position.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? item.position.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      contract: item.position.contract ? 
      typeof item.position.contract === 'object' && Object.keys(item.position.contract).length === 1 && (Object.keys(item.position.contract)[0] === 'id' || Object.keys(item.position.contract)[0] === 'symbol')
? {
      connect: {
        id: item.position.contract.id
      }
} : { upsert: {
          where: {
            id: item.position.contract.id !== undefined ? {
                equals: item.position.contract.id
              } : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                equals: item.position.contract.symbol
              } : undefined,
          },
          update: {
            id: item.position.contract.id !== undefined ? {
                set: item.position.contract.id
              } : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                set: item.position.contract.symbol
              } : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? {
                set: item.position.contract.contractSymbol
              } : undefined,
            optionType: item.position.contract.optionType !== undefined ? {
                set: item.position.contract.optionType
              } : undefined,
            strikePrice: item.position.contract.strikePrice !== undefined ? {
                set: item.position.contract.strikePrice
              } : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? {
                set: item.position.contract.expirationDate
              } : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? {
                set: item.position.contract.daysToExpiration
              } : undefined,
            lastPrice: item.position.contract.lastPrice !== undefined ? {
                set: item.position.contract.lastPrice
              } : undefined,
            bidPrice: item.position.contract.bidPrice !== undefined ? {
                set: item.position.contract.bidPrice
              } : undefined,
            askPrice: item.position.contract.askPrice !== undefined ? {
                set: item.position.contract.askPrice
              } : undefined,
            midPrice: item.position.contract.midPrice !== undefined ? {
                set: item.position.contract.midPrice
              } : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? {
                set: item.position.contract.bidSize
              } : undefined,
            askSize: item.position.contract.askSize !== undefined ? {
                set: item.position.contract.askSize
              } : undefined,
            volume: item.position.contract.volume !== undefined ? {
                set: item.position.contract.volume
              } : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? {
                set: item.position.contract.openInterest
              } : undefined,
            impliedVolatility: item.position.contract.impliedVolatility !== undefined ? {
                set: item.position.contract.impliedVolatility
              } : undefined,
            delta: item.position.contract.delta !== undefined ? {
                set: item.position.contract.delta
              } : undefined,
            gamma: item.position.contract.gamma !== undefined ? {
                set: item.position.contract.gamma
              } : undefined,
            theta: item.position.contract.theta !== undefined ? {
                set: item.position.contract.theta
              } : undefined,
            vega: item.position.contract.vega !== undefined ? {
                set: item.position.contract.vega
              } : undefined,
            rho: item.position.contract.rho !== undefined ? {
                set: item.position.contract.rho
              } : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? {
                set: item.position.contract.inTheMoney
              } : undefined,
            intrinsicValue: item.position.contract.intrinsicValue !== undefined ? {
                set: item.position.contract.intrinsicValue
              } : undefined,
            extrinsicValue: item.position.contract.extrinsicValue !== undefined ? {
                set: item.position.contract.extrinsicValue
              } : undefined,
            theoreticalPrice: item.position.contract.theoreticalPrice !== undefined ? {
                set: item.position.contract.theoreticalPrice
              } : undefined,
            underlyingPrice: item.position.contract.underlyingPrice !== undefined ? {
                set: item.position.contract.underlyingPrice
              } : undefined,
            metadata: item.position.contract.metadata !== undefined ? {
                set: item.position.contract.metadata
              } : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? {
                set: item.position.contract.dataTimestamp
              } : undefined,
          },
          create: {
            symbol: item.position.contract.symbol !== undefined ? item.position.contract.symbol : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? item.position.contract.contractSymbol : undefined,
            optionType: item.position.contract.optionType !== undefined ? item.position.contract.optionType : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? item.position.contract.expirationDate : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? item.position.contract.daysToExpiration : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? item.position.contract.bidSize : undefined,
            askSize: item.position.contract.askSize !== undefined ? item.position.contract.askSize : undefined,
            volume: item.position.contract.volume !== undefined ? item.position.contract.volume : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? item.position.contract.openInterest : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? item.position.contract.inTheMoney : undefined,
            metadata: item.position.contract.metadata !== undefined ? item.position.contract.metadata : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? item.position.contract.dataTimestamp : undefined,
          },
        }
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
      brokerageAccount: item.position.brokerageAccount ? 
        typeof item.position.brokerageAccount === 'object' && Object.keys(item.position.brokerageAccount).length === 1 && Object.keys(item.position.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.position.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.brokerageAccount.id !== undefined ? item.position.brokerageAccount.id : undefined,
            fundId: item.position.brokerageAccount.fundId !== undefined ? {
                equals: item.position.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.position.brokerageAccount.provider !== undefined ? item.position.brokerageAccount.provider : undefined,
            type: item.position.brokerageAccount.type !== undefined ? item.position.brokerageAccount.type : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? item.position.brokerageAccount.apiKey : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? item.position.brokerageAccount.apiSecret : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? item.position.brokerageAccount.configuration : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? item.position.brokerageAccount.marketOpen : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? item.position.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? item.position.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? item.position.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? item.position.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? item.position.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? item.position.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? item.position.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? item.position.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      contract: item.position.contract ? 
        typeof item.position.contract === 'object' && Object.keys(item.position.contract).length === 1 && Object.keys(item.position.contract)[0] === 'id'
    ? { connect: {
            id: item.position.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.contract.id !== undefined ? item.position.contract.id : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                equals: item.position.contract.symbol 
               } : undefined,
          },
          create: {
            symbol: item.position.contract.symbol !== undefined ? item.position.contract.symbol : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? item.position.contract.contractSymbol : undefined,
            optionType: item.position.contract.optionType !== undefined ? item.position.contract.optionType : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? item.position.contract.expirationDate : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? item.position.contract.daysToExpiration : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? item.position.contract.bidSize : undefined,
            askSize: item.position.contract.askSize !== undefined ? item.position.contract.askSize : undefined,
            volume: item.position.contract.volume !== undefined ? item.position.contract.volume : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? item.position.contract.openInterest : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? item.position.contract.inTheMoney : undefined,
            metadata: item.position.contract.metadata !== undefined ? item.position.contract.metadata : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? item.position.contract.dataTimestamp : undefined,
          },
        }
      } : undefined,
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
      positions: item.contract.positions ? 
      Array.isArray(item.contract.positions) && item.contract.positions.length > 0 && item.contract.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.positions.map((item: any) => ({
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
      brokerageAccount: item.position.brokerageAccount ? 
        typeof item.position.brokerageAccount === 'object' && Object.keys(item.position.brokerageAccount).length === 1 && Object.keys(item.position.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.position.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.brokerageAccount.id !== undefined ? item.position.brokerageAccount.id : undefined,
            fundId: item.position.brokerageAccount.fundId !== undefined ? {
                equals: item.position.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.position.brokerageAccount.provider !== undefined ? item.position.brokerageAccount.provider : undefined,
            type: item.position.brokerageAccount.type !== undefined ? item.position.brokerageAccount.type : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? item.position.brokerageAccount.apiKey : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? item.position.brokerageAccount.apiSecret : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? item.position.brokerageAccount.configuration : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? item.position.brokerageAccount.marketOpen : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? item.position.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? item.position.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? item.position.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? item.position.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? item.position.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? item.position.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? item.position.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? item.position.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      contract: item.position.contract ? 
        typeof item.position.contract === 'object' && Object.keys(item.position.contract).length === 1 && Object.keys(item.position.contract)[0] === 'id'
    ? { connect: {
            id: item.position.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.contract.id !== undefined ? item.position.contract.id : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                equals: item.position.contract.symbol 
               } : undefined,
          },
          create: {
            symbol: item.position.contract.symbol !== undefined ? item.position.contract.symbol : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? item.position.contract.contractSymbol : undefined,
            optionType: item.position.contract.optionType !== undefined ? item.position.contract.optionType : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? item.position.contract.expirationDate : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? item.position.contract.daysToExpiration : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? item.position.contract.bidSize : undefined,
            askSize: item.position.contract.askSize !== undefined ? item.position.contract.askSize : undefined,
            volume: item.position.contract.volume !== undefined ? item.position.contract.volume : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? item.position.contract.openInterest : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? item.position.contract.inTheMoney : undefined,
            metadata: item.position.contract.metadata !== undefined ? item.position.contract.metadata : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? item.position.contract.dataTimestamp : undefined,
          },
        }
      } : undefined,
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
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
          mutation: UPDATE_ONE_BROKERAGEACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneBrokerageAccount) {
          return response.data.updateOneBrokerageAccount;
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
   * Upsert a single BrokerageAccount record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated BrokerageAccount or null.
   */
  async upsert(props: BrokerageAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<BrokerageAccountType> {
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

        const UPSERT_ONE_BROKERAGEACCOUNT = gql`
          mutation upsertOneBrokerageAccount($where: BrokerageAccountWhereUniqueInput!, $create: BrokerageAccountCreateInput!, $update: BrokerageAccountUpdateInput!) {
            upsertOneBrokerageAccount(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  fundId: props.fundId !== undefined ? {
    equals: props.fundId 
  } : undefined,
      },
          create: {
        provider: props.provider !== undefined ? props.provider : undefined,
  type: props.type !== undefined ? props.type : undefined,
  apiKey: props.apiKey !== undefined ? props.apiKey : undefined,
  apiSecret: props.apiSecret !== undefined ? props.apiSecret : undefined,
  configuration: props.configuration !== undefined ? props.configuration : undefined,
  marketOpen: props.marketOpen !== undefined ? props.marketOpen : undefined,
  realTime: props.realTime !== undefined ? props.realTime : undefined,
  cryptoTradingEnabled: props.cryptoTradingEnabled !== undefined ? props.cryptoTradingEnabled : undefined,
  cryptoTradingPairs: props.cryptoTradingPairs !== undefined ? {
    set: props.cryptoTradingPairs 
  } : undefined,
  cryptoTradeAllocationPct: props.cryptoTradeAllocationPct !== undefined ? props.cryptoTradeAllocationPct : undefined,
  tradeAllocationPct: props.tradeAllocationPct !== undefined ? props.tradeAllocationPct : undefined,
  autoAllocation: props.autoAllocation !== undefined ? props.autoAllocation : undefined,
  minPercentageChange: props.minPercentageChange !== undefined ? props.minPercentageChange : undefined,
  volumeThreshold: props.volumeThreshold !== undefined ? props.volumeThreshold : undefined,
  enablePortfolioTrailingStop: props.enablePortfolioTrailingStop !== undefined ? props.enablePortfolioTrailingStop : undefined,
  portfolioTrailPercent: props.portfolioTrailPercent !== undefined ? props.portfolioTrailPercent : undefined,
  portfolioProfitThresholdPercent: props.portfolioProfitThresholdPercent !== undefined ? props.portfolioProfitThresholdPercent : undefined,
  reducedPortfolioTrailPercent: props.reducedPortfolioTrailPercent !== undefined ? props.reducedPortfolioTrailPercent : undefined,
  defaultTrailingStopPercentage100: props.defaultTrailingStopPercentage100 !== undefined ? props.defaultTrailingStopPercentage100 : undefined,
  firstTrailReductionThreshold100: props.firstTrailReductionThreshold100 !== undefined ? props.firstTrailReductionThreshold100 : undefined,
  secondTrailReductionThreshold100: props.secondTrailReductionThreshold100 !== undefined ? props.secondTrailReductionThreshold100 : undefined,
  firstReducedTrailPercentage100: props.firstReducedTrailPercentage100 !== undefined ? props.firstReducedTrailPercentage100 : undefined,
  secondReducedTrailPercentage100: props.secondReducedTrailPercentage100 !== undefined ? props.secondReducedTrailPercentage100 : undefined,
  minimumPriceChangePercent100: props.minimumPriceChangePercent100 !== undefined ? props.minimumPriceChangePercent100 : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  allocation: props.allocation ? 
    typeof props.allocation === 'object' && Object.keys(props.allocation).length === 1 && Object.keys(props.allocation)[0] === 'id'
    ? { connect: {
        id: props.allocation.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.allocation.id !== undefined ? props.allocation.id : undefined,
        brokerageAccountId: props.allocation.brokerageAccountId !== undefined ? props.allocation.brokerageAccountId : undefined,
      },
      create: {
        equities: props.allocation.equities !== undefined ? props.allocation.equities : undefined,
        optionsContracts: props.allocation.optionsContracts !== undefined ? props.allocation.optionsContracts : undefined,
        futures: props.allocation.futures !== undefined ? props.allocation.futures : undefined,
        etfs: props.allocation.etfs !== undefined ? props.allocation.etfs : undefined,
        forex: props.allocation.forex !== undefined ? props.allocation.forex : undefined,
        crypto: props.allocation.crypto !== undefined ? props.allocation.crypto : undefined,
        stocks: props.allocation.stocks !== undefined ? props.allocation.stocks : undefined,
        options: props.allocation.options !== undefined ? props.allocation.options : undefined,
      },
    }
  } : undefined,
  fund: props.fund ? 
    typeof props.fund === 'object' && Object.keys(props.fund).length === 1 && Object.keys(props.fund)[0] === 'id'
    ? { connect: {
        id: props.fund.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.fund.id !== undefined ? props.fund.id : undefined,
        name: props.fund.name !== undefined ? {
            equals: props.fund.name 
           } : undefined,
        slug: props.fund.slug !== undefined ? {
            equals: props.fund.slug 
           } : undefined,
        organizationId: props.fund.organizationId !== undefined ? {
            equals: props.fund.organizationId 
           } : undefined,
      },
      create: {
        name: props.fund.name !== undefined ? props.fund.name : undefined,
        slug: props.fund.slug !== undefined ? props.fund.slug : undefined,
        description: props.fund.description !== undefined ? props.fund.description : undefined,
        status: props.fund.status !== undefined ? props.fund.status : undefined,
        tradingOverrides: props.fund.tradingOverrides !== undefined ? props.fund.tradingOverrides : undefined,
        llmOverrides: props.fund.llmOverrides !== undefined ? props.fund.llmOverrides : undefined,
        deletedAt: props.fund.deletedAt !== undefined ? props.fund.deletedAt : undefined,
    organization: props.fund.organization ? 
      typeof props.fund.organization === 'object' && Object.keys(props.fund.organization).length === 1 && Object.keys(props.fund.organization)[0] === 'id'
    ? { connect: {
          id: props.fund.organization.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.fund.organization.id !== undefined ? props.fund.organization.id : undefined,
          slug: props.fund.organization.slug !== undefined ? props.fund.organization.slug : undefined,
          name: props.fund.organization.name !== undefined ? {
              equals: props.fund.organization.name 
             } : undefined,
        },
        create: {
          name: props.fund.organization.name !== undefined ? props.fund.organization.name : undefined,
          slug: props.fund.organization.slug !== undefined ? props.fund.organization.slug : undefined,
          logoUrl: props.fund.organization.logoUrl !== undefined ? props.fund.organization.logoUrl : undefined,
          website: props.fund.organization.website !== undefined ? props.fund.organization.website : undefined,
          businessType: props.fund.organization.businessType !== undefined ? props.fund.organization.businessType : undefined,
          jurisdiction: props.fund.organization.jurisdiction !== undefined ? props.fund.organization.jurisdiction : undefined,
          regulatoryStatus: props.fund.organization.regulatoryStatus !== undefined ? props.fund.organization.regulatoryStatus : undefined,
          description: props.fund.organization.description !== undefined ? props.fund.organization.description : undefined,
          tradingDefaults: props.fund.organization.tradingDefaults !== undefined ? props.fund.organization.tradingDefaults : undefined,
          llmDefaults: props.fund.organization.llmDefaults !== undefined ? props.fund.organization.llmDefaults : undefined,
          deletedAt: props.fund.organization.deletedAt !== undefined ? props.fund.organization.deletedAt : undefined,
      members: props.fund.organization.members ? 
        Array.isArray(props.fund.organization.members) && props.fund.organization.members.length > 0 &&  props.fund.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.fund.organization.members.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.fund.organization.members.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            organizationId: item.organizationId !== undefined ? {
                equals: item.organizationId 
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
        },
      }
    } : undefined,
    assignments: props.fund.assignments ? 
      Array.isArray(props.fund.assignments) && props.fund.assignments.length > 0 &&  props.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.assignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.assignments.map((item: any) => ({
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
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.id !== undefined ? item.user.id : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            name: item.user.name !== undefined ? {
                equals: item.user.name 
               } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: props.fund.investments ? 
      Array.isArray(props.fund.investments) && props.fund.investments.length > 0 &&  props.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.investments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.investments.map((item: any) => ({
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
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  alerts: props.alerts ? 
    Array.isArray(props.alerts) && props.alerts.length > 0 &&  props.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.alerts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.alerts.map((item: any) => ({
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
  trades: props.trades ? 
    Array.isArray(props.trades) && props.trades.length > 0 &&  props.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.trades.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.trades.map((item: any) => ({
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
        connect:      item.actions.map((item: any) => ({
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
  optionsPositions: props.optionsPositions ? 
    Array.isArray(props.optionsPositions) && props.optionsPositions.length > 0 &&  props.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.optionsPositions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.optionsPositions.map((item: any) => ({
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
      executions: item.contract.executions ? 
        Array.isArray(item.contract.executions) && item.contract.executions.length > 0 &&  item.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.executions.map((item: any) => ({
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
    executions: item.executions ? 
      Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.executions.map((item: any) => ({
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
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
  optionsTradeExecutions: props.optionsTradeExecutions ? 
    Array.isArray(props.optionsTradeExecutions) && props.optionsTradeExecutions.length > 0 &&  props.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.optionsTradeExecutions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.optionsTradeExecutions.map((item: any) => ({
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
      brokerageAccount: item.position.brokerageAccount ? 
        typeof item.position.brokerageAccount === 'object' && Object.keys(item.position.brokerageAccount).length === 1 && Object.keys(item.position.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.position.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.brokerageAccount.id !== undefined ? item.position.brokerageAccount.id : undefined,
            fundId: item.position.brokerageAccount.fundId !== undefined ? {
                equals: item.position.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.position.brokerageAccount.provider !== undefined ? item.position.brokerageAccount.provider : undefined,
            type: item.position.brokerageAccount.type !== undefined ? item.position.brokerageAccount.type : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? item.position.brokerageAccount.apiKey : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? item.position.brokerageAccount.apiSecret : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? item.position.brokerageAccount.configuration : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? item.position.brokerageAccount.marketOpen : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? item.position.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? item.position.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? item.position.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? item.position.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? item.position.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? item.position.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? item.position.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? item.position.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      contract: item.position.contract ? 
        typeof item.position.contract === 'object' && Object.keys(item.position.contract).length === 1 && Object.keys(item.position.contract)[0] === 'id'
    ? { connect: {
            id: item.position.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.contract.id !== undefined ? item.position.contract.id : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                equals: item.position.contract.symbol 
               } : undefined,
          },
          create: {
            symbol: item.position.contract.symbol !== undefined ? item.position.contract.symbol : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? item.position.contract.contractSymbol : undefined,
            optionType: item.position.contract.optionType !== undefined ? item.position.contract.optionType : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? item.position.contract.expirationDate : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? item.position.contract.daysToExpiration : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? item.position.contract.bidSize : undefined,
            askSize: item.position.contract.askSize !== undefined ? item.position.contract.askSize : undefined,
            volume: item.position.contract.volume !== undefined ? item.position.contract.volume : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? item.position.contract.openInterest : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? item.position.contract.inTheMoney : undefined,
            metadata: item.position.contract.metadata !== undefined ? item.position.contract.metadata : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? item.position.contract.dataTimestamp : undefined,
          },
        }
      } : undefined,
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
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
      provider: props.provider !== undefined ? {
            set: props.provider 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  apiKey: props.apiKey !== undefined ? {
            set: props.apiKey 
           } : undefined,
  apiSecret: props.apiSecret !== undefined ? {
            set: props.apiSecret 
           } : undefined,
  configuration: props.configuration !== undefined ? {
            set: props.configuration 
           } : undefined,
  marketOpen: props.marketOpen !== undefined ? {
            set: props.marketOpen 
           } : undefined,
  realTime: props.realTime !== undefined ? {
            set: props.realTime 
           } : undefined,
  cryptoTradingEnabled: props.cryptoTradingEnabled !== undefined ? {
            set: props.cryptoTradingEnabled 
           } : undefined,
  cryptoTradingPairs: props.cryptoTradingPairs !== undefined ? {
            set: props.cryptoTradingPairs 
           } : undefined,
  cryptoTradeAllocationPct: props.cryptoTradeAllocationPct !== undefined ? {
            set: props.cryptoTradeAllocationPct 
           } : undefined,
  tradeAllocationPct: props.tradeAllocationPct !== undefined ? {
            set: props.tradeAllocationPct 
           } : undefined,
  autoAllocation: props.autoAllocation !== undefined ? {
            set: props.autoAllocation 
           } : undefined,
  minPercentageChange: props.minPercentageChange !== undefined ? {
            set: props.minPercentageChange 
           } : undefined,
  volumeThreshold: props.volumeThreshold !== undefined ? {
            set: props.volumeThreshold 
           } : undefined,
  enablePortfolioTrailingStop: props.enablePortfolioTrailingStop !== undefined ? {
            set: props.enablePortfolioTrailingStop 
           } : undefined,
  portfolioTrailPercent: props.portfolioTrailPercent !== undefined ? {
            set: props.portfolioTrailPercent 
           } : undefined,
  portfolioProfitThresholdPercent: props.portfolioProfitThresholdPercent !== undefined ? {
            set: props.portfolioProfitThresholdPercent 
           } : undefined,
  reducedPortfolioTrailPercent: props.reducedPortfolioTrailPercent !== undefined ? {
            set: props.reducedPortfolioTrailPercent 
           } : undefined,
  defaultTrailingStopPercentage100: props.defaultTrailingStopPercentage100 !== undefined ? {
            set: props.defaultTrailingStopPercentage100 
           } : undefined,
  firstTrailReductionThreshold100: props.firstTrailReductionThreshold100 !== undefined ? {
            set: props.firstTrailReductionThreshold100 
           } : undefined,
  secondTrailReductionThreshold100: props.secondTrailReductionThreshold100 !== undefined ? {
            set: props.secondTrailReductionThreshold100 
           } : undefined,
  firstReducedTrailPercentage100: props.firstReducedTrailPercentage100 !== undefined ? {
            set: props.firstReducedTrailPercentage100 
           } : undefined,
  secondReducedTrailPercentage100: props.secondReducedTrailPercentage100 !== undefined ? {
            set: props.secondReducedTrailPercentage100 
           } : undefined,
  minimumPriceChangePercent100: props.minimumPriceChangePercent100 !== undefined ? {
            set: props.minimumPriceChangePercent100 
           } : undefined,
  deletedAt: props.deletedAt !== undefined ? {
            set: props.deletedAt 
           } : undefined,
  allocation: props.allocation ? 
  typeof props.allocation === 'object' && Object.keys(props.allocation).length === 1 && (Object.keys(props.allocation)[0] === 'id' || Object.keys(props.allocation)[0] === 'symbol')
? {
  connect: {
    id: props.allocation.id
  }
} : { upsert: {
      where: {
        id: props.allocation.id !== undefined ? {
            equals: props.allocation.id
          } : undefined,
        brokerageAccountId: props.allocation.brokerageAccountId !== undefined ? {
            equals: props.allocation.brokerageAccountId
          } : undefined,
      },
      update: {
        id: props.allocation.id !== undefined ? {
            set: props.allocation.id
          } : undefined,
        equities: props.allocation.equities !== undefined ? {
            set: props.allocation.equities
          } : undefined,
        optionsContracts: props.allocation.optionsContracts !== undefined ? {
            set: props.allocation.optionsContracts
          } : undefined,
        futures: props.allocation.futures !== undefined ? {
            set: props.allocation.futures
          } : undefined,
        etfs: props.allocation.etfs !== undefined ? {
            set: props.allocation.etfs
          } : undefined,
        forex: props.allocation.forex !== undefined ? {
            set: props.allocation.forex
          } : undefined,
        crypto: props.allocation.crypto !== undefined ? {
            set: props.allocation.crypto
          } : undefined,
        stocks: props.allocation.stocks !== undefined ? {
            set: props.allocation.stocks
          } : undefined,
        options: props.allocation.options !== undefined ? {
            set: props.allocation.options
          } : undefined,
      },
      create: {
        equities: props.allocation.equities !== undefined ? props.allocation.equities : undefined,
        optionsContracts: props.allocation.optionsContracts !== undefined ? props.allocation.optionsContracts : undefined,
        futures: props.allocation.futures !== undefined ? props.allocation.futures : undefined,
        etfs: props.allocation.etfs !== undefined ? props.allocation.etfs : undefined,
        forex: props.allocation.forex !== undefined ? props.allocation.forex : undefined,
        crypto: props.allocation.crypto !== undefined ? props.allocation.crypto : undefined,
        stocks: props.allocation.stocks !== undefined ? props.allocation.stocks : undefined,
        options: props.allocation.options !== undefined ? props.allocation.options : undefined,
      },
    }
  } : undefined,
  fund: props.fund ? 
  typeof props.fund === 'object' && Object.keys(props.fund).length === 1 && (Object.keys(props.fund)[0] === 'id' || Object.keys(props.fund)[0] === 'symbol')
? {
  connect: {
    id: props.fund.id
  }
} : { upsert: {
      where: {
        id: props.fund.id !== undefined ? {
            equals: props.fund.id
          } : undefined,
        name: props.fund.name !== undefined ? {
            equals: props.fund.name
          } : undefined,
        slug: props.fund.slug !== undefined ? {
            equals: props.fund.slug
          } : undefined,
        organizationId: props.fund.organizationId !== undefined ? {
            equals: props.fund.organizationId
          } : undefined,
      },
      update: {
        id: props.fund.id !== undefined ? {
            set: props.fund.id
          } : undefined,
        name: props.fund.name !== undefined ? {
            set: props.fund.name
          } : undefined,
        slug: props.fund.slug !== undefined ? {
            set: props.fund.slug
          } : undefined,
        description: props.fund.description !== undefined ? {
            set: props.fund.description
          } : undefined,
        status: props.fund.status !== undefined ? {
            set: props.fund.status
          } : undefined,
        tradingOverrides: props.fund.tradingOverrides !== undefined ? {
            set: props.fund.tradingOverrides
          } : undefined,
        llmOverrides: props.fund.llmOverrides !== undefined ? {
            set: props.fund.llmOverrides
          } : undefined,
        deletedAt: props.fund.deletedAt !== undefined ? {
            set: props.fund.deletedAt
          } : undefined,
    organization: props.fund.organization ? 
    typeof props.fund.organization === 'object' && Object.keys(props.fund.organization).length === 1 && (Object.keys(props.fund.organization)[0] === 'id' || Object.keys(props.fund.organization)[0] === 'symbol')
? {
    connect: {
      id: props.fund.organization.id
    }
} : { upsert: {
        where: {
          id: props.fund.organization.id !== undefined ? {
              equals: props.fund.organization.id
            } : undefined,
          name: props.fund.organization.name !== undefined ? {
              equals: props.fund.organization.name
            } : undefined,
          slug: props.fund.organization.slug !== undefined ? {
              equals: props.fund.organization.slug
            } : undefined,
        },
        update: {
          id: props.fund.organization.id !== undefined ? {
              set: props.fund.organization.id
            } : undefined,
          name: props.fund.organization.name !== undefined ? {
              set: props.fund.organization.name
            } : undefined,
          slug: props.fund.organization.slug !== undefined ? {
              set: props.fund.organization.slug
            } : undefined,
          logoUrl: props.fund.organization.logoUrl !== undefined ? {
              set: props.fund.organization.logoUrl
            } : undefined,
          website: props.fund.organization.website !== undefined ? {
              set: props.fund.organization.website
            } : undefined,
          businessType: props.fund.organization.businessType !== undefined ? {
              set: props.fund.organization.businessType
            } : undefined,
          jurisdiction: props.fund.organization.jurisdiction !== undefined ? {
              set: props.fund.organization.jurisdiction
            } : undefined,
          regulatoryStatus: props.fund.organization.regulatoryStatus !== undefined ? {
              set: props.fund.organization.regulatoryStatus
            } : undefined,
          description: props.fund.organization.description !== undefined ? {
              set: props.fund.organization.description
            } : undefined,
          tradingDefaults: props.fund.organization.tradingDefaults !== undefined ? {
              set: props.fund.organization.tradingDefaults
            } : undefined,
          llmDefaults: props.fund.organization.llmDefaults !== undefined ? {
              set: props.fund.organization.llmDefaults
            } : undefined,
          deletedAt: props.fund.organization.deletedAt !== undefined ? {
              set: props.fund.organization.deletedAt
            } : undefined,
      members: props.fund.organization.members ? 
      Array.isArray(props.fund.organization.members) && props.fund.organization.members.length > 0 && props.fund.organization.members.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.fund.organization.members.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.fund.organization.members.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            organizationId: item.organizationId !== undefined ? {
                equals: item.organizationId
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
        },
        create: {
          name: props.fund.organization.name !== undefined ? props.fund.organization.name : undefined,
          slug: props.fund.organization.slug !== undefined ? props.fund.organization.slug : undefined,
          logoUrl: props.fund.organization.logoUrl !== undefined ? props.fund.organization.logoUrl : undefined,
          website: props.fund.organization.website !== undefined ? props.fund.organization.website : undefined,
          businessType: props.fund.organization.businessType !== undefined ? props.fund.organization.businessType : undefined,
          jurisdiction: props.fund.organization.jurisdiction !== undefined ? props.fund.organization.jurisdiction : undefined,
          regulatoryStatus: props.fund.organization.regulatoryStatus !== undefined ? props.fund.organization.regulatoryStatus : undefined,
          description: props.fund.organization.description !== undefined ? props.fund.organization.description : undefined,
          tradingDefaults: props.fund.organization.tradingDefaults !== undefined ? props.fund.organization.tradingDefaults : undefined,
          llmDefaults: props.fund.organization.llmDefaults !== undefined ? props.fund.organization.llmDefaults : undefined,
          deletedAt: props.fund.organization.deletedAt !== undefined ? props.fund.organization.deletedAt : undefined,
      members: props.fund.organization.members ? 
        Array.isArray(props.fund.organization.members) && props.fund.organization.members.length > 0 &&  props.fund.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.fund.organization.members.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.fund.organization.members.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            organizationId: item.organizationId !== undefined ? {
                equals: item.organizationId 
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
        },
      }
    } : undefined,
    assignments: props.fund.assignments ? 
    Array.isArray(props.fund.assignments) && props.fund.assignments.length > 0 && props.fund.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.fund.assignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.fund.assignments.map((item: any) => ({
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
      user: item.user ? 
      typeof item.user === 'object' && Object.keys(item.user).length === 1 && (Object.keys(item.user)[0] === 'id' || Object.keys(item.user)[0] === 'symbol')
? {
      connect: {
        id: item.user.id
      }
} : { upsert: {
          where: {
            id: item.user.id !== undefined ? {
                equals: item.user.id
              } : undefined,
            name: item.user.name !== undefined ? {
                equals: item.user.name
              } : undefined,
            email: item.user.email !== undefined ? {
                equals: item.user.email
              } : undefined,
            customerId: item.user.customerId !== undefined ? {
                equals: item.user.customerId
              } : undefined,
          },
          update: {
            id: item.user.id !== undefined ? {
                set: item.user.id
              } : undefined,
            name: item.user.name !== undefined ? {
                set: item.user.name
              } : undefined,
            email: item.user.email !== undefined ? {
                set: item.user.email
              } : undefined,
            emailVerified: item.user.emailVerified !== undefined ? {
                set: item.user.emailVerified
              } : undefined,
            image: item.user.image !== undefined ? {
                set: item.user.image
              } : undefined,
            deletedAt: item.user.deletedAt !== undefined ? {
                set: item.user.deletedAt
              } : undefined,
            role: item.user.role !== undefined ? {
                set: item.user.role
              } : undefined,
            bio: item.user.bio !== undefined ? {
                set: item.user.bio
              } : undefined,
            jobTitle: item.user.jobTitle !== undefined ? {
                set: item.user.jobTitle
              } : undefined,
            plan: item.user.plan !== undefined ? {
                set: item.user.plan
              } : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? {
                set: item.user.openaiAPIKey
              } : undefined,
            openaiModel: item.user.openaiModel !== undefined ? {
                set: item.user.openaiModel
              } : undefined,
            passwordHash: item.user.passwordHash !== undefined ? {
                set: item.user.passwordHash
              } : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? {
                set: item.user.avatarUrl
              } : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? {
                set: item.user.onboardingComplete
              } : undefined,
            signupCategory: item.user.signupCategory !== undefined ? {
                set: item.user.signupCategory
              } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.id !== undefined ? item.user.id : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            name: item.user.name !== undefined ? {
                equals: item.user.name 
               } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: props.fund.investments ? 
    Array.isArray(props.fund.investments) && props.fund.investments.length > 0 && props.fund.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.fund.investments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.fund.investments.map((item: any) => ({
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
      investor: item.investor ? 
      typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && (Object.keys(item.investor)[0] === 'id' || Object.keys(item.investor)[0] === 'symbol')
? {
      connect: {
        id: item.investor.id
      }
} : { upsert: {
          where: {
            id: item.investor.id !== undefined ? {
                equals: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email
              } : undefined,
            userId: item.investor.userId !== undefined ? {
                equals: item.investor.userId
              } : undefined,
          },
          update: {
            id: item.investor.id !== undefined ? {
                set: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                set: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                set: item.investor.email
              } : undefined,
            type: item.investor.type !== undefined ? {
                set: item.investor.type
              } : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? {
                set: item.investor.kycStatus
              } : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? {
                set: item.investor.walletAddress
              } : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? {
                set: item.investor.deletedAt
              } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          units: item.units !== undefined ? item.units : undefined,
          investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
          status: item.status !== undefined ? item.status : undefined,
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: props.fund.name !== undefined ? props.fund.name : undefined,
        slug: props.fund.slug !== undefined ? props.fund.slug : undefined,
        description: props.fund.description !== undefined ? props.fund.description : undefined,
        status: props.fund.status !== undefined ? props.fund.status : undefined,
        tradingOverrides: props.fund.tradingOverrides !== undefined ? props.fund.tradingOverrides : undefined,
        llmOverrides: props.fund.llmOverrides !== undefined ? props.fund.llmOverrides : undefined,
        deletedAt: props.fund.deletedAt !== undefined ? props.fund.deletedAt : undefined,
    organization: props.fund.organization ? 
      typeof props.fund.organization === 'object' && Object.keys(props.fund.organization).length === 1 && Object.keys(props.fund.organization)[0] === 'id'
    ? { connect: {
          id: props.fund.organization.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.fund.organization.id !== undefined ? props.fund.organization.id : undefined,
          slug: props.fund.organization.slug !== undefined ? props.fund.organization.slug : undefined,
          name: props.fund.organization.name !== undefined ? {
              equals: props.fund.organization.name 
             } : undefined,
        },
        create: {
          name: props.fund.organization.name !== undefined ? props.fund.organization.name : undefined,
          slug: props.fund.organization.slug !== undefined ? props.fund.organization.slug : undefined,
          logoUrl: props.fund.organization.logoUrl !== undefined ? props.fund.organization.logoUrl : undefined,
          website: props.fund.organization.website !== undefined ? props.fund.organization.website : undefined,
          businessType: props.fund.organization.businessType !== undefined ? props.fund.organization.businessType : undefined,
          jurisdiction: props.fund.organization.jurisdiction !== undefined ? props.fund.organization.jurisdiction : undefined,
          regulatoryStatus: props.fund.organization.regulatoryStatus !== undefined ? props.fund.organization.regulatoryStatus : undefined,
          description: props.fund.organization.description !== undefined ? props.fund.organization.description : undefined,
          tradingDefaults: props.fund.organization.tradingDefaults !== undefined ? props.fund.organization.tradingDefaults : undefined,
          llmDefaults: props.fund.organization.llmDefaults !== undefined ? props.fund.organization.llmDefaults : undefined,
          deletedAt: props.fund.organization.deletedAt !== undefined ? props.fund.organization.deletedAt : undefined,
      members: props.fund.organization.members ? 
        Array.isArray(props.fund.organization.members) && props.fund.organization.members.length > 0 &&  props.fund.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.fund.organization.members.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.fund.organization.members.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            organizationId: item.organizationId !== undefined ? {
                equals: item.organizationId 
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
        },
      }
    } : undefined,
    assignments: props.fund.assignments ? 
      Array.isArray(props.fund.assignments) && props.fund.assignments.length > 0 &&  props.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.assignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.assignments.map((item: any) => ({
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
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.id !== undefined ? item.user.id : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            name: item.user.name !== undefined ? {
                equals: item.user.name 
               } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: props.fund.investments ? 
      Array.isArray(props.fund.investments) && props.fund.investments.length > 0 &&  props.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.investments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.investments.map((item: any) => ({
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
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  alerts: props.alerts ? 
  Array.isArray(props.alerts) && props.alerts.length > 0 && props.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.alerts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.alerts.map((item: any) => ({
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
  trades: props.trades ? 
  Array.isArray(props.trades) && props.trades.length > 0 && props.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.trades.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.trades.map((item: any) => ({
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
        connect:      item.actions.map((item: any) => ({
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
  optionsPositions: props.optionsPositions ? 
  Array.isArray(props.optionsPositions) && props.optionsPositions.length > 0 && props.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.optionsPositions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.optionsPositions.map((item: any) => ({
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
      executions: item.contract.executions ? 
      Array.isArray(item.contract.executions) && item.contract.executions.length > 0 && item.contract.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.executions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.executions.map((item: any) => ({
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
      executions: item.contract.executions ? 
        Array.isArray(item.contract.executions) && item.contract.executions.length > 0 &&  item.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.executions.map((item: any) => ({
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
      executions: item.contract.executions ? 
        Array.isArray(item.contract.executions) && item.contract.executions.length > 0 &&  item.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.executions.map((item: any) => ({
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
    executions: item.executions ? 
      Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.executions.map((item: any) => ({
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
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
  optionsTradeExecutions: props.optionsTradeExecutions ? 
  Array.isArray(props.optionsTradeExecutions) && props.optionsTradeExecutions.length > 0 && props.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.optionsTradeExecutions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.optionsTradeExecutions.map((item: any) => ({
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
      brokerageAccount: item.position.brokerageAccount ? 
      typeof item.position.brokerageAccount === 'object' && Object.keys(item.position.brokerageAccount).length === 1 && (Object.keys(item.position.brokerageAccount)[0] === 'id' || Object.keys(item.position.brokerageAccount)[0] === 'symbol')
? {
      connect: {
        id: item.position.brokerageAccount.id
      }
} : { upsert: {
          where: {
            id: item.position.brokerageAccount.id !== undefined ? {
                equals: item.position.brokerageAccount.id
              } : undefined,
            fundId: item.position.brokerageAccount.fundId !== undefined ? {
                equals: item.position.brokerageAccount.fundId
              } : undefined,
          },
          update: {
            id: item.position.brokerageAccount.id !== undefined ? {
                set: item.position.brokerageAccount.id
              } : undefined,
            provider: item.position.brokerageAccount.provider !== undefined ? {
                set: item.position.brokerageAccount.provider
              } : undefined,
            type: item.position.brokerageAccount.type !== undefined ? {
                set: item.position.brokerageAccount.type
              } : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? {
                set: item.position.brokerageAccount.apiKey
              } : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? {
                set: item.position.brokerageAccount.apiSecret
              } : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? {
                set: item.position.brokerageAccount.configuration
              } : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? {
                set: item.position.brokerageAccount.marketOpen
              } : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? {
                set: item.position.brokerageAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? {
                set: item.position.brokerageAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? {
                set: item.position.brokerageAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? {
                set: item.position.brokerageAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? {
                set: item.position.brokerageAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.position.brokerageAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? {
                set: item.position.brokerageAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.position.brokerageAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.position.brokerageAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.position.brokerageAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.position.brokerageAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.position.brokerageAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.position.brokerageAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.position.brokerageAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.position.brokerageAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? {
                set: item.position.brokerageAccount.deletedAt
              } : undefined,
          },
          create: {
            provider: item.position.brokerageAccount.provider !== undefined ? item.position.brokerageAccount.provider : undefined,
            type: item.position.brokerageAccount.type !== undefined ? item.position.brokerageAccount.type : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? item.position.brokerageAccount.apiKey : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? item.position.brokerageAccount.apiSecret : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? item.position.brokerageAccount.configuration : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? item.position.brokerageAccount.marketOpen : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? item.position.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? item.position.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? item.position.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? item.position.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? item.position.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? item.position.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? item.position.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? item.position.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      contract: item.position.contract ? 
      typeof item.position.contract === 'object' && Object.keys(item.position.contract).length === 1 && (Object.keys(item.position.contract)[0] === 'id' || Object.keys(item.position.contract)[0] === 'symbol')
? {
      connect: {
        id: item.position.contract.id
      }
} : { upsert: {
          where: {
            id: item.position.contract.id !== undefined ? {
                equals: item.position.contract.id
              } : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                equals: item.position.contract.symbol
              } : undefined,
          },
          update: {
            id: item.position.contract.id !== undefined ? {
                set: item.position.contract.id
              } : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                set: item.position.contract.symbol
              } : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? {
                set: item.position.contract.contractSymbol
              } : undefined,
            optionType: item.position.contract.optionType !== undefined ? {
                set: item.position.contract.optionType
              } : undefined,
            strikePrice: item.position.contract.strikePrice !== undefined ? {
                set: item.position.contract.strikePrice
              } : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? {
                set: item.position.contract.expirationDate
              } : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? {
                set: item.position.contract.daysToExpiration
              } : undefined,
            lastPrice: item.position.contract.lastPrice !== undefined ? {
                set: item.position.contract.lastPrice
              } : undefined,
            bidPrice: item.position.contract.bidPrice !== undefined ? {
                set: item.position.contract.bidPrice
              } : undefined,
            askPrice: item.position.contract.askPrice !== undefined ? {
                set: item.position.contract.askPrice
              } : undefined,
            midPrice: item.position.contract.midPrice !== undefined ? {
                set: item.position.contract.midPrice
              } : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? {
                set: item.position.contract.bidSize
              } : undefined,
            askSize: item.position.contract.askSize !== undefined ? {
                set: item.position.contract.askSize
              } : undefined,
            volume: item.position.contract.volume !== undefined ? {
                set: item.position.contract.volume
              } : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? {
                set: item.position.contract.openInterest
              } : undefined,
            impliedVolatility: item.position.contract.impliedVolatility !== undefined ? {
                set: item.position.contract.impliedVolatility
              } : undefined,
            delta: item.position.contract.delta !== undefined ? {
                set: item.position.contract.delta
              } : undefined,
            gamma: item.position.contract.gamma !== undefined ? {
                set: item.position.contract.gamma
              } : undefined,
            theta: item.position.contract.theta !== undefined ? {
                set: item.position.contract.theta
              } : undefined,
            vega: item.position.contract.vega !== undefined ? {
                set: item.position.contract.vega
              } : undefined,
            rho: item.position.contract.rho !== undefined ? {
                set: item.position.contract.rho
              } : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? {
                set: item.position.contract.inTheMoney
              } : undefined,
            intrinsicValue: item.position.contract.intrinsicValue !== undefined ? {
                set: item.position.contract.intrinsicValue
              } : undefined,
            extrinsicValue: item.position.contract.extrinsicValue !== undefined ? {
                set: item.position.contract.extrinsicValue
              } : undefined,
            theoreticalPrice: item.position.contract.theoreticalPrice !== undefined ? {
                set: item.position.contract.theoreticalPrice
              } : undefined,
            underlyingPrice: item.position.contract.underlyingPrice !== undefined ? {
                set: item.position.contract.underlyingPrice
              } : undefined,
            metadata: item.position.contract.metadata !== undefined ? {
                set: item.position.contract.metadata
              } : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? {
                set: item.position.contract.dataTimestamp
              } : undefined,
          },
          create: {
            symbol: item.position.contract.symbol !== undefined ? item.position.contract.symbol : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? item.position.contract.contractSymbol : undefined,
            optionType: item.position.contract.optionType !== undefined ? item.position.contract.optionType : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? item.position.contract.expirationDate : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? item.position.contract.daysToExpiration : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? item.position.contract.bidSize : undefined,
            askSize: item.position.contract.askSize !== undefined ? item.position.contract.askSize : undefined,
            volume: item.position.contract.volume !== undefined ? item.position.contract.volume : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? item.position.contract.openInterest : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? item.position.contract.inTheMoney : undefined,
            metadata: item.position.contract.metadata !== undefined ? item.position.contract.metadata : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? item.position.contract.dataTimestamp : undefined,
          },
        }
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
      brokerageAccount: item.position.brokerageAccount ? 
        typeof item.position.brokerageAccount === 'object' && Object.keys(item.position.brokerageAccount).length === 1 && Object.keys(item.position.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.position.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.brokerageAccount.id !== undefined ? item.position.brokerageAccount.id : undefined,
            fundId: item.position.brokerageAccount.fundId !== undefined ? {
                equals: item.position.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.position.brokerageAccount.provider !== undefined ? item.position.brokerageAccount.provider : undefined,
            type: item.position.brokerageAccount.type !== undefined ? item.position.brokerageAccount.type : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? item.position.brokerageAccount.apiKey : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? item.position.brokerageAccount.apiSecret : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? item.position.brokerageAccount.configuration : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? item.position.brokerageAccount.marketOpen : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? item.position.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? item.position.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? item.position.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? item.position.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? item.position.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? item.position.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? item.position.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? item.position.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      contract: item.position.contract ? 
        typeof item.position.contract === 'object' && Object.keys(item.position.contract).length === 1 && Object.keys(item.position.contract)[0] === 'id'
    ? { connect: {
            id: item.position.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.contract.id !== undefined ? item.position.contract.id : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                equals: item.position.contract.symbol 
               } : undefined,
          },
          create: {
            symbol: item.position.contract.symbol !== undefined ? item.position.contract.symbol : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? item.position.contract.contractSymbol : undefined,
            optionType: item.position.contract.optionType !== undefined ? item.position.contract.optionType : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? item.position.contract.expirationDate : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? item.position.contract.daysToExpiration : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? item.position.contract.bidSize : undefined,
            askSize: item.position.contract.askSize !== undefined ? item.position.contract.askSize : undefined,
            volume: item.position.contract.volume !== undefined ? item.position.contract.volume : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? item.position.contract.openInterest : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? item.position.contract.inTheMoney : undefined,
            metadata: item.position.contract.metadata !== undefined ? item.position.contract.metadata : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? item.position.contract.dataTimestamp : undefined,
          },
        }
      } : undefined,
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
      positions: item.contract.positions ? 
      Array.isArray(item.contract.positions) && item.contract.positions.length > 0 && item.contract.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.positions.map((item: any) => ({
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
      brokerageAccount: item.position.brokerageAccount ? 
        typeof item.position.brokerageAccount === 'object' && Object.keys(item.position.brokerageAccount).length === 1 && Object.keys(item.position.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.position.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.brokerageAccount.id !== undefined ? item.position.brokerageAccount.id : undefined,
            fundId: item.position.brokerageAccount.fundId !== undefined ? {
                equals: item.position.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.position.brokerageAccount.provider !== undefined ? item.position.brokerageAccount.provider : undefined,
            type: item.position.brokerageAccount.type !== undefined ? item.position.brokerageAccount.type : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? item.position.brokerageAccount.apiKey : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? item.position.brokerageAccount.apiSecret : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? item.position.brokerageAccount.configuration : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? item.position.brokerageAccount.marketOpen : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? item.position.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? item.position.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? item.position.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? item.position.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? item.position.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? item.position.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? item.position.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? item.position.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      contract: item.position.contract ? 
        typeof item.position.contract === 'object' && Object.keys(item.position.contract).length === 1 && Object.keys(item.position.contract)[0] === 'id'
    ? { connect: {
            id: item.position.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.contract.id !== undefined ? item.position.contract.id : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                equals: item.position.contract.symbol 
               } : undefined,
          },
          create: {
            symbol: item.position.contract.symbol !== undefined ? item.position.contract.symbol : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? item.position.contract.contractSymbol : undefined,
            optionType: item.position.contract.optionType !== undefined ? item.position.contract.optionType : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? item.position.contract.expirationDate : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? item.position.contract.daysToExpiration : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? item.position.contract.bidSize : undefined,
            askSize: item.position.contract.askSize !== undefined ? item.position.contract.askSize : undefined,
            volume: item.position.contract.volume !== undefined ? item.position.contract.volume : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? item.position.contract.openInterest : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? item.position.contract.inTheMoney : undefined,
            metadata: item.position.contract.metadata !== undefined ? item.position.contract.metadata : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? item.position.contract.dataTimestamp : undefined,
          },
        }
      } : undefined,
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
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
          mutation: UPSERT_ONE_BROKERAGEACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneBrokerageAccount) {
          return response.data.upsertOneBrokerageAccount;
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
   * Update multiple BrokerageAccount records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of BrokerageAccount objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: BrokerageAccountType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_BROKERAGEACCOUNT = gql`
          mutation updateManyBrokerageAccount($data: [BrokerageAccountCreateManyInput!]!) {
            updateManyBrokerageAccount(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  fundId: prop.fundId !== undefined ? {
    equals: prop.fundId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  provider: prop.provider !== undefined ? {
            set: prop.provider 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  apiKey: prop.apiKey !== undefined ? {
            set: prop.apiKey 
           } : undefined,
  apiSecret: prop.apiSecret !== undefined ? {
            set: prop.apiSecret 
           } : undefined,
  configuration: prop.configuration !== undefined ? {
            set: prop.configuration 
           } : undefined,
  marketOpen: prop.marketOpen !== undefined ? {
            set: prop.marketOpen 
           } : undefined,
  realTime: prop.realTime !== undefined ? {
            set: prop.realTime 
           } : undefined,
  cryptoTradingEnabled: prop.cryptoTradingEnabled !== undefined ? {
            set: prop.cryptoTradingEnabled 
           } : undefined,
  cryptoTradingPairs: prop.cryptoTradingPairs !== undefined ? {
            set: prop.cryptoTradingPairs 
           } : undefined,
  cryptoTradeAllocationPct: prop.cryptoTradeAllocationPct !== undefined ? {
            set: prop.cryptoTradeAllocationPct 
           } : undefined,
  tradeAllocationPct: prop.tradeAllocationPct !== undefined ? {
            set: prop.tradeAllocationPct 
           } : undefined,
  autoAllocation: prop.autoAllocation !== undefined ? {
            set: prop.autoAllocation 
           } : undefined,
  minPercentageChange: prop.minPercentageChange !== undefined ? {
            set: prop.minPercentageChange 
           } : undefined,
  volumeThreshold: prop.volumeThreshold !== undefined ? {
            set: prop.volumeThreshold 
           } : undefined,
  enablePortfolioTrailingStop: prop.enablePortfolioTrailingStop !== undefined ? {
            set: prop.enablePortfolioTrailingStop 
           } : undefined,
  portfolioTrailPercent: prop.portfolioTrailPercent !== undefined ? {
            set: prop.portfolioTrailPercent 
           } : undefined,
  portfolioProfitThresholdPercent: prop.portfolioProfitThresholdPercent !== undefined ? {
            set: prop.portfolioProfitThresholdPercent 
           } : undefined,
  reducedPortfolioTrailPercent: prop.reducedPortfolioTrailPercent !== undefined ? {
            set: prop.reducedPortfolioTrailPercent 
           } : undefined,
  defaultTrailingStopPercentage100: prop.defaultTrailingStopPercentage100 !== undefined ? {
            set: prop.defaultTrailingStopPercentage100 
           } : undefined,
  firstTrailReductionThreshold100: prop.firstTrailReductionThreshold100 !== undefined ? {
            set: prop.firstTrailReductionThreshold100 
           } : undefined,
  secondTrailReductionThreshold100: prop.secondTrailReductionThreshold100 !== undefined ? {
            set: prop.secondTrailReductionThreshold100 
           } : undefined,
  firstReducedTrailPercentage100: prop.firstReducedTrailPercentage100 !== undefined ? {
            set: prop.firstReducedTrailPercentage100 
           } : undefined,
  secondReducedTrailPercentage100: prop.secondReducedTrailPercentage100 !== undefined ? {
            set: prop.secondReducedTrailPercentage100 
           } : undefined,
  minimumPriceChangePercent100: prop.minimumPriceChangePercent100 !== undefined ? {
            set: prop.minimumPriceChangePercent100 
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
  allocation: prop.allocation ? 
  typeof prop.allocation === 'object' && Object.keys(prop.allocation).length === 1 && (Object.keys(prop.allocation)[0] === 'id' || Object.keys(prop.allocation)[0] === 'symbol')
? {
  connect: {
    id: prop.allocation.id
  }
} : { upsert: {
      where: {
        id: prop.allocation.id !== undefined ? {
            equals: prop.allocation.id
          } : undefined,
        brokerageAccountId: prop.allocation.brokerageAccountId !== undefined ? {
            equals: prop.allocation.brokerageAccountId
          } : undefined,
      },
      update: {
        id: prop.allocation.id !== undefined ? {
            set: prop.allocation.id
          } : undefined,
        equities: prop.allocation.equities !== undefined ? {
            set: prop.allocation.equities
          } : undefined,
        optionsContracts: prop.allocation.optionsContracts !== undefined ? {
            set: prop.allocation.optionsContracts
          } : undefined,
        futures: prop.allocation.futures !== undefined ? {
            set: prop.allocation.futures
          } : undefined,
        etfs: prop.allocation.etfs !== undefined ? {
            set: prop.allocation.etfs
          } : undefined,
        forex: prop.allocation.forex !== undefined ? {
            set: prop.allocation.forex
          } : undefined,
        crypto: prop.allocation.crypto !== undefined ? {
            set: prop.allocation.crypto
          } : undefined,
        stocks: prop.allocation.stocks !== undefined ? {
            set: prop.allocation.stocks
          } : undefined,
        options: prop.allocation.options !== undefined ? {
            set: prop.allocation.options
          } : undefined,
      },
      create: {
        equities: prop.allocation.equities !== undefined ? prop.allocation.equities : undefined,
        optionsContracts: prop.allocation.optionsContracts !== undefined ? prop.allocation.optionsContracts : undefined,
        futures: prop.allocation.futures !== undefined ? prop.allocation.futures : undefined,
        etfs: prop.allocation.etfs !== undefined ? prop.allocation.etfs : undefined,
        forex: prop.allocation.forex !== undefined ? prop.allocation.forex : undefined,
        crypto: prop.allocation.crypto !== undefined ? prop.allocation.crypto : undefined,
        stocks: prop.allocation.stocks !== undefined ? prop.allocation.stocks : undefined,
        options: prop.allocation.options !== undefined ? prop.allocation.options : undefined,
      },
    }
  } : undefined,
  fund: prop.fund ? 
  typeof prop.fund === 'object' && Object.keys(prop.fund).length === 1 && (Object.keys(prop.fund)[0] === 'id' || Object.keys(prop.fund)[0] === 'symbol')
? {
  connect: {
    id: prop.fund.id
  }
} : { upsert: {
      where: {
        id: prop.fund.id !== undefined ? {
            equals: prop.fund.id
          } : undefined,
        name: prop.fund.name !== undefined ? {
            equals: prop.fund.name
          } : undefined,
        slug: prop.fund.slug !== undefined ? {
            equals: prop.fund.slug
          } : undefined,
        organizationId: prop.fund.organizationId !== undefined ? {
            equals: prop.fund.organizationId
          } : undefined,
      },
      update: {
        id: prop.fund.id !== undefined ? {
            set: prop.fund.id
          } : undefined,
        name: prop.fund.name !== undefined ? {
            set: prop.fund.name
          } : undefined,
        slug: prop.fund.slug !== undefined ? {
            set: prop.fund.slug
          } : undefined,
        description: prop.fund.description !== undefined ? {
            set: prop.fund.description
          } : undefined,
        status: prop.fund.status !== undefined ? {
            set: prop.fund.status
          } : undefined,
        tradingOverrides: prop.fund.tradingOverrides !== undefined ? {
            set: prop.fund.tradingOverrides
          } : undefined,
        llmOverrides: prop.fund.llmOverrides !== undefined ? {
            set: prop.fund.llmOverrides
          } : undefined,
        deletedAt: prop.fund.deletedAt !== undefined ? {
            set: prop.fund.deletedAt
          } : undefined,
    organization: prop.fund.organization ? 
    typeof prop.fund.organization === 'object' && Object.keys(prop.fund.organization).length === 1 && (Object.keys(prop.fund.organization)[0] === 'id' || Object.keys(prop.fund.organization)[0] === 'symbol')
? {
    connect: {
      id: prop.fund.organization.id
    }
} : { upsert: {
        where: {
          id: prop.fund.organization.id !== undefined ? {
              equals: prop.fund.organization.id
            } : undefined,
          name: prop.fund.organization.name !== undefined ? {
              equals: prop.fund.organization.name
            } : undefined,
          slug: prop.fund.organization.slug !== undefined ? {
              equals: prop.fund.organization.slug
            } : undefined,
        },
        update: {
          id: prop.fund.organization.id !== undefined ? {
              set: prop.fund.organization.id
            } : undefined,
          name: prop.fund.organization.name !== undefined ? {
              set: prop.fund.organization.name
            } : undefined,
          slug: prop.fund.organization.slug !== undefined ? {
              set: prop.fund.organization.slug
            } : undefined,
          logoUrl: prop.fund.organization.logoUrl !== undefined ? {
              set: prop.fund.organization.logoUrl
            } : undefined,
          website: prop.fund.organization.website !== undefined ? {
              set: prop.fund.organization.website
            } : undefined,
          businessType: prop.fund.organization.businessType !== undefined ? {
              set: prop.fund.organization.businessType
            } : undefined,
          jurisdiction: prop.fund.organization.jurisdiction !== undefined ? {
              set: prop.fund.organization.jurisdiction
            } : undefined,
          regulatoryStatus: prop.fund.organization.regulatoryStatus !== undefined ? {
              set: prop.fund.organization.regulatoryStatus
            } : undefined,
          description: prop.fund.organization.description !== undefined ? {
              set: prop.fund.organization.description
            } : undefined,
          tradingDefaults: prop.fund.organization.tradingDefaults !== undefined ? {
              set: prop.fund.organization.tradingDefaults
            } : undefined,
          llmDefaults: prop.fund.organization.llmDefaults !== undefined ? {
              set: prop.fund.organization.llmDefaults
            } : undefined,
          deletedAt: prop.fund.organization.deletedAt !== undefined ? {
              set: prop.fund.organization.deletedAt
            } : undefined,
      members: prop.fund.organization.members ? 
      Array.isArray(prop.fund.organization.members) && prop.fund.organization.members.length > 0 && prop.fund.organization.members.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.fund.organization.members.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.fund.organization.members.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            organizationId: item.organizationId !== undefined ? {
                equals: item.organizationId
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
        },
        create: {
          name: prop.fund.organization.name !== undefined ? prop.fund.organization.name : undefined,
          slug: prop.fund.organization.slug !== undefined ? prop.fund.organization.slug : undefined,
          logoUrl: prop.fund.organization.logoUrl !== undefined ? prop.fund.organization.logoUrl : undefined,
          website: prop.fund.organization.website !== undefined ? prop.fund.organization.website : undefined,
          businessType: prop.fund.organization.businessType !== undefined ? prop.fund.organization.businessType : undefined,
          jurisdiction: prop.fund.organization.jurisdiction !== undefined ? prop.fund.organization.jurisdiction : undefined,
          regulatoryStatus: prop.fund.organization.regulatoryStatus !== undefined ? prop.fund.organization.regulatoryStatus : undefined,
          description: prop.fund.organization.description !== undefined ? prop.fund.organization.description : undefined,
          tradingDefaults: prop.fund.organization.tradingDefaults !== undefined ? prop.fund.organization.tradingDefaults : undefined,
          llmDefaults: prop.fund.organization.llmDefaults !== undefined ? prop.fund.organization.llmDefaults : undefined,
          deletedAt: prop.fund.organization.deletedAt !== undefined ? prop.fund.organization.deletedAt : undefined,
      members: prop.fund.organization.members ? 
        Array.isArray(prop.fund.organization.members) && prop.fund.organization.members.length > 0 &&  prop.fund.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.fund.organization.members.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.fund.organization.members.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            organizationId: item.organizationId !== undefined ? {
                equals: item.organizationId 
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
        },
      }
    } : undefined,
    assignments: prop.fund.assignments ? 
    Array.isArray(prop.fund.assignments) && prop.fund.assignments.length > 0 && prop.fund.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.fund.assignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.fund.assignments.map((item: any) => ({
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
      user: item.user ? 
      typeof item.user === 'object' && Object.keys(item.user).length === 1 && (Object.keys(item.user)[0] === 'id' || Object.keys(item.user)[0] === 'symbol')
? {
      connect: {
        id: item.user.id
      }
} : { upsert: {
          where: {
            id: item.user.id !== undefined ? {
                equals: item.user.id
              } : undefined,
            name: item.user.name !== undefined ? {
                equals: item.user.name
              } : undefined,
            email: item.user.email !== undefined ? {
                equals: item.user.email
              } : undefined,
            customerId: item.user.customerId !== undefined ? {
                equals: item.user.customerId
              } : undefined,
          },
          update: {
            id: item.user.id !== undefined ? {
                set: item.user.id
              } : undefined,
            name: item.user.name !== undefined ? {
                set: item.user.name
              } : undefined,
            email: item.user.email !== undefined ? {
                set: item.user.email
              } : undefined,
            emailVerified: item.user.emailVerified !== undefined ? {
                set: item.user.emailVerified
              } : undefined,
            image: item.user.image !== undefined ? {
                set: item.user.image
              } : undefined,
            deletedAt: item.user.deletedAt !== undefined ? {
                set: item.user.deletedAt
              } : undefined,
            role: item.user.role !== undefined ? {
                set: item.user.role
              } : undefined,
            bio: item.user.bio !== undefined ? {
                set: item.user.bio
              } : undefined,
            jobTitle: item.user.jobTitle !== undefined ? {
                set: item.user.jobTitle
              } : undefined,
            plan: item.user.plan !== undefined ? {
                set: item.user.plan
              } : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? {
                set: item.user.openaiAPIKey
              } : undefined,
            openaiModel: item.user.openaiModel !== undefined ? {
                set: item.user.openaiModel
              } : undefined,
            passwordHash: item.user.passwordHash !== undefined ? {
                set: item.user.passwordHash
              } : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? {
                set: item.user.avatarUrl
              } : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? {
                set: item.user.onboardingComplete
              } : undefined,
            signupCategory: item.user.signupCategory !== undefined ? {
                set: item.user.signupCategory
              } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.id !== undefined ? item.user.id : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            name: item.user.name !== undefined ? {
                equals: item.user.name 
               } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: prop.fund.investments ? 
    Array.isArray(prop.fund.investments) && prop.fund.investments.length > 0 && prop.fund.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.fund.investments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.fund.investments.map((item: any) => ({
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
      investor: item.investor ? 
      typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && (Object.keys(item.investor)[0] === 'id' || Object.keys(item.investor)[0] === 'symbol')
? {
      connect: {
        id: item.investor.id
      }
} : { upsert: {
          where: {
            id: item.investor.id !== undefined ? {
                equals: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email
              } : undefined,
            userId: item.investor.userId !== undefined ? {
                equals: item.investor.userId
              } : undefined,
          },
          update: {
            id: item.investor.id !== undefined ? {
                set: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                set: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                set: item.investor.email
              } : undefined,
            type: item.investor.type !== undefined ? {
                set: item.investor.type
              } : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? {
                set: item.investor.kycStatus
              } : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? {
                set: item.investor.walletAddress
              } : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? {
                set: item.investor.deletedAt
              } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          units: item.units !== undefined ? item.units : undefined,
          investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
          status: item.status !== undefined ? item.status : undefined,
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: prop.fund.name !== undefined ? prop.fund.name : undefined,
        slug: prop.fund.slug !== undefined ? prop.fund.slug : undefined,
        description: prop.fund.description !== undefined ? prop.fund.description : undefined,
        status: prop.fund.status !== undefined ? prop.fund.status : undefined,
        tradingOverrides: prop.fund.tradingOverrides !== undefined ? prop.fund.tradingOverrides : undefined,
        llmOverrides: prop.fund.llmOverrides !== undefined ? prop.fund.llmOverrides : undefined,
        deletedAt: prop.fund.deletedAt !== undefined ? prop.fund.deletedAt : undefined,
    organization: prop.fund.organization ? 
      typeof prop.fund.organization === 'object' && Object.keys(prop.fund.organization).length === 1 && Object.keys(prop.fund.organization)[0] === 'id'
    ? { connect: {
          id: prop.fund.organization.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.fund.organization.id !== undefined ? prop.fund.organization.id : undefined,
          slug: prop.fund.organization.slug !== undefined ? prop.fund.organization.slug : undefined,
          name: prop.fund.organization.name !== undefined ? {
              equals: prop.fund.organization.name 
             } : undefined,
        },
        create: {
          name: prop.fund.organization.name !== undefined ? prop.fund.organization.name : undefined,
          slug: prop.fund.organization.slug !== undefined ? prop.fund.organization.slug : undefined,
          logoUrl: prop.fund.organization.logoUrl !== undefined ? prop.fund.organization.logoUrl : undefined,
          website: prop.fund.organization.website !== undefined ? prop.fund.organization.website : undefined,
          businessType: prop.fund.organization.businessType !== undefined ? prop.fund.organization.businessType : undefined,
          jurisdiction: prop.fund.organization.jurisdiction !== undefined ? prop.fund.organization.jurisdiction : undefined,
          regulatoryStatus: prop.fund.organization.regulatoryStatus !== undefined ? prop.fund.organization.regulatoryStatus : undefined,
          description: prop.fund.organization.description !== undefined ? prop.fund.organization.description : undefined,
          tradingDefaults: prop.fund.organization.tradingDefaults !== undefined ? prop.fund.organization.tradingDefaults : undefined,
          llmDefaults: prop.fund.organization.llmDefaults !== undefined ? prop.fund.organization.llmDefaults : undefined,
          deletedAt: prop.fund.organization.deletedAt !== undefined ? prop.fund.organization.deletedAt : undefined,
      members: prop.fund.organization.members ? 
        Array.isArray(prop.fund.organization.members) && prop.fund.organization.members.length > 0 &&  prop.fund.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.fund.organization.members.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.fund.organization.members.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            organizationId: item.organizationId !== undefined ? {
                equals: item.organizationId 
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
        },
      }
    } : undefined,
    assignments: prop.fund.assignments ? 
      Array.isArray(prop.fund.assignments) && prop.fund.assignments.length > 0 &&  prop.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.fund.assignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.fund.assignments.map((item: any) => ({
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
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.id !== undefined ? item.user.id : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            name: item.user.name !== undefined ? {
                equals: item.user.name 
               } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: prop.fund.investments ? 
      Array.isArray(prop.fund.investments) && prop.fund.investments.length > 0 &&  prop.fund.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.fund.investments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.fund.investments.map((item: any) => ({
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
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  alerts: prop.alerts ? 
  Array.isArray(prop.alerts) && prop.alerts.length > 0 && prop.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.alerts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.alerts.map((item: any) => ({
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
  trades: prop.trades ? 
  Array.isArray(prop.trades) && prop.trades.length > 0 && prop.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.trades.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.trades.map((item: any) => ({
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
        connect:      item.actions.map((item: any) => ({
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
  optionsPositions: prop.optionsPositions ? 
  Array.isArray(prop.optionsPositions) && prop.optionsPositions.length > 0 && prop.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.optionsPositions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.optionsPositions.map((item: any) => ({
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
      executions: item.contract.executions ? 
      Array.isArray(item.contract.executions) && item.contract.executions.length > 0 && item.contract.executions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.executions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.executions.map((item: any) => ({
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
      executions: item.contract.executions ? 
        Array.isArray(item.contract.executions) && item.contract.executions.length > 0 &&  item.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.executions.map((item: any) => ({
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
      executions: item.contract.executions ? 
        Array.isArray(item.contract.executions) && item.contract.executions.length > 0 &&  item.contract.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.executions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.executions.map((item: any) => ({
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
    executions: item.executions ? 
      Array.isArray(item.executions) && item.executions.length > 0 &&  item.executions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.executions.map((item: any) => ({
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
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
  optionsTradeExecutions: prop.optionsTradeExecutions ? 
  Array.isArray(prop.optionsTradeExecutions) && prop.optionsTradeExecutions.length > 0 && prop.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.optionsTradeExecutions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.optionsTradeExecutions.map((item: any) => ({
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
      brokerageAccount: item.position.brokerageAccount ? 
      typeof item.position.brokerageAccount === 'object' && Object.keys(item.position.brokerageAccount).length === 1 && (Object.keys(item.position.brokerageAccount)[0] === 'id' || Object.keys(item.position.brokerageAccount)[0] === 'symbol')
? {
      connect: {
        id: item.position.brokerageAccount.id
      }
} : { upsert: {
          where: {
            id: item.position.brokerageAccount.id !== undefined ? {
                equals: item.position.brokerageAccount.id
              } : undefined,
            fundId: item.position.brokerageAccount.fundId !== undefined ? {
                equals: item.position.brokerageAccount.fundId
              } : undefined,
          },
          update: {
            id: item.position.brokerageAccount.id !== undefined ? {
                set: item.position.brokerageAccount.id
              } : undefined,
            provider: item.position.brokerageAccount.provider !== undefined ? {
                set: item.position.brokerageAccount.provider
              } : undefined,
            type: item.position.brokerageAccount.type !== undefined ? {
                set: item.position.brokerageAccount.type
              } : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? {
                set: item.position.brokerageAccount.apiKey
              } : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? {
                set: item.position.brokerageAccount.apiSecret
              } : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? {
                set: item.position.brokerageAccount.configuration
              } : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? {
                set: item.position.brokerageAccount.marketOpen
              } : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? {
                set: item.position.brokerageAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? {
                set: item.position.brokerageAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? {
                set: item.position.brokerageAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? {
                set: item.position.brokerageAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? {
                set: item.position.brokerageAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.position.brokerageAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? {
                set: item.position.brokerageAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.position.brokerageAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.position.brokerageAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.position.brokerageAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.position.brokerageAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.position.brokerageAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.position.brokerageAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.position.brokerageAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.position.brokerageAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? {
                set: item.position.brokerageAccount.deletedAt
              } : undefined,
          },
          create: {
            provider: item.position.brokerageAccount.provider !== undefined ? item.position.brokerageAccount.provider : undefined,
            type: item.position.brokerageAccount.type !== undefined ? item.position.brokerageAccount.type : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? item.position.brokerageAccount.apiKey : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? item.position.brokerageAccount.apiSecret : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? item.position.brokerageAccount.configuration : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? item.position.brokerageAccount.marketOpen : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? item.position.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? item.position.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? item.position.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? item.position.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? item.position.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? item.position.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? item.position.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? item.position.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      contract: item.position.contract ? 
      typeof item.position.contract === 'object' && Object.keys(item.position.contract).length === 1 && (Object.keys(item.position.contract)[0] === 'id' || Object.keys(item.position.contract)[0] === 'symbol')
? {
      connect: {
        id: item.position.contract.id
      }
} : { upsert: {
          where: {
            id: item.position.contract.id !== undefined ? {
                equals: item.position.contract.id
              } : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                equals: item.position.contract.symbol
              } : undefined,
          },
          update: {
            id: item.position.contract.id !== undefined ? {
                set: item.position.contract.id
              } : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                set: item.position.contract.symbol
              } : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? {
                set: item.position.contract.contractSymbol
              } : undefined,
            optionType: item.position.contract.optionType !== undefined ? {
                set: item.position.contract.optionType
              } : undefined,
            strikePrice: item.position.contract.strikePrice !== undefined ? {
                set: item.position.contract.strikePrice
              } : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? {
                set: item.position.contract.expirationDate
              } : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? {
                set: item.position.contract.daysToExpiration
              } : undefined,
            lastPrice: item.position.contract.lastPrice !== undefined ? {
                set: item.position.contract.lastPrice
              } : undefined,
            bidPrice: item.position.contract.bidPrice !== undefined ? {
                set: item.position.contract.bidPrice
              } : undefined,
            askPrice: item.position.contract.askPrice !== undefined ? {
                set: item.position.contract.askPrice
              } : undefined,
            midPrice: item.position.contract.midPrice !== undefined ? {
                set: item.position.contract.midPrice
              } : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? {
                set: item.position.contract.bidSize
              } : undefined,
            askSize: item.position.contract.askSize !== undefined ? {
                set: item.position.contract.askSize
              } : undefined,
            volume: item.position.contract.volume !== undefined ? {
                set: item.position.contract.volume
              } : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? {
                set: item.position.contract.openInterest
              } : undefined,
            impliedVolatility: item.position.contract.impliedVolatility !== undefined ? {
                set: item.position.contract.impliedVolatility
              } : undefined,
            delta: item.position.contract.delta !== undefined ? {
                set: item.position.contract.delta
              } : undefined,
            gamma: item.position.contract.gamma !== undefined ? {
                set: item.position.contract.gamma
              } : undefined,
            theta: item.position.contract.theta !== undefined ? {
                set: item.position.contract.theta
              } : undefined,
            vega: item.position.contract.vega !== undefined ? {
                set: item.position.contract.vega
              } : undefined,
            rho: item.position.contract.rho !== undefined ? {
                set: item.position.contract.rho
              } : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? {
                set: item.position.contract.inTheMoney
              } : undefined,
            intrinsicValue: item.position.contract.intrinsicValue !== undefined ? {
                set: item.position.contract.intrinsicValue
              } : undefined,
            extrinsicValue: item.position.contract.extrinsicValue !== undefined ? {
                set: item.position.contract.extrinsicValue
              } : undefined,
            theoreticalPrice: item.position.contract.theoreticalPrice !== undefined ? {
                set: item.position.contract.theoreticalPrice
              } : undefined,
            underlyingPrice: item.position.contract.underlyingPrice !== undefined ? {
                set: item.position.contract.underlyingPrice
              } : undefined,
            metadata: item.position.contract.metadata !== undefined ? {
                set: item.position.contract.metadata
              } : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? {
                set: item.position.contract.dataTimestamp
              } : undefined,
          },
          create: {
            symbol: item.position.contract.symbol !== undefined ? item.position.contract.symbol : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? item.position.contract.contractSymbol : undefined,
            optionType: item.position.contract.optionType !== undefined ? item.position.contract.optionType : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? item.position.contract.expirationDate : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? item.position.contract.daysToExpiration : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? item.position.contract.bidSize : undefined,
            askSize: item.position.contract.askSize !== undefined ? item.position.contract.askSize : undefined,
            volume: item.position.contract.volume !== undefined ? item.position.contract.volume : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? item.position.contract.openInterest : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? item.position.contract.inTheMoney : undefined,
            metadata: item.position.contract.metadata !== undefined ? item.position.contract.metadata : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? item.position.contract.dataTimestamp : undefined,
          },
        }
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
      brokerageAccount: item.position.brokerageAccount ? 
        typeof item.position.brokerageAccount === 'object' && Object.keys(item.position.brokerageAccount).length === 1 && Object.keys(item.position.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.position.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.brokerageAccount.id !== undefined ? item.position.brokerageAccount.id : undefined,
            fundId: item.position.brokerageAccount.fundId !== undefined ? {
                equals: item.position.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.position.brokerageAccount.provider !== undefined ? item.position.brokerageAccount.provider : undefined,
            type: item.position.brokerageAccount.type !== undefined ? item.position.brokerageAccount.type : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? item.position.brokerageAccount.apiKey : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? item.position.brokerageAccount.apiSecret : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? item.position.brokerageAccount.configuration : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? item.position.brokerageAccount.marketOpen : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? item.position.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? item.position.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? item.position.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? item.position.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? item.position.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? item.position.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? item.position.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? item.position.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      contract: item.position.contract ? 
        typeof item.position.contract === 'object' && Object.keys(item.position.contract).length === 1 && Object.keys(item.position.contract)[0] === 'id'
    ? { connect: {
            id: item.position.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.contract.id !== undefined ? item.position.contract.id : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                equals: item.position.contract.symbol 
               } : undefined,
          },
          create: {
            symbol: item.position.contract.symbol !== undefined ? item.position.contract.symbol : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? item.position.contract.contractSymbol : undefined,
            optionType: item.position.contract.optionType !== undefined ? item.position.contract.optionType : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? item.position.contract.expirationDate : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? item.position.contract.daysToExpiration : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? item.position.contract.bidSize : undefined,
            askSize: item.position.contract.askSize !== undefined ? item.position.contract.askSize : undefined,
            volume: item.position.contract.volume !== undefined ? item.position.contract.volume : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? item.position.contract.openInterest : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? item.position.contract.inTheMoney : undefined,
            metadata: item.position.contract.metadata !== undefined ? item.position.contract.metadata : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? item.position.contract.dataTimestamp : undefined,
          },
        }
      } : undefined,
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
      positions: item.contract.positions ? 
      Array.isArray(item.contract.positions) && item.contract.positions.length > 0 && item.contract.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.contract.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.contract.positions.map((item: any) => ({
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
      brokerageAccount: item.position.brokerageAccount ? 
        typeof item.position.brokerageAccount === 'object' && Object.keys(item.position.brokerageAccount).length === 1 && Object.keys(item.position.brokerageAccount)[0] === 'id'
    ? { connect: {
            id: item.position.brokerageAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.brokerageAccount.id !== undefined ? item.position.brokerageAccount.id : undefined,
            fundId: item.position.brokerageAccount.fundId !== undefined ? {
                equals: item.position.brokerageAccount.fundId 
               } : undefined,
          },
          create: {
            provider: item.position.brokerageAccount.provider !== undefined ? item.position.brokerageAccount.provider : undefined,
            type: item.position.brokerageAccount.type !== undefined ? item.position.brokerageAccount.type : undefined,
            apiKey: item.position.brokerageAccount.apiKey !== undefined ? item.position.brokerageAccount.apiKey : undefined,
            apiSecret: item.position.brokerageAccount.apiSecret !== undefined ? item.position.brokerageAccount.apiSecret : undefined,
            configuration: item.position.brokerageAccount.configuration !== undefined ? item.position.brokerageAccount.configuration : undefined,
            marketOpen: item.position.brokerageAccount.marketOpen !== undefined ? item.position.brokerageAccount.marketOpen : undefined,
            realTime: item.position.brokerageAccount.realTime !== undefined ? item.position.brokerageAccount.realTime : undefined,
            cryptoTradingEnabled: item.position.brokerageAccount.cryptoTradingEnabled !== undefined ? item.position.brokerageAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.position.brokerageAccount.cryptoTradingPairs !== undefined ? {
                set: item.position.brokerageAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.position.brokerageAccount.cryptoTradeAllocationPct !== undefined ? item.position.brokerageAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.position.brokerageAccount.tradeAllocationPct !== undefined ? item.position.brokerageAccount.tradeAllocationPct : undefined,
            autoAllocation: item.position.brokerageAccount.autoAllocation !== undefined ? item.position.brokerageAccount.autoAllocation : undefined,
            minPercentageChange: item.position.brokerageAccount.minPercentageChange !== undefined ? item.position.brokerageAccount.minPercentageChange : undefined,
            volumeThreshold: item.position.brokerageAccount.volumeThreshold !== undefined ? item.position.brokerageAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.position.brokerageAccount.enablePortfolioTrailingStop !== undefined ? item.position.brokerageAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.position.brokerageAccount.portfolioTrailPercent !== undefined ? item.position.brokerageAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.position.brokerageAccount.portfolioProfitThresholdPercent !== undefined ? item.position.brokerageAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.position.brokerageAccount.reducedPortfolioTrailPercent !== undefined ? item.position.brokerageAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.position.brokerageAccount.defaultTrailingStopPercentage100 !== undefined ? item.position.brokerageAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.position.brokerageAccount.firstTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.position.brokerageAccount.secondTrailReductionThreshold100 !== undefined ? item.position.brokerageAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.position.brokerageAccount.firstReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.position.brokerageAccount.secondReducedTrailPercentage100 !== undefined ? item.position.brokerageAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.position.brokerageAccount.minimumPriceChangePercent100 !== undefined ? item.position.brokerageAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.position.brokerageAccount.deletedAt !== undefined ? item.position.brokerageAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      contract: item.position.contract ? 
        typeof item.position.contract === 'object' && Object.keys(item.position.contract).length === 1 && Object.keys(item.position.contract)[0] === 'id'
    ? { connect: {
            id: item.position.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.position.contract.id !== undefined ? item.position.contract.id : undefined,
            symbol: item.position.contract.symbol !== undefined ? {
                equals: item.position.contract.symbol 
               } : undefined,
          },
          create: {
            symbol: item.position.contract.symbol !== undefined ? item.position.contract.symbol : undefined,
            contractSymbol: item.position.contract.contractSymbol !== undefined ? item.position.contract.contractSymbol : undefined,
            optionType: item.position.contract.optionType !== undefined ? item.position.contract.optionType : undefined,
            expirationDate: item.position.contract.expirationDate !== undefined ? item.position.contract.expirationDate : undefined,
            daysToExpiration: item.position.contract.daysToExpiration !== undefined ? item.position.contract.daysToExpiration : undefined,
            bidSize: item.position.contract.bidSize !== undefined ? item.position.contract.bidSize : undefined,
            askSize: item.position.contract.askSize !== undefined ? item.position.contract.askSize : undefined,
            volume: item.position.contract.volume !== undefined ? item.position.contract.volume : undefined,
            openInterest: item.position.contract.openInterest !== undefined ? item.position.contract.openInterest : undefined,
            inTheMoney: item.position.contract.inTheMoney !== undefined ? item.position.contract.inTheMoney : undefined,
            metadata: item.position.contract.metadata !== undefined ? item.position.contract.metadata : undefined,
            dataTimestamp: item.position.contract.dataTimestamp !== undefined ? item.position.contract.dataTimestamp : undefined,
          },
        }
      } : undefined,
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
      positions: item.contract.positions ? 
        Array.isArray(item.contract.positions) && item.contract.positions.length > 0 &&  item.contract.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.contract.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.contract.positions.map((item: any) => ({
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
          mutation: UPDATE_MANY_BROKERAGEACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyBrokerageAccount) {
          return response.data.updateManyBrokerageAccount;
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
   * Delete a single BrokerageAccount record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted BrokerageAccount or null.
   */
  async delete(props: BrokerageAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<BrokerageAccountType> {
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

        const DELETE_ONE_BROKERAGEACCOUNT = gql`
          mutation deleteOneBrokerageAccount($where: BrokerageAccountWhereUniqueInput!) {
            deleteOneBrokerageAccount(where: $where) {
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
          mutation: DELETE_ONE_BROKERAGEACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneBrokerageAccount) {
          return response.data.deleteOneBrokerageAccount;
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
   * Retrieve a single BrokerageAccount record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved BrokerageAccount or null.
   */
  async get(props: BrokerageAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<BrokerageAccountType | null> {
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

        const GET_BROKERAGEACCOUNT = gql`
          query getBrokerageAccount($where: BrokerageAccountWhereUniqueInput!) {
            getBrokerageAccount(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  fundId: props.fundId !== undefined ? {
    equals: props.fundId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_BROKERAGEACCOUNT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getBrokerageAccount ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No BrokerageAccount found') {
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
   * Retrieve all BrokerageAccounts records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of BrokerageAccount records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<BrokerageAccountType[] | null> {
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

        const GET_ALL_BROKERAGEACCOUNT = gql`
          query getAllBrokerageAccount {
            brokerageAccounts {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_BROKERAGEACCOUNT,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.brokerageAccounts ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No BrokerageAccount found') {
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
   * Find multiple BrokerageAccount records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found BrokerageAccount records or null.
   */
  async findMany(props: BrokerageAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<BrokerageAccountType[] | null> {
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

        const FIND_MANY_BROKERAGEACCOUNT = gql`
          query findManyBrokerageAccount($where: BrokerageAccountWhereInput!) {
            brokerageAccounts(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  fundId: props.fundId !== undefined ? {
    equals: props.fundId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_BROKERAGEACCOUNT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.brokerageaccounts) {
          return response.data.brokerageAccounts;
        } else {
          return [] as BrokerageAccountType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No BrokerageAccount found') {
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
