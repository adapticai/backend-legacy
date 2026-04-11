
  
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
  alpacaAccountId
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
  alpacaAccount: props.alpacaAccount ? 
    typeof props.alpacaAccount === 'object' && Object.keys(props.alpacaAccount).length === 1 && Object.keys(props.alpacaAccount)[0] === 'id'
    ? { connect: {
        id: props.alpacaAccount.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.alpacaAccount.id !== undefined ? props.alpacaAccount.id : undefined,
        type: props.alpacaAccount.type !== undefined ? {
            equals: props.alpacaAccount.type 
           } : undefined,
        userId: props.alpacaAccount.userId !== undefined ? {
            equals: props.alpacaAccount.userId 
           } : undefined,
      },
      create: {
        type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? props.alpacaAccount.realTime : undefined,
        cryptoTradingEnabled: props.alpacaAccount.cryptoTradingEnabled !== undefined ? props.alpacaAccount.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: props.alpacaAccount.cryptoTradingPairs !== undefined ? {
            set: props.alpacaAccount.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: props.alpacaAccount.cryptoTradeAllocationPct !== undefined ? props.alpacaAccount.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: props.alpacaAccount.tradeAllocationPct !== undefined ? props.alpacaAccount.tradeAllocationPct : undefined,
        autoAllocation: props.alpacaAccount.autoAllocation !== undefined ? props.alpacaAccount.autoAllocation : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
        enablePortfolioTrailingStop: props.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.alpacaAccount.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: props.alpacaAccount.portfolioTrailPercent !== undefined ? props.alpacaAccount.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: props.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.alpacaAccount.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: props.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.alpacaAccount.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: props.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? props.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: props.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? props.alpacaAccount.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: props.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? props.alpacaAccount.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: props.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? props.alpacaAccount.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: props.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? props.alpacaAccount.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: props.alpacaAccount.minimumPriceChangePercent100 !== undefined ? props.alpacaAccount.minimumPriceChangePercent100 : undefined,
        deletedAt: props.alpacaAccount.deletedAt !== undefined ? props.alpacaAccount.deletedAt : undefined,
    tradingPolicy: props.alpacaAccount.tradingPolicy ? 
      typeof props.alpacaAccount.tradingPolicy === 'object' && Object.keys(props.alpacaAccount.tradingPolicy).length === 1 && Object.keys(props.alpacaAccount.tradingPolicy)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.tradingPolicy.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.tradingPolicy.id !== undefined ? props.alpacaAccount.tradingPolicy.id : undefined,
          alpacaAccountId: props.alpacaAccount.tradingPolicy.alpacaAccountId !== undefined ? props.alpacaAccount.tradingPolicy.alpacaAccountId : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.miniModelId 
             } : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.normalModelId 
             } : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.advancedModelId 
             } : undefined,
        },
        create: {
          version: props.alpacaAccount.tradingPolicy.version !== undefined ? props.alpacaAccount.tradingPolicy.version : undefined,
          lastModifiedBy: props.alpacaAccount.tradingPolicy.lastModifiedBy !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedBy : undefined,
          lastModifiedAt: props.alpacaAccount.tradingPolicy.lastModifiedAt !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedAt : undefined,
          autonomyMode: props.alpacaAccount.tradingPolicy.autonomyMode !== undefined ? props.alpacaAccount.tradingPolicy.autonomyMode : undefined,
          realtimeTradingEnabled: props.alpacaAccount.tradingPolicy.realtimeTradingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.realtimeTradingEnabled : undefined,
          paperTradingOnly: props.alpacaAccount.tradingPolicy.paperTradingOnly !== undefined ? props.alpacaAccount.tradingPolicy.paperTradingOnly : undefined,
          killSwitchEnabled: props.alpacaAccount.tradingPolicy.killSwitchEnabled !== undefined ? props.alpacaAccount.tradingPolicy.killSwitchEnabled : undefined,
          autonomyPrefs: props.alpacaAccount.tradingPolicy.autonomyPrefs !== undefined ? props.alpacaAccount.tradingPolicy.autonomyPrefs : undefined,
          equitiesEnabled: props.alpacaAccount.tradingPolicy.equitiesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.equitiesEnabled : undefined,
          etfsEnabled: props.alpacaAccount.tradingPolicy.etfsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.etfsEnabled : undefined,
          cryptoEnabled: props.alpacaAccount.tradingPolicy.cryptoEnabled !== undefined ? props.alpacaAccount.tradingPolicy.cryptoEnabled : undefined,
          optionsEnabled: props.alpacaAccount.tradingPolicy.optionsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.optionsEnabled : undefined,
          futuresEnabled: props.alpacaAccount.tradingPolicy.futuresEnabled !== undefined ? props.alpacaAccount.tradingPolicy.futuresEnabled : undefined,
          forexEnabled: props.alpacaAccount.tradingPolicy.forexEnabled !== undefined ? props.alpacaAccount.tradingPolicy.forexEnabled : undefined,
          shortingEnabled: props.alpacaAccount.tradingPolicy.shortingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.shortingEnabled : undefined,
          marginEnabled: props.alpacaAccount.tradingPolicy.marginEnabled !== undefined ? props.alpacaAccount.tradingPolicy.marginEnabled : undefined,
          fractionalSharesEnabled: props.alpacaAccount.tradingPolicy.fractionalSharesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.fractionalSharesEnabled : undefined,
          assetUniversePrefs: props.alpacaAccount.tradingPolicy.assetUniversePrefs !== undefined ? props.alpacaAccount.tradingPolicy.assetUniversePrefs : undefined,
          maxBuyingPowerUtilPct: props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct : undefined,
          cashFloorPct: props.alpacaAccount.tradingPolicy.cashFloorPct !== undefined ? props.alpacaAccount.tradingPolicy.cashFloorPct : undefined,
          maxGrossExposurePct: props.alpacaAccount.tradingPolicy.maxGrossExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxGrossExposurePct : undefined,
          maxNetExposurePct: props.alpacaAccount.tradingPolicy.maxNetExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxNetExposurePct : undefined,
          maxLeverage: props.alpacaAccount.tradingPolicy.maxLeverage !== undefined ? props.alpacaAccount.tradingPolicy.maxLeverage : undefined,
          maxSymbolConcentrationPct: props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct : undefined,
          maxSectorConcentrationPct: props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct : undefined,
          maxOpenPositions: props.alpacaAccount.tradingPolicy.maxOpenPositions !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenPositions : undefined,
          maxOpenOrders: props.alpacaAccount.tradingPolicy.maxOpenOrders !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenOrders : undefined,
          riskBudgetPrefs: props.alpacaAccount.tradingPolicy.riskBudgetPrefs !== undefined ? props.alpacaAccount.tradingPolicy.riskBudgetPrefs : undefined,
          signalConsumptionPrefs: props.alpacaAccount.tradingPolicy.signalConsumptionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.signalConsumptionPrefs : undefined,
          executionPrefs: props.alpacaAccount.tradingPolicy.executionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.executionPrefs : undefined,
          positionManagementPrefs: props.alpacaAccount.tradingPolicy.positionManagementPrefs !== undefined ? props.alpacaAccount.tradingPolicy.positionManagementPrefs : undefined,
          portfolioConstructionPrefs: props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs : undefined,
          macroOverlayEnabled: props.alpacaAccount.tradingPolicy.macroOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.macroOverlayEnabled : undefined,
          sectorOverlayEnabled: props.alpacaAccount.tradingPolicy.sectorOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.sectorOverlayEnabled : undefined,
          volatilityOverlayEnabled: props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled : undefined,
          liquidityStressOverlayEnabled: props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled : undefined,
          blackSwanProtectionEnabled: props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled : undefined,
          drawdownGuardianEnabled: props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled !== undefined ? props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled : undefined,
          correlationSpikeProtectionEnabled: props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
          newsEventRiskOverlayEnabled: props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
          exchangeHealthOverlayEnabled: props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
          dataQualitySentinelEnabled: props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled !== undefined ? props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled : undefined,
          overlayResponsePrefs: props.alpacaAccount.tradingPolicy.overlayResponsePrefs !== undefined ? props.alpacaAccount.tradingPolicy.overlayResponsePrefs : undefined,
          miniModelProvider: props.alpacaAccount.tradingPolicy.miniModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.miniModelProvider : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? props.alpacaAccount.tradingPolicy.miniModelId : undefined,
          normalModelProvider: props.alpacaAccount.tradingPolicy.normalModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.normalModelProvider : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? props.alpacaAccount.tradingPolicy.normalModelId : undefined,
          advancedModelProvider: props.alpacaAccount.tradingPolicy.advancedModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelProvider : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelId : undefined,
          modelPrefs: props.alpacaAccount.tradingPolicy.modelPrefs !== undefined ? props.alpacaAccount.tradingPolicy.modelPrefs : undefined,
          auditNotificationPrefs: props.alpacaAccount.tradingPolicy.auditNotificationPrefs !== undefined ? props.alpacaAccount.tradingPolicy.auditNotificationPrefs : undefined,
      overlays: props.alpacaAccount.tradingPolicy.overlays ? 
        Array.isArray(props.alpacaAccount.tradingPolicy.overlays) && props.alpacaAccount.tradingPolicy.overlays.length > 0 &&  props.alpacaAccount.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
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
    user: props.alpacaAccount.user ? 
      typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.user.id !== undefined ? props.alpacaAccount.user.id : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              equals: props.alpacaAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.alpacaAccount.user.name !== undefined ? props.alpacaAccount.user.name : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? props.alpacaAccount.user.emailVerified : undefined,
          image: props.alpacaAccount.user.image !== undefined ? props.alpacaAccount.user.image : undefined,
          deletedAt: props.alpacaAccount.user.deletedAt !== undefined ? props.alpacaAccount.user.deletedAt : undefined,
          role: props.alpacaAccount.user.role !== undefined ? props.alpacaAccount.user.role : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? props.alpacaAccount.user.bio : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? props.alpacaAccount.user.jobTitle : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? props.alpacaAccount.user.currentAccount : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? props.alpacaAccount.user.plan : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? props.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? props.alpacaAccount.user.openaiModel : undefined,
      customer: props.alpacaAccount.user.customer ? 
        typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && Object.keys(props.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? props.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? 
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? 
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
      linkedProviders: props.alpacaAccount.user.linkedProviders ? 
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.alpacaAccount.user.accountLinkingRequests ? 
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.alpacaAccount.user.reviewedWaitlistEntries ? 
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
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
          },
        }))
      } : undefined,
      llmConfiguration: props.alpacaAccount.user.llmConfiguration ? 
        typeof props.alpacaAccount.user.llmConfiguration === 'object' && Object.keys(props.alpacaAccount.user.llmConfiguration).length === 1 && Object.keys(props.alpacaAccount.user.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.llmConfiguration.id !== undefined ? props.alpacaAccount.user.llmConfiguration.id : undefined,
            userId: props.alpacaAccount.user.llmConfiguration.userId !== undefined ? props.alpacaAccount.user.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.miniProvider : undefined,
            normalProvider: props.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedProvider : undefined,
            miniModel: props.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? props.alpacaAccount.user.llmConfiguration.miniModel : undefined,
            normalModel: props.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? props.alpacaAccount.user.llmConfiguration.normalModel : undefined,
            advancedModel: props.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.alpacaAccount.alerts ? 
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 &&  props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
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
            logger.error("Non-retryable constraint violation in createOneAllocation", {
              operation: 'createOneAllocation',
              model: 'Allocation',
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
            logger.warn("Database connection error in createOneAllocation, retrying...", {
              operation: 'createOneAllocation',
              model: 'Allocation',
              attempt: retryCount,
              maxRetries: MAX_RETRIES,
            });
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log structured error details and rethrow
          logger.error("Database create operation failed", {
            operation: 'createOneAllocation',
            model: 'Allocation',
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
   * Create multiple Allocation records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Allocation objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @param options - Optional control flags (e.g., skipDuplicates).
   * @returns The count of created records or null.
   */
  async createMany(props: AllocationType[], globalClient?: ApolloClientType<NormalizedCacheObject>, options?: { skipDuplicates?: boolean }): Promise<{ count: number } | null> {
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
          mutation createManyAllocation($data: [AllocationCreateManyInput!]!, $skipDuplicates: Boolean) {
            createManyAllocation(data: $data, skipDuplicates: $skipDuplicates) {
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
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
      })),
          ...(options?.skipDuplicates ? { skipDuplicates: true } : {}),
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
          logger.warn("Duplicate key in createManyAllocation (expected during overlapping fetches)", {
            operation: 'createManyAllocation',
            model: 'Allocation',
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
          logger.warn("Database connection error in createManyAllocation, retrying...", {
            operation: 'createManyAllocation',
            model: 'Allocation',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database createMany operation failed", {
          operation: 'createManyAllocation',
          model: 'Allocation',
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
  alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
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
  alpacaAccount: props.alpacaAccount ? 
  typeof props.alpacaAccount === 'object' && Object.keys(props.alpacaAccount).length === 1 && (Object.keys(props.alpacaAccount)[0] === 'id' || Object.keys(props.alpacaAccount)[0] === 'symbol')
? {
  connect: {
    id: props.alpacaAccount.id
  }
} : { upsert: {
      where: {
        id: props.alpacaAccount.id !== undefined ? {
            equals: props.alpacaAccount.id
          } : undefined,
        type: props.alpacaAccount.type !== undefined ? {
            equals: props.alpacaAccount.type
          } : undefined,
        userId: props.alpacaAccount.userId !== undefined ? {
            equals: props.alpacaAccount.userId
          } : undefined,
      },
      update: {
        id: props.alpacaAccount.id !== undefined ? {
            set: props.alpacaAccount.id
          } : undefined,
        type: props.alpacaAccount.type !== undefined ? {
            set: props.alpacaAccount.type
          } : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? {
            set: props.alpacaAccount.APIKey
          } : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? {
            set: props.alpacaAccount.APISecret
          } : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? {
            set: props.alpacaAccount.marketOpen
          } : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? {
            set: props.alpacaAccount.realTime
          } : undefined,
        cryptoTradingEnabled: props.alpacaAccount.cryptoTradingEnabled !== undefined ? {
            set: props.alpacaAccount.cryptoTradingEnabled
          } : undefined,
        cryptoTradingPairs: props.alpacaAccount.cryptoTradingPairs !== undefined ? {
            set: props.alpacaAccount.cryptoTradingPairs
          } : undefined,
        cryptoTradeAllocationPct: props.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
            set: props.alpacaAccount.cryptoTradeAllocationPct
          } : undefined,
        tradeAllocationPct: props.alpacaAccount.tradeAllocationPct !== undefined ? {
            set: props.alpacaAccount.tradeAllocationPct
          } : undefined,
        autoAllocation: props.alpacaAccount.autoAllocation !== undefined ? {
            set: props.alpacaAccount.autoAllocation
          } : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? {
            set: props.alpacaAccount.minPercentageChange
          } : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? {
            set: props.alpacaAccount.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: props.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
            set: props.alpacaAccount.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: props.alpacaAccount.portfolioTrailPercent !== undefined ? {
            set: props.alpacaAccount.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: props.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
            set: props.alpacaAccount.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: props.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
            set: props.alpacaAccount.reducedPortfolioTrailPercent
          } : undefined,
        defaultTrailingStopPercentage100: props.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
            set: props.alpacaAccount.defaultTrailingStopPercentage100
          } : undefined,
        firstTrailReductionThreshold100: props.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
            set: props.alpacaAccount.firstTrailReductionThreshold100
          } : undefined,
        secondTrailReductionThreshold100: props.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
            set: props.alpacaAccount.secondTrailReductionThreshold100
          } : undefined,
        firstReducedTrailPercentage100: props.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
            set: props.alpacaAccount.firstReducedTrailPercentage100
          } : undefined,
        secondReducedTrailPercentage100: props.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
            set: props.alpacaAccount.secondReducedTrailPercentage100
          } : undefined,
        minimumPriceChangePercent100: props.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
            set: props.alpacaAccount.minimumPriceChangePercent100
          } : undefined,
        deletedAt: props.alpacaAccount.deletedAt !== undefined ? {
            set: props.alpacaAccount.deletedAt
          } : undefined,
    tradingPolicy: props.alpacaAccount.tradingPolicy ? 
    typeof props.alpacaAccount.tradingPolicy === 'object' && Object.keys(props.alpacaAccount.tradingPolicy).length === 1 && (Object.keys(props.alpacaAccount.tradingPolicy)[0] === 'id' || Object.keys(props.alpacaAccount.tradingPolicy)[0] === 'symbol')
? {
    connect: {
      id: props.alpacaAccount.tradingPolicy.id
    }
} : { upsert: {
        where: {
          id: props.alpacaAccount.tradingPolicy.id !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.id
            } : undefined,
          alpacaAccountId: props.alpacaAccount.tradingPolicy.alpacaAccountId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.alpacaAccountId
            } : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.miniModelId
            } : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.normalModelId
            } : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.advancedModelId
            } : undefined,
        },
        update: {
          id: props.alpacaAccount.tradingPolicy.id !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.id
            } : undefined,
          version: props.alpacaAccount.tradingPolicy.version !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.version
            } : undefined,
          lastModifiedBy: props.alpacaAccount.tradingPolicy.lastModifiedBy !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.lastModifiedBy
            } : undefined,
          lastModifiedAt: props.alpacaAccount.tradingPolicy.lastModifiedAt !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.lastModifiedAt
            } : undefined,
          autonomyMode: props.alpacaAccount.tradingPolicy.autonomyMode !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.autonomyMode
            } : undefined,
          realtimeTradingEnabled: props.alpacaAccount.tradingPolicy.realtimeTradingEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.realtimeTradingEnabled
            } : undefined,
          paperTradingOnly: props.alpacaAccount.tradingPolicy.paperTradingOnly !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.paperTradingOnly
            } : undefined,
          killSwitchEnabled: props.alpacaAccount.tradingPolicy.killSwitchEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.killSwitchEnabled
            } : undefined,
          autonomyPrefs: props.alpacaAccount.tradingPolicy.autonomyPrefs !== undefined ? props.alpacaAccount.tradingPolicy.autonomyPrefs : undefined,
          equitiesEnabled: props.alpacaAccount.tradingPolicy.equitiesEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.equitiesEnabled
            } : undefined,
          etfsEnabled: props.alpacaAccount.tradingPolicy.etfsEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.etfsEnabled
            } : undefined,
          cryptoEnabled: props.alpacaAccount.tradingPolicy.cryptoEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.cryptoEnabled
            } : undefined,
          optionsEnabled: props.alpacaAccount.tradingPolicy.optionsEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.optionsEnabled
            } : undefined,
          futuresEnabled: props.alpacaAccount.tradingPolicy.futuresEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.futuresEnabled
            } : undefined,
          forexEnabled: props.alpacaAccount.tradingPolicy.forexEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.forexEnabled
            } : undefined,
          shortingEnabled: props.alpacaAccount.tradingPolicy.shortingEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.shortingEnabled
            } : undefined,
          marginEnabled: props.alpacaAccount.tradingPolicy.marginEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.marginEnabled
            } : undefined,
          fractionalSharesEnabled: props.alpacaAccount.tradingPolicy.fractionalSharesEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.fractionalSharesEnabled
            } : undefined,
          assetUniversePrefs: props.alpacaAccount.tradingPolicy.assetUniversePrefs !== undefined ? props.alpacaAccount.tradingPolicy.assetUniversePrefs : undefined,
          maxBuyingPowerUtilPct: props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct
            } : undefined,
          cashFloorPct: props.alpacaAccount.tradingPolicy.cashFloorPct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.cashFloorPct
            } : undefined,
          maxGrossExposurePct: props.alpacaAccount.tradingPolicy.maxGrossExposurePct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxGrossExposurePct
            } : undefined,
          maxNetExposurePct: props.alpacaAccount.tradingPolicy.maxNetExposurePct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxNetExposurePct
            } : undefined,
          maxLeverage: props.alpacaAccount.tradingPolicy.maxLeverage !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxLeverage
            } : undefined,
          maxSymbolConcentrationPct: props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct
            } : undefined,
          maxSectorConcentrationPct: props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct
            } : undefined,
          maxOpenPositions: props.alpacaAccount.tradingPolicy.maxOpenPositions !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxOpenPositions
            } : undefined,
          maxOpenOrders: props.alpacaAccount.tradingPolicy.maxOpenOrders !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxOpenOrders
            } : undefined,
          riskBudgetPrefs: props.alpacaAccount.tradingPolicy.riskBudgetPrefs !== undefined ? props.alpacaAccount.tradingPolicy.riskBudgetPrefs : undefined,
          signalConsumptionPrefs: props.alpacaAccount.tradingPolicy.signalConsumptionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.signalConsumptionPrefs : undefined,
          executionPrefs: props.alpacaAccount.tradingPolicy.executionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.executionPrefs : undefined,
          positionManagementPrefs: props.alpacaAccount.tradingPolicy.positionManagementPrefs !== undefined ? props.alpacaAccount.tradingPolicy.positionManagementPrefs : undefined,
          portfolioConstructionPrefs: props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs : undefined,
          macroOverlayEnabled: props.alpacaAccount.tradingPolicy.macroOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.macroOverlayEnabled
            } : undefined,
          sectorOverlayEnabled: props.alpacaAccount.tradingPolicy.sectorOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.sectorOverlayEnabled
            } : undefined,
          volatilityOverlayEnabled: props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled
            } : undefined,
          liquidityStressOverlayEnabled: props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled
            } : undefined,
          blackSwanProtectionEnabled: props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled
            } : undefined,
          drawdownGuardianEnabled: props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled
            } : undefined,
          correlationSpikeProtectionEnabled: props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled
            } : undefined,
          newsEventRiskOverlayEnabled: props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled
            } : undefined,
          exchangeHealthOverlayEnabled: props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled
            } : undefined,
          dataQualitySentinelEnabled: props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled
            } : undefined,
          overlayResponsePrefs: props.alpacaAccount.tradingPolicy.overlayResponsePrefs !== undefined ? props.alpacaAccount.tradingPolicy.overlayResponsePrefs : undefined,
          miniModelProvider: props.alpacaAccount.tradingPolicy.miniModelProvider !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.miniModelProvider
            } : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.miniModelId
            } : undefined,
          normalModelProvider: props.alpacaAccount.tradingPolicy.normalModelProvider !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.normalModelProvider
            } : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.normalModelId
            } : undefined,
          advancedModelProvider: props.alpacaAccount.tradingPolicy.advancedModelProvider !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.advancedModelProvider
            } : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.advancedModelId
            } : undefined,
          modelPrefs: props.alpacaAccount.tradingPolicy.modelPrefs !== undefined ? props.alpacaAccount.tradingPolicy.modelPrefs : undefined,
          auditNotificationPrefs: props.alpacaAccount.tradingPolicy.auditNotificationPrefs !== undefined ? props.alpacaAccount.tradingPolicy.auditNotificationPrefs : undefined,
      overlays: props.alpacaAccount.tradingPolicy.overlays ? 
      Array.isArray(props.alpacaAccount.tradingPolicy.overlays) && props.alpacaAccount.tradingPolicy.overlays.length > 0 && props.alpacaAccount.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
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
            mutations: item.mutations !== undefined ? item.mutations : undefined,
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
          version: props.alpacaAccount.tradingPolicy.version !== undefined ? props.alpacaAccount.tradingPolicy.version : undefined,
          lastModifiedBy: props.alpacaAccount.tradingPolicy.lastModifiedBy !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedBy : undefined,
          lastModifiedAt: props.alpacaAccount.tradingPolicy.lastModifiedAt !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedAt : undefined,
          autonomyMode: props.alpacaAccount.tradingPolicy.autonomyMode !== undefined ? props.alpacaAccount.tradingPolicy.autonomyMode : undefined,
          realtimeTradingEnabled: props.alpacaAccount.tradingPolicy.realtimeTradingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.realtimeTradingEnabled : undefined,
          paperTradingOnly: props.alpacaAccount.tradingPolicy.paperTradingOnly !== undefined ? props.alpacaAccount.tradingPolicy.paperTradingOnly : undefined,
          killSwitchEnabled: props.alpacaAccount.tradingPolicy.killSwitchEnabled !== undefined ? props.alpacaAccount.tradingPolicy.killSwitchEnabled : undefined,
          autonomyPrefs: props.alpacaAccount.tradingPolicy.autonomyPrefs !== undefined ? props.alpacaAccount.tradingPolicy.autonomyPrefs : undefined,
          equitiesEnabled: props.alpacaAccount.tradingPolicy.equitiesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.equitiesEnabled : undefined,
          etfsEnabled: props.alpacaAccount.tradingPolicy.etfsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.etfsEnabled : undefined,
          cryptoEnabled: props.alpacaAccount.tradingPolicy.cryptoEnabled !== undefined ? props.alpacaAccount.tradingPolicy.cryptoEnabled : undefined,
          optionsEnabled: props.alpacaAccount.tradingPolicy.optionsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.optionsEnabled : undefined,
          futuresEnabled: props.alpacaAccount.tradingPolicy.futuresEnabled !== undefined ? props.alpacaAccount.tradingPolicy.futuresEnabled : undefined,
          forexEnabled: props.alpacaAccount.tradingPolicy.forexEnabled !== undefined ? props.alpacaAccount.tradingPolicy.forexEnabled : undefined,
          shortingEnabled: props.alpacaAccount.tradingPolicy.shortingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.shortingEnabled : undefined,
          marginEnabled: props.alpacaAccount.tradingPolicy.marginEnabled !== undefined ? props.alpacaAccount.tradingPolicy.marginEnabled : undefined,
          fractionalSharesEnabled: props.alpacaAccount.tradingPolicy.fractionalSharesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.fractionalSharesEnabled : undefined,
          assetUniversePrefs: props.alpacaAccount.tradingPolicy.assetUniversePrefs !== undefined ? props.alpacaAccount.tradingPolicy.assetUniversePrefs : undefined,
          maxBuyingPowerUtilPct: props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct : undefined,
          cashFloorPct: props.alpacaAccount.tradingPolicy.cashFloorPct !== undefined ? props.alpacaAccount.tradingPolicy.cashFloorPct : undefined,
          maxGrossExposurePct: props.alpacaAccount.tradingPolicy.maxGrossExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxGrossExposurePct : undefined,
          maxNetExposurePct: props.alpacaAccount.tradingPolicy.maxNetExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxNetExposurePct : undefined,
          maxLeverage: props.alpacaAccount.tradingPolicy.maxLeverage !== undefined ? props.alpacaAccount.tradingPolicy.maxLeverage : undefined,
          maxSymbolConcentrationPct: props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct : undefined,
          maxSectorConcentrationPct: props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct : undefined,
          maxOpenPositions: props.alpacaAccount.tradingPolicy.maxOpenPositions !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenPositions : undefined,
          maxOpenOrders: props.alpacaAccount.tradingPolicy.maxOpenOrders !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenOrders : undefined,
          riskBudgetPrefs: props.alpacaAccount.tradingPolicy.riskBudgetPrefs !== undefined ? props.alpacaAccount.tradingPolicy.riskBudgetPrefs : undefined,
          signalConsumptionPrefs: props.alpacaAccount.tradingPolicy.signalConsumptionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.signalConsumptionPrefs : undefined,
          executionPrefs: props.alpacaAccount.tradingPolicy.executionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.executionPrefs : undefined,
          positionManagementPrefs: props.alpacaAccount.tradingPolicy.positionManagementPrefs !== undefined ? props.alpacaAccount.tradingPolicy.positionManagementPrefs : undefined,
          portfolioConstructionPrefs: props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs : undefined,
          macroOverlayEnabled: props.alpacaAccount.tradingPolicy.macroOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.macroOverlayEnabled : undefined,
          sectorOverlayEnabled: props.alpacaAccount.tradingPolicy.sectorOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.sectorOverlayEnabled : undefined,
          volatilityOverlayEnabled: props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled : undefined,
          liquidityStressOverlayEnabled: props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled : undefined,
          blackSwanProtectionEnabled: props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled : undefined,
          drawdownGuardianEnabled: props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled !== undefined ? props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled : undefined,
          correlationSpikeProtectionEnabled: props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
          newsEventRiskOverlayEnabled: props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
          exchangeHealthOverlayEnabled: props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
          dataQualitySentinelEnabled: props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled !== undefined ? props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled : undefined,
          overlayResponsePrefs: props.alpacaAccount.tradingPolicy.overlayResponsePrefs !== undefined ? props.alpacaAccount.tradingPolicy.overlayResponsePrefs : undefined,
          miniModelProvider: props.alpacaAccount.tradingPolicy.miniModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.miniModelProvider : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? props.alpacaAccount.tradingPolicy.miniModelId : undefined,
          normalModelProvider: props.alpacaAccount.tradingPolicy.normalModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.normalModelProvider : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? props.alpacaAccount.tradingPolicy.normalModelId : undefined,
          advancedModelProvider: props.alpacaAccount.tradingPolicy.advancedModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelProvider : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelId : undefined,
          modelPrefs: props.alpacaAccount.tradingPolicy.modelPrefs !== undefined ? props.alpacaAccount.tradingPolicy.modelPrefs : undefined,
          auditNotificationPrefs: props.alpacaAccount.tradingPolicy.auditNotificationPrefs !== undefined ? props.alpacaAccount.tradingPolicy.auditNotificationPrefs : undefined,
      overlays: props.alpacaAccount.tradingPolicy.overlays ? 
        Array.isArray(props.alpacaAccount.tradingPolicy.overlays) && props.alpacaAccount.tradingPolicy.overlays.length > 0 &&  props.alpacaAccount.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
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
    user: props.alpacaAccount.user ? 
    typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && (Object.keys(props.alpacaAccount.user)[0] === 'id' || Object.keys(props.alpacaAccount.user)[0] === 'symbol')
