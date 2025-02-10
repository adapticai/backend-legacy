
  
import { Deliverable as DeliverableType } from './generated/typegraphql-prisma/models/Deliverable';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
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
        primary
        note
        status
        fee
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
      fee
      strikePrice
      expirationDate
      expiredAt
      failedAt
      replacedAt
      replacedBy
      replaces
      positionIntent
      legs
      hwm
      subtag
      source
      expiresAt
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

    async create(props: DeliverableType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<DeliverableType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;

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
        }
      }
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
          }
        }
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
      orders: props.contract.asset.orders ? 
        Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 &&  props.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.contract.asset.positions ? 
        Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 &&  props.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      newsMentions: props.contract.asset.newsMentions ? 
        Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 &&  props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.newsMentions.map((item: any) => ({
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
          }
        }
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
          expiredAt: props.contract.order.expiredAt !== undefined ? props.contract.order.expiredAt : undefined,
          failedAt: props.contract.order.failedAt !== undefined ? props.contract.order.failedAt : undefined,
          replacedAt: props.contract.order.replacedAt !== undefined ? props.contract.order.replacedAt : undefined,
          replacedBy: props.contract.order.replacedBy !== undefined ? props.contract.order.replacedBy : undefined,
          replaces: props.contract.order.replaces !== undefined ? props.contract.order.replaces : undefined,
          positionIntent: props.contract.order.positionIntent !== undefined ? props.contract.order.positionIntent : undefined,
          legs: props.contract.order.legs !== undefined ? props.contract.order.legs : undefined,
          hwm: props.contract.order.hwm !== undefined ? props.contract.order.hwm : undefined,
          subtag: props.contract.order.subtag !== undefined ? props.contract.order.subtag : undefined,
          source: props.contract.order.source !== undefined ? props.contract.order.source : undefined,
          expiresAt: props.contract.order.expiresAt !== undefined ? props.contract.order.expiresAt : undefined,
          optionType: props.contract.order.optionType !== undefined ? props.contract.order.optionType : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? props.contract.order.stopLossId : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? props.contract.order.takeProfitId : undefined,
      stopLoss: props.contract.order.stopLoss ? 
        typeof props.contract.order.stopLoss === 'object' && Object.keys(props.contract.order.stopLoss).length === 1 && Object.keys(props.contract.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: props.contract.order.stopLoss.id
            }
          }
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
            }
          }
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
            }
          }
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
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? props.contract.order.alpacaAccount.configuration : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? props.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? props.contract.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: props.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? props.contract.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? props.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? props.contract.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: props.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.contract.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: props.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.contract.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: props.contract.order.action ? 
        typeof props.contract.order.action === 'object' && Object.keys(props.contract.order.action).length === 1 && Object.keys(props.contract.order.action)[0] === 'id'
    ? { connect: {
            id: props.contract.order.action.id
            }
          }
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
            primary: props.contract.order.action.primary !== undefined ? props.contract.order.action.primary : undefined,
            note: props.contract.order.action.note !== undefined ? props.contract.order.action.note : undefined,
            status: props.contract.order.action.status !== undefined ? props.contract.order.action.status : undefined,
            fee: props.contract.order.action.fee !== undefined ? props.contract.order.action.fee : undefined,
          },
        }
      } : undefined,
      asset: props.contract.order.asset ? 
        typeof props.contract.order.asset === 'object' && Object.keys(props.contract.order.asset).length === 1 && Object.keys(props.contract.order.asset)[0] === 'id'
    ? { connect: {
            id: props.contract.order.asset.id
            }
          }
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
  async createMany(props: DeliverableType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  async update(props: DeliverableType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<DeliverableType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  contract: props.contract ? 
  typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && (Object.keys(props.contract)[0] === 'id' || Object.keys(props.contract)[0] === 'symbol')
? {
  connect: {
    id: props.contract.id
  }
} : { upsert: {
      where: {
        id: props.contract.id !== undefined ? {
            equals: props.contract.id
          } : undefined,
        alpacaId: props.contract.alpacaId !== undefined ? {
            equals: props.contract.alpacaId
          } : undefined,
        symbol: props.contract.symbol !== undefined ? {
            equals: props.contract.symbol
          } : undefined,
        name: props.contract.name !== undefined ? {
            equals: props.contract.name
          } : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? {
            equals: props.contract.underlyingAssetId
          } : undefined,
        assetId: props.contract.assetId !== undefined ? {
            equals: props.contract.assetId
          } : undefined,
        orderId: props.contract.orderId !== undefined ? {
            equals: props.contract.orderId
          } : undefined,
      },
      update: {
        id: props.contract.id !== undefined ? {
            set: props.contract.id
          } : undefined,
        alpacaId: props.contract.alpacaId !== undefined ? {
            set: props.contract.alpacaId
          } : undefined,
        symbol: props.contract.symbol !== undefined ? {
            set: props.contract.symbol
          } : undefined,
        name: props.contract.name !== undefined ? {
            set: props.contract.name
          } : undefined,
        status: props.contract.status !== undefined ? {
            set: props.contract.status
          } : undefined,
        tradable: props.contract.tradable !== undefined ? {
            set: props.contract.tradable
          } : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? {
            set: props.contract.expirationDate
          } : undefined,
        rootSymbol: props.contract.rootSymbol !== undefined ? {
            set: props.contract.rootSymbol
          } : undefined,
        underlyingSymbol: props.contract.underlyingSymbol !== undefined ? {
            set: props.contract.underlyingSymbol
          } : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? {
            set: props.contract.underlyingAssetId
          } : undefined,
        type: props.contract.type !== undefined ? {
            set: props.contract.type
          } : undefined,
        style: props.contract.style !== undefined ? {
            set: props.contract.style
          } : undefined,
        strikePrice: props.contract.strikePrice !== undefined ? {
            set: props.contract.strikePrice
          } : undefined,
        multiplier: props.contract.multiplier !== undefined ? {
            set: props.contract.multiplier
          } : undefined,
        size: props.contract.size !== undefined ? {
            set: props.contract.size
          } : undefined,
        openInterest: props.contract.openInterest !== undefined ? {
            set: props.contract.openInterest
          } : undefined,
        openInterestDate: props.contract.openInterestDate !== undefined ? {
            set: props.contract.openInterestDate
          } : undefined,
        closePrice: props.contract.closePrice !== undefined ? {
            set: props.contract.closePrice
          } : undefined,
        closePriceDate: props.contract.closePriceDate !== undefined ? {
            set: props.contract.closePriceDate
          } : undefined,
        ppind: props.contract.ppind !== undefined ? {
            set: props.contract.ppind
          } : undefined,
        orderId: props.contract.orderId !== undefined ? {
            set: props.contract.orderId
          } : undefined,
    asset: props.contract.asset ? 
    typeof props.contract.asset === 'object' && Object.keys(props.contract.asset).length === 1 && (Object.keys(props.contract.asset)[0] === 'id' || Object.keys(props.contract.asset)[0] === 'symbol')
? {
    connect: {
      id: props.contract.asset.id
    }
} : { upsert: {
        where: {
          id: props.contract.asset.id !== undefined ? {
              equals: props.contract.asset.id
            } : undefined,
          symbol: props.contract.asset.symbol !== undefined ? {
              equals: props.contract.asset.symbol
            } : undefined,
          name: props.contract.asset.name !== undefined ? {
              equals: props.contract.asset.name
            } : undefined,
        },
        update: {
          id: props.contract.asset.id !== undefined ? {
              set: props.contract.asset.id
            } : undefined,
          symbol: props.contract.asset.symbol !== undefined ? {
              set: props.contract.asset.symbol
            } : undefined,
          name: props.contract.asset.name !== undefined ? {
              set: props.contract.asset.name
            } : undefined,
          type: props.contract.asset.type !== undefined ? {
              set: props.contract.asset.type
            } : undefined,
          logoUrl: props.contract.asset.logoUrl !== undefined ? {
              set: props.contract.asset.logoUrl
            } : undefined,
          description: props.contract.asset.description !== undefined ? {
              set: props.contract.asset.description
            } : undefined,
          cik: props.contract.asset.cik !== undefined ? {
              set: props.contract.asset.cik
            } : undefined,
          exchange: props.contract.asset.exchange !== undefined ? {
              set: props.contract.asset.exchange
            } : undefined,
          currency: props.contract.asset.currency !== undefined ? {
              set: props.contract.asset.currency
            } : undefined,
          country: props.contract.asset.country !== undefined ? {
              set: props.contract.asset.country
            } : undefined,
          sector: props.contract.asset.sector !== undefined ? {
              set: props.contract.asset.sector
            } : undefined,
          industry: props.contract.asset.industry !== undefined ? {
              set: props.contract.asset.industry
            } : undefined,
          address: props.contract.asset.address !== undefined ? {
              set: props.contract.asset.address
            } : undefined,
          officialSite: props.contract.asset.officialSite !== undefined ? {
              set: props.contract.asset.officialSite
            } : undefined,
          fiscalYearEnd: props.contract.asset.fiscalYearEnd !== undefined ? {
              set: props.contract.asset.fiscalYearEnd
            } : undefined,
          latestQuarter: props.contract.asset.latestQuarter !== undefined ? {
              set: props.contract.asset.latestQuarter
            } : undefined,
          marketCapitalization: props.contract.asset.marketCapitalization !== undefined ? {
              set: props.contract.asset.marketCapitalization
            } : undefined,
          ebitda: props.contract.asset.ebitda !== undefined ? {
              set: props.contract.asset.ebitda
            } : undefined,
          peRatio: props.contract.asset.peRatio !== undefined ? {
              set: props.contract.asset.peRatio
            } : undefined,
          pegRatio: props.contract.asset.pegRatio !== undefined ? {
              set: props.contract.asset.pegRatio
            } : undefined,
          bookValue: props.contract.asset.bookValue !== undefined ? {
              set: props.contract.asset.bookValue
            } : undefined,
          dividendPerShare: props.contract.asset.dividendPerShare !== undefined ? {
              set: props.contract.asset.dividendPerShare
            } : undefined,
          dividendYield: props.contract.asset.dividendYield !== undefined ? {
              set: props.contract.asset.dividendYield
            } : undefined,
          eps: props.contract.asset.eps !== undefined ? {
              set: props.contract.asset.eps
            } : undefined,
          revenuePerShareTTM: props.contract.asset.revenuePerShareTTM !== undefined ? {
              set: props.contract.asset.revenuePerShareTTM
            } : undefined,
          profitMargin: props.contract.asset.profitMargin !== undefined ? {
              set: props.contract.asset.profitMargin
            } : undefined,
          operatingMarginTTM: props.contract.asset.operatingMarginTTM !== undefined ? {
              set: props.contract.asset.operatingMarginTTM
            } : undefined,
          returnOnAssetsTTM: props.contract.asset.returnOnAssetsTTM !== undefined ? {
              set: props.contract.asset.returnOnAssetsTTM
            } : undefined,
          returnOnEquityTTM: props.contract.asset.returnOnEquityTTM !== undefined ? {
              set: props.contract.asset.returnOnEquityTTM
            } : undefined,
          revenueTTM: props.contract.asset.revenueTTM !== undefined ? {
              set: props.contract.asset.revenueTTM
            } : undefined,
          grossProfitTTM: props.contract.asset.grossProfitTTM !== undefined ? {
              set: props.contract.asset.grossProfitTTM
            } : undefined,
          dilutedEPSTTM: props.contract.asset.dilutedEPSTTM !== undefined ? {
              set: props.contract.asset.dilutedEPSTTM
            } : undefined,
          quarterlyEarningsGrowthYOY: props.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: props.contract.asset.quarterlyEarningsGrowthYOY
            } : undefined,
          quarterlyRevenueGrowthYOY: props.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: props.contract.asset.quarterlyRevenueGrowthYOY
            } : undefined,
          analystTargetPrice: props.contract.asset.analystTargetPrice !== undefined ? {
              set: props.contract.asset.analystTargetPrice
            } : undefined,
          analystRatingStrongBuy: props.contract.asset.analystRatingStrongBuy !== undefined ? {
              set: props.contract.asset.analystRatingStrongBuy
            } : undefined,
          analystRatingBuy: props.contract.asset.analystRatingBuy !== undefined ? {
              set: props.contract.asset.analystRatingBuy
            } : undefined,
          analystRatingHold: props.contract.asset.analystRatingHold !== undefined ? {
              set: props.contract.asset.analystRatingHold
            } : undefined,
          analystRatingSell: props.contract.asset.analystRatingSell !== undefined ? {
              set: props.contract.asset.analystRatingSell
            } : undefined,
          analystRatingStrongSell: props.contract.asset.analystRatingStrongSell !== undefined ? {
              set: props.contract.asset.analystRatingStrongSell
            } : undefined,
          trailingPE: props.contract.asset.trailingPE !== undefined ? {
              set: props.contract.asset.trailingPE
            } : undefined,
          forwardPE: props.contract.asset.forwardPE !== undefined ? {
              set: props.contract.asset.forwardPE
            } : undefined,
          priceToSalesRatioTTM: props.contract.asset.priceToSalesRatioTTM !== undefined ? {
              set: props.contract.asset.priceToSalesRatioTTM
            } : undefined,
          priceToBookRatio: props.contract.asset.priceToBookRatio !== undefined ? {
              set: props.contract.asset.priceToBookRatio
            } : undefined,
          evToRevenue: props.contract.asset.evToRevenue !== undefined ? {
              set: props.contract.asset.evToRevenue
            } : undefined,
          evToEbitda: props.contract.asset.evToEbitda !== undefined ? {
              set: props.contract.asset.evToEbitda
            } : undefined,
          beta: props.contract.asset.beta !== undefined ? {
              set: props.contract.asset.beta
            } : undefined,
          week52High: props.contract.asset.week52High !== undefined ? {
              set: props.contract.asset.week52High
            } : undefined,
          week52Low: props.contract.asset.week52Low !== undefined ? {
              set: props.contract.asset.week52Low
            } : undefined,
          day50MovingAverage: props.contract.asset.day50MovingAverage !== undefined ? {
              set: props.contract.asset.day50MovingAverage
            } : undefined,
          day200MovingAverage: props.contract.asset.day200MovingAverage !== undefined ? {
              set: props.contract.asset.day200MovingAverage
            } : undefined,
          sharesOutstanding: props.contract.asset.sharesOutstanding !== undefined ? {
              set: props.contract.asset.sharesOutstanding
            } : undefined,
          dividendDate: props.contract.asset.dividendDate !== undefined ? {
              set: props.contract.asset.dividendDate
            } : undefined,
          exDividendDate: props.contract.asset.exDividendDate !== undefined ? {
              set: props.contract.asset.exDividendDate
            } : undefined,
          askPrice: props.contract.asset.askPrice !== undefined ? {
              set: props.contract.asset.askPrice
            } : undefined,
          bidPrice: props.contract.asset.bidPrice !== undefined ? {
              set: props.contract.asset.bidPrice
            } : undefined,
      orders: props.contract.asset.orders ? 
      Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 && props.contract.asset.orders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.contract.asset.orders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.contract.asset.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.contract.asset.positions ? 
      Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 && props.contract.asset.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.contract.asset.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.contract.asset.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      newsMentions: props.contract.asset.newsMentions ? 
      Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 && props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.contract.asset.newsMentions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.contract.asset.newsMentions.map((item: any) => ({
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
      orders: props.contract.asset.orders ? 
        Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 &&  props.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.contract.asset.positions ? 
        Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 &&  props.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      newsMentions: props.contract.asset.newsMentions ? 
        Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 &&  props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.newsMentions.map((item: any) => ({
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
    typeof props.contract.order === 'object' && Object.keys(props.contract.order).length === 1 && (Object.keys(props.contract.order)[0] === 'id' || Object.keys(props.contract.order)[0] === 'symbol')
? {
    connect: {
      id: props.contract.order.id
    }
} : { upsert: {
        where: {
          id: props.contract.order.id !== undefined ? {
              equals: props.contract.order.id
            } : undefined,
          clientOrderId: props.contract.order.clientOrderId !== undefined ? {
              equals: props.contract.order.clientOrderId
            } : undefined,
          alpacaAccountId: props.contract.order.alpacaAccountId !== undefined ? {
              equals: props.contract.order.alpacaAccountId
            } : undefined,
          assetId: props.contract.order.assetId !== undefined ? {
              equals: props.contract.order.assetId
            } : undefined,
          actionId: props.contract.order.actionId !== undefined ? {
              equals: props.contract.order.actionId
            } : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? {
              equals: props.contract.order.stopLossId
            } : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? {
              equals: props.contract.order.takeProfitId
            } : undefined,
          contractId: props.contract.order.contractId !== undefined ? {
              equals: props.contract.order.contractId
            } : undefined,
        },
        update: {
          id: props.contract.order.id !== undefined ? {
              set: props.contract.order.id
            } : undefined,
          clientOrderId: props.contract.order.clientOrderId !== undefined ? {
              set: props.contract.order.clientOrderId
            } : undefined,
          qty: props.contract.order.qty !== undefined ? {
              set: props.contract.order.qty
            } : undefined,
          notional: props.contract.order.notional !== undefined ? {
              set: props.contract.order.notional
            } : undefined,
          side: props.contract.order.side !== undefined ? {
              set: props.contract.order.side
            } : undefined,
          type: props.contract.order.type !== undefined ? {
              set: props.contract.order.type
            } : undefined,
          orderClass: props.contract.order.orderClass !== undefined ? {
              set: props.contract.order.orderClass
            } : undefined,
          timeInForce: props.contract.order.timeInForce !== undefined ? {
              set: props.contract.order.timeInForce
            } : undefined,
          limitPrice: props.contract.order.limitPrice !== undefined ? {
              set: props.contract.order.limitPrice
            } : undefined,
          stopPrice: props.contract.order.stopPrice !== undefined ? {
              set: props.contract.order.stopPrice
            } : undefined,
          trailPrice: props.contract.order.trailPrice !== undefined ? {
              set: props.contract.order.trailPrice
            } : undefined,
          trailPercent: props.contract.order.trailPercent !== undefined ? {
              set: props.contract.order.trailPercent
            } : undefined,
          extendedHours: props.contract.order.extendedHours !== undefined ? {
              set: props.contract.order.extendedHours
            } : undefined,
          status: props.contract.order.status !== undefined ? {
              set: props.contract.order.status
            } : undefined,
          submittedAt: props.contract.order.submittedAt !== undefined ? {
              set: props.contract.order.submittedAt
            } : undefined,
          filledAt: props.contract.order.filledAt !== undefined ? {
              set: props.contract.order.filledAt
            } : undefined,
          filledQty: props.contract.order.filledQty !== undefined ? {
              set: props.contract.order.filledQty
            } : undefined,
          filledAvgPrice: props.contract.order.filledAvgPrice !== undefined ? {
              set: props.contract.order.filledAvgPrice
            } : undefined,
          cancelRequestedAt: props.contract.order.cancelRequestedAt !== undefined ? {
              set: props.contract.order.cancelRequestedAt
            } : undefined,
          canceledAt: props.contract.order.canceledAt !== undefined ? {
              set: props.contract.order.canceledAt
            } : undefined,
          fee: props.contract.order.fee !== undefined ? {
              set: props.contract.order.fee
            } : undefined,
          strikePrice: props.contract.order.strikePrice !== undefined ? {
              set: props.contract.order.strikePrice
            } : undefined,
          expirationDate: props.contract.order.expirationDate !== undefined ? {
              set: props.contract.order.expirationDate
            } : undefined,
          expiredAt: props.contract.order.expiredAt !== undefined ? {
              set: props.contract.order.expiredAt
            } : undefined,
          failedAt: props.contract.order.failedAt !== undefined ? {
              set: props.contract.order.failedAt
            } : undefined,
          replacedAt: props.contract.order.replacedAt !== undefined ? {
              set: props.contract.order.replacedAt
            } : undefined,
          replacedBy: props.contract.order.replacedBy !== undefined ? {
              set: props.contract.order.replacedBy
            } : undefined,
          replaces: props.contract.order.replaces !== undefined ? {
              set: props.contract.order.replaces
            } : undefined,
          positionIntent: props.contract.order.positionIntent !== undefined ? {
              set: props.contract.order.positionIntent
            } : undefined,
          legs: props.contract.order.legs !== undefined ? {
              set: props.contract.order.legs
            } : undefined,
          hwm: props.contract.order.hwm !== undefined ? {
              set: props.contract.order.hwm
            } : undefined,
          subtag: props.contract.order.subtag !== undefined ? {
              set: props.contract.order.subtag
            } : undefined,
          source: props.contract.order.source !== undefined ? {
              set: props.contract.order.source
            } : undefined,
          expiresAt: props.contract.order.expiresAt !== undefined ? {
              set: props.contract.order.expiresAt
            } : undefined,
          optionType: props.contract.order.optionType !== undefined ? {
              set: props.contract.order.optionType
            } : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? {
              set: props.contract.order.stopLossId
            } : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? {
              set: props.contract.order.takeProfitId
            } : undefined,
      stopLoss: props.contract.order.stopLoss ? 
      typeof props.contract.order.stopLoss === 'object' && Object.keys(props.contract.order.stopLoss).length === 1 && (Object.keys(props.contract.order.stopLoss)[0] === 'id' || Object.keys(props.contract.order.stopLoss)[0] === 'symbol')
? {
      connect: {
        id: props.contract.order.stopLoss.id
      }
} : { upsert: {
          where: {
            id: props.contract.order.stopLoss.id !== undefined ? {
                equals: props.contract.order.stopLoss.id
              } : undefined,
            orderId: props.contract.order.stopLoss.orderId !== undefined ? {
                equals: props.contract.order.stopLoss.orderId
              } : undefined,
          },
          update: {
            id: props.contract.order.stopLoss.id !== undefined ? {
                set: props.contract.order.stopLoss.id
              } : undefined,
            stopPrice: props.contract.order.stopLoss.stopPrice !== undefined ? {
                set: props.contract.order.stopLoss.stopPrice
              } : undefined,
            limitPrice: props.contract.order.stopLoss.limitPrice !== undefined ? {
                set: props.contract.order.stopLoss.limitPrice
              } : undefined,
          },
          create: {
            stopPrice: props.contract.order.stopLoss.stopPrice !== undefined ? props.contract.order.stopLoss.stopPrice : undefined,
            limitPrice: props.contract.order.stopLoss.limitPrice !== undefined ? props.contract.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: props.contract.order.takeProfit ? 
      typeof props.contract.order.takeProfit === 'object' && Object.keys(props.contract.order.takeProfit).length === 1 && (Object.keys(props.contract.order.takeProfit)[0] === 'id' || Object.keys(props.contract.order.takeProfit)[0] === 'symbol')
? {
      connect: {
        id: props.contract.order.takeProfit.id
      }
} : { upsert: {
          where: {
            id: props.contract.order.takeProfit.id !== undefined ? {
                equals: props.contract.order.takeProfit.id
              } : undefined,
            orderId: props.contract.order.takeProfit.orderId !== undefined ? {
                equals: props.contract.order.takeProfit.orderId
              } : undefined,
          },
          update: {
            id: props.contract.order.takeProfit.id !== undefined ? {
                set: props.contract.order.takeProfit.id
              } : undefined,
            limitPrice: props.contract.order.takeProfit.limitPrice !== undefined ? {
                set: props.contract.order.takeProfit.limitPrice
              } : undefined,
            stopPrice: props.contract.order.takeProfit.stopPrice !== undefined ? {
                set: props.contract.order.takeProfit.stopPrice
              } : undefined,
          },
          create: {
            limitPrice: props.contract.order.takeProfit.limitPrice !== undefined ? props.contract.order.takeProfit.limitPrice : undefined,
            stopPrice: props.contract.order.takeProfit.stopPrice !== undefined ? props.contract.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: props.contract.order.alpacaAccount ? 
      typeof props.contract.order.alpacaAccount === 'object' && Object.keys(props.contract.order.alpacaAccount).length === 1 && (Object.keys(props.contract.order.alpacaAccount)[0] === 'id' || Object.keys(props.contract.order.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: props.contract.order.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: props.contract.order.alpacaAccount.id !== undefined ? {
                equals: props.contract.order.alpacaAccount.id
              } : undefined,
            userId: props.contract.order.alpacaAccount.userId !== undefined ? {
                equals: props.contract.order.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: props.contract.order.alpacaAccount.id !== undefined ? {
                set: props.contract.order.alpacaAccount.id
              } : undefined,
            type: props.contract.order.alpacaAccount.type !== undefined ? {
                set: props.contract.order.alpacaAccount.type
              } : undefined,
            APIKey: props.contract.order.alpacaAccount.APIKey !== undefined ? {
                set: props.contract.order.alpacaAccount.APIKey
              } : undefined,
            APISecret: props.contract.order.alpacaAccount.APISecret !== undefined ? {
                set: props.contract.order.alpacaAccount.APISecret
              } : undefined,
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? {
                set: props.contract.order.alpacaAccount.configuration
              } : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? {
                set: props.contract.order.alpacaAccount.marketOpen
              } : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? {
                set: props.contract.order.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: props.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: props.contract.order.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? {
                set: props.contract.order.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? {
                set: props.contract.order.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: props.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: props.contract.order.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: props.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: props.contract.order.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: props.contract.order.alpacaAccount.type !== undefined ? props.contract.order.alpacaAccount.type : undefined,
            APIKey: props.contract.order.alpacaAccount.APIKey !== undefined ? props.contract.order.alpacaAccount.APIKey : undefined,
            APISecret: props.contract.order.alpacaAccount.APISecret !== undefined ? props.contract.order.alpacaAccount.APISecret : undefined,
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? props.contract.order.alpacaAccount.configuration : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? props.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? props.contract.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: props.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? props.contract.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? props.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? props.contract.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: props.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.contract.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: props.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.contract.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: props.contract.order.action ? 
      typeof props.contract.order.action === 'object' && Object.keys(props.contract.order.action).length === 1 && (Object.keys(props.contract.order.action)[0] === 'id' || Object.keys(props.contract.order.action)[0] === 'symbol')
? {
      connect: {
        id: props.contract.order.action.id
      }
} : { upsert: {
          where: {
            id: props.contract.order.action.id !== undefined ? {
                equals: props.contract.order.action.id
              } : undefined,
            tradeId: props.contract.order.action.tradeId !== undefined ? {
                equals: props.contract.order.action.tradeId
              } : undefined,
          },
          update: {
            id: props.contract.order.action.id !== undefined ? {
                set: props.contract.order.action.id
              } : undefined,
            sequence: props.contract.order.action.sequence !== undefined ? {
                set: props.contract.order.action.sequence
              } : undefined,
            type: props.contract.order.action.type !== undefined ? {
                set: props.contract.order.action.type
              } : undefined,
            primary: props.contract.order.action.primary !== undefined ? {
                set: props.contract.order.action.primary
              } : undefined,
            note: props.contract.order.action.note !== undefined ? {
                set: props.contract.order.action.note
              } : undefined,
            status: props.contract.order.action.status !== undefined ? {
                set: props.contract.order.action.status
              } : undefined,
            fee: props.contract.order.action.fee !== undefined ? {
                set: props.contract.order.action.fee
              } : undefined,
          },
          create: {
            sequence: props.contract.order.action.sequence !== undefined ? props.contract.order.action.sequence : undefined,
            type: props.contract.order.action.type !== undefined ? props.contract.order.action.type : undefined,
            primary: props.contract.order.action.primary !== undefined ? props.contract.order.action.primary : undefined,
            note: props.contract.order.action.note !== undefined ? props.contract.order.action.note : undefined,
            status: props.contract.order.action.status !== undefined ? props.contract.order.action.status : undefined,
            fee: props.contract.order.action.fee !== undefined ? props.contract.order.action.fee : undefined,
          },
        }
      } : undefined,
      asset: props.contract.order.asset ? 
      typeof props.contract.order.asset === 'object' && Object.keys(props.contract.order.asset).length === 1 && (Object.keys(props.contract.order.asset)[0] === 'id' || Object.keys(props.contract.order.asset)[0] === 'symbol')
? {
      connect: {
        id: props.contract.order.asset.id
      }
} : { upsert: {
          where: {
            id: props.contract.order.asset.id !== undefined ? {
                equals: props.contract.order.asset.id
              } : undefined,
            symbol: props.contract.order.asset.symbol !== undefined ? {
                equals: props.contract.order.asset.symbol
              } : undefined,
            name: props.contract.order.asset.name !== undefined ? {
                equals: props.contract.order.asset.name
              } : undefined,
          },
          update: {
            id: props.contract.order.asset.id !== undefined ? {
                set: props.contract.order.asset.id
              } : undefined,
            symbol: props.contract.order.asset.symbol !== undefined ? {
                set: props.contract.order.asset.symbol
              } : undefined,
            name: props.contract.order.asset.name !== undefined ? {
                set: props.contract.order.asset.name
              } : undefined,
            type: props.contract.order.asset.type !== undefined ? {
                set: props.contract.order.asset.type
              } : undefined,
            logoUrl: props.contract.order.asset.logoUrl !== undefined ? {
                set: props.contract.order.asset.logoUrl
              } : undefined,
            description: props.contract.order.asset.description !== undefined ? {
                set: props.contract.order.asset.description
              } : undefined,
            cik: props.contract.order.asset.cik !== undefined ? {
                set: props.contract.order.asset.cik
              } : undefined,
            exchange: props.contract.order.asset.exchange !== undefined ? {
                set: props.contract.order.asset.exchange
              } : undefined,
            currency: props.contract.order.asset.currency !== undefined ? {
                set: props.contract.order.asset.currency
              } : undefined,
            country: props.contract.order.asset.country !== undefined ? {
                set: props.contract.order.asset.country
              } : undefined,
            sector: props.contract.order.asset.sector !== undefined ? {
                set: props.contract.order.asset.sector
              } : undefined,
            industry: props.contract.order.asset.industry !== undefined ? {
                set: props.contract.order.asset.industry
              } : undefined,
            address: props.contract.order.asset.address !== undefined ? {
                set: props.contract.order.asset.address
              } : undefined,
            officialSite: props.contract.order.asset.officialSite !== undefined ? {
                set: props.contract.order.asset.officialSite
              } : undefined,
            fiscalYearEnd: props.contract.order.asset.fiscalYearEnd !== undefined ? {
                set: props.contract.order.asset.fiscalYearEnd
              } : undefined,
            latestQuarter: props.contract.order.asset.latestQuarter !== undefined ? {
                set: props.contract.order.asset.latestQuarter
              } : undefined,
            marketCapitalization: props.contract.order.asset.marketCapitalization !== undefined ? {
                set: props.contract.order.asset.marketCapitalization
              } : undefined,
            ebitda: props.contract.order.asset.ebitda !== undefined ? {
                set: props.contract.order.asset.ebitda
              } : undefined,
            peRatio: props.contract.order.asset.peRatio !== undefined ? {
                set: props.contract.order.asset.peRatio
              } : undefined,
            pegRatio: props.contract.order.asset.pegRatio !== undefined ? {
                set: props.contract.order.asset.pegRatio
              } : undefined,
            bookValue: props.contract.order.asset.bookValue !== undefined ? {
                set: props.contract.order.asset.bookValue
              } : undefined,
            dividendPerShare: props.contract.order.asset.dividendPerShare !== undefined ? {
                set: props.contract.order.asset.dividendPerShare
              } : undefined,
            dividendYield: props.contract.order.asset.dividendYield !== undefined ? {
                set: props.contract.order.asset.dividendYield
              } : undefined,
            eps: props.contract.order.asset.eps !== undefined ? {
                set: props.contract.order.asset.eps
              } : undefined,
            revenuePerShareTTM: props.contract.order.asset.revenuePerShareTTM !== undefined ? {
                set: props.contract.order.asset.revenuePerShareTTM
              } : undefined,
            profitMargin: props.contract.order.asset.profitMargin !== undefined ? {
                set: props.contract.order.asset.profitMargin
              } : undefined,
            operatingMarginTTM: props.contract.order.asset.operatingMarginTTM !== undefined ? {
                set: props.contract.order.asset.operatingMarginTTM
              } : undefined,
            returnOnAssetsTTM: props.contract.order.asset.returnOnAssetsTTM !== undefined ? {
                set: props.contract.order.asset.returnOnAssetsTTM
              } : undefined,
            returnOnEquityTTM: props.contract.order.asset.returnOnEquityTTM !== undefined ? {
                set: props.contract.order.asset.returnOnEquityTTM
              } : undefined,
            revenueTTM: props.contract.order.asset.revenueTTM !== undefined ? {
                set: props.contract.order.asset.revenueTTM
              } : undefined,
            grossProfitTTM: props.contract.order.asset.grossProfitTTM !== undefined ? {
                set: props.contract.order.asset.grossProfitTTM
              } : undefined,
            dilutedEPSTTM: props.contract.order.asset.dilutedEPSTTM !== undefined ? {
                set: props.contract.order.asset.dilutedEPSTTM
              } : undefined,
            quarterlyEarningsGrowthYOY: props.contract.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: props.contract.order.asset.quarterlyEarningsGrowthYOY
              } : undefined,
            quarterlyRevenueGrowthYOY: props.contract.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: props.contract.order.asset.quarterlyRevenueGrowthYOY
              } : undefined,
            analystTargetPrice: props.contract.order.asset.analystTargetPrice !== undefined ? {
                set: props.contract.order.asset.analystTargetPrice
              } : undefined,
            analystRatingStrongBuy: props.contract.order.asset.analystRatingStrongBuy !== undefined ? {
                set: props.contract.order.asset.analystRatingStrongBuy
              } : undefined,
            analystRatingBuy: props.contract.order.asset.analystRatingBuy !== undefined ? {
                set: props.contract.order.asset.analystRatingBuy
              } : undefined,
            analystRatingHold: props.contract.order.asset.analystRatingHold !== undefined ? {
                set: props.contract.order.asset.analystRatingHold
              } : undefined,
            analystRatingSell: props.contract.order.asset.analystRatingSell !== undefined ? {
                set: props.contract.order.asset.analystRatingSell
              } : undefined,
            analystRatingStrongSell: props.contract.order.asset.analystRatingStrongSell !== undefined ? {
                set: props.contract.order.asset.analystRatingStrongSell
              } : undefined,
            trailingPE: props.contract.order.asset.trailingPE !== undefined ? {
                set: props.contract.order.asset.trailingPE
              } : undefined,
            forwardPE: props.contract.order.asset.forwardPE !== undefined ? {
                set: props.contract.order.asset.forwardPE
              } : undefined,
            priceToSalesRatioTTM: props.contract.order.asset.priceToSalesRatioTTM !== undefined ? {
                set: props.contract.order.asset.priceToSalesRatioTTM
              } : undefined,
            priceToBookRatio: props.contract.order.asset.priceToBookRatio !== undefined ? {
                set: props.contract.order.asset.priceToBookRatio
              } : undefined,
            evToRevenue: props.contract.order.asset.evToRevenue !== undefined ? {
                set: props.contract.order.asset.evToRevenue
              } : undefined,
            evToEbitda: props.contract.order.asset.evToEbitda !== undefined ? {
                set: props.contract.order.asset.evToEbitda
              } : undefined,
            beta: props.contract.order.asset.beta !== undefined ? {
                set: props.contract.order.asset.beta
              } : undefined,
            week52High: props.contract.order.asset.week52High !== undefined ? {
                set: props.contract.order.asset.week52High
              } : undefined,
            week52Low: props.contract.order.asset.week52Low !== undefined ? {
                set: props.contract.order.asset.week52Low
              } : undefined,
            day50MovingAverage: props.contract.order.asset.day50MovingAverage !== undefined ? {
                set: props.contract.order.asset.day50MovingAverage
              } : undefined,
            day200MovingAverage: props.contract.order.asset.day200MovingAverage !== undefined ? {
                set: props.contract.order.asset.day200MovingAverage
              } : undefined,
            sharesOutstanding: props.contract.order.asset.sharesOutstanding !== undefined ? {
                set: props.contract.order.asset.sharesOutstanding
              } : undefined,
            dividendDate: props.contract.order.asset.dividendDate !== undefined ? {
                set: props.contract.order.asset.dividendDate
              } : undefined,
            exDividendDate: props.contract.order.asset.exDividendDate !== undefined ? {
                set: props.contract.order.asset.exDividendDate
              } : undefined,
            askPrice: props.contract.order.asset.askPrice !== undefined ? {
                set: props.contract.order.asset.askPrice
              } : undefined,
            bidPrice: props.contract.order.asset.bidPrice !== undefined ? {
                set: props.contract.order.asset.bidPrice
              } : undefined,
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
          expiredAt: props.contract.order.expiredAt !== undefined ? props.contract.order.expiredAt : undefined,
          failedAt: props.contract.order.failedAt !== undefined ? props.contract.order.failedAt : undefined,
          replacedAt: props.contract.order.replacedAt !== undefined ? props.contract.order.replacedAt : undefined,
          replacedBy: props.contract.order.replacedBy !== undefined ? props.contract.order.replacedBy : undefined,
          replaces: props.contract.order.replaces !== undefined ? props.contract.order.replaces : undefined,
          positionIntent: props.contract.order.positionIntent !== undefined ? props.contract.order.positionIntent : undefined,
          legs: props.contract.order.legs !== undefined ? props.contract.order.legs : undefined,
          hwm: props.contract.order.hwm !== undefined ? props.contract.order.hwm : undefined,
          subtag: props.contract.order.subtag !== undefined ? props.contract.order.subtag : undefined,
          source: props.contract.order.source !== undefined ? props.contract.order.source : undefined,
          expiresAt: props.contract.order.expiresAt !== undefined ? props.contract.order.expiresAt : undefined,
          optionType: props.contract.order.optionType !== undefined ? props.contract.order.optionType : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? props.contract.order.stopLossId : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? props.contract.order.takeProfitId : undefined,
      stopLoss: props.contract.order.stopLoss ? 
        typeof props.contract.order.stopLoss === 'object' && Object.keys(props.contract.order.stopLoss).length === 1 && Object.keys(props.contract.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: props.contract.order.stopLoss.id
            }
          }
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
            }
          }
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
            }
          }
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
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? props.contract.order.alpacaAccount.configuration : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? props.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? props.contract.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: props.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? props.contract.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? props.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? props.contract.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: props.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.contract.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: props.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.contract.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: props.contract.order.action ? 
        typeof props.contract.order.action === 'object' && Object.keys(props.contract.order.action).length === 1 && Object.keys(props.contract.order.action)[0] === 'id'
    ? { connect: {
            id: props.contract.order.action.id
            }
          }
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
            primary: props.contract.order.action.primary !== undefined ? props.contract.order.action.primary : undefined,
            note: props.contract.order.action.note !== undefined ? props.contract.order.action.note : undefined,
            status: props.contract.order.action.status !== undefined ? props.contract.order.action.status : undefined,
            fee: props.contract.order.action.fee !== undefined ? props.contract.order.action.fee : undefined,
          },
        }
      } : undefined,
      asset: props.contract.order.asset ? 
        typeof props.contract.order.asset === 'object' && Object.keys(props.contract.order.asset).length === 1 && Object.keys(props.contract.order.asset)[0] === 'id'
    ? { connect: {
            id: props.contract.order.asset.id
            }
          }
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
          }
        }
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
      orders: props.contract.asset.orders ? 
        Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 &&  props.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.contract.asset.positions ? 
        Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 &&  props.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      newsMentions: props.contract.asset.newsMentions ? 
        Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 &&  props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.newsMentions.map((item: any) => ({
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
          }
        }
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
          expiredAt: props.contract.order.expiredAt !== undefined ? props.contract.order.expiredAt : undefined,
          failedAt: props.contract.order.failedAt !== undefined ? props.contract.order.failedAt : undefined,
          replacedAt: props.contract.order.replacedAt !== undefined ? props.contract.order.replacedAt : undefined,
          replacedBy: props.contract.order.replacedBy !== undefined ? props.contract.order.replacedBy : undefined,
          replaces: props.contract.order.replaces !== undefined ? props.contract.order.replaces : undefined,
          positionIntent: props.contract.order.positionIntent !== undefined ? props.contract.order.positionIntent : undefined,
          legs: props.contract.order.legs !== undefined ? props.contract.order.legs : undefined,
          hwm: props.contract.order.hwm !== undefined ? props.contract.order.hwm : undefined,
          subtag: props.contract.order.subtag !== undefined ? props.contract.order.subtag : undefined,
          source: props.contract.order.source !== undefined ? props.contract.order.source : undefined,
          expiresAt: props.contract.order.expiresAt !== undefined ? props.contract.order.expiresAt : undefined,
          optionType: props.contract.order.optionType !== undefined ? props.contract.order.optionType : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? props.contract.order.stopLossId : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? props.contract.order.takeProfitId : undefined,
      stopLoss: props.contract.order.stopLoss ? 
        typeof props.contract.order.stopLoss === 'object' && Object.keys(props.contract.order.stopLoss).length === 1 && Object.keys(props.contract.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: props.contract.order.stopLoss.id
            }
          }
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
            }
          }
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
            }
          }
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
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? props.contract.order.alpacaAccount.configuration : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? props.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? props.contract.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: props.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? props.contract.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? props.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? props.contract.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: props.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.contract.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: props.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.contract.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: props.contract.order.action ? 
        typeof props.contract.order.action === 'object' && Object.keys(props.contract.order.action).length === 1 && Object.keys(props.contract.order.action)[0] === 'id'
    ? { connect: {
            id: props.contract.order.action.id
            }
          }
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
            primary: props.contract.order.action.primary !== undefined ? props.contract.order.action.primary : undefined,
            note: props.contract.order.action.note !== undefined ? props.contract.order.action.note : undefined,
            status: props.contract.order.action.status !== undefined ? props.contract.order.action.status : undefined,
            fee: props.contract.order.action.fee !== undefined ? props.contract.order.action.fee : undefined,
          },
        }
      } : undefined,
      asset: props.contract.order.asset ? 
        typeof props.contract.order.asset === 'object' && Object.keys(props.contract.order.asset).length === 1 && Object.keys(props.contract.order.asset)[0] === 'id'
    ? { connect: {
            id: props.contract.order.asset.id
            }
          }
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
  async upsert(props: DeliverableType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<DeliverableType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
        }
      }
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
          }
        }
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
      orders: props.contract.asset.orders ? 
        Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 &&  props.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.contract.asset.positions ? 
        Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 &&  props.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      newsMentions: props.contract.asset.newsMentions ? 
        Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 &&  props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.newsMentions.map((item: any) => ({
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
          }
        }
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
          expiredAt: props.contract.order.expiredAt !== undefined ? props.contract.order.expiredAt : undefined,
          failedAt: props.contract.order.failedAt !== undefined ? props.contract.order.failedAt : undefined,
          replacedAt: props.contract.order.replacedAt !== undefined ? props.contract.order.replacedAt : undefined,
          replacedBy: props.contract.order.replacedBy !== undefined ? props.contract.order.replacedBy : undefined,
          replaces: props.contract.order.replaces !== undefined ? props.contract.order.replaces : undefined,
          positionIntent: props.contract.order.positionIntent !== undefined ? props.contract.order.positionIntent : undefined,
          legs: props.contract.order.legs !== undefined ? props.contract.order.legs : undefined,
          hwm: props.contract.order.hwm !== undefined ? props.contract.order.hwm : undefined,
          subtag: props.contract.order.subtag !== undefined ? props.contract.order.subtag : undefined,
          source: props.contract.order.source !== undefined ? props.contract.order.source : undefined,
          expiresAt: props.contract.order.expiresAt !== undefined ? props.contract.order.expiresAt : undefined,
          optionType: props.contract.order.optionType !== undefined ? props.contract.order.optionType : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? props.contract.order.stopLossId : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? props.contract.order.takeProfitId : undefined,
      stopLoss: props.contract.order.stopLoss ? 
        typeof props.contract.order.stopLoss === 'object' && Object.keys(props.contract.order.stopLoss).length === 1 && Object.keys(props.contract.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: props.contract.order.stopLoss.id
            }
          }
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
            }
          }
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
            }
          }
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
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? props.contract.order.alpacaAccount.configuration : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? props.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? props.contract.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: props.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? props.contract.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? props.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? props.contract.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: props.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.contract.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: props.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.contract.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: props.contract.order.action ? 
        typeof props.contract.order.action === 'object' && Object.keys(props.contract.order.action).length === 1 && Object.keys(props.contract.order.action)[0] === 'id'
    ? { connect: {
            id: props.contract.order.action.id
            }
          }
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
            primary: props.contract.order.action.primary !== undefined ? props.contract.order.action.primary : undefined,
            note: props.contract.order.action.note !== undefined ? props.contract.order.action.note : undefined,
            status: props.contract.order.action.status !== undefined ? props.contract.order.action.status : undefined,
            fee: props.contract.order.action.fee !== undefined ? props.contract.order.action.fee : undefined,
          },
        }
      } : undefined,
      asset: props.contract.order.asset ? 
        typeof props.contract.order.asset === 'object' && Object.keys(props.contract.order.asset).length === 1 && Object.keys(props.contract.order.asset)[0] === 'id'
    ? { connect: {
            id: props.contract.order.asset.id
            }
          }
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
  contract: props.contract ? 
  typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && (Object.keys(props.contract)[0] === 'id' || Object.keys(props.contract)[0] === 'symbol')
? {
  connect: {
    id: props.contract.id
  }
} : { upsert: {
      where: {
        id: props.contract.id !== undefined ? {
            equals: props.contract.id
          } : undefined,
        alpacaId: props.contract.alpacaId !== undefined ? {
            equals: props.contract.alpacaId
          } : undefined,
        symbol: props.contract.symbol !== undefined ? {
            equals: props.contract.symbol
          } : undefined,
        name: props.contract.name !== undefined ? {
            equals: props.contract.name
          } : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? {
            equals: props.contract.underlyingAssetId
          } : undefined,
        assetId: props.contract.assetId !== undefined ? {
            equals: props.contract.assetId
          } : undefined,
        orderId: props.contract.orderId !== undefined ? {
            equals: props.contract.orderId
          } : undefined,
      },
      update: {
        id: props.contract.id !== undefined ? {
            set: props.contract.id
          } : undefined,
        alpacaId: props.contract.alpacaId !== undefined ? {
            set: props.contract.alpacaId
          } : undefined,
        symbol: props.contract.symbol !== undefined ? {
            set: props.contract.symbol
          } : undefined,
        name: props.contract.name !== undefined ? {
            set: props.contract.name
          } : undefined,
        status: props.contract.status !== undefined ? {
            set: props.contract.status
          } : undefined,
        tradable: props.contract.tradable !== undefined ? {
            set: props.contract.tradable
          } : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? {
            set: props.contract.expirationDate
          } : undefined,
        rootSymbol: props.contract.rootSymbol !== undefined ? {
            set: props.contract.rootSymbol
          } : undefined,
        underlyingSymbol: props.contract.underlyingSymbol !== undefined ? {
            set: props.contract.underlyingSymbol
          } : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? {
            set: props.contract.underlyingAssetId
          } : undefined,
        type: props.contract.type !== undefined ? {
            set: props.contract.type
          } : undefined,
        style: props.contract.style !== undefined ? {
            set: props.contract.style
          } : undefined,
        strikePrice: props.contract.strikePrice !== undefined ? {
            set: props.contract.strikePrice
          } : undefined,
        multiplier: props.contract.multiplier !== undefined ? {
            set: props.contract.multiplier
          } : undefined,
        size: props.contract.size !== undefined ? {
            set: props.contract.size
          } : undefined,
        openInterest: props.contract.openInterest !== undefined ? {
            set: props.contract.openInterest
          } : undefined,
        openInterestDate: props.contract.openInterestDate !== undefined ? {
            set: props.contract.openInterestDate
          } : undefined,
        closePrice: props.contract.closePrice !== undefined ? {
            set: props.contract.closePrice
          } : undefined,
        closePriceDate: props.contract.closePriceDate !== undefined ? {
            set: props.contract.closePriceDate
          } : undefined,
        ppind: props.contract.ppind !== undefined ? {
            set: props.contract.ppind
          } : undefined,
        orderId: props.contract.orderId !== undefined ? {
            set: props.contract.orderId
          } : undefined,
    asset: props.contract.asset ? 
    typeof props.contract.asset === 'object' && Object.keys(props.contract.asset).length === 1 && (Object.keys(props.contract.asset)[0] === 'id' || Object.keys(props.contract.asset)[0] === 'symbol')
? {
    connect: {
      id: props.contract.asset.id
    }
} : { upsert: {
        where: {
          id: props.contract.asset.id !== undefined ? {
              equals: props.contract.asset.id
            } : undefined,
          symbol: props.contract.asset.symbol !== undefined ? {
              equals: props.contract.asset.symbol
            } : undefined,
          name: props.contract.asset.name !== undefined ? {
              equals: props.contract.asset.name
            } : undefined,
        },
        update: {
          id: props.contract.asset.id !== undefined ? {
              set: props.contract.asset.id
            } : undefined,
          symbol: props.contract.asset.symbol !== undefined ? {
              set: props.contract.asset.symbol
            } : undefined,
          name: props.contract.asset.name !== undefined ? {
              set: props.contract.asset.name
            } : undefined,
          type: props.contract.asset.type !== undefined ? {
              set: props.contract.asset.type
            } : undefined,
          logoUrl: props.contract.asset.logoUrl !== undefined ? {
              set: props.contract.asset.logoUrl
            } : undefined,
          description: props.contract.asset.description !== undefined ? {
              set: props.contract.asset.description
            } : undefined,
          cik: props.contract.asset.cik !== undefined ? {
              set: props.contract.asset.cik
            } : undefined,
          exchange: props.contract.asset.exchange !== undefined ? {
              set: props.contract.asset.exchange
            } : undefined,
          currency: props.contract.asset.currency !== undefined ? {
              set: props.contract.asset.currency
            } : undefined,
          country: props.contract.asset.country !== undefined ? {
              set: props.contract.asset.country
            } : undefined,
          sector: props.contract.asset.sector !== undefined ? {
              set: props.contract.asset.sector
            } : undefined,
          industry: props.contract.asset.industry !== undefined ? {
              set: props.contract.asset.industry
            } : undefined,
          address: props.contract.asset.address !== undefined ? {
              set: props.contract.asset.address
            } : undefined,
          officialSite: props.contract.asset.officialSite !== undefined ? {
              set: props.contract.asset.officialSite
            } : undefined,
          fiscalYearEnd: props.contract.asset.fiscalYearEnd !== undefined ? {
              set: props.contract.asset.fiscalYearEnd
            } : undefined,
          latestQuarter: props.contract.asset.latestQuarter !== undefined ? {
              set: props.contract.asset.latestQuarter
            } : undefined,
          marketCapitalization: props.contract.asset.marketCapitalization !== undefined ? {
              set: props.contract.asset.marketCapitalization
            } : undefined,
          ebitda: props.contract.asset.ebitda !== undefined ? {
              set: props.contract.asset.ebitda
            } : undefined,
          peRatio: props.contract.asset.peRatio !== undefined ? {
              set: props.contract.asset.peRatio
            } : undefined,
          pegRatio: props.contract.asset.pegRatio !== undefined ? {
              set: props.contract.asset.pegRatio
            } : undefined,
          bookValue: props.contract.asset.bookValue !== undefined ? {
              set: props.contract.asset.bookValue
            } : undefined,
          dividendPerShare: props.contract.asset.dividendPerShare !== undefined ? {
              set: props.contract.asset.dividendPerShare
            } : undefined,
          dividendYield: props.contract.asset.dividendYield !== undefined ? {
              set: props.contract.asset.dividendYield
            } : undefined,
          eps: props.contract.asset.eps !== undefined ? {
              set: props.contract.asset.eps
            } : undefined,
          revenuePerShareTTM: props.contract.asset.revenuePerShareTTM !== undefined ? {
              set: props.contract.asset.revenuePerShareTTM
            } : undefined,
          profitMargin: props.contract.asset.profitMargin !== undefined ? {
              set: props.contract.asset.profitMargin
            } : undefined,
          operatingMarginTTM: props.contract.asset.operatingMarginTTM !== undefined ? {
              set: props.contract.asset.operatingMarginTTM
            } : undefined,
          returnOnAssetsTTM: props.contract.asset.returnOnAssetsTTM !== undefined ? {
              set: props.contract.asset.returnOnAssetsTTM
            } : undefined,
          returnOnEquityTTM: props.contract.asset.returnOnEquityTTM !== undefined ? {
              set: props.contract.asset.returnOnEquityTTM
            } : undefined,
          revenueTTM: props.contract.asset.revenueTTM !== undefined ? {
              set: props.contract.asset.revenueTTM
            } : undefined,
          grossProfitTTM: props.contract.asset.grossProfitTTM !== undefined ? {
              set: props.contract.asset.grossProfitTTM
            } : undefined,
          dilutedEPSTTM: props.contract.asset.dilutedEPSTTM !== undefined ? {
              set: props.contract.asset.dilutedEPSTTM
            } : undefined,
          quarterlyEarningsGrowthYOY: props.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: props.contract.asset.quarterlyEarningsGrowthYOY
            } : undefined,
          quarterlyRevenueGrowthYOY: props.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: props.contract.asset.quarterlyRevenueGrowthYOY
            } : undefined,
          analystTargetPrice: props.contract.asset.analystTargetPrice !== undefined ? {
              set: props.contract.asset.analystTargetPrice
            } : undefined,
          analystRatingStrongBuy: props.contract.asset.analystRatingStrongBuy !== undefined ? {
              set: props.contract.asset.analystRatingStrongBuy
            } : undefined,
          analystRatingBuy: props.contract.asset.analystRatingBuy !== undefined ? {
              set: props.contract.asset.analystRatingBuy
            } : undefined,
          analystRatingHold: props.contract.asset.analystRatingHold !== undefined ? {
              set: props.contract.asset.analystRatingHold
            } : undefined,
          analystRatingSell: props.contract.asset.analystRatingSell !== undefined ? {
              set: props.contract.asset.analystRatingSell
            } : undefined,
          analystRatingStrongSell: props.contract.asset.analystRatingStrongSell !== undefined ? {
              set: props.contract.asset.analystRatingStrongSell
            } : undefined,
          trailingPE: props.contract.asset.trailingPE !== undefined ? {
              set: props.contract.asset.trailingPE
            } : undefined,
          forwardPE: props.contract.asset.forwardPE !== undefined ? {
              set: props.contract.asset.forwardPE
            } : undefined,
          priceToSalesRatioTTM: props.contract.asset.priceToSalesRatioTTM !== undefined ? {
              set: props.contract.asset.priceToSalesRatioTTM
            } : undefined,
          priceToBookRatio: props.contract.asset.priceToBookRatio !== undefined ? {
              set: props.contract.asset.priceToBookRatio
            } : undefined,
          evToRevenue: props.contract.asset.evToRevenue !== undefined ? {
              set: props.contract.asset.evToRevenue
            } : undefined,
          evToEbitda: props.contract.asset.evToEbitda !== undefined ? {
              set: props.contract.asset.evToEbitda
            } : undefined,
          beta: props.contract.asset.beta !== undefined ? {
              set: props.contract.asset.beta
            } : undefined,
          week52High: props.contract.asset.week52High !== undefined ? {
              set: props.contract.asset.week52High
            } : undefined,
          week52Low: props.contract.asset.week52Low !== undefined ? {
              set: props.contract.asset.week52Low
            } : undefined,
          day50MovingAverage: props.contract.asset.day50MovingAverage !== undefined ? {
              set: props.contract.asset.day50MovingAverage
            } : undefined,
          day200MovingAverage: props.contract.asset.day200MovingAverage !== undefined ? {
              set: props.contract.asset.day200MovingAverage
            } : undefined,
          sharesOutstanding: props.contract.asset.sharesOutstanding !== undefined ? {
              set: props.contract.asset.sharesOutstanding
            } : undefined,
          dividendDate: props.contract.asset.dividendDate !== undefined ? {
              set: props.contract.asset.dividendDate
            } : undefined,
          exDividendDate: props.contract.asset.exDividendDate !== undefined ? {
              set: props.contract.asset.exDividendDate
            } : undefined,
          askPrice: props.contract.asset.askPrice !== undefined ? {
              set: props.contract.asset.askPrice
            } : undefined,
          bidPrice: props.contract.asset.bidPrice !== undefined ? {
              set: props.contract.asset.bidPrice
            } : undefined,
      orders: props.contract.asset.orders ? 
      Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 && props.contract.asset.orders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.contract.asset.orders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.contract.asset.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.contract.asset.positions ? 
      Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 && props.contract.asset.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.contract.asset.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.contract.asset.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      newsMentions: props.contract.asset.newsMentions ? 
      Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 && props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.contract.asset.newsMentions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.contract.asset.newsMentions.map((item: any) => ({
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
      orders: props.contract.asset.orders ? 
        Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 &&  props.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.contract.asset.positions ? 
        Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 &&  props.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      newsMentions: props.contract.asset.newsMentions ? 
        Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 &&  props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.newsMentions.map((item: any) => ({
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
    typeof props.contract.order === 'object' && Object.keys(props.contract.order).length === 1 && (Object.keys(props.contract.order)[0] === 'id' || Object.keys(props.contract.order)[0] === 'symbol')
? {
    connect: {
      id: props.contract.order.id
    }
} : { upsert: {
        where: {
          id: props.contract.order.id !== undefined ? {
              equals: props.contract.order.id
            } : undefined,
          clientOrderId: props.contract.order.clientOrderId !== undefined ? {
              equals: props.contract.order.clientOrderId
            } : undefined,
          alpacaAccountId: props.contract.order.alpacaAccountId !== undefined ? {
              equals: props.contract.order.alpacaAccountId
            } : undefined,
          assetId: props.contract.order.assetId !== undefined ? {
              equals: props.contract.order.assetId
            } : undefined,
          actionId: props.contract.order.actionId !== undefined ? {
              equals: props.contract.order.actionId
            } : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? {
              equals: props.contract.order.stopLossId
            } : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? {
              equals: props.contract.order.takeProfitId
            } : undefined,
          contractId: props.contract.order.contractId !== undefined ? {
              equals: props.contract.order.contractId
            } : undefined,
        },
        update: {
          id: props.contract.order.id !== undefined ? {
              set: props.contract.order.id
            } : undefined,
          clientOrderId: props.contract.order.clientOrderId !== undefined ? {
              set: props.contract.order.clientOrderId
            } : undefined,
          qty: props.contract.order.qty !== undefined ? {
              set: props.contract.order.qty
            } : undefined,
          notional: props.contract.order.notional !== undefined ? {
              set: props.contract.order.notional
            } : undefined,
          side: props.contract.order.side !== undefined ? {
              set: props.contract.order.side
            } : undefined,
          type: props.contract.order.type !== undefined ? {
              set: props.contract.order.type
            } : undefined,
          orderClass: props.contract.order.orderClass !== undefined ? {
              set: props.contract.order.orderClass
            } : undefined,
          timeInForce: props.contract.order.timeInForce !== undefined ? {
              set: props.contract.order.timeInForce
            } : undefined,
          limitPrice: props.contract.order.limitPrice !== undefined ? {
              set: props.contract.order.limitPrice
            } : undefined,
          stopPrice: props.contract.order.stopPrice !== undefined ? {
              set: props.contract.order.stopPrice
            } : undefined,
          trailPrice: props.contract.order.trailPrice !== undefined ? {
              set: props.contract.order.trailPrice
            } : undefined,
          trailPercent: props.contract.order.trailPercent !== undefined ? {
              set: props.contract.order.trailPercent
            } : undefined,
          extendedHours: props.contract.order.extendedHours !== undefined ? {
              set: props.contract.order.extendedHours
            } : undefined,
          status: props.contract.order.status !== undefined ? {
              set: props.contract.order.status
            } : undefined,
          submittedAt: props.contract.order.submittedAt !== undefined ? {
              set: props.contract.order.submittedAt
            } : undefined,
          filledAt: props.contract.order.filledAt !== undefined ? {
              set: props.contract.order.filledAt
            } : undefined,
          filledQty: props.contract.order.filledQty !== undefined ? {
              set: props.contract.order.filledQty
            } : undefined,
          filledAvgPrice: props.contract.order.filledAvgPrice !== undefined ? {
              set: props.contract.order.filledAvgPrice
            } : undefined,
          cancelRequestedAt: props.contract.order.cancelRequestedAt !== undefined ? {
              set: props.contract.order.cancelRequestedAt
            } : undefined,
          canceledAt: props.contract.order.canceledAt !== undefined ? {
              set: props.contract.order.canceledAt
            } : undefined,
          fee: props.contract.order.fee !== undefined ? {
              set: props.contract.order.fee
            } : undefined,
          strikePrice: props.contract.order.strikePrice !== undefined ? {
              set: props.contract.order.strikePrice
            } : undefined,
          expirationDate: props.contract.order.expirationDate !== undefined ? {
              set: props.contract.order.expirationDate
            } : undefined,
          expiredAt: props.contract.order.expiredAt !== undefined ? {
              set: props.contract.order.expiredAt
            } : undefined,
          failedAt: props.contract.order.failedAt !== undefined ? {
              set: props.contract.order.failedAt
            } : undefined,
          replacedAt: props.contract.order.replacedAt !== undefined ? {
              set: props.contract.order.replacedAt
            } : undefined,
          replacedBy: props.contract.order.replacedBy !== undefined ? {
              set: props.contract.order.replacedBy
            } : undefined,
          replaces: props.contract.order.replaces !== undefined ? {
              set: props.contract.order.replaces
            } : undefined,
          positionIntent: props.contract.order.positionIntent !== undefined ? {
              set: props.contract.order.positionIntent
            } : undefined,
          legs: props.contract.order.legs !== undefined ? {
              set: props.contract.order.legs
            } : undefined,
          hwm: props.contract.order.hwm !== undefined ? {
              set: props.contract.order.hwm
            } : undefined,
          subtag: props.contract.order.subtag !== undefined ? {
              set: props.contract.order.subtag
            } : undefined,
          source: props.contract.order.source !== undefined ? {
              set: props.contract.order.source
            } : undefined,
          expiresAt: props.contract.order.expiresAt !== undefined ? {
              set: props.contract.order.expiresAt
            } : undefined,
          optionType: props.contract.order.optionType !== undefined ? {
              set: props.contract.order.optionType
            } : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? {
              set: props.contract.order.stopLossId
            } : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? {
              set: props.contract.order.takeProfitId
            } : undefined,
      stopLoss: props.contract.order.stopLoss ? 
      typeof props.contract.order.stopLoss === 'object' && Object.keys(props.contract.order.stopLoss).length === 1 && (Object.keys(props.contract.order.stopLoss)[0] === 'id' || Object.keys(props.contract.order.stopLoss)[0] === 'symbol')
? {
      connect: {
        id: props.contract.order.stopLoss.id
      }
} : { upsert: {
          where: {
            id: props.contract.order.stopLoss.id !== undefined ? {
                equals: props.contract.order.stopLoss.id
              } : undefined,
            orderId: props.contract.order.stopLoss.orderId !== undefined ? {
                equals: props.contract.order.stopLoss.orderId
              } : undefined,
          },
          update: {
            id: props.contract.order.stopLoss.id !== undefined ? {
                set: props.contract.order.stopLoss.id
              } : undefined,
            stopPrice: props.contract.order.stopLoss.stopPrice !== undefined ? {
                set: props.contract.order.stopLoss.stopPrice
              } : undefined,
            limitPrice: props.contract.order.stopLoss.limitPrice !== undefined ? {
                set: props.contract.order.stopLoss.limitPrice
              } : undefined,
          },
          create: {
            stopPrice: props.contract.order.stopLoss.stopPrice !== undefined ? props.contract.order.stopLoss.stopPrice : undefined,
            limitPrice: props.contract.order.stopLoss.limitPrice !== undefined ? props.contract.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: props.contract.order.takeProfit ? 
      typeof props.contract.order.takeProfit === 'object' && Object.keys(props.contract.order.takeProfit).length === 1 && (Object.keys(props.contract.order.takeProfit)[0] === 'id' || Object.keys(props.contract.order.takeProfit)[0] === 'symbol')
? {
      connect: {
        id: props.contract.order.takeProfit.id
      }
} : { upsert: {
          where: {
            id: props.contract.order.takeProfit.id !== undefined ? {
                equals: props.contract.order.takeProfit.id
              } : undefined,
            orderId: props.contract.order.takeProfit.orderId !== undefined ? {
                equals: props.contract.order.takeProfit.orderId
              } : undefined,
          },
          update: {
            id: props.contract.order.takeProfit.id !== undefined ? {
                set: props.contract.order.takeProfit.id
              } : undefined,
            limitPrice: props.contract.order.takeProfit.limitPrice !== undefined ? {
                set: props.contract.order.takeProfit.limitPrice
              } : undefined,
            stopPrice: props.contract.order.takeProfit.stopPrice !== undefined ? {
                set: props.contract.order.takeProfit.stopPrice
              } : undefined,
          },
          create: {
            limitPrice: props.contract.order.takeProfit.limitPrice !== undefined ? props.contract.order.takeProfit.limitPrice : undefined,
            stopPrice: props.contract.order.takeProfit.stopPrice !== undefined ? props.contract.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: props.contract.order.alpacaAccount ? 
      typeof props.contract.order.alpacaAccount === 'object' && Object.keys(props.contract.order.alpacaAccount).length === 1 && (Object.keys(props.contract.order.alpacaAccount)[0] === 'id' || Object.keys(props.contract.order.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: props.contract.order.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: props.contract.order.alpacaAccount.id !== undefined ? {
                equals: props.contract.order.alpacaAccount.id
              } : undefined,
            userId: props.contract.order.alpacaAccount.userId !== undefined ? {
                equals: props.contract.order.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: props.contract.order.alpacaAccount.id !== undefined ? {
                set: props.contract.order.alpacaAccount.id
              } : undefined,
            type: props.contract.order.alpacaAccount.type !== undefined ? {
                set: props.contract.order.alpacaAccount.type
              } : undefined,
            APIKey: props.contract.order.alpacaAccount.APIKey !== undefined ? {
                set: props.contract.order.alpacaAccount.APIKey
              } : undefined,
            APISecret: props.contract.order.alpacaAccount.APISecret !== undefined ? {
                set: props.contract.order.alpacaAccount.APISecret
              } : undefined,
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? {
                set: props.contract.order.alpacaAccount.configuration
              } : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? {
                set: props.contract.order.alpacaAccount.marketOpen
              } : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? {
                set: props.contract.order.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: props.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: props.contract.order.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? {
                set: props.contract.order.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? {
                set: props.contract.order.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: props.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: props.contract.order.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: props.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: props.contract.order.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: props.contract.order.alpacaAccount.type !== undefined ? props.contract.order.alpacaAccount.type : undefined,
            APIKey: props.contract.order.alpacaAccount.APIKey !== undefined ? props.contract.order.alpacaAccount.APIKey : undefined,
            APISecret: props.contract.order.alpacaAccount.APISecret !== undefined ? props.contract.order.alpacaAccount.APISecret : undefined,
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? props.contract.order.alpacaAccount.configuration : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? props.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? props.contract.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: props.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? props.contract.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? props.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? props.contract.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: props.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.contract.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: props.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.contract.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: props.contract.order.action ? 
      typeof props.contract.order.action === 'object' && Object.keys(props.contract.order.action).length === 1 && (Object.keys(props.contract.order.action)[0] === 'id' || Object.keys(props.contract.order.action)[0] === 'symbol')
? {
      connect: {
        id: props.contract.order.action.id
      }
} : { upsert: {
          where: {
            id: props.contract.order.action.id !== undefined ? {
                equals: props.contract.order.action.id
              } : undefined,
            tradeId: props.contract.order.action.tradeId !== undefined ? {
                equals: props.contract.order.action.tradeId
              } : undefined,
          },
          update: {
            id: props.contract.order.action.id !== undefined ? {
                set: props.contract.order.action.id
              } : undefined,
            sequence: props.contract.order.action.sequence !== undefined ? {
                set: props.contract.order.action.sequence
              } : undefined,
            type: props.contract.order.action.type !== undefined ? {
                set: props.contract.order.action.type
              } : undefined,
            primary: props.contract.order.action.primary !== undefined ? {
                set: props.contract.order.action.primary
              } : undefined,
            note: props.contract.order.action.note !== undefined ? {
                set: props.contract.order.action.note
              } : undefined,
            status: props.contract.order.action.status !== undefined ? {
                set: props.contract.order.action.status
              } : undefined,
            fee: props.contract.order.action.fee !== undefined ? {
                set: props.contract.order.action.fee
              } : undefined,
          },
          create: {
            sequence: props.contract.order.action.sequence !== undefined ? props.contract.order.action.sequence : undefined,
            type: props.contract.order.action.type !== undefined ? props.contract.order.action.type : undefined,
            primary: props.contract.order.action.primary !== undefined ? props.contract.order.action.primary : undefined,
            note: props.contract.order.action.note !== undefined ? props.contract.order.action.note : undefined,
            status: props.contract.order.action.status !== undefined ? props.contract.order.action.status : undefined,
            fee: props.contract.order.action.fee !== undefined ? props.contract.order.action.fee : undefined,
          },
        }
      } : undefined,
      asset: props.contract.order.asset ? 
      typeof props.contract.order.asset === 'object' && Object.keys(props.contract.order.asset).length === 1 && (Object.keys(props.contract.order.asset)[0] === 'id' || Object.keys(props.contract.order.asset)[0] === 'symbol')
? {
      connect: {
        id: props.contract.order.asset.id
      }
} : { upsert: {
          where: {
            id: props.contract.order.asset.id !== undefined ? {
                equals: props.contract.order.asset.id
              } : undefined,
            symbol: props.contract.order.asset.symbol !== undefined ? {
                equals: props.contract.order.asset.symbol
              } : undefined,
            name: props.contract.order.asset.name !== undefined ? {
                equals: props.contract.order.asset.name
              } : undefined,
          },
          update: {
            id: props.contract.order.asset.id !== undefined ? {
                set: props.contract.order.asset.id
              } : undefined,
            symbol: props.contract.order.asset.symbol !== undefined ? {
                set: props.contract.order.asset.symbol
              } : undefined,
            name: props.contract.order.asset.name !== undefined ? {
                set: props.contract.order.asset.name
              } : undefined,
            type: props.contract.order.asset.type !== undefined ? {
                set: props.contract.order.asset.type
              } : undefined,
            logoUrl: props.contract.order.asset.logoUrl !== undefined ? {
                set: props.contract.order.asset.logoUrl
              } : undefined,
            description: props.contract.order.asset.description !== undefined ? {
                set: props.contract.order.asset.description
              } : undefined,
            cik: props.contract.order.asset.cik !== undefined ? {
                set: props.contract.order.asset.cik
              } : undefined,
            exchange: props.contract.order.asset.exchange !== undefined ? {
                set: props.contract.order.asset.exchange
              } : undefined,
            currency: props.contract.order.asset.currency !== undefined ? {
                set: props.contract.order.asset.currency
              } : undefined,
            country: props.contract.order.asset.country !== undefined ? {
                set: props.contract.order.asset.country
              } : undefined,
            sector: props.contract.order.asset.sector !== undefined ? {
                set: props.contract.order.asset.sector
              } : undefined,
            industry: props.contract.order.asset.industry !== undefined ? {
                set: props.contract.order.asset.industry
              } : undefined,
            address: props.contract.order.asset.address !== undefined ? {
                set: props.contract.order.asset.address
              } : undefined,
            officialSite: props.contract.order.asset.officialSite !== undefined ? {
                set: props.contract.order.asset.officialSite
              } : undefined,
            fiscalYearEnd: props.contract.order.asset.fiscalYearEnd !== undefined ? {
                set: props.contract.order.asset.fiscalYearEnd
              } : undefined,
            latestQuarter: props.contract.order.asset.latestQuarter !== undefined ? {
                set: props.contract.order.asset.latestQuarter
              } : undefined,
            marketCapitalization: props.contract.order.asset.marketCapitalization !== undefined ? {
                set: props.contract.order.asset.marketCapitalization
              } : undefined,
            ebitda: props.contract.order.asset.ebitda !== undefined ? {
                set: props.contract.order.asset.ebitda
              } : undefined,
            peRatio: props.contract.order.asset.peRatio !== undefined ? {
                set: props.contract.order.asset.peRatio
              } : undefined,
            pegRatio: props.contract.order.asset.pegRatio !== undefined ? {
                set: props.contract.order.asset.pegRatio
              } : undefined,
            bookValue: props.contract.order.asset.bookValue !== undefined ? {
                set: props.contract.order.asset.bookValue
              } : undefined,
            dividendPerShare: props.contract.order.asset.dividendPerShare !== undefined ? {
                set: props.contract.order.asset.dividendPerShare
              } : undefined,
            dividendYield: props.contract.order.asset.dividendYield !== undefined ? {
                set: props.contract.order.asset.dividendYield
              } : undefined,
            eps: props.contract.order.asset.eps !== undefined ? {
                set: props.contract.order.asset.eps
              } : undefined,
            revenuePerShareTTM: props.contract.order.asset.revenuePerShareTTM !== undefined ? {
                set: props.contract.order.asset.revenuePerShareTTM
              } : undefined,
            profitMargin: props.contract.order.asset.profitMargin !== undefined ? {
                set: props.contract.order.asset.profitMargin
              } : undefined,
            operatingMarginTTM: props.contract.order.asset.operatingMarginTTM !== undefined ? {
                set: props.contract.order.asset.operatingMarginTTM
              } : undefined,
            returnOnAssetsTTM: props.contract.order.asset.returnOnAssetsTTM !== undefined ? {
                set: props.contract.order.asset.returnOnAssetsTTM
              } : undefined,
            returnOnEquityTTM: props.contract.order.asset.returnOnEquityTTM !== undefined ? {
                set: props.contract.order.asset.returnOnEquityTTM
              } : undefined,
            revenueTTM: props.contract.order.asset.revenueTTM !== undefined ? {
                set: props.contract.order.asset.revenueTTM
              } : undefined,
            grossProfitTTM: props.contract.order.asset.grossProfitTTM !== undefined ? {
                set: props.contract.order.asset.grossProfitTTM
              } : undefined,
            dilutedEPSTTM: props.contract.order.asset.dilutedEPSTTM !== undefined ? {
                set: props.contract.order.asset.dilutedEPSTTM
              } : undefined,
            quarterlyEarningsGrowthYOY: props.contract.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: props.contract.order.asset.quarterlyEarningsGrowthYOY
              } : undefined,
            quarterlyRevenueGrowthYOY: props.contract.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: props.contract.order.asset.quarterlyRevenueGrowthYOY
              } : undefined,
            analystTargetPrice: props.contract.order.asset.analystTargetPrice !== undefined ? {
                set: props.contract.order.asset.analystTargetPrice
              } : undefined,
            analystRatingStrongBuy: props.contract.order.asset.analystRatingStrongBuy !== undefined ? {
                set: props.contract.order.asset.analystRatingStrongBuy
              } : undefined,
            analystRatingBuy: props.contract.order.asset.analystRatingBuy !== undefined ? {
                set: props.contract.order.asset.analystRatingBuy
              } : undefined,
            analystRatingHold: props.contract.order.asset.analystRatingHold !== undefined ? {
                set: props.contract.order.asset.analystRatingHold
              } : undefined,
            analystRatingSell: props.contract.order.asset.analystRatingSell !== undefined ? {
                set: props.contract.order.asset.analystRatingSell
              } : undefined,
            analystRatingStrongSell: props.contract.order.asset.analystRatingStrongSell !== undefined ? {
                set: props.contract.order.asset.analystRatingStrongSell
              } : undefined,
            trailingPE: props.contract.order.asset.trailingPE !== undefined ? {
                set: props.contract.order.asset.trailingPE
              } : undefined,
            forwardPE: props.contract.order.asset.forwardPE !== undefined ? {
                set: props.contract.order.asset.forwardPE
              } : undefined,
            priceToSalesRatioTTM: props.contract.order.asset.priceToSalesRatioTTM !== undefined ? {
                set: props.contract.order.asset.priceToSalesRatioTTM
              } : undefined,
            priceToBookRatio: props.contract.order.asset.priceToBookRatio !== undefined ? {
                set: props.contract.order.asset.priceToBookRatio
              } : undefined,
            evToRevenue: props.contract.order.asset.evToRevenue !== undefined ? {
                set: props.contract.order.asset.evToRevenue
              } : undefined,
            evToEbitda: props.contract.order.asset.evToEbitda !== undefined ? {
                set: props.contract.order.asset.evToEbitda
              } : undefined,
            beta: props.contract.order.asset.beta !== undefined ? {
                set: props.contract.order.asset.beta
              } : undefined,
            week52High: props.contract.order.asset.week52High !== undefined ? {
                set: props.contract.order.asset.week52High
              } : undefined,
            week52Low: props.contract.order.asset.week52Low !== undefined ? {
                set: props.contract.order.asset.week52Low
              } : undefined,
            day50MovingAverage: props.contract.order.asset.day50MovingAverage !== undefined ? {
                set: props.contract.order.asset.day50MovingAverage
              } : undefined,
            day200MovingAverage: props.contract.order.asset.day200MovingAverage !== undefined ? {
                set: props.contract.order.asset.day200MovingAverage
              } : undefined,
            sharesOutstanding: props.contract.order.asset.sharesOutstanding !== undefined ? {
                set: props.contract.order.asset.sharesOutstanding
              } : undefined,
            dividendDate: props.contract.order.asset.dividendDate !== undefined ? {
                set: props.contract.order.asset.dividendDate
              } : undefined,
            exDividendDate: props.contract.order.asset.exDividendDate !== undefined ? {
                set: props.contract.order.asset.exDividendDate
              } : undefined,
            askPrice: props.contract.order.asset.askPrice !== undefined ? {
                set: props.contract.order.asset.askPrice
              } : undefined,
            bidPrice: props.contract.order.asset.bidPrice !== undefined ? {
                set: props.contract.order.asset.bidPrice
              } : undefined,
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
          expiredAt: props.contract.order.expiredAt !== undefined ? props.contract.order.expiredAt : undefined,
          failedAt: props.contract.order.failedAt !== undefined ? props.contract.order.failedAt : undefined,
          replacedAt: props.contract.order.replacedAt !== undefined ? props.contract.order.replacedAt : undefined,
          replacedBy: props.contract.order.replacedBy !== undefined ? props.contract.order.replacedBy : undefined,
          replaces: props.contract.order.replaces !== undefined ? props.contract.order.replaces : undefined,
          positionIntent: props.contract.order.positionIntent !== undefined ? props.contract.order.positionIntent : undefined,
          legs: props.contract.order.legs !== undefined ? props.contract.order.legs : undefined,
          hwm: props.contract.order.hwm !== undefined ? props.contract.order.hwm : undefined,
          subtag: props.contract.order.subtag !== undefined ? props.contract.order.subtag : undefined,
          source: props.contract.order.source !== undefined ? props.contract.order.source : undefined,
          expiresAt: props.contract.order.expiresAt !== undefined ? props.contract.order.expiresAt : undefined,
          optionType: props.contract.order.optionType !== undefined ? props.contract.order.optionType : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? props.contract.order.stopLossId : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? props.contract.order.takeProfitId : undefined,
      stopLoss: props.contract.order.stopLoss ? 
        typeof props.contract.order.stopLoss === 'object' && Object.keys(props.contract.order.stopLoss).length === 1 && Object.keys(props.contract.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: props.contract.order.stopLoss.id
            }
          }
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
            }
          }
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
            }
          }
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
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? props.contract.order.alpacaAccount.configuration : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? props.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? props.contract.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: props.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? props.contract.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? props.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? props.contract.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: props.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.contract.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: props.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.contract.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: props.contract.order.action ? 
        typeof props.contract.order.action === 'object' && Object.keys(props.contract.order.action).length === 1 && Object.keys(props.contract.order.action)[0] === 'id'
    ? { connect: {
            id: props.contract.order.action.id
            }
          }
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
            primary: props.contract.order.action.primary !== undefined ? props.contract.order.action.primary : undefined,
            note: props.contract.order.action.note !== undefined ? props.contract.order.action.note : undefined,
            status: props.contract.order.action.status !== undefined ? props.contract.order.action.status : undefined,
            fee: props.contract.order.action.fee !== undefined ? props.contract.order.action.fee : undefined,
          },
        }
      } : undefined,
      asset: props.contract.order.asset ? 
        typeof props.contract.order.asset === 'object' && Object.keys(props.contract.order.asset).length === 1 && Object.keys(props.contract.order.asset)[0] === 'id'
    ? { connect: {
            id: props.contract.order.asset.id
            }
          }
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
          }
        }
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
      orders: props.contract.asset.orders ? 
        Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 &&  props.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: props.contract.asset.positions ? 
        Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 &&  props.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      newsMentions: props.contract.asset.newsMentions ? 
        Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 &&  props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.contract.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.contract.asset.newsMentions.map((item: any) => ({
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
          }
        }
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
          expiredAt: props.contract.order.expiredAt !== undefined ? props.contract.order.expiredAt : undefined,
          failedAt: props.contract.order.failedAt !== undefined ? props.contract.order.failedAt : undefined,
          replacedAt: props.contract.order.replacedAt !== undefined ? props.contract.order.replacedAt : undefined,
          replacedBy: props.contract.order.replacedBy !== undefined ? props.contract.order.replacedBy : undefined,
          replaces: props.contract.order.replaces !== undefined ? props.contract.order.replaces : undefined,
          positionIntent: props.contract.order.positionIntent !== undefined ? props.contract.order.positionIntent : undefined,
          legs: props.contract.order.legs !== undefined ? props.contract.order.legs : undefined,
          hwm: props.contract.order.hwm !== undefined ? props.contract.order.hwm : undefined,
          subtag: props.contract.order.subtag !== undefined ? props.contract.order.subtag : undefined,
          source: props.contract.order.source !== undefined ? props.contract.order.source : undefined,
          expiresAt: props.contract.order.expiresAt !== undefined ? props.contract.order.expiresAt : undefined,
          optionType: props.contract.order.optionType !== undefined ? props.contract.order.optionType : undefined,
          stopLossId: props.contract.order.stopLossId !== undefined ? props.contract.order.stopLossId : undefined,
          takeProfitId: props.contract.order.takeProfitId !== undefined ? props.contract.order.takeProfitId : undefined,
      stopLoss: props.contract.order.stopLoss ? 
        typeof props.contract.order.stopLoss === 'object' && Object.keys(props.contract.order.stopLoss).length === 1 && Object.keys(props.contract.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: props.contract.order.stopLoss.id
            }
          }
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
            }
          }
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
            }
          }
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
            configuration: props.contract.order.alpacaAccount.configuration !== undefined ? props.contract.order.alpacaAccount.configuration : undefined,
            marketOpen: props.contract.order.alpacaAccount.marketOpen !== undefined ? props.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: props.contract.order.alpacaAccount.realTime !== undefined ? props.contract.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: props.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? props.contract.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: props.contract.order.alpacaAccount.minPercentageChange !== undefined ? props.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.contract.order.alpacaAccount.volumeThreshold !== undefined ? props.contract.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: props.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.contract.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: props.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: props.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.contract.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: props.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.contract.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: props.contract.order.action ? 
        typeof props.contract.order.action === 'object' && Object.keys(props.contract.order.action).length === 1 && Object.keys(props.contract.order.action)[0] === 'id'
    ? { connect: {
            id: props.contract.order.action.id
            }
          }
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
            primary: props.contract.order.action.primary !== undefined ? props.contract.order.action.primary : undefined,
            note: props.contract.order.action.note !== undefined ? props.contract.order.action.note : undefined,
            status: props.contract.order.action.status !== undefined ? props.contract.order.action.status : undefined,
            fee: props.contract.order.action.fee !== undefined ? props.contract.order.action.fee : undefined,
          },
        }
      } : undefined,
      asset: props.contract.order.asset ? 
        typeof props.contract.order.asset === 'object' && Object.keys(props.contract.order.asset).length === 1 && Object.keys(props.contract.order.asset)[0] === 'id'
    ? { connect: {
            id: props.contract.order.asset.id
            }
          }
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
  async updateMany(props: DeliverableType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  contract: prop.contract ? 
  typeof prop.contract === 'object' && Object.keys(prop.contract).length === 1 && (Object.keys(prop.contract)[0] === 'id' || Object.keys(prop.contract)[0] === 'symbol')
? {
  connect: {
    id: prop.contract.id
  }
} : { upsert: {
      where: {
        id: prop.contract.id !== undefined ? {
            equals: prop.contract.id
          } : undefined,
        alpacaId: prop.contract.alpacaId !== undefined ? {
            equals: prop.contract.alpacaId
          } : undefined,
        symbol: prop.contract.symbol !== undefined ? {
            equals: prop.contract.symbol
          } : undefined,
        name: prop.contract.name !== undefined ? {
            equals: prop.contract.name
          } : undefined,
        underlyingAssetId: prop.contract.underlyingAssetId !== undefined ? {
            equals: prop.contract.underlyingAssetId
          } : undefined,
        assetId: prop.contract.assetId !== undefined ? {
            equals: prop.contract.assetId
          } : undefined,
        orderId: prop.contract.orderId !== undefined ? {
            equals: prop.contract.orderId
          } : undefined,
      },
      update: {
        id: prop.contract.id !== undefined ? {
            set: prop.contract.id
          } : undefined,
        alpacaId: prop.contract.alpacaId !== undefined ? {
            set: prop.contract.alpacaId
          } : undefined,
        symbol: prop.contract.symbol !== undefined ? {
            set: prop.contract.symbol
          } : undefined,
        name: prop.contract.name !== undefined ? {
            set: prop.contract.name
          } : undefined,
        status: prop.contract.status !== undefined ? {
            set: prop.contract.status
          } : undefined,
        tradable: prop.contract.tradable !== undefined ? {
            set: prop.contract.tradable
          } : undefined,
        expirationDate: prop.contract.expirationDate !== undefined ? {
            set: prop.contract.expirationDate
          } : undefined,
        rootSymbol: prop.contract.rootSymbol !== undefined ? {
            set: prop.contract.rootSymbol
          } : undefined,
        underlyingSymbol: prop.contract.underlyingSymbol !== undefined ? {
            set: prop.contract.underlyingSymbol
          } : undefined,
        underlyingAssetId: prop.contract.underlyingAssetId !== undefined ? {
            set: prop.contract.underlyingAssetId
          } : undefined,
        type: prop.contract.type !== undefined ? {
            set: prop.contract.type
          } : undefined,
        style: prop.contract.style !== undefined ? {
            set: prop.contract.style
          } : undefined,
        strikePrice: prop.contract.strikePrice !== undefined ? {
            set: prop.contract.strikePrice
          } : undefined,
        multiplier: prop.contract.multiplier !== undefined ? {
            set: prop.contract.multiplier
          } : undefined,
        size: prop.contract.size !== undefined ? {
            set: prop.contract.size
          } : undefined,
        openInterest: prop.contract.openInterest !== undefined ? {
            set: prop.contract.openInterest
          } : undefined,
        openInterestDate: prop.contract.openInterestDate !== undefined ? {
            set: prop.contract.openInterestDate
          } : undefined,
        closePrice: prop.contract.closePrice !== undefined ? {
            set: prop.contract.closePrice
          } : undefined,
        closePriceDate: prop.contract.closePriceDate !== undefined ? {
            set: prop.contract.closePriceDate
          } : undefined,
        ppind: prop.contract.ppind !== undefined ? {
            set: prop.contract.ppind
          } : undefined,
        orderId: prop.contract.orderId !== undefined ? {
            set: prop.contract.orderId
          } : undefined,
    asset: prop.contract.asset ? 
    typeof prop.contract.asset === 'object' && Object.keys(prop.contract.asset).length === 1 && (Object.keys(prop.contract.asset)[0] === 'id' || Object.keys(prop.contract.asset)[0] === 'symbol')
? {
    connect: {
      id: prop.contract.asset.id
    }
} : { upsert: {
        where: {
          id: prop.contract.asset.id !== undefined ? {
              equals: prop.contract.asset.id
            } : undefined,
          symbol: prop.contract.asset.symbol !== undefined ? {
              equals: prop.contract.asset.symbol
            } : undefined,
          name: prop.contract.asset.name !== undefined ? {
              equals: prop.contract.asset.name
            } : undefined,
        },
        update: {
          id: prop.contract.asset.id !== undefined ? {
              set: prop.contract.asset.id
            } : undefined,
          symbol: prop.contract.asset.symbol !== undefined ? {
              set: prop.contract.asset.symbol
            } : undefined,
          name: prop.contract.asset.name !== undefined ? {
              set: prop.contract.asset.name
            } : undefined,
          type: prop.contract.asset.type !== undefined ? {
              set: prop.contract.asset.type
            } : undefined,
          logoUrl: prop.contract.asset.logoUrl !== undefined ? {
              set: prop.contract.asset.logoUrl
            } : undefined,
          description: prop.contract.asset.description !== undefined ? {
              set: prop.contract.asset.description
            } : undefined,
          cik: prop.contract.asset.cik !== undefined ? {
              set: prop.contract.asset.cik
            } : undefined,
          exchange: prop.contract.asset.exchange !== undefined ? {
              set: prop.contract.asset.exchange
            } : undefined,
          currency: prop.contract.asset.currency !== undefined ? {
              set: prop.contract.asset.currency
            } : undefined,
          country: prop.contract.asset.country !== undefined ? {
              set: prop.contract.asset.country
            } : undefined,
          sector: prop.contract.asset.sector !== undefined ? {
              set: prop.contract.asset.sector
            } : undefined,
          industry: prop.contract.asset.industry !== undefined ? {
              set: prop.contract.asset.industry
            } : undefined,
          address: prop.contract.asset.address !== undefined ? {
              set: prop.contract.asset.address
            } : undefined,
          officialSite: prop.contract.asset.officialSite !== undefined ? {
              set: prop.contract.asset.officialSite
            } : undefined,
          fiscalYearEnd: prop.contract.asset.fiscalYearEnd !== undefined ? {
              set: prop.contract.asset.fiscalYearEnd
            } : undefined,
          latestQuarter: prop.contract.asset.latestQuarter !== undefined ? {
              set: prop.contract.asset.latestQuarter
            } : undefined,
          marketCapitalization: prop.contract.asset.marketCapitalization !== undefined ? {
              set: prop.contract.asset.marketCapitalization
            } : undefined,
          ebitda: prop.contract.asset.ebitda !== undefined ? {
              set: prop.contract.asset.ebitda
            } : undefined,
          peRatio: prop.contract.asset.peRatio !== undefined ? {
              set: prop.contract.asset.peRatio
            } : undefined,
          pegRatio: prop.contract.asset.pegRatio !== undefined ? {
              set: prop.contract.asset.pegRatio
            } : undefined,
          bookValue: prop.contract.asset.bookValue !== undefined ? {
              set: prop.contract.asset.bookValue
            } : undefined,
          dividendPerShare: prop.contract.asset.dividendPerShare !== undefined ? {
              set: prop.contract.asset.dividendPerShare
            } : undefined,
          dividendYield: prop.contract.asset.dividendYield !== undefined ? {
              set: prop.contract.asset.dividendYield
            } : undefined,
          eps: prop.contract.asset.eps !== undefined ? {
              set: prop.contract.asset.eps
            } : undefined,
          revenuePerShareTTM: prop.contract.asset.revenuePerShareTTM !== undefined ? {
              set: prop.contract.asset.revenuePerShareTTM
            } : undefined,
          profitMargin: prop.contract.asset.profitMargin !== undefined ? {
              set: prop.contract.asset.profitMargin
            } : undefined,
          operatingMarginTTM: prop.contract.asset.operatingMarginTTM !== undefined ? {
              set: prop.contract.asset.operatingMarginTTM
            } : undefined,
          returnOnAssetsTTM: prop.contract.asset.returnOnAssetsTTM !== undefined ? {
              set: prop.contract.asset.returnOnAssetsTTM
            } : undefined,
          returnOnEquityTTM: prop.contract.asset.returnOnEquityTTM !== undefined ? {
              set: prop.contract.asset.returnOnEquityTTM
            } : undefined,
          revenueTTM: prop.contract.asset.revenueTTM !== undefined ? {
              set: prop.contract.asset.revenueTTM
            } : undefined,
          grossProfitTTM: prop.contract.asset.grossProfitTTM !== undefined ? {
              set: prop.contract.asset.grossProfitTTM
            } : undefined,
          dilutedEPSTTM: prop.contract.asset.dilutedEPSTTM !== undefined ? {
              set: prop.contract.asset.dilutedEPSTTM
            } : undefined,
          quarterlyEarningsGrowthYOY: prop.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: prop.contract.asset.quarterlyEarningsGrowthYOY
            } : undefined,
          quarterlyRevenueGrowthYOY: prop.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: prop.contract.asset.quarterlyRevenueGrowthYOY
            } : undefined,
          analystTargetPrice: prop.contract.asset.analystTargetPrice !== undefined ? {
              set: prop.contract.asset.analystTargetPrice
            } : undefined,
          analystRatingStrongBuy: prop.contract.asset.analystRatingStrongBuy !== undefined ? {
              set: prop.contract.asset.analystRatingStrongBuy
            } : undefined,
          analystRatingBuy: prop.contract.asset.analystRatingBuy !== undefined ? {
              set: prop.contract.asset.analystRatingBuy
            } : undefined,
          analystRatingHold: prop.contract.asset.analystRatingHold !== undefined ? {
              set: prop.contract.asset.analystRatingHold
            } : undefined,
          analystRatingSell: prop.contract.asset.analystRatingSell !== undefined ? {
              set: prop.contract.asset.analystRatingSell
            } : undefined,
          analystRatingStrongSell: prop.contract.asset.analystRatingStrongSell !== undefined ? {
              set: prop.contract.asset.analystRatingStrongSell
            } : undefined,
          trailingPE: prop.contract.asset.trailingPE !== undefined ? {
              set: prop.contract.asset.trailingPE
            } : undefined,
          forwardPE: prop.contract.asset.forwardPE !== undefined ? {
              set: prop.contract.asset.forwardPE
            } : undefined,
          priceToSalesRatioTTM: prop.contract.asset.priceToSalesRatioTTM !== undefined ? {
              set: prop.contract.asset.priceToSalesRatioTTM
            } : undefined,
          priceToBookRatio: prop.contract.asset.priceToBookRatio !== undefined ? {
              set: prop.contract.asset.priceToBookRatio
            } : undefined,
          evToRevenue: prop.contract.asset.evToRevenue !== undefined ? {
              set: prop.contract.asset.evToRevenue
            } : undefined,
          evToEbitda: prop.contract.asset.evToEbitda !== undefined ? {
              set: prop.contract.asset.evToEbitda
            } : undefined,
          beta: prop.contract.asset.beta !== undefined ? {
              set: prop.contract.asset.beta
            } : undefined,
          week52High: prop.contract.asset.week52High !== undefined ? {
              set: prop.contract.asset.week52High
            } : undefined,
          week52Low: prop.contract.asset.week52Low !== undefined ? {
              set: prop.contract.asset.week52Low
            } : undefined,
          day50MovingAverage: prop.contract.asset.day50MovingAverage !== undefined ? {
              set: prop.contract.asset.day50MovingAverage
            } : undefined,
          day200MovingAverage: prop.contract.asset.day200MovingAverage !== undefined ? {
              set: prop.contract.asset.day200MovingAverage
            } : undefined,
          sharesOutstanding: prop.contract.asset.sharesOutstanding !== undefined ? {
              set: prop.contract.asset.sharesOutstanding
            } : undefined,
          dividendDate: prop.contract.asset.dividendDate !== undefined ? {
              set: prop.contract.asset.dividendDate
            } : undefined,
          exDividendDate: prop.contract.asset.exDividendDate !== undefined ? {
              set: prop.contract.asset.exDividendDate
            } : undefined,
          askPrice: prop.contract.asset.askPrice !== undefined ? {
              set: prop.contract.asset.askPrice
            } : undefined,
          bidPrice: prop.contract.asset.bidPrice !== undefined ? {
              set: prop.contract.asset.bidPrice
            } : undefined,
      orders: prop.contract.asset.orders ? 
      Array.isArray(prop.contract.asset.orders) && prop.contract.asset.orders.length > 0 && prop.contract.asset.orders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.contract.asset.orders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.contract.asset.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: prop.contract.asset.positions ? 
      Array.isArray(prop.contract.asset.positions) && prop.contract.asset.positions.length > 0 && prop.contract.asset.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.contract.asset.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.contract.asset.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      newsMentions: prop.contract.asset.newsMentions ? 
      Array.isArray(prop.contract.asset.newsMentions) && prop.contract.asset.newsMentions.length > 0 && prop.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.contract.asset.newsMentions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.contract.asset.newsMentions.map((item: any) => ({
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
        },
        create: {
          symbol: prop.contract.asset.symbol !== undefined ? prop.contract.asset.symbol : undefined,
          name: prop.contract.asset.name !== undefined ? prop.contract.asset.name : undefined,
          type: prop.contract.asset.type !== undefined ? prop.contract.asset.type : undefined,
          logoUrl: prop.contract.asset.logoUrl !== undefined ? prop.contract.asset.logoUrl : undefined,
          description: prop.contract.asset.description !== undefined ? prop.contract.asset.description : undefined,
          cik: prop.contract.asset.cik !== undefined ? prop.contract.asset.cik : undefined,
          exchange: prop.contract.asset.exchange !== undefined ? prop.contract.asset.exchange : undefined,
          currency: prop.contract.asset.currency !== undefined ? prop.contract.asset.currency : undefined,
          country: prop.contract.asset.country !== undefined ? prop.contract.asset.country : undefined,
          sector: prop.contract.asset.sector !== undefined ? prop.contract.asset.sector : undefined,
          industry: prop.contract.asset.industry !== undefined ? prop.contract.asset.industry : undefined,
          address: prop.contract.asset.address !== undefined ? prop.contract.asset.address : undefined,
          officialSite: prop.contract.asset.officialSite !== undefined ? prop.contract.asset.officialSite : undefined,
          fiscalYearEnd: prop.contract.asset.fiscalYearEnd !== undefined ? prop.contract.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.contract.asset.latestQuarter !== undefined ? prop.contract.asset.latestQuarter : undefined,
          marketCapitalization: prop.contract.asset.marketCapitalization !== undefined ? prop.contract.asset.marketCapitalization : undefined,
          ebitda: prop.contract.asset.ebitda !== undefined ? prop.contract.asset.ebitda : undefined,
          peRatio: prop.contract.asset.peRatio !== undefined ? prop.contract.asset.peRatio : undefined,
          pegRatio: prop.contract.asset.pegRatio !== undefined ? prop.contract.asset.pegRatio : undefined,
          bookValue: prop.contract.asset.bookValue !== undefined ? prop.contract.asset.bookValue : undefined,
          dividendPerShare: prop.contract.asset.dividendPerShare !== undefined ? prop.contract.asset.dividendPerShare : undefined,
          dividendYield: prop.contract.asset.dividendYield !== undefined ? prop.contract.asset.dividendYield : undefined,
          eps: prop.contract.asset.eps !== undefined ? prop.contract.asset.eps : undefined,
          revenuePerShareTTM: prop.contract.asset.revenuePerShareTTM !== undefined ? prop.contract.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.contract.asset.profitMargin !== undefined ? prop.contract.asset.profitMargin : undefined,
          operatingMarginTTM: prop.contract.asset.operatingMarginTTM !== undefined ? prop.contract.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.contract.asset.returnOnAssetsTTM !== undefined ? prop.contract.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.contract.asset.returnOnEquityTTM !== undefined ? prop.contract.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.contract.asset.revenueTTM !== undefined ? prop.contract.asset.revenueTTM : undefined,
          grossProfitTTM: prop.contract.asset.grossProfitTTM !== undefined ? prop.contract.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.contract.asset.dilutedEPSTTM !== undefined ? prop.contract.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.contract.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.contract.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.contract.asset.analystTargetPrice !== undefined ? prop.contract.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.contract.asset.analystRatingStrongBuy !== undefined ? prop.contract.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.contract.asset.analystRatingBuy !== undefined ? prop.contract.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.contract.asset.analystRatingHold !== undefined ? prop.contract.asset.analystRatingHold : undefined,
          analystRatingSell: prop.contract.asset.analystRatingSell !== undefined ? prop.contract.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.contract.asset.analystRatingStrongSell !== undefined ? prop.contract.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.contract.asset.trailingPE !== undefined ? prop.contract.asset.trailingPE : undefined,
          forwardPE: prop.contract.asset.forwardPE !== undefined ? prop.contract.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.contract.asset.priceToSalesRatioTTM !== undefined ? prop.contract.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.contract.asset.priceToBookRatio !== undefined ? prop.contract.asset.priceToBookRatio : undefined,
          evToRevenue: prop.contract.asset.evToRevenue !== undefined ? prop.contract.asset.evToRevenue : undefined,
          evToEbitda: prop.contract.asset.evToEbitda !== undefined ? prop.contract.asset.evToEbitda : undefined,
          beta: prop.contract.asset.beta !== undefined ? prop.contract.asset.beta : undefined,
          week52High: prop.contract.asset.week52High !== undefined ? prop.contract.asset.week52High : undefined,
          week52Low: prop.contract.asset.week52Low !== undefined ? prop.contract.asset.week52Low : undefined,
          day50MovingAverage: prop.contract.asset.day50MovingAverage !== undefined ? prop.contract.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.contract.asset.day200MovingAverage !== undefined ? prop.contract.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.contract.asset.sharesOutstanding !== undefined ? prop.contract.asset.sharesOutstanding : undefined,
          dividendDate: prop.contract.asset.dividendDate !== undefined ? prop.contract.asset.dividendDate : undefined,
          exDividendDate: prop.contract.asset.exDividendDate !== undefined ? prop.contract.asset.exDividendDate : undefined,
          askPrice: prop.contract.asset.askPrice !== undefined ? prop.contract.asset.askPrice : undefined,
          bidPrice: prop.contract.asset.bidPrice !== undefined ? prop.contract.asset.bidPrice : undefined,
      orders: prop.contract.asset.orders ? 
        Array.isArray(prop.contract.asset.orders) && prop.contract.asset.orders.length > 0 &&  prop.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.contract.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.contract.asset.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: prop.contract.asset.positions ? 
        Array.isArray(prop.contract.asset.positions) && prop.contract.asset.positions.length > 0 &&  prop.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.contract.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.contract.asset.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      newsMentions: prop.contract.asset.newsMentions ? 
        Array.isArray(prop.contract.asset.newsMentions) && prop.contract.asset.newsMentions.length > 0 &&  prop.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.contract.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.contract.asset.newsMentions.map((item: any) => ({
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
    order: prop.contract.order ? 
    typeof prop.contract.order === 'object' && Object.keys(prop.contract.order).length === 1 && (Object.keys(prop.contract.order)[0] === 'id' || Object.keys(prop.contract.order)[0] === 'symbol')
? {
    connect: {
      id: prop.contract.order.id
    }
} : { upsert: {
        where: {
          id: prop.contract.order.id !== undefined ? {
              equals: prop.contract.order.id
            } : undefined,
          clientOrderId: prop.contract.order.clientOrderId !== undefined ? {
              equals: prop.contract.order.clientOrderId
            } : undefined,
          alpacaAccountId: prop.contract.order.alpacaAccountId !== undefined ? {
              equals: prop.contract.order.alpacaAccountId
            } : undefined,
          assetId: prop.contract.order.assetId !== undefined ? {
              equals: prop.contract.order.assetId
            } : undefined,
          actionId: prop.contract.order.actionId !== undefined ? {
              equals: prop.contract.order.actionId
            } : undefined,
          stopLossId: prop.contract.order.stopLossId !== undefined ? {
              equals: prop.contract.order.stopLossId
            } : undefined,
          takeProfitId: prop.contract.order.takeProfitId !== undefined ? {
              equals: prop.contract.order.takeProfitId
            } : undefined,
          contractId: prop.contract.order.contractId !== undefined ? {
              equals: prop.contract.order.contractId
            } : undefined,
        },
        update: {
          id: prop.contract.order.id !== undefined ? {
              set: prop.contract.order.id
            } : undefined,
          clientOrderId: prop.contract.order.clientOrderId !== undefined ? {
              set: prop.contract.order.clientOrderId
            } : undefined,
          qty: prop.contract.order.qty !== undefined ? {
              set: prop.contract.order.qty
            } : undefined,
          notional: prop.contract.order.notional !== undefined ? {
              set: prop.contract.order.notional
            } : undefined,
          side: prop.contract.order.side !== undefined ? {
              set: prop.contract.order.side
            } : undefined,
          type: prop.contract.order.type !== undefined ? {
              set: prop.contract.order.type
            } : undefined,
          orderClass: prop.contract.order.orderClass !== undefined ? {
              set: prop.contract.order.orderClass
            } : undefined,
          timeInForce: prop.contract.order.timeInForce !== undefined ? {
              set: prop.contract.order.timeInForce
            } : undefined,
          limitPrice: prop.contract.order.limitPrice !== undefined ? {
              set: prop.contract.order.limitPrice
            } : undefined,
          stopPrice: prop.contract.order.stopPrice !== undefined ? {
              set: prop.contract.order.stopPrice
            } : undefined,
          trailPrice: prop.contract.order.trailPrice !== undefined ? {
              set: prop.contract.order.trailPrice
            } : undefined,
          trailPercent: prop.contract.order.trailPercent !== undefined ? {
              set: prop.contract.order.trailPercent
            } : undefined,
          extendedHours: prop.contract.order.extendedHours !== undefined ? {
              set: prop.contract.order.extendedHours
            } : undefined,
          status: prop.contract.order.status !== undefined ? {
              set: prop.contract.order.status
            } : undefined,
          submittedAt: prop.contract.order.submittedAt !== undefined ? {
              set: prop.contract.order.submittedAt
            } : undefined,
          filledAt: prop.contract.order.filledAt !== undefined ? {
              set: prop.contract.order.filledAt
            } : undefined,
          filledQty: prop.contract.order.filledQty !== undefined ? {
              set: prop.contract.order.filledQty
            } : undefined,
          filledAvgPrice: prop.contract.order.filledAvgPrice !== undefined ? {
              set: prop.contract.order.filledAvgPrice
            } : undefined,
          cancelRequestedAt: prop.contract.order.cancelRequestedAt !== undefined ? {
              set: prop.contract.order.cancelRequestedAt
            } : undefined,
          canceledAt: prop.contract.order.canceledAt !== undefined ? {
              set: prop.contract.order.canceledAt
            } : undefined,
          fee: prop.contract.order.fee !== undefined ? {
              set: prop.contract.order.fee
            } : undefined,
          strikePrice: prop.contract.order.strikePrice !== undefined ? {
              set: prop.contract.order.strikePrice
            } : undefined,
          expirationDate: prop.contract.order.expirationDate !== undefined ? {
              set: prop.contract.order.expirationDate
            } : undefined,
          expiredAt: prop.contract.order.expiredAt !== undefined ? {
              set: prop.contract.order.expiredAt
            } : undefined,
          failedAt: prop.contract.order.failedAt !== undefined ? {
              set: prop.contract.order.failedAt
            } : undefined,
          replacedAt: prop.contract.order.replacedAt !== undefined ? {
              set: prop.contract.order.replacedAt
            } : undefined,
          replacedBy: prop.contract.order.replacedBy !== undefined ? {
              set: prop.contract.order.replacedBy
            } : undefined,
          replaces: prop.contract.order.replaces !== undefined ? {
              set: prop.contract.order.replaces
            } : undefined,
          positionIntent: prop.contract.order.positionIntent !== undefined ? {
              set: prop.contract.order.positionIntent
            } : undefined,
          legs: prop.contract.order.legs !== undefined ? {
              set: prop.contract.order.legs
            } : undefined,
          hwm: prop.contract.order.hwm !== undefined ? {
              set: prop.contract.order.hwm
            } : undefined,
          subtag: prop.contract.order.subtag !== undefined ? {
              set: prop.contract.order.subtag
            } : undefined,
          source: prop.contract.order.source !== undefined ? {
              set: prop.contract.order.source
            } : undefined,
          expiresAt: prop.contract.order.expiresAt !== undefined ? {
              set: prop.contract.order.expiresAt
            } : undefined,
          optionType: prop.contract.order.optionType !== undefined ? {
              set: prop.contract.order.optionType
            } : undefined,
          stopLossId: prop.contract.order.stopLossId !== undefined ? {
              set: prop.contract.order.stopLossId
            } : undefined,
          takeProfitId: prop.contract.order.takeProfitId !== undefined ? {
              set: prop.contract.order.takeProfitId
            } : undefined,
      stopLoss: prop.contract.order.stopLoss ? 
      typeof prop.contract.order.stopLoss === 'object' && Object.keys(prop.contract.order.stopLoss).length === 1 && (Object.keys(prop.contract.order.stopLoss)[0] === 'id' || Object.keys(prop.contract.order.stopLoss)[0] === 'symbol')
? {
      connect: {
        id: prop.contract.order.stopLoss.id
      }
} : { upsert: {
          where: {
            id: prop.contract.order.stopLoss.id !== undefined ? {
                equals: prop.contract.order.stopLoss.id
              } : undefined,
            orderId: prop.contract.order.stopLoss.orderId !== undefined ? {
                equals: prop.contract.order.stopLoss.orderId
              } : undefined,
          },
          update: {
            id: prop.contract.order.stopLoss.id !== undefined ? {
                set: prop.contract.order.stopLoss.id
              } : undefined,
            stopPrice: prop.contract.order.stopLoss.stopPrice !== undefined ? {
                set: prop.contract.order.stopLoss.stopPrice
              } : undefined,
            limitPrice: prop.contract.order.stopLoss.limitPrice !== undefined ? {
                set: prop.contract.order.stopLoss.limitPrice
              } : undefined,
          },
          create: {
            stopPrice: prop.contract.order.stopLoss.stopPrice !== undefined ? prop.contract.order.stopLoss.stopPrice : undefined,
            limitPrice: prop.contract.order.stopLoss.limitPrice !== undefined ? prop.contract.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: prop.contract.order.takeProfit ? 
      typeof prop.contract.order.takeProfit === 'object' && Object.keys(prop.contract.order.takeProfit).length === 1 && (Object.keys(prop.contract.order.takeProfit)[0] === 'id' || Object.keys(prop.contract.order.takeProfit)[0] === 'symbol')
? {
      connect: {
        id: prop.contract.order.takeProfit.id
      }
} : { upsert: {
          where: {
            id: prop.contract.order.takeProfit.id !== undefined ? {
                equals: prop.contract.order.takeProfit.id
              } : undefined,
            orderId: prop.contract.order.takeProfit.orderId !== undefined ? {
                equals: prop.contract.order.takeProfit.orderId
              } : undefined,
          },
          update: {
            id: prop.contract.order.takeProfit.id !== undefined ? {
                set: prop.contract.order.takeProfit.id
              } : undefined,
            limitPrice: prop.contract.order.takeProfit.limitPrice !== undefined ? {
                set: prop.contract.order.takeProfit.limitPrice
              } : undefined,
            stopPrice: prop.contract.order.takeProfit.stopPrice !== undefined ? {
                set: prop.contract.order.takeProfit.stopPrice
              } : undefined,
          },
          create: {
            limitPrice: prop.contract.order.takeProfit.limitPrice !== undefined ? prop.contract.order.takeProfit.limitPrice : undefined,
            stopPrice: prop.contract.order.takeProfit.stopPrice !== undefined ? prop.contract.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: prop.contract.order.alpacaAccount ? 
      typeof prop.contract.order.alpacaAccount === 'object' && Object.keys(prop.contract.order.alpacaAccount).length === 1 && (Object.keys(prop.contract.order.alpacaAccount)[0] === 'id' || Object.keys(prop.contract.order.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: prop.contract.order.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: prop.contract.order.alpacaAccount.id !== undefined ? {
                equals: prop.contract.order.alpacaAccount.id
              } : undefined,
            userId: prop.contract.order.alpacaAccount.userId !== undefined ? {
                equals: prop.contract.order.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: prop.contract.order.alpacaAccount.id !== undefined ? {
                set: prop.contract.order.alpacaAccount.id
              } : undefined,
            type: prop.contract.order.alpacaAccount.type !== undefined ? {
                set: prop.contract.order.alpacaAccount.type
              } : undefined,
            APIKey: prop.contract.order.alpacaAccount.APIKey !== undefined ? {
                set: prop.contract.order.alpacaAccount.APIKey
              } : undefined,
            APISecret: prop.contract.order.alpacaAccount.APISecret !== undefined ? {
                set: prop.contract.order.alpacaAccount.APISecret
              } : undefined,
            configuration: prop.contract.order.alpacaAccount.configuration !== undefined ? {
                set: prop.contract.order.alpacaAccount.configuration
              } : undefined,
            marketOpen: prop.contract.order.alpacaAccount.marketOpen !== undefined ? {
                set: prop.contract.order.alpacaAccount.marketOpen
              } : undefined,
            realTime: prop.contract.order.alpacaAccount.realTime !== undefined ? {
                set: prop.contract.order.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: prop.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: prop.contract.order.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: prop.contract.order.alpacaAccount.minPercentageChange !== undefined ? {
                set: prop.contract.order.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: prop.contract.order.alpacaAccount.volumeThreshold !== undefined ? {
                set: prop.contract.order.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: prop.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: prop.contract.order.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: prop.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: prop.contract.order.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: prop.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: prop.contract.order.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: prop.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: prop.contract.order.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: prop.contract.order.alpacaAccount.type !== undefined ? prop.contract.order.alpacaAccount.type : undefined,
            APIKey: prop.contract.order.alpacaAccount.APIKey !== undefined ? prop.contract.order.alpacaAccount.APIKey : undefined,
            APISecret: prop.contract.order.alpacaAccount.APISecret !== undefined ? prop.contract.order.alpacaAccount.APISecret : undefined,
            configuration: prop.contract.order.alpacaAccount.configuration !== undefined ? prop.contract.order.alpacaAccount.configuration : undefined,
            marketOpen: prop.contract.order.alpacaAccount.marketOpen !== undefined ? prop.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: prop.contract.order.alpacaAccount.realTime !== undefined ? prop.contract.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: prop.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? prop.contract.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: prop.contract.order.alpacaAccount.minPercentageChange !== undefined ? prop.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: prop.contract.order.alpacaAccount.volumeThreshold !== undefined ? prop.contract.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: prop.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? prop.contract.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: prop.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? prop.contract.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: prop.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? prop.contract.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: prop.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? prop.contract.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: prop.contract.order.action ? 
      typeof prop.contract.order.action === 'object' && Object.keys(prop.contract.order.action).length === 1 && (Object.keys(prop.contract.order.action)[0] === 'id' || Object.keys(prop.contract.order.action)[0] === 'symbol')
? {
      connect: {
        id: prop.contract.order.action.id
      }
} : { upsert: {
          where: {
            id: prop.contract.order.action.id !== undefined ? {
                equals: prop.contract.order.action.id
              } : undefined,
            tradeId: prop.contract.order.action.tradeId !== undefined ? {
                equals: prop.contract.order.action.tradeId
              } : undefined,
          },
          update: {
            id: prop.contract.order.action.id !== undefined ? {
                set: prop.contract.order.action.id
              } : undefined,
            sequence: prop.contract.order.action.sequence !== undefined ? {
                set: prop.contract.order.action.sequence
              } : undefined,
            type: prop.contract.order.action.type !== undefined ? {
                set: prop.contract.order.action.type
              } : undefined,
            primary: prop.contract.order.action.primary !== undefined ? {
                set: prop.contract.order.action.primary
              } : undefined,
            note: prop.contract.order.action.note !== undefined ? {
                set: prop.contract.order.action.note
              } : undefined,
            status: prop.contract.order.action.status !== undefined ? {
                set: prop.contract.order.action.status
              } : undefined,
            fee: prop.contract.order.action.fee !== undefined ? {
                set: prop.contract.order.action.fee
              } : undefined,
          },
          create: {
            sequence: prop.contract.order.action.sequence !== undefined ? prop.contract.order.action.sequence : undefined,
            type: prop.contract.order.action.type !== undefined ? prop.contract.order.action.type : undefined,
            primary: prop.contract.order.action.primary !== undefined ? prop.contract.order.action.primary : undefined,
            note: prop.contract.order.action.note !== undefined ? prop.contract.order.action.note : undefined,
            status: prop.contract.order.action.status !== undefined ? prop.contract.order.action.status : undefined,
            fee: prop.contract.order.action.fee !== undefined ? prop.contract.order.action.fee : undefined,
          },
        }
      } : undefined,
      asset: prop.contract.order.asset ? 
      typeof prop.contract.order.asset === 'object' && Object.keys(prop.contract.order.asset).length === 1 && (Object.keys(prop.contract.order.asset)[0] === 'id' || Object.keys(prop.contract.order.asset)[0] === 'symbol')
? {
      connect: {
        id: prop.contract.order.asset.id
      }
} : { upsert: {
          where: {
            id: prop.contract.order.asset.id !== undefined ? {
                equals: prop.contract.order.asset.id
              } : undefined,
            symbol: prop.contract.order.asset.symbol !== undefined ? {
                equals: prop.contract.order.asset.symbol
              } : undefined,
            name: prop.contract.order.asset.name !== undefined ? {
                equals: prop.contract.order.asset.name
              } : undefined,
          },
          update: {
            id: prop.contract.order.asset.id !== undefined ? {
                set: prop.contract.order.asset.id
              } : undefined,
            symbol: prop.contract.order.asset.symbol !== undefined ? {
                set: prop.contract.order.asset.symbol
              } : undefined,
            name: prop.contract.order.asset.name !== undefined ? {
                set: prop.contract.order.asset.name
              } : undefined,
            type: prop.contract.order.asset.type !== undefined ? {
                set: prop.contract.order.asset.type
              } : undefined,
            logoUrl: prop.contract.order.asset.logoUrl !== undefined ? {
                set: prop.contract.order.asset.logoUrl
              } : undefined,
            description: prop.contract.order.asset.description !== undefined ? {
                set: prop.contract.order.asset.description
              } : undefined,
            cik: prop.contract.order.asset.cik !== undefined ? {
                set: prop.contract.order.asset.cik
              } : undefined,
            exchange: prop.contract.order.asset.exchange !== undefined ? {
                set: prop.contract.order.asset.exchange
              } : undefined,
            currency: prop.contract.order.asset.currency !== undefined ? {
                set: prop.contract.order.asset.currency
              } : undefined,
            country: prop.contract.order.asset.country !== undefined ? {
                set: prop.contract.order.asset.country
              } : undefined,
            sector: prop.contract.order.asset.sector !== undefined ? {
                set: prop.contract.order.asset.sector
              } : undefined,
            industry: prop.contract.order.asset.industry !== undefined ? {
                set: prop.contract.order.asset.industry
              } : undefined,
            address: prop.contract.order.asset.address !== undefined ? {
                set: prop.contract.order.asset.address
              } : undefined,
            officialSite: prop.contract.order.asset.officialSite !== undefined ? {
                set: prop.contract.order.asset.officialSite
              } : undefined,
            fiscalYearEnd: prop.contract.order.asset.fiscalYearEnd !== undefined ? {
                set: prop.contract.order.asset.fiscalYearEnd
              } : undefined,
            latestQuarter: prop.contract.order.asset.latestQuarter !== undefined ? {
                set: prop.contract.order.asset.latestQuarter
              } : undefined,
            marketCapitalization: prop.contract.order.asset.marketCapitalization !== undefined ? {
                set: prop.contract.order.asset.marketCapitalization
              } : undefined,
            ebitda: prop.contract.order.asset.ebitda !== undefined ? {
                set: prop.contract.order.asset.ebitda
              } : undefined,
            peRatio: prop.contract.order.asset.peRatio !== undefined ? {
                set: prop.contract.order.asset.peRatio
              } : undefined,
            pegRatio: prop.contract.order.asset.pegRatio !== undefined ? {
                set: prop.contract.order.asset.pegRatio
              } : undefined,
            bookValue: prop.contract.order.asset.bookValue !== undefined ? {
                set: prop.contract.order.asset.bookValue
              } : undefined,
            dividendPerShare: prop.contract.order.asset.dividendPerShare !== undefined ? {
                set: prop.contract.order.asset.dividendPerShare
              } : undefined,
            dividendYield: prop.contract.order.asset.dividendYield !== undefined ? {
                set: prop.contract.order.asset.dividendYield
              } : undefined,
            eps: prop.contract.order.asset.eps !== undefined ? {
                set: prop.contract.order.asset.eps
              } : undefined,
            revenuePerShareTTM: prop.contract.order.asset.revenuePerShareTTM !== undefined ? {
                set: prop.contract.order.asset.revenuePerShareTTM
              } : undefined,
            profitMargin: prop.contract.order.asset.profitMargin !== undefined ? {
                set: prop.contract.order.asset.profitMargin
              } : undefined,
            operatingMarginTTM: prop.contract.order.asset.operatingMarginTTM !== undefined ? {
                set: prop.contract.order.asset.operatingMarginTTM
              } : undefined,
            returnOnAssetsTTM: prop.contract.order.asset.returnOnAssetsTTM !== undefined ? {
                set: prop.contract.order.asset.returnOnAssetsTTM
              } : undefined,
            returnOnEquityTTM: prop.contract.order.asset.returnOnEquityTTM !== undefined ? {
                set: prop.contract.order.asset.returnOnEquityTTM
              } : undefined,
            revenueTTM: prop.contract.order.asset.revenueTTM !== undefined ? {
                set: prop.contract.order.asset.revenueTTM
              } : undefined,
            grossProfitTTM: prop.contract.order.asset.grossProfitTTM !== undefined ? {
                set: prop.contract.order.asset.grossProfitTTM
              } : undefined,
            dilutedEPSTTM: prop.contract.order.asset.dilutedEPSTTM !== undefined ? {
                set: prop.contract.order.asset.dilutedEPSTTM
              } : undefined,
            quarterlyEarningsGrowthYOY: prop.contract.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: prop.contract.order.asset.quarterlyEarningsGrowthYOY
              } : undefined,
            quarterlyRevenueGrowthYOY: prop.contract.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: prop.contract.order.asset.quarterlyRevenueGrowthYOY
              } : undefined,
            analystTargetPrice: prop.contract.order.asset.analystTargetPrice !== undefined ? {
                set: prop.contract.order.asset.analystTargetPrice
              } : undefined,
            analystRatingStrongBuy: prop.contract.order.asset.analystRatingStrongBuy !== undefined ? {
                set: prop.contract.order.asset.analystRatingStrongBuy
              } : undefined,
            analystRatingBuy: prop.contract.order.asset.analystRatingBuy !== undefined ? {
                set: prop.contract.order.asset.analystRatingBuy
              } : undefined,
            analystRatingHold: prop.contract.order.asset.analystRatingHold !== undefined ? {
                set: prop.contract.order.asset.analystRatingHold
              } : undefined,
            analystRatingSell: prop.contract.order.asset.analystRatingSell !== undefined ? {
                set: prop.contract.order.asset.analystRatingSell
              } : undefined,
            analystRatingStrongSell: prop.contract.order.asset.analystRatingStrongSell !== undefined ? {
                set: prop.contract.order.asset.analystRatingStrongSell
              } : undefined,
            trailingPE: prop.contract.order.asset.trailingPE !== undefined ? {
                set: prop.contract.order.asset.trailingPE
              } : undefined,
            forwardPE: prop.contract.order.asset.forwardPE !== undefined ? {
                set: prop.contract.order.asset.forwardPE
              } : undefined,
            priceToSalesRatioTTM: prop.contract.order.asset.priceToSalesRatioTTM !== undefined ? {
                set: prop.contract.order.asset.priceToSalesRatioTTM
              } : undefined,
            priceToBookRatio: prop.contract.order.asset.priceToBookRatio !== undefined ? {
                set: prop.contract.order.asset.priceToBookRatio
              } : undefined,
            evToRevenue: prop.contract.order.asset.evToRevenue !== undefined ? {
                set: prop.contract.order.asset.evToRevenue
              } : undefined,
            evToEbitda: prop.contract.order.asset.evToEbitda !== undefined ? {
                set: prop.contract.order.asset.evToEbitda
              } : undefined,
            beta: prop.contract.order.asset.beta !== undefined ? {
                set: prop.contract.order.asset.beta
              } : undefined,
            week52High: prop.contract.order.asset.week52High !== undefined ? {
                set: prop.contract.order.asset.week52High
              } : undefined,
            week52Low: prop.contract.order.asset.week52Low !== undefined ? {
                set: prop.contract.order.asset.week52Low
              } : undefined,
            day50MovingAverage: prop.contract.order.asset.day50MovingAverage !== undefined ? {
                set: prop.contract.order.asset.day50MovingAverage
              } : undefined,
            day200MovingAverage: prop.contract.order.asset.day200MovingAverage !== undefined ? {
                set: prop.contract.order.asset.day200MovingAverage
              } : undefined,
            sharesOutstanding: prop.contract.order.asset.sharesOutstanding !== undefined ? {
                set: prop.contract.order.asset.sharesOutstanding
              } : undefined,
            dividendDate: prop.contract.order.asset.dividendDate !== undefined ? {
                set: prop.contract.order.asset.dividendDate
              } : undefined,
            exDividendDate: prop.contract.order.asset.exDividendDate !== undefined ? {
                set: prop.contract.order.asset.exDividendDate
              } : undefined,
            askPrice: prop.contract.order.asset.askPrice !== undefined ? {
                set: prop.contract.order.asset.askPrice
              } : undefined,
            bidPrice: prop.contract.order.asset.bidPrice !== undefined ? {
                set: prop.contract.order.asset.bidPrice
              } : undefined,
          },
          create: {
            symbol: prop.contract.order.asset.symbol !== undefined ? prop.contract.order.asset.symbol : undefined,
            name: prop.contract.order.asset.name !== undefined ? prop.contract.order.asset.name : undefined,
            type: prop.contract.order.asset.type !== undefined ? prop.contract.order.asset.type : undefined,
            logoUrl: prop.contract.order.asset.logoUrl !== undefined ? prop.contract.order.asset.logoUrl : undefined,
            description: prop.contract.order.asset.description !== undefined ? prop.contract.order.asset.description : undefined,
            cik: prop.contract.order.asset.cik !== undefined ? prop.contract.order.asset.cik : undefined,
            exchange: prop.contract.order.asset.exchange !== undefined ? prop.contract.order.asset.exchange : undefined,
            currency: prop.contract.order.asset.currency !== undefined ? prop.contract.order.asset.currency : undefined,
            country: prop.contract.order.asset.country !== undefined ? prop.contract.order.asset.country : undefined,
            sector: prop.contract.order.asset.sector !== undefined ? prop.contract.order.asset.sector : undefined,
            industry: prop.contract.order.asset.industry !== undefined ? prop.contract.order.asset.industry : undefined,
            address: prop.contract.order.asset.address !== undefined ? prop.contract.order.asset.address : undefined,
            officialSite: prop.contract.order.asset.officialSite !== undefined ? prop.contract.order.asset.officialSite : undefined,
            fiscalYearEnd: prop.contract.order.asset.fiscalYearEnd !== undefined ? prop.contract.order.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.contract.order.asset.latestQuarter !== undefined ? prop.contract.order.asset.latestQuarter : undefined,
            marketCapitalization: prop.contract.order.asset.marketCapitalization !== undefined ? prop.contract.order.asset.marketCapitalization : undefined,
            ebitda: prop.contract.order.asset.ebitda !== undefined ? prop.contract.order.asset.ebitda : undefined,
            peRatio: prop.contract.order.asset.peRatio !== undefined ? prop.contract.order.asset.peRatio : undefined,
            pegRatio: prop.contract.order.asset.pegRatio !== undefined ? prop.contract.order.asset.pegRatio : undefined,
            bookValue: prop.contract.order.asset.bookValue !== undefined ? prop.contract.order.asset.bookValue : undefined,
            dividendPerShare: prop.contract.order.asset.dividendPerShare !== undefined ? prop.contract.order.asset.dividendPerShare : undefined,
            dividendYield: prop.contract.order.asset.dividendYield !== undefined ? prop.contract.order.asset.dividendYield : undefined,
            eps: prop.contract.order.asset.eps !== undefined ? prop.contract.order.asset.eps : undefined,
            revenuePerShareTTM: prop.contract.order.asset.revenuePerShareTTM !== undefined ? prop.contract.order.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.contract.order.asset.profitMargin !== undefined ? prop.contract.order.asset.profitMargin : undefined,
            operatingMarginTTM: prop.contract.order.asset.operatingMarginTTM !== undefined ? prop.contract.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.contract.order.asset.returnOnAssetsTTM !== undefined ? prop.contract.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.contract.order.asset.returnOnEquityTTM !== undefined ? prop.contract.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.contract.order.asset.revenueTTM !== undefined ? prop.contract.order.asset.revenueTTM : undefined,
            grossProfitTTM: prop.contract.order.asset.grossProfitTTM !== undefined ? prop.contract.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.contract.order.asset.dilutedEPSTTM !== undefined ? prop.contract.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.contract.order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.contract.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.contract.order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.contract.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.contract.order.asset.analystTargetPrice !== undefined ? prop.contract.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.contract.order.asset.analystRatingStrongBuy !== undefined ? prop.contract.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.contract.order.asset.analystRatingBuy !== undefined ? prop.contract.order.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.contract.order.asset.analystRatingHold !== undefined ? prop.contract.order.asset.analystRatingHold : undefined,
            analystRatingSell: prop.contract.order.asset.analystRatingSell !== undefined ? prop.contract.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.contract.order.asset.analystRatingStrongSell !== undefined ? prop.contract.order.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.contract.order.asset.trailingPE !== undefined ? prop.contract.order.asset.trailingPE : undefined,
            forwardPE: prop.contract.order.asset.forwardPE !== undefined ? prop.contract.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.contract.order.asset.priceToSalesRatioTTM !== undefined ? prop.contract.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.contract.order.asset.priceToBookRatio !== undefined ? prop.contract.order.asset.priceToBookRatio : undefined,
            evToRevenue: prop.contract.order.asset.evToRevenue !== undefined ? prop.contract.order.asset.evToRevenue : undefined,
            evToEbitda: prop.contract.order.asset.evToEbitda !== undefined ? prop.contract.order.asset.evToEbitda : undefined,
            beta: prop.contract.order.asset.beta !== undefined ? prop.contract.order.asset.beta : undefined,
            week52High: prop.contract.order.asset.week52High !== undefined ? prop.contract.order.asset.week52High : undefined,
            week52Low: prop.contract.order.asset.week52Low !== undefined ? prop.contract.order.asset.week52Low : undefined,
            day50MovingAverage: prop.contract.order.asset.day50MovingAverage !== undefined ? prop.contract.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.contract.order.asset.day200MovingAverage !== undefined ? prop.contract.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.contract.order.asset.sharesOutstanding !== undefined ? prop.contract.order.asset.sharesOutstanding : undefined,
            dividendDate: prop.contract.order.asset.dividendDate !== undefined ? prop.contract.order.asset.dividendDate : undefined,
            exDividendDate: prop.contract.order.asset.exDividendDate !== undefined ? prop.contract.order.asset.exDividendDate : undefined,
            askPrice: prop.contract.order.asset.askPrice !== undefined ? prop.contract.order.asset.askPrice : undefined,
            bidPrice: prop.contract.order.asset.bidPrice !== undefined ? prop.contract.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
        create: {
          clientOrderId: prop.contract.order.clientOrderId !== undefined ? prop.contract.order.clientOrderId : undefined,
          qty: prop.contract.order.qty !== undefined ? prop.contract.order.qty : undefined,
          notional: prop.contract.order.notional !== undefined ? prop.contract.order.notional : undefined,
          side: prop.contract.order.side !== undefined ? prop.contract.order.side : undefined,
          type: prop.contract.order.type !== undefined ? prop.contract.order.type : undefined,
          orderClass: prop.contract.order.orderClass !== undefined ? prop.contract.order.orderClass : undefined,
          timeInForce: prop.contract.order.timeInForce !== undefined ? prop.contract.order.timeInForce : undefined,
          limitPrice: prop.contract.order.limitPrice !== undefined ? prop.contract.order.limitPrice : undefined,
          stopPrice: prop.contract.order.stopPrice !== undefined ? prop.contract.order.stopPrice : undefined,
          trailPrice: prop.contract.order.trailPrice !== undefined ? prop.contract.order.trailPrice : undefined,
          trailPercent: prop.contract.order.trailPercent !== undefined ? prop.contract.order.trailPercent : undefined,
          extendedHours: prop.contract.order.extendedHours !== undefined ? prop.contract.order.extendedHours : undefined,
          status: prop.contract.order.status !== undefined ? prop.contract.order.status : undefined,
          submittedAt: prop.contract.order.submittedAt !== undefined ? prop.contract.order.submittedAt : undefined,
          filledAt: prop.contract.order.filledAt !== undefined ? prop.contract.order.filledAt : undefined,
          filledQty: prop.contract.order.filledQty !== undefined ? prop.contract.order.filledQty : undefined,
          filledAvgPrice: prop.contract.order.filledAvgPrice !== undefined ? prop.contract.order.filledAvgPrice : undefined,
          cancelRequestedAt: prop.contract.order.cancelRequestedAt !== undefined ? prop.contract.order.cancelRequestedAt : undefined,
          canceledAt: prop.contract.order.canceledAt !== undefined ? prop.contract.order.canceledAt : undefined,
          fee: prop.contract.order.fee !== undefined ? prop.contract.order.fee : undefined,
          strikePrice: prop.contract.order.strikePrice !== undefined ? prop.contract.order.strikePrice : undefined,
          expirationDate: prop.contract.order.expirationDate !== undefined ? prop.contract.order.expirationDate : undefined,
          expiredAt: prop.contract.order.expiredAt !== undefined ? prop.contract.order.expiredAt : undefined,
          failedAt: prop.contract.order.failedAt !== undefined ? prop.contract.order.failedAt : undefined,
          replacedAt: prop.contract.order.replacedAt !== undefined ? prop.contract.order.replacedAt : undefined,
          replacedBy: prop.contract.order.replacedBy !== undefined ? prop.contract.order.replacedBy : undefined,
          replaces: prop.contract.order.replaces !== undefined ? prop.contract.order.replaces : undefined,
          positionIntent: prop.contract.order.positionIntent !== undefined ? prop.contract.order.positionIntent : undefined,
          legs: prop.contract.order.legs !== undefined ? prop.contract.order.legs : undefined,
          hwm: prop.contract.order.hwm !== undefined ? prop.contract.order.hwm : undefined,
          subtag: prop.contract.order.subtag !== undefined ? prop.contract.order.subtag : undefined,
          source: prop.contract.order.source !== undefined ? prop.contract.order.source : undefined,
          expiresAt: prop.contract.order.expiresAt !== undefined ? prop.contract.order.expiresAt : undefined,
          optionType: prop.contract.order.optionType !== undefined ? prop.contract.order.optionType : undefined,
          stopLossId: prop.contract.order.stopLossId !== undefined ? prop.contract.order.stopLossId : undefined,
          takeProfitId: prop.contract.order.takeProfitId !== undefined ? prop.contract.order.takeProfitId : undefined,
      stopLoss: prop.contract.order.stopLoss ? 
        typeof prop.contract.order.stopLoss === 'object' && Object.keys(prop.contract.order.stopLoss).length === 1 && Object.keys(prop.contract.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: prop.contract.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.contract.order.stopLoss.id !== undefined ? prop.contract.order.stopLoss.id : undefined,
            orderId: prop.contract.order.stopLoss.orderId !== undefined ? prop.contract.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: prop.contract.order.stopLoss.stopPrice !== undefined ? prop.contract.order.stopLoss.stopPrice : undefined,
            limitPrice: prop.contract.order.stopLoss.limitPrice !== undefined ? prop.contract.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: prop.contract.order.takeProfit ? 
        typeof prop.contract.order.takeProfit === 'object' && Object.keys(prop.contract.order.takeProfit).length === 1 && Object.keys(prop.contract.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: prop.contract.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.contract.order.takeProfit.id !== undefined ? prop.contract.order.takeProfit.id : undefined,
            orderId: prop.contract.order.takeProfit.orderId !== undefined ? prop.contract.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: prop.contract.order.takeProfit.limitPrice !== undefined ? prop.contract.order.takeProfit.limitPrice : undefined,
            stopPrice: prop.contract.order.takeProfit.stopPrice !== undefined ? prop.contract.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: prop.contract.order.alpacaAccount ? 
        typeof prop.contract.order.alpacaAccount === 'object' && Object.keys(prop.contract.order.alpacaAccount).length === 1 && Object.keys(prop.contract.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: prop.contract.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.contract.order.alpacaAccount.id !== undefined ? prop.contract.order.alpacaAccount.id : undefined,
            userId: prop.contract.order.alpacaAccount.userId !== undefined ? {
                equals: prop.contract.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: prop.contract.order.alpacaAccount.type !== undefined ? prop.contract.order.alpacaAccount.type : undefined,
            APIKey: prop.contract.order.alpacaAccount.APIKey !== undefined ? prop.contract.order.alpacaAccount.APIKey : undefined,
            APISecret: prop.contract.order.alpacaAccount.APISecret !== undefined ? prop.contract.order.alpacaAccount.APISecret : undefined,
            configuration: prop.contract.order.alpacaAccount.configuration !== undefined ? prop.contract.order.alpacaAccount.configuration : undefined,
            marketOpen: prop.contract.order.alpacaAccount.marketOpen !== undefined ? prop.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: prop.contract.order.alpacaAccount.realTime !== undefined ? prop.contract.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: prop.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? prop.contract.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: prop.contract.order.alpacaAccount.minPercentageChange !== undefined ? prop.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: prop.contract.order.alpacaAccount.volumeThreshold !== undefined ? prop.contract.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: prop.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? prop.contract.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: prop.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? prop.contract.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: prop.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? prop.contract.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: prop.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? prop.contract.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: prop.contract.order.action ? 
        typeof prop.contract.order.action === 'object' && Object.keys(prop.contract.order.action).length === 1 && Object.keys(prop.contract.order.action)[0] === 'id'
    ? { connect: {
            id: prop.contract.order.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.contract.order.action.id !== undefined ? prop.contract.order.action.id : undefined,
            tradeId: prop.contract.order.action.tradeId !== undefined ? {
                equals: prop.contract.order.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: prop.contract.order.action.sequence !== undefined ? prop.contract.order.action.sequence : undefined,
            type: prop.contract.order.action.type !== undefined ? prop.contract.order.action.type : undefined,
            primary: prop.contract.order.action.primary !== undefined ? prop.contract.order.action.primary : undefined,
            note: prop.contract.order.action.note !== undefined ? prop.contract.order.action.note : undefined,
            status: prop.contract.order.action.status !== undefined ? prop.contract.order.action.status : undefined,
            fee: prop.contract.order.action.fee !== undefined ? prop.contract.order.action.fee : undefined,
          },
        }
      } : undefined,
      asset: prop.contract.order.asset ? 
        typeof prop.contract.order.asset === 'object' && Object.keys(prop.contract.order.asset).length === 1 && Object.keys(prop.contract.order.asset)[0] === 'id'
    ? { connect: {
            id: prop.contract.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.contract.order.asset.id !== undefined ? prop.contract.order.asset.id : undefined,
            symbol: prop.contract.order.asset.symbol !== undefined ? prop.contract.order.asset.symbol : undefined,
            name: prop.contract.order.asset.name !== undefined ? prop.contract.order.asset.name : undefined,
          },
          create: {
            symbol: prop.contract.order.asset.symbol !== undefined ? prop.contract.order.asset.symbol : undefined,
            name: prop.contract.order.asset.name !== undefined ? prop.contract.order.asset.name : undefined,
            type: prop.contract.order.asset.type !== undefined ? prop.contract.order.asset.type : undefined,
            logoUrl: prop.contract.order.asset.logoUrl !== undefined ? prop.contract.order.asset.logoUrl : undefined,
            description: prop.contract.order.asset.description !== undefined ? prop.contract.order.asset.description : undefined,
            cik: prop.contract.order.asset.cik !== undefined ? prop.contract.order.asset.cik : undefined,
            exchange: prop.contract.order.asset.exchange !== undefined ? prop.contract.order.asset.exchange : undefined,
            currency: prop.contract.order.asset.currency !== undefined ? prop.contract.order.asset.currency : undefined,
            country: prop.contract.order.asset.country !== undefined ? prop.contract.order.asset.country : undefined,
            sector: prop.contract.order.asset.sector !== undefined ? prop.contract.order.asset.sector : undefined,
            industry: prop.contract.order.asset.industry !== undefined ? prop.contract.order.asset.industry : undefined,
            address: prop.contract.order.asset.address !== undefined ? prop.contract.order.asset.address : undefined,
            officialSite: prop.contract.order.asset.officialSite !== undefined ? prop.contract.order.asset.officialSite : undefined,
            fiscalYearEnd: prop.contract.order.asset.fiscalYearEnd !== undefined ? prop.contract.order.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.contract.order.asset.latestQuarter !== undefined ? prop.contract.order.asset.latestQuarter : undefined,
            marketCapitalization: prop.contract.order.asset.marketCapitalization !== undefined ? prop.contract.order.asset.marketCapitalization : undefined,
            ebitda: prop.contract.order.asset.ebitda !== undefined ? prop.contract.order.asset.ebitda : undefined,
            peRatio: prop.contract.order.asset.peRatio !== undefined ? prop.contract.order.asset.peRatio : undefined,
            pegRatio: prop.contract.order.asset.pegRatio !== undefined ? prop.contract.order.asset.pegRatio : undefined,
            bookValue: prop.contract.order.asset.bookValue !== undefined ? prop.contract.order.asset.bookValue : undefined,
            dividendPerShare: prop.contract.order.asset.dividendPerShare !== undefined ? prop.contract.order.asset.dividendPerShare : undefined,
            dividendYield: prop.contract.order.asset.dividendYield !== undefined ? prop.contract.order.asset.dividendYield : undefined,
            eps: prop.contract.order.asset.eps !== undefined ? prop.contract.order.asset.eps : undefined,
            revenuePerShareTTM: prop.contract.order.asset.revenuePerShareTTM !== undefined ? prop.contract.order.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.contract.order.asset.profitMargin !== undefined ? prop.contract.order.asset.profitMargin : undefined,
            operatingMarginTTM: prop.contract.order.asset.operatingMarginTTM !== undefined ? prop.contract.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.contract.order.asset.returnOnAssetsTTM !== undefined ? prop.contract.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.contract.order.asset.returnOnEquityTTM !== undefined ? prop.contract.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.contract.order.asset.revenueTTM !== undefined ? prop.contract.order.asset.revenueTTM : undefined,
            grossProfitTTM: prop.contract.order.asset.grossProfitTTM !== undefined ? prop.contract.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.contract.order.asset.dilutedEPSTTM !== undefined ? prop.contract.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.contract.order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.contract.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.contract.order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.contract.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.contract.order.asset.analystTargetPrice !== undefined ? prop.contract.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.contract.order.asset.analystRatingStrongBuy !== undefined ? prop.contract.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.contract.order.asset.analystRatingBuy !== undefined ? prop.contract.order.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.contract.order.asset.analystRatingHold !== undefined ? prop.contract.order.asset.analystRatingHold : undefined,
            analystRatingSell: prop.contract.order.asset.analystRatingSell !== undefined ? prop.contract.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.contract.order.asset.analystRatingStrongSell !== undefined ? prop.contract.order.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.contract.order.asset.trailingPE !== undefined ? prop.contract.order.asset.trailingPE : undefined,
            forwardPE: prop.contract.order.asset.forwardPE !== undefined ? prop.contract.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.contract.order.asset.priceToSalesRatioTTM !== undefined ? prop.contract.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.contract.order.asset.priceToBookRatio !== undefined ? prop.contract.order.asset.priceToBookRatio : undefined,
            evToRevenue: prop.contract.order.asset.evToRevenue !== undefined ? prop.contract.order.asset.evToRevenue : undefined,
            evToEbitda: prop.contract.order.asset.evToEbitda !== undefined ? prop.contract.order.asset.evToEbitda : undefined,
            beta: prop.contract.order.asset.beta !== undefined ? prop.contract.order.asset.beta : undefined,
            week52High: prop.contract.order.asset.week52High !== undefined ? prop.contract.order.asset.week52High : undefined,
            week52Low: prop.contract.order.asset.week52Low !== undefined ? prop.contract.order.asset.week52Low : undefined,
            day50MovingAverage: prop.contract.order.asset.day50MovingAverage !== undefined ? prop.contract.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.contract.order.asset.day200MovingAverage !== undefined ? prop.contract.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.contract.order.asset.sharesOutstanding !== undefined ? prop.contract.order.asset.sharesOutstanding : undefined,
            dividendDate: prop.contract.order.asset.dividendDate !== undefined ? prop.contract.order.asset.dividendDate : undefined,
            exDividendDate: prop.contract.order.asset.exDividendDate !== undefined ? prop.contract.order.asset.exDividendDate : undefined,
            askPrice: prop.contract.order.asset.askPrice !== undefined ? prop.contract.order.asset.askPrice : undefined,
            bidPrice: prop.contract.order.asset.bidPrice !== undefined ? prop.contract.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        alpacaId: prop.contract.alpacaId !== undefined ? prop.contract.alpacaId : undefined,
        symbol: prop.contract.symbol !== undefined ? prop.contract.symbol : undefined,
        name: prop.contract.name !== undefined ? prop.contract.name : undefined,
        status: prop.contract.status !== undefined ? prop.contract.status : undefined,
        tradable: prop.contract.tradable !== undefined ? prop.contract.tradable : undefined,
        expirationDate: prop.contract.expirationDate !== undefined ? prop.contract.expirationDate : undefined,
        rootSymbol: prop.contract.rootSymbol !== undefined ? prop.contract.rootSymbol : undefined,
        underlyingSymbol: prop.contract.underlyingSymbol !== undefined ? prop.contract.underlyingSymbol : undefined,
        underlyingAssetId: prop.contract.underlyingAssetId !== undefined ? prop.contract.underlyingAssetId : undefined,
        type: prop.contract.type !== undefined ? prop.contract.type : undefined,
        style: prop.contract.style !== undefined ? prop.contract.style : undefined,
        strikePrice: prop.contract.strikePrice !== undefined ? prop.contract.strikePrice : undefined,
        multiplier: prop.contract.multiplier !== undefined ? prop.contract.multiplier : undefined,
        size: prop.contract.size !== undefined ? prop.contract.size : undefined,
        openInterest: prop.contract.openInterest !== undefined ? prop.contract.openInterest : undefined,
        openInterestDate: prop.contract.openInterestDate !== undefined ? prop.contract.openInterestDate : undefined,
        closePrice: prop.contract.closePrice !== undefined ? prop.contract.closePrice : undefined,
        closePriceDate: prop.contract.closePriceDate !== undefined ? prop.contract.closePriceDate : undefined,
        ppind: prop.contract.ppind !== undefined ? prop.contract.ppind : undefined,
        orderId: prop.contract.orderId !== undefined ? prop.contract.orderId : undefined,
    asset: prop.contract.asset ? 
      typeof prop.contract.asset === 'object' && Object.keys(prop.contract.asset).length === 1 && Object.keys(prop.contract.asset)[0] === 'id'
    ? { connect: {
          id: prop.contract.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.contract.asset.id !== undefined ? prop.contract.asset.id : undefined,
          symbol: prop.contract.asset.symbol !== undefined ? prop.contract.asset.symbol : undefined,
          name: prop.contract.asset.name !== undefined ? prop.contract.asset.name : undefined,
        },
        create: {
          symbol: prop.contract.asset.symbol !== undefined ? prop.contract.asset.symbol : undefined,
          name: prop.contract.asset.name !== undefined ? prop.contract.asset.name : undefined,
          type: prop.contract.asset.type !== undefined ? prop.contract.asset.type : undefined,
          logoUrl: prop.contract.asset.logoUrl !== undefined ? prop.contract.asset.logoUrl : undefined,
          description: prop.contract.asset.description !== undefined ? prop.contract.asset.description : undefined,
          cik: prop.contract.asset.cik !== undefined ? prop.contract.asset.cik : undefined,
          exchange: prop.contract.asset.exchange !== undefined ? prop.contract.asset.exchange : undefined,
          currency: prop.contract.asset.currency !== undefined ? prop.contract.asset.currency : undefined,
          country: prop.contract.asset.country !== undefined ? prop.contract.asset.country : undefined,
          sector: prop.contract.asset.sector !== undefined ? prop.contract.asset.sector : undefined,
          industry: prop.contract.asset.industry !== undefined ? prop.contract.asset.industry : undefined,
          address: prop.contract.asset.address !== undefined ? prop.contract.asset.address : undefined,
          officialSite: prop.contract.asset.officialSite !== undefined ? prop.contract.asset.officialSite : undefined,
          fiscalYearEnd: prop.contract.asset.fiscalYearEnd !== undefined ? prop.contract.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.contract.asset.latestQuarter !== undefined ? prop.contract.asset.latestQuarter : undefined,
          marketCapitalization: prop.contract.asset.marketCapitalization !== undefined ? prop.contract.asset.marketCapitalization : undefined,
          ebitda: prop.contract.asset.ebitda !== undefined ? prop.contract.asset.ebitda : undefined,
          peRatio: prop.contract.asset.peRatio !== undefined ? prop.contract.asset.peRatio : undefined,
          pegRatio: prop.contract.asset.pegRatio !== undefined ? prop.contract.asset.pegRatio : undefined,
          bookValue: prop.contract.asset.bookValue !== undefined ? prop.contract.asset.bookValue : undefined,
          dividendPerShare: prop.contract.asset.dividendPerShare !== undefined ? prop.contract.asset.dividendPerShare : undefined,
          dividendYield: prop.contract.asset.dividendYield !== undefined ? prop.contract.asset.dividendYield : undefined,
          eps: prop.contract.asset.eps !== undefined ? prop.contract.asset.eps : undefined,
          revenuePerShareTTM: prop.contract.asset.revenuePerShareTTM !== undefined ? prop.contract.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.contract.asset.profitMargin !== undefined ? prop.contract.asset.profitMargin : undefined,
          operatingMarginTTM: prop.contract.asset.operatingMarginTTM !== undefined ? prop.contract.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.contract.asset.returnOnAssetsTTM !== undefined ? prop.contract.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.contract.asset.returnOnEquityTTM !== undefined ? prop.contract.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.contract.asset.revenueTTM !== undefined ? prop.contract.asset.revenueTTM : undefined,
          grossProfitTTM: prop.contract.asset.grossProfitTTM !== undefined ? prop.contract.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.contract.asset.dilutedEPSTTM !== undefined ? prop.contract.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.contract.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.contract.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.contract.asset.analystTargetPrice !== undefined ? prop.contract.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.contract.asset.analystRatingStrongBuy !== undefined ? prop.contract.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.contract.asset.analystRatingBuy !== undefined ? prop.contract.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.contract.asset.analystRatingHold !== undefined ? prop.contract.asset.analystRatingHold : undefined,
          analystRatingSell: prop.contract.asset.analystRatingSell !== undefined ? prop.contract.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.contract.asset.analystRatingStrongSell !== undefined ? prop.contract.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.contract.asset.trailingPE !== undefined ? prop.contract.asset.trailingPE : undefined,
          forwardPE: prop.contract.asset.forwardPE !== undefined ? prop.contract.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.contract.asset.priceToSalesRatioTTM !== undefined ? prop.contract.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.contract.asset.priceToBookRatio !== undefined ? prop.contract.asset.priceToBookRatio : undefined,
          evToRevenue: prop.contract.asset.evToRevenue !== undefined ? prop.contract.asset.evToRevenue : undefined,
          evToEbitda: prop.contract.asset.evToEbitda !== undefined ? prop.contract.asset.evToEbitda : undefined,
          beta: prop.contract.asset.beta !== undefined ? prop.contract.asset.beta : undefined,
          week52High: prop.contract.asset.week52High !== undefined ? prop.contract.asset.week52High : undefined,
          week52Low: prop.contract.asset.week52Low !== undefined ? prop.contract.asset.week52Low : undefined,
          day50MovingAverage: prop.contract.asset.day50MovingAverage !== undefined ? prop.contract.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.contract.asset.day200MovingAverage !== undefined ? prop.contract.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.contract.asset.sharesOutstanding !== undefined ? prop.contract.asset.sharesOutstanding : undefined,
          dividendDate: prop.contract.asset.dividendDate !== undefined ? prop.contract.asset.dividendDate : undefined,
          exDividendDate: prop.contract.asset.exDividendDate !== undefined ? prop.contract.asset.exDividendDate : undefined,
          askPrice: prop.contract.asset.askPrice !== undefined ? prop.contract.asset.askPrice : undefined,
          bidPrice: prop.contract.asset.bidPrice !== undefined ? prop.contract.asset.bidPrice : undefined,
      orders: prop.contract.asset.orders ? 
        Array.isArray(prop.contract.asset.orders) && prop.contract.asset.orders.length > 0 &&  prop.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.contract.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.contract.asset.orders.map((item: any) => ({
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
          },
        }))
      } : undefined,
      positions: prop.contract.asset.positions ? 
        Array.isArray(prop.contract.asset.positions) && prop.contract.asset.positions.length > 0 &&  prop.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.contract.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.contract.asset.positions.map((item: any) => ({
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
          },
        }))
      } : undefined,
      newsMentions: prop.contract.asset.newsMentions ? 
        Array.isArray(prop.contract.asset.newsMentions) && prop.contract.asset.newsMentions.length > 0 &&  prop.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.contract.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.contract.asset.newsMentions.map((item: any) => ({
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
    order: prop.contract.order ? 
      typeof prop.contract.order === 'object' && Object.keys(prop.contract.order).length === 1 && Object.keys(prop.contract.order)[0] === 'id'
    ? { connect: {
          id: prop.contract.order.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.contract.order.id !== undefined ? prop.contract.order.id : undefined,
          clientOrderId: prop.contract.order.clientOrderId !== undefined ? prop.contract.order.clientOrderId : undefined,
          actionId: prop.contract.order.actionId !== undefined ? prop.contract.order.actionId : undefined,
          stopLossId: prop.contract.order.stopLossId !== undefined ? prop.contract.order.stopLossId : undefined,
          contractId: prop.contract.order.contractId !== undefined ? prop.contract.order.contractId : undefined,
          alpacaAccountId: prop.contract.order.alpacaAccountId !== undefined ? {
              equals: prop.contract.order.alpacaAccountId 
             } : undefined,
        },
        create: {
          clientOrderId: prop.contract.order.clientOrderId !== undefined ? prop.contract.order.clientOrderId : undefined,
          qty: prop.contract.order.qty !== undefined ? prop.contract.order.qty : undefined,
          notional: prop.contract.order.notional !== undefined ? prop.contract.order.notional : undefined,
          side: prop.contract.order.side !== undefined ? prop.contract.order.side : undefined,
          type: prop.contract.order.type !== undefined ? prop.contract.order.type : undefined,
          orderClass: prop.contract.order.orderClass !== undefined ? prop.contract.order.orderClass : undefined,
          timeInForce: prop.contract.order.timeInForce !== undefined ? prop.contract.order.timeInForce : undefined,
          limitPrice: prop.contract.order.limitPrice !== undefined ? prop.contract.order.limitPrice : undefined,
          stopPrice: prop.contract.order.stopPrice !== undefined ? prop.contract.order.stopPrice : undefined,
          trailPrice: prop.contract.order.trailPrice !== undefined ? prop.contract.order.trailPrice : undefined,
          trailPercent: prop.contract.order.trailPercent !== undefined ? prop.contract.order.trailPercent : undefined,
          extendedHours: prop.contract.order.extendedHours !== undefined ? prop.contract.order.extendedHours : undefined,
          status: prop.contract.order.status !== undefined ? prop.contract.order.status : undefined,
          submittedAt: prop.contract.order.submittedAt !== undefined ? prop.contract.order.submittedAt : undefined,
          filledAt: prop.contract.order.filledAt !== undefined ? prop.contract.order.filledAt : undefined,
          filledQty: prop.contract.order.filledQty !== undefined ? prop.contract.order.filledQty : undefined,
          filledAvgPrice: prop.contract.order.filledAvgPrice !== undefined ? prop.contract.order.filledAvgPrice : undefined,
          cancelRequestedAt: prop.contract.order.cancelRequestedAt !== undefined ? prop.contract.order.cancelRequestedAt : undefined,
          canceledAt: prop.contract.order.canceledAt !== undefined ? prop.contract.order.canceledAt : undefined,
          fee: prop.contract.order.fee !== undefined ? prop.contract.order.fee : undefined,
          strikePrice: prop.contract.order.strikePrice !== undefined ? prop.contract.order.strikePrice : undefined,
          expirationDate: prop.contract.order.expirationDate !== undefined ? prop.contract.order.expirationDate : undefined,
          expiredAt: prop.contract.order.expiredAt !== undefined ? prop.contract.order.expiredAt : undefined,
          failedAt: prop.contract.order.failedAt !== undefined ? prop.contract.order.failedAt : undefined,
          replacedAt: prop.contract.order.replacedAt !== undefined ? prop.contract.order.replacedAt : undefined,
          replacedBy: prop.contract.order.replacedBy !== undefined ? prop.contract.order.replacedBy : undefined,
          replaces: prop.contract.order.replaces !== undefined ? prop.contract.order.replaces : undefined,
          positionIntent: prop.contract.order.positionIntent !== undefined ? prop.contract.order.positionIntent : undefined,
          legs: prop.contract.order.legs !== undefined ? prop.contract.order.legs : undefined,
          hwm: prop.contract.order.hwm !== undefined ? prop.contract.order.hwm : undefined,
          subtag: prop.contract.order.subtag !== undefined ? prop.contract.order.subtag : undefined,
          source: prop.contract.order.source !== undefined ? prop.contract.order.source : undefined,
          expiresAt: prop.contract.order.expiresAt !== undefined ? prop.contract.order.expiresAt : undefined,
          optionType: prop.contract.order.optionType !== undefined ? prop.contract.order.optionType : undefined,
          stopLossId: prop.contract.order.stopLossId !== undefined ? prop.contract.order.stopLossId : undefined,
          takeProfitId: prop.contract.order.takeProfitId !== undefined ? prop.contract.order.takeProfitId : undefined,
      stopLoss: prop.contract.order.stopLoss ? 
        typeof prop.contract.order.stopLoss === 'object' && Object.keys(prop.contract.order.stopLoss).length === 1 && Object.keys(prop.contract.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: prop.contract.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.contract.order.stopLoss.id !== undefined ? prop.contract.order.stopLoss.id : undefined,
            orderId: prop.contract.order.stopLoss.orderId !== undefined ? prop.contract.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: prop.contract.order.stopLoss.stopPrice !== undefined ? prop.contract.order.stopLoss.stopPrice : undefined,
            limitPrice: prop.contract.order.stopLoss.limitPrice !== undefined ? prop.contract.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: prop.contract.order.takeProfit ? 
        typeof prop.contract.order.takeProfit === 'object' && Object.keys(prop.contract.order.takeProfit).length === 1 && Object.keys(prop.contract.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: prop.contract.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.contract.order.takeProfit.id !== undefined ? prop.contract.order.takeProfit.id : undefined,
            orderId: prop.contract.order.takeProfit.orderId !== undefined ? prop.contract.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: prop.contract.order.takeProfit.limitPrice !== undefined ? prop.contract.order.takeProfit.limitPrice : undefined,
            stopPrice: prop.contract.order.takeProfit.stopPrice !== undefined ? prop.contract.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: prop.contract.order.alpacaAccount ? 
        typeof prop.contract.order.alpacaAccount === 'object' && Object.keys(prop.contract.order.alpacaAccount).length === 1 && Object.keys(prop.contract.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: prop.contract.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.contract.order.alpacaAccount.id !== undefined ? prop.contract.order.alpacaAccount.id : undefined,
            userId: prop.contract.order.alpacaAccount.userId !== undefined ? {
                equals: prop.contract.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: prop.contract.order.alpacaAccount.type !== undefined ? prop.contract.order.alpacaAccount.type : undefined,
            APIKey: prop.contract.order.alpacaAccount.APIKey !== undefined ? prop.contract.order.alpacaAccount.APIKey : undefined,
            APISecret: prop.contract.order.alpacaAccount.APISecret !== undefined ? prop.contract.order.alpacaAccount.APISecret : undefined,
            configuration: prop.contract.order.alpacaAccount.configuration !== undefined ? prop.contract.order.alpacaAccount.configuration : undefined,
            marketOpen: prop.contract.order.alpacaAccount.marketOpen !== undefined ? prop.contract.order.alpacaAccount.marketOpen : undefined,
            realTime: prop.contract.order.alpacaAccount.realTime !== undefined ? prop.contract.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: prop.contract.order.alpacaAccount.tradeAllocationPct !== undefined ? prop.contract.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: prop.contract.order.alpacaAccount.minPercentageChange !== undefined ? prop.contract.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: prop.contract.order.alpacaAccount.volumeThreshold !== undefined ? prop.contract.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: prop.contract.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? prop.contract.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: prop.contract.order.alpacaAccount.portfolioTrailPercent !== undefined ? prop.contract.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: prop.contract.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? prop.contract.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: prop.contract.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? prop.contract.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      action: prop.contract.order.action ? 
        typeof prop.contract.order.action === 'object' && Object.keys(prop.contract.order.action).length === 1 && Object.keys(prop.contract.order.action)[0] === 'id'
    ? { connect: {
            id: prop.contract.order.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.contract.order.action.id !== undefined ? prop.contract.order.action.id : undefined,
            tradeId: prop.contract.order.action.tradeId !== undefined ? {
                equals: prop.contract.order.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: prop.contract.order.action.sequence !== undefined ? prop.contract.order.action.sequence : undefined,
            type: prop.contract.order.action.type !== undefined ? prop.contract.order.action.type : undefined,
            primary: prop.contract.order.action.primary !== undefined ? prop.contract.order.action.primary : undefined,
            note: prop.contract.order.action.note !== undefined ? prop.contract.order.action.note : undefined,
            status: prop.contract.order.action.status !== undefined ? prop.contract.order.action.status : undefined,
            fee: prop.contract.order.action.fee !== undefined ? prop.contract.order.action.fee : undefined,
          },
        }
      } : undefined,
      asset: prop.contract.order.asset ? 
        typeof prop.contract.order.asset === 'object' && Object.keys(prop.contract.order.asset).length === 1 && Object.keys(prop.contract.order.asset)[0] === 'id'
    ? { connect: {
            id: prop.contract.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.contract.order.asset.id !== undefined ? prop.contract.order.asset.id : undefined,
            symbol: prop.contract.order.asset.symbol !== undefined ? prop.contract.order.asset.symbol : undefined,
            name: prop.contract.order.asset.name !== undefined ? prop.contract.order.asset.name : undefined,
          },
          create: {
            symbol: prop.contract.order.asset.symbol !== undefined ? prop.contract.order.asset.symbol : undefined,
            name: prop.contract.order.asset.name !== undefined ? prop.contract.order.asset.name : undefined,
            type: prop.contract.order.asset.type !== undefined ? prop.contract.order.asset.type : undefined,
            logoUrl: prop.contract.order.asset.logoUrl !== undefined ? prop.contract.order.asset.logoUrl : undefined,
            description: prop.contract.order.asset.description !== undefined ? prop.contract.order.asset.description : undefined,
            cik: prop.contract.order.asset.cik !== undefined ? prop.contract.order.asset.cik : undefined,
            exchange: prop.contract.order.asset.exchange !== undefined ? prop.contract.order.asset.exchange : undefined,
            currency: prop.contract.order.asset.currency !== undefined ? prop.contract.order.asset.currency : undefined,
            country: prop.contract.order.asset.country !== undefined ? prop.contract.order.asset.country : undefined,
            sector: prop.contract.order.asset.sector !== undefined ? prop.contract.order.asset.sector : undefined,
            industry: prop.contract.order.asset.industry !== undefined ? prop.contract.order.asset.industry : undefined,
            address: prop.contract.order.asset.address !== undefined ? prop.contract.order.asset.address : undefined,
            officialSite: prop.contract.order.asset.officialSite !== undefined ? prop.contract.order.asset.officialSite : undefined,
            fiscalYearEnd: prop.contract.order.asset.fiscalYearEnd !== undefined ? prop.contract.order.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.contract.order.asset.latestQuarter !== undefined ? prop.contract.order.asset.latestQuarter : undefined,
            marketCapitalization: prop.contract.order.asset.marketCapitalization !== undefined ? prop.contract.order.asset.marketCapitalization : undefined,
            ebitda: prop.contract.order.asset.ebitda !== undefined ? prop.contract.order.asset.ebitda : undefined,
            peRatio: prop.contract.order.asset.peRatio !== undefined ? prop.contract.order.asset.peRatio : undefined,
            pegRatio: prop.contract.order.asset.pegRatio !== undefined ? prop.contract.order.asset.pegRatio : undefined,
            bookValue: prop.contract.order.asset.bookValue !== undefined ? prop.contract.order.asset.bookValue : undefined,
            dividendPerShare: prop.contract.order.asset.dividendPerShare !== undefined ? prop.contract.order.asset.dividendPerShare : undefined,
            dividendYield: prop.contract.order.asset.dividendYield !== undefined ? prop.contract.order.asset.dividendYield : undefined,
            eps: prop.contract.order.asset.eps !== undefined ? prop.contract.order.asset.eps : undefined,
            revenuePerShareTTM: prop.contract.order.asset.revenuePerShareTTM !== undefined ? prop.contract.order.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.contract.order.asset.profitMargin !== undefined ? prop.contract.order.asset.profitMargin : undefined,
            operatingMarginTTM: prop.contract.order.asset.operatingMarginTTM !== undefined ? prop.contract.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.contract.order.asset.returnOnAssetsTTM !== undefined ? prop.contract.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.contract.order.asset.returnOnEquityTTM !== undefined ? prop.contract.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.contract.order.asset.revenueTTM !== undefined ? prop.contract.order.asset.revenueTTM : undefined,
            grossProfitTTM: prop.contract.order.asset.grossProfitTTM !== undefined ? prop.contract.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.contract.order.asset.dilutedEPSTTM !== undefined ? prop.contract.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.contract.order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.contract.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.contract.order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.contract.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.contract.order.asset.analystTargetPrice !== undefined ? prop.contract.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.contract.order.asset.analystRatingStrongBuy !== undefined ? prop.contract.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.contract.order.asset.analystRatingBuy !== undefined ? prop.contract.order.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.contract.order.asset.analystRatingHold !== undefined ? prop.contract.order.asset.analystRatingHold : undefined,
            analystRatingSell: prop.contract.order.asset.analystRatingSell !== undefined ? prop.contract.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.contract.order.asset.analystRatingStrongSell !== undefined ? prop.contract.order.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.contract.order.asset.trailingPE !== undefined ? prop.contract.order.asset.trailingPE : undefined,
            forwardPE: prop.contract.order.asset.forwardPE !== undefined ? prop.contract.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.contract.order.asset.priceToSalesRatioTTM !== undefined ? prop.contract.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.contract.order.asset.priceToBookRatio !== undefined ? prop.contract.order.asset.priceToBookRatio : undefined,
            evToRevenue: prop.contract.order.asset.evToRevenue !== undefined ? prop.contract.order.asset.evToRevenue : undefined,
            evToEbitda: prop.contract.order.asset.evToEbitda !== undefined ? prop.contract.order.asset.evToEbitda : undefined,
            beta: prop.contract.order.asset.beta !== undefined ? prop.contract.order.asset.beta : undefined,
            week52High: prop.contract.order.asset.week52High !== undefined ? prop.contract.order.asset.week52High : undefined,
            week52Low: prop.contract.order.asset.week52Low !== undefined ? prop.contract.order.asset.week52Low : undefined,
            day50MovingAverage: prop.contract.order.asset.day50MovingAverage !== undefined ? prop.contract.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.contract.order.asset.day200MovingAverage !== undefined ? prop.contract.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.contract.order.asset.sharesOutstanding !== undefined ? prop.contract.order.asset.sharesOutstanding : undefined,
            dividendDate: prop.contract.order.asset.dividendDate !== undefined ? prop.contract.order.asset.dividendDate : undefined,
            exDividendDate: prop.contract.order.asset.exDividendDate !== undefined ? prop.contract.order.asset.exDividendDate : undefined,
            askPrice: prop.contract.order.asset.askPrice !== undefined ? prop.contract.order.asset.askPrice : undefined,
            bidPrice: prop.contract.order.asset.bidPrice !== undefined ? prop.contract.order.asset.bidPrice : undefined,
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
  async delete(props: DeliverableType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<DeliverableType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  async get(props: DeliverableType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<DeliverableType | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    } catch (error: any) {
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
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<DeliverableType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    } catch (error: any) {
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
  async findMany(props: DeliverableType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<DeliverableType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No Deliverable found') {
        return null;
      } else {
        console.error('Error in getDeliverable:', error);
        throw error;
      }
    }
  }
};
