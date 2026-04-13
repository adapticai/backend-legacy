
  
import { InviteToken as InviteTokenType } from './generated/typegraphql-prisma/models/InviteToken';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the InviteToken model.
   */

  const selectionSet = `
    
  id
  token
  email
  waitlistEntryId
  used
  usedAt
  expiresAt
  createdAt

  `;

  export const InviteToken = {

    /**
     * Create a new InviteToken record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created InviteToken or null.
     */

    /**
     * Create a new InviteToken record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created InviteToken or null.
     */
    async create(props: InviteTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InviteTokenType> {
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

          const CREATE_ONE_INVITETOKEN = gql`
              mutation createOneInviteToken($data: InviteTokenCreateInput!) {
                createOneInviteToken(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                token: props.token !== undefined ? props.token : undefined,
  email: props.email !== undefined ? props.email : undefined,
  used: props.used !== undefined ? props.used : undefined,
  usedAt: props.usedAt !== undefined ? props.usedAt : undefined,
  expiresAt: props.expiresAt !== undefined ? props.expiresAt : undefined,
  waitlistEntry: props.waitlistEntry ? 
    typeof props.waitlistEntry === 'object' && Object.keys(props.waitlistEntry).length === 1 && Object.keys(props.waitlistEntry)[0] === 'id'
    ? { connect: {
        id: props.waitlistEntry.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.waitlistEntry.id !== undefined ? props.waitlistEntry.id : undefined,
        email: props.waitlistEntry.email !== undefined ? props.waitlistEntry.email : undefined,
        status: props.waitlistEntry.status !== undefined ? {
            equals: props.waitlistEntry.status 
           } : undefined,
      },
      create: {
        email: props.waitlistEntry.email !== undefined ? props.waitlistEntry.email : undefined,
        fullName: props.waitlistEntry.fullName !== undefined ? props.waitlistEntry.fullName : undefined,
        companyName: props.waitlistEntry.companyName !== undefined ? props.waitlistEntry.companyName : undefined,
        companyWebsite: props.waitlistEntry.companyWebsite !== undefined ? props.waitlistEntry.companyWebsite : undefined,
        jobRole: props.waitlistEntry.jobRole !== undefined ? props.waitlistEntry.jobRole : undefined,
        professionalInvestorConfirmed: props.waitlistEntry.professionalInvestorConfirmed !== undefined ? props.waitlistEntry.professionalInvestorConfirmed : undefined,
        status: props.waitlistEntry.status !== undefined ? props.waitlistEntry.status : undefined,
        queuePosition: props.waitlistEntry.queuePosition !== undefined ? props.waitlistEntry.queuePosition : undefined,
        reviewedAt: props.waitlistEntry.reviewedAt !== undefined ? props.waitlistEntry.reviewedAt : undefined,
    reviewedBy: props.waitlistEntry.reviewedBy ? 
      typeof props.waitlistEntry.reviewedBy === 'object' && Object.keys(props.waitlistEntry.reviewedBy).length === 1 && Object.keys(props.waitlistEntry.reviewedBy)[0] === 'id'
    ? { connect: {
          id: props.waitlistEntry.reviewedBy.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.waitlistEntry.reviewedBy.id !== undefined ? props.waitlistEntry.reviewedBy.id : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? props.waitlistEntry.reviewedBy.email : undefined,
          name: props.waitlistEntry.reviewedBy.name !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.name 
             } : undefined,
        },
        create: {
          name: props.waitlistEntry.reviewedBy.name !== undefined ? props.waitlistEntry.reviewedBy.name : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? props.waitlistEntry.reviewedBy.email : undefined,
          emailVerified: props.waitlistEntry.reviewedBy.emailVerified !== undefined ? props.waitlistEntry.reviewedBy.emailVerified : undefined,
          image: props.waitlistEntry.reviewedBy.image !== undefined ? props.waitlistEntry.reviewedBy.image : undefined,
          deletedAt: props.waitlistEntry.reviewedBy.deletedAt !== undefined ? props.waitlistEntry.reviewedBy.deletedAt : undefined,
          role: props.waitlistEntry.reviewedBy.role !== undefined ? props.waitlistEntry.reviewedBy.role : undefined,
          bio: props.waitlistEntry.reviewedBy.bio !== undefined ? props.waitlistEntry.reviewedBy.bio : undefined,
          jobTitle: props.waitlistEntry.reviewedBy.jobTitle !== undefined ? props.waitlistEntry.reviewedBy.jobTitle : undefined,
          currentAccount: props.waitlistEntry.reviewedBy.currentAccount !== undefined ? props.waitlistEntry.reviewedBy.currentAccount : undefined,
          plan: props.waitlistEntry.reviewedBy.plan !== undefined ? props.waitlistEntry.reviewedBy.plan : undefined,
          openaiAPIKey: props.waitlistEntry.reviewedBy.openaiAPIKey !== undefined ? props.waitlistEntry.reviewedBy.openaiAPIKey : undefined,
          openaiModel: props.waitlistEntry.reviewedBy.openaiModel !== undefined ? props.waitlistEntry.reviewedBy.openaiModel : undefined,
      customer: props.waitlistEntry.reviewedBy.customer ? 
        typeof props.waitlistEntry.reviewedBy.customer === 'object' && Object.keys(props.waitlistEntry.reviewedBy.customer).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.customer)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.customer.id !== undefined ? props.waitlistEntry.reviewedBy.customer.id : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.authUserId 
               } : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.name 
               } : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? props.waitlistEntry.reviewedBy.customer.authUserId : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? props.waitlistEntry.reviewedBy.customer.name : undefined,
            plan: props.waitlistEntry.reviewedBy.customer.plan !== undefined ? props.waitlistEntry.reviewedBy.customer.plan : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.waitlistEntry.reviewedBy.accounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accounts) && props.waitlistEntry.reviewedBy.accounts.length > 0 &&  props.waitlistEntry.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
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
      sessions: props.waitlistEntry.reviewedBy.sessions ? 
        Array.isArray(props.waitlistEntry.reviewedBy.sessions) && props.waitlistEntry.reviewedBy.sessions.length > 0 &&  props.waitlistEntry.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
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
      authenticators: props.waitlistEntry.reviewedBy.authenticators ? 
        Array.isArray(props.waitlistEntry.reviewedBy.authenticators) && props.waitlistEntry.reviewedBy.authenticators.length > 0 &&  props.waitlistEntry.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
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
      alpacaAccounts: props.waitlistEntry.reviewedBy.alpacaAccounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.alpacaAccounts) && props.waitlistEntry.reviewedBy.alpacaAccounts.length > 0 &&  props.waitlistEntry.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
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
          },
        }))
      } : undefined,
      linkedProviders: props.waitlistEntry.reviewedBy.linkedProviders ? 
        Array.isArray(props.waitlistEntry.reviewedBy.linkedProviders) && props.waitlistEntry.reviewedBy.linkedProviders.length > 0 &&  props.waitlistEntry.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.waitlistEntry.reviewedBy.accountLinkingRequests ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accountLinkingRequests) && props.waitlistEntry.reviewedBy.accountLinkingRequests.length > 0 &&  props.waitlistEntry.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      llmConfiguration: props.waitlistEntry.reviewedBy.llmConfiguration ? 
        typeof props.waitlistEntry.reviewedBy.llmConfiguration === 'object' && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.id : undefined,
            userId: props.waitlistEntry.reviewedBy.llmConfiguration.userId !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider : undefined,
            normalProvider: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider : undefined,
            miniModel: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniModel : undefined,
            normalModel: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalModel : undefined,
            advancedModel: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey : undefined,
          },
        }
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
            mutation: CREATE_ONE_INVITETOKEN,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneInviteToken) {
            return response.data.createOneInviteToken;
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
            logger.error("Non-retryable constraint violation in createOneInviteToken", {
              operation: 'createOneInviteToken',
              model: 'InviteToken',
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
            logger.warn("Database connection error in createOneInviteToken, retrying...", {
              operation: 'createOneInviteToken',
              model: 'InviteToken',
              attempt: retryCount,
              maxRetries: MAX_RETRIES,
            });
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log structured error details and rethrow
          logger.error("Database create operation failed", {
            operation: 'createOneInviteToken',
            model: 'InviteToken',
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
   * Create multiple InviteToken records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of InviteToken objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @param options - Optional control flags (e.g., skipDuplicates).
   * @returns The count of created records or null.
   */
  async createMany(props: InviteTokenType[], globalClient?: ApolloClientType<NormalizedCacheObject>, options?: { skipDuplicates?: boolean }): Promise<{ count: number } | null> {
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

        const CREATE_MANY_INVITETOKEN = gql`
          mutation createManyInviteToken($data: [InviteTokenCreateManyInput!]!, $skipDuplicates: Boolean) {
            createManyInviteToken(data: $data, skipDuplicates: $skipDuplicates) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      token: prop.token !== undefined ? prop.token : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  waitlistEntryId: prop.waitlistEntryId !== undefined ? prop.waitlistEntryId : undefined,
  used: prop.used !== undefined ? prop.used : undefined,
  usedAt: prop.usedAt !== undefined ? prop.usedAt : undefined,
  expiresAt: prop.expiresAt !== undefined ? prop.expiresAt : undefined,
      })),
          ...(options?.skipDuplicates ? { skipDuplicates: true } : {}),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_INVITETOKEN,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyInviteToken) {
          return response.data.createManyInviteToken;
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
          logger.warn("Duplicate key in createManyInviteToken (expected during overlapping fetches)", {
            operation: 'createManyInviteToken',
            model: 'InviteToken',
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
          logger.warn("Database connection error in createManyInviteToken, retrying...", {
            operation: 'createManyInviteToken',
            model: 'InviteToken',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database createMany operation failed", {
          operation: 'createManyInviteToken',
          model: 'InviteToken',
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
   * Update a single InviteToken record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated InviteToken or null.
   */
  async update(props: InviteTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InviteTokenType> {
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

        const UPDATE_ONE_INVITETOKEN = gql`
          mutation updateOneInviteToken($data: InviteTokenUpdateInput!, $where: InviteTokenWhereUniqueInput!) {
            updateOneInviteToken(data: $data, where: $where) {
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
  token: props.token !== undefined ? {
            set: props.token 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  used: props.used !== undefined ? {
            set: props.used 
           } : undefined,
  usedAt: props.usedAt !== undefined ? {
            set: props.usedAt 
           } : undefined,
  expiresAt: props.expiresAt !== undefined ? {
            set: props.expiresAt 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  waitlistEntry: props.waitlistEntry ? 
  typeof props.waitlistEntry === 'object' && Object.keys(props.waitlistEntry).length === 1 && (Object.keys(props.waitlistEntry)[0] === 'id' || Object.keys(props.waitlistEntry)[0] === 'symbol')
? {
  connect: {
    id: props.waitlistEntry.id
  }
} : { upsert: {
      where: {
        id: props.waitlistEntry.id !== undefined ? {
            equals: props.waitlistEntry.id
          } : undefined,
        email: props.waitlistEntry.email !== undefined ? {
            equals: props.waitlistEntry.email
          } : undefined,
        status: props.waitlistEntry.status !== undefined ? {
            equals: props.waitlistEntry.status
          } : undefined,
        reviewedById: props.waitlistEntry.reviewedById !== undefined ? {
            equals: props.waitlistEntry.reviewedById
          } : undefined,
      },
      update: {
        id: props.waitlistEntry.id !== undefined ? {
            set: props.waitlistEntry.id
          } : undefined,
        email: props.waitlistEntry.email !== undefined ? {
            set: props.waitlistEntry.email
          } : undefined,
        fullName: props.waitlistEntry.fullName !== undefined ? {
            set: props.waitlistEntry.fullName
          } : undefined,
        companyName: props.waitlistEntry.companyName !== undefined ? {
            set: props.waitlistEntry.companyName
          } : undefined,
        companyWebsite: props.waitlistEntry.companyWebsite !== undefined ? {
            set: props.waitlistEntry.companyWebsite
          } : undefined,
        jobRole: props.waitlistEntry.jobRole !== undefined ? {
            set: props.waitlistEntry.jobRole
          } : undefined,
        professionalInvestorConfirmed: props.waitlistEntry.professionalInvestorConfirmed !== undefined ? {
            set: props.waitlistEntry.professionalInvestorConfirmed
          } : undefined,
        status: props.waitlistEntry.status !== undefined ? {
            set: props.waitlistEntry.status
          } : undefined,
        queuePosition: props.waitlistEntry.queuePosition !== undefined ? {
            set: props.waitlistEntry.queuePosition
          } : undefined,
        reviewedAt: props.waitlistEntry.reviewedAt !== undefined ? {
            set: props.waitlistEntry.reviewedAt
          } : undefined,
    reviewedBy: props.waitlistEntry.reviewedBy ? 
    typeof props.waitlistEntry.reviewedBy === 'object' && Object.keys(props.waitlistEntry.reviewedBy).length === 1 && (Object.keys(props.waitlistEntry.reviewedBy)[0] === 'id' || Object.keys(props.waitlistEntry.reviewedBy)[0] === 'symbol')
? {
    connect: {
      id: props.waitlistEntry.reviewedBy.id
    }
} : { upsert: {
        where: {
          id: props.waitlistEntry.reviewedBy.id !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.id
            } : undefined,
          name: props.waitlistEntry.reviewedBy.name !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.name
            } : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.email
            } : undefined,
          customerId: props.waitlistEntry.reviewedBy.customerId !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.customerId
            } : undefined,
        },
        update: {
          id: props.waitlistEntry.reviewedBy.id !== undefined ? {
              set: props.waitlistEntry.reviewedBy.id
            } : undefined,
          name: props.waitlistEntry.reviewedBy.name !== undefined ? {
              set: props.waitlistEntry.reviewedBy.name
            } : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? {
              set: props.waitlistEntry.reviewedBy.email
            } : undefined,
          emailVerified: props.waitlistEntry.reviewedBy.emailVerified !== undefined ? {
              set: props.waitlistEntry.reviewedBy.emailVerified
            } : undefined,
          image: props.waitlistEntry.reviewedBy.image !== undefined ? {
              set: props.waitlistEntry.reviewedBy.image
            } : undefined,
          deletedAt: props.waitlistEntry.reviewedBy.deletedAt !== undefined ? {
              set: props.waitlistEntry.reviewedBy.deletedAt
            } : undefined,
          role: props.waitlistEntry.reviewedBy.role !== undefined ? {
              set: props.waitlistEntry.reviewedBy.role
            } : undefined,
          bio: props.waitlistEntry.reviewedBy.bio !== undefined ? {
              set: props.waitlistEntry.reviewedBy.bio
            } : undefined,
          jobTitle: props.waitlistEntry.reviewedBy.jobTitle !== undefined ? {
              set: props.waitlistEntry.reviewedBy.jobTitle
            } : undefined,
          currentAccount: props.waitlistEntry.reviewedBy.currentAccount !== undefined ? {
              set: props.waitlistEntry.reviewedBy.currentAccount
            } : undefined,
          plan: props.waitlistEntry.reviewedBy.plan !== undefined ? {
              set: props.waitlistEntry.reviewedBy.plan
            } : undefined,
          openaiAPIKey: props.waitlistEntry.reviewedBy.openaiAPIKey !== undefined ? {
              set: props.waitlistEntry.reviewedBy.openaiAPIKey
            } : undefined,
          openaiModel: props.waitlistEntry.reviewedBy.openaiModel !== undefined ? {
              set: props.waitlistEntry.reviewedBy.openaiModel
            } : undefined,
      customer: props.waitlistEntry.reviewedBy.customer ? 
      typeof props.waitlistEntry.reviewedBy.customer === 'object' && Object.keys(props.waitlistEntry.reviewedBy.customer).length === 1 && (Object.keys(props.waitlistEntry.reviewedBy.customer)[0] === 'id' || Object.keys(props.waitlistEntry.reviewedBy.customer)[0] === 'symbol')
? {
      connect: {
        id: props.waitlistEntry.reviewedBy.customer.id
      }
} : { upsert: {
          where: {
            id: props.waitlistEntry.reviewedBy.customer.id !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.id
              } : undefined,
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.authUserId
              } : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.name
              } : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.authUserId
              } : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.name
              } : undefined,
            plan: props.waitlistEntry.reviewedBy.customer.plan !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.plan
              } : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? props.waitlistEntry.reviewedBy.customer.authUserId : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? props.waitlistEntry.reviewedBy.customer.name : undefined,
            plan: props.waitlistEntry.reviewedBy.customer.plan !== undefined ? props.waitlistEntry.reviewedBy.customer.plan : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.waitlistEntry.reviewedBy.accounts ? 
      Array.isArray(props.waitlistEntry.reviewedBy.accounts) && props.waitlistEntry.reviewedBy.accounts.length > 0 && props.waitlistEntry.reviewedBy.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
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
      sessions: props.waitlistEntry.reviewedBy.sessions ? 
      Array.isArray(props.waitlistEntry.reviewedBy.sessions) && props.waitlistEntry.reviewedBy.sessions.length > 0 && props.waitlistEntry.reviewedBy.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
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
      authenticators: props.waitlistEntry.reviewedBy.authenticators ? 
      Array.isArray(props.waitlistEntry.reviewedBy.authenticators) && props.waitlistEntry.reviewedBy.authenticators.length > 0 && props.waitlistEntry.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
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
      alpacaAccounts: props.waitlistEntry.reviewedBy.alpacaAccounts ? 
      Array.isArray(props.waitlistEntry.reviewedBy.alpacaAccounts) && props.waitlistEntry.reviewedBy.alpacaAccounts.length > 0 && props.waitlistEntry.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
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
          },
        }))
      } : undefined,
      linkedProviders: props.waitlistEntry.reviewedBy.linkedProviders ? 
      Array.isArray(props.waitlistEntry.reviewedBy.linkedProviders) && props.waitlistEntry.reviewedBy.linkedProviders.length > 0 && props.waitlistEntry.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.waitlistEntry.reviewedBy.accountLinkingRequests ? 
      Array.isArray(props.waitlistEntry.reviewedBy.accountLinkingRequests) && props.waitlistEntry.reviewedBy.accountLinkingRequests.length > 0 && props.waitlistEntry.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      llmConfiguration: props.waitlistEntry.reviewedBy.llmConfiguration ? 
      typeof props.waitlistEntry.reviewedBy.llmConfiguration === 'object' && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration).length === 1 && (Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'id' || Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'symbol')
? {
      connect: {
        id: props.waitlistEntry.reviewedBy.llmConfiguration.id
      }
} : { upsert: {
          where: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.llmConfiguration.id
              } : undefined,
            userId: props.waitlistEntry.reviewedBy.llmConfiguration.userId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.llmConfiguration.userId
              } : undefined,
          },
          update: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.id
              } : undefined,
            defaultProvider: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider
              } : undefined,
            miniProvider: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider
              } : undefined,
            normalProvider: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider
              } : undefined,
            advancedProvider: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider
              } : undefined,
            miniModel: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel
              } : undefined,
            normalModel: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel
              } : undefined,
            advancedModel: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel
              } : undefined,
            openaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey
              } : undefined,
            anthropicApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey
              } : undefined,
            deepseekApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey
              } : undefined,
            kimiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey
              } : undefined,
            qwenApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey
              } : undefined,
            xaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey
              } : undefined,
            geminiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey
              } : undefined,
          },
          create: {
            defaultProvider: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider : undefined,
            normalProvider: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider : undefined,
            miniModel: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniModel : undefined,
            normalModel: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalModel : undefined,
            advancedModel: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
        create: {
          name: props.waitlistEntry.reviewedBy.name !== undefined ? props.waitlistEntry.reviewedBy.name : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? props.waitlistEntry.reviewedBy.email : undefined,
          emailVerified: props.waitlistEntry.reviewedBy.emailVerified !== undefined ? props.waitlistEntry.reviewedBy.emailVerified : undefined,
          image: props.waitlistEntry.reviewedBy.image !== undefined ? props.waitlistEntry.reviewedBy.image : undefined,
          deletedAt: props.waitlistEntry.reviewedBy.deletedAt !== undefined ? props.waitlistEntry.reviewedBy.deletedAt : undefined,
          role: props.waitlistEntry.reviewedBy.role !== undefined ? props.waitlistEntry.reviewedBy.role : undefined,
          bio: props.waitlistEntry.reviewedBy.bio !== undefined ? props.waitlistEntry.reviewedBy.bio : undefined,
          jobTitle: props.waitlistEntry.reviewedBy.jobTitle !== undefined ? props.waitlistEntry.reviewedBy.jobTitle : undefined,
          currentAccount: props.waitlistEntry.reviewedBy.currentAccount !== undefined ? props.waitlistEntry.reviewedBy.currentAccount : undefined,
          plan: props.waitlistEntry.reviewedBy.plan !== undefined ? props.waitlistEntry.reviewedBy.plan : undefined,
          openaiAPIKey: props.waitlistEntry.reviewedBy.openaiAPIKey !== undefined ? props.waitlistEntry.reviewedBy.openaiAPIKey : undefined,
          openaiModel: props.waitlistEntry.reviewedBy.openaiModel !== undefined ? props.waitlistEntry.reviewedBy.openaiModel : undefined,
      customer: props.waitlistEntry.reviewedBy.customer ? 
        typeof props.waitlistEntry.reviewedBy.customer === 'object' && Object.keys(props.waitlistEntry.reviewedBy.customer).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.customer)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.customer.id !== undefined ? props.waitlistEntry.reviewedBy.customer.id : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.authUserId 
               } : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.name 
               } : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? props.waitlistEntry.reviewedBy.customer.authUserId : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? props.waitlistEntry.reviewedBy.customer.name : undefined,
            plan: props.waitlistEntry.reviewedBy.customer.plan !== undefined ? props.waitlistEntry.reviewedBy.customer.plan : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.waitlistEntry.reviewedBy.accounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accounts) && props.waitlistEntry.reviewedBy.accounts.length > 0 &&  props.waitlistEntry.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
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
      sessions: props.waitlistEntry.reviewedBy.sessions ? 
        Array.isArray(props.waitlistEntry.reviewedBy.sessions) && props.waitlistEntry.reviewedBy.sessions.length > 0 &&  props.waitlistEntry.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
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
      authenticators: props.waitlistEntry.reviewedBy.authenticators ? 
        Array.isArray(props.waitlistEntry.reviewedBy.authenticators) && props.waitlistEntry.reviewedBy.authenticators.length > 0 &&  props.waitlistEntry.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
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
      alpacaAccounts: props.waitlistEntry.reviewedBy.alpacaAccounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.alpacaAccounts) && props.waitlistEntry.reviewedBy.alpacaAccounts.length > 0 &&  props.waitlistEntry.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
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
          },
        }))
      } : undefined,
      linkedProviders: props.waitlistEntry.reviewedBy.linkedProviders ? 
        Array.isArray(props.waitlistEntry.reviewedBy.linkedProviders) && props.waitlistEntry.reviewedBy.linkedProviders.length > 0 &&  props.waitlistEntry.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.waitlistEntry.reviewedBy.accountLinkingRequests ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accountLinkingRequests) && props.waitlistEntry.reviewedBy.accountLinkingRequests.length > 0 &&  props.waitlistEntry.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      llmConfiguration: props.waitlistEntry.reviewedBy.llmConfiguration ? 
        typeof props.waitlistEntry.reviewedBy.llmConfiguration === 'object' && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.id : undefined,
            userId: props.waitlistEntry.reviewedBy.llmConfiguration.userId !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider : undefined,
            normalProvider: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider : undefined,
            miniModel: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniModel : undefined,
            normalModel: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalModel : undefined,
            advancedModel: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        email: props.waitlistEntry.email !== undefined ? props.waitlistEntry.email : undefined,
        fullName: props.waitlistEntry.fullName !== undefined ? props.waitlistEntry.fullName : undefined,
        companyName: props.waitlistEntry.companyName !== undefined ? props.waitlistEntry.companyName : undefined,
        companyWebsite: props.waitlistEntry.companyWebsite !== undefined ? props.waitlistEntry.companyWebsite : undefined,
        jobRole: props.waitlistEntry.jobRole !== undefined ? props.waitlistEntry.jobRole : undefined,
        professionalInvestorConfirmed: props.waitlistEntry.professionalInvestorConfirmed !== undefined ? props.waitlistEntry.professionalInvestorConfirmed : undefined,
        status: props.waitlistEntry.status !== undefined ? props.waitlistEntry.status : undefined,
        queuePosition: props.waitlistEntry.queuePosition !== undefined ? props.waitlistEntry.queuePosition : undefined,
        reviewedAt: props.waitlistEntry.reviewedAt !== undefined ? props.waitlistEntry.reviewedAt : undefined,
    reviewedBy: props.waitlistEntry.reviewedBy ? 
      typeof props.waitlistEntry.reviewedBy === 'object' && Object.keys(props.waitlistEntry.reviewedBy).length === 1 && Object.keys(props.waitlistEntry.reviewedBy)[0] === 'id'
    ? { connect: {
          id: props.waitlistEntry.reviewedBy.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.waitlistEntry.reviewedBy.id !== undefined ? props.waitlistEntry.reviewedBy.id : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? props.waitlistEntry.reviewedBy.email : undefined,
          name: props.waitlistEntry.reviewedBy.name !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.name 
             } : undefined,
        },
        create: {
          name: props.waitlistEntry.reviewedBy.name !== undefined ? props.waitlistEntry.reviewedBy.name : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? props.waitlistEntry.reviewedBy.email : undefined,
          emailVerified: props.waitlistEntry.reviewedBy.emailVerified !== undefined ? props.waitlistEntry.reviewedBy.emailVerified : undefined,
          image: props.waitlistEntry.reviewedBy.image !== undefined ? props.waitlistEntry.reviewedBy.image : undefined,
          deletedAt: props.waitlistEntry.reviewedBy.deletedAt !== undefined ? props.waitlistEntry.reviewedBy.deletedAt : undefined,
          role: props.waitlistEntry.reviewedBy.role !== undefined ? props.waitlistEntry.reviewedBy.role : undefined,
          bio: props.waitlistEntry.reviewedBy.bio !== undefined ? props.waitlistEntry.reviewedBy.bio : undefined,
          jobTitle: props.waitlistEntry.reviewedBy.jobTitle !== undefined ? props.waitlistEntry.reviewedBy.jobTitle : undefined,
          currentAccount: props.waitlistEntry.reviewedBy.currentAccount !== undefined ? props.waitlistEntry.reviewedBy.currentAccount : undefined,
          plan: props.waitlistEntry.reviewedBy.plan !== undefined ? props.waitlistEntry.reviewedBy.plan : undefined,
          openaiAPIKey: props.waitlistEntry.reviewedBy.openaiAPIKey !== undefined ? props.waitlistEntry.reviewedBy.openaiAPIKey : undefined,
          openaiModel: props.waitlistEntry.reviewedBy.openaiModel !== undefined ? props.waitlistEntry.reviewedBy.openaiModel : undefined,
      customer: props.waitlistEntry.reviewedBy.customer ? 
        typeof props.waitlistEntry.reviewedBy.customer === 'object' && Object.keys(props.waitlistEntry.reviewedBy.customer).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.customer)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.customer.id !== undefined ? props.waitlistEntry.reviewedBy.customer.id : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.authUserId 
               } : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.name 
               } : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? props.waitlistEntry.reviewedBy.customer.authUserId : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? props.waitlistEntry.reviewedBy.customer.name : undefined,
            plan: props.waitlistEntry.reviewedBy.customer.plan !== undefined ? props.waitlistEntry.reviewedBy.customer.plan : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.waitlistEntry.reviewedBy.accounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accounts) && props.waitlistEntry.reviewedBy.accounts.length > 0 &&  props.waitlistEntry.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
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
      sessions: props.waitlistEntry.reviewedBy.sessions ? 
        Array.isArray(props.waitlistEntry.reviewedBy.sessions) && props.waitlistEntry.reviewedBy.sessions.length > 0 &&  props.waitlistEntry.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
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
      authenticators: props.waitlistEntry.reviewedBy.authenticators ? 
        Array.isArray(props.waitlistEntry.reviewedBy.authenticators) && props.waitlistEntry.reviewedBy.authenticators.length > 0 &&  props.waitlistEntry.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
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
      alpacaAccounts: props.waitlistEntry.reviewedBy.alpacaAccounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.alpacaAccounts) && props.waitlistEntry.reviewedBy.alpacaAccounts.length > 0 &&  props.waitlistEntry.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
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
          },
        }))
      } : undefined,
      linkedProviders: props.waitlistEntry.reviewedBy.linkedProviders ? 
        Array.isArray(props.waitlistEntry.reviewedBy.linkedProviders) && props.waitlistEntry.reviewedBy.linkedProviders.length > 0 &&  props.waitlistEntry.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.waitlistEntry.reviewedBy.accountLinkingRequests ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accountLinkingRequests) && props.waitlistEntry.reviewedBy.accountLinkingRequests.length > 0 &&  props.waitlistEntry.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      llmConfiguration: props.waitlistEntry.reviewedBy.llmConfiguration ? 
        typeof props.waitlistEntry.reviewedBy.llmConfiguration === 'object' && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.id : undefined,
            userId: props.waitlistEntry.reviewedBy.llmConfiguration.userId !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider : undefined,
            normalProvider: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider : undefined,
            miniModel: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniModel : undefined,
            normalModel: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalModel : undefined,
            advancedModel: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey : undefined,
          },
        }
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
          mutation: UPDATE_ONE_INVITETOKEN,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneInviteToken) {
          return response.data.updateOneInviteToken;
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
          logger.error("Non-retryable constraint violation in updateOneInviteToken", {
            operation: 'updateOneInviteToken',
            model: 'InviteToken',
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
          logger.warn("Database connection error in updateOneInviteToken, retrying...", {
            operation: 'updateOneInviteToken',
            model: 'InviteToken',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database update operation failed", {
          operation: 'updateOneInviteToken',
          model: 'InviteToken',
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
   * Upsert a single InviteToken record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated InviteToken or null.
   */
  async upsert(props: InviteTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InviteTokenType> {
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

        const UPSERT_ONE_INVITETOKEN = gql`
          mutation upsertOneInviteToken($where: InviteTokenWhereUniqueInput!, $create: InviteTokenCreateInput!, $update: InviteTokenUpdateInput!) {
            upsertOneInviteToken(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  waitlistEntryId: props.waitlistEntryId !== undefined ? props.waitlistEntryId : undefined,
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
      },
          create: {
        token: props.token !== undefined ? props.token : undefined,
  email: props.email !== undefined ? props.email : undefined,
  used: props.used !== undefined ? props.used : undefined,
  usedAt: props.usedAt !== undefined ? props.usedAt : undefined,
  expiresAt: props.expiresAt !== undefined ? props.expiresAt : undefined,
  waitlistEntry: props.waitlistEntry ? 
    typeof props.waitlistEntry === 'object' && Object.keys(props.waitlistEntry).length === 1 && Object.keys(props.waitlistEntry)[0] === 'id'
    ? { connect: {
        id: props.waitlistEntry.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.waitlistEntry.id !== undefined ? props.waitlistEntry.id : undefined,
        email: props.waitlistEntry.email !== undefined ? props.waitlistEntry.email : undefined,
        status: props.waitlistEntry.status !== undefined ? {
            equals: props.waitlistEntry.status 
           } : undefined,
      },
      create: {
        email: props.waitlistEntry.email !== undefined ? props.waitlistEntry.email : undefined,
        fullName: props.waitlistEntry.fullName !== undefined ? props.waitlistEntry.fullName : undefined,
        companyName: props.waitlistEntry.companyName !== undefined ? props.waitlistEntry.companyName : undefined,
        companyWebsite: props.waitlistEntry.companyWebsite !== undefined ? props.waitlistEntry.companyWebsite : undefined,
        jobRole: props.waitlistEntry.jobRole !== undefined ? props.waitlistEntry.jobRole : undefined,
        professionalInvestorConfirmed: props.waitlistEntry.professionalInvestorConfirmed !== undefined ? props.waitlistEntry.professionalInvestorConfirmed : undefined,
        status: props.waitlistEntry.status !== undefined ? props.waitlistEntry.status : undefined,
        queuePosition: props.waitlistEntry.queuePosition !== undefined ? props.waitlistEntry.queuePosition : undefined,
        reviewedAt: props.waitlistEntry.reviewedAt !== undefined ? props.waitlistEntry.reviewedAt : undefined,
    reviewedBy: props.waitlistEntry.reviewedBy ? 
      typeof props.waitlistEntry.reviewedBy === 'object' && Object.keys(props.waitlistEntry.reviewedBy).length === 1 && Object.keys(props.waitlistEntry.reviewedBy)[0] === 'id'
    ? { connect: {
          id: props.waitlistEntry.reviewedBy.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.waitlistEntry.reviewedBy.id !== undefined ? props.waitlistEntry.reviewedBy.id : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? props.waitlistEntry.reviewedBy.email : undefined,
          name: props.waitlistEntry.reviewedBy.name !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.name 
             } : undefined,
        },
        create: {
          name: props.waitlistEntry.reviewedBy.name !== undefined ? props.waitlistEntry.reviewedBy.name : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? props.waitlistEntry.reviewedBy.email : undefined,
          emailVerified: props.waitlistEntry.reviewedBy.emailVerified !== undefined ? props.waitlistEntry.reviewedBy.emailVerified : undefined,
          image: props.waitlistEntry.reviewedBy.image !== undefined ? props.waitlistEntry.reviewedBy.image : undefined,
          deletedAt: props.waitlistEntry.reviewedBy.deletedAt !== undefined ? props.waitlistEntry.reviewedBy.deletedAt : undefined,
          role: props.waitlistEntry.reviewedBy.role !== undefined ? props.waitlistEntry.reviewedBy.role : undefined,
          bio: props.waitlistEntry.reviewedBy.bio !== undefined ? props.waitlistEntry.reviewedBy.bio : undefined,
          jobTitle: props.waitlistEntry.reviewedBy.jobTitle !== undefined ? props.waitlistEntry.reviewedBy.jobTitle : undefined,
          currentAccount: props.waitlistEntry.reviewedBy.currentAccount !== undefined ? props.waitlistEntry.reviewedBy.currentAccount : undefined,
          plan: props.waitlistEntry.reviewedBy.plan !== undefined ? props.waitlistEntry.reviewedBy.plan : undefined,
          openaiAPIKey: props.waitlistEntry.reviewedBy.openaiAPIKey !== undefined ? props.waitlistEntry.reviewedBy.openaiAPIKey : undefined,
          openaiModel: props.waitlistEntry.reviewedBy.openaiModel !== undefined ? props.waitlistEntry.reviewedBy.openaiModel : undefined,
      customer: props.waitlistEntry.reviewedBy.customer ? 
        typeof props.waitlistEntry.reviewedBy.customer === 'object' && Object.keys(props.waitlistEntry.reviewedBy.customer).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.customer)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.customer.id !== undefined ? props.waitlistEntry.reviewedBy.customer.id : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.authUserId 
               } : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.name 
               } : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? props.waitlistEntry.reviewedBy.customer.authUserId : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? props.waitlistEntry.reviewedBy.customer.name : undefined,
            plan: props.waitlistEntry.reviewedBy.customer.plan !== undefined ? props.waitlistEntry.reviewedBy.customer.plan : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.waitlistEntry.reviewedBy.accounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accounts) && props.waitlistEntry.reviewedBy.accounts.length > 0 &&  props.waitlistEntry.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
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
      sessions: props.waitlistEntry.reviewedBy.sessions ? 
        Array.isArray(props.waitlistEntry.reviewedBy.sessions) && props.waitlistEntry.reviewedBy.sessions.length > 0 &&  props.waitlistEntry.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
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
      authenticators: props.waitlistEntry.reviewedBy.authenticators ? 
        Array.isArray(props.waitlistEntry.reviewedBy.authenticators) && props.waitlistEntry.reviewedBy.authenticators.length > 0 &&  props.waitlistEntry.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
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
      alpacaAccounts: props.waitlistEntry.reviewedBy.alpacaAccounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.alpacaAccounts) && props.waitlistEntry.reviewedBy.alpacaAccounts.length > 0 &&  props.waitlistEntry.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
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
          },
        }))
      } : undefined,
      linkedProviders: props.waitlistEntry.reviewedBy.linkedProviders ? 
        Array.isArray(props.waitlistEntry.reviewedBy.linkedProviders) && props.waitlistEntry.reviewedBy.linkedProviders.length > 0 &&  props.waitlistEntry.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.waitlistEntry.reviewedBy.accountLinkingRequests ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accountLinkingRequests) && props.waitlistEntry.reviewedBy.accountLinkingRequests.length > 0 &&  props.waitlistEntry.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      llmConfiguration: props.waitlistEntry.reviewedBy.llmConfiguration ? 
        typeof props.waitlistEntry.reviewedBy.llmConfiguration === 'object' && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.id : undefined,
            userId: props.waitlistEntry.reviewedBy.llmConfiguration.userId !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider : undefined,
            normalProvider: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider : undefined,
            miniModel: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniModel : undefined,
            normalModel: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalModel : undefined,
            advancedModel: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,
      },
          update: {
      token: props.token !== undefined ? {
            set: props.token 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  used: props.used !== undefined ? {
            set: props.used 
           } : undefined,
  usedAt: props.usedAt !== undefined ? {
            set: props.usedAt 
           } : undefined,
  expiresAt: props.expiresAt !== undefined ? {
            set: props.expiresAt 
           } : undefined,
  waitlistEntry: props.waitlistEntry ? 
  typeof props.waitlistEntry === 'object' && Object.keys(props.waitlistEntry).length === 1 && (Object.keys(props.waitlistEntry)[0] === 'id' || Object.keys(props.waitlistEntry)[0] === 'symbol')
? {
  connect: {
    id: props.waitlistEntry.id
  }
} : { upsert: {
      where: {
        id: props.waitlistEntry.id !== undefined ? {
            equals: props.waitlistEntry.id
          } : undefined,
        email: props.waitlistEntry.email !== undefined ? {
            equals: props.waitlistEntry.email
          } : undefined,
        status: props.waitlistEntry.status !== undefined ? {
            equals: props.waitlistEntry.status
          } : undefined,
        reviewedById: props.waitlistEntry.reviewedById !== undefined ? {
            equals: props.waitlistEntry.reviewedById
          } : undefined,
      },
      update: {
        id: props.waitlistEntry.id !== undefined ? {
            set: props.waitlistEntry.id
          } : undefined,
        email: props.waitlistEntry.email !== undefined ? {
            set: props.waitlistEntry.email
          } : undefined,
        fullName: props.waitlistEntry.fullName !== undefined ? {
            set: props.waitlistEntry.fullName
          } : undefined,
        companyName: props.waitlistEntry.companyName !== undefined ? {
            set: props.waitlistEntry.companyName
          } : undefined,
        companyWebsite: props.waitlistEntry.companyWebsite !== undefined ? {
            set: props.waitlistEntry.companyWebsite
          } : undefined,
        jobRole: props.waitlistEntry.jobRole !== undefined ? {
            set: props.waitlistEntry.jobRole
          } : undefined,
        professionalInvestorConfirmed: props.waitlistEntry.professionalInvestorConfirmed !== undefined ? {
            set: props.waitlistEntry.professionalInvestorConfirmed
          } : undefined,
        status: props.waitlistEntry.status !== undefined ? {
            set: props.waitlistEntry.status
          } : undefined,
        queuePosition: props.waitlistEntry.queuePosition !== undefined ? {
            set: props.waitlistEntry.queuePosition
          } : undefined,
        reviewedAt: props.waitlistEntry.reviewedAt !== undefined ? {
            set: props.waitlistEntry.reviewedAt
          } : undefined,
    reviewedBy: props.waitlistEntry.reviewedBy ? 
    typeof props.waitlistEntry.reviewedBy === 'object' && Object.keys(props.waitlistEntry.reviewedBy).length === 1 && (Object.keys(props.waitlistEntry.reviewedBy)[0] === 'id' || Object.keys(props.waitlistEntry.reviewedBy)[0] === 'symbol')
? {
    connect: {
      id: props.waitlistEntry.reviewedBy.id
    }
} : { upsert: {
        where: {
          id: props.waitlistEntry.reviewedBy.id !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.id
            } : undefined,
          name: props.waitlistEntry.reviewedBy.name !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.name
            } : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.email
            } : undefined,
          customerId: props.waitlistEntry.reviewedBy.customerId !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.customerId
            } : undefined,
        },
        update: {
          id: props.waitlistEntry.reviewedBy.id !== undefined ? {
              set: props.waitlistEntry.reviewedBy.id
            } : undefined,
          name: props.waitlistEntry.reviewedBy.name !== undefined ? {
              set: props.waitlistEntry.reviewedBy.name
            } : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? {
              set: props.waitlistEntry.reviewedBy.email
            } : undefined,
          emailVerified: props.waitlistEntry.reviewedBy.emailVerified !== undefined ? {
              set: props.waitlistEntry.reviewedBy.emailVerified
            } : undefined,
          image: props.waitlistEntry.reviewedBy.image !== undefined ? {
              set: props.waitlistEntry.reviewedBy.image
            } : undefined,
          deletedAt: props.waitlistEntry.reviewedBy.deletedAt !== undefined ? {
              set: props.waitlistEntry.reviewedBy.deletedAt
            } : undefined,
          role: props.waitlistEntry.reviewedBy.role !== undefined ? {
              set: props.waitlistEntry.reviewedBy.role
            } : undefined,
          bio: props.waitlistEntry.reviewedBy.bio !== undefined ? {
              set: props.waitlistEntry.reviewedBy.bio
            } : undefined,
          jobTitle: props.waitlistEntry.reviewedBy.jobTitle !== undefined ? {
              set: props.waitlistEntry.reviewedBy.jobTitle
            } : undefined,
          currentAccount: props.waitlistEntry.reviewedBy.currentAccount !== undefined ? {
              set: props.waitlistEntry.reviewedBy.currentAccount
            } : undefined,
          plan: props.waitlistEntry.reviewedBy.plan !== undefined ? {
              set: props.waitlistEntry.reviewedBy.plan
            } : undefined,
          openaiAPIKey: props.waitlistEntry.reviewedBy.openaiAPIKey !== undefined ? {
              set: props.waitlistEntry.reviewedBy.openaiAPIKey
            } : undefined,
          openaiModel: props.waitlistEntry.reviewedBy.openaiModel !== undefined ? {
              set: props.waitlistEntry.reviewedBy.openaiModel
            } : undefined,
      customer: props.waitlistEntry.reviewedBy.customer ? 
      typeof props.waitlistEntry.reviewedBy.customer === 'object' && Object.keys(props.waitlistEntry.reviewedBy.customer).length === 1 && (Object.keys(props.waitlistEntry.reviewedBy.customer)[0] === 'id' || Object.keys(props.waitlistEntry.reviewedBy.customer)[0] === 'symbol')
? {
      connect: {
        id: props.waitlistEntry.reviewedBy.customer.id
      }
} : { upsert: {
          where: {
            id: props.waitlistEntry.reviewedBy.customer.id !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.id
              } : undefined,
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.authUserId
              } : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.name
              } : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.authUserId
              } : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.name
              } : undefined,
            plan: props.waitlistEntry.reviewedBy.customer.plan !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.plan
              } : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? props.waitlistEntry.reviewedBy.customer.authUserId : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? props.waitlistEntry.reviewedBy.customer.name : undefined,
            plan: props.waitlistEntry.reviewedBy.customer.plan !== undefined ? props.waitlistEntry.reviewedBy.customer.plan : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.waitlistEntry.reviewedBy.accounts ? 
      Array.isArray(props.waitlistEntry.reviewedBy.accounts) && props.waitlistEntry.reviewedBy.accounts.length > 0 && props.waitlistEntry.reviewedBy.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
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
      sessions: props.waitlistEntry.reviewedBy.sessions ? 
      Array.isArray(props.waitlistEntry.reviewedBy.sessions) && props.waitlistEntry.reviewedBy.sessions.length > 0 && props.waitlistEntry.reviewedBy.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
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
      authenticators: props.waitlistEntry.reviewedBy.authenticators ? 
      Array.isArray(props.waitlistEntry.reviewedBy.authenticators) && props.waitlistEntry.reviewedBy.authenticators.length > 0 && props.waitlistEntry.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
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
      alpacaAccounts: props.waitlistEntry.reviewedBy.alpacaAccounts ? 
      Array.isArray(props.waitlistEntry.reviewedBy.alpacaAccounts) && props.waitlistEntry.reviewedBy.alpacaAccounts.length > 0 && props.waitlistEntry.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
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
          },
        }))
      } : undefined,
      linkedProviders: props.waitlistEntry.reviewedBy.linkedProviders ? 
      Array.isArray(props.waitlistEntry.reviewedBy.linkedProviders) && props.waitlistEntry.reviewedBy.linkedProviders.length > 0 && props.waitlistEntry.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.waitlistEntry.reviewedBy.accountLinkingRequests ? 
      Array.isArray(props.waitlistEntry.reviewedBy.accountLinkingRequests) && props.waitlistEntry.reviewedBy.accountLinkingRequests.length > 0 && props.waitlistEntry.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      llmConfiguration: props.waitlistEntry.reviewedBy.llmConfiguration ? 
      typeof props.waitlistEntry.reviewedBy.llmConfiguration === 'object' && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration).length === 1 && (Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'id' || Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'symbol')
