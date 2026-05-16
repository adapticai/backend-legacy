
  
import { TradingPolicy as TradingPolicyType } from './generated/typegraphql-prisma/models/TradingPolicy';
import { getApolloClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the TradingPolicy model.
   */

  const selectionSet = `
    
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
  equityWashTradeCooldownMs
  minIntradayLiquidityShares
  maxEntrySpreadBps
  sameSideReentryDelayMs
  minAtrPercentage
  maxAtrPercentage
  minBookDepthShares
  maxAnomalousSlippageBps
  intradayTradingWindows
  hardPositionExitMinutes
  maxOrdersPerWindow
  orderWindowSeconds
  dayTradeOnly
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

  `;

  export const TradingPolicy = {

    /**
     * Create a new TradingPolicy record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created TradingPolicy or null.
     */

    /**
     * Create a new TradingPolicy record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created TradingPolicy or null.
     */
    async create(props: TradingPolicyType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradingPolicyType> {
      // Maximum number of retries for database connection issues
      const MAX_RETRIES = 3;
      let retryCount = 0;
      let lastError: unknown = null;

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

          const CREATE_ONE_TRADINGPOLICY = gql`
              mutation createOneTradingPolicy($data: TradingPolicyCreateInput!) {
                createOneTradingPolicy(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                version: props.version !== undefined ? props.version : undefined,
  lastModifiedBy: props.lastModifiedBy !== undefined ? props.lastModifiedBy : undefined,
  lastModifiedAt: props.lastModifiedAt !== undefined ? props.lastModifiedAt : undefined,
  autonomyMode: props.autonomyMode !== undefined ? props.autonomyMode : undefined,
  realtimeTradingEnabled: props.realtimeTradingEnabled !== undefined ? props.realtimeTradingEnabled : undefined,
  paperTradingOnly: props.paperTradingOnly !== undefined ? props.paperTradingOnly : undefined,
  killSwitchEnabled: props.killSwitchEnabled !== undefined ? props.killSwitchEnabled : undefined,
  autonomyPrefs: props.autonomyPrefs !== undefined ? props.autonomyPrefs : undefined,
  equitiesEnabled: props.equitiesEnabled !== undefined ? props.equitiesEnabled : undefined,
  etfsEnabled: props.etfsEnabled !== undefined ? props.etfsEnabled : undefined,
  cryptoEnabled: props.cryptoEnabled !== undefined ? props.cryptoEnabled : undefined,
  optionsEnabled: props.optionsEnabled !== undefined ? props.optionsEnabled : undefined,
  futuresEnabled: props.futuresEnabled !== undefined ? props.futuresEnabled : undefined,
  forexEnabled: props.forexEnabled !== undefined ? props.forexEnabled : undefined,
  shortingEnabled: props.shortingEnabled !== undefined ? props.shortingEnabled : undefined,
  marginEnabled: props.marginEnabled !== undefined ? props.marginEnabled : undefined,
  fractionalSharesEnabled: props.fractionalSharesEnabled !== undefined ? props.fractionalSharesEnabled : undefined,
  assetUniversePrefs: props.assetUniversePrefs !== undefined ? props.assetUniversePrefs : undefined,
  maxBuyingPowerUtilPct: props.maxBuyingPowerUtilPct !== undefined ? props.maxBuyingPowerUtilPct : undefined,
  cashFloorPct: props.cashFloorPct !== undefined ? props.cashFloorPct : undefined,
  maxGrossExposurePct: props.maxGrossExposurePct !== undefined ? props.maxGrossExposurePct : undefined,
  maxNetExposurePct: props.maxNetExposurePct !== undefined ? props.maxNetExposurePct : undefined,
  maxLeverage: props.maxLeverage !== undefined ? props.maxLeverage : undefined,
  maxSymbolConcentrationPct: props.maxSymbolConcentrationPct !== undefined ? props.maxSymbolConcentrationPct : undefined,
  maxSectorConcentrationPct: props.maxSectorConcentrationPct !== undefined ? props.maxSectorConcentrationPct : undefined,
  maxOpenPositions: props.maxOpenPositions !== undefined ? props.maxOpenPositions : undefined,
  maxOpenOrders: props.maxOpenOrders !== undefined ? props.maxOpenOrders : undefined,
  perTradeEquityAllocationPct: props.perTradeEquityAllocationPct !== undefined ? props.perTradeEquityAllocationPct : undefined,
  perTradeCryptoAllocationPct: props.perTradeCryptoAllocationPct !== undefined ? props.perTradeCryptoAllocationPct : undefined,
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
  equityWashTradeCooldownMs: props.equityWashTradeCooldownMs !== undefined ? props.equityWashTradeCooldownMs : undefined,
  minIntradayLiquidityShares: props.minIntradayLiquidityShares !== undefined ? props.minIntradayLiquidityShares : undefined,
  maxEntrySpreadBps: props.maxEntrySpreadBps !== undefined ? props.maxEntrySpreadBps : undefined,
  sameSideReentryDelayMs: props.sameSideReentryDelayMs !== undefined ? props.sameSideReentryDelayMs : undefined,
  minAtrPercentage: props.minAtrPercentage !== undefined ? props.minAtrPercentage : undefined,
  maxAtrPercentage: props.maxAtrPercentage !== undefined ? props.maxAtrPercentage : undefined,
  minBookDepthShares: props.minBookDepthShares !== undefined ? props.minBookDepthShares : undefined,
  maxAnomalousSlippageBps: props.maxAnomalousSlippageBps !== undefined ? props.maxAnomalousSlippageBps : undefined,
  intradayTradingWindows: props.intradayTradingWindows !== undefined ? props.intradayTradingWindows : undefined,
  hardPositionExitMinutes: props.hardPositionExitMinutes !== undefined ? props.hardPositionExitMinutes : undefined,
  maxOrdersPerWindow: props.maxOrdersPerWindow !== undefined ? props.maxOrdersPerWindow : undefined,
  orderWindowSeconds: props.orderWindowSeconds !== undefined ? props.orderWindowSeconds : undefined,
  dayTradeOnly: props.dayTradeOnly !== undefined ? props.dayTradeOnly : undefined,
  riskBudgetPrefs: props.riskBudgetPrefs !== undefined ? props.riskBudgetPrefs : undefined,
  signalConsumptionPrefs: props.signalConsumptionPrefs !== undefined ? props.signalConsumptionPrefs : undefined,
  executionPrefs: props.executionPrefs !== undefined ? props.executionPrefs : undefined,
  positionManagementPrefs: props.positionManagementPrefs !== undefined ? props.positionManagementPrefs : undefined,
  portfolioConstructionPrefs: props.portfolioConstructionPrefs !== undefined ? props.portfolioConstructionPrefs : undefined,
  macroOverlayEnabled: props.macroOverlayEnabled !== undefined ? props.macroOverlayEnabled : undefined,
  sectorOverlayEnabled: props.sectorOverlayEnabled !== undefined ? props.sectorOverlayEnabled : undefined,
  volatilityOverlayEnabled: props.volatilityOverlayEnabled !== undefined ? props.volatilityOverlayEnabled : undefined,
  liquidityStressOverlayEnabled: props.liquidityStressOverlayEnabled !== undefined ? props.liquidityStressOverlayEnabled : undefined,
  blackSwanProtectionEnabled: props.blackSwanProtectionEnabled !== undefined ? props.blackSwanProtectionEnabled : undefined,
  drawdownGuardianEnabled: props.drawdownGuardianEnabled !== undefined ? props.drawdownGuardianEnabled : undefined,
  correlationSpikeProtectionEnabled: props.correlationSpikeProtectionEnabled !== undefined ? props.correlationSpikeProtectionEnabled : undefined,
  newsEventRiskOverlayEnabled: props.newsEventRiskOverlayEnabled !== undefined ? props.newsEventRiskOverlayEnabled : undefined,
  exchangeHealthOverlayEnabled: props.exchangeHealthOverlayEnabled !== undefined ? props.exchangeHealthOverlayEnabled : undefined,
  dataQualitySentinelEnabled: props.dataQualitySentinelEnabled !== undefined ? props.dataQualitySentinelEnabled : undefined,
  overlayResponsePrefs: props.overlayResponsePrefs !== undefined ? props.overlayResponsePrefs : undefined,
  miniModelProvider: props.miniModelProvider !== undefined ? props.miniModelProvider : undefined,
  miniModelId: props.miniModelId !== undefined ? props.miniModelId : undefined,
  normalModelProvider: props.normalModelProvider !== undefined ? props.normalModelProvider : undefined,
  normalModelId: props.normalModelId !== undefined ? props.normalModelId : undefined,
  advancedModelProvider: props.advancedModelProvider !== undefined ? props.advancedModelProvider : undefined,
  advancedModelId: props.advancedModelId !== undefined ? props.advancedModelId : undefined,
  modelPrefs: props.modelPrefs !== undefined ? props.modelPrefs : undefined,
  auditNotificationPrefs: props.auditNotificationPrefs !== undefined ? props.auditNotificationPrefs : undefined,
  escalationPolicyOverrides: props.escalationPolicyOverrides !== undefined ? props.escalationPolicyOverrides : undefined,
  currentRiskState: props.currentRiskState !== undefined ? props.currentRiskState : undefined,
  currentRiskStateAt: props.currentRiskStateAt !== undefined ? props.currentRiskStateAt : undefined,
  lastRiskStateChangedBy: props.lastRiskStateChangedBy !== undefined ? props.lastRiskStateChangedBy : undefined,
  lastRiskEscalationEventId: props.lastRiskEscalationEventId !== undefined ? props.lastRiskEscalationEventId : undefined,
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
    allocation: props.alpacaAccount.allocation ? 
      typeof props.alpacaAccount.allocation === 'object' && Object.keys(props.alpacaAccount.allocation).length === 1 && Object.keys(props.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.allocation.id !== undefined ? props.alpacaAccount.allocation.id : undefined,
          alpacaAccountId: props.alpacaAccount.allocation.alpacaAccountId !== undefined ? props.alpacaAccount.allocation.alpacaAccountId : undefined,
        },
        create: {
          equities: props.alpacaAccount.allocation.equities !== undefined ? props.alpacaAccount.allocation.equities : undefined,
          optionsContracts: props.alpacaAccount.allocation.optionsContracts !== undefined ? props.alpacaAccount.allocation.optionsContracts : undefined,
          futures: props.alpacaAccount.allocation.futures !== undefined ? props.alpacaAccount.allocation.futures : undefined,
          etfs: props.alpacaAccount.allocation.etfs !== undefined ? props.alpacaAccount.allocation.etfs : undefined,
          forex: props.alpacaAccount.allocation.forex !== undefined ? props.alpacaAccount.allocation.forex : undefined,
          crypto: props.alpacaAccount.allocation.crypto !== undefined ? props.alpacaAccount.allocation.crypto : undefined,
          stocks: props.alpacaAccount.allocation.stocks !== undefined ? props.alpacaAccount.allocation.stocks : undefined,
          options: props.alpacaAccount.allocation.options !== undefined ? props.alpacaAccount.allocation.options : undefined,
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
            jurisdiction: props.alpacaAccount.user.customer.jurisdiction !== undefined ? props.alpacaAccount.user.customer.jurisdiction : undefined,
            riskProfile: props.alpacaAccount.user.customer.riskProfile !== undefined ? props.alpacaAccount.user.customer.riskProfile : undefined,
            amlStatus: props.alpacaAccount.user.customer.amlStatus !== undefined ? props.alpacaAccount.user.customer.amlStatus : undefined,
            lastKycUpdate: props.alpacaAccount.user.customer.lastKycUpdate !== undefined ? props.alpacaAccount.user.customer.lastKycUpdate : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
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
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 &&  props.alpacaAccount.alerts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.alerts.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.alerts.map((item) => ({
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
    accountRiskMetrics: props.alpacaAccount.accountRiskMetrics ? 
      typeof props.alpacaAccount.accountRiskMetrics === 'object' && Object.keys(props.alpacaAccount.accountRiskMetrics).length === 1 && Object.keys(props.alpacaAccount.accountRiskMetrics)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.accountRiskMetrics.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.accountRiskMetrics.id !== undefined ? props.alpacaAccount.accountRiskMetrics.id : undefined,
          alpacaAccountId: props.alpacaAccount.accountRiskMetrics.alpacaAccountId !== undefined ? props.alpacaAccount.accountRiskMetrics.alpacaAccountId : undefined,
        },
        create: {
          currentRiskState: props.alpacaAccount.accountRiskMetrics.currentRiskState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentRiskState : undefined,
          currentScopeState: props.alpacaAccount.accountRiskMetrics.currentScopeState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentScopeState : undefined,
          riskStateChangedAt: props.alpacaAccount.accountRiskMetrics.riskStateChangedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedAt : undefined,
          riskStateChangedBy: props.alpacaAccount.accountRiskMetrics.riskStateChangedBy !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedBy : undefined,
          riskStateChangeReason: props.alpacaAccount.accountRiskMetrics.riskStateChangeReason !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangeReason : undefined,
          accountHighWaterMark: props.alpacaAccount.accountRiskMetrics.accountHighWaterMark !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMark : undefined,
          accountHighWaterMarkAt: props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt : undefined,
          currentEquity: props.alpacaAccount.accountRiskMetrics.currentEquity !== undefined ? props.alpacaAccount.accountRiskMetrics.currentEquity : undefined,
          currentDrawdownPct: props.alpacaAccount.accountRiskMetrics.currentDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.currentDrawdownPct : undefined,
          intradayDrawdownPct: props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct : undefined,
          maxDrawdownPctLifetime: props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime !== undefined ? props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime : undefined,
          dailyPnlAmount: props.alpacaAccount.accountRiskMetrics.dailyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlAmount : undefined,
          dailyPnlPct: props.alpacaAccount.accountRiskMetrics.dailyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlPct : undefined,
          weeklyPnlAmount: props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount : undefined,
          weeklyPnlPct: props.alpacaAccount.accountRiskMetrics.weeklyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlPct : undefined,
          monthlyPnlAmount: props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount : undefined,
          monthlyPnlPct: props.alpacaAccount.accountRiskMetrics.monthlyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlPct : undefined,
          peakToTroughAmount: props.alpacaAccount.accountRiskMetrics.peakToTroughAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughAmount : undefined,
          peakToTroughPct: props.alpacaAccount.accountRiskMetrics.peakToTroughPct !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughPct : undefined,
          nextRecoveryEligibleAt: props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt !== undefined ? props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt : undefined,
          lastSyncedAt: props.alpacaAccount.accountRiskMetrics.lastSyncedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.lastSyncedAt : undefined,
        },
      }
    } : undefined,
    strategyHealthSnapshots: props.alpacaAccount.strategyHealthSnapshots ? 
      Array.isArray(props.alpacaAccount.strategyHealthSnapshots) && props.alpacaAccount.strategyHealthSnapshots.length > 0 &&  props.alpacaAccount.strategyHealthSnapshots.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          strategyName: item.strategyName !== undefined ? item.strategyName : undefined,
          currentState: item.currentState !== undefined ? item.currentState : undefined,
          stateChangedAt: item.stateChangedAt !== undefined ? item.stateChangedAt : undefined,
          stateChangedReason: item.stateChangedReason !== undefined ? item.stateChangedReason : undefined,
          windowSize: item.windowSize !== undefined ? item.windowSize : undefined,
          windowTradeCount: item.windowTradeCount !== undefined ? item.windowTradeCount : undefined,
          windowHitRate: item.windowHitRate !== undefined ? item.windowHitRate : undefined,
          windowExpectancy: item.windowExpectancy !== undefined ? item.windowExpectancy : undefined,
          windowProfitFactor: item.windowProfitFactor !== undefined ? item.windowProfitFactor : undefined,
          windowSortino: item.windowSortino !== undefined ? item.windowSortino : undefined,
          windowMaxDrawdownPct: item.windowMaxDrawdownPct !== undefined ? item.windowMaxDrawdownPct : undefined,
          windowCumulativePnlAmt: item.windowCumulativePnlAmt !== undefined ? item.windowCumulativePnlAmt : undefined,
          backtestExpectancy: item.backtestExpectancy !== undefined ? item.backtestExpectancy : undefined,
          divergenceZScore: item.divergenceZScore !== undefined ? item.divergenceZScore : undefined,
          divergenceAlertActive: item.divergenceAlertActive !== undefined ? item.divergenceAlertActive : undefined,
          averageConfidence: item.averageConfidence !== undefined ? item.averageConfidence : undefined,
          confidenceTrend: item.confidenceTrend !== undefined ? item.confidenceTrend : undefined,
          lastUpdatedAt: item.lastUpdatedAt !== undefined ? item.lastUpdatedAt : undefined,
        },
      }))
    } : undefined,
    riskEscalationEvents: props.alpacaAccount.riskEscalationEvents ? 
      Array.isArray(props.alpacaAccount.riskEscalationEvents) && props.alpacaAccount.riskEscalationEvents.length > 0 &&  props.alpacaAccount.riskEscalationEvents.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.riskEscalationEvents.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.riskEscalationEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId 
             } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId 
             } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.triggeredByPolicyOverlay ? 
        typeof item.triggeredByPolicyOverlay === 'object' && Object.keys(item.triggeredByPolicyOverlay).length === 1 && Object.keys(item.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? item.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? item.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? item.triggeredByPolicyOverlay.source : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? item.triggeredByPolicyOverlay.reason : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? item.triggeredByPolicyOverlay.severity : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? item.triggeredByPolicyOverlay.version : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? item.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? item.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? item.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? item.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  overlays: props.overlays ? 
    Array.isArray(props.overlays) && props.overlays.length > 0 &&  props.overlays.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.overlays.map((item) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.overlays.map((item) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        riskEscalationEventId: item.riskEscalationEventId !== undefined ? item.riskEscalationEventId : undefined,
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
    riskEscalationEvent: item.riskEscalationEvent ? 
      typeof item.riskEscalationEvent === 'object' && Object.keys(item.riskEscalationEvent).length === 1 && Object.keys(item.riskEscalationEvent)[0] === 'id'
    ? { connect: {
          id: item.riskEscalationEvent.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.riskEscalationEvent.id !== undefined ? item.riskEscalationEvent.id : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? {
              equals: item.riskEscalationEvent.correlationId 
             } : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? {
              equals: item.riskEscalationEvent.triggeringEventId 
             } : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? {
              equals: item.riskEscalationEvent.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.riskEscalationEvent.scopeKind !== undefined ? item.riskEscalationEvent.scopeKind : undefined,
          scopeValue: item.riskEscalationEvent.scopeValue !== undefined ? item.riskEscalationEvent.scopeValue : undefined,
          fromState: item.riskEscalationEvent.fromState !== undefined ? item.riskEscalationEvent.fromState : undefined,
          toState: item.riskEscalationEvent.toState !== undefined ? item.riskEscalationEvent.toState : undefined,
          reason: item.riskEscalationEvent.reason !== undefined ? item.riskEscalationEvent.reason : undefined,
          severity: item.riskEscalationEvent.severity !== undefined ? item.riskEscalationEvent.severity : undefined,
          triggeringObserver: item.riskEscalationEvent.triggeringObserver !== undefined ? item.riskEscalationEvent.triggeringObserver : undefined,
          observedValue: item.riskEscalationEvent.observedValue !== undefined ? item.riskEscalationEvent.observedValue : undefined,
          breachedThreshold: item.riskEscalationEvent.breachedThreshold !== undefined ? item.riskEscalationEvent.breachedThreshold : undefined,
          breachedThresholdKey: item.riskEscalationEvent.breachedThresholdKey !== undefined ? item.riskEscalationEvent.breachedThresholdKey : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? item.riskEscalationEvent.correlationId : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? item.riskEscalationEvent.triggeringEventId : undefined,
          actor: item.riskEscalationEvent.actor !== undefined ? item.riskEscalationEvent.actor : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? item.riskEscalationEvent.actorUserId : undefined,
          rationale: item.riskEscalationEvent.rationale !== undefined ? item.riskEscalationEvent.rationale : undefined,
      alpacaAccount: item.riskEscalationEvent.alpacaAccount ? 
        typeof item.riskEscalationEvent.alpacaAccount === 'object' && Object.keys(item.riskEscalationEvent.alpacaAccount).length === 1 && Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? item.riskEscalationEvent.alpacaAccount.id : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.type 
               } : undefined,
            userId: item.riskEscalationEvent.alpacaAccount.userId !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? item.riskEscalationEvent.alpacaAccount.type : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? item.riskEscalationEvent.alpacaAccount.APIKey : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? item.riskEscalationEvent.alpacaAccount.APISecret : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? item.riskEscalationEvent.alpacaAccount.marketOpen : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? item.riskEscalationEvent.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? item.riskEscalationEvent.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? item.riskEscalationEvent.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? item.riskEscalationEvent.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? item.riskEscalationEvent.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.riskEscalationEvent.triggeredByPolicyOverlay ? 
        typeof item.riskEscalationEvent.triggeredByPolicyOverlay === 'object' && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay).length === 1 && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.source : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.reason : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.severity : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.version : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    triggeredRiskEvents: item.triggeredRiskEvents ? 
      Array.isArray(item.triggeredRiskEvents) && item.triggeredRiskEvents.length > 0 &&  item.triggeredRiskEvents.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.triggeredRiskEvents.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.triggeredRiskEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId 
             } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId 
             } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                equals: item.alpacaAccount.type 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? item.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? item.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? item.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_TRADINGPOLICY,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneTradingPolicy) {
            return response.data.createOneTradingPolicy;
          } else {
            return null as unknown as TradingPolicyType;
          }
        } catch (caughtError: unknown) {
          const error = caughtError as Error & { networkError?: { message?: string } };
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
            logger.error("Non-retryable constraint violation in createOneTradingPolicy", {
              operation: 'createOneTradingPolicy',
              model: 'TradingPolicy',
              error: String(error),
              constraintName: constraintMatch ? constraintMatch[1] : undefined,
              errorCategory: 'CONSTRAINT_VIOLATION',
              isRetryable: false,
            });
            throw error;
          }

          // Check if this is a database connection error that we should retry.
          // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
          // pool exhaustion, and transient gateway statuses. Must stay consistent
          // with the transient classifier in client.ts (onError link + enqueueOperation).
          const isConnectionError =
            error.message?.includes('Server has closed the connection') ||
            error.message?.includes('Cannot reach database server') ||
            error.message?.includes('Connection timed out') ||
            error.message?.includes('aborted due to timeout') ||
            error.message?.includes('TimeoutError') ||
            error.message?.includes('fetch failed') ||
            error.message?.includes('socket hang up') ||
            error.message?.includes('ECONNRESET') ||
            error.message?.includes('ECONNREFUSED') ||
            error.message?.includes('ETIMEDOUT') ||
            error.message?.includes('Connection pool timeout') ||
            error.message?.includes('P2024') ||
            error.message?.includes('status code 408') ||
            error.message?.includes('status code 502') ||
            error.message?.includes('status code 503') ||
            error.message?.includes('status code 504') ||
            error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
            (error.networkError && (
              error.networkError.message?.includes('Failed to fetch') ||
              error.networkError.message?.includes('fetch failed') ||
              error.networkError.message?.includes('aborted due to timeout') ||
              error.networkError.message?.includes('TimeoutError')
            ));

          if (isConnectionError && retryCount < MAX_RETRIES - 1) {
            retryCount++;
            const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
            logger.warn("Database connection error in createOneTradingPolicy, retrying...", {
              operation: 'createOneTradingPolicy',
              model: 'TradingPolicy',
              attempt: retryCount,
              maxRetries: MAX_RETRIES,
            });
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log structured error details and rethrow.
          // Demote transient failures to WARN with explicit transient+recoveryHint
          // metadata so log analytics can distinguish recoverable upstream retries
          // from true defects.
          if (isConnectionError) {
            logger.warn("Database create operation failed (transient after retries)", {
              operation: 'createOneTradingPolicy',
              model: 'TradingPolicy',
              error: String(error),
              isRetryable: true,
              transient: true,
              recoveryHint: "Upstream caller should retry on next cycle",
            });
          } else {
            logger.error("Database create operation failed", {
              operation: 'createOneTradingPolicy',
              model: 'TradingPolicy',
              error: String(error),
              isRetryable: false,
            });
          }
          throw error;
        }
      }

      // If we exhausted retries, throw the last error
      throw lastError;
    },

  /**
   * Create multiple TradingPolicy records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of TradingPolicy objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @param options - Optional control flags (e.g., skipDuplicates).
   * @returns The count of created records or null.
   */
  async createMany(props: TradingPolicyType[], globalClient?: ApolloClientType<NormalizedCacheObject>, options?: { skipDuplicates?: boolean }): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

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

        const CREATE_MANY_TRADINGPOLICY = gql`
          mutation createManyTradingPolicy($data: [TradingPolicyCreateManyInput!]!, $skipDuplicates: Boolean) {
            createManyTradingPolicy(data: $data, skipDuplicates: $skipDuplicates) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  version: prop.version !== undefined ? prop.version : undefined,
  lastModifiedBy: prop.lastModifiedBy !== undefined ? prop.lastModifiedBy : undefined,
  lastModifiedAt: prop.lastModifiedAt !== undefined ? prop.lastModifiedAt : undefined,
  autonomyMode: prop.autonomyMode !== undefined ? prop.autonomyMode : undefined,
  realtimeTradingEnabled: prop.realtimeTradingEnabled !== undefined ? prop.realtimeTradingEnabled : undefined,
  paperTradingOnly: prop.paperTradingOnly !== undefined ? prop.paperTradingOnly : undefined,
  killSwitchEnabled: prop.killSwitchEnabled !== undefined ? prop.killSwitchEnabled : undefined,
  autonomyPrefs: prop.autonomyPrefs !== undefined ? prop.autonomyPrefs : undefined,
  equitiesEnabled: prop.equitiesEnabled !== undefined ? prop.equitiesEnabled : undefined,
  etfsEnabled: prop.etfsEnabled !== undefined ? prop.etfsEnabled : undefined,
  cryptoEnabled: prop.cryptoEnabled !== undefined ? prop.cryptoEnabled : undefined,
  optionsEnabled: prop.optionsEnabled !== undefined ? prop.optionsEnabled : undefined,
  futuresEnabled: prop.futuresEnabled !== undefined ? prop.futuresEnabled : undefined,
  forexEnabled: prop.forexEnabled !== undefined ? prop.forexEnabled : undefined,
  shortingEnabled: prop.shortingEnabled !== undefined ? prop.shortingEnabled : undefined,
  marginEnabled: prop.marginEnabled !== undefined ? prop.marginEnabled : undefined,
  fractionalSharesEnabled: prop.fractionalSharesEnabled !== undefined ? prop.fractionalSharesEnabled : undefined,
  assetUniversePrefs: prop.assetUniversePrefs !== undefined ? prop.assetUniversePrefs : undefined,
  maxBuyingPowerUtilPct: prop.maxBuyingPowerUtilPct !== undefined ? prop.maxBuyingPowerUtilPct : undefined,
  cashFloorPct: prop.cashFloorPct !== undefined ? prop.cashFloorPct : undefined,
  maxGrossExposurePct: prop.maxGrossExposurePct !== undefined ? prop.maxGrossExposurePct : undefined,
  maxNetExposurePct: prop.maxNetExposurePct !== undefined ? prop.maxNetExposurePct : undefined,
  maxLeverage: prop.maxLeverage !== undefined ? prop.maxLeverage : undefined,
  maxSymbolConcentrationPct: prop.maxSymbolConcentrationPct !== undefined ? prop.maxSymbolConcentrationPct : undefined,
  maxSectorConcentrationPct: prop.maxSectorConcentrationPct !== undefined ? prop.maxSectorConcentrationPct : undefined,
  maxOpenPositions: prop.maxOpenPositions !== undefined ? prop.maxOpenPositions : undefined,
  maxOpenOrders: prop.maxOpenOrders !== undefined ? prop.maxOpenOrders : undefined,
  perTradeEquityAllocationPct: prop.perTradeEquityAllocationPct !== undefined ? prop.perTradeEquityAllocationPct : undefined,
  perTradeCryptoAllocationPct: prop.perTradeCryptoAllocationPct !== undefined ? prop.perTradeCryptoAllocationPct : undefined,
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
  equityWashTradeCooldownMs: prop.equityWashTradeCooldownMs !== undefined ? prop.equityWashTradeCooldownMs : undefined,
  minIntradayLiquidityShares: prop.minIntradayLiquidityShares !== undefined ? prop.minIntradayLiquidityShares : undefined,
  maxEntrySpreadBps: prop.maxEntrySpreadBps !== undefined ? prop.maxEntrySpreadBps : undefined,
  sameSideReentryDelayMs: prop.sameSideReentryDelayMs !== undefined ? prop.sameSideReentryDelayMs : undefined,
  minAtrPercentage: prop.minAtrPercentage !== undefined ? prop.minAtrPercentage : undefined,
  maxAtrPercentage: prop.maxAtrPercentage !== undefined ? prop.maxAtrPercentage : undefined,
  minBookDepthShares: prop.minBookDepthShares !== undefined ? prop.minBookDepthShares : undefined,
  maxAnomalousSlippageBps: prop.maxAnomalousSlippageBps !== undefined ? prop.maxAnomalousSlippageBps : undefined,
  intradayTradingWindows: prop.intradayTradingWindows !== undefined ? prop.intradayTradingWindows : undefined,
  hardPositionExitMinutes: prop.hardPositionExitMinutes !== undefined ? prop.hardPositionExitMinutes : undefined,
  maxOrdersPerWindow: prop.maxOrdersPerWindow !== undefined ? prop.maxOrdersPerWindow : undefined,
  orderWindowSeconds: prop.orderWindowSeconds !== undefined ? prop.orderWindowSeconds : undefined,
  dayTradeOnly: prop.dayTradeOnly !== undefined ? prop.dayTradeOnly : undefined,
  riskBudgetPrefs: prop.riskBudgetPrefs !== undefined ? prop.riskBudgetPrefs : undefined,
  signalConsumptionPrefs: prop.signalConsumptionPrefs !== undefined ? prop.signalConsumptionPrefs : undefined,
  executionPrefs: prop.executionPrefs !== undefined ? prop.executionPrefs : undefined,
  positionManagementPrefs: prop.positionManagementPrefs !== undefined ? prop.positionManagementPrefs : undefined,
  portfolioConstructionPrefs: prop.portfolioConstructionPrefs !== undefined ? prop.portfolioConstructionPrefs : undefined,
  macroOverlayEnabled: prop.macroOverlayEnabled !== undefined ? prop.macroOverlayEnabled : undefined,
  sectorOverlayEnabled: prop.sectorOverlayEnabled !== undefined ? prop.sectorOverlayEnabled : undefined,
  volatilityOverlayEnabled: prop.volatilityOverlayEnabled !== undefined ? prop.volatilityOverlayEnabled : undefined,
  liquidityStressOverlayEnabled: prop.liquidityStressOverlayEnabled !== undefined ? prop.liquidityStressOverlayEnabled : undefined,
  blackSwanProtectionEnabled: prop.blackSwanProtectionEnabled !== undefined ? prop.blackSwanProtectionEnabled : undefined,
  drawdownGuardianEnabled: prop.drawdownGuardianEnabled !== undefined ? prop.drawdownGuardianEnabled : undefined,
  correlationSpikeProtectionEnabled: prop.correlationSpikeProtectionEnabled !== undefined ? prop.correlationSpikeProtectionEnabled : undefined,
  newsEventRiskOverlayEnabled: prop.newsEventRiskOverlayEnabled !== undefined ? prop.newsEventRiskOverlayEnabled : undefined,
  exchangeHealthOverlayEnabled: prop.exchangeHealthOverlayEnabled !== undefined ? prop.exchangeHealthOverlayEnabled : undefined,
  dataQualitySentinelEnabled: prop.dataQualitySentinelEnabled !== undefined ? prop.dataQualitySentinelEnabled : undefined,
  overlayResponsePrefs: prop.overlayResponsePrefs !== undefined ? prop.overlayResponsePrefs : undefined,
  miniModelProvider: prop.miniModelProvider !== undefined ? prop.miniModelProvider : undefined,
  miniModelId: prop.miniModelId !== undefined ? prop.miniModelId : undefined,
  normalModelProvider: prop.normalModelProvider !== undefined ? prop.normalModelProvider : undefined,
  normalModelId: prop.normalModelId !== undefined ? prop.normalModelId : undefined,
  advancedModelProvider: prop.advancedModelProvider !== undefined ? prop.advancedModelProvider : undefined,
  advancedModelId: prop.advancedModelId !== undefined ? prop.advancedModelId : undefined,
  modelPrefs: prop.modelPrefs !== undefined ? prop.modelPrefs : undefined,
  auditNotificationPrefs: prop.auditNotificationPrefs !== undefined ? prop.auditNotificationPrefs : undefined,
  escalationPolicyOverrides: prop.escalationPolicyOverrides !== undefined ? prop.escalationPolicyOverrides : undefined,
  currentRiskState: prop.currentRiskState !== undefined ? prop.currentRiskState : undefined,
  currentRiskStateAt: prop.currentRiskStateAt !== undefined ? prop.currentRiskStateAt : undefined,
  lastRiskStateChangedBy: prop.lastRiskStateChangedBy !== undefined ? prop.lastRiskStateChangedBy : undefined,
  lastRiskEscalationEventId: prop.lastRiskEscalationEventId !== undefined ? prop.lastRiskEscalationEventId : undefined,
      })),
          ...(options?.skipDuplicates ? { skipDuplicates: true } : {}),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_TRADINGPOLICY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyTradingPolicy) {
          return response.data.createManyTradingPolicy;
        } else {
          return null;
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
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
          logger.warn("Duplicate key in createManyTradingPolicy (expected during overlapping fetches)", {
            operation: 'createManyTradingPolicy',
            model: 'TradingPolicy',
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in createManyTradingPolicy, retrying...", {
            operation: 'createManyTradingPolicy',
            model: 'TradingPolicy',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database createMany operation failed (transient after retries)", {
            operation: 'createManyTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database createMany operation failed", {
            operation: 'createManyTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single TradingPolicy record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated TradingPolicy or null.
   */
  async update(props: TradingPolicyType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradingPolicyType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

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

        const UPDATE_ONE_TRADINGPOLICY = gql`
          mutation updateOneTradingPolicy($data: TradingPolicyUpdateInput!, $where: TradingPolicyWhereUniqueInput!) {
            updateOneTradingPolicy(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  version: props.version !== undefined ? {
            set: props.version 
           } : undefined,
  lastModifiedBy: props.lastModifiedBy !== undefined ? {
            set: props.lastModifiedBy 
           } : undefined,
  lastModifiedAt: props.lastModifiedAt !== undefined ? {
            set: props.lastModifiedAt 
           } : undefined,
  autonomyMode: props.autonomyMode !== undefined ? {
            set: props.autonomyMode 
           } : undefined,
  realtimeTradingEnabled: props.realtimeTradingEnabled !== undefined ? {
            set: props.realtimeTradingEnabled 
           } : undefined,
  paperTradingOnly: props.paperTradingOnly !== undefined ? {
            set: props.paperTradingOnly 
           } : undefined,
  killSwitchEnabled: props.killSwitchEnabled !== undefined ? {
            set: props.killSwitchEnabled 
           } : undefined,
  autonomyPrefs: props.autonomyPrefs !== undefined ? props.autonomyPrefs : undefined,
  equitiesEnabled: props.equitiesEnabled !== undefined ? {
            set: props.equitiesEnabled 
           } : undefined,
  etfsEnabled: props.etfsEnabled !== undefined ? {
            set: props.etfsEnabled 
           } : undefined,
  cryptoEnabled: props.cryptoEnabled !== undefined ? {
            set: props.cryptoEnabled 
           } : undefined,
  optionsEnabled: props.optionsEnabled !== undefined ? {
            set: props.optionsEnabled 
           } : undefined,
  futuresEnabled: props.futuresEnabled !== undefined ? {
            set: props.futuresEnabled 
           } : undefined,
  forexEnabled: props.forexEnabled !== undefined ? {
            set: props.forexEnabled 
           } : undefined,
  shortingEnabled: props.shortingEnabled !== undefined ? {
            set: props.shortingEnabled 
           } : undefined,
  marginEnabled: props.marginEnabled !== undefined ? {
            set: props.marginEnabled 
           } : undefined,
  fractionalSharesEnabled: props.fractionalSharesEnabled !== undefined ? {
            set: props.fractionalSharesEnabled 
           } : undefined,
  assetUniversePrefs: props.assetUniversePrefs !== undefined ? props.assetUniversePrefs : undefined,
  maxBuyingPowerUtilPct: props.maxBuyingPowerUtilPct !== undefined ? {
            set: props.maxBuyingPowerUtilPct 
           } : undefined,
  cashFloorPct: props.cashFloorPct !== undefined ? {
            set: props.cashFloorPct 
           } : undefined,
  maxGrossExposurePct: props.maxGrossExposurePct !== undefined ? {
            set: props.maxGrossExposurePct 
           } : undefined,
  maxNetExposurePct: props.maxNetExposurePct !== undefined ? {
            set: props.maxNetExposurePct 
           } : undefined,
  maxLeverage: props.maxLeverage !== undefined ? {
            set: props.maxLeverage 
           } : undefined,
  maxSymbolConcentrationPct: props.maxSymbolConcentrationPct !== undefined ? {
            set: props.maxSymbolConcentrationPct 
           } : undefined,
  maxSectorConcentrationPct: props.maxSectorConcentrationPct !== undefined ? {
            set: props.maxSectorConcentrationPct 
           } : undefined,
  maxOpenPositions: props.maxOpenPositions !== undefined ? {
            set: props.maxOpenPositions 
           } : undefined,
  maxOpenOrders: props.maxOpenOrders !== undefined ? {
            set: props.maxOpenOrders 
           } : undefined,
  perTradeEquityAllocationPct: props.perTradeEquityAllocationPct !== undefined ? {
            set: props.perTradeEquityAllocationPct 
           } : undefined,
  perTradeCryptoAllocationPct: props.perTradeCryptoAllocationPct !== undefined ? {
            set: props.perTradeCryptoAllocationPct 
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
  equityWashTradeCooldownMs: props.equityWashTradeCooldownMs !== undefined ? {
            set: props.equityWashTradeCooldownMs 
           } : undefined,
  minIntradayLiquidityShares: props.minIntradayLiquidityShares !== undefined ? {
            set: props.minIntradayLiquidityShares 
           } : undefined,
  maxEntrySpreadBps: props.maxEntrySpreadBps !== undefined ? {
            set: props.maxEntrySpreadBps 
           } : undefined,
  sameSideReentryDelayMs: props.sameSideReentryDelayMs !== undefined ? {
            set: props.sameSideReentryDelayMs 
           } : undefined,
  minAtrPercentage: props.minAtrPercentage !== undefined ? {
            set: props.minAtrPercentage 
           } : undefined,
  maxAtrPercentage: props.maxAtrPercentage !== undefined ? {
            set: props.maxAtrPercentage 
           } : undefined,
  minBookDepthShares: props.minBookDepthShares !== undefined ? {
            set: props.minBookDepthShares 
           } : undefined,
  maxAnomalousSlippageBps: props.maxAnomalousSlippageBps !== undefined ? {
            set: props.maxAnomalousSlippageBps 
           } : undefined,
  intradayTradingWindows: props.intradayTradingWindows !== undefined ? props.intradayTradingWindows : undefined,
  hardPositionExitMinutes: props.hardPositionExitMinutes !== undefined ? {
            set: props.hardPositionExitMinutes 
           } : undefined,
  maxOrdersPerWindow: props.maxOrdersPerWindow !== undefined ? {
            set: props.maxOrdersPerWindow 
           } : undefined,
  orderWindowSeconds: props.orderWindowSeconds !== undefined ? {
            set: props.orderWindowSeconds 
           } : undefined,
  dayTradeOnly: props.dayTradeOnly !== undefined ? {
            set: props.dayTradeOnly 
           } : undefined,
  riskBudgetPrefs: props.riskBudgetPrefs !== undefined ? props.riskBudgetPrefs : undefined,
  signalConsumptionPrefs: props.signalConsumptionPrefs !== undefined ? props.signalConsumptionPrefs : undefined,
  executionPrefs: props.executionPrefs !== undefined ? props.executionPrefs : undefined,
  positionManagementPrefs: props.positionManagementPrefs !== undefined ? props.positionManagementPrefs : undefined,
  portfolioConstructionPrefs: props.portfolioConstructionPrefs !== undefined ? props.portfolioConstructionPrefs : undefined,
  macroOverlayEnabled: props.macroOverlayEnabled !== undefined ? {
            set: props.macroOverlayEnabled 
           } : undefined,
  sectorOverlayEnabled: props.sectorOverlayEnabled !== undefined ? {
            set: props.sectorOverlayEnabled 
           } : undefined,
  volatilityOverlayEnabled: props.volatilityOverlayEnabled !== undefined ? {
            set: props.volatilityOverlayEnabled 
           } : undefined,
  liquidityStressOverlayEnabled: props.liquidityStressOverlayEnabled !== undefined ? {
            set: props.liquidityStressOverlayEnabled 
           } : undefined,
  blackSwanProtectionEnabled: props.blackSwanProtectionEnabled !== undefined ? {
            set: props.blackSwanProtectionEnabled 
           } : undefined,
  drawdownGuardianEnabled: props.drawdownGuardianEnabled !== undefined ? {
            set: props.drawdownGuardianEnabled 
           } : undefined,
  correlationSpikeProtectionEnabled: props.correlationSpikeProtectionEnabled !== undefined ? {
            set: props.correlationSpikeProtectionEnabled 
           } : undefined,
  newsEventRiskOverlayEnabled: props.newsEventRiskOverlayEnabled !== undefined ? {
            set: props.newsEventRiskOverlayEnabled 
           } : undefined,
  exchangeHealthOverlayEnabled: props.exchangeHealthOverlayEnabled !== undefined ? {
            set: props.exchangeHealthOverlayEnabled 
           } : undefined,
  dataQualitySentinelEnabled: props.dataQualitySentinelEnabled !== undefined ? {
            set: props.dataQualitySentinelEnabled 
           } : undefined,
  overlayResponsePrefs: props.overlayResponsePrefs !== undefined ? props.overlayResponsePrefs : undefined,
  miniModelProvider: props.miniModelProvider !== undefined ? {
            set: props.miniModelProvider 
           } : undefined,
  miniModelId: props.miniModelId !== undefined ? {
            set: props.miniModelId 
           } : undefined,
  normalModelProvider: props.normalModelProvider !== undefined ? {
            set: props.normalModelProvider 
           } : undefined,
  normalModelId: props.normalModelId !== undefined ? {
            set: props.normalModelId 
           } : undefined,
  advancedModelProvider: props.advancedModelProvider !== undefined ? {
            set: props.advancedModelProvider 
           } : undefined,
  advancedModelId: props.advancedModelId !== undefined ? {
            set: props.advancedModelId 
           } : undefined,
  modelPrefs: props.modelPrefs !== undefined ? props.modelPrefs : undefined,
  auditNotificationPrefs: props.auditNotificationPrefs !== undefined ? props.auditNotificationPrefs : undefined,
  escalationPolicyOverrides: props.escalationPolicyOverrides !== undefined ? props.escalationPolicyOverrides : undefined,
  currentRiskState: props.currentRiskState !== undefined ? {
            set: props.currentRiskState 
           } : undefined,
  currentRiskStateAt: props.currentRiskStateAt !== undefined ? {
            set: props.currentRiskStateAt 
           } : undefined,
  lastRiskStateChangedBy: props.lastRiskStateChangedBy !== undefined ? {
            set: props.lastRiskStateChangedBy 
           } : undefined,
  lastRiskEscalationEventId: props.lastRiskEscalationEventId !== undefined ? {
            set: props.lastRiskEscalationEventId 
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
    allocation: props.alpacaAccount.allocation ? 
    typeof props.alpacaAccount.allocation === 'object' && Object.keys(props.alpacaAccount.allocation).length === 1 && (Object.keys(props.alpacaAccount.allocation)[0] === 'id' || Object.keys(props.alpacaAccount.allocation)[0] === 'symbol')
? {
    connect: {
      id: props.alpacaAccount.allocation.id
    }
} : { upsert: {
        where: {
          id: props.alpacaAccount.allocation.id !== undefined ? {
              equals: props.alpacaAccount.allocation.id
            } : undefined,
          alpacaAccountId: props.alpacaAccount.allocation.alpacaAccountId !== undefined ? {
              equals: props.alpacaAccount.allocation.alpacaAccountId
            } : undefined,
        },
        update: {
          id: props.alpacaAccount.allocation.id !== undefined ? {
              set: props.alpacaAccount.allocation.id
            } : undefined,
          equities: props.alpacaAccount.allocation.equities !== undefined ? {
              set: props.alpacaAccount.allocation.equities
            } : undefined,
          optionsContracts: props.alpacaAccount.allocation.optionsContracts !== undefined ? {
              set: props.alpacaAccount.allocation.optionsContracts
            } : undefined,
          futures: props.alpacaAccount.allocation.futures !== undefined ? {
              set: props.alpacaAccount.allocation.futures
            } : undefined,
          etfs: props.alpacaAccount.allocation.etfs !== undefined ? {
              set: props.alpacaAccount.allocation.etfs
            } : undefined,
          forex: props.alpacaAccount.allocation.forex !== undefined ? {
              set: props.alpacaAccount.allocation.forex
            } : undefined,
          crypto: props.alpacaAccount.allocation.crypto !== undefined ? {
              set: props.alpacaAccount.allocation.crypto
            } : undefined,
          stocks: props.alpacaAccount.allocation.stocks !== undefined ? {
              set: props.alpacaAccount.allocation.stocks
            } : undefined,
          options: props.alpacaAccount.allocation.options !== undefined ? {
              set: props.alpacaAccount.allocation.options
            } : undefined,
        },
        create: {
          equities: props.alpacaAccount.allocation.equities !== undefined ? props.alpacaAccount.allocation.equities : undefined,
          optionsContracts: props.alpacaAccount.allocation.optionsContracts !== undefined ? props.alpacaAccount.allocation.optionsContracts : undefined,
          futures: props.alpacaAccount.allocation.futures !== undefined ? props.alpacaAccount.allocation.futures : undefined,
          etfs: props.alpacaAccount.allocation.etfs !== undefined ? props.alpacaAccount.allocation.etfs : undefined,
          forex: props.alpacaAccount.allocation.forex !== undefined ? props.alpacaAccount.allocation.forex : undefined,
          crypto: props.alpacaAccount.allocation.crypto !== undefined ? props.alpacaAccount.allocation.crypto : undefined,
          stocks: props.alpacaAccount.allocation.stocks !== undefined ? props.alpacaAccount.allocation.stocks : undefined,
          options: props.alpacaAccount.allocation.options !== undefined ? props.alpacaAccount.allocation.options : undefined,
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
            jurisdiction: props.alpacaAccount.user.customer.jurisdiction !== undefined ? {
                set: props.alpacaAccount.user.customer.jurisdiction
              } : undefined,
            riskProfile: props.alpacaAccount.user.customer.riskProfile !== undefined ? {
                set: props.alpacaAccount.user.customer.riskProfile
              } : undefined,
            amlStatus: props.alpacaAccount.user.customer.amlStatus !== undefined ? {
                set: props.alpacaAccount.user.customer.amlStatus
              } : undefined,
            lastKycUpdate: props.alpacaAccount.user.customer.lastKycUpdate !== undefined ? {
                set: props.alpacaAccount.user.customer.lastKycUpdate
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
            jurisdiction: props.alpacaAccount.user.customer.jurisdiction !== undefined ? props.alpacaAccount.user.customer.jurisdiction : undefined,
            riskProfile: props.alpacaAccount.user.customer.riskProfile !== undefined ? props.alpacaAccount.user.customer.riskProfile : undefined,
            amlStatus: props.alpacaAccount.user.customer.amlStatus !== undefined ? props.alpacaAccount.user.customer.amlStatus : undefined,
            lastKycUpdate: props.alpacaAccount.user.customer.lastKycUpdate !== undefined ? props.alpacaAccount.user.customer.lastKycUpdate : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
      Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 && props.alpacaAccount.user.accounts.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.accounts.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.accounts.map((item) => ({
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
      Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 && props.alpacaAccount.user.sessions.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.sessions.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.sessions.map((item) => ({
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
      Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 && props.alpacaAccount.user.authenticators.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.authenticators.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.authenticators.map((item) => ({
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
      Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 && props.alpacaAccount.user.linkedProviders.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.linkedProviders.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.linkedProviders.map((item) => ({
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
      Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 && props.alpacaAccount.user.accountLinkingRequests.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
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
      Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 && props.alpacaAccount.user.reviewedWaitlistEntries.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
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
            jurisdiction: props.alpacaAccount.user.customer.jurisdiction !== undefined ? props.alpacaAccount.user.customer.jurisdiction : undefined,
            riskProfile: props.alpacaAccount.user.customer.riskProfile !== undefined ? props.alpacaAccount.user.customer.riskProfile : undefined,
            amlStatus: props.alpacaAccount.user.customer.amlStatus !== undefined ? props.alpacaAccount.user.customer.amlStatus : undefined,
            lastKycUpdate: props.alpacaAccount.user.customer.lastKycUpdate !== undefined ? props.alpacaAccount.user.customer.lastKycUpdate : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
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
    Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 && props.alpacaAccount.alerts.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.alpacaAccount.alerts.map((item) => ({
      id: item.id
    }))
} : { upsert: props.alpacaAccount.alerts.map((item) => ({
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
    accountRiskMetrics: props.alpacaAccount.accountRiskMetrics ? 
    typeof props.alpacaAccount.accountRiskMetrics === 'object' && Object.keys(props.alpacaAccount.accountRiskMetrics).length === 1 && (Object.keys(props.alpacaAccount.accountRiskMetrics)[0] === 'id' || Object.keys(props.alpacaAccount.accountRiskMetrics)[0] === 'symbol')
? {
    connect: {
      id: props.alpacaAccount.accountRiskMetrics.id
    }
} : { upsert: {
        where: {
          id: props.alpacaAccount.accountRiskMetrics.id !== undefined ? {
              equals: props.alpacaAccount.accountRiskMetrics.id
            } : undefined,
          alpacaAccountId: props.alpacaAccount.accountRiskMetrics.alpacaAccountId !== undefined ? {
              equals: props.alpacaAccount.accountRiskMetrics.alpacaAccountId
            } : undefined,
        },
        update: {
          id: props.alpacaAccount.accountRiskMetrics.id !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.id
            } : undefined,
          currentRiskState: props.alpacaAccount.accountRiskMetrics.currentRiskState !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.currentRiskState
            } : undefined,
          currentScopeState: props.alpacaAccount.accountRiskMetrics.currentScopeState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentScopeState : undefined,
          riskStateChangedAt: props.alpacaAccount.accountRiskMetrics.riskStateChangedAt !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.riskStateChangedAt
            } : undefined,
          riskStateChangedBy: props.alpacaAccount.accountRiskMetrics.riskStateChangedBy !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.riskStateChangedBy
            } : undefined,
          riskStateChangeReason: props.alpacaAccount.accountRiskMetrics.riskStateChangeReason !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.riskStateChangeReason
            } : undefined,
          accountHighWaterMark: props.alpacaAccount.accountRiskMetrics.accountHighWaterMark !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.accountHighWaterMark
            } : undefined,
          accountHighWaterMarkAt: props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt
            } : undefined,
          currentEquity: props.alpacaAccount.accountRiskMetrics.currentEquity !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.currentEquity
            } : undefined,
          currentDrawdownPct: props.alpacaAccount.accountRiskMetrics.currentDrawdownPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.currentDrawdownPct
            } : undefined,
          intradayDrawdownPct: props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct
            } : undefined,
          maxDrawdownPctLifetime: props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime
            } : undefined,
          dailyPnlAmount: props.alpacaAccount.accountRiskMetrics.dailyPnlAmount !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.dailyPnlAmount
            } : undefined,
          dailyPnlPct: props.alpacaAccount.accountRiskMetrics.dailyPnlPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.dailyPnlPct
            } : undefined,
          weeklyPnlAmount: props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount
            } : undefined,
          weeklyPnlPct: props.alpacaAccount.accountRiskMetrics.weeklyPnlPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.weeklyPnlPct
            } : undefined,
          monthlyPnlAmount: props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount
            } : undefined,
          monthlyPnlPct: props.alpacaAccount.accountRiskMetrics.monthlyPnlPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.monthlyPnlPct
            } : undefined,
          peakToTroughAmount: props.alpacaAccount.accountRiskMetrics.peakToTroughAmount !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.peakToTroughAmount
            } : undefined,
          peakToTroughPct: props.alpacaAccount.accountRiskMetrics.peakToTroughPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.peakToTroughPct
            } : undefined,
          nextRecoveryEligibleAt: props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt
            } : undefined,
          lastSyncedAt: props.alpacaAccount.accountRiskMetrics.lastSyncedAt !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.lastSyncedAt
            } : undefined,
        },
        create: {
          currentRiskState: props.alpacaAccount.accountRiskMetrics.currentRiskState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentRiskState : undefined,
          currentScopeState: props.alpacaAccount.accountRiskMetrics.currentScopeState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentScopeState : undefined,
          riskStateChangedAt: props.alpacaAccount.accountRiskMetrics.riskStateChangedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedAt : undefined,
          riskStateChangedBy: props.alpacaAccount.accountRiskMetrics.riskStateChangedBy !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedBy : undefined,
          riskStateChangeReason: props.alpacaAccount.accountRiskMetrics.riskStateChangeReason !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangeReason : undefined,
          accountHighWaterMark: props.alpacaAccount.accountRiskMetrics.accountHighWaterMark !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMark : undefined,
          accountHighWaterMarkAt: props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt : undefined,
          currentEquity: props.alpacaAccount.accountRiskMetrics.currentEquity !== undefined ? props.alpacaAccount.accountRiskMetrics.currentEquity : undefined,
          currentDrawdownPct: props.alpacaAccount.accountRiskMetrics.currentDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.currentDrawdownPct : undefined,
          intradayDrawdownPct: props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct : undefined,
          maxDrawdownPctLifetime: props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime !== undefined ? props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime : undefined,
          dailyPnlAmount: props.alpacaAccount.accountRiskMetrics.dailyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlAmount : undefined,
          dailyPnlPct: props.alpacaAccount.accountRiskMetrics.dailyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlPct : undefined,
          weeklyPnlAmount: props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount : undefined,
          weeklyPnlPct: props.alpacaAccount.accountRiskMetrics.weeklyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlPct : undefined,
          monthlyPnlAmount: props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount : undefined,
          monthlyPnlPct: props.alpacaAccount.accountRiskMetrics.monthlyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlPct : undefined,
          peakToTroughAmount: props.alpacaAccount.accountRiskMetrics.peakToTroughAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughAmount : undefined,
          peakToTroughPct: props.alpacaAccount.accountRiskMetrics.peakToTroughPct !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughPct : undefined,
          nextRecoveryEligibleAt: props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt !== undefined ? props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt : undefined,
          lastSyncedAt: props.alpacaAccount.accountRiskMetrics.lastSyncedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.lastSyncedAt : undefined,
        },
      }
    } : undefined,
    strategyHealthSnapshots: props.alpacaAccount.strategyHealthSnapshots ? 
    Array.isArray(props.alpacaAccount.strategyHealthSnapshots) && props.alpacaAccount.strategyHealthSnapshots.length > 0 && props.alpacaAccount.strategyHealthSnapshots.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
      id: item.id
    }))
} : { upsert: props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          strategyName: item.strategyName !== undefined ? {
              set: item.strategyName
            } : undefined,
          currentState: item.currentState !== undefined ? {
              set: item.currentState
            } : undefined,
          stateChangedAt: item.stateChangedAt !== undefined ? {
              set: item.stateChangedAt
            } : undefined,
          stateChangedReason: item.stateChangedReason !== undefined ? {
              set: item.stateChangedReason
            } : undefined,
          windowSize: item.windowSize !== undefined ? {
              set: item.windowSize
            } : undefined,
          windowTradeCount: item.windowTradeCount !== undefined ? {
              set: item.windowTradeCount
            } : undefined,
          windowHitRate: item.windowHitRate !== undefined ? {
              set: item.windowHitRate
            } : undefined,
          windowExpectancy: item.windowExpectancy !== undefined ? {
              set: item.windowExpectancy
            } : undefined,
          windowProfitFactor: item.windowProfitFactor !== undefined ? {
              set: item.windowProfitFactor
            } : undefined,
          windowSortino: item.windowSortino !== undefined ? {
              set: item.windowSortino
            } : undefined,
          windowMaxDrawdownPct: item.windowMaxDrawdownPct !== undefined ? {
              set: item.windowMaxDrawdownPct
            } : undefined,
          windowCumulativePnlAmt: item.windowCumulativePnlAmt !== undefined ? {
              set: item.windowCumulativePnlAmt
            } : undefined,
          backtestExpectancy: item.backtestExpectancy !== undefined ? {
              set: item.backtestExpectancy
            } : undefined,
          divergenceZScore: item.divergenceZScore !== undefined ? {
              set: item.divergenceZScore
            } : undefined,
          divergenceAlertActive: item.divergenceAlertActive !== undefined ? {
              set: item.divergenceAlertActive
            } : undefined,
          averageConfidence: item.averageConfidence !== undefined ? {
              set: item.averageConfidence
            } : undefined,
          confidenceTrend: item.confidenceTrend !== undefined ? {
              set: item.confidenceTrend
            } : undefined,
          lastUpdatedAt: item.lastUpdatedAt !== undefined ? {
              set: item.lastUpdatedAt
            } : undefined,
        },
        create: {
          strategyName: item.strategyName !== undefined ? item.strategyName : undefined,
          currentState: item.currentState !== undefined ? item.currentState : undefined,
          stateChangedAt: item.stateChangedAt !== undefined ? item.stateChangedAt : undefined,
          stateChangedReason: item.stateChangedReason !== undefined ? item.stateChangedReason : undefined,
          windowSize: item.windowSize !== undefined ? item.windowSize : undefined,
          windowTradeCount: item.windowTradeCount !== undefined ? item.windowTradeCount : undefined,
          windowHitRate: item.windowHitRate !== undefined ? item.windowHitRate : undefined,
          windowExpectancy: item.windowExpectancy !== undefined ? item.windowExpectancy : undefined,
          windowProfitFactor: item.windowProfitFactor !== undefined ? item.windowProfitFactor : undefined,
          windowSortino: item.windowSortino !== undefined ? item.windowSortino : undefined,
          windowMaxDrawdownPct: item.windowMaxDrawdownPct !== undefined ? item.windowMaxDrawdownPct : undefined,
          windowCumulativePnlAmt: item.windowCumulativePnlAmt !== undefined ? item.windowCumulativePnlAmt : undefined,
          backtestExpectancy: item.backtestExpectancy !== undefined ? item.backtestExpectancy : undefined,
          divergenceZScore: item.divergenceZScore !== undefined ? item.divergenceZScore : undefined,
          divergenceAlertActive: item.divergenceAlertActive !== undefined ? item.divergenceAlertActive : undefined,
          averageConfidence: item.averageConfidence !== undefined ? item.averageConfidence : undefined,
          confidenceTrend: item.confidenceTrend !== undefined ? item.confidenceTrend : undefined,
          lastUpdatedAt: item.lastUpdatedAt !== undefined ? item.lastUpdatedAt : undefined,
        },
      }))
    } : undefined,
    riskEscalationEvents: props.alpacaAccount.riskEscalationEvents ? 
    Array.isArray(props.alpacaAccount.riskEscalationEvents) && props.alpacaAccount.riskEscalationEvents.length > 0 && props.alpacaAccount.riskEscalationEvents.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.alpacaAccount.riskEscalationEvents.map((item) => ({
      id: item.id
    }))
} : { upsert: props.alpacaAccount.riskEscalationEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId
            } : undefined,
          triggeredByPolicyOverlayId: item.triggeredByPolicyOverlayId !== undefined ? {
              equals: item.triggeredByPolicyOverlayId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          scopeKind: item.scopeKind !== undefined ? {
              set: item.scopeKind
            } : undefined,
          scopeValue: item.scopeValue !== undefined ? {
              set: item.scopeValue
            } : undefined,
          fromState: item.fromState !== undefined ? {
              set: item.fromState
            } : undefined,
          toState: item.toState !== undefined ? {
              set: item.toState
            } : undefined,
          reason: item.reason !== undefined ? {
              set: item.reason
            } : undefined,
          severity: item.severity !== undefined ? {
              set: item.severity
            } : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? {
              set: item.triggeringObserver
            } : undefined,
          observedValue: item.observedValue !== undefined ? {
              set: item.observedValue
            } : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? {
              set: item.breachedThreshold
            } : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? {
              set: item.breachedThresholdKey
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              set: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              set: item.triggeringEventId
            } : undefined,
          actor: item.actor !== undefined ? {
              set: item.actor
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              set: item.actorUserId
            } : undefined,
          rationale: item.rationale !== undefined ? {
              set: item.rationale
            } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
      typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && (Object.keys(item.activatedPolicyOverlay)[0] === 'id' || Object.keys(item.activatedPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.activatedPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                equals: item.activatedPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                set: item.activatedPolicyOverlay.id
              } : undefined,
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? {
                set: item.activatedPolicyOverlay.overlayType
              } : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? {
                set: item.activatedPolicyOverlay.source
              } : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? {
                set: item.activatedPolicyOverlay.reason
              } : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? {
                set: item.activatedPolicyOverlay.severity
              } : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? {
                set: item.activatedPolicyOverlay.version
              } : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                set: item.activatedPolicyOverlay.status
              } : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? {
                set: item.activatedPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                set: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                set: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.triggeredByPolicyOverlay ? 
      typeof item.triggeredByPolicyOverlay === 'object' && Object.keys(item.triggeredByPolicyOverlay).length === 1 && (Object.keys(item.triggeredByPolicyOverlay)[0] === 'id' || Object.keys(item.triggeredByPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.triggeredByPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? {
                equals: item.triggeredByPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.triggeredByPolicyOverlay.status
              } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? {
                set: item.triggeredByPolicyOverlay.id
              } : undefined,
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? {
                set: item.triggeredByPolicyOverlay.overlayType
              } : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? {
                set: item.triggeredByPolicyOverlay.source
              } : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? {
                set: item.triggeredByPolicyOverlay.reason
              } : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? {
                set: item.triggeredByPolicyOverlay.severity
              } : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? {
                set: item.triggeredByPolicyOverlay.version
              } : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                set: item.triggeredByPolicyOverlay.status
              } : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? {
                set: item.triggeredByPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? {
                set: item.triggeredByPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.triggeredByPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.triggeredByPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                set: item.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                set: item.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? item.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? item.triggeredByPolicyOverlay.source : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? item.triggeredByPolicyOverlay.reason : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? item.triggeredByPolicyOverlay.severity : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? item.triggeredByPolicyOverlay.version : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? item.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? item.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? item.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? item.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.triggeredByPolicyOverlay ? 
        typeof item.triggeredByPolicyOverlay === 'object' && Object.keys(item.triggeredByPolicyOverlay).length === 1 && Object.keys(item.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? item.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? item.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? item.triggeredByPolicyOverlay.source : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? item.triggeredByPolicyOverlay.reason : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? item.triggeredByPolicyOverlay.severity : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? item.triggeredByPolicyOverlay.version : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? item.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? item.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? item.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? item.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
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
    allocation: props.alpacaAccount.allocation ? 
      typeof props.alpacaAccount.allocation === 'object' && Object.keys(props.alpacaAccount.allocation).length === 1 && Object.keys(props.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.allocation.id !== undefined ? props.alpacaAccount.allocation.id : undefined,
          alpacaAccountId: props.alpacaAccount.allocation.alpacaAccountId !== undefined ? props.alpacaAccount.allocation.alpacaAccountId : undefined,
        },
        create: {
          equities: props.alpacaAccount.allocation.equities !== undefined ? props.alpacaAccount.allocation.equities : undefined,
          optionsContracts: props.alpacaAccount.allocation.optionsContracts !== undefined ? props.alpacaAccount.allocation.optionsContracts : undefined,
          futures: props.alpacaAccount.allocation.futures !== undefined ? props.alpacaAccount.allocation.futures : undefined,
          etfs: props.alpacaAccount.allocation.etfs !== undefined ? props.alpacaAccount.allocation.etfs : undefined,
          forex: props.alpacaAccount.allocation.forex !== undefined ? props.alpacaAccount.allocation.forex : undefined,
          crypto: props.alpacaAccount.allocation.crypto !== undefined ? props.alpacaAccount.allocation.crypto : undefined,
          stocks: props.alpacaAccount.allocation.stocks !== undefined ? props.alpacaAccount.allocation.stocks : undefined,
          options: props.alpacaAccount.allocation.options !== undefined ? props.alpacaAccount.allocation.options : undefined,
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
            jurisdiction: props.alpacaAccount.user.customer.jurisdiction !== undefined ? props.alpacaAccount.user.customer.jurisdiction : undefined,
            riskProfile: props.alpacaAccount.user.customer.riskProfile !== undefined ? props.alpacaAccount.user.customer.riskProfile : undefined,
            amlStatus: props.alpacaAccount.user.customer.amlStatus !== undefined ? props.alpacaAccount.user.customer.amlStatus : undefined,
            lastKycUpdate: props.alpacaAccount.user.customer.lastKycUpdate !== undefined ? props.alpacaAccount.user.customer.lastKycUpdate : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
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
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 &&  props.alpacaAccount.alerts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.alerts.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.alerts.map((item) => ({
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
    accountRiskMetrics: props.alpacaAccount.accountRiskMetrics ? 
      typeof props.alpacaAccount.accountRiskMetrics === 'object' && Object.keys(props.alpacaAccount.accountRiskMetrics).length === 1 && Object.keys(props.alpacaAccount.accountRiskMetrics)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.accountRiskMetrics.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.accountRiskMetrics.id !== undefined ? props.alpacaAccount.accountRiskMetrics.id : undefined,
          alpacaAccountId: props.alpacaAccount.accountRiskMetrics.alpacaAccountId !== undefined ? props.alpacaAccount.accountRiskMetrics.alpacaAccountId : undefined,
        },
        create: {
          currentRiskState: props.alpacaAccount.accountRiskMetrics.currentRiskState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentRiskState : undefined,
          currentScopeState: props.alpacaAccount.accountRiskMetrics.currentScopeState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentScopeState : undefined,
          riskStateChangedAt: props.alpacaAccount.accountRiskMetrics.riskStateChangedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedAt : undefined,
          riskStateChangedBy: props.alpacaAccount.accountRiskMetrics.riskStateChangedBy !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedBy : undefined,
          riskStateChangeReason: props.alpacaAccount.accountRiskMetrics.riskStateChangeReason !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangeReason : undefined,
          accountHighWaterMark: props.alpacaAccount.accountRiskMetrics.accountHighWaterMark !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMark : undefined,
          accountHighWaterMarkAt: props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt : undefined,
          currentEquity: props.alpacaAccount.accountRiskMetrics.currentEquity !== undefined ? props.alpacaAccount.accountRiskMetrics.currentEquity : undefined,
          currentDrawdownPct: props.alpacaAccount.accountRiskMetrics.currentDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.currentDrawdownPct : undefined,
          intradayDrawdownPct: props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct : undefined,
          maxDrawdownPctLifetime: props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime !== undefined ? props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime : undefined,
          dailyPnlAmount: props.alpacaAccount.accountRiskMetrics.dailyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlAmount : undefined,
          dailyPnlPct: props.alpacaAccount.accountRiskMetrics.dailyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlPct : undefined,
          weeklyPnlAmount: props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount : undefined,
          weeklyPnlPct: props.alpacaAccount.accountRiskMetrics.weeklyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlPct : undefined,
          monthlyPnlAmount: props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount : undefined,
          monthlyPnlPct: props.alpacaAccount.accountRiskMetrics.monthlyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlPct : undefined,
          peakToTroughAmount: props.alpacaAccount.accountRiskMetrics.peakToTroughAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughAmount : undefined,
          peakToTroughPct: props.alpacaAccount.accountRiskMetrics.peakToTroughPct !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughPct : undefined,
          nextRecoveryEligibleAt: props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt !== undefined ? props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt : undefined,
          lastSyncedAt: props.alpacaAccount.accountRiskMetrics.lastSyncedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.lastSyncedAt : undefined,
        },
      }
    } : undefined,
    strategyHealthSnapshots: props.alpacaAccount.strategyHealthSnapshots ? 
      Array.isArray(props.alpacaAccount.strategyHealthSnapshots) && props.alpacaAccount.strategyHealthSnapshots.length > 0 &&  props.alpacaAccount.strategyHealthSnapshots.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          strategyName: item.strategyName !== undefined ? item.strategyName : undefined,
          currentState: item.currentState !== undefined ? item.currentState : undefined,
          stateChangedAt: item.stateChangedAt !== undefined ? item.stateChangedAt : undefined,
          stateChangedReason: item.stateChangedReason !== undefined ? item.stateChangedReason : undefined,
          windowSize: item.windowSize !== undefined ? item.windowSize : undefined,
          windowTradeCount: item.windowTradeCount !== undefined ? item.windowTradeCount : undefined,
          windowHitRate: item.windowHitRate !== undefined ? item.windowHitRate : undefined,
          windowExpectancy: item.windowExpectancy !== undefined ? item.windowExpectancy : undefined,
          windowProfitFactor: item.windowProfitFactor !== undefined ? item.windowProfitFactor : undefined,
          windowSortino: item.windowSortino !== undefined ? item.windowSortino : undefined,
          windowMaxDrawdownPct: item.windowMaxDrawdownPct !== undefined ? item.windowMaxDrawdownPct : undefined,
          windowCumulativePnlAmt: item.windowCumulativePnlAmt !== undefined ? item.windowCumulativePnlAmt : undefined,
          backtestExpectancy: item.backtestExpectancy !== undefined ? item.backtestExpectancy : undefined,
          divergenceZScore: item.divergenceZScore !== undefined ? item.divergenceZScore : undefined,
          divergenceAlertActive: item.divergenceAlertActive !== undefined ? item.divergenceAlertActive : undefined,
          averageConfidence: item.averageConfidence !== undefined ? item.averageConfidence : undefined,
          confidenceTrend: item.confidenceTrend !== undefined ? item.confidenceTrend : undefined,
          lastUpdatedAt: item.lastUpdatedAt !== undefined ? item.lastUpdatedAt : undefined,
        },
      }))
    } : undefined,
    riskEscalationEvents: props.alpacaAccount.riskEscalationEvents ? 
      Array.isArray(props.alpacaAccount.riskEscalationEvents) && props.alpacaAccount.riskEscalationEvents.length > 0 &&  props.alpacaAccount.riskEscalationEvents.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.riskEscalationEvents.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.riskEscalationEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId 
             } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId 
             } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.triggeredByPolicyOverlay ? 
        typeof item.triggeredByPolicyOverlay === 'object' && Object.keys(item.triggeredByPolicyOverlay).length === 1 && Object.keys(item.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? item.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? item.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? item.triggeredByPolicyOverlay.source : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? item.triggeredByPolicyOverlay.reason : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? item.triggeredByPolicyOverlay.severity : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? item.triggeredByPolicyOverlay.version : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? item.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? item.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? item.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? item.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  overlays: props.overlays ? 
  Array.isArray(props.overlays) && props.overlays.length > 0 && props.overlays.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.overlays.map((item) => ({
    id: item.id
  }))
} : { upsert: props.overlays.map((item) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        riskEscalationEventId: item.riskEscalationEventId !== undefined ? item.riskEscalationEventId : undefined,
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
    riskEscalationEvent: item.riskEscalationEvent ? 
    typeof item.riskEscalationEvent === 'object' && Object.keys(item.riskEscalationEvent).length === 1 && (Object.keys(item.riskEscalationEvent)[0] === 'id' || Object.keys(item.riskEscalationEvent)[0] === 'symbol')
? {
    connect: {
      id: item.riskEscalationEvent.id
    }
} : { upsert: {
        where: {
          id: item.riskEscalationEvent.id !== undefined ? {
              equals: item.riskEscalationEvent.id
            } : undefined,
          alpacaAccountId: item.riskEscalationEvent.alpacaAccountId !== undefined ? {
              equals: item.riskEscalationEvent.alpacaAccountId
            } : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? {
              equals: item.riskEscalationEvent.correlationId
            } : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? {
              equals: item.riskEscalationEvent.triggeringEventId
            } : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? {
              equals: item.riskEscalationEvent.actorUserId
            } : undefined,
          triggeredByPolicyOverlayId: item.riskEscalationEvent.triggeredByPolicyOverlayId !== undefined ? {
              equals: item.riskEscalationEvent.triggeredByPolicyOverlayId
            } : undefined,
        },
        update: {
          id: item.riskEscalationEvent.id !== undefined ? {
              set: item.riskEscalationEvent.id
            } : undefined,
          scopeKind: item.riskEscalationEvent.scopeKind !== undefined ? {
              set: item.riskEscalationEvent.scopeKind
            } : undefined,
          scopeValue: item.riskEscalationEvent.scopeValue !== undefined ? {
              set: item.riskEscalationEvent.scopeValue
            } : undefined,
          fromState: item.riskEscalationEvent.fromState !== undefined ? {
              set: item.riskEscalationEvent.fromState
            } : undefined,
          toState: item.riskEscalationEvent.toState !== undefined ? {
              set: item.riskEscalationEvent.toState
            } : undefined,
          reason: item.riskEscalationEvent.reason !== undefined ? {
              set: item.riskEscalationEvent.reason
            } : undefined,
          severity: item.riskEscalationEvent.severity !== undefined ? {
              set: item.riskEscalationEvent.severity
            } : undefined,
          triggeringObserver: item.riskEscalationEvent.triggeringObserver !== undefined ? {
              set: item.riskEscalationEvent.triggeringObserver
            } : undefined,
          observedValue: item.riskEscalationEvent.observedValue !== undefined ? {
              set: item.riskEscalationEvent.observedValue
            } : undefined,
          breachedThreshold: item.riskEscalationEvent.breachedThreshold !== undefined ? {
              set: item.riskEscalationEvent.breachedThreshold
            } : undefined,
          breachedThresholdKey: item.riskEscalationEvent.breachedThresholdKey !== undefined ? {
              set: item.riskEscalationEvent.breachedThresholdKey
            } : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? {
              set: item.riskEscalationEvent.correlationId
            } : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? {
              set: item.riskEscalationEvent.triggeringEventId
            } : undefined,
          actor: item.riskEscalationEvent.actor !== undefined ? {
              set: item.riskEscalationEvent.actor
            } : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? {
              set: item.riskEscalationEvent.actorUserId
            } : undefined,
          rationale: item.riskEscalationEvent.rationale !== undefined ? {
              set: item.riskEscalationEvent.rationale
            } : undefined,
      alpacaAccount: item.riskEscalationEvent.alpacaAccount ? 
      typeof item.riskEscalationEvent.alpacaAccount === 'object' && Object.keys(item.riskEscalationEvent.alpacaAccount).length === 1 && (Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'id' || Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.riskEscalationEvent.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.id
              } : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.type
              } : undefined,
            userId: item.riskEscalationEvent.alpacaAccount.userId !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.id
              } : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.type
              } : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.APIKey
              } : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.APISecret
              } : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.marketOpen
              } : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.deletedAt
              } : undefined,
          },
          create: {
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? item.riskEscalationEvent.alpacaAccount.type : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? item.riskEscalationEvent.alpacaAccount.APIKey : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? item.riskEscalationEvent.alpacaAccount.APISecret : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? item.riskEscalationEvent.alpacaAccount.marketOpen : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? item.riskEscalationEvent.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? item.riskEscalationEvent.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? item.riskEscalationEvent.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? item.riskEscalationEvent.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? item.riskEscalationEvent.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.riskEscalationEvent.triggeredByPolicyOverlay ? 
      typeof item.riskEscalationEvent.triggeredByPolicyOverlay === 'object' && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay).length === 1 && (Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'id' || Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.riskEscalationEvent.triggeredByPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.status
              } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.id
              } : undefined,
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType
              } : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.source
              } : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.reason
              } : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.severity
              } : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.version
              } : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.status
              } : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.source : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.reason : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.severity : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.version : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          scopeKind: item.riskEscalationEvent.scopeKind !== undefined ? item.riskEscalationEvent.scopeKind : undefined,
          scopeValue: item.riskEscalationEvent.scopeValue !== undefined ? item.riskEscalationEvent.scopeValue : undefined,
          fromState: item.riskEscalationEvent.fromState !== undefined ? item.riskEscalationEvent.fromState : undefined,
          toState: item.riskEscalationEvent.toState !== undefined ? item.riskEscalationEvent.toState : undefined,
          reason: item.riskEscalationEvent.reason !== undefined ? item.riskEscalationEvent.reason : undefined,
          severity: item.riskEscalationEvent.severity !== undefined ? item.riskEscalationEvent.severity : undefined,
          triggeringObserver: item.riskEscalationEvent.triggeringObserver !== undefined ? item.riskEscalationEvent.triggeringObserver : undefined,
          observedValue: item.riskEscalationEvent.observedValue !== undefined ? item.riskEscalationEvent.observedValue : undefined,
          breachedThreshold: item.riskEscalationEvent.breachedThreshold !== undefined ? item.riskEscalationEvent.breachedThreshold : undefined,
          breachedThresholdKey: item.riskEscalationEvent.breachedThresholdKey !== undefined ? item.riskEscalationEvent.breachedThresholdKey : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? item.riskEscalationEvent.correlationId : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? item.riskEscalationEvent.triggeringEventId : undefined,
          actor: item.riskEscalationEvent.actor !== undefined ? item.riskEscalationEvent.actor : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? item.riskEscalationEvent.actorUserId : undefined,
          rationale: item.riskEscalationEvent.rationale !== undefined ? item.riskEscalationEvent.rationale : undefined,
      alpacaAccount: item.riskEscalationEvent.alpacaAccount ? 
        typeof item.riskEscalationEvent.alpacaAccount === 'object' && Object.keys(item.riskEscalationEvent.alpacaAccount).length === 1 && Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? item.riskEscalationEvent.alpacaAccount.id : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.type 
               } : undefined,
            userId: item.riskEscalationEvent.alpacaAccount.userId !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? item.riskEscalationEvent.alpacaAccount.type : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? item.riskEscalationEvent.alpacaAccount.APIKey : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? item.riskEscalationEvent.alpacaAccount.APISecret : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? item.riskEscalationEvent.alpacaAccount.marketOpen : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? item.riskEscalationEvent.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? item.riskEscalationEvent.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? item.riskEscalationEvent.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? item.riskEscalationEvent.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? item.riskEscalationEvent.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.riskEscalationEvent.triggeredByPolicyOverlay ? 
        typeof item.riskEscalationEvent.triggeredByPolicyOverlay === 'object' && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay).length === 1 && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.source : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.reason : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.severity : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.version : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    triggeredRiskEvents: item.triggeredRiskEvents ? 
    Array.isArray(item.triggeredRiskEvents) && item.triggeredRiskEvents.length > 0 && item.triggeredRiskEvents.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.triggeredRiskEvents.map((item) => ({
      id: item.id
    }))
} : { upsert: item.triggeredRiskEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId
            } : undefined,
          triggeredByPolicyOverlayId: item.triggeredByPolicyOverlayId !== undefined ? {
              equals: item.triggeredByPolicyOverlayId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          scopeKind: item.scopeKind !== undefined ? {
              set: item.scopeKind
            } : undefined,
          scopeValue: item.scopeValue !== undefined ? {
              set: item.scopeValue
            } : undefined,
          fromState: item.fromState !== undefined ? {
              set: item.fromState
            } : undefined,
          toState: item.toState !== undefined ? {
              set: item.toState
            } : undefined,
          reason: item.reason !== undefined ? {
              set: item.reason
            } : undefined,
          severity: item.severity !== undefined ? {
              set: item.severity
            } : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? {
              set: item.triggeringObserver
            } : undefined,
          observedValue: item.observedValue !== undefined ? {
              set: item.observedValue
            } : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? {
              set: item.breachedThreshold
            } : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? {
              set: item.breachedThresholdKey
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              set: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              set: item.triggeringEventId
            } : undefined,
          actor: item.actor !== undefined ? {
              set: item.actor
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              set: item.actorUserId
            } : undefined,
          rationale: item.rationale !== undefined ? {
              set: item.rationale
            } : undefined,
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && (Object.keys(item.alpacaAccount)[0] === 'id' || Object.keys(item.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id
              } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                equals: item.alpacaAccount.type
              } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id
              } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type
              } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey
              } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret
              } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen
              } : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? {
                set: item.alpacaAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? {
                set: item.alpacaAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? {
                set: item.alpacaAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.alpacaAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.alpacaAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.alpacaAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.alpacaAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.alpacaAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.alpacaAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? {
                set: item.alpacaAccount.deletedAt
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? item.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? item.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? item.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
      typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && (Object.keys(item.activatedPolicyOverlay)[0] === 'id' || Object.keys(item.activatedPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.activatedPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                equals: item.activatedPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                set: item.activatedPolicyOverlay.id
              } : undefined,
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? {
                set: item.activatedPolicyOverlay.overlayType
              } : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? {
                set: item.activatedPolicyOverlay.source
              } : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? {
                set: item.activatedPolicyOverlay.reason
              } : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? {
                set: item.activatedPolicyOverlay.severity
              } : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? {
                set: item.activatedPolicyOverlay.version
              } : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                set: item.activatedPolicyOverlay.status
              } : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? {
                set: item.activatedPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                set: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                set: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                equals: item.alpacaAccount.type 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? item.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? item.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? item.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
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
    riskEscalationEvent: item.riskEscalationEvent ? 
      typeof item.riskEscalationEvent === 'object' && Object.keys(item.riskEscalationEvent).length === 1 && Object.keys(item.riskEscalationEvent)[0] === 'id'
    ? { connect: {
          id: item.riskEscalationEvent.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.riskEscalationEvent.id !== undefined ? item.riskEscalationEvent.id : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? {
              equals: item.riskEscalationEvent.correlationId 
             } : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? {
              equals: item.riskEscalationEvent.triggeringEventId 
             } : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? {
              equals: item.riskEscalationEvent.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.riskEscalationEvent.scopeKind !== undefined ? item.riskEscalationEvent.scopeKind : undefined,
          scopeValue: item.riskEscalationEvent.scopeValue !== undefined ? item.riskEscalationEvent.scopeValue : undefined,
          fromState: item.riskEscalationEvent.fromState !== undefined ? item.riskEscalationEvent.fromState : undefined,
          toState: item.riskEscalationEvent.toState !== undefined ? item.riskEscalationEvent.toState : undefined,
          reason: item.riskEscalationEvent.reason !== undefined ? item.riskEscalationEvent.reason : undefined,
          severity: item.riskEscalationEvent.severity !== undefined ? item.riskEscalationEvent.severity : undefined,
          triggeringObserver: item.riskEscalationEvent.triggeringObserver !== undefined ? item.riskEscalationEvent.triggeringObserver : undefined,
          observedValue: item.riskEscalationEvent.observedValue !== undefined ? item.riskEscalationEvent.observedValue : undefined,
          breachedThreshold: item.riskEscalationEvent.breachedThreshold !== undefined ? item.riskEscalationEvent.breachedThreshold : undefined,
          breachedThresholdKey: item.riskEscalationEvent.breachedThresholdKey !== undefined ? item.riskEscalationEvent.breachedThresholdKey : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? item.riskEscalationEvent.correlationId : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? item.riskEscalationEvent.triggeringEventId : undefined,
          actor: item.riskEscalationEvent.actor !== undefined ? item.riskEscalationEvent.actor : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? item.riskEscalationEvent.actorUserId : undefined,
          rationale: item.riskEscalationEvent.rationale !== undefined ? item.riskEscalationEvent.rationale : undefined,
      alpacaAccount: item.riskEscalationEvent.alpacaAccount ? 
        typeof item.riskEscalationEvent.alpacaAccount === 'object' && Object.keys(item.riskEscalationEvent.alpacaAccount).length === 1 && Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? item.riskEscalationEvent.alpacaAccount.id : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.type 
               } : undefined,
            userId: item.riskEscalationEvent.alpacaAccount.userId !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? item.riskEscalationEvent.alpacaAccount.type : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? item.riskEscalationEvent.alpacaAccount.APIKey : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? item.riskEscalationEvent.alpacaAccount.APISecret : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? item.riskEscalationEvent.alpacaAccount.marketOpen : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? item.riskEscalationEvent.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? item.riskEscalationEvent.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? item.riskEscalationEvent.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? item.riskEscalationEvent.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? item.riskEscalationEvent.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.riskEscalationEvent.triggeredByPolicyOverlay ? 
        typeof item.riskEscalationEvent.triggeredByPolicyOverlay === 'object' && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay).length === 1 && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.source : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.reason : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.severity : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.version : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    triggeredRiskEvents: item.triggeredRiskEvents ? 
      Array.isArray(item.triggeredRiskEvents) && item.triggeredRiskEvents.length > 0 &&  item.triggeredRiskEvents.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.triggeredRiskEvents.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.triggeredRiskEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId 
             } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId 
             } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                equals: item.alpacaAccount.type 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? item.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? item.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? item.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_TRADINGPOLICY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneTradingPolicy) {
          return response.data.updateOneTradingPolicy;
        } else {
          return null as unknown as TradingPolicyType;
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
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
          logger.error("Non-retryable constraint violation in updateOneTradingPolicy", {
            operation: 'updateOneTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            recordId: props.id,
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in updateOneTradingPolicy, retrying...", {
            operation: 'updateOneTradingPolicy',
            model: 'TradingPolicy',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database update operation failed (transient after retries)", {
            operation: 'updateOneTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            recordId: props.id,
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database update operation failed", {
            operation: 'updateOneTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            recordId: props.id,
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single TradingPolicy record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated TradingPolicy or null.
   */
  async upsert(props: TradingPolicyType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradingPolicyType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

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

        const UPSERT_ONE_TRADINGPOLICY = gql`
          mutation upsertOneTradingPolicy($where: TradingPolicyWhereUniqueInput!, $create: TradingPolicyCreateInput!, $update: TradingPolicyUpdateInput!) {
            upsertOneTradingPolicy(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
  miniModelId: props.miniModelId !== undefined ? {
    equals: props.miniModelId 
  } : undefined,
  normalModelId: props.normalModelId !== undefined ? {
    equals: props.normalModelId 
  } : undefined,
  advancedModelId: props.advancedModelId !== undefined ? {
    equals: props.advancedModelId 
  } : undefined,
      },
          create: {
        version: props.version !== undefined ? props.version : undefined,
  lastModifiedBy: props.lastModifiedBy !== undefined ? props.lastModifiedBy : undefined,
  lastModifiedAt: props.lastModifiedAt !== undefined ? props.lastModifiedAt : undefined,
  autonomyMode: props.autonomyMode !== undefined ? props.autonomyMode : undefined,
  realtimeTradingEnabled: props.realtimeTradingEnabled !== undefined ? props.realtimeTradingEnabled : undefined,
  paperTradingOnly: props.paperTradingOnly !== undefined ? props.paperTradingOnly : undefined,
  killSwitchEnabled: props.killSwitchEnabled !== undefined ? props.killSwitchEnabled : undefined,
  autonomyPrefs: props.autonomyPrefs !== undefined ? props.autonomyPrefs : undefined,
  equitiesEnabled: props.equitiesEnabled !== undefined ? props.equitiesEnabled : undefined,
  etfsEnabled: props.etfsEnabled !== undefined ? props.etfsEnabled : undefined,
  cryptoEnabled: props.cryptoEnabled !== undefined ? props.cryptoEnabled : undefined,
  optionsEnabled: props.optionsEnabled !== undefined ? props.optionsEnabled : undefined,
  futuresEnabled: props.futuresEnabled !== undefined ? props.futuresEnabled : undefined,
  forexEnabled: props.forexEnabled !== undefined ? props.forexEnabled : undefined,
  shortingEnabled: props.shortingEnabled !== undefined ? props.shortingEnabled : undefined,
  marginEnabled: props.marginEnabled !== undefined ? props.marginEnabled : undefined,
  fractionalSharesEnabled: props.fractionalSharesEnabled !== undefined ? props.fractionalSharesEnabled : undefined,
  assetUniversePrefs: props.assetUniversePrefs !== undefined ? props.assetUniversePrefs : undefined,
  maxBuyingPowerUtilPct: props.maxBuyingPowerUtilPct !== undefined ? props.maxBuyingPowerUtilPct : undefined,
  cashFloorPct: props.cashFloorPct !== undefined ? props.cashFloorPct : undefined,
  maxGrossExposurePct: props.maxGrossExposurePct !== undefined ? props.maxGrossExposurePct : undefined,
  maxNetExposurePct: props.maxNetExposurePct !== undefined ? props.maxNetExposurePct : undefined,
  maxLeverage: props.maxLeverage !== undefined ? props.maxLeverage : undefined,
  maxSymbolConcentrationPct: props.maxSymbolConcentrationPct !== undefined ? props.maxSymbolConcentrationPct : undefined,
  maxSectorConcentrationPct: props.maxSectorConcentrationPct !== undefined ? props.maxSectorConcentrationPct : undefined,
  maxOpenPositions: props.maxOpenPositions !== undefined ? props.maxOpenPositions : undefined,
  maxOpenOrders: props.maxOpenOrders !== undefined ? props.maxOpenOrders : undefined,
  perTradeEquityAllocationPct: props.perTradeEquityAllocationPct !== undefined ? props.perTradeEquityAllocationPct : undefined,
  perTradeCryptoAllocationPct: props.perTradeCryptoAllocationPct !== undefined ? props.perTradeCryptoAllocationPct : undefined,
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
  equityWashTradeCooldownMs: props.equityWashTradeCooldownMs !== undefined ? props.equityWashTradeCooldownMs : undefined,
  minIntradayLiquidityShares: props.minIntradayLiquidityShares !== undefined ? props.minIntradayLiquidityShares : undefined,
  maxEntrySpreadBps: props.maxEntrySpreadBps !== undefined ? props.maxEntrySpreadBps : undefined,
  sameSideReentryDelayMs: props.sameSideReentryDelayMs !== undefined ? props.sameSideReentryDelayMs : undefined,
  minAtrPercentage: props.minAtrPercentage !== undefined ? props.minAtrPercentage : undefined,
  maxAtrPercentage: props.maxAtrPercentage !== undefined ? props.maxAtrPercentage : undefined,
  minBookDepthShares: props.minBookDepthShares !== undefined ? props.minBookDepthShares : undefined,
  maxAnomalousSlippageBps: props.maxAnomalousSlippageBps !== undefined ? props.maxAnomalousSlippageBps : undefined,
  intradayTradingWindows: props.intradayTradingWindows !== undefined ? props.intradayTradingWindows : undefined,
  hardPositionExitMinutes: props.hardPositionExitMinutes !== undefined ? props.hardPositionExitMinutes : undefined,
  maxOrdersPerWindow: props.maxOrdersPerWindow !== undefined ? props.maxOrdersPerWindow : undefined,
  orderWindowSeconds: props.orderWindowSeconds !== undefined ? props.orderWindowSeconds : undefined,
  dayTradeOnly: props.dayTradeOnly !== undefined ? props.dayTradeOnly : undefined,
  riskBudgetPrefs: props.riskBudgetPrefs !== undefined ? props.riskBudgetPrefs : undefined,
  signalConsumptionPrefs: props.signalConsumptionPrefs !== undefined ? props.signalConsumptionPrefs : undefined,
  executionPrefs: props.executionPrefs !== undefined ? props.executionPrefs : undefined,
  positionManagementPrefs: props.positionManagementPrefs !== undefined ? props.positionManagementPrefs : undefined,
  portfolioConstructionPrefs: props.portfolioConstructionPrefs !== undefined ? props.portfolioConstructionPrefs : undefined,
  macroOverlayEnabled: props.macroOverlayEnabled !== undefined ? props.macroOverlayEnabled : undefined,
  sectorOverlayEnabled: props.sectorOverlayEnabled !== undefined ? props.sectorOverlayEnabled : undefined,
  volatilityOverlayEnabled: props.volatilityOverlayEnabled !== undefined ? props.volatilityOverlayEnabled : undefined,
  liquidityStressOverlayEnabled: props.liquidityStressOverlayEnabled !== undefined ? props.liquidityStressOverlayEnabled : undefined,
  blackSwanProtectionEnabled: props.blackSwanProtectionEnabled !== undefined ? props.blackSwanProtectionEnabled : undefined,
  drawdownGuardianEnabled: props.drawdownGuardianEnabled !== undefined ? props.drawdownGuardianEnabled : undefined,
  correlationSpikeProtectionEnabled: props.correlationSpikeProtectionEnabled !== undefined ? props.correlationSpikeProtectionEnabled : undefined,
  newsEventRiskOverlayEnabled: props.newsEventRiskOverlayEnabled !== undefined ? props.newsEventRiskOverlayEnabled : undefined,
  exchangeHealthOverlayEnabled: props.exchangeHealthOverlayEnabled !== undefined ? props.exchangeHealthOverlayEnabled : undefined,
  dataQualitySentinelEnabled: props.dataQualitySentinelEnabled !== undefined ? props.dataQualitySentinelEnabled : undefined,
  overlayResponsePrefs: props.overlayResponsePrefs !== undefined ? props.overlayResponsePrefs : undefined,
  miniModelProvider: props.miniModelProvider !== undefined ? props.miniModelProvider : undefined,
  miniModelId: props.miniModelId !== undefined ? props.miniModelId : undefined,
  normalModelProvider: props.normalModelProvider !== undefined ? props.normalModelProvider : undefined,
  normalModelId: props.normalModelId !== undefined ? props.normalModelId : undefined,
  advancedModelProvider: props.advancedModelProvider !== undefined ? props.advancedModelProvider : undefined,
  advancedModelId: props.advancedModelId !== undefined ? props.advancedModelId : undefined,
  modelPrefs: props.modelPrefs !== undefined ? props.modelPrefs : undefined,
  auditNotificationPrefs: props.auditNotificationPrefs !== undefined ? props.auditNotificationPrefs : undefined,
  escalationPolicyOverrides: props.escalationPolicyOverrides !== undefined ? props.escalationPolicyOverrides : undefined,
  currentRiskState: props.currentRiskState !== undefined ? props.currentRiskState : undefined,
  currentRiskStateAt: props.currentRiskStateAt !== undefined ? props.currentRiskStateAt : undefined,
  lastRiskStateChangedBy: props.lastRiskStateChangedBy !== undefined ? props.lastRiskStateChangedBy : undefined,
  lastRiskEscalationEventId: props.lastRiskEscalationEventId !== undefined ? props.lastRiskEscalationEventId : undefined,
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
    allocation: props.alpacaAccount.allocation ? 
      typeof props.alpacaAccount.allocation === 'object' && Object.keys(props.alpacaAccount.allocation).length === 1 && Object.keys(props.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.allocation.id !== undefined ? props.alpacaAccount.allocation.id : undefined,
          alpacaAccountId: props.alpacaAccount.allocation.alpacaAccountId !== undefined ? props.alpacaAccount.allocation.alpacaAccountId : undefined,
        },
        create: {
          equities: props.alpacaAccount.allocation.equities !== undefined ? props.alpacaAccount.allocation.equities : undefined,
          optionsContracts: props.alpacaAccount.allocation.optionsContracts !== undefined ? props.alpacaAccount.allocation.optionsContracts : undefined,
          futures: props.alpacaAccount.allocation.futures !== undefined ? props.alpacaAccount.allocation.futures : undefined,
          etfs: props.alpacaAccount.allocation.etfs !== undefined ? props.alpacaAccount.allocation.etfs : undefined,
          forex: props.alpacaAccount.allocation.forex !== undefined ? props.alpacaAccount.allocation.forex : undefined,
          crypto: props.alpacaAccount.allocation.crypto !== undefined ? props.alpacaAccount.allocation.crypto : undefined,
          stocks: props.alpacaAccount.allocation.stocks !== undefined ? props.alpacaAccount.allocation.stocks : undefined,
          options: props.alpacaAccount.allocation.options !== undefined ? props.alpacaAccount.allocation.options : undefined,
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
            jurisdiction: props.alpacaAccount.user.customer.jurisdiction !== undefined ? props.alpacaAccount.user.customer.jurisdiction : undefined,
            riskProfile: props.alpacaAccount.user.customer.riskProfile !== undefined ? props.alpacaAccount.user.customer.riskProfile : undefined,
            amlStatus: props.alpacaAccount.user.customer.amlStatus !== undefined ? props.alpacaAccount.user.customer.amlStatus : undefined,
            lastKycUpdate: props.alpacaAccount.user.customer.lastKycUpdate !== undefined ? props.alpacaAccount.user.customer.lastKycUpdate : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
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
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 &&  props.alpacaAccount.alerts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.alerts.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.alerts.map((item) => ({
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
    accountRiskMetrics: props.alpacaAccount.accountRiskMetrics ? 
      typeof props.alpacaAccount.accountRiskMetrics === 'object' && Object.keys(props.alpacaAccount.accountRiskMetrics).length === 1 && Object.keys(props.alpacaAccount.accountRiskMetrics)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.accountRiskMetrics.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.accountRiskMetrics.id !== undefined ? props.alpacaAccount.accountRiskMetrics.id : undefined,
          alpacaAccountId: props.alpacaAccount.accountRiskMetrics.alpacaAccountId !== undefined ? props.alpacaAccount.accountRiskMetrics.alpacaAccountId : undefined,
        },
        create: {
          currentRiskState: props.alpacaAccount.accountRiskMetrics.currentRiskState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentRiskState : undefined,
          currentScopeState: props.alpacaAccount.accountRiskMetrics.currentScopeState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentScopeState : undefined,
          riskStateChangedAt: props.alpacaAccount.accountRiskMetrics.riskStateChangedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedAt : undefined,
          riskStateChangedBy: props.alpacaAccount.accountRiskMetrics.riskStateChangedBy !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedBy : undefined,
          riskStateChangeReason: props.alpacaAccount.accountRiskMetrics.riskStateChangeReason !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangeReason : undefined,
          accountHighWaterMark: props.alpacaAccount.accountRiskMetrics.accountHighWaterMark !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMark : undefined,
          accountHighWaterMarkAt: props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt : undefined,
          currentEquity: props.alpacaAccount.accountRiskMetrics.currentEquity !== undefined ? props.alpacaAccount.accountRiskMetrics.currentEquity : undefined,
          currentDrawdownPct: props.alpacaAccount.accountRiskMetrics.currentDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.currentDrawdownPct : undefined,
          intradayDrawdownPct: props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct : undefined,
          maxDrawdownPctLifetime: props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime !== undefined ? props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime : undefined,
          dailyPnlAmount: props.alpacaAccount.accountRiskMetrics.dailyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlAmount : undefined,
          dailyPnlPct: props.alpacaAccount.accountRiskMetrics.dailyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlPct : undefined,
          weeklyPnlAmount: props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount : undefined,
          weeklyPnlPct: props.alpacaAccount.accountRiskMetrics.weeklyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlPct : undefined,
          monthlyPnlAmount: props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount : undefined,
          monthlyPnlPct: props.alpacaAccount.accountRiskMetrics.monthlyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlPct : undefined,
          peakToTroughAmount: props.alpacaAccount.accountRiskMetrics.peakToTroughAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughAmount : undefined,
          peakToTroughPct: props.alpacaAccount.accountRiskMetrics.peakToTroughPct !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughPct : undefined,
          nextRecoveryEligibleAt: props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt !== undefined ? props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt : undefined,
          lastSyncedAt: props.alpacaAccount.accountRiskMetrics.lastSyncedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.lastSyncedAt : undefined,
        },
      }
    } : undefined,
    strategyHealthSnapshots: props.alpacaAccount.strategyHealthSnapshots ? 
      Array.isArray(props.alpacaAccount.strategyHealthSnapshots) && props.alpacaAccount.strategyHealthSnapshots.length > 0 &&  props.alpacaAccount.strategyHealthSnapshots.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          strategyName: item.strategyName !== undefined ? item.strategyName : undefined,
          currentState: item.currentState !== undefined ? item.currentState : undefined,
          stateChangedAt: item.stateChangedAt !== undefined ? item.stateChangedAt : undefined,
          stateChangedReason: item.stateChangedReason !== undefined ? item.stateChangedReason : undefined,
          windowSize: item.windowSize !== undefined ? item.windowSize : undefined,
          windowTradeCount: item.windowTradeCount !== undefined ? item.windowTradeCount : undefined,
          windowHitRate: item.windowHitRate !== undefined ? item.windowHitRate : undefined,
          windowExpectancy: item.windowExpectancy !== undefined ? item.windowExpectancy : undefined,
          windowProfitFactor: item.windowProfitFactor !== undefined ? item.windowProfitFactor : undefined,
          windowSortino: item.windowSortino !== undefined ? item.windowSortino : undefined,
          windowMaxDrawdownPct: item.windowMaxDrawdownPct !== undefined ? item.windowMaxDrawdownPct : undefined,
          windowCumulativePnlAmt: item.windowCumulativePnlAmt !== undefined ? item.windowCumulativePnlAmt : undefined,
          backtestExpectancy: item.backtestExpectancy !== undefined ? item.backtestExpectancy : undefined,
          divergenceZScore: item.divergenceZScore !== undefined ? item.divergenceZScore : undefined,
          divergenceAlertActive: item.divergenceAlertActive !== undefined ? item.divergenceAlertActive : undefined,
          averageConfidence: item.averageConfidence !== undefined ? item.averageConfidence : undefined,
          confidenceTrend: item.confidenceTrend !== undefined ? item.confidenceTrend : undefined,
          lastUpdatedAt: item.lastUpdatedAt !== undefined ? item.lastUpdatedAt : undefined,
        },
      }))
    } : undefined,
    riskEscalationEvents: props.alpacaAccount.riskEscalationEvents ? 
      Array.isArray(props.alpacaAccount.riskEscalationEvents) && props.alpacaAccount.riskEscalationEvents.length > 0 &&  props.alpacaAccount.riskEscalationEvents.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.riskEscalationEvents.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.riskEscalationEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId 
             } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId 
             } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.triggeredByPolicyOverlay ? 
        typeof item.triggeredByPolicyOverlay === 'object' && Object.keys(item.triggeredByPolicyOverlay).length === 1 && Object.keys(item.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? item.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? item.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? item.triggeredByPolicyOverlay.source : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? item.triggeredByPolicyOverlay.reason : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? item.triggeredByPolicyOverlay.severity : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? item.triggeredByPolicyOverlay.version : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? item.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? item.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? item.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? item.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  overlays: props.overlays ? 
    Array.isArray(props.overlays) && props.overlays.length > 0 &&  props.overlays.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.overlays.map((item) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.overlays.map((item) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        riskEscalationEventId: item.riskEscalationEventId !== undefined ? item.riskEscalationEventId : undefined,
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
    riskEscalationEvent: item.riskEscalationEvent ? 
      typeof item.riskEscalationEvent === 'object' && Object.keys(item.riskEscalationEvent).length === 1 && Object.keys(item.riskEscalationEvent)[0] === 'id'
    ? { connect: {
          id: item.riskEscalationEvent.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.riskEscalationEvent.id !== undefined ? item.riskEscalationEvent.id : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? {
              equals: item.riskEscalationEvent.correlationId 
             } : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? {
              equals: item.riskEscalationEvent.triggeringEventId 
             } : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? {
              equals: item.riskEscalationEvent.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.riskEscalationEvent.scopeKind !== undefined ? item.riskEscalationEvent.scopeKind : undefined,
          scopeValue: item.riskEscalationEvent.scopeValue !== undefined ? item.riskEscalationEvent.scopeValue : undefined,
          fromState: item.riskEscalationEvent.fromState !== undefined ? item.riskEscalationEvent.fromState : undefined,
          toState: item.riskEscalationEvent.toState !== undefined ? item.riskEscalationEvent.toState : undefined,
          reason: item.riskEscalationEvent.reason !== undefined ? item.riskEscalationEvent.reason : undefined,
          severity: item.riskEscalationEvent.severity !== undefined ? item.riskEscalationEvent.severity : undefined,
          triggeringObserver: item.riskEscalationEvent.triggeringObserver !== undefined ? item.riskEscalationEvent.triggeringObserver : undefined,
          observedValue: item.riskEscalationEvent.observedValue !== undefined ? item.riskEscalationEvent.observedValue : undefined,
          breachedThreshold: item.riskEscalationEvent.breachedThreshold !== undefined ? item.riskEscalationEvent.breachedThreshold : undefined,
          breachedThresholdKey: item.riskEscalationEvent.breachedThresholdKey !== undefined ? item.riskEscalationEvent.breachedThresholdKey : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? item.riskEscalationEvent.correlationId : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? item.riskEscalationEvent.triggeringEventId : undefined,
          actor: item.riskEscalationEvent.actor !== undefined ? item.riskEscalationEvent.actor : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? item.riskEscalationEvent.actorUserId : undefined,
          rationale: item.riskEscalationEvent.rationale !== undefined ? item.riskEscalationEvent.rationale : undefined,
      alpacaAccount: item.riskEscalationEvent.alpacaAccount ? 
        typeof item.riskEscalationEvent.alpacaAccount === 'object' && Object.keys(item.riskEscalationEvent.alpacaAccount).length === 1 && Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? item.riskEscalationEvent.alpacaAccount.id : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.type 
               } : undefined,
            userId: item.riskEscalationEvent.alpacaAccount.userId !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? item.riskEscalationEvent.alpacaAccount.type : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? item.riskEscalationEvent.alpacaAccount.APIKey : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? item.riskEscalationEvent.alpacaAccount.APISecret : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? item.riskEscalationEvent.alpacaAccount.marketOpen : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? item.riskEscalationEvent.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? item.riskEscalationEvent.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? item.riskEscalationEvent.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? item.riskEscalationEvent.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? item.riskEscalationEvent.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.riskEscalationEvent.triggeredByPolicyOverlay ? 
        typeof item.riskEscalationEvent.triggeredByPolicyOverlay === 'object' && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay).length === 1 && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.source : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.reason : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.severity : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.version : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    triggeredRiskEvents: item.triggeredRiskEvents ? 
      Array.isArray(item.triggeredRiskEvents) && item.triggeredRiskEvents.length > 0 &&  item.triggeredRiskEvents.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.triggeredRiskEvents.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.triggeredRiskEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId 
             } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId 
             } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                equals: item.alpacaAccount.type 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? item.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? item.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? item.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
      },
          update: {
      version: props.version !== undefined ? {
            set: props.version 
           } : undefined,
  lastModifiedBy: props.lastModifiedBy !== undefined ? {
            set: props.lastModifiedBy 
           } : undefined,
  lastModifiedAt: props.lastModifiedAt !== undefined ? {
            set: props.lastModifiedAt 
           } : undefined,
  autonomyMode: props.autonomyMode !== undefined ? {
            set: props.autonomyMode 
           } : undefined,
  realtimeTradingEnabled: props.realtimeTradingEnabled !== undefined ? {
            set: props.realtimeTradingEnabled 
           } : undefined,
  paperTradingOnly: props.paperTradingOnly !== undefined ? {
            set: props.paperTradingOnly 
           } : undefined,
  killSwitchEnabled: props.killSwitchEnabled !== undefined ? {
            set: props.killSwitchEnabled 
           } : undefined,
  autonomyPrefs: props.autonomyPrefs !== undefined ? props.autonomyPrefs : undefined,
  equitiesEnabled: props.equitiesEnabled !== undefined ? {
            set: props.equitiesEnabled 
           } : undefined,
  etfsEnabled: props.etfsEnabled !== undefined ? {
            set: props.etfsEnabled 
           } : undefined,
  cryptoEnabled: props.cryptoEnabled !== undefined ? {
            set: props.cryptoEnabled 
           } : undefined,
  optionsEnabled: props.optionsEnabled !== undefined ? {
            set: props.optionsEnabled 
           } : undefined,
  futuresEnabled: props.futuresEnabled !== undefined ? {
            set: props.futuresEnabled 
           } : undefined,
  forexEnabled: props.forexEnabled !== undefined ? {
            set: props.forexEnabled 
           } : undefined,
  shortingEnabled: props.shortingEnabled !== undefined ? {
            set: props.shortingEnabled 
           } : undefined,
  marginEnabled: props.marginEnabled !== undefined ? {
            set: props.marginEnabled 
           } : undefined,
  fractionalSharesEnabled: props.fractionalSharesEnabled !== undefined ? {
            set: props.fractionalSharesEnabled 
           } : undefined,
  assetUniversePrefs: props.assetUniversePrefs !== undefined ? props.assetUniversePrefs : undefined,
  maxBuyingPowerUtilPct: props.maxBuyingPowerUtilPct !== undefined ? {
            set: props.maxBuyingPowerUtilPct 
           } : undefined,
  cashFloorPct: props.cashFloorPct !== undefined ? {
            set: props.cashFloorPct 
           } : undefined,
  maxGrossExposurePct: props.maxGrossExposurePct !== undefined ? {
            set: props.maxGrossExposurePct 
           } : undefined,
  maxNetExposurePct: props.maxNetExposurePct !== undefined ? {
            set: props.maxNetExposurePct 
           } : undefined,
  maxLeverage: props.maxLeverage !== undefined ? {
            set: props.maxLeverage 
           } : undefined,
  maxSymbolConcentrationPct: props.maxSymbolConcentrationPct !== undefined ? {
            set: props.maxSymbolConcentrationPct 
           } : undefined,
  maxSectorConcentrationPct: props.maxSectorConcentrationPct !== undefined ? {
            set: props.maxSectorConcentrationPct 
           } : undefined,
  maxOpenPositions: props.maxOpenPositions !== undefined ? {
            set: props.maxOpenPositions 
           } : undefined,
  maxOpenOrders: props.maxOpenOrders !== undefined ? {
            set: props.maxOpenOrders 
           } : undefined,
  perTradeEquityAllocationPct: props.perTradeEquityAllocationPct !== undefined ? {
            set: props.perTradeEquityAllocationPct 
           } : undefined,
  perTradeCryptoAllocationPct: props.perTradeCryptoAllocationPct !== undefined ? {
            set: props.perTradeCryptoAllocationPct 
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
  equityWashTradeCooldownMs: props.equityWashTradeCooldownMs !== undefined ? {
            set: props.equityWashTradeCooldownMs 
           } : undefined,
  minIntradayLiquidityShares: props.minIntradayLiquidityShares !== undefined ? {
            set: props.minIntradayLiquidityShares 
           } : undefined,
  maxEntrySpreadBps: props.maxEntrySpreadBps !== undefined ? {
            set: props.maxEntrySpreadBps 
           } : undefined,
  sameSideReentryDelayMs: props.sameSideReentryDelayMs !== undefined ? {
            set: props.sameSideReentryDelayMs 
           } : undefined,
  minAtrPercentage: props.minAtrPercentage !== undefined ? {
            set: props.minAtrPercentage 
           } : undefined,
  maxAtrPercentage: props.maxAtrPercentage !== undefined ? {
            set: props.maxAtrPercentage 
           } : undefined,
  minBookDepthShares: props.minBookDepthShares !== undefined ? {
            set: props.minBookDepthShares 
           } : undefined,
  maxAnomalousSlippageBps: props.maxAnomalousSlippageBps !== undefined ? {
            set: props.maxAnomalousSlippageBps 
           } : undefined,
  intradayTradingWindows: props.intradayTradingWindows !== undefined ? props.intradayTradingWindows : undefined,
  hardPositionExitMinutes: props.hardPositionExitMinutes !== undefined ? {
            set: props.hardPositionExitMinutes 
           } : undefined,
  maxOrdersPerWindow: props.maxOrdersPerWindow !== undefined ? {
            set: props.maxOrdersPerWindow 
           } : undefined,
  orderWindowSeconds: props.orderWindowSeconds !== undefined ? {
            set: props.orderWindowSeconds 
           } : undefined,
  dayTradeOnly: props.dayTradeOnly !== undefined ? {
            set: props.dayTradeOnly 
           } : undefined,
  riskBudgetPrefs: props.riskBudgetPrefs !== undefined ? props.riskBudgetPrefs : undefined,
  signalConsumptionPrefs: props.signalConsumptionPrefs !== undefined ? props.signalConsumptionPrefs : undefined,
  executionPrefs: props.executionPrefs !== undefined ? props.executionPrefs : undefined,
  positionManagementPrefs: props.positionManagementPrefs !== undefined ? props.positionManagementPrefs : undefined,
  portfolioConstructionPrefs: props.portfolioConstructionPrefs !== undefined ? props.portfolioConstructionPrefs : undefined,
  macroOverlayEnabled: props.macroOverlayEnabled !== undefined ? {
            set: props.macroOverlayEnabled 
           } : undefined,
  sectorOverlayEnabled: props.sectorOverlayEnabled !== undefined ? {
            set: props.sectorOverlayEnabled 
           } : undefined,
  volatilityOverlayEnabled: props.volatilityOverlayEnabled !== undefined ? {
            set: props.volatilityOverlayEnabled 
           } : undefined,
  liquidityStressOverlayEnabled: props.liquidityStressOverlayEnabled !== undefined ? {
            set: props.liquidityStressOverlayEnabled 
           } : undefined,
  blackSwanProtectionEnabled: props.blackSwanProtectionEnabled !== undefined ? {
            set: props.blackSwanProtectionEnabled 
           } : undefined,
  drawdownGuardianEnabled: props.drawdownGuardianEnabled !== undefined ? {
            set: props.drawdownGuardianEnabled 
           } : undefined,
  correlationSpikeProtectionEnabled: props.correlationSpikeProtectionEnabled !== undefined ? {
            set: props.correlationSpikeProtectionEnabled 
           } : undefined,
  newsEventRiskOverlayEnabled: props.newsEventRiskOverlayEnabled !== undefined ? {
            set: props.newsEventRiskOverlayEnabled 
           } : undefined,
  exchangeHealthOverlayEnabled: props.exchangeHealthOverlayEnabled !== undefined ? {
            set: props.exchangeHealthOverlayEnabled 
           } : undefined,
  dataQualitySentinelEnabled: props.dataQualitySentinelEnabled !== undefined ? {
            set: props.dataQualitySentinelEnabled 
           } : undefined,
  overlayResponsePrefs: props.overlayResponsePrefs !== undefined ? props.overlayResponsePrefs : undefined,
  miniModelProvider: props.miniModelProvider !== undefined ? {
            set: props.miniModelProvider 
           } : undefined,
  miniModelId: props.miniModelId !== undefined ? {
            set: props.miniModelId 
           } : undefined,
  normalModelProvider: props.normalModelProvider !== undefined ? {
            set: props.normalModelProvider 
           } : undefined,
  normalModelId: props.normalModelId !== undefined ? {
            set: props.normalModelId 
           } : undefined,
  advancedModelProvider: props.advancedModelProvider !== undefined ? {
            set: props.advancedModelProvider 
           } : undefined,
  advancedModelId: props.advancedModelId !== undefined ? {
            set: props.advancedModelId 
           } : undefined,
  modelPrefs: props.modelPrefs !== undefined ? props.modelPrefs : undefined,
  auditNotificationPrefs: props.auditNotificationPrefs !== undefined ? props.auditNotificationPrefs : undefined,
  escalationPolicyOverrides: props.escalationPolicyOverrides !== undefined ? props.escalationPolicyOverrides : undefined,
  currentRiskState: props.currentRiskState !== undefined ? {
            set: props.currentRiskState 
           } : undefined,
  currentRiskStateAt: props.currentRiskStateAt !== undefined ? {
            set: props.currentRiskStateAt 
           } : undefined,
  lastRiskStateChangedBy: props.lastRiskStateChangedBy !== undefined ? {
            set: props.lastRiskStateChangedBy 
           } : undefined,
  lastRiskEscalationEventId: props.lastRiskEscalationEventId !== undefined ? {
            set: props.lastRiskEscalationEventId 
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
    allocation: props.alpacaAccount.allocation ? 
    typeof props.alpacaAccount.allocation === 'object' && Object.keys(props.alpacaAccount.allocation).length === 1 && (Object.keys(props.alpacaAccount.allocation)[0] === 'id' || Object.keys(props.alpacaAccount.allocation)[0] === 'symbol')
? {
    connect: {
      id: props.alpacaAccount.allocation.id
    }
} : { upsert: {
        where: {
          id: props.alpacaAccount.allocation.id !== undefined ? {
              equals: props.alpacaAccount.allocation.id
            } : undefined,
          alpacaAccountId: props.alpacaAccount.allocation.alpacaAccountId !== undefined ? {
              equals: props.alpacaAccount.allocation.alpacaAccountId
            } : undefined,
        },
        update: {
          id: props.alpacaAccount.allocation.id !== undefined ? {
              set: props.alpacaAccount.allocation.id
            } : undefined,
          equities: props.alpacaAccount.allocation.equities !== undefined ? {
              set: props.alpacaAccount.allocation.equities
            } : undefined,
          optionsContracts: props.alpacaAccount.allocation.optionsContracts !== undefined ? {
              set: props.alpacaAccount.allocation.optionsContracts
            } : undefined,
          futures: props.alpacaAccount.allocation.futures !== undefined ? {
              set: props.alpacaAccount.allocation.futures
            } : undefined,
          etfs: props.alpacaAccount.allocation.etfs !== undefined ? {
              set: props.alpacaAccount.allocation.etfs
            } : undefined,
          forex: props.alpacaAccount.allocation.forex !== undefined ? {
              set: props.alpacaAccount.allocation.forex
            } : undefined,
          crypto: props.alpacaAccount.allocation.crypto !== undefined ? {
              set: props.alpacaAccount.allocation.crypto
            } : undefined,
          stocks: props.alpacaAccount.allocation.stocks !== undefined ? {
              set: props.alpacaAccount.allocation.stocks
            } : undefined,
          options: props.alpacaAccount.allocation.options !== undefined ? {
              set: props.alpacaAccount.allocation.options
            } : undefined,
        },
        create: {
          equities: props.alpacaAccount.allocation.equities !== undefined ? props.alpacaAccount.allocation.equities : undefined,
          optionsContracts: props.alpacaAccount.allocation.optionsContracts !== undefined ? props.alpacaAccount.allocation.optionsContracts : undefined,
          futures: props.alpacaAccount.allocation.futures !== undefined ? props.alpacaAccount.allocation.futures : undefined,
          etfs: props.alpacaAccount.allocation.etfs !== undefined ? props.alpacaAccount.allocation.etfs : undefined,
          forex: props.alpacaAccount.allocation.forex !== undefined ? props.alpacaAccount.allocation.forex : undefined,
          crypto: props.alpacaAccount.allocation.crypto !== undefined ? props.alpacaAccount.allocation.crypto : undefined,
          stocks: props.alpacaAccount.allocation.stocks !== undefined ? props.alpacaAccount.allocation.stocks : undefined,
          options: props.alpacaAccount.allocation.options !== undefined ? props.alpacaAccount.allocation.options : undefined,
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
            jurisdiction: props.alpacaAccount.user.customer.jurisdiction !== undefined ? {
                set: props.alpacaAccount.user.customer.jurisdiction
              } : undefined,
            riskProfile: props.alpacaAccount.user.customer.riskProfile !== undefined ? {
                set: props.alpacaAccount.user.customer.riskProfile
              } : undefined,
            amlStatus: props.alpacaAccount.user.customer.amlStatus !== undefined ? {
                set: props.alpacaAccount.user.customer.amlStatus
              } : undefined,
            lastKycUpdate: props.alpacaAccount.user.customer.lastKycUpdate !== undefined ? {
                set: props.alpacaAccount.user.customer.lastKycUpdate
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
            jurisdiction: props.alpacaAccount.user.customer.jurisdiction !== undefined ? props.alpacaAccount.user.customer.jurisdiction : undefined,
            riskProfile: props.alpacaAccount.user.customer.riskProfile !== undefined ? props.alpacaAccount.user.customer.riskProfile : undefined,
            amlStatus: props.alpacaAccount.user.customer.amlStatus !== undefined ? props.alpacaAccount.user.customer.amlStatus : undefined,
            lastKycUpdate: props.alpacaAccount.user.customer.lastKycUpdate !== undefined ? props.alpacaAccount.user.customer.lastKycUpdate : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
      Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 && props.alpacaAccount.user.accounts.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.accounts.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.accounts.map((item) => ({
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
      Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 && props.alpacaAccount.user.sessions.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.sessions.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.sessions.map((item) => ({
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
      Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 && props.alpacaAccount.user.authenticators.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.authenticators.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.authenticators.map((item) => ({
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
      Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 && props.alpacaAccount.user.linkedProviders.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.linkedProviders.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.linkedProviders.map((item) => ({
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
      Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 && props.alpacaAccount.user.accountLinkingRequests.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
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
      Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 && props.alpacaAccount.user.reviewedWaitlistEntries.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
        id: item.id
      }))
} : { upsert: props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
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
            jurisdiction: props.alpacaAccount.user.customer.jurisdiction !== undefined ? props.alpacaAccount.user.customer.jurisdiction : undefined,
            riskProfile: props.alpacaAccount.user.customer.riskProfile !== undefined ? props.alpacaAccount.user.customer.riskProfile : undefined,
            amlStatus: props.alpacaAccount.user.customer.amlStatus !== undefined ? props.alpacaAccount.user.customer.amlStatus : undefined,
            lastKycUpdate: props.alpacaAccount.user.customer.lastKycUpdate !== undefined ? props.alpacaAccount.user.customer.lastKycUpdate : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
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
    Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 && props.alpacaAccount.alerts.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.alpacaAccount.alerts.map((item) => ({
      id: item.id
    }))
} : { upsert: props.alpacaAccount.alerts.map((item) => ({
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
    accountRiskMetrics: props.alpacaAccount.accountRiskMetrics ? 
    typeof props.alpacaAccount.accountRiskMetrics === 'object' && Object.keys(props.alpacaAccount.accountRiskMetrics).length === 1 && (Object.keys(props.alpacaAccount.accountRiskMetrics)[0] === 'id' || Object.keys(props.alpacaAccount.accountRiskMetrics)[0] === 'symbol')
? {
    connect: {
      id: props.alpacaAccount.accountRiskMetrics.id
    }
} : { upsert: {
        where: {
          id: props.alpacaAccount.accountRiskMetrics.id !== undefined ? {
              equals: props.alpacaAccount.accountRiskMetrics.id
            } : undefined,
          alpacaAccountId: props.alpacaAccount.accountRiskMetrics.alpacaAccountId !== undefined ? {
              equals: props.alpacaAccount.accountRiskMetrics.alpacaAccountId
            } : undefined,
        },
        update: {
          id: props.alpacaAccount.accountRiskMetrics.id !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.id
            } : undefined,
          currentRiskState: props.alpacaAccount.accountRiskMetrics.currentRiskState !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.currentRiskState
            } : undefined,
          currentScopeState: props.alpacaAccount.accountRiskMetrics.currentScopeState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentScopeState : undefined,
          riskStateChangedAt: props.alpacaAccount.accountRiskMetrics.riskStateChangedAt !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.riskStateChangedAt
            } : undefined,
          riskStateChangedBy: props.alpacaAccount.accountRiskMetrics.riskStateChangedBy !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.riskStateChangedBy
            } : undefined,
          riskStateChangeReason: props.alpacaAccount.accountRiskMetrics.riskStateChangeReason !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.riskStateChangeReason
            } : undefined,
          accountHighWaterMark: props.alpacaAccount.accountRiskMetrics.accountHighWaterMark !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.accountHighWaterMark
            } : undefined,
          accountHighWaterMarkAt: props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt
            } : undefined,
          currentEquity: props.alpacaAccount.accountRiskMetrics.currentEquity !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.currentEquity
            } : undefined,
          currentDrawdownPct: props.alpacaAccount.accountRiskMetrics.currentDrawdownPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.currentDrawdownPct
            } : undefined,
          intradayDrawdownPct: props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct
            } : undefined,
          maxDrawdownPctLifetime: props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime
            } : undefined,
          dailyPnlAmount: props.alpacaAccount.accountRiskMetrics.dailyPnlAmount !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.dailyPnlAmount
            } : undefined,
          dailyPnlPct: props.alpacaAccount.accountRiskMetrics.dailyPnlPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.dailyPnlPct
            } : undefined,
          weeklyPnlAmount: props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount
            } : undefined,
          weeklyPnlPct: props.alpacaAccount.accountRiskMetrics.weeklyPnlPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.weeklyPnlPct
            } : undefined,
          monthlyPnlAmount: props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount
            } : undefined,
          monthlyPnlPct: props.alpacaAccount.accountRiskMetrics.monthlyPnlPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.monthlyPnlPct
            } : undefined,
          peakToTroughAmount: props.alpacaAccount.accountRiskMetrics.peakToTroughAmount !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.peakToTroughAmount
            } : undefined,
          peakToTroughPct: props.alpacaAccount.accountRiskMetrics.peakToTroughPct !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.peakToTroughPct
            } : undefined,
          nextRecoveryEligibleAt: props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt
            } : undefined,
          lastSyncedAt: props.alpacaAccount.accountRiskMetrics.lastSyncedAt !== undefined ? {
              set: props.alpacaAccount.accountRiskMetrics.lastSyncedAt
            } : undefined,
        },
        create: {
          currentRiskState: props.alpacaAccount.accountRiskMetrics.currentRiskState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentRiskState : undefined,
          currentScopeState: props.alpacaAccount.accountRiskMetrics.currentScopeState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentScopeState : undefined,
          riskStateChangedAt: props.alpacaAccount.accountRiskMetrics.riskStateChangedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedAt : undefined,
          riskStateChangedBy: props.alpacaAccount.accountRiskMetrics.riskStateChangedBy !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedBy : undefined,
          riskStateChangeReason: props.alpacaAccount.accountRiskMetrics.riskStateChangeReason !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangeReason : undefined,
          accountHighWaterMark: props.alpacaAccount.accountRiskMetrics.accountHighWaterMark !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMark : undefined,
          accountHighWaterMarkAt: props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt : undefined,
          currentEquity: props.alpacaAccount.accountRiskMetrics.currentEquity !== undefined ? props.alpacaAccount.accountRiskMetrics.currentEquity : undefined,
          currentDrawdownPct: props.alpacaAccount.accountRiskMetrics.currentDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.currentDrawdownPct : undefined,
          intradayDrawdownPct: props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct : undefined,
          maxDrawdownPctLifetime: props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime !== undefined ? props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime : undefined,
          dailyPnlAmount: props.alpacaAccount.accountRiskMetrics.dailyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlAmount : undefined,
          dailyPnlPct: props.alpacaAccount.accountRiskMetrics.dailyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlPct : undefined,
          weeklyPnlAmount: props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount : undefined,
          weeklyPnlPct: props.alpacaAccount.accountRiskMetrics.weeklyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlPct : undefined,
          monthlyPnlAmount: props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount : undefined,
          monthlyPnlPct: props.alpacaAccount.accountRiskMetrics.monthlyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlPct : undefined,
          peakToTroughAmount: props.alpacaAccount.accountRiskMetrics.peakToTroughAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughAmount : undefined,
          peakToTroughPct: props.alpacaAccount.accountRiskMetrics.peakToTroughPct !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughPct : undefined,
          nextRecoveryEligibleAt: props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt !== undefined ? props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt : undefined,
          lastSyncedAt: props.alpacaAccount.accountRiskMetrics.lastSyncedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.lastSyncedAt : undefined,
        },
      }
    } : undefined,
    strategyHealthSnapshots: props.alpacaAccount.strategyHealthSnapshots ? 
    Array.isArray(props.alpacaAccount.strategyHealthSnapshots) && props.alpacaAccount.strategyHealthSnapshots.length > 0 && props.alpacaAccount.strategyHealthSnapshots.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
      id: item.id
    }))
} : { upsert: props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          strategyName: item.strategyName !== undefined ? {
              set: item.strategyName
            } : undefined,
          currentState: item.currentState !== undefined ? {
              set: item.currentState
            } : undefined,
          stateChangedAt: item.stateChangedAt !== undefined ? {
              set: item.stateChangedAt
            } : undefined,
          stateChangedReason: item.stateChangedReason !== undefined ? {
              set: item.stateChangedReason
            } : undefined,
          windowSize: item.windowSize !== undefined ? {
              set: item.windowSize
            } : undefined,
          windowTradeCount: item.windowTradeCount !== undefined ? {
              set: item.windowTradeCount
            } : undefined,
          windowHitRate: item.windowHitRate !== undefined ? {
              set: item.windowHitRate
            } : undefined,
          windowExpectancy: item.windowExpectancy !== undefined ? {
              set: item.windowExpectancy
            } : undefined,
          windowProfitFactor: item.windowProfitFactor !== undefined ? {
              set: item.windowProfitFactor
            } : undefined,
          windowSortino: item.windowSortino !== undefined ? {
              set: item.windowSortino
            } : undefined,
          windowMaxDrawdownPct: item.windowMaxDrawdownPct !== undefined ? {
              set: item.windowMaxDrawdownPct
            } : undefined,
          windowCumulativePnlAmt: item.windowCumulativePnlAmt !== undefined ? {
              set: item.windowCumulativePnlAmt
            } : undefined,
          backtestExpectancy: item.backtestExpectancy !== undefined ? {
              set: item.backtestExpectancy
            } : undefined,
          divergenceZScore: item.divergenceZScore !== undefined ? {
              set: item.divergenceZScore
            } : undefined,
          divergenceAlertActive: item.divergenceAlertActive !== undefined ? {
              set: item.divergenceAlertActive
            } : undefined,
          averageConfidence: item.averageConfidence !== undefined ? {
              set: item.averageConfidence
            } : undefined,
          confidenceTrend: item.confidenceTrend !== undefined ? {
              set: item.confidenceTrend
            } : undefined,
          lastUpdatedAt: item.lastUpdatedAt !== undefined ? {
              set: item.lastUpdatedAt
            } : undefined,
        },
        create: {
          strategyName: item.strategyName !== undefined ? item.strategyName : undefined,
          currentState: item.currentState !== undefined ? item.currentState : undefined,
          stateChangedAt: item.stateChangedAt !== undefined ? item.stateChangedAt : undefined,
          stateChangedReason: item.stateChangedReason !== undefined ? item.stateChangedReason : undefined,
          windowSize: item.windowSize !== undefined ? item.windowSize : undefined,
          windowTradeCount: item.windowTradeCount !== undefined ? item.windowTradeCount : undefined,
          windowHitRate: item.windowHitRate !== undefined ? item.windowHitRate : undefined,
          windowExpectancy: item.windowExpectancy !== undefined ? item.windowExpectancy : undefined,
          windowProfitFactor: item.windowProfitFactor !== undefined ? item.windowProfitFactor : undefined,
          windowSortino: item.windowSortino !== undefined ? item.windowSortino : undefined,
          windowMaxDrawdownPct: item.windowMaxDrawdownPct !== undefined ? item.windowMaxDrawdownPct : undefined,
          windowCumulativePnlAmt: item.windowCumulativePnlAmt !== undefined ? item.windowCumulativePnlAmt : undefined,
          backtestExpectancy: item.backtestExpectancy !== undefined ? item.backtestExpectancy : undefined,
          divergenceZScore: item.divergenceZScore !== undefined ? item.divergenceZScore : undefined,
          divergenceAlertActive: item.divergenceAlertActive !== undefined ? item.divergenceAlertActive : undefined,
          averageConfidence: item.averageConfidence !== undefined ? item.averageConfidence : undefined,
          confidenceTrend: item.confidenceTrend !== undefined ? item.confidenceTrend : undefined,
          lastUpdatedAt: item.lastUpdatedAt !== undefined ? item.lastUpdatedAt : undefined,
        },
      }))
    } : undefined,
    riskEscalationEvents: props.alpacaAccount.riskEscalationEvents ? 
    Array.isArray(props.alpacaAccount.riskEscalationEvents) && props.alpacaAccount.riskEscalationEvents.length > 0 && props.alpacaAccount.riskEscalationEvents.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.alpacaAccount.riskEscalationEvents.map((item) => ({
      id: item.id
    }))
} : { upsert: props.alpacaAccount.riskEscalationEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId
            } : undefined,
          triggeredByPolicyOverlayId: item.triggeredByPolicyOverlayId !== undefined ? {
              equals: item.triggeredByPolicyOverlayId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          scopeKind: item.scopeKind !== undefined ? {
              set: item.scopeKind
            } : undefined,
          scopeValue: item.scopeValue !== undefined ? {
              set: item.scopeValue
            } : undefined,
          fromState: item.fromState !== undefined ? {
              set: item.fromState
            } : undefined,
          toState: item.toState !== undefined ? {
              set: item.toState
            } : undefined,
          reason: item.reason !== undefined ? {
              set: item.reason
            } : undefined,
          severity: item.severity !== undefined ? {
              set: item.severity
            } : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? {
              set: item.triggeringObserver
            } : undefined,
          observedValue: item.observedValue !== undefined ? {
              set: item.observedValue
            } : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? {
              set: item.breachedThreshold
            } : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? {
              set: item.breachedThresholdKey
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              set: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              set: item.triggeringEventId
            } : undefined,
          actor: item.actor !== undefined ? {
              set: item.actor
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              set: item.actorUserId
            } : undefined,
          rationale: item.rationale !== undefined ? {
              set: item.rationale
            } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
      typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && (Object.keys(item.activatedPolicyOverlay)[0] === 'id' || Object.keys(item.activatedPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.activatedPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                equals: item.activatedPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                set: item.activatedPolicyOverlay.id
              } : undefined,
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? {
                set: item.activatedPolicyOverlay.overlayType
              } : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? {
                set: item.activatedPolicyOverlay.source
              } : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? {
                set: item.activatedPolicyOverlay.reason
              } : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? {
                set: item.activatedPolicyOverlay.severity
              } : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? {
                set: item.activatedPolicyOverlay.version
              } : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                set: item.activatedPolicyOverlay.status
              } : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? {
                set: item.activatedPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                set: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                set: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.triggeredByPolicyOverlay ? 
      typeof item.triggeredByPolicyOverlay === 'object' && Object.keys(item.triggeredByPolicyOverlay).length === 1 && (Object.keys(item.triggeredByPolicyOverlay)[0] === 'id' || Object.keys(item.triggeredByPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.triggeredByPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? {
                equals: item.triggeredByPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.triggeredByPolicyOverlay.status
              } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? {
                set: item.triggeredByPolicyOverlay.id
              } : undefined,
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? {
                set: item.triggeredByPolicyOverlay.overlayType
              } : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? {
                set: item.triggeredByPolicyOverlay.source
              } : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? {
                set: item.triggeredByPolicyOverlay.reason
              } : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? {
                set: item.triggeredByPolicyOverlay.severity
              } : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? {
                set: item.triggeredByPolicyOverlay.version
              } : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                set: item.triggeredByPolicyOverlay.status
              } : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? {
                set: item.triggeredByPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? {
                set: item.triggeredByPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.triggeredByPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.triggeredByPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                set: item.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                set: item.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? item.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? item.triggeredByPolicyOverlay.source : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? item.triggeredByPolicyOverlay.reason : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? item.triggeredByPolicyOverlay.severity : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? item.triggeredByPolicyOverlay.version : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? item.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? item.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? item.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? item.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.triggeredByPolicyOverlay ? 
        typeof item.triggeredByPolicyOverlay === 'object' && Object.keys(item.triggeredByPolicyOverlay).length === 1 && Object.keys(item.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? item.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? item.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? item.triggeredByPolicyOverlay.source : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? item.triggeredByPolicyOverlay.reason : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? item.triggeredByPolicyOverlay.severity : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? item.triggeredByPolicyOverlay.version : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? item.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? item.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? item.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? item.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
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
    allocation: props.alpacaAccount.allocation ? 
      typeof props.alpacaAccount.allocation === 'object' && Object.keys(props.alpacaAccount.allocation).length === 1 && Object.keys(props.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.allocation.id !== undefined ? props.alpacaAccount.allocation.id : undefined,
          alpacaAccountId: props.alpacaAccount.allocation.alpacaAccountId !== undefined ? props.alpacaAccount.allocation.alpacaAccountId : undefined,
        },
        create: {
          equities: props.alpacaAccount.allocation.equities !== undefined ? props.alpacaAccount.allocation.equities : undefined,
          optionsContracts: props.alpacaAccount.allocation.optionsContracts !== undefined ? props.alpacaAccount.allocation.optionsContracts : undefined,
          futures: props.alpacaAccount.allocation.futures !== undefined ? props.alpacaAccount.allocation.futures : undefined,
          etfs: props.alpacaAccount.allocation.etfs !== undefined ? props.alpacaAccount.allocation.etfs : undefined,
          forex: props.alpacaAccount.allocation.forex !== undefined ? props.alpacaAccount.allocation.forex : undefined,
          crypto: props.alpacaAccount.allocation.crypto !== undefined ? props.alpacaAccount.allocation.crypto : undefined,
          stocks: props.alpacaAccount.allocation.stocks !== undefined ? props.alpacaAccount.allocation.stocks : undefined,
          options: props.alpacaAccount.allocation.options !== undefined ? props.alpacaAccount.allocation.options : undefined,
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
            jurisdiction: props.alpacaAccount.user.customer.jurisdiction !== undefined ? props.alpacaAccount.user.customer.jurisdiction : undefined,
            riskProfile: props.alpacaAccount.user.customer.riskProfile !== undefined ? props.alpacaAccount.user.customer.riskProfile : undefined,
            amlStatus: props.alpacaAccount.user.customer.amlStatus !== undefined ? props.alpacaAccount.user.customer.amlStatus : undefined,
            lastKycUpdate: props.alpacaAccount.user.customer.lastKycUpdate !== undefined ? props.alpacaAccount.user.customer.lastKycUpdate : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.linkedProviders) && props.alpacaAccount.user.linkedProviders.length > 0 &&  props.alpacaAccount.user.linkedProviders.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.linkedProviders.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.linkedProviders.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.accountLinkingRequests) && props.alpacaAccount.user.accountLinkingRequests.length > 0 &&  props.alpacaAccount.user.accountLinkingRequests.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accountLinkingRequests.map((item) => ({
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
        Array.isArray(props.alpacaAccount.user.reviewedWaitlistEntries) && props.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  props.alpacaAccount.user.reviewedWaitlistEntries.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
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
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 &&  props.alpacaAccount.alerts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.alerts.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.alerts.map((item) => ({
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
    accountRiskMetrics: props.alpacaAccount.accountRiskMetrics ? 
      typeof props.alpacaAccount.accountRiskMetrics === 'object' && Object.keys(props.alpacaAccount.accountRiskMetrics).length === 1 && Object.keys(props.alpacaAccount.accountRiskMetrics)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.accountRiskMetrics.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.accountRiskMetrics.id !== undefined ? props.alpacaAccount.accountRiskMetrics.id : undefined,
          alpacaAccountId: props.alpacaAccount.accountRiskMetrics.alpacaAccountId !== undefined ? props.alpacaAccount.accountRiskMetrics.alpacaAccountId : undefined,
        },
        create: {
          currentRiskState: props.alpacaAccount.accountRiskMetrics.currentRiskState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentRiskState : undefined,
          currentScopeState: props.alpacaAccount.accountRiskMetrics.currentScopeState !== undefined ? props.alpacaAccount.accountRiskMetrics.currentScopeState : undefined,
          riskStateChangedAt: props.alpacaAccount.accountRiskMetrics.riskStateChangedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedAt : undefined,
          riskStateChangedBy: props.alpacaAccount.accountRiskMetrics.riskStateChangedBy !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangedBy : undefined,
          riskStateChangeReason: props.alpacaAccount.accountRiskMetrics.riskStateChangeReason !== undefined ? props.alpacaAccount.accountRiskMetrics.riskStateChangeReason : undefined,
          accountHighWaterMark: props.alpacaAccount.accountRiskMetrics.accountHighWaterMark !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMark : undefined,
          accountHighWaterMarkAt: props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt !== undefined ? props.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt : undefined,
          currentEquity: props.alpacaAccount.accountRiskMetrics.currentEquity !== undefined ? props.alpacaAccount.accountRiskMetrics.currentEquity : undefined,
          currentDrawdownPct: props.alpacaAccount.accountRiskMetrics.currentDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.currentDrawdownPct : undefined,
          intradayDrawdownPct: props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct !== undefined ? props.alpacaAccount.accountRiskMetrics.intradayDrawdownPct : undefined,
          maxDrawdownPctLifetime: props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime !== undefined ? props.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime : undefined,
          dailyPnlAmount: props.alpacaAccount.accountRiskMetrics.dailyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlAmount : undefined,
          dailyPnlPct: props.alpacaAccount.accountRiskMetrics.dailyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.dailyPnlPct : undefined,
          weeklyPnlAmount: props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlAmount : undefined,
          weeklyPnlPct: props.alpacaAccount.accountRiskMetrics.weeklyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.weeklyPnlPct : undefined,
          monthlyPnlAmount: props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlAmount : undefined,
          monthlyPnlPct: props.alpacaAccount.accountRiskMetrics.monthlyPnlPct !== undefined ? props.alpacaAccount.accountRiskMetrics.monthlyPnlPct : undefined,
          peakToTroughAmount: props.alpacaAccount.accountRiskMetrics.peakToTroughAmount !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughAmount : undefined,
          peakToTroughPct: props.alpacaAccount.accountRiskMetrics.peakToTroughPct !== undefined ? props.alpacaAccount.accountRiskMetrics.peakToTroughPct : undefined,
          nextRecoveryEligibleAt: props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt !== undefined ? props.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt : undefined,
          lastSyncedAt: props.alpacaAccount.accountRiskMetrics.lastSyncedAt !== undefined ? props.alpacaAccount.accountRiskMetrics.lastSyncedAt : undefined,
        },
      }
    } : undefined,
    strategyHealthSnapshots: props.alpacaAccount.strategyHealthSnapshots ? 
      Array.isArray(props.alpacaAccount.strategyHealthSnapshots) && props.alpacaAccount.strategyHealthSnapshots.length > 0 &&  props.alpacaAccount.strategyHealthSnapshots.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.strategyHealthSnapshots.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          strategyName: item.strategyName !== undefined ? item.strategyName : undefined,
          currentState: item.currentState !== undefined ? item.currentState : undefined,
          stateChangedAt: item.stateChangedAt !== undefined ? item.stateChangedAt : undefined,
          stateChangedReason: item.stateChangedReason !== undefined ? item.stateChangedReason : undefined,
          windowSize: item.windowSize !== undefined ? item.windowSize : undefined,
          windowTradeCount: item.windowTradeCount !== undefined ? item.windowTradeCount : undefined,
          windowHitRate: item.windowHitRate !== undefined ? item.windowHitRate : undefined,
          windowExpectancy: item.windowExpectancy !== undefined ? item.windowExpectancy : undefined,
          windowProfitFactor: item.windowProfitFactor !== undefined ? item.windowProfitFactor : undefined,
          windowSortino: item.windowSortino !== undefined ? item.windowSortino : undefined,
          windowMaxDrawdownPct: item.windowMaxDrawdownPct !== undefined ? item.windowMaxDrawdownPct : undefined,
          windowCumulativePnlAmt: item.windowCumulativePnlAmt !== undefined ? item.windowCumulativePnlAmt : undefined,
          backtestExpectancy: item.backtestExpectancy !== undefined ? item.backtestExpectancy : undefined,
          divergenceZScore: item.divergenceZScore !== undefined ? item.divergenceZScore : undefined,
          divergenceAlertActive: item.divergenceAlertActive !== undefined ? item.divergenceAlertActive : undefined,
          averageConfidence: item.averageConfidence !== undefined ? item.averageConfidence : undefined,
          confidenceTrend: item.confidenceTrend !== undefined ? item.confidenceTrend : undefined,
          lastUpdatedAt: item.lastUpdatedAt !== undefined ? item.lastUpdatedAt : undefined,
        },
      }))
    } : undefined,
    riskEscalationEvents: props.alpacaAccount.riskEscalationEvents ? 
      Array.isArray(props.alpacaAccount.riskEscalationEvents) && props.alpacaAccount.riskEscalationEvents.length > 0 &&  props.alpacaAccount.riskEscalationEvents.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.riskEscalationEvents.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.riskEscalationEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId 
             } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId 
             } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.triggeredByPolicyOverlay ? 
        typeof item.triggeredByPolicyOverlay === 'object' && Object.keys(item.triggeredByPolicyOverlay).length === 1 && Object.keys(item.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? item.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? item.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? item.triggeredByPolicyOverlay.source : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? item.triggeredByPolicyOverlay.reason : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? item.triggeredByPolicyOverlay.severity : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? item.triggeredByPolicyOverlay.version : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? item.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? item.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? item.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? item.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  overlays: props.overlays ? 
  Array.isArray(props.overlays) && props.overlays.length > 0 && props.overlays.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.overlays.map((item) => ({
    id: item.id
  }))
} : { upsert: props.overlays.map((item) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        riskEscalationEventId: item.riskEscalationEventId !== undefined ? item.riskEscalationEventId : undefined,
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
    riskEscalationEvent: item.riskEscalationEvent ? 
    typeof item.riskEscalationEvent === 'object' && Object.keys(item.riskEscalationEvent).length === 1 && (Object.keys(item.riskEscalationEvent)[0] === 'id' || Object.keys(item.riskEscalationEvent)[0] === 'symbol')
? {
    connect: {
      id: item.riskEscalationEvent.id
    }
} : { upsert: {
        where: {
          id: item.riskEscalationEvent.id !== undefined ? {
              equals: item.riskEscalationEvent.id
            } : undefined,
          alpacaAccountId: item.riskEscalationEvent.alpacaAccountId !== undefined ? {
              equals: item.riskEscalationEvent.alpacaAccountId
            } : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? {
              equals: item.riskEscalationEvent.correlationId
            } : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? {
              equals: item.riskEscalationEvent.triggeringEventId
            } : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? {
              equals: item.riskEscalationEvent.actorUserId
            } : undefined,
          triggeredByPolicyOverlayId: item.riskEscalationEvent.triggeredByPolicyOverlayId !== undefined ? {
              equals: item.riskEscalationEvent.triggeredByPolicyOverlayId
            } : undefined,
        },
        update: {
          id: item.riskEscalationEvent.id !== undefined ? {
              set: item.riskEscalationEvent.id
            } : undefined,
          scopeKind: item.riskEscalationEvent.scopeKind !== undefined ? {
              set: item.riskEscalationEvent.scopeKind
            } : undefined,
          scopeValue: item.riskEscalationEvent.scopeValue !== undefined ? {
              set: item.riskEscalationEvent.scopeValue
            } : undefined,
          fromState: item.riskEscalationEvent.fromState !== undefined ? {
              set: item.riskEscalationEvent.fromState
            } : undefined,
          toState: item.riskEscalationEvent.toState !== undefined ? {
              set: item.riskEscalationEvent.toState
            } : undefined,
          reason: item.riskEscalationEvent.reason !== undefined ? {
              set: item.riskEscalationEvent.reason
            } : undefined,
          severity: item.riskEscalationEvent.severity !== undefined ? {
              set: item.riskEscalationEvent.severity
            } : undefined,
          triggeringObserver: item.riskEscalationEvent.triggeringObserver !== undefined ? {
              set: item.riskEscalationEvent.triggeringObserver
            } : undefined,
          observedValue: item.riskEscalationEvent.observedValue !== undefined ? {
              set: item.riskEscalationEvent.observedValue
            } : undefined,
          breachedThreshold: item.riskEscalationEvent.breachedThreshold !== undefined ? {
              set: item.riskEscalationEvent.breachedThreshold
            } : undefined,
          breachedThresholdKey: item.riskEscalationEvent.breachedThresholdKey !== undefined ? {
              set: item.riskEscalationEvent.breachedThresholdKey
            } : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? {
              set: item.riskEscalationEvent.correlationId
            } : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? {
              set: item.riskEscalationEvent.triggeringEventId
            } : undefined,
          actor: item.riskEscalationEvent.actor !== undefined ? {
              set: item.riskEscalationEvent.actor
            } : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? {
              set: item.riskEscalationEvent.actorUserId
            } : undefined,
          rationale: item.riskEscalationEvent.rationale !== undefined ? {
              set: item.riskEscalationEvent.rationale
            } : undefined,
      alpacaAccount: item.riskEscalationEvent.alpacaAccount ? 
      typeof item.riskEscalationEvent.alpacaAccount === 'object' && Object.keys(item.riskEscalationEvent.alpacaAccount).length === 1 && (Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'id' || Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.riskEscalationEvent.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.id
              } : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.type
              } : undefined,
            userId: item.riskEscalationEvent.alpacaAccount.userId !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.id
              } : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.type
              } : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.APIKey
              } : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.APISecret
              } : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.marketOpen
              } : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.deletedAt
              } : undefined,
          },
          create: {
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? item.riskEscalationEvent.alpacaAccount.type : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? item.riskEscalationEvent.alpacaAccount.APIKey : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? item.riskEscalationEvent.alpacaAccount.APISecret : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? item.riskEscalationEvent.alpacaAccount.marketOpen : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? item.riskEscalationEvent.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? item.riskEscalationEvent.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? item.riskEscalationEvent.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? item.riskEscalationEvent.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? item.riskEscalationEvent.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.riskEscalationEvent.triggeredByPolicyOverlay ? 
      typeof item.riskEscalationEvent.triggeredByPolicyOverlay === 'object' && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay).length === 1 && (Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'id' || Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.riskEscalationEvent.triggeredByPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.status
              } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.id
              } : undefined,
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType
              } : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.source
              } : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.reason
              } : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.severity
              } : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.version
              } : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.status
              } : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.source : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.reason : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.severity : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.version : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          scopeKind: item.riskEscalationEvent.scopeKind !== undefined ? item.riskEscalationEvent.scopeKind : undefined,
          scopeValue: item.riskEscalationEvent.scopeValue !== undefined ? item.riskEscalationEvent.scopeValue : undefined,
          fromState: item.riskEscalationEvent.fromState !== undefined ? item.riskEscalationEvent.fromState : undefined,
          toState: item.riskEscalationEvent.toState !== undefined ? item.riskEscalationEvent.toState : undefined,
          reason: item.riskEscalationEvent.reason !== undefined ? item.riskEscalationEvent.reason : undefined,
          severity: item.riskEscalationEvent.severity !== undefined ? item.riskEscalationEvent.severity : undefined,
          triggeringObserver: item.riskEscalationEvent.triggeringObserver !== undefined ? item.riskEscalationEvent.triggeringObserver : undefined,
          observedValue: item.riskEscalationEvent.observedValue !== undefined ? item.riskEscalationEvent.observedValue : undefined,
          breachedThreshold: item.riskEscalationEvent.breachedThreshold !== undefined ? item.riskEscalationEvent.breachedThreshold : undefined,
          breachedThresholdKey: item.riskEscalationEvent.breachedThresholdKey !== undefined ? item.riskEscalationEvent.breachedThresholdKey : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? item.riskEscalationEvent.correlationId : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? item.riskEscalationEvent.triggeringEventId : undefined,
          actor: item.riskEscalationEvent.actor !== undefined ? item.riskEscalationEvent.actor : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? item.riskEscalationEvent.actorUserId : undefined,
          rationale: item.riskEscalationEvent.rationale !== undefined ? item.riskEscalationEvent.rationale : undefined,
      alpacaAccount: item.riskEscalationEvent.alpacaAccount ? 
        typeof item.riskEscalationEvent.alpacaAccount === 'object' && Object.keys(item.riskEscalationEvent.alpacaAccount).length === 1 && Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? item.riskEscalationEvent.alpacaAccount.id : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.type 
               } : undefined,
            userId: item.riskEscalationEvent.alpacaAccount.userId !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? item.riskEscalationEvent.alpacaAccount.type : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? item.riskEscalationEvent.alpacaAccount.APIKey : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? item.riskEscalationEvent.alpacaAccount.APISecret : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? item.riskEscalationEvent.alpacaAccount.marketOpen : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? item.riskEscalationEvent.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? item.riskEscalationEvent.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? item.riskEscalationEvent.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? item.riskEscalationEvent.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? item.riskEscalationEvent.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.riskEscalationEvent.triggeredByPolicyOverlay ? 
        typeof item.riskEscalationEvent.triggeredByPolicyOverlay === 'object' && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay).length === 1 && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.source : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.reason : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.severity : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.version : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    triggeredRiskEvents: item.triggeredRiskEvents ? 
    Array.isArray(item.triggeredRiskEvents) && item.triggeredRiskEvents.length > 0 && item.triggeredRiskEvents.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.triggeredRiskEvents.map((item) => ({
      id: item.id
    }))
} : { upsert: item.triggeredRiskEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId
            } : undefined,
          triggeredByPolicyOverlayId: item.triggeredByPolicyOverlayId !== undefined ? {
              equals: item.triggeredByPolicyOverlayId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          scopeKind: item.scopeKind !== undefined ? {
              set: item.scopeKind
            } : undefined,
          scopeValue: item.scopeValue !== undefined ? {
              set: item.scopeValue
            } : undefined,
          fromState: item.fromState !== undefined ? {
              set: item.fromState
            } : undefined,
          toState: item.toState !== undefined ? {
              set: item.toState
            } : undefined,
          reason: item.reason !== undefined ? {
              set: item.reason
            } : undefined,
          severity: item.severity !== undefined ? {
              set: item.severity
            } : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? {
              set: item.triggeringObserver
            } : undefined,
          observedValue: item.observedValue !== undefined ? {
              set: item.observedValue
            } : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? {
              set: item.breachedThreshold
            } : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? {
              set: item.breachedThresholdKey
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              set: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              set: item.triggeringEventId
            } : undefined,
          actor: item.actor !== undefined ? {
              set: item.actor
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              set: item.actorUserId
            } : undefined,
          rationale: item.rationale !== undefined ? {
              set: item.rationale
            } : undefined,
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && (Object.keys(item.alpacaAccount)[0] === 'id' || Object.keys(item.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id
              } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                equals: item.alpacaAccount.type
              } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id
              } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type
              } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey
              } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret
              } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen
              } : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? {
                set: item.alpacaAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? {
                set: item.alpacaAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? {
                set: item.alpacaAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.alpacaAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.alpacaAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.alpacaAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.alpacaAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.alpacaAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.alpacaAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? {
                set: item.alpacaAccount.deletedAt
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? item.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? item.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? item.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
      typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && (Object.keys(item.activatedPolicyOverlay)[0] === 'id' || Object.keys(item.activatedPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.activatedPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                equals: item.activatedPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                set: item.activatedPolicyOverlay.id
              } : undefined,
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? {
                set: item.activatedPolicyOverlay.overlayType
              } : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? {
                set: item.activatedPolicyOverlay.source
              } : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? {
                set: item.activatedPolicyOverlay.reason
              } : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? {
                set: item.activatedPolicyOverlay.severity
              } : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? {
                set: item.activatedPolicyOverlay.version
              } : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                set: item.activatedPolicyOverlay.status
              } : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? {
                set: item.activatedPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                set: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                set: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                equals: item.alpacaAccount.type 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? item.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? item.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? item.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
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
    riskEscalationEvent: item.riskEscalationEvent ? 
      typeof item.riskEscalationEvent === 'object' && Object.keys(item.riskEscalationEvent).length === 1 && Object.keys(item.riskEscalationEvent)[0] === 'id'
    ? { connect: {
          id: item.riskEscalationEvent.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.riskEscalationEvent.id !== undefined ? item.riskEscalationEvent.id : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? {
              equals: item.riskEscalationEvent.correlationId 
             } : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? {
              equals: item.riskEscalationEvent.triggeringEventId 
             } : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? {
              equals: item.riskEscalationEvent.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.riskEscalationEvent.scopeKind !== undefined ? item.riskEscalationEvent.scopeKind : undefined,
          scopeValue: item.riskEscalationEvent.scopeValue !== undefined ? item.riskEscalationEvent.scopeValue : undefined,
          fromState: item.riskEscalationEvent.fromState !== undefined ? item.riskEscalationEvent.fromState : undefined,
          toState: item.riskEscalationEvent.toState !== undefined ? item.riskEscalationEvent.toState : undefined,
          reason: item.riskEscalationEvent.reason !== undefined ? item.riskEscalationEvent.reason : undefined,
          severity: item.riskEscalationEvent.severity !== undefined ? item.riskEscalationEvent.severity : undefined,
          triggeringObserver: item.riskEscalationEvent.triggeringObserver !== undefined ? item.riskEscalationEvent.triggeringObserver : undefined,
          observedValue: item.riskEscalationEvent.observedValue !== undefined ? item.riskEscalationEvent.observedValue : undefined,
          breachedThreshold: item.riskEscalationEvent.breachedThreshold !== undefined ? item.riskEscalationEvent.breachedThreshold : undefined,
          breachedThresholdKey: item.riskEscalationEvent.breachedThresholdKey !== undefined ? item.riskEscalationEvent.breachedThresholdKey : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? item.riskEscalationEvent.correlationId : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? item.riskEscalationEvent.triggeringEventId : undefined,
          actor: item.riskEscalationEvent.actor !== undefined ? item.riskEscalationEvent.actor : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? item.riskEscalationEvent.actorUserId : undefined,
          rationale: item.riskEscalationEvent.rationale !== undefined ? item.riskEscalationEvent.rationale : undefined,
      alpacaAccount: item.riskEscalationEvent.alpacaAccount ? 
        typeof item.riskEscalationEvent.alpacaAccount === 'object' && Object.keys(item.riskEscalationEvent.alpacaAccount).length === 1 && Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? item.riskEscalationEvent.alpacaAccount.id : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.type 
               } : undefined,
            userId: item.riskEscalationEvent.alpacaAccount.userId !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? item.riskEscalationEvent.alpacaAccount.type : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? item.riskEscalationEvent.alpacaAccount.APIKey : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? item.riskEscalationEvent.alpacaAccount.APISecret : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? item.riskEscalationEvent.alpacaAccount.marketOpen : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? item.riskEscalationEvent.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? item.riskEscalationEvent.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? item.riskEscalationEvent.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? item.riskEscalationEvent.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? item.riskEscalationEvent.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.riskEscalationEvent.triggeredByPolicyOverlay ? 
        typeof item.riskEscalationEvent.triggeredByPolicyOverlay === 'object' && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay).length === 1 && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.source : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.reason : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.severity : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.version : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    triggeredRiskEvents: item.triggeredRiskEvents ? 
      Array.isArray(item.triggeredRiskEvents) && item.triggeredRiskEvents.length > 0 &&  item.triggeredRiskEvents.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.triggeredRiskEvents.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.triggeredRiskEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId 
             } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId 
             } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                equals: item.alpacaAccount.type 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? item.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? item.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? item.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_TRADINGPOLICY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneTradingPolicy) {
          return response.data.upsertOneTradingPolicy;
        } else {
          return null as unknown as TradingPolicyType;
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
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
          logger.error("Non-retryable constraint violation in upsertOneTradingPolicy", {
            operation: 'upsertOneTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            recordId: props.id,
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in upsertOneTradingPolicy, retrying...", {
            operation: 'upsertOneTradingPolicy',
            model: 'TradingPolicy',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database upsert operation failed (transient after retries)", {
            operation: 'upsertOneTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            recordId: props.id,
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database upsert operation failed", {
            operation: 'upsertOneTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            recordId: props.id,
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple TradingPolicy records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of TradingPolicy objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: TradingPolicyType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

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

        const UPDATE_MANY_TRADINGPOLICY = gql`
          mutation updateManyTradingPolicy($data: [TradingPolicyCreateManyInput!]!) {
            updateManyTradingPolicy(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  version: prop.version !== undefined ? {
            set: prop.version 
           } : undefined,
  lastModifiedBy: prop.lastModifiedBy !== undefined ? {
            set: prop.lastModifiedBy 
           } : undefined,
  lastModifiedAt: prop.lastModifiedAt !== undefined ? {
            set: prop.lastModifiedAt 
           } : undefined,
  autonomyMode: prop.autonomyMode !== undefined ? {
            set: prop.autonomyMode 
           } : undefined,
  realtimeTradingEnabled: prop.realtimeTradingEnabled !== undefined ? {
            set: prop.realtimeTradingEnabled 
           } : undefined,
  paperTradingOnly: prop.paperTradingOnly !== undefined ? {
            set: prop.paperTradingOnly 
           } : undefined,
  killSwitchEnabled: prop.killSwitchEnabled !== undefined ? {
            set: prop.killSwitchEnabled 
           } : undefined,
  autonomyPrefs: prop.autonomyPrefs !== undefined ? prop.autonomyPrefs : undefined,
  equitiesEnabled: prop.equitiesEnabled !== undefined ? {
            set: prop.equitiesEnabled 
           } : undefined,
  etfsEnabled: prop.etfsEnabled !== undefined ? {
            set: prop.etfsEnabled 
           } : undefined,
  cryptoEnabled: prop.cryptoEnabled !== undefined ? {
            set: prop.cryptoEnabled 
           } : undefined,
  optionsEnabled: prop.optionsEnabled !== undefined ? {
            set: prop.optionsEnabled 
           } : undefined,
  futuresEnabled: prop.futuresEnabled !== undefined ? {
            set: prop.futuresEnabled 
           } : undefined,
  forexEnabled: prop.forexEnabled !== undefined ? {
            set: prop.forexEnabled 
           } : undefined,
  shortingEnabled: prop.shortingEnabled !== undefined ? {
            set: prop.shortingEnabled 
           } : undefined,
  marginEnabled: prop.marginEnabled !== undefined ? {
            set: prop.marginEnabled 
           } : undefined,
  fractionalSharesEnabled: prop.fractionalSharesEnabled !== undefined ? {
            set: prop.fractionalSharesEnabled 
           } : undefined,
  assetUniversePrefs: prop.assetUniversePrefs !== undefined ? prop.assetUniversePrefs : undefined,
  maxBuyingPowerUtilPct: prop.maxBuyingPowerUtilPct !== undefined ? {
            set: prop.maxBuyingPowerUtilPct 
           } : undefined,
  cashFloorPct: prop.cashFloorPct !== undefined ? {
            set: prop.cashFloorPct 
           } : undefined,
  maxGrossExposurePct: prop.maxGrossExposurePct !== undefined ? {
            set: prop.maxGrossExposurePct 
           } : undefined,
  maxNetExposurePct: prop.maxNetExposurePct !== undefined ? {
            set: prop.maxNetExposurePct 
           } : undefined,
  maxLeverage: prop.maxLeverage !== undefined ? {
            set: prop.maxLeverage 
           } : undefined,
  maxSymbolConcentrationPct: prop.maxSymbolConcentrationPct !== undefined ? {
            set: prop.maxSymbolConcentrationPct 
           } : undefined,
  maxSectorConcentrationPct: prop.maxSectorConcentrationPct !== undefined ? {
            set: prop.maxSectorConcentrationPct 
           } : undefined,
  maxOpenPositions: prop.maxOpenPositions !== undefined ? {
            set: prop.maxOpenPositions 
           } : undefined,
  maxOpenOrders: prop.maxOpenOrders !== undefined ? {
            set: prop.maxOpenOrders 
           } : undefined,
  perTradeEquityAllocationPct: prop.perTradeEquityAllocationPct !== undefined ? {
            set: prop.perTradeEquityAllocationPct 
           } : undefined,
  perTradeCryptoAllocationPct: prop.perTradeCryptoAllocationPct !== undefined ? {
            set: prop.perTradeCryptoAllocationPct 
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
  equityWashTradeCooldownMs: prop.equityWashTradeCooldownMs !== undefined ? {
            set: prop.equityWashTradeCooldownMs 
           } : undefined,
  minIntradayLiquidityShares: prop.minIntradayLiquidityShares !== undefined ? {
            set: prop.minIntradayLiquidityShares 
           } : undefined,
  maxEntrySpreadBps: prop.maxEntrySpreadBps !== undefined ? {
            set: prop.maxEntrySpreadBps 
           } : undefined,
  sameSideReentryDelayMs: prop.sameSideReentryDelayMs !== undefined ? {
            set: prop.sameSideReentryDelayMs 
           } : undefined,
  minAtrPercentage: prop.minAtrPercentage !== undefined ? {
            set: prop.minAtrPercentage 
           } : undefined,
  maxAtrPercentage: prop.maxAtrPercentage !== undefined ? {
            set: prop.maxAtrPercentage 
           } : undefined,
  minBookDepthShares: prop.minBookDepthShares !== undefined ? {
            set: prop.minBookDepthShares 
           } : undefined,
  maxAnomalousSlippageBps: prop.maxAnomalousSlippageBps !== undefined ? {
            set: prop.maxAnomalousSlippageBps 
           } : undefined,
  intradayTradingWindows: prop.intradayTradingWindows !== undefined ? prop.intradayTradingWindows : undefined,
  hardPositionExitMinutes: prop.hardPositionExitMinutes !== undefined ? {
            set: prop.hardPositionExitMinutes 
           } : undefined,
  maxOrdersPerWindow: prop.maxOrdersPerWindow !== undefined ? {
            set: prop.maxOrdersPerWindow 
           } : undefined,
  orderWindowSeconds: prop.orderWindowSeconds !== undefined ? {
            set: prop.orderWindowSeconds 
           } : undefined,
  dayTradeOnly: prop.dayTradeOnly !== undefined ? {
            set: prop.dayTradeOnly 
           } : undefined,
  riskBudgetPrefs: prop.riskBudgetPrefs !== undefined ? prop.riskBudgetPrefs : undefined,
  signalConsumptionPrefs: prop.signalConsumptionPrefs !== undefined ? prop.signalConsumptionPrefs : undefined,
  executionPrefs: prop.executionPrefs !== undefined ? prop.executionPrefs : undefined,
  positionManagementPrefs: prop.positionManagementPrefs !== undefined ? prop.positionManagementPrefs : undefined,
  portfolioConstructionPrefs: prop.portfolioConstructionPrefs !== undefined ? prop.portfolioConstructionPrefs : undefined,
  macroOverlayEnabled: prop.macroOverlayEnabled !== undefined ? {
            set: prop.macroOverlayEnabled 
           } : undefined,
  sectorOverlayEnabled: prop.sectorOverlayEnabled !== undefined ? {
            set: prop.sectorOverlayEnabled 
           } : undefined,
  volatilityOverlayEnabled: prop.volatilityOverlayEnabled !== undefined ? {
            set: prop.volatilityOverlayEnabled 
           } : undefined,
  liquidityStressOverlayEnabled: prop.liquidityStressOverlayEnabled !== undefined ? {
            set: prop.liquidityStressOverlayEnabled 
           } : undefined,
  blackSwanProtectionEnabled: prop.blackSwanProtectionEnabled !== undefined ? {
            set: prop.blackSwanProtectionEnabled 
           } : undefined,
  drawdownGuardianEnabled: prop.drawdownGuardianEnabled !== undefined ? {
            set: prop.drawdownGuardianEnabled 
           } : undefined,
  correlationSpikeProtectionEnabled: prop.correlationSpikeProtectionEnabled !== undefined ? {
            set: prop.correlationSpikeProtectionEnabled 
           } : undefined,
  newsEventRiskOverlayEnabled: prop.newsEventRiskOverlayEnabled !== undefined ? {
            set: prop.newsEventRiskOverlayEnabled 
           } : undefined,
  exchangeHealthOverlayEnabled: prop.exchangeHealthOverlayEnabled !== undefined ? {
            set: prop.exchangeHealthOverlayEnabled 
           } : undefined,
  dataQualitySentinelEnabled: prop.dataQualitySentinelEnabled !== undefined ? {
            set: prop.dataQualitySentinelEnabled 
           } : undefined,
  overlayResponsePrefs: prop.overlayResponsePrefs !== undefined ? prop.overlayResponsePrefs : undefined,
  miniModelProvider: prop.miniModelProvider !== undefined ? {
            set: prop.miniModelProvider 
           } : undefined,
  miniModelId: prop.miniModelId !== undefined ? {
            set: prop.miniModelId 
           } : undefined,
  normalModelProvider: prop.normalModelProvider !== undefined ? {
            set: prop.normalModelProvider 
           } : undefined,
  normalModelId: prop.normalModelId !== undefined ? {
            set: prop.normalModelId 
           } : undefined,
  advancedModelProvider: prop.advancedModelProvider !== undefined ? {
            set: prop.advancedModelProvider 
           } : undefined,
  advancedModelId: prop.advancedModelId !== undefined ? {
            set: prop.advancedModelId 
           } : undefined,
  modelPrefs: prop.modelPrefs !== undefined ? prop.modelPrefs : undefined,
  auditNotificationPrefs: prop.auditNotificationPrefs !== undefined ? prop.auditNotificationPrefs : undefined,
  escalationPolicyOverrides: prop.escalationPolicyOverrides !== undefined ? prop.escalationPolicyOverrides : undefined,
  currentRiskState: prop.currentRiskState !== undefined ? {
            set: prop.currentRiskState 
           } : undefined,
  currentRiskStateAt: prop.currentRiskStateAt !== undefined ? {
            set: prop.currentRiskStateAt 
           } : undefined,
  lastRiskStateChangedBy: prop.lastRiskStateChangedBy !== undefined ? {
            set: prop.lastRiskStateChangedBy 
           } : undefined,
  lastRiskEscalationEventId: prop.lastRiskEscalationEventId !== undefined ? {
            set: prop.lastRiskEscalationEventId 
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
    allocation: prop.alpacaAccount.allocation ? 
    typeof prop.alpacaAccount.allocation === 'object' && Object.keys(prop.alpacaAccount.allocation).length === 1 && (Object.keys(prop.alpacaAccount.allocation)[0] === 'id' || Object.keys(prop.alpacaAccount.allocation)[0] === 'symbol')
? {
    connect: {
      id: prop.alpacaAccount.allocation.id
    }
} : { upsert: {
        where: {
          id: prop.alpacaAccount.allocation.id !== undefined ? {
              equals: prop.alpacaAccount.allocation.id
            } : undefined,
          alpacaAccountId: prop.alpacaAccount.allocation.alpacaAccountId !== undefined ? {
              equals: prop.alpacaAccount.allocation.alpacaAccountId
            } : undefined,
        },
        update: {
          id: prop.alpacaAccount.allocation.id !== undefined ? {
              set: prop.alpacaAccount.allocation.id
            } : undefined,
          equities: prop.alpacaAccount.allocation.equities !== undefined ? {
              set: prop.alpacaAccount.allocation.equities
            } : undefined,
          optionsContracts: prop.alpacaAccount.allocation.optionsContracts !== undefined ? {
              set: prop.alpacaAccount.allocation.optionsContracts
            } : undefined,
          futures: prop.alpacaAccount.allocation.futures !== undefined ? {
              set: prop.alpacaAccount.allocation.futures
            } : undefined,
          etfs: prop.alpacaAccount.allocation.etfs !== undefined ? {
              set: prop.alpacaAccount.allocation.etfs
            } : undefined,
          forex: prop.alpacaAccount.allocation.forex !== undefined ? {
              set: prop.alpacaAccount.allocation.forex
            } : undefined,
          crypto: prop.alpacaAccount.allocation.crypto !== undefined ? {
              set: prop.alpacaAccount.allocation.crypto
            } : undefined,
          stocks: prop.alpacaAccount.allocation.stocks !== undefined ? {
              set: prop.alpacaAccount.allocation.stocks
            } : undefined,
          options: prop.alpacaAccount.allocation.options !== undefined ? {
              set: prop.alpacaAccount.allocation.options
            } : undefined,
        },
        create: {
          equities: prop.alpacaAccount.allocation.equities !== undefined ? prop.alpacaAccount.allocation.equities : undefined,
          optionsContracts: prop.alpacaAccount.allocation.optionsContracts !== undefined ? prop.alpacaAccount.allocation.optionsContracts : undefined,
          futures: prop.alpacaAccount.allocation.futures !== undefined ? prop.alpacaAccount.allocation.futures : undefined,
          etfs: prop.alpacaAccount.allocation.etfs !== undefined ? prop.alpacaAccount.allocation.etfs : undefined,
          forex: prop.alpacaAccount.allocation.forex !== undefined ? prop.alpacaAccount.allocation.forex : undefined,
          crypto: prop.alpacaAccount.allocation.crypto !== undefined ? prop.alpacaAccount.allocation.crypto : undefined,
          stocks: prop.alpacaAccount.allocation.stocks !== undefined ? prop.alpacaAccount.allocation.stocks : undefined,
          options: prop.alpacaAccount.allocation.options !== undefined ? prop.alpacaAccount.allocation.options : undefined,
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
            jurisdiction: prop.alpacaAccount.user.customer.jurisdiction !== undefined ? {
                set: prop.alpacaAccount.user.customer.jurisdiction
              } : undefined,
            riskProfile: prop.alpacaAccount.user.customer.riskProfile !== undefined ? {
                set: prop.alpacaAccount.user.customer.riskProfile
              } : undefined,
            amlStatus: prop.alpacaAccount.user.customer.amlStatus !== undefined ? {
                set: prop.alpacaAccount.user.customer.amlStatus
              } : undefined,
            lastKycUpdate: prop.alpacaAccount.user.customer.lastKycUpdate !== undefined ? {
                set: prop.alpacaAccount.user.customer.lastKycUpdate
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
            jurisdiction: prop.alpacaAccount.user.customer.jurisdiction !== undefined ? prop.alpacaAccount.user.customer.jurisdiction : undefined,
            riskProfile: prop.alpacaAccount.user.customer.riskProfile !== undefined ? prop.alpacaAccount.user.customer.riskProfile : undefined,
            amlStatus: prop.alpacaAccount.user.customer.amlStatus !== undefined ? prop.alpacaAccount.user.customer.amlStatus : undefined,
            lastKycUpdate: prop.alpacaAccount.user.customer.lastKycUpdate !== undefined ? prop.alpacaAccount.user.customer.lastKycUpdate : undefined,
          },
        }
      } : undefined,
      accounts: prop.alpacaAccount.user.accounts ? 
      Array.isArray(prop.alpacaAccount.user.accounts) && prop.alpacaAccount.user.accounts.length > 0 && prop.alpacaAccount.user.accounts.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.accounts.map((item) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.accounts.map((item) => ({
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
      Array.isArray(prop.alpacaAccount.user.sessions) && prop.alpacaAccount.user.sessions.length > 0 && prop.alpacaAccount.user.sessions.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.sessions.map((item) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.sessions.map((item) => ({
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
      Array.isArray(prop.alpacaAccount.user.authenticators) && prop.alpacaAccount.user.authenticators.length > 0 && prop.alpacaAccount.user.authenticators.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.authenticators.map((item) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.authenticators.map((item) => ({
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
      Array.isArray(prop.alpacaAccount.user.linkedProviders) && prop.alpacaAccount.user.linkedProviders.length > 0 && prop.alpacaAccount.user.linkedProviders.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.linkedProviders.map((item) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.linkedProviders.map((item) => ({
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
      Array.isArray(prop.alpacaAccount.user.accountLinkingRequests) && prop.alpacaAccount.user.accountLinkingRequests.length > 0 && prop.alpacaAccount.user.accountLinkingRequests.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.accountLinkingRequests.map((item) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.accountLinkingRequests.map((item) => ({
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
      Array.isArray(prop.alpacaAccount.user.reviewedWaitlistEntries) && prop.alpacaAccount.user.reviewedWaitlistEntries.length > 0 && prop.alpacaAccount.user.reviewedWaitlistEntries.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
        id: item.id
      }))
} : { upsert: prop.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
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
            jurisdiction: prop.alpacaAccount.user.customer.jurisdiction !== undefined ? prop.alpacaAccount.user.customer.jurisdiction : undefined,
            riskProfile: prop.alpacaAccount.user.customer.riskProfile !== undefined ? prop.alpacaAccount.user.customer.riskProfile : undefined,
            amlStatus: prop.alpacaAccount.user.customer.amlStatus !== undefined ? prop.alpacaAccount.user.customer.amlStatus : undefined,
            lastKycUpdate: prop.alpacaAccount.user.customer.lastKycUpdate !== undefined ? prop.alpacaAccount.user.customer.lastKycUpdate : undefined,
          },
        }
      } : undefined,
      accounts: prop.alpacaAccount.user.accounts ? 
        Array.isArray(prop.alpacaAccount.user.accounts) && prop.alpacaAccount.user.accounts.length > 0 &&  prop.alpacaAccount.user.accounts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.accounts.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.accounts.map((item) => ({
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
        Array.isArray(prop.alpacaAccount.user.sessions) && prop.alpacaAccount.user.sessions.length > 0 &&  prop.alpacaAccount.user.sessions.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.sessions.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.sessions.map((item) => ({
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
        Array.isArray(prop.alpacaAccount.user.authenticators) && prop.alpacaAccount.user.authenticators.length > 0 &&  prop.alpacaAccount.user.authenticators.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.authenticators.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.authenticators.map((item) => ({
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
        Array.isArray(prop.alpacaAccount.user.linkedProviders) && prop.alpacaAccount.user.linkedProviders.length > 0 &&  prop.alpacaAccount.user.linkedProviders.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.linkedProviders.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.linkedProviders.map((item) => ({
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
        Array.isArray(prop.alpacaAccount.user.accountLinkingRequests) && prop.alpacaAccount.user.accountLinkingRequests.length > 0 &&  prop.alpacaAccount.user.accountLinkingRequests.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.accountLinkingRequests.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.accountLinkingRequests.map((item) => ({
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
        Array.isArray(prop.alpacaAccount.user.reviewedWaitlistEntries) && prop.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  prop.alpacaAccount.user.reviewedWaitlistEntries.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
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
    Array.isArray(prop.alpacaAccount.alerts) && prop.alpacaAccount.alerts.length > 0 && prop.alpacaAccount.alerts.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.alpacaAccount.alerts.map((item) => ({
      id: item.id
    }))
} : { upsert: prop.alpacaAccount.alerts.map((item) => ({
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
    accountRiskMetrics: prop.alpacaAccount.accountRiskMetrics ? 
    typeof prop.alpacaAccount.accountRiskMetrics === 'object' && Object.keys(prop.alpacaAccount.accountRiskMetrics).length === 1 && (Object.keys(prop.alpacaAccount.accountRiskMetrics)[0] === 'id' || Object.keys(prop.alpacaAccount.accountRiskMetrics)[0] === 'symbol')
? {
    connect: {
      id: prop.alpacaAccount.accountRiskMetrics.id
    }
} : { upsert: {
        where: {
          id: prop.alpacaAccount.accountRiskMetrics.id !== undefined ? {
              equals: prop.alpacaAccount.accountRiskMetrics.id
            } : undefined,
          alpacaAccountId: prop.alpacaAccount.accountRiskMetrics.alpacaAccountId !== undefined ? {
              equals: prop.alpacaAccount.accountRiskMetrics.alpacaAccountId
            } : undefined,
        },
        update: {
          id: prop.alpacaAccount.accountRiskMetrics.id !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.id
            } : undefined,
          currentRiskState: prop.alpacaAccount.accountRiskMetrics.currentRiskState !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.currentRiskState
            } : undefined,
          currentScopeState: prop.alpacaAccount.accountRiskMetrics.currentScopeState !== undefined ? prop.alpacaAccount.accountRiskMetrics.currentScopeState : undefined,
          riskStateChangedAt: prop.alpacaAccount.accountRiskMetrics.riskStateChangedAt !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.riskStateChangedAt
            } : undefined,
          riskStateChangedBy: prop.alpacaAccount.accountRiskMetrics.riskStateChangedBy !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.riskStateChangedBy
            } : undefined,
          riskStateChangeReason: prop.alpacaAccount.accountRiskMetrics.riskStateChangeReason !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.riskStateChangeReason
            } : undefined,
          accountHighWaterMark: prop.alpacaAccount.accountRiskMetrics.accountHighWaterMark !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.accountHighWaterMark
            } : undefined,
          accountHighWaterMarkAt: prop.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt
            } : undefined,
          currentEquity: prop.alpacaAccount.accountRiskMetrics.currentEquity !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.currentEquity
            } : undefined,
          currentDrawdownPct: prop.alpacaAccount.accountRiskMetrics.currentDrawdownPct !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.currentDrawdownPct
            } : undefined,
          intradayDrawdownPct: prop.alpacaAccount.accountRiskMetrics.intradayDrawdownPct !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.intradayDrawdownPct
            } : undefined,
          maxDrawdownPctLifetime: prop.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime
            } : undefined,
          dailyPnlAmount: prop.alpacaAccount.accountRiskMetrics.dailyPnlAmount !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.dailyPnlAmount
            } : undefined,
          dailyPnlPct: prop.alpacaAccount.accountRiskMetrics.dailyPnlPct !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.dailyPnlPct
            } : undefined,
          weeklyPnlAmount: prop.alpacaAccount.accountRiskMetrics.weeklyPnlAmount !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.weeklyPnlAmount
            } : undefined,
          weeklyPnlPct: prop.alpacaAccount.accountRiskMetrics.weeklyPnlPct !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.weeklyPnlPct
            } : undefined,
          monthlyPnlAmount: prop.alpacaAccount.accountRiskMetrics.monthlyPnlAmount !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.monthlyPnlAmount
            } : undefined,
          monthlyPnlPct: prop.alpacaAccount.accountRiskMetrics.monthlyPnlPct !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.monthlyPnlPct
            } : undefined,
          peakToTroughAmount: prop.alpacaAccount.accountRiskMetrics.peakToTroughAmount !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.peakToTroughAmount
            } : undefined,
          peakToTroughPct: prop.alpacaAccount.accountRiskMetrics.peakToTroughPct !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.peakToTroughPct
            } : undefined,
          nextRecoveryEligibleAt: prop.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt
            } : undefined,
          lastSyncedAt: prop.alpacaAccount.accountRiskMetrics.lastSyncedAt !== undefined ? {
              set: prop.alpacaAccount.accountRiskMetrics.lastSyncedAt
            } : undefined,
        },
        create: {
          currentRiskState: prop.alpacaAccount.accountRiskMetrics.currentRiskState !== undefined ? prop.alpacaAccount.accountRiskMetrics.currentRiskState : undefined,
          currentScopeState: prop.alpacaAccount.accountRiskMetrics.currentScopeState !== undefined ? prop.alpacaAccount.accountRiskMetrics.currentScopeState : undefined,
          riskStateChangedAt: prop.alpacaAccount.accountRiskMetrics.riskStateChangedAt !== undefined ? prop.alpacaAccount.accountRiskMetrics.riskStateChangedAt : undefined,
          riskStateChangedBy: prop.alpacaAccount.accountRiskMetrics.riskStateChangedBy !== undefined ? prop.alpacaAccount.accountRiskMetrics.riskStateChangedBy : undefined,
          riskStateChangeReason: prop.alpacaAccount.accountRiskMetrics.riskStateChangeReason !== undefined ? prop.alpacaAccount.accountRiskMetrics.riskStateChangeReason : undefined,
          accountHighWaterMark: prop.alpacaAccount.accountRiskMetrics.accountHighWaterMark !== undefined ? prop.alpacaAccount.accountRiskMetrics.accountHighWaterMark : undefined,
          accountHighWaterMarkAt: prop.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt !== undefined ? prop.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt : undefined,
          currentEquity: prop.alpacaAccount.accountRiskMetrics.currentEquity !== undefined ? prop.alpacaAccount.accountRiskMetrics.currentEquity : undefined,
          currentDrawdownPct: prop.alpacaAccount.accountRiskMetrics.currentDrawdownPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.currentDrawdownPct : undefined,
          intradayDrawdownPct: prop.alpacaAccount.accountRiskMetrics.intradayDrawdownPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.intradayDrawdownPct : undefined,
          maxDrawdownPctLifetime: prop.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime !== undefined ? prop.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime : undefined,
          dailyPnlAmount: prop.alpacaAccount.accountRiskMetrics.dailyPnlAmount !== undefined ? prop.alpacaAccount.accountRiskMetrics.dailyPnlAmount : undefined,
          dailyPnlPct: prop.alpacaAccount.accountRiskMetrics.dailyPnlPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.dailyPnlPct : undefined,
          weeklyPnlAmount: prop.alpacaAccount.accountRiskMetrics.weeklyPnlAmount !== undefined ? prop.alpacaAccount.accountRiskMetrics.weeklyPnlAmount : undefined,
          weeklyPnlPct: prop.alpacaAccount.accountRiskMetrics.weeklyPnlPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.weeklyPnlPct : undefined,
          monthlyPnlAmount: prop.alpacaAccount.accountRiskMetrics.monthlyPnlAmount !== undefined ? prop.alpacaAccount.accountRiskMetrics.monthlyPnlAmount : undefined,
          monthlyPnlPct: prop.alpacaAccount.accountRiskMetrics.monthlyPnlPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.monthlyPnlPct : undefined,
          peakToTroughAmount: prop.alpacaAccount.accountRiskMetrics.peakToTroughAmount !== undefined ? prop.alpacaAccount.accountRiskMetrics.peakToTroughAmount : undefined,
          peakToTroughPct: prop.alpacaAccount.accountRiskMetrics.peakToTroughPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.peakToTroughPct : undefined,
          nextRecoveryEligibleAt: prop.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt !== undefined ? prop.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt : undefined,
          lastSyncedAt: prop.alpacaAccount.accountRiskMetrics.lastSyncedAt !== undefined ? prop.alpacaAccount.accountRiskMetrics.lastSyncedAt : undefined,
        },
      }
    } : undefined,
    strategyHealthSnapshots: prop.alpacaAccount.strategyHealthSnapshots ? 
    Array.isArray(prop.alpacaAccount.strategyHealthSnapshots) && prop.alpacaAccount.strategyHealthSnapshots.length > 0 && prop.alpacaAccount.strategyHealthSnapshots.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.alpacaAccount.strategyHealthSnapshots.map((item) => ({
      id: item.id
    }))
} : { upsert: prop.alpacaAccount.strategyHealthSnapshots.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          strategyName: item.strategyName !== undefined ? {
              set: item.strategyName
            } : undefined,
          currentState: item.currentState !== undefined ? {
              set: item.currentState
            } : undefined,
          stateChangedAt: item.stateChangedAt !== undefined ? {
              set: item.stateChangedAt
            } : undefined,
          stateChangedReason: item.stateChangedReason !== undefined ? {
              set: item.stateChangedReason
            } : undefined,
          windowSize: item.windowSize !== undefined ? {
              set: item.windowSize
            } : undefined,
          windowTradeCount: item.windowTradeCount !== undefined ? {
              set: item.windowTradeCount
            } : undefined,
          windowHitRate: item.windowHitRate !== undefined ? {
              set: item.windowHitRate
            } : undefined,
          windowExpectancy: item.windowExpectancy !== undefined ? {
              set: item.windowExpectancy
            } : undefined,
          windowProfitFactor: item.windowProfitFactor !== undefined ? {
              set: item.windowProfitFactor
            } : undefined,
          windowSortino: item.windowSortino !== undefined ? {
              set: item.windowSortino
            } : undefined,
          windowMaxDrawdownPct: item.windowMaxDrawdownPct !== undefined ? {
              set: item.windowMaxDrawdownPct
            } : undefined,
          windowCumulativePnlAmt: item.windowCumulativePnlAmt !== undefined ? {
              set: item.windowCumulativePnlAmt
            } : undefined,
          backtestExpectancy: item.backtestExpectancy !== undefined ? {
              set: item.backtestExpectancy
            } : undefined,
          divergenceZScore: item.divergenceZScore !== undefined ? {
              set: item.divergenceZScore
            } : undefined,
          divergenceAlertActive: item.divergenceAlertActive !== undefined ? {
              set: item.divergenceAlertActive
            } : undefined,
          averageConfidence: item.averageConfidence !== undefined ? {
              set: item.averageConfidence
            } : undefined,
          confidenceTrend: item.confidenceTrend !== undefined ? {
              set: item.confidenceTrend
            } : undefined,
          lastUpdatedAt: item.lastUpdatedAt !== undefined ? {
              set: item.lastUpdatedAt
            } : undefined,
        },
        create: {
          strategyName: item.strategyName !== undefined ? item.strategyName : undefined,
          currentState: item.currentState !== undefined ? item.currentState : undefined,
          stateChangedAt: item.stateChangedAt !== undefined ? item.stateChangedAt : undefined,
          stateChangedReason: item.stateChangedReason !== undefined ? item.stateChangedReason : undefined,
          windowSize: item.windowSize !== undefined ? item.windowSize : undefined,
          windowTradeCount: item.windowTradeCount !== undefined ? item.windowTradeCount : undefined,
          windowHitRate: item.windowHitRate !== undefined ? item.windowHitRate : undefined,
          windowExpectancy: item.windowExpectancy !== undefined ? item.windowExpectancy : undefined,
          windowProfitFactor: item.windowProfitFactor !== undefined ? item.windowProfitFactor : undefined,
          windowSortino: item.windowSortino !== undefined ? item.windowSortino : undefined,
          windowMaxDrawdownPct: item.windowMaxDrawdownPct !== undefined ? item.windowMaxDrawdownPct : undefined,
          windowCumulativePnlAmt: item.windowCumulativePnlAmt !== undefined ? item.windowCumulativePnlAmt : undefined,
          backtestExpectancy: item.backtestExpectancy !== undefined ? item.backtestExpectancy : undefined,
          divergenceZScore: item.divergenceZScore !== undefined ? item.divergenceZScore : undefined,
          divergenceAlertActive: item.divergenceAlertActive !== undefined ? item.divergenceAlertActive : undefined,
          averageConfidence: item.averageConfidence !== undefined ? item.averageConfidence : undefined,
          confidenceTrend: item.confidenceTrend !== undefined ? item.confidenceTrend : undefined,
          lastUpdatedAt: item.lastUpdatedAt !== undefined ? item.lastUpdatedAt : undefined,
        },
      }))
    } : undefined,
    riskEscalationEvents: prop.alpacaAccount.riskEscalationEvents ? 
    Array.isArray(prop.alpacaAccount.riskEscalationEvents) && prop.alpacaAccount.riskEscalationEvents.length > 0 && prop.alpacaAccount.riskEscalationEvents.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.alpacaAccount.riskEscalationEvents.map((item) => ({
      id: item.id
    }))
} : { upsert: prop.alpacaAccount.riskEscalationEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId
            } : undefined,
          triggeredByPolicyOverlayId: item.triggeredByPolicyOverlayId !== undefined ? {
              equals: item.triggeredByPolicyOverlayId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          scopeKind: item.scopeKind !== undefined ? {
              set: item.scopeKind
            } : undefined,
          scopeValue: item.scopeValue !== undefined ? {
              set: item.scopeValue
            } : undefined,
          fromState: item.fromState !== undefined ? {
              set: item.fromState
            } : undefined,
          toState: item.toState !== undefined ? {
              set: item.toState
            } : undefined,
          reason: item.reason !== undefined ? {
              set: item.reason
            } : undefined,
          severity: item.severity !== undefined ? {
              set: item.severity
            } : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? {
              set: item.triggeringObserver
            } : undefined,
          observedValue: item.observedValue !== undefined ? {
              set: item.observedValue
            } : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? {
              set: item.breachedThreshold
            } : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? {
              set: item.breachedThresholdKey
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              set: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              set: item.triggeringEventId
            } : undefined,
          actor: item.actor !== undefined ? {
              set: item.actor
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              set: item.actorUserId
            } : undefined,
          rationale: item.rationale !== undefined ? {
              set: item.rationale
            } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
      typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && (Object.keys(item.activatedPolicyOverlay)[0] === 'id' || Object.keys(item.activatedPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.activatedPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                equals: item.activatedPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                set: item.activatedPolicyOverlay.id
              } : undefined,
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? {
                set: item.activatedPolicyOverlay.overlayType
              } : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? {
                set: item.activatedPolicyOverlay.source
              } : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? {
                set: item.activatedPolicyOverlay.reason
              } : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? {
                set: item.activatedPolicyOverlay.severity
              } : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? {
                set: item.activatedPolicyOverlay.version
              } : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                set: item.activatedPolicyOverlay.status
              } : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? {
                set: item.activatedPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                set: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                set: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.triggeredByPolicyOverlay ? 
      typeof item.triggeredByPolicyOverlay === 'object' && Object.keys(item.triggeredByPolicyOverlay).length === 1 && (Object.keys(item.triggeredByPolicyOverlay)[0] === 'id' || Object.keys(item.triggeredByPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.triggeredByPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? {
                equals: item.triggeredByPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.triggeredByPolicyOverlay.status
              } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? {
                set: item.triggeredByPolicyOverlay.id
              } : undefined,
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? {
                set: item.triggeredByPolicyOverlay.overlayType
              } : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? {
                set: item.triggeredByPolicyOverlay.source
              } : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? {
                set: item.triggeredByPolicyOverlay.reason
              } : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? {
                set: item.triggeredByPolicyOverlay.severity
              } : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? {
                set: item.triggeredByPolicyOverlay.version
              } : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                set: item.triggeredByPolicyOverlay.status
              } : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? {
                set: item.triggeredByPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? {
                set: item.triggeredByPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.triggeredByPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.triggeredByPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                set: item.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                set: item.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? item.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? item.triggeredByPolicyOverlay.source : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? item.triggeredByPolicyOverlay.reason : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? item.triggeredByPolicyOverlay.severity : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? item.triggeredByPolicyOverlay.version : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? item.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? item.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? item.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? item.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.triggeredByPolicyOverlay ? 
        typeof item.triggeredByPolicyOverlay === 'object' && Object.keys(item.triggeredByPolicyOverlay).length === 1 && Object.keys(item.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? item.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? item.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? item.triggeredByPolicyOverlay.source : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? item.triggeredByPolicyOverlay.reason : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? item.triggeredByPolicyOverlay.severity : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? item.triggeredByPolicyOverlay.version : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? item.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? item.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? item.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? item.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
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
    allocation: prop.alpacaAccount.allocation ? 
      typeof prop.alpacaAccount.allocation === 'object' && Object.keys(prop.alpacaAccount.allocation).length === 1 && Object.keys(prop.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
          id: prop.alpacaAccount.allocation.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.alpacaAccount.allocation.id !== undefined ? prop.alpacaAccount.allocation.id : undefined,
          alpacaAccountId: prop.alpacaAccount.allocation.alpacaAccountId !== undefined ? prop.alpacaAccount.allocation.alpacaAccountId : undefined,
        },
        create: {
          equities: prop.alpacaAccount.allocation.equities !== undefined ? prop.alpacaAccount.allocation.equities : undefined,
          optionsContracts: prop.alpacaAccount.allocation.optionsContracts !== undefined ? prop.alpacaAccount.allocation.optionsContracts : undefined,
          futures: prop.alpacaAccount.allocation.futures !== undefined ? prop.alpacaAccount.allocation.futures : undefined,
          etfs: prop.alpacaAccount.allocation.etfs !== undefined ? prop.alpacaAccount.allocation.etfs : undefined,
          forex: prop.alpacaAccount.allocation.forex !== undefined ? prop.alpacaAccount.allocation.forex : undefined,
          crypto: prop.alpacaAccount.allocation.crypto !== undefined ? prop.alpacaAccount.allocation.crypto : undefined,
          stocks: prop.alpacaAccount.allocation.stocks !== undefined ? prop.alpacaAccount.allocation.stocks : undefined,
          options: prop.alpacaAccount.allocation.options !== undefined ? prop.alpacaAccount.allocation.options : undefined,
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
            jurisdiction: prop.alpacaAccount.user.customer.jurisdiction !== undefined ? prop.alpacaAccount.user.customer.jurisdiction : undefined,
            riskProfile: prop.alpacaAccount.user.customer.riskProfile !== undefined ? prop.alpacaAccount.user.customer.riskProfile : undefined,
            amlStatus: prop.alpacaAccount.user.customer.amlStatus !== undefined ? prop.alpacaAccount.user.customer.amlStatus : undefined,
            lastKycUpdate: prop.alpacaAccount.user.customer.lastKycUpdate !== undefined ? prop.alpacaAccount.user.customer.lastKycUpdate : undefined,
          },
        }
      } : undefined,
      accounts: prop.alpacaAccount.user.accounts ? 
        Array.isArray(prop.alpacaAccount.user.accounts) && prop.alpacaAccount.user.accounts.length > 0 &&  prop.alpacaAccount.user.accounts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.accounts.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.accounts.map((item) => ({
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
        Array.isArray(prop.alpacaAccount.user.sessions) && prop.alpacaAccount.user.sessions.length > 0 &&  prop.alpacaAccount.user.sessions.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.sessions.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.sessions.map((item) => ({
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
        Array.isArray(prop.alpacaAccount.user.authenticators) && prop.alpacaAccount.user.authenticators.length > 0 &&  prop.alpacaAccount.user.authenticators.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.authenticators.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.authenticators.map((item) => ({
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
        Array.isArray(prop.alpacaAccount.user.linkedProviders) && prop.alpacaAccount.user.linkedProviders.length > 0 &&  prop.alpacaAccount.user.linkedProviders.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.linkedProviders.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.linkedProviders.map((item) => ({
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
        Array.isArray(prop.alpacaAccount.user.accountLinkingRequests) && prop.alpacaAccount.user.accountLinkingRequests.length > 0 &&  prop.alpacaAccount.user.accountLinkingRequests.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.accountLinkingRequests.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.accountLinkingRequests.map((item) => ({
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
        Array.isArray(prop.alpacaAccount.user.reviewedWaitlistEntries) && prop.alpacaAccount.user.reviewedWaitlistEntries.length > 0 &&  prop.alpacaAccount.user.reviewedWaitlistEntries.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.reviewedWaitlistEntries.map((item) => ({
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
      Array.isArray(prop.alpacaAccount.alerts) && prop.alpacaAccount.alerts.length > 0 &&  prop.alpacaAccount.alerts.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.alpacaAccount.alerts.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.alpacaAccount.alerts.map((item) => ({
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
    accountRiskMetrics: prop.alpacaAccount.accountRiskMetrics ? 
      typeof prop.alpacaAccount.accountRiskMetrics === 'object' && Object.keys(prop.alpacaAccount.accountRiskMetrics).length === 1 && Object.keys(prop.alpacaAccount.accountRiskMetrics)[0] === 'id'
    ? { connect: {
          id: prop.alpacaAccount.accountRiskMetrics.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.alpacaAccount.accountRiskMetrics.id !== undefined ? prop.alpacaAccount.accountRiskMetrics.id : undefined,
          alpacaAccountId: prop.alpacaAccount.accountRiskMetrics.alpacaAccountId !== undefined ? prop.alpacaAccount.accountRiskMetrics.alpacaAccountId : undefined,
        },
        create: {
          currentRiskState: prop.alpacaAccount.accountRiskMetrics.currentRiskState !== undefined ? prop.alpacaAccount.accountRiskMetrics.currentRiskState : undefined,
          currentScopeState: prop.alpacaAccount.accountRiskMetrics.currentScopeState !== undefined ? prop.alpacaAccount.accountRiskMetrics.currentScopeState : undefined,
          riskStateChangedAt: prop.alpacaAccount.accountRiskMetrics.riskStateChangedAt !== undefined ? prop.alpacaAccount.accountRiskMetrics.riskStateChangedAt : undefined,
          riskStateChangedBy: prop.alpacaAccount.accountRiskMetrics.riskStateChangedBy !== undefined ? prop.alpacaAccount.accountRiskMetrics.riskStateChangedBy : undefined,
          riskStateChangeReason: prop.alpacaAccount.accountRiskMetrics.riskStateChangeReason !== undefined ? prop.alpacaAccount.accountRiskMetrics.riskStateChangeReason : undefined,
          accountHighWaterMark: prop.alpacaAccount.accountRiskMetrics.accountHighWaterMark !== undefined ? prop.alpacaAccount.accountRiskMetrics.accountHighWaterMark : undefined,
          accountHighWaterMarkAt: prop.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt !== undefined ? prop.alpacaAccount.accountRiskMetrics.accountHighWaterMarkAt : undefined,
          currentEquity: prop.alpacaAccount.accountRiskMetrics.currentEquity !== undefined ? prop.alpacaAccount.accountRiskMetrics.currentEquity : undefined,
          currentDrawdownPct: prop.alpacaAccount.accountRiskMetrics.currentDrawdownPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.currentDrawdownPct : undefined,
          intradayDrawdownPct: prop.alpacaAccount.accountRiskMetrics.intradayDrawdownPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.intradayDrawdownPct : undefined,
          maxDrawdownPctLifetime: prop.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime !== undefined ? prop.alpacaAccount.accountRiskMetrics.maxDrawdownPctLifetime : undefined,
          dailyPnlAmount: prop.alpacaAccount.accountRiskMetrics.dailyPnlAmount !== undefined ? prop.alpacaAccount.accountRiskMetrics.dailyPnlAmount : undefined,
          dailyPnlPct: prop.alpacaAccount.accountRiskMetrics.dailyPnlPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.dailyPnlPct : undefined,
          weeklyPnlAmount: prop.alpacaAccount.accountRiskMetrics.weeklyPnlAmount !== undefined ? prop.alpacaAccount.accountRiskMetrics.weeklyPnlAmount : undefined,
          weeklyPnlPct: prop.alpacaAccount.accountRiskMetrics.weeklyPnlPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.weeklyPnlPct : undefined,
          monthlyPnlAmount: prop.alpacaAccount.accountRiskMetrics.monthlyPnlAmount !== undefined ? prop.alpacaAccount.accountRiskMetrics.monthlyPnlAmount : undefined,
          monthlyPnlPct: prop.alpacaAccount.accountRiskMetrics.monthlyPnlPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.monthlyPnlPct : undefined,
          peakToTroughAmount: prop.alpacaAccount.accountRiskMetrics.peakToTroughAmount !== undefined ? prop.alpacaAccount.accountRiskMetrics.peakToTroughAmount : undefined,
          peakToTroughPct: prop.alpacaAccount.accountRiskMetrics.peakToTroughPct !== undefined ? prop.alpacaAccount.accountRiskMetrics.peakToTroughPct : undefined,
          nextRecoveryEligibleAt: prop.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt !== undefined ? prop.alpacaAccount.accountRiskMetrics.nextRecoveryEligibleAt : undefined,
          lastSyncedAt: prop.alpacaAccount.accountRiskMetrics.lastSyncedAt !== undefined ? prop.alpacaAccount.accountRiskMetrics.lastSyncedAt : undefined,
        },
      }
    } : undefined,
    strategyHealthSnapshots: prop.alpacaAccount.strategyHealthSnapshots ? 
      Array.isArray(prop.alpacaAccount.strategyHealthSnapshots) && prop.alpacaAccount.strategyHealthSnapshots.length > 0 &&  prop.alpacaAccount.strategyHealthSnapshots.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.alpacaAccount.strategyHealthSnapshots.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.alpacaAccount.strategyHealthSnapshots.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          strategyName: item.strategyName !== undefined ? item.strategyName : undefined,
          currentState: item.currentState !== undefined ? item.currentState : undefined,
          stateChangedAt: item.stateChangedAt !== undefined ? item.stateChangedAt : undefined,
          stateChangedReason: item.stateChangedReason !== undefined ? item.stateChangedReason : undefined,
          windowSize: item.windowSize !== undefined ? item.windowSize : undefined,
          windowTradeCount: item.windowTradeCount !== undefined ? item.windowTradeCount : undefined,
          windowHitRate: item.windowHitRate !== undefined ? item.windowHitRate : undefined,
          windowExpectancy: item.windowExpectancy !== undefined ? item.windowExpectancy : undefined,
          windowProfitFactor: item.windowProfitFactor !== undefined ? item.windowProfitFactor : undefined,
          windowSortino: item.windowSortino !== undefined ? item.windowSortino : undefined,
          windowMaxDrawdownPct: item.windowMaxDrawdownPct !== undefined ? item.windowMaxDrawdownPct : undefined,
          windowCumulativePnlAmt: item.windowCumulativePnlAmt !== undefined ? item.windowCumulativePnlAmt : undefined,
          backtestExpectancy: item.backtestExpectancy !== undefined ? item.backtestExpectancy : undefined,
          divergenceZScore: item.divergenceZScore !== undefined ? item.divergenceZScore : undefined,
          divergenceAlertActive: item.divergenceAlertActive !== undefined ? item.divergenceAlertActive : undefined,
          averageConfidence: item.averageConfidence !== undefined ? item.averageConfidence : undefined,
          confidenceTrend: item.confidenceTrend !== undefined ? item.confidenceTrend : undefined,
          lastUpdatedAt: item.lastUpdatedAt !== undefined ? item.lastUpdatedAt : undefined,
        },
      }))
    } : undefined,
    riskEscalationEvents: prop.alpacaAccount.riskEscalationEvents ? 
      Array.isArray(prop.alpacaAccount.riskEscalationEvents) && prop.alpacaAccount.riskEscalationEvents.length > 0 &&  prop.alpacaAccount.riskEscalationEvents.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.alpacaAccount.riskEscalationEvents.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.alpacaAccount.riskEscalationEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId 
             } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId 
             } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.triggeredByPolicyOverlay ? 
        typeof item.triggeredByPolicyOverlay === 'object' && Object.keys(item.triggeredByPolicyOverlay).length === 1 && Object.keys(item.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.triggeredByPolicyOverlay.id !== undefined ? item.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.triggeredByPolicyOverlay.overlayType !== undefined ? item.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.triggeredByPolicyOverlay.source !== undefined ? item.triggeredByPolicyOverlay.source : undefined,
            reason: item.triggeredByPolicyOverlay.reason !== undefined ? item.triggeredByPolicyOverlay.reason : undefined,
            severity: item.triggeredByPolicyOverlay.severity !== undefined ? item.triggeredByPolicyOverlay.severity : undefined,
            version: item.triggeredByPolicyOverlay.version !== undefined ? item.triggeredByPolicyOverlay.version : undefined,
            mutations: item.triggeredByPolicyOverlay.mutations !== undefined ? item.triggeredByPolicyOverlay.mutations : undefined,
            status: item.triggeredByPolicyOverlay.status !== undefined ? item.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.triggeredByPolicyOverlay.activatedAt !== undefined ? item.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.triggeredByPolicyOverlay.expiresAt !== undefined ? item.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.triggeredByPolicyOverlay.correlationId !== undefined ? item.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  overlays: prop.overlays ? 
  Array.isArray(prop.overlays) && prop.overlays.length > 0 && prop.overlays.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.overlays.map((item) => ({
    id: item.id
  }))
} : { upsert: prop.overlays.map((item) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        riskEscalationEventId: item.riskEscalationEventId !== undefined ? item.riskEscalationEventId : undefined,
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
    riskEscalationEvent: item.riskEscalationEvent ? 
    typeof item.riskEscalationEvent === 'object' && Object.keys(item.riskEscalationEvent).length === 1 && (Object.keys(item.riskEscalationEvent)[0] === 'id' || Object.keys(item.riskEscalationEvent)[0] === 'symbol')
? {
    connect: {
      id: item.riskEscalationEvent.id
    }
} : { upsert: {
        where: {
          id: item.riskEscalationEvent.id !== undefined ? {
              equals: item.riskEscalationEvent.id
            } : undefined,
          alpacaAccountId: item.riskEscalationEvent.alpacaAccountId !== undefined ? {
              equals: item.riskEscalationEvent.alpacaAccountId
            } : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? {
              equals: item.riskEscalationEvent.correlationId
            } : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? {
              equals: item.riskEscalationEvent.triggeringEventId
            } : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? {
              equals: item.riskEscalationEvent.actorUserId
            } : undefined,
          triggeredByPolicyOverlayId: item.riskEscalationEvent.triggeredByPolicyOverlayId !== undefined ? {
              equals: item.riskEscalationEvent.triggeredByPolicyOverlayId
            } : undefined,
        },
        update: {
          id: item.riskEscalationEvent.id !== undefined ? {
              set: item.riskEscalationEvent.id
            } : undefined,
          scopeKind: item.riskEscalationEvent.scopeKind !== undefined ? {
              set: item.riskEscalationEvent.scopeKind
            } : undefined,
          scopeValue: item.riskEscalationEvent.scopeValue !== undefined ? {
              set: item.riskEscalationEvent.scopeValue
            } : undefined,
          fromState: item.riskEscalationEvent.fromState !== undefined ? {
              set: item.riskEscalationEvent.fromState
            } : undefined,
          toState: item.riskEscalationEvent.toState !== undefined ? {
              set: item.riskEscalationEvent.toState
            } : undefined,
          reason: item.riskEscalationEvent.reason !== undefined ? {
              set: item.riskEscalationEvent.reason
            } : undefined,
          severity: item.riskEscalationEvent.severity !== undefined ? {
              set: item.riskEscalationEvent.severity
            } : undefined,
          triggeringObserver: item.riskEscalationEvent.triggeringObserver !== undefined ? {
              set: item.riskEscalationEvent.triggeringObserver
            } : undefined,
          observedValue: item.riskEscalationEvent.observedValue !== undefined ? {
              set: item.riskEscalationEvent.observedValue
            } : undefined,
          breachedThreshold: item.riskEscalationEvent.breachedThreshold !== undefined ? {
              set: item.riskEscalationEvent.breachedThreshold
            } : undefined,
          breachedThresholdKey: item.riskEscalationEvent.breachedThresholdKey !== undefined ? {
              set: item.riskEscalationEvent.breachedThresholdKey
            } : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? {
              set: item.riskEscalationEvent.correlationId
            } : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? {
              set: item.riskEscalationEvent.triggeringEventId
            } : undefined,
          actor: item.riskEscalationEvent.actor !== undefined ? {
              set: item.riskEscalationEvent.actor
            } : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? {
              set: item.riskEscalationEvent.actorUserId
            } : undefined,
          rationale: item.riskEscalationEvent.rationale !== undefined ? {
              set: item.riskEscalationEvent.rationale
            } : undefined,
      alpacaAccount: item.riskEscalationEvent.alpacaAccount ? 
      typeof item.riskEscalationEvent.alpacaAccount === 'object' && Object.keys(item.riskEscalationEvent.alpacaAccount).length === 1 && (Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'id' || Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.riskEscalationEvent.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.id
              } : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.type
              } : undefined,
            userId: item.riskEscalationEvent.alpacaAccount.userId !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.id
              } : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.type
              } : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.APIKey
              } : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.APISecret
              } : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.marketOpen
              } : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.deletedAt
              } : undefined,
          },
          create: {
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? item.riskEscalationEvent.alpacaAccount.type : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? item.riskEscalationEvent.alpacaAccount.APIKey : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? item.riskEscalationEvent.alpacaAccount.APISecret : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? item.riskEscalationEvent.alpacaAccount.marketOpen : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? item.riskEscalationEvent.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? item.riskEscalationEvent.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? item.riskEscalationEvent.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? item.riskEscalationEvent.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? item.riskEscalationEvent.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.riskEscalationEvent.triggeredByPolicyOverlay ? 
      typeof item.riskEscalationEvent.triggeredByPolicyOverlay === 'object' && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay).length === 1 && (Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'id' || Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.riskEscalationEvent.triggeredByPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.status
              } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.id
              } : undefined,
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType
              } : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.source
              } : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.reason
              } : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.severity
              } : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.version
              } : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.status
              } : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                set: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.source : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.reason : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.severity : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.version : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          scopeKind: item.riskEscalationEvent.scopeKind !== undefined ? item.riskEscalationEvent.scopeKind : undefined,
          scopeValue: item.riskEscalationEvent.scopeValue !== undefined ? item.riskEscalationEvent.scopeValue : undefined,
          fromState: item.riskEscalationEvent.fromState !== undefined ? item.riskEscalationEvent.fromState : undefined,
          toState: item.riskEscalationEvent.toState !== undefined ? item.riskEscalationEvent.toState : undefined,
          reason: item.riskEscalationEvent.reason !== undefined ? item.riskEscalationEvent.reason : undefined,
          severity: item.riskEscalationEvent.severity !== undefined ? item.riskEscalationEvent.severity : undefined,
          triggeringObserver: item.riskEscalationEvent.triggeringObserver !== undefined ? item.riskEscalationEvent.triggeringObserver : undefined,
          observedValue: item.riskEscalationEvent.observedValue !== undefined ? item.riskEscalationEvent.observedValue : undefined,
          breachedThreshold: item.riskEscalationEvent.breachedThreshold !== undefined ? item.riskEscalationEvent.breachedThreshold : undefined,
          breachedThresholdKey: item.riskEscalationEvent.breachedThresholdKey !== undefined ? item.riskEscalationEvent.breachedThresholdKey : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? item.riskEscalationEvent.correlationId : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? item.riskEscalationEvent.triggeringEventId : undefined,
          actor: item.riskEscalationEvent.actor !== undefined ? item.riskEscalationEvent.actor : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? item.riskEscalationEvent.actorUserId : undefined,
          rationale: item.riskEscalationEvent.rationale !== undefined ? item.riskEscalationEvent.rationale : undefined,
      alpacaAccount: item.riskEscalationEvent.alpacaAccount ? 
        typeof item.riskEscalationEvent.alpacaAccount === 'object' && Object.keys(item.riskEscalationEvent.alpacaAccount).length === 1 && Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? item.riskEscalationEvent.alpacaAccount.id : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.type 
               } : undefined,
            userId: item.riskEscalationEvent.alpacaAccount.userId !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? item.riskEscalationEvent.alpacaAccount.type : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? item.riskEscalationEvent.alpacaAccount.APIKey : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? item.riskEscalationEvent.alpacaAccount.APISecret : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? item.riskEscalationEvent.alpacaAccount.marketOpen : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? item.riskEscalationEvent.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? item.riskEscalationEvent.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? item.riskEscalationEvent.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? item.riskEscalationEvent.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? item.riskEscalationEvent.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.riskEscalationEvent.triggeredByPolicyOverlay ? 
        typeof item.riskEscalationEvent.triggeredByPolicyOverlay === 'object' && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay).length === 1 && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.source : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.reason : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.severity : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.version : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    triggeredRiskEvents: item.triggeredRiskEvents ? 
    Array.isArray(item.triggeredRiskEvents) && item.triggeredRiskEvents.length > 0 && item.triggeredRiskEvents.every((item: unknown) => typeof item === 'object' && item !== null && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.triggeredRiskEvents.map((item) => ({
      id: item.id
    }))
} : { upsert: item.triggeredRiskEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId
            } : undefined,
          triggeredByPolicyOverlayId: item.triggeredByPolicyOverlayId !== undefined ? {
              equals: item.triggeredByPolicyOverlayId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          scopeKind: item.scopeKind !== undefined ? {
              set: item.scopeKind
            } : undefined,
          scopeValue: item.scopeValue !== undefined ? {
              set: item.scopeValue
            } : undefined,
          fromState: item.fromState !== undefined ? {
              set: item.fromState
            } : undefined,
          toState: item.toState !== undefined ? {
              set: item.toState
            } : undefined,
          reason: item.reason !== undefined ? {
              set: item.reason
            } : undefined,
          severity: item.severity !== undefined ? {
              set: item.severity
            } : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? {
              set: item.triggeringObserver
            } : undefined,
          observedValue: item.observedValue !== undefined ? {
              set: item.observedValue
            } : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? {
              set: item.breachedThreshold
            } : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? {
              set: item.breachedThresholdKey
            } : undefined,
          correlationId: item.correlationId !== undefined ? {
              set: item.correlationId
            } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              set: item.triggeringEventId
            } : undefined,
          actor: item.actor !== undefined ? {
              set: item.actor
            } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              set: item.actorUserId
            } : undefined,
          rationale: item.rationale !== undefined ? {
              set: item.rationale
            } : undefined,
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && (Object.keys(item.alpacaAccount)[0] === 'id' || Object.keys(item.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id
              } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                equals: item.alpacaAccount.type
              } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id
              } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type
              } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey
              } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret
              } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen
              } : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? {
                set: item.alpacaAccount.realTime
              } : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? {
                set: item.alpacaAccount.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.tradeAllocationPct
              } : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? {
                set: item.alpacaAccount.autoAllocation
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.alpacaAccount.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
                set: item.alpacaAccount.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
                set: item.alpacaAccount.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
                set: item.alpacaAccount.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
                set: item.alpacaAccount.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
                set: item.alpacaAccount.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? {
                set: item.alpacaAccount.deletedAt
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? item.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? item.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? item.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
      typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && (Object.keys(item.activatedPolicyOverlay)[0] === 'id' || Object.keys(item.activatedPolicyOverlay)[0] === 'symbol')
? {
      connect: {
        id: item.activatedPolicyOverlay.id
      }
} : { upsert: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                equals: item.activatedPolicyOverlay.id
              } : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId
              } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.riskEscalationEventId
              } : undefined,
          },
          update: {
            id: item.activatedPolicyOverlay.id !== undefined ? {
                set: item.activatedPolicyOverlay.id
              } : undefined,
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? {
                set: item.activatedPolicyOverlay.overlayType
              } : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? {
                set: item.activatedPolicyOverlay.source
              } : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? {
                set: item.activatedPolicyOverlay.reason
              } : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? {
                set: item.activatedPolicyOverlay.severity
              } : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? {
                set: item.activatedPolicyOverlay.version
              } : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                set: item.activatedPolicyOverlay.status
              } : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.activatedAt
              } : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? {
                set: item.activatedPolicyOverlay.expiresAt
              } : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedAt
              } : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? {
                set: item.activatedPolicyOverlay.deactivatedBy
              } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                set: item.activatedPolicyOverlay.correlationId
              } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                set: item.activatedPolicyOverlay.triggerEventId
              } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                equals: item.alpacaAccount.type 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? item.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? item.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? item.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
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
    riskEscalationEvent: item.riskEscalationEvent ? 
      typeof item.riskEscalationEvent === 'object' && Object.keys(item.riskEscalationEvent).length === 1 && Object.keys(item.riskEscalationEvent)[0] === 'id'
    ? { connect: {
          id: item.riskEscalationEvent.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.riskEscalationEvent.id !== undefined ? item.riskEscalationEvent.id : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? {
              equals: item.riskEscalationEvent.correlationId 
             } : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? {
              equals: item.riskEscalationEvent.triggeringEventId 
             } : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? {
              equals: item.riskEscalationEvent.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.riskEscalationEvent.scopeKind !== undefined ? item.riskEscalationEvent.scopeKind : undefined,
          scopeValue: item.riskEscalationEvent.scopeValue !== undefined ? item.riskEscalationEvent.scopeValue : undefined,
          fromState: item.riskEscalationEvent.fromState !== undefined ? item.riskEscalationEvent.fromState : undefined,
          toState: item.riskEscalationEvent.toState !== undefined ? item.riskEscalationEvent.toState : undefined,
          reason: item.riskEscalationEvent.reason !== undefined ? item.riskEscalationEvent.reason : undefined,
          severity: item.riskEscalationEvent.severity !== undefined ? item.riskEscalationEvent.severity : undefined,
          triggeringObserver: item.riskEscalationEvent.triggeringObserver !== undefined ? item.riskEscalationEvent.triggeringObserver : undefined,
          observedValue: item.riskEscalationEvent.observedValue !== undefined ? item.riskEscalationEvent.observedValue : undefined,
          breachedThreshold: item.riskEscalationEvent.breachedThreshold !== undefined ? item.riskEscalationEvent.breachedThreshold : undefined,
          breachedThresholdKey: item.riskEscalationEvent.breachedThresholdKey !== undefined ? item.riskEscalationEvent.breachedThresholdKey : undefined,
          correlationId: item.riskEscalationEvent.correlationId !== undefined ? item.riskEscalationEvent.correlationId : undefined,
          triggeringEventId: item.riskEscalationEvent.triggeringEventId !== undefined ? item.riskEscalationEvent.triggeringEventId : undefined,
          actor: item.riskEscalationEvent.actor !== undefined ? item.riskEscalationEvent.actor : undefined,
          actorUserId: item.riskEscalationEvent.actorUserId !== undefined ? item.riskEscalationEvent.actorUserId : undefined,
          rationale: item.riskEscalationEvent.rationale !== undefined ? item.riskEscalationEvent.rationale : undefined,
      alpacaAccount: item.riskEscalationEvent.alpacaAccount ? 
        typeof item.riskEscalationEvent.alpacaAccount === 'object' && Object.keys(item.riskEscalationEvent.alpacaAccount).length === 1 && Object.keys(item.riskEscalationEvent.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.alpacaAccount.id !== undefined ? item.riskEscalationEvent.alpacaAccount.id : undefined,
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.type 
               } : undefined,
            userId: item.riskEscalationEvent.alpacaAccount.userId !== undefined ? {
                equals: item.riskEscalationEvent.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.riskEscalationEvent.alpacaAccount.type !== undefined ? item.riskEscalationEvent.alpacaAccount.type : undefined,
            APIKey: item.riskEscalationEvent.alpacaAccount.APIKey !== undefined ? item.riskEscalationEvent.alpacaAccount.APIKey : undefined,
            APISecret: item.riskEscalationEvent.alpacaAccount.APISecret !== undefined ? item.riskEscalationEvent.alpacaAccount.APISecret : undefined,
            configuration: item.riskEscalationEvent.alpacaAccount.configuration !== undefined ? item.riskEscalationEvent.alpacaAccount.configuration : undefined,
            marketOpen: item.riskEscalationEvent.alpacaAccount.marketOpen !== undefined ? item.riskEscalationEvent.alpacaAccount.marketOpen : undefined,
            realTime: item.riskEscalationEvent.alpacaAccount.realTime !== undefined ? item.riskEscalationEvent.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.riskEscalationEvent.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.riskEscalationEvent.alpacaAccount.tradeAllocationPct !== undefined ? item.riskEscalationEvent.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.riskEscalationEvent.alpacaAccount.autoAllocation !== undefined ? item.riskEscalationEvent.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.riskEscalationEvent.alpacaAccount.minPercentageChange !== undefined ? item.riskEscalationEvent.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.riskEscalationEvent.alpacaAccount.volumeThreshold !== undefined ? item.riskEscalationEvent.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.riskEscalationEvent.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.riskEscalationEvent.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.riskEscalationEvent.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.riskEscalationEvent.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.riskEscalationEvent.alpacaAccount.deletedAt !== undefined ? item.riskEscalationEvent.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      triggeredByPolicyOverlay: item.riskEscalationEvent.triggeredByPolicyOverlay ? 
        typeof item.riskEscalationEvent.triggeredByPolicyOverlay === 'object' && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay).length === 1 && Object.keys(item.riskEscalationEvent.triggeredByPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.riskEscalationEvent.triggeredByPolicyOverlay.id !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.id : undefined,
            riskEscalationEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.status 
               } : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.overlayType : undefined,
            source: item.riskEscalationEvent.triggeredByPolicyOverlay.source !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.source : undefined,
            reason: item.riskEscalationEvent.triggeredByPolicyOverlay.reason !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.reason : undefined,
            severity: item.riskEscalationEvent.triggeredByPolicyOverlay.severity !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.severity : undefined,
            version: item.riskEscalationEvent.triggeredByPolicyOverlay.version !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.version : undefined,
            mutations: item.riskEscalationEvent.triggeredByPolicyOverlay.mutations !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.mutations : undefined,
            status: item.riskEscalationEvent.triggeredByPolicyOverlay.status !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.status : undefined,
            activatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.activatedAt : undefined,
            expiresAt: item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.correlationId : undefined,
            triggerEventId: item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId !== undefined ? item.riskEscalationEvent.triggeredByPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    triggeredRiskEvents: item.triggeredRiskEvents ? 
      Array.isArray(item.triggeredRiskEvents) && item.triggeredRiskEvents.length > 0 &&  item.triggeredRiskEvents.every((item: unknown) => typeof item === 'object' && item !== null && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.triggeredRiskEvents.map((item) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.triggeredRiskEvents.map((item) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          correlationId: item.correlationId !== undefined ? {
              equals: item.correlationId 
             } : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? {
              equals: item.triggeringEventId 
             } : undefined,
          actorUserId: item.actorUserId !== undefined ? {
              equals: item.actorUserId 
             } : undefined,
        },
        create: {
          scopeKind: item.scopeKind !== undefined ? item.scopeKind : undefined,
          scopeValue: item.scopeValue !== undefined ? item.scopeValue : undefined,
          fromState: item.fromState !== undefined ? item.fromState : undefined,
          toState: item.toState !== undefined ? item.toState : undefined,
          reason: item.reason !== undefined ? item.reason : undefined,
          severity: item.severity !== undefined ? item.severity : undefined,
          triggeringObserver: item.triggeringObserver !== undefined ? item.triggeringObserver : undefined,
          observedValue: item.observedValue !== undefined ? item.observedValue : undefined,
          breachedThreshold: item.breachedThreshold !== undefined ? item.breachedThreshold : undefined,
          breachedThresholdKey: item.breachedThresholdKey !== undefined ? item.breachedThresholdKey : undefined,
          correlationId: item.correlationId !== undefined ? item.correlationId : undefined,
          triggeringEventId: item.triggeringEventId !== undefined ? item.triggeringEventId : undefined,
          actor: item.actor !== undefined ? item.actor : undefined,
          actorUserId: item.actorUserId !== undefined ? item.actorUserId : undefined,
          rationale: item.rationale !== undefined ? item.rationale : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                equals: item.alpacaAccount.type 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            cryptoTradingEnabled: item.alpacaAccount.cryptoTradingEnabled !== undefined ? item.alpacaAccount.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.alpacaAccount.cryptoTradingPairs !== undefined ? {
                set: item.alpacaAccount.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.alpacaAccount.cryptoTradeAllocationPct !== undefined ? item.alpacaAccount.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            autoAllocation: item.alpacaAccount.autoAllocation !== undefined ? item.alpacaAccount.autoAllocation : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? item.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? item.alpacaAccount.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? item.alpacaAccount.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? item.alpacaAccount.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? item.alpacaAccount.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.alpacaAccount.minimumPriceChangePercent100 !== undefined ? item.alpacaAccount.minimumPriceChangePercent100 : undefined,
            deletedAt: item.alpacaAccount.deletedAt !== undefined ? item.alpacaAccount.deletedAt : undefined,
          },
        }
      } : undefined,
      activatedPolicyOverlay: item.activatedPolicyOverlay ? 
        typeof item.activatedPolicyOverlay === 'object' && Object.keys(item.activatedPolicyOverlay).length === 1 && Object.keys(item.activatedPolicyOverlay)[0] === 'id'
    ? { connect: {
            id: item.activatedPolicyOverlay.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.activatedPolicyOverlay.id !== undefined ? item.activatedPolicyOverlay.id : undefined,
            riskEscalationEventId: item.activatedPolicyOverlay.riskEscalationEventId !== undefined ? item.activatedPolicyOverlay.riskEscalationEventId : undefined,
            tradingPolicyId: item.activatedPolicyOverlay.tradingPolicyId !== undefined ? {
                equals: item.activatedPolicyOverlay.tradingPolicyId 
               } : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? {
                equals: item.activatedPolicyOverlay.status 
               } : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? {
                equals: item.activatedPolicyOverlay.correlationId 
               } : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? {
                equals: item.activatedPolicyOverlay.triggerEventId 
               } : undefined,
          },
          create: {
            overlayType: item.activatedPolicyOverlay.overlayType !== undefined ? item.activatedPolicyOverlay.overlayType : undefined,
            source: item.activatedPolicyOverlay.source !== undefined ? item.activatedPolicyOverlay.source : undefined,
            reason: item.activatedPolicyOverlay.reason !== undefined ? item.activatedPolicyOverlay.reason : undefined,
            severity: item.activatedPolicyOverlay.severity !== undefined ? item.activatedPolicyOverlay.severity : undefined,
            version: item.activatedPolicyOverlay.version !== undefined ? item.activatedPolicyOverlay.version : undefined,
            mutations: item.activatedPolicyOverlay.mutations !== undefined ? item.activatedPolicyOverlay.mutations : undefined,
            status: item.activatedPolicyOverlay.status !== undefined ? item.activatedPolicyOverlay.status : undefined,
            activatedAt: item.activatedPolicyOverlay.activatedAt !== undefined ? item.activatedPolicyOverlay.activatedAt : undefined,
            expiresAt: item.activatedPolicyOverlay.expiresAt !== undefined ? item.activatedPolicyOverlay.expiresAt : undefined,
            deactivatedAt: item.activatedPolicyOverlay.deactivatedAt !== undefined ? item.activatedPolicyOverlay.deactivatedAt : undefined,
            deactivatedBy: item.activatedPolicyOverlay.deactivatedBy !== undefined ? item.activatedPolicyOverlay.deactivatedBy : undefined,
            correlationId: item.activatedPolicyOverlay.correlationId !== undefined ? item.activatedPolicyOverlay.correlationId : undefined,
            triggerEventId: item.activatedPolicyOverlay.triggerEventId !== undefined ? item.activatedPolicyOverlay.triggerEventId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_TRADINGPOLICY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyTradingPolicy) {
          return response.data.updateManyTradingPolicy;
        } else {
          return null;
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
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
          logger.error("Non-retryable constraint violation in updateManyTradingPolicy", {
            operation: 'updateManyTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in updateManyTradingPolicy, retrying...", {
            operation: 'updateManyTradingPolicy',
            model: 'TradingPolicy',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database updateMany operation failed (transient after retries)", {
            operation: 'updateManyTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database updateMany operation failed", {
            operation: 'updateManyTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single TradingPolicy record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted TradingPolicy or null.
   */
  async delete(props: TradingPolicyType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradingPolicyType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

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

        const DELETE_ONE_TRADINGPOLICY = gql`
          mutation deleteOneTradingPolicy($where: TradingPolicyWhereUniqueInput!) {
            deleteOneTradingPolicy(where: $where) {
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
          mutation: DELETE_ONE_TRADINGPOLICY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneTradingPolicy) {
          return response.data.deleteOneTradingPolicy;
        } else {
          return null as unknown as TradingPolicyType;
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
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
          logger.error("Non-retryable constraint violation in deleteOneTradingPolicy", {
            operation: 'deleteOneTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            recordId: props.id,
            constraintName: constraintMatch ? constraintMatch[1] : undefined,
            errorCategory: 'CONSTRAINT_VIOLATION',
            isRetryable: false,
          });
          throw error;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in deleteOneTradingPolicy, retrying...", {
            operation: 'deleteOneTradingPolicy',
            model: 'TradingPolicy',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database delete operation failed (transient after retries)", {
            operation: 'deleteOneTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            recordId: props.id,
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database delete operation failed", {
            operation: 'deleteOneTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            recordId: props.id,
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single TradingPolicy record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved TradingPolicy or null.
   */
  async get(props: TradingPolicyType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: Record<string, unknown>): Promise<TradingPolicyType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

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

        const GET_TRADINGPOLICY = gql`
          query getTradingPolicy($where: TradingPolicyWhereUniqueInput!) {
            getTradingPolicy(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
  miniModelId: props.miniModelId !== undefined ? {
    equals: props.miniModelId 
  } : undefined,
  normalModelId: props.normalModelId !== undefined ? {
    equals: props.normalModelId 
  } : undefined,
  advancedModelId: props.advancedModelId !== undefined ? {
    equals: props.advancedModelId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_TRADINGPOLICY,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getTradingPolicy ?? null;
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No TradingPolicy found') {
          return null;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in getTradingPolicy, retrying...", {
            operation: 'getTradingPolicy',
            model: 'TradingPolicy',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database get operation failed (transient after retries)", {
            operation: 'getTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database get operation failed", {
            operation: 'getTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all TradingPolicies records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of TradingPolicy records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradingPolicyType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

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

        const GET_ALL_TRADINGPOLICY = gql`
          query getAllTradingPolicy {
            tradingPolicies {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_TRADINGPOLICY,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.tradingPolicies ?? null;
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No TradingPolicy found') {
          return null;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in getAllTradingPolicy, retrying...", {
            operation: 'getAllTradingPolicy',
            model: 'TradingPolicy',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database getAll operation failed (transient after retries)", {
            operation: 'getAllTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database getAll operation failed", {
            operation: 'getAllTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple TradingPolicy records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found TradingPolicy records or null.
   */
  async findMany(props: TradingPolicyType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: Record<string, unknown>): Promise<TradingPolicyType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: unknown = null;

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

        const FIND_MANY_TRADINGPOLICY = gql`
          query findManyTradingPolicy($where: TradingPolicyWhereInput!) {
            tradingPolicies(where: $where) {
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
  miniModelId: props.miniModelId !== undefined ? {
    equals: props.miniModelId 
  } : undefined,
  normalModelId: props.normalModelId !== undefined ? {
    equals: props.normalModelId 
  } : undefined,
  advancedModelId: props.advancedModelId !== undefined ? {
    equals: props.advancedModelId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        // Validate that we have at least one filter criteria
        // GraphQL requires a non-empty where clause for findMany
        if (!filteredVariables || !filteredVariables.where || Object.keys(filteredVariables.where).length === 0) {
          throw new Error(`findManyTradingPolicy requires at least one filter criterion. Received empty where clause.`);
        }

        const response = await client.query({
          query: FIND_MANY_TRADINGPOLICY,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.tradingPolicies) {
          return response.data.tradingPolicies;
        } else {
          return [] as TradingPolicyType[];
        }
      } catch (caughtError: unknown) {
        const error = caughtError as Error & { networkError?: { message?: string } };
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No TradingPolicy found') {
          return null;
        }

        // Check if this is a database connection error that we should retry.
        // Covers undici/fetch timeouts, Prisma Accelerate transients, connection
        // pool exhaustion, and transient gateway statuses. Must stay consistent
        // with the transient classifier in client.ts (onError link + enqueueOperation).
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('aborted due to timeout') ||
          error.message?.includes('TimeoutError') ||
          error.message?.includes('fetch failed') ||
          error.message?.includes('socket hang up') ||
          error.message?.includes('ECONNRESET') ||
          error.message?.includes('ECONNREFUSED') ||
          error.message?.includes('ETIMEDOUT') ||
          error.message?.includes('Connection pool timeout') ||
          error.message?.includes('P2024') ||
          error.message?.includes('status code 408') ||
          error.message?.includes('status code 502') ||
          error.message?.includes('status code 503') ||
          error.message?.includes('status code 504') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && (
            error.networkError.message?.includes('Failed to fetch') ||
            error.networkError.message?.includes('fetch failed') ||
            error.networkError.message?.includes('aborted due to timeout') ||
            error.networkError.message?.includes('TimeoutError')
          ));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error in findManyTradingPolicy, retrying...", {
            operation: 'findManyTradingPolicy',
            model: 'TradingPolicy',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow (transient -> WARN).
        if (isConnectionError) {
          logger.warn("Database findMany operation failed (transient after retries)", {
            operation: 'findManyTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            isRetryable: true,
            transient: true,
            recoveryHint: "Upstream caller should retry on next cycle",
          });
        } else {
          logger.error("Database findMany operation failed", {
            operation: 'findManyTradingPolicy',
            model: 'TradingPolicy',
            error: String(error),
            isRetryable: false,
          });
        }
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  }
};
