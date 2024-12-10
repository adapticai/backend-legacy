
  
import { Deliverable as DeliverableType } from './generated/typegraphql-prisma/models/Deliverable';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Deliverable model.
   */

  const selectionSet = `
    
  id
  type
  symbol
  assetId
  amount
  allocationPercentage
  settlementType
  settlementMethod
  delayedSettlement
  contract {
    id
    alpacaId
    symbol
    name
    status
    tradable
    expirationDate
    rootSymbol
    underlyingSymbol
    underlyingAssetId
    type
    style
    strikePrice
    multiplier
    size
    openInterest
    openInterestDate
    closePrice
    closePriceDate
    deliverables {
id
    }
    ppind
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
    assetId
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
      action {
        id
        sequence
        tradeId
        type
        note
        status
        fee
        dependsOn
        dependedOnBy
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
      fee
      strikePrice
      expirationDate
      optionType
      stopLossId
      takeProfitId
      contractId
    }
    orderId
    createdAt
    updatedAt
  }
  contractId
  createdAt
  updatedAt

  `;

  export const Deliverable = {

    /**
     * Create a new Deliverable record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Deliverable or null.
     */

    async create(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_DELIVERABLE = gql`
        mutation createOneDeliverable($data: DeliverableCreateInput!) {
          createOneDeliverable(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            type: props.type !== undefined ? props.type : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  assetId: props.assetId !== undefined ? props.assetId : undefined,
  amount: props.amount !== undefined ? props.amount : undefined,
  allocationPercentage: props.allocationPercentage !== undefined ? props.allocationPercentage : undefined,
  settlementType: props.settlementType !== undefined ? props.settlementType : undefined,
  settlementMethod: props.settlementMethod !== undefined ? props.settlementMethod : undefined,
  delayedSettlement: props.delayedSettlement !== undefined ? props.delayedSettlement : undefined,
  contract: props.contract ? 
    typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && Object.keys(props.contract)[0] === 'id'
    ? { connect: {
        id: props.contract.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.contract.id !== undefined ? props.contract.id : undefined,
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? {
            equals: props.contract.name 
           } : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? {
            equals: props.contract.underlyingAssetId 
           } : undefined,
      },
      create: {
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? props.contract.name : undefined,
        status: props.contract.status !== undefined ? props.contract.status : undefined,
        tradable: props.contract.tradable !== undefined ? props.contract.tradable : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? props.contract.expirationDate : undefined,
        rootSymbol: props.contract.rootSymbol !== undefined ? props.contract.rootSymbol : undefined,
        underlyingSymbol: props.contract.underlyingSymbol !== undefined ? props.contract.underlyingSymbol : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? props.contract.underlyingAssetId : undefined,
        type: props.contract.type !== undefined ? props.contract.type : undefined,
        style: props.contract.style !== undefined ? props.contract.style : undefined,
        strikePrice: props.contract.strikePrice !== undefined ? props.contract.strikePrice : undefined,
        multiplier: props.contract.multiplier !== undefined ? props.contract.multiplier : undefined,
        size: props.contract.size !== undefined ? props.contract.size : undefined,
        openInterest: props.contract.openInterest !== undefined ? props.contract.openInterest : undefined,
        openInterestDate: props.contract.openInterestDate !== undefined ? props.contract.openInterestDate : undefined,
        closePrice: props.contract.closePrice !== undefined ? props.contract.closePrice : undefined,
        closePriceDate: props.contract.closePriceDate !== undefined ? props.contract.closePriceDate : undefined,
        ppind: props.contract.ppind !== undefined ? props.contract.ppind : undefined,
        orderId: props.contract.orderId !== undefined ? props.contract.orderId : undefined,
    asset: props.contract.asset ? 
      typeof props.contract.asset === 'object' && Object.keys(props.contract.asset).length === 1 && Object.keys(props.contract.asset)[0] === 'id'
    ? { connect: {
          id: props.contract.asset.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.contract.asset.id !== undefined ? props.contract.asset.id : undefined,
          symbol: props.contract.asset.symbol !== undefined ? props.contract.asset.symbol : undefined,
          name: props.contract.asset.name !== undefined ? props.contract.asset.name : undefined,
        },
        create: {
          symbol: props.contract.asset.symbol !== undefined ? props.contract.asset.symbol : undefined,
          name: props.contract.asset.name !== undefined ? props.contract.asset.name : undefined,
          type: props.contract.asset.type !== undefined ? props.contract.asset.type : undefined,
          logoUrl: props.contract.asset.logoUrl !== undefined ? props.contract.asset.logoUrl : undefined,
          description: props.contract.asset.description !== undefined ? props.contract.asset.description : undefined,
          cik: props.contract.asset.cik !== undefined ? props.contract.asset.cik : undefined,
          exchange: props.contract.asset.exchange !== undefined ? props.contract.asset.exchange : undefined,
          currency: props.contract.asset.currency !== undefined ? props.contract.asset.currency : undefined,
          country: props.contract.asset.country !== undefined ? props.contract.asset.country : undefined,
          sector: props.contract.asset.sector !== undefined ? props.contract.asset.sector : undefined,
          industry: props.contract.asset.industry !== undefined ? props.contract.asset.industry : undefined,
          address: props.contract.asset.address !== undefined ? props.contract.asset.address : undefined,
          officialSite: props.contract.asset.officialSite !== undefined ? props.contract.asset.officialSite : undefined,
          fiscalYearEnd: props.contract.asset.fiscalYearEnd !== undefined ? props.contract.asset.fiscalYearEnd : undefined,
          latestQuarter: props.contract.asset.latestQuarter !== undefined ? props.contract.asset.latestQuarter : undefined,
          marketCapitalization: props.contract.asset.marketCapitalization !== undefined ? props.contract.asset.marketCapitalization : undefined,
          ebitda: props.contract.asset.ebitda !== undefined ? props.contract.asset.ebitda : undefined,
          peRatio: props.contract.asset.peRatio !== undefined ? props.contract.asset.peRatio : undefined,
          pegRatio: props.contract.asset.pegRatio !== undefined ? props.contract.asset.pegRatio : undefined,
          bookValue: props.contract.asset.bookValue !== undefined ? props.contract.asset.bookValue : undefined,
          dividendPerShare: props.contract.asset.dividendPerShare !== undefined ? props.contract.asset.dividendPerShare : undefined,
          dividendYield: props.contract.asset.dividendYield !== undefined ? props.contract.asset.dividendYield : undefined,
          eps: props.contract.asset.eps !== undefined ? props.contract.asset.eps : undefined,
          revenuePerShareTTM: props.contract.asset.revenuePerShareTTM !== undefined ? props.contract.asset.revenuePerShareTTM : undefined,
          profitMargin: props.contract.asset.profitMargin !== undefined ? props.contract.asset.profitMargin : undefined,
          operatingMarginTTM: props.contract.asset.operatingMarginTTM !== undefined ? props.contract.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.contract.asset.returnOnAssetsTTM !== undefined ? props.contract.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.contract.asset.returnOnEquityTTM !== undefined ? props.contract.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.contract.asset.revenueTTM !== undefined ? props.contract.asset.revenueTTM : undefined,
          grossProfitTTM: props.contract.asset.grossProfitTTM !== undefined ? props.contract.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.contract.asset.dilutedEPSTTM !== undefined ? props.contract.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? props.contract.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? props.contract.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.contract.asset.analystTargetPrice !== undefined ? props.contract.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.contract.asset.analystRatingStrongBuy !== undefined ? props.contract.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.contract.asset.analystRatingBuy !== undefined ? props.contract.asset.analystRatingBuy : undefined,
          analystRatingHold: props.contract.asset.analystRatingHold !== undefined ? props.contract.asset.analystRatingHold : undefined,
          analystRatingSell: props.contract.asset.analystRatingSell !== undefined ? props.contract.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.contract.asset.analystRatingStrongSell !== undefined ? props.contract.asset.analystRatingStrongSell : undefined,
          trailingPE: props.contract.asset.trailingPE !== undefined ? props.contract.asset.trailingPE : undefined,
          forwardPE: props.contract.asset.forwardPE !== undefined ? props.contract.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.contract.asset.priceToSalesRatioTTM !== undefined ? props.contract.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.contract.asset.priceToBookRatio !== undefined ? props.contract.asset.priceToBookRatio : undefined,
          evToRevenue: props.contract.asset.evToRevenue !== undefined ? props.contract.asset.evToRevenue : undefined,
          evToEbitda: props.contract.asset.evToEbitda !== undefined ? props.contract.asset.evToEbitda : undefined,
          beta: props.contract.asset.beta !== undefined ? props.contract.asset.beta : undefined,
          week52High: props.contract.asset.week52High !== undefined ? props.contract.asset.week52High : undefined,
          week52Low: props.contract.asset.week52Low !== undefined ? props.contract.asset.week52Low : undefined,
          day50MovingAverage: props.contract.asset.day50MovingAverage !== undefined ? props.contract.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.contract.asset.day200MovingAverage !== undefined ? props.contract.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.contract.asset.sharesOutstanding !== undefined ? props.contract.asset.sharesOutstanding : undefined,
          dividendDate: props.contract.asset.dividendDate !== undefined ? props.contract.asset.dividendDate : undefined,
          exDividendDate: props.contract.asset.exDividendDate !== undefined ? props.contract.asset.exDividendDate : undefined,
          askPrice: props.contract.asset.askPrice !== undefined ? props.contract.asset.askPrice : undefined,
          bidPrice: props.contract.asset.bidPrice !== undefined ? props.contract.asset.bidPrice : undefined,
      trades: props.contract.asset.trades ? 
        Array.isArray(props.contract.asset.trades) && props.contract.asset.trades.length > 0 && props.contract.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.trades.map((item: any) => ({
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
      orders: props.contract.asset.orders ? 
        Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 && props.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.orders.map((item: any) => ({
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
      positions: props.contract.asset.positions ? 
        Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 && props.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.positions.map((item: any) => ({
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
      newsMentions: props.contract.asset.newsMentions ? 
        Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 && props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.newsMentions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.newsMentions.map((item: any) => ({
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
        },
      }
    } : undefined,
    order: props.contract.order ? 
      typeof props.contract.order === 'object' && Object.keys(props.contract.order).length === 1 && Object.keys(props.contract.order)[0] === 'id'
    ? { connect: {
          id: props.contract.order.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.contract.order.id !== undefined ? props.contract.order.id : undefined,
          clientOrderId: props.contract.order.clientOrderId !== undefined ? props.contract.order.clientOrderId : undefined,
          actionId: props.contract.order.actionId !== undefined ? props.contract.order.actionId : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? props.contract.order.stopLossId : undefined,
          contractId: props.contract.order.contractId !== undefined ? props.contract.order.contractId : undefined,
          alpacaAccountId: props.contract.order.alpacaAccountId !== undefined ? {
              equals: props.contract.order.alpacaAccountId 
             } : undefined,
        },
        create: {
          clientOrderId: props.contract.order.clientOrderId !== undefined ? props.contract.order.clientOrderId : undefined,
          qty: props.contract.order.qty !== undefined ? props.contract.order.qty : undefined,
          notional: props.contract.order.notional !== undefined ? props.contract.order.notional : undefined,
          side: props.contract.order.side !== undefined ? props.contract.order.side : undefined,
          type: props.contract.order.type !== undefined ? props.contract.order.type : undefined,
          orderClass: props.contract.order.orderClass !== undefined ? props.contract.order.orderClass : undefined,
          timeInForce: props.contract.order.timeInForce !== undefined ? props.contract.order.timeInForce : undefined,
          limitPrice: props.contract.order.limitPrice !== undefined ? props.contract.order.limitPrice : undefined,
          stopPrice: props.contract.order.stopPrice !== undefined ? props.contract.order.stopPrice : undefined,
          trailPrice: props.contract.order.trailPrice !== undefined ? props.contract.order.trailPrice : undefined,
          trailPercent: props.contract.order.trailPercent !== undefined ? props.contract.order.trailPercent : undefined,
          extendedHours: props.contract.order.extendedHours !== undefined ? props.contract.order.extendedHours : undefined,
          status: props.contract.order.status !== undefined ? props.contract.order.status : undefined,
          submittedAt: props.contract.order.submittedAt !== undefined ? props.contract.order.submittedAt : undefined,
          filledAt: props.contract.order.filledAt !== undefined ? props.contract.order.filledAt : undefined,
          filledQty: props.contract.order.filledQty !== undefined ? props.contract.order.filledQty : undefined,
          filledAvgPrice: props.contract.order.filledAvgPrice !== undefined ? props.contract.order.filledAvgPrice : undefined,
          cancelRequestedAt: props.contract.order.cancelRequestedAt !== undefined ? props.contract.order.cancelRequestedAt : undefined,
          canceledAt: props.contract.order.canceledAt !== undefined ? props.contract.order.canceledAt : undefined,
          fee: props.contract.order.fee !== undefined ? props.contract.order.fee : undefined,
          strikePrice: props.contract.order.strikePrice !== undefined ? props.contract.order.strikePrice : undefined,
          expirationDate: props.contract.order.expirationDate !== undefined ? props.contract.order.expirationDate : undefined,
          optionType: props.contract.order.optionType !== undefined ? props.contract.order.optionType : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? props.contract.order.stopLossId : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? props.contract.order.takeProfitId : undefined,
      stopLoss: props.contract.order.stopLoss ? 
        typeof props.contract.order.stopLoss === 'object' && Object.keys(props.contract.order.stopLoss).length === 1 && Object.keys(props.contract.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: props.contract.order.stopLoss.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.contract.order.stopLoss.id !== undefined ? props.contract.order.stopLoss.id : undefined,
            orderId: props.contract.order.stopLoss.orderId !== undefined ? props.contract.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: props.contract.order.stopLoss.stopPrice !== undefined ? props.contract.order.stopLoss.stopPrice : undefined,
            limitPrice: props.contract.order.stopLoss.limitPrice !== undefined ? props.contract.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: props.contract.order.takeProfit ? 
        typeof props.contract.order.takeProfit === 'object' && Object.keys(props.contract.order.takeProfit).length === 1 && Object.keys(props.contract.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: props.contract.order.takeProfit.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.contract.order.takeProfit.id !== undefined ? props.contract.order.takeProfit.id : undefined,
            orderId: props.contract.order.takeProfit.orderId !== undefined ? props.contract.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: props.contract.order.takeProfit.limitPrice !== undefined ? props.contract.order.takeProfit.limitPrice : undefined,
            stopPrice: props.contract.order.takeProfit.stopPrice !== undefined ? props.contract.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: props.contract.order.alpacaAccount ? 
        typeof props.contract.order.alpacaAccount === 'object' && Object.keys(props.contract.order.alpacaAccount).length === 1 && Object.keys(props.contract.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: props.contract.order.alpacaAccount.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.contract.order.alpacaAccount.id !== undefined ? props.contract.order.alpacaAccount.id : undefined,
            userId: props.contract.order.alpacaAccount.userId !== undefined ? {
                equals: props.contract.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: props.contract.order.alpacaAccount.type !== undefined ? props.contract.order.alpacaAccount.type : undefined,
            APIKey: props.contract.order.alpacaAccount.APIKey !== undefined ? props.contract.order.alpacaAccount.APIKey : undefined,
            APISecret: props.contract.order.alpacaAccount.APISecret !== undefined ? props.contract.order.alpacaAccount.APISecret : undefined,
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? {
              set: props.contract.order.alpacaAccount.configuration
            } : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? props.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? props.contract.order.alpacaAccount.realTime : undefined,
            minOrderSize: props.contract.order.alpacaAccount.minOrderSize !== undefined ? props.contract.order.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: props.contract.order.alpacaAccount.maxOrderSize !== undefined ? props.contract.order.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? props.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? props.contract.order.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      action: props.contract.order.action ? 
        typeof props.contract.order.action === 'object' && Object.keys(props.contract.order.action).length === 1 && Object.keys(props.contract.order.action)[0] === 'id'
    ? { connect: {
            id: props.contract.order.action.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.contract.order.action.id !== undefined ? props.contract.order.action.id : undefined,
            tradeId: props.contract.order.action.tradeId !== undefined ? {
                equals: props.contract.order.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: props.contract.order.action.sequence !== undefined ? props.contract.order.action.sequence : undefined,
            type: props.contract.order.action.type !== undefined ? props.contract.order.action.type : undefined,
            note: props.contract.order.action.note !== undefined ? props.contract.order.action.note : undefined,
            status: props.contract.order.action.status !== undefined ? props.contract.order.action.status : undefined,
            fee: props.contract.order.action.fee !== undefined ? props.contract.order.action.fee : undefined,
            dependsOn: props.contract.order.action.dependsOn !== undefined ? {
              set: props.contract.order.action.dependsOn
            } : undefined,
            dependedOnBy: props.contract.order.action.dependedOnBy !== undefined ? {
              set: props.contract.order.action.dependedOnBy
            } : undefined,
          },
        }
      } : undefined,
      asset: props.contract.order.asset ? 
        typeof props.contract.order.asset === 'object' && Object.keys(props.contract.order.asset).length === 1 && Object.keys(props.contract.order.asset)[0] === 'id'
    ? { connect: {
            id: props.contract.order.asset.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.contract.order.asset.id !== undefined ? props.contract.order.asset.id : undefined,
            symbol: props.contract.order.asset.symbol !== undefined ? props.contract.order.asset.symbol : undefined,
            name: props.contract.order.asset.name !== undefined ? props.contract.order.asset.name : undefined,
          },
          create: {
            symbol: props.contract.order.asset.symbol !== undefined ? props.contract.order.asset.symbol : undefined,
            name: props.contract.order.asset.name !== undefined ? props.contract.order.asset.name : undefined,
            type: props.contract.order.asset.type !== undefined ? props.contract.order.asset.type : undefined,
            logoUrl: props.contract.order.asset.logoUrl !== undefined ? props.contract.order.asset.logoUrl : undefined,
            description: props.contract.order.asset.description !== undefined ? props.contract.order.asset.description : undefined,
            cik: props.contract.order.asset.cik !== undefined ? props.contract.order.asset.cik : undefined,
            exchange: props.contract.order.asset.exchange !== undefined ? props.contract.order.asset.exchange : undefined,
            currency: props.contract.order.asset.currency !== undefined ? props.contract.order.asset.currency : undefined,
            country: props.contract.order.asset.country !== undefined ? props.contract.order.asset.country : undefined,
            sector: props.contract.order.asset.sector !== undefined ? props.contract.order.asset.sector : undefined,
            industry: props.contract.order.asset.industry !== undefined ? props.contract.order.asset.industry : undefined,
            address: props.contract.order.asset.address !== undefined ? props.contract.order.asset.address : undefined,
            officialSite: props.contract.order.asset.officialSite !== undefined ? props.contract.order.asset.officialSite : undefined,
            fiscalYearEnd: props.contract.order.asset.fiscalYearEnd !== undefined ? props.contract.order.asset.fiscalYearEnd : undefined,
            latestQuarter: props.contract.order.asset.latestQuarter !== undefined ? props.contract.order.asset.latestQuarter : undefined,
            marketCapitalization: props.contract.order.asset.marketCapitalization !== undefined ? props.contract.order.asset.marketCapitalization : undefined,
            ebitda: props.contract.order.asset.ebitda !== undefined ? props.contract.order.asset.ebitda : undefined,
            peRatio: props.contract.order.asset.peRatio !== undefined ? props.contract.order.asset.peRatio : undefined,
            pegRatio: props.contract.order.asset.pegRatio !== undefined ? props.contract.order.asset.pegRatio : undefined,
            bookValue: props.contract.order.asset.bookValue !== undefined ? props.contract.order.asset.bookValue : undefined,
            dividendPerShare: props.contract.order.asset.dividendPerShare !== undefined ? props.contract.order.asset.dividendPerShare : undefined,
            dividendYield: props.contract.order.asset.dividendYield !== undefined ? props.contract.order.asset.dividendYield : undefined,
            eps: props.contract.order.asset.eps !== undefined ? props.contract.order.asset.eps : undefined,
            revenuePerShareTTM: props.contract.order.asset.revenuePerShareTTM !== undefined ? props.contract.order.asset.revenuePerShareTTM : undefined,
            profitMargin: props.contract.order.asset.profitMargin !== undefined ? props.contract.order.asset.profitMargin : undefined,
            operatingMarginTTM: props.contract.order.asset.operatingMarginTTM !== undefined ? props.contract.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: props.contract.order.asset.returnOnAssetsTTM !== undefined ? props.contract.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: props.contract.order.asset.returnOnEquityTTM !== undefined ? props.contract.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: props.contract.order.asset.revenueTTM !== undefined ? props.contract.order.asset.revenueTTM : undefined,
            grossProfitTTM: props.contract.order.asset.grossProfitTTM !== undefined ? props.contract.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: props.contract.order.asset.dilutedEPSTTM !== undefined ? props.contract.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: props.contract.order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.contract.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: props.contract.order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.contract.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: props.contract.order.asset.analystTargetPrice !== undefined ? props.contract.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: props.contract.order.asset.analystRatingStrongBuy !== undefined ? props.contract.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: props.contract.order.asset.analystRatingBuy !== undefined ? props.contract.order.asset.analystRatingBuy : undefined,
            analystRatingHold: props.contract.order.asset.analystRatingHold !== undefined ? props.contract.order.asset.analystRatingHold : undefined,
            analystRatingSell: props.contract.order.asset.analystRatingSell !== undefined ? props.contract.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: props.contract.order.asset.analystRatingStrongSell !== undefined ? props.contract.order.asset.analystRatingStrongSell : undefined,
            trailingPE: props.contract.order.asset.trailingPE !== undefined ? props.contract.order.asset.trailingPE : undefined,
            forwardPE: props.contract.order.asset.forwardPE !== undefined ? props.contract.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: props.contract.order.asset.priceToSalesRatioTTM !== undefined ? props.contract.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: props.contract.order.asset.priceToBookRatio !== undefined ? props.contract.order.asset.priceToBookRatio : undefined,
            evToRevenue: props.contract.order.asset.evToRevenue !== undefined ? props.contract.order.asset.evToRevenue : undefined,
            evToEbitda: props.contract.order.asset.evToEbitda !== undefined ? props.contract.order.asset.evToEbitda : undefined,
            beta: props.contract.order.asset.beta !== undefined ? props.contract.order.asset.beta : undefined,
            week52High: props.contract.order.asset.week52High !== undefined ? props.contract.order.asset.week52High : undefined,
            week52Low: props.contract.order.asset.week52Low !== undefined ? props.contract.order.asset.week52Low : undefined,
            day50MovingAverage: props.contract.order.asset.day50MovingAverage !== undefined ? props.contract.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: props.contract.order.asset.day200MovingAverage !== undefined ? props.contract.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: props.contract.order.asset.sharesOutstanding !== undefined ? props.contract.order.asset.sharesOutstanding : undefined,
            dividendDate: props.contract.order.asset.dividendDate !== undefined ? props.contract.order.asset.dividendDate : undefined,
            exDividendDate: props.contract.order.asset.exDividendDate !== undefined ? props.contract.order.asset.exDividendDate : undefined,
            askPrice: props.contract.order.asset.askPrice !== undefined ? props.contract.order.asset.askPrice : undefined,
            bidPrice: props.contract.order.asset.bidPrice !== undefined ? props.contract.order.asset.bidPrice : undefined,
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
      const response = await client.mutate({ mutation: CREATE_ONE_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneDeliverable) {
        return response.data.createOneDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneDeliverable:', error);
      throw error;
    }
  },

  /**
   * Create multiple Deliverable records.
   * @param props - Array of Deliverable objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: DeliverableType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_DELIVERABLE = gql`
      mutation createManyDeliverable($data: [DeliverableCreateManyInput!]!) {
        createManyDeliverable(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  type: prop.type !== undefined ? prop.type : undefined,
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  amount: prop.amount !== undefined ? prop.amount : undefined,
  allocationPercentage: prop.allocationPercentage !== undefined ? prop.allocationPercentage : undefined,
  settlementType: prop.settlementType !== undefined ? prop.settlementType : undefined,
  settlementMethod: prop.settlementMethod !== undefined ? prop.settlementMethod : undefined,
  delayedSettlement: prop.delayedSettlement !== undefined ? prop.delayedSettlement : undefined,
  contractId: prop.contractId !== undefined ? prop.contractId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyDeliverable) {
        return response.data.createManyDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyDeliverable:', error);
      throw error;
    }
  },

  /**
   * Update a single Deliverable record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Deliverable or null.
   */
  async update(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_DELIVERABLE = gql`
      mutation updateOneDeliverable($data: DeliverableUpdateInput!, $where: DeliverableWhereUniqueInput!) {
        updateOneDeliverable(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
    set: props.id
  } : undefined,
  type: props.type !== undefined ? {
    set: props.type
  } : undefined,
  symbol: props.symbol !== undefined ? {
    set: props.symbol
  } : undefined,
  assetId: props.assetId !== undefined ? {
    set: props.assetId
  } : undefined,
  amount: props.amount !== undefined ? {
    set: props.amount
  } : undefined,
  allocationPercentage: props.allocationPercentage !== undefined ? {
    set: props.allocationPercentage
  } : undefined,
  settlementType: props.settlementType !== undefined ? {
    set: props.settlementType
  } : undefined,
  settlementMethod: props.settlementMethod !== undefined ? {
    set: props.settlementMethod
  } : undefined,
  delayedSettlement: props.delayedSettlement !== undefined ? {
    set: props.delayedSettlement
  } : undefined,
  createdAt: props.createdAt !== undefined ? {
    set: props.createdAt
  } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
    set: props.updatedAt
  } : undefined,
  contract: props.contract !== undefined ? {
    set: props.contract
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneDeliverable) {
        return response.data.updateOneDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneDeliverable:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Deliverable record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Deliverable or null.
   */
  async upsert(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_DELIVERABLE = gql`
      mutation upsertOneDeliverable($where: DeliverableWhereUniqueInput!, $create: DeliverableCreateInput!, $update: DeliverableUpdateInput!) {
        upsertOneDeliverable(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
      },
      create: {
    type: props.type !== undefined ? props.type : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  assetId: props.assetId !== undefined ? props.assetId : undefined,
  amount: props.amount !== undefined ? props.amount : undefined,
  allocationPercentage: props.allocationPercentage !== undefined ? props.allocationPercentage : undefined,
  settlementType: props.settlementType !== undefined ? props.settlementType : undefined,
  settlementMethod: props.settlementMethod !== undefined ? props.settlementMethod : undefined,
  delayedSettlement: props.delayedSettlement !== undefined ? props.delayedSettlement : undefined,
  contract: props.contract ? 
    typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && Object.keys(props.contract)[0] === 'id'
    ? { connect: {
        id: props.contract.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.contract.id !== undefined ? props.contract.id : undefined,
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? {
            equals: props.contract.name 
           } : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? {
            equals: props.contract.underlyingAssetId 
           } : undefined,
      },
      create: {
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? props.contract.name : undefined,
        status: props.contract.status !== undefined ? props.contract.status : undefined,
        tradable: props.contract.tradable !== undefined ? props.contract.tradable : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? props.contract.expirationDate : undefined,
        rootSymbol: props.contract.rootSymbol !== undefined ? props.contract.rootSymbol : undefined,
        underlyingSymbol: props.contract.underlyingSymbol !== undefined ? props.contract.underlyingSymbol : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? props.contract.underlyingAssetId : undefined,
        type: props.contract.type !== undefined ? props.contract.type : undefined,
        style: props.contract.style !== undefined ? props.contract.style : undefined,
        strikePrice: props.contract.strikePrice !== undefined ? props.contract.strikePrice : undefined,
        multiplier: props.contract.multiplier !== undefined ? props.contract.multiplier : undefined,
        size: props.contract.size !== undefined ? props.contract.size : undefined,
        openInterest: props.contract.openInterest !== undefined ? props.contract.openInterest : undefined,
        openInterestDate: props.contract.openInterestDate !== undefined ? props.contract.openInterestDate : undefined,
        closePrice: props.contract.closePrice !== undefined ? props.contract.closePrice : undefined,
        closePriceDate: props.contract.closePriceDate !== undefined ? props.contract.closePriceDate : undefined,
        ppind: props.contract.ppind !== undefined ? props.contract.ppind : undefined,
        orderId: props.contract.orderId !== undefined ? props.contract.orderId : undefined,
    asset: props.contract.asset ? 
      typeof props.contract.asset === 'object' && Object.keys(props.contract.asset).length === 1 && Object.keys(props.contract.asset)[0] === 'id'
    ? { connect: {
          id: props.contract.asset.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.contract.asset.id !== undefined ? props.contract.asset.id : undefined,
          symbol: props.contract.asset.symbol !== undefined ? props.contract.asset.symbol : undefined,
          name: props.contract.asset.name !== undefined ? props.contract.asset.name : undefined,
        },
        create: {
          symbol: props.contract.asset.symbol !== undefined ? props.contract.asset.symbol : undefined,
          name: props.contract.asset.name !== undefined ? props.contract.asset.name : undefined,
          type: props.contract.asset.type !== undefined ? props.contract.asset.type : undefined,
          logoUrl: props.contract.asset.logoUrl !== undefined ? props.contract.asset.logoUrl : undefined,
          description: props.contract.asset.description !== undefined ? props.contract.asset.description : undefined,
          cik: props.contract.asset.cik !== undefined ? props.contract.asset.cik : undefined,
          exchange: props.contract.asset.exchange !== undefined ? props.contract.asset.exchange : undefined,
          currency: props.contract.asset.currency !== undefined ? props.contract.asset.currency : undefined,
          country: props.contract.asset.country !== undefined ? props.contract.asset.country : undefined,
          sector: props.contract.asset.sector !== undefined ? props.contract.asset.sector : undefined,
          industry: props.contract.asset.industry !== undefined ? props.contract.asset.industry : undefined,
          address: props.contract.asset.address !== undefined ? props.contract.asset.address : undefined,
          officialSite: props.contract.asset.officialSite !== undefined ? props.contract.asset.officialSite : undefined,
          fiscalYearEnd: props.contract.asset.fiscalYearEnd !== undefined ? props.contract.asset.fiscalYearEnd : undefined,
          latestQuarter: props.contract.asset.latestQuarter !== undefined ? props.contract.asset.latestQuarter : undefined,
          marketCapitalization: props.contract.asset.marketCapitalization !== undefined ? props.contract.asset.marketCapitalization : undefined,
          ebitda: props.contract.asset.ebitda !== undefined ? props.contract.asset.ebitda : undefined,
          peRatio: props.contract.asset.peRatio !== undefined ? props.contract.asset.peRatio : undefined,
          pegRatio: props.contract.asset.pegRatio !== undefined ? props.contract.asset.pegRatio : undefined,
          bookValue: props.contract.asset.bookValue !== undefined ? props.contract.asset.bookValue : undefined,
          dividendPerShare: props.contract.asset.dividendPerShare !== undefined ? props.contract.asset.dividendPerShare : undefined,
          dividendYield: props.contract.asset.dividendYield !== undefined ? props.contract.asset.dividendYield : undefined,
          eps: props.contract.asset.eps !== undefined ? props.contract.asset.eps : undefined,
          revenuePerShareTTM: props.contract.asset.revenuePerShareTTM !== undefined ? props.contract.asset.revenuePerShareTTM : undefined,
          profitMargin: props.contract.asset.profitMargin !== undefined ? props.contract.asset.profitMargin : undefined,
          operatingMarginTTM: props.contract.asset.operatingMarginTTM !== undefined ? props.contract.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.contract.asset.returnOnAssetsTTM !== undefined ? props.contract.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.contract.asset.returnOnEquityTTM !== undefined ? props.contract.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.contract.asset.revenueTTM !== undefined ? props.contract.asset.revenueTTM : undefined,
          grossProfitTTM: props.contract.asset.grossProfitTTM !== undefined ? props.contract.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.contract.asset.dilutedEPSTTM !== undefined ? props.contract.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? props.contract.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? props.contract.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.contract.asset.analystTargetPrice !== undefined ? props.contract.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.contract.asset.analystRatingStrongBuy !== undefined ? props.contract.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.contract.asset.analystRatingBuy !== undefined ? props.contract.asset.analystRatingBuy : undefined,
          analystRatingHold: props.contract.asset.analystRatingHold !== undefined ? props.contract.asset.analystRatingHold : undefined,
          analystRatingSell: props.contract.asset.analystRatingSell !== undefined ? props.contract.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.contract.asset.analystRatingStrongSell !== undefined ? props.contract.asset.analystRatingStrongSell : undefined,
          trailingPE: props.contract.asset.trailingPE !== undefined ? props.contract.asset.trailingPE : undefined,
          forwardPE: props.contract.asset.forwardPE !== undefined ? props.contract.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.contract.asset.priceToSalesRatioTTM !== undefined ? props.contract.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.contract.asset.priceToBookRatio !== undefined ? props.contract.asset.priceToBookRatio : undefined,
          evToRevenue: props.contract.asset.evToRevenue !== undefined ? props.contract.asset.evToRevenue : undefined,
          evToEbitda: props.contract.asset.evToEbitda !== undefined ? props.contract.asset.evToEbitda : undefined,
          beta: props.contract.asset.beta !== undefined ? props.contract.asset.beta : undefined,
          week52High: props.contract.asset.week52High !== undefined ? props.contract.asset.week52High : undefined,
          week52Low: props.contract.asset.week52Low !== undefined ? props.contract.asset.week52Low : undefined,
          day50MovingAverage: props.contract.asset.day50MovingAverage !== undefined ? props.contract.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.contract.asset.day200MovingAverage !== undefined ? props.contract.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.contract.asset.sharesOutstanding !== undefined ? props.contract.asset.sharesOutstanding : undefined,
          dividendDate: props.contract.asset.dividendDate !== undefined ? props.contract.asset.dividendDate : undefined,
          exDividendDate: props.contract.asset.exDividendDate !== undefined ? props.contract.asset.exDividendDate : undefined,
          askPrice: props.contract.asset.askPrice !== undefined ? props.contract.asset.askPrice : undefined,
          bidPrice: props.contract.asset.bidPrice !== undefined ? props.contract.asset.bidPrice : undefined,
      trades: props.contract.asset.trades ? 
        Array.isArray(props.contract.asset.trades) && props.contract.asset.trades.length > 0 && props.contract.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.trades.map((item: any) => ({
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
      orders: props.contract.asset.orders ? 
        Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 && props.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.orders.map((item: any) => ({
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
      positions: props.contract.asset.positions ? 
        Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 && props.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.positions.map((item: any) => ({
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
      newsMentions: props.contract.asset.newsMentions ? 
        Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 && props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.newsMentions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.newsMentions.map((item: any) => ({
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
        },
      }
    } : undefined,
    order: props.contract.order ? 
      typeof props.contract.order === 'object' && Object.keys(props.contract.order).length === 1 && Object.keys(props.contract.order)[0] === 'id'
    ? { connect: {
          id: props.contract.order.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.contract.order.id !== undefined ? props.contract.order.id : undefined,
          clientOrderId: props.contract.order.clientOrderId !== undefined ? props.contract.order.clientOrderId : undefined,
          actionId: props.contract.order.actionId !== undefined ? props.contract.order.actionId : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? props.contract.order.stopLossId : undefined,
          contractId: props.contract.order.contractId !== undefined ? props.contract.order.contractId : undefined,
          alpacaAccountId: props.contract.order.alpacaAccountId !== undefined ? {
              equals: props.contract.order.alpacaAccountId 
             } : undefined,
        },
        create: {
          clientOrderId: props.contract.order.clientOrderId !== undefined ? props.contract.order.clientOrderId : undefined,
          qty: props.contract.order.qty !== undefined ? props.contract.order.qty : undefined,
          notional: props.contract.order.notional !== undefined ? props.contract.order.notional : undefined,
          side: props.contract.order.side !== undefined ? props.contract.order.side : undefined,
          type: props.contract.order.type !== undefined ? props.contract.order.type : undefined,
          orderClass: props.contract.order.orderClass !== undefined ? props.contract.order.orderClass : undefined,
          timeInForce: props.contract.order.timeInForce !== undefined ? props.contract.order.timeInForce : undefined,
          limitPrice: props.contract.order.limitPrice !== undefined ? props.contract.order.limitPrice : undefined,
          stopPrice: props.contract.order.stopPrice !== undefined ? props.contract.order.stopPrice : undefined,
          trailPrice: props.contract.order.trailPrice !== undefined ? props.contract.order.trailPrice : undefined,
          trailPercent: props.contract.order.trailPercent !== undefined ? props.contract.order.trailPercent : undefined,
          extendedHours: props.contract.order.extendedHours !== undefined ? props.contract.order.extendedHours : undefined,
          status: props.contract.order.status !== undefined ? props.contract.order.status : undefined,
          submittedAt: props.contract.order.submittedAt !== undefined ? props.contract.order.submittedAt : undefined,
          filledAt: props.contract.order.filledAt !== undefined ? props.contract.order.filledAt : undefined,
          filledQty: props.contract.order.filledQty !== undefined ? props.contract.order.filledQty : undefined,
          filledAvgPrice: props.contract.order.filledAvgPrice !== undefined ? props.contract.order.filledAvgPrice : undefined,
          cancelRequestedAt: props.contract.order.cancelRequestedAt !== undefined ? props.contract.order.cancelRequestedAt : undefined,
          canceledAt: props.contract.order.canceledAt !== undefined ? props.contract.order.canceledAt : undefined,
          fee: props.contract.order.fee !== undefined ? props.contract.order.fee : undefined,
          strikePrice: props.contract.order.strikePrice !== undefined ? props.contract.order.strikePrice : undefined,
          expirationDate: props.contract.order.expirationDate !== undefined ? props.contract.order.expirationDate : undefined,
          optionType: props.contract.order.optionType !== undefined ? props.contract.order.optionType : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? props.contract.order.stopLossId : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? props.contract.order.takeProfitId : undefined,
      stopLoss: props.contract.order.stopLoss ? 
        typeof props.contract.order.stopLoss === 'object' && Object.keys(props.contract.order.stopLoss).length === 1 && Object.keys(props.contract.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: props.contract.order.stopLoss.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.contract.order.stopLoss.id !== undefined ? props.contract.order.stopLoss.id : undefined,
            orderId: props.contract.order.stopLoss.orderId !== undefined ? props.contract.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: props.contract.order.stopLoss.stopPrice !== undefined ? props.contract.order.stopLoss.stopPrice : undefined,
            limitPrice: props.contract.order.stopLoss.limitPrice !== undefined ? props.contract.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: props.contract.order.takeProfit ? 
        typeof props.contract.order.takeProfit === 'object' && Object.keys(props.contract.order.takeProfit).length === 1 && Object.keys(props.contract.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: props.contract.order.takeProfit.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.contract.order.takeProfit.id !== undefined ? props.contract.order.takeProfit.id : undefined,
            orderId: props.contract.order.takeProfit.orderId !== undefined ? props.contract.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: props.contract.order.takeProfit.limitPrice !== undefined ? props.contract.order.takeProfit.limitPrice : undefined,
            stopPrice: props.contract.order.takeProfit.stopPrice !== undefined ? props.contract.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: props.contract.order.alpacaAccount ? 
        typeof props.contract.order.alpacaAccount === 'object' && Object.keys(props.contract.order.alpacaAccount).length === 1 && Object.keys(props.contract.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: props.contract.order.alpacaAccount.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.contract.order.alpacaAccount.id !== undefined ? props.contract.order.alpacaAccount.id : undefined,
            userId: props.contract.order.alpacaAccount.userId !== undefined ? {
                equals: props.contract.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: props.contract.order.alpacaAccount.type !== undefined ? props.contract.order.alpacaAccount.type : undefined,
            APIKey: props.contract.order.alpacaAccount.APIKey !== undefined ? props.contract.order.alpacaAccount.APIKey : undefined,
            APISecret: props.contract.order.alpacaAccount.APISecret !== undefined ? props.contract.order.alpacaAccount.APISecret : undefined,
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? {
              set: props.contract.order.alpacaAccount.configuration
            } : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? props.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? props.contract.order.alpacaAccount.realTime : undefined,
            minOrderSize: props.contract.order.alpacaAccount.minOrderSize !== undefined ? props.contract.order.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: props.contract.order.alpacaAccount.maxOrderSize !== undefined ? props.contract.order.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? props.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? props.contract.order.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      action: props.contract.order.action ? 
        typeof props.contract.order.action === 'object' && Object.keys(props.contract.order.action).length === 1 && Object.keys(props.contract.order.action)[0] === 'id'
    ? { connect: {
            id: props.contract.order.action.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.contract.order.action.id !== undefined ? props.contract.order.action.id : undefined,
            tradeId: props.contract.order.action.tradeId !== undefined ? {
                equals: props.contract.order.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: props.contract.order.action.sequence !== undefined ? props.contract.order.action.sequence : undefined,
            type: props.contract.order.action.type !== undefined ? props.contract.order.action.type : undefined,
            note: props.contract.order.action.note !== undefined ? props.contract.order.action.note : undefined,
            status: props.contract.order.action.status !== undefined ? props.contract.order.action.status : undefined,
            fee: props.contract.order.action.fee !== undefined ? props.contract.order.action.fee : undefined,
            dependsOn: props.contract.order.action.dependsOn !== undefined ? {
              set: props.contract.order.action.dependsOn
            } : undefined,
            dependedOnBy: props.contract.order.action.dependedOnBy !== undefined ? {
              set: props.contract.order.action.dependedOnBy
            } : undefined,
          },
        }
      } : undefined,
      asset: props.contract.order.asset ? 
        typeof props.contract.order.asset === 'object' && Object.keys(props.contract.order.asset).length === 1 && Object.keys(props.contract.order.asset)[0] === 'id'
    ? { connect: {
            id: props.contract.order.asset.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.contract.order.asset.id !== undefined ? props.contract.order.asset.id : undefined,
            symbol: props.contract.order.asset.symbol !== undefined ? props.contract.order.asset.symbol : undefined,
            name: props.contract.order.asset.name !== undefined ? props.contract.order.asset.name : undefined,
          },
          create: {
            symbol: props.contract.order.asset.symbol !== undefined ? props.contract.order.asset.symbol : undefined,
            name: props.contract.order.asset.name !== undefined ? props.contract.order.asset.name : undefined,
            type: props.contract.order.asset.type !== undefined ? props.contract.order.asset.type : undefined,
            logoUrl: props.contract.order.asset.logoUrl !== undefined ? props.contract.order.asset.logoUrl : undefined,
            description: props.contract.order.asset.description !== undefined ? props.contract.order.asset.description : undefined,
            cik: props.contract.order.asset.cik !== undefined ? props.contract.order.asset.cik : undefined,
            exchange: props.contract.order.asset.exchange !== undefined ? props.contract.order.asset.exchange : undefined,
            currency: props.contract.order.asset.currency !== undefined ? props.contract.order.asset.currency : undefined,
            country: props.contract.order.asset.country !== undefined ? props.contract.order.asset.country : undefined,
            sector: props.contract.order.asset.sector !== undefined ? props.contract.order.asset.sector : undefined,
            industry: props.contract.order.asset.industry !== undefined ? props.contract.order.asset.industry : undefined,
            address: props.contract.order.asset.address !== undefined ? props.contract.order.asset.address : undefined,
            officialSite: props.contract.order.asset.officialSite !== undefined ? props.contract.order.asset.officialSite : undefined,
            fiscalYearEnd: props.contract.order.asset.fiscalYearEnd !== undefined ? props.contract.order.asset.fiscalYearEnd : undefined,
            latestQuarter: props.contract.order.asset.latestQuarter !== undefined ? props.contract.order.asset.latestQuarter : undefined,
            marketCapitalization: props.contract.order.asset.marketCapitalization !== undefined ? props.contract.order.asset.marketCapitalization : undefined,
            ebitda: props.contract.order.asset.ebitda !== undefined ? props.contract.order.asset.ebitda : undefined,
            peRatio: props.contract.order.asset.peRatio !== undefined ? props.contract.order.asset.peRatio : undefined,
            pegRatio: props.contract.order.asset.pegRatio !== undefined ? props.contract.order.asset.pegRatio : undefined,
            bookValue: props.contract.order.asset.bookValue !== undefined ? props.contract.order.asset.bookValue : undefined,
            dividendPerShare: props.contract.order.asset.dividendPerShare !== undefined ? props.contract.order.asset.dividendPerShare : undefined,
            dividendYield: props.contract.order.asset.dividendYield !== undefined ? props.contract.order.asset.dividendYield : undefined,
            eps: props.contract.order.asset.eps !== undefined ? props.contract.order.asset.eps : undefined,
            revenuePerShareTTM: props.contract.order.asset.revenuePerShareTTM !== undefined ? props.contract.order.asset.revenuePerShareTTM : undefined,
            profitMargin: props.contract.order.asset.profitMargin !== undefined ? props.contract.order.asset.profitMargin : undefined,
            operatingMarginTTM: props.contract.order.asset.operatingMarginTTM !== undefined ? props.contract.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: props.contract.order.asset.returnOnAssetsTTM !== undefined ? props.contract.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: props.contract.order.asset.returnOnEquityTTM !== undefined ? props.contract.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: props.contract.order.asset.revenueTTM !== undefined ? props.contract.order.asset.revenueTTM : undefined,
            grossProfitTTM: props.contract.order.asset.grossProfitTTM !== undefined ? props.contract.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: props.contract.order.asset.dilutedEPSTTM !== undefined ? props.contract.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: props.contract.order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.contract.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: props.contract.order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.contract.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: props.contract.order.asset.analystTargetPrice !== undefined ? props.contract.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: props.contract.order.asset.analystRatingStrongBuy !== undefined ? props.contract.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: props.contract.order.asset.analystRatingBuy !== undefined ? props.contract.order.asset.analystRatingBuy : undefined,
            analystRatingHold: props.contract.order.asset.analystRatingHold !== undefined ? props.contract.order.asset.analystRatingHold : undefined,
            analystRatingSell: props.contract.order.asset.analystRatingSell !== undefined ? props.contract.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: props.contract.order.asset.analystRatingStrongSell !== undefined ? props.contract.order.asset.analystRatingStrongSell : undefined,
            trailingPE: props.contract.order.asset.trailingPE !== undefined ? props.contract.order.asset.trailingPE : undefined,
            forwardPE: props.contract.order.asset.forwardPE !== undefined ? props.contract.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: props.contract.order.asset.priceToSalesRatioTTM !== undefined ? props.contract.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: props.contract.order.asset.priceToBookRatio !== undefined ? props.contract.order.asset.priceToBookRatio : undefined,
            evToRevenue: props.contract.order.asset.evToRevenue !== undefined ? props.contract.order.asset.evToRevenue : undefined,
            evToEbitda: props.contract.order.asset.evToEbitda !== undefined ? props.contract.order.asset.evToEbitda : undefined,
            beta: props.contract.order.asset.beta !== undefined ? props.contract.order.asset.beta : undefined,
            week52High: props.contract.order.asset.week52High !== undefined ? props.contract.order.asset.week52High : undefined,
            week52Low: props.contract.order.asset.week52Low !== undefined ? props.contract.order.asset.week52Low : undefined,
            day50MovingAverage: props.contract.order.asset.day50MovingAverage !== undefined ? props.contract.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: props.contract.order.asset.day200MovingAverage !== undefined ? props.contract.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: props.contract.order.asset.sharesOutstanding !== undefined ? props.contract.order.asset.sharesOutstanding : undefined,
            dividendDate: props.contract.order.asset.dividendDate !== undefined ? props.contract.order.asset.dividendDate : undefined,
            exDividendDate: props.contract.order.asset.exDividendDate !== undefined ? props.contract.order.asset.exDividendDate : undefined,
            askPrice: props.contract.order.asset.askPrice !== undefined ? props.contract.order.asset.askPrice : undefined,
            bidPrice: props.contract.order.asset.bidPrice !== undefined ? props.contract.order.asset.bidPrice : undefined,
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
  type: props.type !== undefined ? {
    set: props.type
  } : undefined,
  symbol: props.symbol !== undefined ? {
    set: props.symbol
  } : undefined,
  assetId: props.assetId !== undefined ? {
    set: props.assetId
  } : undefined,
  amount: props.amount !== undefined ? {
    set: props.amount
  } : undefined,
  allocationPercentage: props.allocationPercentage !== undefined ? {
    set: props.allocationPercentage
  } : undefined,
  settlementType: props.settlementType !== undefined ? {
    set: props.settlementType
  } : undefined,
  settlementMethod: props.settlementMethod !== undefined ? {
    set: props.settlementMethod
  } : undefined,
  delayedSettlement: props.delayedSettlement !== undefined ? {
    set: props.delayedSettlement
  } : undefined,
  contract: props.contract !== undefined ? {
    set: props.contract
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneDeliverable) {
        return response.data.upsertOneDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneDeliverable:', error);
      throw error;
    }
  },

  /**
   * Update multiple Deliverable records.
   * @param props - Array of Deliverable objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: DeliverableType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_DELIVERABLE = gql`
      mutation updateManyDeliverable($data: [DeliverableCreateManyInput!]!) {
        updateManyDeliverable(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  symbol: prop.symbol !== undefined ? {
    equals: prop.symbol 
  } : undefined,
  contractId: prop.contractId !== undefined ? {
    equals: prop.contractId 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
    set: prop.id
  } : undefined,
  type: prop.type !== undefined ? {
    set: prop.type
  } : undefined,
  symbol: prop.symbol !== undefined ? {
    set: prop.symbol
  } : undefined,
  assetId: prop.assetId !== undefined ? {
    set: prop.assetId
  } : undefined,
  amount: prop.amount !== undefined ? {
    set: prop.amount
  } : undefined,
  allocationPercentage: prop.allocationPercentage !== undefined ? {
    set: prop.allocationPercentage
  } : undefined,
  settlementType: prop.settlementType !== undefined ? {
    set: prop.settlementType
  } : undefined,
  settlementMethod: prop.settlementMethod !== undefined ? {
    set: prop.settlementMethod
  } : undefined,
  delayedSettlement: prop.delayedSettlement !== undefined ? {
    set: prop.delayedSettlement
  } : undefined,
  createdAt: prop.createdAt !== undefined ? {
    set: prop.createdAt
  } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
    set: prop.updatedAt
  } : undefined,
  contract: prop.contract !== undefined ? {
    set: prop.contract
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyDeliverable) {
        return response.data.updateManyDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyDeliverable:', error);
      throw error;
    }
  },

  /**
   * Delete a single Deliverable record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Deliverable or null.
   */
  async delete(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_DELIVERABLE = gql`
      mutation deleteOneDeliverable($where: DeliverableWhereUniqueInput!) {
        deleteOneDeliverable(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneDeliverable) {
        return response.data.deleteOneDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneDeliverable:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Deliverable record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Deliverable or null.
   */
  async get(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType | null> {

    const client = globalClient || importedClient;

    const GET_DELIVERABLE = gql`
      query getDeliverable($where: DeliverableWhereUniqueInput!) {
        getDeliverable(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getDeliverable ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Deliverable found') {
        return null;
      } else {
        console.error('Error in getDeliverable:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Deliverables records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Deliverable records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<DeliverableType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_DELIVERABLE = gql`
      query getAllDeliverable {
        deliverables {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_DELIVERABLE });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.deliverables ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Deliverable found') {
        return null;
      } else {
        console.error('Error in getDeliverable:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Deliverable records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Deliverable records or null.
   */
  async findMany(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_DELIVERABLE = gql`
      query findManyDeliverable($where: DeliverableWhereInput!) {
        deliverables(where: $where) {
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
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Deliverables) {
        return response.data.deliverables;
      } else {
       return [] as DeliverableType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Deliverable found') {
        return null;
      } else {
        console.error('Error in getDeliverable:', error);
        throw error;
      }
    }
  }
};
