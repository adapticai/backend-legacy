

import { EnvironmentVariable as EnvironmentVariableType } from './generated/typegraphql-prisma/models/EnvironmentVariable';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the EnvironmentVariable model.
 */

export const EnvironmentVariable = {
  /**
   * Create a new EnvironmentVariable record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created EnvironmentVariable or null.
   */
  async create(props: EnvironmentVariableType, client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType> {
    const CREATE_ONE_ENVIRONMENTVARIABLE = gql`
      mutation createOneEnvironmentVariable($data: EnvironmentVariableCreateInput!) {
        createOneEnvironmentVariable(data: $data) {
          id
          key
          value
          description
          portfolioId
          portfolio {
            id
            name
            slug
            description
            createdAt
            updatedAt
            users {
              id
              userId
              portfolioId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
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
                portfolios {
                  id
                }
                performanceMetrics {
                  id
                }
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
            }
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
            }
          }
          createdAt
          updatedAt
        }
      }
   `;

    const variables = {
      data: {
          key: props.key !== undefined ? props.key : undefined,
  value: props.value !== undefined ? props.value : undefined,
  description: props.description !== undefined ? props.description : undefined,
  portfolio: props.portfolio ? {
    connectOrCreate: {
      where: {
        id: props.portfolio.id !== undefined ? props.portfolio.id : undefined,
        slug: props.portfolio.slug !== undefined ? props.portfolio.slug : undefined,
        name: props.portfolio.name !== undefined ? {
            equals: props.portfolio.name 
           } : undefined,
      },
      create: {
        name: props.portfolio.name !== undefined ? props.portfolio.name : undefined,
        slug: props.portfolio.slug !== undefined ? props.portfolio.slug : undefined,
        description: props.portfolio.description !== undefined ? props.portfolio.description : undefined,
    users: props.portfolio.users ? {
      connectOrCreate: props.portfolio.users.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
        },
      }))
    } : undefined,
    holdings: props.portfolio.holdings ? {
      connectOrCreate: props.portfolio.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
        },
      }))
    } : undefined,
    trades: props.portfolio.trades ? {
      connectOrCreate: props.portfolio.trades.map((item: any) => ({
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
    orders: props.portfolio.orders ? {
      connectOrCreate: props.portfolio.orders.map((item: any) => ({
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
    aiRecommendations: props.portfolio.aiRecommendations ? {
      connectOrCreate: props.portfolio.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.portfolio.riskAllocations ? {
      connectOrCreate: props.portfolio.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.portfolio.alerts ? {
      connectOrCreate: props.portfolio.alerts.map((item: any) => ({
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
    performanceMetrics: props.portfolio.performanceMetrics ? {
      connectOrCreate: props.portfolio.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    portfolioAllocations: props.portfolio.portfolioAllocations ? {
      connectOrCreate: props.portfolio.portfolioAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          allocation: item.allocation !== undefined ? item.allocation : undefined,
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
      const response = await client.mutate({ mutation: CREATE_ONE_ENVIRONMENTVARIABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneEnvironmentVariable) {
        return response.data.createOneEnvironmentVariable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Create multiple EnvironmentVariable records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: EnvironmentVariableType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_ENVIRONMENTVARIABLE = gql`
      mutation createManyEnvironmentVariable($data: [EnvironmentVariableCreateManyInput!]!) {
        createManyEnvironmentVariable(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  key: prop.key !== undefined ? prop.key : undefined,
  value: prop.value !== undefined ? prop.value : undefined,
  description: prop.description !== undefined ? prop.description : undefined,
  portfolioId: prop.portfolioId !== undefined ? prop.portfolioId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ENVIRONMENTVARIABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyEnvironmentVariable) {
        return response.data.createManyEnvironmentVariable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Update a single EnvironmentVariable record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated EnvironmentVariable or null.
   */
  async update(props: EnvironmentVariableType, client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType> {
    const UPDATE_ONE_ENVIRONMENTVARIABLE = gql`
      mutation updateOneEnvironmentVariable($data: EnvironmentVariableUpdateInput!, $where: EnvironmentVariableWhereUniqueInput!) {
        updateOneEnvironmentVariable(data: $data, where: $where) {
          id
          key
          value
          description
          portfolioId
          portfolio {
            id
            name
            slug
            description
            createdAt
            updatedAt
            users {
              id
              userId
              portfolioId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
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
                portfolios {
                  id
                }
                performanceMetrics {
                  id
                }
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
            }
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
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  portfolio: props.portfolio ? {
    upsert: {
      where: {
        id: props.portfolio.id !== undefined ? {
            equals: props.portfolio.id 
           } : undefined,
        name: props.portfolio.name !== undefined ? {
            equals: props.portfolio.name 
           } : undefined,
        slug: props.portfolio.slug !== undefined ? {
            equals: props.portfolio.slug 
           } : undefined,
      },
      update: {
        name: props.portfolio.name !== undefined ? {
            set: props.portfolio.name  
           } : undefined,
        slug: props.portfolio.slug !== undefined ? {
            set: props.portfolio.slug  
           } : undefined,
        description: props.portfolio.description !== undefined ? {
            set: props.portfolio.description  
           } : undefined,
    users: props.portfolio.users ? {
      upsert: props.portfolio.users.map((item: any) => ({
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
    holdings: props.portfolio.holdings ? {
      upsert: props.portfolio.holdings.map((item: any) => ({
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
    trades: props.portfolio.trades ? {
      upsert: props.portfolio.trades.map((item: any) => ({
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
    orders: props.portfolio.orders ? {
      upsert: props.portfolio.orders.map((item: any) => ({
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
    aiRecommendations: props.portfolio.aiRecommendations ? {
      upsert: props.portfolio.aiRecommendations.map((item: any) => ({
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
    riskAllocations: props.portfolio.riskAllocations ? {
      upsert: props.portfolio.riskAllocations.map((item: any) => ({
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
    alerts: props.portfolio.alerts ? {
      upsert: props.portfolio.alerts.map((item: any) => ({
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
    performanceMetrics: props.portfolio.performanceMetrics ? {
      upsert: props.portfolio.performanceMetrics.map((item: any) => ({
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
    portfolioAllocations: props.portfolio.portfolioAllocations ? {
      upsert: props.portfolio.portfolioAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          allocation: item.allocation !== undefined ? {
              set: item.allocation  
             } : undefined,
        },
        create: {
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: props.portfolio.name !== undefined ? props.portfolio.name : undefined,
        slug: props.portfolio.slug !== undefined ? props.portfolio.slug : undefined,
        description: props.portfolio.description !== undefined ? props.portfolio.description : undefined,
    users: props.portfolio.users ? {
      connectOrCreate: props.portfolio.users.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
        },
      }))
    } : undefined,
    holdings: props.portfolio.holdings ? {
      connectOrCreate: props.portfolio.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
        },
      }))
    } : undefined,
    trades: props.portfolio.trades ? {
      connectOrCreate: props.portfolio.trades.map((item: any) => ({
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
    orders: props.portfolio.orders ? {
      connectOrCreate: props.portfolio.orders.map((item: any) => ({
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
    aiRecommendations: props.portfolio.aiRecommendations ? {
      connectOrCreate: props.portfolio.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.portfolio.riskAllocations ? {
      connectOrCreate: props.portfolio.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.portfolio.alerts ? {
      connectOrCreate: props.portfolio.alerts.map((item: any) => ({
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
    performanceMetrics: props.portfolio.performanceMetrics ? {
      connectOrCreate: props.portfolio.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    portfolioAllocations: props.portfolio.portfolioAllocations ? {
      connectOrCreate: props.portfolio.portfolioAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          allocation: item.allocation !== undefined ? item.allocation : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_ONE_ENVIRONMENTVARIABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneEnvironmentVariable) {
        return response.data.updateOneEnvironmentVariable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Delete a single EnvironmentVariable record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted EnvironmentVariable or null.
   */
  async delete(props: EnvironmentVariableType, client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType> {
    const DELETE_ONE_ENVIRONMENTVARIABLE = gql`
      mutation deleteOneEnvironmentVariable($where: EnvironmentVariableWhereUniqueInput!) {
        deleteOneEnvironmentVariable(where: $where) {
          id
          key
          value
          description
          portfolioId
          portfolio {
            id
            name
            slug
            description
            createdAt
            updatedAt
            users {
              id
              userId
              portfolioId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
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
                portfolios {
                  id
                }
                performanceMetrics {
                  id
                }
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
            }
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
      const response = await client.mutate({ mutation: DELETE_ONE_ENVIRONMENTVARIABLE, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneEnvironmentVariable) {
        return response.data.deleteOneEnvironmentVariable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single EnvironmentVariable record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved EnvironmentVariable or null.
   */
  async get(props: EnvironmentVariableType, client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType> {
    const GET_ONE_ENVIRONMENTVARIABLE = gql`
      query getOneEnvironmentVariable($where: EnvironmentVariableWhereUniqueInput!) {
        EnvironmentVariable(where: $where) {
          id
          key
          value
          description
          portfolioId
          portfolio {
            id
            name
            slug
            description
            createdAt
            updatedAt
            users {
              id
              userId
              portfolioId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
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
                portfolios {
                  id
                }
                performanceMetrics {
                  id
                }
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
            }
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
};
    try {
      const response = await client.query({ query: GET_ONE_ENVIRONMENTVARIABLE, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.EnvironmentVariable ?? null;
    } catch (error) {
      console.error('Error in getOneEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Retrieve all EnvironmentVariables records.
   * @param client - Apollo Client instance.
   * @returns An array of EnvironmentVariable records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType[] | null> {
    const GET_ALL_ENVIRONMENTVARIABLE = gql`
      query getAllEnvironmentVariable {
        EnvironmentVariables {
          id
          key
          value
          description
          portfolioId
          portfolio {
            id
            name
            slug
            description
            createdAt
            updatedAt
            users {
              id
              userId
              portfolioId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
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
                portfolios {
                  id
                }
                performanceMetrics {
                  id
                }
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
            }
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
            }
          }
          createdAt
          updatedAt
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ENVIRONMENTVARIABLE });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.EnvironmentVariables ?? null;
    } catch (error) {
      console.error('Error in getAllEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Find multiple EnvironmentVariable records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found EnvironmentVariable records or null.
   */
  async findMany(props: EnvironmentVariableType, client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType[]> {
    const FIND_MANY_ENVIRONMENTVARIABLE = gql`
      query findManyEnvironmentVariable($where: EnvironmentVariableWhereInput!) {
        EnvironmentVariables(where: $where) {
          id
          key
          value
          description
          portfolioId
          portfolio {
            id
            name
            slug
            description
            createdAt
            updatedAt
            users {
              id
              userId
              portfolioId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
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
                portfolios {
                  id
                }
                performanceMetrics {
                  id
                }
              }
              portfolio {
                id
              }
              role
              createdAt
              updatedAt
            }
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
      const response = await client.query({ query: FIND_MANY_ENVIRONMENTVARIABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.EnvironmentVariables) {
        return response.data.EnvironmentVariables;
      } else {
       return [] as EnvironmentVariableType[];
      }
    } catch (error) {
      console.error('Error in findManyEnvironmentVariable:', error);
      throw error;
    }
  }
};
