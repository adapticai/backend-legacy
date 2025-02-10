
  
import { Trade as TradeType } from './generated/typegraphql-prisma/models/Trade';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
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
  symbol
  actions {
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
  }

  `;

  export const Trade = {

    /**
     * Create a new Trade record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Trade or null.
     */

    async create(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;

    const CREATE_ONE_TRADE = gql`
        mutation createOneTrade($data: TradeCreateInput!) {
          createOneTrade(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
  assetId: props.assetId !== undefined ? props.assetId : undefined,
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
  symbol: props.symbol !== undefined ? props.symbol : undefined,
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
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
    order: item.order ? 
      typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
          id: item.order.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.order.id !== undefined ? item.order.id : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          contractId: item.order.contractId !== undefined ? item.order.contractId : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId 
             } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
          failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
          replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
          replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
          replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
          positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
          legs: item.order.legs !== undefined ? item.order.legs : undefined,
          hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
          subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
          source: item.order.source !== undefined ? item.order.source : undefined,
          expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? item.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? item.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.order.contract ? 
        typeof item.order.contract === 'object' && Object.keys(item.order.contract).length === 1 && Object.keys(item.order.contract)[0] === 'id'
    ? { connect: {
            id: item.order.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.contract.id !== undefined ? item.order.contract.id : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? {
                equals: item.order.contract.name 
               } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                equals: item.order.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? item.order.contract.name : undefined,
            status: item.order.contract.status !== undefined ? item.order.contract.status : undefined,
            tradable: item.order.contract.tradable !== undefined ? item.order.contract.tradable : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? item.order.contract.expirationDate : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? item.order.contract.rootSymbol : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? item.order.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? item.order.contract.underlyingAssetId : undefined,
            type: item.order.contract.type !== undefined ? item.order.contract.type : undefined,
            style: item.order.contract.style !== undefined ? item.order.contract.style : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? item.order.contract.strikePrice : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? item.order.contract.multiplier : undefined,
            size: item.order.contract.size !== undefined ? item.order.contract.size : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? item.order.contract.openInterest : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? item.order.contract.openInterestDate : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? item.order.contract.closePrice : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? item.order.contract.closePriceDate : undefined,
            ppind: item.order.contract.ppind !== undefined ? item.order.contract.ppind : undefined,
            orderId: item.order.contract.orderId !== undefined ? item.order.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }
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
  async createMany(props: TradeType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
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
  async update(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
            set: props.alpacaAccountId 
           } : undefined,
  assetId: props.assetId !== undefined ? {
            set: props.assetId 
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
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  actions: props.actions ? 
  Array.isArray(props.actions) && props.actions.length > 0 && props.actions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.actions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.actions.map((item: any) => ({
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
        primary: item.primary !== undefined ? {
            set: item.primary
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
    order: item.order ? 
    typeof item.order === 'object' && Object.keys(item.order).length === 1 && (Object.keys(item.order)[0] === 'id' || Object.keys(item.order)[0] === 'symbol')
? {
    connect: {
      id: item.order.id
    }
} : { upsert: {
        where: {
          id: item.order.id !== undefined ? {
              equals: item.order.id
            } : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? {
              equals: item.order.clientOrderId
            } : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId
            } : undefined,
          assetId: item.order.assetId !== undefined ? {
              equals: item.order.assetId
            } : undefined,
          actionId: item.order.actionId !== undefined ? {
              equals: item.order.actionId
            } : undefined,
          stopLossId: item.order.stopLossId !== undefined ? {
              equals: item.order.stopLossId
            } : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? {
              equals: item.order.takeProfitId
            } : undefined,
          contractId: item.order.contractId !== undefined ? {
              equals: item.order.contractId
            } : undefined,
        },
        update: {
          id: item.order.id !== undefined ? {
              set: item.order.id
            } : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? {
              set: item.order.clientOrderId
            } : undefined,
          qty: item.order.qty !== undefined ? {
              set: item.order.qty
            } : undefined,
          notional: item.order.notional !== undefined ? {
              set: item.order.notional
            } : undefined,
          side: item.order.side !== undefined ? {
              set: item.order.side
            } : undefined,
          type: item.order.type !== undefined ? {
              set: item.order.type
            } : undefined,
          orderClass: item.order.orderClass !== undefined ? {
              set: item.order.orderClass
            } : undefined,
          timeInForce: item.order.timeInForce !== undefined ? {
              set: item.order.timeInForce
            } : undefined,
          limitPrice: item.order.limitPrice !== undefined ? {
              set: item.order.limitPrice
            } : undefined,
          stopPrice: item.order.stopPrice !== undefined ? {
              set: item.order.stopPrice
            } : undefined,
          trailPrice: item.order.trailPrice !== undefined ? {
              set: item.order.trailPrice
            } : undefined,
          trailPercent: item.order.trailPercent !== undefined ? {
              set: item.order.trailPercent
            } : undefined,
          extendedHours: item.order.extendedHours !== undefined ? {
              set: item.order.extendedHours
            } : undefined,
          status: item.order.status !== undefined ? {
              set: item.order.status
            } : undefined,
          submittedAt: item.order.submittedAt !== undefined ? {
              set: item.order.submittedAt
            } : undefined,
          filledAt: item.order.filledAt !== undefined ? {
              set: item.order.filledAt
            } : undefined,
          filledQty: item.order.filledQty !== undefined ? {
              set: item.order.filledQty
            } : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? {
              set: item.order.filledAvgPrice
            } : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? {
              set: item.order.cancelRequestedAt
            } : undefined,
          canceledAt: item.order.canceledAt !== undefined ? {
              set: item.order.canceledAt
            } : undefined,
          fee: item.order.fee !== undefined ? {
              set: item.order.fee
            } : undefined,
          strikePrice: item.order.strikePrice !== undefined ? {
              set: item.order.strikePrice
            } : undefined,
          expirationDate: item.order.expirationDate !== undefined ? {
              set: item.order.expirationDate
            } : undefined,
          expiredAt: item.order.expiredAt !== undefined ? {
              set: item.order.expiredAt
            } : undefined,
          failedAt: item.order.failedAt !== undefined ? {
              set: item.order.failedAt
            } : undefined,
          replacedAt: item.order.replacedAt !== undefined ? {
              set: item.order.replacedAt
            } : undefined,
          replacedBy: item.order.replacedBy !== undefined ? {
              set: item.order.replacedBy
            } : undefined,
          replaces: item.order.replaces !== undefined ? {
              set: item.order.replaces
            } : undefined,
          positionIntent: item.order.positionIntent !== undefined ? {
              set: item.order.positionIntent
            } : undefined,
          legs: item.order.legs !== undefined ? {
              set: item.order.legs
            } : undefined,
          hwm: item.order.hwm !== undefined ? {
              set: item.order.hwm
            } : undefined,
          subtag: item.order.subtag !== undefined ? {
              set: item.order.subtag
            } : undefined,
          source: item.order.source !== undefined ? {
              set: item.order.source
            } : undefined,
          expiresAt: item.order.expiresAt !== undefined ? {
              set: item.order.expiresAt
            } : undefined,
          optionType: item.order.optionType !== undefined ? {
              set: item.order.optionType
            } : undefined,
          stopLossId: item.order.stopLossId !== undefined ? {
              set: item.order.stopLossId
            } : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? {
              set: item.order.takeProfitId
            } : undefined,
      stopLoss: item.order.stopLoss ? 
      typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && (Object.keys(item.order.stopLoss)[0] === 'id' || Object.keys(item.order.stopLoss)[0] === 'symbol')
? {
      connect: {
        id: item.order.stopLoss.id
      }
} : { upsert: {
          where: {
            id: item.order.stopLoss.id !== undefined ? {
                equals: item.order.stopLoss.id
              } : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? {
                equals: item.order.stopLoss.orderId
              } : undefined,
          },
          update: {
            id: item.order.stopLoss.id !== undefined ? {
                set: item.order.stopLoss.id
              } : undefined,
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? {
                set: item.order.stopLoss.stopPrice
              } : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? {
                set: item.order.stopLoss.limitPrice
              } : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
      typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && (Object.keys(item.order.takeProfit)[0] === 'id' || Object.keys(item.order.takeProfit)[0] === 'symbol')
? {
      connect: {
        id: item.order.takeProfit.id
      }
} : { upsert: {
          where: {
            id: item.order.takeProfit.id !== undefined ? {
                equals: item.order.takeProfit.id
              } : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? {
                equals: item.order.takeProfit.orderId
              } : undefined,
          },
          update: {
            id: item.order.takeProfit.id !== undefined ? {
                set: item.order.takeProfit.id
              } : undefined,
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? {
                set: item.order.takeProfit.limitPrice
              } : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? {
                set: item.order.takeProfit.stopPrice
              } : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
      typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && (Object.keys(item.order.alpacaAccount)[0] === 'id' || Object.keys(item.order.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.order.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? {
                equals: item.order.alpacaAccount.id
              } : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: item.order.alpacaAccount.id !== undefined ? {
                set: item.order.alpacaAccount.id
              } : undefined,
            type: item.order.alpacaAccount.type !== undefined ? {
                set: item.order.alpacaAccount.type
              } : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? {
                set: item.order.alpacaAccount.APIKey
              } : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? {
                set: item.order.alpacaAccount.APISecret
              } : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? {
                set: item.order.alpacaAccount.configuration
              } : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? {
                set: item.order.alpacaAccount.marketOpen
              } : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? {
                set: item.order.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.order.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.order.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.order.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.order.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.order.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.order.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.order.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? item.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? item.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
      typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && (Object.keys(item.order.asset)[0] === 'id' || Object.keys(item.order.asset)[0] === 'symbol')
? {
      connect: {
        id: item.order.asset.id
      }
} : { upsert: {
          where: {
            id: item.order.asset.id !== undefined ? {
                equals: item.order.asset.id
              } : undefined,
            symbol: item.order.asset.symbol !== undefined ? {
                equals: item.order.asset.symbol
              } : undefined,
            name: item.order.asset.name !== undefined ? {
                equals: item.order.asset.name
              } : undefined,
          },
          update: {
            id: item.order.asset.id !== undefined ? {
                set: item.order.asset.id
              } : undefined,
            symbol: item.order.asset.symbol !== undefined ? {
                set: item.order.asset.symbol
              } : undefined,
            name: item.order.asset.name !== undefined ? {
                set: item.order.asset.name
              } : undefined,
            type: item.order.asset.type !== undefined ? {
                set: item.order.asset.type
              } : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? {
                set: item.order.asset.logoUrl
              } : undefined,
            description: item.order.asset.description !== undefined ? {
                set: item.order.asset.description
              } : undefined,
            cik: item.order.asset.cik !== undefined ? {
                set: item.order.asset.cik
              } : undefined,
            exchange: item.order.asset.exchange !== undefined ? {
                set: item.order.asset.exchange
              } : undefined,
            currency: item.order.asset.currency !== undefined ? {
                set: item.order.asset.currency
              } : undefined,
            country: item.order.asset.country !== undefined ? {
                set: item.order.asset.country
              } : undefined,
            sector: item.order.asset.sector !== undefined ? {
                set: item.order.asset.sector
              } : undefined,
            industry: item.order.asset.industry !== undefined ? {
                set: item.order.asset.industry
              } : undefined,
            address: item.order.asset.address !== undefined ? {
                set: item.order.asset.address
              } : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? {
                set: item.order.asset.officialSite
              } : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? {
                set: item.order.asset.fiscalYearEnd
              } : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? {
                set: item.order.asset.latestQuarter
              } : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? {
                set: item.order.asset.marketCapitalization
              } : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? {
                set: item.order.asset.ebitda
              } : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? {
                set: item.order.asset.peRatio
              } : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? {
                set: item.order.asset.pegRatio
              } : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? {
                set: item.order.asset.bookValue
              } : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? {
                set: item.order.asset.dividendPerShare
              } : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? {
                set: item.order.asset.dividendYield
              } : undefined,
            eps: item.order.asset.eps !== undefined ? {
                set: item.order.asset.eps
              } : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? {
                set: item.order.asset.revenuePerShareTTM
              } : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? {
                set: item.order.asset.profitMargin
              } : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? {
                set: item.order.asset.operatingMarginTTM
              } : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? {
                set: item.order.asset.returnOnAssetsTTM
              } : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? {
                set: item.order.asset.returnOnEquityTTM
              } : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? {
                set: item.order.asset.revenueTTM
              } : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? {
                set: item.order.asset.grossProfitTTM
              } : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? {
                set: item.order.asset.dilutedEPSTTM
              } : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: item.order.asset.quarterlyEarningsGrowthYOY
              } : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: item.order.asset.quarterlyRevenueGrowthYOY
              } : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? {
                set: item.order.asset.analystTargetPrice
              } : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? {
                set: item.order.asset.analystRatingStrongBuy
              } : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? {
                set: item.order.asset.analystRatingBuy
              } : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? {
                set: item.order.asset.analystRatingHold
              } : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? {
                set: item.order.asset.analystRatingSell
              } : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? {
                set: item.order.asset.analystRatingStrongSell
              } : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? {
                set: item.order.asset.trailingPE
              } : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? {
                set: item.order.asset.forwardPE
              } : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? {
                set: item.order.asset.priceToSalesRatioTTM
              } : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? {
                set: item.order.asset.priceToBookRatio
              } : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? {
                set: item.order.asset.evToRevenue
              } : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? {
                set: item.order.asset.evToEbitda
              } : undefined,
            beta: item.order.asset.beta !== undefined ? {
                set: item.order.asset.beta
              } : undefined,
            week52High: item.order.asset.week52High !== undefined ? {
                set: item.order.asset.week52High
              } : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? {
                set: item.order.asset.week52Low
              } : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? {
                set: item.order.asset.day50MovingAverage
              } : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? {
                set: item.order.asset.day200MovingAverage
              } : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? {
                set: item.order.asset.sharesOutstanding
              } : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? {
                set: item.order.asset.dividendDate
              } : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? {
                set: item.order.asset.exDividendDate
              } : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? {
                set: item.order.asset.askPrice
              } : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? {
                set: item.order.asset.bidPrice
              } : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.order.contract ? 
      typeof item.order.contract === 'object' && Object.keys(item.order.contract).length === 1 && (Object.keys(item.order.contract)[0] === 'id' || Object.keys(item.order.contract)[0] === 'symbol')
? {
      connect: {
        id: item.order.contract.id
      }
} : { upsert: {
          where: {
            id: item.order.contract.id !== undefined ? {
                equals: item.order.contract.id
              } : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? {
                equals: item.order.contract.alpacaId
              } : undefined,
            symbol: item.order.contract.symbol !== undefined ? {
                equals: item.order.contract.symbol
              } : undefined,
            name: item.order.contract.name !== undefined ? {
                equals: item.order.contract.name
              } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                equals: item.order.contract.underlyingAssetId
              } : undefined,
            assetId: item.order.contract.assetId !== undefined ? {
                equals: item.order.contract.assetId
              } : undefined,
            orderId: item.order.contract.orderId !== undefined ? {
                equals: item.order.contract.orderId
              } : undefined,
          },
          update: {
            id: item.order.contract.id !== undefined ? {
                set: item.order.contract.id
              } : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? {
                set: item.order.contract.alpacaId
              } : undefined,
            symbol: item.order.contract.symbol !== undefined ? {
                set: item.order.contract.symbol
              } : undefined,
            name: item.order.contract.name !== undefined ? {
                set: item.order.contract.name
              } : undefined,
            status: item.order.contract.status !== undefined ? {
                set: item.order.contract.status
              } : undefined,
            tradable: item.order.contract.tradable !== undefined ? {
                set: item.order.contract.tradable
              } : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? {
                set: item.order.contract.expirationDate
              } : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? {
                set: item.order.contract.rootSymbol
              } : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? {
                set: item.order.contract.underlyingSymbol
              } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                set: item.order.contract.underlyingAssetId
              } : undefined,
            type: item.order.contract.type !== undefined ? {
                set: item.order.contract.type
              } : undefined,
            style: item.order.contract.style !== undefined ? {
                set: item.order.contract.style
              } : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? {
                set: item.order.contract.strikePrice
              } : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? {
                set: item.order.contract.multiplier
              } : undefined,
            size: item.order.contract.size !== undefined ? {
                set: item.order.contract.size
              } : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? {
                set: item.order.contract.openInterest
              } : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? {
                set: item.order.contract.openInterestDate
              } : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? {
                set: item.order.contract.closePrice
              } : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? {
                set: item.order.contract.closePriceDate
              } : undefined,
            ppind: item.order.contract.ppind !== undefined ? {
                set: item.order.contract.ppind
              } : undefined,
            orderId: item.order.contract.orderId !== undefined ? {
                set: item.order.contract.orderId
              } : undefined,
          },
          create: {
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? item.order.contract.name : undefined,
            status: item.order.contract.status !== undefined ? item.order.contract.status : undefined,
            tradable: item.order.contract.tradable !== undefined ? item.order.contract.tradable : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? item.order.contract.expirationDate : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? item.order.contract.rootSymbol : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? item.order.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? item.order.contract.underlyingAssetId : undefined,
            type: item.order.contract.type !== undefined ? item.order.contract.type : undefined,
            style: item.order.contract.style !== undefined ? item.order.contract.style : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? item.order.contract.strikePrice : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? item.order.contract.multiplier : undefined,
            size: item.order.contract.size !== undefined ? item.order.contract.size : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? item.order.contract.openInterest : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? item.order.contract.openInterestDate : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? item.order.contract.closePrice : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? item.order.contract.closePriceDate : undefined,
            ppind: item.order.contract.ppind !== undefined ? item.order.contract.ppind : undefined,
            orderId: item.order.contract.orderId !== undefined ? item.order.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
          failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
          replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
          replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
          replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
          positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
          legs: item.order.legs !== undefined ? item.order.legs : undefined,
          hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
          subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
          source: item.order.source !== undefined ? item.order.source : undefined,
          expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? item.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? item.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.order.contract ? 
        typeof item.order.contract === 'object' && Object.keys(item.order.contract).length === 1 && Object.keys(item.order.contract)[0] === 'id'
    ? { connect: {
            id: item.order.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.contract.id !== undefined ? item.order.contract.id : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? {
                equals: item.order.contract.name 
               } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                equals: item.order.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? item.order.contract.name : undefined,
            status: item.order.contract.status !== undefined ? item.order.contract.status : undefined,
            tradable: item.order.contract.tradable !== undefined ? item.order.contract.tradable : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? item.order.contract.expirationDate : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? item.order.contract.rootSymbol : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? item.order.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? item.order.contract.underlyingAssetId : undefined,
            type: item.order.contract.type !== undefined ? item.order.contract.type : undefined,
            style: item.order.contract.style !== undefined ? item.order.contract.style : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? item.order.contract.strikePrice : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? item.order.contract.multiplier : undefined,
            size: item.order.contract.size !== undefined ? item.order.contract.size : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? item.order.contract.openInterest : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? item.order.contract.openInterestDate : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? item.order.contract.closePrice : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? item.order.contract.closePriceDate : undefined,
            ppind: item.order.contract.ppind !== undefined ? item.order.contract.ppind : undefined,
            orderId: item.order.contract.orderId !== undefined ? item.order.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
    order: item.order ? 
      typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
          id: item.order.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.order.id !== undefined ? item.order.id : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          contractId: item.order.contractId !== undefined ? item.order.contractId : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId 
             } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
          failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
          replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
          replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
          replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
          positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
          legs: item.order.legs !== undefined ? item.order.legs : undefined,
          hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
          subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
          source: item.order.source !== undefined ? item.order.source : undefined,
          expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? item.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? item.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.order.contract ? 
        typeof item.order.contract === 'object' && Object.keys(item.order.contract).length === 1 && Object.keys(item.order.contract)[0] === 'id'
    ? { connect: {
            id: item.order.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.contract.id !== undefined ? item.order.contract.id : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? {
                equals: item.order.contract.name 
               } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                equals: item.order.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? item.order.contract.name : undefined,
            status: item.order.contract.status !== undefined ? item.order.contract.status : undefined,
            tradable: item.order.contract.tradable !== undefined ? item.order.contract.tradable : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? item.order.contract.expirationDate : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? item.order.contract.rootSymbol : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? item.order.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? item.order.contract.underlyingAssetId : undefined,
            type: item.order.contract.type !== undefined ? item.order.contract.type : undefined,
            style: item.order.contract.style !== undefined ? item.order.contract.style : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? item.order.contract.strikePrice : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? item.order.contract.multiplier : undefined,
            size: item.order.contract.size !== undefined ? item.order.contract.size : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? item.order.contract.openInterest : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? item.order.contract.openInterestDate : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? item.order.contract.closePrice : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? item.order.contract.closePriceDate : undefined,
            ppind: item.order.contract.ppind !== undefined ? item.order.contract.ppind : undefined,
            orderId: item.order.contract.orderId !== undefined ? item.order.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
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
  async upsert(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
      },
      create: {
    alpacaAccountId: props.alpacaAccountId !== undefined ? props.alpacaAccountId : undefined,
  assetId: props.assetId !== undefined ? props.assetId : undefined,
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
  symbol: props.symbol !== undefined ? props.symbol : undefined,
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
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
    order: item.order ? 
      typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
          id: item.order.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.order.id !== undefined ? item.order.id : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          contractId: item.order.contractId !== undefined ? item.order.contractId : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId 
             } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
          failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
          replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
          replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
          replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
          positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
          legs: item.order.legs !== undefined ? item.order.legs : undefined,
          hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
          subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
          source: item.order.source !== undefined ? item.order.source : undefined,
          expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? item.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? item.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.order.contract ? 
        typeof item.order.contract === 'object' && Object.keys(item.order.contract).length === 1 && Object.keys(item.order.contract)[0] === 'id'
    ? { connect: {
            id: item.order.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.contract.id !== undefined ? item.order.contract.id : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? {
                equals: item.order.contract.name 
               } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                equals: item.order.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? item.order.contract.name : undefined,
            status: item.order.contract.status !== undefined ? item.order.contract.status : undefined,
            tradable: item.order.contract.tradable !== undefined ? item.order.contract.tradable : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? item.order.contract.expirationDate : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? item.order.contract.rootSymbol : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? item.order.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? item.order.contract.underlyingAssetId : undefined,
            type: item.order.contract.type !== undefined ? item.order.contract.type : undefined,
            style: item.order.contract.style !== undefined ? item.order.contract.style : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? item.order.contract.strikePrice : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? item.order.contract.multiplier : undefined,
            size: item.order.contract.size !== undefined ? item.order.contract.size : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? item.order.contract.openInterest : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? item.order.contract.openInterestDate : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? item.order.contract.closePrice : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? item.order.contract.closePriceDate : undefined,
            ppind: item.order.contract.ppind !== undefined ? item.order.contract.ppind : undefined,
            orderId: item.order.contract.orderId !== undefined ? item.order.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
      },
      update: {
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
            set: props.alpacaAccountId 
           } : undefined,
  assetId: props.assetId !== undefined ? {
            set: props.assetId 
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
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  actions: props.actions ? 
  Array.isArray(props.actions) && props.actions.length > 0 && props.actions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.actions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.actions.map((item: any) => ({
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
        primary: item.primary !== undefined ? {
            set: item.primary
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
    order: item.order ? 
    typeof item.order === 'object' && Object.keys(item.order).length === 1 && (Object.keys(item.order)[0] === 'id' || Object.keys(item.order)[0] === 'symbol')
? {
    connect: {
      id: item.order.id
    }
} : { upsert: {
        where: {
          id: item.order.id !== undefined ? {
              equals: item.order.id
            } : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? {
              equals: item.order.clientOrderId
            } : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId
            } : undefined,
          assetId: item.order.assetId !== undefined ? {
              equals: item.order.assetId
            } : undefined,
          actionId: item.order.actionId !== undefined ? {
              equals: item.order.actionId
            } : undefined,
          stopLossId: item.order.stopLossId !== undefined ? {
              equals: item.order.stopLossId
            } : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? {
              equals: item.order.takeProfitId
            } : undefined,
          contractId: item.order.contractId !== undefined ? {
              equals: item.order.contractId
            } : undefined,
        },
        update: {
          id: item.order.id !== undefined ? {
              set: item.order.id
            } : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? {
              set: item.order.clientOrderId
            } : undefined,
          qty: item.order.qty !== undefined ? {
              set: item.order.qty
            } : undefined,
          notional: item.order.notional !== undefined ? {
              set: item.order.notional
            } : undefined,
          side: item.order.side !== undefined ? {
              set: item.order.side
            } : undefined,
          type: item.order.type !== undefined ? {
              set: item.order.type
            } : undefined,
          orderClass: item.order.orderClass !== undefined ? {
              set: item.order.orderClass
            } : undefined,
          timeInForce: item.order.timeInForce !== undefined ? {
              set: item.order.timeInForce
            } : undefined,
          limitPrice: item.order.limitPrice !== undefined ? {
              set: item.order.limitPrice
            } : undefined,
          stopPrice: item.order.stopPrice !== undefined ? {
              set: item.order.stopPrice
            } : undefined,
          trailPrice: item.order.trailPrice !== undefined ? {
              set: item.order.trailPrice
            } : undefined,
          trailPercent: item.order.trailPercent !== undefined ? {
              set: item.order.trailPercent
            } : undefined,
          extendedHours: item.order.extendedHours !== undefined ? {
              set: item.order.extendedHours
            } : undefined,
          status: item.order.status !== undefined ? {
              set: item.order.status
            } : undefined,
          submittedAt: item.order.submittedAt !== undefined ? {
              set: item.order.submittedAt
            } : undefined,
          filledAt: item.order.filledAt !== undefined ? {
              set: item.order.filledAt
            } : undefined,
          filledQty: item.order.filledQty !== undefined ? {
              set: item.order.filledQty
            } : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? {
              set: item.order.filledAvgPrice
            } : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? {
              set: item.order.cancelRequestedAt
            } : undefined,
          canceledAt: item.order.canceledAt !== undefined ? {
              set: item.order.canceledAt
            } : undefined,
          fee: item.order.fee !== undefined ? {
              set: item.order.fee
            } : undefined,
          strikePrice: item.order.strikePrice !== undefined ? {
              set: item.order.strikePrice
            } : undefined,
          expirationDate: item.order.expirationDate !== undefined ? {
              set: item.order.expirationDate
            } : undefined,
          expiredAt: item.order.expiredAt !== undefined ? {
              set: item.order.expiredAt
            } : undefined,
          failedAt: item.order.failedAt !== undefined ? {
              set: item.order.failedAt
            } : undefined,
          replacedAt: item.order.replacedAt !== undefined ? {
              set: item.order.replacedAt
            } : undefined,
          replacedBy: item.order.replacedBy !== undefined ? {
              set: item.order.replacedBy
            } : undefined,
          replaces: item.order.replaces !== undefined ? {
              set: item.order.replaces
            } : undefined,
          positionIntent: item.order.positionIntent !== undefined ? {
              set: item.order.positionIntent
            } : undefined,
          legs: item.order.legs !== undefined ? {
              set: item.order.legs
            } : undefined,
          hwm: item.order.hwm !== undefined ? {
              set: item.order.hwm
            } : undefined,
          subtag: item.order.subtag !== undefined ? {
              set: item.order.subtag
            } : undefined,
          source: item.order.source !== undefined ? {
              set: item.order.source
            } : undefined,
          expiresAt: item.order.expiresAt !== undefined ? {
              set: item.order.expiresAt
            } : undefined,
          optionType: item.order.optionType !== undefined ? {
              set: item.order.optionType
            } : undefined,
          stopLossId: item.order.stopLossId !== undefined ? {
              set: item.order.stopLossId
            } : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? {
              set: item.order.takeProfitId
            } : undefined,
      stopLoss: item.order.stopLoss ? 
      typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && (Object.keys(item.order.stopLoss)[0] === 'id' || Object.keys(item.order.stopLoss)[0] === 'symbol')
? {
      connect: {
        id: item.order.stopLoss.id
      }
} : { upsert: {
          where: {
            id: item.order.stopLoss.id !== undefined ? {
                equals: item.order.stopLoss.id
              } : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? {
                equals: item.order.stopLoss.orderId
              } : undefined,
          },
          update: {
            id: item.order.stopLoss.id !== undefined ? {
                set: item.order.stopLoss.id
              } : undefined,
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? {
                set: item.order.stopLoss.stopPrice
              } : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? {
                set: item.order.stopLoss.limitPrice
              } : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
      typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && (Object.keys(item.order.takeProfit)[0] === 'id' || Object.keys(item.order.takeProfit)[0] === 'symbol')
? {
      connect: {
        id: item.order.takeProfit.id
      }
} : { upsert: {
          where: {
            id: item.order.takeProfit.id !== undefined ? {
                equals: item.order.takeProfit.id
              } : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? {
                equals: item.order.takeProfit.orderId
              } : undefined,
          },
          update: {
            id: item.order.takeProfit.id !== undefined ? {
                set: item.order.takeProfit.id
              } : undefined,
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? {
                set: item.order.takeProfit.limitPrice
              } : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? {
                set: item.order.takeProfit.stopPrice
              } : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
      typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && (Object.keys(item.order.alpacaAccount)[0] === 'id' || Object.keys(item.order.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.order.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? {
                equals: item.order.alpacaAccount.id
              } : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: item.order.alpacaAccount.id !== undefined ? {
                set: item.order.alpacaAccount.id
              } : undefined,
            type: item.order.alpacaAccount.type !== undefined ? {
                set: item.order.alpacaAccount.type
              } : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? {
                set: item.order.alpacaAccount.APIKey
              } : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? {
                set: item.order.alpacaAccount.APISecret
              } : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? {
                set: item.order.alpacaAccount.configuration
              } : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? {
                set: item.order.alpacaAccount.marketOpen
              } : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? {
                set: item.order.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.order.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.order.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.order.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.order.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.order.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.order.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.order.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? item.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? item.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
      typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && (Object.keys(item.order.asset)[0] === 'id' || Object.keys(item.order.asset)[0] === 'symbol')
? {
      connect: {
        id: item.order.asset.id
      }
} : { upsert: {
          where: {
            id: item.order.asset.id !== undefined ? {
                equals: item.order.asset.id
              } : undefined,
            symbol: item.order.asset.symbol !== undefined ? {
                equals: item.order.asset.symbol
              } : undefined,
            name: item.order.asset.name !== undefined ? {
                equals: item.order.asset.name
              } : undefined,
          },
          update: {
            id: item.order.asset.id !== undefined ? {
                set: item.order.asset.id
              } : undefined,
            symbol: item.order.asset.symbol !== undefined ? {
                set: item.order.asset.symbol
              } : undefined,
            name: item.order.asset.name !== undefined ? {
                set: item.order.asset.name
              } : undefined,
            type: item.order.asset.type !== undefined ? {
                set: item.order.asset.type
              } : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? {
                set: item.order.asset.logoUrl
              } : undefined,
            description: item.order.asset.description !== undefined ? {
                set: item.order.asset.description
              } : undefined,
            cik: item.order.asset.cik !== undefined ? {
                set: item.order.asset.cik
              } : undefined,
            exchange: item.order.asset.exchange !== undefined ? {
                set: item.order.asset.exchange
              } : undefined,
            currency: item.order.asset.currency !== undefined ? {
                set: item.order.asset.currency
              } : undefined,
            country: item.order.asset.country !== undefined ? {
                set: item.order.asset.country
              } : undefined,
            sector: item.order.asset.sector !== undefined ? {
                set: item.order.asset.sector
              } : undefined,
            industry: item.order.asset.industry !== undefined ? {
                set: item.order.asset.industry
              } : undefined,
            address: item.order.asset.address !== undefined ? {
                set: item.order.asset.address
              } : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? {
                set: item.order.asset.officialSite
              } : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? {
                set: item.order.asset.fiscalYearEnd
              } : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? {
                set: item.order.asset.latestQuarter
              } : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? {
                set: item.order.asset.marketCapitalization
              } : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? {
                set: item.order.asset.ebitda
              } : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? {
                set: item.order.asset.peRatio
              } : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? {
                set: item.order.asset.pegRatio
              } : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? {
                set: item.order.asset.bookValue
              } : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? {
                set: item.order.asset.dividendPerShare
              } : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? {
                set: item.order.asset.dividendYield
              } : undefined,
            eps: item.order.asset.eps !== undefined ? {
                set: item.order.asset.eps
              } : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? {
                set: item.order.asset.revenuePerShareTTM
              } : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? {
                set: item.order.asset.profitMargin
              } : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? {
                set: item.order.asset.operatingMarginTTM
              } : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? {
                set: item.order.asset.returnOnAssetsTTM
              } : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? {
                set: item.order.asset.returnOnEquityTTM
              } : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? {
                set: item.order.asset.revenueTTM
              } : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? {
                set: item.order.asset.grossProfitTTM
              } : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? {
                set: item.order.asset.dilutedEPSTTM
              } : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: item.order.asset.quarterlyEarningsGrowthYOY
              } : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: item.order.asset.quarterlyRevenueGrowthYOY
              } : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? {
                set: item.order.asset.analystTargetPrice
              } : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? {
                set: item.order.asset.analystRatingStrongBuy
              } : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? {
                set: item.order.asset.analystRatingBuy
              } : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? {
                set: item.order.asset.analystRatingHold
              } : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? {
                set: item.order.asset.analystRatingSell
              } : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? {
                set: item.order.asset.analystRatingStrongSell
              } : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? {
                set: item.order.asset.trailingPE
              } : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? {
                set: item.order.asset.forwardPE
              } : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? {
                set: item.order.asset.priceToSalesRatioTTM
              } : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? {
                set: item.order.asset.priceToBookRatio
              } : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? {
                set: item.order.asset.evToRevenue
              } : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? {
                set: item.order.asset.evToEbitda
              } : undefined,
            beta: item.order.asset.beta !== undefined ? {
                set: item.order.asset.beta
              } : undefined,
            week52High: item.order.asset.week52High !== undefined ? {
                set: item.order.asset.week52High
              } : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? {
                set: item.order.asset.week52Low
              } : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? {
                set: item.order.asset.day50MovingAverage
              } : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? {
                set: item.order.asset.day200MovingAverage
              } : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? {
                set: item.order.asset.sharesOutstanding
              } : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? {
                set: item.order.asset.dividendDate
              } : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? {
                set: item.order.asset.exDividendDate
              } : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? {
                set: item.order.asset.askPrice
              } : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? {
                set: item.order.asset.bidPrice
              } : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.order.contract ? 
      typeof item.order.contract === 'object' && Object.keys(item.order.contract).length === 1 && (Object.keys(item.order.contract)[0] === 'id' || Object.keys(item.order.contract)[0] === 'symbol')
? {
      connect: {
        id: item.order.contract.id
      }
} : { upsert: {
          where: {
            id: item.order.contract.id !== undefined ? {
                equals: item.order.contract.id
              } : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? {
                equals: item.order.contract.alpacaId
              } : undefined,
            symbol: item.order.contract.symbol !== undefined ? {
                equals: item.order.contract.symbol
              } : undefined,
            name: item.order.contract.name !== undefined ? {
                equals: item.order.contract.name
              } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                equals: item.order.contract.underlyingAssetId
              } : undefined,
            assetId: item.order.contract.assetId !== undefined ? {
                equals: item.order.contract.assetId
              } : undefined,
            orderId: item.order.contract.orderId !== undefined ? {
                equals: item.order.contract.orderId
              } : undefined,
          },
          update: {
            id: item.order.contract.id !== undefined ? {
                set: item.order.contract.id
              } : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? {
                set: item.order.contract.alpacaId
              } : undefined,
            symbol: item.order.contract.symbol !== undefined ? {
                set: item.order.contract.symbol
              } : undefined,
            name: item.order.contract.name !== undefined ? {
                set: item.order.contract.name
              } : undefined,
            status: item.order.contract.status !== undefined ? {
                set: item.order.contract.status
              } : undefined,
            tradable: item.order.contract.tradable !== undefined ? {
                set: item.order.contract.tradable
              } : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? {
                set: item.order.contract.expirationDate
              } : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? {
                set: item.order.contract.rootSymbol
              } : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? {
                set: item.order.contract.underlyingSymbol
              } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                set: item.order.contract.underlyingAssetId
              } : undefined,
            type: item.order.contract.type !== undefined ? {
                set: item.order.contract.type
              } : undefined,
            style: item.order.contract.style !== undefined ? {
                set: item.order.contract.style
              } : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? {
                set: item.order.contract.strikePrice
              } : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? {
                set: item.order.contract.multiplier
              } : undefined,
            size: item.order.contract.size !== undefined ? {
                set: item.order.contract.size
              } : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? {
                set: item.order.contract.openInterest
              } : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? {
                set: item.order.contract.openInterestDate
              } : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? {
                set: item.order.contract.closePrice
              } : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? {
                set: item.order.contract.closePriceDate
              } : undefined,
            ppind: item.order.contract.ppind !== undefined ? {
                set: item.order.contract.ppind
              } : undefined,
            orderId: item.order.contract.orderId !== undefined ? {
                set: item.order.contract.orderId
              } : undefined,
          },
          create: {
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? item.order.contract.name : undefined,
            status: item.order.contract.status !== undefined ? item.order.contract.status : undefined,
            tradable: item.order.contract.tradable !== undefined ? item.order.contract.tradable : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? item.order.contract.expirationDate : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? item.order.contract.rootSymbol : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? item.order.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? item.order.contract.underlyingAssetId : undefined,
            type: item.order.contract.type !== undefined ? item.order.contract.type : undefined,
            style: item.order.contract.style !== undefined ? item.order.contract.style : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? item.order.contract.strikePrice : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? item.order.contract.multiplier : undefined,
            size: item.order.contract.size !== undefined ? item.order.contract.size : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? item.order.contract.openInterest : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? item.order.contract.openInterestDate : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? item.order.contract.closePrice : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? item.order.contract.closePriceDate : undefined,
            ppind: item.order.contract.ppind !== undefined ? item.order.contract.ppind : undefined,
            orderId: item.order.contract.orderId !== undefined ? item.order.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
          failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
          replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
          replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
          replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
          positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
          legs: item.order.legs !== undefined ? item.order.legs : undefined,
          hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
          subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
          source: item.order.source !== undefined ? item.order.source : undefined,
          expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? item.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? item.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.order.contract ? 
        typeof item.order.contract === 'object' && Object.keys(item.order.contract).length === 1 && Object.keys(item.order.contract)[0] === 'id'
    ? { connect: {
            id: item.order.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.contract.id !== undefined ? item.order.contract.id : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? {
                equals: item.order.contract.name 
               } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                equals: item.order.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? item.order.contract.name : undefined,
            status: item.order.contract.status !== undefined ? item.order.contract.status : undefined,
            tradable: item.order.contract.tradable !== undefined ? item.order.contract.tradable : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? item.order.contract.expirationDate : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? item.order.contract.rootSymbol : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? item.order.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? item.order.contract.underlyingAssetId : undefined,
            type: item.order.contract.type !== undefined ? item.order.contract.type : undefined,
            style: item.order.contract.style !== undefined ? item.order.contract.style : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? item.order.contract.strikePrice : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? item.order.contract.multiplier : undefined,
            size: item.order.contract.size !== undefined ? item.order.contract.size : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? item.order.contract.openInterest : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? item.order.contract.openInterestDate : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? item.order.contract.closePrice : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? item.order.contract.closePriceDate : undefined,
            ppind: item.order.contract.ppind !== undefined ? item.order.contract.ppind : undefined,
            orderId: item.order.contract.orderId !== undefined ? item.order.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
    order: item.order ? 
      typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
          id: item.order.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.order.id !== undefined ? item.order.id : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          contractId: item.order.contractId !== undefined ? item.order.contractId : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId 
             } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
          failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
          replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
          replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
          replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
          positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
          legs: item.order.legs !== undefined ? item.order.legs : undefined,
          hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
          subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
          source: item.order.source !== undefined ? item.order.source : undefined,
          expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? item.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? item.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.order.contract ? 
        typeof item.order.contract === 'object' && Object.keys(item.order.contract).length === 1 && Object.keys(item.order.contract)[0] === 'id'
    ? { connect: {
            id: item.order.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.contract.id !== undefined ? item.order.contract.id : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? {
                equals: item.order.contract.name 
               } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                equals: item.order.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? item.order.contract.name : undefined,
            status: item.order.contract.status !== undefined ? item.order.contract.status : undefined,
            tradable: item.order.contract.tradable !== undefined ? item.order.contract.tradable : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? item.order.contract.expirationDate : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? item.order.contract.rootSymbol : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? item.order.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? item.order.contract.underlyingAssetId : undefined,
            type: item.order.contract.type !== undefined ? item.order.contract.type : undefined,
            style: item.order.contract.style !== undefined ? item.order.contract.style : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? item.order.contract.strikePrice : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? item.order.contract.multiplier : undefined,
            size: item.order.contract.size !== undefined ? item.order.contract.size : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? item.order.contract.openInterest : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? item.order.contract.openInterestDate : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? item.order.contract.closePrice : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? item.order.contract.closePriceDate : undefined,
            ppind: item.order.contract.ppind !== undefined ? item.order.contract.ppind : undefined,
            orderId: item.order.contract.orderId !== undefined ? item.order.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
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
  async updateMany(props: TradeType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  symbol: prop.symbol !== undefined ? {
    equals: prop.symbol 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
            set: prop.alpacaAccountId 
           } : undefined,
  assetId: prop.assetId !== undefined ? {
            set: prop.assetId 
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
  symbol: prop.symbol !== undefined ? {
            set: prop.symbol 
           } : undefined,
  actions: prop.actions ? 
  Array.isArray(prop.actions) && prop.actions.length > 0 && prop.actions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.actions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.actions.map((item: any) => ({
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
        primary: item.primary !== undefined ? {
            set: item.primary
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
    order: item.order ? 
    typeof item.order === 'object' && Object.keys(item.order).length === 1 && (Object.keys(item.order)[0] === 'id' || Object.keys(item.order)[0] === 'symbol')
? {
    connect: {
      id: item.order.id
    }
} : { upsert: {
        where: {
          id: item.order.id !== undefined ? {
              equals: item.order.id
            } : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? {
              equals: item.order.clientOrderId
            } : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId
            } : undefined,
          assetId: item.order.assetId !== undefined ? {
              equals: item.order.assetId
            } : undefined,
          actionId: item.order.actionId !== undefined ? {
              equals: item.order.actionId
            } : undefined,
          stopLossId: item.order.stopLossId !== undefined ? {
              equals: item.order.stopLossId
            } : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? {
              equals: item.order.takeProfitId
            } : undefined,
          contractId: item.order.contractId !== undefined ? {
              equals: item.order.contractId
            } : undefined,
        },
        update: {
          id: item.order.id !== undefined ? {
              set: item.order.id
            } : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? {
              set: item.order.clientOrderId
            } : undefined,
          qty: item.order.qty !== undefined ? {
              set: item.order.qty
            } : undefined,
          notional: item.order.notional !== undefined ? {
              set: item.order.notional
            } : undefined,
          side: item.order.side !== undefined ? {
              set: item.order.side
            } : undefined,
          type: item.order.type !== undefined ? {
              set: item.order.type
            } : undefined,
          orderClass: item.order.orderClass !== undefined ? {
              set: item.order.orderClass
            } : undefined,
          timeInForce: item.order.timeInForce !== undefined ? {
              set: item.order.timeInForce
            } : undefined,
          limitPrice: item.order.limitPrice !== undefined ? {
              set: item.order.limitPrice
            } : undefined,
          stopPrice: item.order.stopPrice !== undefined ? {
              set: item.order.stopPrice
            } : undefined,
          trailPrice: item.order.trailPrice !== undefined ? {
              set: item.order.trailPrice
            } : undefined,
          trailPercent: item.order.trailPercent !== undefined ? {
              set: item.order.trailPercent
            } : undefined,
          extendedHours: item.order.extendedHours !== undefined ? {
              set: item.order.extendedHours
            } : undefined,
          status: item.order.status !== undefined ? {
              set: item.order.status
            } : undefined,
          submittedAt: item.order.submittedAt !== undefined ? {
              set: item.order.submittedAt
            } : undefined,
          filledAt: item.order.filledAt !== undefined ? {
              set: item.order.filledAt
            } : undefined,
          filledQty: item.order.filledQty !== undefined ? {
              set: item.order.filledQty
            } : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? {
              set: item.order.filledAvgPrice
            } : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? {
              set: item.order.cancelRequestedAt
            } : undefined,
          canceledAt: item.order.canceledAt !== undefined ? {
              set: item.order.canceledAt
            } : undefined,
          fee: item.order.fee !== undefined ? {
              set: item.order.fee
            } : undefined,
          strikePrice: item.order.strikePrice !== undefined ? {
              set: item.order.strikePrice
            } : undefined,
          expirationDate: item.order.expirationDate !== undefined ? {
              set: item.order.expirationDate
            } : undefined,
          expiredAt: item.order.expiredAt !== undefined ? {
              set: item.order.expiredAt
            } : undefined,
          failedAt: item.order.failedAt !== undefined ? {
              set: item.order.failedAt
            } : undefined,
          replacedAt: item.order.replacedAt !== undefined ? {
              set: item.order.replacedAt
            } : undefined,
          replacedBy: item.order.replacedBy !== undefined ? {
              set: item.order.replacedBy
            } : undefined,
          replaces: item.order.replaces !== undefined ? {
              set: item.order.replaces
            } : undefined,
          positionIntent: item.order.positionIntent !== undefined ? {
              set: item.order.positionIntent
            } : undefined,
          legs: item.order.legs !== undefined ? {
              set: item.order.legs
            } : undefined,
          hwm: item.order.hwm !== undefined ? {
              set: item.order.hwm
            } : undefined,
          subtag: item.order.subtag !== undefined ? {
              set: item.order.subtag
            } : undefined,
          source: item.order.source !== undefined ? {
              set: item.order.source
            } : undefined,
          expiresAt: item.order.expiresAt !== undefined ? {
              set: item.order.expiresAt
            } : undefined,
          optionType: item.order.optionType !== undefined ? {
              set: item.order.optionType
            } : undefined,
          stopLossId: item.order.stopLossId !== undefined ? {
              set: item.order.stopLossId
            } : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? {
              set: item.order.takeProfitId
            } : undefined,
      stopLoss: item.order.stopLoss ? 
      typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && (Object.keys(item.order.stopLoss)[0] === 'id' || Object.keys(item.order.stopLoss)[0] === 'symbol')
? {
      connect: {
        id: item.order.stopLoss.id
      }
} : { upsert: {
          where: {
            id: item.order.stopLoss.id !== undefined ? {
                equals: item.order.stopLoss.id
              } : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? {
                equals: item.order.stopLoss.orderId
              } : undefined,
          },
          update: {
            id: item.order.stopLoss.id !== undefined ? {
                set: item.order.stopLoss.id
              } : undefined,
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? {
                set: item.order.stopLoss.stopPrice
              } : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? {
                set: item.order.stopLoss.limitPrice
              } : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
      typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && (Object.keys(item.order.takeProfit)[0] === 'id' || Object.keys(item.order.takeProfit)[0] === 'symbol')
? {
      connect: {
        id: item.order.takeProfit.id
      }
} : { upsert: {
          where: {
            id: item.order.takeProfit.id !== undefined ? {
                equals: item.order.takeProfit.id
              } : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? {
                equals: item.order.takeProfit.orderId
              } : undefined,
          },
          update: {
            id: item.order.takeProfit.id !== undefined ? {
                set: item.order.takeProfit.id
              } : undefined,
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? {
                set: item.order.takeProfit.limitPrice
              } : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? {
                set: item.order.takeProfit.stopPrice
              } : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
      typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && (Object.keys(item.order.alpacaAccount)[0] === 'id' || Object.keys(item.order.alpacaAccount)[0] === 'symbol')
? {
      connect: {
        id: item.order.alpacaAccount.id
      }
} : { upsert: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? {
                equals: item.order.alpacaAccount.id
              } : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId
              } : undefined,
          },
          update: {
            id: item.order.alpacaAccount.id !== undefined ? {
                set: item.order.alpacaAccount.id
              } : undefined,
            type: item.order.alpacaAccount.type !== undefined ? {
                set: item.order.alpacaAccount.type
              } : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? {
                set: item.order.alpacaAccount.APIKey
              } : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? {
                set: item.order.alpacaAccount.APISecret
              } : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? {
                set: item.order.alpacaAccount.configuration
              } : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? {
                set: item.order.alpacaAccount.marketOpen
              } : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? {
                set: item.order.alpacaAccount.realTime
              } : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? {
                set: item.order.alpacaAccount.tradeAllocationPct
              } : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.order.alpacaAccount.minPercentageChange
              } : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.order.alpacaAccount.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? {
                set: item.order.alpacaAccount.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? {
                set: item.order.alpacaAccount.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? {
                set: item.order.alpacaAccount.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? {
                set: item.order.alpacaAccount.reducedPortfolioTrailPercent
              } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? item.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? item.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
      typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && (Object.keys(item.order.asset)[0] === 'id' || Object.keys(item.order.asset)[0] === 'symbol')
? {
      connect: {
        id: item.order.asset.id
      }
} : { upsert: {
          where: {
            id: item.order.asset.id !== undefined ? {
                equals: item.order.asset.id
              } : undefined,
            symbol: item.order.asset.symbol !== undefined ? {
                equals: item.order.asset.symbol
              } : undefined,
            name: item.order.asset.name !== undefined ? {
                equals: item.order.asset.name
              } : undefined,
          },
          update: {
            id: item.order.asset.id !== undefined ? {
                set: item.order.asset.id
              } : undefined,
            symbol: item.order.asset.symbol !== undefined ? {
                set: item.order.asset.symbol
              } : undefined,
            name: item.order.asset.name !== undefined ? {
                set: item.order.asset.name
              } : undefined,
            type: item.order.asset.type !== undefined ? {
                set: item.order.asset.type
              } : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? {
                set: item.order.asset.logoUrl
              } : undefined,
            description: item.order.asset.description !== undefined ? {
                set: item.order.asset.description
              } : undefined,
            cik: item.order.asset.cik !== undefined ? {
                set: item.order.asset.cik
              } : undefined,
            exchange: item.order.asset.exchange !== undefined ? {
                set: item.order.asset.exchange
              } : undefined,
            currency: item.order.asset.currency !== undefined ? {
                set: item.order.asset.currency
              } : undefined,
            country: item.order.asset.country !== undefined ? {
                set: item.order.asset.country
              } : undefined,
            sector: item.order.asset.sector !== undefined ? {
                set: item.order.asset.sector
              } : undefined,
            industry: item.order.asset.industry !== undefined ? {
                set: item.order.asset.industry
              } : undefined,
            address: item.order.asset.address !== undefined ? {
                set: item.order.asset.address
              } : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? {
                set: item.order.asset.officialSite
              } : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? {
                set: item.order.asset.fiscalYearEnd
              } : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? {
                set: item.order.asset.latestQuarter
              } : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? {
                set: item.order.asset.marketCapitalization
              } : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? {
                set: item.order.asset.ebitda
              } : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? {
                set: item.order.asset.peRatio
              } : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? {
                set: item.order.asset.pegRatio
              } : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? {
                set: item.order.asset.bookValue
              } : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? {
                set: item.order.asset.dividendPerShare
              } : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? {
                set: item.order.asset.dividendYield
              } : undefined,
            eps: item.order.asset.eps !== undefined ? {
                set: item.order.asset.eps
              } : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? {
                set: item.order.asset.revenuePerShareTTM
              } : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? {
                set: item.order.asset.profitMargin
              } : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? {
                set: item.order.asset.operatingMarginTTM
              } : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? {
                set: item.order.asset.returnOnAssetsTTM
              } : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? {
                set: item.order.asset.returnOnEquityTTM
              } : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? {
                set: item.order.asset.revenueTTM
              } : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? {
                set: item.order.asset.grossProfitTTM
              } : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? {
                set: item.order.asset.dilutedEPSTTM
              } : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: item.order.asset.quarterlyEarningsGrowthYOY
              } : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: item.order.asset.quarterlyRevenueGrowthYOY
              } : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? {
                set: item.order.asset.analystTargetPrice
              } : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? {
                set: item.order.asset.analystRatingStrongBuy
              } : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? {
                set: item.order.asset.analystRatingBuy
              } : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? {
                set: item.order.asset.analystRatingHold
              } : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? {
                set: item.order.asset.analystRatingSell
              } : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? {
                set: item.order.asset.analystRatingStrongSell
              } : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? {
                set: item.order.asset.trailingPE
              } : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? {
                set: item.order.asset.forwardPE
              } : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? {
                set: item.order.asset.priceToSalesRatioTTM
              } : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? {
                set: item.order.asset.priceToBookRatio
              } : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? {
                set: item.order.asset.evToRevenue
              } : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? {
                set: item.order.asset.evToEbitda
              } : undefined,
            beta: item.order.asset.beta !== undefined ? {
                set: item.order.asset.beta
              } : undefined,
            week52High: item.order.asset.week52High !== undefined ? {
                set: item.order.asset.week52High
              } : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? {
                set: item.order.asset.week52Low
              } : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? {
                set: item.order.asset.day50MovingAverage
              } : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? {
                set: item.order.asset.day200MovingAverage
              } : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? {
                set: item.order.asset.sharesOutstanding
              } : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? {
                set: item.order.asset.dividendDate
              } : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? {
                set: item.order.asset.exDividendDate
              } : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? {
                set: item.order.asset.askPrice
              } : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? {
                set: item.order.asset.bidPrice
              } : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.order.contract ? 
      typeof item.order.contract === 'object' && Object.keys(item.order.contract).length === 1 && (Object.keys(item.order.contract)[0] === 'id' || Object.keys(item.order.contract)[0] === 'symbol')
? {
      connect: {
        id: item.order.contract.id
      }
} : { upsert: {
          where: {
            id: item.order.contract.id !== undefined ? {
                equals: item.order.contract.id
              } : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? {
                equals: item.order.contract.alpacaId
              } : undefined,
            symbol: item.order.contract.symbol !== undefined ? {
                equals: item.order.contract.symbol
              } : undefined,
            name: item.order.contract.name !== undefined ? {
                equals: item.order.contract.name
              } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                equals: item.order.contract.underlyingAssetId
              } : undefined,
            assetId: item.order.contract.assetId !== undefined ? {
                equals: item.order.contract.assetId
              } : undefined,
            orderId: item.order.contract.orderId !== undefined ? {
                equals: item.order.contract.orderId
              } : undefined,
          },
          update: {
            id: item.order.contract.id !== undefined ? {
                set: item.order.contract.id
              } : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? {
                set: item.order.contract.alpacaId
              } : undefined,
            symbol: item.order.contract.symbol !== undefined ? {
                set: item.order.contract.symbol
              } : undefined,
            name: item.order.contract.name !== undefined ? {
                set: item.order.contract.name
              } : undefined,
            status: item.order.contract.status !== undefined ? {
                set: item.order.contract.status
              } : undefined,
            tradable: item.order.contract.tradable !== undefined ? {
                set: item.order.contract.tradable
              } : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? {
                set: item.order.contract.expirationDate
              } : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? {
                set: item.order.contract.rootSymbol
              } : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? {
                set: item.order.contract.underlyingSymbol
              } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                set: item.order.contract.underlyingAssetId
              } : undefined,
            type: item.order.contract.type !== undefined ? {
                set: item.order.contract.type
              } : undefined,
            style: item.order.contract.style !== undefined ? {
                set: item.order.contract.style
              } : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? {
                set: item.order.contract.strikePrice
              } : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? {
                set: item.order.contract.multiplier
              } : undefined,
            size: item.order.contract.size !== undefined ? {
                set: item.order.contract.size
              } : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? {
                set: item.order.contract.openInterest
              } : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? {
                set: item.order.contract.openInterestDate
              } : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? {
                set: item.order.contract.closePrice
              } : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? {
                set: item.order.contract.closePriceDate
              } : undefined,
            ppind: item.order.contract.ppind !== undefined ? {
                set: item.order.contract.ppind
              } : undefined,
            orderId: item.order.contract.orderId !== undefined ? {
                set: item.order.contract.orderId
              } : undefined,
          },
          create: {
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? item.order.contract.name : undefined,
            status: item.order.contract.status !== undefined ? item.order.contract.status : undefined,
            tradable: item.order.contract.tradable !== undefined ? item.order.contract.tradable : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? item.order.contract.expirationDate : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? item.order.contract.rootSymbol : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? item.order.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? item.order.contract.underlyingAssetId : undefined,
            type: item.order.contract.type !== undefined ? item.order.contract.type : undefined,
            style: item.order.contract.style !== undefined ? item.order.contract.style : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? item.order.contract.strikePrice : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? item.order.contract.multiplier : undefined,
            size: item.order.contract.size !== undefined ? item.order.contract.size : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? item.order.contract.openInterest : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? item.order.contract.openInterestDate : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? item.order.contract.closePrice : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? item.order.contract.closePriceDate : undefined,
            ppind: item.order.contract.ppind !== undefined ? item.order.contract.ppind : undefined,
            orderId: item.order.contract.orderId !== undefined ? item.order.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
          failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
          replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
          replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
          replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
          positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
          legs: item.order.legs !== undefined ? item.order.legs : undefined,
          hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
          subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
          source: item.order.source !== undefined ? item.order.source : undefined,
          expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? item.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? item.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.order.contract ? 
        typeof item.order.contract === 'object' && Object.keys(item.order.contract).length === 1 && Object.keys(item.order.contract)[0] === 'id'
    ? { connect: {
            id: item.order.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.contract.id !== undefined ? item.order.contract.id : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? {
                equals: item.order.contract.name 
               } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                equals: item.order.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? item.order.contract.name : undefined,
            status: item.order.contract.status !== undefined ? item.order.contract.status : undefined,
            tradable: item.order.contract.tradable !== undefined ? item.order.contract.tradable : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? item.order.contract.expirationDate : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? item.order.contract.rootSymbol : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? item.order.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? item.order.contract.underlyingAssetId : undefined,
            type: item.order.contract.type !== undefined ? item.order.contract.type : undefined,
            style: item.order.contract.style !== undefined ? item.order.contract.style : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? item.order.contract.strikePrice : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? item.order.contract.multiplier : undefined,
            size: item.order.contract.size !== undefined ? item.order.contract.size : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? item.order.contract.openInterest : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? item.order.contract.openInterestDate : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? item.order.contract.closePrice : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? item.order.contract.closePriceDate : undefined,
            ppind: item.order.contract.ppind !== undefined ? item.order.contract.ppind : undefined,
            orderId: item.order.contract.orderId !== undefined ? item.order.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
    order: item.order ? 
      typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
          id: item.order.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.order.id !== undefined ? item.order.id : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          contractId: item.order.contractId !== undefined ? item.order.contractId : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId 
             } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          expiredAt: item.order.expiredAt !== undefined ? item.order.expiredAt : undefined,
          failedAt: item.order.failedAt !== undefined ? item.order.failedAt : undefined,
          replacedAt: item.order.replacedAt !== undefined ? item.order.replacedAt : undefined,
          replacedBy: item.order.replacedBy !== undefined ? item.order.replacedBy : undefined,
          replaces: item.order.replaces !== undefined ? item.order.replaces : undefined,
          positionIntent: item.order.positionIntent !== undefined ? item.order.positionIntent : undefined,
          legs: item.order.legs !== undefined ? item.order.legs : undefined,
          hwm: item.order.hwm !== undefined ? item.order.hwm : undefined,
          subtag: item.order.subtag !== undefined ? item.order.subtag : undefined,
          source: item.order.source !== undefined ? item.order.source : undefined,
          expiresAt: item.order.expiresAt !== undefined ? item.order.expiresAt : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            realTime: item.order.alpacaAccount.realTime !== undefined ? item.order.alpacaAccount.realTime : undefined,
            tradeAllocationPct: item.order.alpacaAccount.tradeAllocationPct !== undefined ? item.order.alpacaAccount.tradeAllocationPct : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.order.alpacaAccount.enablePortfolioTrailingStop !== undefined ? item.order.alpacaAccount.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.order.alpacaAccount.portfolioTrailPercent !== undefined ? item.order.alpacaAccount.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.order.alpacaAccount.portfolioProfitThresholdPercent !== undefined ? item.order.alpacaAccount.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.order.alpacaAccount.reducedPortfolioTrailPercent !== undefined ? item.order.alpacaAccount.reducedPortfolioTrailPercent : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      contract: item.order.contract ? 
        typeof item.order.contract === 'object' && Object.keys(item.order.contract).length === 1 && Object.keys(item.order.contract)[0] === 'id'
    ? { connect: {
            id: item.order.contract.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.contract.id !== undefined ? item.order.contract.id : undefined,
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? {
                equals: item.order.contract.name 
               } : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? {
                equals: item.order.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.order.contract.alpacaId !== undefined ? item.order.contract.alpacaId : undefined,
            symbol: item.order.contract.symbol !== undefined ? item.order.contract.symbol : undefined,
            name: item.order.contract.name !== undefined ? item.order.contract.name : undefined,
            status: item.order.contract.status !== undefined ? item.order.contract.status : undefined,
            tradable: item.order.contract.tradable !== undefined ? item.order.contract.tradable : undefined,
            expirationDate: item.order.contract.expirationDate !== undefined ? item.order.contract.expirationDate : undefined,
            rootSymbol: item.order.contract.rootSymbol !== undefined ? item.order.contract.rootSymbol : undefined,
            underlyingSymbol: item.order.contract.underlyingSymbol !== undefined ? item.order.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.order.contract.underlyingAssetId !== undefined ? item.order.contract.underlyingAssetId : undefined,
            type: item.order.contract.type !== undefined ? item.order.contract.type : undefined,
            style: item.order.contract.style !== undefined ? item.order.contract.style : undefined,
            strikePrice: item.order.contract.strikePrice !== undefined ? item.order.contract.strikePrice : undefined,
            multiplier: item.order.contract.multiplier !== undefined ? item.order.contract.multiplier : undefined,
            size: item.order.contract.size !== undefined ? item.order.contract.size : undefined,
            openInterest: item.order.contract.openInterest !== undefined ? item.order.contract.openInterest : undefined,
            openInterestDate: item.order.contract.openInterestDate !== undefined ? item.order.contract.openInterestDate : undefined,
            closePrice: item.order.contract.closePrice !== undefined ? item.order.contract.closePrice : undefined,
            closePriceDate: item.order.contract.closePriceDate !== undefined ? item.order.contract.closePriceDate : undefined,
            ppind: item.order.contract.ppind !== undefined ? item.order.contract.ppind : undefined,
            orderId: item.order.contract.orderId !== undefined ? item.order.contract.orderId : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
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
  async delete(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  async get(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getTrade ?? null;
    } catch (error: any) {
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
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    } catch (error: any) {
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
  async findMany(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
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
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No Trade found') {
        return null;
      } else {
        console.error('Error in getTrade:', error);
        throw error;
      }
    }
  }
};
