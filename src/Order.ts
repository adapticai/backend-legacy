
  
import { Order as OrderType } from './generated/typegraphql-prisma/models/Order';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Order model.
   */

  const selectionSet = `
    
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

  `;

  export const Order = {

    /**
     * Create a new Order record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Order or null.
     */

    async create(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_ORDER = gql`
        mutation createOneOrder($data: OrderCreateInput!) {
          createOneOrder(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            clientOrderId: props.clientOrderId !== undefined ? props.clientOrderId : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  notional: props.notional !== undefined ? props.notional : undefined,
  side: props.side !== undefined ? props.side : undefined,
  type: props.type !== undefined ? props.type : undefined,
  orderClass: props.orderClass !== undefined ? props.orderClass : undefined,
  timeInForce: props.timeInForce !== undefined ? props.timeInForce : undefined,
  limitPrice: props.limitPrice !== undefined ? props.limitPrice : undefined,
  stopPrice: props.stopPrice !== undefined ? props.stopPrice : undefined,
  trailPrice: props.trailPrice !== undefined ? props.trailPrice : undefined,
  trailPercent: props.trailPercent !== undefined ? props.trailPercent : undefined,
  extendedHours: props.extendedHours !== undefined ? props.extendedHours : undefined,
  status: props.status !== undefined ? props.status : undefined,
  submittedAt: props.submittedAt !== undefined ? props.submittedAt : undefined,
  filledAt: props.filledAt !== undefined ? props.filledAt : undefined,
  filledQty: props.filledQty !== undefined ? props.filledQty : undefined,
  filledAvgPrice: props.filledAvgPrice !== undefined ? props.filledAvgPrice : undefined,
  cancelRequestedAt: props.cancelRequestedAt !== undefined ? props.cancelRequestedAt : undefined,
  canceledAt: props.canceledAt !== undefined ? props.canceledAt : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  strikePrice: props.strikePrice !== undefined ? props.strikePrice : undefined,
  expirationDate: props.expirationDate !== undefined ? props.expirationDate : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
  stopLossId: props.stopLossId !== undefined ? props.stopLossId : undefined,
  takeProfitId: props.takeProfitId !== undefined ? props.takeProfitId : undefined,
  stopLoss: props.stopLoss ? 
    typeof props.stopLoss === 'object' && Object.keys(props.stopLoss).length === 1 && Object.keys(props.stopLoss)[0] === 'id'
    ? { connect: {
        id: props.stopLoss.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.stopLoss.id !== undefined ? props.stopLoss.id : undefined,
        orderId: props.stopLoss.orderId !== undefined ? props.stopLoss.orderId : undefined,
      },
      create: {
        stopPrice: props.stopLoss.stopPrice !== undefined ? props.stopLoss.stopPrice : undefined,
        limitPrice: props.stopLoss.limitPrice !== undefined ? props.stopLoss.limitPrice : undefined,
      },
    }
  } : undefined,
  takeProfit: props.takeProfit ? 
    typeof props.takeProfit === 'object' && Object.keys(props.takeProfit).length === 1 && Object.keys(props.takeProfit)[0] === 'id'
    ? { connect: {
        id: props.takeProfit.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.takeProfit.id !== undefined ? props.takeProfit.id : undefined,
        orderId: props.takeProfit.orderId !== undefined ? props.takeProfit.orderId : undefined,
      },
      create: {
        limitPrice: props.takeProfit.limitPrice !== undefined ? props.takeProfit.limitPrice : undefined,
        stopPrice: props.takeProfit.stopPrice !== undefined ? props.takeProfit.stopPrice : undefined,
      },
    }
  } : undefined,
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
        trades: props.alpacaAccount.trades !== undefined ? {
            set: props.alpacaAccount.trades
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
  action: props.action ? 
    typeof props.action === 'object' && Object.keys(props.action).length === 1 && Object.keys(props.action)[0] === 'id'
    ? { connect: {
        id: props.action.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.action.id !== undefined ? props.action.id : undefined,
        tradeId: props.action.tradeId !== undefined ? {
            equals: props.action.tradeId 
           } : undefined,
      },
      create: {
        sequence: props.action.sequence !== undefined ? props.action.sequence : undefined,
        type: props.action.type !== undefined ? props.action.type : undefined,
        note: props.action.note !== undefined ? props.action.note : undefined,
        status: props.action.status !== undefined ? props.action.status : undefined,
        fee: props.action.fee !== undefined ? props.action.fee : undefined,
        dependsOn: props.action.dependsOn !== undefined ? {
            set: props.action.dependsOn
          } : undefined,
        dependedOnBy: props.action.dependedOnBy !== undefined ? {
            set: props.action.dependedOnBy
          } : undefined,
        trade: props.action.trade !== undefined ? {
            set: props.action.trade
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
        trades: props.asset.trades !== undefined ? {
            set: props.asset.trades
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
        deliverables: props.contract.deliverables !== undefined ? {
            set: props.contract.deliverables
          } : undefined,
        asset: props.contract.asset !== undefined ? {
            set: props.contract.asset
          } : undefined,
      },
    }
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneOrder) {
        return response.data.createOneOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneOrder:', error);
      throw error;
    }
  },

  /**
   * Create multiple Order records.
   * @param props - Array of Order objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: OrderType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_ORDER = gql`
      mutation createManyOrder($data: [OrderCreateManyInput!]!) {
        createManyOrder(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  clientOrderId: prop.clientOrderId !== undefined ? prop.clientOrderId : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  qty: prop.qty !== undefined ? prop.qty : undefined,
  notional: prop.notional !== undefined ? prop.notional : undefined,
  side: prop.side !== undefined ? prop.side : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  orderClass: prop.orderClass !== undefined ? prop.orderClass : undefined,
  timeInForce: prop.timeInForce !== undefined ? prop.timeInForce : undefined,
  limitPrice: prop.limitPrice !== undefined ? prop.limitPrice : undefined,
  stopPrice: prop.stopPrice !== undefined ? prop.stopPrice : undefined,
  trailPrice: prop.trailPrice !== undefined ? prop.trailPrice : undefined,
  trailPercent: prop.trailPercent !== undefined ? prop.trailPercent : undefined,
  extendedHours: prop.extendedHours !== undefined ? prop.extendedHours : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  submittedAt: prop.submittedAt !== undefined ? prop.submittedAt : undefined,
  filledAt: prop.filledAt !== undefined ? prop.filledAt : undefined,
  filledQty: prop.filledQty !== undefined ? prop.filledQty : undefined,
  filledAvgPrice: prop.filledAvgPrice !== undefined ? prop.filledAvgPrice : undefined,
  cancelRequestedAt: prop.cancelRequestedAt !== undefined ? prop.cancelRequestedAt : undefined,
  canceledAt: prop.canceledAt !== undefined ? prop.canceledAt : undefined,
  actionId: prop.actionId !== undefined ? prop.actionId : undefined,
  fee: prop.fee !== undefined ? prop.fee : undefined,
  strikePrice: prop.strikePrice !== undefined ? prop.strikePrice : undefined,
  expirationDate: prop.expirationDate !== undefined ? prop.expirationDate : undefined,
  optionType: prop.optionType !== undefined ? prop.optionType : undefined,
  stopLossId: prop.stopLossId !== undefined ? prop.stopLossId : undefined,
  takeProfitId: prop.takeProfitId !== undefined ? prop.takeProfitId : undefined,
  contractId: prop.contractId !== undefined ? prop.contractId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyOrder) {
        return response.data.createManyOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyOrder:', error);
      throw error;
    }
  },

  /**
   * Update a single Order record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Order or null.
   */
  async update(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_ORDER = gql`
      mutation updateOneOrder($data: OrderUpdateInput!, $where: OrderWhereUniqueInput!) {
        updateOneOrder(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  clientOrderId: props.clientOrderId !== undefined ? props.clientOrderId : undefined,
  actionId: props.actionId !== undefined ? props.actionId : undefined,
  stopLossId: props.stopLossId !== undefined ? props.stopLossId : undefined,
  contractId: props.contractId !== undefined ? props.contractId : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  clientOrderId: props.clientOrderId !== undefined ? {
            set: props.clientOrderId 
           } : undefined,
  qty: props.qty !== undefined ? {
            set: props.qty 
           } : undefined,
  notional: props.notional !== undefined ? {
            set: props.notional 
           } : undefined,
  side: props.side !== undefined ? {
            set: props.side 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  orderClass: props.orderClass !== undefined ? {
            set: props.orderClass 
           } : undefined,
  timeInForce: props.timeInForce !== undefined ? {
            set: props.timeInForce 
           } : undefined,
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
           } : undefined,
  trailPrice: props.trailPrice !== undefined ? {
            set: props.trailPrice 
           } : undefined,
  trailPercent: props.trailPercent !== undefined ? {
            set: props.trailPercent 
           } : undefined,
  extendedHours: props.extendedHours !== undefined ? {
            set: props.extendedHours 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  submittedAt: props.submittedAt !== undefined ? {
            set: props.submittedAt 
           } : undefined,
  filledAt: props.filledAt !== undefined ? {
            set: props.filledAt 
           } : undefined,
  filledQty: props.filledQty !== undefined ? {
            set: props.filledQty 
           } : undefined,
  filledAvgPrice: props.filledAvgPrice !== undefined ? {
            set: props.filledAvgPrice 
           } : undefined,
  cancelRequestedAt: props.cancelRequestedAt !== undefined ? {
            set: props.cancelRequestedAt 
           } : undefined,
  canceledAt: props.canceledAt !== undefined ? {
            set: props.canceledAt 
           } : undefined,
  fee: props.fee !== undefined ? {
            set: props.fee 
           } : undefined,
  strikePrice: props.strikePrice !== undefined ? {
            set: props.strikePrice 
           } : undefined,
  expirationDate: props.expirationDate !== undefined ? {
            set: props.expirationDate 
           } : undefined,
  optionType: props.optionType !== undefined ? {
            set: props.optionType 
           } : undefined,
  stopLossId: props.stopLossId !== undefined ? {
            set: props.stopLossId 
           } : undefined,
  takeProfitId: props.takeProfitId !== undefined ? {
            set: props.takeProfitId 
           } : undefined,
  stopLoss: props.stopLoss !== undefined ? {
            set: props.stopLoss 
           } : undefined,
  takeProfit: props.takeProfit !== undefined ? {
            set: props.takeProfit 
           } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
            set: props.alpacaAccount 
           } : undefined,
  action: props.action !== undefined ? {
            set: props.action 
           } : undefined,
  asset: props.asset !== undefined ? {
            set: props.asset 
           } : undefined,
  contract: props.contract !== undefined ? {
            set: props.contract 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneOrder) {
        return response.data.updateOneOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneOrder:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Order record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Order or null.
   */
  async upsert(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_ORDER = gql`
      mutation upsertOneOrder($where: OrderWhereUniqueInput!, $create: OrderCreateInput!, $update: OrderUpdateInput!) {
        upsertOneOrder(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  clientOrderId: props.clientOrderId !== undefined ? props.clientOrderId : undefined,
  actionId: props.actionId !== undefined ? props.actionId : undefined,
  stopLossId: props.stopLossId !== undefined ? props.stopLossId : undefined,
  contractId: props.contractId !== undefined ? props.contractId : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
      create: {
    clientOrderId: props.clientOrderId !== undefined ? props.clientOrderId : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  notional: props.notional !== undefined ? props.notional : undefined,
  side: props.side !== undefined ? props.side : undefined,
  type: props.type !== undefined ? props.type : undefined,
  orderClass: props.orderClass !== undefined ? props.orderClass : undefined,
  timeInForce: props.timeInForce !== undefined ? props.timeInForce : undefined,
  limitPrice: props.limitPrice !== undefined ? props.limitPrice : undefined,
  stopPrice: props.stopPrice !== undefined ? props.stopPrice : undefined,
  trailPrice: props.trailPrice !== undefined ? props.trailPrice : undefined,
  trailPercent: props.trailPercent !== undefined ? props.trailPercent : undefined,
  extendedHours: props.extendedHours !== undefined ? props.extendedHours : undefined,
  status: props.status !== undefined ? props.status : undefined,
  submittedAt: props.submittedAt !== undefined ? props.submittedAt : undefined,
  filledAt: props.filledAt !== undefined ? props.filledAt : undefined,
  filledQty: props.filledQty !== undefined ? props.filledQty : undefined,
  filledAvgPrice: props.filledAvgPrice !== undefined ? props.filledAvgPrice : undefined,
  cancelRequestedAt: props.cancelRequestedAt !== undefined ? props.cancelRequestedAt : undefined,
  canceledAt: props.canceledAt !== undefined ? props.canceledAt : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  strikePrice: props.strikePrice !== undefined ? props.strikePrice : undefined,
  expirationDate: props.expirationDate !== undefined ? props.expirationDate : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
  stopLossId: props.stopLossId !== undefined ? props.stopLossId : undefined,
  takeProfitId: props.takeProfitId !== undefined ? props.takeProfitId : undefined,
  stopLoss: props.stopLoss ? 
    typeof props.stopLoss === 'object' && Object.keys(props.stopLoss).length === 1 && Object.keys(props.stopLoss)[0] === 'id'
    ? { connect: {
        id: props.stopLoss.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.stopLoss.id !== undefined ? props.stopLoss.id : undefined,
        orderId: props.stopLoss.orderId !== undefined ? props.stopLoss.orderId : undefined,
      },
      create: {
        stopPrice: props.stopLoss.stopPrice !== undefined ? props.stopLoss.stopPrice : undefined,
        limitPrice: props.stopLoss.limitPrice !== undefined ? props.stopLoss.limitPrice : undefined,
      },
    }
  } : undefined,
  takeProfit: props.takeProfit ? 
    typeof props.takeProfit === 'object' && Object.keys(props.takeProfit).length === 1 && Object.keys(props.takeProfit)[0] === 'id'
    ? { connect: {
        id: props.takeProfit.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.takeProfit.id !== undefined ? props.takeProfit.id : undefined,
        orderId: props.takeProfit.orderId !== undefined ? props.takeProfit.orderId : undefined,
      },
      create: {
        limitPrice: props.takeProfit.limitPrice !== undefined ? props.takeProfit.limitPrice : undefined,
        stopPrice: props.takeProfit.stopPrice !== undefined ? props.takeProfit.stopPrice : undefined,
      },
    }
  } : undefined,
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
        trades: props.alpacaAccount.trades !== undefined ? {
            set: props.alpacaAccount.trades
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
  action: props.action ? 
    typeof props.action === 'object' && Object.keys(props.action).length === 1 && Object.keys(props.action)[0] === 'id'
    ? { connect: {
        id: props.action.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.action.id !== undefined ? props.action.id : undefined,
        tradeId: props.action.tradeId !== undefined ? {
            equals: props.action.tradeId 
           } : undefined,
      },
      create: {
        sequence: props.action.sequence !== undefined ? props.action.sequence : undefined,
        type: props.action.type !== undefined ? props.action.type : undefined,
        note: props.action.note !== undefined ? props.action.note : undefined,
        status: props.action.status !== undefined ? props.action.status : undefined,
        fee: props.action.fee !== undefined ? props.action.fee : undefined,
        dependsOn: props.action.dependsOn !== undefined ? {
            set: props.action.dependsOn
          } : undefined,
        dependedOnBy: props.action.dependedOnBy !== undefined ? {
            set: props.action.dependedOnBy
          } : undefined,
        trade: props.action.trade !== undefined ? {
            set: props.action.trade
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
        trades: props.asset.trades !== undefined ? {
            set: props.asset.trades
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
        deliverables: props.contract.deliverables !== undefined ? {
            set: props.contract.deliverables
          } : undefined,
        asset: props.contract.asset !== undefined ? {
            set: props.contract.asset
          } : undefined,
      },
    }
  } : undefined,
      },
      update: {
  clientOrderId: props.clientOrderId !== undefined ? {
            set: props.clientOrderId 
           } : undefined,
  qty: props.qty !== undefined ? {
            set: props.qty 
           } : undefined,
  notional: props.notional !== undefined ? {
            set: props.notional 
           } : undefined,
  side: props.side !== undefined ? {
            set: props.side 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  orderClass: props.orderClass !== undefined ? {
            set: props.orderClass 
           } : undefined,
  timeInForce: props.timeInForce !== undefined ? {
            set: props.timeInForce 
           } : undefined,
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
           } : undefined,
  trailPrice: props.trailPrice !== undefined ? {
            set: props.trailPrice 
           } : undefined,
  trailPercent: props.trailPercent !== undefined ? {
            set: props.trailPercent 
           } : undefined,
  extendedHours: props.extendedHours !== undefined ? {
            set: props.extendedHours 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  submittedAt: props.submittedAt !== undefined ? {
            set: props.submittedAt 
           } : undefined,
  filledAt: props.filledAt !== undefined ? {
            set: props.filledAt 
           } : undefined,
  filledQty: props.filledQty !== undefined ? {
            set: props.filledQty 
           } : undefined,
  filledAvgPrice: props.filledAvgPrice !== undefined ? {
            set: props.filledAvgPrice 
           } : undefined,
  cancelRequestedAt: props.cancelRequestedAt !== undefined ? {
            set: props.cancelRequestedAt 
           } : undefined,
  canceledAt: props.canceledAt !== undefined ? {
            set: props.canceledAt 
           } : undefined,
  fee: props.fee !== undefined ? {
            set: props.fee 
           } : undefined,
  strikePrice: props.strikePrice !== undefined ? {
            set: props.strikePrice 
           } : undefined,
  expirationDate: props.expirationDate !== undefined ? {
            set: props.expirationDate 
           } : undefined,
  optionType: props.optionType !== undefined ? {
            set: props.optionType 
           } : undefined,
  stopLossId: props.stopLossId !== undefined ? {
            set: props.stopLossId 
           } : undefined,
  takeProfitId: props.takeProfitId !== undefined ? {
            set: props.takeProfitId 
           } : undefined,
  stopLoss: props.stopLoss !== undefined ? {
            set: props.stopLoss 
           } : undefined,
  takeProfit: props.takeProfit !== undefined ? {
            set: props.takeProfit 
           } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
            set: props.alpacaAccount 
           } : undefined,
  action: props.action !== undefined ? {
            set: props.action 
           } : undefined,
  asset: props.asset !== undefined ? {
            set: props.asset 
           } : undefined,
  contract: props.contract !== undefined ? {
            set: props.contract 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneOrder) {
        return response.data.upsertOneOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneOrder:', error);
      throw error;
    }
  },

  /**
   * Update multiple Order records.
   * @param props - Array of Order objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: OrderType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_ORDER = gql`
      mutation updateManyOrder($data: [OrderCreateManyInput!]!) {
        updateManyOrder(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  clientOrderId: prop.clientOrderId !== undefined ? prop.clientOrderId : undefined,
  actionId: prop.actionId !== undefined ? prop.actionId : undefined,
  stopLossId: prop.stopLossId !== undefined ? prop.stopLossId : undefined,
  contractId: prop.contractId !== undefined ? prop.contractId : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
    equals: prop.alpacaAccountId 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  clientOrderId: prop.clientOrderId !== undefined ? {
            set: prop.clientOrderId 
           } : undefined,
  qty: prop.qty !== undefined ? {
            set: prop.qty 
           } : undefined,
  notional: prop.notional !== undefined ? {
            set: prop.notional 
           } : undefined,
  side: prop.side !== undefined ? {
            set: prop.side 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  orderClass: prop.orderClass !== undefined ? {
            set: prop.orderClass 
           } : undefined,
  timeInForce: prop.timeInForce !== undefined ? {
            set: prop.timeInForce 
           } : undefined,
  limitPrice: prop.limitPrice !== undefined ? {
            set: prop.limitPrice 
           } : undefined,
  stopPrice: prop.stopPrice !== undefined ? {
            set: prop.stopPrice 
           } : undefined,
  trailPrice: prop.trailPrice !== undefined ? {
            set: prop.trailPrice 
           } : undefined,
  trailPercent: prop.trailPercent !== undefined ? {
            set: prop.trailPercent 
           } : undefined,
  extendedHours: prop.extendedHours !== undefined ? {
            set: prop.extendedHours 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  submittedAt: prop.submittedAt !== undefined ? {
            set: prop.submittedAt 
           } : undefined,
  filledAt: prop.filledAt !== undefined ? {
            set: prop.filledAt 
           } : undefined,
  filledQty: prop.filledQty !== undefined ? {
            set: prop.filledQty 
           } : undefined,
  filledAvgPrice: prop.filledAvgPrice !== undefined ? {
            set: prop.filledAvgPrice 
           } : undefined,
  cancelRequestedAt: prop.cancelRequestedAt !== undefined ? {
            set: prop.cancelRequestedAt 
           } : undefined,
  canceledAt: prop.canceledAt !== undefined ? {
            set: prop.canceledAt 
           } : undefined,
  fee: prop.fee !== undefined ? {
            set: prop.fee 
           } : undefined,
  strikePrice: prop.strikePrice !== undefined ? {
            set: prop.strikePrice 
           } : undefined,
  expirationDate: prop.expirationDate !== undefined ? {
            set: prop.expirationDate 
           } : undefined,
  optionType: prop.optionType !== undefined ? {
            set: prop.optionType 
           } : undefined,
  stopLossId: prop.stopLossId !== undefined ? {
            set: prop.stopLossId 
           } : undefined,
  takeProfitId: prop.takeProfitId !== undefined ? {
            set: prop.takeProfitId 
           } : undefined,
  stopLoss: prop.stopLoss !== undefined ? {
            set: prop.stopLoss 
           } : undefined,
  takeProfit: prop.takeProfit !== undefined ? {
            set: prop.takeProfit 
           } : undefined,
  alpacaAccount: prop.alpacaAccount !== undefined ? {
            set: prop.alpacaAccount 
           } : undefined,
  action: prop.action !== undefined ? {
            set: prop.action 
           } : undefined,
  asset: prop.asset !== undefined ? {
            set: prop.asset 
           } : undefined,
  contract: prop.contract !== undefined ? {
            set: prop.contract 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyOrder) {
        return response.data.updateManyOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyOrder:', error);
      throw error;
    }
  },

  /**
   * Delete a single Order record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Order or null.
   */
  async delete(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_ORDER = gql`
      mutation deleteOneOrder($where: OrderWhereUniqueInput!) {
        deleteOneOrder(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneOrder) {
        return response.data.deleteOneOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneOrder:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Order record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Order or null.
   */
  async get(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType | null> {

    const client = globalClient || importedClient;

    const GET_ORDER = gql`
      query getOrder($where: OrderWhereUniqueInput!) {
        getOrder(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  clientOrderId: props.clientOrderId !== undefined ? props.clientOrderId : undefined,
  actionId: props.actionId !== undefined ? props.actionId : undefined,
  stopLossId: props.stopLossId !== undefined ? props.stopLossId : undefined,
  contractId: props.contractId !== undefined ? props.contractId : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getOrder ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Order found') {
        return null;
      } else {
        console.error('Error in getOrder:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Orders records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Order records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<OrderType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_ORDER = gql`
      query getAllOrder {
        orders {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ORDER });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.orders ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Order found') {
        return null;
      } else {
        console.error('Error in getOrder:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Order records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Order records or null.
   */
  async findMany(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_ORDER = gql`
      query findManyOrder($where: OrderWhereInput!) {
        orders(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  clientOrderId: props.clientOrderId !== undefined ? {
    equals: props.clientOrderId 
  } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Orders) {
        return response.data.orders;
      } else {
       return [] as OrderType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Order found') {
        return null;
      } else {
        console.error('Error in getOrder:', error);
        throw error;
      }
    }
  }
};
