

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
            assetId
            newsId
            news {
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
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
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
      }
   `;

    const variables = {
      data: {
          title: props.title !== undefined ? props.title : undefined,
  content: props.content !== undefined ? props.content : undefined,
  source: props.source !== undefined ? props.source : undefined,
  sourceDomain: props.sourceDomain !== undefined ? props.sourceDomain : undefined,
  url: props.url !== undefined ? props.url : undefined,
  sentiment: props.sentiment !== undefined ? props.sentiment : undefined,
  authors: props.authors !== undefined ? props.authors : undefined,
  summary: props.summary !== undefined ? props.summary : undefined,
  bannerImage: props.bannerImage !== undefined ? props.bannerImage : undefined,
  timePublished: props.timePublished !== undefined ? props.timePublished : undefined,
  category: props.category !== undefined ? props.category : undefined,
  topics: props.topics !== undefined ? props.topics : undefined,
  logo: props.logo !== undefined ? props.logo : undefined,
  assets: props.assets ? {
    connectOrCreate: props.assets.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
        sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
        sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
    asset: item.asset ? {
      connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
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
  title: prop.title !== undefined ? prop.title : undefined,
  content: prop.content !== undefined ? prop.content : undefined,
  source: prop.source !== undefined ? prop.source : undefined,
  sourceDomain: prop.sourceDomain !== undefined ? prop.sourceDomain : undefined,
  url: prop.url !== undefined ? prop.url : undefined,
  sentiment: prop.sentiment !== undefined ? prop.sentiment : undefined,
  authors: prop.authors !== undefined ? prop.authors : undefined,
  summary: prop.summary !== undefined ? prop.summary : undefined,
  bannerImage: prop.bannerImage !== undefined ? prop.bannerImage : undefined,
  timePublished: prop.timePublished !== undefined ? prop.timePublished : undefined,
  category: prop.category !== undefined ? prop.category : undefined,
  topics: prop.topics !== undefined ? prop.topics : undefined,
  logo: prop.logo !== undefined ? prop.logo : undefined,
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
            assetId
            newsId
            news {
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
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        url: props.url !== undefined ? props.url : undefined,
        title: props.title !== undefined ? {
            equals: props.title 
           } : undefined,
      },
      data: {
  content: props.content !== undefined ? {
            set: props.content 
           } : undefined,
  sourceDomain: props.sourceDomain !== undefined ? {
            set: props.sourceDomain 
           } : undefined,
  summary: props.summary !== undefined ? {
            set: props.summary 
           } : undefined,
  bannerImage: props.bannerImage !== undefined ? {
            set: props.bannerImage 
           } : undefined,
  category: props.category !== undefined ? {
            set: props.category 
           } : undefined,
  logo: props.logo !== undefined ? {
            set: props.logo 
           } : undefined,
  assets: props.assets ? {
    upsert: props.assets.map((item: any) => ({
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
    asset: item.asset ? {
      upsert: {
        where: {
          id: item.asset.id !== undefined ? {
              equals: item.asset.id 
             } : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        update: {
          symbol: item.asset.symbol !== undefined ? {
              set: item.asset.symbol  
             } : undefined,
          name: item.asset.name !== undefined ? {
              set: item.asset.name  
             } : undefined,
          type: item.asset.type !== undefined ? {
              set: item.asset.type  
             } : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? {
              set: item.asset.logoUrl  
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
      create: {
        relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
        sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
        sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
    asset: item.asset ? {
      connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
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
            assetId
            newsId
            news {
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
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
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
    const GET_NEWS = gql`
      query getNews($where: NewsWhereInput!) {
        news(where: $where) {
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
            assetId
            newsId
            news {
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
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
        title: props.title !== undefined ? {
            equals: props.title 
           } : undefined,
        url: props.url !== undefined ? {
            equals: props.url 
           } : undefined,
      },
};
    try {
      const response = await client.query({ query: GET_NEWS, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.news ?? null;
    } catch (error) {
      console.error('Error in getNews:', error);
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
            assetId
            newsId
            news {
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
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
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
            assetId
            newsId
            news {
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
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
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
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
        title: props.title !== undefined ? {
            equals: props.title 
           } : undefined,
        url: props.url !== undefined ? {
            equals: props.url 
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
