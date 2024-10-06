

import { Holding as HoldingType } from './generated/typegraphql-prisma/models/Holding';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Holding model.
 */

export const Holding = {
  /**
   * Create a new Holding record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created Holding or null.
   */
  async create(props: HoldingType, client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType> {
    const CREATE_ONE_HOLDING = gql`
      mutation createOneHolding($data: HoldingCreateInput!) {
        createOneHolding(data: $data) {
          id
          tradingAccountId
          assetId
          quantity
          averagePrice
          createdAt
          updatedAt
          tradingAccount {
            id
            name
            slug
            type
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
                }
                asset {
                  id
                }
                steps {
                  id
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
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
              assetId
              newsId
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
            }
          }
        }
      }
   `;

    const variables = {
      data: {
          quantity: props.quantity !== undefined ? props.quantity : undefined,
  averagePrice: props.averagePrice !== undefined ? props.averagePrice : undefined,
  tradingAccount: props.tradingAccount ? {
    connectOrCreate: {
      where: {
        id: props.tradingAccount.id !== undefined ? props.tradingAccount.id : undefined,
        slug: props.tradingAccount.slug !== undefined ? props.tradingAccount.slug : undefined,
        name: props.tradingAccount.name !== undefined ? {
            equals: props.tradingAccount.name 
           } : undefined,
      },
      create: {
        name: props.tradingAccount.name !== undefined ? props.tradingAccount.name : undefined,
        slug: props.tradingAccount.slug !== undefined ? props.tradingAccount.slug : undefined,
        type: props.tradingAccount.type !== undefined ? props.tradingAccount.type : undefined,
    user: props.tradingAccount.user ? {
      connectOrCreate: {
        where: {
          id: props.tradingAccount.user.id !== undefined ? props.tradingAccount.user.id : undefined,
          email: props.tradingAccount.user.email !== undefined ? props.tradingAccount.user.email : undefined,
          name: props.tradingAccount.user.name !== undefined ? {
              equals: props.tradingAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.tradingAccount.user.name !== undefined ? props.tradingAccount.user.name : undefined,
          email: props.tradingAccount.user.email !== undefined ? props.tradingAccount.user.email : undefined,
          emailVerified: props.tradingAccount.user.emailVerified !== undefined ? props.tradingAccount.user.emailVerified : undefined,
          image: props.tradingAccount.user.image !== undefined ? props.tradingAccount.user.image : undefined,
          role: props.tradingAccount.user.role !== undefined ? props.tradingAccount.user.role : undefined,
          bio: props.tradingAccount.user.bio !== undefined ? props.tradingAccount.user.bio : undefined,
          jobTitle: props.tradingAccount.user.jobTitle !== undefined ? props.tradingAccount.user.jobTitle : undefined,
          currentMode: props.tradingAccount.user.currentMode !== undefined ? props.tradingAccount.user.currentMode : undefined,
          plan: props.tradingAccount.user.plan !== undefined ? props.tradingAccount.user.plan : undefined,
        },
      }
    } : undefined,
    trades: props.tradingAccount.trades ? {
      connectOrCreate: props.tradingAccount.trades.map((item: any) => ({
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
    orders: props.tradingAccount.orders ? {
      connectOrCreate: props.tradingAccount.orders.map((item: any) => ({
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
    aiRecommendations: props.tradingAccount.aiRecommendations ? {
      connectOrCreate: props.tradingAccount.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.tradingAccount.riskAllocations ? {
      connectOrCreate: props.tradingAccount.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.tradingAccount.alerts ? {
      connectOrCreate: props.tradingAccount.alerts.map((item: any) => ({
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
    performanceMetrics: props.tradingAccount.performanceMetrics ? {
      connectOrCreate: props.tradingAccount.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    environmentVariables: props.tradingAccount.environmentVariables ? {
      connectOrCreate: props.tradingAccount.environmentVariables.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          key: item.key !== undefined ? {
              equals: item.key 
             } : undefined,
        },
        create: {
          key: item.key !== undefined ? item.key : undefined,
          value: item.value !== undefined ? item.value : undefined,
          description: item.description !== undefined ? item.description : undefined,
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
          status: item.status !== undefined ? item.status : undefined,
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
    aiRecommendations: props.asset.aiRecommendations ? {
      connectOrCreate: props.asset.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    newsMentions: props.asset.newsMentions ? {
      connectOrCreate: props.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
          sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
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
      const response = await client.mutate({ mutation: CREATE_ONE_HOLDING, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneHolding) {
        return response.data.createOneHolding;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneHolding:', error);
      throw error;
    }
  },

  /**
   * Create multiple Holding records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: HoldingType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_HOLDING = gql`
      mutation createManyHolding($data: [HoldingCreateManyInput!]!) {
        createManyHolding(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  tradingAccountId: prop.tradingAccountId !== undefined ? prop.tradingAccountId : undefined,
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  quantity: prop.quantity !== undefined ? prop.quantity : undefined,
  averagePrice: prop.averagePrice !== undefined ? prop.averagePrice : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_HOLDING, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyHolding) {
        return response.data.createManyHolding;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyHolding:', error);
      throw error;
    }
  },

  /**
   * Update a single Holding record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated Holding or null.
   */
  async update(props: HoldingType, client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType> {
    const UPDATE_ONE_HOLDING = gql`
      mutation updateOneHolding($data: HoldingUpdateInput!, $where: HoldingWhereUniqueInput!) {
        updateOneHolding(data: $data, where: $where) {
          id
          tradingAccountId
          assetId
          quantity
          averagePrice
          createdAt
          updatedAt
          tradingAccount {
            id
            name
            slug
            type
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
                }
                asset {
                  id
                }
                steps {
                  id
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
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
              assetId
              newsId
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
            }
          }
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  tradingAccount: props.tradingAccount ? {
    upsert: {
      where: {
        id: props.tradingAccount.id !== undefined ? {
            equals: props.tradingAccount.id 
           } : undefined,
        name: props.tradingAccount.name !== undefined ? {
            equals: props.tradingAccount.name 
           } : undefined,
        slug: props.tradingAccount.slug !== undefined ? {
            equals: props.tradingAccount.slug 
           } : undefined,
      },
      update: {
        name: props.tradingAccount.name !== undefined ? {
            set: props.tradingAccount.name  
           } : undefined,
        slug: props.tradingAccount.slug !== undefined ? {
            set: props.tradingAccount.slug  
           } : undefined,
        type: props.tradingAccount.type !== undefined ? {
            set: props.tradingAccount.type  
           } : undefined,
    user: props.tradingAccount.user ? {
      upsert: {
        where: {
          id: props.tradingAccount.user.id !== undefined ? {
              equals: props.tradingAccount.user.id 
             } : undefined,
          name: props.tradingAccount.user.name !== undefined ? {
              equals: props.tradingAccount.user.name 
             } : undefined,
          email: props.tradingAccount.user.email !== undefined ? {
              equals: props.tradingAccount.user.email 
             } : undefined,
        },
        update: {
          name: props.tradingAccount.user.name !== undefined ? {
              set: props.tradingAccount.user.name  
             } : undefined,
          email: props.tradingAccount.user.email !== undefined ? {
              set: props.tradingAccount.user.email  
             } : undefined,
          emailVerified: props.tradingAccount.user.emailVerified !== undefined ? {
              set: props.tradingAccount.user.emailVerified  
             } : undefined,
          image: props.tradingAccount.user.image !== undefined ? {
              set: props.tradingAccount.user.image  
             } : undefined,
          role: props.tradingAccount.user.role !== undefined ? {
              set: props.tradingAccount.user.role  
             } : undefined,
          bio: props.tradingAccount.user.bio !== undefined ? {
              set: props.tradingAccount.user.bio  
             } : undefined,
          jobTitle: props.tradingAccount.user.jobTitle !== undefined ? {
              set: props.tradingAccount.user.jobTitle  
             } : undefined,
          currentMode: props.tradingAccount.user.currentMode !== undefined ? {
              set: props.tradingAccount.user.currentMode  
             } : undefined,
          plan: props.tradingAccount.user.plan !== undefined ? {
              set: props.tradingAccount.user.plan  
             } : undefined,
        },
        create: {
          name: props.tradingAccount.user.name !== undefined ? props.tradingAccount.user.name : undefined,
          email: props.tradingAccount.user.email !== undefined ? props.tradingAccount.user.email : undefined,
          emailVerified: props.tradingAccount.user.emailVerified !== undefined ? props.tradingAccount.user.emailVerified : undefined,
          image: props.tradingAccount.user.image !== undefined ? props.tradingAccount.user.image : undefined,
          role: props.tradingAccount.user.role !== undefined ? props.tradingAccount.user.role : undefined,
          bio: props.tradingAccount.user.bio !== undefined ? props.tradingAccount.user.bio : undefined,
          jobTitle: props.tradingAccount.user.jobTitle !== undefined ? props.tradingAccount.user.jobTitle : undefined,
          currentMode: props.tradingAccount.user.currentMode !== undefined ? props.tradingAccount.user.currentMode : undefined,
          plan: props.tradingAccount.user.plan !== undefined ? props.tradingAccount.user.plan : undefined,
        },
      }
    } : undefined,
    trades: props.tradingAccount.trades ? {
      upsert: props.tradingAccount.trades.map((item: any) => ({
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
    orders: props.tradingAccount.orders ? {
      upsert: props.tradingAccount.orders.map((item: any) => ({
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
    aiRecommendations: props.tradingAccount.aiRecommendations ? {
      upsert: props.tradingAccount.aiRecommendations.map((item: any) => ({
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
    riskAllocations: props.tradingAccount.riskAllocations ? {
      upsert: props.tradingAccount.riskAllocations.map((item: any) => ({
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
    alerts: props.tradingAccount.alerts ? {
      upsert: props.tradingAccount.alerts.map((item: any) => ({
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
    performanceMetrics: props.tradingAccount.performanceMetrics ? {
      upsert: props.tradingAccount.performanceMetrics.map((item: any) => ({
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
    environmentVariables: props.tradingAccount.environmentVariables ? {
      upsert: props.tradingAccount.environmentVariables.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          key: item.key !== undefined ? {
              equals: item.key 
             } : undefined,
        },
        update: {
          key: item.key !== undefined ? {
              set: item.key  
             } : undefined,
          value: item.value !== undefined ? {
              set: item.value  
             } : undefined,
          description: item.description !== undefined ? {
              set: item.description  
             } : undefined,
        },
        create: {
          key: item.key !== undefined ? item.key : undefined,
          value: item.value !== undefined ? item.value : undefined,
          description: item.description !== undefined ? item.description : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: props.tradingAccount.name !== undefined ? props.tradingAccount.name : undefined,
        slug: props.tradingAccount.slug !== undefined ? props.tradingAccount.slug : undefined,
        type: props.tradingAccount.type !== undefined ? props.tradingAccount.type : undefined,
    user: props.tradingAccount.user ? {
      connectOrCreate: {
        where: {
          id: props.tradingAccount.user.id !== undefined ? props.tradingAccount.user.id : undefined,
          email: props.tradingAccount.user.email !== undefined ? props.tradingAccount.user.email : undefined,
          name: props.tradingAccount.user.name !== undefined ? {
              equals: props.tradingAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.tradingAccount.user.name !== undefined ? props.tradingAccount.user.name : undefined,
          email: props.tradingAccount.user.email !== undefined ? props.tradingAccount.user.email : undefined,
          emailVerified: props.tradingAccount.user.emailVerified !== undefined ? props.tradingAccount.user.emailVerified : undefined,
          image: props.tradingAccount.user.image !== undefined ? props.tradingAccount.user.image : undefined,
          role: props.tradingAccount.user.role !== undefined ? props.tradingAccount.user.role : undefined,
          bio: props.tradingAccount.user.bio !== undefined ? props.tradingAccount.user.bio : undefined,
          jobTitle: props.tradingAccount.user.jobTitle !== undefined ? props.tradingAccount.user.jobTitle : undefined,
          currentMode: props.tradingAccount.user.currentMode !== undefined ? props.tradingAccount.user.currentMode : undefined,
          plan: props.tradingAccount.user.plan !== undefined ? props.tradingAccount.user.plan : undefined,
        },
      }
    } : undefined,
    trades: props.tradingAccount.trades ? {
      connectOrCreate: props.tradingAccount.trades.map((item: any) => ({
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
    orders: props.tradingAccount.orders ? {
      connectOrCreate: props.tradingAccount.orders.map((item: any) => ({
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
    aiRecommendations: props.tradingAccount.aiRecommendations ? {
      connectOrCreate: props.tradingAccount.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.tradingAccount.riskAllocations ? {
      connectOrCreate: props.tradingAccount.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.tradingAccount.alerts ? {
      connectOrCreate: props.tradingAccount.alerts.map((item: any) => ({
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
    performanceMetrics: props.tradingAccount.performanceMetrics ? {
      connectOrCreate: props.tradingAccount.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    environmentVariables: props.tradingAccount.environmentVariables ? {
      connectOrCreate: props.tradingAccount.environmentVariables.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          key: item.key !== undefined ? {
              equals: item.key 
             } : undefined,
        },
        create: {
          key: item.key !== undefined ? item.key : undefined,
          value: item.value !== undefined ? item.value : undefined,
          description: item.description !== undefined ? item.description : undefined,
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
    aiRecommendations: props.asset.aiRecommendations ? {
      upsert: props.asset.aiRecommendations.map((item: any) => ({
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
    newsMentions: props.asset.newsMentions ? {
      upsert: props.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          relevancyScore: item.relevancyScore !== undefined ? {
              set: item.relevancyScore  
             } : undefined,
          sentimentScore: item.sentimentScore !== undefined ? {
              set: item.sentimentScore  
             } : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? {
              set: item.sentimentLabel  
             } : undefined,
        },
        create: {
          relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
          sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        symbol: props.asset.symbol !== undefined ? props.asset.symbol : undefined,
        name: props.asset.name !== undefined ? props.asset.name : undefined,
        type: props.asset.type !== undefined ? props.asset.type : undefined,
        logoUrl: props.asset.logoUrl !== undefined ? props.asset.logoUrl : undefined,
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
          status: item.status !== undefined ? item.status : undefined,
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
    aiRecommendations: props.asset.aiRecommendations ? {
      connectOrCreate: props.asset.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    newsMentions: props.asset.newsMentions ? {
      connectOrCreate: props.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
          sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_ONE_HOLDING, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneHolding) {
        return response.data.updateOneHolding;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneHolding:', error);
      throw error;
    }
  },

  /**
   * Delete a single Holding record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted Holding or null.
   */
  async delete(props: HoldingType, client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType> {
    const DELETE_ONE_HOLDING = gql`
      mutation deleteOneHolding($where: HoldingWhereUniqueInput!) {
        deleteOneHolding(where: $where) {
          id
          tradingAccountId
          assetId
          quantity
          averagePrice
          createdAt
          updatedAt
          tradingAccount {
            id
            name
            slug
            type
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
                }
                asset {
                  id
                }
                steps {
                  id
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
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
              assetId
              newsId
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
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
      const response = await client.mutate({ mutation: DELETE_ONE_HOLDING, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneHolding) {
        return response.data.deleteOneHolding;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneHolding:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Holding record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved Holding or null.
   */
  async get(props: HoldingType, client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType> {
    const GET_HOLDINGS = gql`
      query getHoldings($where: HoldingWhereInput!) {
        holdings(where: $where) {
          id
          tradingAccountId
          assetId
          quantity
          averagePrice
          createdAt
          updatedAt
          tradingAccount {
            id
            name
            slug
            type
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
                }
                asset {
                  id
                }
                steps {
                  id
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
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
              assetId
              newsId
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
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
    try {
      const response = await client.query({ query: GET_HOLDINGS, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.holdings ?? null;
    } catch (error) {
      console.error('Error in getHoldings:', error);
      throw error;
    }
  },

  /**
   * Retrieve all Holdings records.
   * @param client - Apollo Client instance.
   * @returns An array of Holding records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType[] | null> {
    const GET_ALL_HOLDING = gql`
      query getAllHolding {
        Holdings {
          id
          tradingAccountId
          assetId
          quantity
          averagePrice
          createdAt
          updatedAt
          tradingAccount {
            id
            name
            slug
            type
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
                }
                asset {
                  id
                }
                steps {
                  id
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
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
              assetId
              newsId
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
            }
          }
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_HOLDING });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Holdings ?? null;
    } catch (error) {
      console.error('Error in getAllHolding:', error);
      throw error;
    }
  },

  /**
   * Find multiple Holding records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found Holding records or null.
   */
  async findMany(props: HoldingType, client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType[]> {
    const FIND_MANY_HOLDING = gql`
      query findManyHolding($where: HoldingWhereInput!) {
        Holdings(where: $where) {
          id
          tradingAccountId
          assetId
          quantity
          averagePrice
          createdAt
          updatedAt
          tradingAccount {
            id
            name
            slug
            type
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
                }
                asset {
                  id
                }
                steps {
                  id
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
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
              assetId
              newsId
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
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
      const response = await client.query({ query: FIND_MANY_HOLDING, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Holdings) {
        return response.data.Holdings;
      } else {
       return [] as HoldingType[];
      }
    } catch (error) {
      console.error('Error in findManyHolding:', error);
      throw error;
    }
  }
};
