

import { News as NewsType } from './generated/typegraphql-prisma/models/News';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the News model.
 */

export const News = {
  /**
   * Create a new News record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created News or null.
   */
  async create(props: NewsType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsType> {
    const CREATE_ONE_NEWS = gql`
      mutation createOneNews($data: NewsCreateInput!) {
        createOneNews(data: $data) {
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
            news {
              id
            }
            PortfolioAllocation {
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
          }
        }
      }
   `;

    const variables = {
      data: {
          title: props.title !== undefined ? props.title : undefined,
  content: props.content !== undefined ? props.content : undefined,
  source: props.source !== undefined ? props.source : undefined,
  url: props.url !== undefined ? props.url : undefined,
  sentiment: props.sentiment !== undefined ? props.sentiment : undefined,
  publishedAt: props.publishedAt !== undefined ? props.publishedAt : undefined,
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
    PortfolioAllocation: props.asset.PortfolioAllocation ? {
      connectOrCreate: props.asset.PortfolioAllocation.map((item: any) => ({
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
      const response = await client.mutate({ mutation: CREATE_ONE_NEWS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneNews) {
        return response.data.createOneNews;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneNews:', error);
      throw error;
    }
  },

  /**
   * Create multiple News records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: NewsType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_NEWS = gql`
      mutation createManyNews($data: [NewsCreateManyInput!]!) {
        createManyNews(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  title: prop.title !== undefined ? prop.title : undefined,
  content: prop.content !== undefined ? prop.content : undefined,
  source: prop.source !== undefined ? prop.source : undefined,
  url: prop.url !== undefined ? prop.url : undefined,
  sentiment: prop.sentiment !== undefined ? prop.sentiment : undefined,
  publishedAt: prop.publishedAt !== undefined ? prop.publishedAt : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_NEWS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyNews) {
        return response.data.createManyNews;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyNews:', error);
      throw error;
    }
  },

  /**
   * Update a single News record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated News or null.
   */
  async update(props: NewsType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsType> {
    const UPDATE_ONE_NEWS = gql`
      mutation updateOneNews($data: NewsUpdateInput!, $where: NewsWhereUniqueInput!) {
        updateOneNews(data: $data, where: $where) {
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
            news {
              id
            }
            PortfolioAllocation {
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
          }
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        title: props.title !== undefined ? {
            equals: props.title 
           } : undefined,
      },
      data: {
  content: props.content !== undefined ? {
            set: props.content 
           } : undefined,
  url: props.url !== undefined ? {
            set: props.url 
           } : undefined,
  sentiment: props.sentiment !== undefined ? {
            set: props.sentiment 
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
    PortfolioAllocation: props.asset.PortfolioAllocation ? {
      upsert: props.asset.PortfolioAllocation.map((item: any) => ({
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
    PortfolioAllocation: props.asset.PortfolioAllocation ? {
      connectOrCreate: props.asset.PortfolioAllocation.map((item: any) => ({
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
      const response = await client.mutate({ mutation: UPDATE_ONE_NEWS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneNews) {
        return response.data.updateOneNews;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneNews:', error);
      throw error;
    }
  },

  /**
   * Delete a single News record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted News or null.
   */
  async delete(props: NewsType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsType> {
    const DELETE_ONE_NEWS = gql`
      mutation deleteOneNews($where: NewsWhereUniqueInput!) {
        deleteOneNews(where: $where) {
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
            news {
              id
            }
            PortfolioAllocation {
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
          }
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_NEWS, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneNews) {
        return response.data.deleteOneNews;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneNews:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single News record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved News or null.
   */
  async get(props: NewsType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsType> {
    const GET_ONE_NEWS = gql`
      query getOneNews($where: NewsWhereUniqueInput!) {
        News(where: $where) {
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
            news {
              id
            }
            PortfolioAllocation {
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
          }
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query({ query: GET_ONE_NEWS, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.News ?? null;
    } catch (error) {
      console.error('Error in getOneNews:', error);
      throw error;
    }
  },

  /**
   * Retrieve all News records.
   * @param client - Apollo Client instance.
   * @returns An array of News records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<NewsType[] | null> {
    const GET_ALL_NEWS = gql`
      query getAllNews {
        News {
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
            news {
              id
            }
            PortfolioAllocation {
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
          }
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_NEWS });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.News ?? null;
    } catch (error) {
      console.error('Error in getAllNews:', error);
      throw error;
    }
  },

  /**
   * Find multiple News records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found News records or null.
   */
  async findMany(props: NewsType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsType[]> {
    const FIND_MANY_NEWS = gql`
      query findManyNews($where: NewsWhereInput!) {
        News(where: $where) {
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
            news {
              id
            }
            PortfolioAllocation {
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
          }
      }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
        title: props.title !== undefined ? {
            equals: props.title 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_NEWS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.News) {
        return response.data.News;
      } else {
       return [] as NewsType[];
      }
    } catch (error) {
      console.error('Error in findManyNews:', error);
      throw error;
    }
  }
};
