
  
import { Asset as AssetType } from './generated/typegraphql-prisma/models/Asset';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Asset model.
   */

  const selectionSet = `
    
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

  `;

  export const Asset = {

    /**
     * Create a new Asset record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Asset or null.
     */

    async create(props: AssetType, globalClient?: ApolloClient<any>): Promise<AssetType> {

    const client = globalClient || importedClient;

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
    Array.isArray(props.trades) && props.trades.length > 0 && props.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.trades.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.trades.map((item: any) => ({
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
      user: item.alpacaAccount.user ? 
        typeof item.alpacaAccount.user === 'object' && Object.keys(item.alpacaAccount.user).length === 1 && Object.keys(item.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.user.id !== undefined ? item.alpacaAccount.user.id : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            name: item.alpacaAccount.user.name !== undefined ? {
                equals: item.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: item.alpacaAccount.user.name !== undefined ? item.alpacaAccount.user.name : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            emailVerified: item.alpacaAccount.user.emailVerified !== undefined ? item.alpacaAccount.user.emailVerified : undefined,
            image: item.alpacaAccount.user.image !== undefined ? item.alpacaAccount.user.image : undefined,
            role: item.alpacaAccount.user.role !== undefined ? item.alpacaAccount.user.role : undefined,
            bio: item.alpacaAccount.user.bio !== undefined ? item.alpacaAccount.user.bio : undefined,
            jobTitle: item.alpacaAccount.user.jobTitle !== undefined ? item.alpacaAccount.user.jobTitle : undefined,
            currentAccount: item.alpacaAccount.user.currentAccount !== undefined ? item.alpacaAccount.user.currentAccount : undefined,
            plan: item.alpacaAccount.user.plan !== undefined ? item.alpacaAccount.user.plan : undefined,
            openaiAPIKey: item.alpacaAccount.user.openaiAPIKey !== undefined ? item.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: item.alpacaAccount.user.openaiModel !== undefined ? item.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      orders: item.alpacaAccount.orders ? 
        Array.isArray(item.alpacaAccount.orders) && item.alpacaAccount.orders.length > 0 && item.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: item.alpacaAccount.positions ? 
        Array.isArray(item.alpacaAccount.positions) && item.alpacaAccount.positions.length > 0 && item.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.positions.map((item: any) => ({
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
      alerts: item.alpacaAccount.alerts ? 
        Array.isArray(item.alpacaAccount.alerts) && item.alpacaAccount.alerts.length > 0 && item.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.alerts.map((item: any) => ({
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
    }))
  } : undefined,
  orders: props.orders ? 
    Array.isArray(props.orders) && props.orders.length > 0 && props.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.orders.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.orders.map((item: any) => ({
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
      user: item.alpacaAccount.user ? 
        typeof item.alpacaAccount.user === 'object' && Object.keys(item.alpacaAccount.user).length === 1 && Object.keys(item.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.user.id !== undefined ? item.alpacaAccount.user.id : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            name: item.alpacaAccount.user.name !== undefined ? {
                equals: item.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: item.alpacaAccount.user.name !== undefined ? item.alpacaAccount.user.name : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            emailVerified: item.alpacaAccount.user.emailVerified !== undefined ? item.alpacaAccount.user.emailVerified : undefined,
            image: item.alpacaAccount.user.image !== undefined ? item.alpacaAccount.user.image : undefined,
            role: item.alpacaAccount.user.role !== undefined ? item.alpacaAccount.user.role : undefined,
            bio: item.alpacaAccount.user.bio !== undefined ? item.alpacaAccount.user.bio : undefined,
            jobTitle: item.alpacaAccount.user.jobTitle !== undefined ? item.alpacaAccount.user.jobTitle : undefined,
            currentAccount: item.alpacaAccount.user.currentAccount !== undefined ? item.alpacaAccount.user.currentAccount : undefined,
            plan: item.alpacaAccount.user.plan !== undefined ? item.alpacaAccount.user.plan : undefined,
            openaiAPIKey: item.alpacaAccount.user.openaiAPIKey !== undefined ? item.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: item.alpacaAccount.user.openaiModel !== undefined ? item.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      trades: item.alpacaAccount.trades ? 
        Array.isArray(item.alpacaAccount.trades) && item.alpacaAccount.trades.length > 0 && item.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.trades.map((item: any) => ({
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
      positions: item.alpacaAccount.positions ? 
        Array.isArray(item.alpacaAccount.positions) && item.alpacaAccount.positions.length > 0 && item.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.positions.map((item: any) => ({
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
      alerts: item.alpacaAccount.alerts ? 
        Array.isArray(item.alpacaAccount.alerts) && item.alpacaAccount.alerts.length > 0 && item.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.alerts.map((item: any) => ({
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
      trade: item.action.trade ? 
        typeof item.action.trade === 'object' && Object.keys(item.action.trade).length === 1 && Object.keys(item.action.trade)[0] === 'id'
    ? { connect: {
            id: item.action.trade.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.action.trade.id !== undefined ? item.action.trade.id : undefined,
            alpacaAccountId: item.action.trade.alpacaAccountId !== undefined ? {
                equals: item.action.trade.alpacaAccountId 
               } : undefined,
          },
          create: {
            qty: item.action.trade.qty !== undefined ? item.action.trade.qty : undefined,
            price: item.action.trade.price !== undefined ? item.action.trade.price : undefined,
            total: item.action.trade.total !== undefined ? item.action.trade.total : undefined,
            optionType: item.action.trade.optionType !== undefined ? item.action.trade.optionType : undefined,
            signal: item.action.trade.signal !== undefined ? item.action.trade.signal : undefined,
            strategy: item.action.trade.strategy !== undefined ? item.action.trade.strategy : undefined,
            analysis: item.action.trade.analysis !== undefined ? item.action.trade.analysis : undefined,
            summary: item.action.trade.summary !== undefined ? item.action.trade.summary : undefined,
            confidence: item.action.trade.confidence !== undefined ? item.action.trade.confidence : undefined,
            timestamp: item.action.trade.timestamp !== undefined ? item.action.trade.timestamp : undefined,
            status: item.action.trade.status !== undefined ? item.action.trade.status : undefined,
          },
        }
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
      deliverables: item.contract.deliverables ? 
        Array.isArray(item.contract.deliverables) && item.contract.deliverables.length > 0 && item.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.contract.deliverables.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.contract.deliverables.map((item: any) => ({
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
      asset: item.contract.asset ? 
        typeof item.contract.asset === 'object' && Object.keys(item.contract.asset).length === 1 && Object.keys(item.contract.asset)[0] === 'id'
    ? { connect: {
            id: item.contract.asset.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.contract.asset.id !== undefined ? item.contract.asset.id : undefined,
            symbol: item.contract.asset.symbol !== undefined ? item.contract.asset.symbol : undefined,
            name: item.contract.asset.name !== undefined ? item.contract.asset.name : undefined,
          },
          create: {
            symbol: item.contract.asset.symbol !== undefined ? item.contract.asset.symbol : undefined,
            name: item.contract.asset.name !== undefined ? item.contract.asset.name : undefined,
            type: item.contract.asset.type !== undefined ? item.contract.asset.type : undefined,
            logoUrl: item.contract.asset.logoUrl !== undefined ? item.contract.asset.logoUrl : undefined,
            description: item.contract.asset.description !== undefined ? item.contract.asset.description : undefined,
            cik: item.contract.asset.cik !== undefined ? item.contract.asset.cik : undefined,
            exchange: item.contract.asset.exchange !== undefined ? item.contract.asset.exchange : undefined,
            currency: item.contract.asset.currency !== undefined ? item.contract.asset.currency : undefined,
            country: item.contract.asset.country !== undefined ? item.contract.asset.country : undefined,
            sector: item.contract.asset.sector !== undefined ? item.contract.asset.sector : undefined,
            industry: item.contract.asset.industry !== undefined ? item.contract.asset.industry : undefined,
            address: item.contract.asset.address !== undefined ? item.contract.asset.address : undefined,
            officialSite: item.contract.asset.officialSite !== undefined ? item.contract.asset.officialSite : undefined,
            fiscalYearEnd: item.contract.asset.fiscalYearEnd !== undefined ? item.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: item.contract.asset.latestQuarter !== undefined ? item.contract.asset.latestQuarter : undefined,
            marketCapitalization: item.contract.asset.marketCapitalization !== undefined ? item.contract.asset.marketCapitalization : undefined,
            ebitda: item.contract.asset.ebitda !== undefined ? item.contract.asset.ebitda : undefined,
            peRatio: item.contract.asset.peRatio !== undefined ? item.contract.asset.peRatio : undefined,
            pegRatio: item.contract.asset.pegRatio !== undefined ? item.contract.asset.pegRatio : undefined,
            bookValue: item.contract.asset.bookValue !== undefined ? item.contract.asset.bookValue : undefined,
            dividendPerShare: item.contract.asset.dividendPerShare !== undefined ? item.contract.asset.dividendPerShare : undefined,
            dividendYield: item.contract.asset.dividendYield !== undefined ? item.contract.asset.dividendYield : undefined,
            eps: item.contract.asset.eps !== undefined ? item.contract.asset.eps : undefined,
            revenuePerShareTTM: item.contract.asset.revenuePerShareTTM !== undefined ? item.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: item.contract.asset.profitMargin !== undefined ? item.contract.asset.profitMargin : undefined,
            operatingMarginTTM: item.contract.asset.operatingMarginTTM !== undefined ? item.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.contract.asset.returnOnAssetsTTM !== undefined ? item.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.contract.asset.returnOnEquityTTM !== undefined ? item.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.contract.asset.revenueTTM !== undefined ? item.contract.asset.revenueTTM : undefined,
            grossProfitTTM: item.contract.asset.grossProfitTTM !== undefined ? item.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.contract.asset.dilutedEPSTTM !== undefined ? item.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? item.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? item.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.contract.asset.analystTargetPrice !== undefined ? item.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.contract.asset.analystRatingStrongBuy !== undefined ? item.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.contract.asset.analystRatingBuy !== undefined ? item.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: item.contract.asset.analystRatingHold !== undefined ? item.contract.asset.analystRatingHold : undefined,
            analystRatingSell: item.contract.asset.analystRatingSell !== undefined ? item.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.contract.asset.analystRatingStrongSell !== undefined ? item.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: item.contract.asset.trailingPE !== undefined ? item.contract.asset.trailingPE : undefined,
            forwardPE: item.contract.asset.forwardPE !== undefined ? item.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.contract.asset.priceToSalesRatioTTM !== undefined ? item.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.contract.asset.priceToBookRatio !== undefined ? item.contract.asset.priceToBookRatio : undefined,
            evToRevenue: item.contract.asset.evToRevenue !== undefined ? item.contract.asset.evToRevenue : undefined,
            evToEbitda: item.contract.asset.evToEbitda !== undefined ? item.contract.asset.evToEbitda : undefined,
            beta: item.contract.asset.beta !== undefined ? item.contract.asset.beta : undefined,
            week52High: item.contract.asset.week52High !== undefined ? item.contract.asset.week52High : undefined,
            week52Low: item.contract.asset.week52Low !== undefined ? item.contract.asset.week52Low : undefined,
            day50MovingAverage: item.contract.asset.day50MovingAverage !== undefined ? item.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.contract.asset.day200MovingAverage !== undefined ? item.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.contract.asset.sharesOutstanding !== undefined ? item.contract.asset.sharesOutstanding : undefined,
            dividendDate: item.contract.asset.dividendDate !== undefined ? item.contract.asset.dividendDate : undefined,
            exDividendDate: item.contract.asset.exDividendDate !== undefined ? item.contract.asset.exDividendDate : undefined,
            askPrice: item.contract.asset.askPrice !== undefined ? item.contract.asset.askPrice : undefined,
            bidPrice: item.contract.asset.bidPrice !== undefined ? item.contract.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  positions: props.positions ? 
    Array.isArray(props.positions) && props.positions.length > 0 && props.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.positions.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.positions.map((item: any) => ({
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
      user: item.alpacaAccount.user ? 
        typeof item.alpacaAccount.user === 'object' && Object.keys(item.alpacaAccount.user).length === 1 && Object.keys(item.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.user.id !== undefined ? item.alpacaAccount.user.id : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            name: item.alpacaAccount.user.name !== undefined ? {
                equals: item.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: item.alpacaAccount.user.name !== undefined ? item.alpacaAccount.user.name : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            emailVerified: item.alpacaAccount.user.emailVerified !== undefined ? item.alpacaAccount.user.emailVerified : undefined,
            image: item.alpacaAccount.user.image !== undefined ? item.alpacaAccount.user.image : undefined,
            role: item.alpacaAccount.user.role !== undefined ? item.alpacaAccount.user.role : undefined,
            bio: item.alpacaAccount.user.bio !== undefined ? item.alpacaAccount.user.bio : undefined,
            jobTitle: item.alpacaAccount.user.jobTitle !== undefined ? item.alpacaAccount.user.jobTitle : undefined,
            currentAccount: item.alpacaAccount.user.currentAccount !== undefined ? item.alpacaAccount.user.currentAccount : undefined,
            plan: item.alpacaAccount.user.plan !== undefined ? item.alpacaAccount.user.plan : undefined,
            openaiAPIKey: item.alpacaAccount.user.openaiAPIKey !== undefined ? item.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: item.alpacaAccount.user.openaiModel !== undefined ? item.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      trades: item.alpacaAccount.trades ? 
        Array.isArray(item.alpacaAccount.trades) && item.alpacaAccount.trades.length > 0 && item.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.trades.map((item: any) => ({
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
      orders: item.alpacaAccount.orders ? 
        Array.isArray(item.alpacaAccount.orders) && item.alpacaAccount.orders.length > 0 && item.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      alerts: item.alpacaAccount.alerts ? 
        Array.isArray(item.alpacaAccount.alerts) && item.alpacaAccount.alerts.length > 0 && item.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.alerts.map((item: any) => ({
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
    }))
  } : undefined,
  newsMentions: props.newsMentions ? 
    Array.isArray(props.newsMentions) && props.newsMentions.length > 0 && props.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.newsMentions.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.newsMentions.map((item: any) => ({
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
  contracts: props.contracts ? 
    Array.isArray(props.contracts) && props.contracts.length > 0 && props.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.contracts.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.contracts.map((item: any) => ({
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
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? {
              set: item.order.alpacaAccount.configuration
            } : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            minOrderSize: item.order.alpacaAccount.minOrderSize !== undefined ? item.order.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.order.alpacaAccount.maxOrderSize !== undefined ? item.order.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      action: item.order.action ? 
        typeof item.order.action === 'object' && Object.keys(item.order.action).length === 1 && Object.keys(item.order.action)[0] === 'id'
    ? { connect: {
            id: item.order.action.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.action.id !== undefined ? item.order.action.id : undefined,
            tradeId: item.order.action.tradeId !== undefined ? {
                equals: item.order.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.order.action.sequence !== undefined ? item.order.action.sequence : undefined,
            type: item.order.action.type !== undefined ? item.order.action.type : undefined,
            note: item.order.action.note !== undefined ? item.order.action.note : undefined,
            status: item.order.action.status !== undefined ? item.order.action.status : undefined,
            fee: item.order.action.fee !== undefined ? item.order.action.fee : undefined,
            dependsOn: item.order.action.dependsOn !== undefined ? {
              set: item.order.action.dependsOn
            } : undefined,
            dependedOnBy: item.order.action.dependedOnBy !== undefined ? {
              set: item.order.action.dependedOnBy
            } : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
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
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AssetType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

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
   * @param globalClient - Apollo Client instance.
   * @returns The updated Asset or null.
   */
  async update(props: AssetType, globalClient?: ApolloClient<any>): Promise<AssetType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_ASSET = gql`
      mutation updateOneAsset($data: AssetUpdateInput!, $where: AssetWhereUniqueInput!) {
        updateOneAsset(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  name: props.name !== undefined ? props.name : undefined,
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
  trades: props.trades !== undefined ? {
    set: props.trades
  } : undefined,
  orders: props.orders !== undefined ? {
    set: props.orders
  } : undefined,
  positions: props.positions !== undefined ? {
    set: props.positions
  } : undefined,
  newsMentions: props.newsMentions !== undefined ? {
    set: props.newsMentions
  } : undefined,
  contracts: props.contracts !== undefined ? {
    set: props.contracts
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
   * Upsert a single Asset record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Asset or null.
   */
  async upsert(props: AssetType, globalClient?: ApolloClient<any>): Promise<AssetType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_ASSET = gql`
      mutation upsertOneAsset($where: AssetWhereUniqueInput!, $create: AssetCreateInput!, $update: AssetUpdateInput!) {
        upsertOneAsset(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  name: props.name !== undefined ? props.name : undefined,
      },
      create: {
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
    Array.isArray(props.trades) && props.trades.length > 0 && props.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.trades.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.trades.map((item: any) => ({
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
      user: item.alpacaAccount.user ? 
        typeof item.alpacaAccount.user === 'object' && Object.keys(item.alpacaAccount.user).length === 1 && Object.keys(item.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.user.id !== undefined ? item.alpacaAccount.user.id : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            name: item.alpacaAccount.user.name !== undefined ? {
                equals: item.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: item.alpacaAccount.user.name !== undefined ? item.alpacaAccount.user.name : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            emailVerified: item.alpacaAccount.user.emailVerified !== undefined ? item.alpacaAccount.user.emailVerified : undefined,
            image: item.alpacaAccount.user.image !== undefined ? item.alpacaAccount.user.image : undefined,
            role: item.alpacaAccount.user.role !== undefined ? item.alpacaAccount.user.role : undefined,
            bio: item.alpacaAccount.user.bio !== undefined ? item.alpacaAccount.user.bio : undefined,
            jobTitle: item.alpacaAccount.user.jobTitle !== undefined ? item.alpacaAccount.user.jobTitle : undefined,
            currentAccount: item.alpacaAccount.user.currentAccount !== undefined ? item.alpacaAccount.user.currentAccount : undefined,
            plan: item.alpacaAccount.user.plan !== undefined ? item.alpacaAccount.user.plan : undefined,
            openaiAPIKey: item.alpacaAccount.user.openaiAPIKey !== undefined ? item.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: item.alpacaAccount.user.openaiModel !== undefined ? item.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      orders: item.alpacaAccount.orders ? 
        Array.isArray(item.alpacaAccount.orders) && item.alpacaAccount.orders.length > 0 && item.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: item.alpacaAccount.positions ? 
        Array.isArray(item.alpacaAccount.positions) && item.alpacaAccount.positions.length > 0 && item.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.positions.map((item: any) => ({
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
      alerts: item.alpacaAccount.alerts ? 
        Array.isArray(item.alpacaAccount.alerts) && item.alpacaAccount.alerts.length > 0 && item.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.alerts.map((item: any) => ({
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
    }))
  } : undefined,
  orders: props.orders ? 
    Array.isArray(props.orders) && props.orders.length > 0 && props.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.orders.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.orders.map((item: any) => ({
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
      user: item.alpacaAccount.user ? 
        typeof item.alpacaAccount.user === 'object' && Object.keys(item.alpacaAccount.user).length === 1 && Object.keys(item.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.user.id !== undefined ? item.alpacaAccount.user.id : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            name: item.alpacaAccount.user.name !== undefined ? {
                equals: item.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: item.alpacaAccount.user.name !== undefined ? item.alpacaAccount.user.name : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            emailVerified: item.alpacaAccount.user.emailVerified !== undefined ? item.alpacaAccount.user.emailVerified : undefined,
            image: item.alpacaAccount.user.image !== undefined ? item.alpacaAccount.user.image : undefined,
            role: item.alpacaAccount.user.role !== undefined ? item.alpacaAccount.user.role : undefined,
            bio: item.alpacaAccount.user.bio !== undefined ? item.alpacaAccount.user.bio : undefined,
            jobTitle: item.alpacaAccount.user.jobTitle !== undefined ? item.alpacaAccount.user.jobTitle : undefined,
            currentAccount: item.alpacaAccount.user.currentAccount !== undefined ? item.alpacaAccount.user.currentAccount : undefined,
            plan: item.alpacaAccount.user.plan !== undefined ? item.alpacaAccount.user.plan : undefined,
            openaiAPIKey: item.alpacaAccount.user.openaiAPIKey !== undefined ? item.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: item.alpacaAccount.user.openaiModel !== undefined ? item.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      trades: item.alpacaAccount.trades ? 
        Array.isArray(item.alpacaAccount.trades) && item.alpacaAccount.trades.length > 0 && item.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.trades.map((item: any) => ({
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
      positions: item.alpacaAccount.positions ? 
        Array.isArray(item.alpacaAccount.positions) && item.alpacaAccount.positions.length > 0 && item.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.positions.map((item: any) => ({
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
      alerts: item.alpacaAccount.alerts ? 
        Array.isArray(item.alpacaAccount.alerts) && item.alpacaAccount.alerts.length > 0 && item.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.alerts.map((item: any) => ({
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
      trade: item.action.trade ? 
        typeof item.action.trade === 'object' && Object.keys(item.action.trade).length === 1 && Object.keys(item.action.trade)[0] === 'id'
    ? { connect: {
            id: item.action.trade.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.action.trade.id !== undefined ? item.action.trade.id : undefined,
            alpacaAccountId: item.action.trade.alpacaAccountId !== undefined ? {
                equals: item.action.trade.alpacaAccountId 
               } : undefined,
          },
          create: {
            qty: item.action.trade.qty !== undefined ? item.action.trade.qty : undefined,
            price: item.action.trade.price !== undefined ? item.action.trade.price : undefined,
            total: item.action.trade.total !== undefined ? item.action.trade.total : undefined,
            optionType: item.action.trade.optionType !== undefined ? item.action.trade.optionType : undefined,
            signal: item.action.trade.signal !== undefined ? item.action.trade.signal : undefined,
            strategy: item.action.trade.strategy !== undefined ? item.action.trade.strategy : undefined,
            analysis: item.action.trade.analysis !== undefined ? item.action.trade.analysis : undefined,
            summary: item.action.trade.summary !== undefined ? item.action.trade.summary : undefined,
            confidence: item.action.trade.confidence !== undefined ? item.action.trade.confidence : undefined,
            timestamp: item.action.trade.timestamp !== undefined ? item.action.trade.timestamp : undefined,
            status: item.action.trade.status !== undefined ? item.action.trade.status : undefined,
          },
        }
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
      deliverables: item.contract.deliverables ? 
        Array.isArray(item.contract.deliverables) && item.contract.deliverables.length > 0 && item.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.contract.deliverables.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.contract.deliverables.map((item: any) => ({
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
      asset: item.contract.asset ? 
        typeof item.contract.asset === 'object' && Object.keys(item.contract.asset).length === 1 && Object.keys(item.contract.asset)[0] === 'id'
    ? { connect: {
            id: item.contract.asset.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.contract.asset.id !== undefined ? item.contract.asset.id : undefined,
            symbol: item.contract.asset.symbol !== undefined ? item.contract.asset.symbol : undefined,
            name: item.contract.asset.name !== undefined ? item.contract.asset.name : undefined,
          },
          create: {
            symbol: item.contract.asset.symbol !== undefined ? item.contract.asset.symbol : undefined,
            name: item.contract.asset.name !== undefined ? item.contract.asset.name : undefined,
            type: item.contract.asset.type !== undefined ? item.contract.asset.type : undefined,
            logoUrl: item.contract.asset.logoUrl !== undefined ? item.contract.asset.logoUrl : undefined,
            description: item.contract.asset.description !== undefined ? item.contract.asset.description : undefined,
            cik: item.contract.asset.cik !== undefined ? item.contract.asset.cik : undefined,
            exchange: item.contract.asset.exchange !== undefined ? item.contract.asset.exchange : undefined,
            currency: item.contract.asset.currency !== undefined ? item.contract.asset.currency : undefined,
            country: item.contract.asset.country !== undefined ? item.contract.asset.country : undefined,
            sector: item.contract.asset.sector !== undefined ? item.contract.asset.sector : undefined,
            industry: item.contract.asset.industry !== undefined ? item.contract.asset.industry : undefined,
            address: item.contract.asset.address !== undefined ? item.contract.asset.address : undefined,
            officialSite: item.contract.asset.officialSite !== undefined ? item.contract.asset.officialSite : undefined,
            fiscalYearEnd: item.contract.asset.fiscalYearEnd !== undefined ? item.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: item.contract.asset.latestQuarter !== undefined ? item.contract.asset.latestQuarter : undefined,
            marketCapitalization: item.contract.asset.marketCapitalization !== undefined ? item.contract.asset.marketCapitalization : undefined,
            ebitda: item.contract.asset.ebitda !== undefined ? item.contract.asset.ebitda : undefined,
            peRatio: item.contract.asset.peRatio !== undefined ? item.contract.asset.peRatio : undefined,
            pegRatio: item.contract.asset.pegRatio !== undefined ? item.contract.asset.pegRatio : undefined,
            bookValue: item.contract.asset.bookValue !== undefined ? item.contract.asset.bookValue : undefined,
            dividendPerShare: item.contract.asset.dividendPerShare !== undefined ? item.contract.asset.dividendPerShare : undefined,
            dividendYield: item.contract.asset.dividendYield !== undefined ? item.contract.asset.dividendYield : undefined,
            eps: item.contract.asset.eps !== undefined ? item.contract.asset.eps : undefined,
            revenuePerShareTTM: item.contract.asset.revenuePerShareTTM !== undefined ? item.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: item.contract.asset.profitMargin !== undefined ? item.contract.asset.profitMargin : undefined,
            operatingMarginTTM: item.contract.asset.operatingMarginTTM !== undefined ? item.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.contract.asset.returnOnAssetsTTM !== undefined ? item.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.contract.asset.returnOnEquityTTM !== undefined ? item.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.contract.asset.revenueTTM !== undefined ? item.contract.asset.revenueTTM : undefined,
            grossProfitTTM: item.contract.asset.grossProfitTTM !== undefined ? item.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.contract.asset.dilutedEPSTTM !== undefined ? item.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? item.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? item.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.contract.asset.analystTargetPrice !== undefined ? item.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.contract.asset.analystRatingStrongBuy !== undefined ? item.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.contract.asset.analystRatingBuy !== undefined ? item.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: item.contract.asset.analystRatingHold !== undefined ? item.contract.asset.analystRatingHold : undefined,
            analystRatingSell: item.contract.asset.analystRatingSell !== undefined ? item.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.contract.asset.analystRatingStrongSell !== undefined ? item.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: item.contract.asset.trailingPE !== undefined ? item.contract.asset.trailingPE : undefined,
            forwardPE: item.contract.asset.forwardPE !== undefined ? item.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.contract.asset.priceToSalesRatioTTM !== undefined ? item.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.contract.asset.priceToBookRatio !== undefined ? item.contract.asset.priceToBookRatio : undefined,
            evToRevenue: item.contract.asset.evToRevenue !== undefined ? item.contract.asset.evToRevenue : undefined,
            evToEbitda: item.contract.asset.evToEbitda !== undefined ? item.contract.asset.evToEbitda : undefined,
            beta: item.contract.asset.beta !== undefined ? item.contract.asset.beta : undefined,
            week52High: item.contract.asset.week52High !== undefined ? item.contract.asset.week52High : undefined,
            week52Low: item.contract.asset.week52Low !== undefined ? item.contract.asset.week52Low : undefined,
            day50MovingAverage: item.contract.asset.day50MovingAverage !== undefined ? item.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.contract.asset.day200MovingAverage !== undefined ? item.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.contract.asset.sharesOutstanding !== undefined ? item.contract.asset.sharesOutstanding : undefined,
            dividendDate: item.contract.asset.dividendDate !== undefined ? item.contract.asset.dividendDate : undefined,
            exDividendDate: item.contract.asset.exDividendDate !== undefined ? item.contract.asset.exDividendDate : undefined,
            askPrice: item.contract.asset.askPrice !== undefined ? item.contract.asset.askPrice : undefined,
            bidPrice: item.contract.asset.bidPrice !== undefined ? item.contract.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  positions: props.positions ? 
    Array.isArray(props.positions) && props.positions.length > 0 && props.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.positions.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.positions.map((item: any) => ({
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
      user: item.alpacaAccount.user ? 
        typeof item.alpacaAccount.user === 'object' && Object.keys(item.alpacaAccount.user).length === 1 && Object.keys(item.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.user.id !== undefined ? item.alpacaAccount.user.id : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            name: item.alpacaAccount.user.name !== undefined ? {
                equals: item.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: item.alpacaAccount.user.name !== undefined ? item.alpacaAccount.user.name : undefined,
            email: item.alpacaAccount.user.email !== undefined ? item.alpacaAccount.user.email : undefined,
            emailVerified: item.alpacaAccount.user.emailVerified !== undefined ? item.alpacaAccount.user.emailVerified : undefined,
            image: item.alpacaAccount.user.image !== undefined ? item.alpacaAccount.user.image : undefined,
            role: item.alpacaAccount.user.role !== undefined ? item.alpacaAccount.user.role : undefined,
            bio: item.alpacaAccount.user.bio !== undefined ? item.alpacaAccount.user.bio : undefined,
            jobTitle: item.alpacaAccount.user.jobTitle !== undefined ? item.alpacaAccount.user.jobTitle : undefined,
            currentAccount: item.alpacaAccount.user.currentAccount !== undefined ? item.alpacaAccount.user.currentAccount : undefined,
            plan: item.alpacaAccount.user.plan !== undefined ? item.alpacaAccount.user.plan : undefined,
            openaiAPIKey: item.alpacaAccount.user.openaiAPIKey !== undefined ? item.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: item.alpacaAccount.user.openaiModel !== undefined ? item.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      trades: item.alpacaAccount.trades ? 
        Array.isArray(item.alpacaAccount.trades) && item.alpacaAccount.trades.length > 0 && item.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.trades.map((item: any) => ({
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
      orders: item.alpacaAccount.orders ? 
        Array.isArray(item.alpacaAccount.orders) && item.alpacaAccount.orders.length > 0 && item.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      alerts: item.alpacaAccount.alerts ? 
        Array.isArray(item.alpacaAccount.alerts) && item.alpacaAccount.alerts.length > 0 && item.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.alpacaAccount.alerts.map((item: any) => ({
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
    }))
  } : undefined,
  newsMentions: props.newsMentions ? 
    Array.isArray(props.newsMentions) && props.newsMentions.length > 0 && props.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.newsMentions.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.newsMentions.map((item: any) => ({
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
  contracts: props.contracts ? 
    Array.isArray(props.contracts) && props.contracts.length > 0 && props.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.contracts.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.contracts.map((item: any) => ({
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
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? {
              set: item.order.alpacaAccount.configuration
            } : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            minOrderSize: item.order.alpacaAccount.minOrderSize !== undefined ? item.order.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.order.alpacaAccount.maxOrderSize !== undefined ? item.order.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      action: item.order.action ? 
        typeof item.order.action === 'object' && Object.keys(item.order.action).length === 1 && Object.keys(item.order.action)[0] === 'id'
    ? { connect: {
            id: item.order.action.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.action.id !== undefined ? item.order.action.id : undefined,
            tradeId: item.order.action.tradeId !== undefined ? {
                equals: item.order.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.order.action.sequence !== undefined ? item.order.action.sequence : undefined,
            type: item.order.action.type !== undefined ? item.order.action.type : undefined,
            note: item.order.action.note !== undefined ? item.order.action.note : undefined,
            status: item.order.action.status !== undefined ? item.order.action.status : undefined,
            fee: item.order.action.fee !== undefined ? item.order.action.fee : undefined,
            dependsOn: item.order.action.dependsOn !== undefined ? {
              set: item.order.action.dependsOn
            } : undefined,
            dependedOnBy: item.order.action.dependedOnBy !== undefined ? {
              set: item.order.action.dependedOnBy
            } : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
      },
      update: {
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
  trades: props.trades !== undefined ? {
    set: props.trades
  } : undefined,
  orders: props.orders !== undefined ? {
    set: props.orders
  } : undefined,
  positions: props.positions !== undefined ? {
    set: props.positions
  } : undefined,
  newsMentions: props.newsMentions !== undefined ? {
    set: props.newsMentions
  } : undefined,
  contracts: props.contracts !== undefined ? {
    set: props.contracts
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneAsset) {
        return response.data.upsertOneAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneAsset:', error);
      throw error;
    }
  },

  /**
   * Update multiple Asset records.
   * @param props - Array of Asset objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: AssetType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_ASSET = gql`
      mutation updateManyAsset($data: [AssetCreateManyInput!]!) {
        updateManyAsset(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  name: prop.name !== undefined ? prop.name : undefined,

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
  trades: prop.trades !== undefined ? {
    set: prop.trades
  } : undefined,
  orders: prop.orders !== undefined ? {
    set: prop.orders
  } : undefined,
  positions: prop.positions !== undefined ? {
    set: prop.positions
  } : undefined,
  newsMentions: prop.newsMentions !== undefined ? {
    set: prop.newsMentions
  } : undefined,
  contracts: prop.contracts !== undefined ? {
    set: prop.contracts
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
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Asset or null.
   */
  async delete(props: AssetType, globalClient?: ApolloClient<any>): Promise<AssetType> {

    const client = globalClient || importedClient;

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
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Asset or null.
   */
  async get(props: AssetType, globalClient?: ApolloClient<any>): Promise<AssetType | null> {

    const client = globalClient || importedClient;

    const GET_ASSET = gql`
      query getAsset($where: AssetWhereUniqueInput!) {
        getAsset(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  name: props.name !== undefined ? props.name : undefined,
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
   * @param globalClient - Apollo Client instance.
   * @returns An array of Asset records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<AssetType[] | null> {

    const client = globalClient || importedClient;

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
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Asset records or null.
   */
  async findMany(props: AssetType, globalClient?: ApolloClient<any>): Promise<AssetType[] | null> {

    const client = globalClient || importedClient;

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
