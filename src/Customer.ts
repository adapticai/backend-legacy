
  
import { Customer as CustomerType } from './generated/typegraphql-prisma/models/Customer';
import { getApolloClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the Customer model.
   */

  const selectionSet = `
    
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
  users {
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
    currentAccount
    customerId
    plan
    alpacaAccounts {
      id
      type
      APIKey
      APISecret
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
        alpacaAccountId
        createdAt
        updatedAt
      }
      tradingPolicy {
        id
        alpacaAccountId
        version
        lastModifiedBy
        lastModifiedAt
        autonomyMode
        realtimeTradingEnabled
        paperTradingOnly
        killSwitchEnabled
        autonomyPrefs
        equitiesEnabled
        etfsEnabled
        cryptoEnabled
        optionsEnabled
        futuresEnabled
        forexEnabled
        shortingEnabled
        marginEnabled
        fractionalSharesEnabled
        assetUniversePrefs
        maxBuyingPowerUtilPct
        cashFloorPct
        maxGrossExposurePct
        maxNetExposurePct
        maxLeverage
        maxSymbolConcentrationPct
        maxSectorConcentrationPct
        maxOpenPositions
        maxOpenOrders
        perTradeEquityAllocationPct
        perTradeCryptoAllocationPct
        riskBudgetPrefs
        signalConsumptionPrefs
        executionPrefs
        positionManagementPrefs
        portfolioConstructionPrefs
        macroOverlayEnabled
        sectorOverlayEnabled
        volatilityOverlayEnabled
        liquidityStressOverlayEnabled
        blackSwanProtectionEnabled
        drawdownGuardianEnabled
        correlationSpikeProtectionEnabled
        newsEventRiskOverlayEnabled
        exchangeHealthOverlayEnabled
        dataQualitySentinelEnabled
        overlayResponsePrefs
        miniModelProvider
        miniModelId
        normalModelProvider
        normalModelId
        advancedModelProvider
        advancedModelId
        modelPrefs
        auditNotificationPrefs
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
      userId
      createdAt
      updatedAt
      deletedAt
      alerts {
        id
        alpacaAccountId
        title
        message
        type
        severity
        category
        status
        isRead
        acknowledgedAt
        resolvedAt
        metadata
        createdAt
        updatedAt
      }
    }
    openaiAPIKey
    openaiModel
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
  }

  `;

  export const Customer = {

    /**
     * Create a new Customer record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Customer or null.
     */

    /**
     * Create a new Customer record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created Customer or null.
     */
    async create(props: CustomerType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<CustomerType> {
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
              : getApolloClient()
          ]);

          const { gql, ApolloError } = modules;

          const CREATE_ONE_CUSTOMER = gql`
              mutation createOneCustomer($data: CustomerCreateInput!) {
                createOneCustomer(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                authUserId: props.authUserId !== undefined ? props.authUserId : undefined,
  name: props.name !== undefined ? props.name : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? props.stripeCustomerId : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? props.stripeSubscriptionId : undefined,
  stripePriceId: props.stripePriceId !== undefined ? props.stripePriceId : undefined,
  stripeCurrentPeriodEnd: props.stripeCurrentPeriodEnd !== undefined ? props.stripeCurrentPeriodEnd : undefined,
  users: props.users ? 
    Array.isArray(props.users) && props.users.length > 0 &&  props.users.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.users.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
        role: item.role !== undefined ? item.role : undefined,
        bio: item.bio !== undefined ? item.bio : undefined,
        jobTitle: item.jobTitle !== undefined ? item.jobTitle : undefined,
        currentAccount: item.currentAccount !== undefined ? item.currentAccount : undefined,
        plan: item.plan !== undefined ? item.plan : undefined,
        openaiAPIKey: item.openaiAPIKey !== undefined ? item.openaiAPIKey : undefined,
        openaiModel: item.openaiModel !== undefined ? item.openaiModel : undefined,
    accounts: item.accounts ? 
      Array.isArray(item.accounts) && item.accounts.length > 0 &&  item.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          type: item.type !== undefined ? {
              equals: item.type 
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
    sessions: item.sessions ? 
      Array.isArray(item.sessions) && item.sessions.length > 0 &&  item.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.sessions.map((item: any) => ({
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
    authenticators: item.authenticators ? 
      Array.isArray(item.authenticators) && item.authenticators.length > 0 &&  item.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? 
      Array.isArray(item.alpacaAccounts) && item.alpacaAccounts.length > 0 &&  item.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          type: item.type !== undefined ? {
              equals: item.type 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
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
            alpacaAccountId: item.allocation.alpacaAccountId !== undefined ? item.allocation.alpacaAccountId : undefined,
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
      tradingPolicy: item.tradingPolicy ? 
        typeof item.tradingPolicy === 'object' && Object.keys(item.tradingPolicy).length === 1 && Object.keys(item.tradingPolicy)[0] === 'id'
    ? { connect: {
            id: item.tradingPolicy.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.tradingPolicy.id !== undefined ? item.tradingPolicy.id : undefined,
            alpacaAccountId: item.tradingPolicy.alpacaAccountId !== undefined ? item.tradingPolicy.alpacaAccountId : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                equals: item.tradingPolicy.miniModelId 
               } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                equals: item.tradingPolicy.normalModelId 
               } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                equals: item.tradingPolicy.advancedModelId 
               } : undefined,
          },
          create: {
            version: item.tradingPolicy.version !== undefined ? item.tradingPolicy.version : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? item.tradingPolicy.lastModifiedBy : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? item.tradingPolicy.lastModifiedAt : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? item.tradingPolicy.autonomyMode : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? item.tradingPolicy.realtimeTradingEnabled : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? item.tradingPolicy.paperTradingOnly : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? item.tradingPolicy.killSwitchEnabled : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? item.tradingPolicy.equitiesEnabled : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? item.tradingPolicy.etfsEnabled : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? item.tradingPolicy.cryptoEnabled : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? item.tradingPolicy.optionsEnabled : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? item.tradingPolicy.futuresEnabled : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? item.tradingPolicy.forexEnabled : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? item.tradingPolicy.shortingEnabled : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? item.tradingPolicy.marginEnabled : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? item.tradingPolicy.fractionalSharesEnabled : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? item.tradingPolicy.maxBuyingPowerUtilPct : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? item.tradingPolicy.cashFloorPct : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? item.tradingPolicy.maxGrossExposurePct : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? item.tradingPolicy.maxNetExposurePct : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? item.tradingPolicy.maxLeverage : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? item.tradingPolicy.maxSymbolConcentrationPct : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? item.tradingPolicy.maxSectorConcentrationPct : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? item.tradingPolicy.maxOpenPositions : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? item.tradingPolicy.maxOpenOrders : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? item.tradingPolicy.perTradeEquityAllocationPct : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? item.tradingPolicy.perTradeCryptoAllocationPct : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? item.tradingPolicy.macroOverlayEnabled : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? item.tradingPolicy.sectorOverlayEnabled : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? item.tradingPolicy.volatilityOverlayEnabled : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? item.tradingPolicy.liquidityStressOverlayEnabled : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? item.tradingPolicy.blackSwanProtectionEnabled : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? item.tradingPolicy.drawdownGuardianEnabled : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? item.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? item.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? item.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? item.tradingPolicy.dataQualitySentinelEnabled : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? item.tradingPolicy.miniModelProvider : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? item.tradingPolicy.miniModelId : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? item.tradingPolicy.normalModelProvider : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? item.tradingPolicy.normalModelId : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? item.tradingPolicy.advancedModelProvider : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? item.tradingPolicy.advancedModelId : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
            type: item.type !== undefined ? {
                equals: item.type 
               } : undefined,
            status: item.status !== undefined ? {
                equals: item.status 
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
        },
      }))
    } : undefined,
    linkedProviders: item.linkedProviders ? 
      Array.isArray(item.linkedProviders) && item.linkedProviders.length > 0 &&  item.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: item.accountLinkingRequests ? 
      Array.isArray(item.accountLinkingRequests) && item.accountLinkingRequests.length > 0 &&  item.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accountLinkingRequests.map((item: any) => ({
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
          status: item.status !== undefined ? {
              equals: item.status 
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
    reviewedWaitlistEntries: item.reviewedWaitlistEntries ? 
      Array.isArray(item.reviewedWaitlistEntries) && item.reviewedWaitlistEntries.length > 0 &&  item.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
          status: item.status !== undefined ? {
              equals: item.status 
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
    llmConfiguration: item.llmConfiguration ? 
      typeof item.llmConfiguration === 'object' && Object.keys(item.llmConfiguration).length === 1 && Object.keys(item.llmConfiguration)[0] === 'id'
    ? { connect: {
          id: item.llmConfiguration.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.llmConfiguration.id !== undefined ? item.llmConfiguration.id : undefined,
          userId: item.llmConfiguration.userId !== undefined ? item.llmConfiguration.userId : undefined,
        },
        create: {
          defaultProvider: item.llmConfiguration.defaultProvider !== undefined ? item.llmConfiguration.defaultProvider : undefined,
          miniProvider: item.llmConfiguration.miniProvider !== undefined ? item.llmConfiguration.miniProvider : undefined,
          normalProvider: item.llmConfiguration.normalProvider !== undefined ? item.llmConfiguration.normalProvider : undefined,
          advancedProvider: item.llmConfiguration.advancedProvider !== undefined ? item.llmConfiguration.advancedProvider : undefined,
          miniModel: item.llmConfiguration.miniModel !== undefined ? item.llmConfiguration.miniModel : undefined,
          normalModel: item.llmConfiguration.normalModel !== undefined ? item.llmConfiguration.normalModel : undefined,
          advancedModel: item.llmConfiguration.advancedModel !== undefined ? item.llmConfiguration.advancedModel : undefined,
          openaiApiKey: item.llmConfiguration.openaiApiKey !== undefined ? item.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: item.llmConfiguration.anthropicApiKey !== undefined ? item.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: item.llmConfiguration.deepseekApiKey !== undefined ? item.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: item.llmConfiguration.kimiApiKey !== undefined ? item.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: item.llmConfiguration.qwenApiKey !== undefined ? item.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: item.llmConfiguration.xaiApiKey !== undefined ? item.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: item.llmConfiguration.geminiApiKey !== undefined ? item.llmConfiguration.geminiApiKey : undefined,
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
            mutation: CREATE_ONE_CUSTOMER,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneCustomer) {
            return response.data.createOneCustomer;
          } else {
            return null as any;
          }
        } catch (error: any) {
          lastError = error;

          // Check for constraint violations FIRST - these are NEVER retryable
          const isConstraintViolation =
            error.message?.includes('violates check constraint') ||
            error.message?.includes('violates unique constraint') ||
            error.message?.includes('violates foreign key constraint') ||
            error.message?.includes('unique constraint') ||
            error.message?.includes('23514') ||
            error.message?.includes('23505') ||
            error.message?.includes('P2002') ||
            error.message?.includes('P2003');

          if (isConstraintViolation) {
            const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
            logger.error("Non-retryable constraint violation in createOneCustomer", {
              operation: 'createOneCustomer',
              model: 'Customer',
              error: String(error),
              constraintName: constraintMatch ? constraintMatch[1] : undefined,
              errorCategory: 'CONSTRAINT_VIOLATION',
              isRetryable: false,
            });
            throw error;
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
            logger.warn("Database connection error in createOneCustomer, retrying...", {
              operation: 'createOneCustomer',
              model: 'Customer',
              attempt: retryCount,
              maxRetries: MAX_RETRIES,
            });
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log structured error details and rethrow
          logger.error("Database create operation failed", {
            operation: 'createOneCustomer',
            model: 'Customer',
            error: String(error),
            isRetryable: isConnectionError,
          });
          throw error;
        }
      }

      // If we exhausted retries, throw the last error
      throw lastError;
    },

  /**
   * Create multiple Customer records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Customer objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @param options - Optional control flags (e.g., skipDuplicates).
   * @returns The count of created records or null.
   */
  async createMany(props: CustomerType[], globalClient?: ApolloClientType<NormalizedCacheObject>, options?: { skipDuplicates?: boolean }): Promise<{ count: number } | null> {
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
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_MANY_CUSTOMER = gql`
          mutation createManyCustomer($data: [CustomerCreateManyInput!]!, $skipDuplicates: Boolean) {
            createManyCustomer(data: $data, skipDuplicates: $skipDuplicates) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      authUserId: prop.authUserId !== undefined ? prop.authUserId : undefined,
  name: prop.name !== undefined ? prop.name : undefined,
  plan: prop.plan !== undefined ? prop.plan : undefined,
  stripeCustomerId: prop.stripeCustomerId !== undefined ? prop.stripeCustomerId : undefined,
  stripeSubscriptionId: prop.stripeSubscriptionId !== undefined ? prop.stripeSubscriptionId : undefined,
  stripePriceId: prop.stripePriceId !== undefined ? prop.stripePriceId : undefined,
  stripeCurrentPeriodEnd: prop.stripeCurrentPeriodEnd !== undefined ? prop.stripeCurrentPeriodEnd : undefined,
      })),
          ...(options?.skipDuplicates ? { skipDuplicates: true } : {}),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_CUSTOMER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyCustomer) {
          return response.data.createManyCustomer;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check for constraint violations FIRST - these are NEVER retryable
        const isConstraintViolation =
          error.message?.includes('violates check constraint') ||
          error.message?.includes('violates unique constraint') ||
          error.message?.includes('violates foreign key constraint') ||
          error.message?.includes('unique constraint') ||
          error.message?.includes('23514') ||
          error.message?.includes('23505') ||
          error.message?.includes('P2002') ||
          error.message?.includes('P2003');

        if (isConstraintViolation) {
          const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
          logger.warn("Duplicate key in createManyCustomer (expected during overlapping fetches)", {
            operation: 'createManyCustomer',
            model: 'Customer',
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
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
          logger.warn("Database connection error in createManyCustomer, retrying...", {
            operation: 'createManyCustomer',
            model: 'Customer',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database createMany operation failed", {
          operation: 'createManyCustomer',
          model: 'Customer',
          error: String(error),
          isRetryable: isConnectionError,
        });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single Customer record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Customer or null.
   */
  async update(props: CustomerType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<CustomerType> {
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
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_ONE_CUSTOMER = gql`
          mutation updateOneCustomer($data: CustomerUpdateInput!, $where: CustomerWhereUniqueInput!) {
            updateOneCustomer(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
      },
          data: {
      authUserId: props.authUserId !== undefined ? {
            set: props.authUserId 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? {
            set: props.stripeCustomerId 
           } : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? {
            set: props.stripeSubscriptionId 
           } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
            set: props.stripePriceId 
           } : undefined,
  stripeCurrentPeriodEnd: props.stripeCurrentPeriodEnd !== undefined ? {
            set: props.stripeCurrentPeriodEnd 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  users: props.users ? 
  Array.isArray(props.users) && props.users.length > 0 && props.users.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.users.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
        name: item.name !== undefined ? {
            equals: item.name
          } : undefined,
        customerId: item.customerId !== undefined ? {
            equals: item.customerId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        name: item.name !== undefined ? {
            set: item.name
          } : undefined,
        email: item.email !== undefined ? {
            set: item.email
          } : undefined,
        emailVerified: item.emailVerified !== undefined ? {
            set: item.emailVerified
          } : undefined,
        image: item.image !== undefined ? {
            set: item.image
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
        role: item.role !== undefined ? {
            set: item.role
          } : undefined,
        bio: item.bio !== undefined ? {
            set: item.bio
          } : undefined,
        jobTitle: item.jobTitle !== undefined ? {
            set: item.jobTitle
          } : undefined,
        currentAccount: item.currentAccount !== undefined ? {
            set: item.currentAccount
          } : undefined,
        plan: item.plan !== undefined ? {
            set: item.plan
          } : undefined,
        openaiAPIKey: item.openaiAPIKey !== undefined ? {
            set: item.openaiAPIKey
          } : undefined,
        openaiModel: item.openaiModel !== undefined ? {
            set: item.openaiModel
          } : undefined,
    accounts: item.accounts ? 
    Array.isArray(item.accounts) && item.accounts.length > 0 && item.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
          type: item.type !== undefined ? {
              equals: item.type
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
    sessions: item.sessions ? 
    Array.isArray(item.sessions) && item.sessions.length > 0 && item.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.sessions.map((item: any) => ({
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
    authenticators: item.authenticators ? 
    Array.isArray(item.authenticators) && item.authenticators.length > 0 && item.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? 
    Array.isArray(item.alpacaAccounts) && item.alpacaAccounts.length > 0 && item.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.alpacaAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          type: item.type !== undefined ? {
              equals: item.type
            } : undefined,
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
          APIKey: item.APIKey !== undefined ? {
              set: item.APIKey
            } : undefined,
          APISecret: item.APISecret !== undefined ? {
              set: item.APISecret
            } : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
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
            alpacaAccountId: item.allocation.alpacaAccountId !== undefined ? {
                equals: item.allocation.alpacaAccountId
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
      tradingPolicy: item.tradingPolicy ? 
      typeof item.tradingPolicy === 'object' && Object.keys(item.tradingPolicy).length === 1 && (Object.keys(item.tradingPolicy)[0] === 'id' || Object.keys(item.tradingPolicy)[0] === 'symbol')
? {
      connect: {
        id: item.tradingPolicy.id
      }
} : { upsert: {
          where: {
            id: item.tradingPolicy.id !== undefined ? {
                equals: item.tradingPolicy.id
              } : undefined,
            alpacaAccountId: item.tradingPolicy.alpacaAccountId !== undefined ? {
                equals: item.tradingPolicy.alpacaAccountId
              } : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                equals: item.tradingPolicy.miniModelId
              } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                equals: item.tradingPolicy.normalModelId
              } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                equals: item.tradingPolicy.advancedModelId
              } : undefined,
          },
          update: {
            id: item.tradingPolicy.id !== undefined ? {
                set: item.tradingPolicy.id
              } : undefined,
            version: item.tradingPolicy.version !== undefined ? {
                set: item.tradingPolicy.version
              } : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? {
                set: item.tradingPolicy.lastModifiedBy
              } : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? {
                set: item.tradingPolicy.lastModifiedAt
              } : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? {
                set: item.tradingPolicy.autonomyMode
              } : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? {
                set: item.tradingPolicy.realtimeTradingEnabled
              } : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? {
                set: item.tradingPolicy.paperTradingOnly
              } : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? {
                set: item.tradingPolicy.killSwitchEnabled
              } : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? {
                set: item.tradingPolicy.equitiesEnabled
              } : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? {
                set: item.tradingPolicy.etfsEnabled
              } : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? {
                set: item.tradingPolicy.cryptoEnabled
              } : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? {
                set: item.tradingPolicy.optionsEnabled
              } : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? {
                set: item.tradingPolicy.futuresEnabled
              } : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? {
                set: item.tradingPolicy.forexEnabled
              } : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? {
                set: item.tradingPolicy.shortingEnabled
              } : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? {
                set: item.tradingPolicy.marginEnabled
              } : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? {
                set: item.tradingPolicy.fractionalSharesEnabled
              } : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? {
                set: item.tradingPolicy.maxBuyingPowerUtilPct
              } : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? {
                set: item.tradingPolicy.cashFloorPct
              } : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? {
                set: item.tradingPolicy.maxGrossExposurePct
              } : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? {
                set: item.tradingPolicy.maxNetExposurePct
              } : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? {
                set: item.tradingPolicy.maxLeverage
              } : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? {
                set: item.tradingPolicy.maxSymbolConcentrationPct
              } : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? {
                set: item.tradingPolicy.maxSectorConcentrationPct
              } : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? {
                set: item.tradingPolicy.maxOpenPositions
              } : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? {
                set: item.tradingPolicy.maxOpenOrders
              } : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? {
                set: item.tradingPolicy.perTradeEquityAllocationPct
              } : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? {
                set: item.tradingPolicy.perTradeCryptoAllocationPct
              } : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.macroOverlayEnabled
              } : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.sectorOverlayEnabled
              } : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.volatilityOverlayEnabled
              } : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.liquidityStressOverlayEnabled
              } : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? {
                set: item.tradingPolicy.blackSwanProtectionEnabled
              } : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? {
                set: item.tradingPolicy.drawdownGuardianEnabled
              } : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? {
                set: item.tradingPolicy.correlationSpikeProtectionEnabled
              } : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.newsEventRiskOverlayEnabled
              } : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.exchangeHealthOverlayEnabled
              } : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? {
                set: item.tradingPolicy.dataQualitySentinelEnabled
              } : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? {
                set: item.tradingPolicy.miniModelProvider
              } : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                set: item.tradingPolicy.miniModelId
              } : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? {
                set: item.tradingPolicy.normalModelProvider
              } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                set: item.tradingPolicy.normalModelId
              } : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? {
                set: item.tradingPolicy.advancedModelProvider
              } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                set: item.tradingPolicy.advancedModelId
              } : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
          },
          create: {
            version: item.tradingPolicy.version !== undefined ? item.tradingPolicy.version : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? item.tradingPolicy.lastModifiedBy : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? item.tradingPolicy.lastModifiedAt : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? item.tradingPolicy.autonomyMode : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? item.tradingPolicy.realtimeTradingEnabled : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? item.tradingPolicy.paperTradingOnly : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? item.tradingPolicy.killSwitchEnabled : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? item.tradingPolicy.equitiesEnabled : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? item.tradingPolicy.etfsEnabled : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? item.tradingPolicy.cryptoEnabled : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? item.tradingPolicy.optionsEnabled : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? item.tradingPolicy.futuresEnabled : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? item.tradingPolicy.forexEnabled : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? item.tradingPolicy.shortingEnabled : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? item.tradingPolicy.marginEnabled : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? item.tradingPolicy.fractionalSharesEnabled : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? item.tradingPolicy.maxBuyingPowerUtilPct : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? item.tradingPolicy.cashFloorPct : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? item.tradingPolicy.maxGrossExposurePct : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? item.tradingPolicy.maxNetExposurePct : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? item.tradingPolicy.maxLeverage : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? item.tradingPolicy.maxSymbolConcentrationPct : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? item.tradingPolicy.maxSectorConcentrationPct : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? item.tradingPolicy.maxOpenPositions : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? item.tradingPolicy.maxOpenOrders : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? item.tradingPolicy.perTradeEquityAllocationPct : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? item.tradingPolicy.perTradeCryptoAllocationPct : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? item.tradingPolicy.macroOverlayEnabled : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? item.tradingPolicy.sectorOverlayEnabled : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? item.tradingPolicy.volatilityOverlayEnabled : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? item.tradingPolicy.liquidityStressOverlayEnabled : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? item.tradingPolicy.blackSwanProtectionEnabled : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? item.tradingPolicy.drawdownGuardianEnabled : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? item.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? item.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? item.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? item.tradingPolicy.dataQualitySentinelEnabled : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? item.tradingPolicy.miniModelProvider : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? item.tradingPolicy.miniModelId : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? item.tradingPolicy.normalModelProvider : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? item.tradingPolicy.normalModelId : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? item.tradingPolicy.advancedModelProvider : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? item.tradingPolicy.advancedModelId : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId
              } : undefined,
            title: item.title !== undefined ? {
                equals: item.title
              } : undefined,
            type: item.type !== undefined ? {
                equals: item.type
              } : undefined,
            status: item.status !== undefined ? {
                equals: item.status
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
            metadata: item.metadata !== undefined ? item.metadata : undefined,
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
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
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
            alpacaAccountId: item.allocation.alpacaAccountId !== undefined ? item.allocation.alpacaAccountId : undefined,
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
      tradingPolicy: item.tradingPolicy ? 
        typeof item.tradingPolicy === 'object' && Object.keys(item.tradingPolicy).length === 1 && Object.keys(item.tradingPolicy)[0] === 'id'
    ? { connect: {
            id: item.tradingPolicy.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.tradingPolicy.id !== undefined ? item.tradingPolicy.id : undefined,
            alpacaAccountId: item.tradingPolicy.alpacaAccountId !== undefined ? item.tradingPolicy.alpacaAccountId : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                equals: item.tradingPolicy.miniModelId 
               } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                equals: item.tradingPolicy.normalModelId 
               } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                equals: item.tradingPolicy.advancedModelId 
               } : undefined,
          },
          create: {
            version: item.tradingPolicy.version !== undefined ? item.tradingPolicy.version : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? item.tradingPolicy.lastModifiedBy : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? item.tradingPolicy.lastModifiedAt : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? item.tradingPolicy.autonomyMode : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? item.tradingPolicy.realtimeTradingEnabled : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? item.tradingPolicy.paperTradingOnly : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? item.tradingPolicy.killSwitchEnabled : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? item.tradingPolicy.equitiesEnabled : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? item.tradingPolicy.etfsEnabled : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? item.tradingPolicy.cryptoEnabled : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? item.tradingPolicy.optionsEnabled : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? item.tradingPolicy.futuresEnabled : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? item.tradingPolicy.forexEnabled : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? item.tradingPolicy.shortingEnabled : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? item.tradingPolicy.marginEnabled : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? item.tradingPolicy.fractionalSharesEnabled : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? item.tradingPolicy.maxBuyingPowerUtilPct : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? item.tradingPolicy.cashFloorPct : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? item.tradingPolicy.maxGrossExposurePct : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? item.tradingPolicy.maxNetExposurePct : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? item.tradingPolicy.maxLeverage : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? item.tradingPolicy.maxSymbolConcentrationPct : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? item.tradingPolicy.maxSectorConcentrationPct : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? item.tradingPolicy.maxOpenPositions : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? item.tradingPolicy.maxOpenOrders : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? item.tradingPolicy.perTradeEquityAllocationPct : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? item.tradingPolicy.perTradeCryptoAllocationPct : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? item.tradingPolicy.macroOverlayEnabled : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? item.tradingPolicy.sectorOverlayEnabled : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? item.tradingPolicy.volatilityOverlayEnabled : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? item.tradingPolicy.liquidityStressOverlayEnabled : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? item.tradingPolicy.blackSwanProtectionEnabled : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? item.tradingPolicy.drawdownGuardianEnabled : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? item.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? item.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? item.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? item.tradingPolicy.dataQualitySentinelEnabled : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? item.tradingPolicy.miniModelProvider : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? item.tradingPolicy.miniModelId : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? item.tradingPolicy.normalModelProvider : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? item.tradingPolicy.normalModelId : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? item.tradingPolicy.advancedModelProvider : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? item.tradingPolicy.advancedModelId : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
            type: item.type !== undefined ? {
                equals: item.type 
               } : undefined,
            status: item.status !== undefined ? {
                equals: item.status 
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
        },
      }))
    } : undefined,
    linkedProviders: item.linkedProviders ? 
    Array.isArray(item.linkedProviders) && item.linkedProviders.length > 0 && item.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: item.accountLinkingRequests ? 
    Array.isArray(item.accountLinkingRequests) && item.accountLinkingRequests.length > 0 && item.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.accountLinkingRequests.map((item: any) => ({
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
          status: item.status !== undefined ? {
              equals: item.status
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
    reviewedWaitlistEntries: item.reviewedWaitlistEntries ? 
    Array.isArray(item.reviewedWaitlistEntries) && item.reviewedWaitlistEntries.length > 0 && item.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
          status: item.status !== undefined ? {
              equals: item.status
            } : undefined,
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
    llmConfiguration: item.llmConfiguration ? 
    typeof item.llmConfiguration === 'object' && Object.keys(item.llmConfiguration).length === 1 && (Object.keys(item.llmConfiguration)[0] === 'id' || Object.keys(item.llmConfiguration)[0] === 'symbol')
? {
    connect: {
      id: item.llmConfiguration.id
    }
} : { upsert: {
        where: {
          id: item.llmConfiguration.id !== undefined ? {
              equals: item.llmConfiguration.id
            } : undefined,
          userId: item.llmConfiguration.userId !== undefined ? {
              equals: item.llmConfiguration.userId
            } : undefined,
        },
        update: {
          id: item.llmConfiguration.id !== undefined ? {
              set: item.llmConfiguration.id
            } : undefined,
          defaultProvider: item.llmConfiguration.defaultProvider !== undefined ? {
              set: item.llmConfiguration.defaultProvider
            } : undefined,
          miniProvider: item.llmConfiguration.miniProvider !== undefined ? {
              set: item.llmConfiguration.miniProvider
            } : undefined,
          normalProvider: item.llmConfiguration.normalProvider !== undefined ? {
              set: item.llmConfiguration.normalProvider
            } : undefined,
          advancedProvider: item.llmConfiguration.advancedProvider !== undefined ? {
              set: item.llmConfiguration.advancedProvider
            } : undefined,
          miniModel: item.llmConfiguration.miniModel !== undefined ? {
              set: item.llmConfiguration.miniModel
            } : undefined,
          normalModel: item.llmConfiguration.normalModel !== undefined ? {
              set: item.llmConfiguration.normalModel
            } : undefined,
          advancedModel: item.llmConfiguration.advancedModel !== undefined ? {
              set: item.llmConfiguration.advancedModel
            } : undefined,
          openaiApiKey: item.llmConfiguration.openaiApiKey !== undefined ? {
              set: item.llmConfiguration.openaiApiKey
            } : undefined,
          anthropicApiKey: item.llmConfiguration.anthropicApiKey !== undefined ? {
              set: item.llmConfiguration.anthropicApiKey
            } : undefined,
          deepseekApiKey: item.llmConfiguration.deepseekApiKey !== undefined ? {
              set: item.llmConfiguration.deepseekApiKey
            } : undefined,
          kimiApiKey: item.llmConfiguration.kimiApiKey !== undefined ? {
              set: item.llmConfiguration.kimiApiKey
            } : undefined,
          qwenApiKey: item.llmConfiguration.qwenApiKey !== undefined ? {
              set: item.llmConfiguration.qwenApiKey
            } : undefined,
          xaiApiKey: item.llmConfiguration.xaiApiKey !== undefined ? {
              set: item.llmConfiguration.xaiApiKey
            } : undefined,
          geminiApiKey: item.llmConfiguration.geminiApiKey !== undefined ? {
              set: item.llmConfiguration.geminiApiKey
            } : undefined,
        },
        create: {
          defaultProvider: item.llmConfiguration.defaultProvider !== undefined ? item.llmConfiguration.defaultProvider : undefined,
          miniProvider: item.llmConfiguration.miniProvider !== undefined ? item.llmConfiguration.miniProvider : undefined,
          normalProvider: item.llmConfiguration.normalProvider !== undefined ? item.llmConfiguration.normalProvider : undefined,
          advancedProvider: item.llmConfiguration.advancedProvider !== undefined ? item.llmConfiguration.advancedProvider : undefined,
          miniModel: item.llmConfiguration.miniModel !== undefined ? item.llmConfiguration.miniModel : undefined,
          normalModel: item.llmConfiguration.normalModel !== undefined ? item.llmConfiguration.normalModel : undefined,
          advancedModel: item.llmConfiguration.advancedModel !== undefined ? item.llmConfiguration.advancedModel : undefined,
          openaiApiKey: item.llmConfiguration.openaiApiKey !== undefined ? item.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: item.llmConfiguration.anthropicApiKey !== undefined ? item.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: item.llmConfiguration.deepseekApiKey !== undefined ? item.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: item.llmConfiguration.kimiApiKey !== undefined ? item.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: item.llmConfiguration.qwenApiKey !== undefined ? item.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: item.llmConfiguration.xaiApiKey !== undefined ? item.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: item.llmConfiguration.geminiApiKey !== undefined ? item.llmConfiguration.geminiApiKey : undefined,
        },
      }
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
        role: item.role !== undefined ? item.role : undefined,
        bio: item.bio !== undefined ? item.bio : undefined,
        jobTitle: item.jobTitle !== undefined ? item.jobTitle : undefined,
        currentAccount: item.currentAccount !== undefined ? item.currentAccount : undefined,
        plan: item.plan !== undefined ? item.plan : undefined,
        openaiAPIKey: item.openaiAPIKey !== undefined ? item.openaiAPIKey : undefined,
        openaiModel: item.openaiModel !== undefined ? item.openaiModel : undefined,
    accounts: item.accounts ? 
      Array.isArray(item.accounts) && item.accounts.length > 0 &&  item.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          type: item.type !== undefined ? {
              equals: item.type 
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
    sessions: item.sessions ? 
      Array.isArray(item.sessions) && item.sessions.length > 0 &&  item.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.sessions.map((item: any) => ({
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
    authenticators: item.authenticators ? 
      Array.isArray(item.authenticators) && item.authenticators.length > 0 &&  item.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? 
      Array.isArray(item.alpacaAccounts) && item.alpacaAccounts.length > 0 &&  item.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          type: item.type !== undefined ? {
              equals: item.type 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
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
            alpacaAccountId: item.allocation.alpacaAccountId !== undefined ? item.allocation.alpacaAccountId : undefined,
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
      tradingPolicy: item.tradingPolicy ? 
        typeof item.tradingPolicy === 'object' && Object.keys(item.tradingPolicy).length === 1 && Object.keys(item.tradingPolicy)[0] === 'id'
    ? { connect: {
            id: item.tradingPolicy.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.tradingPolicy.id !== undefined ? item.tradingPolicy.id : undefined,
            alpacaAccountId: item.tradingPolicy.alpacaAccountId !== undefined ? item.tradingPolicy.alpacaAccountId : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                equals: item.tradingPolicy.miniModelId 
               } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                equals: item.tradingPolicy.normalModelId 
               } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                equals: item.tradingPolicy.advancedModelId 
               } : undefined,
          },
          create: {
            version: item.tradingPolicy.version !== undefined ? item.tradingPolicy.version : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? item.tradingPolicy.lastModifiedBy : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? item.tradingPolicy.lastModifiedAt : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? item.tradingPolicy.autonomyMode : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? item.tradingPolicy.realtimeTradingEnabled : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? item.tradingPolicy.paperTradingOnly : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? item.tradingPolicy.killSwitchEnabled : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? item.tradingPolicy.equitiesEnabled : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? item.tradingPolicy.etfsEnabled : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? item.tradingPolicy.cryptoEnabled : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? item.tradingPolicy.optionsEnabled : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? item.tradingPolicy.futuresEnabled : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? item.tradingPolicy.forexEnabled : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? item.tradingPolicy.shortingEnabled : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? item.tradingPolicy.marginEnabled : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? item.tradingPolicy.fractionalSharesEnabled : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? item.tradingPolicy.maxBuyingPowerUtilPct : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? item.tradingPolicy.cashFloorPct : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? item.tradingPolicy.maxGrossExposurePct : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? item.tradingPolicy.maxNetExposurePct : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? item.tradingPolicy.maxLeverage : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? item.tradingPolicy.maxSymbolConcentrationPct : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? item.tradingPolicy.maxSectorConcentrationPct : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? item.tradingPolicy.maxOpenPositions : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? item.tradingPolicy.maxOpenOrders : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? item.tradingPolicy.perTradeEquityAllocationPct : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? item.tradingPolicy.perTradeCryptoAllocationPct : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? item.tradingPolicy.macroOverlayEnabled : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? item.tradingPolicy.sectorOverlayEnabled : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? item.tradingPolicy.volatilityOverlayEnabled : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? item.tradingPolicy.liquidityStressOverlayEnabled : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? item.tradingPolicy.blackSwanProtectionEnabled : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? item.tradingPolicy.drawdownGuardianEnabled : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? item.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? item.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? item.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? item.tradingPolicy.dataQualitySentinelEnabled : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? item.tradingPolicy.miniModelProvider : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? item.tradingPolicy.miniModelId : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? item.tradingPolicy.normalModelProvider : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? item.tradingPolicy.normalModelId : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? item.tradingPolicy.advancedModelProvider : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? item.tradingPolicy.advancedModelId : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
            type: item.type !== undefined ? {
                equals: item.type 
               } : undefined,
            status: item.status !== undefined ? {
                equals: item.status 
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
        },
      }))
    } : undefined,
    linkedProviders: item.linkedProviders ? 
      Array.isArray(item.linkedProviders) && item.linkedProviders.length > 0 &&  item.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: item.accountLinkingRequests ? 
      Array.isArray(item.accountLinkingRequests) && item.accountLinkingRequests.length > 0 &&  item.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accountLinkingRequests.map((item: any) => ({
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
          status: item.status !== undefined ? {
              equals: item.status 
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
    reviewedWaitlistEntries: item.reviewedWaitlistEntries ? 
      Array.isArray(item.reviewedWaitlistEntries) && item.reviewedWaitlistEntries.length > 0 &&  item.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
          status: item.status !== undefined ? {
              equals: item.status 
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
    llmConfiguration: item.llmConfiguration ? 
      typeof item.llmConfiguration === 'object' && Object.keys(item.llmConfiguration).length === 1 && Object.keys(item.llmConfiguration)[0] === 'id'
    ? { connect: {
          id: item.llmConfiguration.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.llmConfiguration.id !== undefined ? item.llmConfiguration.id : undefined,
          userId: item.llmConfiguration.userId !== undefined ? item.llmConfiguration.userId : undefined,
        },
        create: {
          defaultProvider: item.llmConfiguration.defaultProvider !== undefined ? item.llmConfiguration.defaultProvider : undefined,
          miniProvider: item.llmConfiguration.miniProvider !== undefined ? item.llmConfiguration.miniProvider : undefined,
          normalProvider: item.llmConfiguration.normalProvider !== undefined ? item.llmConfiguration.normalProvider : undefined,
          advancedProvider: item.llmConfiguration.advancedProvider !== undefined ? item.llmConfiguration.advancedProvider : undefined,
          miniModel: item.llmConfiguration.miniModel !== undefined ? item.llmConfiguration.miniModel : undefined,
          normalModel: item.llmConfiguration.normalModel !== undefined ? item.llmConfiguration.normalModel : undefined,
          advancedModel: item.llmConfiguration.advancedModel !== undefined ? item.llmConfiguration.advancedModel : undefined,
          openaiApiKey: item.llmConfiguration.openaiApiKey !== undefined ? item.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: item.llmConfiguration.anthropicApiKey !== undefined ? item.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: item.llmConfiguration.deepseekApiKey !== undefined ? item.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: item.llmConfiguration.kimiApiKey !== undefined ? item.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: item.llmConfiguration.qwenApiKey !== undefined ? item.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: item.llmConfiguration.xaiApiKey !== undefined ? item.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: item.llmConfiguration.geminiApiKey !== undefined ? item.llmConfiguration.geminiApiKey : undefined,
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
          mutation: UPDATE_ONE_CUSTOMER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneCustomer) {
          return response.data.updateOneCustomer;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check for constraint violations FIRST - these are NEVER retryable
        const isConstraintViolation =
          error.message?.includes('violates check constraint') ||
          error.message?.includes('violates unique constraint') ||
          error.message?.includes('violates foreign key constraint') ||
          error.message?.includes('unique constraint') ||
          error.message?.includes('23514') ||
          error.message?.includes('23505') ||
          error.message?.includes('P2002') ||
          error.message?.includes('P2003');

        if (isConstraintViolation) {
          const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
          logger.error("Non-retryable constraint violation in updateOneCustomer", {
            operation: 'updateOneCustomer',
            model: 'Customer',
            error: String(error),
            recordId: props.id,
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
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
          logger.warn("Database connection error in updateOneCustomer, retrying...", {
            operation: 'updateOneCustomer',
            model: 'Customer',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database update operation failed", {
          operation: 'updateOneCustomer',
          model: 'Customer',
          error: String(error),
          recordId: props.id,
          isRetryable: isConnectionError,
        });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single Customer record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Customer or null.
   */
  async upsert(props: CustomerType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<CustomerType> {
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
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const UPSERT_ONE_CUSTOMER = gql`
          mutation upsertOneCustomer($where: CustomerWhereUniqueInput!, $create: CustomerCreateInput!, $update: CustomerUpdateInput!) {
            upsertOneCustomer(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? props.stripeCustomerId : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? props.stripeSubscriptionId : undefined,
  authUserId: props.authUserId !== undefined ? {
    equals: props.authUserId 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
    equals: props.stripePriceId 
  } : undefined,
      },
          create: {
        authUserId: props.authUserId !== undefined ? props.authUserId : undefined,
  name: props.name !== undefined ? props.name : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? props.stripeCustomerId : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? props.stripeSubscriptionId : undefined,
  stripePriceId: props.stripePriceId !== undefined ? props.stripePriceId : undefined,
  stripeCurrentPeriodEnd: props.stripeCurrentPeriodEnd !== undefined ? props.stripeCurrentPeriodEnd : undefined,
  users: props.users ? 
    Array.isArray(props.users) && props.users.length > 0 &&  props.users.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.users.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
        role: item.role !== undefined ? item.role : undefined,
        bio: item.bio !== undefined ? item.bio : undefined,
        jobTitle: item.jobTitle !== undefined ? item.jobTitle : undefined,
        currentAccount: item.currentAccount !== undefined ? item.currentAccount : undefined,
        plan: item.plan !== undefined ? item.plan : undefined,
        openaiAPIKey: item.openaiAPIKey !== undefined ? item.openaiAPIKey : undefined,
        openaiModel: item.openaiModel !== undefined ? item.openaiModel : undefined,
    accounts: item.accounts ? 
      Array.isArray(item.accounts) && item.accounts.length > 0 &&  item.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          type: item.type !== undefined ? {
              equals: item.type 
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
    sessions: item.sessions ? 
      Array.isArray(item.sessions) && item.sessions.length > 0 &&  item.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.sessions.map((item: any) => ({
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
    authenticators: item.authenticators ? 
      Array.isArray(item.authenticators) && item.authenticators.length > 0 &&  item.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? 
      Array.isArray(item.alpacaAccounts) && item.alpacaAccounts.length > 0 &&  item.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          type: item.type !== undefined ? {
              equals: item.type 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
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
            alpacaAccountId: item.allocation.alpacaAccountId !== undefined ? item.allocation.alpacaAccountId : undefined,
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
      tradingPolicy: item.tradingPolicy ? 
        typeof item.tradingPolicy === 'object' && Object.keys(item.tradingPolicy).length === 1 && Object.keys(item.tradingPolicy)[0] === 'id'
    ? { connect: {
            id: item.tradingPolicy.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.tradingPolicy.id !== undefined ? item.tradingPolicy.id : undefined,
            alpacaAccountId: item.tradingPolicy.alpacaAccountId !== undefined ? item.tradingPolicy.alpacaAccountId : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                equals: item.tradingPolicy.miniModelId 
               } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                equals: item.tradingPolicy.normalModelId 
               } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                equals: item.tradingPolicy.advancedModelId 
               } : undefined,
          },
          create: {
            version: item.tradingPolicy.version !== undefined ? item.tradingPolicy.version : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? item.tradingPolicy.lastModifiedBy : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? item.tradingPolicy.lastModifiedAt : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? item.tradingPolicy.autonomyMode : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? item.tradingPolicy.realtimeTradingEnabled : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? item.tradingPolicy.paperTradingOnly : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? item.tradingPolicy.killSwitchEnabled : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? item.tradingPolicy.equitiesEnabled : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? item.tradingPolicy.etfsEnabled : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? item.tradingPolicy.cryptoEnabled : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? item.tradingPolicy.optionsEnabled : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? item.tradingPolicy.futuresEnabled : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? item.tradingPolicy.forexEnabled : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? item.tradingPolicy.shortingEnabled : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? item.tradingPolicy.marginEnabled : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? item.tradingPolicy.fractionalSharesEnabled : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? item.tradingPolicy.maxBuyingPowerUtilPct : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? item.tradingPolicy.cashFloorPct : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? item.tradingPolicy.maxGrossExposurePct : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? item.tradingPolicy.maxNetExposurePct : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? item.tradingPolicy.maxLeverage : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? item.tradingPolicy.maxSymbolConcentrationPct : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? item.tradingPolicy.maxSectorConcentrationPct : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? item.tradingPolicy.maxOpenPositions : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? item.tradingPolicy.maxOpenOrders : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? item.tradingPolicy.perTradeEquityAllocationPct : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? item.tradingPolicy.perTradeCryptoAllocationPct : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? item.tradingPolicy.macroOverlayEnabled : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? item.tradingPolicy.sectorOverlayEnabled : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? item.tradingPolicy.volatilityOverlayEnabled : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? item.tradingPolicy.liquidityStressOverlayEnabled : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? item.tradingPolicy.blackSwanProtectionEnabled : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? item.tradingPolicy.drawdownGuardianEnabled : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? item.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? item.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? item.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? item.tradingPolicy.dataQualitySentinelEnabled : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? item.tradingPolicy.miniModelProvider : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? item.tradingPolicy.miniModelId : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? item.tradingPolicy.normalModelProvider : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? item.tradingPolicy.normalModelId : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? item.tradingPolicy.advancedModelProvider : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? item.tradingPolicy.advancedModelId : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
            type: item.type !== undefined ? {
                equals: item.type 
               } : undefined,
            status: item.status !== undefined ? {
                equals: item.status 
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
        },
      }))
    } : undefined,
    linkedProviders: item.linkedProviders ? 
      Array.isArray(item.linkedProviders) && item.linkedProviders.length > 0 &&  item.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: item.accountLinkingRequests ? 
      Array.isArray(item.accountLinkingRequests) && item.accountLinkingRequests.length > 0 &&  item.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accountLinkingRequests.map((item: any) => ({
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
          status: item.status !== undefined ? {
              equals: item.status 
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
    reviewedWaitlistEntries: item.reviewedWaitlistEntries ? 
      Array.isArray(item.reviewedWaitlistEntries) && item.reviewedWaitlistEntries.length > 0 &&  item.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
          status: item.status !== undefined ? {
              equals: item.status 
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
    llmConfiguration: item.llmConfiguration ? 
      typeof item.llmConfiguration === 'object' && Object.keys(item.llmConfiguration).length === 1 && Object.keys(item.llmConfiguration)[0] === 'id'
    ? { connect: {
          id: item.llmConfiguration.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.llmConfiguration.id !== undefined ? item.llmConfiguration.id : undefined,
          userId: item.llmConfiguration.userId !== undefined ? item.llmConfiguration.userId : undefined,
        },
        create: {
          defaultProvider: item.llmConfiguration.defaultProvider !== undefined ? item.llmConfiguration.defaultProvider : undefined,
          miniProvider: item.llmConfiguration.miniProvider !== undefined ? item.llmConfiguration.miniProvider : undefined,
          normalProvider: item.llmConfiguration.normalProvider !== undefined ? item.llmConfiguration.normalProvider : undefined,
          advancedProvider: item.llmConfiguration.advancedProvider !== undefined ? item.llmConfiguration.advancedProvider : undefined,
          miniModel: item.llmConfiguration.miniModel !== undefined ? item.llmConfiguration.miniModel : undefined,
          normalModel: item.llmConfiguration.normalModel !== undefined ? item.llmConfiguration.normalModel : undefined,
          advancedModel: item.llmConfiguration.advancedModel !== undefined ? item.llmConfiguration.advancedModel : undefined,
          openaiApiKey: item.llmConfiguration.openaiApiKey !== undefined ? item.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: item.llmConfiguration.anthropicApiKey !== undefined ? item.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: item.llmConfiguration.deepseekApiKey !== undefined ? item.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: item.llmConfiguration.kimiApiKey !== undefined ? item.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: item.llmConfiguration.qwenApiKey !== undefined ? item.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: item.llmConfiguration.xaiApiKey !== undefined ? item.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: item.llmConfiguration.geminiApiKey !== undefined ? item.llmConfiguration.geminiApiKey : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
      },
          update: {
      authUserId: props.authUserId !== undefined ? {
            set: props.authUserId 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? {
            set: props.stripeCustomerId 
           } : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? {
            set: props.stripeSubscriptionId 
           } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
            set: props.stripePriceId 
           } : undefined,
  stripeCurrentPeriodEnd: props.stripeCurrentPeriodEnd !== undefined ? {
            set: props.stripeCurrentPeriodEnd 
           } : undefined,
  users: props.users ? 
  Array.isArray(props.users) && props.users.length > 0 && props.users.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.users.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
        name: item.name !== undefined ? {
            equals: item.name
          } : undefined,
        customerId: item.customerId !== undefined ? {
            equals: item.customerId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        name: item.name !== undefined ? {
            set: item.name
          } : undefined,
        email: item.email !== undefined ? {
            set: item.email
          } : undefined,
        emailVerified: item.emailVerified !== undefined ? {
            set: item.emailVerified
          } : undefined,
        image: item.image !== undefined ? {
            set: item.image
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
        role: item.role !== undefined ? {
            set: item.role
          } : undefined,
        bio: item.bio !== undefined ? {
            set: item.bio
          } : undefined,
        jobTitle: item.jobTitle !== undefined ? {
            set: item.jobTitle
          } : undefined,
        currentAccount: item.currentAccount !== undefined ? {
            set: item.currentAccount
          } : undefined,
        plan: item.plan !== undefined ? {
            set: item.plan
          } : undefined,
        openaiAPIKey: item.openaiAPIKey !== undefined ? {
            set: item.openaiAPIKey
          } : undefined,
        openaiModel: item.openaiModel !== undefined ? {
            set: item.openaiModel
          } : undefined,
    accounts: item.accounts ? 
    Array.isArray(item.accounts) && item.accounts.length > 0 && item.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
          type: item.type !== undefined ? {
              equals: item.type
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
    sessions: item.sessions ? 
    Array.isArray(item.sessions) && item.sessions.length > 0 && item.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.sessions.map((item: any) => ({
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
    authenticators: item.authenticators ? 
    Array.isArray(item.authenticators) && item.authenticators.length > 0 && item.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? 
    Array.isArray(item.alpacaAccounts) && item.alpacaAccounts.length > 0 && item.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.alpacaAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          type: item.type !== undefined ? {
              equals: item.type
            } : undefined,
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
          APIKey: item.APIKey !== undefined ? {
              set: item.APIKey
            } : undefined,
          APISecret: item.APISecret !== undefined ? {
              set: item.APISecret
            } : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
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
            alpacaAccountId: item.allocation.alpacaAccountId !== undefined ? {
                equals: item.allocation.alpacaAccountId
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
      tradingPolicy: item.tradingPolicy ? 
      typeof item.tradingPolicy === 'object' && Object.keys(item.tradingPolicy).length === 1 && (Object.keys(item.tradingPolicy)[0] === 'id' || Object.keys(item.tradingPolicy)[0] === 'symbol')
? {
      connect: {
        id: item.tradingPolicy.id
      }
} : { upsert: {
          where: {
            id: item.tradingPolicy.id !== undefined ? {
                equals: item.tradingPolicy.id
              } : undefined,
            alpacaAccountId: item.tradingPolicy.alpacaAccountId !== undefined ? {
                equals: item.tradingPolicy.alpacaAccountId
              } : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                equals: item.tradingPolicy.miniModelId
              } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                equals: item.tradingPolicy.normalModelId
              } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                equals: item.tradingPolicy.advancedModelId
              } : undefined,
          },
          update: {
            id: item.tradingPolicy.id !== undefined ? {
                set: item.tradingPolicy.id
              } : undefined,
            version: item.tradingPolicy.version !== undefined ? {
                set: item.tradingPolicy.version
              } : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? {
                set: item.tradingPolicy.lastModifiedBy
              } : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? {
                set: item.tradingPolicy.lastModifiedAt
              } : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? {
                set: item.tradingPolicy.autonomyMode
              } : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? {
                set: item.tradingPolicy.realtimeTradingEnabled
              } : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? {
                set: item.tradingPolicy.paperTradingOnly
              } : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? {
                set: item.tradingPolicy.killSwitchEnabled
              } : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? {
                set: item.tradingPolicy.equitiesEnabled
              } : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? {
                set: item.tradingPolicy.etfsEnabled
              } : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? {
                set: item.tradingPolicy.cryptoEnabled
              } : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? {
                set: item.tradingPolicy.optionsEnabled
              } : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? {
                set: item.tradingPolicy.futuresEnabled
              } : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? {
                set: item.tradingPolicy.forexEnabled
              } : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? {
                set: item.tradingPolicy.shortingEnabled
              } : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? {
                set: item.tradingPolicy.marginEnabled
              } : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? {
                set: item.tradingPolicy.fractionalSharesEnabled
              } : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? {
                set: item.tradingPolicy.maxBuyingPowerUtilPct
              } : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? {
                set: item.tradingPolicy.cashFloorPct
              } : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? {
                set: item.tradingPolicy.maxGrossExposurePct
              } : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? {
                set: item.tradingPolicy.maxNetExposurePct
              } : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? {
                set: item.tradingPolicy.maxLeverage
              } : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? {
                set: item.tradingPolicy.maxSymbolConcentrationPct
              } : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? {
                set: item.tradingPolicy.maxSectorConcentrationPct
              } : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? {
                set: item.tradingPolicy.maxOpenPositions
              } : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? {
                set: item.tradingPolicy.maxOpenOrders
              } : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? {
                set: item.tradingPolicy.perTradeEquityAllocationPct
              } : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? {
                set: item.tradingPolicy.perTradeCryptoAllocationPct
              } : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.macroOverlayEnabled
              } : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.sectorOverlayEnabled
              } : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.volatilityOverlayEnabled
              } : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.liquidityStressOverlayEnabled
              } : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? {
                set: item.tradingPolicy.blackSwanProtectionEnabled
              } : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? {
                set: item.tradingPolicy.drawdownGuardianEnabled
              } : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? {
                set: item.tradingPolicy.correlationSpikeProtectionEnabled
              } : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.newsEventRiskOverlayEnabled
              } : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.exchangeHealthOverlayEnabled
              } : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? {
                set: item.tradingPolicy.dataQualitySentinelEnabled
              } : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? {
                set: item.tradingPolicy.miniModelProvider
              } : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                set: item.tradingPolicy.miniModelId
              } : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? {
                set: item.tradingPolicy.normalModelProvider
              } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                set: item.tradingPolicy.normalModelId
              } : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? {
                set: item.tradingPolicy.advancedModelProvider
              } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                set: item.tradingPolicy.advancedModelId
              } : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
          },
          create: {
            version: item.tradingPolicy.version !== undefined ? item.tradingPolicy.version : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? item.tradingPolicy.lastModifiedBy : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? item.tradingPolicy.lastModifiedAt : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? item.tradingPolicy.autonomyMode : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? item.tradingPolicy.realtimeTradingEnabled : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? item.tradingPolicy.paperTradingOnly : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? item.tradingPolicy.killSwitchEnabled : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? item.tradingPolicy.equitiesEnabled : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? item.tradingPolicy.etfsEnabled : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? item.tradingPolicy.cryptoEnabled : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? item.tradingPolicy.optionsEnabled : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? item.tradingPolicy.futuresEnabled : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? item.tradingPolicy.forexEnabled : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? item.tradingPolicy.shortingEnabled : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? item.tradingPolicy.marginEnabled : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? item.tradingPolicy.fractionalSharesEnabled : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? item.tradingPolicy.maxBuyingPowerUtilPct : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? item.tradingPolicy.cashFloorPct : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? item.tradingPolicy.maxGrossExposurePct : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? item.tradingPolicy.maxNetExposurePct : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? item.tradingPolicy.maxLeverage : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? item.tradingPolicy.maxSymbolConcentrationPct : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? item.tradingPolicy.maxSectorConcentrationPct : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? item.tradingPolicy.maxOpenPositions : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? item.tradingPolicy.maxOpenOrders : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? item.tradingPolicy.perTradeEquityAllocationPct : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? item.tradingPolicy.perTradeCryptoAllocationPct : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? item.tradingPolicy.macroOverlayEnabled : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? item.tradingPolicy.sectorOverlayEnabled : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? item.tradingPolicy.volatilityOverlayEnabled : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? item.tradingPolicy.liquidityStressOverlayEnabled : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? item.tradingPolicy.blackSwanProtectionEnabled : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? item.tradingPolicy.drawdownGuardianEnabled : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? item.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? item.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? item.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? item.tradingPolicy.dataQualitySentinelEnabled : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? item.tradingPolicy.miniModelProvider : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? item.tradingPolicy.miniModelId : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? item.tradingPolicy.normalModelProvider : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? item.tradingPolicy.normalModelId : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? item.tradingPolicy.advancedModelProvider : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? item.tradingPolicy.advancedModelId : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId
              } : undefined,
            title: item.title !== undefined ? {
                equals: item.title
              } : undefined,
            type: item.type !== undefined ? {
                equals: item.type
              } : undefined,
            status: item.status !== undefined ? {
                equals: item.status
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
            metadata: item.metadata !== undefined ? item.metadata : undefined,
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
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
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
            alpacaAccountId: item.allocation.alpacaAccountId !== undefined ? item.allocation.alpacaAccountId : undefined,
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
      tradingPolicy: item.tradingPolicy ? 
        typeof item.tradingPolicy === 'object' && Object.keys(item.tradingPolicy).length === 1 && Object.keys(item.tradingPolicy)[0] === 'id'
    ? { connect: {
            id: item.tradingPolicy.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.tradingPolicy.id !== undefined ? item.tradingPolicy.id : undefined,
            alpacaAccountId: item.tradingPolicy.alpacaAccountId !== undefined ? item.tradingPolicy.alpacaAccountId : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                equals: item.tradingPolicy.miniModelId 
               } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                equals: item.tradingPolicy.normalModelId 
               } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                equals: item.tradingPolicy.advancedModelId 
               } : undefined,
          },
          create: {
            version: item.tradingPolicy.version !== undefined ? item.tradingPolicy.version : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? item.tradingPolicy.lastModifiedBy : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? item.tradingPolicy.lastModifiedAt : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? item.tradingPolicy.autonomyMode : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? item.tradingPolicy.realtimeTradingEnabled : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? item.tradingPolicy.paperTradingOnly : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? item.tradingPolicy.killSwitchEnabled : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? item.tradingPolicy.equitiesEnabled : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? item.tradingPolicy.etfsEnabled : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? item.tradingPolicy.cryptoEnabled : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? item.tradingPolicy.optionsEnabled : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? item.tradingPolicy.futuresEnabled : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? item.tradingPolicy.forexEnabled : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? item.tradingPolicy.shortingEnabled : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? item.tradingPolicy.marginEnabled : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? item.tradingPolicy.fractionalSharesEnabled : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? item.tradingPolicy.maxBuyingPowerUtilPct : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? item.tradingPolicy.cashFloorPct : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? item.tradingPolicy.maxGrossExposurePct : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? item.tradingPolicy.maxNetExposurePct : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? item.tradingPolicy.maxLeverage : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? item.tradingPolicy.maxSymbolConcentrationPct : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? item.tradingPolicy.maxSectorConcentrationPct : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? item.tradingPolicy.maxOpenPositions : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? item.tradingPolicy.maxOpenOrders : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? item.tradingPolicy.perTradeEquityAllocationPct : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? item.tradingPolicy.perTradeCryptoAllocationPct : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? item.tradingPolicy.macroOverlayEnabled : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? item.tradingPolicy.sectorOverlayEnabled : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? item.tradingPolicy.volatilityOverlayEnabled : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? item.tradingPolicy.liquidityStressOverlayEnabled : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? item.tradingPolicy.blackSwanProtectionEnabled : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? item.tradingPolicy.drawdownGuardianEnabled : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? item.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? item.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? item.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? item.tradingPolicy.dataQualitySentinelEnabled : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? item.tradingPolicy.miniModelProvider : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? item.tradingPolicy.miniModelId : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? item.tradingPolicy.normalModelProvider : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? item.tradingPolicy.normalModelId : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? item.tradingPolicy.advancedModelProvider : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? item.tradingPolicy.advancedModelId : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
            type: item.type !== undefined ? {
                equals: item.type 
               } : undefined,
            status: item.status !== undefined ? {
                equals: item.status 
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
        },
      }))
    } : undefined,
    linkedProviders: item.linkedProviders ? 
    Array.isArray(item.linkedProviders) && item.linkedProviders.length > 0 && item.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: item.accountLinkingRequests ? 
    Array.isArray(item.accountLinkingRequests) && item.accountLinkingRequests.length > 0 && item.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.accountLinkingRequests.map((item: any) => ({
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
          status: item.status !== undefined ? {
              equals: item.status
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
    reviewedWaitlistEntries: item.reviewedWaitlistEntries ? 
    Array.isArray(item.reviewedWaitlistEntries) && item.reviewedWaitlistEntries.length > 0 && item.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
          status: item.status !== undefined ? {
              equals: item.status
            } : undefined,
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
    llmConfiguration: item.llmConfiguration ? 
    typeof item.llmConfiguration === 'object' && Object.keys(item.llmConfiguration).length === 1 && (Object.keys(item.llmConfiguration)[0] === 'id' || Object.keys(item.llmConfiguration)[0] === 'symbol')
? {
    connect: {
      id: item.llmConfiguration.id
    }
} : { upsert: {
        where: {
          id: item.llmConfiguration.id !== undefined ? {
              equals: item.llmConfiguration.id
            } : undefined,
          userId: item.llmConfiguration.userId !== undefined ? {
              equals: item.llmConfiguration.userId
            } : undefined,
        },
        update: {
          id: item.llmConfiguration.id !== undefined ? {
              set: item.llmConfiguration.id
            } : undefined,
          defaultProvider: item.llmConfiguration.defaultProvider !== undefined ? {
              set: item.llmConfiguration.defaultProvider
            } : undefined,
          miniProvider: item.llmConfiguration.miniProvider !== undefined ? {
              set: item.llmConfiguration.miniProvider
            } : undefined,
          normalProvider: item.llmConfiguration.normalProvider !== undefined ? {
              set: item.llmConfiguration.normalProvider
            } : undefined,
          advancedProvider: item.llmConfiguration.advancedProvider !== undefined ? {
              set: item.llmConfiguration.advancedProvider
            } : undefined,
          miniModel: item.llmConfiguration.miniModel !== undefined ? {
              set: item.llmConfiguration.miniModel
            } : undefined,
          normalModel: item.llmConfiguration.normalModel !== undefined ? {
              set: item.llmConfiguration.normalModel
            } : undefined,
          advancedModel: item.llmConfiguration.advancedModel !== undefined ? {
              set: item.llmConfiguration.advancedModel
            } : undefined,
          openaiApiKey: item.llmConfiguration.openaiApiKey !== undefined ? {
              set: item.llmConfiguration.openaiApiKey
            } : undefined,
          anthropicApiKey: item.llmConfiguration.anthropicApiKey !== undefined ? {
              set: item.llmConfiguration.anthropicApiKey
            } : undefined,
          deepseekApiKey: item.llmConfiguration.deepseekApiKey !== undefined ? {
              set: item.llmConfiguration.deepseekApiKey
            } : undefined,
          kimiApiKey: item.llmConfiguration.kimiApiKey !== undefined ? {
              set: item.llmConfiguration.kimiApiKey
            } : undefined,
          qwenApiKey: item.llmConfiguration.qwenApiKey !== undefined ? {
              set: item.llmConfiguration.qwenApiKey
            } : undefined,
          xaiApiKey: item.llmConfiguration.xaiApiKey !== undefined ? {
              set: item.llmConfiguration.xaiApiKey
            } : undefined,
          geminiApiKey: item.llmConfiguration.geminiApiKey !== undefined ? {
              set: item.llmConfiguration.geminiApiKey
            } : undefined,
        },
        create: {
          defaultProvider: item.llmConfiguration.defaultProvider !== undefined ? item.llmConfiguration.defaultProvider : undefined,
          miniProvider: item.llmConfiguration.miniProvider !== undefined ? item.llmConfiguration.miniProvider : undefined,
          normalProvider: item.llmConfiguration.normalProvider !== undefined ? item.llmConfiguration.normalProvider : undefined,
          advancedProvider: item.llmConfiguration.advancedProvider !== undefined ? item.llmConfiguration.advancedProvider : undefined,
          miniModel: item.llmConfiguration.miniModel !== undefined ? item.llmConfiguration.miniModel : undefined,
          normalModel: item.llmConfiguration.normalModel !== undefined ? item.llmConfiguration.normalModel : undefined,
          advancedModel: item.llmConfiguration.advancedModel !== undefined ? item.llmConfiguration.advancedModel : undefined,
          openaiApiKey: item.llmConfiguration.openaiApiKey !== undefined ? item.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: item.llmConfiguration.anthropicApiKey !== undefined ? item.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: item.llmConfiguration.deepseekApiKey !== undefined ? item.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: item.llmConfiguration.kimiApiKey !== undefined ? item.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: item.llmConfiguration.qwenApiKey !== undefined ? item.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: item.llmConfiguration.xaiApiKey !== undefined ? item.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: item.llmConfiguration.geminiApiKey !== undefined ? item.llmConfiguration.geminiApiKey : undefined,
        },
      }
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
        role: item.role !== undefined ? item.role : undefined,
        bio: item.bio !== undefined ? item.bio : undefined,
        jobTitle: item.jobTitle !== undefined ? item.jobTitle : undefined,
        currentAccount: item.currentAccount !== undefined ? item.currentAccount : undefined,
        plan: item.plan !== undefined ? item.plan : undefined,
        openaiAPIKey: item.openaiAPIKey !== undefined ? item.openaiAPIKey : undefined,
        openaiModel: item.openaiModel !== undefined ? item.openaiModel : undefined,
    accounts: item.accounts ? 
      Array.isArray(item.accounts) && item.accounts.length > 0 &&  item.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          type: item.type !== undefined ? {
              equals: item.type 
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
    sessions: item.sessions ? 
      Array.isArray(item.sessions) && item.sessions.length > 0 &&  item.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.sessions.map((item: any) => ({
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
    authenticators: item.authenticators ? 
      Array.isArray(item.authenticators) && item.authenticators.length > 0 &&  item.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? 
      Array.isArray(item.alpacaAccounts) && item.alpacaAccounts.length > 0 &&  item.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          type: item.type !== undefined ? {
              equals: item.type 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
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
            alpacaAccountId: item.allocation.alpacaAccountId !== undefined ? item.allocation.alpacaAccountId : undefined,
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
      tradingPolicy: item.tradingPolicy ? 
        typeof item.tradingPolicy === 'object' && Object.keys(item.tradingPolicy).length === 1 && Object.keys(item.tradingPolicy)[0] === 'id'
    ? { connect: {
            id: item.tradingPolicy.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.tradingPolicy.id !== undefined ? item.tradingPolicy.id : undefined,
            alpacaAccountId: item.tradingPolicy.alpacaAccountId !== undefined ? item.tradingPolicy.alpacaAccountId : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                equals: item.tradingPolicy.miniModelId 
               } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                equals: item.tradingPolicy.normalModelId 
               } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                equals: item.tradingPolicy.advancedModelId 
               } : undefined,
          },
          create: {
            version: item.tradingPolicy.version !== undefined ? item.tradingPolicy.version : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? item.tradingPolicy.lastModifiedBy : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? item.tradingPolicy.lastModifiedAt : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? item.tradingPolicy.autonomyMode : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? item.tradingPolicy.realtimeTradingEnabled : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? item.tradingPolicy.paperTradingOnly : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? item.tradingPolicy.killSwitchEnabled : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? item.tradingPolicy.equitiesEnabled : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? item.tradingPolicy.etfsEnabled : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? item.tradingPolicy.cryptoEnabled : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? item.tradingPolicy.optionsEnabled : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? item.tradingPolicy.futuresEnabled : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? item.tradingPolicy.forexEnabled : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? item.tradingPolicy.shortingEnabled : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? item.tradingPolicy.marginEnabled : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? item.tradingPolicy.fractionalSharesEnabled : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? item.tradingPolicy.maxBuyingPowerUtilPct : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? item.tradingPolicy.cashFloorPct : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? item.tradingPolicy.maxGrossExposurePct : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? item.tradingPolicy.maxNetExposurePct : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? item.tradingPolicy.maxLeverage : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? item.tradingPolicy.maxSymbolConcentrationPct : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? item.tradingPolicy.maxSectorConcentrationPct : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? item.tradingPolicy.maxOpenPositions : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? item.tradingPolicy.maxOpenOrders : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? item.tradingPolicy.perTradeEquityAllocationPct : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? item.tradingPolicy.perTradeCryptoAllocationPct : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? item.tradingPolicy.macroOverlayEnabled : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? item.tradingPolicy.sectorOverlayEnabled : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? item.tradingPolicy.volatilityOverlayEnabled : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? item.tradingPolicy.liquidityStressOverlayEnabled : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? item.tradingPolicy.blackSwanProtectionEnabled : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? item.tradingPolicy.drawdownGuardianEnabled : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? item.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? item.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? item.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? item.tradingPolicy.dataQualitySentinelEnabled : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? item.tradingPolicy.miniModelProvider : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? item.tradingPolicy.miniModelId : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? item.tradingPolicy.normalModelProvider : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? item.tradingPolicy.normalModelId : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? item.tradingPolicy.advancedModelProvider : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? item.tradingPolicy.advancedModelId : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
            type: item.type !== undefined ? {
                equals: item.type 
               } : undefined,
            status: item.status !== undefined ? {
                equals: item.status 
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
        },
      }))
    } : undefined,
    linkedProviders: item.linkedProviders ? 
      Array.isArray(item.linkedProviders) && item.linkedProviders.length > 0 &&  item.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: item.accountLinkingRequests ? 
      Array.isArray(item.accountLinkingRequests) && item.accountLinkingRequests.length > 0 &&  item.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accountLinkingRequests.map((item: any) => ({
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
          status: item.status !== undefined ? {
              equals: item.status 
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
    reviewedWaitlistEntries: item.reviewedWaitlistEntries ? 
      Array.isArray(item.reviewedWaitlistEntries) && item.reviewedWaitlistEntries.length > 0 &&  item.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
          status: item.status !== undefined ? {
              equals: item.status 
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
    llmConfiguration: item.llmConfiguration ? 
      typeof item.llmConfiguration === 'object' && Object.keys(item.llmConfiguration).length === 1 && Object.keys(item.llmConfiguration)[0] === 'id'
    ? { connect: {
          id: item.llmConfiguration.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.llmConfiguration.id !== undefined ? item.llmConfiguration.id : undefined,
          userId: item.llmConfiguration.userId !== undefined ? item.llmConfiguration.userId : undefined,
        },
        create: {
          defaultProvider: item.llmConfiguration.defaultProvider !== undefined ? item.llmConfiguration.defaultProvider : undefined,
          miniProvider: item.llmConfiguration.miniProvider !== undefined ? item.llmConfiguration.miniProvider : undefined,
          normalProvider: item.llmConfiguration.normalProvider !== undefined ? item.llmConfiguration.normalProvider : undefined,
          advancedProvider: item.llmConfiguration.advancedProvider !== undefined ? item.llmConfiguration.advancedProvider : undefined,
          miniModel: item.llmConfiguration.miniModel !== undefined ? item.llmConfiguration.miniModel : undefined,
          normalModel: item.llmConfiguration.normalModel !== undefined ? item.llmConfiguration.normalModel : undefined,
          advancedModel: item.llmConfiguration.advancedModel !== undefined ? item.llmConfiguration.advancedModel : undefined,
          openaiApiKey: item.llmConfiguration.openaiApiKey !== undefined ? item.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: item.llmConfiguration.anthropicApiKey !== undefined ? item.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: item.llmConfiguration.deepseekApiKey !== undefined ? item.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: item.llmConfiguration.kimiApiKey !== undefined ? item.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: item.llmConfiguration.qwenApiKey !== undefined ? item.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: item.llmConfiguration.xaiApiKey !== undefined ? item.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: item.llmConfiguration.geminiApiKey !== undefined ? item.llmConfiguration.geminiApiKey : undefined,
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
          mutation: UPSERT_ONE_CUSTOMER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneCustomer) {
          return response.data.upsertOneCustomer;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check for constraint violations FIRST - these are NEVER retryable
        const isConstraintViolation =
          error.message?.includes('violates check constraint') ||
          error.message?.includes('violates unique constraint') ||
          error.message?.includes('violates foreign key constraint') ||
          error.message?.includes('unique constraint') ||
          error.message?.includes('23514') ||
          error.message?.includes('23505') ||
          error.message?.includes('P2002') ||
          error.message?.includes('P2003');

        if (isConstraintViolation) {
          const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
          logger.error("Non-retryable constraint violation in upsertOneCustomer", {
            operation: 'upsertOneCustomer',
            model: 'Customer',
            error: String(error),
            recordId: props.id,
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
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
          logger.warn("Database connection error in upsertOneCustomer, retrying...", {
            operation: 'upsertOneCustomer',
            model: 'Customer',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database upsert operation failed", {
          operation: 'upsertOneCustomer',
          model: 'Customer',
          error: String(error),
          recordId: props.id,
          isRetryable: isConnectionError,
        });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple Customer records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Customer objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: CustomerType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_MANY_CUSTOMER = gql`
          mutation updateManyCustomer($data: [CustomerCreateManyInput!]!) {
            updateManyCustomer(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,

          },
          data: {
              authUserId: prop.authUserId !== undefined ? {
            set: prop.authUserId 
           } : undefined,
  name: prop.name !== undefined ? {
            set: prop.name 
           } : undefined,
  plan: prop.plan !== undefined ? {
            set: prop.plan 
           } : undefined,
  stripeCustomerId: prop.stripeCustomerId !== undefined ? {
            set: prop.stripeCustomerId 
           } : undefined,
  stripeSubscriptionId: prop.stripeSubscriptionId !== undefined ? {
            set: prop.stripeSubscriptionId 
           } : undefined,
  stripePriceId: prop.stripePriceId !== undefined ? {
            set: prop.stripePriceId 
           } : undefined,
  stripeCurrentPeriodEnd: prop.stripeCurrentPeriodEnd !== undefined ? {
            set: prop.stripeCurrentPeriodEnd 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  users: prop.users ? 
  Array.isArray(prop.users) && prop.users.length > 0 && prop.users.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.users.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
        name: item.name !== undefined ? {
            equals: item.name
          } : undefined,
        customerId: item.customerId !== undefined ? {
            equals: item.customerId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        name: item.name !== undefined ? {
            set: item.name
          } : undefined,
        email: item.email !== undefined ? {
            set: item.email
          } : undefined,
        emailVerified: item.emailVerified !== undefined ? {
            set: item.emailVerified
          } : undefined,
        image: item.image !== undefined ? {
            set: item.image
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
        role: item.role !== undefined ? {
            set: item.role
          } : undefined,
        bio: item.bio !== undefined ? {
            set: item.bio
          } : undefined,
        jobTitle: item.jobTitle !== undefined ? {
            set: item.jobTitle
          } : undefined,
        currentAccount: item.currentAccount !== undefined ? {
            set: item.currentAccount
          } : undefined,
        plan: item.plan !== undefined ? {
            set: item.plan
          } : undefined,
        openaiAPIKey: item.openaiAPIKey !== undefined ? {
            set: item.openaiAPIKey
          } : undefined,
        openaiModel: item.openaiModel !== undefined ? {
            set: item.openaiModel
          } : undefined,
    accounts: item.accounts ? 
    Array.isArray(item.accounts) && item.accounts.length > 0 && item.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
          type: item.type !== undefined ? {
              equals: item.type
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
    sessions: item.sessions ? 
    Array.isArray(item.sessions) && item.sessions.length > 0 && item.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.sessions.map((item: any) => ({
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
    authenticators: item.authenticators ? 
    Array.isArray(item.authenticators) && item.authenticators.length > 0 && item.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? 
    Array.isArray(item.alpacaAccounts) && item.alpacaAccounts.length > 0 && item.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.alpacaAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          type: item.type !== undefined ? {
              equals: item.type
            } : undefined,
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
          APIKey: item.APIKey !== undefined ? {
              set: item.APIKey
            } : undefined,
          APISecret: item.APISecret !== undefined ? {
              set: item.APISecret
            } : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
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
            alpacaAccountId: item.allocation.alpacaAccountId !== undefined ? {
                equals: item.allocation.alpacaAccountId
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
      tradingPolicy: item.tradingPolicy ? 
      typeof item.tradingPolicy === 'object' && Object.keys(item.tradingPolicy).length === 1 && (Object.keys(item.tradingPolicy)[0] === 'id' || Object.keys(item.tradingPolicy)[0] === 'symbol')
? {
      connect: {
        id: item.tradingPolicy.id
      }
} : { upsert: {
          where: {
            id: item.tradingPolicy.id !== undefined ? {
                equals: item.tradingPolicy.id
              } : undefined,
            alpacaAccountId: item.tradingPolicy.alpacaAccountId !== undefined ? {
                equals: item.tradingPolicy.alpacaAccountId
              } : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                equals: item.tradingPolicy.miniModelId
              } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                equals: item.tradingPolicy.normalModelId
              } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                equals: item.tradingPolicy.advancedModelId
              } : undefined,
          },
          update: {
            id: item.tradingPolicy.id !== undefined ? {
                set: item.tradingPolicy.id
              } : undefined,
            version: item.tradingPolicy.version !== undefined ? {
                set: item.tradingPolicy.version
              } : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? {
                set: item.tradingPolicy.lastModifiedBy
              } : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? {
                set: item.tradingPolicy.lastModifiedAt
              } : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? {
                set: item.tradingPolicy.autonomyMode
              } : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? {
                set: item.tradingPolicy.realtimeTradingEnabled
              } : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? {
                set: item.tradingPolicy.paperTradingOnly
              } : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? {
                set: item.tradingPolicy.killSwitchEnabled
              } : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? {
                set: item.tradingPolicy.equitiesEnabled
              } : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? {
                set: item.tradingPolicy.etfsEnabled
              } : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? {
                set: item.tradingPolicy.cryptoEnabled
              } : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? {
                set: item.tradingPolicy.optionsEnabled
              } : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? {
                set: item.tradingPolicy.futuresEnabled
              } : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? {
                set: item.tradingPolicy.forexEnabled
              } : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? {
                set: item.tradingPolicy.shortingEnabled
              } : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? {
                set: item.tradingPolicy.marginEnabled
              } : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? {
                set: item.tradingPolicy.fractionalSharesEnabled
              } : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? {
                set: item.tradingPolicy.maxBuyingPowerUtilPct
              } : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? {
                set: item.tradingPolicy.cashFloorPct
              } : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? {
                set: item.tradingPolicy.maxGrossExposurePct
              } : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? {
                set: item.tradingPolicy.maxNetExposurePct
              } : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? {
                set: item.tradingPolicy.maxLeverage
              } : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? {
                set: item.tradingPolicy.maxSymbolConcentrationPct
              } : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? {
                set: item.tradingPolicy.maxSectorConcentrationPct
              } : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? {
                set: item.tradingPolicy.maxOpenPositions
              } : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? {
                set: item.tradingPolicy.maxOpenOrders
              } : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? {
                set: item.tradingPolicy.perTradeEquityAllocationPct
              } : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? {
                set: item.tradingPolicy.perTradeCryptoAllocationPct
              } : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.macroOverlayEnabled
              } : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.sectorOverlayEnabled
              } : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.volatilityOverlayEnabled
              } : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.liquidityStressOverlayEnabled
              } : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? {
                set: item.tradingPolicy.blackSwanProtectionEnabled
              } : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? {
                set: item.tradingPolicy.drawdownGuardianEnabled
              } : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? {
                set: item.tradingPolicy.correlationSpikeProtectionEnabled
              } : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.newsEventRiskOverlayEnabled
              } : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? {
                set: item.tradingPolicy.exchangeHealthOverlayEnabled
              } : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? {
                set: item.tradingPolicy.dataQualitySentinelEnabled
              } : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? {
                set: item.tradingPolicy.miniModelProvider
              } : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                set: item.tradingPolicy.miniModelId
              } : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? {
                set: item.tradingPolicy.normalModelProvider
              } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                set: item.tradingPolicy.normalModelId
              } : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? {
                set: item.tradingPolicy.advancedModelProvider
              } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                set: item.tradingPolicy.advancedModelId
              } : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
          },
          create: {
            version: item.tradingPolicy.version !== undefined ? item.tradingPolicy.version : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? item.tradingPolicy.lastModifiedBy : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? item.tradingPolicy.lastModifiedAt : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? item.tradingPolicy.autonomyMode : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? item.tradingPolicy.realtimeTradingEnabled : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? item.tradingPolicy.paperTradingOnly : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? item.tradingPolicy.killSwitchEnabled : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? item.tradingPolicy.equitiesEnabled : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? item.tradingPolicy.etfsEnabled : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? item.tradingPolicy.cryptoEnabled : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? item.tradingPolicy.optionsEnabled : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? item.tradingPolicy.futuresEnabled : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? item.tradingPolicy.forexEnabled : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? item.tradingPolicy.shortingEnabled : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? item.tradingPolicy.marginEnabled : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? item.tradingPolicy.fractionalSharesEnabled : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? item.tradingPolicy.maxBuyingPowerUtilPct : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? item.tradingPolicy.cashFloorPct : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? item.tradingPolicy.maxGrossExposurePct : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? item.tradingPolicy.maxNetExposurePct : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? item.tradingPolicy.maxLeverage : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? item.tradingPolicy.maxSymbolConcentrationPct : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? item.tradingPolicy.maxSectorConcentrationPct : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? item.tradingPolicy.maxOpenPositions : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? item.tradingPolicy.maxOpenOrders : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? item.tradingPolicy.perTradeEquityAllocationPct : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? item.tradingPolicy.perTradeCryptoAllocationPct : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? item.tradingPolicy.macroOverlayEnabled : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? item.tradingPolicy.sectorOverlayEnabled : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? item.tradingPolicy.volatilityOverlayEnabled : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? item.tradingPolicy.liquidityStressOverlayEnabled : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? item.tradingPolicy.blackSwanProtectionEnabled : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? item.tradingPolicy.drawdownGuardianEnabled : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? item.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? item.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? item.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? item.tradingPolicy.dataQualitySentinelEnabled : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? item.tradingPolicy.miniModelProvider : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? item.tradingPolicy.miniModelId : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? item.tradingPolicy.normalModelProvider : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? item.tradingPolicy.normalModelId : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? item.tradingPolicy.advancedModelProvider : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? item.tradingPolicy.advancedModelId : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId
              } : undefined,
            title: item.title !== undefined ? {
                equals: item.title
              } : undefined,
            type: item.type !== undefined ? {
                equals: item.type
              } : undefined,
            status: item.status !== undefined ? {
                equals: item.status
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
            metadata: item.metadata !== undefined ? item.metadata : undefined,
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
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
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
            alpacaAccountId: item.allocation.alpacaAccountId !== undefined ? item.allocation.alpacaAccountId : undefined,
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
      tradingPolicy: item.tradingPolicy ? 
        typeof item.tradingPolicy === 'object' && Object.keys(item.tradingPolicy).length === 1 && Object.keys(item.tradingPolicy)[0] === 'id'
    ? { connect: {
            id: item.tradingPolicy.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.tradingPolicy.id !== undefined ? item.tradingPolicy.id : undefined,
            alpacaAccountId: item.tradingPolicy.alpacaAccountId !== undefined ? item.tradingPolicy.alpacaAccountId : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                equals: item.tradingPolicy.miniModelId 
               } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                equals: item.tradingPolicy.normalModelId 
               } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                equals: item.tradingPolicy.advancedModelId 
               } : undefined,
          },
          create: {
            version: item.tradingPolicy.version !== undefined ? item.tradingPolicy.version : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? item.tradingPolicy.lastModifiedBy : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? item.tradingPolicy.lastModifiedAt : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? item.tradingPolicy.autonomyMode : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? item.tradingPolicy.realtimeTradingEnabled : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? item.tradingPolicy.paperTradingOnly : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? item.tradingPolicy.killSwitchEnabled : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? item.tradingPolicy.equitiesEnabled : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? item.tradingPolicy.etfsEnabled : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? item.tradingPolicy.cryptoEnabled : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? item.tradingPolicy.optionsEnabled : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? item.tradingPolicy.futuresEnabled : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? item.tradingPolicy.forexEnabled : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? item.tradingPolicy.shortingEnabled : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? item.tradingPolicy.marginEnabled : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? item.tradingPolicy.fractionalSharesEnabled : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? item.tradingPolicy.maxBuyingPowerUtilPct : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? item.tradingPolicy.cashFloorPct : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? item.tradingPolicy.maxGrossExposurePct : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? item.tradingPolicy.maxNetExposurePct : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? item.tradingPolicy.maxLeverage : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? item.tradingPolicy.maxSymbolConcentrationPct : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? item.tradingPolicy.maxSectorConcentrationPct : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? item.tradingPolicy.maxOpenPositions : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? item.tradingPolicy.maxOpenOrders : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? item.tradingPolicy.perTradeEquityAllocationPct : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? item.tradingPolicy.perTradeCryptoAllocationPct : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? item.tradingPolicy.macroOverlayEnabled : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? item.tradingPolicy.sectorOverlayEnabled : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? item.tradingPolicy.volatilityOverlayEnabled : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? item.tradingPolicy.liquidityStressOverlayEnabled : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? item.tradingPolicy.blackSwanProtectionEnabled : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? item.tradingPolicy.drawdownGuardianEnabled : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? item.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? item.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? item.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? item.tradingPolicy.dataQualitySentinelEnabled : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? item.tradingPolicy.miniModelProvider : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? item.tradingPolicy.miniModelId : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? item.tradingPolicy.normalModelProvider : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? item.tradingPolicy.normalModelId : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? item.tradingPolicy.advancedModelProvider : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? item.tradingPolicy.advancedModelId : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
            type: item.type !== undefined ? {
                equals: item.type 
               } : undefined,
            status: item.status !== undefined ? {
                equals: item.status 
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
        },
      }))
    } : undefined,
    linkedProviders: item.linkedProviders ? 
    Array.isArray(item.linkedProviders) && item.linkedProviders.length > 0 && item.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: item.accountLinkingRequests ? 
    Array.isArray(item.accountLinkingRequests) && item.accountLinkingRequests.length > 0 && item.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.accountLinkingRequests.map((item: any) => ({
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
          status: item.status !== undefined ? {
              equals: item.status
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
    reviewedWaitlistEntries: item.reviewedWaitlistEntries ? 
    Array.isArray(item.reviewedWaitlistEntries) && item.reviewedWaitlistEntries.length > 0 && item.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
          status: item.status !== undefined ? {
              equals: item.status
            } : undefined,
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
    llmConfiguration: item.llmConfiguration ? 
    typeof item.llmConfiguration === 'object' && Object.keys(item.llmConfiguration).length === 1 && (Object.keys(item.llmConfiguration)[0] === 'id' || Object.keys(item.llmConfiguration)[0] === 'symbol')
? {
    connect: {
      id: item.llmConfiguration.id
    }
} : { upsert: {
        where: {
          id: item.llmConfiguration.id !== undefined ? {
              equals: item.llmConfiguration.id
            } : undefined,
          userId: item.llmConfiguration.userId !== undefined ? {
              equals: item.llmConfiguration.userId
            } : undefined,
        },
        update: {
          id: item.llmConfiguration.id !== undefined ? {
              set: item.llmConfiguration.id
            } : undefined,
          defaultProvider: item.llmConfiguration.defaultProvider !== undefined ? {
              set: item.llmConfiguration.defaultProvider
            } : undefined,
          miniProvider: item.llmConfiguration.miniProvider !== undefined ? {
              set: item.llmConfiguration.miniProvider
            } : undefined,
          normalProvider: item.llmConfiguration.normalProvider !== undefined ? {
              set: item.llmConfiguration.normalProvider
            } : undefined,
          advancedProvider: item.llmConfiguration.advancedProvider !== undefined ? {
              set: item.llmConfiguration.advancedProvider
            } : undefined,
          miniModel: item.llmConfiguration.miniModel !== undefined ? {
              set: item.llmConfiguration.miniModel
            } : undefined,
          normalModel: item.llmConfiguration.normalModel !== undefined ? {
              set: item.llmConfiguration.normalModel
            } : undefined,
          advancedModel: item.llmConfiguration.advancedModel !== undefined ? {
              set: item.llmConfiguration.advancedModel
            } : undefined,
          openaiApiKey: item.llmConfiguration.openaiApiKey !== undefined ? {
              set: item.llmConfiguration.openaiApiKey
            } : undefined,
          anthropicApiKey: item.llmConfiguration.anthropicApiKey !== undefined ? {
              set: item.llmConfiguration.anthropicApiKey
            } : undefined,
          deepseekApiKey: item.llmConfiguration.deepseekApiKey !== undefined ? {
              set: item.llmConfiguration.deepseekApiKey
            } : undefined,
          kimiApiKey: item.llmConfiguration.kimiApiKey !== undefined ? {
              set: item.llmConfiguration.kimiApiKey
            } : undefined,
          qwenApiKey: item.llmConfiguration.qwenApiKey !== undefined ? {
              set: item.llmConfiguration.qwenApiKey
            } : undefined,
          xaiApiKey: item.llmConfiguration.xaiApiKey !== undefined ? {
              set: item.llmConfiguration.xaiApiKey
            } : undefined,
          geminiApiKey: item.llmConfiguration.geminiApiKey !== undefined ? {
              set: item.llmConfiguration.geminiApiKey
            } : undefined,
        },
        create: {
          defaultProvider: item.llmConfiguration.defaultProvider !== undefined ? item.llmConfiguration.defaultProvider : undefined,
          miniProvider: item.llmConfiguration.miniProvider !== undefined ? item.llmConfiguration.miniProvider : undefined,
          normalProvider: item.llmConfiguration.normalProvider !== undefined ? item.llmConfiguration.normalProvider : undefined,
          advancedProvider: item.llmConfiguration.advancedProvider !== undefined ? item.llmConfiguration.advancedProvider : undefined,
          miniModel: item.llmConfiguration.miniModel !== undefined ? item.llmConfiguration.miniModel : undefined,
          normalModel: item.llmConfiguration.normalModel !== undefined ? item.llmConfiguration.normalModel : undefined,
          advancedModel: item.llmConfiguration.advancedModel !== undefined ? item.llmConfiguration.advancedModel : undefined,
          openaiApiKey: item.llmConfiguration.openaiApiKey !== undefined ? item.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: item.llmConfiguration.anthropicApiKey !== undefined ? item.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: item.llmConfiguration.deepseekApiKey !== undefined ? item.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: item.llmConfiguration.kimiApiKey !== undefined ? item.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: item.llmConfiguration.qwenApiKey !== undefined ? item.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: item.llmConfiguration.xaiApiKey !== undefined ? item.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: item.llmConfiguration.geminiApiKey !== undefined ? item.llmConfiguration.geminiApiKey : undefined,
        },
      }
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
        role: item.role !== undefined ? item.role : undefined,
        bio: item.bio !== undefined ? item.bio : undefined,
        jobTitle: item.jobTitle !== undefined ? item.jobTitle : undefined,
        currentAccount: item.currentAccount !== undefined ? item.currentAccount : undefined,
        plan: item.plan !== undefined ? item.plan : undefined,
        openaiAPIKey: item.openaiAPIKey !== undefined ? item.openaiAPIKey : undefined,
        openaiModel: item.openaiModel !== undefined ? item.openaiModel : undefined,
    accounts: item.accounts ? 
      Array.isArray(item.accounts) && item.accounts.length > 0 &&  item.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          type: item.type !== undefined ? {
              equals: item.type 
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
    sessions: item.sessions ? 
      Array.isArray(item.sessions) && item.sessions.length > 0 &&  item.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.sessions.map((item: any) => ({
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
    authenticators: item.authenticators ? 
      Array.isArray(item.authenticators) && item.authenticators.length > 0 &&  item.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? 
      Array.isArray(item.alpacaAccounts) && item.alpacaAccounts.length > 0 &&  item.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          type: item.type !== undefined ? {
              equals: item.type 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
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
            alpacaAccountId: item.allocation.alpacaAccountId !== undefined ? item.allocation.alpacaAccountId : undefined,
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
      tradingPolicy: item.tradingPolicy ? 
        typeof item.tradingPolicy === 'object' && Object.keys(item.tradingPolicy).length === 1 && Object.keys(item.tradingPolicy)[0] === 'id'
    ? { connect: {
            id: item.tradingPolicy.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.tradingPolicy.id !== undefined ? item.tradingPolicy.id : undefined,
            alpacaAccountId: item.tradingPolicy.alpacaAccountId !== undefined ? item.tradingPolicy.alpacaAccountId : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? {
                equals: item.tradingPolicy.miniModelId 
               } : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? {
                equals: item.tradingPolicy.normalModelId 
               } : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? {
                equals: item.tradingPolicy.advancedModelId 
               } : undefined,
          },
          create: {
            version: item.tradingPolicy.version !== undefined ? item.tradingPolicy.version : undefined,
            lastModifiedBy: item.tradingPolicy.lastModifiedBy !== undefined ? item.tradingPolicy.lastModifiedBy : undefined,
            lastModifiedAt: item.tradingPolicy.lastModifiedAt !== undefined ? item.tradingPolicy.lastModifiedAt : undefined,
            autonomyMode: item.tradingPolicy.autonomyMode !== undefined ? item.tradingPolicy.autonomyMode : undefined,
            realtimeTradingEnabled: item.tradingPolicy.realtimeTradingEnabled !== undefined ? item.tradingPolicy.realtimeTradingEnabled : undefined,
            paperTradingOnly: item.tradingPolicy.paperTradingOnly !== undefined ? item.tradingPolicy.paperTradingOnly : undefined,
            killSwitchEnabled: item.tradingPolicy.killSwitchEnabled !== undefined ? item.tradingPolicy.killSwitchEnabled : undefined,
            autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? item.tradingPolicy.autonomyPrefs : undefined,
            equitiesEnabled: item.tradingPolicy.equitiesEnabled !== undefined ? item.tradingPolicy.equitiesEnabled : undefined,
            etfsEnabled: item.tradingPolicy.etfsEnabled !== undefined ? item.tradingPolicy.etfsEnabled : undefined,
            cryptoEnabled: item.tradingPolicy.cryptoEnabled !== undefined ? item.tradingPolicy.cryptoEnabled : undefined,
            optionsEnabled: item.tradingPolicy.optionsEnabled !== undefined ? item.tradingPolicy.optionsEnabled : undefined,
            futuresEnabled: item.tradingPolicy.futuresEnabled !== undefined ? item.tradingPolicy.futuresEnabled : undefined,
            forexEnabled: item.tradingPolicy.forexEnabled !== undefined ? item.tradingPolicy.forexEnabled : undefined,
            shortingEnabled: item.tradingPolicy.shortingEnabled !== undefined ? item.tradingPolicy.shortingEnabled : undefined,
            marginEnabled: item.tradingPolicy.marginEnabled !== undefined ? item.tradingPolicy.marginEnabled : undefined,
            fractionalSharesEnabled: item.tradingPolicy.fractionalSharesEnabled !== undefined ? item.tradingPolicy.fractionalSharesEnabled : undefined,
            assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? item.tradingPolicy.assetUniversePrefs : undefined,
            maxBuyingPowerUtilPct: item.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? item.tradingPolicy.maxBuyingPowerUtilPct : undefined,
            cashFloorPct: item.tradingPolicy.cashFloorPct !== undefined ? item.tradingPolicy.cashFloorPct : undefined,
            maxGrossExposurePct: item.tradingPolicy.maxGrossExposurePct !== undefined ? item.tradingPolicy.maxGrossExposurePct : undefined,
            maxNetExposurePct: item.tradingPolicy.maxNetExposurePct !== undefined ? item.tradingPolicy.maxNetExposurePct : undefined,
            maxLeverage: item.tradingPolicy.maxLeverage !== undefined ? item.tradingPolicy.maxLeverage : undefined,
            maxSymbolConcentrationPct: item.tradingPolicy.maxSymbolConcentrationPct !== undefined ? item.tradingPolicy.maxSymbolConcentrationPct : undefined,
            maxSectorConcentrationPct: item.tradingPolicy.maxSectorConcentrationPct !== undefined ? item.tradingPolicy.maxSectorConcentrationPct : undefined,
            maxOpenPositions: item.tradingPolicy.maxOpenPositions !== undefined ? item.tradingPolicy.maxOpenPositions : undefined,
            maxOpenOrders: item.tradingPolicy.maxOpenOrders !== undefined ? item.tradingPolicy.maxOpenOrders : undefined,
            perTradeEquityAllocationPct: item.tradingPolicy.perTradeEquityAllocationPct !== undefined ? item.tradingPolicy.perTradeEquityAllocationPct : undefined,
            perTradeCryptoAllocationPct: item.tradingPolicy.perTradeCryptoAllocationPct !== undefined ? item.tradingPolicy.perTradeCryptoAllocationPct : undefined,
            riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? item.tradingPolicy.riskBudgetPrefs : undefined,
            signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? item.tradingPolicy.signalConsumptionPrefs : undefined,
            executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? item.tradingPolicy.executionPrefs : undefined,
            positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? item.tradingPolicy.positionManagementPrefs : undefined,
            portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? item.tradingPolicy.portfolioConstructionPrefs : undefined,
            macroOverlayEnabled: item.tradingPolicy.macroOverlayEnabled !== undefined ? item.tradingPolicy.macroOverlayEnabled : undefined,
            sectorOverlayEnabled: item.tradingPolicy.sectorOverlayEnabled !== undefined ? item.tradingPolicy.sectorOverlayEnabled : undefined,
            volatilityOverlayEnabled: item.tradingPolicy.volatilityOverlayEnabled !== undefined ? item.tradingPolicy.volatilityOverlayEnabled : undefined,
            liquidityStressOverlayEnabled: item.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? item.tradingPolicy.liquidityStressOverlayEnabled : undefined,
            blackSwanProtectionEnabled: item.tradingPolicy.blackSwanProtectionEnabled !== undefined ? item.tradingPolicy.blackSwanProtectionEnabled : undefined,
            drawdownGuardianEnabled: item.tradingPolicy.drawdownGuardianEnabled !== undefined ? item.tradingPolicy.drawdownGuardianEnabled : undefined,
            correlationSpikeProtectionEnabled: item.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? item.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
            newsEventRiskOverlayEnabled: item.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? item.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
            exchangeHealthOverlayEnabled: item.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? item.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
            dataQualitySentinelEnabled: item.tradingPolicy.dataQualitySentinelEnabled !== undefined ? item.tradingPolicy.dataQualitySentinelEnabled : undefined,
            overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? item.tradingPolicy.overlayResponsePrefs : undefined,
            miniModelProvider: item.tradingPolicy.miniModelProvider !== undefined ? item.tradingPolicy.miniModelProvider : undefined,
            miniModelId: item.tradingPolicy.miniModelId !== undefined ? item.tradingPolicy.miniModelId : undefined,
            normalModelProvider: item.tradingPolicy.normalModelProvider !== undefined ? item.tradingPolicy.normalModelProvider : undefined,
            normalModelId: item.tradingPolicy.normalModelId !== undefined ? item.tradingPolicy.normalModelId : undefined,
            advancedModelProvider: item.tradingPolicy.advancedModelProvider !== undefined ? item.tradingPolicy.advancedModelProvider : undefined,
            advancedModelId: item.tradingPolicy.advancedModelId !== undefined ? item.tradingPolicy.advancedModelId : undefined,
            modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? item.tradingPolicy.modelPrefs : undefined,
            auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? item.tradingPolicy.auditNotificationPrefs : undefined,
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
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
            type: item.type !== undefined ? {
                equals: item.type 
               } : undefined,
            status: item.status !== undefined ? {
                equals: item.status 
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
        },
      }))
    } : undefined,
    linkedProviders: item.linkedProviders ? 
      Array.isArray(item.linkedProviders) && item.linkedProviders.length > 0 &&  item.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: item.accountLinkingRequests ? 
      Array.isArray(item.accountLinkingRequests) && item.accountLinkingRequests.length > 0 &&  item.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accountLinkingRequests.map((item: any) => ({
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
          status: item.status !== undefined ? {
              equals: item.status 
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
    reviewedWaitlistEntries: item.reviewedWaitlistEntries ? 
      Array.isArray(item.reviewedWaitlistEntries) && item.reviewedWaitlistEntries.length > 0 &&  item.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
          status: item.status !== undefined ? {
              equals: item.status 
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
    llmConfiguration: item.llmConfiguration ? 
      typeof item.llmConfiguration === 'object' && Object.keys(item.llmConfiguration).length === 1 && Object.keys(item.llmConfiguration)[0] === 'id'
    ? { connect: {
          id: item.llmConfiguration.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.llmConfiguration.id !== undefined ? item.llmConfiguration.id : undefined,
          userId: item.llmConfiguration.userId !== undefined ? item.llmConfiguration.userId : undefined,
        },
        create: {
          defaultProvider: item.llmConfiguration.defaultProvider !== undefined ? item.llmConfiguration.defaultProvider : undefined,
          miniProvider: item.llmConfiguration.miniProvider !== undefined ? item.llmConfiguration.miniProvider : undefined,
          normalProvider: item.llmConfiguration.normalProvider !== undefined ? item.llmConfiguration.normalProvider : undefined,
          advancedProvider: item.llmConfiguration.advancedProvider !== undefined ? item.llmConfiguration.advancedProvider : undefined,
          miniModel: item.llmConfiguration.miniModel !== undefined ? item.llmConfiguration.miniModel : undefined,
          normalModel: item.llmConfiguration.normalModel !== undefined ? item.llmConfiguration.normalModel : undefined,
          advancedModel: item.llmConfiguration.advancedModel !== undefined ? item.llmConfiguration.advancedModel : undefined,
          openaiApiKey: item.llmConfiguration.openaiApiKey !== undefined ? item.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: item.llmConfiguration.anthropicApiKey !== undefined ? item.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: item.llmConfiguration.deepseekApiKey !== undefined ? item.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: item.llmConfiguration.kimiApiKey !== undefined ? item.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: item.llmConfiguration.qwenApiKey !== undefined ? item.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: item.llmConfiguration.xaiApiKey !== undefined ? item.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: item.llmConfiguration.geminiApiKey !== undefined ? item.llmConfiguration.geminiApiKey : undefined,
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
          mutation: UPDATE_MANY_CUSTOMER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyCustomer) {
          return response.data.updateManyCustomer;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check for constraint violations FIRST - these are NEVER retryable
        const isConstraintViolation =
          error.message?.includes('violates check constraint') ||
          error.message?.includes('violates unique constraint') ||
          error.message?.includes('violates foreign key constraint') ||
          error.message?.includes('unique constraint') ||
          error.message?.includes('23514') ||
          error.message?.includes('23505') ||
          error.message?.includes('P2002') ||
          error.message?.includes('P2003');

        if (isConstraintViolation) {
          const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
          logger.error("Non-retryable constraint violation in updateManyCustomer", {
            operation: 'updateManyCustomer',
            model: 'Customer',
            error: String(error),
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
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
          logger.warn("Database connection error in updateManyCustomer, retrying...", {
            operation: 'updateManyCustomer',
            model: 'Customer',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database updateMany operation failed", {
          operation: 'updateManyCustomer',
          model: 'Customer',
          error: String(error),
          isRetryable: isConnectionError,
        });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single Customer record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Customer or null.
   */
  async delete(props: CustomerType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<CustomerType> {
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
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const DELETE_ONE_CUSTOMER = gql`
          mutation deleteOneCustomer($where: CustomerWhereUniqueInput!) {
            deleteOneCustomer(where: $where) {
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
          mutation: DELETE_ONE_CUSTOMER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneCustomer) {
          return response.data.deleteOneCustomer;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check for constraint violations FIRST - these are NEVER retryable
        // (e.g., foreign key constraints preventing deletion)
        const isConstraintViolation =
          error.message?.includes('violates check constraint') ||
          error.message?.includes('violates unique constraint') ||
          error.message?.includes('violates foreign key constraint') ||
          error.message?.includes('unique constraint') ||
          error.message?.includes('23514') ||
          error.message?.includes('23505') ||
          error.message?.includes('23503') ||
          error.message?.includes('P2002') ||
          error.message?.includes('P2003') ||
          error.message?.includes('P2014');

        if (isConstraintViolation) {
          const constraintMatch = error.message?.match(/constraint\s+"([^"]+)"/);
          logger.error("Non-retryable constraint violation in deleteOneCustomer", {
            operation: 'deleteOneCustomer',
            model: 'Customer',
            error: String(error),
            recordId: props.id,
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
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
          logger.warn("Database connection error in deleteOneCustomer, retrying...", {
            operation: 'deleteOneCustomer',
            model: 'Customer',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database delete operation failed", {
          operation: 'deleteOneCustomer',
          model: 'Customer',
          error: String(error),
          recordId: props.id,
          isRetryable: isConnectionError,
        });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single Customer record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved Customer or null.
   */
  async get(props: CustomerType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<CustomerType | null> {
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
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const GET_CUSTOMER = gql`
          query getCustomer($where: CustomerWhereUniqueInput!) {
            getCustomer(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? props.stripeCustomerId : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? props.stripeSubscriptionId : undefined,
  authUserId: props.authUserId !== undefined ? {
    equals: props.authUserId 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
    equals: props.stripePriceId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_CUSTOMER,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getCustomer ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Customer found') {
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
          logger.warn("Database connection error in getCustomer, retrying...", {
            operation: 'getCustomer',
            model: 'Customer',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database get operation failed", {
          operation: 'getCustomer',
          model: 'Customer',
          error: String(error),
          isRetryable: isConnectionError,
        });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all Customers records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Customer records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<CustomerType[] | null> {
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
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const GET_ALL_CUSTOMER = gql`
          query getAllCustomer {
            customers {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_CUSTOMER,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.customers ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Customer found') {
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
          logger.warn("Database connection error in getAllCustomer, retrying...", {
            operation: 'getAllCustomer',
            model: 'Customer',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database getAll operation failed", {
          operation: 'getAllCustomer',
          model: 'Customer',
          error: String(error),
          isRetryable: isConnectionError,
        });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple Customer records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found Customer records or null.
   */
  async findMany(props: CustomerType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<CustomerType[] | null> {
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
            : getApolloClient()
        ]);

        const { gql, ApolloError } = modules;

        const FIND_MANY_CUSTOMER = gql`
          query findManyCustomer($where: CustomerWhereInput!) {
            customers(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  authUserId: props.authUserId !== undefined ? {
    equals: props.authUserId 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? {
    equals: props.stripeCustomerId 
  } : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? {
    equals: props.stripeSubscriptionId 
  } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
    equals: props.stripePriceId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        // Validate that we have at least one filter criteria
        // GraphQL requires a non-empty where clause for findMany
        if (!filteredVariables || !filteredVariables.where || Object.keys(filteredVariables.where).length === 0) {
          throw new Error(`findManyCustomer requires at least one filter criterion. Received empty where clause.`);
        }

        const response = await client.query({
          query: FIND_MANY_CUSTOMER,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.customers) {
          return response.data.customers;
        } else {
          return [] as CustomerType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Customer found') {
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
          logger.warn("Database connection error in findManyCustomer, retrying...", {
            operation: 'findManyCustomer',
            model: 'Customer',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database findMany operation failed", {
          operation: 'findManyCustomer',
          model: 'Customer',
          error: String(error),
          isRetryable: isConnectionError,
        });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  }
};
