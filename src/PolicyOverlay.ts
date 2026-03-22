
  
import { PolicyOverlay as PolicyOverlayType } from './generated/typegraphql-prisma/models/PolicyOverlay';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the PolicyOverlay model.
   */

  const selectionSet = `
    
  id
  tradingPolicyId
  tradingPolicy {
    id
    alpacaAccountId
    alpacaAccount {
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
        }
        accountLinkingRequests {
id
        }
        reviewedWaitlistEntries {
id
        }
        llmConfiguration {
id
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

  `;

  export const PolicyOverlay = {

    /**
     * Create a new PolicyOverlay record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created PolicyOverlay or null.
     */

    /**
     * Create a new PolicyOverlay record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created PolicyOverlay or null.
     */
    async create(props: PolicyOverlayType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<PolicyOverlayType> {
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

          const CREATE_ONE_POLICYOVERLAY = gql`
              mutation createOnePolicyOverlay($data: PolicyOverlayCreateInput!) {
                createOnePolicyOverlay(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                overlayType: props.overlayType !== undefined ? props.overlayType : undefined,
  source: props.source !== undefined ? props.source : undefined,
  reason: props.reason !== undefined ? props.reason : undefined,
  severity: props.severity !== undefined ? props.severity : undefined,
  version: props.version !== undefined ? props.version : undefined,
  mutations: props.mutations !== undefined ? props.mutations : undefined,
  status: props.status !== undefined ? props.status : undefined,
  activatedAt: props.activatedAt !== undefined ? props.activatedAt : undefined,
  expiresAt: props.expiresAt !== undefined ? props.expiresAt : undefined,
  deactivatedAt: props.deactivatedAt !== undefined ? props.deactivatedAt : undefined,
  deactivatedBy: props.deactivatedBy !== undefined ? props.deactivatedBy : undefined,
  correlationId: props.correlationId !== undefined ? props.correlationId : undefined,
  triggerEventId: props.triggerEventId !== undefined ? props.triggerEventId : undefined,
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
    alpacaAccount: props.tradingPolicy.alpacaAccount ? 
      typeof props.tradingPolicy.alpacaAccount === 'object' && Object.keys(props.tradingPolicy.alpacaAccount).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.tradingPolicy.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.tradingPolicy.alpacaAccount.id !== undefined ? props.tradingPolicy.alpacaAccount.id : undefined,
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.type 
             } : undefined,
          userId: props.tradingPolicy.alpacaAccount.userId !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? props.tradingPolicy.alpacaAccount.type : undefined,
          APIKey: props.tradingPolicy.alpacaAccount.APIKey !== undefined ? props.tradingPolicy.alpacaAccount.APIKey : undefined,
          APISecret: props.tradingPolicy.alpacaAccount.APISecret !== undefined ? props.tradingPolicy.alpacaAccount.APISecret : undefined,
          configuration: props.tradingPolicy.alpacaAccount.configuration !== undefined ? props.tradingPolicy.alpacaAccount.configuration : undefined,
          marketOpen: props.tradingPolicy.alpacaAccount.marketOpen !== undefined ? props.tradingPolicy.alpacaAccount.marketOpen : undefined,
          realTime: props.tradingPolicy.alpacaAccount.realTime !== undefined ? props.tradingPolicy.alpacaAccount.realTime : undefined,
          cryptoTradingEnabled: props.tradingPolicy.alpacaAccount.cryptoTradingEnabled !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.tradingPolicy.alpacaAccount.cryptoTradingPairs !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.tradingPolicy.alpacaAccount.tradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.tradeAllocationPct : undefined,
          autoAllocation: props.tradingPolicy.alpacaAccount.autoAllocation !== undefined ? props.tradingPolicy.alpacaAccount.autoAllocation : undefined,
          minPercentageChange: props.tradingPolicy.alpacaAccount.minPercentageChange !== undefined ? props.tradingPolicy.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.tradingPolicy.alpacaAccount.volumeThreshold !== undefined ? props.tradingPolicy.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.tradingPolicy.alpacaAccount.portfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 !== undefined ? props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.tradingPolicy.alpacaAccount.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.deletedAt : undefined,
      allocation: props.tradingPolicy.alpacaAccount.allocation ? 
        typeof props.tradingPolicy.alpacaAccount.allocation === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.allocation).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.allocation.id !== undefined ? props.tradingPolicy.alpacaAccount.allocation.id : undefined,
            alpacaAccountId: props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId !== undefined ? props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId : undefined,
          },
          create: {
            equities: props.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? props.tradingPolicy.alpacaAccount.allocation.equities : undefined,
            optionsContracts: props.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? props.tradingPolicy.alpacaAccount.allocation.optionsContracts : undefined,
            futures: props.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? props.tradingPolicy.alpacaAccount.allocation.futures : undefined,
            etfs: props.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? props.tradingPolicy.alpacaAccount.allocation.etfs : undefined,
            forex: props.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? props.tradingPolicy.alpacaAccount.allocation.forex : undefined,
            crypto: props.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? props.tradingPolicy.alpacaAccount.allocation.crypto : undefined,
            stocks: props.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? props.tradingPolicy.alpacaAccount.allocation.stocks : undefined,
            options: props.tradingPolicy.alpacaAccount.allocation.options !== undefined ? props.tradingPolicy.alpacaAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      user: props.tradingPolicy.alpacaAccount.user ? 
        typeof props.tradingPolicy.alpacaAccount.user === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.user).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.user.id !== undefined ? props.tradingPolicy.alpacaAccount.user.id : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? props.tradingPolicy.alpacaAccount.user.name : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            emailVerified: props.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? props.tradingPolicy.alpacaAccount.user.emailVerified : undefined,
            image: props.tradingPolicy.alpacaAccount.user.image !== undefined ? props.tradingPolicy.alpacaAccount.user.image : undefined,
            deletedAt: props.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.user.deletedAt : undefined,
            role: props.tradingPolicy.alpacaAccount.user.role !== undefined ? props.tradingPolicy.alpacaAccount.user.role : undefined,
            bio: props.tradingPolicy.alpacaAccount.user.bio !== undefined ? props.tradingPolicy.alpacaAccount.user.bio : undefined,
            jobTitle: props.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? props.tradingPolicy.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? props.tradingPolicy.alpacaAccount.user.currentAccount : undefined,
            plan: props.tradingPolicy.alpacaAccount.user.plan !== undefined ? props.tradingPolicy.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      alerts: props.tradingPolicy.alpacaAccount.alerts ? 
        Array.isArray(props.tradingPolicy.alpacaAccount.alerts) && props.tradingPolicy.alpacaAccount.alerts.length > 0 &&  props.tradingPolicy.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
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
    }
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_POLICYOVERLAY,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOnePolicyOverlay) {
            return response.data.createOnePolicyOverlay;
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
            logger.error("Non-retryable constraint violation in createOnePolicyOverlay", {
              operation: 'createOnePolicyOverlay',
              model: 'PolicyOverlay',
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
            logger.warn("Database connection error in createOnePolicyOverlay, retrying...", {
              operation: 'createOnePolicyOverlay',
              model: 'PolicyOverlay',
              attempt: retryCount,
              maxRetries: MAX_RETRIES,
            });
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log structured error details and rethrow
          logger.error("Database create operation failed", {
            operation: 'createOnePolicyOverlay',
            model: 'PolicyOverlay',
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
   * Create multiple PolicyOverlay records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of PolicyOverlay objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: PolicyOverlayType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_POLICYOVERLAY = gql`
          mutation createManyPolicyOverlay($data: [PolicyOverlayCreateManyInput!]!) {
            createManyPolicyOverlay(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      tradingPolicyId: prop.tradingPolicyId !== undefined ? prop.tradingPolicyId : undefined,
  overlayType: prop.overlayType !== undefined ? prop.overlayType : undefined,
  source: prop.source !== undefined ? prop.source : undefined,
  reason: prop.reason !== undefined ? prop.reason : undefined,
  severity: prop.severity !== undefined ? prop.severity : undefined,
  version: prop.version !== undefined ? prop.version : undefined,
  mutations: prop.mutations !== undefined ? prop.mutations : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  activatedAt: prop.activatedAt !== undefined ? prop.activatedAt : undefined,
  expiresAt: prop.expiresAt !== undefined ? prop.expiresAt : undefined,
  deactivatedAt: prop.deactivatedAt !== undefined ? prop.deactivatedAt : undefined,
  deactivatedBy: prop.deactivatedBy !== undefined ? prop.deactivatedBy : undefined,
  correlationId: prop.correlationId !== undefined ? prop.correlationId : undefined,
  triggerEventId: prop.triggerEventId !== undefined ? prop.triggerEventId : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_POLICYOVERLAY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyPolicyOverlay) {
          return response.data.createManyPolicyOverlay;
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
          logger.error("Non-retryable constraint violation in createManyPolicyOverlay", {
            operation: 'createManyPolicyOverlay',
            model: 'PolicyOverlay',
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
          logger.warn("Database connection error in createManyPolicyOverlay, retrying...", {
            operation: 'createManyPolicyOverlay',
            model: 'PolicyOverlay',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database createMany operation failed", {
          operation: 'createManyPolicyOverlay',
          model: 'PolicyOverlay',
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
   * Update a single PolicyOverlay record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated PolicyOverlay or null.
   */
  async update(props: PolicyOverlayType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<PolicyOverlayType> {
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

        const UPDATE_ONE_POLICYOVERLAY = gql`
          mutation updateOnePolicyOverlay($data: PolicyOverlayUpdateInput!, $where: PolicyOverlayWhereUniqueInput!) {
            updateOnePolicyOverlay(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  tradingPolicyId: props.tradingPolicyId !== undefined ? {
    equals: props.tradingPolicyId 
  } : undefined,
  status: props.status !== undefined ? {
    equals: props.status 
  } : undefined,
  correlationId: props.correlationId !== undefined ? {
    equals: props.correlationId 
  } : undefined,
  triggerEventId: props.triggerEventId !== undefined ? {
    equals: props.triggerEventId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  overlayType: props.overlayType !== undefined ? {
            set: props.overlayType 
           } : undefined,
  source: props.source !== undefined ? {
            set: props.source 
           } : undefined,
  reason: props.reason !== undefined ? {
            set: props.reason 
           } : undefined,
  severity: props.severity !== undefined ? {
            set: props.severity 
           } : undefined,
  version: props.version !== undefined ? {
            set: props.version 
           } : undefined,
  mutations: props.mutations !== undefined ? {
            set: props.mutations 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  activatedAt: props.activatedAt !== undefined ? {
            set: props.activatedAt 
           } : undefined,
  expiresAt: props.expiresAt !== undefined ? {
            set: props.expiresAt 
           } : undefined,
  deactivatedAt: props.deactivatedAt !== undefined ? {
            set: props.deactivatedAt 
           } : undefined,
  deactivatedBy: props.deactivatedBy !== undefined ? {
            set: props.deactivatedBy 
           } : undefined,
  correlationId: props.correlationId !== undefined ? {
            set: props.correlationId 
           } : undefined,
  triggerEventId: props.triggerEventId !== undefined ? {
            set: props.triggerEventId 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
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
    alpacaAccount: props.tradingPolicy.alpacaAccount ? 
    typeof props.tradingPolicy.alpacaAccount === 'object' && Object.keys(props.tradingPolicy.alpacaAccount).length === 1 && (Object.keys(props.tradingPolicy.alpacaAccount)[0] === 'id' || Object.keys(props.tradingPolicy.alpacaAccount)[0] === 'symbol')
? {
    connect: {
      id: props.tradingPolicy.alpacaAccount.id
    }
} : { upsert: {
        where: {
          id: props.tradingPolicy.alpacaAccount.id !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.id
            } : undefined,
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.type
            } : undefined,
          userId: props.tradingPolicy.alpacaAccount.userId !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.userId
            } : undefined,
        },
        update: {
          id: props.tradingPolicy.alpacaAccount.id !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.id
            } : undefined,
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.type
            } : undefined,
          APIKey: props.tradingPolicy.alpacaAccount.APIKey !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.APIKey
            } : undefined,
          APISecret: props.tradingPolicy.alpacaAccount.APISecret !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.APISecret
            } : undefined,
          configuration: props.tradingPolicy.alpacaAccount.configuration !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.configuration
            } : undefined,
          marketOpen: props.tradingPolicy.alpacaAccount.marketOpen !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.marketOpen
            } : undefined,
          realTime: props.tradingPolicy.alpacaAccount.realTime !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.realTime
            } : undefined,
          cryptoTradingEnabled: props.tradingPolicy.alpacaAccount.cryptoTradingEnabled !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: props.tradingPolicy.alpacaAccount.cryptoTradingPairs !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: props.tradingPolicy.alpacaAccount.tradeAllocationPct !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.tradeAllocationPct
            } : undefined,
          autoAllocation: props.tradingPolicy.alpacaAccount.autoAllocation !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.autoAllocation
            } : undefined,
          minPercentageChange: props.tradingPolicy.alpacaAccount.minPercentageChange !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.minPercentageChange
            } : undefined,
          volumeThreshold: props.tradingPolicy.alpacaAccount.volumeThreshold !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: props.tradingPolicy.alpacaAccount.portfolioTrailPercent !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100
            } : undefined,
          deletedAt: props.tradingPolicy.alpacaAccount.deletedAt !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.deletedAt
            } : undefined,
      allocation: props.tradingPolicy.alpacaAccount.allocation ? 
      typeof props.tradingPolicy.alpacaAccount.allocation === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.allocation).length === 1 && (Object.keys(props.tradingPolicy.alpacaAccount.allocation)[0] === 'id' || Object.keys(props.tradingPolicy.alpacaAccount.allocation)[0] === 'symbol')
? {
      connect: {
        id: props.tradingPolicy.alpacaAccount.allocation.id
      }
} : { upsert: {
          where: {
            id: props.tradingPolicy.alpacaAccount.allocation.id !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.allocation.id
              } : undefined,
            alpacaAccountId: props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId
              } : undefined,
          },
          update: {
            id: props.tradingPolicy.alpacaAccount.allocation.id !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.id
              } : undefined,
            equities: props.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.equities
              } : undefined,
            optionsContracts: props.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.optionsContracts
              } : undefined,
            futures: props.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.futures
              } : undefined,
            etfs: props.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.etfs
              } : undefined,
            forex: props.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.forex
              } : undefined,
            crypto: props.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.crypto
              } : undefined,
            stocks: props.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.stocks
              } : undefined,
            options: props.tradingPolicy.alpacaAccount.allocation.options !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.options
              } : undefined,
          },
          create: {
            equities: props.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? props.tradingPolicy.alpacaAccount.allocation.equities : undefined,
            optionsContracts: props.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? props.tradingPolicy.alpacaAccount.allocation.optionsContracts : undefined,
            futures: props.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? props.tradingPolicy.alpacaAccount.allocation.futures : undefined,
            etfs: props.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? props.tradingPolicy.alpacaAccount.allocation.etfs : undefined,
            forex: props.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? props.tradingPolicy.alpacaAccount.allocation.forex : undefined,
            crypto: props.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? props.tradingPolicy.alpacaAccount.allocation.crypto : undefined,
            stocks: props.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? props.tradingPolicy.alpacaAccount.allocation.stocks : undefined,
            options: props.tradingPolicy.alpacaAccount.allocation.options !== undefined ? props.tradingPolicy.alpacaAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      user: props.tradingPolicy.alpacaAccount.user ? 
      typeof props.tradingPolicy.alpacaAccount.user === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.user).length === 1 && (Object.keys(props.tradingPolicy.alpacaAccount.user)[0] === 'id' || Object.keys(props.tradingPolicy.alpacaAccount.user)[0] === 'symbol')
? {
      connect: {
        id: props.tradingPolicy.alpacaAccount.user.id
      }
} : { upsert: {
          where: {
            id: props.tradingPolicy.alpacaAccount.user.id !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.id
              } : undefined,
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.name
              } : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.email
              } : undefined,
            customerId: props.tradingPolicy.alpacaAccount.user.customerId !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.customerId
              } : undefined,
          },
          update: {
            id: props.tradingPolicy.alpacaAccount.user.id !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.id
              } : undefined,
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.name
              } : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.email
              } : undefined,
            emailVerified: props.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.emailVerified
              } : undefined,
            image: props.tradingPolicy.alpacaAccount.user.image !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.image
              } : undefined,
            deletedAt: props.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.deletedAt
              } : undefined,
            role: props.tradingPolicy.alpacaAccount.user.role !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.role
              } : undefined,
            bio: props.tradingPolicy.alpacaAccount.user.bio !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.bio
              } : undefined,
            jobTitle: props.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.jobTitle
              } : undefined,
            currentAccount: props.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.currentAccount
              } : undefined,
            plan: props.tradingPolicy.alpacaAccount.user.plan !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.plan
              } : undefined,
            openaiAPIKey: props.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.openaiAPIKey
              } : undefined,
            openaiModel: props.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.openaiModel
              } : undefined,
          },
          create: {
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? props.tradingPolicy.alpacaAccount.user.name : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            emailVerified: props.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? props.tradingPolicy.alpacaAccount.user.emailVerified : undefined,
            image: props.tradingPolicy.alpacaAccount.user.image !== undefined ? props.tradingPolicy.alpacaAccount.user.image : undefined,
            deletedAt: props.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.user.deletedAt : undefined,
            role: props.tradingPolicy.alpacaAccount.user.role !== undefined ? props.tradingPolicy.alpacaAccount.user.role : undefined,
            bio: props.tradingPolicy.alpacaAccount.user.bio !== undefined ? props.tradingPolicy.alpacaAccount.user.bio : undefined,
            jobTitle: props.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? props.tradingPolicy.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? props.tradingPolicy.alpacaAccount.user.currentAccount : undefined,
            plan: props.tradingPolicy.alpacaAccount.user.plan !== undefined ? props.tradingPolicy.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      alerts: props.tradingPolicy.alpacaAccount.alerts ? 
      Array.isArray(props.tradingPolicy.alpacaAccount.alerts) && props.tradingPolicy.alpacaAccount.alerts.length > 0 && props.tradingPolicy.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
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
        create: {
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? props.tradingPolicy.alpacaAccount.type : undefined,
          APIKey: props.tradingPolicy.alpacaAccount.APIKey !== undefined ? props.tradingPolicy.alpacaAccount.APIKey : undefined,
          APISecret: props.tradingPolicy.alpacaAccount.APISecret !== undefined ? props.tradingPolicy.alpacaAccount.APISecret : undefined,
          configuration: props.tradingPolicy.alpacaAccount.configuration !== undefined ? props.tradingPolicy.alpacaAccount.configuration : undefined,
          marketOpen: props.tradingPolicy.alpacaAccount.marketOpen !== undefined ? props.tradingPolicy.alpacaAccount.marketOpen : undefined,
          realTime: props.tradingPolicy.alpacaAccount.realTime !== undefined ? props.tradingPolicy.alpacaAccount.realTime : undefined,
          cryptoTradingEnabled: props.tradingPolicy.alpacaAccount.cryptoTradingEnabled !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.tradingPolicy.alpacaAccount.cryptoTradingPairs !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.tradingPolicy.alpacaAccount.tradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.tradeAllocationPct : undefined,
          autoAllocation: props.tradingPolicy.alpacaAccount.autoAllocation !== undefined ? props.tradingPolicy.alpacaAccount.autoAllocation : undefined,
          minPercentageChange: props.tradingPolicy.alpacaAccount.minPercentageChange !== undefined ? props.tradingPolicy.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.tradingPolicy.alpacaAccount.volumeThreshold !== undefined ? props.tradingPolicy.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.tradingPolicy.alpacaAccount.portfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 !== undefined ? props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.tradingPolicy.alpacaAccount.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.deletedAt : undefined,
      allocation: props.tradingPolicy.alpacaAccount.allocation ? 
        typeof props.tradingPolicy.alpacaAccount.allocation === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.allocation).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.allocation.id !== undefined ? props.tradingPolicy.alpacaAccount.allocation.id : undefined,
            alpacaAccountId: props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId !== undefined ? props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId : undefined,
          },
          create: {
            equities: props.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? props.tradingPolicy.alpacaAccount.allocation.equities : undefined,
            optionsContracts: props.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? props.tradingPolicy.alpacaAccount.allocation.optionsContracts : undefined,
            futures: props.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? props.tradingPolicy.alpacaAccount.allocation.futures : undefined,
            etfs: props.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? props.tradingPolicy.alpacaAccount.allocation.etfs : undefined,
            forex: props.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? props.tradingPolicy.alpacaAccount.allocation.forex : undefined,
            crypto: props.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? props.tradingPolicy.alpacaAccount.allocation.crypto : undefined,
            stocks: props.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? props.tradingPolicy.alpacaAccount.allocation.stocks : undefined,
            options: props.tradingPolicy.alpacaAccount.allocation.options !== undefined ? props.tradingPolicy.alpacaAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      user: props.tradingPolicy.alpacaAccount.user ? 
        typeof props.tradingPolicy.alpacaAccount.user === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.user).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.user.id !== undefined ? props.tradingPolicy.alpacaAccount.user.id : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? props.tradingPolicy.alpacaAccount.user.name : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            emailVerified: props.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? props.tradingPolicy.alpacaAccount.user.emailVerified : undefined,
            image: props.tradingPolicy.alpacaAccount.user.image !== undefined ? props.tradingPolicy.alpacaAccount.user.image : undefined,
            deletedAt: props.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.user.deletedAt : undefined,
            role: props.tradingPolicy.alpacaAccount.user.role !== undefined ? props.tradingPolicy.alpacaAccount.user.role : undefined,
            bio: props.tradingPolicy.alpacaAccount.user.bio !== undefined ? props.tradingPolicy.alpacaAccount.user.bio : undefined,
            jobTitle: props.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? props.tradingPolicy.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? props.tradingPolicy.alpacaAccount.user.currentAccount : undefined,
            plan: props.tradingPolicy.alpacaAccount.user.plan !== undefined ? props.tradingPolicy.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      alerts: props.tradingPolicy.alpacaAccount.alerts ? 
        Array.isArray(props.tradingPolicy.alpacaAccount.alerts) && props.tradingPolicy.alpacaAccount.alerts.length > 0 &&  props.tradingPolicy.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
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
    alpacaAccount: props.tradingPolicy.alpacaAccount ? 
      typeof props.tradingPolicy.alpacaAccount === 'object' && Object.keys(props.tradingPolicy.alpacaAccount).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.tradingPolicy.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.tradingPolicy.alpacaAccount.id !== undefined ? props.tradingPolicy.alpacaAccount.id : undefined,
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.type 
             } : undefined,
          userId: props.tradingPolicy.alpacaAccount.userId !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? props.tradingPolicy.alpacaAccount.type : undefined,
          APIKey: props.tradingPolicy.alpacaAccount.APIKey !== undefined ? props.tradingPolicy.alpacaAccount.APIKey : undefined,
          APISecret: props.tradingPolicy.alpacaAccount.APISecret !== undefined ? props.tradingPolicy.alpacaAccount.APISecret : undefined,
          configuration: props.tradingPolicy.alpacaAccount.configuration !== undefined ? props.tradingPolicy.alpacaAccount.configuration : undefined,
          marketOpen: props.tradingPolicy.alpacaAccount.marketOpen !== undefined ? props.tradingPolicy.alpacaAccount.marketOpen : undefined,
          realTime: props.tradingPolicy.alpacaAccount.realTime !== undefined ? props.tradingPolicy.alpacaAccount.realTime : undefined,
          cryptoTradingEnabled: props.tradingPolicy.alpacaAccount.cryptoTradingEnabled !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.tradingPolicy.alpacaAccount.cryptoTradingPairs !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.tradingPolicy.alpacaAccount.tradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.tradeAllocationPct : undefined,
          autoAllocation: props.tradingPolicy.alpacaAccount.autoAllocation !== undefined ? props.tradingPolicy.alpacaAccount.autoAllocation : undefined,
          minPercentageChange: props.tradingPolicy.alpacaAccount.minPercentageChange !== undefined ? props.tradingPolicy.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.tradingPolicy.alpacaAccount.volumeThreshold !== undefined ? props.tradingPolicy.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.tradingPolicy.alpacaAccount.portfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 !== undefined ? props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.tradingPolicy.alpacaAccount.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.deletedAt : undefined,
      allocation: props.tradingPolicy.alpacaAccount.allocation ? 
        typeof props.tradingPolicy.alpacaAccount.allocation === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.allocation).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.allocation.id !== undefined ? props.tradingPolicy.alpacaAccount.allocation.id : undefined,
            alpacaAccountId: props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId !== undefined ? props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId : undefined,
          },
          create: {
            equities: props.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? props.tradingPolicy.alpacaAccount.allocation.equities : undefined,
            optionsContracts: props.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? props.tradingPolicy.alpacaAccount.allocation.optionsContracts : undefined,
            futures: props.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? props.tradingPolicy.alpacaAccount.allocation.futures : undefined,
            etfs: props.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? props.tradingPolicy.alpacaAccount.allocation.etfs : undefined,
            forex: props.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? props.tradingPolicy.alpacaAccount.allocation.forex : undefined,
            crypto: props.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? props.tradingPolicy.alpacaAccount.allocation.crypto : undefined,
            stocks: props.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? props.tradingPolicy.alpacaAccount.allocation.stocks : undefined,
            options: props.tradingPolicy.alpacaAccount.allocation.options !== undefined ? props.tradingPolicy.alpacaAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      user: props.tradingPolicy.alpacaAccount.user ? 
        typeof props.tradingPolicy.alpacaAccount.user === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.user).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.user.id !== undefined ? props.tradingPolicy.alpacaAccount.user.id : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? props.tradingPolicy.alpacaAccount.user.name : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            emailVerified: props.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? props.tradingPolicy.alpacaAccount.user.emailVerified : undefined,
            image: props.tradingPolicy.alpacaAccount.user.image !== undefined ? props.tradingPolicy.alpacaAccount.user.image : undefined,
            deletedAt: props.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.user.deletedAt : undefined,
            role: props.tradingPolicy.alpacaAccount.user.role !== undefined ? props.tradingPolicy.alpacaAccount.user.role : undefined,
            bio: props.tradingPolicy.alpacaAccount.user.bio !== undefined ? props.tradingPolicy.alpacaAccount.user.bio : undefined,
            jobTitle: props.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? props.tradingPolicy.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? props.tradingPolicy.alpacaAccount.user.currentAccount : undefined,
            plan: props.tradingPolicy.alpacaAccount.user.plan !== undefined ? props.tradingPolicy.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      alerts: props.tradingPolicy.alpacaAccount.alerts ? 
        Array.isArray(props.tradingPolicy.alpacaAccount.alerts) && props.tradingPolicy.alpacaAccount.alerts.length > 0 &&  props.tradingPolicy.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
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
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_POLICYOVERLAY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOnePolicyOverlay) {
          return response.data.updateOnePolicyOverlay;
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
          logger.error("Non-retryable constraint violation in updateOnePolicyOverlay", {
            operation: 'updateOnePolicyOverlay',
            model: 'PolicyOverlay',
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
          logger.warn("Database connection error in updateOnePolicyOverlay, retrying...", {
            operation: 'updateOnePolicyOverlay',
            model: 'PolicyOverlay',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database update operation failed", {
          operation: 'updateOnePolicyOverlay',
          model: 'PolicyOverlay',
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
   * Upsert a single PolicyOverlay record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated PolicyOverlay or null.
   */
  async upsert(props: PolicyOverlayType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<PolicyOverlayType> {
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

        const UPSERT_ONE_POLICYOVERLAY = gql`
          mutation upsertOnePolicyOverlay($where: PolicyOverlayWhereUniqueInput!, $create: PolicyOverlayCreateInput!, $update: PolicyOverlayUpdateInput!) {
            upsertOnePolicyOverlay(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  tradingPolicyId: props.tradingPolicyId !== undefined ? {
    equals: props.tradingPolicyId 
  } : undefined,
  status: props.status !== undefined ? {
    equals: props.status 
  } : undefined,
  correlationId: props.correlationId !== undefined ? {
    equals: props.correlationId 
  } : undefined,
  triggerEventId: props.triggerEventId !== undefined ? {
    equals: props.triggerEventId 
  } : undefined,
      },
          create: {
        overlayType: props.overlayType !== undefined ? props.overlayType : undefined,
  source: props.source !== undefined ? props.source : undefined,
  reason: props.reason !== undefined ? props.reason : undefined,
  severity: props.severity !== undefined ? props.severity : undefined,
  version: props.version !== undefined ? props.version : undefined,
  mutations: props.mutations !== undefined ? props.mutations : undefined,
  status: props.status !== undefined ? props.status : undefined,
  activatedAt: props.activatedAt !== undefined ? props.activatedAt : undefined,
  expiresAt: props.expiresAt !== undefined ? props.expiresAt : undefined,
  deactivatedAt: props.deactivatedAt !== undefined ? props.deactivatedAt : undefined,
  deactivatedBy: props.deactivatedBy !== undefined ? props.deactivatedBy : undefined,
  correlationId: props.correlationId !== undefined ? props.correlationId : undefined,
  triggerEventId: props.triggerEventId !== undefined ? props.triggerEventId : undefined,
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
    alpacaAccount: props.tradingPolicy.alpacaAccount ? 
      typeof props.tradingPolicy.alpacaAccount === 'object' && Object.keys(props.tradingPolicy.alpacaAccount).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.tradingPolicy.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.tradingPolicy.alpacaAccount.id !== undefined ? props.tradingPolicy.alpacaAccount.id : undefined,
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.type 
             } : undefined,
          userId: props.tradingPolicy.alpacaAccount.userId !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? props.tradingPolicy.alpacaAccount.type : undefined,
          APIKey: props.tradingPolicy.alpacaAccount.APIKey !== undefined ? props.tradingPolicy.alpacaAccount.APIKey : undefined,
          APISecret: props.tradingPolicy.alpacaAccount.APISecret !== undefined ? props.tradingPolicy.alpacaAccount.APISecret : undefined,
          configuration: props.tradingPolicy.alpacaAccount.configuration !== undefined ? props.tradingPolicy.alpacaAccount.configuration : undefined,
          marketOpen: props.tradingPolicy.alpacaAccount.marketOpen !== undefined ? props.tradingPolicy.alpacaAccount.marketOpen : undefined,
          realTime: props.tradingPolicy.alpacaAccount.realTime !== undefined ? props.tradingPolicy.alpacaAccount.realTime : undefined,
          cryptoTradingEnabled: props.tradingPolicy.alpacaAccount.cryptoTradingEnabled !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.tradingPolicy.alpacaAccount.cryptoTradingPairs !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.tradingPolicy.alpacaAccount.tradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.tradeAllocationPct : undefined,
          autoAllocation: props.tradingPolicy.alpacaAccount.autoAllocation !== undefined ? props.tradingPolicy.alpacaAccount.autoAllocation : undefined,
          minPercentageChange: props.tradingPolicy.alpacaAccount.minPercentageChange !== undefined ? props.tradingPolicy.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.tradingPolicy.alpacaAccount.volumeThreshold !== undefined ? props.tradingPolicy.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.tradingPolicy.alpacaAccount.portfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 !== undefined ? props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.tradingPolicy.alpacaAccount.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.deletedAt : undefined,
      allocation: props.tradingPolicy.alpacaAccount.allocation ? 
        typeof props.tradingPolicy.alpacaAccount.allocation === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.allocation).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.allocation.id !== undefined ? props.tradingPolicy.alpacaAccount.allocation.id : undefined,
            alpacaAccountId: props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId !== undefined ? props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId : undefined,
          },
          create: {
            equities: props.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? props.tradingPolicy.alpacaAccount.allocation.equities : undefined,
            optionsContracts: props.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? props.tradingPolicy.alpacaAccount.allocation.optionsContracts : undefined,
            futures: props.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? props.tradingPolicy.alpacaAccount.allocation.futures : undefined,
            etfs: props.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? props.tradingPolicy.alpacaAccount.allocation.etfs : undefined,
            forex: props.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? props.tradingPolicy.alpacaAccount.allocation.forex : undefined,
            crypto: props.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? props.tradingPolicy.alpacaAccount.allocation.crypto : undefined,
            stocks: props.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? props.tradingPolicy.alpacaAccount.allocation.stocks : undefined,
            options: props.tradingPolicy.alpacaAccount.allocation.options !== undefined ? props.tradingPolicy.alpacaAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      user: props.tradingPolicy.alpacaAccount.user ? 
        typeof props.tradingPolicy.alpacaAccount.user === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.user).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.user.id !== undefined ? props.tradingPolicy.alpacaAccount.user.id : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? props.tradingPolicy.alpacaAccount.user.name : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            emailVerified: props.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? props.tradingPolicy.alpacaAccount.user.emailVerified : undefined,
            image: props.tradingPolicy.alpacaAccount.user.image !== undefined ? props.tradingPolicy.alpacaAccount.user.image : undefined,
            deletedAt: props.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.user.deletedAt : undefined,
            role: props.tradingPolicy.alpacaAccount.user.role !== undefined ? props.tradingPolicy.alpacaAccount.user.role : undefined,
            bio: props.tradingPolicy.alpacaAccount.user.bio !== undefined ? props.tradingPolicy.alpacaAccount.user.bio : undefined,
            jobTitle: props.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? props.tradingPolicy.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? props.tradingPolicy.alpacaAccount.user.currentAccount : undefined,
            plan: props.tradingPolicy.alpacaAccount.user.plan !== undefined ? props.tradingPolicy.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      alerts: props.tradingPolicy.alpacaAccount.alerts ? 
        Array.isArray(props.tradingPolicy.alpacaAccount.alerts) && props.tradingPolicy.alpacaAccount.alerts.length > 0 &&  props.tradingPolicy.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
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
    }
  } : undefined,
      },
          update: {
      overlayType: props.overlayType !== undefined ? {
            set: props.overlayType 
           } : undefined,
  source: props.source !== undefined ? {
            set: props.source 
           } : undefined,
  reason: props.reason !== undefined ? {
            set: props.reason 
           } : undefined,
  severity: props.severity !== undefined ? {
            set: props.severity 
           } : undefined,
  version: props.version !== undefined ? {
            set: props.version 
           } : undefined,
  mutations: props.mutations !== undefined ? {
            set: props.mutations 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  activatedAt: props.activatedAt !== undefined ? {
            set: props.activatedAt 
           } : undefined,
  expiresAt: props.expiresAt !== undefined ? {
            set: props.expiresAt 
           } : undefined,
  deactivatedAt: props.deactivatedAt !== undefined ? {
            set: props.deactivatedAt 
           } : undefined,
  deactivatedBy: props.deactivatedBy !== undefined ? {
            set: props.deactivatedBy 
           } : undefined,
  correlationId: props.correlationId !== undefined ? {
            set: props.correlationId 
           } : undefined,
  triggerEventId: props.triggerEventId !== undefined ? {
            set: props.triggerEventId 
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
    alpacaAccount: props.tradingPolicy.alpacaAccount ? 
    typeof props.tradingPolicy.alpacaAccount === 'object' && Object.keys(props.tradingPolicy.alpacaAccount).length === 1 && (Object.keys(props.tradingPolicy.alpacaAccount)[0] === 'id' || Object.keys(props.tradingPolicy.alpacaAccount)[0] === 'symbol')
? {
    connect: {
      id: props.tradingPolicy.alpacaAccount.id
    }
} : { upsert: {
        where: {
          id: props.tradingPolicy.alpacaAccount.id !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.id
            } : undefined,
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.type
            } : undefined,
          userId: props.tradingPolicy.alpacaAccount.userId !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.userId
            } : undefined,
        },
        update: {
          id: props.tradingPolicy.alpacaAccount.id !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.id
            } : undefined,
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.type
            } : undefined,
          APIKey: props.tradingPolicy.alpacaAccount.APIKey !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.APIKey
            } : undefined,
          APISecret: props.tradingPolicy.alpacaAccount.APISecret !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.APISecret
            } : undefined,
          configuration: props.tradingPolicy.alpacaAccount.configuration !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.configuration
            } : undefined,
          marketOpen: props.tradingPolicy.alpacaAccount.marketOpen !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.marketOpen
            } : undefined,
          realTime: props.tradingPolicy.alpacaAccount.realTime !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.realTime
            } : undefined,
          cryptoTradingEnabled: props.tradingPolicy.alpacaAccount.cryptoTradingEnabled !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: props.tradingPolicy.alpacaAccount.cryptoTradingPairs !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: props.tradingPolicy.alpacaAccount.tradeAllocationPct !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.tradeAllocationPct
            } : undefined,
          autoAllocation: props.tradingPolicy.alpacaAccount.autoAllocation !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.autoAllocation
            } : undefined,
          minPercentageChange: props.tradingPolicy.alpacaAccount.minPercentageChange !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.minPercentageChange
            } : undefined,
          volumeThreshold: props.tradingPolicy.alpacaAccount.volumeThreshold !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: props.tradingPolicy.alpacaAccount.portfolioTrailPercent !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100
            } : undefined,
          deletedAt: props.tradingPolicy.alpacaAccount.deletedAt !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.deletedAt
            } : undefined,
      allocation: props.tradingPolicy.alpacaAccount.allocation ? 
      typeof props.tradingPolicy.alpacaAccount.allocation === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.allocation).length === 1 && (Object.keys(props.tradingPolicy.alpacaAccount.allocation)[0] === 'id' || Object.keys(props.tradingPolicy.alpacaAccount.allocation)[0] === 'symbol')
