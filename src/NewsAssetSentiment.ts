

import { NewsAssetSentiment as NewsAssetSentimentType } from './generated/typegraphql-prisma/models/NewsAssetSentiment';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the NewsAssetSentiment model.
 */

export const NewsAssetSentiment = {
  /**
   * Create a new NewsAssetSentiment record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created NewsAssetSentiment or null.
   */
  async create(props: NewsAssetSentimentType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsAssetSentimentType> {
    const CREATE_ONE_NEWSASSETSENTIMENT = gql`
      mutation createOneNewsAssetSentiment($data: NewsAssetSentimentCreateInput!) {
        createOneNewsAssetSentiment(data: $data) {
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
            symbol
            name
            type
            logoUrl
            createdAt
            updatedAt
            holdings {
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
                tradingAccount {
                  id
                }
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
            newsMentions {
              id
            }
          }
          relevancyScore
          sentimentScore
          sentimentLabel
        }
      }
   `;

    const variables = {
      data: {
          relevancyScore: props.relevancyScore !== undefined ? props.relevancyScore : undefined,
  sentimentScore: props.sentimentScore !== undefined ? props.sentimentScore : undefined,
  sentimentLabel: props.sentimentLabel !== undefined ? props.sentimentLabel : undefined,
  news: props.news ? {
    connectOrCreate: {
      where: {
        id: props.news.id !== undefined ? props.news.id : undefined,
        url: props.news.url !== undefined ? props.news.url : undefined,
        title: props.news.title !== undefined ? {
            equals: props.news.title 
           } : undefined,
      },
      create: {
        title: props.news.title !== undefined ? props.news.title : undefined,
        content: props.news.content !== undefined ? props.news.content : undefined,
        source: props.news.source !== undefined ? props.news.source : undefined,
        sourceDomain: props.news.sourceDomain !== undefined ? props.news.sourceDomain : undefined,
        url: props.news.url !== undefined ? props.news.url : undefined,
        sentiment: props.news.sentiment !== undefined ? props.news.sentiment : undefined,
        authors: props.news.authors !== undefined ? props.news.authors : undefined,
        summary: props.news.summary !== undefined ? props.news.summary : undefined,
        bannerImage: props.news.bannerImage !== undefined ? props.news.bannerImage : undefined,
        timePublished: props.news.timePublished !== undefined ? props.news.timePublished : undefined,
        category: props.news.category !== undefined ? props.news.category : undefined,
        topics: props.news.topics !== undefined ? props.news.topics : undefined,
        logo: props.news.logo !== undefined ? props.news.logo : undefined,
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
      },
    }
  } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_NEWSASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneNewsAssetSentiment) {
        return response.data.createOneNewsAssetSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneNewsAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Create multiple NewsAssetSentiment records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: NewsAssetSentimentType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_NEWSASSETSENTIMENT = gql`
      mutation createManyNewsAssetSentiment($data: [NewsAssetSentimentCreateManyInput!]!) {
        createManyNewsAssetSentiment(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  newsId: prop.newsId !== undefined ? prop.newsId : undefined,
  relevancyScore: prop.relevancyScore !== undefined ? prop.relevancyScore : undefined,
  sentimentScore: prop.sentimentScore !== undefined ? prop.sentimentScore : undefined,
  sentimentLabel: prop.sentimentLabel !== undefined ? prop.sentimentLabel : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_NEWSASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyNewsAssetSentiment) {
        return response.data.createManyNewsAssetSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyNewsAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Update a single NewsAssetSentiment record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated NewsAssetSentiment or null.
   */
  async update(props: NewsAssetSentimentType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsAssetSentimentType> {
    const UPDATE_ONE_NEWSASSETSENTIMENT = gql`
      mutation updateOneNewsAssetSentiment($data: NewsAssetSentimentUpdateInput!, $where: NewsAssetSentimentWhereUniqueInput!) {
        updateOneNewsAssetSentiment(data: $data, where: $where) {
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
            symbol
            name
            type
            logoUrl
            createdAt
            updatedAt
            holdings {
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
                tradingAccount {
                  id
                }
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
            newsMentions {
              id
            }
          }
          relevancyScore
          sentimentScore
          sentimentLabel
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  relevancyScore: props.relevancyScore !== undefined ? {
            set: props.relevancyScore 
           } : undefined,
  sentimentScore: props.sentimentScore !== undefined ? {
            set: props.sentimentScore 
           } : undefined,
  sentimentLabel: props.sentimentLabel !== undefined ? {
            set: props.sentimentLabel 
           } : undefined,
  news: props.news ? {
    upsert: {
      where: {
        id: props.news.id !== undefined ? {
            equals: props.news.id 
           } : undefined,
        title: props.news.title !== undefined ? {
            equals: props.news.title 
           } : undefined,
        url: props.news.url !== undefined ? {
            equals: props.news.url 
           } : undefined,
      },
      update: {
        title: props.news.title !== undefined ? {
            set: props.news.title  
           } : undefined,
        content: props.news.content !== undefined ? {
            set: props.news.content  
           } : undefined,
        source: props.news.source !== undefined ? {
            set: props.news.source  
           } : undefined,
        sourceDomain: props.news.sourceDomain !== undefined ? {
            set: props.news.sourceDomain  
           } : undefined,
        url: props.news.url !== undefined ? {
            set: props.news.url  
           } : undefined,
        sentiment: props.news.sentiment !== undefined ? {
            set: props.news.sentiment  
           } : undefined,
        authors: props.news.authors !== undefined ? {
            set: props.news.authors  
           } : undefined,
        summary: props.news.summary !== undefined ? {
            set: props.news.summary  
           } : undefined,
        bannerImage: props.news.bannerImage !== undefined ? {
            set: props.news.bannerImage  
           } : undefined,
        timePublished: props.news.timePublished !== undefined ? {
            set: props.news.timePublished  
           } : undefined,
        category: props.news.category !== undefined ? {
            set: props.news.category  
           } : undefined,
        topics: props.news.topics !== undefined ? {
            set: props.news.topics  
           } : undefined,
        logo: props.news.logo !== undefined ? {
            set: props.news.logo  
           } : undefined,
      },
      create: {
        title: props.news.title !== undefined ? props.news.title : undefined,
        content: props.news.content !== undefined ? props.news.content : undefined,
        source: props.news.source !== undefined ? props.news.source : undefined,
        sourceDomain: props.news.sourceDomain !== undefined ? props.news.sourceDomain : undefined,
        url: props.news.url !== undefined ? props.news.url : undefined,
        sentiment: props.news.sentiment !== undefined ? props.news.sentiment : undefined,
        authors: props.news.authors !== undefined ? props.news.authors : undefined,
        summary: props.news.summary !== undefined ? props.news.summary : undefined,
        bannerImage: props.news.bannerImage !== undefined ? props.news.bannerImage : undefined,
        timePublished: props.news.timePublished !== undefined ? props.news.timePublished : undefined,
        category: props.news.category !== undefined ? props.news.category : undefined,
        topics: props.news.topics !== undefined ? props.news.topics : undefined,
        logo: props.news.logo !== undefined ? props.news.logo : undefined,
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
      },
    }
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_NEWSASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneNewsAssetSentiment) {
        return response.data.updateOneNewsAssetSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneNewsAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Delete a single NewsAssetSentiment record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted NewsAssetSentiment or null.
   */
  async delete(props: NewsAssetSentimentType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsAssetSentimentType> {
    const DELETE_ONE_NEWSASSETSENTIMENT = gql`
      mutation deleteOneNewsAssetSentiment($where: NewsAssetSentimentWhereUniqueInput!) {
        deleteOneNewsAssetSentiment(where: $where) {
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
            symbol
            name
            type
            logoUrl
            createdAt
            updatedAt
            holdings {
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
                tradingAccount {
                  id
                }
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
            newsMentions {
              id
            }
          }
          relevancyScore
          sentimentScore
          sentimentLabel
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_NEWSASSETSENTIMENT, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneNewsAssetSentiment) {
        return response.data.deleteOneNewsAssetSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneNewsAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single NewsAssetSentiment record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved NewsAssetSentiment or null.
   */
  async get(props: NewsAssetSentimentType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsAssetSentimentType> {
    const GET_NEWSASSETSENTIMENTS = gql`
      query getNewsAssetSentiments($where: NewsAssetSentimentWhereInput!) {
        newsAssetSentiments(where: $where) {
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
            symbol
            name
            type
            logoUrl
            createdAt
            updatedAt
            holdings {
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
                tradingAccount {
                  id
                }
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
            newsMentions {
              id
            }
          }
          relevancyScore
          sentimentScore
          sentimentLabel
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
      const response = await client.query({ query: GET_NEWSASSETSENTIMENTS, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.newsAssetSentiments ?? null;
    } catch (error) {
      console.error('Error in getNewsAssetSentiments:', error);
      throw error;
    }
  },

  /**
   * Retrieve all NewsAssetSentiments records.
   * @param client - Apollo Client instance.
   * @returns An array of NewsAssetSentiment records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<NewsAssetSentimentType[] | null> {
    const GET_ALL_NEWSASSETSENTIMENT = gql`
      query getAllNewsAssetSentiment {
        NewsAssetSentiments {
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
            symbol
            name
            type
            logoUrl
            createdAt
            updatedAt
            holdings {
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
                tradingAccount {
                  id
                }
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
            newsMentions {
              id
            }
          }
          relevancyScore
          sentimentScore
          sentimentLabel
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_NEWSASSETSENTIMENT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.NewsAssetSentiments ?? null;
    } catch (error) {
      console.error('Error in getAllNewsAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Find multiple NewsAssetSentiment records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found NewsAssetSentiment records or null.
   */
  async findMany(props: NewsAssetSentimentType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsAssetSentimentType[]> {
    const FIND_MANY_NEWSASSETSENTIMENT = gql`
      query findManyNewsAssetSentiment($where: NewsAssetSentimentWhereInput!) {
        NewsAssetSentiments(where: $where) {
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
            symbol
            name
            type
            logoUrl
            createdAt
            updatedAt
            holdings {
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
                tradingAccount {
                  id
                }
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
            newsMentions {
              id
            }
          }
          relevancyScore
          sentimentScore
          sentimentLabel
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
      const response = await client.query({ query: FIND_MANY_NEWSASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.NewsAssetSentiments) {
        return response.data.NewsAssetSentiments;
      } else {
       return [] as NewsAssetSentimentType[];
      }
    } catch (error) {
      console.error('Error in findManyNewsAssetSentiment:', error);
      throw error;
    }
  }
};
