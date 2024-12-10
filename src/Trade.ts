
  
import { Trade as TradeType } from './generated/typegraphql-prisma/models/Trade';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Trade model.
   */

  const selectionSet = `
    
  id
  alpacaAccountId
  assetId
  qty
  price
  total
  optionType
  signal
  strategy
  analysis
  summary
  confidence
  timestamp
  createdAt
  updatedAt
  status
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
  actions {
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
  }

  `;

  export const Trade = {

    /**
     * Create a new Trade record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Trade or null.
     */

    async create(props: TradeType, globalClient?: ApolloClient<any>): Promise<TradeType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_TRADE = gql`
        mutation createOneTrade($data: TradeCreateInput!) {
          createOneTrade(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            qty: props.qty !== undefined ? props.qty : undefined,
  price: props.price !== undefined ? props.price : undefined,
  total: props.total !== undefined ? props.total : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
  signal: props.signal !== undefined ? props.signal : undefined,
  strategy: props.strategy !== undefined ? props.strategy : undefined,
  analysis: props.analysis !== undefined ? props.analysis : undefined,
  summary: props.summary !== undefined ? props.summary : undefined,
  confidence: props.confidence !== undefined ? props.confidence : undefined,
  timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  status: props.status !== undefined ? props.status : undefined,
  alpacaAccount: props.alpacaAccount ? 
    typeof props.alpacaAccount === 'object' && Object.keys(props.alpacaAccount).length === 1 && Object.keys(props.alpacaAccount)[0] === 'id'
    ? { connect: {
        id: props.alpacaAccount.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.alpacaAccount.id !== undefined ? props.alpacaAccount.id : undefined,
        userId: props.alpacaAccount.userId !== undefined ? {
            equals: props.alpacaAccount.userId 
           } : undefined,
      },
      create: {
        type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? props.alpacaAccount.realTime : undefined,
        minOrderSize: props.alpacaAccount.minOrderSize !== undefined ? props.alpacaAccount.minOrderSize : undefined,
        maxOrderSize: props.alpacaAccount.maxOrderSize !== undefined ? props.alpacaAccount.maxOrderSize : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
        user: props.alpacaAccount.user !== undefined ? {
            set: props.alpacaAccount.user
          } : undefined,
        orders: props.alpacaAccount.orders !== undefined ? {
            set: props.alpacaAccount.orders
          } : undefined,
        positions: props.alpacaAccount.positions !== undefined ? {
            set: props.alpacaAccount.positions
          } : undefined,
        alerts: props.alpacaAccount.alerts !== undefined ? {
            set: props.alpacaAccount.alerts
          } : undefined,
      },
    }
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
        orders: props.asset.orders !== undefined ? {
            set: props.asset.orders
          } : undefined,
        positions: props.asset.positions !== undefined ? {
            set: props.asset.positions
          } : undefined,
        newsMentions: props.asset.newsMentions !== undefined ? {
            set: props.asset.newsMentions
          } : undefined,
        contracts: props.asset.contracts !== undefined ? {
            set: props.asset.contracts
          } : undefined,
      },
    }
  } : undefined,
  actions: props.actions ? 
    Array.isArray(props.actions) && props.actions.length > 0 &&  props.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.actions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.actions.map((item: any) => ({
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
        order: item.order !== undefined ? {
            set: item.order
          } : undefined,
      },
    }))
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneTrade) {
        return response.data.createOneTrade;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneTrade:', error);
      throw error;
    }
  },

  /**
   * Create multiple Trade records.
   * @param props - Array of Trade objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: TradeType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_TRADE = gql`
      mutation createManyTrade($data: [TradeCreateManyInput!]!) {
        createManyTrade(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  qty: prop.qty !== undefined ? prop.qty : undefined,
  price: prop.price !== undefined ? prop.price : undefined,
  total: prop.total !== undefined ? prop.total : undefined,
  optionType: prop.optionType !== undefined ? prop.optionType : undefined,
  signal: prop.signal !== undefined ? prop.signal : undefined,
  strategy: prop.strategy !== undefined ? prop.strategy : undefined,
  analysis: prop.analysis !== undefined ? prop.analysis : undefined,
  summary: prop.summary !== undefined ? prop.summary : undefined,
  confidence: prop.confidence !== undefined ? prop.confidence : undefined,
  timestamp: prop.timestamp !== undefined ? prop.timestamp : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyTrade) {
        return response.data.createManyTrade;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyTrade:', error);
      throw error;
    }
  },

  /**
   * Update a single Trade record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Trade or null.
   */
  async update(props: TradeType, globalClient?: ApolloClient<any>): Promise<TradeType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_TRADE = gql`
      mutation updateOneTrade($data: TradeUpdateInput!, $where: TradeWhereUniqueInput!) {
        updateOneTrade(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  qty: props.qty !== undefined ? {
            set: props.qty 
           } : undefined,
  price: props.price !== undefined ? {
            set: props.price 
           } : undefined,
  total: props.total !== undefined ? {
            set: props.total 
           } : undefined,
  optionType: props.optionType !== undefined ? {
            set: props.optionType 
           } : undefined,
  signal: props.signal !== undefined ? {
            set: props.signal 
           } : undefined,
  strategy: props.strategy !== undefined ? {
            set: props.strategy 
           } : undefined,
  analysis: props.analysis !== undefined ? {
            set: props.analysis 
           } : undefined,
  summary: props.summary !== undefined ? {
            set: props.summary 
           } : undefined,
  confidence: props.confidence !== undefined ? {
            set: props.confidence 
           } : undefined,
  timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
            set: props.alpacaAccount 
           } : undefined,
  asset: props.asset !== undefined ? {
            set: props.asset 
           } : undefined,
  actions: props.actions !== undefined ? {
            set: props.actions 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneTrade) {
        return response.data.updateOneTrade;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneTrade:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Trade record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Trade or null.
   */
  async upsert(props: TradeType, globalClient?: ApolloClient<any>): Promise<TradeType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_TRADE = gql`
      mutation upsertOneTrade($where: TradeWhereUniqueInput!, $create: TradeCreateInput!, $update: TradeUpdateInput!) {
        upsertOneTrade(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
      create: {
    qty: props.qty !== undefined ? props.qty : undefined,
  price: props.price !== undefined ? props.price : undefined,
  total: props.total !== undefined ? props.total : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
  signal: props.signal !== undefined ? props.signal : undefined,
  strategy: props.strategy !== undefined ? props.strategy : undefined,
  analysis: props.analysis !== undefined ? props.analysis : undefined,
  summary: props.summary !== undefined ? props.summary : undefined,
  confidence: props.confidence !== undefined ? props.confidence : undefined,
  timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  status: props.status !== undefined ? props.status : undefined,
  alpacaAccount: props.alpacaAccount ? 
    typeof props.alpacaAccount === 'object' && Object.keys(props.alpacaAccount).length === 1 && Object.keys(props.alpacaAccount)[0] === 'id'
    ? { connect: {
        id: props.alpacaAccount.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.alpacaAccount.id !== undefined ? props.alpacaAccount.id : undefined,
        userId: props.alpacaAccount.userId !== undefined ? {
            equals: props.alpacaAccount.userId 
           } : undefined,
      },
      create: {
        type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? props.alpacaAccount.realTime : undefined,
        minOrderSize: props.alpacaAccount.minOrderSize !== undefined ? props.alpacaAccount.minOrderSize : undefined,
        maxOrderSize: props.alpacaAccount.maxOrderSize !== undefined ? props.alpacaAccount.maxOrderSize : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
        user: props.alpacaAccount.user !== undefined ? {
            set: props.alpacaAccount.user
          } : undefined,
        orders: props.alpacaAccount.orders !== undefined ? {
            set: props.alpacaAccount.orders
          } : undefined,
        positions: props.alpacaAccount.positions !== undefined ? {
            set: props.alpacaAccount.positions
          } : undefined,
        alerts: props.alpacaAccount.alerts !== undefined ? {
            set: props.alpacaAccount.alerts
          } : undefined,
      },
    }
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
        orders: props.asset.orders !== undefined ? {
            set: props.asset.orders
          } : undefined,
        positions: props.asset.positions !== undefined ? {
            set: props.asset.positions
          } : undefined,
        newsMentions: props.asset.newsMentions !== undefined ? {
            set: props.asset.newsMentions
          } : undefined,
        contracts: props.asset.contracts !== undefined ? {
            set: props.asset.contracts
          } : undefined,
      },
    }
  } : undefined,
  actions: props.actions ? 
    Array.isArray(props.actions) && props.actions.length > 0 &&  props.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.actions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.actions.map((item: any) => ({
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
        order: item.order !== undefined ? {
            set: item.order
          } : undefined,
      },
    }))
  } : undefined,
      },
      update: {
  qty: props.qty !== undefined ? {
            set: props.qty 
           } : undefined,
  price: props.price !== undefined ? {
            set: props.price 
           } : undefined,
  total: props.total !== undefined ? {
            set: props.total 
           } : undefined,
  optionType: props.optionType !== undefined ? {
            set: props.optionType 
           } : undefined,
  signal: props.signal !== undefined ? {
            set: props.signal 
           } : undefined,
  strategy: props.strategy !== undefined ? {
            set: props.strategy 
           } : undefined,
  analysis: props.analysis !== undefined ? {
            set: props.analysis 
           } : undefined,
  summary: props.summary !== undefined ? {
            set: props.summary 
           } : undefined,
  confidence: props.confidence !== undefined ? {
            set: props.confidence 
           } : undefined,
  timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
            set: props.alpacaAccount 
           } : undefined,
  asset: props.asset !== undefined ? {
            set: props.asset 
           } : undefined,
  actions: props.actions !== undefined ? {
            set: props.actions 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneTrade) {
        return response.data.upsertOneTrade;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneTrade:', error);
      throw error;
    }
  },

  /**
   * Update multiple Trade records.
   * @param props - Array of Trade objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: TradeType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_TRADE = gql`
      mutation updateManyTrade($data: [TradeCreateManyInput!]!) {
        updateManyTrade(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
    equals: prop.alpacaAccountId 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  qty: prop.qty !== undefined ? {
            set: prop.qty 
           } : undefined,
  price: prop.price !== undefined ? {
            set: prop.price 
           } : undefined,
  total: prop.total !== undefined ? {
            set: prop.total 
           } : undefined,
  optionType: prop.optionType !== undefined ? {
            set: prop.optionType 
           } : undefined,
  signal: prop.signal !== undefined ? {
            set: prop.signal 
           } : undefined,
  strategy: prop.strategy !== undefined ? {
            set: prop.strategy 
           } : undefined,
  analysis: prop.analysis !== undefined ? {
            set: prop.analysis 
           } : undefined,
  summary: prop.summary !== undefined ? {
            set: prop.summary 
           } : undefined,
  confidence: prop.confidence !== undefined ? {
            set: prop.confidence 
           } : undefined,
  timestamp: prop.timestamp !== undefined ? {
            set: prop.timestamp 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  alpacaAccount: prop.alpacaAccount !== undefined ? {
            set: prop.alpacaAccount 
           } : undefined,
  asset: prop.asset !== undefined ? {
            set: prop.asset 
           } : undefined,
  actions: prop.actions !== undefined ? {
            set: prop.actions 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyTrade) {
        return response.data.updateManyTrade;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyTrade:', error);
      throw error;
    }
  },

  /**
   * Delete a single Trade record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Trade or null.
   */
  async delete(props: TradeType, globalClient?: ApolloClient<any>): Promise<TradeType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_TRADE = gql`
      mutation deleteOneTrade($where: TradeWhereUniqueInput!) {
        deleteOneTrade(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneTrade) {
        return response.data.deleteOneTrade;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneTrade:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Trade record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Trade or null.
   */
  async get(props: TradeType, globalClient?: ApolloClient<any>): Promise<TradeType | null> {

    const client = globalClient || importedClient;

    const GET_TRADE = gql`
      query getTrade($where: TradeWhereUniqueInput!) {
        getTrade(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getTrade ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Trade found') {
        return null;
      } else {
        console.error('Error in getTrade:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Trades records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Trade records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<TradeType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_TRADE = gql`
      query getAllTrade {
        trades {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_TRADE });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.trades ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Trade found') {
        return null;
      } else {
        console.error('Error in getTrade:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Trade records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Trade records or null.
   */
  async findMany(props: TradeType, globalClient?: ApolloClient<any>): Promise<TradeType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_TRADE = gql`
      query findManyTrade($where: TradeWhereInput!) {
        trades(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Trades) {
        return response.data.trades;
      } else {
       return [] as TradeType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Trade found') {
        return null;
      } else {
        console.error('Error in getTrade:', error);
        throw error;
      }
    }
  }
};
