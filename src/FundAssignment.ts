
  
import { FundAssignment as FundAssignmentType } from './generated/typegraphql-prisma/models/FundAssignment';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the FundAssignment model.
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
        funds {
id
        }
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
        fundId
        fund {
id
        }
        investorId
        units
        investedAt
        status
        createdAt
        updatedAt
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
        token
        email
        waitlistEntryId
        waitlistEntry {
id
        }
        used
        usedAt
        expiresAt
        createdAt
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

  `;

  export const FundAssignment = {

    /**
     * Create a new FundAssignment record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created FundAssignment or null.
     */

    /**
     * Create a new FundAssignment record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created FundAssignment or null.
     */
    async create(props: FundAssignmentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FundAssignmentType> {
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

          const CREATE_ONE_FUNDASSIGNMENT = gql`
              mutation createOneFundAssignment($data: FundAssignmentCreateInput!) {
                createOneFundAssignment(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                role: props.role !== undefined ? props.role : undefined,
  permissions: props.permissions !== undefined ? {
    set: props.permissions 
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
  user: props.user ? 
    typeof props.user === 'object' && Object.keys(props.user).length === 1 && Object.keys(props.user)[0] === 'id'
    ? { connect: {
        id: props.user.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.user.id !== undefined ? props.user.id : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name 
           } : undefined,
      },
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        deletedAt: props.user.deletedAt !== undefined ? props.user.deletedAt : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        passwordHash: props.user.passwordHash !== undefined ? props.user.passwordHash : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? props.user.avatarUrl : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? props.user.onboardingComplete : undefined,
        signupCategory: props.user.signupCategory !== undefined ? props.user.signupCategory : undefined,
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId 
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
      Array.isArray(props.user.accounts) && props.user.accounts.length > 0 &&  props.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
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
    sessions: props.user.sessions ? 
      Array.isArray(props.user.sessions) && props.user.sessions.length > 0 &&  props.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.sessions.map((item: any) => ({
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
    authenticators: props.user.authenticators ? 
      Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 &&  props.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
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
    orgMemberships: props.user.orgMemberships ? 
      Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 &&  props.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.orgMemberships.map((item: any) => ({
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
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.user.investorProfile ? 
      typeof props.user.investorProfile === 'object' && Object.keys(props.user.investorProfile).length === 1 && Object.keys(props.user.investorProfile)[0] === 'id'
    ? { connect: {
          id: props.user.investorProfile.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.investorProfile.id !== undefined ? props.user.investorProfile.id : undefined,
          userId: props.user.investorProfile.userId !== undefined ? props.user.investorProfile.userId : undefined,
          name: props.user.investorProfile.name !== undefined ? {
              equals: props.user.investorProfile.name 
             } : undefined,
          email: props.user.investorProfile.email !== undefined ? {
              equals: props.user.investorProfile.email 
             } : undefined,
        },
        create: {
          name: props.user.investorProfile.name !== undefined ? props.user.investorProfile.name : undefined,
          email: props.user.investorProfile.email !== undefined ? props.user.investorProfile.email : undefined,
          type: props.user.investorProfile.type !== undefined ? props.user.investorProfile.type : undefined,
          kycStatus: props.user.investorProfile.kycStatus !== undefined ? props.user.investorProfile.kycStatus : undefined,
          walletAddress: props.user.investorProfile.walletAddress !== undefined ? props.user.investorProfile.walletAddress : undefined,
          deletedAt: props.user.investorProfile.deletedAt !== undefined ? props.user.investorProfile.deletedAt : undefined,
      investments: props.user.investorProfile.investments ? 
        Array.isArray(props.user.investorProfile.investments) && props.user.investorProfile.investments.length > 0 &&  props.user.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.user.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.user.investorProfile.investments.map((item: any) => ({
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
    linkedProviders: props.user.linkedProviders ? 
      Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 &&  props.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.user.accountLinkingRequests ? 
      Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 &&  props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accountLinkingRequests.map((item: any) => ({
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
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
      Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 &&  props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.reviewedWaitlistEntries.map((item: any) => ({
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
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    dashboardLayouts: props.user.dashboardLayouts ? 
      Array.isArray(props.user.dashboardLayouts) && props.user.dashboardLayouts.length > 0 &&  props.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.dashboardLayouts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.dashboardLayouts.map((item: any) => ({
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
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_FUNDASSIGNMENT,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneFundAssignment) {
            return response.data.createOneFundAssignment;
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
   * Create multiple FundAssignment records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of FundAssignment objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: FundAssignmentType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_FUNDASSIGNMENT = gql`
          mutation createManyFundAssignment($data: [FundAssignmentCreateManyInput!]!) {
            createManyFundAssignment(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      fundId: prop.fundId !== undefined ? prop.fundId : undefined,
  userId: prop.userId !== undefined ? prop.userId : undefined,
  role: prop.role !== undefined ? prop.role : undefined,
  permissions: prop.permissions !== undefined ? {
    set: prop.permissions 
  } : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_FUNDASSIGNMENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyFundAssignment) {
          return response.data.createManyFundAssignment;
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
   * Update a single FundAssignment record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated FundAssignment or null.
   */
  async update(props: FundAssignmentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FundAssignmentType> {
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

        const UPDATE_ONE_FUNDASSIGNMENT = gql`
          mutation updateOneFundAssignment($data: FundAssignmentUpdateInput!, $where: FundAssignmentWhereUniqueInput!) {
            updateOneFundAssignment(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  fundId: props.fundId !== undefined ? {
    equals: props.fundId 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  role: props.role !== undefined ? {
            set: props.role 
           } : undefined,
  permissions: props.permissions !== undefined ? {
            set: props.permissions 
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
  user: props.user ? 
  typeof props.user === 'object' && Object.keys(props.user).length === 1 && (Object.keys(props.user)[0] === 'id' || Object.keys(props.user)[0] === 'symbol')
? {
  connect: {
    id: props.user.id
  }
} : { upsert: {
      where: {
        id: props.user.id !== undefined ? {
            equals: props.user.id
          } : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name
          } : undefined,
        email: props.user.email !== undefined ? {
            equals: props.user.email
          } : undefined,
        customerId: props.user.customerId !== undefined ? {
            equals: props.user.customerId
          } : undefined,
      },
      update: {
        id: props.user.id !== undefined ? {
            set: props.user.id
          } : undefined,
        name: props.user.name !== undefined ? {
            set: props.user.name
          } : undefined,
        email: props.user.email !== undefined ? {
            set: props.user.email
          } : undefined,
        emailVerified: props.user.emailVerified !== undefined ? {
            set: props.user.emailVerified
          } : undefined,
        image: props.user.image !== undefined ? {
            set: props.user.image
          } : undefined,
        deletedAt: props.user.deletedAt !== undefined ? {
            set: props.user.deletedAt
          } : undefined,
        role: props.user.role !== undefined ? {
            set: props.user.role
          } : undefined,
        bio: props.user.bio !== undefined ? {
            set: props.user.bio
          } : undefined,
        jobTitle: props.user.jobTitle !== undefined ? {
            set: props.user.jobTitle
          } : undefined,
        plan: props.user.plan !== undefined ? {
            set: props.user.plan
          } : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? {
            set: props.user.openaiAPIKey
          } : undefined,
        openaiModel: props.user.openaiModel !== undefined ? {
            set: props.user.openaiModel
          } : undefined,
        passwordHash: props.user.passwordHash !== undefined ? {
            set: props.user.passwordHash
          } : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? {
            set: props.user.avatarUrl
          } : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? {
            set: props.user.onboardingComplete
          } : undefined,
        signupCategory: props.user.signupCategory !== undefined ? {
            set: props.user.signupCategory
          } : undefined,
    customer: props.user.customer ? 
    typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && (Object.keys(props.user.customer)[0] === 'id' || Object.keys(props.user.customer)[0] === 'symbol')
? {
    connect: {
      id: props.user.customer.id
    }
} : { upsert: {
        where: {
          id: props.user.customer.id !== undefined ? {
              equals: props.user.customer.id
            } : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId
            } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name
            } : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? {
              equals: props.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? {
              equals: props.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: props.user.customer.authUserId !== undefined ? {
              set: props.user.customer.authUserId
            } : undefined,
          name: props.user.customer.name !== undefined ? {
              set: props.user.customer.name
            } : undefined,
          plan: props.user.customer.plan !== undefined ? {
              set: props.user.customer.plan
            } : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? {
              set: props.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? {
              set: props.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              set: props.user.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: props.user.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
    Array.isArray(props.user.accounts) && props.user.accounts.length > 0 && props.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.accounts.map((item: any) => ({
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
    sessions: props.user.sessions ? 
    Array.isArray(props.user.sessions) && props.user.sessions.length > 0 && props.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.sessions.map((item: any) => ({
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
    authenticators: props.user.authenticators ? 
    Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 && props.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.authenticators.map((item: any) => ({
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
    orgMemberships: props.user.orgMemberships ? 
    Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 && props.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.orgMemberships.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.orgMemberships.map((item: any) => ({
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
      organization: item.organization ? 
      typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && (Object.keys(item.organization)[0] === 'id' || Object.keys(item.organization)[0] === 'symbol')
? {
      connect: {
        id: item.organization.id
      }
} : { upsert: {
          where: {
            id: item.organization.id !== undefined ? {
                equals: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                equals: item.organization.slug
              } : undefined,
          },
          update: {
            id: item.organization.id !== undefined ? {
                set: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                set: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                set: item.organization.slug
              } : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? {
                set: item.organization.logoUrl
              } : undefined,
            website: item.organization.website !== undefined ? {
                set: item.organization.website
              } : undefined,
            businessType: item.organization.businessType !== undefined ? {
                set: item.organization.businessType
              } : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? {
                set: item.organization.jurisdiction
              } : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? {
                set: item.organization.regulatoryStatus
              } : undefined,
            description: item.organization.description !== undefined ? {
                set: item.organization.description
              } : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? {
                set: item.organization.tradingDefaults
              } : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? {
                set: item.organization.llmDefaults
              } : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? {
                set: item.organization.deletedAt
              } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.user.investorProfile ? 
    typeof props.user.investorProfile === 'object' && Object.keys(props.user.investorProfile).length === 1 && (Object.keys(props.user.investorProfile)[0] === 'id' || Object.keys(props.user.investorProfile)[0] === 'symbol')
? {
    connect: {
      id: props.user.investorProfile.id
    }
} : { upsert: {
        where: {
          id: props.user.investorProfile.id !== undefined ? {
              equals: props.user.investorProfile.id
            } : undefined,
          name: props.user.investorProfile.name !== undefined ? {
              equals: props.user.investorProfile.name
            } : undefined,
          email: props.user.investorProfile.email !== undefined ? {
              equals: props.user.investorProfile.email
            } : undefined,
          userId: props.user.investorProfile.userId !== undefined ? {
              equals: props.user.investorProfile.userId
            } : undefined,
        },
        update: {
          id: props.user.investorProfile.id !== undefined ? {
              set: props.user.investorProfile.id
            } : undefined,
          name: props.user.investorProfile.name !== undefined ? {
              set: props.user.investorProfile.name
            } : undefined,
          email: props.user.investorProfile.email !== undefined ? {
              set: props.user.investorProfile.email
            } : undefined,
          type: props.user.investorProfile.type !== undefined ? {
              set: props.user.investorProfile.type
            } : undefined,
          kycStatus: props.user.investorProfile.kycStatus !== undefined ? {
              set: props.user.investorProfile.kycStatus
            } : undefined,
          walletAddress: props.user.investorProfile.walletAddress !== undefined ? {
              set: props.user.investorProfile.walletAddress
            } : undefined,
          deletedAt: props.user.investorProfile.deletedAt !== undefined ? {
              set: props.user.investorProfile.deletedAt
            } : undefined,
      investments: props.user.investorProfile.investments ? 
      Array.isArray(props.user.investorProfile.investments) && props.user.investorProfile.investments.length > 0 && props.user.investorProfile.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.user.investorProfile.investments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.user.investorProfile.investments.map((item: any) => ({
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
          name: props.user.investorProfile.name !== undefined ? props.user.investorProfile.name : undefined,
          email: props.user.investorProfile.email !== undefined ? props.user.investorProfile.email : undefined,
          type: props.user.investorProfile.type !== undefined ? props.user.investorProfile.type : undefined,
          kycStatus: props.user.investorProfile.kycStatus !== undefined ? props.user.investorProfile.kycStatus : undefined,
          walletAddress: props.user.investorProfile.walletAddress !== undefined ? props.user.investorProfile.walletAddress : undefined,
          deletedAt: props.user.investorProfile.deletedAt !== undefined ? props.user.investorProfile.deletedAt : undefined,
      investments: props.user.investorProfile.investments ? 
        Array.isArray(props.user.investorProfile.investments) && props.user.investorProfile.investments.length > 0 &&  props.user.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.user.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.user.investorProfile.investments.map((item: any) => ({
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
    linkedProviders: props.user.linkedProviders ? 
    Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 && props.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.user.accountLinkingRequests ? 
    Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 && props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.accountLinkingRequests.map((item: any) => ({
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
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
    Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 && props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.reviewedWaitlistEntries.map((item: any) => ({
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
      inviteToken: item.inviteToken ? 
      typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && (Object.keys(item.inviteToken)[0] === 'id' || Object.keys(item.inviteToken)[0] === 'symbol')
? {
      connect: {
        id: item.inviteToken.id
      }
} : { upsert: {
          where: {
            id: item.inviteToken.id !== undefined ? {
                equals: item.inviteToken.id
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email
              } : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? {
                equals: item.inviteToken.waitlistEntryId
              } : undefined,
          },
          update: {
            id: item.inviteToken.id !== undefined ? {
                set: item.inviteToken.id
              } : undefined,
            token: item.inviteToken.token !== undefined ? {
                set: item.inviteToken.token
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                set: item.inviteToken.email
              } : undefined,
            used: item.inviteToken.used !== undefined ? {
                set: item.inviteToken.used
              } : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? {
                set: item.inviteToken.usedAt
              } : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? {
                set: item.inviteToken.expiresAt
              } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
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
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    dashboardLayouts: props.user.dashboardLayouts ? 
    Array.isArray(props.user.dashboardLayouts) && props.user.dashboardLayouts.length > 0 && props.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.dashboardLayouts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.dashboardLayouts.map((item: any) => ({
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
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        deletedAt: props.user.deletedAt !== undefined ? props.user.deletedAt : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        passwordHash: props.user.passwordHash !== undefined ? props.user.passwordHash : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? props.user.avatarUrl : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? props.user.onboardingComplete : undefined,
        signupCategory: props.user.signupCategory !== undefined ? props.user.signupCategory : undefined,
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId 
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
      Array.isArray(props.user.accounts) && props.user.accounts.length > 0 &&  props.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
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
    sessions: props.user.sessions ? 
      Array.isArray(props.user.sessions) && props.user.sessions.length > 0 &&  props.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.sessions.map((item: any) => ({
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
    authenticators: props.user.authenticators ? 
      Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 &&  props.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
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
    orgMemberships: props.user.orgMemberships ? 
      Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 &&  props.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.orgMemberships.map((item: any) => ({
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
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.user.investorProfile ? 
      typeof props.user.investorProfile === 'object' && Object.keys(props.user.investorProfile).length === 1 && Object.keys(props.user.investorProfile)[0] === 'id'
    ? { connect: {
          id: props.user.investorProfile.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.investorProfile.id !== undefined ? props.user.investorProfile.id : undefined,
          userId: props.user.investorProfile.userId !== undefined ? props.user.investorProfile.userId : undefined,
          name: props.user.investorProfile.name !== undefined ? {
              equals: props.user.investorProfile.name 
             } : undefined,
          email: props.user.investorProfile.email !== undefined ? {
              equals: props.user.investorProfile.email 
             } : undefined,
        },
        create: {
          name: props.user.investorProfile.name !== undefined ? props.user.investorProfile.name : undefined,
          email: props.user.investorProfile.email !== undefined ? props.user.investorProfile.email : undefined,
          type: props.user.investorProfile.type !== undefined ? props.user.investorProfile.type : undefined,
          kycStatus: props.user.investorProfile.kycStatus !== undefined ? props.user.investorProfile.kycStatus : undefined,
          walletAddress: props.user.investorProfile.walletAddress !== undefined ? props.user.investorProfile.walletAddress : undefined,
          deletedAt: props.user.investorProfile.deletedAt !== undefined ? props.user.investorProfile.deletedAt : undefined,
      investments: props.user.investorProfile.investments ? 
        Array.isArray(props.user.investorProfile.investments) && props.user.investorProfile.investments.length > 0 &&  props.user.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.user.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.user.investorProfile.investments.map((item: any) => ({
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
    linkedProviders: props.user.linkedProviders ? 
      Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 &&  props.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.user.accountLinkingRequests ? 
      Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 &&  props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accountLinkingRequests.map((item: any) => ({
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
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
      Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 &&  props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.reviewedWaitlistEntries.map((item: any) => ({
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
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    dashboardLayouts: props.user.dashboardLayouts ? 
      Array.isArray(props.user.dashboardLayouts) && props.user.dashboardLayouts.length > 0 &&  props.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.dashboardLayouts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.dashboardLayouts.map((item: any) => ({
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
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_FUNDASSIGNMENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneFundAssignment) {
          return response.data.updateOneFundAssignment;
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
   * Upsert a single FundAssignment record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated FundAssignment or null.
   */
  async upsert(props: FundAssignmentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FundAssignmentType> {
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

        const UPSERT_ONE_FUNDASSIGNMENT = gql`
          mutation upsertOneFundAssignment($where: FundAssignmentWhereUniqueInput!, $create: FundAssignmentCreateInput!, $update: FundAssignmentUpdateInput!) {
            upsertOneFundAssignment(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  fundId: props.fundId !== undefined ? {
    equals: props.fundId 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
      },
          create: {
        role: props.role !== undefined ? props.role : undefined,
  permissions: props.permissions !== undefined ? {
    set: props.permissions 
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
  user: props.user ? 
    typeof props.user === 'object' && Object.keys(props.user).length === 1 && Object.keys(props.user)[0] === 'id'
    ? { connect: {
        id: props.user.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.user.id !== undefined ? props.user.id : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name 
           } : undefined,
      },
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        deletedAt: props.user.deletedAt !== undefined ? props.user.deletedAt : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        passwordHash: props.user.passwordHash !== undefined ? props.user.passwordHash : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? props.user.avatarUrl : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? props.user.onboardingComplete : undefined,
        signupCategory: props.user.signupCategory !== undefined ? props.user.signupCategory : undefined,
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId 
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
      Array.isArray(props.user.accounts) && props.user.accounts.length > 0 &&  props.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
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
    sessions: props.user.sessions ? 
      Array.isArray(props.user.sessions) && props.user.sessions.length > 0 &&  props.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.sessions.map((item: any) => ({
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
    authenticators: props.user.authenticators ? 
      Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 &&  props.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
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
    orgMemberships: props.user.orgMemberships ? 
      Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 &&  props.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.orgMemberships.map((item: any) => ({
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
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.user.investorProfile ? 
      typeof props.user.investorProfile === 'object' && Object.keys(props.user.investorProfile).length === 1 && Object.keys(props.user.investorProfile)[0] === 'id'
    ? { connect: {
          id: props.user.investorProfile.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.investorProfile.id !== undefined ? props.user.investorProfile.id : undefined,
          userId: props.user.investorProfile.userId !== undefined ? props.user.investorProfile.userId : undefined,
          name: props.user.investorProfile.name !== undefined ? {
              equals: props.user.investorProfile.name 
             } : undefined,
          email: props.user.investorProfile.email !== undefined ? {
              equals: props.user.investorProfile.email 
             } : undefined,
        },
        create: {
          name: props.user.investorProfile.name !== undefined ? props.user.investorProfile.name : undefined,
          email: props.user.investorProfile.email !== undefined ? props.user.investorProfile.email : undefined,
          type: props.user.investorProfile.type !== undefined ? props.user.investorProfile.type : undefined,
          kycStatus: props.user.investorProfile.kycStatus !== undefined ? props.user.investorProfile.kycStatus : undefined,
          walletAddress: props.user.investorProfile.walletAddress !== undefined ? props.user.investorProfile.walletAddress : undefined,
          deletedAt: props.user.investorProfile.deletedAt !== undefined ? props.user.investorProfile.deletedAt : undefined,
      investments: props.user.investorProfile.investments ? 
        Array.isArray(props.user.investorProfile.investments) && props.user.investorProfile.investments.length > 0 &&  props.user.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.user.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.user.investorProfile.investments.map((item: any) => ({
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
    linkedProviders: props.user.linkedProviders ? 
      Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 &&  props.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.user.accountLinkingRequests ? 
      Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 &&  props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accountLinkingRequests.map((item: any) => ({
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
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
      Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 &&  props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.reviewedWaitlistEntries.map((item: any) => ({
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
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    dashboardLayouts: props.user.dashboardLayouts ? 
      Array.isArray(props.user.dashboardLayouts) && props.user.dashboardLayouts.length > 0 &&  props.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.dashboardLayouts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.dashboardLayouts.map((item: any) => ({
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
          update: {
      role: props.role !== undefined ? {
            set: props.role 
           } : undefined,
  permissions: props.permissions !== undefined ? {
            set: props.permissions 
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
  user: props.user ? 
  typeof props.user === 'object' && Object.keys(props.user).length === 1 && (Object.keys(props.user)[0] === 'id' || Object.keys(props.user)[0] === 'symbol')
? {
  connect: {
    id: props.user.id
  }
} : { upsert: {
      where: {
        id: props.user.id !== undefined ? {
            equals: props.user.id
          } : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name
          } : undefined,
        email: props.user.email !== undefined ? {
            equals: props.user.email
          } : undefined,
        customerId: props.user.customerId !== undefined ? {
            equals: props.user.customerId
          } : undefined,
      },
      update: {
        id: props.user.id !== undefined ? {
            set: props.user.id
          } : undefined,
        name: props.user.name !== undefined ? {
            set: props.user.name
          } : undefined,
        email: props.user.email !== undefined ? {
            set: props.user.email
          } : undefined,
        emailVerified: props.user.emailVerified !== undefined ? {
            set: props.user.emailVerified
          } : undefined,
        image: props.user.image !== undefined ? {
            set: props.user.image
          } : undefined,
        deletedAt: props.user.deletedAt !== undefined ? {
            set: props.user.deletedAt
          } : undefined,
        role: props.user.role !== undefined ? {
            set: props.user.role
          } : undefined,
        bio: props.user.bio !== undefined ? {
            set: props.user.bio
          } : undefined,
        jobTitle: props.user.jobTitle !== undefined ? {
            set: props.user.jobTitle
          } : undefined,
        plan: props.user.plan !== undefined ? {
            set: props.user.plan
          } : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? {
            set: props.user.openaiAPIKey
          } : undefined,
        openaiModel: props.user.openaiModel !== undefined ? {
            set: props.user.openaiModel
          } : undefined,
        passwordHash: props.user.passwordHash !== undefined ? {
            set: props.user.passwordHash
          } : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? {
            set: props.user.avatarUrl
          } : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? {
            set: props.user.onboardingComplete
          } : undefined,
        signupCategory: props.user.signupCategory !== undefined ? {
            set: props.user.signupCategory
          } : undefined,
    customer: props.user.customer ? 
    typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && (Object.keys(props.user.customer)[0] === 'id' || Object.keys(props.user.customer)[0] === 'symbol')
? {
    connect: {
      id: props.user.customer.id
    }
} : { upsert: {
        where: {
          id: props.user.customer.id !== undefined ? {
              equals: props.user.customer.id
            } : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId
            } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name
            } : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? {
              equals: props.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? {
              equals: props.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: props.user.customer.authUserId !== undefined ? {
              set: props.user.customer.authUserId
            } : undefined,
          name: props.user.customer.name !== undefined ? {
              set: props.user.customer.name
            } : undefined,
          plan: props.user.customer.plan !== undefined ? {
              set: props.user.customer.plan
            } : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? {
              set: props.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? {
              set: props.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              set: props.user.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: props.user.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
    Array.isArray(props.user.accounts) && props.user.accounts.length > 0 && props.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.accounts.map((item: any) => ({
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
    sessions: props.user.sessions ? 
    Array.isArray(props.user.sessions) && props.user.sessions.length > 0 && props.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.sessions.map((item: any) => ({
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
    authenticators: props.user.authenticators ? 
    Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 && props.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.authenticators.map((item: any) => ({
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
    orgMemberships: props.user.orgMemberships ? 
    Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 && props.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.orgMemberships.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.orgMemberships.map((item: any) => ({
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
      organization: item.organization ? 
      typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && (Object.keys(item.organization)[0] === 'id' || Object.keys(item.organization)[0] === 'symbol')
? {
      connect: {
        id: item.organization.id
      }
} : { upsert: {
          where: {
            id: item.organization.id !== undefined ? {
                equals: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                equals: item.organization.slug
              } : undefined,
          },
          update: {
            id: item.organization.id !== undefined ? {
                set: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                set: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                set: item.organization.slug
              } : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? {
                set: item.organization.logoUrl
              } : undefined,
            website: item.organization.website !== undefined ? {
                set: item.organization.website
              } : undefined,
            businessType: item.organization.businessType !== undefined ? {
                set: item.organization.businessType
              } : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? {
                set: item.organization.jurisdiction
              } : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? {
                set: item.organization.regulatoryStatus
              } : undefined,
            description: item.organization.description !== undefined ? {
                set: item.organization.description
              } : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? {
                set: item.organization.tradingDefaults
              } : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? {
                set: item.organization.llmDefaults
              } : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? {
                set: item.organization.deletedAt
              } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.user.investorProfile ? 
    typeof props.user.investorProfile === 'object' && Object.keys(props.user.investorProfile).length === 1 && (Object.keys(props.user.investorProfile)[0] === 'id' || Object.keys(props.user.investorProfile)[0] === 'symbol')
? {
    connect: {
      id: props.user.investorProfile.id
    }
} : { upsert: {
        where: {
          id: props.user.investorProfile.id !== undefined ? {
              equals: props.user.investorProfile.id
            } : undefined,
          name: props.user.investorProfile.name !== undefined ? {
              equals: props.user.investorProfile.name
            } : undefined,
          email: props.user.investorProfile.email !== undefined ? {
              equals: props.user.investorProfile.email
            } : undefined,
          userId: props.user.investorProfile.userId !== undefined ? {
              equals: props.user.investorProfile.userId
            } : undefined,
        },
        update: {
          id: props.user.investorProfile.id !== undefined ? {
              set: props.user.investorProfile.id
            } : undefined,
          name: props.user.investorProfile.name !== undefined ? {
              set: props.user.investorProfile.name
            } : undefined,
          email: props.user.investorProfile.email !== undefined ? {
              set: props.user.investorProfile.email
            } : undefined,
          type: props.user.investorProfile.type !== undefined ? {
              set: props.user.investorProfile.type
            } : undefined,
          kycStatus: props.user.investorProfile.kycStatus !== undefined ? {
              set: props.user.investorProfile.kycStatus
            } : undefined,
          walletAddress: props.user.investorProfile.walletAddress !== undefined ? {
              set: props.user.investorProfile.walletAddress
            } : undefined,
          deletedAt: props.user.investorProfile.deletedAt !== undefined ? {
              set: props.user.investorProfile.deletedAt
            } : undefined,
      investments: props.user.investorProfile.investments ? 
      Array.isArray(props.user.investorProfile.investments) && props.user.investorProfile.investments.length > 0 && props.user.investorProfile.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.user.investorProfile.investments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.user.investorProfile.investments.map((item: any) => ({
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
          name: props.user.investorProfile.name !== undefined ? props.user.investorProfile.name : undefined,
          email: props.user.investorProfile.email !== undefined ? props.user.investorProfile.email : undefined,
          type: props.user.investorProfile.type !== undefined ? props.user.investorProfile.type : undefined,
          kycStatus: props.user.investorProfile.kycStatus !== undefined ? props.user.investorProfile.kycStatus : undefined,
          walletAddress: props.user.investorProfile.walletAddress !== undefined ? props.user.investorProfile.walletAddress : undefined,
          deletedAt: props.user.investorProfile.deletedAt !== undefined ? props.user.investorProfile.deletedAt : undefined,
      investments: props.user.investorProfile.investments ? 
        Array.isArray(props.user.investorProfile.investments) && props.user.investorProfile.investments.length > 0 &&  props.user.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.user.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.user.investorProfile.investments.map((item: any) => ({
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
    linkedProviders: props.user.linkedProviders ? 
    Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 && props.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.user.accountLinkingRequests ? 
    Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 && props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.accountLinkingRequests.map((item: any) => ({
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
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
    Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 && props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.reviewedWaitlistEntries.map((item: any) => ({
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
      inviteToken: item.inviteToken ? 
      typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && (Object.keys(item.inviteToken)[0] === 'id' || Object.keys(item.inviteToken)[0] === 'symbol')
? {
      connect: {
        id: item.inviteToken.id
      }
} : { upsert: {
          where: {
            id: item.inviteToken.id !== undefined ? {
                equals: item.inviteToken.id
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email
              } : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? {
                equals: item.inviteToken.waitlistEntryId
              } : undefined,
          },
          update: {
            id: item.inviteToken.id !== undefined ? {
                set: item.inviteToken.id
              } : undefined,
            token: item.inviteToken.token !== undefined ? {
                set: item.inviteToken.token
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                set: item.inviteToken.email
              } : undefined,
            used: item.inviteToken.used !== undefined ? {
                set: item.inviteToken.used
              } : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? {
                set: item.inviteToken.usedAt
              } : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? {
                set: item.inviteToken.expiresAt
              } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
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
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    dashboardLayouts: props.user.dashboardLayouts ? 
    Array.isArray(props.user.dashboardLayouts) && props.user.dashboardLayouts.length > 0 && props.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.dashboardLayouts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.dashboardLayouts.map((item: any) => ({
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
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        deletedAt: props.user.deletedAt !== undefined ? props.user.deletedAt : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        passwordHash: props.user.passwordHash !== undefined ? props.user.passwordHash : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? props.user.avatarUrl : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? props.user.onboardingComplete : undefined,
        signupCategory: props.user.signupCategory !== undefined ? props.user.signupCategory : undefined,
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId 
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
      Array.isArray(props.user.accounts) && props.user.accounts.length > 0 &&  props.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
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
    sessions: props.user.sessions ? 
      Array.isArray(props.user.sessions) && props.user.sessions.length > 0 &&  props.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.sessions.map((item: any) => ({
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
    authenticators: props.user.authenticators ? 
      Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 &&  props.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
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
    orgMemberships: props.user.orgMemberships ? 
      Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 &&  props.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.orgMemberships.map((item: any) => ({
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
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.user.investorProfile ? 
      typeof props.user.investorProfile === 'object' && Object.keys(props.user.investorProfile).length === 1 && Object.keys(props.user.investorProfile)[0] === 'id'
    ? { connect: {
          id: props.user.investorProfile.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.investorProfile.id !== undefined ? props.user.investorProfile.id : undefined,
          userId: props.user.investorProfile.userId !== undefined ? props.user.investorProfile.userId : undefined,
          name: props.user.investorProfile.name !== undefined ? {
              equals: props.user.investorProfile.name 
             } : undefined,
          email: props.user.investorProfile.email !== undefined ? {
              equals: props.user.investorProfile.email 
             } : undefined,
        },
        create: {
          name: props.user.investorProfile.name !== undefined ? props.user.investorProfile.name : undefined,
          email: props.user.investorProfile.email !== undefined ? props.user.investorProfile.email : undefined,
          type: props.user.investorProfile.type !== undefined ? props.user.investorProfile.type : undefined,
          kycStatus: props.user.investorProfile.kycStatus !== undefined ? props.user.investorProfile.kycStatus : undefined,
          walletAddress: props.user.investorProfile.walletAddress !== undefined ? props.user.investorProfile.walletAddress : undefined,
          deletedAt: props.user.investorProfile.deletedAt !== undefined ? props.user.investorProfile.deletedAt : undefined,
      investments: props.user.investorProfile.investments ? 
        Array.isArray(props.user.investorProfile.investments) && props.user.investorProfile.investments.length > 0 &&  props.user.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.user.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.user.investorProfile.investments.map((item: any) => ({
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
    linkedProviders: props.user.linkedProviders ? 
      Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 &&  props.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.user.accountLinkingRequests ? 
      Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 &&  props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accountLinkingRequests.map((item: any) => ({
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
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
      Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 &&  props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.reviewedWaitlistEntries.map((item: any) => ({
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
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    dashboardLayouts: props.user.dashboardLayouts ? 
      Array.isArray(props.user.dashboardLayouts) && props.user.dashboardLayouts.length > 0 &&  props.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.dashboardLayouts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.dashboardLayouts.map((item: any) => ({
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
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_FUNDASSIGNMENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneFundAssignment) {
          return response.data.upsertOneFundAssignment;
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
   * Update multiple FundAssignment records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of FundAssignment objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: FundAssignmentType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_FUNDASSIGNMENT = gql`
          mutation updateManyFundAssignment($data: [FundAssignmentCreateManyInput!]!) {
            updateManyFundAssignment(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  fundId: prop.fundId !== undefined ? {
    equals: prop.fundId 
  } : undefined,
  userId: prop.userId !== undefined ? {
    equals: prop.userId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  role: prop.role !== undefined ? {
            set: prop.role 
           } : undefined,
  permissions: prop.permissions !== undefined ? {
            set: prop.permissions 
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
  user: prop.user ? 
  typeof prop.user === 'object' && Object.keys(prop.user).length === 1 && (Object.keys(prop.user)[0] === 'id' || Object.keys(prop.user)[0] === 'symbol')
? {
  connect: {
    id: prop.user.id
  }
} : { upsert: {
      where: {
        id: prop.user.id !== undefined ? {
            equals: prop.user.id
          } : undefined,
        name: prop.user.name !== undefined ? {
            equals: prop.user.name
          } : undefined,
        email: prop.user.email !== undefined ? {
            equals: prop.user.email
          } : undefined,
        customerId: prop.user.customerId !== undefined ? {
            equals: prop.user.customerId
          } : undefined,
      },
      update: {
        id: prop.user.id !== undefined ? {
            set: prop.user.id
          } : undefined,
        name: prop.user.name !== undefined ? {
            set: prop.user.name
          } : undefined,
        email: prop.user.email !== undefined ? {
            set: prop.user.email
          } : undefined,
        emailVerified: prop.user.emailVerified !== undefined ? {
            set: prop.user.emailVerified
          } : undefined,
        image: prop.user.image !== undefined ? {
            set: prop.user.image
          } : undefined,
        deletedAt: prop.user.deletedAt !== undefined ? {
            set: prop.user.deletedAt
          } : undefined,
        role: prop.user.role !== undefined ? {
            set: prop.user.role
          } : undefined,
        bio: prop.user.bio !== undefined ? {
            set: prop.user.bio
          } : undefined,
        jobTitle: prop.user.jobTitle !== undefined ? {
            set: prop.user.jobTitle
          } : undefined,
        plan: prop.user.plan !== undefined ? {
            set: prop.user.plan
          } : undefined,
        openaiAPIKey: prop.user.openaiAPIKey !== undefined ? {
            set: prop.user.openaiAPIKey
          } : undefined,
        openaiModel: prop.user.openaiModel !== undefined ? {
            set: prop.user.openaiModel
          } : undefined,
        passwordHash: prop.user.passwordHash !== undefined ? {
            set: prop.user.passwordHash
          } : undefined,
        avatarUrl: prop.user.avatarUrl !== undefined ? {
            set: prop.user.avatarUrl
          } : undefined,
        onboardingComplete: prop.user.onboardingComplete !== undefined ? {
            set: prop.user.onboardingComplete
          } : undefined,
        signupCategory: prop.user.signupCategory !== undefined ? {
            set: prop.user.signupCategory
          } : undefined,
    customer: prop.user.customer ? 
    typeof prop.user.customer === 'object' && Object.keys(prop.user.customer).length === 1 && (Object.keys(prop.user.customer)[0] === 'id' || Object.keys(prop.user.customer)[0] === 'symbol')
? {
    connect: {
      id: prop.user.customer.id
    }
} : { upsert: {
        where: {
          id: prop.user.customer.id !== undefined ? {
              equals: prop.user.customer.id
            } : undefined,
          authUserId: prop.user.customer.authUserId !== undefined ? {
              equals: prop.user.customer.authUserId
            } : undefined,
          name: prop.user.customer.name !== undefined ? {
              equals: prop.user.customer.name
            } : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? {
              equals: prop.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? {
              equals: prop.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? {
              equals: prop.user.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: prop.user.customer.authUserId !== undefined ? {
              set: prop.user.customer.authUserId
            } : undefined,
          name: prop.user.customer.name !== undefined ? {
              set: prop.user.customer.name
            } : undefined,
          plan: prop.user.customer.plan !== undefined ? {
              set: prop.user.customer.plan
            } : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? {
              set: prop.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? {
              set: prop.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? {
              set: prop.user.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: prop.user.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: prop.user.customer.authUserId !== undefined ? prop.user.customer.authUserId : undefined,
          name: prop.user.customer.name !== undefined ? prop.user.customer.name : undefined,
          plan: prop.user.customer.plan !== undefined ? prop.user.customer.plan : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? prop.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? prop.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? prop.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.user.accounts ? 
    Array.isArray(prop.user.accounts) && prop.user.accounts.length > 0 && prop.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.accounts.map((item: any) => ({
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
    sessions: prop.user.sessions ? 
    Array.isArray(prop.user.sessions) && prop.user.sessions.length > 0 && prop.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.sessions.map((item: any) => ({
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
    authenticators: prop.user.authenticators ? 
    Array.isArray(prop.user.authenticators) && prop.user.authenticators.length > 0 && prop.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.authenticators.map((item: any) => ({
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
    orgMemberships: prop.user.orgMemberships ? 
    Array.isArray(prop.user.orgMemberships) && prop.user.orgMemberships.length > 0 && prop.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.orgMemberships.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.orgMemberships.map((item: any) => ({
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
      organization: item.organization ? 
      typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && (Object.keys(item.organization)[0] === 'id' || Object.keys(item.organization)[0] === 'symbol')
? {
      connect: {
        id: item.organization.id
      }
} : { upsert: {
          where: {
            id: item.organization.id !== undefined ? {
                equals: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                equals: item.organization.slug
              } : undefined,
          },
          update: {
            id: item.organization.id !== undefined ? {
                set: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                set: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                set: item.organization.slug
              } : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? {
                set: item.organization.logoUrl
              } : undefined,
            website: item.organization.website !== undefined ? {
                set: item.organization.website
              } : undefined,
            businessType: item.organization.businessType !== undefined ? {
                set: item.organization.businessType
              } : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? {
                set: item.organization.jurisdiction
              } : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? {
                set: item.organization.regulatoryStatus
              } : undefined,
            description: item.organization.description !== undefined ? {
                set: item.organization.description
              } : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? {
                set: item.organization.tradingDefaults
              } : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? {
                set: item.organization.llmDefaults
              } : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? {
                set: item.organization.deletedAt
              } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: prop.user.investorProfile ? 
    typeof prop.user.investorProfile === 'object' && Object.keys(prop.user.investorProfile).length === 1 && (Object.keys(prop.user.investorProfile)[0] === 'id' || Object.keys(prop.user.investorProfile)[0] === 'symbol')
? {
    connect: {
      id: prop.user.investorProfile.id
    }
} : { upsert: {
        where: {
          id: prop.user.investorProfile.id !== undefined ? {
              equals: prop.user.investorProfile.id
            } : undefined,
          name: prop.user.investorProfile.name !== undefined ? {
              equals: prop.user.investorProfile.name
            } : undefined,
          email: prop.user.investorProfile.email !== undefined ? {
              equals: prop.user.investorProfile.email
            } : undefined,
          userId: prop.user.investorProfile.userId !== undefined ? {
              equals: prop.user.investorProfile.userId
            } : undefined,
        },
        update: {
          id: prop.user.investorProfile.id !== undefined ? {
              set: prop.user.investorProfile.id
            } : undefined,
          name: prop.user.investorProfile.name !== undefined ? {
              set: prop.user.investorProfile.name
            } : undefined,
          email: prop.user.investorProfile.email !== undefined ? {
              set: prop.user.investorProfile.email
            } : undefined,
          type: prop.user.investorProfile.type !== undefined ? {
              set: prop.user.investorProfile.type
            } : undefined,
          kycStatus: prop.user.investorProfile.kycStatus !== undefined ? {
              set: prop.user.investorProfile.kycStatus
            } : undefined,
          walletAddress: prop.user.investorProfile.walletAddress !== undefined ? {
              set: prop.user.investorProfile.walletAddress
            } : undefined,
          deletedAt: prop.user.investorProfile.deletedAt !== undefined ? {
              set: prop.user.investorProfile.deletedAt
            } : undefined,
      investments: prop.user.investorProfile.investments ? 
      Array.isArray(prop.user.investorProfile.investments) && prop.user.investorProfile.investments.length > 0 && prop.user.investorProfile.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.user.investorProfile.investments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.user.investorProfile.investments.map((item: any) => ({
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
          name: prop.user.investorProfile.name !== undefined ? prop.user.investorProfile.name : undefined,
          email: prop.user.investorProfile.email !== undefined ? prop.user.investorProfile.email : undefined,
          type: prop.user.investorProfile.type !== undefined ? prop.user.investorProfile.type : undefined,
          kycStatus: prop.user.investorProfile.kycStatus !== undefined ? prop.user.investorProfile.kycStatus : undefined,
          walletAddress: prop.user.investorProfile.walletAddress !== undefined ? prop.user.investorProfile.walletAddress : undefined,
          deletedAt: prop.user.investorProfile.deletedAt !== undefined ? prop.user.investorProfile.deletedAt : undefined,
      investments: prop.user.investorProfile.investments ? 
        Array.isArray(prop.user.investorProfile.investments) && prop.user.investorProfile.investments.length > 0 &&  prop.user.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.user.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.user.investorProfile.investments.map((item: any) => ({
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
    linkedProviders: prop.user.linkedProviders ? 
    Array.isArray(prop.user.linkedProviders) && prop.user.linkedProviders.length > 0 && prop.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: prop.user.accountLinkingRequests ? 
    Array.isArray(prop.user.accountLinkingRequests) && prop.user.accountLinkingRequests.length > 0 && prop.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.accountLinkingRequests.map((item: any) => ({
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
    reviewedWaitlistEntries: prop.user.reviewedWaitlistEntries ? 
    Array.isArray(prop.user.reviewedWaitlistEntries) && prop.user.reviewedWaitlistEntries.length > 0 && prop.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.reviewedWaitlistEntries.map((item: any) => ({
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
      inviteToken: item.inviteToken ? 
      typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && (Object.keys(item.inviteToken)[0] === 'id' || Object.keys(item.inviteToken)[0] === 'symbol')
? {
      connect: {
        id: item.inviteToken.id
      }
} : { upsert: {
          where: {
            id: item.inviteToken.id !== undefined ? {
                equals: item.inviteToken.id
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email
              } : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? {
                equals: item.inviteToken.waitlistEntryId
              } : undefined,
          },
          update: {
            id: item.inviteToken.id !== undefined ? {
                set: item.inviteToken.id
              } : undefined,
            token: item.inviteToken.token !== undefined ? {
                set: item.inviteToken.token
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                set: item.inviteToken.email
              } : undefined,
            used: item.inviteToken.used !== undefined ? {
                set: item.inviteToken.used
              } : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? {
                set: item.inviteToken.usedAt
              } : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? {
                set: item.inviteToken.expiresAt
              } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
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
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    dashboardLayouts: prop.user.dashboardLayouts ? 
    Array.isArray(prop.user.dashboardLayouts) && prop.user.dashboardLayouts.length > 0 && prop.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.dashboardLayouts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.dashboardLayouts.map((item: any) => ({
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
        name: prop.user.name !== undefined ? prop.user.name : undefined,
        email: prop.user.email !== undefined ? prop.user.email : undefined,
        emailVerified: prop.user.emailVerified !== undefined ? prop.user.emailVerified : undefined,
        image: prop.user.image !== undefined ? prop.user.image : undefined,
        deletedAt: prop.user.deletedAt !== undefined ? prop.user.deletedAt : undefined,
        role: prop.user.role !== undefined ? prop.user.role : undefined,
        bio: prop.user.bio !== undefined ? prop.user.bio : undefined,
        jobTitle: prop.user.jobTitle !== undefined ? prop.user.jobTitle : undefined,
        plan: prop.user.plan !== undefined ? prop.user.plan : undefined,
        openaiAPIKey: prop.user.openaiAPIKey !== undefined ? prop.user.openaiAPIKey : undefined,
        openaiModel: prop.user.openaiModel !== undefined ? prop.user.openaiModel : undefined,
        passwordHash: prop.user.passwordHash !== undefined ? prop.user.passwordHash : undefined,
        avatarUrl: prop.user.avatarUrl !== undefined ? prop.user.avatarUrl : undefined,
        onboardingComplete: prop.user.onboardingComplete !== undefined ? prop.user.onboardingComplete : undefined,
        signupCategory: prop.user.signupCategory !== undefined ? prop.user.signupCategory : undefined,
    customer: prop.user.customer ? 
      typeof prop.user.customer === 'object' && Object.keys(prop.user.customer).length === 1 && Object.keys(prop.user.customer)[0] === 'id'
    ? { connect: {
          id: prop.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.user.customer.id !== undefined ? prop.user.customer.id : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? prop.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? prop.user.customer.stripeSubscriptionId : undefined,
          authUserId: prop.user.customer.authUserId !== undefined ? {
              equals: prop.user.customer.authUserId 
             } : undefined,
          name: prop.user.customer.name !== undefined ? {
              equals: prop.user.customer.name 
             } : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? {
              equals: prop.user.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: prop.user.customer.authUserId !== undefined ? prop.user.customer.authUserId : undefined,
          name: prop.user.customer.name !== undefined ? prop.user.customer.name : undefined,
          plan: prop.user.customer.plan !== undefined ? prop.user.customer.plan : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? prop.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? prop.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? prop.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.user.accounts ? 
      Array.isArray(prop.user.accounts) && prop.user.accounts.length > 0 &&  prop.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.accounts.map((item: any) => ({
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
    sessions: prop.user.sessions ? 
      Array.isArray(prop.user.sessions) && prop.user.sessions.length > 0 &&  prop.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.sessions.map((item: any) => ({
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
    authenticators: prop.user.authenticators ? 
      Array.isArray(prop.user.authenticators) && prop.user.authenticators.length > 0 &&  prop.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.authenticators.map((item: any) => ({
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
    orgMemberships: prop.user.orgMemberships ? 
      Array.isArray(prop.user.orgMemberships) && prop.user.orgMemberships.length > 0 &&  prop.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.orgMemberships.map((item: any) => ({
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
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: prop.user.investorProfile ? 
      typeof prop.user.investorProfile === 'object' && Object.keys(prop.user.investorProfile).length === 1 && Object.keys(prop.user.investorProfile)[0] === 'id'
    ? { connect: {
          id: prop.user.investorProfile.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.user.investorProfile.id !== undefined ? prop.user.investorProfile.id : undefined,
          userId: prop.user.investorProfile.userId !== undefined ? prop.user.investorProfile.userId : undefined,
          name: prop.user.investorProfile.name !== undefined ? {
              equals: prop.user.investorProfile.name 
             } : undefined,
          email: prop.user.investorProfile.email !== undefined ? {
              equals: prop.user.investorProfile.email 
             } : undefined,
        },
        create: {
          name: prop.user.investorProfile.name !== undefined ? prop.user.investorProfile.name : undefined,
          email: prop.user.investorProfile.email !== undefined ? prop.user.investorProfile.email : undefined,
          type: prop.user.investorProfile.type !== undefined ? prop.user.investorProfile.type : undefined,
          kycStatus: prop.user.investorProfile.kycStatus !== undefined ? prop.user.investorProfile.kycStatus : undefined,
          walletAddress: prop.user.investorProfile.walletAddress !== undefined ? prop.user.investorProfile.walletAddress : undefined,
          deletedAt: prop.user.investorProfile.deletedAt !== undefined ? prop.user.investorProfile.deletedAt : undefined,
      investments: prop.user.investorProfile.investments ? 
        Array.isArray(prop.user.investorProfile.investments) && prop.user.investorProfile.investments.length > 0 &&  prop.user.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.user.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.user.investorProfile.investments.map((item: any) => ({
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
    linkedProviders: prop.user.linkedProviders ? 
      Array.isArray(prop.user.linkedProviders) && prop.user.linkedProviders.length > 0 &&  prop.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: prop.user.accountLinkingRequests ? 
      Array.isArray(prop.user.accountLinkingRequests) && prop.user.accountLinkingRequests.length > 0 &&  prop.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.accountLinkingRequests.map((item: any) => ({
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
    reviewedWaitlistEntries: prop.user.reviewedWaitlistEntries ? 
      Array.isArray(prop.user.reviewedWaitlistEntries) && prop.user.reviewedWaitlistEntries.length > 0 &&  prop.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.reviewedWaitlistEntries.map((item: any) => ({
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
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    dashboardLayouts: prop.user.dashboardLayouts ? 
      Array.isArray(prop.user.dashboardLayouts) && prop.user.dashboardLayouts.length > 0 &&  prop.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.dashboardLayouts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.dashboardLayouts.map((item: any) => ({
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
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_FUNDASSIGNMENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyFundAssignment) {
          return response.data.updateManyFundAssignment;
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
   * Delete a single FundAssignment record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted FundAssignment or null.
   */
  async delete(props: FundAssignmentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FundAssignmentType> {
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

        const DELETE_ONE_FUNDASSIGNMENT = gql`
          mutation deleteOneFundAssignment($where: FundAssignmentWhereUniqueInput!) {
            deleteOneFundAssignment(where: $where) {
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
          mutation: DELETE_ONE_FUNDASSIGNMENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneFundAssignment) {
          return response.data.deleteOneFundAssignment;
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
   * Retrieve a single FundAssignment record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved FundAssignment or null.
   */
  async get(props: FundAssignmentType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<FundAssignmentType | null> {
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

        const GET_FUNDASSIGNMENT = gql`
          query getFundAssignment($where: FundAssignmentWhereUniqueInput!) {
            getFundAssignment(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  fundId: props.fundId !== undefined ? {
    equals: props.fundId 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_FUNDASSIGNMENT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getFundAssignment ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No FundAssignment found') {
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
   * Retrieve all FundAssignments records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of FundAssignment records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FundAssignmentType[] | null> {
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

        const GET_ALL_FUNDASSIGNMENT = gql`
          query getAllFundAssignment {
            fundAssignments {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_FUNDASSIGNMENT,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.fundAssignments ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No FundAssignment found') {
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
   * Find multiple FundAssignment records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found FundAssignment records or null.
   */
  async findMany(props: FundAssignmentType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<FundAssignmentType[] | null> {
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

        const FIND_MANY_FUNDASSIGNMENT = gql`
          query findManyFundAssignment($where: FundAssignmentWhereInput!) {
            fundAssignments(where: $where) {
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
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_FUNDASSIGNMENT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.fundassignments) {
          return response.data.fundAssignments;
        } else {
          return [] as FundAssignmentType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No FundAssignment found') {
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
