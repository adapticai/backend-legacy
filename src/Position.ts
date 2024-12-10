
  
import { Position as PositionType } from './generated/typegraphql-prisma/models/Position';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Position model.
   */

  const selectionSet = `
    
  id
  assetId
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
  averageEntryPrice
  qty
  qtyAvailable
  marketValue
  costBasis
  unrealizedPL
  unrealizedPLPC
  unrealisedIntradayPL
  unrealisedIntradayPLPC
  currentPrice
  lastTradePrice
  changeToday
  assetMarginable
  closed
  createdAt
  updatedAt

  `;

  export const Position = {

    /**
     * Create a new Position record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Position or null.
     */

    async create(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_POSITION = gql`
        mutation createOnePosition($data: PositionCreateInput!) {
          createOnePosition(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            averageEntryPrice: props.averageEntryPrice !== undefined ? props.averageEntryPrice : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  qtyAvailable: props.qtyAvailable !== undefined ? props.qtyAvailable : undefined,
  marketValue: props.marketValue !== undefined ? props.marketValue : undefined,
  costBasis: props.costBasis !== undefined ? props.costBasis : undefined,
  unrealizedPL: props.unrealizedPL !== undefined ? props.unrealizedPL : undefined,
  unrealizedPLPC: props.unrealizedPLPC !== undefined ? props.unrealizedPLPC : undefined,
  unrealisedIntradayPL: props.unrealisedIntradayPL !== undefined ? props.unrealisedIntradayPL : undefined,
  unrealisedIntradayPLPC: props.unrealisedIntradayPLPC !== undefined ? props.unrealisedIntradayPLPC : undefined,
  currentPrice: props.currentPrice !== undefined ? props.currentPrice : undefined,
  lastTradePrice: props.lastTradePrice !== undefined ? props.lastTradePrice : undefined,
  changeToday: props.changeToday !== undefined ? props.changeToday : undefined,
  assetMarginable: props.assetMarginable !== undefined ? props.assetMarginable : undefined,
  closed: props.closed !== undefined ? props.closed : undefined,
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
        newsMentions: props.asset.newsMentions !== undefined ? {
            set: props.asset.newsMentions
          } : undefined,
        contracts: props.asset.contracts !== undefined ? {
            set: props.asset.contracts
          } : undefined,
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
        orders: props.alpacaAccount.orders !== undefined ? {
            set: props.alpacaAccount.orders
          } : undefined,
        alerts: props.alpacaAccount.alerts !== undefined ? {
            set: props.alpacaAccount.alerts
          } : undefined,
      },
    }
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOnePosition) {
        return response.data.createOnePosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOnePosition:', error);
      throw error;
    }
  },

  /**
   * Create multiple Position records.
   * @param props - Array of Position objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: PositionType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_POSITION = gql`
      mutation createManyPosition($data: [PositionCreateManyInput!]!) {
        createManyPosition(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  averageEntryPrice: prop.averageEntryPrice !== undefined ? prop.averageEntryPrice : undefined,
  qty: prop.qty !== undefined ? prop.qty : undefined,
  qtyAvailable: prop.qtyAvailable !== undefined ? prop.qtyAvailable : undefined,
  marketValue: prop.marketValue !== undefined ? prop.marketValue : undefined,
  costBasis: prop.costBasis !== undefined ? prop.costBasis : undefined,
  unrealizedPL: prop.unrealizedPL !== undefined ? prop.unrealizedPL : undefined,
  unrealizedPLPC: prop.unrealizedPLPC !== undefined ? prop.unrealizedPLPC : undefined,
  unrealisedIntradayPL: prop.unrealisedIntradayPL !== undefined ? prop.unrealisedIntradayPL : undefined,
  unrealisedIntradayPLPC: prop.unrealisedIntradayPLPC !== undefined ? prop.unrealisedIntradayPLPC : undefined,
  currentPrice: prop.currentPrice !== undefined ? prop.currentPrice : undefined,
  lastTradePrice: prop.lastTradePrice !== undefined ? prop.lastTradePrice : undefined,
  changeToday: prop.changeToday !== undefined ? prop.changeToday : undefined,
  assetMarginable: prop.assetMarginable !== undefined ? prop.assetMarginable : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  closed: prop.closed !== undefined ? prop.closed : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyPosition) {
        return response.data.createManyPosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyPosition:', error);
      throw error;
    }
  },

  /**
   * Update a single Position record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Position or null.
   */
  async update(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_POSITION = gql`
      mutation updateOnePosition($data: PositionUpdateInput!, $where: PositionWhereUniqueInput!) {
        updateOnePosition(data: $data, where: $where) {
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
  averageEntryPrice: props.averageEntryPrice !== undefined ? {
            set: props.averageEntryPrice 
           } : undefined,
  qty: props.qty !== undefined ? {
            set: props.qty 
           } : undefined,
  qtyAvailable: props.qtyAvailable !== undefined ? {
            set: props.qtyAvailable 
           } : undefined,
  marketValue: props.marketValue !== undefined ? {
            set: props.marketValue 
           } : undefined,
  costBasis: props.costBasis !== undefined ? {
            set: props.costBasis 
           } : undefined,
  unrealizedPL: props.unrealizedPL !== undefined ? {
            set: props.unrealizedPL 
           } : undefined,
  unrealizedPLPC: props.unrealizedPLPC !== undefined ? {
            set: props.unrealizedPLPC 
           } : undefined,
  unrealisedIntradayPL: props.unrealisedIntradayPL !== undefined ? {
            set: props.unrealisedIntradayPL 
           } : undefined,
  unrealisedIntradayPLPC: props.unrealisedIntradayPLPC !== undefined ? {
            set: props.unrealisedIntradayPLPC 
           } : undefined,
  currentPrice: props.currentPrice !== undefined ? {
            set: props.currentPrice 
           } : undefined,
  lastTradePrice: props.lastTradePrice !== undefined ? {
            set: props.lastTradePrice 
           } : undefined,
  changeToday: props.changeToday !== undefined ? {
            set: props.changeToday 
           } : undefined,
  assetMarginable: props.assetMarginable !== undefined ? {
            set: props.assetMarginable 
           } : undefined,
  closed: props.closed !== undefined ? {
            set: props.closed 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  asset: props.asset !== undefined ? {
            set: props.asset 
           } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
            set: props.alpacaAccount 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOnePosition) {
        return response.data.updateOnePosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOnePosition:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Position record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Position or null.
   */
  async upsert(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_POSITION = gql`
      mutation upsertOnePosition($where: PositionWhereUniqueInput!, $create: PositionCreateInput!, $update: PositionUpdateInput!) {
        upsertOnePosition(where: $where, create: $create, update: $update) {
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
    averageEntryPrice: props.averageEntryPrice !== undefined ? props.averageEntryPrice : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  qtyAvailable: props.qtyAvailable !== undefined ? props.qtyAvailable : undefined,
  marketValue: props.marketValue !== undefined ? props.marketValue : undefined,
  costBasis: props.costBasis !== undefined ? props.costBasis : undefined,
  unrealizedPL: props.unrealizedPL !== undefined ? props.unrealizedPL : undefined,
  unrealizedPLPC: props.unrealizedPLPC !== undefined ? props.unrealizedPLPC : undefined,
  unrealisedIntradayPL: props.unrealisedIntradayPL !== undefined ? props.unrealisedIntradayPL : undefined,
  unrealisedIntradayPLPC: props.unrealisedIntradayPLPC !== undefined ? props.unrealisedIntradayPLPC : undefined,
  currentPrice: props.currentPrice !== undefined ? props.currentPrice : undefined,
  lastTradePrice: props.lastTradePrice !== undefined ? props.lastTradePrice : undefined,
  changeToday: props.changeToday !== undefined ? props.changeToday : undefined,
  assetMarginable: props.assetMarginable !== undefined ? props.assetMarginable : undefined,
  closed: props.closed !== undefined ? props.closed : undefined,
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
        newsMentions: props.asset.newsMentions !== undefined ? {
            set: props.asset.newsMentions
          } : undefined,
        contracts: props.asset.contracts !== undefined ? {
            set: props.asset.contracts
          } : undefined,
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
        orders: props.alpacaAccount.orders !== undefined ? {
            set: props.alpacaAccount.orders
          } : undefined,
        alerts: props.alpacaAccount.alerts !== undefined ? {
            set: props.alpacaAccount.alerts
          } : undefined,
      },
    }
  } : undefined,
      },
      update: {
  averageEntryPrice: props.averageEntryPrice !== undefined ? {
            set: props.averageEntryPrice 
           } : undefined,
  qty: props.qty !== undefined ? {
            set: props.qty 
           } : undefined,
  qtyAvailable: props.qtyAvailable !== undefined ? {
            set: props.qtyAvailable 
           } : undefined,
  marketValue: props.marketValue !== undefined ? {
            set: props.marketValue 
           } : undefined,
  costBasis: props.costBasis !== undefined ? {
            set: props.costBasis 
           } : undefined,
  unrealizedPL: props.unrealizedPL !== undefined ? {
            set: props.unrealizedPL 
           } : undefined,
  unrealizedPLPC: props.unrealizedPLPC !== undefined ? {
            set: props.unrealizedPLPC 
           } : undefined,
  unrealisedIntradayPL: props.unrealisedIntradayPL !== undefined ? {
            set: props.unrealisedIntradayPL 
           } : undefined,
  unrealisedIntradayPLPC: props.unrealisedIntradayPLPC !== undefined ? {
            set: props.unrealisedIntradayPLPC 
           } : undefined,
  currentPrice: props.currentPrice !== undefined ? {
            set: props.currentPrice 
           } : undefined,
  lastTradePrice: props.lastTradePrice !== undefined ? {
            set: props.lastTradePrice 
           } : undefined,
  changeToday: props.changeToday !== undefined ? {
            set: props.changeToday 
           } : undefined,
  assetMarginable: props.assetMarginable !== undefined ? {
            set: props.assetMarginable 
           } : undefined,
  closed: props.closed !== undefined ? {
            set: props.closed 
           } : undefined,
  asset: props.asset !== undefined ? {
            set: props.asset 
           } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
            set: props.alpacaAccount 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOnePosition) {
        return response.data.upsertOnePosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOnePosition:', error);
      throw error;
    }
  },

  /**
   * Update multiple Position records.
   * @param props - Array of Position objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: PositionType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_POSITION = gql`
      mutation updateManyPosition($data: [PositionCreateManyInput!]!) {
        updateManyPosition(data: $data) {
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
  averageEntryPrice: prop.averageEntryPrice !== undefined ? {
            set: prop.averageEntryPrice 
           } : undefined,
  qty: prop.qty !== undefined ? {
            set: prop.qty 
           } : undefined,
  qtyAvailable: prop.qtyAvailable !== undefined ? {
            set: prop.qtyAvailable 
           } : undefined,
  marketValue: prop.marketValue !== undefined ? {
            set: prop.marketValue 
           } : undefined,
  costBasis: prop.costBasis !== undefined ? {
            set: prop.costBasis 
           } : undefined,
  unrealizedPL: prop.unrealizedPL !== undefined ? {
            set: prop.unrealizedPL 
           } : undefined,
  unrealizedPLPC: prop.unrealizedPLPC !== undefined ? {
            set: prop.unrealizedPLPC 
           } : undefined,
  unrealisedIntradayPL: prop.unrealisedIntradayPL !== undefined ? {
            set: prop.unrealisedIntradayPL 
           } : undefined,
  unrealisedIntradayPLPC: prop.unrealisedIntradayPLPC !== undefined ? {
            set: prop.unrealisedIntradayPLPC 
           } : undefined,
  currentPrice: prop.currentPrice !== undefined ? {
            set: prop.currentPrice 
           } : undefined,
  lastTradePrice: prop.lastTradePrice !== undefined ? {
            set: prop.lastTradePrice 
           } : undefined,
  changeToday: prop.changeToday !== undefined ? {
            set: prop.changeToday 
           } : undefined,
  assetMarginable: prop.assetMarginable !== undefined ? {
            set: prop.assetMarginable 
           } : undefined,
  closed: prop.closed !== undefined ? {
            set: prop.closed 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  asset: prop.asset !== undefined ? {
            set: prop.asset 
           } : undefined,
  alpacaAccount: prop.alpacaAccount !== undefined ? {
            set: prop.alpacaAccount 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyPosition) {
        return response.data.updateManyPosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyPosition:', error);
      throw error;
    }
  },

  /**
   * Delete a single Position record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Position or null.
   */
  async delete(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_POSITION = gql`
      mutation deleteOnePosition($where: PositionWhereUniqueInput!) {
        deleteOnePosition(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOnePosition) {
        return response.data.deleteOnePosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOnePosition:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Position record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Position or null.
   */
  async get(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType | null> {

    const client = globalClient || importedClient;

    const GET_POSITION = gql`
      query getPosition($where: PositionWhereUniqueInput!) {
        getPosition(where: $where) {
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
      const response = await client.query({ query: GET_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getPosition ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Position found') {
        return null;
      } else {
        console.error('Error in getPosition:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Positions records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Position records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<PositionType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_POSITION = gql`
      query getAllPosition {
        positions {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_POSITION });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.positions ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Position found') {
        return null;
      } else {
        console.error('Error in getPosition:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Position records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Position records or null.
   */
  async findMany(props: PositionType, globalClient?: ApolloClient<any>): Promise<PositionType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_POSITION = gql`
      query findManyPosition($where: PositionWhereInput!) {
        positions(where: $where) {
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
      const response = await client.query({ query: FIND_MANY_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Positions) {
        return response.data.positions;
      } else {
       return [] as PositionType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Position found') {
        return null;
      } else {
        console.error('Error in getPosition:', error);
        throw error;
      }
    }
  }
};
