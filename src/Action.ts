
  
import { Action as ActionType } from './generated/typegraphql-prisma/models/Action';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Action model.
   */

  const selectionSet = `
    
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
    filledQty
    filledAvgPrice
    cancelRequestedAt
    canceledAt
    actionId
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
    fee
    strikePrice
    expirationDate
    optionType
    stopLossId
    takeProfitId
    contractId
  }
  dependsOn
  dependedOnBy

  `;

  export const Action = {

    /**
     * Create a new Action record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Action or null.
     */

    async create(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_ACTION = gql`
        mutation createOneAction($data: ActionCreateInput!) {
          createOneAction(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            sequence: props.sequence !== undefined ? props.sequence : undefined,
  type: props.type !== undefined ? props.type : undefined,
  note: props.note !== undefined ? props.note : undefined,
  status: props.status !== undefined ? props.status : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  dependsOn: props.dependsOn !== undefined ? {
    set: props.dependsOn
  } : undefined,
  dependedOnBy: props.dependedOnBy !== undefined ? {
    set: props.dependedOnBy
  } : undefined,
  trade: props.trade ? 
    typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && Object.keys(props.trade)[0] === 'id'
    ? { connect: {
        id: props.trade.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.trade.id !== undefined ? props.trade.id : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId 
           } : undefined,
      },
      create: {
        qty: props.trade.qty !== undefined ? props.trade.qty : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        optionType: props.trade.optionType !== undefined ? props.trade.optionType : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
    alpacaAccount: props.trade.alpacaAccount ? 
      typeof props.trade.alpacaAccount === 'object' && Object.keys(props.trade.alpacaAccount).length === 1 && Object.keys(props.trade.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.trade.alpacaAccount.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.trade.alpacaAccount.id !== undefined ? props.trade.alpacaAccount.id : undefined,
          userId: props.trade.alpacaAccount.userId !== undefined ? {
              equals: props.trade.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: props.trade.alpacaAccount.type !== undefined ? props.trade.alpacaAccount.type : undefined,
          APIKey: props.trade.alpacaAccount.APIKey !== undefined ? props.trade.alpacaAccount.APIKey : undefined,
          APISecret: props.trade.alpacaAccount.APISecret !== undefined ? props.trade.alpacaAccount.APISecret : undefined,
          configuration: props.trade.alpacaAccount.configuration !== undefined ? {
            set: props.trade.alpacaAccount.configuration
          } : undefined,
          marketOpen: props.trade.alpacaAccount.marketOpen !== undefined ? props.trade.alpacaAccount.marketOpen : undefined,
          realTime: props.trade.alpacaAccount.realTime !== undefined ? props.trade.alpacaAccount.realTime : undefined,
          minOrderSize: props.trade.alpacaAccount.minOrderSize !== undefined ? props.trade.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.trade.alpacaAccount.maxOrderSize !== undefined ? props.trade.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.trade.alpacaAccount.minPercentageChange !== undefined ? props.trade.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.trade.alpacaAccount.volumeThreshold !== undefined ? props.trade.alpacaAccount.volumeThreshold : undefined,
      user: props.trade.alpacaAccount.user ? 
        typeof props.trade.alpacaAccount.user === 'object' && Object.keys(props.trade.alpacaAccount.user).length === 1 && Object.keys(props.trade.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.trade.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.trade.alpacaAccount.user.id !== undefined ? props.trade.alpacaAccount.user.id : undefined,
            email: props.trade.alpacaAccount.user.email !== undefined ? props.trade.alpacaAccount.user.email : undefined,
            name: props.trade.alpacaAccount.user.name !== undefined ? {
                equals: props.trade.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.trade.alpacaAccount.user.name !== undefined ? props.trade.alpacaAccount.user.name : undefined,
            email: props.trade.alpacaAccount.user.email !== undefined ? props.trade.alpacaAccount.user.email : undefined,
            emailVerified: props.trade.alpacaAccount.user.emailVerified !== undefined ? props.trade.alpacaAccount.user.emailVerified : undefined,
            image: props.trade.alpacaAccount.user.image !== undefined ? props.trade.alpacaAccount.user.image : undefined,
            role: props.trade.alpacaAccount.user.role !== undefined ? props.trade.alpacaAccount.user.role : undefined,
            bio: props.trade.alpacaAccount.user.bio !== undefined ? props.trade.alpacaAccount.user.bio : undefined,
            jobTitle: props.trade.alpacaAccount.user.jobTitle !== undefined ? props.trade.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.trade.alpacaAccount.user.currentAccount !== undefined ? props.trade.alpacaAccount.user.currentAccount : undefined,
            plan: props.trade.alpacaAccount.user.plan !== undefined ? props.trade.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.trade.alpacaAccount.user.openaiAPIKey !== undefined ? props.trade.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.trade.alpacaAccount.user.openaiModel !== undefined ? props.trade.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      orders: props.trade.alpacaAccount.orders ? 
        Array.isArray(props.trade.alpacaAccount.orders) && props.trade.alpacaAccount.orders.length > 0 && props.trade.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.alpacaAccount.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.alpacaAccount.orders.map((item: any) => ({
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
      positions: props.trade.alpacaAccount.positions ? 
        Array.isArray(props.trade.alpacaAccount.positions) && props.trade.alpacaAccount.positions.length > 0 && props.trade.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.alpacaAccount.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.trade.alpacaAccount.alerts ? 
        Array.isArray(props.trade.alpacaAccount.alerts) && props.trade.alpacaAccount.alerts.length > 0 && props.trade.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.alpacaAccount.alerts.map((item: any) => ({
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
    asset: props.trade.asset ? 
      typeof props.trade.asset === 'object' && Object.keys(props.trade.asset).length === 1 && Object.keys(props.trade.asset)[0] === 'id'
    ? { connect: {
          id: props.trade.asset.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.trade.asset.id !== undefined ? props.trade.asset.id : undefined,
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
        },
        create: {
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
          type: props.trade.asset.type !== undefined ? props.trade.asset.type : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? props.trade.asset.logoUrl : undefined,
          description: props.trade.asset.description !== undefined ? props.trade.asset.description : undefined,
          cik: props.trade.asset.cik !== undefined ? props.trade.asset.cik : undefined,
          exchange: props.trade.asset.exchange !== undefined ? props.trade.asset.exchange : undefined,
          currency: props.trade.asset.currency !== undefined ? props.trade.asset.currency : undefined,
          country: props.trade.asset.country !== undefined ? props.trade.asset.country : undefined,
          sector: props.trade.asset.sector !== undefined ? props.trade.asset.sector : undefined,
          industry: props.trade.asset.industry !== undefined ? props.trade.asset.industry : undefined,
          address: props.trade.asset.address !== undefined ? props.trade.asset.address : undefined,
          officialSite: props.trade.asset.officialSite !== undefined ? props.trade.asset.officialSite : undefined,
          fiscalYearEnd: props.trade.asset.fiscalYearEnd !== undefined ? props.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: props.trade.asset.latestQuarter !== undefined ? props.trade.asset.latestQuarter : undefined,
          marketCapitalization: props.trade.asset.marketCapitalization !== undefined ? props.trade.asset.marketCapitalization : undefined,
          ebitda: props.trade.asset.ebitda !== undefined ? props.trade.asset.ebitda : undefined,
          peRatio: props.trade.asset.peRatio !== undefined ? props.trade.asset.peRatio : undefined,
          pegRatio: props.trade.asset.pegRatio !== undefined ? props.trade.asset.pegRatio : undefined,
          bookValue: props.trade.asset.bookValue !== undefined ? props.trade.asset.bookValue : undefined,
          dividendPerShare: props.trade.asset.dividendPerShare !== undefined ? props.trade.asset.dividendPerShare : undefined,
          dividendYield: props.trade.asset.dividendYield !== undefined ? props.trade.asset.dividendYield : undefined,
          eps: props.trade.asset.eps !== undefined ? props.trade.asset.eps : undefined,
          revenuePerShareTTM: props.trade.asset.revenuePerShareTTM !== undefined ? props.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: props.trade.asset.profitMargin !== undefined ? props.trade.asset.profitMargin : undefined,
          operatingMarginTTM: props.trade.asset.operatingMarginTTM !== undefined ? props.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.trade.asset.returnOnAssetsTTM !== undefined ? props.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.trade.asset.returnOnEquityTTM !== undefined ? props.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.trade.asset.revenueTTM !== undefined ? props.trade.asset.revenueTTM : undefined,
          grossProfitTTM: props.trade.asset.grossProfitTTM !== undefined ? props.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.trade.asset.dilutedEPSTTM !== undefined ? props.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.trade.asset.analystTargetPrice !== undefined ? props.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.trade.asset.analystRatingStrongBuy !== undefined ? props.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.trade.asset.analystRatingBuy !== undefined ? props.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: props.trade.asset.analystRatingHold !== undefined ? props.trade.asset.analystRatingHold : undefined,
          analystRatingSell: props.trade.asset.analystRatingSell !== undefined ? props.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.trade.asset.analystRatingStrongSell !== undefined ? props.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: props.trade.asset.trailingPE !== undefined ? props.trade.asset.trailingPE : undefined,
          forwardPE: props.trade.asset.forwardPE !== undefined ? props.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.trade.asset.priceToSalesRatioTTM !== undefined ? props.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.trade.asset.priceToBookRatio !== undefined ? props.trade.asset.priceToBookRatio : undefined,
          evToRevenue: props.trade.asset.evToRevenue !== undefined ? props.trade.asset.evToRevenue : undefined,
          evToEbitda: props.trade.asset.evToEbitda !== undefined ? props.trade.asset.evToEbitda : undefined,
          beta: props.trade.asset.beta !== undefined ? props.trade.asset.beta : undefined,
          week52High: props.trade.asset.week52High !== undefined ? props.trade.asset.week52High : undefined,
          week52Low: props.trade.asset.week52Low !== undefined ? props.trade.asset.week52Low : undefined,
          day50MovingAverage: props.trade.asset.day50MovingAverage !== undefined ? props.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.trade.asset.day200MovingAverage !== undefined ? props.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.trade.asset.sharesOutstanding !== undefined ? props.trade.asset.sharesOutstanding : undefined,
          dividendDate: props.trade.asset.dividendDate !== undefined ? props.trade.asset.dividendDate : undefined,
          exDividendDate: props.trade.asset.exDividendDate !== undefined ? props.trade.asset.exDividendDate : undefined,
          askPrice: props.trade.asset.askPrice !== undefined ? props.trade.asset.askPrice : undefined,
          bidPrice: props.trade.asset.bidPrice !== undefined ? props.trade.asset.bidPrice : undefined,
      orders: props.trade.asset.orders ? 
        Array.isArray(props.trade.asset.orders) && props.trade.asset.orders.length > 0 && props.trade.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.asset.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.asset.orders.map((item: any) => ({
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
      positions: props.trade.asset.positions ? 
        Array.isArray(props.trade.asset.positions) && props.trade.asset.positions.length > 0 && props.trade.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.asset.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.asset.positions.map((item: any) => ({
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
      newsMentions: props.trade.asset.newsMentions ? 
        Array.isArray(props.trade.asset.newsMentions) && props.trade.asset.newsMentions.length > 0 && props.trade.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.asset.newsMentions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.asset.newsMentions.map((item: any) => ({
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
      contracts: props.trade.asset.contracts ? 
        Array.isArray(props.trade.asset.contracts) && props.trade.asset.contracts.length > 0 && props.trade.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.asset.contracts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.asset.contracts.map((item: any) => ({
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
      },
    }
  } : undefined,
  order: props.order ? 
    typeof props.order === 'object' && Object.keys(props.order).length === 1 && Object.keys(props.order)[0] === 'id'
    ? { connect: {
        id: props.order.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.order.id !== undefined ? props.order.id : undefined,
        clientOrderId: props.order.clientOrderId !== undefined ? props.order.clientOrderId : undefined,
        actionId: props.order.actionId !== undefined ? props.order.actionId : undefined,
        stopLossId: props.order.stopLossId !== undefined ? props.order.stopLossId : undefined,
        contractId: props.order.contractId !== undefined ? props.order.contractId : undefined,
        alpacaAccountId: props.order.alpacaAccountId !== undefined ? {
            equals: props.order.alpacaAccountId 
           } : undefined,
      },
      create: {
        clientOrderId: props.order.clientOrderId !== undefined ? props.order.clientOrderId : undefined,
        qty: props.order.qty !== undefined ? props.order.qty : undefined,
        notional: props.order.notional !== undefined ? props.order.notional : undefined,
        side: props.order.side !== undefined ? props.order.side : undefined,
        type: props.order.type !== undefined ? props.order.type : undefined,
        orderClass: props.order.orderClass !== undefined ? props.order.orderClass : undefined,
        timeInForce: props.order.timeInForce !== undefined ? props.order.timeInForce : undefined,
        limitPrice: props.order.limitPrice !== undefined ? props.order.limitPrice : undefined,
        stopPrice: props.order.stopPrice !== undefined ? props.order.stopPrice : undefined,
        trailPrice: props.order.trailPrice !== undefined ? props.order.trailPrice : undefined,
        trailPercent: props.order.trailPercent !== undefined ? props.order.trailPercent : undefined,
        extendedHours: props.order.extendedHours !== undefined ? props.order.extendedHours : undefined,
        status: props.order.status !== undefined ? props.order.status : undefined,
        submittedAt: props.order.submittedAt !== undefined ? props.order.submittedAt : undefined,
        filledAt: props.order.filledAt !== undefined ? props.order.filledAt : undefined,
        filledQty: props.order.filledQty !== undefined ? props.order.filledQty : undefined,
        filledAvgPrice: props.order.filledAvgPrice !== undefined ? props.order.filledAvgPrice : undefined,
        cancelRequestedAt: props.order.cancelRequestedAt !== undefined ? props.order.cancelRequestedAt : undefined,
        canceledAt: props.order.canceledAt !== undefined ? props.order.canceledAt : undefined,
        fee: props.order.fee !== undefined ? props.order.fee : undefined,
        strikePrice: props.order.strikePrice !== undefined ? props.order.strikePrice : undefined,
        expirationDate: props.order.expirationDate !== undefined ? props.order.expirationDate : undefined,
        optionType: props.order.optionType !== undefined ? props.order.optionType : undefined,
        stopLossId: props.order.stopLossId !== undefined ? props.order.stopLossId : undefined,
        takeProfitId: props.order.takeProfitId !== undefined ? props.order.takeProfitId : undefined,
    stopLoss: props.order.stopLoss ? 
      typeof props.order.stopLoss === 'object' && Object.keys(props.order.stopLoss).length === 1 && Object.keys(props.order.stopLoss)[0] === 'id'
    ? { connect: {
          id: props.order.stopLoss.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.stopLoss.id !== undefined ? props.order.stopLoss.id : undefined,
          orderId: props.order.stopLoss.orderId !== undefined ? props.order.stopLoss.orderId : undefined,
        },
        create: {
          stopPrice: props.order.stopLoss.stopPrice !== undefined ? props.order.stopLoss.stopPrice : undefined,
          limitPrice: props.order.stopLoss.limitPrice !== undefined ? props.order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: props.order.takeProfit ? 
      typeof props.order.takeProfit === 'object' && Object.keys(props.order.takeProfit).length === 1 && Object.keys(props.order.takeProfit)[0] === 'id'
    ? { connect: {
          id: props.order.takeProfit.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.takeProfit.id !== undefined ? props.order.takeProfit.id : undefined,
          orderId: props.order.takeProfit.orderId !== undefined ? props.order.takeProfit.orderId : undefined,
        },
        create: {
          limitPrice: props.order.takeProfit.limitPrice !== undefined ? props.order.takeProfit.limitPrice : undefined,
          stopPrice: props.order.takeProfit.stopPrice !== undefined ? props.order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.order.alpacaAccount ? 
      typeof props.order.alpacaAccount === 'object' && Object.keys(props.order.alpacaAccount).length === 1 && Object.keys(props.order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.order.alpacaAccount.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.alpacaAccount.id !== undefined ? props.order.alpacaAccount.id : undefined,
          userId: props.order.alpacaAccount.userId !== undefined ? {
              equals: props.order.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: props.order.alpacaAccount.type !== undefined ? props.order.alpacaAccount.type : undefined,
          APIKey: props.order.alpacaAccount.APIKey !== undefined ? props.order.alpacaAccount.APIKey : undefined,
          APISecret: props.order.alpacaAccount.APISecret !== undefined ? props.order.alpacaAccount.APISecret : undefined,
          configuration: props.order.alpacaAccount.configuration !== undefined ? {
            set: props.order.alpacaAccount.configuration
          } : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? props.order.alpacaAccount.marketOpen : undefined,
          realTime: props.order.alpacaAccount.realTime !== undefined ? props.order.alpacaAccount.realTime : undefined,
          minOrderSize: props.order.alpacaAccount.minOrderSize !== undefined ? props.order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.order.alpacaAccount.maxOrderSize !== undefined ? props.order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
      user: props.order.alpacaAccount.user ? 
        typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && Object.keys(props.order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.order.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.order.alpacaAccount.user.id !== undefined ? props.order.alpacaAccount.user.id : undefined,
            email: props.order.alpacaAccount.user.email !== undefined ? props.order.alpacaAccount.user.email : undefined,
            name: props.order.alpacaAccount.user.name !== undefined ? {
                equals: props.order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.order.alpacaAccount.user.name !== undefined ? props.order.alpacaAccount.user.name : undefined,
            email: props.order.alpacaAccount.user.email !== undefined ? props.order.alpacaAccount.user.email : undefined,
            emailVerified: props.order.alpacaAccount.user.emailVerified !== undefined ? props.order.alpacaAccount.user.emailVerified : undefined,
            image: props.order.alpacaAccount.user.image !== undefined ? props.order.alpacaAccount.user.image : undefined,
            role: props.order.alpacaAccount.user.role !== undefined ? props.order.alpacaAccount.user.role : undefined,
            bio: props.order.alpacaAccount.user.bio !== undefined ? props.order.alpacaAccount.user.bio : undefined,
            jobTitle: props.order.alpacaAccount.user.jobTitle !== undefined ? props.order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.order.alpacaAccount.user.currentAccount !== undefined ? props.order.alpacaAccount.user.currentAccount : undefined,
            plan: props.order.alpacaAccount.user.plan !== undefined ? props.order.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.order.alpacaAccount.user.openaiAPIKey !== undefined ? props.order.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.order.alpacaAccount.user.openaiModel !== undefined ? props.order.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      trades: props.order.alpacaAccount.trades ? 
        Array.isArray(props.order.alpacaAccount.trades) && props.order.alpacaAccount.trades.length > 0 && props.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.alpacaAccount.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.alpacaAccount.trades.map((item: any) => ({
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
      positions: props.order.alpacaAccount.positions ? 
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 && props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.alpacaAccount.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
        Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 && props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.alpacaAccount.alerts.map((item: any) => ({
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
    asset: props.order.asset ? 
      typeof props.order.asset === 'object' && Object.keys(props.order.asset).length === 1 && Object.keys(props.order.asset)[0] === 'id'
    ? { connect: {
          id: props.order.asset.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.asset.id !== undefined ? props.order.asset.id : undefined,
          symbol: props.order.asset.symbol !== undefined ? props.order.asset.symbol : undefined,
          name: props.order.asset.name !== undefined ? props.order.asset.name : undefined,
        },
        create: {
          symbol: props.order.asset.symbol !== undefined ? props.order.asset.symbol : undefined,
          name: props.order.asset.name !== undefined ? props.order.asset.name : undefined,
          type: props.order.asset.type !== undefined ? props.order.asset.type : undefined,
          logoUrl: props.order.asset.logoUrl !== undefined ? props.order.asset.logoUrl : undefined,
          description: props.order.asset.description !== undefined ? props.order.asset.description : undefined,
          cik: props.order.asset.cik !== undefined ? props.order.asset.cik : undefined,
          exchange: props.order.asset.exchange !== undefined ? props.order.asset.exchange : undefined,
          currency: props.order.asset.currency !== undefined ? props.order.asset.currency : undefined,
          country: props.order.asset.country !== undefined ? props.order.asset.country : undefined,
          sector: props.order.asset.sector !== undefined ? props.order.asset.sector : undefined,
          industry: props.order.asset.industry !== undefined ? props.order.asset.industry : undefined,
          address: props.order.asset.address !== undefined ? props.order.asset.address : undefined,
          officialSite: props.order.asset.officialSite !== undefined ? props.order.asset.officialSite : undefined,
          fiscalYearEnd: props.order.asset.fiscalYearEnd !== undefined ? props.order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.order.asset.latestQuarter !== undefined ? props.order.asset.latestQuarter : undefined,
          marketCapitalization: props.order.asset.marketCapitalization !== undefined ? props.order.asset.marketCapitalization : undefined,
          ebitda: props.order.asset.ebitda !== undefined ? props.order.asset.ebitda : undefined,
          peRatio: props.order.asset.peRatio !== undefined ? props.order.asset.peRatio : undefined,
          pegRatio: props.order.asset.pegRatio !== undefined ? props.order.asset.pegRatio : undefined,
          bookValue: props.order.asset.bookValue !== undefined ? props.order.asset.bookValue : undefined,
          dividendPerShare: props.order.asset.dividendPerShare !== undefined ? props.order.asset.dividendPerShare : undefined,
          dividendYield: props.order.asset.dividendYield !== undefined ? props.order.asset.dividendYield : undefined,
          eps: props.order.asset.eps !== undefined ? props.order.asset.eps : undefined,
          revenuePerShareTTM: props.order.asset.revenuePerShareTTM !== undefined ? props.order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.order.asset.profitMargin !== undefined ? props.order.asset.profitMargin : undefined,
          operatingMarginTTM: props.order.asset.operatingMarginTTM !== undefined ? props.order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.order.asset.returnOnAssetsTTM !== undefined ? props.order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.order.asset.returnOnEquityTTM !== undefined ? props.order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.order.asset.revenueTTM !== undefined ? props.order.asset.revenueTTM : undefined,
          grossProfitTTM: props.order.asset.grossProfitTTM !== undefined ? props.order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.order.asset.dilutedEPSTTM !== undefined ? props.order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.order.asset.analystTargetPrice !== undefined ? props.order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.order.asset.analystRatingStrongBuy !== undefined ? props.order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.order.asset.analystRatingBuy !== undefined ? props.order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.order.asset.analystRatingHold !== undefined ? props.order.asset.analystRatingHold : undefined,
          analystRatingSell: props.order.asset.analystRatingSell !== undefined ? props.order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.order.asset.analystRatingStrongSell !== undefined ? props.order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.order.asset.trailingPE !== undefined ? props.order.asset.trailingPE : undefined,
          forwardPE: props.order.asset.forwardPE !== undefined ? props.order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.order.asset.priceToSalesRatioTTM !== undefined ? props.order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.order.asset.priceToBookRatio !== undefined ? props.order.asset.priceToBookRatio : undefined,
          evToRevenue: props.order.asset.evToRevenue !== undefined ? props.order.asset.evToRevenue : undefined,
          evToEbitda: props.order.asset.evToEbitda !== undefined ? props.order.asset.evToEbitda : undefined,
          beta: props.order.asset.beta !== undefined ? props.order.asset.beta : undefined,
          week52High: props.order.asset.week52High !== undefined ? props.order.asset.week52High : undefined,
          week52Low: props.order.asset.week52Low !== undefined ? props.order.asset.week52Low : undefined,
          day50MovingAverage: props.order.asset.day50MovingAverage !== undefined ? props.order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.order.asset.day200MovingAverage !== undefined ? props.order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.order.asset.sharesOutstanding !== undefined ? props.order.asset.sharesOutstanding : undefined,
          dividendDate: props.order.asset.dividendDate !== undefined ? props.order.asset.dividendDate : undefined,
          exDividendDate: props.order.asset.exDividendDate !== undefined ? props.order.asset.exDividendDate : undefined,
          askPrice: props.order.asset.askPrice !== undefined ? props.order.asset.askPrice : undefined,
          bidPrice: props.order.asset.bidPrice !== undefined ? props.order.asset.bidPrice : undefined,
      trades: props.order.asset.trades ? 
        Array.isArray(props.order.asset.trades) && props.order.asset.trades.length > 0 && props.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.asset.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.asset.trades.map((item: any) => ({
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
      positions: props.order.asset.positions ? 
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 && props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.asset.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
        Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 && props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.asset.newsMentions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.asset.newsMentions.map((item: any) => ({
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
      contracts: props.order.asset.contracts ? 
        Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 && props.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.asset.contracts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.asset.contracts.map((item: any) => ({
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
    contract: props.order.contract ? 
      typeof props.order.contract === 'object' && Object.keys(props.order.contract).length === 1 && Object.keys(props.order.contract)[0] === 'id'
    ? { connect: {
          id: props.order.contract.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.contract.id !== undefined ? props.order.contract.id : undefined,
          alpacaId: props.order.contract.alpacaId !== undefined ? props.order.contract.alpacaId : undefined,
          symbol: props.order.contract.symbol !== undefined ? props.order.contract.symbol : undefined,
          name: props.order.contract.name !== undefined ? {
              equals: props.order.contract.name 
             } : undefined,
          underlyingAssetId: props.order.contract.underlyingAssetId !== undefined ? {
              equals: props.order.contract.underlyingAssetId 
             } : undefined,
        },
        create: {
          alpacaId: props.order.contract.alpacaId !== undefined ? props.order.contract.alpacaId : undefined,
          symbol: props.order.contract.symbol !== undefined ? props.order.contract.symbol : undefined,
          name: props.order.contract.name !== undefined ? props.order.contract.name : undefined,
          status: props.order.contract.status !== undefined ? props.order.contract.status : undefined,
          tradable: props.order.contract.tradable !== undefined ? props.order.contract.tradable : undefined,
          expirationDate: props.order.contract.expirationDate !== undefined ? props.order.contract.expirationDate : undefined,
          rootSymbol: props.order.contract.rootSymbol !== undefined ? props.order.contract.rootSymbol : undefined,
          underlyingSymbol: props.order.contract.underlyingSymbol !== undefined ? props.order.contract.underlyingSymbol : undefined,
          underlyingAssetId: props.order.contract.underlyingAssetId !== undefined ? props.order.contract.underlyingAssetId : undefined,
          type: props.order.contract.type !== undefined ? props.order.contract.type : undefined,
          style: props.order.contract.style !== undefined ? props.order.contract.style : undefined,
          strikePrice: props.order.contract.strikePrice !== undefined ? props.order.contract.strikePrice : undefined,
          multiplier: props.order.contract.multiplier !== undefined ? props.order.contract.multiplier : undefined,
          size: props.order.contract.size !== undefined ? props.order.contract.size : undefined,
          openInterest: props.order.contract.openInterest !== undefined ? props.order.contract.openInterest : undefined,
          openInterestDate: props.order.contract.openInterestDate !== undefined ? props.order.contract.openInterestDate : undefined,
          closePrice: props.order.contract.closePrice !== undefined ? props.order.contract.closePrice : undefined,
          closePriceDate: props.order.contract.closePriceDate !== undefined ? props.order.contract.closePriceDate : undefined,
          ppind: props.order.contract.ppind !== undefined ? props.order.contract.ppind : undefined,
          orderId: props.order.contract.orderId !== undefined ? props.order.contract.orderId : undefined,
      deliverables: props.order.contract.deliverables ? 
        Array.isArray(props.order.contract.deliverables) && props.order.contract.deliverables.length > 0 && props.order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.contract.deliverables.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.contract.deliverables.map((item: any) => ({
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
      asset: props.order.contract.asset ? 
        typeof props.order.contract.asset === 'object' && Object.keys(props.order.contract.asset).length === 1 && Object.keys(props.order.contract.asset)[0] === 'id'
    ? { connect: {
            id: props.order.contract.asset.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.order.contract.asset.id !== undefined ? props.order.contract.asset.id : undefined,
            symbol: props.order.contract.asset.symbol !== undefined ? props.order.contract.asset.symbol : undefined,
            name: props.order.contract.asset.name !== undefined ? props.order.contract.asset.name : undefined,
          },
          create: {
            symbol: props.order.contract.asset.symbol !== undefined ? props.order.contract.asset.symbol : undefined,
            name: props.order.contract.asset.name !== undefined ? props.order.contract.asset.name : undefined,
            type: props.order.contract.asset.type !== undefined ? props.order.contract.asset.type : undefined,
            logoUrl: props.order.contract.asset.logoUrl !== undefined ? props.order.contract.asset.logoUrl : undefined,
            description: props.order.contract.asset.description !== undefined ? props.order.contract.asset.description : undefined,
            cik: props.order.contract.asset.cik !== undefined ? props.order.contract.asset.cik : undefined,
            exchange: props.order.contract.asset.exchange !== undefined ? props.order.contract.asset.exchange : undefined,
            currency: props.order.contract.asset.currency !== undefined ? props.order.contract.asset.currency : undefined,
            country: props.order.contract.asset.country !== undefined ? props.order.contract.asset.country : undefined,
            sector: props.order.contract.asset.sector !== undefined ? props.order.contract.asset.sector : undefined,
            industry: props.order.contract.asset.industry !== undefined ? props.order.contract.asset.industry : undefined,
            address: props.order.contract.asset.address !== undefined ? props.order.contract.asset.address : undefined,
            officialSite: props.order.contract.asset.officialSite !== undefined ? props.order.contract.asset.officialSite : undefined,
            fiscalYearEnd: props.order.contract.asset.fiscalYearEnd !== undefined ? props.order.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: props.order.contract.asset.latestQuarter !== undefined ? props.order.contract.asset.latestQuarter : undefined,
            marketCapitalization: props.order.contract.asset.marketCapitalization !== undefined ? props.order.contract.asset.marketCapitalization : undefined,
            ebitda: props.order.contract.asset.ebitda !== undefined ? props.order.contract.asset.ebitda : undefined,
            peRatio: props.order.contract.asset.peRatio !== undefined ? props.order.contract.asset.peRatio : undefined,
            pegRatio: props.order.contract.asset.pegRatio !== undefined ? props.order.contract.asset.pegRatio : undefined,
            bookValue: props.order.contract.asset.bookValue !== undefined ? props.order.contract.asset.bookValue : undefined,
            dividendPerShare: props.order.contract.asset.dividendPerShare !== undefined ? props.order.contract.asset.dividendPerShare : undefined,
            dividendYield: props.order.contract.asset.dividendYield !== undefined ? props.order.contract.asset.dividendYield : undefined,
            eps: props.order.contract.asset.eps !== undefined ? props.order.contract.asset.eps : undefined,
            revenuePerShareTTM: props.order.contract.asset.revenuePerShareTTM !== undefined ? props.order.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: props.order.contract.asset.profitMargin !== undefined ? props.order.contract.asset.profitMargin : undefined,
            operatingMarginTTM: props.order.contract.asset.operatingMarginTTM !== undefined ? props.order.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: props.order.contract.asset.returnOnAssetsTTM !== undefined ? props.order.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: props.order.contract.asset.returnOnEquityTTM !== undefined ? props.order.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: props.order.contract.asset.revenueTTM !== undefined ? props.order.contract.asset.revenueTTM : undefined,
            grossProfitTTM: props.order.contract.asset.grossProfitTTM !== undefined ? props.order.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: props.order.contract.asset.dilutedEPSTTM !== undefined ? props.order.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: props.order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? props.order.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: props.order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? props.order.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: props.order.contract.asset.analystTargetPrice !== undefined ? props.order.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: props.order.contract.asset.analystRatingStrongBuy !== undefined ? props.order.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: props.order.contract.asset.analystRatingBuy !== undefined ? props.order.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: props.order.contract.asset.analystRatingHold !== undefined ? props.order.contract.asset.analystRatingHold : undefined,
            analystRatingSell: props.order.contract.asset.analystRatingSell !== undefined ? props.order.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: props.order.contract.asset.analystRatingStrongSell !== undefined ? props.order.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: props.order.contract.asset.trailingPE !== undefined ? props.order.contract.asset.trailingPE : undefined,
            forwardPE: props.order.contract.asset.forwardPE !== undefined ? props.order.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: props.order.contract.asset.priceToSalesRatioTTM !== undefined ? props.order.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: props.order.contract.asset.priceToBookRatio !== undefined ? props.order.contract.asset.priceToBookRatio : undefined,
            evToRevenue: props.order.contract.asset.evToRevenue !== undefined ? props.order.contract.asset.evToRevenue : undefined,
            evToEbitda: props.order.contract.asset.evToEbitda !== undefined ? props.order.contract.asset.evToEbitda : undefined,
            beta: props.order.contract.asset.beta !== undefined ? props.order.contract.asset.beta : undefined,
            week52High: props.order.contract.asset.week52High !== undefined ? props.order.contract.asset.week52High : undefined,
            week52Low: props.order.contract.asset.week52Low !== undefined ? props.order.contract.asset.week52Low : undefined,
            day50MovingAverage: props.order.contract.asset.day50MovingAverage !== undefined ? props.order.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: props.order.contract.asset.day200MovingAverage !== undefined ? props.order.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: props.order.contract.asset.sharesOutstanding !== undefined ? props.order.contract.asset.sharesOutstanding : undefined,
            dividendDate: props.order.contract.asset.dividendDate !== undefined ? props.order.contract.asset.dividendDate : undefined,
            exDividendDate: props.order.contract.asset.exDividendDate !== undefined ? props.order.contract.asset.exDividendDate : undefined,
            askPrice: props.order.contract.asset.askPrice !== undefined ? props.order.contract.asset.askPrice : undefined,
            bidPrice: props.order.contract.asset.bidPrice !== undefined ? props.order.contract.asset.bidPrice : undefined,
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
      const response = await client.mutate({ mutation: CREATE_ONE_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAction) {
        return response.data.createOneAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAction:', error);
      throw error;
    }
  },

  /**
   * Create multiple Action records.
   * @param props - Array of Action objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: ActionType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_ACTION = gql`
      mutation createManyAction($data: [ActionCreateManyInput!]!) {
        createManyAction(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  sequence: prop.sequence !== undefined ? prop.sequence : undefined,
  tradeId: prop.tradeId !== undefined ? prop.tradeId : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  note: prop.note !== undefined ? prop.note : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  fee: prop.fee !== undefined ? prop.fee : undefined,
  dependsOn: prop.dependsOn !== undefined ? {
    set: prop.dependsOn
  } : undefined,
  dependedOnBy: prop.dependedOnBy !== undefined ? {
    set: prop.dependedOnBy
  } : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAction) {
        return response.data.createManyAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAction:', error);
      throw error;
    }
  },

  /**
   * Update a single Action record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Action or null.
   */
  async update(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_ACTION = gql`
      mutation updateOneAction($data: ActionUpdateInput!, $where: ActionWhereUniqueInput!) {
        updateOneAction(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
    set: props.id
  } : undefined,
  sequence: props.sequence !== undefined ? {
    set: props.sequence
  } : undefined,
  type: props.type !== undefined ? {
    set: props.type
  } : undefined,
  note: props.note !== undefined ? {
    set: props.note
  } : undefined,
  status: props.status !== undefined ? {
    set: props.status
  } : undefined,
  fee: props.fee !== undefined ? {
    set: props.fee
  } : undefined,
  dependsOn: props.dependsOn !== undefined ? {
    set: props.dependsOn
  } : undefined,
  dependedOnBy: props.dependedOnBy !== undefined ? {
    set: props.dependedOnBy
  } : undefined,
  trade: props.trade !== undefined ? {
    set: props.trade
  } : undefined,
  order: props.order !== undefined ? {
    set: props.order
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAction) {
        return response.data.updateOneAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAction:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Action record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Action or null.
   */
  async upsert(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_ACTION = gql`
      mutation upsertOneAction($where: ActionWhereUniqueInput!, $create: ActionCreateInput!, $update: ActionUpdateInput!) {
        upsertOneAction(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
      },
      create: {
    sequence: props.sequence !== undefined ? props.sequence : undefined,
  type: props.type !== undefined ? props.type : undefined,
  note: props.note !== undefined ? props.note : undefined,
  status: props.status !== undefined ? props.status : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  dependsOn: props.dependsOn !== undefined ? {
    set: props.dependsOn
  } : undefined,
  dependedOnBy: props.dependedOnBy !== undefined ? {
    set: props.dependedOnBy
  } : undefined,
  trade: props.trade ? 
    typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && Object.keys(props.trade)[0] === 'id'
    ? { connect: {
        id: props.trade.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.trade.id !== undefined ? props.trade.id : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId 
           } : undefined,
      },
      create: {
        qty: props.trade.qty !== undefined ? props.trade.qty : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        optionType: props.trade.optionType !== undefined ? props.trade.optionType : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
    alpacaAccount: props.trade.alpacaAccount ? 
      typeof props.trade.alpacaAccount === 'object' && Object.keys(props.trade.alpacaAccount).length === 1 && Object.keys(props.trade.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.trade.alpacaAccount.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.trade.alpacaAccount.id !== undefined ? props.trade.alpacaAccount.id : undefined,
          userId: props.trade.alpacaAccount.userId !== undefined ? {
              equals: props.trade.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: props.trade.alpacaAccount.type !== undefined ? props.trade.alpacaAccount.type : undefined,
          APIKey: props.trade.alpacaAccount.APIKey !== undefined ? props.trade.alpacaAccount.APIKey : undefined,
          APISecret: props.trade.alpacaAccount.APISecret !== undefined ? props.trade.alpacaAccount.APISecret : undefined,
          configuration: props.trade.alpacaAccount.configuration !== undefined ? {
            set: props.trade.alpacaAccount.configuration
          } : undefined,
          marketOpen: props.trade.alpacaAccount.marketOpen !== undefined ? props.trade.alpacaAccount.marketOpen : undefined,
          realTime: props.trade.alpacaAccount.realTime !== undefined ? props.trade.alpacaAccount.realTime : undefined,
          minOrderSize: props.trade.alpacaAccount.minOrderSize !== undefined ? props.trade.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.trade.alpacaAccount.maxOrderSize !== undefined ? props.trade.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.trade.alpacaAccount.minPercentageChange !== undefined ? props.trade.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.trade.alpacaAccount.volumeThreshold !== undefined ? props.trade.alpacaAccount.volumeThreshold : undefined,
      user: props.trade.alpacaAccount.user ? 
        typeof props.trade.alpacaAccount.user === 'object' && Object.keys(props.trade.alpacaAccount.user).length === 1 && Object.keys(props.trade.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.trade.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.trade.alpacaAccount.user.id !== undefined ? props.trade.alpacaAccount.user.id : undefined,
            email: props.trade.alpacaAccount.user.email !== undefined ? props.trade.alpacaAccount.user.email : undefined,
            name: props.trade.alpacaAccount.user.name !== undefined ? {
                equals: props.trade.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.trade.alpacaAccount.user.name !== undefined ? props.trade.alpacaAccount.user.name : undefined,
            email: props.trade.alpacaAccount.user.email !== undefined ? props.trade.alpacaAccount.user.email : undefined,
            emailVerified: props.trade.alpacaAccount.user.emailVerified !== undefined ? props.trade.alpacaAccount.user.emailVerified : undefined,
            image: props.trade.alpacaAccount.user.image !== undefined ? props.trade.alpacaAccount.user.image : undefined,
            role: props.trade.alpacaAccount.user.role !== undefined ? props.trade.alpacaAccount.user.role : undefined,
            bio: props.trade.alpacaAccount.user.bio !== undefined ? props.trade.alpacaAccount.user.bio : undefined,
            jobTitle: props.trade.alpacaAccount.user.jobTitle !== undefined ? props.trade.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.trade.alpacaAccount.user.currentAccount !== undefined ? props.trade.alpacaAccount.user.currentAccount : undefined,
            plan: props.trade.alpacaAccount.user.plan !== undefined ? props.trade.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.trade.alpacaAccount.user.openaiAPIKey !== undefined ? props.trade.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.trade.alpacaAccount.user.openaiModel !== undefined ? props.trade.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      orders: props.trade.alpacaAccount.orders ? 
        Array.isArray(props.trade.alpacaAccount.orders) && props.trade.alpacaAccount.orders.length > 0 && props.trade.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.alpacaAccount.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.alpacaAccount.orders.map((item: any) => ({
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
      positions: props.trade.alpacaAccount.positions ? 
        Array.isArray(props.trade.alpacaAccount.positions) && props.trade.alpacaAccount.positions.length > 0 && props.trade.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.alpacaAccount.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.trade.alpacaAccount.alerts ? 
        Array.isArray(props.trade.alpacaAccount.alerts) && props.trade.alpacaAccount.alerts.length > 0 && props.trade.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.alpacaAccount.alerts.map((item: any) => ({
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
    asset: props.trade.asset ? 
      typeof props.trade.asset === 'object' && Object.keys(props.trade.asset).length === 1 && Object.keys(props.trade.asset)[0] === 'id'
    ? { connect: {
          id: props.trade.asset.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.trade.asset.id !== undefined ? props.trade.asset.id : undefined,
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
        },
        create: {
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
          type: props.trade.asset.type !== undefined ? props.trade.asset.type : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? props.trade.asset.logoUrl : undefined,
          description: props.trade.asset.description !== undefined ? props.trade.asset.description : undefined,
          cik: props.trade.asset.cik !== undefined ? props.trade.asset.cik : undefined,
          exchange: props.trade.asset.exchange !== undefined ? props.trade.asset.exchange : undefined,
          currency: props.trade.asset.currency !== undefined ? props.trade.asset.currency : undefined,
          country: props.trade.asset.country !== undefined ? props.trade.asset.country : undefined,
          sector: props.trade.asset.sector !== undefined ? props.trade.asset.sector : undefined,
          industry: props.trade.asset.industry !== undefined ? props.trade.asset.industry : undefined,
          address: props.trade.asset.address !== undefined ? props.trade.asset.address : undefined,
          officialSite: props.trade.asset.officialSite !== undefined ? props.trade.asset.officialSite : undefined,
          fiscalYearEnd: props.trade.asset.fiscalYearEnd !== undefined ? props.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: props.trade.asset.latestQuarter !== undefined ? props.trade.asset.latestQuarter : undefined,
          marketCapitalization: props.trade.asset.marketCapitalization !== undefined ? props.trade.asset.marketCapitalization : undefined,
          ebitda: props.trade.asset.ebitda !== undefined ? props.trade.asset.ebitda : undefined,
          peRatio: props.trade.asset.peRatio !== undefined ? props.trade.asset.peRatio : undefined,
          pegRatio: props.trade.asset.pegRatio !== undefined ? props.trade.asset.pegRatio : undefined,
          bookValue: props.trade.asset.bookValue !== undefined ? props.trade.asset.bookValue : undefined,
          dividendPerShare: props.trade.asset.dividendPerShare !== undefined ? props.trade.asset.dividendPerShare : undefined,
          dividendYield: props.trade.asset.dividendYield !== undefined ? props.trade.asset.dividendYield : undefined,
          eps: props.trade.asset.eps !== undefined ? props.trade.asset.eps : undefined,
          revenuePerShareTTM: props.trade.asset.revenuePerShareTTM !== undefined ? props.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: props.trade.asset.profitMargin !== undefined ? props.trade.asset.profitMargin : undefined,
          operatingMarginTTM: props.trade.asset.operatingMarginTTM !== undefined ? props.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.trade.asset.returnOnAssetsTTM !== undefined ? props.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.trade.asset.returnOnEquityTTM !== undefined ? props.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.trade.asset.revenueTTM !== undefined ? props.trade.asset.revenueTTM : undefined,
          grossProfitTTM: props.trade.asset.grossProfitTTM !== undefined ? props.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.trade.asset.dilutedEPSTTM !== undefined ? props.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.trade.asset.analystTargetPrice !== undefined ? props.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.trade.asset.analystRatingStrongBuy !== undefined ? props.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.trade.asset.analystRatingBuy !== undefined ? props.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: props.trade.asset.analystRatingHold !== undefined ? props.trade.asset.analystRatingHold : undefined,
          analystRatingSell: props.trade.asset.analystRatingSell !== undefined ? props.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.trade.asset.analystRatingStrongSell !== undefined ? props.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: props.trade.asset.trailingPE !== undefined ? props.trade.asset.trailingPE : undefined,
          forwardPE: props.trade.asset.forwardPE !== undefined ? props.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.trade.asset.priceToSalesRatioTTM !== undefined ? props.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.trade.asset.priceToBookRatio !== undefined ? props.trade.asset.priceToBookRatio : undefined,
          evToRevenue: props.trade.asset.evToRevenue !== undefined ? props.trade.asset.evToRevenue : undefined,
          evToEbitda: props.trade.asset.evToEbitda !== undefined ? props.trade.asset.evToEbitda : undefined,
          beta: props.trade.asset.beta !== undefined ? props.trade.asset.beta : undefined,
          week52High: props.trade.asset.week52High !== undefined ? props.trade.asset.week52High : undefined,
          week52Low: props.trade.asset.week52Low !== undefined ? props.trade.asset.week52Low : undefined,
          day50MovingAverage: props.trade.asset.day50MovingAverage !== undefined ? props.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.trade.asset.day200MovingAverage !== undefined ? props.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.trade.asset.sharesOutstanding !== undefined ? props.trade.asset.sharesOutstanding : undefined,
          dividendDate: props.trade.asset.dividendDate !== undefined ? props.trade.asset.dividendDate : undefined,
          exDividendDate: props.trade.asset.exDividendDate !== undefined ? props.trade.asset.exDividendDate : undefined,
          askPrice: props.trade.asset.askPrice !== undefined ? props.trade.asset.askPrice : undefined,
          bidPrice: props.trade.asset.bidPrice !== undefined ? props.trade.asset.bidPrice : undefined,
      orders: props.trade.asset.orders ? 
        Array.isArray(props.trade.asset.orders) && props.trade.asset.orders.length > 0 && props.trade.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.asset.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.asset.orders.map((item: any) => ({
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
      positions: props.trade.asset.positions ? 
        Array.isArray(props.trade.asset.positions) && props.trade.asset.positions.length > 0 && props.trade.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.asset.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.asset.positions.map((item: any) => ({
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
      newsMentions: props.trade.asset.newsMentions ? 
        Array.isArray(props.trade.asset.newsMentions) && props.trade.asset.newsMentions.length > 0 && props.trade.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.asset.newsMentions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.asset.newsMentions.map((item: any) => ({
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
      contracts: props.trade.asset.contracts ? 
        Array.isArray(props.trade.asset.contracts) && props.trade.asset.contracts.length > 0 && props.trade.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.trade.asset.contracts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.trade.asset.contracts.map((item: any) => ({
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
      },
    }
  } : undefined,
  order: props.order ? 
    typeof props.order === 'object' && Object.keys(props.order).length === 1 && Object.keys(props.order)[0] === 'id'
    ? { connect: {
        id: props.order.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.order.id !== undefined ? props.order.id : undefined,
        clientOrderId: props.order.clientOrderId !== undefined ? props.order.clientOrderId : undefined,
        actionId: props.order.actionId !== undefined ? props.order.actionId : undefined,
        stopLossId: props.order.stopLossId !== undefined ? props.order.stopLossId : undefined,
        contractId: props.order.contractId !== undefined ? props.order.contractId : undefined,
        alpacaAccountId: props.order.alpacaAccountId !== undefined ? {
            equals: props.order.alpacaAccountId 
           } : undefined,
      },
      create: {
        clientOrderId: props.order.clientOrderId !== undefined ? props.order.clientOrderId : undefined,
        qty: props.order.qty !== undefined ? props.order.qty : undefined,
        notional: props.order.notional !== undefined ? props.order.notional : undefined,
        side: props.order.side !== undefined ? props.order.side : undefined,
        type: props.order.type !== undefined ? props.order.type : undefined,
        orderClass: props.order.orderClass !== undefined ? props.order.orderClass : undefined,
        timeInForce: props.order.timeInForce !== undefined ? props.order.timeInForce : undefined,
        limitPrice: props.order.limitPrice !== undefined ? props.order.limitPrice : undefined,
        stopPrice: props.order.stopPrice !== undefined ? props.order.stopPrice : undefined,
        trailPrice: props.order.trailPrice !== undefined ? props.order.trailPrice : undefined,
        trailPercent: props.order.trailPercent !== undefined ? props.order.trailPercent : undefined,
        extendedHours: props.order.extendedHours !== undefined ? props.order.extendedHours : undefined,
        status: props.order.status !== undefined ? props.order.status : undefined,
        submittedAt: props.order.submittedAt !== undefined ? props.order.submittedAt : undefined,
        filledAt: props.order.filledAt !== undefined ? props.order.filledAt : undefined,
        filledQty: props.order.filledQty !== undefined ? props.order.filledQty : undefined,
        filledAvgPrice: props.order.filledAvgPrice !== undefined ? props.order.filledAvgPrice : undefined,
        cancelRequestedAt: props.order.cancelRequestedAt !== undefined ? props.order.cancelRequestedAt : undefined,
        canceledAt: props.order.canceledAt !== undefined ? props.order.canceledAt : undefined,
        fee: props.order.fee !== undefined ? props.order.fee : undefined,
        strikePrice: props.order.strikePrice !== undefined ? props.order.strikePrice : undefined,
        expirationDate: props.order.expirationDate !== undefined ? props.order.expirationDate : undefined,
        optionType: props.order.optionType !== undefined ? props.order.optionType : undefined,
        stopLossId: props.order.stopLossId !== undefined ? props.order.stopLossId : undefined,
        takeProfitId: props.order.takeProfitId !== undefined ? props.order.takeProfitId : undefined,
    stopLoss: props.order.stopLoss ? 
      typeof props.order.stopLoss === 'object' && Object.keys(props.order.stopLoss).length === 1 && Object.keys(props.order.stopLoss)[0] === 'id'
    ? { connect: {
          id: props.order.stopLoss.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.stopLoss.id !== undefined ? props.order.stopLoss.id : undefined,
          orderId: props.order.stopLoss.orderId !== undefined ? props.order.stopLoss.orderId : undefined,
        },
        create: {
          stopPrice: props.order.stopLoss.stopPrice !== undefined ? props.order.stopLoss.stopPrice : undefined,
          limitPrice: props.order.stopLoss.limitPrice !== undefined ? props.order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: props.order.takeProfit ? 
      typeof props.order.takeProfit === 'object' && Object.keys(props.order.takeProfit).length === 1 && Object.keys(props.order.takeProfit)[0] === 'id'
    ? { connect: {
          id: props.order.takeProfit.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.takeProfit.id !== undefined ? props.order.takeProfit.id : undefined,
          orderId: props.order.takeProfit.orderId !== undefined ? props.order.takeProfit.orderId : undefined,
        },
        create: {
          limitPrice: props.order.takeProfit.limitPrice !== undefined ? props.order.takeProfit.limitPrice : undefined,
          stopPrice: props.order.takeProfit.stopPrice !== undefined ? props.order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.order.alpacaAccount ? 
      typeof props.order.alpacaAccount === 'object' && Object.keys(props.order.alpacaAccount).length === 1 && Object.keys(props.order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.order.alpacaAccount.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.alpacaAccount.id !== undefined ? props.order.alpacaAccount.id : undefined,
          userId: props.order.alpacaAccount.userId !== undefined ? {
              equals: props.order.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: props.order.alpacaAccount.type !== undefined ? props.order.alpacaAccount.type : undefined,
          APIKey: props.order.alpacaAccount.APIKey !== undefined ? props.order.alpacaAccount.APIKey : undefined,
          APISecret: props.order.alpacaAccount.APISecret !== undefined ? props.order.alpacaAccount.APISecret : undefined,
          configuration: props.order.alpacaAccount.configuration !== undefined ? {
            set: props.order.alpacaAccount.configuration
          } : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? props.order.alpacaAccount.marketOpen : undefined,
          realTime: props.order.alpacaAccount.realTime !== undefined ? props.order.alpacaAccount.realTime : undefined,
          minOrderSize: props.order.alpacaAccount.minOrderSize !== undefined ? props.order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.order.alpacaAccount.maxOrderSize !== undefined ? props.order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
      user: props.order.alpacaAccount.user ? 
        typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && Object.keys(props.order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.order.alpacaAccount.user.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.order.alpacaAccount.user.id !== undefined ? props.order.alpacaAccount.user.id : undefined,
            email: props.order.alpacaAccount.user.email !== undefined ? props.order.alpacaAccount.user.email : undefined,
            name: props.order.alpacaAccount.user.name !== undefined ? {
                equals: props.order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.order.alpacaAccount.user.name !== undefined ? props.order.alpacaAccount.user.name : undefined,
            email: props.order.alpacaAccount.user.email !== undefined ? props.order.alpacaAccount.user.email : undefined,
            emailVerified: props.order.alpacaAccount.user.emailVerified !== undefined ? props.order.alpacaAccount.user.emailVerified : undefined,
            image: props.order.alpacaAccount.user.image !== undefined ? props.order.alpacaAccount.user.image : undefined,
            role: props.order.alpacaAccount.user.role !== undefined ? props.order.alpacaAccount.user.role : undefined,
            bio: props.order.alpacaAccount.user.bio !== undefined ? props.order.alpacaAccount.user.bio : undefined,
            jobTitle: props.order.alpacaAccount.user.jobTitle !== undefined ? props.order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.order.alpacaAccount.user.currentAccount !== undefined ? props.order.alpacaAccount.user.currentAccount : undefined,
            plan: props.order.alpacaAccount.user.plan !== undefined ? props.order.alpacaAccount.user.plan : undefined,
            openaiAPIKey: props.order.alpacaAccount.user.openaiAPIKey !== undefined ? props.order.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: props.order.alpacaAccount.user.openaiModel !== undefined ? props.order.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      trades: props.order.alpacaAccount.trades ? 
        Array.isArray(props.order.alpacaAccount.trades) && props.order.alpacaAccount.trades.length > 0 && props.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.alpacaAccount.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.alpacaAccount.trades.map((item: any) => ({
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
      positions: props.order.alpacaAccount.positions ? 
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 && props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.alpacaAccount.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
        Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 && props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.alpacaAccount.alerts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.alpacaAccount.alerts.map((item: any) => ({
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
    asset: props.order.asset ? 
      typeof props.order.asset === 'object' && Object.keys(props.order.asset).length === 1 && Object.keys(props.order.asset)[0] === 'id'
    ? { connect: {
          id: props.order.asset.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.asset.id !== undefined ? props.order.asset.id : undefined,
          symbol: props.order.asset.symbol !== undefined ? props.order.asset.symbol : undefined,
          name: props.order.asset.name !== undefined ? props.order.asset.name : undefined,
        },
        create: {
          symbol: props.order.asset.symbol !== undefined ? props.order.asset.symbol : undefined,
          name: props.order.asset.name !== undefined ? props.order.asset.name : undefined,
          type: props.order.asset.type !== undefined ? props.order.asset.type : undefined,
          logoUrl: props.order.asset.logoUrl !== undefined ? props.order.asset.logoUrl : undefined,
          description: props.order.asset.description !== undefined ? props.order.asset.description : undefined,
          cik: props.order.asset.cik !== undefined ? props.order.asset.cik : undefined,
          exchange: props.order.asset.exchange !== undefined ? props.order.asset.exchange : undefined,
          currency: props.order.asset.currency !== undefined ? props.order.asset.currency : undefined,
          country: props.order.asset.country !== undefined ? props.order.asset.country : undefined,
          sector: props.order.asset.sector !== undefined ? props.order.asset.sector : undefined,
          industry: props.order.asset.industry !== undefined ? props.order.asset.industry : undefined,
          address: props.order.asset.address !== undefined ? props.order.asset.address : undefined,
          officialSite: props.order.asset.officialSite !== undefined ? props.order.asset.officialSite : undefined,
          fiscalYearEnd: props.order.asset.fiscalYearEnd !== undefined ? props.order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.order.asset.latestQuarter !== undefined ? props.order.asset.latestQuarter : undefined,
          marketCapitalization: props.order.asset.marketCapitalization !== undefined ? props.order.asset.marketCapitalization : undefined,
          ebitda: props.order.asset.ebitda !== undefined ? props.order.asset.ebitda : undefined,
          peRatio: props.order.asset.peRatio !== undefined ? props.order.asset.peRatio : undefined,
          pegRatio: props.order.asset.pegRatio !== undefined ? props.order.asset.pegRatio : undefined,
          bookValue: props.order.asset.bookValue !== undefined ? props.order.asset.bookValue : undefined,
          dividendPerShare: props.order.asset.dividendPerShare !== undefined ? props.order.asset.dividendPerShare : undefined,
          dividendYield: props.order.asset.dividendYield !== undefined ? props.order.asset.dividendYield : undefined,
          eps: props.order.asset.eps !== undefined ? props.order.asset.eps : undefined,
          revenuePerShareTTM: props.order.asset.revenuePerShareTTM !== undefined ? props.order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.order.asset.profitMargin !== undefined ? props.order.asset.profitMargin : undefined,
          operatingMarginTTM: props.order.asset.operatingMarginTTM !== undefined ? props.order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.order.asset.returnOnAssetsTTM !== undefined ? props.order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.order.asset.returnOnEquityTTM !== undefined ? props.order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.order.asset.revenueTTM !== undefined ? props.order.asset.revenueTTM : undefined,
          grossProfitTTM: props.order.asset.grossProfitTTM !== undefined ? props.order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.order.asset.dilutedEPSTTM !== undefined ? props.order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.order.asset.analystTargetPrice !== undefined ? props.order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.order.asset.analystRatingStrongBuy !== undefined ? props.order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.order.asset.analystRatingBuy !== undefined ? props.order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.order.asset.analystRatingHold !== undefined ? props.order.asset.analystRatingHold : undefined,
          analystRatingSell: props.order.asset.analystRatingSell !== undefined ? props.order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.order.asset.analystRatingStrongSell !== undefined ? props.order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.order.asset.trailingPE !== undefined ? props.order.asset.trailingPE : undefined,
          forwardPE: props.order.asset.forwardPE !== undefined ? props.order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.order.asset.priceToSalesRatioTTM !== undefined ? props.order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.order.asset.priceToBookRatio !== undefined ? props.order.asset.priceToBookRatio : undefined,
          evToRevenue: props.order.asset.evToRevenue !== undefined ? props.order.asset.evToRevenue : undefined,
          evToEbitda: props.order.asset.evToEbitda !== undefined ? props.order.asset.evToEbitda : undefined,
          beta: props.order.asset.beta !== undefined ? props.order.asset.beta : undefined,
          week52High: props.order.asset.week52High !== undefined ? props.order.asset.week52High : undefined,
          week52Low: props.order.asset.week52Low !== undefined ? props.order.asset.week52Low : undefined,
          day50MovingAverage: props.order.asset.day50MovingAverage !== undefined ? props.order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.order.asset.day200MovingAverage !== undefined ? props.order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.order.asset.sharesOutstanding !== undefined ? props.order.asset.sharesOutstanding : undefined,
          dividendDate: props.order.asset.dividendDate !== undefined ? props.order.asset.dividendDate : undefined,
          exDividendDate: props.order.asset.exDividendDate !== undefined ? props.order.asset.exDividendDate : undefined,
          askPrice: props.order.asset.askPrice !== undefined ? props.order.asset.askPrice : undefined,
          bidPrice: props.order.asset.bidPrice !== undefined ? props.order.asset.bidPrice : undefined,
      trades: props.order.asset.trades ? 
        Array.isArray(props.order.asset.trades) && props.order.asset.trades.length > 0 && props.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.asset.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.asset.trades.map((item: any) => ({
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
      positions: props.order.asset.positions ? 
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 && props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.asset.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
        Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 && props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.asset.newsMentions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.asset.newsMentions.map((item: any) => ({
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
      contracts: props.order.asset.contracts ? 
        Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 && props.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.asset.contracts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.asset.contracts.map((item: any) => ({
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
    contract: props.order.contract ? 
      typeof props.order.contract === 'object' && Object.keys(props.order.contract).length === 1 && Object.keys(props.order.contract)[0] === 'id'
    ? { connect: {
          id: props.order.contract.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.contract.id !== undefined ? props.order.contract.id : undefined,
          alpacaId: props.order.contract.alpacaId !== undefined ? props.order.contract.alpacaId : undefined,
          symbol: props.order.contract.symbol !== undefined ? props.order.contract.symbol : undefined,
          name: props.order.contract.name !== undefined ? {
              equals: props.order.contract.name 
             } : undefined,
          underlyingAssetId: props.order.contract.underlyingAssetId !== undefined ? {
              equals: props.order.contract.underlyingAssetId 
             } : undefined,
        },
        create: {
          alpacaId: props.order.contract.alpacaId !== undefined ? props.order.contract.alpacaId : undefined,
          symbol: props.order.contract.symbol !== undefined ? props.order.contract.symbol : undefined,
          name: props.order.contract.name !== undefined ? props.order.contract.name : undefined,
          status: props.order.contract.status !== undefined ? props.order.contract.status : undefined,
          tradable: props.order.contract.tradable !== undefined ? props.order.contract.tradable : undefined,
          expirationDate: props.order.contract.expirationDate !== undefined ? props.order.contract.expirationDate : undefined,
          rootSymbol: props.order.contract.rootSymbol !== undefined ? props.order.contract.rootSymbol : undefined,
          underlyingSymbol: props.order.contract.underlyingSymbol !== undefined ? props.order.contract.underlyingSymbol : undefined,
          underlyingAssetId: props.order.contract.underlyingAssetId !== undefined ? props.order.contract.underlyingAssetId : undefined,
          type: props.order.contract.type !== undefined ? props.order.contract.type : undefined,
          style: props.order.contract.style !== undefined ? props.order.contract.style : undefined,
          strikePrice: props.order.contract.strikePrice !== undefined ? props.order.contract.strikePrice : undefined,
          multiplier: props.order.contract.multiplier !== undefined ? props.order.contract.multiplier : undefined,
          size: props.order.contract.size !== undefined ? props.order.contract.size : undefined,
          openInterest: props.order.contract.openInterest !== undefined ? props.order.contract.openInterest : undefined,
          openInterestDate: props.order.contract.openInterestDate !== undefined ? props.order.contract.openInterestDate : undefined,
          closePrice: props.order.contract.closePrice !== undefined ? props.order.contract.closePrice : undefined,
          closePriceDate: props.order.contract.closePriceDate !== undefined ? props.order.contract.closePriceDate : undefined,
          ppind: props.order.contract.ppind !== undefined ? props.order.contract.ppind : undefined,
          orderId: props.order.contract.orderId !== undefined ? props.order.contract.orderId : undefined,
      deliverables: props.order.contract.deliverables ? 
        Array.isArray(props.order.contract.deliverables) && props.order.contract.deliverables.length > 0 && props.order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.order.contract.deliverables.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.order.contract.deliverables.map((item: any) => ({
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
      asset: props.order.contract.asset ? 
        typeof props.order.contract.asset === 'object' && Object.keys(props.order.contract.asset).length === 1 && Object.keys(props.order.contract.asset)[0] === 'id'
    ? { connect: {
            id: props.order.contract.asset.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.order.contract.asset.id !== undefined ? props.order.contract.asset.id : undefined,
            symbol: props.order.contract.asset.symbol !== undefined ? props.order.contract.asset.symbol : undefined,
            name: props.order.contract.asset.name !== undefined ? props.order.contract.asset.name : undefined,
          },
          create: {
            symbol: props.order.contract.asset.symbol !== undefined ? props.order.contract.asset.symbol : undefined,
            name: props.order.contract.asset.name !== undefined ? props.order.contract.asset.name : undefined,
            type: props.order.contract.asset.type !== undefined ? props.order.contract.asset.type : undefined,
            logoUrl: props.order.contract.asset.logoUrl !== undefined ? props.order.contract.asset.logoUrl : undefined,
            description: props.order.contract.asset.description !== undefined ? props.order.contract.asset.description : undefined,
            cik: props.order.contract.asset.cik !== undefined ? props.order.contract.asset.cik : undefined,
            exchange: props.order.contract.asset.exchange !== undefined ? props.order.contract.asset.exchange : undefined,
            currency: props.order.contract.asset.currency !== undefined ? props.order.contract.asset.currency : undefined,
            country: props.order.contract.asset.country !== undefined ? props.order.contract.asset.country : undefined,
            sector: props.order.contract.asset.sector !== undefined ? props.order.contract.asset.sector : undefined,
            industry: props.order.contract.asset.industry !== undefined ? props.order.contract.asset.industry : undefined,
            address: props.order.contract.asset.address !== undefined ? props.order.contract.asset.address : undefined,
            officialSite: props.order.contract.asset.officialSite !== undefined ? props.order.contract.asset.officialSite : undefined,
            fiscalYearEnd: props.order.contract.asset.fiscalYearEnd !== undefined ? props.order.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: props.order.contract.asset.latestQuarter !== undefined ? props.order.contract.asset.latestQuarter : undefined,
            marketCapitalization: props.order.contract.asset.marketCapitalization !== undefined ? props.order.contract.asset.marketCapitalization : undefined,
            ebitda: props.order.contract.asset.ebitda !== undefined ? props.order.contract.asset.ebitda : undefined,
            peRatio: props.order.contract.asset.peRatio !== undefined ? props.order.contract.asset.peRatio : undefined,
            pegRatio: props.order.contract.asset.pegRatio !== undefined ? props.order.contract.asset.pegRatio : undefined,
            bookValue: props.order.contract.asset.bookValue !== undefined ? props.order.contract.asset.bookValue : undefined,
            dividendPerShare: props.order.contract.asset.dividendPerShare !== undefined ? props.order.contract.asset.dividendPerShare : undefined,
            dividendYield: props.order.contract.asset.dividendYield !== undefined ? props.order.contract.asset.dividendYield : undefined,
            eps: props.order.contract.asset.eps !== undefined ? props.order.contract.asset.eps : undefined,
            revenuePerShareTTM: props.order.contract.asset.revenuePerShareTTM !== undefined ? props.order.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: props.order.contract.asset.profitMargin !== undefined ? props.order.contract.asset.profitMargin : undefined,
            operatingMarginTTM: props.order.contract.asset.operatingMarginTTM !== undefined ? props.order.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: props.order.contract.asset.returnOnAssetsTTM !== undefined ? props.order.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: props.order.contract.asset.returnOnEquityTTM !== undefined ? props.order.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: props.order.contract.asset.revenueTTM !== undefined ? props.order.contract.asset.revenueTTM : undefined,
            grossProfitTTM: props.order.contract.asset.grossProfitTTM !== undefined ? props.order.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: props.order.contract.asset.dilutedEPSTTM !== undefined ? props.order.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: props.order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? props.order.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: props.order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? props.order.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: props.order.contract.asset.analystTargetPrice !== undefined ? props.order.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: props.order.contract.asset.analystRatingStrongBuy !== undefined ? props.order.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: props.order.contract.asset.analystRatingBuy !== undefined ? props.order.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: props.order.contract.asset.analystRatingHold !== undefined ? props.order.contract.asset.analystRatingHold : undefined,
            analystRatingSell: props.order.contract.asset.analystRatingSell !== undefined ? props.order.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: props.order.contract.asset.analystRatingStrongSell !== undefined ? props.order.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: props.order.contract.asset.trailingPE !== undefined ? props.order.contract.asset.trailingPE : undefined,
            forwardPE: props.order.contract.asset.forwardPE !== undefined ? props.order.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: props.order.contract.asset.priceToSalesRatioTTM !== undefined ? props.order.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: props.order.contract.asset.priceToBookRatio !== undefined ? props.order.contract.asset.priceToBookRatio : undefined,
            evToRevenue: props.order.contract.asset.evToRevenue !== undefined ? props.order.contract.asset.evToRevenue : undefined,
            evToEbitda: props.order.contract.asset.evToEbitda !== undefined ? props.order.contract.asset.evToEbitda : undefined,
            beta: props.order.contract.asset.beta !== undefined ? props.order.contract.asset.beta : undefined,
            week52High: props.order.contract.asset.week52High !== undefined ? props.order.contract.asset.week52High : undefined,
            week52Low: props.order.contract.asset.week52Low !== undefined ? props.order.contract.asset.week52Low : undefined,
            day50MovingAverage: props.order.contract.asset.day50MovingAverage !== undefined ? props.order.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: props.order.contract.asset.day200MovingAverage !== undefined ? props.order.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: props.order.contract.asset.sharesOutstanding !== undefined ? props.order.contract.asset.sharesOutstanding : undefined,
            dividendDate: props.order.contract.asset.dividendDate !== undefined ? props.order.contract.asset.dividendDate : undefined,
            exDividendDate: props.order.contract.asset.exDividendDate !== undefined ? props.order.contract.asset.exDividendDate : undefined,
            askPrice: props.order.contract.asset.askPrice !== undefined ? props.order.contract.asset.askPrice : undefined,
            bidPrice: props.order.contract.asset.bidPrice !== undefined ? props.order.contract.asset.bidPrice : undefined,
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
  sequence: props.sequence !== undefined ? {
    set: props.sequence
  } : undefined,
  type: props.type !== undefined ? {
    set: props.type
  } : undefined,
  note: props.note !== undefined ? {
    set: props.note
  } : undefined,
  status: props.status !== undefined ? {
    set: props.status
  } : undefined,
  fee: props.fee !== undefined ? {
    set: props.fee
  } : undefined,
  dependsOn: props.dependsOn !== undefined ? {
    set: props.dependsOn
  } : undefined,
  dependedOnBy: props.dependedOnBy !== undefined ? {
    set: props.dependedOnBy
  } : undefined,
  trade: props.trade !== undefined ? {
    set: props.trade
  } : undefined,
  order: props.order !== undefined ? {
    set: props.order
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneAction) {
        return response.data.upsertOneAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneAction:', error);
      throw error;
    }
  },

  /**
   * Update multiple Action records.
   * @param props - Array of Action objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: ActionType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_ACTION = gql`
      mutation updateManyAction($data: [ActionCreateManyInput!]!) {
        updateManyAction(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  tradeId: prop.tradeId !== undefined ? {
    equals: prop.tradeId 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
    set: prop.id
  } : undefined,
  sequence: prop.sequence !== undefined ? {
    set: prop.sequence
  } : undefined,
  type: prop.type !== undefined ? {
    set: prop.type
  } : undefined,
  note: prop.note !== undefined ? {
    set: prop.note
  } : undefined,
  status: prop.status !== undefined ? {
    set: prop.status
  } : undefined,
  fee: prop.fee !== undefined ? {
    set: prop.fee
  } : undefined,
  dependsOn: prop.dependsOn !== undefined ? {
    set: prop.dependsOn
  } : undefined,
  dependedOnBy: prop.dependedOnBy !== undefined ? {
    set: prop.dependedOnBy
  } : undefined,
  trade: prop.trade !== undefined ? {
    set: prop.trade
  } : undefined,
  order: prop.order !== undefined ? {
    set: prop.order
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyAction) {
        return response.data.updateManyAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyAction:', error);
      throw error;
    }
  },

  /**
   * Delete a single Action record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Action or null.
   */
  async delete(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_ACTION = gql`
      mutation deleteOneAction($where: ActionWhereUniqueInput!) {
        deleteOneAction(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAction) {
        return response.data.deleteOneAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAction:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Action record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Action or null.
   */
  async get(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType | null> {

    const client = globalClient || importedClient;

    const GET_ACTION = gql`
      query getAction($where: ActionWhereUniqueInput!) {
        getAction(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAction ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Actions records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Action records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<ActionType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_ACTION = gql`
      query getAllAction {
        actions {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ACTION });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.actions ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Action records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Action records or null.
   */
  async findMany(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_ACTION = gql`
      query findManyAction($where: ActionWhereInput!) {
        actions(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Actions) {
        return response.data.actions;
      } else {
       return [] as ActionType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  }
};
