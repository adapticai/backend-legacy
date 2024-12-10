
  
import { NewsArticle as NewsArticleType } from './generated/typegraphql-prisma/models/NewsArticle';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the NewsArticle model.
   */

  const selectionSet = `
    
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
    newsArticleId
    url
    asset {
      id
      symbol
      name
      type
      logoUrl
      description
      cik
      exchange
      currency
      country
      sector
      industry
      address
      officialSite
      fiscalYearEnd
      latestQuarter
      marketCapitalization
      ebitda
      peRatio
      pegRatio
      bookValue
      dividendPerShare
      dividendYield
      eps
      revenuePerShareTTM
      profitMargin
      operatingMarginTTM
      returnOnAssetsTTM
      returnOnEquityTTM
      revenueTTM
      grossProfitTTM
      dilutedEPSTTM
      quarterlyEarningsGrowthYOY
      quarterlyRevenueGrowthYOY
      analystTargetPrice
      analystRatingStrongBuy
      analystRatingBuy
      analystRatingHold
      analystRatingSell
      analystRatingStrongSell
      trailingPE
      forwardPE
      priceToSalesRatioTTM
      priceToBookRatio
      evToRevenue
      evToEbitda
      beta
      week52High
      week52Low
      day50MovingAverage
      day200MovingAverage
      sharesOutstanding
      dividendDate
      exDividendDate
      askPrice
      bidPrice
      createdAt
      updatedAt
    }
    relevancyScore
    sentimentScore
    sentimentLabel
  }

  `;

  export const NewsArticle = {

    /**
     * Create a new NewsArticle record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created NewsArticle or null.
     */

    async create(props: NewsArticleType, globalClient?: ApolloClient<any>): Promise<NewsArticleType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_NEWSARTICLE = gql`
        mutation createOneNewsArticle($data: NewsArticleCreateInput!) {
          createOneNewsArticle(data: $data) {
            ${selectionSet}
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
  assets: props.assets ? 
    Array.isArray(props.assets) && props.assets.length > 0 &&  props.assets.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.assets.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.assets.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        url: item.url !== undefined ? item.url : undefined,
        newsArticleId: item.newsArticleId !== undefined ? {
            equals: item.newsArticleId 
           } : undefined,
      },
      create: {
        url: item.url !== undefined ? item.url : undefined,
        relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
        sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
        sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
        asset: item.asset !== undefined ? {
            set: item.asset
          } : undefined,
      },
    }))
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_NEWSARTICLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneNewsArticle) {
        return response.data.createOneNewsArticle;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneNewsArticle:', error);
      throw error;
    }
  },

  /**
   * Create multiple NewsArticle records.
   * @param props - Array of NewsArticle objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: NewsArticleType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_NEWSARTICLE = gql`
      mutation createManyNewsArticle($data: [NewsArticleCreateManyInput!]!) {
        createManyNewsArticle(data: $data) {
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
      const response = await client.mutate({ mutation: CREATE_MANY_NEWSARTICLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyNewsArticle) {
        return response.data.createManyNewsArticle;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyNewsArticle:', error);
      throw error;
    }
  },

  /**
   * Update a single NewsArticle record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated NewsArticle or null.
   */
  async update(props: NewsArticleType, globalClient?: ApolloClient<any>): Promise<NewsArticleType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_NEWSARTICLE = gql`
      mutation updateOneNewsArticle($data: NewsArticleUpdateInput!, $where: NewsArticleWhereUniqueInput!) {
        updateOneNewsArticle(data: $data, where: $where) {
          ${selectionSet}
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
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  title: props.title !== undefined ? {
            set: props.title 
           } : undefined,
  content: props.content !== undefined ? {
            set: props.content 
           } : undefined,
  source: props.source !== undefined ? {
            set: props.source 
           } : undefined,
  sourceDomain: props.sourceDomain !== undefined ? {
            set: props.sourceDomain 
           } : undefined,
  url: props.url !== undefined ? {
            set: props.url 
           } : undefined,
  sentiment: props.sentiment !== undefined ? {
            set: props.sentiment 
           } : undefined,
  authors: props.authors !== undefined ? {
            set: props.authors 
           } : undefined,
  summary: props.summary !== undefined ? {
            set: props.summary 
           } : undefined,
  bannerImage: props.bannerImage !== undefined ? {
            set: props.bannerImage 
           } : undefined,
  timePublished: props.timePublished !== undefined ? {
            set: props.timePublished 
           } : undefined,
  category: props.category !== undefined ? {
            set: props.category 
           } : undefined,
  topics: props.topics !== undefined ? {
            set: props.topics 
           } : undefined,
  logo: props.logo !== undefined ? {
            set: props.logo 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  assets: props.assets !== undefined ? {
            set: props.assets 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_NEWSARTICLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneNewsArticle) {
        return response.data.updateOneNewsArticle;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneNewsArticle:', error);
      throw error;
    }
  },

  /**
   * Upsert a single NewsArticle record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated NewsArticle or null.
   */
  async upsert(props: NewsArticleType, globalClient?: ApolloClient<any>): Promise<NewsArticleType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_NEWSARTICLE = gql`
      mutation upsertOneNewsArticle($where: NewsArticleWhereUniqueInput!, $create: NewsArticleCreateInput!, $update: NewsArticleUpdateInput!) {
        upsertOneNewsArticle(where: $where, create: $create, update: $update) {
          ${selectionSet}
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
      create: {
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
  assets: props.assets ? 
    Array.isArray(props.assets) && props.assets.length > 0 &&  props.assets.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.assets.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.assets.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        url: item.url !== undefined ? item.url : undefined,
        newsArticleId: item.newsArticleId !== undefined ? {
            equals: item.newsArticleId 
           } : undefined,
      },
      create: {
        url: item.url !== undefined ? item.url : undefined,
        relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
        sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
        sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
        asset: item.asset !== undefined ? {
            set: item.asset
          } : undefined,
      },
    }))
  } : undefined,
      },
      update: {
  title: props.title !== undefined ? {
            set: props.title 
           } : undefined,
  content: props.content !== undefined ? {
            set: props.content 
           } : undefined,
  source: props.source !== undefined ? {
            set: props.source 
           } : undefined,
  sourceDomain: props.sourceDomain !== undefined ? {
            set: props.sourceDomain 
           } : undefined,
  url: props.url !== undefined ? {
            set: props.url 
           } : undefined,
  sentiment: props.sentiment !== undefined ? {
            set: props.sentiment 
           } : undefined,
  authors: props.authors !== undefined ? {
            set: props.authors 
           } : undefined,
  summary: props.summary !== undefined ? {
            set: props.summary 
           } : undefined,
  bannerImage: props.bannerImage !== undefined ? {
            set: props.bannerImage 
           } : undefined,
  timePublished: props.timePublished !== undefined ? {
            set: props.timePublished 
           } : undefined,
  category: props.category !== undefined ? {
            set: props.category 
           } : undefined,
  topics: props.topics !== undefined ? {
            set: props.topics 
           } : undefined,
  logo: props.logo !== undefined ? {
            set: props.logo 
           } : undefined,
  assets: props.assets !== undefined ? {
            set: props.assets 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_NEWSARTICLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneNewsArticle) {
        return response.data.upsertOneNewsArticle;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneNewsArticle:', error);
      throw error;
    }
  },

  /**
   * Update multiple NewsArticle records.
   * @param props - Array of NewsArticle objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: NewsArticleType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_NEWSARTICLE = gql`
      mutation updateManyNewsArticle($data: [NewsArticleCreateManyInput!]!) {
        updateManyNewsArticle(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  url: prop.url !== undefined ? prop.url : undefined,
  title: prop.title !== undefined ? {
    equals: prop.title 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  title: prop.title !== undefined ? {
            set: prop.title 
           } : undefined,
  content: prop.content !== undefined ? {
            set: prop.content 
           } : undefined,
  source: prop.source !== undefined ? {
            set: prop.source 
           } : undefined,
  sourceDomain: prop.sourceDomain !== undefined ? {
            set: prop.sourceDomain 
           } : undefined,
  url: prop.url !== undefined ? {
            set: prop.url 
           } : undefined,
  sentiment: prop.sentiment !== undefined ? {
            set: prop.sentiment 
           } : undefined,
  authors: prop.authors !== undefined ? {
            set: prop.authors 
           } : undefined,
  summary: prop.summary !== undefined ? {
            set: prop.summary 
           } : undefined,
  bannerImage: prop.bannerImage !== undefined ? {
            set: prop.bannerImage 
           } : undefined,
  timePublished: prop.timePublished !== undefined ? {
            set: prop.timePublished 
           } : undefined,
  category: prop.category !== undefined ? {
            set: prop.category 
           } : undefined,
  topics: prop.topics !== undefined ? {
            set: prop.topics 
           } : undefined,
  logo: prop.logo !== undefined ? {
            set: prop.logo 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  assets: prop.assets !== undefined ? {
            set: prop.assets 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_NEWSARTICLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyNewsArticle) {
        return response.data.updateManyNewsArticle;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyNewsArticle:', error);
      throw error;
    }
  },

  /**
   * Delete a single NewsArticle record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted NewsArticle or null.
   */
  async delete(props: NewsArticleType, globalClient?: ApolloClient<any>): Promise<NewsArticleType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_NEWSARTICLE = gql`
      mutation deleteOneNewsArticle($where: NewsArticleWhereUniqueInput!) {
        deleteOneNewsArticle(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_NEWSARTICLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneNewsArticle) {
        return response.data.deleteOneNewsArticle;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneNewsArticle:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single NewsArticle record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved NewsArticle or null.
   */
  async get(props: NewsArticleType, globalClient?: ApolloClient<any>): Promise<NewsArticleType | null> {

    const client = globalClient || importedClient;

    const GET_NEWSARTICLE = gql`
      query getNewsArticle($where: NewsArticleWhereUniqueInput!) {
        getNewsArticle(where: $where) {
          ${selectionSet}
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
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_NEWSARTICLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getNewsArticle ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No NewsArticle found') {
        return null;
      } else {
        console.error('Error in getNewsArticle:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all NewsArticles records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of NewsArticle records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<NewsArticleType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_NEWSARTICLE = gql`
      query getAllNewsArticle {
        newsArticles {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_NEWSARTICLE });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.newsArticles ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No NewsArticle found') {
        return null;
      } else {
        console.error('Error in getNewsArticle:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple NewsArticle records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found NewsArticle records or null.
   */
  async findMany(props: NewsArticleType, globalClient?: ApolloClient<any>): Promise<NewsArticleType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_NEWSARTICLE = gql`
      query findManyNewsArticle($where: NewsArticleWhereInput!) {
        newsArticles(where: $where) {
          ${selectionSet}
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
      const response = await client.query({ query: FIND_MANY_NEWSARTICLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.NewsArticles) {
        return response.data.newsArticles;
      } else {
       return [] as NewsArticleType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No NewsArticle found') {
        return null;
      } else {
        console.error('Error in getNewsArticle:', error);
        throw error;
      }
    }
  }
};
