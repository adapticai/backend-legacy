
  
import { WaitlistEntry as WaitlistEntryType } from './generated/typegraphql-prisma/models/WaitlistEntry';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the WaitlistEntry model.
   */

  const selectionSet = `
    
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
  reviewedBy {
    id
    name
    email
    emailVerified
    image
    createdAt
    updatedAt
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
  }
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

  `;

  export const WaitlistEntry = {

    /**
     * Create a new WaitlistEntry record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created WaitlistEntry or null.
     */

    /**
     * Create a new WaitlistEntry record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created WaitlistEntry or null.
     */
    async create(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<WaitlistEntryType> {
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

          const CREATE_ONE_WAITLISTENTRY = gql`
              mutation createOneWaitlistEntry($data: WaitlistEntryCreateInput!) {
                createOneWaitlistEntry(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                email: props.email !== undefined ? props.email : undefined,
  fullName: props.fullName !== undefined ? props.fullName : undefined,
  companyName: props.companyName !== undefined ? props.companyName : undefined,
  companyWebsite: props.companyWebsite !== undefined ? props.companyWebsite : undefined,
  jobRole: props.jobRole !== undefined ? props.jobRole : undefined,
  professionalInvestorConfirmed: props.professionalInvestorConfirmed !== undefined ? props.professionalInvestorConfirmed : undefined,
  status: props.status !== undefined ? props.status : undefined,
  queuePosition: props.queuePosition !== undefined ? props.queuePosition : undefined,
  reviewedAt: props.reviewedAt !== undefined ? props.reviewedAt : undefined,
  reviewedBy: props.reviewedBy ? 
    typeof props.reviewedBy === 'object' && Object.keys(props.reviewedBy).length === 1 && Object.keys(props.reviewedBy)[0] === 'id'
    ? { connect: {
        id: props.reviewedBy.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.reviewedBy.id !== undefined ? props.reviewedBy.id : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        name: props.reviewedBy.name !== undefined ? {
            equals: props.reviewedBy.name 
           } : undefined,
      },
      create: {
        name: props.reviewedBy.name !== undefined ? props.reviewedBy.name : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? props.reviewedBy.emailVerified : undefined,
        image: props.reviewedBy.image !== undefined ? props.reviewedBy.image : undefined,
        role: props.reviewedBy.role !== undefined ? props.reviewedBy.role : undefined,
        bio: props.reviewedBy.bio !== undefined ? props.reviewedBy.bio : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? props.reviewedBy.jobTitle : undefined,
        currentAccount: props.reviewedBy.currentAccount !== undefined ? props.reviewedBy.currentAccount : undefined,
        plan: props.reviewedBy.plan !== undefined ? props.reviewedBy.plan : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? props.reviewedBy.openaiAPIKey : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? props.reviewedBy.openaiModel : undefined,
    customer: props.reviewedBy.customer ? 
      typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && Object.keys(props.reviewedBy.customer)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? props.reviewedBy.customer.id : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId 
             } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name 
             } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
      Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 &&  props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
      Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 &&  props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
      Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 &&  props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.authenticators.map((item: any) => ({
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
    alpacaAccounts: props.reviewedBy.alpacaAccounts ? 
      Array.isArray(props.reviewedBy.alpacaAccounts) && props.reviewedBy.alpacaAccounts.length > 0 &&  props.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.alpacaAccounts.map((item: any) => ({
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
    linkedProviders: props.reviewedBy.linkedProviders ? 
      Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 &&  props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
      Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 &&  props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      },
    }
  } : undefined,
  inviteToken: props.inviteToken ? 
    typeof props.inviteToken === 'object' && Object.keys(props.inviteToken).length === 1 && Object.keys(props.inviteToken)[0] === 'id'
    ? { connect: {
        id: props.inviteToken.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.inviteToken.id !== undefined ? props.inviteToken.id : undefined,
        waitlistEntryId: props.inviteToken.waitlistEntryId !== undefined ? props.inviteToken.waitlistEntryId : undefined,
        email: props.inviteToken.email !== undefined ? {
            equals: props.inviteToken.email 
           } : undefined,
      },
      create: {
        token: props.inviteToken.token !== undefined ? props.inviteToken.token : undefined,
        email: props.inviteToken.email !== undefined ? props.inviteToken.email : undefined,
        used: props.inviteToken.used !== undefined ? props.inviteToken.used : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? props.inviteToken.usedAt : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? props.inviteToken.expiresAt : undefined,
      },
    }
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_WAITLISTENTRY,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneWaitlistEntry) {
            return response.data.createOneWaitlistEntry;
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
   * Create multiple WaitlistEntry records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of WaitlistEntry objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: WaitlistEntryType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_WAITLISTENTRY = gql`
          mutation createManyWaitlistEntry($data: [WaitlistEntryCreateManyInput!]!) {
            createManyWaitlistEntry(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      email: prop.email !== undefined ? prop.email : undefined,
  fullName: prop.fullName !== undefined ? prop.fullName : undefined,
  companyName: prop.companyName !== undefined ? prop.companyName : undefined,
  companyWebsite: prop.companyWebsite !== undefined ? prop.companyWebsite : undefined,
  jobRole: prop.jobRole !== undefined ? prop.jobRole : undefined,
  professionalInvestorConfirmed: prop.professionalInvestorConfirmed !== undefined ? prop.professionalInvestorConfirmed : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  queuePosition: prop.queuePosition !== undefined ? prop.queuePosition : undefined,
  reviewedAt: prop.reviewedAt !== undefined ? prop.reviewedAt : undefined,
  reviewedById: prop.reviewedById !== undefined ? prop.reviewedById : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_WAITLISTENTRY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyWaitlistEntry) {
          return response.data.createManyWaitlistEntry;
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
   * Update a single WaitlistEntry record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated WaitlistEntry or null.
   */
  async update(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<WaitlistEntryType> {
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

        const UPDATE_ONE_WAITLISTENTRY = gql`
          mutation updateOneWaitlistEntry($data: WaitlistEntryUpdateInput!, $where: WaitlistEntryWhereUniqueInput!) {
            updateOneWaitlistEntry(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  fullName: props.fullName !== undefined ? {
            set: props.fullName 
           } : undefined,
  companyName: props.companyName !== undefined ? {
            set: props.companyName 
           } : undefined,
  companyWebsite: props.companyWebsite !== undefined ? {
            set: props.companyWebsite 
           } : undefined,
  jobRole: props.jobRole !== undefined ? {
            set: props.jobRole 
           } : undefined,
  professionalInvestorConfirmed: props.professionalInvestorConfirmed !== undefined ? {
            set: props.professionalInvestorConfirmed 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  queuePosition: props.queuePosition !== undefined ? {
            set: props.queuePosition 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  reviewedAt: props.reviewedAt !== undefined ? {
            set: props.reviewedAt 
           } : undefined,
  reviewedBy: props.reviewedBy ? 
  typeof props.reviewedBy === 'object' && Object.keys(props.reviewedBy).length === 1 && (Object.keys(props.reviewedBy)[0] === 'id' || Object.keys(props.reviewedBy)[0] === 'symbol')
? {
  connect: {
    id: props.reviewedBy.id
  }
} : { upsert: {
      where: {
        id: props.reviewedBy.id !== undefined ? {
            equals: props.reviewedBy.id
          } : undefined,
        name: props.reviewedBy.name !== undefined ? {
            equals: props.reviewedBy.name
          } : undefined,
        email: props.reviewedBy.email !== undefined ? {
            equals: props.reviewedBy.email
          } : undefined,
        customerId: props.reviewedBy.customerId !== undefined ? {
            equals: props.reviewedBy.customerId
          } : undefined,
      },
      update: {
        id: props.reviewedBy.id !== undefined ? {
            set: props.reviewedBy.id
          } : undefined,
        name: props.reviewedBy.name !== undefined ? {
            set: props.reviewedBy.name
          } : undefined,
        email: props.reviewedBy.email !== undefined ? {
            set: props.reviewedBy.email
          } : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? {
            set: props.reviewedBy.emailVerified
          } : undefined,
        image: props.reviewedBy.image !== undefined ? {
            set: props.reviewedBy.image
          } : undefined,
        role: props.reviewedBy.role !== undefined ? {
            set: props.reviewedBy.role
          } : undefined,
        bio: props.reviewedBy.bio !== undefined ? {
            set: props.reviewedBy.bio
          } : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? {
            set: props.reviewedBy.jobTitle
          } : undefined,
        currentAccount: props.reviewedBy.currentAccount !== undefined ? {
            set: props.reviewedBy.currentAccount
          } : undefined,
        plan: props.reviewedBy.plan !== undefined ? {
            set: props.reviewedBy.plan
          } : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? {
            set: props.reviewedBy.openaiAPIKey
          } : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? {
            set: props.reviewedBy.openaiModel
          } : undefined,
    customer: props.reviewedBy.customer ? 
    typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && (Object.keys(props.reviewedBy.customer)[0] === 'id' || Object.keys(props.reviewedBy.customer)[0] === 'symbol')
? {
    connect: {
      id: props.reviewedBy.customer.id
    }
} : { upsert: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? {
              equals: props.reviewedBy.customer.id
            } : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId
            } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name
            } : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? {
              equals: props.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              equals: props.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              set: props.reviewedBy.customer.authUserId
            } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              set: props.reviewedBy.customer.name
            } : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? {
              set: props.reviewedBy.customer.plan
            } : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? {
              set: props.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              set: props.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              set: props.reviewedBy.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: props.reviewedBy.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
    Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 && props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
    Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 && props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
    Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 && props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.authenticators.map((item: any) => ({
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
    alpacaAccounts: props.reviewedBy.alpacaAccounts ? 
    Array.isArray(props.reviewedBy.alpacaAccounts) && props.reviewedBy.alpacaAccounts.length > 0 && props.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.alpacaAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.alpacaAccounts.map((item: any) => ({
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
    linkedProviders: props.reviewedBy.linkedProviders ? 
    Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 && props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
    Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 && props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      },
      create: {
        name: props.reviewedBy.name !== undefined ? props.reviewedBy.name : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? props.reviewedBy.emailVerified : undefined,
        image: props.reviewedBy.image !== undefined ? props.reviewedBy.image : undefined,
        role: props.reviewedBy.role !== undefined ? props.reviewedBy.role : undefined,
        bio: props.reviewedBy.bio !== undefined ? props.reviewedBy.bio : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? props.reviewedBy.jobTitle : undefined,
        currentAccount: props.reviewedBy.currentAccount !== undefined ? props.reviewedBy.currentAccount : undefined,
        plan: props.reviewedBy.plan !== undefined ? props.reviewedBy.plan : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? props.reviewedBy.openaiAPIKey : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? props.reviewedBy.openaiModel : undefined,
    customer: props.reviewedBy.customer ? 
      typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && Object.keys(props.reviewedBy.customer)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? props.reviewedBy.customer.id : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId 
             } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name 
             } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
      Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 &&  props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
      Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 &&  props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
      Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 &&  props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.authenticators.map((item: any) => ({
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
    alpacaAccounts: props.reviewedBy.alpacaAccounts ? 
      Array.isArray(props.reviewedBy.alpacaAccounts) && props.reviewedBy.alpacaAccounts.length > 0 &&  props.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.alpacaAccounts.map((item: any) => ({
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
    linkedProviders: props.reviewedBy.linkedProviders ? 
      Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 &&  props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
      Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 &&  props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      },
    }
  } : undefined,
  inviteToken: props.inviteToken ? 
  typeof props.inviteToken === 'object' && Object.keys(props.inviteToken).length === 1 && (Object.keys(props.inviteToken)[0] === 'id' || Object.keys(props.inviteToken)[0] === 'symbol')
? {
  connect: {
    id: props.inviteToken.id
  }
} : { upsert: {
      where: {
        id: props.inviteToken.id !== undefined ? {
            equals: props.inviteToken.id
          } : undefined,
        email: props.inviteToken.email !== undefined ? {
            equals: props.inviteToken.email
          } : undefined,
        waitlistEntryId: props.inviteToken.waitlistEntryId !== undefined ? {
            equals: props.inviteToken.waitlistEntryId
          } : undefined,
      },
      update: {
        id: props.inviteToken.id !== undefined ? {
            set: props.inviteToken.id
          } : undefined,
        token: props.inviteToken.token !== undefined ? {
            set: props.inviteToken.token
          } : undefined,
        email: props.inviteToken.email !== undefined ? {
            set: props.inviteToken.email
          } : undefined,
        used: props.inviteToken.used !== undefined ? {
            set: props.inviteToken.used
          } : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? {
            set: props.inviteToken.usedAt
          } : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? {
            set: props.inviteToken.expiresAt
          } : undefined,
      },
      create: {
        token: props.inviteToken.token !== undefined ? props.inviteToken.token : undefined,
        email: props.inviteToken.email !== undefined ? props.inviteToken.email : undefined,
        used: props.inviteToken.used !== undefined ? props.inviteToken.used : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? props.inviteToken.usedAt : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? props.inviteToken.expiresAt : undefined,
      },
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_WAITLISTENTRY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneWaitlistEntry) {
          return response.data.updateOneWaitlistEntry;
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
   * Upsert a single WaitlistEntry record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated WaitlistEntry or null.
   */
  async upsert(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<WaitlistEntryType> {
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

        const UPSERT_ONE_WAITLISTENTRY = gql`
          mutation upsertOneWaitlistEntry($where: WaitlistEntryWhereUniqueInput!, $create: WaitlistEntryCreateInput!, $update: WaitlistEntryUpdateInput!) {
            upsertOneWaitlistEntry(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
      },
          create: {
        email: props.email !== undefined ? props.email : undefined,
  fullName: props.fullName !== undefined ? props.fullName : undefined,
  companyName: props.companyName !== undefined ? props.companyName : undefined,
  companyWebsite: props.companyWebsite !== undefined ? props.companyWebsite : undefined,
  jobRole: props.jobRole !== undefined ? props.jobRole : undefined,
  professionalInvestorConfirmed: props.professionalInvestorConfirmed !== undefined ? props.professionalInvestorConfirmed : undefined,
  status: props.status !== undefined ? props.status : undefined,
  queuePosition: props.queuePosition !== undefined ? props.queuePosition : undefined,
  reviewedAt: props.reviewedAt !== undefined ? props.reviewedAt : undefined,
  reviewedBy: props.reviewedBy ? 
    typeof props.reviewedBy === 'object' && Object.keys(props.reviewedBy).length === 1 && Object.keys(props.reviewedBy)[0] === 'id'
    ? { connect: {
        id: props.reviewedBy.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.reviewedBy.id !== undefined ? props.reviewedBy.id : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        name: props.reviewedBy.name !== undefined ? {
            equals: props.reviewedBy.name 
           } : undefined,
      },
      create: {
        name: props.reviewedBy.name !== undefined ? props.reviewedBy.name : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? props.reviewedBy.emailVerified : undefined,
        image: props.reviewedBy.image !== undefined ? props.reviewedBy.image : undefined,
        role: props.reviewedBy.role !== undefined ? props.reviewedBy.role : undefined,
        bio: props.reviewedBy.bio !== undefined ? props.reviewedBy.bio : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? props.reviewedBy.jobTitle : undefined,
        currentAccount: props.reviewedBy.currentAccount !== undefined ? props.reviewedBy.currentAccount : undefined,
        plan: props.reviewedBy.plan !== undefined ? props.reviewedBy.plan : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? props.reviewedBy.openaiAPIKey : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? props.reviewedBy.openaiModel : undefined,
    customer: props.reviewedBy.customer ? 
      typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && Object.keys(props.reviewedBy.customer)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? props.reviewedBy.customer.id : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId 
             } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name 
             } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
      Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 &&  props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
      Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 &&  props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
      Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 &&  props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.authenticators.map((item: any) => ({
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
    alpacaAccounts: props.reviewedBy.alpacaAccounts ? 
      Array.isArray(props.reviewedBy.alpacaAccounts) && props.reviewedBy.alpacaAccounts.length > 0 &&  props.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.alpacaAccounts.map((item: any) => ({
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
    linkedProviders: props.reviewedBy.linkedProviders ? 
      Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 &&  props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
      Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 &&  props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      },
    }
  } : undefined,
  inviteToken: props.inviteToken ? 
    typeof props.inviteToken === 'object' && Object.keys(props.inviteToken).length === 1 && Object.keys(props.inviteToken)[0] === 'id'
    ? { connect: {
        id: props.inviteToken.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.inviteToken.id !== undefined ? props.inviteToken.id : undefined,
        waitlistEntryId: props.inviteToken.waitlistEntryId !== undefined ? props.inviteToken.waitlistEntryId : undefined,
        email: props.inviteToken.email !== undefined ? {
            equals: props.inviteToken.email 
           } : undefined,
      },
      create: {
        token: props.inviteToken.token !== undefined ? props.inviteToken.token : undefined,
        email: props.inviteToken.email !== undefined ? props.inviteToken.email : undefined,
        used: props.inviteToken.used !== undefined ? props.inviteToken.used : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? props.inviteToken.usedAt : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? props.inviteToken.expiresAt : undefined,
      },
    }
  } : undefined,
      },
          update: {
      email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  fullName: props.fullName !== undefined ? {
            set: props.fullName 
           } : undefined,
  companyName: props.companyName !== undefined ? {
            set: props.companyName 
           } : undefined,
  companyWebsite: props.companyWebsite !== undefined ? {
            set: props.companyWebsite 
           } : undefined,
  jobRole: props.jobRole !== undefined ? {
            set: props.jobRole 
           } : undefined,
  professionalInvestorConfirmed: props.professionalInvestorConfirmed !== undefined ? {
            set: props.professionalInvestorConfirmed 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  queuePosition: props.queuePosition !== undefined ? {
            set: props.queuePosition 
           } : undefined,
  reviewedAt: props.reviewedAt !== undefined ? {
            set: props.reviewedAt 
           } : undefined,
  reviewedBy: props.reviewedBy ? 
  typeof props.reviewedBy === 'object' && Object.keys(props.reviewedBy).length === 1 && (Object.keys(props.reviewedBy)[0] === 'id' || Object.keys(props.reviewedBy)[0] === 'symbol')
? {
  connect: {
    id: props.reviewedBy.id
  }
} : { upsert: {
      where: {
        id: props.reviewedBy.id !== undefined ? {
            equals: props.reviewedBy.id
          } : undefined,
        name: props.reviewedBy.name !== undefined ? {
            equals: props.reviewedBy.name
          } : undefined,
        email: props.reviewedBy.email !== undefined ? {
            equals: props.reviewedBy.email
          } : undefined,
        customerId: props.reviewedBy.customerId !== undefined ? {
            equals: props.reviewedBy.customerId
          } : undefined,
      },
      update: {
        id: props.reviewedBy.id !== undefined ? {
            set: props.reviewedBy.id
          } : undefined,
        name: props.reviewedBy.name !== undefined ? {
            set: props.reviewedBy.name
          } : undefined,
        email: props.reviewedBy.email !== undefined ? {
            set: props.reviewedBy.email
          } : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? {
            set: props.reviewedBy.emailVerified
          } : undefined,
        image: props.reviewedBy.image !== undefined ? {
            set: props.reviewedBy.image
          } : undefined,
        role: props.reviewedBy.role !== undefined ? {
            set: props.reviewedBy.role
          } : undefined,
        bio: props.reviewedBy.bio !== undefined ? {
            set: props.reviewedBy.bio
          } : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? {
            set: props.reviewedBy.jobTitle
          } : undefined,
        currentAccount: props.reviewedBy.currentAccount !== undefined ? {
            set: props.reviewedBy.currentAccount
          } : undefined,
        plan: props.reviewedBy.plan !== undefined ? {
            set: props.reviewedBy.plan
          } : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? {
            set: props.reviewedBy.openaiAPIKey
          } : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? {
            set: props.reviewedBy.openaiModel
          } : undefined,
    customer: props.reviewedBy.customer ? 
    typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && (Object.keys(props.reviewedBy.customer)[0] === 'id' || Object.keys(props.reviewedBy.customer)[0] === 'symbol')
? {
    connect: {
      id: props.reviewedBy.customer.id
    }
} : { upsert: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? {
              equals: props.reviewedBy.customer.id
            } : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId
            } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name
            } : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? {
              equals: props.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              equals: props.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              set: props.reviewedBy.customer.authUserId
            } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              set: props.reviewedBy.customer.name
            } : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? {
              set: props.reviewedBy.customer.plan
            } : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? {
              set: props.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              set: props.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              set: props.reviewedBy.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: props.reviewedBy.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
    Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 && props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
    Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 && props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
    Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 && props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.authenticators.map((item: any) => ({
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
    alpacaAccounts: props.reviewedBy.alpacaAccounts ? 
    Array.isArray(props.reviewedBy.alpacaAccounts) && props.reviewedBy.alpacaAccounts.length > 0 && props.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.alpacaAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.alpacaAccounts.map((item: any) => ({
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
    linkedProviders: props.reviewedBy.linkedProviders ? 
    Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 && props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
    Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 && props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      },
      create: {
        name: props.reviewedBy.name !== undefined ? props.reviewedBy.name : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? props.reviewedBy.emailVerified : undefined,
        image: props.reviewedBy.image !== undefined ? props.reviewedBy.image : undefined,
        role: props.reviewedBy.role !== undefined ? props.reviewedBy.role : undefined,
        bio: props.reviewedBy.bio !== undefined ? props.reviewedBy.bio : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? props.reviewedBy.jobTitle : undefined,
        currentAccount: props.reviewedBy.currentAccount !== undefined ? props.reviewedBy.currentAccount : undefined,
        plan: props.reviewedBy.plan !== undefined ? props.reviewedBy.plan : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? props.reviewedBy.openaiAPIKey : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? props.reviewedBy.openaiModel : undefined,
    customer: props.reviewedBy.customer ? 
      typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && Object.keys(props.reviewedBy.customer)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? props.reviewedBy.customer.id : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId 
             } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name 
             } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
      Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 &&  props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
      Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 &&  props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
      Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 &&  props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.authenticators.map((item: any) => ({
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
    alpacaAccounts: props.reviewedBy.alpacaAccounts ? 
      Array.isArray(props.reviewedBy.alpacaAccounts) && props.reviewedBy.alpacaAccounts.length > 0 &&  props.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.alpacaAccounts.map((item: any) => ({
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
    linkedProviders: props.reviewedBy.linkedProviders ? 
      Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 &&  props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
      Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 &&  props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      },
    }
  } : undefined,
  inviteToken: props.inviteToken ? 
  typeof props.inviteToken === 'object' && Object.keys(props.inviteToken).length === 1 && (Object.keys(props.inviteToken)[0] === 'id' || Object.keys(props.inviteToken)[0] === 'symbol')
? {
  connect: {
    id: props.inviteToken.id
  }
} : { upsert: {
      where: {
        id: props.inviteToken.id !== undefined ? {
            equals: props.inviteToken.id
          } : undefined,
        email: props.inviteToken.email !== undefined ? {
            equals: props.inviteToken.email
          } : undefined,
        waitlistEntryId: props.inviteToken.waitlistEntryId !== undefined ? {
            equals: props.inviteToken.waitlistEntryId
          } : undefined,
      },
      update: {
        id: props.inviteToken.id !== undefined ? {
            set: props.inviteToken.id
          } : undefined,
        token: props.inviteToken.token !== undefined ? {
            set: props.inviteToken.token
          } : undefined,
        email: props.inviteToken.email !== undefined ? {
            set: props.inviteToken.email
          } : undefined,
        used: props.inviteToken.used !== undefined ? {
            set: props.inviteToken.used
          } : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? {
            set: props.inviteToken.usedAt
          } : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? {
            set: props.inviteToken.expiresAt
          } : undefined,
      },
      create: {
        token: props.inviteToken.token !== undefined ? props.inviteToken.token : undefined,
        email: props.inviteToken.email !== undefined ? props.inviteToken.email : undefined,
        used: props.inviteToken.used !== undefined ? props.inviteToken.used : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? props.inviteToken.usedAt : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? props.inviteToken.expiresAt : undefined,
      },
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_WAITLISTENTRY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneWaitlistEntry) {
          return response.data.upsertOneWaitlistEntry;
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
   * Update multiple WaitlistEntry records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of WaitlistEntry objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: WaitlistEntryType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_WAITLISTENTRY = gql`
          mutation updateManyWaitlistEntry($data: [WaitlistEntryCreateManyInput!]!) {
            updateManyWaitlistEntry(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  email: prop.email !== undefined ? prop.email : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  email: prop.email !== undefined ? {
            set: prop.email 
           } : undefined,
  fullName: prop.fullName !== undefined ? {
            set: prop.fullName 
           } : undefined,
  companyName: prop.companyName !== undefined ? {
            set: prop.companyName 
           } : undefined,
  companyWebsite: prop.companyWebsite !== undefined ? {
            set: prop.companyWebsite 
           } : undefined,
  jobRole: prop.jobRole !== undefined ? {
            set: prop.jobRole 
           } : undefined,
  professionalInvestorConfirmed: prop.professionalInvestorConfirmed !== undefined ? {
            set: prop.professionalInvestorConfirmed 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  queuePosition: prop.queuePosition !== undefined ? {
            set: prop.queuePosition 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  reviewedAt: prop.reviewedAt !== undefined ? {
            set: prop.reviewedAt 
           } : undefined,
  reviewedBy: prop.reviewedBy ? 
  typeof prop.reviewedBy === 'object' && Object.keys(prop.reviewedBy).length === 1 && (Object.keys(prop.reviewedBy)[0] === 'id' || Object.keys(prop.reviewedBy)[0] === 'symbol')
? {
  connect: {
    id: prop.reviewedBy.id
  }
} : { upsert: {
      where: {
        id: prop.reviewedBy.id !== undefined ? {
            equals: prop.reviewedBy.id
          } : undefined,
        name: prop.reviewedBy.name !== undefined ? {
            equals: prop.reviewedBy.name
          } : undefined,
        email: prop.reviewedBy.email !== undefined ? {
            equals: prop.reviewedBy.email
          } : undefined,
        customerId: prop.reviewedBy.customerId !== undefined ? {
            equals: prop.reviewedBy.customerId
          } : undefined,
      },
      update: {
        id: prop.reviewedBy.id !== undefined ? {
            set: prop.reviewedBy.id
          } : undefined,
        name: prop.reviewedBy.name !== undefined ? {
            set: prop.reviewedBy.name
          } : undefined,
        email: prop.reviewedBy.email !== undefined ? {
            set: prop.reviewedBy.email
          } : undefined,
        emailVerified: prop.reviewedBy.emailVerified !== undefined ? {
            set: prop.reviewedBy.emailVerified
          } : undefined,
        image: prop.reviewedBy.image !== undefined ? {
            set: prop.reviewedBy.image
          } : undefined,
        role: prop.reviewedBy.role !== undefined ? {
            set: prop.reviewedBy.role
          } : undefined,
        bio: prop.reviewedBy.bio !== undefined ? {
            set: prop.reviewedBy.bio
          } : undefined,
        jobTitle: prop.reviewedBy.jobTitle !== undefined ? {
            set: prop.reviewedBy.jobTitle
          } : undefined,
        currentAccount: prop.reviewedBy.currentAccount !== undefined ? {
            set: prop.reviewedBy.currentAccount
          } : undefined,
        plan: prop.reviewedBy.plan !== undefined ? {
            set: prop.reviewedBy.plan
          } : undefined,
        openaiAPIKey: prop.reviewedBy.openaiAPIKey !== undefined ? {
            set: prop.reviewedBy.openaiAPIKey
          } : undefined,
        openaiModel: prop.reviewedBy.openaiModel !== undefined ? {
            set: prop.reviewedBy.openaiModel
          } : undefined,
    customer: prop.reviewedBy.customer ? 
    typeof prop.reviewedBy.customer === 'object' && Object.keys(prop.reviewedBy.customer).length === 1 && (Object.keys(prop.reviewedBy.customer)[0] === 'id' || Object.keys(prop.reviewedBy.customer)[0] === 'symbol')
? {
    connect: {
      id: prop.reviewedBy.customer.id
    }
} : { upsert: {
        where: {
          id: prop.reviewedBy.customer.id !== undefined ? {
              equals: prop.reviewedBy.customer.id
            } : undefined,
          authUserId: prop.reviewedBy.customer.authUserId !== undefined ? {
              equals: prop.reviewedBy.customer.authUserId
            } : undefined,
          name: prop.reviewedBy.customer.name !== undefined ? {
              equals: prop.reviewedBy.customer.name
            } : undefined,
          stripeCustomerId: prop.reviewedBy.customer.stripeCustomerId !== undefined ? {
              equals: prop.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: prop.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              equals: prop.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: prop.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: prop.reviewedBy.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: prop.reviewedBy.customer.authUserId !== undefined ? {
              set: prop.reviewedBy.customer.authUserId
            } : undefined,
          name: prop.reviewedBy.customer.name !== undefined ? {
              set: prop.reviewedBy.customer.name
            } : undefined,
          plan: prop.reviewedBy.customer.plan !== undefined ? {
              set: prop.reviewedBy.customer.plan
            } : undefined,
          stripeCustomerId: prop.reviewedBy.customer.stripeCustomerId !== undefined ? {
              set: prop.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: prop.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              set: prop.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: prop.reviewedBy.customer.stripePriceId !== undefined ? {
              set: prop.reviewedBy.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: prop.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: prop.reviewedBy.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: prop.reviewedBy.customer.authUserId !== undefined ? prop.reviewedBy.customer.authUserId : undefined,
          name: prop.reviewedBy.customer.name !== undefined ? prop.reviewedBy.customer.name : undefined,
          plan: prop.reviewedBy.customer.plan !== undefined ? prop.reviewedBy.customer.plan : undefined,
          stripeCustomerId: prop.reviewedBy.customer.stripeCustomerId !== undefined ? prop.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.reviewedBy.customer.stripeSubscriptionId !== undefined ? prop.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.reviewedBy.customer.stripePriceId !== undefined ? prop.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? prop.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.reviewedBy.accounts ? 
    Array.isArray(prop.reviewedBy.accounts) && prop.reviewedBy.accounts.length > 0 && prop.reviewedBy.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.accounts.map((item: any) => ({
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
    sessions: prop.reviewedBy.sessions ? 
    Array.isArray(prop.reviewedBy.sessions) && prop.reviewedBy.sessions.length > 0 && prop.reviewedBy.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: prop.reviewedBy.authenticators ? 
    Array.isArray(prop.reviewedBy.authenticators) && prop.reviewedBy.authenticators.length > 0 && prop.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.authenticators.map((item: any) => ({
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
    alpacaAccounts: prop.reviewedBy.alpacaAccounts ? 
    Array.isArray(prop.reviewedBy.alpacaAccounts) && prop.reviewedBy.alpacaAccounts.length > 0 && prop.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.alpacaAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.alpacaAccounts.map((item: any) => ({
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
    linkedProviders: prop.reviewedBy.linkedProviders ? 
    Array.isArray(prop.reviewedBy.linkedProviders) && prop.reviewedBy.linkedProviders.length > 0 && prop.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: prop.reviewedBy.accountLinkingRequests ? 
    Array.isArray(prop.reviewedBy.accountLinkingRequests) && prop.reviewedBy.accountLinkingRequests.length > 0 && prop.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      },
      create: {
        name: prop.reviewedBy.name !== undefined ? prop.reviewedBy.name : undefined,
        email: prop.reviewedBy.email !== undefined ? prop.reviewedBy.email : undefined,
        emailVerified: prop.reviewedBy.emailVerified !== undefined ? prop.reviewedBy.emailVerified : undefined,
        image: prop.reviewedBy.image !== undefined ? prop.reviewedBy.image : undefined,
        role: prop.reviewedBy.role !== undefined ? prop.reviewedBy.role : undefined,
        bio: prop.reviewedBy.bio !== undefined ? prop.reviewedBy.bio : undefined,
        jobTitle: prop.reviewedBy.jobTitle !== undefined ? prop.reviewedBy.jobTitle : undefined,
        currentAccount: prop.reviewedBy.currentAccount !== undefined ? prop.reviewedBy.currentAccount : undefined,
        plan: prop.reviewedBy.plan !== undefined ? prop.reviewedBy.plan : undefined,
        openaiAPIKey: prop.reviewedBy.openaiAPIKey !== undefined ? prop.reviewedBy.openaiAPIKey : undefined,
        openaiModel: prop.reviewedBy.openaiModel !== undefined ? prop.reviewedBy.openaiModel : undefined,
    customer: prop.reviewedBy.customer ? 
      typeof prop.reviewedBy.customer === 'object' && Object.keys(prop.reviewedBy.customer).length === 1 && Object.keys(prop.reviewedBy.customer)[0] === 'id'
    ? { connect: {
          id: prop.reviewedBy.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.reviewedBy.customer.id !== undefined ? prop.reviewedBy.customer.id : undefined,
          stripeCustomerId: prop.reviewedBy.customer.stripeCustomerId !== undefined ? prop.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.reviewedBy.customer.stripeSubscriptionId !== undefined ? prop.reviewedBy.customer.stripeSubscriptionId : undefined,
          authUserId: prop.reviewedBy.customer.authUserId !== undefined ? {
              equals: prop.reviewedBy.customer.authUserId 
             } : undefined,
          name: prop.reviewedBy.customer.name !== undefined ? {
              equals: prop.reviewedBy.customer.name 
             } : undefined,
          stripePriceId: prop.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: prop.reviewedBy.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: prop.reviewedBy.customer.authUserId !== undefined ? prop.reviewedBy.customer.authUserId : undefined,
          name: prop.reviewedBy.customer.name !== undefined ? prop.reviewedBy.customer.name : undefined,
          plan: prop.reviewedBy.customer.plan !== undefined ? prop.reviewedBy.customer.plan : undefined,
          stripeCustomerId: prop.reviewedBy.customer.stripeCustomerId !== undefined ? prop.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.reviewedBy.customer.stripeSubscriptionId !== undefined ? prop.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.reviewedBy.customer.stripePriceId !== undefined ? prop.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? prop.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.reviewedBy.accounts ? 
      Array.isArray(prop.reviewedBy.accounts) && prop.reviewedBy.accounts.length > 0 &&  prop.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.accounts.map((item: any) => ({
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
    sessions: prop.reviewedBy.sessions ? 
      Array.isArray(prop.reviewedBy.sessions) && prop.reviewedBy.sessions.length > 0 &&  prop.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: prop.reviewedBy.authenticators ? 
      Array.isArray(prop.reviewedBy.authenticators) && prop.reviewedBy.authenticators.length > 0 &&  prop.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.authenticators.map((item: any) => ({
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
    alpacaAccounts: prop.reviewedBy.alpacaAccounts ? 
      Array.isArray(prop.reviewedBy.alpacaAccounts) && prop.reviewedBy.alpacaAccounts.length > 0 &&  prop.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.alpacaAccounts.map((item: any) => ({
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
    linkedProviders: prop.reviewedBy.linkedProviders ? 
      Array.isArray(prop.reviewedBy.linkedProviders) && prop.reviewedBy.linkedProviders.length > 0 &&  prop.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: prop.reviewedBy.accountLinkingRequests ? 
      Array.isArray(prop.reviewedBy.accountLinkingRequests) && prop.reviewedBy.accountLinkingRequests.length > 0 &&  prop.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      },
    }
  } : undefined,
  inviteToken: prop.inviteToken ? 
  typeof prop.inviteToken === 'object' && Object.keys(prop.inviteToken).length === 1 && (Object.keys(prop.inviteToken)[0] === 'id' || Object.keys(prop.inviteToken)[0] === 'symbol')
? {
  connect: {
    id: prop.inviteToken.id
  }
} : { upsert: {
      where: {
        id: prop.inviteToken.id !== undefined ? {
            equals: prop.inviteToken.id
          } : undefined,
        email: prop.inviteToken.email !== undefined ? {
            equals: prop.inviteToken.email
          } : undefined,
        waitlistEntryId: prop.inviteToken.waitlistEntryId !== undefined ? {
            equals: prop.inviteToken.waitlistEntryId
          } : undefined,
      },
      update: {
        id: prop.inviteToken.id !== undefined ? {
            set: prop.inviteToken.id
          } : undefined,
        token: prop.inviteToken.token !== undefined ? {
            set: prop.inviteToken.token
          } : undefined,
        email: prop.inviteToken.email !== undefined ? {
            set: prop.inviteToken.email
          } : undefined,
        used: prop.inviteToken.used !== undefined ? {
            set: prop.inviteToken.used
          } : undefined,
        usedAt: prop.inviteToken.usedAt !== undefined ? {
            set: prop.inviteToken.usedAt
          } : undefined,
        expiresAt: prop.inviteToken.expiresAt !== undefined ? {
            set: prop.inviteToken.expiresAt
          } : undefined,
      },
      create: {
        token: prop.inviteToken.token !== undefined ? prop.inviteToken.token : undefined,
        email: prop.inviteToken.email !== undefined ? prop.inviteToken.email : undefined,
        used: prop.inviteToken.used !== undefined ? prop.inviteToken.used : undefined,
        usedAt: prop.inviteToken.usedAt !== undefined ? prop.inviteToken.usedAt : undefined,
        expiresAt: prop.inviteToken.expiresAt !== undefined ? prop.inviteToken.expiresAt : undefined,
      },
    }
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_WAITLISTENTRY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyWaitlistEntry) {
          return response.data.updateManyWaitlistEntry;
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
   * Delete a single WaitlistEntry record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted WaitlistEntry or null.
   */
  async delete(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<WaitlistEntryType> {
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

        const DELETE_ONE_WAITLISTENTRY = gql`
          mutation deleteOneWaitlistEntry($where: WaitlistEntryWhereUniqueInput!) {
            deleteOneWaitlistEntry(where: $where) {
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
          mutation: DELETE_ONE_WAITLISTENTRY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneWaitlistEntry) {
          return response.data.deleteOneWaitlistEntry;
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
   * Retrieve a single WaitlistEntry record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved WaitlistEntry or null.
   */
  async get(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<WaitlistEntryType | null> {
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

        const GET_WAITLISTENTRY = gql`
          query getWaitlistEntry($where: WaitlistEntryWhereUniqueInput!) {
            getWaitlistEntry(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_WAITLISTENTRY,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getWaitlistEntry ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No WaitlistEntry found') {
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
   * Retrieve all WaitlistEntries records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of WaitlistEntry records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<WaitlistEntryType[] | null> {
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

        const GET_ALL_WAITLISTENTRY = gql`
          query getAllWaitlistEntry {
            waitlistEntries {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_WAITLISTENTRY,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.waitlistEntries ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No WaitlistEntry found') {
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
   * Find multiple WaitlistEntry records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found WaitlistEntry records or null.
   */
  async findMany(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<WaitlistEntryType[] | null> {
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

        const FIND_MANY_WAITLISTENTRY = gql`
          query findManyWaitlistEntry($where: WaitlistEntryWhereInput!) {
            waitlistEntries(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_WAITLISTENTRY,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.waitlistentries) {
          return response.data.waitlistEntries;
        } else {
          return [] as WaitlistEntryType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No WaitlistEntry found') {
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
