

import { NewsArticleAssetSentiment as NewsArticleAssetSentimentType } from './generated/typegraphql-prisma/models/NewsArticleAssetSentiment';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the NewsArticleAssetSentiment model.
 */

export const NewsArticleAssetSentiment = {
  /**
   * Create a new NewsArticleAssetSentiment record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created NewsArticleAssetSentiment or null.
   */
  async create(props: NewsArticleAssetSentimentType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType> {
    const CREATE_ONE_NEWSARTICLEASSETSENTIMENT = gql`
      mutation createOneNewsArticleAssetSentiment($data: NewsArticleAssetSentimentCreateInput!) {
        createOneNewsArticleAssetSentiment(data: $data) {
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
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
          url: props.url !== undefined ? props.url : undefined,
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
        dividendDate: props.asset.dividendDate !== undefined ? props.asset.dividendDate : undefined,
        exDividendDate: props.asset.exDividendDate !== undefined ? props.asset.exDividendDate : undefined,
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
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: NewsArticleAssetSentimentType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
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
   * @param client - Apollo Client instance.
   * @returns The updated NewsArticleAssetSentiment or null.
   */
  async update(props: NewsArticleAssetSentimentType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType> {
    const UPDATE_ONE_NEWSARTICLEASSETSENTIMENT = gql`
      mutation updateOneNewsArticleAssetSentiment($data: NewsArticleAssetSentimentUpdateInput!, $where: NewsArticleAssetSentimentWhereUniqueInput!) {
        updateOneNewsArticleAssetSentiment(data: $data, where: $where) {
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
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
        url: props.url !== undefined ? props.url : undefined,
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
        symbol: props.asset.symbol !== undefined ? {
            equals: props.asset.symbol 
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
        description: props.asset.description !== undefined ? {
            set: props.asset.description  
           } : undefined,
        cik: props.asset.cik !== undefined ? {
            set: props.asset.cik  
           } : undefined,
        exchange: props.asset.exchange !== undefined ? {
            set: props.asset.exchange  
           } : undefined,
        currency: props.asset.currency !== undefined ? {
            set: props.asset.currency  
           } : undefined,
        country: props.asset.country !== undefined ? {
            set: props.asset.country  
           } : undefined,
        sector: props.asset.sector !== undefined ? {
            set: props.asset.sector  
           } : undefined,
        industry: props.asset.industry !== undefined ? {
            set: props.asset.industry  
           } : undefined,
        address: props.asset.address !== undefined ? {
            set: props.asset.address  
           } : undefined,
        officialSite: props.asset.officialSite !== undefined ? {
            set: props.asset.officialSite  
           } : undefined,
        fiscalYearEnd: props.asset.fiscalYearEnd !== undefined ? {
            set: props.asset.fiscalYearEnd  
           } : undefined,
        latestQuarter: props.asset.latestQuarter !== undefined ? {
            set: props.asset.latestQuarter  
           } : undefined,
        marketCapitalization: props.asset.marketCapitalization !== undefined ? {
            set: props.asset.marketCapitalization  
           } : undefined,
        ebitda: props.asset.ebitda !== undefined ? {
            set: props.asset.ebitda  
           } : undefined,
        peRatio: props.asset.peRatio !== undefined ? {
            set: props.asset.peRatio  
           } : undefined,
        pegRatio: props.asset.pegRatio !== undefined ? {
            set: props.asset.pegRatio  
           } : undefined,
        bookValue: props.asset.bookValue !== undefined ? {
            set: props.asset.bookValue  
           } : undefined,
        dividendPerShare: props.asset.dividendPerShare !== undefined ? {
            set: props.asset.dividendPerShare  
           } : undefined,
        dividendYield: props.asset.dividendYield !== undefined ? {
            set: props.asset.dividendYield  
           } : undefined,
        eps: props.asset.eps !== undefined ? {
            set: props.asset.eps  
           } : undefined,
        revenuePerShareTTM: props.asset.revenuePerShareTTM !== undefined ? {
            set: props.asset.revenuePerShareTTM  
           } : undefined,
        profitMargin: props.asset.profitMargin !== undefined ? {
            set: props.asset.profitMargin  
           } : undefined,
        operatingMarginTTM: props.asset.operatingMarginTTM !== undefined ? {
            set: props.asset.operatingMarginTTM  
           } : undefined,
        returnOnAssetsTTM: props.asset.returnOnAssetsTTM !== undefined ? {
            set: props.asset.returnOnAssetsTTM  
           } : undefined,
        returnOnEquityTTM: props.asset.returnOnEquityTTM !== undefined ? {
            set: props.asset.returnOnEquityTTM  
           } : undefined,
        revenueTTM: props.asset.revenueTTM !== undefined ? {
            set: props.asset.revenueTTM  
           } : undefined,
        grossProfitTTM: props.asset.grossProfitTTM !== undefined ? {
            set: props.asset.grossProfitTTM  
           } : undefined,
        dilutedEPSTTM: props.asset.dilutedEPSTTM !== undefined ? {
            set: props.asset.dilutedEPSTTM  
           } : undefined,
        quarterlyEarningsGrowthYOY: props.asset.quarterlyEarningsGrowthYOY !== undefined ? {
            set: props.asset.quarterlyEarningsGrowthYOY  
           } : undefined,
        quarterlyRevenueGrowthYOY: props.asset.quarterlyRevenueGrowthYOY !== undefined ? {
            set: props.asset.quarterlyRevenueGrowthYOY  
           } : undefined,
        analystTargetPrice: props.asset.analystTargetPrice !== undefined ? {
            set: props.asset.analystTargetPrice  
           } : undefined,
        analystRatingStrongBuy: props.asset.analystRatingStrongBuy !== undefined ? {
            set: props.asset.analystRatingStrongBuy  
           } : undefined,
        analystRatingBuy: props.asset.analystRatingBuy !== undefined ? {
            set: props.asset.analystRatingBuy  
           } : undefined,
        analystRatingHold: props.asset.analystRatingHold !== undefined ? {
            set: props.asset.analystRatingHold  
           } : undefined,
        analystRatingSell: props.asset.analystRatingSell !== undefined ? {
            set: props.asset.analystRatingSell  
           } : undefined,
        analystRatingStrongSell: props.asset.analystRatingStrongSell !== undefined ? {
            set: props.asset.analystRatingStrongSell  
           } : undefined,
        trailingPE: props.asset.trailingPE !== undefined ? {
            set: props.asset.trailingPE  
           } : undefined,
        forwardPE: props.asset.forwardPE !== undefined ? {
            set: props.asset.forwardPE  
           } : undefined,
        priceToSalesRatioTTM: props.asset.priceToSalesRatioTTM !== undefined ? {
            set: props.asset.priceToSalesRatioTTM  
           } : undefined,
        priceToBookRatio: props.asset.priceToBookRatio !== undefined ? {
            set: props.asset.priceToBookRatio  
           } : undefined,
        evToRevenue: props.asset.evToRevenue !== undefined ? {
            set: props.asset.evToRevenue  
           } : undefined,
        evToEbitda: props.asset.evToEbitda !== undefined ? {
            set: props.asset.evToEbitda  
           } : undefined,
        beta: props.asset.beta !== undefined ? {
            set: props.asset.beta  
           } : undefined,
        week52High: props.asset.week52High !== undefined ? {
            set: props.asset.week52High  
           } : undefined,
        week52Low: props.asset.week52Low !== undefined ? {
            set: props.asset.week52Low  
           } : undefined,
        day50MovingAverage: props.asset.day50MovingAverage !== undefined ? {
            set: props.asset.day50MovingAverage  
           } : undefined,
        day200MovingAverage: props.asset.day200MovingAverage !== undefined ? {
            set: props.asset.day200MovingAverage  
           } : undefined,
        sharesOutstanding: props.asset.sharesOutstanding !== undefined ? {
            set: props.asset.sharesOutstanding  
           } : undefined,
        dividendDate: props.asset.dividendDate !== undefined ? {
            set: props.asset.dividendDate  
           } : undefined,
        exDividendDate: props.asset.exDividendDate !== undefined ? {
            set: props.asset.exDividendDate  
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
        dividendDate: props.asset.dividendDate !== undefined ? props.asset.dividendDate : undefined,
        exDividendDate: props.asset.exDividendDate !== undefined ? props.asset.exDividendDate : undefined,
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
   * Delete a single NewsArticleAssetSentiment record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The deleted NewsArticleAssetSentiment or null.
   */
  async delete(props: NewsArticleAssetSentimentType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType> {
    const DELETE_ONE_NEWSARTICLEASSETSENTIMENT = gql`
      mutation deleteOneNewsArticleAssetSentiment($where: NewsArticleAssetSentimentWhereUniqueInput!) {
        deleteOneNewsArticleAssetSentiment(where: $where) {
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
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
      const response = await client.mutate({ mutation: DELETE_ONE_NEWSARTICLEASSETSENTIMENT, variables });
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
   * @param client - Apollo Client instance.
   * @returns The retrieved NewsArticleAssetSentiment or null.
   */
  async get(props: NewsArticleAssetSentimentType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType> {
    const GET_NEWSARTICLEASSETSENTIMENT = gql`
      query getNewsArticleAssetSentiment($where: NewsArticleAssetSentimentWhereInput!) {
        getNewsArticleAssetSentiment(where: $where) {
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
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
        url: props.url !== undefined ? {
            equals: props.url 
           } : undefined,
      },
};
    try {
      const response = await client.query({ query: GET_NEWSARTICLEASSETSENTIMENT, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getNewsArticleAssetSentiment ?? null;
    } catch (error) {
      console.error('Error in getNewsArticleAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Retrieve all NewsArticleAssetSentiments records.
   * @param client - Apollo Client instance.
   * @returns An array of NewsArticleAssetSentiment records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType[] | null> {
    const GET_ALL_NEWSARTICLEASSETSENTIMENT = gql`
      query getAllNewsArticleAssetSentiment {
        newsArticleAssetSentiments {
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
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
      const response = await client.query({ query: GET_ALL_NEWSARTICLEASSETSENTIMENT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.newsArticleAssetSentiments ?? null;
    } catch (error) {
      console.error('Error in getAllNewsArticleAssetSentiment:', error);
      throw error;
    }
  },

  /**
   * Find multiple NewsArticleAssetSentiment records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found NewsArticleAssetSentiment records or null.
   */
  async findMany(props: NewsArticleAssetSentimentType, client: ApolloClient<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType[]> {
    const FIND_MANY_NEWSARTICLEASSETSENTIMENT = gql`
      query findManyNewsArticleAssetSentiment($where: NewsArticleAssetSentimentWhereInput!) {
        newsArticleAssetSentiments(where: $where) {
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
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
      console.error('Error in findManyNewsArticleAssetSentiment:', error);
      throw error;
    }
  }
};
