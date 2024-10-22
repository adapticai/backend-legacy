

import { NewsArticleAssetSentiment as NewsArticleAssetSentimentType } from './generated/typegraphql-prisma/models/NewsArticleAssetSentiment';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the NewsArticleAssetSentiment model.
 */

export const NewsArticleAssetSentiment = {

  /**
   * Create a new NewsArticleAssetSentiment record.
   * @param props - Properties for the new record.
   * @returns The created NewsArticleAssetSentiment or null.
   */

  async create(props: NewsArticleAssetSentimentType): Promise<NewsArticleAssetSentimentType> {

  const client = createApolloClient();

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
        sellPrice: props.asset.sellPrice !== undefined ? props.asset.sellPrice : undefined,
        buyPrice: props.asset.buyPrice !== undefined ? props.asset.buyPrice : undefined,
    trades: props.asset.trades ? 
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 &&  props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.trades.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: props.asset.orders ? 
      Array.isArray(props.asset.orders) && props.asset.orders.length > 0 &&  props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.orders.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 &&  props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
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
   * @param props - Array of NewsArticleAssetSentiment objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: NewsArticleAssetSentimentType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

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
   * @returns The updated NewsArticleAssetSentiment or null.
   */
  async update(props: NewsArticleAssetSentimentType): Promise<NewsArticleAssetSentimentType> {

    const client = createApolloClient();

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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        url: props.url !== undefined ? props.url : undefined,
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
        id: props.news.id !== undefined ? {
            set: props.news.id  
           } : undefined,
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
        id: props.asset.id !== undefined ? {
            set: props.asset.id  
           } : undefined,
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
        sellPrice: props.asset.sellPrice !== undefined ? {
            set: props.asset.sellPrice  
           } : undefined,
        buyPrice: props.asset.buyPrice !== undefined ? {
            set: props.asset.buyPrice  
           } : undefined,
    trades: props.asset.trades ? {
      upsert: props.asset.trades.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? {
        upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id 
               } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id  
               } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type  
               } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
                set: item.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen  
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? {
        upsert: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            sequence: item.sequence !== undefined ? {
                set: item.sequence  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            note: item.note !== undefined ? {
                set: item.note  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee  
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: props.asset.orders ? {
      upsert: props.asset.orders.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? {
        upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id 
               } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id  
               } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type  
               } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
                set: item.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen  
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      action: item.action ? {
        upsert: {
          where: {
            id: item.action.id !== undefined ? {
                equals: item.action.id 
               } : undefined,
          },
          update: {
            id: item.action.id !== undefined ? {
                set: item.action.id  
               } : undefined,
            sequence: item.action.sequence !== undefined ? {
                set: item.action.sequence  
               } : undefined,
            type: item.action.type !== undefined ? {
                set: item.action.type  
               } : undefined,
            note: item.action.note !== undefined ? {
                set: item.action.note  
               } : undefined,
            status: item.action.status !== undefined ? {
                set: item.action.status  
               } : undefined,
            fee: item.action.fee !== undefined ? {
                set: item.action.fee  
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    positions: props.asset.positions ? {
      upsert: props.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? {
        upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id 
               } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id  
               } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type  
               } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
                set: item.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen  
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
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
        sellPrice: props.asset.sellPrice !== undefined ? props.asset.sellPrice : undefined,
        buyPrice: props.asset.buyPrice !== undefined ? props.asset.buyPrice : undefined,
    trades: props.asset.trades ? 
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 &&  props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.trades.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: props.asset.orders ? 
      Array.isArray(props.asset.orders) && props.asset.orders.length > 0 &&  props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.orders.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 &&  props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
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
   * Update multiple NewsArticleAssetSentiment records.
   * @param props - Array of NewsArticleAssetSentiment objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: NewsArticleAssetSentimentType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

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
  news: prop.news ? {
    upsert: {
      where: {
        id: prop.news.id !== undefined ? {
            equals: prop.news.id 
           } : undefined,
        title: prop.news.title !== undefined ? {
            equals: prop.news.title 
           } : undefined,
        url: prop.news.url !== undefined ? {
            equals: prop.news.url 
           } : undefined,
      },
      update: {
        id: prop.news.id !== undefined ? {
            set: prop.news.id  
           } : undefined,
        title: prop.news.title !== undefined ? {
            set: prop.news.title  
           } : undefined,
        content: prop.news.content !== undefined ? {
            set: prop.news.content  
           } : undefined,
        source: prop.news.source !== undefined ? {
            set: prop.news.source  
           } : undefined,
        sourceDomain: prop.news.sourceDomain !== undefined ? {
            set: prop.news.sourceDomain  
           } : undefined,
        url: prop.news.url !== undefined ? {
            set: prop.news.url  
           } : undefined,
        sentiment: prop.news.sentiment !== undefined ? {
            set: prop.news.sentiment  
           } : undefined,
        authors: prop.news.authors !== undefined ? {
            set: prop.news.authors  
           } : undefined,
        summary: prop.news.summary !== undefined ? {
            set: prop.news.summary  
           } : undefined,
        bannerImage: prop.news.bannerImage !== undefined ? {
            set: prop.news.bannerImage  
           } : undefined,
        timePublished: prop.news.timePublished !== undefined ? {
            set: prop.news.timePublished  
           } : undefined,
        category: prop.news.category !== undefined ? {
            set: prop.news.category  
           } : undefined,
        topics: prop.news.topics !== undefined ? {
            set: prop.news.topics  
           } : undefined,
        logo: prop.news.logo !== undefined ? {
            set: prop.news.logo  
           } : undefined,
      },
      create: {
        title: prop.news.title !== undefined ? prop.news.title : undefined,
        content: prop.news.content !== undefined ? prop.news.content : undefined,
        source: prop.news.source !== undefined ? prop.news.source : undefined,
        sourceDomain: prop.news.sourceDomain !== undefined ? prop.news.sourceDomain : undefined,
        url: prop.news.url !== undefined ? prop.news.url : undefined,
        sentiment: prop.news.sentiment !== undefined ? prop.news.sentiment : undefined,
        authors: prop.news.authors !== undefined ? prop.news.authors : undefined,
        summary: prop.news.summary !== undefined ? prop.news.summary : undefined,
        bannerImage: prop.news.bannerImage !== undefined ? prop.news.bannerImage : undefined,
        timePublished: prop.news.timePublished !== undefined ? prop.news.timePublished : undefined,
        category: prop.news.category !== undefined ? prop.news.category : undefined,
        topics: prop.news.topics !== undefined ? prop.news.topics : undefined,
        logo: prop.news.logo !== undefined ? prop.news.logo : undefined,
      },
    }
  } : undefined,
  asset: prop.asset ? {
    upsert: {
      where: {
        id: prop.asset.id !== undefined ? {
            equals: prop.asset.id 
           } : undefined,
        symbol: prop.asset.symbol !== undefined ? {
            equals: prop.asset.symbol 
           } : undefined,
        name: prop.asset.name !== undefined ? {
            equals: prop.asset.name 
           } : undefined,
      },
      update: {
        id: prop.asset.id !== undefined ? {
            set: prop.asset.id  
           } : undefined,
        symbol: prop.asset.symbol !== undefined ? {
            set: prop.asset.symbol  
           } : undefined,
        name: prop.asset.name !== undefined ? {
            set: prop.asset.name  
           } : undefined,
        type: prop.asset.type !== undefined ? {
            set: prop.asset.type  
           } : undefined,
        logoUrl: prop.asset.logoUrl !== undefined ? {
            set: prop.asset.logoUrl  
           } : undefined,
        description: prop.asset.description !== undefined ? {
            set: prop.asset.description  
           } : undefined,
        cik: prop.asset.cik !== undefined ? {
            set: prop.asset.cik  
           } : undefined,
        exchange: prop.asset.exchange !== undefined ? {
            set: prop.asset.exchange  
           } : undefined,
        currency: prop.asset.currency !== undefined ? {
            set: prop.asset.currency  
           } : undefined,
        country: prop.asset.country !== undefined ? {
            set: prop.asset.country  
           } : undefined,
        sector: prop.asset.sector !== undefined ? {
            set: prop.asset.sector  
           } : undefined,
        industry: prop.asset.industry !== undefined ? {
            set: prop.asset.industry  
           } : undefined,
        address: prop.asset.address !== undefined ? {
            set: prop.asset.address  
           } : undefined,
        officialSite: prop.asset.officialSite !== undefined ? {
            set: prop.asset.officialSite  
           } : undefined,
        fiscalYearEnd: prop.asset.fiscalYearEnd !== undefined ? {
            set: prop.asset.fiscalYearEnd  
           } : undefined,
        latestQuarter: prop.asset.latestQuarter !== undefined ? {
            set: prop.asset.latestQuarter  
           } : undefined,
        marketCapitalization: prop.asset.marketCapitalization !== undefined ? {
            set: prop.asset.marketCapitalization  
           } : undefined,
        ebitda: prop.asset.ebitda !== undefined ? {
            set: prop.asset.ebitda  
           } : undefined,
        peRatio: prop.asset.peRatio !== undefined ? {
            set: prop.asset.peRatio  
           } : undefined,
        pegRatio: prop.asset.pegRatio !== undefined ? {
            set: prop.asset.pegRatio  
           } : undefined,
        bookValue: prop.asset.bookValue !== undefined ? {
            set: prop.asset.bookValue  
           } : undefined,
        dividendPerShare: prop.asset.dividendPerShare !== undefined ? {
            set: prop.asset.dividendPerShare  
           } : undefined,
        dividendYield: prop.asset.dividendYield !== undefined ? {
            set: prop.asset.dividendYield  
           } : undefined,
        eps: prop.asset.eps !== undefined ? {
            set: prop.asset.eps  
           } : undefined,
        revenuePerShareTTM: prop.asset.revenuePerShareTTM !== undefined ? {
            set: prop.asset.revenuePerShareTTM  
           } : undefined,
        profitMargin: prop.asset.profitMargin !== undefined ? {
            set: prop.asset.profitMargin  
           } : undefined,
        operatingMarginTTM: prop.asset.operatingMarginTTM !== undefined ? {
            set: prop.asset.operatingMarginTTM  
           } : undefined,
        returnOnAssetsTTM: prop.asset.returnOnAssetsTTM !== undefined ? {
            set: prop.asset.returnOnAssetsTTM  
           } : undefined,
        returnOnEquityTTM: prop.asset.returnOnEquityTTM !== undefined ? {
            set: prop.asset.returnOnEquityTTM  
           } : undefined,
        revenueTTM: prop.asset.revenueTTM !== undefined ? {
            set: prop.asset.revenueTTM  
           } : undefined,
        grossProfitTTM: prop.asset.grossProfitTTM !== undefined ? {
            set: prop.asset.grossProfitTTM  
           } : undefined,
        dilutedEPSTTM: prop.asset.dilutedEPSTTM !== undefined ? {
            set: prop.asset.dilutedEPSTTM  
           } : undefined,
        quarterlyEarningsGrowthYOY: prop.asset.quarterlyEarningsGrowthYOY !== undefined ? {
            set: prop.asset.quarterlyEarningsGrowthYOY  
           } : undefined,
        quarterlyRevenueGrowthYOY: prop.asset.quarterlyRevenueGrowthYOY !== undefined ? {
            set: prop.asset.quarterlyRevenueGrowthYOY  
           } : undefined,
        analystTargetPrice: prop.asset.analystTargetPrice !== undefined ? {
            set: prop.asset.analystTargetPrice  
           } : undefined,
        analystRatingStrongBuy: prop.asset.analystRatingStrongBuy !== undefined ? {
            set: prop.asset.analystRatingStrongBuy  
           } : undefined,
        analystRatingBuy: prop.asset.analystRatingBuy !== undefined ? {
            set: prop.asset.analystRatingBuy  
           } : undefined,
        analystRatingHold: prop.asset.analystRatingHold !== undefined ? {
            set: prop.asset.analystRatingHold  
           } : undefined,
        analystRatingSell: prop.asset.analystRatingSell !== undefined ? {
            set: prop.asset.analystRatingSell  
           } : undefined,
        analystRatingStrongSell: prop.asset.analystRatingStrongSell !== undefined ? {
            set: prop.asset.analystRatingStrongSell  
           } : undefined,
        trailingPE: prop.asset.trailingPE !== undefined ? {
            set: prop.asset.trailingPE  
           } : undefined,
        forwardPE: prop.asset.forwardPE !== undefined ? {
            set: prop.asset.forwardPE  
           } : undefined,
        priceToSalesRatioTTM: prop.asset.priceToSalesRatioTTM !== undefined ? {
            set: prop.asset.priceToSalesRatioTTM  
           } : undefined,
        priceToBookRatio: prop.asset.priceToBookRatio !== undefined ? {
            set: prop.asset.priceToBookRatio  
           } : undefined,
        evToRevenue: prop.asset.evToRevenue !== undefined ? {
            set: prop.asset.evToRevenue  
           } : undefined,
        evToEbitda: prop.asset.evToEbitda !== undefined ? {
            set: prop.asset.evToEbitda  
           } : undefined,
        beta: prop.asset.beta !== undefined ? {
            set: prop.asset.beta  
           } : undefined,
        week52High: prop.asset.week52High !== undefined ? {
            set: prop.asset.week52High  
           } : undefined,
        week52Low: prop.asset.week52Low !== undefined ? {
            set: prop.asset.week52Low  
           } : undefined,
        day50MovingAverage: prop.asset.day50MovingAverage !== undefined ? {
            set: prop.asset.day50MovingAverage  
           } : undefined,
        day200MovingAverage: prop.asset.day200MovingAverage !== undefined ? {
            set: prop.asset.day200MovingAverage  
           } : undefined,
        sharesOutstanding: prop.asset.sharesOutstanding !== undefined ? {
            set: prop.asset.sharesOutstanding  
           } : undefined,
        dividendDate: prop.asset.dividendDate !== undefined ? {
            set: prop.asset.dividendDate  
           } : undefined,
        exDividendDate: prop.asset.exDividendDate !== undefined ? {
            set: prop.asset.exDividendDate  
           } : undefined,
        sellPrice: prop.asset.sellPrice !== undefined ? {
            set: prop.asset.sellPrice  
           } : undefined,
        buyPrice: prop.asset.buyPrice !== undefined ? {
            set: prop.asset.buyPrice  
           } : undefined,
    trades: prop.asset.trades ? {
      upsert: prop.asset.trades.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? {
        upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id 
               } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id  
               } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type  
               } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
                set: item.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen  
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? {
        upsert: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            sequence: item.sequence !== undefined ? {
                set: item.sequence  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            note: item.note !== undefined ? {
                set: item.note  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee  
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: prop.asset.orders ? {
      upsert: prop.asset.orders.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? {
        upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id 
               } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id  
               } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type  
               } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
                set: item.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen  
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      action: item.action ? {
        upsert: {
          where: {
            id: item.action.id !== undefined ? {
                equals: item.action.id 
               } : undefined,
          },
          update: {
            id: item.action.id !== undefined ? {
                set: item.action.id  
               } : undefined,
            sequence: item.action.sequence !== undefined ? {
                set: item.action.sequence  
               } : undefined,
            type: item.action.type !== undefined ? {
                set: item.action.type  
               } : undefined,
            note: item.action.note !== undefined ? {
                set: item.action.note  
               } : undefined,
            status: item.action.status !== undefined ? {
                set: item.action.status  
               } : undefined,
            fee: item.action.fee !== undefined ? {
                set: item.action.fee  
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    positions: prop.asset.positions ? {
      upsert: prop.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? {
        upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id 
               } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id  
               } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type  
               } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
                set: item.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen  
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        symbol: prop.asset.symbol !== undefined ? prop.asset.symbol : undefined,
        name: prop.asset.name !== undefined ? prop.asset.name : undefined,
        type: prop.asset.type !== undefined ? prop.asset.type : undefined,
        logoUrl: prop.asset.logoUrl !== undefined ? prop.asset.logoUrl : undefined,
        description: prop.asset.description !== undefined ? prop.asset.description : undefined,
        cik: prop.asset.cik !== undefined ? prop.asset.cik : undefined,
        exchange: prop.asset.exchange !== undefined ? prop.asset.exchange : undefined,
        currency: prop.asset.currency !== undefined ? prop.asset.currency : undefined,
        country: prop.asset.country !== undefined ? prop.asset.country : undefined,
        sector: prop.asset.sector !== undefined ? prop.asset.sector : undefined,
        industry: prop.asset.industry !== undefined ? prop.asset.industry : undefined,
        address: prop.asset.address !== undefined ? prop.asset.address : undefined,
        officialSite: prop.asset.officialSite !== undefined ? prop.asset.officialSite : undefined,
        fiscalYearEnd: prop.asset.fiscalYearEnd !== undefined ? prop.asset.fiscalYearEnd : undefined,
        latestQuarter: prop.asset.latestQuarter !== undefined ? prop.asset.latestQuarter : undefined,
        marketCapitalization: prop.asset.marketCapitalization !== undefined ? prop.asset.marketCapitalization : undefined,
        ebitda: prop.asset.ebitda !== undefined ? prop.asset.ebitda : undefined,
        peRatio: prop.asset.peRatio !== undefined ? prop.asset.peRatio : undefined,
        pegRatio: prop.asset.pegRatio !== undefined ? prop.asset.pegRatio : undefined,
        bookValue: prop.asset.bookValue !== undefined ? prop.asset.bookValue : undefined,
        dividendPerShare: prop.asset.dividendPerShare !== undefined ? prop.asset.dividendPerShare : undefined,
        dividendYield: prop.asset.dividendYield !== undefined ? prop.asset.dividendYield : undefined,
        eps: prop.asset.eps !== undefined ? prop.asset.eps : undefined,
        revenuePerShareTTM: prop.asset.revenuePerShareTTM !== undefined ? prop.asset.revenuePerShareTTM : undefined,
        profitMargin: prop.asset.profitMargin !== undefined ? prop.asset.profitMargin : undefined,
        operatingMarginTTM: prop.asset.operatingMarginTTM !== undefined ? prop.asset.operatingMarginTTM : undefined,
        returnOnAssetsTTM: prop.asset.returnOnAssetsTTM !== undefined ? prop.asset.returnOnAssetsTTM : undefined,
        returnOnEquityTTM: prop.asset.returnOnEquityTTM !== undefined ? prop.asset.returnOnEquityTTM : undefined,
        revenueTTM: prop.asset.revenueTTM !== undefined ? prop.asset.revenueTTM : undefined,
        grossProfitTTM: prop.asset.grossProfitTTM !== undefined ? prop.asset.grossProfitTTM : undefined,
        dilutedEPSTTM: prop.asset.dilutedEPSTTM !== undefined ? prop.asset.dilutedEPSTTM : undefined,
        quarterlyEarningsGrowthYOY: prop.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.asset.quarterlyEarningsGrowthYOY : undefined,
        quarterlyRevenueGrowthYOY: prop.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.asset.quarterlyRevenueGrowthYOY : undefined,
        analystTargetPrice: prop.asset.analystTargetPrice !== undefined ? prop.asset.analystTargetPrice : undefined,
        analystRatingStrongBuy: prop.asset.analystRatingStrongBuy !== undefined ? prop.asset.analystRatingStrongBuy : undefined,
        analystRatingBuy: prop.asset.analystRatingBuy !== undefined ? prop.asset.analystRatingBuy : undefined,
        analystRatingHold: prop.asset.analystRatingHold !== undefined ? prop.asset.analystRatingHold : undefined,
        analystRatingSell: prop.asset.analystRatingSell !== undefined ? prop.asset.analystRatingSell : undefined,
        analystRatingStrongSell: prop.asset.analystRatingStrongSell !== undefined ? prop.asset.analystRatingStrongSell : undefined,
        trailingPE: prop.asset.trailingPE !== undefined ? prop.asset.trailingPE : undefined,
        forwardPE: prop.asset.forwardPE !== undefined ? prop.asset.forwardPE : undefined,
        priceToSalesRatioTTM: prop.asset.priceToSalesRatioTTM !== undefined ? prop.asset.priceToSalesRatioTTM : undefined,
        priceToBookRatio: prop.asset.priceToBookRatio !== undefined ? prop.asset.priceToBookRatio : undefined,
        evToRevenue: prop.asset.evToRevenue !== undefined ? prop.asset.evToRevenue : undefined,
        evToEbitda: prop.asset.evToEbitda !== undefined ? prop.asset.evToEbitda : undefined,
        beta: prop.asset.beta !== undefined ? prop.asset.beta : undefined,
        week52High: prop.asset.week52High !== undefined ? prop.asset.week52High : undefined,
        week52Low: prop.asset.week52Low !== undefined ? prop.asset.week52Low : undefined,
        day50MovingAverage: prop.asset.day50MovingAverage !== undefined ? prop.asset.day50MovingAverage : undefined,
        day200MovingAverage: prop.asset.day200MovingAverage !== undefined ? prop.asset.day200MovingAverage : undefined,
        sharesOutstanding: prop.asset.sharesOutstanding !== undefined ? prop.asset.sharesOutstanding : undefined,
        dividendDate: prop.asset.dividendDate !== undefined ? prop.asset.dividendDate : undefined,
        exDividendDate: prop.asset.exDividendDate !== undefined ? prop.asset.exDividendDate : undefined,
        sellPrice: prop.asset.sellPrice !== undefined ? prop.asset.sellPrice : undefined,
        buyPrice: prop.asset.buyPrice !== undefined ? prop.asset.buyPrice : undefined,
    trades: prop.asset.trades ? 
      Array.isArray(prop.asset.trades) && prop.asset.trades.length > 0 &&  prop.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.trades.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: prop.asset.orders ? 
      Array.isArray(prop.asset.orders) && prop.asset.orders.length > 0 &&  prop.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.orders.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    positions: prop.asset.positions ? 
      Array.isArray(prop.asset.positions) && prop.asset.positions.length > 0 &&  prop.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
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
   * @returns The deleted NewsArticleAssetSentiment or null.
   */
  async delete(props: NewsArticleAssetSentimentType): Promise<NewsArticleAssetSentimentType> {

    const client = createApolloClient();

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
   * @returns The retrieved NewsArticleAssetSentiment or null.
   */
  async get(props: NewsArticleAssetSentimentType): Promise<NewsArticleAssetSentimentType | null> {

    const client = createApolloClient();

      const GET_NEWSARTICLEASSETSENTIMENT = gql`
      query getNewsArticleAssetSentiment($where: NewsArticleAssetSentimentWhereUniqueInput!) {
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        url: props.url !== undefined ? props.url : undefined,
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
   * @returns An array of NewsArticleAssetSentiment records or null.
   */
  async getAll(): Promise<NewsArticleAssetSentimentType[] | null> {

    const client = createApolloClient();

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
   * @returns An array of found NewsArticleAssetSentiment records or null.
   */
  async findMany(props: NewsArticleAssetSentimentType): Promise<NewsArticleAssetSentimentType[] | null> {

    const client = createApolloClient();

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
      if (error instanceof ApolloError && error.message === 'No NewsArticleAssetSentiment found') {
        return null;
      } else {
        console.error('Error in getNewsArticleAssetSentiment:', error);
        throw error;
      }
    }
  }
};
