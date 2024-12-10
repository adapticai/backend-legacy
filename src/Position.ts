
  
import { Position as PositionType } from './generated/typegraphql-prisma/models/Position';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Position model.
   */

  const selectionSet = `
    
  id
  assetId
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
  closed
  createdAt
  updatedAt

  `;

  export const Position = {

    /**
     * Create a new Position record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Position or null.
     */

    async create(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_POSITION = gql`
        mutation createOnePosition($data: PositionCreateInput!) {
          createOnePosition(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            averageEntryPrice: props.averageEntryPrice !== undefined ? props.averageEntryPrice : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  qtyAvailable: props.qtyAvailable !== undefined ? props.qtyAvailable : undefined,
  marketValue: props.marketValue !== undefined ? props.marketValue : undefined,
  costBasis: props.costBasis !== undefined ? props.costBasis : undefined,
  unrealizedPL: props.unrealizedPL !== undefined ? props.unrealizedPL : undefined,
  unrealizedPLPC: props.unrealizedPLPC !== undefined ? props.unrealizedPLPC : undefined,
  unrealisedIntradayPL: props.unrealisedIntradayPL !== undefined ? props.unrealisedIntradayPL : undefined,
  unrealisedIntradayPLPC: props.unrealisedIntradayPLPC !== undefined ? props.unrealisedIntradayPLPC : undefined,
  currentPrice: props.currentPrice !== undefined ? props.currentPrice : undefined,
  lastTradePrice: props.lastTradePrice !== undefined ? props.lastTradePrice : undefined,
  changeToday: props.changeToday !== undefined ? props.changeToday : undefined,
  assetMarginable: props.assetMarginable !== undefined ? props.assetMarginable : undefined,
  closed: props.closed !== undefined ? props.closed : undefined,
  asset: props.asset ? 
    typeof props.asset === 'object' && Object.keys(props.asset).length === 1 && Object.keys(props.asset)[0] === 'id'
    ? { connect: {
        id: props.asset.id
      }}
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
    trades: props.asset.trades ? 
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 && props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.trades.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
              set: item.alpacaAccount.configuration
            } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 && item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.actions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            dependsOn: item.dependsOn !== undefined ? {
              set: item.dependsOn
            } : undefined,
            dependedOnBy: item.dependedOnBy !== undefined ? {
              set: item.dependedOnBy
            } : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: props.asset.orders ? 
      Array.isArray(props.asset.orders) && props.asset.orders.length > 0 && props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.orders.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          contractId: item.contractId !== undefined ? item.contractId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
          filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
          canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
            orderId: item.stopLoss.orderId !== undefined ? item.stopLoss.orderId : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
            orderId: item.takeProfit.orderId !== undefined ? item.takeProfit.orderId : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
              set: item.alpacaAccount.configuration
            } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
            dependsOn: item.action.dependsOn !== undefined ? {
              set: item.action.dependsOn
            } : undefined,
            dependedOnBy: item.action.dependedOnBy !== undefined ? {
              set: item.action.dependedOnBy
            } : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.contract.id !== undefined ? item.contract.id : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? {
                equals: item.contract.name 
               } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                equals: item.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? item.contract.name : undefined,
            status: item.contract.status !== undefined ? item.contract.status : undefined,
            tradable: item.contract.tradable !== undefined ? item.contract.tradable : undefined,
            expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
            rootSymbol: item.contract.rootSymbol !== undefined ? item.contract.rootSymbol : undefined,
            underlyingSymbol: item.contract.underlyingSymbol !== undefined ? item.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? item.contract.underlyingAssetId : undefined,
            type: item.contract.type !== undefined ? item.contract.type : undefined,
            style: item.contract.style !== undefined ? item.contract.style : undefined,
            strikePrice: item.contract.strikePrice !== undefined ? item.contract.strikePrice : undefined,
            multiplier: item.contract.multiplier !== undefined ? item.contract.multiplier : undefined,
            size: item.contract.size !== undefined ? item.contract.size : undefined,
            openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
            openInterestDate: item.contract.openInterestDate !== undefined ? item.contract.openInterestDate : undefined,
            closePrice: item.contract.closePrice !== undefined ? item.contract.closePrice : undefined,
            closePriceDate: item.contract.closePriceDate !== undefined ? item.contract.closePriceDate : undefined,
            ppind: item.contract.ppind !== undefined ? item.contract.ppind : undefined,
            orderId: item.contract.orderId !== undefined ? item.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    newsMentions: props.asset.newsMentions ? 
      Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0 && props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.newsMentions.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.newsMentions.map((item: any) => ({
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
      news: item.news ? 
        typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
            id: item.news.id
          }}
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
            authors: item.news.authors !== undefined ? {
              set: item.news.authors
            } : undefined,
            summary: item.news.summary !== undefined ? item.news.summary : undefined,
            bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
            timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
            category: item.news.category !== undefined ? item.news.category : undefined,
            topics: item.news.topics !== undefined ? {
              set: item.news.topics
            } : undefined,
            logo: item.news.logo !== undefined ? item.news.logo : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: props.asset.contracts ? 
      Array.isArray(props.asset.contracts) && props.asset.contracts.length > 0 && props.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.contracts.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.contracts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaId: item.alpacaId !== undefined ? item.alpacaId : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          name: item.name !== undefined ? {
              equals: item.name 
             } : undefined,
          underlyingAssetId: item.underlyingAssetId !== undefined ? {
              equals: item.underlyingAssetId 
             } : undefined,
        },
        create: {
          alpacaId: item.alpacaId !== undefined ? item.alpacaId : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          name: item.name !== undefined ? item.name : undefined,
          status: item.status !== undefined ? item.status : undefined,
          tradable: item.tradable !== undefined ? item.tradable : undefined,
          expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
          rootSymbol: item.rootSymbol !== undefined ? item.rootSymbol : undefined,
          underlyingSymbol: item.underlyingSymbol !== undefined ? item.underlyingSymbol : undefined,
          underlyingAssetId: item.underlyingAssetId !== undefined ? item.underlyingAssetId : undefined,
          type: item.type !== undefined ? item.type : undefined,
          style: item.style !== undefined ? item.style : undefined,
          strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
          multiplier: item.multiplier !== undefined ? item.multiplier : undefined,
          size: item.size !== undefined ? item.size : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          openInterestDate: item.openInterestDate !== undefined ? item.openInterestDate : undefined,
          closePrice: item.closePrice !== undefined ? item.closePrice : undefined,
          closePriceDate: item.closePriceDate !== undefined ? item.closePriceDate : undefined,
          ppind: item.ppind !== undefined ? item.ppind : undefined,
          orderId: item.orderId !== undefined ? item.orderId : undefined,
      deliverables: item.deliverables ? 
        Array.isArray(item.deliverables) && item.deliverables.length > 0 && item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.deliverables.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.deliverables.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            assetId: item.assetId !== undefined ? item.assetId : undefined,
            amount: item.amount !== undefined ? item.amount : undefined,
            allocationPercentage: item.allocationPercentage !== undefined ? item.allocationPercentage : undefined,
            settlementType: item.settlementType !== undefined ? item.settlementType : undefined,
            settlementMethod: item.settlementMethod !== undefined ? item.settlementMethod : undefined,
            delayedSettlement: item.delayedSettlement !== undefined ? item.delayedSettlement : undefined,
          },
        }))
      } : undefined,
      order: item.order ? 
        typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
            id: item.order.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.id !== undefined ? item.order.id : undefined,
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            contractId: item.order.contractId !== undefined ? item.order.contractId : undefined,
            alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
                equals: item.order.alpacaAccountId 
               } : undefined,
          },
          create: {
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            qty: item.order.qty !== undefined ? item.order.qty : undefined,
            notional: item.order.notional !== undefined ? item.order.notional : undefined,
            side: item.order.side !== undefined ? item.order.side : undefined,
            type: item.order.type !== undefined ? item.order.type : undefined,
            orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
            timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
            limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
            stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
            trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
            trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
            extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
            status: item.order.status !== undefined ? item.order.status : undefined,
            submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
            filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
            filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
            cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
            canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
            fee: item.order.fee !== undefined ? item.order.fee : undefined,
            strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
            expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  alpacaAccount: props.alpacaAccount ? 
    typeof props.alpacaAccount === 'object' && Object.keys(props.alpacaAccount).length === 1 && Object.keys(props.alpacaAccount)[0] === 'id'
    ? { connect: {
        id: props.alpacaAccount.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.alpacaAccount.id !== undefined ? props.alpacaAccount.id : undefined,
        userId: props.alpacaAccount.userId !== undefined ? {
            equals: props.alpacaAccount.userId 
           } : undefined,
      },
      create: {
        type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? {
          set: props.alpacaAccount.configuration
        } : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? props.alpacaAccount.realTime : undefined,
        minOrderSize: props.alpacaAccount.minOrderSize !== undefined ? props.alpacaAccount.minOrderSize : undefined,
        maxOrderSize: props.alpacaAccount.maxOrderSize !== undefined ? props.alpacaAccount.maxOrderSize : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
    user: props.alpacaAccount.user ? 
      typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.user.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.user.id !== undefined ? props.alpacaAccount.user.id : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              equals: props.alpacaAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.alpacaAccount.user.name !== undefined ? props.alpacaAccount.user.name : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? props.alpacaAccount.user.emailVerified : undefined,
          image: props.alpacaAccount.user.image !== undefined ? props.alpacaAccount.user.image : undefined,
          role: props.alpacaAccount.user.role !== undefined ? props.alpacaAccount.user.role : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? props.alpacaAccount.user.bio : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? props.alpacaAccount.user.jobTitle : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? props.alpacaAccount.user.currentAccount : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? props.alpacaAccount.user.plan : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? props.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? props.alpacaAccount.user.openaiModel : undefined,
      customer: props.alpacaAccount.user.customer ? 
        typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && Object.keys(props.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.customer.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? props.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 && props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.accounts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: props.alpacaAccount.user.sessions ? 
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 && props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.sessions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: props.alpacaAccount.user.authenticators ? 
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 && props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.authenticators.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    trades: props.alpacaAccount.trades ? 
      Array.isArray(props.alpacaAccount.trades) && props.alpacaAccount.trades.length > 0 && props.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.trades.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
          }}
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
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 && item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.actions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            dependsOn: item.dependsOn !== undefined ? {
              set: item.dependsOn
            } : undefined,
            dependedOnBy: item.dependedOnBy !== undefined ? {
              set: item.dependedOnBy
            } : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: props.alpacaAccount.orders ? 
      Array.isArray(props.alpacaAccount.orders) && props.alpacaAccount.orders.length > 0 && props.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.orders.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          contractId: item.contractId !== undefined ? item.contractId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
          filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
          canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
            orderId: item.stopLoss.orderId !== undefined ? item.stopLoss.orderId : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
            orderId: item.takeProfit.orderId !== undefined ? item.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
            stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
            dependsOn: item.action.dependsOn !== undefined ? {
              set: item.action.dependsOn
            } : undefined,
            dependedOnBy: item.action.dependedOnBy !== undefined ? {
              set: item.action.dependedOnBy
            } : undefined,
          },
        }
      } : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
          }}
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
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.contract.id !== undefined ? item.contract.id : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? {
                equals: item.contract.name 
               } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                equals: item.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? item.contract.name : undefined,
            status: item.contract.status !== undefined ? item.contract.status : undefined,
            tradable: item.contract.tradable !== undefined ? item.contract.tradable : undefined,
            expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
            rootSymbol: item.contract.rootSymbol !== undefined ? item.contract.rootSymbol : undefined,
            underlyingSymbol: item.contract.underlyingSymbol !== undefined ? item.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? item.contract.underlyingAssetId : undefined,
            type: item.contract.type !== undefined ? item.contract.type : undefined,
            style: item.contract.style !== undefined ? item.contract.style : undefined,
            strikePrice: item.contract.strikePrice !== undefined ? item.contract.strikePrice : undefined,
            multiplier: item.contract.multiplier !== undefined ? item.contract.multiplier : undefined,
            size: item.contract.size !== undefined ? item.contract.size : undefined,
            openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
            openInterestDate: item.contract.openInterestDate !== undefined ? item.contract.openInterestDate : undefined,
            closePrice: item.contract.closePrice !== undefined ? item.contract.closePrice : undefined,
            closePriceDate: item.contract.closePriceDate !== undefined ? item.contract.closePriceDate : undefined,
            ppind: item.contract.ppind !== undefined ? item.contract.ppind : undefined,
            orderId: item.contract.orderId !== undefined ? item.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    alerts: props.alpacaAccount.alerts ? 
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 && props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.alerts.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
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
      const response = await client.mutate({ mutation: CREATE_ONE_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOnePosition) {
        return response.data.createOnePosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOnePosition:', error);
      throw error;
    }
  },

  /**
   * Create multiple Position records.
   * @param props - Array of Position objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: PositionType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_POSITION = gql`
      mutation createManyPosition($data: [PositionCreateManyInput!]!) {
        createManyPosition(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  averageEntryPrice: prop.averageEntryPrice !== undefined ? prop.averageEntryPrice : undefined,
  qty: prop.qty !== undefined ? prop.qty : undefined,
  qtyAvailable: prop.qtyAvailable !== undefined ? prop.qtyAvailable : undefined,
  marketValue: prop.marketValue !== undefined ? prop.marketValue : undefined,
  costBasis: prop.costBasis !== undefined ? prop.costBasis : undefined,
  unrealizedPL: prop.unrealizedPL !== undefined ? prop.unrealizedPL : undefined,
  unrealizedPLPC: prop.unrealizedPLPC !== undefined ? prop.unrealizedPLPC : undefined,
  unrealisedIntradayPL: prop.unrealisedIntradayPL !== undefined ? prop.unrealisedIntradayPL : undefined,
  unrealisedIntradayPLPC: prop.unrealisedIntradayPLPC !== undefined ? prop.unrealisedIntradayPLPC : undefined,
  currentPrice: prop.currentPrice !== undefined ? prop.currentPrice : undefined,
  lastTradePrice: prop.lastTradePrice !== undefined ? prop.lastTradePrice : undefined,
  changeToday: prop.changeToday !== undefined ? prop.changeToday : undefined,
  assetMarginable: prop.assetMarginable !== undefined ? prop.assetMarginable : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  closed: prop.closed !== undefined ? prop.closed : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyPosition) {
        return response.data.createManyPosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyPosition:', error);
      throw error;
    }
  },

  /**
   * Update a single Position record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Position or null.
   */
  async update(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_POSITION = gql`
      mutation updateOnePosition($data: PositionUpdateInput!, $where: PositionWhereUniqueInput!) {
        updateOnePosition(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
    set: props.id
  } : undefined,
  averageEntryPrice: props.averageEntryPrice !== undefined ? {
    set: props.averageEntryPrice
  } : undefined,
  qty: props.qty !== undefined ? {
    set: props.qty
  } : undefined,
  qtyAvailable: props.qtyAvailable !== undefined ? {
    set: props.qtyAvailable
  } : undefined,
  marketValue: props.marketValue !== undefined ? {
    set: props.marketValue
  } : undefined,
  costBasis: props.costBasis !== undefined ? {
    set: props.costBasis
  } : undefined,
  unrealizedPL: props.unrealizedPL !== undefined ? {
    set: props.unrealizedPL
  } : undefined,
  unrealizedPLPC: props.unrealizedPLPC !== undefined ? {
    set: props.unrealizedPLPC
  } : undefined,
  unrealisedIntradayPL: props.unrealisedIntradayPL !== undefined ? {
    set: props.unrealisedIntradayPL
  } : undefined,
  unrealisedIntradayPLPC: props.unrealisedIntradayPLPC !== undefined ? {
    set: props.unrealisedIntradayPLPC
  } : undefined,
  currentPrice: props.currentPrice !== undefined ? {
    set: props.currentPrice
  } : undefined,
  lastTradePrice: props.lastTradePrice !== undefined ? {
    set: props.lastTradePrice
  } : undefined,
  changeToday: props.changeToday !== undefined ? {
    set: props.changeToday
  } : undefined,
  assetMarginable: props.assetMarginable !== undefined ? {
    set: props.assetMarginable
  } : undefined,
  closed: props.closed !== undefined ? {
    set: props.closed
  } : undefined,
  createdAt: props.createdAt !== undefined ? {
    set: props.createdAt
  } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
    set: props.updatedAt
  } : undefined,
  asset: props.asset !== undefined ? {
    set: props.asset
  } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
    set: props.alpacaAccount
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOnePosition) {
        return response.data.updateOnePosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOnePosition:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Position record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Position or null.
   */
  async upsert(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_POSITION = gql`
      mutation upsertOnePosition($where: PositionWhereUniqueInput!, $create: PositionCreateInput!, $update: PositionUpdateInput!) {
        upsertOnePosition(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
      create: {
    averageEntryPrice: props.averageEntryPrice !== undefined ? props.averageEntryPrice : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  qtyAvailable: props.qtyAvailable !== undefined ? props.qtyAvailable : undefined,
  marketValue: props.marketValue !== undefined ? props.marketValue : undefined,
  costBasis: props.costBasis !== undefined ? props.costBasis : undefined,
  unrealizedPL: props.unrealizedPL !== undefined ? props.unrealizedPL : undefined,
  unrealizedPLPC: props.unrealizedPLPC !== undefined ? props.unrealizedPLPC : undefined,
  unrealisedIntradayPL: props.unrealisedIntradayPL !== undefined ? props.unrealisedIntradayPL : undefined,
  unrealisedIntradayPLPC: props.unrealisedIntradayPLPC !== undefined ? props.unrealisedIntradayPLPC : undefined,
  currentPrice: props.currentPrice !== undefined ? props.currentPrice : undefined,
  lastTradePrice: props.lastTradePrice !== undefined ? props.lastTradePrice : undefined,
  changeToday: props.changeToday !== undefined ? props.changeToday : undefined,
  assetMarginable: props.assetMarginable !== undefined ? props.assetMarginable : undefined,
  closed: props.closed !== undefined ? props.closed : undefined,
  asset: props.asset ? 
    typeof props.asset === 'object' && Object.keys(props.asset).length === 1 && Object.keys(props.asset)[0] === 'id'
    ? { connect: {
        id: props.asset.id
      }}
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
    trades: props.asset.trades ? 
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 && props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.trades.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
              set: item.alpacaAccount.configuration
            } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 && item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.actions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            dependsOn: item.dependsOn !== undefined ? {
              set: item.dependsOn
            } : undefined,
            dependedOnBy: item.dependedOnBy !== undefined ? {
              set: item.dependedOnBy
            } : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: props.asset.orders ? 
      Array.isArray(props.asset.orders) && props.asset.orders.length > 0 && props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.orders.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          contractId: item.contractId !== undefined ? item.contractId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
          filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
          canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
            orderId: item.stopLoss.orderId !== undefined ? item.stopLoss.orderId : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
            orderId: item.takeProfit.orderId !== undefined ? item.takeProfit.orderId : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
              set: item.alpacaAccount.configuration
            } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
            dependsOn: item.action.dependsOn !== undefined ? {
              set: item.action.dependsOn
            } : undefined,
            dependedOnBy: item.action.dependedOnBy !== undefined ? {
              set: item.action.dependedOnBy
            } : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.contract.id !== undefined ? item.contract.id : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? {
                equals: item.contract.name 
               } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                equals: item.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? item.contract.name : undefined,
            status: item.contract.status !== undefined ? item.contract.status : undefined,
            tradable: item.contract.tradable !== undefined ? item.contract.tradable : undefined,
            expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
            rootSymbol: item.contract.rootSymbol !== undefined ? item.contract.rootSymbol : undefined,
            underlyingSymbol: item.contract.underlyingSymbol !== undefined ? item.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? item.contract.underlyingAssetId : undefined,
            type: item.contract.type !== undefined ? item.contract.type : undefined,
            style: item.contract.style !== undefined ? item.contract.style : undefined,
            strikePrice: item.contract.strikePrice !== undefined ? item.contract.strikePrice : undefined,
            multiplier: item.contract.multiplier !== undefined ? item.contract.multiplier : undefined,
            size: item.contract.size !== undefined ? item.contract.size : undefined,
            openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
            openInterestDate: item.contract.openInterestDate !== undefined ? item.contract.openInterestDate : undefined,
            closePrice: item.contract.closePrice !== undefined ? item.contract.closePrice : undefined,
            closePriceDate: item.contract.closePriceDate !== undefined ? item.contract.closePriceDate : undefined,
            ppind: item.contract.ppind !== undefined ? item.contract.ppind : undefined,
            orderId: item.contract.orderId !== undefined ? item.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    newsMentions: props.asset.newsMentions ? 
      Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0 && props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.newsMentions.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.newsMentions.map((item: any) => ({
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
      news: item.news ? 
        typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
            id: item.news.id
          }}
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
            authors: item.news.authors !== undefined ? {
              set: item.news.authors
            } : undefined,
            summary: item.news.summary !== undefined ? item.news.summary : undefined,
            bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
            timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
            category: item.news.category !== undefined ? item.news.category : undefined,
            topics: item.news.topics !== undefined ? {
              set: item.news.topics
            } : undefined,
            logo: item.news.logo !== undefined ? item.news.logo : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: props.asset.contracts ? 
      Array.isArray(props.asset.contracts) && props.asset.contracts.length > 0 && props.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.contracts.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.contracts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaId: item.alpacaId !== undefined ? item.alpacaId : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          name: item.name !== undefined ? {
              equals: item.name 
             } : undefined,
          underlyingAssetId: item.underlyingAssetId !== undefined ? {
              equals: item.underlyingAssetId 
             } : undefined,
        },
        create: {
          alpacaId: item.alpacaId !== undefined ? item.alpacaId : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          name: item.name !== undefined ? item.name : undefined,
          status: item.status !== undefined ? item.status : undefined,
          tradable: item.tradable !== undefined ? item.tradable : undefined,
          expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
          rootSymbol: item.rootSymbol !== undefined ? item.rootSymbol : undefined,
          underlyingSymbol: item.underlyingSymbol !== undefined ? item.underlyingSymbol : undefined,
          underlyingAssetId: item.underlyingAssetId !== undefined ? item.underlyingAssetId : undefined,
          type: item.type !== undefined ? item.type : undefined,
          style: item.style !== undefined ? item.style : undefined,
          strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
          multiplier: item.multiplier !== undefined ? item.multiplier : undefined,
          size: item.size !== undefined ? item.size : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          openInterestDate: item.openInterestDate !== undefined ? item.openInterestDate : undefined,
          closePrice: item.closePrice !== undefined ? item.closePrice : undefined,
          closePriceDate: item.closePriceDate !== undefined ? item.closePriceDate : undefined,
          ppind: item.ppind !== undefined ? item.ppind : undefined,
          orderId: item.orderId !== undefined ? item.orderId : undefined,
      deliverables: item.deliverables ? 
        Array.isArray(item.deliverables) && item.deliverables.length > 0 && item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.deliverables.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.deliverables.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            assetId: item.assetId !== undefined ? item.assetId : undefined,
            amount: item.amount !== undefined ? item.amount : undefined,
            allocationPercentage: item.allocationPercentage !== undefined ? item.allocationPercentage : undefined,
            settlementType: item.settlementType !== undefined ? item.settlementType : undefined,
            settlementMethod: item.settlementMethod !== undefined ? item.settlementMethod : undefined,
            delayedSettlement: item.delayedSettlement !== undefined ? item.delayedSettlement : undefined,
          },
        }))
      } : undefined,
      order: item.order ? 
        typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
            id: item.order.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.id !== undefined ? item.order.id : undefined,
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            contractId: item.order.contractId !== undefined ? item.order.contractId : undefined,
            alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
                equals: item.order.alpacaAccountId 
               } : undefined,
          },
          create: {
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            qty: item.order.qty !== undefined ? item.order.qty : undefined,
            notional: item.order.notional !== undefined ? item.order.notional : undefined,
            side: item.order.side !== undefined ? item.order.side : undefined,
            type: item.order.type !== undefined ? item.order.type : undefined,
            orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
            timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
            limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
            stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
            trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
            trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
            extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
            status: item.order.status !== undefined ? item.order.status : undefined,
            submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
            filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
            filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
            cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
            canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
            fee: item.order.fee !== undefined ? item.order.fee : undefined,
            strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
            expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  alpacaAccount: props.alpacaAccount ? 
    typeof props.alpacaAccount === 'object' && Object.keys(props.alpacaAccount).length === 1 && Object.keys(props.alpacaAccount)[0] === 'id'
    ? { connect: {
        id: props.alpacaAccount.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.alpacaAccount.id !== undefined ? props.alpacaAccount.id : undefined,
        userId: props.alpacaAccount.userId !== undefined ? {
            equals: props.alpacaAccount.userId 
           } : undefined,
      },
      create: {
        type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? {
          set: props.alpacaAccount.configuration
        } : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? props.alpacaAccount.realTime : undefined,
        minOrderSize: props.alpacaAccount.minOrderSize !== undefined ? props.alpacaAccount.minOrderSize : undefined,
        maxOrderSize: props.alpacaAccount.maxOrderSize !== undefined ? props.alpacaAccount.maxOrderSize : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
    user: props.alpacaAccount.user ? 
      typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.user.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.user.id !== undefined ? props.alpacaAccount.user.id : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              equals: props.alpacaAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.alpacaAccount.user.name !== undefined ? props.alpacaAccount.user.name : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? props.alpacaAccount.user.emailVerified : undefined,
          image: props.alpacaAccount.user.image !== undefined ? props.alpacaAccount.user.image : undefined,
          role: props.alpacaAccount.user.role !== undefined ? props.alpacaAccount.user.role : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? props.alpacaAccount.user.bio : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? props.alpacaAccount.user.jobTitle : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? props.alpacaAccount.user.currentAccount : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? props.alpacaAccount.user.plan : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? props.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? props.alpacaAccount.user.openaiModel : undefined,
      customer: props.alpacaAccount.user.customer ? 
        typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && Object.keys(props.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.customer.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? props.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 && props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.accounts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
            access_token: item.access_token !== undefined ? item.access_token : undefined,
            expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
            token_type: item.token_type !== undefined ? item.token_type : undefined,
            scope: item.scope !== undefined ? item.scope : undefined,
            id_token: item.id_token !== undefined ? item.id_token : undefined,
            session_state: item.session_state !== undefined ? item.session_state : undefined,
          },
        }))
      } : undefined,
      sessions: props.alpacaAccount.user.sessions ? 
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 && props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.sessions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
            expires: item.expires !== undefined ? item.expires : undefined,
          },
        }))
      } : undefined,
      authenticators: props.alpacaAccount.user.authenticators ? 
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 && props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.authenticators.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
            publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
            counter: item.counter !== undefined ? item.counter : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    trades: props.alpacaAccount.trades ? 
      Array.isArray(props.alpacaAccount.trades) && props.alpacaAccount.trades.length > 0 && props.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.trades.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
          }}
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
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 && item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.actions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            dependsOn: item.dependsOn !== undefined ? {
              set: item.dependsOn
            } : undefined,
            dependedOnBy: item.dependedOnBy !== undefined ? {
              set: item.dependedOnBy
            } : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: props.alpacaAccount.orders ? 
      Array.isArray(props.alpacaAccount.orders) && props.alpacaAccount.orders.length > 0 && props.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.orders.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          contractId: item.contractId !== undefined ? item.contractId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
          filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
          canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
            orderId: item.stopLoss.orderId !== undefined ? item.stopLoss.orderId : undefined,
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
          }}
    : { connectOrCreate: {
          where: {
            id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
            orderId: item.takeProfit.orderId !== undefined ? item.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
            stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
            dependsOn: item.action.dependsOn !== undefined ? {
              set: item.action.dependsOn
            } : undefined,
            dependedOnBy: item.action.dependedOnBy !== undefined ? {
              set: item.action.dependedOnBy
            } : undefined,
          },
        }
      } : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
          }}
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
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.contract.id !== undefined ? item.contract.id : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? {
                equals: item.contract.name 
               } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                equals: item.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? item.contract.name : undefined,
            status: item.contract.status !== undefined ? item.contract.status : undefined,
            tradable: item.contract.tradable !== undefined ? item.contract.tradable : undefined,
            expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
            rootSymbol: item.contract.rootSymbol !== undefined ? item.contract.rootSymbol : undefined,
            underlyingSymbol: item.contract.underlyingSymbol !== undefined ? item.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? item.contract.underlyingAssetId : undefined,
            type: item.contract.type !== undefined ? item.contract.type : undefined,
            style: item.contract.style !== undefined ? item.contract.style : undefined,
            strikePrice: item.contract.strikePrice !== undefined ? item.contract.strikePrice : undefined,
            multiplier: item.contract.multiplier !== undefined ? item.contract.multiplier : undefined,
            size: item.contract.size !== undefined ? item.contract.size : undefined,
            openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
            openInterestDate: item.contract.openInterestDate !== undefined ? item.contract.openInterestDate : undefined,
            closePrice: item.contract.closePrice !== undefined ? item.contract.closePrice : undefined,
            closePriceDate: item.contract.closePriceDate !== undefined ? item.contract.closePriceDate : undefined,
            ppind: item.contract.ppind !== undefined ? item.contract.ppind : undefined,
            orderId: item.contract.orderId !== undefined ? item.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    alerts: props.alpacaAccount.alerts ? 
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 && props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.alerts.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
      },
      update: {
  averageEntryPrice: props.averageEntryPrice !== undefined ? {
    set: props.averageEntryPrice
  } : undefined,
  qty: props.qty !== undefined ? {
    set: props.qty
  } : undefined,
  qtyAvailable: props.qtyAvailable !== undefined ? {
    set: props.qtyAvailable
  } : undefined,
  marketValue: props.marketValue !== undefined ? {
    set: props.marketValue
  } : undefined,
  costBasis: props.costBasis !== undefined ? {
    set: props.costBasis
  } : undefined,
  unrealizedPL: props.unrealizedPL !== undefined ? {
    set: props.unrealizedPL
  } : undefined,
  unrealizedPLPC: props.unrealizedPLPC !== undefined ? {
    set: props.unrealizedPLPC
  } : undefined,
  unrealisedIntradayPL: props.unrealisedIntradayPL !== undefined ? {
    set: props.unrealisedIntradayPL
  } : undefined,
  unrealisedIntradayPLPC: props.unrealisedIntradayPLPC !== undefined ? {
    set: props.unrealisedIntradayPLPC
  } : undefined,
  currentPrice: props.currentPrice !== undefined ? {
    set: props.currentPrice
  } : undefined,
  lastTradePrice: props.lastTradePrice !== undefined ? {
    set: props.lastTradePrice
  } : undefined,
  changeToday: props.changeToday !== undefined ? {
    set: props.changeToday
  } : undefined,
  assetMarginable: props.assetMarginable !== undefined ? {
    set: props.assetMarginable
  } : undefined,
  closed: props.closed !== undefined ? {
    set: props.closed
  } : undefined,
  asset: props.asset !== undefined ? {
    set: props.asset
  } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
    set: props.alpacaAccount
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOnePosition) {
        return response.data.upsertOnePosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOnePosition:', error);
      throw error;
    }
  },

  /**
   * Update multiple Position records.
   * @param props - Array of Position objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: PositionType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_POSITION = gql`
      mutation updateManyPosition($data: [PositionCreateManyInput!]!) {
        updateManyPosition(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
    equals: prop.alpacaAccountId 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
    set: prop.id
  } : undefined,
  averageEntryPrice: prop.averageEntryPrice !== undefined ? {
    set: prop.averageEntryPrice
  } : undefined,
  qty: prop.qty !== undefined ? {
    set: prop.qty
  } : undefined,
  qtyAvailable: prop.qtyAvailable !== undefined ? {
    set: prop.qtyAvailable
  } : undefined,
  marketValue: prop.marketValue !== undefined ? {
    set: prop.marketValue
  } : undefined,
  costBasis: prop.costBasis !== undefined ? {
    set: prop.costBasis
  } : undefined,
  unrealizedPL: prop.unrealizedPL !== undefined ? {
    set: prop.unrealizedPL
  } : undefined,
  unrealizedPLPC: prop.unrealizedPLPC !== undefined ? {
    set: prop.unrealizedPLPC
  } : undefined,
  unrealisedIntradayPL: prop.unrealisedIntradayPL !== undefined ? {
    set: prop.unrealisedIntradayPL
  } : undefined,
  unrealisedIntradayPLPC: prop.unrealisedIntradayPLPC !== undefined ? {
    set: prop.unrealisedIntradayPLPC
  } : undefined,
  currentPrice: prop.currentPrice !== undefined ? {
    set: prop.currentPrice
  } : undefined,
  lastTradePrice: prop.lastTradePrice !== undefined ? {
    set: prop.lastTradePrice
  } : undefined,
  changeToday: prop.changeToday !== undefined ? {
    set: prop.changeToday
  } : undefined,
  assetMarginable: prop.assetMarginable !== undefined ? {
    set: prop.assetMarginable
  } : undefined,
  closed: prop.closed !== undefined ? {
    set: prop.closed
  } : undefined,
  createdAt: prop.createdAt !== undefined ? {
    set: prop.createdAt
  } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
    set: prop.updatedAt
  } : undefined,
  asset: prop.asset !== undefined ? {
    set: prop.asset
  } : undefined,
  alpacaAccount: prop.alpacaAccount !== undefined ? {
    set: prop.alpacaAccount
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyPosition) {
        return response.data.updateManyPosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyPosition:', error);
      throw error;
    }
  },

  /**
   * Delete a single Position record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Position or null.
   */
  async delete(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_POSITION = gql`
      mutation deleteOnePosition($where: PositionWhereUniqueInput!) {
        deleteOnePosition(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOnePosition) {
        return response.data.deleteOnePosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOnePosition:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Position record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Position or null.
   */
  async get(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType | null> {

    const client = globalClient || importedClient;

    const GET_POSITION = gql`
      query getPosition($where: PositionWhereUniqueInput!) {
        getPosition(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getPosition ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Position found') {
        return null;
      } else {
        console.error('Error in getPosition:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Positions records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Position records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<PositionType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_POSITION = gql`
      query getAllPosition {
        positions {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_POSITION });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.positions ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Position found') {
        return null;
      } else {
        console.error('Error in getPosition:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Position records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Position records or null.
   */
  async findMany(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_POSITION = gql`
      query findManyPosition($where: PositionWhereInput!) {
        positions(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Positions) {
        return response.data.positions;
      } else {
       return [] as PositionType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Position found') {
        return null;
      } else {
        console.error('Error in getPosition:', error);
        throw error;
      }
    }
  }
};
