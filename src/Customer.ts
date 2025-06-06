
  
import { Customer as CustomerType } from './generated/typegraphql-prisma/models/Customer';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
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
    role
    bio
    jobTitle
    currentAccount
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
        stocks
        crypto
        options
        etfs
        alpacaAccountId
        alpacaAccount {
id
        }
        createdAt
        updatedAt
      }
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
        message
        type
        isRead
        createdAt
        updatedAt
      }
    }
    openaiAPIKey
    openaiModel
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
              : importedClient
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
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
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
          },
          create: {
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
          },
        }))
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
            console.warn("Database connection error, retrying...");
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log the error and rethrow
          console.error("Database error occurred:", error);
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
   * @returns The count of created records or null.
   */
  async createMany(props: CustomerType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_CUSTOMER = gql`
          mutation createManyCustomer($data: [CustomerCreateManyInput!]!) {
            createManyCustomer(data: $data) {
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
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
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
            : importedClient
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
            stocks: item.allocation.stocks !== undefined ? {
                set: item.allocation.stocks
              } : undefined,
            crypto: item.allocation.crypto !== undefined ? {
                set: item.allocation.crypto
              } : undefined,
            options: item.allocation.options !== undefined ? {
                set: item.allocation.options
              } : undefined,
            etfs: item.allocation.etfs !== undefined ? {
                set: item.allocation.etfs
              } : undefined,
          },
          create: {
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
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
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            message: item.message !== undefined ? {
                set: item.message
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead
              } : undefined,
          },
          create: {
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
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
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
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
          },
          create: {
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
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
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
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
          },
          create: {
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
          },
        }))
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
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
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
            : importedClient
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
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
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
          },
          create: {
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
          },
        }))
      } : undefined,
        },
      }))
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
            stocks: item.allocation.stocks !== undefined ? {
                set: item.allocation.stocks
              } : undefined,
            crypto: item.allocation.crypto !== undefined ? {
                set: item.allocation.crypto
              } : undefined,
            options: item.allocation.options !== undefined ? {
                set: item.allocation.options
              } : undefined,
            etfs: item.allocation.etfs !== undefined ? {
                set: item.allocation.etfs
              } : undefined,
          },
          create: {
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
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
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            message: item.message !== undefined ? {
                set: item.message
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead
              } : undefined,
          },
          create: {
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
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
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
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
          },
          create: {
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
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
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
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
          },
          create: {
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
          },
        }))
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
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
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
            : importedClient
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
  stripeCustomerId: prop.stripeCustomerId !== undefined ? prop.stripeCustomerId : undefined,
  stripeSubscriptionId: prop.stripeSubscriptionId !== undefined ? prop.stripeSubscriptionId : undefined,
  authUserId: prop.authUserId !== undefined ? {
    equals: prop.authUserId 
  } : undefined,
  name: prop.name !== undefined ? {
    equals: prop.name 
  } : undefined,
  stripePriceId: prop.stripePriceId !== undefined ? {
    equals: prop.stripePriceId 
  } : undefined,

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
            stocks: item.allocation.stocks !== undefined ? {
                set: item.allocation.stocks
              } : undefined,
            crypto: item.allocation.crypto !== undefined ? {
                set: item.allocation.crypto
              } : undefined,
            options: item.allocation.options !== undefined ? {
                set: item.allocation.options
              } : undefined,
            etfs: item.allocation.etfs !== undefined ? {
                set: item.allocation.etfs
              } : undefined,
          },
          create: {
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
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
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            message: item.message !== undefined ? {
                set: item.message
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead
              } : undefined,
          },
          create: {
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
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
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
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
          },
          create: {
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
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
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
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
          },
          create: {
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
          },
        }))
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
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
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
            : importedClient
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
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
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
            : importedClient
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
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
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
            : importedClient
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
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
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
            : importedClient
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
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  }
};
