

import { RiskAllocation as RiskAllocationType } from './generated/typegraphql-prisma/models/RiskAllocation';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the RiskAllocation model.
 */

export const RiskAllocation = {
  /**
   * Create a new RiskAllocation record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created RiskAllocation or null.
   */
  async create(props: RiskAllocationType, client: ApolloClient<NormalizedCacheObject>): Promise<RiskAllocationType> {
    const CREATE_ONE_RISKALLOCATION = gql`
      mutation createOneRiskAllocation($data: RiskAllocationCreateInput!) {
        createOneRiskAllocation(data: $data) {
          id
          userId
          assetType
          allocation
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
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
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
        }
      }
   `;

    const variables = {
      data: {
          assetType: props.assetType !== undefined ? props.assetType : undefined,
  allocation: props.allocation !== undefined ? props.allocation : undefined,
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

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createOneRiskAllocation: RiskAllocationType }>({ mutation: CREATE_ONE_RISKALLOCATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneRiskAllocation) {
        return response.data.createOneRiskAllocation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneRiskAllocation:', error);
      throw error;
    }
  },

  /**
   * Create multiple RiskAllocation records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: RiskAllocationType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_RISKALLOCATION = gql`
      mutation createManyRiskAllocation($data: [RiskAllocationCreateManyInput!]!) {
        createManyRiskAllocation(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  userId: prop.userId !== undefined ? prop.userId : undefined,
  assetType: prop.assetType !== undefined ? prop.assetType : undefined,
  allocation: prop.allocation !== undefined ? prop.allocation : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyRiskAllocation: { count: number } }>({ mutation: CREATE_MANY_RISKALLOCATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyRiskAllocation) {
        return response.data.createManyRiskAllocation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyRiskAllocation:', error);
      throw error;
    }
  },

  /**
   * Update a single RiskAllocation record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated RiskAllocation or null.
   */
  async update(props: RiskAllocationType, client: ApolloClient<NormalizedCacheObject>): Promise<RiskAllocationType> {
    const UPDATE_ONE_RISKALLOCATION = gql`
      mutation updateOneRiskAllocation($data: RiskAllocationUpdateInput!, $where: RiskAllocationWhereUniqueInput!) {
        updateOneRiskAllocation(data: $data, where: $where) {
          id
          userId
          assetType
          allocation
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
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
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
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  assetType: props.assetType !== undefined ? {
            set: props.assetType 
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
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ updateOneRiskAllocation: RiskAllocationType }>({ mutation: UPDATE_ONE_RISKALLOCATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneRiskAllocation) {
        return response.data.updateOneRiskAllocation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneRiskAllocation:', error);
      throw error;
    }
  },

  /**
   * Delete a single RiskAllocation record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted RiskAllocation or null.
   */
  async delete(props: RiskAllocationType, client: ApolloClient<NormalizedCacheObject>): Promise<RiskAllocationType> {
    const DELETE_ONE_RISKALLOCATION = gql`
      mutation deleteOneRiskAllocation($where: RiskAllocationWhereUniqueInput!) {
        deleteOneRiskAllocation(where: $where) {
          id
          userId
          assetType
          allocation
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
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
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
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate<{ deleteOneRiskAllocation: RiskAllocationType }>({ mutation: DELETE_ONE_RISKALLOCATION, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneRiskAllocation) {
        return response.data.deleteOneRiskAllocation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneRiskAllocation:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single RiskAllocation record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved RiskAllocation or null.
   */
  async get(props: RiskAllocationType, client: ApolloClient<NormalizedCacheObject>): Promise<RiskAllocationType> {
    const GET_ONE_RISKALLOCATION = gql`
      query getOneRiskAllocation($where: RiskAllocationWhereUniqueInput!) {
        RiskAllocation(where: $where) {
          id
          userId
          assetType
          allocation
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
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
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
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ RiskAllocation: RiskAllocationType }>({ query: GET_ONE_RISKALLOCATION, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.RiskAllocation ?? null;
    } catch (error) {
      console.error('Error in getOneRiskAllocation:', error);
      throw error;
    }
  },

  /**
   * Retrieve all RiskAllocations records.
   * @param client - Apollo Client instance.
   * @returns An array of RiskAllocation records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<RiskAllocationType[] | null> {
    const GET_ALL_RISKALLOCATION = gql`
      query getAllRiskAllocation {
        RiskAllocations {
          id
          userId
          assetType
          allocation
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
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
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
      }
      }`;

    try {
      const response = await client.query<{ RiskAllocations: RiskAllocationType[] }>({ query: GET_ALL_RISKALLOCATION });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.RiskAllocations ?? null;
    } catch (error) {
      console.error('Error in getAllRiskAllocation:', error);
      throw error;
    }
  },

  /**
   * Find multiple RiskAllocation records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found RiskAllocation records or null.
   */
  async findMany(props: RiskAllocationType, client: ApolloClient<NormalizedCacheObject>): Promise<RiskAllocationType[]> {
    const FIND_MANY_RISKALLOCATION = gql`
      query findManyRiskAllocation($where: RiskAllocationWhereInput!) {
        RiskAllocations(where: $where) {
          id
          userId
          assetType
          allocation
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
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
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
      const response = await client.query<{ RiskAllocations: RiskAllocationType[] }>({ query: FIND_MANY_RISKALLOCATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.RiskAllocations) {
        return response.data.RiskAllocations;
      } else {
       return [] as RiskAllocationType[];
      }
    } catch (error) {
      console.error('Error in findManyRiskAllocation:', error);
      throw error;
    }
  }
};
