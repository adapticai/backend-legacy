
  
import { Contract as ContractType } from './generated/typegraphql-prisma/models/Contract';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Contract model.
   */

  const selectionSet = `
    
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
    }
    contractId
    createdAt
    updatedAt
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

  `;

  export const Contract = {

    /**
     * Create a new Contract record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Contract or null.
     */

    async create(props: ContractType, globalClient?: ApolloClient<any>): Promise<ContractType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_CONTRACT = gql`
        mutation createOneContract($data: ContractCreateInput!) {
          createOneContract(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            alpacaId: props.alpacaId !== undefined ? props.alpacaId : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  name: props.name !== undefined ? props.name : undefined,
  status: props.status !== undefined ? props.status : undefined,
  tradable: props.tradable !== undefined ? props.tradable : undefined,
  expirationDate: props.expirationDate !== undefined ? props.expirationDate : undefined,
  rootSymbol: props.rootSymbol !== undefined ? props.rootSymbol : undefined,
  underlyingSymbol: props.underlyingSymbol !== undefined ? props.underlyingSymbol : undefined,
  underlyingAssetId: props.underlyingAssetId !== undefined ? props.underlyingAssetId : undefined,
  type: props.type !== undefined ? props.type : undefined,
  style: props.style !== undefined ? props.style : undefined,
  strikePrice: props.strikePrice !== undefined ? props.strikePrice : undefined,
  multiplier: props.multiplier !== undefined ? props.multiplier : undefined,
  size: props.size !== undefined ? props.size : undefined,
  openInterest: props.openInterest !== undefined ? props.openInterest : undefined,
  openInterestDate: props.openInterestDate !== undefined ? props.openInterestDate : undefined,
  closePrice: props.closePrice !== undefined ? props.closePrice : undefined,
  closePriceDate: props.closePriceDate !== undefined ? props.closePriceDate : undefined,
  ppind: props.ppind !== undefined ? props.ppind : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
  deliverables: props.deliverables ? 
    Array.isArray(props.deliverables) && props.deliverables.length > 0 && props.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.deliverables.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.deliverables.map((item: any) => ({
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
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 && props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.positions.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.positions.map((item: any) => ({
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
    action: props.order.action ? 
      typeof props.order.action === 'object' && Object.keys(props.order.action).length === 1 && Object.keys(props.order.action)[0] === 'id'
    ? { connect: {
          id: props.order.action.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.action.id !== undefined ? props.order.action.id : undefined,
          tradeId: props.order.action.tradeId !== undefined ? {
              equals: props.order.action.tradeId 
             } : undefined,
        },
        create: {
          sequence: props.order.action.sequence !== undefined ? props.order.action.sequence : undefined,
          type: props.order.action.type !== undefined ? props.order.action.type : undefined,
          note: props.order.action.note !== undefined ? props.order.action.note : undefined,
          status: props.order.action.status !== undefined ? props.order.action.status : undefined,
          fee: props.order.action.fee !== undefined ? props.order.action.fee : undefined,
          dependsOn: props.order.action.dependsOn !== undefined ? {
            set: props.order.action.dependsOn
          } : undefined,
          dependedOnBy: props.order.action.dependedOnBy !== undefined ? {
            set: props.order.action.dependedOnBy
          } : undefined,
      trade: props.order.action.trade ? 
        typeof props.order.action.trade === 'object' && Object.keys(props.order.action.trade).length === 1 && Object.keys(props.order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.order.action.trade.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.order.action.trade.id !== undefined ? props.order.action.trade.id : undefined,
            alpacaAccountId: props.order.action.trade.alpacaAccountId !== undefined ? {
                equals: props.order.action.trade.alpacaAccountId 
               } : undefined,
          },
          create: {
            qty: props.order.action.trade.qty !== undefined ? props.order.action.trade.qty : undefined,
            price: props.order.action.trade.price !== undefined ? props.order.action.trade.price : undefined,
            total: props.order.action.trade.total !== undefined ? props.order.action.trade.total : undefined,
            optionType: props.order.action.trade.optionType !== undefined ? props.order.action.trade.optionType : undefined,
            signal: props.order.action.trade.signal !== undefined ? props.order.action.trade.signal : undefined,
            strategy: props.order.action.trade.strategy !== undefined ? props.order.action.trade.strategy : undefined,
            analysis: props.order.action.trade.analysis !== undefined ? props.order.action.trade.analysis : undefined,
            summary: props.order.action.trade.summary !== undefined ? props.order.action.trade.summary : undefined,
            confidence: props.order.action.trade.confidence !== undefined ? props.order.action.trade.confidence : undefined,
            timestamp: props.order.action.trade.timestamp !== undefined ? props.order.action.trade.timestamp : undefined,
            status: props.order.action.trade.status !== undefined ? props.order.action.trade.status : undefined,
          },
        }
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
      },
    }
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_CONTRACT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneContract) {
        return response.data.createOneContract;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneContract:', error);
      throw error;
    }
  },

  /**
   * Create multiple Contract records.
   * @param props - Array of Contract objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: ContractType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_CONTRACT = gql`
      mutation createManyContract($data: [ContractCreateManyInput!]!) {
        createManyContract(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  alpacaId: prop.alpacaId !== undefined ? prop.alpacaId : undefined,
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  name: prop.name !== undefined ? prop.name : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  tradable: prop.tradable !== undefined ? prop.tradable : undefined,
  expirationDate: prop.expirationDate !== undefined ? prop.expirationDate : undefined,
  rootSymbol: prop.rootSymbol !== undefined ? prop.rootSymbol : undefined,
  underlyingSymbol: prop.underlyingSymbol !== undefined ? prop.underlyingSymbol : undefined,
  underlyingAssetId: prop.underlyingAssetId !== undefined ? prop.underlyingAssetId : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  style: prop.style !== undefined ? prop.style : undefined,
  strikePrice: prop.strikePrice !== undefined ? prop.strikePrice : undefined,
  multiplier: prop.multiplier !== undefined ? prop.multiplier : undefined,
  size: prop.size !== undefined ? prop.size : undefined,
  openInterest: prop.openInterest !== undefined ? prop.openInterest : undefined,
  openInterestDate: prop.openInterestDate !== undefined ? prop.openInterestDate : undefined,
  closePrice: prop.closePrice !== undefined ? prop.closePrice : undefined,
  closePriceDate: prop.closePriceDate !== undefined ? prop.closePriceDate : undefined,
  ppind: prop.ppind !== undefined ? prop.ppind : undefined,
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  orderId: prop.orderId !== undefined ? prop.orderId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_CONTRACT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyContract) {
        return response.data.createManyContract;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyContract:', error);
      throw error;
    }
  },

  /**
   * Update a single Contract record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Contract or null.
   */
  async update(props: ContractType, globalClient?: ApolloClient<any>): Promise<ContractType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_CONTRACT = gql`
      mutation updateOneContract($data: ContractUpdateInput!, $where: ContractWhereUniqueInput!) {
        updateOneContract(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaId: props.alpacaId !== undefined ? props.alpacaId : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  underlyingAssetId: props.underlyingAssetId !== undefined ? {
    equals: props.underlyingAssetId 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
    set: props.id
  } : undefined,
  alpacaId: props.alpacaId !== undefined ? {
    set: props.alpacaId
  } : undefined,
  symbol: props.symbol !== undefined ? {
    set: props.symbol
  } : undefined,
  name: props.name !== undefined ? {
    set: props.name
  } : undefined,
  status: props.status !== undefined ? {
    set: props.status
  } : undefined,
  tradable: props.tradable !== undefined ? {
    set: props.tradable
  } : undefined,
  expirationDate: props.expirationDate !== undefined ? {
    set: props.expirationDate
  } : undefined,
  rootSymbol: props.rootSymbol !== undefined ? {
    set: props.rootSymbol
  } : undefined,
  underlyingSymbol: props.underlyingSymbol !== undefined ? {
    set: props.underlyingSymbol
  } : undefined,
  underlyingAssetId: props.underlyingAssetId !== undefined ? {
    set: props.underlyingAssetId
  } : undefined,
  type: props.type !== undefined ? {
    set: props.type
  } : undefined,
  style: props.style !== undefined ? {
    set: props.style
  } : undefined,
  strikePrice: props.strikePrice !== undefined ? {
    set: props.strikePrice
  } : undefined,
  multiplier: props.multiplier !== undefined ? {
    set: props.multiplier
  } : undefined,
  size: props.size !== undefined ? {
    set: props.size
  } : undefined,
  openInterest: props.openInterest !== undefined ? {
    set: props.openInterest
  } : undefined,
  openInterestDate: props.openInterestDate !== undefined ? {
    set: props.openInterestDate
  } : undefined,
  closePrice: props.closePrice !== undefined ? {
    set: props.closePrice
  } : undefined,
  closePriceDate: props.closePriceDate !== undefined ? {
    set: props.closePriceDate
  } : undefined,
  ppind: props.ppind !== undefined ? {
    set: props.ppind
  } : undefined,
  orderId: props.orderId !== undefined ? {
    set: props.orderId
  } : undefined,
  createdAt: props.createdAt !== undefined ? {
    set: props.createdAt
  } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
    set: props.updatedAt
  } : undefined,
  deliverables: props.deliverables !== undefined ? {
    set: props.deliverables
  } : undefined,
  asset: props.asset !== undefined ? {
    set: props.asset
  } : undefined,
  order: props.order !== undefined ? {
    set: props.order
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_CONTRACT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneContract) {
        return response.data.updateOneContract;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneContract:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Contract record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Contract or null.
   */
  async upsert(props: ContractType, globalClient?: ApolloClient<any>): Promise<ContractType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_CONTRACT = gql`
      mutation upsertOneContract($where: ContractWhereUniqueInput!, $create: ContractCreateInput!, $update: ContractUpdateInput!) {
        upsertOneContract(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaId: props.alpacaId !== undefined ? props.alpacaId : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  underlyingAssetId: props.underlyingAssetId !== undefined ? {
    equals: props.underlyingAssetId 
  } : undefined,
      },
      create: {
    alpacaId: props.alpacaId !== undefined ? props.alpacaId : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  name: props.name !== undefined ? props.name : undefined,
  status: props.status !== undefined ? props.status : undefined,
  tradable: props.tradable !== undefined ? props.tradable : undefined,
  expirationDate: props.expirationDate !== undefined ? props.expirationDate : undefined,
  rootSymbol: props.rootSymbol !== undefined ? props.rootSymbol : undefined,
  underlyingSymbol: props.underlyingSymbol !== undefined ? props.underlyingSymbol : undefined,
  underlyingAssetId: props.underlyingAssetId !== undefined ? props.underlyingAssetId : undefined,
  type: props.type !== undefined ? props.type : undefined,
  style: props.style !== undefined ? props.style : undefined,
  strikePrice: props.strikePrice !== undefined ? props.strikePrice : undefined,
  multiplier: props.multiplier !== undefined ? props.multiplier : undefined,
  size: props.size !== undefined ? props.size : undefined,
  openInterest: props.openInterest !== undefined ? props.openInterest : undefined,
  openInterestDate: props.openInterestDate !== undefined ? props.openInterestDate : undefined,
  closePrice: props.closePrice !== undefined ? props.closePrice : undefined,
  closePriceDate: props.closePriceDate !== undefined ? props.closePriceDate : undefined,
  ppind: props.ppind !== undefined ? props.ppind : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
  deliverables: props.deliverables ? 
    Array.isArray(props.deliverables) && props.deliverables.length > 0 && props.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.deliverables.map((item: any) => ({
        id: item.id
      }))
} : { connectOrCreate: props.deliverables.map((item: any) => ({
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
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 && props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.positions.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.positions.map((item: any) => ({
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
    action: props.order.action ? 
      typeof props.order.action === 'object' && Object.keys(props.order.action).length === 1 && Object.keys(props.order.action)[0] === 'id'
    ? { connect: {
          id: props.order.action.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.order.action.id !== undefined ? props.order.action.id : undefined,
          tradeId: props.order.action.tradeId !== undefined ? {
              equals: props.order.action.tradeId 
             } : undefined,
        },
        create: {
          sequence: props.order.action.sequence !== undefined ? props.order.action.sequence : undefined,
          type: props.order.action.type !== undefined ? props.order.action.type : undefined,
          note: props.order.action.note !== undefined ? props.order.action.note : undefined,
          status: props.order.action.status !== undefined ? props.order.action.status : undefined,
          fee: props.order.action.fee !== undefined ? props.order.action.fee : undefined,
          dependsOn: props.order.action.dependsOn !== undefined ? {
            set: props.order.action.dependsOn
          } : undefined,
          dependedOnBy: props.order.action.dependedOnBy !== undefined ? {
            set: props.order.action.dependedOnBy
          } : undefined,
      trade: props.order.action.trade ? 
        typeof props.order.action.trade === 'object' && Object.keys(props.order.action.trade).length === 1 && Object.keys(props.order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.order.action.trade.id
          }}
    : { connectOrCreate: {
          where: {
            id: props.order.action.trade.id !== undefined ? props.order.action.trade.id : undefined,
            alpacaAccountId: props.order.action.trade.alpacaAccountId !== undefined ? {
                equals: props.order.action.trade.alpacaAccountId 
               } : undefined,
          },
          create: {
            qty: props.order.action.trade.qty !== undefined ? props.order.action.trade.qty : undefined,
            price: props.order.action.trade.price !== undefined ? props.order.action.trade.price : undefined,
            total: props.order.action.trade.total !== undefined ? props.order.action.trade.total : undefined,
            optionType: props.order.action.trade.optionType !== undefined ? props.order.action.trade.optionType : undefined,
            signal: props.order.action.trade.signal !== undefined ? props.order.action.trade.signal : undefined,
            strategy: props.order.action.trade.strategy !== undefined ? props.order.action.trade.strategy : undefined,
            analysis: props.order.action.trade.analysis !== undefined ? props.order.action.trade.analysis : undefined,
            summary: props.order.action.trade.summary !== undefined ? props.order.action.trade.summary : undefined,
            confidence: props.order.action.trade.confidence !== undefined ? props.order.action.trade.confidence : undefined,
            timestamp: props.order.action.trade.timestamp !== undefined ? props.order.action.trade.timestamp : undefined,
            status: props.order.action.trade.status !== undefined ? props.order.action.trade.status : undefined,
          },
        }
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
      },
    }
  } : undefined,
      },
      update: {
  alpacaId: props.alpacaId !== undefined ? {
    set: props.alpacaId
  } : undefined,
  symbol: props.symbol !== undefined ? {
    set: props.symbol
  } : undefined,
  name: props.name !== undefined ? {
    set: props.name
  } : undefined,
  status: props.status !== undefined ? {
    set: props.status
  } : undefined,
  tradable: props.tradable !== undefined ? {
    set: props.tradable
  } : undefined,
  expirationDate: props.expirationDate !== undefined ? {
    set: props.expirationDate
  } : undefined,
  rootSymbol: props.rootSymbol !== undefined ? {
    set: props.rootSymbol
  } : undefined,
  underlyingSymbol: props.underlyingSymbol !== undefined ? {
    set: props.underlyingSymbol
  } : undefined,
  underlyingAssetId: props.underlyingAssetId !== undefined ? {
    set: props.underlyingAssetId
  } : undefined,
  type: props.type !== undefined ? {
    set: props.type
  } : undefined,
  style: props.style !== undefined ? {
    set: props.style
  } : undefined,
  strikePrice: props.strikePrice !== undefined ? {
    set: props.strikePrice
  } : undefined,
  multiplier: props.multiplier !== undefined ? {
    set: props.multiplier
  } : undefined,
  size: props.size !== undefined ? {
    set: props.size
  } : undefined,
  openInterest: props.openInterest !== undefined ? {
    set: props.openInterest
  } : undefined,
  openInterestDate: props.openInterestDate !== undefined ? {
    set: props.openInterestDate
  } : undefined,
  closePrice: props.closePrice !== undefined ? {
    set: props.closePrice
  } : undefined,
  closePriceDate: props.closePriceDate !== undefined ? {
    set: props.closePriceDate
  } : undefined,
  ppind: props.ppind !== undefined ? {
    set: props.ppind
  } : undefined,
  orderId: props.orderId !== undefined ? {
    set: props.orderId
  } : undefined,
  deliverables: props.deliverables !== undefined ? {
    set: props.deliverables
  } : undefined,
  asset: props.asset !== undefined ? {
    set: props.asset
  } : undefined,
  order: props.order !== undefined ? {
    set: props.order
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_CONTRACT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneContract) {
        return response.data.upsertOneContract;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneContract:', error);
      throw error;
    }
  },

  /**
   * Update multiple Contract records.
   * @param props - Array of Contract objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: ContractType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_CONTRACT = gql`
      mutation updateManyContract($data: [ContractCreateManyInput!]!) {
        updateManyContract(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  alpacaId: prop.alpacaId !== undefined ? prop.alpacaId : undefined,
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  name: prop.name !== undefined ? {
    equals: prop.name 
  } : undefined,
  underlyingAssetId: prop.underlyingAssetId !== undefined ? {
    equals: prop.underlyingAssetId 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
    set: prop.id
  } : undefined,
  alpacaId: prop.alpacaId !== undefined ? {
    set: prop.alpacaId
  } : undefined,
  symbol: prop.symbol !== undefined ? {
    set: prop.symbol
  } : undefined,
  name: prop.name !== undefined ? {
    set: prop.name
  } : undefined,
  status: prop.status !== undefined ? {
    set: prop.status
  } : undefined,
  tradable: prop.tradable !== undefined ? {
    set: prop.tradable
  } : undefined,
  expirationDate: prop.expirationDate !== undefined ? {
    set: prop.expirationDate
  } : undefined,
  rootSymbol: prop.rootSymbol !== undefined ? {
    set: prop.rootSymbol
  } : undefined,
  underlyingSymbol: prop.underlyingSymbol !== undefined ? {
    set: prop.underlyingSymbol
  } : undefined,
  underlyingAssetId: prop.underlyingAssetId !== undefined ? {
    set: prop.underlyingAssetId
  } : undefined,
  type: prop.type !== undefined ? {
    set: prop.type
  } : undefined,
  style: prop.style !== undefined ? {
    set: prop.style
  } : undefined,
  strikePrice: prop.strikePrice !== undefined ? {
    set: prop.strikePrice
  } : undefined,
  multiplier: prop.multiplier !== undefined ? {
    set: prop.multiplier
  } : undefined,
  size: prop.size !== undefined ? {
    set: prop.size
  } : undefined,
  openInterest: prop.openInterest !== undefined ? {
    set: prop.openInterest
  } : undefined,
  openInterestDate: prop.openInterestDate !== undefined ? {
    set: prop.openInterestDate
  } : undefined,
  closePrice: prop.closePrice !== undefined ? {
    set: prop.closePrice
  } : undefined,
  closePriceDate: prop.closePriceDate !== undefined ? {
    set: prop.closePriceDate
  } : undefined,
  ppind: prop.ppind !== undefined ? {
    set: prop.ppind
  } : undefined,
  orderId: prop.orderId !== undefined ? {
    set: prop.orderId
  } : undefined,
  createdAt: prop.createdAt !== undefined ? {
    set: prop.createdAt
  } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
    set: prop.updatedAt
  } : undefined,
  deliverables: prop.deliverables !== undefined ? {
    set: prop.deliverables
  } : undefined,
  asset: prop.asset !== undefined ? {
    set: prop.asset
  } : undefined,
  order: prop.order !== undefined ? {
    set: prop.order
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_CONTRACT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyContract) {
        return response.data.updateManyContract;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyContract:', error);
      throw error;
    }
  },

  /**
   * Delete a single Contract record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Contract or null.
   */
  async delete(props: ContractType, globalClient?: ApolloClient<any>): Promise<ContractType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_CONTRACT = gql`
      mutation deleteOneContract($where: ContractWhereUniqueInput!) {
        deleteOneContract(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_CONTRACT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneContract) {
        return response.data.deleteOneContract;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneContract:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Contract record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Contract or null.
   */
  async get(props: ContractType, globalClient?: ApolloClient<any>): Promise<ContractType | null> {

    const client = globalClient || importedClient;

    const GET_CONTRACT = gql`
      query getContract($where: ContractWhereUniqueInput!) {
        getContract(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaId: props.alpacaId !== undefined ? props.alpacaId : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  underlyingAssetId: props.underlyingAssetId !== undefined ? {
    equals: props.underlyingAssetId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_CONTRACT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getContract ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Contract found') {
        return null;
      } else {
        console.error('Error in getContract:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Contracts records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Contract records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<ContractType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_CONTRACT = gql`
      query getAllContract {
        contracts {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_CONTRACT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.contracts ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Contract found') {
        return null;
      } else {
        console.error('Error in getContract:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Contract records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Contract records or null.
   */
  async findMany(props: ContractType, globalClient?: ApolloClient<any>): Promise<ContractType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_CONTRACT = gql`
      query findManyContract($where: ContractWhereInput!) {
        contracts(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  alpacaId: props.alpacaId !== undefined ? {
    equals: props.alpacaId 
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  underlyingAssetId: props.underlyingAssetId !== undefined ? {
    equals: props.underlyingAssetId 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_CONTRACT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Contracts) {
        return response.data.contracts;
      } else {
       return [] as ContractType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Contract found') {
        return null;
      } else {
        console.error('Error in getContract:', error);
        throw error;
      }
    }
  }
};
