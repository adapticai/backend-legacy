
  
import { Account as AccountType } from './generated/typegraphql-prisma/models/Account';
import { ApolloError, gql } from '@apollo/client';
import { client } from './client';
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
      minOrderSize
      maxOrderSize
      minPercentageChange
      volumeThreshold
      userId
      createdAt
      updatedAt
      trades {
        id
        alpacaAccountId
        assetId
        qty
        price
        total
        optionType
        signal
        strategy
        analysis
        summary
        confidence
        timestamp
        createdAt
        updatedAt
        status
        asset {
id
        }
        actions {
id
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
id
        }
        takeProfit {
id
        }
        trailPrice
        trailPercent
        extendedHours
        status
        createdAt
        updatedAt
        submittedAt
        filledAt
        filledQty
        filledAvgPrice
        cancelRequestedAt
        canceledAt
        actionId
        action {
id
        }
        asset {
id
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
        contractId
      }
      positions {
        id
        assetId
        asset {
id
        }
        averageEntryPrice
        qty
        qtyAvailable
        marketValue
        costBasis
        unrealizedPL
        unrealizedPLPC
        unrealisedIntradayPL
        unrealisedIntradayPLPC
        currentPrice
        lastTradePrice
        changeToday
        assetMarginable
        closed
        createdAt
        updatedAt
      }
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
     * @returns The created Account or null.
     */

    async create(props: AccountType): Promise<AccountType> {

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
          minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
          maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
            canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
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
   * @returns The count of created records or null.
   */
  async createMany(props: AccountType[]): Promise<{ count: number } | null> {

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
   * @returns The updated Account or null.
   */
  async update(props: AccountType): Promise<AccountType> {

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
  user: props.user ? {
    upsert: {
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
    customer: props.user.customer ? {
      upsert: {
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
    sessions: props.user.sessions ? {
      upsert: props.user.sessions.map((item: any) => ({
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
    authenticators: props.user.authenticators ? {
      upsert: props.user.authenticators.map((item: any) => ({
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
    alpacaAccounts: props.user.alpacaAccounts ? {
      upsert: props.user.alpacaAccounts.map((item: any) => ({
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
          minOrderSize: item.minOrderSize !== undefined ? {
              set: item.minOrderSize  
             } : undefined,
          maxOrderSize: item.maxOrderSize !== undefined ? {
              set: item.maxOrderSize  
             } : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? {
              set: item.minPercentageChange  
             } : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? {
              set: item.volumeThreshold  
             } : undefined,
      trades: item.trades ? {
        upsert: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            price: item.price !== undefined ? {
                set: item.price  
               } : undefined,
            total: item.total !== undefined ? {
                set: item.total  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal  
               } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy  
               } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis  
               } : undefined,
            summary: item.summary !== undefined ? {
                set: item.summary  
               } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence  
               } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? {
        upsert: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                equals: item.takeProfitId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            clientOrderId: item.clientOrderId !== undefined ? {
                set: item.clientOrderId  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            notional: item.notional !== undefined ? {
                set: item.notional  
               } : undefined,
            side: item.side !== undefined ? {
                set: item.side  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            orderClass: item.orderClass !== undefined ? {
                set: item.orderClass  
               } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce  
               } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice  
               } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice  
               } : undefined,
            trailPrice: item.trailPrice !== undefined ? {
                set: item.trailPrice  
               } : undefined,
            trailPercent: item.trailPercent !== undefined ? {
                set: item.trailPercent  
               } : undefined,
            extendedHours: item.extendedHours !== undefined ? {
                set: item.extendedHours  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            submittedAt: item.submittedAt !== undefined ? {
                set: item.submittedAt  
               } : undefined,
            filledAt: item.filledAt !== undefined ? {
                set: item.filledAt  
               } : undefined,
            filledQty: item.filledQty !== undefined ? {
                set: item.filledQty  
               } : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? {
                set: item.filledAvgPrice  
               } : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? {
                set: item.cancelRequestedAt  
               } : undefined,
            canceledAt: item.canceledAt !== undefined ? {
                set: item.canceledAt  
               } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee  
               } : undefined,
            strikePrice: item.strikePrice !== undefined ? {
                set: item.strikePrice  
               } : undefined,
            expirationDate: item.expirationDate !== undefined ? {
                set: item.expirationDate  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            stopLossId: item.stopLossId !== undefined ? {
                set: item.stopLossId  
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                set: item.takeProfitId  
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
            canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? {
        upsert: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            averageEntryPrice: item.averageEntryPrice !== undefined ? {
                set: item.averageEntryPrice  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? {
                set: item.qtyAvailable  
               } : undefined,
            marketValue: item.marketValue !== undefined ? {
                set: item.marketValue  
               } : undefined,
            costBasis: item.costBasis !== undefined ? {
                set: item.costBasis  
               } : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? {
                set: item.unrealizedPL  
               } : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? {
                set: item.unrealizedPLPC  
               } : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? {
                set: item.unrealisedIntradayPL  
               } : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? {
                set: item.unrealisedIntradayPLPC  
               } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice  
               } : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? {
                set: item.lastTradePrice  
               } : undefined,
            changeToday: item.changeToday !== undefined ? {
                set: item.changeToday  
               } : undefined,
            assetMarginable: item.assetMarginable !== undefined ? {
                set: item.assetMarginable  
               } : undefined,
            closed: item.closed !== undefined ? {
                set: item.closed  
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
      } : undefined,
      alerts: item.alerts ? {
        upsert: item.alerts.map((item: any) => ({
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
          minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
          maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
            canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
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
          minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
          maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
            canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
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
   * @returns The updated Account or null.
   */
  async upsert(props: AccountType): Promise<AccountType> {

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
          minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
          maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
            canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
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
  user: props.user ? {
    upsert: {
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
    customer: props.user.customer ? {
      upsert: {
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
    sessions: props.user.sessions ? {
      upsert: props.user.sessions.map((item: any) => ({
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
    authenticators: props.user.authenticators ? {
      upsert: props.user.authenticators.map((item: any) => ({
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
    alpacaAccounts: props.user.alpacaAccounts ? {
      upsert: props.user.alpacaAccounts.map((item: any) => ({
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
          minOrderSize: item.minOrderSize !== undefined ? {
              set: item.minOrderSize  
             } : undefined,
          maxOrderSize: item.maxOrderSize !== undefined ? {
              set: item.maxOrderSize  
             } : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? {
              set: item.minPercentageChange  
             } : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? {
              set: item.volumeThreshold  
             } : undefined,
      trades: item.trades ? {
        upsert: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            price: item.price !== undefined ? {
                set: item.price  
               } : undefined,
            total: item.total !== undefined ? {
                set: item.total  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal  
               } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy  
               } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis  
               } : undefined,
            summary: item.summary !== undefined ? {
                set: item.summary  
               } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence  
               } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? {
        upsert: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                equals: item.takeProfitId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            clientOrderId: item.clientOrderId !== undefined ? {
                set: item.clientOrderId  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            notional: item.notional !== undefined ? {
                set: item.notional  
               } : undefined,
            side: item.side !== undefined ? {
                set: item.side  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            orderClass: item.orderClass !== undefined ? {
                set: item.orderClass  
               } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce  
               } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice  
               } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice  
               } : undefined,
            trailPrice: item.trailPrice !== undefined ? {
                set: item.trailPrice  
               } : undefined,
            trailPercent: item.trailPercent !== undefined ? {
                set: item.trailPercent  
               } : undefined,
            extendedHours: item.extendedHours !== undefined ? {
                set: item.extendedHours  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            submittedAt: item.submittedAt !== undefined ? {
                set: item.submittedAt  
               } : undefined,
            filledAt: item.filledAt !== undefined ? {
                set: item.filledAt  
               } : undefined,
            filledQty: item.filledQty !== undefined ? {
                set: item.filledQty  
               } : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? {
                set: item.filledAvgPrice  
               } : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? {
                set: item.cancelRequestedAt  
               } : undefined,
            canceledAt: item.canceledAt !== undefined ? {
                set: item.canceledAt  
               } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee  
               } : undefined,
            strikePrice: item.strikePrice !== undefined ? {
                set: item.strikePrice  
               } : undefined,
            expirationDate: item.expirationDate !== undefined ? {
                set: item.expirationDate  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            stopLossId: item.stopLossId !== undefined ? {
                set: item.stopLossId  
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                set: item.takeProfitId  
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
            canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? {
        upsert: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            averageEntryPrice: item.averageEntryPrice !== undefined ? {
                set: item.averageEntryPrice  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? {
                set: item.qtyAvailable  
               } : undefined,
            marketValue: item.marketValue !== undefined ? {
                set: item.marketValue  
               } : undefined,
            costBasis: item.costBasis !== undefined ? {
                set: item.costBasis  
               } : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? {
                set: item.unrealizedPL  
               } : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? {
                set: item.unrealizedPLPC  
               } : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? {
                set: item.unrealisedIntradayPL  
               } : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? {
                set: item.unrealisedIntradayPLPC  
               } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice  
               } : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? {
                set: item.lastTradePrice  
               } : undefined,
            changeToday: item.changeToday !== undefined ? {
                set: item.changeToday  
               } : undefined,
            assetMarginable: item.assetMarginable !== undefined ? {
                set: item.assetMarginable  
               } : undefined,
            closed: item.closed !== undefined ? {
                set: item.closed  
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
      } : undefined,
      alerts: item.alerts ? {
        upsert: item.alerts.map((item: any) => ({
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
          minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
          maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
            canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
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
          minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
          maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
            canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
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
   * @returns The count of created records or null.
   */
  async updateMany(props: AccountType[]): Promise<{ count: number } | null> {

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
  user: prop.user ? {
    upsert: {
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
    customer: prop.user.customer ? {
      upsert: {
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
    sessions: prop.user.sessions ? {
      upsert: prop.user.sessions.map((item: any) => ({
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
    authenticators: prop.user.authenticators ? {
      upsert: prop.user.authenticators.map((item: any) => ({
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
    alpacaAccounts: prop.user.alpacaAccounts ? {
      upsert: prop.user.alpacaAccounts.map((item: any) => ({
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
          minOrderSize: item.minOrderSize !== undefined ? {
              set: item.minOrderSize  
             } : undefined,
          maxOrderSize: item.maxOrderSize !== undefined ? {
              set: item.maxOrderSize  
             } : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? {
              set: item.minPercentageChange  
             } : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? {
              set: item.volumeThreshold  
             } : undefined,
      trades: item.trades ? {
        upsert: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            price: item.price !== undefined ? {
                set: item.price  
               } : undefined,
            total: item.total !== undefined ? {
                set: item.total  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal  
               } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy  
               } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis  
               } : undefined,
            summary: item.summary !== undefined ? {
                set: item.summary  
               } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence  
               } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? {
        upsert: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                equals: item.takeProfitId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            clientOrderId: item.clientOrderId !== undefined ? {
                set: item.clientOrderId  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            notional: item.notional !== undefined ? {
                set: item.notional  
               } : undefined,
            side: item.side !== undefined ? {
                set: item.side  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            orderClass: item.orderClass !== undefined ? {
                set: item.orderClass  
               } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce  
               } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice  
               } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice  
               } : undefined,
            trailPrice: item.trailPrice !== undefined ? {
                set: item.trailPrice  
               } : undefined,
            trailPercent: item.trailPercent !== undefined ? {
                set: item.trailPercent  
               } : undefined,
            extendedHours: item.extendedHours !== undefined ? {
                set: item.extendedHours  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            submittedAt: item.submittedAt !== undefined ? {
                set: item.submittedAt  
               } : undefined,
            filledAt: item.filledAt !== undefined ? {
                set: item.filledAt  
               } : undefined,
            filledQty: item.filledQty !== undefined ? {
                set: item.filledQty  
               } : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? {
                set: item.filledAvgPrice  
               } : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? {
                set: item.cancelRequestedAt  
               } : undefined,
            canceledAt: item.canceledAt !== undefined ? {
                set: item.canceledAt  
               } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee  
               } : undefined,
            strikePrice: item.strikePrice !== undefined ? {
                set: item.strikePrice  
               } : undefined,
            expirationDate: item.expirationDate !== undefined ? {
                set: item.expirationDate  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            stopLossId: item.stopLossId !== undefined ? {
                set: item.stopLossId  
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                set: item.takeProfitId  
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
            canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? {
        upsert: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            averageEntryPrice: item.averageEntryPrice !== undefined ? {
                set: item.averageEntryPrice  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? {
                set: item.qtyAvailable  
               } : undefined,
            marketValue: item.marketValue !== undefined ? {
                set: item.marketValue  
               } : undefined,
            costBasis: item.costBasis !== undefined ? {
                set: item.costBasis  
               } : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? {
                set: item.unrealizedPL  
               } : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? {
                set: item.unrealizedPLPC  
               } : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? {
                set: item.unrealisedIntradayPL  
               } : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? {
                set: item.unrealisedIntradayPLPC  
               } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice  
               } : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? {
                set: item.lastTradePrice  
               } : undefined,
            changeToday: item.changeToday !== undefined ? {
                set: item.changeToday  
               } : undefined,
            assetMarginable: item.assetMarginable !== undefined ? {
                set: item.assetMarginable  
               } : undefined,
            closed: item.closed !== undefined ? {
                set: item.closed  
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
      } : undefined,
      alerts: item.alerts ? {
        upsert: item.alerts.map((item: any) => ({
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
          minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
          maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
            canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
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
          minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
          maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
            canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
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
   * @returns The deleted Account or null.
   */
  async delete(props: AccountType): Promise<AccountType> {

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
   * @returns The retrieved Account or null.
   */
  async get(props: AccountType): Promise<AccountType | null> {

      const GET_ACCOUNT = gql`
      query getAccount($where: AccountWhereUniqueInput!) {
        getAccount(where: $where) {
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
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_ACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAccount ?? null;
    } catch (error) {
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
   * @returns An array of Account records or null.
   */
  async getAll(): Promise<AccountType[] | null> {

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
    } catch (error) {
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
   * @returns An array of found Account records or null.
   */
  async findMany(props: AccountType): Promise<AccountType[] | null> {

      const FIND_MANY_ACCOUNT = gql`
      query findManyAccount($where: AccountWhereInput!) {
        accounts(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
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
      if (response && response.data && response.data.Accounts) {
        return response.data.accounts;
      } else {
       return [] as AccountType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Account found') {
        return null;
      } else {
        console.error('Error in getAccount:', error);
        throw error;
      }
    }
  }
};
