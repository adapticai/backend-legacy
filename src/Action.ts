
  
import { Action as ActionType } from './generated/typegraphql-prisma/models/Action';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Action model.
   */

  const selectionSet = `
    
  id
  sequence
  tradeId
  type
  primary
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
  createdAt
  updatedAt

  `;

  export const Action = {

    /**
     * Create a new Action record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Action or null.
     */

    async create(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;

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
  primary: props.primary !== undefined ? props.primary : undefined,
  note: props.note !== undefined ? props.note : undefined,
  status: props.status !== undefined ? props.status : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  trade: props.trade ? 
    typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && Object.keys(props.trade)[0] === 'id'
    ? { connect: {
        id: props.trade.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.trade.id !== undefined ? props.trade.id : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId 
           } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol 
           } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        assetId: props.trade.assetId !== undefined ? props.trade.assetId : undefined,
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
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
      },
    }
  } : undefined,
  order: props.order ? 
    typeof props.order === 'object' && Object.keys(props.order).length === 1 && Object.keys(props.order)[0] === 'id'
    ? { connect: {
        id: props.order.id
        }
      }
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
        expiredAt: props.order.expiredAt !== undefined ? props.order.expiredAt : undefined,
        failedAt: props.order.failedAt !== undefined ? props.order.failedAt : undefined,
        replacedAt: props.order.replacedAt !== undefined ? props.order.replacedAt : undefined,
        replacedBy: props.order.replacedBy !== undefined ? props.order.replacedBy : undefined,
        replaces: props.order.replaces !== undefined ? props.order.replaces : undefined,
        positionIntent: props.order.positionIntent !== undefined ? props.order.positionIntent : undefined,
        legs: props.order.legs !== undefined ? props.order.legs : undefined,
        hwm: props.order.hwm !== undefined ? props.order.hwm : undefined,
        subtag: props.order.subtag !== undefined ? props.order.subtag : undefined,
        source: props.order.source !== undefined ? props.order.source : undefined,
        expiresAt: props.order.expiresAt !== undefined ? props.order.expiresAt : undefined,
        optionType: props.order.optionType !== undefined ? props.order.optionType : undefined,
        stopLossId: props.order.stopLossId !== undefined ? props.order.stopLossId : undefined,
        takeProfitId: props.order.takeProfitId !== undefined ? props.order.takeProfitId : undefined,
    stopLoss: props.order.stopLoss ? 
      typeof props.order.stopLoss === 'object' && Object.keys(props.order.stopLoss).length === 1 && Object.keys(props.order.stopLoss)[0] === 'id'
    ? { connect: {
          id: props.order.stopLoss.id
          }
        }
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
          }
        }
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
          }
        }
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
          configuration: props.order.alpacaAccount.configuration !== undefined ? props.order.alpacaAccount.configuration : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? props.order.alpacaAccount.marketOpen : undefined,
          realTime: props.order.alpacaAccount.realTime !== undefined ? props.order.alpacaAccount.realTime : undefined,
          tradeAllocationPct: props.order.alpacaAccount.tradeAllocationPct !== undefined ? props.order.alpacaAccount.tradeAllocationPct : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.order.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
      user: props.order.alpacaAccount.user ? 
        typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && Object.keys(props.order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.order.alpacaAccount.user.id
            }
          }
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
      positions: props.order.alpacaAccount.positions ? 
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
        Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 &&  props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.alerts.map((item: any) => ({
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
          }
        }
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
      positions: props.order.asset.positions ? 
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
        Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 &&  props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 &&  props.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.contracts.map((item: any) => ({
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
          }
        }
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
        Array.isArray(props.order.contract.deliverables) && props.order.contract.deliverables.length > 0 &&  props.order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
  async createMany(props: ActionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  primary: prop.primary !== undefined ? prop.primary : undefined,
  note: prop.note !== undefined ? prop.note : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  fee: prop.fee !== undefined ? prop.fee : undefined,
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
  async update(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  primary: props.primary !== undefined ? {
            set: props.primary 
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
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  trade: props.trade ? 
  typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && (Object.keys(props.trade)[0] === 'id' || Object.keys(props.trade)[0] === 'symbol')
? {
  connect: {
    id: props.trade.id
  }
} : { upsert: {
      where: {
        id: props.trade.id !== undefined ? {
            equals: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId
          } : undefined,
        assetId: props.trade.assetId !== undefined ? {
            equals: props.trade.assetId
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol
          } : undefined,
      },
      update: {
        id: props.trade.id !== undefined ? {
            set: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            set: props.trade.alpacaAccountId
          } : undefined,
        assetId: props.trade.assetId !== undefined ? {
            set: props.trade.assetId
          } : undefined,
        qty: props.trade.qty !== undefined ? {
            set: props.trade.qty
          } : undefined,
        price: props.trade.price !== undefined ? {
            set: props.trade.price
          } : undefined,
        total: props.trade.total !== undefined ? {
            set: props.trade.total
          } : undefined,
        optionType: props.trade.optionType !== undefined ? {
            set: props.trade.optionType
          } : undefined,
        signal: props.trade.signal !== undefined ? {
            set: props.trade.signal
          } : undefined,
        strategy: props.trade.strategy !== undefined ? {
            set: props.trade.strategy
          } : undefined,
        analysis: props.trade.analysis !== undefined ? {
            set: props.trade.analysis
          } : undefined,
        summary: props.trade.summary !== undefined ? {
            set: props.trade.summary
          } : undefined,
        confidence: props.trade.confidence !== undefined ? {
            set: props.trade.confidence
          } : undefined,
        timestamp: props.trade.timestamp !== undefined ? {
            set: props.trade.timestamp
          } : undefined,
        status: props.trade.status !== undefined ? {
            set: props.trade.status
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            set: props.trade.symbol
          } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        assetId: props.trade.assetId !== undefined ? props.trade.assetId : undefined,
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
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
      },
    }
  } : undefined,
  order: props.order ? 
  typeof props.order === 'object' && Object.keys(props.order).length === 1 && (Object.keys(props.order)[0] === 'id' || Object.keys(props.order)[0] === 'symbol')
? {
  connect: {
    id: props.order.id
  }
} : { upsert: {
      where: {
        id: props.order.id !== undefined ? {
            equals: props.order.id
          } : undefined,
        clientOrderId: props.order.clientOrderId !== undefined ? {
            equals: props.order.clientOrderId
          } : undefined,
        alpacaAccountId: props.order.alpacaAccountId !== undefined ? {
            equals: props.order.alpacaAccountId
          } : undefined,
        assetId: props.order.assetId !== undefined ? {
            equals: props.order.assetId
          } : undefined,
        actionId: props.order.actionId !== undefined ? {
            equals: props.order.actionId
          } : undefined,
        stopLossId: props.order.stopLossId !== undefined ? {
            equals: props.order.stopLossId
          } : undefined,
        takeProfitId: props.order.takeProfitId !== undefined ? {
            equals: props.order.takeProfitId
          } : undefined,
        contractId: props.order.contractId !== undefined ? {
            equals: props.order.contractId
          } : undefined,
      },
      update: {
        id: props.order.id !== undefined ? {
            set: props.order.id
          } : undefined,
        clientOrderId: props.order.clientOrderId !== undefined ? {
            set: props.order.clientOrderId
          } : undefined,
        qty: props.order.qty !== undefined ? {
            set: props.order.qty
          } : undefined,
        notional: props.order.notional !== undefined ? {
            set: props.order.notional
          } : undefined,
        side: props.order.side !== undefined ? {
            set: props.order.side
          } : undefined,
        type: props.order.type !== undefined ? {
            set: props.order.type
          } : undefined,
        orderClass: props.order.orderClass !== undefined ? {
            set: props.order.orderClass
          } : undefined,
        timeInForce: props.order.timeInForce !== undefined ? {
            set: props.order.timeInForce
          } : undefined,
        limitPrice: props.order.limitPrice !== undefined ? {
            set: props.order.limitPrice
          } : undefined,
        stopPrice: props.order.stopPrice !== undefined ? {
            set: props.order.stopPrice
          } : undefined,
        trailPrice: props.order.trailPrice !== undefined ? {
            set: props.order.trailPrice
          } : undefined,
        trailPercent: props.order.trailPercent !== undefined ? {
            set: props.order.trailPercent
          } : undefined,
        extendedHours: props.order.extendedHours !== undefined ? {
            set: props.order.extendedHours
          } : undefined,
        status: props.order.status !== undefined ? {
            set: props.order.status
          } : undefined,
        submittedAt: props.order.submittedAt !== undefined ? {
            set: props.order.submittedAt
          } : undefined,
        filledAt: props.order.filledAt !== undefined ? {
            set: props.order.filledAt
          } : undefined,
        filledQty: props.order.filledQty !== undefined ? {
            set: props.order.filledQty
          } : undefined,
        filledAvgPrice: props.order.filledAvgPrice !== undefined ? {
            set: props.order.filledAvgPrice
          } : undefined,
        cancelRequestedAt: props.order.cancelRequestedAt !== undefined ? {
            set: props.order.cancelRequestedAt
          } : undefined,
        canceledAt: props.order.canceledAt !== undefined ? {
            set: props.order.canceledAt
          } : undefined,
        fee: props.order.fee !== undefined ? {
            set: props.order.fee
          } : undefined,
        strikePrice: props.order.strikePrice !== undefined ? {
            set: props.order.strikePrice
          } : undefined,
        expirationDate: props.order.expirationDate !== undefined ? {
            set: props.order.expirationDate
          } : undefined,
        expiredAt: props.order.expiredAt !== undefined ? {
            set: props.order.expiredAt
          } : undefined,
        failedAt: props.order.failedAt !== undefined ? {
            set: props.order.failedAt
          } : undefined,
        replacedAt: props.order.replacedAt !== undefined ? {
            set: props.order.replacedAt
          } : undefined,
        replacedBy: props.order.replacedBy !== undefined ? {
            set: props.order.replacedBy
          } : undefined,
        replaces: props.order.replaces !== undefined ? {
            set: props.order.replaces
          } : undefined,
        positionIntent: props.order.positionIntent !== undefined ? {
            set: props.order.positionIntent
          } : undefined,
        legs: props.order.legs !== undefined ? {
            set: props.order.legs
          } : undefined,
        hwm: props.order.hwm !== undefined ? {
            set: props.order.hwm
          } : undefined,
        subtag: props.order.subtag !== undefined ? {
            set: props.order.subtag
          } : undefined,
        source: props.order.source !== undefined ? {
            set: props.order.source
          } : undefined,
        expiresAt: props.order.expiresAt !== undefined ? {
            set: props.order.expiresAt
          } : undefined,
        optionType: props.order.optionType !== undefined ? {
            set: props.order.optionType
          } : undefined,
        stopLossId: props.order.stopLossId !== undefined ? {
            set: props.order.stopLossId
          } : undefined,
        takeProfitId: props.order.takeProfitId !== undefined ? {
            set: props.order.takeProfitId
          } : undefined,
    stopLoss: props.order.stopLoss ? 
    typeof props.order.stopLoss === 'object' && Object.keys(props.order.stopLoss).length === 1 && (Object.keys(props.order.stopLoss)[0] === 'id' || Object.keys(props.order.stopLoss)[0] === 'symbol')
? {
    connect: {
      id: props.order.stopLoss.id
    }
} : { upsert: {
        where: {
          id: props.order.stopLoss.id !== undefined ? {
              equals: props.order.stopLoss.id
            } : undefined,
          orderId: props.order.stopLoss.orderId !== undefined ? {
              equals: props.order.stopLoss.orderId
            } : undefined,
        },
        update: {
          id: props.order.stopLoss.id !== undefined ? {
              set: props.order.stopLoss.id
            } : undefined,
          stopPrice: props.order.stopLoss.stopPrice !== undefined ? {
              set: props.order.stopLoss.stopPrice
            } : undefined,
          limitPrice: props.order.stopLoss.limitPrice !== undefined ? {
              set: props.order.stopLoss.limitPrice
            } : undefined,
        },
        create: {
          stopPrice: props.order.stopLoss.stopPrice !== undefined ? props.order.stopLoss.stopPrice : undefined,
          limitPrice: props.order.stopLoss.limitPrice !== undefined ? props.order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: props.order.takeProfit ? 
    typeof props.order.takeProfit === 'object' && Object.keys(props.order.takeProfit).length === 1 && (Object.keys(props.order.takeProfit)[0] === 'id' || Object.keys(props.order.takeProfit)[0] === 'symbol')
? {
    connect: {
      id: props.order.takeProfit.id
    }
} : { upsert: {
        where: {
          id: props.order.takeProfit.id !== undefined ? {
              equals: props.order.takeProfit.id
            } : undefined,
          orderId: props.order.takeProfit.orderId !== undefined ? {
              equals: props.order.takeProfit.orderId
            } : undefined,
        },
        update: {
          id: props.order.takeProfit.id !== undefined ? {
              set: props.order.takeProfit.id
            } : undefined,
          limitPrice: props.order.takeProfit.limitPrice !== undefined ? {
              set: props.order.takeProfit.limitPrice
            } : undefined,
          stopPrice: props.order.takeProfit.stopPrice !== undefined ? {
              set: props.order.takeProfit.stopPrice
            } : undefined,
        },
        create: {
          limitPrice: props.order.takeProfit.limitPrice !== undefined ? props.order.takeProfit.limitPrice : undefined,
          stopPrice: props.order.takeProfit.stopPrice !== undefined ? props.order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.order.alpacaAccount ? 
    typeof props.order.alpacaAccount === 'object' && Object.keys(props.order.alpacaAccount).length === 1 && (Object.keys(props.order.alpacaAccount)[0] === 'id' || Object.keys(props.order.alpacaAccount)[0] === 'symbol')
? {
    connect: {
      id: props.order.alpacaAccount.id
    }
} : { upsert: {
        where: {
          id: props.order.alpacaAccount.id !== undefined ? {
              equals: props.order.alpacaAccount.id
            } : undefined,
          userId: props.order.alpacaAccount.userId !== undefined ? {
              equals: props.order.alpacaAccount.userId
            } : undefined,
        },
        update: {
          id: props.order.alpacaAccount.id !== undefined ? {
              set: props.order.alpacaAccount.id
            } : undefined,
          type: props.order.alpacaAccount.type !== undefined ? {
              set: props.order.alpacaAccount.type
            } : undefined,
          APIKey: props.order.alpacaAccount.APIKey !== undefined ? {
              set: props.order.alpacaAccount.APIKey
            } : undefined,
          APISecret: props.order.alpacaAccount.APISecret !== undefined ? {
              set: props.order.alpacaAccount.APISecret
            } : undefined,
          configuration: props.order.alpacaAccount.configuration !== undefined ? {
              set: props.order.alpacaAccount.configuration
            } : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? {
              set: props.order.alpacaAccount.marketOpen
            } : undefined,
          realTime: props.order.alpacaAccount.realTime !== undefined ? {
              set: props.order.alpacaAccount.realTime
            } : undefined,
          tradeAllocationPct: props.order.alpacaAccount.tradeAllocationPct !== undefined ? {
              set: props.order.alpacaAccount.tradeAllocationPct
            } : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? {
              set: props.order.alpacaAccount.minPercentageChange
            } : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? {
              set: props.order.alpacaAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: props.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
              set: props.order.alpacaAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: props.order.alpacaAccount.portfolioTrailPercent !== undefined ? {
              set: props.order.alpacaAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: props.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: props.order.alpacaAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: props.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: props.order.alpacaAccount.reducedPortfolioTrailPercent
            } : undefined,
      user: props.order.alpacaAccount.user ? 
      typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && (Object.keys(props.order.alpacaAccount.user)[0] === 'id' || Object.keys(props.order.alpacaAccount.user)[0] === 'symbol')
? {
      connect: {
        id: props.order.alpacaAccount.user.id
      }
} : { upsert: {
          where: {
            id: props.order.alpacaAccount.user.id !== undefined ? {
                equals: props.order.alpacaAccount.user.id
              } : undefined,
            name: props.order.alpacaAccount.user.name !== undefined ? {
                equals: props.order.alpacaAccount.user.name
              } : undefined,
            email: props.order.alpacaAccount.user.email !== undefined ? {
                equals: props.order.alpacaAccount.user.email
              } : undefined,
            customerId: props.order.alpacaAccount.user.customerId !== undefined ? {
                equals: props.order.alpacaAccount.user.customerId
              } : undefined,
          },
          update: {
            id: props.order.alpacaAccount.user.id !== undefined ? {
                set: props.order.alpacaAccount.user.id
              } : undefined,
            name: props.order.alpacaAccount.user.name !== undefined ? {
                set: props.order.alpacaAccount.user.name
              } : undefined,
            email: props.order.alpacaAccount.user.email !== undefined ? {
                set: props.order.alpacaAccount.user.email
              } : undefined,
            emailVerified: props.order.alpacaAccount.user.emailVerified !== undefined ? {
                set: props.order.alpacaAccount.user.emailVerified
              } : undefined,
            image: props.order.alpacaAccount.user.image !== undefined ? {
                set: props.order.alpacaAccount.user.image
              } : undefined,
            role: props.order.alpacaAccount.user.role !== undefined ? {
                set: props.order.alpacaAccount.user.role
              } : undefined,
            bio: props.order.alpacaAccount.user.bio !== undefined ? {
                set: props.order.alpacaAccount.user.bio
              } : undefined,
            jobTitle: props.order.alpacaAccount.user.jobTitle !== undefined ? {
                set: props.order.alpacaAccount.user.jobTitle
              } : undefined,
            currentAccount: props.order.alpacaAccount.user.currentAccount !== undefined ? {
                set: props.order.alpacaAccount.user.currentAccount
              } : undefined,
            plan: props.order.alpacaAccount.user.plan !== undefined ? {
                set: props.order.alpacaAccount.user.plan
              } : undefined,
            openaiAPIKey: props.order.alpacaAccount.user.openaiAPIKey !== undefined ? {
                set: props.order.alpacaAccount.user.openaiAPIKey
              } : undefined,
            openaiModel: props.order.alpacaAccount.user.openaiModel !== undefined ? {
                set: props.order.alpacaAccount.user.openaiModel
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
      positions: props.order.alpacaAccount.positions ? 
      Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 && props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.alpacaAccount.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
      Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 && props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.alpacaAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.alpacaAccount.alerts.map((item: any) => ({
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
          type: props.order.alpacaAccount.type !== undefined ? props.order.alpacaAccount.type : undefined,
          APIKey: props.order.alpacaAccount.APIKey !== undefined ? props.order.alpacaAccount.APIKey : undefined,
          APISecret: props.order.alpacaAccount.APISecret !== undefined ? props.order.alpacaAccount.APISecret : undefined,
          configuration: props.order.alpacaAccount.configuration !== undefined ? props.order.alpacaAccount.configuration : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? props.order.alpacaAccount.marketOpen : undefined,
          realTime: props.order.alpacaAccount.realTime !== undefined ? props.order.alpacaAccount.realTime : undefined,
          tradeAllocationPct: props.order.alpacaAccount.tradeAllocationPct !== undefined ? props.order.alpacaAccount.tradeAllocationPct : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.order.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
      user: props.order.alpacaAccount.user ? 
        typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && Object.keys(props.order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.order.alpacaAccount.user.id
            }
          }
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
      positions: props.order.alpacaAccount.positions ? 
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
        Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 &&  props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.alerts.map((item: any) => ({
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
    typeof props.order.asset === 'object' && Object.keys(props.order.asset).length === 1 && (Object.keys(props.order.asset)[0] === 'id' || Object.keys(props.order.asset)[0] === 'symbol')
? {
    connect: {
      id: props.order.asset.id
    }
} : { upsert: {
        where: {
          id: props.order.asset.id !== undefined ? {
              equals: props.order.asset.id
            } : undefined,
          symbol: props.order.asset.symbol !== undefined ? {
              equals: props.order.asset.symbol
            } : undefined,
          name: props.order.asset.name !== undefined ? {
              equals: props.order.asset.name
            } : undefined,
        },
        update: {
          id: props.order.asset.id !== undefined ? {
              set: props.order.asset.id
            } : undefined,
          symbol: props.order.asset.symbol !== undefined ? {
              set: props.order.asset.symbol
            } : undefined,
          name: props.order.asset.name !== undefined ? {
              set: props.order.asset.name
            } : undefined,
          type: props.order.asset.type !== undefined ? {
              set: props.order.asset.type
            } : undefined,
          logoUrl: props.order.asset.logoUrl !== undefined ? {
              set: props.order.asset.logoUrl
            } : undefined,
          description: props.order.asset.description !== undefined ? {
              set: props.order.asset.description
            } : undefined,
          cik: props.order.asset.cik !== undefined ? {
              set: props.order.asset.cik
            } : undefined,
          exchange: props.order.asset.exchange !== undefined ? {
              set: props.order.asset.exchange
            } : undefined,
          currency: props.order.asset.currency !== undefined ? {
              set: props.order.asset.currency
            } : undefined,
          country: props.order.asset.country !== undefined ? {
              set: props.order.asset.country
            } : undefined,
          sector: props.order.asset.sector !== undefined ? {
              set: props.order.asset.sector
            } : undefined,
          industry: props.order.asset.industry !== undefined ? {
              set: props.order.asset.industry
            } : undefined,
          address: props.order.asset.address !== undefined ? {
              set: props.order.asset.address
            } : undefined,
          officialSite: props.order.asset.officialSite !== undefined ? {
              set: props.order.asset.officialSite
            } : undefined,
          fiscalYearEnd: props.order.asset.fiscalYearEnd !== undefined ? {
              set: props.order.asset.fiscalYearEnd
            } : undefined,
          latestQuarter: props.order.asset.latestQuarter !== undefined ? {
              set: props.order.asset.latestQuarter
            } : undefined,
          marketCapitalization: props.order.asset.marketCapitalization !== undefined ? {
              set: props.order.asset.marketCapitalization
            } : undefined,
          ebitda: props.order.asset.ebitda !== undefined ? {
              set: props.order.asset.ebitda
            } : undefined,
          peRatio: props.order.asset.peRatio !== undefined ? {
              set: props.order.asset.peRatio
            } : undefined,
          pegRatio: props.order.asset.pegRatio !== undefined ? {
              set: props.order.asset.pegRatio
            } : undefined,
          bookValue: props.order.asset.bookValue !== undefined ? {
              set: props.order.asset.bookValue
            } : undefined,
          dividendPerShare: props.order.asset.dividendPerShare !== undefined ? {
              set: props.order.asset.dividendPerShare
            } : undefined,
          dividendYield: props.order.asset.dividendYield !== undefined ? {
              set: props.order.asset.dividendYield
            } : undefined,
          eps: props.order.asset.eps !== undefined ? {
              set: props.order.asset.eps
            } : undefined,
          revenuePerShareTTM: props.order.asset.revenuePerShareTTM !== undefined ? {
              set: props.order.asset.revenuePerShareTTM
            } : undefined,
          profitMargin: props.order.asset.profitMargin !== undefined ? {
              set: props.order.asset.profitMargin
            } : undefined,
          operatingMarginTTM: props.order.asset.operatingMarginTTM !== undefined ? {
              set: props.order.asset.operatingMarginTTM
            } : undefined,
          returnOnAssetsTTM: props.order.asset.returnOnAssetsTTM !== undefined ? {
              set: props.order.asset.returnOnAssetsTTM
            } : undefined,
          returnOnEquityTTM: props.order.asset.returnOnEquityTTM !== undefined ? {
              set: props.order.asset.returnOnEquityTTM
            } : undefined,
          revenueTTM: props.order.asset.revenueTTM !== undefined ? {
              set: props.order.asset.revenueTTM
            } : undefined,
          grossProfitTTM: props.order.asset.grossProfitTTM !== undefined ? {
              set: props.order.asset.grossProfitTTM
            } : undefined,
          dilutedEPSTTM: props.order.asset.dilutedEPSTTM !== undefined ? {
              set: props.order.asset.dilutedEPSTTM
            } : undefined,
          quarterlyEarningsGrowthYOY: props.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: props.order.asset.quarterlyEarningsGrowthYOY
            } : undefined,
          quarterlyRevenueGrowthYOY: props.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: props.order.asset.quarterlyRevenueGrowthYOY
            } : undefined,
          analystTargetPrice: props.order.asset.analystTargetPrice !== undefined ? {
              set: props.order.asset.analystTargetPrice
            } : undefined,
          analystRatingStrongBuy: props.order.asset.analystRatingStrongBuy !== undefined ? {
              set: props.order.asset.analystRatingStrongBuy
            } : undefined,
          analystRatingBuy: props.order.asset.analystRatingBuy !== undefined ? {
              set: props.order.asset.analystRatingBuy
            } : undefined,
          analystRatingHold: props.order.asset.analystRatingHold !== undefined ? {
              set: props.order.asset.analystRatingHold
            } : undefined,
          analystRatingSell: props.order.asset.analystRatingSell !== undefined ? {
              set: props.order.asset.analystRatingSell
            } : undefined,
          analystRatingStrongSell: props.order.asset.analystRatingStrongSell !== undefined ? {
              set: props.order.asset.analystRatingStrongSell
            } : undefined,
          trailingPE: props.order.asset.trailingPE !== undefined ? {
              set: props.order.asset.trailingPE
            } : undefined,
          forwardPE: props.order.asset.forwardPE !== undefined ? {
              set: props.order.asset.forwardPE
            } : undefined,
          priceToSalesRatioTTM: props.order.asset.priceToSalesRatioTTM !== undefined ? {
              set: props.order.asset.priceToSalesRatioTTM
            } : undefined,
          priceToBookRatio: props.order.asset.priceToBookRatio !== undefined ? {
              set: props.order.asset.priceToBookRatio
            } : undefined,
          evToRevenue: props.order.asset.evToRevenue !== undefined ? {
              set: props.order.asset.evToRevenue
            } : undefined,
          evToEbitda: props.order.asset.evToEbitda !== undefined ? {
              set: props.order.asset.evToEbitda
            } : undefined,
          beta: props.order.asset.beta !== undefined ? {
              set: props.order.asset.beta
            } : undefined,
          week52High: props.order.asset.week52High !== undefined ? {
              set: props.order.asset.week52High
            } : undefined,
          week52Low: props.order.asset.week52Low !== undefined ? {
              set: props.order.asset.week52Low
            } : undefined,
          day50MovingAverage: props.order.asset.day50MovingAverage !== undefined ? {
              set: props.order.asset.day50MovingAverage
            } : undefined,
          day200MovingAverage: props.order.asset.day200MovingAverage !== undefined ? {
              set: props.order.asset.day200MovingAverage
            } : undefined,
          sharesOutstanding: props.order.asset.sharesOutstanding !== undefined ? {
              set: props.order.asset.sharesOutstanding
            } : undefined,
          dividendDate: props.order.asset.dividendDate !== undefined ? {
              set: props.order.asset.dividendDate
            } : undefined,
          exDividendDate: props.order.asset.exDividendDate !== undefined ? {
              set: props.order.asset.exDividendDate
            } : undefined,
          askPrice: props.order.asset.askPrice !== undefined ? {
              set: props.order.asset.askPrice
            } : undefined,
          bidPrice: props.order.asset.bidPrice !== undefined ? {
              set: props.order.asset.bidPrice
            } : undefined,
      positions: props.order.asset.positions ? 
      Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 && props.order.asset.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.asset.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
      Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 && props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.asset.newsMentions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.asset.newsMentions.map((item: any) => ({
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
      contracts: props.order.asset.contracts ? 
      Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 && props.order.asset.contracts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.asset.contracts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.asset.contracts.map((item: any) => ({
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
      positions: props.order.asset.positions ? 
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
        Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 &&  props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 &&  props.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.contracts.map((item: any) => ({
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
    typeof props.order.contract === 'object' && Object.keys(props.order.contract).length === 1 && (Object.keys(props.order.contract)[0] === 'id' || Object.keys(props.order.contract)[0] === 'symbol')
? {
    connect: {
      id: props.order.contract.id
    }
} : { upsert: {
        where: {
          id: props.order.contract.id !== undefined ? {
              equals: props.order.contract.id
            } : undefined,
          alpacaId: props.order.contract.alpacaId !== undefined ? {
              equals: props.order.contract.alpacaId
            } : undefined,
          symbol: props.order.contract.symbol !== undefined ? {
              equals: props.order.contract.symbol
            } : undefined,
          name: props.order.contract.name !== undefined ? {
              equals: props.order.contract.name
            } : undefined,
          underlyingAssetId: props.order.contract.underlyingAssetId !== undefined ? {
              equals: props.order.contract.underlyingAssetId
            } : undefined,
          assetId: props.order.contract.assetId !== undefined ? {
              equals: props.order.contract.assetId
            } : undefined,
          orderId: props.order.contract.orderId !== undefined ? {
              equals: props.order.contract.orderId
            } : undefined,
        },
        update: {
          id: props.order.contract.id !== undefined ? {
              set: props.order.contract.id
            } : undefined,
          alpacaId: props.order.contract.alpacaId !== undefined ? {
              set: props.order.contract.alpacaId
            } : undefined,
          symbol: props.order.contract.symbol !== undefined ? {
              set: props.order.contract.symbol
            } : undefined,
          name: props.order.contract.name !== undefined ? {
              set: props.order.contract.name
            } : undefined,
          status: props.order.contract.status !== undefined ? {
              set: props.order.contract.status
            } : undefined,
          tradable: props.order.contract.tradable !== undefined ? {
              set: props.order.contract.tradable
            } : undefined,
          expirationDate: props.order.contract.expirationDate !== undefined ? {
              set: props.order.contract.expirationDate
            } : undefined,
          rootSymbol: props.order.contract.rootSymbol !== undefined ? {
              set: props.order.contract.rootSymbol
            } : undefined,
          underlyingSymbol: props.order.contract.underlyingSymbol !== undefined ? {
              set: props.order.contract.underlyingSymbol
            } : undefined,
          underlyingAssetId: props.order.contract.underlyingAssetId !== undefined ? {
              set: props.order.contract.underlyingAssetId
            } : undefined,
          type: props.order.contract.type !== undefined ? {
              set: props.order.contract.type
            } : undefined,
          style: props.order.contract.style !== undefined ? {
              set: props.order.contract.style
            } : undefined,
          strikePrice: props.order.contract.strikePrice !== undefined ? {
              set: props.order.contract.strikePrice
            } : undefined,
          multiplier: props.order.contract.multiplier !== undefined ? {
              set: props.order.contract.multiplier
            } : undefined,
          size: props.order.contract.size !== undefined ? {
              set: props.order.contract.size
            } : undefined,
          openInterest: props.order.contract.openInterest !== undefined ? {
              set: props.order.contract.openInterest
            } : undefined,
          openInterestDate: props.order.contract.openInterestDate !== undefined ? {
              set: props.order.contract.openInterestDate
            } : undefined,
          closePrice: props.order.contract.closePrice !== undefined ? {
              set: props.order.contract.closePrice
            } : undefined,
          closePriceDate: props.order.contract.closePriceDate !== undefined ? {
              set: props.order.contract.closePriceDate
            } : undefined,
          ppind: props.order.contract.ppind !== undefined ? {
              set: props.order.contract.ppind
            } : undefined,
          orderId: props.order.contract.orderId !== undefined ? {
              set: props.order.contract.orderId
            } : undefined,
      deliverables: props.order.contract.deliverables ? 
      Array.isArray(props.order.contract.deliverables) && props.order.contract.deliverables.length > 0 && props.order.contract.deliverables.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.contract.deliverables.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.contract.deliverables.map((item: any) => ({
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
      asset: props.order.contract.asset ? 
      typeof props.order.contract.asset === 'object' && Object.keys(props.order.contract.asset).length === 1 && (Object.keys(props.order.contract.asset)[0] === 'id' || Object.keys(props.order.contract.asset)[0] === 'symbol')
? {
      connect: {
        id: props.order.contract.asset.id
      }
} : { upsert: {
          where: {
            id: props.order.contract.asset.id !== undefined ? {
                equals: props.order.contract.asset.id
              } : undefined,
            symbol: props.order.contract.asset.symbol !== undefined ? {
                equals: props.order.contract.asset.symbol
              } : undefined,
            name: props.order.contract.asset.name !== undefined ? {
                equals: props.order.contract.asset.name
              } : undefined,
          },
          update: {
            id: props.order.contract.asset.id !== undefined ? {
                set: props.order.contract.asset.id
              } : undefined,
            symbol: props.order.contract.asset.symbol !== undefined ? {
                set: props.order.contract.asset.symbol
              } : undefined,
            name: props.order.contract.asset.name !== undefined ? {
                set: props.order.contract.asset.name
              } : undefined,
            type: props.order.contract.asset.type !== undefined ? {
                set: props.order.contract.asset.type
              } : undefined,
            logoUrl: props.order.contract.asset.logoUrl !== undefined ? {
                set: props.order.contract.asset.logoUrl
              } : undefined,
            description: props.order.contract.asset.description !== undefined ? {
                set: props.order.contract.asset.description
              } : undefined,
            cik: props.order.contract.asset.cik !== undefined ? {
                set: props.order.contract.asset.cik
              } : undefined,
            exchange: props.order.contract.asset.exchange !== undefined ? {
                set: props.order.contract.asset.exchange
              } : undefined,
            currency: props.order.contract.asset.currency !== undefined ? {
                set: props.order.contract.asset.currency
              } : undefined,
            country: props.order.contract.asset.country !== undefined ? {
                set: props.order.contract.asset.country
              } : undefined,
            sector: props.order.contract.asset.sector !== undefined ? {
                set: props.order.contract.asset.sector
              } : undefined,
            industry: props.order.contract.asset.industry !== undefined ? {
                set: props.order.contract.asset.industry
              } : undefined,
            address: props.order.contract.asset.address !== undefined ? {
                set: props.order.contract.asset.address
              } : undefined,
            officialSite: props.order.contract.asset.officialSite !== undefined ? {
                set: props.order.contract.asset.officialSite
              } : undefined,
            fiscalYearEnd: props.order.contract.asset.fiscalYearEnd !== undefined ? {
                set: props.order.contract.asset.fiscalYearEnd
              } : undefined,
            latestQuarter: props.order.contract.asset.latestQuarter !== undefined ? {
                set: props.order.contract.asset.latestQuarter
              } : undefined,
            marketCapitalization: props.order.contract.asset.marketCapitalization !== undefined ? {
                set: props.order.contract.asset.marketCapitalization
              } : undefined,
            ebitda: props.order.contract.asset.ebitda !== undefined ? {
                set: props.order.contract.asset.ebitda
              } : undefined,
            peRatio: props.order.contract.asset.peRatio !== undefined ? {
                set: props.order.contract.asset.peRatio
              } : undefined,
            pegRatio: props.order.contract.asset.pegRatio !== undefined ? {
                set: props.order.contract.asset.pegRatio
              } : undefined,
            bookValue: props.order.contract.asset.bookValue !== undefined ? {
                set: props.order.contract.asset.bookValue
              } : undefined,
            dividendPerShare: props.order.contract.asset.dividendPerShare !== undefined ? {
                set: props.order.contract.asset.dividendPerShare
              } : undefined,
            dividendYield: props.order.contract.asset.dividendYield !== undefined ? {
                set: props.order.contract.asset.dividendYield
              } : undefined,
            eps: props.order.contract.asset.eps !== undefined ? {
                set: props.order.contract.asset.eps
              } : undefined,
            revenuePerShareTTM: props.order.contract.asset.revenuePerShareTTM !== undefined ? {
                set: props.order.contract.asset.revenuePerShareTTM
              } : undefined,
            profitMargin: props.order.contract.asset.profitMargin !== undefined ? {
                set: props.order.contract.asset.profitMargin
              } : undefined,
            operatingMarginTTM: props.order.contract.asset.operatingMarginTTM !== undefined ? {
                set: props.order.contract.asset.operatingMarginTTM
              } : undefined,
            returnOnAssetsTTM: props.order.contract.asset.returnOnAssetsTTM !== undefined ? {
                set: props.order.contract.asset.returnOnAssetsTTM
              } : undefined,
            returnOnEquityTTM: props.order.contract.asset.returnOnEquityTTM !== undefined ? {
                set: props.order.contract.asset.returnOnEquityTTM
              } : undefined,
            revenueTTM: props.order.contract.asset.revenueTTM !== undefined ? {
                set: props.order.contract.asset.revenueTTM
              } : undefined,
            grossProfitTTM: props.order.contract.asset.grossProfitTTM !== undefined ? {
                set: props.order.contract.asset.grossProfitTTM
              } : undefined,
            dilutedEPSTTM: props.order.contract.asset.dilutedEPSTTM !== undefined ? {
                set: props.order.contract.asset.dilutedEPSTTM
              } : undefined,
            quarterlyEarningsGrowthYOY: props.order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: props.order.contract.asset.quarterlyEarningsGrowthYOY
              } : undefined,
            quarterlyRevenueGrowthYOY: props.order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: props.order.contract.asset.quarterlyRevenueGrowthYOY
              } : undefined,
            analystTargetPrice: props.order.contract.asset.analystTargetPrice !== undefined ? {
                set: props.order.contract.asset.analystTargetPrice
              } : undefined,
            analystRatingStrongBuy: props.order.contract.asset.analystRatingStrongBuy !== undefined ? {
                set: props.order.contract.asset.analystRatingStrongBuy
              } : undefined,
            analystRatingBuy: props.order.contract.asset.analystRatingBuy !== undefined ? {
                set: props.order.contract.asset.analystRatingBuy
              } : undefined,
            analystRatingHold: props.order.contract.asset.analystRatingHold !== undefined ? {
                set: props.order.contract.asset.analystRatingHold
              } : undefined,
            analystRatingSell: props.order.contract.asset.analystRatingSell !== undefined ? {
                set: props.order.contract.asset.analystRatingSell
              } : undefined,
            analystRatingStrongSell: props.order.contract.asset.analystRatingStrongSell !== undefined ? {
                set: props.order.contract.asset.analystRatingStrongSell
              } : undefined,
            trailingPE: props.order.contract.asset.trailingPE !== undefined ? {
                set: props.order.contract.asset.trailingPE
              } : undefined,
            forwardPE: props.order.contract.asset.forwardPE !== undefined ? {
                set: props.order.contract.asset.forwardPE
              } : undefined,
            priceToSalesRatioTTM: props.order.contract.asset.priceToSalesRatioTTM !== undefined ? {
                set: props.order.contract.asset.priceToSalesRatioTTM
              } : undefined,
            priceToBookRatio: props.order.contract.asset.priceToBookRatio !== undefined ? {
                set: props.order.contract.asset.priceToBookRatio
              } : undefined,
            evToRevenue: props.order.contract.asset.evToRevenue !== undefined ? {
                set: props.order.contract.asset.evToRevenue
              } : undefined,
            evToEbitda: props.order.contract.asset.evToEbitda !== undefined ? {
                set: props.order.contract.asset.evToEbitda
              } : undefined,
            beta: props.order.contract.asset.beta !== undefined ? {
                set: props.order.contract.asset.beta
              } : undefined,
            week52High: props.order.contract.asset.week52High !== undefined ? {
                set: props.order.contract.asset.week52High
              } : undefined,
            week52Low: props.order.contract.asset.week52Low !== undefined ? {
                set: props.order.contract.asset.week52Low
              } : undefined,
            day50MovingAverage: props.order.contract.asset.day50MovingAverage !== undefined ? {
                set: props.order.contract.asset.day50MovingAverage
              } : undefined,
            day200MovingAverage: props.order.contract.asset.day200MovingAverage !== undefined ? {
                set: props.order.contract.asset.day200MovingAverage
              } : undefined,
            sharesOutstanding: props.order.contract.asset.sharesOutstanding !== undefined ? {
                set: props.order.contract.asset.sharesOutstanding
              } : undefined,
            dividendDate: props.order.contract.asset.dividendDate !== undefined ? {
                set: props.order.contract.asset.dividendDate
              } : undefined,
            exDividendDate: props.order.contract.asset.exDividendDate !== undefined ? {
                set: props.order.contract.asset.exDividendDate
              } : undefined,
            askPrice: props.order.contract.asset.askPrice !== undefined ? {
                set: props.order.contract.asset.askPrice
              } : undefined,
            bidPrice: props.order.contract.asset.bidPrice !== undefined ? {
                set: props.order.contract.asset.bidPrice
              } : undefined,
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
        Array.isArray(props.order.contract.deliverables) && props.order.contract.deliverables.length > 0 &&  props.order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
        expiredAt: props.order.expiredAt !== undefined ? props.order.expiredAt : undefined,
        failedAt: props.order.failedAt !== undefined ? props.order.failedAt : undefined,
        replacedAt: props.order.replacedAt !== undefined ? props.order.replacedAt : undefined,
        replacedBy: props.order.replacedBy !== undefined ? props.order.replacedBy : undefined,
        replaces: props.order.replaces !== undefined ? props.order.replaces : undefined,
        positionIntent: props.order.positionIntent !== undefined ? props.order.positionIntent : undefined,
        legs: props.order.legs !== undefined ? props.order.legs : undefined,
        hwm: props.order.hwm !== undefined ? props.order.hwm : undefined,
        subtag: props.order.subtag !== undefined ? props.order.subtag : undefined,
        source: props.order.source !== undefined ? props.order.source : undefined,
        expiresAt: props.order.expiresAt !== undefined ? props.order.expiresAt : undefined,
        optionType: props.order.optionType !== undefined ? props.order.optionType : undefined,
        stopLossId: props.order.stopLossId !== undefined ? props.order.stopLossId : undefined,
        takeProfitId: props.order.takeProfitId !== undefined ? props.order.takeProfitId : undefined,
    stopLoss: props.order.stopLoss ? 
      typeof props.order.stopLoss === 'object' && Object.keys(props.order.stopLoss).length === 1 && Object.keys(props.order.stopLoss)[0] === 'id'
    ? { connect: {
          id: props.order.stopLoss.id
          }
        }
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
          }
        }
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
          }
        }
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
          configuration: props.order.alpacaAccount.configuration !== undefined ? props.order.alpacaAccount.configuration : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? props.order.alpacaAccount.marketOpen : undefined,
          realTime: props.order.alpacaAccount.realTime !== undefined ? props.order.alpacaAccount.realTime : undefined,
          tradeAllocationPct: props.order.alpacaAccount.tradeAllocationPct !== undefined ? props.order.alpacaAccount.tradeAllocationPct : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.order.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
      user: props.order.alpacaAccount.user ? 
        typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && Object.keys(props.order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.order.alpacaAccount.user.id
            }
          }
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
      positions: props.order.alpacaAccount.positions ? 
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
        Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 &&  props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.alerts.map((item: any) => ({
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
          }
        }
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
      positions: props.order.asset.positions ? 
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
        Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 &&  props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 &&  props.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.contracts.map((item: any) => ({
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
          }
        }
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
        Array.isArray(props.order.contract.deliverables) && props.order.contract.deliverables.length > 0 &&  props.order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
  async upsert(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  primary: props.primary !== undefined ? props.primary : undefined,
  note: props.note !== undefined ? props.note : undefined,
  status: props.status !== undefined ? props.status : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  trade: props.trade ? 
    typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && Object.keys(props.trade)[0] === 'id'
    ? { connect: {
        id: props.trade.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.trade.id !== undefined ? props.trade.id : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId 
           } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol 
           } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        assetId: props.trade.assetId !== undefined ? props.trade.assetId : undefined,
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
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
      },
    }
  } : undefined,
  order: props.order ? 
    typeof props.order === 'object' && Object.keys(props.order).length === 1 && Object.keys(props.order)[0] === 'id'
    ? { connect: {
        id: props.order.id
        }
      }
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
        expiredAt: props.order.expiredAt !== undefined ? props.order.expiredAt : undefined,
        failedAt: props.order.failedAt !== undefined ? props.order.failedAt : undefined,
        replacedAt: props.order.replacedAt !== undefined ? props.order.replacedAt : undefined,
        replacedBy: props.order.replacedBy !== undefined ? props.order.replacedBy : undefined,
        replaces: props.order.replaces !== undefined ? props.order.replaces : undefined,
        positionIntent: props.order.positionIntent !== undefined ? props.order.positionIntent : undefined,
        legs: props.order.legs !== undefined ? props.order.legs : undefined,
        hwm: props.order.hwm !== undefined ? props.order.hwm : undefined,
        subtag: props.order.subtag !== undefined ? props.order.subtag : undefined,
        source: props.order.source !== undefined ? props.order.source : undefined,
        expiresAt: props.order.expiresAt !== undefined ? props.order.expiresAt : undefined,
        optionType: props.order.optionType !== undefined ? props.order.optionType : undefined,
        stopLossId: props.order.stopLossId !== undefined ? props.order.stopLossId : undefined,
        takeProfitId: props.order.takeProfitId !== undefined ? props.order.takeProfitId : undefined,
    stopLoss: props.order.stopLoss ? 
      typeof props.order.stopLoss === 'object' && Object.keys(props.order.stopLoss).length === 1 && Object.keys(props.order.stopLoss)[0] === 'id'
    ? { connect: {
          id: props.order.stopLoss.id
          }
        }
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
          }
        }
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
          }
        }
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
          configuration: props.order.alpacaAccount.configuration !== undefined ? props.order.alpacaAccount.configuration : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? props.order.alpacaAccount.marketOpen : undefined,
          realTime: props.order.alpacaAccount.realTime !== undefined ? props.order.alpacaAccount.realTime : undefined,
          tradeAllocationPct: props.order.alpacaAccount.tradeAllocationPct !== undefined ? props.order.alpacaAccount.tradeAllocationPct : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.order.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
      user: props.order.alpacaAccount.user ? 
        typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && Object.keys(props.order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.order.alpacaAccount.user.id
            }
          }
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
      positions: props.order.alpacaAccount.positions ? 
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
        Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 &&  props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.alerts.map((item: any) => ({
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
          }
        }
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
      positions: props.order.asset.positions ? 
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
        Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 &&  props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 &&  props.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.contracts.map((item: any) => ({
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
          }
        }
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
        Array.isArray(props.order.contract.deliverables) && props.order.contract.deliverables.length > 0 &&  props.order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
  primary: props.primary !== undefined ? {
            set: props.primary 
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
  trade: props.trade ? 
  typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && (Object.keys(props.trade)[0] === 'id' || Object.keys(props.trade)[0] === 'symbol')
? {
  connect: {
    id: props.trade.id
  }
} : { upsert: {
      where: {
        id: props.trade.id !== undefined ? {
            equals: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId
          } : undefined,
        assetId: props.trade.assetId !== undefined ? {
            equals: props.trade.assetId
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol
          } : undefined,
      },
      update: {
        id: props.trade.id !== undefined ? {
            set: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            set: props.trade.alpacaAccountId
          } : undefined,
        assetId: props.trade.assetId !== undefined ? {
            set: props.trade.assetId
          } : undefined,
        qty: props.trade.qty !== undefined ? {
            set: props.trade.qty
          } : undefined,
        price: props.trade.price !== undefined ? {
            set: props.trade.price
          } : undefined,
        total: props.trade.total !== undefined ? {
            set: props.trade.total
          } : undefined,
        optionType: props.trade.optionType !== undefined ? {
            set: props.trade.optionType
          } : undefined,
        signal: props.trade.signal !== undefined ? {
            set: props.trade.signal
          } : undefined,
        strategy: props.trade.strategy !== undefined ? {
            set: props.trade.strategy
          } : undefined,
        analysis: props.trade.analysis !== undefined ? {
            set: props.trade.analysis
          } : undefined,
        summary: props.trade.summary !== undefined ? {
            set: props.trade.summary
          } : undefined,
        confidence: props.trade.confidence !== undefined ? {
            set: props.trade.confidence
          } : undefined,
        timestamp: props.trade.timestamp !== undefined ? {
            set: props.trade.timestamp
          } : undefined,
        status: props.trade.status !== undefined ? {
            set: props.trade.status
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            set: props.trade.symbol
          } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        assetId: props.trade.assetId !== undefined ? props.trade.assetId : undefined,
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
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
      },
    }
  } : undefined,
  order: props.order ? 
  typeof props.order === 'object' && Object.keys(props.order).length === 1 && (Object.keys(props.order)[0] === 'id' || Object.keys(props.order)[0] === 'symbol')
? {
  connect: {
    id: props.order.id
  }
} : { upsert: {
      where: {
        id: props.order.id !== undefined ? {
            equals: props.order.id
          } : undefined,
        clientOrderId: props.order.clientOrderId !== undefined ? {
            equals: props.order.clientOrderId
          } : undefined,
        alpacaAccountId: props.order.alpacaAccountId !== undefined ? {
            equals: props.order.alpacaAccountId
          } : undefined,
        assetId: props.order.assetId !== undefined ? {
            equals: props.order.assetId
          } : undefined,
        actionId: props.order.actionId !== undefined ? {
            equals: props.order.actionId
          } : undefined,
        stopLossId: props.order.stopLossId !== undefined ? {
            equals: props.order.stopLossId
          } : undefined,
        takeProfitId: props.order.takeProfitId !== undefined ? {
            equals: props.order.takeProfitId
          } : undefined,
        contractId: props.order.contractId !== undefined ? {
            equals: props.order.contractId
          } : undefined,
      },
      update: {
        id: props.order.id !== undefined ? {
            set: props.order.id
          } : undefined,
        clientOrderId: props.order.clientOrderId !== undefined ? {
            set: props.order.clientOrderId
          } : undefined,
        qty: props.order.qty !== undefined ? {
            set: props.order.qty
          } : undefined,
        notional: props.order.notional !== undefined ? {
            set: props.order.notional
          } : undefined,
        side: props.order.side !== undefined ? {
            set: props.order.side
          } : undefined,
        type: props.order.type !== undefined ? {
            set: props.order.type
          } : undefined,
        orderClass: props.order.orderClass !== undefined ? {
            set: props.order.orderClass
          } : undefined,
        timeInForce: props.order.timeInForce !== undefined ? {
            set: props.order.timeInForce
          } : undefined,
        limitPrice: props.order.limitPrice !== undefined ? {
            set: props.order.limitPrice
          } : undefined,
        stopPrice: props.order.stopPrice !== undefined ? {
            set: props.order.stopPrice
          } : undefined,
        trailPrice: props.order.trailPrice !== undefined ? {
            set: props.order.trailPrice
          } : undefined,
        trailPercent: props.order.trailPercent !== undefined ? {
            set: props.order.trailPercent
          } : undefined,
        extendedHours: props.order.extendedHours !== undefined ? {
            set: props.order.extendedHours
          } : undefined,
        status: props.order.status !== undefined ? {
            set: props.order.status
          } : undefined,
        submittedAt: props.order.submittedAt !== undefined ? {
            set: props.order.submittedAt
          } : undefined,
        filledAt: props.order.filledAt !== undefined ? {
            set: props.order.filledAt
          } : undefined,
        filledQty: props.order.filledQty !== undefined ? {
            set: props.order.filledQty
          } : undefined,
        filledAvgPrice: props.order.filledAvgPrice !== undefined ? {
            set: props.order.filledAvgPrice
          } : undefined,
        cancelRequestedAt: props.order.cancelRequestedAt !== undefined ? {
            set: props.order.cancelRequestedAt
          } : undefined,
        canceledAt: props.order.canceledAt !== undefined ? {
            set: props.order.canceledAt
          } : undefined,
        fee: props.order.fee !== undefined ? {
            set: props.order.fee
          } : undefined,
        strikePrice: props.order.strikePrice !== undefined ? {
            set: props.order.strikePrice
          } : undefined,
        expirationDate: props.order.expirationDate !== undefined ? {
            set: props.order.expirationDate
          } : undefined,
        expiredAt: props.order.expiredAt !== undefined ? {
            set: props.order.expiredAt
          } : undefined,
        failedAt: props.order.failedAt !== undefined ? {
            set: props.order.failedAt
          } : undefined,
        replacedAt: props.order.replacedAt !== undefined ? {
            set: props.order.replacedAt
          } : undefined,
        replacedBy: props.order.replacedBy !== undefined ? {
            set: props.order.replacedBy
          } : undefined,
        replaces: props.order.replaces !== undefined ? {
            set: props.order.replaces
          } : undefined,
        positionIntent: props.order.positionIntent !== undefined ? {
            set: props.order.positionIntent
          } : undefined,
        legs: props.order.legs !== undefined ? {
            set: props.order.legs
          } : undefined,
        hwm: props.order.hwm !== undefined ? {
            set: props.order.hwm
          } : undefined,
        subtag: props.order.subtag !== undefined ? {
            set: props.order.subtag
          } : undefined,
        source: props.order.source !== undefined ? {
            set: props.order.source
          } : undefined,
        expiresAt: props.order.expiresAt !== undefined ? {
            set: props.order.expiresAt
          } : undefined,
        optionType: props.order.optionType !== undefined ? {
            set: props.order.optionType
          } : undefined,
        stopLossId: props.order.stopLossId !== undefined ? {
            set: props.order.stopLossId
          } : undefined,
        takeProfitId: props.order.takeProfitId !== undefined ? {
            set: props.order.takeProfitId
          } : undefined,
    stopLoss: props.order.stopLoss ? 
    typeof props.order.stopLoss === 'object' && Object.keys(props.order.stopLoss).length === 1 && (Object.keys(props.order.stopLoss)[0] === 'id' || Object.keys(props.order.stopLoss)[0] === 'symbol')
? {
    connect: {
      id: props.order.stopLoss.id
    }
} : { upsert: {
        where: {
          id: props.order.stopLoss.id !== undefined ? {
              equals: props.order.stopLoss.id
            } : undefined,
          orderId: props.order.stopLoss.orderId !== undefined ? {
              equals: props.order.stopLoss.orderId
            } : undefined,
        },
        update: {
          id: props.order.stopLoss.id !== undefined ? {
              set: props.order.stopLoss.id
            } : undefined,
          stopPrice: props.order.stopLoss.stopPrice !== undefined ? {
              set: props.order.stopLoss.stopPrice
            } : undefined,
          limitPrice: props.order.stopLoss.limitPrice !== undefined ? {
              set: props.order.stopLoss.limitPrice
            } : undefined,
        },
        create: {
          stopPrice: props.order.stopLoss.stopPrice !== undefined ? props.order.stopLoss.stopPrice : undefined,
          limitPrice: props.order.stopLoss.limitPrice !== undefined ? props.order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: props.order.takeProfit ? 
    typeof props.order.takeProfit === 'object' && Object.keys(props.order.takeProfit).length === 1 && (Object.keys(props.order.takeProfit)[0] === 'id' || Object.keys(props.order.takeProfit)[0] === 'symbol')
? {
    connect: {
      id: props.order.takeProfit.id
    }
} : { upsert: {
        where: {
          id: props.order.takeProfit.id !== undefined ? {
              equals: props.order.takeProfit.id
            } : undefined,
          orderId: props.order.takeProfit.orderId !== undefined ? {
              equals: props.order.takeProfit.orderId
            } : undefined,
        },
        update: {
          id: props.order.takeProfit.id !== undefined ? {
              set: props.order.takeProfit.id
            } : undefined,
          limitPrice: props.order.takeProfit.limitPrice !== undefined ? {
              set: props.order.takeProfit.limitPrice
            } : undefined,
          stopPrice: props.order.takeProfit.stopPrice !== undefined ? {
              set: props.order.takeProfit.stopPrice
            } : undefined,
        },
        create: {
          limitPrice: props.order.takeProfit.limitPrice !== undefined ? props.order.takeProfit.limitPrice : undefined,
          stopPrice: props.order.takeProfit.stopPrice !== undefined ? props.order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.order.alpacaAccount ? 
    typeof props.order.alpacaAccount === 'object' && Object.keys(props.order.alpacaAccount).length === 1 && (Object.keys(props.order.alpacaAccount)[0] === 'id' || Object.keys(props.order.alpacaAccount)[0] === 'symbol')
? {
    connect: {
      id: props.order.alpacaAccount.id
    }
} : { upsert: {
        where: {
          id: props.order.alpacaAccount.id !== undefined ? {
              equals: props.order.alpacaAccount.id
            } : undefined,
          userId: props.order.alpacaAccount.userId !== undefined ? {
              equals: props.order.alpacaAccount.userId
            } : undefined,
        },
        update: {
          id: props.order.alpacaAccount.id !== undefined ? {
              set: props.order.alpacaAccount.id
            } : undefined,
          type: props.order.alpacaAccount.type !== undefined ? {
              set: props.order.alpacaAccount.type
            } : undefined,
          APIKey: props.order.alpacaAccount.APIKey !== undefined ? {
              set: props.order.alpacaAccount.APIKey
            } : undefined,
          APISecret: props.order.alpacaAccount.APISecret !== undefined ? {
              set: props.order.alpacaAccount.APISecret
            } : undefined,
          configuration: props.order.alpacaAccount.configuration !== undefined ? {
              set: props.order.alpacaAccount.configuration
            } : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? {
              set: props.order.alpacaAccount.marketOpen
            } : undefined,
          realTime: props.order.alpacaAccount.realTime !== undefined ? {
              set: props.order.alpacaAccount.realTime
            } : undefined,
          tradeAllocationPct: props.order.alpacaAccount.tradeAllocationPct !== undefined ? {
              set: props.order.alpacaAccount.tradeAllocationPct
            } : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? {
              set: props.order.alpacaAccount.minPercentageChange
            } : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? {
              set: props.order.alpacaAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: props.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
              set: props.order.alpacaAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: props.order.alpacaAccount.portfolioTrailPercent !== undefined ? {
              set: props.order.alpacaAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: props.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: props.order.alpacaAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: props.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: props.order.alpacaAccount.reducedPortfolioTrailPercent
            } : undefined,
      user: props.order.alpacaAccount.user ? 
      typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && (Object.keys(props.order.alpacaAccount.user)[0] === 'id' || Object.keys(props.order.alpacaAccount.user)[0] === 'symbol')
? {
      connect: {
        id: props.order.alpacaAccount.user.id
      }
} : { upsert: {
          where: {
            id: props.order.alpacaAccount.user.id !== undefined ? {
                equals: props.order.alpacaAccount.user.id
              } : undefined,
            name: props.order.alpacaAccount.user.name !== undefined ? {
                equals: props.order.alpacaAccount.user.name
              } : undefined,
            email: props.order.alpacaAccount.user.email !== undefined ? {
                equals: props.order.alpacaAccount.user.email
              } : undefined,
            customerId: props.order.alpacaAccount.user.customerId !== undefined ? {
                equals: props.order.alpacaAccount.user.customerId
              } : undefined,
          },
          update: {
            id: props.order.alpacaAccount.user.id !== undefined ? {
                set: props.order.alpacaAccount.user.id
              } : undefined,
            name: props.order.alpacaAccount.user.name !== undefined ? {
                set: props.order.alpacaAccount.user.name
              } : undefined,
            email: props.order.alpacaAccount.user.email !== undefined ? {
                set: props.order.alpacaAccount.user.email
              } : undefined,
            emailVerified: props.order.alpacaAccount.user.emailVerified !== undefined ? {
                set: props.order.alpacaAccount.user.emailVerified
              } : undefined,
            image: props.order.alpacaAccount.user.image !== undefined ? {
                set: props.order.alpacaAccount.user.image
              } : undefined,
            role: props.order.alpacaAccount.user.role !== undefined ? {
                set: props.order.alpacaAccount.user.role
              } : undefined,
            bio: props.order.alpacaAccount.user.bio !== undefined ? {
                set: props.order.alpacaAccount.user.bio
              } : undefined,
            jobTitle: props.order.alpacaAccount.user.jobTitle !== undefined ? {
                set: props.order.alpacaAccount.user.jobTitle
              } : undefined,
            currentAccount: props.order.alpacaAccount.user.currentAccount !== undefined ? {
                set: props.order.alpacaAccount.user.currentAccount
              } : undefined,
            plan: props.order.alpacaAccount.user.plan !== undefined ? {
                set: props.order.alpacaAccount.user.plan
              } : undefined,
            openaiAPIKey: props.order.alpacaAccount.user.openaiAPIKey !== undefined ? {
                set: props.order.alpacaAccount.user.openaiAPIKey
              } : undefined,
            openaiModel: props.order.alpacaAccount.user.openaiModel !== undefined ? {
                set: props.order.alpacaAccount.user.openaiModel
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
      positions: props.order.alpacaAccount.positions ? 
      Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 && props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.alpacaAccount.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
      Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 && props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.alpacaAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.alpacaAccount.alerts.map((item: any) => ({
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
          type: props.order.alpacaAccount.type !== undefined ? props.order.alpacaAccount.type : undefined,
          APIKey: props.order.alpacaAccount.APIKey !== undefined ? props.order.alpacaAccount.APIKey : undefined,
          APISecret: props.order.alpacaAccount.APISecret !== undefined ? props.order.alpacaAccount.APISecret : undefined,
          configuration: props.order.alpacaAccount.configuration !== undefined ? props.order.alpacaAccount.configuration : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? props.order.alpacaAccount.marketOpen : undefined,
          realTime: props.order.alpacaAccount.realTime !== undefined ? props.order.alpacaAccount.realTime : undefined,
          tradeAllocationPct: props.order.alpacaAccount.tradeAllocationPct !== undefined ? props.order.alpacaAccount.tradeAllocationPct : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.order.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
      user: props.order.alpacaAccount.user ? 
        typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && Object.keys(props.order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.order.alpacaAccount.user.id
            }
          }
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
      positions: props.order.alpacaAccount.positions ? 
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
        Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 &&  props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.alerts.map((item: any) => ({
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
    typeof props.order.asset === 'object' && Object.keys(props.order.asset).length === 1 && (Object.keys(props.order.asset)[0] === 'id' || Object.keys(props.order.asset)[0] === 'symbol')
? {
    connect: {
      id: props.order.asset.id
    }
} : { upsert: {
        where: {
          id: props.order.asset.id !== undefined ? {
              equals: props.order.asset.id
            } : undefined,
          symbol: props.order.asset.symbol !== undefined ? {
              equals: props.order.asset.symbol
            } : undefined,
          name: props.order.asset.name !== undefined ? {
              equals: props.order.asset.name
            } : undefined,
        },
        update: {
          id: props.order.asset.id !== undefined ? {
              set: props.order.asset.id
            } : undefined,
          symbol: props.order.asset.symbol !== undefined ? {
              set: props.order.asset.symbol
            } : undefined,
          name: props.order.asset.name !== undefined ? {
              set: props.order.asset.name
            } : undefined,
          type: props.order.asset.type !== undefined ? {
              set: props.order.asset.type
            } : undefined,
          logoUrl: props.order.asset.logoUrl !== undefined ? {
              set: props.order.asset.logoUrl
            } : undefined,
          description: props.order.asset.description !== undefined ? {
              set: props.order.asset.description
            } : undefined,
          cik: props.order.asset.cik !== undefined ? {
              set: props.order.asset.cik
            } : undefined,
          exchange: props.order.asset.exchange !== undefined ? {
              set: props.order.asset.exchange
            } : undefined,
          currency: props.order.asset.currency !== undefined ? {
              set: props.order.asset.currency
            } : undefined,
          country: props.order.asset.country !== undefined ? {
              set: props.order.asset.country
            } : undefined,
          sector: props.order.asset.sector !== undefined ? {
              set: props.order.asset.sector
            } : undefined,
          industry: props.order.asset.industry !== undefined ? {
              set: props.order.asset.industry
            } : undefined,
          address: props.order.asset.address !== undefined ? {
              set: props.order.asset.address
            } : undefined,
          officialSite: props.order.asset.officialSite !== undefined ? {
              set: props.order.asset.officialSite
            } : undefined,
          fiscalYearEnd: props.order.asset.fiscalYearEnd !== undefined ? {
              set: props.order.asset.fiscalYearEnd
            } : undefined,
          latestQuarter: props.order.asset.latestQuarter !== undefined ? {
              set: props.order.asset.latestQuarter
            } : undefined,
          marketCapitalization: props.order.asset.marketCapitalization !== undefined ? {
              set: props.order.asset.marketCapitalization
            } : undefined,
          ebitda: props.order.asset.ebitda !== undefined ? {
              set: props.order.asset.ebitda
            } : undefined,
          peRatio: props.order.asset.peRatio !== undefined ? {
              set: props.order.asset.peRatio
            } : undefined,
          pegRatio: props.order.asset.pegRatio !== undefined ? {
              set: props.order.asset.pegRatio
            } : undefined,
          bookValue: props.order.asset.bookValue !== undefined ? {
              set: props.order.asset.bookValue
            } : undefined,
          dividendPerShare: props.order.asset.dividendPerShare !== undefined ? {
              set: props.order.asset.dividendPerShare
            } : undefined,
          dividendYield: props.order.asset.dividendYield !== undefined ? {
              set: props.order.asset.dividendYield
            } : undefined,
          eps: props.order.asset.eps !== undefined ? {
              set: props.order.asset.eps
            } : undefined,
          revenuePerShareTTM: props.order.asset.revenuePerShareTTM !== undefined ? {
              set: props.order.asset.revenuePerShareTTM
            } : undefined,
          profitMargin: props.order.asset.profitMargin !== undefined ? {
              set: props.order.asset.profitMargin
            } : undefined,
          operatingMarginTTM: props.order.asset.operatingMarginTTM !== undefined ? {
              set: props.order.asset.operatingMarginTTM
            } : undefined,
          returnOnAssetsTTM: props.order.asset.returnOnAssetsTTM !== undefined ? {
              set: props.order.asset.returnOnAssetsTTM
            } : undefined,
          returnOnEquityTTM: props.order.asset.returnOnEquityTTM !== undefined ? {
              set: props.order.asset.returnOnEquityTTM
            } : undefined,
          revenueTTM: props.order.asset.revenueTTM !== undefined ? {
              set: props.order.asset.revenueTTM
            } : undefined,
          grossProfitTTM: props.order.asset.grossProfitTTM !== undefined ? {
              set: props.order.asset.grossProfitTTM
            } : undefined,
          dilutedEPSTTM: props.order.asset.dilutedEPSTTM !== undefined ? {
              set: props.order.asset.dilutedEPSTTM
            } : undefined,
          quarterlyEarningsGrowthYOY: props.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: props.order.asset.quarterlyEarningsGrowthYOY
            } : undefined,
          quarterlyRevenueGrowthYOY: props.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: props.order.asset.quarterlyRevenueGrowthYOY
            } : undefined,
          analystTargetPrice: props.order.asset.analystTargetPrice !== undefined ? {
              set: props.order.asset.analystTargetPrice
            } : undefined,
          analystRatingStrongBuy: props.order.asset.analystRatingStrongBuy !== undefined ? {
              set: props.order.asset.analystRatingStrongBuy
            } : undefined,
          analystRatingBuy: props.order.asset.analystRatingBuy !== undefined ? {
              set: props.order.asset.analystRatingBuy
            } : undefined,
          analystRatingHold: props.order.asset.analystRatingHold !== undefined ? {
              set: props.order.asset.analystRatingHold
            } : undefined,
          analystRatingSell: props.order.asset.analystRatingSell !== undefined ? {
              set: props.order.asset.analystRatingSell
            } : undefined,
          analystRatingStrongSell: props.order.asset.analystRatingStrongSell !== undefined ? {
              set: props.order.asset.analystRatingStrongSell
            } : undefined,
          trailingPE: props.order.asset.trailingPE !== undefined ? {
              set: props.order.asset.trailingPE
            } : undefined,
          forwardPE: props.order.asset.forwardPE !== undefined ? {
              set: props.order.asset.forwardPE
            } : undefined,
          priceToSalesRatioTTM: props.order.asset.priceToSalesRatioTTM !== undefined ? {
              set: props.order.asset.priceToSalesRatioTTM
            } : undefined,
          priceToBookRatio: props.order.asset.priceToBookRatio !== undefined ? {
              set: props.order.asset.priceToBookRatio
            } : undefined,
          evToRevenue: props.order.asset.evToRevenue !== undefined ? {
              set: props.order.asset.evToRevenue
            } : undefined,
          evToEbitda: props.order.asset.evToEbitda !== undefined ? {
              set: props.order.asset.evToEbitda
            } : undefined,
          beta: props.order.asset.beta !== undefined ? {
              set: props.order.asset.beta
            } : undefined,
          week52High: props.order.asset.week52High !== undefined ? {
              set: props.order.asset.week52High
            } : undefined,
          week52Low: props.order.asset.week52Low !== undefined ? {
              set: props.order.asset.week52Low
            } : undefined,
          day50MovingAverage: props.order.asset.day50MovingAverage !== undefined ? {
              set: props.order.asset.day50MovingAverage
            } : undefined,
          day200MovingAverage: props.order.asset.day200MovingAverage !== undefined ? {
              set: props.order.asset.day200MovingAverage
            } : undefined,
          sharesOutstanding: props.order.asset.sharesOutstanding !== undefined ? {
              set: props.order.asset.sharesOutstanding
            } : undefined,
          dividendDate: props.order.asset.dividendDate !== undefined ? {
              set: props.order.asset.dividendDate
            } : undefined,
          exDividendDate: props.order.asset.exDividendDate !== undefined ? {
              set: props.order.asset.exDividendDate
            } : undefined,
          askPrice: props.order.asset.askPrice !== undefined ? {
              set: props.order.asset.askPrice
            } : undefined,
          bidPrice: props.order.asset.bidPrice !== undefined ? {
              set: props.order.asset.bidPrice
            } : undefined,
      positions: props.order.asset.positions ? 
      Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 && props.order.asset.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.asset.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
      Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 && props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.asset.newsMentions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.asset.newsMentions.map((item: any) => ({
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
      contracts: props.order.asset.contracts ? 
      Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 && props.order.asset.contracts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.asset.contracts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.asset.contracts.map((item: any) => ({
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
      positions: props.order.asset.positions ? 
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
        Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 &&  props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 &&  props.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.contracts.map((item: any) => ({
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
    typeof props.order.contract === 'object' && Object.keys(props.order.contract).length === 1 && (Object.keys(props.order.contract)[0] === 'id' || Object.keys(props.order.contract)[0] === 'symbol')
? {
    connect: {
      id: props.order.contract.id
    }
} : { upsert: {
        where: {
          id: props.order.contract.id !== undefined ? {
              equals: props.order.contract.id
            } : undefined,
          alpacaId: props.order.contract.alpacaId !== undefined ? {
              equals: props.order.contract.alpacaId
            } : undefined,
          symbol: props.order.contract.symbol !== undefined ? {
              equals: props.order.contract.symbol
            } : undefined,
          name: props.order.contract.name !== undefined ? {
              equals: props.order.contract.name
            } : undefined,
          underlyingAssetId: props.order.contract.underlyingAssetId !== undefined ? {
              equals: props.order.contract.underlyingAssetId
            } : undefined,
          assetId: props.order.contract.assetId !== undefined ? {
              equals: props.order.contract.assetId
            } : undefined,
          orderId: props.order.contract.orderId !== undefined ? {
              equals: props.order.contract.orderId
            } : undefined,
        },
        update: {
          id: props.order.contract.id !== undefined ? {
              set: props.order.contract.id
            } : undefined,
          alpacaId: props.order.contract.alpacaId !== undefined ? {
              set: props.order.contract.alpacaId
            } : undefined,
          symbol: props.order.contract.symbol !== undefined ? {
              set: props.order.contract.symbol
            } : undefined,
          name: props.order.contract.name !== undefined ? {
              set: props.order.contract.name
            } : undefined,
          status: props.order.contract.status !== undefined ? {
              set: props.order.contract.status
            } : undefined,
          tradable: props.order.contract.tradable !== undefined ? {
              set: props.order.contract.tradable
            } : undefined,
          expirationDate: props.order.contract.expirationDate !== undefined ? {
              set: props.order.contract.expirationDate
            } : undefined,
          rootSymbol: props.order.contract.rootSymbol !== undefined ? {
              set: props.order.contract.rootSymbol
            } : undefined,
          underlyingSymbol: props.order.contract.underlyingSymbol !== undefined ? {
              set: props.order.contract.underlyingSymbol
            } : undefined,
          underlyingAssetId: props.order.contract.underlyingAssetId !== undefined ? {
              set: props.order.contract.underlyingAssetId
            } : undefined,
          type: props.order.contract.type !== undefined ? {
              set: props.order.contract.type
            } : undefined,
          style: props.order.contract.style !== undefined ? {
              set: props.order.contract.style
            } : undefined,
          strikePrice: props.order.contract.strikePrice !== undefined ? {
              set: props.order.contract.strikePrice
            } : undefined,
          multiplier: props.order.contract.multiplier !== undefined ? {
              set: props.order.contract.multiplier
            } : undefined,
          size: props.order.contract.size !== undefined ? {
              set: props.order.contract.size
            } : undefined,
          openInterest: props.order.contract.openInterest !== undefined ? {
              set: props.order.contract.openInterest
            } : undefined,
          openInterestDate: props.order.contract.openInterestDate !== undefined ? {
              set: props.order.contract.openInterestDate
            } : undefined,
          closePrice: props.order.contract.closePrice !== undefined ? {
              set: props.order.contract.closePrice
            } : undefined,
          closePriceDate: props.order.contract.closePriceDate !== undefined ? {
              set: props.order.contract.closePriceDate
            } : undefined,
          ppind: props.order.contract.ppind !== undefined ? {
              set: props.order.contract.ppind
            } : undefined,
          orderId: props.order.contract.orderId !== undefined ? {
              set: props.order.contract.orderId
            } : undefined,
      deliverables: props.order.contract.deliverables ? 
      Array.isArray(props.order.contract.deliverables) && props.order.contract.deliverables.length > 0 && props.order.contract.deliverables.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.order.contract.deliverables.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.contract.deliverables.map((item: any) => ({
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
      asset: props.order.contract.asset ? 
      typeof props.order.contract.asset === 'object' && Object.keys(props.order.contract.asset).length === 1 && (Object.keys(props.order.contract.asset)[0] === 'id' || Object.keys(props.order.contract.asset)[0] === 'symbol')
? {
      connect: {
        id: props.order.contract.asset.id
      }
} : { upsert: {
          where: {
            id: props.order.contract.asset.id !== undefined ? {
                equals: props.order.contract.asset.id
              } : undefined,
            symbol: props.order.contract.asset.symbol !== undefined ? {
                equals: props.order.contract.asset.symbol
              } : undefined,
            name: props.order.contract.asset.name !== undefined ? {
                equals: props.order.contract.asset.name
              } : undefined,
          },
          update: {
            id: props.order.contract.asset.id !== undefined ? {
                set: props.order.contract.asset.id
              } : undefined,
            symbol: props.order.contract.asset.symbol !== undefined ? {
                set: props.order.contract.asset.symbol
              } : undefined,
            name: props.order.contract.asset.name !== undefined ? {
                set: props.order.contract.asset.name
              } : undefined,
            type: props.order.contract.asset.type !== undefined ? {
                set: props.order.contract.asset.type
              } : undefined,
            logoUrl: props.order.contract.asset.logoUrl !== undefined ? {
                set: props.order.contract.asset.logoUrl
              } : undefined,
            description: props.order.contract.asset.description !== undefined ? {
                set: props.order.contract.asset.description
              } : undefined,
            cik: props.order.contract.asset.cik !== undefined ? {
                set: props.order.contract.asset.cik
              } : undefined,
            exchange: props.order.contract.asset.exchange !== undefined ? {
                set: props.order.contract.asset.exchange
              } : undefined,
            currency: props.order.contract.asset.currency !== undefined ? {
                set: props.order.contract.asset.currency
              } : undefined,
            country: props.order.contract.asset.country !== undefined ? {
                set: props.order.contract.asset.country
              } : undefined,
            sector: props.order.contract.asset.sector !== undefined ? {
                set: props.order.contract.asset.sector
              } : undefined,
            industry: props.order.contract.asset.industry !== undefined ? {
                set: props.order.contract.asset.industry
              } : undefined,
            address: props.order.contract.asset.address !== undefined ? {
                set: props.order.contract.asset.address
              } : undefined,
            officialSite: props.order.contract.asset.officialSite !== undefined ? {
                set: props.order.contract.asset.officialSite
              } : undefined,
            fiscalYearEnd: props.order.contract.asset.fiscalYearEnd !== undefined ? {
                set: props.order.contract.asset.fiscalYearEnd
              } : undefined,
            latestQuarter: props.order.contract.asset.latestQuarter !== undefined ? {
                set: props.order.contract.asset.latestQuarter
              } : undefined,
            marketCapitalization: props.order.contract.asset.marketCapitalization !== undefined ? {
                set: props.order.contract.asset.marketCapitalization
              } : undefined,
            ebitda: props.order.contract.asset.ebitda !== undefined ? {
                set: props.order.contract.asset.ebitda
              } : undefined,
            peRatio: props.order.contract.asset.peRatio !== undefined ? {
                set: props.order.contract.asset.peRatio
              } : undefined,
            pegRatio: props.order.contract.asset.pegRatio !== undefined ? {
                set: props.order.contract.asset.pegRatio
              } : undefined,
            bookValue: props.order.contract.asset.bookValue !== undefined ? {
                set: props.order.contract.asset.bookValue
              } : undefined,
            dividendPerShare: props.order.contract.asset.dividendPerShare !== undefined ? {
                set: props.order.contract.asset.dividendPerShare
              } : undefined,
            dividendYield: props.order.contract.asset.dividendYield !== undefined ? {
                set: props.order.contract.asset.dividendYield
              } : undefined,
            eps: props.order.contract.asset.eps !== undefined ? {
                set: props.order.contract.asset.eps
              } : undefined,
            revenuePerShareTTM: props.order.contract.asset.revenuePerShareTTM !== undefined ? {
                set: props.order.contract.asset.revenuePerShareTTM
              } : undefined,
            profitMargin: props.order.contract.asset.profitMargin !== undefined ? {
                set: props.order.contract.asset.profitMargin
              } : undefined,
            operatingMarginTTM: props.order.contract.asset.operatingMarginTTM !== undefined ? {
                set: props.order.contract.asset.operatingMarginTTM
              } : undefined,
            returnOnAssetsTTM: props.order.contract.asset.returnOnAssetsTTM !== undefined ? {
                set: props.order.contract.asset.returnOnAssetsTTM
              } : undefined,
            returnOnEquityTTM: props.order.contract.asset.returnOnEquityTTM !== undefined ? {
                set: props.order.contract.asset.returnOnEquityTTM
              } : undefined,
            revenueTTM: props.order.contract.asset.revenueTTM !== undefined ? {
                set: props.order.contract.asset.revenueTTM
              } : undefined,
            grossProfitTTM: props.order.contract.asset.grossProfitTTM !== undefined ? {
                set: props.order.contract.asset.grossProfitTTM
              } : undefined,
            dilutedEPSTTM: props.order.contract.asset.dilutedEPSTTM !== undefined ? {
                set: props.order.contract.asset.dilutedEPSTTM
              } : undefined,
            quarterlyEarningsGrowthYOY: props.order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: props.order.contract.asset.quarterlyEarningsGrowthYOY
              } : undefined,
            quarterlyRevenueGrowthYOY: props.order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: props.order.contract.asset.quarterlyRevenueGrowthYOY
              } : undefined,
            analystTargetPrice: props.order.contract.asset.analystTargetPrice !== undefined ? {
                set: props.order.contract.asset.analystTargetPrice
              } : undefined,
            analystRatingStrongBuy: props.order.contract.asset.analystRatingStrongBuy !== undefined ? {
                set: props.order.contract.asset.analystRatingStrongBuy
              } : undefined,
            analystRatingBuy: props.order.contract.asset.analystRatingBuy !== undefined ? {
                set: props.order.contract.asset.analystRatingBuy
              } : undefined,
            analystRatingHold: props.order.contract.asset.analystRatingHold !== undefined ? {
                set: props.order.contract.asset.analystRatingHold
              } : undefined,
            analystRatingSell: props.order.contract.asset.analystRatingSell !== undefined ? {
                set: props.order.contract.asset.analystRatingSell
              } : undefined,
            analystRatingStrongSell: props.order.contract.asset.analystRatingStrongSell !== undefined ? {
                set: props.order.contract.asset.analystRatingStrongSell
              } : undefined,
            trailingPE: props.order.contract.asset.trailingPE !== undefined ? {
                set: props.order.contract.asset.trailingPE
              } : undefined,
            forwardPE: props.order.contract.asset.forwardPE !== undefined ? {
                set: props.order.contract.asset.forwardPE
              } : undefined,
            priceToSalesRatioTTM: props.order.contract.asset.priceToSalesRatioTTM !== undefined ? {
                set: props.order.contract.asset.priceToSalesRatioTTM
              } : undefined,
            priceToBookRatio: props.order.contract.asset.priceToBookRatio !== undefined ? {
                set: props.order.contract.asset.priceToBookRatio
              } : undefined,
            evToRevenue: props.order.contract.asset.evToRevenue !== undefined ? {
                set: props.order.contract.asset.evToRevenue
              } : undefined,
            evToEbitda: props.order.contract.asset.evToEbitda !== undefined ? {
                set: props.order.contract.asset.evToEbitda
              } : undefined,
            beta: props.order.contract.asset.beta !== undefined ? {
                set: props.order.contract.asset.beta
              } : undefined,
            week52High: props.order.contract.asset.week52High !== undefined ? {
                set: props.order.contract.asset.week52High
              } : undefined,
            week52Low: props.order.contract.asset.week52Low !== undefined ? {
                set: props.order.contract.asset.week52Low
              } : undefined,
            day50MovingAverage: props.order.contract.asset.day50MovingAverage !== undefined ? {
                set: props.order.contract.asset.day50MovingAverage
              } : undefined,
            day200MovingAverage: props.order.contract.asset.day200MovingAverage !== undefined ? {
                set: props.order.contract.asset.day200MovingAverage
              } : undefined,
            sharesOutstanding: props.order.contract.asset.sharesOutstanding !== undefined ? {
                set: props.order.contract.asset.sharesOutstanding
              } : undefined,
            dividendDate: props.order.contract.asset.dividendDate !== undefined ? {
                set: props.order.contract.asset.dividendDate
              } : undefined,
            exDividendDate: props.order.contract.asset.exDividendDate !== undefined ? {
                set: props.order.contract.asset.exDividendDate
              } : undefined,
            askPrice: props.order.contract.asset.askPrice !== undefined ? {
                set: props.order.contract.asset.askPrice
              } : undefined,
            bidPrice: props.order.contract.asset.bidPrice !== undefined ? {
                set: props.order.contract.asset.bidPrice
              } : undefined,
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
        Array.isArray(props.order.contract.deliverables) && props.order.contract.deliverables.length > 0 &&  props.order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
        expiredAt: props.order.expiredAt !== undefined ? props.order.expiredAt : undefined,
        failedAt: props.order.failedAt !== undefined ? props.order.failedAt : undefined,
        replacedAt: props.order.replacedAt !== undefined ? props.order.replacedAt : undefined,
        replacedBy: props.order.replacedBy !== undefined ? props.order.replacedBy : undefined,
        replaces: props.order.replaces !== undefined ? props.order.replaces : undefined,
        positionIntent: props.order.positionIntent !== undefined ? props.order.positionIntent : undefined,
        legs: props.order.legs !== undefined ? props.order.legs : undefined,
        hwm: props.order.hwm !== undefined ? props.order.hwm : undefined,
        subtag: props.order.subtag !== undefined ? props.order.subtag : undefined,
        source: props.order.source !== undefined ? props.order.source : undefined,
        expiresAt: props.order.expiresAt !== undefined ? props.order.expiresAt : undefined,
        optionType: props.order.optionType !== undefined ? props.order.optionType : undefined,
        stopLossId: props.order.stopLossId !== undefined ? props.order.stopLossId : undefined,
        takeProfitId: props.order.takeProfitId !== undefined ? props.order.takeProfitId : undefined,
    stopLoss: props.order.stopLoss ? 
      typeof props.order.stopLoss === 'object' && Object.keys(props.order.stopLoss).length === 1 && Object.keys(props.order.stopLoss)[0] === 'id'
    ? { connect: {
          id: props.order.stopLoss.id
          }
        }
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
          }
        }
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
          }
        }
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
          configuration: props.order.alpacaAccount.configuration !== undefined ? props.order.alpacaAccount.configuration : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? props.order.alpacaAccount.marketOpen : undefined,
          realTime: props.order.alpacaAccount.realTime !== undefined ? props.order.alpacaAccount.realTime : undefined,
          tradeAllocationPct: props.order.alpacaAccount.tradeAllocationPct !== undefined ? props.order.alpacaAccount.tradeAllocationPct : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: props.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? props.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: props.order.alpacaAccount.portfolioTrailPercent !== undefined ? props.order.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: props.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? props.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: props.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? props.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
      user: props.order.alpacaAccount.user ? 
        typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && Object.keys(props.order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.order.alpacaAccount.user.id
            }
          }
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
      positions: props.order.alpacaAccount.positions ? 
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
        Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 &&  props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.alerts.map((item: any) => ({
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
          }
        }
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
      positions: props.order.asset.positions ? 
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
        Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 &&  props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.newsMentions.map((item: any) => ({
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
        Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 &&  props.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.contracts.map((item: any) => ({
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
          }
        }
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
        Array.isArray(props.order.contract.deliverables) && props.order.contract.deliverables.length > 0 &&  props.order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.contract.deliverables.map((item: any) => ({
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
            }
          }
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
  async updateMany(props: ActionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  primary: prop.primary !== undefined ? {
            set: prop.primary 
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
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  trade: prop.trade ? 
  typeof prop.trade === 'object' && Object.keys(prop.trade).length === 1 && (Object.keys(prop.trade)[0] === 'id' || Object.keys(prop.trade)[0] === 'symbol')
? {
  connect: {
    id: prop.trade.id
  }
} : { upsert: {
      where: {
        id: prop.trade.id !== undefined ? {
            equals: prop.trade.id
          } : undefined,
        alpacaAccountId: prop.trade.alpacaAccountId !== undefined ? {
            equals: prop.trade.alpacaAccountId
          } : undefined,
        assetId: prop.trade.assetId !== undefined ? {
            equals: prop.trade.assetId
          } : undefined,
        symbol: prop.trade.symbol !== undefined ? {
            equals: prop.trade.symbol
          } : undefined,
      },
      update: {
        id: prop.trade.id !== undefined ? {
            set: prop.trade.id
          } : undefined,
        alpacaAccountId: prop.trade.alpacaAccountId !== undefined ? {
            set: prop.trade.alpacaAccountId
          } : undefined,
        assetId: prop.trade.assetId !== undefined ? {
            set: prop.trade.assetId
          } : undefined,
        qty: prop.trade.qty !== undefined ? {
            set: prop.trade.qty
          } : undefined,
        price: prop.trade.price !== undefined ? {
            set: prop.trade.price
          } : undefined,
        total: prop.trade.total !== undefined ? {
            set: prop.trade.total
          } : undefined,
        optionType: prop.trade.optionType !== undefined ? {
            set: prop.trade.optionType
          } : undefined,
        signal: prop.trade.signal !== undefined ? {
            set: prop.trade.signal
          } : undefined,
        strategy: prop.trade.strategy !== undefined ? {
            set: prop.trade.strategy
          } : undefined,
        analysis: prop.trade.analysis !== undefined ? {
            set: prop.trade.analysis
          } : undefined,
        summary: prop.trade.summary !== undefined ? {
            set: prop.trade.summary
          } : undefined,
        confidence: prop.trade.confidence !== undefined ? {
            set: prop.trade.confidence
          } : undefined,
        timestamp: prop.trade.timestamp !== undefined ? {
            set: prop.trade.timestamp
          } : undefined,
        status: prop.trade.status !== undefined ? {
            set: prop.trade.status
          } : undefined,
        symbol: prop.trade.symbol !== undefined ? {
            set: prop.trade.symbol
          } : undefined,
      },
      create: {
        alpacaAccountId: prop.trade.alpacaAccountId !== undefined ? prop.trade.alpacaAccountId : undefined,
        assetId: prop.trade.assetId !== undefined ? prop.trade.assetId : undefined,
        qty: prop.trade.qty !== undefined ? prop.trade.qty : undefined,
        price: prop.trade.price !== undefined ? prop.trade.price : undefined,
        total: prop.trade.total !== undefined ? prop.trade.total : undefined,
        optionType: prop.trade.optionType !== undefined ? prop.trade.optionType : undefined,
        signal: prop.trade.signal !== undefined ? prop.trade.signal : undefined,
        strategy: prop.trade.strategy !== undefined ? prop.trade.strategy : undefined,
        analysis: prop.trade.analysis !== undefined ? prop.trade.analysis : undefined,
        summary: prop.trade.summary !== undefined ? prop.trade.summary : undefined,
        confidence: prop.trade.confidence !== undefined ? prop.trade.confidence : undefined,
        timestamp: prop.trade.timestamp !== undefined ? prop.trade.timestamp : undefined,
        status: prop.trade.status !== undefined ? prop.trade.status : undefined,
        symbol: prop.trade.symbol !== undefined ? prop.trade.symbol : undefined,
      },
    }
  } : undefined,
  order: prop.order ? 
  typeof prop.order === 'object' && Object.keys(prop.order).length === 1 && (Object.keys(prop.order)[0] === 'id' || Object.keys(prop.order)[0] === 'symbol')
? {
  connect: {
    id: prop.order.id
  }
} : { upsert: {
      where: {
        id: prop.order.id !== undefined ? {
            equals: prop.order.id
          } : undefined,
        clientOrderId: prop.order.clientOrderId !== undefined ? {
            equals: prop.order.clientOrderId
          } : undefined,
        alpacaAccountId: prop.order.alpacaAccountId !== undefined ? {
            equals: prop.order.alpacaAccountId
          } : undefined,
        assetId: prop.order.assetId !== undefined ? {
            equals: prop.order.assetId
          } : undefined,
        actionId: prop.order.actionId !== undefined ? {
            equals: prop.order.actionId
          } : undefined,
        stopLossId: prop.order.stopLossId !== undefined ? {
            equals: prop.order.stopLossId
          } : undefined,
        takeProfitId: prop.order.takeProfitId !== undefined ? {
            equals: prop.order.takeProfitId
          } : undefined,
        contractId: prop.order.contractId !== undefined ? {
            equals: prop.order.contractId
          } : undefined,
      },
      update: {
        id: prop.order.id !== undefined ? {
            set: prop.order.id
          } : undefined,
        clientOrderId: prop.order.clientOrderId !== undefined ? {
            set: prop.order.clientOrderId
          } : undefined,
        qty: prop.order.qty !== undefined ? {
            set: prop.order.qty
          } : undefined,
        notional: prop.order.notional !== undefined ? {
            set: prop.order.notional
          } : undefined,
        side: prop.order.side !== undefined ? {
            set: prop.order.side
          } : undefined,
        type: prop.order.type !== undefined ? {
            set: prop.order.type
          } : undefined,
        orderClass: prop.order.orderClass !== undefined ? {
            set: prop.order.orderClass
          } : undefined,
        timeInForce: prop.order.timeInForce !== undefined ? {
            set: prop.order.timeInForce
          } : undefined,
        limitPrice: prop.order.limitPrice !== undefined ? {
            set: prop.order.limitPrice
          } : undefined,
        stopPrice: prop.order.stopPrice !== undefined ? {
            set: prop.order.stopPrice
          } : undefined,
        trailPrice: prop.order.trailPrice !== undefined ? {
            set: prop.order.trailPrice
          } : undefined,
        trailPercent: prop.order.trailPercent !== undefined ? {
            set: prop.order.trailPercent
          } : undefined,
        extendedHours: prop.order.extendedHours !== undefined ? {
            set: prop.order.extendedHours
          } : undefined,
        status: prop.order.status !== undefined ? {
            set: prop.order.status
          } : undefined,
        submittedAt: prop.order.submittedAt !== undefined ? {
            set: prop.order.submittedAt
          } : undefined,
        filledAt: prop.order.filledAt !== undefined ? {
            set: prop.order.filledAt
          } : undefined,
        filledQty: prop.order.filledQty !== undefined ? {
            set: prop.order.filledQty
          } : undefined,
        filledAvgPrice: prop.order.filledAvgPrice !== undefined ? {
            set: prop.order.filledAvgPrice
          } : undefined,
        cancelRequestedAt: prop.order.cancelRequestedAt !== undefined ? {
            set: prop.order.cancelRequestedAt
          } : undefined,
        canceledAt: prop.order.canceledAt !== undefined ? {
            set: prop.order.canceledAt
          } : undefined,
        fee: prop.order.fee !== undefined ? {
            set: prop.order.fee
          } : undefined,
        strikePrice: prop.order.strikePrice !== undefined ? {
            set: prop.order.strikePrice
          } : undefined,
        expirationDate: prop.order.expirationDate !== undefined ? {
            set: prop.order.expirationDate
          } : undefined,
        expiredAt: prop.order.expiredAt !== undefined ? {
            set: prop.order.expiredAt
          } : undefined,
        failedAt: prop.order.failedAt !== undefined ? {
            set: prop.order.failedAt
          } : undefined,
        replacedAt: prop.order.replacedAt !== undefined ? {
            set: prop.order.replacedAt
          } : undefined,
        replacedBy: prop.order.replacedBy !== undefined ? {
            set: prop.order.replacedBy
          } : undefined,
        replaces: prop.order.replaces !== undefined ? {
            set: prop.order.replaces
          } : undefined,
        positionIntent: prop.order.positionIntent !== undefined ? {
            set: prop.order.positionIntent
          } : undefined,
        legs: prop.order.legs !== undefined ? {
            set: prop.order.legs
          } : undefined,
        hwm: prop.order.hwm !== undefined ? {
            set: prop.order.hwm
          } : undefined,
        subtag: prop.order.subtag !== undefined ? {
            set: prop.order.subtag
          } : undefined,
        source: prop.order.source !== undefined ? {
            set: prop.order.source
          } : undefined,
        expiresAt: prop.order.expiresAt !== undefined ? {
            set: prop.order.expiresAt
          } : undefined,
        optionType: prop.order.optionType !== undefined ? {
            set: prop.order.optionType
          } : undefined,
        stopLossId: prop.order.stopLossId !== undefined ? {
            set: prop.order.stopLossId
          } : undefined,
        takeProfitId: prop.order.takeProfitId !== undefined ? {
            set: prop.order.takeProfitId
          } : undefined,
    stopLoss: prop.order.stopLoss ? 
    typeof prop.order.stopLoss === 'object' && Object.keys(prop.order.stopLoss).length === 1 && (Object.keys(prop.order.stopLoss)[0] === 'id' || Object.keys(prop.order.stopLoss)[0] === 'symbol')
? {
    connect: {
      id: prop.order.stopLoss.id
    }
} : { upsert: {
        where: {
          id: prop.order.stopLoss.id !== undefined ? {
              equals: prop.order.stopLoss.id
            } : undefined,
          orderId: prop.order.stopLoss.orderId !== undefined ? {
              equals: prop.order.stopLoss.orderId
            } : undefined,
        },
        update: {
          id: prop.order.stopLoss.id !== undefined ? {
              set: prop.order.stopLoss.id
            } : undefined,
          stopPrice: prop.order.stopLoss.stopPrice !== undefined ? {
              set: prop.order.stopLoss.stopPrice
            } : undefined,
          limitPrice: prop.order.stopLoss.limitPrice !== undefined ? {
              set: prop.order.stopLoss.limitPrice
            } : undefined,
        },
        create: {
          stopPrice: prop.order.stopLoss.stopPrice !== undefined ? prop.order.stopLoss.stopPrice : undefined,
          limitPrice: prop.order.stopLoss.limitPrice !== undefined ? prop.order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: prop.order.takeProfit ? 
    typeof prop.order.takeProfit === 'object' && Object.keys(prop.order.takeProfit).length === 1 && (Object.keys(prop.order.takeProfit)[0] === 'id' || Object.keys(prop.order.takeProfit)[0] === 'symbol')
? {
    connect: {
      id: prop.order.takeProfit.id
    }
} : { upsert: {
        where: {
          id: prop.order.takeProfit.id !== undefined ? {
              equals: prop.order.takeProfit.id
            } : undefined,
          orderId: prop.order.takeProfit.orderId !== undefined ? {
              equals: prop.order.takeProfit.orderId
            } : undefined,
        },
        update: {
          id: prop.order.takeProfit.id !== undefined ? {
              set: prop.order.takeProfit.id
            } : undefined,
          limitPrice: prop.order.takeProfit.limitPrice !== undefined ? {
              set: prop.order.takeProfit.limitPrice
            } : undefined,
          stopPrice: prop.order.takeProfit.stopPrice !== undefined ? {
              set: prop.order.takeProfit.stopPrice
            } : undefined,
        },
        create: {
          limitPrice: prop.order.takeProfit.limitPrice !== undefined ? prop.order.takeProfit.limitPrice : undefined,
          stopPrice: prop.order.takeProfit.stopPrice !== undefined ? prop.order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: prop.order.alpacaAccount ? 
    typeof prop.order.alpacaAccount === 'object' && Object.keys(prop.order.alpacaAccount).length === 1 && (Object.keys(prop.order.alpacaAccount)[0] === 'id' || Object.keys(prop.order.alpacaAccount)[0] === 'symbol')
? {
    connect: {
      id: prop.order.alpacaAccount.id
    }
} : { upsert: {
        where: {
          id: prop.order.alpacaAccount.id !== undefined ? {
              equals: prop.order.alpacaAccount.id
            } : undefined,
          userId: prop.order.alpacaAccount.userId !== undefined ? {
              equals: prop.order.alpacaAccount.userId
            } : undefined,
        },
        update: {
          id: prop.order.alpacaAccount.id !== undefined ? {
              set: prop.order.alpacaAccount.id
            } : undefined,
          type: prop.order.alpacaAccount.type !== undefined ? {
              set: prop.order.alpacaAccount.type
            } : undefined,
          APIKey: prop.order.alpacaAccount.APIKey !== undefined ? {
              set: prop.order.alpacaAccount.APIKey
            } : undefined,
          APISecret: prop.order.alpacaAccount.APISecret !== undefined ? {
              set: prop.order.alpacaAccount.APISecret
            } : undefined,
          configuration: prop.order.alpacaAccount.configuration !== undefined ? {
              set: prop.order.alpacaAccount.configuration
            } : undefined,
          marketOpen: prop.order.alpacaAccount.marketOpen !== undefined ? {
              set: prop.order.alpacaAccount.marketOpen
            } : undefined,
          realTime: prop.order.alpacaAccount.realTime !== undefined ? {
              set: prop.order.alpacaAccount.realTime
            } : undefined,
          tradeAllocationPct: prop.order.alpacaAccount.tradeAllocationPct !== undefined ? {
              set: prop.order.alpacaAccount.tradeAllocationPct
            } : undefined,
          minPercentageChange: prop.order.alpacaAccount.minPercentageChange !== undefined ? {
              set: prop.order.alpacaAccount.minPercentageChange
            } : undefined,
          volumeThreshold: prop.order.alpacaAccount.volumeThreshold !== undefined ? {
              set: prop.order.alpacaAccount.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: prop.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
              set: prop.order.alpacaAccount.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: prop.order.alpacaAccount.portfolioTrailPercent !== undefined ? {
              set: prop.order.alpacaAccount.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: prop.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
              set: prop.order.alpacaAccount.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: prop.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
              set: prop.order.alpacaAccount.reducedPortfolioTrailPercent
            } : undefined,
      user: prop.order.alpacaAccount.user ? 
      typeof prop.order.alpacaAccount.user === 'object' && Object.keys(prop.order.alpacaAccount.user).length === 1 && (Object.keys(prop.order.alpacaAccount.user)[0] === 'id' || Object.keys(prop.order.alpacaAccount.user)[0] === 'symbol')
? {
      connect: {
        id: prop.order.alpacaAccount.user.id
      }
} : { upsert: {
          where: {
            id: prop.order.alpacaAccount.user.id !== undefined ? {
                equals: prop.order.alpacaAccount.user.id
              } : undefined,
            name: prop.order.alpacaAccount.user.name !== undefined ? {
                equals: prop.order.alpacaAccount.user.name
              } : undefined,
            email: prop.order.alpacaAccount.user.email !== undefined ? {
                equals: prop.order.alpacaAccount.user.email
              } : undefined,
            customerId: prop.order.alpacaAccount.user.customerId !== undefined ? {
                equals: prop.order.alpacaAccount.user.customerId
              } : undefined,
          },
          update: {
            id: prop.order.alpacaAccount.user.id !== undefined ? {
                set: prop.order.alpacaAccount.user.id
              } : undefined,
            name: prop.order.alpacaAccount.user.name !== undefined ? {
                set: prop.order.alpacaAccount.user.name
              } : undefined,
            email: prop.order.alpacaAccount.user.email !== undefined ? {
                set: prop.order.alpacaAccount.user.email
              } : undefined,
            emailVerified: prop.order.alpacaAccount.user.emailVerified !== undefined ? {
                set: prop.order.alpacaAccount.user.emailVerified
              } : undefined,
            image: prop.order.alpacaAccount.user.image !== undefined ? {
                set: prop.order.alpacaAccount.user.image
              } : undefined,
            role: prop.order.alpacaAccount.user.role !== undefined ? {
                set: prop.order.alpacaAccount.user.role
              } : undefined,
            bio: prop.order.alpacaAccount.user.bio !== undefined ? {
                set: prop.order.alpacaAccount.user.bio
              } : undefined,
            jobTitle: prop.order.alpacaAccount.user.jobTitle !== undefined ? {
                set: prop.order.alpacaAccount.user.jobTitle
              } : undefined,
            currentAccount: prop.order.alpacaAccount.user.currentAccount !== undefined ? {
                set: prop.order.alpacaAccount.user.currentAccount
              } : undefined,
            plan: prop.order.alpacaAccount.user.plan !== undefined ? {
                set: prop.order.alpacaAccount.user.plan
              } : undefined,
            openaiAPIKey: prop.order.alpacaAccount.user.openaiAPIKey !== undefined ? {
                set: prop.order.alpacaAccount.user.openaiAPIKey
              } : undefined,
            openaiModel: prop.order.alpacaAccount.user.openaiModel !== undefined ? {
                set: prop.order.alpacaAccount.user.openaiModel
              } : undefined,
          },
          create: {
            name: prop.order.alpacaAccount.user.name !== undefined ? prop.order.alpacaAccount.user.name : undefined,
            email: prop.order.alpacaAccount.user.email !== undefined ? prop.order.alpacaAccount.user.email : undefined,
            emailVerified: prop.order.alpacaAccount.user.emailVerified !== undefined ? prop.order.alpacaAccount.user.emailVerified : undefined,
            image: prop.order.alpacaAccount.user.image !== undefined ? prop.order.alpacaAccount.user.image : undefined,
            role: prop.order.alpacaAccount.user.role !== undefined ? prop.order.alpacaAccount.user.role : undefined,
            bio: prop.order.alpacaAccount.user.bio !== undefined ? prop.order.alpacaAccount.user.bio : undefined,
            jobTitle: prop.order.alpacaAccount.user.jobTitle !== undefined ? prop.order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.order.alpacaAccount.user.currentAccount !== undefined ? prop.order.alpacaAccount.user.currentAccount : undefined,
            plan: prop.order.alpacaAccount.user.plan !== undefined ? prop.order.alpacaAccount.user.plan : undefined,
            openaiAPIKey: prop.order.alpacaAccount.user.openaiAPIKey !== undefined ? prop.order.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: prop.order.alpacaAccount.user.openaiModel !== undefined ? prop.order.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      positions: prop.order.alpacaAccount.positions ? 
      Array.isArray(prop.order.alpacaAccount.positions) && prop.order.alpacaAccount.positions.length > 0 && prop.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.order.alpacaAccount.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: prop.order.alpacaAccount.alerts ? 
      Array.isArray(prop.order.alpacaAccount.alerts) && prop.order.alpacaAccount.alerts.length > 0 && prop.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.order.alpacaAccount.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.order.alpacaAccount.alerts.map((item: any) => ({
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
          type: prop.order.alpacaAccount.type !== undefined ? prop.order.alpacaAccount.type : undefined,
          APIKey: prop.order.alpacaAccount.APIKey !== undefined ? prop.order.alpacaAccount.APIKey : undefined,
          APISecret: prop.order.alpacaAccount.APISecret !== undefined ? prop.order.alpacaAccount.APISecret : undefined,
          configuration: prop.order.alpacaAccount.configuration !== undefined ? prop.order.alpacaAccount.configuration : undefined,
          marketOpen: prop.order.alpacaAccount.marketOpen !== undefined ? prop.order.alpacaAccount.marketOpen : undefined,
          realTime: prop.order.alpacaAccount.realTime !== undefined ? prop.order.alpacaAccount.realTime : undefined,
          tradeAllocationPct: prop.order.alpacaAccount.tradeAllocationPct !== undefined ? prop.order.alpacaAccount.tradeAllocationPct : undefined,
          minPercentageChange: prop.order.alpacaAccount.minPercentageChange !== undefined ? prop.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: prop.order.alpacaAccount.volumeThreshold !== undefined ? prop.order.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: prop.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? prop.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: prop.order.alpacaAccount.portfolioTrailPercent !== undefined ? prop.order.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: prop.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? prop.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: prop.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? prop.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
      user: prop.order.alpacaAccount.user ? 
        typeof prop.order.alpacaAccount.user === 'object' && Object.keys(prop.order.alpacaAccount.user).length === 1 && Object.keys(prop.order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: prop.order.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.order.alpacaAccount.user.id !== undefined ? prop.order.alpacaAccount.user.id : undefined,
            email: prop.order.alpacaAccount.user.email !== undefined ? prop.order.alpacaAccount.user.email : undefined,
            name: prop.order.alpacaAccount.user.name !== undefined ? {
                equals: prop.order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: prop.order.alpacaAccount.user.name !== undefined ? prop.order.alpacaAccount.user.name : undefined,
            email: prop.order.alpacaAccount.user.email !== undefined ? prop.order.alpacaAccount.user.email : undefined,
            emailVerified: prop.order.alpacaAccount.user.emailVerified !== undefined ? prop.order.alpacaAccount.user.emailVerified : undefined,
            image: prop.order.alpacaAccount.user.image !== undefined ? prop.order.alpacaAccount.user.image : undefined,
            role: prop.order.alpacaAccount.user.role !== undefined ? prop.order.alpacaAccount.user.role : undefined,
            bio: prop.order.alpacaAccount.user.bio !== undefined ? prop.order.alpacaAccount.user.bio : undefined,
            jobTitle: prop.order.alpacaAccount.user.jobTitle !== undefined ? prop.order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.order.alpacaAccount.user.currentAccount !== undefined ? prop.order.alpacaAccount.user.currentAccount : undefined,
            plan: prop.order.alpacaAccount.user.plan !== undefined ? prop.order.alpacaAccount.user.plan : undefined,
            openaiAPIKey: prop.order.alpacaAccount.user.openaiAPIKey !== undefined ? prop.order.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: prop.order.alpacaAccount.user.openaiModel !== undefined ? prop.order.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      positions: prop.order.alpacaAccount.positions ? 
        Array.isArray(prop.order.alpacaAccount.positions) && prop.order.alpacaAccount.positions.length > 0 &&  prop.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: prop.order.alpacaAccount.alerts ? 
        Array.isArray(prop.order.alpacaAccount.alerts) && prop.order.alpacaAccount.alerts.length > 0 &&  prop.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.alpacaAccount.alerts.map((item: any) => ({
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
    asset: prop.order.asset ? 
    typeof prop.order.asset === 'object' && Object.keys(prop.order.asset).length === 1 && (Object.keys(prop.order.asset)[0] === 'id' || Object.keys(prop.order.asset)[0] === 'symbol')
? {
    connect: {
      id: prop.order.asset.id
    }
} : { upsert: {
        where: {
          id: prop.order.asset.id !== undefined ? {
              equals: prop.order.asset.id
            } : undefined,
          symbol: prop.order.asset.symbol !== undefined ? {
              equals: prop.order.asset.symbol
            } : undefined,
          name: prop.order.asset.name !== undefined ? {
              equals: prop.order.asset.name
            } : undefined,
        },
        update: {
          id: prop.order.asset.id !== undefined ? {
              set: prop.order.asset.id
            } : undefined,
          symbol: prop.order.asset.symbol !== undefined ? {
              set: prop.order.asset.symbol
            } : undefined,
          name: prop.order.asset.name !== undefined ? {
              set: prop.order.asset.name
            } : undefined,
          type: prop.order.asset.type !== undefined ? {
              set: prop.order.asset.type
            } : undefined,
          logoUrl: prop.order.asset.logoUrl !== undefined ? {
              set: prop.order.asset.logoUrl
            } : undefined,
          description: prop.order.asset.description !== undefined ? {
              set: prop.order.asset.description
            } : undefined,
          cik: prop.order.asset.cik !== undefined ? {
              set: prop.order.asset.cik
            } : undefined,
          exchange: prop.order.asset.exchange !== undefined ? {
              set: prop.order.asset.exchange
            } : undefined,
          currency: prop.order.asset.currency !== undefined ? {
              set: prop.order.asset.currency
            } : undefined,
          country: prop.order.asset.country !== undefined ? {
              set: prop.order.asset.country
            } : undefined,
          sector: prop.order.asset.sector !== undefined ? {
              set: prop.order.asset.sector
            } : undefined,
          industry: prop.order.asset.industry !== undefined ? {
              set: prop.order.asset.industry
            } : undefined,
          address: prop.order.asset.address !== undefined ? {
              set: prop.order.asset.address
            } : undefined,
          officialSite: prop.order.asset.officialSite !== undefined ? {
              set: prop.order.asset.officialSite
            } : undefined,
          fiscalYearEnd: prop.order.asset.fiscalYearEnd !== undefined ? {
              set: prop.order.asset.fiscalYearEnd
            } : undefined,
          latestQuarter: prop.order.asset.latestQuarter !== undefined ? {
              set: prop.order.asset.latestQuarter
            } : undefined,
          marketCapitalization: prop.order.asset.marketCapitalization !== undefined ? {
              set: prop.order.asset.marketCapitalization
            } : undefined,
          ebitda: prop.order.asset.ebitda !== undefined ? {
              set: prop.order.asset.ebitda
            } : undefined,
          peRatio: prop.order.asset.peRatio !== undefined ? {
              set: prop.order.asset.peRatio
            } : undefined,
          pegRatio: prop.order.asset.pegRatio !== undefined ? {
              set: prop.order.asset.pegRatio
            } : undefined,
          bookValue: prop.order.asset.bookValue !== undefined ? {
              set: prop.order.asset.bookValue
            } : undefined,
          dividendPerShare: prop.order.asset.dividendPerShare !== undefined ? {
              set: prop.order.asset.dividendPerShare
            } : undefined,
          dividendYield: prop.order.asset.dividendYield !== undefined ? {
              set: prop.order.asset.dividendYield
            } : undefined,
          eps: prop.order.asset.eps !== undefined ? {
              set: prop.order.asset.eps
            } : undefined,
          revenuePerShareTTM: prop.order.asset.revenuePerShareTTM !== undefined ? {
              set: prop.order.asset.revenuePerShareTTM
            } : undefined,
          profitMargin: prop.order.asset.profitMargin !== undefined ? {
              set: prop.order.asset.profitMargin
            } : undefined,
          operatingMarginTTM: prop.order.asset.operatingMarginTTM !== undefined ? {
              set: prop.order.asset.operatingMarginTTM
            } : undefined,
          returnOnAssetsTTM: prop.order.asset.returnOnAssetsTTM !== undefined ? {
              set: prop.order.asset.returnOnAssetsTTM
            } : undefined,
          returnOnEquityTTM: prop.order.asset.returnOnEquityTTM !== undefined ? {
              set: prop.order.asset.returnOnEquityTTM
            } : undefined,
          revenueTTM: prop.order.asset.revenueTTM !== undefined ? {
              set: prop.order.asset.revenueTTM
            } : undefined,
          grossProfitTTM: prop.order.asset.grossProfitTTM !== undefined ? {
              set: prop.order.asset.grossProfitTTM
            } : undefined,
          dilutedEPSTTM: prop.order.asset.dilutedEPSTTM !== undefined ? {
              set: prop.order.asset.dilutedEPSTTM
            } : undefined,
          quarterlyEarningsGrowthYOY: prop.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: prop.order.asset.quarterlyEarningsGrowthYOY
            } : undefined,
          quarterlyRevenueGrowthYOY: prop.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: prop.order.asset.quarterlyRevenueGrowthYOY
            } : undefined,
          analystTargetPrice: prop.order.asset.analystTargetPrice !== undefined ? {
              set: prop.order.asset.analystTargetPrice
            } : undefined,
          analystRatingStrongBuy: prop.order.asset.analystRatingStrongBuy !== undefined ? {
              set: prop.order.asset.analystRatingStrongBuy
            } : undefined,
          analystRatingBuy: prop.order.asset.analystRatingBuy !== undefined ? {
              set: prop.order.asset.analystRatingBuy
            } : undefined,
          analystRatingHold: prop.order.asset.analystRatingHold !== undefined ? {
              set: prop.order.asset.analystRatingHold
            } : undefined,
          analystRatingSell: prop.order.asset.analystRatingSell !== undefined ? {
              set: prop.order.asset.analystRatingSell
            } : undefined,
          analystRatingStrongSell: prop.order.asset.analystRatingStrongSell !== undefined ? {
              set: prop.order.asset.analystRatingStrongSell
            } : undefined,
          trailingPE: prop.order.asset.trailingPE !== undefined ? {
              set: prop.order.asset.trailingPE
            } : undefined,
          forwardPE: prop.order.asset.forwardPE !== undefined ? {
              set: prop.order.asset.forwardPE
            } : undefined,
          priceToSalesRatioTTM: prop.order.asset.priceToSalesRatioTTM !== undefined ? {
              set: prop.order.asset.priceToSalesRatioTTM
            } : undefined,
          priceToBookRatio: prop.order.asset.priceToBookRatio !== undefined ? {
              set: prop.order.asset.priceToBookRatio
            } : undefined,
          evToRevenue: prop.order.asset.evToRevenue !== undefined ? {
              set: prop.order.asset.evToRevenue
            } : undefined,
          evToEbitda: prop.order.asset.evToEbitda !== undefined ? {
              set: prop.order.asset.evToEbitda
            } : undefined,
          beta: prop.order.asset.beta !== undefined ? {
              set: prop.order.asset.beta
            } : undefined,
          week52High: prop.order.asset.week52High !== undefined ? {
              set: prop.order.asset.week52High
            } : undefined,
          week52Low: prop.order.asset.week52Low !== undefined ? {
              set: prop.order.asset.week52Low
            } : undefined,
          day50MovingAverage: prop.order.asset.day50MovingAverage !== undefined ? {
              set: prop.order.asset.day50MovingAverage
            } : undefined,
          day200MovingAverage: prop.order.asset.day200MovingAverage !== undefined ? {
              set: prop.order.asset.day200MovingAverage
            } : undefined,
          sharesOutstanding: prop.order.asset.sharesOutstanding !== undefined ? {
              set: prop.order.asset.sharesOutstanding
            } : undefined,
          dividendDate: prop.order.asset.dividendDate !== undefined ? {
              set: prop.order.asset.dividendDate
            } : undefined,
          exDividendDate: prop.order.asset.exDividendDate !== undefined ? {
              set: prop.order.asset.exDividendDate
            } : undefined,
          askPrice: prop.order.asset.askPrice !== undefined ? {
              set: prop.order.asset.askPrice
            } : undefined,
          bidPrice: prop.order.asset.bidPrice !== undefined ? {
              set: prop.order.asset.bidPrice
            } : undefined,
      positions: prop.order.asset.positions ? 
      Array.isArray(prop.order.asset.positions) && prop.order.asset.positions.length > 0 && prop.order.asset.positions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.order.asset.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.order.asset.positions.map((item: any) => ({
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
      newsMentions: prop.order.asset.newsMentions ? 
      Array.isArray(prop.order.asset.newsMentions) && prop.order.asset.newsMentions.length > 0 && prop.order.asset.newsMentions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.order.asset.newsMentions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.order.asset.newsMentions.map((item: any) => ({
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
      contracts: prop.order.asset.contracts ? 
      Array.isArray(prop.order.asset.contracts) && prop.order.asset.contracts.length > 0 && prop.order.asset.contracts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.order.asset.contracts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.order.asset.contracts.map((item: any) => ({
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
          symbol: prop.order.asset.symbol !== undefined ? prop.order.asset.symbol : undefined,
          name: prop.order.asset.name !== undefined ? prop.order.asset.name : undefined,
          type: prop.order.asset.type !== undefined ? prop.order.asset.type : undefined,
          logoUrl: prop.order.asset.logoUrl !== undefined ? prop.order.asset.logoUrl : undefined,
          description: prop.order.asset.description !== undefined ? prop.order.asset.description : undefined,
          cik: prop.order.asset.cik !== undefined ? prop.order.asset.cik : undefined,
          exchange: prop.order.asset.exchange !== undefined ? prop.order.asset.exchange : undefined,
          currency: prop.order.asset.currency !== undefined ? prop.order.asset.currency : undefined,
          country: prop.order.asset.country !== undefined ? prop.order.asset.country : undefined,
          sector: prop.order.asset.sector !== undefined ? prop.order.asset.sector : undefined,
          industry: prop.order.asset.industry !== undefined ? prop.order.asset.industry : undefined,
          address: prop.order.asset.address !== undefined ? prop.order.asset.address : undefined,
          officialSite: prop.order.asset.officialSite !== undefined ? prop.order.asset.officialSite : undefined,
          fiscalYearEnd: prop.order.asset.fiscalYearEnd !== undefined ? prop.order.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.order.asset.latestQuarter !== undefined ? prop.order.asset.latestQuarter : undefined,
          marketCapitalization: prop.order.asset.marketCapitalization !== undefined ? prop.order.asset.marketCapitalization : undefined,
          ebitda: prop.order.asset.ebitda !== undefined ? prop.order.asset.ebitda : undefined,
          peRatio: prop.order.asset.peRatio !== undefined ? prop.order.asset.peRatio : undefined,
          pegRatio: prop.order.asset.pegRatio !== undefined ? prop.order.asset.pegRatio : undefined,
          bookValue: prop.order.asset.bookValue !== undefined ? prop.order.asset.bookValue : undefined,
          dividendPerShare: prop.order.asset.dividendPerShare !== undefined ? prop.order.asset.dividendPerShare : undefined,
          dividendYield: prop.order.asset.dividendYield !== undefined ? prop.order.asset.dividendYield : undefined,
          eps: prop.order.asset.eps !== undefined ? prop.order.asset.eps : undefined,
          revenuePerShareTTM: prop.order.asset.revenuePerShareTTM !== undefined ? prop.order.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.order.asset.profitMargin !== undefined ? prop.order.asset.profitMargin : undefined,
          operatingMarginTTM: prop.order.asset.operatingMarginTTM !== undefined ? prop.order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.order.asset.returnOnAssetsTTM !== undefined ? prop.order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.order.asset.returnOnEquityTTM !== undefined ? prop.order.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.order.asset.revenueTTM !== undefined ? prop.order.asset.revenueTTM : undefined,
          grossProfitTTM: prop.order.asset.grossProfitTTM !== undefined ? prop.order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.order.asset.dilutedEPSTTM !== undefined ? prop.order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.order.asset.analystTargetPrice !== undefined ? prop.order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.order.asset.analystRatingStrongBuy !== undefined ? prop.order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.order.asset.analystRatingBuy !== undefined ? prop.order.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.order.asset.analystRatingHold !== undefined ? prop.order.asset.analystRatingHold : undefined,
          analystRatingSell: prop.order.asset.analystRatingSell !== undefined ? prop.order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.order.asset.analystRatingStrongSell !== undefined ? prop.order.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.order.asset.trailingPE !== undefined ? prop.order.asset.trailingPE : undefined,
          forwardPE: prop.order.asset.forwardPE !== undefined ? prop.order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.order.asset.priceToSalesRatioTTM !== undefined ? prop.order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.order.asset.priceToBookRatio !== undefined ? prop.order.asset.priceToBookRatio : undefined,
          evToRevenue: prop.order.asset.evToRevenue !== undefined ? prop.order.asset.evToRevenue : undefined,
          evToEbitda: prop.order.asset.evToEbitda !== undefined ? prop.order.asset.evToEbitda : undefined,
          beta: prop.order.asset.beta !== undefined ? prop.order.asset.beta : undefined,
          week52High: prop.order.asset.week52High !== undefined ? prop.order.asset.week52High : undefined,
          week52Low: prop.order.asset.week52Low !== undefined ? prop.order.asset.week52Low : undefined,
          day50MovingAverage: prop.order.asset.day50MovingAverage !== undefined ? prop.order.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.order.asset.day200MovingAverage !== undefined ? prop.order.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.order.asset.sharesOutstanding !== undefined ? prop.order.asset.sharesOutstanding : undefined,
          dividendDate: prop.order.asset.dividendDate !== undefined ? prop.order.asset.dividendDate : undefined,
          exDividendDate: prop.order.asset.exDividendDate !== undefined ? prop.order.asset.exDividendDate : undefined,
          askPrice: prop.order.asset.askPrice !== undefined ? prop.order.asset.askPrice : undefined,
          bidPrice: prop.order.asset.bidPrice !== undefined ? prop.order.asset.bidPrice : undefined,
      positions: prop.order.asset.positions ? 
        Array.isArray(prop.order.asset.positions) && prop.order.asset.positions.length > 0 &&  prop.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.asset.positions.map((item: any) => ({
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
      newsMentions: prop.order.asset.newsMentions ? 
        Array.isArray(prop.order.asset.newsMentions) && prop.order.asset.newsMentions.length > 0 &&  prop.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.asset.newsMentions.map((item: any) => ({
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
      contracts: prop.order.asset.contracts ? 
        Array.isArray(prop.order.asset.contracts) && prop.order.asset.contracts.length > 0 &&  prop.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.asset.contracts.map((item: any) => ({
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
    contract: prop.order.contract ? 
    typeof prop.order.contract === 'object' && Object.keys(prop.order.contract).length === 1 && (Object.keys(prop.order.contract)[0] === 'id' || Object.keys(prop.order.contract)[0] === 'symbol')
? {
    connect: {
      id: prop.order.contract.id
    }
} : { upsert: {
        where: {
          id: prop.order.contract.id !== undefined ? {
              equals: prop.order.contract.id
            } : undefined,
          alpacaId: prop.order.contract.alpacaId !== undefined ? {
              equals: prop.order.contract.alpacaId
            } : undefined,
          symbol: prop.order.contract.symbol !== undefined ? {
              equals: prop.order.contract.symbol
            } : undefined,
          name: prop.order.contract.name !== undefined ? {
              equals: prop.order.contract.name
            } : undefined,
          underlyingAssetId: prop.order.contract.underlyingAssetId !== undefined ? {
              equals: prop.order.contract.underlyingAssetId
            } : undefined,
          assetId: prop.order.contract.assetId !== undefined ? {
              equals: prop.order.contract.assetId
            } : undefined,
          orderId: prop.order.contract.orderId !== undefined ? {
              equals: prop.order.contract.orderId
            } : undefined,
        },
        update: {
          id: prop.order.contract.id !== undefined ? {
              set: prop.order.contract.id
            } : undefined,
          alpacaId: prop.order.contract.alpacaId !== undefined ? {
              set: prop.order.contract.alpacaId
            } : undefined,
          symbol: prop.order.contract.symbol !== undefined ? {
              set: prop.order.contract.symbol
            } : undefined,
          name: prop.order.contract.name !== undefined ? {
              set: prop.order.contract.name
            } : undefined,
          status: prop.order.contract.status !== undefined ? {
              set: prop.order.contract.status
            } : undefined,
          tradable: prop.order.contract.tradable !== undefined ? {
              set: prop.order.contract.tradable
            } : undefined,
          expirationDate: prop.order.contract.expirationDate !== undefined ? {
              set: prop.order.contract.expirationDate
            } : undefined,
          rootSymbol: prop.order.contract.rootSymbol !== undefined ? {
              set: prop.order.contract.rootSymbol
            } : undefined,
          underlyingSymbol: prop.order.contract.underlyingSymbol !== undefined ? {
              set: prop.order.contract.underlyingSymbol
            } : undefined,
          underlyingAssetId: prop.order.contract.underlyingAssetId !== undefined ? {
              set: prop.order.contract.underlyingAssetId
            } : undefined,
          type: prop.order.contract.type !== undefined ? {
              set: prop.order.contract.type
            } : undefined,
          style: prop.order.contract.style !== undefined ? {
              set: prop.order.contract.style
            } : undefined,
          strikePrice: prop.order.contract.strikePrice !== undefined ? {
              set: prop.order.contract.strikePrice
            } : undefined,
          multiplier: prop.order.contract.multiplier !== undefined ? {
              set: prop.order.contract.multiplier
            } : undefined,
          size: prop.order.contract.size !== undefined ? {
              set: prop.order.contract.size
            } : undefined,
          openInterest: prop.order.contract.openInterest !== undefined ? {
              set: prop.order.contract.openInterest
            } : undefined,
          openInterestDate: prop.order.contract.openInterestDate !== undefined ? {
              set: prop.order.contract.openInterestDate
            } : undefined,
          closePrice: prop.order.contract.closePrice !== undefined ? {
              set: prop.order.contract.closePrice
            } : undefined,
          closePriceDate: prop.order.contract.closePriceDate !== undefined ? {
              set: prop.order.contract.closePriceDate
            } : undefined,
          ppind: prop.order.contract.ppind !== undefined ? {
              set: prop.order.contract.ppind
            } : undefined,
          orderId: prop.order.contract.orderId !== undefined ? {
              set: prop.order.contract.orderId
            } : undefined,
      deliverables: prop.order.contract.deliverables ? 
      Array.isArray(prop.order.contract.deliverables) && prop.order.contract.deliverables.length > 0 && prop.order.contract.deliverables.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.order.contract.deliverables.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.order.contract.deliverables.map((item: any) => ({
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
      asset: prop.order.contract.asset ? 
      typeof prop.order.contract.asset === 'object' && Object.keys(prop.order.contract.asset).length === 1 && (Object.keys(prop.order.contract.asset)[0] === 'id' || Object.keys(prop.order.contract.asset)[0] === 'symbol')
? {
      connect: {
        id: prop.order.contract.asset.id
      }
} : { upsert: {
          where: {
            id: prop.order.contract.asset.id !== undefined ? {
                equals: prop.order.contract.asset.id
              } : undefined,
            symbol: prop.order.contract.asset.symbol !== undefined ? {
                equals: prop.order.contract.asset.symbol
              } : undefined,
            name: prop.order.contract.asset.name !== undefined ? {
                equals: prop.order.contract.asset.name
              } : undefined,
          },
          update: {
            id: prop.order.contract.asset.id !== undefined ? {
                set: prop.order.contract.asset.id
              } : undefined,
            symbol: prop.order.contract.asset.symbol !== undefined ? {
                set: prop.order.contract.asset.symbol
              } : undefined,
            name: prop.order.contract.asset.name !== undefined ? {
                set: prop.order.contract.asset.name
              } : undefined,
            type: prop.order.contract.asset.type !== undefined ? {
                set: prop.order.contract.asset.type
              } : undefined,
            logoUrl: prop.order.contract.asset.logoUrl !== undefined ? {
                set: prop.order.contract.asset.logoUrl
              } : undefined,
            description: prop.order.contract.asset.description !== undefined ? {
                set: prop.order.contract.asset.description
              } : undefined,
            cik: prop.order.contract.asset.cik !== undefined ? {
                set: prop.order.contract.asset.cik
              } : undefined,
            exchange: prop.order.contract.asset.exchange !== undefined ? {
                set: prop.order.contract.asset.exchange
              } : undefined,
            currency: prop.order.contract.asset.currency !== undefined ? {
                set: prop.order.contract.asset.currency
              } : undefined,
            country: prop.order.contract.asset.country !== undefined ? {
                set: prop.order.contract.asset.country
              } : undefined,
            sector: prop.order.contract.asset.sector !== undefined ? {
                set: prop.order.contract.asset.sector
              } : undefined,
            industry: prop.order.contract.asset.industry !== undefined ? {
                set: prop.order.contract.asset.industry
              } : undefined,
            address: prop.order.contract.asset.address !== undefined ? {
                set: prop.order.contract.asset.address
              } : undefined,
            officialSite: prop.order.contract.asset.officialSite !== undefined ? {
                set: prop.order.contract.asset.officialSite
              } : undefined,
            fiscalYearEnd: prop.order.contract.asset.fiscalYearEnd !== undefined ? {
                set: prop.order.contract.asset.fiscalYearEnd
              } : undefined,
            latestQuarter: prop.order.contract.asset.latestQuarter !== undefined ? {
                set: prop.order.contract.asset.latestQuarter
              } : undefined,
            marketCapitalization: prop.order.contract.asset.marketCapitalization !== undefined ? {
                set: prop.order.contract.asset.marketCapitalization
              } : undefined,
            ebitda: prop.order.contract.asset.ebitda !== undefined ? {
                set: prop.order.contract.asset.ebitda
              } : undefined,
            peRatio: prop.order.contract.asset.peRatio !== undefined ? {
                set: prop.order.contract.asset.peRatio
              } : undefined,
            pegRatio: prop.order.contract.asset.pegRatio !== undefined ? {
                set: prop.order.contract.asset.pegRatio
              } : undefined,
            bookValue: prop.order.contract.asset.bookValue !== undefined ? {
                set: prop.order.contract.asset.bookValue
              } : undefined,
            dividendPerShare: prop.order.contract.asset.dividendPerShare !== undefined ? {
                set: prop.order.contract.asset.dividendPerShare
              } : undefined,
            dividendYield: prop.order.contract.asset.dividendYield !== undefined ? {
                set: prop.order.contract.asset.dividendYield
              } : undefined,
            eps: prop.order.contract.asset.eps !== undefined ? {
                set: prop.order.contract.asset.eps
              } : undefined,
            revenuePerShareTTM: prop.order.contract.asset.revenuePerShareTTM !== undefined ? {
                set: prop.order.contract.asset.revenuePerShareTTM
              } : undefined,
            profitMargin: prop.order.contract.asset.profitMargin !== undefined ? {
                set: prop.order.contract.asset.profitMargin
              } : undefined,
            operatingMarginTTM: prop.order.contract.asset.operatingMarginTTM !== undefined ? {
                set: prop.order.contract.asset.operatingMarginTTM
              } : undefined,
            returnOnAssetsTTM: prop.order.contract.asset.returnOnAssetsTTM !== undefined ? {
                set: prop.order.contract.asset.returnOnAssetsTTM
              } : undefined,
            returnOnEquityTTM: prop.order.contract.asset.returnOnEquityTTM !== undefined ? {
                set: prop.order.contract.asset.returnOnEquityTTM
              } : undefined,
            revenueTTM: prop.order.contract.asset.revenueTTM !== undefined ? {
                set: prop.order.contract.asset.revenueTTM
              } : undefined,
            grossProfitTTM: prop.order.contract.asset.grossProfitTTM !== undefined ? {
                set: prop.order.contract.asset.grossProfitTTM
              } : undefined,
            dilutedEPSTTM: prop.order.contract.asset.dilutedEPSTTM !== undefined ? {
                set: prop.order.contract.asset.dilutedEPSTTM
              } : undefined,
            quarterlyEarningsGrowthYOY: prop.order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: prop.order.contract.asset.quarterlyEarningsGrowthYOY
              } : undefined,
            quarterlyRevenueGrowthYOY: prop.order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: prop.order.contract.asset.quarterlyRevenueGrowthYOY
              } : undefined,
            analystTargetPrice: prop.order.contract.asset.analystTargetPrice !== undefined ? {
                set: prop.order.contract.asset.analystTargetPrice
              } : undefined,
            analystRatingStrongBuy: prop.order.contract.asset.analystRatingStrongBuy !== undefined ? {
                set: prop.order.contract.asset.analystRatingStrongBuy
              } : undefined,
            analystRatingBuy: prop.order.contract.asset.analystRatingBuy !== undefined ? {
                set: prop.order.contract.asset.analystRatingBuy
              } : undefined,
            analystRatingHold: prop.order.contract.asset.analystRatingHold !== undefined ? {
                set: prop.order.contract.asset.analystRatingHold
              } : undefined,
            analystRatingSell: prop.order.contract.asset.analystRatingSell !== undefined ? {
                set: prop.order.contract.asset.analystRatingSell
              } : undefined,
            analystRatingStrongSell: prop.order.contract.asset.analystRatingStrongSell !== undefined ? {
                set: prop.order.contract.asset.analystRatingStrongSell
              } : undefined,
            trailingPE: prop.order.contract.asset.trailingPE !== undefined ? {
                set: prop.order.contract.asset.trailingPE
              } : undefined,
            forwardPE: prop.order.contract.asset.forwardPE !== undefined ? {
                set: prop.order.contract.asset.forwardPE
              } : undefined,
            priceToSalesRatioTTM: prop.order.contract.asset.priceToSalesRatioTTM !== undefined ? {
                set: prop.order.contract.asset.priceToSalesRatioTTM
              } : undefined,
            priceToBookRatio: prop.order.contract.asset.priceToBookRatio !== undefined ? {
                set: prop.order.contract.asset.priceToBookRatio
              } : undefined,
            evToRevenue: prop.order.contract.asset.evToRevenue !== undefined ? {
                set: prop.order.contract.asset.evToRevenue
              } : undefined,
            evToEbitda: prop.order.contract.asset.evToEbitda !== undefined ? {
                set: prop.order.contract.asset.evToEbitda
              } : undefined,
            beta: prop.order.contract.asset.beta !== undefined ? {
                set: prop.order.contract.asset.beta
              } : undefined,
            week52High: prop.order.contract.asset.week52High !== undefined ? {
                set: prop.order.contract.asset.week52High
              } : undefined,
            week52Low: prop.order.contract.asset.week52Low !== undefined ? {
                set: prop.order.contract.asset.week52Low
              } : undefined,
            day50MovingAverage: prop.order.contract.asset.day50MovingAverage !== undefined ? {
                set: prop.order.contract.asset.day50MovingAverage
              } : undefined,
            day200MovingAverage: prop.order.contract.asset.day200MovingAverage !== undefined ? {
                set: prop.order.contract.asset.day200MovingAverage
              } : undefined,
            sharesOutstanding: prop.order.contract.asset.sharesOutstanding !== undefined ? {
                set: prop.order.contract.asset.sharesOutstanding
              } : undefined,
            dividendDate: prop.order.contract.asset.dividendDate !== undefined ? {
                set: prop.order.contract.asset.dividendDate
              } : undefined,
            exDividendDate: prop.order.contract.asset.exDividendDate !== undefined ? {
                set: prop.order.contract.asset.exDividendDate
              } : undefined,
            askPrice: prop.order.contract.asset.askPrice !== undefined ? {
                set: prop.order.contract.asset.askPrice
              } : undefined,
            bidPrice: prop.order.contract.asset.bidPrice !== undefined ? {
                set: prop.order.contract.asset.bidPrice
              } : undefined,
          },
          create: {
            symbol: prop.order.contract.asset.symbol !== undefined ? prop.order.contract.asset.symbol : undefined,
            name: prop.order.contract.asset.name !== undefined ? prop.order.contract.asset.name : undefined,
            type: prop.order.contract.asset.type !== undefined ? prop.order.contract.asset.type : undefined,
            logoUrl: prop.order.contract.asset.logoUrl !== undefined ? prop.order.contract.asset.logoUrl : undefined,
            description: prop.order.contract.asset.description !== undefined ? prop.order.contract.asset.description : undefined,
            cik: prop.order.contract.asset.cik !== undefined ? prop.order.contract.asset.cik : undefined,
            exchange: prop.order.contract.asset.exchange !== undefined ? prop.order.contract.asset.exchange : undefined,
            currency: prop.order.contract.asset.currency !== undefined ? prop.order.contract.asset.currency : undefined,
            country: prop.order.contract.asset.country !== undefined ? prop.order.contract.asset.country : undefined,
            sector: prop.order.contract.asset.sector !== undefined ? prop.order.contract.asset.sector : undefined,
            industry: prop.order.contract.asset.industry !== undefined ? prop.order.contract.asset.industry : undefined,
            address: prop.order.contract.asset.address !== undefined ? prop.order.contract.asset.address : undefined,
            officialSite: prop.order.contract.asset.officialSite !== undefined ? prop.order.contract.asset.officialSite : undefined,
            fiscalYearEnd: prop.order.contract.asset.fiscalYearEnd !== undefined ? prop.order.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.order.contract.asset.latestQuarter !== undefined ? prop.order.contract.asset.latestQuarter : undefined,
            marketCapitalization: prop.order.contract.asset.marketCapitalization !== undefined ? prop.order.contract.asset.marketCapitalization : undefined,
            ebitda: prop.order.contract.asset.ebitda !== undefined ? prop.order.contract.asset.ebitda : undefined,
            peRatio: prop.order.contract.asset.peRatio !== undefined ? prop.order.contract.asset.peRatio : undefined,
            pegRatio: prop.order.contract.asset.pegRatio !== undefined ? prop.order.contract.asset.pegRatio : undefined,
            bookValue: prop.order.contract.asset.bookValue !== undefined ? prop.order.contract.asset.bookValue : undefined,
            dividendPerShare: prop.order.contract.asset.dividendPerShare !== undefined ? prop.order.contract.asset.dividendPerShare : undefined,
            dividendYield: prop.order.contract.asset.dividendYield !== undefined ? prop.order.contract.asset.dividendYield : undefined,
            eps: prop.order.contract.asset.eps !== undefined ? prop.order.contract.asset.eps : undefined,
            revenuePerShareTTM: prop.order.contract.asset.revenuePerShareTTM !== undefined ? prop.order.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.order.contract.asset.profitMargin !== undefined ? prop.order.contract.asset.profitMargin : undefined,
            operatingMarginTTM: prop.order.contract.asset.operatingMarginTTM !== undefined ? prop.order.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.order.contract.asset.returnOnAssetsTTM !== undefined ? prop.order.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.order.contract.asset.returnOnEquityTTM !== undefined ? prop.order.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.order.contract.asset.revenueTTM !== undefined ? prop.order.contract.asset.revenueTTM : undefined,
            grossProfitTTM: prop.order.contract.asset.grossProfitTTM !== undefined ? prop.order.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.order.contract.asset.dilutedEPSTTM !== undefined ? prop.order.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.order.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.order.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.order.contract.asset.analystTargetPrice !== undefined ? prop.order.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.order.contract.asset.analystRatingStrongBuy !== undefined ? prop.order.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.order.contract.asset.analystRatingBuy !== undefined ? prop.order.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.order.contract.asset.analystRatingHold !== undefined ? prop.order.contract.asset.analystRatingHold : undefined,
            analystRatingSell: prop.order.contract.asset.analystRatingSell !== undefined ? prop.order.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.order.contract.asset.analystRatingStrongSell !== undefined ? prop.order.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.order.contract.asset.trailingPE !== undefined ? prop.order.contract.asset.trailingPE : undefined,
            forwardPE: prop.order.contract.asset.forwardPE !== undefined ? prop.order.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.order.contract.asset.priceToSalesRatioTTM !== undefined ? prop.order.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.order.contract.asset.priceToBookRatio !== undefined ? prop.order.contract.asset.priceToBookRatio : undefined,
            evToRevenue: prop.order.contract.asset.evToRevenue !== undefined ? prop.order.contract.asset.evToRevenue : undefined,
            evToEbitda: prop.order.contract.asset.evToEbitda !== undefined ? prop.order.contract.asset.evToEbitda : undefined,
            beta: prop.order.contract.asset.beta !== undefined ? prop.order.contract.asset.beta : undefined,
            week52High: prop.order.contract.asset.week52High !== undefined ? prop.order.contract.asset.week52High : undefined,
            week52Low: prop.order.contract.asset.week52Low !== undefined ? prop.order.contract.asset.week52Low : undefined,
            day50MovingAverage: prop.order.contract.asset.day50MovingAverage !== undefined ? prop.order.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.order.contract.asset.day200MovingAverage !== undefined ? prop.order.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.order.contract.asset.sharesOutstanding !== undefined ? prop.order.contract.asset.sharesOutstanding : undefined,
            dividendDate: prop.order.contract.asset.dividendDate !== undefined ? prop.order.contract.asset.dividendDate : undefined,
            exDividendDate: prop.order.contract.asset.exDividendDate !== undefined ? prop.order.contract.asset.exDividendDate : undefined,
            askPrice: prop.order.contract.asset.askPrice !== undefined ? prop.order.contract.asset.askPrice : undefined,
            bidPrice: prop.order.contract.asset.bidPrice !== undefined ? prop.order.contract.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
        create: {
          alpacaId: prop.order.contract.alpacaId !== undefined ? prop.order.contract.alpacaId : undefined,
          symbol: prop.order.contract.symbol !== undefined ? prop.order.contract.symbol : undefined,
          name: prop.order.contract.name !== undefined ? prop.order.contract.name : undefined,
          status: prop.order.contract.status !== undefined ? prop.order.contract.status : undefined,
          tradable: prop.order.contract.tradable !== undefined ? prop.order.contract.tradable : undefined,
          expirationDate: prop.order.contract.expirationDate !== undefined ? prop.order.contract.expirationDate : undefined,
          rootSymbol: prop.order.contract.rootSymbol !== undefined ? prop.order.contract.rootSymbol : undefined,
          underlyingSymbol: prop.order.contract.underlyingSymbol !== undefined ? prop.order.contract.underlyingSymbol : undefined,
          underlyingAssetId: prop.order.contract.underlyingAssetId !== undefined ? prop.order.contract.underlyingAssetId : undefined,
          type: prop.order.contract.type !== undefined ? prop.order.contract.type : undefined,
          style: prop.order.contract.style !== undefined ? prop.order.contract.style : undefined,
          strikePrice: prop.order.contract.strikePrice !== undefined ? prop.order.contract.strikePrice : undefined,
          multiplier: prop.order.contract.multiplier !== undefined ? prop.order.contract.multiplier : undefined,
          size: prop.order.contract.size !== undefined ? prop.order.contract.size : undefined,
          openInterest: prop.order.contract.openInterest !== undefined ? prop.order.contract.openInterest : undefined,
          openInterestDate: prop.order.contract.openInterestDate !== undefined ? prop.order.contract.openInterestDate : undefined,
          closePrice: prop.order.contract.closePrice !== undefined ? prop.order.contract.closePrice : undefined,
          closePriceDate: prop.order.contract.closePriceDate !== undefined ? prop.order.contract.closePriceDate : undefined,
          ppind: prop.order.contract.ppind !== undefined ? prop.order.contract.ppind : undefined,
          orderId: prop.order.contract.orderId !== undefined ? prop.order.contract.orderId : undefined,
      deliverables: prop.order.contract.deliverables ? 
        Array.isArray(prop.order.contract.deliverables) && prop.order.contract.deliverables.length > 0 &&  prop.order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.contract.deliverables.map((item: any) => ({
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
      asset: prop.order.contract.asset ? 
        typeof prop.order.contract.asset === 'object' && Object.keys(prop.order.contract.asset).length === 1 && Object.keys(prop.order.contract.asset)[0] === 'id'
    ? { connect: {
            id: prop.order.contract.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.order.contract.asset.id !== undefined ? prop.order.contract.asset.id : undefined,
            symbol: prop.order.contract.asset.symbol !== undefined ? prop.order.contract.asset.symbol : undefined,
            name: prop.order.contract.asset.name !== undefined ? prop.order.contract.asset.name : undefined,
          },
          create: {
            symbol: prop.order.contract.asset.symbol !== undefined ? prop.order.contract.asset.symbol : undefined,
            name: prop.order.contract.asset.name !== undefined ? prop.order.contract.asset.name : undefined,
            type: prop.order.contract.asset.type !== undefined ? prop.order.contract.asset.type : undefined,
            logoUrl: prop.order.contract.asset.logoUrl !== undefined ? prop.order.contract.asset.logoUrl : undefined,
            description: prop.order.contract.asset.description !== undefined ? prop.order.contract.asset.description : undefined,
            cik: prop.order.contract.asset.cik !== undefined ? prop.order.contract.asset.cik : undefined,
            exchange: prop.order.contract.asset.exchange !== undefined ? prop.order.contract.asset.exchange : undefined,
            currency: prop.order.contract.asset.currency !== undefined ? prop.order.contract.asset.currency : undefined,
            country: prop.order.contract.asset.country !== undefined ? prop.order.contract.asset.country : undefined,
            sector: prop.order.contract.asset.sector !== undefined ? prop.order.contract.asset.sector : undefined,
            industry: prop.order.contract.asset.industry !== undefined ? prop.order.contract.asset.industry : undefined,
            address: prop.order.contract.asset.address !== undefined ? prop.order.contract.asset.address : undefined,
            officialSite: prop.order.contract.asset.officialSite !== undefined ? prop.order.contract.asset.officialSite : undefined,
            fiscalYearEnd: prop.order.contract.asset.fiscalYearEnd !== undefined ? prop.order.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.order.contract.asset.latestQuarter !== undefined ? prop.order.contract.asset.latestQuarter : undefined,
            marketCapitalization: prop.order.contract.asset.marketCapitalization !== undefined ? prop.order.contract.asset.marketCapitalization : undefined,
            ebitda: prop.order.contract.asset.ebitda !== undefined ? prop.order.contract.asset.ebitda : undefined,
            peRatio: prop.order.contract.asset.peRatio !== undefined ? prop.order.contract.asset.peRatio : undefined,
            pegRatio: prop.order.contract.asset.pegRatio !== undefined ? prop.order.contract.asset.pegRatio : undefined,
            bookValue: prop.order.contract.asset.bookValue !== undefined ? prop.order.contract.asset.bookValue : undefined,
            dividendPerShare: prop.order.contract.asset.dividendPerShare !== undefined ? prop.order.contract.asset.dividendPerShare : undefined,
            dividendYield: prop.order.contract.asset.dividendYield !== undefined ? prop.order.contract.asset.dividendYield : undefined,
            eps: prop.order.contract.asset.eps !== undefined ? prop.order.contract.asset.eps : undefined,
            revenuePerShareTTM: prop.order.contract.asset.revenuePerShareTTM !== undefined ? prop.order.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.order.contract.asset.profitMargin !== undefined ? prop.order.contract.asset.profitMargin : undefined,
            operatingMarginTTM: prop.order.contract.asset.operatingMarginTTM !== undefined ? prop.order.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.order.contract.asset.returnOnAssetsTTM !== undefined ? prop.order.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.order.contract.asset.returnOnEquityTTM !== undefined ? prop.order.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.order.contract.asset.revenueTTM !== undefined ? prop.order.contract.asset.revenueTTM : undefined,
            grossProfitTTM: prop.order.contract.asset.grossProfitTTM !== undefined ? prop.order.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.order.contract.asset.dilutedEPSTTM !== undefined ? prop.order.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.order.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.order.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.order.contract.asset.analystTargetPrice !== undefined ? prop.order.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.order.contract.asset.analystRatingStrongBuy !== undefined ? prop.order.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.order.contract.asset.analystRatingBuy !== undefined ? prop.order.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.order.contract.asset.analystRatingHold !== undefined ? prop.order.contract.asset.analystRatingHold : undefined,
            analystRatingSell: prop.order.contract.asset.analystRatingSell !== undefined ? prop.order.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.order.contract.asset.analystRatingStrongSell !== undefined ? prop.order.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.order.contract.asset.trailingPE !== undefined ? prop.order.contract.asset.trailingPE : undefined,
            forwardPE: prop.order.contract.asset.forwardPE !== undefined ? prop.order.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.order.contract.asset.priceToSalesRatioTTM !== undefined ? prop.order.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.order.contract.asset.priceToBookRatio !== undefined ? prop.order.contract.asset.priceToBookRatio : undefined,
            evToRevenue: prop.order.contract.asset.evToRevenue !== undefined ? prop.order.contract.asset.evToRevenue : undefined,
            evToEbitda: prop.order.contract.asset.evToEbitda !== undefined ? prop.order.contract.asset.evToEbitda : undefined,
            beta: prop.order.contract.asset.beta !== undefined ? prop.order.contract.asset.beta : undefined,
            week52High: prop.order.contract.asset.week52High !== undefined ? prop.order.contract.asset.week52High : undefined,
            week52Low: prop.order.contract.asset.week52Low !== undefined ? prop.order.contract.asset.week52Low : undefined,
            day50MovingAverage: prop.order.contract.asset.day50MovingAverage !== undefined ? prop.order.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.order.contract.asset.day200MovingAverage !== undefined ? prop.order.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.order.contract.asset.sharesOutstanding !== undefined ? prop.order.contract.asset.sharesOutstanding : undefined,
            dividendDate: prop.order.contract.asset.dividendDate !== undefined ? prop.order.contract.asset.dividendDate : undefined,
            exDividendDate: prop.order.contract.asset.exDividendDate !== undefined ? prop.order.contract.asset.exDividendDate : undefined,
            askPrice: prop.order.contract.asset.askPrice !== undefined ? prop.order.contract.asset.askPrice : undefined,
            bidPrice: prop.order.contract.asset.bidPrice !== undefined ? prop.order.contract.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        clientOrderId: prop.order.clientOrderId !== undefined ? prop.order.clientOrderId : undefined,
        qty: prop.order.qty !== undefined ? prop.order.qty : undefined,
        notional: prop.order.notional !== undefined ? prop.order.notional : undefined,
        side: prop.order.side !== undefined ? prop.order.side : undefined,
        type: prop.order.type !== undefined ? prop.order.type : undefined,
        orderClass: prop.order.orderClass !== undefined ? prop.order.orderClass : undefined,
        timeInForce: prop.order.timeInForce !== undefined ? prop.order.timeInForce : undefined,
        limitPrice: prop.order.limitPrice !== undefined ? prop.order.limitPrice : undefined,
        stopPrice: prop.order.stopPrice !== undefined ? prop.order.stopPrice : undefined,
        trailPrice: prop.order.trailPrice !== undefined ? prop.order.trailPrice : undefined,
        trailPercent: prop.order.trailPercent !== undefined ? prop.order.trailPercent : undefined,
        extendedHours: prop.order.extendedHours !== undefined ? prop.order.extendedHours : undefined,
        status: prop.order.status !== undefined ? prop.order.status : undefined,
        submittedAt: prop.order.submittedAt !== undefined ? prop.order.submittedAt : undefined,
        filledAt: prop.order.filledAt !== undefined ? prop.order.filledAt : undefined,
        filledQty: prop.order.filledQty !== undefined ? prop.order.filledQty : undefined,
        filledAvgPrice: prop.order.filledAvgPrice !== undefined ? prop.order.filledAvgPrice : undefined,
        cancelRequestedAt: prop.order.cancelRequestedAt !== undefined ? prop.order.cancelRequestedAt : undefined,
        canceledAt: prop.order.canceledAt !== undefined ? prop.order.canceledAt : undefined,
        fee: prop.order.fee !== undefined ? prop.order.fee : undefined,
        strikePrice: prop.order.strikePrice !== undefined ? prop.order.strikePrice : undefined,
        expirationDate: prop.order.expirationDate !== undefined ? prop.order.expirationDate : undefined,
        expiredAt: prop.order.expiredAt !== undefined ? prop.order.expiredAt : undefined,
        failedAt: prop.order.failedAt !== undefined ? prop.order.failedAt : undefined,
        replacedAt: prop.order.replacedAt !== undefined ? prop.order.replacedAt : undefined,
        replacedBy: prop.order.replacedBy !== undefined ? prop.order.replacedBy : undefined,
        replaces: prop.order.replaces !== undefined ? prop.order.replaces : undefined,
        positionIntent: prop.order.positionIntent !== undefined ? prop.order.positionIntent : undefined,
        legs: prop.order.legs !== undefined ? prop.order.legs : undefined,
        hwm: prop.order.hwm !== undefined ? prop.order.hwm : undefined,
        subtag: prop.order.subtag !== undefined ? prop.order.subtag : undefined,
        source: prop.order.source !== undefined ? prop.order.source : undefined,
        expiresAt: prop.order.expiresAt !== undefined ? prop.order.expiresAt : undefined,
        optionType: prop.order.optionType !== undefined ? prop.order.optionType : undefined,
        stopLossId: prop.order.stopLossId !== undefined ? prop.order.stopLossId : undefined,
        takeProfitId: prop.order.takeProfitId !== undefined ? prop.order.takeProfitId : undefined,
    stopLoss: prop.order.stopLoss ? 
      typeof prop.order.stopLoss === 'object' && Object.keys(prop.order.stopLoss).length === 1 && Object.keys(prop.order.stopLoss)[0] === 'id'
    ? { connect: {
          id: prop.order.stopLoss.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.order.stopLoss.id !== undefined ? prop.order.stopLoss.id : undefined,
          orderId: prop.order.stopLoss.orderId !== undefined ? prop.order.stopLoss.orderId : undefined,
        },
        create: {
          stopPrice: prop.order.stopLoss.stopPrice !== undefined ? prop.order.stopLoss.stopPrice : undefined,
          limitPrice: prop.order.stopLoss.limitPrice !== undefined ? prop.order.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: prop.order.takeProfit ? 
      typeof prop.order.takeProfit === 'object' && Object.keys(prop.order.takeProfit).length === 1 && Object.keys(prop.order.takeProfit)[0] === 'id'
    ? { connect: {
          id: prop.order.takeProfit.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.order.takeProfit.id !== undefined ? prop.order.takeProfit.id : undefined,
          orderId: prop.order.takeProfit.orderId !== undefined ? prop.order.takeProfit.orderId : undefined,
        },
        create: {
          limitPrice: prop.order.takeProfit.limitPrice !== undefined ? prop.order.takeProfit.limitPrice : undefined,
          stopPrice: prop.order.takeProfit.stopPrice !== undefined ? prop.order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: prop.order.alpacaAccount ? 
      typeof prop.order.alpacaAccount === 'object' && Object.keys(prop.order.alpacaAccount).length === 1 && Object.keys(prop.order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: prop.order.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.order.alpacaAccount.id !== undefined ? prop.order.alpacaAccount.id : undefined,
          userId: prop.order.alpacaAccount.userId !== undefined ? {
              equals: prop.order.alpacaAccount.userId 
             } : undefined,
        },
        create: {
          type: prop.order.alpacaAccount.type !== undefined ? prop.order.alpacaAccount.type : undefined,
          APIKey: prop.order.alpacaAccount.APIKey !== undefined ? prop.order.alpacaAccount.APIKey : undefined,
          APISecret: prop.order.alpacaAccount.APISecret !== undefined ? prop.order.alpacaAccount.APISecret : undefined,
          configuration: prop.order.alpacaAccount.configuration !== undefined ? prop.order.alpacaAccount.configuration : undefined,
          marketOpen: prop.order.alpacaAccount.marketOpen !== undefined ? prop.order.alpacaAccount.marketOpen : undefined,
          realTime: prop.order.alpacaAccount.realTime !== undefined ? prop.order.alpacaAccount.realTime : undefined,
          tradeAllocationPct: prop.order.alpacaAccount.tradeAllocationPct !== undefined ? prop.order.alpacaAccount.tradeAllocationPct : undefined,
          minPercentageChange: prop.order.alpacaAccount.minPercentageChange !== undefined ? prop.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: prop.order.alpacaAccount.volumeThreshold !== undefined ? prop.order.alpacaAccount.volumeThreshold : undefined,
          enablePortfolioTrailingStop: prop.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? prop.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: prop.order.alpacaAccount.portfolioTrailPercent !== undefined ? prop.order.alpacaAccount.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: prop.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? prop.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: prop.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? prop.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
      user: prop.order.alpacaAccount.user ? 
        typeof prop.order.alpacaAccount.user === 'object' && Object.keys(prop.order.alpacaAccount.user).length === 1 && Object.keys(prop.order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: prop.order.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.order.alpacaAccount.user.id !== undefined ? prop.order.alpacaAccount.user.id : undefined,
            email: prop.order.alpacaAccount.user.email !== undefined ? prop.order.alpacaAccount.user.email : undefined,
            name: prop.order.alpacaAccount.user.name !== undefined ? {
                equals: prop.order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: prop.order.alpacaAccount.user.name !== undefined ? prop.order.alpacaAccount.user.name : undefined,
            email: prop.order.alpacaAccount.user.email !== undefined ? prop.order.alpacaAccount.user.email : undefined,
            emailVerified: prop.order.alpacaAccount.user.emailVerified !== undefined ? prop.order.alpacaAccount.user.emailVerified : undefined,
            image: prop.order.alpacaAccount.user.image !== undefined ? prop.order.alpacaAccount.user.image : undefined,
            role: prop.order.alpacaAccount.user.role !== undefined ? prop.order.alpacaAccount.user.role : undefined,
            bio: prop.order.alpacaAccount.user.bio !== undefined ? prop.order.alpacaAccount.user.bio : undefined,
            jobTitle: prop.order.alpacaAccount.user.jobTitle !== undefined ? prop.order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.order.alpacaAccount.user.currentAccount !== undefined ? prop.order.alpacaAccount.user.currentAccount : undefined,
            plan: prop.order.alpacaAccount.user.plan !== undefined ? prop.order.alpacaAccount.user.plan : undefined,
            openaiAPIKey: prop.order.alpacaAccount.user.openaiAPIKey !== undefined ? prop.order.alpacaAccount.user.openaiAPIKey : undefined,
            openaiModel: prop.order.alpacaAccount.user.openaiModel !== undefined ? prop.order.alpacaAccount.user.openaiModel : undefined,
          },
        }
      } : undefined,
      positions: prop.order.alpacaAccount.positions ? 
        Array.isArray(prop.order.alpacaAccount.positions) && prop.order.alpacaAccount.positions.length > 0 &&  prop.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: prop.order.alpacaAccount.alerts ? 
        Array.isArray(prop.order.alpacaAccount.alerts) && prop.order.alpacaAccount.alerts.length > 0 &&  prop.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.alpacaAccount.alerts.map((item: any) => ({
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
    asset: prop.order.asset ? 
      typeof prop.order.asset === 'object' && Object.keys(prop.order.asset).length === 1 && Object.keys(prop.order.asset)[0] === 'id'
    ? { connect: {
          id: prop.order.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.order.asset.id !== undefined ? prop.order.asset.id : undefined,
          symbol: prop.order.asset.symbol !== undefined ? prop.order.asset.symbol : undefined,
          name: prop.order.asset.name !== undefined ? prop.order.asset.name : undefined,
        },
        create: {
          symbol: prop.order.asset.symbol !== undefined ? prop.order.asset.symbol : undefined,
          name: prop.order.asset.name !== undefined ? prop.order.asset.name : undefined,
          type: prop.order.asset.type !== undefined ? prop.order.asset.type : undefined,
          logoUrl: prop.order.asset.logoUrl !== undefined ? prop.order.asset.logoUrl : undefined,
          description: prop.order.asset.description !== undefined ? prop.order.asset.description : undefined,
          cik: prop.order.asset.cik !== undefined ? prop.order.asset.cik : undefined,
          exchange: prop.order.asset.exchange !== undefined ? prop.order.asset.exchange : undefined,
          currency: prop.order.asset.currency !== undefined ? prop.order.asset.currency : undefined,
          country: prop.order.asset.country !== undefined ? prop.order.asset.country : undefined,
          sector: prop.order.asset.sector !== undefined ? prop.order.asset.sector : undefined,
          industry: prop.order.asset.industry !== undefined ? prop.order.asset.industry : undefined,
          address: prop.order.asset.address !== undefined ? prop.order.asset.address : undefined,
          officialSite: prop.order.asset.officialSite !== undefined ? prop.order.asset.officialSite : undefined,
          fiscalYearEnd: prop.order.asset.fiscalYearEnd !== undefined ? prop.order.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.order.asset.latestQuarter !== undefined ? prop.order.asset.latestQuarter : undefined,
          marketCapitalization: prop.order.asset.marketCapitalization !== undefined ? prop.order.asset.marketCapitalization : undefined,
          ebitda: prop.order.asset.ebitda !== undefined ? prop.order.asset.ebitda : undefined,
          peRatio: prop.order.asset.peRatio !== undefined ? prop.order.asset.peRatio : undefined,
          pegRatio: prop.order.asset.pegRatio !== undefined ? prop.order.asset.pegRatio : undefined,
          bookValue: prop.order.asset.bookValue !== undefined ? prop.order.asset.bookValue : undefined,
          dividendPerShare: prop.order.asset.dividendPerShare !== undefined ? prop.order.asset.dividendPerShare : undefined,
          dividendYield: prop.order.asset.dividendYield !== undefined ? prop.order.asset.dividendYield : undefined,
          eps: prop.order.asset.eps !== undefined ? prop.order.asset.eps : undefined,
          revenuePerShareTTM: prop.order.asset.revenuePerShareTTM !== undefined ? prop.order.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.order.asset.profitMargin !== undefined ? prop.order.asset.profitMargin : undefined,
          operatingMarginTTM: prop.order.asset.operatingMarginTTM !== undefined ? prop.order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.order.asset.returnOnAssetsTTM !== undefined ? prop.order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.order.asset.returnOnEquityTTM !== undefined ? prop.order.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.order.asset.revenueTTM !== undefined ? prop.order.asset.revenueTTM : undefined,
          grossProfitTTM: prop.order.asset.grossProfitTTM !== undefined ? prop.order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.order.asset.dilutedEPSTTM !== undefined ? prop.order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.order.asset.analystTargetPrice !== undefined ? prop.order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.order.asset.analystRatingStrongBuy !== undefined ? prop.order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.order.asset.analystRatingBuy !== undefined ? prop.order.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.order.asset.analystRatingHold !== undefined ? prop.order.asset.analystRatingHold : undefined,
          analystRatingSell: prop.order.asset.analystRatingSell !== undefined ? prop.order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.order.asset.analystRatingStrongSell !== undefined ? prop.order.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.order.asset.trailingPE !== undefined ? prop.order.asset.trailingPE : undefined,
          forwardPE: prop.order.asset.forwardPE !== undefined ? prop.order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.order.asset.priceToSalesRatioTTM !== undefined ? prop.order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.order.asset.priceToBookRatio !== undefined ? prop.order.asset.priceToBookRatio : undefined,
          evToRevenue: prop.order.asset.evToRevenue !== undefined ? prop.order.asset.evToRevenue : undefined,
          evToEbitda: prop.order.asset.evToEbitda !== undefined ? prop.order.asset.evToEbitda : undefined,
          beta: prop.order.asset.beta !== undefined ? prop.order.asset.beta : undefined,
          week52High: prop.order.asset.week52High !== undefined ? prop.order.asset.week52High : undefined,
          week52Low: prop.order.asset.week52Low !== undefined ? prop.order.asset.week52Low : undefined,
          day50MovingAverage: prop.order.asset.day50MovingAverage !== undefined ? prop.order.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.order.asset.day200MovingAverage !== undefined ? prop.order.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.order.asset.sharesOutstanding !== undefined ? prop.order.asset.sharesOutstanding : undefined,
          dividendDate: prop.order.asset.dividendDate !== undefined ? prop.order.asset.dividendDate : undefined,
          exDividendDate: prop.order.asset.exDividendDate !== undefined ? prop.order.asset.exDividendDate : undefined,
          askPrice: prop.order.asset.askPrice !== undefined ? prop.order.asset.askPrice : undefined,
          bidPrice: prop.order.asset.bidPrice !== undefined ? prop.order.asset.bidPrice : undefined,
      positions: prop.order.asset.positions ? 
        Array.isArray(prop.order.asset.positions) && prop.order.asset.positions.length > 0 &&  prop.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.asset.positions.map((item: any) => ({
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
      newsMentions: prop.order.asset.newsMentions ? 
        Array.isArray(prop.order.asset.newsMentions) && prop.order.asset.newsMentions.length > 0 &&  prop.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.asset.newsMentions.map((item: any) => ({
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
      contracts: prop.order.asset.contracts ? 
        Array.isArray(prop.order.asset.contracts) && prop.order.asset.contracts.length > 0 &&  prop.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.asset.contracts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.asset.contracts.map((item: any) => ({
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
    contract: prop.order.contract ? 
      typeof prop.order.contract === 'object' && Object.keys(prop.order.contract).length === 1 && Object.keys(prop.order.contract)[0] === 'id'
    ? { connect: {
          id: prop.order.contract.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.order.contract.id !== undefined ? prop.order.contract.id : undefined,
          alpacaId: prop.order.contract.alpacaId !== undefined ? prop.order.contract.alpacaId : undefined,
          symbol: prop.order.contract.symbol !== undefined ? prop.order.contract.symbol : undefined,
          name: prop.order.contract.name !== undefined ? {
              equals: prop.order.contract.name 
             } : undefined,
          underlyingAssetId: prop.order.contract.underlyingAssetId !== undefined ? {
              equals: prop.order.contract.underlyingAssetId 
             } : undefined,
        },
        create: {
          alpacaId: prop.order.contract.alpacaId !== undefined ? prop.order.contract.alpacaId : undefined,
          symbol: prop.order.contract.symbol !== undefined ? prop.order.contract.symbol : undefined,
          name: prop.order.contract.name !== undefined ? prop.order.contract.name : undefined,
          status: prop.order.contract.status !== undefined ? prop.order.contract.status : undefined,
          tradable: prop.order.contract.tradable !== undefined ? prop.order.contract.tradable : undefined,
          expirationDate: prop.order.contract.expirationDate !== undefined ? prop.order.contract.expirationDate : undefined,
          rootSymbol: prop.order.contract.rootSymbol !== undefined ? prop.order.contract.rootSymbol : undefined,
          underlyingSymbol: prop.order.contract.underlyingSymbol !== undefined ? prop.order.contract.underlyingSymbol : undefined,
          underlyingAssetId: prop.order.contract.underlyingAssetId !== undefined ? prop.order.contract.underlyingAssetId : undefined,
          type: prop.order.contract.type !== undefined ? prop.order.contract.type : undefined,
          style: prop.order.contract.style !== undefined ? prop.order.contract.style : undefined,
          strikePrice: prop.order.contract.strikePrice !== undefined ? prop.order.contract.strikePrice : undefined,
          multiplier: prop.order.contract.multiplier !== undefined ? prop.order.contract.multiplier : undefined,
          size: prop.order.contract.size !== undefined ? prop.order.contract.size : undefined,
          openInterest: prop.order.contract.openInterest !== undefined ? prop.order.contract.openInterest : undefined,
          openInterestDate: prop.order.contract.openInterestDate !== undefined ? prop.order.contract.openInterestDate : undefined,
          closePrice: prop.order.contract.closePrice !== undefined ? prop.order.contract.closePrice : undefined,
          closePriceDate: prop.order.contract.closePriceDate !== undefined ? prop.order.contract.closePriceDate : undefined,
          ppind: prop.order.contract.ppind !== undefined ? prop.order.contract.ppind : undefined,
          orderId: prop.order.contract.orderId !== undefined ? prop.order.contract.orderId : undefined,
      deliverables: prop.order.contract.deliverables ? 
        Array.isArray(prop.order.contract.deliverables) && prop.order.contract.deliverables.length > 0 &&  prop.order.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.contract.deliverables.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.contract.deliverables.map((item: any) => ({
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
      asset: prop.order.contract.asset ? 
        typeof prop.order.contract.asset === 'object' && Object.keys(prop.order.contract.asset).length === 1 && Object.keys(prop.order.contract.asset)[0] === 'id'
    ? { connect: {
            id: prop.order.contract.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.order.contract.asset.id !== undefined ? prop.order.contract.asset.id : undefined,
            symbol: prop.order.contract.asset.symbol !== undefined ? prop.order.contract.asset.symbol : undefined,
            name: prop.order.contract.asset.name !== undefined ? prop.order.contract.asset.name : undefined,
          },
          create: {
            symbol: prop.order.contract.asset.symbol !== undefined ? prop.order.contract.asset.symbol : undefined,
            name: prop.order.contract.asset.name !== undefined ? prop.order.contract.asset.name : undefined,
            type: prop.order.contract.asset.type !== undefined ? prop.order.contract.asset.type : undefined,
            logoUrl: prop.order.contract.asset.logoUrl !== undefined ? prop.order.contract.asset.logoUrl : undefined,
            description: prop.order.contract.asset.description !== undefined ? prop.order.contract.asset.description : undefined,
            cik: prop.order.contract.asset.cik !== undefined ? prop.order.contract.asset.cik : undefined,
            exchange: prop.order.contract.asset.exchange !== undefined ? prop.order.contract.asset.exchange : undefined,
            currency: prop.order.contract.asset.currency !== undefined ? prop.order.contract.asset.currency : undefined,
            country: prop.order.contract.asset.country !== undefined ? prop.order.contract.asset.country : undefined,
            sector: prop.order.contract.asset.sector !== undefined ? prop.order.contract.asset.sector : undefined,
            industry: prop.order.contract.asset.industry !== undefined ? prop.order.contract.asset.industry : undefined,
            address: prop.order.contract.asset.address !== undefined ? prop.order.contract.asset.address : undefined,
            officialSite: prop.order.contract.asset.officialSite !== undefined ? prop.order.contract.asset.officialSite : undefined,
            fiscalYearEnd: prop.order.contract.asset.fiscalYearEnd !== undefined ? prop.order.contract.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.order.contract.asset.latestQuarter !== undefined ? prop.order.contract.asset.latestQuarter : undefined,
            marketCapitalization: prop.order.contract.asset.marketCapitalization !== undefined ? prop.order.contract.asset.marketCapitalization : undefined,
            ebitda: prop.order.contract.asset.ebitda !== undefined ? prop.order.contract.asset.ebitda : undefined,
            peRatio: prop.order.contract.asset.peRatio !== undefined ? prop.order.contract.asset.peRatio : undefined,
            pegRatio: prop.order.contract.asset.pegRatio !== undefined ? prop.order.contract.asset.pegRatio : undefined,
            bookValue: prop.order.contract.asset.bookValue !== undefined ? prop.order.contract.asset.bookValue : undefined,
            dividendPerShare: prop.order.contract.asset.dividendPerShare !== undefined ? prop.order.contract.asset.dividendPerShare : undefined,
            dividendYield: prop.order.contract.asset.dividendYield !== undefined ? prop.order.contract.asset.dividendYield : undefined,
            eps: prop.order.contract.asset.eps !== undefined ? prop.order.contract.asset.eps : undefined,
            revenuePerShareTTM: prop.order.contract.asset.revenuePerShareTTM !== undefined ? prop.order.contract.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.order.contract.asset.profitMargin !== undefined ? prop.order.contract.asset.profitMargin : undefined,
            operatingMarginTTM: prop.order.contract.asset.operatingMarginTTM !== undefined ? prop.order.contract.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.order.contract.asset.returnOnAssetsTTM !== undefined ? prop.order.contract.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.order.contract.asset.returnOnEquityTTM !== undefined ? prop.order.contract.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.order.contract.asset.revenueTTM !== undefined ? prop.order.contract.asset.revenueTTM : undefined,
            grossProfitTTM: prop.order.contract.asset.grossProfitTTM !== undefined ? prop.order.contract.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.order.contract.asset.dilutedEPSTTM !== undefined ? prop.order.contract.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.order.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.order.contract.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.order.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.order.contract.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.order.contract.asset.analystTargetPrice !== undefined ? prop.order.contract.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.order.contract.asset.analystRatingStrongBuy !== undefined ? prop.order.contract.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.order.contract.asset.analystRatingBuy !== undefined ? prop.order.contract.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.order.contract.asset.analystRatingHold !== undefined ? prop.order.contract.asset.analystRatingHold : undefined,
            analystRatingSell: prop.order.contract.asset.analystRatingSell !== undefined ? prop.order.contract.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.order.contract.asset.analystRatingStrongSell !== undefined ? prop.order.contract.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.order.contract.asset.trailingPE !== undefined ? prop.order.contract.asset.trailingPE : undefined,
            forwardPE: prop.order.contract.asset.forwardPE !== undefined ? prop.order.contract.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.order.contract.asset.priceToSalesRatioTTM !== undefined ? prop.order.contract.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.order.contract.asset.priceToBookRatio !== undefined ? prop.order.contract.asset.priceToBookRatio : undefined,
            evToRevenue: prop.order.contract.asset.evToRevenue !== undefined ? prop.order.contract.asset.evToRevenue : undefined,
            evToEbitda: prop.order.contract.asset.evToEbitda !== undefined ? prop.order.contract.asset.evToEbitda : undefined,
            beta: prop.order.contract.asset.beta !== undefined ? prop.order.contract.asset.beta : undefined,
            week52High: prop.order.contract.asset.week52High !== undefined ? prop.order.contract.asset.week52High : undefined,
            week52Low: prop.order.contract.asset.week52Low !== undefined ? prop.order.contract.asset.week52Low : undefined,
            day50MovingAverage: prop.order.contract.asset.day50MovingAverage !== undefined ? prop.order.contract.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.order.contract.asset.day200MovingAverage !== undefined ? prop.order.contract.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.order.contract.asset.sharesOutstanding !== undefined ? prop.order.contract.asset.sharesOutstanding : undefined,
            dividendDate: prop.order.contract.asset.dividendDate !== undefined ? prop.order.contract.asset.dividendDate : undefined,
            exDividendDate: prop.order.contract.asset.exDividendDate !== undefined ? prop.order.contract.asset.exDividendDate : undefined,
            askPrice: prop.order.contract.asset.askPrice !== undefined ? prop.order.contract.asset.askPrice : undefined,
            bidPrice: prop.order.contract.asset.bidPrice !== undefined ? prop.order.contract.asset.bidPrice : undefined,
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
  async delete(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  async get(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    } catch (error: any) {
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
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    } catch (error: any) {
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
  async findMany(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  }
};
