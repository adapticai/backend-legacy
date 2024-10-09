

import { Account as AccountType } from './generated/typegraphql-prisma/models/Account';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Account model.
 */

export const Account = {

  /**
   * Create a new Account record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created Account or null.
   */

  async create(props: AccountType): Promise<AccountType> {

  const client = createApolloClient();

  const CREATE_ONE_ACCOUNT = gql`
      mutation createOneAccount($data: AccountCreateInput!) {
        createOneAccount(data: $data) {
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
            currentMode
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
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
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
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
              type
              APIKey
              APISecret
              configuration
              updatedAt
              user {
                id
              }
              userId
            }
          }
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
  user: props.user ? {
    connectOrCreate: {
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
        currentMode: props.user.currentMode !== undefined ? props.user.currentMode : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
    customer: props.user.customer ? {
      connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
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
      connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? {
      connectOrCreate: props.user.authenticators.map((item: any) => ({
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
    trades: props.user.trades ? {
      connectOrCreate: props.user.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    orders: props.user.orders ? {
      connectOrCreate: props.user.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    aiRecommendations: props.user.aiRecommendations ? {
      connectOrCreate: props.user.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.user.riskAllocations ? {
      connectOrCreate: props.user.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.user.alerts ? {
      connectOrCreate: props.user.alerts.map((item: any) => ({
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
    performanceMetrics: props.user.performanceMetrics ? {
      connectOrCreate: props.user.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    tradingAccount: props.user.tradingAccount ? {
      connectOrCreate: props.user.tradingAccount.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          slug: item.slug !== undefined ? item.slug : undefined,
          name: item.name !== undefined ? {
              equals: item.name 
             } : undefined,
        },
        create: {
          name: item.name !== undefined ? item.name : undefined,
          slug: item.slug !== undefined ? item.slug : undefined,
          type: item.type !== undefined ? item.type : undefined,
        },
      }))
    } : undefined,
    alpacaAccounts: props.user.alpacaAccounts ? {
      connectOrCreate: props.user.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
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
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AccountType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

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
   * @param client - Apollo Client instance.
   * @returns The updated Account or null.
   */
  async update(props: AccountType): Promise<AccountType> {

    const client = createApolloClient();

      const UPDATE_ONE_ACCOUNT = gql`
      mutation updateOneAccount($data: AccountUpdateInput!, $where: AccountWhereUniqueInput!) {
        updateOneAccount(data: $data, where: $where) {
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
            currentMode
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
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
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
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
              type
              APIKey
              APISecret
              configuration
              updatedAt
              user {
                id
              }
              userId
            }
          }
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  refresh_token: props.refresh_token !== undefined ? {
            set: props.refresh_token 
           } : undefined,
  access_token: props.access_token !== undefined ? {
            set: props.access_token 
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
      },
      update: {
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
        currentMode: props.user.currentMode !== undefined ? {
            set: props.user.currentMode  
           } : undefined,
        plan: props.user.plan !== undefined ? {
            set: props.user.plan  
           } : undefined,
    customer: props.user.customer ? {
      upsert: {
        where: {
          id: props.user.customer.id !== undefined ? {
              equals: props.user.customer.id 
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
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
        },
        update: {
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
        },
        update: {
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
    trades: props.user.trades ? {
      upsert: props.user.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          action: item.action !== undefined ? {
              set: item.action  
             } : undefined,
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          total: item.total !== undefined ? {
              set: item.total  
             } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    orders: props.user.orders ? {
      upsert: props.user.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          action: item.action !== undefined ? {
              set: item.action  
             } : undefined,
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    aiRecommendations: props.user.aiRecommendations ? {
      upsert: props.user.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          action: item.action !== undefined ? {
              set: item.action  
             } : undefined,
          confidence: item.confidence !== undefined ? {
              set: item.confidence  
             } : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.user.riskAllocations ? {
      upsert: props.user.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          assetType: item.assetType !== undefined ? {
              set: item.assetType  
             } : undefined,
          allocation: item.allocation !== undefined ? {
              set: item.allocation  
             } : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.user.alerts ? {
      upsert: props.user.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
    performanceMetrics: props.user.performanceMetrics ? {
      upsert: props.user.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          label: item.label !== undefined ? {
              set: item.label  
             } : undefined,
          value: item.value !== undefined ? {
              set: item.value  
             } : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    tradingAccount: props.user.tradingAccount ? {
      upsert: props.user.tradingAccount.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          slug: item.slug !== undefined ? item.slug : undefined,
          name: item.name !== undefined ? {
              equals: item.name 
             } : undefined,
        },
        update: {
          name: item.name !== undefined ? {
              set: item.name  
             } : undefined,
          slug: item.slug !== undefined ? {
              set: item.slug  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
        },
        create: {
          name: item.name !== undefined ? item.name : undefined,
          slug: item.slug !== undefined ? item.slug : undefined,
          type: item.type !== undefined ? item.type : undefined,
        },
      }))
    } : undefined,
    alpacaAccounts: props.user.alpacaAccounts ? {
      upsert: props.user.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
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
        currentMode: props.user.currentMode !== undefined ? props.user.currentMode : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
    customer: props.user.customer ? {
      connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
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
      connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? {
      connectOrCreate: props.user.authenticators.map((item: any) => ({
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
    trades: props.user.trades ? {
      connectOrCreate: props.user.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    orders: props.user.orders ? {
      connectOrCreate: props.user.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    aiRecommendations: props.user.aiRecommendations ? {
      connectOrCreate: props.user.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.user.riskAllocations ? {
      connectOrCreate: props.user.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.user.alerts ? {
      connectOrCreate: props.user.alerts.map((item: any) => ({
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
    performanceMetrics: props.user.performanceMetrics ? {
      connectOrCreate: props.user.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    tradingAccount: props.user.tradingAccount ? {
      connectOrCreate: props.user.tradingAccount.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          slug: item.slug !== undefined ? item.slug : undefined,
          name: item.name !== undefined ? {
              equals: item.name 
             } : undefined,
        },
        create: {
          name: item.name !== undefined ? item.name : undefined,
          slug: item.slug !== undefined ? item.slug : undefined,
          type: item.type !== undefined ? item.type : undefined,
        },
      }))
    } : undefined,
    alpacaAccounts: props.user.alpacaAccounts ? {
      connectOrCreate: props.user.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
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
   * Delete a single Account record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The deleted Account or null.
   */
  async delete(props: AccountType): Promise<AccountType> {

    const client = createApolloClient();

      const DELETE_ONE_ACCOUNT = gql`
      mutation deleteOneAccount($where: AccountWhereUniqueInput!) {
        deleteOneAccount(where: $where) {
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
            currentMode
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
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
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
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
              type
              APIKey
              APISecret
              configuration
              updatedAt
              user {
                id
              }
              userId
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
   * @param client - Apollo Client instance.
   * @returns The retrieved Account or null.
   */
  async get(props: AccountType): Promise<AccountType | null> {

    const client = createApolloClient();

      const GET_ACCOUNT = gql`
      query getAccount($where: AccountWhereUniqueInput!) {
        getAccount(where: $where) {
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
            currentMode
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
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
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
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
              type
              APIKey
              APISecret
              configuration
              updatedAt
              user {
                id
              }
              userId
            }
          }
        }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
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
   * @param client - Apollo Client instance.
   * @returns An array of Account records or null.
   */
  async getAll(): Promise<AccountType[] | null> {

    const client = createApolloClient();

      const GET_ALL_ACCOUNT = gql`
      query getAllAccount {
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
            name
            email
            emailVerified
            image
            createdAt
            updatedAt
            role
            bio
            jobTitle
            currentMode
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
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
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
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
              type
              APIKey
              APISecret
              configuration
              updatedAt
              user {
                id
              }
              userId
            }
          }
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
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found Account records or null.
   */
  async findMany(props: AccountType): Promise<AccountType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_ACCOUNT = gql`
      query findManyAccount($where: AccountWhereInput!) {
        accounts(where: $where) {
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
            currentMode
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
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
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
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
              type
              APIKey
              APISecret
              configuration
              updatedAt
              user {
                id
              }
              userId
            }
          }
      }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
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
