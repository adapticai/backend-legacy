
  
import { NewsArticleAssetSentiment as NewsArticleAssetSentimentType } from './generated/typegraphql-prisma/models/NewsArticleAssetSentiment';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the NewsArticleAssetSentiment model.
   */

  const selectionSet = `
    
  id
  assetId
  newsArticleId
  url
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
  }
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

  `;

  export const NewsArticleAssetSentiment = {

    /**
     * Create a new NewsArticleAssetSentiment record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created NewsArticleAssetSentiment or null.
     */

    async create(props: NewsArticleAssetSentimentType, globalClient?: ApolloClient<any>): Promise<NewsArticleAssetSentimentType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_NEWSARTICLEASSETSENTIMENT = gql`
        mutation createOneNewsArticleAssetSentiment($data: NewsArticleAssetSentimentCreateInput!) {
          createOneNewsArticleAssetSentiment(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            url: props.url !== undefined ? props.url : undefined,
  relevancyScore: props.relevancyScore !== undefined ? props.relevancyScore : undefined,
  sentimentScore: props.sentimentScore !== undefined ? props.sentimentScore : undefined,
  sentimentLabel: props.sentimentLabel !== undefined ? props.sentimentLabel : undefined,
  news: props.news ? 
    typeof props.news === 'object' && Object.keys(props.news).length === 1 && Object.keys(props.news)[0] === 'id'
    ? { connect: {
        id: props.news.id
        }
      }
    : { connectOrCreate: {
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
        authors: props.news.authors !== undefined ? {
            set: props.news.authors
          } : undefined,
        summary: props.news.summary !== undefined ? props.news.summary : undefined,
        bannerImage: props.news.bannerImage !== undefined ? props.news.bannerImage : undefined,
        timePublished: props.news.timePublished !== undefined ? props.news.timePublished : undefined,
        category: props.news.category !== undefined ? props.news.category : undefined,
        topics: props.news.topics !== undefined ? {
            set: props.news.topics
          } : undefined,
        logo: props.news.logo !== undefined ? props.news.logo : undefined,
      },
    }
  } : undefined,
  asset: props.asset ? 
    typeof props.asset === 'object' && Object.keys(props.asset).length === 1 && Object.keys(props.asset)[0] === 'id'
    ? { connect: {
        id: props.asset.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.asset.id !== undefined ? props.asset.id : undefined,
        symbol: props.asset.symbol !== undefined ? props.asset.symbol : undefined,
        name: props.asset.name !== undefined ? props.asset.name : undefined,
      },
      create: {
        symbol: props.asset.symbol !== undefined ? props.asset.symbol : undefined,
        name: props.asset.name !== undefined ? props.asset.name : undefined,
        type: props.asset.type !== undefined ? props.asset.type : undefined,
        logoUrl: props.asset.logoUrl !== undefined ? props.asset.logoUrl : undefined,
        description: props.asset.description !== undefined ? props.asset.description : undefined,
        cik: props.asset.cik !== undefined ? props.asset.cik : undefined,
        exchange: props.asset.exchange !== undefined ? props.asset.exchange : undefined,
        currency: props.asset.currency !== undefined ? props.asset.currency : undefined,
        country: props.asset.country !== undefined ? props.asset.country : undefined,
        sector: props.asset.sector !== undefined ? props.asset.sector : undefined,
        industry: props.asset.industry !== undefined ? props.asset.industry : undefined,
        address: props.asset.address !== undefined ? props.asset.address : undefined,
        officialSite: props.asset.officialSite !== undefined ? props.asset.officialSite : undefined,
        fiscalYearEnd: props.asset.fiscalYearEnd !== undefined ? props.asset.fiscalYearEnd : undefined,
        latestQuarter: props.asset.latestQuarter !== undefined ? props.asset.latestQuarter : undefined,
        marketCapitalization: props.asset.marketCapitalization !== undefined ? props.asset.marketCapitalization : undefined,
        ebitda: props.asset.ebitda !== undefined ? props.asset.ebitda : undefined,
        peRatio: props.asset.peRatio !== undefined ? props.asset.peRatio : undefined,
        pegRatio: props.asset.pegRatio !== undefined ? props.asset.pegRatio : undefined,
        bookValue: props.asset.bookValue !== undefined ? props.asset.bookValue : undefined,
        dividendPerShare: props.asset.dividendPerShare !== undefined ? props.asset.dividendPerShare : undefined,
        dividendYield: props.asset.dividendYield !== undefined ? props.asset.dividendYield : undefined,
        eps: props.asset.eps !== undefined ? props.asset.eps : undefined,
        revenuePerShareTTM: props.asset.revenuePerShareTTM !== undefined ? props.asset.revenuePerShareTTM : undefined,
        profitMargin: props.asset.profitMargin !== undefined ? props.asset.profitMargin : undefined,
        operatingMarginTTM: props.asset.operatingMarginTTM !== undefined ? props.asset.operatingMarginTTM : undefined,
        returnOnAssetsTTM: props.asset.returnOnAssetsTTM !== undefined ? props.asset.returnOnAssetsTTM : undefined,
        returnOnEquityTTM: props.asset.returnOnEquityTTM !== undefined ? props.asset.returnOnEquityTTM : undefined,
        revenueTTM: props.asset.revenueTTM !== undefined ? props.asset.revenueTTM : undefined,
        grossProfitTTM: props.asset.grossProfitTTM !== undefined ? props.asset.grossProfitTTM : undefined,
        dilutedEPSTTM: props.asset.dilutedEPSTTM !== undefined ? props.asset.dilutedEPSTTM : undefined,
        quarterlyEarningsGrowthYOY: props.asset.quarterlyEarningsGrowthYOY !== undefined ? props.asset.quarterlyEarningsGrowthYOY : undefined,
        quarterlyRevenueGrowthYOY: props.asset.quarterlyRevenueGrowthYOY !== undefined ? props.asset.quarterlyRevenueGrowthYOY : undefined,
        analystTargetPrice: props.asset.analystTargetPrice !== undefined ? props.asset.analystTargetPrice : undefined,
        analystRatingStrongBuy: props.asset.analystRatingStrongBuy !== undefined ? props.asset.analystRatingStrongBuy : undefined,
        analystRatingBuy: props.asset.analystRatingBuy !== undefined ? props.asset.analystRatingBuy : undefined,
        analystRatingHold: props.asset.analystRatingHold !== undefined ? props.asset.analystRatingHold : undefined,
        analystRatingSell: props.asset.analystRatingSell !== undefined ? props.asset.analystRatingSell : undefined,
        analystRatingStrongSell: props.asset.analystRatingStrongSell !== undefined ? props.asset.analystRatingStrongSell : undefined,
        trailingPE: props.asset.trailingPE !== undefined ? props.asset.trailingPE : undefined,
        forwardPE: props.asset.forwardPE !== undefined ? props.asset.forwardPE : undefined,
        priceToSalesRatioTTM: props.asset.priceToSalesRatioTTM !== undefined ? props.asset.priceToSalesRatioTTM : undefined,
        priceToBookRatio: props.asset.priceToBookRatio !== undefined ? props.asset.priceToBookRatio : undefined,
        evToRevenue: props.asset.evToRevenue !== undefined ? props.asset.evToRevenue : undefined,
        evToEbitda: props.asset.evToEbitda !== undefined ? props.asset.evToEbitda : undefined,
        beta: props.asset.beta !== undefined ? props.asset.beta : undefined,
        week52High: props.asset.week52High !== undefined ? props.asset.week52High : undefined,
        week52Low: props.asset.week52Low !== undefined ? props.asset.week52Low : undefined,
        day50MovingAverage: props.asset.day50MovingAverage !== undefined ? props.asset.day50MovingAverage : undefined,
        day200MovingAverage: props.asset.day200MovingAverage !== undefined ? props.asset.day200MovingAverage : undefined,
        sharesOutstanding: props.asset.sharesOutstanding !== undefined ? props.asset.sharesOutstanding : undefined,
        dividendDate: props.asset.dividendDate !== undefined ? props.asset.dividendDate : undefined,
        exDividendDate: props.asset.exDividendDate !== undefined ? props.asset.exDividendDate : undefined,
        askPrice: props.asset.askPrice !== undefined ? props.asset.askPrice : undefined,
        bidPrice: props.asset.bidPrice !== undefined ? props.asset.bidPrice : undefined,
        trades: props.asset.trades !== undefined ? {
            set: props.asset.trades
          } : undefined,
        orders: props.asset.orders !== undefined ? {
            set: props.asset.orders
          } : undefined,
        positions: props.asset.positions !== undefined ? {
            set: props.asset.positions
          } : undefined,
        contracts: props.asset.contracts !== undefined ? {
            set: props.asset.contracts
          } : undefined,
      },
    }
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_NEWSARTICLEASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneNewsArticleAssetSentiment) {
        return response.data.createOneNewsArticleAssetSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneNewsArticleAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Create multiple NewsArticleAssetSentiment records.
   * @param props - Array of NewsArticleAssetSentiment objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: NewsArticleAssetSentimentType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_NEWSARTICLEASSETSENTIMENT = gql`
      mutation createManyNewsArticleAssetSentiment($data: [NewsArticleAssetSentimentCreateManyInput!]!) {
        createManyNewsArticleAssetSentiment(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  newsArticleId: prop.newsArticleId !== undefined ? prop.newsArticleId : undefined,
  url: prop.url !== undefined ? prop.url : undefined,
  relevancyScore: prop.relevancyScore !== undefined ? prop.relevancyScore : undefined,
  sentimentScore: prop.sentimentScore !== undefined ? prop.sentimentScore : undefined,
  sentimentLabel: prop.sentimentLabel !== undefined ? prop.sentimentLabel : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_NEWSARTICLEASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyNewsArticleAssetSentiment) {
        return response.data.createManyNewsArticleAssetSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyNewsArticleAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Update a single NewsArticleAssetSentiment record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated NewsArticleAssetSentiment or null.
   */
  async update(props: NewsArticleAssetSentimentType, globalClient?: ApolloClient<any>): Promise<NewsArticleAssetSentimentType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_NEWSARTICLEASSETSENTIMENT = gql`
      mutation updateOneNewsArticleAssetSentiment($data: NewsArticleAssetSentimentUpdateInput!, $where: NewsArticleAssetSentimentWhereUniqueInput!) {
        updateOneNewsArticleAssetSentiment(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  url: props.url !== undefined ? props.url : undefined,
  newsArticleId: props.newsArticleId !== undefined ? {
    equals: props.newsArticleId 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  url: props.url !== undefined ? {
            set: props.url 
           } : undefined,
  relevancyScore: props.relevancyScore !== undefined ? {
            set: props.relevancyScore 
           } : undefined,
  sentimentScore: props.sentimentScore !== undefined ? {
            set: props.sentimentScore 
           } : undefined,
  sentimentLabel: props.sentimentLabel !== undefined ? {
            set: props.sentimentLabel 
           } : undefined,
  news: props.news !== undefined ? {
            set: props.news 
           } : undefined,
  asset: props.asset !== undefined ? {
            set: props.asset 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_NEWSARTICLEASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneNewsArticleAssetSentiment) {
        return response.data.updateOneNewsArticleAssetSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneNewsArticleAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Upsert a single NewsArticleAssetSentiment record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated NewsArticleAssetSentiment or null.
   */
  async upsert(props: NewsArticleAssetSentimentType, globalClient?: ApolloClient<any>): Promise<NewsArticleAssetSentimentType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_NEWSARTICLEASSETSENTIMENT = gql`
      mutation upsertOneNewsArticleAssetSentiment($where: NewsArticleAssetSentimentWhereUniqueInput!, $create: NewsArticleAssetSentimentCreateInput!, $update: NewsArticleAssetSentimentUpdateInput!) {
        upsertOneNewsArticleAssetSentiment(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  url: props.url !== undefined ? props.url : undefined,
  newsArticleId: props.newsArticleId !== undefined ? {
    equals: props.newsArticleId 
  } : undefined,
      },
      create: {
    url: props.url !== undefined ? props.url : undefined,
  relevancyScore: props.relevancyScore !== undefined ? props.relevancyScore : undefined,
  sentimentScore: props.sentimentScore !== undefined ? props.sentimentScore : undefined,
  sentimentLabel: props.sentimentLabel !== undefined ? props.sentimentLabel : undefined,
  news: props.news ? 
    typeof props.news === 'object' && Object.keys(props.news).length === 1 && Object.keys(props.news)[0] === 'id'
    ? { connect: {
        id: props.news.id
        }
      }
    : { connectOrCreate: {
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
        authors: props.news.authors !== undefined ? {
            set: props.news.authors
          } : undefined,
        summary: props.news.summary !== undefined ? props.news.summary : undefined,
        bannerImage: props.news.bannerImage !== undefined ? props.news.bannerImage : undefined,
        timePublished: props.news.timePublished !== undefined ? props.news.timePublished : undefined,
        category: props.news.category !== undefined ? props.news.category : undefined,
        topics: props.news.topics !== undefined ? {
            set: props.news.topics
          } : undefined,
        logo: props.news.logo !== undefined ? props.news.logo : undefined,
      },
    }
  } : undefined,
  asset: props.asset ? 
    typeof props.asset === 'object' && Object.keys(props.asset).length === 1 && Object.keys(props.asset)[0] === 'id'
    ? { connect: {
        id: props.asset.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.asset.id !== undefined ? props.asset.id : undefined,
        symbol: props.asset.symbol !== undefined ? props.asset.symbol : undefined,
        name: props.asset.name !== undefined ? props.asset.name : undefined,
      },
      create: {
        symbol: props.asset.symbol !== undefined ? props.asset.symbol : undefined,
        name: props.asset.name !== undefined ? props.asset.name : undefined,
        type: props.asset.type !== undefined ? props.asset.type : undefined,
        logoUrl: props.asset.logoUrl !== undefined ? props.asset.logoUrl : undefined,
        description: props.asset.description !== undefined ? props.asset.description : undefined,
        cik: props.asset.cik !== undefined ? props.asset.cik : undefined,
        exchange: props.asset.exchange !== undefined ? props.asset.exchange : undefined,
        currency: props.asset.currency !== undefined ? props.asset.currency : undefined,
        country: props.asset.country !== undefined ? props.asset.country : undefined,
        sector: props.asset.sector !== undefined ? props.asset.sector : undefined,
        industry: props.asset.industry !== undefined ? props.asset.industry : undefined,
        address: props.asset.address !== undefined ? props.asset.address : undefined,
        officialSite: props.asset.officialSite !== undefined ? props.asset.officialSite : undefined,
        fiscalYearEnd: props.asset.fiscalYearEnd !== undefined ? props.asset.fiscalYearEnd : undefined,
        latestQuarter: props.asset.latestQuarter !== undefined ? props.asset.latestQuarter : undefined,
        marketCapitalization: props.asset.marketCapitalization !== undefined ? props.asset.marketCapitalization : undefined,
        ebitda: props.asset.ebitda !== undefined ? props.asset.ebitda : undefined,
        peRatio: props.asset.peRatio !== undefined ? props.asset.peRatio : undefined,
        pegRatio: props.asset.pegRatio !== undefined ? props.asset.pegRatio : undefined,
        bookValue: props.asset.bookValue !== undefined ? props.asset.bookValue : undefined,
        dividendPerShare: props.asset.dividendPerShare !== undefined ? props.asset.dividendPerShare : undefined,
        dividendYield: props.asset.dividendYield !== undefined ? props.asset.dividendYield : undefined,
        eps: props.asset.eps !== undefined ? props.asset.eps : undefined,
        revenuePerShareTTM: props.asset.revenuePerShareTTM !== undefined ? props.asset.revenuePerShareTTM : undefined,
        profitMargin: props.asset.profitMargin !== undefined ? props.asset.profitMargin : undefined,
        operatingMarginTTM: props.asset.operatingMarginTTM !== undefined ? props.asset.operatingMarginTTM : undefined,
        returnOnAssetsTTM: props.asset.returnOnAssetsTTM !== undefined ? props.asset.returnOnAssetsTTM : undefined,
        returnOnEquityTTM: props.asset.returnOnEquityTTM !== undefined ? props.asset.returnOnEquityTTM : undefined,
        revenueTTM: props.asset.revenueTTM !== undefined ? props.asset.revenueTTM : undefined,
        grossProfitTTM: props.asset.grossProfitTTM !== undefined ? props.asset.grossProfitTTM : undefined,
        dilutedEPSTTM: props.asset.dilutedEPSTTM !== undefined ? props.asset.dilutedEPSTTM : undefined,
        quarterlyEarningsGrowthYOY: props.asset.quarterlyEarningsGrowthYOY !== undefined ? props.asset.quarterlyEarningsGrowthYOY : undefined,
        quarterlyRevenueGrowthYOY: props.asset.quarterlyRevenueGrowthYOY !== undefined ? props.asset.quarterlyRevenueGrowthYOY : undefined,
        analystTargetPrice: props.asset.analystTargetPrice !== undefined ? props.asset.analystTargetPrice : undefined,
        analystRatingStrongBuy: props.asset.analystRatingStrongBuy !== undefined ? props.asset.analystRatingStrongBuy : undefined,
        analystRatingBuy: props.asset.analystRatingBuy !== undefined ? props.asset.analystRatingBuy : undefined,
        analystRatingHold: props.asset.analystRatingHold !== undefined ? props.asset.analystRatingHold : undefined,
        analystRatingSell: props.asset.analystRatingSell !== undefined ? props.asset.analystRatingSell : undefined,
        analystRatingStrongSell: props.asset.analystRatingStrongSell !== undefined ? props.asset.analystRatingStrongSell : undefined,
        trailingPE: props.asset.trailingPE !== undefined ? props.asset.trailingPE : undefined,
        forwardPE: props.asset.forwardPE !== undefined ? props.asset.forwardPE : undefined,
        priceToSalesRatioTTM: props.asset.priceToSalesRatioTTM !== undefined ? props.asset.priceToSalesRatioTTM : undefined,
        priceToBookRatio: props.asset.priceToBookRatio !== undefined ? props.asset.priceToBookRatio : undefined,
        evToRevenue: props.asset.evToRevenue !== undefined ? props.asset.evToRevenue : undefined,
        evToEbitda: props.asset.evToEbitda !== undefined ? props.asset.evToEbitda : undefined,
        beta: props.asset.beta !== undefined ? props.asset.beta : undefined,
        week52High: props.asset.week52High !== undefined ? props.asset.week52High : undefined,
        week52Low: props.asset.week52Low !== undefined ? props.asset.week52Low : undefined,
        day50MovingAverage: props.asset.day50MovingAverage !== undefined ? props.asset.day50MovingAverage : undefined,
        day200MovingAverage: props.asset.day200MovingAverage !== undefined ? props.asset.day200MovingAverage : undefined,
        sharesOutstanding: props.asset.sharesOutstanding !== undefined ? props.asset.sharesOutstanding : undefined,
        dividendDate: props.asset.dividendDate !== undefined ? props.asset.dividendDate : undefined,
        exDividendDate: props.asset.exDividendDate !== undefined ? props.asset.exDividendDate : undefined,
        askPrice: props.asset.askPrice !== undefined ? props.asset.askPrice : undefined,
        bidPrice: props.asset.bidPrice !== undefined ? props.asset.bidPrice : undefined,
        trades: props.asset.trades !== undefined ? {
            set: props.asset.trades
          } : undefined,
        orders: props.asset.orders !== undefined ? {
            set: props.asset.orders
          } : undefined,
        positions: props.asset.positions !== undefined ? {
            set: props.asset.positions
          } : undefined,
        contracts: props.asset.contracts !== undefined ? {
            set: props.asset.contracts
          } : undefined,
      },
    }
  } : undefined,
      },
      update: {
  url: props.url !== undefined ? {
            set: props.url 
           } : undefined,
  relevancyScore: props.relevancyScore !== undefined ? {
            set: props.relevancyScore 
           } : undefined,
  sentimentScore: props.sentimentScore !== undefined ? {
            set: props.sentimentScore 
           } : undefined,
  sentimentLabel: props.sentimentLabel !== undefined ? {
            set: props.sentimentLabel 
           } : undefined,
  news: props.news !== undefined ? {
            set: props.news 
           } : undefined,
  asset: props.asset !== undefined ? {
            set: props.asset 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_NEWSARTICLEASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneNewsArticleAssetSentiment) {
        return response.data.upsertOneNewsArticleAssetSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneNewsArticleAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Update multiple NewsArticleAssetSentiment records.
   * @param props - Array of NewsArticleAssetSentiment objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: NewsArticleAssetSentimentType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_NEWSARTICLEASSETSENTIMENT = gql`
      mutation updateManyNewsArticleAssetSentiment($data: [NewsArticleAssetSentimentCreateManyInput!]!) {
        updateManyNewsArticleAssetSentiment(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  url: prop.url !== undefined ? prop.url : undefined,
  newsArticleId: prop.newsArticleId !== undefined ? {
    equals: prop.newsArticleId 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  url: prop.url !== undefined ? {
            set: prop.url 
           } : undefined,
  relevancyScore: prop.relevancyScore !== undefined ? {
            set: prop.relevancyScore 
           } : undefined,
  sentimentScore: prop.sentimentScore !== undefined ? {
            set: prop.sentimentScore 
           } : undefined,
  sentimentLabel: prop.sentimentLabel !== undefined ? {
            set: prop.sentimentLabel 
           } : undefined,
  news: prop.news !== undefined ? {
            set: prop.news 
           } : undefined,
  asset: prop.asset !== undefined ? {
            set: prop.asset 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_NEWSARTICLEASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyNewsArticleAssetSentiment) {
        return response.data.updateManyNewsArticleAssetSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyNewsArticleAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Delete a single NewsArticleAssetSentiment record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted NewsArticleAssetSentiment or null.
   */
  async delete(props: NewsArticleAssetSentimentType, globalClient?: ApolloClient<any>): Promise<NewsArticleAssetSentimentType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_NEWSARTICLEASSETSENTIMENT = gql`
      mutation deleteOneNewsArticleAssetSentiment($where: NewsArticleAssetSentimentWhereUniqueInput!) {
        deleteOneNewsArticleAssetSentiment(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_NEWSARTICLEASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneNewsArticleAssetSentiment) {
        return response.data.deleteOneNewsArticleAssetSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneNewsArticleAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single NewsArticleAssetSentiment record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved NewsArticleAssetSentiment or null.
   */
  async get(props: NewsArticleAssetSentimentType, globalClient?: ApolloClient<any>): Promise<NewsArticleAssetSentimentType | null> {

    const client = globalClient || importedClient;

    const GET_NEWSARTICLEASSETSENTIMENT = gql`
      query getNewsArticleAssetSentiment($where: NewsArticleAssetSentimentWhereUniqueInput!) {
        getNewsArticleAssetSentiment(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  url: props.url !== undefined ? props.url : undefined,
  newsArticleId: props.newsArticleId !== undefined ? {
    equals: props.newsArticleId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_NEWSARTICLEASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getNewsArticleAssetSentiment ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No NewsArticleAssetSentiment found') {
        return null;
      } else {
        console.error('Error in getNewsArticleAssetSentiment:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all NewsArticleAssetSentiments records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of NewsArticleAssetSentiment records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<NewsArticleAssetSentimentType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_NEWSARTICLEASSETSENTIMENT = gql`
      query getAllNewsArticleAssetSentiment {
        newsArticleAssetSentiments {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_NEWSARTICLEASSETSENTIMENT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.newsArticleAssetSentiments ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No NewsArticleAssetSentiment found') {
        return null;
      } else {
        console.error('Error in getNewsArticleAssetSentiment:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple NewsArticleAssetSentiment records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found NewsArticleAssetSentiment records or null.
   */
  async findMany(props: NewsArticleAssetSentimentType, globalClient?: ApolloClient<any>): Promise<NewsArticleAssetSentimentType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_NEWSARTICLEASSETSENTIMENT = gql`
      query findManyNewsArticleAssetSentiment($where: NewsArticleAssetSentimentWhereInput!) {
        newsArticleAssetSentiments(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  newsArticleId: props.newsArticleId !== undefined ? {
    equals: props.newsArticleId 
  } : undefined,
  url: props.url !== undefined ? {
    equals: props.url 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_NEWSARTICLEASSETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.NewsArticleAssetSentiments) {
        return response.data.newsArticleAssetSentiments;
      } else {
       return [] as NewsArticleAssetSentimentType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No NewsArticleAssetSentiment found') {
        return null;
      } else {
        console.error('Error in getNewsArticleAssetSentiment:', error);
        throw error;
      }
    }
  }
};