? {
    connect: {
      id: props.alpacaAccount.user.id
    }
} : { upsert: {
        where: {
          id: props.alpacaAccount.user.id !== undefined ? {
              equals: props.alpacaAccount.user.id
            } : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              equals: props.alpacaAccount.user.name
            } : undefined,
          email: props.alpacaAccount.user.email !== undefined ? {
              equals: props.alpacaAccount.user.email
            } : undefined,
          customerId: props.alpacaAccount.user.customerId !== undefined ? {
              equals: props.alpacaAccount.user.customerId
            } : undefined,
        },
        update: {
          id: props.alpacaAccount.user.id !== undefined ? {
              set: props.alpacaAccount.user.id
            } : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              set: props.alpacaAccount.user.name
            } : undefined,
          email: props.alpacaAccount.user.email !== undefined ? {
              set: props.alpacaAccount.user.email
            } : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? {
              set: props.alpacaAccount.user.emailVerified
            } : undefined,
          image: props.alpacaAccount.user.image !== undefined ? {
              set: props.alpacaAccount.user.image
            } : undefined,
          deletedAt: props.alpacaAccount.user.deletedAt !== undefined ? {
              set: props.alpacaAccount.user.deletedAt
            } : undefined,
          role: props.alpacaAccount.user.role !== undefined ? {
              set: props.alpacaAccount.user.role
            } : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? {
              set: props.alpacaAccount.user.bio
            } : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? {
              set: props.alpacaAccount.user.jobTitle
            } : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? {
              set: props.alpacaAccount.user.currentAccount
            } : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? {
              set: props.alpacaAccount.user.plan
            } : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? {
              set: props.alpacaAccount.user.openaiAPIKey
            } : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? {
              set: props.alpacaAccount.user.openaiModel
            } : undefined,
      customer: props.alpacaAccount.user.customer ? 
      typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && (Object.keys(props.alpacaAccount.user.customer)[0] === 'id' || Object.keys(props.alpacaAccount.user.customer)[0] === 'symbol')
? {
      connect: {
        id: props.alpacaAccount.user.customer.id
      }
} : { upsert: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? {
                equals: props.alpacaAccount.user.customer.id
              } : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId
              } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name
              } : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                set: props.alpacaAccount.user.customer.authUserId
              } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                set: props.alpacaAccount.user.customer.name
              } : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? {
                set: props.alpacaAccount.user.customer.plan
              } : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? {
                set: props.alpacaAccount.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? {
                set: props.alpacaAccount.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                set: props.alpacaAccount.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
      Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 && props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? 
      Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 && props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? 
      Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 && props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
      linkedProviders: props.alpacaAccount.user.linkedProviders ? 
      Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 && props.alpacaAccount.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.alpacaAccount.user.accountLinkingRequests ? 
      Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 && props.alpacaAccount.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.alpacaAccount.user.reviewedWaitlistEntries ? 
      Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 && props.alpacaAccount.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
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
      llmConfiguration: props.alpacaAccount.user.llmConfiguration ? 
      typeof props.alpacaAccount.user.llmConfiguration === 'object' && Object.keys(props.alpacaAccount.user.llmConfiguration).length === 1 && (Object.keys(props.alpacaAccount.user.llmConfiguration)[0] === 'id' || Object.keys(props.alpacaAccount.user.llmConfiguration)[0] === 'symbol')
? {
      connect: {
        id: props.alpacaAccount.user.llmConfiguration.id
      }
} : { upsert: {
          where: {
            id: props.alpacaAccount.user.llmConfiguration.id !== undefined ? {
                equals: props.alpacaAccount.user.llmConfiguration.id
              } : undefined,
            userId: props.alpacaAccount.user.llmConfiguration.userId !== undefined ? {
                equals: props.alpacaAccount.user.llmConfiguration.userId
              } : undefined,
          },
          update: {
            id: props.alpacaAccount.user.llmConfiguration.id !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.id
              } : undefined,
            defaultProvider: props.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.defaultProvider
              } : undefined,
            miniProvider: props.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.miniProvider
              } : undefined,
            normalProvider: props.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.normalProvider
              } : undefined,
            advancedProvider: props.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.advancedProvider
              } : undefined,
            miniModel: props.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.miniModel
              } : undefined,
            normalModel: props.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.normalModel
              } : undefined,
            advancedModel: props.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.advancedModel
              } : undefined,
            openaiApiKey: props.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.openaiApiKey
              } : undefined,
            anthropicApiKey: props.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.anthropicApiKey
              } : undefined,
            deepseekApiKey: props.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.deepseekApiKey
              } : undefined,
            kimiApiKey: props.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.kimiApiKey
              } : undefined,
            qwenApiKey: props.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.qwenApiKey
              } : undefined,
            xaiApiKey: props.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.xaiApiKey
              } : undefined,
            geminiApiKey: props.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.geminiApiKey
              } : undefined,
          },
          create: {
            defaultProvider: props.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.miniProvider : undefined,
            normalProvider: props.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedProvider : undefined,
            miniModel: props.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? props.alpacaAccount.user.llmConfiguration.miniModel : undefined,
            normalModel: props.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? props.alpacaAccount.user.llmConfiguration.normalModel : undefined,
            advancedModel: props.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
        create: {
          name: props.alpacaAccount.user.name !== undefined ? props.alpacaAccount.user.name : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? props.alpacaAccount.user.emailVerified : undefined,
          image: props.alpacaAccount.user.image !== undefined ? props.alpacaAccount.user.image : undefined,
          deletedAt: props.alpacaAccount.user.deletedAt !== undefined ? props.alpacaAccount.user.deletedAt : undefined,
          role: props.alpacaAccount.user.role !== undefined ? props.alpacaAccount.user.role : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? props.alpacaAccount.user.bio : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? props.alpacaAccount.user.jobTitle : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? props.alpacaAccount.user.currentAccount : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? props.alpacaAccount.user.plan : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? props.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? props.alpacaAccount.user.openaiModel : undefined,
      customer: props.alpacaAccount.user.customer ? 
        typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && Object.keys(props.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? props.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? 
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? 
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
      linkedProviders: props.alpacaAccount.user.linkedProviders ? 
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.alpacaAccount.user.accountLinkingRequests ? 
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.alpacaAccount.user.reviewedWaitlistEntries ? 
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
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
          },
        }))
      } : undefined,
      llmConfiguration: props.alpacaAccount.user.llmConfiguration ? 
        typeof props.alpacaAccount.user.llmConfiguration === 'object' && Object.keys(props.alpacaAccount.user.llmConfiguration).length === 1 && Object.keys(props.alpacaAccount.user.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.llmConfiguration.id !== undefined ? props.alpacaAccount.user.llmConfiguration.id : undefined,
            userId: props.alpacaAccount.user.llmConfiguration.userId !== undefined ? props.alpacaAccount.user.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.miniProvider : undefined,
            normalProvider: props.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedProvider : undefined,
            miniModel: props.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? props.alpacaAccount.user.llmConfiguration.miniModel : undefined,
            normalModel: props.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? props.alpacaAccount.user.llmConfiguration.normalModel : undefined,
            advancedModel: props.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.alpacaAccount.alerts ? 
    Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 && props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.alpacaAccount.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.alpacaAccount.alerts.map((item: any) => ({
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
        type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? props.alpacaAccount.realTime : undefined,
        cryptoTradingEnabled: props.alpacaAccount.cryptoTradingEnabled !== undefined ? props.alpacaAccount.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: props.alpacaAccount.cryptoTradingPairs !== undefined ? {
            set: props.alpacaAccount.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: props.alpacaAccount.cryptoTradeAllocationPct !== undefined ? props.alpacaAccount.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: props.alpacaAccount.tradeAllocationPct !== undefined ? props.alpacaAccount.tradeAllocationPct : undefined,
        autoAllocation: props.alpacaAccount.autoAllocation !== undefined ? props.alpacaAccount.autoAllocation : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
        enablePortfolioTrailingStop: props.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.alpacaAccount.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: props.alpacaAccount.portfolioTrailPercent !== undefined ? props.alpacaAccount.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: props.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.alpacaAccount.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: props.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.alpacaAccount.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: props.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? props.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: props.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? props.alpacaAccount.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: props.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? props.alpacaAccount.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: props.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? props.alpacaAccount.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: props.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? props.alpacaAccount.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: props.alpacaAccount.minimumPriceChangePercent100 !== undefined ? props.alpacaAccount.minimumPriceChangePercent100 : undefined,
        deletedAt: props.alpacaAccount.deletedAt !== undefined ? props.alpacaAccount.deletedAt : undefined,
    tradingPolicy: props.alpacaAccount.tradingPolicy ? 
      typeof props.alpacaAccount.tradingPolicy === 'object' && Object.keys(props.alpacaAccount.tradingPolicy).length === 1 && Object.keys(props.alpacaAccount.tradingPolicy)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.tradingPolicy.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.tradingPolicy.id !== undefined ? props.alpacaAccount.tradingPolicy.id : undefined,
          alpacaAccountId: props.alpacaAccount.tradingPolicy.alpacaAccountId !== undefined ? props.alpacaAccount.tradingPolicy.alpacaAccountId : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.miniModelId 
             } : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.normalModelId 
             } : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.advancedModelId 
             } : undefined,
        },
        create: {
          version: props.alpacaAccount.tradingPolicy.version !== undefined ? props.alpacaAccount.tradingPolicy.version : undefined,
          lastModifiedBy: props.alpacaAccount.tradingPolicy.lastModifiedBy !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedBy : undefined,
          lastModifiedAt: props.alpacaAccount.tradingPolicy.lastModifiedAt !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedAt : undefined,
          autonomyMode: props.alpacaAccount.tradingPolicy.autonomyMode !== undefined ? props.alpacaAccount.tradingPolicy.autonomyMode : undefined,
          realtimeTradingEnabled: props.alpacaAccount.tradingPolicy.realtimeTradingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.realtimeTradingEnabled : undefined,
          paperTradingOnly: props.alpacaAccount.tradingPolicy.paperTradingOnly !== undefined ? props.alpacaAccount.tradingPolicy.paperTradingOnly : undefined,
          killSwitchEnabled: props.alpacaAccount.tradingPolicy.killSwitchEnabled !== undefined ? props.alpacaAccount.tradingPolicy.killSwitchEnabled : undefined,
          autonomyPrefs: props.alpacaAccount.tradingPolicy.autonomyPrefs !== undefined ? props.alpacaAccount.tradingPolicy.autonomyPrefs : undefined,
          equitiesEnabled: props.alpacaAccount.tradingPolicy.equitiesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.equitiesEnabled : undefined,
          etfsEnabled: props.alpacaAccount.tradingPolicy.etfsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.etfsEnabled : undefined,
          cryptoEnabled: props.alpacaAccount.tradingPolicy.cryptoEnabled !== undefined ? props.alpacaAccount.tradingPolicy.cryptoEnabled : undefined,
          optionsEnabled: props.alpacaAccount.tradingPolicy.optionsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.optionsEnabled : undefined,
          futuresEnabled: props.alpacaAccount.tradingPolicy.futuresEnabled !== undefined ? props.alpacaAccount.tradingPolicy.futuresEnabled : undefined,
          forexEnabled: props.alpacaAccount.tradingPolicy.forexEnabled !== undefined ? props.alpacaAccount.tradingPolicy.forexEnabled : undefined,
          shortingEnabled: props.alpacaAccount.tradingPolicy.shortingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.shortingEnabled : undefined,
          marginEnabled: props.alpacaAccount.tradingPolicy.marginEnabled !== undefined ? props.alpacaAccount.tradingPolicy.marginEnabled : undefined,
          fractionalSharesEnabled: props.alpacaAccount.tradingPolicy.fractionalSharesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.fractionalSharesEnabled : undefined,
          assetUniversePrefs: props.alpacaAccount.tradingPolicy.assetUniversePrefs !== undefined ? props.alpacaAccount.tradingPolicy.assetUniversePrefs : undefined,
          maxBuyingPowerUtilPct: props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct : undefined,
          cashFloorPct: props.alpacaAccount.tradingPolicy.cashFloorPct !== undefined ? props.alpacaAccount.tradingPolicy.cashFloorPct : undefined,
          maxGrossExposurePct: props.alpacaAccount.tradingPolicy.maxGrossExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxGrossExposurePct : undefined,
          maxNetExposurePct: props.alpacaAccount.tradingPolicy.maxNetExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxNetExposurePct : undefined,
          maxLeverage: props.alpacaAccount.tradingPolicy.maxLeverage !== undefined ? props.alpacaAccount.tradingPolicy.maxLeverage : undefined,
          maxSymbolConcentrationPct: props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct : undefined,
          maxSectorConcentrationPct: props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct : undefined,
          maxOpenPositions: props.alpacaAccount.tradingPolicy.maxOpenPositions !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenPositions : undefined,
          maxOpenOrders: props.alpacaAccount.tradingPolicy.maxOpenOrders !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenOrders : undefined,
          riskBudgetPrefs: props.alpacaAccount.tradingPolicy.riskBudgetPrefs !== undefined ? props.alpacaAccount.tradingPolicy.riskBudgetPrefs : undefined,
          signalConsumptionPrefs: props.alpacaAccount.tradingPolicy.signalConsumptionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.signalConsumptionPrefs : undefined,
          executionPrefs: props.alpacaAccount.tradingPolicy.executionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.executionPrefs : undefined,
          positionManagementPrefs: props.alpacaAccount.tradingPolicy.positionManagementPrefs !== undefined ? props.alpacaAccount.tradingPolicy.positionManagementPrefs : undefined,
          portfolioConstructionPrefs: props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs : undefined,
          macroOverlayEnabled: props.alpacaAccount.tradingPolicy.macroOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.macroOverlayEnabled : undefined,
          sectorOverlayEnabled: props.alpacaAccount.tradingPolicy.sectorOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.sectorOverlayEnabled : undefined,
          volatilityOverlayEnabled: props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled : undefined,
          liquidityStressOverlayEnabled: props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled : undefined,
          blackSwanProtectionEnabled: props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled : undefined,
          drawdownGuardianEnabled: props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled !== undefined ? props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled : undefined,
          correlationSpikeProtectionEnabled: props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
          newsEventRiskOverlayEnabled: props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
          exchangeHealthOverlayEnabled: props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
          dataQualitySentinelEnabled: props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled !== undefined ? props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled : undefined,
          overlayResponsePrefs: props.alpacaAccount.tradingPolicy.overlayResponsePrefs !== undefined ? props.alpacaAccount.tradingPolicy.overlayResponsePrefs : undefined,
          miniModelProvider: props.alpacaAccount.tradingPolicy.miniModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.miniModelProvider : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? props.alpacaAccount.tradingPolicy.miniModelId : undefined,
          normalModelProvider: props.alpacaAccount.tradingPolicy.normalModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.normalModelProvider : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? props.alpacaAccount.tradingPolicy.normalModelId : undefined,
          advancedModelProvider: props.alpacaAccount.tradingPolicy.advancedModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelProvider : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelId : undefined,
          modelPrefs: props.alpacaAccount.tradingPolicy.modelPrefs !== undefined ? props.alpacaAccount.tradingPolicy.modelPrefs : undefined,
          auditNotificationPrefs: props.alpacaAccount.tradingPolicy.auditNotificationPrefs !== undefined ? props.alpacaAccount.tradingPolicy.auditNotificationPrefs : undefined,
      overlays: props.alpacaAccount.tradingPolicy.overlays ? 
        Array.isArray(props.alpacaAccount.tradingPolicy.overlays) && props.alpacaAccount.tradingPolicy.overlays.length > 0 &&  props.alpacaAccount.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
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
    user: props.alpacaAccount.user ? 
      typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.user.id !== undefined ? props.alpacaAccount.user.id : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              equals: props.alpacaAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.alpacaAccount.user.name !== undefined ? props.alpacaAccount.user.name : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? props.alpacaAccount.user.emailVerified : undefined,
          image: props.alpacaAccount.user.image !== undefined ? props.alpacaAccount.user.image : undefined,
          deletedAt: props.alpacaAccount.user.deletedAt !== undefined ? props.alpacaAccount.user.deletedAt : undefined,
          role: props.alpacaAccount.user.role !== undefined ? props.alpacaAccount.user.role : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? props.alpacaAccount.user.bio : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? props.alpacaAccount.user.jobTitle : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? props.alpacaAccount.user.currentAccount : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? props.alpacaAccount.user.plan : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? props.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? props.alpacaAccount.user.openaiModel : undefined,
      customer: props.alpacaAccount.user.customer ? 
        typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && Object.keys(props.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? props.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? 
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? 
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
      linkedProviders: props.alpacaAccount.user.linkedProviders ? 
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.alpacaAccount.user.accountLinkingRequests ? 
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.alpacaAccount.user.reviewedWaitlistEntries ? 
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
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
          },
        }))
      } : undefined,
      llmConfiguration: props.alpacaAccount.user.llmConfiguration ? 
        typeof props.alpacaAccount.user.llmConfiguration === 'object' && Object.keys(props.alpacaAccount.user.llmConfiguration).length === 1 && Object.keys(props.alpacaAccount.user.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.llmConfiguration.id !== undefined ? props.alpacaAccount.user.llmConfiguration.id : undefined,
            userId: props.alpacaAccount.user.llmConfiguration.userId !== undefined ? props.alpacaAccount.user.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.miniProvider : undefined,
            normalProvider: props.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedProvider : undefined,
            miniModel: props.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? props.alpacaAccount.user.llmConfiguration.miniModel : undefined,
            normalModel: props.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? props.alpacaAccount.user.llmConfiguration.normalModel : undefined,
            advancedModel: props.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.alpacaAccount.alerts ? 
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 &&  props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
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
          logger.error("Non-retryable constraint violation in updateOneAllocation", {
            operation: 'updateOneAllocation',
            model: 'Allocation',
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
          logger.warn("Database connection error in updateOneAllocation, retrying...", {
            operation: 'updateOneAllocation',
            model: 'Allocation',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database update operation failed", {
          operation: 'updateOneAllocation',
          model: 'Allocation',
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
  alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
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
  alpacaAccount: props.alpacaAccount ? 
    typeof props.alpacaAccount === 'object' && Object.keys(props.alpacaAccount).length === 1 && Object.keys(props.alpacaAccount)[0] === 'id'
    ? { connect: {
        id: props.alpacaAccount.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.alpacaAccount.id !== undefined ? props.alpacaAccount.id : undefined,
        type: props.alpacaAccount.type !== undefined ? {
            equals: props.alpacaAccount.type 
           } : undefined,
        userId: props.alpacaAccount.userId !== undefined ? {
            equals: props.alpacaAccount.userId 
           } : undefined,
      },
      create: {
        type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? props.alpacaAccount.realTime : undefined,
        cryptoTradingEnabled: props.alpacaAccount.cryptoTradingEnabled !== undefined ? props.alpacaAccount.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: props.alpacaAccount.cryptoTradingPairs !== undefined ? {
            set: props.alpacaAccount.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: props.alpacaAccount.cryptoTradeAllocationPct !== undefined ? props.alpacaAccount.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: props.alpacaAccount.tradeAllocationPct !== undefined ? props.alpacaAccount.tradeAllocationPct : undefined,
        autoAllocation: props.alpacaAccount.autoAllocation !== undefined ? props.alpacaAccount.autoAllocation : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
        enablePortfolioTrailingStop: props.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.alpacaAccount.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: props.alpacaAccount.portfolioTrailPercent !== undefined ? props.alpacaAccount.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: props.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.alpacaAccount.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: props.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.alpacaAccount.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: props.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? props.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: props.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? props.alpacaAccount.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: props.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? props.alpacaAccount.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: props.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? props.alpacaAccount.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: props.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? props.alpacaAccount.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: props.alpacaAccount.minimumPriceChangePercent100 !== undefined ? props.alpacaAccount.minimumPriceChangePercent100 : undefined,
        deletedAt: props.alpacaAccount.deletedAt !== undefined ? props.alpacaAccount.deletedAt : undefined,
    tradingPolicy: props.alpacaAccount.tradingPolicy ? 
      typeof props.alpacaAccount.tradingPolicy === 'object' && Object.keys(props.alpacaAccount.tradingPolicy).length === 1 && Object.keys(props.alpacaAccount.tradingPolicy)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.tradingPolicy.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.tradingPolicy.id !== undefined ? props.alpacaAccount.tradingPolicy.id : undefined,
          alpacaAccountId: props.alpacaAccount.tradingPolicy.alpacaAccountId !== undefined ? props.alpacaAccount.tradingPolicy.alpacaAccountId : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.miniModelId 
             } : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.normalModelId 
             } : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.advancedModelId 
             } : undefined,
        },
        create: {
          version: props.alpacaAccount.tradingPolicy.version !== undefined ? props.alpacaAccount.tradingPolicy.version : undefined,
          lastModifiedBy: props.alpacaAccount.tradingPolicy.lastModifiedBy !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedBy : undefined,
          lastModifiedAt: props.alpacaAccount.tradingPolicy.lastModifiedAt !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedAt : undefined,
          autonomyMode: props.alpacaAccount.tradingPolicy.autonomyMode !== undefined ? props.alpacaAccount.tradingPolicy.autonomyMode : undefined,
          realtimeTradingEnabled: props.alpacaAccount.tradingPolicy.realtimeTradingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.realtimeTradingEnabled : undefined,
          paperTradingOnly: props.alpacaAccount.tradingPolicy.paperTradingOnly !== undefined ? props.alpacaAccount.tradingPolicy.paperTradingOnly : undefined,
          killSwitchEnabled: props.alpacaAccount.tradingPolicy.killSwitchEnabled !== undefined ? props.alpacaAccount.tradingPolicy.killSwitchEnabled : undefined,
          autonomyPrefs: props.alpacaAccount.tradingPolicy.autonomyPrefs !== undefined ? props.alpacaAccount.tradingPolicy.autonomyPrefs : undefined,
          equitiesEnabled: props.alpacaAccount.tradingPolicy.equitiesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.equitiesEnabled : undefined,
          etfsEnabled: props.alpacaAccount.tradingPolicy.etfsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.etfsEnabled : undefined,
          cryptoEnabled: props.alpacaAccount.tradingPolicy.cryptoEnabled !== undefined ? props.alpacaAccount.tradingPolicy.cryptoEnabled : undefined,
          optionsEnabled: props.alpacaAccount.tradingPolicy.optionsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.optionsEnabled : undefined,
          futuresEnabled: props.alpacaAccount.tradingPolicy.futuresEnabled !== undefined ? props.alpacaAccount.tradingPolicy.futuresEnabled : undefined,
          forexEnabled: props.alpacaAccount.tradingPolicy.forexEnabled !== undefined ? props.alpacaAccount.tradingPolicy.forexEnabled : undefined,
          shortingEnabled: props.alpacaAccount.tradingPolicy.shortingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.shortingEnabled : undefined,
          marginEnabled: props.alpacaAccount.tradingPolicy.marginEnabled !== undefined ? props.alpacaAccount.tradingPolicy.marginEnabled : undefined,
          fractionalSharesEnabled: props.alpacaAccount.tradingPolicy.fractionalSharesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.fractionalSharesEnabled : undefined,
          assetUniversePrefs: props.alpacaAccount.tradingPolicy.assetUniversePrefs !== undefined ? props.alpacaAccount.tradingPolicy.assetUniversePrefs : undefined,
          maxBuyingPowerUtilPct: props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct : undefined,
          cashFloorPct: props.alpacaAccount.tradingPolicy.cashFloorPct !== undefined ? props.alpacaAccount.tradingPolicy.cashFloorPct : undefined,
          maxGrossExposurePct: props.alpacaAccount.tradingPolicy.maxGrossExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxGrossExposurePct : undefined,
          maxNetExposurePct: props.alpacaAccount.tradingPolicy.maxNetExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxNetExposurePct : undefined,
          maxLeverage: props.alpacaAccount.tradingPolicy.maxLeverage !== undefined ? props.alpacaAccount.tradingPolicy.maxLeverage : undefined,
          maxSymbolConcentrationPct: props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct : undefined,
          maxSectorConcentrationPct: props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct : undefined,
          maxOpenPositions: props.alpacaAccount.tradingPolicy.maxOpenPositions !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenPositions : undefined,
          maxOpenOrders: props.alpacaAccount.tradingPolicy.maxOpenOrders !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenOrders : undefined,
          riskBudgetPrefs: props.alpacaAccount.tradingPolicy.riskBudgetPrefs !== undefined ? props.alpacaAccount.tradingPolicy.riskBudgetPrefs : undefined,
          signalConsumptionPrefs: props.alpacaAccount.tradingPolicy.signalConsumptionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.signalConsumptionPrefs : undefined,
          executionPrefs: props.alpacaAccount.tradingPolicy.executionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.executionPrefs : undefined,
          positionManagementPrefs: props.alpacaAccount.tradingPolicy.positionManagementPrefs !== undefined ? props.alpacaAccount.tradingPolicy.positionManagementPrefs : undefined,
          portfolioConstructionPrefs: props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs : undefined,
          macroOverlayEnabled: props.alpacaAccount.tradingPolicy.macroOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.macroOverlayEnabled : undefined,
          sectorOverlayEnabled: props.alpacaAccount.tradingPolicy.sectorOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.sectorOverlayEnabled : undefined,
          volatilityOverlayEnabled: props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled : undefined,
          liquidityStressOverlayEnabled: props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled : undefined,
          blackSwanProtectionEnabled: props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled : undefined,
          drawdownGuardianEnabled: props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled !== undefined ? props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled : undefined,
          correlationSpikeProtectionEnabled: props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
          newsEventRiskOverlayEnabled: props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
          exchangeHealthOverlayEnabled: props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
          dataQualitySentinelEnabled: props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled !== undefined ? props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled : undefined,
          overlayResponsePrefs: props.alpacaAccount.tradingPolicy.overlayResponsePrefs !== undefined ? props.alpacaAccount.tradingPolicy.overlayResponsePrefs : undefined,
          miniModelProvider: props.alpacaAccount.tradingPolicy.miniModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.miniModelProvider : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? props.alpacaAccount.tradingPolicy.miniModelId : undefined,
          normalModelProvider: props.alpacaAccount.tradingPolicy.normalModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.normalModelProvider : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? props.alpacaAccount.tradingPolicy.normalModelId : undefined,
          advancedModelProvider: props.alpacaAccount.tradingPolicy.advancedModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelProvider : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelId : undefined,
          modelPrefs: props.alpacaAccount.tradingPolicy.modelPrefs !== undefined ? props.alpacaAccount.tradingPolicy.modelPrefs : undefined,
          auditNotificationPrefs: props.alpacaAccount.tradingPolicy.auditNotificationPrefs !== undefined ? props.alpacaAccount.tradingPolicy.auditNotificationPrefs : undefined,
      overlays: props.alpacaAccount.tradingPolicy.overlays ? 
        Array.isArray(props.alpacaAccount.tradingPolicy.overlays) && props.alpacaAccount.tradingPolicy.overlays.length > 0 &&  props.alpacaAccount.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
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
    user: props.alpacaAccount.user ? 
      typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.user.id !== undefined ? props.alpacaAccount.user.id : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              equals: props.alpacaAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.alpacaAccount.user.name !== undefined ? props.alpacaAccount.user.name : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? props.alpacaAccount.user.emailVerified : undefined,
          image: props.alpacaAccount.user.image !== undefined ? props.alpacaAccount.user.image : undefined,
          deletedAt: props.alpacaAccount.user.deletedAt !== undefined ? props.alpacaAccount.user.deletedAt : undefined,
          role: props.alpacaAccount.user.role !== undefined ? props.alpacaAccount.user.role : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? props.alpacaAccount.user.bio : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? props.alpacaAccount.user.jobTitle : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? props.alpacaAccount.user.currentAccount : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? props.alpacaAccount.user.plan : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? props.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? props.alpacaAccount.user.openaiModel : undefined,
      customer: props.alpacaAccount.user.customer ? 
        typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && Object.keys(props.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? props.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? 
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? 
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
      linkedProviders: props.alpacaAccount.user.linkedProviders ? 
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.alpacaAccount.user.accountLinkingRequests ? 
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.alpacaAccount.user.reviewedWaitlistEntries ? 
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
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
          },
        }))
      } : undefined,
      llmConfiguration: props.alpacaAccount.user.llmConfiguration ? 
        typeof props.alpacaAccount.user.llmConfiguration === 'object' && Object.keys(props.alpacaAccount.user.llmConfiguration).length === 1 && Object.keys(props.alpacaAccount.user.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.llmConfiguration.id !== undefined ? props.alpacaAccount.user.llmConfiguration.id : undefined,
            userId: props.alpacaAccount.user.llmConfiguration.userId !== undefined ? props.alpacaAccount.user.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.miniProvider : undefined,
            normalProvider: props.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedProvider : undefined,
            miniModel: props.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? props.alpacaAccount.user.llmConfiguration.miniModel : undefined,
            normalModel: props.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? props.alpacaAccount.user.llmConfiguration.normalModel : undefined,
            advancedModel: props.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.alpacaAccount.alerts ? 
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 &&  props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
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
  alpacaAccount: props.alpacaAccount ? 
  typeof props.alpacaAccount === 'object' && Object.keys(props.alpacaAccount).length === 1 && (Object.keys(props.alpacaAccount)[0] === 'id' || Object.keys(props.alpacaAccount)[0] === 'symbol')
? {
  connect: {
    id: props.alpacaAccount.id
  }
} : { upsert: {
      where: {
        id: props.alpacaAccount.id !== undefined ? {
            equals: props.alpacaAccount.id
          } : undefined,
        type: props.alpacaAccount.type !== undefined ? {
            equals: props.alpacaAccount.type
          } : undefined,
        userId: props.alpacaAccount.userId !== undefined ? {
            equals: props.alpacaAccount.userId
          } : undefined,
      },
      update: {
        id: props.alpacaAccount.id !== undefined ? {
            set: props.alpacaAccount.id
          } : undefined,
        type: props.alpacaAccount.type !== undefined ? {
            set: props.alpacaAccount.type
          } : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? {
            set: props.alpacaAccount.APIKey
          } : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? {
            set: props.alpacaAccount.APISecret
          } : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? {
            set: props.alpacaAccount.marketOpen
          } : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? {
            set: props.alpacaAccount.realTime
          } : undefined,
        cryptoTradingEnabled: props.alpacaAccount.cryptoTradingEnabled !== undefined ? {
            set: props.alpacaAccount.cryptoTradingEnabled
          } : undefined,
        cryptoTradingPairs: props.alpacaAccount.cryptoTradingPairs !== undefined ? {
            set: props.alpacaAccount.cryptoTradingPairs
          } : undefined,
        cryptoTradeAllocationPct: props.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
            set: props.alpacaAccount.cryptoTradeAllocationPct
          } : undefined,
        tradeAllocationPct: props.alpacaAccount.tradeAllocationPct !== undefined ? {
            set: props.alpacaAccount.tradeAllocationPct
          } : undefined,
        autoAllocation: props.alpacaAccount.autoAllocation !== undefined ? {
            set: props.alpacaAccount.autoAllocation
          } : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? {
            set: props.alpacaAccount.minPercentageChange
          } : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? {
            set: props.alpacaAccount.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: props.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
            set: props.alpacaAccount.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: props.alpacaAccount.portfolioTrailPercent !== undefined ? {
            set: props.alpacaAccount.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: props.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
            set: props.alpacaAccount.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: props.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
            set: props.alpacaAccount.reducedPortfolioTrailPercent
          } : undefined,
        defaultTrailingStopPercentage100: props.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
            set: props.alpacaAccount.defaultTrailingStopPercentage100
          } : undefined,
        firstTrailReductionThreshold100: props.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
            set: props.alpacaAccount.firstTrailReductionThreshold100
          } : undefined,
        secondTrailReductionThreshold100: props.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
            set: props.alpacaAccount.secondTrailReductionThreshold100
          } : undefined,
        firstReducedTrailPercentage100: props.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
            set: props.alpacaAccount.firstReducedTrailPercentage100
          } : undefined,
        secondReducedTrailPercentage100: props.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
            set: props.alpacaAccount.secondReducedTrailPercentage100
          } : undefined,
        minimumPriceChangePercent100: props.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
            set: props.alpacaAccount.minimumPriceChangePercent100
          } : undefined,
        deletedAt: props.alpacaAccount.deletedAt !== undefined ? {
            set: props.alpacaAccount.deletedAt
          } : undefined,
    tradingPolicy: props.alpacaAccount.tradingPolicy ? 
    typeof props.alpacaAccount.tradingPolicy === 'object' && Object.keys(props.alpacaAccount.tradingPolicy).length === 1 && (Object.keys(props.alpacaAccount.tradingPolicy)[0] === 'id' || Object.keys(props.alpacaAccount.tradingPolicy)[0] === 'symbol')
