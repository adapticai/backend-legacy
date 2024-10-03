

import { Asset as AssetType } from './generated/typegraphql-prisma/models/Asset';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Asset model.
 */

export const Asset = {
  /**
   * Create a new Asset record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created Asset or null.
   */
  async create(props: AssetType, client: ApolloClient<NormalizedCacheObject>): Promise<AssetType> {
    const CREATE_ONE_ASSET = gql`
      mutation createOneAsset($data: AssetCreateInput!) {
        createOneAsset(data: $data) {
          id
          symbol
          name
          type
          logoUrl
          createdAt
          updatedAt
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
              name
              email
              emailVerified
              image
              createdAt
              updatedAt
              role
              bio
              jobTitle
              currentPortfolio
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
            portfolio {
              id
              name
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
                portfolioId
                assetId
                allocation
                createdAt
                updatedAt
                portfolio {
                  id
                }
                asset {
                  id
                }
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
            }
            asset {
              id
            }
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
            assetId
            title
            content
            source
            url
            sentiment
            publishedAt
            createdAt
            updatedAt
            asset {
              id
            }
          }
          PortfolioAllocation {
            id
          }
        }
      }
   `;

    const variables = {
      data: {
          symbol: props.symbol !== undefined ? props.symbol : undefined,
  name: props.name !== undefined ? props.name : undefined,
  type: props.type !== undefined ? props.type : undefined,
  logoUrl: props.logoUrl !== undefined ? props.logoUrl : undefined,
  holdings: props.holdings ? {
    connectOrCreate: props.holdings.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  trades: props.trades ? {
    connectOrCreate: props.trades.map((item: any) => ({
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
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
    steps: item.steps ? {
      connectOrCreate: item.steps.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sequence: item.sequence !== undefined ? item.sequence : undefined,
          action: item.action !== undefined ? item.action : undefined,
          hedgeType: item.hedgeType !== undefined ? item.hedgeType : undefined,
          hedgePrice: item.hedgePrice !== undefined ? item.hedgePrice : undefined,
          buyPrice: item.buyPrice !== undefined ? item.buyPrice : undefined,
          sellPrice: item.sellPrice !== undefined ? item.sellPrice : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          stopLoss: item.stopLoss !== undefined ? item.stopLoss : undefined,
          targetPrice: item.targetPrice !== undefined ? item.targetPrice : undefined,
          note: item.note !== undefined ? item.note : undefined,
          executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
          status: item.status !== undefined ? item.status : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
  orders: props.orders ? {
    connectOrCreate: props.orders.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        action: item.action !== undefined ? item.action : undefined,
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        status: item.status !== undefined ? item.status : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  aiRecommendations: props.aiRecommendations ? {
    connectOrCreate: props.aiRecommendations.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        action: item.action !== undefined ? item.action : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  news: props.news ? {
    connectOrCreate: props.news.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        title: item.title !== undefined ? {
            equals: item.title 
           } : undefined,
      },
      create: {
        title: item.title !== undefined ? item.title : undefined,
        content: item.content !== undefined ? item.content : undefined,
        source: item.source !== undefined ? item.source : undefined,
        url: item.url !== undefined ? item.url : undefined,
        sentiment: item.sentiment !== undefined ? item.sentiment : undefined,
        publishedAt: item.publishedAt !== undefined ? item.publishedAt : undefined,
      },
    }))
  } : undefined,
  PortfolioAllocation: props.PortfolioAllocation ? {
    connectOrCreate: props.PortfolioAllocation.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        allocation: item.allocation !== undefined ? item.allocation : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createOneAsset: AssetType }>({ mutation: CREATE_ONE_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAsset) {
        return response.data.createOneAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAsset:', error);
      throw error;
    }
  },

  /**
   * Create multiple Asset records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AssetType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_ASSET = gql`
      mutation createManyAsset($data: [AssetCreateManyInput!]!) {
        createManyAsset(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  name: prop.name !== undefined ? prop.name : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  logoUrl: prop.logoUrl !== undefined ? prop.logoUrl : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyAsset: { count: number } }>({ mutation: CREATE_MANY_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAsset) {
        return response.data.createManyAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAsset:', error);
      throw error;
    }
  },

  /**
   * Update a single Asset record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated Asset or null.
   */
  async update(props: AssetType, client: ApolloClient<NormalizedCacheObject>): Promise<AssetType> {
    const UPDATE_ONE_ASSET = gql`
      mutation updateOneAsset($data: AssetUpdateInput!, $where: AssetWhereUniqueInput!) {
        updateOneAsset(data: $data, where: $where) {
          id
          symbol
          name
          type
          logoUrl
          createdAt
          updatedAt
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
              name
              email
              emailVerified
              image
              createdAt
              updatedAt
              role
              bio
              jobTitle
              currentPortfolio
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
            portfolio {
              id
              name
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
                portfolioId
                assetId
                allocation
                createdAt
                updatedAt
                portfolio {
                  id
                }
                asset {
                  id
                }
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
            }
            asset {
              id
            }
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
            assetId
            title
            content
            source
            url
            sentiment
            publishedAt
            createdAt
            updatedAt
            asset {
              id
            }
          }
          PortfolioAllocation {
            id
          }
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
      },
      data: {
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  logoUrl: props.logoUrl !== undefined ? {
            set: props.logoUrl 
           } : undefined,
  holdings: props.holdings ? {
    upsert: props.holdings.map((item: any) => ({
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
    user: item.user ? {
      upsert: {
        where: {
          id: item.user.id !== undefined ? {
              equals: item.user.id 
             } : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
          email: item.user.email !== undefined ? {
              equals: item.user.email 
             } : undefined,
        },
        update: {
          name: item.user.name !== undefined ? {
              set: item.user.name  
             } : undefined,
          email: item.user.email !== undefined ? {
              set: item.user.email  
             } : undefined,
          emailVerified: item.user.emailVerified !== undefined ? {
              set: item.user.emailVerified  
             } : undefined,
          image: item.user.image !== undefined ? {
              set: item.user.image  
             } : undefined,
          role: item.user.role !== undefined ? {
              set: item.user.role  
             } : undefined,
          bio: item.user.bio !== undefined ? {
              set: item.user.bio  
             } : undefined,
          jobTitle: item.user.jobTitle !== undefined ? {
              set: item.user.jobTitle  
             } : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? {
              set: item.user.currentPortfolio  
             } : undefined,
          plan: item.user.plan !== undefined ? {
              set: item.user.plan  
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      upsert: {
        where: {
          id: item.portfolio.id !== undefined ? {
              equals: item.portfolio.id 
             } : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        update: {
          name: item.portfolio.name !== undefined ? {
              set: item.portfolio.name  
             } : undefined,
          description: item.portfolio.description !== undefined ? {
              set: item.portfolio.description  
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
      create: {
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  trades: props.trades ? {
    upsert: props.trades.map((item: any) => ({
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
    user: item.user ? {
      upsert: {
        where: {
          id: item.user.id !== undefined ? {
              equals: item.user.id 
             } : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
          email: item.user.email !== undefined ? {
              equals: item.user.email 
             } : undefined,
        },
        update: {
          name: item.user.name !== undefined ? {
              set: item.user.name  
             } : undefined,
          email: item.user.email !== undefined ? {
              set: item.user.email  
             } : undefined,
          emailVerified: item.user.emailVerified !== undefined ? {
              set: item.user.emailVerified  
             } : undefined,
          image: item.user.image !== undefined ? {
              set: item.user.image  
             } : undefined,
          role: item.user.role !== undefined ? {
              set: item.user.role  
             } : undefined,
          bio: item.user.bio !== undefined ? {
              set: item.user.bio  
             } : undefined,
          jobTitle: item.user.jobTitle !== undefined ? {
              set: item.user.jobTitle  
             } : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? {
              set: item.user.currentPortfolio  
             } : undefined,
          plan: item.user.plan !== undefined ? {
              set: item.user.plan  
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      upsert: {
        where: {
          id: item.portfolio.id !== undefined ? {
              equals: item.portfolio.id 
             } : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        update: {
          name: item.portfolio.name !== undefined ? {
              set: item.portfolio.name  
             } : undefined,
          description: item.portfolio.description !== undefined ? {
              set: item.portfolio.description  
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
    steps: item.steps ? {
      upsert: item.steps.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          sequence: item.sequence !== undefined ? {
              set: item.sequence  
             } : undefined,
          action: item.action !== undefined ? {
              set: item.action  
             } : undefined,
          hedgeType: item.hedgeType !== undefined ? {
              set: item.hedgeType  
             } : undefined,
          hedgePrice: item.hedgePrice !== undefined ? {
              set: item.hedgePrice  
             } : undefined,
          buyPrice: item.buyPrice !== undefined ? {
              set: item.buyPrice  
             } : undefined,
          sellPrice: item.sellPrice !== undefined ? {
              set: item.sellPrice  
             } : undefined,
          qty: item.qty !== undefined ? {
              set: item.qty  
             } : undefined,
          side: item.side !== undefined ? {
              set: item.side  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          stopLoss: item.stopLoss !== undefined ? {
              set: item.stopLoss  
             } : undefined,
          targetPrice: item.targetPrice !== undefined ? {
              set: item.targetPrice  
             } : undefined,
          note: item.note !== undefined ? {
              set: item.note  
             } : undefined,
          executionTime: item.executionTime !== undefined ? {
              set: item.executionTime  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
          fee: item.fee !== undefined ? {
              set: item.fee  
             } : undefined,
        },
        create: {
          sequence: item.sequence !== undefined ? item.sequence : undefined,
          action: item.action !== undefined ? item.action : undefined,
          hedgeType: item.hedgeType !== undefined ? item.hedgeType : undefined,
          hedgePrice: item.hedgePrice !== undefined ? item.hedgePrice : undefined,
          buyPrice: item.buyPrice !== undefined ? item.buyPrice : undefined,
          sellPrice: item.sellPrice !== undefined ? item.sellPrice : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          stopLoss: item.stopLoss !== undefined ? item.stopLoss : undefined,
          targetPrice: item.targetPrice !== undefined ? item.targetPrice : undefined,
          note: item.note !== undefined ? item.note : undefined,
          executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
          status: item.status !== undefined ? item.status : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        action: item.action !== undefined ? item.action : undefined,
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
    steps: item.steps ? {
      connectOrCreate: item.steps.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sequence: item.sequence !== undefined ? item.sequence : undefined,
          action: item.action !== undefined ? item.action : undefined,
          hedgeType: item.hedgeType !== undefined ? item.hedgeType : undefined,
          hedgePrice: item.hedgePrice !== undefined ? item.hedgePrice : undefined,
          buyPrice: item.buyPrice !== undefined ? item.buyPrice : undefined,
          sellPrice: item.sellPrice !== undefined ? item.sellPrice : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          stopLoss: item.stopLoss !== undefined ? item.stopLoss : undefined,
          targetPrice: item.targetPrice !== undefined ? item.targetPrice : undefined,
          note: item.note !== undefined ? item.note : undefined,
          executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
          status: item.status !== undefined ? item.status : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
  orders: props.orders ? {
    upsert: props.orders.map((item: any) => ({
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
    user: item.user ? {
      upsert: {
        where: {
          id: item.user.id !== undefined ? {
              equals: item.user.id 
             } : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
          email: item.user.email !== undefined ? {
              equals: item.user.email 
             } : undefined,
        },
        update: {
          name: item.user.name !== undefined ? {
              set: item.user.name  
             } : undefined,
          email: item.user.email !== undefined ? {
              set: item.user.email  
             } : undefined,
          emailVerified: item.user.emailVerified !== undefined ? {
              set: item.user.emailVerified  
             } : undefined,
          image: item.user.image !== undefined ? {
              set: item.user.image  
             } : undefined,
          role: item.user.role !== undefined ? {
              set: item.user.role  
             } : undefined,
          bio: item.user.bio !== undefined ? {
              set: item.user.bio  
             } : undefined,
          jobTitle: item.user.jobTitle !== undefined ? {
              set: item.user.jobTitle  
             } : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? {
              set: item.user.currentPortfolio  
             } : undefined,
          plan: item.user.plan !== undefined ? {
              set: item.user.plan  
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      upsert: {
        where: {
          id: item.portfolio.id !== undefined ? {
              equals: item.portfolio.id 
             } : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        update: {
          name: item.portfolio.name !== undefined ? {
              set: item.portfolio.name  
             } : undefined,
          description: item.portfolio.description !== undefined ? {
              set: item.portfolio.description  
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        action: item.action !== undefined ? item.action : undefined,
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        status: item.status !== undefined ? item.status : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  aiRecommendations: props.aiRecommendations ? {
    upsert: props.aiRecommendations.map((item: any) => ({
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
    user: item.user ? {
      upsert: {
        where: {
          id: item.user.id !== undefined ? {
              equals: item.user.id 
             } : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
          email: item.user.email !== undefined ? {
              equals: item.user.email 
             } : undefined,
        },
        update: {
          name: item.user.name !== undefined ? {
              set: item.user.name  
             } : undefined,
          email: item.user.email !== undefined ? {
              set: item.user.email  
             } : undefined,
          emailVerified: item.user.emailVerified !== undefined ? {
              set: item.user.emailVerified  
             } : undefined,
          image: item.user.image !== undefined ? {
              set: item.user.image  
             } : undefined,
          role: item.user.role !== undefined ? {
              set: item.user.role  
             } : undefined,
          bio: item.user.bio !== undefined ? {
              set: item.user.bio  
             } : undefined,
          jobTitle: item.user.jobTitle !== undefined ? {
              set: item.user.jobTitle  
             } : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? {
              set: item.user.currentPortfolio  
             } : undefined,
          plan: item.user.plan !== undefined ? {
              set: item.user.plan  
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      upsert: {
        where: {
          id: item.portfolio.id !== undefined ? {
              equals: item.portfolio.id 
             } : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        update: {
          name: item.portfolio.name !== undefined ? {
              set: item.portfolio.name  
             } : undefined,
          description: item.portfolio.description !== undefined ? {
              set: item.portfolio.description  
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
      create: {
        action: item.action !== undefined ? item.action : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentPortfolio: item.user.currentPortfolio !== undefined ? item.user.currentPortfolio : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  news: props.news ? {
    upsert: props.news.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        title: item.title !== undefined ? {
            equals: item.title 
           } : undefined,
      },
      update: {
        title: item.title !== undefined ? {
            set: item.title  
           } : undefined,
        content: item.content !== undefined ? {
            set: item.content  
           } : undefined,
        source: item.source !== undefined ? {
            set: item.source  
           } : undefined,
        url: item.url !== undefined ? {
            set: item.url  
           } : undefined,
        sentiment: item.sentiment !== undefined ? {
            set: item.sentiment  
           } : undefined,
        publishedAt: item.publishedAt !== undefined ? {
            set: item.publishedAt  
           } : undefined,
      },
      create: {
        title: item.title !== undefined ? item.title : undefined,
        content: item.content !== undefined ? item.content : undefined,
        source: item.source !== undefined ? item.source : undefined,
        url: item.url !== undefined ? item.url : undefined,
        sentiment: item.sentiment !== undefined ? item.sentiment : undefined,
        publishedAt: item.publishedAt !== undefined ? item.publishedAt : undefined,
      },
    }))
  } : undefined,
  PortfolioAllocation: props.PortfolioAllocation ? {
    upsert: props.PortfolioAllocation.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        allocation: item.allocation !== undefined ? {
            set: item.allocation  
           } : undefined,
    portfolio: item.portfolio ? {
      upsert: {
        where: {
          id: item.portfolio.id !== undefined ? {
              equals: item.portfolio.id 
             } : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        update: {
          name: item.portfolio.name !== undefined ? {
              set: item.portfolio.name  
             } : undefined,
          description: item.portfolio.description !== undefined ? {
              set: item.portfolio.description  
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
      create: {
        allocation: item.allocation !== undefined ? item.allocation : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          description: item.portfolio.description !== undefined ? item.portfolio.description : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ updateOneAsset: AssetType }>({ mutation: UPDATE_ONE_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAsset) {
        return response.data.updateOneAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAsset:', error);
      throw error;
    }
  },

  /**
   * Delete a single Asset record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted Asset or null.
   */
  async delete(props: AssetType, client: ApolloClient<NormalizedCacheObject>): Promise<AssetType> {
    const DELETE_ONE_ASSET = gql`
      mutation deleteOneAsset($where: AssetWhereUniqueInput!) {
        deleteOneAsset(where: $where) {
          id
          symbol
          name
          type
          logoUrl
          createdAt
          updatedAt
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
              name
              email
              emailVerified
              image
              createdAt
              updatedAt
              role
              bio
              jobTitle
              currentPortfolio
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
            portfolio {
              id
              name
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
                portfolioId
                assetId
                allocation
                createdAt
                updatedAt
                portfolio {
                  id
                }
                asset {
                  id
                }
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
            }
            asset {
              id
            }
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
            assetId
            title
            content
            source
            url
            sentiment
            publishedAt
            createdAt
            updatedAt
            asset {
              id
            }
          }
          PortfolioAllocation {
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
      const response = await client.mutate<{ deleteOneAsset: AssetType }>({ mutation: DELETE_ONE_ASSET, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAsset) {
        return response.data.deleteOneAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAsset:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Asset record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved Asset or null.
   */
  async get(props: AssetType, client: ApolloClient<NormalizedCacheObject>): Promise<AssetType> {
    const GET_ONE_ASSET = gql`
      query getOneAsset($where: AssetWhereUniqueInput!) {
        Asset(where: $where) {
          id
          symbol
          name
          type
          logoUrl
          createdAt
          updatedAt
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
              name
              email
              emailVerified
              image
              createdAt
              updatedAt
              role
              bio
              jobTitle
              currentPortfolio
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
            portfolio {
              id
              name
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
                portfolioId
                assetId
                allocation
                createdAt
                updatedAt
                portfolio {
                  id
                }
                asset {
                  id
                }
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
            }
            asset {
              id
            }
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
            assetId
            title
            content
            source
            url
            sentiment
            publishedAt
            createdAt
            updatedAt
            asset {
              id
            }
          }
          PortfolioAllocation {
            id
          }
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ Asset: AssetType }>({ query: GET_ONE_ASSET, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Asset ?? null;
    } catch (error) {
      console.error('Error in getOneAsset:', error);
      throw error;
    }
  },

  /**
   * Retrieve all Assets records.
   * @param client - Apollo Client instance.
   * @returns An array of Asset records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<AssetType[] | null> {
    const GET_ALL_ASSET = gql`
      query getAllAsset {
        Assets {
          id
          symbol
          name
          type
          logoUrl
          createdAt
          updatedAt
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
              name
              email
              emailVerified
              image
              createdAt
              updatedAt
              role
              bio
              jobTitle
              currentPortfolio
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
            portfolio {
              id
              name
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
                portfolioId
                assetId
                allocation
                createdAt
                updatedAt
                portfolio {
                  id
                }
                asset {
                  id
                }
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
            }
            asset {
              id
            }
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
            assetId
            title
            content
            source
            url
            sentiment
            publishedAt
            createdAt
            updatedAt
            asset {
              id
            }
          }
          PortfolioAllocation {
            id
          }
      }
      }`;

    try {
      const response = await client.query<{ Assets: AssetType[] }>({ query: GET_ALL_ASSET });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Assets ?? null;
    } catch (error) {
      console.error('Error in getAllAsset:', error);
      throw error;
    }
  },

  /**
   * Find multiple Asset records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found Asset records or null.
   */
  async findMany(props: AssetType, client: ApolloClient<NormalizedCacheObject>): Promise<AssetType[]> {
    const FIND_MANY_ASSET = gql`
      query findManyAsset($where: AssetWhereInput!) {
        Assets(where: $where) {
          id
          symbol
          name
          type
          logoUrl
          createdAt
          updatedAt
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
              name
              email
              emailVerified
              image
              createdAt
              updatedAt
              role
              bio
              jobTitle
              currentPortfolio
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
            portfolio {
              id
              name
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
                portfolioId
                assetId
                allocation
                createdAt
                updatedAt
                portfolio {
                  id
                }
                asset {
                  id
                }
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
            }
            asset {
              id
            }
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
            assetId
            title
            content
            source
            url
            sentiment
            publishedAt
            createdAt
            updatedAt
            asset {
              id
            }
          }
          PortfolioAllocation {
            id
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
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query<{ Assets: AssetType[] }>({ query: FIND_MANY_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Assets) {
        return response.data.Assets;
      } else {
       return [] as AssetType[];
      }
    } catch (error) {
      console.error('Error in findManyAsset:', error);
      throw error;
    }
  }
};
