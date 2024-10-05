

import { Authenticator as AuthenticatorType } from './generated/typegraphql-prisma/models/Authenticator';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Authenticator model.
 */

export const Authenticator = {
  /**
   * Create a new Authenticator record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created Authenticator or null.
   */
  async create(props: AuthenticatorType, client: ApolloClient<NormalizedCacheObject>): Promise<AuthenticatorType> {
    const CREATE_ONE_AUTHENTICATOR = gql`
      mutation createOneAuthenticator($data: AuthenticatorCreateInput!) {
        createOneAuthenticator(data: $data) {
          id
          userId
          credentialID
          publicKey
          counter
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
            }
            plan
            holdings {
              id
              userId
              portfolioId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
                name
                slug
                description
                createdAt
                updatedAt
                users {
                  id
                }
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
                portfolioAllocations {
                  id
                }
                environmentVariables {
                  id
                }
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                news {
                  id
                }
                PortfolioAllocation {
                  id
                }
              }
            }
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
              }
              asset {
                id
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
            portfolios {
              id
              userId
              portfolioId
              user {
                id
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
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
          }
          createdAt
          updatedAt
        }
      }
   `;

    const variables = {
      data: {
          credentialID: props.credentialID !== undefined ? props.credentialID : undefined,
  publicKey: props.publicKey !== undefined ? props.publicKey : undefined,
  counter: props.counter !== undefined ? props.counter : undefined,
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
    accounts: props.user.accounts ? {
      connectOrCreate: props.user.accounts.map((item: any) => ({
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
    holdings: props.user.holdings ? {
      connectOrCreate: props.user.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
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
    portfolios: props.user.portfolios ? {
      connectOrCreate: props.user.portfolios.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
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
      },
    }
  } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAuthenticator) {
        return response.data.createOneAuthenticator;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAuthenticator:', error);
      throw error;
    }
  },

  /**
   * Create multiple Authenticator records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AuthenticatorType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_AUTHENTICATOR = gql`
      mutation createManyAuthenticator($data: [AuthenticatorCreateManyInput!]!) {
        createManyAuthenticator(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  userId: prop.userId !== undefined ? prop.userId : undefined,
  credentialID: prop.credentialID !== undefined ? prop.credentialID : undefined,
  publicKey: prop.publicKey !== undefined ? prop.publicKey : undefined,
  counter: prop.counter !== undefined ? prop.counter : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAuthenticator) {
        return response.data.createManyAuthenticator;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAuthenticator:', error);
      throw error;
    }
  },

  /**
   * Update a single Authenticator record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated Authenticator or null.
   */
  async update(props: AuthenticatorType, client: ApolloClient<NormalizedCacheObject>): Promise<AuthenticatorType> {
    const UPDATE_ONE_AUTHENTICATOR = gql`
      mutation updateOneAuthenticator($data: AuthenticatorUpdateInput!, $where: AuthenticatorWhereUniqueInput!) {
        updateOneAuthenticator(data: $data, where: $where) {
          id
          userId
          credentialID
          publicKey
          counter
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
            }
            plan
            holdings {
              id
              userId
              portfolioId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
                name
                slug
                description
                createdAt
                updatedAt
                users {
                  id
                }
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
                portfolioAllocations {
                  id
                }
                environmentVariables {
                  id
                }
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                news {
                  id
                }
                PortfolioAllocation {
                  id
                }
              }
            }
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
              }
              asset {
                id
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
            portfolios {
              id
              userId
              portfolioId
              user {
                id
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
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
          }
          createdAt
          updatedAt
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
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
    accounts: props.user.accounts ? {
      upsert: props.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
    holdings: props.user.holdings ? {
      upsert: props.user.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          averagePrice: item.averagePrice !== undefined ? {
              set: item.averagePrice  
             } : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
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
    portfolios: props.user.portfolios ? {
      upsert: props.user.portfolios.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          role: item.role !== undefined ? {
              set: item.role  
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
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
    accounts: props.user.accounts ? {
      connectOrCreate: props.user.accounts.map((item: any) => ({
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
    holdings: props.user.holdings ? {
      connectOrCreate: props.user.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
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
    portfolios: props.user.portfolios ? {
      connectOrCreate: props.user.portfolios.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
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
      },
    }
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAuthenticator) {
        return response.data.updateOneAuthenticator;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAuthenticator:', error);
      throw error;
    }
  },

  /**
   * Delete a single Authenticator record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted Authenticator or null.
   */
  async delete(props: AuthenticatorType, client: ApolloClient<NormalizedCacheObject>): Promise<AuthenticatorType> {
    const DELETE_ONE_AUTHENTICATOR = gql`
      mutation deleteOneAuthenticator($where: AuthenticatorWhereUniqueInput!) {
        deleteOneAuthenticator(where: $where) {
          id
          userId
          credentialID
          publicKey
          counter
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
            }
            plan
            holdings {
              id
              userId
              portfolioId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
                name
                slug
                description
                createdAt
                updatedAt
                users {
                  id
                }
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
                portfolioAllocations {
                  id
                }
                environmentVariables {
                  id
                }
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                news {
                  id
                }
                PortfolioAllocation {
                  id
                }
              }
            }
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
              }
              asset {
                id
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
            portfolios {
              id
              userId
              portfolioId
              user {
                id
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
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
          }
          createdAt
          updatedAt
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_AUTHENTICATOR, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAuthenticator) {
        return response.data.deleteOneAuthenticator;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAuthenticator:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Authenticator record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved Authenticator or null.
   */
  async get(props: AuthenticatorType, client: ApolloClient<NormalizedCacheObject>): Promise<AuthenticatorType> {
    const GET_AUTHENTICATORS = gql`
      query getAuthenticators($where: AuthenticatorWhereInput!) {
        authenticators(where: $where) {
          id
          userId
          credentialID
          publicKey
          counter
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
            }
            plan
            holdings {
              id
              userId
              portfolioId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
                name
                slug
                description
                createdAt
                updatedAt
                users {
                  id
                }
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
                portfolioAllocations {
                  id
                }
                environmentVariables {
                  id
                }
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                news {
                  id
                }
                PortfolioAllocation {
                  id
                }
              }
            }
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
              }
              asset {
                id
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
            portfolios {
              id
              userId
              portfolioId
              user {
                id
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
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
          }
          createdAt
          updatedAt
        }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
      },
};
    try {
      const response = await client.query({ query: GET_AUTHENTICATORS, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.authenticators ?? null;
    } catch (error) {
      console.error('Error in getAuthenticators:', error);
      throw error;
    }
  },

  /**
   * Retrieve all Authenticators records.
   * @param client - Apollo Client instance.
   * @returns An array of Authenticator records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<AuthenticatorType[] | null> {
    const GET_ALL_AUTHENTICATOR = gql`
      query getAllAuthenticator {
        Authenticators {
          id
          userId
          credentialID
          publicKey
          counter
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
            }
            plan
            holdings {
              id
              userId
              portfolioId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
                name
                slug
                description
                createdAt
                updatedAt
                users {
                  id
                }
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
                portfolioAllocations {
                  id
                }
                environmentVariables {
                  id
                }
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                news {
                  id
                }
                PortfolioAllocation {
                  id
                }
              }
            }
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
              }
              asset {
                id
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
            portfolios {
              id
              userId
              portfolioId
              user {
                id
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
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
          }
          createdAt
          updatedAt
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_AUTHENTICATOR });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Authenticators ?? null;
    } catch (error) {
      console.error('Error in getAllAuthenticator:', error);
      throw error;
    }
  },

  /**
   * Find multiple Authenticator records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found Authenticator records or null.
   */
  async findMany(props: AuthenticatorType, client: ApolloClient<NormalizedCacheObject>): Promise<AuthenticatorType[]> {
    const FIND_MANY_AUTHENTICATOR = gql`
      query findManyAuthenticator($where: AuthenticatorWhereInput!) {
        Authenticators(where: $where) {
          id
          userId
          credentialID
          publicKey
          counter
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
            }
            plan
            holdings {
              id
              userId
              portfolioId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
                name
                slug
                description
                createdAt
                updatedAt
                users {
                  id
                }
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
                portfolioAllocations {
                  id
                }
                environmentVariables {
                  id
                }
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                news {
                  id
                }
                PortfolioAllocation {
                  id
                }
              }
            }
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
              }
              asset {
                id
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
            portfolios {
              id
              userId
              portfolioId
              user {
                id
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
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
          }
          createdAt
          updatedAt
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
      const response = await client.query({ query: FIND_MANY_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Authenticators) {
        return response.data.Authenticators;
      } else {
       return [] as AuthenticatorType[];
      }
    } catch (error) {
      console.error('Error in findManyAuthenticator:', error);
      throw error;
    }
  }
};
