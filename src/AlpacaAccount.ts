
  
import { AlpacaAccount as AlpacaAccountType } from './generated/typegraphql-prisma/models/AlpacaAccount';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the AlpacaAccount model.
   */

  const selectionSet = `
    
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
    currentAccount
    customerId
    plan
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
  }
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

  `;

  export const AlpacaAccount = {

    /**
     * Create a new AlpacaAccount record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created AlpacaAccount or null.
     */

    /**
     * Create a new AlpacaAccount record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created AlpacaAccount or null.
     */
    async create(props: AlpacaAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AlpacaAccountType> {
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

          const CREATE_ONE_ALPACAACCOUNT = gql`
              mutation createOneAlpacaAccount($data: AlpacaAccountCreateInput!) {
                createOneAlpacaAccount(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                type: props.type !== undefined ? props.type : undefined,
  APIKey: props.APIKey !== undefined ? props.APIKey : undefined,
  APISecret: props.APISecret !== undefined ? props.APISecret : undefined,
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
        alpacaAccountId: props.allocation.alpacaAccountId !== undefined ? props.allocation.alpacaAccountId : undefined,
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
  tradingPolicy: props.tradingPolicy ? 
    typeof props.tradingPolicy === 'object' && Object.keys(props.tradingPolicy).length === 1 && Object.keys(props.tradingPolicy)[0] === 'id'
    ? { connect: {
        id: props.tradingPolicy.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.tradingPolicy.id !== undefined ? props.tradingPolicy.id : undefined,
        alpacaAccountId: props.tradingPolicy.alpacaAccountId !== undefined ? props.tradingPolicy.alpacaAccountId : undefined,
        miniModelId: props.tradingPolicy.miniModelId !== undefined ? {
            equals: props.tradingPolicy.miniModelId 
           } : undefined,
        normalModelId: props.tradingPolicy.normalModelId !== undefined ? {
            equals: props.tradingPolicy.normalModelId 
           } : undefined,
        advancedModelId: props.tradingPolicy.advancedModelId !== undefined ? {
            equals: props.tradingPolicy.advancedModelId 
           } : undefined,
      },
      create: {
        version: props.tradingPolicy.version !== undefined ? props.tradingPolicy.version : undefined,
        lastModifiedBy: props.tradingPolicy.lastModifiedBy !== undefined ? props.tradingPolicy.lastModifiedBy : undefined,
        lastModifiedAt: props.tradingPolicy.lastModifiedAt !== undefined ? props.tradingPolicy.lastModifiedAt : undefined,
        autonomyMode: props.tradingPolicy.autonomyMode !== undefined ? props.tradingPolicy.autonomyMode : undefined,
        realtimeTradingEnabled: props.tradingPolicy.realtimeTradingEnabled !== undefined ? props.tradingPolicy.realtimeTradingEnabled : undefined,
        paperTradingOnly: props.tradingPolicy.paperTradingOnly !== undefined ? props.tradingPolicy.paperTradingOnly : undefined,
        killSwitchEnabled: props.tradingPolicy.killSwitchEnabled !== undefined ? props.tradingPolicy.killSwitchEnabled : undefined,
        autonomyPrefs: props.tradingPolicy.autonomyPrefs !== undefined ? props.tradingPolicy.autonomyPrefs : undefined,
        equitiesEnabled: props.tradingPolicy.equitiesEnabled !== undefined ? props.tradingPolicy.equitiesEnabled : undefined,
        etfsEnabled: props.tradingPolicy.etfsEnabled !== undefined ? props.tradingPolicy.etfsEnabled : undefined,
        cryptoEnabled: props.tradingPolicy.cryptoEnabled !== undefined ? props.tradingPolicy.cryptoEnabled : undefined,
        optionsEnabled: props.tradingPolicy.optionsEnabled !== undefined ? props.tradingPolicy.optionsEnabled : undefined,
        futuresEnabled: props.tradingPolicy.futuresEnabled !== undefined ? props.tradingPolicy.futuresEnabled : undefined,
        forexEnabled: props.tradingPolicy.forexEnabled !== undefined ? props.tradingPolicy.forexEnabled : undefined,
        shortingEnabled: props.tradingPolicy.shortingEnabled !== undefined ? props.tradingPolicy.shortingEnabled : undefined,
        marginEnabled: props.tradingPolicy.marginEnabled !== undefined ? props.tradingPolicy.marginEnabled : undefined,
        fractionalSharesEnabled: props.tradingPolicy.fractionalSharesEnabled !== undefined ? props.tradingPolicy.fractionalSharesEnabled : undefined,
        assetUniversePrefs: props.tradingPolicy.assetUniversePrefs !== undefined ? props.tradingPolicy.assetUniversePrefs : undefined,
        maxBuyingPowerUtilPct: props.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? props.tradingPolicy.maxBuyingPowerUtilPct : undefined,
        cashFloorPct: props.tradingPolicy.cashFloorPct !== undefined ? props.tradingPolicy.cashFloorPct : undefined,
        maxGrossExposurePct: props.tradingPolicy.maxGrossExposurePct !== undefined ? props.tradingPolicy.maxGrossExposurePct : undefined,
        maxNetExposurePct: props.tradingPolicy.maxNetExposurePct !== undefined ? props.tradingPolicy.maxNetExposurePct : undefined,
        maxLeverage: props.tradingPolicy.maxLeverage !== undefined ? props.tradingPolicy.maxLeverage : undefined,
        maxSymbolConcentrationPct: props.tradingPolicy.maxSymbolConcentrationPct !== undefined ? props.tradingPolicy.maxSymbolConcentrationPct : undefined,
        maxSectorConcentrationPct: props.tradingPolicy.maxSectorConcentrationPct !== undefined ? props.tradingPolicy.maxSectorConcentrationPct : undefined,
        maxOpenPositions: props.tradingPolicy.maxOpenPositions !== undefined ? props.tradingPolicy.maxOpenPositions : undefined,
        maxOpenOrders: props.tradingPolicy.maxOpenOrders !== undefined ? props.tradingPolicy.maxOpenOrders : undefined,
        riskBudgetPrefs: props.tradingPolicy.riskBudgetPrefs !== undefined ? props.tradingPolicy.riskBudgetPrefs : undefined,
        signalConsumptionPrefs: props.tradingPolicy.signalConsumptionPrefs !== undefined ? props.tradingPolicy.signalConsumptionPrefs : undefined,
        executionPrefs: props.tradingPolicy.executionPrefs !== undefined ? props.tradingPolicy.executionPrefs : undefined,
        positionManagementPrefs: props.tradingPolicy.positionManagementPrefs !== undefined ? props.tradingPolicy.positionManagementPrefs : undefined,
        portfolioConstructionPrefs: props.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.tradingPolicy.portfolioConstructionPrefs : undefined,
        macroOverlayEnabled: props.tradingPolicy.macroOverlayEnabled !== undefined ? props.tradingPolicy.macroOverlayEnabled : undefined,
        sectorOverlayEnabled: props.tradingPolicy.sectorOverlayEnabled !== undefined ? props.tradingPolicy.sectorOverlayEnabled : undefined,
        volatilityOverlayEnabled: props.tradingPolicy.volatilityOverlayEnabled !== undefined ? props.tradingPolicy.volatilityOverlayEnabled : undefined,
        liquidityStressOverlayEnabled: props.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? props.tradingPolicy.liquidityStressOverlayEnabled : undefined,
        blackSwanProtectionEnabled: props.tradingPolicy.blackSwanProtectionEnabled !== undefined ? props.tradingPolicy.blackSwanProtectionEnabled : undefined,
        drawdownGuardianEnabled: props.tradingPolicy.drawdownGuardianEnabled !== undefined ? props.tradingPolicy.drawdownGuardianEnabled : undefined,
        correlationSpikeProtectionEnabled: props.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? props.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
        newsEventRiskOverlayEnabled: props.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? props.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
        exchangeHealthOverlayEnabled: props.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? props.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
        dataQualitySentinelEnabled: props.tradingPolicy.dataQualitySentinelEnabled !== undefined ? props.tradingPolicy.dataQualitySentinelEnabled : undefined,
        overlayResponsePrefs: props.tradingPolicy.overlayResponsePrefs !== undefined ? props.tradingPolicy.overlayResponsePrefs : undefined,
        miniModelProvider: props.tradingPolicy.miniModelProvider !== undefined ? props.tradingPolicy.miniModelProvider : undefined,
        miniModelId: props.tradingPolicy.miniModelId !== undefined ? props.tradingPolicy.miniModelId : undefined,
        normalModelProvider: props.tradingPolicy.normalModelProvider !== undefined ? props.tradingPolicy.normalModelProvider : undefined,
        normalModelId: props.tradingPolicy.normalModelId !== undefined ? props.tradingPolicy.normalModelId : undefined,
        advancedModelProvider: props.tradingPolicy.advancedModelProvider !== undefined ? props.tradingPolicy.advancedModelProvider : undefined,
        advancedModelId: props.tradingPolicy.advancedModelId !== undefined ? props.tradingPolicy.advancedModelId : undefined,
        modelPrefs: props.tradingPolicy.modelPrefs !== undefined ? props.tradingPolicy.modelPrefs : undefined,
        auditNotificationPrefs: props.tradingPolicy.auditNotificationPrefs !== undefined ? props.tradingPolicy.auditNotificationPrefs : undefined,
    overlays: props.tradingPolicy.overlays ? 
      Array.isArray(props.tradingPolicy.overlays) && props.tradingPolicy.overlays.length > 0 &&  props.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.tradingPolicy.overlays.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.tradingPolicy.overlays.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          tradingPolicyId: item.tradingPolicyId !== undefined ? {
              equals: item.tradingPolicyId 
             } : undefined,
          status: item.status !== undefined ? {
              equals: item.status 
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
        currentAccount: props.user.currentAccount !== undefined ? props.user.currentAccount : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
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
    llmConfiguration: props.user.llmConfiguration ? 
      typeof props.user.llmConfiguration === 'object' && Object.keys(props.user.llmConfiguration).length === 1 && Object.keys(props.user.llmConfiguration)[0] === 'id'
    ? { connect: {
          id: props.user.llmConfiguration.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.llmConfiguration.id !== undefined ? props.user.llmConfiguration.id : undefined,
          userId: props.user.llmConfiguration.userId !== undefined ? props.user.llmConfiguration.userId : undefined,
        },
        create: {
          defaultProvider: props.user.llmConfiguration.defaultProvider !== undefined ? props.user.llmConfiguration.defaultProvider : undefined,
          miniProvider: props.user.llmConfiguration.miniProvider !== undefined ? props.user.llmConfiguration.miniProvider : undefined,
          normalProvider: props.user.llmConfiguration.normalProvider !== undefined ? props.user.llmConfiguration.normalProvider : undefined,
          advancedProvider: props.user.llmConfiguration.advancedProvider !== undefined ? props.user.llmConfiguration.advancedProvider : undefined,
          miniModel: props.user.llmConfiguration.miniModel !== undefined ? props.user.llmConfiguration.miniModel : undefined,
          normalModel: props.user.llmConfiguration.normalModel !== undefined ? props.user.llmConfiguration.normalModel : undefined,
          advancedModel: props.user.llmConfiguration.advancedModel !== undefined ? props.user.llmConfiguration.advancedModel : undefined,
          openaiApiKey: props.user.llmConfiguration.openaiApiKey !== undefined ? props.user.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: props.user.llmConfiguration.anthropicApiKey !== undefined ? props.user.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: props.user.llmConfiguration.deepseekApiKey !== undefined ? props.user.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: props.user.llmConfiguration.kimiApiKey !== undefined ? props.user.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: props.user.llmConfiguration.qwenApiKey !== undefined ? props.user.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: props.user.llmConfiguration.xaiApiKey !== undefined ? props.user.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: props.user.llmConfiguration.geminiApiKey !== undefined ? props.user.llmConfiguration.geminiApiKey : undefined,
        },
      }
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
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_ALPACAACCOUNT,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneAlpacaAccount) {
            return response.data.createOneAlpacaAccount;
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
            logger.error("Non-retryable constraint violation in createOneAlpacaAccount", {
              operation: 'createOneAlpacaAccount',
              model: 'AlpacaAccount',
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
            logger.warn("Database connection error in createOneAlpacaAccount, retrying...", {
              operation: 'createOneAlpacaAccount',
              model: 'AlpacaAccount',
              attempt: retryCount,
              maxRetries: MAX_RETRIES,
            });
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log structured error details and rethrow
          logger.error("Database create operation failed", {
            operation: 'createOneAlpacaAccount',
            model: 'AlpacaAccount',
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
   * Create multiple AlpacaAccount records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of AlpacaAccount objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AlpacaAccountType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_ALPACAACCOUNT = gql`
          mutation createManyAlpacaAccount($data: [AlpacaAccountCreateManyInput!]!) {
            createManyAlpacaAccount(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      type: prop.type !== undefined ? prop.type : undefined,
  APIKey: prop.APIKey !== undefined ? prop.APIKey : undefined,
  APISecret: prop.APISecret !== undefined ? prop.APISecret : undefined,
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
  userId: prop.userId !== undefined ? prop.userId : undefined,
  deletedAt: prop.deletedAt !== undefined ? prop.deletedAt : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_ALPACAACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyAlpacaAccount) {
          return response.data.createManyAlpacaAccount;
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
          logger.error("Non-retryable constraint violation in createManyAlpacaAccount", {
            operation: 'createManyAlpacaAccount',
            model: 'AlpacaAccount',
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
          logger.warn("Database connection error in createManyAlpacaAccount, retrying...", {
            operation: 'createManyAlpacaAccount',
            model: 'AlpacaAccount',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database createMany operation failed", {
          operation: 'createManyAlpacaAccount',
          model: 'AlpacaAccount',
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
   * Update a single AlpacaAccount record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated AlpacaAccount or null.
   */
  async update(props: AlpacaAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AlpacaAccountType> {
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

        const UPDATE_ONE_ALPACAACCOUNT = gql`
          mutation updateOneAlpacaAccount($data: AlpacaAccountUpdateInput!, $where: AlpacaAccountWhereUniqueInput!) {
            updateOneAlpacaAccount(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  type: props.type !== undefined ? {
    equals: props.type 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  APIKey: props.APIKey !== undefined ? {
            set: props.APIKey 
           } : undefined,
  APISecret: props.APISecret !== undefined ? {
            set: props.APISecret 
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
        alpacaAccountId: props.allocation.alpacaAccountId !== undefined ? {
            equals: props.allocation.alpacaAccountId
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
  tradingPolicy: props.tradingPolicy ? 
  typeof props.tradingPolicy === 'object' && Object.keys(props.tradingPolicy).length === 1 && (Object.keys(props.tradingPolicy)[0] === 'id' || Object.keys(props.tradingPolicy)[0] === 'symbol')
? {
  connect: {
    id: props.tradingPolicy.id
  }
} : { upsert: {
      where: {
        id: props.tradingPolicy.id !== undefined ? {
            equals: props.tradingPolicy.id
          } : undefined,
        alpacaAccountId: props.tradingPolicy.alpacaAccountId !== undefined ? {
            equals: props.tradingPolicy.alpacaAccountId
          } : undefined,
        miniModelId: props.tradingPolicy.miniModelId !== undefined ? {
            equals: props.tradingPolicy.miniModelId
          } : undefined,
        normalModelId: props.tradingPolicy.normalModelId !== undefined ? {
            equals: props.tradingPolicy.normalModelId
          } : undefined,
        advancedModelId: props.tradingPolicy.advancedModelId !== undefined ? {
            equals: props.tradingPolicy.advancedModelId
          } : undefined,
      },
      update: {
        id: props.tradingPolicy.id !== undefined ? {
            set: props.tradingPolicy.id
          } : undefined,
        version: props.tradingPolicy.version !== undefined ? {
            set: props.tradingPolicy.version
          } : undefined,
        lastModifiedBy: props.tradingPolicy.lastModifiedBy !== undefined ? {
            set: props.tradingPolicy.lastModifiedBy
          } : undefined,
        lastModifiedAt: props.tradingPolicy.lastModifiedAt !== undefined ? {
            set: props.tradingPolicy.lastModifiedAt
          } : undefined,
        autonomyMode: props.tradingPolicy.autonomyMode !== undefined ? {
            set: props.tradingPolicy.autonomyMode
          } : undefined,
        realtimeTradingEnabled: props.tradingPolicy.realtimeTradingEnabled !== undefined ? {
            set: props.tradingPolicy.realtimeTradingEnabled
          } : undefined,
        paperTradingOnly: props.tradingPolicy.paperTradingOnly !== undefined ? {
            set: props.tradingPolicy.paperTradingOnly
          } : undefined,
        killSwitchEnabled: props.tradingPolicy.killSwitchEnabled !== undefined ? {
            set: props.tradingPolicy.killSwitchEnabled
          } : undefined,
        autonomyPrefs: props.tradingPolicy.autonomyPrefs !== undefined ? {
            set: props.tradingPolicy.autonomyPrefs
          } : undefined,
        equitiesEnabled: props.tradingPolicy.equitiesEnabled !== undefined ? {
            set: props.tradingPolicy.equitiesEnabled
          } : undefined,
        etfsEnabled: props.tradingPolicy.etfsEnabled !== undefined ? {
            set: props.tradingPolicy.etfsEnabled
          } : undefined,
        cryptoEnabled: props.tradingPolicy.cryptoEnabled !== undefined ? {
            set: props.tradingPolicy.cryptoEnabled
          } : undefined,
        optionsEnabled: props.tradingPolicy.optionsEnabled !== undefined ? {
            set: props.tradingPolicy.optionsEnabled
          } : undefined,
        futuresEnabled: props.tradingPolicy.futuresEnabled !== undefined ? {
            set: props.tradingPolicy.futuresEnabled
          } : undefined,
        forexEnabled: props.tradingPolicy.forexEnabled !== undefined ? {
            set: props.tradingPolicy.forexEnabled
          } : undefined,
        shortingEnabled: props.tradingPolicy.shortingEnabled !== undefined ? {
            set: props.tradingPolicy.shortingEnabled
          } : undefined,
        marginEnabled: props.tradingPolicy.marginEnabled !== undefined ? {
            set: props.tradingPolicy.marginEnabled
          } : undefined,
        fractionalSharesEnabled: props.tradingPolicy.fractionalSharesEnabled !== undefined ? {
            set: props.tradingPolicy.fractionalSharesEnabled
          } : undefined,
        assetUniversePrefs: props.tradingPolicy.assetUniversePrefs !== undefined ? {
            set: props.tradingPolicy.assetUniversePrefs
          } : undefined,
        maxBuyingPowerUtilPct: props.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? {
            set: props.tradingPolicy.maxBuyingPowerUtilPct
          } : undefined,
        cashFloorPct: props.tradingPolicy.cashFloorPct !== undefined ? {
            set: props.tradingPolicy.cashFloorPct
          } : undefined,
        maxGrossExposurePct: props.tradingPolicy.maxGrossExposurePct !== undefined ? {
            set: props.tradingPolicy.maxGrossExposurePct
          } : undefined,
        maxNetExposurePct: props.tradingPolicy.maxNetExposurePct !== undefined ? {
            set: props.tradingPolicy.maxNetExposurePct
          } : undefined,
        maxLeverage: props.tradingPolicy.maxLeverage !== undefined ? {
            set: props.tradingPolicy.maxLeverage
          } : undefined,
        maxSymbolConcentrationPct: props.tradingPolicy.maxSymbolConcentrationPct !== undefined ? {
            set: props.tradingPolicy.maxSymbolConcentrationPct
          } : undefined,
        maxSectorConcentrationPct: props.tradingPolicy.maxSectorConcentrationPct !== undefined ? {
            set: props.tradingPolicy.maxSectorConcentrationPct
          } : undefined,
        maxOpenPositions: props.tradingPolicy.maxOpenPositions !== undefined ? {
            set: props.tradingPolicy.maxOpenPositions
          } : undefined,
        maxOpenOrders: props.tradingPolicy.maxOpenOrders !== undefined ? {
            set: props.tradingPolicy.maxOpenOrders
          } : undefined,
        riskBudgetPrefs: props.tradingPolicy.riskBudgetPrefs !== undefined ? {
            set: props.tradingPolicy.riskBudgetPrefs
          } : undefined,
        signalConsumptionPrefs: props.tradingPolicy.signalConsumptionPrefs !== undefined ? {
            set: props.tradingPolicy.signalConsumptionPrefs
          } : undefined,
        executionPrefs: props.tradingPolicy.executionPrefs !== undefined ? {
            set: props.tradingPolicy.executionPrefs
          } : undefined,
        positionManagementPrefs: props.tradingPolicy.positionManagementPrefs !== undefined ? {
            set: props.tradingPolicy.positionManagementPrefs
          } : undefined,
        portfolioConstructionPrefs: props.tradingPolicy.portfolioConstructionPrefs !== undefined ? {
            set: props.tradingPolicy.portfolioConstructionPrefs
          } : undefined,
        macroOverlayEnabled: props.tradingPolicy.macroOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.macroOverlayEnabled
          } : undefined,
        sectorOverlayEnabled: props.tradingPolicy.sectorOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.sectorOverlayEnabled
          } : undefined,
        volatilityOverlayEnabled: props.tradingPolicy.volatilityOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.volatilityOverlayEnabled
          } : undefined,
        liquidityStressOverlayEnabled: props.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.liquidityStressOverlayEnabled
          } : undefined,
        blackSwanProtectionEnabled: props.tradingPolicy.blackSwanProtectionEnabled !== undefined ? {
            set: props.tradingPolicy.blackSwanProtectionEnabled
          } : undefined,
        drawdownGuardianEnabled: props.tradingPolicy.drawdownGuardianEnabled !== undefined ? {
            set: props.tradingPolicy.drawdownGuardianEnabled
          } : undefined,
        correlationSpikeProtectionEnabled: props.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? {
            set: props.tradingPolicy.correlationSpikeProtectionEnabled
          } : undefined,
        newsEventRiskOverlayEnabled: props.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.newsEventRiskOverlayEnabled
          } : undefined,
        exchangeHealthOverlayEnabled: props.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.exchangeHealthOverlayEnabled
          } : undefined,
        dataQualitySentinelEnabled: props.tradingPolicy.dataQualitySentinelEnabled !== undefined ? {
            set: props.tradingPolicy.dataQualitySentinelEnabled
          } : undefined,
        overlayResponsePrefs: props.tradingPolicy.overlayResponsePrefs !== undefined ? {
            set: props.tradingPolicy.overlayResponsePrefs
          } : undefined,
        miniModelProvider: props.tradingPolicy.miniModelProvider !== undefined ? {
            set: props.tradingPolicy.miniModelProvider
          } : undefined,
        miniModelId: props.tradingPolicy.miniModelId !== undefined ? {
            set: props.tradingPolicy.miniModelId
          } : undefined,
        normalModelProvider: props.tradingPolicy.normalModelProvider !== undefined ? {
            set: props.tradingPolicy.normalModelProvider
          } : undefined,
        normalModelId: props.tradingPolicy.normalModelId !== undefined ? {
            set: props.tradingPolicy.normalModelId
          } : undefined,
        advancedModelProvider: props.tradingPolicy.advancedModelProvider !== undefined ? {
            set: props.tradingPolicy.advancedModelProvider
          } : undefined,
        advancedModelId: props.tradingPolicy.advancedModelId !== undefined ? {
            set: props.tradingPolicy.advancedModelId
          } : undefined,
        modelPrefs: props.tradingPolicy.modelPrefs !== undefined ? {
            set: props.tradingPolicy.modelPrefs
          } : undefined,
        auditNotificationPrefs: props.tradingPolicy.auditNotificationPrefs !== undefined ? {
            set: props.tradingPolicy.auditNotificationPrefs
          } : undefined,
    overlays: props.tradingPolicy.overlays ? 
    Array.isArray(props.tradingPolicy.overlays) && props.tradingPolicy.overlays.length > 0 && props.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.tradingPolicy.overlays.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.tradingPolicy.overlays.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          tradingPolicyId: item.tradingPolicyId !== undefined ? {
              equals: item.tradingPolicyId
            } : undefined,
          status: item.status !== undefined ? {
              equals: item.status
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
        version: props.tradingPolicy.version !== undefined ? props.tradingPolicy.version : undefined,
        lastModifiedBy: props.tradingPolicy.lastModifiedBy !== undefined ? props.tradingPolicy.lastModifiedBy : undefined,
        lastModifiedAt: props.tradingPolicy.lastModifiedAt !== undefined ? props.tradingPolicy.lastModifiedAt : undefined,
        autonomyMode: props.tradingPolicy.autonomyMode !== undefined ? props.tradingPolicy.autonomyMode : undefined,
        realtimeTradingEnabled: props.tradingPolicy.realtimeTradingEnabled !== undefined ? props.tradingPolicy.realtimeTradingEnabled : undefined,
        paperTradingOnly: props.tradingPolicy.paperTradingOnly !== undefined ? props.tradingPolicy.paperTradingOnly : undefined,
        killSwitchEnabled: props.tradingPolicy.killSwitchEnabled !== undefined ? props.tradingPolicy.killSwitchEnabled : undefined,
        autonomyPrefs: props.tradingPolicy.autonomyPrefs !== undefined ? props.tradingPolicy.autonomyPrefs : undefined,
        equitiesEnabled: props.tradingPolicy.equitiesEnabled !== undefined ? props.tradingPolicy.equitiesEnabled : undefined,
        etfsEnabled: props.tradingPolicy.etfsEnabled !== undefined ? props.tradingPolicy.etfsEnabled : undefined,
        cryptoEnabled: props.tradingPolicy.cryptoEnabled !== undefined ? props.tradingPolicy.cryptoEnabled : undefined,
        optionsEnabled: props.tradingPolicy.optionsEnabled !== undefined ? props.tradingPolicy.optionsEnabled : undefined,
        futuresEnabled: props.tradingPolicy.futuresEnabled !== undefined ? props.tradingPolicy.futuresEnabled : undefined,
        forexEnabled: props.tradingPolicy.forexEnabled !== undefined ? props.tradingPolicy.forexEnabled : undefined,
        shortingEnabled: props.tradingPolicy.shortingEnabled !== undefined ? props.tradingPolicy.shortingEnabled : undefined,
        marginEnabled: props.tradingPolicy.marginEnabled !== undefined ? props.tradingPolicy.marginEnabled : undefined,
        fractionalSharesEnabled: props.tradingPolicy.fractionalSharesEnabled !== undefined ? props.tradingPolicy.fractionalSharesEnabled : undefined,
        assetUniversePrefs: props.tradingPolicy.assetUniversePrefs !== undefined ? props.tradingPolicy.assetUniversePrefs : undefined,
        maxBuyingPowerUtilPct: props.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? props.tradingPolicy.maxBuyingPowerUtilPct : undefined,
        cashFloorPct: props.tradingPolicy.cashFloorPct !== undefined ? props.tradingPolicy.cashFloorPct : undefined,
        maxGrossExposurePct: props.tradingPolicy.maxGrossExposurePct !== undefined ? props.tradingPolicy.maxGrossExposurePct : undefined,
        maxNetExposurePct: props.tradingPolicy.maxNetExposurePct !== undefined ? props.tradingPolicy.maxNetExposurePct : undefined,
        maxLeverage: props.tradingPolicy.maxLeverage !== undefined ? props.tradingPolicy.maxLeverage : undefined,
        maxSymbolConcentrationPct: props.tradingPolicy.maxSymbolConcentrationPct !== undefined ? props.tradingPolicy.maxSymbolConcentrationPct : undefined,
        maxSectorConcentrationPct: props.tradingPolicy.maxSectorConcentrationPct !== undefined ? props.tradingPolicy.maxSectorConcentrationPct : undefined,
        maxOpenPositions: props.tradingPolicy.maxOpenPositions !== undefined ? props.tradingPolicy.maxOpenPositions : undefined,
        maxOpenOrders: props.tradingPolicy.maxOpenOrders !== undefined ? props.tradingPolicy.maxOpenOrders : undefined,
        riskBudgetPrefs: props.tradingPolicy.riskBudgetPrefs !== undefined ? props.tradingPolicy.riskBudgetPrefs : undefined,
        signalConsumptionPrefs: props.tradingPolicy.signalConsumptionPrefs !== undefined ? props.tradingPolicy.signalConsumptionPrefs : undefined,
        executionPrefs: props.tradingPolicy.executionPrefs !== undefined ? props.tradingPolicy.executionPrefs : undefined,
        positionManagementPrefs: props.tradingPolicy.positionManagementPrefs !== undefined ? props.tradingPolicy.positionManagementPrefs : undefined,
        portfolioConstructionPrefs: props.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.tradingPolicy.portfolioConstructionPrefs : undefined,
        macroOverlayEnabled: props.tradingPolicy.macroOverlayEnabled !== undefined ? props.tradingPolicy.macroOverlayEnabled : undefined,
        sectorOverlayEnabled: props.tradingPolicy.sectorOverlayEnabled !== undefined ? props.tradingPolicy.sectorOverlayEnabled : undefined,
        volatilityOverlayEnabled: props.tradingPolicy.volatilityOverlayEnabled !== undefined ? props.tradingPolicy.volatilityOverlayEnabled : undefined,
        liquidityStressOverlayEnabled: props.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? props.tradingPolicy.liquidityStressOverlayEnabled : undefined,
        blackSwanProtectionEnabled: props.tradingPolicy.blackSwanProtectionEnabled !== undefined ? props.tradingPolicy.blackSwanProtectionEnabled : undefined,
        drawdownGuardianEnabled: props.tradingPolicy.drawdownGuardianEnabled !== undefined ? props.tradingPolicy.drawdownGuardianEnabled : undefined,
        correlationSpikeProtectionEnabled: props.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? props.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
        newsEventRiskOverlayEnabled: props.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? props.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
        exchangeHealthOverlayEnabled: props.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? props.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
        dataQualitySentinelEnabled: props.tradingPolicy.dataQualitySentinelEnabled !== undefined ? props.tradingPolicy.dataQualitySentinelEnabled : undefined,
        overlayResponsePrefs: props.tradingPolicy.overlayResponsePrefs !== undefined ? props.tradingPolicy.overlayResponsePrefs : undefined,
        miniModelProvider: props.tradingPolicy.miniModelProvider !== undefined ? props.tradingPolicy.miniModelProvider : undefined,
        miniModelId: props.tradingPolicy.miniModelId !== undefined ? props.tradingPolicy.miniModelId : undefined,
        normalModelProvider: props.tradingPolicy.normalModelProvider !== undefined ? props.tradingPolicy.normalModelProvider : undefined,
        normalModelId: props.tradingPolicy.normalModelId !== undefined ? props.tradingPolicy.normalModelId : undefined,
        advancedModelProvider: props.tradingPolicy.advancedModelProvider !== undefined ? props.tradingPolicy.advancedModelProvider : undefined,
        advancedModelId: props.tradingPolicy.advancedModelId !== undefined ? props.tradingPolicy.advancedModelId : undefined,
        modelPrefs: props.tradingPolicy.modelPrefs !== undefined ? props.tradingPolicy.modelPrefs : undefined,
        auditNotificationPrefs: props.tradingPolicy.auditNotificationPrefs !== undefined ? props.tradingPolicy.auditNotificationPrefs : undefined,
    overlays: props.tradingPolicy.overlays ? 
      Array.isArray(props.tradingPolicy.overlays) && props.tradingPolicy.overlays.length > 0 &&  props.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.tradingPolicy.overlays.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.tradingPolicy.overlays.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          tradingPolicyId: item.tradingPolicyId !== undefined ? {
              equals: item.tradingPolicyId 
             } : undefined,
          status: item.status !== undefined ? {
              equals: item.status 
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
        currentAccount: props.user.currentAccount !== undefined ? {
            set: props.user.currentAccount
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
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
    Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 && props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.reviewedWaitlistEntries.map((item: any) => ({
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
    llmConfiguration: props.user.llmConfiguration ? 
    typeof props.user.llmConfiguration === 'object' && Object.keys(props.user.llmConfiguration).length === 1 && (Object.keys(props.user.llmConfiguration)[0] === 'id' || Object.keys(props.user.llmConfiguration)[0] === 'symbol')
? {
    connect: {
      id: props.user.llmConfiguration.id
    }
} : { upsert: {
        where: {
          id: props.user.llmConfiguration.id !== undefined ? {
              equals: props.user.llmConfiguration.id
            } : undefined,
          userId: props.user.llmConfiguration.userId !== undefined ? {
              equals: props.user.llmConfiguration.userId
            } : undefined,
        },
        update: {
          id: props.user.llmConfiguration.id !== undefined ? {
              set: props.user.llmConfiguration.id
            } : undefined,
          defaultProvider: props.user.llmConfiguration.defaultProvider !== undefined ? {
              set: props.user.llmConfiguration.defaultProvider
            } : undefined,
          miniProvider: props.user.llmConfiguration.miniProvider !== undefined ? {
              set: props.user.llmConfiguration.miniProvider
            } : undefined,
          normalProvider: props.user.llmConfiguration.normalProvider !== undefined ? {
              set: props.user.llmConfiguration.normalProvider
            } : undefined,
          advancedProvider: props.user.llmConfiguration.advancedProvider !== undefined ? {
              set: props.user.llmConfiguration.advancedProvider
            } : undefined,
          miniModel: props.user.llmConfiguration.miniModel !== undefined ? {
              set: props.user.llmConfiguration.miniModel
            } : undefined,
          normalModel: props.user.llmConfiguration.normalModel !== undefined ? {
              set: props.user.llmConfiguration.normalModel
            } : undefined,
          advancedModel: props.user.llmConfiguration.advancedModel !== undefined ? {
              set: props.user.llmConfiguration.advancedModel
            } : undefined,
          openaiApiKey: props.user.llmConfiguration.openaiApiKey !== undefined ? {
              set: props.user.llmConfiguration.openaiApiKey
            } : undefined,
          anthropicApiKey: props.user.llmConfiguration.anthropicApiKey !== undefined ? {
              set: props.user.llmConfiguration.anthropicApiKey
            } : undefined,
          deepseekApiKey: props.user.llmConfiguration.deepseekApiKey !== undefined ? {
              set: props.user.llmConfiguration.deepseekApiKey
            } : undefined,
          kimiApiKey: props.user.llmConfiguration.kimiApiKey !== undefined ? {
              set: props.user.llmConfiguration.kimiApiKey
            } : undefined,
          qwenApiKey: props.user.llmConfiguration.qwenApiKey !== undefined ? {
              set: props.user.llmConfiguration.qwenApiKey
            } : undefined,
          xaiApiKey: props.user.llmConfiguration.xaiApiKey !== undefined ? {
              set: props.user.llmConfiguration.xaiApiKey
            } : undefined,
          geminiApiKey: props.user.llmConfiguration.geminiApiKey !== undefined ? {
              set: props.user.llmConfiguration.geminiApiKey
            } : undefined,
        },
        create: {
          defaultProvider: props.user.llmConfiguration.defaultProvider !== undefined ? props.user.llmConfiguration.defaultProvider : undefined,
          miniProvider: props.user.llmConfiguration.miniProvider !== undefined ? props.user.llmConfiguration.miniProvider : undefined,
          normalProvider: props.user.llmConfiguration.normalProvider !== undefined ? props.user.llmConfiguration.normalProvider : undefined,
          advancedProvider: props.user.llmConfiguration.advancedProvider !== undefined ? props.user.llmConfiguration.advancedProvider : undefined,
          miniModel: props.user.llmConfiguration.miniModel !== undefined ? props.user.llmConfiguration.miniModel : undefined,
          normalModel: props.user.llmConfiguration.normalModel !== undefined ? props.user.llmConfiguration.normalModel : undefined,
          advancedModel: props.user.llmConfiguration.advancedModel !== undefined ? props.user.llmConfiguration.advancedModel : undefined,
          openaiApiKey: props.user.llmConfiguration.openaiApiKey !== undefined ? props.user.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: props.user.llmConfiguration.anthropicApiKey !== undefined ? props.user.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: props.user.llmConfiguration.deepseekApiKey !== undefined ? props.user.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: props.user.llmConfiguration.kimiApiKey !== undefined ? props.user.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: props.user.llmConfiguration.qwenApiKey !== undefined ? props.user.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: props.user.llmConfiguration.xaiApiKey !== undefined ? props.user.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: props.user.llmConfiguration.geminiApiKey !== undefined ? props.user.llmConfiguration.geminiApiKey : undefined,
        },
      }
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
        currentAccount: props.user.currentAccount !== undefined ? props.user.currentAccount : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
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
    llmConfiguration: props.user.llmConfiguration ? 
      typeof props.user.llmConfiguration === 'object' && Object.keys(props.user.llmConfiguration).length === 1 && Object.keys(props.user.llmConfiguration)[0] === 'id'
    ? { connect: {
          id: props.user.llmConfiguration.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.llmConfiguration.id !== undefined ? props.user.llmConfiguration.id : undefined,
          userId: props.user.llmConfiguration.userId !== undefined ? props.user.llmConfiguration.userId : undefined,
        },
        create: {
          defaultProvider: props.user.llmConfiguration.defaultProvider !== undefined ? props.user.llmConfiguration.defaultProvider : undefined,
          miniProvider: props.user.llmConfiguration.miniProvider !== undefined ? props.user.llmConfiguration.miniProvider : undefined,
          normalProvider: props.user.llmConfiguration.normalProvider !== undefined ? props.user.llmConfiguration.normalProvider : undefined,
          advancedProvider: props.user.llmConfiguration.advancedProvider !== undefined ? props.user.llmConfiguration.advancedProvider : undefined,
          miniModel: props.user.llmConfiguration.miniModel !== undefined ? props.user.llmConfiguration.miniModel : undefined,
          normalModel: props.user.llmConfiguration.normalModel !== undefined ? props.user.llmConfiguration.normalModel : undefined,
          advancedModel: props.user.llmConfiguration.advancedModel !== undefined ? props.user.llmConfiguration.advancedModel : undefined,
          openaiApiKey: props.user.llmConfiguration.openaiApiKey !== undefined ? props.user.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: props.user.llmConfiguration.anthropicApiKey !== undefined ? props.user.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: props.user.llmConfiguration.deepseekApiKey !== undefined ? props.user.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: props.user.llmConfiguration.kimiApiKey !== undefined ? props.user.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: props.user.llmConfiguration.qwenApiKey !== undefined ? props.user.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: props.user.llmConfiguration.xaiApiKey !== undefined ? props.user.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: props.user.llmConfiguration.geminiApiKey !== undefined ? props.user.llmConfiguration.geminiApiKey : undefined,
        },
      }
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
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_ALPACAACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneAlpacaAccount) {
          return response.data.updateOneAlpacaAccount;
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
          logger.error("Non-retryable constraint violation in updateOneAlpacaAccount", {
            operation: 'updateOneAlpacaAccount',
            model: 'AlpacaAccount',
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
          logger.warn("Database connection error in updateOneAlpacaAccount, retrying...", {
            operation: 'updateOneAlpacaAccount',
            model: 'AlpacaAccount',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database update operation failed", {
          operation: 'updateOneAlpacaAccount',
          model: 'AlpacaAccount',
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
   * Upsert a single AlpacaAccount record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated AlpacaAccount or null.
   */
  async upsert(props: AlpacaAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AlpacaAccountType> {
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

        const UPSERT_ONE_ALPACAACCOUNT = gql`
          mutation upsertOneAlpacaAccount($where: AlpacaAccountWhereUniqueInput!, $create: AlpacaAccountCreateInput!, $update: AlpacaAccountUpdateInput!) {
            upsertOneAlpacaAccount(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  type: props.type !== undefined ? {
    equals: props.type 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
      },
          create: {
        type: props.type !== undefined ? props.type : undefined,
  APIKey: props.APIKey !== undefined ? props.APIKey : undefined,
  APISecret: props.APISecret !== undefined ? props.APISecret : undefined,
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
        alpacaAccountId: props.allocation.alpacaAccountId !== undefined ? props.allocation.alpacaAccountId : undefined,
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
  tradingPolicy: props.tradingPolicy ? 
    typeof props.tradingPolicy === 'object' && Object.keys(props.tradingPolicy).length === 1 && Object.keys(props.tradingPolicy)[0] === 'id'
    ? { connect: {
        id: props.tradingPolicy.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.tradingPolicy.id !== undefined ? props.tradingPolicy.id : undefined,
        alpacaAccountId: props.tradingPolicy.alpacaAccountId !== undefined ? props.tradingPolicy.alpacaAccountId : undefined,
        miniModelId: props.tradingPolicy.miniModelId !== undefined ? {
            equals: props.tradingPolicy.miniModelId 
           } : undefined,
        normalModelId: props.tradingPolicy.normalModelId !== undefined ? {
            equals: props.tradingPolicy.normalModelId 
           } : undefined,
        advancedModelId: props.tradingPolicy.advancedModelId !== undefined ? {
            equals: props.tradingPolicy.advancedModelId 
           } : undefined,
      },
      create: {
        version: props.tradingPolicy.version !== undefined ? props.tradingPolicy.version : undefined,
        lastModifiedBy: props.tradingPolicy.lastModifiedBy !== undefined ? props.tradingPolicy.lastModifiedBy : undefined,
        lastModifiedAt: props.tradingPolicy.lastModifiedAt !== undefined ? props.tradingPolicy.lastModifiedAt : undefined,
        autonomyMode: props.tradingPolicy.autonomyMode !== undefined ? props.tradingPolicy.autonomyMode : undefined,
        realtimeTradingEnabled: props.tradingPolicy.realtimeTradingEnabled !== undefined ? props.tradingPolicy.realtimeTradingEnabled : undefined,
        paperTradingOnly: props.tradingPolicy.paperTradingOnly !== undefined ? props.tradingPolicy.paperTradingOnly : undefined,
        killSwitchEnabled: props.tradingPolicy.killSwitchEnabled !== undefined ? props.tradingPolicy.killSwitchEnabled : undefined,
        autonomyPrefs: props.tradingPolicy.autonomyPrefs !== undefined ? props.tradingPolicy.autonomyPrefs : undefined,
        equitiesEnabled: props.tradingPolicy.equitiesEnabled !== undefined ? props.tradingPolicy.equitiesEnabled : undefined,
        etfsEnabled: props.tradingPolicy.etfsEnabled !== undefined ? props.tradingPolicy.etfsEnabled : undefined,
        cryptoEnabled: props.tradingPolicy.cryptoEnabled !== undefined ? props.tradingPolicy.cryptoEnabled : undefined,
        optionsEnabled: props.tradingPolicy.optionsEnabled !== undefined ? props.tradingPolicy.optionsEnabled : undefined,
        futuresEnabled: props.tradingPolicy.futuresEnabled !== undefined ? props.tradingPolicy.futuresEnabled : undefined,
        forexEnabled: props.tradingPolicy.forexEnabled !== undefined ? props.tradingPolicy.forexEnabled : undefined,
        shortingEnabled: props.tradingPolicy.shortingEnabled !== undefined ? props.tradingPolicy.shortingEnabled : undefined,
        marginEnabled: props.tradingPolicy.marginEnabled !== undefined ? props.tradingPolicy.marginEnabled : undefined,
        fractionalSharesEnabled: props.tradingPolicy.fractionalSharesEnabled !== undefined ? props.tradingPolicy.fractionalSharesEnabled : undefined,
        assetUniversePrefs: props.tradingPolicy.assetUniversePrefs !== undefined ? props.tradingPolicy.assetUniversePrefs : undefined,
        maxBuyingPowerUtilPct: props.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? props.tradingPolicy.maxBuyingPowerUtilPct : undefined,
        cashFloorPct: props.tradingPolicy.cashFloorPct !== undefined ? props.tradingPolicy.cashFloorPct : undefined,
        maxGrossExposurePct: props.tradingPolicy.maxGrossExposurePct !== undefined ? props.tradingPolicy.maxGrossExposurePct : undefined,
        maxNetExposurePct: props.tradingPolicy.maxNetExposurePct !== undefined ? props.tradingPolicy.maxNetExposurePct : undefined,
        maxLeverage: props.tradingPolicy.maxLeverage !== undefined ? props.tradingPolicy.maxLeverage : undefined,
        maxSymbolConcentrationPct: props.tradingPolicy.maxSymbolConcentrationPct !== undefined ? props.tradingPolicy.maxSymbolConcentrationPct : undefined,
        maxSectorConcentrationPct: props.tradingPolicy.maxSectorConcentrationPct !== undefined ? props.tradingPolicy.maxSectorConcentrationPct : undefined,
        maxOpenPositions: props.tradingPolicy.maxOpenPositions !== undefined ? props.tradingPolicy.maxOpenPositions : undefined,
        maxOpenOrders: props.tradingPolicy.maxOpenOrders !== undefined ? props.tradingPolicy.maxOpenOrders : undefined,
        riskBudgetPrefs: props.tradingPolicy.riskBudgetPrefs !== undefined ? props.tradingPolicy.riskBudgetPrefs : undefined,
        signalConsumptionPrefs: props.tradingPolicy.signalConsumptionPrefs !== undefined ? props.tradingPolicy.signalConsumptionPrefs : undefined,
        executionPrefs: props.tradingPolicy.executionPrefs !== undefined ? props.tradingPolicy.executionPrefs : undefined,
        positionManagementPrefs: props.tradingPolicy.positionManagementPrefs !== undefined ? props.tradingPolicy.positionManagementPrefs : undefined,
        portfolioConstructionPrefs: props.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.tradingPolicy.portfolioConstructionPrefs : undefined,
        macroOverlayEnabled: props.tradingPolicy.macroOverlayEnabled !== undefined ? props.tradingPolicy.macroOverlayEnabled : undefined,
        sectorOverlayEnabled: props.tradingPolicy.sectorOverlayEnabled !== undefined ? props.tradingPolicy.sectorOverlayEnabled : undefined,
        volatilityOverlayEnabled: props.tradingPolicy.volatilityOverlayEnabled !== undefined ? props.tradingPolicy.volatilityOverlayEnabled : undefined,
        liquidityStressOverlayEnabled: props.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? props.tradingPolicy.liquidityStressOverlayEnabled : undefined,
        blackSwanProtectionEnabled: props.tradingPolicy.blackSwanProtectionEnabled !== undefined ? props.tradingPolicy.blackSwanProtectionEnabled : undefined,
        drawdownGuardianEnabled: props.tradingPolicy.drawdownGuardianEnabled !== undefined ? props.tradingPolicy.drawdownGuardianEnabled : undefined,
        correlationSpikeProtectionEnabled: props.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? props.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
        newsEventRiskOverlayEnabled: props.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? props.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
        exchangeHealthOverlayEnabled: props.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? props.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
        dataQualitySentinelEnabled: props.tradingPolicy.dataQualitySentinelEnabled !== undefined ? props.tradingPolicy.dataQualitySentinelEnabled : undefined,
        overlayResponsePrefs: props.tradingPolicy.overlayResponsePrefs !== undefined ? props.tradingPolicy.overlayResponsePrefs : undefined,
        miniModelProvider: props.tradingPolicy.miniModelProvider !== undefined ? props.tradingPolicy.miniModelProvider : undefined,
        miniModelId: props.tradingPolicy.miniModelId !== undefined ? props.tradingPolicy.miniModelId : undefined,
        normalModelProvider: props.tradingPolicy.normalModelProvider !== undefined ? props.tradingPolicy.normalModelProvider : undefined,
        normalModelId: props.tradingPolicy.normalModelId !== undefined ? props.tradingPolicy.normalModelId : undefined,
        advancedModelProvider: props.tradingPolicy.advancedModelProvider !== undefined ? props.tradingPolicy.advancedModelProvider : undefined,
        advancedModelId: props.tradingPolicy.advancedModelId !== undefined ? props.tradingPolicy.advancedModelId : undefined,
        modelPrefs: props.tradingPolicy.modelPrefs !== undefined ? props.tradingPolicy.modelPrefs : undefined,
        auditNotificationPrefs: props.tradingPolicy.auditNotificationPrefs !== undefined ? props.tradingPolicy.auditNotificationPrefs : undefined,
    overlays: props.tradingPolicy.overlays ? 
      Array.isArray(props.tradingPolicy.overlays) && props.tradingPolicy.overlays.length > 0 &&  props.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.tradingPolicy.overlays.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.tradingPolicy.overlays.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          tradingPolicyId: item.tradingPolicyId !== undefined ? {
              equals: item.tradingPolicyId 
             } : undefined,
          status: item.status !== undefined ? {
              equals: item.status 
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
        currentAccount: props.user.currentAccount !== undefined ? props.user.currentAccount : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
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
    llmConfiguration: props.user.llmConfiguration ? 
      typeof props.user.llmConfiguration === 'object' && Object.keys(props.user.llmConfiguration).length === 1 && Object.keys(props.user.llmConfiguration)[0] === 'id'
    ? { connect: {
          id: props.user.llmConfiguration.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.llmConfiguration.id !== undefined ? props.user.llmConfiguration.id : undefined,
          userId: props.user.llmConfiguration.userId !== undefined ? props.user.llmConfiguration.userId : undefined,
        },
        create: {
          defaultProvider: props.user.llmConfiguration.defaultProvider !== undefined ? props.user.llmConfiguration.defaultProvider : undefined,
          miniProvider: props.user.llmConfiguration.miniProvider !== undefined ? props.user.llmConfiguration.miniProvider : undefined,
          normalProvider: props.user.llmConfiguration.normalProvider !== undefined ? props.user.llmConfiguration.normalProvider : undefined,
          advancedProvider: props.user.llmConfiguration.advancedProvider !== undefined ? props.user.llmConfiguration.advancedProvider : undefined,
          miniModel: props.user.llmConfiguration.miniModel !== undefined ? props.user.llmConfiguration.miniModel : undefined,
          normalModel: props.user.llmConfiguration.normalModel !== undefined ? props.user.llmConfiguration.normalModel : undefined,
          advancedModel: props.user.llmConfiguration.advancedModel !== undefined ? props.user.llmConfiguration.advancedModel : undefined,
          openaiApiKey: props.user.llmConfiguration.openaiApiKey !== undefined ? props.user.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: props.user.llmConfiguration.anthropicApiKey !== undefined ? props.user.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: props.user.llmConfiguration.deepseekApiKey !== undefined ? props.user.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: props.user.llmConfiguration.kimiApiKey !== undefined ? props.user.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: props.user.llmConfiguration.qwenApiKey !== undefined ? props.user.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: props.user.llmConfiguration.xaiApiKey !== undefined ? props.user.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: props.user.llmConfiguration.geminiApiKey !== undefined ? props.user.llmConfiguration.geminiApiKey : undefined,
        },
      }
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
          update: {
      type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  APIKey: props.APIKey !== undefined ? {
            set: props.APIKey 
           } : undefined,
  APISecret: props.APISecret !== undefined ? {
            set: props.APISecret 
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
        alpacaAccountId: props.allocation.alpacaAccountId !== undefined ? {
            equals: props.allocation.alpacaAccountId
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
  tradingPolicy: props.tradingPolicy ? 
  typeof props.tradingPolicy === 'object' && Object.keys(props.tradingPolicy).length === 1 && (Object.keys(props.tradingPolicy)[0] === 'id' || Object.keys(props.tradingPolicy)[0] === 'symbol')
? {
  connect: {
    id: props.tradingPolicy.id
  }
} : { upsert: {
      where: {
        id: props.tradingPolicy.id !== undefined ? {
            equals: props.tradingPolicy.id
          } : undefined,
        alpacaAccountId: props.tradingPolicy.alpacaAccountId !== undefined ? {
            equals: props.tradingPolicy.alpacaAccountId
          } : undefined,
        miniModelId: props.tradingPolicy.miniModelId !== undefined ? {
            equals: props.tradingPolicy.miniModelId
          } : undefined,
        normalModelId: props.tradingPolicy.normalModelId !== undefined ? {
            equals: props.tradingPolicy.normalModelId
          } : undefined,
        advancedModelId: props.tradingPolicy.advancedModelId !== undefined ? {
            equals: props.tradingPolicy.advancedModelId
          } : undefined,
      },
      update: {
        id: props.tradingPolicy.id !== undefined ? {
            set: props.tradingPolicy.id
          } : undefined,
        version: props.tradingPolicy.version !== undefined ? {
            set: props.tradingPolicy.version
          } : undefined,
        lastModifiedBy: props.tradingPolicy.lastModifiedBy !== undefined ? {
            set: props.tradingPolicy.lastModifiedBy
          } : undefined,
        lastModifiedAt: props.tradingPolicy.lastModifiedAt !== undefined ? {
            set: props.tradingPolicy.lastModifiedAt
          } : undefined,
        autonomyMode: props.tradingPolicy.autonomyMode !== undefined ? {
            set: props.tradingPolicy.autonomyMode
          } : undefined,
        realtimeTradingEnabled: props.tradingPolicy.realtimeTradingEnabled !== undefined ? {
            set: props.tradingPolicy.realtimeTradingEnabled
          } : undefined,
        paperTradingOnly: props.tradingPolicy.paperTradingOnly !== undefined ? {
            set: props.tradingPolicy.paperTradingOnly
          } : undefined,
        killSwitchEnabled: props.tradingPolicy.killSwitchEnabled !== undefined ? {
            set: props.tradingPolicy.killSwitchEnabled
          } : undefined,
        autonomyPrefs: props.tradingPolicy.autonomyPrefs !== undefined ? {
            set: props.tradingPolicy.autonomyPrefs
          } : undefined,
        equitiesEnabled: props.tradingPolicy.equitiesEnabled !== undefined ? {
            set: props.tradingPolicy.equitiesEnabled
          } : undefined,
        etfsEnabled: props.tradingPolicy.etfsEnabled !== undefined ? {
            set: props.tradingPolicy.etfsEnabled
          } : undefined,
        cryptoEnabled: props.tradingPolicy.cryptoEnabled !== undefined ? {
            set: props.tradingPolicy.cryptoEnabled
          } : undefined,
        optionsEnabled: props.tradingPolicy.optionsEnabled !== undefined ? {
            set: props.tradingPolicy.optionsEnabled
          } : undefined,
        futuresEnabled: props.tradingPolicy.futuresEnabled !== undefined ? {
            set: props.tradingPolicy.futuresEnabled
          } : undefined,
        forexEnabled: props.tradingPolicy.forexEnabled !== undefined ? {
            set: props.tradingPolicy.forexEnabled
          } : undefined,
        shortingEnabled: props.tradingPolicy.shortingEnabled !== undefined ? {
            set: props.tradingPolicy.shortingEnabled
          } : undefined,
        marginEnabled: props.tradingPolicy.marginEnabled !== undefined ? {
            set: props.tradingPolicy.marginEnabled
          } : undefined,
        fractionalSharesEnabled: props.tradingPolicy.fractionalSharesEnabled !== undefined ? {
            set: props.tradingPolicy.fractionalSharesEnabled
          } : undefined,
        assetUniversePrefs: props.tradingPolicy.assetUniversePrefs !== undefined ? {
            set: props.tradingPolicy.assetUniversePrefs
          } : undefined,
        maxBuyingPowerUtilPct: props.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? {
            set: props.tradingPolicy.maxBuyingPowerUtilPct
          } : undefined,
        cashFloorPct: props.tradingPolicy.cashFloorPct !== undefined ? {
            set: props.tradingPolicy.cashFloorPct
          } : undefined,
        maxGrossExposurePct: props.tradingPolicy.maxGrossExposurePct !== undefined ? {
            set: props.tradingPolicy.maxGrossExposurePct
          } : undefined,
        maxNetExposurePct: props.tradingPolicy.maxNetExposurePct !== undefined ? {
            set: props.tradingPolicy.maxNetExposurePct
          } : undefined,
        maxLeverage: props.tradingPolicy.maxLeverage !== undefined ? {
            set: props.tradingPolicy.maxLeverage
          } : undefined,
        maxSymbolConcentrationPct: props.tradingPolicy.maxSymbolConcentrationPct !== undefined ? {
            set: props.tradingPolicy.maxSymbolConcentrationPct
          } : undefined,
        maxSectorConcentrationPct: props.tradingPolicy.maxSectorConcentrationPct !== undefined ? {
            set: props.tradingPolicy.maxSectorConcentrationPct
          } : undefined,
        maxOpenPositions: props.tradingPolicy.maxOpenPositions !== undefined ? {
            set: props.tradingPolicy.maxOpenPositions
          } : undefined,
        maxOpenOrders: props.tradingPolicy.maxOpenOrders !== undefined ? {
            set: props.tradingPolicy.maxOpenOrders
          } : undefined,
        riskBudgetPrefs: props.tradingPolicy.riskBudgetPrefs !== undefined ? {
            set: props.tradingPolicy.riskBudgetPrefs
          } : undefined,
        signalConsumptionPrefs: props.tradingPolicy.signalConsumptionPrefs !== undefined ? {
            set: props.tradingPolicy.signalConsumptionPrefs
          } : undefined,
        executionPrefs: props.tradingPolicy.executionPrefs !== undefined ? {
            set: props.tradingPolicy.executionPrefs
          } : undefined,
        positionManagementPrefs: props.tradingPolicy.positionManagementPrefs !== undefined ? {
            set: props.tradingPolicy.positionManagementPrefs
          } : undefined,
        portfolioConstructionPrefs: props.tradingPolicy.portfolioConstructionPrefs !== undefined ? {
            set: props.tradingPolicy.portfolioConstructionPrefs
          } : undefined,
        macroOverlayEnabled: props.tradingPolicy.macroOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.macroOverlayEnabled
          } : undefined,
        sectorOverlayEnabled: props.tradingPolicy.sectorOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.sectorOverlayEnabled
          } : undefined,
        volatilityOverlayEnabled: props.tradingPolicy.volatilityOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.volatilityOverlayEnabled
          } : undefined,
        liquidityStressOverlayEnabled: props.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.liquidityStressOverlayEnabled
          } : undefined,
        blackSwanProtectionEnabled: props.tradingPolicy.blackSwanProtectionEnabled !== undefined ? {
            set: props.tradingPolicy.blackSwanProtectionEnabled
          } : undefined,
        drawdownGuardianEnabled: props.tradingPolicy.drawdownGuardianEnabled !== undefined ? {
            set: props.tradingPolicy.drawdownGuardianEnabled
          } : undefined,
        correlationSpikeProtectionEnabled: props.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? {
            set: props.tradingPolicy.correlationSpikeProtectionEnabled
          } : undefined,
        newsEventRiskOverlayEnabled: props.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.newsEventRiskOverlayEnabled
          } : undefined,
        exchangeHealthOverlayEnabled: props.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? {
            set: props.tradingPolicy.exchangeHealthOverlayEnabled
          } : undefined,
        dataQualitySentinelEnabled: props.tradingPolicy.dataQualitySentinelEnabled !== undefined ? {
            set: props.tradingPolicy.dataQualitySentinelEnabled
          } : undefined,
        overlayResponsePrefs: props.tradingPolicy.overlayResponsePrefs !== undefined ? {
            set: props.tradingPolicy.overlayResponsePrefs
          } : undefined,
        miniModelProvider: props.tradingPolicy.miniModelProvider !== undefined ? {
            set: props.tradingPolicy.miniModelProvider
          } : undefined,
        miniModelId: props.tradingPolicy.miniModelId !== undefined ? {
            set: props.tradingPolicy.miniModelId
          } : undefined,
        normalModelProvider: props.tradingPolicy.normalModelProvider !== undefined ? {
            set: props.tradingPolicy.normalModelProvider
          } : undefined,
        normalModelId: props.tradingPolicy.normalModelId !== undefined ? {
            set: props.tradingPolicy.normalModelId
          } : undefined,
        advancedModelProvider: props.tradingPolicy.advancedModelProvider !== undefined ? {
            set: props.tradingPolicy.advancedModelProvider
          } : undefined,
        advancedModelId: props.tradingPolicy.advancedModelId !== undefined ? {
            set: props.tradingPolicy.advancedModelId
          } : undefined,
        modelPrefs: props.tradingPolicy.modelPrefs !== undefined ? {
            set: props.tradingPolicy.modelPrefs
          } : undefined,
        auditNotificationPrefs: props.tradingPolicy.auditNotificationPrefs !== undefined ? {
            set: props.tradingPolicy.auditNotificationPrefs
          } : undefined,
    overlays: props.tradingPolicy.overlays ? 
    Array.isArray(props.tradingPolicy.overlays) && props.tradingPolicy.overlays.length > 0 && props.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.tradingPolicy.overlays.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.tradingPolicy.overlays.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          tradingPolicyId: item.tradingPolicyId !== undefined ? {
              equals: item.tradingPolicyId
            } : undefined,
          status: item.status !== undefined ? {
              equals: item.status
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
        version: props.tradingPolicy.version !== undefined ? props.tradingPolicy.version : undefined,
        lastModifiedBy: props.tradingPolicy.lastModifiedBy !== undefined ? props.tradingPolicy.lastModifiedBy : undefined,
        lastModifiedAt: props.tradingPolicy.lastModifiedAt !== undefined ? props.tradingPolicy.lastModifiedAt : undefined,
        autonomyMode: props.tradingPolicy.autonomyMode !== undefined ? props.tradingPolicy.autonomyMode : undefined,
        realtimeTradingEnabled: props.tradingPolicy.realtimeTradingEnabled !== undefined ? props.tradingPolicy.realtimeTradingEnabled : undefined,
        paperTradingOnly: props.tradingPolicy.paperTradingOnly !== undefined ? props.tradingPolicy.paperTradingOnly : undefined,
        killSwitchEnabled: props.tradingPolicy.killSwitchEnabled !== undefined ? props.tradingPolicy.killSwitchEnabled : undefined,
        autonomyPrefs: props.tradingPolicy.autonomyPrefs !== undefined ? props.tradingPolicy.autonomyPrefs : undefined,
        equitiesEnabled: props.tradingPolicy.equitiesEnabled !== undefined ? props.tradingPolicy.equitiesEnabled : undefined,
        etfsEnabled: props.tradingPolicy.etfsEnabled !== undefined ? props.tradingPolicy.etfsEnabled : undefined,
        cryptoEnabled: props.tradingPolicy.cryptoEnabled !== undefined ? props.tradingPolicy.cryptoEnabled : undefined,
        optionsEnabled: props.tradingPolicy.optionsEnabled !== undefined ? props.tradingPolicy.optionsEnabled : undefined,
        futuresEnabled: props.tradingPolicy.futuresEnabled !== undefined ? props.tradingPolicy.futuresEnabled : undefined,
        forexEnabled: props.tradingPolicy.forexEnabled !== undefined ? props.tradingPolicy.forexEnabled : undefined,
        shortingEnabled: props.tradingPolicy.shortingEnabled !== undefined ? props.tradingPolicy.shortingEnabled : undefined,
        marginEnabled: props.tradingPolicy.marginEnabled !== undefined ? props.tradingPolicy.marginEnabled : undefined,
        fractionalSharesEnabled: props.tradingPolicy.fractionalSharesEnabled !== undefined ? props.tradingPolicy.fractionalSharesEnabled : undefined,
        assetUniversePrefs: props.tradingPolicy.assetUniversePrefs !== undefined ? props.tradingPolicy.assetUniversePrefs : undefined,
        maxBuyingPowerUtilPct: props.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? props.tradingPolicy.maxBuyingPowerUtilPct : undefined,
        cashFloorPct: props.tradingPolicy.cashFloorPct !== undefined ? props.tradingPolicy.cashFloorPct : undefined,
        maxGrossExposurePct: props.tradingPolicy.maxGrossExposurePct !== undefined ? props.tradingPolicy.maxGrossExposurePct : undefined,
        maxNetExposurePct: props.tradingPolicy.maxNetExposurePct !== undefined ? props.tradingPolicy.maxNetExposurePct : undefined,
        maxLeverage: props.tradingPolicy.maxLeverage !== undefined ? props.tradingPolicy.maxLeverage : undefined,
        maxSymbolConcentrationPct: props.tradingPolicy.maxSymbolConcentrationPct !== undefined ? props.tradingPolicy.maxSymbolConcentrationPct : undefined,
        maxSectorConcentrationPct: props.tradingPolicy.maxSectorConcentrationPct !== undefined ? props.tradingPolicy.maxSectorConcentrationPct : undefined,
        maxOpenPositions: props.tradingPolicy.maxOpenPositions !== undefined ? props.tradingPolicy.maxOpenPositions : undefined,
        maxOpenOrders: props.tradingPolicy.maxOpenOrders !== undefined ? props.tradingPolicy.maxOpenOrders : undefined,
        riskBudgetPrefs: props.tradingPolicy.riskBudgetPrefs !== undefined ? props.tradingPolicy.riskBudgetPrefs : undefined,
        signalConsumptionPrefs: props.tradingPolicy.signalConsumptionPrefs !== undefined ? props.tradingPolicy.signalConsumptionPrefs : undefined,
        executionPrefs: props.tradingPolicy.executionPrefs !== undefined ? props.tradingPolicy.executionPrefs : undefined,
        positionManagementPrefs: props.tradingPolicy.positionManagementPrefs !== undefined ? props.tradingPolicy.positionManagementPrefs : undefined,
        portfolioConstructionPrefs: props.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.tradingPolicy.portfolioConstructionPrefs : undefined,
        macroOverlayEnabled: props.tradingPolicy.macroOverlayEnabled !== undefined ? props.tradingPolicy.macroOverlayEnabled : undefined,
        sectorOverlayEnabled: props.tradingPolicy.sectorOverlayEnabled !== undefined ? props.tradingPolicy.sectorOverlayEnabled : undefined,
        volatilityOverlayEnabled: props.tradingPolicy.volatilityOverlayEnabled !== undefined ? props.tradingPolicy.volatilityOverlayEnabled : undefined,
        liquidityStressOverlayEnabled: props.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? props.tradingPolicy.liquidityStressOverlayEnabled : undefined,
        blackSwanProtectionEnabled: props.tradingPolicy.blackSwanProtectionEnabled !== undefined ? props.tradingPolicy.blackSwanProtectionEnabled : undefined,
        drawdownGuardianEnabled: props.tradingPolicy.drawdownGuardianEnabled !== undefined ? props.tradingPolicy.drawdownGuardianEnabled : undefined,
        correlationSpikeProtectionEnabled: props.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? props.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
        newsEventRiskOverlayEnabled: props.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? props.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
        exchangeHealthOverlayEnabled: props.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? props.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
        dataQualitySentinelEnabled: props.tradingPolicy.dataQualitySentinelEnabled !== undefined ? props.tradingPolicy.dataQualitySentinelEnabled : undefined,
        overlayResponsePrefs: props.tradingPolicy.overlayResponsePrefs !== undefined ? props.tradingPolicy.overlayResponsePrefs : undefined,
        miniModelProvider: props.tradingPolicy.miniModelProvider !== undefined ? props.tradingPolicy.miniModelProvider : undefined,
        miniModelId: props.tradingPolicy.miniModelId !== undefined ? props.tradingPolicy.miniModelId : undefined,
        normalModelProvider: props.tradingPolicy.normalModelProvider !== undefined ? props.tradingPolicy.normalModelProvider : undefined,
        normalModelId: props.tradingPolicy.normalModelId !== undefined ? props.tradingPolicy.normalModelId : undefined,
        advancedModelProvider: props.tradingPolicy.advancedModelProvider !== undefined ? props.tradingPolicy.advancedModelProvider : undefined,
        advancedModelId: props.tradingPolicy.advancedModelId !== undefined ? props.tradingPolicy.advancedModelId : undefined,
        modelPrefs: props.tradingPolicy.modelPrefs !== undefined ? props.tradingPolicy.modelPrefs : undefined,
        auditNotificationPrefs: props.tradingPolicy.auditNotificationPrefs !== undefined ? props.tradingPolicy.auditNotificationPrefs : undefined,
    overlays: props.tradingPolicy.overlays ? 
      Array.isArray(props.tradingPolicy.overlays) && props.tradingPolicy.overlays.length > 0 &&  props.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.tradingPolicy.overlays.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.tradingPolicy.overlays.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          tradingPolicyId: item.tradingPolicyId !== undefined ? {
              equals: item.tradingPolicyId 
             } : undefined,
          status: item.status !== undefined ? {
              equals: item.status 
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
        currentAccount: props.user.currentAccount !== undefined ? {
            set: props.user.currentAccount
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
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
    Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 && props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.reviewedWaitlistEntries.map((item: any) => ({
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
    llmConfiguration: props.user.llmConfiguration ? 
    typeof props.user.llmConfiguration === 'object' && Object.keys(props.user.llmConfiguration).length === 1 && (Object.keys(props.user.llmConfiguration)[0] === 'id' || Object.keys(props.user.llmConfiguration)[0] === 'symbol')
? {
    connect: {
      id: props.user.llmConfiguration.id
    }
} : { upsert: {
        where: {
          id: props.user.llmConfiguration.id !== undefined ? {
              equals: props.user.llmConfiguration.id
            } : undefined,
          userId: props.user.llmConfiguration.userId !== undefined ? {
              equals: props.user.llmConfiguration.userId
            } : undefined,
        },
        update: {
          id: props.user.llmConfiguration.id !== undefined ? {
              set: props.user.llmConfiguration.id
            } : undefined,
          defaultProvider: props.user.llmConfiguration.defaultProvider !== undefined ? {
              set: props.user.llmConfiguration.defaultProvider
            } : undefined,
          miniProvider: props.user.llmConfiguration.miniProvider !== undefined ? {
              set: props.user.llmConfiguration.miniProvider
            } : undefined,
          normalProvider: props.user.llmConfiguration.normalProvider !== undefined ? {
              set: props.user.llmConfiguration.normalProvider
            } : undefined,
          advancedProvider: props.user.llmConfiguration.advancedProvider !== undefined ? {
              set: props.user.llmConfiguration.advancedProvider
            } : undefined,
          miniModel: props.user.llmConfiguration.miniModel !== undefined ? {
              set: props.user.llmConfiguration.miniModel
            } : undefined,
          normalModel: props.user.llmConfiguration.normalModel !== undefined ? {
              set: props.user.llmConfiguration.normalModel
            } : undefined,
          advancedModel: props.user.llmConfiguration.advancedModel !== undefined ? {
              set: props.user.llmConfiguration.advancedModel
            } : undefined,
          openaiApiKey: props.user.llmConfiguration.openaiApiKey !== undefined ? {
              set: props.user.llmConfiguration.openaiApiKey
            } : undefined,
          anthropicApiKey: props.user.llmConfiguration.anthropicApiKey !== undefined ? {
              set: props.user.llmConfiguration.anthropicApiKey
            } : undefined,
          deepseekApiKey: props.user.llmConfiguration.deepseekApiKey !== undefined ? {
              set: props.user.llmConfiguration.deepseekApiKey
            } : undefined,
          kimiApiKey: props.user.llmConfiguration.kimiApiKey !== undefined ? {
              set: props.user.llmConfiguration.kimiApiKey
            } : undefined,
          qwenApiKey: props.user.llmConfiguration.qwenApiKey !== undefined ? {
              set: props.user.llmConfiguration.qwenApiKey
            } : undefined,
          xaiApiKey: props.user.llmConfiguration.xaiApiKey !== undefined ? {
              set: props.user.llmConfiguration.xaiApiKey
            } : undefined,
          geminiApiKey: props.user.llmConfiguration.geminiApiKey !== undefined ? {
              set: props.user.llmConfiguration.geminiApiKey
            } : undefined,
        },
        create: {
          defaultProvider: props.user.llmConfiguration.defaultProvider !== undefined ? props.user.llmConfiguration.defaultProvider : undefined,
          miniProvider: props.user.llmConfiguration.miniProvider !== undefined ? props.user.llmConfiguration.miniProvider : undefined,
          normalProvider: props.user.llmConfiguration.normalProvider !== undefined ? props.user.llmConfiguration.normalProvider : undefined,
          advancedProvider: props.user.llmConfiguration.advancedProvider !== undefined ? props.user.llmConfiguration.advancedProvider : undefined,
          miniModel: props.user.llmConfiguration.miniModel !== undefined ? props.user.llmConfiguration.miniModel : undefined,
          normalModel: props.user.llmConfiguration.normalModel !== undefined ? props.user.llmConfiguration.normalModel : undefined,
          advancedModel: props.user.llmConfiguration.advancedModel !== undefined ? props.user.llmConfiguration.advancedModel : undefined,
          openaiApiKey: props.user.llmConfiguration.openaiApiKey !== undefined ? props.user.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: props.user.llmConfiguration.anthropicApiKey !== undefined ? props.user.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: props.user.llmConfiguration.deepseekApiKey !== undefined ? props.user.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: props.user.llmConfiguration.kimiApiKey !== undefined ? props.user.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: props.user.llmConfiguration.qwenApiKey !== undefined ? props.user.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: props.user.llmConfiguration.xaiApiKey !== undefined ? props.user.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: props.user.llmConfiguration.geminiApiKey !== undefined ? props.user.llmConfiguration.geminiApiKey : undefined,
        },
      }
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
        currentAccount: props.user.currentAccount !== undefined ? props.user.currentAccount : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
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
    llmConfiguration: props.user.llmConfiguration ? 
      typeof props.user.llmConfiguration === 'object' && Object.keys(props.user.llmConfiguration).length === 1 && Object.keys(props.user.llmConfiguration)[0] === 'id'
    ? { connect: {
          id: props.user.llmConfiguration.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.llmConfiguration.id !== undefined ? props.user.llmConfiguration.id : undefined,
          userId: props.user.llmConfiguration.userId !== undefined ? props.user.llmConfiguration.userId : undefined,
        },
        create: {
          defaultProvider: props.user.llmConfiguration.defaultProvider !== undefined ? props.user.llmConfiguration.defaultProvider : undefined,
          miniProvider: props.user.llmConfiguration.miniProvider !== undefined ? props.user.llmConfiguration.miniProvider : undefined,
          normalProvider: props.user.llmConfiguration.normalProvider !== undefined ? props.user.llmConfiguration.normalProvider : undefined,
          advancedProvider: props.user.llmConfiguration.advancedProvider !== undefined ? props.user.llmConfiguration.advancedProvider : undefined,
          miniModel: props.user.llmConfiguration.miniModel !== undefined ? props.user.llmConfiguration.miniModel : undefined,
          normalModel: props.user.llmConfiguration.normalModel !== undefined ? props.user.llmConfiguration.normalModel : undefined,
          advancedModel: props.user.llmConfiguration.advancedModel !== undefined ? props.user.llmConfiguration.advancedModel : undefined,
          openaiApiKey: props.user.llmConfiguration.openaiApiKey !== undefined ? props.user.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: props.user.llmConfiguration.anthropicApiKey !== undefined ? props.user.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: props.user.llmConfiguration.deepseekApiKey !== undefined ? props.user.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: props.user.llmConfiguration.kimiApiKey !== undefined ? props.user.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: props.user.llmConfiguration.qwenApiKey !== undefined ? props.user.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: props.user.llmConfiguration.xaiApiKey !== undefined ? props.user.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: props.user.llmConfiguration.geminiApiKey !== undefined ? props.user.llmConfiguration.geminiApiKey : undefined,
        },
      }
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
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_ALPACAACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneAlpacaAccount) {
          return response.data.upsertOneAlpacaAccount;
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
          logger.error("Non-retryable constraint violation in upsertOneAlpacaAccount", {
            operation: 'upsertOneAlpacaAccount',
            model: 'AlpacaAccount',
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
          logger.warn("Database connection error in upsertOneAlpacaAccount, retrying...", {
            operation: 'upsertOneAlpacaAccount',
            model: 'AlpacaAccount',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database upsert operation failed", {
          operation: 'upsertOneAlpacaAccount',
          model: 'AlpacaAccount',
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
   * Update multiple AlpacaAccount records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of AlpacaAccount objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: AlpacaAccountType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_ALPACAACCOUNT = gql`
          mutation updateManyAlpacaAccount($data: [AlpacaAccountCreateManyInput!]!) {
            updateManyAlpacaAccount(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  type: prop.type !== undefined ? {
    equals: prop.type 
  } : undefined,
  userId: prop.userId !== undefined ? {
    equals: prop.userId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  APIKey: prop.APIKey !== undefined ? {
            set: prop.APIKey 
           } : undefined,
  APISecret: prop.APISecret !== undefined ? {
            set: prop.APISecret 
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
        alpacaAccountId: prop.allocation.alpacaAccountId !== undefined ? {
            equals: prop.allocation.alpacaAccountId
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
  tradingPolicy: prop.tradingPolicy ? 
  typeof prop.tradingPolicy === 'object' && Object.keys(prop.tradingPolicy).length === 1 && (Object.keys(prop.tradingPolicy)[0] === 'id' || Object.keys(prop.tradingPolicy)[0] === 'symbol')
? {
  connect: {
    id: prop.tradingPolicy.id
  }
} : { upsert: {
      where: {
        id: prop.tradingPolicy.id !== undefined ? {
            equals: prop.tradingPolicy.id
          } : undefined,
        alpacaAccountId: prop.tradingPolicy.alpacaAccountId !== undefined ? {
            equals: prop.tradingPolicy.alpacaAccountId
          } : undefined,
        miniModelId: prop.tradingPolicy.miniModelId !== undefined ? {
            equals: prop.tradingPolicy.miniModelId
          } : undefined,
        normalModelId: prop.tradingPolicy.normalModelId !== undefined ? {
            equals: prop.tradingPolicy.normalModelId
          } : undefined,
        advancedModelId: prop.tradingPolicy.advancedModelId !== undefined ? {
            equals: prop.tradingPolicy.advancedModelId
          } : undefined,
      },
      update: {
        id: prop.tradingPolicy.id !== undefined ? {
            set: prop.tradingPolicy.id
          } : undefined,
        version: prop.tradingPolicy.version !== undefined ? {
            set: prop.tradingPolicy.version
          } : undefined,
        lastModifiedBy: prop.tradingPolicy.lastModifiedBy !== undefined ? {
            set: prop.tradingPolicy.lastModifiedBy
          } : undefined,
        lastModifiedAt: prop.tradingPolicy.lastModifiedAt !== undefined ? {
            set: prop.tradingPolicy.lastModifiedAt
          } : undefined,
        autonomyMode: prop.tradingPolicy.autonomyMode !== undefined ? {
            set: prop.tradingPolicy.autonomyMode
          } : undefined,
        realtimeTradingEnabled: prop.tradingPolicy.realtimeTradingEnabled !== undefined ? {
            set: prop.tradingPolicy.realtimeTradingEnabled
          } : undefined,
        paperTradingOnly: prop.tradingPolicy.paperTradingOnly !== undefined ? {
            set: prop.tradingPolicy.paperTradingOnly
          } : undefined,
        killSwitchEnabled: prop.tradingPolicy.killSwitchEnabled !== undefined ? {
            set: prop.tradingPolicy.killSwitchEnabled
          } : undefined,
        autonomyPrefs: prop.tradingPolicy.autonomyPrefs !== undefined ? {
            set: prop.tradingPolicy.autonomyPrefs
          } : undefined,
        equitiesEnabled: prop.tradingPolicy.equitiesEnabled !== undefined ? {
            set: prop.tradingPolicy.equitiesEnabled
          } : undefined,
        etfsEnabled: prop.tradingPolicy.etfsEnabled !== undefined ? {
            set: prop.tradingPolicy.etfsEnabled
          } : undefined,
        cryptoEnabled: prop.tradingPolicy.cryptoEnabled !== undefined ? {
            set: prop.tradingPolicy.cryptoEnabled
          } : undefined,
        optionsEnabled: prop.tradingPolicy.optionsEnabled !== undefined ? {
            set: prop.tradingPolicy.optionsEnabled
          } : undefined,
        futuresEnabled: prop.tradingPolicy.futuresEnabled !== undefined ? {
            set: prop.tradingPolicy.futuresEnabled
          } : undefined,
        forexEnabled: prop.tradingPolicy.forexEnabled !== undefined ? {
            set: prop.tradingPolicy.forexEnabled
          } : undefined,
        shortingEnabled: prop.tradingPolicy.shortingEnabled !== undefined ? {
            set: prop.tradingPolicy.shortingEnabled
          } : undefined,
        marginEnabled: prop.tradingPolicy.marginEnabled !== undefined ? {
            set: prop.tradingPolicy.marginEnabled
          } : undefined,
        fractionalSharesEnabled: prop.tradingPolicy.fractionalSharesEnabled !== undefined ? {
            set: prop.tradingPolicy.fractionalSharesEnabled
          } : undefined,
        assetUniversePrefs: prop.tradingPolicy.assetUniversePrefs !== undefined ? {
            set: prop.tradingPolicy.assetUniversePrefs
          } : undefined,
        maxBuyingPowerUtilPct: prop.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? {
            set: prop.tradingPolicy.maxBuyingPowerUtilPct
          } : undefined,
        cashFloorPct: prop.tradingPolicy.cashFloorPct !== undefined ? {
            set: prop.tradingPolicy.cashFloorPct
          } : undefined,
        maxGrossExposurePct: prop.tradingPolicy.maxGrossExposurePct !== undefined ? {
            set: prop.tradingPolicy.maxGrossExposurePct
          } : undefined,
        maxNetExposurePct: prop.tradingPolicy.maxNetExposurePct !== undefined ? {
            set: prop.tradingPolicy.maxNetExposurePct
          } : undefined,
        maxLeverage: prop.tradingPolicy.maxLeverage !== undefined ? {
            set: prop.tradingPolicy.maxLeverage
          } : undefined,
        maxSymbolConcentrationPct: prop.tradingPolicy.maxSymbolConcentrationPct !== undefined ? {
            set: prop.tradingPolicy.maxSymbolConcentrationPct
          } : undefined,
        maxSectorConcentrationPct: prop.tradingPolicy.maxSectorConcentrationPct !== undefined ? {
            set: prop.tradingPolicy.maxSectorConcentrationPct
          } : undefined,
        maxOpenPositions: prop.tradingPolicy.maxOpenPositions !== undefined ? {
            set: prop.tradingPolicy.maxOpenPositions
          } : undefined,
        maxOpenOrders: prop.tradingPolicy.maxOpenOrders !== undefined ? {
            set: prop.tradingPolicy.maxOpenOrders
          } : undefined,
        riskBudgetPrefs: prop.tradingPolicy.riskBudgetPrefs !== undefined ? {
            set: prop.tradingPolicy.riskBudgetPrefs
          } : undefined,
        signalConsumptionPrefs: prop.tradingPolicy.signalConsumptionPrefs !== undefined ? {
            set: prop.tradingPolicy.signalConsumptionPrefs
          } : undefined,
        executionPrefs: prop.tradingPolicy.executionPrefs !== undefined ? {
            set: prop.tradingPolicy.executionPrefs
          } : undefined,
        positionManagementPrefs: prop.tradingPolicy.positionManagementPrefs !== undefined ? {
            set: prop.tradingPolicy.positionManagementPrefs
          } : undefined,
        portfolioConstructionPrefs: prop.tradingPolicy.portfolioConstructionPrefs !== undefined ? {
            set: prop.tradingPolicy.portfolioConstructionPrefs
          } : undefined,
        macroOverlayEnabled: prop.tradingPolicy.macroOverlayEnabled !== undefined ? {
            set: prop.tradingPolicy.macroOverlayEnabled
          } : undefined,
        sectorOverlayEnabled: prop.tradingPolicy.sectorOverlayEnabled !== undefined ? {
            set: prop.tradingPolicy.sectorOverlayEnabled
          } : undefined,
        volatilityOverlayEnabled: prop.tradingPolicy.volatilityOverlayEnabled !== undefined ? {
            set: prop.tradingPolicy.volatilityOverlayEnabled
          } : undefined,
        liquidityStressOverlayEnabled: prop.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? {
            set: prop.tradingPolicy.liquidityStressOverlayEnabled
          } : undefined,
        blackSwanProtectionEnabled: prop.tradingPolicy.blackSwanProtectionEnabled !== undefined ? {
            set: prop.tradingPolicy.blackSwanProtectionEnabled
          } : undefined,
        drawdownGuardianEnabled: prop.tradingPolicy.drawdownGuardianEnabled !== undefined ? {
            set: prop.tradingPolicy.drawdownGuardianEnabled
          } : undefined,
        correlationSpikeProtectionEnabled: prop.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? {
            set: prop.tradingPolicy.correlationSpikeProtectionEnabled
          } : undefined,
        newsEventRiskOverlayEnabled: prop.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? {
            set: prop.tradingPolicy.newsEventRiskOverlayEnabled
          } : undefined,
        exchangeHealthOverlayEnabled: prop.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? {
            set: prop.tradingPolicy.exchangeHealthOverlayEnabled
          } : undefined,
        dataQualitySentinelEnabled: prop.tradingPolicy.dataQualitySentinelEnabled !== undefined ? {
            set: prop.tradingPolicy.dataQualitySentinelEnabled
          } : undefined,
        overlayResponsePrefs: prop.tradingPolicy.overlayResponsePrefs !== undefined ? {
            set: prop.tradingPolicy.overlayResponsePrefs
          } : undefined,
        miniModelProvider: prop.tradingPolicy.miniModelProvider !== undefined ? {
            set: prop.tradingPolicy.miniModelProvider
          } : undefined,
        miniModelId: prop.tradingPolicy.miniModelId !== undefined ? {
            set: prop.tradingPolicy.miniModelId
          } : undefined,
        normalModelProvider: prop.tradingPolicy.normalModelProvider !== undefined ? {
            set: prop.tradingPolicy.normalModelProvider
          } : undefined,
        normalModelId: prop.tradingPolicy.normalModelId !== undefined ? {
            set: prop.tradingPolicy.normalModelId
          } : undefined,
        advancedModelProvider: prop.tradingPolicy.advancedModelProvider !== undefined ? {
            set: prop.tradingPolicy.advancedModelProvider
          } : undefined,
        advancedModelId: prop.tradingPolicy.advancedModelId !== undefined ? {
            set: prop.tradingPolicy.advancedModelId
          } : undefined,
        modelPrefs: prop.tradingPolicy.modelPrefs !== undefined ? {
            set: prop.tradingPolicy.modelPrefs
          } : undefined,
        auditNotificationPrefs: prop.tradingPolicy.auditNotificationPrefs !== undefined ? {
            set: prop.tradingPolicy.auditNotificationPrefs
          } : undefined,
    overlays: prop.tradingPolicy.overlays ? 
    Array.isArray(prop.tradingPolicy.overlays) && prop.tradingPolicy.overlays.length > 0 && prop.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.tradingPolicy.overlays.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.tradingPolicy.overlays.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          tradingPolicyId: item.tradingPolicyId !== undefined ? {
              equals: item.tradingPolicyId
            } : undefined,
          status: item.status !== undefined ? {
              equals: item.status
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
        version: prop.tradingPolicy.version !== undefined ? prop.tradingPolicy.version : undefined,
        lastModifiedBy: prop.tradingPolicy.lastModifiedBy !== undefined ? prop.tradingPolicy.lastModifiedBy : undefined,
        lastModifiedAt: prop.tradingPolicy.lastModifiedAt !== undefined ? prop.tradingPolicy.lastModifiedAt : undefined,
        autonomyMode: prop.tradingPolicy.autonomyMode !== undefined ? prop.tradingPolicy.autonomyMode : undefined,
        realtimeTradingEnabled: prop.tradingPolicy.realtimeTradingEnabled !== undefined ? prop.tradingPolicy.realtimeTradingEnabled : undefined,
        paperTradingOnly: prop.tradingPolicy.paperTradingOnly !== undefined ? prop.tradingPolicy.paperTradingOnly : undefined,
        killSwitchEnabled: prop.tradingPolicy.killSwitchEnabled !== undefined ? prop.tradingPolicy.killSwitchEnabled : undefined,
        autonomyPrefs: prop.tradingPolicy.autonomyPrefs !== undefined ? prop.tradingPolicy.autonomyPrefs : undefined,
        equitiesEnabled: prop.tradingPolicy.equitiesEnabled !== undefined ? prop.tradingPolicy.equitiesEnabled : undefined,
        etfsEnabled: prop.tradingPolicy.etfsEnabled !== undefined ? prop.tradingPolicy.etfsEnabled : undefined,
        cryptoEnabled: prop.tradingPolicy.cryptoEnabled !== undefined ? prop.tradingPolicy.cryptoEnabled : undefined,
        optionsEnabled: prop.tradingPolicy.optionsEnabled !== undefined ? prop.tradingPolicy.optionsEnabled : undefined,
        futuresEnabled: prop.tradingPolicy.futuresEnabled !== undefined ? prop.tradingPolicy.futuresEnabled : undefined,
        forexEnabled: prop.tradingPolicy.forexEnabled !== undefined ? prop.tradingPolicy.forexEnabled : undefined,
        shortingEnabled: prop.tradingPolicy.shortingEnabled !== undefined ? prop.tradingPolicy.shortingEnabled : undefined,
        marginEnabled: prop.tradingPolicy.marginEnabled !== undefined ? prop.tradingPolicy.marginEnabled : undefined,
        fractionalSharesEnabled: prop.tradingPolicy.fractionalSharesEnabled !== undefined ? prop.tradingPolicy.fractionalSharesEnabled : undefined,
        assetUniversePrefs: prop.tradingPolicy.assetUniversePrefs !== undefined ? prop.tradingPolicy.assetUniversePrefs : undefined,
        maxBuyingPowerUtilPct: prop.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? prop.tradingPolicy.maxBuyingPowerUtilPct : undefined,
        cashFloorPct: prop.tradingPolicy.cashFloorPct !== undefined ? prop.tradingPolicy.cashFloorPct : undefined,
        maxGrossExposurePct: prop.tradingPolicy.maxGrossExposurePct !== undefined ? prop.tradingPolicy.maxGrossExposurePct : undefined,
        maxNetExposurePct: prop.tradingPolicy.maxNetExposurePct !== undefined ? prop.tradingPolicy.maxNetExposurePct : undefined,
        maxLeverage: prop.tradingPolicy.maxLeverage !== undefined ? prop.tradingPolicy.maxLeverage : undefined,
        maxSymbolConcentrationPct: prop.tradingPolicy.maxSymbolConcentrationPct !== undefined ? prop.tradingPolicy.maxSymbolConcentrationPct : undefined,
        maxSectorConcentrationPct: prop.tradingPolicy.maxSectorConcentrationPct !== undefined ? prop.tradingPolicy.maxSectorConcentrationPct : undefined,
        maxOpenPositions: prop.tradingPolicy.maxOpenPositions !== undefined ? prop.tradingPolicy.maxOpenPositions : undefined,
        maxOpenOrders: prop.tradingPolicy.maxOpenOrders !== undefined ? prop.tradingPolicy.maxOpenOrders : undefined,
        riskBudgetPrefs: prop.tradingPolicy.riskBudgetPrefs !== undefined ? prop.tradingPolicy.riskBudgetPrefs : undefined,
        signalConsumptionPrefs: prop.tradingPolicy.signalConsumptionPrefs !== undefined ? prop.tradingPolicy.signalConsumptionPrefs : undefined,
        executionPrefs: prop.tradingPolicy.executionPrefs !== undefined ? prop.tradingPolicy.executionPrefs : undefined,
        positionManagementPrefs: prop.tradingPolicy.positionManagementPrefs !== undefined ? prop.tradingPolicy.positionManagementPrefs : undefined,
        portfolioConstructionPrefs: prop.tradingPolicy.portfolioConstructionPrefs !== undefined ? prop.tradingPolicy.portfolioConstructionPrefs : undefined,
        macroOverlayEnabled: prop.tradingPolicy.macroOverlayEnabled !== undefined ? prop.tradingPolicy.macroOverlayEnabled : undefined,
        sectorOverlayEnabled: prop.tradingPolicy.sectorOverlayEnabled !== undefined ? prop.tradingPolicy.sectorOverlayEnabled : undefined,
        volatilityOverlayEnabled: prop.tradingPolicy.volatilityOverlayEnabled !== undefined ? prop.tradingPolicy.volatilityOverlayEnabled : undefined,
        liquidityStressOverlayEnabled: prop.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? prop.tradingPolicy.liquidityStressOverlayEnabled : undefined,
        blackSwanProtectionEnabled: prop.tradingPolicy.blackSwanProtectionEnabled !== undefined ? prop.tradingPolicy.blackSwanProtectionEnabled : undefined,
        drawdownGuardianEnabled: prop.tradingPolicy.drawdownGuardianEnabled !== undefined ? prop.tradingPolicy.drawdownGuardianEnabled : undefined,
        correlationSpikeProtectionEnabled: prop.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? prop.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
        newsEventRiskOverlayEnabled: prop.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? prop.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
        exchangeHealthOverlayEnabled: prop.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? prop.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
        dataQualitySentinelEnabled: prop.tradingPolicy.dataQualitySentinelEnabled !== undefined ? prop.tradingPolicy.dataQualitySentinelEnabled : undefined,
        overlayResponsePrefs: prop.tradingPolicy.overlayResponsePrefs !== undefined ? prop.tradingPolicy.overlayResponsePrefs : undefined,
        miniModelProvider: prop.tradingPolicy.miniModelProvider !== undefined ? prop.tradingPolicy.miniModelProvider : undefined,
        miniModelId: prop.tradingPolicy.miniModelId !== undefined ? prop.tradingPolicy.miniModelId : undefined,
        normalModelProvider: prop.tradingPolicy.normalModelProvider !== undefined ? prop.tradingPolicy.normalModelProvider : undefined,
        normalModelId: prop.tradingPolicy.normalModelId !== undefined ? prop.tradingPolicy.normalModelId : undefined,
        advancedModelProvider: prop.tradingPolicy.advancedModelProvider !== undefined ? prop.tradingPolicy.advancedModelProvider : undefined,
        advancedModelId: prop.tradingPolicy.advancedModelId !== undefined ? prop.tradingPolicy.advancedModelId : undefined,
        modelPrefs: prop.tradingPolicy.modelPrefs !== undefined ? prop.tradingPolicy.modelPrefs : undefined,
        auditNotificationPrefs: prop.tradingPolicy.auditNotificationPrefs !== undefined ? prop.tradingPolicy.auditNotificationPrefs : undefined,
    overlays: prop.tradingPolicy.overlays ? 
      Array.isArray(prop.tradingPolicy.overlays) && prop.tradingPolicy.overlays.length > 0 &&  prop.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.tradingPolicy.overlays.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.tradingPolicy.overlays.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          tradingPolicyId: item.tradingPolicyId !== undefined ? {
              equals: item.tradingPolicyId 
             } : undefined,
          status: item.status !== undefined ? {
              equals: item.status 
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
        currentAccount: prop.user.currentAccount !== undefined ? {
            set: prop.user.currentAccount
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
    reviewedWaitlistEntries: prop.user.reviewedWaitlistEntries ? 
    Array.isArray(prop.user.reviewedWaitlistEntries) && prop.user.reviewedWaitlistEntries.length > 0 && prop.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.reviewedWaitlistEntries.map((item: any) => ({
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
    llmConfiguration: prop.user.llmConfiguration ? 
    typeof prop.user.llmConfiguration === 'object' && Object.keys(prop.user.llmConfiguration).length === 1 && (Object.keys(prop.user.llmConfiguration)[0] === 'id' || Object.keys(prop.user.llmConfiguration)[0] === 'symbol')
? {
    connect: {
      id: prop.user.llmConfiguration.id
    }
} : { upsert: {
        where: {
          id: prop.user.llmConfiguration.id !== undefined ? {
              equals: prop.user.llmConfiguration.id
            } : undefined,
          userId: prop.user.llmConfiguration.userId !== undefined ? {
              equals: prop.user.llmConfiguration.userId
            } : undefined,
        },
        update: {
          id: prop.user.llmConfiguration.id !== undefined ? {
              set: prop.user.llmConfiguration.id
            } : undefined,
          defaultProvider: prop.user.llmConfiguration.defaultProvider !== undefined ? {
              set: prop.user.llmConfiguration.defaultProvider
            } : undefined,
          miniProvider: prop.user.llmConfiguration.miniProvider !== undefined ? {
              set: prop.user.llmConfiguration.miniProvider
            } : undefined,
          normalProvider: prop.user.llmConfiguration.normalProvider !== undefined ? {
              set: prop.user.llmConfiguration.normalProvider
            } : undefined,
          advancedProvider: prop.user.llmConfiguration.advancedProvider !== undefined ? {
              set: prop.user.llmConfiguration.advancedProvider
            } : undefined,
          miniModel: prop.user.llmConfiguration.miniModel !== undefined ? {
              set: prop.user.llmConfiguration.miniModel
            } : undefined,
          normalModel: prop.user.llmConfiguration.normalModel !== undefined ? {
              set: prop.user.llmConfiguration.normalModel
            } : undefined,
          advancedModel: prop.user.llmConfiguration.advancedModel !== undefined ? {
              set: prop.user.llmConfiguration.advancedModel
            } : undefined,
          openaiApiKey: prop.user.llmConfiguration.openaiApiKey !== undefined ? {
              set: prop.user.llmConfiguration.openaiApiKey
            } : undefined,
          anthropicApiKey: prop.user.llmConfiguration.anthropicApiKey !== undefined ? {
              set: prop.user.llmConfiguration.anthropicApiKey
            } : undefined,
          deepseekApiKey: prop.user.llmConfiguration.deepseekApiKey !== undefined ? {
              set: prop.user.llmConfiguration.deepseekApiKey
            } : undefined,
          kimiApiKey: prop.user.llmConfiguration.kimiApiKey !== undefined ? {
              set: prop.user.llmConfiguration.kimiApiKey
            } : undefined,
          qwenApiKey: prop.user.llmConfiguration.qwenApiKey !== undefined ? {
              set: prop.user.llmConfiguration.qwenApiKey
            } : undefined,
          xaiApiKey: prop.user.llmConfiguration.xaiApiKey !== undefined ? {
              set: prop.user.llmConfiguration.xaiApiKey
            } : undefined,
          geminiApiKey: prop.user.llmConfiguration.geminiApiKey !== undefined ? {
              set: prop.user.llmConfiguration.geminiApiKey
            } : undefined,
        },
        create: {
          defaultProvider: prop.user.llmConfiguration.defaultProvider !== undefined ? prop.user.llmConfiguration.defaultProvider : undefined,
          miniProvider: prop.user.llmConfiguration.miniProvider !== undefined ? prop.user.llmConfiguration.miniProvider : undefined,
          normalProvider: prop.user.llmConfiguration.normalProvider !== undefined ? prop.user.llmConfiguration.normalProvider : undefined,
          advancedProvider: prop.user.llmConfiguration.advancedProvider !== undefined ? prop.user.llmConfiguration.advancedProvider : undefined,
          miniModel: prop.user.llmConfiguration.miniModel !== undefined ? prop.user.llmConfiguration.miniModel : undefined,
          normalModel: prop.user.llmConfiguration.normalModel !== undefined ? prop.user.llmConfiguration.normalModel : undefined,
          advancedModel: prop.user.llmConfiguration.advancedModel !== undefined ? prop.user.llmConfiguration.advancedModel : undefined,
          openaiApiKey: prop.user.llmConfiguration.openaiApiKey !== undefined ? prop.user.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: prop.user.llmConfiguration.anthropicApiKey !== undefined ? prop.user.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: prop.user.llmConfiguration.deepseekApiKey !== undefined ? prop.user.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: prop.user.llmConfiguration.kimiApiKey !== undefined ? prop.user.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: prop.user.llmConfiguration.qwenApiKey !== undefined ? prop.user.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: prop.user.llmConfiguration.xaiApiKey !== undefined ? prop.user.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: prop.user.llmConfiguration.geminiApiKey !== undefined ? prop.user.llmConfiguration.geminiApiKey : undefined,
        },
      }
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
        currentAccount: prop.user.currentAccount !== undefined ? prop.user.currentAccount : undefined,
        plan: prop.user.plan !== undefined ? prop.user.plan : undefined,
        openaiAPIKey: prop.user.openaiAPIKey !== undefined ? prop.user.openaiAPIKey : undefined,
        openaiModel: prop.user.openaiModel !== undefined ? prop.user.openaiModel : undefined,
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
    llmConfiguration: prop.user.llmConfiguration ? 
      typeof prop.user.llmConfiguration === 'object' && Object.keys(prop.user.llmConfiguration).length === 1 && Object.keys(prop.user.llmConfiguration)[0] === 'id'
    ? { connect: {
          id: prop.user.llmConfiguration.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.user.llmConfiguration.id !== undefined ? prop.user.llmConfiguration.id : undefined,
          userId: prop.user.llmConfiguration.userId !== undefined ? prop.user.llmConfiguration.userId : undefined,
        },
        create: {
          defaultProvider: prop.user.llmConfiguration.defaultProvider !== undefined ? prop.user.llmConfiguration.defaultProvider : undefined,
          miniProvider: prop.user.llmConfiguration.miniProvider !== undefined ? prop.user.llmConfiguration.miniProvider : undefined,
          normalProvider: prop.user.llmConfiguration.normalProvider !== undefined ? prop.user.llmConfiguration.normalProvider : undefined,
          advancedProvider: prop.user.llmConfiguration.advancedProvider !== undefined ? prop.user.llmConfiguration.advancedProvider : undefined,
          miniModel: prop.user.llmConfiguration.miniModel !== undefined ? prop.user.llmConfiguration.miniModel : undefined,
          normalModel: prop.user.llmConfiguration.normalModel !== undefined ? prop.user.llmConfiguration.normalModel : undefined,
          advancedModel: prop.user.llmConfiguration.advancedModel !== undefined ? prop.user.llmConfiguration.advancedModel : undefined,
          openaiApiKey: prop.user.llmConfiguration.openaiApiKey !== undefined ? prop.user.llmConfiguration.openaiApiKey : undefined,
          anthropicApiKey: prop.user.llmConfiguration.anthropicApiKey !== undefined ? prop.user.llmConfiguration.anthropicApiKey : undefined,
          deepseekApiKey: prop.user.llmConfiguration.deepseekApiKey !== undefined ? prop.user.llmConfiguration.deepseekApiKey : undefined,
          kimiApiKey: prop.user.llmConfiguration.kimiApiKey !== undefined ? prop.user.llmConfiguration.kimiApiKey : undefined,
          qwenApiKey: prop.user.llmConfiguration.qwenApiKey !== undefined ? prop.user.llmConfiguration.qwenApiKey : undefined,
          xaiApiKey: prop.user.llmConfiguration.xaiApiKey !== undefined ? prop.user.llmConfiguration.xaiApiKey : undefined,
          geminiApiKey: prop.user.llmConfiguration.geminiApiKey !== undefined ? prop.user.llmConfiguration.geminiApiKey : undefined,
        },
      }
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
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_ALPACAACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyAlpacaAccount) {
          return response.data.updateManyAlpacaAccount;
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
          logger.error("Non-retryable constraint violation in updateManyAlpacaAccount", {
            operation: 'updateManyAlpacaAccount',
            model: 'AlpacaAccount',
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
          logger.warn("Database connection error in updateManyAlpacaAccount, retrying...", {
            operation: 'updateManyAlpacaAccount',
            model: 'AlpacaAccount',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database updateMany operation failed", {
          operation: 'updateManyAlpacaAccount',
          model: 'AlpacaAccount',
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
   * Delete a single AlpacaAccount record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted AlpacaAccount or null.
   */
  async delete(props: AlpacaAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AlpacaAccountType> {
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

        const DELETE_ONE_ALPACAACCOUNT = gql`
          mutation deleteOneAlpacaAccount($where: AlpacaAccountWhereUniqueInput!) {
            deleteOneAlpacaAccount(where: $where) {
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
          mutation: DELETE_ONE_ALPACAACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneAlpacaAccount) {
          return response.data.deleteOneAlpacaAccount;
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
          logger.error("Non-retryable constraint violation in deleteOneAlpacaAccount", {
            operation: 'deleteOneAlpacaAccount',
            model: 'AlpacaAccount',
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
          logger.warn("Database connection error in deleteOneAlpacaAccount, retrying...", {
            operation: 'deleteOneAlpacaAccount',
            model: 'AlpacaAccount',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database delete operation failed", {
          operation: 'deleteOneAlpacaAccount',
          model: 'AlpacaAccount',
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
   * Retrieve a single AlpacaAccount record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved AlpacaAccount or null.
   */
  async get(props: AlpacaAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<AlpacaAccountType | null> {
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

        const GET_ALPACAACCOUNT = gql`
          query getAlpacaAccount($where: AlpacaAccountWhereUniqueInput!) {
            getAlpacaAccount(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  type: props.type !== undefined ? {
    equals: props.type 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_ALPACAACCOUNT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getAlpacaAccount ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No AlpacaAccount found') {
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
          logger.warn("Database connection error in getAlpacaAccount, retrying...", {
            operation: 'getAlpacaAccount',
            model: 'AlpacaAccount',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database get operation failed", {
          operation: 'getAlpacaAccount',
          model: 'AlpacaAccount',
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
   * Retrieve all AlpacaAccounts records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of AlpacaAccount records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AlpacaAccountType[] | null> {
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

        const GET_ALL_ALPACAACCOUNT = gql`
          query getAllAlpacaAccount {
            alpacaAccounts {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_ALPACAACCOUNT,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.alpacaAccounts ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No AlpacaAccount found') {
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
          logger.warn("Database connection error in getAllAlpacaAccount, retrying...", {
            operation: 'getAllAlpacaAccount',
            model: 'AlpacaAccount',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database getAll operation failed", {
          operation: 'getAllAlpacaAccount',
          model: 'AlpacaAccount',
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
   * Find multiple AlpacaAccount records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found AlpacaAccount records or null.
   */
  async findMany(props: AlpacaAccountType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<AlpacaAccountType[] | null> {
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

        const FIND_MANY_ALPACAACCOUNT = gql`
          query findManyAlpacaAccount($where: AlpacaAccountWhereInput!) {
            alpacaAccounts(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  type: props.type !== undefined ? {
    equals: props.type 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_ALPACAACCOUNT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.alpacaAccounts) {
          return response.data.alpacaAccounts;
        } else {
          return [] as AlpacaAccountType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No AlpacaAccount found') {
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
          logger.warn("Database connection error in findManyAlpacaAccount, retrying...", {
            operation: 'findManyAlpacaAccount',
            model: 'AlpacaAccount',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database findMany operation failed", {
          operation: 'findManyAlpacaAccount',
          model: 'AlpacaAccount',
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
