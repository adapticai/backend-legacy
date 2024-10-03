

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
          url
          sentiment
          publishedAt
          createdAt
          updatedAt
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

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createOneNews: NewsType }>({ mutation: CREATE_ONE_NEWS, variables: filteredVariables });
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
  url: prop.url !== undefined ? prop.url : undefined,
  sentiment: prop.sentiment !== undefined ? prop.sentiment : undefined,
  publishedAt: prop.publishedAt !== undefined ? prop.publishedAt : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyNews: { count: number } }>({ mutation: CREATE_MANY_NEWS, variables: filteredVariables });
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
          url
          sentiment
          publishedAt
          createdAt
          updatedAt
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
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ updateOneNews: NewsType }>({ mutation: UPDATE_ONE_NEWS, variables: filteredVariables });
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
          url
          sentiment
          publishedAt
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
      const response = await client.mutate<{ deleteOneNews: NewsType }>({ mutation: DELETE_ONE_NEWS, variables });
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
          title
          content
          source
          url
          sentiment
          publishedAt
          createdAt
          updatedAt
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ News: NewsType }>({ query: GET_ONE_NEWS, variables });
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
          title
          content
          source
          url
          sentiment
          publishedAt
          createdAt
          updatedAt
      }
      }`;

    try {
      const response = await client.query<{ News: NewsType[] }>({ query: GET_ALL_NEWS });
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
          url
          sentiment
          publishedAt
          createdAt
          updatedAt
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
      const response = await client.query<{ News: NewsType[] }>({ query: FIND_MANY_NEWS, variables: filteredVariables });
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