? {
      connect: {
        id: props.waitlistEntry.reviewedBy.llmConfiguration.id
      }
} : { upsert: {
          where: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.llmConfiguration.id
              } : undefined,
            userId: props.waitlistEntry.reviewedBy.llmConfiguration.userId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.llmConfiguration.userId
              } : undefined,
          },
          update: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.id
              } : undefined,
            defaultProvider: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider
              } : undefined,
            miniProvider: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider
              } : undefined,
            normalProvider: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider
              } : undefined,
            advancedProvider: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider
              } : undefined,
            miniModel: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel
              } : undefined,
            normalModel: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel
              } : undefined,
            advancedModel: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel
              } : undefined,
            openaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey
              } : undefined,
            anthropicApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey
              } : undefined,
            deepseekApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey
              } : undefined,
            kimiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey
              } : undefined,
            qwenApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey
              } : undefined,
            xaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey
              } : undefined,
            geminiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? {
                set: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey
              } : undefined,
          },
          create: {
            defaultProvider: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider : undefined,
            normalProvider: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider : undefined,
            miniModel: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniModel : undefined,
            normalModel: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalModel : undefined,
            advancedModel: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
        create: {
          name: props.waitlistEntry.reviewedBy.name !== undefined ? props.waitlistEntry.reviewedBy.name : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? props.waitlistEntry.reviewedBy.email : undefined,
          emailVerified: props.waitlistEntry.reviewedBy.emailVerified !== undefined ? props.waitlistEntry.reviewedBy.emailVerified : undefined,
          image: props.waitlistEntry.reviewedBy.image !== undefined ? props.waitlistEntry.reviewedBy.image : undefined,
          deletedAt: props.waitlistEntry.reviewedBy.deletedAt !== undefined ? props.waitlistEntry.reviewedBy.deletedAt : undefined,
          role: props.waitlistEntry.reviewedBy.role !== undefined ? props.waitlistEntry.reviewedBy.role : undefined,
          bio: props.waitlistEntry.reviewedBy.bio !== undefined ? props.waitlistEntry.reviewedBy.bio : undefined,
          jobTitle: props.waitlistEntry.reviewedBy.jobTitle !== undefined ? props.waitlistEntry.reviewedBy.jobTitle : undefined,
          currentAccount: props.waitlistEntry.reviewedBy.currentAccount !== undefined ? props.waitlistEntry.reviewedBy.currentAccount : undefined,
          plan: props.waitlistEntry.reviewedBy.plan !== undefined ? props.waitlistEntry.reviewedBy.plan : undefined,
          openaiAPIKey: props.waitlistEntry.reviewedBy.openaiAPIKey !== undefined ? props.waitlistEntry.reviewedBy.openaiAPIKey : undefined,
          openaiModel: props.waitlistEntry.reviewedBy.openaiModel !== undefined ? props.waitlistEntry.reviewedBy.openaiModel : undefined,
      customer: props.waitlistEntry.reviewedBy.customer ? 
        typeof props.waitlistEntry.reviewedBy.customer === 'object' && Object.keys(props.waitlistEntry.reviewedBy.customer).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.customer)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.customer.id !== undefined ? props.waitlistEntry.reviewedBy.customer.id : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.authUserId 
               } : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.name 
               } : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? props.waitlistEntry.reviewedBy.customer.authUserId : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? props.waitlistEntry.reviewedBy.customer.name : undefined,
            plan: props.waitlistEntry.reviewedBy.customer.plan !== undefined ? props.waitlistEntry.reviewedBy.customer.plan : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.waitlistEntry.reviewedBy.accounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accounts) && props.waitlistEntry.reviewedBy.accounts.length > 0 &&  props.waitlistEntry.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
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
      sessions: props.waitlistEntry.reviewedBy.sessions ? 
        Array.isArray(props.waitlistEntry.reviewedBy.sessions) && props.waitlistEntry.reviewedBy.sessions.length > 0 &&  props.waitlistEntry.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
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
      authenticators: props.waitlistEntry.reviewedBy.authenticators ? 
        Array.isArray(props.waitlistEntry.reviewedBy.authenticators) && props.waitlistEntry.reviewedBy.authenticators.length > 0 &&  props.waitlistEntry.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
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
      alpacaAccounts: props.waitlistEntry.reviewedBy.alpacaAccounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.alpacaAccounts) && props.waitlistEntry.reviewedBy.alpacaAccounts.length > 0 &&  props.waitlistEntry.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
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
          },
        }))
      } : undefined,
      linkedProviders: props.waitlistEntry.reviewedBy.linkedProviders ? 
        Array.isArray(props.waitlistEntry.reviewedBy.linkedProviders) && props.waitlistEntry.reviewedBy.linkedProviders.length > 0 &&  props.waitlistEntry.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.waitlistEntry.reviewedBy.accountLinkingRequests ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accountLinkingRequests) && props.waitlistEntry.reviewedBy.accountLinkingRequests.length > 0 &&  props.waitlistEntry.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      llmConfiguration: props.waitlistEntry.reviewedBy.llmConfiguration ? 
        typeof props.waitlistEntry.reviewedBy.llmConfiguration === 'object' && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.id : undefined,
            userId: props.waitlistEntry.reviewedBy.llmConfiguration.userId !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider : undefined,
            normalProvider: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider : undefined,
            miniModel: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniModel : undefined,
            normalModel: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalModel : undefined,
            advancedModel: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        email: props.waitlistEntry.email !== undefined ? props.waitlistEntry.email : undefined,
        fullName: props.waitlistEntry.fullName !== undefined ? props.waitlistEntry.fullName : undefined,
        companyName: props.waitlistEntry.companyName !== undefined ? props.waitlistEntry.companyName : undefined,
        companyWebsite: props.waitlistEntry.companyWebsite !== undefined ? props.waitlistEntry.companyWebsite : undefined,
        jobRole: props.waitlistEntry.jobRole !== undefined ? props.waitlistEntry.jobRole : undefined,
        professionalInvestorConfirmed: props.waitlistEntry.professionalInvestorConfirmed !== undefined ? props.waitlistEntry.professionalInvestorConfirmed : undefined,
        status: props.waitlistEntry.status !== undefined ? props.waitlistEntry.status : undefined,
        queuePosition: props.waitlistEntry.queuePosition !== undefined ? props.waitlistEntry.queuePosition : undefined,
        reviewedAt: props.waitlistEntry.reviewedAt !== undefined ? props.waitlistEntry.reviewedAt : undefined,
    reviewedBy: props.waitlistEntry.reviewedBy ? 
      typeof props.waitlistEntry.reviewedBy === 'object' && Object.keys(props.waitlistEntry.reviewedBy).length === 1 && Object.keys(props.waitlistEntry.reviewedBy)[0] === 'id'
    ? { connect: {
          id: props.waitlistEntry.reviewedBy.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.waitlistEntry.reviewedBy.id !== undefined ? props.waitlistEntry.reviewedBy.id : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? props.waitlistEntry.reviewedBy.email : undefined,
          name: props.waitlistEntry.reviewedBy.name !== undefined ? {
              equals: props.waitlistEntry.reviewedBy.name 
             } : undefined,
        },
        create: {
          name: props.waitlistEntry.reviewedBy.name !== undefined ? props.waitlistEntry.reviewedBy.name : undefined,
          email: props.waitlistEntry.reviewedBy.email !== undefined ? props.waitlistEntry.reviewedBy.email : undefined,
          emailVerified: props.waitlistEntry.reviewedBy.emailVerified !== undefined ? props.waitlistEntry.reviewedBy.emailVerified : undefined,
          image: props.waitlistEntry.reviewedBy.image !== undefined ? props.waitlistEntry.reviewedBy.image : undefined,
          deletedAt: props.waitlistEntry.reviewedBy.deletedAt !== undefined ? props.waitlistEntry.reviewedBy.deletedAt : undefined,
          role: props.waitlistEntry.reviewedBy.role !== undefined ? props.waitlistEntry.reviewedBy.role : undefined,
          bio: props.waitlistEntry.reviewedBy.bio !== undefined ? props.waitlistEntry.reviewedBy.bio : undefined,
          jobTitle: props.waitlistEntry.reviewedBy.jobTitle !== undefined ? props.waitlistEntry.reviewedBy.jobTitle : undefined,
          currentAccount: props.waitlistEntry.reviewedBy.currentAccount !== undefined ? props.waitlistEntry.reviewedBy.currentAccount : undefined,
          plan: props.waitlistEntry.reviewedBy.plan !== undefined ? props.waitlistEntry.reviewedBy.plan : undefined,
          openaiAPIKey: props.waitlistEntry.reviewedBy.openaiAPIKey !== undefined ? props.waitlistEntry.reviewedBy.openaiAPIKey : undefined,
          openaiModel: props.waitlistEntry.reviewedBy.openaiModel !== undefined ? props.waitlistEntry.reviewedBy.openaiModel : undefined,
      customer: props.waitlistEntry.reviewedBy.customer ? 
        typeof props.waitlistEntry.reviewedBy.customer === 'object' && Object.keys(props.waitlistEntry.reviewedBy.customer).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.customer)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.customer.id !== undefined ? props.waitlistEntry.reviewedBy.customer.id : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.authUserId 
               } : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.name 
               } : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                equals: props.waitlistEntry.reviewedBy.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? props.waitlistEntry.reviewedBy.customer.authUserId : undefined,
            name: props.waitlistEntry.reviewedBy.customer.name !== undefined ? props.waitlistEntry.reviewedBy.customer.name : undefined,
            plan: props.waitlistEntry.reviewedBy.customer.plan !== undefined ? props.waitlistEntry.reviewedBy.customer.plan : undefined,
            stripeCustomerId: props.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? props.waitlistEntry.reviewedBy.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.waitlistEntry.reviewedBy.accounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accounts) && props.waitlistEntry.reviewedBy.accounts.length > 0 &&  props.waitlistEntry.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
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
      sessions: props.waitlistEntry.reviewedBy.sessions ? 
        Array.isArray(props.waitlistEntry.reviewedBy.sessions) && props.waitlistEntry.reviewedBy.sessions.length > 0 &&  props.waitlistEntry.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
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
      authenticators: props.waitlistEntry.reviewedBy.authenticators ? 
        Array.isArray(props.waitlistEntry.reviewedBy.authenticators) && props.waitlistEntry.reviewedBy.authenticators.length > 0 &&  props.waitlistEntry.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
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
      alpacaAccounts: props.waitlistEntry.reviewedBy.alpacaAccounts ? 
        Array.isArray(props.waitlistEntry.reviewedBy.alpacaAccounts) && props.waitlistEntry.reviewedBy.alpacaAccounts.length > 0 &&  props.waitlistEntry.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
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
          },
        }))
      } : undefined,
      linkedProviders: props.waitlistEntry.reviewedBy.linkedProviders ? 
        Array.isArray(props.waitlistEntry.reviewedBy.linkedProviders) && props.waitlistEntry.reviewedBy.linkedProviders.length > 0 &&  props.waitlistEntry.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: props.waitlistEntry.reviewedBy.accountLinkingRequests ? 
        Array.isArray(props.waitlistEntry.reviewedBy.accountLinkingRequests) && props.waitlistEntry.reviewedBy.accountLinkingRequests.length > 0 &&  props.waitlistEntry.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      llmConfiguration: props.waitlistEntry.reviewedBy.llmConfiguration ? 
        typeof props.waitlistEntry.reviewedBy.llmConfiguration === 'object' && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration).length === 1 && Object.keys(props.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.id : undefined,
            userId: props.waitlistEntry.reviewedBy.llmConfiguration.userId !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider : undefined,
            miniProvider: props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniProvider : undefined,
            normalProvider: props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalProvider : undefined,
            advancedProvider: props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider : undefined,
            miniModel: props.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.miniModel : undefined,
            normalModel: props.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.normalModel : undefined,
            advancedModel: props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.advancedModel : undefined,
            openaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? props.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey : undefined,
          },
        }
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
          mutation: UPSERT_ONE_INVITETOKEN,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneInviteToken) {
          return response.data.upsertOneInviteToken;
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
          logger.error("Non-retryable constraint violation in upsertOneInviteToken", {
            operation: 'upsertOneInviteToken',
            model: 'InviteToken',
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
          logger.warn("Database connection error in upsertOneInviteToken, retrying...", {
            operation: 'upsertOneInviteToken',
            model: 'InviteToken',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database upsert operation failed", {
          operation: 'upsertOneInviteToken',
          model: 'InviteToken',
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
   * Update multiple InviteToken records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of InviteToken objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: InviteTokenType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_INVITETOKEN = gql`
          mutation updateManyInviteToken($data: [InviteTokenCreateManyInput!]!) {
            updateManyInviteToken(data: $data) {
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
  token: prop.token !== undefined ? {
            set: prop.token 
           } : undefined,
  email: prop.email !== undefined ? {
            set: prop.email 
           } : undefined,
  used: prop.used !== undefined ? {
            set: prop.used 
           } : undefined,
  usedAt: prop.usedAt !== undefined ? {
            set: prop.usedAt 
           } : undefined,
  expiresAt: prop.expiresAt !== undefined ? {
            set: prop.expiresAt 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  waitlistEntry: prop.waitlistEntry ? 
  typeof prop.waitlistEntry === 'object' && Object.keys(prop.waitlistEntry).length === 1 && (Object.keys(prop.waitlistEntry)[0] === 'id' || Object.keys(prop.waitlistEntry)[0] === 'symbol')
? {
  connect: {
    id: prop.waitlistEntry.id
  }
} : { upsert: {
      where: {
        id: prop.waitlistEntry.id !== undefined ? {
            equals: prop.waitlistEntry.id
          } : undefined,
        email: prop.waitlistEntry.email !== undefined ? {
            equals: prop.waitlistEntry.email
          } : undefined,
        status: prop.waitlistEntry.status !== undefined ? {
            equals: prop.waitlistEntry.status
          } : undefined,
        reviewedById: prop.waitlistEntry.reviewedById !== undefined ? {
            equals: prop.waitlistEntry.reviewedById
          } : undefined,
      },
      update: {
        id: prop.waitlistEntry.id !== undefined ? {
            set: prop.waitlistEntry.id
          } : undefined,
        email: prop.waitlistEntry.email !== undefined ? {
            set: prop.waitlistEntry.email
          } : undefined,
        fullName: prop.waitlistEntry.fullName !== undefined ? {
            set: prop.waitlistEntry.fullName
          } : undefined,
        companyName: prop.waitlistEntry.companyName !== undefined ? {
            set: prop.waitlistEntry.companyName
          } : undefined,
        companyWebsite: prop.waitlistEntry.companyWebsite !== undefined ? {
            set: prop.waitlistEntry.companyWebsite
          } : undefined,
        jobRole: prop.waitlistEntry.jobRole !== undefined ? {
            set: prop.waitlistEntry.jobRole
          } : undefined,
        professionalInvestorConfirmed: prop.waitlistEntry.professionalInvestorConfirmed !== undefined ? {
            set: prop.waitlistEntry.professionalInvestorConfirmed
          } : undefined,
        status: prop.waitlistEntry.status !== undefined ? {
            set: prop.waitlistEntry.status
          } : undefined,
        queuePosition: prop.waitlistEntry.queuePosition !== undefined ? {
            set: prop.waitlistEntry.queuePosition
          } : undefined,
        reviewedAt: prop.waitlistEntry.reviewedAt !== undefined ? {
            set: prop.waitlistEntry.reviewedAt
          } : undefined,
    reviewedBy: prop.waitlistEntry.reviewedBy ? 
    typeof prop.waitlistEntry.reviewedBy === 'object' && Object.keys(prop.waitlistEntry.reviewedBy).length === 1 && (Object.keys(prop.waitlistEntry.reviewedBy)[0] === 'id' || Object.keys(prop.waitlistEntry.reviewedBy)[0] === 'symbol')
? {
    connect: {
      id: prop.waitlistEntry.reviewedBy.id
    }
} : { upsert: {
        where: {
          id: prop.waitlistEntry.reviewedBy.id !== undefined ? {
              equals: prop.waitlistEntry.reviewedBy.id
            } : undefined,
          name: prop.waitlistEntry.reviewedBy.name !== undefined ? {
              equals: prop.waitlistEntry.reviewedBy.name
            } : undefined,
          email: prop.waitlistEntry.reviewedBy.email !== undefined ? {
              equals: prop.waitlistEntry.reviewedBy.email
            } : undefined,
          customerId: prop.waitlistEntry.reviewedBy.customerId !== undefined ? {
              equals: prop.waitlistEntry.reviewedBy.customerId
            } : undefined,
        },
        update: {
          id: prop.waitlistEntry.reviewedBy.id !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.id
            } : undefined,
          name: prop.waitlistEntry.reviewedBy.name !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.name
            } : undefined,
          email: prop.waitlistEntry.reviewedBy.email !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.email
            } : undefined,
          emailVerified: prop.waitlistEntry.reviewedBy.emailVerified !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.emailVerified
            } : undefined,
          image: prop.waitlistEntry.reviewedBy.image !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.image
            } : undefined,
          deletedAt: prop.waitlistEntry.reviewedBy.deletedAt !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.deletedAt
            } : undefined,
          role: prop.waitlistEntry.reviewedBy.role !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.role
            } : undefined,
          bio: prop.waitlistEntry.reviewedBy.bio !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.bio
            } : undefined,
          jobTitle: prop.waitlistEntry.reviewedBy.jobTitle !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.jobTitle
            } : undefined,
          currentAccount: prop.waitlistEntry.reviewedBy.currentAccount !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.currentAccount
            } : undefined,
          plan: prop.waitlistEntry.reviewedBy.plan !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.plan
            } : undefined,
          openaiAPIKey: prop.waitlistEntry.reviewedBy.openaiAPIKey !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.openaiAPIKey
            } : undefined,
          openaiModel: prop.waitlistEntry.reviewedBy.openaiModel !== undefined ? {
              set: prop.waitlistEntry.reviewedBy.openaiModel
            } : undefined,
      customer: prop.waitlistEntry.reviewedBy.customer ? 
      typeof prop.waitlistEntry.reviewedBy.customer === 'object' && Object.keys(prop.waitlistEntry.reviewedBy.customer).length === 1 && (Object.keys(prop.waitlistEntry.reviewedBy.customer)[0] === 'id' || Object.keys(prop.waitlistEntry.reviewedBy.customer)[0] === 'symbol')
? {
      connect: {
        id: prop.waitlistEntry.reviewedBy.customer.id
      }
} : { upsert: {
          where: {
            id: prop.waitlistEntry.reviewedBy.customer.id !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.id
              } : undefined,
            authUserId: prop.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.authUserId
              } : undefined,
            name: prop.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.name
              } : undefined,
            stripeCustomerId: prop.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: prop.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: prop.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.customer.authUserId
              } : undefined,
            name: prop.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.customer.name
              } : undefined,
            plan: prop.waitlistEntry.reviewedBy.customer.plan !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.customer.plan
              } : undefined,
            stripeCustomerId: prop.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: prop.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: prop.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: prop.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? prop.waitlistEntry.reviewedBy.customer.authUserId : undefined,
            name: prop.waitlistEntry.reviewedBy.customer.name !== undefined ? prop.waitlistEntry.reviewedBy.customer.name : undefined,
            plan: prop.waitlistEntry.reviewedBy.customer.plan !== undefined ? prop.waitlistEntry.reviewedBy.customer.plan : undefined,
            stripeCustomerId: prop.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.waitlistEntry.reviewedBy.accounts ? 
      Array.isArray(prop.waitlistEntry.reviewedBy.accounts) && prop.waitlistEntry.reviewedBy.accounts.length > 0 && prop.waitlistEntry.reviewedBy.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
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
      sessions: prop.waitlistEntry.reviewedBy.sessions ? 
      Array.isArray(prop.waitlistEntry.reviewedBy.sessions) && prop.waitlistEntry.reviewedBy.sessions.length > 0 && prop.waitlistEntry.reviewedBy.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
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
      authenticators: prop.waitlistEntry.reviewedBy.authenticators ? 
      Array.isArray(prop.waitlistEntry.reviewedBy.authenticators) && prop.waitlistEntry.reviewedBy.authenticators.length > 0 && prop.waitlistEntry.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
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
      alpacaAccounts: prop.waitlistEntry.reviewedBy.alpacaAccounts ? 
      Array.isArray(prop.waitlistEntry.reviewedBy.alpacaAccounts) && prop.waitlistEntry.reviewedBy.alpacaAccounts.length > 0 && prop.waitlistEntry.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
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
          },
        }))
      } : undefined,
      linkedProviders: prop.waitlistEntry.reviewedBy.linkedProviders ? 
      Array.isArray(prop.waitlistEntry.reviewedBy.linkedProviders) && prop.waitlistEntry.reviewedBy.linkedProviders.length > 0 && prop.waitlistEntry.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: prop.waitlistEntry.reviewedBy.accountLinkingRequests ? 
      Array.isArray(prop.waitlistEntry.reviewedBy.accountLinkingRequests) && prop.waitlistEntry.reviewedBy.accountLinkingRequests.length > 0 && prop.waitlistEntry.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      llmConfiguration: prop.waitlistEntry.reviewedBy.llmConfiguration ? 
      typeof prop.waitlistEntry.reviewedBy.llmConfiguration === 'object' && Object.keys(prop.waitlistEntry.reviewedBy.llmConfiguration).length === 1 && (Object.keys(prop.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'id' || Object.keys(prop.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'symbol')
? {
      connect: {
        id: prop.waitlistEntry.reviewedBy.llmConfiguration.id
      }
} : { upsert: {
          where: {
            id: prop.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.llmConfiguration.id
              } : undefined,
            userId: prop.waitlistEntry.reviewedBy.llmConfiguration.userId !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.llmConfiguration.userId
              } : undefined,
          },
          update: {
            id: prop.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.id
              } : undefined,
            defaultProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider
              } : undefined,
            miniProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.miniProvider
              } : undefined,
            normalProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.normalProvider
              } : undefined,
            advancedProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider
              } : undefined,
            miniModel: prop.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.miniModel
              } : undefined,
            normalModel: prop.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.normalModel
              } : undefined,
            advancedModel: prop.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.advancedModel
              } : undefined,
            openaiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey
              } : undefined,
            anthropicApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey
              } : undefined,
            deepseekApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey
              } : undefined,
            kimiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey
              } : undefined,
            qwenApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey
              } : undefined,
            xaiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey
              } : undefined,
            geminiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? {
                set: prop.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey
              } : undefined,
          },
          create: {
            defaultProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider : undefined,
            miniProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.miniProvider : undefined,
            normalProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.normalProvider : undefined,
            advancedProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider : undefined,
            miniModel: prop.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.miniModel : undefined,
            normalModel: prop.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.normalModel : undefined,
            advancedModel: prop.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.advancedModel : undefined,
            openaiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
        create: {
          name: prop.waitlistEntry.reviewedBy.name !== undefined ? prop.waitlistEntry.reviewedBy.name : undefined,
          email: prop.waitlistEntry.reviewedBy.email !== undefined ? prop.waitlistEntry.reviewedBy.email : undefined,
          emailVerified: prop.waitlistEntry.reviewedBy.emailVerified !== undefined ? prop.waitlistEntry.reviewedBy.emailVerified : undefined,
          image: prop.waitlistEntry.reviewedBy.image !== undefined ? prop.waitlistEntry.reviewedBy.image : undefined,
          deletedAt: prop.waitlistEntry.reviewedBy.deletedAt !== undefined ? prop.waitlistEntry.reviewedBy.deletedAt : undefined,
          role: prop.waitlistEntry.reviewedBy.role !== undefined ? prop.waitlistEntry.reviewedBy.role : undefined,
          bio: prop.waitlistEntry.reviewedBy.bio !== undefined ? prop.waitlistEntry.reviewedBy.bio : undefined,
          jobTitle: prop.waitlistEntry.reviewedBy.jobTitle !== undefined ? prop.waitlistEntry.reviewedBy.jobTitle : undefined,
          currentAccount: prop.waitlistEntry.reviewedBy.currentAccount !== undefined ? prop.waitlistEntry.reviewedBy.currentAccount : undefined,
          plan: prop.waitlistEntry.reviewedBy.plan !== undefined ? prop.waitlistEntry.reviewedBy.plan : undefined,
          openaiAPIKey: prop.waitlistEntry.reviewedBy.openaiAPIKey !== undefined ? prop.waitlistEntry.reviewedBy.openaiAPIKey : undefined,
          openaiModel: prop.waitlistEntry.reviewedBy.openaiModel !== undefined ? prop.waitlistEntry.reviewedBy.openaiModel : undefined,
      customer: prop.waitlistEntry.reviewedBy.customer ? 
        typeof prop.waitlistEntry.reviewedBy.customer === 'object' && Object.keys(prop.waitlistEntry.reviewedBy.customer).length === 1 && Object.keys(prop.waitlistEntry.reviewedBy.customer)[0] === 'id'
    ? { connect: {
            id: prop.waitlistEntry.reviewedBy.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.waitlistEntry.reviewedBy.customer.id !== undefined ? prop.waitlistEntry.reviewedBy.customer.id : undefined,
            stripeCustomerId: prop.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            authUserId: prop.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.authUserId 
               } : undefined,
            name: prop.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.name 
               } : undefined,
            stripePriceId: prop.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: prop.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? prop.waitlistEntry.reviewedBy.customer.authUserId : undefined,
            name: prop.waitlistEntry.reviewedBy.customer.name !== undefined ? prop.waitlistEntry.reviewedBy.customer.name : undefined,
            plan: prop.waitlistEntry.reviewedBy.customer.plan !== undefined ? prop.waitlistEntry.reviewedBy.customer.plan : undefined,
            stripeCustomerId: prop.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.waitlistEntry.reviewedBy.accounts ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.accounts) && prop.waitlistEntry.reviewedBy.accounts.length > 0 &&  prop.waitlistEntry.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
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
      sessions: prop.waitlistEntry.reviewedBy.sessions ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.sessions) && prop.waitlistEntry.reviewedBy.sessions.length > 0 &&  prop.waitlistEntry.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
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
      authenticators: prop.waitlistEntry.reviewedBy.authenticators ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.authenticators) && prop.waitlistEntry.reviewedBy.authenticators.length > 0 &&  prop.waitlistEntry.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
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
      alpacaAccounts: prop.waitlistEntry.reviewedBy.alpacaAccounts ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.alpacaAccounts) && prop.waitlistEntry.reviewedBy.alpacaAccounts.length > 0 &&  prop.waitlistEntry.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
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
          },
        }))
      } : undefined,
      linkedProviders: prop.waitlistEntry.reviewedBy.linkedProviders ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.linkedProviders) && prop.waitlistEntry.reviewedBy.linkedProviders.length > 0 &&  prop.waitlistEntry.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: prop.waitlistEntry.reviewedBy.accountLinkingRequests ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.accountLinkingRequests) && prop.waitlistEntry.reviewedBy.accountLinkingRequests.length > 0 &&  prop.waitlistEntry.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      llmConfiguration: prop.waitlistEntry.reviewedBy.llmConfiguration ? 
        typeof prop.waitlistEntry.reviewedBy.llmConfiguration === 'object' && Object.keys(prop.waitlistEntry.reviewedBy.llmConfiguration).length === 1 && Object.keys(prop.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: prop.waitlistEntry.reviewedBy.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.id : undefined,
            userId: prop.waitlistEntry.reviewedBy.llmConfiguration.userId !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider : undefined,
            miniProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.miniProvider : undefined,
            normalProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.normalProvider : undefined,
            advancedProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider : undefined,
            miniModel: prop.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.miniModel : undefined,
            normalModel: prop.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.normalModel : undefined,
            advancedModel: prop.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.advancedModel : undefined,
            openaiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        email: prop.waitlistEntry.email !== undefined ? prop.waitlistEntry.email : undefined,
        fullName: prop.waitlistEntry.fullName !== undefined ? prop.waitlistEntry.fullName : undefined,
        companyName: prop.waitlistEntry.companyName !== undefined ? prop.waitlistEntry.companyName : undefined,
        companyWebsite: prop.waitlistEntry.companyWebsite !== undefined ? prop.waitlistEntry.companyWebsite : undefined,
        jobRole: prop.waitlistEntry.jobRole !== undefined ? prop.waitlistEntry.jobRole : undefined,
        professionalInvestorConfirmed: prop.waitlistEntry.professionalInvestorConfirmed !== undefined ? prop.waitlistEntry.professionalInvestorConfirmed : undefined,
        status: prop.waitlistEntry.status !== undefined ? prop.waitlistEntry.status : undefined,
        queuePosition: prop.waitlistEntry.queuePosition !== undefined ? prop.waitlistEntry.queuePosition : undefined,
        reviewedAt: prop.waitlistEntry.reviewedAt !== undefined ? prop.waitlistEntry.reviewedAt : undefined,
    reviewedBy: prop.waitlistEntry.reviewedBy ? 
      typeof prop.waitlistEntry.reviewedBy === 'object' && Object.keys(prop.waitlistEntry.reviewedBy).length === 1 && Object.keys(prop.waitlistEntry.reviewedBy)[0] === 'id'
    ? { connect: {
          id: prop.waitlistEntry.reviewedBy.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.waitlistEntry.reviewedBy.id !== undefined ? prop.waitlistEntry.reviewedBy.id : undefined,
          email: prop.waitlistEntry.reviewedBy.email !== undefined ? prop.waitlistEntry.reviewedBy.email : undefined,
          name: prop.waitlistEntry.reviewedBy.name !== undefined ? {
              equals: prop.waitlistEntry.reviewedBy.name 
             } : undefined,
        },
        create: {
          name: prop.waitlistEntry.reviewedBy.name !== undefined ? prop.waitlistEntry.reviewedBy.name : undefined,
          email: prop.waitlistEntry.reviewedBy.email !== undefined ? prop.waitlistEntry.reviewedBy.email : undefined,
          emailVerified: prop.waitlistEntry.reviewedBy.emailVerified !== undefined ? prop.waitlistEntry.reviewedBy.emailVerified : undefined,
          image: prop.waitlistEntry.reviewedBy.image !== undefined ? prop.waitlistEntry.reviewedBy.image : undefined,
          deletedAt: prop.waitlistEntry.reviewedBy.deletedAt !== undefined ? prop.waitlistEntry.reviewedBy.deletedAt : undefined,
          role: prop.waitlistEntry.reviewedBy.role !== undefined ? prop.waitlistEntry.reviewedBy.role : undefined,
          bio: prop.waitlistEntry.reviewedBy.bio !== undefined ? prop.waitlistEntry.reviewedBy.bio : undefined,
          jobTitle: prop.waitlistEntry.reviewedBy.jobTitle !== undefined ? prop.waitlistEntry.reviewedBy.jobTitle : undefined,
          currentAccount: prop.waitlistEntry.reviewedBy.currentAccount !== undefined ? prop.waitlistEntry.reviewedBy.currentAccount : undefined,
          plan: prop.waitlistEntry.reviewedBy.plan !== undefined ? prop.waitlistEntry.reviewedBy.plan : undefined,
          openaiAPIKey: prop.waitlistEntry.reviewedBy.openaiAPIKey !== undefined ? prop.waitlistEntry.reviewedBy.openaiAPIKey : undefined,
          openaiModel: prop.waitlistEntry.reviewedBy.openaiModel !== undefined ? prop.waitlistEntry.reviewedBy.openaiModel : undefined,
      customer: prop.waitlistEntry.reviewedBy.customer ? 
        typeof prop.waitlistEntry.reviewedBy.customer === 'object' && Object.keys(prop.waitlistEntry.reviewedBy.customer).length === 1 && Object.keys(prop.waitlistEntry.reviewedBy.customer)[0] === 'id'
    ? { connect: {
            id: prop.waitlistEntry.reviewedBy.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.waitlistEntry.reviewedBy.customer.id !== undefined ? prop.waitlistEntry.reviewedBy.customer.id : undefined,
            stripeCustomerId: prop.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            authUserId: prop.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.authUserId 
               } : undefined,
            name: prop.waitlistEntry.reviewedBy.customer.name !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.name 
               } : undefined,
            stripePriceId: prop.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? {
                equals: prop.waitlistEntry.reviewedBy.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: prop.waitlistEntry.reviewedBy.customer.authUserId !== undefined ? prop.waitlistEntry.reviewedBy.customer.authUserId : undefined,
            name: prop.waitlistEntry.reviewedBy.customer.name !== undefined ? prop.waitlistEntry.reviewedBy.customer.name : undefined,
            plan: prop.waitlistEntry.reviewedBy.customer.plan !== undefined ? prop.waitlistEntry.reviewedBy.customer.plan : undefined,
            stripeCustomerId: prop.waitlistEntry.reviewedBy.customer.stripeCustomerId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.waitlistEntry.reviewedBy.customer.stripePriceId !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? prop.waitlistEntry.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.waitlistEntry.reviewedBy.accounts ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.accounts) && prop.waitlistEntry.reviewedBy.accounts.length > 0 &&  prop.waitlistEntry.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.accounts.map((item: any) => ({
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
      sessions: prop.waitlistEntry.reviewedBy.sessions ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.sessions) && prop.waitlistEntry.reviewedBy.sessions.length > 0 &&  prop.waitlistEntry.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.sessions.map((item: any) => ({
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
      authenticators: prop.waitlistEntry.reviewedBy.authenticators ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.authenticators) && prop.waitlistEntry.reviewedBy.authenticators.length > 0 &&  prop.waitlistEntry.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.authenticators.map((item: any) => ({
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
      alpacaAccounts: prop.waitlistEntry.reviewedBy.alpacaAccounts ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.alpacaAccounts) && prop.waitlistEntry.reviewedBy.alpacaAccounts.length > 0 &&  prop.waitlistEntry.reviewedBy.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.alpacaAccounts.map((item: any) => ({
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
          },
        }))
      } : undefined,
      linkedProviders: prop.waitlistEntry.reviewedBy.linkedProviders ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.linkedProviders) && prop.waitlistEntry.reviewedBy.linkedProviders.length > 0 &&  prop.waitlistEntry.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.linkedProviders.map((item: any) => ({
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
      accountLinkingRequests: prop.waitlistEntry.reviewedBy.accountLinkingRequests ? 
        Array.isArray(prop.waitlistEntry.reviewedBy.accountLinkingRequests) && prop.waitlistEntry.reviewedBy.accountLinkingRequests.length > 0 &&  prop.waitlistEntry.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.waitlistEntry.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
      llmConfiguration: prop.waitlistEntry.reviewedBy.llmConfiguration ? 
        typeof prop.waitlistEntry.reviewedBy.llmConfiguration === 'object' && Object.keys(prop.waitlistEntry.reviewedBy.llmConfiguration).length === 1 && Object.keys(prop.waitlistEntry.reviewedBy.llmConfiguration)[0] === 'id'
    ? { connect: {
            id: prop.waitlistEntry.reviewedBy.llmConfiguration.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.waitlistEntry.reviewedBy.llmConfiguration.id !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.id : undefined,
            userId: prop.waitlistEntry.reviewedBy.llmConfiguration.userId !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.userId : undefined,
          },
          create: {
            defaultProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.defaultProvider : undefined,
            miniProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.miniProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.miniProvider : undefined,
            normalProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.normalProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.normalProvider : undefined,
            advancedProvider: prop.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.advancedProvider : undefined,
            miniModel: prop.waitlistEntry.reviewedBy.llmConfiguration.miniModel !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.miniModel : undefined,
            normalModel: prop.waitlistEntry.reviewedBy.llmConfiguration.normalModel !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.normalModel : undefined,
            advancedModel: prop.waitlistEntry.reviewedBy.llmConfiguration.advancedModel !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.advancedModel : undefined,
            openaiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.openaiApiKey : undefined,
            anthropicApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.anthropicApiKey : undefined,
            deepseekApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.deepseekApiKey : undefined,
            kimiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.kimiApiKey : undefined,
            qwenApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.qwenApiKey : undefined,
            xaiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.xaiApiKey : undefined,
            geminiApiKey: prop.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey !== undefined ? prop.waitlistEntry.reviewedBy.llmConfiguration.geminiApiKey : undefined,
          },
        }
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
          mutation: UPDATE_MANY_INVITETOKEN,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyInviteToken) {
          return response.data.updateManyInviteToken;
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
          logger.error("Non-retryable constraint violation in updateManyInviteToken", {
            operation: 'updateManyInviteToken',
            model: 'InviteToken',
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
          logger.warn("Database connection error in updateManyInviteToken, retrying...", {
            operation: 'updateManyInviteToken',
            model: 'InviteToken',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database updateMany operation failed", {
          operation: 'updateManyInviteToken',
          model: 'InviteToken',
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
   * Delete a single InviteToken record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted InviteToken or null.
   */
  async delete(props: InviteTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InviteTokenType> {
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

        const DELETE_ONE_INVITETOKEN = gql`
          mutation deleteOneInviteToken($where: InviteTokenWhereUniqueInput!) {
            deleteOneInviteToken(where: $where) {
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
          mutation: DELETE_ONE_INVITETOKEN,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneInviteToken) {
          return response.data.deleteOneInviteToken;
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
          logger.error("Non-retryable constraint violation in deleteOneInviteToken", {
            operation: 'deleteOneInviteToken',
            model: 'InviteToken',
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
          logger.warn("Database connection error in deleteOneInviteToken, retrying...", {
            operation: 'deleteOneInviteToken',
            model: 'InviteToken',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
            recordId: props.id,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database delete operation failed", {
          operation: 'deleteOneInviteToken',
          model: 'InviteToken',
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
   * Retrieve a single InviteToken record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved InviteToken or null.
   */
  async get(props: InviteTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<InviteTokenType | null> {
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

        const GET_INVITETOKEN = gql`
          query getInviteToken($where: InviteTokenWhereUniqueInput!) {
            getInviteToken(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  waitlistEntryId: props.waitlistEntryId !== undefined ? props.waitlistEntryId : undefined,
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_INVITETOKEN,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getInviteToken ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InviteToken found') {
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
          logger.warn("Database connection error in getInviteToken, retrying...", {
            operation: 'getInviteToken',
            model: 'InviteToken',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database get operation failed", {
          operation: 'getInviteToken',
          model: 'InviteToken',
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
   * Retrieve all InviteTokens records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of InviteToken records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InviteTokenType[] | null> {
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

        const GET_ALL_INVITETOKEN = gql`
          query getAllInviteToken {
            inviteTokens {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_INVITETOKEN,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.inviteTokens ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InviteToken found') {
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
          logger.warn("Database connection error in getAllInviteToken, retrying...", {
            operation: 'getAllInviteToken',
            model: 'InviteToken',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database getAll operation failed", {
          operation: 'getAllInviteToken',
          model: 'InviteToken',
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
   * Find multiple InviteToken records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found InviteToken records or null.
   */
  async findMany(props: InviteTokenType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<InviteTokenType[] | null> {
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

        const FIND_MANY_INVITETOKEN = gql`
          query findManyInviteToken($where: InviteTokenWhereInput!) {
            inviteTokens(where: $where) {
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

        // Validate that we have at least one filter criteria
        // GraphQL requires a non-empty where clause for findMany
        if (!filteredVariables || !filteredVariables.where || Object.keys(filteredVariables.where).length === 0) {
          throw new Error(`findManyInviteToken requires at least one filter criterion. Received empty where clause.`);
        }

        const response = await client.query({
          query: FIND_MANY_INVITETOKEN,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.inviteTokens) {
          return response.data.inviteTokens;
        } else {
          return [] as InviteTokenType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InviteToken found') {
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
          logger.warn("Database connection error in findManyInviteToken, retrying...", {
            operation: 'findManyInviteToken',
            model: 'InviteToken',
            attempt: retryCount,
            maxRetries: MAX_RETRIES,
          });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log structured error details and rethrow
        logger.error("Database findMany operation failed", {
          operation: 'findManyInviteToken',
          model: 'InviteToken',
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