? {
    connect: {
      id: props.alpacaAccount.tradingPolicy.id
    }
} : { upsert: {
        where: {
          id: props.alpacaAccount.tradingPolicy.id !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.id
            } : undefined,
          alpacaAccountId: props.alpacaAccount.tradingPolicy.alpacaAccountId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.alpacaAccountId
            } : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.miniModelId
            } : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.normalModelId
            } : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.advancedModelId
            } : undefined,
        },
        update: {
          id: props.alpacaAccount.tradingPolicy.id !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.id
            } : undefined,
          version: props.alpacaAccount.tradingPolicy.version !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.version
            } : undefined,
          lastModifiedBy: props.alpacaAccount.tradingPolicy.lastModifiedBy !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.lastModifiedBy
            } : undefined,
          lastModifiedAt: props.alpacaAccount.tradingPolicy.lastModifiedAt !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.lastModifiedAt
            } : undefined,
          autonomyMode: props.alpacaAccount.tradingPolicy.autonomyMode !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.autonomyMode
            } : undefined,
          realtimeTradingEnabled: props.alpacaAccount.tradingPolicy.realtimeTradingEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.realtimeTradingEnabled
            } : undefined,
          paperTradingOnly: props.alpacaAccount.tradingPolicy.paperTradingOnly !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.paperTradingOnly
            } : undefined,
          killSwitchEnabled: props.alpacaAccount.tradingPolicy.killSwitchEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.killSwitchEnabled
            } : undefined,
          autonomyPrefs: props.alpacaAccount.tradingPolicy.autonomyPrefs !== undefined ? props.alpacaAccount.tradingPolicy.autonomyPrefs : undefined,
          equitiesEnabled: props.alpacaAccount.tradingPolicy.equitiesEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.equitiesEnabled
            } : undefined,
          etfsEnabled: props.alpacaAccount.tradingPolicy.etfsEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.etfsEnabled
            } : undefined,
          cryptoEnabled: props.alpacaAccount.tradingPolicy.cryptoEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.cryptoEnabled
            } : undefined,
          optionsEnabled: props.alpacaAccount.tradingPolicy.optionsEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.optionsEnabled
            } : undefined,
          futuresEnabled: props.alpacaAccount.tradingPolicy.futuresEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.futuresEnabled
            } : undefined,
          forexEnabled: props.alpacaAccount.tradingPolicy.forexEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.forexEnabled
            } : undefined,
          shortingEnabled: props.alpacaAccount.tradingPolicy.shortingEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.shortingEnabled
            } : undefined,
          marginEnabled: props.alpacaAccount.tradingPolicy.marginEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.marginEnabled
            } : undefined,
          fractionalSharesEnabled: props.alpacaAccount.tradingPolicy.fractionalSharesEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.fractionalSharesEnabled
            } : undefined,
          assetUniversePrefs: props.alpacaAccount.tradingPolicy.assetUniversePrefs !== undefined ? props.alpacaAccount.tradingPolicy.assetUniversePrefs : undefined,
          maxBuyingPowerUtilPct: props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct
            } : undefined,
          cashFloorPct: props.alpacaAccount.tradingPolicy.cashFloorPct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.cashFloorPct
            } : undefined,
          maxGrossExposurePct: props.alpacaAccount.tradingPolicy.maxGrossExposurePct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxGrossExposurePct
            } : undefined,
          maxNetExposurePct: props.alpacaAccount.tradingPolicy.maxNetExposurePct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxNetExposurePct
            } : undefined,
          maxLeverage: props.alpacaAccount.tradingPolicy.maxLeverage !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxLeverage
            } : undefined,
          maxSymbolConcentrationPct: props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct
            } : undefined,
          maxSectorConcentrationPct: props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct
            } : undefined,
          maxOpenPositions: props.alpacaAccount.tradingPolicy.maxOpenPositions !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxOpenPositions
            } : undefined,
          maxOpenOrders: props.alpacaAccount.tradingPolicy.maxOpenOrders !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.maxOpenOrders
            } : undefined,
          riskBudgetPrefs: props.alpacaAccount.tradingPolicy.riskBudgetPrefs !== undefined ? props.alpacaAccount.tradingPolicy.riskBudgetPrefs : undefined,
          signalConsumptionPrefs: props.alpacaAccount.tradingPolicy.signalConsumptionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.signalConsumptionPrefs : undefined,
          executionPrefs: props.alpacaAccount.tradingPolicy.executionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.executionPrefs : undefined,
          positionManagementPrefs: props.alpacaAccount.tradingPolicy.positionManagementPrefs !== undefined ? props.alpacaAccount.tradingPolicy.positionManagementPrefs : undefined,
          portfolioConstructionPrefs: props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs : undefined,
          macroOverlayEnabled: props.alpacaAccount.tradingPolicy.macroOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.macroOverlayEnabled
            } : undefined,
          sectorOverlayEnabled: props.alpacaAccount.tradingPolicy.sectorOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.sectorOverlayEnabled
            } : undefined,
          volatilityOverlayEnabled: props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled
            } : undefined,
          liquidityStressOverlayEnabled: props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled
            } : undefined,
          blackSwanProtectionEnabled: props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled
            } : undefined,
          drawdownGuardianEnabled: props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled
            } : undefined,
          correlationSpikeProtectionEnabled: props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled
            } : undefined,
          newsEventRiskOverlayEnabled: props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled
            } : undefined,
          exchangeHealthOverlayEnabled: props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled
            } : undefined,
          dataQualitySentinelEnabled: props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled
            } : undefined,
          overlayResponsePrefs: props.alpacaAccount.tradingPolicy.overlayResponsePrefs !== undefined ? props.alpacaAccount.tradingPolicy.overlayResponsePrefs : undefined,
          miniModelProvider: props.alpacaAccount.tradingPolicy.miniModelProvider !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.miniModelProvider
            } : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.miniModelId
            } : undefined,
          normalModelProvider: props.alpacaAccount.tradingPolicy.normalModelProvider !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.normalModelProvider
            } : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.normalModelId
            } : undefined,
          advancedModelProvider: props.alpacaAccount.tradingPolicy.advancedModelProvider !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.advancedModelProvider
            } : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? {
              set: props.alpacaAccount.tradingPolicy.advancedModelId
            } : undefined,
          modelPrefs: props.alpacaAccount.tradingPolicy.modelPrefs !== undefined ? props.alpacaAccount.tradingPolicy.modelPrefs : undefined,
          auditNotificationPrefs: props.alpacaAccount.tradingPolicy.auditNotificationPrefs !== undefined ? props.alpacaAccount.tradingPolicy.auditNotificationPrefs : undefined,
      overlays: props.alpacaAccount.tradingPolicy.overlays ? 
      Array.isArray(props.alpacaAccount.tradingPolicy.overlays) && props.alpacaAccount.tradingPolicy.overlays.length > 0 && props.alpacaAccount.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
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
            mutations: item.mutations !== undefined ? item.mutations : undefined,
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
          version: props.alpacaAccount.tradingPolicy.version !== undefined ? props.alpacaAccount.tradingPolicy.version : undefined,
          lastModifiedBy: props.alpacaAccount.tradingPolicy.lastModifiedBy !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedBy : undefined,
          lastModifiedAt: props.alpacaAccount.tradingPolicy.lastModifiedAt !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedAt : undefined,
          autonomyMode: props.alpacaAccount.tradingPolicy.autonomyMode !== undefined ? props.alpacaAccount.tradingPolicy.autonomyMode : undefined,
          realtimeTradingEnabled: props.alpacaAccount.tradingPolicy.realtimeTradingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.realtimeTradingEnabled : undefined,
          paperTradingOnly: props.alpacaAccount.tradingPolicy.paperTradingOnly !== undefined ? props.alpacaAccount.tradingPolicy.paperTradingOnly : undefined,
          killSwitchEnabled: props.alpacaAccount.tradingPolicy.killSwitchEnabled !== undefined ? props.alpacaAccount.tradingPolicy.killSwitchEnabled : undefined,
          autonomyPrefs: props.alpacaAccount.tradingPolicy.autonomyPrefs !== undefined ? props.alpacaAccount.tradingPolicy.autonomyPrefs : undefined,
          equitiesEnabled: props.alpacaAccount.tradingPolicy.equitiesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.equitiesEnabled : undefined,
          etfsEnabled: props.alpacaAccount.tradingPolicy.etfsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.etfsEnabled : undefined,
          cryptoEnabled: props.alpacaAccount.tradingPolicy.cryptoEnabled !== undefined ? props.alpacaAccount.tradingPolicy.cryptoEnabled : undefined,
          optionsEnabled: props.alpacaAccount.tradingPolicy.optionsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.optionsEnabled : undefined,
          futuresEnabled: props.alpacaAccount.tradingPolicy.futuresEnabled !== undefined ? props.alpacaAccount.tradingPolicy.futuresEnabled : undefined,
          forexEnabled: props.alpacaAccount.tradingPolicy.forexEnabled !== undefined ? props.alpacaAccount.tradingPolicy.forexEnabled : undefined,
          shortingEnabled: props.alpacaAccount.tradingPolicy.shortingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.shortingEnabled : undefined,
          marginEnabled: props.alpacaAccount.tradingPolicy.marginEnabled !== undefined ? props.alpacaAccount.tradingPolicy.marginEnabled : undefined,
          fractionalSharesEnabled: props.alpacaAccount.tradingPolicy.fractionalSharesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.fractionalSharesEnabled : undefined,
          assetUniversePrefs: props.alpacaAccount.tradingPolicy.assetUniversePrefs !== undefined ? props.alpacaAccount.tradingPolicy.assetUniversePrefs : undefined,
          maxBuyingPowerUtilPct: props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct : undefined,
          cashFloorPct: props.alpacaAccount.tradingPolicy.cashFloorPct !== undefined ? props.alpacaAccount.tradingPolicy.cashFloorPct : undefined,
          maxGrossExposurePct: props.alpacaAccount.tradingPolicy.maxGrossExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxGrossExposurePct : undefined,
          maxNetExposurePct: props.alpacaAccount.tradingPolicy.maxNetExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxNetExposurePct : undefined,
          maxLeverage: props.alpacaAccount.tradingPolicy.maxLeverage !== undefined ? props.alpacaAccount.tradingPolicy.maxLeverage : undefined,
          maxSymbolConcentrationPct: props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct : undefined,
          maxSectorConcentrationPct: props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct : undefined,
          maxOpenPositions: props.alpacaAccount.tradingPolicy.maxOpenPositions !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenPositions : undefined,
          maxOpenOrders: props.alpacaAccount.tradingPolicy.maxOpenOrders !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenOrders : undefined,
          riskBudgetPrefs: props.alpacaAccount.tradingPolicy.riskBudgetPrefs !== undefined ? props.alpacaAccount.tradingPolicy.riskBudgetPrefs : undefined,
          signalConsumptionPrefs: props.alpacaAccount.tradingPolicy.signalConsumptionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.signalConsumptionPrefs : undefined,
          executionPrefs: props.alpacaAccount.tradingPolicy.executionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.executionPrefs : undefined,
          positionManagementPrefs: props.alpacaAccount.tradingPolicy.positionManagementPrefs !== undefined ? props.alpacaAccount.tradingPolicy.positionManagementPrefs : undefined,
          portfolioConstructionPrefs: props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs : undefined,
          macroOverlayEnabled: props.alpacaAccount.tradingPolicy.macroOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.macroOverlayEnabled : undefined,
          sectorOverlayEnabled: props.alpacaAccount.tradingPolicy.sectorOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.sectorOverlayEnabled : undefined,
          volatilityOverlayEnabled: props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled : undefined,
          liquidityStressOverlayEnabled: props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled : undefined,
          blackSwanProtectionEnabled: props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled : undefined,
          drawdownGuardianEnabled: props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled !== undefined ? props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled : undefined,
          correlationSpikeProtectionEnabled: props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
          newsEventRiskOverlayEnabled: props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
          exchangeHealthOverlayEnabled: props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
          dataQualitySentinelEnabled: props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled !== undefined ? props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled : undefined,
          overlayResponsePrefs: props.alpacaAccount.tradingPolicy.overlayResponsePrefs !== undefined ? props.alpacaAccount.tradingPolicy.overlayResponsePrefs : undefined,
          miniModelProvider: props.alpacaAccount.tradingPolicy.miniModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.miniModelProvider : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? props.alpacaAccount.tradingPolicy.miniModelId : undefined,
          normalModelProvider: props.alpacaAccount.tradingPolicy.normalModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.normalModelProvider : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? props.alpacaAccount.tradingPolicy.normalModelId : undefined,
          advancedModelProvider: props.alpacaAccount.tradingPolicy.advancedModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelProvider : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelId : undefined,
          modelPrefs: props.alpacaAccount.tradingPolicy.modelPrefs !== undefined ? props.alpacaAccount.tradingPolicy.modelPrefs : undefined,
          auditNotificationPrefs: props.alpacaAccount.tradingPolicy.auditNotificationPrefs !== undefined ? props.alpacaAccount.tradingPolicy.auditNotificationPrefs : undefined,
      overlays: props.alpacaAccount.tradingPolicy.overlays ? 
        Array.isArray(props.alpacaAccount.tradingPolicy.overlays) && props.alpacaAccount.tradingPolicy.overlays.length > 0 &&  props.alpacaAccount.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
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
    user: props.alpacaAccount.user ? 
    typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && (Object.keys(props.alpacaAccount.user)[0] === 'id' || Object.keys(props.alpacaAccount.user)[0] === 'symbol')
