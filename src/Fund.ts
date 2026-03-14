
  
import { Fund as FundType } from './generated/typegraphql-prisma/models/Fund';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the Fund model.
   */

  const selectionSet = `
    
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
      organizationId
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
        fundAssignments {
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
  }
  createdAt
  updatedAt
  deletedAt
  brokerageAccounts {
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
        authUserId
        name
        plan
        stripeCustomerId
        stripeSubscriptionId
        stripePriceId
        stripeCurrentPeriodEnd
        createdAt
        updatedAt
      }
      customerId
      accounts {
        id
        userId
        type
        provider
        providerAccountId
        refresh_token
        access_token
        expires_at
        token_type
        scope
        id_token
        session_state
        createdAt
        updatedAt
      }
      sessions {
        id
        sessionToken
        userId
        expires
        createdAt
        updatedAt
      }
      authenticators {
        id
        userId
        credentialID
        publicKey
        counter
        createdAt
        updatedAt
      }
      plan
      orgMemberships {
        id
        organizationId
        organization {
id
        }
        userId
        role
        permissions
        createdAt
        updatedAt
      }
      investorProfile {
        id
        name
        email
        type
        kycStatus
        walletAddress
        userId
        createdAt
        updatedAt
        deletedAt
        investments {
id
        }
      }
      openaiAPIKey
      openaiModel
      passwordHash
      avatarUrl
      onboardingComplete
      signupCategory
      linkedProviders {
        id
        userId
        provider
        providerAccountId
        email
        accessToken
        refreshToken
        expiresAt
        linkedAt
        updatedAt
      }
      accountLinkingRequests {
        id
        userId
        email
        provider
        providerAccountId
        status
        verificationToken
        userAgent
        ipAddress
        createdAt
        expiresAt
        verifiedAt
        approvedAt
        rejectedAt
      }
      reviewedWaitlistEntries {
        id
        email
        fullName
        companyName
        companyWebsite
        jobRole
        professionalInvestorConfirmed
        status
        queuePosition
        createdAt
        updatedAt
        reviewedAt
        reviewedById
        inviteToken {
id
        }
      }
      dashboardLayouts {
        id
        userId
        role
        layout
        createdAt
        updatedAt
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
        fundAssignments {
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

  `;

  export const Fund = {

    /**
     * Create a new Fund record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Fund or null.
     */

    /**
     * Create a new Fund record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created Fund or null.
     */
    async create(props: FundType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FundType> {
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

          const CREATE_ONE_FUND = gql`
              mutation createOneFund($data: FundCreateInput!) {
                createOneFund(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                name: props.name !== undefined ? props.name : undefined,
  slug: props.slug !== undefined ? props.slug : undefined,
  description: props.description !== undefined ? props.description : undefined,
  status: props.status !== undefined ? props.status : undefined,
  tradingOverrides: props.tradingOverrides !== undefined ? props.tradingOverrides : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  organization: props.organization ? 
    typeof props.organization === 'object' && Object.keys(props.organization).length === 1 && Object.keys(props.organization)[0] === 'id'
    ? { connect: {
        id: props.organization.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.organization.id !== undefined ? props.organization.id : undefined,
        slug: props.organization.slug !== undefined ? props.organization.slug : undefined,
        name: props.organization.name !== undefined ? {
            equals: props.organization.name 
           } : undefined,
      },
      create: {
        name: props.organization.name !== undefined ? props.organization.name : undefined,
        slug: props.organization.slug !== undefined ? props.organization.slug : undefined,
        logoUrl: props.organization.logoUrl !== undefined ? props.organization.logoUrl : undefined,
        website: props.organization.website !== undefined ? props.organization.website : undefined,
        businessType: props.organization.businessType !== undefined ? props.organization.businessType : undefined,
        jurisdiction: props.organization.jurisdiction !== undefined ? props.organization.jurisdiction : undefined,
        regulatoryStatus: props.organization.regulatoryStatus !== undefined ? props.organization.regulatoryStatus : undefined,
        description: props.organization.description !== undefined ? props.organization.description : undefined,
        tradingDefaults: props.organization.tradingDefaults !== undefined ? props.organization.tradingDefaults : undefined,
        deletedAt: props.organization.deletedAt !== undefined ? props.organization.deletedAt : undefined,
    members: props.organization.members ? 
      Array.isArray(props.organization.members) && props.organization.members.length > 0 &&  props.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.organization.members.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.organization.members.map((item: any) => ({
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
      },
    }
  } : undefined,
  brokerageAccounts: props.brokerageAccounts ? 
    Array.isArray(props.brokerageAccounts) && props.brokerageAccounts.length > 0 &&  props.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.brokerageAccounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.brokerageAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        fundId: item.fundId !== undefined ? {
            equals: item.fundId 
           } : undefined,
      },
      create: {
        provider: item.provider !== undefined ? item.provider : undefined,
        type: item.type !== undefined ? item.type : undefined,
        apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
        apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
            set: item.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
        autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
    allocation: item.allocation ? 
      typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
          id: item.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.allocation.id !== undefined ? item.allocation.id : undefined,
          brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
        },
        create: {
          equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
          optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
          futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
          etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
          forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
          crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
          stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
          options: item.allocation.options !== undefined ? item.allocation.options : undefined,
        },
      }
    } : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
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
    trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
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
    optionsPositions: item.optionsPositions ? 
      Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.optionsPositions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
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
    optionsTradeExecutions: item.optionsTradeExecutions ? 
      Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.optionsTradeExecutions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
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
    }))
  } : undefined,
  assignments: props.assignments ? 
    Array.isArray(props.assignments) && props.assignments.length > 0 &&  props.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.assignments.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.assignments.map((item: any) => ({
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
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
      orgMemberships: item.user.orgMemberships ? 
        Array.isArray(item.user.orgMemberships) && item.user.orgMemberships.length > 0 &&  item.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.orgMemberships.map((item: any) => ({
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
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  investments: props.investments ? 
    Array.isArray(props.investments) && props.investments.length > 0 &&  props.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.investments.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.investments.map((item: any) => ({
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
      user: item.investor.user ? 
        typeof item.investor.user === 'object' && Object.keys(item.investor.user).length === 1 && Object.keys(item.investor.user)[0] === 'id'
    ? { connect: {
            id: item.investor.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.user.id !== undefined ? item.investor.user.id : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            name: item.investor.user.name !== undefined ? {
                equals: item.investor.user.name 
               } : undefined,
          },
          create: {
            name: item.investor.user.name !== undefined ? item.investor.user.name : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? item.investor.user.emailVerified : undefined,
            image: item.investor.user.image !== undefined ? item.investor.user.image : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? item.investor.user.deletedAt : undefined,
            role: item.investor.user.role !== undefined ? item.investor.user.role : undefined,
            bio: item.investor.user.bio !== undefined ? item.investor.user.bio : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? item.investor.user.jobTitle : undefined,
            plan: item.investor.user.plan !== undefined ? item.investor.user.plan : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? item.investor.user.openaiAPIKey : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? item.investor.user.openaiModel : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? item.investor.user.passwordHash : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? item.investor.user.avatarUrl : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? item.investor.user.onboardingComplete : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? item.investor.user.signupCategory : undefined,
          },
        }
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
            mutation: CREATE_ONE_FUND,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneFund) {
            return response.data.createOneFund;
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
   * Create multiple Fund records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Fund objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: FundType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_FUND = gql`
          mutation createManyFund($data: [FundCreateManyInput!]!) {
            createManyFund(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      name: prop.name !== undefined ? prop.name : undefined,
  slug: prop.slug !== undefined ? prop.slug : undefined,
  description: prop.description !== undefined ? prop.description : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  tradingOverrides: prop.tradingOverrides !== undefined ? prop.tradingOverrides : undefined,
  organizationId: prop.organizationId !== undefined ? prop.organizationId : undefined,
  deletedAt: prop.deletedAt !== undefined ? prop.deletedAt : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_FUND,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyFund) {
          return response.data.createManyFund;
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
   * Update a single Fund record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Fund or null.
   */
  async update(props: FundType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FundType> {
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

        const UPDATE_ONE_FUND = gql`
          mutation updateOneFund($data: FundUpdateInput!, $where: FundWhereUniqueInput!) {
            updateOneFund(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  slug: props.slug !== undefined ? {
    equals: props.slug 
  } : undefined,
  organizationId: props.organizationId !== undefined ? {
    equals: props.organizationId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  slug: props.slug !== undefined ? {
            set: props.slug 
           } : undefined,
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  tradingOverrides: props.tradingOverrides !== undefined ? {
            set: props.tradingOverrides 
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
  organization: props.organization ? 
  typeof props.organization === 'object' && Object.keys(props.organization).length === 1 && (Object.keys(props.organization)[0] === 'id' || Object.keys(props.organization)[0] === 'symbol')
? {
  connect: {
    id: props.organization.id
  }
} : { upsert: {
      where: {
        id: props.organization.id !== undefined ? {
            equals: props.organization.id
          } : undefined,
        name: props.organization.name !== undefined ? {
            equals: props.organization.name
          } : undefined,
        slug: props.organization.slug !== undefined ? {
            equals: props.organization.slug
          } : undefined,
      },
      update: {
        id: props.organization.id !== undefined ? {
            set: props.organization.id
          } : undefined,
        name: props.organization.name !== undefined ? {
            set: props.organization.name
          } : undefined,
        slug: props.organization.slug !== undefined ? {
            set: props.organization.slug
          } : undefined,
        logoUrl: props.organization.logoUrl !== undefined ? {
            set: props.organization.logoUrl
          } : undefined,
        website: props.organization.website !== undefined ? {
            set: props.organization.website
          } : undefined,
        businessType: props.organization.businessType !== undefined ? {
            set: props.organization.businessType
          } : undefined,
        jurisdiction: props.organization.jurisdiction !== undefined ? {
            set: props.organization.jurisdiction
          } : undefined,
        regulatoryStatus: props.organization.regulatoryStatus !== undefined ? {
            set: props.organization.regulatoryStatus
          } : undefined,
        description: props.organization.description !== undefined ? {
            set: props.organization.description
          } : undefined,
        tradingDefaults: props.organization.tradingDefaults !== undefined ? {
            set: props.organization.tradingDefaults
          } : undefined,
        deletedAt: props.organization.deletedAt !== undefined ? {
            set: props.organization.deletedAt
          } : undefined,
    members: props.organization.members ? 
    Array.isArray(props.organization.members) && props.organization.members.length > 0 && props.organization.members.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.organization.members.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.organization.members.map((item: any) => ({
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
      },
      create: {
        name: props.organization.name !== undefined ? props.organization.name : undefined,
        slug: props.organization.slug !== undefined ? props.organization.slug : undefined,
        logoUrl: props.organization.logoUrl !== undefined ? props.organization.logoUrl : undefined,
        website: props.organization.website !== undefined ? props.organization.website : undefined,
        businessType: props.organization.businessType !== undefined ? props.organization.businessType : undefined,
        jurisdiction: props.organization.jurisdiction !== undefined ? props.organization.jurisdiction : undefined,
        regulatoryStatus: props.organization.regulatoryStatus !== undefined ? props.organization.regulatoryStatus : undefined,
        description: props.organization.description !== undefined ? props.organization.description : undefined,
        tradingDefaults: props.organization.tradingDefaults !== undefined ? props.organization.tradingDefaults : undefined,
        deletedAt: props.organization.deletedAt !== undefined ? props.organization.deletedAt : undefined,
    members: props.organization.members ? 
      Array.isArray(props.organization.members) && props.organization.members.length > 0 &&  props.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.organization.members.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.organization.members.map((item: any) => ({
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
      },
    }
  } : undefined,
  brokerageAccounts: props.brokerageAccounts ? 
  Array.isArray(props.brokerageAccounts) && props.brokerageAccounts.length > 0 && props.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.brokerageAccounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.brokerageAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        fundId: item.fundId !== undefined ? {
            equals: item.fundId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        provider: item.provider !== undefined ? {
            set: item.provider
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        apiKey: item.apiKey !== undefined ? {
            set: item.apiKey
          } : undefined,
        apiSecret: item.apiSecret !== undefined ? {
            set: item.apiSecret
          } : undefined,
        configuration: item.configuration !== undefined ? {
            set: item.configuration
          } : undefined,
        marketOpen: item.marketOpen !== undefined ? {
            set: item.marketOpen
          } : undefined,
        realTime: item.realTime !== undefined ? {
            set: item.realTime
          } : undefined,
        cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? {
            set: item.cryptoTradingEnabled
          } : undefined,
        cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
            set: item.cryptoTradingPairs
          } : undefined,
        cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? {
            set: item.cryptoTradeAllocationPct
          } : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
            set: item.tradeAllocationPct
          } : undefined,
        autoAllocation: item.autoAllocation !== undefined ? {
            set: item.autoAllocation
          } : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? {
            set: item.minPercentageChange
          } : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? {
            set: item.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
            set: item.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
            set: item.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
            set: item.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
            set: item.reducedPortfolioTrailPercent
          } : undefined,
        defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? {
            set: item.defaultTrailingStopPercentage100
          } : undefined,
        firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? {
            set: item.firstTrailReductionThreshold100
          } : undefined,
        secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? {
            set: item.secondTrailReductionThreshold100
          } : undefined,
        firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? {
            set: item.firstReducedTrailPercentage100
          } : undefined,
        secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? {
            set: item.secondReducedTrailPercentage100
          } : undefined,
        minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? {
            set: item.minimumPriceChangePercent100
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
    allocation: item.allocation ? 
    typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && (Object.keys(item.allocation)[0] === 'id' || Object.keys(item.allocation)[0] === 'symbol')
? {
    connect: {
      id: item.allocation.id
    }
} : { upsert: {
        where: {
          id: item.allocation.id !== undefined ? {
              equals: item.allocation.id
            } : undefined,
          brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? {
              equals: item.allocation.brokerageAccountId
            } : undefined,
        },
        update: {
          id: item.allocation.id !== undefined ? {
              set: item.allocation.id
            } : undefined,
          equities: item.allocation.equities !== undefined ? {
              set: item.allocation.equities
            } : undefined,
          optionsContracts: item.allocation.optionsContracts !== undefined ? {
              set: item.allocation.optionsContracts
            } : undefined,
          futures: item.allocation.futures !== undefined ? {
              set: item.allocation.futures
            } : undefined,
          etfs: item.allocation.etfs !== undefined ? {
              set: item.allocation.etfs
            } : undefined,
          forex: item.allocation.forex !== undefined ? {
              set: item.allocation.forex
            } : undefined,
          crypto: item.allocation.crypto !== undefined ? {
              set: item.allocation.crypto
            } : undefined,
          stocks: item.allocation.stocks !== undefined ? {
              set: item.allocation.stocks
            } : undefined,
          options: item.allocation.options !== undefined ? {
              set: item.allocation.options
            } : undefined,
        },
        create: {
          equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
          optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
          futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
          etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
          forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
          crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
          stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
          options: item.allocation.options !== undefined ? item.allocation.options : undefined,
        },
      }
    } : undefined,
    alerts: item.alerts ? 
    Array.isArray(item.alerts) && item.alerts.length > 0 && item.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.alerts.map((item: any) => ({
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
    trades: item.trades ? 
    Array.isArray(item.trades) && item.trades.length > 0 && item.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.trades.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.trades.map((item: any) => ({
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
    optionsPositions: item.optionsPositions ? 
    Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 && item.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.optionsPositions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.optionsPositions.map((item: any) => ({
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
    optionsTradeExecutions: item.optionsTradeExecutions ? 
    Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 && item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.optionsTradeExecutions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.optionsTradeExecutions.map((item: any) => ({
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
        provider: item.provider !== undefined ? item.provider : undefined,
        type: item.type !== undefined ? item.type : undefined,
        apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
        apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
            set: item.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
        autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
    allocation: item.allocation ? 
      typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
          id: item.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.allocation.id !== undefined ? item.allocation.id : undefined,
          brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
        },
        create: {
          equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
          optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
          futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
          etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
          forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
          crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
          stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
          options: item.allocation.options !== undefined ? item.allocation.options : undefined,
        },
      }
    } : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
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
    trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
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
    optionsPositions: item.optionsPositions ? 
      Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.optionsPositions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
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
    optionsTradeExecutions: item.optionsTradeExecutions ? 
      Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.optionsTradeExecutions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
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
    }))
  } : undefined,
  assignments: props.assignments ? 
  Array.isArray(props.assignments) && props.assignments.length > 0 && props.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.assignments.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.assignments.map((item: any) => ({
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
      customer: item.user.customer ? 
      typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && (Object.keys(item.user.customer)[0] === 'id' || Object.keys(item.user.customer)[0] === 'symbol')
? {
      connect: {
        id: item.user.customer.id
      }
} : { upsert: {
          where: {
            id: item.user.customer.id !== undefined ? {
                equals: item.user.customer.id
              } : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                equals: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                equals: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: item.user.customer.authUserId !== undefined ? {
                set: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                set: item.user.customer.name
              } : undefined,
            plan: item.user.customer.plan !== undefined ? {
                set: item.user.customer.plan
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                set: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                set: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                set: item.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: item.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
      Array.isArray(item.user.accounts) && item.user.accounts.length > 0 && item.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            refresh_token: item.refresh_token !== undefined ? {
                set: item.refresh_token
              } : undefined,
            access_token: item.access_token !== undefined ? {
                set: item.access_token
              } : undefined,
            expires_at: item.expires_at !== undefined ? {
                set: item.expires_at
              } : undefined,
            token_type: item.token_type !== undefined ? {
                set: item.token_type
              } : undefined,
            scope: item.scope !== undefined ? {
                set: item.scope
              } : undefined,
            id_token: item.id_token !== undefined ? {
                set: item.id_token
              } : undefined,
            session_state: item.session_state !== undefined ? {
                set: item.session_state
              } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: item.user.sessions ? 
      Array.isArray(item.user.sessions) && item.user.sessions.length > 0 && item.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            sessionToken: item.sessionToken !== undefined ? {
                set: item.sessionToken
              } : undefined,
            expires: item.expires !== undefined ? {
                set: item.expires
              } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: item.user.authenticators ? 
      Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 && item.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            credentialID: item.credentialID !== undefined ? {
                set: item.credentialID
              } : undefined,
            publicKey: item.publicKey !== undefined ? {
                set: item.publicKey
              } : undefined,
            counter: item.counter !== undefined ? {
                set: item.counter
              } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
      orgMemberships: item.user.orgMemberships ? 
      Array.isArray(item.user.orgMemberships) && item.user.orgMemberships.length > 0 && item.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.orgMemberships.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.orgMemberships.map((item: any) => ({
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
      investorProfile: item.user.investorProfile ? 
      typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && (Object.keys(item.user.investorProfile)[0] === 'id' || Object.keys(item.user.investorProfile)[0] === 'symbol')
? {
      connect: {
        id: item.user.investorProfile.id
      }
} : { upsert: {
          where: {
            id: item.user.investorProfile.id !== undefined ? {
                equals: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email
              } : undefined,
            userId: item.user.investorProfile.userId !== undefined ? {
                equals: item.user.investorProfile.userId
              } : undefined,
          },
          update: {
            id: item.user.investorProfile.id !== undefined ? {
                set: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                set: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                set: item.user.investorProfile.email
              } : undefined,
            type: item.user.investorProfile.type !== undefined ? {
                set: item.user.investorProfile.type
              } : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? {
                set: item.user.investorProfile.kycStatus
              } : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? {
                set: item.user.investorProfile.walletAddress
              } : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? {
                set: item.user.investorProfile.deletedAt
              } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
      Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 && item.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            accessToken: item.accessToken !== undefined ? {
                set: item.accessToken
              } : undefined,
            refreshToken: item.refreshToken !== undefined ? {
                set: item.refreshToken
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            linkedAt: item.linkedAt !== undefined ? {
                set: item.linkedAt
              } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
      Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 && item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            verificationToken: item.verificationToken !== undefined ? {
                set: item.verificationToken
              } : undefined,
            userAgent: item.userAgent !== undefined ? {
                set: item.userAgent
              } : undefined,
            ipAddress: item.ipAddress !== undefined ? {
                set: item.ipAddress
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            verifiedAt: item.verifiedAt !== undefined ? {
                set: item.verifiedAt
              } : undefined,
            approvedAt: item.approvedAt !== undefined ? {
                set: item.approvedAt
              } : undefined,
            rejectedAt: item.rejectedAt !== undefined ? {
                set: item.rejectedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
      Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 && item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
            reviewedById: item.reviewedById !== undefined ? {
                equals: item.reviewedById
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            fullName: item.fullName !== undefined ? {
                set: item.fullName
              } : undefined,
            companyName: item.companyName !== undefined ? {
                set: item.companyName
              } : undefined,
            companyWebsite: item.companyWebsite !== undefined ? {
                set: item.companyWebsite
              } : undefined,
            jobRole: item.jobRole !== undefined ? {
                set: item.jobRole
              } : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? {
                set: item.professionalInvestorConfirmed
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            queuePosition: item.queuePosition !== undefined ? {
                set: item.queuePosition
              } : undefined,
            reviewedAt: item.reviewedAt !== undefined ? {
                set: item.reviewedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
      Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 && item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.dashboardLayouts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            layout: item.layout !== undefined ? {
                set: item.layout
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
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
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
      orgMemberships: item.user.orgMemberships ? 
        Array.isArray(item.user.orgMemberships) && item.user.orgMemberships.length > 0 &&  item.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.orgMemberships.map((item: any) => ({
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
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
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
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
      orgMemberships: item.user.orgMemberships ? 
        Array.isArray(item.user.orgMemberships) && item.user.orgMemberships.length > 0 &&  item.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.orgMemberships.map((item: any) => ({
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
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  investments: props.investments ? 
  Array.isArray(props.investments) && props.investments.length > 0 && props.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.investments.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.investments.map((item: any) => ({
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
      user: item.investor.user ? 
      typeof item.investor.user === 'object' && Object.keys(item.investor.user).length === 1 && (Object.keys(item.investor.user)[0] === 'id' || Object.keys(item.investor.user)[0] === 'symbol')
? {
      connect: {
        id: item.investor.user.id
      }
} : { upsert: {
          where: {
            id: item.investor.user.id !== undefined ? {
                equals: item.investor.user.id
              } : undefined,
            name: item.investor.user.name !== undefined ? {
                equals: item.investor.user.name
              } : undefined,
            email: item.investor.user.email !== undefined ? {
                equals: item.investor.user.email
              } : undefined,
            customerId: item.investor.user.customerId !== undefined ? {
                equals: item.investor.user.customerId
              } : undefined,
          },
          update: {
            id: item.investor.user.id !== undefined ? {
                set: item.investor.user.id
              } : undefined,
            name: item.investor.user.name !== undefined ? {
                set: item.investor.user.name
              } : undefined,
            email: item.investor.user.email !== undefined ? {
                set: item.investor.user.email
              } : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? {
                set: item.investor.user.emailVerified
              } : undefined,
            image: item.investor.user.image !== undefined ? {
                set: item.investor.user.image
              } : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? {
                set: item.investor.user.deletedAt
              } : undefined,
            role: item.investor.user.role !== undefined ? {
                set: item.investor.user.role
              } : undefined,
            bio: item.investor.user.bio !== undefined ? {
                set: item.investor.user.bio
              } : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? {
                set: item.investor.user.jobTitle
              } : undefined,
            plan: item.investor.user.plan !== undefined ? {
                set: item.investor.user.plan
              } : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? {
                set: item.investor.user.openaiAPIKey
              } : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? {
                set: item.investor.user.openaiModel
              } : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? {
                set: item.investor.user.passwordHash
              } : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? {
                set: item.investor.user.avatarUrl
              } : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? {
                set: item.investor.user.onboardingComplete
              } : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? {
                set: item.investor.user.signupCategory
              } : undefined,
          },
          create: {
            name: item.investor.user.name !== undefined ? item.investor.user.name : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? item.investor.user.emailVerified : undefined,
            image: item.investor.user.image !== undefined ? item.investor.user.image : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? item.investor.user.deletedAt : undefined,
            role: item.investor.user.role !== undefined ? item.investor.user.role : undefined,
            bio: item.investor.user.bio !== undefined ? item.investor.user.bio : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? item.investor.user.jobTitle : undefined,
            plan: item.investor.user.plan !== undefined ? item.investor.user.plan : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? item.investor.user.openaiAPIKey : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? item.investor.user.openaiModel : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? item.investor.user.passwordHash : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? item.investor.user.avatarUrl : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? item.investor.user.onboardingComplete : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? item.investor.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
        create: {
          name: item.investor.name !== undefined ? item.investor.name : undefined,
          email: item.investor.email !== undefined ? item.investor.email : undefined,
          type: item.investor.type !== undefined ? item.investor.type : undefined,
          kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
          walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
          deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
      user: item.investor.user ? 
        typeof item.investor.user === 'object' && Object.keys(item.investor.user).length === 1 && Object.keys(item.investor.user)[0] === 'id'
    ? { connect: {
            id: item.investor.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.user.id !== undefined ? item.investor.user.id : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            name: item.investor.user.name !== undefined ? {
                equals: item.investor.user.name 
               } : undefined,
          },
          create: {
            name: item.investor.user.name !== undefined ? item.investor.user.name : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? item.investor.user.emailVerified : undefined,
            image: item.investor.user.image !== undefined ? item.investor.user.image : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? item.investor.user.deletedAt : undefined,
            role: item.investor.user.role !== undefined ? item.investor.user.role : undefined,
            bio: item.investor.user.bio !== undefined ? item.investor.user.bio : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? item.investor.user.jobTitle : undefined,
            plan: item.investor.user.plan !== undefined ? item.investor.user.plan : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? item.investor.user.openaiAPIKey : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? item.investor.user.openaiModel : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? item.investor.user.passwordHash : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? item.investor.user.avatarUrl : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? item.investor.user.onboardingComplete : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? item.investor.user.signupCategory : undefined,
          },
        }
      } : undefined,
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
      user: item.investor.user ? 
        typeof item.investor.user === 'object' && Object.keys(item.investor.user).length === 1 && Object.keys(item.investor.user)[0] === 'id'
    ? { connect: {
            id: item.investor.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.user.id !== undefined ? item.investor.user.id : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            name: item.investor.user.name !== undefined ? {
                equals: item.investor.user.name 
               } : undefined,
          },
          create: {
            name: item.investor.user.name !== undefined ? item.investor.user.name : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? item.investor.user.emailVerified : undefined,
            image: item.investor.user.image !== undefined ? item.investor.user.image : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? item.investor.user.deletedAt : undefined,
            role: item.investor.user.role !== undefined ? item.investor.user.role : undefined,
            bio: item.investor.user.bio !== undefined ? item.investor.user.bio : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? item.investor.user.jobTitle : undefined,
            plan: item.investor.user.plan !== undefined ? item.investor.user.plan : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? item.investor.user.openaiAPIKey : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? item.investor.user.openaiModel : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? item.investor.user.passwordHash : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? item.investor.user.avatarUrl : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? item.investor.user.onboardingComplete : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? item.investor.user.signupCategory : undefined,
          },
        }
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
          mutation: UPDATE_ONE_FUND,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneFund) {
          return response.data.updateOneFund;
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
   * Upsert a single Fund record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Fund or null.
   */
  async upsert(props: FundType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FundType> {
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

        const UPSERT_ONE_FUND = gql`
          mutation upsertOneFund($where: FundWhereUniqueInput!, $create: FundCreateInput!, $update: FundUpdateInput!) {
            upsertOneFund(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  slug: props.slug !== undefined ? {
    equals: props.slug 
  } : undefined,
  organizationId: props.organizationId !== undefined ? {
    equals: props.organizationId 
  } : undefined,
      },
          create: {
        name: props.name !== undefined ? props.name : undefined,
  slug: props.slug !== undefined ? props.slug : undefined,
  description: props.description !== undefined ? props.description : undefined,
  status: props.status !== undefined ? props.status : undefined,
  tradingOverrides: props.tradingOverrides !== undefined ? props.tradingOverrides : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  organization: props.organization ? 
    typeof props.organization === 'object' && Object.keys(props.organization).length === 1 && Object.keys(props.organization)[0] === 'id'
    ? { connect: {
        id: props.organization.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.organization.id !== undefined ? props.organization.id : undefined,
        slug: props.organization.slug !== undefined ? props.organization.slug : undefined,
        name: props.organization.name !== undefined ? {
            equals: props.organization.name 
           } : undefined,
      },
      create: {
        name: props.organization.name !== undefined ? props.organization.name : undefined,
        slug: props.organization.slug !== undefined ? props.organization.slug : undefined,
        logoUrl: props.organization.logoUrl !== undefined ? props.organization.logoUrl : undefined,
        website: props.organization.website !== undefined ? props.organization.website : undefined,
        businessType: props.organization.businessType !== undefined ? props.organization.businessType : undefined,
        jurisdiction: props.organization.jurisdiction !== undefined ? props.organization.jurisdiction : undefined,
        regulatoryStatus: props.organization.regulatoryStatus !== undefined ? props.organization.regulatoryStatus : undefined,
        description: props.organization.description !== undefined ? props.organization.description : undefined,
        tradingDefaults: props.organization.tradingDefaults !== undefined ? props.organization.tradingDefaults : undefined,
        deletedAt: props.organization.deletedAt !== undefined ? props.organization.deletedAt : undefined,
    members: props.organization.members ? 
      Array.isArray(props.organization.members) && props.organization.members.length > 0 &&  props.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.organization.members.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.organization.members.map((item: any) => ({
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
      },
    }
  } : undefined,
  brokerageAccounts: props.brokerageAccounts ? 
    Array.isArray(props.brokerageAccounts) && props.brokerageAccounts.length > 0 &&  props.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.brokerageAccounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.brokerageAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        fundId: item.fundId !== undefined ? {
            equals: item.fundId 
           } : undefined,
      },
      create: {
        provider: item.provider !== undefined ? item.provider : undefined,
        type: item.type !== undefined ? item.type : undefined,
        apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
        apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
            set: item.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
        autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
    allocation: item.allocation ? 
      typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
          id: item.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.allocation.id !== undefined ? item.allocation.id : undefined,
          brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
        },
        create: {
          equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
          optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
          futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
          etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
          forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
          crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
          stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
          options: item.allocation.options !== undefined ? item.allocation.options : undefined,
        },
      }
    } : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
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
    trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
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
    optionsPositions: item.optionsPositions ? 
      Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.optionsPositions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
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
    optionsTradeExecutions: item.optionsTradeExecutions ? 
      Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.optionsTradeExecutions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
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
    }))
  } : undefined,
  assignments: props.assignments ? 
    Array.isArray(props.assignments) && props.assignments.length > 0 &&  props.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.assignments.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.assignments.map((item: any) => ({
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
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
      orgMemberships: item.user.orgMemberships ? 
        Array.isArray(item.user.orgMemberships) && item.user.orgMemberships.length > 0 &&  item.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.orgMemberships.map((item: any) => ({
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
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  investments: props.investments ? 
    Array.isArray(props.investments) && props.investments.length > 0 &&  props.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.investments.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.investments.map((item: any) => ({
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
      user: item.investor.user ? 
        typeof item.investor.user === 'object' && Object.keys(item.investor.user).length === 1 && Object.keys(item.investor.user)[0] === 'id'
    ? { connect: {
            id: item.investor.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.user.id !== undefined ? item.investor.user.id : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            name: item.investor.user.name !== undefined ? {
                equals: item.investor.user.name 
               } : undefined,
          },
          create: {
            name: item.investor.user.name !== undefined ? item.investor.user.name : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? item.investor.user.emailVerified : undefined,
            image: item.investor.user.image !== undefined ? item.investor.user.image : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? item.investor.user.deletedAt : undefined,
            role: item.investor.user.role !== undefined ? item.investor.user.role : undefined,
            bio: item.investor.user.bio !== undefined ? item.investor.user.bio : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? item.investor.user.jobTitle : undefined,
            plan: item.investor.user.plan !== undefined ? item.investor.user.plan : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? item.investor.user.openaiAPIKey : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? item.investor.user.openaiModel : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? item.investor.user.passwordHash : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? item.investor.user.avatarUrl : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? item.investor.user.onboardingComplete : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? item.investor.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
      },
          update: {
      name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  slug: props.slug !== undefined ? {
            set: props.slug 
           } : undefined,
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  tradingOverrides: props.tradingOverrides !== undefined ? {
            set: props.tradingOverrides 
           } : undefined,
  deletedAt: props.deletedAt !== undefined ? {
            set: props.deletedAt 
           } : undefined,
  organization: props.organization ? 
  typeof props.organization === 'object' && Object.keys(props.organization).length === 1 && (Object.keys(props.organization)[0] === 'id' || Object.keys(props.organization)[0] === 'symbol')
? {
  connect: {
    id: props.organization.id
  }
} : { upsert: {
      where: {
        id: props.organization.id !== undefined ? {
            equals: props.organization.id
          } : undefined,
        name: props.organization.name !== undefined ? {
            equals: props.organization.name
          } : undefined,
        slug: props.organization.slug !== undefined ? {
            equals: props.organization.slug
          } : undefined,
      },
      update: {
        id: props.organization.id !== undefined ? {
            set: props.organization.id
          } : undefined,
        name: props.organization.name !== undefined ? {
            set: props.organization.name
          } : undefined,
        slug: props.organization.slug !== undefined ? {
            set: props.organization.slug
          } : undefined,
        logoUrl: props.organization.logoUrl !== undefined ? {
            set: props.organization.logoUrl
          } : undefined,
        website: props.organization.website !== undefined ? {
            set: props.organization.website
          } : undefined,
        businessType: props.organization.businessType !== undefined ? {
            set: props.organization.businessType
          } : undefined,
        jurisdiction: props.organization.jurisdiction !== undefined ? {
            set: props.organization.jurisdiction
          } : undefined,
        regulatoryStatus: props.organization.regulatoryStatus !== undefined ? {
            set: props.organization.regulatoryStatus
          } : undefined,
        description: props.organization.description !== undefined ? {
            set: props.organization.description
          } : undefined,
        tradingDefaults: props.organization.tradingDefaults !== undefined ? {
            set: props.organization.tradingDefaults
          } : undefined,
        deletedAt: props.organization.deletedAt !== undefined ? {
            set: props.organization.deletedAt
          } : undefined,
    members: props.organization.members ? 
    Array.isArray(props.organization.members) && props.organization.members.length > 0 && props.organization.members.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.organization.members.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.organization.members.map((item: any) => ({
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
      },
      create: {
        name: props.organization.name !== undefined ? props.organization.name : undefined,
        slug: props.organization.slug !== undefined ? props.organization.slug : undefined,
        logoUrl: props.organization.logoUrl !== undefined ? props.organization.logoUrl : undefined,
        website: props.organization.website !== undefined ? props.organization.website : undefined,
        businessType: props.organization.businessType !== undefined ? props.organization.businessType : undefined,
        jurisdiction: props.organization.jurisdiction !== undefined ? props.organization.jurisdiction : undefined,
        regulatoryStatus: props.organization.regulatoryStatus !== undefined ? props.organization.regulatoryStatus : undefined,
        description: props.organization.description !== undefined ? props.organization.description : undefined,
        tradingDefaults: props.organization.tradingDefaults !== undefined ? props.organization.tradingDefaults : undefined,
        deletedAt: props.organization.deletedAt !== undefined ? props.organization.deletedAt : undefined,
    members: props.organization.members ? 
      Array.isArray(props.organization.members) && props.organization.members.length > 0 &&  props.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.organization.members.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.organization.members.map((item: any) => ({
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
      },
    }
  } : undefined,
  brokerageAccounts: props.brokerageAccounts ? 
  Array.isArray(props.brokerageAccounts) && props.brokerageAccounts.length > 0 && props.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.brokerageAccounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.brokerageAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        fundId: item.fundId !== undefined ? {
            equals: item.fundId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        provider: item.provider !== undefined ? {
            set: item.provider
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        apiKey: item.apiKey !== undefined ? {
            set: item.apiKey
          } : undefined,
        apiSecret: item.apiSecret !== undefined ? {
            set: item.apiSecret
          } : undefined,
        configuration: item.configuration !== undefined ? {
            set: item.configuration
          } : undefined,
        marketOpen: item.marketOpen !== undefined ? {
            set: item.marketOpen
          } : undefined,
        realTime: item.realTime !== undefined ? {
            set: item.realTime
          } : undefined,
        cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? {
            set: item.cryptoTradingEnabled
          } : undefined,
        cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
            set: item.cryptoTradingPairs
          } : undefined,
        cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? {
            set: item.cryptoTradeAllocationPct
          } : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
            set: item.tradeAllocationPct
          } : undefined,
        autoAllocation: item.autoAllocation !== undefined ? {
            set: item.autoAllocation
          } : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? {
            set: item.minPercentageChange
          } : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? {
            set: item.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
            set: item.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
            set: item.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
            set: item.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
            set: item.reducedPortfolioTrailPercent
          } : undefined,
        defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? {
            set: item.defaultTrailingStopPercentage100
          } : undefined,
        firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? {
            set: item.firstTrailReductionThreshold100
          } : undefined,
        secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? {
            set: item.secondTrailReductionThreshold100
          } : undefined,
        firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? {
            set: item.firstReducedTrailPercentage100
          } : undefined,
        secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? {
            set: item.secondReducedTrailPercentage100
          } : undefined,
        minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? {
            set: item.minimumPriceChangePercent100
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
    allocation: item.allocation ? 
    typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && (Object.keys(item.allocation)[0] === 'id' || Object.keys(item.allocation)[0] === 'symbol')
? {
    connect: {
      id: item.allocation.id
    }
} : { upsert: {
        where: {
          id: item.allocation.id !== undefined ? {
              equals: item.allocation.id
            } : undefined,
          brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? {
              equals: item.allocation.brokerageAccountId
            } : undefined,
        },
        update: {
          id: item.allocation.id !== undefined ? {
              set: item.allocation.id
            } : undefined,
          equities: item.allocation.equities !== undefined ? {
              set: item.allocation.equities
            } : undefined,
          optionsContracts: item.allocation.optionsContracts !== undefined ? {
              set: item.allocation.optionsContracts
            } : undefined,
          futures: item.allocation.futures !== undefined ? {
              set: item.allocation.futures
            } : undefined,
          etfs: item.allocation.etfs !== undefined ? {
              set: item.allocation.etfs
            } : undefined,
          forex: item.allocation.forex !== undefined ? {
              set: item.allocation.forex
            } : undefined,
          crypto: item.allocation.crypto !== undefined ? {
              set: item.allocation.crypto
            } : undefined,
          stocks: item.allocation.stocks !== undefined ? {
              set: item.allocation.stocks
            } : undefined,
          options: item.allocation.options !== undefined ? {
              set: item.allocation.options
            } : undefined,
        },
        create: {
          equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
          optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
          futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
          etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
          forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
          crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
          stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
          options: item.allocation.options !== undefined ? item.allocation.options : undefined,
        },
      }
    } : undefined,
    alerts: item.alerts ? 
    Array.isArray(item.alerts) && item.alerts.length > 0 && item.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.alerts.map((item: any) => ({
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
    trades: item.trades ? 
    Array.isArray(item.trades) && item.trades.length > 0 && item.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.trades.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.trades.map((item: any) => ({
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
    optionsPositions: item.optionsPositions ? 
    Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 && item.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.optionsPositions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.optionsPositions.map((item: any) => ({
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
    optionsTradeExecutions: item.optionsTradeExecutions ? 
    Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 && item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.optionsTradeExecutions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.optionsTradeExecutions.map((item: any) => ({
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
        provider: item.provider !== undefined ? item.provider : undefined,
        type: item.type !== undefined ? item.type : undefined,
        apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
        apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
            set: item.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
        autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
    allocation: item.allocation ? 
      typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
          id: item.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.allocation.id !== undefined ? item.allocation.id : undefined,
          brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
        },
        create: {
          equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
          optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
          futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
          etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
          forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
          crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
          stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
          options: item.allocation.options !== undefined ? item.allocation.options : undefined,
        },
      }
    } : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
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
    trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
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
    optionsPositions: item.optionsPositions ? 
      Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.optionsPositions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
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
    optionsTradeExecutions: item.optionsTradeExecutions ? 
      Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.optionsTradeExecutions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
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
    }))
  } : undefined,
  assignments: props.assignments ? 
  Array.isArray(props.assignments) && props.assignments.length > 0 && props.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.assignments.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.assignments.map((item: any) => ({
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
      customer: item.user.customer ? 
      typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && (Object.keys(item.user.customer)[0] === 'id' || Object.keys(item.user.customer)[0] === 'symbol')
? {
      connect: {
        id: item.user.customer.id
      }
} : { upsert: {
          where: {
            id: item.user.customer.id !== undefined ? {
                equals: item.user.customer.id
              } : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                equals: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                equals: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: item.user.customer.authUserId !== undefined ? {
                set: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                set: item.user.customer.name
              } : undefined,
            plan: item.user.customer.plan !== undefined ? {
                set: item.user.customer.plan
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                set: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                set: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                set: item.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: item.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
      Array.isArray(item.user.accounts) && item.user.accounts.length > 0 && item.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            refresh_token: item.refresh_token !== undefined ? {
                set: item.refresh_token
              } : undefined,
            access_token: item.access_token !== undefined ? {
                set: item.access_token
              } : undefined,
            expires_at: item.expires_at !== undefined ? {
                set: item.expires_at
              } : undefined,
            token_type: item.token_type !== undefined ? {
                set: item.token_type
              } : undefined,
            scope: item.scope !== undefined ? {
                set: item.scope
              } : undefined,
            id_token: item.id_token !== undefined ? {
                set: item.id_token
              } : undefined,
            session_state: item.session_state !== undefined ? {
                set: item.session_state
              } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: item.user.sessions ? 
      Array.isArray(item.user.sessions) && item.user.sessions.length > 0 && item.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            sessionToken: item.sessionToken !== undefined ? {
                set: item.sessionToken
              } : undefined,
            expires: item.expires !== undefined ? {
                set: item.expires
              } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: item.user.authenticators ? 
      Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 && item.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            credentialID: item.credentialID !== undefined ? {
                set: item.credentialID
              } : undefined,
            publicKey: item.publicKey !== undefined ? {
                set: item.publicKey
              } : undefined,
            counter: item.counter !== undefined ? {
                set: item.counter
              } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
      orgMemberships: item.user.orgMemberships ? 
      Array.isArray(item.user.orgMemberships) && item.user.orgMemberships.length > 0 && item.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.orgMemberships.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.orgMemberships.map((item: any) => ({
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
      investorProfile: item.user.investorProfile ? 
      typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && (Object.keys(item.user.investorProfile)[0] === 'id' || Object.keys(item.user.investorProfile)[0] === 'symbol')
? {
      connect: {
        id: item.user.investorProfile.id
      }
} : { upsert: {
          where: {
            id: item.user.investorProfile.id !== undefined ? {
                equals: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email
              } : undefined,
            userId: item.user.investorProfile.userId !== undefined ? {
                equals: item.user.investorProfile.userId
              } : undefined,
          },
          update: {
            id: item.user.investorProfile.id !== undefined ? {
                set: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                set: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                set: item.user.investorProfile.email
              } : undefined,
            type: item.user.investorProfile.type !== undefined ? {
                set: item.user.investorProfile.type
              } : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? {
                set: item.user.investorProfile.kycStatus
              } : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? {
                set: item.user.investorProfile.walletAddress
              } : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? {
                set: item.user.investorProfile.deletedAt
              } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
      Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 && item.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            accessToken: item.accessToken !== undefined ? {
                set: item.accessToken
              } : undefined,
            refreshToken: item.refreshToken !== undefined ? {
                set: item.refreshToken
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            linkedAt: item.linkedAt !== undefined ? {
                set: item.linkedAt
              } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
      Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 && item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            verificationToken: item.verificationToken !== undefined ? {
                set: item.verificationToken
              } : undefined,
            userAgent: item.userAgent !== undefined ? {
                set: item.userAgent
              } : undefined,
            ipAddress: item.ipAddress !== undefined ? {
                set: item.ipAddress
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            verifiedAt: item.verifiedAt !== undefined ? {
                set: item.verifiedAt
              } : undefined,
            approvedAt: item.approvedAt !== undefined ? {
                set: item.approvedAt
              } : undefined,
            rejectedAt: item.rejectedAt !== undefined ? {
                set: item.rejectedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
      Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 && item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
            reviewedById: item.reviewedById !== undefined ? {
                equals: item.reviewedById
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            fullName: item.fullName !== undefined ? {
                set: item.fullName
              } : undefined,
            companyName: item.companyName !== undefined ? {
                set: item.companyName
              } : undefined,
            companyWebsite: item.companyWebsite !== undefined ? {
                set: item.companyWebsite
              } : undefined,
            jobRole: item.jobRole !== undefined ? {
                set: item.jobRole
              } : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? {
                set: item.professionalInvestorConfirmed
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            queuePosition: item.queuePosition !== undefined ? {
                set: item.queuePosition
              } : undefined,
            reviewedAt: item.reviewedAt !== undefined ? {
                set: item.reviewedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
      Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 && item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.dashboardLayouts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            layout: item.layout !== undefined ? {
                set: item.layout
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
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
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
      orgMemberships: item.user.orgMemberships ? 
        Array.isArray(item.user.orgMemberships) && item.user.orgMemberships.length > 0 &&  item.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.orgMemberships.map((item: any) => ({
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
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
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
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
      orgMemberships: item.user.orgMemberships ? 
        Array.isArray(item.user.orgMemberships) && item.user.orgMemberships.length > 0 &&  item.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.orgMemberships.map((item: any) => ({
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
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  investments: props.investments ? 
  Array.isArray(props.investments) && props.investments.length > 0 && props.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.investments.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.investments.map((item: any) => ({
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
      user: item.investor.user ? 
      typeof item.investor.user === 'object' && Object.keys(item.investor.user).length === 1 && (Object.keys(item.investor.user)[0] === 'id' || Object.keys(item.investor.user)[0] === 'symbol')
? {
      connect: {
        id: item.investor.user.id
      }
} : { upsert: {
          where: {
            id: item.investor.user.id !== undefined ? {
                equals: item.investor.user.id
              } : undefined,
            name: item.investor.user.name !== undefined ? {
                equals: item.investor.user.name
              } : undefined,
            email: item.investor.user.email !== undefined ? {
                equals: item.investor.user.email
              } : undefined,
            customerId: item.investor.user.customerId !== undefined ? {
                equals: item.investor.user.customerId
              } : undefined,
          },
          update: {
            id: item.investor.user.id !== undefined ? {
                set: item.investor.user.id
              } : undefined,
            name: item.investor.user.name !== undefined ? {
                set: item.investor.user.name
              } : undefined,
            email: item.investor.user.email !== undefined ? {
                set: item.investor.user.email
              } : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? {
                set: item.investor.user.emailVerified
              } : undefined,
            image: item.investor.user.image !== undefined ? {
                set: item.investor.user.image
              } : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? {
                set: item.investor.user.deletedAt
              } : undefined,
            role: item.investor.user.role !== undefined ? {
                set: item.investor.user.role
              } : undefined,
            bio: item.investor.user.bio !== undefined ? {
                set: item.investor.user.bio
              } : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? {
                set: item.investor.user.jobTitle
              } : undefined,
            plan: item.investor.user.plan !== undefined ? {
                set: item.investor.user.plan
              } : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? {
                set: item.investor.user.openaiAPIKey
              } : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? {
                set: item.investor.user.openaiModel
              } : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? {
                set: item.investor.user.passwordHash
              } : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? {
                set: item.investor.user.avatarUrl
              } : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? {
                set: item.investor.user.onboardingComplete
              } : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? {
                set: item.investor.user.signupCategory
              } : undefined,
          },
          create: {
            name: item.investor.user.name !== undefined ? item.investor.user.name : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? item.investor.user.emailVerified : undefined,
            image: item.investor.user.image !== undefined ? item.investor.user.image : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? item.investor.user.deletedAt : undefined,
            role: item.investor.user.role !== undefined ? item.investor.user.role : undefined,
            bio: item.investor.user.bio !== undefined ? item.investor.user.bio : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? item.investor.user.jobTitle : undefined,
            plan: item.investor.user.plan !== undefined ? item.investor.user.plan : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? item.investor.user.openaiAPIKey : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? item.investor.user.openaiModel : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? item.investor.user.passwordHash : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? item.investor.user.avatarUrl : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? item.investor.user.onboardingComplete : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? item.investor.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
        create: {
          name: item.investor.name !== undefined ? item.investor.name : undefined,
          email: item.investor.email !== undefined ? item.investor.email : undefined,
          type: item.investor.type !== undefined ? item.investor.type : undefined,
          kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
          walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
          deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
      user: item.investor.user ? 
        typeof item.investor.user === 'object' && Object.keys(item.investor.user).length === 1 && Object.keys(item.investor.user)[0] === 'id'
    ? { connect: {
            id: item.investor.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.user.id !== undefined ? item.investor.user.id : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            name: item.investor.user.name !== undefined ? {
                equals: item.investor.user.name 
               } : undefined,
          },
          create: {
            name: item.investor.user.name !== undefined ? item.investor.user.name : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? item.investor.user.emailVerified : undefined,
            image: item.investor.user.image !== undefined ? item.investor.user.image : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? item.investor.user.deletedAt : undefined,
            role: item.investor.user.role !== undefined ? item.investor.user.role : undefined,
            bio: item.investor.user.bio !== undefined ? item.investor.user.bio : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? item.investor.user.jobTitle : undefined,
            plan: item.investor.user.plan !== undefined ? item.investor.user.plan : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? item.investor.user.openaiAPIKey : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? item.investor.user.openaiModel : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? item.investor.user.passwordHash : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? item.investor.user.avatarUrl : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? item.investor.user.onboardingComplete : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? item.investor.user.signupCategory : undefined,
          },
        }
      } : undefined,
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
      user: item.investor.user ? 
        typeof item.investor.user === 'object' && Object.keys(item.investor.user).length === 1 && Object.keys(item.investor.user)[0] === 'id'
    ? { connect: {
            id: item.investor.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.user.id !== undefined ? item.investor.user.id : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            name: item.investor.user.name !== undefined ? {
                equals: item.investor.user.name 
               } : undefined,
          },
          create: {
            name: item.investor.user.name !== undefined ? item.investor.user.name : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? item.investor.user.emailVerified : undefined,
            image: item.investor.user.image !== undefined ? item.investor.user.image : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? item.investor.user.deletedAt : undefined,
            role: item.investor.user.role !== undefined ? item.investor.user.role : undefined,
            bio: item.investor.user.bio !== undefined ? item.investor.user.bio : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? item.investor.user.jobTitle : undefined,
            plan: item.investor.user.plan !== undefined ? item.investor.user.plan : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? item.investor.user.openaiAPIKey : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? item.investor.user.openaiModel : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? item.investor.user.passwordHash : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? item.investor.user.avatarUrl : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? item.investor.user.onboardingComplete : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? item.investor.user.signupCategory : undefined,
          },
        }
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
          mutation: UPSERT_ONE_FUND,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneFund) {
          return response.data.upsertOneFund;
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
   * Update multiple Fund records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Fund objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: FundType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_FUND = gql`
          mutation updateManyFund($data: [FundCreateManyInput!]!) {
            updateManyFund(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  name: prop.name !== undefined ? {
    equals: prop.name 
  } : undefined,
  slug: prop.slug !== undefined ? {
    equals: prop.slug 
  } : undefined,
  organizationId: prop.organizationId !== undefined ? {
    equals: prop.organizationId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  name: prop.name !== undefined ? {
            set: prop.name 
           } : undefined,
  slug: prop.slug !== undefined ? {
            set: prop.slug 
           } : undefined,
  description: prop.description !== undefined ? {
            set: prop.description 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  tradingOverrides: prop.tradingOverrides !== undefined ? {
            set: prop.tradingOverrides 
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
  organization: prop.organization ? 
  typeof prop.organization === 'object' && Object.keys(prop.organization).length === 1 && (Object.keys(prop.organization)[0] === 'id' || Object.keys(prop.organization)[0] === 'symbol')
? {
  connect: {
    id: prop.organization.id
  }
} : { upsert: {
      where: {
        id: prop.organization.id !== undefined ? {
            equals: prop.organization.id
          } : undefined,
        name: prop.organization.name !== undefined ? {
            equals: prop.organization.name
          } : undefined,
        slug: prop.organization.slug !== undefined ? {
            equals: prop.organization.slug
          } : undefined,
      },
      update: {
        id: prop.organization.id !== undefined ? {
            set: prop.organization.id
          } : undefined,
        name: prop.organization.name !== undefined ? {
            set: prop.organization.name
          } : undefined,
        slug: prop.organization.slug !== undefined ? {
            set: prop.organization.slug
          } : undefined,
        logoUrl: prop.organization.logoUrl !== undefined ? {
            set: prop.organization.logoUrl
          } : undefined,
        website: prop.organization.website !== undefined ? {
            set: prop.organization.website
          } : undefined,
        businessType: prop.organization.businessType !== undefined ? {
            set: prop.organization.businessType
          } : undefined,
        jurisdiction: prop.organization.jurisdiction !== undefined ? {
            set: prop.organization.jurisdiction
          } : undefined,
        regulatoryStatus: prop.organization.regulatoryStatus !== undefined ? {
            set: prop.organization.regulatoryStatus
          } : undefined,
        description: prop.organization.description !== undefined ? {
            set: prop.organization.description
          } : undefined,
        tradingDefaults: prop.organization.tradingDefaults !== undefined ? {
            set: prop.organization.tradingDefaults
          } : undefined,
        deletedAt: prop.organization.deletedAt !== undefined ? {
            set: prop.organization.deletedAt
          } : undefined,
    members: prop.organization.members ? 
    Array.isArray(prop.organization.members) && prop.organization.members.length > 0 && prop.organization.members.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.organization.members.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.organization.members.map((item: any) => ({
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
      },
      create: {
        name: prop.organization.name !== undefined ? prop.organization.name : undefined,
        slug: prop.organization.slug !== undefined ? prop.organization.slug : undefined,
        logoUrl: prop.organization.logoUrl !== undefined ? prop.organization.logoUrl : undefined,
        website: prop.organization.website !== undefined ? prop.organization.website : undefined,
        businessType: prop.organization.businessType !== undefined ? prop.organization.businessType : undefined,
        jurisdiction: prop.organization.jurisdiction !== undefined ? prop.organization.jurisdiction : undefined,
        regulatoryStatus: prop.organization.regulatoryStatus !== undefined ? prop.organization.regulatoryStatus : undefined,
        description: prop.organization.description !== undefined ? prop.organization.description : undefined,
        tradingDefaults: prop.organization.tradingDefaults !== undefined ? prop.organization.tradingDefaults : undefined,
        deletedAt: prop.organization.deletedAt !== undefined ? prop.organization.deletedAt : undefined,
    members: prop.organization.members ? 
      Array.isArray(prop.organization.members) && prop.organization.members.length > 0 &&  prop.organization.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.organization.members.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.organization.members.map((item: any) => ({
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
      },
    }
  } : undefined,
  brokerageAccounts: prop.brokerageAccounts ? 
  Array.isArray(prop.brokerageAccounts) && prop.brokerageAccounts.length > 0 && prop.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.brokerageAccounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.brokerageAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        fundId: item.fundId !== undefined ? {
            equals: item.fundId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        provider: item.provider !== undefined ? {
            set: item.provider
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        apiKey: item.apiKey !== undefined ? {
            set: item.apiKey
          } : undefined,
        apiSecret: item.apiSecret !== undefined ? {
            set: item.apiSecret
          } : undefined,
        configuration: item.configuration !== undefined ? {
            set: item.configuration
          } : undefined,
        marketOpen: item.marketOpen !== undefined ? {
            set: item.marketOpen
          } : undefined,
        realTime: item.realTime !== undefined ? {
            set: item.realTime
          } : undefined,
        cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? {
            set: item.cryptoTradingEnabled
          } : undefined,
        cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
            set: item.cryptoTradingPairs
          } : undefined,
        cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? {
            set: item.cryptoTradeAllocationPct
          } : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
            set: item.tradeAllocationPct
          } : undefined,
        autoAllocation: item.autoAllocation !== undefined ? {
            set: item.autoAllocation
          } : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? {
            set: item.minPercentageChange
          } : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? {
            set: item.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
            set: item.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
            set: item.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
            set: item.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
            set: item.reducedPortfolioTrailPercent
          } : undefined,
        defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? {
            set: item.defaultTrailingStopPercentage100
          } : undefined,
        firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? {
            set: item.firstTrailReductionThreshold100
          } : undefined,
        secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? {
            set: item.secondTrailReductionThreshold100
          } : undefined,
        firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? {
            set: item.firstReducedTrailPercentage100
          } : undefined,
        secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? {
            set: item.secondReducedTrailPercentage100
          } : undefined,
        minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? {
            set: item.minimumPriceChangePercent100
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
    allocation: item.allocation ? 
    typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && (Object.keys(item.allocation)[0] === 'id' || Object.keys(item.allocation)[0] === 'symbol')
? {
    connect: {
      id: item.allocation.id
    }
} : { upsert: {
        where: {
          id: item.allocation.id !== undefined ? {
              equals: item.allocation.id
            } : undefined,
          brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? {
              equals: item.allocation.brokerageAccountId
            } : undefined,
        },
        update: {
          id: item.allocation.id !== undefined ? {
              set: item.allocation.id
            } : undefined,
          equities: item.allocation.equities !== undefined ? {
              set: item.allocation.equities
            } : undefined,
          optionsContracts: item.allocation.optionsContracts !== undefined ? {
              set: item.allocation.optionsContracts
            } : undefined,
          futures: item.allocation.futures !== undefined ? {
              set: item.allocation.futures
            } : undefined,
          etfs: item.allocation.etfs !== undefined ? {
              set: item.allocation.etfs
            } : undefined,
          forex: item.allocation.forex !== undefined ? {
              set: item.allocation.forex
            } : undefined,
          crypto: item.allocation.crypto !== undefined ? {
              set: item.allocation.crypto
            } : undefined,
          stocks: item.allocation.stocks !== undefined ? {
              set: item.allocation.stocks
            } : undefined,
          options: item.allocation.options !== undefined ? {
              set: item.allocation.options
            } : undefined,
        },
        create: {
          equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
          optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
          futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
          etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
          forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
          crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
          stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
          options: item.allocation.options !== undefined ? item.allocation.options : undefined,
        },
      }
    } : undefined,
    alerts: item.alerts ? 
    Array.isArray(item.alerts) && item.alerts.length > 0 && item.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.alerts.map((item: any) => ({
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
    trades: item.trades ? 
    Array.isArray(item.trades) && item.trades.length > 0 && item.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.trades.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.trades.map((item: any) => ({
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
    optionsPositions: item.optionsPositions ? 
    Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 && item.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.optionsPositions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.optionsPositions.map((item: any) => ({
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
    optionsTradeExecutions: item.optionsTradeExecutions ? 
    Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 && item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.optionsTradeExecutions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.optionsTradeExecutions.map((item: any) => ({
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
        provider: item.provider !== undefined ? item.provider : undefined,
        type: item.type !== undefined ? item.type : undefined,
        apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
        apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
            set: item.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
        autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
    allocation: item.allocation ? 
      typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
          id: item.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.allocation.id !== undefined ? item.allocation.id : undefined,
          brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
        },
        create: {
          equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
          optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
          futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
          etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
          forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
          crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
          stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
          options: item.allocation.options !== undefined ? item.allocation.options : undefined,
        },
      }
    } : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
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
    trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
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
    optionsPositions: item.optionsPositions ? 
      Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.optionsPositions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
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
    optionsTradeExecutions: item.optionsTradeExecutions ? 
      Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.optionsTradeExecutions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
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
    }))
  } : undefined,
  assignments: prop.assignments ? 
  Array.isArray(prop.assignments) && prop.assignments.length > 0 && prop.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.assignments.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.assignments.map((item: any) => ({
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
      customer: item.user.customer ? 
      typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && (Object.keys(item.user.customer)[0] === 'id' || Object.keys(item.user.customer)[0] === 'symbol')
? {
      connect: {
        id: item.user.customer.id
      }
} : { upsert: {
          where: {
            id: item.user.customer.id !== undefined ? {
                equals: item.user.customer.id
              } : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                equals: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                equals: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: item.user.customer.authUserId !== undefined ? {
                set: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                set: item.user.customer.name
              } : undefined,
            plan: item.user.customer.plan !== undefined ? {
                set: item.user.customer.plan
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                set: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                set: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                set: item.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: item.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
      Array.isArray(item.user.accounts) && item.user.accounts.length > 0 && item.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            refresh_token: item.refresh_token !== undefined ? {
                set: item.refresh_token
              } : undefined,
            access_token: item.access_token !== undefined ? {
                set: item.access_token
              } : undefined,
            expires_at: item.expires_at !== undefined ? {
                set: item.expires_at
              } : undefined,
            token_type: item.token_type !== undefined ? {
                set: item.token_type
              } : undefined,
            scope: item.scope !== undefined ? {
                set: item.scope
              } : undefined,
            id_token: item.id_token !== undefined ? {
                set: item.id_token
              } : undefined,
            session_state: item.session_state !== undefined ? {
                set: item.session_state
              } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: item.user.sessions ? 
      Array.isArray(item.user.sessions) && item.user.sessions.length > 0 && item.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            sessionToken: item.sessionToken !== undefined ? {
                set: item.sessionToken
              } : undefined,
            expires: item.expires !== undefined ? {
                set: item.expires
              } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: item.user.authenticators ? 
      Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 && item.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            credentialID: item.credentialID !== undefined ? {
                set: item.credentialID
              } : undefined,
            publicKey: item.publicKey !== undefined ? {
                set: item.publicKey
              } : undefined,
            counter: item.counter !== undefined ? {
                set: item.counter
              } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
      orgMemberships: item.user.orgMemberships ? 
      Array.isArray(item.user.orgMemberships) && item.user.orgMemberships.length > 0 && item.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.orgMemberships.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.orgMemberships.map((item: any) => ({
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
      investorProfile: item.user.investorProfile ? 
      typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && (Object.keys(item.user.investorProfile)[0] === 'id' || Object.keys(item.user.investorProfile)[0] === 'symbol')
? {
      connect: {
        id: item.user.investorProfile.id
      }
} : { upsert: {
          where: {
            id: item.user.investorProfile.id !== undefined ? {
                equals: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email
              } : undefined,
            userId: item.user.investorProfile.userId !== undefined ? {
                equals: item.user.investorProfile.userId
              } : undefined,
          },
          update: {
            id: item.user.investorProfile.id !== undefined ? {
                set: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                set: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                set: item.user.investorProfile.email
              } : undefined,
            type: item.user.investorProfile.type !== undefined ? {
                set: item.user.investorProfile.type
              } : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? {
                set: item.user.investorProfile.kycStatus
              } : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? {
                set: item.user.investorProfile.walletAddress
              } : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? {
                set: item.user.investorProfile.deletedAt
              } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
      Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 && item.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            accessToken: item.accessToken !== undefined ? {
                set: item.accessToken
              } : undefined,
            refreshToken: item.refreshToken !== undefined ? {
                set: item.refreshToken
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            linkedAt: item.linkedAt !== undefined ? {
                set: item.linkedAt
              } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
      Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 && item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            verificationToken: item.verificationToken !== undefined ? {
                set: item.verificationToken
              } : undefined,
            userAgent: item.userAgent !== undefined ? {
                set: item.userAgent
              } : undefined,
            ipAddress: item.ipAddress !== undefined ? {
                set: item.ipAddress
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            verifiedAt: item.verifiedAt !== undefined ? {
                set: item.verifiedAt
              } : undefined,
            approvedAt: item.approvedAt !== undefined ? {
                set: item.approvedAt
              } : undefined,
            rejectedAt: item.rejectedAt !== undefined ? {
                set: item.rejectedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
      Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 && item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
            reviewedById: item.reviewedById !== undefined ? {
                equals: item.reviewedById
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            fullName: item.fullName !== undefined ? {
                set: item.fullName
              } : undefined,
            companyName: item.companyName !== undefined ? {
                set: item.companyName
              } : undefined,
            companyWebsite: item.companyWebsite !== undefined ? {
                set: item.companyWebsite
              } : undefined,
            jobRole: item.jobRole !== undefined ? {
                set: item.jobRole
              } : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? {
                set: item.professionalInvestorConfirmed
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            queuePosition: item.queuePosition !== undefined ? {
                set: item.queuePosition
              } : undefined,
            reviewedAt: item.reviewedAt !== undefined ? {
                set: item.reviewedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
      Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 && item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.dashboardLayouts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            layout: item.layout !== undefined ? {
                set: item.layout
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
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
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
      orgMemberships: item.user.orgMemberships ? 
        Array.isArray(item.user.orgMemberships) && item.user.orgMemberships.length > 0 &&  item.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.orgMemberships.map((item: any) => ({
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
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
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
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
      orgMemberships: item.user.orgMemberships ? 
        Array.isArray(item.user.orgMemberships) && item.user.orgMemberships.length > 0 &&  item.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.orgMemberships.map((item: any) => ({
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
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  investments: prop.investments ? 
  Array.isArray(prop.investments) && prop.investments.length > 0 && prop.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.investments.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.investments.map((item: any) => ({
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
      user: item.investor.user ? 
      typeof item.investor.user === 'object' && Object.keys(item.investor.user).length === 1 && (Object.keys(item.investor.user)[0] === 'id' || Object.keys(item.investor.user)[0] === 'symbol')
? {
      connect: {
        id: item.investor.user.id
      }
} : { upsert: {
          where: {
            id: item.investor.user.id !== undefined ? {
                equals: item.investor.user.id
              } : undefined,
            name: item.investor.user.name !== undefined ? {
                equals: item.investor.user.name
              } : undefined,
            email: item.investor.user.email !== undefined ? {
                equals: item.investor.user.email
              } : undefined,
            customerId: item.investor.user.customerId !== undefined ? {
                equals: item.investor.user.customerId
              } : undefined,
          },
          update: {
            id: item.investor.user.id !== undefined ? {
                set: item.investor.user.id
              } : undefined,
            name: item.investor.user.name !== undefined ? {
                set: item.investor.user.name
              } : undefined,
            email: item.investor.user.email !== undefined ? {
                set: item.investor.user.email
              } : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? {
                set: item.investor.user.emailVerified
              } : undefined,
            image: item.investor.user.image !== undefined ? {
                set: item.investor.user.image
              } : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? {
                set: item.investor.user.deletedAt
              } : undefined,
            role: item.investor.user.role !== undefined ? {
                set: item.investor.user.role
              } : undefined,
            bio: item.investor.user.bio !== undefined ? {
                set: item.investor.user.bio
              } : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? {
                set: item.investor.user.jobTitle
              } : undefined,
            plan: item.investor.user.plan !== undefined ? {
                set: item.investor.user.plan
              } : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? {
                set: item.investor.user.openaiAPIKey
              } : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? {
                set: item.investor.user.openaiModel
              } : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? {
                set: item.investor.user.passwordHash
              } : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? {
                set: item.investor.user.avatarUrl
              } : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? {
                set: item.investor.user.onboardingComplete
              } : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? {
                set: item.investor.user.signupCategory
              } : undefined,
          },
          create: {
            name: item.investor.user.name !== undefined ? item.investor.user.name : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? item.investor.user.emailVerified : undefined,
            image: item.investor.user.image !== undefined ? item.investor.user.image : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? item.investor.user.deletedAt : undefined,
            role: item.investor.user.role !== undefined ? item.investor.user.role : undefined,
            bio: item.investor.user.bio !== undefined ? item.investor.user.bio : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? item.investor.user.jobTitle : undefined,
            plan: item.investor.user.plan !== undefined ? item.investor.user.plan : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? item.investor.user.openaiAPIKey : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? item.investor.user.openaiModel : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? item.investor.user.passwordHash : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? item.investor.user.avatarUrl : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? item.investor.user.onboardingComplete : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? item.investor.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
        create: {
          name: item.investor.name !== undefined ? item.investor.name : undefined,
          email: item.investor.email !== undefined ? item.investor.email : undefined,
          type: item.investor.type !== undefined ? item.investor.type : undefined,
          kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
          walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
          deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
      user: item.investor.user ? 
        typeof item.investor.user === 'object' && Object.keys(item.investor.user).length === 1 && Object.keys(item.investor.user)[0] === 'id'
    ? { connect: {
            id: item.investor.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.user.id !== undefined ? item.investor.user.id : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            name: item.investor.user.name !== undefined ? {
                equals: item.investor.user.name 
               } : undefined,
          },
          create: {
            name: item.investor.user.name !== undefined ? item.investor.user.name : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? item.investor.user.emailVerified : undefined,
            image: item.investor.user.image !== undefined ? item.investor.user.image : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? item.investor.user.deletedAt : undefined,
            role: item.investor.user.role !== undefined ? item.investor.user.role : undefined,
            bio: item.investor.user.bio !== undefined ? item.investor.user.bio : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? item.investor.user.jobTitle : undefined,
            plan: item.investor.user.plan !== undefined ? item.investor.user.plan : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? item.investor.user.openaiAPIKey : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? item.investor.user.openaiModel : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? item.investor.user.passwordHash : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? item.investor.user.avatarUrl : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? item.investor.user.onboardingComplete : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? item.investor.user.signupCategory : undefined,
          },
        }
      } : undefined,
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
      user: item.investor.user ? 
        typeof item.investor.user === 'object' && Object.keys(item.investor.user).length === 1 && Object.keys(item.investor.user)[0] === 'id'
    ? { connect: {
            id: item.investor.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.user.id !== undefined ? item.investor.user.id : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            name: item.investor.user.name !== undefined ? {
                equals: item.investor.user.name 
               } : undefined,
          },
          create: {
            name: item.investor.user.name !== undefined ? item.investor.user.name : undefined,
            email: item.investor.user.email !== undefined ? item.investor.user.email : undefined,
            emailVerified: item.investor.user.emailVerified !== undefined ? item.investor.user.emailVerified : undefined,
            image: item.investor.user.image !== undefined ? item.investor.user.image : undefined,
            deletedAt: item.investor.user.deletedAt !== undefined ? item.investor.user.deletedAt : undefined,
            role: item.investor.user.role !== undefined ? item.investor.user.role : undefined,
            bio: item.investor.user.bio !== undefined ? item.investor.user.bio : undefined,
            jobTitle: item.investor.user.jobTitle !== undefined ? item.investor.user.jobTitle : undefined,
            plan: item.investor.user.plan !== undefined ? item.investor.user.plan : undefined,
            openaiAPIKey: item.investor.user.openaiAPIKey !== undefined ? item.investor.user.openaiAPIKey : undefined,
            openaiModel: item.investor.user.openaiModel !== undefined ? item.investor.user.openaiModel : undefined,
            passwordHash: item.investor.user.passwordHash !== undefined ? item.investor.user.passwordHash : undefined,
            avatarUrl: item.investor.user.avatarUrl !== undefined ? item.investor.user.avatarUrl : undefined,
            onboardingComplete: item.investor.user.onboardingComplete !== undefined ? item.investor.user.onboardingComplete : undefined,
            signupCategory: item.investor.user.signupCategory !== undefined ? item.investor.user.signupCategory : undefined,
          },
        }
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
          mutation: UPDATE_MANY_FUND,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyFund) {
          return response.data.updateManyFund;
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
   * Delete a single Fund record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Fund or null.
   */
  async delete(props: FundType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FundType> {
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

        const DELETE_ONE_FUND = gql`
          mutation deleteOneFund($where: FundWhereUniqueInput!) {
            deleteOneFund(where: $where) {
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
          mutation: DELETE_ONE_FUND,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneFund) {
          return response.data.deleteOneFund;
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
   * Retrieve a single Fund record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved Fund or null.
   */
  async get(props: FundType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<FundType | null> {
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

        const GET_FUND = gql`
          query getFund($where: FundWhereUniqueInput!) {
            getFund(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  slug: props.slug !== undefined ? {
    equals: props.slug 
  } : undefined,
  organizationId: props.organizationId !== undefined ? {
    equals: props.organizationId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_FUND,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getFund ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Fund found') {
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
   * Retrieve all Funds records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Fund records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FundType[] | null> {
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

        const GET_ALL_FUND = gql`
          query getAllFund {
            funds {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_FUND,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.funds ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Fund found') {
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
   * Find multiple Fund records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found Fund records or null.
   */
  async findMany(props: FundType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<FundType[] | null> {
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

        const FIND_MANY_FUND = gql`
          query findManyFund($where: FundWhereInput!) {
            funds(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  slug: props.slug !== undefined ? {
    equals: props.slug 
  } : undefined,
  organizationId: props.organizationId !== undefined ? {
    equals: props.organizationId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_FUND,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.funds) {
          return response.data.funds;
        } else {
          return [] as FundType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Fund found') {
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
