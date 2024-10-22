

import { NewsArticle as NewsArticleType } from './generated/typegraphql-prisma/models/NewsArticle';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the NewsArticle model.
 */

export const NewsArticle = {

  /**
   * Create a new NewsArticle record.
   * @param props - Properties for the new record.
   * @returns The created NewsArticle or null.
   */

  async create(props: NewsArticleType): Promise<NewsArticleType> {

  const client = createApolloClient();

  const CREATE_ONE_NEWSARTICLE = gql`
      mutation createOneNewsArticle($data: NewsArticleCreateInput!) {
        createOneNewsArticle(data: $data) {
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
            news {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                  type
                  APIKey
                  APISecret
                  configuration
                  marketOpen
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
                    currentAccount
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
                    alpacaAccounts {
                      id
                    }
                  }
                  userId
                  createdAt
                  updatedAt
                  trades {
                    id
                  }
                  orders {
                    id
                    alpacaAccountId
                    assetId
                    qty
                    notional
                    side
                    type
                    timeInForce
                    limitPrice
                    stopPrice
                    trailPrice
                    trailPercent
                    extendedHours
                    clientOrderId
                    status
                    createdAt
                    updatedAt
                    submittedAt
                    filledAt
                    filledAvgPrice
                    actionId
                    alpacaAccount {
                      id
                    }
                    action {
                      id
                    }
                    asset {
                      id
                    }
                    fee
                  }
                  positions {
                    id
                    assetId
                    asset {
                      id
                    }
                    averageEntryPrice
                    qty
                    qtyAvailable
                    marketValue
                    costBasis
                    unrealizedPL
                    unrealizedPLPC
                    unrealisedIntradayPL
                    unrealisedIntradayPLPC
                    currentPrice
                    lastTradePrice
                    changeToday
                    assetMarginable
                    alpacaAccount {
                      id
                    }
                    alpacaAccountId
                  }
                  alerts {
                    id
                    alpacaAccountId
                    message
                    type
                    isRead
                    createdAt
                    updatedAt
                    alpacaAccount {
                      id
                    }
                  }
                }
                asset {
                  id
                }
                optionContractType
                actions {
                  id
                  sequence
                  tradeId
                  type
                  note
                  status
                  fee
                  trade {
                    id
                  }
                  order {
                    id
                  }
                }
              }
              orders {
                id
              }
              positions {
                id
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
      },
      create: {
        url: item.url !== undefined ? item.url : undefined,
        relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
        sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
        sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
          description: item.asset.description !== undefined ? item.asset.description : undefined,
          cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
          exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
          currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
          country: item.asset.country !== undefined ? item.asset.country : undefined,
          sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
          industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
          address: item.asset.address !== undefined ? item.asset.address : undefined,
          officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
          fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
          latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
          marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
          ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
          peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
          pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
          bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
          dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
          dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
          eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
          revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
          profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
          operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
          revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
          grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
          analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
          analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
          analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
          trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
          forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
          priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
          evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
          evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
          beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
          week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
          week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
          day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
          day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
          sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
          dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
          exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
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
   * @returns The count of created records or null.
   */
  async createMany(props: NewsArticleType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

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
   * @returns The updated NewsArticle or null.
   */
  async update(props: NewsArticleType): Promise<NewsArticleType> {

    const client = createApolloClient();

      const UPDATE_ONE_NEWSARTICLE = gql`
      mutation updateOneNewsArticle($data: NewsArticleUpdateInput!, $where: NewsArticleWhereUniqueInput!) {
        updateOneNewsArticle(data: $data, where: $where) {
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
            news {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                  type
                  APIKey
                  APISecret
                  configuration
                  marketOpen
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
                    currentAccount
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
                    alpacaAccounts {
                      id
                    }
                  }
                  userId
                  createdAt
                  updatedAt
                  trades {
                    id
                  }
                  orders {
                    id
                    alpacaAccountId
                    assetId
                    qty
                    notional
                    side
                    type
                    timeInForce
                    limitPrice
                    stopPrice
                    trailPrice
                    trailPercent
                    extendedHours
                    clientOrderId
                    status
                    createdAt
                    updatedAt
                    submittedAt
                    filledAt
                    filledAvgPrice
                    actionId
                    alpacaAccount {
                      id
                    }
                    action {
                      id
                    }
                    asset {
                      id
                    }
                    fee
                  }
                  positions {
                    id
                    assetId
                    asset {
                      id
                    }
                    averageEntryPrice
                    qty
                    qtyAvailable
                    marketValue
                    costBasis
                    unrealizedPL
                    unrealizedPLPC
                    unrealisedIntradayPL
                    unrealisedIntradayPLPC
                    currentPrice
                    lastTradePrice
                    changeToday
                    assetMarginable
                    alpacaAccount {
                      id
                    }
                    alpacaAccountId
                  }
                  alerts {
                    id
                    alpacaAccountId
                    message
                    type
                    isRead
                    createdAt
                    updatedAt
                    alpacaAccount {
                      id
                    }
                  }
                }
                asset {
                  id
                }
                optionContractType
                actions {
                  id
                  sequence
                  tradeId
                  type
                  note
                  status
                  fee
                  trade {
                    id
                  }
                  order {
                    id
                  }
                }
              }
              orders {
                id
              }
              positions {
                id
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
  logo: props.logo !== undefined ? {
            set: props.logo 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  assets: props.assets ? {
    upsert: props.assets.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        url: item.url !== undefined ? item.url : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        url: item.url !== undefined ? {
            set: item.url  
           } : undefined,
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
          symbol: item.asset.symbol !== undefined ? {
              equals: item.asset.symbol 
             } : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        update: {
          id: item.asset.id !== undefined ? {
              set: item.asset.id  
             } : undefined,
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
          description: item.asset.description !== undefined ? {
              set: item.asset.description  
             } : undefined,
          cik: item.asset.cik !== undefined ? {
              set: item.asset.cik  
             } : undefined,
          exchange: item.asset.exchange !== undefined ? {
              set: item.asset.exchange  
             } : undefined,
          currency: item.asset.currency !== undefined ? {
              set: item.asset.currency  
             } : undefined,
          country: item.asset.country !== undefined ? {
              set: item.asset.country  
             } : undefined,
          sector: item.asset.sector !== undefined ? {
              set: item.asset.sector  
             } : undefined,
          industry: item.asset.industry !== undefined ? {
              set: item.asset.industry  
             } : undefined,
          address: item.asset.address !== undefined ? {
              set: item.asset.address  
             } : undefined,
          officialSite: item.asset.officialSite !== undefined ? {
              set: item.asset.officialSite  
             } : undefined,
          fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? {
              set: item.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: item.asset.latestQuarter !== undefined ? {
              set: item.asset.latestQuarter  
             } : undefined,
          marketCapitalization: item.asset.marketCapitalization !== undefined ? {
              set: item.asset.marketCapitalization  
             } : undefined,
          ebitda: item.asset.ebitda !== undefined ? {
              set: item.asset.ebitda  
             } : undefined,
          peRatio: item.asset.peRatio !== undefined ? {
              set: item.asset.peRatio  
             } : undefined,
          pegRatio: item.asset.pegRatio !== undefined ? {
              set: item.asset.pegRatio  
             } : undefined,
          bookValue: item.asset.bookValue !== undefined ? {
              set: item.asset.bookValue  
             } : undefined,
          dividendPerShare: item.asset.dividendPerShare !== undefined ? {
              set: item.asset.dividendPerShare  
             } : undefined,
          dividendYield: item.asset.dividendYield !== undefined ? {
              set: item.asset.dividendYield  
             } : undefined,
          eps: item.asset.eps !== undefined ? {
              set: item.asset.eps  
             } : undefined,
          revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? {
              set: item.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: item.asset.profitMargin !== undefined ? {
              set: item.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? {
              set: item.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? {
              set: item.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? {
              set: item.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: item.asset.revenueTTM !== undefined ? {
              set: item.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: item.asset.grossProfitTTM !== undefined ? {
              set: item.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? {
              set: item.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: item.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: item.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: item.asset.analystTargetPrice !== undefined ? {
              set: item.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? {
              set: item.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: item.asset.analystRatingBuy !== undefined ? {
              set: item.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: item.asset.analystRatingHold !== undefined ? {
              set: item.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: item.asset.analystRatingSell !== undefined ? {
              set: item.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? {
              set: item.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: item.asset.trailingPE !== undefined ? {
              set: item.asset.trailingPE  
             } : undefined,
          forwardPE: item.asset.forwardPE !== undefined ? {
              set: item.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? {
              set: item.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: item.asset.priceToBookRatio !== undefined ? {
              set: item.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: item.asset.evToRevenue !== undefined ? {
              set: item.asset.evToRevenue  
             } : undefined,
          evToEbitda: item.asset.evToEbitda !== undefined ? {
              set: item.asset.evToEbitda  
             } : undefined,
          beta: item.asset.beta !== undefined ? {
              set: item.asset.beta  
             } : undefined,
          week52High: item.asset.week52High !== undefined ? {
              set: item.asset.week52High  
             } : undefined,
          week52Low: item.asset.week52Low !== undefined ? {
              set: item.asset.week52Low  
             } : undefined,
          day50MovingAverage: item.asset.day50MovingAverage !== undefined ? {
              set: item.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: item.asset.day200MovingAverage !== undefined ? {
              set: item.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: item.asset.sharesOutstanding !== undefined ? {
              set: item.asset.sharesOutstanding  
             } : undefined,
          dividendDate: item.asset.dividendDate !== undefined ? {
              set: item.asset.dividendDate  
             } : undefined,
          exDividendDate: item.asset.exDividendDate !== undefined ? {
              set: item.asset.exDividendDate  
             } : undefined,
          sellPrice: item.asset.sellPrice !== undefined ? {
              set: item.asset.sellPrice  
             } : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? {
              set: item.asset.buyPrice  
             } : undefined,
      trades: item.asset.trades ? {
        upsert: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            price: item.price !== undefined ? {
                set: item.price  
               } : undefined,
            total: item.total !== undefined ? {
                set: item.total  
               } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal  
               } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy  
               } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis  
               } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence  
               } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            optionContractType: item.optionContractType !== undefined ? {
                set: item.optionContractType  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? {
        upsert: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            notional: item.notional !== undefined ? {
                set: item.notional  
               } : undefined,
            side: item.side !== undefined ? {
                set: item.side  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce  
               } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice  
               } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice  
               } : undefined,
            trailPrice: item.trailPrice !== undefined ? {
                set: item.trailPrice  
               } : undefined,
            trailPercent: item.trailPercent !== undefined ? {
                set: item.trailPercent  
               } : undefined,
            extendedHours: item.extendedHours !== undefined ? {
                set: item.extendedHours  
               } : undefined,
            clientOrderId: item.clientOrderId !== undefined ? {
                set: item.clientOrderId  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            submittedAt: item.submittedAt !== undefined ? {
                set: item.submittedAt  
               } : undefined,
            filledAt: item.filledAt !== undefined ? {
                set: item.filledAt  
               } : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? {
                set: item.filledAvgPrice  
               } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? {
        upsert: item.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            averageEntryPrice: item.averageEntryPrice !== undefined ? {
                set: item.averageEntryPrice  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? {
                set: item.qtyAvailable  
               } : undefined,
            marketValue: item.marketValue !== undefined ? {
                set: item.marketValue  
               } : undefined,
            costBasis: item.costBasis !== undefined ? {
                set: item.costBasis  
               } : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? {
                set: item.unrealizedPL  
               } : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? {
                set: item.unrealizedPLPC  
               } : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? {
                set: item.unrealisedIntradayPL  
               } : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? {
                set: item.unrealisedIntradayPLPC  
               } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice  
               } : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? {
                set: item.lastTradePrice  
               } : undefined,
            changeToday: item.changeToday !== undefined ? {
                set: item.changeToday  
               } : undefined,
            assetMarginable: item.assetMarginable !== undefined ? {
                set: item.assetMarginable  
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
          description: item.asset.description !== undefined ? item.asset.description : undefined,
          cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
          exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
          currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
          country: item.asset.country !== undefined ? item.asset.country : undefined,
          sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
          industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
          address: item.asset.address !== undefined ? item.asset.address : undefined,
          officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
          fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
          latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
          marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
          ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
          peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
          pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
          bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
          dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
          dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
          eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
          revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
          profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
          operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
          revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
          grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
          analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
          analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
          analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
          trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
          forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
          priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
          evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
          evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
          beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
          week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
          week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
          day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
          day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
          sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
          dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
          exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        url: item.url !== undefined ? item.url : undefined,
        relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
        sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
        sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
          description: item.asset.description !== undefined ? item.asset.description : undefined,
          cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
          exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
          currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
          country: item.asset.country !== undefined ? item.asset.country : undefined,
          sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
          industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
          address: item.asset.address !== undefined ? item.asset.address : undefined,
          officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
          fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
          latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
          marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
          ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
          peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
          pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
          bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
          dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
          dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
          eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
          revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
          profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
          operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
          revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
          grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
          analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
          analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
          analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
          trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
          forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
          priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
          evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
          evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
          beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
          week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
          week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
          day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
          day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
          sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
          dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
          exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
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
   * Update multiple NewsArticle records.
   * @param props - Array of NewsArticle objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: NewsArticleType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

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
  logo: prop.logo !== undefined ? {
            set: prop.logo 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  assets: prop.assets ? {
    upsert: prop.assets.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        url: item.url !== undefined ? item.url : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        url: item.url !== undefined ? {
            set: item.url  
           } : undefined,
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
          symbol: item.asset.symbol !== undefined ? {
              equals: item.asset.symbol 
             } : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        update: {
          id: item.asset.id !== undefined ? {
              set: item.asset.id  
             } : undefined,
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
          description: item.asset.description !== undefined ? {
              set: item.asset.description  
             } : undefined,
          cik: item.asset.cik !== undefined ? {
              set: item.asset.cik  
             } : undefined,
          exchange: item.asset.exchange !== undefined ? {
              set: item.asset.exchange  
             } : undefined,
          currency: item.asset.currency !== undefined ? {
              set: item.asset.currency  
             } : undefined,
          country: item.asset.country !== undefined ? {
              set: item.asset.country  
             } : undefined,
          sector: item.asset.sector !== undefined ? {
              set: item.asset.sector  
             } : undefined,
          industry: item.asset.industry !== undefined ? {
              set: item.asset.industry  
             } : undefined,
          address: item.asset.address !== undefined ? {
              set: item.asset.address  
             } : undefined,
          officialSite: item.asset.officialSite !== undefined ? {
              set: item.asset.officialSite  
             } : undefined,
          fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? {
              set: item.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: item.asset.latestQuarter !== undefined ? {
              set: item.asset.latestQuarter  
             } : undefined,
          marketCapitalization: item.asset.marketCapitalization !== undefined ? {
              set: item.asset.marketCapitalization  
             } : undefined,
          ebitda: item.asset.ebitda !== undefined ? {
              set: item.asset.ebitda  
             } : undefined,
          peRatio: item.asset.peRatio !== undefined ? {
              set: item.asset.peRatio  
             } : undefined,
          pegRatio: item.asset.pegRatio !== undefined ? {
              set: item.asset.pegRatio  
             } : undefined,
          bookValue: item.asset.bookValue !== undefined ? {
              set: item.asset.bookValue  
             } : undefined,
          dividendPerShare: item.asset.dividendPerShare !== undefined ? {
              set: item.asset.dividendPerShare  
             } : undefined,
          dividendYield: item.asset.dividendYield !== undefined ? {
              set: item.asset.dividendYield  
             } : undefined,
          eps: item.asset.eps !== undefined ? {
              set: item.asset.eps  
             } : undefined,
          revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? {
              set: item.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: item.asset.profitMargin !== undefined ? {
              set: item.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? {
              set: item.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? {
              set: item.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? {
              set: item.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: item.asset.revenueTTM !== undefined ? {
              set: item.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: item.asset.grossProfitTTM !== undefined ? {
              set: item.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? {
              set: item.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: item.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: item.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: item.asset.analystTargetPrice !== undefined ? {
              set: item.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? {
              set: item.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: item.asset.analystRatingBuy !== undefined ? {
              set: item.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: item.asset.analystRatingHold !== undefined ? {
              set: item.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: item.asset.analystRatingSell !== undefined ? {
              set: item.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? {
              set: item.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: item.asset.trailingPE !== undefined ? {
              set: item.asset.trailingPE  
             } : undefined,
          forwardPE: item.asset.forwardPE !== undefined ? {
              set: item.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? {
              set: item.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: item.asset.priceToBookRatio !== undefined ? {
              set: item.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: item.asset.evToRevenue !== undefined ? {
              set: item.asset.evToRevenue  
             } : undefined,
          evToEbitda: item.asset.evToEbitda !== undefined ? {
              set: item.asset.evToEbitda  
             } : undefined,
          beta: item.asset.beta !== undefined ? {
              set: item.asset.beta  
             } : undefined,
          week52High: item.asset.week52High !== undefined ? {
              set: item.asset.week52High  
             } : undefined,
          week52Low: item.asset.week52Low !== undefined ? {
              set: item.asset.week52Low  
             } : undefined,
          day50MovingAverage: item.asset.day50MovingAverage !== undefined ? {
              set: item.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: item.asset.day200MovingAverage !== undefined ? {
              set: item.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: item.asset.sharesOutstanding !== undefined ? {
              set: item.asset.sharesOutstanding  
             } : undefined,
          dividendDate: item.asset.dividendDate !== undefined ? {
              set: item.asset.dividendDate  
             } : undefined,
          exDividendDate: item.asset.exDividendDate !== undefined ? {
              set: item.asset.exDividendDate  
             } : undefined,
          sellPrice: item.asset.sellPrice !== undefined ? {
              set: item.asset.sellPrice  
             } : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? {
              set: item.asset.buyPrice  
             } : undefined,
      trades: item.asset.trades ? {
        upsert: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            price: item.price !== undefined ? {
                set: item.price  
               } : undefined,
            total: item.total !== undefined ? {
                set: item.total  
               } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal  
               } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy  
               } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis  
               } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence  
               } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            optionContractType: item.optionContractType !== undefined ? {
                set: item.optionContractType  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? {
        upsert: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            notional: item.notional !== undefined ? {
                set: item.notional  
               } : undefined,
            side: item.side !== undefined ? {
                set: item.side  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce  
               } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice  
               } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice  
               } : undefined,
            trailPrice: item.trailPrice !== undefined ? {
                set: item.trailPrice  
               } : undefined,
            trailPercent: item.trailPercent !== undefined ? {
                set: item.trailPercent  
               } : undefined,
            extendedHours: item.extendedHours !== undefined ? {
                set: item.extendedHours  
               } : undefined,
            clientOrderId: item.clientOrderId !== undefined ? {
                set: item.clientOrderId  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            submittedAt: item.submittedAt !== undefined ? {
                set: item.submittedAt  
               } : undefined,
            filledAt: item.filledAt !== undefined ? {
                set: item.filledAt  
               } : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? {
                set: item.filledAvgPrice  
               } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? {
        upsert: item.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            averageEntryPrice: item.averageEntryPrice !== undefined ? {
                set: item.averageEntryPrice  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? {
                set: item.qtyAvailable  
               } : undefined,
            marketValue: item.marketValue !== undefined ? {
                set: item.marketValue  
               } : undefined,
            costBasis: item.costBasis !== undefined ? {
                set: item.costBasis  
               } : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? {
                set: item.unrealizedPL  
               } : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? {
                set: item.unrealizedPLPC  
               } : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? {
                set: item.unrealisedIntradayPL  
               } : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? {
                set: item.unrealisedIntradayPLPC  
               } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice  
               } : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? {
                set: item.lastTradePrice  
               } : undefined,
            changeToday: item.changeToday !== undefined ? {
                set: item.changeToday  
               } : undefined,
            assetMarginable: item.assetMarginable !== undefined ? {
                set: item.assetMarginable  
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
          description: item.asset.description !== undefined ? item.asset.description : undefined,
          cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
          exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
          currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
          country: item.asset.country !== undefined ? item.asset.country : undefined,
          sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
          industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
          address: item.asset.address !== undefined ? item.asset.address : undefined,
          officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
          fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
          latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
          marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
          ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
          peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
          pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
          bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
          dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
          dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
          eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
          revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
          profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
          operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
          revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
          grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
          analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
          analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
          analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
          trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
          forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
          priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
          evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
          evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
          beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
          week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
          week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
          day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
          day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
          sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
          dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
          exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        url: item.url !== undefined ? item.url : undefined,
        relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
        sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
        sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
          description: item.asset.description !== undefined ? item.asset.description : undefined,
          cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
          exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
          currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
          country: item.asset.country !== undefined ? item.asset.country : undefined,
          sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
          industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
          address: item.asset.address !== undefined ? item.asset.address : undefined,
          officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
          fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
          latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
          marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
          ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
          peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
          pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
          bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
          dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
          dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
          eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
          revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
          profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
          operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
          revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
          grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
          analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
          analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
          analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
          trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
          forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
          priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
          evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
          evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
          beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
          week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
          week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
          day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
          day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
          sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
          dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
          exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            optionContractType: item.optionContractType !== undefined ? item.optionContractType : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
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
   * @returns The deleted NewsArticle or null.
   */
  async delete(props: NewsArticleType): Promise<NewsArticleType> {

    const client = createApolloClient();

      const DELETE_ONE_NEWSARTICLE = gql`
      mutation deleteOneNewsArticle($where: NewsArticleWhereUniqueInput!) {
        deleteOneNewsArticle(where: $where) {
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
            news {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                  type
                  APIKey
                  APISecret
                  configuration
                  marketOpen
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
                    currentAccount
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
                    alpacaAccounts {
                      id
                    }
                  }
                  userId
                  createdAt
                  updatedAt
                  trades {
                    id
                  }
                  orders {
                    id
                    alpacaAccountId
                    assetId
                    qty
                    notional
                    side
                    type
                    timeInForce
                    limitPrice
                    stopPrice
                    trailPrice
                    trailPercent
                    extendedHours
                    clientOrderId
                    status
                    createdAt
                    updatedAt
                    submittedAt
                    filledAt
                    filledAvgPrice
                    actionId
                    alpacaAccount {
                      id
                    }
                    action {
                      id
                    }
                    asset {
                      id
                    }
                    fee
                  }
                  positions {
                    id
                    assetId
                    asset {
                      id
                    }
                    averageEntryPrice
                    qty
                    qtyAvailable
                    marketValue
                    costBasis
                    unrealizedPL
                    unrealizedPLPC
                    unrealisedIntradayPL
                    unrealisedIntradayPLPC
                    currentPrice
                    lastTradePrice
                    changeToday
                    assetMarginable
                    alpacaAccount {
                      id
                    }
                    alpacaAccountId
                  }
                  alerts {
                    id
                    alpacaAccountId
                    message
                    type
                    isRead
                    createdAt
                    updatedAt
                    alpacaAccount {
                      id
                    }
                  }
                }
                asset {
                  id
                }
                optionContractType
                actions {
                  id
                  sequence
                  tradeId
                  type
                  note
                  status
                  fee
                  trade {
                    id
                  }
                  order {
                    id
                  }
                }
              }
              orders {
                id
              }
              positions {
                id
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
   * @returns The retrieved NewsArticle or null.
   */
  async get(props: NewsArticleType): Promise<NewsArticleType | null> {

    const client = createApolloClient();

      const GET_NEWSARTICLE = gql`
      query getNewsArticle($where: NewsArticleWhereUniqueInput!) {
        getNewsArticle(where: $where) {
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
            news {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                  type
                  APIKey
                  APISecret
                  configuration
                  marketOpen
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
                    currentAccount
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
                    alpacaAccounts {
                      id
                    }
                  }
                  userId
                  createdAt
                  updatedAt
                  trades {
                    id
                  }
                  orders {
                    id
                    alpacaAccountId
                    assetId
                    qty
                    notional
                    side
                    type
                    timeInForce
                    limitPrice
                    stopPrice
                    trailPrice
                    trailPercent
                    extendedHours
                    clientOrderId
                    status
                    createdAt
                    updatedAt
                    submittedAt
                    filledAt
                    filledAvgPrice
                    actionId
                    alpacaAccount {
                      id
                    }
                    action {
                      id
                    }
                    asset {
                      id
                    }
                    fee
                  }
                  positions {
                    id
                    assetId
                    asset {
                      id
                    }
                    averageEntryPrice
                    qty
                    qtyAvailable
                    marketValue
                    costBasis
                    unrealizedPL
                    unrealizedPLPC
                    unrealisedIntradayPL
                    unrealisedIntradayPLPC
                    currentPrice
                    lastTradePrice
                    changeToday
                    assetMarginable
                    alpacaAccount {
                      id
                    }
                    alpacaAccountId
                  }
                  alerts {
                    id
                    alpacaAccountId
                    message
                    type
                    isRead
                    createdAt
                    updatedAt
                    alpacaAccount {
                      id
                    }
                  }
                }
                asset {
                  id
                }
                optionContractType
                actions {
                  id
                  sequence
                  tradeId
                  type
                  note
                  status
                  fee
                  trade {
                    id
                  }
                  order {
                    id
                  }
                }
              }
              orders {
                id
              }
              positions {
                id
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
   * @returns An array of NewsArticle records or null.
   */
  async getAll(): Promise<NewsArticleType[] | null> {

    const client = createApolloClient();

      const GET_ALL_NEWSARTICLE = gql`
      query getAllNewsArticle {
        newsArticles {
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
            news {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                  type
                  APIKey
                  APISecret
                  configuration
                  marketOpen
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
                    currentAccount
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
                    alpacaAccounts {
                      id
                    }
                  }
                  userId
                  createdAt
                  updatedAt
                  trades {
                    id
                  }
                  orders {
                    id
                    alpacaAccountId
                    assetId
                    qty
                    notional
                    side
                    type
                    timeInForce
                    limitPrice
                    stopPrice
                    trailPrice
                    trailPercent
                    extendedHours
                    clientOrderId
                    status
                    createdAt
                    updatedAt
                    submittedAt
                    filledAt
                    filledAvgPrice
                    actionId
                    alpacaAccount {
                      id
                    }
                    action {
                      id
                    }
                    asset {
                      id
                    }
                    fee
                  }
                  positions {
                    id
                    assetId
                    asset {
                      id
                    }
                    averageEntryPrice
                    qty
                    qtyAvailable
                    marketValue
                    costBasis
                    unrealizedPL
                    unrealizedPLPC
                    unrealisedIntradayPL
                    unrealisedIntradayPLPC
                    currentPrice
                    lastTradePrice
                    changeToday
                    assetMarginable
                    alpacaAccount {
                      id
                    }
                    alpacaAccountId
                  }
                  alerts {
                    id
                    alpacaAccountId
                    message
                    type
                    isRead
                    createdAt
                    updatedAt
                    alpacaAccount {
                      id
                    }
                  }
                }
                asset {
                  id
                }
                optionContractType
                actions {
                  id
                  sequence
                  tradeId
                  type
                  note
                  status
                  fee
                  trade {
                    id
                  }
                  order {
                    id
                  }
                }
              }
              orders {
                id
              }
              positions {
                id
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
   * @returns An array of found NewsArticle records or null.
   */
  async findMany(props: NewsArticleType): Promise<NewsArticleType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_NEWSARTICLE = gql`
      query findManyNewsArticle($where: NewsArticleWhereInput!) {
        newsArticles(where: $where) {
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
            news {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                  type
                  APIKey
                  APISecret
                  configuration
                  marketOpen
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
                    currentAccount
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
                    alpacaAccounts {
                      id
                    }
                  }
                  userId
                  createdAt
                  updatedAt
                  trades {
                    id
                  }
                  orders {
                    id
                    alpacaAccountId
                    assetId
                    qty
                    notional
                    side
                    type
                    timeInForce
                    limitPrice
                    stopPrice
                    trailPrice
                    trailPercent
                    extendedHours
                    clientOrderId
                    status
                    createdAt
                    updatedAt
                    submittedAt
                    filledAt
                    filledAvgPrice
                    actionId
                    alpacaAccount {
                      id
                    }
                    action {
                      id
                    }
                    asset {
                      id
                    }
                    fee
                  }
                  positions {
                    id
                    assetId
                    asset {
                      id
                    }
                    averageEntryPrice
                    qty
                    qtyAvailable
                    marketValue
                    costBasis
                    unrealizedPL
                    unrealizedPLPC
                    unrealisedIntradayPL
                    unrealisedIntradayPLPC
                    currentPrice
                    lastTradePrice
                    changeToday
                    assetMarginable
                    alpacaAccount {
                      id
                    }
                    alpacaAccountId
                  }
                  alerts {
                    id
                    alpacaAccountId
                    message
                    type
                    isRead
                    createdAt
                    updatedAt
                    alpacaAccount {
                      id
                    }
                  }
                }
                asset {
                  id
                }
                optionContractType
                actions {
                  id
                  sequence
                  tradeId
                  type
                  note
                  status
                  fee
                  trade {
                    id
                  }
                  order {
                    id
                  }
                }
              }
              orders {
                id
              }
              positions {
                id
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
