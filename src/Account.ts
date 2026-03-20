
  
import { Account as AccountType } from './generated/typegraphql-prisma/models/Account';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the Account model.
   */

  const selectionSet = `
    
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
  }

  `;

  export const Account = {

    /**
     * Create a new Account record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Account or null.
     */

    /**
     * Create a new Account record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created Account or null.
     */
    async create(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AccountType> {
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

          const CREATE_ONE_ACCOUNT = gql`
              mutation createOneAccount($data: AccountCreateInput!) {
                createOneAccount(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                type: props.type !== undefined ? props.type : undefined,
  provider: props.provider !== undefined ? props.provider : undefined,
  providerAccountId: props.providerAccountId !== undefined ? props.providerAccountId : undefined,
  refresh_token: props.refresh_token !== undefined ? props.refresh_token : undefined,
  access_token: props.access_token !== undefined ? props.access_token : undefined,
  expires_at: props.expires_at !== undefined ? props.expires_at : undefined,
  token_type: props.token_type !== undefined ? props.token_type : undefined,
  scope: props.scope !== undefined ? props.scope : undefined,
  id_token: props.id_token !== undefined ? props.id_token : undefined,
  session_state: props.session_state !== undefined ? props.session_state : undefined,
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
    alpacaAccounts: props.user.alpacaAccounts ? 
      Array.isArray(props.user.alpacaAccounts) && props.user.alpacaAccounts.length > 0 &&  props.user.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.alpacaAccounts.map((item: any) => ({
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

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_ACCOUNT,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneAccount) {
            return response.data.createOneAccount;
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
            logger.error("Non-retryable constraint violation in createOneAccount", {
              operation: 'createOneAccount',
              model: 'Account',
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
            logger.warn("Database connection error in createOneAccount, retrying...", {
              operation: 'createOneAccount',
              model: 'Account',
              attempt: retryCount,
              maxRetries: MAX_RETRIES,
            });
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log structured error details and rethrow
          logger.error("Database create operation failed", {
            operation: 'createOneAccount',
            model: 'Account',
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
   * Create multiple Account records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Account objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AccountType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_ACCOUNT = gql`
          mutation createManyAccount($data: [AccountCreateManyInput!]!) {
            createManyAccount(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      userId: prop.userId !== undefined ? prop.userId : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  provider: prop.provider !== undefined ? prop.provider : undefined,
  providerAccountId: prop.providerAccountId !== undefined ? prop.providerAccountId : undefined,
  refresh_token: prop.refresh_token !== undefined ? prop.refresh_token : undefined,
  access_token: prop.access_token !== undefined ? prop.access_token : undefined,
  expires_at: prop.expires_at !== undefined ? prop.expires_at : undefined,
  token_type: prop.token_type !== undefined ? prop.token_type : undefined,
  scope: prop.scope !== undefined ? prop.scope : undefined,
  id_token: prop.id_token !== undefined ? prop.id_token : undefined,
  session_state: prop.session_state !== undefined ? prop.session_state : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_ACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyAccount) {
          return response.data.createManyAccount;
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
          logger.error("Non-retryable constraint violation in createManyAccount", {
            operation: 'createManyAccount',
            model: 'Account',
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
          logger.warn("Database connection error in createManyAccount, retrying...", {
            operation: 'createManyAccount',
            model: 'Account',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database createMany operation failed", {
          operation: 'createManyAccount',
          model: 'Account',
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
   * Update a single Account record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Account or null.
   */
  async update(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AccountType> {
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

        const UPDATE_ONE_ACCOUNT = gql`
          mutation updateOneAccount($data: AccountUpdateInput!, $where: AccountWhereUniqueInput!) {
            updateOneAccount(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  providerAccountId: props.providerAccountId !== undefined ? props.providerAccountId : undefined,
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
  provider: props.provider !== undefined ? {
            set: props.provider 
           } : undefined,
  providerAccountId: props.providerAccountId !== undefined ? {
            set: props.providerAccountId 
           } : undefined,
  refresh_token: props.refresh_token !== undefined ? {
            set: props.refresh_token 
           } : undefined,
  access_token: props.access_token !== undefined ? {
            set: props.access_token 
           } : undefined,
  expires_at: props.expires_at !== undefined ? {
            set: props.expires_at 
           } : undefined,
  token_type: props.token_type !== undefined ? {
            set: props.token_type 
           } : undefined,
  scope: props.scope !== undefined ? {
            set: props.scope 
           } : undefined,
  id_token: props.id_token !== undefined ? {
            set: props.id_token 
           } : undefined,
  session_state: props.session_state !== undefined ? {
            set: props.session_state 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
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
    alpacaAccounts: props.user.alpacaAccounts ? 
    Array.isArray(props.user.alpacaAccounts) && props.user.alpacaAccounts.length > 0 && props.user.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.alpacaAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.alpacaAccounts.map((item: any) => ({
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
    alpacaAccounts: props.user.alpacaAccounts ? 
      Array.isArray(props.user.alpacaAccounts) && props.user.alpacaAccounts.length > 0 &&  props.user.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.alpacaAccounts.map((item: any) => ({
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
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_ACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneAccount) {
          return response.data.updateOneAccount;
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
          logger.error("Non-retryable constraint violation in updateOneAccount", {
            operation: 'updateOneAccount',
            model: 'Account',
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
          logger.warn("Database connection error in updateOneAccount, retrying...", {
            operation: 'updateOneAccount',
            model: 'Account',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database update operation failed", {
          operation: 'updateOneAccount',
          model: 'Account',
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
   * Upsert a single Account record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Account or null.
   */
  async upsert(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AccountType> {
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

        const UPSERT_ONE_ACCOUNT = gql`
          mutation upsertOneAccount($where: AccountWhereUniqueInput!, $create: AccountCreateInput!, $update: AccountUpdateInput!) {
            upsertOneAccount(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  providerAccountId: props.providerAccountId !== undefined ? props.providerAccountId : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
      },
          create: {
        type: props.type !== undefined ? props.type : undefined,
  provider: props.provider !== undefined ? props.provider : undefined,
  providerAccountId: props.providerAccountId !== undefined ? props.providerAccountId : undefined,
  refresh_token: props.refresh_token !== undefined ? props.refresh_token : undefined,
  access_token: props.access_token !== undefined ? props.access_token : undefined,
  expires_at: props.expires_at !== undefined ? props.expires_at : undefined,
  token_type: props.token_type !== undefined ? props.token_type : undefined,
  scope: props.scope !== undefined ? props.scope : undefined,
  id_token: props.id_token !== undefined ? props.id_token : undefined,
  session_state: props.session_state !== undefined ? props.session_state : undefined,
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
    alpacaAccounts: props.user.alpacaAccounts ? 
      Array.isArray(props.user.alpacaAccounts) && props.user.alpacaAccounts.length > 0 &&  props.user.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.alpacaAccounts.map((item: any) => ({
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
      },
          update: {
      type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  provider: props.provider !== undefined ? {
            set: props.provider 
           } : undefined,
  providerAccountId: props.providerAccountId !== undefined ? {
            set: props.providerAccountId 
           } : undefined,
  refresh_token: props.refresh_token !== undefined ? {
            set: props.refresh_token 
           } : undefined,
  access_token: props.access_token !== undefined ? {
            set: props.access_token 
           } : undefined,
  expires_at: props.expires_at !== undefined ? {
            set: props.expires_at 
           } : undefined,
  token_type: props.token_type !== undefined ? {
            set: props.token_type 
           } : undefined,
  scope: props.scope !== undefined ? {
            set: props.scope 
           } : undefined,
  id_token: props.id_token !== undefined ? {
            set: props.id_token 
           } : undefined,
  session_state: props.session_state !== undefined ? {
            set: props.session_state 
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
    alpacaAccounts: props.user.alpacaAccounts ? 
    Array.isArray(props.user.alpacaAccounts) && props.user.alpacaAccounts.length > 0 && props.user.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.alpacaAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.alpacaAccounts.map((item: any) => ({
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
    alpacaAccounts: props.user.alpacaAccounts ? 
      Array.isArray(props.user.alpacaAccounts) && props.user.alpacaAccounts.length > 0 &&  props.user.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.alpacaAccounts.map((item: any) => ({
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
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_ACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneAccount) {
          return response.data.upsertOneAccount;
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
          logger.error("Non-retryable constraint violation in upsertOneAccount", {
            operation: 'upsertOneAccount',
            model: 'Account',
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
          logger.warn("Database connection error in upsertOneAccount, retrying...", {
            operation: 'upsertOneAccount',
            model: 'Account',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database upsert operation failed", {
          operation: 'upsertOneAccount',
          model: 'Account',
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
   * Update multiple Account records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Account objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: AccountType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_ACCOUNT = gql`
          mutation updateManyAccount($data: [AccountCreateManyInput!]!) {
            updateManyAccount(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  providerAccountId: prop.providerAccountId !== undefined ? prop.providerAccountId : undefined,
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
  provider: prop.provider !== undefined ? {
            set: prop.provider 
           } : undefined,
  providerAccountId: prop.providerAccountId !== undefined ? {
            set: prop.providerAccountId 
           } : undefined,
  refresh_token: prop.refresh_token !== undefined ? {
            set: prop.refresh_token 
           } : undefined,
  access_token: prop.access_token !== undefined ? {
            set: prop.access_token 
           } : undefined,
  expires_at: prop.expires_at !== undefined ? {
            set: prop.expires_at 
           } : undefined,
  token_type: prop.token_type !== undefined ? {
            set: prop.token_type 
           } : undefined,
  scope: prop.scope !== undefined ? {
            set: prop.scope 
           } : undefined,
  id_token: prop.id_token !== undefined ? {
            set: prop.id_token 
           } : undefined,
  session_state: prop.session_state !== undefined ? {
            set: prop.session_state 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
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
    alpacaAccounts: prop.user.alpacaAccounts ? 
    Array.isArray(prop.user.alpacaAccounts) && prop.user.alpacaAccounts.length > 0 && prop.user.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.alpacaAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.alpacaAccounts.map((item: any) => ({
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
    alpacaAccounts: prop.user.alpacaAccounts ? 
      Array.isArray(prop.user.alpacaAccounts) && prop.user.alpacaAccounts.length > 0 &&  prop.user.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.alpacaAccounts.map((item: any) => ({
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

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_ACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyAccount) {
          return response.data.updateManyAccount;
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
          logger.error("Non-retryable constraint violation in updateManyAccount", {
            operation: 'updateManyAccount',
            model: 'Account',
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
          logger.warn("Database connection error in updateManyAccount, retrying...", {
            operation: 'updateManyAccount',
            model: 'Account',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database updateMany operation failed", {
          operation: 'updateManyAccount',
          model: 'Account',
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
   * Delete a single Account record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Account or null.
   */
  async delete(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AccountType> {
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

        const DELETE_ONE_ACCOUNT = gql`
          mutation deleteOneAccount($where: AccountWhereUniqueInput!) {
            deleteOneAccount(where: $where) {
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
          mutation: DELETE_ONE_ACCOUNT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneAccount) {
          return response.data.deleteOneAccount;
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
          logger.error("Non-retryable constraint violation in deleteOneAccount", {
            operation: 'deleteOneAccount',
            model: 'Account',
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
          logger.warn("Database connection error in deleteOneAccount, retrying...", {
            operation: 'deleteOneAccount',
            model: 'Account',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database delete operation failed", {
          operation: 'deleteOneAccount',
          model: 'Account',
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
   * Retrieve a single Account record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved Account or null.
   */
  async get(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<AccountType | null> {
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

        const GET_ACCOUNT = gql`
          query getAccount($where: AccountWhereUniqueInput!) {
            getAccount(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  providerAccountId: props.providerAccountId !== undefined ? props.providerAccountId : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_ACCOUNT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getAccount ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Account found') {
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
          logger.warn("Database connection error in getAccount, retrying...", {
            operation: 'getAccount',
            model: 'Account',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database get operation failed", {
          operation: 'getAccount',
          model: 'Account',
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
   * Retrieve all Accounts records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Account records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AccountType[] | null> {
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

        const GET_ALL_ACCOUNT = gql`
          query getAllAccount {
            accounts {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_ACCOUNT,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.accounts ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Account found') {
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
          logger.warn("Database connection error in getAllAccount, retrying...", {
            operation: 'getAllAccount',
            model: 'Account',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database getAll operation failed", {
          operation: 'getAllAccount',
          model: 'Account',
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
   * Find multiple Account records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found Account records or null.
   */
  async findMany(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<AccountType[] | null> {
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

        const FIND_MANY_ACCOUNT = gql`
          query findManyAccount($where: AccountWhereInput!) {
            accounts(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
  providerAccountId: props.providerAccountId !== undefined ? {
    equals: props.providerAccountId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_ACCOUNT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.accounts) {
          return response.data.accounts;
        } else {
          return [] as AccountType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Account found') {
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
          logger.warn("Database connection error in findManyAccount, retrying...", {
            operation: 'findManyAccount',
            model: 'Account',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database findMany operation failed", {
          operation: 'findManyAccount',
          model: 'Account',
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
