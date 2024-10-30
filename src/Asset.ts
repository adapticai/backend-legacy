
  
import { Asset as AssetType } from './generated/typegraphql-prisma/models/Asset';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Asset model.
   */

  const selectionSet = `
    {
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
  trades {
    id
    alpacaAccountId
    assetId
    qty
    price
    total
    optionType
    signal
    strategy
    analysis
    summary
    confidence
    timestamp
    createdAt
    updatedAt
    status
    actions {
      id
      sequence
      tradeId
      type
      note
      status
      fee
      order {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
id
        }
        takeProfit {
id
        }
        trailPrice
        trailPercent
        extendedHours
        status
        createdAt
        updatedAt
        submittedAt
        filledAt
        filledAvgPrice
        actionId
        asset {
id
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
    }
  }
  orders {
    id
    clientOrderId
    alpacaAccountId
    assetId
    qty
    notional
    side
    type
    orderClass
    timeInForce
    limitPrice
    stopPrice
    stopLoss {
      id
      stopPrice
      limitPrice
      createdAt
      updatedAt
      orderId
    }
    takeProfit {
      id
      limitPrice
      stopPrice
      createdAt
      updatedAt
      orderId
    }
    trailPrice
    trailPercent
    extendedHours
    status
    createdAt
    updatedAt
    submittedAt
    filledAt
    filledAvgPrice
    actionId
    fee
    strikePrice
    expirationDate
    optionType
    stopLossId
    takeProfitId
  }
  positions {
    id
    assetId
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
    alpacaAccountId
  }
  newsMentions {
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
    relevancyScore
    sentimentScore
    sentimentLabel
  }
}
  `;

  export const Asset = {

    /**
     * Create a new Asset record.
     * @param props - Properties for the new record.
     * @returns The created Asset or null.
     */

    async create(props: AssetType): Promise<AssetType> {

    const client = createApolloClient();

    const CREATE_ONE_ASSET = gql`
        mutation createOneAsset($data: AssetCreateInput!) {
          createOneAsset(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            symbol: props.symbol !== undefined ? props.symbol : undefined,
  name: props.name !== undefined ? props.name : undefined,
  type: props.type !== undefined ? props.type : undefined,
  logoUrl: props.logoUrl !== undefined ? props.logoUrl : undefined,
  description: props.description !== undefined ? props.description : undefined,
  cik: props.cik !== undefined ? props.cik : undefined,
  exchange: props.exchange !== undefined ? props.exchange : undefined,
  currency: props.currency !== undefined ? props.currency : undefined,
  country: props.country !== undefined ? props.country : undefined,
  sector: props.sector !== undefined ? props.sector : undefined,
  industry: props.industry !== undefined ? props.industry : undefined,
  address: props.address !== undefined ? props.address : undefined,
  officialSite: props.officialSite !== undefined ? props.officialSite : undefined,
  fiscalYearEnd: props.fiscalYearEnd !== undefined ? props.fiscalYearEnd : undefined,
  latestQuarter: props.latestQuarter !== undefined ? props.latestQuarter : undefined,
  marketCapitalization: props.marketCapitalization !== undefined ? props.marketCapitalization : undefined,
  ebitda: props.ebitda !== undefined ? props.ebitda : undefined,
  peRatio: props.peRatio !== undefined ? props.peRatio : undefined,
  pegRatio: props.pegRatio !== undefined ? props.pegRatio : undefined,
  bookValue: props.bookValue !== undefined ? props.bookValue : undefined,
  dividendPerShare: props.dividendPerShare !== undefined ? props.dividendPerShare : undefined,
  dividendYield: props.dividendYield !== undefined ? props.dividendYield : undefined,
  eps: props.eps !== undefined ? props.eps : undefined,
  revenuePerShareTTM: props.revenuePerShareTTM !== undefined ? props.revenuePerShareTTM : undefined,
  profitMargin: props.profitMargin !== undefined ? props.profitMargin : undefined,
  operatingMarginTTM: props.operatingMarginTTM !== undefined ? props.operatingMarginTTM : undefined,
  returnOnAssetsTTM: props.returnOnAssetsTTM !== undefined ? props.returnOnAssetsTTM : undefined,
  returnOnEquityTTM: props.returnOnEquityTTM !== undefined ? props.returnOnEquityTTM : undefined,
  revenueTTM: props.revenueTTM !== undefined ? props.revenueTTM : undefined,
  grossProfitTTM: props.grossProfitTTM !== undefined ? props.grossProfitTTM : undefined,
  dilutedEPSTTM: props.dilutedEPSTTM !== undefined ? props.dilutedEPSTTM : undefined,
  quarterlyEarningsGrowthYOY: props.quarterlyEarningsGrowthYOY !== undefined ? props.quarterlyEarningsGrowthYOY : undefined,
  quarterlyRevenueGrowthYOY: props.quarterlyRevenueGrowthYOY !== undefined ? props.quarterlyRevenueGrowthYOY : undefined,
  analystTargetPrice: props.analystTargetPrice !== undefined ? props.analystTargetPrice : undefined,
  analystRatingStrongBuy: props.analystRatingStrongBuy !== undefined ? props.analystRatingStrongBuy : undefined,
  analystRatingBuy: props.analystRatingBuy !== undefined ? props.analystRatingBuy : undefined,
  analystRatingHold: props.analystRatingHold !== undefined ? props.analystRatingHold : undefined,
  analystRatingSell: props.analystRatingSell !== undefined ? props.analystRatingSell : undefined,
  analystRatingStrongSell: props.analystRatingStrongSell !== undefined ? props.analystRatingStrongSell : undefined,
  trailingPE: props.trailingPE !== undefined ? props.trailingPE : undefined,
  forwardPE: props.forwardPE !== undefined ? props.forwardPE : undefined,
  priceToSalesRatioTTM: props.priceToSalesRatioTTM !== undefined ? props.priceToSalesRatioTTM : undefined,
  priceToBookRatio: props.priceToBookRatio !== undefined ? props.priceToBookRatio : undefined,
  evToRevenue: props.evToRevenue !== undefined ? props.evToRevenue : undefined,
  evToEbitda: props.evToEbitda !== undefined ? props.evToEbitda : undefined,
  beta: props.beta !== undefined ? props.beta : undefined,
  week52High: props.week52High !== undefined ? props.week52High : undefined,
  week52Low: props.week52Low !== undefined ? props.week52Low : undefined,
  day50MovingAverage: props.day50MovingAverage !== undefined ? props.day50MovingAverage : undefined,
  day200MovingAverage: props.day200MovingAverage !== undefined ? props.day200MovingAverage : undefined,
  sharesOutstanding: props.sharesOutstanding !== undefined ? props.sharesOutstanding : undefined,
  dividendDate: props.dividendDate !== undefined ? props.dividendDate : undefined,
  exDividendDate: props.exDividendDate !== undefined ? props.exDividendDate : undefined,
  askPrice: props.askPrice !== undefined ? props.askPrice : undefined,
  bidPrice: props.bidPrice !== undefined ? props.bidPrice : undefined,
  trades: props.trades ? 
    Array.isArray(props.trades) && props.trades.length > 0 &&  props.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.trades.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.trades.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        qty: item.qty !== undefined ? item.qty : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        optionType: item.optionType !== undefined ? item.optionType : undefined,
        signal: item.signal !== undefined ? item.signal : undefined,
        strategy: item.strategy !== undefined ? item.strategy : undefined,
        analysis: item.analysis !== undefined ? item.analysis : undefined,
        summary: item.summary !== undefined ? item.summary : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
        },
      }
    } : undefined,
    actions: item.actions ? 
      Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.actions.map((item: any) => ({
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
  orders: props.orders ? 
    Array.isArray(props.orders) && props.orders.length > 0 &&  props.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.orders.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.orders.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
        qty: item.qty !== undefined ? item.qty : undefined,
        notional: item.notional !== undefined ? item.notional : undefined,
        side: item.side !== undefined ? item.side : undefined,
        type: item.type !== undefined ? item.type : undefined,
        orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
        timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
        limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
        stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
        trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
        trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
        extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
        status: item.status !== undefined ? item.status : undefined,
        submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
        filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
        strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
        expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
        optionType: item.optionType !== undefined ? item.optionType : undefined,
        stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
        takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
    stopLoss: item.stopLoss ? 
      typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
    ? { connect: {
          id: item.stopLoss.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
        },
        create: {
          stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
          limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: item.takeProfit ? 
      typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && Object.keys(item.takeProfit)[0] === 'id'
    ? { connect: {
          id: item.takeProfit.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
        },
        create: {
          limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
          stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
  positions: props.positions ? 
    Array.isArray(props.positions) && props.positions.length > 0 &&  props.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.positions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.positions.map((item: any) => ({
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  newsMentions: props.newsMentions ? 
    Array.isArray(props.newsMentions) && props.newsMentions.length > 0 &&  props.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.newsMentions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.newsMentions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        url: item.url !== undefined ? item.url : undefined,
      },
      create: {
        url: item.url !== undefined ? item.url : undefined,
        relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
        sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
        sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
    news: item.news ? 
      typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
          id: item.news.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.news.id !== undefined ? item.news.id : undefined,
          url: item.news.url !== undefined ? item.news.url : undefined,
          title: item.news.title !== undefined ? {
              equals: item.news.title 
             } : undefined,
        },
        create: {
          title: item.news.title !== undefined ? item.news.title : undefined,
          content: item.news.content !== undefined ? item.news.content : undefined,
          source: item.news.source !== undefined ? item.news.source : undefined,
          sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
          url: item.news.url !== undefined ? item.news.url : undefined,
          sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
          authors: item.news.authors !== undefined ? item.news.authors : undefined,
          summary: item.news.summary !== undefined ? item.news.summary : undefined,
          bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
          timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
          category: item.news.category !== undefined ? item.news.category : undefined,
          topics: item.news.topics !== undefined ? item.news.topics : undefined,
          logo: item.news.logo !== undefined ? item.news.logo : undefined,
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
      const response = await client.mutate({ mutation: CREATE_ONE_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAsset) {
        return response.data.createOneAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAsset:', error);
      throw error;
    }
  },

  /**
   * Create multiple Asset records.
   * @param props - Array of Asset objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: AssetType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_ASSET = gql`
      mutation createManyAsset($data: [AssetCreateManyInput!]!) {
        createManyAsset(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  name: prop.name !== undefined ? prop.name : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  logoUrl: prop.logoUrl !== undefined ? prop.logoUrl : undefined,
  description: prop.description !== undefined ? prop.description : undefined,
  cik: prop.cik !== undefined ? prop.cik : undefined,
  exchange: prop.exchange !== undefined ? prop.exchange : undefined,
  currency: prop.currency !== undefined ? prop.currency : undefined,
  country: prop.country !== undefined ? prop.country : undefined,
  sector: prop.sector !== undefined ? prop.sector : undefined,
  industry: prop.industry !== undefined ? prop.industry : undefined,
  address: prop.address !== undefined ? prop.address : undefined,
  officialSite: prop.officialSite !== undefined ? prop.officialSite : undefined,
  fiscalYearEnd: prop.fiscalYearEnd !== undefined ? prop.fiscalYearEnd : undefined,
  latestQuarter: prop.latestQuarter !== undefined ? prop.latestQuarter : undefined,
  marketCapitalization: prop.marketCapitalization !== undefined ? prop.marketCapitalization : undefined,
  ebitda: prop.ebitda !== undefined ? prop.ebitda : undefined,
  peRatio: prop.peRatio !== undefined ? prop.peRatio : undefined,
  pegRatio: prop.pegRatio !== undefined ? prop.pegRatio : undefined,
  bookValue: prop.bookValue !== undefined ? prop.bookValue : undefined,
  dividendPerShare: prop.dividendPerShare !== undefined ? prop.dividendPerShare : undefined,
  dividendYield: prop.dividendYield !== undefined ? prop.dividendYield : undefined,
  eps: prop.eps !== undefined ? prop.eps : undefined,
  revenuePerShareTTM: prop.revenuePerShareTTM !== undefined ? prop.revenuePerShareTTM : undefined,
  profitMargin: prop.profitMargin !== undefined ? prop.profitMargin : undefined,
  operatingMarginTTM: prop.operatingMarginTTM !== undefined ? prop.operatingMarginTTM : undefined,
  returnOnAssetsTTM: prop.returnOnAssetsTTM !== undefined ? prop.returnOnAssetsTTM : undefined,
  returnOnEquityTTM: prop.returnOnEquityTTM !== undefined ? prop.returnOnEquityTTM : undefined,
  revenueTTM: prop.revenueTTM !== undefined ? prop.revenueTTM : undefined,
  grossProfitTTM: prop.grossProfitTTM !== undefined ? prop.grossProfitTTM : undefined,
  dilutedEPSTTM: prop.dilutedEPSTTM !== undefined ? prop.dilutedEPSTTM : undefined,
  quarterlyEarningsGrowthYOY: prop.quarterlyEarningsGrowthYOY !== undefined ? prop.quarterlyEarningsGrowthYOY : undefined,
  quarterlyRevenueGrowthYOY: prop.quarterlyRevenueGrowthYOY !== undefined ? prop.quarterlyRevenueGrowthYOY : undefined,
  analystTargetPrice: prop.analystTargetPrice !== undefined ? prop.analystTargetPrice : undefined,
  analystRatingStrongBuy: prop.analystRatingStrongBuy !== undefined ? prop.analystRatingStrongBuy : undefined,
  analystRatingBuy: prop.analystRatingBuy !== undefined ? prop.analystRatingBuy : undefined,
  analystRatingHold: prop.analystRatingHold !== undefined ? prop.analystRatingHold : undefined,
  analystRatingSell: prop.analystRatingSell !== undefined ? prop.analystRatingSell : undefined,
  analystRatingStrongSell: prop.analystRatingStrongSell !== undefined ? prop.analystRatingStrongSell : undefined,
  trailingPE: prop.trailingPE !== undefined ? prop.trailingPE : undefined,
  forwardPE: prop.forwardPE !== undefined ? prop.forwardPE : undefined,
  priceToSalesRatioTTM: prop.priceToSalesRatioTTM !== undefined ? prop.priceToSalesRatioTTM : undefined,
  priceToBookRatio: prop.priceToBookRatio !== undefined ? prop.priceToBookRatio : undefined,
  evToRevenue: prop.evToRevenue !== undefined ? prop.evToRevenue : undefined,
  evToEbitda: prop.evToEbitda !== undefined ? prop.evToEbitda : undefined,
  beta: prop.beta !== undefined ? prop.beta : undefined,
  week52High: prop.week52High !== undefined ? prop.week52High : undefined,
  week52Low: prop.week52Low !== undefined ? prop.week52Low : undefined,
  day50MovingAverage: prop.day50MovingAverage !== undefined ? prop.day50MovingAverage : undefined,
  day200MovingAverage: prop.day200MovingAverage !== undefined ? prop.day200MovingAverage : undefined,
  sharesOutstanding: prop.sharesOutstanding !== undefined ? prop.sharesOutstanding : undefined,
  dividendDate: prop.dividendDate !== undefined ? prop.dividendDate : undefined,
  exDividendDate: prop.exDividendDate !== undefined ? prop.exDividendDate : undefined,
  askPrice: prop.askPrice !== undefined ? prop.askPrice : undefined,
  bidPrice: prop.bidPrice !== undefined ? prop.bidPrice : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAsset) {
        return response.data.createManyAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAsset:', error);
      throw error;
    }
  },

  /**
   * Update a single Asset record.
   * @param props - Properties to update.
   * @returns The updated Asset or null.
   */
  async update(props: AssetType): Promise<AssetType> {

    const client = createApolloClient();

      const UPDATE_ONE_ASSET = gql`
      mutation updateOneAsset($data: AssetUpdateInput!, $where: AssetWhereUniqueInput!) {
        updateOneAsset(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
    equals: props.id
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name
  } : undefined,
  type: props.type !== undefined ? {
    equals: props.type
  } : undefined,
  logoUrl: props.logoUrl !== undefined ? {
    equals: props.logoUrl
  } : undefined,
  description: props.description !== undefined ? {
    equals: props.description
  } : undefined,
  cik: props.cik !== undefined ? {
    equals: props.cik
  } : undefined,
  exchange: props.exchange !== undefined ? {
    equals: props.exchange
  } : undefined,
  currency: props.currency !== undefined ? {
    equals: props.currency
  } : undefined,
  country: props.country !== undefined ? {
    equals: props.country
  } : undefined,
  sector: props.sector !== undefined ? {
    equals: props.sector
  } : undefined,
  industry: props.industry !== undefined ? {
    equals: props.industry
  } : undefined,
  address: props.address !== undefined ? {
    equals: props.address
  } : undefined,
  officialSite: props.officialSite !== undefined ? {
    equals: props.officialSite
  } : undefined,
  fiscalYearEnd: props.fiscalYearEnd !== undefined ? {
    equals: props.fiscalYearEnd
  } : undefined,
  latestQuarter: props.latestQuarter !== undefined ? {
    equals: props.latestQuarter
  } : undefined,
  marketCapitalization: props.marketCapitalization !== undefined ? {
    equals: props.marketCapitalization
  } : undefined,
  ebitda: props.ebitda !== undefined ? {
    equals: props.ebitda
  } : undefined,
  peRatio: props.peRatio !== undefined ? {
    equals: props.peRatio
  } : undefined,
  pegRatio: props.pegRatio !== undefined ? {
    equals: props.pegRatio
  } : undefined,
  bookValue: props.bookValue !== undefined ? {
    equals: props.bookValue
  } : undefined,
  dividendPerShare: props.dividendPerShare !== undefined ? {
    equals: props.dividendPerShare
  } : undefined,
  dividendYield: props.dividendYield !== undefined ? {
    equals: props.dividendYield
  } : undefined,
  eps: props.eps !== undefined ? {
    equals: props.eps
  } : undefined,
  revenuePerShareTTM: props.revenuePerShareTTM !== undefined ? {
    equals: props.revenuePerShareTTM
  } : undefined,
  profitMargin: props.profitMargin !== undefined ? {
    equals: props.profitMargin
  } : undefined,
  operatingMarginTTM: props.operatingMarginTTM !== undefined ? {
    equals: props.operatingMarginTTM
  } : undefined,
  returnOnAssetsTTM: props.returnOnAssetsTTM !== undefined ? {
    equals: props.returnOnAssetsTTM
  } : undefined,
  returnOnEquityTTM: props.returnOnEquityTTM !== undefined ? {
    equals: props.returnOnEquityTTM
  } : undefined,
  revenueTTM: props.revenueTTM !== undefined ? {
    equals: props.revenueTTM
  } : undefined,
  grossProfitTTM: props.grossProfitTTM !== undefined ? {
    equals: props.grossProfitTTM
  } : undefined,
  dilutedEPSTTM: props.dilutedEPSTTM !== undefined ? {
    equals: props.dilutedEPSTTM
  } : undefined,
  quarterlyEarningsGrowthYOY: props.quarterlyEarningsGrowthYOY !== undefined ? {
    equals: props.quarterlyEarningsGrowthYOY
  } : undefined,
  quarterlyRevenueGrowthYOY: props.quarterlyRevenueGrowthYOY !== undefined ? {
    equals: props.quarterlyRevenueGrowthYOY
  } : undefined,
  analystTargetPrice: props.analystTargetPrice !== undefined ? {
    equals: props.analystTargetPrice
  } : undefined,
  analystRatingStrongBuy: props.analystRatingStrongBuy !== undefined ? {
    equals: props.analystRatingStrongBuy
  } : undefined,
  analystRatingBuy: props.analystRatingBuy !== undefined ? {
    equals: props.analystRatingBuy
  } : undefined,
  analystRatingHold: props.analystRatingHold !== undefined ? {
    equals: props.analystRatingHold
  } : undefined,
  analystRatingSell: props.analystRatingSell !== undefined ? {
    equals: props.analystRatingSell
  } : undefined,
  analystRatingStrongSell: props.analystRatingStrongSell !== undefined ? {
    equals: props.analystRatingStrongSell
  } : undefined,
  trailingPE: props.trailingPE !== undefined ? {
    equals: props.trailingPE
  } : undefined,
  forwardPE: props.forwardPE !== undefined ? {
    equals: props.forwardPE
  } : undefined,
  priceToSalesRatioTTM: props.priceToSalesRatioTTM !== undefined ? {
    equals: props.priceToSalesRatioTTM
  } : undefined,
  priceToBookRatio: props.priceToBookRatio !== undefined ? {
    equals: props.priceToBookRatio
  } : undefined,
  evToRevenue: props.evToRevenue !== undefined ? {
    equals: props.evToRevenue
  } : undefined,
  evToEbitda: props.evToEbitda !== undefined ? {
    equals: props.evToEbitda
  } : undefined,
  beta: props.beta !== undefined ? {
    equals: props.beta
  } : undefined,
  week52High: props.week52High !== undefined ? {
    equals: props.week52High
  } : undefined,
  week52Low: props.week52Low !== undefined ? {
    equals: props.week52Low
  } : undefined,
  day50MovingAverage: props.day50MovingAverage !== undefined ? {
    equals: props.day50MovingAverage
  } : undefined,
  day200MovingAverage: props.day200MovingAverage !== undefined ? {
    equals: props.day200MovingAverage
  } : undefined,
  sharesOutstanding: props.sharesOutstanding !== undefined ? {
    equals: props.sharesOutstanding
  } : undefined,
  dividendDate: props.dividendDate !== undefined ? {
    equals: props.dividendDate
  } : undefined,
  exDividendDate: props.exDividendDate !== undefined ? {
    equals: props.exDividendDate
  } : undefined,
  askPrice: props.askPrice !== undefined ? {
    equals: props.askPrice
  } : undefined,
  bidPrice: props.bidPrice !== undefined ? {
    equals: props.bidPrice
  } : undefined,
  createdAt: props.createdAt !== undefined ? {
    equals: props.createdAt
  } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
    equals: props.updatedAt
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  logoUrl: props.logoUrl !== undefined ? {
            set: props.logoUrl 
           } : undefined,
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  cik: props.cik !== undefined ? {
            set: props.cik 
           } : undefined,
  exchange: props.exchange !== undefined ? {
            set: props.exchange 
           } : undefined,
  currency: props.currency !== undefined ? {
            set: props.currency 
           } : undefined,
  country: props.country !== undefined ? {
            set: props.country 
           } : undefined,
  sector: props.sector !== undefined ? {
            set: props.sector 
           } : undefined,
  industry: props.industry !== undefined ? {
            set: props.industry 
           } : undefined,
  address: props.address !== undefined ? {
            set: props.address 
           } : undefined,
  officialSite: props.officialSite !== undefined ? {
            set: props.officialSite 
           } : undefined,
  fiscalYearEnd: props.fiscalYearEnd !== undefined ? {
            set: props.fiscalYearEnd 
           } : undefined,
  latestQuarter: props.latestQuarter !== undefined ? {
            set: props.latestQuarter 
           } : undefined,
  marketCapitalization: props.marketCapitalization !== undefined ? {
            set: props.marketCapitalization 
           } : undefined,
  ebitda: props.ebitda !== undefined ? {
            set: props.ebitda 
           } : undefined,
  peRatio: props.peRatio !== undefined ? {
            set: props.peRatio 
           } : undefined,
  pegRatio: props.pegRatio !== undefined ? {
            set: props.pegRatio 
           } : undefined,
  bookValue: props.bookValue !== undefined ? {
            set: props.bookValue 
           } : undefined,
  dividendPerShare: props.dividendPerShare !== undefined ? {
            set: props.dividendPerShare 
           } : undefined,
  dividendYield: props.dividendYield !== undefined ? {
            set: props.dividendYield 
           } : undefined,
  eps: props.eps !== undefined ? {
            set: props.eps 
           } : undefined,
  revenuePerShareTTM: props.revenuePerShareTTM !== undefined ? {
            set: props.revenuePerShareTTM 
           } : undefined,
  profitMargin: props.profitMargin !== undefined ? {
            set: props.profitMargin 
           } : undefined,
  operatingMarginTTM: props.operatingMarginTTM !== undefined ? {
            set: props.operatingMarginTTM 
           } : undefined,
  returnOnAssetsTTM: props.returnOnAssetsTTM !== undefined ? {
            set: props.returnOnAssetsTTM 
           } : undefined,
  returnOnEquityTTM: props.returnOnEquityTTM !== undefined ? {
            set: props.returnOnEquityTTM 
           } : undefined,
  revenueTTM: props.revenueTTM !== undefined ? {
            set: props.revenueTTM 
           } : undefined,
  grossProfitTTM: props.grossProfitTTM !== undefined ? {
            set: props.grossProfitTTM 
           } : undefined,
  dilutedEPSTTM: props.dilutedEPSTTM !== undefined ? {
            set: props.dilutedEPSTTM 
           } : undefined,
  quarterlyEarningsGrowthYOY: props.quarterlyEarningsGrowthYOY !== undefined ? {
            set: props.quarterlyEarningsGrowthYOY 
           } : undefined,
  quarterlyRevenueGrowthYOY: props.quarterlyRevenueGrowthYOY !== undefined ? {
            set: props.quarterlyRevenueGrowthYOY 
           } : undefined,
  analystTargetPrice: props.analystTargetPrice !== undefined ? {
            set: props.analystTargetPrice 
           } : undefined,
  analystRatingStrongBuy: props.analystRatingStrongBuy !== undefined ? {
            set: props.analystRatingStrongBuy 
           } : undefined,
  analystRatingBuy: props.analystRatingBuy !== undefined ? {
            set: props.analystRatingBuy 
           } : undefined,
  analystRatingHold: props.analystRatingHold !== undefined ? {
            set: props.analystRatingHold 
           } : undefined,
  analystRatingSell: props.analystRatingSell !== undefined ? {
            set: props.analystRatingSell 
           } : undefined,
  analystRatingStrongSell: props.analystRatingStrongSell !== undefined ? {
            set: props.analystRatingStrongSell 
           } : undefined,
  trailingPE: props.trailingPE !== undefined ? {
            set: props.trailingPE 
           } : undefined,
  forwardPE: props.forwardPE !== undefined ? {
            set: props.forwardPE 
           } : undefined,
  priceToSalesRatioTTM: props.priceToSalesRatioTTM !== undefined ? {
            set: props.priceToSalesRatioTTM 
           } : undefined,
  priceToBookRatio: props.priceToBookRatio !== undefined ? {
            set: props.priceToBookRatio 
           } : undefined,
  evToRevenue: props.evToRevenue !== undefined ? {
            set: props.evToRevenue 
           } : undefined,
  evToEbitda: props.evToEbitda !== undefined ? {
            set: props.evToEbitda 
           } : undefined,
  beta: props.beta !== undefined ? {
            set: props.beta 
           } : undefined,
  week52High: props.week52High !== undefined ? {
            set: props.week52High 
           } : undefined,
  week52Low: props.week52Low !== undefined ? {
            set: props.week52Low 
           } : undefined,
  day50MovingAverage: props.day50MovingAverage !== undefined ? {
            set: props.day50MovingAverage 
           } : undefined,
  day200MovingAverage: props.day200MovingAverage !== undefined ? {
            set: props.day200MovingAverage 
           } : undefined,
  sharesOutstanding: props.sharesOutstanding !== undefined ? {
            set: props.sharesOutstanding 
           } : undefined,
  dividendDate: props.dividendDate !== undefined ? {
            set: props.dividendDate 
           } : undefined,
  exDividendDate: props.exDividendDate !== undefined ? {
            set: props.exDividendDate 
           } : undefined,
  askPrice: props.askPrice !== undefined ? {
            set: props.askPrice 
           } : undefined,
  bidPrice: props.bidPrice !== undefined ? {
            set: props.bidPrice 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  trades: props.trades ? {
    upsert: props.trades.map((item: any) => ({
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
        optionType: item.optionType !== undefined ? {
            set: item.optionType  
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
        summary: item.summary !== undefined ? {
            set: item.summary  
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
              set: item.alpacaAccount.minOrderSize  
             } : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
              set: item.alpacaAccount.maxOrderSize  
             } : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
              set: item.alpacaAccount.minPercentageChange  
             } : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
              set: item.alpacaAccount.volumeThreshold  
             } : undefined,
        },
        create: {
          type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
          APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
          APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
          configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
          marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
        optionType: item.optionType !== undefined ? item.optionType : undefined,
        signal: item.signal !== undefined ? item.signal : undefined,
        strategy: item.strategy !== undefined ? item.strategy : undefined,
        analysis: item.analysis !== undefined ? item.analysis : undefined,
        summary: item.summary !== undefined ? item.summary : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
        },
      }
    } : undefined,
    actions: item.actions ? 
      Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.actions.map((item: any) => ({
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
  orders: props.orders ? {
    upsert: props.orders.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        clientOrderId: item.clientOrderId !== undefined ? {
            set: item.clientOrderId  
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
        orderClass: item.orderClass !== undefined ? {
            set: item.orderClass  
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
        strikePrice: item.strikePrice !== undefined ? {
            set: item.strikePrice  
           } : undefined,
        expirationDate: item.expirationDate !== undefined ? {
            set: item.expirationDate  
           } : undefined,
        optionType: item.optionType !== undefined ? {
            set: item.optionType  
           } : undefined,
        stopLossId: item.stopLossId !== undefined ? {
            set: item.stopLossId  
           } : undefined,
        takeProfitId: item.takeProfitId !== undefined ? {
            set: item.takeProfitId  
           } : undefined,
    stopLoss: item.stopLoss ? {
      upsert: {
        where: {
          id: item.stopLoss.id !== undefined ? {
              equals: item.stopLoss.id 
             } : undefined,
        },
        update: {
          id: item.stopLoss.id !== undefined ? {
              set: item.stopLoss.id  
             } : undefined,
          stopPrice: item.stopLoss.stopPrice !== undefined ? {
              set: item.stopLoss.stopPrice  
             } : undefined,
          limitPrice: item.stopLoss.limitPrice !== undefined ? {
              set: item.stopLoss.limitPrice  
             } : undefined,
        },
        create: {
          stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
          limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: item.takeProfit ? {
      upsert: {
        where: {
          id: item.takeProfit.id !== undefined ? {
              equals: item.takeProfit.id 
             } : undefined,
        },
        update: {
          id: item.takeProfit.id !== undefined ? {
              set: item.takeProfit.id  
             } : undefined,
          limitPrice: item.takeProfit.limitPrice !== undefined ? {
              set: item.takeProfit.limitPrice  
             } : undefined,
          stopPrice: item.takeProfit.stopPrice !== undefined ? {
              set: item.takeProfit.stopPrice  
             } : undefined,
        },
        create: {
          limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
          stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
        },
      }
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
              set: item.alpacaAccount.minOrderSize  
             } : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
              set: item.alpacaAccount.maxOrderSize  
             } : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
              set: item.alpacaAccount.minPercentageChange  
             } : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
              set: item.alpacaAccount.volumeThreshold  
             } : undefined,
        },
        create: {
          type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
          APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
          APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
          configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
          marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
        clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
        qty: item.qty !== undefined ? item.qty : undefined,
        notional: item.notional !== undefined ? item.notional : undefined,
        side: item.side !== undefined ? item.side : undefined,
        type: item.type !== undefined ? item.type : undefined,
        orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
        timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
        limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
        stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
        trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
        trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
        extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
        status: item.status !== undefined ? item.status : undefined,
        submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
        filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
        strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
        expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
        optionType: item.optionType !== undefined ? item.optionType : undefined,
        stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
        takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
    stopLoss: item.stopLoss ? 
      typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
    ? { connect: {
          id: item.stopLoss.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
        },
        create: {
          stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
          limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: item.takeProfit ? 
      typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && Object.keys(item.takeProfit)[0] === 'id'
    ? { connect: {
          id: item.takeProfit.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
        },
        create: {
          limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
          stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
  positions: props.positions ? {
    upsert: props.positions.map((item: any) => ({
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
              set: item.alpacaAccount.minOrderSize  
             } : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
              set: item.alpacaAccount.maxOrderSize  
             } : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
              set: item.alpacaAccount.minPercentageChange  
             } : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
              set: item.alpacaAccount.volumeThreshold  
             } : undefined,
        },
        create: {
          type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
          APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
          APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
          configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
          marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  newsMentions: props.newsMentions ? {
    upsert: props.newsMentions.map((item: any) => ({
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
    news: item.news ? {
      upsert: {
        where: {
          id: item.news.id !== undefined ? {
              equals: item.news.id 
             } : undefined,
          title: item.news.title !== undefined ? {
              equals: item.news.title 
             } : undefined,
          url: item.news.url !== undefined ? {
              equals: item.news.url 
             } : undefined,
        },
        update: {
          id: item.news.id !== undefined ? {
              set: item.news.id  
             } : undefined,
          title: item.news.title !== undefined ? {
              set: item.news.title  
             } : undefined,
          content: item.news.content !== undefined ? {
              set: item.news.content  
             } : undefined,
          source: item.news.source !== undefined ? {
              set: item.news.source  
             } : undefined,
          sourceDomain: item.news.sourceDomain !== undefined ? {
              set: item.news.sourceDomain  
             } : undefined,
          url: item.news.url !== undefined ? {
              set: item.news.url  
             } : undefined,
          sentiment: item.news.sentiment !== undefined ? {
              set: item.news.sentiment  
             } : undefined,
          authors: item.news.authors !== undefined ? {
              set: item.news.authors  
             } : undefined,
          summary: item.news.summary !== undefined ? {
              set: item.news.summary  
             } : undefined,
          bannerImage: item.news.bannerImage !== undefined ? {
              set: item.news.bannerImage  
             } : undefined,
          timePublished: item.news.timePublished !== undefined ? {
              set: item.news.timePublished  
             } : undefined,
          category: item.news.category !== undefined ? {
              set: item.news.category  
             } : undefined,
          topics: item.news.topics !== undefined ? {
              set: item.news.topics  
             } : undefined,
          logo: item.news.logo !== undefined ? {
              set: item.news.logo  
             } : undefined,
        },
        create: {
          title: item.news.title !== undefined ? item.news.title : undefined,
          content: item.news.content !== undefined ? item.news.content : undefined,
          source: item.news.source !== undefined ? item.news.source : undefined,
          sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
          url: item.news.url !== undefined ? item.news.url : undefined,
          sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
          authors: item.news.authors !== undefined ? item.news.authors : undefined,
          summary: item.news.summary !== undefined ? item.news.summary : undefined,
          bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
          timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
          category: item.news.category !== undefined ? item.news.category : undefined,
          topics: item.news.topics !== undefined ? item.news.topics : undefined,
          logo: item.news.logo !== undefined ? item.news.logo : undefined,
        },
      }
    } : undefined,
      },
      create: {
        url: item.url !== undefined ? item.url : undefined,
        relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
        sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
        sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
    news: item.news ? 
      typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
          id: item.news.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.news.id !== undefined ? item.news.id : undefined,
          url: item.news.url !== undefined ? item.news.url : undefined,
          title: item.news.title !== undefined ? {
              equals: item.news.title 
             } : undefined,
        },
        create: {
          title: item.news.title !== undefined ? item.news.title : undefined,
          content: item.news.content !== undefined ? item.news.content : undefined,
          source: item.news.source !== undefined ? item.news.source : undefined,
          sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
          url: item.news.url !== undefined ? item.news.url : undefined,
          sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
          authors: item.news.authors !== undefined ? item.news.authors : undefined,
          summary: item.news.summary !== undefined ? item.news.summary : undefined,
          bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
          timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
          category: item.news.category !== undefined ? item.news.category : undefined,
          topics: item.news.topics !== undefined ? item.news.topics : undefined,
          logo: item.news.logo !== undefined ? item.news.logo : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_ONE_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAsset) {
        return response.data.updateOneAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAsset:', error);
      throw error;
    }
  },

  /**
   * Update multiple Asset records.
   * @param props - Array of Asset objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: AssetType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_ASSET = gql`
      mutation updateManyAsset($data: [AssetCreateManyInput!]!) {
        updateManyAsset(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? {
    equals: prop.id
  } : undefined,
  symbol: prop.symbol !== undefined ? {
    equals: prop.symbol
  } : undefined,
  name: prop.name !== undefined ? {
    equals: prop.name
  } : undefined,
  type: prop.type !== undefined ? {
    equals: prop.type
  } : undefined,
  logoUrl: prop.logoUrl !== undefined ? {
    equals: prop.logoUrl
  } : undefined,
  description: prop.description !== undefined ? {
    equals: prop.description
  } : undefined,
  cik: prop.cik !== undefined ? {
    equals: prop.cik
  } : undefined,
  exchange: prop.exchange !== undefined ? {
    equals: prop.exchange
  } : undefined,
  currency: prop.currency !== undefined ? {
    equals: prop.currency
  } : undefined,
  country: prop.country !== undefined ? {
    equals: prop.country
  } : undefined,
  sector: prop.sector !== undefined ? {
    equals: prop.sector
  } : undefined,
  industry: prop.industry !== undefined ? {
    equals: prop.industry
  } : undefined,
  address: prop.address !== undefined ? {
    equals: prop.address
  } : undefined,
  officialSite: prop.officialSite !== undefined ? {
    equals: prop.officialSite
  } : undefined,
  fiscalYearEnd: prop.fiscalYearEnd !== undefined ? {
    equals: prop.fiscalYearEnd
  } : undefined,
  latestQuarter: prop.latestQuarter !== undefined ? {
    equals: prop.latestQuarter
  } : undefined,
  marketCapitalization: prop.marketCapitalization !== undefined ? {
    equals: prop.marketCapitalization
  } : undefined,
  ebitda: prop.ebitda !== undefined ? {
    equals: prop.ebitda
  } : undefined,
  peRatio: prop.peRatio !== undefined ? {
    equals: prop.peRatio
  } : undefined,
  pegRatio: prop.pegRatio !== undefined ? {
    equals: prop.pegRatio
  } : undefined,
  bookValue: prop.bookValue !== undefined ? {
    equals: prop.bookValue
  } : undefined,
  dividendPerShare: prop.dividendPerShare !== undefined ? {
    equals: prop.dividendPerShare
  } : undefined,
  dividendYield: prop.dividendYield !== undefined ? {
    equals: prop.dividendYield
  } : undefined,
  eps: prop.eps !== undefined ? {
    equals: prop.eps
  } : undefined,
  revenuePerShareTTM: prop.revenuePerShareTTM !== undefined ? {
    equals: prop.revenuePerShareTTM
  } : undefined,
  profitMargin: prop.profitMargin !== undefined ? {
    equals: prop.profitMargin
  } : undefined,
  operatingMarginTTM: prop.operatingMarginTTM !== undefined ? {
    equals: prop.operatingMarginTTM
  } : undefined,
  returnOnAssetsTTM: prop.returnOnAssetsTTM !== undefined ? {
    equals: prop.returnOnAssetsTTM
  } : undefined,
  returnOnEquityTTM: prop.returnOnEquityTTM !== undefined ? {
    equals: prop.returnOnEquityTTM
  } : undefined,
  revenueTTM: prop.revenueTTM !== undefined ? {
    equals: prop.revenueTTM
  } : undefined,
  grossProfitTTM: prop.grossProfitTTM !== undefined ? {
    equals: prop.grossProfitTTM
  } : undefined,
  dilutedEPSTTM: prop.dilutedEPSTTM !== undefined ? {
    equals: prop.dilutedEPSTTM
  } : undefined,
  quarterlyEarningsGrowthYOY: prop.quarterlyEarningsGrowthYOY !== undefined ? {
    equals: prop.quarterlyEarningsGrowthYOY
  } : undefined,
  quarterlyRevenueGrowthYOY: prop.quarterlyRevenueGrowthYOY !== undefined ? {
    equals: prop.quarterlyRevenueGrowthYOY
  } : undefined,
  analystTargetPrice: prop.analystTargetPrice !== undefined ? {
    equals: prop.analystTargetPrice
  } : undefined,
  analystRatingStrongBuy: prop.analystRatingStrongBuy !== undefined ? {
    equals: prop.analystRatingStrongBuy
  } : undefined,
  analystRatingBuy: prop.analystRatingBuy !== undefined ? {
    equals: prop.analystRatingBuy
  } : undefined,
  analystRatingHold: prop.analystRatingHold !== undefined ? {
    equals: prop.analystRatingHold
  } : undefined,
  analystRatingSell: prop.analystRatingSell !== undefined ? {
    equals: prop.analystRatingSell
  } : undefined,
  analystRatingStrongSell: prop.analystRatingStrongSell !== undefined ? {
    equals: prop.analystRatingStrongSell
  } : undefined,
  trailingPE: prop.trailingPE !== undefined ? {
    equals: prop.trailingPE
  } : undefined,
  forwardPE: prop.forwardPE !== undefined ? {
    equals: prop.forwardPE
  } : undefined,
  priceToSalesRatioTTM: prop.priceToSalesRatioTTM !== undefined ? {
    equals: prop.priceToSalesRatioTTM
  } : undefined,
  priceToBookRatio: prop.priceToBookRatio !== undefined ? {
    equals: prop.priceToBookRatio
  } : undefined,
  evToRevenue: prop.evToRevenue !== undefined ? {
    equals: prop.evToRevenue
  } : undefined,
  evToEbitda: prop.evToEbitda !== undefined ? {
    equals: prop.evToEbitda
  } : undefined,
  beta: prop.beta !== undefined ? {
    equals: prop.beta
  } : undefined,
  week52High: prop.week52High !== undefined ? {
    equals: prop.week52High
  } : undefined,
  week52Low: prop.week52Low !== undefined ? {
    equals: prop.week52Low
  } : undefined,
  day50MovingAverage: prop.day50MovingAverage !== undefined ? {
    equals: prop.day50MovingAverage
  } : undefined,
  day200MovingAverage: prop.day200MovingAverage !== undefined ? {
    equals: prop.day200MovingAverage
  } : undefined,
  sharesOutstanding: prop.sharesOutstanding !== undefined ? {
    equals: prop.sharesOutstanding
  } : undefined,
  dividendDate: prop.dividendDate !== undefined ? {
    equals: prop.dividendDate
  } : undefined,
  exDividendDate: prop.exDividendDate !== undefined ? {
    equals: prop.exDividendDate
  } : undefined,
  askPrice: prop.askPrice !== undefined ? {
    equals: prop.askPrice
  } : undefined,
  bidPrice: prop.bidPrice !== undefined ? {
    equals: prop.bidPrice
  } : undefined,
  createdAt: prop.createdAt !== undefined ? {
    equals: prop.createdAt
  } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
    equals: prop.updatedAt
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  symbol: prop.symbol !== undefined ? {
            set: prop.symbol 
           } : undefined,
  name: prop.name !== undefined ? {
            set: prop.name 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  logoUrl: prop.logoUrl !== undefined ? {
            set: prop.logoUrl 
           } : undefined,
  description: prop.description !== undefined ? {
            set: prop.description 
           } : undefined,
  cik: prop.cik !== undefined ? {
            set: prop.cik 
           } : undefined,
  exchange: prop.exchange !== undefined ? {
            set: prop.exchange 
           } : undefined,
  currency: prop.currency !== undefined ? {
            set: prop.currency 
           } : undefined,
  country: prop.country !== undefined ? {
            set: prop.country 
           } : undefined,
  sector: prop.sector !== undefined ? {
            set: prop.sector 
           } : undefined,
  industry: prop.industry !== undefined ? {
            set: prop.industry 
           } : undefined,
  address: prop.address !== undefined ? {
            set: prop.address 
           } : undefined,
  officialSite: prop.officialSite !== undefined ? {
            set: prop.officialSite 
           } : undefined,
  fiscalYearEnd: prop.fiscalYearEnd !== undefined ? {
            set: prop.fiscalYearEnd 
           } : undefined,
  latestQuarter: prop.latestQuarter !== undefined ? {
            set: prop.latestQuarter 
           } : undefined,
  marketCapitalization: prop.marketCapitalization !== undefined ? {
            set: prop.marketCapitalization 
           } : undefined,
  ebitda: prop.ebitda !== undefined ? {
            set: prop.ebitda 
           } : undefined,
  peRatio: prop.peRatio !== undefined ? {
            set: prop.peRatio 
           } : undefined,
  pegRatio: prop.pegRatio !== undefined ? {
            set: prop.pegRatio 
           } : undefined,
  bookValue: prop.bookValue !== undefined ? {
            set: prop.bookValue 
           } : undefined,
  dividendPerShare: prop.dividendPerShare !== undefined ? {
            set: prop.dividendPerShare 
           } : undefined,
  dividendYield: prop.dividendYield !== undefined ? {
            set: prop.dividendYield 
           } : undefined,
  eps: prop.eps !== undefined ? {
            set: prop.eps 
           } : undefined,
  revenuePerShareTTM: prop.revenuePerShareTTM !== undefined ? {
            set: prop.revenuePerShareTTM 
           } : undefined,
  profitMargin: prop.profitMargin !== undefined ? {
            set: prop.profitMargin 
           } : undefined,
  operatingMarginTTM: prop.operatingMarginTTM !== undefined ? {
            set: prop.operatingMarginTTM 
           } : undefined,
  returnOnAssetsTTM: prop.returnOnAssetsTTM !== undefined ? {
            set: prop.returnOnAssetsTTM 
           } : undefined,
  returnOnEquityTTM: prop.returnOnEquityTTM !== undefined ? {
            set: prop.returnOnEquityTTM 
           } : undefined,
  revenueTTM: prop.revenueTTM !== undefined ? {
            set: prop.revenueTTM 
           } : undefined,
  grossProfitTTM: prop.grossProfitTTM !== undefined ? {
            set: prop.grossProfitTTM 
           } : undefined,
  dilutedEPSTTM: prop.dilutedEPSTTM !== undefined ? {
            set: prop.dilutedEPSTTM 
           } : undefined,
  quarterlyEarningsGrowthYOY: prop.quarterlyEarningsGrowthYOY !== undefined ? {
            set: prop.quarterlyEarningsGrowthYOY 
           } : undefined,
  quarterlyRevenueGrowthYOY: prop.quarterlyRevenueGrowthYOY !== undefined ? {
            set: prop.quarterlyRevenueGrowthYOY 
           } : undefined,
  analystTargetPrice: prop.analystTargetPrice !== undefined ? {
            set: prop.analystTargetPrice 
           } : undefined,
  analystRatingStrongBuy: prop.analystRatingStrongBuy !== undefined ? {
            set: prop.analystRatingStrongBuy 
           } : undefined,
  analystRatingBuy: prop.analystRatingBuy !== undefined ? {
            set: prop.analystRatingBuy 
           } : undefined,
  analystRatingHold: prop.analystRatingHold !== undefined ? {
            set: prop.analystRatingHold 
           } : undefined,
  analystRatingSell: prop.analystRatingSell !== undefined ? {
            set: prop.analystRatingSell 
           } : undefined,
  analystRatingStrongSell: prop.analystRatingStrongSell !== undefined ? {
            set: prop.analystRatingStrongSell 
           } : undefined,
  trailingPE: prop.trailingPE !== undefined ? {
            set: prop.trailingPE 
           } : undefined,
  forwardPE: prop.forwardPE !== undefined ? {
            set: prop.forwardPE 
           } : undefined,
  priceToSalesRatioTTM: prop.priceToSalesRatioTTM !== undefined ? {
            set: prop.priceToSalesRatioTTM 
           } : undefined,
  priceToBookRatio: prop.priceToBookRatio !== undefined ? {
            set: prop.priceToBookRatio 
           } : undefined,
  evToRevenue: prop.evToRevenue !== undefined ? {
            set: prop.evToRevenue 
           } : undefined,
  evToEbitda: prop.evToEbitda !== undefined ? {
            set: prop.evToEbitda 
           } : undefined,
  beta: prop.beta !== undefined ? {
            set: prop.beta 
           } : undefined,
  week52High: prop.week52High !== undefined ? {
            set: prop.week52High 
           } : undefined,
  week52Low: prop.week52Low !== undefined ? {
            set: prop.week52Low 
           } : undefined,
  day50MovingAverage: prop.day50MovingAverage !== undefined ? {
            set: prop.day50MovingAverage 
           } : undefined,
  day200MovingAverage: prop.day200MovingAverage !== undefined ? {
            set: prop.day200MovingAverage 
           } : undefined,
  sharesOutstanding: prop.sharesOutstanding !== undefined ? {
            set: prop.sharesOutstanding 
           } : undefined,
  dividendDate: prop.dividendDate !== undefined ? {
            set: prop.dividendDate 
           } : undefined,
  exDividendDate: prop.exDividendDate !== undefined ? {
            set: prop.exDividendDate 
           } : undefined,
  askPrice: prop.askPrice !== undefined ? {
            set: prop.askPrice 
           } : undefined,
  bidPrice: prop.bidPrice !== undefined ? {
            set: prop.bidPrice 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  trades: prop.trades ? {
    upsert: prop.trades.map((item: any) => ({
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
        optionType: item.optionType !== undefined ? {
            set: item.optionType  
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
        summary: item.summary !== undefined ? {
            set: item.summary  
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
              set: item.alpacaAccount.minOrderSize  
             } : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
              set: item.alpacaAccount.maxOrderSize  
             } : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
              set: item.alpacaAccount.minPercentageChange  
             } : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
              set: item.alpacaAccount.volumeThreshold  
             } : undefined,
        },
        create: {
          type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
          APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
          APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
          configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
          marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
        optionType: item.optionType !== undefined ? item.optionType : undefined,
        signal: item.signal !== undefined ? item.signal : undefined,
        strategy: item.strategy !== undefined ? item.strategy : undefined,
        analysis: item.analysis !== undefined ? item.analysis : undefined,
        summary: item.summary !== undefined ? item.summary : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
        },
      }
    } : undefined,
    actions: item.actions ? 
      Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.actions.map((item: any) => ({
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
  orders: prop.orders ? {
    upsert: prop.orders.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        clientOrderId: item.clientOrderId !== undefined ? {
            set: item.clientOrderId  
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
        orderClass: item.orderClass !== undefined ? {
            set: item.orderClass  
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
        strikePrice: item.strikePrice !== undefined ? {
            set: item.strikePrice  
           } : undefined,
        expirationDate: item.expirationDate !== undefined ? {
            set: item.expirationDate  
           } : undefined,
        optionType: item.optionType !== undefined ? {
            set: item.optionType  
           } : undefined,
        stopLossId: item.stopLossId !== undefined ? {
            set: item.stopLossId  
           } : undefined,
        takeProfitId: item.takeProfitId !== undefined ? {
            set: item.takeProfitId  
           } : undefined,
    stopLoss: item.stopLoss ? {
      upsert: {
        where: {
          id: item.stopLoss.id !== undefined ? {
              equals: item.stopLoss.id 
             } : undefined,
        },
        update: {
          id: item.stopLoss.id !== undefined ? {
              set: item.stopLoss.id  
             } : undefined,
          stopPrice: item.stopLoss.stopPrice !== undefined ? {
              set: item.stopLoss.stopPrice  
             } : undefined,
          limitPrice: item.stopLoss.limitPrice !== undefined ? {
              set: item.stopLoss.limitPrice  
             } : undefined,
        },
        create: {
          stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
          limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: item.takeProfit ? {
      upsert: {
        where: {
          id: item.takeProfit.id !== undefined ? {
              equals: item.takeProfit.id 
             } : undefined,
        },
        update: {
          id: item.takeProfit.id !== undefined ? {
              set: item.takeProfit.id  
             } : undefined,
          limitPrice: item.takeProfit.limitPrice !== undefined ? {
              set: item.takeProfit.limitPrice  
             } : undefined,
          stopPrice: item.takeProfit.stopPrice !== undefined ? {
              set: item.takeProfit.stopPrice  
             } : undefined,
        },
        create: {
          limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
          stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
        },
      }
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
              set: item.alpacaAccount.minOrderSize  
             } : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
              set: item.alpacaAccount.maxOrderSize  
             } : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
              set: item.alpacaAccount.minPercentageChange  
             } : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
              set: item.alpacaAccount.volumeThreshold  
             } : undefined,
        },
        create: {
          type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
          APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
          APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
          configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
          marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
        clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
        qty: item.qty !== undefined ? item.qty : undefined,
        notional: item.notional !== undefined ? item.notional : undefined,
        side: item.side !== undefined ? item.side : undefined,
        type: item.type !== undefined ? item.type : undefined,
        orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
        timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
        limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
        stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
        trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
        trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
        extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
        status: item.status !== undefined ? item.status : undefined,
        submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
        filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
        strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
        expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
        optionType: item.optionType !== undefined ? item.optionType : undefined,
        stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
        takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
    stopLoss: item.stopLoss ? 
      typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
    ? { connect: {
          id: item.stopLoss.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
        },
        create: {
          stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
          limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: item.takeProfit ? 
      typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && Object.keys(item.takeProfit)[0] === 'id'
    ? { connect: {
          id: item.takeProfit.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
        },
        create: {
          limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
          stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
  positions: prop.positions ? {
    upsert: prop.positions.map((item: any) => ({
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
              set: item.alpacaAccount.minOrderSize  
             } : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
              set: item.alpacaAccount.maxOrderSize  
             } : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
              set: item.alpacaAccount.minPercentageChange  
             } : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
              set: item.alpacaAccount.volumeThreshold  
             } : undefined,
        },
        create: {
          type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
          APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
          APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
          configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
          marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
          minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  newsMentions: prop.newsMentions ? {
    upsert: prop.newsMentions.map((item: any) => ({
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
    news: item.news ? {
      upsert: {
        where: {
          id: item.news.id !== undefined ? {
              equals: item.news.id 
             } : undefined,
          title: item.news.title !== undefined ? {
              equals: item.news.title 
             } : undefined,
          url: item.news.url !== undefined ? {
              equals: item.news.url 
             } : undefined,
        },
        update: {
          id: item.news.id !== undefined ? {
              set: item.news.id  
             } : undefined,
          title: item.news.title !== undefined ? {
              set: item.news.title  
             } : undefined,
          content: item.news.content !== undefined ? {
              set: item.news.content  
             } : undefined,
          source: item.news.source !== undefined ? {
              set: item.news.source  
             } : undefined,
          sourceDomain: item.news.sourceDomain !== undefined ? {
              set: item.news.sourceDomain  
             } : undefined,
          url: item.news.url !== undefined ? {
              set: item.news.url  
             } : undefined,
          sentiment: item.news.sentiment !== undefined ? {
              set: item.news.sentiment  
             } : undefined,
          authors: item.news.authors !== undefined ? {
              set: item.news.authors  
             } : undefined,
          summary: item.news.summary !== undefined ? {
              set: item.news.summary  
             } : undefined,
          bannerImage: item.news.bannerImage !== undefined ? {
              set: item.news.bannerImage  
             } : undefined,
          timePublished: item.news.timePublished !== undefined ? {
              set: item.news.timePublished  
             } : undefined,
          category: item.news.category !== undefined ? {
              set: item.news.category  
             } : undefined,
          topics: item.news.topics !== undefined ? {
              set: item.news.topics  
             } : undefined,
          logo: item.news.logo !== undefined ? {
              set: item.news.logo  
             } : undefined,
        },
        create: {
          title: item.news.title !== undefined ? item.news.title : undefined,
          content: item.news.content !== undefined ? item.news.content : undefined,
          source: item.news.source !== undefined ? item.news.source : undefined,
          sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
          url: item.news.url !== undefined ? item.news.url : undefined,
          sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
          authors: item.news.authors !== undefined ? item.news.authors : undefined,
          summary: item.news.summary !== undefined ? item.news.summary : undefined,
          bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
          timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
          category: item.news.category !== undefined ? item.news.category : undefined,
          topics: item.news.topics !== undefined ? item.news.topics : undefined,
          logo: item.news.logo !== undefined ? item.news.logo : undefined,
        },
      }
    } : undefined,
      },
      create: {
        url: item.url !== undefined ? item.url : undefined,
        relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
        sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
        sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
    news: item.news ? 
      typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
          id: item.news.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.news.id !== undefined ? item.news.id : undefined,
          url: item.news.url !== undefined ? item.news.url : undefined,
          title: item.news.title !== undefined ? {
              equals: item.news.title 
             } : undefined,
        },
        create: {
          title: item.news.title !== undefined ? item.news.title : undefined,
          content: item.news.content !== undefined ? item.news.content : undefined,
          source: item.news.source !== undefined ? item.news.source : undefined,
          sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
          url: item.news.url !== undefined ? item.news.url : undefined,
          sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
          authors: item.news.authors !== undefined ? item.news.authors : undefined,
          summary: item.news.summary !== undefined ? item.news.summary : undefined,
          bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
          timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
          category: item.news.category !== undefined ? item.news.category : undefined,
          topics: item.news.topics !== undefined ? item.news.topics : undefined,
          logo: item.news.logo !== undefined ? item.news.logo : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_MANY_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyAsset) {
        return response.data.updateManyAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyAsset:', error);
      throw error;
    }
  },

  /**
   * Delete a single Asset record.
   * @param props - Properties to update.
   * @returns The deleted Asset or null.
   */
  async delete(props: AssetType): Promise<AssetType> {

    const client = createApolloClient();

      const DELETE_ONE_ASSET = gql`
      mutation deleteOneAsset($where: AssetWhereUniqueInput!) {
        deleteOneAsset(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAsset) {
        return response.data.deleteOneAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAsset:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Asset record by ID.
   * @param props - Properties to update.
   * @returns The retrieved Asset or null.
   */
  async get(props: AssetType): Promise<AssetType | null> {

    const client = createApolloClient();

      const GET_ASSET = gql`
      query getAsset($where: AssetWhereUniqueInput!) {
        getAsset(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
    equals: props.id
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name
  } : undefined,
  type: props.type !== undefined ? {
    equals: props.type
  } : undefined,
  logoUrl: props.logoUrl !== undefined ? {
    equals: props.logoUrl
  } : undefined,
  description: props.description !== undefined ? {
    equals: props.description
  } : undefined,
  cik: props.cik !== undefined ? {
    equals: props.cik
  } : undefined,
  exchange: props.exchange !== undefined ? {
    equals: props.exchange
  } : undefined,
  currency: props.currency !== undefined ? {
    equals: props.currency
  } : undefined,
  country: props.country !== undefined ? {
    equals: props.country
  } : undefined,
  sector: props.sector !== undefined ? {
    equals: props.sector
  } : undefined,
  industry: props.industry !== undefined ? {
    equals: props.industry
  } : undefined,
  address: props.address !== undefined ? {
    equals: props.address
  } : undefined,
  officialSite: props.officialSite !== undefined ? {
    equals: props.officialSite
  } : undefined,
  fiscalYearEnd: props.fiscalYearEnd !== undefined ? {
    equals: props.fiscalYearEnd
  } : undefined,
  latestQuarter: props.latestQuarter !== undefined ? {
    equals: props.latestQuarter
  } : undefined,
  marketCapitalization: props.marketCapitalization !== undefined ? {
    equals: props.marketCapitalization
  } : undefined,
  ebitda: props.ebitda !== undefined ? {
    equals: props.ebitda
  } : undefined,
  peRatio: props.peRatio !== undefined ? {
    equals: props.peRatio
  } : undefined,
  pegRatio: props.pegRatio !== undefined ? {
    equals: props.pegRatio
  } : undefined,
  bookValue: props.bookValue !== undefined ? {
    equals: props.bookValue
  } : undefined,
  dividendPerShare: props.dividendPerShare !== undefined ? {
    equals: props.dividendPerShare
  } : undefined,
  dividendYield: props.dividendYield !== undefined ? {
    equals: props.dividendYield
  } : undefined,
  eps: props.eps !== undefined ? {
    equals: props.eps
  } : undefined,
  revenuePerShareTTM: props.revenuePerShareTTM !== undefined ? {
    equals: props.revenuePerShareTTM
  } : undefined,
  profitMargin: props.profitMargin !== undefined ? {
    equals: props.profitMargin
  } : undefined,
  operatingMarginTTM: props.operatingMarginTTM !== undefined ? {
    equals: props.operatingMarginTTM
  } : undefined,
  returnOnAssetsTTM: props.returnOnAssetsTTM !== undefined ? {
    equals: props.returnOnAssetsTTM
  } : undefined,
  returnOnEquityTTM: props.returnOnEquityTTM !== undefined ? {
    equals: props.returnOnEquityTTM
  } : undefined,
  revenueTTM: props.revenueTTM !== undefined ? {
    equals: props.revenueTTM
  } : undefined,
  grossProfitTTM: props.grossProfitTTM !== undefined ? {
    equals: props.grossProfitTTM
  } : undefined,
  dilutedEPSTTM: props.dilutedEPSTTM !== undefined ? {
    equals: props.dilutedEPSTTM
  } : undefined,
  quarterlyEarningsGrowthYOY: props.quarterlyEarningsGrowthYOY !== undefined ? {
    equals: props.quarterlyEarningsGrowthYOY
  } : undefined,
  quarterlyRevenueGrowthYOY: props.quarterlyRevenueGrowthYOY !== undefined ? {
    equals: props.quarterlyRevenueGrowthYOY
  } : undefined,
  analystTargetPrice: props.analystTargetPrice !== undefined ? {
    equals: props.analystTargetPrice
  } : undefined,
  analystRatingStrongBuy: props.analystRatingStrongBuy !== undefined ? {
    equals: props.analystRatingStrongBuy
  } : undefined,
  analystRatingBuy: props.analystRatingBuy !== undefined ? {
    equals: props.analystRatingBuy
  } : undefined,
  analystRatingHold: props.analystRatingHold !== undefined ? {
    equals: props.analystRatingHold
  } : undefined,
  analystRatingSell: props.analystRatingSell !== undefined ? {
    equals: props.analystRatingSell
  } : undefined,
  analystRatingStrongSell: props.analystRatingStrongSell !== undefined ? {
    equals: props.analystRatingStrongSell
  } : undefined,
  trailingPE: props.trailingPE !== undefined ? {
    equals: props.trailingPE
  } : undefined,
  forwardPE: props.forwardPE !== undefined ? {
    equals: props.forwardPE
  } : undefined,
  priceToSalesRatioTTM: props.priceToSalesRatioTTM !== undefined ? {
    equals: props.priceToSalesRatioTTM
  } : undefined,
  priceToBookRatio: props.priceToBookRatio !== undefined ? {
    equals: props.priceToBookRatio
  } : undefined,
  evToRevenue: props.evToRevenue !== undefined ? {
    equals: props.evToRevenue
  } : undefined,
  evToEbitda: props.evToEbitda !== undefined ? {
    equals: props.evToEbitda
  } : undefined,
  beta: props.beta !== undefined ? {
    equals: props.beta
  } : undefined,
  week52High: props.week52High !== undefined ? {
    equals: props.week52High
  } : undefined,
  week52Low: props.week52Low !== undefined ? {
    equals: props.week52Low
  } : undefined,
  day50MovingAverage: props.day50MovingAverage !== undefined ? {
    equals: props.day50MovingAverage
  } : undefined,
  day200MovingAverage: props.day200MovingAverage !== undefined ? {
    equals: props.day200MovingAverage
  } : undefined,
  sharesOutstanding: props.sharesOutstanding !== undefined ? {
    equals: props.sharesOutstanding
  } : undefined,
  dividendDate: props.dividendDate !== undefined ? {
    equals: props.dividendDate
  } : undefined,
  exDividendDate: props.exDividendDate !== undefined ? {
    equals: props.exDividendDate
  } : undefined,
  askPrice: props.askPrice !== undefined ? {
    equals: props.askPrice
  } : undefined,
  bidPrice: props.bidPrice !== undefined ? {
    equals: props.bidPrice
  } : undefined,
  createdAt: props.createdAt !== undefined ? {
    equals: props.createdAt
  } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
    equals: props.updatedAt
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAsset ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Asset found') {
        return null;
      } else {
        console.error('Error in getAsset:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Assets records.
   * @returns An array of Asset records or null.
   */
  async getAll(): Promise<AssetType[] | null> {

    const client = createApolloClient();

      const GET_ALL_ASSET = gql`
      query getAllAsset {
        assets {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ASSET });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.assets ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Asset found') {
        return null;
      } else {
        console.error('Error in getAsset:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Asset records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found Asset records or null.
   */
  async findMany(props: AssetType): Promise<AssetType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_ASSET = gql`
      query findManyAsset($where: AssetWhereInput!) {
        assets(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name
  } : undefined,
  type: props.type !== undefined ? {
    equals: props.type
  } : undefined,
  logoUrl: props.logoUrl !== undefined ? {
    equals: props.logoUrl
  } : undefined,
  description: props.description !== undefined ? {
    equals: props.description
  } : undefined,
  cik: props.cik !== undefined ? {
    equals: props.cik
  } : undefined,
  exchange: props.exchange !== undefined ? {
    equals: props.exchange
  } : undefined,
  currency: props.currency !== undefined ? {
    equals: props.currency
  } : undefined,
  country: props.country !== undefined ? {
    equals: props.country
  } : undefined,
  sector: props.sector !== undefined ? {
    equals: props.sector
  } : undefined,
  industry: props.industry !== undefined ? {
    equals: props.industry
  } : undefined,
  address: props.address !== undefined ? {
    equals: props.address
  } : undefined,
  officialSite: props.officialSite !== undefined ? {
    equals: props.officialSite
  } : undefined,
  fiscalYearEnd: props.fiscalYearEnd !== undefined ? {
    equals: props.fiscalYearEnd
  } : undefined,
  latestQuarter: props.latestQuarter !== undefined ? {
    equals: props.latestQuarter
  } : undefined,
  marketCapitalization: props.marketCapitalization !== undefined ? {
    equals: props.marketCapitalization
  } : undefined,
  ebitda: props.ebitda !== undefined ? {
    equals: props.ebitda
  } : undefined,
  peRatio: props.peRatio !== undefined ? {
    equals: props.peRatio
  } : undefined,
  pegRatio: props.pegRatio !== undefined ? {
    equals: props.pegRatio
  } : undefined,
  bookValue: props.bookValue !== undefined ? {
    equals: props.bookValue
  } : undefined,
  dividendPerShare: props.dividendPerShare !== undefined ? {
    equals: props.dividendPerShare
  } : undefined,
  dividendYield: props.dividendYield !== undefined ? {
    equals: props.dividendYield
  } : undefined,
  eps: props.eps !== undefined ? {
    equals: props.eps
  } : undefined,
  revenuePerShareTTM: props.revenuePerShareTTM !== undefined ? {
    equals: props.revenuePerShareTTM
  } : undefined,
  profitMargin: props.profitMargin !== undefined ? {
    equals: props.profitMargin
  } : undefined,
  operatingMarginTTM: props.operatingMarginTTM !== undefined ? {
    equals: props.operatingMarginTTM
  } : undefined,
  returnOnAssetsTTM: props.returnOnAssetsTTM !== undefined ? {
    equals: props.returnOnAssetsTTM
  } : undefined,
  returnOnEquityTTM: props.returnOnEquityTTM !== undefined ? {
    equals: props.returnOnEquityTTM
  } : undefined,
  revenueTTM: props.revenueTTM !== undefined ? {
    equals: props.revenueTTM
  } : undefined,
  grossProfitTTM: props.grossProfitTTM !== undefined ? {
    equals: props.grossProfitTTM
  } : undefined,
  dilutedEPSTTM: props.dilutedEPSTTM !== undefined ? {
    equals: props.dilutedEPSTTM
  } : undefined,
  quarterlyEarningsGrowthYOY: props.quarterlyEarningsGrowthYOY !== undefined ? {
    equals: props.quarterlyEarningsGrowthYOY
  } : undefined,
  quarterlyRevenueGrowthYOY: props.quarterlyRevenueGrowthYOY !== undefined ? {
    equals: props.quarterlyRevenueGrowthYOY
  } : undefined,
  analystTargetPrice: props.analystTargetPrice !== undefined ? {
    equals: props.analystTargetPrice
  } : undefined,
  analystRatingStrongBuy: props.analystRatingStrongBuy !== undefined ? {
    equals: props.analystRatingStrongBuy
  } : undefined,
  analystRatingBuy: props.analystRatingBuy !== undefined ? {
    equals: props.analystRatingBuy
  } : undefined,
  analystRatingHold: props.analystRatingHold !== undefined ? {
    equals: props.analystRatingHold
  } : undefined,
  analystRatingSell: props.analystRatingSell !== undefined ? {
    equals: props.analystRatingSell
  } : undefined,
  analystRatingStrongSell: props.analystRatingStrongSell !== undefined ? {
    equals: props.analystRatingStrongSell
  } : undefined,
  trailingPE: props.trailingPE !== undefined ? {
    equals: props.trailingPE
  } : undefined,
  forwardPE: props.forwardPE !== undefined ? {
    equals: props.forwardPE
  } : undefined,
  priceToSalesRatioTTM: props.priceToSalesRatioTTM !== undefined ? {
    equals: props.priceToSalesRatioTTM
  } : undefined,
  priceToBookRatio: props.priceToBookRatio !== undefined ? {
    equals: props.priceToBookRatio
  } : undefined,
  evToRevenue: props.evToRevenue !== undefined ? {
    equals: props.evToRevenue
  } : undefined,
  evToEbitda: props.evToEbitda !== undefined ? {
    equals: props.evToEbitda
  } : undefined,
  beta: props.beta !== undefined ? {
    equals: props.beta
  } : undefined,
  week52High: props.week52High !== undefined ? {
    equals: props.week52High
  } : undefined,
  week52Low: props.week52Low !== undefined ? {
    equals: props.week52Low
  } : undefined,
  day50MovingAverage: props.day50MovingAverage !== undefined ? {
    equals: props.day50MovingAverage
  } : undefined,
  day200MovingAverage: props.day200MovingAverage !== undefined ? {
    equals: props.day200MovingAverage
  } : undefined,
  sharesOutstanding: props.sharesOutstanding !== undefined ? {
    equals: props.sharesOutstanding
  } : undefined,
  dividendDate: props.dividendDate !== undefined ? {
    equals: props.dividendDate
  } : undefined,
  exDividendDate: props.exDividendDate !== undefined ? {
    equals: props.exDividendDate
  } : undefined,
  askPrice: props.askPrice !== undefined ? {
    equals: props.askPrice
  } : undefined,
  bidPrice: props.bidPrice !== undefined ? {
    equals: props.bidPrice
  } : undefined,
  createdAt: props.createdAt !== undefined ? {
    equals: props.createdAt
  } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
    equals: props.updatedAt
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Assets) {
        return response.data.assets;
      } else {
       return [] as AssetType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Asset found') {
        return null;
      } else {
        console.error('Error in getAsset:', error);
        throw error;
      }
    }
  }
};
