

import { AIRecommendation as AIRecommendationType } from './generated/typegraphql-prisma/models/AIRecommendation';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the AIRecommendation model.
 */

export const AIRecommendation = {
  /**
   * Create a new AIRecommendation record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created AIRecommendation or null.
   */
  async create(props: AIRecommendationType, client: ApolloClient<NormalizedCacheObject>): Promise<AIRecommendationType> {
    const CREATE_ONE_AIRECOMMENDATION = gql`
      mutation createOneAIRecommendation($data: AIRecommendationCreateInput!) {
        createOneAIRecommendation(data: $data) {
          id
          userId
          assetId
          action
          confidence
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
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          asset {
            id
          }
        }
      }
   `;

    const variables = {
      data: {
          action: props.action !== undefined ? props.action : undefined,
  confidence: props.confidence !== undefined ? props.confidence : undefined,
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
        currentWorkspace: props.user.currentWorkspace !== undefined ? props.user.currentWorkspace : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
    workspaces: props.user.workspaces ? {
      connectOrCreate: props.user.workspaces.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
        },
      }))
    } : undefined,
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
      },
    }
  } : undefined,
  asset: props.asset ? {
    connectOrCreate: {
      where: {
        id: props.asset.id !== undefined ? props.asset.id : undefined,
        name: props.asset.name !== undefined ? {
            equals: props.asset.name 
           } : undefined,
      },
      create: {
        symbol: props.asset.symbol !== undefined ? props.asset.symbol : undefined,
        name: props.asset.name !== undefined ? props.asset.name : undefined,
        type: props.asset.type !== undefined ? props.asset.type : undefined,
        logoUrl: props.asset.logoUrl !== undefined ? props.asset.logoUrl : undefined,
    holdings: props.asset.holdings ? {
      connectOrCreate: props.asset.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
        },
      }))
    } : undefined,
    trades: props.asset.trades ? {
      connectOrCreate: props.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        },
      }))
    } : undefined,
    orders: props.asset.orders ? {
      connectOrCreate: props.asset.orders.map((item: any) => ({
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
      },
    }
  } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createOneAIRecommendation: AIRecommendationType }>({ mutation: CREATE_ONE_AIRECOMMENDATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAIRecommendation) {
        return response.data.createOneAIRecommendation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAIRecommendation:', error);
      throw error;
    }
  },

  /**
   * Create multiple AIRecommendation records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AIRecommendationType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_AIRECOMMENDATION = gql`
      mutation createManyAIRecommendation($data: [AIRecommendationCreateManyInput!]!) {
        createManyAIRecommendation(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  userId: prop.userId !== undefined ? prop.userId : undefined,
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  action: prop.action !== undefined ? prop.action : undefined,
  confidence: prop.confidence !== undefined ? prop.confidence : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyAIRecommendation: { count: number } }>({ mutation: CREATE_MANY_AIRECOMMENDATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAIRecommendation) {
        return response.data.createManyAIRecommendation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAIRecommendation:', error);
      throw error;
    }
  },

  /**
   * Update a single AIRecommendation record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated AIRecommendation or null.
   */
  async update(props: AIRecommendationType, client: ApolloClient<NormalizedCacheObject>): Promise<AIRecommendationType> {
    const UPDATE_ONE_AIRECOMMENDATION = gql`
      mutation updateOneAIRecommendation($data: AIRecommendationUpdateInput!, $where: AIRecommendationWhereUniqueInput!) {
        updateOneAIRecommendation(data: $data, where: $where) {
          id
          userId
          assetId
          action
          confidence
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
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          asset {
            id
          }
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  action: props.action !== undefined ? {
            set: props.action 
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
        currentWorkspace: props.user.currentWorkspace !== undefined ? {
            set: props.user.currentWorkspace  
           } : undefined,
        plan: props.user.plan !== undefined ? {
            set: props.user.plan  
           } : undefined,
    workspaces: props.user.workspaces ? {
      upsert: props.user.workspaces.map((item: any) => ({
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
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
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
      },
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        currentWorkspace: props.user.currentWorkspace !== undefined ? props.user.currentWorkspace : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
    workspaces: props.user.workspaces ? {
      connectOrCreate: props.user.workspaces.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
        },
      }))
    } : undefined,
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
      },
    }
  } : undefined,
  asset: props.asset ? {
    upsert: {
      where: {
        id: props.asset.id !== undefined ? {
            equals: props.asset.id 
           } : undefined,
        name: props.asset.name !== undefined ? {
            equals: props.asset.name 
           } : undefined,
      },
      update: {
        symbol: props.asset.symbol !== undefined ? {
            set: props.asset.symbol  
           } : undefined,
        name: props.asset.name !== undefined ? {
            set: props.asset.name  
           } : undefined,
        type: props.asset.type !== undefined ? {
            set: props.asset.type  
           } : undefined,
        logoUrl: props.asset.logoUrl !== undefined ? {
            set: props.asset.logoUrl  
           } : undefined,
    holdings: props.asset.holdings ? {
      upsert: props.asset.holdings.map((item: any) => ({
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
    trades: props.asset.trades ? {
      upsert: props.asset.trades.map((item: any) => ({
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
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        },
      }))
    } : undefined,
    orders: props.asset.orders ? {
      upsert: props.asset.orders.map((item: any) => ({
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
      },
      create: {
        symbol: props.asset.symbol !== undefined ? props.asset.symbol : undefined,
        name: props.asset.name !== undefined ? props.asset.name : undefined,
        type: props.asset.type !== undefined ? props.asset.type : undefined,
        logoUrl: props.asset.logoUrl !== undefined ? props.asset.logoUrl : undefined,
    holdings: props.asset.holdings ? {
      connectOrCreate: props.asset.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
        },
      }))
    } : undefined,
    trades: props.asset.trades ? {
      connectOrCreate: props.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        },
      }))
    } : undefined,
    orders: props.asset.orders ? {
      connectOrCreate: props.asset.orders.map((item: any) => ({
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
      },
    }
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ updateOneAIRecommendation: AIRecommendationType }>({ mutation: UPDATE_ONE_AIRECOMMENDATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAIRecommendation) {
        return response.data.updateOneAIRecommendation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAIRecommendation:', error);
      throw error;
    }
  },

  /**
   * Delete a single AIRecommendation record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted AIRecommendation or null.
   */
  async delete(props: AIRecommendationType, client: ApolloClient<NormalizedCacheObject>): Promise<AIRecommendationType> {
    const DELETE_ONE_AIRECOMMENDATION = gql`
      mutation deleteOneAIRecommendation($where: AIRecommendationWhereUniqueInput!) {
        deleteOneAIRecommendation(where: $where) {
          id
          userId
          assetId
          action
          confidence
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
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          asset {
            id
          }
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate<{ deleteOneAIRecommendation: AIRecommendationType }>({ mutation: DELETE_ONE_AIRECOMMENDATION, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAIRecommendation) {
        return response.data.deleteOneAIRecommendation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAIRecommendation:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single AIRecommendation record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved AIRecommendation or null.
   */
  async get(props: AIRecommendationType, client: ApolloClient<NormalizedCacheObject>): Promise<AIRecommendationType> {
    const GET_ONE_AIRECOMMENDATION = gql`
      query getOneAIRecommendation($where: AIRecommendationWhereUniqueInput!) {
        AIRecommendation(where: $where) {
          id
          userId
          assetId
          action
          confidence
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
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          asset {
            id
          }
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ AIRecommendation: AIRecommendationType }>({ query: GET_ONE_AIRECOMMENDATION, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.AIRecommendation ?? null;
    } catch (error) {
      console.error('Error in getOneAIRecommendation:', error);
      throw error;
    }
  },

  /**
   * Retrieve all AIRecommendations records.
   * @param client - Apollo Client instance.
   * @returns An array of AIRecommendation records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<AIRecommendationType[] | null> {
    const GET_ALL_AIRECOMMENDATION = gql`
      query getAllAIRecommendation {
        AIRecommendations {
          id
          userId
          assetId
          action
          confidence
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
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          asset {
            id
          }
      }
      }`;

    try {
      const response = await client.query<{ AIRecommendations: AIRecommendationType[] }>({ query: GET_ALL_AIRECOMMENDATION });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.AIRecommendations ?? null;
    } catch (error) {
      console.error('Error in getAllAIRecommendation:', error);
      throw error;
    }
  },

  /**
   * Find multiple AIRecommendation records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found AIRecommendation records or null.
   */
  async findMany(props: AIRecommendationType, client: ApolloClient<NormalizedCacheObject>): Promise<AIRecommendationType[]> {
    const FIND_MANY_AIRECOMMENDATION = gql`
      query findManyAIRecommendation($where: AIRecommendationWhereInput!) {
        AIRecommendations(where: $where) {
          id
          userId
          assetId
          action
          confidence
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
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          asset {
            id
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
      const response = await client.query<{ AIRecommendations: AIRecommendationType[] }>({ query: FIND_MANY_AIRECOMMENDATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.AIRecommendations) {
        return response.data.AIRecommendations;
      } else {
       return [] as AIRecommendationType[];
      }
    } catch (error) {
      console.error('Error in findManyAIRecommendation:', error);
      throw error;
    }
  }
};
