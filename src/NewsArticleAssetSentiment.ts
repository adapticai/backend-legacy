
  
import { NewsArticleAssetSentiment as NewsArticleAssetSentimentType } from './generated/typegraphql-prisma/models/NewsArticleAssetSentiment';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
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

    async create(props: NewsArticleAssetSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;

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
    orders: props.asset.orders ? 
      Array.isArray(props.asset.orders) && props.asset.orders.length > 0 &&  props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.orders.map((item: any) => ({
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
          expiredAt: item.expiredAt !== undefined ? item.expiredAt : undefined,
          failedAt: item.failedAt !== undefined ? item.failedAt : undefined,
          replacedAt: item.replacedAt !== undefined ? item.replacedAt : undefined,
          replacedBy: item.replacedBy !== undefined ? item.replacedBy : undefined,
          replaces: item.replaces !== undefined ? item.replaces : undefined,
          positionIntent: item.positionIntent !== undefined ? item.positionIntent : undefined,
          legs: item.legs !== undefined ? item.legs : undefined,
          hwm: item.hwm !== undefined ? item.hwm : undefined,
          subtag: item.subtag !== undefined ? item.subtag : undefined,
          source: item.source !== undefined ? item.source : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
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
            }
          }
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
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
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
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            primary: item.action.primary !== undefined ? item.action.primary : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
            }
          }
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
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 &&  props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          symbol: item.symbol !== undefined ? item.symbol : undefined,
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
          closed: item.closed !== undefined ? item.closed : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: props.asset.contracts ? 
      Array.isArray(props.asset.contracts) && props.asset.contracts.length > 0 &&  props.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.contracts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.contracts.map((item: any) => ({
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
        Array.isArray(item.deliverables) && item.deliverables.length > 0 &&  item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.deliverables.map((item: any) => ({
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
            }
          }
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
            expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
            failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
            replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
            replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
            replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
            positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
            legs: item.order.legs !== undefined ? item.order.legs : undefined,
            hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
            subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
            source: item.order.source !== undefined ? item.order.source : undefined,
            expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
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
  async createMany(props: NewsArticleAssetSentimentType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  async update(props: NewsArticleAssetSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  news: props.news ? 
  typeof props.news === 'object' && Object.keys(props.news).length === 1 && (Object.keys(props.news)[0] === 'id' || Object.keys(props.news)[0] === 'symbol')
? {
  connect: {
    id: props.news.id
  }
} : { upsert: {
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
  typeof props.asset === 'object' && Object.keys(props.asset).length === 1 && (Object.keys(props.asset)[0] === 'id' || Object.keys(props.asset)[0] === 'symbol')
? {
  connect: {
    id: props.asset.id
  }
} : { upsert: {
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
        askPrice: props.asset.askPrice !== undefined ? {
            set: props.asset.askPrice
          } : undefined,
        bidPrice: props.asset.bidPrice !== undefined ? {
            set: props.asset.bidPrice
          } : undefined,
    orders: props.asset.orders ? 
    Array.isArray(props.asset.orders) && props.asset.orders.length > 0 && props.asset.orders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.asset.orders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.asset.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          contractId: item.contractId !== undefined ? item.contractId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId
            } : undefined,
          takeProfitId: item.takeProfitId !== undefined ? {
              equals: item.takeProfitId
            } : undefined,
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
          filledQty: item.filledQty !== undefined ? {
              set: item.filledQty
            } : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? {
              set: item.filledAvgPrice
            } : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? {
              set: item.cancelRequestedAt
            } : undefined,
          canceledAt: item.canceledAt !== undefined ? {
              set: item.canceledAt
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
          expiredAt: item.expiredAt !== undefined ? {
              set: item.expiredAt
            } : undefined,
          failedAt: item.failedAt !== undefined ? {
              set: item.failedAt
            } : undefined,
          replacedAt: item.replacedAt !== undefined ? {
              set: item.replacedAt
            } : undefined,
          replacedBy: item.replacedBy !== undefined ? {
              set: item.replacedBy
            } : undefined,
          replaces: item.replaces !== undefined ? {
              set: item.replaces
            } : undefined,
          positionIntent: item.positionIntent !== undefined ? {
              set: item.positionIntent
            } : undefined,
          legs: item.legs !== undefined ? {
              set: item.legs
            } : undefined,
          hwm: item.hwm !== undefined ? {
              set: item.hwm
            } : undefined,
          subtag: item.subtag !== undefined ? {
              set: item.subtag
            } : undefined,
          source: item.source !== undefined ? {
              set: item.source
            } : undefined,
          expiresAt: item.expiresAt !== undefined ? {
              set: item.expiresAt
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
      stopLoss: item.stopLoss ? 
      typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && (Object.keys(item.stopLoss)[0] === 'id' || Object.keys(item.stopLoss)[0] === 'symbol')
? {
      connect: {
        id: item.stopLoss.id
      }
} : { upsert: {
          where: {
            id: item.stopLoss.id !== undefined ? {
                equals: item.stopLoss.id
              } : undefined,
            orderId: item.stopLoss.orderId !== undefined ? {
                equals: item.stopLoss.orderId
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
      takeProfit: item.takeProfit ? 
      typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && (Object.keys(item.takeProfit)[0] === 'id' || Object.keys(item.takeProfit)[0] === 'symbol')
? {
      connect: {
        id: item.takeProfit.id
      }
} : { upsert: {
          where: {
            id: item.takeProfit.id !== undefined ? {
                equals: item.takeProfit.id
              } : undefined,
            orderId: item.takeProfit.orderId !== undefined ? {
                equals: item.takeProfit.orderId
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
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && (Object.keys(item.alpacaAccount)[0] === 'id' || Object.keys(item.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id
              } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId
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
            realTime: item.alpacaAccount.realTime !== undefined ? {
                set: item.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
      typeof item.action === 'object' && Object.keys(item.action).length === 1 && (Object.keys(item.action)[0] === 'id' || Object.keys(item.action)[0] === 'symbol')
? {
      connect: {
        id: item.action.id
      }
} : { upsert: {
          where: {
            id: item.action.id !== undefined ? {
                equals: item.action.id
              } : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId
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
            primary: item.action.primary !== undefined ? {
                set: item.action.primary
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
            primary: item.action.primary !== undefined ? item.action.primary : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
      typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && (Object.keys(item.contract)[0] === 'id' || Object.keys(item.contract)[0] === 'symbol')
? {
      connect: {
        id: item.contract.id
      }
} : { upsert: {
          where: {
            id: item.contract.id !== undefined ? {
                equals: item.contract.id
              } : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? {
                equals: item.contract.alpacaId
              } : undefined,
            symbol: item.contract.symbol !== undefined ? {
                equals: item.contract.symbol
              } : undefined,
            name: item.contract.name !== undefined ? {
                equals: item.contract.name
              } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                equals: item.contract.underlyingAssetId
              } : undefined,
            assetId: item.contract.assetId !== undefined ? {
                equals: item.contract.assetId
              } : undefined,
            orderId: item.contract.orderId !== undefined ? {
                equals: item.contract.orderId
              } : undefined,
          },
          update: {
            id: item.contract.id !== undefined ? {
                set: item.contract.id
              } : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? {
                set: item.contract.alpacaId
              } : undefined,
            symbol: item.contract.symbol !== undefined ? {
                set: item.contract.symbol
              } : undefined,
            name: item.contract.name !== undefined ? {
                set: item.contract.name
              } : undefined,
            status: item.contract.status !== undefined ? {
                set: item.contract.status
              } : undefined,
            tradable: item.contract.tradable !== undefined ? {
                set: item.contract.tradable
              } : undefined,
            expirationDate: item.contract.expirationDate !== undefined ? {
                set: item.contract.expirationDate
              } : undefined,
            rootSymbol: item.contract.rootSymbol !== undefined ? {
                set: item.contract.rootSymbol
              } : undefined,
            underlyingSymbol: item.contract.underlyingSymbol !== undefined ? {
                set: item.contract.underlyingSymbol
              } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                set: item.contract.underlyingAssetId
              } : undefined,
            type: item.contract.type !== undefined ? {
                set: item.contract.type
              } : undefined,
            style: item.contract.style !== undefined ? {
                set: item.contract.style
              } : undefined,
            strikePrice: item.contract.strikePrice !== undefined ? {
                set: item.contract.strikePrice
              } : undefined,
            multiplier: item.contract.multiplier !== undefined ? {
                set: item.contract.multiplier
              } : undefined,
            size: item.contract.size !== undefined ? {
                set: item.contract.size
              } : undefined,
            openInterest: item.contract.openInterest !== undefined ? {
                set: item.contract.openInterest
              } : undefined,
            openInterestDate: item.contract.openInterestDate !== undefined ? {
                set: item.contract.openInterestDate
              } : undefined,
            closePrice: item.contract.closePrice !== undefined ? {
                set: item.contract.closePrice
              } : undefined,
            closePriceDate: item.contract.closePriceDate !== undefined ? {
                set: item.contract.closePriceDate
              } : undefined,
            ppind: item.contract.ppind !== undefined ? {
                set: item.contract.ppind
              } : undefined,
            orderId: item.contract.orderId !== undefined ? {
                set: item.contract.orderId
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
          expiredAt: item.expiredAt !== undefined ? item.expiredAt : undefined,
          failedAt: item.failedAt !== undefined ? item.failedAt : undefined,
          replacedAt: item.replacedAt !== undefined ? item.replacedAt : undefined,
          replacedBy: item.replacedBy !== undefined ? item.replacedBy : undefined,
          replaces: item.replaces !== undefined ? item.replaces : undefined,
          positionIntent: item.positionIntent !== undefined ? item.positionIntent : undefined,
          legs: item.legs !== undefined ? item.legs : undefined,
          hwm: item.hwm !== undefined ? item.hwm : undefined,
          subtag: item.subtag !== undefined ? item.subtag : undefined,
          source: item.source !== undefined ? item.source : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
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
            }
          }
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
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
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
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            primary: item.action.primary !== undefined ? item.action.primary : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
            }
          }
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
    positions: props.asset.positions ? 
    Array.isArray(props.asset.positions) && props.asset.positions.length > 0 && props.asset.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.asset.positions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId
            } : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol
            } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          symbol: item.symbol !== undefined ? {
              set: item.symbol
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
          closed: item.closed !== undefined ? {
              set: item.closed
            } : undefined,
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && (Object.keys(item.alpacaAccount)[0] === 'id' || Object.keys(item.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id
              } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId
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
            realTime: item.alpacaAccount.realTime !== undefined ? {
                set: item.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
        },
        create: {
          symbol: item.symbol !== undefined ? item.symbol : undefined,
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
          closed: item.closed !== undefined ? item.closed : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: props.asset.contracts ? 
    Array.isArray(props.asset.contracts) && props.asset.contracts.length > 0 && props.asset.contracts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.asset.contracts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.asset.contracts.map((item: any) => ({
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
          assetId: item.assetId !== undefined ? {
              equals: item.assetId
            } : undefined,
          orderId: item.orderId !== undefined ? {
              equals: item.orderId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          alpacaId: item.alpacaId !== undefined ? {
              set: item.alpacaId
            } : undefined,
          symbol: item.symbol !== undefined ? {
              set: item.symbol
            } : undefined,
          name: item.name !== undefined ? {
              set: item.name
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          tradable: item.tradable !== undefined ? {
              set: item.tradable
            } : undefined,
          expirationDate: item.expirationDate !== undefined ? {
              set: item.expirationDate
            } : undefined,
          rootSymbol: item.rootSymbol !== undefined ? {
              set: item.rootSymbol
            } : undefined,
          underlyingSymbol: item.underlyingSymbol !== undefined ? {
              set: item.underlyingSymbol
            } : undefined,
          underlyingAssetId: item.underlyingAssetId !== undefined ? {
              set: item.underlyingAssetId
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          style: item.style !== undefined ? {
              set: item.style
            } : undefined,
          strikePrice: item.strikePrice !== undefined ? {
              set: item.strikePrice
            } : undefined,
          multiplier: item.multiplier !== undefined ? {
              set: item.multiplier
            } : undefined,
          size: item.size !== undefined ? {
              set: item.size
            } : undefined,
          openInterest: item.openInterest !== undefined ? {
              set: item.openInterest
            } : undefined,
          openInterestDate: item.openInterestDate !== undefined ? {
              set: item.openInterestDate
            } : undefined,
          closePrice: item.closePrice !== undefined ? {
              set: item.closePrice
            } : undefined,
          closePriceDate: item.closePriceDate !== undefined ? {
              set: item.closePriceDate
            } : undefined,
          ppind: item.ppind !== undefined ? {
              set: item.ppind
            } : undefined,
          orderId: item.orderId !== undefined ? {
              set: item.orderId
            } : undefined,
      deliverables: item.deliverables ? 
      Array.isArray(item.deliverables) && item.deliverables.length > 0 && item.deliverables.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.deliverables.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.deliverables.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol
              } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            symbol: item.symbol !== undefined ? {
                set: item.symbol
              } : undefined,
            assetId: item.assetId !== undefined ? {
                set: item.assetId
              } : undefined,
            amount: item.amount !== undefined ? {
                set: item.amount
              } : undefined,
            allocationPercentage: item.allocationPercentage !== undefined ? {
                set: item.allocationPercentage
              } : undefined,
            settlementType: item.settlementType !== undefined ? {
                set: item.settlementType
              } : undefined,
            settlementMethod: item.settlementMethod !== undefined ? {
                set: item.settlementMethod
              } : undefined,
            delayedSettlement: item.delayedSettlement !== undefined ? {
                set: item.delayedSettlement
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
      typeof item.order === 'object' && Object.keys(item.order).length === 1 && (Object.keys(item.order)[0] === 'id' || Object.keys(item.order)[0] === 'symbol')
? {
      connect: {
        id: item.order.id
      }
} : { upsert: {
          where: {
            id: item.order.id !== undefined ? {
                equals: item.order.id
              } : undefined,
            clientOrderId: item.order.clientOrderId !== undefined ? {
                equals: item.order.clientOrderId
              } : undefined,
            alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
                equals: item.order.alpacaAccountId
              } : undefined,
            assetId: item.order.assetId !== undefined ? {
                equals: item.order.assetId
              } : undefined,
            actionId: item.order.actionId !== undefined ? {
                equals: item.order.actionId
              } : undefined,
            stopLossId: item.order.stopLossId !== undefined ? {
                equals: item.order.stopLossId
              } : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? {
                equals: item.order.takeProfitId
              } : undefined,
            contractId: item.order.contractId !== undefined ? {
                equals: item.order.contractId
              } : undefined,
          },
          update: {
            id: item.order.id !== undefined ? {
                set: item.order.id
              } : undefined,
            clientOrderId: item.order.clientOrderId !== undefined ? {
                set: item.order.clientOrderId
              } : undefined,
            qty: item.order.qty !== undefined ? {
                set: item.order.qty
              } : undefined,
            notional: item.order.notional !== undefined ? {
                set: item.order.notional
              } : undefined,
            side: item.order.side !== undefined ? {
                set: item.order.side
              } : undefined,
            type: item.order.type !== undefined ? {
                set: item.order.type
              } : undefined,
            orderClass: item.order.orderClass !== undefined ? {
                set: item.order.orderClass
              } : undefined,
            timeInForce: item.order.timeInForce !== undefined ? {
                set: item.order.timeInForce
              } : undefined,
            limitPrice: item.order.limitPrice !== undefined ? {
                set: item.order.limitPrice
              } : undefined,
            stopPrice: item.order.stopPrice !== undefined ? {
                set: item.order.stopPrice
              } : undefined,
            trailPrice: item.order.trailPrice !== undefined ? {
                set: item.order.trailPrice
              } : undefined,
            trailPercent: item.order.trailPercent !== undefined ? {
                set: item.order.trailPercent
              } : undefined,
            extendedHours: item.order.extendedHours !== undefined ? {
                set: item.order.extendedHours
              } : undefined,
            status: item.order.status !== undefined ? {
                set: item.order.status
              } : undefined,
            submittedAt: item.order.submittedAt !== undefined ? {
                set: item.order.submittedAt
              } : undefined,
            filledAt: item.order.filledAt !== undefined ? {
                set: item.order.filledAt
              } : undefined,
            filledQty: item.order.filledQty !== undefined ? {
                set: item.order.filledQty
              } : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? {
                set: item.order.filledAvgPrice
              } : undefined,
            cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? {
                set: item.order.cancelRequestedAt
              } : undefined,
            canceledAt: item.order.canceledAt !== undefined ? {
                set: item.order.canceledAt
              } : undefined,
            fee: item.order.fee !== undefined ? {
                set: item.order.fee
              } : undefined,
            strikePrice: item.order.strikePrice !== undefined ? {
                set: item.order.strikePrice
              } : undefined,
            expirationDate: item.order.expirationDate !== undefined ? {
                set: item.order.expirationDate
              } : undefined,
            expiredAt: item.order.expiredAt !== undefined ? {
                set: item.order.expiredAt
              } : undefined,
            failedAt: item.order.failedAt !== undefined ? {
                set: item.order.failedAt
              } : undefined,
            replacedAt: item.order.replacedAt !== undefined ? {
                set: item.order.replacedAt
              } : undefined,
            replacedBy: item.order.replacedBy !== undefined ? {
                set: item.order.replacedBy
              } : undefined,
            replaces: item.order.replaces !== undefined ? {
                set: item.order.replaces
              } : undefined,
            positionIntent: item.order.positionIntent !== undefined ? {
                set: item.order.positionIntent
              } : undefined,
            legs: item.order.legs !== undefined ? {
                set: item.order.legs
              } : undefined,
            hwm: item.order.hwm !== undefined ? {
                set: item.order.hwm
              } : undefined,
            subtag: item.order.subtag !== undefined ? {
                set: item.order.subtag
              } : undefined,
            source: item.order.source !== undefined ? {
                set: item.order.source
              } : undefined,
            expiresAt: item.order.expiresAt !== undefined ? {
                set: item.order.expiresAt
              } : undefined,
            optionType: item.order.optionType !== undefined ? {
                set: item.order.optionType
              } : undefined,
            stopLossId: item.order.stopLossId !== undefined ? {
                set: item.order.stopLossId
              } : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? {
                set: item.order.takeProfitId
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
            expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
            failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
            replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
            replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
            replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
            positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
            legs: item.order.legs !== undefined ? item.order.legs : undefined,
            hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
            subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
            source: item.order.source !== undefined ? item.order.source : undefined,
            expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
          },
        }
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
        Array.isArray(item.deliverables) && item.deliverables.length > 0 &&  item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.deliverables.map((item: any) => ({
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
            }
          }
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
            expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
            failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
            replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
            replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
            replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
            positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
            legs: item.order.legs !== undefined ? item.order.legs : undefined,
            hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
            subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
            source: item.order.source !== undefined ? item.order.source : undefined,
            expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
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
    orders: props.asset.orders ? 
      Array.isArray(props.asset.orders) && props.asset.orders.length > 0 &&  props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.orders.map((item: any) => ({
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
          expiredAt: item.expiredAt !== undefined ? item.expiredAt : undefined,
          failedAt: item.failedAt !== undefined ? item.failedAt : undefined,
          replacedAt: item.replacedAt !== undefined ? item.replacedAt : undefined,
          replacedBy: item.replacedBy !== undefined ? item.replacedBy : undefined,
          replaces: item.replaces !== undefined ? item.replaces : undefined,
          positionIntent: item.positionIntent !== undefined ? item.positionIntent : undefined,
          legs: item.legs !== undefined ? item.legs : undefined,
          hwm: item.hwm !== undefined ? item.hwm : undefined,
          subtag: item.subtag !== undefined ? item.subtag : undefined,
          source: item.source !== undefined ? item.source : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
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
            }
          }
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
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
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
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            primary: item.action.primary !== undefined ? item.action.primary : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
            }
          }
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
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 &&  props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          symbol: item.symbol !== undefined ? item.symbol : undefined,
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
          closed: item.closed !== undefined ? item.closed : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: props.asset.contracts ? 
      Array.isArray(props.asset.contracts) && props.asset.contracts.length > 0 &&  props.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.contracts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.contracts.map((item: any) => ({
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
        Array.isArray(item.deliverables) && item.deliverables.length > 0 &&  item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.deliverables.map((item: any) => ({
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
            }
          }
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
            expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
            failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
            replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
            replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
            replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
            positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
            legs: item.order.legs !== undefined ? item.order.legs : undefined,
            hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
            subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
            source: item.order.source !== undefined ? item.order.source : undefined,
            expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
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
  async upsert(props: NewsArticleAssetSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    orders: props.asset.orders ? 
      Array.isArray(props.asset.orders) && props.asset.orders.length > 0 &&  props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.orders.map((item: any) => ({
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
          expiredAt: item.expiredAt !== undefined ? item.expiredAt : undefined,
          failedAt: item.failedAt !== undefined ? item.failedAt : undefined,
          replacedAt: item.replacedAt !== undefined ? item.replacedAt : undefined,
          replacedBy: item.replacedBy !== undefined ? item.replacedBy : undefined,
          replaces: item.replaces !== undefined ? item.replaces : undefined,
          positionIntent: item.positionIntent !== undefined ? item.positionIntent : undefined,
          legs: item.legs !== undefined ? item.legs : undefined,
          hwm: item.hwm !== undefined ? item.hwm : undefined,
          subtag: item.subtag !== undefined ? item.subtag : undefined,
          source: item.source !== undefined ? item.source : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
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
            }
          }
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
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
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
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            primary: item.action.primary !== undefined ? item.action.primary : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
            }
          }
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
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 &&  props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          symbol: item.symbol !== undefined ? item.symbol : undefined,
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
          closed: item.closed !== undefined ? item.closed : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: props.asset.contracts ? 
      Array.isArray(props.asset.contracts) && props.asset.contracts.length > 0 &&  props.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.contracts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.contracts.map((item: any) => ({
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
        Array.isArray(item.deliverables) && item.deliverables.length > 0 &&  item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.deliverables.map((item: any) => ({
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
            }
          }
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
            expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
            failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
            replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
            replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
            replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
            positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
            legs: item.order.legs !== undefined ? item.order.legs : undefined,
            hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
            subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
            source: item.order.source !== undefined ? item.order.source : undefined,
            expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
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
  news: props.news ? 
  typeof props.news === 'object' && Object.keys(props.news).length === 1 && (Object.keys(props.news)[0] === 'id' || Object.keys(props.news)[0] === 'symbol')
? {
  connect: {
    id: props.news.id
  }
} : { upsert: {
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
  typeof props.asset === 'object' && Object.keys(props.asset).length === 1 && (Object.keys(props.asset)[0] === 'id' || Object.keys(props.asset)[0] === 'symbol')
? {
  connect: {
    id: props.asset.id
  }
} : { upsert: {
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
        askPrice: props.asset.askPrice !== undefined ? {
            set: props.asset.askPrice
          } : undefined,
        bidPrice: props.asset.bidPrice !== undefined ? {
            set: props.asset.bidPrice
          } : undefined,
    orders: props.asset.orders ? 
    Array.isArray(props.asset.orders) && props.asset.orders.length > 0 && props.asset.orders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.asset.orders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.asset.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          contractId: item.contractId !== undefined ? item.contractId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId
            } : undefined,
          takeProfitId: item.takeProfitId !== undefined ? {
              equals: item.takeProfitId
            } : undefined,
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
          filledQty: item.filledQty !== undefined ? {
              set: item.filledQty
            } : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? {
              set: item.filledAvgPrice
            } : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? {
              set: item.cancelRequestedAt
            } : undefined,
          canceledAt: item.canceledAt !== undefined ? {
              set: item.canceledAt
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
          expiredAt: item.expiredAt !== undefined ? {
              set: item.expiredAt
            } : undefined,
          failedAt: item.failedAt !== undefined ? {
              set: item.failedAt
            } : undefined,
          replacedAt: item.replacedAt !== undefined ? {
              set: item.replacedAt
            } : undefined,
          replacedBy: item.replacedBy !== undefined ? {
              set: item.replacedBy
            } : undefined,
          replaces: item.replaces !== undefined ? {
              set: item.replaces
            } : undefined,
          positionIntent: item.positionIntent !== undefined ? {
              set: item.positionIntent
            } : undefined,
          legs: item.legs !== undefined ? {
              set: item.legs
            } : undefined,
          hwm: item.hwm !== undefined ? {
              set: item.hwm
            } : undefined,
          subtag: item.subtag !== undefined ? {
              set: item.subtag
            } : undefined,
          source: item.source !== undefined ? {
              set: item.source
            } : undefined,
          expiresAt: item.expiresAt !== undefined ? {
              set: item.expiresAt
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
      stopLoss: item.stopLoss ? 
      typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && (Object.keys(item.stopLoss)[0] === 'id' || Object.keys(item.stopLoss)[0] === 'symbol')
? {
      connect: {
        id: item.stopLoss.id
      }
} : { upsert: {
          where: {
            id: item.stopLoss.id !== undefined ? {
                equals: item.stopLoss.id
              } : undefined,
            orderId: item.stopLoss.orderId !== undefined ? {
                equals: item.stopLoss.orderId
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
      takeProfit: item.takeProfit ? 
      typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && (Object.keys(item.takeProfit)[0] === 'id' || Object.keys(item.takeProfit)[0] === 'symbol')
? {
      connect: {
        id: item.takeProfit.id
      }
} : { upsert: {
          where: {
            id: item.takeProfit.id !== undefined ? {
                equals: item.takeProfit.id
              } : undefined,
            orderId: item.takeProfit.orderId !== undefined ? {
                equals: item.takeProfit.orderId
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
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && (Object.keys(item.alpacaAccount)[0] === 'id' || Object.keys(item.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id
              } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId
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
            realTime: item.alpacaAccount.realTime !== undefined ? {
                set: item.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
      typeof item.action === 'object' && Object.keys(item.action).length === 1 && (Object.keys(item.action)[0] === 'id' || Object.keys(item.action)[0] === 'symbol')
? {
      connect: {
        id: item.action.id
      }
} : { upsert: {
          where: {
            id: item.action.id !== undefined ? {
                equals: item.action.id
              } : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId
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
            primary: item.action.primary !== undefined ? {
                set: item.action.primary
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
            primary: item.action.primary !== undefined ? item.action.primary : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
      typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && (Object.keys(item.contract)[0] === 'id' || Object.keys(item.contract)[0] === 'symbol')
? {
      connect: {
        id: item.contract.id
      }
} : { upsert: {
          where: {
            id: item.contract.id !== undefined ? {
                equals: item.contract.id
              } : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? {
                equals: item.contract.alpacaId
              } : undefined,
            symbol: item.contract.symbol !== undefined ? {
                equals: item.contract.symbol
              } : undefined,
            name: item.contract.name !== undefined ? {
                equals: item.contract.name
              } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                equals: item.contract.underlyingAssetId
              } : undefined,
            assetId: item.contract.assetId !== undefined ? {
                equals: item.contract.assetId
              } : undefined,
            orderId: item.contract.orderId !== undefined ? {
                equals: item.contract.orderId
              } : undefined,
          },
          update: {
            id: item.contract.id !== undefined ? {
                set: item.contract.id
              } : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? {
                set: item.contract.alpacaId
              } : undefined,
            symbol: item.contract.symbol !== undefined ? {
                set: item.contract.symbol
              } : undefined,
            name: item.contract.name !== undefined ? {
                set: item.contract.name
              } : undefined,
            status: item.contract.status !== undefined ? {
                set: item.contract.status
              } : undefined,
            tradable: item.contract.tradable !== undefined ? {
                set: item.contract.tradable
              } : undefined,
            expirationDate: item.contract.expirationDate !== undefined ? {
                set: item.contract.expirationDate
              } : undefined,
            rootSymbol: item.contract.rootSymbol !== undefined ? {
                set: item.contract.rootSymbol
              } : undefined,
            underlyingSymbol: item.contract.underlyingSymbol !== undefined ? {
                set: item.contract.underlyingSymbol
              } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                set: item.contract.underlyingAssetId
              } : undefined,
            type: item.contract.type !== undefined ? {
                set: item.contract.type
              } : undefined,
            style: item.contract.style !== undefined ? {
                set: item.contract.style
              } : undefined,
            strikePrice: item.contract.strikePrice !== undefined ? {
                set: item.contract.strikePrice
              } : undefined,
            multiplier: item.contract.multiplier !== undefined ? {
                set: item.contract.multiplier
              } : undefined,
            size: item.contract.size !== undefined ? {
                set: item.contract.size
              } : undefined,
            openInterest: item.contract.openInterest !== undefined ? {
                set: item.contract.openInterest
              } : undefined,
            openInterestDate: item.contract.openInterestDate !== undefined ? {
                set: item.contract.openInterestDate
              } : undefined,
            closePrice: item.contract.closePrice !== undefined ? {
                set: item.contract.closePrice
              } : undefined,
            closePriceDate: item.contract.closePriceDate !== undefined ? {
                set: item.contract.closePriceDate
              } : undefined,
            ppind: item.contract.ppind !== undefined ? {
                set: item.contract.ppind
              } : undefined,
            orderId: item.contract.orderId !== undefined ? {
                set: item.contract.orderId
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
          expiredAt: item.expiredAt !== undefined ? item.expiredAt : undefined,
          failedAt: item.failedAt !== undefined ? item.failedAt : undefined,
          replacedAt: item.replacedAt !== undefined ? item.replacedAt : undefined,
          replacedBy: item.replacedBy !== undefined ? item.replacedBy : undefined,
          replaces: item.replaces !== undefined ? item.replaces : undefined,
          positionIntent: item.positionIntent !== undefined ? item.positionIntent : undefined,
          legs: item.legs !== undefined ? item.legs : undefined,
          hwm: item.hwm !== undefined ? item.hwm : undefined,
          subtag: item.subtag !== undefined ? item.subtag : undefined,
          source: item.source !== undefined ? item.source : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
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
            }
          }
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
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
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
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            primary: item.action.primary !== undefined ? item.action.primary : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
            }
          }
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
    positions: props.asset.positions ? 
    Array.isArray(props.asset.positions) && props.asset.positions.length > 0 && props.asset.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.asset.positions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId
            } : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol
            } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          symbol: item.symbol !== undefined ? {
              set: item.symbol
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
          closed: item.closed !== undefined ? {
              set: item.closed
            } : undefined,
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && (Object.keys(item.alpacaAccount)[0] === 'id' || Object.keys(item.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id
              } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId
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
            realTime: item.alpacaAccount.realTime !== undefined ? {
                set: item.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
        },
        create: {
          symbol: item.symbol !== undefined ? item.symbol : undefined,
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
          closed: item.closed !== undefined ? item.closed : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: props.asset.contracts ? 
    Array.isArray(props.asset.contracts) && props.asset.contracts.length > 0 && props.asset.contracts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.asset.contracts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.asset.contracts.map((item: any) => ({
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
          assetId: item.assetId !== undefined ? {
              equals: item.assetId
            } : undefined,
          orderId: item.orderId !== undefined ? {
              equals: item.orderId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          alpacaId: item.alpacaId !== undefined ? {
              set: item.alpacaId
            } : undefined,
          symbol: item.symbol !== undefined ? {
              set: item.symbol
            } : undefined,
          name: item.name !== undefined ? {
              set: item.name
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          tradable: item.tradable !== undefined ? {
              set: item.tradable
            } : undefined,
          expirationDate: item.expirationDate !== undefined ? {
              set: item.expirationDate
            } : undefined,
          rootSymbol: item.rootSymbol !== undefined ? {
              set: item.rootSymbol
            } : undefined,
          underlyingSymbol: item.underlyingSymbol !== undefined ? {
              set: item.underlyingSymbol
            } : undefined,
          underlyingAssetId: item.underlyingAssetId !== undefined ? {
              set: item.underlyingAssetId
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          style: item.style !== undefined ? {
              set: item.style
            } : undefined,
          strikePrice: item.strikePrice !== undefined ? {
              set: item.strikePrice
            } : undefined,
          multiplier: item.multiplier !== undefined ? {
              set: item.multiplier
            } : undefined,
          size: item.size !== undefined ? {
              set: item.size
            } : undefined,
          openInterest: item.openInterest !== undefined ? {
              set: item.openInterest
            } : undefined,
          openInterestDate: item.openInterestDate !== undefined ? {
              set: item.openInterestDate
            } : undefined,
          closePrice: item.closePrice !== undefined ? {
              set: item.closePrice
            } : undefined,
          closePriceDate: item.closePriceDate !== undefined ? {
              set: item.closePriceDate
            } : undefined,
          ppind: item.ppind !== undefined ? {
              set: item.ppind
            } : undefined,
          orderId: item.orderId !== undefined ? {
              set: item.orderId
            } : undefined,
      deliverables: item.deliverables ? 
      Array.isArray(item.deliverables) && item.deliverables.length > 0 && item.deliverables.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.deliverables.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.deliverables.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol
              } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            symbol: item.symbol !== undefined ? {
                set: item.symbol
              } : undefined,
            assetId: item.assetId !== undefined ? {
                set: item.assetId
              } : undefined,
            amount: item.amount !== undefined ? {
                set: item.amount
              } : undefined,
            allocationPercentage: item.allocationPercentage !== undefined ? {
                set: item.allocationPercentage
              } : undefined,
            settlementType: item.settlementType !== undefined ? {
                set: item.settlementType
              } : undefined,
            settlementMethod: item.settlementMethod !== undefined ? {
                set: item.settlementMethod
              } : undefined,
            delayedSettlement: item.delayedSettlement !== undefined ? {
                set: item.delayedSettlement
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
      typeof item.order === 'object' && Object.keys(item.order).length === 1 && (Object.keys(item.order)[0] === 'id' || Object.keys(item.order)[0] === 'symbol')
? {
      connect: {
        id: item.order.id
      }
} : { upsert: {
          where: {
            id: item.order.id !== undefined ? {
                equals: item.order.id
              } : undefined,
            clientOrderId: item.order.clientOrderId !== undefined ? {
                equals: item.order.clientOrderId
              } : undefined,
            alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
                equals: item.order.alpacaAccountId
              } : undefined,
            assetId: item.order.assetId !== undefined ? {
                equals: item.order.assetId
              } : undefined,
            actionId: item.order.actionId !== undefined ? {
                equals: item.order.actionId
              } : undefined,
            stopLossId: item.order.stopLossId !== undefined ? {
                equals: item.order.stopLossId
              } : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? {
                equals: item.order.takeProfitId
              } : undefined,
            contractId: item.order.contractId !== undefined ? {
                equals: item.order.contractId
              } : undefined,
          },
          update: {
            id: item.order.id !== undefined ? {
                set: item.order.id
              } : undefined,
            clientOrderId: item.order.clientOrderId !== undefined ? {
                set: item.order.clientOrderId
              } : undefined,
            qty: item.order.qty !== undefined ? {
                set: item.order.qty
              } : undefined,
            notional: item.order.notional !== undefined ? {
                set: item.order.notional
              } : undefined,
            side: item.order.side !== undefined ? {
                set: item.order.side
              } : undefined,
            type: item.order.type !== undefined ? {
                set: item.order.type
              } : undefined,
            orderClass: item.order.orderClass !== undefined ? {
                set: item.order.orderClass
              } : undefined,
            timeInForce: item.order.timeInForce !== undefined ? {
                set: item.order.timeInForce
              } : undefined,
            limitPrice: item.order.limitPrice !== undefined ? {
                set: item.order.limitPrice
              } : undefined,
            stopPrice: item.order.stopPrice !== undefined ? {
                set: item.order.stopPrice
              } : undefined,
            trailPrice: item.order.trailPrice !== undefined ? {
                set: item.order.trailPrice
              } : undefined,
            trailPercent: item.order.trailPercent !== undefined ? {
                set: item.order.trailPercent
              } : undefined,
            extendedHours: item.order.extendedHours !== undefined ? {
                set: item.order.extendedHours
              } : undefined,
            status: item.order.status !== undefined ? {
                set: item.order.status
              } : undefined,
            submittedAt: item.order.submittedAt !== undefined ? {
                set: item.order.submittedAt
              } : undefined,
            filledAt: item.order.filledAt !== undefined ? {
                set: item.order.filledAt
              } : undefined,
            filledQty: item.order.filledQty !== undefined ? {
                set: item.order.filledQty
              } : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? {
                set: item.order.filledAvgPrice
              } : undefined,
            cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? {
                set: item.order.cancelRequestedAt
              } : undefined,
            canceledAt: item.order.canceledAt !== undefined ? {
                set: item.order.canceledAt
              } : undefined,
            fee: item.order.fee !== undefined ? {
                set: item.order.fee
              } : undefined,
            strikePrice: item.order.strikePrice !== undefined ? {
                set: item.order.strikePrice
              } : undefined,
            expirationDate: item.order.expirationDate !== undefined ? {
                set: item.order.expirationDate
              } : undefined,
            expiredAt: item.order.expiredAt !== undefined ? {
                set: item.order.expiredAt
              } : undefined,
            failedAt: item.order.failedAt !== undefined ? {
                set: item.order.failedAt
              } : undefined,
            replacedAt: item.order.replacedAt !== undefined ? {
                set: item.order.replacedAt
              } : undefined,
            replacedBy: item.order.replacedBy !== undefined ? {
                set: item.order.replacedBy
              } : undefined,
            replaces: item.order.replaces !== undefined ? {
                set: item.order.replaces
              } : undefined,
            positionIntent: item.order.positionIntent !== undefined ? {
                set: item.order.positionIntent
              } : undefined,
            legs: item.order.legs !== undefined ? {
                set: item.order.legs
              } : undefined,
            hwm: item.order.hwm !== undefined ? {
                set: item.order.hwm
              } : undefined,
            subtag: item.order.subtag !== undefined ? {
                set: item.order.subtag
              } : undefined,
            source: item.order.source !== undefined ? {
                set: item.order.source
              } : undefined,
            expiresAt: item.order.expiresAt !== undefined ? {
                set: item.order.expiresAt
              } : undefined,
            optionType: item.order.optionType !== undefined ? {
                set: item.order.optionType
              } : undefined,
            stopLossId: item.order.stopLossId !== undefined ? {
                set: item.order.stopLossId
              } : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? {
                set: item.order.takeProfitId
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
            expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
            failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
            replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
            replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
            replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
            positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
            legs: item.order.legs !== undefined ? item.order.legs : undefined,
            hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
            subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
            source: item.order.source !== undefined ? item.order.source : undefined,
            expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
          },
        }
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
        Array.isArray(item.deliverables) && item.deliverables.length > 0 &&  item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.deliverables.map((item: any) => ({
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
            }
          }
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
            expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
            failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
            replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
            replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
            replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
            positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
            legs: item.order.legs !== undefined ? item.order.legs : undefined,
            hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
            subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
            source: item.order.source !== undefined ? item.order.source : undefined,
            expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
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
    orders: props.asset.orders ? 
      Array.isArray(props.asset.orders) && props.asset.orders.length > 0 &&  props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.orders.map((item: any) => ({
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
          expiredAt: item.expiredAt !== undefined ? item.expiredAt : undefined,
          failedAt: item.failedAt !== undefined ? item.failedAt : undefined,
          replacedAt: item.replacedAt !== undefined ? item.replacedAt : undefined,
          replacedBy: item.replacedBy !== undefined ? item.replacedBy : undefined,
          replaces: item.replaces !== undefined ? item.replaces : undefined,
          positionIntent: item.positionIntent !== undefined ? item.positionIntent : undefined,
          legs: item.legs !== undefined ? item.legs : undefined,
          hwm: item.hwm !== undefined ? item.hwm : undefined,
          subtag: item.subtag !== undefined ? item.subtag : undefined,
          source: item.source !== undefined ? item.source : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
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
            }
          }
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
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
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
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            primary: item.action.primary !== undefined ? item.action.primary : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
            }
          }
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
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 &&  props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          symbol: item.symbol !== undefined ? item.symbol : undefined,
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
          closed: item.closed !== undefined ? item.closed : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: props.asset.contracts ? 
      Array.isArray(props.asset.contracts) && props.asset.contracts.length > 0 &&  props.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.contracts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.contracts.map((item: any) => ({
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
        Array.isArray(item.deliverables) && item.deliverables.length > 0 &&  item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.deliverables.map((item: any) => ({
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
            }
          }
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
            expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
            failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
            replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
            replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
            replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
            positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
            legs: item.order.legs !== undefined ? item.order.legs : undefined,
            hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
            subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
            source: item.order.source !== undefined ? item.order.source : undefined,
            expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
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
  async updateMany(props: NewsArticleAssetSentimentType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  news: prop.news ? 
  typeof prop.news === 'object' && Object.keys(prop.news).length === 1 && (Object.keys(prop.news)[0] === 'id' || Object.keys(prop.news)[0] === 'symbol')
? {
  connect: {
    id: prop.news.id
  }
} : { upsert: {
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
        authors: prop.news.authors !== undefined ? {
            set: prop.news.authors 
           } : undefined,
        summary: prop.news.summary !== undefined ? prop.news.summary : undefined,
        bannerImage: prop.news.bannerImage !== undefined ? prop.news.bannerImage : undefined,
        timePublished: prop.news.timePublished !== undefined ? prop.news.timePublished : undefined,
        category: prop.news.category !== undefined ? prop.news.category : undefined,
        topics: prop.news.topics !== undefined ? {
            set: prop.news.topics 
           } : undefined,
        logo: prop.news.logo !== undefined ? prop.news.logo : undefined,
      },
    }
  } : undefined,
  asset: prop.asset ? 
  typeof prop.asset === 'object' && Object.keys(prop.asset).length === 1 && (Object.keys(prop.asset)[0] === 'id' || Object.keys(prop.asset)[0] === 'symbol')
? {
  connect: {
    id: prop.asset.id
  }
} : { upsert: {
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
        askPrice: prop.asset.askPrice !== undefined ? {
            set: prop.asset.askPrice
          } : undefined,
        bidPrice: prop.asset.bidPrice !== undefined ? {
            set: prop.asset.bidPrice
          } : undefined,
    orders: prop.asset.orders ? 
    Array.isArray(prop.asset.orders) && prop.asset.orders.length > 0 && prop.asset.orders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.asset.orders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.asset.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          contractId: item.contractId !== undefined ? item.contractId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId
            } : undefined,
          takeProfitId: item.takeProfitId !== undefined ? {
              equals: item.takeProfitId
            } : undefined,
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
          filledQty: item.filledQty !== undefined ? {
              set: item.filledQty
            } : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? {
              set: item.filledAvgPrice
            } : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? {
              set: item.cancelRequestedAt
            } : undefined,
          canceledAt: item.canceledAt !== undefined ? {
              set: item.canceledAt
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
          expiredAt: item.expiredAt !== undefined ? {
              set: item.expiredAt
            } : undefined,
          failedAt: item.failedAt !== undefined ? {
              set: item.failedAt
            } : undefined,
          replacedAt: item.replacedAt !== undefined ? {
              set: item.replacedAt
            } : undefined,
          replacedBy: item.replacedBy !== undefined ? {
              set: item.replacedBy
            } : undefined,
          replaces: item.replaces !== undefined ? {
              set: item.replaces
            } : undefined,
          positionIntent: item.positionIntent !== undefined ? {
              set: item.positionIntent
            } : undefined,
          legs: item.legs !== undefined ? {
              set: item.legs
            } : undefined,
          hwm: item.hwm !== undefined ? {
              set: item.hwm
            } : undefined,
          subtag: item.subtag !== undefined ? {
              set: item.subtag
            } : undefined,
          source: item.source !== undefined ? {
              set: item.source
            } : undefined,
          expiresAt: item.expiresAt !== undefined ? {
              set: item.expiresAt
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
      stopLoss: item.stopLoss ? 
      typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && (Object.keys(item.stopLoss)[0] === 'id' || Object.keys(item.stopLoss)[0] === 'symbol')
? {
      connect: {
        id: item.stopLoss.id
      }
} : { upsert: {
          where: {
            id: item.stopLoss.id !== undefined ? {
                equals: item.stopLoss.id
              } : undefined,
            orderId: item.stopLoss.orderId !== undefined ? {
                equals: item.stopLoss.orderId
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
      takeProfit: item.takeProfit ? 
      typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && (Object.keys(item.takeProfit)[0] === 'id' || Object.keys(item.takeProfit)[0] === 'symbol')
? {
      connect: {
        id: item.takeProfit.id
      }
} : { upsert: {
          where: {
            id: item.takeProfit.id !== undefined ? {
                equals: item.takeProfit.id
              } : undefined,
            orderId: item.takeProfit.orderId !== undefined ? {
                equals: item.takeProfit.orderId
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
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && (Object.keys(item.alpacaAccount)[0] === 'id' || Object.keys(item.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id
              } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId
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
            realTime: item.alpacaAccount.realTime !== undefined ? {
                set: item.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
      typeof item.action === 'object' && Object.keys(item.action).length === 1 && (Object.keys(item.action)[0] === 'id' || Object.keys(item.action)[0] === 'symbol')
? {
      connect: {
        id: item.action.id
      }
} : { upsert: {
          where: {
            id: item.action.id !== undefined ? {
                equals: item.action.id
              } : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId
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
            primary: item.action.primary !== undefined ? {
                set: item.action.primary
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
            primary: item.action.primary !== undefined ? item.action.primary : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
      typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && (Object.keys(item.contract)[0] === 'id' || Object.keys(item.contract)[0] === 'symbol')
? {
      connect: {
        id: item.contract.id
      }
} : { upsert: {
          where: {
            id: item.contract.id !== undefined ? {
                equals: item.contract.id
              } : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? {
                equals: item.contract.alpacaId
              } : undefined,
            symbol: item.contract.symbol !== undefined ? {
                equals: item.contract.symbol
              } : undefined,
            name: item.contract.name !== undefined ? {
                equals: item.contract.name
              } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                equals: item.contract.underlyingAssetId
              } : undefined,
            assetId: item.contract.assetId !== undefined ? {
                equals: item.contract.assetId
              } : undefined,
            orderId: item.contract.orderId !== undefined ? {
                equals: item.contract.orderId
              } : undefined,
          },
          update: {
            id: item.contract.id !== undefined ? {
                set: item.contract.id
              } : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? {
                set: item.contract.alpacaId
              } : undefined,
            symbol: item.contract.symbol !== undefined ? {
                set: item.contract.symbol
              } : undefined,
            name: item.contract.name !== undefined ? {
                set: item.contract.name
              } : undefined,
            status: item.contract.status !== undefined ? {
                set: item.contract.status
              } : undefined,
            tradable: item.contract.tradable !== undefined ? {
                set: item.contract.tradable
              } : undefined,
            expirationDate: item.contract.expirationDate !== undefined ? {
                set: item.contract.expirationDate
              } : undefined,
            rootSymbol: item.contract.rootSymbol !== undefined ? {
                set: item.contract.rootSymbol
              } : undefined,
            underlyingSymbol: item.contract.underlyingSymbol !== undefined ? {
                set: item.contract.underlyingSymbol
              } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                set: item.contract.underlyingAssetId
              } : undefined,
            type: item.contract.type !== undefined ? {
                set: item.contract.type
              } : undefined,
            style: item.contract.style !== undefined ? {
                set: item.contract.style
              } : undefined,
            strikePrice: item.contract.strikePrice !== undefined ? {
                set: item.contract.strikePrice
              } : undefined,
            multiplier: item.contract.multiplier !== undefined ? {
                set: item.contract.multiplier
              } : undefined,
            size: item.contract.size !== undefined ? {
                set: item.contract.size
              } : undefined,
            openInterest: item.contract.openInterest !== undefined ? {
                set: item.contract.openInterest
              } : undefined,
            openInterestDate: item.contract.openInterestDate !== undefined ? {
                set: item.contract.openInterestDate
              } : undefined,
            closePrice: item.contract.closePrice !== undefined ? {
                set: item.contract.closePrice
              } : undefined,
            closePriceDate: item.contract.closePriceDate !== undefined ? {
                set: item.contract.closePriceDate
              } : undefined,
            ppind: item.contract.ppind !== undefined ? {
                set: item.contract.ppind
              } : undefined,
            orderId: item.contract.orderId !== undefined ? {
                set: item.contract.orderId
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
          expiredAt: item.expiredAt !== undefined ? item.expiredAt : undefined,
          failedAt: item.failedAt !== undefined ? item.failedAt : undefined,
          replacedAt: item.replacedAt !== undefined ? item.replacedAt : undefined,
          replacedBy: item.replacedBy !== undefined ? item.replacedBy : undefined,
          replaces: item.replaces !== undefined ? item.replaces : undefined,
          positionIntent: item.positionIntent !== undefined ? item.positionIntent : undefined,
          legs: item.legs !== undefined ? item.legs : undefined,
          hwm: item.hwm !== undefined ? item.hwm : undefined,
          subtag: item.subtag !== undefined ? item.subtag : undefined,
          source: item.source !== undefined ? item.source : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
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
            }
          }
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
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
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
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            primary: item.action.primary !== undefined ? item.action.primary : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
            }
          }
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
    positions: prop.asset.positions ? 
    Array.isArray(prop.asset.positions) && prop.asset.positions.length > 0 && prop.asset.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.asset.positions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId
            } : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol
            } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          symbol: item.symbol !== undefined ? {
              set: item.symbol
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
          closed: item.closed !== undefined ? {
              set: item.closed
            } : undefined,
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && (Object.keys(item.alpacaAccount)[0] === 'id' || Object.keys(item.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id
              } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId
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
            realTime: item.alpacaAccount.realTime !== undefined ? {
                set: item.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
        },
        create: {
          symbol: item.symbol !== undefined ? item.symbol : undefined,
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
          closed: item.closed !== undefined ? item.closed : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: prop.asset.contracts ? 
    Array.isArray(prop.asset.contracts) && prop.asset.contracts.length > 0 && prop.asset.contracts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.asset.contracts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.asset.contracts.map((item: any) => ({
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
          assetId: item.assetId !== undefined ? {
              equals: item.assetId
            } : undefined,
          orderId: item.orderId !== undefined ? {
              equals: item.orderId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          alpacaId: item.alpacaId !== undefined ? {
              set: item.alpacaId
            } : undefined,
          symbol: item.symbol !== undefined ? {
              set: item.symbol
            } : undefined,
          name: item.name !== undefined ? {
              set: item.name
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          tradable: item.tradable !== undefined ? {
              set: item.tradable
            } : undefined,
          expirationDate: item.expirationDate !== undefined ? {
              set: item.expirationDate
            } : undefined,
          rootSymbol: item.rootSymbol !== undefined ? {
              set: item.rootSymbol
            } : undefined,
          underlyingSymbol: item.underlyingSymbol !== undefined ? {
              set: item.underlyingSymbol
            } : undefined,
          underlyingAssetId: item.underlyingAssetId !== undefined ? {
              set: item.underlyingAssetId
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          style: item.style !== undefined ? {
              set: item.style
            } : undefined,
          strikePrice: item.strikePrice !== undefined ? {
              set: item.strikePrice
            } : undefined,
          multiplier: item.multiplier !== undefined ? {
              set: item.multiplier
            } : undefined,
          size: item.size !== undefined ? {
              set: item.size
            } : undefined,
          openInterest: item.openInterest !== undefined ? {
              set: item.openInterest
            } : undefined,
          openInterestDate: item.openInterestDate !== undefined ? {
              set: item.openInterestDate
            } : undefined,
          closePrice: item.closePrice !== undefined ? {
              set: item.closePrice
            } : undefined,
          closePriceDate: item.closePriceDate !== undefined ? {
              set: item.closePriceDate
            } : undefined,
          ppind: item.ppind !== undefined ? {
              set: item.ppind
            } : undefined,
          orderId: item.orderId !== undefined ? {
              set: item.orderId
            } : undefined,
      deliverables: item.deliverables ? 
      Array.isArray(item.deliverables) && item.deliverables.length > 0 && item.deliverables.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.deliverables.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.deliverables.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol
              } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            symbol: item.symbol !== undefined ? {
                set: item.symbol
              } : undefined,
            assetId: item.assetId !== undefined ? {
                set: item.assetId
              } : undefined,
            amount: item.amount !== undefined ? {
                set: item.amount
              } : undefined,
            allocationPercentage: item.allocationPercentage !== undefined ? {
                set: item.allocationPercentage
              } : undefined,
            settlementType: item.settlementType !== undefined ? {
                set: item.settlementType
              } : undefined,
            settlementMethod: item.settlementMethod !== undefined ? {
                set: item.settlementMethod
              } : undefined,
            delayedSettlement: item.delayedSettlement !== undefined ? {
                set: item.delayedSettlement
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
      typeof item.order === 'object' && Object.keys(item.order).length === 1 && (Object.keys(item.order)[0] === 'id' || Object.keys(item.order)[0] === 'symbol')
? {
      connect: {
        id: item.order.id
      }
} : { upsert: {
          where: {
            id: item.order.id !== undefined ? {
                equals: item.order.id
              } : undefined,
            clientOrderId: item.order.clientOrderId !== undefined ? {
                equals: item.order.clientOrderId
              } : undefined,
            alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
                equals: item.order.alpacaAccountId
              } : undefined,
            assetId: item.order.assetId !== undefined ? {
                equals: item.order.assetId
              } : undefined,
            actionId: item.order.actionId !== undefined ? {
                equals: item.order.actionId
              } : undefined,
            stopLossId: item.order.stopLossId !== undefined ? {
                equals: item.order.stopLossId
              } : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? {
                equals: item.order.takeProfitId
              } : undefined,
            contractId: item.order.contractId !== undefined ? {
                equals: item.order.contractId
              } : undefined,
          },
          update: {
            id: item.order.id !== undefined ? {
                set: item.order.id
              } : undefined,
            clientOrderId: item.order.clientOrderId !== undefined ? {
                set: item.order.clientOrderId
              } : undefined,
            qty: item.order.qty !== undefined ? {
                set: item.order.qty
              } : undefined,
            notional: item.order.notional !== undefined ? {
                set: item.order.notional
              } : undefined,
            side: item.order.side !== undefined ? {
                set: item.order.side
              } : undefined,
            type: item.order.type !== undefined ? {
                set: item.order.type
              } : undefined,
            orderClass: item.order.orderClass !== undefined ? {
                set: item.order.orderClass
              } : undefined,
            timeInForce: item.order.timeInForce !== undefined ? {
                set: item.order.timeInForce
              } : undefined,
            limitPrice: item.order.limitPrice !== undefined ? {
                set: item.order.limitPrice
              } : undefined,
            stopPrice: item.order.stopPrice !== undefined ? {
                set: item.order.stopPrice
              } : undefined,
            trailPrice: item.order.trailPrice !== undefined ? {
                set: item.order.trailPrice
              } : undefined,
            trailPercent: item.order.trailPercent !== undefined ? {
                set: item.order.trailPercent
              } : undefined,
            extendedHours: item.order.extendedHours !== undefined ? {
                set: item.order.extendedHours
              } : undefined,
            status: item.order.status !== undefined ? {
                set: item.order.status
              } : undefined,
            submittedAt: item.order.submittedAt !== undefined ? {
                set: item.order.submittedAt
              } : undefined,
            filledAt: item.order.filledAt !== undefined ? {
                set: item.order.filledAt
              } : undefined,
            filledQty: item.order.filledQty !== undefined ? {
                set: item.order.filledQty
              } : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? {
                set: item.order.filledAvgPrice
              } : undefined,
            cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? {
                set: item.order.cancelRequestedAt
              } : undefined,
            canceledAt: item.order.canceledAt !== undefined ? {
                set: item.order.canceledAt
              } : undefined,
            fee: item.order.fee !== undefined ? {
                set: item.order.fee
              } : undefined,
            strikePrice: item.order.strikePrice !== undefined ? {
                set: item.order.strikePrice
              } : undefined,
            expirationDate: item.order.expirationDate !== undefined ? {
                set: item.order.expirationDate
              } : undefined,
            expiredAt: item.order.expiredAt !== undefined ? {
                set: item.order.expiredAt
              } : undefined,
            failedAt: item.order.failedAt !== undefined ? {
                set: item.order.failedAt
              } : undefined,
            replacedAt: item.order.replacedAt !== undefined ? {
                set: item.order.replacedAt
              } : undefined,
            replacedBy: item.order.replacedBy !== undefined ? {
                set: item.order.replacedBy
              } : undefined,
            replaces: item.order.replaces !== undefined ? {
                set: item.order.replaces
              } : undefined,
            positionIntent: item.order.positionIntent !== undefined ? {
                set: item.order.positionIntent
              } : undefined,
            legs: item.order.legs !== undefined ? {
                set: item.order.legs
              } : undefined,
            hwm: item.order.hwm !== undefined ? {
                set: item.order.hwm
              } : undefined,
            subtag: item.order.subtag !== undefined ? {
                set: item.order.subtag
              } : undefined,
            source: item.order.source !== undefined ? {
                set: item.order.source
              } : undefined,
            expiresAt: item.order.expiresAt !== undefined ? {
                set: item.order.expiresAt
              } : undefined,
            optionType: item.order.optionType !== undefined ? {
                set: item.order.optionType
              } : undefined,
            stopLossId: item.order.stopLossId !== undefined ? {
                set: item.order.stopLossId
              } : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? {
                set: item.order.takeProfitId
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
            expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
            failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
            replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
            replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
            replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
            positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
            legs: item.order.legs !== undefined ? item.order.legs : undefined,
            hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
            subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
            source: item.order.source !== undefined ? item.order.source : undefined,
            expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
          },
        }
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
        Array.isArray(item.deliverables) && item.deliverables.length > 0 &&  item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.deliverables.map((item: any) => ({
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
            }
          }
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
            expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
            failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
            replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
            replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
            replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
            positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
            legs: item.order.legs !== undefined ? item.order.legs : undefined,
            hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
            subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
            source: item.order.source !== undefined ? item.order.source : undefined,
            expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
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
        askPrice: prop.asset.askPrice !== undefined ? prop.asset.askPrice : undefined,
        bidPrice: prop.asset.bidPrice !== undefined ? prop.asset.bidPrice : undefined,
    orders: prop.asset.orders ? 
      Array.isArray(prop.asset.orders) && prop.asset.orders.length > 0 &&  prop.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.orders.map((item: any) => ({
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
          expiredAt: item.expiredAt !== undefined ? item.expiredAt : undefined,
          failedAt: item.failedAt !== undefined ? item.failedAt : undefined,
          replacedAt: item.replacedAt !== undefined ? item.replacedAt : undefined,
          replacedBy: item.replacedBy !== undefined ? item.replacedBy : undefined,
          replaces: item.replaces !== undefined ? item.replaces : undefined,
          positionIntent: item.positionIntent !== undefined ? item.positionIntent : undefined,
          legs: item.legs !== undefined ? item.legs : undefined,
          hwm: item.hwm !== undefined ? item.hwm : undefined,
          subtag: item.subtag !== undefined ? item.subtag : undefined,
          source: item.source !== undefined ? item.source : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
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
            }
          }
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
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
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
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            primary: item.action.primary !== undefined ? item.action.primary : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
            }
          }
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
    positions: prop.asset.positions ? 
      Array.isArray(prop.asset.positions) && prop.asset.positions.length > 0 &&  prop.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          symbol: item.symbol !== undefined ? item.symbol : undefined,
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
          closed: item.closed !== undefined ? item.closed : undefined,
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
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
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.alpacaAccount.tradeAllocationPct !== undefined ? item.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.alpacaAccount.portfolioTrailPercent !== undefined ? item.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: prop.asset.contracts ? 
      Array.isArray(prop.asset.contracts) && prop.asset.contracts.length > 0 &&  prop.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.contracts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.contracts.map((item: any) => ({
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
        Array.isArray(item.deliverables) && item.deliverables.length > 0 &&  item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.deliverables.map((item: any) => ({
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
            }
          }
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
            expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
            failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
            replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
            replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
            replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
            positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
            legs: item.order.legs !== undefined ? item.order.legs : undefined,
            hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
            subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
            source: item.order.source !== undefined ? item.order.source : undefined,
            expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
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
  async delete(props: NewsArticleAssetSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  async get(props: NewsArticleAssetSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    } catch (error: any) {
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
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    } catch (error: any) {
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
  async findMany(props: NewsArticleAssetSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<NewsArticleAssetSentimentType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No NewsArticleAssetSentiment found') {
        return null;
      } else {
        console.error('Error in getNewsArticleAssetSentiment:', error);
        throw error;
      }
    }
  }
};
