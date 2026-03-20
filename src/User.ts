
  
import { User as UserType } from './generated/typegraphql-prisma/models/User';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the User model.
   */

  const selectionSet = `
    
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
      alpacaAccount {
id
      }
      createdAt
      updatedAt
    }
    tradingPolicy {
      id
      alpacaAccountId
      alpacaAccount {
id
      }
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
      overlays {
        id
        tradingPolicyId
        tradingPolicy {
id
        }
        overlayType
        source
        reason
        severity
        version
        mutations
        status
        activatedAt
        expiresAt
        deactivatedAt
        deactivatedBy
        correlationId
        triggerEventId
        createdAt
        updatedAt
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
      suppressedUntil
      retryCount
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
  llmConfiguration {
    id
    userId
    defaultProvider
    miniProvider
    normalProvider
    advancedProvider
    miniModel
    normalModel
    advancedModel
    anthropicApiKey
    deepseekApiKey
    kimiApiKey
    qwenApiKey
    xaiApiKey
    geminiApiKey
    createdAt
    updatedAt
  }

  `;

  export const User = {

    /**
     * Create a new User record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created User or null.
     */

    /**
     * Create a new User record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created User or null.
     */
    async create(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<UserType> {
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

          const CREATE_ONE_USER = gql`
              mutation createOneUser($data: UserCreateInput!) {
                createOneUser(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                name: props.name !== undefined ? props.name : undefined,
  email: props.email !== undefined ? props.email : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentAccount: props.currentAccount !== undefined ? props.currentAccount : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? props.openaiAPIKey : undefined,
  openaiModel: props.openaiModel !== undefined ? props.openaiModel : undefined,
  customer: props.customer ? 
    typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && Object.keys(props.customer)[0] === 'id'
    ? { connect: {
        id: props.customer.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.customer.id !== undefined ? props.customer.id : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId 
           } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId 
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
    Array.isArray(props.accounts) && props.accounts.length > 0 &&  props.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.accounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.accounts.map((item: any) => ({
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
  sessions: props.sessions ? 
    Array.isArray(props.sessions) && props.sessions.length > 0 &&  props.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.sessions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.sessions.map((item: any) => ({
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
  authenticators: props.authenticators ? 
    Array.isArray(props.authenticators) && props.authenticators.length > 0 &&  props.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.authenticators.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.authenticators.map((item: any) => ({
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
  alpacaAccounts: props.alpacaAccounts ? 
    Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0 &&  props.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.alpacaAccounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
      overlays: item.tradingPolicy.overlays ? 
        Array.isArray(item.tradingPolicy.overlays) && item.tradingPolicy.overlays.length > 0 &&  item.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.tradingPolicy.overlays.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradingPolicyId: item.tradingPolicyId !== undefined ? {
                equals: item.tradingPolicyId 
               } : undefined,
            correlationId: item.correlationId !== undefined ? {
                equals: item.correlationId 
               } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                equals: item.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.overlayType !== undefined ? item.overlayType : undefined,
            source: item.source !== undefined ? item.source : undefined,
            reason: item.reason !== undefined ? item.reason : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            version: item.version !== undefined ? item.version : undefined,
            mutations: item.mutations !== undefined ? item.mutations : undefined,
            status: item.status !== undefined ? item.status : undefined,
            activatedAt: item.activatedAt !== undefined ? item.activatedAt : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? item.deactivatedAt : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? item.deactivatedBy : undefined,
            correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
            triggerEventId: item.triggerEventId !== undefined ? item.triggerEventId : undefined,
          },
        }))
      } : undefined,
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
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
      },
    }))
  } : undefined,
  linkedProviders: props.linkedProviders ? 
    Array.isArray(props.linkedProviders) && props.linkedProviders.length > 0 &&  props.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.linkedProviders.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.linkedProviders.map((item: any) => ({
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
  accountLinkingRequests: props.accountLinkingRequests ? 
    Array.isArray(props.accountLinkingRequests) && props.accountLinkingRequests.length > 0 &&  props.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.accountLinkingRequests.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.accountLinkingRequests.map((item: any) => ({
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
  reviewedWaitlistEntries: props.reviewedWaitlistEntries ? 
    Array.isArray(props.reviewedWaitlistEntries) && props.reviewedWaitlistEntries.length > 0 &&  props.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.reviewedWaitlistEntries.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.reviewedWaitlistEntries.map((item: any) => ({
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
  llmConfiguration: props.llmConfiguration ? 
    typeof props.llmConfiguration === 'object' && Object.keys(props.llmConfiguration).length === 1 && Object.keys(props.llmConfiguration)[0] === 'id'
    ? { connect: {
        id: props.llmConfiguration.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.llmConfiguration.id !== undefined ? props.llmConfiguration.id : undefined,
        userId: props.llmConfiguration.userId !== undefined ? props.llmConfiguration.userId : undefined,
      },
      create: {
        defaultProvider: props.llmConfiguration.defaultProvider !== undefined ? props.llmConfiguration.defaultProvider : undefined,
        miniProvider: props.llmConfiguration.miniProvider !== undefined ? props.llmConfiguration.miniProvider : undefined,
        normalProvider: props.llmConfiguration.normalProvider !== undefined ? props.llmConfiguration.normalProvider : undefined,
        advancedProvider: props.llmConfiguration.advancedProvider !== undefined ? props.llmConfiguration.advancedProvider : undefined,
        miniModel: props.llmConfiguration.miniModel !== undefined ? props.llmConfiguration.miniModel : undefined,
        normalModel: props.llmConfiguration.normalModel !== undefined ? props.llmConfiguration.normalModel : undefined,
        advancedModel: props.llmConfiguration.advancedModel !== undefined ? props.llmConfiguration.advancedModel : undefined,
        openaiApiKey: props.llmConfiguration.openaiApiKey !== undefined ? props.llmConfiguration.openaiApiKey : undefined,
        anthropicApiKey: props.llmConfiguration.anthropicApiKey !== undefined ? props.llmConfiguration.anthropicApiKey : undefined,
        deepseekApiKey: props.llmConfiguration.deepseekApiKey !== undefined ? props.llmConfiguration.deepseekApiKey : undefined,
        kimiApiKey: props.llmConfiguration.kimiApiKey !== undefined ? props.llmConfiguration.kimiApiKey : undefined,
        qwenApiKey: props.llmConfiguration.qwenApiKey !== undefined ? props.llmConfiguration.qwenApiKey : undefined,
        xaiApiKey: props.llmConfiguration.xaiApiKey !== undefined ? props.llmConfiguration.xaiApiKey : undefined,
        geminiApiKey: props.llmConfiguration.geminiApiKey !== undefined ? props.llmConfiguration.geminiApiKey : undefined,
      },
    }
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_USER,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneUser) {
            return response.data.createOneUser;
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
            logger.error("Non-retryable constraint violation in createOneUser", {
              operation: 'createOneUser',
              model: 'User',
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
            logger.warn("Database connection error in createOneUser, retrying...", {
              operation: 'createOneUser',
              model: 'User',
              attempt: retryCount,
              maxRetries: MAX_RETRIES,
            });
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log structured error details and rethrow
          logger.error("Database create operation failed", {
            operation: 'createOneUser',
            model: 'User',
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
   * Create multiple User records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of User objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: UserType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_USER = gql`
          mutation createManyUser($data: [UserCreateManyInput!]!) {
            createManyUser(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      name: prop.name !== undefined ? prop.name : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  emailVerified: prop.emailVerified !== undefined ? prop.emailVerified : undefined,
  image: prop.image !== undefined ? prop.image : undefined,
  deletedAt: prop.deletedAt !== undefined ? prop.deletedAt : undefined,
  role: prop.role !== undefined ? prop.role : undefined,
  bio: prop.bio !== undefined ? prop.bio : undefined,
  jobTitle: prop.jobTitle !== undefined ? prop.jobTitle : undefined,
  currentAccount: prop.currentAccount !== undefined ? prop.currentAccount : undefined,
  customerId: prop.customerId !== undefined ? prop.customerId : undefined,
  plan: prop.plan !== undefined ? prop.plan : undefined,
  openaiAPIKey: prop.openaiAPIKey !== undefined ? prop.openaiAPIKey : undefined,
  openaiModel: prop.openaiModel !== undefined ? prop.openaiModel : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_USER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyUser) {
          return response.data.createManyUser;
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
          logger.error("Non-retryable constraint violation in createManyUser", {
            operation: 'createManyUser',
            model: 'User',
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
          logger.warn("Database connection error in createManyUser, retrying...", {
            operation: 'createManyUser',
            model: 'User',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database createMany operation failed", {
          operation: 'createManyUser',
          model: 'User',
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
   * Update a single User record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated User or null.
   */
  async update(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<UserType> {
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

        const UPDATE_ONE_USER = gql`
          mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
            updateOneUser(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  emailVerified: props.emailVerified !== undefined ? {
            set: props.emailVerified 
           } : undefined,
  image: props.image !== undefined ? {
            set: props.image 
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
  role: props.role !== undefined ? {
            set: props.role 
           } : undefined,
  bio: props.bio !== undefined ? {
            set: props.bio 
           } : undefined,
  jobTitle: props.jobTitle !== undefined ? {
            set: props.jobTitle 
           } : undefined,
  currentAccount: props.currentAccount !== undefined ? {
            set: props.currentAccount 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? {
            set: props.openaiAPIKey 
           } : undefined,
  openaiModel: props.openaiModel !== undefined ? {
            set: props.openaiModel 
           } : undefined,
  customer: props.customer ? 
  typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && (Object.keys(props.customer)[0] === 'id' || Object.keys(props.customer)[0] === 'symbol')
? {
  connect: {
    id: props.customer.id
  }
} : { upsert: {
      where: {
        id: props.customer.id !== undefined ? {
            equals: props.customer.id
          } : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId
          } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name
          } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            equals: props.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            equals: props.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId
          } : undefined,
      },
      update: {
        authUserId: props.customer.authUserId !== undefined ? {
            set: props.customer.authUserId
          } : undefined,
        name: props.customer.name !== undefined ? {
            set: props.customer.name
          } : undefined,
        plan: props.customer.plan !== undefined ? {
            set: props.customer.plan
          } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            set: props.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            set: props.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            set: props.customer.stripePriceId
          } : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? {
            set: props.customer.stripeCurrentPeriodEnd
          } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
  Array.isArray(props.accounts) && props.accounts.length > 0 && props.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.accounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.accounts.map((item: any) => ({
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
  sessions: props.sessions ? 
  Array.isArray(props.sessions) && props.sessions.length > 0 && props.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.sessions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.sessions.map((item: any) => ({
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
  authenticators: props.authenticators ? 
  Array.isArray(props.authenticators) && props.authenticators.length > 0 && props.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.authenticators.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.authenticators.map((item: any) => ({
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
  alpacaAccounts: props.alpacaAccounts ? 
  Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0 && props.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.alpacaAccounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.alpacaAccounts.map((item: any) => ({
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
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        APIKey: item.APIKey !== undefined ? {
            set: item.APIKey
          } : undefined,
        APISecret: item.APISecret !== undefined ? {
            set: item.APISecret
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
          autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? {
              set: item.tradingPolicy.autonomyPrefs
            } : undefined,
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
          assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? {
              set: item.tradingPolicy.assetUniversePrefs
            } : undefined,
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
          riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? {
              set: item.tradingPolicy.riskBudgetPrefs
            } : undefined,
          signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? {
              set: item.tradingPolicy.signalConsumptionPrefs
            } : undefined,
          executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? {
              set: item.tradingPolicy.executionPrefs
            } : undefined,
          positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? {
              set: item.tradingPolicy.positionManagementPrefs
            } : undefined,
          portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? {
              set: item.tradingPolicy.portfolioConstructionPrefs
            } : undefined,
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
          overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? {
              set: item.tradingPolicy.overlayResponsePrefs
            } : undefined,
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
          modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? {
              set: item.tradingPolicy.modelPrefs
            } : undefined,
          auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? {
              set: item.tradingPolicy.auditNotificationPrefs
            } : undefined,
      overlays: item.tradingPolicy.overlays ? 
      Array.isArray(item.tradingPolicy.overlays) && item.tradingPolicy.overlays.length > 0 && item.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.tradingPolicy.overlays.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.tradingPolicy.overlays.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradingPolicyId: item.tradingPolicyId !== undefined ? {
                equals: item.tradingPolicyId
              } : undefined,
            correlationId: item.correlationId !== undefined ? {
                equals: item.correlationId
              } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                equals: item.triggerEventId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            overlayType: item.overlayType !== undefined ? {
                set: item.overlayType
              } : undefined,
            source: item.source !== undefined ? {
                set: item.source
              } : undefined,
            reason: item.reason !== undefined ? {
                set: item.reason
              } : undefined,
            severity: item.severity !== undefined ? {
                set: item.severity
              } : undefined,
            version: item.version !== undefined ? {
                set: item.version
              } : undefined,
            mutations: item.mutations !== undefined ? {
                set: item.mutations
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            activatedAt: item.activatedAt !== undefined ? {
                set: item.activatedAt
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? {
                set: item.deactivatedAt
              } : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? {
                set: item.deactivatedBy
              } : undefined,
            correlationId: item.correlationId !== undefined ? {
                set: item.correlationId
              } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                set: item.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.overlayType !== undefined ? item.overlayType : undefined,
            source: item.source !== undefined ? item.source : undefined,
            reason: item.reason !== undefined ? item.reason : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            version: item.version !== undefined ? item.version : undefined,
            mutations: item.mutations !== undefined ? item.mutations : undefined,
            status: item.status !== undefined ? item.status : undefined,
            activatedAt: item.activatedAt !== undefined ? item.activatedAt : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? item.deactivatedAt : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? item.deactivatedBy : undefined,
            correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
            triggerEventId: item.triggerEventId !== undefined ? item.triggerEventId : undefined,
          },
        }))
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
      overlays: item.tradingPolicy.overlays ? 
        Array.isArray(item.tradingPolicy.overlays) && item.tradingPolicy.overlays.length > 0 &&  item.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.tradingPolicy.overlays.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradingPolicyId: item.tradingPolicyId !== undefined ? {
                equals: item.tradingPolicyId 
               } : undefined,
            correlationId: item.correlationId !== undefined ? {
                equals: item.correlationId 
               } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                equals: item.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.overlayType !== undefined ? item.overlayType : undefined,
            source: item.source !== undefined ? item.source : undefined,
            reason: item.reason !== undefined ? item.reason : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            version: item.version !== undefined ? item.version : undefined,
            mutations: item.mutations !== undefined ? item.mutations : undefined,
            status: item.status !== undefined ? item.status : undefined,
            activatedAt: item.activatedAt !== undefined ? item.activatedAt : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? item.deactivatedAt : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? item.deactivatedBy : undefined,
            correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
            triggerEventId: item.triggerEventId !== undefined ? item.triggerEventId : undefined,
          },
        }))
      } : undefined,
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
      overlays: item.tradingPolicy.overlays ? 
        Array.isArray(item.tradingPolicy.overlays) && item.tradingPolicy.overlays.length > 0 &&  item.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.tradingPolicy.overlays.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradingPolicyId: item.tradingPolicyId !== undefined ? {
                equals: item.tradingPolicyId 
               } : undefined,
            correlationId: item.correlationId !== undefined ? {
                equals: item.correlationId 
               } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                equals: item.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.overlayType !== undefined ? item.overlayType : undefined,
            source: item.source !== undefined ? item.source : undefined,
            reason: item.reason !== undefined ? item.reason : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            version: item.version !== undefined ? item.version : undefined,
            mutations: item.mutations !== undefined ? item.mutations : undefined,
            status: item.status !== undefined ? item.status : undefined,
            activatedAt: item.activatedAt !== undefined ? item.activatedAt : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? item.deactivatedAt : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? item.deactivatedBy : undefined,
            correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
            triggerEventId: item.triggerEventId !== undefined ? item.triggerEventId : undefined,
          },
        }))
      } : undefined,
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
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
      },
    }))
  } : undefined,
  linkedProviders: props.linkedProviders ? 
  Array.isArray(props.linkedProviders) && props.linkedProviders.length > 0 && props.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.linkedProviders.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.linkedProviders.map((item: any) => ({
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
  accountLinkingRequests: props.accountLinkingRequests ? 
  Array.isArray(props.accountLinkingRequests) && props.accountLinkingRequests.length > 0 && props.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.accountLinkingRequests.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.accountLinkingRequests.map((item: any) => ({
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
  reviewedWaitlistEntries: props.reviewedWaitlistEntries ? 
  Array.isArray(props.reviewedWaitlistEntries) && props.reviewedWaitlistEntries.length > 0 && props.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.reviewedWaitlistEntries.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.reviewedWaitlistEntries.map((item: any) => ({
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
  llmConfiguration: props.llmConfiguration ? 
  typeof props.llmConfiguration === 'object' && Object.keys(props.llmConfiguration).length === 1 && (Object.keys(props.llmConfiguration)[0] === 'id' || Object.keys(props.llmConfiguration)[0] === 'symbol')
? {
  connect: {
    id: props.llmConfiguration.id
  }
} : { upsert: {
      where: {
        id: props.llmConfiguration.id !== undefined ? {
            equals: props.llmConfiguration.id
          } : undefined,
        userId: props.llmConfiguration.userId !== undefined ? {
            equals: props.llmConfiguration.userId
          } : undefined,
      },
      update: {
        id: props.llmConfiguration.id !== undefined ? {
            set: props.llmConfiguration.id
          } : undefined,
        defaultProvider: props.llmConfiguration.defaultProvider !== undefined ? {
            set: props.llmConfiguration.defaultProvider
          } : undefined,
        miniProvider: props.llmConfiguration.miniProvider !== undefined ? {
            set: props.llmConfiguration.miniProvider
          } : undefined,
        normalProvider: props.llmConfiguration.normalProvider !== undefined ? {
            set: props.llmConfiguration.normalProvider
          } : undefined,
        advancedProvider: props.llmConfiguration.advancedProvider !== undefined ? {
            set: props.llmConfiguration.advancedProvider
          } : undefined,
        miniModel: props.llmConfiguration.miniModel !== undefined ? {
            set: props.llmConfiguration.miniModel
          } : undefined,
        normalModel: props.llmConfiguration.normalModel !== undefined ? {
            set: props.llmConfiguration.normalModel
          } : undefined,
        advancedModel: props.llmConfiguration.advancedModel !== undefined ? {
            set: props.llmConfiguration.advancedModel
          } : undefined,
        openaiApiKey: props.llmConfiguration.openaiApiKey !== undefined ? {
            set: props.llmConfiguration.openaiApiKey
          } : undefined,
        anthropicApiKey: props.llmConfiguration.anthropicApiKey !== undefined ? {
            set: props.llmConfiguration.anthropicApiKey
          } : undefined,
        deepseekApiKey: props.llmConfiguration.deepseekApiKey !== undefined ? {
            set: props.llmConfiguration.deepseekApiKey
          } : undefined,
        kimiApiKey: props.llmConfiguration.kimiApiKey !== undefined ? {
            set: props.llmConfiguration.kimiApiKey
          } : undefined,
        qwenApiKey: props.llmConfiguration.qwenApiKey !== undefined ? {
            set: props.llmConfiguration.qwenApiKey
          } : undefined,
        xaiApiKey: props.llmConfiguration.xaiApiKey !== undefined ? {
            set: props.llmConfiguration.xaiApiKey
          } : undefined,
        geminiApiKey: props.llmConfiguration.geminiApiKey !== undefined ? {
            set: props.llmConfiguration.geminiApiKey
          } : undefined,
      },
      create: {
        defaultProvider: props.llmConfiguration.defaultProvider !== undefined ? props.llmConfiguration.defaultProvider : undefined,
        miniProvider: props.llmConfiguration.miniProvider !== undefined ? props.llmConfiguration.miniProvider : undefined,
        normalProvider: props.llmConfiguration.normalProvider !== undefined ? props.llmConfiguration.normalProvider : undefined,
        advancedProvider: props.llmConfiguration.advancedProvider !== undefined ? props.llmConfiguration.advancedProvider : undefined,
        miniModel: props.llmConfiguration.miniModel !== undefined ? props.llmConfiguration.miniModel : undefined,
        normalModel: props.llmConfiguration.normalModel !== undefined ? props.llmConfiguration.normalModel : undefined,
        advancedModel: props.llmConfiguration.advancedModel !== undefined ? props.llmConfiguration.advancedModel : undefined,
        openaiApiKey: props.llmConfiguration.openaiApiKey !== undefined ? props.llmConfiguration.openaiApiKey : undefined,
        anthropicApiKey: props.llmConfiguration.anthropicApiKey !== undefined ? props.llmConfiguration.anthropicApiKey : undefined,
        deepseekApiKey: props.llmConfiguration.deepseekApiKey !== undefined ? props.llmConfiguration.deepseekApiKey : undefined,
        kimiApiKey: props.llmConfiguration.kimiApiKey !== undefined ? props.llmConfiguration.kimiApiKey : undefined,
        qwenApiKey: props.llmConfiguration.qwenApiKey !== undefined ? props.llmConfiguration.qwenApiKey : undefined,
        xaiApiKey: props.llmConfiguration.xaiApiKey !== undefined ? props.llmConfiguration.xaiApiKey : undefined,
        geminiApiKey: props.llmConfiguration.geminiApiKey !== undefined ? props.llmConfiguration.geminiApiKey : undefined,
      },
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_USER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneUser) {
          return response.data.updateOneUser;
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
          logger.error("Non-retryable constraint violation in updateOneUser", {
            operation: 'updateOneUser',
            model: 'User',
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
          logger.warn("Database connection error in updateOneUser, retrying...", {
            operation: 'updateOneUser',
            model: 'User',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database update operation failed", {
          operation: 'updateOneUser',
          model: 'User',
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
   * Upsert a single User record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated User or null.
   */
  async upsert(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<UserType> {
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

        const UPSERT_ONE_USER = gql`
          mutation upsertOneUser($where: UserWhereUniqueInput!, $create: UserCreateInput!, $update: UserUpdateInput!) {
            upsertOneUser(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
      },
          create: {
        name: props.name !== undefined ? props.name : undefined,
  email: props.email !== undefined ? props.email : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentAccount: props.currentAccount !== undefined ? props.currentAccount : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? props.openaiAPIKey : undefined,
  openaiModel: props.openaiModel !== undefined ? props.openaiModel : undefined,
  customer: props.customer ? 
    typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && Object.keys(props.customer)[0] === 'id'
    ? { connect: {
        id: props.customer.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.customer.id !== undefined ? props.customer.id : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId 
           } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId 
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
    Array.isArray(props.accounts) && props.accounts.length > 0 &&  props.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.accounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.accounts.map((item: any) => ({
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
  sessions: props.sessions ? 
    Array.isArray(props.sessions) && props.sessions.length > 0 &&  props.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.sessions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.sessions.map((item: any) => ({
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
  authenticators: props.authenticators ? 
    Array.isArray(props.authenticators) && props.authenticators.length > 0 &&  props.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.authenticators.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.authenticators.map((item: any) => ({
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
  alpacaAccounts: props.alpacaAccounts ? 
    Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0 &&  props.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.alpacaAccounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
      overlays: item.tradingPolicy.overlays ? 
        Array.isArray(item.tradingPolicy.overlays) && item.tradingPolicy.overlays.length > 0 &&  item.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.tradingPolicy.overlays.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradingPolicyId: item.tradingPolicyId !== undefined ? {
                equals: item.tradingPolicyId 
               } : undefined,
            correlationId: item.correlationId !== undefined ? {
                equals: item.correlationId 
               } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                equals: item.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.overlayType !== undefined ? item.overlayType : undefined,
            source: item.source !== undefined ? item.source : undefined,
            reason: item.reason !== undefined ? item.reason : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            version: item.version !== undefined ? item.version : undefined,
            mutations: item.mutations !== undefined ? item.mutations : undefined,
            status: item.status !== undefined ? item.status : undefined,
            activatedAt: item.activatedAt !== undefined ? item.activatedAt : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? item.deactivatedAt : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? item.deactivatedBy : undefined,
            correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
            triggerEventId: item.triggerEventId !== undefined ? item.triggerEventId : undefined,
          },
        }))
      } : undefined,
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
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
      },
    }))
  } : undefined,
  linkedProviders: props.linkedProviders ? 
    Array.isArray(props.linkedProviders) && props.linkedProviders.length > 0 &&  props.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.linkedProviders.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.linkedProviders.map((item: any) => ({
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
  accountLinkingRequests: props.accountLinkingRequests ? 
    Array.isArray(props.accountLinkingRequests) && props.accountLinkingRequests.length > 0 &&  props.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.accountLinkingRequests.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.accountLinkingRequests.map((item: any) => ({
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
  reviewedWaitlistEntries: props.reviewedWaitlistEntries ? 
    Array.isArray(props.reviewedWaitlistEntries) && props.reviewedWaitlistEntries.length > 0 &&  props.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.reviewedWaitlistEntries.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.reviewedWaitlistEntries.map((item: any) => ({
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
  llmConfiguration: props.llmConfiguration ? 
    typeof props.llmConfiguration === 'object' && Object.keys(props.llmConfiguration).length === 1 && Object.keys(props.llmConfiguration)[0] === 'id'
    ? { connect: {
        id: props.llmConfiguration.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.llmConfiguration.id !== undefined ? props.llmConfiguration.id : undefined,
        userId: props.llmConfiguration.userId !== undefined ? props.llmConfiguration.userId : undefined,
      },
      create: {
        defaultProvider: props.llmConfiguration.defaultProvider !== undefined ? props.llmConfiguration.defaultProvider : undefined,
        miniProvider: props.llmConfiguration.miniProvider !== undefined ? props.llmConfiguration.miniProvider : undefined,
        normalProvider: props.llmConfiguration.normalProvider !== undefined ? props.llmConfiguration.normalProvider : undefined,
        advancedProvider: props.llmConfiguration.advancedProvider !== undefined ? props.llmConfiguration.advancedProvider : undefined,
        miniModel: props.llmConfiguration.miniModel !== undefined ? props.llmConfiguration.miniModel : undefined,
        normalModel: props.llmConfiguration.normalModel !== undefined ? props.llmConfiguration.normalModel : undefined,
        advancedModel: props.llmConfiguration.advancedModel !== undefined ? props.llmConfiguration.advancedModel : undefined,
        openaiApiKey: props.llmConfiguration.openaiApiKey !== undefined ? props.llmConfiguration.openaiApiKey : undefined,
        anthropicApiKey: props.llmConfiguration.anthropicApiKey !== undefined ? props.llmConfiguration.anthropicApiKey : undefined,
        deepseekApiKey: props.llmConfiguration.deepseekApiKey !== undefined ? props.llmConfiguration.deepseekApiKey : undefined,
        kimiApiKey: props.llmConfiguration.kimiApiKey !== undefined ? props.llmConfiguration.kimiApiKey : undefined,
        qwenApiKey: props.llmConfiguration.qwenApiKey !== undefined ? props.llmConfiguration.qwenApiKey : undefined,
        xaiApiKey: props.llmConfiguration.xaiApiKey !== undefined ? props.llmConfiguration.xaiApiKey : undefined,
        geminiApiKey: props.llmConfiguration.geminiApiKey !== undefined ? props.llmConfiguration.geminiApiKey : undefined,
      },
    }
  } : undefined,
      },
          update: {
      name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  emailVerified: props.emailVerified !== undefined ? {
            set: props.emailVerified 
           } : undefined,
  image: props.image !== undefined ? {
            set: props.image 
           } : undefined,
  deletedAt: props.deletedAt !== undefined ? {
            set: props.deletedAt 
           } : undefined,
  role: props.role !== undefined ? {
            set: props.role 
           } : undefined,
  bio: props.bio !== undefined ? {
            set: props.bio 
           } : undefined,
  jobTitle: props.jobTitle !== undefined ? {
            set: props.jobTitle 
           } : undefined,
  currentAccount: props.currentAccount !== undefined ? {
            set: props.currentAccount 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? {
            set: props.openaiAPIKey 
           } : undefined,
  openaiModel: props.openaiModel !== undefined ? {
            set: props.openaiModel 
           } : undefined,
  customer: props.customer ? 
  typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && (Object.keys(props.customer)[0] === 'id' || Object.keys(props.customer)[0] === 'symbol')
? {
  connect: {
    id: props.customer.id
  }
} : { upsert: {
      where: {
        id: props.customer.id !== undefined ? {
            equals: props.customer.id
          } : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId
          } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name
          } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            equals: props.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            equals: props.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId
          } : undefined,
      },
      update: {
        authUserId: props.customer.authUserId !== undefined ? {
            set: props.customer.authUserId
          } : undefined,
        name: props.customer.name !== undefined ? {
            set: props.customer.name
          } : undefined,
        plan: props.customer.plan !== undefined ? {
            set: props.customer.plan
          } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            set: props.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            set: props.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            set: props.customer.stripePriceId
          } : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? {
            set: props.customer.stripeCurrentPeriodEnd
          } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
  Array.isArray(props.accounts) && props.accounts.length > 0 && props.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.accounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.accounts.map((item: any) => ({
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
  sessions: props.sessions ? 
  Array.isArray(props.sessions) && props.sessions.length > 0 && props.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.sessions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.sessions.map((item: any) => ({
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
  authenticators: props.authenticators ? 
  Array.isArray(props.authenticators) && props.authenticators.length > 0 && props.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.authenticators.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.authenticators.map((item: any) => ({
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
  alpacaAccounts: props.alpacaAccounts ? 
  Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0 && props.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.alpacaAccounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.alpacaAccounts.map((item: any) => ({
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
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        APIKey: item.APIKey !== undefined ? {
            set: item.APIKey
          } : undefined,
        APISecret: item.APISecret !== undefined ? {
            set: item.APISecret
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
          autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? {
              set: item.tradingPolicy.autonomyPrefs
            } : undefined,
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
          assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? {
              set: item.tradingPolicy.assetUniversePrefs
            } : undefined,
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
          riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? {
              set: item.tradingPolicy.riskBudgetPrefs
            } : undefined,
          signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? {
              set: item.tradingPolicy.signalConsumptionPrefs
            } : undefined,
          executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? {
              set: item.tradingPolicy.executionPrefs
            } : undefined,
          positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? {
              set: item.tradingPolicy.positionManagementPrefs
            } : undefined,
          portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? {
              set: item.tradingPolicy.portfolioConstructionPrefs
            } : undefined,
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
          overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? {
              set: item.tradingPolicy.overlayResponsePrefs
            } : undefined,
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
          modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? {
              set: item.tradingPolicy.modelPrefs
            } : undefined,
          auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? {
              set: item.tradingPolicy.auditNotificationPrefs
            } : undefined,
      overlays: item.tradingPolicy.overlays ? 
      Array.isArray(item.tradingPolicy.overlays) && item.tradingPolicy.overlays.length > 0 && item.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.tradingPolicy.overlays.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.tradingPolicy.overlays.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradingPolicyId: item.tradingPolicyId !== undefined ? {
                equals: item.tradingPolicyId
              } : undefined,
            correlationId: item.correlationId !== undefined ? {
                equals: item.correlationId
              } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                equals: item.triggerEventId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            overlayType: item.overlayType !== undefined ? {
                set: item.overlayType
              } : undefined,
            source: item.source !== undefined ? {
                set: item.source
              } : undefined,
            reason: item.reason !== undefined ? {
                set: item.reason
              } : undefined,
            severity: item.severity !== undefined ? {
                set: item.severity
              } : undefined,
            version: item.version !== undefined ? {
                set: item.version
              } : undefined,
            mutations: item.mutations !== undefined ? {
                set: item.mutations
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            activatedAt: item.activatedAt !== undefined ? {
                set: item.activatedAt
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? {
                set: item.deactivatedAt
              } : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? {
                set: item.deactivatedBy
              } : undefined,
            correlationId: item.correlationId !== undefined ? {
                set: item.correlationId
              } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                set: item.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.overlayType !== undefined ? item.overlayType : undefined,
            source: item.source !== undefined ? item.source : undefined,
            reason: item.reason !== undefined ? item.reason : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            version: item.version !== undefined ? item.version : undefined,
            mutations: item.mutations !== undefined ? item.mutations : undefined,
            status: item.status !== undefined ? item.status : undefined,
            activatedAt: item.activatedAt !== undefined ? item.activatedAt : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? item.deactivatedAt : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? item.deactivatedBy : undefined,
            correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
            triggerEventId: item.triggerEventId !== undefined ? item.triggerEventId : undefined,
          },
        }))
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
      overlays: item.tradingPolicy.overlays ? 
        Array.isArray(item.tradingPolicy.overlays) && item.tradingPolicy.overlays.length > 0 &&  item.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.tradingPolicy.overlays.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradingPolicyId: item.tradingPolicyId !== undefined ? {
                equals: item.tradingPolicyId 
               } : undefined,
            correlationId: item.correlationId !== undefined ? {
                equals: item.correlationId 
               } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                equals: item.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.overlayType !== undefined ? item.overlayType : undefined,
            source: item.source !== undefined ? item.source : undefined,
            reason: item.reason !== undefined ? item.reason : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            version: item.version !== undefined ? item.version : undefined,
            mutations: item.mutations !== undefined ? item.mutations : undefined,
            status: item.status !== undefined ? item.status : undefined,
            activatedAt: item.activatedAt !== undefined ? item.activatedAt : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? item.deactivatedAt : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? item.deactivatedBy : undefined,
            correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
            triggerEventId: item.triggerEventId !== undefined ? item.triggerEventId : undefined,
          },
        }))
      } : undefined,
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
      overlays: item.tradingPolicy.overlays ? 
        Array.isArray(item.tradingPolicy.overlays) && item.tradingPolicy.overlays.length > 0 &&  item.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.tradingPolicy.overlays.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradingPolicyId: item.tradingPolicyId !== undefined ? {
                equals: item.tradingPolicyId 
               } : undefined,
            correlationId: item.correlationId !== undefined ? {
                equals: item.correlationId 
               } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                equals: item.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.overlayType !== undefined ? item.overlayType : undefined,
            source: item.source !== undefined ? item.source : undefined,
            reason: item.reason !== undefined ? item.reason : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            version: item.version !== undefined ? item.version : undefined,
            mutations: item.mutations !== undefined ? item.mutations : undefined,
            status: item.status !== undefined ? item.status : undefined,
            activatedAt: item.activatedAt !== undefined ? item.activatedAt : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? item.deactivatedAt : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? item.deactivatedBy : undefined,
            correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
            triggerEventId: item.triggerEventId !== undefined ? item.triggerEventId : undefined,
          },
        }))
      } : undefined,
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
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
      },
    }))
  } : undefined,
  linkedProviders: props.linkedProviders ? 
  Array.isArray(props.linkedProviders) && props.linkedProviders.length > 0 && props.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.linkedProviders.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.linkedProviders.map((item: any) => ({
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
  accountLinkingRequests: props.accountLinkingRequests ? 
  Array.isArray(props.accountLinkingRequests) && props.accountLinkingRequests.length > 0 && props.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.accountLinkingRequests.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.accountLinkingRequests.map((item: any) => ({
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
  reviewedWaitlistEntries: props.reviewedWaitlistEntries ? 
  Array.isArray(props.reviewedWaitlistEntries) && props.reviewedWaitlistEntries.length > 0 && props.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.reviewedWaitlistEntries.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.reviewedWaitlistEntries.map((item: any) => ({
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
  llmConfiguration: props.llmConfiguration ? 
  typeof props.llmConfiguration === 'object' && Object.keys(props.llmConfiguration).length === 1 && (Object.keys(props.llmConfiguration)[0] === 'id' || Object.keys(props.llmConfiguration)[0] === 'symbol')
? {
  connect: {
    id: props.llmConfiguration.id
  }
} : { upsert: {
      where: {
        id: props.llmConfiguration.id !== undefined ? {
            equals: props.llmConfiguration.id
          } : undefined,
        userId: props.llmConfiguration.userId !== undefined ? {
            equals: props.llmConfiguration.userId
          } : undefined,
      },
      update: {
        id: props.llmConfiguration.id !== undefined ? {
            set: props.llmConfiguration.id
          } : undefined,
        defaultProvider: props.llmConfiguration.defaultProvider !== undefined ? {
            set: props.llmConfiguration.defaultProvider
          } : undefined,
        miniProvider: props.llmConfiguration.miniProvider !== undefined ? {
            set: props.llmConfiguration.miniProvider
          } : undefined,
        normalProvider: props.llmConfiguration.normalProvider !== undefined ? {
            set: props.llmConfiguration.normalProvider
          } : undefined,
        advancedProvider: props.llmConfiguration.advancedProvider !== undefined ? {
            set: props.llmConfiguration.advancedProvider
          } : undefined,
        miniModel: props.llmConfiguration.miniModel !== undefined ? {
            set: props.llmConfiguration.miniModel
          } : undefined,
        normalModel: props.llmConfiguration.normalModel !== undefined ? {
            set: props.llmConfiguration.normalModel
          } : undefined,
        advancedModel: props.llmConfiguration.advancedModel !== undefined ? {
            set: props.llmConfiguration.advancedModel
          } : undefined,
        openaiApiKey: props.llmConfiguration.openaiApiKey !== undefined ? {
            set: props.llmConfiguration.openaiApiKey
          } : undefined,
        anthropicApiKey: props.llmConfiguration.anthropicApiKey !== undefined ? {
            set: props.llmConfiguration.anthropicApiKey
          } : undefined,
        deepseekApiKey: props.llmConfiguration.deepseekApiKey !== undefined ? {
            set: props.llmConfiguration.deepseekApiKey
          } : undefined,
        kimiApiKey: props.llmConfiguration.kimiApiKey !== undefined ? {
            set: props.llmConfiguration.kimiApiKey
          } : undefined,
        qwenApiKey: props.llmConfiguration.qwenApiKey !== undefined ? {
            set: props.llmConfiguration.qwenApiKey
          } : undefined,
        xaiApiKey: props.llmConfiguration.xaiApiKey !== undefined ? {
            set: props.llmConfiguration.xaiApiKey
          } : undefined,
        geminiApiKey: props.llmConfiguration.geminiApiKey !== undefined ? {
            set: props.llmConfiguration.geminiApiKey
          } : undefined,
      },
      create: {
        defaultProvider: props.llmConfiguration.defaultProvider !== undefined ? props.llmConfiguration.defaultProvider : undefined,
        miniProvider: props.llmConfiguration.miniProvider !== undefined ? props.llmConfiguration.miniProvider : undefined,
        normalProvider: props.llmConfiguration.normalProvider !== undefined ? props.llmConfiguration.normalProvider : undefined,
        advancedProvider: props.llmConfiguration.advancedProvider !== undefined ? props.llmConfiguration.advancedProvider : undefined,
        miniModel: props.llmConfiguration.miniModel !== undefined ? props.llmConfiguration.miniModel : undefined,
        normalModel: props.llmConfiguration.normalModel !== undefined ? props.llmConfiguration.normalModel : undefined,
        advancedModel: props.llmConfiguration.advancedModel !== undefined ? props.llmConfiguration.advancedModel : undefined,
        openaiApiKey: props.llmConfiguration.openaiApiKey !== undefined ? props.llmConfiguration.openaiApiKey : undefined,
        anthropicApiKey: props.llmConfiguration.anthropicApiKey !== undefined ? props.llmConfiguration.anthropicApiKey : undefined,
        deepseekApiKey: props.llmConfiguration.deepseekApiKey !== undefined ? props.llmConfiguration.deepseekApiKey : undefined,
        kimiApiKey: props.llmConfiguration.kimiApiKey !== undefined ? props.llmConfiguration.kimiApiKey : undefined,
        qwenApiKey: props.llmConfiguration.qwenApiKey !== undefined ? props.llmConfiguration.qwenApiKey : undefined,
        xaiApiKey: props.llmConfiguration.xaiApiKey !== undefined ? props.llmConfiguration.xaiApiKey : undefined,
        geminiApiKey: props.llmConfiguration.geminiApiKey !== undefined ? props.llmConfiguration.geminiApiKey : undefined,
      },
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_USER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneUser) {
          return response.data.upsertOneUser;
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
          logger.error("Non-retryable constraint violation in upsertOneUser", {
            operation: 'upsertOneUser',
            model: 'User',
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
          logger.warn("Database connection error in upsertOneUser, retrying...", {
            operation: 'upsertOneUser',
            model: 'User',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database upsert operation failed", {
          operation: 'upsertOneUser',
          model: 'User',
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
   * Update multiple User records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of User objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: UserType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_USER = gql`
          mutation updateManyUser($data: [UserCreateManyInput!]!) {
            updateManyUser(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  name: prop.name !== undefined ? {
    equals: prop.name 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  name: prop.name !== undefined ? {
            set: prop.name 
           } : undefined,
  email: prop.email !== undefined ? {
            set: prop.email 
           } : undefined,
  emailVerified: prop.emailVerified !== undefined ? {
            set: prop.emailVerified 
           } : undefined,
  image: prop.image !== undefined ? {
            set: prop.image 
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
  role: prop.role !== undefined ? {
            set: prop.role 
           } : undefined,
  bio: prop.bio !== undefined ? {
            set: prop.bio 
           } : undefined,
  jobTitle: prop.jobTitle !== undefined ? {
            set: prop.jobTitle 
           } : undefined,
  currentAccount: prop.currentAccount !== undefined ? {
            set: prop.currentAccount 
           } : undefined,
  plan: prop.plan !== undefined ? {
            set: prop.plan 
           } : undefined,
  openaiAPIKey: prop.openaiAPIKey !== undefined ? {
            set: prop.openaiAPIKey 
           } : undefined,
  openaiModel: prop.openaiModel !== undefined ? {
            set: prop.openaiModel 
           } : undefined,
  customer: prop.customer ? 
  typeof prop.customer === 'object' && Object.keys(prop.customer).length === 1 && (Object.keys(prop.customer)[0] === 'id' || Object.keys(prop.customer)[0] === 'symbol')
? {
  connect: {
    id: prop.customer.id
  }
} : { upsert: {
      where: {
        id: prop.customer.id !== undefined ? {
            equals: prop.customer.id
          } : undefined,
        authUserId: prop.customer.authUserId !== undefined ? {
            equals: prop.customer.authUserId
          } : undefined,
        name: prop.customer.name !== undefined ? {
            equals: prop.customer.name
          } : undefined,
        stripeCustomerId: prop.customer.stripeCustomerId !== undefined ? {
            equals: prop.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: prop.customer.stripeSubscriptionId !== undefined ? {
            equals: prop.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: prop.customer.stripePriceId !== undefined ? {
            equals: prop.customer.stripePriceId
          } : undefined,
      },
      update: {
        authUserId: prop.customer.authUserId !== undefined ? {
            set: prop.customer.authUserId
          } : undefined,
        name: prop.customer.name !== undefined ? {
            set: prop.customer.name
          } : undefined,
        plan: prop.customer.plan !== undefined ? {
            set: prop.customer.plan
          } : undefined,
        stripeCustomerId: prop.customer.stripeCustomerId !== undefined ? {
            set: prop.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: prop.customer.stripeSubscriptionId !== undefined ? {
            set: prop.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: prop.customer.stripePriceId !== undefined ? {
            set: prop.customer.stripePriceId
          } : undefined,
        stripeCurrentPeriodEnd: prop.customer.stripeCurrentPeriodEnd !== undefined ? {
            set: prop.customer.stripeCurrentPeriodEnd
          } : undefined,
      },
      create: {
        authUserId: prop.customer.authUserId !== undefined ? prop.customer.authUserId : undefined,
        name: prop.customer.name !== undefined ? prop.customer.name : undefined,
        plan: prop.customer.plan !== undefined ? prop.customer.plan : undefined,
        stripeCustomerId: prop.customer.stripeCustomerId !== undefined ? prop.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: prop.customer.stripeSubscriptionId !== undefined ? prop.customer.stripeSubscriptionId : undefined,
        stripePriceId: prop.customer.stripePriceId !== undefined ? prop.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: prop.customer.stripeCurrentPeriodEnd !== undefined ? prop.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: prop.accounts ? 
  Array.isArray(prop.accounts) && prop.accounts.length > 0 && prop.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.accounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.accounts.map((item: any) => ({
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
  sessions: prop.sessions ? 
  Array.isArray(prop.sessions) && prop.sessions.length > 0 && prop.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.sessions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.sessions.map((item: any) => ({
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
  authenticators: prop.authenticators ? 
  Array.isArray(prop.authenticators) && prop.authenticators.length > 0 && prop.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.authenticators.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.authenticators.map((item: any) => ({
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
  alpacaAccounts: prop.alpacaAccounts ? 
  Array.isArray(prop.alpacaAccounts) && prop.alpacaAccounts.length > 0 && prop.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.alpacaAccounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.alpacaAccounts.map((item: any) => ({
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
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        APIKey: item.APIKey !== undefined ? {
            set: item.APIKey
          } : undefined,
        APISecret: item.APISecret !== undefined ? {
            set: item.APISecret
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
          autonomyPrefs: item.tradingPolicy.autonomyPrefs !== undefined ? {
              set: item.tradingPolicy.autonomyPrefs
            } : undefined,
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
          assetUniversePrefs: item.tradingPolicy.assetUniversePrefs !== undefined ? {
              set: item.tradingPolicy.assetUniversePrefs
            } : undefined,
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
          riskBudgetPrefs: item.tradingPolicy.riskBudgetPrefs !== undefined ? {
              set: item.tradingPolicy.riskBudgetPrefs
            } : undefined,
          signalConsumptionPrefs: item.tradingPolicy.signalConsumptionPrefs !== undefined ? {
              set: item.tradingPolicy.signalConsumptionPrefs
            } : undefined,
          executionPrefs: item.tradingPolicy.executionPrefs !== undefined ? {
              set: item.tradingPolicy.executionPrefs
            } : undefined,
          positionManagementPrefs: item.tradingPolicy.positionManagementPrefs !== undefined ? {
              set: item.tradingPolicy.positionManagementPrefs
            } : undefined,
          portfolioConstructionPrefs: item.tradingPolicy.portfolioConstructionPrefs !== undefined ? {
              set: item.tradingPolicy.portfolioConstructionPrefs
            } : undefined,
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
          overlayResponsePrefs: item.tradingPolicy.overlayResponsePrefs !== undefined ? {
              set: item.tradingPolicy.overlayResponsePrefs
            } : undefined,
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
          modelPrefs: item.tradingPolicy.modelPrefs !== undefined ? {
              set: item.tradingPolicy.modelPrefs
            } : undefined,
          auditNotificationPrefs: item.tradingPolicy.auditNotificationPrefs !== undefined ? {
              set: item.tradingPolicy.auditNotificationPrefs
            } : undefined,
      overlays: item.tradingPolicy.overlays ? 
      Array.isArray(item.tradingPolicy.overlays) && item.tradingPolicy.overlays.length > 0 && item.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.tradingPolicy.overlays.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.tradingPolicy.overlays.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradingPolicyId: item.tradingPolicyId !== undefined ? {
                equals: item.tradingPolicyId
              } : undefined,
            correlationId: item.correlationId !== undefined ? {
                equals: item.correlationId
              } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                equals: item.triggerEventId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            overlayType: item.overlayType !== undefined ? {
                set: item.overlayType
              } : undefined,
            source: item.source !== undefined ? {
                set: item.source
              } : undefined,
            reason: item.reason !== undefined ? {
                set: item.reason
              } : undefined,
            severity: item.severity !== undefined ? {
                set: item.severity
              } : undefined,
            version: item.version !== undefined ? {
                set: item.version
              } : undefined,
            mutations: item.mutations !== undefined ? {
                set: item.mutations
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            activatedAt: item.activatedAt !== undefined ? {
                set: item.activatedAt
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? {
                set: item.deactivatedAt
              } : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? {
                set: item.deactivatedBy
              } : undefined,
            correlationId: item.correlationId !== undefined ? {
                set: item.correlationId
              } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                set: item.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.overlayType !== undefined ? item.overlayType : undefined,
            source: item.source !== undefined ? item.source : undefined,
            reason: item.reason !== undefined ? item.reason : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            version: item.version !== undefined ? item.version : undefined,
            mutations: item.mutations !== undefined ? item.mutations : undefined,
            status: item.status !== undefined ? item.status : undefined,
            activatedAt: item.activatedAt !== undefined ? item.activatedAt : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? item.deactivatedAt : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? item.deactivatedBy : undefined,
            correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
            triggerEventId: item.triggerEventId !== undefined ? item.triggerEventId : undefined,
          },
        }))
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
      overlays: item.tradingPolicy.overlays ? 
        Array.isArray(item.tradingPolicy.overlays) && item.tradingPolicy.overlays.length > 0 &&  item.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.tradingPolicy.overlays.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradingPolicyId: item.tradingPolicyId !== undefined ? {
                equals: item.tradingPolicyId 
               } : undefined,
            correlationId: item.correlationId !== undefined ? {
                equals: item.correlationId 
               } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                equals: item.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.overlayType !== undefined ? item.overlayType : undefined,
            source: item.source !== undefined ? item.source : undefined,
            reason: item.reason !== undefined ? item.reason : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            version: item.version !== undefined ? item.version : undefined,
            mutations: item.mutations !== undefined ? item.mutations : undefined,
            status: item.status !== undefined ? item.status : undefined,
            activatedAt: item.activatedAt !== undefined ? item.activatedAt : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? item.deactivatedAt : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? item.deactivatedBy : undefined,
            correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
            triggerEventId: item.triggerEventId !== undefined ? item.triggerEventId : undefined,
          },
        }))
      } : undefined,
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
      overlays: item.tradingPolicy.overlays ? 
        Array.isArray(item.tradingPolicy.overlays) && item.tradingPolicy.overlays.length > 0 &&  item.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.tradingPolicy.overlays.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradingPolicyId: item.tradingPolicyId !== undefined ? {
                equals: item.tradingPolicyId 
               } : undefined,
            correlationId: item.correlationId !== undefined ? {
                equals: item.correlationId 
               } : undefined,
            triggerEventId: item.triggerEventId !== undefined ? {
                equals: item.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.overlayType !== undefined ? item.overlayType : undefined,
            source: item.source !== undefined ? item.source : undefined,
            reason: item.reason !== undefined ? item.reason : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            version: item.version !== undefined ? item.version : undefined,
            mutations: item.mutations !== undefined ? item.mutations : undefined,
            status: item.status !== undefined ? item.status : undefined,
            activatedAt: item.activatedAt !== undefined ? item.activatedAt : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            deactivatedAt: item.deactivatedAt !== undefined ? item.deactivatedAt : undefined,
            deactivatedBy: item.deactivatedBy !== undefined ? item.deactivatedBy : undefined,
            correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
            triggerEventId: item.triggerEventId !== undefined ? item.triggerEventId : undefined,
          },
        }))
      } : undefined,
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
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
      },
    }))
  } : undefined,
  linkedProviders: prop.linkedProviders ? 
  Array.isArray(prop.linkedProviders) && prop.linkedProviders.length > 0 && prop.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.linkedProviders.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.linkedProviders.map((item: any) => ({
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
  accountLinkingRequests: prop.accountLinkingRequests ? 
  Array.isArray(prop.accountLinkingRequests) && prop.accountLinkingRequests.length > 0 && prop.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.accountLinkingRequests.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.accountLinkingRequests.map((item: any) => ({
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
  reviewedWaitlistEntries: prop.reviewedWaitlistEntries ? 
  Array.isArray(prop.reviewedWaitlistEntries) && prop.reviewedWaitlistEntries.length > 0 && prop.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.reviewedWaitlistEntries.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.reviewedWaitlistEntries.map((item: any) => ({
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
  llmConfiguration: prop.llmConfiguration ? 
  typeof prop.llmConfiguration === 'object' && Object.keys(prop.llmConfiguration).length === 1 && (Object.keys(prop.llmConfiguration)[0] === 'id' || Object.keys(prop.llmConfiguration)[0] === 'symbol')
? {
  connect: {
    id: prop.llmConfiguration.id
  }
} : { upsert: {
      where: {
        id: prop.llmConfiguration.id !== undefined ? {
            equals: prop.llmConfiguration.id
          } : undefined,
        userId: prop.llmConfiguration.userId !== undefined ? {
            equals: prop.llmConfiguration.userId
          } : undefined,
      },
      update: {
        id: prop.llmConfiguration.id !== undefined ? {
            set: prop.llmConfiguration.id
          } : undefined,
        defaultProvider: prop.llmConfiguration.defaultProvider !== undefined ? {
            set: prop.llmConfiguration.defaultProvider
          } : undefined,
        miniProvider: prop.llmConfiguration.miniProvider !== undefined ? {
            set: prop.llmConfiguration.miniProvider
          } : undefined,
        normalProvider: prop.llmConfiguration.normalProvider !== undefined ? {
            set: prop.llmConfiguration.normalProvider
          } : undefined,
        advancedProvider: prop.llmConfiguration.advancedProvider !== undefined ? {
            set: prop.llmConfiguration.advancedProvider
          } : undefined,
        miniModel: prop.llmConfiguration.miniModel !== undefined ? {
            set: prop.llmConfiguration.miniModel
          } : undefined,
        normalModel: prop.llmConfiguration.normalModel !== undefined ? {
            set: prop.llmConfiguration.normalModel
          } : undefined,
        advancedModel: prop.llmConfiguration.advancedModel !== undefined ? {
            set: prop.llmConfiguration.advancedModel
          } : undefined,
        openaiApiKey: prop.llmConfiguration.openaiApiKey !== undefined ? {
            set: prop.llmConfiguration.openaiApiKey
          } : undefined,
        anthropicApiKey: prop.llmConfiguration.anthropicApiKey !== undefined ? {
            set: prop.llmConfiguration.anthropicApiKey
          } : undefined,
        deepseekApiKey: prop.llmConfiguration.deepseekApiKey !== undefined ? {
            set: prop.llmConfiguration.deepseekApiKey
          } : undefined,
        kimiApiKey: prop.llmConfiguration.kimiApiKey !== undefined ? {
            set: prop.llmConfiguration.kimiApiKey
          } : undefined,
        qwenApiKey: prop.llmConfiguration.qwenApiKey !== undefined ? {
            set: prop.llmConfiguration.qwenApiKey
          } : undefined,
        xaiApiKey: prop.llmConfiguration.xaiApiKey !== undefined ? {
            set: prop.llmConfiguration.xaiApiKey
          } : undefined,
        geminiApiKey: prop.llmConfiguration.geminiApiKey !== undefined ? {
            set: prop.llmConfiguration.geminiApiKey
          } : undefined,
      },
      create: {
        defaultProvider: prop.llmConfiguration.defaultProvider !== undefined ? prop.llmConfiguration.defaultProvider : undefined,
        miniProvider: prop.llmConfiguration.miniProvider !== undefined ? prop.llmConfiguration.miniProvider : undefined,
        normalProvider: prop.llmConfiguration.normalProvider !== undefined ? prop.llmConfiguration.normalProvider : undefined,
        advancedProvider: prop.llmConfiguration.advancedProvider !== undefined ? prop.llmConfiguration.advancedProvider : undefined,
        miniModel: prop.llmConfiguration.miniModel !== undefined ? prop.llmConfiguration.miniModel : undefined,
        normalModel: prop.llmConfiguration.normalModel !== undefined ? prop.llmConfiguration.normalModel : undefined,
        advancedModel: prop.llmConfiguration.advancedModel !== undefined ? prop.llmConfiguration.advancedModel : undefined,
        openaiApiKey: prop.llmConfiguration.openaiApiKey !== undefined ? prop.llmConfiguration.openaiApiKey : undefined,
        anthropicApiKey: prop.llmConfiguration.anthropicApiKey !== undefined ? prop.llmConfiguration.anthropicApiKey : undefined,
        deepseekApiKey: prop.llmConfiguration.deepseekApiKey !== undefined ? prop.llmConfiguration.deepseekApiKey : undefined,
        kimiApiKey: prop.llmConfiguration.kimiApiKey !== undefined ? prop.llmConfiguration.kimiApiKey : undefined,
        qwenApiKey: prop.llmConfiguration.qwenApiKey !== undefined ? prop.llmConfiguration.qwenApiKey : undefined,
        xaiApiKey: prop.llmConfiguration.xaiApiKey !== undefined ? prop.llmConfiguration.xaiApiKey : undefined,
        geminiApiKey: prop.llmConfiguration.geminiApiKey !== undefined ? prop.llmConfiguration.geminiApiKey : undefined,
      },
    }
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_USER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyUser) {
          return response.data.updateManyUser;
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
          logger.error("Non-retryable constraint violation in updateManyUser", {
            operation: 'updateManyUser',
            model: 'User',
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
          logger.warn("Database connection error in updateManyUser, retrying...", {
            operation: 'updateManyUser',
            model: 'User',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database updateMany operation failed", {
          operation: 'updateManyUser',
          model: 'User',
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
   * Delete a single User record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted User or null.
   */
  async delete(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<UserType> {
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

        const DELETE_ONE_USER = gql`
          mutation deleteOneUser($where: UserWhereUniqueInput!) {
            deleteOneUser(where: $where) {
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
          mutation: DELETE_ONE_USER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneUser) {
          return response.data.deleteOneUser;
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
          logger.error("Non-retryable constraint violation in deleteOneUser", {
            operation: 'deleteOneUser',
            model: 'User',
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
          logger.warn("Database connection error in deleteOneUser, retrying...", {
            operation: 'deleteOneUser',
            model: 'User',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database delete operation failed", {
          operation: 'deleteOneUser',
          model: 'User',
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
   * Retrieve a single User record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved User or null.
   */
  async get(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<UserType | null> {
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

        const GET_USER = gql`
          query getUser($where: UserWhereUniqueInput!) {
            getUser(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_USER,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getUser ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No User found') {
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
          logger.warn("Database connection error in getUser, retrying...", {
            operation: 'getUser',
            model: 'User',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database get operation failed", {
          operation: 'getUser',
          model: 'User',
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
   * Retrieve all Users records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of User records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<UserType[] | null> {
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

        const GET_ALL_USER = gql`
          query getAllUser {
            users {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_USER,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.users ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No User found') {
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
          logger.warn("Database connection error in getAllUser, retrying...", {
            operation: 'getAllUser',
            model: 'User',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database getAll operation failed", {
          operation: 'getAllUser',
          model: 'User',
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
   * Find multiple User records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found User records or null.
   */
  async findMany(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<UserType[] | null> {
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

        const FIND_MANY_USER = gql`
          query findManyUser($where: UserWhereInput!) {
            users(where: $where) {
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
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_USER,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.users) {
          return response.data.users;
        } else {
          return [] as UserType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No User found') {
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
          logger.warn("Database connection error in findManyUser, retrying...", {
            operation: 'findManyUser',
            model: 'User',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database findMany operation failed", {
          operation: 'findManyUser',
          model: 'User',
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
