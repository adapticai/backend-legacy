
  
import { Investment as InvestmentType } from './generated/typegraphql-prisma/models/Investment';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the Investment model.
   */

  const selectionSet = `
    
  id
  fundId
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
  }
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
      fundAssignments {
        id
        fundId
        fund {
id
        }
        userId
        role
        permissions
        createdAt
        updatedAt
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
    createdAt
    updatedAt
    deletedAt
  }
  units
  investedAt
  status
  createdAt
  updatedAt

  `;

  export const Investment = {

    /**
     * Create a new Investment record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Investment or null.
     */

    /**
     * Create a new Investment record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created Investment or null.
     */
    async create(props: InvestmentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InvestmentType> {
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

          const CREATE_ONE_INVESTMENT = gql`
              mutation createOneInvestment($data: InvestmentCreateInput!) {
                createOneInvestment(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                units: props.units !== undefined ? props.units : undefined,
  investedAt: props.investedAt !== undefined ? props.investedAt : undefined,
  status: props.status !== undefined ? props.status : undefined,
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
    brokerageAccounts: props.fund.brokerageAccounts ? 
      Array.isArray(props.fund.brokerageAccounts) && props.fund.brokerageAccounts.length > 0 &&  props.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.brokerageAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.brokerageAccounts.map((item: any) => ({
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
          connect:        item.alerts.map((item: any) => ({
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
          connect:        item.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }))
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
      },
    }
  } : undefined,
  investor: props.investor ? 
    typeof props.investor === 'object' && Object.keys(props.investor).length === 1 && Object.keys(props.investor)[0] === 'id'
    ? { connect: {
        id: props.investor.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.investor.id !== undefined ? props.investor.id : undefined,
        userId: props.investor.userId !== undefined ? props.investor.userId : undefined,
        name: props.investor.name !== undefined ? {
            equals: props.investor.name 
           } : undefined,
        email: props.investor.email !== undefined ? {
            equals: props.investor.email 
           } : undefined,
      },
      create: {
        name: props.investor.name !== undefined ? props.investor.name : undefined,
        email: props.investor.email !== undefined ? props.investor.email : undefined,
        type: props.investor.type !== undefined ? props.investor.type : undefined,
        kycStatus: props.investor.kycStatus !== undefined ? props.investor.kycStatus : undefined,
        walletAddress: props.investor.walletAddress !== undefined ? props.investor.walletAddress : undefined,
        deletedAt: props.investor.deletedAt !== undefined ? props.investor.deletedAt : undefined,
    user: props.investor.user ? 
      typeof props.investor.user === 'object' && Object.keys(props.investor.user).length === 1 && Object.keys(props.investor.user)[0] === 'id'
    ? { connect: {
          id: props.investor.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.investor.user.id !== undefined ? props.investor.user.id : undefined,
          email: props.investor.user.email !== undefined ? props.investor.user.email : undefined,
          name: props.investor.user.name !== undefined ? {
              equals: props.investor.user.name 
             } : undefined,
        },
        create: {
          name: props.investor.user.name !== undefined ? props.investor.user.name : undefined,
          email: props.investor.user.email !== undefined ? props.investor.user.email : undefined,
          emailVerified: props.investor.user.emailVerified !== undefined ? props.investor.user.emailVerified : undefined,
          image: props.investor.user.image !== undefined ? props.investor.user.image : undefined,
          deletedAt: props.investor.user.deletedAt !== undefined ? props.investor.user.deletedAt : undefined,
          role: props.investor.user.role !== undefined ? props.investor.user.role : undefined,
          bio: props.investor.user.bio !== undefined ? props.investor.user.bio : undefined,
          jobTitle: props.investor.user.jobTitle !== undefined ? props.investor.user.jobTitle : undefined,
          plan: props.investor.user.plan !== undefined ? props.investor.user.plan : undefined,
          openaiAPIKey: props.investor.user.openaiAPIKey !== undefined ? props.investor.user.openaiAPIKey : undefined,
          openaiModel: props.investor.user.openaiModel !== undefined ? props.investor.user.openaiModel : undefined,
          passwordHash: props.investor.user.passwordHash !== undefined ? props.investor.user.passwordHash : undefined,
          avatarUrl: props.investor.user.avatarUrl !== undefined ? props.investor.user.avatarUrl : undefined,
          onboardingComplete: props.investor.user.onboardingComplete !== undefined ? props.investor.user.onboardingComplete : undefined,
          signupCategory: props.investor.user.signupCategory !== undefined ? props.investor.user.signupCategory : undefined,
      customer: props.investor.user.customer ? 
        typeof props.investor.user.customer === 'object' && Object.keys(props.investor.user.customer).length === 1 && Object.keys(props.investor.user.customer)[0] === 'id'
    ? { connect: {
            id: props.investor.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.investor.user.customer.id !== undefined ? props.investor.user.customer.id : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.investor.user.customer.authUserId !== undefined ? {
                equals: props.investor.user.customer.authUserId 
               } : undefined,
            name: props.investor.user.customer.name !== undefined ? {
                equals: props.investor.user.customer.name 
               } : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? {
                equals: props.investor.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.investor.user.customer.authUserId !== undefined ? props.investor.user.customer.authUserId : undefined,
            name: props.investor.user.customer.name !== undefined ? props.investor.user.customer.name : undefined,
            plan: props.investor.user.customer.plan !== undefined ? props.investor.user.customer.plan : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? props.investor.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? props.investor.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.investor.user.accounts ? 
        Array.isArray(props.investor.user.accounts) && props.investor.user.accounts.length > 0 &&  props.investor.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accounts.map((item: any) => ({
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
      sessions: props.investor.user.sessions ? 
        Array.isArray(props.investor.user.sessions) && props.investor.user.sessions.length > 0 &&  props.investor.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.sessions.map((item: any) => ({
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
      authenticators: props.investor.user.authenticators ? 
        Array.isArray(props.investor.user.authenticators) && props.investor.user.authenticators.length > 0 &&  props.investor.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.authenticators.map((item: any) => ({
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
      orgMemberships: props.investor.user.orgMemberships ? 
        Array.isArray(props.investor.user.orgMemberships) && props.investor.user.orgMemberships.length > 0 &&  props.investor.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.orgMemberships.map((item: any) => ({
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
      fundAssignments: props.investor.user.fundAssignments ? 
        Array.isArray(props.investor.user.fundAssignments) && props.investor.user.fundAssignments.length > 0 &&  props.investor.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.fundAssignments.map((item: any) => ({
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
      linkedProviders: props.investor.user.linkedProviders ? 
        Array.isArray(props.investor.user.linkedProviders) && props.investor.user.linkedProviders.length > 0 &&  props.investor.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.investor.user.accountLinkingRequests ? 
        Array.isArray(props.investor.user.accountLinkingRequests) && props.investor.user.accountLinkingRequests.length > 0 &&  props.investor.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.investor.user.reviewedWaitlistEntries ? 
        Array.isArray(props.investor.user.reviewedWaitlistEntries) && props.investor.user.reviewedWaitlistEntries.length > 0 &&  props.investor.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
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
      dashboardLayouts: props.investor.user.dashboardLayouts ? 
        Array.isArray(props.investor.user.dashboardLayouts) && props.investor.user.dashboardLayouts.length > 0 &&  props.investor.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.dashboardLayouts.map((item: any) => ({
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
    }
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_INVESTMENT,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneInvestment) {
            return response.data.createOneInvestment;
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
   * Create multiple Investment records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Investment objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: InvestmentType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_INVESTMENT = gql`
          mutation createManyInvestment($data: [InvestmentCreateManyInput!]!) {
            createManyInvestment(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      fundId: prop.fundId !== undefined ? prop.fundId : undefined,
  investorId: prop.investorId !== undefined ? prop.investorId : undefined,
  units: prop.units !== undefined ? prop.units : undefined,
  investedAt: prop.investedAt !== undefined ? prop.investedAt : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_INVESTMENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyInvestment) {
          return response.data.createManyInvestment;
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
   * Update a single Investment record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Investment or null.
   */
  async update(props: InvestmentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InvestmentType> {
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

        const UPDATE_ONE_INVESTMENT = gql`
          mutation updateOneInvestment($data: InvestmentUpdateInput!, $where: InvestmentWhereUniqueInput!) {
            updateOneInvestment(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  fundId: props.fundId !== undefined ? {
    equals: props.fundId 
  } : undefined,
  investorId: props.investorId !== undefined ? {
    equals: props.investorId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  units: props.units !== undefined ? {
            set: props.units 
           } : undefined,
  investedAt: props.investedAt !== undefined ? {
            set: props.investedAt 
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
    brokerageAccounts: props.fund.brokerageAccounts ? 
    Array.isArray(props.fund.brokerageAccounts) && props.fund.brokerageAccounts.length > 0 && props.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.fund.brokerageAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.fund.brokerageAccounts.map((item: any) => ({
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
          connect:        item.alerts.map((item: any) => ({
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
          connect:        item.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }))
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
      },
      create: {
        name: props.fund.name !== undefined ? props.fund.name : undefined,
        slug: props.fund.slug !== undefined ? props.fund.slug : undefined,
        description: props.fund.description !== undefined ? props.fund.description : undefined,
        status: props.fund.status !== undefined ? props.fund.status : undefined,
        tradingOverrides: props.fund.tradingOverrides !== undefined ? props.fund.tradingOverrides : undefined,
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
    brokerageAccounts: props.fund.brokerageAccounts ? 
      Array.isArray(props.fund.brokerageAccounts) && props.fund.brokerageAccounts.length > 0 &&  props.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.brokerageAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.brokerageAccounts.map((item: any) => ({
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
          connect:        item.alerts.map((item: any) => ({
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
          connect:        item.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }))
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
      },
    }
  } : undefined,
  investor: props.investor ? 
  typeof props.investor === 'object' && Object.keys(props.investor).length === 1 && (Object.keys(props.investor)[0] === 'id' || Object.keys(props.investor)[0] === 'symbol')
? {
  connect: {
    id: props.investor.id
  }
} : { upsert: {
      where: {
        id: props.investor.id !== undefined ? {
            equals: props.investor.id
          } : undefined,
        name: props.investor.name !== undefined ? {
            equals: props.investor.name
          } : undefined,
        email: props.investor.email !== undefined ? {
            equals: props.investor.email
          } : undefined,
        userId: props.investor.userId !== undefined ? {
            equals: props.investor.userId
          } : undefined,
      },
      update: {
        id: props.investor.id !== undefined ? {
            set: props.investor.id
          } : undefined,
        name: props.investor.name !== undefined ? {
            set: props.investor.name
          } : undefined,
        email: props.investor.email !== undefined ? {
            set: props.investor.email
          } : undefined,
        type: props.investor.type !== undefined ? {
            set: props.investor.type
          } : undefined,
        kycStatus: props.investor.kycStatus !== undefined ? {
            set: props.investor.kycStatus
          } : undefined,
        walletAddress: props.investor.walletAddress !== undefined ? {
            set: props.investor.walletAddress
          } : undefined,
        deletedAt: props.investor.deletedAt !== undefined ? {
            set: props.investor.deletedAt
          } : undefined,
    user: props.investor.user ? 
    typeof props.investor.user === 'object' && Object.keys(props.investor.user).length === 1 && (Object.keys(props.investor.user)[0] === 'id' || Object.keys(props.investor.user)[0] === 'symbol')
? {
    connect: {
      id: props.investor.user.id
    }
} : { upsert: {
        where: {
          id: props.investor.user.id !== undefined ? {
              equals: props.investor.user.id
            } : undefined,
          name: props.investor.user.name !== undefined ? {
              equals: props.investor.user.name
            } : undefined,
          email: props.investor.user.email !== undefined ? {
              equals: props.investor.user.email
            } : undefined,
          customerId: props.investor.user.customerId !== undefined ? {
              equals: props.investor.user.customerId
            } : undefined,
        },
        update: {
          id: props.investor.user.id !== undefined ? {
              set: props.investor.user.id
            } : undefined,
          name: props.investor.user.name !== undefined ? {
              set: props.investor.user.name
            } : undefined,
          email: props.investor.user.email !== undefined ? {
              set: props.investor.user.email
            } : undefined,
          emailVerified: props.investor.user.emailVerified !== undefined ? {
              set: props.investor.user.emailVerified
            } : undefined,
          image: props.investor.user.image !== undefined ? {
              set: props.investor.user.image
            } : undefined,
          deletedAt: props.investor.user.deletedAt !== undefined ? {
              set: props.investor.user.deletedAt
            } : undefined,
          role: props.investor.user.role !== undefined ? {
              set: props.investor.user.role
            } : undefined,
          bio: props.investor.user.bio !== undefined ? {
              set: props.investor.user.bio
            } : undefined,
          jobTitle: props.investor.user.jobTitle !== undefined ? {
              set: props.investor.user.jobTitle
            } : undefined,
          plan: props.investor.user.plan !== undefined ? {
              set: props.investor.user.plan
            } : undefined,
          openaiAPIKey: props.investor.user.openaiAPIKey !== undefined ? {
              set: props.investor.user.openaiAPIKey
            } : undefined,
          openaiModel: props.investor.user.openaiModel !== undefined ? {
              set: props.investor.user.openaiModel
            } : undefined,
          passwordHash: props.investor.user.passwordHash !== undefined ? {
              set: props.investor.user.passwordHash
            } : undefined,
          avatarUrl: props.investor.user.avatarUrl !== undefined ? {
              set: props.investor.user.avatarUrl
            } : undefined,
          onboardingComplete: props.investor.user.onboardingComplete !== undefined ? {
              set: props.investor.user.onboardingComplete
            } : undefined,
          signupCategory: props.investor.user.signupCategory !== undefined ? {
              set: props.investor.user.signupCategory
            } : undefined,
      customer: props.investor.user.customer ? 
      typeof props.investor.user.customer === 'object' && Object.keys(props.investor.user.customer).length === 1 && (Object.keys(props.investor.user.customer)[0] === 'id' || Object.keys(props.investor.user.customer)[0] === 'symbol')
? {
      connect: {
        id: props.investor.user.customer.id
      }
} : { upsert: {
          where: {
            id: props.investor.user.customer.id !== undefined ? {
                equals: props.investor.user.customer.id
              } : undefined,
            authUserId: props.investor.user.customer.authUserId !== undefined ? {
                equals: props.investor.user.customer.authUserId
              } : undefined,
            name: props.investor.user.customer.name !== undefined ? {
                equals: props.investor.user.customer.name
              } : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? {
                equals: props.investor.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? {
                equals: props.investor.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? {
                equals: props.investor.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: props.investor.user.customer.authUserId !== undefined ? {
                set: props.investor.user.customer.authUserId
              } : undefined,
            name: props.investor.user.customer.name !== undefined ? {
                set: props.investor.user.customer.name
              } : undefined,
            plan: props.investor.user.customer.plan !== undefined ? {
                set: props.investor.user.customer.plan
              } : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? {
                set: props.investor.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? {
                set: props.investor.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? {
                set: props.investor.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: props.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: props.investor.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: props.investor.user.customer.authUserId !== undefined ? props.investor.user.customer.authUserId : undefined,
            name: props.investor.user.customer.name !== undefined ? props.investor.user.customer.name : undefined,
            plan: props.investor.user.customer.plan !== undefined ? props.investor.user.customer.plan : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? props.investor.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? props.investor.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.investor.user.accounts ? 
      Array.isArray(props.investor.user.accounts) && props.investor.user.accounts.length > 0 && props.investor.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.accounts.map((item: any) => ({
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
      sessions: props.investor.user.sessions ? 
      Array.isArray(props.investor.user.sessions) && props.investor.user.sessions.length > 0 && props.investor.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.sessions.map((item: any) => ({
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
      authenticators: props.investor.user.authenticators ? 
      Array.isArray(props.investor.user.authenticators) && props.investor.user.authenticators.length > 0 && props.investor.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.authenticators.map((item: any) => ({
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
      orgMemberships: props.investor.user.orgMemberships ? 
      Array.isArray(props.investor.user.orgMemberships) && props.investor.user.orgMemberships.length > 0 && props.investor.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.orgMemberships.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.orgMemberships.map((item: any) => ({
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
      fundAssignments: props.investor.user.fundAssignments ? 
      Array.isArray(props.investor.user.fundAssignments) && props.investor.user.fundAssignments.length > 0 && props.investor.user.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.fundAssignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.fundAssignments.map((item: any) => ({
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
      linkedProviders: props.investor.user.linkedProviders ? 
      Array.isArray(props.investor.user.linkedProviders) && props.investor.user.linkedProviders.length > 0 && props.investor.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.investor.user.accountLinkingRequests ? 
      Array.isArray(props.investor.user.accountLinkingRequests) && props.investor.user.accountLinkingRequests.length > 0 && props.investor.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.investor.user.reviewedWaitlistEntries ? 
      Array.isArray(props.investor.user.reviewedWaitlistEntries) && props.investor.user.reviewedWaitlistEntries.length > 0 && props.investor.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
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
      dashboardLayouts: props.investor.user.dashboardLayouts ? 
      Array.isArray(props.investor.user.dashboardLayouts) && props.investor.user.dashboardLayouts.length > 0 && props.investor.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.dashboardLayouts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.dashboardLayouts.map((item: any) => ({
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
          name: props.investor.user.name !== undefined ? props.investor.user.name : undefined,
          email: props.investor.user.email !== undefined ? props.investor.user.email : undefined,
          emailVerified: props.investor.user.emailVerified !== undefined ? props.investor.user.emailVerified : undefined,
          image: props.investor.user.image !== undefined ? props.investor.user.image : undefined,
          deletedAt: props.investor.user.deletedAt !== undefined ? props.investor.user.deletedAt : undefined,
          role: props.investor.user.role !== undefined ? props.investor.user.role : undefined,
          bio: props.investor.user.bio !== undefined ? props.investor.user.bio : undefined,
          jobTitle: props.investor.user.jobTitle !== undefined ? props.investor.user.jobTitle : undefined,
          plan: props.investor.user.plan !== undefined ? props.investor.user.plan : undefined,
          openaiAPIKey: props.investor.user.openaiAPIKey !== undefined ? props.investor.user.openaiAPIKey : undefined,
          openaiModel: props.investor.user.openaiModel !== undefined ? props.investor.user.openaiModel : undefined,
          passwordHash: props.investor.user.passwordHash !== undefined ? props.investor.user.passwordHash : undefined,
          avatarUrl: props.investor.user.avatarUrl !== undefined ? props.investor.user.avatarUrl : undefined,
          onboardingComplete: props.investor.user.onboardingComplete !== undefined ? props.investor.user.onboardingComplete : undefined,
          signupCategory: props.investor.user.signupCategory !== undefined ? props.investor.user.signupCategory : undefined,
      customer: props.investor.user.customer ? 
        typeof props.investor.user.customer === 'object' && Object.keys(props.investor.user.customer).length === 1 && Object.keys(props.investor.user.customer)[0] === 'id'
    ? { connect: {
            id: props.investor.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.investor.user.customer.id !== undefined ? props.investor.user.customer.id : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.investor.user.customer.authUserId !== undefined ? {
                equals: props.investor.user.customer.authUserId 
               } : undefined,
            name: props.investor.user.customer.name !== undefined ? {
                equals: props.investor.user.customer.name 
               } : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? {
                equals: props.investor.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.investor.user.customer.authUserId !== undefined ? props.investor.user.customer.authUserId : undefined,
            name: props.investor.user.customer.name !== undefined ? props.investor.user.customer.name : undefined,
            plan: props.investor.user.customer.plan !== undefined ? props.investor.user.customer.plan : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? props.investor.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? props.investor.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.investor.user.accounts ? 
        Array.isArray(props.investor.user.accounts) && props.investor.user.accounts.length > 0 &&  props.investor.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accounts.map((item: any) => ({
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
      sessions: props.investor.user.sessions ? 
        Array.isArray(props.investor.user.sessions) && props.investor.user.sessions.length > 0 &&  props.investor.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.sessions.map((item: any) => ({
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
      authenticators: props.investor.user.authenticators ? 
        Array.isArray(props.investor.user.authenticators) && props.investor.user.authenticators.length > 0 &&  props.investor.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.authenticators.map((item: any) => ({
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
      orgMemberships: props.investor.user.orgMemberships ? 
        Array.isArray(props.investor.user.orgMemberships) && props.investor.user.orgMemberships.length > 0 &&  props.investor.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.orgMemberships.map((item: any) => ({
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
      fundAssignments: props.investor.user.fundAssignments ? 
        Array.isArray(props.investor.user.fundAssignments) && props.investor.user.fundAssignments.length > 0 &&  props.investor.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.fundAssignments.map((item: any) => ({
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
      linkedProviders: props.investor.user.linkedProviders ? 
        Array.isArray(props.investor.user.linkedProviders) && props.investor.user.linkedProviders.length > 0 &&  props.investor.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.investor.user.accountLinkingRequests ? 
        Array.isArray(props.investor.user.accountLinkingRequests) && props.investor.user.accountLinkingRequests.length > 0 &&  props.investor.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.investor.user.reviewedWaitlistEntries ? 
        Array.isArray(props.investor.user.reviewedWaitlistEntries) && props.investor.user.reviewedWaitlistEntries.length > 0 &&  props.investor.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
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
      dashboardLayouts: props.investor.user.dashboardLayouts ? 
        Array.isArray(props.investor.user.dashboardLayouts) && props.investor.user.dashboardLayouts.length > 0 &&  props.investor.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.dashboardLayouts.map((item: any) => ({
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
        name: props.investor.name !== undefined ? props.investor.name : undefined,
        email: props.investor.email !== undefined ? props.investor.email : undefined,
        type: props.investor.type !== undefined ? props.investor.type : undefined,
        kycStatus: props.investor.kycStatus !== undefined ? props.investor.kycStatus : undefined,
        walletAddress: props.investor.walletAddress !== undefined ? props.investor.walletAddress : undefined,
        deletedAt: props.investor.deletedAt !== undefined ? props.investor.deletedAt : undefined,
    user: props.investor.user ? 
      typeof props.investor.user === 'object' && Object.keys(props.investor.user).length === 1 && Object.keys(props.investor.user)[0] === 'id'
    ? { connect: {
          id: props.investor.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.investor.user.id !== undefined ? props.investor.user.id : undefined,
          email: props.investor.user.email !== undefined ? props.investor.user.email : undefined,
          name: props.investor.user.name !== undefined ? {
              equals: props.investor.user.name 
             } : undefined,
        },
        create: {
          name: props.investor.user.name !== undefined ? props.investor.user.name : undefined,
          email: props.investor.user.email !== undefined ? props.investor.user.email : undefined,
          emailVerified: props.investor.user.emailVerified !== undefined ? props.investor.user.emailVerified : undefined,
          image: props.investor.user.image !== undefined ? props.investor.user.image : undefined,
          deletedAt: props.investor.user.deletedAt !== undefined ? props.investor.user.deletedAt : undefined,
          role: props.investor.user.role !== undefined ? props.investor.user.role : undefined,
          bio: props.investor.user.bio !== undefined ? props.investor.user.bio : undefined,
          jobTitle: props.investor.user.jobTitle !== undefined ? props.investor.user.jobTitle : undefined,
          plan: props.investor.user.plan !== undefined ? props.investor.user.plan : undefined,
          openaiAPIKey: props.investor.user.openaiAPIKey !== undefined ? props.investor.user.openaiAPIKey : undefined,
          openaiModel: props.investor.user.openaiModel !== undefined ? props.investor.user.openaiModel : undefined,
          passwordHash: props.investor.user.passwordHash !== undefined ? props.investor.user.passwordHash : undefined,
          avatarUrl: props.investor.user.avatarUrl !== undefined ? props.investor.user.avatarUrl : undefined,
          onboardingComplete: props.investor.user.onboardingComplete !== undefined ? props.investor.user.onboardingComplete : undefined,
          signupCategory: props.investor.user.signupCategory !== undefined ? props.investor.user.signupCategory : undefined,
      customer: props.investor.user.customer ? 
        typeof props.investor.user.customer === 'object' && Object.keys(props.investor.user.customer).length === 1 && Object.keys(props.investor.user.customer)[0] === 'id'
    ? { connect: {
            id: props.investor.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.investor.user.customer.id !== undefined ? props.investor.user.customer.id : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.investor.user.customer.authUserId !== undefined ? {
                equals: props.investor.user.customer.authUserId 
               } : undefined,
            name: props.investor.user.customer.name !== undefined ? {
                equals: props.investor.user.customer.name 
               } : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? {
                equals: props.investor.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.investor.user.customer.authUserId !== undefined ? props.investor.user.customer.authUserId : undefined,
            name: props.investor.user.customer.name !== undefined ? props.investor.user.customer.name : undefined,
            plan: props.investor.user.customer.plan !== undefined ? props.investor.user.customer.plan : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? props.investor.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? props.investor.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.investor.user.accounts ? 
        Array.isArray(props.investor.user.accounts) && props.investor.user.accounts.length > 0 &&  props.investor.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accounts.map((item: any) => ({
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
      sessions: props.investor.user.sessions ? 
        Array.isArray(props.investor.user.sessions) && props.investor.user.sessions.length > 0 &&  props.investor.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.sessions.map((item: any) => ({
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
      authenticators: props.investor.user.authenticators ? 
        Array.isArray(props.investor.user.authenticators) && props.investor.user.authenticators.length > 0 &&  props.investor.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.authenticators.map((item: any) => ({
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
      orgMemberships: props.investor.user.orgMemberships ? 
        Array.isArray(props.investor.user.orgMemberships) && props.investor.user.orgMemberships.length > 0 &&  props.investor.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.orgMemberships.map((item: any) => ({
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
      fundAssignments: props.investor.user.fundAssignments ? 
        Array.isArray(props.investor.user.fundAssignments) && props.investor.user.fundAssignments.length > 0 &&  props.investor.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.fundAssignments.map((item: any) => ({
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
      linkedProviders: props.investor.user.linkedProviders ? 
        Array.isArray(props.investor.user.linkedProviders) && props.investor.user.linkedProviders.length > 0 &&  props.investor.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.investor.user.accountLinkingRequests ? 
        Array.isArray(props.investor.user.accountLinkingRequests) && props.investor.user.accountLinkingRequests.length > 0 &&  props.investor.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.investor.user.reviewedWaitlistEntries ? 
        Array.isArray(props.investor.user.reviewedWaitlistEntries) && props.investor.user.reviewedWaitlistEntries.length > 0 &&  props.investor.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
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
      dashboardLayouts: props.investor.user.dashboardLayouts ? 
        Array.isArray(props.investor.user.dashboardLayouts) && props.investor.user.dashboardLayouts.length > 0 &&  props.investor.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.dashboardLayouts.map((item: any) => ({
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
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_INVESTMENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneInvestment) {
          return response.data.updateOneInvestment;
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
   * Upsert a single Investment record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Investment or null.
   */
  async upsert(props: InvestmentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InvestmentType> {
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

        const UPSERT_ONE_INVESTMENT = gql`
          mutation upsertOneInvestment($where: InvestmentWhereUniqueInput!, $create: InvestmentCreateInput!, $update: InvestmentUpdateInput!) {
            upsertOneInvestment(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  fundId: props.fundId !== undefined ? {
    equals: props.fundId 
  } : undefined,
  investorId: props.investorId !== undefined ? {
    equals: props.investorId 
  } : undefined,
      },
          create: {
        units: props.units !== undefined ? props.units : undefined,
  investedAt: props.investedAt !== undefined ? props.investedAt : undefined,
  status: props.status !== undefined ? props.status : undefined,
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
    brokerageAccounts: props.fund.brokerageAccounts ? 
      Array.isArray(props.fund.brokerageAccounts) && props.fund.brokerageAccounts.length > 0 &&  props.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.brokerageAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.brokerageAccounts.map((item: any) => ({
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
          connect:        item.alerts.map((item: any) => ({
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
          connect:        item.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }))
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
      },
    }
  } : undefined,
  investor: props.investor ? 
    typeof props.investor === 'object' && Object.keys(props.investor).length === 1 && Object.keys(props.investor)[0] === 'id'
    ? { connect: {
        id: props.investor.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.investor.id !== undefined ? props.investor.id : undefined,
        userId: props.investor.userId !== undefined ? props.investor.userId : undefined,
        name: props.investor.name !== undefined ? {
            equals: props.investor.name 
           } : undefined,
        email: props.investor.email !== undefined ? {
            equals: props.investor.email 
           } : undefined,
      },
      create: {
        name: props.investor.name !== undefined ? props.investor.name : undefined,
        email: props.investor.email !== undefined ? props.investor.email : undefined,
        type: props.investor.type !== undefined ? props.investor.type : undefined,
        kycStatus: props.investor.kycStatus !== undefined ? props.investor.kycStatus : undefined,
        walletAddress: props.investor.walletAddress !== undefined ? props.investor.walletAddress : undefined,
        deletedAt: props.investor.deletedAt !== undefined ? props.investor.deletedAt : undefined,
    user: props.investor.user ? 
      typeof props.investor.user === 'object' && Object.keys(props.investor.user).length === 1 && Object.keys(props.investor.user)[0] === 'id'
    ? { connect: {
          id: props.investor.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.investor.user.id !== undefined ? props.investor.user.id : undefined,
          email: props.investor.user.email !== undefined ? props.investor.user.email : undefined,
          name: props.investor.user.name !== undefined ? {
              equals: props.investor.user.name 
             } : undefined,
        },
        create: {
          name: props.investor.user.name !== undefined ? props.investor.user.name : undefined,
          email: props.investor.user.email !== undefined ? props.investor.user.email : undefined,
          emailVerified: props.investor.user.emailVerified !== undefined ? props.investor.user.emailVerified : undefined,
          image: props.investor.user.image !== undefined ? props.investor.user.image : undefined,
          deletedAt: props.investor.user.deletedAt !== undefined ? props.investor.user.deletedAt : undefined,
          role: props.investor.user.role !== undefined ? props.investor.user.role : undefined,
          bio: props.investor.user.bio !== undefined ? props.investor.user.bio : undefined,
          jobTitle: props.investor.user.jobTitle !== undefined ? props.investor.user.jobTitle : undefined,
          plan: props.investor.user.plan !== undefined ? props.investor.user.plan : undefined,
          openaiAPIKey: props.investor.user.openaiAPIKey !== undefined ? props.investor.user.openaiAPIKey : undefined,
          openaiModel: props.investor.user.openaiModel !== undefined ? props.investor.user.openaiModel : undefined,
          passwordHash: props.investor.user.passwordHash !== undefined ? props.investor.user.passwordHash : undefined,
          avatarUrl: props.investor.user.avatarUrl !== undefined ? props.investor.user.avatarUrl : undefined,
          onboardingComplete: props.investor.user.onboardingComplete !== undefined ? props.investor.user.onboardingComplete : undefined,
          signupCategory: props.investor.user.signupCategory !== undefined ? props.investor.user.signupCategory : undefined,
      customer: props.investor.user.customer ? 
        typeof props.investor.user.customer === 'object' && Object.keys(props.investor.user.customer).length === 1 && Object.keys(props.investor.user.customer)[0] === 'id'
    ? { connect: {
            id: props.investor.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.investor.user.customer.id !== undefined ? props.investor.user.customer.id : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.investor.user.customer.authUserId !== undefined ? {
                equals: props.investor.user.customer.authUserId 
               } : undefined,
            name: props.investor.user.customer.name !== undefined ? {
                equals: props.investor.user.customer.name 
               } : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? {
                equals: props.investor.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.investor.user.customer.authUserId !== undefined ? props.investor.user.customer.authUserId : undefined,
            name: props.investor.user.customer.name !== undefined ? props.investor.user.customer.name : undefined,
            plan: props.investor.user.customer.plan !== undefined ? props.investor.user.customer.plan : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? props.investor.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? props.investor.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.investor.user.accounts ? 
        Array.isArray(props.investor.user.accounts) && props.investor.user.accounts.length > 0 &&  props.investor.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accounts.map((item: any) => ({
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
      sessions: props.investor.user.sessions ? 
        Array.isArray(props.investor.user.sessions) && props.investor.user.sessions.length > 0 &&  props.investor.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.sessions.map((item: any) => ({
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
      authenticators: props.investor.user.authenticators ? 
        Array.isArray(props.investor.user.authenticators) && props.investor.user.authenticators.length > 0 &&  props.investor.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.authenticators.map((item: any) => ({
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
      orgMemberships: props.investor.user.orgMemberships ? 
        Array.isArray(props.investor.user.orgMemberships) && props.investor.user.orgMemberships.length > 0 &&  props.investor.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.orgMemberships.map((item: any) => ({
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
      fundAssignments: props.investor.user.fundAssignments ? 
        Array.isArray(props.investor.user.fundAssignments) && props.investor.user.fundAssignments.length > 0 &&  props.investor.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.fundAssignments.map((item: any) => ({
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
      linkedProviders: props.investor.user.linkedProviders ? 
        Array.isArray(props.investor.user.linkedProviders) && props.investor.user.linkedProviders.length > 0 &&  props.investor.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.investor.user.accountLinkingRequests ? 
        Array.isArray(props.investor.user.accountLinkingRequests) && props.investor.user.accountLinkingRequests.length > 0 &&  props.investor.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.investor.user.reviewedWaitlistEntries ? 
        Array.isArray(props.investor.user.reviewedWaitlistEntries) && props.investor.user.reviewedWaitlistEntries.length > 0 &&  props.investor.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
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
      dashboardLayouts: props.investor.user.dashboardLayouts ? 
        Array.isArray(props.investor.user.dashboardLayouts) && props.investor.user.dashboardLayouts.length > 0 &&  props.investor.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.dashboardLayouts.map((item: any) => ({
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
    }
  } : undefined,
      },
          update: {
      units: props.units !== undefined ? {
            set: props.units 
           } : undefined,
  investedAt: props.investedAt !== undefined ? {
            set: props.investedAt 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
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
    brokerageAccounts: props.fund.brokerageAccounts ? 
    Array.isArray(props.fund.brokerageAccounts) && props.fund.brokerageAccounts.length > 0 && props.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.fund.brokerageAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.fund.brokerageAccounts.map((item: any) => ({
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
          connect:        item.alerts.map((item: any) => ({
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
          connect:        item.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }))
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
      },
      create: {
        name: props.fund.name !== undefined ? props.fund.name : undefined,
        slug: props.fund.slug !== undefined ? props.fund.slug : undefined,
        description: props.fund.description !== undefined ? props.fund.description : undefined,
        status: props.fund.status !== undefined ? props.fund.status : undefined,
        tradingOverrides: props.fund.tradingOverrides !== undefined ? props.fund.tradingOverrides : undefined,
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
    brokerageAccounts: props.fund.brokerageAccounts ? 
      Array.isArray(props.fund.brokerageAccounts) && props.fund.brokerageAccounts.length > 0 &&  props.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.fund.brokerageAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.fund.brokerageAccounts.map((item: any) => ({
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
          connect:        item.alerts.map((item: any) => ({
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
          connect:        item.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }))
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
      },
    }
  } : undefined,
  investor: props.investor ? 
  typeof props.investor === 'object' && Object.keys(props.investor).length === 1 && (Object.keys(props.investor)[0] === 'id' || Object.keys(props.investor)[0] === 'symbol')
? {
  connect: {
    id: props.investor.id
  }
} : { upsert: {
      where: {
        id: props.investor.id !== undefined ? {
            equals: props.investor.id
          } : undefined,
        name: props.investor.name !== undefined ? {
            equals: props.investor.name
          } : undefined,
        email: props.investor.email !== undefined ? {
            equals: props.investor.email
          } : undefined,
        userId: props.investor.userId !== undefined ? {
            equals: props.investor.userId
          } : undefined,
      },
      update: {
        id: props.investor.id !== undefined ? {
            set: props.investor.id
          } : undefined,
        name: props.investor.name !== undefined ? {
            set: props.investor.name
          } : undefined,
        email: props.investor.email !== undefined ? {
            set: props.investor.email
          } : undefined,
        type: props.investor.type !== undefined ? {
            set: props.investor.type
          } : undefined,
        kycStatus: props.investor.kycStatus !== undefined ? {
            set: props.investor.kycStatus
          } : undefined,
        walletAddress: props.investor.walletAddress !== undefined ? {
            set: props.investor.walletAddress
          } : undefined,
        deletedAt: props.investor.deletedAt !== undefined ? {
            set: props.investor.deletedAt
          } : undefined,
    user: props.investor.user ? 
    typeof props.investor.user === 'object' && Object.keys(props.investor.user).length === 1 && (Object.keys(props.investor.user)[0] === 'id' || Object.keys(props.investor.user)[0] === 'symbol')
? {
    connect: {
      id: props.investor.user.id
    }
} : { upsert: {
        where: {
          id: props.investor.user.id !== undefined ? {
              equals: props.investor.user.id
            } : undefined,
          name: props.investor.user.name !== undefined ? {
              equals: props.investor.user.name
            } : undefined,
          email: props.investor.user.email !== undefined ? {
              equals: props.investor.user.email
            } : undefined,
          customerId: props.investor.user.customerId !== undefined ? {
              equals: props.investor.user.customerId
            } : undefined,
        },
        update: {
          id: props.investor.user.id !== undefined ? {
              set: props.investor.user.id
            } : undefined,
          name: props.investor.user.name !== undefined ? {
              set: props.investor.user.name
            } : undefined,
          email: props.investor.user.email !== undefined ? {
              set: props.investor.user.email
            } : undefined,
          emailVerified: props.investor.user.emailVerified !== undefined ? {
              set: props.investor.user.emailVerified
            } : undefined,
          image: props.investor.user.image !== undefined ? {
              set: props.investor.user.image
            } : undefined,
          deletedAt: props.investor.user.deletedAt !== undefined ? {
              set: props.investor.user.deletedAt
            } : undefined,
          role: props.investor.user.role !== undefined ? {
              set: props.investor.user.role
            } : undefined,
          bio: props.investor.user.bio !== undefined ? {
              set: props.investor.user.bio
            } : undefined,
          jobTitle: props.investor.user.jobTitle !== undefined ? {
              set: props.investor.user.jobTitle
            } : undefined,
          plan: props.investor.user.plan !== undefined ? {
              set: props.investor.user.plan
            } : undefined,
          openaiAPIKey: props.investor.user.openaiAPIKey !== undefined ? {
              set: props.investor.user.openaiAPIKey
            } : undefined,
          openaiModel: props.investor.user.openaiModel !== undefined ? {
              set: props.investor.user.openaiModel
            } : undefined,
          passwordHash: props.investor.user.passwordHash !== undefined ? {
              set: props.investor.user.passwordHash
            } : undefined,
          avatarUrl: props.investor.user.avatarUrl !== undefined ? {
              set: props.investor.user.avatarUrl
            } : undefined,
          onboardingComplete: props.investor.user.onboardingComplete !== undefined ? {
              set: props.investor.user.onboardingComplete
            } : undefined,
          signupCategory: props.investor.user.signupCategory !== undefined ? {
              set: props.investor.user.signupCategory
            } : undefined,
      customer: props.investor.user.customer ? 
      typeof props.investor.user.customer === 'object' && Object.keys(props.investor.user.customer).length === 1 && (Object.keys(props.investor.user.customer)[0] === 'id' || Object.keys(props.investor.user.customer)[0] === 'symbol')
? {
      connect: {
        id: props.investor.user.customer.id
      }
} : { upsert: {
          where: {
            id: props.investor.user.customer.id !== undefined ? {
                equals: props.investor.user.customer.id
              } : undefined,
            authUserId: props.investor.user.customer.authUserId !== undefined ? {
                equals: props.investor.user.customer.authUserId
              } : undefined,
            name: props.investor.user.customer.name !== undefined ? {
                equals: props.investor.user.customer.name
              } : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? {
                equals: props.investor.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? {
                equals: props.investor.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? {
                equals: props.investor.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: props.investor.user.customer.authUserId !== undefined ? {
                set: props.investor.user.customer.authUserId
              } : undefined,
            name: props.investor.user.customer.name !== undefined ? {
                set: props.investor.user.customer.name
              } : undefined,
            plan: props.investor.user.customer.plan !== undefined ? {
                set: props.investor.user.customer.plan
              } : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? {
                set: props.investor.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? {
                set: props.investor.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? {
                set: props.investor.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: props.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: props.investor.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: props.investor.user.customer.authUserId !== undefined ? props.investor.user.customer.authUserId : undefined,
            name: props.investor.user.customer.name !== undefined ? props.investor.user.customer.name : undefined,
            plan: props.investor.user.customer.plan !== undefined ? props.investor.user.customer.plan : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? props.investor.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? props.investor.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.investor.user.accounts ? 
      Array.isArray(props.investor.user.accounts) && props.investor.user.accounts.length > 0 && props.investor.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.accounts.map((item: any) => ({
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
      sessions: props.investor.user.sessions ? 
      Array.isArray(props.investor.user.sessions) && props.investor.user.sessions.length > 0 && props.investor.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.sessions.map((item: any) => ({
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
      authenticators: props.investor.user.authenticators ? 
      Array.isArray(props.investor.user.authenticators) && props.investor.user.authenticators.length > 0 && props.investor.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.authenticators.map((item: any) => ({
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
      orgMemberships: props.investor.user.orgMemberships ? 
      Array.isArray(props.investor.user.orgMemberships) && props.investor.user.orgMemberships.length > 0 && props.investor.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.orgMemberships.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.orgMemberships.map((item: any) => ({
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
      fundAssignments: props.investor.user.fundAssignments ? 
      Array.isArray(props.investor.user.fundAssignments) && props.investor.user.fundAssignments.length > 0 && props.investor.user.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.fundAssignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.fundAssignments.map((item: any) => ({
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
      linkedProviders: props.investor.user.linkedProviders ? 
      Array.isArray(props.investor.user.linkedProviders) && props.investor.user.linkedProviders.length > 0 && props.investor.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.investor.user.accountLinkingRequests ? 
      Array.isArray(props.investor.user.accountLinkingRequests) && props.investor.user.accountLinkingRequests.length > 0 && props.investor.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.investor.user.reviewedWaitlistEntries ? 
      Array.isArray(props.investor.user.reviewedWaitlistEntries) && props.investor.user.reviewedWaitlistEntries.length > 0 && props.investor.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
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
      dashboardLayouts: props.investor.user.dashboardLayouts ? 
      Array.isArray(props.investor.user.dashboardLayouts) && props.investor.user.dashboardLayouts.length > 0 && props.investor.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.investor.user.dashboardLayouts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.investor.user.dashboardLayouts.map((item: any) => ({
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
          name: props.investor.user.name !== undefined ? props.investor.user.name : undefined,
          email: props.investor.user.email !== undefined ? props.investor.user.email : undefined,
          emailVerified: props.investor.user.emailVerified !== undefined ? props.investor.user.emailVerified : undefined,
          image: props.investor.user.image !== undefined ? props.investor.user.image : undefined,
          deletedAt: props.investor.user.deletedAt !== undefined ? props.investor.user.deletedAt : undefined,
          role: props.investor.user.role !== undefined ? props.investor.user.role : undefined,
          bio: props.investor.user.bio !== undefined ? props.investor.user.bio : undefined,
          jobTitle: props.investor.user.jobTitle !== undefined ? props.investor.user.jobTitle : undefined,
          plan: props.investor.user.plan !== undefined ? props.investor.user.plan : undefined,
          openaiAPIKey: props.investor.user.openaiAPIKey !== undefined ? props.investor.user.openaiAPIKey : undefined,
          openaiModel: props.investor.user.openaiModel !== undefined ? props.investor.user.openaiModel : undefined,
          passwordHash: props.investor.user.passwordHash !== undefined ? props.investor.user.passwordHash : undefined,
          avatarUrl: props.investor.user.avatarUrl !== undefined ? props.investor.user.avatarUrl : undefined,
          onboardingComplete: props.investor.user.onboardingComplete !== undefined ? props.investor.user.onboardingComplete : undefined,
          signupCategory: props.investor.user.signupCategory !== undefined ? props.investor.user.signupCategory : undefined,
      customer: props.investor.user.customer ? 
        typeof props.investor.user.customer === 'object' && Object.keys(props.investor.user.customer).length === 1 && Object.keys(props.investor.user.customer)[0] === 'id'
    ? { connect: {
            id: props.investor.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.investor.user.customer.id !== undefined ? props.investor.user.customer.id : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.investor.user.customer.authUserId !== undefined ? {
                equals: props.investor.user.customer.authUserId 
               } : undefined,
            name: props.investor.user.customer.name !== undefined ? {
                equals: props.investor.user.customer.name 
               } : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? {
                equals: props.investor.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.investor.user.customer.authUserId !== undefined ? props.investor.user.customer.authUserId : undefined,
            name: props.investor.user.customer.name !== undefined ? props.investor.user.customer.name : undefined,
            plan: props.investor.user.customer.plan !== undefined ? props.investor.user.customer.plan : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? props.investor.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? props.investor.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.investor.user.accounts ? 
        Array.isArray(props.investor.user.accounts) && props.investor.user.accounts.length > 0 &&  props.investor.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accounts.map((item: any) => ({
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
      sessions: props.investor.user.sessions ? 
        Array.isArray(props.investor.user.sessions) && props.investor.user.sessions.length > 0 &&  props.investor.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.sessions.map((item: any) => ({
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
      authenticators: props.investor.user.authenticators ? 
        Array.isArray(props.investor.user.authenticators) && props.investor.user.authenticators.length > 0 &&  props.investor.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.authenticators.map((item: any) => ({
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
      orgMemberships: props.investor.user.orgMemberships ? 
        Array.isArray(props.investor.user.orgMemberships) && props.investor.user.orgMemberships.length > 0 &&  props.investor.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.orgMemberships.map((item: any) => ({
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
      fundAssignments: props.investor.user.fundAssignments ? 
        Array.isArray(props.investor.user.fundAssignments) && props.investor.user.fundAssignments.length > 0 &&  props.investor.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.fundAssignments.map((item: any) => ({
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
      linkedProviders: props.investor.user.linkedProviders ? 
        Array.isArray(props.investor.user.linkedProviders) && props.investor.user.linkedProviders.length > 0 &&  props.investor.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.investor.user.accountLinkingRequests ? 
        Array.isArray(props.investor.user.accountLinkingRequests) && props.investor.user.accountLinkingRequests.length > 0 &&  props.investor.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.investor.user.reviewedWaitlistEntries ? 
        Array.isArray(props.investor.user.reviewedWaitlistEntries) && props.investor.user.reviewedWaitlistEntries.length > 0 &&  props.investor.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
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
      dashboardLayouts: props.investor.user.dashboardLayouts ? 
        Array.isArray(props.investor.user.dashboardLayouts) && props.investor.user.dashboardLayouts.length > 0 &&  props.investor.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.dashboardLayouts.map((item: any) => ({
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
        name: props.investor.name !== undefined ? props.investor.name : undefined,
        email: props.investor.email !== undefined ? props.investor.email : undefined,
        type: props.investor.type !== undefined ? props.investor.type : undefined,
        kycStatus: props.investor.kycStatus !== undefined ? props.investor.kycStatus : undefined,
        walletAddress: props.investor.walletAddress !== undefined ? props.investor.walletAddress : undefined,
        deletedAt: props.investor.deletedAt !== undefined ? props.investor.deletedAt : undefined,
    user: props.investor.user ? 
      typeof props.investor.user === 'object' && Object.keys(props.investor.user).length === 1 && Object.keys(props.investor.user)[0] === 'id'
    ? { connect: {
          id: props.investor.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.investor.user.id !== undefined ? props.investor.user.id : undefined,
          email: props.investor.user.email !== undefined ? props.investor.user.email : undefined,
          name: props.investor.user.name !== undefined ? {
              equals: props.investor.user.name 
             } : undefined,
        },
        create: {
          name: props.investor.user.name !== undefined ? props.investor.user.name : undefined,
          email: props.investor.user.email !== undefined ? props.investor.user.email : undefined,
          emailVerified: props.investor.user.emailVerified !== undefined ? props.investor.user.emailVerified : undefined,
          image: props.investor.user.image !== undefined ? props.investor.user.image : undefined,
          deletedAt: props.investor.user.deletedAt !== undefined ? props.investor.user.deletedAt : undefined,
          role: props.investor.user.role !== undefined ? props.investor.user.role : undefined,
          bio: props.investor.user.bio !== undefined ? props.investor.user.bio : undefined,
          jobTitle: props.investor.user.jobTitle !== undefined ? props.investor.user.jobTitle : undefined,
          plan: props.investor.user.plan !== undefined ? props.investor.user.plan : undefined,
          openaiAPIKey: props.investor.user.openaiAPIKey !== undefined ? props.investor.user.openaiAPIKey : undefined,
          openaiModel: props.investor.user.openaiModel !== undefined ? props.investor.user.openaiModel : undefined,
          passwordHash: props.investor.user.passwordHash !== undefined ? props.investor.user.passwordHash : undefined,
          avatarUrl: props.investor.user.avatarUrl !== undefined ? props.investor.user.avatarUrl : undefined,
          onboardingComplete: props.investor.user.onboardingComplete !== undefined ? props.investor.user.onboardingComplete : undefined,
          signupCategory: props.investor.user.signupCategory !== undefined ? props.investor.user.signupCategory : undefined,
      customer: props.investor.user.customer ? 
        typeof props.investor.user.customer === 'object' && Object.keys(props.investor.user.customer).length === 1 && Object.keys(props.investor.user.customer)[0] === 'id'
    ? { connect: {
            id: props.investor.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.investor.user.customer.id !== undefined ? props.investor.user.customer.id : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.investor.user.customer.authUserId !== undefined ? {
                equals: props.investor.user.customer.authUserId 
               } : undefined,
            name: props.investor.user.customer.name !== undefined ? {
                equals: props.investor.user.customer.name 
               } : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? {
                equals: props.investor.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.investor.user.customer.authUserId !== undefined ? props.investor.user.customer.authUserId : undefined,
            name: props.investor.user.customer.name !== undefined ? props.investor.user.customer.name : undefined,
            plan: props.investor.user.customer.plan !== undefined ? props.investor.user.customer.plan : undefined,
            stripeCustomerId: props.investor.user.customer.stripeCustomerId !== undefined ? props.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.investor.user.customer.stripeSubscriptionId !== undefined ? props.investor.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.investor.user.customer.stripePriceId !== undefined ? props.investor.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? props.investor.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.investor.user.accounts ? 
        Array.isArray(props.investor.user.accounts) && props.investor.user.accounts.length > 0 &&  props.investor.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accounts.map((item: any) => ({
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
      sessions: props.investor.user.sessions ? 
        Array.isArray(props.investor.user.sessions) && props.investor.user.sessions.length > 0 &&  props.investor.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.sessions.map((item: any) => ({
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
      authenticators: props.investor.user.authenticators ? 
        Array.isArray(props.investor.user.authenticators) && props.investor.user.authenticators.length > 0 &&  props.investor.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.authenticators.map((item: any) => ({
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
      orgMemberships: props.investor.user.orgMemberships ? 
        Array.isArray(props.investor.user.orgMemberships) && props.investor.user.orgMemberships.length > 0 &&  props.investor.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.orgMemberships.map((item: any) => ({
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
      fundAssignments: props.investor.user.fundAssignments ? 
        Array.isArray(props.investor.user.fundAssignments) && props.investor.user.fundAssignments.length > 0 &&  props.investor.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.fundAssignments.map((item: any) => ({
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
      linkedProviders: props.investor.user.linkedProviders ? 
        Array.isArray(props.investor.user.linkedProviders) && props.investor.user.linkedProviders.length > 0 &&  props.investor.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.investor.user.accountLinkingRequests ? 
        Array.isArray(props.investor.user.accountLinkingRequests) && props.investor.user.accountLinkingRequests.length > 0 &&  props.investor.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.investor.user.reviewedWaitlistEntries ? 
        Array.isArray(props.investor.user.reviewedWaitlistEntries) && props.investor.user.reviewedWaitlistEntries.length > 0 &&  props.investor.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.reviewedWaitlistEntries.map((item: any) => ({
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
      dashboardLayouts: props.investor.user.dashboardLayouts ? 
        Array.isArray(props.investor.user.dashboardLayouts) && props.investor.user.dashboardLayouts.length > 0 &&  props.investor.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.investor.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.investor.user.dashboardLayouts.map((item: any) => ({
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
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_INVESTMENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneInvestment) {
          return response.data.upsertOneInvestment;
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
   * Update multiple Investment records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Investment objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: InvestmentType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_INVESTMENT = gql`
          mutation updateManyInvestment($data: [InvestmentCreateManyInput!]!) {
            updateManyInvestment(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  fundId: prop.fundId !== undefined ? {
    equals: prop.fundId 
  } : undefined,
  investorId: prop.investorId !== undefined ? {
    equals: prop.investorId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  units: prop.units !== undefined ? {
            set: prop.units 
           } : undefined,
  investedAt: prop.investedAt !== undefined ? {
            set: prop.investedAt 
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
    brokerageAccounts: prop.fund.brokerageAccounts ? 
    Array.isArray(prop.fund.brokerageAccounts) && prop.fund.brokerageAccounts.length > 0 && prop.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.fund.brokerageAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.fund.brokerageAccounts.map((item: any) => ({
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
          connect:        item.alerts.map((item: any) => ({
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
          connect:        item.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }))
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
      },
      create: {
        name: prop.fund.name !== undefined ? prop.fund.name : undefined,
        slug: prop.fund.slug !== undefined ? prop.fund.slug : undefined,
        description: prop.fund.description !== undefined ? prop.fund.description : undefined,
        status: prop.fund.status !== undefined ? prop.fund.status : undefined,
        tradingOverrides: prop.fund.tradingOverrides !== undefined ? prop.fund.tradingOverrides : undefined,
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
    brokerageAccounts: prop.fund.brokerageAccounts ? 
      Array.isArray(prop.fund.brokerageAccounts) && prop.fund.brokerageAccounts.length > 0 &&  prop.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.fund.brokerageAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.fund.brokerageAccounts.map((item: any) => ({
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
          connect:        item.alerts.map((item: any) => ({
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
          connect:        item.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }))
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
      },
    }
  } : undefined,
  investor: prop.investor ? 
  typeof prop.investor === 'object' && Object.keys(prop.investor).length === 1 && (Object.keys(prop.investor)[0] === 'id' || Object.keys(prop.investor)[0] === 'symbol')
? {
  connect: {
    id: prop.investor.id
  }
} : { upsert: {
      where: {
        id: prop.investor.id !== undefined ? {
            equals: prop.investor.id
          } : undefined,
        name: prop.investor.name !== undefined ? {
            equals: prop.investor.name
          } : undefined,
        email: prop.investor.email !== undefined ? {
            equals: prop.investor.email
          } : undefined,
        userId: prop.investor.userId !== undefined ? {
            equals: prop.investor.userId
          } : undefined,
      },
      update: {
        id: prop.investor.id !== undefined ? {
            set: prop.investor.id
          } : undefined,
        name: prop.investor.name !== undefined ? {
            set: prop.investor.name
          } : undefined,
        email: prop.investor.email !== undefined ? {
            set: prop.investor.email
          } : undefined,
        type: prop.investor.type !== undefined ? {
            set: prop.investor.type
          } : undefined,
        kycStatus: prop.investor.kycStatus !== undefined ? {
            set: prop.investor.kycStatus
          } : undefined,
        walletAddress: prop.investor.walletAddress !== undefined ? {
            set: prop.investor.walletAddress
          } : undefined,
        deletedAt: prop.investor.deletedAt !== undefined ? {
            set: prop.investor.deletedAt
          } : undefined,
    user: prop.investor.user ? 
    typeof prop.investor.user === 'object' && Object.keys(prop.investor.user).length === 1 && (Object.keys(prop.investor.user)[0] === 'id' || Object.keys(prop.investor.user)[0] === 'symbol')
? {
    connect: {
      id: prop.investor.user.id
    }
} : { upsert: {
        where: {
          id: prop.investor.user.id !== undefined ? {
              equals: prop.investor.user.id
            } : undefined,
          name: prop.investor.user.name !== undefined ? {
              equals: prop.investor.user.name
            } : undefined,
          email: prop.investor.user.email !== undefined ? {
              equals: prop.investor.user.email
            } : undefined,
          customerId: prop.investor.user.customerId !== undefined ? {
              equals: prop.investor.user.customerId
            } : undefined,
        },
        update: {
          id: prop.investor.user.id !== undefined ? {
              set: prop.investor.user.id
            } : undefined,
          name: prop.investor.user.name !== undefined ? {
              set: prop.investor.user.name
            } : undefined,
          email: prop.investor.user.email !== undefined ? {
              set: prop.investor.user.email
            } : undefined,
          emailVerified: prop.investor.user.emailVerified !== undefined ? {
              set: prop.investor.user.emailVerified
            } : undefined,
          image: prop.investor.user.image !== undefined ? {
              set: prop.investor.user.image
            } : undefined,
          deletedAt: prop.investor.user.deletedAt !== undefined ? {
              set: prop.investor.user.deletedAt
            } : undefined,
          role: prop.investor.user.role !== undefined ? {
              set: prop.investor.user.role
            } : undefined,
          bio: prop.investor.user.bio !== undefined ? {
              set: prop.investor.user.bio
            } : undefined,
          jobTitle: prop.investor.user.jobTitle !== undefined ? {
              set: prop.investor.user.jobTitle
            } : undefined,
          plan: prop.investor.user.plan !== undefined ? {
              set: prop.investor.user.plan
            } : undefined,
          openaiAPIKey: prop.investor.user.openaiAPIKey !== undefined ? {
              set: prop.investor.user.openaiAPIKey
            } : undefined,
          openaiModel: prop.investor.user.openaiModel !== undefined ? {
              set: prop.investor.user.openaiModel
            } : undefined,
          passwordHash: prop.investor.user.passwordHash !== undefined ? {
              set: prop.investor.user.passwordHash
            } : undefined,
          avatarUrl: prop.investor.user.avatarUrl !== undefined ? {
              set: prop.investor.user.avatarUrl
            } : undefined,
          onboardingComplete: prop.investor.user.onboardingComplete !== undefined ? {
              set: prop.investor.user.onboardingComplete
            } : undefined,
          signupCategory: prop.investor.user.signupCategory !== undefined ? {
              set: prop.investor.user.signupCategory
            } : undefined,
      customer: prop.investor.user.customer ? 
      typeof prop.investor.user.customer === 'object' && Object.keys(prop.investor.user.customer).length === 1 && (Object.keys(prop.investor.user.customer)[0] === 'id' || Object.keys(prop.investor.user.customer)[0] === 'symbol')
? {
      connect: {
        id: prop.investor.user.customer.id
      }
} : { upsert: {
          where: {
            id: prop.investor.user.customer.id !== undefined ? {
                equals: prop.investor.user.customer.id
              } : undefined,
            authUserId: prop.investor.user.customer.authUserId !== undefined ? {
                equals: prop.investor.user.customer.authUserId
              } : undefined,
            name: prop.investor.user.customer.name !== undefined ? {
                equals: prop.investor.user.customer.name
              } : undefined,
            stripeCustomerId: prop.investor.user.customer.stripeCustomerId !== undefined ? {
                equals: prop.investor.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: prop.investor.user.customer.stripeSubscriptionId !== undefined ? {
                equals: prop.investor.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: prop.investor.user.customer.stripePriceId !== undefined ? {
                equals: prop.investor.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: prop.investor.user.customer.authUserId !== undefined ? {
                set: prop.investor.user.customer.authUserId
              } : undefined,
            name: prop.investor.user.customer.name !== undefined ? {
                set: prop.investor.user.customer.name
              } : undefined,
            plan: prop.investor.user.customer.plan !== undefined ? {
                set: prop.investor.user.customer.plan
              } : undefined,
            stripeCustomerId: prop.investor.user.customer.stripeCustomerId !== undefined ? {
                set: prop.investor.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: prop.investor.user.customer.stripeSubscriptionId !== undefined ? {
                set: prop.investor.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: prop.investor.user.customer.stripePriceId !== undefined ? {
                set: prop.investor.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: prop.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: prop.investor.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: prop.investor.user.customer.authUserId !== undefined ? prop.investor.user.customer.authUserId : undefined,
            name: prop.investor.user.customer.name !== undefined ? prop.investor.user.customer.name : undefined,
            plan: prop.investor.user.customer.plan !== undefined ? prop.investor.user.customer.plan : undefined,
            stripeCustomerId: prop.investor.user.customer.stripeCustomerId !== undefined ? prop.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.investor.user.customer.stripeSubscriptionId !== undefined ? prop.investor.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.investor.user.customer.stripePriceId !== undefined ? prop.investor.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.investor.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.investor.user.accounts ? 
      Array.isArray(prop.investor.user.accounts) && prop.investor.user.accounts.length > 0 && prop.investor.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.investor.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.investor.user.accounts.map((item: any) => ({
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
      sessions: prop.investor.user.sessions ? 
      Array.isArray(prop.investor.user.sessions) && prop.investor.user.sessions.length > 0 && prop.investor.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.investor.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.investor.user.sessions.map((item: any) => ({
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
      authenticators: prop.investor.user.authenticators ? 
      Array.isArray(prop.investor.user.authenticators) && prop.investor.user.authenticators.length > 0 && prop.investor.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.investor.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.investor.user.authenticators.map((item: any) => ({
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
      orgMemberships: prop.investor.user.orgMemberships ? 
      Array.isArray(prop.investor.user.orgMemberships) && prop.investor.user.orgMemberships.length > 0 && prop.investor.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.investor.user.orgMemberships.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.investor.user.orgMemberships.map((item: any) => ({
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
      fundAssignments: prop.investor.user.fundAssignments ? 
      Array.isArray(prop.investor.user.fundAssignments) && prop.investor.user.fundAssignments.length > 0 && prop.investor.user.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.investor.user.fundAssignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.investor.user.fundAssignments.map((item: any) => ({
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
      linkedProviders: prop.investor.user.linkedProviders ? 
      Array.isArray(prop.investor.user.linkedProviders) && prop.investor.user.linkedProviders.length > 0 && prop.investor.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.investor.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.investor.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: prop.investor.user.accountLinkingRequests ? 
      Array.isArray(prop.investor.user.accountLinkingRequests) && prop.investor.user.accountLinkingRequests.length > 0 && prop.investor.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.investor.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.investor.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: prop.investor.user.reviewedWaitlistEntries ? 
      Array.isArray(prop.investor.user.reviewedWaitlistEntries) && prop.investor.user.reviewedWaitlistEntries.length > 0 && prop.investor.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.investor.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.investor.user.reviewedWaitlistEntries.map((item: any) => ({
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
      dashboardLayouts: prop.investor.user.dashboardLayouts ? 
      Array.isArray(prop.investor.user.dashboardLayouts) && prop.investor.user.dashboardLayouts.length > 0 && prop.investor.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.investor.user.dashboardLayouts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.investor.user.dashboardLayouts.map((item: any) => ({
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
          name: prop.investor.user.name !== undefined ? prop.investor.user.name : undefined,
          email: prop.investor.user.email !== undefined ? prop.investor.user.email : undefined,
          emailVerified: prop.investor.user.emailVerified !== undefined ? prop.investor.user.emailVerified : undefined,
          image: prop.investor.user.image !== undefined ? prop.investor.user.image : undefined,
          deletedAt: prop.investor.user.deletedAt !== undefined ? prop.investor.user.deletedAt : undefined,
          role: prop.investor.user.role !== undefined ? prop.investor.user.role : undefined,
          bio: prop.investor.user.bio !== undefined ? prop.investor.user.bio : undefined,
          jobTitle: prop.investor.user.jobTitle !== undefined ? prop.investor.user.jobTitle : undefined,
          plan: prop.investor.user.plan !== undefined ? prop.investor.user.plan : undefined,
          openaiAPIKey: prop.investor.user.openaiAPIKey !== undefined ? prop.investor.user.openaiAPIKey : undefined,
          openaiModel: prop.investor.user.openaiModel !== undefined ? prop.investor.user.openaiModel : undefined,
          passwordHash: prop.investor.user.passwordHash !== undefined ? prop.investor.user.passwordHash : undefined,
          avatarUrl: prop.investor.user.avatarUrl !== undefined ? prop.investor.user.avatarUrl : undefined,
          onboardingComplete: prop.investor.user.onboardingComplete !== undefined ? prop.investor.user.onboardingComplete : undefined,
          signupCategory: prop.investor.user.signupCategory !== undefined ? prop.investor.user.signupCategory : undefined,
      customer: prop.investor.user.customer ? 
        typeof prop.investor.user.customer === 'object' && Object.keys(prop.investor.user.customer).length === 1 && Object.keys(prop.investor.user.customer)[0] === 'id'
    ? { connect: {
            id: prop.investor.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.investor.user.customer.id !== undefined ? prop.investor.user.customer.id : undefined,
            stripeCustomerId: prop.investor.user.customer.stripeCustomerId !== undefined ? prop.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.investor.user.customer.stripeSubscriptionId !== undefined ? prop.investor.user.customer.stripeSubscriptionId : undefined,
            authUserId: prop.investor.user.customer.authUserId !== undefined ? {
                equals: prop.investor.user.customer.authUserId 
               } : undefined,
            name: prop.investor.user.customer.name !== undefined ? {
                equals: prop.investor.user.customer.name 
               } : undefined,
            stripePriceId: prop.investor.user.customer.stripePriceId !== undefined ? {
                equals: prop.investor.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: prop.investor.user.customer.authUserId !== undefined ? prop.investor.user.customer.authUserId : undefined,
            name: prop.investor.user.customer.name !== undefined ? prop.investor.user.customer.name : undefined,
            plan: prop.investor.user.customer.plan !== undefined ? prop.investor.user.customer.plan : undefined,
            stripeCustomerId: prop.investor.user.customer.stripeCustomerId !== undefined ? prop.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.investor.user.customer.stripeSubscriptionId !== undefined ? prop.investor.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.investor.user.customer.stripePriceId !== undefined ? prop.investor.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.investor.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.investor.user.accounts ? 
        Array.isArray(prop.investor.user.accounts) && prop.investor.user.accounts.length > 0 &&  prop.investor.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.accounts.map((item: any) => ({
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
      sessions: prop.investor.user.sessions ? 
        Array.isArray(prop.investor.user.sessions) && prop.investor.user.sessions.length > 0 &&  prop.investor.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.sessions.map((item: any) => ({
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
      authenticators: prop.investor.user.authenticators ? 
        Array.isArray(prop.investor.user.authenticators) && prop.investor.user.authenticators.length > 0 &&  prop.investor.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.authenticators.map((item: any) => ({
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
      orgMemberships: prop.investor.user.orgMemberships ? 
        Array.isArray(prop.investor.user.orgMemberships) && prop.investor.user.orgMemberships.length > 0 &&  prop.investor.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.orgMemberships.map((item: any) => ({
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
      fundAssignments: prop.investor.user.fundAssignments ? 
        Array.isArray(prop.investor.user.fundAssignments) && prop.investor.user.fundAssignments.length > 0 &&  prop.investor.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.fundAssignments.map((item: any) => ({
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
      linkedProviders: prop.investor.user.linkedProviders ? 
        Array.isArray(prop.investor.user.linkedProviders) && prop.investor.user.linkedProviders.length > 0 &&  prop.investor.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: prop.investor.user.accountLinkingRequests ? 
        Array.isArray(prop.investor.user.accountLinkingRequests) && prop.investor.user.accountLinkingRequests.length > 0 &&  prop.investor.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: prop.investor.user.reviewedWaitlistEntries ? 
        Array.isArray(prop.investor.user.reviewedWaitlistEntries) && prop.investor.user.reviewedWaitlistEntries.length > 0 &&  prop.investor.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.reviewedWaitlistEntries.map((item: any) => ({
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
      dashboardLayouts: prop.investor.user.dashboardLayouts ? 
        Array.isArray(prop.investor.user.dashboardLayouts) && prop.investor.user.dashboardLayouts.length > 0 &&  prop.investor.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.dashboardLayouts.map((item: any) => ({
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
        name: prop.investor.name !== undefined ? prop.investor.name : undefined,
        email: prop.investor.email !== undefined ? prop.investor.email : undefined,
        type: prop.investor.type !== undefined ? prop.investor.type : undefined,
        kycStatus: prop.investor.kycStatus !== undefined ? prop.investor.kycStatus : undefined,
        walletAddress: prop.investor.walletAddress !== undefined ? prop.investor.walletAddress : undefined,
        deletedAt: prop.investor.deletedAt !== undefined ? prop.investor.deletedAt : undefined,
    user: prop.investor.user ? 
      typeof prop.investor.user === 'object' && Object.keys(prop.investor.user).length === 1 && Object.keys(prop.investor.user)[0] === 'id'
    ? { connect: {
          id: prop.investor.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.investor.user.id !== undefined ? prop.investor.user.id : undefined,
          email: prop.investor.user.email !== undefined ? prop.investor.user.email : undefined,
          name: prop.investor.user.name !== undefined ? {
              equals: prop.investor.user.name 
             } : undefined,
        },
        create: {
          name: prop.investor.user.name !== undefined ? prop.investor.user.name : undefined,
          email: prop.investor.user.email !== undefined ? prop.investor.user.email : undefined,
          emailVerified: prop.investor.user.emailVerified !== undefined ? prop.investor.user.emailVerified : undefined,
          image: prop.investor.user.image !== undefined ? prop.investor.user.image : undefined,
          deletedAt: prop.investor.user.deletedAt !== undefined ? prop.investor.user.deletedAt : undefined,
          role: prop.investor.user.role !== undefined ? prop.investor.user.role : undefined,
          bio: prop.investor.user.bio !== undefined ? prop.investor.user.bio : undefined,
          jobTitle: prop.investor.user.jobTitle !== undefined ? prop.investor.user.jobTitle : undefined,
          plan: prop.investor.user.plan !== undefined ? prop.investor.user.plan : undefined,
          openaiAPIKey: prop.investor.user.openaiAPIKey !== undefined ? prop.investor.user.openaiAPIKey : undefined,
          openaiModel: prop.investor.user.openaiModel !== undefined ? prop.investor.user.openaiModel : undefined,
          passwordHash: prop.investor.user.passwordHash !== undefined ? prop.investor.user.passwordHash : undefined,
          avatarUrl: prop.investor.user.avatarUrl !== undefined ? prop.investor.user.avatarUrl : undefined,
          onboardingComplete: prop.investor.user.onboardingComplete !== undefined ? prop.investor.user.onboardingComplete : undefined,
          signupCategory: prop.investor.user.signupCategory !== undefined ? prop.investor.user.signupCategory : undefined,
      customer: prop.investor.user.customer ? 
        typeof prop.investor.user.customer === 'object' && Object.keys(prop.investor.user.customer).length === 1 && Object.keys(prop.investor.user.customer)[0] === 'id'
    ? { connect: {
            id: prop.investor.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.investor.user.customer.id !== undefined ? prop.investor.user.customer.id : undefined,
            stripeCustomerId: prop.investor.user.customer.stripeCustomerId !== undefined ? prop.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.investor.user.customer.stripeSubscriptionId !== undefined ? prop.investor.user.customer.stripeSubscriptionId : undefined,
            authUserId: prop.investor.user.customer.authUserId !== undefined ? {
                equals: prop.investor.user.customer.authUserId 
               } : undefined,
            name: prop.investor.user.customer.name !== undefined ? {
                equals: prop.investor.user.customer.name 
               } : undefined,
            stripePriceId: prop.investor.user.customer.stripePriceId !== undefined ? {
                equals: prop.investor.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: prop.investor.user.customer.authUserId !== undefined ? prop.investor.user.customer.authUserId : undefined,
            name: prop.investor.user.customer.name !== undefined ? prop.investor.user.customer.name : undefined,
            plan: prop.investor.user.customer.plan !== undefined ? prop.investor.user.customer.plan : undefined,
            stripeCustomerId: prop.investor.user.customer.stripeCustomerId !== undefined ? prop.investor.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.investor.user.customer.stripeSubscriptionId !== undefined ? prop.investor.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.investor.user.customer.stripePriceId !== undefined ? prop.investor.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.investor.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.investor.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.investor.user.accounts ? 
        Array.isArray(prop.investor.user.accounts) && prop.investor.user.accounts.length > 0 &&  prop.investor.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.accounts.map((item: any) => ({
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
      sessions: prop.investor.user.sessions ? 
        Array.isArray(prop.investor.user.sessions) && prop.investor.user.sessions.length > 0 &&  prop.investor.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.sessions.map((item: any) => ({
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
      authenticators: prop.investor.user.authenticators ? 
        Array.isArray(prop.investor.user.authenticators) && prop.investor.user.authenticators.length > 0 &&  prop.investor.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.authenticators.map((item: any) => ({
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
      orgMemberships: prop.investor.user.orgMemberships ? 
        Array.isArray(prop.investor.user.orgMemberships) && prop.investor.user.orgMemberships.length > 0 &&  prop.investor.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.orgMemberships.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.orgMemberships.map((item: any) => ({
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
      fundAssignments: prop.investor.user.fundAssignments ? 
        Array.isArray(prop.investor.user.fundAssignments) && prop.investor.user.fundAssignments.length > 0 &&  prop.investor.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.fundAssignments.map((item: any) => ({
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
      linkedProviders: prop.investor.user.linkedProviders ? 
        Array.isArray(prop.investor.user.linkedProviders) && prop.investor.user.linkedProviders.length > 0 &&  prop.investor.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: prop.investor.user.accountLinkingRequests ? 
        Array.isArray(prop.investor.user.accountLinkingRequests) && prop.investor.user.accountLinkingRequests.length > 0 &&  prop.investor.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: prop.investor.user.reviewedWaitlistEntries ? 
        Array.isArray(prop.investor.user.reviewedWaitlistEntries) && prop.investor.user.reviewedWaitlistEntries.length > 0 &&  prop.investor.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.reviewedWaitlistEntries.map((item: any) => ({
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
      dashboardLayouts: prop.investor.user.dashboardLayouts ? 
        Array.isArray(prop.investor.user.dashboardLayouts) && prop.investor.user.dashboardLayouts.length > 0 &&  prop.investor.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.investor.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.investor.user.dashboardLayouts.map((item: any) => ({
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
    }
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_INVESTMENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyInvestment) {
          return response.data.updateManyInvestment;
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
   * Delete a single Investment record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Investment or null.
   */
  async delete(props: InvestmentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InvestmentType> {
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

        const DELETE_ONE_INVESTMENT = gql`
          mutation deleteOneInvestment($where: InvestmentWhereUniqueInput!) {
            deleteOneInvestment(where: $where) {
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
          mutation: DELETE_ONE_INVESTMENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneInvestment) {
          return response.data.deleteOneInvestment;
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
   * Retrieve a single Investment record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved Investment or null.
   */
  async get(props: InvestmentType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<InvestmentType | null> {
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

        const GET_INVESTMENT = gql`
          query getInvestment($where: InvestmentWhereUniqueInput!) {
            getInvestment(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  fundId: props.fundId !== undefined ? {
    equals: props.fundId 
  } : undefined,
  investorId: props.investorId !== undefined ? {
    equals: props.investorId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_INVESTMENT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getInvestment ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Investment found') {
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
   * Retrieve all Investments records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Investment records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InvestmentType[] | null> {
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

        const GET_ALL_INVESTMENT = gql`
          query getAllInvestment {
            investments {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_INVESTMENT,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.investments ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Investment found') {
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
   * Find multiple Investment records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found Investment records or null.
   */
  async findMany(props: InvestmentType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<InvestmentType[] | null> {
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

        const FIND_MANY_INVESTMENT = gql`
          query findManyInvestment($where: InvestmentWhereInput!) {
            investments(where: $where) {
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
  investorId: props.investorId !== undefined ? {
    equals: props.investorId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_INVESTMENT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.investments) {
          return response.data.investments;
        } else {
          return [] as InvestmentType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Investment found') {
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
