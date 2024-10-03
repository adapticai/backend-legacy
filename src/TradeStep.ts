

import { TradeStep as TradeStepType } from './generated/typegraphql-prisma/models/TradeStep';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the TradeStep model.
 */

export const TradeStep = {
  /**
   * Create a new TradeStep record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created TradeStep or null.
   */
  async create(props: TradeStepType, client: ApolloClient<NormalizedCacheObject>): Promise<TradeStepType> {
    const CREATE_ONE_TRADESTEP = gql`
      mutation createOneTradeStep($data: TradeStepCreateInput!) {
        createOneTradeStep(data: $data) {
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
            steps {
              id
            }
          }
        }
      }
   `;

    const variables = {
      data: {
          sequence: props.sequence !== undefined ? props.sequence : undefined,
  action: props.action !== undefined ? props.action : undefined,
  hedgeType: props.hedgeType !== undefined ? props.hedgeType : undefined,
  hedgePrice: props.hedgePrice !== undefined ? props.hedgePrice : undefined,
  buyPrice: props.buyPrice !== undefined ? props.buyPrice : undefined,
  sellPrice: props.sellPrice !== undefined ? props.sellPrice : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  side: props.side !== undefined ? props.side : undefined,
  type: props.type !== undefined ? props.type : undefined,
  stopLoss: props.stopLoss !== undefined ? props.stopLoss : undefined,
  targetPrice: props.targetPrice !== undefined ? props.targetPrice : undefined,
  note: props.note !== undefined ? props.note : undefined,
  executionTime: props.executionTime !== undefined ? props.executionTime : undefined,
  status: props.status !== undefined ? props.status : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  trade: props.trade ? {
    connectOrCreate: {
      where: {
        id: props.trade.id !== undefined ? props.trade.id : undefined,
      },
      create: {
        action: props.trade.action !== undefined ? props.trade.action : undefined,
        quantity: props.trade.quantity !== undefined ? props.trade.quantity : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
    user: props.trade.user ? {
      connectOrCreate: {
        where: {
          id: props.trade.user.id !== undefined ? props.trade.user.id : undefined,
          email: props.trade.user.email !== undefined ? props.trade.user.email : undefined,
          name: props.trade.user.name !== undefined ? {
              equals: props.trade.user.name 
             } : undefined,
        },
        create: {
          name: props.trade.user.name !== undefined ? props.trade.user.name : undefined,
          email: props.trade.user.email !== undefined ? props.trade.user.email : undefined,
          emailVerified: props.trade.user.emailVerified !== undefined ? props.trade.user.emailVerified : undefined,
          image: props.trade.user.image !== undefined ? props.trade.user.image : undefined,
          role: props.trade.user.role !== undefined ? props.trade.user.role : undefined,
          bio: props.trade.user.bio !== undefined ? props.trade.user.bio : undefined,
          jobTitle: props.trade.user.jobTitle !== undefined ? props.trade.user.jobTitle : undefined,
          currentPortfolio: props.trade.user.currentPortfolio !== undefined ? props.trade.user.currentPortfolio : undefined,
          plan: props.trade.user.plan !== undefined ? props.trade.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: props.trade.portfolio ? {
      connectOrCreate: {
        where: {
          id: props.trade.portfolio.id !== undefined ? props.trade.portfolio.id : undefined,
          name: props.trade.portfolio.name !== undefined ? {
              equals: props.trade.portfolio.name 
             } : undefined,
        },
        create: {
          name: props.trade.portfolio.name !== undefined ? props.trade.portfolio.name : undefined,
          description: props.trade.portfolio.description !== undefined ? props.trade.portfolio.description : undefined,
        },
      }
    } : undefined,
    asset: props.trade.asset ? {
      connectOrCreate: {
        where: {
          id: props.trade.asset.id !== undefined ? props.trade.asset.id : undefined,
          name: props.trade.asset.name !== undefined ? {
              equals: props.trade.asset.name 
             } : undefined,
        },
        create: {
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
          type: props.trade.asset.type !== undefined ? props.trade.asset.type : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? props.trade.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createOneTradeStep: TradeStepType }>({ mutation: CREATE_ONE_TRADESTEP, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneTradeStep) {
        return response.data.createOneTradeStep;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneTradeStep:', error);
      throw error;
    }
  },

  /**
   * Create multiple TradeStep records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: TradeStepType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_TRADESTEP = gql`
      mutation createManyTradeStep($data: [TradeStepCreateManyInput!]!) {
        createManyTradeStep(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  tradeId: prop.tradeId !== undefined ? prop.tradeId : undefined,
  sequence: prop.sequence !== undefined ? prop.sequence : undefined,
  action: prop.action !== undefined ? prop.action : undefined,
  hedgeType: prop.hedgeType !== undefined ? prop.hedgeType : undefined,
  hedgePrice: prop.hedgePrice !== undefined ? prop.hedgePrice : undefined,
  buyPrice: prop.buyPrice !== undefined ? prop.buyPrice : undefined,
  sellPrice: prop.sellPrice !== undefined ? prop.sellPrice : undefined,
  qty: prop.qty !== undefined ? prop.qty : undefined,
  side: prop.side !== undefined ? prop.side : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  stopLoss: prop.stopLoss !== undefined ? prop.stopLoss : undefined,
  targetPrice: prop.targetPrice !== undefined ? prop.targetPrice : undefined,
  note: prop.note !== undefined ? prop.note : undefined,
  executionTime: prop.executionTime !== undefined ? prop.executionTime : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  fee: prop.fee !== undefined ? prop.fee : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyTradeStep: { count: number } }>({ mutation: CREATE_MANY_TRADESTEP, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyTradeStep) {
        return response.data.createManyTradeStep;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyTradeStep:', error);
      throw error;
    }
  },

  /**
   * Update a single TradeStep record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated TradeStep or null.
   */
  async update(props: TradeStepType, client: ApolloClient<NormalizedCacheObject>): Promise<TradeStepType> {
    const UPDATE_ONE_TRADESTEP = gql`
      mutation updateOneTradeStep($data: TradeStepUpdateInput!, $where: TradeStepWhereUniqueInput!) {
        updateOneTradeStep(data: $data, where: $where) {
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
            steps {
              id
            }
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
  hedgeType: props.hedgeType !== undefined ? {
            set: props.hedgeType 
           } : undefined,
  side: props.side !== undefined ? {
            set: props.side 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  trade: props.trade ? {
    upsert: {
      where: {
        id: props.trade.id !== undefined ? {
            equals: props.trade.id 
           } : undefined,
      },
      update: {
        action: props.trade.action !== undefined ? {
            set: props.trade.action  
           } : undefined,
        quantity: props.trade.quantity !== undefined ? {
            set: props.trade.quantity  
           } : undefined,
        price: props.trade.price !== undefined ? {
            set: props.trade.price  
           } : undefined,
        total: props.trade.total !== undefined ? {
            set: props.trade.total  
           } : undefined,
        timestamp: props.trade.timestamp !== undefined ? {
            set: props.trade.timestamp  
           } : undefined,
        status: props.trade.status !== undefined ? {
            set: props.trade.status  
           } : undefined,
    user: props.trade.user ? {
      upsert: {
        where: {
          id: props.trade.user.id !== undefined ? {
              equals: props.trade.user.id 
             } : undefined,
          name: props.trade.user.name !== undefined ? {
              equals: props.trade.user.name 
             } : undefined,
          email: props.trade.user.email !== undefined ? {
              equals: props.trade.user.email 
             } : undefined,
        },
        update: {
          name: props.trade.user.name !== undefined ? {
              set: props.trade.user.name  
             } : undefined,
          email: props.trade.user.email !== undefined ? {
              set: props.trade.user.email  
             } : undefined,
          emailVerified: props.trade.user.emailVerified !== undefined ? {
              set: props.trade.user.emailVerified  
             } : undefined,
          image: props.trade.user.image !== undefined ? {
              set: props.trade.user.image  
             } : undefined,
          role: props.trade.user.role !== undefined ? {
              set: props.trade.user.role  
             } : undefined,
          bio: props.trade.user.bio !== undefined ? {
              set: props.trade.user.bio  
             } : undefined,
          jobTitle: props.trade.user.jobTitle !== undefined ? {
              set: props.trade.user.jobTitle  
             } : undefined,
          currentPortfolio: props.trade.user.currentPortfolio !== undefined ? {
              set: props.trade.user.currentPortfolio  
             } : undefined,
          plan: props.trade.user.plan !== undefined ? {
              set: props.trade.user.plan  
             } : undefined,
        },
        create: {
          name: props.trade.user.name !== undefined ? props.trade.user.name : undefined,
          email: props.trade.user.email !== undefined ? props.trade.user.email : undefined,
          emailVerified: props.trade.user.emailVerified !== undefined ? props.trade.user.emailVerified : undefined,
          image: props.trade.user.image !== undefined ? props.trade.user.image : undefined,
          role: props.trade.user.role !== undefined ? props.trade.user.role : undefined,
          bio: props.trade.user.bio !== undefined ? props.trade.user.bio : undefined,
          jobTitle: props.trade.user.jobTitle !== undefined ? props.trade.user.jobTitle : undefined,
          currentPortfolio: props.trade.user.currentPortfolio !== undefined ? props.trade.user.currentPortfolio : undefined,
          plan: props.trade.user.plan !== undefined ? props.trade.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: props.trade.portfolio ? {
      upsert: {
        where: {
          id: props.trade.portfolio.id !== undefined ? {
              equals: props.trade.portfolio.id 
             } : undefined,
          name: props.trade.portfolio.name !== undefined ? {
              equals: props.trade.portfolio.name 
             } : undefined,
        },
        update: {
          name: props.trade.portfolio.name !== undefined ? {
              set: props.trade.portfolio.name  
             } : undefined,
          description: props.trade.portfolio.description !== undefined ? {
              set: props.trade.portfolio.description  
             } : undefined,
        },
        create: {
          name: props.trade.portfolio.name !== undefined ? props.trade.portfolio.name : undefined,
          description: props.trade.portfolio.description !== undefined ? props.trade.portfolio.description : undefined,
        },
      }
    } : undefined,
    asset: props.trade.asset ? {
      upsert: {
        where: {
          id: props.trade.asset.id !== undefined ? {
              equals: props.trade.asset.id 
             } : undefined,
          name: props.trade.asset.name !== undefined ? {
              equals: props.trade.asset.name 
             } : undefined,
        },
        update: {
          symbol: props.trade.asset.symbol !== undefined ? {
              set: props.trade.asset.symbol  
             } : undefined,
          name: props.trade.asset.name !== undefined ? {
              set: props.trade.asset.name  
             } : undefined,
          type: props.trade.asset.type !== undefined ? {
              set: props.trade.asset.type  
             } : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? {
              set: props.trade.asset.logoUrl  
             } : undefined,
        },
        create: {
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
          type: props.trade.asset.type !== undefined ? props.trade.asset.type : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? props.trade.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
      create: {
        action: props.trade.action !== undefined ? props.trade.action : undefined,
        quantity: props.trade.quantity !== undefined ? props.trade.quantity : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
    user: props.trade.user ? {
      connectOrCreate: {
        where: {
          id: props.trade.user.id !== undefined ? props.trade.user.id : undefined,
          email: props.trade.user.email !== undefined ? props.trade.user.email : undefined,
          name: props.trade.user.name !== undefined ? {
              equals: props.trade.user.name 
             } : undefined,
        },
        create: {
          name: props.trade.user.name !== undefined ? props.trade.user.name : undefined,
          email: props.trade.user.email !== undefined ? props.trade.user.email : undefined,
          emailVerified: props.trade.user.emailVerified !== undefined ? props.trade.user.emailVerified : undefined,
          image: props.trade.user.image !== undefined ? props.trade.user.image : undefined,
          role: props.trade.user.role !== undefined ? props.trade.user.role : undefined,
          bio: props.trade.user.bio !== undefined ? props.trade.user.bio : undefined,
          jobTitle: props.trade.user.jobTitle !== undefined ? props.trade.user.jobTitle : undefined,
          currentPortfolio: props.trade.user.currentPortfolio !== undefined ? props.trade.user.currentPortfolio : undefined,
          plan: props.trade.user.plan !== undefined ? props.trade.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: props.trade.portfolio ? {
      connectOrCreate: {
        where: {
          id: props.trade.portfolio.id !== undefined ? props.trade.portfolio.id : undefined,
          name: props.trade.portfolio.name !== undefined ? {
              equals: props.trade.portfolio.name 
             } : undefined,
        },
        create: {
          name: props.trade.portfolio.name !== undefined ? props.trade.portfolio.name : undefined,
          description: props.trade.portfolio.description !== undefined ? props.trade.portfolio.description : undefined,
        },
      }
    } : undefined,
    asset: props.trade.asset ? {
      connectOrCreate: {
        where: {
          id: props.trade.asset.id !== undefined ? props.trade.asset.id : undefined,
          name: props.trade.asset.name !== undefined ? {
              equals: props.trade.asset.name 
             } : undefined,
        },
        create: {
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
          type: props.trade.asset.type !== undefined ? props.trade.asset.type : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? props.trade.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ updateOneTradeStep: TradeStepType }>({ mutation: UPDATE_ONE_TRADESTEP, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneTradeStep) {
        return response.data.updateOneTradeStep;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneTradeStep:', error);
      throw error;
    }
  },

  /**
   * Delete a single TradeStep record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted TradeStep or null.
   */
  async delete(props: TradeStepType, client: ApolloClient<NormalizedCacheObject>): Promise<TradeStepType> {
    const DELETE_ONE_TRADESTEP = gql`
      mutation deleteOneTradeStep($where: TradeStepWhereUniqueInput!) {
        deleteOneTradeStep(where: $where) {
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
            steps {
              id
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
      const response = await client.mutate<{ deleteOneTradeStep: TradeStepType }>({ mutation: DELETE_ONE_TRADESTEP, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneTradeStep) {
        return response.data.deleteOneTradeStep;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneTradeStep:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single TradeStep record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved TradeStep or null.
   */
  async get(props: TradeStepType, client: ApolloClient<NormalizedCacheObject>): Promise<TradeStepType> {
    const GET_ONE_TRADESTEP = gql`
      query getOneTradeStep($where: TradeStepWhereUniqueInput!) {
        TradeStep(where: $where) {
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
            steps {
              id
            }
          }
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ TradeStep: TradeStepType }>({ query: GET_ONE_TRADESTEP, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.TradeStep ?? null;
    } catch (error) {
      console.error('Error in getOneTradeStep:', error);
      throw error;
    }
  },

  /**
   * Retrieve all TradeSteps records.
   * @param client - Apollo Client instance.
   * @returns An array of TradeStep records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<TradeStepType[] | null> {
    const GET_ALL_TRADESTEP = gql`
      query getAllTradeStep {
        TradeSteps {
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
            steps {
              id
            }
          }
      }
      }`;

    try {
      const response = await client.query<{ TradeSteps: TradeStepType[] }>({ query: GET_ALL_TRADESTEP });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.TradeSteps ?? null;
    } catch (error) {
      console.error('Error in getAllTradeStep:', error);
      throw error;
    }
  },

  /**
   * Find multiple TradeStep records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found TradeStep records or null.
   */
  async findMany(props: TradeStepType, client: ApolloClient<NormalizedCacheObject>): Promise<TradeStepType[]> {
    const FIND_MANY_TRADESTEP = gql`
      query findManyTradeStep($where: TradeStepWhereInput!) {
        TradeSteps(where: $where) {
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
            steps {
              id
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
      const response = await client.query<{ TradeSteps: TradeStepType[] }>({ query: FIND_MANY_TRADESTEP, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.TradeSteps) {
        return response.data.TradeSteps;
      } else {
       return [] as TradeStepType[];
      }
    } catch (error) {
      console.error('Error in findManyTradeStep:', error);
      throw error;
    }
  }
};