? {
    connect: {
      id: props.alpacaAccount.user.id
    }
} : { upsert: {
        where: {
          id: props.alpacaAccount.user.id !== undefined ? {
              equals: props.alpacaAccount.user.id
            } : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              equals: props.alpacaAccount.user.name
            } : undefined,
          email: props.alpacaAccount.user.email !== undefined ? {
              equals: props.alpacaAccount.user.email
            } : undefined,
          customerId: props.alpacaAccount.user.customerId !== undefined ? {
              equals: props.alpacaAccount.user.customerId
            } : undefined,
        },
        update: {
          id: props.alpacaAccount.user.id !== undefined ? {
              set: props.alpacaAccount.user.id
            } : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              set: props.alpacaAccount.user.name
            } : undefined,
          email: props.alpacaAccount.user.email !== undefined ? {
              set: props.alpacaAccount.user.email
            } : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? {
              set: props.alpacaAccount.user.emailVerified
            } : undefined,
          image: props.alpacaAccount.user.image !== undefined ? {
              set: props.alpacaAccount.user.image
            } : undefined,
          deletedAt: props.alpacaAccount.user.deletedAt !== undefined ? {
              set: props.alpacaAccount.user.deletedAt
            } : undefined,
          role: props.alpacaAccount.user.role !== undefined ? {
              set: props.alpacaAccount.user.role
            } : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? {
              set: props.alpacaAccount.user.bio
            } : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? {
              set: props.alpacaAccount.user.jobTitle
            } : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? {
              set: props.alpacaAccount.user.currentAccount
            } : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? {
              set: props.alpacaAccount.user.plan
            } : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? {
              set: props.alpacaAccount.user.openaiAPIKey
            } : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? {
              set: props.alpacaAccount.user.openaiModel
            } : undefined,
      customer: props.alpacaAccount.user.customer ? 
      typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && (Object.keys(props.alpacaAccount.user.customer)[0] === 'id' || Object.keys(props.alpacaAccount.user.customer)[0] === 'symbol')
? {
      connect: {
        id: props.alpacaAccount.user.customer.id
      }
} : { upsert: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? {
                equals: props.alpacaAccount.user.customer.id
              } : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId
              } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name
              } : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                set: props.alpacaAccount.user.customer.authUserId
              } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                set: props.alpacaAccount.user.customer.name
              } : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? {
                set: props.alpacaAccount.user.customer.plan
              } : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? {
                set: props.alpacaAccount.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? {
                set: props.alpacaAccount.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                set: props.alpacaAccount.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
      Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 && props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? 
      Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 && props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? 
      Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 && props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
      linkedProviders: props.alpacaAccount.user.linkedProviders ? 
      Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 && props.alpacaAccount.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.alpacaAccount.user.accountLinkingRequests ? 
      Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 && props.alpacaAccount.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.alpacaAccount.user.reviewedWaitlistEntries ? 
      Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 && props.alpacaAccount.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
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
      llmConfiguration: props.alpacaAccount.user.llmConfiguration ? 
      typeof props.alpacaAccount.user.llmConfiguration === 'object' && Object.keys(props.alpacaAccount.user.llmConfiguration).length === 1 && (Object.keys(props.alpacaAccount.user.llmConfiguration)[0] === 'id' || Object.keys(props.alpacaAccount.user.llmConfiguration)[0] === 'symbol')
? {
      connect: {
        id: props.alpacaAccount.user.llmConfiguration.id
      }
} : { upsert: {
          where: {
            id: props.alpacaAccount.user.llmConfiguration.id !== undefined ? {
                equals: props.alpacaAccount.user.llmConfiguration.id
              } : undefined,
            userId: props.alpacaAccount.user.llmConfiguration.userId !== undefined ? {
                equals: props.alpacaAccount.user.llmConfiguration.userId
              } : undefined,
          },
          update: {
            id: props.alpacaAccount.user.llmConfiguration.id !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.id
              } : undefined,
            defaultProvider: props.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.defaultProvider
              } : undefined,
            miniProvider: props.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.miniProvider
              } : undefined,
            normalProvider: props.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.normalProvider
              } : undefined,
            advancedProvider: props.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.advancedProvider
              } : undefined,
            miniModel: props.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.miniModel
              } : undefined,
            normalModel: props.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.normalModel
              } : undefined,
            advancedModel: props.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.advancedModel
              } : undefined,
            openaiApiKey: props.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.openaiApiKey
              } : undefined,
            anthropicApiKey: props.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.anthropicApiKey
              } : undefined,
            deepseekApiKey: props.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.deepseekApiKey
              } : undefined,
            kimiApiKey: props.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.kimiApiKey
              } : undefined,
            qwenApiKey: props.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.qwenApiKey
              } : undefined,
            xaiApiKey: props.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.xaiApiKey
              } : undefined,
            geminiApiKey: props.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? {
                set: props.alpacaAccount.user.llmConfiguration.geminiApiKey
              } : undefined,
          },
          create: {
            defaultProvider: props.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.miniProvider : undefined,
            normalProvider: props.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedProvider : undefined,
            miniModel: props.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? props.alpacaAccount.user.llmConfiguration.miniModel : undefined,
            normalModel: props.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? props.alpacaAccount.user.llmConfiguration.normalModel : undefined,
            advancedModel: props.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
        create: {
          name: props.alpacaAccount.user.name !== undefined ? props.alpacaAccount.user.name : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? props.alpacaAccount.user.emailVerified : undefined,
          image: props.alpacaAccount.user.image !== undefined ? props.alpacaAccount.user.image : undefined,
          deletedAt: props.alpacaAccount.user.deletedAt !== undefined ? props.alpacaAccount.user.deletedAt : undefined,
          role: props.alpacaAccount.user.role !== undefined ? props.alpacaAccount.user.role : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? props.alpacaAccount.user.bio : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? props.alpacaAccount.user.jobTitle : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? props.alpacaAccount.user.currentAccount : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? props.alpacaAccount.user.plan : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? props.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? props.alpacaAccount.user.openaiModel : undefined,
      customer: props.alpacaAccount.user.customer ? 
        typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && Object.keys(props.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? props.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? 
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? 
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
      linkedProviders: props.alpacaAccount.user.linkedProviders ? 
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.alpacaAccount.user.accountLinkingRequests ? 
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.alpacaAccount.user.reviewedWaitlistEntries ? 
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
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
          },
        }))
      } : undefined,
      llmConfiguration: props.alpacaAccount.user.llmConfiguration ? 
        typeof props.alpacaAccount.user.llmConfiguration === 'object' && Object.keys(props.alpacaAccount.user.llmConfiguration).length === 1 && Object.keys(props.alpacaAccount.user.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.llmConfiguration.id !== undefined ? props.alpacaAccount.user.llmConfiguration.id : undefined,
            userId: props.alpacaAccount.user.llmConfiguration.userId !== undefined ? props.alpacaAccount.user.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.miniProvider : undefined,
            normalProvider: props.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedProvider : undefined,
            miniModel: props.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? props.alpacaAccount.user.llmConfiguration.miniModel : undefined,
            normalModel: props.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? props.alpacaAccount.user.llmConfiguration.normalModel : undefined,
            advancedModel: props.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.alpacaAccount.alerts ? 
    Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 && props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.alpacaAccount.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.alpacaAccount.alerts.map((item: any) => ({
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
        type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? props.alpacaAccount.realTime : undefined,
        cryptoTradingEnabled: props.alpacaAccount.cryptoTradingEnabled !== undefined ? props.alpacaAccount.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: props.alpacaAccount.cryptoTradingPairs !== undefined ? {
            set: props.alpacaAccount.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: props.alpacaAccount.cryptoTradeAllocationPct !== undefined ? props.alpacaAccount.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: props.alpacaAccount.tradeAllocationPct !== undefined ? props.alpacaAccount.tradeAllocationPct : undefined,
        autoAllocation: props.alpacaAccount.autoAllocation !== undefined ? props.alpacaAccount.autoAllocation : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
        enablePortfolioTrailingStop: props.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.alpacaAccount.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: props.alpacaAccount.portfolioTrailPercent !== undefined ? props.alpacaAccount.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: props.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.alpacaAccount.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: props.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.alpacaAccount.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: props.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? props.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: props.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? props.alpacaAccount.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: props.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? props.alpacaAccount.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: props.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? props.alpacaAccount.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: props.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? props.alpacaAccount.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: props.alpacaAccount.minimumPriceChangePercent100 !== undefined ? props.alpacaAccount.minimumPriceChangePercent100 : undefined,
        deletedAt: props.alpacaAccount.deletedAt !== undefined ? props.alpacaAccount.deletedAt : undefined,
    tradingPolicy: props.alpacaAccount.tradingPolicy ? 
      typeof props.alpacaAccount.tradingPolicy === 'object' && Object.keys(props.alpacaAccount.tradingPolicy).length === 1 && Object.keys(props.alpacaAccount.tradingPolicy)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.tradingPolicy.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.tradingPolicy.id !== undefined ? props.alpacaAccount.tradingPolicy.id : undefined,
          alpacaAccountId: props.alpacaAccount.tradingPolicy.alpacaAccountId !== undefined ? props.alpacaAccount.tradingPolicy.alpacaAccountId : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.miniModelId 
             } : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.normalModelId 
             } : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? {
              equals: props.alpacaAccount.tradingPolicy.advancedModelId 
             } : undefined,
        },
        create: {
          version: props.alpacaAccount.tradingPolicy.version !== undefined ? props.alpacaAccount.tradingPolicy.version : undefined,
          lastModifiedBy: props.alpacaAccount.tradingPolicy.lastModifiedBy !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedBy : undefined,
          lastModifiedAt: props.alpacaAccount.tradingPolicy.lastModifiedAt !== undefined ? props.alpacaAccount.tradingPolicy.lastModifiedAt : undefined,
          autonomyMode: props.alpacaAccount.tradingPolicy.autonomyMode !== undefined ? props.alpacaAccount.tradingPolicy.autonomyMode : undefined,
          realtimeTradingEnabled: props.alpacaAccount.tradingPolicy.realtimeTradingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.realtimeTradingEnabled : undefined,
          paperTradingOnly: props.alpacaAccount.tradingPolicy.paperTradingOnly !== undefined ? props.alpacaAccount.tradingPolicy.paperTradingOnly : undefined,
          killSwitchEnabled: props.alpacaAccount.tradingPolicy.killSwitchEnabled !== undefined ? props.alpacaAccount.tradingPolicy.killSwitchEnabled : undefined,
          autonomyPrefs: props.alpacaAccount.tradingPolicy.autonomyPrefs !== undefined ? props.alpacaAccount.tradingPolicy.autonomyPrefs : undefined,
          equitiesEnabled: props.alpacaAccount.tradingPolicy.equitiesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.equitiesEnabled : undefined,
          etfsEnabled: props.alpacaAccount.tradingPolicy.etfsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.etfsEnabled : undefined,
          cryptoEnabled: props.alpacaAccount.tradingPolicy.cryptoEnabled !== undefined ? props.alpacaAccount.tradingPolicy.cryptoEnabled : undefined,
          optionsEnabled: props.alpacaAccount.tradingPolicy.optionsEnabled !== undefined ? props.alpacaAccount.tradingPolicy.optionsEnabled : undefined,
          futuresEnabled: props.alpacaAccount.tradingPolicy.futuresEnabled !== undefined ? props.alpacaAccount.tradingPolicy.futuresEnabled : undefined,
          forexEnabled: props.alpacaAccount.tradingPolicy.forexEnabled !== undefined ? props.alpacaAccount.tradingPolicy.forexEnabled : undefined,
          shortingEnabled: props.alpacaAccount.tradingPolicy.shortingEnabled !== undefined ? props.alpacaAccount.tradingPolicy.shortingEnabled : undefined,
          marginEnabled: props.alpacaAccount.tradingPolicy.marginEnabled !== undefined ? props.alpacaAccount.tradingPolicy.marginEnabled : undefined,
          fractionalSharesEnabled: props.alpacaAccount.tradingPolicy.fractionalSharesEnabled !== undefined ? props.alpacaAccount.tradingPolicy.fractionalSharesEnabled : undefined,
          assetUniversePrefs: props.alpacaAccount.tradingPolicy.assetUniversePrefs !== undefined ? props.alpacaAccount.tradingPolicy.assetUniversePrefs : undefined,
          maxBuyingPowerUtilPct: props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? props.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct : undefined,
          cashFloorPct: props.alpacaAccount.tradingPolicy.cashFloorPct !== undefined ? props.alpacaAccount.tradingPolicy.cashFloorPct : undefined,
          maxGrossExposurePct: props.alpacaAccount.tradingPolicy.maxGrossExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxGrossExposurePct : undefined,
          maxNetExposurePct: props.alpacaAccount.tradingPolicy.maxNetExposurePct !== undefined ? props.alpacaAccount.tradingPolicy.maxNetExposurePct : undefined,
          maxLeverage: props.alpacaAccount.tradingPolicy.maxLeverage !== undefined ? props.alpacaAccount.tradingPolicy.maxLeverage : undefined,
          maxSymbolConcentrationPct: props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct : undefined,
          maxSectorConcentrationPct: props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct !== undefined ? props.alpacaAccount.tradingPolicy.maxSectorConcentrationPct : undefined,
          maxOpenPositions: props.alpacaAccount.tradingPolicy.maxOpenPositions !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenPositions : undefined,
          maxOpenOrders: props.alpacaAccount.tradingPolicy.maxOpenOrders !== undefined ? props.alpacaAccount.tradingPolicy.maxOpenOrders : undefined,
          riskBudgetPrefs: props.alpacaAccount.tradingPolicy.riskBudgetPrefs !== undefined ? props.alpacaAccount.tradingPolicy.riskBudgetPrefs : undefined,
          signalConsumptionPrefs: props.alpacaAccount.tradingPolicy.signalConsumptionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.signalConsumptionPrefs : undefined,
          executionPrefs: props.alpacaAccount.tradingPolicy.executionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.executionPrefs : undefined,
          positionManagementPrefs: props.alpacaAccount.tradingPolicy.positionManagementPrefs !== undefined ? props.alpacaAccount.tradingPolicy.positionManagementPrefs : undefined,
          portfolioConstructionPrefs: props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs !== undefined ? props.alpacaAccount.tradingPolicy.portfolioConstructionPrefs : undefined,
          macroOverlayEnabled: props.alpacaAccount.tradingPolicy.macroOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.macroOverlayEnabled : undefined,
          sectorOverlayEnabled: props.alpacaAccount.tradingPolicy.sectorOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.sectorOverlayEnabled : undefined,
          volatilityOverlayEnabled: props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.volatilityOverlayEnabled : undefined,
          liquidityStressOverlayEnabled: props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled : undefined,
          blackSwanProtectionEnabled: props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled : undefined,
          drawdownGuardianEnabled: props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled !== undefined ? props.alpacaAccount.tradingPolicy.drawdownGuardianEnabled : undefined,
          correlationSpikeProtectionEnabled: props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? props.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
          newsEventRiskOverlayEnabled: props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
          exchangeHealthOverlayEnabled: props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? props.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
          dataQualitySentinelEnabled: props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled !== undefined ? props.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled : undefined,
          overlayResponsePrefs: props.alpacaAccount.tradingPolicy.overlayResponsePrefs !== undefined ? props.alpacaAccount.tradingPolicy.overlayResponsePrefs : undefined,
          miniModelProvider: props.alpacaAccount.tradingPolicy.miniModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.miniModelProvider : undefined,
          miniModelId: props.alpacaAccount.tradingPolicy.miniModelId !== undefined ? props.alpacaAccount.tradingPolicy.miniModelId : undefined,
          normalModelProvider: props.alpacaAccount.tradingPolicy.normalModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.normalModelProvider : undefined,
          normalModelId: props.alpacaAccount.tradingPolicy.normalModelId !== undefined ? props.alpacaAccount.tradingPolicy.normalModelId : undefined,
          advancedModelProvider: props.alpacaAccount.tradingPolicy.advancedModelProvider !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelProvider : undefined,
          advancedModelId: props.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? props.alpacaAccount.tradingPolicy.advancedModelId : undefined,
          modelPrefs: props.alpacaAccount.tradingPolicy.modelPrefs !== undefined ? props.alpacaAccount.tradingPolicy.modelPrefs : undefined,
          auditNotificationPrefs: props.alpacaAccount.tradingPolicy.auditNotificationPrefs !== undefined ? props.alpacaAccount.tradingPolicy.auditNotificationPrefs : undefined,
      overlays: props.alpacaAccount.tradingPolicy.overlays ? 
        Array.isArray(props.alpacaAccount.tradingPolicy.overlays) && props.alpacaAccount.tradingPolicy.overlays.length > 0 &&  props.alpacaAccount.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
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
    user: props.alpacaAccount.user ? 
      typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.user.id !== undefined ? props.alpacaAccount.user.id : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              equals: props.alpacaAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.alpacaAccount.user.name !== undefined ? props.alpacaAccount.user.name : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? props.alpacaAccount.user.emailVerified : undefined,
          image: props.alpacaAccount.user.image !== undefined ? props.alpacaAccount.user.image : undefined,
          deletedAt: props.alpacaAccount.user.deletedAt !== undefined ? props.alpacaAccount.user.deletedAt : undefined,
          role: props.alpacaAccount.user.role !== undefined ? props.alpacaAccount.user.role : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? props.alpacaAccount.user.bio : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? props.alpacaAccount.user.jobTitle : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? props.alpacaAccount.user.currentAccount : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? props.alpacaAccount.user.plan : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? props.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? props.alpacaAccount.user.openaiModel : undefined,
      customer: props.alpacaAccount.user.customer ? 
        typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && Object.keys(props.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? props.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? 
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? 
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
      linkedProviders: props.alpacaAccount.user.linkedProviders ? 
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.alpacaAccount.user.accountLinkingRequests ? 
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: props.alpacaAccount.user.reviewedWaitlistEntries ? 
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
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
          },
        }))
      } : undefined,
      llmConfiguration: props.alpacaAccount.user.llmConfiguration ? 
        typeof props.alpacaAccount.user.llmConfiguration === 'object' && Object.keys(props.alpacaAccount.user.llmConfiguration).length === 1 && Object.keys(props.alpacaAccount.user.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.llmConfiguration.id !== undefined ? props.alpacaAccount.user.llmConfiguration.id : undefined,
            userId: props.alpacaAccount.user.llmConfiguration.userId !== undefined ? props.alpacaAccount.user.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.miniProvider : undefined,
            normalProvider: props.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedProvider : undefined,
            miniModel: props.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? props.alpacaAccount.user.llmConfiguration.miniModel : undefined,
            normalModel: props.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? props.alpacaAccount.user.llmConfiguration.normalModel : undefined,
            advancedModel: props.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? props.alpacaAccount.user.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? props.alpacaAccount.user.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    alerts: props.alpacaAccount.alerts ? 
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 &&  props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
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
          logger.error("Non-retryable constraint violation in upsertOneAllocation", {
            operation: 'upsertOneAllocation',
            model: 'Allocation',
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
          logger.warn("Database connection error in upsertOneAllocation, retrying...", {
            operation: 'upsertOneAllocation',
            model: 'Allocation',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database upsert operation failed", {
          operation: 'upsertOneAllocation',
          model: 'Allocation',
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
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,

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
  alpacaAccount: prop.alpacaAccount ? 
  typeof prop.alpacaAccount === 'object' && Object.keys(prop.alpacaAccount).length === 1 && (Object.keys(prop.alpacaAccount)[0] === 'id' || Object.keys(prop.alpacaAccount)[0] === 'symbol')
? {
  connect: {
    id: prop.alpacaAccount.id
  }
} : { upsert: {
      where: {
        id: prop.alpacaAccount.id !== undefined ? {
            equals: prop.alpacaAccount.id
          } : undefined,
        type: prop.alpacaAccount.type !== undefined ? {
            equals: prop.alpacaAccount.type
          } : undefined,
        userId: prop.alpacaAccount.userId !== undefined ? {
            equals: prop.alpacaAccount.userId
          } : undefined,
      },
      update: {
        id: prop.alpacaAccount.id !== undefined ? {
            set: prop.alpacaAccount.id
          } : undefined,
        type: prop.alpacaAccount.type !== undefined ? {
            set: prop.alpacaAccount.type
          } : undefined,
        APIKey: prop.alpacaAccount.APIKey !== undefined ? {
            set: prop.alpacaAccount.APIKey
          } : undefined,
        APISecret: prop.alpacaAccount.APISecret !== undefined ? {
            set: prop.alpacaAccount.APISecret
          } : undefined,
        configuration: prop.alpacaAccount.configuration !== undefined ? prop.alpacaAccount.configuration : undefined,
        marketOpen: prop.alpacaAccount.marketOpen !== undefined ? {
            set: prop.alpacaAccount.marketOpen
          } : undefined,
        realTime: prop.alpacaAccount.realTime !== undefined ? {
            set: prop.alpacaAccount.realTime
          } : undefined,
        cryptoTradingEnabled: prop.alpacaAccount.cryptoTradingEnabled !== undefined ? {
            set: prop.alpacaAccount.cryptoTradingEnabled
          } : undefined,
        cryptoTradingPairs: prop.alpacaAccount.cryptoTradingPairs !== undefined ? {
            set: prop.alpacaAccount.cryptoTradingPairs
          } : undefined,
        cryptoTradeAllocationPct: prop.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
            set: prop.alpacaAccount.cryptoTradeAllocationPct
          } : undefined,
        tradeAllocationPct: prop.alpacaAccount.tradeAllocationPct !== undefined ? {
            set: prop.alpacaAccount.tradeAllocationPct
          } : undefined,
        autoAllocation: prop.alpacaAccount.autoAllocation !== undefined ? {
            set: prop.alpacaAccount.autoAllocation
          } : undefined,
        minPercentageChange: prop.alpacaAccount.minPercentageChange !== undefined ? {
            set: prop.alpacaAccount.minPercentageChange
          } : undefined,
        volumeThreshold: prop.alpacaAccount.volumeThreshold !== undefined ? {
            set: prop.alpacaAccount.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: prop.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
            set: prop.alpacaAccount.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: prop.alpacaAccount.portfolioTrailPercent !== undefined ? {
            set: prop.alpacaAccount.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: prop.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
            set: prop.alpacaAccount.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: prop.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
            set: prop.alpacaAccount.reducedPortfolioTrailPercent
          } : undefined,
        defaultTrailingStopPercentage100: prop.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
            set: prop.alpacaAccount.defaultTrailingStopPercentage100
          } : undefined,
        firstTrailReductionThreshold100: prop.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
            set: prop.alpacaAccount.firstTrailReductionThreshold100
          } : undefined,
        secondTrailReductionThreshold100: prop.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
            set: prop.alpacaAccount.secondTrailReductionThreshold100
          } : undefined,
        firstReducedTrailPercentage100: prop.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
            set: prop.alpacaAccount.firstReducedTrailPercentage100
          } : undefined,
        secondReducedTrailPercentage100: prop.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
            set: prop.alpacaAccount.secondReducedTrailPercentage100
          } : undefined,
        minimumPriceChangePercent100: prop.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
            set: prop.alpacaAccount.minimumPriceChangePercent100
          } : undefined,
        deletedAt: prop.alpacaAccount.deletedAt !== undefined ? {
            set: prop.alpacaAccount.deletedAt
          } : undefined,
    tradingPolicy: prop.alpacaAccount.tradingPolicy ? 
    typeof prop.alpacaAccount.tradingPolicy === 'object' && Object.keys(prop.alpacaAccount.tradingPolicy).length === 1 && (Object.keys(prop.alpacaAccount.tradingPolicy)[0] === 'id' || Object.keys(prop.alpacaAccount.tradingPolicy)[0] === 'symbol')
? {
    connect: {
      id: prop.alpacaAccount.tradingPolicy.id
    }
} : { upsert: {
        where: {
          id: prop.alpacaAccount.tradingPolicy.id !== undefined ? {
              equals: prop.alpacaAccount.tradingPolicy.id
            } : undefined,
          alpacaAccountId: prop.alpacaAccount.tradingPolicy.alpacaAccountId !== undefined ? {
              equals: prop.alpacaAccount.tradingPolicy.alpacaAccountId
            } : undefined,
          miniModelId: prop.alpacaAccount.tradingPolicy.miniModelId !== undefined ? {
              equals: prop.alpacaAccount.tradingPolicy.miniModelId
            } : undefined,
          normalModelId: prop.alpacaAccount.tradingPolicy.normalModelId !== undefined ? {
              equals: prop.alpacaAccount.tradingPolicy.normalModelId
            } : undefined,
          advancedModelId: prop.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? {
              equals: prop.alpacaAccount.tradingPolicy.advancedModelId
            } : undefined,
        },
        update: {
          id: prop.alpacaAccount.tradingPolicy.id !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.id
            } : undefined,
          version: prop.alpacaAccount.tradingPolicy.version !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.version
            } : undefined,
          lastModifiedBy: prop.alpacaAccount.tradingPolicy.lastModifiedBy !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.lastModifiedBy
            } : undefined,
          lastModifiedAt: prop.alpacaAccount.tradingPolicy.lastModifiedAt !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.lastModifiedAt
            } : undefined,
          autonomyMode: prop.alpacaAccount.tradingPolicy.autonomyMode !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.autonomyMode
            } : undefined,
          realtimeTradingEnabled: prop.alpacaAccount.tradingPolicy.realtimeTradingEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.realtimeTradingEnabled
            } : undefined,
          paperTradingOnly: prop.alpacaAccount.tradingPolicy.paperTradingOnly !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.paperTradingOnly
            } : undefined,
          killSwitchEnabled: prop.alpacaAccount.tradingPolicy.killSwitchEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.killSwitchEnabled
            } : undefined,
          autonomyPrefs: prop.alpacaAccount.tradingPolicy.autonomyPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.autonomyPrefs : undefined,
          equitiesEnabled: prop.alpacaAccount.tradingPolicy.equitiesEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.equitiesEnabled
            } : undefined,
          etfsEnabled: prop.alpacaAccount.tradingPolicy.etfsEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.etfsEnabled
            } : undefined,
          cryptoEnabled: prop.alpacaAccount.tradingPolicy.cryptoEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.cryptoEnabled
            } : undefined,
          optionsEnabled: prop.alpacaAccount.tradingPolicy.optionsEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.optionsEnabled
            } : undefined,
          futuresEnabled: prop.alpacaAccount.tradingPolicy.futuresEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.futuresEnabled
            } : undefined,
          forexEnabled: prop.alpacaAccount.tradingPolicy.forexEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.forexEnabled
            } : undefined,
          shortingEnabled: prop.alpacaAccount.tradingPolicy.shortingEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.shortingEnabled
            } : undefined,
          marginEnabled: prop.alpacaAccount.tradingPolicy.marginEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.marginEnabled
            } : undefined,
          fractionalSharesEnabled: prop.alpacaAccount.tradingPolicy.fractionalSharesEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.fractionalSharesEnabled
            } : undefined,
          assetUniversePrefs: prop.alpacaAccount.tradingPolicy.assetUniversePrefs !== undefined ? prop.alpacaAccount.tradingPolicy.assetUniversePrefs : undefined,
          maxBuyingPowerUtilPct: prop.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct
            } : undefined,
          cashFloorPct: prop.alpacaAccount.tradingPolicy.cashFloorPct !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.cashFloorPct
            } : undefined,
          maxGrossExposurePct: prop.alpacaAccount.tradingPolicy.maxGrossExposurePct !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.maxGrossExposurePct
            } : undefined,
          maxNetExposurePct: prop.alpacaAccount.tradingPolicy.maxNetExposurePct !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.maxNetExposurePct
            } : undefined,
          maxLeverage: prop.alpacaAccount.tradingPolicy.maxLeverage !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.maxLeverage
            } : undefined,
          maxSymbolConcentrationPct: prop.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct
            } : undefined,
          maxSectorConcentrationPct: prop.alpacaAccount.tradingPolicy.maxSectorConcentrationPct !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.maxSectorConcentrationPct
            } : undefined,
          maxOpenPositions: prop.alpacaAccount.tradingPolicy.maxOpenPositions !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.maxOpenPositions
            } : undefined,
          maxOpenOrders: prop.alpacaAccount.tradingPolicy.maxOpenOrders !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.maxOpenOrders
            } : undefined,
          riskBudgetPrefs: prop.alpacaAccount.tradingPolicy.riskBudgetPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.riskBudgetPrefs : undefined,
          signalConsumptionPrefs: prop.alpacaAccount.tradingPolicy.signalConsumptionPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.signalConsumptionPrefs : undefined,
          executionPrefs: prop.alpacaAccount.tradingPolicy.executionPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.executionPrefs : undefined,
          positionManagementPrefs: prop.alpacaAccount.tradingPolicy.positionManagementPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.positionManagementPrefs : undefined,
          portfolioConstructionPrefs: prop.alpacaAccount.tradingPolicy.portfolioConstructionPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.portfolioConstructionPrefs : undefined,
          macroOverlayEnabled: prop.alpacaAccount.tradingPolicy.macroOverlayEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.macroOverlayEnabled
            } : undefined,
          sectorOverlayEnabled: prop.alpacaAccount.tradingPolicy.sectorOverlayEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.sectorOverlayEnabled
            } : undefined,
          volatilityOverlayEnabled: prop.alpacaAccount.tradingPolicy.volatilityOverlayEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.volatilityOverlayEnabled
            } : undefined,
          liquidityStressOverlayEnabled: prop.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled
            } : undefined,
          blackSwanProtectionEnabled: prop.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled
            } : undefined,
          drawdownGuardianEnabled: prop.alpacaAccount.tradingPolicy.drawdownGuardianEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.drawdownGuardianEnabled
            } : undefined,
          correlationSpikeProtectionEnabled: prop.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled
            } : undefined,
          newsEventRiskOverlayEnabled: prop.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled
            } : undefined,
          exchangeHealthOverlayEnabled: prop.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled
            } : undefined,
          dataQualitySentinelEnabled: prop.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled
            } : undefined,
          overlayResponsePrefs: prop.alpacaAccount.tradingPolicy.overlayResponsePrefs !== undefined ? prop.alpacaAccount.tradingPolicy.overlayResponsePrefs : undefined,
          miniModelProvider: prop.alpacaAccount.tradingPolicy.miniModelProvider !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.miniModelProvider
            } : undefined,
          miniModelId: prop.alpacaAccount.tradingPolicy.miniModelId !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.miniModelId
            } : undefined,
          normalModelProvider: prop.alpacaAccount.tradingPolicy.normalModelProvider !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.normalModelProvider
            } : undefined,
          normalModelId: prop.alpacaAccount.tradingPolicy.normalModelId !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.normalModelId
            } : undefined,
          advancedModelProvider: prop.alpacaAccount.tradingPolicy.advancedModelProvider !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.advancedModelProvider
            } : undefined,
          advancedModelId: prop.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? {
              set: prop.alpacaAccount.tradingPolicy.advancedModelId
            } : undefined,
          modelPrefs: prop.alpacaAccount.tradingPolicy.modelPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.modelPrefs : undefined,
          auditNotificationPrefs: prop.alpacaAccount.tradingPolicy.auditNotificationPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.auditNotificationPrefs : undefined,
      overlays: prop.alpacaAccount.tradingPolicy.overlays ? 
      Array.isArray(prop.alpacaAccount.tradingPolicy.overlays) && prop.alpacaAccount.tradingPolicy.overlays.length > 0 && prop.alpacaAccount.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
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
            mutations: item.mutations !== undefined ? item.mutations : undefined,
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
          version: prop.alpacaAccount.tradingPolicy.version !== undefined ? prop.alpacaAccount.tradingPolicy.version : undefined,
          lastModifiedBy: prop.alpacaAccount.tradingPolicy.lastModifiedBy !== undefined ? prop.alpacaAccount.tradingPolicy.lastModifiedBy : undefined,
          lastModifiedAt: prop.alpacaAccount.tradingPolicy.lastModifiedAt !== undefined ? prop.alpacaAccount.tradingPolicy.lastModifiedAt : undefined,
          autonomyMode: prop.alpacaAccount.tradingPolicy.autonomyMode !== undefined ? prop.alpacaAccount.tradingPolicy.autonomyMode : undefined,
          realtimeTradingEnabled: prop.alpacaAccount.tradingPolicy.realtimeTradingEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.realtimeTradingEnabled : undefined,
          paperTradingOnly: prop.alpacaAccount.tradingPolicy.paperTradingOnly !== undefined ? prop.alpacaAccount.tradingPolicy.paperTradingOnly : undefined,
          killSwitchEnabled: prop.alpacaAccount.tradingPolicy.killSwitchEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.killSwitchEnabled : undefined,
          autonomyPrefs: prop.alpacaAccount.tradingPolicy.autonomyPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.autonomyPrefs : undefined,
          equitiesEnabled: prop.alpacaAccount.tradingPolicy.equitiesEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.equitiesEnabled : undefined,
          etfsEnabled: prop.alpacaAccount.tradingPolicy.etfsEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.etfsEnabled : undefined,
          cryptoEnabled: prop.alpacaAccount.tradingPolicy.cryptoEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.cryptoEnabled : undefined,
          optionsEnabled: prop.alpacaAccount.tradingPolicy.optionsEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.optionsEnabled : undefined,
          futuresEnabled: prop.alpacaAccount.tradingPolicy.futuresEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.futuresEnabled : undefined,
          forexEnabled: prop.alpacaAccount.tradingPolicy.forexEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.forexEnabled : undefined,
          shortingEnabled: prop.alpacaAccount.tradingPolicy.shortingEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.shortingEnabled : undefined,
          marginEnabled: prop.alpacaAccount.tradingPolicy.marginEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.marginEnabled : undefined,
          fractionalSharesEnabled: prop.alpacaAccount.tradingPolicy.fractionalSharesEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.fractionalSharesEnabled : undefined,
          assetUniversePrefs: prop.alpacaAccount.tradingPolicy.assetUniversePrefs !== undefined ? prop.alpacaAccount.tradingPolicy.assetUniversePrefs : undefined,
          maxBuyingPowerUtilPct: prop.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? prop.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct : undefined,
          cashFloorPct: prop.alpacaAccount.tradingPolicy.cashFloorPct !== undefined ? prop.alpacaAccount.tradingPolicy.cashFloorPct : undefined,
          maxGrossExposurePct: prop.alpacaAccount.tradingPolicy.maxGrossExposurePct !== undefined ? prop.alpacaAccount.tradingPolicy.maxGrossExposurePct : undefined,
          maxNetExposurePct: prop.alpacaAccount.tradingPolicy.maxNetExposurePct !== undefined ? prop.alpacaAccount.tradingPolicy.maxNetExposurePct : undefined,
          maxLeverage: prop.alpacaAccount.tradingPolicy.maxLeverage !== undefined ? prop.alpacaAccount.tradingPolicy.maxLeverage : undefined,
          maxSymbolConcentrationPct: prop.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct !== undefined ? prop.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct : undefined,
          maxSectorConcentrationPct: prop.alpacaAccount.tradingPolicy.maxSectorConcentrationPct !== undefined ? prop.alpacaAccount.tradingPolicy.maxSectorConcentrationPct : undefined,
          maxOpenPositions: prop.alpacaAccount.tradingPolicy.maxOpenPositions !== undefined ? prop.alpacaAccount.tradingPolicy.maxOpenPositions : undefined,
          maxOpenOrders: prop.alpacaAccount.tradingPolicy.maxOpenOrders !== undefined ? prop.alpacaAccount.tradingPolicy.maxOpenOrders : undefined,
          riskBudgetPrefs: prop.alpacaAccount.tradingPolicy.riskBudgetPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.riskBudgetPrefs : undefined,
          signalConsumptionPrefs: prop.alpacaAccount.tradingPolicy.signalConsumptionPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.signalConsumptionPrefs : undefined,
          executionPrefs: prop.alpacaAccount.tradingPolicy.executionPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.executionPrefs : undefined,
          positionManagementPrefs: prop.alpacaAccount.tradingPolicy.positionManagementPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.positionManagementPrefs : undefined,
          portfolioConstructionPrefs: prop.alpacaAccount.tradingPolicy.portfolioConstructionPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.portfolioConstructionPrefs : undefined,
          macroOverlayEnabled: prop.alpacaAccount.tradingPolicy.macroOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.macroOverlayEnabled : undefined,
          sectorOverlayEnabled: prop.alpacaAccount.tradingPolicy.sectorOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.sectorOverlayEnabled : undefined,
          volatilityOverlayEnabled: prop.alpacaAccount.tradingPolicy.volatilityOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.volatilityOverlayEnabled : undefined,
          liquidityStressOverlayEnabled: prop.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled : undefined,
          blackSwanProtectionEnabled: prop.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled : undefined,
          drawdownGuardianEnabled: prop.alpacaAccount.tradingPolicy.drawdownGuardianEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.drawdownGuardianEnabled : undefined,
          correlationSpikeProtectionEnabled: prop.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
          newsEventRiskOverlayEnabled: prop.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
          exchangeHealthOverlayEnabled: prop.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
          dataQualitySentinelEnabled: prop.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled : undefined,
          overlayResponsePrefs: prop.alpacaAccount.tradingPolicy.overlayResponsePrefs !== undefined ? prop.alpacaAccount.tradingPolicy.overlayResponsePrefs : undefined,
          miniModelProvider: prop.alpacaAccount.tradingPolicy.miniModelProvider !== undefined ? prop.alpacaAccount.tradingPolicy.miniModelProvider : undefined,
          miniModelId: prop.alpacaAccount.tradingPolicy.miniModelId !== undefined ? prop.alpacaAccount.tradingPolicy.miniModelId : undefined,
          normalModelProvider: prop.alpacaAccount.tradingPolicy.normalModelProvider !== undefined ? prop.alpacaAccount.tradingPolicy.normalModelProvider : undefined,
          normalModelId: prop.alpacaAccount.tradingPolicy.normalModelId !== undefined ? prop.alpacaAccount.tradingPolicy.normalModelId : undefined,
          advancedModelProvider: prop.alpacaAccount.tradingPolicy.advancedModelProvider !== undefined ? prop.alpacaAccount.tradingPolicy.advancedModelProvider : undefined,
          advancedModelId: prop.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? prop.alpacaAccount.tradingPolicy.advancedModelId : undefined,
          modelPrefs: prop.alpacaAccount.tradingPolicy.modelPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.modelPrefs : undefined,
          auditNotificationPrefs: prop.alpacaAccount.tradingPolicy.auditNotificationPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.auditNotificationPrefs : undefined,
      overlays: prop.alpacaAccount.tradingPolicy.overlays ? 
        Array.isArray(prop.alpacaAccount.tradingPolicy.overlays) && prop.alpacaAccount.tradingPolicy.overlays.length > 0 &&  prop.alpacaAccount.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
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
    user: prop.alpacaAccount.user ? 
    typeof prop.alpacaAccount.user === 'object' && Object.keys(prop.alpacaAccount.user).length === 1 && (Object.keys(prop.alpacaAccount.user)[0] === 'id' || Object.keys(prop.alpacaAccount.user)[0] === 'symbol')
