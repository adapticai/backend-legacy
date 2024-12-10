
  
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
    Array.isArray(props.deliverables) && props.deliverables.length > 0 &&  props.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.deliverables.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.deliverables.map((item: any) => ({
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
    trades: props.asset.trades ? 
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 &&  props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.trades.map((item: any) => ({
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
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
      Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0 &&  props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.newsMentions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.newsMentions.map((item: any) => ({
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
            }
          }
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
          minOrderSize: props.order.alpacaAccount.minOrderSize !== undefined ? props.order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.order.alpacaAccount.maxOrderSize !== undefined ? props.order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
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
      trades: props.order.alpacaAccount.trades ? 
        Array.isArray(props.order.alpacaAccount.trades) && props.order.alpacaAccount.trades.length > 0 &&  props.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
    action: props.order.action ? 
      typeof props.order.action === 'object' && Object.keys(props.order.action).length === 1 && Object.keys(props.order.action)[0] === 'id'
    ? { connect: {
          id: props.order.action.id
          }
        }
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
            }
          }
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
      trades: props.order.asset.trades ? 
        Array.isArray(props.order.asset.trades) && props.order.asset.trades.length > 0 &&  props.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
  deliverables: props.deliverables ? 
  Array.isArray(props.deliverables) && props.deliverables.length > 0 && props.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
  connect: props.deliverables.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.deliverables.map((item: any) => ({
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
  asset: props.asset ? 
  typeof props.asset === 'object' && Object.keys(props.asset).length === 1 && Object.keys(props.asset)[0] === 'id'
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
    trades: props.asset.trades ? 
    Array.isArray(props.asset.trades) && props.asset.trades.length > 0 && props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
    connect: props.asset.trades.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.asset.trades.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize
              } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
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
} : { upsert: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            sequence: item.sequence !== undefined ? {
                set: item.sequence
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            note: item.note !== undefined ? {
                set: item.note
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee
              } : undefined,
            dependsOn: item.dependsOn !== undefined ? {
                set: item.dependsOn
              } : undefined,
            dependedOnBy: item.dependedOnBy !== undefined ? {
                set: item.dependedOnBy
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
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
      typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
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
      typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && Object.keys(item.takeProfit)[0] === 'id'
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
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize
              } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
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
            note: item.action.note !== undefined ? {
                set: item.action.note
              } : undefined,
            status: item.action.status !== undefined ? {
                set: item.action.status
              } : undefined,
            fee: item.action.fee !== undefined ? {
                set: item.action.fee
              } : undefined,
            dependsOn: item.action.dependsOn !== undefined ? {
                set: item.action.dependsOn
              } : undefined,
            dependedOnBy: item.action.dependedOnBy !== undefined ? {
                set: item.action.dependedOnBy
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
    Array.isArray(props.asset.positions) && props.asset.positions.length > 0 && props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
    connect: props.asset.positions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize
              } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
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
} : { upsert: props.asset.newsMentions.map((item: any) => ({
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
      news: item.news ? 
      typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
? {
      connect: {
        id: item.news.id
      }
} : { upsert: {
          where: {
            id: item.news.id !== undefined ? {
                equals: item.news.id
              } : undefined,
            title: item.news.title !== undefined ? {
                equals: item.news.title
              } : undefined,
            url: item.news.url !== undefined ? {
                equals: item.news.url
              } : undefined,
          },
          update: {
            id: item.news.id !== undefined ? {
                set: item.news.id
              } : undefined,
            title: item.news.title !== undefined ? {
                set: item.news.title
              } : undefined,
            content: item.news.content !== undefined ? {
                set: item.news.content
              } : undefined,
            source: item.news.source !== undefined ? {
                set: item.news.source
              } : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? {
                set: item.news.sourceDomain
              } : undefined,
            url: item.news.url !== undefined ? {
                set: item.news.url
              } : undefined,
            sentiment: item.news.sentiment !== undefined ? {
                set: item.news.sentiment
              } : undefined,
            authors: item.news.authors !== undefined ? {
                set: item.news.authors
              } : undefined,
            summary: item.news.summary !== undefined ? {
                set: item.news.summary
              } : undefined,
            bannerImage: item.news.bannerImage !== undefined ? {
                set: item.news.bannerImage
              } : undefined,
            timePublished: item.news.timePublished !== undefined ? {
                set: item.news.timePublished
              } : undefined,
            category: item.news.category !== undefined ? {
                set: item.news.category
              } : undefined,
            topics: item.news.topics !== undefined ? {
                set: item.news.topics
              } : undefined,
            logo: item.news.logo !== undefined ? {
                set: item.news.logo
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
        create: {
          url: item.url !== undefined ? item.url : undefined,
          relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
          sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
      news: item.news ? 
        typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
            id: item.news.id
            }
          }
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
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 &&  props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.trades.map((item: any) => ({
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
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
      Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0 &&  props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.newsMentions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.newsMentions.map((item: any) => ({
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
            }
          }
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
    typeof props.order.stopLoss === 'object' && Object.keys(props.order.stopLoss).length === 1 && Object.keys(props.order.stopLoss)[0] === 'id'
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
    typeof props.order.takeProfit === 'object' && Object.keys(props.order.takeProfit).length === 1 && Object.keys(props.order.takeProfit)[0] === 'id'
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
    typeof props.order.alpacaAccount === 'object' && Object.keys(props.order.alpacaAccount).length === 1 && Object.keys(props.order.alpacaAccount)[0] === 'id'
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
          minOrderSize: props.order.alpacaAccount.minOrderSize !== undefined ? {
              set: props.order.alpacaAccount.minOrderSize
            } : undefined,
          maxOrderSize: props.order.alpacaAccount.maxOrderSize !== undefined ? {
              set: props.order.alpacaAccount.maxOrderSize
            } : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? {
              set: props.order.alpacaAccount.minPercentageChange
            } : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? {
              set: props.order.alpacaAccount.volumeThreshold
            } : undefined,
      user: props.order.alpacaAccount.user ? 
      typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && Object.keys(props.order.alpacaAccount.user)[0] === 'id'
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
      trades: props.order.alpacaAccount.trades ? 
      Array.isArray(props.order.alpacaAccount.trades) && props.order.alpacaAccount.trades.length > 0 && props.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.order.alpacaAccount.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.alpacaAccount.trades.map((item: any) => ({
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
      positions: props.order.alpacaAccount.positions ? 
      Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 && props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.order.alpacaAccount.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
      Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 && props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
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
          minOrderSize: props.order.alpacaAccount.minOrderSize !== undefined ? props.order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.order.alpacaAccount.maxOrderSize !== undefined ? props.order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
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
      trades: props.order.alpacaAccount.trades ? 
        Array.isArray(props.order.alpacaAccount.trades) && props.order.alpacaAccount.trades.length > 0 &&  props.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
    action: props.order.action ? 
    typeof props.order.action === 'object' && Object.keys(props.order.action).length === 1 && Object.keys(props.order.action)[0] === 'id'
? {
    connect: {
      id: props.order.action.id
    }
} : { upsert: {
        where: {
          id: props.order.action.id !== undefined ? {
              equals: props.order.action.id
            } : undefined,
          tradeId: props.order.action.tradeId !== undefined ? {
              equals: props.order.action.tradeId
            } : undefined,
        },
        update: {
          id: props.order.action.id !== undefined ? {
              set: props.order.action.id
            } : undefined,
          sequence: props.order.action.sequence !== undefined ? {
              set: props.order.action.sequence
            } : undefined,
          type: props.order.action.type !== undefined ? {
              set: props.order.action.type
            } : undefined,
          note: props.order.action.note !== undefined ? {
              set: props.order.action.note
            } : undefined,
          status: props.order.action.status !== undefined ? {
              set: props.order.action.status
            } : undefined,
          fee: props.order.action.fee !== undefined ? {
              set: props.order.action.fee
            } : undefined,
          dependsOn: props.order.action.dependsOn !== undefined ? {
              set: props.order.action.dependsOn
            } : undefined,
          dependedOnBy: props.order.action.dependedOnBy !== undefined ? {
              set: props.order.action.dependedOnBy
            } : undefined,
      trade: props.order.action.trade ? 
      typeof props.order.action.trade === 'object' && Object.keys(props.order.action.trade).length === 1 && Object.keys(props.order.action.trade)[0] === 'id'
? {
      connect: {
        id: props.order.action.trade.id
      }
} : { upsert: {
          where: {
            id: props.order.action.trade.id !== undefined ? {
                equals: props.order.action.trade.id
              } : undefined,
            alpacaAccountId: props.order.action.trade.alpacaAccountId !== undefined ? {
                equals: props.order.action.trade.alpacaAccountId
              } : undefined,
            assetId: props.order.action.trade.assetId !== undefined ? {
                equals: props.order.action.trade.assetId
              } : undefined,
          },
          update: {
            id: props.order.action.trade.id !== undefined ? {
                set: props.order.action.trade.id
              } : undefined,
            qty: props.order.action.trade.qty !== undefined ? {
                set: props.order.action.trade.qty
              } : undefined,
            price: props.order.action.trade.price !== undefined ? {
                set: props.order.action.trade.price
              } : undefined,
            total: props.order.action.trade.total !== undefined ? {
                set: props.order.action.trade.total
              } : undefined,
            optionType: props.order.action.trade.optionType !== undefined ? {
                set: props.order.action.trade.optionType
              } : undefined,
            signal: props.order.action.trade.signal !== undefined ? {
                set: props.order.action.trade.signal
              } : undefined,
            strategy: props.order.action.trade.strategy !== undefined ? {
                set: props.order.action.trade.strategy
              } : undefined,
            analysis: props.order.action.trade.analysis !== undefined ? {
                set: props.order.action.trade.analysis
              } : undefined,
            summary: props.order.action.trade.summary !== undefined ? {
                set: props.order.action.trade.summary
              } : undefined,
            confidence: props.order.action.trade.confidence !== undefined ? {
                set: props.order.action.trade.confidence
              } : undefined,
            timestamp: props.order.action.trade.timestamp !== undefined ? {
                set: props.order.action.trade.timestamp
              } : undefined,
            status: props.order.action.trade.status !== undefined ? {
                set: props.order.action.trade.status
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
            }
          }
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
      trades: props.order.asset.trades ? 
      Array.isArray(props.order.asset.trades) && props.order.asset.trades.length > 0 && props.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.order.asset.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.asset.trades.map((item: any) => ({
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
      positions: props.order.asset.positions ? 
      Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 && props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.order.asset.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
      Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 && props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
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
      Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 && props.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
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
      trades: props.order.asset.trades ? 
        Array.isArray(props.order.asset.trades) && props.order.asset.trades.length > 0 &&  props.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
          minOrderSize: props.order.alpacaAccount.minOrderSize !== undefined ? props.order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.order.alpacaAccount.maxOrderSize !== undefined ? props.order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
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
      trades: props.order.alpacaAccount.trades ? 
        Array.isArray(props.order.alpacaAccount.trades) && props.order.alpacaAccount.trades.length > 0 &&  props.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
    action: props.order.action ? 
      typeof props.order.action === 'object' && Object.keys(props.order.action).length === 1 && Object.keys(props.order.action)[0] === 'id'
    ? { connect: {
          id: props.order.action.id
          }
        }
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
            }
          }
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
      trades: props.order.asset.trades ? 
        Array.isArray(props.order.asset.trades) && props.order.asset.trades.length > 0 &&  props.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
      },
    }
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
    Array.isArray(props.deliverables) && props.deliverables.length > 0 &&  props.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.deliverables.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.deliverables.map((item: any) => ({
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
    trades: props.asset.trades ? 
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 &&  props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.trades.map((item: any) => ({
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
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
      Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0 &&  props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.newsMentions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.newsMentions.map((item: any) => ({
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
            }
          }
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
          minOrderSize: props.order.alpacaAccount.minOrderSize !== undefined ? props.order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.order.alpacaAccount.maxOrderSize !== undefined ? props.order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
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
      trades: props.order.alpacaAccount.trades ? 
        Array.isArray(props.order.alpacaAccount.trades) && props.order.alpacaAccount.trades.length > 0 &&  props.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
    action: props.order.action ? 
      typeof props.order.action === 'object' && Object.keys(props.order.action).length === 1 && Object.keys(props.order.action)[0] === 'id'
    ? { connect: {
          id: props.order.action.id
          }
        }
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
            }
          }
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
      trades: props.order.asset.trades ? 
        Array.isArray(props.order.asset.trades) && props.order.asset.trades.length > 0 &&  props.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
  deliverables: props.deliverables ? 
  Array.isArray(props.deliverables) && props.deliverables.length > 0 && props.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
  connect: props.deliverables.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.deliverables.map((item: any) => ({
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
  asset: props.asset ? 
  typeof props.asset === 'object' && Object.keys(props.asset).length === 1 && Object.keys(props.asset)[0] === 'id'
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
    trades: props.asset.trades ? 
    Array.isArray(props.asset.trades) && props.asset.trades.length > 0 && props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
    connect: props.asset.trades.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.asset.trades.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize
              } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
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
} : { upsert: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            sequence: item.sequence !== undefined ? {
                set: item.sequence
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            note: item.note !== undefined ? {
                set: item.note
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee
              } : undefined,
            dependsOn: item.dependsOn !== undefined ? {
                set: item.dependsOn
              } : undefined,
            dependedOnBy: item.dependedOnBy !== undefined ? {
                set: item.dependedOnBy
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
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
      typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
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
      typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && Object.keys(item.takeProfit)[0] === 'id'
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
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize
              } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
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
            note: item.action.note !== undefined ? {
                set: item.action.note
              } : undefined,
            status: item.action.status !== undefined ? {
                set: item.action.status
              } : undefined,
            fee: item.action.fee !== undefined ? {
                set: item.action.fee
              } : undefined,
            dependsOn: item.action.dependsOn !== undefined ? {
                set: item.action.dependsOn
              } : undefined,
            dependedOnBy: item.action.dependedOnBy !== undefined ? {
                set: item.action.dependedOnBy
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
    Array.isArray(props.asset.positions) && props.asset.positions.length > 0 && props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
    connect: props.asset.positions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize
              } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
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
} : { upsert: props.asset.newsMentions.map((item: any) => ({
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
      news: item.news ? 
      typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
? {
      connect: {
        id: item.news.id
      }
} : { upsert: {
          where: {
            id: item.news.id !== undefined ? {
                equals: item.news.id
              } : undefined,
            title: item.news.title !== undefined ? {
                equals: item.news.title
              } : undefined,
            url: item.news.url !== undefined ? {
                equals: item.news.url
              } : undefined,
          },
          update: {
            id: item.news.id !== undefined ? {
                set: item.news.id
              } : undefined,
            title: item.news.title !== undefined ? {
                set: item.news.title
              } : undefined,
            content: item.news.content !== undefined ? {
                set: item.news.content
              } : undefined,
            source: item.news.source !== undefined ? {
                set: item.news.source
              } : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? {
                set: item.news.sourceDomain
              } : undefined,
            url: item.news.url !== undefined ? {
                set: item.news.url
              } : undefined,
            sentiment: item.news.sentiment !== undefined ? {
                set: item.news.sentiment
              } : undefined,
            authors: item.news.authors !== undefined ? {
                set: item.news.authors
              } : undefined,
            summary: item.news.summary !== undefined ? {
                set: item.news.summary
              } : undefined,
            bannerImage: item.news.bannerImage !== undefined ? {
                set: item.news.bannerImage
              } : undefined,
            timePublished: item.news.timePublished !== undefined ? {
                set: item.news.timePublished
              } : undefined,
            category: item.news.category !== undefined ? {
                set: item.news.category
              } : undefined,
            topics: item.news.topics !== undefined ? {
                set: item.news.topics
              } : undefined,
            logo: item.news.logo !== undefined ? {
                set: item.news.logo
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
        create: {
          url: item.url !== undefined ? item.url : undefined,
          relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
          sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
      news: item.news ? 
        typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
            id: item.news.id
            }
          }
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
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 &&  props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.trades.map((item: any) => ({
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
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
      Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0 &&  props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.newsMentions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.newsMentions.map((item: any) => ({
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
            }
          }
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
    typeof props.order.stopLoss === 'object' && Object.keys(props.order.stopLoss).length === 1 && Object.keys(props.order.stopLoss)[0] === 'id'
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
    typeof props.order.takeProfit === 'object' && Object.keys(props.order.takeProfit).length === 1 && Object.keys(props.order.takeProfit)[0] === 'id'
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
    typeof props.order.alpacaAccount === 'object' && Object.keys(props.order.alpacaAccount).length === 1 && Object.keys(props.order.alpacaAccount)[0] === 'id'
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
          minOrderSize: props.order.alpacaAccount.minOrderSize !== undefined ? {
              set: props.order.alpacaAccount.minOrderSize
            } : undefined,
          maxOrderSize: props.order.alpacaAccount.maxOrderSize !== undefined ? {
              set: props.order.alpacaAccount.maxOrderSize
            } : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? {
              set: props.order.alpacaAccount.minPercentageChange
            } : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? {
              set: props.order.alpacaAccount.volumeThreshold
            } : undefined,
      user: props.order.alpacaAccount.user ? 
      typeof props.order.alpacaAccount.user === 'object' && Object.keys(props.order.alpacaAccount.user).length === 1 && Object.keys(props.order.alpacaAccount.user)[0] === 'id'
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
      trades: props.order.alpacaAccount.trades ? 
      Array.isArray(props.order.alpacaAccount.trades) && props.order.alpacaAccount.trades.length > 0 && props.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.order.alpacaAccount.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.alpacaAccount.trades.map((item: any) => ({
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
      positions: props.order.alpacaAccount.positions ? 
      Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 && props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.order.alpacaAccount.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.order.alpacaAccount.alerts ? 
      Array.isArray(props.order.alpacaAccount.alerts) && props.order.alpacaAccount.alerts.length > 0 && props.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
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
          minOrderSize: props.order.alpacaAccount.minOrderSize !== undefined ? props.order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.order.alpacaAccount.maxOrderSize !== undefined ? props.order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
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
      trades: props.order.alpacaAccount.trades ? 
        Array.isArray(props.order.alpacaAccount.trades) && props.order.alpacaAccount.trades.length > 0 &&  props.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
    action: props.order.action ? 
    typeof props.order.action === 'object' && Object.keys(props.order.action).length === 1 && Object.keys(props.order.action)[0] === 'id'
? {
    connect: {
      id: props.order.action.id
    }
} : { upsert: {
        where: {
          id: props.order.action.id !== undefined ? {
              equals: props.order.action.id
            } : undefined,
          tradeId: props.order.action.tradeId !== undefined ? {
              equals: props.order.action.tradeId
            } : undefined,
        },
        update: {
          id: props.order.action.id !== undefined ? {
              set: props.order.action.id
            } : undefined,
          sequence: props.order.action.sequence !== undefined ? {
              set: props.order.action.sequence
            } : undefined,
          type: props.order.action.type !== undefined ? {
              set: props.order.action.type
            } : undefined,
          note: props.order.action.note !== undefined ? {
              set: props.order.action.note
            } : undefined,
          status: props.order.action.status !== undefined ? {
              set: props.order.action.status
            } : undefined,
          fee: props.order.action.fee !== undefined ? {
              set: props.order.action.fee
            } : undefined,
          dependsOn: props.order.action.dependsOn !== undefined ? {
              set: props.order.action.dependsOn
            } : undefined,
          dependedOnBy: props.order.action.dependedOnBy !== undefined ? {
              set: props.order.action.dependedOnBy
            } : undefined,
      trade: props.order.action.trade ? 
      typeof props.order.action.trade === 'object' && Object.keys(props.order.action.trade).length === 1 && Object.keys(props.order.action.trade)[0] === 'id'
? {
      connect: {
        id: props.order.action.trade.id
      }
} : { upsert: {
          where: {
            id: props.order.action.trade.id !== undefined ? {
                equals: props.order.action.trade.id
              } : undefined,
            alpacaAccountId: props.order.action.trade.alpacaAccountId !== undefined ? {
                equals: props.order.action.trade.alpacaAccountId
              } : undefined,
            assetId: props.order.action.trade.assetId !== undefined ? {
                equals: props.order.action.trade.assetId
              } : undefined,
          },
          update: {
            id: props.order.action.trade.id !== undefined ? {
                set: props.order.action.trade.id
              } : undefined,
            qty: props.order.action.trade.qty !== undefined ? {
                set: props.order.action.trade.qty
              } : undefined,
            price: props.order.action.trade.price !== undefined ? {
                set: props.order.action.trade.price
              } : undefined,
            total: props.order.action.trade.total !== undefined ? {
                set: props.order.action.trade.total
              } : undefined,
            optionType: props.order.action.trade.optionType !== undefined ? {
                set: props.order.action.trade.optionType
              } : undefined,
            signal: props.order.action.trade.signal !== undefined ? {
                set: props.order.action.trade.signal
              } : undefined,
            strategy: props.order.action.trade.strategy !== undefined ? {
                set: props.order.action.trade.strategy
              } : undefined,
            analysis: props.order.action.trade.analysis !== undefined ? {
                set: props.order.action.trade.analysis
              } : undefined,
            summary: props.order.action.trade.summary !== undefined ? {
                set: props.order.action.trade.summary
              } : undefined,
            confidence: props.order.action.trade.confidence !== undefined ? {
                set: props.order.action.trade.confidence
              } : undefined,
            timestamp: props.order.action.trade.timestamp !== undefined ? {
                set: props.order.action.trade.timestamp
              } : undefined,
            status: props.order.action.trade.status !== undefined ? {
                set: props.order.action.trade.status
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
            }
          }
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
      trades: props.order.asset.trades ? 
      Array.isArray(props.order.asset.trades) && props.order.asset.trades.length > 0 && props.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.order.asset.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.asset.trades.map((item: any) => ({
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
      positions: props.order.asset.positions ? 
      Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 && props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: props.order.asset.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.order.asset.positions.map((item: any) => ({
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
      newsMentions: props.order.asset.newsMentions ? 
      Array.isArray(props.order.asset.newsMentions) && props.order.asset.newsMentions.length > 0 && props.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
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
      Array.isArray(props.order.asset.contracts) && props.order.asset.contracts.length > 0 && props.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
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
      trades: props.order.asset.trades ? 
        Array.isArray(props.order.asset.trades) && props.order.asset.trades.length > 0 &&  props.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
          minOrderSize: props.order.alpacaAccount.minOrderSize !== undefined ? props.order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.order.alpacaAccount.maxOrderSize !== undefined ? props.order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.order.alpacaAccount.minPercentageChange !== undefined ? props.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.order.alpacaAccount.volumeThreshold !== undefined ? props.order.alpacaAccount.volumeThreshold : undefined,
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
      trades: props.order.alpacaAccount.trades ? 
        Array.isArray(props.order.alpacaAccount.trades) && props.order.alpacaAccount.trades.length > 0 &&  props.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.trades.map((item: any) => ({
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
        Array.isArray(props.order.alpacaAccount.positions) && props.order.alpacaAccount.positions.length > 0 &&  props.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.alpacaAccount.positions.map((item: any) => ({
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
    action: props.order.action ? 
      typeof props.order.action === 'object' && Object.keys(props.order.action).length === 1 && Object.keys(props.order.action)[0] === 'id'
    ? { connect: {
          id: props.order.action.id
          }
        }
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
            }
          }
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
      trades: props.order.asset.trades ? 
        Array.isArray(props.order.asset.trades) && props.order.asset.trades.length > 0 &&  props.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.trades.map((item: any) => ({
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
        Array.isArray(props.order.asset.positions) && props.order.asset.positions.length > 0 &&  props.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.order.asset.positions.map((item: any) => ({
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
      },
    }
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
  deliverables: prop.deliverables ? 
  Array.isArray(prop.deliverables) && prop.deliverables.length > 0 && prop.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
  connect: prop.deliverables.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.deliverables.map((item: any) => ({
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
  asset: prop.asset ? 
  typeof prop.asset === 'object' && Object.keys(prop.asset).length === 1 && Object.keys(prop.asset)[0] === 'id'
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
    trades: prop.asset.trades ? 
    Array.isArray(prop.asset.trades) && prop.asset.trades.length > 0 && prop.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
    connect: prop.asset.trades.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.asset.trades.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize
              } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
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
} : { upsert: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            sequence: item.sequence !== undefined ? {
                set: item.sequence
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            note: item.note !== undefined ? {
                set: item.note
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee
              } : undefined,
            dependsOn: item.dependsOn !== undefined ? {
                set: item.dependsOn
              } : undefined,
            dependedOnBy: item.dependedOnBy !== undefined ? {
                set: item.dependedOnBy
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
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
    orders: prop.asset.orders ? 
    Array.isArray(prop.asset.orders) && prop.asset.orders.length > 0 && prop.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
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
      typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
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
      typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && Object.keys(item.takeProfit)[0] === 'id'
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
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize
              } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
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
            note: item.action.note !== undefined ? {
                set: item.action.note
              } : undefined,
            status: item.action.status !== undefined ? {
                set: item.action.status
              } : undefined,
            fee: item.action.fee !== undefined ? {
                set: item.action.fee
              } : undefined,
            dependsOn: item.action.dependsOn !== undefined ? {
                set: item.action.dependsOn
              } : undefined,
            dependedOnBy: item.action.dependedOnBy !== undefined ? {
                set: item.action.dependedOnBy
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
    Array.isArray(prop.asset.positions) && prop.asset.positions.length > 0 && prop.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
    connect: prop.asset.positions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
      typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize
              } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize
              } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold
              } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
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
    newsMentions: prop.asset.newsMentions ? 
    Array.isArray(prop.asset.newsMentions) && prop.asset.newsMentions.length > 0 && prop.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
    connect: prop.asset.newsMentions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.asset.newsMentions.map((item: any) => ({
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
      news: item.news ? 
      typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
? {
      connect: {
        id: item.news.id
      }
} : { upsert: {
          where: {
            id: item.news.id !== undefined ? {
                equals: item.news.id
              } : undefined,
            title: item.news.title !== undefined ? {
                equals: item.news.title
              } : undefined,
            url: item.news.url !== undefined ? {
                equals: item.news.url
              } : undefined,
          },
          update: {
            id: item.news.id !== undefined ? {
                set: item.news.id
              } : undefined,
            title: item.news.title !== undefined ? {
                set: item.news.title
              } : undefined,
            content: item.news.content !== undefined ? {
                set: item.news.content
              } : undefined,
            source: item.news.source !== undefined ? {
                set: item.news.source
              } : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? {
                set: item.news.sourceDomain
              } : undefined,
            url: item.news.url !== undefined ? {
                set: item.news.url
              } : undefined,
            sentiment: item.news.sentiment !== undefined ? {
                set: item.news.sentiment
              } : undefined,
            authors: item.news.authors !== undefined ? {
                set: item.news.authors
              } : undefined,
            summary: item.news.summary !== undefined ? {
                set: item.news.summary
              } : undefined,
            bannerImage: item.news.bannerImage !== undefined ? {
                set: item.news.bannerImage
              } : undefined,
            timePublished: item.news.timePublished !== undefined ? {
                set: item.news.timePublished
              } : undefined,
            category: item.news.category !== undefined ? {
                set: item.news.category
              } : undefined,
            topics: item.news.topics !== undefined ? {
                set: item.news.topics
              } : undefined,
            logo: item.news.logo !== undefined ? {
                set: item.news.logo
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
        create: {
          url: item.url !== undefined ? item.url : undefined,
          relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
          sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
      news: item.news ? 
        typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
            id: item.news.id
            }
          }
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
    trades: prop.asset.trades ? 
      Array.isArray(prop.asset.trades) && prop.asset.trades.length > 0 &&  prop.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.trades.map((item: any) => ({
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
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
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
    newsMentions: prop.asset.newsMentions ? 
      Array.isArray(prop.asset.newsMentions) && prop.asset.newsMentions.length > 0 &&  prop.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.newsMentions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.newsMentions.map((item: any) => ({
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
            }
          }
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
  order: prop.order ? 
  typeof prop.order === 'object' && Object.keys(prop.order).length === 1 && Object.keys(prop.order)[0] === 'id'
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
    typeof prop.order.stopLoss === 'object' && Object.keys(prop.order.stopLoss).length === 1 && Object.keys(prop.order.stopLoss)[0] === 'id'
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
    typeof prop.order.takeProfit === 'object' && Object.keys(prop.order.takeProfit).length === 1 && Object.keys(prop.order.takeProfit)[0] === 'id'
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
    typeof prop.order.alpacaAccount === 'object' && Object.keys(prop.order.alpacaAccount).length === 1 && Object.keys(prop.order.alpacaAccount)[0] === 'id'
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
          minOrderSize: prop.order.alpacaAccount.minOrderSize !== undefined ? {
              set: prop.order.alpacaAccount.minOrderSize
            } : undefined,
          maxOrderSize: prop.order.alpacaAccount.maxOrderSize !== undefined ? {
              set: prop.order.alpacaAccount.maxOrderSize
            } : undefined,
          minPercentageChange: prop.order.alpacaAccount.minPercentageChange !== undefined ? {
              set: prop.order.alpacaAccount.minPercentageChange
            } : undefined,
          volumeThreshold: prop.order.alpacaAccount.volumeThreshold !== undefined ? {
              set: prop.order.alpacaAccount.volumeThreshold
            } : undefined,
      user: prop.order.alpacaAccount.user ? 
      typeof prop.order.alpacaAccount.user === 'object' && Object.keys(prop.order.alpacaAccount.user).length === 1 && Object.keys(prop.order.alpacaAccount.user)[0] === 'id'
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
      trades: prop.order.alpacaAccount.trades ? 
      Array.isArray(prop.order.alpacaAccount.trades) && prop.order.alpacaAccount.trades.length > 0 && prop.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: prop.order.alpacaAccount.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.order.alpacaAccount.trades.map((item: any) => ({
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
      positions: prop.order.alpacaAccount.positions ? 
      Array.isArray(prop.order.alpacaAccount.positions) && prop.order.alpacaAccount.positions.length > 0 && prop.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: prop.order.alpacaAccount.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: prop.order.alpacaAccount.alerts ? 
      Array.isArray(prop.order.alpacaAccount.alerts) && prop.order.alpacaAccount.alerts.length > 0 && prop.order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
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
          minOrderSize: prop.order.alpacaAccount.minOrderSize !== undefined ? prop.order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: prop.order.alpacaAccount.maxOrderSize !== undefined ? prop.order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: prop.order.alpacaAccount.minPercentageChange !== undefined ? prop.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: prop.order.alpacaAccount.volumeThreshold !== undefined ? prop.order.alpacaAccount.volumeThreshold : undefined,
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
      trades: prop.order.alpacaAccount.trades ? 
        Array.isArray(prop.order.alpacaAccount.trades) && prop.order.alpacaAccount.trades.length > 0 &&  prop.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.alpacaAccount.trades.map((item: any) => ({
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
      positions: prop.order.alpacaAccount.positions ? 
        Array.isArray(prop.order.alpacaAccount.positions) && prop.order.alpacaAccount.positions.length > 0 &&  prop.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.alpacaAccount.positions.map((item: any) => ({
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
    action: prop.order.action ? 
    typeof prop.order.action === 'object' && Object.keys(prop.order.action).length === 1 && Object.keys(prop.order.action)[0] === 'id'
? {
    connect: {
      id: prop.order.action.id
    }
} : { upsert: {
        where: {
          id: prop.order.action.id !== undefined ? {
              equals: prop.order.action.id
            } : undefined,
          tradeId: prop.order.action.tradeId !== undefined ? {
              equals: prop.order.action.tradeId
            } : undefined,
        },
        update: {
          id: prop.order.action.id !== undefined ? {
              set: prop.order.action.id
            } : undefined,
          sequence: prop.order.action.sequence !== undefined ? {
              set: prop.order.action.sequence
            } : undefined,
          type: prop.order.action.type !== undefined ? {
              set: prop.order.action.type
            } : undefined,
          note: prop.order.action.note !== undefined ? {
              set: prop.order.action.note
            } : undefined,
          status: prop.order.action.status !== undefined ? {
              set: prop.order.action.status
            } : undefined,
          fee: prop.order.action.fee !== undefined ? {
              set: prop.order.action.fee
            } : undefined,
          dependsOn: prop.order.action.dependsOn !== undefined ? {
              set: prop.order.action.dependsOn
            } : undefined,
          dependedOnBy: prop.order.action.dependedOnBy !== undefined ? {
              set: prop.order.action.dependedOnBy
            } : undefined,
      trade: prop.order.action.trade ? 
      typeof prop.order.action.trade === 'object' && Object.keys(prop.order.action.trade).length === 1 && Object.keys(prop.order.action.trade)[0] === 'id'
? {
      connect: {
        id: prop.order.action.trade.id
      }
} : { upsert: {
          where: {
            id: prop.order.action.trade.id !== undefined ? {
                equals: prop.order.action.trade.id
              } : undefined,
            alpacaAccountId: prop.order.action.trade.alpacaAccountId !== undefined ? {
                equals: prop.order.action.trade.alpacaAccountId
              } : undefined,
            assetId: prop.order.action.trade.assetId !== undefined ? {
                equals: prop.order.action.trade.assetId
              } : undefined,
          },
          update: {
            id: prop.order.action.trade.id !== undefined ? {
                set: prop.order.action.trade.id
              } : undefined,
            qty: prop.order.action.trade.qty !== undefined ? {
                set: prop.order.action.trade.qty
              } : undefined,
            price: prop.order.action.trade.price !== undefined ? {
                set: prop.order.action.trade.price
              } : undefined,
            total: prop.order.action.trade.total !== undefined ? {
                set: prop.order.action.trade.total
              } : undefined,
            optionType: prop.order.action.trade.optionType !== undefined ? {
                set: prop.order.action.trade.optionType
              } : undefined,
            signal: prop.order.action.trade.signal !== undefined ? {
                set: prop.order.action.trade.signal
              } : undefined,
            strategy: prop.order.action.trade.strategy !== undefined ? {
                set: prop.order.action.trade.strategy
              } : undefined,
            analysis: prop.order.action.trade.analysis !== undefined ? {
                set: prop.order.action.trade.analysis
              } : undefined,
            summary: prop.order.action.trade.summary !== undefined ? {
                set: prop.order.action.trade.summary
              } : undefined,
            confidence: prop.order.action.trade.confidence !== undefined ? {
                set: prop.order.action.trade.confidence
              } : undefined,
            timestamp: prop.order.action.trade.timestamp !== undefined ? {
                set: prop.order.action.trade.timestamp
              } : undefined,
            status: prop.order.action.trade.status !== undefined ? {
                set: prop.order.action.trade.status
              } : undefined,
          },
          create: {
            qty: prop.order.action.trade.qty !== undefined ? prop.order.action.trade.qty : undefined,
            price: prop.order.action.trade.price !== undefined ? prop.order.action.trade.price : undefined,
            total: prop.order.action.trade.total !== undefined ? prop.order.action.trade.total : undefined,
            optionType: prop.order.action.trade.optionType !== undefined ? prop.order.action.trade.optionType : undefined,
            signal: prop.order.action.trade.signal !== undefined ? prop.order.action.trade.signal : undefined,
            strategy: prop.order.action.trade.strategy !== undefined ? prop.order.action.trade.strategy : undefined,
            analysis: prop.order.action.trade.analysis !== undefined ? prop.order.action.trade.analysis : undefined,
            summary: prop.order.action.trade.summary !== undefined ? prop.order.action.trade.summary : undefined,
            confidence: prop.order.action.trade.confidence !== undefined ? prop.order.action.trade.confidence : undefined,
            timestamp: prop.order.action.trade.timestamp !== undefined ? prop.order.action.trade.timestamp : undefined,
            status: prop.order.action.trade.status !== undefined ? prop.order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
        create: {
          sequence: prop.order.action.sequence !== undefined ? prop.order.action.sequence : undefined,
          type: prop.order.action.type !== undefined ? prop.order.action.type : undefined,
          note: prop.order.action.note !== undefined ? prop.order.action.note : undefined,
          status: prop.order.action.status !== undefined ? prop.order.action.status : undefined,
          fee: prop.order.action.fee !== undefined ? prop.order.action.fee : undefined,
          dependsOn: prop.order.action.dependsOn !== undefined ? {
              set: prop.order.action.dependsOn 
             } : undefined,
          dependedOnBy: prop.order.action.dependedOnBy !== undefined ? {
              set: prop.order.action.dependedOnBy 
             } : undefined,
      trade: prop.order.action.trade ? 
        typeof prop.order.action.trade === 'object' && Object.keys(prop.order.action.trade).length === 1 && Object.keys(prop.order.action.trade)[0] === 'id'
    ? { connect: {
            id: prop.order.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.order.action.trade.id !== undefined ? prop.order.action.trade.id : undefined,
            alpacaAccountId: prop.order.action.trade.alpacaAccountId !== undefined ? {
                equals: prop.order.action.trade.alpacaAccountId 
               } : undefined,
          },
          create: {
            qty: prop.order.action.trade.qty !== undefined ? prop.order.action.trade.qty : undefined,
            price: prop.order.action.trade.price !== undefined ? prop.order.action.trade.price : undefined,
            total: prop.order.action.trade.total !== undefined ? prop.order.action.trade.total : undefined,
            optionType: prop.order.action.trade.optionType !== undefined ? prop.order.action.trade.optionType : undefined,
            signal: prop.order.action.trade.signal !== undefined ? prop.order.action.trade.signal : undefined,
            strategy: prop.order.action.trade.strategy !== undefined ? prop.order.action.trade.strategy : undefined,
            analysis: prop.order.action.trade.analysis !== undefined ? prop.order.action.trade.analysis : undefined,
            summary: prop.order.action.trade.summary !== undefined ? prop.order.action.trade.summary : undefined,
            confidence: prop.order.action.trade.confidence !== undefined ? prop.order.action.trade.confidence : undefined,
            timestamp: prop.order.action.trade.timestamp !== undefined ? prop.order.action.trade.timestamp : undefined,
            status: prop.order.action.trade.status !== undefined ? prop.order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: prop.order.asset ? 
    typeof prop.order.asset === 'object' && Object.keys(prop.order.asset).length === 1 && Object.keys(prop.order.asset)[0] === 'id'
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
      trades: prop.order.asset.trades ? 
      Array.isArray(prop.order.asset.trades) && prop.order.asset.trades.length > 0 && prop.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: prop.order.asset.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.order.asset.trades.map((item: any) => ({
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
      positions: prop.order.asset.positions ? 
      Array.isArray(prop.order.asset.positions) && prop.order.asset.positions.length > 0 && prop.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect: prop.order.asset.positions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.order.asset.positions.map((item: any) => ({
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
      newsMentions: prop.order.asset.newsMentions ? 
      Array.isArray(prop.order.asset.newsMentions) && prop.order.asset.newsMentions.length > 0 && prop.order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
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
      Array.isArray(prop.order.asset.contracts) && prop.order.asset.contracts.length > 0 && prop.order.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
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
      trades: prop.order.asset.trades ? 
        Array.isArray(prop.order.asset.trades) && prop.order.asset.trades.length > 0 &&  prop.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.asset.trades.map((item: any) => ({
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
      positions: prop.order.asset.positions ? 
        Array.isArray(prop.order.asset.positions) && prop.order.asset.positions.length > 0 &&  prop.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.asset.positions.map((item: any) => ({
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
          minOrderSize: prop.order.alpacaAccount.minOrderSize !== undefined ? prop.order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: prop.order.alpacaAccount.maxOrderSize !== undefined ? prop.order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: prop.order.alpacaAccount.minPercentageChange !== undefined ? prop.order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: prop.order.alpacaAccount.volumeThreshold !== undefined ? prop.order.alpacaAccount.volumeThreshold : undefined,
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
      trades: prop.order.alpacaAccount.trades ? 
        Array.isArray(prop.order.alpacaAccount.trades) && prop.order.alpacaAccount.trades.length > 0 &&  prop.order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.alpacaAccount.trades.map((item: any) => ({
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
      positions: prop.order.alpacaAccount.positions ? 
        Array.isArray(prop.order.alpacaAccount.positions) && prop.order.alpacaAccount.positions.length > 0 &&  prop.order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.alpacaAccount.positions.map((item: any) => ({
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
    action: prop.order.action ? 
      typeof prop.order.action === 'object' && Object.keys(prop.order.action).length === 1 && Object.keys(prop.order.action)[0] === 'id'
    ? { connect: {
          id: prop.order.action.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.order.action.id !== undefined ? prop.order.action.id : undefined,
          tradeId: prop.order.action.tradeId !== undefined ? {
              equals: prop.order.action.tradeId 
             } : undefined,
        },
        create: {
          sequence: prop.order.action.sequence !== undefined ? prop.order.action.sequence : undefined,
          type: prop.order.action.type !== undefined ? prop.order.action.type : undefined,
          note: prop.order.action.note !== undefined ? prop.order.action.note : undefined,
          status: prop.order.action.status !== undefined ? prop.order.action.status : undefined,
          fee: prop.order.action.fee !== undefined ? prop.order.action.fee : undefined,
          dependsOn: prop.order.action.dependsOn !== undefined ? {
              set: prop.order.action.dependsOn 
             } : undefined,
          dependedOnBy: prop.order.action.dependedOnBy !== undefined ? {
              set: prop.order.action.dependedOnBy 
             } : undefined,
      trade: prop.order.action.trade ? 
        typeof prop.order.action.trade === 'object' && Object.keys(prop.order.action.trade).length === 1 && Object.keys(prop.order.action.trade)[0] === 'id'
    ? { connect: {
            id: prop.order.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.order.action.trade.id !== undefined ? prop.order.action.trade.id : undefined,
            alpacaAccountId: prop.order.action.trade.alpacaAccountId !== undefined ? {
                equals: prop.order.action.trade.alpacaAccountId 
               } : undefined,
          },
          create: {
            qty: prop.order.action.trade.qty !== undefined ? prop.order.action.trade.qty : undefined,
            price: prop.order.action.trade.price !== undefined ? prop.order.action.trade.price : undefined,
            total: prop.order.action.trade.total !== undefined ? prop.order.action.trade.total : undefined,
            optionType: prop.order.action.trade.optionType !== undefined ? prop.order.action.trade.optionType : undefined,
            signal: prop.order.action.trade.signal !== undefined ? prop.order.action.trade.signal : undefined,
            strategy: prop.order.action.trade.strategy !== undefined ? prop.order.action.trade.strategy : undefined,
            analysis: prop.order.action.trade.analysis !== undefined ? prop.order.action.trade.analysis : undefined,
            summary: prop.order.action.trade.summary !== undefined ? prop.order.action.trade.summary : undefined,
            confidence: prop.order.action.trade.confidence !== undefined ? prop.order.action.trade.confidence : undefined,
            timestamp: prop.order.action.trade.timestamp !== undefined ? prop.order.action.trade.timestamp : undefined,
            status: prop.order.action.trade.status !== undefined ? prop.order.action.trade.status : undefined,
          },
        }
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
      trades: prop.order.asset.trades ? 
        Array.isArray(prop.order.asset.trades) && prop.order.asset.trades.length > 0 &&  prop.order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.asset.trades.map((item: any) => ({
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
      positions: prop.order.asset.positions ? 
        Array.isArray(prop.order.asset.positions) && prop.order.asset.positions.length > 0 &&  prop.order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.order.asset.positions.map((item: any) => ({
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
      },
    }
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
