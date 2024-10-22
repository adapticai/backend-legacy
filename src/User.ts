

import { User as UserType } from './generated/typegraphql-prisma/models/User';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the User model.
 */

export const User = {

  /**
   * Create a new User record.
   * @param props - Properties for the new record.
   * @returns The created User or null.
   */

  async create(props: UserType): Promise<UserType> {

  const client = createApolloClient();

  const CREATE_ONE_USER = gql`
      mutation createOneUser($data: UserCreateInput!) {
        createOneUser(data: $data) {
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
            users {
              id
            }
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
            user {
              id
            }
          }
          sessions {
            id
            sessionToken
            userId
            expires
            user {
              id
            }
            createdAt
            updatedAt
          }
          authenticators {
            id
            userId
            credentialID
            publicKey
            counter
            user {
              id
            }
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
            user {
              id
            }
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
              signal
              strategy
              analysis
              confidence
              timestamp
              createdAt
              updatedAt
              status
              alpacaAccount {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                sellPrice
                buyPrice
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
              }
              optionContractType
              actions {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
                }
              }
            }
            orders {
              id
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
              }
              asset {
                id
              }
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
        }
      }
   `;

    const variables = {
      data: {
          name: props.name !== undefined ? props.name : undefined,
  email: props.email !== undefined ? props.email : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentAccount: props.currentAccount !== undefined ? props.currentAccount : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  customer: props.customer ? 
    typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && Object.keys(props.customer)[0] === 'id'
    ? { connect: {
        id: props.customer.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.customer.id !== undefined ? props.customer.id : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
    Array.isArray(props.accounts) && props.accounts.length > 0
    ? props.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
      connect:    props.accounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
  sessions: props.sessions ? 
    Array.isArray(props.sessions) && props.sessions.length > 0
    ? props.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
      connect:    props.sessions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: props.authenticators ? 
    Array.isArray(props.authenticators) && props.authenticators.length > 0
    ? props.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
      connect:    props.authenticators.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
        publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
        counter: item.counter !== undefined ? item.counter : undefined,
      },
    }))
  } : undefined,
  alpacaAccounts: props.alpacaAccounts ? 
    Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0
    ? props.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
      connect:    props.alpacaAccounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
        APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
    trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0
    ? item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
        },
      }))
    } : undefined,
    orders: item.orders ? 
      Array.isArray(item.orders) && item.orders.length > 0
    ? item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          notional: item.notional !== undefined ? item.notional : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
          limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
          stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
          trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
          trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
          extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
          filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
        },
      }))
    } : undefined,
    positions: item.positions ? 
      Array.isArray(item.positions) && item.positions.length > 0
    ? item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0
    ? item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneUser) {
        return response.data.createOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneUser:', error);
      throw error;
    }
  },

  /**
   * Create multiple User records.
   * @param props - Array of User objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: UserType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_USER = gql`
      mutation createManyUser($data: [UserCreateManyInput!]!) {
        createManyUser(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  name: prop.name !== undefined ? prop.name : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  emailVerified: prop.emailVerified !== undefined ? prop.emailVerified : undefined,
  image: prop.image !== undefined ? prop.image : undefined,
  role: prop.role !== undefined ? prop.role : undefined,
  bio: prop.bio !== undefined ? prop.bio : undefined,
  jobTitle: prop.jobTitle !== undefined ? prop.jobTitle : undefined,
  currentAccount: prop.currentAccount !== undefined ? prop.currentAccount : undefined,
  customerId: prop.customerId !== undefined ? prop.customerId : undefined,
  plan: prop.plan !== undefined ? prop.plan : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyUser) {
        return response.data.createManyUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyUser:', error);
      throw error;
    }
  },

  /**
   * Update a single User record.
   * @param props - Properties to update.
   * @returns The updated User or null.
   */
  async update(props: UserType): Promise<UserType> {

    const client = createApolloClient();

      const UPDATE_ONE_USER = gql`
      mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
        updateOneUser(data: $data, where: $where) {
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
            users {
              id
            }
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
            user {
              id
            }
          }
          sessions {
            id
            sessionToken
            userId
            expires
            user {
              id
            }
            createdAt
            updatedAt
          }
          authenticators {
            id
            userId
            credentialID
            publicKey
            counter
            user {
              id
            }
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
            user {
              id
            }
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
              signal
              strategy
              analysis
              confidence
              timestamp
              createdAt
              updatedAt
              status
              alpacaAccount {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                sellPrice
                buyPrice
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
              }
              optionContractType
              actions {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
                }
              }
            }
            orders {
              id
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
              }
              asset {
                id
              }
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        email: props.email !== undefined ? props.email : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  emailVerified: props.emailVerified !== undefined ? {
            set: props.emailVerified 
           } : undefined,
  image: props.image !== undefined ? {
            set: props.image 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  role: props.role !== undefined ? {
            set: props.role 
           } : undefined,
  bio: props.bio !== undefined ? {
            set: props.bio 
           } : undefined,
  jobTitle: props.jobTitle !== undefined ? {
            set: props.jobTitle 
           } : undefined,
  currentAccount: props.currentAccount !== undefined ? {
            set: props.currentAccount 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  customer: props.customer ? {
    upsert: {
      where: {
        id: props.customer.id !== undefined ? {
            equals: props.customer.id 
           } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
      },
      update: {
        authUserId: props.customer.authUserId !== undefined ? {
            set: props.customer.authUserId  
           } : undefined,
        name: props.customer.name !== undefined ? {
            set: props.customer.name  
           } : undefined,
        plan: props.customer.plan !== undefined ? {
            set: props.customer.plan  
           } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            set: props.customer.stripeCustomerId  
           } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            set: props.customer.stripeSubscriptionId  
           } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            set: props.customer.stripePriceId  
           } : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? {
            set: props.customer.stripeCurrentPeriodEnd  
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? {
    upsert: props.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
  sessions: props.sessions ? {
    upsert: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
  authenticators: props.authenticators ? {
    upsert: props.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
  alpacaAccounts: props.alpacaAccounts ? {
    upsert: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
    trades: item.trades ? {
      upsert: item.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
          signal: item.signal !== undefined ? {
              set: item.signal  
             } : undefined,
          strategy: item.strategy !== undefined ? {
              set: item.strategy  
             } : undefined,
          analysis: item.analysis !== undefined ? {
              set: item.analysis  
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
          optionContractType: item.optionContractType !== undefined ? {
              set: item.optionContractType  
             } : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
        },
      }))
    } : undefined,
    orders: item.orders ? {
      upsert: item.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
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
          clientOrderId: item.clientOrderId !== undefined ? {
              set: item.clientOrderId  
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
          filledAvgPrice: item.filledAvgPrice !== undefined ? {
              set: item.filledAvgPrice  
             } : undefined,
          fee: item.fee !== undefined ? {
              set: item.fee  
             } : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          notional: item.notional !== undefined ? item.notional : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
          limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
          stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
          trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
          trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
          extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
          filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
        },
      }))
    } : undefined,
    positions: item.positions ? {
      upsert: item.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    alerts: item.alerts ? {
      upsert: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0
    ? item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
        },
      }))
    } : undefined,
    orders: item.orders ? 
      Array.isArray(item.orders) && item.orders.length > 0
    ? item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          notional: item.notional !== undefined ? item.notional : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
          limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
          stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
          trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
          trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
          extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
          filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
        },
      }))
    } : undefined,
    positions: item.positions ? 
      Array.isArray(item.positions) && item.positions.length > 0
    ? item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0
    ? item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneUser) {
        return response.data.updateOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneUser:', error);
      throw error;
    }
  },

  /**
   * Update multiple User records.
   * @param props - Array of User objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: UserType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_USER = gql`
      mutation updateManyUser($data: [UserCreateManyInput!]!) {
        updateManyUser(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
                id: prop.id !== undefined ? prop.id : undefined,
        email: prop.email !== undefined ? prop.email : undefined,
        name: prop.name !== undefined ? {
            equals: prop.name 
           } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  name: prop.name !== undefined ? {
            set: prop.name 
           } : undefined,
  email: prop.email !== undefined ? {
            set: prop.email 
           } : undefined,
  emailVerified: prop.emailVerified !== undefined ? {
            set: prop.emailVerified 
           } : undefined,
  image: prop.image !== undefined ? {
            set: prop.image 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  role: prop.role !== undefined ? {
            set: prop.role 
           } : undefined,
  bio: prop.bio !== undefined ? {
            set: prop.bio 
           } : undefined,
  jobTitle: prop.jobTitle !== undefined ? {
            set: prop.jobTitle 
           } : undefined,
  currentAccount: prop.currentAccount !== undefined ? {
            set: prop.currentAccount 
           } : undefined,
  plan: prop.plan !== undefined ? {
            set: prop.plan 
           } : undefined,
  customer: prop.customer ? {
    upsert: {
      where: {
        id: prop.customer.id !== undefined ? {
            equals: prop.customer.id 
           } : undefined,
        name: prop.customer.name !== undefined ? {
            equals: prop.customer.name 
           } : undefined,
      },
      update: {
        authUserId: prop.customer.authUserId !== undefined ? {
            set: prop.customer.authUserId  
           } : undefined,
        name: prop.customer.name !== undefined ? {
            set: prop.customer.name  
           } : undefined,
        plan: prop.customer.plan !== undefined ? {
            set: prop.customer.plan  
           } : undefined,
        stripeCustomerId: prop.customer.stripeCustomerId !== undefined ? {
            set: prop.customer.stripeCustomerId  
           } : undefined,
        stripeSubscriptionId: prop.customer.stripeSubscriptionId !== undefined ? {
            set: prop.customer.stripeSubscriptionId  
           } : undefined,
        stripePriceId: prop.customer.stripePriceId !== undefined ? {
            set: prop.customer.stripePriceId  
           } : undefined,
        stripeCurrentPeriodEnd: prop.customer.stripeCurrentPeriodEnd !== undefined ? {
            set: prop.customer.stripeCurrentPeriodEnd  
           } : undefined,
      },
      create: {
        authUserId: prop.customer.authUserId !== undefined ? prop.customer.authUserId : undefined,
        name: prop.customer.name !== undefined ? prop.customer.name : undefined,
        plan: prop.customer.plan !== undefined ? prop.customer.plan : undefined,
        stripeCustomerId: prop.customer.stripeCustomerId !== undefined ? prop.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: prop.customer.stripeSubscriptionId !== undefined ? prop.customer.stripeSubscriptionId : undefined,
        stripePriceId: prop.customer.stripePriceId !== undefined ? prop.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: prop.customer.stripeCurrentPeriodEnd !== undefined ? prop.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: prop.accounts ? {
    upsert: prop.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
  sessions: prop.sessions ? {
    upsert: prop.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
  authenticators: prop.authenticators ? {
    upsert: prop.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
  alpacaAccounts: prop.alpacaAccounts ? {
    upsert: prop.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
    trades: item.trades ? {
      upsert: item.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
          signal: item.signal !== undefined ? {
              set: item.signal  
             } : undefined,
          strategy: item.strategy !== undefined ? {
              set: item.strategy  
             } : undefined,
          analysis: item.analysis !== undefined ? {
              set: item.analysis  
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
          optionContractType: item.optionContractType !== undefined ? {
              set: item.optionContractType  
             } : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
        },
      }))
    } : undefined,
    orders: item.orders ? {
      upsert: item.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
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
          clientOrderId: item.clientOrderId !== undefined ? {
              set: item.clientOrderId  
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
          filledAvgPrice: item.filledAvgPrice !== undefined ? {
              set: item.filledAvgPrice  
             } : undefined,
          fee: item.fee !== undefined ? {
              set: item.fee  
             } : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          notional: item.notional !== undefined ? item.notional : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
          limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
          stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
          trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
          trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
          extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
          filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
        },
      }))
    } : undefined,
    positions: item.positions ? {
      upsert: item.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    alerts: item.alerts ? {
      upsert: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0
    ? item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
          optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
        },
      }))
    } : undefined,
    orders: item.orders ? 
      Array.isArray(item.orders) && item.orders.length > 0
    ? item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          notional: item.notional !== undefined ? item.notional : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
          limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
          stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
          trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
          trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
          extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
          filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
        },
      }))
    } : undefined,
    positions: item.positions ? 
      Array.isArray(item.positions) && item.positions.length > 0
    ? item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0
    ? item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyUser) {
        return response.data.updateManyUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyUser:', error);
      throw error;
    }
  },

  /**
   * Delete a single User record.
   * @param props - Properties to update.
   * @returns The deleted User or null.
   */
  async delete(props: UserType): Promise<UserType> {

    const client = createApolloClient();

      const DELETE_ONE_USER = gql`
      mutation deleteOneUser($where: UserWhereUniqueInput!) {
        deleteOneUser(where: $where) {
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
            users {
              id
            }
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
            user {
              id
            }
          }
          sessions {
            id
            sessionToken
            userId
            expires
            user {
              id
            }
            createdAt
            updatedAt
          }
          authenticators {
            id
            userId
            credentialID
            publicKey
            counter
            user {
              id
            }
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
            user {
              id
            }
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
              signal
              strategy
              analysis
              confidence
              timestamp
              createdAt
              updatedAt
              status
              alpacaAccount {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                sellPrice
                buyPrice
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
              }
              optionContractType
              actions {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
                }
              }
            }
            orders {
              id
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
              }
              asset {
                id
              }
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneUser) {
        return response.data.deleteOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneUser:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single User record by ID.
   * @param props - Properties to update.
   * @returns The retrieved User or null.
   */
  async get(props: UserType): Promise<UserType | null> {

    const client = createApolloClient();

      const GET_USER = gql`
      query getUser($where: UserWhereUniqueInput!) {
        getUser(where: $where) {
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
            users {
              id
            }
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
            user {
              id
            }
          }
          sessions {
            id
            sessionToken
            userId
            expires
            user {
              id
            }
            createdAt
            updatedAt
          }
          authenticators {
            id
            userId
            credentialID
            publicKey
            counter
            user {
              id
            }
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
            user {
              id
            }
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
              signal
              strategy
              analysis
              confidence
              timestamp
              createdAt
              updatedAt
              status
              alpacaAccount {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                sellPrice
                buyPrice
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
              }
              optionContractType
              actions {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
                }
              }
            }
            orders {
              id
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
              }
              asset {
                id
              }
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
        }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        email: props.email !== undefined ? props.email : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getUser ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Users records.
   * @returns An array of User records or null.
   */
  async getAll(): Promise<UserType[] | null> {

    const client = createApolloClient();

      const GET_ALL_USER = gql`
      query getAllUser {
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
            users {
              id
            }
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
            user {
              id
            }
          }
          sessions {
            id
            sessionToken
            userId
            expires
            user {
              id
            }
            createdAt
            updatedAt
          }
          authenticators {
            id
            userId
            credentialID
            publicKey
            counter
            user {
              id
            }
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
            user {
              id
            }
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
              signal
              strategy
              analysis
              confidence
              timestamp
              createdAt
              updatedAt
              status
              alpacaAccount {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                sellPrice
                buyPrice
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
              }
              optionContractType
              actions {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
                }
              }
            }
            orders {
              id
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
              }
              asset {
                id
              }
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_USER });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.users ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple User records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found User records or null.
   */
  async findMany(props: UserType): Promise<UserType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_USER = gql`
      query findManyUser($where: UserWhereInput!) {
        users(where: $where) {
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
            users {
              id
            }
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
            user {
              id
            }
          }
          sessions {
            id
            sessionToken
            userId
            expires
            user {
              id
            }
            createdAt
            updatedAt
          }
          authenticators {
            id
            userId
            credentialID
            publicKey
            counter
            user {
              id
            }
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
            user {
              id
            }
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
              signal
              strategy
              analysis
              confidence
              timestamp
              createdAt
              updatedAt
              status
              alpacaAccount {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                sellPrice
                buyPrice
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
              }
              optionContractType
              actions {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
                }
              }
            }
            orders {
              id
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
              }
              asset {
                id
              }
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
      }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
        email: props.email !== undefined ? {
            equals: props.email 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Users) {
        return response.data.users;
      } else {
       return [] as UserType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  }
};