? {
      connect: {
        id: props.tradingPolicy.alpacaAccount.allocation.id
      }
} : { upsert: {
          where: {
            id: props.tradingPolicy.alpacaAccount.allocation.id !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.allocation.id
              } : undefined,
            alpacaAccountId: props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId
              } : undefined,
          },
          update: {
            id: props.tradingPolicy.alpacaAccount.allocation.id !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.id
              } : undefined,
            equities: props.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.equities
              } : undefined,
            optionsContracts: props.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.optionsContracts
              } : undefined,
            futures: props.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.futures
              } : undefined,
            etfs: props.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.etfs
              } : undefined,
            forex: props.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.forex
              } : undefined,
            crypto: props.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.crypto
              } : undefined,
            stocks: props.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.stocks
              } : undefined,
            options: props.tradingPolicy.alpacaAccount.allocation.options !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.allocation.options
              } : undefined,
          },
          create: {
            equities: props.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? props.tradingPolicy.alpacaAccount.allocation.equities : undefined,
            optionsContracts: props.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? props.tradingPolicy.alpacaAccount.allocation.optionsContracts : undefined,
            futures: props.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? props.tradingPolicy.alpacaAccount.allocation.futures : undefined,
            etfs: props.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? props.tradingPolicy.alpacaAccount.allocation.etfs : undefined,
            forex: props.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? props.tradingPolicy.alpacaAccount.allocation.forex : undefined,
            crypto: props.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? props.tradingPolicy.alpacaAccount.allocation.crypto : undefined,
            stocks: props.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? props.tradingPolicy.alpacaAccount.allocation.stocks : undefined,
            options: props.tradingPolicy.alpacaAccount.allocation.options !== undefined ? props.tradingPolicy.alpacaAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      user: props.tradingPolicy.alpacaAccount.user ? 
      typeof props.tradingPolicy.alpacaAccount.user === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.user).length === 1 && (Object.keys(props.tradingPolicy.alpacaAccount.user)[0] === 'id' || Object.keys(props.tradingPolicy.alpacaAccount.user)[0] === 'symbol')
