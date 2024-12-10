
  
import { StopLoss as StopLossType } from './generated/typegraphql-prisma/models/StopLoss';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the StopLoss model.
   */

  const selectionSet = `
    
  id
  stopPrice
  limitPrice
  createdAt
  updatedAt
  orderId

  `;

  export const StopLoss = {

    /**
     * Create a new StopLoss record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created StopLoss or null.
     */

    async create(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_STOPLOSS = gql`
        mutation createOneStopLoss($data: StopLossCreateInput!) {
          createOneStopLoss(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            stopPrice: props.stopPrice !== undefined ? props.stopPrice : undefined,
  limitPrice: props.limitPrice !== undefined ? props.limitPrice : undefined,
  Order: props.Order ? 
    typeof props.Order === 'object' && Object.keys(props.Order).length === 1 && Object.keys(props.Order)[0] === 'id'
    ? { connect: {
        id: props.Order.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.Order.id !== undefined ? props.Order.id : undefined,
        clientOrderId: props.Order.clientOrderId !== undefined ? props.Order.clientOrderId : undefined,
        actionId: props.Order.actionId !== undefined ? props.Order.actionId : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        contractId: props.Order.contractId !== undefined ? props.Order.contractId : undefined,
        alpacaAccountId: props.Order.alpacaAccountId !== undefined ? {
            equals: props.Order.alpacaAccountId 
           } : undefined,
      },
      create: {
        clientOrderId: props.Order.clientOrderId !== undefined ? props.Order.clientOrderId : undefined,
        qty: props.Order.qty !== undefined ? props.Order.qty : undefined,
        notional: props.Order.notional !== undefined ? props.Order.notional : undefined,
        side: props.Order.side !== undefined ? props.Order.side : undefined,
        type: props.Order.type !== undefined ? props.Order.type : undefined,
        orderClass: props.Order.orderClass !== undefined ? props.Order.orderClass : undefined,
        timeInForce: props.Order.timeInForce !== undefined ? props.Order.timeInForce : undefined,
        limitPrice: props.Order.limitPrice !== undefined ? props.Order.limitPrice : undefined,
        stopPrice: props.Order.stopPrice !== undefined ? props.Order.stopPrice : undefined,
        trailPrice: props.Order.trailPrice !== undefined ? props.Order.trailPrice : undefined,
        trailPercent: props.Order.trailPercent !== undefined ? props.Order.trailPercent : undefined,
        extendedHours: props.Order.extendedHours !== undefined ? props.Order.extendedHours : undefined,
        status: props.Order.status !== undefined ? props.Order.status : undefined,
        submittedAt: props.Order.submittedAt !== undefined ? props.Order.submittedAt : undefined,
        filledAt: props.Order.filledAt !== undefined ? props.Order.filledAt : undefined,
        filledQty: props.Order.filledQty !== undefined ? props.Order.filledQty : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? props.Order.filledAvgPrice : undefined,
        cancelRequestedAt: props.Order.cancelRequestedAt !== undefined ? props.Order.cancelRequestedAt : undefined,
        canceledAt: props.Order.canceledAt !== undefined ? props.Order.canceledAt : undefined,
        fee: props.Order.fee !== undefined ? props.Order.fee : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? props.Order.strikePrice : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? props.Order.expirationDate : undefined,
        optionType: props.Order.optionType !== undefined ? props.Order.optionType : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? props.Order.takeProfitId : undefined,
    takeProfit: props.Order.takeProfit ? 
      typeof props.Order.takeProfit === 'object' && Object.keys(props.Order.takeProfit).length === 1 && Object.keys(props.Order.takeProfit)[0] === 'id'
    ? { connect: {
          id: props.Order.takeProfit.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.Order.takeProfit.id !== undefined ? props.Order.takeProfit.id : undefined,
          orderId: props.Order.takeProfit.orderId !== undefined ? props.Order.takeProfit.orderId : undefined,
        },
        create: {
          limitPrice: props.Order.takeProfit.limitPrice !== undefined ? props.Order.takeProfit.limitPrice : undefined,
          stopPrice: props.Order.takeProfit.stopPrice !== undefined ? props.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? 
      typeof props.Order.alpacaAccount === 'object' && Object.keys(props.Order.alpacaAccount).length === 1 && Object.keys(props.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.Order.alpacaAccount.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.Order.alpacaAccount.id !== undefined ? props.Order.alpacaAccount.id : undefined,
          userId: props.Order.alpacaAccount.userId !== undefined ? {
              equals: props.Order.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: props.Order.alpacaAccount.type !== undefined ? props.Order.alpacaAccount.type : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? props.Order.alpacaAccount.APIKey : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? props.Order.alpacaAccount.APISecret : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? {
            set: props.Order.alpacaAccount.configuration
          } : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
          realTime: props.Order.alpacaAccount.realTime !== undefined ? props.Order.alpacaAccount.realTime : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? props.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? props.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? props.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? props.Order.alpacaAccount.volumeThreshold : undefined,
      user: props.Order.alpacaAccount.user ? 
        typeof props.Order.alpacaAccount.user === 'object' && Object.keys(props.Order.alpacaAccount.user).length === 1 && Object.keys(props.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.Order.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.Order.alpacaAccount.user.id !== undefined ? props.Order.alpacaAccount.user.id : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? props.Order.alpacaAccount.user.email : undefined,
            name: props.Order.alpacaAccount.user.name !== undefined ? {
                equals: props.Order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.Order.alpacaAccount.user.name !== undefined ? props.Order.alpacaAccount.user.name : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? props.Order.alpacaAccount.user.email : undefined,
            emailVerified: props.Order.alpacaAccount.user.emailVerified !== undefined ? props.Order.alpacaAccount.user.emailVerified : undefined,
            image: props.Order.alpacaAccount.user.image !== undefined ? props.Order.alpacaAccount.user.image : undefined,
            role: props.Order.alpacaAccount.user.role !== undefined ? props.Order.alpacaAccount.user.role : undefined,
            bio: props.Order.alpacaAccount.user.bio !== undefined ? props.Order.alpacaAccount.user.bio : undefined,
            jobTitle: props.Order.alpacaAccount.user.jobTitle !== undefined ? props.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.Order.alpacaAccount.user.currentAccount !== undefined ? props.Order.alpacaAccount.user.currentAccount : undefined,
            plan: props.Order.alpacaAccount.user.plan !== undefined ? props.Order.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.Order.alpacaAccount.user.openaiAPIKey !== undefined ? props.Order.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.Order.alpacaAccount.user.openaiModel !== undefined ? props.Order.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      trades: props.Order.alpacaAccount.trades ? 
        Array.isArray(props.Order.alpacaAccount.trades) && props.Order.alpacaAccount.trades.length > 0 && props.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.alpacaAccount.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.alpacaAccount.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.Order.alpacaAccount.positions ? 
        Array.isArray(props.Order.alpacaAccount.positions) && props.Order.alpacaAccount.positions.length > 0 && props.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.alpacaAccount.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.alpacaAccount.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
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
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
      } : undefined,
      alerts: props.Order.alpacaAccount.alerts ? 
        Array.isArray(props.Order.alpacaAccount.alerts) && props.Order.alpacaAccount.alerts.length > 0 && props.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
    action: props.Order.action ? 
      typeof props.Order.action === 'object' && Object.keys(props.Order.action).length === 1 && Object.keys(props.Order.action)[0] === 'id'
    ? { connect: {
          id: props.Order.action.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.Order.action.id !== undefined ? props.Order.action.id : undefined,
          tradeId: props.Order.action.tradeId !== undefined ? {
              equals: props.Order.action.tradeId 
             } : undefined,
        },
        create: {
          sequence: props.Order.action.sequence !== undefined ? props.Order.action.sequence : undefined,
          type: props.Order.action.type !== undefined ? props.Order.action.type : undefined,
          note: props.Order.action.note !== undefined ? props.Order.action.note : undefined,
          status: props.Order.action.status !== undefined ? props.Order.action.status : undefined,
          fee: props.Order.action.fee !== undefined ? props.Order.action.fee : undefined,
          dependsOn: props.Order.action.dependsOn !== undefined ? {
            set: props.Order.action.dependsOn
          } : undefined,
          dependedOnBy: props.Order.action.dependedOnBy !== undefined ? {
            set: props.Order.action.dependedOnBy
          } : undefined,
      trade: props.Order.action.trade ? 
        typeof props.Order.action.trade === 'object' && Object.keys(props.Order.action.trade).length === 1 && Object.keys(props.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.Order.action.trade.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.Order.action.trade.id !== undefined ? props.Order.action.trade.id : undefined,
            alpacaAccountId: props.Order.action.trade.alpacaAccountId !== undefined ? {
                equals: props.Order.action.trade.alpacaAccountId 
               } : undefined,
          },
          create: {
            qty: props.Order.action.trade.qty !== undefined ? props.Order.action.trade.qty : undefined,
            price: props.Order.action.trade.price !== undefined ? props.Order.action.trade.price : undefined,
            total: props.Order.action.trade.total !== undefined ? props.Order.action.trade.total : undefined,
            optionType: props.Order.action.trade.optionType !== undefined ? props.Order.action.trade.optionType : undefined,
            signal: props.Order.action.trade.signal !== undefined ? props.Order.action.trade.signal : undefined,
            strategy: props.Order.action.trade.strategy !== undefined ? props.Order.action.trade.strategy : undefined,
            analysis: props.Order.action.trade.analysis !== undefined ? props.Order.action.trade.analysis : undefined,
            summary: props.Order.action.trade.summary !== undefined ? props.Order.action.trade.summary : undefined,
            confidence: props.Order.action.trade.confidence !== undefined ? props.Order.action.trade.confidence : undefined,
            timestamp: props.Order.action.trade.timestamp !== undefined ? props.Order.action.trade.timestamp : undefined,
            status: props.Order.action.trade.status !== undefined ? props.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: props.Order.asset ? 
      typeof props.Order.asset === 'object' && Object.keys(props.Order.asset).length === 1 && Object.keys(props.Order.asset)[0] === 'id'
    ? { connect: {
          id: props.Order.asset.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.Order.asset.id !== undefined ? props.Order.asset.id : undefined,
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
        },
        create: {
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
          type: props.Order.asset.type !== undefined ? props.Order.asset.type : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? props.Order.asset.logoUrl : undefined,
          description: props.Order.asset.description !== undefined ? props.Order.asset.description : undefined,
          cik: props.Order.asset.cik !== undefined ? props.Order.asset.cik : undefined,
          exchange: props.Order.asset.exchange !== undefined ? props.Order.asset.exchange : undefined,
          currency: props.Order.asset.currency !== undefined ? props.Order.asset.currency : undefined,
          country: props.Order.asset.country !== undefined ? props.Order.asset.country : undefined,
          sector: props.Order.asset.sector !== undefined ? props.Order.asset.sector : undefined,
          industry: props.Order.asset.industry !== undefined ? props.Order.asset.industry : undefined,
          address: props.Order.asset.address !== undefined ? props.Order.asset.address : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? props.Order.asset.officialSite : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? props.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? props.Order.asset.latestQuarter : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? props.Order.asset.marketCapitalization : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? props.Order.asset.ebitda : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? props.Order.asset.peRatio : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? props.Order.asset.pegRatio : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? props.Order.asset.bookValue : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? props.Order.asset.dividendPerShare : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? props.Order.asset.dividendYield : undefined,
          eps: props.Order.asset.eps !== undefined ? props.Order.asset.eps : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? props.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? props.Order.asset.profitMargin : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? props.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? props.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? props.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? props.Order.asset.revenueTTM : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? props.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? props.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? props.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? props.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? props.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? props.Order.asset.analystRatingHold : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? props.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? props.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? props.Order.asset.trailingPE : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? props.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? props.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? props.Order.asset.priceToBookRatio : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? props.Order.asset.evToRevenue : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? props.Order.asset.evToEbitda : undefined,
          beta: props.Order.asset.beta !== undefined ? props.Order.asset.beta : undefined,
          week52High: props.Order.asset.week52High !== undefined ? props.Order.asset.week52High : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? props.Order.asset.week52Low : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? props.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? props.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? props.Order.asset.sharesOutstanding : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? props.Order.asset.dividendDate : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? props.Order.asset.exDividendDate : undefined,
          askPrice: props.Order.asset.askPrice !== undefined ? props.Order.asset.askPrice : undefined,
          bidPrice: props.Order.asset.bidPrice !== undefined ? props.Order.asset.bidPrice : undefined,
      trades: props.Order.asset.trades ? 
        Array.isArray(props.Order.asset.trades) && props.Order.asset.trades.length > 0 && props.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.asset.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.asset.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.Order.asset.positions ? 
        Array.isArray(props.Order.asset.positions) && props.Order.asset.positions.length > 0 && props.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.asset.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
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
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
      } : undefined,
      newsMentions: props.Order.asset.newsMentions ? 
        Array.isArray(props.Order.asset.newsMentions) && props.Order.asset.newsMentions.length > 0 && props.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.asset.newsMentions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.asset.newsMentions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      contracts: props.Order.asset.contracts ? 
        Array.isArray(props.Order.asset.contracts) && props.Order.asset.contracts.length > 0 && props.Order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.asset.contracts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.asset.contracts.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    contract: props.Order.contract ? 
      typeof props.Order.contract === 'object' && Object.keys(props.Order.contract).length === 1 && Object.keys(props.Order.contract)[0] === 'id'
    ? { connect: {
          id: props.Order.contract.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.Order.contract.id !== undefined ? props.Order.contract.id : undefined,
          alpacaId: props.Order.contract.alpacaId !== undefined ? props.Order.contract.alpacaId : undefined,
          symbol: props.Order.contract.symbol !== undefined ? props.Order.contract.symbol : undefined,
          name: props.Order.contract.name !== undefined ? {
              equals: props.Order.contract.name 
             } : undefined,
          underlyingAssetId: props.Order.contract.underlyingAssetId !== undefined ? {
              equals: props.Order.contract.underlyingAssetId 
             } : undefined,
        },
        create: {
          alpacaId: props.Order.contract.alpacaId !== undefined ? props.Order.contract.alpacaId : undefined,
          symbol: props.Order.contract.symbol !== undefined ? props.Order.contract.symbol : undefined,
          name: props.Order.contract.name !== undefined ? props.Order.contract.name : undefined,
          status: props.Order.contract.status !== undefined ? props.Order.contract.status : undefined,
          tradable: props.Order.contract.tradable !== undefined ? props.Order.contract.tradable : undefined,
          expirationDate: props.Order.contract.expirationDate !== undefined ? props.Order.contract.expirationDate : undefined,
          rootSymbol: props.Order.contract.rootSymbol !== undefined ? props.Order.contract.rootSymbol : undefined,
          underlyingSymbol: props.Order.contract.underlyingSymbol !== undefined ? props.Order.contract.underlyingSymbol : undefined,
          underlyingAssetId: props.Order.contract.underlyingAssetId !== undefined ? props.Order.contract.underlyingAssetId : undefined,
          type: props.Order.contract.type !== undefined ? props.Order.contract.type : undefined,
          style: props.Order.contract.style !== undefined ? props.Order.contract.style : undefined,
          strikePrice: props.Order.contract.strikePrice !== undefined ? props.Order.contract.strikePrice : undefined,
          multiplier: props.Order.contract.multiplier !== undefined ? props.Order.contract.multiplier : undefined,
          size: props.Order.contract.size !== undefined ? props.Order.contract.size : undefined,
          openInterest: props.Order.contract.openInterest !== undefined ? props.Order.contract.openInterest : undefined,
          openInterestDate: props.Order.contract.openInterestDate !== undefined ? props.Order.contract.openInterestDate : undefined,
          closePrice: props.Order.contract.closePrice !== undefined ? props.Order.contract.closePrice : undefined,
          closePriceDate: props.Order.contract.closePriceDate !== undefined ? props.Order.contract.closePriceDate : undefined,
          ppind: props.Order.contract.ppind !== undefined ? props.Order.contract.ppind : undefined,
          orderId: props.Order.contract.orderId !== undefined ? props.Order.contract.orderId : undefined,
      deliverables: props.Order.contract.deliverables ? 
        Array.isArray(props.Order.contract.deliverables) && props.Order.contract.deliverables.length > 0 && props.Order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.contract.deliverables.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.contract.deliverables.map((item: any) => ({
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
      asset: props.Order.contract.asset ? 
        typeof props.Order.contract.asset === 'object' && Object.keys(props.Order.contract.asset).length === 1 && Object.keys(props.Order.contract.asset)[0] === 'id'
    ? { connect: {
            id: props.Order.contract.asset.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.Order.contract.asset.id !== undefined ? props.Order.contract.asset.id : undefined,
            symbol: props.Order.contract.asset.symbol !== undefined ? props.Order.contract.asset.symbol : undefined,
            name: props.Order.contract.asset.name !== undefined ? props.Order.contract.asset.name : undefined,
          },
          create: {
            symbol: props.Order.contract.asset.symbol !== undefined ? props.Order.contract.asset.symbol : undefined,
            name: props.Order.contract.asset.name !== undefined ? props.Order.contract.asset.name : undefined,
            type: props.Order.contract.asset.type !== undefined ? props.Order.contract.asset.type : undefined,
            logoUrl: props.Order.contract.asset.logoUrl !== undefined ? props.Order.contract.asset.logoUrl : undefined,
            description: props.Order.contract.asset.description !== undefined ? props.Order.contract.asset.description : undefined,
            cik: props.Order.contract.asset.cik !== undefined ? props.Order.contract.asset.cik : undefined,
            exchange: props.Order.contract.asset.exchange !== undefined ? props.Order.contract.asset.exchange : undefined,
            currency: props.Order.contract.asset.currency !== undefined ? props.Order.contract.asset.currency : undefined,
            country: props.Order.contract.asset.country !== undefined ? props.Order.contract.asset.country : undefined,
            sector: props.Order.contract.asset.sector !== undefined ? props.Order.contract.asset.sector : undefined,
            industry: props.Order.contract.asset.industry !== undefined ? props.Order.contract.asset.industry : undefined,
            address: props.Order.contract.asset.address !== undefined ? props.Order.contract.asset.address : undefined,
            officialSite: props.Order.contract.asset.officialSite !== undefined ? props.Order.contract.asset.officialSite : undefined,
            fiscalYearEnd: props.Order.contract.asset.fiscalYearEnd !== undefined ? props.Order.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: props.Order.contract.asset.latestQuarter !== undefined ? props.Order.contract.asset.latestQuarter : undefined,
            marketCapitalization: props.Order.contract.asset.marketCapitalization !== undefined ? props.Order.contract.asset.marketCapitalization : undefined,
            ebitda: props.Order.contract.asset.ebitda !== undefined ? props.Order.contract.asset.ebitda : undefined,
            peRatio: props.Order.contract.asset.peRatio !== undefined ? props.Order.contract.asset.peRatio : undefined,
            pegRatio: props.Order.contract.asset.pegRatio !== undefined ? props.Order.contract.asset.pegRatio : undefined,
            bookValue: props.Order.contract.asset.bookValue !== undefined ? props.Order.contract.asset.bookValue : undefined,
            dividendPerShare: props.Order.contract.asset.dividendPerShare !== undefined ? props.Order.contract.asset.dividendPerShare : undefined,
            dividendYield: props.Order.contract.asset.dividendYield !== undefined ? props.Order.contract.asset.dividendYield : undefined,
            eps: props.Order.contract.asset.eps !== undefined ? props.Order.contract.asset.eps : undefined,
            revenuePerShareTTM: props.Order.contract.asset.revenuePerShareTTM !== undefined ? props.Order.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: props.Order.contract.asset.profitMargin !== undefined ? props.Order.contract.asset.profitMargin : undefined,
            operatingMarginTTM: props.Order.contract.asset.operatingMarginTTM !== undefined ? props.Order.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: props.Order.contract.asset.returnOnAssetsTTM !== undefined ? props.Order.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: props.Order.contract.asset.returnOnEquityTTM !== undefined ? props.Order.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: props.Order.contract.asset.revenueTTM !== undefined ? props.Order.contract.asset.revenueTTM : undefined,
            grossProfitTTM: props.Order.contract.asset.grossProfitTTM !== undefined ? props.Order.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: props.Order.contract.asset.dilutedEPSTTM !== undefined ? props.Order.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: props.Order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? props.Order.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: props.Order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? props.Order.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: props.Order.contract.asset.analystTargetPrice !== undefined ? props.Order.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: props.Order.contract.asset.analystRatingStrongBuy !== undefined ? props.Order.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: props.Order.contract.asset.analystRatingBuy !== undefined ? props.Order.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: props.Order.contract.asset.analystRatingHold !== undefined ? props.Order.contract.asset.analystRatingHold : undefined,
            analystRatingSell: props.Order.contract.asset.analystRatingSell !== undefined ? props.Order.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: props.Order.contract.asset.analystRatingStrongSell !== undefined ? props.Order.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: props.Order.contract.asset.trailingPE !== undefined ? props.Order.contract.asset.trailingPE : undefined,
            forwardPE: props.Order.contract.asset.forwardPE !== undefined ? props.Order.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: props.Order.contract.asset.priceToSalesRatioTTM !== undefined ? props.Order.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: props.Order.contract.asset.priceToBookRatio !== undefined ? props.Order.contract.asset.priceToBookRatio : undefined,
            evToRevenue: props.Order.contract.asset.evToRevenue !== undefined ? props.Order.contract.asset.evToRevenue : undefined,
            evToEbitda: props.Order.contract.asset.evToEbitda !== undefined ? props.Order.contract.asset.evToEbitda : undefined,
            beta: props.Order.contract.asset.beta !== undefined ? props.Order.contract.asset.beta : undefined,
            week52High: props.Order.contract.asset.week52High !== undefined ? props.Order.contract.asset.week52High : undefined,
            week52Low: props.Order.contract.asset.week52Low !== undefined ? props.Order.contract.asset.week52Low : undefined,
            day50MovingAverage: props.Order.contract.asset.day50MovingAverage !== undefined ? props.Order.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: props.Order.contract.asset.day200MovingAverage !== undefined ? props.Order.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: props.Order.contract.asset.sharesOutstanding !== undefined ? props.Order.contract.asset.sharesOutstanding : undefined,
            dividendDate: props.Order.contract.asset.dividendDate !== undefined ? props.Order.contract.asset.dividendDate : undefined,
            exDividendDate: props.Order.contract.asset.exDividendDate !== undefined ? props.Order.contract.asset.exDividendDate : undefined,
            askPrice: props.Order.contract.asset.askPrice !== undefined ? props.Order.contract.asset.askPrice : undefined,
            bidPrice: props.Order.contract.asset.bidPrice !== undefined ? props.Order.contract.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneStopLoss) {
        return response.data.createOneStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneStopLoss:', error);
      throw error;
    }
  },

  /**
   * Create multiple StopLoss records.
   * @param props - Array of StopLoss objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: StopLossType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_STOPLOSS = gql`
      mutation createManyStopLoss($data: [StopLossCreateManyInput!]!) {
        createManyStopLoss(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  stopPrice: prop.stopPrice !== undefined ? prop.stopPrice : undefined,
  limitPrice: prop.limitPrice !== undefined ? prop.limitPrice : undefined,
  orderId: prop.orderId !== undefined ? prop.orderId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyStopLoss) {
        return response.data.createManyStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyStopLoss:', error);
      throw error;
    }
  },

  /**
   * Update a single StopLoss record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated StopLoss or null.
   */
  async update(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_STOPLOSS = gql`
      mutation updateOneStopLoss($data: StopLossUpdateInput!, $where: StopLossWhereUniqueInput!) {
        updateOneStopLoss(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
      },
      data: {
  id: props.id !== undefined ? {
    set: props.id
  } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
    set: props.stopPrice
  } : undefined,
  limitPrice: props.limitPrice !== undefined ? {
    set: props.limitPrice
  } : undefined,
  createdAt: props.createdAt !== undefined ? {
    set: props.createdAt
  } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
    set: props.updatedAt
  } : undefined,
  Order: props.Order !== undefined ? {
    set: props.Order
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneStopLoss) {
        return response.data.updateOneStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneStopLoss:', error);
      throw error;
    }
  },

  /**
   * Upsert a single StopLoss record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated StopLoss or null.
   */
  async upsert(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_STOPLOSS = gql`
      mutation upsertOneStopLoss($where: StopLossWhereUniqueInput!, $create: StopLossCreateInput!, $update: StopLossUpdateInput!) {
        upsertOneStopLoss(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
      },
      create: {
    stopPrice: props.stopPrice !== undefined ? props.stopPrice : undefined,
  limitPrice: props.limitPrice !== undefined ? props.limitPrice : undefined,
  Order: props.Order ? 
    typeof props.Order === 'object' && Object.keys(props.Order).length === 1 && Object.keys(props.Order)[0] === 'id'
    ? { connect: {
        id: props.Order.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.Order.id !== undefined ? props.Order.id : undefined,
        clientOrderId: props.Order.clientOrderId !== undefined ? props.Order.clientOrderId : undefined,
        actionId: props.Order.actionId !== undefined ? props.Order.actionId : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        contractId: props.Order.contractId !== undefined ? props.Order.contractId : undefined,
        alpacaAccountId: props.Order.alpacaAccountId !== undefined ? {
            equals: props.Order.alpacaAccountId 
           } : undefined,
      },
      create: {
        clientOrderId: props.Order.clientOrderId !== undefined ? props.Order.clientOrderId : undefined,
        qty: props.Order.qty !== undefined ? props.Order.qty : undefined,
        notional: props.Order.notional !== undefined ? props.Order.notional : undefined,
        side: props.Order.side !== undefined ? props.Order.side : undefined,
        type: props.Order.type !== undefined ? props.Order.type : undefined,
        orderClass: props.Order.orderClass !== undefined ? props.Order.orderClass : undefined,
        timeInForce: props.Order.timeInForce !== undefined ? props.Order.timeInForce : undefined,
        limitPrice: props.Order.limitPrice !== undefined ? props.Order.limitPrice : undefined,
        stopPrice: props.Order.stopPrice !== undefined ? props.Order.stopPrice : undefined,
        trailPrice: props.Order.trailPrice !== undefined ? props.Order.trailPrice : undefined,
        trailPercent: props.Order.trailPercent !== undefined ? props.Order.trailPercent : undefined,
        extendedHours: props.Order.extendedHours !== undefined ? props.Order.extendedHours : undefined,
        status: props.Order.status !== undefined ? props.Order.status : undefined,
        submittedAt: props.Order.submittedAt !== undefined ? props.Order.submittedAt : undefined,
        filledAt: props.Order.filledAt !== undefined ? props.Order.filledAt : undefined,
        filledQty: props.Order.filledQty !== undefined ? props.Order.filledQty : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? props.Order.filledAvgPrice : undefined,
        cancelRequestedAt: props.Order.cancelRequestedAt !== undefined ? props.Order.cancelRequestedAt : undefined,
        canceledAt: props.Order.canceledAt !== undefined ? props.Order.canceledAt : undefined,
        fee: props.Order.fee !== undefined ? props.Order.fee : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? props.Order.strikePrice : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? props.Order.expirationDate : undefined,
        optionType: props.Order.optionType !== undefined ? props.Order.optionType : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? props.Order.takeProfitId : undefined,
    takeProfit: props.Order.takeProfit ? 
      typeof props.Order.takeProfit === 'object' && Object.keys(props.Order.takeProfit).length === 1 && Object.keys(props.Order.takeProfit)[0] === 'id'
    ? { connect: {
          id: props.Order.takeProfit.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.Order.takeProfit.id !== undefined ? props.Order.takeProfit.id : undefined,
          orderId: props.Order.takeProfit.orderId !== undefined ? props.Order.takeProfit.orderId : undefined,
        },
        create: {
          limitPrice: props.Order.takeProfit.limitPrice !== undefined ? props.Order.takeProfit.limitPrice : undefined,
          stopPrice: props.Order.takeProfit.stopPrice !== undefined ? props.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? 
      typeof props.Order.alpacaAccount === 'object' && Object.keys(props.Order.alpacaAccount).length === 1 && Object.keys(props.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.Order.alpacaAccount.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.Order.alpacaAccount.id !== undefined ? props.Order.alpacaAccount.id : undefined,
          userId: props.Order.alpacaAccount.userId !== undefined ? {
              equals: props.Order.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: props.Order.alpacaAccount.type !== undefined ? props.Order.alpacaAccount.type : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? props.Order.alpacaAccount.APIKey : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? props.Order.alpacaAccount.APISecret : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? {
            set: props.Order.alpacaAccount.configuration
          } : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
          realTime: props.Order.alpacaAccount.realTime !== undefined ? props.Order.alpacaAccount.realTime : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? props.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? props.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? props.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? props.Order.alpacaAccount.volumeThreshold : undefined,
      user: props.Order.alpacaAccount.user ? 
        typeof props.Order.alpacaAccount.user === 'object' && Object.keys(props.Order.alpacaAccount.user).length === 1 && Object.keys(props.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.Order.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.Order.alpacaAccount.user.id !== undefined ? props.Order.alpacaAccount.user.id : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? props.Order.alpacaAccount.user.email : undefined,
            name: props.Order.alpacaAccount.user.name !== undefined ? {
                equals: props.Order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.Order.alpacaAccount.user.name !== undefined ? props.Order.alpacaAccount.user.name : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? props.Order.alpacaAccount.user.email : undefined,
            emailVerified: props.Order.alpacaAccount.user.emailVerified !== undefined ? props.Order.alpacaAccount.user.emailVerified : undefined,
            image: props.Order.alpacaAccount.user.image !== undefined ? props.Order.alpacaAccount.user.image : undefined,
            role: props.Order.alpacaAccount.user.role !== undefined ? props.Order.alpacaAccount.user.role : undefined,
            bio: props.Order.alpacaAccount.user.bio !== undefined ? props.Order.alpacaAccount.user.bio : undefined,
            jobTitle: props.Order.alpacaAccount.user.jobTitle !== undefined ? props.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.Order.alpacaAccount.user.currentAccount !== undefined ? props.Order.alpacaAccount.user.currentAccount : undefined,
            plan: props.Order.alpacaAccount.user.plan !== undefined ? props.Order.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.Order.alpacaAccount.user.openaiAPIKey !== undefined ? props.Order.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.Order.alpacaAccount.user.openaiModel !== undefined ? props.Order.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      trades: props.Order.alpacaAccount.trades ? 
        Array.isArray(props.Order.alpacaAccount.trades) && props.Order.alpacaAccount.trades.length > 0 && props.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.alpacaAccount.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.alpacaAccount.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.Order.alpacaAccount.positions ? 
        Array.isArray(props.Order.alpacaAccount.positions) && props.Order.alpacaAccount.positions.length > 0 && props.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.alpacaAccount.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.alpacaAccount.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
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
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
      } : undefined,
      alerts: props.Order.alpacaAccount.alerts ? 
        Array.isArray(props.Order.alpacaAccount.alerts) && props.Order.alpacaAccount.alerts.length > 0 && props.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
    action: props.Order.action ? 
      typeof props.Order.action === 'object' && Object.keys(props.Order.action).length === 1 && Object.keys(props.Order.action)[0] === 'id'
    ? { connect: {
          id: props.Order.action.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.Order.action.id !== undefined ? props.Order.action.id : undefined,
          tradeId: props.Order.action.tradeId !== undefined ? {
              equals: props.Order.action.tradeId 
             } : undefined,
        },
        create: {
          sequence: props.Order.action.sequence !== undefined ? props.Order.action.sequence : undefined,
          type: props.Order.action.type !== undefined ? props.Order.action.type : undefined,
          note: props.Order.action.note !== undefined ? props.Order.action.note : undefined,
          status: props.Order.action.status !== undefined ? props.Order.action.status : undefined,
          fee: props.Order.action.fee !== undefined ? props.Order.action.fee : undefined,
          dependsOn: props.Order.action.dependsOn !== undefined ? {
            set: props.Order.action.dependsOn
          } : undefined,
          dependedOnBy: props.Order.action.dependedOnBy !== undefined ? {
            set: props.Order.action.dependedOnBy
          } : undefined,
      trade: props.Order.action.trade ? 
        typeof props.Order.action.trade === 'object' && Object.keys(props.Order.action.trade).length === 1 && Object.keys(props.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.Order.action.trade.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.Order.action.trade.id !== undefined ? props.Order.action.trade.id : undefined,
            alpacaAccountId: props.Order.action.trade.alpacaAccountId !== undefined ? {
                equals: props.Order.action.trade.alpacaAccountId 
               } : undefined,
          },
          create: {
            qty: props.Order.action.trade.qty !== undefined ? props.Order.action.trade.qty : undefined,
            price: props.Order.action.trade.price !== undefined ? props.Order.action.trade.price : undefined,
            total: props.Order.action.trade.total !== undefined ? props.Order.action.trade.total : undefined,
            optionType: props.Order.action.trade.optionType !== undefined ? props.Order.action.trade.optionType : undefined,
            signal: props.Order.action.trade.signal !== undefined ? props.Order.action.trade.signal : undefined,
            strategy: props.Order.action.trade.strategy !== undefined ? props.Order.action.trade.strategy : undefined,
            analysis: props.Order.action.trade.analysis !== undefined ? props.Order.action.trade.analysis : undefined,
            summary: props.Order.action.trade.summary !== undefined ? props.Order.action.trade.summary : undefined,
            confidence: props.Order.action.trade.confidence !== undefined ? props.Order.action.trade.confidence : undefined,
            timestamp: props.Order.action.trade.timestamp !== undefined ? props.Order.action.trade.timestamp : undefined,
            status: props.Order.action.trade.status !== undefined ? props.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: props.Order.asset ? 
      typeof props.Order.asset === 'object' && Object.keys(props.Order.asset).length === 1 && Object.keys(props.Order.asset)[0] === 'id'
    ? { connect: {
          id: props.Order.asset.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.Order.asset.id !== undefined ? props.Order.asset.id : undefined,
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
        },
        create: {
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
          type: props.Order.asset.type !== undefined ? props.Order.asset.type : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? props.Order.asset.logoUrl : undefined,
          description: props.Order.asset.description !== undefined ? props.Order.asset.description : undefined,
          cik: props.Order.asset.cik !== undefined ? props.Order.asset.cik : undefined,
          exchange: props.Order.asset.exchange !== undefined ? props.Order.asset.exchange : undefined,
          currency: props.Order.asset.currency !== undefined ? props.Order.asset.currency : undefined,
          country: props.Order.asset.country !== undefined ? props.Order.asset.country : undefined,
          sector: props.Order.asset.sector !== undefined ? props.Order.asset.sector : undefined,
          industry: props.Order.asset.industry !== undefined ? props.Order.asset.industry : undefined,
          address: props.Order.asset.address !== undefined ? props.Order.asset.address : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? props.Order.asset.officialSite : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? props.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? props.Order.asset.latestQuarter : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? props.Order.asset.marketCapitalization : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? props.Order.asset.ebitda : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? props.Order.asset.peRatio : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? props.Order.asset.pegRatio : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? props.Order.asset.bookValue : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? props.Order.asset.dividendPerShare : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? props.Order.asset.dividendYield : undefined,
          eps: props.Order.asset.eps !== undefined ? props.Order.asset.eps : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? props.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? props.Order.asset.profitMargin : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? props.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? props.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? props.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? props.Order.asset.revenueTTM : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? props.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? props.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? props.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? props.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? props.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? props.Order.asset.analystRatingHold : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? props.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? props.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? props.Order.asset.trailingPE : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? props.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? props.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? props.Order.asset.priceToBookRatio : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? props.Order.asset.evToRevenue : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? props.Order.asset.evToEbitda : undefined,
          beta: props.Order.asset.beta !== undefined ? props.Order.asset.beta : undefined,
          week52High: props.Order.asset.week52High !== undefined ? props.Order.asset.week52High : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? props.Order.asset.week52Low : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? props.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? props.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? props.Order.asset.sharesOutstanding : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? props.Order.asset.dividendDate : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? props.Order.asset.exDividendDate : undefined,
          askPrice: props.Order.asset.askPrice !== undefined ? props.Order.asset.askPrice : undefined,
          bidPrice: props.Order.asset.bidPrice !== undefined ? props.Order.asset.bidPrice : undefined,
      trades: props.Order.asset.trades ? 
        Array.isArray(props.Order.asset.trades) && props.Order.asset.trades.length > 0 && props.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.asset.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.asset.trades.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.Order.asset.positions ? 
        Array.isArray(props.Order.asset.positions) && props.Order.asset.positions.length > 0 && props.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.asset.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
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
            closed: item.closed !== undefined ? item.closed : undefined,
          },
        }))
      } : undefined,
      newsMentions: props.Order.asset.newsMentions ? 
        Array.isArray(props.Order.asset.newsMentions) && props.Order.asset.newsMentions.length > 0 && props.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.asset.newsMentions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.asset.newsMentions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      contracts: props.Order.asset.contracts ? 
        Array.isArray(props.Order.asset.contracts) && props.Order.asset.contracts.length > 0 && props.Order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.asset.contracts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.asset.contracts.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    contract: props.Order.contract ? 
      typeof props.Order.contract === 'object' && Object.keys(props.Order.contract).length === 1 && Object.keys(props.Order.contract)[0] === 'id'
    ? { connect: {
          id: props.Order.contract.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.Order.contract.id !== undefined ? props.Order.contract.id : undefined,
          alpacaId: props.Order.contract.alpacaId !== undefined ? props.Order.contract.alpacaId : undefined,
          symbol: props.Order.contract.symbol !== undefined ? props.Order.contract.symbol : undefined,
          name: props.Order.contract.name !== undefined ? {
              equals: props.Order.contract.name 
             } : undefined,
          underlyingAssetId: props.Order.contract.underlyingAssetId !== undefined ? {
              equals: props.Order.contract.underlyingAssetId 
             } : undefined,
        },
        create: {
          alpacaId: props.Order.contract.alpacaId !== undefined ? props.Order.contract.alpacaId : undefined,
          symbol: props.Order.contract.symbol !== undefined ? props.Order.contract.symbol : undefined,
          name: props.Order.contract.name !== undefined ? props.Order.contract.name : undefined,
          status: props.Order.contract.status !== undefined ? props.Order.contract.status : undefined,
          tradable: props.Order.contract.tradable !== undefined ? props.Order.contract.tradable : undefined,
          expirationDate: props.Order.contract.expirationDate !== undefined ? props.Order.contract.expirationDate : undefined,
          rootSymbol: props.Order.contract.rootSymbol !== undefined ? props.Order.contract.rootSymbol : undefined,
          underlyingSymbol: props.Order.contract.underlyingSymbol !== undefined ? props.Order.contract.underlyingSymbol : undefined,
          underlyingAssetId: props.Order.contract.underlyingAssetId !== undefined ? props.Order.contract.underlyingAssetId : undefined,
          type: props.Order.contract.type !== undefined ? props.Order.contract.type : undefined,
          style: props.Order.contract.style !== undefined ? props.Order.contract.style : undefined,
          strikePrice: props.Order.contract.strikePrice !== undefined ? props.Order.contract.strikePrice : undefined,
          multiplier: props.Order.contract.multiplier !== undefined ? props.Order.contract.multiplier : undefined,
          size: props.Order.contract.size !== undefined ? props.Order.contract.size : undefined,
          openInterest: props.Order.contract.openInterest !== undefined ? props.Order.contract.openInterest : undefined,
          openInterestDate: props.Order.contract.openInterestDate !== undefined ? props.Order.contract.openInterestDate : undefined,
          closePrice: props.Order.contract.closePrice !== undefined ? props.Order.contract.closePrice : undefined,
          closePriceDate: props.Order.contract.closePriceDate !== undefined ? props.Order.contract.closePriceDate : undefined,
          ppind: props.Order.contract.ppind !== undefined ? props.Order.contract.ppind : undefined,
          orderId: props.Order.contract.orderId !== undefined ? props.Order.contract.orderId : undefined,
      deliverables: props.Order.contract.deliverables ? 
        Array.isArray(props.Order.contract.deliverables) && props.Order.contract.deliverables.length > 0 && props.Order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.Order.contract.deliverables.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.Order.contract.deliverables.map((item: any) => ({
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
      asset: props.Order.contract.asset ? 
        typeof props.Order.contract.asset === 'object' && Object.keys(props.Order.contract.asset).length === 1 && Object.keys(props.Order.contract.asset)[0] === 'id'
    ? { connect: {
            id: props.Order.contract.asset.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.Order.contract.asset.id !== undefined ? props.Order.contract.asset.id : undefined,
            symbol: props.Order.contract.asset.symbol !== undefined ? props.Order.contract.asset.symbol : undefined,
            name: props.Order.contract.asset.name !== undefined ? props.Order.contract.asset.name : undefined,
          },
          create: {
            symbol: props.Order.contract.asset.symbol !== undefined ? props.Order.contract.asset.symbol : undefined,
            name: props.Order.contract.asset.name !== undefined ? props.Order.contract.asset.name : undefined,
            type: props.Order.contract.asset.type !== undefined ? props.Order.contract.asset.type : undefined,
            logoUrl: props.Order.contract.asset.logoUrl !== undefined ? props.Order.contract.asset.logoUrl : undefined,
            description: props.Order.contract.asset.description !== undefined ? props.Order.contract.asset.description : undefined,
            cik: props.Order.contract.asset.cik !== undefined ? props.Order.contract.asset.cik : undefined,
            exchange: props.Order.contract.asset.exchange !== undefined ? props.Order.contract.asset.exchange : undefined,
            currency: props.Order.contract.asset.currency !== undefined ? props.Order.contract.asset.currency : undefined,
            country: props.Order.contract.asset.country !== undefined ? props.Order.contract.asset.country : undefined,
            sector: props.Order.contract.asset.sector !== undefined ? props.Order.contract.asset.sector : undefined,
            industry: props.Order.contract.asset.industry !== undefined ? props.Order.contract.asset.industry : undefined,
            address: props.Order.contract.asset.address !== undefined ? props.Order.contract.asset.address : undefined,
            officialSite: props.Order.contract.asset.officialSite !== undefined ? props.Order.contract.asset.officialSite : undefined,
            fiscalYearEnd: props.Order.contract.asset.fiscalYearEnd !== undefined ? props.Order.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: props.Order.contract.asset.latestQuarter !== undefined ? props.Order.contract.asset.latestQuarter : undefined,
            marketCapitalization: props.Order.contract.asset.marketCapitalization !== undefined ? props.Order.contract.asset.marketCapitalization : undefined,
            ebitda: props.Order.contract.asset.ebitda !== undefined ? props.Order.contract.asset.ebitda : undefined,
            peRatio: props.Order.contract.asset.peRatio !== undefined ? props.Order.contract.asset.peRatio : undefined,
            pegRatio: props.Order.contract.asset.pegRatio !== undefined ? props.Order.contract.asset.pegRatio : undefined,
            bookValue: props.Order.contract.asset.bookValue !== undefined ? props.Order.contract.asset.bookValue : undefined,
            dividendPerShare: props.Order.contract.asset.dividendPerShare !== undefined ? props.Order.contract.asset.dividendPerShare : undefined,
            dividendYield: props.Order.contract.asset.dividendYield !== undefined ? props.Order.contract.asset.dividendYield : undefined,
            eps: props.Order.contract.asset.eps !== undefined ? props.Order.contract.asset.eps : undefined,
            revenuePerShareTTM: props.Order.contract.asset.revenuePerShareTTM !== undefined ? props.Order.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: props.Order.contract.asset.profitMargin !== undefined ? props.Order.contract.asset.profitMargin : undefined,
            operatingMarginTTM: props.Order.contract.asset.operatingMarginTTM !== undefined ? props.Order.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: props.Order.contract.asset.returnOnAssetsTTM !== undefined ? props.Order.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: props.Order.contract.asset.returnOnEquityTTM !== undefined ? props.Order.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: props.Order.contract.asset.revenueTTM !== undefined ? props.Order.contract.asset.revenueTTM : undefined,
            grossProfitTTM: props.Order.contract.asset.grossProfitTTM !== undefined ? props.Order.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: props.Order.contract.asset.dilutedEPSTTM !== undefined ? props.Order.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: props.Order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? props.Order.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: props.Order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? props.Order.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: props.Order.contract.asset.analystTargetPrice !== undefined ? props.Order.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: props.Order.contract.asset.analystRatingStrongBuy !== undefined ? props.Order.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: props.Order.contract.asset.analystRatingBuy !== undefined ? props.Order.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: props.Order.contract.asset.analystRatingHold !== undefined ? props.Order.contract.asset.analystRatingHold : undefined,
            analystRatingSell: props.Order.contract.asset.analystRatingSell !== undefined ? props.Order.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: props.Order.contract.asset.analystRatingStrongSell !== undefined ? props.Order.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: props.Order.contract.asset.trailingPE !== undefined ? props.Order.contract.asset.trailingPE : undefined,
            forwardPE: props.Order.contract.asset.forwardPE !== undefined ? props.Order.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: props.Order.contract.asset.priceToSalesRatioTTM !== undefined ? props.Order.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: props.Order.contract.asset.priceToBookRatio !== undefined ? props.Order.contract.asset.priceToBookRatio : undefined,
            evToRevenue: props.Order.contract.asset.evToRevenue !== undefined ? props.Order.contract.asset.evToRevenue : undefined,
            evToEbitda: props.Order.contract.asset.evToEbitda !== undefined ? props.Order.contract.asset.evToEbitda : undefined,
            beta: props.Order.contract.asset.beta !== undefined ? props.Order.contract.asset.beta : undefined,
            week52High: props.Order.contract.asset.week52High !== undefined ? props.Order.contract.asset.week52High : undefined,
            week52Low: props.Order.contract.asset.week52Low !== undefined ? props.Order.contract.asset.week52Low : undefined,
            day50MovingAverage: props.Order.contract.asset.day50MovingAverage !== undefined ? props.Order.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: props.Order.contract.asset.day200MovingAverage !== undefined ? props.Order.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: props.Order.contract.asset.sharesOutstanding !== undefined ? props.Order.contract.asset.sharesOutstanding : undefined,
            dividendDate: props.Order.contract.asset.dividendDate !== undefined ? props.Order.contract.asset.dividendDate : undefined,
            exDividendDate: props.Order.contract.asset.exDividendDate !== undefined ? props.Order.contract.asset.exDividendDate : undefined,
            askPrice: props.Order.contract.asset.askPrice !== undefined ? props.Order.contract.asset.askPrice : undefined,
            bidPrice: props.Order.contract.asset.bidPrice !== undefined ? props.Order.contract.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,
      },
      update: {
  stopPrice: props.stopPrice !== undefined ? {
    set: props.stopPrice
  } : undefined,
  limitPrice: props.limitPrice !== undefined ? {
    set: props.limitPrice
  } : undefined,
  Order: props.Order !== undefined ? {
    set: props.Order
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneStopLoss) {
        return response.data.upsertOneStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneStopLoss:', error);
      throw error;
    }
  },

  /**
   * Update multiple StopLoss records.
   * @param props - Array of StopLoss objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: StopLossType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_STOPLOSS = gql`
      mutation updateManyStopLoss($data: [StopLossCreateManyInput!]!) {
        updateManyStopLoss(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  orderId: prop.orderId !== undefined ? prop.orderId : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
    set: prop.id
  } : undefined,
  stopPrice: prop.stopPrice !== undefined ? {
    set: prop.stopPrice
  } : undefined,
  limitPrice: prop.limitPrice !== undefined ? {
    set: prop.limitPrice
  } : undefined,
  createdAt: prop.createdAt !== undefined ? {
    set: prop.createdAt
  } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
    set: prop.updatedAt
  } : undefined,
  Order: prop.Order !== undefined ? {
    set: prop.Order
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyStopLoss) {
        return response.data.updateManyStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyStopLoss:', error);
      throw error;
    }
  },

  /**
   * Delete a single StopLoss record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted StopLoss or null.
   */
  async delete(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_STOPLOSS = gql`
      mutation deleteOneStopLoss($where: StopLossWhereUniqueInput!) {
        deleteOneStopLoss(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneStopLoss) {
        return response.data.deleteOneStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneStopLoss:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single StopLoss record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved StopLoss or null.
   */
  async get(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType | null> {

    const client = globalClient || importedClient;

    const GET_STOPLOSS = gql`
      query getStopLoss($where: StopLossWhereUniqueInput!) {
        getStopLoss(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getStopLoss ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No StopLoss found') {
        return null;
      } else {
        console.error('Error in getStopLoss:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all StopLosses records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of StopLoss records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<StopLossType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_STOPLOSS = gql`
      query getAllStopLoss {
        stopLosses {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_STOPLOSS });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.stopLosses ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No StopLoss found') {
        return null;
      } else {
        console.error('Error in getStopLoss:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple StopLoss records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found StopLoss records or null.
   */
  async findMany(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_STOPLOSS = gql`
      query findManyStopLoss($where: StopLossWhereInput!) {
        stopLosses(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  orderId: props.orderId !== undefined ? {
    equals: props.orderId 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.StopLosses) {
        return response.data.stopLosses;
      } else {
       return [] as StopLossType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No StopLoss found') {
        return null;
      } else {
        console.error('Error in getStopLoss:', error);
        throw error;
      }
    }
  }
};