? {
    connect: {
      id: prop.alpacaAccount.user.id
    }
} : { upsert: {
        where: {
          id: prop.alpacaAccount.user.id !== undefined ? {
              equals: prop.alpacaAccount.user.id
            } : undefined,
          name: prop.alpacaAccount.user.name !== undefined ? {
              equals: prop.alpacaAccount.user.name
            } : undefined,
          email: prop.alpacaAccount.user.email !== undefined ? {
              equals: prop.alpacaAccount.user.email
            } : undefined,
          customerId: prop.alpacaAccount.user.customerId !== undefined ? {
              equals: prop.alpacaAccount.user.customerId
            } : undefined,
        },
        update: {
          id: prop.alpacaAccount.user.id !== undefined ? {
              set: prop.alpacaAccount.user.id
            } : undefined,
          name: prop.alpacaAccount.user.name !== undefined ? {
              set: prop.alpacaAccount.user.name
            } : undefined,
          email: prop.alpacaAccount.user.email !== undefined ? {
              set: prop.alpacaAccount.user.email
            } : undefined,
          emailVerified: prop.alpacaAccount.user.emailVerified !== undefined ? {
              set: prop.alpacaAccount.user.emailVerified
            } : undefined,
          image: prop.alpacaAccount.user.image !== undefined ? {
              set: prop.alpacaAccount.user.image
            } : undefined,
          deletedAt: prop.alpacaAccount.user.deletedAt !== undefined ? {
              set: prop.alpacaAccount.user.deletedAt
            } : undefined,
          role: prop.alpacaAccount.user.role !== undefined ? {
              set: prop.alpacaAccount.user.role
            } : undefined,
          bio: prop.alpacaAccount.user.bio !== undefined ? {
              set: prop.alpacaAccount.user.bio
            } : undefined,
          jobTitle: prop.alpacaAccount.user.jobTitle !== undefined ? {
              set: prop.alpacaAccount.user.jobTitle
            } : undefined,
          currentAccount: prop.alpacaAccount.user.currentAccount !== undefined ? {
              set: prop.alpacaAccount.user.currentAccount
            } : undefined,
          plan: prop.alpacaAccount.user.plan !== undefined ? {
              set: prop.alpacaAccount.user.plan
            } : undefined,
          openaiAPIKey: prop.alpacaAccount.user.openaiAPIKey !== undefined ? {
              set: prop.alpacaAccount.user.openaiAPIKey
            } : undefined,
          openaiModel: prop.alpacaAccount.user.openaiModel !== undefined ? {
              set: prop.alpacaAccount.user.openaiModel
            } : undefined,
      customer: prop.alpacaAccount.user.customer ? 
      typeof prop.alpacaAccount.user.customer === 'object' && Object.keys(prop.alpacaAccount.user.customer).length === 1 && (Object.keys(prop.alpacaAccount.user.customer)[0] === 'id' || Object.keys(prop.alpacaAccount.user.customer)[0] === 'symbol')
? {
      connect: {
        id: prop.alpacaAccount.user.customer.id
      }
} : { upsert: {
          where: {
            id: prop.alpacaAccount.user.customer.id !== undefined ? {
                equals: prop.alpacaAccount.user.customer.id
              } : undefined,
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.authUserId
              } : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? {
                equals: prop.alpacaAccount.user.customer.name
              } : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? {
                set: prop.alpacaAccount.user.customer.authUserId
              } : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? {
                set: prop.alpacaAccount.user.customer.name
              } : undefined,
            plan: prop.alpacaAccount.user.customer.plan !== undefined ? {
                set: prop.alpacaAccount.user.customer.plan
              } : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? {
                set: prop.alpacaAccount.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? {
                set: prop.alpacaAccount.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                set: prop.alpacaAccount.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? prop.alpacaAccount.user.customer.authUserId : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? prop.alpacaAccount.user.customer.name : undefined,
            plan: prop.alpacaAccount.user.customer.plan !== undefined ? prop.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? prop.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? prop.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? prop.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.alpacaAccount.user.accounts ? 
      Array.isArray(prop.alpacaAccount.user.accounts) && prop.alpacaAccount.user.accounts.length > 0 && prop.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: prop.alpacaAccount.user.sessions ? 
      Array.isArray(prop.alpacaAccount.user.sessions) && prop.alpacaAccount.user.sessions.length > 0 && prop.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: prop.alpacaAccount.user.authenticators ? 
      Array.isArray(prop.alpacaAccount.user.authenticators) && prop.alpacaAccount.user.authenticators.length > 0 && prop.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.authenticators.map((item: any) => ({
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
      linkedProviders: prop.alpacaAccount.user.linkedProviders ? 
      Array.isArray(prop.alpacaAccount.user.linkedProviders) && prop.alpacaAccount.user.linkedProviders.length > 0 && prop.alpacaAccount.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: prop.alpacaAccount.user.accountLinkingRequests ? 
      Array.isArray(prop.alpacaAccount.user.accountLinkingRequests) && prop.alpacaAccount.user.accountLinkingRequests.length > 0 && prop.alpacaAccount.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: prop.alpacaAccount.user.reviewedWaitlistEntries ? 
      Array.isArray(prop.alpacaAccount.user.reviewedWaitlistEntries) && prop.alpacaAccount.user.reviewedWaitlistEntries.length > 0 && prop.alpacaAccount.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
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
      llmConfiguration: prop.alpacaAccount.user.llmConfiguration ? 
      typeof prop.alpacaAccount.user.llmConfiguration === 'object' && Object.keys(prop.alpacaAccount.user.llmConfiguration).length === 1 && (Object.keys(prop.alpacaAccount.user.llmConfiguration)[0] === 'id' || Object.keys(prop.alpacaAccount.user.llmConfiguration)[0] === 'symbol')
? {
      connect: {
        id: prop.alpacaAccount.user.llmConfiguration.id
      }
} : { upsert: {
          where: {
            id: prop.alpacaAccount.user.llmConfiguration.id !== undefined ? {
                equals: prop.alpacaAccount.user.llmConfiguration.id
              } : undefined,
            userId: prop.alpacaAccount.user.llmConfiguration.userId !== undefined ? {
                equals: prop.alpacaAccount.user.llmConfiguration.userId
              } : undefined,
          },
          update: {
            id: prop.alpacaAccount.user.llmConfiguration.id !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.id
              } : undefined,
            defaultProvider: prop.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.defaultProvider
              } : undefined,
            miniProvider: prop.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.miniProvider
              } : undefined,
            normalProvider: prop.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.normalProvider
              } : undefined,
            advancedProvider: prop.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.advancedProvider
              } : undefined,
            miniModel: prop.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.miniModel
              } : undefined,
            normalModel: prop.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.normalModel
              } : undefined,
            advancedModel: prop.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.advancedModel
              } : undefined,
            openaiApiKey: prop.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.openaiApiKey
              } : undefined,
            anthropicApiKey: prop.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.anthropicApiKey
              } : undefined,
            deepseekApiKey: prop.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.deepseekApiKey
              } : undefined,
            kimiApiKey: prop.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.kimiApiKey
              } : undefined,
            qwenApiKey: prop.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.qwenApiKey
              } : undefined,
            xaiApiKey: prop.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.xaiApiKey
              } : undefined,
            geminiApiKey: prop.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? {
                set: prop.alpacaAccount.user.llmConfiguration.geminiApiKey
              } : undefined,
          },
          create: {
            defaultProvider: prop.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.defaultProvider : undefined,
            miniProvider: prop.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.miniProvider : undefined,
            normalProvider: prop.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.normalProvider : undefined,
            advancedProvider: prop.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.advancedProvider : undefined,
            miniModel: prop.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? prop.alpacaAccount.user.llmConfiguration.miniModel : undefined,
            normalModel: prop.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? prop.alpacaAccount.user.llmConfiguration.normalModel : undefined,
            advancedModel: prop.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? prop.alpacaAccount.user.llmConfiguration.advancedModel : undefined,
            openaiApiKey: prop.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: prop.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: prop.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: prop.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: prop.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: prop.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: prop.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
        create: {
          name: prop.alpacaAccount.user.name !== undefined ? prop.alpacaAccount.user.name : undefined,
          email: prop.alpacaAccount.user.email !== undefined ? prop.alpacaAccount.user.email : undefined,
          emailVerified: prop.alpacaAccount.user.emailVerified !== undefined ? prop.alpacaAccount.user.emailVerified : undefined,
          image: prop.alpacaAccount.user.image !== undefined ? prop.alpacaAccount.user.image : undefined,
          deletedAt: prop.alpacaAccount.user.deletedAt !== undefined ? prop.alpacaAccount.user.deletedAt : undefined,
          role: prop.alpacaAccount.user.role !== undefined ? prop.alpacaAccount.user.role : undefined,
          bio: prop.alpacaAccount.user.bio !== undefined ? prop.alpacaAccount.user.bio : undefined,
          jobTitle: prop.alpacaAccount.user.jobTitle !== undefined ? prop.alpacaAccount.user.jobTitle : undefined,
          currentAccount: prop.alpacaAccount.user.currentAccount !== undefined ? prop.alpacaAccount.user.currentAccount : undefined,
          plan: prop.alpacaAccount.user.plan !== undefined ? prop.alpacaAccount.user.plan : undefined,
          openaiAPIKey: prop.alpacaAccount.user.openaiAPIKey !== undefined ? prop.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: prop.alpacaAccount.user.openaiModel !== undefined ? prop.alpacaAccount.user.openaiModel : undefined,
      customer: prop.alpacaAccount.user.customer ? 
        typeof prop.alpacaAccount.user.customer === 'object' && Object.keys(prop.alpacaAccount.user.customer).length === 1 && Object.keys(prop.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: prop.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.alpacaAccount.user.customer.id !== undefined ? prop.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? prop.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? prop.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? {
                equals: prop.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? prop.alpacaAccount.user.customer.authUserId : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? prop.alpacaAccount.user.customer.name : undefined,
            plan: prop.alpacaAccount.user.customer.plan !== undefined ? prop.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? prop.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? prop.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? prop.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.alpacaAccount.user.accounts ? 
        Array.isArray(prop.alpacaAccount.user.accounts) && prop.alpacaAccount.user.accounts.length > 0 &&  prop.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: prop.alpacaAccount.user.sessions ? 
        Array.isArray(prop.alpacaAccount.user.sessions) && prop.alpacaAccount.user.sessions.length > 0 &&  prop.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: prop.alpacaAccount.user.authenticators ? 
        Array.isArray(prop.alpacaAccount.user.authenticators) && prop.alpacaAccount.user.authenticators.length > 0 &&  prop.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.authenticators.map((item: any) => ({
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
      linkedProviders: prop.alpacaAccount.user.linkedProviders ? 
        Array.isArray(prop.alpacaAccount.user.linkedProviders) && prop.alpacaAccount.user.linkedProviders.length > 0 &&  prop.alpacaAccount.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: prop.alpacaAccount.user.accountLinkingRequests ? 
        Array.isArray(prop.alpacaAccount.user.accountLinkingRequests) && prop.alpacaAccount.user.accountLinkingRequests.length > 0 &&  prop.alpacaAccount.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: prop.alpacaAccount.user.reviewedWaitlistEntries ? 
        Array.isArray(prop.alpacaAccount.user.reviewedWaitlistEntries) && prop.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  prop.alpacaAccount.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
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
          },
        }))
      } : undefined,
      llmConfiguration: prop.alpacaAccount.user.llmConfiguration ? 
        typeof prop.alpacaAccount.user.llmConfiguration === 'object' && Object.keys(prop.alpacaAccount.user.llmConfiguration).length === 1 && Object.keys(prop.alpacaAccount.user.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: prop.alpacaAccount.user.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.alpacaAccount.user.llmConfiguration.id !== undefined ? prop.alpacaAccount.user.llmConfiguration.id : undefined,
            userId: prop.alpacaAccount.user.llmConfiguration.userId !== undefined ? prop.alpacaAccount.user.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: prop.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.defaultProvider : undefined,
            miniProvider: prop.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.miniProvider : undefined,
            normalProvider: prop.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.normalProvider : undefined,
            advancedProvider: prop.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.advancedProvider : undefined,
            miniModel: prop.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? prop.alpacaAccount.user.llmConfiguration.miniModel : undefined,
            normalModel: prop.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? prop.alpacaAccount.user.llmConfiguration.normalModel : undefined,
            advancedModel: prop.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? prop.alpacaAccount.user.llmConfiguration.advancedModel : undefined,
            openaiApiKey: prop.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: prop.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: prop.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: prop.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: prop.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: prop.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: prop.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    alerts: prop.alpacaAccount.alerts ? 
    Array.isArray(prop.alpacaAccount.alerts) && prop.alpacaAccount.alerts.length > 0 && prop.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.alpacaAccount.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.alpacaAccount.alerts.map((item: any) => ({
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
        type: prop.alpacaAccount.type !== undefined ? prop.alpacaAccount.type : undefined,
        APIKey: prop.alpacaAccount.APIKey !== undefined ? prop.alpacaAccount.APIKey : undefined,
        APISecret: prop.alpacaAccount.APISecret !== undefined ? prop.alpacaAccount.APISecret : undefined,
        configuration: prop.alpacaAccount.configuration !== undefined ? prop.alpacaAccount.configuration : undefined,
        marketOpen: prop.alpacaAccount.marketOpen !== undefined ? prop.alpacaAccount.marketOpen : undefined,
        realTime: prop.alpacaAccount.realTime !== undefined ? prop.alpacaAccount.realTime : undefined,
        cryptoTradingEnabled: prop.alpacaAccount.cryptoTradingEnabled !== undefined ? prop.alpacaAccount.cryptoTradingEnabled : undefined,
        cryptoTradingPairs: prop.alpacaAccount.cryptoTradingPairs !== undefined ? {
            set: prop.alpacaAccount.cryptoTradingPairs 
           } : undefined,
        cryptoTradeAllocationPct: prop.alpacaAccount.cryptoTradeAllocationPct !== undefined ? prop.alpacaAccount.cryptoTradeAllocationPct : undefined,
        tradeAllocationPct: prop.alpacaAccount.tradeAllocationPct !== undefined ? prop.alpacaAccount.tradeAllocationPct : undefined,
        autoAllocation: prop.alpacaAccount.autoAllocation !== undefined ? prop.alpacaAccount.autoAllocation : undefined,
        minPercentageChange: prop.alpacaAccount.minPercentageChange !== undefined ? prop.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: prop.alpacaAccount.volumeThreshold !== undefined ? prop.alpacaAccount.volumeThreshold : undefined,
        enablePortfolioTrailingStop: prop.alpacaAccount.enablePortfolioTrailingStop !== undefined ? prop.alpacaAccount.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: prop.alpacaAccount.portfolioTrailPercent !== undefined ? prop.alpacaAccount.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: prop.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? prop.alpacaAccount.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: prop.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? prop.alpacaAccount.reducedPortfolioTrailPercent : undefined,
        defaultTrailingStopPercentage100: prop.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? prop.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
        firstTrailReductionThreshold100: prop.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? prop.alpacaAccount.firstTrailReductionThreshold100 : undefined,
        secondTrailReductionThreshold100: prop.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? prop.alpacaAccount.secondTrailReductionThreshold100 : undefined,
        firstReducedTrailPercentage100: prop.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? prop.alpacaAccount.firstReducedTrailPercentage100 : undefined,
        secondReducedTrailPercentage100: prop.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? prop.alpacaAccount.secondReducedTrailPercentage100 : undefined,
        minimumPriceChangePercent100: prop.alpacaAccount.minimumPriceChangePercent100 !== undefined ? prop.alpacaAccount.minimumPriceChangePercent100 : undefined,
        deletedAt: prop.alpacaAccount.deletedAt !== undefined ? prop.alpacaAccount.deletedAt : undefined,
    tradingPolicy: prop.alpacaAccount.tradingPolicy ? 
      typeof prop.alpacaAccount.tradingPolicy === 'object' && Object.keys(prop.alpacaAccount.tradingPolicy).length === 1 && Object.keys(prop.alpacaAccount.tradingPolicy)[0] === 'id'
    ? { connect: {
          id: prop.alpacaAccount.tradingPolicy.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.alpacaAccount.tradingPolicy.id !== undefined ? prop.alpacaAccount.tradingPolicy.id : undefined,
          alpacaAccountId: prop.alpacaAccount.tradingPolicy.alpacaAccountId !== undefined ? prop.alpacaAccount.tradingPolicy.alpacaAccountId : undefined,
          miniModelId: prop.alpacaAccount.tradingPolicy.miniModelId !== undefined ? {
              equals: prop.alpacaAccount.tradingPolicy.miniModelId 
             } : undefined,
          normalModelId: prop.alpacaAccount.tradingPolicy.normalModelId !== undefined ? {
              equals: prop.alpacaAccount.tradingPolicy.normalModelId 
             } : undefined,
          advancedModelId: prop.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? {
              equals: prop.alpacaAccount.tradingPolicy.advancedModelId 
             } : undefined,
        },
        create: {
          version: prop.alpacaAccount.tradingPolicy.version !== undefined ? prop.alpacaAccount.tradingPolicy.version : undefined,
          lastModifiedBy: prop.alpacaAccount.tradingPolicy.lastModifiedBy !== undefined ? prop.alpacaAccount.tradingPolicy.lastModifiedBy : undefined,
          lastModifiedAt: prop.alpacaAccount.tradingPolicy.lastModifiedAt !== undefined ? prop.alpacaAccount.tradingPolicy.lastModifiedAt : undefined,
          autonomyMode: prop.alpacaAccount.tradingPolicy.autonomyMode !== undefined ? prop.alpacaAccount.tradingPolicy.autonomyMode : undefined,
          realtimeTradingEnabled: prop.alpacaAccount.tradingPolicy.realtimeTradingEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.realtimeTradingEnabled : undefined,
          paperTradingOnly: prop.alpacaAccount.tradingPolicy.paperTradingOnly !== undefined ? prop.alpacaAccount.tradingPolicy.paperTradingOnly : undefined,
          killSwitchEnabled: prop.alpacaAccount.tradingPolicy.killSwitchEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.killSwitchEnabled : undefined,
          autonomyPrefs: prop.alpacaAccount.tradingPolicy.autonomyPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.autonomyPrefs : undefined,
          equitiesEnabled: prop.alpacaAccount.tradingPolicy.equitiesEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.equitiesEnabled : undefined,
          etfsEnabled: prop.alpacaAccount.tradingPolicy.etfsEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.etfsEnabled : undefined,
          cryptoEnabled: prop.alpacaAccount.tradingPolicy.cryptoEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.cryptoEnabled : undefined,
          optionsEnabled: prop.alpacaAccount.tradingPolicy.optionsEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.optionsEnabled : undefined,
          futuresEnabled: prop.alpacaAccount.tradingPolicy.futuresEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.futuresEnabled : undefined,
          forexEnabled: prop.alpacaAccount.tradingPolicy.forexEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.forexEnabled : undefined,
          shortingEnabled: prop.alpacaAccount.tradingPolicy.shortingEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.shortingEnabled : undefined,
          marginEnabled: prop.alpacaAccount.tradingPolicy.marginEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.marginEnabled : undefined,
          fractionalSharesEnabled: prop.alpacaAccount.tradingPolicy.fractionalSharesEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.fractionalSharesEnabled : undefined,
          assetUniversePrefs: prop.alpacaAccount.tradingPolicy.assetUniversePrefs !== undefined ? prop.alpacaAccount.tradingPolicy.assetUniversePrefs : undefined,
          maxBuyingPowerUtilPct: prop.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct !== undefined ? prop.alpacaAccount.tradingPolicy.maxBuyingPowerUtilPct : undefined,
          cashFloorPct: prop.alpacaAccount.tradingPolicy.cashFloorPct !== undefined ? prop.alpacaAccount.tradingPolicy.cashFloorPct : undefined,
          maxGrossExposurePct: prop.alpacaAccount.tradingPolicy.maxGrossExposurePct !== undefined ? prop.alpacaAccount.tradingPolicy.maxGrossExposurePct : undefined,
          maxNetExposurePct: prop.alpacaAccount.tradingPolicy.maxNetExposurePct !== undefined ? prop.alpacaAccount.tradingPolicy.maxNetExposurePct : undefined,
          maxLeverage: prop.alpacaAccount.tradingPolicy.maxLeverage !== undefined ? prop.alpacaAccount.tradingPolicy.maxLeverage : undefined,
          maxSymbolConcentrationPct: prop.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct !== undefined ? prop.alpacaAccount.tradingPolicy.maxSymbolConcentrationPct : undefined,
          maxSectorConcentrationPct: prop.alpacaAccount.tradingPolicy.maxSectorConcentrationPct !== undefined ? prop.alpacaAccount.tradingPolicy.maxSectorConcentrationPct : undefined,
          maxOpenPositions: prop.alpacaAccount.tradingPolicy.maxOpenPositions !== undefined ? prop.alpacaAccount.tradingPolicy.maxOpenPositions : undefined,
          maxOpenOrders: prop.alpacaAccount.tradingPolicy.maxOpenOrders !== undefined ? prop.alpacaAccount.tradingPolicy.maxOpenOrders : undefined,
          riskBudgetPrefs: prop.alpacaAccount.tradingPolicy.riskBudgetPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.riskBudgetPrefs : undefined,
          signalConsumptionPrefs: prop.alpacaAccount.tradingPolicy.signalConsumptionPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.signalConsumptionPrefs : undefined,
          executionPrefs: prop.alpacaAccount.tradingPolicy.executionPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.executionPrefs : undefined,
          positionManagementPrefs: prop.alpacaAccount.tradingPolicy.positionManagementPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.positionManagementPrefs : undefined,
          portfolioConstructionPrefs: prop.alpacaAccount.tradingPolicy.portfolioConstructionPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.portfolioConstructionPrefs : undefined,
          macroOverlayEnabled: prop.alpacaAccount.tradingPolicy.macroOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.macroOverlayEnabled : undefined,
          sectorOverlayEnabled: prop.alpacaAccount.tradingPolicy.sectorOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.sectorOverlayEnabled : undefined,
          volatilityOverlayEnabled: prop.alpacaAccount.tradingPolicy.volatilityOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.volatilityOverlayEnabled : undefined,
          liquidityStressOverlayEnabled: prop.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.liquidityStressOverlayEnabled : undefined,
          blackSwanProtectionEnabled: prop.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.blackSwanProtectionEnabled : undefined,
          drawdownGuardianEnabled: prop.alpacaAccount.tradingPolicy.drawdownGuardianEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.drawdownGuardianEnabled : undefined,
          correlationSpikeProtectionEnabled: prop.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.correlationSpikeProtectionEnabled : undefined,
          newsEventRiskOverlayEnabled: prop.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.newsEventRiskOverlayEnabled : undefined,
          exchangeHealthOverlayEnabled: prop.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.exchangeHealthOverlayEnabled : undefined,
          dataQualitySentinelEnabled: prop.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled !== undefined ? prop.alpacaAccount.tradingPolicy.dataQualitySentinelEnabled : undefined,
          overlayResponsePrefs: prop.alpacaAccount.tradingPolicy.overlayResponsePrefs !== undefined ? prop.alpacaAccount.tradingPolicy.overlayResponsePrefs : undefined,
          miniModelProvider: prop.alpacaAccount.tradingPolicy.miniModelProvider !== undefined ? prop.alpacaAccount.tradingPolicy.miniModelProvider : undefined,
          miniModelId: prop.alpacaAccount.tradingPolicy.miniModelId !== undefined ? prop.alpacaAccount.tradingPolicy.miniModelId : undefined,
          normalModelProvider: prop.alpacaAccount.tradingPolicy.normalModelProvider !== undefined ? prop.alpacaAccount.tradingPolicy.normalModelProvider : undefined,
          normalModelId: prop.alpacaAccount.tradingPolicy.normalModelId !== undefined ? prop.alpacaAccount.tradingPolicy.normalModelId : undefined,
          advancedModelProvider: prop.alpacaAccount.tradingPolicy.advancedModelProvider !== undefined ? prop.alpacaAccount.tradingPolicy.advancedModelProvider : undefined,
          advancedModelId: prop.alpacaAccount.tradingPolicy.advancedModelId !== undefined ? prop.alpacaAccount.tradingPolicy.advancedModelId : undefined,
          modelPrefs: prop.alpacaAccount.tradingPolicy.modelPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.modelPrefs : undefined,
          auditNotificationPrefs: prop.alpacaAccount.tradingPolicy.auditNotificationPrefs !== undefined ? prop.alpacaAccount.tradingPolicy.auditNotificationPrefs : undefined,
      overlays: prop.alpacaAccount.tradingPolicy.overlays ? 
        Array.isArray(prop.alpacaAccount.tradingPolicy.overlays) && prop.alpacaAccount.tradingPolicy.overlays.length > 0 &&  prop.alpacaAccount.tradingPolicy.overlays.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.tradingPolicy.overlays.map((item: any) => ({
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
    user: prop.alpacaAccount.user ? 
      typeof prop.alpacaAccount.user === 'object' && Object.keys(prop.alpacaAccount.user).length === 1 && Object.keys(prop.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: prop.alpacaAccount.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.alpacaAccount.user.id !== undefined ? prop.alpacaAccount.user.id : undefined,
          email: prop.alpacaAccount.user.email !== undefined ? prop.alpacaAccount.user.email : undefined,
          name: prop.alpacaAccount.user.name !== undefined ? {
              equals: prop.alpacaAccount.user.name 
             } : undefined,
        },
        create: {
          name: prop.alpacaAccount.user.name !== undefined ? prop.alpacaAccount.user.name : undefined,
          email: prop.alpacaAccount.user.email !== undefined ? prop.alpacaAccount.user.email : undefined,
          emailVerified: prop.alpacaAccount.user.emailVerified !== undefined ? prop.alpacaAccount.user.emailVerified : undefined,
          image: prop.alpacaAccount.user.image !== undefined ? prop.alpacaAccount.user.image : undefined,
          deletedAt: prop.alpacaAccount.user.deletedAt !== undefined ? prop.alpacaAccount.user.deletedAt : undefined,
          role: prop.alpacaAccount.user.role !== undefined ? prop.alpacaAccount.user.role : undefined,
          bio: prop.alpacaAccount.user.bio !== undefined ? prop.alpacaAccount.user.bio : undefined,
          jobTitle: prop.alpacaAccount.user.jobTitle !== undefined ? prop.alpacaAccount.user.jobTitle : undefined,
          currentAccount: prop.alpacaAccount.user.currentAccount !== undefined ? prop.alpacaAccount.user.currentAccount : undefined,
          plan: prop.alpacaAccount.user.plan !== undefined ? prop.alpacaAccount.user.plan : undefined,
          openaiAPIKey: prop.alpacaAccount.user.openaiAPIKey !== undefined ? prop.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: prop.alpacaAccount.user.openaiModel !== undefined ? prop.alpacaAccount.user.openaiModel : undefined,
      customer: prop.alpacaAccount.user.customer ? 
        typeof prop.alpacaAccount.user.customer === 'object' && Object.keys(prop.alpacaAccount.user.customer).length === 1 && Object.keys(prop.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: prop.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.alpacaAccount.user.customer.id !== undefined ? prop.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? prop.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? prop.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? {
                equals: prop.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? prop.alpacaAccount.user.customer.authUserId : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? prop.alpacaAccount.user.customer.name : undefined,
            plan: prop.alpacaAccount.user.customer.plan !== undefined ? prop.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? prop.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? prop.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? prop.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.alpacaAccount.user.accounts ? 
        Array.isArray(prop.alpacaAccount.user.accounts) && prop.alpacaAccount.user.accounts.length > 0 &&  prop.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: prop.alpacaAccount.user.sessions ? 
        Array.isArray(prop.alpacaAccount.user.sessions) && prop.alpacaAccount.user.sessions.length > 0 &&  prop.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: prop.alpacaAccount.user.authenticators ? 
        Array.isArray(prop.alpacaAccount.user.authenticators) && prop.alpacaAccount.user.authenticators.length > 0 &&  prop.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.authenticators.map((item: any) => ({
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
      linkedProviders: prop.alpacaAccount.user.linkedProviders ? 
        Array.isArray(prop.alpacaAccount.user.linkedProviders) && prop.alpacaAccount.user.linkedProviders.length > 0 &&  prop.alpacaAccount.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: prop.alpacaAccount.user.accountLinkingRequests ? 
        Array.isArray(prop.alpacaAccount.user.accountLinkingRequests) && prop.alpacaAccount.user.accountLinkingRequests.length > 0 &&  prop.alpacaAccount.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.accountLinkingRequests.map((item: any) => ({
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
      reviewedWaitlistEntries: prop.alpacaAccount.user.reviewedWaitlistEntries ? 
        Array.isArray(prop.alpacaAccount.user.reviewedWaitlistEntries) && prop.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  prop.alpacaAccount.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.reviewedWaitlistEntries.map((item: any) => ({
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
          },
        }))
      } : undefined,
      llmConfiguration: prop.alpacaAccount.user.llmConfiguration ? 
        typeof prop.alpacaAccount.user.llmConfiguration === 'object' && Object.keys(prop.alpacaAccount.user.llmConfiguration).length === 1 && Object.keys(prop.alpacaAccount.user.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: prop.alpacaAccount.user.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.alpacaAccount.user.llmConfiguration.id !== undefined ? prop.alpacaAccount.user.llmConfiguration.id : undefined,
            userId: prop.alpacaAccount.user.llmConfiguration.userId !== undefined ? prop.alpacaAccount.user.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: prop.alpacaAccount.user.llmConfiguration.defaultProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.defaultProvider : undefined,
            miniProvider: prop.alpacaAccount.user.llmConfiguration.miniProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.miniProvider : undefined,
            normalProvider: prop.alpacaAccount.user.llmConfiguration.normalProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.normalProvider : undefined,
            advancedProvider: prop.alpacaAccount.user.llmConfiguration.advancedProvider !== undefined ? prop.alpacaAccount.user.llmConfiguration.advancedProvider : undefined,
            miniModel: prop.alpacaAccount.user.llmConfiguration.miniModel !== undefined ? prop.alpacaAccount.user.llmConfiguration.miniModel : undefined,
            normalModel: prop.alpacaAccount.user.llmConfiguration.normalModel !== undefined ? prop.alpacaAccount.user.llmConfiguration.normalModel : undefined,
            advancedModel: prop.alpacaAccount.user.llmConfiguration.advancedModel !== undefined ? prop.alpacaAccount.user.llmConfiguration.advancedModel : undefined,
            openaiApiKey: prop.alpacaAccount.user.llmConfiguration.openaiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: prop.alpacaAccount.user.llmConfiguration.anthropicApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: prop.alpacaAccount.user.llmConfiguration.deepseekApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: prop.alpacaAccount.user.llmConfiguration.kimiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: prop.alpacaAccount.user.llmConfiguration.qwenApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: prop.alpacaAccount.user.llmConfiguration.xaiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: prop.alpacaAccount.user.llmConfiguration.geminiApiKey !== undefined ? prop.alpacaAccount.user.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    alerts: prop.alpacaAccount.alerts ? 
      Array.isArray(prop.alpacaAccount.alerts) && prop.alpacaAccount.alerts.length > 0 &&  prop.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.alpacaAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.alpacaAccount.alerts.map((item: any) => ({
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
          logger.error("Non-retryable constraint violation in updateManyAllocation", {
            operation: 'updateManyAllocation',
            model: 'Allocation',
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
          logger.warn("Database connection error in updateManyAllocation, retrying...", {
            operation: 'updateManyAllocation',
            model: 'Allocation',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database updateMany operation failed", {
          operation: 'updateManyAllocation',
          model: 'Allocation',
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
          logger.error("Non-retryable constraint violation in deleteOneAllocation", {
            operation: 'deleteOneAllocation',
            model: 'Allocation',
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
          logger.warn("Database connection error in deleteOneAllocation, retrying...", {
            operation: 'deleteOneAllocation',
            model: 'Allocation',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database delete operation failed", {
          operation: 'deleteOneAllocation',
          model: 'Allocation',
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
  alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
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
          logger.warn("Database connection error in getAllocation, retrying...", {
            operation: 'getAllocation',
            model: 'Allocation',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database get operation failed", {
          operation: 'getAllocation',
          model: 'Allocation',
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
          logger.warn("Database connection error in getAllAllocation, retrying...", {
            operation: 'getAllAllocation',
            model: 'Allocation',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database getAll operation failed", {
          operation: 'getAllAllocation',
          model: 'Allocation',
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
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
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
          logger.warn("Database connection error in findManyAllocation, retrying...", {
            operation: 'findManyAllocation',
            model: 'Allocation',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database findMany operation failed", {
          operation: 'findManyAllocation',
          model: 'Allocation',
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
