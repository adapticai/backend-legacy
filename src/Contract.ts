
  
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
        trades: props.asset.trades !== undefined ? {
            set: props.asset.trades
          } : undefined,
        orders: props.asset.orders !== undefined ? {
            set: props.asset.orders
          } : undefined,
        positions: props.asset.positions !== undefined ? {
            set: props.asset.positions
          } : undefined,
        newsMentions: props.asset.newsMentions !== undefined ? {
            set: props.asset.newsMentions
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
        stopLoss: props.order.stopLoss !== undefined ? {
            set: props.order.stopLoss
          } : undefined,
        takeProfit: props.order.takeProfit !== undefined ? {
            set: props.order.takeProfit
          } : undefined,
        alpacaAccount: props.order.alpacaAccount !== undefined ? {
            set: props.order.alpacaAccount
          } : undefined,
        action: props.order.action !== undefined ? {
            set: props.order.action
          } : undefined,
        asset: props.order.asset !== undefined ? {
            set: props.order.asset
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
        trades: props.asset.trades !== undefined ? {
            set: props.asset.trades
          } : undefined,
        orders: props.asset.orders !== undefined ? {
            set: props.asset.orders
          } : undefined,
        positions: props.asset.positions !== undefined ? {
            set: props.asset.positions
          } : undefined,
        newsMentions: props.asset.newsMentions !== undefined ? {
            set: props.asset.newsMentions
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
        stopLoss: props.order.stopLoss !== undefined ? {
            set: props.order.stopLoss
          } : undefined,
        takeProfit: props.order.takeProfit !== undefined ? {
            set: props.order.takeProfit
          } : undefined,
        alpacaAccount: props.order.alpacaAccount !== undefined ? {
            set: props.order.alpacaAccount
          } : undefined,
        action: props.order.action !== undefined ? {
            set: props.order.action
          } : undefined,
        asset: props.order.asset !== undefined ? {
            set: props.order.asset
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