? {
      connect: {
        id: props.tradingPolicy.alpacaAccount.user.id
      }
} : { upsert: {
          where: {
            id: props.tradingPolicy.alpacaAccount.user.id !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.id
              } : undefined,
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.name
              } : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.email
              } : undefined,
            customerId: props.tradingPolicy.alpacaAccount.user.customerId !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.customerId
              } : undefined,
          },
          update: {
            id: props.tradingPolicy.alpacaAccount.user.id !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.id
              } : undefined,
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.name
              } : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.email
              } : undefined,
            emailVerified: props.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.emailVerified
              } : undefined,
            image: props.tradingPolicy.alpacaAccount.user.image !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.image
              } : undefined,
            deletedAt: props.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.deletedAt
              } : undefined,
            role: props.tradingPolicy.alpacaAccount.user.role !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.role
              } : undefined,
            bio: props.tradingPolicy.alpacaAccount.user.bio !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.bio
              } : undefined,
            jobTitle: props.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.jobTitle
              } : undefined,
            currentAccount: props.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.currentAccount
              } : undefined,
            plan: props.tradingPolicy.alpacaAccount.user.plan !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.plan
              } : undefined,
            openaiAPIKey: props.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.openaiAPIKey
              } : undefined,
            openaiModel: props.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? {
                set: props.tradingPolicy.alpacaAccount.user.openaiModel
              } : undefined,
          },
          create: {
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? props.tradingPolicy.alpacaAccount.user.name : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            emailVerified: props.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? props.tradingPolicy.alpacaAccount.user.emailVerified : undefined,
            image: props.tradingPolicy.alpacaAccount.user.image !== undefined ? props.tradingPolicy.alpacaAccount.user.image : undefined,
            deletedAt: props.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.user.deletedAt : undefined,
            role: props.tradingPolicy.alpacaAccount.user.role !== undefined ? props.tradingPolicy.alpacaAccount.user.role : undefined,
            bio: props.tradingPolicy.alpacaAccount.user.bio !== undefined ? props.tradingPolicy.alpacaAccount.user.bio : undefined,
            jobTitle: props.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? props.tradingPolicy.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? props.tradingPolicy.alpacaAccount.user.currentAccount : undefined,
            plan: props.tradingPolicy.alpacaAccount.user.plan !== undefined ? props.tradingPolicy.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      alerts: props.tradingPolicy.alpacaAccount.alerts ? 
      Array.isArray(props.tradingPolicy.alpacaAccount.alerts) && props.tradingPolicy.alpacaAccount.alerts.length > 0 && props.tradingPolicy.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
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
        create: {
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? props.tradingPolicy.alpacaAccount.type : undefined,
          APIKey: props.tradingPolicy.alpacaAccount.APIKey !== undefined ? props.tradingPolicy.alpacaAccount.APIKey : undefined,
          APISecret: props.tradingPolicy.alpacaAccount.APISecret !== undefined ? props.tradingPolicy.alpacaAccount.APISecret : undefined,
          configuration: props.tradingPolicy.alpacaAccount.configuration !== undefined ? props.tradingPolicy.alpacaAccount.configuration : undefined,
          marketOpen: props.tradingPolicy.alpacaAccount.marketOpen !== undefined ? props.tradingPolicy.alpacaAccount.marketOpen : undefined,
          realTime: props.tradingPolicy.alpacaAccount.realTime !== undefined ? props.tradingPolicy.alpacaAccount.realTime : undefined,
          cryptoTradingEnabled: props.tradingPolicy.alpacaAccount.cryptoTradingEnabled !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.tradingPolicy.alpacaAccount.cryptoTradingPairs !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.tradingPolicy.alpacaAccount.tradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.tradeAllocationPct : undefined,
          autoAllocation: props.tradingPolicy.alpacaAccount.autoAllocation !== undefined ? props.tradingPolicy.alpacaAccount.autoAllocation : undefined,
          minPercentageChange: props.tradingPolicy.alpacaAccount.minPercentageChange !== undefined ? props.tradingPolicy.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.tradingPolicy.alpacaAccount.volumeThreshold !== undefined ? props.tradingPolicy.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.tradingPolicy.alpacaAccount.portfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 !== undefined ? props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.tradingPolicy.alpacaAccount.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.deletedAt : undefined,
      allocation: props.tradingPolicy.alpacaAccount.allocation ? 
        typeof props.tradingPolicy.alpacaAccount.allocation === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.allocation).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.allocation.id !== undefined ? props.tradingPolicy.alpacaAccount.allocation.id : undefined,
            alpacaAccountId: props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId !== undefined ? props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId : undefined,
          },
          create: {
            equities: props.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? props.tradingPolicy.alpacaAccount.allocation.equities : undefined,
            optionsContracts: props.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? props.tradingPolicy.alpacaAccount.allocation.optionsContracts : undefined,
            futures: props.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? props.tradingPolicy.alpacaAccount.allocation.futures : undefined,
            etfs: props.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? props.tradingPolicy.alpacaAccount.allocation.etfs : undefined,
            forex: props.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? props.tradingPolicy.alpacaAccount.allocation.forex : undefined,
            crypto: props.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? props.tradingPolicy.alpacaAccount.allocation.crypto : undefined,
            stocks: props.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? props.tradingPolicy.alpacaAccount.allocation.stocks : undefined,
            options: props.tradingPolicy.alpacaAccount.allocation.options !== undefined ? props.tradingPolicy.alpacaAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      user: props.tradingPolicy.alpacaAccount.user ? 
        typeof props.tradingPolicy.alpacaAccount.user === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.user).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.user.id !== undefined ? props.tradingPolicy.alpacaAccount.user.id : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? props.tradingPolicy.alpacaAccount.user.name : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            emailVerified: props.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? props.tradingPolicy.alpacaAccount.user.emailVerified : undefined,
            image: props.tradingPolicy.alpacaAccount.user.image !== undefined ? props.tradingPolicy.alpacaAccount.user.image : undefined,
            deletedAt: props.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.user.deletedAt : undefined,
            role: props.tradingPolicy.alpacaAccount.user.role !== undefined ? props.tradingPolicy.alpacaAccount.user.role : undefined,
            bio: props.tradingPolicy.alpacaAccount.user.bio !== undefined ? props.tradingPolicy.alpacaAccount.user.bio : undefined,
            jobTitle: props.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? props.tradingPolicy.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? props.tradingPolicy.alpacaAccount.user.currentAccount : undefined,
            plan: props.tradingPolicy.alpacaAccount.user.plan !== undefined ? props.tradingPolicy.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      alerts: props.tradingPolicy.alpacaAccount.alerts ? 
        Array.isArray(props.tradingPolicy.alpacaAccount.alerts) && props.tradingPolicy.alpacaAccount.alerts.length > 0 &&  props.tradingPolicy.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
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
    alpacaAccount: props.tradingPolicy.alpacaAccount ? 
      typeof props.tradingPolicy.alpacaAccount === 'object' && Object.keys(props.tradingPolicy.alpacaAccount).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.tradingPolicy.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.tradingPolicy.alpacaAccount.id !== undefined ? props.tradingPolicy.alpacaAccount.id : undefined,
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.type 
             } : undefined,
          userId: props.tradingPolicy.alpacaAccount.userId !== undefined ? {
              equals: props.tradingPolicy.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: props.tradingPolicy.alpacaAccount.type !== undefined ? props.tradingPolicy.alpacaAccount.type : undefined,
          APIKey: props.tradingPolicy.alpacaAccount.APIKey !== undefined ? props.tradingPolicy.alpacaAccount.APIKey : undefined,
          APISecret: props.tradingPolicy.alpacaAccount.APISecret !== undefined ? props.tradingPolicy.alpacaAccount.APISecret : undefined,
          configuration: props.tradingPolicy.alpacaAccount.configuration !== undefined ? props.tradingPolicy.alpacaAccount.configuration : undefined,
          marketOpen: props.tradingPolicy.alpacaAccount.marketOpen !== undefined ? props.tradingPolicy.alpacaAccount.marketOpen : undefined,
          realTime: props.tradingPolicy.alpacaAccount.realTime !== undefined ? props.tradingPolicy.alpacaAccount.realTime : undefined,
          cryptoTradingEnabled: props.tradingPolicy.alpacaAccount.cryptoTradingEnabled !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: props.tradingPolicy.alpacaAccount.cryptoTradingPairs !== undefined ? {
              set: props.tradingPolicy.alpacaAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: props.tradingPolicy.alpacaAccount.tradeAllocationPct !== undefined ? props.tradingPolicy.alpacaAccount.tradeAllocationPct : undefined,
          autoAllocation: props.tradingPolicy.alpacaAccount.autoAllocation !== undefined ? props.tradingPolicy.alpacaAccount.autoAllocation : undefined,
          minPercentageChange: props.tradingPolicy.alpacaAccount.minPercentageChange !== undefined ? props.tradingPolicy.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.tradingPolicy.alpacaAccount.volumeThreshold !== undefined ? props.tradingPolicy.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.tradingPolicy.alpacaAccount.portfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? props.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? props.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 !== undefined ? props.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: props.tradingPolicy.alpacaAccount.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.deletedAt : undefined,
      allocation: props.tradingPolicy.alpacaAccount.allocation ? 
        typeof props.tradingPolicy.alpacaAccount.allocation === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.allocation).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.allocation.id !== undefined ? props.tradingPolicy.alpacaAccount.allocation.id : undefined,
            alpacaAccountId: props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId !== undefined ? props.tradingPolicy.alpacaAccount.allocation.alpacaAccountId : undefined,
          },
          create: {
            equities: props.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? props.tradingPolicy.alpacaAccount.allocation.equities : undefined,
            optionsContracts: props.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? props.tradingPolicy.alpacaAccount.allocation.optionsContracts : undefined,
            futures: props.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? props.tradingPolicy.alpacaAccount.allocation.futures : undefined,
            etfs: props.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? props.tradingPolicy.alpacaAccount.allocation.etfs : undefined,
            forex: props.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? props.tradingPolicy.alpacaAccount.allocation.forex : undefined,
            crypto: props.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? props.tradingPolicy.alpacaAccount.allocation.crypto : undefined,
            stocks: props.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? props.tradingPolicy.alpacaAccount.allocation.stocks : undefined,
            options: props.tradingPolicy.alpacaAccount.allocation.options !== undefined ? props.tradingPolicy.alpacaAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      user: props.tradingPolicy.alpacaAccount.user ? 
        typeof props.tradingPolicy.alpacaAccount.user === 'object' && Object.keys(props.tradingPolicy.alpacaAccount.user).length === 1 && Object.keys(props.tradingPolicy.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.tradingPolicy.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.tradingPolicy.alpacaAccount.user.id !== undefined ? props.tradingPolicy.alpacaAccount.user.id : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                equals: props.tradingPolicy.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.tradingPolicy.alpacaAccount.user.name !== undefined ? props.tradingPolicy.alpacaAccount.user.name : undefined,
            email: props.tradingPolicy.alpacaAccount.user.email !== undefined ? props.tradingPolicy.alpacaAccount.user.email : undefined,
            emailVerified: props.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? props.tradingPolicy.alpacaAccount.user.emailVerified : undefined,
            image: props.tradingPolicy.alpacaAccount.user.image !== undefined ? props.tradingPolicy.alpacaAccount.user.image : undefined,
            deletedAt: props.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? props.tradingPolicy.alpacaAccount.user.deletedAt : undefined,
            role: props.tradingPolicy.alpacaAccount.user.role !== undefined ? props.tradingPolicy.alpacaAccount.user.role : undefined,
            bio: props.tradingPolicy.alpacaAccount.user.bio !== undefined ? props.tradingPolicy.alpacaAccount.user.bio : undefined,
            jobTitle: props.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? props.tradingPolicy.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? props.tradingPolicy.alpacaAccount.user.currentAccount : undefined,
            plan: props.tradingPolicy.alpacaAccount.user.plan !== undefined ? props.tradingPolicy.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? props.tradingPolicy.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      alerts: props.tradingPolicy.alpacaAccount.alerts ? 
        Array.isArray(props.tradingPolicy.alpacaAccount.alerts) && props.tradingPolicy.alpacaAccount.alerts.length > 0 &&  props.tradingPolicy.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
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
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_POLICYOVERLAY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOnePolicyOverlay) {
          return response.data.upsertOnePolicyOverlay;
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
          logger.error("Non-retryable constraint violation in upsertOnePolicyOverlay", {
            operation: 'upsertOnePolicyOverlay',
            model: 'PolicyOverlay',
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
          logger.warn("Database connection error in upsertOnePolicyOverlay, retrying...", {
            operation: 'upsertOnePolicyOverlay',
            model: 'PolicyOverlay',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database upsert operation failed", {
          operation: 'upsertOnePolicyOverlay',
          model: 'PolicyOverlay',
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
   * Update multiple PolicyOverlay records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of PolicyOverlay objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: PolicyOverlayType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_POLICYOVERLAY = gql`
          mutation updateManyPolicyOverlay($data: [PolicyOverlayCreateManyInput!]!) {
            updateManyPolicyOverlay(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  tradingPolicyId: prop.tradingPolicyId !== undefined ? {
    equals: prop.tradingPolicyId 
  } : undefined,
  status: prop.status !== undefined ? {
    equals: prop.status 
  } : undefined,
  correlationId: prop.correlationId !== undefined ? {
    equals: prop.correlationId 
  } : undefined,
  triggerEventId: prop.triggerEventId !== undefined ? {
    equals: prop.triggerEventId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  overlayType: prop.overlayType !== undefined ? {
            set: prop.overlayType 
           } : undefined,
  source: prop.source !== undefined ? {
            set: prop.source 
           } : undefined,
  reason: prop.reason !== undefined ? {
            set: prop.reason 
           } : undefined,
  severity: prop.severity !== undefined ? {
            set: prop.severity 
           } : undefined,
  version: prop.version !== undefined ? {
            set: prop.version 
           } : undefined,
  mutations: prop.mutations !== undefined ? {
            set: prop.mutations 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  activatedAt: prop.activatedAt !== undefined ? {
            set: prop.activatedAt 
           } : undefined,
  expiresAt: prop.expiresAt !== undefined ? {
            set: prop.expiresAt 
           } : undefined,
  deactivatedAt: prop.deactivatedAt !== undefined ? {
            set: prop.deactivatedAt 
           } : undefined,
  deactivatedBy: prop.deactivatedBy !== undefined ? {
            set: prop.deactivatedBy 
           } : undefined,
  correlationId: prop.correlationId !== undefined ? {
            set: prop.correlationId 
           } : undefined,
  triggerEventId: prop.triggerEventId !== undefined ? {
            set: prop.triggerEventId 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
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
    alpacaAccount: prop.tradingPolicy.alpacaAccount ? 
    typeof prop.tradingPolicy.alpacaAccount === 'object' && Object.keys(prop.tradingPolicy.alpacaAccount).length === 1 && (Object.keys(prop.tradingPolicy.alpacaAccount)[0] === 'id' || Object.keys(prop.tradingPolicy.alpacaAccount)[0] === 'symbol')
? {
    connect: {
      id: prop.tradingPolicy.alpacaAccount.id
    }
} : { upsert: {
        where: {
          id: prop.tradingPolicy.alpacaAccount.id !== undefined ? {
              equals: prop.tradingPolicy.alpacaAccount.id
            } : undefined,
          type: prop.tradingPolicy.alpacaAccount.type !== undefined ? {
              equals: prop.tradingPolicy.alpacaAccount.type
            } : undefined,
          userId: prop.tradingPolicy.alpacaAccount.userId !== undefined ? {
              equals: prop.tradingPolicy.alpacaAccount.userId
            } : undefined,
        },
        update: {
          id: prop.tradingPolicy.alpacaAccount.id !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.id
            } : undefined,
          type: prop.tradingPolicy.alpacaAccount.type !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.type
            } : undefined,
          APIKey: prop.tradingPolicy.alpacaAccount.APIKey !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.APIKey
            } : undefined,
          APISecret: prop.tradingPolicy.alpacaAccount.APISecret !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.APISecret
            } : undefined,
          configuration: prop.tradingPolicy.alpacaAccount.configuration !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.configuration
            } : undefined,
          marketOpen: prop.tradingPolicy.alpacaAccount.marketOpen !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.marketOpen
            } : undefined,
          realTime: prop.tradingPolicy.alpacaAccount.realTime !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.realTime
            } : undefined,
          cryptoTradingEnabled: prop.tradingPolicy.alpacaAccount.cryptoTradingEnabled !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: prop.tradingPolicy.alpacaAccount.cryptoTradingPairs !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: prop.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: prop.tradingPolicy.alpacaAccount.tradeAllocationPct !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.tradeAllocationPct
            } : undefined,
          autoAllocation: prop.tradingPolicy.alpacaAccount.autoAllocation !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.autoAllocation
            } : undefined,
          minPercentageChange: prop.tradingPolicy.alpacaAccount.minPercentageChange !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.minPercentageChange
            } : undefined,
          volumeThreshold: prop.tradingPolicy.alpacaAccount.volumeThreshold !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: prop.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: prop.tradingPolicy.alpacaAccount.portfolioTrailPercent !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: prop.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: prop.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: prop.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: prop.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: prop.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: prop.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: prop.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: prop.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.minimumPriceChangePercent100
            } : undefined,
          deletedAt: prop.tradingPolicy.alpacaAccount.deletedAt !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.deletedAt
            } : undefined,
      allocation: prop.tradingPolicy.alpacaAccount.allocation ? 
      typeof prop.tradingPolicy.alpacaAccount.allocation === 'object' && Object.keys(prop.tradingPolicy.alpacaAccount.allocation).length === 1 && (Object.keys(prop.tradingPolicy.alpacaAccount.allocation)[0] === 'id' || Object.keys(prop.tradingPolicy.alpacaAccount.allocation)[0] === 'symbol')
? {
      connect: {
        id: prop.tradingPolicy.alpacaAccount.allocation.id
      }
} : { upsert: {
          where: {
            id: prop.tradingPolicy.alpacaAccount.allocation.id !== undefined ? {
                equals: prop.tradingPolicy.alpacaAccount.allocation.id
              } : undefined,
            alpacaAccountId: prop.tradingPolicy.alpacaAccount.allocation.alpacaAccountId !== undefined ? {
                equals: prop.tradingPolicy.alpacaAccount.allocation.alpacaAccountId
              } : undefined,
          },
          update: {
            id: prop.tradingPolicy.alpacaAccount.allocation.id !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.allocation.id
              } : undefined,
            equities: prop.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.allocation.equities
              } : undefined,
            optionsContracts: prop.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.allocation.optionsContracts
              } : undefined,
            futures: prop.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.allocation.futures
              } : undefined,
            etfs: prop.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.allocation.etfs
              } : undefined,
            forex: prop.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.allocation.forex
              } : undefined,
            crypto: prop.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.allocation.crypto
              } : undefined,
            stocks: prop.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.allocation.stocks
              } : undefined,
            options: prop.tradingPolicy.alpacaAccount.allocation.options !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.allocation.options
              } : undefined,
          },
          create: {
            equities: prop.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.equities : undefined,
            optionsContracts: prop.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.optionsContracts : undefined,
            futures: prop.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.futures : undefined,
            etfs: prop.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.etfs : undefined,
            forex: prop.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.forex : undefined,
            crypto: prop.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.crypto : undefined,
            stocks: prop.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.stocks : undefined,
            options: prop.tradingPolicy.alpacaAccount.allocation.options !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      user: prop.tradingPolicy.alpacaAccount.user ? 
      typeof prop.tradingPolicy.alpacaAccount.user === 'object' && Object.keys(prop.tradingPolicy.alpacaAccount.user).length === 1 && (Object.keys(prop.tradingPolicy.alpacaAccount.user)[0] === 'id' || Object.keys(prop.tradingPolicy.alpacaAccount.user)[0] === 'symbol')
? {
      connect: {
        id: prop.tradingPolicy.alpacaAccount.user.id
      }
} : { upsert: {
          where: {
            id: prop.tradingPolicy.alpacaAccount.user.id !== undefined ? {
                equals: prop.tradingPolicy.alpacaAccount.user.id
              } : undefined,
            name: prop.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                equals: prop.tradingPolicy.alpacaAccount.user.name
              } : undefined,
            email: prop.tradingPolicy.alpacaAccount.user.email !== undefined ? {
                equals: prop.tradingPolicy.alpacaAccount.user.email
              } : undefined,
            customerId: prop.tradingPolicy.alpacaAccount.user.customerId !== undefined ? {
                equals: prop.tradingPolicy.alpacaAccount.user.customerId
              } : undefined,
          },
          update: {
            id: prop.tradingPolicy.alpacaAccount.user.id !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.id
              } : undefined,
            name: prop.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.name
              } : undefined,
            email: prop.tradingPolicy.alpacaAccount.user.email !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.email
              } : undefined,
            emailVerified: prop.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.emailVerified
              } : undefined,
            image: prop.tradingPolicy.alpacaAccount.user.image !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.image
              } : undefined,
            deletedAt: prop.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.deletedAt
              } : undefined,
            role: prop.tradingPolicy.alpacaAccount.user.role !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.role
              } : undefined,
            bio: prop.tradingPolicy.alpacaAccount.user.bio !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.bio
              } : undefined,
            jobTitle: prop.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.jobTitle
              } : undefined,
            currentAccount: prop.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.currentAccount
              } : undefined,
            plan: prop.tradingPolicy.alpacaAccount.user.plan !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.plan
              } : undefined,
            openaiAPIKey: prop.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.openaiAPIKey
              } : undefined,
            openaiModel: prop.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? {
                set: prop.tradingPolicy.alpacaAccount.user.openaiModel
              } : undefined,
          },
          create: {
            name: prop.tradingPolicy.alpacaAccount.user.name !== undefined ? prop.tradingPolicy.alpacaAccount.user.name : undefined,
            email: prop.tradingPolicy.alpacaAccount.user.email !== undefined ? prop.tradingPolicy.alpacaAccount.user.email : undefined,
            emailVerified: prop.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? prop.tradingPolicy.alpacaAccount.user.emailVerified : undefined,
            image: prop.tradingPolicy.alpacaAccount.user.image !== undefined ? prop.tradingPolicy.alpacaAccount.user.image : undefined,
            deletedAt: prop.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? prop.tradingPolicy.alpacaAccount.user.deletedAt : undefined,
            role: prop.tradingPolicy.alpacaAccount.user.role !== undefined ? prop.tradingPolicy.alpacaAccount.user.role : undefined,
            bio: prop.tradingPolicy.alpacaAccount.user.bio !== undefined ? prop.tradingPolicy.alpacaAccount.user.bio : undefined,
            jobTitle: prop.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? prop.tradingPolicy.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? prop.tradingPolicy.alpacaAccount.user.currentAccount : undefined,
            plan: prop.tradingPolicy.alpacaAccount.user.plan !== undefined ? prop.tradingPolicy.alpacaAccount.user.plan : undefined,
            openaiAPIKey: prop.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? prop.tradingPolicy.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: prop.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? prop.tradingPolicy.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      alerts: prop.tradingPolicy.alpacaAccount.alerts ? 
      Array.isArray(prop.tradingPolicy.alpacaAccount.alerts) && prop.tradingPolicy.alpacaAccount.alerts.length > 0 && prop.tradingPolicy.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
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
        create: {
          type: prop.tradingPolicy.alpacaAccount.type !== undefined ? prop.tradingPolicy.alpacaAccount.type : undefined,
          APIKey: prop.tradingPolicy.alpacaAccount.APIKey !== undefined ? prop.tradingPolicy.alpacaAccount.APIKey : undefined,
          APISecret: prop.tradingPolicy.alpacaAccount.APISecret !== undefined ? prop.tradingPolicy.alpacaAccount.APISecret : undefined,
          configuration: prop.tradingPolicy.alpacaAccount.configuration !== undefined ? prop.tradingPolicy.alpacaAccount.configuration : undefined,
          marketOpen: prop.tradingPolicy.alpacaAccount.marketOpen !== undefined ? prop.tradingPolicy.alpacaAccount.marketOpen : undefined,
          realTime: prop.tradingPolicy.alpacaAccount.realTime !== undefined ? prop.tradingPolicy.alpacaAccount.realTime : undefined,
          cryptoTradingEnabled: prop.tradingPolicy.alpacaAccount.cryptoTradingEnabled !== undefined ? prop.tradingPolicy.alpacaAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: prop.tradingPolicy.alpacaAccount.cryptoTradingPairs !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: prop.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct !== undefined ? prop.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: prop.tradingPolicy.alpacaAccount.tradeAllocationPct !== undefined ? prop.tradingPolicy.alpacaAccount.tradeAllocationPct : undefined,
          autoAllocation: prop.tradingPolicy.alpacaAccount.autoAllocation !== undefined ? prop.tradingPolicy.alpacaAccount.autoAllocation : undefined,
          minPercentageChange: prop.tradingPolicy.alpacaAccount.minPercentageChange !== undefined ? prop.tradingPolicy.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: prop.tradingPolicy.alpacaAccount.volumeThreshold !== undefined ? prop.tradingPolicy.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: prop.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop !== undefined ? prop.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: prop.tradingPolicy.alpacaAccount.portfolioTrailPercent !== undefined ? prop.tradingPolicy.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: prop.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? prop.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: prop.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? prop.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: prop.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? prop.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: prop.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? prop.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: prop.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? prop.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: prop.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? prop.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: prop.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? prop.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: prop.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 !== undefined ? prop.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: prop.tradingPolicy.alpacaAccount.deletedAt !== undefined ? prop.tradingPolicy.alpacaAccount.deletedAt : undefined,
      allocation: prop.tradingPolicy.alpacaAccount.allocation ? 
        typeof prop.tradingPolicy.alpacaAccount.allocation === 'object' && Object.keys(prop.tradingPolicy.alpacaAccount.allocation).length === 1 && Object.keys(prop.tradingPolicy.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
            id: prop.tradingPolicy.alpacaAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.tradingPolicy.alpacaAccount.allocation.id !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.id : undefined,
            alpacaAccountId: prop.tradingPolicy.alpacaAccount.allocation.alpacaAccountId !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.alpacaAccountId : undefined,
          },
          create: {
            equities: prop.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.equities : undefined,
            optionsContracts: prop.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.optionsContracts : undefined,
            futures: prop.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.futures : undefined,
            etfs: prop.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.etfs : undefined,
            forex: prop.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.forex : undefined,
            crypto: prop.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.crypto : undefined,
            stocks: prop.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.stocks : undefined,
            options: prop.tradingPolicy.alpacaAccount.allocation.options !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      user: prop.tradingPolicy.alpacaAccount.user ? 
        typeof prop.tradingPolicy.alpacaAccount.user === 'object' && Object.keys(prop.tradingPolicy.alpacaAccount.user).length === 1 && Object.keys(prop.tradingPolicy.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: prop.tradingPolicy.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.tradingPolicy.alpacaAccount.user.id !== undefined ? prop.tradingPolicy.alpacaAccount.user.id : undefined,
            email: prop.tradingPolicy.alpacaAccount.user.email !== undefined ? prop.tradingPolicy.alpacaAccount.user.email : undefined,
            name: prop.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                equals: prop.tradingPolicy.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: prop.tradingPolicy.alpacaAccount.user.name !== undefined ? prop.tradingPolicy.alpacaAccount.user.name : undefined,
            email: prop.tradingPolicy.alpacaAccount.user.email !== undefined ? prop.tradingPolicy.alpacaAccount.user.email : undefined,
            emailVerified: prop.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? prop.tradingPolicy.alpacaAccount.user.emailVerified : undefined,
            image: prop.tradingPolicy.alpacaAccount.user.image !== undefined ? prop.tradingPolicy.alpacaAccount.user.image : undefined,
            deletedAt: prop.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? prop.tradingPolicy.alpacaAccount.user.deletedAt : undefined,
            role: prop.tradingPolicy.alpacaAccount.user.role !== undefined ? prop.tradingPolicy.alpacaAccount.user.role : undefined,
            bio: prop.tradingPolicy.alpacaAccount.user.bio !== undefined ? prop.tradingPolicy.alpacaAccount.user.bio : undefined,
            jobTitle: prop.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? prop.tradingPolicy.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? prop.tradingPolicy.alpacaAccount.user.currentAccount : undefined,
            plan: prop.tradingPolicy.alpacaAccount.user.plan !== undefined ? prop.tradingPolicy.alpacaAccount.user.plan : undefined,
            openaiAPIKey: prop.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? prop.tradingPolicy.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: prop.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? prop.tradingPolicy.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      alerts: prop.tradingPolicy.alpacaAccount.alerts ? 
        Array.isArray(prop.tradingPolicy.alpacaAccount.alerts) && prop.tradingPolicy.alpacaAccount.alerts.length > 0 &&  prop.tradingPolicy.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
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
    alpacaAccount: prop.tradingPolicy.alpacaAccount ? 
      typeof prop.tradingPolicy.alpacaAccount === 'object' && Object.keys(prop.tradingPolicy.alpacaAccount).length === 1 && Object.keys(prop.tradingPolicy.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: prop.tradingPolicy.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.tradingPolicy.alpacaAccount.id !== undefined ? prop.tradingPolicy.alpacaAccount.id : undefined,
          type: prop.tradingPolicy.alpacaAccount.type !== undefined ? {
              equals: prop.tradingPolicy.alpacaAccount.type 
             } : undefined,
          userId: prop.tradingPolicy.alpacaAccount.userId !== undefined ? {
              equals: prop.tradingPolicy.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: prop.tradingPolicy.alpacaAccount.type !== undefined ? prop.tradingPolicy.alpacaAccount.type : undefined,
          APIKey: prop.tradingPolicy.alpacaAccount.APIKey !== undefined ? prop.tradingPolicy.alpacaAccount.APIKey : undefined,
          APISecret: prop.tradingPolicy.alpacaAccount.APISecret !== undefined ? prop.tradingPolicy.alpacaAccount.APISecret : undefined,
          configuration: prop.tradingPolicy.alpacaAccount.configuration !== undefined ? prop.tradingPolicy.alpacaAccount.configuration : undefined,
          marketOpen: prop.tradingPolicy.alpacaAccount.marketOpen !== undefined ? prop.tradingPolicy.alpacaAccount.marketOpen : undefined,
          realTime: prop.tradingPolicy.alpacaAccount.realTime !== undefined ? prop.tradingPolicy.alpacaAccount.realTime : undefined,
          cryptoTradingEnabled: prop.tradingPolicy.alpacaAccount.cryptoTradingEnabled !== undefined ? prop.tradingPolicy.alpacaAccount.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: prop.tradingPolicy.alpacaAccount.cryptoTradingPairs !== undefined ? {
              set: prop.tradingPolicy.alpacaAccount.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: prop.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct !== undefined ? prop.tradingPolicy.alpacaAccount.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: prop.tradingPolicy.alpacaAccount.tradeAllocationPct !== undefined ? prop.tradingPolicy.alpacaAccount.tradeAllocationPct : undefined,
          autoAllocation: prop.tradingPolicy.alpacaAccount.autoAllocation !== undefined ? prop.tradingPolicy.alpacaAccount.autoAllocation : undefined,
          minPercentageChange: prop.tradingPolicy.alpacaAccount.minPercentageChange !== undefined ? prop.tradingPolicy.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: prop.tradingPolicy.alpacaAccount.volumeThreshold !== undefined ? prop.tradingPolicy.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: prop.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop !== undefined ? prop.tradingPolicy.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: prop.tradingPolicy.alpacaAccount.portfolioTrailPercent !== undefined ? prop.tradingPolicy.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: prop.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? prop.tradingPolicy.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: prop.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? prop.tradingPolicy.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: prop.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 !== undefined ? prop.tradingPolicy.alpacaAccount.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: prop.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 !== undefined ? prop.tradingPolicy.alpacaAccount.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: prop.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 !== undefined ? prop.tradingPolicy.alpacaAccount.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: prop.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 !== undefined ? prop.tradingPolicy.alpacaAccount.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: prop.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 !== undefined ? prop.tradingPolicy.alpacaAccount.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: prop.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 !== undefined ? prop.tradingPolicy.alpacaAccount.minimumPriceChangePercent100 : undefined,
          deletedAt: prop.tradingPolicy.alpacaAccount.deletedAt !== undefined ? prop.tradingPolicy.alpacaAccount.deletedAt : undefined,
      allocation: prop.tradingPolicy.alpacaAccount.allocation ? 
        typeof prop.tradingPolicy.alpacaAccount.allocation === 'object' && Object.keys(prop.tradingPolicy.alpacaAccount.allocation).length === 1 && Object.keys(prop.tradingPolicy.alpacaAccount.allocation)[0] === 'id'
    ? { connect: {
            id: prop.tradingPolicy.alpacaAccount.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.tradingPolicy.alpacaAccount.allocation.id !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.id : undefined,
            alpacaAccountId: prop.tradingPolicy.alpacaAccount.allocation.alpacaAccountId !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.alpacaAccountId : undefined,
          },
          create: {
            equities: prop.tradingPolicy.alpacaAccount.allocation.equities !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.equities : undefined,
            optionsContracts: prop.tradingPolicy.alpacaAccount.allocation.optionsContracts !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.optionsContracts : undefined,
            futures: prop.tradingPolicy.alpacaAccount.allocation.futures !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.futures : undefined,
            etfs: prop.tradingPolicy.alpacaAccount.allocation.etfs !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.etfs : undefined,
            forex: prop.tradingPolicy.alpacaAccount.allocation.forex !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.forex : undefined,
            crypto: prop.tradingPolicy.alpacaAccount.allocation.crypto !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.crypto : undefined,
            stocks: prop.tradingPolicy.alpacaAccount.allocation.stocks !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.stocks : undefined,
            options: prop.tradingPolicy.alpacaAccount.allocation.options !== undefined ? prop.tradingPolicy.alpacaAccount.allocation.options : undefined,
          },
        }
      } : undefined,
      user: prop.tradingPolicy.alpacaAccount.user ? 
        typeof prop.tradingPolicy.alpacaAccount.user === 'object' && Object.keys(prop.tradingPolicy.alpacaAccount.user).length === 1 && Object.keys(prop.tradingPolicy.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: prop.tradingPolicy.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.tradingPolicy.alpacaAccount.user.id !== undefined ? prop.tradingPolicy.alpacaAccount.user.id : undefined,
            email: prop.tradingPolicy.alpacaAccount.user.email !== undefined ? prop.tradingPolicy.alpacaAccount.user.email : undefined,
            name: prop.tradingPolicy.alpacaAccount.user.name !== undefined ? {
                equals: prop.tradingPolicy.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: prop.tradingPolicy.alpacaAccount.user.name !== undefined ? prop.tradingPolicy.alpacaAccount.user.name : undefined,
            email: prop.tradingPolicy.alpacaAccount.user.email !== undefined ? prop.tradingPolicy.alpacaAccount.user.email : undefined,
            emailVerified: prop.tradingPolicy.alpacaAccount.user.emailVerified !== undefined ? prop.tradingPolicy.alpacaAccount.user.emailVerified : undefined,
            image: prop.tradingPolicy.alpacaAccount.user.image !== undefined ? prop.tradingPolicy.alpacaAccount.user.image : undefined,
            deletedAt: prop.tradingPolicy.alpacaAccount.user.deletedAt !== undefined ? prop.tradingPolicy.alpacaAccount.user.deletedAt : undefined,
            role: prop.tradingPolicy.alpacaAccount.user.role !== undefined ? prop.tradingPolicy.alpacaAccount.user.role : undefined,
            bio: prop.tradingPolicy.alpacaAccount.user.bio !== undefined ? prop.tradingPolicy.alpacaAccount.user.bio : undefined,
            jobTitle: prop.tradingPolicy.alpacaAccount.user.jobTitle !== undefined ? prop.tradingPolicy.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.tradingPolicy.alpacaAccount.user.currentAccount !== undefined ? prop.tradingPolicy.alpacaAccount.user.currentAccount : undefined,
            plan: prop.tradingPolicy.alpacaAccount.user.plan !== undefined ? prop.tradingPolicy.alpacaAccount.user.plan : undefined,
            openaiAPIKey: prop.tradingPolicy.alpacaAccount.user.openaiAPIKey !== undefined ? prop.tradingPolicy.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: prop.tradingPolicy.alpacaAccount.user.openaiModel !== undefined ? prop.tradingPolicy.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      alerts: prop.tradingPolicy.alpacaAccount.alerts ? 
        Array.isArray(prop.tradingPolicy.alpacaAccount.alerts) && prop.tradingPolicy.alpacaAccount.alerts.length > 0 &&  prop.tradingPolicy.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.tradingPolicy.alpacaAccount.alerts.map((item: any) => ({
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
    }
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_POLICYOVERLAY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyPolicyOverlay) {
          return response.data.updateManyPolicyOverlay;
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
          logger.error("Non-retryable constraint violation in updateManyPolicyOverlay", {
            operation: 'updateManyPolicyOverlay',
            model: 'PolicyOverlay',
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
          logger.warn("Database connection error in updateManyPolicyOverlay, retrying...", {
            operation: 'updateManyPolicyOverlay',
            model: 'PolicyOverlay',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database updateMany operation failed", {
          operation: 'updateManyPolicyOverlay',
          model: 'PolicyOverlay',
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
   * Delete a single PolicyOverlay record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted PolicyOverlay or null.
   */
  async delete(props: PolicyOverlayType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<PolicyOverlayType> {
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

        const DELETE_ONE_POLICYOVERLAY = gql`
          mutation deleteOnePolicyOverlay($where: PolicyOverlayWhereUniqueInput!) {
            deleteOnePolicyOverlay(where: $where) {
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
          mutation: DELETE_ONE_POLICYOVERLAY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOnePolicyOverlay) {
          return response.data.deleteOnePolicyOverlay;
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
          logger.error("Non-retryable constraint violation in deleteOnePolicyOverlay", {
            operation: 'deleteOnePolicyOverlay',
            model: 'PolicyOverlay',
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
          logger.warn("Database connection error in deleteOnePolicyOverlay, retrying...", {
            operation: 'deleteOnePolicyOverlay',
            model: 'PolicyOverlay',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database delete operation failed", {
          operation: 'deleteOnePolicyOverlay',
          model: 'PolicyOverlay',
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
   * Retrieve a single PolicyOverlay record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved PolicyOverlay or null.
   */
  async get(props: PolicyOverlayType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<PolicyOverlayType | null> {
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

        const GET_POLICYOVERLAY = gql`
          query getPolicyOverlay($where: PolicyOverlayWhereUniqueInput!) {
            getPolicyOverlay(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  tradingPolicyId: props.tradingPolicyId !== undefined ? {
    equals: props.tradingPolicyId 
  } : undefined,
  status: props.status !== undefined ? {
    equals: props.status 
  } : undefined,
  correlationId: props.correlationId !== undefined ? {
    equals: props.correlationId 
  } : undefined,
  triggerEventId: props.triggerEventId !== undefined ? {
    equals: props.triggerEventId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_POLICYOVERLAY,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getPolicyOverlay ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No PolicyOverlay found') {
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
          logger.warn("Database connection error in getPolicyOverlay, retrying...", {
            operation: 'getPolicyOverlay',
            model: 'PolicyOverlay',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database get operation failed", {
          operation: 'getPolicyOverlay',
          model: 'PolicyOverlay',
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
   * Retrieve all PolicyOverlays records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of PolicyOverlay records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<PolicyOverlayType[] | null> {
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

        const GET_ALL_POLICYOVERLAY = gql`
          query getAllPolicyOverlay {
            policyOverlays {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_POLICYOVERLAY,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.policyOverlays ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No PolicyOverlay found') {
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
          logger.warn("Database connection error in getAllPolicyOverlay, retrying...", {
            operation: 'getAllPolicyOverlay',
            model: 'PolicyOverlay',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database getAll operation failed", {
          operation: 'getAllPolicyOverlay',
          model: 'PolicyOverlay',
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
   * Find multiple PolicyOverlay records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found PolicyOverlay records or null.
   */
  async findMany(props: PolicyOverlayType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<PolicyOverlayType[] | null> {
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

        const FIND_MANY_POLICYOVERLAY = gql`
          query findManyPolicyOverlay($where: PolicyOverlayWhereInput!) {
            policyOverlays(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  tradingPolicyId: props.tradingPolicyId !== undefined ? {
    equals: props.tradingPolicyId 
  } : undefined,
  status: props.status !== undefined ? {
    equals: props.status 
  } : undefined,
  correlationId: props.correlationId !== undefined ? {
    equals: props.correlationId 
  } : undefined,
  triggerEventId: props.triggerEventId !== undefined ? {
    equals: props.triggerEventId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_POLICYOVERLAY,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.policyoverlays) {
          return response.data.policyOverlays;
        } else {
          return [] as PolicyOverlayType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No PolicyOverlay found') {
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
          logger.warn("Database connection error in findManyPolicyOverlay, retrying...", {
            operation: 'findManyPolicyOverlay',
            model: 'PolicyOverlay',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database findMany operation failed", {
          operation: 'findManyPolicyOverlay',
          model: 'PolicyOverlay',
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
