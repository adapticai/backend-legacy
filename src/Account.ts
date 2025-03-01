
  
import { Account as AccountType } from './generated/typegraphql-prisma/models/Account';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
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
      tradeAllocationPct
      minPercentageChange
      volumeThreshold
      enablePortfolioTrailingStop
      portfolioTrailPercent
      portfolioProfitThresholdPercent
      reducedPortfolioTrailPercent
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

  export const Account = {

    /**
     * Create a new Account record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Account or null.
     */

    async create(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AccountType> {

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
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
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
    }
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_ACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAccount) {
        return response.data.createOneAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAccount:', error);
      throw error;
    }
  },

  /**
   * Create multiple Account records.
   * @param props - Array of Account objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AccountType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

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

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAccount) {
        return response.data.createManyAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAccount:', error);
      throw error;
    }
  },

  /**
   * Update a single Account record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Account or null.
   */
  async update(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AccountType> {

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
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
  providerAccountId: props.providerAccountId !== undefined ? {
    equals: props.providerAccountId 
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
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
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
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
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
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
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
    }
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_ACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAccount) {
        return response.data.updateOneAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAccount:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Account record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Account or null.
   */
  async upsert(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AccountType> {

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
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
  providerAccountId: props.providerAccountId !== undefined ? {
    equals: props.providerAccountId 
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
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
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
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
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
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
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
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
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
    }
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_ACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneAccount) {
        return response.data.upsertOneAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneAccount:', error);
      throw error;
    }
  },

  /**
   * Update multiple Account records.
   * @param props - Array of Account objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: AccountType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

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
  userId: prop.userId !== undefined ? {
    equals: prop.userId 
  } : undefined,
  providerAccountId: prop.providerAccountId !== undefined ? {
    equals: prop.providerAccountId 
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
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
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
        name: prop.user.name !== undefined ? prop.user.name : undefined,
        email: prop.user.email !== undefined ? prop.user.email : undefined,
        emailVerified: prop.user.emailVerified !== undefined ? prop.user.emailVerified : undefined,
        image: prop.user.image !== undefined ? prop.user.image : undefined,
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
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
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
    }
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_ACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyAccount) {
        return response.data.updateManyAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyAccount:', error);
      throw error;
    }
  },

  /**
   * Delete a single Account record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Account or null.
   */
  async delete(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AccountType> {

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
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_ACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAccount) {
        return response.data.deleteOneAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAccount:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Account record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Account or null.
   */
  async get(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<AccountType | null> {

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
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
  providerAccountId: props.providerAccountId !== undefined ? {
    equals: props.providerAccountId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_ACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAccount ?? null;
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No Account found') {
        return null;
      } else {
        console.error('Error in getAccount:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Accounts records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Account records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<AccountType[] | null> {

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

    try {
      const response = await client.query({ query: GET_ALL_ACCOUNT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.accounts ?? null;
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No Account found') {
        return null;
      } else {
        console.error('Error in getAccount:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Account records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Account records or null.
   */
  async findMany(props: AccountType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<AccountType[] | null> {

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

    try {
      const response = await client.query({ query: FIND_MANY_ACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.accounts) {
        return response.data.accounts;
      } else {
       return [] as AccountType[];
      }
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No Account found') {
        return null;
      } else {
        console.error('Error in getAccount:', error);
        throw error;
      }
    }
  }
};
