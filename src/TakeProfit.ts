
  
import { TakeProfit as TakeProfitType } from './generated/typegraphql-prisma/models/TakeProfit';
import { ApolloError, gql } from '@apollo/client';
import { client } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the TakeProfit model.
   */

  const selectionSet = `
    
  id
  limitPrice
  stopPrice
  createdAt
  updatedAt
  orderId

  `;

  export const TakeProfit = {

    /**
     * Create a new TakeProfit record.
     * @param props - Properties for the new record.
     * @returns The created TakeProfit or null.
     */

    async create(props: TakeProfitType): Promise<TakeProfitType> {

    const CREATE_ONE_TAKEPROFIT = gql`
        mutation createOneTakeProfit($data: TakeProfitCreateInput!) {
          createOneTakeProfit(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            limitPrice: props.limitPrice !== undefined ? props.limitPrice : undefined,
  stopPrice: props.stopPrice !== undefined ? props.stopPrice : undefined,
  Order: props.Order ? 
    typeof props.Order === 'object' && Object.keys(props.Order).length === 1 && Object.keys(props.Order)[0] === 'id'
    ? { connect: {
        id: props.Order.id
        }
      }
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
    stopLoss: props.Order.stopLoss ? 
      typeof props.Order.stopLoss === 'object' && Object.keys(props.Order.stopLoss).length === 1 && Object.keys(props.Order.stopLoss)[0] === 'id'
    ? { connect: {
          id: props.Order.stopLoss.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.stopLoss.id !== undefined ? props.Order.stopLoss.id : undefined,
          orderId: props.Order.stopLoss.orderId !== undefined ? props.Order.stopLoss.orderId : undefined,
        },
        create: {
          stopPrice: props.Order.stopLoss.stopPrice !== undefined ? props.Order.stopLoss.stopPrice : undefined,
          limitPrice: props.Order.stopLoss.limitPrice !== undefined ? props.Order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? 
      typeof props.Order.alpacaAccount === 'object' && Object.keys(props.Order.alpacaAccount).length === 1 && Object.keys(props.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.Order.alpacaAccount.id
          }
        }
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
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? props.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? props.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? props.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? props.Order.alpacaAccount.volumeThreshold : undefined,
      user: props.Order.alpacaAccount.user ? 
        typeof props.Order.alpacaAccount.user === 'object' && Object.keys(props.Order.alpacaAccount.user).length === 1 && Object.keys(props.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.Order.alpacaAccount.user.id
            }
          }
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
        Array.isArray(props.Order.alpacaAccount.trades) && props.Order.alpacaAccount.trades.length > 0 &&  props.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.positions) && props.Order.alpacaAccount.positions.length > 0 &&  props.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.positions.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.alerts) && props.Order.alpacaAccount.alerts.length > 0 &&  props.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
          }
        }
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
      trade: props.Order.action.trade ? 
        typeof props.Order.action.trade === 'object' && Object.keys(props.Order.action.trade).length === 1 && Object.keys(props.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.Order.action.trade.id
            }
          }
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
          }
        }
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
        Array.isArray(props.Order.asset.trades) && props.Order.asset.trades.length > 0 &&  props.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.Order.asset.positions) && props.Order.asset.positions.length > 0 &&  props.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.positions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.newsMentions) && props.Order.asset.newsMentions.length > 0 &&  props.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.contracts) && props.Order.asset.contracts.length > 0 &&  props.Order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.contracts.map((item: any) => ({
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
          }
        }
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
        Array.isArray(props.Order.contract.deliverables) && props.Order.contract.deliverables.length > 0 &&  props.Order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
      const response = await client.mutate({ mutation: CREATE_ONE_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneTakeProfit) {
        return response.data.createOneTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Create multiple TakeProfit records.
   * @param props - Array of TakeProfit objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: TakeProfitType[]): Promise<{ count: number } | null> {

      const CREATE_MANY_TAKEPROFIT = gql`
      mutation createManyTakeProfit($data: [TakeProfitCreateManyInput!]!) {
        createManyTakeProfit(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  limitPrice: prop.limitPrice !== undefined ? prop.limitPrice : undefined,
  stopPrice: prop.stopPrice !== undefined ? prop.stopPrice : undefined,
  orderId: prop.orderId !== undefined ? prop.orderId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyTakeProfit) {
        return response.data.createManyTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Update a single TakeProfit record.
   * @param props - Properties to update.
   * @returns The updated TakeProfit or null.
   */
  async update(props: TakeProfitType): Promise<TakeProfitType> {

      const UPDATE_ONE_TAKEPROFIT = gql`
      mutation updateOneTakeProfit($data: TakeProfitUpdateInput!, $where: TakeProfitWhereUniqueInput!) {
        updateOneTakeProfit(data: $data, where: $where) {
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
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  Order: props.Order ? {
    upsert: {
      where: {
        id: props.Order.id !== undefined ? {
            equals: props.Order.id 
           } : undefined,
        clientOrderId: props.Order.clientOrderId !== undefined ? {
            equals: props.Order.clientOrderId 
           } : undefined,
        alpacaAccountId: props.Order.alpacaAccountId !== undefined ? {
            equals: props.Order.alpacaAccountId 
           } : undefined,
        assetId: props.Order.assetId !== undefined ? {
            equals: props.Order.assetId 
           } : undefined,
        actionId: props.Order.actionId !== undefined ? {
            equals: props.Order.actionId 
           } : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? {
            equals: props.Order.stopLossId 
           } : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? {
            equals: props.Order.takeProfitId 
           } : undefined,
        contractId: props.Order.contractId !== undefined ? {
            equals: props.Order.contractId 
           } : undefined,
      },
      update: {
        id: props.Order.id !== undefined ? {
            set: props.Order.id  
           } : undefined,
        clientOrderId: props.Order.clientOrderId !== undefined ? {
            set: props.Order.clientOrderId  
           } : undefined,
        qty: props.Order.qty !== undefined ? {
            set: props.Order.qty  
           } : undefined,
        notional: props.Order.notional !== undefined ? {
            set: props.Order.notional  
           } : undefined,
        side: props.Order.side !== undefined ? {
            set: props.Order.side  
           } : undefined,
        type: props.Order.type !== undefined ? {
            set: props.Order.type  
           } : undefined,
        orderClass: props.Order.orderClass !== undefined ? {
            set: props.Order.orderClass  
           } : undefined,
        timeInForce: props.Order.timeInForce !== undefined ? {
            set: props.Order.timeInForce  
           } : undefined,
        limitPrice: props.Order.limitPrice !== undefined ? {
            set: props.Order.limitPrice  
           } : undefined,
        stopPrice: props.Order.stopPrice !== undefined ? {
            set: props.Order.stopPrice  
           } : undefined,
        trailPrice: props.Order.trailPrice !== undefined ? {
            set: props.Order.trailPrice  
           } : undefined,
        trailPercent: props.Order.trailPercent !== undefined ? {
            set: props.Order.trailPercent  
           } : undefined,
        extendedHours: props.Order.extendedHours !== undefined ? {
            set: props.Order.extendedHours  
           } : undefined,
        status: props.Order.status !== undefined ? {
            set: props.Order.status  
           } : undefined,
        submittedAt: props.Order.submittedAt !== undefined ? {
            set: props.Order.submittedAt  
           } : undefined,
        filledAt: props.Order.filledAt !== undefined ? {
            set: props.Order.filledAt  
           } : undefined,
        filledQty: props.Order.filledQty !== undefined ? {
            set: props.Order.filledQty  
           } : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? {
            set: props.Order.filledAvgPrice  
           } : undefined,
        cancelRequestedAt: props.Order.cancelRequestedAt !== undefined ? {
            set: props.Order.cancelRequestedAt  
           } : undefined,
        canceledAt: props.Order.canceledAt !== undefined ? {
            set: props.Order.canceledAt  
           } : undefined,
        fee: props.Order.fee !== undefined ? {
            set: props.Order.fee  
           } : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? {
            set: props.Order.strikePrice  
           } : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? {
            set: props.Order.expirationDate  
           } : undefined,
        optionType: props.Order.optionType !== undefined ? {
            set: props.Order.optionType  
           } : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? {
            set: props.Order.stopLossId  
           } : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? {
            set: props.Order.takeProfitId  
           } : undefined,
    stopLoss: props.Order.stopLoss ? {
      upsert: {
        where: {
          id: props.Order.stopLoss.id !== undefined ? {
              equals: props.Order.stopLoss.id 
             } : undefined,
          orderId: props.Order.stopLoss.orderId !== undefined ? {
              equals: props.Order.stopLoss.orderId 
             } : undefined,
        },
        update: {
          id: props.Order.stopLoss.id !== undefined ? {
              set: props.Order.stopLoss.id  
             } : undefined,
          stopPrice: props.Order.stopLoss.stopPrice !== undefined ? {
              set: props.Order.stopLoss.stopPrice  
             } : undefined,
          limitPrice: props.Order.stopLoss.limitPrice !== undefined ? {
              set: props.Order.stopLoss.limitPrice  
             } : undefined,
        },
        create: {
          stopPrice: props.Order.stopLoss.stopPrice !== undefined ? props.Order.stopLoss.stopPrice : undefined,
          limitPrice: props.Order.stopLoss.limitPrice !== undefined ? props.Order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? {
      upsert: {
        where: {
          id: props.Order.alpacaAccount.id !== undefined ? {
              equals: props.Order.alpacaAccount.id 
             } : undefined,
          userId: props.Order.alpacaAccount.userId !== undefined ? {
              equals: props.Order.alpacaAccount.userId 
             } : undefined,
        },
        update: {
          id: props.Order.alpacaAccount.id !== undefined ? {
              set: props.Order.alpacaAccount.id  
             } : undefined,
          type: props.Order.alpacaAccount.type !== undefined ? {
              set: props.Order.alpacaAccount.type  
             } : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? {
              set: props.Order.alpacaAccount.APIKey  
             } : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? {
              set: props.Order.alpacaAccount.APISecret  
             } : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? {
              set: props.Order.alpacaAccount.configuration  
             } : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? {
              set: props.Order.alpacaAccount.marketOpen  
             } : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? {
              set: props.Order.alpacaAccount.minOrderSize  
             } : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? {
              set: props.Order.alpacaAccount.maxOrderSize  
             } : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? {
              set: props.Order.alpacaAccount.minPercentageChange  
             } : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? {
              set: props.Order.alpacaAccount.volumeThreshold  
             } : undefined,
      user: props.Order.alpacaAccount.user ? {
        upsert: {
          where: {
            id: props.Order.alpacaAccount.user.id !== undefined ? {
                equals: props.Order.alpacaAccount.user.id 
               } : undefined,
            name: props.Order.alpacaAccount.user.name !== undefined ? {
                equals: props.Order.alpacaAccount.user.name 
               } : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? {
                equals: props.Order.alpacaAccount.user.email 
               } : undefined,
            customerId: props.Order.alpacaAccount.user.customerId !== undefined ? {
                equals: props.Order.alpacaAccount.user.customerId 
               } : undefined,
          },
          update: {
            id: props.Order.alpacaAccount.user.id !== undefined ? {
                set: props.Order.alpacaAccount.user.id  
               } : undefined,
            name: props.Order.alpacaAccount.user.name !== undefined ? {
                set: props.Order.alpacaAccount.user.name  
               } : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? {
                set: props.Order.alpacaAccount.user.email  
               } : undefined,
            emailVerified: props.Order.alpacaAccount.user.emailVerified !== undefined ? {
                set: props.Order.alpacaAccount.user.emailVerified  
               } : undefined,
            image: props.Order.alpacaAccount.user.image !== undefined ? {
                set: props.Order.alpacaAccount.user.image  
               } : undefined,
            role: props.Order.alpacaAccount.user.role !== undefined ? {
                set: props.Order.alpacaAccount.user.role  
               } : undefined,
            bio: props.Order.alpacaAccount.user.bio !== undefined ? {
                set: props.Order.alpacaAccount.user.bio  
               } : undefined,
            jobTitle: props.Order.alpacaAccount.user.jobTitle !== undefined ? {
                set: props.Order.alpacaAccount.user.jobTitle  
               } : undefined,
            currentAccount: props.Order.alpacaAccount.user.currentAccount !== undefined ? {
                set: props.Order.alpacaAccount.user.currentAccount  
               } : undefined,
            plan: props.Order.alpacaAccount.user.plan !== undefined ? {
                set: props.Order.alpacaAccount.user.plan  
               } : undefined,
            openaiAPIKey: props.Order.alpacaAccount.user.openaiAPIKey !== undefined ? {
                set: props.Order.alpacaAccount.user.openaiAPIKey  
               } : undefined,
            openaiModel: props.Order.alpacaAccount.user.openaiModel !== undefined ? {
                set: props.Order.alpacaAccount.user.openaiModel  
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
      trades: props.Order.alpacaAccount.trades ? {
        upsert: props.Order.alpacaAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
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
      positions: props.Order.alpacaAccount.positions ? {
        upsert: props.Order.alpacaAccount.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
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
            closed: item.closed !== undefined ? {
                set: item.closed  
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
      alerts: props.Order.alpacaAccount.alerts ? {
        upsert: props.Order.alpacaAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            message: item.message !== undefined ? {
                set: item.message  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead  
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
        create: {
          type: props.Order.alpacaAccount.type !== undefined ? props.Order.alpacaAccount.type : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? props.Order.alpacaAccount.APIKey : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? props.Order.alpacaAccount.APISecret : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? props.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? props.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? props.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? props.Order.alpacaAccount.volumeThreshold : undefined,
      user: props.Order.alpacaAccount.user ? 
        typeof props.Order.alpacaAccount.user === 'object' && Object.keys(props.Order.alpacaAccount.user).length === 1 && Object.keys(props.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.Order.alpacaAccount.user.id
            }
          }
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
        Array.isArray(props.Order.alpacaAccount.trades) && props.Order.alpacaAccount.trades.length > 0 &&  props.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.positions) && props.Order.alpacaAccount.positions.length > 0 &&  props.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.positions.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.alerts) && props.Order.alpacaAccount.alerts.length > 0 &&  props.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
    action: props.Order.action ? {
      upsert: {
        where: {
          id: props.Order.action.id !== undefined ? {
              equals: props.Order.action.id 
             } : undefined,
          tradeId: props.Order.action.tradeId !== undefined ? {
              equals: props.Order.action.tradeId 
             } : undefined,
        },
        update: {
          id: props.Order.action.id !== undefined ? {
              set: props.Order.action.id  
             } : undefined,
          sequence: props.Order.action.sequence !== undefined ? {
              set: props.Order.action.sequence  
             } : undefined,
          type: props.Order.action.type !== undefined ? {
              set: props.Order.action.type  
             } : undefined,
          note: props.Order.action.note !== undefined ? {
              set: props.Order.action.note  
             } : undefined,
          status: props.Order.action.status !== undefined ? {
              set: props.Order.action.status  
             } : undefined,
          fee: props.Order.action.fee !== undefined ? {
              set: props.Order.action.fee  
             } : undefined,
      trade: props.Order.action.trade ? {
        upsert: {
          where: {
            id: props.Order.action.trade.id !== undefined ? {
                equals: props.Order.action.trade.id 
               } : undefined,
            alpacaAccountId: props.Order.action.trade.alpacaAccountId !== undefined ? {
                equals: props.Order.action.trade.alpacaAccountId 
               } : undefined,
            assetId: props.Order.action.trade.assetId !== undefined ? {
                equals: props.Order.action.trade.assetId 
               } : undefined,
          },
          update: {
            id: props.Order.action.trade.id !== undefined ? {
                set: props.Order.action.trade.id  
               } : undefined,
            qty: props.Order.action.trade.qty !== undefined ? {
                set: props.Order.action.trade.qty  
               } : undefined,
            price: props.Order.action.trade.price !== undefined ? {
                set: props.Order.action.trade.price  
               } : undefined,
            total: props.Order.action.trade.total !== undefined ? {
                set: props.Order.action.trade.total  
               } : undefined,
            optionType: props.Order.action.trade.optionType !== undefined ? {
                set: props.Order.action.trade.optionType  
               } : undefined,
            signal: props.Order.action.trade.signal !== undefined ? {
                set: props.Order.action.trade.signal  
               } : undefined,
            strategy: props.Order.action.trade.strategy !== undefined ? {
                set: props.Order.action.trade.strategy  
               } : undefined,
            analysis: props.Order.action.trade.analysis !== undefined ? {
                set: props.Order.action.trade.analysis  
               } : undefined,
            summary: props.Order.action.trade.summary !== undefined ? {
                set: props.Order.action.trade.summary  
               } : undefined,
            confidence: props.Order.action.trade.confidence !== undefined ? {
                set: props.Order.action.trade.confidence  
               } : undefined,
            timestamp: props.Order.action.trade.timestamp !== undefined ? {
                set: props.Order.action.trade.timestamp  
               } : undefined,
            status: props.Order.action.trade.status !== undefined ? {
                set: props.Order.action.trade.status  
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
        create: {
          sequence: props.Order.action.sequence !== undefined ? props.Order.action.sequence : undefined,
          type: props.Order.action.type !== undefined ? props.Order.action.type : undefined,
          note: props.Order.action.note !== undefined ? props.Order.action.note : undefined,
          status: props.Order.action.status !== undefined ? props.Order.action.status : undefined,
          fee: props.Order.action.fee !== undefined ? props.Order.action.fee : undefined,
      trade: props.Order.action.trade ? 
        typeof props.Order.action.trade === 'object' && Object.keys(props.Order.action.trade).length === 1 && Object.keys(props.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.Order.action.trade.id
            }
          }
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
    asset: props.Order.asset ? {
      upsert: {
        where: {
          id: props.Order.asset.id !== undefined ? {
              equals: props.Order.asset.id 
             } : undefined,
          symbol: props.Order.asset.symbol !== undefined ? {
              equals: props.Order.asset.symbol 
             } : undefined,
          name: props.Order.asset.name !== undefined ? {
              equals: props.Order.asset.name 
             } : undefined,
        },
        update: {
          id: props.Order.asset.id !== undefined ? {
              set: props.Order.asset.id  
             } : undefined,
          symbol: props.Order.asset.symbol !== undefined ? {
              set: props.Order.asset.symbol  
             } : undefined,
          name: props.Order.asset.name !== undefined ? {
              set: props.Order.asset.name  
             } : undefined,
          type: props.Order.asset.type !== undefined ? {
              set: props.Order.asset.type  
             } : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? {
              set: props.Order.asset.logoUrl  
             } : undefined,
          description: props.Order.asset.description !== undefined ? {
              set: props.Order.asset.description  
             } : undefined,
          cik: props.Order.asset.cik !== undefined ? {
              set: props.Order.asset.cik  
             } : undefined,
          exchange: props.Order.asset.exchange !== undefined ? {
              set: props.Order.asset.exchange  
             } : undefined,
          currency: props.Order.asset.currency !== undefined ? {
              set: props.Order.asset.currency  
             } : undefined,
          country: props.Order.asset.country !== undefined ? {
              set: props.Order.asset.country  
             } : undefined,
          sector: props.Order.asset.sector !== undefined ? {
              set: props.Order.asset.sector  
             } : undefined,
          industry: props.Order.asset.industry !== undefined ? {
              set: props.Order.asset.industry  
             } : undefined,
          address: props.Order.asset.address !== undefined ? {
              set: props.Order.asset.address  
             } : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? {
              set: props.Order.asset.officialSite  
             } : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? {
              set: props.Order.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? {
              set: props.Order.asset.latestQuarter  
             } : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? {
              set: props.Order.asset.marketCapitalization  
             } : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? {
              set: props.Order.asset.ebitda  
             } : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? {
              set: props.Order.asset.peRatio  
             } : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? {
              set: props.Order.asset.pegRatio  
             } : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? {
              set: props.Order.asset.bookValue  
             } : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? {
              set: props.Order.asset.dividendPerShare  
             } : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? {
              set: props.Order.asset.dividendYield  
             } : undefined,
          eps: props.Order.asset.eps !== undefined ? {
              set: props.Order.asset.eps  
             } : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? {
              set: props.Order.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? {
              set: props.Order.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? {
              set: props.Order.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? {
              set: props.Order.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? {
              set: props.Order.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? {
              set: props.Order.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? {
              set: props.Order.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? {
              set: props.Order.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: props.Order.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: props.Order.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? {
              set: props.Order.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? {
              set: props.Order.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? {
              set: props.Order.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? {
              set: props.Order.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? {
              set: props.Order.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? {
              set: props.Order.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? {
              set: props.Order.asset.trailingPE  
             } : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? {
              set: props.Order.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? {
              set: props.Order.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? {
              set: props.Order.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? {
              set: props.Order.asset.evToRevenue  
             } : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? {
              set: props.Order.asset.evToEbitda  
             } : undefined,
          beta: props.Order.asset.beta !== undefined ? {
              set: props.Order.asset.beta  
             } : undefined,
          week52High: props.Order.asset.week52High !== undefined ? {
              set: props.Order.asset.week52High  
             } : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? {
              set: props.Order.asset.week52Low  
             } : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? {
              set: props.Order.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? {
              set: props.Order.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? {
              set: props.Order.asset.sharesOutstanding  
             } : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? {
              set: props.Order.asset.dividendDate  
             } : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? {
              set: props.Order.asset.exDividendDate  
             } : undefined,
          askPrice: props.Order.asset.askPrice !== undefined ? {
              set: props.Order.asset.askPrice  
             } : undefined,
          bidPrice: props.Order.asset.bidPrice !== undefined ? {
              set: props.Order.asset.bidPrice  
             } : undefined,
      trades: props.Order.asset.trades ? {
        upsert: props.Order.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
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
      positions: props.Order.asset.positions ? {
        upsert: props.Order.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
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
            closed: item.closed !== undefined ? {
                set: item.closed  
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
      newsMentions: props.Order.asset.newsMentions ? {
        upsert: props.Order.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            newsArticleId: item.newsArticleId !== undefined ? {
                equals: item.newsArticleId 
               } : undefined,
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
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
      contracts: props.Order.asset.contracts ? {
        upsert: props.Order.asset.contracts.map((item: any) => ({
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
        Array.isArray(props.Order.asset.trades) && props.Order.asset.trades.length > 0 &&  props.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.Order.asset.positions) && props.Order.asset.positions.length > 0 &&  props.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.positions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.newsMentions) && props.Order.asset.newsMentions.length > 0 &&  props.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.contracts) && props.Order.asset.contracts.length > 0 &&  props.Order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.contracts.map((item: any) => ({
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
    contract: props.Order.contract ? {
      upsert: {
        where: {
          id: props.Order.contract.id !== undefined ? {
              equals: props.Order.contract.id 
             } : undefined,
          alpacaId: props.Order.contract.alpacaId !== undefined ? {
              equals: props.Order.contract.alpacaId 
             } : undefined,
          symbol: props.Order.contract.symbol !== undefined ? {
              equals: props.Order.contract.symbol 
             } : undefined,
          name: props.Order.contract.name !== undefined ? {
              equals: props.Order.contract.name 
             } : undefined,
          underlyingAssetId: props.Order.contract.underlyingAssetId !== undefined ? {
              equals: props.Order.contract.underlyingAssetId 
             } : undefined,
          assetId: props.Order.contract.assetId !== undefined ? {
              equals: props.Order.contract.assetId 
             } : undefined,
          orderId: props.Order.contract.orderId !== undefined ? {
              equals: props.Order.contract.orderId 
             } : undefined,
        },
        update: {
          id: props.Order.contract.id !== undefined ? {
              set: props.Order.contract.id  
             } : undefined,
          alpacaId: props.Order.contract.alpacaId !== undefined ? {
              set: props.Order.contract.alpacaId  
             } : undefined,
          symbol: props.Order.contract.symbol !== undefined ? {
              set: props.Order.contract.symbol  
             } : undefined,
          name: props.Order.contract.name !== undefined ? {
              set: props.Order.contract.name  
             } : undefined,
          status: props.Order.contract.status !== undefined ? {
              set: props.Order.contract.status  
             } : undefined,
          tradable: props.Order.contract.tradable !== undefined ? {
              set: props.Order.contract.tradable  
             } : undefined,
          expirationDate: props.Order.contract.expirationDate !== undefined ? {
              set: props.Order.contract.expirationDate  
             } : undefined,
          rootSymbol: props.Order.contract.rootSymbol !== undefined ? {
              set: props.Order.contract.rootSymbol  
             } : undefined,
          underlyingSymbol: props.Order.contract.underlyingSymbol !== undefined ? {
              set: props.Order.contract.underlyingSymbol  
             } : undefined,
          underlyingAssetId: props.Order.contract.underlyingAssetId !== undefined ? {
              set: props.Order.contract.underlyingAssetId  
             } : undefined,
          type: props.Order.contract.type !== undefined ? {
              set: props.Order.contract.type  
             } : undefined,
          style: props.Order.contract.style !== undefined ? {
              set: props.Order.contract.style  
             } : undefined,
          strikePrice: props.Order.contract.strikePrice !== undefined ? {
              set: props.Order.contract.strikePrice  
             } : undefined,
          multiplier: props.Order.contract.multiplier !== undefined ? {
              set: props.Order.contract.multiplier  
             } : undefined,
          size: props.Order.contract.size !== undefined ? {
              set: props.Order.contract.size  
             } : undefined,
          openInterest: props.Order.contract.openInterest !== undefined ? {
              set: props.Order.contract.openInterest  
             } : undefined,
          openInterestDate: props.Order.contract.openInterestDate !== undefined ? {
              set: props.Order.contract.openInterestDate  
             } : undefined,
          closePrice: props.Order.contract.closePrice !== undefined ? {
              set: props.Order.contract.closePrice  
             } : undefined,
          closePriceDate: props.Order.contract.closePriceDate !== undefined ? {
              set: props.Order.contract.closePriceDate  
             } : undefined,
          ppind: props.Order.contract.ppind !== undefined ? {
              set: props.Order.contract.ppind  
             } : undefined,
          orderId: props.Order.contract.orderId !== undefined ? {
              set: props.Order.contract.orderId  
             } : undefined,
      deliverables: props.Order.contract.deliverables ? {
        upsert: props.Order.contract.deliverables.map((item: any) => ({
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
      asset: props.Order.contract.asset ? {
        upsert: {
          where: {
            id: props.Order.contract.asset.id !== undefined ? {
                equals: props.Order.contract.asset.id 
               } : undefined,
            symbol: props.Order.contract.asset.symbol !== undefined ? {
                equals: props.Order.contract.asset.symbol 
               } : undefined,
            name: props.Order.contract.asset.name !== undefined ? {
                equals: props.Order.contract.asset.name 
               } : undefined,
          },
          update: {
            id: props.Order.contract.asset.id !== undefined ? {
                set: props.Order.contract.asset.id  
               } : undefined,
            symbol: props.Order.contract.asset.symbol !== undefined ? {
                set: props.Order.contract.asset.symbol  
               } : undefined,
            name: props.Order.contract.asset.name !== undefined ? {
                set: props.Order.contract.asset.name  
               } : undefined,
            type: props.Order.contract.asset.type !== undefined ? {
                set: props.Order.contract.asset.type  
               } : undefined,
            logoUrl: props.Order.contract.asset.logoUrl !== undefined ? {
                set: props.Order.contract.asset.logoUrl  
               } : undefined,
            description: props.Order.contract.asset.description !== undefined ? {
                set: props.Order.contract.asset.description  
               } : undefined,
            cik: props.Order.contract.asset.cik !== undefined ? {
                set: props.Order.contract.asset.cik  
               } : undefined,
            exchange: props.Order.contract.asset.exchange !== undefined ? {
                set: props.Order.contract.asset.exchange  
               } : undefined,
            currency: props.Order.contract.asset.currency !== undefined ? {
                set: props.Order.contract.asset.currency  
               } : undefined,
            country: props.Order.contract.asset.country !== undefined ? {
                set: props.Order.contract.asset.country  
               } : undefined,
            sector: props.Order.contract.asset.sector !== undefined ? {
                set: props.Order.contract.asset.sector  
               } : undefined,
            industry: props.Order.contract.asset.industry !== undefined ? {
                set: props.Order.contract.asset.industry  
               } : undefined,
            address: props.Order.contract.asset.address !== undefined ? {
                set: props.Order.contract.asset.address  
               } : undefined,
            officialSite: props.Order.contract.asset.officialSite !== undefined ? {
                set: props.Order.contract.asset.officialSite  
               } : undefined,
            fiscalYearEnd: props.Order.contract.asset.fiscalYearEnd !== undefined ? {
                set: props.Order.contract.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: props.Order.contract.asset.latestQuarter !== undefined ? {
                set: props.Order.contract.asset.latestQuarter  
               } : undefined,
            marketCapitalization: props.Order.contract.asset.marketCapitalization !== undefined ? {
                set: props.Order.contract.asset.marketCapitalization  
               } : undefined,
            ebitda: props.Order.contract.asset.ebitda !== undefined ? {
                set: props.Order.contract.asset.ebitda  
               } : undefined,
            peRatio: props.Order.contract.asset.peRatio !== undefined ? {
                set: props.Order.contract.asset.peRatio  
               } : undefined,
            pegRatio: props.Order.contract.asset.pegRatio !== undefined ? {
                set: props.Order.contract.asset.pegRatio  
               } : undefined,
            bookValue: props.Order.contract.asset.bookValue !== undefined ? {
                set: props.Order.contract.asset.bookValue  
               } : undefined,
            dividendPerShare: props.Order.contract.asset.dividendPerShare !== undefined ? {
                set: props.Order.contract.asset.dividendPerShare  
               } : undefined,
            dividendYield: props.Order.contract.asset.dividendYield !== undefined ? {
                set: props.Order.contract.asset.dividendYield  
               } : undefined,
            eps: props.Order.contract.asset.eps !== undefined ? {
                set: props.Order.contract.asset.eps  
               } : undefined,
            revenuePerShareTTM: props.Order.contract.asset.revenuePerShareTTM !== undefined ? {
                set: props.Order.contract.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: props.Order.contract.asset.profitMargin !== undefined ? {
                set: props.Order.contract.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: props.Order.contract.asset.operatingMarginTTM !== undefined ? {
                set: props.Order.contract.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: props.Order.contract.asset.returnOnAssetsTTM !== undefined ? {
                set: props.Order.contract.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: props.Order.contract.asset.returnOnEquityTTM !== undefined ? {
                set: props.Order.contract.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: props.Order.contract.asset.revenueTTM !== undefined ? {
                set: props.Order.contract.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: props.Order.contract.asset.grossProfitTTM !== undefined ? {
                set: props.Order.contract.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: props.Order.contract.asset.dilutedEPSTTM !== undefined ? {
                set: props.Order.contract.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: props.Order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: props.Order.contract.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: props.Order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: props.Order.contract.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: props.Order.contract.asset.analystTargetPrice !== undefined ? {
                set: props.Order.contract.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: props.Order.contract.asset.analystRatingStrongBuy !== undefined ? {
                set: props.Order.contract.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: props.Order.contract.asset.analystRatingBuy !== undefined ? {
                set: props.Order.contract.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: props.Order.contract.asset.analystRatingHold !== undefined ? {
                set: props.Order.contract.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: props.Order.contract.asset.analystRatingSell !== undefined ? {
                set: props.Order.contract.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: props.Order.contract.asset.analystRatingStrongSell !== undefined ? {
                set: props.Order.contract.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: props.Order.contract.asset.trailingPE !== undefined ? {
                set: props.Order.contract.asset.trailingPE  
               } : undefined,
            forwardPE: props.Order.contract.asset.forwardPE !== undefined ? {
                set: props.Order.contract.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: props.Order.contract.asset.priceToSalesRatioTTM !== undefined ? {
                set: props.Order.contract.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: props.Order.contract.asset.priceToBookRatio !== undefined ? {
                set: props.Order.contract.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: props.Order.contract.asset.evToRevenue !== undefined ? {
                set: props.Order.contract.asset.evToRevenue  
               } : undefined,
            evToEbitda: props.Order.contract.asset.evToEbitda !== undefined ? {
                set: props.Order.contract.asset.evToEbitda  
               } : undefined,
            beta: props.Order.contract.asset.beta !== undefined ? {
                set: props.Order.contract.asset.beta  
               } : undefined,
            week52High: props.Order.contract.asset.week52High !== undefined ? {
                set: props.Order.contract.asset.week52High  
               } : undefined,
            week52Low: props.Order.contract.asset.week52Low !== undefined ? {
                set: props.Order.contract.asset.week52Low  
               } : undefined,
            day50MovingAverage: props.Order.contract.asset.day50MovingAverage !== undefined ? {
                set: props.Order.contract.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: props.Order.contract.asset.day200MovingAverage !== undefined ? {
                set: props.Order.contract.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: props.Order.contract.asset.sharesOutstanding !== undefined ? {
                set: props.Order.contract.asset.sharesOutstanding  
               } : undefined,
            dividendDate: props.Order.contract.asset.dividendDate !== undefined ? {
                set: props.Order.contract.asset.dividendDate  
               } : undefined,
            exDividendDate: props.Order.contract.asset.exDividendDate !== undefined ? {
                set: props.Order.contract.asset.exDividendDate  
               } : undefined,
            askPrice: props.Order.contract.asset.askPrice !== undefined ? {
                set: props.Order.contract.asset.askPrice  
               } : undefined,
            bidPrice: props.Order.contract.asset.bidPrice !== undefined ? {
                set: props.Order.contract.asset.bidPrice  
               } : undefined,
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
        Array.isArray(props.Order.contract.deliverables) && props.Order.contract.deliverables.length > 0 &&  props.Order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
    stopLoss: props.Order.stopLoss ? 
      typeof props.Order.stopLoss === 'object' && Object.keys(props.Order.stopLoss).length === 1 && Object.keys(props.Order.stopLoss)[0] === 'id'
    ? { connect: {
          id: props.Order.stopLoss.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.stopLoss.id !== undefined ? props.Order.stopLoss.id : undefined,
          orderId: props.Order.stopLoss.orderId !== undefined ? props.Order.stopLoss.orderId : undefined,
        },
        create: {
          stopPrice: props.Order.stopLoss.stopPrice !== undefined ? props.Order.stopLoss.stopPrice : undefined,
          limitPrice: props.Order.stopLoss.limitPrice !== undefined ? props.Order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? 
      typeof props.Order.alpacaAccount === 'object' && Object.keys(props.Order.alpacaAccount).length === 1 && Object.keys(props.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.Order.alpacaAccount.id
          }
        }
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
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? props.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? props.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? props.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? props.Order.alpacaAccount.volumeThreshold : undefined,
      user: props.Order.alpacaAccount.user ? 
        typeof props.Order.alpacaAccount.user === 'object' && Object.keys(props.Order.alpacaAccount.user).length === 1 && Object.keys(props.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.Order.alpacaAccount.user.id
            }
          }
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
        Array.isArray(props.Order.alpacaAccount.trades) && props.Order.alpacaAccount.trades.length > 0 &&  props.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.positions) && props.Order.alpacaAccount.positions.length > 0 &&  props.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.positions.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.alerts) && props.Order.alpacaAccount.alerts.length > 0 &&  props.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
          }
        }
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
      trade: props.Order.action.trade ? 
        typeof props.Order.action.trade === 'object' && Object.keys(props.Order.action.trade).length === 1 && Object.keys(props.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.Order.action.trade.id
            }
          }
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
          }
        }
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
        Array.isArray(props.Order.asset.trades) && props.Order.asset.trades.length > 0 &&  props.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.Order.asset.positions) && props.Order.asset.positions.length > 0 &&  props.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.positions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.newsMentions) && props.Order.asset.newsMentions.length > 0 &&  props.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.contracts) && props.Order.asset.contracts.length > 0 &&  props.Order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.contracts.map((item: any) => ({
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
          }
        }
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
        Array.isArray(props.Order.contract.deliverables) && props.Order.contract.deliverables.length > 0 &&  props.Order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
      const response = await client.mutate({ mutation: UPDATE_ONE_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneTakeProfit) {
        return response.data.updateOneTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Upsert a single TakeProfit record.
   * @param props - Properties to update.
   * @returns The updated TakeProfit or null.
   */
  async upsert(props: TakeProfitType): Promise<TakeProfitType> {

      const UPSERT_ONE_TAKEPROFIT = gql`
      mutation upsertOneTakeProfit($where: TakeProfitWhereUniqueInput!, $create: TakeProfitCreateInput!, $update: TakeProfitUpdateInput!) {
        upsertOneTakeProfit(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
      },
      create: {
    limitPrice: props.limitPrice !== undefined ? props.limitPrice : undefined,
  stopPrice: props.stopPrice !== undefined ? props.stopPrice : undefined,
  Order: props.Order ? 
    typeof props.Order === 'object' && Object.keys(props.Order).length === 1 && Object.keys(props.Order)[0] === 'id'
    ? { connect: {
        id: props.Order.id
        }
      }
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
    stopLoss: props.Order.stopLoss ? 
      typeof props.Order.stopLoss === 'object' && Object.keys(props.Order.stopLoss).length === 1 && Object.keys(props.Order.stopLoss)[0] === 'id'
    ? { connect: {
          id: props.Order.stopLoss.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.stopLoss.id !== undefined ? props.Order.stopLoss.id : undefined,
          orderId: props.Order.stopLoss.orderId !== undefined ? props.Order.stopLoss.orderId : undefined,
        },
        create: {
          stopPrice: props.Order.stopLoss.stopPrice !== undefined ? props.Order.stopLoss.stopPrice : undefined,
          limitPrice: props.Order.stopLoss.limitPrice !== undefined ? props.Order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? 
      typeof props.Order.alpacaAccount === 'object' && Object.keys(props.Order.alpacaAccount).length === 1 && Object.keys(props.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.Order.alpacaAccount.id
          }
        }
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
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? props.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? props.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? props.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? props.Order.alpacaAccount.volumeThreshold : undefined,
      user: props.Order.alpacaAccount.user ? 
        typeof props.Order.alpacaAccount.user === 'object' && Object.keys(props.Order.alpacaAccount.user).length === 1 && Object.keys(props.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.Order.alpacaAccount.user.id
            }
          }
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
        Array.isArray(props.Order.alpacaAccount.trades) && props.Order.alpacaAccount.trades.length > 0 &&  props.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.positions) && props.Order.alpacaAccount.positions.length > 0 &&  props.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.positions.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.alerts) && props.Order.alpacaAccount.alerts.length > 0 &&  props.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
          }
        }
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
      trade: props.Order.action.trade ? 
        typeof props.Order.action.trade === 'object' && Object.keys(props.Order.action.trade).length === 1 && Object.keys(props.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.Order.action.trade.id
            }
          }
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
          }
        }
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
        Array.isArray(props.Order.asset.trades) && props.Order.asset.trades.length > 0 &&  props.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.Order.asset.positions) && props.Order.asset.positions.length > 0 &&  props.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.positions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.newsMentions) && props.Order.asset.newsMentions.length > 0 &&  props.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.contracts) && props.Order.asset.contracts.length > 0 &&  props.Order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.contracts.map((item: any) => ({
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
          }
        }
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
        Array.isArray(props.Order.contract.deliverables) && props.Order.contract.deliverables.length > 0 &&  props.Order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
           } : undefined,
  Order: props.Order ? {
    upsert: {
      where: {
        id: props.Order.id !== undefined ? {
            equals: props.Order.id 
           } : undefined,
        clientOrderId: props.Order.clientOrderId !== undefined ? {
            equals: props.Order.clientOrderId 
           } : undefined,
        alpacaAccountId: props.Order.alpacaAccountId !== undefined ? {
            equals: props.Order.alpacaAccountId 
           } : undefined,
        assetId: props.Order.assetId !== undefined ? {
            equals: props.Order.assetId 
           } : undefined,
        actionId: props.Order.actionId !== undefined ? {
            equals: props.Order.actionId 
           } : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? {
            equals: props.Order.stopLossId 
           } : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? {
            equals: props.Order.takeProfitId 
           } : undefined,
        contractId: props.Order.contractId !== undefined ? {
            equals: props.Order.contractId 
           } : undefined,
      },
      update: {
        id: props.Order.id !== undefined ? {
            set: props.Order.id  
           } : undefined,
        clientOrderId: props.Order.clientOrderId !== undefined ? {
            set: props.Order.clientOrderId  
           } : undefined,
        qty: props.Order.qty !== undefined ? {
            set: props.Order.qty  
           } : undefined,
        notional: props.Order.notional !== undefined ? {
            set: props.Order.notional  
           } : undefined,
        side: props.Order.side !== undefined ? {
            set: props.Order.side  
           } : undefined,
        type: props.Order.type !== undefined ? {
            set: props.Order.type  
           } : undefined,
        orderClass: props.Order.orderClass !== undefined ? {
            set: props.Order.orderClass  
           } : undefined,
        timeInForce: props.Order.timeInForce !== undefined ? {
            set: props.Order.timeInForce  
           } : undefined,
        limitPrice: props.Order.limitPrice !== undefined ? {
            set: props.Order.limitPrice  
           } : undefined,
        stopPrice: props.Order.stopPrice !== undefined ? {
            set: props.Order.stopPrice  
           } : undefined,
        trailPrice: props.Order.trailPrice !== undefined ? {
            set: props.Order.trailPrice  
           } : undefined,
        trailPercent: props.Order.trailPercent !== undefined ? {
            set: props.Order.trailPercent  
           } : undefined,
        extendedHours: props.Order.extendedHours !== undefined ? {
            set: props.Order.extendedHours  
           } : undefined,
        status: props.Order.status !== undefined ? {
            set: props.Order.status  
           } : undefined,
        submittedAt: props.Order.submittedAt !== undefined ? {
            set: props.Order.submittedAt  
           } : undefined,
        filledAt: props.Order.filledAt !== undefined ? {
            set: props.Order.filledAt  
           } : undefined,
        filledQty: props.Order.filledQty !== undefined ? {
            set: props.Order.filledQty  
           } : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? {
            set: props.Order.filledAvgPrice  
           } : undefined,
        cancelRequestedAt: props.Order.cancelRequestedAt !== undefined ? {
            set: props.Order.cancelRequestedAt  
           } : undefined,
        canceledAt: props.Order.canceledAt !== undefined ? {
            set: props.Order.canceledAt  
           } : undefined,
        fee: props.Order.fee !== undefined ? {
            set: props.Order.fee  
           } : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? {
            set: props.Order.strikePrice  
           } : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? {
            set: props.Order.expirationDate  
           } : undefined,
        optionType: props.Order.optionType !== undefined ? {
            set: props.Order.optionType  
           } : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? {
            set: props.Order.stopLossId  
           } : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? {
            set: props.Order.takeProfitId  
           } : undefined,
    stopLoss: props.Order.stopLoss ? {
      upsert: {
        where: {
          id: props.Order.stopLoss.id !== undefined ? {
              equals: props.Order.stopLoss.id 
             } : undefined,
          orderId: props.Order.stopLoss.orderId !== undefined ? {
              equals: props.Order.stopLoss.orderId 
             } : undefined,
        },
        update: {
          id: props.Order.stopLoss.id !== undefined ? {
              set: props.Order.stopLoss.id  
             } : undefined,
          stopPrice: props.Order.stopLoss.stopPrice !== undefined ? {
              set: props.Order.stopLoss.stopPrice  
             } : undefined,
          limitPrice: props.Order.stopLoss.limitPrice !== undefined ? {
              set: props.Order.stopLoss.limitPrice  
             } : undefined,
        },
        create: {
          stopPrice: props.Order.stopLoss.stopPrice !== undefined ? props.Order.stopLoss.stopPrice : undefined,
          limitPrice: props.Order.stopLoss.limitPrice !== undefined ? props.Order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? {
      upsert: {
        where: {
          id: props.Order.alpacaAccount.id !== undefined ? {
              equals: props.Order.alpacaAccount.id 
             } : undefined,
          userId: props.Order.alpacaAccount.userId !== undefined ? {
              equals: props.Order.alpacaAccount.userId 
             } : undefined,
        },
        update: {
          id: props.Order.alpacaAccount.id !== undefined ? {
              set: props.Order.alpacaAccount.id  
             } : undefined,
          type: props.Order.alpacaAccount.type !== undefined ? {
              set: props.Order.alpacaAccount.type  
             } : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? {
              set: props.Order.alpacaAccount.APIKey  
             } : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? {
              set: props.Order.alpacaAccount.APISecret  
             } : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? {
              set: props.Order.alpacaAccount.configuration  
             } : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? {
              set: props.Order.alpacaAccount.marketOpen  
             } : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? {
              set: props.Order.alpacaAccount.minOrderSize  
             } : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? {
              set: props.Order.alpacaAccount.maxOrderSize  
             } : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? {
              set: props.Order.alpacaAccount.minPercentageChange  
             } : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? {
              set: props.Order.alpacaAccount.volumeThreshold  
             } : undefined,
      user: props.Order.alpacaAccount.user ? {
        upsert: {
          where: {
            id: props.Order.alpacaAccount.user.id !== undefined ? {
                equals: props.Order.alpacaAccount.user.id 
               } : undefined,
            name: props.Order.alpacaAccount.user.name !== undefined ? {
                equals: props.Order.alpacaAccount.user.name 
               } : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? {
                equals: props.Order.alpacaAccount.user.email 
               } : undefined,
            customerId: props.Order.alpacaAccount.user.customerId !== undefined ? {
                equals: props.Order.alpacaAccount.user.customerId 
               } : undefined,
          },
          update: {
            id: props.Order.alpacaAccount.user.id !== undefined ? {
                set: props.Order.alpacaAccount.user.id  
               } : undefined,
            name: props.Order.alpacaAccount.user.name !== undefined ? {
                set: props.Order.alpacaAccount.user.name  
               } : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? {
                set: props.Order.alpacaAccount.user.email  
               } : undefined,
            emailVerified: props.Order.alpacaAccount.user.emailVerified !== undefined ? {
                set: props.Order.alpacaAccount.user.emailVerified  
               } : undefined,
            image: props.Order.alpacaAccount.user.image !== undefined ? {
                set: props.Order.alpacaAccount.user.image  
               } : undefined,
            role: props.Order.alpacaAccount.user.role !== undefined ? {
                set: props.Order.alpacaAccount.user.role  
               } : undefined,
            bio: props.Order.alpacaAccount.user.bio !== undefined ? {
                set: props.Order.alpacaAccount.user.bio  
               } : undefined,
            jobTitle: props.Order.alpacaAccount.user.jobTitle !== undefined ? {
                set: props.Order.alpacaAccount.user.jobTitle  
               } : undefined,
            currentAccount: props.Order.alpacaAccount.user.currentAccount !== undefined ? {
                set: props.Order.alpacaAccount.user.currentAccount  
               } : undefined,
            plan: props.Order.alpacaAccount.user.plan !== undefined ? {
                set: props.Order.alpacaAccount.user.plan  
               } : undefined,
            openaiAPIKey: props.Order.alpacaAccount.user.openaiAPIKey !== undefined ? {
                set: props.Order.alpacaAccount.user.openaiAPIKey  
               } : undefined,
            openaiModel: props.Order.alpacaAccount.user.openaiModel !== undefined ? {
                set: props.Order.alpacaAccount.user.openaiModel  
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
      trades: props.Order.alpacaAccount.trades ? {
        upsert: props.Order.alpacaAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
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
      positions: props.Order.alpacaAccount.positions ? {
        upsert: props.Order.alpacaAccount.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
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
            closed: item.closed !== undefined ? {
                set: item.closed  
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
      alerts: props.Order.alpacaAccount.alerts ? {
        upsert: props.Order.alpacaAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            message: item.message !== undefined ? {
                set: item.message  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead  
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
        create: {
          type: props.Order.alpacaAccount.type !== undefined ? props.Order.alpacaAccount.type : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? props.Order.alpacaAccount.APIKey : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? props.Order.alpacaAccount.APISecret : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? props.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? props.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? props.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? props.Order.alpacaAccount.volumeThreshold : undefined,
      user: props.Order.alpacaAccount.user ? 
        typeof props.Order.alpacaAccount.user === 'object' && Object.keys(props.Order.alpacaAccount.user).length === 1 && Object.keys(props.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.Order.alpacaAccount.user.id
            }
          }
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
        Array.isArray(props.Order.alpacaAccount.trades) && props.Order.alpacaAccount.trades.length > 0 &&  props.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.positions) && props.Order.alpacaAccount.positions.length > 0 &&  props.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.positions.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.alerts) && props.Order.alpacaAccount.alerts.length > 0 &&  props.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
    action: props.Order.action ? {
      upsert: {
        where: {
          id: props.Order.action.id !== undefined ? {
              equals: props.Order.action.id 
             } : undefined,
          tradeId: props.Order.action.tradeId !== undefined ? {
              equals: props.Order.action.tradeId 
             } : undefined,
        },
        update: {
          id: props.Order.action.id !== undefined ? {
              set: props.Order.action.id  
             } : undefined,
          sequence: props.Order.action.sequence !== undefined ? {
              set: props.Order.action.sequence  
             } : undefined,
          type: props.Order.action.type !== undefined ? {
              set: props.Order.action.type  
             } : undefined,
          note: props.Order.action.note !== undefined ? {
              set: props.Order.action.note  
             } : undefined,
          status: props.Order.action.status !== undefined ? {
              set: props.Order.action.status  
             } : undefined,
          fee: props.Order.action.fee !== undefined ? {
              set: props.Order.action.fee  
             } : undefined,
      trade: props.Order.action.trade ? {
        upsert: {
          where: {
            id: props.Order.action.trade.id !== undefined ? {
                equals: props.Order.action.trade.id 
               } : undefined,
            alpacaAccountId: props.Order.action.trade.alpacaAccountId !== undefined ? {
                equals: props.Order.action.trade.alpacaAccountId 
               } : undefined,
            assetId: props.Order.action.trade.assetId !== undefined ? {
                equals: props.Order.action.trade.assetId 
               } : undefined,
          },
          update: {
            id: props.Order.action.trade.id !== undefined ? {
                set: props.Order.action.trade.id  
               } : undefined,
            qty: props.Order.action.trade.qty !== undefined ? {
                set: props.Order.action.trade.qty  
               } : undefined,
            price: props.Order.action.trade.price !== undefined ? {
                set: props.Order.action.trade.price  
               } : undefined,
            total: props.Order.action.trade.total !== undefined ? {
                set: props.Order.action.trade.total  
               } : undefined,
            optionType: props.Order.action.trade.optionType !== undefined ? {
                set: props.Order.action.trade.optionType  
               } : undefined,
            signal: props.Order.action.trade.signal !== undefined ? {
                set: props.Order.action.trade.signal  
               } : undefined,
            strategy: props.Order.action.trade.strategy !== undefined ? {
                set: props.Order.action.trade.strategy  
               } : undefined,
            analysis: props.Order.action.trade.analysis !== undefined ? {
                set: props.Order.action.trade.analysis  
               } : undefined,
            summary: props.Order.action.trade.summary !== undefined ? {
                set: props.Order.action.trade.summary  
               } : undefined,
            confidence: props.Order.action.trade.confidence !== undefined ? {
                set: props.Order.action.trade.confidence  
               } : undefined,
            timestamp: props.Order.action.trade.timestamp !== undefined ? {
                set: props.Order.action.trade.timestamp  
               } : undefined,
            status: props.Order.action.trade.status !== undefined ? {
                set: props.Order.action.trade.status  
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
        create: {
          sequence: props.Order.action.sequence !== undefined ? props.Order.action.sequence : undefined,
          type: props.Order.action.type !== undefined ? props.Order.action.type : undefined,
          note: props.Order.action.note !== undefined ? props.Order.action.note : undefined,
          status: props.Order.action.status !== undefined ? props.Order.action.status : undefined,
          fee: props.Order.action.fee !== undefined ? props.Order.action.fee : undefined,
      trade: props.Order.action.trade ? 
        typeof props.Order.action.trade === 'object' && Object.keys(props.Order.action.trade).length === 1 && Object.keys(props.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.Order.action.trade.id
            }
          }
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
    asset: props.Order.asset ? {
      upsert: {
        where: {
          id: props.Order.asset.id !== undefined ? {
              equals: props.Order.asset.id 
             } : undefined,
          symbol: props.Order.asset.symbol !== undefined ? {
              equals: props.Order.asset.symbol 
             } : undefined,
          name: props.Order.asset.name !== undefined ? {
              equals: props.Order.asset.name 
             } : undefined,
        },
        update: {
          id: props.Order.asset.id !== undefined ? {
              set: props.Order.asset.id  
             } : undefined,
          symbol: props.Order.asset.symbol !== undefined ? {
              set: props.Order.asset.symbol  
             } : undefined,
          name: props.Order.asset.name !== undefined ? {
              set: props.Order.asset.name  
             } : undefined,
          type: props.Order.asset.type !== undefined ? {
              set: props.Order.asset.type  
             } : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? {
              set: props.Order.asset.logoUrl  
             } : undefined,
          description: props.Order.asset.description !== undefined ? {
              set: props.Order.asset.description  
             } : undefined,
          cik: props.Order.asset.cik !== undefined ? {
              set: props.Order.asset.cik  
             } : undefined,
          exchange: props.Order.asset.exchange !== undefined ? {
              set: props.Order.asset.exchange  
             } : undefined,
          currency: props.Order.asset.currency !== undefined ? {
              set: props.Order.asset.currency  
             } : undefined,
          country: props.Order.asset.country !== undefined ? {
              set: props.Order.asset.country  
             } : undefined,
          sector: props.Order.asset.sector !== undefined ? {
              set: props.Order.asset.sector  
             } : undefined,
          industry: props.Order.asset.industry !== undefined ? {
              set: props.Order.asset.industry  
             } : undefined,
          address: props.Order.asset.address !== undefined ? {
              set: props.Order.asset.address  
             } : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? {
              set: props.Order.asset.officialSite  
             } : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? {
              set: props.Order.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? {
              set: props.Order.asset.latestQuarter  
             } : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? {
              set: props.Order.asset.marketCapitalization  
             } : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? {
              set: props.Order.asset.ebitda  
             } : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? {
              set: props.Order.asset.peRatio  
             } : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? {
              set: props.Order.asset.pegRatio  
             } : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? {
              set: props.Order.asset.bookValue  
             } : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? {
              set: props.Order.asset.dividendPerShare  
             } : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? {
              set: props.Order.asset.dividendYield  
             } : undefined,
          eps: props.Order.asset.eps !== undefined ? {
              set: props.Order.asset.eps  
             } : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? {
              set: props.Order.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? {
              set: props.Order.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? {
              set: props.Order.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? {
              set: props.Order.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? {
              set: props.Order.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? {
              set: props.Order.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? {
              set: props.Order.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? {
              set: props.Order.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: props.Order.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: props.Order.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? {
              set: props.Order.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? {
              set: props.Order.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? {
              set: props.Order.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? {
              set: props.Order.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? {
              set: props.Order.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? {
              set: props.Order.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? {
              set: props.Order.asset.trailingPE  
             } : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? {
              set: props.Order.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? {
              set: props.Order.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? {
              set: props.Order.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? {
              set: props.Order.asset.evToRevenue  
             } : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? {
              set: props.Order.asset.evToEbitda  
             } : undefined,
          beta: props.Order.asset.beta !== undefined ? {
              set: props.Order.asset.beta  
             } : undefined,
          week52High: props.Order.asset.week52High !== undefined ? {
              set: props.Order.asset.week52High  
             } : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? {
              set: props.Order.asset.week52Low  
             } : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? {
              set: props.Order.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? {
              set: props.Order.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? {
              set: props.Order.asset.sharesOutstanding  
             } : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? {
              set: props.Order.asset.dividendDate  
             } : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? {
              set: props.Order.asset.exDividendDate  
             } : undefined,
          askPrice: props.Order.asset.askPrice !== undefined ? {
              set: props.Order.asset.askPrice  
             } : undefined,
          bidPrice: props.Order.asset.bidPrice !== undefined ? {
              set: props.Order.asset.bidPrice  
             } : undefined,
      trades: props.Order.asset.trades ? {
        upsert: props.Order.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
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
      positions: props.Order.asset.positions ? {
        upsert: props.Order.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
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
            closed: item.closed !== undefined ? {
                set: item.closed  
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
      newsMentions: props.Order.asset.newsMentions ? {
        upsert: props.Order.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            newsArticleId: item.newsArticleId !== undefined ? {
                equals: item.newsArticleId 
               } : undefined,
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
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
      contracts: props.Order.asset.contracts ? {
        upsert: props.Order.asset.contracts.map((item: any) => ({
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
        Array.isArray(props.Order.asset.trades) && props.Order.asset.trades.length > 0 &&  props.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.Order.asset.positions) && props.Order.asset.positions.length > 0 &&  props.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.positions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.newsMentions) && props.Order.asset.newsMentions.length > 0 &&  props.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.contracts) && props.Order.asset.contracts.length > 0 &&  props.Order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.contracts.map((item: any) => ({
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
    contract: props.Order.contract ? {
      upsert: {
        where: {
          id: props.Order.contract.id !== undefined ? {
              equals: props.Order.contract.id 
             } : undefined,
          alpacaId: props.Order.contract.alpacaId !== undefined ? {
              equals: props.Order.contract.alpacaId 
             } : undefined,
          symbol: props.Order.contract.symbol !== undefined ? {
              equals: props.Order.contract.symbol 
             } : undefined,
          name: props.Order.contract.name !== undefined ? {
              equals: props.Order.contract.name 
             } : undefined,
          underlyingAssetId: props.Order.contract.underlyingAssetId !== undefined ? {
              equals: props.Order.contract.underlyingAssetId 
             } : undefined,
          assetId: props.Order.contract.assetId !== undefined ? {
              equals: props.Order.contract.assetId 
             } : undefined,
          orderId: props.Order.contract.orderId !== undefined ? {
              equals: props.Order.contract.orderId 
             } : undefined,
        },
        update: {
          id: props.Order.contract.id !== undefined ? {
              set: props.Order.contract.id  
             } : undefined,
          alpacaId: props.Order.contract.alpacaId !== undefined ? {
              set: props.Order.contract.alpacaId  
             } : undefined,
          symbol: props.Order.contract.symbol !== undefined ? {
              set: props.Order.contract.symbol  
             } : undefined,
          name: props.Order.contract.name !== undefined ? {
              set: props.Order.contract.name  
             } : undefined,
          status: props.Order.contract.status !== undefined ? {
              set: props.Order.contract.status  
             } : undefined,
          tradable: props.Order.contract.tradable !== undefined ? {
              set: props.Order.contract.tradable  
             } : undefined,
          expirationDate: props.Order.contract.expirationDate !== undefined ? {
              set: props.Order.contract.expirationDate  
             } : undefined,
          rootSymbol: props.Order.contract.rootSymbol !== undefined ? {
              set: props.Order.contract.rootSymbol  
             } : undefined,
          underlyingSymbol: props.Order.contract.underlyingSymbol !== undefined ? {
              set: props.Order.contract.underlyingSymbol  
             } : undefined,
          underlyingAssetId: props.Order.contract.underlyingAssetId !== undefined ? {
              set: props.Order.contract.underlyingAssetId  
             } : undefined,
          type: props.Order.contract.type !== undefined ? {
              set: props.Order.contract.type  
             } : undefined,
          style: props.Order.contract.style !== undefined ? {
              set: props.Order.contract.style  
             } : undefined,
          strikePrice: props.Order.contract.strikePrice !== undefined ? {
              set: props.Order.contract.strikePrice  
             } : undefined,
          multiplier: props.Order.contract.multiplier !== undefined ? {
              set: props.Order.contract.multiplier  
             } : undefined,
          size: props.Order.contract.size !== undefined ? {
              set: props.Order.contract.size  
             } : undefined,
          openInterest: props.Order.contract.openInterest !== undefined ? {
              set: props.Order.contract.openInterest  
             } : undefined,
          openInterestDate: props.Order.contract.openInterestDate !== undefined ? {
              set: props.Order.contract.openInterestDate  
             } : undefined,
          closePrice: props.Order.contract.closePrice !== undefined ? {
              set: props.Order.contract.closePrice  
             } : undefined,
          closePriceDate: props.Order.contract.closePriceDate !== undefined ? {
              set: props.Order.contract.closePriceDate  
             } : undefined,
          ppind: props.Order.contract.ppind !== undefined ? {
              set: props.Order.contract.ppind  
             } : undefined,
          orderId: props.Order.contract.orderId !== undefined ? {
              set: props.Order.contract.orderId  
             } : undefined,
      deliverables: props.Order.contract.deliverables ? {
        upsert: props.Order.contract.deliverables.map((item: any) => ({
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
      asset: props.Order.contract.asset ? {
        upsert: {
          where: {
            id: props.Order.contract.asset.id !== undefined ? {
                equals: props.Order.contract.asset.id 
               } : undefined,
            symbol: props.Order.contract.asset.symbol !== undefined ? {
                equals: props.Order.contract.asset.symbol 
               } : undefined,
            name: props.Order.contract.asset.name !== undefined ? {
                equals: props.Order.contract.asset.name 
               } : undefined,
          },
          update: {
            id: props.Order.contract.asset.id !== undefined ? {
                set: props.Order.contract.asset.id  
               } : undefined,
            symbol: props.Order.contract.asset.symbol !== undefined ? {
                set: props.Order.contract.asset.symbol  
               } : undefined,
            name: props.Order.contract.asset.name !== undefined ? {
                set: props.Order.contract.asset.name  
               } : undefined,
            type: props.Order.contract.asset.type !== undefined ? {
                set: props.Order.contract.asset.type  
               } : undefined,
            logoUrl: props.Order.contract.asset.logoUrl !== undefined ? {
                set: props.Order.contract.asset.logoUrl  
               } : undefined,
            description: props.Order.contract.asset.description !== undefined ? {
                set: props.Order.contract.asset.description  
               } : undefined,
            cik: props.Order.contract.asset.cik !== undefined ? {
                set: props.Order.contract.asset.cik  
               } : undefined,
            exchange: props.Order.contract.asset.exchange !== undefined ? {
                set: props.Order.contract.asset.exchange  
               } : undefined,
            currency: props.Order.contract.asset.currency !== undefined ? {
                set: props.Order.contract.asset.currency  
               } : undefined,
            country: props.Order.contract.asset.country !== undefined ? {
                set: props.Order.contract.asset.country  
               } : undefined,
            sector: props.Order.contract.asset.sector !== undefined ? {
                set: props.Order.contract.asset.sector  
               } : undefined,
            industry: props.Order.contract.asset.industry !== undefined ? {
                set: props.Order.contract.asset.industry  
               } : undefined,
            address: props.Order.contract.asset.address !== undefined ? {
                set: props.Order.contract.asset.address  
               } : undefined,
            officialSite: props.Order.contract.asset.officialSite !== undefined ? {
                set: props.Order.contract.asset.officialSite  
               } : undefined,
            fiscalYearEnd: props.Order.contract.asset.fiscalYearEnd !== undefined ? {
                set: props.Order.contract.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: props.Order.contract.asset.latestQuarter !== undefined ? {
                set: props.Order.contract.asset.latestQuarter  
               } : undefined,
            marketCapitalization: props.Order.contract.asset.marketCapitalization !== undefined ? {
                set: props.Order.contract.asset.marketCapitalization  
               } : undefined,
            ebitda: props.Order.contract.asset.ebitda !== undefined ? {
                set: props.Order.contract.asset.ebitda  
               } : undefined,
            peRatio: props.Order.contract.asset.peRatio !== undefined ? {
                set: props.Order.contract.asset.peRatio  
               } : undefined,
            pegRatio: props.Order.contract.asset.pegRatio !== undefined ? {
                set: props.Order.contract.asset.pegRatio  
               } : undefined,
            bookValue: props.Order.contract.asset.bookValue !== undefined ? {
                set: props.Order.contract.asset.bookValue  
               } : undefined,
            dividendPerShare: props.Order.contract.asset.dividendPerShare !== undefined ? {
                set: props.Order.contract.asset.dividendPerShare  
               } : undefined,
            dividendYield: props.Order.contract.asset.dividendYield !== undefined ? {
                set: props.Order.contract.asset.dividendYield  
               } : undefined,
            eps: props.Order.contract.asset.eps !== undefined ? {
                set: props.Order.contract.asset.eps  
               } : undefined,
            revenuePerShareTTM: props.Order.contract.asset.revenuePerShareTTM !== undefined ? {
                set: props.Order.contract.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: props.Order.contract.asset.profitMargin !== undefined ? {
                set: props.Order.contract.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: props.Order.contract.asset.operatingMarginTTM !== undefined ? {
                set: props.Order.contract.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: props.Order.contract.asset.returnOnAssetsTTM !== undefined ? {
                set: props.Order.contract.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: props.Order.contract.asset.returnOnEquityTTM !== undefined ? {
                set: props.Order.contract.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: props.Order.contract.asset.revenueTTM !== undefined ? {
                set: props.Order.contract.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: props.Order.contract.asset.grossProfitTTM !== undefined ? {
                set: props.Order.contract.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: props.Order.contract.asset.dilutedEPSTTM !== undefined ? {
                set: props.Order.contract.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: props.Order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: props.Order.contract.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: props.Order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: props.Order.contract.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: props.Order.contract.asset.analystTargetPrice !== undefined ? {
                set: props.Order.contract.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: props.Order.contract.asset.analystRatingStrongBuy !== undefined ? {
                set: props.Order.contract.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: props.Order.contract.asset.analystRatingBuy !== undefined ? {
                set: props.Order.contract.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: props.Order.contract.asset.analystRatingHold !== undefined ? {
                set: props.Order.contract.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: props.Order.contract.asset.analystRatingSell !== undefined ? {
                set: props.Order.contract.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: props.Order.contract.asset.analystRatingStrongSell !== undefined ? {
                set: props.Order.contract.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: props.Order.contract.asset.trailingPE !== undefined ? {
                set: props.Order.contract.asset.trailingPE  
               } : undefined,
            forwardPE: props.Order.contract.asset.forwardPE !== undefined ? {
                set: props.Order.contract.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: props.Order.contract.asset.priceToSalesRatioTTM !== undefined ? {
                set: props.Order.contract.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: props.Order.contract.asset.priceToBookRatio !== undefined ? {
                set: props.Order.contract.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: props.Order.contract.asset.evToRevenue !== undefined ? {
                set: props.Order.contract.asset.evToRevenue  
               } : undefined,
            evToEbitda: props.Order.contract.asset.evToEbitda !== undefined ? {
                set: props.Order.contract.asset.evToEbitda  
               } : undefined,
            beta: props.Order.contract.asset.beta !== undefined ? {
                set: props.Order.contract.asset.beta  
               } : undefined,
            week52High: props.Order.contract.asset.week52High !== undefined ? {
                set: props.Order.contract.asset.week52High  
               } : undefined,
            week52Low: props.Order.contract.asset.week52Low !== undefined ? {
                set: props.Order.contract.asset.week52Low  
               } : undefined,
            day50MovingAverage: props.Order.contract.asset.day50MovingAverage !== undefined ? {
                set: props.Order.contract.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: props.Order.contract.asset.day200MovingAverage !== undefined ? {
                set: props.Order.contract.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: props.Order.contract.asset.sharesOutstanding !== undefined ? {
                set: props.Order.contract.asset.sharesOutstanding  
               } : undefined,
            dividendDate: props.Order.contract.asset.dividendDate !== undefined ? {
                set: props.Order.contract.asset.dividendDate  
               } : undefined,
            exDividendDate: props.Order.contract.asset.exDividendDate !== undefined ? {
                set: props.Order.contract.asset.exDividendDate  
               } : undefined,
            askPrice: props.Order.contract.asset.askPrice !== undefined ? {
                set: props.Order.contract.asset.askPrice  
               } : undefined,
            bidPrice: props.Order.contract.asset.bidPrice !== undefined ? {
                set: props.Order.contract.asset.bidPrice  
               } : undefined,
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
        Array.isArray(props.Order.contract.deliverables) && props.Order.contract.deliverables.length > 0 &&  props.Order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
    stopLoss: props.Order.stopLoss ? 
      typeof props.Order.stopLoss === 'object' && Object.keys(props.Order.stopLoss).length === 1 && Object.keys(props.Order.stopLoss)[0] === 'id'
    ? { connect: {
          id: props.Order.stopLoss.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.stopLoss.id !== undefined ? props.Order.stopLoss.id : undefined,
          orderId: props.Order.stopLoss.orderId !== undefined ? props.Order.stopLoss.orderId : undefined,
        },
        create: {
          stopPrice: props.Order.stopLoss.stopPrice !== undefined ? props.Order.stopLoss.stopPrice : undefined,
          limitPrice: props.Order.stopLoss.limitPrice !== undefined ? props.Order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? 
      typeof props.Order.alpacaAccount === 'object' && Object.keys(props.Order.alpacaAccount).length === 1 && Object.keys(props.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.Order.alpacaAccount.id
          }
        }
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
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? props.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? props.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? props.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? props.Order.alpacaAccount.volumeThreshold : undefined,
      user: props.Order.alpacaAccount.user ? 
        typeof props.Order.alpacaAccount.user === 'object' && Object.keys(props.Order.alpacaAccount.user).length === 1 && Object.keys(props.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.Order.alpacaAccount.user.id
            }
          }
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
        Array.isArray(props.Order.alpacaAccount.trades) && props.Order.alpacaAccount.trades.length > 0 &&  props.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.positions) && props.Order.alpacaAccount.positions.length > 0 &&  props.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.positions.map((item: any) => ({
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
        Array.isArray(props.Order.alpacaAccount.alerts) && props.Order.alpacaAccount.alerts.length > 0 &&  props.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
          }
        }
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
      trade: props.Order.action.trade ? 
        typeof props.Order.action.trade === 'object' && Object.keys(props.Order.action.trade).length === 1 && Object.keys(props.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.Order.action.trade.id
            }
          }
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
          }
        }
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
        Array.isArray(props.Order.asset.trades) && props.Order.asset.trades.length > 0 &&  props.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.Order.asset.positions) && props.Order.asset.positions.length > 0 &&  props.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.positions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.newsMentions) && props.Order.asset.newsMentions.length > 0 &&  props.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.Order.asset.contracts) && props.Order.asset.contracts.length > 0 &&  props.Order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.contracts.map((item: any) => ({
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
          }
        }
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
        Array.isArray(props.Order.contract.deliverables) && props.Order.contract.deliverables.length > 0 &&  props.Order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
      const response = await client.mutate({ mutation: UPSERT_ONE_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneTakeProfit) {
        return response.data.upsertOneTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Update multiple TakeProfit records.
   * @param props - Array of TakeProfit objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: TakeProfitType[]): Promise<{ count: number } | null> {

      const UPDATE_MANY_TAKEPROFIT = gql`
      mutation updateManyTakeProfit($data: [TakeProfitCreateManyInput!]!) {
        updateManyTakeProfit(data: $data) {
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
  limitPrice: prop.limitPrice !== undefined ? {
            set: prop.limitPrice 
           } : undefined,
  stopPrice: prop.stopPrice !== undefined ? {
            set: prop.stopPrice 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  Order: prop.Order ? {
    upsert: {
      where: {
        id: prop.Order.id !== undefined ? {
            equals: prop.Order.id 
           } : undefined,
        clientOrderId: prop.Order.clientOrderId !== undefined ? {
            equals: prop.Order.clientOrderId 
           } : undefined,
        alpacaAccountId: prop.Order.alpacaAccountId !== undefined ? {
            equals: prop.Order.alpacaAccountId 
           } : undefined,
        assetId: prop.Order.assetId !== undefined ? {
            equals: prop.Order.assetId 
           } : undefined,
        actionId: prop.Order.actionId !== undefined ? {
            equals: prop.Order.actionId 
           } : undefined,
        stopLossId: prop.Order.stopLossId !== undefined ? {
            equals: prop.Order.stopLossId 
           } : undefined,
        takeProfitId: prop.Order.takeProfitId !== undefined ? {
            equals: prop.Order.takeProfitId 
           } : undefined,
        contractId: prop.Order.contractId !== undefined ? {
            equals: prop.Order.contractId 
           } : undefined,
      },
      update: {
        id: prop.Order.id !== undefined ? {
            set: prop.Order.id  
           } : undefined,
        clientOrderId: prop.Order.clientOrderId !== undefined ? {
            set: prop.Order.clientOrderId  
           } : undefined,
        qty: prop.Order.qty !== undefined ? {
            set: prop.Order.qty  
           } : undefined,
        notional: prop.Order.notional !== undefined ? {
            set: prop.Order.notional  
           } : undefined,
        side: prop.Order.side !== undefined ? {
            set: prop.Order.side  
           } : undefined,
        type: prop.Order.type !== undefined ? {
            set: prop.Order.type  
           } : undefined,
        orderClass: prop.Order.orderClass !== undefined ? {
            set: prop.Order.orderClass  
           } : undefined,
        timeInForce: prop.Order.timeInForce !== undefined ? {
            set: prop.Order.timeInForce  
           } : undefined,
        limitPrice: prop.Order.limitPrice !== undefined ? {
            set: prop.Order.limitPrice  
           } : undefined,
        stopPrice: prop.Order.stopPrice !== undefined ? {
            set: prop.Order.stopPrice  
           } : undefined,
        trailPrice: prop.Order.trailPrice !== undefined ? {
            set: prop.Order.trailPrice  
           } : undefined,
        trailPercent: prop.Order.trailPercent !== undefined ? {
            set: prop.Order.trailPercent  
           } : undefined,
        extendedHours: prop.Order.extendedHours !== undefined ? {
            set: prop.Order.extendedHours  
           } : undefined,
        status: prop.Order.status !== undefined ? {
            set: prop.Order.status  
           } : undefined,
        submittedAt: prop.Order.submittedAt !== undefined ? {
            set: prop.Order.submittedAt  
           } : undefined,
        filledAt: prop.Order.filledAt !== undefined ? {
            set: prop.Order.filledAt  
           } : undefined,
        filledQty: prop.Order.filledQty !== undefined ? {
            set: prop.Order.filledQty  
           } : undefined,
        filledAvgPrice: prop.Order.filledAvgPrice !== undefined ? {
            set: prop.Order.filledAvgPrice  
           } : undefined,
        cancelRequestedAt: prop.Order.cancelRequestedAt !== undefined ? {
            set: prop.Order.cancelRequestedAt  
           } : undefined,
        canceledAt: prop.Order.canceledAt !== undefined ? {
            set: prop.Order.canceledAt  
           } : undefined,
        fee: prop.Order.fee !== undefined ? {
            set: prop.Order.fee  
           } : undefined,
        strikePrice: prop.Order.strikePrice !== undefined ? {
            set: prop.Order.strikePrice  
           } : undefined,
        expirationDate: prop.Order.expirationDate !== undefined ? {
            set: prop.Order.expirationDate  
           } : undefined,
        optionType: prop.Order.optionType !== undefined ? {
            set: prop.Order.optionType  
           } : undefined,
        stopLossId: prop.Order.stopLossId !== undefined ? {
            set: prop.Order.stopLossId  
           } : undefined,
        takeProfitId: prop.Order.takeProfitId !== undefined ? {
            set: prop.Order.takeProfitId  
           } : undefined,
    stopLoss: prop.Order.stopLoss ? {
      upsert: {
        where: {
          id: prop.Order.stopLoss.id !== undefined ? {
              equals: prop.Order.stopLoss.id 
             } : undefined,
          orderId: prop.Order.stopLoss.orderId !== undefined ? {
              equals: prop.Order.stopLoss.orderId 
             } : undefined,
        },
        update: {
          id: prop.Order.stopLoss.id !== undefined ? {
              set: prop.Order.stopLoss.id  
             } : undefined,
          stopPrice: prop.Order.stopLoss.stopPrice !== undefined ? {
              set: prop.Order.stopLoss.stopPrice  
             } : undefined,
          limitPrice: prop.Order.stopLoss.limitPrice !== undefined ? {
              set: prop.Order.stopLoss.limitPrice  
             } : undefined,
        },
        create: {
          stopPrice: prop.Order.stopLoss.stopPrice !== undefined ? prop.Order.stopLoss.stopPrice : undefined,
          limitPrice: prop.Order.stopLoss.limitPrice !== undefined ? prop.Order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: prop.Order.alpacaAccount ? {
      upsert: {
        where: {
          id: prop.Order.alpacaAccount.id !== undefined ? {
              equals: prop.Order.alpacaAccount.id 
             } : undefined,
          userId: prop.Order.alpacaAccount.userId !== undefined ? {
              equals: prop.Order.alpacaAccount.userId 
             } : undefined,
        },
        update: {
          id: prop.Order.alpacaAccount.id !== undefined ? {
              set: prop.Order.alpacaAccount.id  
             } : undefined,
          type: prop.Order.alpacaAccount.type !== undefined ? {
              set: prop.Order.alpacaAccount.type  
             } : undefined,
          APIKey: prop.Order.alpacaAccount.APIKey !== undefined ? {
              set: prop.Order.alpacaAccount.APIKey  
             } : undefined,
          APISecret: prop.Order.alpacaAccount.APISecret !== undefined ? {
              set: prop.Order.alpacaAccount.APISecret  
             } : undefined,
          configuration: prop.Order.alpacaAccount.configuration !== undefined ? {
              set: prop.Order.alpacaAccount.configuration  
             } : undefined,
          marketOpen: prop.Order.alpacaAccount.marketOpen !== undefined ? {
              set: prop.Order.alpacaAccount.marketOpen  
             } : undefined,
          minOrderSize: prop.Order.alpacaAccount.minOrderSize !== undefined ? {
              set: prop.Order.alpacaAccount.minOrderSize  
             } : undefined,
          maxOrderSize: prop.Order.alpacaAccount.maxOrderSize !== undefined ? {
              set: prop.Order.alpacaAccount.maxOrderSize  
             } : undefined,
          minPercentageChange: prop.Order.alpacaAccount.minPercentageChange !== undefined ? {
              set: prop.Order.alpacaAccount.minPercentageChange  
             } : undefined,
          volumeThreshold: prop.Order.alpacaAccount.volumeThreshold !== undefined ? {
              set: prop.Order.alpacaAccount.volumeThreshold  
             } : undefined,
      user: prop.Order.alpacaAccount.user ? {
        upsert: {
          where: {
            id: prop.Order.alpacaAccount.user.id !== undefined ? {
                equals: prop.Order.alpacaAccount.user.id 
               } : undefined,
            name: prop.Order.alpacaAccount.user.name !== undefined ? {
                equals: prop.Order.alpacaAccount.user.name 
               } : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? {
                equals: prop.Order.alpacaAccount.user.email 
               } : undefined,
            customerId: prop.Order.alpacaAccount.user.customerId !== undefined ? {
                equals: prop.Order.alpacaAccount.user.customerId 
               } : undefined,
          },
          update: {
            id: prop.Order.alpacaAccount.user.id !== undefined ? {
                set: prop.Order.alpacaAccount.user.id  
               } : undefined,
            name: prop.Order.alpacaAccount.user.name !== undefined ? {
                set: prop.Order.alpacaAccount.user.name  
               } : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? {
                set: prop.Order.alpacaAccount.user.email  
               } : undefined,
            emailVerified: prop.Order.alpacaAccount.user.emailVerified !== undefined ? {
                set: prop.Order.alpacaAccount.user.emailVerified  
               } : undefined,
            image: prop.Order.alpacaAccount.user.image !== undefined ? {
                set: prop.Order.alpacaAccount.user.image  
               } : undefined,
            role: prop.Order.alpacaAccount.user.role !== undefined ? {
                set: prop.Order.alpacaAccount.user.role  
               } : undefined,
            bio: prop.Order.alpacaAccount.user.bio !== undefined ? {
                set: prop.Order.alpacaAccount.user.bio  
               } : undefined,
            jobTitle: prop.Order.alpacaAccount.user.jobTitle !== undefined ? {
                set: prop.Order.alpacaAccount.user.jobTitle  
               } : undefined,
            currentAccount: prop.Order.alpacaAccount.user.currentAccount !== undefined ? {
                set: prop.Order.alpacaAccount.user.currentAccount  
               } : undefined,
            plan: prop.Order.alpacaAccount.user.plan !== undefined ? {
                set: prop.Order.alpacaAccount.user.plan  
               } : undefined,
            openaiAPIKey: prop.Order.alpacaAccount.user.openaiAPIKey !== undefined ? {
                set: prop.Order.alpacaAccount.user.openaiAPIKey  
               } : undefined,
            openaiModel: prop.Order.alpacaAccount.user.openaiModel !== undefined ? {
                set: prop.Order.alpacaAccount.user.openaiModel  
               } : undefined,
          },
          create: {
            name: prop.Order.alpacaAccount.user.name !== undefined ? prop.Order.alpacaAccount.user.name : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? prop.Order.alpacaAccount.user.email : undefined,
            emailVerified: prop.Order.alpacaAccount.user.emailVerified !== undefined ? prop.Order.alpacaAccount.user.emailVerified : undefined,
            image: prop.Order.alpacaAccount.user.image !== undefined ? prop.Order.alpacaAccount.user.image : undefined,
            role: prop.Order.alpacaAccount.user.role !== undefined ? prop.Order.alpacaAccount.user.role : undefined,
            bio: prop.Order.alpacaAccount.user.bio !== undefined ? prop.Order.alpacaAccount.user.bio : undefined,
            jobTitle: prop.Order.alpacaAccount.user.jobTitle !== undefined ? prop.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.Order.alpacaAccount.user.currentAccount !== undefined ? prop.Order.alpacaAccount.user.currentAccount : undefined,
            plan: prop.Order.alpacaAccount.user.plan !== undefined ? prop.Order.alpacaAccount.user.plan : undefined,
            openaiAPIKey: prop.Order.alpacaAccount.user.openaiAPIKey !== undefined ? prop.Order.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: prop.Order.alpacaAccount.user.openaiModel !== undefined ? prop.Order.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      trades: prop.Order.alpacaAccount.trades ? {
        upsert: prop.Order.alpacaAccount.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
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
      positions: prop.Order.alpacaAccount.positions ? {
        upsert: prop.Order.alpacaAccount.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
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
            closed: item.closed !== undefined ? {
                set: item.closed  
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
      alerts: prop.Order.alpacaAccount.alerts ? {
        upsert: prop.Order.alpacaAccount.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            message: item.message !== undefined ? {
                set: item.message  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead  
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
        create: {
          type: prop.Order.alpacaAccount.type !== undefined ? prop.Order.alpacaAccount.type : undefined,
          APIKey: prop.Order.alpacaAccount.APIKey !== undefined ? prop.Order.alpacaAccount.APIKey : undefined,
          APISecret: prop.Order.alpacaAccount.APISecret !== undefined ? prop.Order.alpacaAccount.APISecret : undefined,
          configuration: prop.Order.alpacaAccount.configuration !== undefined ? prop.Order.alpacaAccount.configuration : undefined,
          marketOpen: prop.Order.alpacaAccount.marketOpen !== undefined ? prop.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: prop.Order.alpacaAccount.minOrderSize !== undefined ? prop.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: prop.Order.alpacaAccount.maxOrderSize !== undefined ? prop.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: prop.Order.alpacaAccount.minPercentageChange !== undefined ? prop.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: prop.Order.alpacaAccount.volumeThreshold !== undefined ? prop.Order.alpacaAccount.volumeThreshold : undefined,
      user: prop.Order.alpacaAccount.user ? 
        typeof prop.Order.alpacaAccount.user === 'object' && Object.keys(prop.Order.alpacaAccount.user).length === 1 && Object.keys(prop.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: prop.Order.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.Order.alpacaAccount.user.id !== undefined ? prop.Order.alpacaAccount.user.id : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? prop.Order.alpacaAccount.user.email : undefined,
            name: prop.Order.alpacaAccount.user.name !== undefined ? {
                equals: prop.Order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: prop.Order.alpacaAccount.user.name !== undefined ? prop.Order.alpacaAccount.user.name : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? prop.Order.alpacaAccount.user.email : undefined,
            emailVerified: prop.Order.alpacaAccount.user.emailVerified !== undefined ? prop.Order.alpacaAccount.user.emailVerified : undefined,
            image: prop.Order.alpacaAccount.user.image !== undefined ? prop.Order.alpacaAccount.user.image : undefined,
            role: prop.Order.alpacaAccount.user.role !== undefined ? prop.Order.alpacaAccount.user.role : undefined,
            bio: prop.Order.alpacaAccount.user.bio !== undefined ? prop.Order.alpacaAccount.user.bio : undefined,
            jobTitle: prop.Order.alpacaAccount.user.jobTitle !== undefined ? prop.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.Order.alpacaAccount.user.currentAccount !== undefined ? prop.Order.alpacaAccount.user.currentAccount : undefined,
            plan: prop.Order.alpacaAccount.user.plan !== undefined ? prop.Order.alpacaAccount.user.plan : undefined,
            openaiAPIKey: prop.Order.alpacaAccount.user.openaiAPIKey !== undefined ? prop.Order.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: prop.Order.alpacaAccount.user.openaiModel !== undefined ? prop.Order.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      trades: prop.Order.alpacaAccount.trades ? 
        Array.isArray(prop.Order.alpacaAccount.trades) && prop.Order.alpacaAccount.trades.length > 0 &&  prop.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.trades.map((item: any) => ({
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
      positions: prop.Order.alpacaAccount.positions ? 
        Array.isArray(prop.Order.alpacaAccount.positions) && prop.Order.alpacaAccount.positions.length > 0 &&  prop.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: prop.Order.alpacaAccount.alerts ? 
        Array.isArray(prop.Order.alpacaAccount.alerts) && prop.Order.alpacaAccount.alerts.length > 0 &&  prop.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.alerts.map((item: any) => ({
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
    action: prop.Order.action ? {
      upsert: {
        where: {
          id: prop.Order.action.id !== undefined ? {
              equals: prop.Order.action.id 
             } : undefined,
          tradeId: prop.Order.action.tradeId !== undefined ? {
              equals: prop.Order.action.tradeId 
             } : undefined,
        },
        update: {
          id: prop.Order.action.id !== undefined ? {
              set: prop.Order.action.id  
             } : undefined,
          sequence: prop.Order.action.sequence !== undefined ? {
              set: prop.Order.action.sequence  
             } : undefined,
          type: prop.Order.action.type !== undefined ? {
              set: prop.Order.action.type  
             } : undefined,
          note: prop.Order.action.note !== undefined ? {
              set: prop.Order.action.note  
             } : undefined,
          status: prop.Order.action.status !== undefined ? {
              set: prop.Order.action.status  
             } : undefined,
          fee: prop.Order.action.fee !== undefined ? {
              set: prop.Order.action.fee  
             } : undefined,
      trade: prop.Order.action.trade ? {
        upsert: {
          where: {
            id: prop.Order.action.trade.id !== undefined ? {
                equals: prop.Order.action.trade.id 
               } : undefined,
            alpacaAccountId: prop.Order.action.trade.alpacaAccountId !== undefined ? {
                equals: prop.Order.action.trade.alpacaAccountId 
               } : undefined,
            assetId: prop.Order.action.trade.assetId !== undefined ? {
                equals: prop.Order.action.trade.assetId 
               } : undefined,
          },
          update: {
            id: prop.Order.action.trade.id !== undefined ? {
                set: prop.Order.action.trade.id  
               } : undefined,
            qty: prop.Order.action.trade.qty !== undefined ? {
                set: prop.Order.action.trade.qty  
               } : undefined,
            price: prop.Order.action.trade.price !== undefined ? {
                set: prop.Order.action.trade.price  
               } : undefined,
            total: prop.Order.action.trade.total !== undefined ? {
                set: prop.Order.action.trade.total  
               } : undefined,
            optionType: prop.Order.action.trade.optionType !== undefined ? {
                set: prop.Order.action.trade.optionType  
               } : undefined,
            signal: prop.Order.action.trade.signal !== undefined ? {
                set: prop.Order.action.trade.signal  
               } : undefined,
            strategy: prop.Order.action.trade.strategy !== undefined ? {
                set: prop.Order.action.trade.strategy  
               } : undefined,
            analysis: prop.Order.action.trade.analysis !== undefined ? {
                set: prop.Order.action.trade.analysis  
               } : undefined,
            summary: prop.Order.action.trade.summary !== undefined ? {
                set: prop.Order.action.trade.summary  
               } : undefined,
            confidence: prop.Order.action.trade.confidence !== undefined ? {
                set: prop.Order.action.trade.confidence  
               } : undefined,
            timestamp: prop.Order.action.trade.timestamp !== undefined ? {
                set: prop.Order.action.trade.timestamp  
               } : undefined,
            status: prop.Order.action.trade.status !== undefined ? {
                set: prop.Order.action.trade.status  
               } : undefined,
          },
          create: {
            qty: prop.Order.action.trade.qty !== undefined ? prop.Order.action.trade.qty : undefined,
            price: prop.Order.action.trade.price !== undefined ? prop.Order.action.trade.price : undefined,
            total: prop.Order.action.trade.total !== undefined ? prop.Order.action.trade.total : undefined,
            optionType: prop.Order.action.trade.optionType !== undefined ? prop.Order.action.trade.optionType : undefined,
            signal: prop.Order.action.trade.signal !== undefined ? prop.Order.action.trade.signal : undefined,
            strategy: prop.Order.action.trade.strategy !== undefined ? prop.Order.action.trade.strategy : undefined,
            analysis: prop.Order.action.trade.analysis !== undefined ? prop.Order.action.trade.analysis : undefined,
            summary: prop.Order.action.trade.summary !== undefined ? prop.Order.action.trade.summary : undefined,
            confidence: prop.Order.action.trade.confidence !== undefined ? prop.Order.action.trade.confidence : undefined,
            timestamp: prop.Order.action.trade.timestamp !== undefined ? prop.Order.action.trade.timestamp : undefined,
            status: prop.Order.action.trade.status !== undefined ? prop.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
        create: {
          sequence: prop.Order.action.sequence !== undefined ? prop.Order.action.sequence : undefined,
          type: prop.Order.action.type !== undefined ? prop.Order.action.type : undefined,
          note: prop.Order.action.note !== undefined ? prop.Order.action.note : undefined,
          status: prop.Order.action.status !== undefined ? prop.Order.action.status : undefined,
          fee: prop.Order.action.fee !== undefined ? prop.Order.action.fee : undefined,
      trade: prop.Order.action.trade ? 
        typeof prop.Order.action.trade === 'object' && Object.keys(prop.Order.action.trade).length === 1 && Object.keys(prop.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: prop.Order.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.Order.action.trade.id !== undefined ? prop.Order.action.trade.id : undefined,
            alpacaAccountId: prop.Order.action.trade.alpacaAccountId !== undefined ? {
                equals: prop.Order.action.trade.alpacaAccountId 
               } : undefined,
          },
          create: {
            qty: prop.Order.action.trade.qty !== undefined ? prop.Order.action.trade.qty : undefined,
            price: prop.Order.action.trade.price !== undefined ? prop.Order.action.trade.price : undefined,
            total: prop.Order.action.trade.total !== undefined ? prop.Order.action.trade.total : undefined,
            optionType: prop.Order.action.trade.optionType !== undefined ? prop.Order.action.trade.optionType : undefined,
            signal: prop.Order.action.trade.signal !== undefined ? prop.Order.action.trade.signal : undefined,
            strategy: prop.Order.action.trade.strategy !== undefined ? prop.Order.action.trade.strategy : undefined,
            analysis: prop.Order.action.trade.analysis !== undefined ? prop.Order.action.trade.analysis : undefined,
            summary: prop.Order.action.trade.summary !== undefined ? prop.Order.action.trade.summary : undefined,
            confidence: prop.Order.action.trade.confidence !== undefined ? prop.Order.action.trade.confidence : undefined,
            timestamp: prop.Order.action.trade.timestamp !== undefined ? prop.Order.action.trade.timestamp : undefined,
            status: prop.Order.action.trade.status !== undefined ? prop.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: prop.Order.asset ? {
      upsert: {
        where: {
          id: prop.Order.asset.id !== undefined ? {
              equals: prop.Order.asset.id 
             } : undefined,
          symbol: prop.Order.asset.symbol !== undefined ? {
              equals: prop.Order.asset.symbol 
             } : undefined,
          name: prop.Order.asset.name !== undefined ? {
              equals: prop.Order.asset.name 
             } : undefined,
        },
        update: {
          id: prop.Order.asset.id !== undefined ? {
              set: prop.Order.asset.id  
             } : undefined,
          symbol: prop.Order.asset.symbol !== undefined ? {
              set: prop.Order.asset.symbol  
             } : undefined,
          name: prop.Order.asset.name !== undefined ? {
              set: prop.Order.asset.name  
             } : undefined,
          type: prop.Order.asset.type !== undefined ? {
              set: prop.Order.asset.type  
             } : undefined,
          logoUrl: prop.Order.asset.logoUrl !== undefined ? {
              set: prop.Order.asset.logoUrl  
             } : undefined,
          description: prop.Order.asset.description !== undefined ? {
              set: prop.Order.asset.description  
             } : undefined,
          cik: prop.Order.asset.cik !== undefined ? {
              set: prop.Order.asset.cik  
             } : undefined,
          exchange: prop.Order.asset.exchange !== undefined ? {
              set: prop.Order.asset.exchange  
             } : undefined,
          currency: prop.Order.asset.currency !== undefined ? {
              set: prop.Order.asset.currency  
             } : undefined,
          country: prop.Order.asset.country !== undefined ? {
              set: prop.Order.asset.country  
             } : undefined,
          sector: prop.Order.asset.sector !== undefined ? {
              set: prop.Order.asset.sector  
             } : undefined,
          industry: prop.Order.asset.industry !== undefined ? {
              set: prop.Order.asset.industry  
             } : undefined,
          address: prop.Order.asset.address !== undefined ? {
              set: prop.Order.asset.address  
             } : undefined,
          officialSite: prop.Order.asset.officialSite !== undefined ? {
              set: prop.Order.asset.officialSite  
             } : undefined,
          fiscalYearEnd: prop.Order.asset.fiscalYearEnd !== undefined ? {
              set: prop.Order.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: prop.Order.asset.latestQuarter !== undefined ? {
              set: prop.Order.asset.latestQuarter  
             } : undefined,
          marketCapitalization: prop.Order.asset.marketCapitalization !== undefined ? {
              set: prop.Order.asset.marketCapitalization  
             } : undefined,
          ebitda: prop.Order.asset.ebitda !== undefined ? {
              set: prop.Order.asset.ebitda  
             } : undefined,
          peRatio: prop.Order.asset.peRatio !== undefined ? {
              set: prop.Order.asset.peRatio  
             } : undefined,
          pegRatio: prop.Order.asset.pegRatio !== undefined ? {
              set: prop.Order.asset.pegRatio  
             } : undefined,
          bookValue: prop.Order.asset.bookValue !== undefined ? {
              set: prop.Order.asset.bookValue  
             } : undefined,
          dividendPerShare: prop.Order.asset.dividendPerShare !== undefined ? {
              set: prop.Order.asset.dividendPerShare  
             } : undefined,
          dividendYield: prop.Order.asset.dividendYield !== undefined ? {
              set: prop.Order.asset.dividendYield  
             } : undefined,
          eps: prop.Order.asset.eps !== undefined ? {
              set: prop.Order.asset.eps  
             } : undefined,
          revenuePerShareTTM: prop.Order.asset.revenuePerShareTTM !== undefined ? {
              set: prop.Order.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: prop.Order.asset.profitMargin !== undefined ? {
              set: prop.Order.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: prop.Order.asset.operatingMarginTTM !== undefined ? {
              set: prop.Order.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: prop.Order.asset.returnOnAssetsTTM !== undefined ? {
              set: prop.Order.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: prop.Order.asset.returnOnEquityTTM !== undefined ? {
              set: prop.Order.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: prop.Order.asset.revenueTTM !== undefined ? {
              set: prop.Order.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: prop.Order.asset.grossProfitTTM !== undefined ? {
              set: prop.Order.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: prop.Order.asset.dilutedEPSTTM !== undefined ? {
              set: prop.Order.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: prop.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: prop.Order.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: prop.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: prop.Order.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: prop.Order.asset.analystTargetPrice !== undefined ? {
              set: prop.Order.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: prop.Order.asset.analystRatingStrongBuy !== undefined ? {
              set: prop.Order.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: prop.Order.asset.analystRatingBuy !== undefined ? {
              set: prop.Order.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: prop.Order.asset.analystRatingHold !== undefined ? {
              set: prop.Order.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: prop.Order.asset.analystRatingSell !== undefined ? {
              set: prop.Order.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: prop.Order.asset.analystRatingStrongSell !== undefined ? {
              set: prop.Order.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: prop.Order.asset.trailingPE !== undefined ? {
              set: prop.Order.asset.trailingPE  
             } : undefined,
          forwardPE: prop.Order.asset.forwardPE !== undefined ? {
              set: prop.Order.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: prop.Order.asset.priceToSalesRatioTTM !== undefined ? {
              set: prop.Order.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: prop.Order.asset.priceToBookRatio !== undefined ? {
              set: prop.Order.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: prop.Order.asset.evToRevenue !== undefined ? {
              set: prop.Order.asset.evToRevenue  
             } : undefined,
          evToEbitda: prop.Order.asset.evToEbitda !== undefined ? {
              set: prop.Order.asset.evToEbitda  
             } : undefined,
          beta: prop.Order.asset.beta !== undefined ? {
              set: prop.Order.asset.beta  
             } : undefined,
          week52High: prop.Order.asset.week52High !== undefined ? {
              set: prop.Order.asset.week52High  
             } : undefined,
          week52Low: prop.Order.asset.week52Low !== undefined ? {
              set: prop.Order.asset.week52Low  
             } : undefined,
          day50MovingAverage: prop.Order.asset.day50MovingAverage !== undefined ? {
              set: prop.Order.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: prop.Order.asset.day200MovingAverage !== undefined ? {
              set: prop.Order.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: prop.Order.asset.sharesOutstanding !== undefined ? {
              set: prop.Order.asset.sharesOutstanding  
             } : undefined,
          dividendDate: prop.Order.asset.dividendDate !== undefined ? {
              set: prop.Order.asset.dividendDate  
             } : undefined,
          exDividendDate: prop.Order.asset.exDividendDate !== undefined ? {
              set: prop.Order.asset.exDividendDate  
             } : undefined,
          askPrice: prop.Order.asset.askPrice !== undefined ? {
              set: prop.Order.asset.askPrice  
             } : undefined,
          bidPrice: prop.Order.asset.bidPrice !== undefined ? {
              set: prop.Order.asset.bidPrice  
             } : undefined,
      trades: prop.Order.asset.trades ? {
        upsert: prop.Order.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
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
      positions: prop.Order.asset.positions ? {
        upsert: prop.Order.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
               } : undefined,
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
            closed: item.closed !== undefined ? {
                set: item.closed  
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
      newsMentions: prop.Order.asset.newsMentions ? {
        upsert: prop.Order.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
            assetId: item.assetId !== undefined ? {
                equals: item.assetId 
               } : undefined,
            newsArticleId: item.newsArticleId !== undefined ? {
                equals: item.newsArticleId 
               } : undefined,
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
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
      contracts: prop.Order.asset.contracts ? {
        upsert: prop.Order.asset.contracts.map((item: any) => ({
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
        create: {
          symbol: prop.Order.asset.symbol !== undefined ? prop.Order.asset.symbol : undefined,
          name: prop.Order.asset.name !== undefined ? prop.Order.asset.name : undefined,
          type: prop.Order.asset.type !== undefined ? prop.Order.asset.type : undefined,
          logoUrl: prop.Order.asset.logoUrl !== undefined ? prop.Order.asset.logoUrl : undefined,
          description: prop.Order.asset.description !== undefined ? prop.Order.asset.description : undefined,
          cik: prop.Order.asset.cik !== undefined ? prop.Order.asset.cik : undefined,
          exchange: prop.Order.asset.exchange !== undefined ? prop.Order.asset.exchange : undefined,
          currency: prop.Order.asset.currency !== undefined ? prop.Order.asset.currency : undefined,
          country: prop.Order.asset.country !== undefined ? prop.Order.asset.country : undefined,
          sector: prop.Order.asset.sector !== undefined ? prop.Order.asset.sector : undefined,
          industry: prop.Order.asset.industry !== undefined ? prop.Order.asset.industry : undefined,
          address: prop.Order.asset.address !== undefined ? prop.Order.asset.address : undefined,
          officialSite: prop.Order.asset.officialSite !== undefined ? prop.Order.asset.officialSite : undefined,
          fiscalYearEnd: prop.Order.asset.fiscalYearEnd !== undefined ? prop.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.Order.asset.latestQuarter !== undefined ? prop.Order.asset.latestQuarter : undefined,
          marketCapitalization: prop.Order.asset.marketCapitalization !== undefined ? prop.Order.asset.marketCapitalization : undefined,
          ebitda: prop.Order.asset.ebitda !== undefined ? prop.Order.asset.ebitda : undefined,
          peRatio: prop.Order.asset.peRatio !== undefined ? prop.Order.asset.peRatio : undefined,
          pegRatio: prop.Order.asset.pegRatio !== undefined ? prop.Order.asset.pegRatio : undefined,
          bookValue: prop.Order.asset.bookValue !== undefined ? prop.Order.asset.bookValue : undefined,
          dividendPerShare: prop.Order.asset.dividendPerShare !== undefined ? prop.Order.asset.dividendPerShare : undefined,
          dividendYield: prop.Order.asset.dividendYield !== undefined ? prop.Order.asset.dividendYield : undefined,
          eps: prop.Order.asset.eps !== undefined ? prop.Order.asset.eps : undefined,
          revenuePerShareTTM: prop.Order.asset.revenuePerShareTTM !== undefined ? prop.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.Order.asset.profitMargin !== undefined ? prop.Order.asset.profitMargin : undefined,
          operatingMarginTTM: prop.Order.asset.operatingMarginTTM !== undefined ? prop.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.Order.asset.returnOnAssetsTTM !== undefined ? prop.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.Order.asset.returnOnEquityTTM !== undefined ? prop.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.Order.asset.revenueTTM !== undefined ? prop.Order.asset.revenueTTM : undefined,
          grossProfitTTM: prop.Order.asset.grossProfitTTM !== undefined ? prop.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.Order.asset.dilutedEPSTTM !== undefined ? prop.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.Order.asset.analystTargetPrice !== undefined ? prop.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.Order.asset.analystRatingStrongBuy !== undefined ? prop.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.Order.asset.analystRatingBuy !== undefined ? prop.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.Order.asset.analystRatingHold !== undefined ? prop.Order.asset.analystRatingHold : undefined,
          analystRatingSell: prop.Order.asset.analystRatingSell !== undefined ? prop.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.Order.asset.analystRatingStrongSell !== undefined ? prop.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.Order.asset.trailingPE !== undefined ? prop.Order.asset.trailingPE : undefined,
          forwardPE: prop.Order.asset.forwardPE !== undefined ? prop.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.Order.asset.priceToSalesRatioTTM !== undefined ? prop.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.Order.asset.priceToBookRatio !== undefined ? prop.Order.asset.priceToBookRatio : undefined,
          evToRevenue: prop.Order.asset.evToRevenue !== undefined ? prop.Order.asset.evToRevenue : undefined,
          evToEbitda: prop.Order.asset.evToEbitda !== undefined ? prop.Order.asset.evToEbitda : undefined,
          beta: prop.Order.asset.beta !== undefined ? prop.Order.asset.beta : undefined,
          week52High: prop.Order.asset.week52High !== undefined ? prop.Order.asset.week52High : undefined,
          week52Low: prop.Order.asset.week52Low !== undefined ? prop.Order.asset.week52Low : undefined,
          day50MovingAverage: prop.Order.asset.day50MovingAverage !== undefined ? prop.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.Order.asset.day200MovingAverage !== undefined ? prop.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.Order.asset.sharesOutstanding !== undefined ? prop.Order.asset.sharesOutstanding : undefined,
          dividendDate: prop.Order.asset.dividendDate !== undefined ? prop.Order.asset.dividendDate : undefined,
          exDividendDate: prop.Order.asset.exDividendDate !== undefined ? prop.Order.asset.exDividendDate : undefined,
          askPrice: prop.Order.asset.askPrice !== undefined ? prop.Order.asset.askPrice : undefined,
          bidPrice: prop.Order.asset.bidPrice !== undefined ? prop.Order.asset.bidPrice : undefined,
      trades: prop.Order.asset.trades ? 
        Array.isArray(prop.Order.asset.trades) && prop.Order.asset.trades.length > 0 &&  prop.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.trades.map((item: any) => ({
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
      positions: prop.Order.asset.positions ? 
        Array.isArray(prop.Order.asset.positions) && prop.Order.asset.positions.length > 0 &&  prop.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.positions.map((item: any) => ({
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
      newsMentions: prop.Order.asset.newsMentions ? 
        Array.isArray(prop.Order.asset.newsMentions) && prop.Order.asset.newsMentions.length > 0 &&  prop.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.newsMentions.map((item: any) => ({
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
      contracts: prop.Order.asset.contracts ? 
        Array.isArray(prop.Order.asset.contracts) && prop.Order.asset.contracts.length > 0 &&  prop.Order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.contracts.map((item: any) => ({
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
    contract: prop.Order.contract ? {
      upsert: {
        where: {
          id: prop.Order.contract.id !== undefined ? {
              equals: prop.Order.contract.id 
             } : undefined,
          alpacaId: prop.Order.contract.alpacaId !== undefined ? {
              equals: prop.Order.contract.alpacaId 
             } : undefined,
          symbol: prop.Order.contract.symbol !== undefined ? {
              equals: prop.Order.contract.symbol 
             } : undefined,
          name: prop.Order.contract.name !== undefined ? {
              equals: prop.Order.contract.name 
             } : undefined,
          underlyingAssetId: prop.Order.contract.underlyingAssetId !== undefined ? {
              equals: prop.Order.contract.underlyingAssetId 
             } : undefined,
          assetId: prop.Order.contract.assetId !== undefined ? {
              equals: prop.Order.contract.assetId 
             } : undefined,
          orderId: prop.Order.contract.orderId !== undefined ? {
              equals: prop.Order.contract.orderId 
             } : undefined,
        },
        update: {
          id: prop.Order.contract.id !== undefined ? {
              set: prop.Order.contract.id  
             } : undefined,
          alpacaId: prop.Order.contract.alpacaId !== undefined ? {
              set: prop.Order.contract.alpacaId  
             } : undefined,
          symbol: prop.Order.contract.symbol !== undefined ? {
              set: prop.Order.contract.symbol  
             } : undefined,
          name: prop.Order.contract.name !== undefined ? {
              set: prop.Order.contract.name  
             } : undefined,
          status: prop.Order.contract.status !== undefined ? {
              set: prop.Order.contract.status  
             } : undefined,
          tradable: prop.Order.contract.tradable !== undefined ? {
              set: prop.Order.contract.tradable  
             } : undefined,
          expirationDate: prop.Order.contract.expirationDate !== undefined ? {
              set: prop.Order.contract.expirationDate  
             } : undefined,
          rootSymbol: prop.Order.contract.rootSymbol !== undefined ? {
              set: prop.Order.contract.rootSymbol  
             } : undefined,
          underlyingSymbol: prop.Order.contract.underlyingSymbol !== undefined ? {
              set: prop.Order.contract.underlyingSymbol  
             } : undefined,
          underlyingAssetId: prop.Order.contract.underlyingAssetId !== undefined ? {
              set: prop.Order.contract.underlyingAssetId  
             } : undefined,
          type: prop.Order.contract.type !== undefined ? {
              set: prop.Order.contract.type  
             } : undefined,
          style: prop.Order.contract.style !== undefined ? {
              set: prop.Order.contract.style  
             } : undefined,
          strikePrice: prop.Order.contract.strikePrice !== undefined ? {
              set: prop.Order.contract.strikePrice  
             } : undefined,
          multiplier: prop.Order.contract.multiplier !== undefined ? {
              set: prop.Order.contract.multiplier  
             } : undefined,
          size: prop.Order.contract.size !== undefined ? {
              set: prop.Order.contract.size  
             } : undefined,
          openInterest: prop.Order.contract.openInterest !== undefined ? {
              set: prop.Order.contract.openInterest  
             } : undefined,
          openInterestDate: prop.Order.contract.openInterestDate !== undefined ? {
              set: prop.Order.contract.openInterestDate  
             } : undefined,
          closePrice: prop.Order.contract.closePrice !== undefined ? {
              set: prop.Order.contract.closePrice  
             } : undefined,
          closePriceDate: prop.Order.contract.closePriceDate !== undefined ? {
              set: prop.Order.contract.closePriceDate  
             } : undefined,
          ppind: prop.Order.contract.ppind !== undefined ? {
              set: prop.Order.contract.ppind  
             } : undefined,
          orderId: prop.Order.contract.orderId !== undefined ? {
              set: prop.Order.contract.orderId  
             } : undefined,
      deliverables: prop.Order.contract.deliverables ? {
        upsert: prop.Order.contract.deliverables.map((item: any) => ({
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
      asset: prop.Order.contract.asset ? {
        upsert: {
          where: {
            id: prop.Order.contract.asset.id !== undefined ? {
                equals: prop.Order.contract.asset.id 
               } : undefined,
            symbol: prop.Order.contract.asset.symbol !== undefined ? {
                equals: prop.Order.contract.asset.symbol 
               } : undefined,
            name: prop.Order.contract.asset.name !== undefined ? {
                equals: prop.Order.contract.asset.name 
               } : undefined,
          },
          update: {
            id: prop.Order.contract.asset.id !== undefined ? {
                set: prop.Order.contract.asset.id  
               } : undefined,
            symbol: prop.Order.contract.asset.symbol !== undefined ? {
                set: prop.Order.contract.asset.symbol  
               } : undefined,
            name: prop.Order.contract.asset.name !== undefined ? {
                set: prop.Order.contract.asset.name  
               } : undefined,
            type: prop.Order.contract.asset.type !== undefined ? {
                set: prop.Order.contract.asset.type  
               } : undefined,
            logoUrl: prop.Order.contract.asset.logoUrl !== undefined ? {
                set: prop.Order.contract.asset.logoUrl  
               } : undefined,
            description: prop.Order.contract.asset.description !== undefined ? {
                set: prop.Order.contract.asset.description  
               } : undefined,
            cik: prop.Order.contract.asset.cik !== undefined ? {
                set: prop.Order.contract.asset.cik  
               } : undefined,
            exchange: prop.Order.contract.asset.exchange !== undefined ? {
                set: prop.Order.contract.asset.exchange  
               } : undefined,
            currency: prop.Order.contract.asset.currency !== undefined ? {
                set: prop.Order.contract.asset.currency  
               } : undefined,
            country: prop.Order.contract.asset.country !== undefined ? {
                set: prop.Order.contract.asset.country  
               } : undefined,
            sector: prop.Order.contract.asset.sector !== undefined ? {
                set: prop.Order.contract.asset.sector  
               } : undefined,
            industry: prop.Order.contract.asset.industry !== undefined ? {
                set: prop.Order.contract.asset.industry  
               } : undefined,
            address: prop.Order.contract.asset.address !== undefined ? {
                set: prop.Order.contract.asset.address  
               } : undefined,
            officialSite: prop.Order.contract.asset.officialSite !== undefined ? {
                set: prop.Order.contract.asset.officialSite  
               } : undefined,
            fiscalYearEnd: prop.Order.contract.asset.fiscalYearEnd !== undefined ? {
                set: prop.Order.contract.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: prop.Order.contract.asset.latestQuarter !== undefined ? {
                set: prop.Order.contract.asset.latestQuarter  
               } : undefined,
            marketCapitalization: prop.Order.contract.asset.marketCapitalization !== undefined ? {
                set: prop.Order.contract.asset.marketCapitalization  
               } : undefined,
            ebitda: prop.Order.contract.asset.ebitda !== undefined ? {
                set: prop.Order.contract.asset.ebitda  
               } : undefined,
            peRatio: prop.Order.contract.asset.peRatio !== undefined ? {
                set: prop.Order.contract.asset.peRatio  
               } : undefined,
            pegRatio: prop.Order.contract.asset.pegRatio !== undefined ? {
                set: prop.Order.contract.asset.pegRatio  
               } : undefined,
            bookValue: prop.Order.contract.asset.bookValue !== undefined ? {
                set: prop.Order.contract.asset.bookValue  
               } : undefined,
            dividendPerShare: prop.Order.contract.asset.dividendPerShare !== undefined ? {
                set: prop.Order.contract.asset.dividendPerShare  
               } : undefined,
            dividendYield: prop.Order.contract.asset.dividendYield !== undefined ? {
                set: prop.Order.contract.asset.dividendYield  
               } : undefined,
            eps: prop.Order.contract.asset.eps !== undefined ? {
                set: prop.Order.contract.asset.eps  
               } : undefined,
            revenuePerShareTTM: prop.Order.contract.asset.revenuePerShareTTM !== undefined ? {
                set: prop.Order.contract.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: prop.Order.contract.asset.profitMargin !== undefined ? {
                set: prop.Order.contract.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: prop.Order.contract.asset.operatingMarginTTM !== undefined ? {
                set: prop.Order.contract.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: prop.Order.contract.asset.returnOnAssetsTTM !== undefined ? {
                set: prop.Order.contract.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: prop.Order.contract.asset.returnOnEquityTTM !== undefined ? {
                set: prop.Order.contract.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: prop.Order.contract.asset.revenueTTM !== undefined ? {
                set: prop.Order.contract.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: prop.Order.contract.asset.grossProfitTTM !== undefined ? {
                set: prop.Order.contract.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: prop.Order.contract.asset.dilutedEPSTTM !== undefined ? {
                set: prop.Order.contract.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: prop.Order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: prop.Order.contract.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: prop.Order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: prop.Order.contract.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: prop.Order.contract.asset.analystTargetPrice !== undefined ? {
                set: prop.Order.contract.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: prop.Order.contract.asset.analystRatingStrongBuy !== undefined ? {
                set: prop.Order.contract.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: prop.Order.contract.asset.analystRatingBuy !== undefined ? {
                set: prop.Order.contract.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: prop.Order.contract.asset.analystRatingHold !== undefined ? {
                set: prop.Order.contract.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: prop.Order.contract.asset.analystRatingSell !== undefined ? {
                set: prop.Order.contract.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: prop.Order.contract.asset.analystRatingStrongSell !== undefined ? {
                set: prop.Order.contract.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: prop.Order.contract.asset.trailingPE !== undefined ? {
                set: prop.Order.contract.asset.trailingPE  
               } : undefined,
            forwardPE: prop.Order.contract.asset.forwardPE !== undefined ? {
                set: prop.Order.contract.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: prop.Order.contract.asset.priceToSalesRatioTTM !== undefined ? {
                set: prop.Order.contract.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: prop.Order.contract.asset.priceToBookRatio !== undefined ? {
                set: prop.Order.contract.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: prop.Order.contract.asset.evToRevenue !== undefined ? {
                set: prop.Order.contract.asset.evToRevenue  
               } : undefined,
            evToEbitda: prop.Order.contract.asset.evToEbitda !== undefined ? {
                set: prop.Order.contract.asset.evToEbitda  
               } : undefined,
            beta: prop.Order.contract.asset.beta !== undefined ? {
                set: prop.Order.contract.asset.beta  
               } : undefined,
            week52High: prop.Order.contract.asset.week52High !== undefined ? {
                set: prop.Order.contract.asset.week52High  
               } : undefined,
            week52Low: prop.Order.contract.asset.week52Low !== undefined ? {
                set: prop.Order.contract.asset.week52Low  
               } : undefined,
            day50MovingAverage: prop.Order.contract.asset.day50MovingAverage !== undefined ? {
                set: prop.Order.contract.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: prop.Order.contract.asset.day200MovingAverage !== undefined ? {
                set: prop.Order.contract.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: prop.Order.contract.asset.sharesOutstanding !== undefined ? {
                set: prop.Order.contract.asset.sharesOutstanding  
               } : undefined,
            dividendDate: prop.Order.contract.asset.dividendDate !== undefined ? {
                set: prop.Order.contract.asset.dividendDate  
               } : undefined,
            exDividendDate: prop.Order.contract.asset.exDividendDate !== undefined ? {
                set: prop.Order.contract.asset.exDividendDate  
               } : undefined,
            askPrice: prop.Order.contract.asset.askPrice !== undefined ? {
                set: prop.Order.contract.asset.askPrice  
               } : undefined,
            bidPrice: prop.Order.contract.asset.bidPrice !== undefined ? {
                set: prop.Order.contract.asset.bidPrice  
               } : undefined,
          },
          create: {
            symbol: prop.Order.contract.asset.symbol !== undefined ? prop.Order.contract.asset.symbol : undefined,
            name: prop.Order.contract.asset.name !== undefined ? prop.Order.contract.asset.name : undefined,
            type: prop.Order.contract.asset.type !== undefined ? prop.Order.contract.asset.type : undefined,
            logoUrl: prop.Order.contract.asset.logoUrl !== undefined ? prop.Order.contract.asset.logoUrl : undefined,
            description: prop.Order.contract.asset.description !== undefined ? prop.Order.contract.asset.description : undefined,
            cik: prop.Order.contract.asset.cik !== undefined ? prop.Order.contract.asset.cik : undefined,
            exchange: prop.Order.contract.asset.exchange !== undefined ? prop.Order.contract.asset.exchange : undefined,
            currency: prop.Order.contract.asset.currency !== undefined ? prop.Order.contract.asset.currency : undefined,
            country: prop.Order.contract.asset.country !== undefined ? prop.Order.contract.asset.country : undefined,
            sector: prop.Order.contract.asset.sector !== undefined ? prop.Order.contract.asset.sector : undefined,
            industry: prop.Order.contract.asset.industry !== undefined ? prop.Order.contract.asset.industry : undefined,
            address: prop.Order.contract.asset.address !== undefined ? prop.Order.contract.asset.address : undefined,
            officialSite: prop.Order.contract.asset.officialSite !== undefined ? prop.Order.contract.asset.officialSite : undefined,
            fiscalYearEnd: prop.Order.contract.asset.fiscalYearEnd !== undefined ? prop.Order.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.Order.contract.asset.latestQuarter !== undefined ? prop.Order.contract.asset.latestQuarter : undefined,
            marketCapitalization: prop.Order.contract.asset.marketCapitalization !== undefined ? prop.Order.contract.asset.marketCapitalization : undefined,
            ebitda: prop.Order.contract.asset.ebitda !== undefined ? prop.Order.contract.asset.ebitda : undefined,
            peRatio: prop.Order.contract.asset.peRatio !== undefined ? prop.Order.contract.asset.peRatio : undefined,
            pegRatio: prop.Order.contract.asset.pegRatio !== undefined ? prop.Order.contract.asset.pegRatio : undefined,
            bookValue: prop.Order.contract.asset.bookValue !== undefined ? prop.Order.contract.asset.bookValue : undefined,
            dividendPerShare: prop.Order.contract.asset.dividendPerShare !== undefined ? prop.Order.contract.asset.dividendPerShare : undefined,
            dividendYield: prop.Order.contract.asset.dividendYield !== undefined ? prop.Order.contract.asset.dividendYield : undefined,
            eps: prop.Order.contract.asset.eps !== undefined ? prop.Order.contract.asset.eps : undefined,
            revenuePerShareTTM: prop.Order.contract.asset.revenuePerShareTTM !== undefined ? prop.Order.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.Order.contract.asset.profitMargin !== undefined ? prop.Order.contract.asset.profitMargin : undefined,
            operatingMarginTTM: prop.Order.contract.asset.operatingMarginTTM !== undefined ? prop.Order.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.Order.contract.asset.returnOnAssetsTTM !== undefined ? prop.Order.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.Order.contract.asset.returnOnEquityTTM !== undefined ? prop.Order.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.Order.contract.asset.revenueTTM !== undefined ? prop.Order.contract.asset.revenueTTM : undefined,
            grossProfitTTM: prop.Order.contract.asset.grossProfitTTM !== undefined ? prop.Order.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.Order.contract.asset.dilutedEPSTTM !== undefined ? prop.Order.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.Order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.Order.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.Order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.Order.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.Order.contract.asset.analystTargetPrice !== undefined ? prop.Order.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.Order.contract.asset.analystRatingStrongBuy !== undefined ? prop.Order.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.Order.contract.asset.analystRatingBuy !== undefined ? prop.Order.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.Order.contract.asset.analystRatingHold !== undefined ? prop.Order.contract.asset.analystRatingHold : undefined,
            analystRatingSell: prop.Order.contract.asset.analystRatingSell !== undefined ? prop.Order.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.Order.contract.asset.analystRatingStrongSell !== undefined ? prop.Order.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.Order.contract.asset.trailingPE !== undefined ? prop.Order.contract.asset.trailingPE : undefined,
            forwardPE: prop.Order.contract.asset.forwardPE !== undefined ? prop.Order.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.Order.contract.asset.priceToSalesRatioTTM !== undefined ? prop.Order.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.Order.contract.asset.priceToBookRatio !== undefined ? prop.Order.contract.asset.priceToBookRatio : undefined,
            evToRevenue: prop.Order.contract.asset.evToRevenue !== undefined ? prop.Order.contract.asset.evToRevenue : undefined,
            evToEbitda: prop.Order.contract.asset.evToEbitda !== undefined ? prop.Order.contract.asset.evToEbitda : undefined,
            beta: prop.Order.contract.asset.beta !== undefined ? prop.Order.contract.asset.beta : undefined,
            week52High: prop.Order.contract.asset.week52High !== undefined ? prop.Order.contract.asset.week52High : undefined,
            week52Low: prop.Order.contract.asset.week52Low !== undefined ? prop.Order.contract.asset.week52Low : undefined,
            day50MovingAverage: prop.Order.contract.asset.day50MovingAverage !== undefined ? prop.Order.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.Order.contract.asset.day200MovingAverage !== undefined ? prop.Order.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.Order.contract.asset.sharesOutstanding !== undefined ? prop.Order.contract.asset.sharesOutstanding : undefined,
            dividendDate: prop.Order.contract.asset.dividendDate !== undefined ? prop.Order.contract.asset.dividendDate : undefined,
            exDividendDate: prop.Order.contract.asset.exDividendDate !== undefined ? prop.Order.contract.asset.exDividendDate : undefined,
            askPrice: prop.Order.contract.asset.askPrice !== undefined ? prop.Order.contract.asset.askPrice : undefined,
            bidPrice: prop.Order.contract.asset.bidPrice !== undefined ? prop.Order.contract.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
        create: {
          alpacaId: prop.Order.contract.alpacaId !== undefined ? prop.Order.contract.alpacaId : undefined,
          symbol: prop.Order.contract.symbol !== undefined ? prop.Order.contract.symbol : undefined,
          name: prop.Order.contract.name !== undefined ? prop.Order.contract.name : undefined,
          status: prop.Order.contract.status !== undefined ? prop.Order.contract.status : undefined,
          tradable: prop.Order.contract.tradable !== undefined ? prop.Order.contract.tradable : undefined,
          expirationDate: prop.Order.contract.expirationDate !== undefined ? prop.Order.contract.expirationDate : undefined,
          rootSymbol: prop.Order.contract.rootSymbol !== undefined ? prop.Order.contract.rootSymbol : undefined,
          underlyingSymbol: prop.Order.contract.underlyingSymbol !== undefined ? prop.Order.contract.underlyingSymbol : undefined,
          underlyingAssetId: prop.Order.contract.underlyingAssetId !== undefined ? prop.Order.contract.underlyingAssetId : undefined,
          type: prop.Order.contract.type !== undefined ? prop.Order.contract.type : undefined,
          style: prop.Order.contract.style !== undefined ? prop.Order.contract.style : undefined,
          strikePrice: prop.Order.contract.strikePrice !== undefined ? prop.Order.contract.strikePrice : undefined,
          multiplier: prop.Order.contract.multiplier !== undefined ? prop.Order.contract.multiplier : undefined,
          size: prop.Order.contract.size !== undefined ? prop.Order.contract.size : undefined,
          openInterest: prop.Order.contract.openInterest !== undefined ? prop.Order.contract.openInterest : undefined,
          openInterestDate: prop.Order.contract.openInterestDate !== undefined ? prop.Order.contract.openInterestDate : undefined,
          closePrice: prop.Order.contract.closePrice !== undefined ? prop.Order.contract.closePrice : undefined,
          closePriceDate: prop.Order.contract.closePriceDate !== undefined ? prop.Order.contract.closePriceDate : undefined,
          ppind: prop.Order.contract.ppind !== undefined ? prop.Order.contract.ppind : undefined,
          orderId: prop.Order.contract.orderId !== undefined ? prop.Order.contract.orderId : undefined,
      deliverables: prop.Order.contract.deliverables ? 
        Array.isArray(prop.Order.contract.deliverables) && prop.Order.contract.deliverables.length > 0 &&  prop.Order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.contract.deliverables.map((item: any) => ({
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
      asset: prop.Order.contract.asset ? 
        typeof prop.Order.contract.asset === 'object' && Object.keys(prop.Order.contract.asset).length === 1 && Object.keys(prop.Order.contract.asset)[0] === 'id'
    ? { connect: {
            id: prop.Order.contract.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.Order.contract.asset.id !== undefined ? prop.Order.contract.asset.id : undefined,
            symbol: prop.Order.contract.asset.symbol !== undefined ? prop.Order.contract.asset.symbol : undefined,
            name: prop.Order.contract.asset.name !== undefined ? prop.Order.contract.asset.name : undefined,
          },
          create: {
            symbol: prop.Order.contract.asset.symbol !== undefined ? prop.Order.contract.asset.symbol : undefined,
            name: prop.Order.contract.asset.name !== undefined ? prop.Order.contract.asset.name : undefined,
            type: prop.Order.contract.asset.type !== undefined ? prop.Order.contract.asset.type : undefined,
            logoUrl: prop.Order.contract.asset.logoUrl !== undefined ? prop.Order.contract.asset.logoUrl : undefined,
            description: prop.Order.contract.asset.description !== undefined ? prop.Order.contract.asset.description : undefined,
            cik: prop.Order.contract.asset.cik !== undefined ? prop.Order.contract.asset.cik : undefined,
            exchange: prop.Order.contract.asset.exchange !== undefined ? prop.Order.contract.asset.exchange : undefined,
            currency: prop.Order.contract.asset.currency !== undefined ? prop.Order.contract.asset.currency : undefined,
            country: prop.Order.contract.asset.country !== undefined ? prop.Order.contract.asset.country : undefined,
            sector: prop.Order.contract.asset.sector !== undefined ? prop.Order.contract.asset.sector : undefined,
            industry: prop.Order.contract.asset.industry !== undefined ? prop.Order.contract.asset.industry : undefined,
            address: prop.Order.contract.asset.address !== undefined ? prop.Order.contract.asset.address : undefined,
            officialSite: prop.Order.contract.asset.officialSite !== undefined ? prop.Order.contract.asset.officialSite : undefined,
            fiscalYearEnd: prop.Order.contract.asset.fiscalYearEnd !== undefined ? prop.Order.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.Order.contract.asset.latestQuarter !== undefined ? prop.Order.contract.asset.latestQuarter : undefined,
            marketCapitalization: prop.Order.contract.asset.marketCapitalization !== undefined ? prop.Order.contract.asset.marketCapitalization : undefined,
            ebitda: prop.Order.contract.asset.ebitda !== undefined ? prop.Order.contract.asset.ebitda : undefined,
            peRatio: prop.Order.contract.asset.peRatio !== undefined ? prop.Order.contract.asset.peRatio : undefined,
            pegRatio: prop.Order.contract.asset.pegRatio !== undefined ? prop.Order.contract.asset.pegRatio : undefined,
            bookValue: prop.Order.contract.asset.bookValue !== undefined ? prop.Order.contract.asset.bookValue : undefined,
            dividendPerShare: prop.Order.contract.asset.dividendPerShare !== undefined ? prop.Order.contract.asset.dividendPerShare : undefined,
            dividendYield: prop.Order.contract.asset.dividendYield !== undefined ? prop.Order.contract.asset.dividendYield : undefined,
            eps: prop.Order.contract.asset.eps !== undefined ? prop.Order.contract.asset.eps : undefined,
            revenuePerShareTTM: prop.Order.contract.asset.revenuePerShareTTM !== undefined ? prop.Order.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.Order.contract.asset.profitMargin !== undefined ? prop.Order.contract.asset.profitMargin : undefined,
            operatingMarginTTM: prop.Order.contract.asset.operatingMarginTTM !== undefined ? prop.Order.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.Order.contract.asset.returnOnAssetsTTM !== undefined ? prop.Order.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.Order.contract.asset.returnOnEquityTTM !== undefined ? prop.Order.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.Order.contract.asset.revenueTTM !== undefined ? prop.Order.contract.asset.revenueTTM : undefined,
            grossProfitTTM: prop.Order.contract.asset.grossProfitTTM !== undefined ? prop.Order.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.Order.contract.asset.dilutedEPSTTM !== undefined ? prop.Order.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.Order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.Order.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.Order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.Order.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.Order.contract.asset.analystTargetPrice !== undefined ? prop.Order.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.Order.contract.asset.analystRatingStrongBuy !== undefined ? prop.Order.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.Order.contract.asset.analystRatingBuy !== undefined ? prop.Order.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.Order.contract.asset.analystRatingHold !== undefined ? prop.Order.contract.asset.analystRatingHold : undefined,
            analystRatingSell: prop.Order.contract.asset.analystRatingSell !== undefined ? prop.Order.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.Order.contract.asset.analystRatingStrongSell !== undefined ? prop.Order.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.Order.contract.asset.trailingPE !== undefined ? prop.Order.contract.asset.trailingPE : undefined,
            forwardPE: prop.Order.contract.asset.forwardPE !== undefined ? prop.Order.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.Order.contract.asset.priceToSalesRatioTTM !== undefined ? prop.Order.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.Order.contract.asset.priceToBookRatio !== undefined ? prop.Order.contract.asset.priceToBookRatio : undefined,
            evToRevenue: prop.Order.contract.asset.evToRevenue !== undefined ? prop.Order.contract.asset.evToRevenue : undefined,
            evToEbitda: prop.Order.contract.asset.evToEbitda !== undefined ? prop.Order.contract.asset.evToEbitda : undefined,
            beta: prop.Order.contract.asset.beta !== undefined ? prop.Order.contract.asset.beta : undefined,
            week52High: prop.Order.contract.asset.week52High !== undefined ? prop.Order.contract.asset.week52High : undefined,
            week52Low: prop.Order.contract.asset.week52Low !== undefined ? prop.Order.contract.asset.week52Low : undefined,
            day50MovingAverage: prop.Order.contract.asset.day50MovingAverage !== undefined ? prop.Order.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.Order.contract.asset.day200MovingAverage !== undefined ? prop.Order.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.Order.contract.asset.sharesOutstanding !== undefined ? prop.Order.contract.asset.sharesOutstanding : undefined,
            dividendDate: prop.Order.contract.asset.dividendDate !== undefined ? prop.Order.contract.asset.dividendDate : undefined,
            exDividendDate: prop.Order.contract.asset.exDividendDate !== undefined ? prop.Order.contract.asset.exDividendDate : undefined,
            askPrice: prop.Order.contract.asset.askPrice !== undefined ? prop.Order.contract.asset.askPrice : undefined,
            bidPrice: prop.Order.contract.asset.bidPrice !== undefined ? prop.Order.contract.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        clientOrderId: prop.Order.clientOrderId !== undefined ? prop.Order.clientOrderId : undefined,
        qty: prop.Order.qty !== undefined ? prop.Order.qty : undefined,
        notional: prop.Order.notional !== undefined ? prop.Order.notional : undefined,
        side: prop.Order.side !== undefined ? prop.Order.side : undefined,
        type: prop.Order.type !== undefined ? prop.Order.type : undefined,
        orderClass: prop.Order.orderClass !== undefined ? prop.Order.orderClass : undefined,
        timeInForce: prop.Order.timeInForce !== undefined ? prop.Order.timeInForce : undefined,
        limitPrice: prop.Order.limitPrice !== undefined ? prop.Order.limitPrice : undefined,
        stopPrice: prop.Order.stopPrice !== undefined ? prop.Order.stopPrice : undefined,
        trailPrice: prop.Order.trailPrice !== undefined ? prop.Order.trailPrice : undefined,
        trailPercent: prop.Order.trailPercent !== undefined ? prop.Order.trailPercent : undefined,
        extendedHours: prop.Order.extendedHours !== undefined ? prop.Order.extendedHours : undefined,
        status: prop.Order.status !== undefined ? prop.Order.status : undefined,
        submittedAt: prop.Order.submittedAt !== undefined ? prop.Order.submittedAt : undefined,
        filledAt: prop.Order.filledAt !== undefined ? prop.Order.filledAt : undefined,
        filledQty: prop.Order.filledQty !== undefined ? prop.Order.filledQty : undefined,
        filledAvgPrice: prop.Order.filledAvgPrice !== undefined ? prop.Order.filledAvgPrice : undefined,
        cancelRequestedAt: prop.Order.cancelRequestedAt !== undefined ? prop.Order.cancelRequestedAt : undefined,
        canceledAt: prop.Order.canceledAt !== undefined ? prop.Order.canceledAt : undefined,
        fee: prop.Order.fee !== undefined ? prop.Order.fee : undefined,
        strikePrice: prop.Order.strikePrice !== undefined ? prop.Order.strikePrice : undefined,
        expirationDate: prop.Order.expirationDate !== undefined ? prop.Order.expirationDate : undefined,
        optionType: prop.Order.optionType !== undefined ? prop.Order.optionType : undefined,
        stopLossId: prop.Order.stopLossId !== undefined ? prop.Order.stopLossId : undefined,
        takeProfitId: prop.Order.takeProfitId !== undefined ? prop.Order.takeProfitId : undefined,
    stopLoss: prop.Order.stopLoss ? 
      typeof prop.Order.stopLoss === 'object' && Object.keys(prop.Order.stopLoss).length === 1 && Object.keys(prop.Order.stopLoss)[0] === 'id'
    ? { connect: {
          id: prop.Order.stopLoss.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.stopLoss.id !== undefined ? prop.Order.stopLoss.id : undefined,
          orderId: prop.Order.stopLoss.orderId !== undefined ? prop.Order.stopLoss.orderId : undefined,
        },
        create: {
          stopPrice: prop.Order.stopLoss.stopPrice !== undefined ? prop.Order.stopLoss.stopPrice : undefined,
          limitPrice: prop.Order.stopLoss.limitPrice !== undefined ? prop.Order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: prop.Order.alpacaAccount ? 
      typeof prop.Order.alpacaAccount === 'object' && Object.keys(prop.Order.alpacaAccount).length === 1 && Object.keys(prop.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: prop.Order.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.alpacaAccount.id !== undefined ? prop.Order.alpacaAccount.id : undefined,
          userId: prop.Order.alpacaAccount.userId !== undefined ? {
              equals: prop.Order.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: prop.Order.alpacaAccount.type !== undefined ? prop.Order.alpacaAccount.type : undefined,
          APIKey: prop.Order.alpacaAccount.APIKey !== undefined ? prop.Order.alpacaAccount.APIKey : undefined,
          APISecret: prop.Order.alpacaAccount.APISecret !== undefined ? prop.Order.alpacaAccount.APISecret : undefined,
          configuration: prop.Order.alpacaAccount.configuration !== undefined ? prop.Order.alpacaAccount.configuration : undefined,
          marketOpen: prop.Order.alpacaAccount.marketOpen !== undefined ? prop.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: prop.Order.alpacaAccount.minOrderSize !== undefined ? prop.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: prop.Order.alpacaAccount.maxOrderSize !== undefined ? prop.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: prop.Order.alpacaAccount.minPercentageChange !== undefined ? prop.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: prop.Order.alpacaAccount.volumeThreshold !== undefined ? prop.Order.alpacaAccount.volumeThreshold : undefined,
      user: prop.Order.alpacaAccount.user ? 
        typeof prop.Order.alpacaAccount.user === 'object' && Object.keys(prop.Order.alpacaAccount.user).length === 1 && Object.keys(prop.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: prop.Order.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.Order.alpacaAccount.user.id !== undefined ? prop.Order.alpacaAccount.user.id : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? prop.Order.alpacaAccount.user.email : undefined,
            name: prop.Order.alpacaAccount.user.name !== undefined ? {
                equals: prop.Order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: prop.Order.alpacaAccount.user.name !== undefined ? prop.Order.alpacaAccount.user.name : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? prop.Order.alpacaAccount.user.email : undefined,
            emailVerified: prop.Order.alpacaAccount.user.emailVerified !== undefined ? prop.Order.alpacaAccount.user.emailVerified : undefined,
            image: prop.Order.alpacaAccount.user.image !== undefined ? prop.Order.alpacaAccount.user.image : undefined,
            role: prop.Order.alpacaAccount.user.role !== undefined ? prop.Order.alpacaAccount.user.role : undefined,
            bio: prop.Order.alpacaAccount.user.bio !== undefined ? prop.Order.alpacaAccount.user.bio : undefined,
            jobTitle: prop.Order.alpacaAccount.user.jobTitle !== undefined ? prop.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.Order.alpacaAccount.user.currentAccount !== undefined ? prop.Order.alpacaAccount.user.currentAccount : undefined,
            plan: prop.Order.alpacaAccount.user.plan !== undefined ? prop.Order.alpacaAccount.user.plan : undefined,
            openaiAPIKey: prop.Order.alpacaAccount.user.openaiAPIKey !== undefined ? prop.Order.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: prop.Order.alpacaAccount.user.openaiModel !== undefined ? prop.Order.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      trades: prop.Order.alpacaAccount.trades ? 
        Array.isArray(prop.Order.alpacaAccount.trades) && prop.Order.alpacaAccount.trades.length > 0 &&  prop.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.trades.map((item: any) => ({
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
      positions: prop.Order.alpacaAccount.positions ? 
        Array.isArray(prop.Order.alpacaAccount.positions) && prop.Order.alpacaAccount.positions.length > 0 &&  prop.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: prop.Order.alpacaAccount.alerts ? 
        Array.isArray(prop.Order.alpacaAccount.alerts) && prop.Order.alpacaAccount.alerts.length > 0 &&  prop.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.alerts.map((item: any) => ({
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
    action: prop.Order.action ? 
      typeof prop.Order.action === 'object' && Object.keys(prop.Order.action).length === 1 && Object.keys(prop.Order.action)[0] === 'id'
    ? { connect: {
          id: prop.Order.action.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.action.id !== undefined ? prop.Order.action.id : undefined,
          tradeId: prop.Order.action.tradeId !== undefined ? {
              equals: prop.Order.action.tradeId 
             } : undefined,
        },
        create: {
          sequence: prop.Order.action.sequence !== undefined ? prop.Order.action.sequence : undefined,
          type: prop.Order.action.type !== undefined ? prop.Order.action.type : undefined,
          note: prop.Order.action.note !== undefined ? prop.Order.action.note : undefined,
          status: prop.Order.action.status !== undefined ? prop.Order.action.status : undefined,
          fee: prop.Order.action.fee !== undefined ? prop.Order.action.fee : undefined,
      trade: prop.Order.action.trade ? 
        typeof prop.Order.action.trade === 'object' && Object.keys(prop.Order.action.trade).length === 1 && Object.keys(prop.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: prop.Order.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.Order.action.trade.id !== undefined ? prop.Order.action.trade.id : undefined,
            alpacaAccountId: prop.Order.action.trade.alpacaAccountId !== undefined ? {
                equals: prop.Order.action.trade.alpacaAccountId 
               } : undefined,
          },
          create: {
            qty: prop.Order.action.trade.qty !== undefined ? prop.Order.action.trade.qty : undefined,
            price: prop.Order.action.trade.price !== undefined ? prop.Order.action.trade.price : undefined,
            total: prop.Order.action.trade.total !== undefined ? prop.Order.action.trade.total : undefined,
            optionType: prop.Order.action.trade.optionType !== undefined ? prop.Order.action.trade.optionType : undefined,
            signal: prop.Order.action.trade.signal !== undefined ? prop.Order.action.trade.signal : undefined,
            strategy: prop.Order.action.trade.strategy !== undefined ? prop.Order.action.trade.strategy : undefined,
            analysis: prop.Order.action.trade.analysis !== undefined ? prop.Order.action.trade.analysis : undefined,
            summary: prop.Order.action.trade.summary !== undefined ? prop.Order.action.trade.summary : undefined,
            confidence: prop.Order.action.trade.confidence !== undefined ? prop.Order.action.trade.confidence : undefined,
            timestamp: prop.Order.action.trade.timestamp !== undefined ? prop.Order.action.trade.timestamp : undefined,
            status: prop.Order.action.trade.status !== undefined ? prop.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: prop.Order.asset ? 
      typeof prop.Order.asset === 'object' && Object.keys(prop.Order.asset).length === 1 && Object.keys(prop.Order.asset)[0] === 'id'
    ? { connect: {
          id: prop.Order.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.asset.id !== undefined ? prop.Order.asset.id : undefined,
          symbol: prop.Order.asset.symbol !== undefined ? prop.Order.asset.symbol : undefined,
          name: prop.Order.asset.name !== undefined ? prop.Order.asset.name : undefined,
        },
        create: {
          symbol: prop.Order.asset.symbol !== undefined ? prop.Order.asset.symbol : undefined,
          name: prop.Order.asset.name !== undefined ? prop.Order.asset.name : undefined,
          type: prop.Order.asset.type !== undefined ? prop.Order.asset.type : undefined,
          logoUrl: prop.Order.asset.logoUrl !== undefined ? prop.Order.asset.logoUrl : undefined,
          description: prop.Order.asset.description !== undefined ? prop.Order.asset.description : undefined,
          cik: prop.Order.asset.cik !== undefined ? prop.Order.asset.cik : undefined,
          exchange: prop.Order.asset.exchange !== undefined ? prop.Order.asset.exchange : undefined,
          currency: prop.Order.asset.currency !== undefined ? prop.Order.asset.currency : undefined,
          country: prop.Order.asset.country !== undefined ? prop.Order.asset.country : undefined,
          sector: prop.Order.asset.sector !== undefined ? prop.Order.asset.sector : undefined,
          industry: prop.Order.asset.industry !== undefined ? prop.Order.asset.industry : undefined,
          address: prop.Order.asset.address !== undefined ? prop.Order.asset.address : undefined,
          officialSite: prop.Order.asset.officialSite !== undefined ? prop.Order.asset.officialSite : undefined,
          fiscalYearEnd: prop.Order.asset.fiscalYearEnd !== undefined ? prop.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.Order.asset.latestQuarter !== undefined ? prop.Order.asset.latestQuarter : undefined,
          marketCapitalization: prop.Order.asset.marketCapitalization !== undefined ? prop.Order.asset.marketCapitalization : undefined,
          ebitda: prop.Order.asset.ebitda !== undefined ? prop.Order.asset.ebitda : undefined,
          peRatio: prop.Order.asset.peRatio !== undefined ? prop.Order.asset.peRatio : undefined,
          pegRatio: prop.Order.asset.pegRatio !== undefined ? prop.Order.asset.pegRatio : undefined,
          bookValue: prop.Order.asset.bookValue !== undefined ? prop.Order.asset.bookValue : undefined,
          dividendPerShare: prop.Order.asset.dividendPerShare !== undefined ? prop.Order.asset.dividendPerShare : undefined,
          dividendYield: prop.Order.asset.dividendYield !== undefined ? prop.Order.asset.dividendYield : undefined,
          eps: prop.Order.asset.eps !== undefined ? prop.Order.asset.eps : undefined,
          revenuePerShareTTM: prop.Order.asset.revenuePerShareTTM !== undefined ? prop.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.Order.asset.profitMargin !== undefined ? prop.Order.asset.profitMargin : undefined,
          operatingMarginTTM: prop.Order.asset.operatingMarginTTM !== undefined ? prop.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.Order.asset.returnOnAssetsTTM !== undefined ? prop.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.Order.asset.returnOnEquityTTM !== undefined ? prop.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.Order.asset.revenueTTM !== undefined ? prop.Order.asset.revenueTTM : undefined,
          grossProfitTTM: prop.Order.asset.grossProfitTTM !== undefined ? prop.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.Order.asset.dilutedEPSTTM !== undefined ? prop.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.Order.asset.analystTargetPrice !== undefined ? prop.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.Order.asset.analystRatingStrongBuy !== undefined ? prop.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.Order.asset.analystRatingBuy !== undefined ? prop.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.Order.asset.analystRatingHold !== undefined ? prop.Order.asset.analystRatingHold : undefined,
          analystRatingSell: prop.Order.asset.analystRatingSell !== undefined ? prop.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.Order.asset.analystRatingStrongSell !== undefined ? prop.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.Order.asset.trailingPE !== undefined ? prop.Order.asset.trailingPE : undefined,
          forwardPE: prop.Order.asset.forwardPE !== undefined ? prop.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.Order.asset.priceToSalesRatioTTM !== undefined ? prop.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.Order.asset.priceToBookRatio !== undefined ? prop.Order.asset.priceToBookRatio : undefined,
          evToRevenue: prop.Order.asset.evToRevenue !== undefined ? prop.Order.asset.evToRevenue : undefined,
          evToEbitda: prop.Order.asset.evToEbitda !== undefined ? prop.Order.asset.evToEbitda : undefined,
          beta: prop.Order.asset.beta !== undefined ? prop.Order.asset.beta : undefined,
          week52High: prop.Order.asset.week52High !== undefined ? prop.Order.asset.week52High : undefined,
          week52Low: prop.Order.asset.week52Low !== undefined ? prop.Order.asset.week52Low : undefined,
          day50MovingAverage: prop.Order.asset.day50MovingAverage !== undefined ? prop.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.Order.asset.day200MovingAverage !== undefined ? prop.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.Order.asset.sharesOutstanding !== undefined ? prop.Order.asset.sharesOutstanding : undefined,
          dividendDate: prop.Order.asset.dividendDate !== undefined ? prop.Order.asset.dividendDate : undefined,
          exDividendDate: prop.Order.asset.exDividendDate !== undefined ? prop.Order.asset.exDividendDate : undefined,
          askPrice: prop.Order.asset.askPrice !== undefined ? prop.Order.asset.askPrice : undefined,
          bidPrice: prop.Order.asset.bidPrice !== undefined ? prop.Order.asset.bidPrice : undefined,
      trades: prop.Order.asset.trades ? 
        Array.isArray(prop.Order.asset.trades) && prop.Order.asset.trades.length > 0 &&  prop.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.trades.map((item: any) => ({
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
      positions: prop.Order.asset.positions ? 
        Array.isArray(prop.Order.asset.positions) && prop.Order.asset.positions.length > 0 &&  prop.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.positions.map((item: any) => ({
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
      newsMentions: prop.Order.asset.newsMentions ? 
        Array.isArray(prop.Order.asset.newsMentions) && prop.Order.asset.newsMentions.length > 0 &&  prop.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.newsMentions.map((item: any) => ({
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
      contracts: prop.Order.asset.contracts ? 
        Array.isArray(prop.Order.asset.contracts) && prop.Order.asset.contracts.length > 0 &&  prop.Order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.contracts.map((item: any) => ({
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
    contract: prop.Order.contract ? 
      typeof prop.Order.contract === 'object' && Object.keys(prop.Order.contract).length === 1 && Object.keys(prop.Order.contract)[0] === 'id'
    ? { connect: {
          id: prop.Order.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.contract.id !== undefined ? prop.Order.contract.id : undefined,
          alpacaId: prop.Order.contract.alpacaId !== undefined ? prop.Order.contract.alpacaId : undefined,
          symbol: prop.Order.contract.symbol !== undefined ? prop.Order.contract.symbol : undefined,
          name: prop.Order.contract.name !== undefined ? {
              equals: prop.Order.contract.name 
             } : undefined,
          underlyingAssetId: prop.Order.contract.underlyingAssetId !== undefined ? {
              equals: prop.Order.contract.underlyingAssetId 
             } : undefined,
        },
        create: {
          alpacaId: prop.Order.contract.alpacaId !== undefined ? prop.Order.contract.alpacaId : undefined,
          symbol: prop.Order.contract.symbol !== undefined ? prop.Order.contract.symbol : undefined,
          name: prop.Order.contract.name !== undefined ? prop.Order.contract.name : undefined,
          status: prop.Order.contract.status !== undefined ? prop.Order.contract.status : undefined,
          tradable: prop.Order.contract.tradable !== undefined ? prop.Order.contract.tradable : undefined,
          expirationDate: prop.Order.contract.expirationDate !== undefined ? prop.Order.contract.expirationDate : undefined,
          rootSymbol: prop.Order.contract.rootSymbol !== undefined ? prop.Order.contract.rootSymbol : undefined,
          underlyingSymbol: prop.Order.contract.underlyingSymbol !== undefined ? prop.Order.contract.underlyingSymbol : undefined,
          underlyingAssetId: prop.Order.contract.underlyingAssetId !== undefined ? prop.Order.contract.underlyingAssetId : undefined,
          type: prop.Order.contract.type !== undefined ? prop.Order.contract.type : undefined,
          style: prop.Order.contract.style !== undefined ? prop.Order.contract.style : undefined,
          strikePrice: prop.Order.contract.strikePrice !== undefined ? prop.Order.contract.strikePrice : undefined,
          multiplier: prop.Order.contract.multiplier !== undefined ? prop.Order.contract.multiplier : undefined,
          size: prop.Order.contract.size !== undefined ? prop.Order.contract.size : undefined,
          openInterest: prop.Order.contract.openInterest !== undefined ? prop.Order.contract.openInterest : undefined,
          openInterestDate: prop.Order.contract.openInterestDate !== undefined ? prop.Order.contract.openInterestDate : undefined,
          closePrice: prop.Order.contract.closePrice !== undefined ? prop.Order.contract.closePrice : undefined,
          closePriceDate: prop.Order.contract.closePriceDate !== undefined ? prop.Order.contract.closePriceDate : undefined,
          ppind: prop.Order.contract.ppind !== undefined ? prop.Order.contract.ppind : undefined,
          orderId: prop.Order.contract.orderId !== undefined ? prop.Order.contract.orderId : undefined,
      deliverables: prop.Order.contract.deliverables ? 
        Array.isArray(prop.Order.contract.deliverables) && prop.Order.contract.deliverables.length > 0 &&  prop.Order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.contract.deliverables.map((item: any) => ({
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
      asset: prop.Order.contract.asset ? 
        typeof prop.Order.contract.asset === 'object' && Object.keys(prop.Order.contract.asset).length === 1 && Object.keys(prop.Order.contract.asset)[0] === 'id'
    ? { connect: {
            id: prop.Order.contract.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.Order.contract.asset.id !== undefined ? prop.Order.contract.asset.id : undefined,
            symbol: prop.Order.contract.asset.symbol !== undefined ? prop.Order.contract.asset.symbol : undefined,
            name: prop.Order.contract.asset.name !== undefined ? prop.Order.contract.asset.name : undefined,
          },
          create: {
            symbol: prop.Order.contract.asset.symbol !== undefined ? prop.Order.contract.asset.symbol : undefined,
            name: prop.Order.contract.asset.name !== undefined ? prop.Order.contract.asset.name : undefined,
            type: prop.Order.contract.asset.type !== undefined ? prop.Order.contract.asset.type : undefined,
            logoUrl: prop.Order.contract.asset.logoUrl !== undefined ? prop.Order.contract.asset.logoUrl : undefined,
            description: prop.Order.contract.asset.description !== undefined ? prop.Order.contract.asset.description : undefined,
            cik: prop.Order.contract.asset.cik !== undefined ? prop.Order.contract.asset.cik : undefined,
            exchange: prop.Order.contract.asset.exchange !== undefined ? prop.Order.contract.asset.exchange : undefined,
            currency: prop.Order.contract.asset.currency !== undefined ? prop.Order.contract.asset.currency : undefined,
            country: prop.Order.contract.asset.country !== undefined ? prop.Order.contract.asset.country : undefined,
            sector: prop.Order.contract.asset.sector !== undefined ? prop.Order.contract.asset.sector : undefined,
            industry: prop.Order.contract.asset.industry !== undefined ? prop.Order.contract.asset.industry : undefined,
            address: prop.Order.contract.asset.address !== undefined ? prop.Order.contract.asset.address : undefined,
            officialSite: prop.Order.contract.asset.officialSite !== undefined ? prop.Order.contract.asset.officialSite : undefined,
            fiscalYearEnd: prop.Order.contract.asset.fiscalYearEnd !== undefined ? prop.Order.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.Order.contract.asset.latestQuarter !== undefined ? prop.Order.contract.asset.latestQuarter : undefined,
            marketCapitalization: prop.Order.contract.asset.marketCapitalization !== undefined ? prop.Order.contract.asset.marketCapitalization : undefined,
            ebitda: prop.Order.contract.asset.ebitda !== undefined ? prop.Order.contract.asset.ebitda : undefined,
            peRatio: prop.Order.contract.asset.peRatio !== undefined ? prop.Order.contract.asset.peRatio : undefined,
            pegRatio: prop.Order.contract.asset.pegRatio !== undefined ? prop.Order.contract.asset.pegRatio : undefined,
            bookValue: prop.Order.contract.asset.bookValue !== undefined ? prop.Order.contract.asset.bookValue : undefined,
            dividendPerShare: prop.Order.contract.asset.dividendPerShare !== undefined ? prop.Order.contract.asset.dividendPerShare : undefined,
            dividendYield: prop.Order.contract.asset.dividendYield !== undefined ? prop.Order.contract.asset.dividendYield : undefined,
            eps: prop.Order.contract.asset.eps !== undefined ? prop.Order.contract.asset.eps : undefined,
            revenuePerShareTTM: prop.Order.contract.asset.revenuePerShareTTM !== undefined ? prop.Order.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.Order.contract.asset.profitMargin !== undefined ? prop.Order.contract.asset.profitMargin : undefined,
            operatingMarginTTM: prop.Order.contract.asset.operatingMarginTTM !== undefined ? prop.Order.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.Order.contract.asset.returnOnAssetsTTM !== undefined ? prop.Order.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.Order.contract.asset.returnOnEquityTTM !== undefined ? prop.Order.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.Order.contract.asset.revenueTTM !== undefined ? prop.Order.contract.asset.revenueTTM : undefined,
            grossProfitTTM: prop.Order.contract.asset.grossProfitTTM !== undefined ? prop.Order.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.Order.contract.asset.dilutedEPSTTM !== undefined ? prop.Order.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.Order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.Order.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.Order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.Order.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.Order.contract.asset.analystTargetPrice !== undefined ? prop.Order.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.Order.contract.asset.analystRatingStrongBuy !== undefined ? prop.Order.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.Order.contract.asset.analystRatingBuy !== undefined ? prop.Order.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.Order.contract.asset.analystRatingHold !== undefined ? prop.Order.contract.asset.analystRatingHold : undefined,
            analystRatingSell: prop.Order.contract.asset.analystRatingSell !== undefined ? prop.Order.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.Order.contract.asset.analystRatingStrongSell !== undefined ? prop.Order.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.Order.contract.asset.trailingPE !== undefined ? prop.Order.contract.asset.trailingPE : undefined,
            forwardPE: prop.Order.contract.asset.forwardPE !== undefined ? prop.Order.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.Order.contract.asset.priceToSalesRatioTTM !== undefined ? prop.Order.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.Order.contract.asset.priceToBookRatio !== undefined ? prop.Order.contract.asset.priceToBookRatio : undefined,
            evToRevenue: prop.Order.contract.asset.evToRevenue !== undefined ? prop.Order.contract.asset.evToRevenue : undefined,
            evToEbitda: prop.Order.contract.asset.evToEbitda !== undefined ? prop.Order.contract.asset.evToEbitda : undefined,
            beta: prop.Order.contract.asset.beta !== undefined ? prop.Order.contract.asset.beta : undefined,
            week52High: prop.Order.contract.asset.week52High !== undefined ? prop.Order.contract.asset.week52High : undefined,
            week52Low: prop.Order.contract.asset.week52Low !== undefined ? prop.Order.contract.asset.week52Low : undefined,
            day50MovingAverage: prop.Order.contract.asset.day50MovingAverage !== undefined ? prop.Order.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.Order.contract.asset.day200MovingAverage !== undefined ? prop.Order.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.Order.contract.asset.sharesOutstanding !== undefined ? prop.Order.contract.asset.sharesOutstanding : undefined,
            dividendDate: prop.Order.contract.asset.dividendDate !== undefined ? prop.Order.contract.asset.dividendDate : undefined,
            exDividendDate: prop.Order.contract.asset.exDividendDate !== undefined ? prop.Order.contract.asset.exDividendDate : undefined,
            askPrice: prop.Order.contract.asset.askPrice !== undefined ? prop.Order.contract.asset.askPrice : undefined,
            bidPrice: prop.Order.contract.asset.bidPrice !== undefined ? prop.Order.contract.asset.bidPrice : undefined,
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
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyTakeProfit) {
        return response.data.updateManyTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Delete a single TakeProfit record.
   * @param props - Properties to update.
   * @returns The deleted TakeProfit or null.
   */
  async delete(props: TakeProfitType): Promise<TakeProfitType> {

      const DELETE_ONE_TAKEPROFIT = gql`
      mutation deleteOneTakeProfit($where: TakeProfitWhereUniqueInput!) {
        deleteOneTakeProfit(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneTakeProfit) {
        return response.data.deleteOneTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single TakeProfit record by ID.
   * @param props - Properties to update.
   * @returns The retrieved TakeProfit or null.
   */
  async get(props: TakeProfitType): Promise<TakeProfitType | null> {

      const GET_TAKEPROFIT = gql`
      query getTakeProfit($where: TakeProfitWhereUniqueInput!) {
        getTakeProfit(where: $where) {
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
      const response = await client.query({ query: GET_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getTakeProfit ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TakeProfit found') {
        return null;
      } else {
        console.error('Error in getTakeProfit:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all TakeProfits records.
   * @returns An array of TakeProfit records or null.
   */
  async getAll(): Promise<TakeProfitType[] | null> {

      const GET_ALL_TAKEPROFIT = gql`
      query getAllTakeProfit {
        takeProfits {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_TAKEPROFIT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.takeProfits ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TakeProfit found') {
        return null;
      } else {
        console.error('Error in getTakeProfit:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple TakeProfit records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found TakeProfit records or null.
   */
  async findMany(props: TakeProfitType): Promise<TakeProfitType[] | null> {

      const FIND_MANY_TAKEPROFIT = gql`
      query findManyTakeProfit($where: TakeProfitWhereInput!) {
        takeProfits(where: $where) {
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
      const response = await client.query({ query: FIND_MANY_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.TakeProfits) {
        return response.data.takeProfits;
      } else {
       return [] as TakeProfitType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TakeProfit found') {
        return null;
      } else {
        console.error('Error in getTakeProfit:', error);
        throw error;
      }
    }
  }
};
